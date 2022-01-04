<template>
  <el-dialog
    :visible.sync="visible"
    v-bind="[$props, delProps]"
    v-on="handleEvents"
  >
    <span slot="title" v-if="$slots.title">
      <slot name="title"></slot>
    </span>

    <slot></slot>

    <span slot="footer" v-if="!$slots.footer">
      <el-button @click="qualityDialogClose" :size="irdSize">取 消</el-button>
      <el-button type="primary" @click="closeDialog" :size="irdSize">
        确 定
      </el-button>
    </span>
    <template slot="footer" v-else>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
  import { Dialog, Button } from "element-ui";

  export default {
    name: "IrdModal",
    components: {
      [Dialog.name]: Dialog,
      [Button.name]: Button,
    },
    props: {
      ...Dialog.props,
      modalVisible: {
        type: Boolean,
        default: false,
      },
      width: {
        type: String,
        default: "70%",
      },
      beforeModalClose: {
        // 这个dialog 自带，封装的时候没发现
        type: Function,
        default: () => {},
      },
    },
    computed: {
      visible: {
        get() {
          return this.modalVisible;
        },
        set() {
          this.$emit("update:modalVisible", false);
        },
      },
      irdSize() {
        return this.size || this.$IRDD?.size;
      },
      delProps() {
        let ary = {};
        let delAry = ["beforemodalclose", "styles"];
        delAry.forEach((key) => {
          ary[key] = null;
        });
        return ary;
      },
      handleEvents() {
        let events = this._events;
        let handleEvents = {};
        for (let key in events) {
          if (["open", "opened", "close", "closed"].includes(key)) {
            handleEvents[key] = events[key];
          }
        }
        return handleEvents || {};
      },
    },
    methods: {
      qualityDialogClose() {
        this.$emit("update:modalVisible", false);
      },
      changeModalVisible() {
        this.$emit("dialogClose");
        this.$emit("update:modalVisible", false);
      },
      closeDialog() {
        const before = this.beforeModalClose();
        if (before && before.then) {
          // Promise 执行后才会进入 beforeModalClose 方法，不执行到此终止
          before.then(() => {
            this.$emit("update:modalVisible", false);
          });
        } else if (typeof this.beforeClose === "function") {
          this.beforeClose(this.changeModalVisible);
        } else {
          this.changeModalVisible();
        }
      },
    },
  };
</script>
