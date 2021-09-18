import IrdModal from "./src/index.vue";

IrdModal.install = function (Vue) {
  Vue.component(IrdModal.name, IrdModal);
};

export default IrdModal;
