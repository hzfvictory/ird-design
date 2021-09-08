<template>
  <button
    @click="handleClick"
    :class="classButotn"
    :disabled="disabled || loading"
  >
    <i class="ird-icon-loading" v-if="loading" />
    <i v-if="icon && !loading" :class="icon" />
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  import { oneOf, prefixCls } from "@/utils/assist";

  export default {
    name: "IrdButton",
    inject: {
      irdForm: {
        default: "",
      },
      irdFormItem: {
        default: "",
      },
    },
    data() {
      return {
        preCls: `${prefixCls}-button`,
      };
    },
    props: {
      disabled: Boolean,
      loading: Boolean,
      icon: String,
      circle: Boolean,
      type: {
        type: String,
        default: "default",
        validator(value) {
          let types = [
            "default",
            "primary",
            "success",
            "warning",
            "danger",
            "info",
            "text",
          ];
          return oneOf(value, types);
        },
      },
      size: {
        type: String,
        default: "",
        validator(value) {
          let types = ["large", "medium", "small", "mini"];
          return oneOf(value, types);
        },
      },
      long: Boolean,
      round: Boolean,
      to: {
        type: [String, Object],
      },
      replace: Boolean,
      plain: Boolean,
      target: {
        type: String,
        default: "",
        validator(value) {
          let types = ["_blank"];
          return types.includes(value) || !value;
        },
      },
    },
    computed: {
      classButotn() {
        let {
          preCls,
          type,
          round,
          circle,
          long,
          plain,
          loading,
          disabled,
          buttonSize,
        } = this;
        return [
          `${preCls}`,
          {
            [`${preCls}--${type}`]: !!type,
            [`${preCls}--${buttonSize}`]: !!buttonSize,
            [`is-long`]: !!long,
            [`is-round`]: !!round,
            [`is-circle`]: !!circle,
            [`is-plain`]: !!plain,
            [`is-loading`]: !!loading,
            [`is-disabled`]: !!disabled,
          },
        ];
      },
      _irdFormItemSize() {
        return this.irdFormItem?.irdFormItemSize;
      },
      buttonSize() {
        return this.size || this._irdFormItemSize || this.$IRDD?.size;
      },
    },
    methods: {
      handleClick(ev) {
        ev.preventDefault();
        let { to, replace, target } = this;
        if (to) {
          if (typeof to === "object") {
            const router = this.$router;
            const current = this.$route;
            const route = router.resolve(to, current);
            to = route ? route.href : to;
          }
          replace
            ? this.$router.replace(to)
            : target === "_blank"
            ? window.open(to)
            : this.$router.push(to);
        }
        this.$emit("click", ev);
      },
    },
  };
</script>
