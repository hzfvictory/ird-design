<template>
  <div :class="{ 'docs-demo-wrapper': true }">
    <div :class="['demo-block', blockClass]">
      <div class="source">
        <slot name="source"></slot>
      </div>
      <div
        :style="{ height: isExpand ? 'auto' : showHeight }"
        class="demo-container"
      >
        <div>
          <div class="docs-demo docs-demo--expand">
            <div
              class="description"
              ref="description"
              v-if="$slots.docs && isExpand"
            >
              <slot name="docs"></slot>
            </div>
            <div class="highlight-wrapper highlight">
              <div class="code-box-actions">
                <i
                  :class="!isExpand ? 'ird-icon-zitidaima' : 'ird-icon-library'"
                  @click="toggle"
                />
                <i
                  class="ird-icon-copy"
                  title="复制代码"
                  @click="copy($event, copyCode)"
                />
                <i
                  class="ird-icon-play"
                  title="在线预览"
                  @click="jumpRun(copyCode)"
                />
              </div>

              <div ref="code">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    <span class="docs-trans" @click="toggle" v-if="!isExpand">-->
    <!--      <i :class="!isExpand ? 'ird-icon-zitidaima' : 'ird-icon-library' "/>-->
    <!--      <i class='ird-icon-copy1' title="复制代码" @click.stop="copy($event,copyCode)"/>-->
    <!--      <i class='ird-icon-play_fill' title="在线预览" @click.stop="jumpRun(copyCode)"/>-->
    <!--    </span>-->

    <div v-if="!isExpand" class="mask-code" />
  </div>
</template>

<script>
  import { stripTemplate, stripScript, stripStyle } from "../utils/utils";

  export default {
    data() {
      return {
        copyCode: "",
        codepen: {
          // 在线运行
          html: "",
          script: "",
          style: "",
        },
        isExpand: false,
        showHeight: "62px",
      };
    },
    computed: {
      blockClass() {
        return `demo-${this.$router.currentRoute.path.split("/").pop()}`;
      },
    },
    created() {
      const highlight = this.$slots.default;
      if (highlight && highlight[0]) {
        let code = "";
        let cur = highlight[0];
        if (cur.tag === "pre" && cur.children && cur.children[0]) {
          cur = cur.children[0];
          if (cur.tag === "code") {
            code = cur.children[0].text;
          }
        }
        if (code) {
          this.codepen.html = stripTemplate(code);
          this.codepen.script = stripScript(code);
          this.codepen.style = stripStyle(code);
        }
      }
    },
    mounted() {
      this.copyCode = this.$refs.code.innerText;
      this.showHeight = this.$refs.description
        ? this.$refs.description.clientHeight + 22 + 62 + "px"
        : "62px";
    },
    methods: {
      toggle() {
        this.isExpand = !this.isExpand;
      },
      jumpRun(code) {
        this.$router.history.push({ name: "OnlineRun", params: { code } });
      },
    },
  };
</script>
