## EnhanceTable 表格

:::warning
`@vue/babel-helper-vue-jsx-merge-props` 编译 `element-ui` 组件库 `table`的时候，内部编译导致 `dom` 丢失，
所以使用此组件时需保证项目中有在使用 `el-table`
:::

### 基础用法

::: template

```html
<template>
  <enhance-table
    ref="table"
    :otherTableParams="otherTableParams"
    :tableColumn="column"
  />
</template>
<script>
  export default {
    data() {
      return {
        otherTableParams: {
          props: {
            stripe: true,
          },
        },
        otherPaginationParams: {},
        column: [
          {
            prop: "name",
            label: "Name",
            width: 150,
          },
          {
            prop: "age",
            label: "Age",
            width: 150,
          },
          {
            prop: "address",
            label: "Address",
            "show-overflow-tooltip": true,
          },
        ],
      };
    },
    methods: {
      async queryList() {
        const {
          paginationOptions: { pageSize, currentPage },
          handlePageData,
        } = this.$refs.table;
        const data = [];
        for (let i = 0; i < 11; i++) {
          data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 20 + i,
            address: `London, Park Lane no. ${i}`,
          });
        }

        handlePageData(data, 11);
      },
    },
    created() {
      this.$nextTick(this.queryList);
    },
  };
</script>
```

:::

### 多选-排序-操作

::: template

```html
<template>
  <enhance-table
    ref="table"
    multiple
    :otherTableParams="otherTableParams"
    :tableColumn="column"
  />
</template>
<script>
  export default {
    data() {
      return {
        otherTableParams: {
          props: {
            stripe: true,
            "default-sort": { prop: "createTime", order: "ascending" },
          },
        },
        otherPaginationParams: {},
        column: [
          {
            prop: "name",
            label: "Name",
            width: 150,
          },
          {
            prop: "age",
            label: "Age",
            width: 150,
            sortable: true,
          },
          {
            prop: "address",
            label: "Address",
            "show-overflow-tooltip": true,
          },
          {
            type: "button",
            width: "130",
            label: "操作",
            align: "right",
            list: [
              {
                title: "查看",
                disabled: false,
                styles: { color: "#777" },
                cb: this.seeHandle,
              },
              { title: "编辑", cb: this.editHandle },
              {
                title: "删除",
                styles: { color: "red", marginLeft: "10px" },
                cb: this.remove,
                confirm: true,
                confirmTip: "是否删除当前数据？",
              },
            ],
          },
        ],
      };
    },
    methods: {
      async queryList() {
        const {
          paginationOptions: { pageSize, currentPage },
          handlePageData,
        } = this.$refs.table;
        const data = [];
        for (let i = 0; i < 4; i++) {
          data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 20 + i,
            address: `London, Park Lane no. ${i}`,
          });
        }
        handlePageData(data);
      },
      editHandle(...options) {
        console.log(options, "编辑");
      },
      seeHandle(...options) {
        console.log(options, "查看");
      },
    },
    created() {
      this.$nextTick(this.queryList);
    },
    mounted() {},
  };
</script>
```

:::

### 自定义头部

::: template

