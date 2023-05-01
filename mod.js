// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var l,e,a,y,c;if(null==t)return o.call(t);e=t[n],c=n,l=null!=(y=t)&&r.call(y,c);try{t[n]=void 0}catch(r){return o.call(t)}return a=o.call(t),l?t[n]=e:delete t[n],a}:function(t){return o.call(t)},e="function"==typeof BigInt64Array;function a(t){return e&&t instanceof BigInt64Array||"[object BigInt64Array]"===l(t)}export{a as default};
//# sourceMappingURL=mod.js.map
