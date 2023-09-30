(()=>{"use strict";var n={718:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,".toast-container {\n  position: fixed;\n  width: auto;\n  height: auto;\n  bottom: 20px;\n  right: 20px;\n  z-index: 9999;\n  width: 400px;\n  height: 300px;\n  perspective: 1000px;\n  color: currentColor;\n}\n.toast-container:hover .toast {\n  transform: translateY(0);\n}\n.toast-container:hover .toast:nth-child(1) {\n  z-index: 3;\n  transform: translateY(0) scale(1);\n  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n.toast-container:hover .toast:nth-child(2) {\n  z-index: 2;\n  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);\n  transform: translateY(-130%) scale(1);\n}\n.toast-container:hover .toast:nth-child(3) {\n  z-index: 1;\n  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);\n  transform: translateY(-260%) scale(1);\n}\n.toast {\n  /* position: absolute; */\n  position: relative;\n\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  transition: all 0.35s cubic-bezier(0.25, 0.75, 0.6, 0.98),\n    opacity 0.4s ease-in-out;\n  border-radius: 0.5rem;\n  background-color: #03f;\n  width: 420px;\n  max-width: min(420px, 100vw - 48px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  line-height: 21px;\n  padding: 16px;\n  border-radius: 12px;\n  max-height: 63px;\n  background-color: #0072f4;\n}\n.toast.show {\n  opacity: 1;\n}\n.toast:nth-child(1) {\n  z-index: 3;\n  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.5);\n  transform: translateY(0) scale(1);\n}\n.toast:nth-child(2) {\n  z-index: 2;\n  box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.4);\n  transform: translateY(-10px) scale(0.9);\n}\n.toast:nth-child(3) {\n  z-index: 1;\n  box-shadow: 2px 4px 6px 4px rgba(0, 0, 0, 0.3);\n  transform: translateY(-20px) scale(0.8);\n}\n.toast button {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  width: 20px;\n  height: 15px;\n  background-color: rgba(0, 0, 0, 0);\n}\n.page-one {\n  height: 100vh;\n  width: 100vw;\n}\n.bg-cyan {\n  width: 100vw;\n  height: 100vh;\n  background-color: aqua;\n}\n.bg-mint {\n  width: 100vw;\n  height: 100vh;\n  background-color: #00fa9a;\n}\n.test-container-pages {\n  height: 100%;\n  width: 100%;\n}\n/* .toast-success {\n  background-color: #00fa9a;\n}\n.toast-error {\n  background-color: #dc3545;\n}\n.toast-warning {\n  background-color: #ffc107;\n}\n.toast-info {\n  background-color: aqua;\n} */\n/* Success - A minty green shade */\n.toast-success {\n  background-color: #00ffaa;\n}\n\n/* Error - A more aqua-like red */\n.toast-error {\n  background-color: #ff4560;\n}\n\n/* Warning - An aqua-like orange */\n.toast-warning {\n  background-color: #ffaa44;\n}\n\n/* Info - Keeping it as aqua */\n.toast-info {\n  background-color: #00ffff;\n}\n\n.progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1; /* Make sure this is above the other elements but below text */\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=e(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nc=void 0;var r={};(()=>{e.r(r),e.d(r,{TOAST_TYPES:()=>C,ToastProvider:()=>k,useToast:()=>T});const n=require("react");var t=e.n(n),o=e(379),a=e.n(o),i=e(795),s=e.n(i),c=e(569),u=e.n(c),l=e(565),d=e.n(l),f=e(216),p=e.n(f),h=e(589),v=e.n(h),m=e(718),b={};function g(n){return function(n){if(Array.isArray(n))return w(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||y(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a,i,s=[],c=!0,u=!1;try{if(a=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=a.call(e)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(n){u=!0,o=n}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(n,t)||y(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(n,t){if(n){if("string"==typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}b.styleTagTransform=v(),b.setAttributes=d(),b.insert=u().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=p(),a()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;var S=(0,n.createContext)(),T=function(){var t=(0,n.useContext)(S);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},C={SUCCESS:"success",ERROR:"error",WARNING:"warning",INFO:"info"};function E(e){var r=e.toast,o=e.index,a=e.visibleToasts,i=e.removeToast,s=x((0,n.useState)(100),2),c=s[0],u=s[1];return(0,n.useEffect)((function(){if(r.duration){var n=(new Date).getTime(),t=setInterval((function(){var e=(new Date).getTime()-n,o=r.duration-e;u(o/r.duration*100),o<=0&&(clearInterval(t),i(r.id))}),100);return function(){return clearInterval(t)}}}),[r,i]),t().createElement("div",{key:r.id,className:"toast toast-".concat(o," ").concat(a.includes(r.id)?"show":""," toast-").concat(r.type)},r.duration&&t().createElement("div",{className:"progress-bar",style:{width:"".concat(c,"%")}}),t().createElement("div",{className:"message",style:{position:"relative",zIndex:2}},r.message),t().createElement("button",{onClick:function(){return i(r.id)}},t().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t().createElement("path",{d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"}))))}var k=function(e){var r=e.children,o=x((0,n.useState)([]),2),a=o[0],i=o[1],s=x((0,n.useState)([]),2),c=s[0],u=s[1],l=x((0,n.useState)([]),2),d=l[0],f=l[1];(0,n.useEffect)((function(){a.length>3?(f(a.slice(0,-3)),u(a.slice(-3).map((function(n){return n.id})))):u(a.map((function(n){return n.id})))}),[a]);var p=function(n){if(i(a.filter((function(t){return t.id!==n}))),d.length>0){var t=d[0];f(d.slice(1)),u((function(n){return[].concat(g(n),[t.id])}))}};return t().createElement(S.Provider,{value:{addToast:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.type,r=void 0===e?C.INFO:e,o=t.style,s=void 0===o?{}:o,c=t.duration,u=void 0===c?null:c,l=(new Date).getTime();i([].concat(g(a),[{id:l,message:n,type:r,style:s,duration:u}]))},removeToast:p}},r,t().createElement("div",{className:"toast-container"},g(a).reverse().map((function(n,e){return t().createElement(E,{key:n.id,toast:n,index:e,visibleToasts:c,removeToast:p})}))))}})(),module.exports=r})();