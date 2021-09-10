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

:::tip
tip
:::

:::warning
warning
:::

:::danger
danger
:::
