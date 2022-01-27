module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=7)}([function(e,t){e.exports=require("element-ui")},function(e,t,r){"use strict";function n(e,t,r,n,o,a,i,s){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):o&&(l=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}r.d(t,"a",(function(){return n}))},,,,,,function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ird-design-upload"},[r("el-upload",{class:e.value?"avatar-uploader avatar-success":"avatar-uploader",attrs:{action:e.action,headers:{Authentication:e.token},"show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess}},[e.value?[e.rule.format.includes("video")?[r("video",{staticClass:"avatar",attrs:{controls:"",src:e.value}}),r("i",{staticClass:"el-icon-delete",staticStyle:{left:"50%",transform:"translate(-50%, -50%)"},on:{click:function(t){return t.stopPropagation(),e.avatarRemove.apply(null,arguments)}}})]:[r("img",{staticClass:"avatar",attrs:{src:e.value,alt:"图片"}}),r("div",{staticClass:"icon-control"},[r("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return t.stopPropagation(),e.avatarPreview.apply(null,arguments)}}}),r("i",{staticClass:"el-icon-delete",on:{click:function(t){return t.stopPropagation(),e.avatarRemove.apply(null,arguments)}}})])]]:r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],2),r("el-dialog",{attrs:{visible:e.dialogImgVisible},on:{"update:visible":function(t){e.dialogImgVisible=t}}},[r("img",{attrs:{width:"300",src:e.dialogImageUrl,alt:""}})])],1)};n._withStripped=!0;var o=r(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c={lt:void 0,format:"image/jpeg,image/jpg,image/png,image/gif",size:{width:void 0,height:void 0},duration:[0],thre:0};var d={name:"IrdUpload",components:{[o.Dialog.name]:o.Dialog,[o.Upload.name]:o.Upload},data:()=>({dialogImgVisible:!1,dialogImageUrl:void 0}),props:{value:String,action:String,token:{type:String,default:localStorage.getItem("token")},rule:{type:Object,default:()=>l({},c)}},methods:{beforeAvatarUpload(e){const t=l(l({},c),this.rule),r=t.lt,n=t.format,i=t.size,s=void 0===i?{}:i,u=t.duration,d=t.thre,f=n.split(",").includes(e.type),p=!r||Math.round(e.size/1024)<r,g=s.width,v=s.height;let m=!0;if(t.format.includes("video")){let t=a(u,2),i=t[0],s=t[1],c=new Promise((t,r)=>{const n=URL.createObjectURL(e),o=document.createElement("video");o.onloadedmetadata=function(){function e(e,t,r){let n=/(\d+)/g;for(;n.exec(e);){let e=parseInt(RegExp.$1);if(e<t||e>r)return!1}return!0}URL.revokeObjectURL(n),e(o.videoWidth,g-d,g+d)&&e(o.videoHeight,v-d,v+d)?(i||s)&&(Math.round(o.duration)<=s&&Math.round(o.duration)>=i?Math.round(o.duration)>=i||r(l(l({},o),{},{message:`上传视频时长不能小于${i}秒！`})):r(l(l({},o),{},{message:`上传视频时长不能超过${s}秒,不能小于${i}秒！`}))):r(l(l({},o),{},{message:`上传视频尺寸不符合，只能是${g}*${v}!`})),t()},o.src=n,o.load()}).then(()=>e,e=>(o.Message.error(e.message),Promise.reject()));return f||o.Message.error(`上传视频只能是${n}格式!`),setTimeout(()=>{p||o.Message.error(`上传视频大小不能超过${r}K!`)},0),f&&p&&c}return(g||v)&&(m=new Promise((function(t,r){let n=window.URL||window.webkitURL,o=new Image;o.onload=function(){o.width===g&&o.height===v?t():r(o)},o.src=n.createObjectURL(e)})).then(()=>e,e=>(o.Message.error(`上传的图片必须是${g}*${v}!`),Promise.reject()))),f||o.Message.error(`上传图片只能是${n}格式!`),setTimeout(()=>{p||o.Message.error(`上传图片大小不能超过${r}K!`)},0),f&&p&&m},handleAvatarSuccess(e){const t=e.data,r=e.errorMsg;try{this.$emit("input",t.url)}catch(e){this.$message.error(r)}},avatarRemove(){this.$emit("input",void 0)},avatarPreview(){this.dialogImageUrl=this.value,this.dialogImgVisible=!0}}},f=r(1),p=Object(f.a)(d,n,[],!1,null,null,null);p.options.__file="packages/upload/src/upload.vue";var g=p.exports;g.install=function(e){e.component(g.name,g)};t.default=g}]);