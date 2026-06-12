"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(m){throw (r=0, m)}};};var u=t(function(g,o){
var S={Complex64:"complex64",Complex128:"complex128"};o.exports=S
});var i=t(function(N,a){
var T=require('@stdlib/complex-dtypes/dist'),f=T();a.exports=f
});var n=t(function(O,v){
var d=require('@stdlib/complex-ctors/dist'),c=i(),p=[],s;for(s=0;s<c.length;s++)p.push(d(c[s]));v.exports=p
});var l=t(function(R,q){
var y=require('@stdlib/utils-constructor-name/dist'),C=u(),E=n(),x=i(),P=x.length;function Y(e){var r;for(r=0;r<P;r++)if(e instanceof E[r])return x[r];return C[y(e)]||null}q.exports=Y
});var h=l();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
