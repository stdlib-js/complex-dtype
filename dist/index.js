"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(D,o){
var m={Complex64:"complex64",Complex128:"complex128"};o.exports=m
});var i=t(function(g,a){
var S=require('@stdlib/complex-dtypes/dist'),T=S();a.exports=T
});var n=t(function(N,v){
var f=require('@stdlib/complex-ctors/dist'),c=i(),p=[],s;for(s=0;s<c.length;s++)p.push(f(c[s]));v.exports=p
});var l=t(function(O,q){
var d=require('@stdlib/utils-constructor-name/dist'),y=u(),C=n(),x=i(),E=x.length;function P(e){var r;for(r=0;r<E;r++)if(e instanceof C[r])return x[r];return y[d(e)]||null}q.exports=P
});var Y=l();module.exports=Y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
