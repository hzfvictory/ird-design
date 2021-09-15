import EnhanceTable from "./src/index.jsx";

EnhanceTable.install = function (Vue) {
  Vue.component(EnhanceTable.name, EnhanceTable);
};

export default EnhanceTable;
