import IrdUpload from "./src/upload";

IrdUpload.install = function (Vue) {
  Vue.component(IrdUpload.name, IrdUpload);
};

export default IrdUpload;
