import IrdWithSearch from "./src/index.jsx";

IrdWithSearch.install = function(Vue) {
  Vue.component(IrdWithSearch.name, IrdWithSearch);
};

export default IrdWithSearch;
