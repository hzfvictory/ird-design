import Vue from "vue";

// 按需加载
/*import {
  Button,
  Icon,
  WithSearch,
  Select,
  Modal,
  InputNumber,
  Upload,
  EnhanceTable,
} from "irdd";

Vue.use(Button);
Vue.use(Icon);
Vue.use(WithSearch);
Vue.use(Select);
Vue.use(Modal);
Vue.use(InputNumber);
Vue.use(Upload);
Vue.use(EnhanceTable);*/

/*
// 生产、开发者使用  全局引入
// import Irdd from "irdd";
import Irdd from "irdd/es";
// import Irdd from "irdd/lib/ird-design.common";
// const Irdd = require("irdd");
import "irdd/src/styles/lib/index.css";

Vue.use(Irdd);
*/

/*
* // 本地压缩
import Irdd from "../lib/ird-design.common";
import "../src/styles/lib/index.css";
Vue.use(Irdd);
* */

// 本地开发
import Irdd from "@/index"; // 编译之前的代码
import "@/styles/src/index.scss";

Vue.use(Irdd);
//
// // 本地开发
// import {
//   Button,
//   Icon,
//   WithSearch,
//   Modal,
//   Upload,
//   EnhanceTable,
// } from "../lib/ird-design.common";
//
// import Select from "../lib/select";
// import InputNumber from "../lib/input-number";
// import "../src/styles/src/index.scss";
//
// Vue.use(Button);
// Vue.use(Icon);
// Vue.use(WithSearch);
// Vue.use(Modal);
// Vue.use(Select);
// Vue.use(InputNumber);
// Vue.use(Upload);
// Vue.use(EnhanceTable);

/*
import "./assets/styles/variables.scss"  // 自定义主题色
* */

Vue.prototype.$IRDD = {
  size: "small",
  zIndex: 3000,
};
