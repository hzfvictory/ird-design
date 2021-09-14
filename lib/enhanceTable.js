module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__(2);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// CONCATENATED MODULE: ./src/mixins/table.mixins.js
let defaultPageSize = 10;
const table = {
  data() {
    return {
      tableOptions: {
        data: [],
        // 列表数据
        border: true,
        // 带边框
        style: "width: 100%",
        size: "small",
        multipleSelection: [] // 列表多选

      },
      tableOptionsMethod: {
        "selection-change": this.handleSelectionChange
      },
      paginationOptions: {
        class: "fyDiv",
        background: true,
        // 带有背景色
        layout: "total, sizes, prev, pager, next",
        pageSizes: [10, 20, 30, 40],
        total: 0,
        // 应用列表总数量
        pageSize: defaultPageSize,
        // 当前分页数量
        currentPage: 1,
        // 当前页数第一页
        hideOnSinglePage: false // 是否显示分页组件,必须total总数也要小于当前要展示的页数

      },
      paginationOptionsMethod: {
        "size-change": this.handleSizeChange,
        "current-change": this.handleCurrentChange
      }
    };
  },

  methods: {
    // 获取数据回调处理分页和data
    handlePageData(data, total, type = true) {
      this.tableOptions.data = data; // 如果还有下一页，则显示分页插件

      if (total > defaultPageSize) {
        this.paginationOptions.hideOnSinglePage = false;
      } else if (type === true) {
        // 当小于一页的时候，传false还要展示分页组件
        this.paginationOptions.hideOnSinglePage = true;
        this.paginationOptions.currentPage = 1;
        this.paginationOptions.pageSize = defaultPageSize;
      }

      this.paginationOptions.total = total;
    },

    // 选项变化
    handleSelectionChange(multipleSelection) {
      this.tableOptions.multipleSelection = multipleSelection;
    },

    // 改变页数
    handleCurrentChange(currentPage) {
      this.paginationOptions.currentPage = currentPage;
      this.queryList ? this.queryList() : this.$parent.queryList();
    },

    // 选择页数
    handleSizeChange(currentSize) {
      this.paginationOptions.pageSize = currentSize;
      this.paginationOptions.currentPage = 1;
      this.queryList ? this.queryList() : this.$parent.queryList();
    },

    // 搜索专用
    handleSearchChange(currentPage = 1, pageSize = defaultPageSize) {
      this.paginationOptions.pageSize = pageSize;
      this.paginationOptions.currentPage = currentPage;
      this.queryList ? this.queryList() : this.$parent.queryList();
    }

  }
};
/* harmony default export */ var table_mixins = (table);
// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/enhanceTable/src/index.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var src = ({
  name: "EnhanceTable",
  components: {
    [external_element_ui_["Progress"].name]: external_element_ui_["Progress"],
    [external_element_ui_["Table"].name]: external_element_ui_["Table"],
    [external_element_ui_["TableColumn"].name]: external_element_ui_["TableColumn"],
    [external_element_ui_["Popconfirm"].name]: external_element_ui_["Popconfirm"],
    [external_element_ui_["Button"].name]: external_element_ui_["Button"],
    [external_element_ui_["Pagination"].name]: external_element_ui_["Pagination"]
  },
  mixins: [table_mixins],
  props: {
    otherTableParams: {
      // 设置table其他参数
      type: Object,
      default: function _default() {
        return {};
      }
    },
    otherPaginationParams: {
      // 设置分页其他参数
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tableColumn: {
      // table的column
      type: Array,
      default: function _default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    irdSize() {
      var _this$$IRDD;

      return this.size || ((_this$$IRDD = this.$IRDD) === null || _this$$IRDD === void 0 ? void 0 : _this$$IRDD.size);
    }

  },
  methods: {
    // 静态方法
    tableRef() {
      return this.$refs["tableRef"];
    },

    handleButtons(item, record) {
      const h = this.$createElement;
      // 处理操作部分按钮 -> 可以在外面自定义，必须是jsx
      if (item.handleButtons) return item.handleButtons(record);
      return !!item.list.length && item.list.map(item => {
        if (item.confirm) {
          return h("el-popconfirm", {
            "attrs": {
              "icon": "el-icon-info",
              "iconColor": "#f56c6c",
              "title": item.confirmTip || "是否继续操作"
            },
            "on": {
              "onConfirm": () => item.cb && item.cb(record)
            },
            "scopedSlots": {
              reference: () => {
                return h("el-button", {
                  "attrs": {
                    "disabled": item.disabled,
                    "icon": item.icon,
                    "type": "text",
                    "size": this.irdSize
                  },
                  "style": item.styles
                }, [item.title]);
              }
            }
          });
        }

        return h("el-button", {
          "attrs": {
            "disabled": item.disabled,
            "icon": item.icon,
            "type": "text",
            "size": this.irdSize
          },
          "key": item.title,
          "style": item.styles,
          "on": {
            "click": () => item.cb && item.cb(record)
          }
        }, [item.title]);
      });
    } // handleCurrentChange(val) {
    //   this.$emit('currentChange', val);
    // },


  },

  mounted() {},

  render() {
    const h = arguments[0];
    const tableOptions = this.tableOptions,
          paginationOptions = this.paginationOptions,
          paginationOptionsMethod = this.paginationOptionsMethod,
          tableOptionsMethod = this.tableOptionsMethod,
          otherTableParams = this.otherTableParams,
          otherPaginationParams = this.otherPaginationParams,
          tableColumn = this.tableColumn,
          multiple = this.multiple;
    return h("div", {
      "class": 'ird-table'
    }, [h("el-table", {
      "ref": "tableRef",
      "props": _objectSpread({}, _objectSpread(_objectSpread({
        size: this.irdSize
      }, tableOptions), otherTableParams.props)),
      "on": _objectSpread({}, _objectSpread(_objectSpread({}, tableOptionsMethod), otherTableParams.on))
    }, [multiple && h("el-table-column", {
      "attrs": {
        "type": "selection",
        "width": "55",
        "fixed": "left"
      }
    }), tableColumn.map(item => {
      if (item.type === "button") {
        // 操作部分
        return h("el-table-column", babel_helper_vue_jsx_merge_props_default()([{}, {
          props: _objectSpread({
            label: item.label || "操作",
            width: item.width || "88",
            fixed: item.fixed || "right"
          }, item),
          scopedSlots: {
            default: ({
              row
            }) => {
              return this.handleButtons(item, row);
            }
          }
        }]));
      }

      return h("el-table-column", babel_helper_vue_jsx_merge_props_default()([{}, {
        props: _objectSpread({
          key: item.prop
        }, item),
        // 自定义的渲染方式，拓展性
        scopedSlots: {
          default: ({
            row,
            $index
          }) => {
            return item.render ? item.render(row[item.prop], row, $index, item.prop) : row[item.prop];
          }
        }
      }]));
    })]), h("el-pagination", babel_helper_vue_jsx_merge_props_default()([{}, {
      class: paginationOptions.class,
      // 支持拓展
      props: _objectSpread(_objectSpread({}, paginationOptions), otherPaginationParams.props),
      on: _objectSpread({}, paginationOptionsMethod)
    }]))]);
  }

});
// CONCATENATED MODULE: ./packages/enhanceTable/index.js


src.install = function (Vue) {
  Vue.component(src.name, src);
};

/* harmony default export */ var enhanceTable = __webpack_exports__["default"] = (src);

/***/ })
/******/ ]);