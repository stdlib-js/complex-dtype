"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(Y,o){
var l={Complex64:"complex64",Complex128:"complex128"};o.exports=l
});var p=t(function(D,i){
var m=require('@stdlib/complex-float32/dist'),n=require('@stdlib/complex-float64/dist'),q=[m,n];i.exports=q
});var c=t(function(N,u){
var C=["complex64","complex128"];u.exports=C
});var v=t(function(O,x){
var S=require('@stdlib/utils-constructor-name/dist'),T=s(),f=p(),a=c(),d=a.length;function y(e){var r;for(r=0;r<d;r++)if(e instanceof f[r])return a[r];return T[S(e)]||null}x.exports=y
});var E=v();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
