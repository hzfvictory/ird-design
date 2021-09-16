## 安装

### 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```js
yarn add irdd
```

### 使用示例

```js
import Vue from 'vue';
import App from './app.vue';
import Ird from 'irdd';
import 'irdd/src/styles/lib/index.css";

Vue.use(Ird);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

### CDN

目前可以通过 [unpkg.com/irdd](https://unpkg.com/irdd/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/irdd/src/styles/lib/index.css" />
<!-- 引入组件库 -->
<script src="https://unpkg.com/irdd/es/index.js"></script>
```

:::tip
我们建议使用 CDN 引入 irdd 的用户在链接地址上锁定版本，以免将来 irdd 升级时受到非兼容性更新的影响。
锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
此外为了防止 cdn 不稳定或者加载失败，有必要添加 fullback

```js
<script>window.IRDD||document.write('<script src="https://cdn.jsdelivr.net/gh/hzfvictory/ird-design@master/es/index.js"><\/script>')</script>
```

:::

### 按需加载

借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import

```javascript
yarn add babel-plugin-import -D
```

然后，将 .babelrc 的 plugins 修改为：

```javascript
"plugins": [
 [
  "import",
  {
    "libraryName": "irdd",
    "styleLibraryDirectory": "src/styles/lib"
  }
 ]
]
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import { Button, Select } from "irdd";
import App from "./App.vue";

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

**注意：** 当使用按需加载全量引入 irdd 会提示 no defind 的问题，解决的办法:

```js
import Irdd from "irdd/es";
const Irdd = require("irdd");
```
