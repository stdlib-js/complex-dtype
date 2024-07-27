// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-ctors@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtypes@v0.2.2-esm/index.mjs";var r,n={Complex64:"complex64",Complex128:"complex128"},o=s(),m=[];for(r=0;r<o.length;r++)m.push(e(o[r]));var l=o.length;function i(e){var s;for(s=0;s<l;s++)if(e instanceof m[s])return o[s];return n[t(e)]||null}export{i as default};
//# sourceMappingURL=index.mjs.map
