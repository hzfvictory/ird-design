## Icon 图标

语义化的矢量图形，`irdd` 使用开源的 `iconfont` (阿里妈妈 MUX 倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 `icon font`。

`irdd` 本质上还是使用的字体，所以多色图标还是不支持的, 如需支持请留言开发者，后续添加 `Symbol` 引用。

<br/>

**如何使用**

使用 `class="ird-icon-****"` 来声明图标，具体图标的名称请 `copy` 相应的标签

::: template

```html
<template>
  <div class="ird-icon">
    <i class="ird-icon-manage" />
    <i class="ird-icon-activity" />
    <i class="ird-icon-mine" />
    <i class="ird-icon-accessory" />
  </div>
</template>

<style>
  .ird-icon {
    display: flex;
  }
  .ird-icon i {
    color: #606266;
    margin: 0 10px;
    font-size: 24px;
  }
</style>
```

:::

### 图标集合

鼠标单击复制 `类名`，双击复制 `带<i>标签` 的图标。

<ul class="icon-list">
  <li v-for="name in $icon" :key="name.font_class" @click="copy($event, `ird-icon-${name.font_class}`)" @dblclick="copy($event, `<i class='ird-icon-${name.font_class}' />`)" >
    <span>
      <i :class="'ird-icon-' + name.font_class"></i>
      <span class="icon-name">{{'ird-icon-' + name.font_class}}</span>
    </span>
  </li>
</ul>