```html
<template>
  <enhance-table
    ref="table"
    multiple
    :otherTableParams="otherTableParams"
    :tableColumn="column"
  />
</template>
<script>
  import { formatterNumber } from "../../src/utils/index.js";

  export default {
    data() {
      this.data = [
        {
          name: "Cole",
          fav: 0,
          show: 7302.21,
          weak: 5627,
          signin: 1563,
          click: 4254,
          active: 1438,
          day7: 274,
          day30: 285,
          tomorrow: 1727,
          day: 558,
          week: 4440,
          month: 5610,
        },
        {
          name: "Ben",
          fav: 0,
          show: 4720.66,
          weak: 4086,
          signin: 3792,
          click: 8690,
          active: 8470,
          day7: 8172,
          day30: 5197,
          tomorrow: 1684,
          day: 2593,
          week: 2507,
          month: 1537,
        },
        {
          name: "Bill",
          fav: 0,
          show: 7181.89,
          weak: 8007,
          signin: 8477,
          click: 1879,
          active: 16,
          day7: 2249,
          day30: 3450,
          tomorrow: 377,
          day: 1561,
          week: 3219,
          month: 1588,
        },
        {
          name: "Glen",
          fav: 0,
          show: 9911,
          weak: 8976,
          signin: 8807,
          click: 8050,
          active: 7668,
          day7: 1547,
          day30: 2357,
          tomorrow: 7278,
          day: 5309,
          week: 1655,
          month: 9043,
        },
        {
          name: "Dick",
          fav: 0,
          show: 934,
          weak: 1394,
          signin: 6463,
          click: 5278,
          active: 9256,
          day7: 209,
          day30: 3563,
          tomorrow: 8285,
          day: 1230,
          week: 4840,
          month: 9908,
        },
        {
          name: "Name6",
          fav: 0,
          show: 6856.55,
          weak: 1608,
          signin: 457,
          click: 4949,
          active: 2909,
          day7: 4525,
          day30: 6171,
          tomorrow: 1920,
          day: 1966,
          week: 904,
          month: 6851,
        },
        {
          name: "Name7",
          fav: 0,
          show: 5107.77,
          weak: 6407,
          signin: 4166,
          click: 7970,
          active: 1002,
          day7: 8701,
          day30: 9040,
          tomorrow: 7632,
          day: 4061,
          week: 4359,
          month: 3676,
        },
        {
          name: "Name8",
          fav: 0,
          show: 862,
          weak: 6520,
          signin: 6696,
          click: 3209,
          active: 6801,
          day7: 6364,
          day30: 6850,
          tomorrow: 9408,
          day: 2481,
          week: 1479,
          month: 2346,
        },
        {
          name: "Name9",
          fav: 0,
          show: 567,
          weak: 5859,
          signin: 128,
          click: 6593,
          active: 1971,
          day7: 7596,
          day30: 3546,
          tomorrow: 6641,
          day: 1611,
          week: 5534,
          month: 3190,
        },
        {
          name: "Name10",
          fav: 0,
          show: 3651.12,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811,
        },
      ];
      return {
        search: "",
        otherTableParams: {
          props: {
            stripe: true,
            "default-sort": { prop: "createTime", order: "ascending" },
          },
        },
        otherPaginationParams: {},
        column: [
          {
            label: "Name",
            prop: "name",
            width: 150,
            fixed: "left",
            "render-header": this.renderHeader,
            msg: "展示",
          },
          {
            label: "Show",
            prop: "show",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text),
          },
          {
            label: "Weak",
            prop: "weak",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "Signin",
            prop: "signin",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "Click",
            prop: "click",
            width: 150,
            sortable: true,
            "render-header": this.renderHeader,
            msg: "点击量",
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "Active",
            prop: "active",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "7, retained",
            prop: "day7",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "30, retained",
            prop: "day30",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "The next day left",
            prop: "tomorrow",
            "min-width": 180,
            sortable: true,
          },
          {
            label: "Day Active",
            prop: "day",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "Week Active",
            prop: "week",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            label: "Month Active",
            prop: "month",
            width: 150,
            sortable: true,
            render: (text) => formatterNumber(text, 0),
          },
          {
            type: "button",
            width: "160",
            label: "设置",
            "render-header": this.renderHeaderSearch,

            handleButtons: (record) => {
              return (
                <ird-button type="info" plain>
                  自定义头部
                </ird-button>
              );
            },
          },
        ],
      };
    },
    watch: {
      search() {
        this.queryList();
      },
    },
    methods: {
      async queryList() {
        const { handlePageData } = this.$refs.table;
        handlePageData(
          this.data.filter(
            (data) =>
              !this.search ||
              data.name.toLowerCase().includes(this.search.toLowerCase())
          )
        );
      },
      renderHeader(h, row) {
        const msg = this.column[row.$index - 1]?.msg || "";
        return (
          <span>
            {row.column.label}
            <el-tooltip effect="dark" placement="top">
              <div slot="content" style={{ whiteSpace: "pre" }}>
                {msg.replaceAll("<br/>", "\n")}
              </div>
              <i class="tooltip-tip ird-icon-flag" />
            </el-tooltip>
          </span>
        );
      },
      renderHeaderSearch(h, row) {
        return (
          <el-input
            v-model={this.search}
            size="mini"
            placeholder="输入关键字搜索"
          />
        );
      },
    },
    created() {
      this.$nextTick(this.queryList);
    },
    mounted() {},
  };
</script>
```

:::

### EnhanceTable Attributes

| Name                  | Type    | Default | Description                                                                                       |
| :-------------------- | :------ | :------ | :------------------------------------------------------------------------------------------------ |
| otherTableParams      | Object  | ...     | 列表参数集合                                                                                      |
| otherPaginationParams | Object  | ...     | 分页参数集合                                                                                      |
| tableColumn           | Array   | []      | 列表 column 数据 **必须写在 data 里面 或者单独抽离一个 mixins,不会找不到 h 函数，获取不到上下文** |
| multiple              | Boolean | false   | 列表是否支持多选                                                                                  |
