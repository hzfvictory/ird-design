import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* elementUI */
import { Tooltip, Input, Table, Popconfirm } from "element-ui";

Vue.use(Tooltip);
Vue.use(Input);
Vue.use(Table);
Vue.use(Popconfirm);
import "element-ui/lib/theme-chalk/index.css"; // 引入饿了么的样式
/* component  start*/

import DemoBlock from "./components/demo-block.vue";
import ClipBoard from "./components/clipboard.vue";

Vue.component("demo-block", DemoBlock);
Vue.component("clip-board", ClipBoard);
/*component  end*/

import "./ird";

/* mixin  start*/
import clipboard from "./mixins/clipboard";

Vue.mixin(clipboard);
/* mixin  start*/

/* prototype  start*/
import { glyphs } from "../src/styles/src/fonts/iconfont.json";
import { generateData } from "./utils/globalList";

Vue.prototype.$icon = glyphs.reverse(); // Icon 列表页用
Vue.prototype.$booksList = generateData(); // Icon 列表页用
/* prototype  end*/

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  watch: {
    ...router.options.hashPath,
  },
}).$mount("#app");
