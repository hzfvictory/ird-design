## WithSearch 搜索框组件

### 基础用法

::: template

```html
<template>
  <with-search :searchProps="searchProps">
    <ird-button style="margin-left: 10px" size="small">插槽</ird-button>
  </with-search>
</template>
<script>
  export default {
    data() {
      return {
        searchProps: {
          fields: [
            {
              key: "name",
              name: "应用名称",
            },
            {
              key: "system",
              name: "生效时间",
              type: "datePicker",
              pickerOptions: {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                },
              },
            },
            {
              key: "system",
              name: "单个时间",
              type: "datePicker",
              dataType: "date",
            },
          ],
          onSearch: this.handleSearch,
          onReset: this.handleReset,
          formData: {},
        },
      };
    },
    methods: {
      handleSearch() {
        console.log(this.searchProps.formData);
      },
      handleReset() {},
    },
  };
</script>
```

:::

### 插槽

::: template

```html
<template>
  <with-search :searchProps="searchProps">
    <template slot="search" slot-scope="scope">
      <ird-button
        type="primary"
        style="margin-left: 10px"
        size="small"
        @click="scope.handleReset"
      >
        自定义插槽
      </ird-button>
    </template>
  </with-search>
</template>
<script>
  const shortcuts = [
    {
      text: "最近7天",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
        picker.$emit("pick", [start, end]);
      },
    },
    {
      text: "最近15天",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 15);
        end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
        picker.$emit("pick", [start, end]);
      },
    },
    {
      text: "最近30天",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
        picker.$emit("pick", [start, end]);
      },
    },
  ];
  export default {
    data() {
      return {
        searchProps: {
          fields: [
            {
              key: "name",
              name: "应用名称",
            },
            {
              key: "mediaId",
              name: "字体图标",
              type: "select",
              enums: this.$icon,
              enumType: { id: "font_class", name: "name" },
              clearable: false,
              defaultValue: [],
            },
            {
              key: "system",
              name: "系统",
              type: "datePicker",
              pickerOptions: {
                shortcuts,
                disabledDate(time) {
                  return time.getTime() > Date.now();
                },
              },
            },
            {
              key: "status",
              name: "状态",
              type: "select",
              enums: [
                { label: "是", value: 1 },
                { label: "否", value: 0 },
              ],
              enumType: { id: "value", name: "label" },
            },
          ],
          onSearch: this.handleSearch,
          onReset: this.handleReset,
          formData: {},
        },
      };
    },
    methods: {
      handleSearch() {},
      handleReset() {},
    },
  };
</script>
```

:::

### 扩充组件

左侧 `label` 可支持切换右侧的控件

::: template 添加`enums`可使下拉框切换展示的控件， `link` 指向要展示的 from 组件，`link`里面的`key`指向控件的`key`，`resetValue`是否当前的控件切换后数据是否清除

```html
<template>
  <with-search :searchProps="searchProps" />
</template>
<script>
  export default {
    data() {
      return {
        searchProps: {
          fields: [
            {
              key: "name",
              name: "应用名称",
            },
            {
              key: "changetype",
              name: false,
              type: "select",
              enums: [
                {
                  id: 1,
                  name: "渠道",
                  link: {
                    key: "channelName",
                    placeholder: "全部渠道",
                    resetValue: true,
                  },
                },
                {
                  id: 2,
                  name: "渠道ID",
                  link: {
                    key: "channelId",
                    placeholder: "渠道号",
                  },
                },
              ],
              defaultValue: 1, // 对应展示的id
              clearable: false,
              filterable: false,
              "key-value": false,
            },
            {
              key: "channelName",
              name: false,
              type: "select",
              enums: this.$icon,
              enumType: { id: "font_class", name: "name" },
              placeholder: "全部渠道",
            },
            {
              key: "channelId",
              name: false,
              placeholder: "渠道号",
              hidden: true,
              defaultValue: "",
            },
          ],
          onSearch: this.handleSearch,
          onReset: this.handleReset,
          formData: {},
        },
      };
    },
    methods: {
      handleSearch() {
        console.log(this.searchProps.formData);
      },
      handleReset() {},
    },
  };
</script>
```

:::

### WithSearch Attributes

| 参数名   | 说明                                           | 类型     | 默认值 |
| :------- | :--------------------------------------------- | :------- | :----- |
| `fields` | 必填，搜索表单项 ⬇️                            | Array    | []     |
| onSearch | 查询操作                                       | Function | 无     |
| onReset  | 查询重置操作, 只有设置了此项，重置按钮才会显示 | Function | 无     |
| formData | 获取 form 表单的值                             | Object   | {}     |

### Fields Attributes

<h4 style='padding-top: 0;'>通用</h4>

| 参数名            | 说明                            | 可选值/类型             | 默认值           |
| :---------------- | :------------------------------ | :---------------------- | :--------------- |
| key               | 传入 Form 组件的 model 中的字段 | -                       | 必填             |
| name              | 标签文本                        | false/String            | 必填             |
| type              | 表单类型，具体属性 ⬇️           | input/select/datePicker | input            |
| defaultValue      | 默认值                          | -                       | undefined        |
| <del>styles</del> | 当前组件样式                    | Object                  | -                |
| hidden            | 隐藏当前组件样式                | Boolean                 | false            |
| placeholder       | 占位内容                        | String                  | 暂不支持时间组件 |

#### select

| 参数名     | 说明                           | 可选值/类型 | 默认值                |
| :--------- | :----------------------------- | :---------- | :-------------------- |
| enums      | 选框的数据                     | -           | []                    |
| enumType   | 选框的数据格式化               | -           | {id:'id',name:'name'} |
| multiple   | 是否支持多选                   | Boolean     | false                 |
| collapse   | 多选后以数字展示选择了多少个数 | Boolean     | false                 |
| key-value  | 显示类型                       | Boolean     | true                  |
| disabled   | 禁止使用选框                   | Boolean     | false                 |
| clearable  | 是否显示清除按钮               | Boolean     | true                  |
| filterable | 是否可搜索                     | Boolean     | true                  |

#### datePicker

| 参数名                                                                                       | 说明         | 可选值/类型                                                                                | 默认值    |
| :------------------------------------------------------------------------------------------- | :----------- | :----------------------------------------------------------------------------------------- | :-------- |
| <del>dataType <b><del>v1.0.0-rc.10</del></b> 后，不建议使用 改用</del> <br/> <b>dateType</b> | 时间显示类型 | year/month/date/dates/ week/datetime/datetimerange/ **daterange**/monthrange               | daterange |
| pickerOptions                                                                                | 时间格式     | Object [同 element](https://element.eleme.cn/#/zh-CN/component/date-picker#picker-options) | -         |
