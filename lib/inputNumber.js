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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__(2);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/inputNumber/src/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const attributesDefault = {
  precision: 0,
  min: 0,
  step: 1,
  placeholder: "请输入",
  controls: true,
  disabled: false
};
/* harmony default export */ var src = ({
  name: "IrdInputNumber",
  components: {
    [external_element_ui_["InputNumber"].name]: external_element_ui_["InputNumber"]
  },

  data() {
    return {};
  },

  props: {
    attributes: {
      type: Object,

      default() {
        return _objectSpread({}, attributesDefault);
      }

    },
    event: {
      type: Object
    },
    styles: {
      type: String,
      default: "width:100%"
    },
    value: {
      type: [Number, String],
      default: undefined
    },
    lable: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
      this.$emit("change", val);
    },

    prependTitle() {
      const h = this.$createElement;
      const item = this.lable.find((item = {}) => item.align === "left");
      return item && h("div", {
        "class": "el-input-group__prepend custom_prepend"
      }, [item.text]);
    },

    appendTitle() {
      const h = this.$createElement;
      const item = this.lable.find((item = {}) => item.align === "right");
      return item && h("div", {
        "class": "el-input-group__append custom_append"
      }, [item.text]);
    },

    handleClass() {
      const lable = this.lable;

      if (lable.length === 1) {
        if (lable[0].align === "left") return "input_number_text_left input_border_left_none";
        if (lable[0].align === "right") return "input_number_text_left input_border_right_none";
      }

      if (lable.length === 2) {
        if (lable[1].align !== lable[0].align && ["left", "right"].includes(lable[0].align) && ["left", "right"].includes(lable[1].align)) {
          return "input_number_text_left input_border_none";
        }
      }

      return "input_number_text_left";
    }

  },
  computed: {
    irdSize() {
      var _this$$IRDD;

      return this.size || ((_this$$IRDD = this.$IRDD) === null || _this$$IRDD === void 0 ? void 0 : _this$$IRDD.size);
    }

  },
  watch: {},

  render() {
    const h = arguments[0];
    const styles = this.styles,
          value = this.value,
          attributes = this.attributes,
          event = this.event;
    return h("div", {
      "class": `ird-design_input-number  ${attributes.align ? "input_number_text_center" : ""} ${this.irdSize ? "ird-design_input-number--" + this.irdSize : ""}`
    }, [this.prependTitle(), h("el-input-number", babel_helper_vue_jsx_merge_props_default()([{}, {
      class: this.handleClass(),
      style: styles,
      props: _objectSpread(_objectSpread({
        size: this.irdSize,
        value
      }, attributesDefault), attributes),
      on: _objectSpread(_objectSpread({}, event), {}, {
        input: this.handleInput
      })
    }])), this.appendTitle()]);
  }

});
// CONCATENATED MODULE: ./packages/inputNumber/index.js


src.install = function (Vue) {
  Vue.component(src.name, src);
};

/* harmony default export */ var inputNumber = __webpack_exports__["default"] = (src);

/***/ })

/******/ });