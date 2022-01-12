## IrdInputNumber 数字输入框

数字输入框

### 基础用法

::: template

```html
<template>
  <ird-input-number
    styles="width: 150px"
    v-model="value"
    :label="[{align:'left',text:'第'},{align:'right',text:'章'}]"
    :attr="{
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
    :label="[{align:'right',text:'章'}]"
    :attr="{
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
    :label="[{align:'right',text:'章'}]"
    :attr="{
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

| 参数    | 类型   | 默认        | 说明                                                                                           |
| :------ | :----- | :---------- | :--------------------------------------------------------------------------------------------- |
| v-model | Number | undefined   | v-model                                                                                        |
| attr    | Object | {}          | 当前的属性,[同 element-ui](https://element.eleme.cn/#/zh-CN/component/input-number#attributes) |
| event   | Object | {}          | 事件                                                                                           |
| styles  | String | width: 100% | 当前表单的样式                                                                                 |
| label   | Array  | []          | 表单前后的修饰 label； 示例：[{align:'left',text:'第'},{align:'right',text:'章'}]              |

### Attributes

| 参数              | 说明                     | 类型    | 可选值       | 默认      |
| :---------------- | :----------------------- | :------ | :----------- | :-------- |
| min               | 设置计数器允许的最小值   | Number  | —            | -Infinity |
| max               | 设置计数器允许的最大值   | Number  | —            | Infinity  |
| step              | 计数器步长               | Number  | —            | 1         |
| step-strictly     | 是否只能输入 step 的倍数 | Boolean | —            | false     |
| precision         | 数值精度                 | Number  | —            | —         |
| size              | 计数器尺寸               | String  | large, small | —         |
| disabled          | 是否禁用计数器           | Boolean | —            | false     |
| controls          | 是否使用控制按钮         | Boolean | —            | true      |
| controls-position | 控制按钮位置             | String  | right        | -         |
| name              | 原生属性                 | String  | —            | —         |
| placeholder       | 输入框默认 placeholder   | String  | -            | -         |
| **align**         | 文字是否居中             | String  | center       | -         |
