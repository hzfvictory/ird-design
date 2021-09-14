import Button from "packages/button/index.js";
import EnhanceTable from "packages/enhanceTable/index.js";
import InputNumber from "packages/inputNumber/index.js";
import WithSearch from "packages/withSearch/index.js";
import IrdSelect from "packages/irdSelect/index.js";
import IrdUpload from "packages/irdUpload/index.js";
import IrdModal from "packages/irdModal/index.js";

// import * as utils from "./utils";

const components = [
  Button,
  EnhanceTable,
  InputNumber,
  WithSearch,
  IrdSelect,
  IrdUpload,
  IrdModal,
];

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  /* medium/small/mini */
  Vue.prototype.$IRDD = {
    size: opts.size || "small",
    zIndex: opts.zIndex || 2000,
  };
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // utils: { utils },
  // utils, // 不在这引入了 直接使用路径
  Button,
  EnhanceTable,
  InputNumber,
  WithSearch,
  IrdSelect,
  IrdUpload,
  IrdModal,
};
