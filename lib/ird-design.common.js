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

module.exports = require("irdd/lib/button");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("irdd/lib/enhanceTable");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("irdd/lib/inputNumber");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("irdd/lib/withSearch");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("irdd/lib/irdSelect");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("irdd/lib/irdUpload");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("irdd/lib/irdModal");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var packages_button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var packages_button_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(packages_button_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var packages_enhanceTable_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var packages_enhanceTable_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(packages_enhanceTable_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var packages_inputNumber_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var packages_inputNumber_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(packages_inputNumber_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var packages_withSearch_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var packages_withSearch_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(packages_withSearch_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var packages_irdSelect_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var packages_irdSelect_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(packages_irdSelect_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var packages_irdUpload_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var packages_irdUpload_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(packages_irdUpload_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var packages_irdModal_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var packages_irdModal_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(packages_irdModal_index_js__WEBPACK_IMPORTED_MODULE_6__);
/*
* 约定好  组件路径写到 index.js 处
*/






 // import * as utils from "./utils";

const components = [packages_button_index_js__WEBPACK_IMPORTED_MODULE_0___default.a, packages_enhanceTable_index_js__WEBPACK_IMPORTED_MODULE_1___default.a, packages_inputNumber_index_js__WEBPACK_IMPORTED_MODULE_2___default.a, packages_withSearch_index_js__WEBPACK_IMPORTED_MODULE_3___default.a, packages_irdSelect_index_js__WEBPACK_IMPORTED_MODULE_4___default.a, packages_irdUpload_index_js__WEBPACK_IMPORTED_MODULE_5___default.a, packages_irdModal_index_js__WEBPACK_IMPORTED_MODULE_6___default.a];

const install = function install(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  /* medium/small/mini */

  Vue.prototype.$IRDD = {
    size: opts.size || "small",
    zIndex: opts.zIndex || 2000
  };
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  install,
  // utils: { utils },
  // utils, // 不在这引入了 直接使用路径
  Button: (packages_button_index_js__WEBPACK_IMPORTED_MODULE_0___default()),
  EnhanceTable: (packages_enhanceTable_index_js__WEBPACK_IMPORTED_MODULE_1___default()),
  InputNumber: (packages_inputNumber_index_js__WEBPACK_IMPORTED_MODULE_2___default()),
  WithSearch: (packages_withSearch_index_js__WEBPACK_IMPORTED_MODULE_3___default()),
  IrdSelect: (packages_irdSelect_index_js__WEBPACK_IMPORTED_MODULE_4___default()),
  IrdUpload: (packages_irdUpload_index_js__WEBPACK_IMPORTED_MODULE_5___default()),
  IrdModal: (packages_irdModal_index_js__WEBPACK_IMPORTED_MODULE_6___default())
});

/***/ })
/******/ ])["default"];