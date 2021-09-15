## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```js
yarn add irdd
```

```html
<ird-button type="primary" size="large">大按钮</ird-button>
<ird-button type="primary" size="medium">中等按钮</ird-button>
<ird-button type="primary">默认按钮</ird-button>
<ird-button type="primary" size="small">小型按钮</ird-button>
```

### 使用示例

```css
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import Ird from 'irdd';
import 'irdd/packages/theme-default/lib/index.css";

Vue.use(VueRouter);
Vue.use(Ird);

const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
```

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

:::tip
tip
:::

:::warning
warning
:::

:::danger
danger
:::
