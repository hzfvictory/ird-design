import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/*start ird*/
import Ird from "../lib/ird-design.common";
// import Ird from "irdd";
// import "../src/styles/lib/index.css";
// import Ird from "../src"; // 编译之前的代码
import "../src/styles/src/index.scss";
// import "./assets/styles/variables.scss"  // 自定义主题色
Vue.use(Ird);
/*end ird*/

/* elementUI */
import { Tooltip, Input } from "element-ui";

Vue.use(Tooltip);
Vue.use(Input);
import "element-ui/lib/theme-chalk/index.css"; // 引入饿了么的样式

/* component  start*/
import DemoBlock from "./components/demo-block.vue";
import ClipBoard from "./components/clipboard.vue";

Vue.component("demo-block", DemoBlock);
Vue.component("clip-board", ClipBoard);
/*component  end*/

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
