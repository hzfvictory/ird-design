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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./packages/irdUpload/src/ImgUpload.vue?vue&type=template&id=f616ce1c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "zy-ele-design-upload" },
    [
      _c(
        "el-upload",
        {
          class: _vm.value
            ? "avatar-uploader avatar-success"
            : "avatar-uploader",
          attrs: {
            action: _vm.action,
            headers: { Authentication: _vm.token },
            "show-file-list": false,
            "before-upload": _vm.beforeAvatarUpload,
            "on-success": _vm.handleAvatarSuccess
          }
        },
        [
          !_vm.value
            ? _c("i", { staticClass: "el-icon-plus avatar-uploader-icon" })
            : [
                _c("img", {
                  staticClass: "avatar",
                  attrs: { src: _vm.value, alt: "图片" }
                }),
                _c("div", { staticClass: "icon-control" }, [
                  _c("i", {
                    staticClass: "el-icon-zoom-in",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.avatarPreview.apply(null, arguments)
                      }
                    }
                  }),
                  _c("i", {
                    staticClass: "el-icon-delete",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.avatarRemove.apply(null, arguments)
                      }
                    }
                  })
                ])
              ]
        ],
        2
      ),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.dialogImgVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogImgVisible = $event
            }
          }
        },
        [
          _c("img", {
            attrs: { width: "300", src: _vm.dialogImageUrl, alt: "" }
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/irdUpload/src/ImgUpload.vue?vue&type=template&id=f616ce1c&

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/irdUpload/src/ImgUpload.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const defaultRule = {
  lt: undefined,
  format: "image/jpeg,image/jpg,image/png,image/gif",
  size: {
    width: undefined,
    height: undefined
  }
};
/* harmony default export */ var ImgUploadvue_type_script_lang_js_ = ({
  name: "IrdImgUpload",
  components: {
    [external_element_ui_["Dialog"].name]: external_element_ui_["Dialog"],
    [external_element_ui_["Upload"].name]: external_element_ui_["Upload"]
  },

  data() {
    return {
      dialogImgVisible: false,
      dialogImageUrl: undefined
    };
  },

  props: {
    value: String,
    action: String,
    // 请求地址
    token: {
      type: String,
      default: localStorage.getItem("token")
    },
    // prop: String, //当前数据集合的key
    // 图片大小、格式、尺寸
    rule: {
      type: Object,

      default() {
        return _objectSpread({}, defaultRule);
      }

    }
  },
  methods: {
    // 上传校验
    beforeAvatarUpload(file) {
      const rule = _objectSpread(_objectSpread({}, defaultRule), this.rule);

      const lt = rule.lt,
            format = rule.format,
            _rule$size = rule.size,
            size = _rule$size === void 0 ? {} : _rule$size;
      const isJPG = format.split(",").includes(file.type);
      const isLt = lt ? file.size / 1024 < lt : true;
      const width = size.width,
            height = size.height;
      let isSize = true;

      if (width || height) {
        isSize = new Promise(function (resolve, reject) {
          let _URL = window.URL || window.webkitURL;

          let img = new Image();

          img.onload = function () {
            let valid = img.width === width && img.height === height;
            valid ? resolve() : reject(img);
          };

          img.src = _URL.createObjectURL(file);
        }).then(() => {
          return file;
        }, err => {
          console.log("宽:" + err.width, "长:" + err.height);
          external_element_ui_["Message"].error(`上传的图片必须是${width}*${height}!`);
          return Promise.reject();
        });
      }

      if (!isJPG) external_element_ui_["Message"].error(`上传图片只能是${format}格式!`);
      setTimeout(() => {
        // 防止两个同时弹出
        if (!isLt) external_element_ui_["Message"].error(`上传图片大小不能超过${lt}K!`);
      }, 0);
      return isJPG && isLt && isSize;
    },

    // 上传成功
    handleAvatarSuccess(res) {
      const data = res.data,
            errorMsg = res.errorMsg;

      try {
        this.$emit("input", data.url); // _.set(this.formData, this.prop, data.url);
      } catch (e) {
        this.$message.error(errorMsg);
      }
    },

    // 图片删除
    avatarRemove() {
      this.$emit("input", undefined); // _.set(this.formData, this.prop, undefined);
    },

    // 图片预览
    avatarPreview() {
      this.dialogImageUrl = this.value;
      this.dialogImgVisible = true;
    }

  }
});
// CONCATENATED MODULE: ./packages/irdUpload/src/ImgUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ImgUploadvue_type_script_lang_js_ = (ImgUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/irdUpload/src/ImgUpload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ImgUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/irdUpload/src/ImgUpload.vue"
/* harmony default export */ var ImgUpload = (component.exports);
// CONCATENATED MODULE: ./packages/irdUpload/index.js


ImgUpload.install = function (Vue) {
  Vue.component(ImgUpload.name, ImgUpload);
};

/* harmony default export */ var irdUpload = __webpack_exports__["default"] = (ImgUpload);

/***/ })
/******/ ]);