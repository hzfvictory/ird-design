module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}({0:function(e,t){e.exports=require("element-ui")},2:function(e,t){e.exports=require("@vue/babel-helper-vue-jsx-merge-props")},9:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),u=n(0);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={precision:0,min:0,step:1,placeholder:"请输入",controls:!0,disabled:!1};var a={name:"IrdInputNumber",components:{[u.InputNumber.name]:u.InputNumber},data:()=>({}),props:{attributes:{type:Object,default:()=>o({},p)},event:{type:Object},styles:{type:String,default:"width:100%"},value:{type:[Number,String],default:void 0},lable:{type:Array,default:()=>[]}},methods:{handleInput(e){this.$emit("input",e),this.$emit("change",e)},prependTitle(){const e=this.$createElement,t=this.lable.find((e={})=>"left"===e.align);return t&&e("div",{class:"el-input-group__prepend custom_prepend"},[t.text])},appendTitle(){const e=this.$createElement,t=this.lable.find((e={})=>"right"===e.align);return t&&e("div",{class:"el-input-group__append custom_append"},[t.text])},handleClass(){const e=this.lable;if(1===e.length){if("left"===e[0].align)return"input_number_text_left input_border_left_none";if("right"===e[0].align)return"input_number_text_left input_border_right_none"}return 2===e.length&&e[1].align!==e[0].align&&["left","right"].includes(e[0].align)&&["left","right"].includes(e[1].align)?"input_number_text_left input_border_none":"input_number_text_left"}},computed:{irdSize(){var e;return this.size||(null===(e=this.$IRDD)||void 0===e?void 0:e.size)}},watch:{},render(){const e=arguments[0],t=this.styles,n=this.value,r=this.attributes,u=this.event;return e("div",{class:"irdd_input-number"},[e("div",{class:`ird-design_input-number  ${r.align?"input_number_text_center":""} ${this.irdSize?"ird-design_input-number--"+this.irdSize:""}`},[this.prependTitle(),e("el-input-number",i()([{},{class:this.handleClass(),style:t,props:o(o({size:this.irdSize,value:n},p),r),on:o(o({},u),{},{input:this.handleInput})}])),this.appendTitle()])])},install:function(e){e.component(a.name,a)}};t.default=a}});