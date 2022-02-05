/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-three@esm/index.mjs";var g={copy:!0},f=e,b=t,v=n,y=s,x=r.isPrimitive,w=i,L=o,T=d.isPrimitive,E=m,N=a,P=l,O=p,q=u,G=h,R=j.factory,V=c,k=g;var A=function e(t,n,s){var r,i,o,d,m;if(!y(t))throw new TypeError("invalid argument. First argument must be an iterator. Value: `"+t+"`.");if(!x(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(i=P(k),arguments.length>2){if(!w(s))throw new TypeError("invalid argument. Third argument must be an object. Value: `"+s+"`.");if(N(s,"copy")&&(i.copy=s.copy,!T(s.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+s.copy+"`.");if(N(s,"prng")){if(!L(s.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+s.prng+"`.");i.prng=s.prng}else if(N(s,"state")){if(i.state=s.state,!E(s.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+s.state+"`.")}else if(N(s,"seed")&&(i.seed=s.seed,void 0===s.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+s.seed+"`.")}return r=R(-(m=n*V),m,i),f(o={},"next",c),f(o,"return",g),G&&L(t[G])&&f(o,G,A),s&&s.prng?(f(o,"seed",null),f(o,"seedLength",null),v(o,"state",q(null),O),f(o,"stateLength",null),f(o,"byteLength",null),f(o,"PRNG",s.prng)):(b(o,"seed",a),b(o,"seedLength",l),v(o,"state",h,j),b(o,"stateLength",p),b(o,"byteLength",u),f(o,"PRNG",r.PRNG)),o;function a(){return r.seed}function l(){return r.seedLength}function p(){return r.stateLength}function u(){return r.byteLength}function h(){return r.state}function j(e){r.state=e}function c(){var e;return d?{done:!0}:(e=t.next()).done?(d=!0,e):{value:e="number"==typeof e.value?e.value+r():NaN,done:!1}}function g(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function A(){return e(t[G](),n,i)}},F=A;export{F as default};
//# sourceMappingURL=index.mjs.map
