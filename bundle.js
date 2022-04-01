// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).dtype=r()}(this,(function(){"use strict";var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return t&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,n=e;var o=function(t){return n.call(t)},i=Object.prototype.hasOwnProperty;var u=function(t,r){return null!=t&&i.call(t,r)},a="function"==typeof Symbol?Symbol.toStringTag:"",c=u,l=a,f=e;var p=o,y=function(t){var r,e,n;if(null==t)return f.call(t);e=t[l],r=c(t,l);try{t[l]=void 0}catch(r){return f.call(t)}return n=f.call(t),r?t[l]=e:delete t[l],n},m=r()?y:p,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var v=function(){try{return s({},"x",{}),!0}catch(t){return!1}},b=Object.defineProperty,h=Object.prototype,d=h.toString,_=h.__defineGetter__,w=h.__defineSetter__,E=h.__lookupGetter__,g=h.__lookupSetter__;var T=b,S=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===d.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(E.call(t,r)||g.call(t,r)?(n=t.__proto__,t.__proto__=h,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&_&&_.call(t,r,e.get),u&&w&&w.call(t,r,e.set),t},j=v()?T:S,A=j;var P=function(t,r,e){A(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var O=function(){return/^\s*function\s*([^(]*)/i},x=O;P(x,"REGEXP",O());var N=x,F=m;var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===F(t)};var R=function(t){return null!==t&&"object"==typeof t};P(R,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!B(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(R));var V=R;var C=m,I=N.REGEXP,L=function(t){return V(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var M=function(t){var r,e,n;if(("Object"===(e=C(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=I.exec(n.toString()))return r[1]}return L(t)?"Buffer":e},k=M,Y={Complex64:"complex64",Complex128:"complex128"};var G=function(t){return"number"==typeof t},J=Number,X=J.prototype.toString;var q=m,z=J,D=function(t){try{return X.call(t),!0}catch(t){return!1}},H=r();var K=function(t){return"object"==typeof t&&(t instanceof z||(H?D(t):"[object Number]"===q(t)))},Q=G,U=K;var W=P,Z=function(t){return Q(t)||U(t)},$=K;W(Z,"isPrimitive",G),W(Z,"isObject",$);var tt=Z,rt="function"==typeof Math.fround?Math.fround:null,et=m,nt="function"==typeof Float32Array;var ot=function(t){return nt&&t instanceof Float32Array||"[object Float32Array]"===et(t)},it=Number.POSITIVE_INFINITY,ut="function"==typeof Float32Array?Float32Array:null,at=ot,ct=it,lt=ut;var ft="function"==typeof Float32Array?Float32Array:void 0,pt=function(){throw new Error("not implemented")},yt=new(function(){var t,r;if("function"!=typeof lt)return!1;try{r=new lt([1,3.14,-3.14,5e40]),t=at(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ct}catch(r){t=!1}return t}()?ft:pt)(1);var mt=rt;"function"!=typeof mt&&(mt=function(t){return yt[0]=t,yt[0]});var st=tt.isPrimitive,vt=j,bt=P,ht=mt,dt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},_t=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function wt(t,r){if(!(this instanceof wt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!st(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!st(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return vt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ht(t)}),vt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ht(r)}),this}bt(wt,"BYTES_PER_ELEMENT",4),bt(wt.prototype,"BYTES_PER_ELEMENT",4),bt(wt.prototype,"byteLength",8),bt(wt.prototype,"toString",dt),bt(wt.prototype,"toJSON",_t);var Et=wt;var gt=tt.isPrimitive,Tt=j,St=P,jt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},At=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function Pt(t,r){if(!(this instanceof Pt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!gt(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!gt(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return Tt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),Tt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}St(Pt,"BYTES_PER_ELEMENT",8),St(Pt.prototype,"BYTES_PER_ELEMENT",8),St(Pt.prototype,"byteLength",16),St(Pt.prototype,"toString",jt),St(Pt.prototype,"toJSON",At);var Ot=k,xt=Y,Nt=[Et,Pt],Ft=["complex64","complex128"],Bt=Ft.length;return function(t){var r;for(r=0;r<Bt;r++)if(t instanceof Nt[r])return Ft[r];return xt[Ot(t)]||null}}));
//# sourceMappingURL=bundle.js.map
