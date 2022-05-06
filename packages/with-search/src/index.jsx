import { Form, FormItem, DatePicker, Button, Input } from "element-ui";
import IrdSelect from "../../select";
import { handleFields } from "@/utils/index";
import qs from "querystring";

export default {
  name: "WithSearch",
  data() {
    let searchData = {};
    let resetSearchData = {}; // 重置的data
    const searchProps = this.searchProps || {}; // 兼容老版本
    const { fields = [] } = searchProps;

    let query = window.location.href.split("?")[1];
    let searchParams = {};

    if (this.roam) { // 开启数据漫游
      // let searchQuery = query ? qs.parse(query) : {};
      let searchQuery = query ? qs.parse(query) : {};
      searchParams = JSON.parse(searchQuery.searchParams || "{}") || {};
    }

    // 下面循环赋值的时候，一定要拷贝一份，不然响应的是之前的老数据
    fields.length &&
    [...searchProps.fields].map((item) => {
      searchData[item.key] = searchParams[item.key] || item.defaultValue || undefined;
      resetSearchData[item.key] = item.defaultValue || undefined;
    });

    return { searchData, resetSearchData, searchParams };
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
    roam: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleFields(key, options) { // 便于动态更改 `fields` 各项的数据
      return handleFields(this.searchProps.fields, key, options);
    },
    searchQuery() { // 获取query的数据
      return this.searchParams;
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
            {...{
              on: {
                ...item,
                change: (val) => this.changeFormDom(val, item),
              },
            }}

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
      if (this.roam) {
        // let form = qs.stringify(this.searchData); // 这种方案number直接转为string
        let form = qs.stringify({ searchParams: JSON.stringify(this.searchData) });
        window.history.pushState({ form }, form, window.location.href.split("?")[0] + `?${form}`);
      }
      onSearch && onSearch(this.searchData);
      // this.$emit('search', this.searchData)
    },
    handleReset() {
      const {
        searchProps: { onReset },
      } = this;
      // 这块不能使用resetFields()  原因是因为页面刷新后，参数漫游的数据就会变成默认数据
      this.roam ? this.searchData = { ...this.resetSearchData } : this.$refs["formData"].resetFields();
      this.$nextTick(() => {
        onReset && onReset();
        this.roam && window.history.pushState(null, null, window.location.href.split("?")[0]);
      });
    },
    handleClear() {
      const searchProps = this.searchProps || {};
      const { fields = [] } = searchProps;
      let resetSearchData = this.searchData;
      fields.length &&
      [...searchProps.fields].map((item) => {
        resetSearchData[item.key] = item.defaultValue || undefined;
      });
    },
    changeFormDom(val, item) {
      item.change && item.change(val);
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
                handleClear: this.handleClear,
                formData: this.searchData,
              })
              : this.typeSearchBtn()}
          </div>
        </el-form>
      </div>
    );
  },
};
