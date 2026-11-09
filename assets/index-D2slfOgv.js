const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/QuickRoom-CoK10Yip.js","assets/useConnectionDiagnostics-55JkKEk_.js","assets/WebVoiceRoom-COfhhefe.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function SA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fp={exports:{}},eu={},jp={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function CA(){if(Bv)return Fe;Bv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function I(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,B={};function z(M,G,me){this.props=M,this.context=G,this.refs=B,this.updater=me||k}z.prototype.isReactComponent={},z.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},z.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function Z(){}Z.prototype=z.prototype;function Q(M,G,me){this.props=M,this.context=G,this.refs=B,this.updater=me||k}var te=Q.prototype=new Z;te.constructor=Q,V(te,z.prototype),te.isPureReactComponent=!0;var ae=Array.isArray,Ge=Object.prototype.hasOwnProperty,xe={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function R(M,G,me){var ke,be={},Ve=null,we=null;if(G!=null)for(ke in G.ref!==void 0&&(we=G.ref),G.key!==void 0&&(Ve=""+G.key),G)Ge.call(G,ke)&&!b.hasOwnProperty(ke)&&(be[ke]=G[ke]);var Ae=arguments.length-2;if(Ae===1)be.children=me;else if(1<Ae){for(var Qe=Array(Ae),De=0;De<Ae;De++)Qe[De]=arguments[De+2];be.children=Qe}if(M&&M.defaultProps)for(ke in Ae=M.defaultProps,Ae)be[ke]===void 0&&(be[ke]=Ae[ke]);return{$$typeof:n,type:M,key:Ve,ref:we,props:be,_owner:xe.current}}function C(M,G){return{$$typeof:n,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function O(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(me){return G[me]})}var L=/\/+/g;function P(M,G){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):G.toString(36)}function vt(M,G,me,ke,be){var Ve=typeof M;(Ve==="undefined"||Ve==="boolean")&&(M=null);var we=!1;if(M===null)we=!0;else switch(Ve){case"string":case"number":we=!0;break;case"object":switch(M.$$typeof){case n:case e:we=!0}}if(we)return we=M,be=be(we),M=ke===""?"."+P(we,0):ke,ae(be)?(me="",M!=null&&(me=M.replace(L,"$&/")+"/"),vt(be,G,me,"",function(De){return De})):be!=null&&(x(be)&&(be=C(be,me+(!be.key||we&&we.key===be.key?"":(""+be.key).replace(L,"$&/")+"/")+M)),G.push(be)),1;if(we=0,ke=ke===""?".":ke+":",ae(M))for(var Ae=0;Ae<M.length;Ae++){Ve=M[Ae];var Qe=ke+P(Ve,Ae);we+=vt(Ve,G,me,Qe,be)}else if(Qe=I(M),typeof Qe=="function")for(M=Qe.call(M),Ae=0;!(Ve=M.next()).done;)Ve=Ve.value,Qe=ke+P(Ve,Ae++),we+=vt(Ve,G,me,Qe,be);else if(Ve==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return we}function Pe(M,G,me){if(M==null)return M;var ke=[],be=0;return vt(M,ke,"","",function(Ve){return G.call(me,Ve,be++)}),ke}function gt(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(me){(M._status===0||M._status===-1)&&(M._status=1,M._result=me)},function(me){(M._status===0||M._status===-1)&&(M._status=2,M._result=me)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var Je={current:null},ie={transition:null},ge={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ie,ReactCurrentOwner:xe};function se(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:Pe,forEach:function(M,G,me){Pe(M,function(){G.apply(this,arguments)},me)},count:function(M){var G=0;return Pe(M,function(){G++}),G},toArray:function(M){return Pe(M,function(G){return G})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Fe.Component=z,Fe.Fragment=t,Fe.Profiler=s,Fe.PureComponent=Q,Fe.StrictMode=r,Fe.Suspense=f,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Fe.act=se,Fe.cloneElement=function(M,G,me){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ke=V({},M.props),be=M.key,Ve=M.ref,we=M._owner;if(G!=null){if(G.ref!==void 0&&(Ve=G.ref,we=xe.current),G.key!==void 0&&(be=""+G.key),M.type&&M.type.defaultProps)var Ae=M.type.defaultProps;for(Qe in G)Ge.call(G,Qe)&&!b.hasOwnProperty(Qe)&&(ke[Qe]=G[Qe]===void 0&&Ae!==void 0?Ae[Qe]:G[Qe])}var Qe=arguments.length-2;if(Qe===1)ke.children=me;else if(1<Qe){Ae=Array(Qe);for(var De=0;De<Qe;De++)Ae[De]=arguments[De+2];ke.children=Ae}return{$$typeof:n,type:M.type,key:be,ref:Ve,props:ke,_owner:we}},Fe.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Fe.createElement=R,Fe.createFactory=function(M){var G=R.bind(null,M);return G.type=M,G},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(M){return{$$typeof:d,render:M}},Fe.isValidElement=x,Fe.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:gt}},Fe.memo=function(M,G){return{$$typeof:m,type:M,compare:G===void 0?null:G}},Fe.startTransition=function(M){var G=ie.transition;ie.transition={};try{M()}finally{ie.transition=G}},Fe.unstable_act=se,Fe.useCallback=function(M,G){return Je.current.useCallback(M,G)},Fe.useContext=function(M){return Je.current.useContext(M)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(M){return Je.current.useDeferredValue(M)},Fe.useEffect=function(M,G){return Je.current.useEffect(M,G)},Fe.useId=function(){return Je.current.useId()},Fe.useImperativeHandle=function(M,G,me){return Je.current.useImperativeHandle(M,G,me)},Fe.useInsertionEffect=function(M,G){return Je.current.useInsertionEffect(M,G)},Fe.useLayoutEffect=function(M,G){return Je.current.useLayoutEffect(M,G)},Fe.useMemo=function(M,G){return Je.current.useMemo(M,G)},Fe.useReducer=function(M,G,me){return Je.current.useReducer(M,G,me)},Fe.useRef=function(M){return Je.current.useRef(M)},Fe.useState=function(M){return Je.current.useState(M)},Fe.useSyncExternalStore=function(M,G,me){return Je.current.useSyncExternalStore(M,G,me)},Fe.useTransition=function(){return Je.current.useTransition()},Fe.version="18.3.1",Fe}var zv;function ng(){return zv||(zv=1,jp.exports=CA()),jp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function AA(){if(Wv)return eu;Wv=1;var n=ng(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,w={},I=null,k=null;m!==void 0&&(I=""+m),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(k=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(w[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:e,type:d,key:I,ref:k,props:w,_owner:s.current}}return eu.Fragment=t,eu.jsx=u,eu.jsxs=u,eu}var $v;function RA(){return $v||($v=1,Fp.exports=AA()),Fp.exports}var E=RA(),Ee=ng();const _I=SA(Ee);var Th={},Up={exports:{}},On={},Bp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function PA(){return qv||(qv=1,(function(n){function e(ie,ge){var se=ie.length;ie.push(ge);e:for(;0<se;){var M=se-1>>>1,G=ie[M];if(0<s(G,ge))ie[M]=ge,ie[se]=G,se=M;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var ge=ie[0],se=ie.pop();if(se!==ge){ie[0]=se;e:for(var M=0,G=ie.length,me=G>>>1;M<me;){var ke=2*(M+1)-1,be=ie[ke],Ve=ke+1,we=ie[Ve];if(0>s(be,se))Ve<G&&0>s(we,be)?(ie[M]=we,ie[Ve]=se,M=Ve):(ie[M]=be,ie[ke]=se,M=ke);else if(Ve<G&&0>s(we,se))ie[M]=we,ie[Ve]=se,M=Ve;else break e}}return ge}function s(ie,ge){var se=ie.sortIndex-ge.sortIndex;return se!==0?se:ie.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,w=null,I=3,k=!1,V=!1,B=!1,z=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ie){for(var ge=t(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=ie)r(m),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(m)}}function ae(ie){if(B=!1,te(ie),!V)if(t(f)!==null)V=!0,gt(Ge);else{var ge=t(m);ge!==null&&Je(ae,ge.startTime-ie)}}function Ge(ie,ge){V=!1,B&&(B=!1,Z(R),R=-1),k=!0;var se=I;try{for(te(ge),w=t(f);w!==null&&(!(w.expirationTime>ge)||ie&&!O());){var M=w.callback;if(typeof M=="function"){w.callback=null,I=w.priorityLevel;var G=M(w.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?w.callback=G:w===t(f)&&r(f),te(ge)}else r(f);w=t(f)}if(w!==null)var me=!0;else{var ke=t(m);ke!==null&&Je(ae,ke.startTime-ge),me=!1}return me}finally{w=null,I=se,k=!1}}var xe=!1,b=null,R=-1,C=5,x=-1;function O(){return!(n.unstable_now()-x<C)}function L(){if(b!==null){var ie=n.unstable_now();x=ie;var ge=!0;try{ge=b(!0,ie)}finally{ge?P():(xe=!1,b=null)}}else xe=!1}var P;if(typeof Q=="function")P=function(){Q(L)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,Pe=vt.port2;vt.port1.onmessage=L,P=function(){Pe.postMessage(null)}}else P=function(){z(L,0)};function gt(ie){b=ie,xe||(xe=!0,P())}function Je(ie,ge){R=z(function(){ie(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){V||k||(V=!0,gt(Ge))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var ge=3;break;default:ge=I}var se=I;I=ge;try{return ie()}finally{I=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var se=I;I=ie;try{return ge()}finally{I=se}},n.unstable_scheduleCallback=function(ie,ge,se){var M=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?M+se:M):se=M,ie){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,ie={id:y++,callback:ge,priorityLevel:ie,startTime:se,expirationTime:G,sortIndex:-1},se>M?(ie.sortIndex=se,e(m,ie),t(f)===null&&ie===t(m)&&(B?(Z(R),R=-1):B=!0,Je(ae,se-M))):(ie.sortIndex=G,e(f,ie),V||k||(V=!0,gt(Ge))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var ge=I;return function(){var se=I;I=ge;try{return ie.apply(this,arguments)}finally{I=se}}}})(zp)),zp}var Hv;function kA(){return Hv||(Hv=1,Bp.exports=PA()),Bp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function NA(){if(Gv)return On;Gv=1;var n=ng(),e=kA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function I(i){return f.call(w,i)?!0:f.call(y,i)?!1:m.test(i)?w[i]=!0:(y[i]=!0,!1)}function k(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function V(i,o,l,h){if(o===null||typeof o>"u"||k(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function B(i,o,l,h,p,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){z[i]=new B(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];z[o]=new B(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){z[i]=new B(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){z[i]=new B(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){z[i]=new B(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){z[i]=new B(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){z[i]=new B(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){z[i]=new B(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){z[i]=new B(i,5,!1,i.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function Q(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(Z,Q);z[o]=new B(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(Z,Q);z[o]=new B(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(Z,Q);z[o]=new B(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){z[i]=new B(i,1,!1,i.toLowerCase(),null,!1,!1)}),z.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){z[i]=new B(i,1,!1,i.toLowerCase(),null,!0,!0)});function te(i,o,l,h){var p=z.hasOwnProperty(o)?z[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(V(o,l,p,h)&&(l=null),h||p===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ge=Symbol.for("react.element"),xe=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,M;function G(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var me=!1;function ke(i,o){if(!i||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){h=W}i.call(o.prototype)}else{try{throw Error()}catch(W){h=W}i()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),_=h.stack.split(`
`),T=p.length-1,A=_.length-1;1<=T&&0<=A&&p[T]!==_[A];)A--;for(;1<=T&&0<=A;T--,A--)if(p[T]!==_[A]){if(T!==1||A!==1)do if(T--,A--,0>A||p[T]!==_[A]){var N=`
`+p[T].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=T&&0<=A);break}}}finally{me=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function be(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=ke(i.type,!1),i;case 11:return i=ke(i.type.render,!1),i;case 1:return i=ke(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case xe:return"Portal";case C:return"Profiler";case R:return"StrictMode";case P:return"Suspense";case vt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case L:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Pe:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case gt:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function we(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Qe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function De(i){var o=Qe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,_.call(this,T)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Kn(i){i._valueTracker||(i._valueTracker=De(i))}function Mr(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Qe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function en(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function vn(i,o){var l=o.checked;return se({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Lr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ae(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Oe(i,o){o=o.checked,o!=null&&te(i,"checked",o,!1)}function Vr(i,o){Oe(i,o);var l=Ae(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Fr(i,o.type,l):o.hasOwnProperty("defaultValue")&&Fr(i,o.type,Ae(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function at(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Fr(i,o,l){(o!=="number"||en(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var xt=Array.isArray;function Dt(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ae(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Qn(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ai(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(xt(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Ae(l)}}function li(i,o){var l=Ae(o.value),h=Ae(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Yn(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function lt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?lt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Xn,Wi=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Xn=Xn||document.createElement("div"),Xn.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Xn.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function jr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ui=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(i){ui.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ur[o]=Ur[i]})});function $i(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ur.hasOwnProperty(i)&&Ur[i]?(""+o).trim():o+"px"}function Qs(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=$i(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Ys=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xs(i,o){if(o){if(Ys[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function qi(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=null;function Hi(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var hi=null,$=null,ce=null;function $e(i){if(i=jl(i)){if(typeof hi!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Fc(o),hi(i.stateNode,i.type,o))}}function rt(i){$?ce?ce.push(i):ce=[i]:$=i}function hr(){if($){var i=$,o=ce;if(ce=$=null,$e(i),o)for(i=0;i<o.length;i++)$e(o[i])}}function Js(i,o){return i(o)}function _l(){}var di=!1;function yl(i,o,l){if(di)return i(o,l);di=!0;try{return Js(i,o,l)}finally{di=!1,($!==null||ce!==null)&&(_l(),hr())}}function Pt(i,o){var l=i.stateNode;if(l===null)return null;var h=Fc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Wo=!1;if(d)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Wo=!1}function Zs(i,o,l,h,p,_,T,A,N){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(X){this.onError(X)}}var eo=!1,$o=null,fr=!1,vl=null,df={onError:function(i){eo=!0,$o=i}};function qo(i,o,l,h,p,_,T,A,N){eo=!1,$o=null,Zs.apply(df,arguments)}function uc(i,o,l,h,p,_,T,A,N){if(qo.apply(this,arguments),eo){if(eo){var W=$o;eo=!1,$o=null}else throw Error(t(198));fr||(fr=!0,vl=W)}}function pr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function to(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function mr(i){if(pr(i)!==i)throw Error(t(188))}function cc(i){var o=i.alternate;if(!o){if(o=pr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return mr(p),i;if(_===h)return mr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var T=!1,A=p.child;A;){if(A===l){T=!0,l=p,h=_;break}if(A===h){T=!0,h=p,l=_;break}A=A.sibling}if(!T){for(A=_.child;A;){if(A===l){T=!0,l=_,h=p;break}if(A===h){T=!0,h=_,l=p;break}A=A.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function El(i){return i=cc(i),i!==null?Ho(i):null}function Ho(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Ho(i);if(o!==null)return o;i=i.sibling}return null}var Go=e.unstable_scheduleCallback,wl=e.unstable_cancelCallback,hc=e.unstable_shouldYield,ff=e.unstable_requestPaint,ut=e.unstable_now,dc=e.unstable_getCurrentPriorityLevel,no=e.unstable_ImmediatePriority,Gi=e.unstable_UserBlockingPriority,Jn=e.unstable_NormalPriority,Il=e.unstable_LowPriority,fc=e.unstable_IdlePriority,ro=null,Fn=null;function pc(i){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(ro,i,void 0,(i.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:gc,Tl=Math.log,mc=Math.LN2;function gc(i){return i>>>=0,i===0?32:31-(Tl(i)/mc|0)|0}var Ko=64,Qo=4194304;function Ki(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function io(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var A=T&~p;A!==0?h=Ki(A):(_&=T,_!==0&&(h=Ki(_)))}else T=l&~p,T!==0?h=Ki(T):_!==0&&(h=Ki(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-En(o),p=1<<l,h|=i[l],o&=~p;return h}function pf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fi(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-En(_),A=1<<T,N=p[T];N===-1?((A&l)===0||(A&h)!==0)&&(p[T]=pf(A,o)):N<=o&&(i.expiredLanes|=A),_&=~A}}function jn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function so(){var i=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),i}function Qi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Yi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-En(o),i[o]=l}function it(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-En(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Xi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-En(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var We=0;function Ji(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var _c,Yo,yc,vc,Ec,Sl=!1,Br=[],tn=null,gr=null,_r=null,Zi=new Map,Zn=new Map,zr=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(i,o){switch(i){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Zi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(o.pointerId)}}function Rn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=jl(o),o!==null&&Yo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function gf(i,o,l,h,p){switch(o){case"focusin":return tn=Rn(tn,i,o,l,h,p),!0;case"dragenter":return gr=Rn(gr,i,o,l,h,p),!0;case"mouseover":return _r=Rn(_r,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Zi.set(_,Rn(Zi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Zn.set(_,Rn(Zn.get(_)||null,i,o,l,h,p)),!0}return!1}function Ic(i){var o=co(i.target);if(o!==null){var l=pr(o);if(l!==null){if(o=l.tag,o===13){if(o=to(l),o!==null){i.blockedOn=o,Ec(i.priority,function(){yc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function pi(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Xo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);ci=h,l.target.dispatchEvent(h),ci=null}else return o=jl(l),o!==null&&Yo(o),i.blockedOn=l,!1;o.shift()}return!0}function oo(i,o,l){pi(i)&&l.delete(o)}function Tc(){Sl=!1,tn!==null&&pi(tn)&&(tn=null),gr!==null&&pi(gr)&&(gr=null),_r!==null&&pi(_r)&&(_r=null),Zi.forEach(oo),Zn.forEach(oo)}function yr(i,o){i.blockedOn===o&&(i.blockedOn=null,Sl||(Sl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tc)))}function vr(i){function o(p){return yr(p,i)}if(0<Br.length){yr(Br[0],i);for(var l=1;l<Br.length;l++){var h=Br[l];h.blockedOn===i&&(h.blockedOn=null)}}for(tn!==null&&yr(tn,i),gr!==null&&yr(gr,i),_r!==null&&yr(_r,i),Zi.forEach(o),Zn.forEach(o),l=0;l<zr.length;l++)h=zr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)Ic(l),l.blockedOn===null&&zr.shift()}var mi=ae.ReactCurrentBatchConfig,es=!0;function _t(i,o,l,h){var p=We,_=mi.transition;mi.transition=null;try{We=1,Cl(i,o,l,h)}finally{We=p,mi.transition=_}}function _f(i,o,l,h){var p=We,_=mi.transition;mi.transition=null;try{We=4,Cl(i,o,l,h)}finally{We=p,mi.transition=_}}function Cl(i,o,l,h){if(es){var p=Xo(i,o,l,h);if(p===null)Pf(i,o,h,ao,l),wc(i,h);else if(gf(p,i,o,l,h))h.stopPropagation();else if(wc(i,h),o&4&&-1<mf.indexOf(i)){for(;p!==null;){var _=jl(p);if(_!==null&&_c(_),_=Xo(i,o,l,h),_===null&&Pf(i,o,h,ao,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Pf(i,o,h,null,l)}}var ao=null;function Xo(i,o,l,h){if(ao=null,i=Hi(h),i=co(i),i!==null)if(o=pr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=to(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return ao=i,null}function Al(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case no:return 1;case Gi:return 4;case Jn:case Il:return 16;case fc:return 536870912;default:return 16}default:return 16}}var Un=null,Jo=null,Pn=null;function Rl(){if(Pn)return Pn;var i,o=Jo,l=o.length,h,p="value"in Un?Un.value:Un.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var T=l-i;for(h=1;h<=T&&o[l-h]===p[_-h];h++);return Pn=p.slice(i,1<h?1-h:void 0)}function Zo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Wr(){return!0}function Pl(){return!1}function nn(i){function o(l,h,p,_,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Wr:Pl,this.isPropagationStopped=Pl,this}return se(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),o}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=nn(Er),$r=se({},Er,{view:0,detail:0}),yf=nn($r),ta,gi,ts,lo=se({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ts&&(ts&&i.type==="mousemove"?(ta=i.screenX-ts.screenX,gi=i.screenY-ts.screenY):gi=ta=0,ts=i),ta)},movementY:function(i){return"movementY"in i?i.movementY:gi}}),na=nn(lo),kl=se({},lo,{dataTransfer:0}),Sc=nn(kl),ra=se({},$r,{relatedTarget:0}),ia=nn(ra),Cc=se({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),_i=nn(Cc),Ac=se({},Er,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Rc=nn(Ac),Pc=se({},Er,{data:0}),Nl=nn(Pc),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=kc[i])?!!o[i]:!1}function qr(){return Nc}var c=se({},$r,{key:function(i){if(i.key){var o=sa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Zo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?wn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qr,charCode:function(i){return i.type==="keypress"?Zo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Zo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=nn(c),v=se({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=nn(v),F=se({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qr}),q=nn(F),re=se({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),et=nn(re),jt=se({},lo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=nn(jt),qt=[9,13,27,32],bt=d&&"CompositionEvent"in window,er=null;d&&"documentMode"in document&&(er=document.documentMode);var Bn=d&&"TextEvent"in window&&!er,uo=d&&(!bt||er&&8<er&&11>=er),oa=" ",M_=!1;function L_(i,o){switch(i){case"keyup":return qt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var aa=!1;function wC(i,o){switch(i){case"compositionend":return V_(o);case"keypress":return o.which!==32?null:(M_=!0,oa);case"textInput":return i=o.data,i===oa&&M_?null:i;default:return null}}function IC(i,o){if(aa)return i==="compositionend"||!bt&&L_(i,o)?(i=Rl(),Pn=Jo=Un=null,aa=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return uo&&o.locale!=="ko"?null:o.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!TC[i.type]:o==="textarea"}function j_(i,o,l,h){rt(h),o=Mc(o,"onChange"),0<o.length&&(l=new ea("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var xl=null,Dl=null;function SC(i){ry(i,0)}function xc(i){var o=da(i);if(Mr(o))return i}function CC(i,o){if(i==="change")return o}var U_=!1;if(d){var vf;if(d){var Ef="oninput"in document;if(!Ef){var B_=document.createElement("div");B_.setAttribute("oninput","return;"),Ef=typeof B_.oninput=="function"}vf=Ef}else vf=!1;U_=vf&&(!document.documentMode||9<document.documentMode)}function z_(){xl&&(xl.detachEvent("onpropertychange",W_),Dl=xl=null)}function W_(i){if(i.propertyName==="value"&&xc(Dl)){var o=[];j_(o,Dl,i,Hi(i)),yl(SC,o)}}function AC(i,o,l){i==="focusin"?(z_(),xl=o,Dl=l,xl.attachEvent("onpropertychange",W_)):i==="focusout"&&z_()}function RC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return xc(Dl)}function PC(i,o){if(i==="click")return xc(o)}function kC(i,o){if(i==="input"||i==="change")return xc(o)}function NC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var wr=typeof Object.is=="function"?Object.is:NC;function bl(i,o){if(wr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!wr(i[p],o[p]))return!1}return!0}function $_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function q_(i,o){var l=$_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$_(l)}}function H_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?H_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function G_(){for(var i=window,o=en();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=en(i.document)}return o}function wf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function xC(i){var o=G_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&H_(l.ownerDocument.documentElement,l)){if(h!==null&&wf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=q_(l,_);var T=q_(l,h);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var DC=d&&"documentMode"in document&&11>=document.documentMode,la=null,If=null,Ol=null,Tf=!1;function K_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tf||la==null||la!==en(h)||(h=la,"selectionStart"in h&&wf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ol&&bl(Ol,h)||(Ol=h,h=Mc(If,"onSelect"),0<h.length&&(o=new ea("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=la)))}function Dc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ua={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Sf={},Q_={};d&&(Q_=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function bc(i){if(Sf[i])return Sf[i];if(!ua[i])return i;var o=ua[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Q_)return Sf[i]=o[l];return i}var Y_=bc("animationend"),X_=bc("animationiteration"),J_=bc("animationstart"),Z_=bc("transitionend"),ey=new Map,ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(i,o){ey.set(i,o),a(o,[i])}for(var Cf=0;Cf<ty.length;Cf++){var Af=ty[Cf],bC=Af.toLowerCase(),OC=Af[0].toUpperCase()+Af.slice(1);ns(bC,"on"+OC)}ns(Y_,"onAnimationEnd"),ns(X_,"onAnimationIteration"),ns(J_,"onAnimationStart"),ns("dblclick","onDoubleClick"),ns("focusin","onFocus"),ns("focusout","onBlur"),ns(Z_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function ny(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,uc(h,o,void 0,i),i.currentTarget=null}function ry(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var T=h.length-1;0<=T;T--){var A=h[T],N=A.instance,W=A.currentTarget;if(A=A.listener,N!==_&&p.isPropagationStopped())break e;ny(p,A,W),_=N}else for(T=0;T<h.length;T++){if(A=h[T],N=A.instance,W=A.currentTarget,A=A.listener,N!==_&&p.isPropagationStopped())break e;ny(p,A,W),_=N}}}if(fr)throw i=vl,fr=!1,vl=null,i}function ft(i,o){var l=o[Of];l===void 0&&(l=o[Of]=new Set);var h=i+"__bubble";l.has(h)||(iy(o,i,2,!1),l.add(h))}function Rf(i,o,l){var h=0;o&&(h|=4),iy(l,i,h,o)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Ll(i){if(!i[Oc]){i[Oc]=!0,r.forEach(function(l){l!=="selectionchange"&&(MC.has(l)||Rf(l,!1,i),Rf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Oc]||(o[Oc]=!0,Rf("selectionchange",!1,o))}}function iy(i,o,l,h){switch(Al(o)){case 1:var p=_t;break;case 4:p=_f;break;default:p=Cl}l=p.bind(null,o,l,i),p=void 0,!Wo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Pf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var N=T.tag;if((N===3||N===4)&&(N=T.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;T=T.return}for(;A!==null;){if(T=co(A),T===null)return;if(N=T.tag,N===5||N===6){h=_=T;continue e}A=A.parentNode}}h=h.return}yl(function(){var W=_,X=Hi(l),J=[];e:{var Y=ey.get(i);if(Y!==void 0){var le=ea,de=i;switch(i){case"keypress":if(Zo(l)===0)break e;case"keydown":case"keyup":le=g;break;case"focusin":de="focus",le=ia;break;case"focusout":de="blur",le=ia;break;case"beforeblur":case"afterblur":le=ia;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=q;break;case Y_:case X_:case J_:le=_i;break;case Z_:le=et;break;case"scroll":le=yf;break;case"wheel":le=qe;break;case"copy":case"cut":case"paste":le=Rc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=S}var fe=(o&4)!==0,kt=!fe&&i==="scroll",j=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var D=W,U;D!==null;){U=D;var ee=U.stateNode;if(U.tag===5&&ee!==null&&(U=ee,j!==null&&(ee=Pt(D,j),ee!=null&&fe.push(Vl(D,ee,U)))),kt)break;D=D.return}0<fe.length&&(Y=new le(Y,de,null,l,X),J.push({event:Y,listeners:fe}))}}if((o&7)===0){e:{if(Y=i==="mouseover"||i==="pointerover",le=i==="mouseout"||i==="pointerout",Y&&l!==ci&&(de=l.relatedTarget||l.fromElement)&&(co(de)||de[yi]))break e;if((le||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,le?(de=l.relatedTarget||l.toElement,le=W,de=de?co(de):null,de!==null&&(kt=pr(de),de!==kt||de.tag!==5&&de.tag!==6)&&(de=null)):(le=null,de=W),le!==de)){if(fe=na,ee="onMouseLeave",j="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(fe=S,ee="onPointerLeave",j="onPointerEnter",D="pointer"),kt=le==null?Y:da(le),U=de==null?Y:da(de),Y=new fe(ee,D+"leave",le,l,X),Y.target=kt,Y.relatedTarget=U,ee=null,co(X)===W&&(fe=new fe(j,D+"enter",de,l,X),fe.target=U,fe.relatedTarget=kt,ee=fe),kt=ee,le&&de)t:{for(fe=le,j=de,D=0,U=fe;U;U=ca(U))D++;for(U=0,ee=j;ee;ee=ca(ee))U++;for(;0<D-U;)fe=ca(fe),D--;for(;0<U-D;)j=ca(j),U--;for(;D--;){if(fe===j||j!==null&&fe===j.alternate)break t;fe=ca(fe),j=ca(j)}fe=null}else fe=null;le!==null&&sy(J,Y,le,fe,!1),de!==null&&kt!==null&&sy(J,kt,de,fe,!0)}}e:{if(Y=W?da(W):window,le=Y.nodeName&&Y.nodeName.toLowerCase(),le==="select"||le==="input"&&Y.type==="file")var pe=CC;else if(F_(Y))if(U_)pe=kC;else{pe=RC;var ye=AC}else(le=Y.nodeName)&&le.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(pe=PC);if(pe&&(pe=pe(i,W))){j_(J,pe,l,X);break e}ye&&ye(i,Y,W),i==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&Fr(Y,"number",Y.value)}switch(ye=W?da(W):window,i){case"focusin":(F_(ye)||ye.contentEditable==="true")&&(la=ye,If=W,Ol=null);break;case"focusout":Ol=If=la=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,K_(J,l,X);break;case"selectionchange":if(DC)break;case"keydown":case"keyup":K_(J,l,X)}var ve;if(bt)e:{switch(i){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else aa?L_(i,l)&&(Ce="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ce="onCompositionStart");Ce&&(uo&&l.locale!=="ko"&&(aa||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&aa&&(ve=Rl()):(Un=X,Jo="value"in Un?Un.value:Un.textContent,aa=!0)),ye=Mc(W,Ce),0<ye.length&&(Ce=new Nl(Ce,i,null,l,X),J.push({event:Ce,listeners:ye}),ve?Ce.data=ve:(ve=V_(l),ve!==null&&(Ce.data=ve)))),(ve=Bn?wC(i,l):IC(i,l))&&(W=Mc(W,"onBeforeInput"),0<W.length&&(X=new Nl("onBeforeInput","beforeinput",null,l,X),J.push({event:X,listeners:W}),X.data=ve))}ry(J,o)})}function Vl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Mc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Pt(i,l),_!=null&&h.unshift(Vl(i,_,p)),_=Pt(i,o),_!=null&&h.push(Vl(i,_,p))),i=i.return}return h}function ca(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function sy(i,o,l,h,p){for(var _=o._reactName,T=[];l!==null&&l!==h;){var A=l,N=A.alternate,W=A.stateNode;if(N!==null&&N===h)break;A.tag===5&&W!==null&&(A=W,p?(N=Pt(l,_),N!=null&&T.unshift(Vl(l,N,A))):p||(N=Pt(l,_),N!=null&&T.push(Vl(l,N,A)))),l=l.return}T.length!==0&&i.push({event:o,listeners:T})}var LC=/\r\n?/g,VC=/\u0000|\uFFFD/g;function oy(i){return(typeof i=="string"?i:""+i).replace(LC,`
`).replace(VC,"")}function Lc(i,o,l){if(o=oy(o),oy(i)!==o&&l)throw Error(t(425))}function Vc(){}var kf=null,Nf=null;function xf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,FC=typeof clearTimeout=="function"?clearTimeout:void 0,ay=typeof Promise=="function"?Promise:void 0,jC=typeof queueMicrotask=="function"?queueMicrotask:typeof ay<"u"?function(i){return ay.resolve(null).then(i).catch(UC)}:Df;function UC(i){setTimeout(function(){throw i})}function bf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),vr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);vr(o)}function rs(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function ly(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ha=Math.random().toString(36).slice(2),Hr="__reactFiber$"+ha,Fl="__reactProps$"+ha,yi="__reactContainer$"+ha,Of="__reactEvents$"+ha,BC="__reactListeners$"+ha,zC="__reactHandles$"+ha;function co(i){var o=i[Hr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[yi]||l[Hr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=ly(i);i!==null;){if(l=i[Hr])return l;i=ly(i)}return o}i=l,l=i.parentNode}return null}function jl(i){return i=i[Hr]||i[yi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function da(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Fc(i){return i[Fl]||null}var Mf=[],fa=-1;function is(i){return{current:i}}function pt(i){0>fa||(i.current=Mf[fa],Mf[fa]=null,fa--)}function ct(i,o){fa++,Mf[fa]=i.current,i.current=o}var ss={},hn=is(ss),kn=is(!1),ho=ss;function pa(i,o){var l=i.type.contextTypes;if(!l)return ss;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(i){return i=i.childContextTypes,i!=null}function jc(){pt(kn),pt(hn)}function uy(i,o,l){if(hn.current!==ss)throw Error(t(168));ct(hn,o),ct(kn,l)}function cy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,we(i)||"Unknown",p));return se({},l,h)}function Uc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ss,ho=hn.current,ct(hn,i),ct(kn,kn.current),!0}function hy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=cy(i,o,ho),h.__reactInternalMemoizedMergedChildContext=i,pt(kn),pt(hn),ct(hn,i)):pt(kn),ct(kn,l)}var vi=null,Bc=!1,Lf=!1;function dy(i){vi===null?vi=[i]:vi.push(i)}function WC(i){Bc=!0,dy(i)}function os(){if(!Lf&&vi!==null){Lf=!0;var i=0,o=We;try{var l=vi;for(We=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}vi=null,Bc=!1}catch(p){throw vi!==null&&(vi=vi.slice(i+1)),Go(no,os),p}finally{We=o,Lf=!1}}return null}var ma=[],ga=0,zc=null,Wc=0,tr=[],nr=0,fo=null,Ei=1,wi="";function po(i,o){ma[ga++]=Wc,ma[ga++]=zc,zc=i,Wc=o}function fy(i,o,l){tr[nr++]=Ei,tr[nr++]=wi,tr[nr++]=fo,fo=i;var h=Ei;i=wi;var p=32-En(h)-1;h&=~(1<<p),l+=1;var _=32-En(o)+p;if(30<_){var T=p-p%5;_=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Ei=1<<32-En(o)+p|l<<p|h,wi=_+i}else Ei=1<<_|l<<p|h,wi=i}function Vf(i){i.return!==null&&(po(i,1),fy(i,1,0))}function Ff(i){for(;i===zc;)zc=ma[--ga],ma[ga]=null,Wc=ma[--ga],ma[ga]=null;for(;i===fo;)fo=tr[--nr],tr[nr]=null,wi=tr[--nr],tr[nr]=null,Ei=tr[--nr],tr[nr]=null}var zn=null,Wn=null,yt=!1,Ir=null;function py(i,o){var l=or(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function my(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,zn=i,Wn=rs(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,zn=i,Wn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=fo!==null?{id:Ei,overflow:wi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=or(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,zn=i,Wn=null,!0):!1;default:return!1}}function jf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Uf(i){if(yt){var o=Wn;if(o){var l=o;if(!my(i,o)){if(jf(i))throw Error(t(418));o=rs(l.nextSibling);var h=zn;o&&my(i,o)?py(h,l):(i.flags=i.flags&-4097|2,yt=!1,zn=i)}}else{if(jf(i))throw Error(t(418));i.flags=i.flags&-4097|2,yt=!1,zn=i}}}function gy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;zn=i}function $c(i){if(i!==zn)return!1;if(!yt)return gy(i),yt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!xf(i.type,i.memoizedProps)),o&&(o=Wn)){if(jf(i))throw _y(),Error(t(418));for(;o;)py(i,o),o=rs(o.nextSibling)}if(gy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Wn=rs(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Wn=null}}else Wn=zn?rs(i.stateNode.nextSibling):null;return!0}function _y(){for(var i=Wn;i;)i=rs(i.nextSibling)}function _a(){Wn=zn=null,yt=!1}function Bf(i){Ir===null?Ir=[i]:Ir.push(i)}var $C=ae.ReactCurrentBatchConfig;function Ul(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var A=p.refs;T===null?delete A[_]:A[_]=T},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function qc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function yy(i){var o=i._init;return o(i._payload)}function vy(i){function o(j,D){if(i){var U=j.deletions;U===null?(j.deletions=[D],j.flags|=16):U.push(D)}}function l(j,D){if(!i)return null;for(;D!==null;)o(j,D),D=D.sibling;return null}function h(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function p(j,D){return j=ps(j,D),j.index=0,j.sibling=null,j}function _(j,D,U){return j.index=U,i?(U=j.alternate,U!==null?(U=U.index,U<D?(j.flags|=2,D):U):(j.flags|=2,D)):(j.flags|=1048576,D)}function T(j){return i&&j.alternate===null&&(j.flags|=2),j}function A(j,D,U,ee){return D===null||D.tag!==6?(D=Dp(U,j.mode,ee),D.return=j,D):(D=p(D,U),D.return=j,D)}function N(j,D,U,ee){var pe=U.type;return pe===b?X(j,D,U.props.children,ee,U.key):D!==null&&(D.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===gt&&yy(pe)===D.type)?(ee=p(D,U.props),ee.ref=Ul(j,D,U),ee.return=j,ee):(ee=mh(U.type,U.key,U.props,null,j.mode,ee),ee.ref=Ul(j,D,U),ee.return=j,ee)}function W(j,D,U,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=bp(U,j.mode,ee),D.return=j,D):(D=p(D,U.children||[]),D.return=j,D)}function X(j,D,U,ee,pe){return D===null||D.tag!==7?(D=Io(U,j.mode,ee,pe),D.return=j,D):(D=p(D,U),D.return=j,D)}function J(j,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Dp(""+D,j.mode,U),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ge:return U=mh(D.type,D.key,D.props,null,j.mode,U),U.ref=Ul(j,null,D),U.return=j,U;case xe:return D=bp(D,j.mode,U),D.return=j,D;case gt:var ee=D._init;return J(j,ee(D._payload),U)}if(xt(D)||ge(D))return D=Io(D,j.mode,U,null),D.return=j,D;qc(j,D)}return null}function Y(j,D,U,ee){var pe=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return pe!==null?null:A(j,D,""+U,ee);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ge:return U.key===pe?N(j,D,U,ee):null;case xe:return U.key===pe?W(j,D,U,ee):null;case gt:return pe=U._init,Y(j,D,pe(U._payload),ee)}if(xt(U)||ge(U))return pe!==null?null:X(j,D,U,ee,null);qc(j,U)}return null}function le(j,D,U,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return j=j.get(U)||null,A(D,j,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ge:return j=j.get(ee.key===null?U:ee.key)||null,N(D,j,ee,pe);case xe:return j=j.get(ee.key===null?U:ee.key)||null,W(D,j,ee,pe);case gt:var ye=ee._init;return le(j,D,U,ye(ee._payload),pe)}if(xt(ee)||ge(ee))return j=j.get(U)||null,X(D,j,ee,pe,null);qc(D,ee)}return null}function de(j,D,U,ee){for(var pe=null,ye=null,ve=D,Ce=D=0,Kt=null;ve!==null&&Ce<U.length;Ce++){ve.index>Ce?(Kt=ve,ve=null):Kt=ve.sibling;var Ye=Y(j,ve,U[Ce],ee);if(Ye===null){ve===null&&(ve=Kt);break}i&&ve&&Ye.alternate===null&&o(j,ve),D=_(Ye,D,Ce),ye===null?pe=Ye:ye.sibling=Ye,ye=Ye,ve=Kt}if(Ce===U.length)return l(j,ve),yt&&po(j,Ce),pe;if(ve===null){for(;Ce<U.length;Ce++)ve=J(j,U[Ce],ee),ve!==null&&(D=_(ve,D,Ce),ye===null?pe=ve:ye.sibling=ve,ye=ve);return yt&&po(j,Ce),pe}for(ve=h(j,ve);Ce<U.length;Ce++)Kt=le(ve,j,Ce,U[Ce],ee),Kt!==null&&(i&&Kt.alternate!==null&&ve.delete(Kt.key===null?Ce:Kt.key),D=_(Kt,D,Ce),ye===null?pe=Kt:ye.sibling=Kt,ye=Kt);return i&&ve.forEach(function(ms){return o(j,ms)}),yt&&po(j,Ce),pe}function fe(j,D,U,ee){var pe=ge(U);if(typeof pe!="function")throw Error(t(150));if(U=pe.call(U),U==null)throw Error(t(151));for(var ye=pe=null,ve=D,Ce=D=0,Kt=null,Ye=U.next();ve!==null&&!Ye.done;Ce++,Ye=U.next()){ve.index>Ce?(Kt=ve,ve=null):Kt=ve.sibling;var ms=Y(j,ve,Ye.value,ee);if(ms===null){ve===null&&(ve=Kt);break}i&&ve&&ms.alternate===null&&o(j,ve),D=_(ms,D,Ce),ye===null?pe=ms:ye.sibling=ms,ye=ms,ve=Kt}if(Ye.done)return l(j,ve),yt&&po(j,Ce),pe;if(ve===null){for(;!Ye.done;Ce++,Ye=U.next())Ye=J(j,Ye.value,ee),Ye!==null&&(D=_(Ye,D,Ce),ye===null?pe=Ye:ye.sibling=Ye,ye=Ye);return yt&&po(j,Ce),pe}for(ve=h(j,ve);!Ye.done;Ce++,Ye=U.next())Ye=le(ve,j,Ce,Ye.value,ee),Ye!==null&&(i&&Ye.alternate!==null&&ve.delete(Ye.key===null?Ce:Ye.key),D=_(Ye,D,Ce),ye===null?pe=Ye:ye.sibling=Ye,ye=Ye);return i&&ve.forEach(function(TA){return o(j,TA)}),yt&&po(j,Ce),pe}function kt(j,D,U,ee){if(typeof U=="object"&&U!==null&&U.type===b&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ge:e:{for(var pe=U.key,ye=D;ye!==null;){if(ye.key===pe){if(pe=U.type,pe===b){if(ye.tag===7){l(j,ye.sibling),D=p(ye,U.props.children),D.return=j,j=D;break e}}else if(ye.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===gt&&yy(pe)===ye.type){l(j,ye.sibling),D=p(ye,U.props),D.ref=Ul(j,ye,U),D.return=j,j=D;break e}l(j,ye);break}else o(j,ye);ye=ye.sibling}U.type===b?(D=Io(U.props.children,j.mode,ee,U.key),D.return=j,j=D):(ee=mh(U.type,U.key,U.props,null,j.mode,ee),ee.ref=Ul(j,D,U),ee.return=j,j=ee)}return T(j);case xe:e:{for(ye=U.key;D!==null;){if(D.key===ye)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){l(j,D.sibling),D=p(D,U.children||[]),D.return=j,j=D;break e}else{l(j,D);break}else o(j,D);D=D.sibling}D=bp(U,j.mode,ee),D.return=j,j=D}return T(j);case gt:return ye=U._init,kt(j,D,ye(U._payload),ee)}if(xt(U))return de(j,D,U,ee);if(ge(U))return fe(j,D,U,ee);qc(j,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(l(j,D.sibling),D=p(D,U),D.return=j,j=D):(l(j,D),D=Dp(U,j.mode,ee),D.return=j,j=D),T(j)):l(j,D)}return kt}var ya=vy(!0),Ey=vy(!1),Hc=is(null),Gc=null,va=null,zf=null;function Wf(){zf=va=Gc=null}function $f(i){var o=Hc.current;pt(Hc),i._currentValue=o}function qf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Ea(i,o){Gc=i,zf=va=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(xn=!0),i.firstContext=null)}function rr(i){var o=i._currentValue;if(zf!==i)if(i={context:i,memoizedValue:o,next:null},va===null){if(Gc===null)throw Error(t(308));va=i,Gc.dependencies={lanes:0,firstContext:i}}else va=va.next=i;return o}var mo=null;function Hf(i){mo===null?mo=[i]:mo.push(i)}function wy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Hf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ii(i,h)}function Ii(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var as=!1;function Gf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ti(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ls(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ke&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ii(i,l)}return p=h.interleaved,p===null?(o.next=o,Hf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ii(i,l)}function Kc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Xi(i,l)}}function Ty(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Qc(i,o,l,h){var p=i.updateQueue;as=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var N=A,W=N.next;N.next=null,T===null?_=W:T.next=W,T=N;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==T&&(A===null?X.firstBaseUpdate=W:A.next=W,X.lastBaseUpdate=N))}if(_!==null){var J=p.baseState;T=0,X=W=N=null,A=_;do{var Y=A.lane,le=A.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:le,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=i,fe=A;switch(Y=o,le=l,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){J=de.call(le,J,Y);break e}J=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Y=typeof de=="function"?de.call(le,J,Y):de,Y==null)break e;J=se({},J,Y);break e;case 2:as=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,Y=p.effects,Y===null?p.effects=[A]:Y.push(A))}else le={eventTime:le,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(W=X=le,N=J):X=X.next=le,T|=Y;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(X===null&&(N=J),p.baseState=N,p.firstBaseUpdate=W,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do T|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);yo|=T,i.lanes=T,i.memoizedState=J}}function Sy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Bl={},Gr=is(Bl),zl=is(Bl),Wl=is(Bl);function go(i){if(i===Bl)throw Error(t(174));return i}function Kf(i,o){switch(ct(Wl,o),ct(zl,i),ct(Gr,Bl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:St(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=St(o,i)}pt(Gr),ct(Gr,o)}function wa(){pt(Gr),pt(zl),pt(Wl)}function Cy(i){go(Wl.current);var o=go(Gr.current),l=St(o,i.type);o!==l&&(ct(zl,i),ct(Gr,l))}function Qf(i){zl.current===i&&(pt(Gr),pt(zl))}var Et=is(0);function Yc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Yf=[];function Xf(){for(var i=0;i<Yf.length;i++)Yf[i]._workInProgressVersionPrimary=null;Yf.length=0}var Xc=ae.ReactCurrentDispatcher,Jf=ae.ReactCurrentBatchConfig,_o=0,wt=null,Ut=null,Ht=null,Jc=!1,$l=!1,ql=0,qC=0;function dn(){throw Error(t(321))}function Zf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!wr(i[l],o[l]))return!1;return!0}function ep(i,o,l,h,p,_){if(_o=_,wt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Xc.current=i===null||i.memoizedState===null?QC:YC,i=l(h,p),$l){_=0;do{if($l=!1,ql=0,25<=_)throw Error(t(301));_+=1,Ht=Ut=null,o.updateQueue=null,Xc.current=XC,i=l(h,p)}while($l)}if(Xc.current=th,o=Ut!==null&&Ut.next!==null,_o=0,Ht=Ut=wt=null,Jc=!1,o)throw Error(t(300));return i}function tp(){var i=ql!==0;return ql=0,i}function Kr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?wt.memoizedState=Ht=i:Ht=Ht.next=i,Ht}function ir(){if(Ut===null){var i=wt.alternate;i=i!==null?i.memoizedState:null}else i=Ut.next;var o=Ht===null?wt.memoizedState:Ht.next;if(o!==null)Ht=o,Ut=i;else{if(i===null)throw Error(t(310));Ut=i,i={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?wt.memoizedState=Ht=i:Ht=Ht.next=i}return Ht}function Hl(i,o){return typeof o=="function"?o(i):o}function np(i){var o=ir(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Ut,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var A=T=null,N=null,W=_;do{var X=W.lane;if((_o&X)===X)N!==null&&(N=N.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:i(h,W.action);else{var J={lane:X,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};N===null?(A=N=J,T=h):N=N.next=J,wt.lanes|=X,yo|=X}W=W.next}while(W!==null&&W!==_);N===null?T=h:N.next=A,wr(h,o.memoizedState)||(xn=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,wt.lanes|=_,yo|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function rp(i){var o=ir(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);wr(_,o.memoizedState)||(xn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Ay(){}function Ry(i,o){var l=wt,h=ir(),p=o(),_=!wr(h.memoizedState,p);if(_&&(h.memoizedState=p,xn=!0),h=h.queue,ip(Ny.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Ht!==null&&Ht.memoizedState.tag&1){if(l.flags|=2048,Gl(9,ky.bind(null,l,h,p,o),void 0,null),Gt===null)throw Error(t(349));(_o&30)!==0||Py(l,o,p)}return p}function Py(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=wt.updateQueue,o===null?(o={lastEffect:null,stores:null},wt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function ky(i,o,l,h){o.value=l,o.getSnapshot=h,xy(o)&&Dy(i)}function Ny(i,o,l){return l(function(){xy(o)&&Dy(i)})}function xy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!wr(i,l)}catch{return!0}}function Dy(i){var o=Ii(i,1);o!==null&&Ar(o,i,1,-1)}function by(i){var o=Kr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:i},o.queue=i,i=i.dispatch=KC.bind(null,wt,i),[o.memoizedState,i]}function Gl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=wt.updateQueue,o===null?(o={lastEffect:null,stores:null},wt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Oy(){return ir().memoizedState}function Zc(i,o,l,h){var p=Kr();wt.flags|=i,p.memoizedState=Gl(1|o,l,void 0,h===void 0?null:h)}function eh(i,o,l,h){var p=ir();h=h===void 0?null:h;var _=void 0;if(Ut!==null){var T=Ut.memoizedState;if(_=T.destroy,h!==null&&Zf(h,T.deps)){p.memoizedState=Gl(o,l,_,h);return}}wt.flags|=i,p.memoizedState=Gl(1|o,l,_,h)}function My(i,o){return Zc(8390656,8,i,o)}function ip(i,o){return eh(2048,8,i,o)}function Ly(i,o){return eh(4,2,i,o)}function Vy(i,o){return eh(4,4,i,o)}function Fy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function jy(i,o,l){return l=l!=null?l.concat([i]):null,eh(4,4,Fy.bind(null,o,i),l)}function sp(){}function Uy(i,o){var l=ir();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Zf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function By(i,o){var l=ir();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Zf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function zy(i,o,l){return(_o&21)===0?(i.baseState&&(i.baseState=!1,xn=!0),i.memoizedState=l):(wr(l,o)||(l=so(),wt.lanes|=l,yo|=l,i.baseState=!0),o)}function HC(i,o){var l=We;We=l!==0&&4>l?l:4,i(!0);var h=Jf.transition;Jf.transition={};try{i(!1),o()}finally{We=l,Jf.transition=h}}function Wy(){return ir().memoizedState}function GC(i,o,l){var h=ds(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},$y(i))qy(o,l);else if(l=wy(i,o,l,h),l!==null){var p=Tn();Ar(l,i,h,p),Hy(l,o,h)}}function KC(i,o,l){var h=ds(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if($y(i))qy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,A=_(T,l);if(p.hasEagerState=!0,p.eagerState=A,wr(A,T)){var N=o.interleaved;N===null?(p.next=p,Hf(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=wy(i,o,p,h),l!==null&&(p=Tn(),Ar(l,i,h,p),Hy(l,o,h))}}function $y(i){var o=i.alternate;return i===wt||o!==null&&o===wt}function qy(i,o){$l=Jc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Hy(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Xi(i,l)}}var th={readContext:rr,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},QC={readContext:rr,useCallback:function(i,o){return Kr().memoizedState=[i,o===void 0?null:o],i},useContext:rr,useEffect:My,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Zc(4194308,4,Fy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Zc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Zc(4,2,i,o)},useMemo:function(i,o){var l=Kr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Kr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=GC.bind(null,wt,i),[h.memoizedState,i]},useRef:function(i){var o=Kr();return i={current:i},o.memoizedState=i},useState:by,useDebugValue:sp,useDeferredValue:function(i){return Kr().memoizedState=i},useTransition:function(){var i=by(!1),o=i[0];return i=HC.bind(null,i[1]),Kr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=wt,p=Kr();if(yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Gt===null)throw Error(t(349));(_o&30)!==0||Py(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,My(Ny.bind(null,h,_,i),[i]),h.flags|=2048,Gl(9,ky.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Kr(),o=Gt.identifierPrefix;if(yt){var l=wi,h=Ei;l=(h&~(1<<32-En(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ql++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=qC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},YC={readContext:rr,useCallback:Uy,useContext:rr,useEffect:ip,useImperativeHandle:jy,useInsertionEffect:Ly,useLayoutEffect:Vy,useMemo:By,useReducer:np,useRef:Oy,useState:function(){return np(Hl)},useDebugValue:sp,useDeferredValue:function(i){var o=ir();return zy(o,Ut.memoizedState,i)},useTransition:function(){var i=np(Hl)[0],o=ir().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:Wy,unstable_isNewReconciler:!1},XC={readContext:rr,useCallback:Uy,useContext:rr,useEffect:ip,useImperativeHandle:jy,useInsertionEffect:Ly,useLayoutEffect:Vy,useMemo:By,useReducer:rp,useRef:Oy,useState:function(){return rp(Hl)},useDebugValue:sp,useDeferredValue:function(i){var o=ir();return Ut===null?o.memoizedState=i:zy(o,Ut.memoizedState,i)},useTransition:function(){var i=rp(Hl)[0],o=ir().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:Wy,unstable_isNewReconciler:!1};function Tr(i,o){if(i&&i.defaultProps){o=se({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function op(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:se({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var nh={isMounted:function(i){return(i=i._reactInternals)?pr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=Tn(),p=ds(i),_=Ti(h,p);_.payload=o,l!=null&&(_.callback=l),o=ls(i,_,p),o!==null&&(Ar(o,i,p,h),Kc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=Tn(),p=ds(i),_=Ti(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ls(i,_,p),o!==null&&(Ar(o,i,p,h),Kc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Tn(),h=ds(i),p=Ti(l,h);p.tag=2,o!=null&&(p.callback=o),o=ls(i,p,h),o!==null&&(Ar(o,i,h,l),Kc(o,i,h))}};function Gy(i,o,l,h,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,T):o.prototype&&o.prototype.isPureReactComponent?!bl(l,h)||!bl(p,_):!0}function Ky(i,o,l){var h=!1,p=ss,_=o.contextType;return typeof _=="object"&&_!==null?_=rr(_):(p=Nn(o)?ho:hn.current,h=o.contextTypes,_=(h=h!=null)?pa(i,p):ss),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Qy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&nh.enqueueReplaceState(o,o.state,null)}function ap(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Gf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=rr(_):(_=Nn(o)?ho:hn.current,p.context=pa(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(op(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&nh.enqueueReplaceState(p,p.state,null),Qc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ia(i,o){try{var l="",h=o;do l+=be(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function lp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function up(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var JC=typeof WeakMap=="function"?WeakMap:Map;function Yy(i,o,l){l=Ti(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){uh||(uh=!0,Sp=h),up(i,o)},l}function Xy(i,o,l){l=Ti(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){up(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){up(i,o),typeof h!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function Jy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new JC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=dA.bind(null,i,o,l),o.then(i,i))}function Zy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function ev(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ti(-1,1),o.tag=2,ls(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var ZC=ae.ReactCurrentOwner,xn=!1;function In(i,o,l,h){o.child=i===null?Ey(o,null,l,h):ya(o,i.child,l,h)}function tv(i,o,l,h,p){l=l.render;var _=o.ref;return Ea(o,p),h=ep(i,o,l,h,_,p),l=tp(),i!==null&&!xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Si(i,o,p)):(yt&&l&&Vf(o),o.flags|=1,In(i,o,h,p),o.child)}function nv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!xp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,rv(i,o,_,h,p)):(i=mh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:bl,l(T,h)&&i.ref===o.ref)return Si(i,o,p)}return o.flags|=1,i=ps(_,h),i.ref=o.ref,i.return=o,o.child=i}function rv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(bl(_,h)&&i.ref===o.ref)if(xn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(xn=!0);else return o.lanes=i.lanes,Si(i,o,p)}return cp(i,o,l,h,p)}function iv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Sa,$n),$n|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ct(Sa,$n),$n|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,ct(Sa,$n),$n|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,ct(Sa,$n),$n|=h;return In(i,o,p,l),o.child}function sv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function cp(i,o,l,h,p){var _=Nn(l)?ho:hn.current;return _=pa(o,_),Ea(o,p),l=ep(i,o,l,h,_,p),h=tp(),i!==null&&!xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Si(i,o,p)):(yt&&h&&Vf(o),o.flags|=1,In(i,o,l,p),o.child)}function ov(i,o,l,h,p){if(Nn(l)){var _=!0;Uc(o)}else _=!1;if(Ea(o,p),o.stateNode===null)ih(i,o),Ky(o,l,h),ap(o,l,h,p),h=!0;else if(i===null){var T=o.stateNode,A=o.memoizedProps;T.props=A;var N=T.context,W=l.contextType;typeof W=="object"&&W!==null?W=rr(W):(W=Nn(l)?ho:hn.current,W=pa(o,W));var X=l.getDerivedStateFromProps,J=typeof X=="function"||typeof T.getSnapshotBeforeUpdate=="function";J||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(A!==h||N!==W)&&Qy(o,T,h,W),as=!1;var Y=o.memoizedState;T.state=Y,Qc(o,h,T,p),N=o.memoizedState,A!==h||Y!==N||kn.current||as?(typeof X=="function"&&(op(o,l,X,h),N=o.memoizedState),(A=as||Gy(o,l,A,h,Y,N,W))?(J||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=N),T.props=h,T.state=N,T.context=W,h=A):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,Iy(i,o),A=o.memoizedProps,W=o.type===o.elementType?A:Tr(o.type,A),T.props=W,J=o.pendingProps,Y=T.context,N=l.contextType,typeof N=="object"&&N!==null?N=rr(N):(N=Nn(l)?ho:hn.current,N=pa(o,N));var le=l.getDerivedStateFromProps;(X=typeof le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(A!==J||Y!==N)&&Qy(o,T,h,N),as=!1,Y=o.memoizedState,T.state=Y,Qc(o,h,T,p);var de=o.memoizedState;A!==J||Y!==de||kn.current||as?(typeof le=="function"&&(op(o,l,le,h),de=o.memoizedState),(W=as||Gy(o,l,W,h,Y,de,N)||!1)?(X||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,de,N),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,de,N)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=de),T.props=h,T.state=de,T.context=N,h=W):(typeof T.componentDidUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),h=!1)}return hp(i,o,l,h,_,p)}function hp(i,o,l,h,p,_){sv(i,o);var T=(o.flags&128)!==0;if(!h&&!T)return p&&hy(o,l,!1),Si(i,o,_);h=o.stateNode,ZC.current=o;var A=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&T?(o.child=ya(o,i.child,null,_),o.child=ya(o,null,A,_)):In(i,o,A,_),o.memoizedState=h.state,p&&hy(o,l,!0),o.child}function av(i){var o=i.stateNode;o.pendingContext?uy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&uy(i,o.context,!1),Kf(i,o.containerInfo)}function lv(i,o,l,h,p){return _a(),Bf(p),o.flags|=256,In(i,o,l,h),o.child}var dp={dehydrated:null,treeContext:null,retryLane:0};function fp(i){return{baseLanes:i,cachePool:null,transitions:null}}function uv(i,o,l){var h=o.pendingProps,p=Et.current,_=!1,T=(o.flags&128)!==0,A;if((A=T)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ct(Et,p&1),i===null)return Uf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,i=h.fallback,_?(h=o.mode,_=o.child,T={mode:"hidden",children:T},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=gh(T,h,0,null),i=Io(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=fp(l),o.memoizedState=dp,i):pp(o,T));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return eA(i,o,T,h,A,p,l);if(_){_=h.fallback,T=o.mode,p=i.child,A=p.sibling;var N={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=N,o.deletions=null):(h=ps(p,N),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?_=ps(A,_):(_=Io(_,T,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,T=i.child.memoizedState,T=T===null?fp(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,o.memoizedState=dp,h}return _=i.child,i=_.sibling,h=ps(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function pp(i,o){return o=gh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function rh(i,o,l,h){return h!==null&&Bf(h),ya(o,i.child,null,l),i=pp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function eA(i,o,l,h,p,_,T){if(l)return o.flags&256?(o.flags&=-257,h=lp(Error(t(422))),rh(i,o,T,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=gh({mode:"visible",children:h.children},p,0,null),_=Io(_,p,T,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&ya(o,i.child,null,T),o.child.memoizedState=fp(T),o.memoizedState=dp,_);if((o.mode&1)===0)return rh(i,o,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,_=Error(t(419)),h=lp(_,h,void 0),rh(i,o,T,h)}if(A=(T&i.childLanes)!==0,xn||A){if(h=Gt,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ii(i,p),Ar(h,i,p,-1))}return Np(),h=lp(Error(t(421))),rh(i,o,T,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=fA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Wn=rs(p.nextSibling),zn=o,yt=!0,Ir=null,i!==null&&(tr[nr++]=Ei,tr[nr++]=wi,tr[nr++]=fo,Ei=i.id,wi=i.overflow,fo=o),o=pp(o,h.children),o.flags|=4096,o)}function cv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),qf(i.return,o,l)}function mp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function hv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(In(i,o,h.children,l),h=Et.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&cv(i,l,o);else if(i.tag===19)cv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ct(Et,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Yc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),mp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Yc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}mp(o,!0,l,null,_);break;case"together":mp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ih(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Si(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),yo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=ps(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=ps(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function tA(i,o,l){switch(o.tag){case 3:av(o),_a();break;case 5:Cy(o);break;case 1:Nn(o.type)&&Uc(o);break;case 4:Kf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;ct(Hc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(ct(Et,Et.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?uv(i,o,l):(ct(Et,Et.current&1),i=Si(i,o,l),i!==null?i.sibling:null);ct(Et,Et.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return hv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ct(Et,Et.current),h)break;return null;case 22:case 23:return o.lanes=0,iv(i,o,l)}return Si(i,o,l)}var dv,gp,fv,pv;dv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},gp=function(){},fv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,go(Gr.current);var _=null;switch(l){case"input":p=vn(i,p),h=vn(i,h),_=[];break;case"select":p=se({},p,{value:void 0}),h=se({},h,{value:void 0}),_=[];break;case"textarea":p=Qn(i,p),h=Qn(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Vc)}Xs(l,h);var T;l=null;for(W in p)if(!h.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var A=p[W];for(T in A)A.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?_||(_=[]):(_=_||[]).push(W,null));for(W in h){var N=h[W];if(A=p!=null?p[W]:void 0,h.hasOwnProperty(W)&&N!==A&&(N!=null||A!=null))if(W==="style")if(A){for(T in A)!A.hasOwnProperty(T)||N&&N.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in N)N.hasOwnProperty(T)&&A[T]!==N[T]&&(l||(l={}),l[T]=N[T])}else l||(_||(_=[]),_.push(W,l)),l=N;else W==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(_=_||[]).push(W,N)):W==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push(W,""+N):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(N!=null&&W==="onScroll"&&ft("scroll",i),_||A===N||(_=[])):(_=_||[]).push(W,N))}l&&(_=_||[]).push("style",l);var W=_;(o.updateQueue=W)&&(o.flags|=4)}},pv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Kl(i,o){if(!yt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function fn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function nA(i,o,l){var h=o.pendingProps;switch(Ff(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(o),null;case 1:return Nn(o.type)&&jc(),fn(o),null;case 3:return h=o.stateNode,wa(),pt(kn),pt(hn),Xf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&($c(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ir!==null&&(Rp(Ir),Ir=null))),gp(i,o),fn(o),null;case 5:Qf(o);var p=go(Wl.current);if(l=o.type,i!==null&&o.stateNode!=null)fv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return fn(o),null}if(i=go(Gr.current),$c(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Hr]=o,h[Fl]=_,i=(o.mode&1)!==0,l){case"dialog":ft("cancel",h),ft("close",h);break;case"iframe":case"object":case"embed":ft("load",h);break;case"video":case"audio":for(p=0;p<Ml.length;p++)ft(Ml[p],h);break;case"source":ft("error",h);break;case"img":case"image":case"link":ft("error",h),ft("load",h);break;case"details":ft("toggle",h);break;case"input":Lr(h,_),ft("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},ft("invalid",h);break;case"textarea":ai(h,_),ft("invalid",h)}Xs(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var A=_[T];T==="children"?typeof A=="string"?h.textContent!==A&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,A,i),p=["children",""+A]):s.hasOwnProperty(T)&&A!=null&&T==="onScroll"&&ft("scroll",h)}switch(l){case"input":Kn(h),at(h,_,!0);break;case"textarea":Kn(h),Yn(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Vc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=lt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=T.createElement(l,{is:h.is}):(i=T.createElement(l),l==="select"&&(T=i,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):i=T.createElementNS(i,l),i[Hr]=o,i[Fl]=h,dv(i,o,!1,!1),o.stateNode=i;e:{switch(T=qi(l,h),l){case"dialog":ft("cancel",i),ft("close",i),p=h;break;case"iframe":case"object":case"embed":ft("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ml.length;p++)ft(Ml[p],i);p=h;break;case"source":ft("error",i),p=h;break;case"img":case"image":case"link":ft("error",i),ft("load",i),p=h;break;case"details":ft("toggle",i),p=h;break;case"input":Lr(i,h),p=vn(i,h),ft("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=se({},h,{value:void 0}),ft("invalid",i);break;case"textarea":ai(i,h),p=Qn(i,h),ft("invalid",i);break;default:p=h}Xs(l,p),A=p;for(_ in A)if(A.hasOwnProperty(_)){var N=A[_];_==="style"?Qs(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Wi(i,N)):_==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&jr(i,N):typeof N=="number"&&jr(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&ft("scroll",i):N!=null&&te(i,_,N,T))}switch(l){case"input":Kn(i),at(i,h,!1);break;case"textarea":Kn(i),Yn(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ae(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Dt(i,!!h.multiple,_,!1):h.defaultValue!=null&&Dt(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Vc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return fn(o),null;case 6:if(i&&o.stateNode!=null)pv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=go(Wl.current),go(Gr.current),$c(o)){if(h=o.stateNode,l=o.memoizedProps,h[Hr]=o,(_=h.nodeValue!==l)&&(i=zn,i!==null))switch(i.tag){case 3:Lc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Lc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Hr]=o,o.stateNode=h}return fn(o),null;case 13:if(pt(Et),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(yt&&Wn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)_y(),_a(),o.flags|=98560,_=!1;else if(_=$c(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Hr]=o}else _a(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;fn(o),_=!1}else Ir!==null&&(Rp(Ir),Ir=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Et.current&1)!==0?Bt===0&&(Bt=3):Np())),o.updateQueue!==null&&(o.flags|=4),fn(o),null);case 4:return wa(),gp(i,o),i===null&&Ll(o.stateNode.containerInfo),fn(o),null;case 10:return $f(o.type._context),fn(o),null;case 17:return Nn(o.type)&&jc(),fn(o),null;case 19:if(pt(Et),_=o.memoizedState,_===null)return fn(o),null;if(h=(o.flags&128)!==0,T=_.rendering,T===null)if(h)Kl(_,!1);else{if(Bt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(T=Yc(i),T!==null){for(o.flags|=128,Kl(_,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ct(Et,Et.current&1|2),o.child}i=i.sibling}_.tail!==null&&ut()>Ca&&(o.flags|=128,h=!0,Kl(_,!1),o.lanes=4194304)}else{if(!h)if(i=Yc(T),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Kl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!yt)return fn(o),null}else 2*ut()-_.renderingStartTime>Ca&&l!==1073741824&&(o.flags|=128,h=!0,Kl(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(l=_.last,l!==null?l.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=ut(),o.sibling=null,l=Et.current,ct(Et,h?l&1|2:l&1),o):(fn(o),null);case 22:case 23:return kp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?($n&1073741824)!==0&&(fn(o),o.subtreeFlags&6&&(o.flags|=8192)):fn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function rA(i,o){switch(Ff(o),o.tag){case 1:return Nn(o.type)&&jc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return wa(),pt(kn),pt(hn),Xf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Qf(o),null;case 13:if(pt(Et),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));_a()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return pt(Et),null;case 4:return wa(),null;case 10:return $f(o.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var sh=!1,pn=!1,iA=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ta(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Ct(i,o,h)}else l.current=null}function _p(i,o,l){try{l()}catch(h){Ct(i,o,h)}}var mv=!1;function sA(i,o){if(kf=es,i=G_(),wf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,A=-1,N=-1,W=0,X=0,J=i,Y=null;t:for(;;){for(var le;J!==l||p!==0&&J.nodeType!==3||(A=T+p),J!==_||h!==0&&J.nodeType!==3||(N=T+h),J.nodeType===3&&(T+=J.nodeValue.length),(le=J.firstChild)!==null;)Y=J,J=le;for(;;){if(J===i)break t;if(Y===l&&++W===p&&(A=T),Y===_&&++X===h&&(N=T),(le=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=le}l=A===-1||N===-1?null:{start:A,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nf={focusedElem:i,selectionRange:l},es=!1,he=o;he!==null;)if(o=he,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,he=i;else for(;he!==null;){o=he;try{var de=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,kt=de.memoizedState,j=o.stateNode,D=j.getSnapshotBeforeUpdate(o.elementType===o.type?fe:Tr(o.type,fe),kt);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=o.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){Ct(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,he=i;break}he=o.return}return de=mv,mv=!1,de}function Ql(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&_p(o,l,_)}p=p.next}while(p!==h)}}function oh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function yp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function gv(i){var o=i.alternate;o!==null&&(i.alternate=null,gv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Hr],delete o[Fl],delete o[Of],delete o[BC],delete o[zC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function _v(i){return i.tag===5||i.tag===3||i.tag===4}function yv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||_v(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function vp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Vc));else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,l),i=i.sibling;i!==null;)vp(i,o,l),i=i.sibling}function Ep(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ep(i,o,l),i=i.sibling;i!==null;)Ep(i,o,l),i=i.sibling}var rn=null,Sr=!1;function us(i,o,l){for(l=l.child;l!==null;)vv(i,o,l),l=l.sibling}function vv(i,o,l){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(ro,l)}catch{}switch(l.tag){case 5:pn||Ta(l,o);case 6:var h=rn,p=Sr;rn=null,us(i,o,l),rn=h,Sr=p,rn!==null&&(Sr?(i=rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):rn.removeChild(l.stateNode));break;case 18:rn!==null&&(Sr?(i=rn,l=l.stateNode,i.nodeType===8?bf(i.parentNode,l):i.nodeType===1&&bf(i,l),vr(i)):bf(rn,l.stateNode));break;case 4:h=rn,p=Sr,rn=l.stateNode.containerInfo,Sr=!0,us(i,o,l),rn=h,Sr=p;break;case 0:case 11:case 14:case 15:if(!pn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&_p(l,o,T),p=p.next}while(p!==h)}us(i,o,l);break;case 1:if(!pn&&(Ta(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){Ct(l,o,A)}us(i,o,l);break;case 21:us(i,o,l);break;case 22:l.mode&1?(pn=(h=pn)||l.memoizedState!==null,us(i,o,l),pn=h):us(i,o,l);break;default:us(i,o,l)}}function Ev(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new iA),o.forEach(function(h){var p=pA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Cr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,T=o,A=T;e:for(;A!==null;){switch(A.tag){case 5:rn=A.stateNode,Sr=!1;break e;case 3:rn=A.stateNode.containerInfo,Sr=!0;break e;case 4:rn=A.stateNode.containerInfo,Sr=!0;break e}A=A.return}if(rn===null)throw Error(t(160));vv(_,T,p),rn=null,Sr=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch(W){Ct(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)wv(o,i),o=o.sibling}function wv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Cr(o,i),Qr(i),h&4){try{Ql(3,i,i.return),oh(3,i)}catch(fe){Ct(i,i.return,fe)}try{Ql(5,i,i.return)}catch(fe){Ct(i,i.return,fe)}}break;case 1:Cr(o,i),Qr(i),h&512&&l!==null&&Ta(l,l.return);break;case 5:if(Cr(o,i),Qr(i),h&512&&l!==null&&Ta(l,l.return),i.flags&32){var p=i.stateNode;try{jr(p,"")}catch(fe){Ct(i,i.return,fe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,A=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{A==="input"&&_.type==="radio"&&_.name!=null&&Oe(p,_),qi(A,T);var W=qi(A,_);for(T=0;T<N.length;T+=2){var X=N[T],J=N[T+1];X==="style"?Qs(p,J):X==="dangerouslySetInnerHTML"?Wi(p,J):X==="children"?jr(p,J):te(p,X,J,W)}switch(A){case"input":Vr(p,_);break;case"textarea":li(p,_);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var le=_.value;le!=null?Dt(p,!!_.multiple,le,!1):Y!==!!_.multiple&&(_.defaultValue!=null?Dt(p,!!_.multiple,_.defaultValue,!0):Dt(p,!!_.multiple,_.multiple?[]:"",!1))}p[Fl]=_}catch(fe){Ct(i,i.return,fe)}}break;case 6:if(Cr(o,i),Qr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(fe){Ct(i,i.return,fe)}}break;case 3:if(Cr(o,i),Qr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{vr(o.containerInfo)}catch(fe){Ct(i,i.return,fe)}break;case 4:Cr(o,i),Qr(i);break;case 13:Cr(o,i),Qr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Tp=ut())),h&4&&Ev(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(pn=(W=pn)||X,Cr(o,i),pn=W):Cr(o,i),Qr(i),h&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!X&&(i.mode&1)!==0)for(he=i,X=i.child;X!==null;){for(J=he=X;he!==null;){switch(Y=he,le=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ql(4,Y,Y.return);break;case 1:Ta(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,de.props=o.memoizedProps,de.state=o.memoizedState,de.componentWillUnmount()}catch(fe){Ct(h,l,fe)}}break;case 5:Ta(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Sv(J);continue}}le!==null?(le.return=Y,he=le):Sv(J)}X=X.sibling}e:for(X=null,J=i;;){if(J.tag===5){if(X===null){X=J;try{p=J.stateNode,W?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(A=J.stateNode,N=J.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=$i("display",T))}catch(fe){Ct(i,i.return,fe)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=W?"":J.memoizedProps}catch(fe){Ct(i,i.return,fe)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===i)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===i)break e;for(;J.sibling===null;){if(J.return===null||J.return===i)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Cr(o,i),Qr(i),h&4&&Ev(i);break;case 21:break;default:Cr(o,i),Qr(i)}}function Qr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(_v(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(jr(p,""),h.flags&=-33);var _=yv(i);Ep(i,_,p);break;case 3:case 4:var T=h.stateNode.containerInfo,A=yv(i);vp(i,A,T);break;default:throw Error(t(161))}}catch(N){Ct(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function oA(i,o,l){he=i,Iv(i)}function Iv(i,o,l){for(var h=(i.mode&1)!==0;he!==null;){var p=he,_=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||sh;if(!T){var A=p.alternate,N=A!==null&&A.memoizedState!==null||pn;A=sh;var W=pn;if(sh=T,(pn=N)&&!W)for(he=p;he!==null;)T=he,N=T.child,T.tag===22&&T.memoizedState!==null?Cv(p):N!==null?(N.return=T,he=N):Cv(p);for(;_!==null;)he=_,Iv(_),_=_.sibling;he=p,sh=A,pn=W}Tv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,he=_):Tv(i)}}function Tv(i){for(;he!==null;){var o=he;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:pn||oh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!pn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Tr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Sy(o,_,h);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Sy(o,T,l)}break;case 5:var A=o.stateNode;if(l===null&&o.flags&4){l=A;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var X=W.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&vr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||o.flags&512&&yp(o)}catch(Y){Ct(o,o.return,Y)}}if(o===i){he=null;break}if(l=o.sibling,l!==null){l.return=o.return,he=l;break}he=o.return}}function Sv(i){for(;he!==null;){var o=he;if(o===i){he=null;break}var l=o.sibling;if(l!==null){l.return=o.return,he=l;break}he=o.return}}function Cv(i){for(;he!==null;){var o=he;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{oh(4,o)}catch(N){Ct(o,l,N)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(N){Ct(o,p,N)}}var _=o.return;try{yp(o)}catch(N){Ct(o,_,N)}break;case 5:var T=o.return;try{yp(o)}catch(N){Ct(o,T,N)}}}catch(N){Ct(o,o.return,N)}if(o===i){he=null;break}var A=o.sibling;if(A!==null){A.return=o.return,he=A;break}he=o.return}}var aA=Math.ceil,ah=ae.ReactCurrentDispatcher,wp=ae.ReactCurrentOwner,sr=ae.ReactCurrentBatchConfig,Ke=0,Gt=null,Ot=null,sn=0,$n=0,Sa=is(0),Bt=0,Yl=null,yo=0,lh=0,Ip=0,Xl=null,Dn=null,Tp=0,Ca=1/0,Ci=null,uh=!1,Sp=null,cs=null,ch=!1,hs=null,hh=0,Jl=0,Cp=null,dh=-1,fh=0;function Tn(){return(Ke&6)!==0?ut():dh!==-1?dh:dh=ut()}function ds(i){return(i.mode&1)===0?1:(Ke&2)!==0&&sn!==0?sn&-sn:$C.transition!==null?(fh===0&&(fh=so()),fh):(i=We,i!==0||(i=window.event,i=i===void 0?16:Al(i.type)),i)}function Ar(i,o,l,h){if(50<Jl)throw Jl=0,Cp=null,Error(t(185));Yi(i,l,h),((Ke&2)===0||i!==Gt)&&(i===Gt&&((Ke&2)===0&&(lh|=l),Bt===4&&fs(i,sn)),bn(i,h),l===1&&Ke===0&&(o.mode&1)===0&&(Ca=ut()+500,Bc&&os()))}function bn(i,o){var l=i.callbackNode;fi(i,o);var h=io(i,i===Gt?sn:0);if(h===0)l!==null&&wl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&wl(l),o===1)i.tag===0?WC(Rv.bind(null,i)):dy(Rv.bind(null,i)),jC(function(){(Ke&6)===0&&os()}),l=null;else{switch(Ji(h)){case 1:l=no;break;case 4:l=Gi;break;case 16:l=Jn;break;case 536870912:l=fc;break;default:l=Jn}l=Mv(l,Av.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Av(i,o){if(dh=-1,fh=0,(Ke&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Aa()&&i.callbackNode!==l)return null;var h=io(i,i===Gt?sn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ph(i,h);else{o=h;var p=Ke;Ke|=2;var _=kv();(Gt!==i||sn!==o)&&(Ci=null,Ca=ut()+500,Eo(i,o));do try{cA();break}catch(A){Pv(i,A)}while(!0);Wf(),ah.current=_,Ke=p,Ot!==null?o=0:(Gt=null,sn=0,o=Bt)}if(o!==0){if(o===2&&(p=jn(i),p!==0&&(h=p,o=Ap(i,p))),o===1)throw l=Yl,Eo(i,0),fs(i,h),bn(i,ut()),l;if(o===6)fs(i,h);else{if(p=i.current.alternate,(h&30)===0&&!lA(p)&&(o=ph(i,h),o===2&&(_=jn(i),_!==0&&(h=_,o=Ap(i,_))),o===1))throw l=Yl,Eo(i,0),fs(i,h),bn(i,ut()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:wo(i,Dn,Ci);break;case 3:if(fs(i,h),(h&130023424)===h&&(o=Tp+500-ut(),10<o)){if(io(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Tn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Df(wo.bind(null,i,Dn,Ci),o);break}wo(i,Dn,Ci);break;case 4:if(fs(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var T=31-En(h);_=1<<T,T=o[T],T>p&&(p=T),h&=~_}if(h=p,h=ut()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*aA(h/1960))-h,10<h){i.timeoutHandle=Df(wo.bind(null,i,Dn,Ci),h);break}wo(i,Dn,Ci);break;case 5:wo(i,Dn,Ci);break;default:throw Error(t(329))}}}return bn(i,ut()),i.callbackNode===l?Av.bind(null,i):null}function Ap(i,o){var l=Xl;return i.current.memoizedState.isDehydrated&&(Eo(i,o).flags|=256),i=ph(i,o),i!==2&&(o=Dn,Dn=l,o!==null&&Rp(o)),i}function Rp(i){Dn===null?Dn=i:Dn.push.apply(Dn,i)}function lA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!wr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function fs(i,o){for(o&=~Ip,o&=~lh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-En(o),h=1<<l;i[l]=-1,o&=~h}}function Rv(i){if((Ke&6)!==0)throw Error(t(327));Aa();var o=io(i,0);if((o&1)===0)return bn(i,ut()),null;var l=ph(i,o);if(i.tag!==0&&l===2){var h=jn(i);h!==0&&(o=h,l=Ap(i,h))}if(l===1)throw l=Yl,Eo(i,0),fs(i,o),bn(i,ut()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,wo(i,Dn,Ci),bn(i,ut()),null}function Pp(i,o){var l=Ke;Ke|=1;try{return i(o)}finally{Ke=l,Ke===0&&(Ca=ut()+500,Bc&&os())}}function vo(i){hs!==null&&hs.tag===0&&(Ke&6)===0&&Aa();var o=Ke;Ke|=1;var l=sr.transition,h=We;try{if(sr.transition=null,We=1,i)return i()}finally{We=h,sr.transition=l,Ke=o,(Ke&6)===0&&os()}}function kp(){$n=Sa.current,pt(Sa)}function Eo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,FC(l)),Ot!==null)for(l=Ot.return;l!==null;){var h=l;switch(Ff(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&jc();break;case 3:wa(),pt(kn),pt(hn),Xf();break;case 5:Qf(h);break;case 4:wa();break;case 13:pt(Et);break;case 19:pt(Et);break;case 10:$f(h.type._context);break;case 22:case 23:kp()}l=l.return}if(Gt=i,Ot=i=ps(i.current,null),sn=$n=o,Bt=0,Yl=null,Ip=lh=yo=0,Dn=Xl=null,mo!==null){for(o=0;o<mo.length;o++)if(l=mo[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,h.next=T}l.pending=h}mo=null}return i}function Pv(i,o){do{var l=Ot;try{if(Wf(),Xc.current=th,Jc){for(var h=wt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Jc=!1}if(_o=0,Ht=Ut=wt=null,$l=!1,ql=0,wp.current=null,l===null||l.return===null){Bt=1,Yl=o,Ot=null;break}e:{var _=i,T=l.return,A=l,N=o;if(o=sn,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var W=N,X=A,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var le=Zy(T);if(le!==null){le.flags&=-257,ev(le,T,A,_,o),le.mode&1&&Jy(_,W,o),o=le,N=W;var de=o.updateQueue;if(de===null){var fe=new Set;fe.add(N),o.updateQueue=fe}else de.add(N);break e}else{if((o&1)===0){Jy(_,W,o),Np();break e}N=Error(t(426))}}else if(yt&&A.mode&1){var kt=Zy(T);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),ev(kt,T,A,_,o),Bf(Ia(N,A));break e}}_=N=Ia(N,A),Bt!==4&&(Bt=2),Xl===null?Xl=[_]:Xl.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var j=Yy(_,N,o);Ty(_,j);break e;case 1:A=N;var D=_.type,U=_.stateNode;if((_.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(cs===null||!cs.has(U)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=Xy(_,A,o);Ty(_,ee);break e}}_=_.return}while(_!==null)}xv(l)}catch(pe){o=pe,Ot===l&&l!==null&&(Ot=l=l.return);continue}break}while(!0)}function kv(){var i=ah.current;return ah.current=th,i===null?th:i}function Np(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Gt===null||(yo&268435455)===0&&(lh&268435455)===0||fs(Gt,sn)}function ph(i,o){var l=Ke;Ke|=2;var h=kv();(Gt!==i||sn!==o)&&(Ci=null,Eo(i,o));do try{uA();break}catch(p){Pv(i,p)}while(!0);if(Wf(),Ke=l,ah.current=h,Ot!==null)throw Error(t(261));return Gt=null,sn=0,Bt}function uA(){for(;Ot!==null;)Nv(Ot)}function cA(){for(;Ot!==null&&!hc();)Nv(Ot)}function Nv(i){var o=Ov(i.alternate,i,$n);i.memoizedProps=i.pendingProps,o===null?xv(i):Ot=o,wp.current=null}function xv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=nA(l,o,$n),l!==null){Ot=l;return}}else{if(l=rA(l,o),l!==null){l.flags&=32767,Ot=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Bt=6,Ot=null;return}}if(o=o.sibling,o!==null){Ot=o;return}Ot=o=i}while(o!==null);Bt===0&&(Bt=5)}function wo(i,o,l){var h=We,p=sr.transition;try{sr.transition=null,We=1,hA(i,o,l,h)}finally{sr.transition=p,We=h}return null}function hA(i,o,l,h){do Aa();while(hs!==null);if((Ke&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(it(i,_),i===Gt&&(Ot=Gt=null,sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ch||(ch=!0,Mv(Jn,function(){return Aa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=sr.transition,sr.transition=null;var T=We;We=1;var A=Ke;Ke|=4,wp.current=null,sA(i,l),wv(l,i),xC(Nf),es=!!kf,Nf=kf=null,i.current=l,oA(l),ff(),Ke=A,We=T,sr.transition=_}else i.current=l;if(ch&&(ch=!1,hs=i,hh=p),_=i.pendingLanes,_===0&&(cs=null),pc(l.stateNode),bn(i,ut()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(uh)throw uh=!1,i=Sp,Sp=null,i;return(hh&1)!==0&&i.tag!==0&&Aa(),_=i.pendingLanes,(_&1)!==0?i===Cp?Jl++:(Jl=0,Cp=i):Jl=0,os(),null}function Aa(){if(hs!==null){var i=Ji(hh),o=sr.transition,l=We;try{if(sr.transition=null,We=16>i?16:i,hs===null)var h=!1;else{if(i=hs,hs=null,hh=0,(Ke&6)!==0)throw Error(t(331));var p=Ke;for(Ke|=4,he=i.current;he!==null;){var _=he,T=_.child;if((he.flags&16)!==0){var A=_.deletions;if(A!==null){for(var N=0;N<A.length;N++){var W=A[N];for(he=W;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:Ql(8,X,_)}var J=X.child;if(J!==null)J.return=X,he=J;else for(;he!==null;){X=he;var Y=X.sibling,le=X.return;if(gv(X),X===W){he=null;break}if(Y!==null){Y.return=le,he=Y;break}he=le}}}var de=_.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var kt=fe.sibling;fe.sibling=null,fe=kt}while(fe!==null)}}he=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,he=T;else e:for(;he!==null;){if(_=he,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ql(9,_,_.return)}var j=_.sibling;if(j!==null){j.return=_.return,he=j;break e}he=_.return}}var D=i.current;for(he=D;he!==null;){T=he;var U=T.child;if((T.subtreeFlags&2064)!==0&&U!==null)U.return=T,he=U;else e:for(T=D;he!==null;){if(A=he,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:oh(9,A)}}catch(pe){Ct(A,A.return,pe)}if(A===T){he=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,he=ee;break e}he=A.return}}if(Ke=p,os(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(ro,i)}catch{}h=!0}return h}finally{We=l,sr.transition=o}}return!1}function Dv(i,o,l){o=Ia(l,o),o=Yy(i,o,1),i=ls(i,o,1),o=Tn(),i!==null&&(Yi(i,1,o),bn(i,o))}function Ct(i,o,l){if(i.tag===3)Dv(i,i,l);else for(;o!==null;){if(o.tag===3){Dv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(cs===null||!cs.has(h))){i=Ia(l,i),i=Xy(o,i,1),o=ls(o,i,1),i=Tn(),o!==null&&(Yi(o,1,i),bn(o,i));break}}o=o.return}}function dA(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=Tn(),i.pingedLanes|=i.suspendedLanes&l,Gt===i&&(sn&l)===l&&(Bt===4||Bt===3&&(sn&130023424)===sn&&500>ut()-Tp?Eo(i,0):Ip|=l),bn(i,o)}function bv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Qo,Qo<<=1,(Qo&130023424)===0&&(Qo=4194304)));var l=Tn();i=Ii(i,o),i!==null&&(Yi(i,o,l),bn(i,l))}function fA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),bv(i,l)}function pA(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),bv(i,l)}var Ov;Ov=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||kn.current)xn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return xn=!1,tA(i,o,l);xn=(i.flags&131072)!==0}else xn=!1,yt&&(o.flags&1048576)!==0&&fy(o,Wc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;ih(i,o),i=o.pendingProps;var p=pa(o,hn.current);Ea(o,l),p=ep(null,o,h,i,p,l);var _=tp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Nn(h)?(_=!0,Uc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Gf(o),p.updater=nh,o.stateNode=p,p._reactInternals=o,ap(o,h,i,l),o=hp(null,o,h,!0,_,l)):(o.tag=0,yt&&_&&Vf(o),In(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(ih(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=gA(h),i=Tr(h,i),p){case 0:o=cp(null,o,h,i,l);break e;case 1:o=ov(null,o,h,i,l);break e;case 11:o=tv(null,o,h,i,l);break e;case 14:o=nv(null,o,h,Tr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),cp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),ov(i,o,h,p,l);case 3:e:{if(av(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Iy(i,o),Qc(o,h,null,l);var T=o.memoizedState;if(h=T.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ia(Error(t(423)),o),o=lv(i,o,h,l,p);break e}else if(h!==p){p=Ia(Error(t(424)),o),o=lv(i,o,h,l,p);break e}else for(Wn=rs(o.stateNode.containerInfo.firstChild),zn=o,yt=!0,Ir=null,l=Ey(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(_a(),h===p){o=Si(i,o,l);break e}In(i,o,h,l)}o=o.child}return o;case 5:return Cy(o),i===null&&Uf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,xf(h,p)?T=null:_!==null&&xf(h,_)&&(o.flags|=32),sv(i,o),In(i,o,T,l),o.child;case 6:return i===null&&Uf(o),null;case 13:return uv(i,o,l);case 4:return Kf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=ya(o,null,h,l):In(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),tv(i,o,h,p,l);case 7:return In(i,o,o.pendingProps,l),o.child;case 8:return In(i,o,o.pendingProps.children,l),o.child;case 12:return In(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,T=p.value,ct(Hc,h._currentValue),h._currentValue=T,_!==null)if(wr(_.value,T)){if(_.children===p.children&&!kn.current){o=Si(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var A=_.dependencies;if(A!==null){T=_.child;for(var N=A.firstContext;N!==null;){if(N.context===h){if(_.tag===1){N=Ti(-1,l&-l),N.tag=2;var W=_.updateQueue;if(W!==null){W=W.shared;var X=W.pending;X===null?N.next=N:(N.next=X.next,X.next=N),W.pending=N}}_.lanes|=l,N=_.alternate,N!==null&&(N.lanes|=l),qf(_.return,l,o),A.lanes|=l;break}N=N.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,A=T.alternate,A!==null&&(A.lanes|=l),qf(T,l,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}In(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Ea(o,l),p=rr(p),h=h(p),o.flags|=1,In(i,o,h,l),o.child;case 14:return h=o.type,p=Tr(h,o.pendingProps),p=Tr(h.type,p),nv(i,o,h,p,l);case 15:return rv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),ih(i,o),o.tag=1,Nn(h)?(i=!0,Uc(o)):i=!1,Ea(o,l),Ky(o,h,p),ap(o,h,p,l),hp(null,o,h,!0,i,l);case 19:return hv(i,o,l);case 22:return iv(i,o,l)}throw Error(t(156,o.tag))};function Mv(i,o){return Go(i,o)}function mA(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function or(i,o,l,h){return new mA(i,o,l,h)}function xp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function gA(i){if(typeof i=="function")return xp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===Pe)return 14}return 2}function ps(i,o){var l=i.alternate;return l===null?(l=or(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function mh(i,o,l,h,p,_){var T=2;if(h=i,typeof i=="function")xp(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case b:return Io(l.children,p,_,o);case R:T=8,p|=8;break;case C:return i=or(12,l,o,p|2),i.elementType=C,i.lanes=_,i;case P:return i=or(13,l,o,p),i.elementType=P,i.lanes=_,i;case vt:return i=or(19,l,o,p),i.elementType=vt,i.lanes=_,i;case Je:return gh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:T=10;break e;case O:T=9;break e;case L:T=11;break e;case Pe:T=14;break e;case gt:T=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=or(T,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Io(i,o,l,h){return i=or(7,i,h,o),i.lanes=l,i}function gh(i,o,l,h){return i=or(22,i,h,o),i.elementType=Je,i.lanes=l,i.stateNode={isHidden:!1},i}function Dp(i,o,l){return i=or(6,i,null,o),i.lanes=l,i}function bp(i,o,l){return o=or(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function _A(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Op(i,o,l,h,p,_,T,A,N){return i=new _A(i,o,l,A,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=or(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(_),i}function yA(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Lv(i){if(!i)return ss;i=i._reactInternals;e:{if(pr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Nn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Nn(l))return cy(i,l,o)}return o}function Vv(i,o,l,h,p,_,T,A,N){return i=Op(l,h,!0,i,p,_,T,A,N),i.context=Lv(null),l=i.current,h=Tn(),p=ds(l),_=Ti(h,p),_.callback=o??null,ls(l,_,p),i.current.lanes=p,Yi(i,p,h),bn(i,h),i}function _h(i,o,l,h){var p=o.current,_=Tn(),T=ds(p);return l=Lv(l),o.context===null?o.context=l:o.pendingContext=l,o=Ti(_,T),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ls(p,o,T),i!==null&&(Ar(i,p,T,_),Kc(i,p,T)),T}function yh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Fv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Mp(i,o){Fv(i,o),(i=i.alternate)&&Fv(i,o)}function vA(){return null}var jv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Lp(i){this._internalRoot=i}vh.prototype.render=Lp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));_h(i,o,null,null)},vh.prototype.unmount=Lp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;vo(function(){_h(null,i,null,null)}),o[yi]=null}};function vh(i){this._internalRoot=i}vh.prototype.unstable_scheduleHydration=function(i){if(i){var o=vc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<zr.length&&o!==0&&o<zr[l].priority;l++);zr.splice(l,0,i),l===0&&Ic(i)}};function Vp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Eh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function EA(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var W=yh(T);_.call(W)}}var T=Vv(o,h,i,0,null,!1,!1,"",Uv);return i._reactRootContainer=T,i[yi]=T.current,Ll(i.nodeType===8?i.parentNode:i),vo(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var W=yh(N);A.call(W)}}var N=Op(i,0,!1,null,null,!1,!1,"",Uv);return i._reactRootContainer=N,i[yi]=N.current,Ll(i.nodeType===8?i.parentNode:i),vo(function(){_h(o,N,l,h)}),N}function wh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var A=p;p=function(){var N=yh(T);A.call(N)}}_h(o,T,i,p)}else T=EA(l,o,i,p,h);return yh(T)}_c=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ki(o.pendingLanes);l!==0&&(Xi(o,l|1),bn(o,ut()),(Ke&6)===0&&(Ca=ut()+500,os()))}break;case 13:vo(function(){var h=Ii(i,1);if(h!==null){var p=Tn();Ar(h,i,1,p)}}),Mp(i,1)}},Yo=function(i){if(i.tag===13){var o=Ii(i,134217728);if(o!==null){var l=Tn();Ar(o,i,134217728,l)}Mp(i,134217728)}},yc=function(i){if(i.tag===13){var o=ds(i),l=Ii(i,o);if(l!==null){var h=Tn();Ar(l,i,o,h)}Mp(i,o)}},vc=function(){return We},Ec=function(i,o){var l=We;try{return We=i,o()}finally{We=l}},hi=function(i,o,l){switch(o){case"input":if(Vr(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Fc(h);if(!p)throw Error(t(90));Mr(h),Vr(h,p)}}}break;case"textarea":li(i,l);break;case"select":o=l.value,o!=null&&Dt(i,!!l.multiple,o,!1)}},Js=Pp,_l=vo;var wA={usingClientEntryPoint:!1,Events:[jl,da,Fc,rt,hr,Pp]},Zl={findFiberByHostInstance:co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IA={bundleType:Zl.bundleType,version:Zl.version,rendererPackageName:Zl.rendererPackageName,rendererConfig:Zl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=El(i),i===null?null:i.stateNode},findFiberByHostInstance:Zl.findFiberByHostInstance||vA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ih.isDisabled&&Ih.supportsFiber)try{ro=Ih.inject(IA),Fn=Ih}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wA,On.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(o))throw Error(t(200));return yA(i,o,null,l)},On.createRoot=function(i,o){if(!Vp(i))throw Error(t(299));var l=!1,h="",p=jv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Op(i,1,!1,null,null,l,!1,h,p),i[yi]=o.current,Ll(i.nodeType===8?i.parentNode:i),new Lp(o)},On.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=El(o),i=i===null?null:i.stateNode,i},On.flushSync=function(i){return vo(i)},On.hydrate=function(i,o,l){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!0,l)},On.hydrateRoot=function(i,o,l){if(!Vp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",T=jv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=Vv(o,null,i,1,l??null,p,!1,_,T),i[yi]=o.current,Ll(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new vh(o)},On.render=function(i,o,l){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!1,l)},On.unmountComponentAtNode=function(i){if(!Eh(i))throw Error(t(40));return i._reactRootContainer?(vo(function(){wh(null,null,i,!1,function(){i._reactRootContainer=null,i[yi]=null})}),!0):!1},On.unstable_batchedUpdates=Pp,On.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Eh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return wh(i,o,l,!1,h)},On.version="18.3.1-next-f1338f8080-20240426",On}var Kv;function xA(){if(Kv)return Up.exports;Kv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Up.exports=NA(),Up.exports}var Qv;function DA(){if(Qv)return Th;Qv=1;var n=xA();return Th.createRoot=n.createRoot,Th.hydrateRoot=n.hydrateRoot,Th}var bA=DA();const OA="modulepreload",MA=function(n){return"/"+n},Yv={},yI=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(m=>{if(m=MA(m),m in Yv)return;Yv[m]=!0;const y=m.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${w}`))return;const I=document.createElement("link");if(I.rel=y?"stylesheet":OA,y||(I.as="script"),I.crossOrigin="",I.href=m,f&&I.setAttribute("nonce",f),document.head.appendChild(I),y)return new Promise((k,V)=>{I.addEventListener("load",k),I.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=()=>{};var Xv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw il(e)},il=function(n){return new Error("Firebase Database ("+vI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},VA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|m>>6,k=m&63;f||(k=64,u||(I=64)),r.push(t[y],t[w],t[I],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(EI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):VA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||w==null)throw new FA;const I=a<<2|d>>4;if(r.push(I),m!==64){const k=d<<4&240|m>>2;if(r.push(k),w!==64){const V=m<<6&192|w;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class FA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(n){const e=EI(n);return rg.encodeByteArray(e,!0)},Wh=function(n){return wI(n).replace(/\./g,"")},$h=function(n){try{return rg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n){return II(void 0,n)}function II(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!UA(t)||(n[t]=II(n[t],e[t]));return n}function UA(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=()=>BA().__FIREBASE_DEFAULTS__,WA=()=>{if(typeof process>"u"||typeof Xv>"u")return;const n=Xv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$A=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$h(n[1]);return e&&JSON.parse(e)},Cd=()=>{try{return LA()||zA()||WA()||$A()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},TI=n=>{var e,t;return(t=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},SI=n=>{const e=TI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},CI=()=>{var n;return(n=Cd())===null||n===void 0?void 0:n.config},AI=n=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ig(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wh(JSON.stringify(t)),Wh(JSON.stringify(u)),""].join(".")}const du={};function qA(){const n={prod:[],emulator:[]};for(const e of Object.keys(du))du[e]?n.emulator.push(e):n.prod.push(e);return n}function HA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jv=!1;function sg(n,e){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||du[n]===e||du[n]||Jv)return;du[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=qA().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function f(I,k){I.setAttribute("width","24"),I.setAttribute("id",k),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function m(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Jv=!0,u()},I}function y(I,k){I.setAttribute("id",k),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=HA(r),k=t("text"),V=document.getElementById(k)||document.createElement("span"),B=t("learnmore"),z=document.getElementById(B)||document.createElement("a"),Z=t("preprendIcon"),Q=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const te=I.element;d(te),y(z,B);const ae=m();f(Q,Z),te.append(Q,V,z,ae),document.body.appendChild(te)}a?(V.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function GA(){var n;const e=(n=Cd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function PI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YA(){const n=yn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function XA(){return vI.NODE_ADMIN===!0}function JA(){return!GA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZA(){try{return typeof indexedDB=="object"}catch{return!1}}function eR(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="FirebaseError";class Ui extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tR,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zu.prototype.create)}}class zu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?nR(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Ui(s,d,r)}}function nR(n,e){return n.replace(rR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){return JSON.parse(n)}function zt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Tu($h(a[0])||""),t=Tu($h(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},iR=function(n){const e=kI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},sR=function(n){const e=kI(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function za(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function qh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function bi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Zv(a)&&Zv(u)){if(!bi(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Zv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function su(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function ou(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let w=0;w<80;w++){w<40?w<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):w<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const I=(s<<5|s>>>27)+m+f+y+r[w]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=I}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function aR(n,e){const t=new lR(n,e);return t.subscribe.bind(t)}class lR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");uR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Wp),s.error===void 0&&(s.error=Wp),s.complete===void 0&&(s.complete=Wp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wp(){}function Wa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ad=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n){return n&&n._delegate?n._delegate:n}class Ds{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fR(e))try{this.getOrInitializeService({instanceIdentifier:To})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=To){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=To){return this.instances.has(e)}getOptions(e=To){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=To){return this.component?this.component.multipleInstances?e:To:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dR(n){return n===To?void 0:n}function fR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const mR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},gR=Be.INFO,_R={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},yR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=_R[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=gR,this._logHandler=yR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const vR=(n,e)=>e.some(t=>n instanceof t);let eE,tE;function ER(){return eE||(eE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return tE||(tE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NI=new WeakMap,um=new WeakMap,xI=new WeakMap,$p=new WeakMap,ag=new WeakMap;function IR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Ts(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&NI.set(t,n)}).catch(()=>{}),ag.set(e,n),e}function TR(n){if(um.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});um.set(n,e)}let cm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return um.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ts(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function SR(n){cm=n(cm)}function CR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qp(this),e,...t);return xI.set(r,e.sort?e.sort():[e]),Ts(r)}:wR().includes(n)?function(...e){return n.apply(qp(this),e),Ts(NI.get(this))}:function(...e){return Ts(n.apply(qp(this),e))}}function AR(n){return typeof n=="function"?CR(n):(n instanceof IDBTransaction&&TR(n),vR(n,ER())?new Proxy(n,cm):n)}function Ts(n){if(n instanceof IDBRequest)return IR(n);if($p.has(n))return $p.get(n);const e=AR(n);return e!==n&&($p.set(n,e),ag.set(e,n)),e}const qp=n=>ag.get(n);function RR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Ts(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ts(u.result),f.oldVersion,f.newVersion,Ts(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const PR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],Hp=new Map;function nE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hp.get(e))return Hp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=kR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Hp.set(e,a),a}SR(n=>({...n,get:(e,t,r)=>nE(e,t)||n.get(e,t,r),has:(e,t)=>!!nE(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function xR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hm="@firebase/app",rE="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Rd("@firebase/app"),DR="@firebase/app-compat",bR="@firebase/analytics-compat",OR="@firebase/analytics",MR="@firebase/app-check-compat",LR="@firebase/app-check",VR="@firebase/auth",FR="@firebase/auth-compat",jR="@firebase/database",UR="@firebase/data-connect",BR="@firebase/database-compat",zR="@firebase/functions",WR="@firebase/functions-compat",$R="@firebase/installations",qR="@firebase/installations-compat",HR="@firebase/messaging",GR="@firebase/messaging-compat",KR="@firebase/performance",QR="@firebase/performance-compat",YR="@firebase/remote-config",XR="@firebase/remote-config-compat",JR="@firebase/storage",ZR="@firebase/storage-compat",e1="@firebase/firestore",t1="@firebase/ai",n1="@firebase/firestore-compat",r1="firebase",i1="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="[DEFAULT]",s1={[hm]:"fire-core",[DR]:"fire-core-compat",[OR]:"fire-analytics",[bR]:"fire-analytics-compat",[LR]:"fire-app-check",[MR]:"fire-app-check-compat",[VR]:"fire-auth",[FR]:"fire-auth-compat",[jR]:"fire-rtdb",[UR]:"fire-data-connect",[BR]:"fire-rtdb-compat",[zR]:"fire-fn",[WR]:"fire-fn-compat",[$R]:"fire-iid",[qR]:"fire-iid-compat",[HR]:"fire-fcm",[GR]:"fire-fcm-compat",[KR]:"fire-perf",[QR]:"fire-perf-compat",[YR]:"fire-rc",[XR]:"fire-rc-compat",[JR]:"fire-gcs",[ZR]:"fire-gcs-compat",[e1]:"fire-fst",[n1]:"fire-fst-compat",[t1]:"fire-vertex","fire-js":"fire-js",[r1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map,o1=new Map,fm=new Map;function iE(n,e){try{n.container.addComponent(e)}catch(t){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Po(n){const e=n.name;if(fm.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;fm.set(e,n);for(const t of Gh.values())iE(t,n);for(const t of o1.values())iE(t,n);return!0}function Pd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ar(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ss=new zu("app","Firebase",a1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ss.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=i1;function DI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ss.create("bad-app-name",{appName:String(s)});if(t||(t=CI()),!t)throw Ss.create("no-options");const a=Gh.get(s);if(a){if(bi(t,a.options)&&bi(r,a.config))return a;throw Ss.create("duplicate-app",{appName:s})}const u=new pR(s);for(const f of fm.values())u.addComponent(f);const d=new l1(t,r,u);return Gh.set(s,d),d}function lg(n=dm){const e=Gh.get(n);if(!e&&n===dm&&CI())return DI();if(!e)throw Ss.create("no-app",{appName:n});return e}function Jr(n,e,t){var r;let s=(r=s1[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(d.join(" "));return}Po(new Ds(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firebase-heartbeat-database",c1=1,Su="firebase-heartbeat-store";let Gp=null;function bI(){return Gp||(Gp=RR(u1,c1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Su)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ss.create("idb-open",{originalErrorMessage:n.message})})),Gp}async function h1(n){try{const t=(await bI()).transaction(Su),r=await t.objectStore(Su).get(OI(n));return await t.done,r}catch(e){if(e instanceof Ui)Oi.warn(e.message);else{const t=Ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(t.message)}}}async function sE(n,e){try{const r=(await bI()).transaction(Su,"readwrite");await r.objectStore(Su).put(e,OI(n)),await r.done}catch(t){if(t instanceof Ui)Oi.warn(t.message);else{const r=Ss.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oi.warn(r.message)}}}function OI(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=1024,f1=30;class p1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new g1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=oE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>f1){const u=_1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Oi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oE(),{heartbeatsToSend:r,unsentEntries:s}=m1(this._heartbeatsCache.heartbeats),a=Wh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Oi.warn(t),""}}}function oE(){return new Date().toISOString().substring(0,10)}function m1(n,e=d1){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),aE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),aE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class g1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZA()?eR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await h1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function aE(n){return Wh(JSON.stringify({version:2,heartbeats:n})).length}function _1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(n){Po(new Ds("platform-logger",e=>new NR(e),"PRIVATE")),Po(new Ds("heartbeat",e=>new p1(e),"PRIVATE")),Jr(hm,rE,n),Jr(hm,rE,"esm2017"),Jr("fire-js","")}y1("");function ug(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function MI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v1=MI,LI=new zu("auth","Firebase",MI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new Rd("@firebase/auth");function E1(n,...e){Kh.logLevel<=Be.WARN&&Kh.warn(`Auth (${Vo}): ${n}`,...e)}function Dh(n,...e){Kh.logLevel<=Be.ERROR&&Kh.error(`Auth (${Vo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,...e){throw cg(n,...e)}function Zr(n,...e){return cg(n,...e)}function VI(n,e,t){const r=Object.assign(Object.assign({},v1()),{[e]:t});return new zu("auth","Firebase",r).create(e,{appName:n.name})}function Cs(n){return VI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return LI.create(n,...e)}function Ie(n,e,...t){if(!n)throw cg(e,...t)}function Pi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dh(e),new Error(e)}function Mi(n,e){n||Pi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function w1(){return lE()==="http:"||lE()==="https:"}function lE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w1()||QA()||"connection"in navigator)?navigator.onLine:!0}function T1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mi(t>e,"Short delay should be less than long delay!"),this.isMobile=og()||PI()}get(){return I1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(n,e){Mi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],A1=new Wu(3e4,6e4);function qs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Bi(n,e,t,r,s={}){return jI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=sl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return KA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&$s(n.emulatorConfig.host)&&(m.credentials="include"),FI.fetch()(await UI(n,n.config.apiHost,t,d),m)})}async function jI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},S1),e);try{const s=new P1(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Sh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Sh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Sh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw VI(n,y,m);Dr(n,y)}}catch(s){if(s instanceof Ui)throw s;Dr(n,"network-request-failed",{message:String(s)})}}async function kd(n,e,t,r,s={}){const a=await Bi(n,e,t,r,s);return"mfaPendingCredential"in a&&Dr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function UI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?hg(n.config,s):`${n.config.apiScheme}://${s}`;return C1.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function R1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class P1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zr(this.auth,"network-request-failed")),A1.get())})}}function Sh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Zr(n,e,r);return s.customData._tokenResponse=t,s}function uE(n){return n!==void 0&&n.enterprise!==void 0}class k1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return R1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N1(n,e){return Bi(n,"GET","/v2/recaptchaConfig",qs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(n,e){return Bi(n,"POST","/v1/accounts:delete",e)}async function Qh(n,e){return Bi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D1(n,e=!1){const t=tt(n),r=await t.getIdToken(e),s=dg(r);Ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:fu(Kp(s.auth_time)),issuedAtTime:fu(Kp(s.iat)),expirationTime:fu(Kp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Kp(n){return Number(n)*1e3}function dg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(t);return s?JSON.parse(s):(Dh("Failed to decode base64 JWT payload"),null)}catch(s){return Dh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cE(n){const e=dg(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ui&&b1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function b1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fu(this.lastLoginAt),this.creationTime=fu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Cu(n,Qh(t,{idToken:r}));Ie(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?BI(a.providerUserInfo):[],d=L1(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new mm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function M1(n){const e=tt(n);await Yh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function BI(n){return n.map(e=>{var{providerId:t}=e,r=ug(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(n,e){const t=await jI(n,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await UI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&$s(n.emulatorConfig.host)&&(f.credentials="include"),FI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function F1(n,e){return Bi(n,"POST","/v2/accounts:revokeToken",qs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=cE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await V1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Oa;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ie(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ie(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oa,this.toJSON())}_performRefresh(){return Pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=ug(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new mm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Cu(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return D1(this,e)}reload(){return M1(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ar(this.auth.app))return Promise.reject(Cs(this.auth));const e=await this.getIdToken();return await Cu(this,x1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,k=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=t.photoURL)!==null&&u!==void 0?u:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,z=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,Z=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Q=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:ae,isAnonymous:Ge,providerData:xe,stsTokenManager:b}=t;Ie(te&&b,e,"internal-error");const R=Oa.fromJSON(this.name,b);Ie(typeof te=="string",e,"internal-error"),gs(w,e.name),gs(I,e.name),Ie(typeof ae=="boolean",e,"internal-error"),Ie(typeof Ge=="boolean",e,"internal-error"),gs(k,e.name),gs(V,e.name),gs(B,e.name),gs(z,e.name),gs(Z,e.name),gs(Q,e.name);const C=new Pr({uid:te,auth:e,email:I,emailVerified:ae,displayName:w,isAnonymous:Ge,photoURL:V,phoneNumber:k,tenantId:B,stsTokenManager:R,createdAt:Z,lastLoginAt:Q});return xe&&Array.isArray(xe)&&(C.providerData=xe.map(x=>Object.assign({},x))),z&&(C._redirectEventId=z),C}static async _fromIdTokenResponse(e,t,r=!1){const s=new Oa;s.updateFromServerResponse(t);const a=new Pr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ie(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?BI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Oa;d.updateFromIdToken(r);const f=new Pr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function ki(n){Mi(n instanceof Function,"Expected a class definition");let e=hE.get(n);return e?(Mi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hE.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zI.type="NONE";const dE=zI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ma{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=bh(this.userKey,s.apiKey,a),this.fullPersistenceKey=bh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qh(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ma(ki(dE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||ki(dE);const u=bh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let w;if(typeof y=="string"){const I=await Qh(e,{idToken:y}).catch(()=>{});if(!I)break;w=await Pr._fromGetAccountInfoResponse(e,I,y)}else w=Pr._fromJSON(e,y);m!==a&&(d=w),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ma(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Ma(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(HI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KI(e))return"Blackberry";if(QI(e))return"Webos";if($I(e))return"Safari";if((e.includes("chrome/")||qI(e))&&!e.includes("edge/"))return"Chrome";if(GI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WI(n=yn()){return/firefox\//i.test(n)}function $I(n=yn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qI(n=yn()){return/crios\//i.test(n)}function HI(n=yn()){return/iemobile/i.test(n)}function GI(n=yn()){return/android/i.test(n)}function KI(n=yn()){return/blackberry/i.test(n)}function QI(n=yn()){return/webos/i.test(n)}function fg(n=yn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function j1(n=yn()){var e;return fg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return YA()&&document.documentMode===10}function YI(n=yn()){return fg(n)||GI(n)||QI(n)||KI(n)||/windows phone/i.test(n)||HI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n,e=[]){let t;switch(n){case"Browser":t=fE(yn());break;case"Worker":t=`${fE(yn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(n,e={}){return Bi(n,"GET","/v2/passwordPolicy",qs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=6;class $1{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:W1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pE(this),this.idTokenSubscription=new pE(this),this.beforeStateQueue=new B1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ki(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Ma.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qh(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ar(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ar(this.app))return Promise.reject(Cs(this));const t=e?tt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ar(this.app)?Promise.reject(Cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ar(this.app)?Promise.reject(Cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ki(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z1(this),t=new $1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await F1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ki(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Ma.create(this,[ki(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ar(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&E1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fo(n){return tt(n)}class pE{constructor(e){this.auth=e,this.observer=null,this.addObserver=aR(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H1(n){Nd=n}function JI(n){return Nd.loadJS(n)}function G1(){return Nd.recaptchaEnterpriseScript}function K1(){return Nd.gapiScript}function Q1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Y1{constructor(){this.enterprise=new X1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class X1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const J1="recaptcha-enterprise",ZI="NO_RECAPTCHA";class Z1{constructor(e){this.type=J1,this.auth=Fo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{N1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new k1(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;uE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(ZI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&uE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=G1();f.length!==0&&(f+=d),JI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function mE(n,e,t,r=!1,s=!1){const a=new Z1(n);let u;if(s)u=ZI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function gm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await mE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await mE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n,e){const t=Pd(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(bi(a,e??{}))return s;Dr(s,"already-initialized")}return t.initialize({options:e})}function tP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ki);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nP(n,e,t){const r=Fo(n);Ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=eT(e),{host:u,port:d}=rP(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ie(bi(m,r.config.emulator)&&bi(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,$s(u)?(ig(`${a}//${u}${f}`),sg("Auth",!0)):iP()}function eT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rP(n){const e=eT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:gE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:gE(u)}}}function gE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function iP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pi("not implemented")}_getIdTokenResponse(e){return Pi("not implemented")}_linkToIdToken(e,t){return Pi("not implemented")}_getReauthenticationResolver(e){return Pi("not implemented")}}async function sP(n,e){return Bi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(n,e){return kd(n,"POST","/v1/accounts:signInWithPassword",qs(n,e))}async function tT(n,e){return Bi(n,"POST","/v1/accounts:sendOobCode",qs(n,e))}async function aP(n,e){return tT(n,e)}async function lP(n,e){return tT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(n,e){return kd(n,"POST","/v1/accounts:signInWithEmailLink",qs(n,e))}async function cP(n,e){return kd(n,"POST","/v1/accounts:signInWithEmailLink",qs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends pg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Au(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Au(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gm(e,t,"signInWithPassword",oP);case"emailLink":return uP(e,{email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gm(e,r,"signUpPassword",sP);case"emailLink":return cP(e,{idToken:t,email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(n,e){return kd(n,"POST","/v1/accounts:signInWithIdp",qs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="http://localhost";class ko extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ko(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=ug(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new ko(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return La(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,La(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,La(e,t)}buildRequest(){const e={requestUri:hP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fP(n){const e=su(ou(n)).link,t=e?su(ou(e)).deep_link_id:null,r=su(ou(n)).deep_link_id;return(r?su(ou(r)).link:null)||r||t||e||n}class mg{constructor(e){var t,r,s,a,u,d;const f=su(ou(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,w=dP((s=f.mode)!==null&&s!==void 0?s:null);Ie(m&&y&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=fP(e);try{return new mg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.providerId=ol.PROVIDER_ID}static credential(e,t){return Au._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mg.parseLink(t);return Ie(r,"argument-error"),Au._fromEmailAndCode(e,r.code,r.tenantId)}}ol.PROVIDER_ID="password";ol.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ol.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends nT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends $u{constructor(){super("facebook.com")}static credential(e){return ko._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends $u{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ko._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ys.credential(t,r)}catch{return null}}}ys.GOOGLE_SIGN_IN_METHOD="google.com";ys.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends $u{constructor(){super("github.com")}static credential(e){return ko._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.GITHUB_SIGN_IN_METHOD="github.com";vs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends $u{constructor(){super("twitter.com")}static credential(e,t){return ko._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Es.credential(t,r)}catch{return null}}}Es.TWITTER_SIGN_IN_METHOD="twitter.com";Es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Pr._fromIdTokenResponse(e,r,s),u=_E(r);return new $a({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_E(r);return new $a({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _E(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends Ui{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Xh(e,t,r,s)}}function rT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Xh._fromErrorAndOperation(n,a,e,r):a})}async function pP(n,e,t=!1){const r=await Cu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $a._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(n,e,t=!1){const{auth:r}=n;if(ar(r.app))return Promise.reject(Cs(r));const s="reauthenticate";try{const a=await Cu(n,rT(r,s,e,n),t);Ie(a.idToken,r,"internal-error");const u=dg(a.idToken);Ie(u,r,"internal-error");const{sub:d}=u;return Ie(n.uid===d,r,"user-mismatch"),$a._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Dr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(n,e,t=!1){if(ar(n.app))return Promise.reject(Cs(n));const r="signIn",s=await rT(n,r,e),a=await $a._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function gP(n,e){return iT(Fo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(n){const e=Fo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yP(n,e,t){const r=Fo(n);await gm(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",lP)}function vP(n,e,t){return ar(n.app)?Promise.reject(Cs(n)):gP(tt(n),ol.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_P(n),r})}async function EP(n,e){const t=tt(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await aP(t.auth,s);a!==n.email&&await n.reload()}function wP(n,e,t,r){return tt(n).onIdTokenChanged(e,t,r)}function IP(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}function TP(n,e,t,r){return tt(n).onAuthStateChanged(e,t,r)}function sT(n){return tt(n).signOut()}const Jh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jh,"1"),this.storage.removeItem(Jh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=1e3,CP=10;class aT extends oT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=YI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);U1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},SP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}aT.type="LOCAL";const AP=aT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT extends oT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lT.type="SESSION";const uT=lT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await RP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=gg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return window}function kP(n){ei().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){return typeof ei().WorkerGlobalScope<"u"&&typeof ei().importScripts=="function"}async function NP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function DP(){return cT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebaseLocalStorageDb",bP=1,Zh="firebaseLocalStorage",dT="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dd(n,e){return n.transaction([Zh],e?"readwrite":"readonly").objectStore(Zh)}function OP(){const n=indexedDB.deleteDatabase(hT);return new qu(n).toPromise()}function _m(){const n=indexedDB.open(hT,bP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Zh,{keyPath:dT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Zh)?e(r):(r.close(),await OP(),e(await _m()))})})}async function yE(n,e,t){const r=Dd(n,!0).put({[dT]:e,value:t});return new qu(r).toPromise()}async function MP(n,e){const t=Dd(n,!1).get(e),r=await new qu(t).toPromise();return r===void 0?null:r.value}function vE(n,e){const t=Dd(n,!0).delete(e);return new qu(t).toPromise()}const LP=800,VP=3;class fT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _m(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>VP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xd._getInstance(DP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await NP(),!this.activeServiceWorker)return;this.sender=new PP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _m();return await yE(e,Jh,"1"),await vE(e,Jh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>MP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Dd(s,!1).getAll();return new qu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fT.type="LOCAL";const FP=fT;new Wu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n,e){return e?ki(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return La(e,this._buildIdpRequest())}_linkToIdToken(e,t){return La(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return La(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UP(n){return iT(n.auth,new _g(n),n.bypassAuthState)}function BP(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),mP(t,new _g(n),n.bypassAuthState)}async function zP(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),pP(t,new _g(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UP;case"linkViaPopup":case"linkViaRedirect":return zP;case"reauthViaPopup":case"reauthViaRedirect":return BP;default:Dr(this.auth,"internal-error")}}resolve(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=new Wu(2e3,1e4);class Da extends pT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Mi(this.filter.length===1,"Popup operations only handle one event");const e=gg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WP.get())};e()}}Da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="pendingRedirect",Oh=new Map;class qP extends pT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Oh.get(this.auth._key());if(!e){try{const r=await HP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Oh.set(this.auth._key(),e)}return this.bypassAuthState||Oh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HP(n,e){const t=QP(e),r=KP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function GP(n,e){Oh.set(n._key(),e)}function KP(n){return ki(n._redirectPersistence)}function QP(n){return bh($P,n.config.apiKey,n.name)}async function YP(n,e,t=!1){if(ar(n.app))return Promise.reject(Cs(n));const r=Fo(n),s=jP(r,e),u=await new qP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=600*1e3;class JP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!mT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XP&&this.cachedEventUids.clear(),this.cachedEventUids.has(EE(e))}saveEventToCache(e){this.cachedEventUids.add(EE(e)),this.lastProcessedEventTime=Date.now()}}function EE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(n,e={}){return Bi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nk=/^https?/;async function rk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ek(n);for(const t of e)try{if(ik(t))return}catch{}Dr(n,"unauthorized-domain")}function ik(n){const e=pm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!nk.test(t))return!1;if(tk.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Wu(3e4,6e4);function wE(){const n=ei().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ok(n){return new Promise((e,t)=>{var r,s,a;function u(){wE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wE(),t(Zr(n,"network-request-failed"))},timeout:sk.get()})}if(!((s=(r=ei().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=ei().gapi)===null||a===void 0)&&a.load)u();else{const d=Q1("iframefcb");return ei()[d]=()=>{gapi.load?u():t(Zr(n,"network-request-failed"))},JI(`${K1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Mh=null,e})}let Mh=null;function ak(n){return Mh=Mh||ok(n),Mh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new Wu(5e3,15e3),uk="__/auth/iframe",ck="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fk(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hg(e,ck):`https://${n.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:n.name,v:Vo},s=dk.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${sl(r).slice(1)}`}async function pk(n){const e=await ak(n),t=ei().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:fk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Zr(n,"network-request-failed"),d=ei().setTimeout(()=>{a(u)},lk.get());function f(){ei().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gk=500,_k=600,yk="_blank",vk="http://localhost";class IE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(n,e,t,r=gk,s=_k){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},mk),{width:r.toString(),height:s.toString(),top:a,left:u}),m=yn().toLowerCase();t&&(d=qI(m)?yk:t),WI(m)&&(e=e||vk,f.scrollbars="yes");const y=Object.entries(f).reduce((I,[k,V])=>`${I}${k}=${V},`,"");if(j1(m)&&d!=="_self")return wk(e||"",d),new IE(null);const w=window.open(e||"",d,y);Ie(w,n,"popup-blocked");try{w.focus()}catch{}return new IE(w)}function wk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="__/auth/handler",Tk="emulator/auth/handler",Sk=encodeURIComponent("fac");async function TE(n,e,t,r,s,a){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vo,eventId:s};if(e instanceof nT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",qh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof $u){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${Sk}=${encodeURIComponent(f)}`:"";return`${Ck(n)}?${sl(d).slice(1)}${m}`}function Ck({config:n}){return n.emulator?hg(n,Tk):`https://${n.authDomain}/${Ik}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uT,this._completeRedirectFn=YP,this._overrideRedirectResult=GP}async _openPopup(e,t,r,s){var a;Mi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await TE(e,t,r,pm(),s);return Ek(e,u,gg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await TE(e,t,r,pm(),s);return kP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Mi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await pk(e),r=new JP(e);return t.register("authEvent",s=>(Ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qp,{type:Qp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Qp];u!==void 0&&t(!!u),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return YI()||$I()||fg()}}const Rk=Ak;var SE="@firebase/auth",CE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nk(n){Po(new Ds("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ie(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XI(n)},m=new q1(r,s,a,f);return tP(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Po(new Ds("auth-internal",e=>{const t=Fo(e.getProvider("auth").getImmediate());return(r=>new Pk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jr(SE,CE,kk(n)),Jr(SE,CE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=300,Dk=AI("authIdTokenMaxAge")||xk;let AE=null;const bk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dk)return;const s=t==null?void 0:t.token;AE!==s&&(AE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ok(n=lg()){const e=Pd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=eP(n,{popupRedirectResolver:Rk,persistence:[FP,AP,uT]}),r=AI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=bk(a.toString());IP(t,u,()=>u(t.currentUser)),wP(t,d=>u(d))}}const s=TI("auth");return s&&nP(t,`http://${s}`),t}function Mk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}H1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Zr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",Mk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nk("Browser");var Lk="firebase",Vk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr(Lk,Vk,"app");var RE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,gT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,R){function C(){}C.prototype=R.prototype,b.D=R.prototype,b.prototype=new C,b.prototype.constructor=b,b.C=function(x,O,L){for(var P=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)P[vt-2]=arguments[vt];return R.prototype[O].apply(x,P)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,R,C){C||(C=0);var x=Array(16);if(typeof R=="string")for(var O=0;16>O;++O)x[O]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(O=0;16>O;++O)x[O]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=b.g[0],C=b.g[1],O=b.g[2];var L=b.g[3],P=R+(L^C&(O^L))+x[0]+3614090360&4294967295;R=C+(P<<7&4294967295|P>>>25),P=L+(O^R&(C^O))+x[1]+3905402710&4294967295,L=R+(P<<12&4294967295|P>>>20),P=O+(C^L&(R^C))+x[2]+606105819&4294967295,O=L+(P<<17&4294967295|P>>>15),P=C+(R^O&(L^R))+x[3]+3250441966&4294967295,C=O+(P<<22&4294967295|P>>>10),P=R+(L^C&(O^L))+x[4]+4118548399&4294967295,R=C+(P<<7&4294967295|P>>>25),P=L+(O^R&(C^O))+x[5]+1200080426&4294967295,L=R+(P<<12&4294967295|P>>>20),P=O+(C^L&(R^C))+x[6]+2821735955&4294967295,O=L+(P<<17&4294967295|P>>>15),P=C+(R^O&(L^R))+x[7]+4249261313&4294967295,C=O+(P<<22&4294967295|P>>>10),P=R+(L^C&(O^L))+x[8]+1770035416&4294967295,R=C+(P<<7&4294967295|P>>>25),P=L+(O^R&(C^O))+x[9]+2336552879&4294967295,L=R+(P<<12&4294967295|P>>>20),P=O+(C^L&(R^C))+x[10]+4294925233&4294967295,O=L+(P<<17&4294967295|P>>>15),P=C+(R^O&(L^R))+x[11]+2304563134&4294967295,C=O+(P<<22&4294967295|P>>>10),P=R+(L^C&(O^L))+x[12]+1804603682&4294967295,R=C+(P<<7&4294967295|P>>>25),P=L+(O^R&(C^O))+x[13]+4254626195&4294967295,L=R+(P<<12&4294967295|P>>>20),P=O+(C^L&(R^C))+x[14]+2792965006&4294967295,O=L+(P<<17&4294967295|P>>>15),P=C+(R^O&(L^R))+x[15]+1236535329&4294967295,C=O+(P<<22&4294967295|P>>>10),P=R+(O^L&(C^O))+x[1]+4129170786&4294967295,R=C+(P<<5&4294967295|P>>>27),P=L+(C^O&(R^C))+x[6]+3225465664&4294967295,L=R+(P<<9&4294967295|P>>>23),P=O+(R^C&(L^R))+x[11]+643717713&4294967295,O=L+(P<<14&4294967295|P>>>18),P=C+(L^R&(O^L))+x[0]+3921069994&4294967295,C=O+(P<<20&4294967295|P>>>12),P=R+(O^L&(C^O))+x[5]+3593408605&4294967295,R=C+(P<<5&4294967295|P>>>27),P=L+(C^O&(R^C))+x[10]+38016083&4294967295,L=R+(P<<9&4294967295|P>>>23),P=O+(R^C&(L^R))+x[15]+3634488961&4294967295,O=L+(P<<14&4294967295|P>>>18),P=C+(L^R&(O^L))+x[4]+3889429448&4294967295,C=O+(P<<20&4294967295|P>>>12),P=R+(O^L&(C^O))+x[9]+568446438&4294967295,R=C+(P<<5&4294967295|P>>>27),P=L+(C^O&(R^C))+x[14]+3275163606&4294967295,L=R+(P<<9&4294967295|P>>>23),P=O+(R^C&(L^R))+x[3]+4107603335&4294967295,O=L+(P<<14&4294967295|P>>>18),P=C+(L^R&(O^L))+x[8]+1163531501&4294967295,C=O+(P<<20&4294967295|P>>>12),P=R+(O^L&(C^O))+x[13]+2850285829&4294967295,R=C+(P<<5&4294967295|P>>>27),P=L+(C^O&(R^C))+x[2]+4243563512&4294967295,L=R+(P<<9&4294967295|P>>>23),P=O+(R^C&(L^R))+x[7]+1735328473&4294967295,O=L+(P<<14&4294967295|P>>>18),P=C+(L^R&(O^L))+x[12]+2368359562&4294967295,C=O+(P<<20&4294967295|P>>>12),P=R+(C^O^L)+x[5]+4294588738&4294967295,R=C+(P<<4&4294967295|P>>>28),P=L+(R^C^O)+x[8]+2272392833&4294967295,L=R+(P<<11&4294967295|P>>>21),P=O+(L^R^C)+x[11]+1839030562&4294967295,O=L+(P<<16&4294967295|P>>>16),P=C+(O^L^R)+x[14]+4259657740&4294967295,C=O+(P<<23&4294967295|P>>>9),P=R+(C^O^L)+x[1]+2763975236&4294967295,R=C+(P<<4&4294967295|P>>>28),P=L+(R^C^O)+x[4]+1272893353&4294967295,L=R+(P<<11&4294967295|P>>>21),P=O+(L^R^C)+x[7]+4139469664&4294967295,O=L+(P<<16&4294967295|P>>>16),P=C+(O^L^R)+x[10]+3200236656&4294967295,C=O+(P<<23&4294967295|P>>>9),P=R+(C^O^L)+x[13]+681279174&4294967295,R=C+(P<<4&4294967295|P>>>28),P=L+(R^C^O)+x[0]+3936430074&4294967295,L=R+(P<<11&4294967295|P>>>21),P=O+(L^R^C)+x[3]+3572445317&4294967295,O=L+(P<<16&4294967295|P>>>16),P=C+(O^L^R)+x[6]+76029189&4294967295,C=O+(P<<23&4294967295|P>>>9),P=R+(C^O^L)+x[9]+3654602809&4294967295,R=C+(P<<4&4294967295|P>>>28),P=L+(R^C^O)+x[12]+3873151461&4294967295,L=R+(P<<11&4294967295|P>>>21),P=O+(L^R^C)+x[15]+530742520&4294967295,O=L+(P<<16&4294967295|P>>>16),P=C+(O^L^R)+x[2]+3299628645&4294967295,C=O+(P<<23&4294967295|P>>>9),P=R+(O^(C|~L))+x[0]+4096336452&4294967295,R=C+(P<<6&4294967295|P>>>26),P=L+(C^(R|~O))+x[7]+1126891415&4294967295,L=R+(P<<10&4294967295|P>>>22),P=O+(R^(L|~C))+x[14]+2878612391&4294967295,O=L+(P<<15&4294967295|P>>>17),P=C+(L^(O|~R))+x[5]+4237533241&4294967295,C=O+(P<<21&4294967295|P>>>11),P=R+(O^(C|~L))+x[12]+1700485571&4294967295,R=C+(P<<6&4294967295|P>>>26),P=L+(C^(R|~O))+x[3]+2399980690&4294967295,L=R+(P<<10&4294967295|P>>>22),P=O+(R^(L|~C))+x[10]+4293915773&4294967295,O=L+(P<<15&4294967295|P>>>17),P=C+(L^(O|~R))+x[1]+2240044497&4294967295,C=O+(P<<21&4294967295|P>>>11),P=R+(O^(C|~L))+x[8]+1873313359&4294967295,R=C+(P<<6&4294967295|P>>>26),P=L+(C^(R|~O))+x[15]+4264355552&4294967295,L=R+(P<<10&4294967295|P>>>22),P=O+(R^(L|~C))+x[6]+2734768916&4294967295,O=L+(P<<15&4294967295|P>>>17),P=C+(L^(O|~R))+x[13]+1309151649&4294967295,C=O+(P<<21&4294967295|P>>>11),P=R+(O^(C|~L))+x[4]+4149444226&4294967295,R=C+(P<<6&4294967295|P>>>26),P=L+(C^(R|~O))+x[11]+3174756917&4294967295,L=R+(P<<10&4294967295|P>>>22),P=O+(R^(L|~C))+x[2]+718787259&4294967295,O=L+(P<<15&4294967295|P>>>17),P=C+(L^(O|~R))+x[9]+3951481745&4294967295,b.g[0]=b.g[0]+R&4294967295,b.g[1]=b.g[1]+(O+(P<<21&4294967295|P>>>11))&4294967295,b.g[2]=b.g[2]+O&4294967295,b.g[3]=b.g[3]+L&4294967295}r.prototype.u=function(b,R){R===void 0&&(R=b.length);for(var C=R-this.blockSize,x=this.B,O=this.h,L=0;L<R;){if(O==0)for(;L<=C;)s(this,b,L),L+=this.blockSize;if(typeof b=="string"){for(;L<R;)if(x[O++]=b.charCodeAt(L++),O==this.blockSize){s(this,x),O=0;break}}else for(;L<R;)if(x[O++]=b[L++],O==this.blockSize){s(this,x),O=0;break}}this.h=O,this.o+=R},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var R=1;R<b.length-8;++R)b[R]=0;var C=8*this.o;for(R=b.length-8;R<b.length;++R)b[R]=C&255,C/=256;for(this.u(b),b=Array(16),R=C=0;4>R;++R)for(var x=0;32>x;x+=8)b[C++]=this.g[R]>>>x&255;return b};function a(b,R){var C=d;return Object.prototype.hasOwnProperty.call(C,b)?C[b]:C[b]=R(b)}function u(b,R){this.h=R;for(var C=[],x=!0,O=b.length-1;0<=O;O--){var L=b[O]|0;x&&L==R||(C[O]=L,x=!1)}this.g=C}var d={};function f(b){return-128<=b&&128>b?a(b,function(R){return new u([R|0],0>R?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return z(m(-b));for(var R=[],C=1,x=0;b>=C;x++)R[x]=b/C|0,C*=4294967296;return new u(R,0)}function y(b,R){if(b.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(b.charAt(0)=="-")return z(y(b.substring(1),R));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=m(Math.pow(R,8)),x=w,O=0;O<b.length;O+=8){var L=Math.min(8,b.length-O),P=parseInt(b.substring(O,O+L),R);8>L?(L=m(Math.pow(R,L)),x=x.j(L).add(m(P))):(x=x.j(C),x=x.add(m(P)))}return x}var w=f(0),I=f(1),k=f(16777216);n=u.prototype,n.m=function(){if(B(this))return-z(this).m();for(var b=0,R=1,C=0;C<this.g.length;C++){var x=this.i(C);b+=(0<=x?x:4294967296+x)*R,R*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V(this))return"0";if(B(this))return"-"+z(this).toString(b);for(var R=m(Math.pow(b,6)),C=this,x="";;){var O=ae(C,R).g;C=Z(C,O.j(R));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(b);if(C=O,V(C))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function V(b){if(b.h!=0)return!1;for(var R=0;R<b.g.length;R++)if(b.g[R]!=0)return!1;return!0}function B(b){return b.h==-1}n.l=function(b){return b=Z(this,b),B(b)?-1:V(b)?0:1};function z(b){for(var R=b.g.length,C=[],x=0;x<R;x++)C[x]=~b.g[x];return new u(C,~b.h).add(I)}n.abs=function(){return B(this)?z(this):this},n.add=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],x=0,O=0;O<=R;O++){var L=x+(this.i(O)&65535)+(b.i(O)&65535),P=(L>>>16)+(this.i(O)>>>16)+(b.i(O)>>>16);x=P>>>16,L&=65535,P&=65535,C[O]=P<<16|L}return new u(C,C[C.length-1]&-2147483648?-1:0)};function Z(b,R){return b.add(z(R))}n.j=function(b){if(V(this)||V(b))return w;if(B(this))return B(b)?z(this).j(z(b)):z(z(this).j(b));if(B(b))return z(this.j(z(b)));if(0>this.l(k)&&0>b.l(k))return m(this.m()*b.m());for(var R=this.g.length+b.g.length,C=[],x=0;x<2*R;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<b.g.length;O++){var L=this.i(x)>>>16,P=this.i(x)&65535,vt=b.i(O)>>>16,Pe=b.i(O)&65535;C[2*x+2*O]+=P*Pe,Q(C,2*x+2*O),C[2*x+2*O+1]+=L*Pe,Q(C,2*x+2*O+1),C[2*x+2*O+1]+=P*vt,Q(C,2*x+2*O+1),C[2*x+2*O+2]+=L*vt,Q(C,2*x+2*O+2)}for(x=0;x<R;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=R;x<2*R;x++)C[x]=0;return new u(C,0)};function Q(b,R){for(;(b[R]&65535)!=b[R];)b[R+1]+=b[R]>>>16,b[R]&=65535,R++}function te(b,R){this.g=b,this.h=R}function ae(b,R){if(V(R))throw Error("division by zero");if(V(b))return new te(w,w);if(B(b))return R=ae(z(b),R),new te(z(R.g),z(R.h));if(B(R))return R=ae(b,z(R)),new te(z(R.g),R.h);if(30<b.g.length){if(B(b)||B(R))throw Error("slowDivide_ only works with positive integers.");for(var C=I,x=R;0>=x.l(b);)C=Ge(C),x=Ge(x);var O=xe(C,1),L=xe(x,1);for(x=xe(x,2),C=xe(C,2);!V(x);){var P=L.add(x);0>=P.l(b)&&(O=O.add(C),L=P),x=xe(x,1),C=xe(C,1)}return R=Z(b,O.j(R)),new te(O,R)}for(O=w;0<=b.l(R);){for(C=Math.max(1,Math.floor(b.m()/R.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=m(C),P=L.j(R);B(P)||0<P.l(b);)C-=x,L=m(C),P=L.j(R);V(L)&&(L=I),O=O.add(L),b=Z(b,P)}return new te(O,b)}n.A=function(b){return ae(this,b).h},n.and=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],x=0;x<R;x++)C[x]=this.i(x)&b.i(x);return new u(C,this.h&b.h)},n.or=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],x=0;x<R;x++)C[x]=this.i(x)|b.i(x);return new u(C,this.h|b.h)},n.xor=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],x=0;x<R;x++)C[x]=this.i(x)^b.i(x);return new u(C,this.h^b.h)};function Ge(b){for(var R=b.g.length+1,C=[],x=0;x<R;x++)C[x]=b.i(x)<<1|b.i(x-1)>>>31;return new u(C,b.h)}function xe(b,R){var C=R>>5;R%=32;for(var x=b.g.length-C,O=[],L=0;L<x;L++)O[L]=0<R?b.i(L+C)>>>R|b.i(L+C+1)<<32-R:b.i(L+C);return new u(O,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,As=u}).apply(typeof RE<"u"?RE:typeof self<"u"?self:typeof window<"u"?window:{});var Ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _T,au,yT,Lh,ym,vT,ET,wT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ch=="object"&&Ch];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var F=c[S];if(!(F in v))break e;v=v[F]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,S=!1,F={next:function(){if(!S&&v<c.length){var q=v++;return{value:g(q,c[q]),done:!1}}return S=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function w(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,S),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function I(c,g,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,I.apply(null,arguments)}function k(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function V(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,F,q){for(var re=Array(arguments.length-2),et=2;et<arguments.length;et++)re[et-2]=arguments[et];return g.prototype[F].apply(S,re)}}function B(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function z(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(f(S)){const F=c.length||0,q=S.length||0;c.length=F+q;for(let re=0;re<q;re++)c[F+re]=S[re]}else c.push(S)}}class Z{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Q(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function ae(c){return ae[" "](c),c}ae[" "]=function(){};var Ge=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function xe(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function b(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function R(c){const g={};for(const v in c)g[v]=c[v];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,g){let v,S;for(let F=1;F<arguments.length;F++){S=arguments[F];for(v in S)c[v]=S[v];for(let q=0;q<C.length;q++)v=C[q],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function O(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function L(c){d.setTimeout(()=>{throw c},0)}function P(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class vt{constructor(){this.h=this.g=null}add(g,v){const S=Pe.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Pe=new Z(()=>new gt,c=>c.reset());class gt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Je,ie=!1,ge=new vt,se=()=>{const c=d.Promise.resolve(void 0);Je=()=>{c.then(M)}};var M=()=>{for(var c;c=P();){try{c.h.call(c.g)}catch(v){L(v)}var g=Pe;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ie=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ke=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function be(c,g){if(me.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ge){e:{try{ae(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}V(be,me);var Ve={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Ae=0;function Qe(c,g,v,S,F){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=F,this.key=++Ae,this.da=this.fa=!1}function De(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Kn(c){this.src=c,this.g={},this.h=0}Kn.prototype.add=function(c,g,v,S,F){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var re=en(c,g,S,F);return-1<re?(g=c[re],v||(g.fa=!1)):(g=new Qe(g,this.src,q,!!S,F),g.fa=v,c.push(g)),g};function Mr(c,g){var v=g.type;if(v in c.g){var S=c.g[v],F=Array.prototype.indexOf.call(S,g,void 0),q;(q=0<=F)&&Array.prototype.splice.call(S,F,1),q&&(De(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function en(c,g,v,S){for(var F=0;F<c.length;++F){var q=c[F];if(!q.da&&q.listener==g&&q.capture==!!v&&q.ha==S)return F}return-1}var vn="closure_lm_"+(1e6*Math.random()|0),Lr={};function Oe(c,g,v,S,F){if(Array.isArray(g)){for(var q=0;q<g.length;q++)Oe(c,g[q],v,S,F);return null}return v=Yn(v),c&&c[we]?c.K(g,v,m(S)?!!S.capture:!1,F):Vr(c,g,v,!1,S,F)}function Vr(c,g,v,S,F,q){if(!g)throw Error("Invalid event type");var re=m(F)?!!F.capture:!!F,et=ai(c);if(et||(c[vn]=et=new Kn(c)),v=et.add(g,v,S,re,q),v.proxy)return v;if(S=at(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)ke||(F=re),F===void 0&&(F=!1),c.addEventListener(g.toString(),S,F);else if(c.attachEvent)c.attachEvent(Dt(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function at(){function c(v){return g.call(c.src,c.listener,v)}const g=Qn;return c}function Fr(c,g,v,S,F){if(Array.isArray(g))for(var q=0;q<g.length;q++)Fr(c,g[q],v,S,F);else S=m(S)?!!S.capture:!!S,v=Yn(v),c&&c[we]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],v=en(q,v,S,F),-1<v&&(De(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=ai(c))&&(g=c.g[g.toString()],c=-1,g&&(c=en(g,v,S,F)),(v=-1<c?g[c]:null)&&xt(v))}function xt(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[we])Mr(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(Dt(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=ai(g))?(Mr(v,c),v.h==0&&(v.src=null,g[vn]=null)):De(c)}}}function Dt(c){return c in Lr?Lr[c]:Lr[c]="on"+c}function Qn(c,g){if(c.da)c=!0;else{g=new be(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&xt(c),c=v.call(S,g)}return c}function ai(c){return c=c[vn],c instanceof Kn?c:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yn(c){return typeof c=="function"?c:(c[li]||(c[li]=function(g){return c.handleEvent(g)}),c[li])}function lt(){G.call(this),this.i=new Kn(this),this.M=this,this.F=null}V(lt,G),lt.prototype[we]=!0,lt.prototype.removeEventListener=function(c,g,v,S){Fr(this,c,g,v,S)};function St(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new me(g,c);else if(g instanceof me)g.target=g.target||c;else{var F=g;g=new me(S,c),x(g,F)}if(F=!0,v)for(var q=v.length-1;0<=q;q--){var re=g.g=v[q];F=Xn(re,S,!0,g)&&F}if(re=g.g=c,F=Xn(re,S,!0,g)&&F,F=Xn(re,S,!1,g)&&F,v)for(q=0;q<v.length;q++)re=g.g=v[q],F=Xn(re,S,!1,g)&&F}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)De(v[S]);delete c.g[g],c.h--}}this.F=null},lt.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},lt.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function Xn(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,q=0;q<g.length;++q){var re=g[q];if(re&&!re.da&&re.capture==v){var et=re.listener,jt=re.ha||re.src;re.fa&&Mr(c.i,re),F=et.call(jt,S)!==!1&&F}}return F&&!S.defaultPrevented}function Wi(c,g,v){if(typeof c=="function")v&&(c=I(c,v));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function jr(c){c.g=Wi(()=>{c.g=null,c.i&&(c.i=!1,jr(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ur extends G{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(c){G.call(this),this.h=c,this.g={}}V(ui,G);var $i=[];function Qs(c){xe(c.g,function(g,v){this.g.hasOwnProperty(v)&&xt(g)},c),c.g={}}ui.prototype.N=function(){ui.aa.N.call(this),Qs(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ys=d.JSON.stringify,Xs=d.JSON.parse,qi=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function ci(){}ci.prototype.h=null;function Hi(c){return c.h||(c.h=c.i())}function hi(){}var $={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ce(){me.call(this,"d")}V(ce,me);function $e(){me.call(this,"c")}V($e,me);var rt={},hr=null;function Js(){return hr=hr||new lt}rt.La="serverreachability";function _l(c){me.call(this,rt.La,c)}V(_l,me);function di(c){const g=Js();St(g,new _l(g))}rt.STAT_EVENT="statevent";function yl(c,g){me.call(this,rt.STAT_EVENT,c),this.stat=g}V(yl,me);function Pt(c){const g=Js();St(g,new yl(g,c))}rt.Ma="timingevent";function Wo(c,g){me.call(this,rt.Ma,c),this.size=g}V(Wo,me);function dr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Zs(){this.g=!0}Zs.prototype.xa=function(){this.g=!1};function eo(c,g,v,S,F,q){c.info(function(){if(c.g)if(q)for(var re="",et=q.split("&"),jt=0;jt<et.length;jt++){var qe=et[jt].split("=");if(1<qe.length){var qt=qe[0];qe=qe[1];var bt=qt.split("_");re=2<=bt.length&&bt[1]=="type"?re+(qt+"="+qe+"&"):re+(qt+"=redacted&")}}else re=null;else re=q;return"XMLHTTP REQ ("+S+") [attempt "+F+"]: "+g+`
`+v+`
`+re})}function $o(c,g,v,S,F,q,re){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+F+"]: "+g+`
`+v+`
`+q+" "+re})}function fr(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+df(c,v)+(S?" "+S:"")})}function vl(c,g){c.info(function(){return"TIMEOUT: "+g})}Zs.prototype.info=function(){};function df(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var F=S[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return Ys(v)}catch{return g}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function to(){}V(to,ci),to.prototype.g=function(){return new XMLHttpRequest},to.prototype.i=function(){return{}},pr=new to;function mr(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var El={},Ho={};function Go(c,g,v){c.L=1,c.v=Xi(jn(g)),c.m=v,c.P=!0,wl(c,null)}function wl(c,g){c.F=Date.now(),ut(c),c.A=jn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Zi(v.i,"t",S),c.C=0,v=c.j.J,c.h=new cc,c.g=Pc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new Ur(I(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var F="readystatechange";Array.isArray(F)||(F&&($i[0]=F.toString()),F=$i);for(var q=0;q<F.length;q++){var re=Oe(v,F[q],S||g.handleEvent,!1,g.h||g);if(!re)break;g.g[re.key]=re}g=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),di(),eo(c.i,c.u,c.A,c.l,c.R,c.m)}mr.prototype.ca=function(c){c=c.target;const g=this.M;g&&Pn(c)==3?g.j():this.Y(c)},mr.prototype.Y=function(c){try{if(c==this.g)e:{const bt=Pn(this.g);var g=this.g.Ba();const er=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Rl(this.g)))){this.J||bt!=4||g==7||(g==8||0>=er?di(3):di(2)),no(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var S=Rl(this.g);c="";var F=S.length,q=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),Gi(this);var re="";break t}this.h.i=new d.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(q&&g==F-1)});S.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,$o(this.i,this.u,this.A,this.l,this.R,bt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var et,jt=this.g;if((et=jt.g?jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(et)){var qe=et;break t}}qe=null}if(v=qe)fr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,v);else{this.o=!1,this.s=3,Pt(12),Jn(this),Gi(this);break e}}if(this.P){v=!0;let Bn;for(;!this.J&&this.C<re.length;)if(Bn=ff(this,re),Bn==Ho){bt==4&&(this.s=4,Pt(14),v=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bn==El){this.s=4,Pt(15),fr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else fr(this.i,this.l,Bn,null),Il(this,Bn);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||re.length!=0||this.h.h||(this.s=1,Pt(16),v=!1),this.o=this.o&&v,!v)fr(this.i,this.l,re,"[Invalid Chunked Response]"),Jn(this),Gi(this);else if(0<re.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),kl(qt),qt.M=!0,Pt(11))}}else fr(this.i,this.l,re,null),Il(this,re);bt==4&&Jn(this),this.o&&!this.J&&(bt==4?ia(this.j,this):(this.o=!1,ut(this)))}else Zo(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Jn(this),Gi(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ff(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?Ho:(v=Number(g.substring(v,S)),isNaN(v)?El:(S+=1,S+v>g.length?Ho:(g=g.slice(S,S+v),c.C=S+v,g)))}mr.prototype.cancel=function(){this.J=!0,Jn(this)};function ut(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=dr(I(c.ba,c),g)}function no(c){c.B&&(d.clearTimeout(c.B),c.B=null)}mr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(vl(this.i,this.A),this.L!=2&&(di(),Pt(17)),Jn(this),this.s=2,Gi(this)):dc(this,this.S-c)};function Gi(c){c.j.G==0||c.J||ia(c.j,c)}function Jn(c){no(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Qs(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Il(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||En(v.h,c))){if(!c.K&&En(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var F=S;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ra(v),Er(v);else break e;na(v),Pt(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=dr(I(v.Za,v),6e3));if(1>=pc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else _i(v,11)}else if((c.K||v.g==c)&&ra(v),!Q(g))for(F=v.Da.g.parse(g),g=0;g<F.length;g++){let qe=F[g];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const qt=qe[3];qt!=null&&(v.la=qt,v.j.info("VER="+v.la));const bt=qe[4];bt!=null&&(v.Aa=bt,v.j.info("SVER="+v.Aa));const er=qe[5];er!=null&&typeof er=="number"&&0<er&&(S=1.5*er,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Bn=c.g;if(Bn){const uo=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uo){var q=S.h;q.g||uo.indexOf("spdy")==-1&&uo.indexOf("quic")==-1&&uo.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Tl(q,q.h),q.h=null))}if(S.D){const oa=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(S.ya=oa,it(S.I,S.D,oa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var re=c;if(S.qa=Rc(S,S.J?S.ia:null,S.W),re.K){mc(S.h,re);var et=re,jt=S.L;jt&&(et.I=jt),et.B&&(no(et),ut(et)),S.g=re}else lo(S);0<v.i.length&&$r(v)}else qe[0]!="stop"&&qe[0]!="close"||_i(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?_i(v,7):nn(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}di(4)}catch{}}var fc=class{constructor(c,g){this.g=c,this.map=g}};function ro(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pc(c){return c.h?1:c.g?c.g.size:0}function En(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Tl(c,g){c.g?c.g.add(g):c.h=g}function mc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}ro.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return B(c.i)}function Ko(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function Qo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function Ki(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Qo(c),S=Ko(c),F=S.length,q=0;q<F;q++)g.call(void 0,S[q],v&&v[q],c)}var io=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),F=null;if(0<=S){var q=c[v].substring(0,S);F=c[v].substring(S+1)}else q=c[v];g(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function fi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof fi){this.h=c.h,so(this,c.j),this.o=c.o,this.g=c.g,Qi(this,c.s),this.l=c.l;var g=c.i,v=new Br;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Yi(this,v),this.m=c.m}else c&&(g=String(c).match(io))?(this.h=!1,so(this,g[1]||"",!0),this.o=We(g[2]||""),this.g=We(g[3]||"",!0),Qi(this,g[4]),this.l=We(g[5]||"",!0),Yi(this,g[6]||"",!0),this.m=We(g[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}fi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ji(g,Yo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ji(g,Yo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ji(v,v.charAt(0)=="/"?vc:yc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ji(v,Sl)),c.join("")};function jn(c){return new fi(c)}function so(c,g,v){c.j=v?We(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Qi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Yi(c,g,v){g instanceof Br?(c.i=g,zr(c.i,c.h)):(v||(g=Ji(g,Ec)),c.i=new Br(g,c.h))}function it(c,g,v){c.i.set(g,v)}function Xi(c){return it(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function We(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ji(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,_c),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _c(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Yo=/[#\/\?@]/g,yc=/[#\?:]/g,vc=/[#\?]/g,Ec=/[#\?@]/g,Sl=/#/g;function Br(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function tn(c){c.g||(c.g=new Map,c.h=0,c.i&&pf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Br.prototype,n.add=function(c,g){tn(this),this.i=null,c=Zn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function gr(c,g){tn(c),g=Zn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function _r(c,g){return tn(c),g=Zn(c,g),c.g.has(g)}n.forEach=function(c,g){tn(this),this.g.forEach(function(v,S){v.forEach(function(F){c.call(g,F,S,this)},this)},this)},n.na=function(){tn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const F=c[S];for(let q=0;q<F.length;q++)v.push(g[S])}return v},n.V=function(c){tn(this);let g=[];if(typeof c=="string")_r(this,c)&&(g=g.concat(this.g.get(Zn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return tn(this),this.i=null,c=Zn(this,c),_r(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Zi(c,g,v){gr(c,g),0<v.length&&(c.i=null,c.g.set(Zn(c,g),B(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const q=encodeURIComponent(String(S)),re=this.V(S);for(S=0;S<re.length;S++){var F=q;re[S]!==""&&(F+="="+encodeURIComponent(String(re[S]))),c.push(F)}}return this.i=c.join("&")};function Zn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function zr(c,g){g&&!c.j&&(tn(c),c.i=null,c.g.forEach(function(v,S){var F=S.toLowerCase();S!=F&&(gr(this,S),Zi(this,F,v))},c)),c.j=g}function mf(c,g){const v=new Zs;if(d.Image){const S=new Image;S.onload=k(Rn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=k(Rn,v,"TestLoadImage: error",!1,g,S),S.onabort=k(Rn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=k(Rn,v,"TestLoadImage: timeout",!1,g,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function wc(c,g){const v=new Zs,S=new AbortController,F=setTimeout(()=>{S.abort(),Rn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(q=>{clearTimeout(F),q.ok?Rn(v,"TestPingServer: ok",!0,g):Rn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),Rn(v,"TestPingServer: error",!1,g)})}function Rn(c,g,v,S,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),S(v)}catch{}}function gf(){this.g=new qi}function Ic(c,g,v){const S=v||"";try{Ki(c,function(F,q){let re=F;m(F)&&(re=Ys(F)),g.push(S+q+"="+encodeURIComponent(re))})}catch(F){throw g.push(S+"type="+encodeURIComponent("_badmap")),F}}function pi(c){this.l=c.Ub||null,this.j=c.eb||!1}V(pi,ci),pi.prototype.g=function(){return new oo(this.l,this.j)},pi.prototype.i=(function(c){return function(){return c}})({});function oo(c,g){lt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(oo,lt),n=oo.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,vr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?yr(this):vr(this),this.readyState==3&&Tc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,yr(this))},n.Qa=function(c){this.g&&(this.response=c,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,vr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function vr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function mi(c){let g="";return xe(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function es(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=mi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):it(c,g,v))}function _t(c){lt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(_t,lt);var _f=/^https?$/i,Cl=["POST","PUT"];n=_t.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?Hi(this.o):Hi(pr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){ao(this,q);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var F in S)v.set(F,S[F]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const q of S.keys())v.set(q,S.get(q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Cl,g,void 0))||S||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,re]of v)this.g.setRequestHeader(q,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jo(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){ao(this,q)}};function ao(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Xo(c),Un(c)}function Xo(c){c.A||(c.A=!0,St(c,"complete"),St(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,St(this,"complete"),St(this,"abort"),Un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Un(this,!0)),_t.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Pn(c)!=4||c.Z()!=2)){if(c.u&&Pn(c)==4)Wi(c.Ea,0,c);else if(St(c,"readystatechange"),Pn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=re===0){var F=String(c.D).match(io)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),S=!_f.test(F?F.toLowerCase():"")}v=S}if(v)St(c,"complete"),St(c,"success");else{c.m=6;try{var q=2<Pn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",Xo(c)}}finally{Un(c)}}}}function Un(c,g){if(c.g){Jo(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||St(c,"ready");try{v.onreadystatechange=S}catch{}}}function Jo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Pn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Xs(g)}};function Rl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(c){const g={};c=(c.g&&2<=Pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(Q(c[S]))continue;var v=O(c[S]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=g[F]||[];g[F]=q,q.push(v)}b(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Pl(c){this.Aa=0,this.i=[],this.j=new Zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wr("baseRetryDelayMs",5e3,c),this.cb=Wr("retryDelaySeedMs",1e4,c),this.Wa=Wr("forwardChannelMaxRetries",2,c),this.wa=Wr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ro(c&&c.concurrentRequestLimit),this.Da=new gf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,S){Pt(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Rc(this,null,this.W),$r(this)};function nn(c){if(ea(c),c.G==3){var g=c.U++,v=jn(c.I);if(it(v,"SID",c.K),it(v,"RID",g),it(v,"TYPE","terminate"),gi(c,v),g=new mr(c,c.j,g),g.L=2,g.v=Xi(jn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Pc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ut(g)}Ac(c)}function Er(c){c.g&&(kl(c),c.g.cancel(),c.g=null)}function ea(c){Er(c),c.u&&(d.clearTimeout(c.u),c.u=null),ra(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function $r(c){if(!Fn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Je||se(),ie||(Je(),ie=!0),ge.add(g,c),c.B=0}}function yf(c,g){return pc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=dr(I(c.Ga,c,g),Cc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new mr(this,this.j,c);let q=this.o;if(this.S&&(q?(q=R(q),x(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=ts(this,F,g),v=jn(this.I),it(v,"RID",c),it(v,"CVER",22),this.D&&it(v,"X-HTTP-Session-Id",this.D),gi(this,v),q&&(this.O?g="headers="+encodeURIComponent(String(mi(q)))+"&"+g:this.m&&es(v,this.m,q)),Tl(this.h,F),this.Ua&&it(v,"TYPE","init"),this.P?(it(v,"$req",g),it(v,"SID","null"),F.T=!0,Go(F,v,null)):Go(F,v,g),this.G=2}}else this.G==3&&(c?ta(this,c):this.i.length==0||Fn(this.h)||ta(this))};function ta(c,g){var v;g?v=g.l:v=c.U++;const S=jn(c.I);it(S,"SID",c.K),it(S,"RID",v),it(S,"AID",c.T),gi(c,S),c.m&&c.o&&es(S,c.m,c.o),v=new mr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=ts(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Tl(c.h,v),Go(v,S,g)}function gi(c,g){c.H&&xe(c.H,function(v,S){it(g,S,v)}),c.l&&Ki({},function(v,S){it(g,S,v)})}function ts(c,g,v){v=Math.min(c.i.length,v);var S=c.l?I(c.l.Na,c.l,c):null;e:{var F=c.i;let q=-1;for(;;){const re=["count="+v];q==-1?0<v?(q=F[0].g,re.push("ofs="+q)):q=0:re.push("ofs="+q);let et=!0;for(let jt=0;jt<v;jt++){let qe=F[jt].g;const qt=F[jt].map;if(qe-=q,0>qe)q=Math.max(0,F[jt].g-100),et=!1;else try{Ic(qt,re,"req"+qe+"_")}catch{S&&S(qt)}}if(et){S=re.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function lo(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Je||se(),ie||(Je(),ie=!0),ge.add(g,c),c.v=0}}function na(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=dr(I(c.Fa,c),Cc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=dr(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Er(this),Sc(this))};function kl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new mr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=jn(c.qa);it(g,"RID","rpc"),it(g,"SID",c.K),it(g,"AID",c.T),it(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&it(g,"TO",c.ja),it(g,"TYPE","xmlhttp"),gi(c,g),c.m&&c.o&&es(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Xi(jn(g)),v.m=null,v.P=!0,wl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Er(this),na(this),Pt(19))};function ra(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function ia(c,g){var v=null;if(c.g==g){ra(c),kl(c),c.g=null;var S=2}else if(En(c.h,g))v=g.D,mc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;S=Js(),St(S,new Wo(S,v)),$r(c)}else lo(c);else if(F=g.s,F==3||F==0&&0<g.X||!(S==1&&yf(c,g)||S==2&&na(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),F){case 1:_i(c,5);break;case 4:_i(c,10);break;case 3:_i(c,6);break;default:_i(c,2)}}}function Cc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function _i(c,g){if(c.j.info("Error code "+g),g==2){var v=I(c.fb,c),S=c.Xa;const F=!S;S=new fi(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||so(S,"https"),Xi(S),F?mf(S.toString(),v):wc(S.toString(),v)}else Pt(2);c.G=0,c.l&&c.l.sa(g),Ac(c),ea(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ac(c){if(c.G=0,c.ka=[],c.l){const g=gc(c.h);(g.length!=0||c.i.length!=0)&&(z(c.ka,g),z(c.ka,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.ra()}}function Rc(c,g,v){var S=v instanceof fi?jn(v):new fi(v);if(S.g!="")g&&(S.g=g+"."+S.g),Qi(S,S.s);else{var F=d.location;S=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var q=new fi(null);S&&so(q,S),g&&(q.g=g),F&&Qi(q,F),v&&(q.l=v),S=q}return v=c.D,g=c.ya,v&&g&&it(S,v,g),it(S,"VER",c.la),gi(c,S),S}function Pc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new _t(new pi({eb:v})):new _t(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nl(){}n=Nl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sa(){}sa.prototype.g=function(c,g){return new wn(c,g)};function wn(c,g){lt.call(this),this.g=new Pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Q(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Q(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new qr(this)}V(wn,lt),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){nn(this.g)},wn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Ys(c),c=v);g.i.push(new fc(g.Ya++,c)),g.G==3&&$r(g)},wn.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,wn.aa.N.call(this)};function kc(c){ce.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}V(kc,ce);function Nc(){$e.call(this),this.status=1}V(Nc,$e);function qr(c){this.g=c}V(qr,Nl),qr.prototype.ua=function(){St(this.g,"a")},qr.prototype.ta=function(c){St(this.g,new kc(c))},qr.prototype.sa=function(c){St(this.g,new Nc)},qr.prototype.ra=function(){St(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,wT=function(){return new sa},ET=function(){return Js()},vT=rt,ym={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Lh=qo,uc.COMPLETE="complete",yT=uc,hi.EventType=$,$.OPEN="a",$.CLOSE="b",$.ERROR="c",$.MESSAGE="d",lt.prototype.listen=lt.prototype.K,au=hi,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,_T=_t}).apply(typeof Ch<"u"?Ch:typeof self<"u"?self:typeof window<"u"?window:{});const PE="@firebase/firestore",kE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gn.UNAUTHENTICATED=new gn(null),gn.GOOGLE_CREDENTIALS=new gn("google-credentials-uid"),gn.FIRST_PARTY=new gn("first-party-uid"),gn.MOCK_USER=new gn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Rd("@firebase/firestore");function Pa(){return No.logLevel}function ue(n,...e){if(No.logLevel<=Be.DEBUG){const t=e.map(yg);No.debug(`Firestore (${al}): ${n}`,...t)}}function Li(n,...e){if(No.logLevel<=Be.ERROR){const t=e.map(yg);No.error(`Firestore (${al}): ${n}`,...t)}}function bs(n,...e){if(No.logLevel<=Be.WARN){const t=e.map(yg);No.warn(`Firestore (${al}): ${n}`,...t)}}function yg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,IT(n,r,t)}function IT(n,e,t){let r=`FIRESTORE (${al}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Li(r),new Error(r)}function Ze(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||IT(e,s,r)}function Ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Ui{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gn.UNAUTHENTICATED)))}shutdown(){}}class jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Uk{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Rs,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Rs)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ze(typeof r.accessToken=="string",31837,{l:r}),new TT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new gn(e)}}class Bk{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zk{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Bk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(gn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class NE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ar(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new NE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new NE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$k(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Me(n,e){return n<e?-1:n>e?1:0}function vm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Me(r,s);{const a=ST(),u=qk(a.encode(xE(n,t)),a.encode(xE(e,t)));return u!==0?u:Me(r,s)}}t+=r>65535?2:1}return Me(n.length,e.length)}function xE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function qk(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Me(n[t],e[t]);return Me(n.length,e.length)}function qa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="__name__";class Yr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Se(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Yr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Me(e.length,t.length)}static compareSegments(e,t){const r=Yr.isNumericId(e),s=Yr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Yr.extractNumericId(e).compare(Yr.extractNumericId(t)):vm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return As.fromString(e.substring(4,e.length-2))}}class dt extends Yr{construct(e,t,r){return new dt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new dt(t)}static emptyPath(){return new dt([])}}const Hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends Yr{construct(e,t,r){return new ln(e,t,r)}static isValidIdentifier(e){return Hk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===DE}static keyField(){return new ln([DE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(t)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(dt.fromString(e))}static fromName(e){return new _e(dt.fromString(e).popFirst(5))}static empty(){return new _e(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return dt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new dt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(n,e,t){if(!t)throw new oe(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gk(n,e,t,r){if(e===!0&&r===!0)throw new oe(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bE(n){if(!_e.isDocumentKey(n))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function OE(n){if(_e.isDocumentKey(n))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function AT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(n);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hu(n,e){if(!AT(n))throw new oe(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=-62135596800,LE=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*LE);return new mt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ME)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/LE}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hu(e,mt._jsonSchema))return new mt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ME;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:Vt("string",mt._jsonSchemaVersion),seconds:Vt("number"),nanoseconds:Vt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new mt(0,0))}static max(){return new Re(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=-1;function Kk(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Re.fromTimestamp(r===1e9?new mt(t+1,0):new mt(t,r));return new Os(s,_e.empty(),e)}function Qk(n){return new Os(n.readTime,n.key,Ru)}class Os{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Os(Re.min(),_e.empty(),Ru)}static max(){return new Os(Re.max(),_e.empty(),Ru)}}function Yk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==Xk)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((s=>s?K.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new K(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function Zk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ul(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Od.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=-1;function Md(n){return n==null}function ed(n){return n===0&&1/n==-1/0}function eN(n){return typeof n=="number"&&Number.isInteger(n)&&!ed(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="";function tN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=VE(e)),e=nN(n.get(t),e);return VE(e)}function nN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case RT:t+="";break;default:t+=a}}return t}function VE(n){return n+RT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function PT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft=class Em{constructor(e,t){this.comparator=e,this.root=t||Ps.EMPTY}insert(e,t){return new Em(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ps.BLACK,null,null))}remove(e){return new Em(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ps.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ah(this.root,e,this.comparator,!0)}},Ah=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ps=class Ai{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ai.RED,this.left=s??Ai.EMPTY,this.right=a??Ai.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Ai(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ai.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ai.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ai.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ai.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}};Ps.EMPTY=null,Ps.RED=!0,Ps.BLACK=!1;Ps.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Ps(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jE(this.data.getIterator())}getIteratorFrom(e){return new jE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class jE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new qn([])}unionWith(e){let t=new Wt(ln.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new kT("Invalid base64 string: "+a):a}})(e);return new cn(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new cn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const rN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(n){if(Ze(!!n,39018),typeof n=="string"){let e=0;const t=rN.exec(n);if(Ze(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nt(n.seconds),nanos:Nt(n.nanos)}}function Nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ls(n){return typeof n=="string"?cn.fromBase64String(n):cn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="server_timestamp",xT="__type__",DT="__previous_value__",bT="__local_write_time__";function wg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[xT])===null||t===void 0?void 0:t.stringValue)===NT}function Ld(n){const e=n.mapValue.fields[DT];return wg(e)?Ld(e):e}function Pu(n){const e=Ms(n.mapValue.fields[bT].timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const td="(default)";class ku{constructor(e,t){this.projectId=e,this.database=t||td}static empty(){return new ku("","")}get isDefaultDatabase(){return this.database===td}isEqual(e){return e instanceof ku&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="__type__",sN="__max__",Rh={mapValue:{}},MT="__vector__",nd="value";function Vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wg(n)?4:aN(n)?9007199254740991:oN(n)?10:11:Se(28295,{value:n})}function si(n,e){if(n===e)return!0;const t=Vs(n);if(t!==Vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pu(n).isEqual(Pu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ms(s.timestampValue),d=Ms(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Ls(s.bytesValue).isEqual(Ls(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return Nt(s.geoPointValue.latitude)===Nt(a.geoPointValue.latitude)&&Nt(s.geoPointValue.longitude)===Nt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return Nt(s.integerValue)===Nt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Nt(s.doubleValue),d=Nt(a.doubleValue);return u===d?ed(u)===ed(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return qa(n.arrayValue.values||[],e.arrayValue.values||[],si);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(FE(u)!==FE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!si(u[f],d[f])))return!1;return!0})(n,e);default:return Se(52216,{left:n})}}function Nu(n,e){return(n.values||[]).find((t=>si(t,e)))!==void 0}function Ha(n,e){if(n===e)return 0;const t=Vs(n),r=Vs(e);if(t!==r)return Me(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=Nt(a.integerValue||a.doubleValue),f=Nt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return UE(n.timestampValue,e.timestampValue);case 4:return UE(Pu(n),Pu(e));case 5:return vm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Ls(a),f=Ls(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Me(d[m],f[m]);if(y!==0)return y}return Me(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Me(Nt(a.latitude),Nt(u.latitude));return d!==0?d:Me(Nt(a.longitude),Nt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return BE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const w=a.fields||{},I=u.fields||{},k=(d=w[nd])===null||d===void 0?void 0:d.arrayValue,V=(f=I[nd])===null||f===void 0?void 0:f.arrayValue,B=Me(((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0,((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0);return B!==0?B:BE(k,V)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Rh.mapValue&&u===Rh.mapValue)return 0;if(a===Rh.mapValue)return 1;if(u===Rh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let w=0;w<f.length&&w<y.length;++w){const I=vm(f[w],y[w]);if(I!==0)return I;const k=Ha(d[f[w]],m[y[w]]);if(k!==0)return k}return Me(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function UE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=Ms(n),r=Ms(e),s=Me(t.seconds,r.seconds);return s!==0?s:Me(t.nanos,r.nanos)}function BE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ha(t[s],r[s]);if(a)return a}return Me(t.length,r.length)}function Ga(n){return wm(n)}function wm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ms(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ls(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=wm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${wm(t.fields[u])}`;return s+"}"})(n.mapValue):Se(61005,{value:n})}function Vh(n){switch(Vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ld(n);return e?16+Vh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ls(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Vh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Hs(r.fields,((a,u)=>{s+=a.length+Vh(u)})),s})(n.mapValue);default:throw Se(13486,{value:n})}}function zE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Im(n){return!!n&&"integerValue"in n}function Ig(n){return!!n&&"arrayValue"in n}function WE(n){return!!n&&"nullValue"in n}function $E(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fh(n){return!!n&&"mapValue"in n}function oN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[OT])===null||t===void 0?void 0:t.stringValue)===MT}function pu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hs(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=pu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function aN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pu(t)}setAll(e){let t=ln.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=pu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Fh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return si(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Hs(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Ln(pu(this.value))}}function LT(n){const e=[];return Hs(n.fields,((t,r)=>{const s=new ln([t]);if(Fh(r)){const a=LT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new _n(e,0,Re.min(),Re.min(),Re.min(),Ln.empty(),0)}static newFoundDocument(e,t,r,s){return new _n(e,1,t,Re.min(),r,s,0)}static newNoDocument(e,t){return new _n(e,2,t,Re.min(),Re.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new _n(e,3,t,Re.min(),Re.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.position=e,this.inclusive=t}}function qE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=Ha(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function HE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!si(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function lN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{}class Lt extends VT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cN(e,t,r):t==="array-contains"?new fN(e,r):t==="in"?new pN(e,r):t==="not-in"?new mN(e,r):t==="array-contains-any"?new gN(e,r):new Lt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hN(e,r):new dN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ha(t,this.value)):t!==null&&Vs(this.value)===Vs(t)&&this.matchesComparison(Ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class br extends VT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new br(e,t)}matches(e){return FT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function FT(n){return n.op==="and"}function jT(n){return uN(n)&&FT(n)}function uN(n){for(const e of n.filters)if(e instanceof br)return!1;return!0}function Tm(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Ga(n.value);if(jT(n))return n.filters.map((e=>Tm(e))).join(",");{const e=n.filters.map((t=>Tm(t))).join(",");return`${n.op}(${e})`}}function UT(n,e){return n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.field.isEqual(s.field)&&si(r.value,s.value)})(n,e):n instanceof br?(function(r,s){return s instanceof br&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&UT(u,s.filters[d])),!0):!1})(n,e):void Se(19439)}function BT(n){return n instanceof Lt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ga(t.value)}`})(n):n instanceof br?(function(t){return t.op.toString()+" {"+t.getFilters().map(BT).join(" ,")+"}"})(n):"Filter"}class cN extends Lt{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class hN extends Lt{constructor(e,t){super(e,"in",t),this.keys=zT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dN extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=zT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class fN extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ig(t)&&Nu(t.arrayValue,this.value)}}class pN extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nu(this.value.arrayValue,t)}}class mN extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nu(this.value.arrayValue,t)}}class gN extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ig(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nu(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function GE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new _N(n,e,t,r,s,a,u)}function Tg(n){const e=Ne(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Tm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Md(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ga(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ga(r))).join(",")),e.Pe=t}return e.Pe}function Sg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!UT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!HE(n.startAt,e.startAt)&&HE(n.endAt,e.endAt)}function Sm(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function yN(n,e,t,r,s,a,u,d){return new cl(n,e,t,r,s,a,u,d)}function Vd(n){return new cl(n)}function KE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function WT(n){return n.collectionGroup!==null}function mu(n){const e=Ne(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Wt(ln.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new xu(a,r))})),t.has(ln.keyField().canonicalString())||e.Te.push(new xu(ln.keyField(),r))}return e.Te}function ti(n){const e=Ne(n);return e.Ie||(e.Ie=vN(e,mu(n))),e.Ie}function vN(n,e){if(n.limitType==="F")return GE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new xu(s.field,a)}));const t=n.endAt?new rd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rd(n.startAt.position,n.startAt.inclusive):null;return GE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cm(n,e){const t=n.filters.concat([e]);return new cl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function id(n,e,t){return new cl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fd(n,e){return Sg(ti(n),ti(e))&&n.limitType===e.limitType}function $T(n){return`${Tg(ti(n))}|lt:${n.limitType}`}function ka(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>BT(s))).join(", ")}]`),Md(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ga(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ga(s))).join(",")),`Target(${r})`})(ti(n))}; limitType=${n.limitType})`}function jd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of mu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=qE(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,mu(r),s)||r.endAt&&!(function(u,d,f){const m=qE(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,mu(r),s))})(n,e)}function EN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qT(n){return(e,t)=>{let r=!1;for(const s of mu(n)){const a=wN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function wN(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Ha(f,m):Se(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return PT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new Ft(_e.comparator);function Vi(){return IN}const HT=new Ft(_e.comparator);function lu(...n){let e=HT;for(const t of n)e=e.insert(t.key,t);return e}function GT(n){let e=HT;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Co(){return gu()}function KT(){return gu()}function gu(){return new jo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const TN=new Ft(_e.comparator),SN=new Wt(_e.comparator);function ze(...n){let e=SN;for(const t of n)e=e.add(t);return e}const CN=new Wt(Me);function AN(){return CN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ed(e)?"-0":e}}function QT(n){return{integerValue:""+n}}function RN(n,e){return eN(e)?QT(e):Cg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this._=void 0}}function PN(n,e,t){return n instanceof Du?(function(s,a){const u={fields:{[xT]:{stringValue:NT},[bT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&wg(a)&&(a=Ld(a)),a&&(u.fields[DT]=a),{mapValue:u}})(t,e):n instanceof Ka?XT(n,e):n instanceof bu?JT(n,e):(function(s,a){const u=YT(s,a),d=QE(u)+QE(s.Ee);return Im(u)&&Im(s.Ee)?QT(d):Cg(s.serializer,d)})(n,e)}function kN(n,e,t){return n instanceof Ka?XT(n,e):n instanceof bu?JT(n,e):t}function YT(n,e){return n instanceof sd?(function(r){return Im(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Du extends Ud{}class Ka extends Ud{constructor(e){super(),this.elements=e}}function XT(n,e){const t=ZT(e);for(const r of n.elements)t.some((s=>si(s,r)))||t.push(r);return{arrayValue:{values:t}}}class bu extends Ud{constructor(e){super(),this.elements=e}}function JT(n,e){let t=ZT(e);for(const r of n.elements)t=t.filter((s=>!si(s,r)));return{arrayValue:{values:t}}}class sd extends Ud{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function QE(n){return Nt(n.integerValue||n.doubleValue)}function ZT(n){return Ig(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.field=e,this.transform=t}}function NN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Ka&&s instanceof Ka||r instanceof bu&&s instanceof bu?qa(r.elements,s.elements,si):r instanceof sd&&s instanceof sd?si(r.Ee,s.Ee):r instanceof Du&&s instanceof Du})(n.transform,e.transform)}class xN{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bd{}function t0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zd(n.key,Cn.none()):new Gu(n.key,n.data,Cn.none());{const t=n.data,r=Ln.empty();let s=new Wt(ln.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Gs(n.key,r,new qn(s.toArray()),Cn.none())}}function DN(n,e,t){n instanceof Gu?(function(s,a,u){const d=s.value.clone(),f=XE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Gs?(function(s,a,u){if(!jh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=XE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(n0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function _u(n,e,t,r){return n instanceof Gu?(function(a,u,d,f){if(!jh(a.precondition,u))return d;const m=a.value.clone(),y=JE(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof Gs?(function(a,u,d,f){if(!jh(a.precondition,u))return d;const m=JE(a.fieldTransforms,f,u),y=u.data;return y.setAll(n0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return jh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function bN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=YT(r.transform,s||null);a!=null&&(t===null&&(t=Ln.empty()),t.set(r.field,a))}return t||null}function YE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qa(r,s,((a,u)=>NN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gu extends Bd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gs extends Bd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function n0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function XE(n,e,t){const r=new Map;Ze(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,kN(u,d,t[s]))}return r}function JE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,PN(a,u,e))}return r}class zd extends Bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ON extends Bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&DN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_u(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_u(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=KT();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=t0(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&qa(this.mutations,e.mutations,((t,r)=>YE(t,r)))&&qa(this.baseMutations,e.baseMutations,((t,r)=>YE(t,r)))}}class Ag{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return TN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ag(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,He;function FN(n){switch(n){case H.OK:return Se(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function r0(n){if(n===void 0)return Li("GRPC error has no .code"),H.UNKNOWN;switch(n){case Mt.OK:return H.OK;case Mt.CANCELLED:return H.CANCELLED;case Mt.UNKNOWN:return H.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return H.INTERNAL;case Mt.UNAVAILABLE:return H.UNAVAILABLE;case Mt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Mt.NOT_FOUND:return H.NOT_FOUND;case Mt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Mt.ABORTED:return H.ABORTED;case Mt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Mt.DATA_LOSS:return H.DATA_LOSS;default:return Se(39323,{code:n})}}(He=Mt||(Mt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=new As([4294967295,4294967295],0);function ZE(n){const e=ST().encode(n),t=new gT;return t.update(e),new Uint8Array(t.digest())}function ew(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new As([t,r],0),new As([s,a],0)]}class Rg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new uu(`Invalid padding: ${t}`);if(r<0)throw new uu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new uu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=As.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(As.fromNumber(r)));return s.compare(jN)===1&&(s=new As([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ZE(e),[r,s]=ew(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Rg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=ZE(e),[r,s]=ew(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class uu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wd(Re.min(),s,new Ft(Me),Vi(),ze())}}class Ku{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ku(r,t,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class i0{constructor(e,t){this.targetId=e,this.De=t}}class s0{constructor(e,t,r=cn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class tw{constructor(){this.ve=0,this.Ce=nw(),this.Fe=cn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ze(),t=ze(),r=ze();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Se(38017,{changeType:a})}})),new Ku(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=nw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class UN{constructor(e){this.We=e,this.Ge=new Map,this.ze=Vi(),this.je=Ph(),this.Je=Ph(),this.He=new Ft(Me)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Sm(a))if(r===0){const u=new _e(a.path);this.Xe(t,u,_n.newNoDocument(u,Re.min()))}else Ze(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Ls(r).toUint8Array()}catch(f){if(f instanceof kT)return bs("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Rg(u,s,a)}catch(f){return bs(f instanceof uu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Sm(d.target)){const f=new _e(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,_n.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=ze();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Wd(e,t,this.He,this.ze,r);return this.ze=Vi(),this.je=Ph(),this.Je=Ph(),this.He=new Ft(Me),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new tw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Wt(Me),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Wt(Me),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ph(){return new Ft(_e.comparator)}function nw(){return new Ft(_e.comparator)}const BN={asc:"ASCENDING",desc:"DESCENDING"},zN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WN={and:"AND",or:"OR"};class $N{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Am(n,e){return n.useProto3Json||Md(e)?e:{value:e}}function od(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qN(n,e){return od(n,e.toTimestamp())}function ni(n){return Ze(!!n,49232),Re.fromTimestamp((function(t){const r=Ms(t);return new mt(r.seconds,r.nanos)})(n))}function Pg(n,e){return Rm(n,e).canonicalString()}function Rm(n,e){const t=(function(s){return new dt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function a0(n){const e=dt.fromString(n);return Ze(d0(e),10190,{key:e.toString()}),e}function Pm(n,e){return Pg(n.databaseId,e.path)}function Yp(n,e){const t=a0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(u0(t))}function l0(n,e){return Pg(n.databaseId,e)}function HN(n){const e=a0(n);return e.length===4?dt.emptyPath():u0(e)}function km(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function u0(n){return Ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function rw(n,e,t){return{name:Pm(n,e),fields:t.value.mapValue.fields}}function GN(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Se(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(Ze(y===void 0||typeof y=="string",58123),cn.fromBase64String(y||"")):(Ze(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),cn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?H.UNKNOWN:r0(m.code);return new oe(y,m.message||"")})(u);t=new s0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yp(n,r.document.name),a=ni(r.document.updateTime),u=r.document.createTime?ni(r.document.createTime):Re.min(),d=new Ln({mapValue:{fields:r.document.fields}}),f=_n.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Uh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yp(n,r.document),a=r.readTime?ni(r.readTime):Re.min(),u=_n.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Uh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yp(n,r.document),a=r.removedTargetIds||[];t=new Uh([],a,s,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new VN(s,a),d=r.targetId;t=new i0(d,u)}}return t}function KN(n,e){let t;if(e instanceof Gu)t={update:rw(n,e.key,e.value)};else if(e instanceof zd)t={delete:Pm(n,e.key)};else if(e instanceof Gs)t={update:rw(n,e.key,e.data),updateMask:rx(e.fieldMask)};else{if(!(e instanceof ON))return Se(16599,{Rt:e.type});t={verify:Pm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Du)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ka)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof bu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof sd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Se(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:qN(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se(27497)})(n,e.precondition)),t}function QN(n,e){return n&&n.length>0?(Ze(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ni(s.updateTime):ni(a);return u.isEqual(Re.min())&&(u=ni(a)),new xN(u,s.transformResults||[])})(t,e)))):[]}function YN(n,e){return{documents:[l0(n,e.path)]}}function XN(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=l0(n,s);const a=(function(m){if(m.length!==0)return h0(br.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(I){return{field:Na(I.field),direction:ex(I.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Am(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function JN(n){let e=HN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ze(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(w){const I=c0(w);return I instanceof br&&jT(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((I=>(function(V){return new xu(xa(V.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let I;return I=typeof w=="object"?w.value:w,Md(I)?null:I})(t.limit));let f=null;t.startAt&&(f=(function(w){const I=!!w.before,k=w.values||[];return new rd(k,I)})(t.startAt));let m=null;return t.endAt&&(m=(function(w){const I=!w.before,k=w.values||[];return new rd(k,I)})(t.endAt)),yN(e,s,u,a,d,"F",f,m)}function ZN(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function c0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xa(t.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xa(t.unaryFilter.field);return Lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=xa(t.unaryFilter.field);return Lt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=xa(t.unaryFilter.field);return Lt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Lt.create(xa(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return br.create(t.compositeFilter.filters.map((r=>c0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(n):Se(30097,{filter:n})}function ex(n){return BN[n]}function tx(n){return zN[n]}function nx(n){return WN[n]}function Na(n){return{fieldPath:n.canonicalString()}}function xa(n){return ln.fromServerFormat(n.fieldPath)}function h0(n){return n instanceof Lt?(function(t){if(t.op==="=="){if($E(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NAN"}};if(WE(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($E(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NAN"}};if(WE(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Na(t.field),op:tx(t.op),value:t.value}}})(n):n instanceof br?(function(t){const r=t.getFilters().map((s=>h0(s)));return r.length===1?r[0]:{compositeFilter:{op:nx(t.op),filters:r}}})(n):Se(54877,{filter:n})}function rx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function d0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,r,s,a=Re.min(),u=Re.min(),d=cn.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.gt=e}}function sx(n){const e=JN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.Dn=new ax}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Os.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class ax{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Wt(dt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Wt(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},f0=41943040;class Mn{static withCacheSize(e){return new Mn(e,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.DEFAULT_COLLECTION_PERCENTILE=10,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mn.DEFAULT=new Mn(f0,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mn.DISABLED=new Mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Qa(0)}static ur(){return new Qa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="LruGarbageCollector",lx=1048576;function ow([n,e],[t,r]){const s=Me(n,t);return s===0?Me(e,r):s}class ux{constructor(e){this.Tr=e,this.buffer=new Wt(ow),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ow(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(sw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ul(t)?ue(sw,"Ignoring IndexedDB error during garbage collection: ",t):await ll(t)}await this.Rr(3e5)}))}}class hx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Od.ue);const r=new ux(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(iw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(m=Date.now(),Pa()<=Be.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function dx(n,e){return new hx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.changes=new jo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_n.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&_u(r.mutation,s,qn.empty(),mt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ze()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ze()){const s=Co();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=lu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Co();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ze())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Vi();const u=gu(),d=(function(){return gu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof Gs)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),_u(y.mutation,m,y.mutation.getFieldMask(),mt.now())):u.set(m.key,qn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var w;return d.set(m,new px(y,(w=u.get(m))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=gu();let s=new Ft(((u,d)=>u-d)),a=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||qn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const w=(s.get(d.batchId)||ze()).add(f);s=s.insert(d.batchId,w)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,w=KT();y.forEach((I=>{if(!a.has(I)){const k=t0(t.get(I),r.get(I));k!==null&&w.set(I,k),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,w))}return K.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):WT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):K.resolve(Co());let d=Ru,f=a;return u.next((m=>K.forEach(m,((y,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(y)?K.resolve():this.remoteDocumentCache.getEntry(e,y).next((I=>{f=f.insert(y,I)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,ze()))).next((y=>({batchId:d,changes:GT(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let s=lu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=lu();return this.indexManager.getCollectionParents(e,a).next((d=>K.forEach(d,(f=>{const m=(function(w,I){return new cl(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((w,I)=>{u=u.insert(w,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,_n.newInvalidDocument(y)))}));let d=lu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&_u(y.mutation,m,qn.empty(),mt.now()),jd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ni(s.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:sx(s.bundledQuery),readTime:ni(s.readTime)}})(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.overlays=new Ft(_e.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Co();return K.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const s=Co(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return K.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Ft(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=Co(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=Co(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return K.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new LN(t,r));let a=this.kr.get(t);a===void 0&&(a=ze(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.sessionToken=cn.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.qr=new Wt(Yt.Qr),this.$r=new Wt(Yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Yt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Yt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new _e(new dt([])),r=new Yt(t,e),s=new Yt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new dt([])),r=new Yt(t,e),s=new Yt(t,e+1);let a=ze();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Yt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Yt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||Me(e.Hr,t.Hr)}static Ur(e,t){return Me(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Wt(Yt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new MN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Yt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Eg:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Yt(t,0),s=new Yt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Wt(Me);return t.forEach((s=>{const a=new Yt(s,0),u=new Yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Yt(new _e(a),0);let d=new Wt(Me);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),K.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(t.mutations,(s=>{const a=new Yt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Yt(t,0),s=this.Yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.ni=e,this.docs=(function(){return new Ft(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():_n.newInvalidDocument(t))}getEntries(e,t){let r=Vi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():_n.newInvalidDocument(s))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Vi();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Yk(Qk(y),r)<=0||(s.has(y.key)||jd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Se(9500)}ri(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new wx(this)}getSize(e){return K.resolve(this.size)}}class wx extends fx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.persistence=e,this.ii=new jo((t=>Tg(t)),Sg),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.si=0,this.oi=new kg,this.targetCount=0,this._i=Qa.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Qa(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),K.waitFor(a).next((()=>s))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Od(0),this.ci=!1,this.ci=!0,this.li=new yx,this.referenceDelegate=e(this),this.hi=new Ix(this),this.indexManager=new ox,this.remoteDocumentCache=(function(s){return new Ex(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new ix(t),this.Ti=new gx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _x,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new vx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const s=new Tx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Tx extends Jk{constructor(e){super(),this.currentSequenceNumber=e}}class Ng{constructor(e){this.persistence=e,this.Ai=new kg,this.Ri=null}static Vi(e){return new Ng(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(r=>{const s=_e.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Re.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ad{constructor(e,t){this.persistence=e,this.gi=new jo((r=>tN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=dx(this,t)}static Vi(e,t){return new ad(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?K.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Re.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vh(e.data.value)),t}Sr(e,t,r){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ze(),s=ze();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new xg(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return JA()?8:Zk(yn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Sx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Pa()<=Be.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",ka(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Pa()<=Be.DEBUG&&ue("QueryEngine","Query:",ka(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Pa()<=Be.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",ka(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ti(t))):K.resolve())}ps(e,t){if(KE(t))return K.resolve(null);let r=ti(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=id(t,null,"F"),r=ti(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=ze(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,id(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return KE(t)||s.isEqual(Re.min())?K.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?K.resolve(null):(Pa()<=Be.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ka(t)),this.vs(e,u,t,Kk(s,Ru)).next((d=>d)))}))}bs(e,t){let r=new Wt(qT(e));return t.forEach(((s,a)=>{jd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Pa()<=Be.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",ka(t)),this.gs.getDocumentsMatchingQuery(e,t,Os.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="LocalStore",Ax=3e8;class Rx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ft(Me),this.Ms=new jo((a=>Tg(a)),Sg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Px(n,e,t,r){return new Rx(n,e,t,r)}async function m0(n,e){const t=Ne(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=ze();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function kx(n,e){const t=Ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const w=m.batch,I=w.keys();let k=K.resolve();return I.forEach((V=>{k=k.next((()=>y.getEntry(f,V))).next((B=>{const z=m.docVersions.get(V);Ze(z!==null,48541),B.version.compareTo(z)<0&&(w.applyToRemoteDocument(B,m),B.isValidDocument()&&(B.setReadTime(m.commitVersion),y.addEntry(B)))}))})),k.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=ze();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function g0(n){const e=Ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Nx(n,e){const t=Ne(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,w)=>{const I=s.get(w);if(!I)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,w))));let k=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?k=k.withResumeToken(cn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(y.resumeToken,r)),s=s.insert(w,k),(function(B,z,Z){return B.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Ax?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(I,k,y)&&d.push(t.hi.updateTargetData(a,k))}));let f=Vi(),m=ze();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(xx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(Re.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return K.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function xx(n,e,t){let r=ze(),s=ze();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Vi();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Re.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ue(Dg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Dx(n,e){const t=Ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Eg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bx(n,e){const t=Ne(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,K.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new ws(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Nm(n,e,t){const r=Ne(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!ul(u))throw u;ue(Dg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function aw(n,e,t){const r=Ne(n);let s=Re.min(),a=ze();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const w=Ne(f),I=w.Ms.get(y);return I!==void 0?K.resolve(w.Fs.get(I)):w.hi.getTargetData(m,y)})(r,u,ti(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Re.min(),t?a:ze()))).next((d=>(Ox(r,EN(e),d),{documents:d,qs:a})))))}function Ox(n,e,t){let r=n.xs.get(e)||Re.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class lw{constructor(){this.activeTargetIds=AN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mx{constructor(){this.Fo=new lw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="ConnectivityMonitor";class cw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(uw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(uw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh=null;function xm(){return kh===null?kh=(function(){return 268435456+Math.round(2147483648*Math.random())})():kh++,"0x"+kh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="RestConnection",Vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Fx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===td?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=xm(),d=this.Go(e,t.toUriEncodedString());ue(Xp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=$s(m);return this.jo(e,d,f,r,y).then((w=>(ue(Xp,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw bs(Xp,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+al})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Vx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class Ux extends Fx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=xm();return new Promise(((d,f)=>{const m=new _T;m.setWithCredentials(!0),m.listenOnce(yT.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Lh.NO_ERROR:const w=m.getResponseJson();ue(mn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case Lh.TIMEOUT:ue(mn,`RPC '${e}' ${u} timed out`),f(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const I=m.getStatus();if(ue(mn,`RPC '${e}' ${u} failed with status:`,I,"response text:",m.getResponseText()),I>0){let k=m.getResponseJson();Array.isArray(k)&&(k=k[0]);const V=k==null?void 0:k.error;if(V&&V.status&&V.message){const B=(function(Z){const Q=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(Q)>=0?Q:H.UNKNOWN})(V.status);f(new oe(B,V.message))}else f(new oe(H.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new oe(H.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ue(mn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ue(mn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=xm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=wT(),d=ET(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ue(mn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const w=u.createWebChannel(y,f);this.T_(w);let I=!1,k=!1;const V=new jx({Ho:z=>{k?ue(mn,`Not sending because RPC '${e}' stream ${s} is closed:`,z):(I||(ue(mn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),ue(mn,`RPC '${e}' stream ${s} sending:`,z),w.send(z))},Yo:()=>w.close()}),B=(z,Z,Q)=>{z.listen(Z,(te=>{try{Q(te)}catch(ae){setTimeout((()=>{throw ae}),0)}}))};return B(w,au.EventType.OPEN,(()=>{k||(ue(mn,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),B(w,au.EventType.CLOSE,(()=>{k||(k=!0,ue(mn,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(w))})),B(w,au.EventType.ERROR,(z=>{k||(k=!0,bs(mn,`RPC '${e}' stream ${s} transport errored. Name:`,z.name,"Message:",z.message),V.__(new oe(H.UNAVAILABLE,"The operation could not be completed")))})),B(w,au.EventType.MESSAGE,(z=>{var Z;if(!k){const Q=z.data[0];Ze(!!Q,16349);const te=Q,ae=(te==null?void 0:te.error)||((Z=te[0])===null||Z===void 0?void 0:Z.error);if(ae){ue(mn,`RPC '${e}' stream ${s} received error:`,ae);const Ge=ae.status;let xe=(function(C){const x=Mt[C];if(x!==void 0)return r0(x)})(Ge),b=ae.message;xe===void 0&&(xe=H.INTERNAL,b="Unknown error status: "+Ge+" with message "+ae.message),k=!0,V.__(new oe(xe,b)),w.close()}else ue(mn,`RPC '${e}' stream ${s} received:`,Q),V.a_(Q)}})),B(d,vT.STAT_EVENT,(z=>{z.stat===ym.PROXY?ue(mn,`RPC '${e}' stream ${s} detected buffering proxy`):z.stat===ym.NOPROXY&&ue(mn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Jp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n){return new $N(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="PersistentStream";class y0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Li(t.toString()),Li("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(hw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(hw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bx extends y0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=GN(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Re.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?ni(u.readTime):Re.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=km(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Sm(f)?{documents:YN(a,f)}:{query:XN(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=o0(a,u.resumeToken);const m=Am(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Re.min())>0){d.readTime=od(a,u.snapshotVersion.toTimestamp());const m=Am(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=ZN(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=km(this.serializer),t.removeTarget=e,this.k_(t)}}class zx extends y0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=QN(e.writeResults,e.commitTime),r=ni(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=km(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>KN(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{}class $x extends Wx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Rm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(H.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Rm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(H.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class qx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Li(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="RemoteStore";class Hx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Uo(this)&&(ue(xo,"Restarting streams for network reachability change."),await(async function(f){const m=Ne(f);m.Ia.add(4),await Qu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await qd(m)})(this))}))})),this.Aa=new qx(r,s)}}async function qd(n){if(Uo(n))for(const e of n.da)await e(!0)}async function Qu(n){for(const e of n.da)await e(!1)}function v0(n,e){const t=Ne(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Lg(t)?Mg(t):hl(t).x_()&&Og(t,e))}function bg(n,e){const t=Ne(n),r=hl(t);t.Ta.delete(e),r.x_()&&E0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Uo(t)&&t.Aa.set("Unknown"))}function Og(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hl(n).H_(e)}function E0(n,e){n.Ra.$e(e),hl(n).Y_(e)}function Mg(n){n.Ra=new UN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),hl(n).start(),n.Aa.aa()}function Lg(n){return Uo(n)&&!hl(n).M_()&&n.Ta.size>0}function Uo(n){return Ne(n).Ia.size===0}function w0(n){n.Ra=void 0}async function Gx(n){n.Aa.set("Online")}async function Kx(n){n.Ta.forEach(((e,t)=>{Og(n,e)}))}async function Qx(n,e){w0(n),Lg(n)?(n.Aa.la(e),Mg(n)):n.Aa.set("Unknown")}async function Yx(n,e,t){if(n.Aa.set("Online"),e instanceof s0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ue(xo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ld(n,r)}else if(e instanceof Uh?n.Ra.Ye(e):e instanceof i0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Re.min()))try{const r=await g0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(cn.EMPTY_BYTE_STRING,y.snapshotVersion)),E0(a,f);const w=new ws(y.target,f,m,y.sequenceNumber);Og(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ue(xo,"Failed to raise snapshot:",r),await ld(n,r)}}async function ld(n,e,t){if(!ul(e))throw e;n.Ia.add(1),await Qu(n),n.Aa.set("Offline"),t||(t=()=>g0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(xo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qd(n)}))}function I0(n,e){return e().catch((t=>ld(n,t,e)))}async function Hd(n){const e=Ne(n),t=Fs(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Eg;for(;Xx(e);)try{const s=await Dx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Jx(e,s)}catch(s){await ld(e,s)}T0(e)&&S0(e)}function Xx(n){return Uo(n)&&n.Pa.length<10}function Jx(n,e){n.Pa.push(e);const t=Fs(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function T0(n){return Uo(n)&&!Fs(n).M_()&&n.Pa.length>0}function S0(n){Fs(n).start()}async function Zx(n){Fs(n).na()}async function eD(n){const e=Fs(n);for(const t of n.Pa)e.X_(t.mutations)}async function tD(n,e,t){const r=n.Pa.shift(),s=Ag.from(r,e,t);await I0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Hd(n)}async function nD(n,e){e&&Fs(n).Z_&&await(async function(r,s){if((function(u){return FN(u)&&u!==H.ABORTED})(s.code)){const a=r.Pa.shift();Fs(r).N_(),await I0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Hd(r)}})(n,e),T0(n)&&S0(n)}async function dw(n,e){const t=Ne(n);t.asyncQueue.verifyOperationInProgress(),ue(xo,"RemoteStore received new credentials");const r=Uo(t);t.Ia.add(3),await Qu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qd(t)}async function rD(n,e){const t=Ne(n);e?(t.Ia.delete(2),await qd(t)):e||(t.Ia.add(2),await Qu(t),t.Aa.set("Unknown"))}function hl(n){return n.Va||(n.Va=(function(t,r,s){const a=Ne(t);return a.ia(),new Bx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Gx.bind(null,n),e_:Kx.bind(null,n),n_:Qx.bind(null,n),J_:Yx.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Lg(n)?Mg(n):n.Aa.set("Unknown")):(await n.Va.stop(),w0(n))}))),n.Va}function Fs(n){return n.ma||(n.ma=(function(t,r,s){const a=Ne(t);return a.ia(),new zx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Zx.bind(null,n),n_:nD.bind(null,n),ea:eD.bind(null,n),ta:tD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Hd(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(xo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Vg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fg(n,e){if(Li("AsyncQueue",`${e}: ${n}`),ul(n))return new oe(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static emptySet(e){return new Va(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=lu(),this.sortedSet=new Ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Va)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Va;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.fa=new Ft(_e.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ya{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ya(e,t,Va.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class sD{constructor(){this.queries=pw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Ne(t),a=s.queries;s.queries=pw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new oe(H.ABORTED,"Firestore shutting down"))}}function pw(){return new jo((n=>$T(n)),Fd)}async function C0(n,e){const t=Ne(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new iD,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Fg(u,`Initialization of query '${ka(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&jg(t)}async function A0(n,e){const t=Ne(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function oD(n,e){const t=Ne(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&jg(t)}function aD(n,e,t){const r=Ne(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function jg(n){n.Da.forEach((e=>{e.next()}))}var Dm,mw;(mw=Dm||(Dm={})).Fa="default",mw.Cache="cache";class R0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ya(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ya.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.key=e}}class k0{constructor(e){this.key=e}}class lD{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ze(),this.mutatedKeys=ze(),this.Xa=qT(e),this.eu=new Va(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new fw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,w)=>{const I=s.get(y),k=jd(this.query,w)?w:null,V=!!I&&this.mutatedKeys.has(I.key),B=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let z=!1;I&&k?I.data.isEqual(k.data)?V!==B&&(r.track({type:3,doc:k}),z=!0):this.iu(I,k)||(r.track({type:2,doc:k}),z=!0,(f&&this.Xa(k,f)>0||m&&this.Xa(k,m)<0)&&(d=!0)):!I&&k?(r.track({type:0,doc:k}),z=!0):I&&!k&&(r.track({type:1,doc:I}),z=!0,(f||m)&&(d=!0)),z&&(k?(u=u.add(k),a=B?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,w)=>(function(k,V){const B=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:z})}};return B(k)-B(V)})(y.type,w.type)||this.Xa(y.doc,w.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Ya(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ze(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new k0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new P0(r))})),t}uu(e){this.Ha=e.qs,this.Za=ze();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ya.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ug="SyncEngine";class uD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cD{constructor(e){this.key=e,this.lu=!1}}class hD{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new jo((d=>$T(d)),Fd),this.Tu=new Map,this.Iu=new Set,this.du=new Ft(_e.comparator),this.Eu=new Map,this.Au=new kg,this.Ru={},this.Vu=new Map,this.mu=Qa.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dD(n,e,t=!0){const r=M0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await N0(r,e,t,!0),s}async function fD(n,e){const t=M0(n);await N0(t,e,!0,!1)}async function N0(n,e,t,r){const s=await bx(n.localStore,ti(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await pD(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&v0(n.remoteStore,s),d}async function pD(n,e,t,r,s){n.gu=(w,I,k)=>(async function(B,z,Z,Q){let te=z.view.nu(Z);te.Ds&&(te=await aw(B.localStore,z.query,!1).then((({documents:b})=>z.view.nu(b,te))));const ae=Q&&Q.targetChanges.get(z.targetId),Ge=Q&&Q.targetMismatches.get(z.targetId)!=null,xe=z.view.applyChanges(te,B.isPrimaryClient,ae,Ge);return _w(B,z.targetId,xe._u),xe.snapshot})(n,w,I,k);const a=await aw(n.localStore,e,!0),u=new lD(e,a.qs),d=u.nu(a.documents),f=Ku.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);_w(n,t,m._u);const y=new uD(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function mD(n,e,t){const r=Ne(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Fd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&bg(r.remoteStore,s.targetId),bm(r,s.targetId)})).catch(ll)):(bm(r,s.targetId),await Nm(r.localStore,s.targetId,!0))}async function gD(n,e){const t=Ne(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bg(t.remoteStore,r.targetId))}async function _D(n,e,t){const r=SD(n);try{const s=await(function(u,d){const f=Ne(u),m=mt.now(),y=d.reduce(((k,V)=>k.add(V.key)),ze());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let V=Vi(),B=ze();return f.Os.getEntries(k,y).next((z=>{V=z,V.forEach(((Z,Q)=>{Q.isValidDocument()||(B=B.add(Z))}))})).next((()=>f.localDocuments.getOverlayedDocuments(k,V))).next((z=>{w=z;const Z=[];for(const Q of d){const te=bN(Q,w.get(Q.key).overlayedDocument);te!=null&&Z.push(new Gs(Q.key,te,LT(te.value.mapValue),Cn.exists(!0)))}return f.mutationQueue.addMutationBatch(k,m,Z,d)})).next((z=>{I=z;const Z=z.applyToLocalDocumentSet(w,B);return f.documentOverlayCache.saveOverlays(k,z.batchId,Z)}))})).then((()=>({batchId:I.batchId,changes:GT(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Ft(Me)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Yu(r,s.changes),await Hd(r.remoteStore)}catch(s){const a=Fg(s,"Failed to persist write");t.reject(a)}}async function x0(n,e){const t=Ne(n);try{const r=await Nx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(Ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?Ze(u.lu,14607):s.removedDocuments.size>0&&(Ze(u.lu,42227),u.lu=!1))})),await Yu(t,r,e)}catch(r){await ll(r)}}function gw(n,e,t){const r=Ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Ne(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,w)=>{for(const I of w.wa)I.va(d)&&(m=!0)})),m&&jg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yD(n,e,t){const r=Ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Ft(_e.comparator);u=u.insert(a,_n.newNoDocument(a,Re.min()));const d=ze().add(a),f=new Wd(Re.min(),new Map,new Ft(Me),u,d);await x0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Bg(r)}else await Nm(r.localStore,e,!1).then((()=>bm(r,e,t))).catch(ll)}async function vD(n,e){const t=Ne(n),r=e.batch.batchId;try{const s=await kx(t.localStore,e);b0(t,r,null),D0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yu(t,s)}catch(s){await ll(s)}}async function ED(n,e,t){const r=Ne(n);try{const s=await(function(u,d){const f=Ne(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((w=>(Ze(w!==null,37113),y=w.keys(),f.mutationQueue.removeMutationBatch(m,w)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);b0(r,e,t),D0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yu(r,s)}catch(s){await ll(s)}}function D0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function b0(n,e,t){const r=Ne(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function bm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||O0(n,r)}))}function O0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(bg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Bg(n))}function _w(n,e,t){for(const r of t)r instanceof P0?(n.Au.addReference(r.key,e),wD(n,r)):r instanceof k0?(ue(Ug,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||O0(n,r.key)):Se(19791,{yu:r})}function wD(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ue(Ug,"New document in limbo: "+t),n.Iu.add(r),Bg(n))}function Bg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(dt.fromString(e)),r=n.mu.next();n.Eu.set(r,new cD(t)),n.du=n.du.insert(t,r),v0(n.remoteStore,new ws(ti(Vd(t.path)),r,"TargetPurposeLimboResolution",Od.ue))}}async function Yu(n,e,t){const r=Ne(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const w=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=xg.Es(f.targetId,m);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=Ne(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>K.forEach(m,(I=>K.forEach(I.Is,(k=>y.persistence.referenceDelegate.addReference(w,I.targetId,k))).next((()=>K.forEach(I.ds,(k=>y.persistence.referenceDelegate.removeReference(w,I.targetId,k)))))))))}catch(w){if(!ul(w))throw w;ue(Dg,"Failed to update sequence numbers: "+w)}for(const w of m){const I=w.targetId;if(!w.fromCache){const k=y.Fs.get(I),V=k.snapshotVersion,B=k.withLastLimboFreeSnapshotVersion(V);y.Fs=y.Fs.insert(I,B)}}})(r.localStore,a))}async function ID(n,e){const t=Ne(n);if(!t.currentUser.isEqual(e)){ue(Ug,"User change. New user:",e.toKey());const r=await m0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new oe(H.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yu(t,r.Bs)}}function TD(n,e){const t=Ne(n),r=t.Eu.get(e);if(r&&r.lu)return ze().add(r.key);{let s=ze();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function M0(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=x0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yD.bind(null,e),e.hu.J_=oD.bind(null,e.eventManager),e.hu.pu=aD.bind(null,e.eventManager),e}function SD(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ED.bind(null,e),e}class ud{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$d(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Px(this.persistence,new Cx,e.initialUser,this.serializer)}Du(e){return new p0(Ng.Vi,this.serializer)}bu(e){return new Mx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ud.provider={build:()=>new ud};class CD extends ud{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ze(this.persistence.referenceDelegate instanceof ad,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Mn.withCacheSize(this.cacheSizeBytes):Mn.DEFAULT;return new p0((r=>ad.Vi(r,t)),this.serializer)}}class Om{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ID.bind(null,this.syncEngine),await rD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sD})()}createDatastore(e){const t=$d(e.databaseInfo.databaseId),r=(function(a){return new Ux(a)})(e.databaseInfo);return(function(a,u,d,f){return new $x(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new Hx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>gw(this.syncEngine,t,0)),(function(){return cw.C()?new cw:new Lx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const w=new hD(s,a,u,d,f,m);return y&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Ne(s);ue(xo,"RemoteStore shutting down."),a.Ia.add(5),await Qu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Om.provider={build:()=>new Om};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Li("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="FirestoreClient";class AD{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=gn.UNAUTHENTICATED,this.clientId=vg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ue(js,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ue(js,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Zp(n,e){n.asyncQueue.verifyOperationInProgress(),ue(js,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await m0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{bs("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{bs("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function yw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await RD(n);ue(js,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>dw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>dw(e.remoteStore,s))),n._onlineComponents=e}async function RD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(js,"Using user provided OfflineComponentProvider");try{await Zp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;bs("Error using user provided cache. Falling back to memory cache: "+t),await Zp(n,new ud)}}else ue(js,"Using default OfflineComponentProvider"),await Zp(n,new CD(void 0));return n._offlineComponents}async function V0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(js,"Using user provided OnlineComponentProvider"),await yw(n,n._uninitializedComponentsProvider._online)):(ue(js,"Using default OnlineComponentProvider"),await yw(n,new Om))),n._onlineComponents}function PD(n){return V0(n).then((e=>e.syncEngine))}async function Mm(n){const e=await V0(n),t=e.eventManager;return t.onListen=dD.bind(null,e.syncEngine),t.onUnlisten=mD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gD.bind(null,e.syncEngine),t}function kD(n,e,t={}){const r=new Rs;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new L0({next:I=>{y.Ou(),u.enqueueAndForget((()=>A0(a,w)));const k=I.docs.has(d);!k&&I.fromCache?m.reject(new oe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&I.fromCache&&f&&f.source==="server"?m.reject(new oe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),w=new R0(Vd(d.path),y,{includeMetadataChanges:!0,ka:!0});return C0(a,w)})(await Mm(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firestore.googleapis.com",Ew=!0;class ww{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=j0,this.ssl=Ew}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ew;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=f0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lx)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Fk;switch(r.type){case"firstParty":return new zk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=vw.get(t);r&&(ue("ComponentProvider","Removing Datastore"),vw.delete(t),r.terminate())})(this),Promise.resolve()}}function ND(n,e,t,r={}){var s;n=Gn(n,Gd);const a=$s(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(ig(`https://${f}`),sg("Firestore",!0)),u.host!==j0&&u.host!==f&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!bi(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=gn.MOCK_USER;else{y=RI(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new gn(I)}n._authCredentials=new jk(new TT(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class Rt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Hu(t,Rt._jsonSchema))return new Rt(e,r||null,new _e(dt.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Vt("string",Rt._jsonSchemaVersion),referencePath:Vt("string")};class ks extends Ks{constructor(e,t,r){super(e,t,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new _e(e))}withConverter(e){return new ks(this.firestore,e,this._path)}}function Or(n,e,...t){if(n=tt(n),CT("collection","path",e),n instanceof Gd){const r=dt.fromString(e,...t);return OE(r),new ks(n,null,r)}{if(!(n instanceof Rt||n instanceof ks))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(dt.fromString(e,...t));return OE(r),new ks(n.firestore,null,r)}}function un(n,e,...t){if(n=tt(n),arguments.length===1&&(e=vg.newId()),CT("doc","path",e),n instanceof Gd){const r=dt.fromString(e,...t);return bE(r),new Rt(n,null,new _e(r))}{if(!(n instanceof Rt||n instanceof ks))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(dt.fromString(e,...t));return bE(r),new Rt(n.firestore,n instanceof ks?n.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="AsyncQueue";class Tw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _0(this,"async_queue_retry"),this.oc=()=>{const r=Jp();r&&ue(Iw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Jp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Jp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Rs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ul(e))throw e;ue(Iw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Li("INTERNAL UNHANDLED ERROR: ",Sw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Vg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Se(47125,{hc:Sw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Sw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Fi extends Gd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tw(e),this._firestoreClient=void 0,await e}}}function xD(n,e){const t=typeof n=="object"?n:lg(),r=typeof n=="string"?n:td,s=Pd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=SI("firestore");a&&ND(s,...a)}return s}function Kd(n){if(n._terminated)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||DD(n),n._firestoreClient}function DD(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new iN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,F0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new AD(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lr(cn.fromBase64String(e))}catch(t){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lr(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hu(e,lr._jsonSchema))return lr.fromBase64String(e.bytes)}}lr._jsonSchemaVersion="firestore/bytes/1.0",lr._jsonSchema={type:Vt("string",lr._jsonSchemaVersion),bytes:Vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ri._jsonSchemaVersion}}static fromJSON(e){if(Hu(e,ri._jsonSchema))return new ri(e.latitude,e.longitude)}}ri._jsonSchemaVersion="firestore/geoPoint/1.0",ri._jsonSchema={type:Vt("string",ri._jsonSchemaVersion),latitude:Vt("number"),longitude:Vt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hu(e,ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ii(e.vectorValues);throw new oe(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ii._jsonSchemaVersion="firestore/vectorValue/1.0",ii._jsonSchema={type:Vt("string",ii._jsonSchemaVersion),vectorValues:Vt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=/^__.*__$/;class OD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gu(e,this.data,t,this.fieldTransforms)}}class U0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Gs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function B0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:n})}}class Qd{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return cd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(B0(this.Ec)&&bD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class MD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$d(e)}Dc(e,t,r,s=!1){return new Qd({Ec:e,methodName:t,bc:r,path:ln.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zu(n){const e=n._freezeSettings(),t=$d(n._databaseId);return new MD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zg(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);qg("Data must be an object, but it was:",u,r);const d=$0(r,u);let f,m;if(a.merge)f=new qn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const I=Lm(e,w,t);if(!u.contains(I))throw new oe(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);H0(y,I)||y.push(I)}f=new qn(y),m=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,m=u.fieldTransforms;return new OD(new Ln(d),f,m)}class ec extends Ju{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function LD(n,e,t){return new Qd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wg extends Ju{_toFieldTransform(e){return new e0(e.path,new Du)}isEqual(e){return e instanceof Wg}}class $g extends Ju{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=LD(this,e,!0),r=this.vc.map((a=>dl(a,t))),s=new Ka(r);return new e0(e.path,s)}isEqual(e){return e instanceof $g&&bi(this.vc,e.vc)}}function z0(n,e,t,r){const s=n.Dc(1,e,t);qg("Data must be an object, but it was:",s,r);const a=[],u=Ln.empty();Hs(r,((f,m)=>{const y=Hg(e,f,t);m=tt(m);const w=s.gc(y);if(m instanceof ec)a.push(y);else{const I=dl(m,w);I!=null&&(a.push(y),u.set(y,I))}}));const d=new qn(a);return new U0(u,d,s.fieldTransforms)}function W0(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Lm(e,r,t)],f=[s];if(a.length%2!=0)throw new oe(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)d.push(Lm(e,a[I])),f.push(a[I+1]);const m=[],y=Ln.empty();for(let I=d.length-1;I>=0;--I)if(!H0(m,d[I])){const k=d[I];let V=f[I];V=tt(V);const B=u.gc(k);if(V instanceof ec)m.push(k);else{const z=dl(V,B);z!=null&&(m.push(k),y.set(k,z))}}const w=new qn(m);return new U0(y,w,u.fieldTransforms)}function VD(n,e,t,r=!1){return dl(t,n.Dc(r?4:3,e))}function dl(n,e){if(q0(n=tt(n)))return qg("Unsupported field value:",e,n),$0(n,e);if(n instanceof Ju)return(function(r,s){if(!B0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=dl(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=mt.fromDate(r);return{timestampValue:od(s.serializer,a)}}if(r instanceof mt){const a=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:od(s.serializer,a)}}if(r instanceof ri)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lr)return{bytesValue:o0(s.serializer,r._byteString)};if(r instanceof Rt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Pg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ii)return(function(u,d){return{mapValue:{fields:{[OT]:{stringValue:MT},[nd]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Cg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${bd(r)}`)})(n,e)}function $0(n,e){const t={};return PT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(n,((r,s)=>{const a=dl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function q0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof ri||n instanceof lr||n instanceof Rt||n instanceof Ju||n instanceof ii)}function qg(n,e,t){if(!q0(t)||!AT(t)){const r=bd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Lm(n,e,t){if((e=tt(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return Hg(n,e);throw cd("Field path arguments must be of type string or ",n,!1,void 0,t)}const FD=new RegExp("[~\\*/\\[\\]]");function Hg(n,e,t){if(e.search(FD)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xu(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new oe(H.INVALID_ARGUMENT,d+n+f)}function H0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jD extends G0{data(){return super.data()}}function Yd(n,e){return typeof e=="string"?Hg(n,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gg{}class Kg extends Gg{}function Do(n,e,...t){let r=[];e instanceof Gg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Qg)).length,d=a.filter((f=>f instanceof Xd)).length;if(u>1||u>0&&d>0)throw new oe(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Xd extends Kg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xd(e,t,r)}_apply(e){const t=this._parse(e);return Q0(e._query,t),new Ks(e.firestore,e.converter,Cm(e._query,t))}_parse(e){const t=Zu(e.firestore);return(function(a,u,d,f,m,y,w){let I;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new oe(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Rw(w,y);const V=[];for(const B of w)V.push(Aw(f,a,B));I={arrayValue:{values:V}}}else I=Aw(f,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Rw(w,y),I=VD(d,u,w,y==="in"||y==="not-in");return Lt.create(m,y,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hd(n,e,t){const r=e,s=Yd("where",n);return Xd._create(s,r,t)}class Qg extends Gg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:br.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)Q0(u,f),u=Cm(u,f)})(e._query,t),new Ks(e.firestore,e.converter,Cm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yg extends Kg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xu(a,u)})(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new cl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function K0(n,e="asc"){const t=e,r=Yd("orderBy",n);return Yg._create(r,t)}class Xg extends Kg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xg(e,t,r)}_apply(e){return new Ks(e.firestore,e.converter,id(e._query,this._limit,this._limitType))}}function bo(n){return Xg._create("limit",n,"F")}function Aw(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new oe(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!WT(e)&&t.indexOf("/")!==-1)throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(dt.fromString(t));if(!_e.isDocumentKey(r))throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zE(n,new _e(r))}if(t instanceof Rt)return zE(n,t._key);throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(t)}.`)}function Rw(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Q0(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class BD{convertValue(e,t="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Hs(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[nd].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>Nt(u.doubleValue)));return new ii(a)}convertGeoPoint(e){return new ri(Nt(e.latitude),Nt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ld(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pu(e));default:return null}}convertTimestamp(e){const t=Ms(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=dt.fromString(e);Ze(d0(r),9688,{name:e});const s=new ku(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return s.isEqual(t)||Li(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ro extends G0{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ro._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ro._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ro._jsonSchema={type:Vt("string",Ro._jsonSchemaVersion),bundleSource:Vt("string","DocumentSnapshot"),bundleName:Vt("string"),bundle:Vt("string")};class Bh extends Ro{data(e={}){return super.data(e)}}class Fa{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Bh(this._firestore,this._userDataWriter,r.key,r,new cu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Bh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new cu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Bh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new cu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:zD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){n=Gn(n,Rt);const e=Gn(n.firestore,Fi);return kD(Kd(e),n._key).then((t=>J0(e,n,t)))}Fa._jsonSchemaVersion="firestore/querySnapshot/1.0",Fa._jsonSchema={type:Vt("string",Fa._jsonSchemaVersion),bundleSource:Vt("string","QuerySnapshot"),bundleName:Vt("string"),bundle:Vt("string")};class Y0 extends BD{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function Jd(n,e,t){n=Gn(n,Rt);const r=Gn(n.firestore,Fi),s=Jg(n.converter,e,t);return tc(r,[zg(Zu(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Cn.none())])}function Xa(n,e,t,...r){n=Gn(n,Rt);const s=Gn(n.firestore,Fi),a=Zu(s);let u;return u=typeof(e=tt(e))=="string"||e instanceof Xu?W0(a,"updateDoc",n._key,e,t,r):z0(a,"updateDoc",n._key,e),tc(s,[u.toMutation(n._key,Cn.exists(!0))])}function WD(n){return tc(Gn(n.firestore,Fi),[new zd(n._key,Cn.none())])}function X0(n,e){const t=Gn(n.firestore,Fi),r=un(n),s=Jg(n.converter,e);return tc(t,[zg(Zu(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then((()=>r))}function xi(n,...e){var t,r,s;n=tt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Cw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Cw(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,m,y;if(n instanceof Rt)m=Gn(n.firestore,Fi),y=Vd(n._key.path),f={next:w=>{e[u]&&e[u](J0(m,n,w))},error:e[u+1],complete:e[u+2]};else{const w=Gn(n,Ks);m=Gn(w.firestore,Fi),y=w._query;const I=new Y0(m);f={next:k=>{e[u]&&e[u](new Fa(m,I,w,k))},error:e[u+1],complete:e[u+2]},UD(n._query)}return(function(I,k,V,B){const z=new L0(B),Z=new R0(k,z,V);return I.asyncQueue.enqueueAndForget((async()=>C0(await Mm(I),Z))),()=>{z.Ou(),I.asyncQueue.enqueueAndForget((async()=>A0(await Mm(I),Z)))}})(Kd(m),y,d,f)}function tc(n,e){return(function(r,s){const a=new Rs;return r.asyncQueue.enqueueAndForget((async()=>_D(await PD(r),s,a))),a.promise})(Kd(n),e)}function J0(n,e,t){const r=t.docs.get(e._key),s=new Y0(n);return new Ro(n,s,e._key,r,new cu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Zu(e)}set(e,t,r){this._verifyNotCommitted();const s=em(e,this._firestore),a=Jg(s.converter,t,r),u=zg(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,Cn.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const a=em(e,this._firestore);let u;return u=typeof(t=tt(t))=="string"||t instanceof Xu?W0(this._dataReader,"WriteBatch.update",a._key,t,r,s):z0(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(u.toMutation(a._key,Cn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=em(e,this._firestore);return this._mutations=this._mutations.concat(new zd(t._key,Cn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function em(n,e){if((n=tt(n)).firestore!==e)throw new oe(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){return new ec("deleteField")}function Hn(){return new Wg("serverTimestamp")}function Pw(...n){return new $g("arrayUnion",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(n){return Kd(n=Gn(n,Fi)),new $D(n,(e=>tc(n,e)))}(function(e,t=!0){(function(s){al=s})(Vo),Po(new Ds("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Fi(new Uk(r.getProvider("auth-internal")),new Wk(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ku(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Jr(PE,kE,e),Jr(PE,kE,"esm2017")})();var kw={};const Nw="@firebase/database",xw="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z0="";function GD(n){Z0=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return oi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KD(e)}}catch{}return new QD},Ao=eS("localStorage"),YD=eS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Rd("@firebase/database"),XD=(function(){let n=1;return function(){return n++}})(),tS=function(n){const e=cR(n),t=new oR;t.update(e);const r=t.digest();return rg.encodeByteArray(r)},nc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=nc.apply(null,r):typeof r=="object"?e+=zt(r):e+=r,e+=" "}return e};let yu=null,Dw=!0;const JD=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),ja.logLevel=Be.VERBOSE,yu=ja.log.bind(ja)},Jt=function(...n){if(Dw===!0&&(Dw=!1,yu===null&&YD.get("logging_enabled")===!0&&JD()),yu){const e=nc.apply(null,n);yu(e)}},rc=function(n){return function(...e){Jt(n,...e)}},Vm=function(...n){const e="FIREBASE INTERNAL ERROR: "+nc(...n);ja.error(e)},ji=function(...n){const e=`FIREBASE FATAL ERROR: ${nc(...n)}`;throw ja.error(e),new Error(e)},An=function(...n){const e="FIREBASE WARNING: "+nc(...n);ja.warn(e)},ZD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},eb=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ja="[MIN_NAME]",Oo="[MAX_NAME]",Bo=function(n,e){if(n===e)return 0;if(n===Ja||e===Oo)return-1;if(e===Ja||n===Oo)return 1;{const t=bw(n),r=bw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},tb=function(n,e){return n===e?0:n<e?-1:1},tu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+zt(e))},Zg=function(n){if(typeof n!="object"||n===null)return zt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=zt(e[r]),t+=":",t+=Zg(n[e[r]]);return t+="}",t},nS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Zt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const rS=function(n){ne(!Zd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let w="";for(f=0;f<64;f+=8){let I=parseInt(y.substr(f,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},nb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ib(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const sb=new RegExp("^-?(0*)\\d{1,10}$"),ob=-2147483648,ab=2147483647,bw=function(n){if(sb.test(n)){const e=Number(n);if(e>=ob&&e<=ab)return e}return null},fl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw An("Exception was thrown by user callback.",t),e},Math.floor(0))}},lb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ar(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="5",iS="v",sS="s",oS="r",aS="f",lS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uS="ls",cS="p",Fm="ac",hS="websocket",dS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ao.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ao.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pS(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===hS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hb(n)&&(t.ns=n.namespace);const s=[];return Zt(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.counters_={}}incrementCounter(e,t=1){oi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm={},nm={};function t_(n){const e=n.toString();return tm[e]||(tm[e]=new db),tm[e]}function fb(n,e){const t=n.toString();return nm[t]||(nm[t]=e()),nm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&fl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="start",mb="close",gb="pLPCommand",_b="pRTLPCB",mS="id",gS="pw",_S="ser",yb="cb",vb="seg",Eb="ts",wb="d",Ib="dframe",yS=1870,vS=30,Tb=yS-vS,Sb=25e3,Cb=3e4;class ba{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rc(e),this.stats_=t_(t),this.urlFn=f=>(this.appCheckToken&&(f[Fm]=this.appCheckToken),pS(t,dS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cb)),eb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new n_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ow)this.id=d,this.password=f;else if(u===mb)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ow]="t",r[_S]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iS]=e_,this.transportSessionId&&(r[sS]=this.transportSessionId),this.lastSessionId&&(r[uS]=this.lastSessionId),this.applicationId&&(r[cS]=this.applicationId),this.appCheckToken&&(r[Fm]=this.appCheckToken),typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(r[oS]=aS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ba.forceAllow_=!0}static forceDisallow(){ba.forceDisallow_=!0}static isAvailable(){return ba.forceAllow_?!0:!ba.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nb()&&!rb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=wI(t),s=nS(r,Tb);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ib]="t",r[mS]=e,r[gS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class n_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XD(),window[gb+this.uniqueCallbackIdentifier]=e,window[_b+this.uniqueCallbackIdentifier]=t,this.myIFrame=n_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Jt("frame writing exception"),d.stack&&Jt(d.stack),Jt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mS]=this.myID,e[gS]=this.myPW,e[_S]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vS+r.length<=yS;){const u=this.pendingSegs.shift();r=r+"&"+vb+s+"="+u.seg+"&"+Eb+s+"="+u.ts+"&"+wb+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(Sb)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=16384,Rb=45e3;let dd=null;typeof MozWebSocket<"u"?dd=MozWebSocket:typeof WebSocket<"u"&&(dd=WebSocket);class Rr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rc(this.connId),this.stats_=t_(t),this.connURL=Rr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[iS]=e_,typeof location<"u"&&location.hostname&&lS.test(location.hostname)&&(u[oS]=aS),t&&(u[sS]=t),r&&(u[uS]=r),s&&(u[Fm]=s),a&&(u[cS]=a),pS(e,hS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ao.set("previous_websocket_failure",!0);try{let r;XA(),this.mySock=new dd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dd!==null&&!Rr.forceDisallow_}static previouslyFailed(){return Ao.isInMemoryStorage||Ao.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ao.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Tu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=nS(t,Ab);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rb))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rr.responsesRequiredToBeHealthy=2;Rr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static get ALL_TRANSPORTS(){return[ba,Rr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Rr&&Rr.isAvailable();let r=t&&!Rr.previouslyFailed();if(e.webSocketOnly&&(t||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rr];else{const s=this.transports_=[];for(const a of Ou.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Ou.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ou.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=6e4,kb=5e3,Nb=10*1024,xb=100*1024,rm="t",Mw="d",Db="s",Lw="r",bb="e",Vw="o",Fw="a",jw="n",Uw="p",Ob="h";class Mb{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rc("c:"+this.id+":"),this.transportManager_=new Ou(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Nb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rm in e){const t=e[rm];t===Fw?this.upgradeIfSecondaryHealthy_():t===Lw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Vw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=tu("t",e),r=tu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=tu("t",e),r=tu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=tu(rm,e);if(Mw in e){const r=e[Mw];if(t===Ob){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===jw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Db?this.onConnectionShutdown_(r):t===Lw?this.onReset_(r):t===bb?Vm("Server Error: "+r):t===Vw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),e_!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ao.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends wS{static getInstance(){return new fd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!og()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=32,zw=768;class nt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new nt("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Us(n){return n.pieces_.length-n.pieceNum_}function ot(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new nt(n.pieces_,e)}function r_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Lb(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function IS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new nt(e,0)}function It(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof nt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new nt(t,0)}function je(n){return n.pieceNum_>=n.pieces_.length}function Sn(n,e){const t=Le(n),r=Le(e);if(t===null)return e;if(t===r)return Sn(ot(n),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Vb(n,e){const t=Mu(n,0),r=Mu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Bo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function i_(n,e){if(Us(n)!==Us(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function ur(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Us(n)>Us(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Fb{constructor(e,t){this.errorPrefix_=t,this.parts_=Mu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ad(this.parts_[r]);TS(this)}}function jb(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ad(e),TS(n)}function Ub(n){const e=n.parts_.pop();n.byteLength_-=Ad(e),n.parts_.length>0&&(n.byteLength_-=1)}function TS(n){if(n.byteLength_>zw)throw new Error(n.errorPrefix_+"has a key path longer than "+zw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bw+") or object contains a cycle "+So(n))}function So(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends wS{static getInstance(){return new s_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=1e3,Bb=300*1e3,Ww=30*1e3,zb=1.3,Wb=3e4,$b="server_kill",$w=3;class Di extends ES{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=Di.nextPersistentConnectionId_++,this.log_=rc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nu,this.maxReconnectDelay_=Bb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");s_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(zt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Xr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;Di.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&oi(e,"w")){const r=za(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=iR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+zt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vm("Unrecognized action received from server: "+zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Wb&&(this.reconnectDelay_=nu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Di.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(w){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,d=new Mb(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,k=>{An(k+" ("+this.repoInfo_.toString()+")"),this.interrupt($b)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&An(w),f())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qh(this.interruptReasons_)&&(this.reconnectDelay_=nu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Zg(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new nt(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$w&&(this.reconnectDelay_=Ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$w&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Z0.replace(/\./g,"-")]=1,og()?e["framework.cordova"]=1:PI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fd.getInstance().currentlyOnline();return qh(this.interruptReasons_)&&e}}Di.nextPersistentConnectionId_=0;Di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ue(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ue(Ja,e),s=new Ue(Ja,t);return this.compare(r,s)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh;class SS extends ef{static get __EMPTY_NODE(){return Nh}static set __EMPTY_NODE(e){Nh=e}compare(e,t){return Bo(e.name,t.name)}isDefinedOn(e){throw il("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(Oo,Nh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,Nh)}toString(){return".key"}}const Ua=new SS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Xt.RED,this.left=s??Vn.EMPTY_NODE,this.right=a??Vn.EMPTY_NODE}copy(e,t,r,s,a){return new Xt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Vn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class qb{copy(e,t,r,s,a){return this}insert(e,t,r){return new Xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vn{constructor(e,t=Vn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new Vn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xh(this.root_,null,this.comparator_,!0,e)}}Vn.EMPTY_NODE=new qb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(n,e){return Bo(n.name,e.name)}function o_(n,e){return Bo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jm;function Gb(n){jm=n}const CS=function(n){return typeof n=="number"?"number:"+rS(n):"string:"+n},AS=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&oi(e,".sv"),"Priority must be a string or number.")}else ne(n===jm||n.isEmpty(),"priority of unexpected type.");ne(n===jm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qw;class Qt{static set __childrenNodeConstructor(e){qw=e}static get __childrenNodeConstructor(){return qw}constructor(e,t=Qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return je(e)?this:Le(e)===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Le(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||Us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=rS(this.value_):e+=this.value_,this.lazyHash_=tS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Qt.VALUE_TYPE_ORDER.indexOf(t),a=Qt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RS,PS;function Kb(n){RS=n}function Qb(n){PS=n}class Yb extends ef{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Bo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(Oo,new Qt("[PRIORITY-POST]",PS))}makePost(e,t){const r=RS(e);return new Ue(t,new Qt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Tt=new Yb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=Math.log(2);class Jb{constructor(e){const t=a=>parseInt(Math.log(a)/Xb,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let w,I;if(y===0)return null;if(y===1)return w=n[f],I=t?t(w):w,new Xt(I,w.node,Xt.BLACK,null,null);{const k=parseInt(y/2,10)+f,V=s(f,k),B=s(k+1,m);return w=n[k],I=t?t(w):w,new Xt(I,w.node,Xt.BLACK,V,B)}},a=function(f){let m=null,y=null,w=n.length;const I=function(V,B){const z=w-V,Z=w;w-=V;const Q=s(z+1,Z),te=n[z],ae=t?t(te):te;k(new Xt(ae,te.node,B,null,Q))},k=function(V){m?(m.left=V,m=V):(y=V,m=V)};for(let V=0;V<f.count;++V){const B=f.nextBitIsOne(),z=Math.pow(2,f.count-(V+1));B?I(z,Xt.BLACK):(I(z,Xt.BLACK),I(z,Xt.RED))}return y},u=new Jb(n.length),d=a(u);return new Vn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;const Ra={};class Ni{static get Default(){return ne(Ra&&Tt,"ChildrenNode.ts has not been loaded"),im=im||new Ni({".priority":Ra},{".priority":Tt}),im}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=za(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vn?t:null}hasIndex(e){return oi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Ua,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Ue.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=pd(r,e.getCompare()):d=Ra;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new Ni(y,m)}addToIndexes(e,t){const r=Hh(this.indexes_,(s,a)=>{const u=za(this.indexSet_,a);if(ne(u,"Missing index implementation for "+a),s===Ra)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Ue.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),pd(d,u.getCompare())}else return Ra;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Ue(e.name,d))),f.insert(e,e.node)}});return new Ni(r,this.indexSet_)}removeFromIndexes(e,t){const r=Hh(this.indexes_,s=>{if(s===Ra)return s;{const a=t.get(e.name);return a?s.remove(new Ue(e.name,a)):s}});return new Ni(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;class Te{static get EMPTY_NODE(){return ru||(ru=new Te(new Vn(o_),null,Ni.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&AS(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ru}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ru:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ue(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?ru:this.priorityNode_;return new Te(s,u,a)}}updateChild(e,t){const r=Le(e);if(r===null)return t;{ne(Le(e)!==".priority"||Us(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ot(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(Tt,(u,d)=>{t[u]=d.val(e),r++,a&&Te.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CS(this.getPriority().val())+":"),this.forEachChild(Tt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":tS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Ue(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ic?-1:0}withIndex(e){if(e===Ua||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ua||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Tt),s=t.getIterator(Tt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ua?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zb extends Te{constructor(){super(new Vn(o_),Te.EMPTY_NODE,Ni.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const ic=new Zb;Object.defineProperties(Ue,{MIN:{value:new Ue(Ja,Te.EMPTY_NODE)},MAX:{value:new Ue(Oo,ic)}});SS.__EMPTY_NODE=Te.EMPTY_NODE;Qt.__childrenNodeConstructor=Te;Gb(ic);Qb(ic);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=!0;function At(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qt(t,At(e))}if(!(n instanceof Array)&&eO){const t=[];let r=!1;if(Zt(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=At(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Ue(u,f)))}}),t.length===0)return Te.EMPTY_NODE;const a=pd(t,Hb,u=>u.name,o_);if(r){const u=pd(t,Tt.getCompare());return new Te(a,At(e),new Ni({".priority":u},{".priority":Tt}))}else return new Te(a,At(e),Ni.Default)}else{let t=Te.EMPTY_NODE;return Zt(n,(r,s)=>{if(oi(n,r)&&r.substring(0,1)!=="."){const a=At(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(At(e))}}Kb(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO extends ef{constructor(e){super(),this.indexPath_=e,ne(!je(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Bo(e.name,t.name):a}makePost(e,t){const r=At(e),s=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ue(t,s)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,ic);return new Ue(Oo,e)}toString(){return Mu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO extends ef{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Bo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const r=At(e);return new Ue(t,r)}toString(){return".value"}}const rO=new nO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(n){return{type:"value",snapshotNode:n}}function Za(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Lu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function iO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Lu(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Za(t,r)):u.trackChildChange(Vu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Tt,(s,a)=>{t.hasChild(s)||r.trackChildChange(Lu(s,a))}),t.isLeafNode()||t.forEachChild(Tt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Vu(s,a,u))}else r.trackChildChange(Za(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.indexedFilter_=new a_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fu.getStartPost_(e),this.endPost_=Fu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Ue(t,r))||(r=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Te.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Te.EMPTY_NODE);const a=this;return t.forEachChild(Tt,(u,d)=>{a.matches(new Ue(u,d))||(s=s.updateImmediateChild(u,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Fu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Ue(t,r))||(r=Te.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Te.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Te.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(I,k)=>w(k,I)}else u=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const f=new Ue(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const w=d.getImmediateChild(t);let I=s.getChildAfterChild(this.index_,m,this.reverse_);for(;I!=null&&(I.name===t||d.hasChild(I.name));)I=s.getChildAfterChild(this.index_,I,this.reverse_);const k=I==null?1:u(I,f);if(y&&!r.isEmpty()&&k>=0)return a!=null&&a.trackChildChange(Vu(t,r,w)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Lu(t,w));const B=d.updateImmediateChild(t,Te.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a!=null&&a.trackChildChange(Za(I.name,I.node)),B.updateImmediateChild(I.name,I.node)):B}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Lu(m.name,m.node)),a.trackChildChange(Za(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ja}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new l_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oO(n){return n.loadsAllData()?new a_(n.getIndex()):n.hasLimit()?new sO(n):new Fu(n)}function Hw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Tt?t="$priority":n.index_===rO?t="$value":n.index_===Ua?t="$key":(ne(n.index_ instanceof tO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=zt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=zt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+zt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=zt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+zt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Gw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Tt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends ES{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=rc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=md.getListenId_(e,r),d={};this.listens_[u]=d;const f=Hw(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let w=y;if(m===404&&(w=null,m=null),m===null&&this.onDataUpdate_(a,w,!1,r),za(this.listens_,u)===d){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",s(I,null)}})}unlisten(e,t){const r=md.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Hw(e._queryParams),r=e._path.toString(),s=new Xr;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Tu(d.responseText)}catch{An("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&An("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return{value:null,children:new Map}}function pl(n,e,t){if(je(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Le(e);n.children.has(r)||n.children.set(r,gd());const s=n.children.get(r);e=ot(e),pl(s,e,t)}}function Um(n,e){if(je(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Tt,(r,s)=>{pl(n,new nt(r),s)}),Um(n,e)}}else if(n.children.size>0){const t=Le(e);return e=ot(e),n.children.has(t)&&Um(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Bm(n,e,t){n.value!==null?t(e,n.value):lO(n,(r,s)=>{const a=new nt(e.toString()+"/"+r);Bm(s,a,t)})}function lO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Zt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=10*1e3,cO=30*1e3,hO=300*1e3;class dO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uO(e);const r=Kw+(cO-Kw)*Math.random();vu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Zt(e,(s,a)=>{a>0&&oi(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*hO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kr||(kr={}));function u_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function h_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=kr.ACK_USER_WRITE,this.source=u_()}operationForChild(e){if(je(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new nt(e));return new _d(Xe(),t,this.revert)}}else return ne(Le(this.path)===e,"operationForChild called for unrelated child."),new _d(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.source=e,this.path=t,this.type=kr.LISTEN_COMPLETE}operationForChild(e){return je(this.path)?new ju(this.source,Xe()):new ju(this.source,ot(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=kr.OVERWRITE}operationForChild(e){return je(this.path)?new Mo(this.source,Xe(),this.snap.getImmediateChild(e)):new Mo(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=kr.MERGE}operationForChild(e){if(je(this.path)){const t=this.children.subtree(new nt(e));return t.isEmpty()?null:t.value?new Mo(this.source,Xe(),t.value):new el(this.source,Xe(),t)}else return ne(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new el(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(je(e))return this.isFullyInitialized()&&!this.filtered_;const t=Le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(iO(u.childName,u.snapshotNode))}),iu(n,s,"child_removed",e,r,t),iu(n,s,"child_added",e,r,t),iu(n,s,"child_moved",a,r,t),iu(n,s,"child_changed",e,r,t),iu(n,s,"value",e,r,t),s}function iu(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>gO(n,d,f)),u.forEach(d=>{const f=mO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function mO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function gO(n,e,t){if(e.childName==null||t.childName==null)throw il("Should only compare child_ events.");const r=new Ue(e.childName,e.snapshotNode),s=new Ue(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n,e){return{eventCache:n,serverCache:e}}function Eu(n,e,t,r){return tf(new Bs(e,t,r),n.serverCache)}function NS(n,e,t,r){return tf(n.eventCache,new Bs(e,t,r))}function yd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Lo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sm;const _O=()=>(sm||(sm=new Vn(tb)),sm);class ht{static fromObject(e){let t=new ht(null);return Zt(e,(r,s)=>{t=t.set(new nt(r),s)}),t}constructor(e,t=_O()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(je(e))return null;{const r=Le(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(ot(e),t);return a!=null?{path:It(new nt(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(je(e))return this;{const t=Le(e),r=this.children.get(t);return r!==null?r.subtree(ot(e)):new ht(null)}}set(e,t){if(je(e))return new ht(t,this.children);{const r=Le(e),a=(this.children.get(r)||new ht(null)).set(ot(e),t),u=this.children.insert(r,a);return new ht(this.value,u)}}remove(e){if(je(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=Le(e),r=this.children.get(t);if(r){const s=r.remove(ot(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new ht(null):new ht(this.value,a)}else return this}}get(e){if(je(e))return this.value;{const t=Le(e),r=this.children.get(t);return r?r.get(ot(e)):null}}setTree(e,t){if(je(e))return t;{const r=Le(e),a=(this.children.get(r)||new ht(null)).setTree(ot(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new ht(this.value,u)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(It(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(je(e))return null;{const a=Le(e),u=this.children.get(a);return u?u.findOnPath_(ot(e),It(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,r){if(je(e))return this;{this.value&&r(t,this.value);const s=Le(e),a=this.children.get(s);return a?a.foreachOnPath_(ot(e),It(t,s),r):new ht(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(It(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.writeTree_=e}static empty(){return new xr(new ht(null))}}function wu(n,e,t){if(je(e))return new xr(new ht(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Sn(s,e);return a=a.updateChild(u,t),new xr(n.writeTree_.set(s,a))}else{const s=new ht(t),a=n.writeTree_.setTree(e,s);return new xr(a)}}}function zm(n,e,t){let r=n;return Zt(t,(s,a)=>{r=wu(r,It(e,s),a)}),r}function Qw(n,e){if(je(e))return xr.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new xr(t)}}function Wm(n,e){return zo(n,e)!=null}function zo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Sn(t.path,e)):null}function Yw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tt,(r,s)=>{e.push(new Ue(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ue(r,s.value))}),e}function Ns(n,e){if(je(e))return n;{const t=zo(n,e);return t!=null?new xr(new ht(t)):new xr(n.writeTree_.subtree(e))}}function $m(n){return n.writeTree_.isEmpty()}function tl(n,e){return xS(Xe(),n.writeTree_,e)}function xS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=xS(It(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(It(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e){return MS(e,n)}function yO(n,e,t,r,s){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=wu(n.visibleWrites,e,t)),n.lastWriteId=r}function vO(n,e,t,r){ne(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=zm(n.visibleWrites,e,t),n.lastWriteId=r}function EO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function wO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&IO(d,r.path)?s=!1:ur(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return TO(n),!0;if(r.snap)n.visibleWrites=Qw(n.visibleWrites,r.path);else{const d=r.children;Zt(d,f=>{n.visibleWrites=Qw(n.visibleWrites,It(r.path,f))})}return!0}else return!1}function IO(n,e){if(n.snap)return ur(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ur(It(n.path,t),e))return!0;return!1}function TO(n){n.visibleWrites=DS(n.allWrites,SO,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function SO(n){return n.visible}function DS(n,e,t){let r=xr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)ur(t,u)?(d=Sn(t,u),r=wu(r,d,a.snap)):ur(u,t)&&(d=Sn(u,t),r=wu(r,Xe(),a.snap.getChild(d)));else if(a.children){if(ur(t,u))d=Sn(t,u),r=zm(r,d,a.children);else if(ur(u,t))if(d=Sn(u,t),je(d))r=zm(r,Xe(),a.children);else{const f=za(a.children,Le(d));if(f){const m=f.getChild(ot(d));r=wu(r,Xe(),m)}}}else throw il("WriteRecord should have .snap or .children")}}return r}function bS(n,e,t,r,s){if(!r&&!s){const a=zo(n.visibleWrites,e);if(a!=null)return a;{const u=Ns(n.visibleWrites,e);if($m(u))return t;if(t==null&&!Wm(u,Xe()))return null;{const d=t||Te.EMPTY_NODE;return tl(u,d)}}}else{const a=Ns(n.visibleWrites,e);if(!s&&$m(a))return t;if(!s&&t==null&&!Wm(a,Xe()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(ur(m.path,e)||ur(e,m.path))},d=DS(n.allWrites,u,e),f=t||Te.EMPTY_NODE;return tl(d,f)}}}function CO(n,e,t){let r=Te.EMPTY_NODE;const s=zo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Tt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Ns(n.visibleWrites,e);return t.forEachChild(Tt,(u,d)=>{const f=tl(Ns(a,new nt(u)),d);r=r.updateImmediateChild(u,f)}),Yw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Ns(n.visibleWrites,e);return Yw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function AO(n,e,t,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=It(e,t);if(Wm(n.visibleWrites,a))return null;{const u=Ns(n.visibleWrites,a);return $m(u)?s.getChild(t):tl(u,s.getChild(t))}}function RO(n,e,t,r){const s=It(e,t),a=zo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Ns(n.visibleWrites,s);return tl(u,r.getNode().getImmediateChild(t))}else return null}function PO(n,e){return zo(n.visibleWrites,e)}function kO(n,e,t,r,s,a,u){let d;const f=Ns(n.visibleWrites,e),m=zo(f,Xe());if(m!=null)d=m;else if(t!=null)d=tl(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],w=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let k=I.getNext();for(;k&&y.length<s;)w(k,r)!==0&&y.push(k),k=I.getNext();return y}else return[]}function NO(){return{visibleWrites:xr.empty(),allWrites:[],lastWriteId:-1}}function vd(n,e,t,r){return bS(n.writeTree,n.treePath,e,t,r)}function d_(n,e){return CO(n.writeTree,n.treePath,e)}function Xw(n,e,t,r){return AO(n.writeTree,n.treePath,e,t,r)}function Ed(n,e){return PO(n.writeTree,It(n.treePath,e))}function xO(n,e,t,r,s,a){return kO(n.writeTree,n.treePath,e,t,r,s,a)}function f_(n,e,t){return RO(n.writeTree,n.treePath,e,t)}function OS(n,e){return MS(It(n.treePath,e),n.writeTree)}function MS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Vu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Lu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Za(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Vu(r,e.snapshotNode,s.oldSnap));else throw il("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const LS=new bO;class p_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return f_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lo(this.viewCache_),a=xO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(n){return{filter:n}}function MO(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function LO(n,e,t,r,s){const a=new DO;let u,d;if(t.type===kr.OVERWRITE){const m=t;m.source.fromUser?u=qm(n,e,m.path,m.snap,r,s,a):(ne(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!je(m.path),u=wd(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===kr.MERGE){const m=t;m.source.fromUser?u=FO(n,e,m.path,m.children,r,s,a):(ne(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Hm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===kr.ACK_USER_WRITE){const m=t;m.revert?u=BO(n,e,m.path,r,s,a):u=jO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===kr.LISTEN_COMPLETE)u=UO(n,e,t.path,r,a);else throw il("Unknown operation type: "+t.type);const f=a.getChanges();return VO(e,u,f),{viewCache:u,changes:f}}function VO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=yd(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(kS(yd(e)))}}function VS(n,e,t,r,s,a){const u=e.eventCache;if(Ed(r,t)!=null)return e;{let d,f;if(je(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Lo(e),y=m instanceof Te?m:Te.EMPTY_NODE,w=d_(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const m=vd(r,Lo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Le(t);if(m===".priority"){ne(Us(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const w=Xw(r,t,y,f);w!=null?d=n.filter.updatePriority(y,w):d=u.getNode()}else{const y=ot(t);let w;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const I=Xw(r,t,u.getNode(),f);I!=null?w=u.getNode().getImmediateChild(m).updateChild(y,I):w=u.getNode().getImmediateChild(m)}else w=f_(r,m,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),m,w,y,s,a):d=u.getNode()}}return Eu(e,d,u.isFullyInitialized()||je(t),n.filter.filtersNodes())}}function wd(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(je(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const k=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),k,null)}else{const k=Le(t);if(!f.isCompleteForPath(t)&&Us(t)>1)return e;const V=ot(t),z=f.getNode().getImmediateChild(k).updateChild(V,r);k===".priority"?m=y.updatePriority(f.getNode(),z):m=y.updateChild(f.getNode(),k,z,V,LS,null)}const w=NS(e,m,f.isFullyInitialized()||je(t),y.filtersNodes()),I=new p_(s,w,a);return VS(n,w,t,s,I,d)}function qm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new p_(s,e,a);if(je(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Eu(e,m,!0,n.filter.filtersNodes());else{const w=Le(t);if(w===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Eu(e,m,d.isFullyInitialized(),d.isFiltered());else{const I=ot(t),k=d.getNode().getImmediateChild(w);let V;if(je(I))V=r;else{const B=y.getCompleteChild(w);B!=null?r_(I)===".priority"&&B.getChild(IS(I)).isEmpty()?V=B:V=B.updateChild(I,r):V=Te.EMPTY_NODE}if(k.equals(V))f=e;else{const B=n.filter.updateChild(d.getNode(),w,V,I,y,u);f=Eu(e,B,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function Jw(n,e){return n.eventCache.isCompleteForChild(e)}function FO(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=It(t,f);Jw(e,Le(y))&&(d=qm(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=It(t,f);Jw(e,Le(y))||(d=qm(n,d,y,m,s,a,u))}),d}function Zw(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Hm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;je(t)?m=r:m=new ht(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((w,I)=>{if(y.hasChild(w)){const k=e.serverCache.getNode().getImmediateChild(w),V=Zw(n,k,I);f=wd(n,f,new nt(w),V,s,a,u,d)}}),m.children.inorderTraversal((w,I)=>{const k=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!y.hasChild(w)&&!k){const V=e.serverCache.getNode().getImmediateChild(w),B=Zw(n,V,I);f=wd(n,f,new nt(w),B,s,a,u,d)}}),f}function jO(n,e,t,r,s,a,u){if(Ed(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(je(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return wd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(je(t)){let m=new ht(null);return f.getNode().forEachChild(Ua,(y,w)=>{m=m.set(new nt(y),w)}),Hm(n,e,t,m,s,a,d,u)}else return e}else{let m=new ht(null);return r.foreach((y,w)=>{const I=It(t,y);f.isCompleteForPath(I)&&(m=m.set(y,f.getNode().getChild(I)))}),Hm(n,e,t,m,s,a,d,u)}}function UO(n,e,t,r,s){const a=e.serverCache,u=NS(e,a.getNode(),a.isFullyInitialized()||je(t),a.isFiltered());return VS(n,u,t,r,LS,s)}function BO(n,e,t,r,s,a){let u;if(Ed(r,t)!=null)return e;{const d=new p_(r,e,s),f=e.eventCache.getNode();let m;if(je(t)||Le(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=vd(r,Lo(e));else{const w=e.serverCache.getNode();ne(w instanceof Te,"serverChildren would be complete if leaf node"),y=d_(r,w)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Le(t);let w=f_(r,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=f.getImmediateChild(y)),w!=null?m=n.filter.updateChild(f,y,w,ot(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Te.EMPTY_NODE,ot(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=vd(r,Lo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Ed(r,Xe())!=null,Eu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new a_(r.getIndex()),a=oO(r);this.processor_=OO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Te.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),y=new Bs(f,u.isFullyInitialized(),s.filtersNodes()),w=new Bs(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=tf(w,y),this.eventGenerator_=new fO(this.query_)}get query(){return this.query_}}function WO(n){return n.viewCache_.serverCache.getNode()}function $O(n){return yd(n.viewCache_)}function qO(n,e){const t=Lo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!je(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function eI(n){return n.eventRegistrations_.length===0}function HO(n,e){n.eventRegistrations_.push(e)}function tI(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function nI(n,e,t,r){e.type===kr.MERGE&&e.source.queryId!==null&&(ne(Lo(n.viewCache_),"We should always have a full cache before handling merges"),ne(yd(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=LO(n.processor_,s,e,t,r);return MO(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,FS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function GO(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Tt,(a,u)=>{r.push(Za(a,u))}),t.isFullyInitialized()&&r.push(kS(t.getNode())),FS(n,r,t.getNode(),e)}function FS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return pO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id;class jS{constructor(){this.views=new Map}}function KO(n){ne(!Id,"__referenceConstructor has already been defined"),Id=n}function QO(){return ne(Id,"Reference.ts has not been loaded"),Id}function YO(n){return n.views.size===0}function m_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ne(a!=null,"SyncTree gave us an op for an invalid query."),nI(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(nI(u,e,t,r));return a}}function US(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=vd(t,s?r:null),f=!1;d?f=!0:r instanceof Te?(d=d_(t,r),f=!1):(d=Te.EMPTY_NODE,f=!1);const m=tf(new Bs(d,f,!1),new Bs(r,s,!1));return new zO(e,m)}return u}function XO(n,e,t,r,s,a){const u=US(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),HO(u,t),GO(u,t)}function JO(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=zs(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(tI(m,t,r)),eI(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(tI(f,t,r)),eI(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!zs(n)&&a.push(new(QO())(e._repo,e._path)),{removed:a,events:u}}function BS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function xs(n,e){let t=null;for(const r of n.views.values())t=t||qO(r,e);return t}function zS(n,e){if(e._queryParams.loadsAllData())return rf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function WS(n,e){return zS(n,e)!=null}function zs(n){return rf(n)!=null}function rf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;function ZO(n){ne(!Td,"__referenceConstructor has already been defined"),Td=n}function e2(){return ne(Td,"Reference.ts has not been loaded"),Td}let t2=1;class rI{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=NO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $S(n,e,t,r,s){return yO(n.pendingWriteTree_,e,t,r,s),s?ml(n,new Mo(u_(),e,t)):[]}function n2(n,e,t,r){vO(n.pendingWriteTree_,e,t,r);const s=ht.fromObject(t);return ml(n,new el(u_(),e,s))}function Is(n,e,t=!1){const r=EO(n.pendingWriteTree_,e);if(wO(n.pendingWriteTree_,e)){let a=new ht(null);return r.snap!=null?a=a.set(Xe(),!0):Zt(r.children,u=>{a=a.set(new nt(u),!0)}),ml(n,new _d(r.path,a,t))}else return[]}function sc(n,e,t){return ml(n,new Mo(c_(),e,t))}function r2(n,e,t){const r=ht.fromObject(t);return ml(n,new el(c_(),e,r))}function i2(n,e){return ml(n,new ju(c_(),e))}function s2(n,e,t){const r=__(n,t);if(r){const s=y_(r),a=s.path,u=s.queryId,d=Sn(a,e),f=new ju(h_(u),d);return v_(n,a,f)}else return[]}function Sd(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||WS(u,e))){const f=JO(u,e,t,r);YO(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(I,k)=>zs(k));if(y&&!w){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const k=l2(I);for(let V=0;V<k.length;++V){const B=k[V],z=B.query,Z=KS(n,B);n.listenProvider_.startListening(Iu(z),Uu(n,z),Z.hashFn,Z.onComplete)}}}!w&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Iu(e),null):m.forEach(I=>{const k=n.queryToTagMap.get(sf(I));n.listenProvider_.stopListening(Iu(I),k)}))}u2(n,m)}return d}function qS(n,e,t,r){const s=__(n,r);if(s!=null){const a=y_(s),u=a.path,d=a.queryId,f=Sn(u,e),m=new Mo(h_(d),f,t);return v_(n,u,m)}else return[]}function o2(n,e,t,r){const s=__(n,r);if(s){const a=y_(s),u=a.path,d=a.queryId,f=Sn(u,e),m=ht.fromObject(t),y=new el(h_(d),f,m);return v_(n,u,y)}else return[]}function Gm(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(I,k)=>{const V=Sn(I,s);a=a||xs(k,V),u=u||zs(k)});let d=n.syncPointTree_.get(s);d?(u=u||zs(d),a=a||xs(d,Xe())):(d=new jS,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Te.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((k,V)=>{const B=xs(V,Xe());B&&(a=a.updateImmediateChild(k,B))}));const m=WS(d,e);if(!m&&!e._queryParams.loadsAllData()){const I=sf(e);ne(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const k=c2();n.queryToTagMap.set(I,k),n.tagToQueryMap.set(k,I)}const y=nf(n.pendingWriteTree_,s);let w=XO(d,e,t,y,a,f);if(!m&&!u&&!r){const I=zS(d,e);w=w.concat(h2(n,e,I))}return w}function g_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Sn(u,e),m=xs(d,f);if(m)return m});return bS(s,e,a,t,!0)}function a2(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(m,y)=>{const w=Sn(m,t);r=r||xs(y,w)});let s=n.syncPointTree_.get(t);s?r=r||xs(s,Xe()):(s=new jS,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=r!=null,u=a?new Bs(r,!0,!1):null,d=nf(n.pendingWriteTree_,e._path),f=US(s,e,d,a?u.getNode():Te.EMPTY_NODE,a);return $O(f)}function ml(n,e){return HS(e,n.syncPointTree_,null,nf(n.pendingWriteTree_,Xe()))}function HS(n,e,t,r){if(je(n.path))return GS(n,e,t,r);{const s=e.get(Xe());t==null&&s!=null&&(t=xs(s,Xe()));let a=[];const u=Le(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=OS(r,u);a=a.concat(HS(d,f,m,y))}return s&&(a=a.concat(m_(s,n,r,t))),a}}function GS(n,e,t,r){const s=e.get(Xe());t==null&&s!=null&&(t=xs(s,Xe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=OS(r,u),y=n.operationForChild(u);y&&(a=a.concat(GS(y,d,f,m)))}),s&&(a=a.concat(m_(s,n,r,t))),a}function KS(n,e){const t=e.query,r=Uu(n,t);return{hashFn:()=>(WO(e)||Te.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?s2(n,t._path,r):i2(n,t._path);{const a=ib(s,t);return Sd(n,t,null,a)}}}}function Uu(n,e){const t=sf(e);return n.queryToTagMap.get(t)}function sf(n){return n._path.toString()+"$"+n._queryIdentifier}function __(n,e){return n.tagToQueryMap.get(e)}function y_(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new nt(n.substr(0,e))}}function v_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=nf(n.pendingWriteTree_,e);return m_(r,t,s,null)}function l2(n){return n.fold((e,t,r)=>{if(t&&zs(t))return[rf(t)];{let s=[];return t&&(s=BS(t)),Zt(r,(a,u)=>{s=s.concat(u)}),s}})}function Iu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(e2())(n._repo,n._path):n}function u2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=sf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function c2(){return t2++}function h2(n,e,t){const r=e._path,s=Uu(n,e),a=KS(n,t),u=n.listenProvider_.startListening(Iu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ne(!zs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,w)=>{if(!je(m)&&y&&zs(y))return[rf(y).query];{let I=[];return y&&(I=I.concat(BS(y).map(k=>k.query))),Zt(w,(k,V)=>{I=I.concat(V)}),I}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Iu(y),Uu(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new E_(t)}node(){return this.node_}}class w_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=It(this.path_,e);return new w_(this.syncTree_,t)}node(){return g_(this.syncTree_,this.path_)}}const d2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},iI=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return f2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return p2(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},f2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},p2=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},QS=function(n,e,t,r){return I_(e,new w_(t,n),r)},YS=function(n,e,t){return I_(n,new E_(e),t)};function I_(n,e,t){const r=n.getPriority().val(),s=iI(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=iI(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Qt(d,At(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Qt(s))),u.forEachChild(Tt,(d,f)=>{const m=I_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function S_(n,e){let t=e instanceof nt?e:new nt(e),r=n,s=Le(t);for(;s!==null;){const a=za(r.node.children,s)||{children:{},childCount:0};r=new T_(s,r,a),t=ot(t),s=Le(t)}return r}function gl(n){return n.node.value}function XS(n,e){n.node.value=e,Km(n)}function JS(n){return n.node.childCount>0}function m2(n){return gl(n)===void 0&&!JS(n)}function of(n,e){Zt(n.node.children,(t,r)=>{e(new T_(t,n,r))})}function ZS(n,e,t,r){t&&e(n),of(n,s=>{ZS(s,e,!0)})}function g2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oc(n){return new nt(n.parent===null?n.name:oc(n.parent)+"/"+n.name)}function Km(n){n.parent!==null&&_2(n.parent,n.name,n)}function _2(n,e,t){const r=m2(t),s=oi(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Km(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Km(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=/[\[\].#$\/\u0000-\u001F\u007F]/,v2=/[\[\].#$\u0000-\u001F\u007F]/,om=10*1024*1024,C_=function(n){return typeof n=="string"&&n.length!==0&&!y2.test(n)},eC=function(n){return typeof n=="string"&&n.length!==0&&!v2.test(n)},E2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eC(n)},tC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Zd(n)||n&&typeof n=="object"&&oi(n,".sv")},Qm=function(n,e,t,r){af(Wa(n,"value"),e,t)},af=function(n,e,t){const r=t instanceof nt?new Fb(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+So(r));if(typeof e=="function")throw new Error(n+"contains a function "+So(r)+" with contents = "+e.toString());if(Zd(e))throw new Error(n+"contains "+e.toString()+" "+So(r));if(typeof e=="string"&&e.length>om/3&&Ad(e)>om)throw new Error(n+"contains a string greater than "+om+" utf8 bytes "+So(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Zt(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!C_(u)))throw new Error(n+" contains an invalid key ("+u+") "+So(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jb(r,u),af(n,d,r),Ub(r)}),s&&a)throw new Error(n+' contains ".value" child '+So(r)+" in addition to actual children.")}},w2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Mu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!C_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Vb);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&ur(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},nC=function(n,e,t,r){const s=Wa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Zt(e,(u,d)=>{const f=new nt(u);if(af(s,d,It(t,f)),r_(f)===".priority"&&!tC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),w2(s,a)},I2=function(n,e,t){if(Zd(e))throw new Error(Wa(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!tC(e))throw new Error(Wa(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},rC=function(n,e,t,r){if(!eC(t))throw new Error(Wa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},T2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rC(n,e,t)},hu=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},S2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!C_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!E2(t))throw new Error(Wa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lf(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!i_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function iC(n,e,t){lf(n,t),sC(n,r=>i_(r,e))}function cr(n,e,t){lf(n,t),sC(n,r=>ur(r,e)||ur(e,r))}function sC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(A2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function A2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();yu&&Jt("event: "+t.toString()),fl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="repo_interrupt",P2=25;class k2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new C2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gd(),this.transactionQueueTree_=new T_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N2(n,e,t){if(n.stats_=t_(n.repoInfo_),n.forceRestClient_||lb())n.server_=new md(n.repoInfo_,(r,s,a,u)=>{sI(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>oI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Di(n.repoInfo_,e,(r,s,a,u)=>{sI(n,r,s,a,u)},r=>{oI(n,r)},r=>{D2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=fb(n.repoInfo_,()=>new dO(n.stats_,n.server_)),n.infoData_=new aO,n.infoSyncTree_=new rI({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=sc(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),A_(n,"connected",!1),n.serverSyncTree_=new rI({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);cr(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function x2(n){const t=n.infoData_.getNode(new nt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function uf(n){return d2({timestamp:x2(n)})}function sI(n,e,t,r,s){n.dataUpdateCount++;const a=new nt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Hh(t,m=>At(m));u=o2(n.serverSyncTree_,a,f,s)}else{const f=At(t);u=qS(n.serverSyncTree_,a,f,s)}else if(r){const f=Hh(t,m=>At(m));u=r2(n.serverSyncTree_,a,f)}else{const f=At(t);u=sc(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=nl(n,a)),cr(n.eventQueue_,d,u)}function oI(n,e){A_(n,"connected",e),e===!1&&L2(n)}function D2(n,e){Zt(e,(t,r)=>{A_(n,t,r)})}function A_(n,e,t){const r=new nt("/.info/"+e),s=At(t);n.infoData_.updateSnapshot(r,s);const a=sc(n.infoSyncTree_,r,s);cr(n.eventQueue_,r,a)}function R_(n){return n.nextWriteId_++}function b2(n,e,t){const r=a2(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const a=At(s).withIndex(e._queryParams.getIndex());Gm(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=sc(n.serverSyncTree_,e._path,a);else{const d=Uu(n.serverSyncTree_,e);u=qS(n.serverSyncTree_,e._path,a,d)}return cr(n.eventQueue_,e._path,u),Sd(n.serverSyncTree_,e,t,null,!0),a},s=>(ac(n,"get for query "+zt(e)+" failed: "+s),Promise.reject(new Error(s))))}function O2(n,e,t,r,s){ac(n,"set",{path:e.toString(),value:t,priority:r});const a=uf(n),u=At(t,r),d=g_(n.serverSyncTree_,e),f=YS(u,d,a),m=R_(n),y=$S(n.serverSyncTree_,e,f,m,!0);lf(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(I,k)=>{const V=I==="ok";V||An("set at "+e+" failed: "+I);const B=Is(n.serverSyncTree_,m,!V);cr(n.eventQueue_,e,B),Ws(n,s,I,k)});const w=k_(n,e);nl(n,w),cr(n.eventQueue_,w,[])}function M2(n,e,t,r){ac(n,"update",{path:e.toString(),value:t});let s=!0;const a=uf(n),u={};if(Zt(t,(d,f)=>{s=!1,u[d]=QS(It(e,d),At(f),n.serverSyncTree_,a)}),s)Jt("update() called with empty data.  Don't do anything."),Ws(n,r,"ok",void 0);else{const d=R_(n),f=n2(n.serverSyncTree_,e,u,d);lf(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const w=m==="ok";w||An("update at "+e+" failed: "+m);const I=Is(n.serverSyncTree_,d,!w),k=I.length>0?nl(n,e):e;cr(n.eventQueue_,k,I),Ws(n,r,m,y)}),Zt(t,m=>{const y=k_(n,It(e,m));nl(n,y)}),cr(n.eventQueue_,e,[])}}function L2(n){ac(n,"onDisconnectEvents");const e=uf(n),t=gd();Bm(n.onDisconnect_,Xe(),(s,a)=>{const u=QS(s,a,n.serverSyncTree_,e);pl(t,s,u)});let r=[];Bm(t,Xe(),(s,a)=>{r=r.concat(sc(n.serverSyncTree_,s,a));const u=k_(n,s);nl(n,u)}),n.onDisconnect_=gd(),cr(n.eventQueue_,Xe(),r)}function V2(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Um(n.onDisconnect_,e),Ws(n,t,r,s)})}function aI(n,e,t,r){const s=At(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&pl(n.onDisconnect_,e,s),Ws(n,r,a,u)})}function F2(n,e,t,r,s){const a=At(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&pl(n.onDisconnect_,e,a),Ws(n,s,u,d)})}function j2(n,e,t,r){if(qh(t)){Jt("onDisconnect().update() called with empty data.  Don't do anything."),Ws(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Zt(t,(u,d)=>{const f=At(d);pl(n.onDisconnect_,It(e,u),f)}),Ws(n,r,s,a)})}function U2(n,e,t){let r;Le(e._path)===".info"?r=Gm(n.infoSyncTree_,e,t):r=Gm(n.serverSyncTree_,e,t),iC(n.eventQueue_,e._path,r)}function lI(n,e,t){let r;Le(e._path)===".info"?r=Sd(n.infoSyncTree_,e,t):r=Sd(n.serverSyncTree_,e,t),iC(n.eventQueue_,e._path,r)}function B2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(R2)}function ac(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Jt(t,...e)}function Ws(n,e,t,r){e&&fl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function oC(n,e,t){return g_(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function P_(n,e=n.transactionQueueTree_){if(e||cf(n,e),gl(e)){const t=lC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&z2(n,oc(e),t)}else JS(e)&&of(e,t=>{P_(n,t)})}function z2(n,e,t){const r=t.map(m=>m.currentWriteId),s=oC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=Sn(e,y.path);a=a.updateChild(w,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{ac(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,y=y.concat(Is(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();cf(n,S_(n.transactionQueueTree_,e)),P_(n,n.transactionQueueTree_),cr(n.eventQueue_,e,y);for(let I=0;I<w.length;I++)fl(w[I])}else{if(m==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{An("transaction at "+f.toString()+" failed: "+m);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=m}nl(n,e)}},u)}function nl(n,e){const t=aC(n,e),r=oc(t),s=lC(n,t);return W2(n,s,r),r}function W2(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=Sn(t,f.path);let y=!1,w;if(ne(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,w=f.abortReason,s=s.concat(Is(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=P2)y=!0,w="maxretry",s=s.concat(Is(n.serverSyncTree_,f.currentWriteId,!0));else{const I=oC(n,f.path,u);f.currentInputSnapshot=I;const k=e[d].update(I.val());if(k!==void 0){af("transaction failed: Data returned ",k,f.path);let V=At(k);typeof k=="object"&&k!=null&&oi(k,".priority")||(V=V.updatePriority(I.getPriority()));const z=f.currentWriteId,Z=uf(n),Q=YS(V,I,Z);f.currentOutputSnapshotRaw=V,f.currentOutputSnapshotResolved=Q,f.currentWriteId=R_(n),u.splice(u.indexOf(z),1),s=s.concat($S(n.serverSyncTree_,f.path,Q,f.currentWriteId,f.applyLocally)),s=s.concat(Is(n.serverSyncTree_,z,!0))}else y=!0,w="nodata",s=s.concat(Is(n.serverSyncTree_,f.currentWriteId,!0))}cr(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}cf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)fl(r[d]);P_(n,n.transactionQueueTree_)}function aC(n,e){let t,r=n.transactionQueueTree_;for(t=Le(e);t!==null&&gl(r)===void 0;)r=S_(r,t),e=ot(e),t=Le(e);return r}function lC(n,e){const t=[];return uC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function uC(n,e,t){const r=gl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);of(e,s=>{uC(n,s,t)})}function cf(n,e){const t=gl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,XS(e,t.length>0?t:void 0)}of(e,r=>{cf(n,r)})}function k_(n,e){const t=oc(aC(n,e)),r=S_(n.transactionQueueTree_,e);return g2(r,s=>{am(n,s)}),am(n,r),ZS(r,s=>{am(n,s)}),t}function am(n,e){const t=gl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ne(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ne(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Is(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?XS(e,void 0):t.length=a+1,cr(n.eventQueue_,oc(e),s);for(let u=0;u<r.length;u++)fl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function q2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${t}' in query '${n}'`)}return e}const uI=function(n,e){const t=H2(n),r=t.namespace;t.domain==="firebase.com"&&ji(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ji("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ZD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new nt(t.pathString)}},H2=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(y,w)),y<w&&(s=$2(n.substring(y,w)));const I=q2(n.substring(Math.min(n.length,w)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const V=e.indexOf(".");r=e.substring(0,V).toLowerCase(),t=e.substring(V+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+zt(this.snapshot.exportVal())}}class K2{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Xr;return V2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){hu("OnDisconnect.remove",this._path);const e=new Xr;return aI(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){hu("OnDisconnect.set",this._path),Qm("OnDisconnect.set",e,this._path);const t=new Xr;return aI(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){hu("OnDisconnect.setWithPriority",this._path),Qm("OnDisconnect.setWithPriority",e,this._path),I2("OnDisconnect.setWithPriority",t);const r=new Xr;return F2(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){hu("OnDisconnect.update",this._path),nC("OnDisconnect.update",e,this._path);const t=new Xr;return j2(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return je(this._path)?null:r_(this._path)}get ref(){return new zi(this._repo,this._path)}get _queryIdentifier(){const e=Gw(this._queryParams),t=Zg(e);return t==="{}"?"default":t}get _queryObject(){return Gw(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof N_))return!1;const t=this._repo===e._repo,r=i_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lb(this._path)}}class zi extends N_{constructor(e,t){super(e,t,new l_,!1)}get parent(){const e=IS(this._path);return e===null?null:new zi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bu{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new nt(e),r=Ym(this.ref,e);return new Bu(this._node.getChild(t),r,Tt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Bu(s,Ym(this.ref,r),Tt)))}hasChild(e){const t=new nt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function iL(n,e){return n=tt(n),n._checkNotDeleted("ref"),e!==void 0?Ym(n._root,e):n._root}function Ym(n,e){return n=tt(n),Le(n._path)===null?T2("child","path",e):rC("child","path",e),new zi(n._repo,It(n._path,e))}function sL(n){return n=tt(n),new Q2(n._repo,n._path)}function oL(n,e){n=tt(n),hu("set",n._path),Qm("set",e,n._path);const t=new Xr;return O2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function aL(n,e){nC("update",e,n._path);const t=new Xr;return M2(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function lL(n){n=tt(n);const e=new cC(()=>{}),t=new hf(e);return b2(n._repo,n,t).then(r=>new Bu(r,new zi(n._repo,n._path),n._queryParams.getIndex()))}class hf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new G2("value",this,new Bu(e.snapshotNode,new zi(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new K2(this,e,t):null}matches(e){return e instanceof hf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Y2(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,w)=>{lI(n._repo,n,d),f(y,w)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new cC(t,a||void 0),d=new hf(u);return U2(n._repo,n,d),()=>lI(n._repo,n,d)}function uL(n,e,t,r){return Y2(n,"value",e,t,r)}KO(zi);ZO(zi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="FIREBASE_DATABASE_EMULATOR_HOST",Xm={};let J2=!1;function Z2(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=$s(a);n.repoInfo_=new fS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function eM(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ji("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=uI(a,s),d=u.repoInfo,f;typeof process<"u"&&kw&&(f=kw[X2]),f?(a=`http://${f}?ns=${d.namespace}`,u=uI(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new cb(n.name,n.options,e);S2("Invalid Firebase Database URL",u),je(u.path)||ji("Database URL must point to the root of a Firebase Database (not including a child path).");const y=nM(d,n,m,new ub(n,t));return new rM(y,n)}function tM(n,e){const t=Xm[e];(!t||t[n.key]!==n)&&ji(`Database ${e}(${n.repoInfo_}) has already been deleted.`),B2(n),delete t[n.key]}function nM(n,e,t,r){let s=Xm[e.name];s||(s={},Xm[e.name]=s);let a=s[n.toURLString()];return a&&ji("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new k2(n,J2,t,r),s[n.toURLString()]=a,a}class rM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zi(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ji("Cannot call "+e+" on a deleted database.")}}function iM(n=lg(),e){const t=Pd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=SI("database");r&&sM(t,...r)}return t}function sM(n,e,t,r={}){n=tt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&bi(r,a.repoInfo_.emulatorOptions))return;ji("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ji('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new zh(zh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:RI(r.mockUserToken,n.app.options.projectId);u=new zh(d)}$s(e)&&(ig(e),sg("Database",!0)),Z2(a,s,r,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(n){GD(Vo),Po(new Ds("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return eM(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Jr(Nw,xw,n),Jr(Nw,xw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM={".sv":"timestamp"};function cL(){return aM}Di.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Di.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};oM();const x_={apiKey:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",authDomain:"discordia-573e7.firebaseapp.com",projectId:"discordia-573e7",appId:"1:757817424564:web:39457c92d2c75e1374f5e1",databaseURL:"https://discordia-573e7-default-rtdb.firebaseio.com",messagingSenderId:"757817424564",measurementId:void 0},hC=["apiKey","authDomain","projectId","appId"].every(n=>!!x_[n]),rl=hC?DI(x_):null,an=rl?Ok(rl):null,cI=rl?xD(rl):null,hL=rl&&x_.databaseURL?iM(rl):null,lM=Object.freeze([{id:"gothic3d",name:"Gótico 3D",color:"#ffae22"},{id:"gold",name:"Dourado Premium",color:"#f5d375"},{id:"bubble",name:"Bubble Magic",color:"#c69af8"},{id:"neon",name:"Neon Cyber",color:"#53deff"},{id:"tech",name:"Futurista Tech",color:"#52e6d6"},{id:"glitch",name:"Glitch Digital",color:"#fd73df"},{id:"ice",name:"Cristal de Gelo",color:"#a8e8ff"},{id:"fire",name:"Fogo Infernal",color:"#ff7744"},{id:"galaxy",name:"Galáxia Cósmica",color:"#bd88ff"},{id:"pixel",name:"Retrô Pixel",color:"#80e783"},{id:"chrome",name:"Chrome Prateado",color:"#e3eaf9"},{id:"royal",name:"Elegante Royal",color:"#f3db98"}]);new Map(lM.map(n=>[n.id,n]));const Ba=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(n),dC=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,128}$/.test(n);function uM(n=[],e=""){return[...new Set(n.filter(t=>(t==null?void 0:t.toUid)===e&&(t==null?void 0:t.status)==="accepted"&&Ba(t==null?void 0:t.serverId)).map(t=>t.serverId))].slice(0,100)}function Jm(n,e){return!!n&&Array.isArray(n.memberUids)&&n.memberUids.includes(e)&&Array.isArray(n.bannedUids??[])&&!(n.bannedUids??[]).includes(e)}function fC(n,e=typeof localStorage>"u"?null:localStorage){if(!dC(n)||!e)return[];try{const t=JSON.parse(e.getItem("discordia_known_server_ids_rc103_"+n)||"[]");return Array.isArray(t)?[...new Set(t.filter(Ba))].slice(0,100):[]}catch{return[]}}function Zm(n,e,t=typeof localStorage>"u"?null:localStorage){if(!dC(n)||!Ba(e)||!t)return!1;const r=fC(n,t);if(r.includes(e))return!1;try{return t.setItem("discordia_known_server_ids_rc103_"+n,JSON.stringify([...r,e].slice(-100))),typeof window<"u"&&t===window.localStorage&&window.dispatchEvent(new CustomEvent("discordia:server-discovery-updated",{detail:{uid:n,id:e}})),!0}catch{return!1}}async function cM({invite:n,uid:e,loadInvite:t,requestMembership:r,readJoinedServer:s}={}){if(!n||n.toUid!==e||n.status!=="accepted"||!n.serverId||n.id!==n.serverId+"_"+e)throw new Error("Convite inválido. Solicite um novo convite ao responsável.");const a=await t();if(!a||a.status!=="accepted"||a.toUid!==e||a.serverId!==n.serverId)throw new Error("Este convite não está mais válido. Peça um novo ao responsável.");let u=null;try{await r()}catch(m){u=m}let d=null,f=null;try{d=await s()}catch(m){f=m}if((d==null?void 0:d.id)===n.serverId&&Array.isArray(d.memberUids)&&d.memberUids.includes(e)&&!(d.bannedUids||[]).includes(e)&&!Object.hasOwn(d,"deletingAt")&&!Object.hasOwn(d,"deletionOwnerUid"))return d;throw u||f||new Error("A entrada ainda não foi confirmada pelo servidor. Tente novamente.")}const hM=n=>`DISC-${n}`,dM=n=>String(n||"").trim().replace(/^@/,"").toLowerCase(),hI=n=>/^[a-z][a-z0-9_]{2,15}$/.test(n),fM=n=>String(n||"").trim().replace(/^DISC-/i,""),$t=()=>{if(!cI)throw new Error("Configure o Firebase antes de continuar.");return cI},D_=(n,e)=>[n,e].sort().join("_"),eg=(n,e)=>`${n}_${e}`;async function pM(n,e){const t=$t(),r=un(t,"publicProfiles",n.uid),s=await Nr(r),a={uid:n.uid,peerId:hM(n.uid),displayName:String(e).trim().slice(0,50)||"Amigo"};s.exists()?s.data().displayName!==a.displayName&&await Xa(r,{displayName:a.displayName}):await Jd(r,{...a,presence:"offline",lastSeenAt:Hn(),createdAt:Hn()})}async function mM(n,e){const t=dM(n);let r=fM(n);if(hI(t)){const a=await Nr(un($t(),"handles",t));if(!a.exists())throw new Error("Nenhuma conta encontrada com esse @identificador.");r=a.data().uid}else if(!/^[A-Za-z0-9]{20,128}$/.test(r))throw new Error("Informe @identificador ou o ID DISC-... completo.");if(r===e)throw new Error("Você não pode se adicionar.");const s=await Nr(un($t(),"publicProfiles",r));if(!s.exists()||hI(t)&&s.data().handle!==t)throw new Error("Nenhuma conta encontrada com esse ID.");return s.data()}async function gM(n,e){const t=await mM(e,n);if((await Nr(un($t(),"users",n,"blocks",t.uid))).exists())throw new Error("Desbloqueie essa pessoa antes de enviar uma solicitação.");const r=un($t(),"friendRequests",eg(n,t.uid)),s=await Nr(un($t(),"friendRequests",eg(t.uid,n)));if(s.exists())throw new Error(s.data().status==="pending"?"Você já recebeu uma solicitação dessa pessoa. Aceite-a na lista.":"Já existe uma relação com esta pessoa.");if((await Nr(r)).exists())throw new Error("Essa solicitação já foi enviada.");return await Jd(r,{fromUid:n,toUid:t.uid,status:"pending",createdAt:Hn(),updatedAt:Hn()}),t}async function _M(n,e,t){if(n.toUid!==e||n.status!=="pending")throw new Error("Solicitação inválida.");await Xa(un($t(),"friendRequests",eg(n.fromUid,n.toUid)),{status:t?"accepted":"rejected",updatedAt:Hn()})}function yM(n,e,t,r=()=>{}){const s=new Map,a=new Map,u=()=>e([...s.values(),...a.values()]),d=(y,w,I)=>{y.clear(),w.docs.forEach(k=>y.set(k.id,{id:k.id,...k.data()})),r(I),u()},f=xi(Do(Or($t(),"friendRequests"),hd("toUid","==",n),bo(100)),y=>d(s,y,"incoming"),y=>t(y,"incoming")),m=xi(Do(Or($t(),"friendRequests"),hd("fromUid","==",n),bo(100)),y=>d(a,y,"outgoing"),y=>t(y,"outgoing"));return()=>{f(),m()}}function vM(n,e,t){return xi(un($t(),"publicProfiles",n),r=>e(r.exists()?r.data({serverTimestamps:"estimate"}):null),t)}async function EM(n,e){const t=[n,e].sort(),r=un($t(),"dmRooms",D_(n,e));return(await Nr(r)).exists()||await Jd(r,{members:t,createdAt:Hn()}),r.id}const pC=n=>{var r,s;const e=n.data(),t=(s=(r=e.createdAt)==null?void 0:r.toDate)==null?void 0:s.call(r);return{id:n.id,...e,sender:e.senderName||"Amigo",avatar:"💬",time:(t==null?void 0:t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}))||"Agora",dateLabel:(t==null?void 0:t.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}))||"Hoje"}},mC=["💜","🔥","😂","👍","😮","🎮","✨","❤️"],gC=(n,e)=>{var s;const t=[...new Set([...String(n).matchAll(/:([a-z0-9_]{1,22}):/g)].map(a=>a[1]))].slice(0,4),r={};for(const a of t){const u=((s=e==null?void 0:e.find(d=>d.name===a))==null?void 0:s.image)||"";/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(u)&&u.length<3e4&&(r[a]=u)}return r};function b_(n,e,t,r,s){const a=$t();return n==="dm"?Or(a,"dmRooms",D_(e,t),"messages"):Or(a,"servers",r,"channels",s,"messages")}async function wM(n,e,t,r,s,a,u){const d=String(u||"").trim().slice(0,2e3);if(!d)throw new Error("A mensagem não pode ficar vazia.");await Xa(un(b_(e,n,t,r,s),a),{text:d,editedAt:Hn()})}async function IM(n,e,t,r,s,a,u){var m;if(!mC.includes(u))throw new Error("Reação inválida.");const d=un(b_(e,n,t,r,s),a.id),f=((m=a.reactions)==null?void 0:m[n])===u;await Xa(d,{[`reactions.${n}`]:f?qD():u})}async function TM(n,e,t,r,s,a){await WD(un(b_(e,n,t,r,s),a))}function SM(n,e,t,r){const s=D_(n,e);return xi(Do(Or($t(),"dmRooms",s,"messages"),K0("createdAt","desc"),bo(100)),a=>t(a.docs.map(pC).reverse()),r)}async function CM(n,e,t,r,s=[]){const a=await EM(n,e);await X0(Or($t(),"dmRooms",a,"messages"),{senderUid:n,senderName:String(t).slice(0,50),text:String(r).trim().slice(0,2e3),customEmojiData:gC(r,s),reactions:{},createdAt:Hn()})}function AM(n,e,t){const r=$t(),s=new Set,a=new Set,u=new Set(fC(n)),d=new Map,f=new Map,m=[],y=new Set,w=async Z=>{if(y.has(Z))return;y.add(Z);const Q=un(r,"serverOwnerIndex",n,"servers",Z);try{(await Nr(Q)).exists()||await Jd(Q,{ownerUid:n,serverId:Z})}catch(te){!I&&(te==null?void 0:te.code)!=="permission-denied"&&(te==null?void 0:te.code)!=="not-found"&&(t==null||t(te))}};let I=!1;const k=()=>{I||e([...d.values()].sort((Z,Q)=>String(Z.name||"").localeCompare(String(Q.name||""),"pt-BR")))},V=()=>{if(I)return;const Z=new Set([...s,...a,...u].filter(Ba));for(const[Q,te]of f)Z.has(Q)||(te(),f.delete(Q),d.delete(Q));for(const Q of Z){if(f.has(Q))continue;const te=xi(un(r,"servers",Q),ae=>{if(I)return;const Ge=ae.exists()?ae.data():null;Jm(Ge,n)?(d.set(Q,{id:Q,...Ge}),Zm(n,Q),Ge.ownerUid===n&&!Object.prototype.hasOwnProperty.call(Ge,"deletingAt")&&w(Q)):d.delete(Q),k()},ae=>{d.delete(Q),k(),(ae==null?void 0:ae.code)!=="permission-denied"&&(ae==null?void 0:ae.code)!=="not-found"&&(t==null||t(ae))});f.set(Q,te)}k()},B=Do(Or(r,"serverOwnerIndex",n,"servers"),bo(100));m.push(xi(B,Z=>{s.clear(),Z.docs.forEach(Q=>{var te,ae;Ba(Q.id)&&((te=Q.data())==null?void 0:te.serverId)===Q.id&&((ae=Q.data())==null?void 0:ae.ownerUid)===n&&s.add(Q.id)}),V()},Z=>{(Z==null?void 0:Z.code)!=="permission-denied"&&(t==null||t(Z)),V()})),m.push(xi(Do(Or(r,"serverInvites"),hd("toUid","==",n),bo(100)),Z=>{a.clear(),uM(Z.docs.map(Q=>Q.data()),n).forEach(Q=>a.add(Q)),V()},Z=>{(Z==null?void 0:Z.code)!=="permission-denied"&&(t==null||t(Z)),V()}));const z=Z=>{var Q;((Q=Z==null?void 0:Z.detail)==null?void 0:Q.uid)!==n||!Ba(Z.detail.id)||(u.add(Z.detail.id),V())};return typeof window<"u"&&window.addEventListener("discordia:server-discovery-updated",z),V(),()=>{I=!0,typeof window<"u"&&window.removeEventListener("discordia:server-discovery-updated",z),m.forEach(Z=>Z()),f.forEach(Z=>Z()),f.clear(),d.clear()}}function RM(n,e,t,r){return xi(Do(Or($t(),"servers",n,"channels",e,"messages"),K0("createdAt","desc"),bo(100)),s=>t(s.docs.map(pC).reverse()),r)}async function PM(n,e,t,r,s,a=[]){await X0(Or($t(),"servers",e,"channels",t,"messages"),{senderUid:n,senderName:String(r).slice(0,50),text:String(s).trim().slice(0,2e3),customEmojiData:gC(s,a),reactions:{},createdAt:Hn()})}function kM(n,e,t){return xi(Do(Or($t(),"serverInvites"),hd("toUid","==",n),bo(100)),r=>e(r.docs.map(s=>({id:s.id,...s.data()}))),t)}async function NM(n,e,t){if(n.toUid!==e||!["pending","accepted"].includes(n.status))throw new Error("Convite inválido.");const r=$t(),s=un(r,"serverInvites",n.id),a=un(r,"servers",n.serverId);if(!t){if(n.status!=="pending")throw new Error("Este convite já foi aceito.");await Xa(s,{status:"rejected",updatedAt:Hn()});return}if(n.status==="accepted")try{const d=await cM({invite:n,uid:e,loadInvite:async()=>{const f=await Nr(s);return f.exists()?f.data():null},requestMembership:()=>Xa(a,{memberUids:Pw(e),[`memberJoinedAt.${e}`]:Hn()}),readJoinedServer:async()=>{const f=await Nr(a),m=f.exists()?f.data():null;return Jm(m,e)?{id:f.id,...m}:null}});return Zm(e,n.serverId),d}catch(d){throw(d==null?void 0:d.code)==="permission-denied"?new Error("A entrada foi negada pelo servidor. O convite pode estar revogado, você pode estar banido ou a comunidade pode estar bloqueada. Peça ao responsável um novo convite."):new Error((d==null?void 0:d.message)||"Não foi possível concluir a entrada. Tente novamente.")}if(n.inviteVersion!==2)throw new Error("Convite antigo sem comprovação de segurança. Peça ao responsável um novo convite.");const u=HD(r);u.update(s,{status:"accepted",updatedAt:Hn()}),u.update(a,{memberUids:Pw(e),[`memberJoinedAt.${e}`]:Hn()});try{await u.commit();const d=await Nr(a),f=d.exists()?d.data():null;if(!Jm(f,e))throw new Error("Convite aceito, mas a participação ainda não foi confirmada. Use Concluir entrada para recuperar.");return Zm(e,n.serverId),{id:d.id,...f}}catch(d){const f=(d==null?void 0:d.code)==="permission-denied"?"A entrada não foi autorizada. O convite pode estar inválido ou sua conta pode não ter permissão; solicite ajuda ao responsável pelo servidor.":(d==null?void 0:d.message)||"Não foi possível confirmar sua entrada no servidor. Tente novamente.";throw new Error(f)}}const xM="/assets/discordia-orbit-DRQ15dZr.png",dI={screen:E.jsxs(E.Fragment,{children:[E.jsx("rect",{x:"3",y:"4",width:"18",height:"13",rx:"2"}),E.jsx("path",{d:"M8 21h8m-4-4v4"})]}),fullscreen:E.jsx(E.Fragment,{children:E.jsx("path",{d:"M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m13-5v4a1 1 0 0 1-1 1h-4"})}),shrink:E.jsx(E.Fragment,{children:E.jsx("path",{d:"M8 3v5H3m5 0L3 3m13 0v5h5m-5 0 5-5M8 21v-5H3m5 0-5 5m13 0v-5h5m-5 0 5 5"})}),link:E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"}),E.jsx("path",{d:"M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"})]}),copy:E.jsxs(E.Fragment,{children:[E.jsx("rect",{x:"8",y:"8",width:"13",height:"13",rx:"2"}),E.jsx("path",{d:"M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"})]}),users:E.jsxs(E.Fragment,{children:[E.jsx("circle",{cx:"9",cy:"8",r:"4"}),E.jsx("path",{d:"M2 21v-2a6 6 0 0 1 12 0v2m2-17a4 4 0 0 1 0 8m2 2a6 6 0 0 1 4 6v1"})]}),user:E.jsxs(E.Fragment,{children:[E.jsx("circle",{cx:"12",cy:"8",r:"4"}),E.jsx("path",{d:"M4 21v-2a8 8 0 0 1 16 0v2"})]}),video:E.jsxs(E.Fragment,{children:[E.jsx("rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}),E.jsx("path",{d:"m16 10 6-4v12l-6-4"})]}),chat:E.jsx(E.Fragment,{children:E.jsx("path",{d:"M20 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.6-.3-3.6-.8L3 21l1.8-4.7A8.5 8.5 0 1 1 20 11.5Z"})}),mail:E.jsxs(E.Fragment,{children:[E.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),E.jsx("path",{d:"m3 7 9 6 9-6"})]}),lock:E.jsxs(E.Fragment,{children:[E.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),E.jsx("path",{d:"M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"})]}),eye:E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M2 12s3.7-6.5 10-6.5 10 6.5 10 6.5-3.7 6.5-10 6.5S2 12 2 12Z"}),E.jsx("circle",{cx:"12",cy:"12",r:"2.6"})]}),"eye-off":E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M3 3l18 18M10.6 5.6q.7-.1 1.4-.1c6.3 0 10 6.5 10 6.5a16 16 0 0 1-3.6 4.2M6.5 6.6C3.6 8.3 2 12 2 12s3.7 6.5 10 6.5c1.1 0 2.2-.2 3.2-.6"}),E.jsx("path",{d:"M10 10a2.8 2.8 0 0 0 4 4"})]}),headphones:E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M3 13v-2a9 9 0 0 1 18 0v2"}),E.jsx("rect",{x:"2",y:"12",width:"4",height:"8",rx:"2"}),E.jsx("rect",{x:"18",y:"12",width:"4",height:"8",rx:"2"})]}),"arrow-up-right":E.jsx(E.Fragment,{children:E.jsx("path",{d:"M7 17 17 7M8 7h9v9"})}),"volume-2":E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5Z"}),E.jsx("path",{d:"M15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"})]}),"volume-x":E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5Z"}),E.jsx("path",{d:"m17 9 5 6m0-6-5 6"})]}),network:E.jsxs(E.Fragment,{children:[E.jsx("circle",{cx:"4",cy:"12",r:"2"}),E.jsx("circle",{cx:"20",cy:"5",r:"2"}),E.jsx("circle",{cx:"20",cy:"19",r:"2"}),E.jsx("path",{d:"M6 11 18 6M6 13l12 5"})]}),send:E.jsx(E.Fragment,{children:E.jsx("path",{d:"m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"})}),exit:E.jsx(E.Fragment,{children:E.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 4 5 5-5 5m5-5H9"})}),plus:E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M12 5v14M5 12h14"}),E.jsx("circle",{cx:"12",cy:"12",r:"10"})]}),arrow:E.jsx(E.Fragment,{children:E.jsx("path",{d:"M5 12h14m-7-7 7 7-7 7"})}),stop:E.jsx(E.Fragment,{children:E.jsx("rect",{x:"5",y:"5",width:"14",height:"14",rx:"3"})}),shield:E.jsxs(E.Fragment,{children:[E.jsx("path",{d:"M12 22s9-4 9-11V5l-9-3-9 3v6c0 7 9 11 9 11Z"}),E.jsx("path",{d:"m9 12 2 2 4-4"})]})};function st({name:n="screen",size:e=19,className:t="",title:r}){return E.jsxs("svg",{className:"room-icon "+t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[dI[n]||dI.screen,r&&E.jsx("title",{children:r})]})}const DM=Object.freeze(["microphone","camera","screen"]);function _C({secureContext:n=!1,mediaDevices:e}={}){const t=e||{};return{microphone:n===!0&&typeof t.getUserMedia=="function",camera:n===!0&&typeof t.getUserMedia=="function",screen:n===!0&&typeof t.getDisplayMedia=="function"}}function bM(n){const e=String((n==null?void 0:n.name)||(n==null?void 0:n.code)||"");return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"Permissão negada ou seleção cancelada pelo navegador.":e==="NotFoundError"||e==="DevicesNotFoundError"?"Nenhuma fonte compatível encontrada neste dispositivo.":e==="NotReadableError"||e==="TrackStartError"?"A fonte de mídia está ocupada ou indisponível.":e==="OverconstrainedError"?"Os recursos solicitados não são compatíveis com este dispositivo.":"Não foi possível iniciar a captura. Verifique as permissões do navegador."}function lm(n){var e;for(const t of((e=n==null?void 0:n.getTracks)==null?void 0:e.call(n))||[])try{t.stop()}catch{}}function OM({mediaDevices:n,secureContext:e,onChange:t=()=>{}}={}){const r=n;let s=null,a=0,u=!1;const d=I=>{u||t(I)};function f(){var k,V,B;if(!s)return;const I=s;s=null;for(const z of((V=(k=I.stream).getTracks)==null?void 0:V.call(k))||[])try{(B=z.removeEventListener)==null||B.call(z,"ended",I.onEnded)}catch{}lm(I.stream)}function m(){u||(a+=1,f(),d({status:"idle",kind:null}))}async function y(I){var Q,te;if(u)return null;if(!DM.includes(I))throw new TypeError("Tipo de captura inválido.");const k=++a;if(f(),!_C({secureContext:e,mediaDevices:r})[I])return d({status:"unsupported",kind:I,message:"Captura indisponível. Use HTTPS ou localhost e um navegador compatível."}),null;d({status:"requesting",kind:I});let B;try{I==="screen"?B=await r.getDisplayMedia({video:{frameRate:{ideal:30,max:30}},audio:!1}):I==="camera"?B=await r.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:24,max:30}},audio:!1}):B=await r.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(ae){return k===a&&!u&&d({status:"error",kind:I,message:bM(ae)}),null}if(u||k!==a)return lm(B),null;const z=((Q=B==null?void 0:B.getTracks)==null?void 0:Q.call(B))||[];if(!z.length)return lm(B),d({status:"error",kind:I,message:"Nenhuma faixa de mídia foi disponibilizada."}),null;const Z=()=>{(s==null?void 0:s.stream)===B&&m()};s={stream:B,kind:I,onEnded:Z};for(const ae of z)(te=ae.addEventListener)==null||te.call(ae,"ended",Z);return d({status:"active",kind:I,hasAudio:z.some(ae=>ae.kind==="audio"),hasVideo:z.some(ae=>ae.kind==="video")}),B}function w(){u=!0,a+=1,f()}return{start:y,stop:m,dispose:w,getStream:()=>(s==null?void 0:s.stream)||null}}const fI={microphone:{icon:"🎙",name:"Microfone",description:"Verifica a permissão de acesso ao microfone."},camera:{icon:"📷",name:"Câmera",description:"Mostra uma prévia local da câmera."},screen:{icon:"▣",name:"Tela",description:"Abre o seletor de tela ou janela do navegador."}};function MM(){var m;const[n,e]=Ee.useState({status:"idle",kind:null}),t=Ee.useRef(null),r=Ee.useRef(null),s=Ee.useMemo(()=>_C({secureContext:typeof window<"u"&&window.isSecureContext===!0,mediaDevices:typeof navigator<"u"?navigator.mediaDevices:void 0}),[]);Ee.useEffect(()=>{const y=OM({mediaDevices:navigator.mediaDevices,secureContext:window.isSecureContext,onChange:e});return r.current=y,()=>{y.dispose(),r.current=null}},[]),Ee.useEffect(()=>{var I;const y=t.current;if(!y)return;const w=n.status==="active"?(I=r.current)==null?void 0:I.getStream():null;if(y.srcObject=w||null,w){const k=y.play();k&&typeof k.catch=="function"&&k.catch(()=>{})}return()=>{y.pause(),y.srcObject=null}},[n.status,n.kind]);function a(y){var w;(w=r.current)==null||w.start(y)}function u(){var y;(y=r.current)==null||y.stop()}const d=n.kind?(m=fI[n.kind])==null?void 0:m.name:"",f=n.status==="active"||n.status==="requesting";return E.jsxs("section",{className:"media-lab","aria-labelledby":"media-lab-title",children:[E.jsxs("div",{className:"lab-heading",children:[E.jsx("div",{className:"lab-orbit","aria-hidden":"true",children:"◉"}),E.jsxs("div",{children:[E.jsx("span",{className:"lab-eyebrow",children:"LABORATÓRIO DE MÍDIA · PRÉVIA PRIVADA"}),E.jsx("h2",{id:"media-lab-title",children:"Teste seus dispositivos"}),E.jsx("p",{children:"Confira a câmera, o microfone e a captura de tela antes da integração com chamadas reais."})]})]}),E.jsxs("div",{className:"lab-privacy",role:"note",children:[E.jsx("strong",{children:"Teste somente local"}),E.jsx("p",{children:"Os dispositivos só são ativados quando você clicar. Este painel não transmite para outras pessoas, não grava vídeo ou áudio e não envia mídia ao Discórdia."})]}),E.jsx("div",{className:"lab-options",children:Object.entries(fI).map(([y,w])=>E.jsxs("button",{type:"button",className:n.kind===y&&f?"lab-option selected":"lab-option",onClick:()=>a(y),disabled:!s[y],"aria-pressed":n.kind===y&&f,children:[E.jsx("span",{className:"lab-option-icon","aria-hidden":"true",children:w.icon}),E.jsx("strong",{children:w.name}),E.jsx("span",{children:w.description}),E.jsx("small",{children:s[y]?n.kind===y&&n.status==="active"?"Capturando localmente":"Clique para testar":"Não disponível neste navegador"})]},y))}),E.jsxs("div",{className:"lab-viewer",children:[E.jsxs("div",{className:"lab-viewer-head",children:[E.jsx("strong",{children:"Prévia dos dispositivos"}),E.jsx("span",{className:n.status==="active"?"lab-live":"lab-off",children:n.status==="active"?"● Captura local ativa":"● Nenhuma transmissão ativa"})]}),E.jsx("div",{className:"lab-stage","aria-live":"polite",children:n.status==="active"&&n.hasVideo?E.jsx("video",{ref:t,autoPlay:!0,playsInline:!0,muted:!0,"aria-label":"Prévia local de "+d}):E.jsxs("div",{className:"lab-placeholder",children:[E.jsx("span",{"aria-hidden":"true",children:n.status==="active"?"🎙":"▤"}),E.jsx("strong",{children:n.status==="requesting"?"Aguardando sua permissão…":n.status==="active"&&n.kind==="microphone"?"Microfone disponível":"Nenhuma prévia em execução"}),E.jsx("p",{children:n.status==="active"&&n.kind==="microphone"?"O microfone foi autorizado. A reprodução é mantida desligada para evitar microfonia.":"Selecione um dispositivo acima para testar localmente."})]})}),(n.status==="error"||n.status==="unsupported")&&E.jsx("p",{role:"alert",className:"lab-error",children:n.message}),E.jsxs("div",{className:"lab-controls",children:[E.jsx("button",{type:"button",onClick:u,disabled:!f,children:"Parar captura"}),E.jsx("small",{children:f?"Ao trocar de teste ou sair desta tela, todas as faixas são encerradas.":"Use HTTPS ou localhost e libere a permissão apenas se desejar."})]})]}),E.jsx("p",{className:"lab-disclaimer",children:"Este laboratório testa apenas dispositivos locais. Salas temporárias têm transmissão de tela P2P e opção experimental de áudio da aba/sistema. Chat de voz nativo dos servidores, TURN e recepção privada SFU ainda não foram homologados na Web."})]})}const LM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://discordia-web-beta.pages.dev",VITE_SFU_BETA_ENABLED:"false",VITE_WEB_PUBLIC_LAUNCH:"true",VITE_WEB_SFU_RECEIVE_ENABLED:"false",VITE_WEB_SIGNUP_ENABLED:"false"},pI="https://web-testers-preview.discordia-ari.pages.dev",mI="https://discordia-web-beta.pages.dev",VM=/^[a-f0-9]{48}$/,FM=28;function lc(n){return typeof n=="string"&&VM.test(n)}function jM(n){return String(n||"").replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,FM)}function dL({storage:n=globalThis.sessionStorage,cryptoSource:e=globalThis.crypto}={}){var a,u;const t="discordia:web:guest-nickname";try{const d=jM((a=n==null?void 0:n.getItem)==null?void 0:a.call(n,t));if(d.length>=2)return d}catch{}let r="Web";try{const d=e.getRandomValues(new Uint8Array(2));r=Array.from(d,f=>f.toString(16).padStart(2,"0")).join("").toUpperCase()}catch{}const s="Convidado "+r;try{(u=n==null?void 0:n.setItem)==null||u.call(n,t,s)}catch{}return s}function tg(n){const e=String(n||"").match(/^\/r\/([a-f0-9]{48})\/?$/);return e?e[1]:""}function UM(n,e){const t=String(n||"").trim();if(lc(t))return t;try{const r=new URL(e),s=new URL(t);return!/^https?:$/.test(r.protocol)||s.origin!==r.origin||s.search||s.hash||s.username||s.password?"":tg(s.pathname)}catch{return""}}function BM(n,e){if(!lc(n))throw Error("INVALID_ROOM_ID");return String(e).replace(/\/$/,"")+"/r/"+n}function O_(n=LM){if(String((n==null?void 0:n.VITE_QUICK_ROOMS_ENABLED)||"")!=="true")return"";const e=String((n==null?void 0:n.VITE_QUICK_ROOM_API_ORIGIN)||"");return String((n==null?void 0:n.VITE_WEB_PUBLIC_LAUNCH)||"")==="true"?e===mI?mI:"":e===pI?pI:""}const yC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://discordia-web-beta.pages.dev",VITE_SFU_BETA_ENABLED:"false",VITE_WEB_PUBLIC_LAUNCH:"true",VITE_WEB_SFU_RECEIVE_ENABLED:"false",VITE_WEB_SIGNUP_ENABLED:"false"};function fL(n,e=yC){const t=O_(e);return!t||!lc(n)?"":t.replace(/^https:/,"wss:")+"/api/rooms/"+n+"/connect"}async function zM({env:n=yC,request:e=fetch,storage:t=globalThis.sessionStorage,origin:r=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",getToken:s=null}={}){const u=O_(n);if(!u)throw Error("QUICK_ROOMS_UNAVAILABLE");const d=String((n==null?void 0:n.VITE_WEB_PUBLIC_LAUNCH)||"")==="true",f={};if(d&&typeof s=="function"){const w=await s();if(w!=null&&w!==""){if(typeof w!="string"||w.length<30||w.length>8192)throw Error("QUICK_ROOM_INVALID_TOKEN");f.Authorization="Bearer "+w}}const m=await e(u+"/api/rooms",{method:"POST",cache:"no-store",redirect:"error",headers:f});if(m.status===429)throw Error("QUICK_ROOM_RATE_LIMITED");if(m.status===503)throw Error("QUICK_ROOM_SERVICE_UNAVAILABLE");if(!m.ok)throw Error("QUICK_ROOM_CREATE_FAILED");const y=await m.json();if(!lc(y==null?void 0:y.roomId)||typeof(y==null?void 0:y.hostKey)!="string"||!/^[a-f0-9]{64}$/.test(y.hostKey))throw Error("QUICK_ROOM_INVALID_RESPONSE");return t.setItem("discordia:room-host:"+y.roomId,y.hostKey),{id:y.roomId,url:BM(y.roomId,r)}}function pL(n,e=globalThis.sessionStorage){var r;if(!lc(n))return"";const t=(r=e==null?void 0:e.getItem)==null?void 0:r.call(e,"discordia:room-host:"+n);return typeof t=="string"&&/^[a-f0-9]{64}$/.test(t)?t:""}function WM(n){switch(n==null?void 0:n.message){case"QUICK_ROOMS_UNAVAILABLE":return"As salas rápidas ainda não foram ativadas neste ambiente.";case"QUICK_ROOM_RATE_LIMITED":return"O limite temporário de criação de salas foi atingido. Tente novamente na próxima hora. Você ainda pode entrar por convite.";case"QUICK_ROOM_SERVICE_UNAVAILABLE":return"O servidor de salas está indisponível neste momento. Tente novamente mais tarde.";case"QUICK_ROOM_INVALID_TOKEN":return"Não foi possível confirmar sua sessão. Atualize a página e tente novamente.";case"QUICK_ROOM_CREATE_FAILED":return"Não foi possível criar a sala agora. Tente novamente.";default:return"Não foi possível conectar à sala. Confira o link ou tente novamente."}}const $M="discordia:desktop-room-auth-v1";function qM(n,e,t){if((n==null?void 0:n.source)!==t||(n==null?void 0:n.origin)!==e)return;const r=n==null?void 0:n.data;if(!r||r.type!==$M)return;if(r.clear===!0)return null;if(typeof r.token!="string"||r.token.length<32||r.token.length>6e3||!/^[A-Za-z0-9_.-]+$/.test(r.token))return;const s=typeof r.displayName=="string"?r.displayName.replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,28):"";return{token:r.token,displayName:s}}function HM(n){return n!=null&&n.token?{uid:"desktop-room-identity",emailVerified:!0,displayName:n.displayName||"Participante Discórdia",roomSessionToken:n.token,getIdToken:async()=>n.token}:null}function on(n){switch(String((n==null?void 0:n.code)||"")){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-email":return"E-mail ou senha inválidos.";case"auth/email-already-in-use":return"Este e-mail já possui uma conta. Use Entrar ou Recupere sua senha.";case"auth/weak-password":return"Senha muito fraca. Escolha outra com pelo menos 8 caracteres.";case"auth/operation-not-allowed":return"Cadastro de novas contas indisponível nesta configuração do Firebase.";case"auth/too-many-requests":return"Muitas tentativas. Tente novamente mais tarde.";case"auth/network-request-failed":case"unavailable":return"Sem conexão. Confira sua internet e tente novamente.";case"permission-denied":return"Você não tem permissão para realizar esta operação.";default:return"Não foi possível concluir a operação. Tente novamente."}}function vC({user:n,section:e,server:t,channel:r,friendUid:s,friendUids:a}){return!(n!=null&&n.uid)||n.emailVerified!==!0?!1:e==="dm"?typeof s=="string"&&s.length>0&&Array.isArray(a)&&a.includes(s)&&s!==n.uid:e==="servers"&&!!(t!=null&&t.id)&&Array.isArray(t.memberUids)&&t.memberUids.includes(n.uid)&&Array.isArray(t.bannedUids??[])&&!(t.bannedUids??[]).includes(n.uid)&&!!(r!=null&&r.id)&&Array.isArray(t.textChannels)&&t.textChannels.some(u=>(u==null?void 0:u.id)===r.id)}function GM(n){if(!vC(n))return"";const{user:e,section:t,server:r,channel:s,friendUid:a}=n;return t==="dm"?`dm:${e.uid}:${a}`:`server:${e.uid}:${r.id}:${s.id}`}function KM(n){var e;try{const t=(e=n==null?void 0:n.toDate)==null?void 0:e.call(n);return t instanceof Date&&!Number.isNaN(t.getTime())?t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}catch{return""}}const QM=Ee.lazy(()=>yI(()=>import("./QuickRoom-CoK10Yip.js"),__vite__mapDeps([0,1]))),YM=Ee.lazy(()=>yI(()=>import("./WebVoiceRoom-COfhhefe.js"),__vite__mapDeps([2,1])));function Ri({small:n=!1}){return E.jsx("img",{className:n?"brand-symbol small":"brand-symbol",src:xM,alt:"Símbolo do Discórdia",draggable:"false"})}function EC({subtitle:n}){return E.jsxs("div",{className:"brand",children:[E.jsx(Ri,{}),E.jsxs("div",{children:[E.jsx("strong",{children:"DISCÓRDIA"}),E.jsx("span",{children:n})]})]})}function gI({onJoinGuest:n,onCreateRoom:e,initialMode:t="login"}){const[r,s]=Ee.useState(t),[a,u]=Ee.useState(""),[d,f]=Ee.useState(""),[m,y]=Ee.useState(""),[w,I]=Ee.useState(""),[k,V]=Ee.useState(""),[B,z]=Ee.useState(!1),[Z,Q]=Ee.useState(""),[te,ae]=Ee.useState(!1);async function Ge(C){if(C.preventDefault(),!(!an||B)){z(!0),Q("");try{await vP(an,d.trim(),m)}catch(x){Q(on(x))}finally{z(!1)}}}async function xe(C){if(C.preventDefault(),!(!an||B)){Q("Cadastro Web ainda não foi liberado na prévia. Use uma conta existente.");return}}async function b(){if(!d.trim()||B||!an){Q("Informe seu e-mail antes de recuperar a senha.");return}z(!0),Q("");try{await yP(an,d.trim()),Q("Se esta conta existir, as instruções serão enviadas por e-mail.")}catch(C){Q(on(C))}finally{z(!1)}}function R(C){C.preventDefault();const x=UM(k,window.location.origin);if(!x){Q("Cole um link de sala do próprio Discórdia.");return}n(x)}return E.jsxs("main",{className:"entrance entrance-v2",id:"inicio",children:[E.jsx("div",{className:"entrance-ambient","aria-hidden":"true"}),E.jsxs("div",{className:"entry-starlight","aria-hidden":"true",children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]}),E.jsxs("header",{className:"entry-nav",children:[E.jsx(EC,{subtitle:"WEB · BETA PÚBLICA"}),E.jsxs("nav",{className:"entry-nav-links","aria-label":"Navegação da versão Web",children:[E.jsxs("span",{className:"entry-preview-badge",children:[E.jsx("i",{})," ","BETA PÚBLICA"]}),E.jsxs("a",{href:"https://discordia-ari.pages.dev/",target:"_blank",rel:"noopener noreferrer",children:["Site oficial ",E.jsx(st,{name:"arrow-up-right",size:16})]})]})]}),E.jsxs("section",{className:"entry-content","aria-labelledby":"entry-title",children:[E.jsxs("span",{className:"entry-overline",children:[E.jsx("span",{className:"entry-live-pulse"})," SUA GALERA, EM QUALQUER TELA"]}),E.jsxs("h1",{id:"entry-title",children:["SUA GALERA.",E.jsx("br",{}),"SEU JOGO.",E.jsx("br",{}),E.jsx("em",{children:"SEU LUGAR."})]}),E.jsx("p",{className:"entry-lead",children:"A conversa começa aqui. Encontre seus amigos, entre com sua conta e compartilhe momentos — ou crie e participe de uma sala por convite, sem cadastro."}),E.jsxs("div",{className:"entry-scene","aria-label":"Ilustração da experiência de uma sala do Discórdia",children:[E.jsxs("div",{className:"entry-scene-top",children:[E.jsxs("div",{className:"entry-scene-dots","aria-hidden":"true",children:[E.jsx("i",{}),E.jsx("i",{}),E.jsx("i",{})]}),E.jsx("span",{children:"DISCÓRDIA · SALA DA GALERA"}),E.jsxs("span",{className:"entry-scene-live",children:[E.jsx("i",{})," CONCEITO VISUAL"]})]}),E.jsxs("div",{className:"entry-scene-body",children:[E.jsxs("div",{className:"entry-scene-rail","aria-hidden":"true",children:[E.jsx(Ri,{small:!0}),E.jsx("span",{children:E.jsx(st,{name:"users",size:19})}),E.jsx("span",{children:E.jsx(st,{name:"chat",size:19})}),E.jsx("span",{children:E.jsx(st,{name:"video",size:19})})]}),E.jsxs("div",{className:"entry-scene-room","aria-hidden":"true",children:[E.jsx("span",{className:"entry-scene-section",children:"SEU ESPAÇO"}),E.jsx("strong",{children:"Nosso lugar"}),E.jsx("div",{className:"entry-scene-channel",children:"# geral"}),E.jsx("div",{className:"entry-scene-channel",children:"# jogos"}),E.jsx("span",{className:"entry-scene-section",children:"SALAS"}),E.jsxs("div",{className:"entry-scene-channel active",children:[E.jsx(st,{name:"headphones",size:15})," Galera reunida"]}),E.jsxs("div",{className:"entry-scene-people",children:[E.jsx("b",{children:"A"}),E.jsx("b",{children:"L"}),E.jsx("b",{children:"F"}),E.jsx("b",{children:"+"})]})]}),E.jsxs("div",{className:"entry-scene-video","aria-hidden":"true",children:[E.jsxs("div",{className:"entry-scene-video-head",children:[E.jsx(st,{name:"video",size:16})," Compartilhando momentos"]}),E.jsxs("div",{className:"entry-scene-video-visual",children:[E.jsx("span",{className:"entry-scene-orbit",children:E.jsx(Ri,{})}),E.jsx("strong",{children:"A PARTIDA COMEÇA AQUI."}),E.jsx("small",{children:"Converse · Jogue · Compartilhe"})]}),E.jsxs("div",{className:"entry-scene-video-controls",children:[E.jsx("span",{children:E.jsx(st,{name:"headphones",size:15})}),E.jsx("span",{children:E.jsx(st,{name:"screen",size:15})}),E.jsx("span",{children:E.jsx(st,{name:"chat",size:15})})]})]})]}),E.jsx("span",{className:"entry-scene-caption",children:"CENA ILUSTRATIVA · NÃO É UMA TRANSMISSÃO REAL"})]}),E.jsxs("div",{className:"entry-trust-row","aria-label":"Recursos do Discórdia Web",children:[E.jsxs("span",{children:[E.jsx(st,{name:"shield",size:17})," Conta existente"]}),E.jsxs("span",{children:[E.jsx(st,{name:"link",size:17})," Crie ou entre sem conta"]}),E.jsxs("span",{children:[E.jsx(st,{name:"screen",size:17})," Compartilhe sua tela"]})]})]}),E.jsxs("section",{className:"login-card login-card-v2","aria-labelledby":"login-title",children:[E.jsxs("div",{className:"login-card-head",children:[E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"BEM-VINDO AO DISCÓRDIA"}),E.jsx("h2",{id:"login-title",children:r==="login"?"Bom ter você aqui.":"Crie seu universo."}),E.jsx("p",{children:r==="login"?"Sua conta do Desktop e Android também funciona aqui.":"Uma conta para continuar suas conversas em todas as telas."})]}),E.jsx("div",{className:"login-card-orbit","aria-hidden":"true",children:E.jsx(Ri,{small:!0})})]}),E.jsxs("div",{className:"auth-mode-switch",role:"group","aria-label":"Escolha a forma de acesso",children:[E.jsx("button",{type:"button",className:r==="login"?"active":"","aria-pressed":r==="login",onClick:()=>{s("login"),Q("")},children:"Entrar"}),E.jsx("button",{type:"button",className:r==="register"?"active":"","aria-pressed":r==="register","aria-disabled":!0,onClick:()=>{{Q("Cadastro Web temporariamente desativado na prévia. Use sua conta existente.");return}},children:"Criar conta"})]}),r==="login"?E.jsx(E.Fragment,{children:E.jsxs("form",{onSubmit:Ge,className:"login-form login-form-v2",children:[E.jsx("label",{htmlFor:"web-email",children:"Seu e-mail"}),E.jsxs("div",{className:"login-input-box",children:[E.jsx(st,{name:"mail",size:19}),E.jsx("input",{id:"web-email",type:"email",autoComplete:"username",inputMode:"email",value:d,maxLength:254,required:!0,placeholder:"voce@exemplo.com",onChange:C=>f(C.target.value)})]}),E.jsxs("div",{className:"login-label-row",children:[E.jsx("label",{htmlFor:"web-password",children:"Senha"}),E.jsx("button",{className:"login-reset-link",type:"button",onClick:b,disabled:!an||B,children:"Esqueceu a senha?"})]}),E.jsxs("div",{className:"login-input-box",children:[E.jsx(st,{name:"lock",size:19}),E.jsx("input",{id:"web-password",type:te?"text":"password",autoComplete:"current-password",value:m,required:!0,onChange:C=>y(C.target.value)}),E.jsx("button",{className:"login-password-toggle",type:"button",onClick:()=>ae(C=>!C),"aria-label":te?"Ocultar senha":"Mostrar senha","aria-pressed":te,children:E.jsx(st,{name:te?"eye-off":"eye",size:19})})]}),E.jsxs("button",{className:"primary login-main-cta",type:"submit",disabled:!an||B,children:[B?"Conectando…":"Entrar no Discórdia",!B&&E.jsx(st,{name:"arrow",size:19})]})]})}):E.jsx(E.Fragment,{children:E.jsxs("form",{onSubmit:xe,className:"register-form register-form-v2",children:[E.jsx("label",{htmlFor:"register-name",children:"Seu nome"}),E.jsx("input",{id:"register-name",value:a,minLength:2,maxLength:50,autoComplete:"name",required:!0,placeholder:"Como quer ser chamado?",onChange:C=>u(C.target.value)}),E.jsx("label",{htmlFor:"register-email",children:"E-mail"}),E.jsx("input",{id:"register-email",type:"email",autoComplete:"email",value:d,maxLength:254,required:!0,onChange:C=>f(C.target.value)}),E.jsx("label",{htmlFor:"register-password",children:"Senha (mínimo 8 caracteres)"}),E.jsx("input",{id:"register-password",type:te?"text":"password",autoComplete:"new-password",value:m,minLength:8,required:!0,onChange:C=>y(C.target.value)}),E.jsx("label",{htmlFor:"register-confirm",children:"Confirmar senha"}),E.jsx("input",{id:"register-confirm",type:te?"text":"password",autoComplete:"new-password",value:w,minLength:8,required:!0,onChange:C=>I(C.target.value)}),E.jsxs("button",{className:"login-password-toggle register-visibility",type:"button",onClick:()=>ae(C=>!C),"aria-pressed":te,children:[E.jsx(st,{name:te?"eye-off":"eye",size:17}),te?"Ocultar senhas":"Mostrar senhas"]}),E.jsxs("button",{className:"primary login-main-cta",type:"submit",disabled:!an||B,children:[B?"Criando…":"Criar conta gratuita"," ",E.jsx(st,{name:"arrow",size:19})]}),E.jsx("small",{children:"Para liberar mensagens e servidores, confirme seu e-mail. O cadastro não libera canais privados automaticamente."})]})}),Z&&E.jsx("p",{className:"notice",role:"status","aria-live":"polite",children:Z}),!an&&E.jsx("p",{className:"login-note",children:"Login temporariamente indisponível. O modo convidado não exige uma conta do Firebase."}),r==="login"&&!0&&E.jsxs("p",{className:"login-register-note",children:[E.jsx(st,{name:"shield",size:15}),"Cadastro de novas contas Web em preparação. Use uma conta existente."]}),E.jsx("div",{className:"entry-separator",children:E.jsx("span",{children:"OU CRIE UMA SALA SEM CONTA"})}),E.jsxs("div",{className:"login-guest-zone",id:"sala-rapida",children:[E.jsxs("div",{className:"login-guest-intro",children:[E.jsx("div",{className:"login-guest-symbol",children:E.jsx(st,{name:"link",size:21})}),E.jsxs("div",{children:[E.jsx("strong",{children:"Recebeu um convite?"}),E.jsx("span",{children:"Entre com seu apelido e assista sem cadastro."})]})]}),E.jsxs("form",{className:"guest-join-form",onSubmit:R,children:[E.jsx("label",{htmlFor:"guest-invite",children:"Link da sala temporária"}),E.jsxs("div",{className:"login-invite-box",children:[E.jsx("input",{id:"guest-invite",placeholder:"Cole o link ou o código da sala",autoComplete:"off",value:k,onChange:C=>V(C.target.value),maxLength:400}),E.jsxs("button",{type:"submit",children:["Entrar como convidado ",E.jsx(st,{name:"arrow-up-right",size:17})]})]})]}),O_()&&E.jsxs("button",{type:"button",className:"entry-create-room",disabled:B,onClick:async()=>{if(!B){z(!0),Q("");try{const C=await e();C!==!0&&Q(typeof C=="string"?C:"Não foi possível criar sua sala agora.")}catch{Q("Falha inesperada ao criar a sala. Atualize a página e tente novamente.")}finally{z(!1)}}},children:[E.jsx(st,{name:"plus",size:19}),B?"Criando sala…":"Criar sala temporária sem conta"]}),E.jsx("p",{className:"entry-public-note",children:"Crie ou entre em salas temporárias sem cadastro. Para acessar servidores, amigos e mensagens privadas, use sua conta."})]}),E.jsxs("footer",{className:"entry-login-footer",children:[E.jsxs("span",{children:[E.jsx(st,{name:"shield",size:16})," ","Salas protegidas por convite"]}),E.jsxs("a",{href:"https://discordia-ari.pages.dev/",target:"_blank",rel:"noopener noreferrer",children:["Conheça o projeto ",E.jsx(st,{name:"arrow-up-right",size:14})]})]})]})]})}function XM({user:n,onRefresh:e,setError:t}){const[r,s]=Ee.useState(!1);async function a(){s(!0);try{await n.reload(),e()}catch(d){t(on(d))}finally{s(!1)}}async function u(){s(!0);try{await EP(n),t("Se permitido, um e-mail de confirmação foi enviado.")}catch(d){t(on(d))}finally{s(!1)}}return E.jsx("main",{className:"center-screen",children:E.jsxs("div",{className:"setup-card",children:[E.jsx(EC,{subtitle:"VERIFICAÇÃO DE CONTA"}),E.jsx("h1",{children:"Confirme seu e-mail"}),E.jsx("p",{children:"Verifique sua caixa de entrada para acessar mensagens e servidores."}),E.jsxs("div",{className:"setup-actions",children:[E.jsx("button",{className:"primary",disabled:r,onClick:a,children:"Já confirmei"}),E.jsx("button",{disabled:r,onClick:u,children:"Reenviar confirmação"}),E.jsx("button",{onClick:()=>void sT(an),children:"Sair"})]})]})})}function JM({item:n,user:e,onReact:t,onEdit:r,onDelete:s,editingId:a,editText:u,setEditText:d,onSave:f,onCancel:m,busy:y}){const w=n.senderUid===e.uid;return E.jsxs("article",{className:w?"chat-message mine":"chat-message",children:[E.jsx("span",{className:"message-avatar","aria-hidden":"true",children:String(n.senderName||"M").charAt(0).toUpperCase()}),E.jsxs("div",{className:"message-body",children:[E.jsxs("div",{className:"message-meta",children:[E.jsx("strong",{children:n.senderName||"Membro"}),E.jsx("time",{children:KM(n.createdAt)})]}),E.jsx("p",{children:n.text||"[Mensagem sem texto]"}),E.jsxs("div",{className:"message-controls",children:[mC.slice(0,4).map(I=>{var k;return E.jsxs("button",{className:((k=n.reactions)==null?void 0:k[e.uid])===I?"chosen-reaction":"","aria-label":"Reagir com "+I,title:"Reagir com "+I,onClick:()=>t(n,I),children:[I," ",Object.values(n.reactions||{}).filter(V=>V===I).length||""]},I)}),w&&E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:()=>r(n),children:"Editar"}),E.jsx("button",{onClick:()=>s(n),disabled:y,children:"Excluir"})]})]}),a===n.id&&E.jsxs("form",{className:"edit-row",onSubmit:I=>f(I,n),children:[E.jsx("input",{"aria-label":"Editar mensagem",maxLength:2e3,value:u,onChange:I=>d(I.target.value)}),E.jsx("button",{className:"primary",disabled:y||!u.trim(),children:"Salvar"}),E.jsx("button",{type:"button",onClick:m,children:"Cancelar"})]})]})]})}function ZM({identity:n,busy:e,error:t,onCreate:r}){return E.jsxs("main",{className:"entrance entrance-v2","aria-label":"Sala integrada Discórdia",children:[E.jsx("div",{className:"entrance-ambient","aria-hidden":"true"}),E.jsxs("section",{className:"login-card login-card-v2",style:{maxWidth:620,margin:"10vh auto 20px"},children:[E.jsx("div",{className:"login-card-head",children:E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"SALA INTEGRADA NO APLICATIVO"}),E.jsx("h1",{children:"Bem-vindo de volta!"}),E.jsxs("p",{children:["Você está no Discórdia Desktop como ",E.jsx("strong",{children:n.displayName||"Membro"}),". Sua conta será confirmada pelo serviço de salas. Não precisa entrar outra vez."]})]})}),E.jsx("button",{type:"button",className:"primary login-main-cta",disabled:e,onClick:()=>void r(),children:e?"Criando sala…":"Criar sala e compartilhar convite"}),t&&E.jsx("p",{role:"alert",className:"notice",children:t}),E.jsx("p",{className:"entry-public-note",children:"Esta sala é temporária. Seu acesso a servidores, mensagens privadas e amigos permanece na interface completa do Desktop."})]})]})}function eL(){var hi;const[n,e]=Ee.useState(void 0),[t,r]=Ee.useState(null);Ee.useEffect(()=>{const $=ce=>{const $e=qM(ce,window.location.origin,window);$e!==void 0&&r($e)};return window.__discordiaRoomIdentityReceiverReady=!0,window.addEventListener("message",$),()=>{window.__discordiaRoomIdentityReceiverReady=!1,window.removeEventListener("message",$)}},[]);const s=HM(t),[a,u]=Ee.useState(()=>tg(window.location.pathname)),[d,f]=Ee.useState("login");Ee.useEffect(()=>{const $=()=>u(tg(window.location.pathname));return window.addEventListener("popstate",$),()=>window.removeEventListener("popstate",$)},[]);function m($){window.history.pushState({},"","/r/"+$),u($)}function y(){window.history.pushState({},"","/"),u(""),f("login")}function w(){y()}async function I(){if(we)return!1;Ae(!0),De("");try{const $=await zM({getToken:async()=>{const ce=an==null?void 0:an.currentUser;return ce!=null&&ce.uid&&ce.emailVerified===!0?ce.getIdToken():(t==null?void 0:t.token)||null}});return m($.id),!0}catch($){const ce=WM($);return De(ce),ce}finally{Ae(!1)}}const[k,V]=Ee.useState(0),[B,z]=Ee.useState([]),[Z,Q]=Ee.useState([]),[te,ae]=Ee.useState([]),[Ge,xe]=Ee.useState({}),[b,R]=Ee.useState(""),[C,x]=Ee.useState(""),[O,L]=Ee.useState(""),[P,vt]=Ee.useState(""),[Pe,gt]=Ee.useState("servers"),[Je,ie]=Ee.useState({scope:"",items:[]}),[ge,se]=Ee.useState(""),[M,G]=Ee.useState(""),[me,ke]=Ee.useState(""),[be,Ve]=Ee.useState(""),[we,Ae]=Ee.useState(!1),[Qe,De]=Ee.useState(""),[Kn,Mr]=Ee.useState("");Ee.useEffect(()=>{if(!an){e(null);return}return TP(an,e,()=>e(null))},[]);const en=!!(n!=null&&n.uid)&&n.emailVerified===!0;Ee.useEffect(()=>{if(!en||!(n!=null&&n.uid))return;const $="discordia:web:profile-pending:"+n.uid;try{if(window.localStorage.getItem($)!=="1")return}catch{return}let ce=!0;return pM(n,n.displayName||"Membro").then(()=>{if(ce)try{window.localStorage.removeItem($)}catch{}}).catch($e=>{ce&&De(on($e))}),()=>{ce=!1}},[en,n==null?void 0:n.uid,k]),Ee.useEffect(()=>{if(!en){z([]),Q([]);return}const $=rt=>De(on(rt)),ce=AM(n.uid,z,$),$e=kM(n.uid,Q,$);return()=>{ce(),$e()}},[n==null?void 0:n.uid,en,k]),Ee.useEffect(()=>{if(!en){ae([]);return}return yM(n.uid,ae,$=>De(on($)))},[n==null?void 0:n.uid,en,k]);const vn=Ee.useMemo(()=>[...new Set(te.filter($=>$.status==="accepted").map($=>$.fromUid===(n==null?void 0:n.uid)?$.toUid:$.fromUid).filter($=>typeof $=="string"&&$&&$!==(n==null?void 0:n.uid)))],[te,n==null?void 0:n.uid]),Lr=vn.join("|");Ee.useEffect(()=>{if(!en){xe({});return}const $=Lr?Lr.split("|"):[];xe({});const ce=$.map($e=>vM($e,rt=>xe(hr=>({...hr,[$e]:rt})),rt=>De(on(rt))));return()=>ce.forEach($e=>$e==null?void 0:$e())},[n==null?void 0:n.uid,en,Lr]);const Oe=B.find($=>$.id===b)||B[0]||null,Vr=Array.isArray(Oe==null?void 0:Oe.textChannels)?Oe.textChannels.filter($=>$==null?void 0:$.id):[],at=Vr.find($=>$.id===C)||Vr[0]||null,Fr=Array.isArray(Oe==null?void 0:Oe.voiceChannels)?Oe.voiceChannels.filter($=>$==null?void 0:$.id):[],xt=Fr.find($=>$.id===O)||null,Dt=vn.includes(P)?P:"",Qn=$=>{const ce=Ge[$];return String((ce==null?void 0:ce.displayName)||(ce==null?void 0:ce.name)||(ce!=null&&ce.handle?"@"+ce.handle:"Amigo")).slice(0,50)},ai=te.filter($=>$.status==="pending"&&$.toUid===(n==null?void 0:n.uid)),li={user:n,section:Pe,server:Oe,channel:at,friendUid:Dt,friendUids:vn},Yn=vC(li),lt=GM(li),St=lt&&Je.scope===lt?Je.items:[];Ee.useEffect(()=>{if(ie({scope:lt,items:[]}),ke(""),!lt)return;let $=!0;const ce=hr=>{$&&ie({scope:lt,items:hr})},$e=hr=>{$&&De(on(hr))};let rt;return Pe==="dm"?rt=SM(n.uid,Dt,ce,$e):Pe==="servers"&&(rt=RM(Oe.id,at.id,ce,$e)),()=>{$=!1,rt==null||rt()}},[lt]);function Xn($){gt("servers"),R($),x(""),L(""),se(""),De("")}function Wi($){vn.includes($)&&(gt("dm"),vt($),se(""),De(""))}async function jr($){var $e;$.preventDefault();const ce=ge.trim();if(!(!ce||ce.length>2e3||we||!Yn)){Ae(!0),De("");try{const rt=String(n.displayName||(($e=n.email)==null?void 0:$e.split("@")[0])||"Membro").slice(0,50);Pe==="dm"?await CM(n.uid,Dt,rt,ce):await PM(n.uid,Oe.id,at.id,rt,ce),se("")}catch(rt){De(on(rt))}finally{Ae(!1)}}}async function Ur($,ce){if(!we){Ae(!0),De("");try{await NM($,n.uid,ce)}catch($e){De(on($e))}finally{Ae(!1)}}}async function ui($){if($.preventDefault(),!(!M.trim()||we)){Ae(!0),Mr("");try{await gM(n.uid,M.trim()),G(""),Mr("Solicitação enviada.")}catch(ce){Mr(on(ce))}finally{Ae(!1)}}}async function $i($,ce){if(!we){Ae(!0),De("");try{await _M($,n.uid,ce)}catch($e){De(on($e))}finally{Ae(!1)}}}async function Qs($,ce){if(Yn)try{await IM(n.uid,Pe==="dm"?"dm":"server",Dt,Oe==null?void 0:Oe.id,at==null?void 0:at.id,$,ce)}catch($e){De(on($e))}}async function Ys($,ce){if($.preventDefault(),!(!Yn||ce.senderUid!==n.uid||!be.trim()||we)){Ae(!0);try{await wM(n.uid,Pe==="dm"?"dm":"server",Dt,Oe==null?void 0:Oe.id,at==null?void 0:at.id,ce.id,be.trim()),ke(""),Ve("")}catch($e){De(on($e))}finally{Ae(!1)}}}async function Xs($){if(!(!Yn||$.senderUid!==n.uid||we)&&window.confirm("Excluir esta mensagem para todos?")){Ae(!0);try{await TM(n.uid,Pe==="dm"?"dm":"server",Dt,Oe==null?void 0:Oe.id,at==null?void 0:at.id,$.id)}catch(ce){De(on(ce))}finally{Ae(!1)}}}function qi(){gt("friends"),se(""),De("")}function ci(){sT(an).catch($=>De(on($)))}if(a)return E.jsx(Ee.Suspense,{fallback:E.jsx("main",{className:"center-screen brand-loading-screen",children:E.jsxs("div",{className:"brand-loading",children:[E.jsx(Ri,{}),E.jsx("strong",{children:"DISCÓRDIA"}),E.jsx("span",{children:"Preparando sua sala rápida…"})]})}),children:E.jsx(QM,{roomId:a,user:s||(n!=null&&n.emailVerified?n:null),onExit:y,onAuthRefresh:()=>V($=>$+1),onOpenApp:w},a)});if(t)return E.jsx(ZM,{identity:t,busy:we,error:Qe,onCreate:I});if(!hC||!an)return E.jsx(gI,{initialMode:d,onJoinGuest:m,onCreateRoom:I});if(n===void 0)return E.jsx("main",{className:"center-screen",children:E.jsxs("div",{className:"loading",children:[E.jsx(Ri,{}),E.jsx("p",{children:"Carregando Discórdia Web…"})]})});if(!n)return E.jsx(gI,{initialMode:d,onJoinGuest:m,onCreateRoom:I},d);if(!n.emailVerified)return E.jsxs(E.Fragment,{children:[E.jsx(XM,{user:n,onRefresh:()=>V($=>$+1),setError:De}),Qe&&E.jsx("div",{className:"auth-feedback",role:"status",children:Qe})]});const Hi=Pe==="voice"?"◉ "+((xt==null?void 0:xt.name)||"Canal de voz"):Pe==="media-lab"?"Testes de mídia":Pe==="friends"?"Amigos e mensagens":Pe==="dm"?Qn(Dt):at?"# "+(at.name||"canal"):(Oe==null?void 0:Oe.name)||"Bem-vindo ao Discórdia";return E.jsxs("div",{className:"app-shell",children:[E.jsxs("nav",{className:"server-rail","aria-label":"Servidores e áreas",children:[E.jsx("button",{className:"rail-home","aria-label":"Discórdia, início",title:"Início",onClick:()=>Xn(""),children:E.jsx(Ri,{small:!0})}),E.jsx("span",{className:"rail-divider"}),B.map($=>{var ce;return E.jsx("button",{className:Pe==="servers"&&(Oe==null?void 0:Oe.id)===$.id?"server-icon active":"server-icon",title:$.name||"Servidor","aria-label":$.name||"Servidor",onClick:()=>Xn($.id),children:String($.icon||((ce=$.name)==null?void 0:ce.charAt(0))||"◆").slice(0,2)},$.id)}),E.jsx("button",{className:Pe!=="servers"?"server-icon friends-icon active":"server-icon friends-icon","aria-label":"Amigos",title:"Amigos",onClick:qi,children:E.jsx(st,{name:"users",size:23})}),E.jsx("button",{className:"rail-quick-room","aria-label":"Criar sala temporária por link",title:"Criar sala por link",onClick:()=>void I(),disabled:we,children:E.jsx(st,{name:"link",size:24})}),E.jsx("button",{className:"rail-logout","aria-label":"Sair",title:"Sair da conta",onClick:ci,children:E.jsx(st,{name:"exit",size:23})})]}),E.jsxs("aside",{className:"channel-sidebar","aria-label":"Navegação do espaço",children:[E.jsxs("div",{className:"sidebar-title",children:[E.jsx(Ri,{small:!0}),E.jsxs("div",{children:[E.jsx("strong",{children:Pe==="servers"?(Oe==null?void 0:Oe.name)||"Meus servidores":"Mensagens"}),E.jsx("small",{children:"DISCÓRDIA WEB"})]})]}),Pe==="servers"?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE TEXTO"}),E.jsxs("div",{className:"channel-list",children:[Vr.map($=>E.jsxs("button",{className:$.id===(at==null?void 0:at.id)?"channel-choice active":"channel-choice",onClick:()=>{gt("servers"),x($.id),se("")},children:["# ",E.jsx("span",{children:$.name||"canal"})]},$.id)),!Vr.length&&E.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de texto disponível."})]}),E.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE VOZ · PRÉVIA"}),E.jsxs("div",{className:"channel-list",children:[Fr.map($=>E.jsxs("button",{className:Pe==="voice"&&(xt==null?void 0:xt.id)===$.id?"channel-choice active":"channel-choice",onClick:()=>{gt("voice"),L($.id),se("")},children:["◉ ",E.jsx("span",{children:$.name||"voz"})]},$.id)),!Fr.length&&E.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de voz disponível."})]}),E.jsx("p",{className:"sidebar-empty",children:"Canais de voz e salas por link são serviços diferentes. A voz nativa ainda não foi liberada na Web Beta."})]}):E.jsxs(E.Fragment,{children:[E.jsxs("button",{className:Pe==="friends"?"channel-choice active":"channel-choice",onClick:qi,children:["♧ ",E.jsx("span",{children:"Amigos"})]}),E.jsx("div",{className:"sidebar-subhead",children:"MENSAGENS DIRETAS"}),E.jsx("div",{className:"channel-list",children:vn.map($=>E.jsxs("button",{className:Pe==="dm"&&$===Dt?"channel-choice active":"channel-choice",onClick:()=>Wi($),children:["◉ ",E.jsx("span",{children:Qn($)})]},$))})]}),Pe!=="voice"&&E.jsxs("div",{className:"quick-room-launch",children:[E.jsx("strong",{children:"Sala rápida por link"}),E.jsx("p",{children:"Crie uma sala temporária para assistir à sua tela com convidados."}),E.jsx("button",{type:"button",className:"primary",disabled:we,onClick:()=>void I(),children:we?"Criando sala…":"Criar sala e convidar"})]}),E.jsx("div",{className:"sidebar-subhead",children:"DISPOSITIVOS WEB"}),E.jsxs("button",{type:"button",className:Pe==="media-lab"?"channel-choice active":"channel-choice",onClick:()=>{gt("media-lab"),se(""),De("")},children:["◉ ",E.jsx("span",{children:"Testar microfone, câmera e tela"})]}),E.jsxs("div",{className:"sidebar-user",children:[E.jsx("div",{className:"user-avatar",children:String(n.displayName||n.email||"U").charAt(0).toUpperCase()}),E.jsxs("div",{children:[E.jsx("strong",{children:n.displayName||((hi=n.email)==null?void 0:hi.split("@")[0])||"Usuário"}),E.jsx("small",{children:"Conectado"})]})]})]}),E.jsxs("main",{className:"conversation",children:[E.jsxs("header",{className:"conversation-header",children:[E.jsxs("div",{children:[E.jsx("span",{className:"header-kicker",children:"DISCÓRDIA WEB · BETA PÚBLICA 1"}),E.jsx("h1",{children:Hi})]}),E.jsxs("span",{className:"sync-badge",children:[E.jsx("span",{className:"online-dot"})," Conta autenticada"]})]}),Qe&&E.jsxs("div",{role:"alert",className:"inline-error",children:[E.jsx("span",{children:Qe}),E.jsx("button",{onClick:()=>De(""),children:"Fechar"})]}),Z.filter($=>$.status==="pending").map($=>E.jsxs("div",{className:"invite-banner",children:[E.jsxs("span",{children:["Convite para ",E.jsx("strong",{children:String($.serverName||"servidor").slice(0,70)})]}),E.jsx("button",{disabled:we,onClick:()=>void Ur($,!0),children:"Aceitar"}),E.jsx("button",{disabled:we,onClick:()=>void Ur($,!1),children:"Recusar"})]},$.id)),Pe==="voice"?E.jsx(Ee.Suspense,{fallback:E.jsx("div",{className:"center-screen",children:"Preparando visualizador Web…"}),children:E.jsx(YM,{user:n,server:Oe,channel:xt,onBack:()=>{gt("servers"),se(""),De("")}},n.uid+":"+((Oe==null?void 0:Oe.id)||"")+":"+((xt==null?void 0:xt.id)||""))}):Pe==="media-lab"?E.jsx(MM,{}):Pe==="friends"?E.jsxs("section",{className:"friend-content",children:[E.jsxs("div",{className:"section-heading",children:[E.jsx("h2",{children:"Seus amigos"}),E.jsx("p",{children:"Converse com seus contatos do Desktop e Android."})]}),E.jsxs("form",{className:"friend-form",onSubmit:ui,children:[E.jsx("label",{htmlFor:"web-friend",children:"Adicionar por @identificador"}),E.jsxs("div",{children:[E.jsx("input",{id:"web-friend",value:M,maxLength:130,onChange:$=>G($.target.value),placeholder:"@seuamigo",required:!0}),E.jsx("button",{className:"primary",disabled:we||!M.trim(),children:"Enviar solicitação"})]})]}),Kn&&E.jsx("p",{className:"notice",role:"status",children:Kn}),ai.length>0&&E.jsxs("div",{className:"friend-group",children:[E.jsx("h3",{children:"Solicitações recebidas"}),ai.map($=>E.jsxs("div",{className:"friend-line",children:[E.jsx("strong",{children:Qn($.fromUid)}),E.jsxs("div",{children:[E.jsx("button",{disabled:we,onClick:()=>void $i($,!0),children:"Aceitar"}),E.jsx("button",{disabled:we,onClick:()=>void $i($,!1),children:"Recusar"})]})]},$.id))]}),E.jsxs("div",{className:"friend-group",children:[E.jsx("h3",{children:"Conversas"}),!vn.length&&E.jsx("p",{className:"empty",children:"Seus amigos aparecerão aqui após aceitarem a solicitação."}),vn.map($=>E.jsxs("button",{className:"friend-line clickable",onClick:()=>Wi($),children:[E.jsxs("span",{className:"friend-identity",children:[E.jsx("span",{className:"friend-avatar",children:Qn($).charAt(0).toUpperCase()}),E.jsx("strong",{children:Qn($)})]}),E.jsx("span",{children:"Enviar mensagem →"})]},$))]})]}):E.jsxs(E.Fragment,{children:[E.jsxs("section",{className:"message-scroll","aria-label":"Mensagens","aria-live":"polite",children:[Pe==="servers"&&!Oe&&E.jsxs("div",{className:"empty-state",children:[E.jsx(Ri,{}),E.jsx("h2",{children:"Bem-vindo ao Discórdia Web"}),E.jsx("p",{children:"Os servidores aos quais você tem acesso aparecerão na barra lateral."})]}),Pe==="servers"&&Oe&&!at&&E.jsxs("div",{className:"empty-state",children:[E.jsx("h2",{children:"Sem canal de texto"}),E.jsx("p",{children:"Este servidor ainda não possui canais disponíveis para você."})]}),Pe==="dm"&&!Dt&&E.jsxs("div",{className:"empty-state",children:[E.jsx("h2",{children:"Conversa indisponível"}),E.jsx("p",{children:"Selecione um amigo com solicitação aceita."})]}),Yn&&St.length===0&&E.jsxs("div",{className:"empty-state",children:[E.jsx("h2",{children:"Comece a conversa"}),E.jsx("p",{children:"Suas mensagens serão sincronizadas com as outras plataformas."})]}),St.map($=>E.jsx(JM,{item:$,user:n,onReact:Qs,onEdit:ce=>{ke(ce.id),Ve(ce.text||"")},onDelete:Xs,editingId:me,editText:be,setEditText:Ve,onSave:Ys,onCancel:()=>ke(""),busy:we},$.id))]}),Yn&&E.jsxs("form",{className:"composer",onSubmit:jr,children:[E.jsx("label",{htmlFor:"web-message",children:"Mensagem"}),E.jsxs("div",{className:"composer-inner",children:[E.jsx("input",{id:"web-message",maxLength:2e3,value:ge,onChange:$=>se($.target.value),placeholder:Pe==="dm"?"Mensagem para "+Qn(Dt):"Mensagem em #"+((at==null?void 0:at.name)||"canal")}),E.jsx("button",{type:"submit",className:"primary",disabled:we||!ge.trim(),children:"Enviar"})]}),E.jsx("small",{children:"Mensagens de texto · Sem integração de voz ou transmissão nesta prévia"})]})]})]})]})}class tL extends _I.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){console.error("Discórdia Web: falha ao abrir a interface",e,t)}render(){return this.state.failed?E.jsx("main",{className:"center-screen brand-failure",role:"alert",children:E.jsxs("div",{className:"brand-failure-card",children:[E.jsx("img",{src:"/discordia-orbit.png",alt:"Discórdia",width:"72",height:"72"}),E.jsx("span",{className:"brand-eyebrow",children:"DISCÓRDIA WEB · SALA RÁPIDA"}),E.jsx("h1",{children:"Não foi possível abrir a sala"}),E.jsx("p",{children:"A sala pode ter sido criada, mas a interface não carregou. Você pode tentar novamente sem perder o convite nesta aba."}),E.jsx("button",{className:"primary",type:"button",onClick:()=>window.location.reload(),children:"Tentar novamente"}),E.jsx("p",{children:E.jsx("a",{href:"/",children:"Voltar ao início"})})]})}):this.props.children}}bA.createRoot(document.getElementById("root")).render(E.jsx(_I.StrictMode,{children:E.jsx(tL,{children:E.jsx(eL,{})})}));export{st as R,O_ as a,BM as b,fL as c,pL as d,xM as e,an as f,dL as g,hL as h,iL as i,E as j,oL as k,sL as l,lL as m,jM as n,uL as o,cL as p,Ee as r,vP as s,aL as u};
