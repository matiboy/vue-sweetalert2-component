!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("sweetalert2")):"function"==typeof define&&define.amd?define("vue-sweetalert2-component",["sweetalert2"],t):"object"==typeof exports?exports["vue-sweetalert2-component"]=t(require("sweetalert2")):e["vue-sweetalert2-component"]=t(e.sweetalert2)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=n(1)(n(2),n(4),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},s=typeof e["default"];"object"!==s&&"function"!==s||(o=e,u=e["default"]);var i="function"==typeof u?u.options:u;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var c=Object.create(i.computed||null);Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}}),i.computed=c}return{esModule:o,exports:u,options:i}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return n(3)};t["default"]={name:"SweetAlert",props:{alert:{type:Object,required:!0},display:{type:Boolean,required:!0}},watch:{display:function(e){var t=this;e?this.swal(this.alert).then(function(e){return t.$emit("resolve",e)},function(e){return t.$emit("reject",e)}):this.swal.close()}},mounted:function(){this.swal=r()}}},function(t,n){t.exports=e},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}}])});