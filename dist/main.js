module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("script");return t.src="https://www.editmode.app/assets/chunks.js",t.async=!0,document.body.append(t),u.default.createElement("div",null,e.children)};var r,o=n(1),u=(r=o)&&r.__esModule?r:{default:r}},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.chunk_type,n=e.identifier,a=e.children,l=(s=(0,r.useState)(""),p=2,function(e){if(Array.isArray(e))return e}(s)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}}(s,p)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(s,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],f=l[1],d=(0,r.useRef)("");var s,p;return(0,r.useEffect)((function(){u.default.get("https://www.editmode.app/api/v1/chunks/"+n).then((function(e){localStorage.setItem(n,JSON.stringify(e.data)),f(e.data)})).catch((function(e){return console.log(e)}))}),[n]),o.default.createElement(o.default.Fragment,null,"single_line_text"===t?o.default.createElement("span",{className:"chunk","data-chunk":n,ref:d,contentEditable:!0,suppressContentEditableWarning:!0},c?c.content:a):null)};var r=n(1),o=a(r),u=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n.d(t,"Editmode",(function(){return o.a}));var u=n(2),a=n.n(u);n.d(t,"Chunk",(function(){return a.a}))},function(e,t){e.exports=require("axios")}]);