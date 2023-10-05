// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,e="function"==typeof n?n.toStringTag:"";var l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,l,a,y,c;if(null==t)return o.call(t);l=t[e],c=e,n=null!=(y=t)&&r.call(y,c);try{t[e]=void 0}catch(r){return o.call(t)}return a=o.call(t),n?t[e]=l:delete t[e],a}:function(t){return o.call(t)},a="function"==typeof BigInt64Array;function y(t){return a&&t instanceof BigInt64Array||"[object BigInt64Array]"===l(t)}export{y as default};
//# sourceMappingURL=mod.js.map
