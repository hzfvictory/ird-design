## IrdModal 对话框

### 基础用法

解决组件抽离后，父组件难以控制 dialog 展示隐藏问题「只能父传子，子组件 watch 监控 visible 的值」，使用此组件后只管内部逻辑即可

::: template

```html
<template>
  <div>
    <ird-button type="text" @click="visible = true">点击打开 Modal</ird-button>
    <ird-modal
      title="标题"
      :modal-visible.sync="visible"
      @dialogClose="handleDialogClose"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
    ></ird-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    computed: {},
    methods: {
      handleDialogClose() {
        console.log("仅针对确认按钮；关闭");
      },
      open() {
        console.log("open");
      },
      opened() {
        console.log("opened");
      },
      close() {
        console.log("close");
      },
      closed() {
        console.log("closed");
      },
    },
  };
</script>
```

:::

### Slot

::: template

```html
<template>
  <div>
    <ird-button type="text" @click="visible = true">
      自定义下方footer
    </ird-button>
    <ird-modal
      title="标题"
      :modalVisible.sync="visible"
    >
      <span slot="title">SLOT标题</span>
      <div slot="footer">
        <ird-button @click="visible=false">取 消</ird-button>
        <ird-button type="primary" @click="visible = false">确 定</ird-button>
      </div>
    </ird-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    computed: {},
    methods: {

    },
  };
</script>
```

:::

### 嵌套的对话框

::: template

```html
<template>
  <div>
    <ird-button type="text" @click="visible = true">
      点击打开外层 Modal
    </ird-button>
    <ird-modal
      title="标题"
      :modalVisible.sync="visible"
      append-to-body
    >
      <div slot="footer">
        <ird-button type="primary" @click="innerVisible = true">
          打开内层modal
        </ird-button>
      </div>
    </ird-modal>
    <ird-modal
      title="内层modal"
      :modalVisible.sync="innerVisible"
      width="30%"
    ></ird-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        innerVisible: false,
      };
    },
    computed: {},
    methods: {

    },
  };
</script>
```

:::

### 关闭前的回调

::: template

```html
<template>
  <div>
    <ird-button type="text" @click="visible = true">
      点击确认按钮 关闭前的回调
    </ird-button>
    <ird-modal
      title="标题"
      :modalVisible.sync="visible"
      :before-modal-close="handleBeforeDialog"
    ></ird-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    computed: {},
    methods: {
      handleBeforeDialog() {
        return new Promise((resolve, reject) => {
          if (window.confirm()) {
            resolve();
            console.log("关闭");
          } else {
            window.alert("取消切换");
          }
        });
      },
    },
  };
</script>
```

:::

::: template

```html
<template>
  <div>
    <ird-button type="text" @click="visible = true">
      弹框关闭前的回调
    </ird-button>
    <ird-modal
      title="标题"
      :modalVisible.sync="visible"
      :before-close="handleBeforeDialog"
    ></ird-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    computed: {},
    methods: {
      handleBeforeDialog(done) {
        if (window.confirm()) {
          done();
          console.log("关闭");
        } else {
          window.alert("取消切换");
        }
      },
    },
  };
</script>
```

:::

### IrdModal Attributes

| 参数名                | 说明                                                                        | 类型                                | 可选值 | 默认值             |
| :-------------------- | :-------------------------------------------------------------------------- | :---------------------------------- | :----- | :----------------- |
| modal-visible         | 是否显示 Modal，支持 .sync 修饰符                                           | Boolean                             | —      | false              |
| title                 | Modal 的标题，也可通过具名 slot （见下表）传入                              | String                              | —      | —                  |
| width                 | Modal 的宽度                                                                | String                              | —      | 70%                |
| fullscreen            | 是否为全屏 Modal                                                            | Boolean                             | —      | false              |
| top                   | Modal CSS 中的 margin-top 值                                                | String                              | —      | 15vh               |
| modal                 | 是否需要遮罩层                                                              | Boolean                             | —      | true               |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Modal 的父元素上 | Boolean                             | —      | true               |
| append-to-body        | Modal 自身是否插入至 body 元素上。嵌套的 Modal 必须指定该属性并赋值为 true  | Boolean                             | —      | false              |
| lock-scroll           | 是否在 Modal 出现时将 body 滚动锁定                                         | Boolean                             | —      | true               |
| custom-class          | Modal 的自定义类名                                                          | String                              | —      | —                  |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Modal                                           | Boolean                             | —      | true               |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Modal                                             | Boolean                             | —      | true               |
| show-close            | 是否显示关闭按钮                                                            | Boolean                             | —      | true               |
| before-close          | 关闭前的回调，会暂停 Modal 的关闭 ( X icon也会阻止)                                         | function(done)，done 用于关闭 Modal | —      | —                  |
| before-modal-close    | 关闭前的回调，会暂停 Modal 的关闭 ( X 不会阻止)                                         | 使用 Promise                        | —      | —                  |
| center                | 是否对头部和底部采用居中布局                                                | Boolean                             | —      | false              |
| destroy-on-close      | 关闭时销毁 Modal 中的元素                                                   | Boolean                             | —      | false              |
| titles                | 自定义列表 footer 标题                                                      | Array                               | —      | ["取 消", "确 定"] |

### Slot

| name   | 说明                   |
| :----- | :--------------------- |
| —      | Modal 的内容           |
| title  | Modal 标题区的内容     |
| footer | Modal 按钮操作区的内容 |

### Events

| 事件名称 | 说明                        | 回调参数 |
| :------- | :-------------------------- | :------- |
| open     | Dialog 打开的回调           | —        |
| opened   | Dialog 打开动画结束时的回调 | —        |
| close    | Dialog 关闭的回调           | —        |
| closed   | Dialog 关闭动画结束时的回调 | —        |
| dialogClose   | Dialog 关闭回调 `仅对确认按钮执行` | —        |