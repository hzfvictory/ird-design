import { Form, FormItem, DatePicker, Button, Input } from "element-ui";
import IrdSelect from "../../select";
import { handleFields } from "@/utils/index";

export default {
  name: "WithSearch",
  data() {
    let searchData = {};
    const searchProps = this.searchProps || {}; // 兼容老版本
    const { fields = [] } = searchProps;

    // 下面循环赋值的时候，一定要拷贝一份，不然响应的是之前的老数据
    fields.length &&
    [...searchProps.fields].map((item) => {
      searchData[item.key] = item.defaultValue || undefined;
    });
    return { searchData };
  },
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [DatePicker.name]: DatePicker,
    [Button.name]: Button,
    [Input.name]: Input,
    IrdSelect,
  },
  props: {
    size: {
      type: String,
      default: "",
    },
    searchProps: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  methods: {
    handleFields(key, options) {
     return handleFields(this.searchProps.fields, key, options);
    },
    typeInput(item) {
      // style={{display: item.hidden ? 'none' : 'inline-block'}}  只能用 display:none，v-if会导致表单重置失效
      return (
        <el-form-item
          prop={item.key}
          class={item.classes}
          style={{ display: item.hidden ? "none" : "inline-block" }}
        >
          {item.name !== false && <div class="prepend small">{item.name}</div>}
          <el-input
            v-model={this.searchData[item.key]}
            placeholder={item.placeholder || `请输入${item.name}`}
            disabled={item["disabled"]}
            clearable={item["clearable"] !== false}
            size={this.irdSize}
            style={{ width: "160px", ...item.styles }}
          />
        </el-form-item>
      );
    },
    typeSelect(item) {
      return (
        <el-form-item
          prop={item.key}
          class={[
            item.classes,
            {
              "link-form-select":
                item.enums && item.enums[0] && item.enums[0].link,
            },
          ]}
          style={{ display: item.hidden ? "none" : "inline-block" }}
        >
          {item.name !== false && <div class="prepend small">{item.name}</div>}
          <ird-select
            v-model={this.searchData[item.key]}
            type={item.enumType}
            data={item.enums}
            multiple={item.multiple}
            collapse={item.collapse}
            style={{
              width:
                item.enums && item.enums[0] && item.enums[0].link
                  ? "90px"
                  : "160px",
              ...item.styles,
            }}
            placeholder={item.placeholder || `全部`}
            key-value={item["key-value"]}
            clearable={item["clearable"] !== false}
            dis-all={item["disabled"]}
            filterable={item["filterable"]}
            onChange={(val) => this.changeFormDom(val, item)}
          />
        </el-form-item>
      );
    },
    typeDatePicker(item) {
      return (
        <el-form-item
          prop={item.key}
          class={item.classes}
          style={{ display: item.hidden ? "none" : "inline-block" }}
        >
          {item.name !== false && <div class="prepend small">{item.name}</div>}
          <el-date-picker
            size={this.irdSize}
            key={item.key + (item.dataType || item.dateType)}
            style={{ width: "220px", ...item.styles }}
            v-model={this.searchData[item.key]}
            type={item.dataType || item.dateType || "daterange"}
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            placeholder={"选择日期"}
            value-format="yyyy-MM-dd"
            picker-options={{ ...this.picker_options, ...item.pickerOptions }}
            disabled={item["disabled"]}
            clearable={item["clearable"] !== false}
          />
        </el-form-item>
      );
    },
    handleDom(item) {
      return {
        select: this.typeSelect(item),
        datePicker: this.typeDatePicker(item),
        default: this.typeInput(item),
      };
    },
    typeSearchBtn() {
      const {
        searchProps: { onReset, onSearch },
      } = this;
      const searchDom = (
        <el-button
          type="primary"
          size={this.irdSize}
          icon="el-icon-search"
          onClick={this.handleSearch}
        >
          查询
        </el-button>
      );
      const resetDom = (
        <el-button
          icon="el-icon-refresh"
          size={this.irdSize}
          onClick={this.handleReset}
        >
          重置
        </el-button>
      );
      return (
        <div>
          {onSearch && searchDom}
          {onReset && resetDom}
          {/*额外的操作按钮*/}
          {this.$slots.default}
        </div>
      );
    },
    handleSearch() {
      const {
        searchProps: { onSearch },
      } = this;
      onSearch && onSearch(this.searchData);
      // this.$emit('search', this.searchData)
    },
    handleReset() {
      const {
        searchProps: { onReset },
      } = this;
      this.$refs["formData"].resetFields();
      // this.searchData = {};
      this.$nextTick(() => {
        onReset && onReset();
      });
    },
    changeFormDom(val, item) {
      let enums = item.enums;
      if (!enums[0].link) return;
      for (let i = 0; i < enums.length; i++) {
        const { key, placeholder, resetValue } = enums[i].link;
        let fieldsItemData = this.searchProps.fields;
        let _index = fieldsItemData.findIndex((list) => list.key === key);
        fieldsItemData[_index].hidden = enums[i].id !== val;
        fieldsItemData[_index].placeholder = placeholder;

        // 处理class
        let classes = fieldsItemData[_index].classes;
        fieldsItemData[_index].classes = classes
          ? classes
          : "link-border-left-none";
        if (classes && !classes.includes("link-border-left-none")) {
          fieldsItemData[_index].classes += " link-border-left-none ";
        }

        if (resetValue) {
          this.searchData[fieldsItemData[_index].key] =
            fieldsItemData[_index].defaultValue;
        }
      }
    },
  },
  computed: {
    handlerSearchData() {
      this.searchProps.formData = this.searchData;
    },
    irdSize() {
      return this.size || this.$IRDD?.size;
    },
  },
  render() {
    const {
      searchProps: { fields, formData },
    } = this;
    if (formData) this.handlerSearchData;

    return (
      <div class="searchBox">
        <el-form
          {...{
            ref: "formData",
            props: {
              size: this.irdSize,
              "label-width": "85px",
              inline: true,
              model: this.searchData,
            },
          }}
        >
          {/*form表单*/}
          {fields.map((item) => {
            return this.handleDom(item)[item.type || "default"];
          })}

          {/* 操作按钮 */}
          <div class="searchBtn" style="float: right">
            {this.$scopedSlots.search
              ? this.$scopedSlots.search({
                handleSearch: this.handleSearch,
                handleReset: this.handleReset,
                formData: this.searchData,
              })
              : this.typeSearchBtn()}
          </div>
        </el-form>
      </div>
    );
  },
};
