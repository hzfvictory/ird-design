## IrdSelect 选择器

### 单选

::: template `v-model` 的值为当前被选中的 option 的 value 属性值

```html
<template>
  <ird-select
    v-model="formData.value"
    :data="$icon"
    :type="{id:'font_class',name:'name'}"
    :key-value="false"
    placeholder="请选择"
    @change="fn"
    @focus="fn"
  />
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          value: "",
        },
      };
    },
    created() {},
    methods: {
      fn() {},
    },
  };
</script>
```

:::

### 多选

::: template 为`ird-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以合并为一段文字的形式展现，你也可以设置`collapse-tags`属性将它们以 `Tag` 的形式展现。

```html
<template>
  <ird-select
    v-model="formData.value"
    :data="$icon"
    :clearable="false"
    multiple
    collapse-tags
    :type="{id:'font_class',name:'name'}"
    placeholder="请选择"
    :key-value="false"
    @change="fn"
  />
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          value: "",
        },
      };
    },
    created() {},
    methods: {
      fn(ev) {
        console.log(ev);
      },
    },
  };
</script>
```

:::

### key-value 形式展示

::: template

```html
<template>
  <ird-select
    v-model="formData.value"
    :data="$icon"
    multiple
    :type="{id:'font_class',name:'name'}"
    placeholder="请选择"
    @change="fn"
    @focus="fn"
  />
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          value: "",
        },
      };
    },
    created() {},
    methods: {
      fn() {},
    },
  };
</script>
```

:::

### 自定义选项标签

::: template

```html
<template>
  <div>
    自定义选项标签文字
    <ird-select
      v-model="formData.value1"
      :data="[{id:1,name:'朝花夕拾'},{id:2,name:'骆驼祥子'}]"
      placeholder="请选择"
      :render-value="renderValue"
    />

    自定义下拉框标签文字
    <ird-select
      v-model="formData.value2"
      :data="[{id:1,name:'朝花夕拾'},{id:2,name:'骆驼祥子'}]"
      placeholder="请选择"
      :render-label="renderValue"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          value1: 1,
          value2: "",
        },
      };
    },
    methods: {
      renderValue(id) {
        let bookAry = { 1: "朝花夕拾-鲁迅", 2: "骆驼祥子-老舍" };
        return `${bookAry[id]}`;
      },
    },
  };
</script>
```

:::

### 有禁用选项

::: template `dis-id` 只能禁用单个项的 item,多个的话在 data 里面添加 `disabled`

```html
<template>
  <div>
    单个禁用
    <ird-select
      v-model="formData.value"
      :data="data"
      :dis-id="1"
      :key-value="false"
    />

    多个禁用
    <ird-select v-model="formData.value2" :data="data2" :key-value="false" />

    禁用
    <ird-select v-model="formData.value2" disabled />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          { id: 1, name: "本草纲目" },
          { id: 2, name: "老子" },
          { id: 3, name: "庄子" },
        ],
        data2: [
          { id: 1, name: "本草纲目", disabled: true },
          { id: 2, name: "老子", disabled: true },
          { id: 3, name: "庄子" },
        ],
        formData: {
          value: "",
        },
      };
    },
    created() {},
    methods: {
      fn() {},
    },
  };
</script>
```

:::

### IrdSelect Attributes

| 参数名              | 类型                              | 默认值                    | 说明                                         |
| :------------------ | :-------------------------------- | :------------------------ | :------------------------------------------- |
| v-model             | String, Number, Array, Object     | ''                        | v-model                                      |
| data                | Array                             | []                        | 当前的数据                                   |
| key-value           | Boolean                           | true                      | key-value 的形式展示                         |
| type                | Object                            | { name: "name", id: "id"} | 引导数据的格式转换                           |
| clearable           | Boolean                           | true                      | 是否有一键清空                               |
| multiple            | Boolean                           | false                     | 是否支持多选                                 |
| collapse-tags       | Boolean                           | false                     | 同上 兼容老版                                |
| filterable          | Boolean                           | true                      | 组件可搜索                                   |
| dis-id              | String, Number                    | ''                        | 单个 item 不能选择,多个改数据源添加 disabled |
| disabled            | Boolean                           | false                     | 同上 兼容老版                                |
| placeholder         | String                            | 全部                      | placeholder                                  |
| render-value        | Function(id: string, name:string) | 选项的标签                | 自定义选项标签的文字                         |
| render-label        | Function(id: string, name:string) | 选项的标签                | 自定义下拉框标签的文字                       |
| focus       | Function                          | (event: Event)            | 失去焦点的事件                               |
| change     | Function                          | 目前的选中值              | 选中值发生变化时触发                         |
