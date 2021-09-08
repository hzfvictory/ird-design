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

### WithSearch Attributes

| 参数名   | 作用                                           | 类型   | 默认值 |
| :------- | :--------------------------------------------- | :----- | :----- |
| `fields` | 必填，搜索表单项, 详细看下表                   | array  | []     |
| onSearch | 查询操作                                       | fun    | 无     |
| onReset  | 查询重置操作, 只有设置了此项，重置按钮才会显示 | fun    | 无     |
| formData | 获取 form 表单的值                             | object | {}     |

### Fields Attributes

| 参数名            | 说明                            | 可选值       | 默认值                |
| :---------------- | :------------------------------ | :----------- | :-------------------- |
| key               | 传入 Form 组件的 model 中的字段 | -            | 必填                  |
| name              | 标签文本                        | false/String | 必填                  |
| type              | 前选框类型                      | select       | input                 |
| enums             | 前选框的数据                    | -            | []                    |
| enumType          | 选框的数据格式化                | -            | {id:'id',name:'name'} |
| multiple          | 是否支持多选                    | -            | false                 |
| collapse          | 多选后以数字展示选择了多少个数  | -            | false                 |
| key-value         | select 的 key-value 的形式      | Boolean      | true                  |
| defaultValue      | 选框默认值                      | -            | undefined             |
| disabled          | 禁止使用选框                    | Boolean      | false                 |
| clearable         | 是否显示清除按钮                | Boolean      | true                  |
| <del>styles</del> | 当前组件样式                    | Object       | -                     |
| hidden            | 隐藏当前组件样式                | Boolean      | false                 |
| placeholder       | 占位内容                        | String       | 暂不支持时间组件      |
| pickerOptions     | 时间格式                        | Object       | -                     |
