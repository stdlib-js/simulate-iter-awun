"use strict";var c=function(u,n){return function(){return n||u((n={exports:{}}).exports,n),n.exports}};var h=c(function(_,m){
function A(){return{copy:!0}}m.exports=A
});var w=c(function(C,q){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),y=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),F=require('@stdlib/assert-is-iterator-like/dist'),G=require('@stdlib/assert-is-positive-number/dist').isPrimitive,j=require('@stdlib/assert-is-plain-object/dist'),p=require('@stdlib/assert-is-function/dist'),V=require('@stdlib/assert-is-boolean/dist').isPrimitive,k=require('@stdlib/assert-is-uint32array/dist'),v=require('@stdlib/assert-has-own-property/dist'),U=require('@stdlib/utils-noop/dist'),z=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),d=require('@stdlib/symbol-iterator/dist'),B=require('@stdlib/random-base-uniform/dist').factory,H=require('@stdlib/constants-float64-sqrt-three/dist'),I=h();function b(u,n,e){var i,s,r,g,f;if(!F(u))throw new TypeError(o('0t93v',u));if(!G(n))throw new TypeError(o('0t972',n));if(s=I(),arguments.length>2){if(!j(e))throw new TypeError(o('0t98J',e));if(v(e,"copy")&&(s.copy=e.copy,!V(e.copy)))throw new TypeError(o('0t92o',"copy",e.copy));if(v(e,"prng")){if(!p(e.prng))throw new TypeError(o('0t96u',"prng",e.prng));s.prng=e.prng}else if(v(e,"state")){if(s.state=e.state,!k(e.state))throw new TypeError(o('0t96z',"state",e.state))}else if(v(e,"seed")&&(s.seed=e.seed,e.seed===void 0))throw new TypeError(o('0t974',"seed",e.seed))}return f=n*H,i=B(-f,f,s),r={},a(r,"next",P),a(r,"return",R),d&&p(u[d])&&a(r,d,N),e&&e.prng?(a(r,"seed",null),a(r,"seedLength",null),y(r,"state",z(null),U),a(r,"stateLength",null),a(r,"byteLength",null),a(r,"PRNG",e.prng)):(l(r,"seed",L),l(r,"seedLength",S),y(r,"state",x,O),l(r,"stateLength",T),l(r,"byteLength",E),a(r,"PRNG",i.PRNG)),r;function L(){return i.seed}function S(){return i.seedLength}function T(){return i.stateLength}function E(){return i.byteLength}function x(){return i.state}function O(t){i.state=t}function P(){var t;return g?{done:!0}:(t=u.next(),t.done?(g=!0,t):(typeof t.value=="number"?t=t.value+i():t=NaN,{value:t,done:!1}))}function R(t){return g=!0,arguments.length?{value:t,done:!0}:{done:!0}}function N(){return b(u[d](),n,s)}}q.exports=b
});var Q=w();module.exports=Q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map