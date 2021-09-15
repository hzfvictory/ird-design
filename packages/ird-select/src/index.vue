<template>
  <el-select
    v-bind="[$props, delProps]"
    :size="irdSize"
    :style="styles"
    :collapse-tags="collapse || collapseTags"
    :disabled="disAll || disabled"
    @focus="focus"
    @change="change"
    @input="input($event)"
  >
    <el-option
      v-for="(item, index) of data"
      :disabled="
        typeof item.disabled === 'boolean'
          ? item.disabled
          : item[type['id']] === disId
      "
      :label="item[type['name']]"
      :value="item[type['id']]"
      :key="item[type['id']] + '--' + index"
    >
      {{ renderLabel(item[type["id"]], item[type["name"]], keyValue) }}
    </el-option>
  </el-select>
</template>

<script>
  import { Select, Option } from "element-ui";

  export default {
    name: "IrdSelect",
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
    },
    props: {
      ...Select.props,
      value: [String, Number, Array],
      clearable: {
        type: Boolean,
        default: true,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      collapse: {
        type: Boolean,
        default: false,
      },
      collapseTags: {
        type: Boolean,
        default: false,
      },
      filterable: {
        type: Boolean,
        default: true,
      },
      reserveKeyword: {
        type: Boolean,
        default: true,
      },
      keyValue: {
        type: Boolean,
        default: true,
      },
      disId: [String, Number], // 当传进来ID跟当前ID相等 禁止选择
      disAll: [Boolean], // 禁用
      disabled: [Boolean], // 禁用
      type: {
        // 数据的键值
        type: Object,
        default() {
          return {
            name: "name",
            id: "id",
          };
        },
      },
      data: Array,
      placeholder: {
        type: String,
        default: "全部",
      },
      styles: {
        type: Object,
        default() {
          return {
            width: "161px",
          };
        },
      },
    },
    computed: {
      delProps() {
        let ary = {};
        let delAry = ["data", "type", "styles"];
        delAry.forEach((key) => {
          ary[key] = null;
        });
        return ary;
      },
      irdSize() {
        return this.size || this.$IRDD?.size;
      },
    },
    methods: {
      renderLabel(id, val, all) {
        if (all) {
          return id + "一" + val;
        }
        return val;
      },
      input(val) {
        this.$emit("input", val);
      },
      focus(ev) {
        this.$emit("onFocus", ev); // 历史遗留
        this.$emit("focus", ev);
      },
      change(val) {
        this.$emit("onChange", val); // 历史遗留
        this.$emit("change", val);
      },
    },
  };
</script>
