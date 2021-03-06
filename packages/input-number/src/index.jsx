import { InputNumber } from "element-ui";

const attributesDefault = {
  precision: 0,
  min: 0,
  step: 1,
  placeholder: "请输入",
  controls: true,
  disabled: false,
};
export default {
  name: "IrdInputNumber",
  components: {
    [InputNumber.name]: InputNumber,
  },
  data() {
    return {};
  },
  props: {
    attr: {
      type: Object,
      default() {
        return { ...attributesDefault };
      },
    },
    event: {
      type: Object,
    },
    styles: { type: String, default: "width:100%" },
    value: { type: [Number, String], default: undefined },
    label: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
      this.$emit("change", val);
    },
    prependTitle() {
      const item = this.label.find((item = {}) => item.align === "left");
      return (
        item && (
          <div class="el-input-group__prepend custom_prepend">{item.text}</div>
        )
      );
    },
    appendTitle() {
      const item = this.label.find((item = {}) => item.align === "right");
      return (
        item && (
          <div class="el-input-group__append custom_append">{item.text}</div>
        )
      );
    },
    handleClass() {
      const { label } = this;
      if (label.length === 1) {
        if (label[0].align === "left")
          return "input_number_text_left input_border_left_none";
        if (label[0].align === "right")
          return "input_number_text_left input_border_right_none";
      }
      if (label.length === 2) {
        if (
          label[1].align !== label[0].align &&
          ["left", "right"].includes(label[0].align) &&
          ["left", "right"].includes(label[1].align)
        ) {
          return "input_number_text_left input_border_none";
        }
      }
      return "input_number_text_left";
    },
  },
  computed: {
    irdSize() {
      return this.size || this.$IRDD?.size;
    },
    modelValue: {
      get() {
        return this.value === null ? undefined : this.value;
      },
      set(val) {
        this.value = val;
      },
    },
  },
  watch: {},
  render() {
    const { styles, modelValue, attr, event } = this;
    return (
      <div class={"irdd_input-number"}>
        <div
          class={`ird-design_input-number  ${
            attr.align ? "input_number_text_center" : ""
          } ${this.irdSize ? "ird-design_input-number--" + this.irdSize : ""}`}
        >
          {this.prependTitle()}
          <el-input-number
            {...{
              class: this.handleClass(),
              style: styles,
              props: {
                size: this.irdSize,
                value: modelValue,
                ...attributesDefault,
                ...attr,
              },
              on: {
                ...event,
                input: this.handleInput,
              },
            }}
          />
          {this.appendTitle()}
        </div>
      </div>
    );
  },
};
