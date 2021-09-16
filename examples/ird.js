import Vue from "vue";

/*
// 按需加载
import {
  Button,
  Icon,
  WithSearch,
  IrdSelect,
  IrdModal,
  IrdInputNumber,
  IrdUpload,
  EnhanceTable,
} from "irdd";

Vue.use(Button);
Vue.use(Icon);
Vue.use(WithSearch);
Vue.use(WithSearch);
Vue.use(IrdSelect);
Vue.use(IrdModal);
Vue.use(IrdInputNumber);
Vue.use(IrdUpload);
Vue.use(EnhanceTable);
*/

// 生产、开发者使用  全局引入
// import Irdd from "irdd";
import Irdd from "irdd/es";
// import Irdd from "irdd/lib/ird-design.common";
// const Irdd = require("irdd");
import "irdd/src/styles/lib/index.css";

Vue.use(Irdd);

/*
* // 本地压缩
import Irdd from "../lib/ird-design.common";
import "../src/styles/lib/index.css";
Vue.use(Irdd);
* */

/*
* // 本地开发
import Irdd from "../src"; // 编译之前的代码
import "../src/styles/src/index.scss";
Vue.use(Irdd);
* */

/*
import "./assets/styles/variables.scss"  // 自定义主题色
* */

Vue.prototype.$IRDD = {
  size: "small",
  zIndex: 3000,
};
