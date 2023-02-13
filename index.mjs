// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import{factory as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-three@v0.0.8-esm/index.mjs";function c(g,b,v){var y,x,w,T,R;if(!n(g))throw new TypeError(a("0RT48",g));if(!r(b))throw new TypeError(a("0RT7T",b));if(x={copy:!0},arguments.length>2){if(!i(v))throw new TypeError(a("0RT8b",v));if(l(v,"copy")&&(x.copy=v.copy,!d(v.copy)))throw new TypeError(a("0RT30","copy",v.copy));if(l(v,"prng")){if(!o(v.prng))throw new TypeError(a("0RT7M","prng",v.prng));x.prng=v.prng}else if(l(v,"state")){if(x.state=v.state,!m(v.state))throw new TypeError(a("0RT7I","state",v.state))}else if(l(v,"seed")&&(x.seed=v.seed,void 0===v.seed))throw new TypeError(a("0RT7N","seed",v.seed))}return y=f(-(R=b*u),R,x),e(w={},"next",q),e(w,"return",I),j&&o(g[j])&&e(w,j,M),v&&v.prng?(e(w,"seed",null),e(w,"seedLength",null),s(w,"state",h(null),p),e(w,"stateLength",null),e(w,"byteLength",null),e(w,"PRNG",v.prng)):(t(w,"seed",L),t(w,"seedLength",E),s(w,"state",G,k),t(w,"stateLength",N),t(w,"byteLength",P),e(w,"PRNG",y.PRNG)),w;function L(){return y.seed}function E(){return y.seedLength}function N(){return y.stateLength}function P(){return y.byteLength}function G(){return y.state}function k(e){y.state=e}function q(){var e;return T?{done:!0}:(e=g.next()).done?(T=!0,e):{value:e="number"==typeof e.value?e.value+y():NaN,done:!1}}function I(e){return T=!0,arguments.length?{value:e,done:!0}:{done:!0}}function M(){return c(g[j](),b,x)}}export{c as default};
//# sourceMappingURL=index.mjs.map
