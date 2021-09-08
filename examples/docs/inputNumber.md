## IrdInputNumber 数字输入框

数字输入框

### 基础用法

::: template

```html
<template>
  <ird-input-number
    styles="width: 150px"
    v-model="value"
    :lable="[{align:'left',text:'第'},{align:'right',text:'章'}]"
    :attributes="{
      controls:false,
      placeholder:'请输入起始章节',
      align:'center',
    }"
    :event="{
      blur:fn
    }"
  />
</template>

<script>
  export default {
    data() {
      return {
        value: undefined,
      };
    },
    methods: {
      fn() {},
    },
  };
</script>
```

:::

::: template

```html
<template>
  <ird-input-number
    styles="width: 150px"
    v-model="value"
    :lable="[{align:'right',text:'章'}]"
    :attributes="{
      controls:false,
      placeholder:'请输入起始章节'
    }"
    :event="{
      blur:fn
    }"
  />
</template>

<script>
  export default {
    data() {
      return {
        value: undefined,
      };
    },
    methods: {
      fn() {},
    },
  };
</script>
```

:::

::: template

```html
<template>
  <ird-input-number
    class="input_number_text_center"
    styles="width: 150px"
    v-model="value"
    :lable="[{align:'right',text:'章'}]"
    :attributes="{
      controls:true,
      placeholder:'请输入起始章节'
    }"
    :event="{
      blur:fn
    }"
  />
</template>

<script>
  export default {
    data() {
      return {
        value: undefined,
      };
    },
    methods: {
      fn() {},
    },
  };
</script>
```

:::

### IrdInputNumber Attributes

| Name       | Type   | Default     | Description                                                                                         |
| :--------- | :----- | :---------- | :-------------------------------------------------------------------------------------------------- |
| v-model    | Number | undefined   | v-model                                                                                             |
| attributes | Object | {}          | 当前的属性,[同 element-ui](https://element.eleme.cn/2.14/#/zh-CN/component/input-number#attributes) |
| event      | Object | {}          | 事件                                                                                                |
| styles     | String | width: 100% | 当前表单的样式                                                                                      |
| lable      | Array  | []          | 表单前后的修饰 lable； 示例：[{align:'left',text:'第'},{align:'right',text:'章'}]                   |

### Attributes

| 参数              | 说明                     | 类型    | 可选值       | 默认      |
| :---------------- | :----------------------- | :------ | :----------- | :-------- |
| min               | 设置计数器允许的最小值   | number  | —            | -Infinity |
| max               | 设置计数器允许的最大值   | number  | —            | Infinity  |
| step              | 计数器步长               | number  | —            | 1         |
| step-strictly     | 是否只能输入 step 的倍数 | boolean | —            | false     |
| precision         | 数值精度                 | number  | —            | —         |
| size              | 计数器尺寸               | string  | large, small | —         |
| disabled          | 是否禁用计数器           | boolean | —            | false     |
| controls          | 是否使用控制按钮         | boolean | —            | true      |
| controls-position | 控制按钮位置             | string  | right        | -         |
| name              | 原生属性                 | string  | —            | —         |
| label             | 输入框关联的 label 文字  | string  | —            | —         |
| placeholder       | 输入框默认 placeholder   | string  | -            | -         |
| align             | 文字是否居中             | string  | center       | -         |
