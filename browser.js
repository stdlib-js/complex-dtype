// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=r()?function(e){var r,i,a,c,u;if(null==e)return t.call(e);i=e[o],u=o,r=null!=(c=e)&&n.call(c,u);try{e[o]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[o]=i:delete e[o],a}:function(e){return t.call(e)},c="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty;function s(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function p(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+l(i):l(i)+e,n&&(e="-"+e)),e}var f=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function h(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=p(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=p(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===g.call(e.specifier)?g.call(t):f.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var d=Math.abs,m=String.prototype.toLowerCase,b=String.prototype.toUpperCase,w=String.prototype.replace,v=/e\+(\d)$/,E=/e-(\d)$/,_=/^(\d+)$/,S=/^(\d+)e/,T=/\.0$/,x=/\.0*e/,j=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":d(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=w.call(t,j,"$1e"),t=w.call(t,x,"e"),t=w.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,v,"e+0$1"),t=w.call(t,E,"e-0$1"),e.alternate&&(t=w.call(t,_,"$1."),t=w.call(t,S,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===b.call(e.specifier)?b.call(t):m.call(t)}function A(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function F(e,r,t){var n=r-e.length;return n<0?e:e=t?e+A(n):A(n)+e}var V=String.fromCharCode,I=isNaN,O=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,i,o,a,c,u,s;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(y(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,I(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){return"string"==typeof e}function B(e){var r,t,n;if(!$(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=L(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var M=Object.prototype,G=M.toString,Y=M.__defineGetter__,Z=M.__defineSetter__,W=M.__lookupGetter__,X=M.__lookupSetter__,J=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||X.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(e,r,t.get),a&&Z&&Z.call(e,r,t.set),e};function U(e,r,t){J(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(){return/^\s*function\s*([^(]*)/i}var q=/^\s*function\s*([^(]*)/i;U(z,"REGEXP",q);var D=Array.isArray?Array.isArray:function(e){return"[object Array]"===a(e)};function H(e){return null!==e&&"object"==typeof e}function K(e){var r,t,n,i;if(("Object"===(t=a(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=q.exec(n.toString()))return r[1]}return H(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(H,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!D(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(H));var Q={Complex64:"complex64",Complex128:"complex128"};function ee(e){return"number"==typeof e}var re=Number,te=re.prototype.toString,ne=r();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Number]"===a(e)))}function oe(e){return ee(e)||ie(e)}U(oe,"isPrimitive",ee),U(oe,"isObject",ie);var ae="function"==typeof Math.fround?Math.fround:null,ce="function"==typeof Float32Array,ue=Number.POSITIVE_INFINITY,se="function"==typeof Float32Array?Float32Array:null,le="function"==typeof Float32Array?Float32Array:void 0,pe=new(function(){var e,r,t;if("function"!=typeof se)return!1;try{r=new se([1,3.14,-3.14,5e40]),t=r,e=(ce&&t instanceof Float32Array||"[object Float32Array]"===a(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ue}catch(r){e=!1}return e}()?le:function(){throw new Error("not implemented")})(1),fe="function"==typeof ae?ae:function(e){return pe[0]=e,pe[0]};function ge(e,r){if(!(this instanceof ge))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ee(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ee(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return J(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:fe(e)}),J(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:fe(r)}),this}function he(e,r){if(!(this instanceof he))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ee(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ee(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return J(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),J(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}U(ge,"BYTES_PER_ELEMENT",4),U(ge.prototype,"BYTES_PER_ELEMENT",4),U(ge.prototype,"byteLength",8),U(ge.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),U(ge.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),U(he,"BYTES_PER_ELEMENT",8),U(he.prototype,"BYTES_PER_ELEMENT",8),U(he.prototype,"byteLength",16),U(he.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),U(he.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ye=[ge,he],de=["complex64","complex128"],me=de.length;return function(e){var r;for(r=0;r<me;r++)if(e instanceof ye[r])return de[r];return Q[K(e)]||null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dtype=r();
//# sourceMappingURL=browser.js.map
