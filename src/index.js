import Button from "packages/button/index.js";
import EnhanceTable from "packages/EnhanceTable/index.js";
import InputNumber from "packages/InputNumber/index.js";
import WithSearch from "packages/WithSearch/index.js";
import IrdSelect from "packages/IrdSelect/index.js";
import IrdUpload from "packages/IrdUpload/index.js";
import IrdModal from "packages/IrdModal/index.js";

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
