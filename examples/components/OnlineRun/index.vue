<template>
  <div class="online-run">
    <div class="codemirror-head">
      <ird-button icon="ird-icon-play" size="small" @click="handleRun">
        运行
      </ird-button>
      <ird-button
        icon="ird-icon-refresh"
        size="small"
        style="margin-left: 20px"
        @click="handleReset"
      >
        重置
      </ird-button>
    </div>

    <div class="main">
      <spilt-code v-model="split">
        <codemirror
          slot="left"
          v-model="code"
          :options="options"
          ref="myCode"
        />
        <div slot="right" id="show-el"></div>
      </spilt-code>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  // codemirror相关
  import { codemirror } from "vue-codemirror";
  import "./codeMirror";
  import codeDefault from "./codeMirror/codeDefault.js";
  import SpiltCode from "./spilt.vue";
  import { getSource } from "doc/utils/utils";

  export default {
    name: "OnlineRun",
    components: {
      codemirror,
      SpiltCode,
    },
    data() {
      return {
        code: codeDefault,
        split: 0.4,
        mountEl: "", // 展示容器
        options: {
          mode: "vue", // 代码类型
          lineNumbers: true, // 显示行数
          autoCloseBrackets: true,
          matchBrackets: true, // 括号匹配
          autoCloseTags: true,
          showCursorWhenSelecting: true, // 选择是否处于活动状态时是否应绘制光标
          tabSize: 4, // 制表符的宽度
          // theme: 'base16-dark',
          foldGutter: true, // 折叠代码
          gutters: [
            // 折可用于添加额外的排水沟
            "CodeMirror-linenumbers",
            "CodeMirror-foldgutter",
            "CodeMirror-lint-markers",
          ],
          autofocus: true, // 可用于使CodeMirror将焦点集中在初始化上
          styleActiveLine: true,
        },
        uuid: 1,
        userCode: {
          template: "",
          script: "",
          style: "",
          uuid: 0,
          component: null,
        },
      };
    },
    methods: {
      // 运行代码
      handleRun() {
        this.unMountUserCode(); // 卸载
        this.splitCode(); // 拼接代码
        this.mountUserCode(); // 挂载
      },
      // 重置
      handleReset() {
        this.code = codeDefault;
        this.unMountUserCode();
      },
      // 卸载
      unMountUserCode() {
        if (this.userCode.component) {
          this.mountEl.removeChild(this.userCode.component.$el);
          this.userCode.component.$destroy();
          this.userCode.component = null;
        }
        // 清除样式
        let userStyle = document.getElementById(this.userCode.uuid);
        if (userStyle) document.head.removeChild(userStyle);
      },
      splitCode() {
        this.userCode.template = getSource(this.code, "template");
        this.userCode.style = getSource(this.code, "style");
        this.userCode.script =
          getSource(this.code, "script").replace(/export default/, "return ") ||
          `return  {}`; // 防止没有js代码导致的报错
      },
      // 挂载
      mountUserCode() {
        this.userCode.uuid += 1;

        // 生成组件挂载
        const parseStrToObj = new Function(this.userCode.script)();
        parseStrToObj.template = this.userCode.template;
        let userCodeComponent = Vue.extend(parseStrToObj);
        this.userCode.component = new userCodeComponent().$mount();
        this.mountEl.appendChild(this.userCode.component.$el);
        // 添加样式
        if (this.userCode.css !== "") {
          let styleEl = document.createElement("style");
          styleEl.type = "text/css";
          styleEl.id = this.userCode.uuid;
          styleEl.innerHTML = this.userCode.style;
          document.head.appendChild(styleEl);
        }
      },
    },
    mounted() {
      this.mountEl = document.getElementById("show-el");
      // let code = this.$route.query.code;
      let code = this.$route.params.code || this.$route.query.code;
      if (code) {
        let _html = code;
        let firstCode = `<template>`;

        if (code.indexOf(firstCode) !== 0) {
          let index = 25;
          _html = codeDefault.slice(0, index) + code + codeDefault.slice(index);
        }
        this.code = _html;
      }

      this.handleRun();
      // 默认光标位置
      this.$refs.myCode.codemirror.setCursor({ ch: 7, line: 2 });
      // this.$refs.myCode.codemirror.replaceRange([1,23],pos2);
    },
    // 页面销毁必须销毁css 否则会导致样式全局污染
    beforeDestroy() {
      let userStyle = document.getElementById(this.userCode.uuid);
      if (userStyle) document.head.removeChild(userStyle);
    },
  };
</script>

<style lang="scss">
  @import "../../assets/styles/var";

  .online-run {
    position: absolute;
    width: 100%;
    background: white;
    z-index: 1000;

    .vue-codemirror,
    .CodeMirror {
      height: 100%;
    }

    .codemirror-head {
      display: flex;
      align-items: center;
      height: 70px;
      padding: 0 10px;
    }

    .main {
      border: 1px solid $border;
      height: calc(100vh - 80px);
      min-height: 800px;
    }

    /*    .cm-tag {
          color: $color-primary;
        }

        .cm-attribute {
          color: $color-danger;
        }

        .cm-string {
          color: $color-success;
        }

        .CodeMirror-line {
          color: $color-info;
        }

        .cm-property {
          color: $color-warning;
        }*/
  }
</style>
