## Button 按钮

基础组件，触发业务逻辑时使用。

### 基础用法

基础的按钮用法。

::: template 使用 `type`、`plain` 和 `round` 属性来定义 Button 的样式。

```html
<template>
  <div>
    <div class="mt-10">
      <ird-button @click="handleButtonClick">默认按钮</ird-button>
      <ird-button type="primary">主要按钮</ird-button>
      <ird-button type="success">成功按钮</ird-button>
      <ird-button type="info">信息按钮</ird-button>
      <ird-button type="warning">警告按钮</ird-button>
      <ird-button type="danger">错误按钮</ird-button>
    </div>
    <div class="mt-10">
      <ird-button plain>默认按钮</ird-button>
      <ird-button type="primary" plain>主要按钮</ird-button>
      <ird-button type="success" plain>成功按钮</ird-button>
      <ird-button type="info" plain>信息按钮</ird-button>
      <ird-button type="warning" plain>警告按钮</ird-button>
      <ird-button type="danger" plain>错误按钮</ird-button>
    </div>
    <div class="mt-10">
      <ird-button round>圆角按钮</ird-button>
      <ird-button type="primary" round>主要按钮</ird-button>
      <ird-button type="success" round>成功按钮</ird-button>
      <ird-button type="info" round>信息按钮</ird-button>
      <ird-button type="warning" round>警告按钮</ird-button>
      <ird-button type="danger" round>错误按钮</ird-button>
    </div>
  </div>
</template>
<script>
  export default {
    created() {},
    methods: {
      handleButtonClick() {
        console.log(1212);
      },
    },
  };
</script>
```

:::

### 禁用状态

按钮不可用状态。

::: code 使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

```html
<ird-button disabled>默认按钮</ird-button>
<ird-button type="primary" disabled>主要按钮</ird-button>
<ird-button type="success" disabled>成功按钮</ird-button>
<ird-button type="info" disabled>信息按钮</ird-button>
<ird-button type="warning" disabled>警告按钮</ird-button>
<ird-button type="danger" disabled>错误按钮</ird-button>
```

:::

### Button Attributes

| 参数     | 说明                                                 | 类型           | 可选值                                        | 默认值 |
| -------- | ---------------------------------------------------- | -------------- | --------------------------------------------- | ------ |
| size     | 尺寸                                                 | String         | large, medium, small, mini                    | medium |
| type     | 类型                                                 | String         | primary, success, warning, danger, info, text | —      |
| plain    | 是否朴素按钮                                         | Boolean        | —                                             | false  |
| round    | 是否圆角按钮                                         | Boolean        | —                                             | false  |
| circle   | 是否圆形按钮                                         | Boolean        | —                                             | false  |
| loading  | 是否加载中状态                                       | Boolean        | —                                             | false  |
| disabled | 是否禁用状态                                         | Boolean        | —                                             | false  |
| long     | 添加长按钮                                           | Boolean        | —                                             | false  |
| icon     | 图标类名                                             | String         | —                                             | —      |
| to       | 跳转的链接，支持 vue-router 对象                     | String, Object | —                                             | —      |
| replace  | 路由跳转时，开启 replace 将不会向 history 添加新记录 | Boolean        | false                                         | -      |
| target   | 相当于 a 链接的 target 属性                          | String         | \_blank(仅支持)                               | -      |
