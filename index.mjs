// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import{factory as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-three@v0.0.8-esm/index.mjs";var g={copy:!0};function b(v,y,x){var w,T,R,L,E;if(!n(v))throw new TypeError(a("0RT48",v));if(!r(y))throw new TypeError(a("0RT7T",y));if(T=p(g),arguments.length>2){if(!i(x))throw new TypeError(a("0RT8b",x));if(l(x,"copy")&&(T.copy=x.copy,!d(x.copy)))throw new TypeError(a("0RT30","copy",x.copy));if(l(x,"prng")){if(!o(x.prng))throw new TypeError(a("0RT7M","prng",x.prng));T.prng=x.prng}else if(l(x,"state")){if(T.state=x.state,!m(x.state))throw new TypeError(a("0RT7I","state",x.state))}else if(l(x,"seed")&&(T.seed=x.seed,void 0===x.seed))throw new TypeError(a("0RT7N","seed",x.seed))}return w=u(-(E=y*c),E,T),e(R={},"next",M),e(R,"return",z),f&&o(v[f])&&e(R,f,A),x&&x.prng?(e(R,"seed",null),e(R,"seedLength",null),s(R,"state",j(null),h),e(R,"stateLength",null),e(R,"byteLength",null),e(R,"PRNG",x.prng)):(t(R,"seed",N),t(R,"seedLength",P),s(R,"state",q,I),t(R,"stateLength",G),t(R,"byteLength",k),e(R,"PRNG",w.PRNG)),R;function N(){return w.seed}function P(){return w.seedLength}function G(){return w.stateLength}function k(){return w.byteLength}function q(){return w.state}function I(e){w.state=e}function M(){var e;return L?{done:!0}:(e=v.next()).done?(L=!0,e):{value:e="number"==typeof e.value?e.value+w():NaN,done:!1}}function z(e){return L=!0,arguments.length?{value:e,done:!0}:{done:!0}}function A(){return b(v[f](),y,T)}}export{b as default};
//# sourceMappingURL=index.mjs.map
