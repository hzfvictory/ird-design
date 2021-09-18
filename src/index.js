/*
 * 约定好  组件路径写到 index.js 处
 */

import Button from "packages/button/index.js";
import Icon from "packages/icon/index.js";
import EnhanceTable from "packages/enhance-table/index.js";
import InputNumber from "packages/input-number/index.js";
import WithSearch from "packages/with-search/index.js";
import Select from "packages/select/index.js";
import Upload from "packages/upload/index.js";
import Modal from "packages/modal/index.js";
// import * as utils from "./utils";

const components = [
  Button,
  Icon,
  EnhanceTable,
  InputNumber,
  WithSearch,
  Select,
  Upload,
  Modal,
];

const install = function (Vue, opts = {}) {
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
  Icon,
  EnhanceTable,
  InputNumber,
  WithSearch,
  Select,
  Upload,
  Modal,
};
