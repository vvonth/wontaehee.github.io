!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r={inline:["$","$"],display:["$$","$$"]},o=function(e,t){void 0===t&&(t=r);for(var n=e.querySelectorAll(".katex-mathml + .katex-html"),o=0;o<n.length;o++){var l=n[o];l.remove?l.remove(null):l.parentNode.removeChild(l)}for(var i=e.querySelectorAll(".katex-mathml"),a=0;a<i.length;a++){var u=i[a],f=u.querySelector("annotation");f&&(u.replaceWith?u.replaceWith(f):u.parentNode.replaceChild(f,u),f.innerHTML=t.inline[0]+f.innerHTML+t.inline[1])}for(var c=e.querySelectorAll(".katex-display annotation"),d=0;d<c.length;d++){var p=c[d];p.innerHTML=t.display[0]+p.innerHTML.substr(t.inline[0].length,p.innerHTML.length-t.inline[0].length-t.inline[1].length)+t.display[1]}return e};document.addEventListener("copy",function(e){var t=window.getSelection();if(!t.isCollapsed){var n=t.getRangeAt(0).cloneContents();if(n.querySelector(".katex-mathml")){for(var r=[],l=0;l<n.childNodes.length;l++)r.push(n.childNodes[l].outerHTML);e.clipboardData.setData("text/html",r.join("")),e.clipboardData.setData("text/plain",o(n).textContent),e.preventDefault()}}})}]).default});