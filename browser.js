// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=function(){return t&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,n=r,o=function(t){return n.call(t)},i=Object.prototype.hasOwnProperty,u=function(t,e){return null!=t&&i.call(t,e)},a="function"==typeof Symbol?Symbol.toStringTag:"",c=u,l=a,f=r,p=o,y=function(t){var e,r,n;if(null==t)return f.call(t);r=t[l],e=c(t,l);try{t[l]=void 0}catch(e){return f.call(t)}return n=f.call(t),e?t[l]=r:delete t[l],n},m=e()?y:p,s="function"==typeof Object.defineProperty?Object.defineProperty:null,b=function(){try{return s({},"x",{}),!0}catch(t){return!1}},h=Object.defineProperty,v=Object.prototype,d=v.toString,_=v.__defineGetter__,w=v.__defineSetter__,E=v.__lookupGetter__,g=v.__lookupSetter__,T=h,S=function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===d.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(E.call(t,e)||g.call(t,e)?(n=t.__proto__,t.__proto__=v,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&_&&_.call(t,e,r.get),u&&w&&w.call(t,e,r.set),t},j=b()?T:S,A=j,P=function(t,e,r){A(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},O=function(){return/^\s*function\s*([^(]*)/i},x=O;P(x,"REGEXP",/^\s*function\s*([^(]*)/i);var N=x,F=m,B=Array.isArray?Array.isArray:function(t){return"[object Array]"===F(t)},R=function(t){return null!==t&&"object"==typeof t};P(R,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!B(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(R));var V=R,C=m,I=N.REGEXP,L=function(t){return V(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))},M=function(t){var e,r,n;if(("Object"===(r=C(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=I.exec(n.toString()))return e[1]}return L(t)?"Buffer":r},k=M,Y={Complex64:"complex64",Complex128:"complex128"},G=function(t){return"number"==typeof t},J=Number,X=J.prototype.toString,q=m,z=J,D=function(t){try{return X.call(t),!0}catch(t){return!1}},H=e(),K=function(t){return"object"==typeof t&&(t instanceof z||(H?D(t):"[object Number]"===q(t)))},Q=G,U=K,W=P,Z=function(t){return Q(t)||U(t)},$=K;W(Z,"isPrimitive",G),W(Z,"isObject",$);var tt=Z,et="function"==typeof Math.fround?Math.fround:null,rt=m,nt="function"==typeof Float32Array,ot=function(t){return nt&&t instanceof Float32Array||"[object Float32Array]"===rt(t)},it=Number.POSITIVE_INFINITY,ut="function"==typeof Float32Array?Float32Array:null,at=ot,ct=it,lt=ut,ft="function"==typeof Float32Array?Float32Array:void 0,pt=function(){throw new Error("not implemented")},yt=new(function(){var t,e;if("function"!=typeof lt)return!1;try{e=new lt([1,3.14,-3.14,5e40]),t=at(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ct}catch(e){t=!1}return t}()?ft:pt)(1),mt=et;"function"!=typeof mt&&(mt=function(t){return yt[0]=t,yt[0]});var st=tt.isPrimitive,bt=j,ht=P,vt=mt,dt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},_t=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function wt(t,e){if(!(this instanceof wt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!st(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!st(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return bt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:vt(t)}),bt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:vt(e)}),this}ht(wt,"BYTES_PER_ELEMENT",4),ht(wt.prototype,"BYTES_PER_ELEMENT",4),ht(wt.prototype,"byteLength",8),ht(wt.prototype,"toString",dt),ht(wt.prototype,"toJSON",_t);var Et=wt,gt=tt.isPrimitive,Tt=j,St=P,jt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},At=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function Pt(t,e){if(!(this instanceof Pt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!gt(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!gt(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return Tt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),Tt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}St(Pt,"BYTES_PER_ELEMENT",8),St(Pt.prototype,"BYTES_PER_ELEMENT",8),St(Pt.prototype,"byteLength",16),St(Pt.prototype,"toString",jt),St(Pt.prototype,"toJSON",At);var Ot=[Et,Pt],xt=["complex64","complex128"],Nt=xt.length;return function(t){var e;for(e=0;e<Nt;e++)if(t instanceof Ot[e])return xt[e];return Y[k(t)]||null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dtype=e();
//# sourceMappingURL=browser.js.map
