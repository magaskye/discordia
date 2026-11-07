(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function IA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fp={exports:{}},Zl={},Up={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function TA(){if(Bv)return Oe;Bv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,B={};function z(M,G,se){this.props=M,this.context=G,this.refs=B,this.updater=se||k}z.prototype.isReactComponent={},z.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},z.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function Z(){}Z.prototype=z.prototype;function Q(M,G,se){this.props=M,this.context=G,this.refs=B,this.updater=se||k}var ie=Q.prototype=new Z;ie.constructor=Q,V(ie,z.prototype),ie.isPureReactComponent=!0;var le=Array.isArray,qe=Object.prototype.hasOwnProperty,Ne={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function C(M,G,se){var ye,ke={},me=null,ze=null;if(G!=null)for(ye in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(me=""+G.key),G)qe.call(G,ye)&&!N.hasOwnProperty(ye)&&(ke[ye]=G[ye]);var Ue=arguments.length-2;if(Ue===1)ke.children=se;else if(1<Ue){for(var je=Array(Ue),it=0;it<Ue;it++)je[it]=arguments[it+2];ke.children=je}if(M&&M.defaultProps)for(ye in Ue=M.defaultProps,Ue)ke[ye]===void 0&&(ke[ye]=Ue[ye]);return{$$typeof:n,type:M,key:me,ref:ze,props:ke,_owner:Ne.current}}function P(M,G){return{$$typeof:n,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function b(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function D(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(se){return G[se]})}var L=/\/+/g;function R(M,G){return typeof M=="object"&&M!==null&&M.key!=null?D(""+M.key):G.toString(36)}function ft(M,G,se,ye,ke){var me=typeof M;(me==="undefined"||me==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(me){case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case n:case e:ze=!0}}if(ze)return ze=M,ke=ke(ze),M=ye===""?"."+R(ze,0):ye,le(ke)?(se="",M!=null&&(se=M.replace(L,"$&/")+"/"),ft(ke,G,se,"",function(it){return it})):ke!=null&&(b(ke)&&(ke=P(ke,se+(!ke.key||ze&&ze.key===ke.key?"":(""+ke.key).replace(L,"$&/")+"/")+M)),G.push(ke)),1;if(ze=0,ye=ye===""?".":ye+":",le(M))for(var Ue=0;Ue<M.length;Ue++){me=M[Ue];var je=ye+R(me,Ue);ze+=ft(me,G,se,je,ke)}else if(je=w(M),typeof je=="function")for(M=je.call(M),Ue=0;!(me=M.next()).done;)me=me.value,je=ye+R(me,Ue++),ze+=ft(me,G,se,je,ke);else if(me==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function kt(M,G,se){if(M==null)return M;var ye=[],ke=0;return ft(M,ye,"","",function(me){return G.call(se,me,ke++)}),ye}function ut(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(se){(M._status===0||M._status===-1)&&(M._status=1,M._result=se)},function(se){(M._status===0||M._status===-1)&&(M._status=2,M._result=se)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var He={current:null},re={transition:null},ge={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ne};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:kt,forEach:function(M,G,se){kt(M,function(){G.apply(this,arguments)},se)},count:function(M){var G=0;return kt(M,function(){G++}),G},toArray:function(M){return kt(M,function(G){return G})||[]},only:function(M){if(!b(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Oe.Component=z,Oe.Fragment=t,Oe.Profiler=s,Oe.PureComponent=Q,Oe.StrictMode=r,Oe.Suspense=f,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Oe.act=ae,Oe.cloneElement=function(M,G,se){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ye=V({},M.props),ke=M.key,me=M.ref,ze=M._owner;if(G!=null){if(G.ref!==void 0&&(me=G.ref,ze=Ne.current),G.key!==void 0&&(ke=""+G.key),M.type&&M.type.defaultProps)var Ue=M.type.defaultProps;for(je in G)qe.call(G,je)&&!N.hasOwnProperty(je)&&(ye[je]=G[je]===void 0&&Ue!==void 0?Ue[je]:G[je])}var je=arguments.length-2;if(je===1)ye.children=se;else if(1<je){Ue=Array(je);for(var it=0;it<je;it++)Ue[it]=arguments[it+2];ye.children=Ue}return{$$typeof:n,type:M.type,key:ke,ref:me,props:ye,_owner:ze}},Oe.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Oe.createElement=C,Oe.createFactory=function(M){var G=C.bind(null,M);return G.type=M,G},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(M){return{$$typeof:d,render:M}},Oe.isValidElement=b,Oe.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:ut}},Oe.memo=function(M,G){return{$$typeof:m,type:M,compare:G===void 0?null:G}},Oe.startTransition=function(M){var G=re.transition;re.transition={};try{M()}finally{re.transition=G}},Oe.unstable_act=ae,Oe.useCallback=function(M,G){return He.current.useCallback(M,G)},Oe.useContext=function(M){return He.current.useContext(M)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(M){return He.current.useDeferredValue(M)},Oe.useEffect=function(M,G){return He.current.useEffect(M,G)},Oe.useId=function(){return He.current.useId()},Oe.useImperativeHandle=function(M,G,se){return He.current.useImperativeHandle(M,G,se)},Oe.useInsertionEffect=function(M,G){return He.current.useInsertionEffect(M,G)},Oe.useLayoutEffect=function(M,G){return He.current.useLayoutEffect(M,G)},Oe.useMemo=function(M,G){return He.current.useMemo(M,G)},Oe.useReducer=function(M,G,se){return He.current.useReducer(M,G,se)},Oe.useRef=function(M){return He.current.useRef(M)},Oe.useState=function(M){return He.current.useState(M)},Oe.useSyncExternalStore=function(M,G,se){return He.current.useSyncExternalStore(M,G,se)},Oe.useTransition=function(){return He.current.useTransition()},Oe.version="18.3.1",Oe}var zv;function ng(){return zv||(zv=1,Up.exports=TA()),Up.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function SA(){if(Wv)return Zl;Wv=1;var n=ng(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,E={},w=null,k=null;m!==void 0&&(w=""+m),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(k=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:d,key:w,ref:k,props:E,_owner:s.current}}return Zl.Fragment=t,Zl.jsx=u,Zl.jsxs=u,Zl}var $v;function CA(){return $v||($v=1,Fp.exports=SA()),Fp.exports}var T=CA(),Ie=ng();const AA=IA(Ie);var Th={},jp={exports:{}},Dn={},Bp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function RA(){return qv||(qv=1,(function(n){function e(re,ge){var ae=re.length;re.push(ge);e:for(;0<ae;){var M=ae-1>>>1,G=re[M];if(0<s(G,ge))re[M]=ge,re[ae]=G,ae=M;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var ge=re[0],ae=re.pop();if(ae!==ge){re[0]=ae;e:for(var M=0,G=re.length,se=G>>>1;M<se;){var ye=2*(M+1)-1,ke=re[ye],me=ye+1,ze=re[me];if(0>s(ke,ae))me<G&&0>s(ze,ke)?(re[M]=ze,re[me]=ae,M=me):(re[M]=ke,re[ye]=ae,M=ye);else if(me<G&&0>s(ze,ae))re[M]=ze,re[me]=ae,M=me;else break e}}return ge}function s(re,ge){var ae=re.sortIndex-ge.sortIndex;return ae!==0?ae:re.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,E=null,w=3,k=!1,V=!1,B=!1,z=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(re){for(var ge=t(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=re)r(m),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(m)}}function le(re){if(B=!1,ie(re),!V)if(t(f)!==null)V=!0,ut(qe);else{var ge=t(m);ge!==null&&He(le,ge.startTime-re)}}function qe(re,ge){V=!1,B&&(B=!1,Z(C),C=-1),k=!0;var ae=w;try{for(ie(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||re&&!D());){var M=E.callback;if(typeof M=="function"){E.callback=null,w=E.priorityLevel;var G=M(E.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?E.callback=G:E===t(f)&&r(f),ie(ge)}else r(f);E=t(f)}if(E!==null)var se=!0;else{var ye=t(m);ye!==null&&He(le,ye.startTime-ge),se=!1}return se}finally{E=null,w=ae,k=!1}}var Ne=!1,N=null,C=-1,P=5,b=-1;function D(){return!(n.unstable_now()-b<P)}function L(){if(N!==null){var re=n.unstable_now();b=re;var ge=!0;try{ge=N(!0,re)}finally{ge?R():(Ne=!1,N=null)}}else Ne=!1}var R;if(typeof Q=="function")R=function(){Q(L)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,kt=ft.port2;ft.port1.onmessage=L,R=function(){kt.postMessage(null)}}else R=function(){z(L,0)};function ut(re){N=re,Ne||(Ne=!0,R())}function He(re,ge){C=z(function(){re(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){V||k||(V=!0,ut(qe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(w){case 1:case 2:case 3:var ge=3;break;default:ge=w}var ae=w;w=ge;try{return re()}finally{w=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,ge){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=w;w=re;try{return ge()}finally{w=ae}},n.unstable_scheduleCallback=function(re,ge,ae){var M=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?M+ae:M):ae=M,re){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,re={id:y++,callback:ge,priorityLevel:re,startTime:ae,expirationTime:G,sortIndex:-1},ae>M?(re.sortIndex=ae,e(m,re),t(f)===null&&re===t(m)&&(B?(Z(C),C=-1):B=!0,He(le,ae-M))):(re.sortIndex=G,e(f,re),V||k||(V=!0,ut(qe))),re},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(re){var ge=w;return function(){var ae=w;w=ge;try{return re.apply(this,arguments)}finally{w=ae}}}})(zp)),zp}var Hv;function PA(){return Hv||(Hv=1,Bp.exports=RA()),Bp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function kA(){if(Gv)return Dn;Gv=1;var n=ng(),e=PA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function w(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function k(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function V(i,o,l,h){if(o===null||typeof o>"u"||k(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function B(i,o,l,h,p,_,I){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=I}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){z[i]=new B(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];z[o]=new B(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){z[i]=new B(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){z[i]=new B(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){z[i]=new B(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){z[i]=new B(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){z[i]=new B(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){z[i]=new B(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){z[i]=new B(i,5,!1,i.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function Q(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(Z,Q);z[o]=new B(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(Z,Q);z[o]=new B(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(Z,Q);z[o]=new B(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){z[i]=new B(i,1,!1,i.toLowerCase(),null,!1,!1)}),z.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){z[i]=new B(i,1,!1,i.toLowerCase(),null,!0,!0)});function ie(i,o,l,h){var p=z.hasOwnProperty(o)?z[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(V(o,l,p,h)&&(l=null),h||p===null?w(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),re=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=re&&i[re]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,M;function G(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var se=!1;function ye(i,o){if(!i||se)return"";se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){h=W}i.call(o.prototype)}else{try{throw Error()}catch(W){h=W}i()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),_=h.stack.split(`
`),I=p.length-1,A=_.length-1;1<=I&&0<=A&&p[I]!==_[A];)A--;for(;1<=I&&0<=A;I--,A--)if(p[I]!==_[A]){if(I!==1||A!==1)do if(I--,A--,0>A||p[I]!==_[A]){var x=`
`+p[I].replace(" at new "," at ");return i.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",i.displayName)),x}while(1<=I&&0<=A);break}}}finally{se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function ke(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=ye(i.type,!1),i;case 11:return i=ye(i.type.render,!1),i;case 1:return i=ye(i.type,!0),i;default:return""}}function me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case Ne:return"Portal";case P:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case ft:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case D:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case L:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case kt:return o=i.displayName||null,o!==null?o:me(i.type)||"Memo";case ut:o=i._payload,i=i._init;try{return me(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ue(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function it(i){var o=je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(I){h=""+I,_.call(this,I)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(I){h=""+I},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Vn(i){i._valueTracker||(i._valueTracker=it(i))}function xe(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=je(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Fn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Je(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Mr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ue(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function an(i,o){o=o.checked,o!=null&&ie(i,"checked",o,!1)}function ln(i,o){an(i,o);var l=Ue(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?si(i,o.type,l):o.hasOwnProperty("defaultValue")&&si(i,o.type,Ue(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function cr(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function si(i,o,l){(o!=="number"||Fn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Qn=Array.isArray;function un(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ue(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Yn(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function oi(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Qn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Ue(l)}}function ai(i,o){var l=Ue(o.value),h=Ue(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ji(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var hr,Bi=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=hr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Lr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ui=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(i){ui.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),li[o]=li[i]})});function zi(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||li.hasOwnProperty(i)&&li[i]?(""+o).trim():o+"px"}function Hs(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=zi(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Gs=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(i,o){if(o){if(Gs[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function q(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function Ye(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var gt=null,zt=null,Vr=null;function jo(i){if(i=Fl(i)){if(typeof gt!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Fc(o),gt(i.stateNode,i.type,o))}}function Fr(i){zt?Vr?Vr.push(i):Vr=[i]:zt=i}function ml(){if(zt){var i=zt,o=Vr;if(Vr=zt=null,jo(i),o)for(i=0;i<o.length;i++)jo(o[i])}}function Ks(i,o){return i(o)}function gl(){}var ci=!1;function _l(i,o,l){if(ci)return i(o,l);ci=!0;try{return Ks(i,o,l)}finally{ci=!1,(zt!==null||Vr!==null)&&(gl(),ml())}}function At(i,o){var l=i.stateNode;if(l===null)return null;var h=Fc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Bo=!1;if(d)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Bo=!1}function Qs(i,o,l,h,p,_,I,A,x){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(X){this.onError(X)}}var Ys=!1,zo=null,fr=!1,yl=null,df={onError:function(i){Ys=!0,zo=i}};function Wo(i,o,l,h,p,_,I,A,x){Ys=!1,zo=null,Qs.apply(df,arguments)}function uc(i,o,l,h,p,_,I,A,x){if(Wo.apply(this,arguments),Ys){if(Ys){var W=zo;Ys=!1,zo=null}else throw Error(t(198));fr||(fr=!0,yl=W)}}function pr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Xs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function mr(i){if(pr(i)!==i)throw Error(t(188))}function cc(i){var o=i.alternate;if(!o){if(o=pr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return mr(p),i;if(_===h)return mr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var I=!1,A=p.child;A;){if(A===l){I=!0,l=p,h=_;break}if(A===h){I=!0,h=p,l=_;break}A=A.sibling}if(!I){for(A=_.child;A;){if(A===l){I=!0,l=_,h=p;break}if(A===h){I=!0,h=_,l=p;break}A=A.sibling}if(!I)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function vl(i){return i=cc(i),i!==null?$o(i):null}function $o(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=$o(i);if(o!==null)return o;i=i.sibling}return null}var qo=e.unstable_scheduleCallback,El=e.unstable_cancelCallback,hc=e.unstable_shouldYield,ff=e.unstable_requestPaint,st=e.unstable_now,dc=e.unstable_getCurrentPriorityLevel,Js=e.unstable_ImmediatePriority,$i=e.unstable_UserBlockingPriority,Xn=e.unstable_NormalPriority,wl=e.unstable_LowPriority,fc=e.unstable_IdlePriority,Zs=null,Un=null;function pc(i){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Zs,i,void 0,(i.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:gc,Il=Math.log,mc=Math.LN2;function gc(i){return i>>>=0,i===0?32:31-(Il(i)/mc|0)|0}var Ho=64,Go=4194304;function qi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function eo(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,I=l&268435455;if(I!==0){var A=I&~p;A!==0?h=qi(A):(_&=I,_!==0&&(h=qi(_)))}else I=l&~p,I!==0?h=qi(I):_!==0&&(h=qi(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-yn(o),p=1<<l,h|=i[l],o&=~p;return h}function pf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hi(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var I=31-yn(_),A=1<<I,x=p[I];x===-1?((A&l)===0||(A&h)!==0)&&(p[I]=pf(A,o)):x<=o&&(i.expiredLanes|=A),_&=~A}}function jn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function to(){var i=Ho;return Ho<<=1,(Ho&4194240)===0&&(Ho=64),i}function Hi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Gi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-yn(o),i[o]=l}function nt(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-yn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ki(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-yn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Be=0;function Qi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var _c,Ko,yc,vc,Ec,Tl=!1,Ur=[],Jt=null,gr=null,_r=null,Yi=new Map,Jn=new Map,jr=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(i,o){switch(i){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Yi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(o.pointerId)}}function Cn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Fl(o),o!==null&&Ko(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function gf(i,o,l,h,p){switch(o){case"focusin":return Jt=Cn(Jt,i,o,l,h,p),!0;case"dragenter":return gr=Cn(gr,i,o,l,h,p),!0;case"mouseover":return _r=Cn(_r,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Yi.set(_,Cn(Yi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Jn.set(_,Cn(Jn.get(_)||null,i,o,l,h,p)),!0}return!1}function Ic(i){var o=oo(i.target);if(o!==null){var l=pr(o);if(l!==null){if(o=l.tag,o===13){if(o=Xs(l),o!==null){i.blockedOn=o,Ec(i.priority,function(){yc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function di(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Qo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);ve=h,l.target.dispatchEvent(h),ve=null}else return o=Fl(l),o!==null&&Ko(o),i.blockedOn=l,!1;o.shift()}return!0}function no(i,o,l){di(i)&&l.delete(o)}function Tc(){Tl=!1,Jt!==null&&di(Jt)&&(Jt=null),gr!==null&&di(gr)&&(gr=null),_r!==null&&di(_r)&&(_r=null),Yi.forEach(no),Jn.forEach(no)}function yr(i,o){i.blockedOn===o&&(i.blockedOn=null,Tl||(Tl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tc)))}function vr(i){function o(p){return yr(p,i)}if(0<Ur.length){yr(Ur[0],i);for(var l=1;l<Ur.length;l++){var h=Ur[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Jt!==null&&yr(Jt,i),gr!==null&&yr(gr,i),_r!==null&&yr(_r,i),Yi.forEach(o),Jn.forEach(o),l=0;l<jr.length;l++)h=jr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<jr.length&&(l=jr[0],l.blockedOn===null);)Ic(l),l.blockedOn===null&&jr.shift()}var fi=le.ReactCurrentBatchConfig,Xi=!0;function pt(i,o,l,h){var p=Be,_=fi.transition;fi.transition=null;try{Be=1,Sl(i,o,l,h)}finally{Be=p,fi.transition=_}}function _f(i,o,l,h){var p=Be,_=fi.transition;fi.transition=null;try{Be=4,Sl(i,o,l,h)}finally{Be=p,fi.transition=_}}function Sl(i,o,l,h){if(Xi){var p=Qo(i,o,l,h);if(p===null)Pf(i,o,h,ro,l),wc(i,h);else if(gf(p,i,o,l,h))h.stopPropagation();else if(wc(i,h),o&4&&-1<mf.indexOf(i)){for(;p!==null;){var _=Fl(p);if(_!==null&&_c(_),_=Qo(i,o,l,h),_===null&&Pf(i,o,h,ro,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Pf(i,o,h,null,l)}}var ro=null;function Qo(i,o,l,h){if(ro=null,i=Ye(h),i=oo(i),i!==null)if(o=pr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Xs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return ro=i,null}function Cl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case Js:return 1;case $i:return 4;case Xn:case wl:return 16;case fc:return 536870912;default:return 16}default:return 16}}var Bn=null,Yo=null,An=null;function Al(){if(An)return An;var i,o=Yo,l=o.length,h,p="value"in Bn?Bn.value:Bn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var I=l-i;for(h=1;h<=I&&o[l-h]===p[_-h];h++);return An=p.slice(i,1<h?1-h:void 0)}function Xo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Br(){return!0}function Rl(){return!1}function Zt(i){function o(l,h,p,_,I){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=I,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Br:Rl,this.isPropagationStopped=Rl,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),o}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=Zt(Er),zr=ae({},Er,{view:0,detail:0}),yf=Zt(zr),Zo,pi,Ji,io=ae({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ji&&(Ji&&i.type==="mousemove"?(Zo=i.screenX-Ji.screenX,pi=i.screenY-Ji.screenY):pi=Zo=0,Ji=i),Zo)},movementY:function(i){return"movementY"in i?i.movementY:pi}}),ea=Zt(io),Pl=ae({},io,{dataTransfer:0}),Sc=Zt(Pl),ta=ae({},zr,{relatedTarget:0}),na=Zt(ta),Cc=ae({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),mi=Zt(Cc),Ac=ae({},Er,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Rc=Zt(Ac),Pc=ae({},Er,{data:0}),kl=Zt(Pc),ra={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=kc[i])?!!o[i]:!1}function Wr(){return Nc}var c=ae({},zr,{key:function(i){if(i.key){var o=ra[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Xo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?vn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wr,charCode:function(i){return i.type==="keypress"?Xo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Xo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Zt(c),v=ae({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=Zt(v),F=ae({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wr}),$=Zt(F),ne=ae({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ze=Zt(ne),Lt=ae({},io,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=Zt(Lt),Wt=[9,13,27,32],Nt=d&&"CompositionEvent"in window,Zn=null;d&&"documentMode"in document&&(Zn=document.documentMode);var zn=d&&"TextEvent"in window&&!Zn,so=d&&(!Nt||Zn&&8<Zn&&11>=Zn),ia=" ",M_=!1;function L_(i,o){switch(i){case"keyup":return Wt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var sa=!1;function vC(i,o){switch(i){case"compositionend":return V_(o);case"keypress":return o.which!==32?null:(M_=!0,ia);case"textInput":return i=o.data,i===ia&&M_?null:i;default:return null}}function EC(i,o){if(sa)return i==="compositionend"||!Nt&&L_(i,o)?(i=Al(),An=Yo=Bn=null,sa=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return so&&o.locale!=="ko"?null:o.data;default:return null}}var wC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!wC[i.type]:o==="textarea"}function U_(i,o,l,h){Fr(h),o=Mc(o,"onChange"),0<o.length&&(l=new Jo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var Nl=null,xl=null;function IC(i){ry(i,0)}function xc(i){var o=ca(i);if(xe(o))return i}function TC(i,o){if(i==="change")return o}var j_=!1;if(d){var vf;if(d){var Ef="oninput"in document;if(!Ef){var B_=document.createElement("div");B_.setAttribute("oninput","return;"),Ef=typeof B_.oninput=="function"}vf=Ef}else vf=!1;j_=vf&&(!document.documentMode||9<document.documentMode)}function z_(){Nl&&(Nl.detachEvent("onpropertychange",W_),xl=Nl=null)}function W_(i){if(i.propertyName==="value"&&xc(xl)){var o=[];U_(o,xl,i,Ye(i)),_l(IC,o)}}function SC(i,o,l){i==="focusin"?(z_(),Nl=o,xl=l,Nl.attachEvent("onpropertychange",W_)):i==="focusout"&&z_()}function CC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return xc(xl)}function AC(i,o){if(i==="click")return xc(o)}function RC(i,o){if(i==="input"||i==="change")return xc(o)}function PC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var wr=typeof Object.is=="function"?Object.is:PC;function Dl(i,o){if(wr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!wr(i[p],o[p]))return!1}return!0}function $_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function q_(i,o){var l=$_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$_(l)}}function H_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?H_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function G_(){for(var i=window,o=Fn();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Fn(i.document)}return o}function wf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function kC(i){var o=G_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&H_(l.ownerDocument.documentElement,l)){if(h!==null&&wf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=q_(l,_);var I=q_(l,h);p&&I&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==I.node||i.focusOffset!==I.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(I.node,I.offset)):(o.setEnd(I.node,I.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var NC=d&&"documentMode"in document&&11>=document.documentMode,oa=null,If=null,bl=null,Tf=!1;function K_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tf||oa==null||oa!==Fn(h)||(h=oa,"selectionStart"in h&&wf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),bl&&Dl(bl,h)||(bl=h,h=Mc(If,"onSelect"),0<h.length&&(o=new Jo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=oa)))}function Dc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var aa={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Sf={},Q_={};d&&(Q_=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function bc(i){if(Sf[i])return Sf[i];if(!aa[i])return i;var o=aa[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Q_)return Sf[i]=o[l];return i}var Y_=bc("animationend"),X_=bc("animationiteration"),J_=bc("animationstart"),Z_=bc("transitionend"),ey=new Map,ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(i,o){ey.set(i,o),a(o,[i])}for(var Cf=0;Cf<ty.length;Cf++){var Af=ty[Cf],xC=Af.toLowerCase(),DC=Af[0].toUpperCase()+Af.slice(1);Zi(xC,"on"+DC)}Zi(Y_,"onAnimationEnd"),Zi(X_,"onAnimationIteration"),Zi(J_,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Z_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ol));function ny(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,uc(h,o,void 0,i),i.currentTarget=null}function ry(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var I=h.length-1;0<=I;I--){var A=h[I],x=A.instance,W=A.currentTarget;if(A=A.listener,x!==_&&p.isPropagationStopped())break e;ny(p,A,W),_=x}else for(I=0;I<h.length;I++){if(A=h[I],x=A.instance,W=A.currentTarget,A=A.listener,x!==_&&p.isPropagationStopped())break e;ny(p,A,W),_=x}}}if(fr)throw i=yl,fr=!1,yl=null,i}function ct(i,o){var l=o[Of];l===void 0&&(l=o[Of]=new Set);var h=i+"__bubble";l.has(h)||(iy(o,i,2,!1),l.add(h))}function Rf(i,o,l){var h=0;o&&(h|=4),iy(l,i,h,o)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Ml(i){if(!i[Oc]){i[Oc]=!0,r.forEach(function(l){l!=="selectionchange"&&(bC.has(l)||Rf(l,!1,i),Rf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Oc]||(o[Oc]=!0,Rf("selectionchange",!1,o))}}function iy(i,o,l,h){switch(Cl(o)){case 1:var p=pt;break;case 4:p=_f;break;default:p=Sl}l=p.bind(null,o,l,i),p=void 0,!Bo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Pf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var I=h.tag;if(I===3||I===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(I===4)for(I=h.return;I!==null;){var x=I.tag;if((x===3||x===4)&&(x=I.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;I=I.return}for(;A!==null;){if(I=oo(A),I===null)return;if(x=I.tag,x===5||x===6){h=_=I;continue e}A=A.parentNode}}h=h.return}_l(function(){var W=_,X=Ye(l),J=[];e:{var Y=ey.get(i);if(Y!==void 0){var ue=Jo,de=i;switch(i){case"keypress":if(Xo(l)===0)break e;case"keydown":case"keyup":ue=g;break;case"focusin":de="focus",ue=na;break;case"focusout":de="blur",ue=na;break;case"beforeblur":case"afterblur":ue=na;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$;break;case Y_:case X_:case J_:ue=mi;break;case Z_:ue=Ze;break;case"scroll":ue=yf;break;case"wheel":ue=We;break;case"copy":case"cut":case"paste":ue=Rc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=S}var fe=(o&4)!==0,Rt=!fe&&i==="scroll",U=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var O=W,j;O!==null;){j=O;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,U!==null&&(ee=At(O,U),ee!=null&&fe.push(Ll(O,ee,j)))),Rt)break;O=O.return}0<fe.length&&(Y=new ue(Y,de,null,l,X),J.push({event:Y,listeners:fe}))}}if((o&7)===0){e:{if(Y=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",Y&&l!==ve&&(de=l.relatedTarget||l.fromElement)&&(oo(de)||de[gi]))break e;if((ue||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ue?(de=l.relatedTarget||l.toElement,ue=W,de=de?oo(de):null,de!==null&&(Rt=pr(de),de!==Rt||de.tag!==5&&de.tag!==6)&&(de=null)):(ue=null,de=W),ue!==de)){if(fe=ea,ee="onMouseLeave",U="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(fe=S,ee="onPointerLeave",U="onPointerEnter",O="pointer"),Rt=ue==null?Y:ca(ue),j=de==null?Y:ca(de),Y=new fe(ee,O+"leave",ue,l,X),Y.target=Rt,Y.relatedTarget=j,ee=null,oo(X)===W&&(fe=new fe(U,O+"enter",de,l,X),fe.target=j,fe.relatedTarget=Rt,ee=fe),Rt=ee,ue&&de)t:{for(fe=ue,U=de,O=0,j=fe;j;j=la(j))O++;for(j=0,ee=U;ee;ee=la(ee))j++;for(;0<O-j;)fe=la(fe),O--;for(;0<j-O;)U=la(U),j--;for(;O--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=la(fe),U=la(U)}fe=null}else fe=null;ue!==null&&sy(J,Y,ue,fe,!1),de!==null&&Rt!==null&&sy(J,Rt,de,fe,!0)}}e:{if(Y=W?ca(W):window,ue=Y.nodeName&&Y.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Y.type==="file")var pe=TC;else if(F_(Y))if(j_)pe=RC;else{pe=CC;var Ee=SC}else(ue=Y.nodeName)&&ue.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(pe=AC);if(pe&&(pe=pe(i,W))){U_(J,pe,l,X);break e}Ee&&Ee(i,Y,W),i==="focusout"&&(Ee=Y._wrapperState)&&Ee.controlled&&Y.type==="number"&&si(Y,"number",Y.value)}switch(Ee=W?ca(W):window,i){case"focusin":(F_(Ee)||Ee.contentEditable==="true")&&(oa=Ee,If=W,bl=null);break;case"focusout":bl=If=oa=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,K_(J,l,X);break;case"selectionchange":if(NC)break;case"keydown":case"keyup":K_(J,l,X)}var we;if(Nt)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else sa?L_(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(so&&l.locale!=="ko"&&(sa||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&sa&&(we=Al()):(Bn=X,Yo="value"in Bn?Bn.value:Bn.textContent,sa=!0)),Ee=Mc(W,Ae),0<Ee.length&&(Ae=new kl(Ae,i,null,l,X),J.push({event:Ae,listeners:Ee}),we?Ae.data=we:(we=V_(l),we!==null&&(Ae.data=we)))),(we=zn?vC(i,l):EC(i,l))&&(W=Mc(W,"onBeforeInput"),0<W.length&&(X=new kl("onBeforeInput","beforeinput",null,l,X),J.push({event:X,listeners:W}),X.data=we))}ry(J,o)})}function Ll(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Mc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=At(i,l),_!=null&&h.unshift(Ll(i,_,p)),_=At(i,o),_!=null&&h.push(Ll(i,_,p))),i=i.return}return h}function la(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function sy(i,o,l,h,p){for(var _=o._reactName,I=[];l!==null&&l!==h;){var A=l,x=A.alternate,W=A.stateNode;if(x!==null&&x===h)break;A.tag===5&&W!==null&&(A=W,p?(x=At(l,_),x!=null&&I.unshift(Ll(l,x,A))):p||(x=At(l,_),x!=null&&I.push(Ll(l,x,A)))),l=l.return}I.length!==0&&i.push({event:o,listeners:I})}var OC=/\r\n?/g,MC=/\u0000|\uFFFD/g;function oy(i){return(typeof i=="string"?i:""+i).replace(OC,`
`).replace(MC,"")}function Lc(i,o,l){if(o=oy(o),oy(i)!==o&&l)throw Error(t(425))}function Vc(){}var kf=null,Nf=null;function xf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,LC=typeof clearTimeout=="function"?clearTimeout:void 0,ay=typeof Promise=="function"?Promise:void 0,VC=typeof queueMicrotask=="function"?queueMicrotask:typeof ay<"u"?function(i){return ay.resolve(null).then(i).catch(FC)}:Df;function FC(i){setTimeout(function(){throw i})}function bf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),vr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);vr(o)}function es(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function ly(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ua=Math.random().toString(36).slice(2),$r="__reactFiber$"+ua,Vl="__reactProps$"+ua,gi="__reactContainer$"+ua,Of="__reactEvents$"+ua,UC="__reactListeners$"+ua,jC="__reactHandles$"+ua;function oo(i){var o=i[$r];if(o)return o;for(var l=i.parentNode;l;){if(o=l[gi]||l[$r]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=ly(i);i!==null;){if(l=i[$r])return l;i=ly(i)}return o}i=l,l=i.parentNode}return null}function Fl(i){return i=i[$r]||i[gi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ca(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Fc(i){return i[Vl]||null}var Mf=[],ha=-1;function ts(i){return{current:i}}function ht(i){0>ha||(i.current=Mf[ha],Mf[ha]=null,ha--)}function ot(i,o){ha++,Mf[ha]=i.current,i.current=o}var ns={},cn=ts(ns),Rn=ts(!1),ao=ns;function da(i,o){var l=i.type.contextTypes;if(!l)return ns;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Pn(i){return i=i.childContextTypes,i!=null}function Uc(){ht(Rn),ht(cn)}function uy(i,o,l){if(cn.current!==ns)throw Error(t(168));ot(cn,o),ot(Rn,l)}function cy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return ae({},l,h)}function jc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ns,ao=cn.current,ot(cn,i),ot(Rn,Rn.current),!0}function hy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=cy(i,o,ao),h.__reactInternalMemoizedMergedChildContext=i,ht(Rn),ht(cn),ot(cn,i)):ht(Rn),ot(Rn,l)}var _i=null,Bc=!1,Lf=!1;function dy(i){_i===null?_i=[i]:_i.push(i)}function BC(i){Bc=!0,dy(i)}function rs(){if(!Lf&&_i!==null){Lf=!0;var i=0,o=Be;try{var l=_i;for(Be=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}_i=null,Bc=!1}catch(p){throw _i!==null&&(_i=_i.slice(i+1)),qo(Js,rs),p}finally{Be=o,Lf=!1}}return null}var fa=[],pa=0,zc=null,Wc=0,er=[],tr=0,lo=null,yi=1,vi="";function uo(i,o){fa[pa++]=Wc,fa[pa++]=zc,zc=i,Wc=o}function fy(i,o,l){er[tr++]=yi,er[tr++]=vi,er[tr++]=lo,lo=i;var h=yi;i=vi;var p=32-yn(h)-1;h&=~(1<<p),l+=1;var _=32-yn(o)+p;if(30<_){var I=p-p%5;_=(h&(1<<I)-1).toString(32),h>>=I,p-=I,yi=1<<32-yn(o)+p|l<<p|h,vi=_+i}else yi=1<<_|l<<p|h,vi=i}function Vf(i){i.return!==null&&(uo(i,1),fy(i,1,0))}function Ff(i){for(;i===zc;)zc=fa[--pa],fa[pa]=null,Wc=fa[--pa],fa[pa]=null;for(;i===lo;)lo=er[--tr],er[tr]=null,vi=er[--tr],er[tr]=null,yi=er[--tr],er[tr]=null}var Wn=null,$n=null,mt=!1,Ir=null;function py(i,o){var l=sr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function my(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Wn=i,$n=es(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Wn=i,$n=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=lo!==null?{id:yi,overflow:vi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=sr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Wn=i,$n=null,!0):!1;default:return!1}}function Uf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function jf(i){if(mt){var o=$n;if(o){var l=o;if(!my(i,o)){if(Uf(i))throw Error(t(418));o=es(l.nextSibling);var h=Wn;o&&my(i,o)?py(h,l):(i.flags=i.flags&-4097|2,mt=!1,Wn=i)}}else{if(Uf(i))throw Error(t(418));i.flags=i.flags&-4097|2,mt=!1,Wn=i}}}function gy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function $c(i){if(i!==Wn)return!1;if(!mt)return gy(i),mt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!xf(i.type,i.memoizedProps)),o&&(o=$n)){if(Uf(i))throw _y(),Error(t(418));for(;o;)py(i,o),o=es(o.nextSibling)}if(gy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){$n=es(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}$n=null}}else $n=Wn?es(i.stateNode.nextSibling):null;return!0}function _y(){for(var i=$n;i;)i=es(i.nextSibling)}function ma(){$n=Wn=null,mt=!1}function Bf(i){Ir===null?Ir=[i]:Ir.push(i)}var zC=le.ReactCurrentBatchConfig;function Ul(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(I){var A=p.refs;I===null?delete A[_]:A[_]=I},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function qc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function yy(i){var o=i._init;return o(i._payload)}function vy(i){function o(U,O){if(i){var j=U.deletions;j===null?(U.deletions=[O],U.flags|=16):j.push(O)}}function l(U,O){if(!i)return null;for(;O!==null;)o(U,O),O=O.sibling;return null}function h(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function p(U,O){return U=hs(U,O),U.index=0,U.sibling=null,U}function _(U,O,j){return U.index=j,i?(j=U.alternate,j!==null?(j=j.index,j<O?(U.flags|=2,O):j):(U.flags|=2,O)):(U.flags|=1048576,O)}function I(U){return i&&U.alternate===null&&(U.flags|=2),U}function A(U,O,j,ee){return O===null||O.tag!==6?(O=Dp(j,U.mode,ee),O.return=U,O):(O=p(O,j),O.return=U,O)}function x(U,O,j,ee){var pe=j.type;return pe===N?X(U,O,j.props.children,ee,j.key):O!==null&&(O.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ut&&yy(pe)===O.type)?(ee=p(O,j.props),ee.ref=Ul(U,O,j),ee.return=U,ee):(ee=mh(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Ul(U,O,j),ee.return=U,ee)}function W(U,O,j,ee){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=bp(j,U.mode,ee),O.return=U,O):(O=p(O,j.children||[]),O.return=U,O)}function X(U,O,j,ee,pe){return O===null||O.tag!==7?(O=yo(j,U.mode,ee,pe),O.return=U,O):(O=p(O,j),O.return=U,O)}function J(U,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Dp(""+O,U.mode,j),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case qe:return j=mh(O.type,O.key,O.props,null,U.mode,j),j.ref=Ul(U,null,O),j.return=U,j;case Ne:return O=bp(O,U.mode,j),O.return=U,O;case ut:var ee=O._init;return J(U,ee(O._payload),j)}if(Qn(O)||ge(O))return O=yo(O,U.mode,j,null),O.return=U,O;qc(U,O)}return null}function Y(U,O,j,ee){var pe=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return pe!==null?null:A(U,O,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case qe:return j.key===pe?x(U,O,j,ee):null;case Ne:return j.key===pe?W(U,O,j,ee):null;case ut:return pe=j._init,Y(U,O,pe(j._payload),ee)}if(Qn(j)||ge(j))return pe!==null?null:X(U,O,j,ee,null);qc(U,j)}return null}function ue(U,O,j,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(j)||null,A(O,U,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case qe:return U=U.get(ee.key===null?j:ee.key)||null,x(O,U,ee,pe);case Ne:return U=U.get(ee.key===null?j:ee.key)||null,W(O,U,ee,pe);case ut:var Ee=ee._init;return ue(U,O,j,Ee(ee._payload),pe)}if(Qn(ee)||ge(ee))return U=U.get(j)||null,X(O,U,ee,pe,null);qc(O,ee)}return null}function de(U,O,j,ee){for(var pe=null,Ee=null,we=O,Ae=O=0,Ht=null;we!==null&&Ae<j.length;Ae++){we.index>Ae?(Ht=we,we=null):Ht=we.sibling;var Ke=Y(U,we,j[Ae],ee);if(Ke===null){we===null&&(we=Ht);break}i&&we&&Ke.alternate===null&&o(U,we),O=_(Ke,O,Ae),Ee===null?pe=Ke:Ee.sibling=Ke,Ee=Ke,we=Ht}if(Ae===j.length)return l(U,we),mt&&uo(U,Ae),pe;if(we===null){for(;Ae<j.length;Ae++)we=J(U,j[Ae],ee),we!==null&&(O=_(we,O,Ae),Ee===null?pe=we:Ee.sibling=we,Ee=we);return mt&&uo(U,Ae),pe}for(we=h(U,we);Ae<j.length;Ae++)Ht=ue(we,U,Ae,j[Ae],ee),Ht!==null&&(i&&Ht.alternate!==null&&we.delete(Ht.key===null?Ae:Ht.key),O=_(Ht,O,Ae),Ee===null?pe=Ht:Ee.sibling=Ht,Ee=Ht);return i&&we.forEach(function(ds){return o(U,ds)}),mt&&uo(U,Ae),pe}function fe(U,O,j,ee){var pe=ge(j);if(typeof pe!="function")throw Error(t(150));if(j=pe.call(j),j==null)throw Error(t(151));for(var Ee=pe=null,we=O,Ae=O=0,Ht=null,Ke=j.next();we!==null&&!Ke.done;Ae++,Ke=j.next()){we.index>Ae?(Ht=we,we=null):Ht=we.sibling;var ds=Y(U,we,Ke.value,ee);if(ds===null){we===null&&(we=Ht);break}i&&we&&ds.alternate===null&&o(U,we),O=_(ds,O,Ae),Ee===null?pe=ds:Ee.sibling=ds,Ee=ds,we=Ht}if(Ke.done)return l(U,we),mt&&uo(U,Ae),pe;if(we===null){for(;!Ke.done;Ae++,Ke=j.next())Ke=J(U,Ke.value,ee),Ke!==null&&(O=_(Ke,O,Ae),Ee===null?pe=Ke:Ee.sibling=Ke,Ee=Ke);return mt&&uo(U,Ae),pe}for(we=h(U,we);!Ke.done;Ae++,Ke=j.next())Ke=ue(we,U,Ae,Ke.value,ee),Ke!==null&&(i&&Ke.alternate!==null&&we.delete(Ke.key===null?Ae:Ke.key),O=_(Ke,O,Ae),Ee===null?pe=Ke:Ee.sibling=Ke,Ee=Ke);return i&&we.forEach(function(wA){return o(U,wA)}),mt&&uo(U,Ae),pe}function Rt(U,O,j,ee){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case qe:e:{for(var pe=j.key,Ee=O;Ee!==null;){if(Ee.key===pe){if(pe=j.type,pe===N){if(Ee.tag===7){l(U,Ee.sibling),O=p(Ee,j.props.children),O.return=U,U=O;break e}}else if(Ee.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ut&&yy(pe)===Ee.type){l(U,Ee.sibling),O=p(Ee,j.props),O.ref=Ul(U,Ee,j),O.return=U,U=O;break e}l(U,Ee);break}else o(U,Ee);Ee=Ee.sibling}j.type===N?(O=yo(j.props.children,U.mode,ee,j.key),O.return=U,U=O):(ee=mh(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Ul(U,O,j),ee.return=U,U=ee)}return I(U);case Ne:e:{for(Ee=j.key;O!==null;){if(O.key===Ee)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){l(U,O.sibling),O=p(O,j.children||[]),O.return=U,U=O;break e}else{l(U,O);break}else o(U,O);O=O.sibling}O=bp(j,U.mode,ee),O.return=U,U=O}return I(U);case ut:return Ee=j._init,Rt(U,O,Ee(j._payload),ee)}if(Qn(j))return de(U,O,j,ee);if(ge(j))return fe(U,O,j,ee);qc(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,O!==null&&O.tag===6?(l(U,O.sibling),O=p(O,j),O.return=U,U=O):(l(U,O),O=Dp(j,U.mode,ee),O.return=U,U=O),I(U)):l(U,O)}return Rt}var ga=vy(!0),Ey=vy(!1),Hc=ts(null),Gc=null,_a=null,zf=null;function Wf(){zf=_a=Gc=null}function $f(i){var o=Hc.current;ht(Hc),i._currentValue=o}function qf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function ya(i,o){Gc=i,zf=_a=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(kn=!0),i.firstContext=null)}function nr(i){var o=i._currentValue;if(zf!==i)if(i={context:i,memoizedValue:o,next:null},_a===null){if(Gc===null)throw Error(t(308));_a=i,Gc.dependencies={lanes:0,firstContext:i}}else _a=_a.next=i;return o}var co=null;function Hf(i){co===null?co=[i]:co.push(i)}function wy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Hf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ei(i,h)}function Ei(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var is=!1;function Gf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function wi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ss(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ge&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ei(i,l)}return p=h.interleaved,p===null?(o.next=o,Hf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ei(i,l)}function Kc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ki(i,l)}}function Ty(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var I={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=I:_=_.next=I,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Qc(i,o,l,h){var p=i.updateQueue;is=!1;var _=p.firstBaseUpdate,I=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var x=A,W=x.next;x.next=null,I===null?_=W:I.next=W,I=x;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==I&&(A===null?X.firstBaseUpdate=W:A.next=W,X.lastBaseUpdate=x))}if(_!==null){var J=p.baseState;I=0,X=W=x=null,A=_;do{var Y=A.lane,ue=A.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=i,fe=A;switch(Y=o,ue=l,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){J=de.call(ue,J,Y);break e}J=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Y=typeof de=="function"?de.call(ue,J,Y):de,Y==null)break e;J=ae({},J,Y);break e;case 2:is=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,Y=p.effects,Y===null?p.effects=[A]:Y.push(A))}else ue={eventTime:ue,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(W=X=ue,x=J):X=X.next=ue,I|=Y;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(X===null&&(x=J),p.baseState=x,p.firstBaseUpdate=W,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do I|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);po|=I,i.lanes=I,i.memoizedState=J}}function Sy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var jl={},qr=ts(jl),Bl=ts(jl),zl=ts(jl);function ho(i){if(i===jl)throw Error(t(174));return i}function Kf(i,o){switch(ot(zl,o),ot(Bl,i),ot(qr,jl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:wt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=wt(o,i)}ht(qr),ot(qr,o)}function va(){ht(qr),ht(Bl),ht(zl)}function Cy(i){ho(zl.current);var o=ho(qr.current),l=wt(o,i.type);o!==l&&(ot(Bl,i),ot(qr,l))}function Qf(i){Bl.current===i&&(ht(qr),ht(Bl))}var _t=ts(0);function Yc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Yf=[];function Xf(){for(var i=0;i<Yf.length;i++)Yf[i]._workInProgressVersionPrimary=null;Yf.length=0}var Xc=le.ReactCurrentDispatcher,Jf=le.ReactCurrentBatchConfig,fo=0,yt=null,Vt=null,$t=null,Jc=!1,Wl=!1,$l=0,WC=0;function hn(){throw Error(t(321))}function Zf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!wr(i[l],o[l]))return!1;return!0}function ep(i,o,l,h,p,_){if(fo=_,yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Xc.current=i===null||i.memoizedState===null?GC:KC,i=l(h,p),Wl){_=0;do{if(Wl=!1,$l=0,25<=_)throw Error(t(301));_+=1,$t=Vt=null,o.updateQueue=null,Xc.current=QC,i=l(h,p)}while(Wl)}if(Xc.current=th,o=Vt!==null&&Vt.next!==null,fo=0,$t=Vt=yt=null,Jc=!1,o)throw Error(t(300));return i}function tp(){var i=$l!==0;return $l=0,i}function Hr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?yt.memoizedState=$t=i:$t=$t.next=i,$t}function rr(){if(Vt===null){var i=yt.alternate;i=i!==null?i.memoizedState:null}else i=Vt.next;var o=$t===null?yt.memoizedState:$t.next;if(o!==null)$t=o,Vt=i;else{if(i===null)throw Error(t(310));Vt=i,i={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},$t===null?yt.memoizedState=$t=i:$t=$t.next=i}return $t}function ql(i,o){return typeof o=="function"?o(i):o}function np(i){var o=rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Vt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var I=p.next;p.next=_.next,_.next=I}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var A=I=null,x=null,W=_;do{var X=W.lane;if((fo&X)===X)x!==null&&(x=x.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:i(h,W.action);else{var J={lane:X,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};x===null?(A=x=J,I=h):x=x.next=J,yt.lanes|=X,po|=X}W=W.next}while(W!==null&&W!==_);x===null?I=h:x.next=A,wr(h,o.memoizedState)||(kn=!0),o.memoizedState=h,o.baseState=I,o.baseQueue=x,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,yt.lanes|=_,po|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function rp(i){var o=rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var I=p=p.next;do _=i(_,I.action),I=I.next;while(I!==p);wr(_,o.memoizedState)||(kn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Ay(){}function Ry(i,o){var l=yt,h=rr(),p=o(),_=!wr(h.memoizedState,p);if(_&&(h.memoizedState=p,kn=!0),h=h.queue,ip(Ny.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||$t!==null&&$t.memoizedState.tag&1){if(l.flags|=2048,Hl(9,ky.bind(null,l,h,p,o),void 0,null),qt===null)throw Error(t(349));(fo&30)!==0||Py(l,o,p)}return p}function Py(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function ky(i,o,l,h){o.value=l,o.getSnapshot=h,xy(o)&&Dy(i)}function Ny(i,o,l){return l(function(){xy(o)&&Dy(i)})}function xy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!wr(i,l)}catch{return!0}}function Dy(i){var o=Ei(i,1);o!==null&&Ar(o,i,1,-1)}function by(i){var o=Hr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:i},o.queue=i,i=i.dispatch=HC.bind(null,yt,i),[o.memoizedState,i]}function Hl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Oy(){return rr().memoizedState}function Zc(i,o,l,h){var p=Hr();yt.flags|=i,p.memoizedState=Hl(1|o,l,void 0,h===void 0?null:h)}function eh(i,o,l,h){var p=rr();h=h===void 0?null:h;var _=void 0;if(Vt!==null){var I=Vt.memoizedState;if(_=I.destroy,h!==null&&Zf(h,I.deps)){p.memoizedState=Hl(o,l,_,h);return}}yt.flags|=i,p.memoizedState=Hl(1|o,l,_,h)}function My(i,o){return Zc(8390656,8,i,o)}function ip(i,o){return eh(2048,8,i,o)}function Ly(i,o){return eh(4,2,i,o)}function Vy(i,o){return eh(4,4,i,o)}function Fy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Uy(i,o,l){return l=l!=null?l.concat([i]):null,eh(4,4,Fy.bind(null,o,i),l)}function sp(){}function jy(i,o){var l=rr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Zf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function By(i,o){var l=rr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Zf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function zy(i,o,l){return(fo&21)===0?(i.baseState&&(i.baseState=!1,kn=!0),i.memoizedState=l):(wr(l,o)||(l=to(),yt.lanes|=l,po|=l,i.baseState=!0),o)}function $C(i,o){var l=Be;Be=l!==0&&4>l?l:4,i(!0);var h=Jf.transition;Jf.transition={};try{i(!1),o()}finally{Be=l,Jf.transition=h}}function Wy(){return rr().memoizedState}function qC(i,o,l){var h=us(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},$y(i))qy(o,l);else if(l=wy(i,o,l,h),l!==null){var p=wn();Ar(l,i,h,p),Hy(l,o,h)}}function HC(i,o,l){var h=us(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if($y(i))qy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var I=o.lastRenderedState,A=_(I,l);if(p.hasEagerState=!0,p.eagerState=A,wr(A,I)){var x=o.interleaved;x===null?(p.next=p,Hf(o)):(p.next=x.next,x.next=p),o.interleaved=p;return}}catch{}finally{}l=wy(i,o,p,h),l!==null&&(p=wn(),Ar(l,i,h,p),Hy(l,o,h))}}function $y(i){var o=i.alternate;return i===yt||o!==null&&o===yt}function qy(i,o){Wl=Jc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Hy(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ki(i,l)}}var th={readContext:nr,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},GC={readContext:nr,useCallback:function(i,o){return Hr().memoizedState=[i,o===void 0?null:o],i},useContext:nr,useEffect:My,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Zc(4194308,4,Fy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Zc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Zc(4,2,i,o)},useMemo:function(i,o){var l=Hr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Hr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=qC.bind(null,yt,i),[h.memoizedState,i]},useRef:function(i){var o=Hr();return i={current:i},o.memoizedState=i},useState:by,useDebugValue:sp,useDeferredValue:function(i){return Hr().memoizedState=i},useTransition:function(){var i=by(!1),o=i[0];return i=$C.bind(null,i[1]),Hr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=yt,p=Hr();if(mt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),qt===null)throw Error(t(349));(fo&30)!==0||Py(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,My(Ny.bind(null,h,_,i),[i]),h.flags|=2048,Hl(9,ky.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Hr(),o=qt.identifierPrefix;if(mt){var l=vi,h=yi;l=(h&~(1<<32-yn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=$l++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=WC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},KC={readContext:nr,useCallback:jy,useContext:nr,useEffect:ip,useImperativeHandle:Uy,useInsertionEffect:Ly,useLayoutEffect:Vy,useMemo:By,useReducer:np,useRef:Oy,useState:function(){return np(ql)},useDebugValue:sp,useDeferredValue:function(i){var o=rr();return zy(o,Vt.memoizedState,i)},useTransition:function(){var i=np(ql)[0],o=rr().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:Wy,unstable_isNewReconciler:!1},QC={readContext:nr,useCallback:jy,useContext:nr,useEffect:ip,useImperativeHandle:Uy,useInsertionEffect:Ly,useLayoutEffect:Vy,useMemo:By,useReducer:rp,useRef:Oy,useState:function(){return rp(ql)},useDebugValue:sp,useDeferredValue:function(i){var o=rr();return Vt===null?o.memoizedState=i:zy(o,Vt.memoizedState,i)},useTransition:function(){var i=rp(ql)[0],o=rr().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:Ry,useId:Wy,unstable_isNewReconciler:!1};function Tr(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function op(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var nh={isMounted:function(i){return(i=i._reactInternals)?pr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=wn(),p=us(i),_=wi(h,p);_.payload=o,l!=null&&(_.callback=l),o=ss(i,_,p),o!==null&&(Ar(o,i,p,h),Kc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=wn(),p=us(i),_=wi(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ss(i,_,p),o!==null&&(Ar(o,i,p,h),Kc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=wn(),h=us(i),p=wi(l,h);p.tag=2,o!=null&&(p.callback=o),o=ss(i,p,h),o!==null&&(Ar(o,i,h,l),Kc(o,i,h))}};function Gy(i,o,l,h,p,_,I){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,I):o.prototype&&o.prototype.isPureReactComponent?!Dl(l,h)||!Dl(p,_):!0}function Ky(i,o,l){var h=!1,p=ns,_=o.contextType;return typeof _=="object"&&_!==null?_=nr(_):(p=Pn(o)?ao:cn.current,h=o.contextTypes,_=(h=h!=null)?da(i,p):ns),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Qy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&nh.enqueueReplaceState(o,o.state,null)}function ap(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Gf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=nr(_):(_=Pn(o)?ao:cn.current,p.context=da(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(op(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&nh.enqueueReplaceState(p,p.state,null),Qc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ea(i,o){try{var l="",h=o;do l+=ke(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function lp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function up(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var YC=typeof WeakMap=="function"?WeakMap:Map;function Yy(i,o,l){l=wi(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){uh||(uh=!0,Sp=h),up(i,o)},l}function Xy(i,o,l){l=wi(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){up(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){up(i,o),typeof h!="function"&&(as===null?as=new Set([this]):as.add(this));var I=o.stack;this.componentDidCatch(o.value,{componentStack:I!==null?I:""})}),l}function Jy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new YC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=cA.bind(null,i,o,l),o.then(i,i))}function Zy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function ev(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=wi(-1,1),o.tag=2,ss(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var XC=le.ReactCurrentOwner,kn=!1;function En(i,o,l,h){o.child=i===null?Ey(o,null,l,h):ga(o,i.child,l,h)}function tv(i,o,l,h,p){l=l.render;var _=o.ref;return ya(o,p),h=ep(i,o,l,h,_,p),l=tp(),i!==null&&!kn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ii(i,o,p)):(mt&&l&&Vf(o),o.flags|=1,En(i,o,h,p),o.child)}function nv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!xp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,rv(i,o,_,h,p)):(i=mh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var I=_.memoizedProps;if(l=l.compare,l=l!==null?l:Dl,l(I,h)&&i.ref===o.ref)return Ii(i,o,p)}return o.flags|=1,i=hs(_,h),i.ref=o.ref,i.return=o,o.child=i}function rv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Dl(_,h)&&i.ref===o.ref)if(kn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(kn=!0);else return o.lanes=i.lanes,Ii(i,o,p)}return cp(i,o,l,h,p)}function iv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ia,qn),qn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ot(Ia,qn),qn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,ot(Ia,qn),qn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,ot(Ia,qn),qn|=h;return En(i,o,p,l),o.child}function sv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function cp(i,o,l,h,p){var _=Pn(l)?ao:cn.current;return _=da(o,_),ya(o,p),l=ep(i,o,l,h,_,p),h=tp(),i!==null&&!kn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ii(i,o,p)):(mt&&h&&Vf(o),o.flags|=1,En(i,o,l,p),o.child)}function ov(i,o,l,h,p){if(Pn(l)){var _=!0;jc(o)}else _=!1;if(ya(o,p),o.stateNode===null)ih(i,o),Ky(o,l,h),ap(o,l,h,p),h=!0;else if(i===null){var I=o.stateNode,A=o.memoizedProps;I.props=A;var x=I.context,W=l.contextType;typeof W=="object"&&W!==null?W=nr(W):(W=Pn(l)?ao:cn.current,W=da(o,W));var X=l.getDerivedStateFromProps,J=typeof X=="function"||typeof I.getSnapshotBeforeUpdate=="function";J||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(A!==h||x!==W)&&Qy(o,I,h,W),is=!1;var Y=o.memoizedState;I.state=Y,Qc(o,h,I,p),x=o.memoizedState,A!==h||Y!==x||Rn.current||is?(typeof X=="function"&&(op(o,l,X,h),x=o.memoizedState),(A=is||Gy(o,l,A,h,Y,x,W))?(J||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(o.flags|=4194308)):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=x),I.props=h,I.state=x,I.context=W,h=A):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{I=o.stateNode,Iy(i,o),A=o.memoizedProps,W=o.type===o.elementType?A:Tr(o.type,A),I.props=W,J=o.pendingProps,Y=I.context,x=l.contextType,typeof x=="object"&&x!==null?x=nr(x):(x=Pn(l)?ao:cn.current,x=da(o,x));var ue=l.getDerivedStateFromProps;(X=typeof ue=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(A!==J||Y!==x)&&Qy(o,I,h,x),is=!1,Y=o.memoizedState,I.state=Y,Qc(o,h,I,p);var de=o.memoizedState;A!==J||Y!==de||Rn.current||is?(typeof ue=="function"&&(op(o,l,ue,h),de=o.memoizedState),(W=is||Gy(o,l,W,h,Y,de,x)||!1)?(X||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(h,de,x),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(h,de,x)),typeof I.componentDidUpdate=="function"&&(o.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof I.componentDidUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=de),I.props=h,I.state=de,I.context=x,h=W):(typeof I.componentDidUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),h=!1)}return hp(i,o,l,h,_,p)}function hp(i,o,l,h,p,_){sv(i,o);var I=(o.flags&128)!==0;if(!h&&!I)return p&&hy(o,l,!1),Ii(i,o,_);h=o.stateNode,XC.current=o;var A=I&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&I?(o.child=ga(o,i.child,null,_),o.child=ga(o,null,A,_)):En(i,o,A,_),o.memoizedState=h.state,p&&hy(o,l,!0),o.child}function av(i){var o=i.stateNode;o.pendingContext?uy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&uy(i,o.context,!1),Kf(i,o.containerInfo)}function lv(i,o,l,h,p){return ma(),Bf(p),o.flags|=256,En(i,o,l,h),o.child}var dp={dehydrated:null,treeContext:null,retryLane:0};function fp(i){return{baseLanes:i,cachePool:null,transitions:null}}function uv(i,o,l){var h=o.pendingProps,p=_t.current,_=!1,I=(o.flags&128)!==0,A;if((A=I)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ot(_t,p&1),i===null)return jf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(I=h.children,i=h.fallback,_?(h=o.mode,_=o.child,I={mode:"hidden",children:I},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=I):_=gh(I,h,0,null),i=yo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=fp(l),o.memoizedState=dp,i):pp(o,I));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return JC(i,o,I,h,A,p,l);if(_){_=h.fallback,I=o.mode,p=i.child,A=p.sibling;var x={mode:"hidden",children:h.children};return(I&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=x,o.deletions=null):(h=hs(p,x),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?_=hs(A,_):(_=yo(_,I,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,I=i.child.memoizedState,I=I===null?fp(l):{baseLanes:I.baseLanes|l,cachePool:null,transitions:I.transitions},_.memoizedState=I,_.childLanes=i.childLanes&~l,o.memoizedState=dp,h}return _=i.child,i=_.sibling,h=hs(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function pp(i,o){return o=gh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function rh(i,o,l,h){return h!==null&&Bf(h),ga(o,i.child,null,l),i=pp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function JC(i,o,l,h,p,_,I){if(l)return o.flags&256?(o.flags&=-257,h=lp(Error(t(422))),rh(i,o,I,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=gh({mode:"visible",children:h.children},p,0,null),_=yo(_,p,I,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&ga(o,i.child,null,I),o.child.memoizedState=fp(I),o.memoizedState=dp,_);if((o.mode&1)===0)return rh(i,o,I,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,_=Error(t(419)),h=lp(_,h,void 0),rh(i,o,I,h)}if(A=(I&i.childLanes)!==0,kn||A){if(h=qt,h!==null){switch(I&-I){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|I))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ei(i,p),Ar(h,i,p,-1))}return Np(),h=lp(Error(t(421))),rh(i,o,I,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=hA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,$n=es(p.nextSibling),Wn=o,mt=!0,Ir=null,i!==null&&(er[tr++]=yi,er[tr++]=vi,er[tr++]=lo,yi=i.id,vi=i.overflow,lo=o),o=pp(o,h.children),o.flags|=4096,o)}function cv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),qf(i.return,o,l)}function mp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function hv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(En(i,o,h.children,l),h=_t.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&cv(i,l,o);else if(i.tag===19)cv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ot(_t,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Yc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),mp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Yc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}mp(o,!0,l,null,_);break;case"together":mp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ih(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ii(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),po|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=hs(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=hs(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function ZC(i,o,l){switch(o.tag){case 3:av(o),ma();break;case 5:Cy(o);break;case 1:Pn(o.type)&&jc(o);break;case 4:Kf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;ot(Hc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(ot(_t,_t.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?uv(i,o,l):(ot(_t,_t.current&1),i=Ii(i,o,l),i!==null?i.sibling:null);ot(_t,_t.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return hv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ot(_t,_t.current),h)break;return null;case 22:case 23:return o.lanes=0,iv(i,o,l)}return Ii(i,o,l)}var dv,gp,fv,pv;dv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},gp=function(){},fv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,ho(qr.current);var _=null;switch(l){case"input":p=Je(i,p),h=Je(i,h),_=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),_=[];break;case"textarea":p=Yn(i,p),h=Yn(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Vc)}Wi(l,h);var I;l=null;for(W in p)if(!h.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var A=p[W];for(I in A)A.hasOwnProperty(I)&&(l||(l={}),l[I]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?_||(_=[]):(_=_||[]).push(W,null));for(W in h){var x=h[W];if(A=p!=null?p[W]:void 0,h.hasOwnProperty(W)&&x!==A&&(x!=null||A!=null))if(W==="style")if(A){for(I in A)!A.hasOwnProperty(I)||x&&x.hasOwnProperty(I)||(l||(l={}),l[I]="");for(I in x)x.hasOwnProperty(I)&&A[I]!==x[I]&&(l||(l={}),l[I]=x[I])}else l||(_||(_=[]),_.push(W,l)),l=x;else W==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(_=_||[]).push(W,x)):W==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push(W,""+x):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(x!=null&&W==="onScroll"&&ct("scroll",i),_||A===x||(_=[])):(_=_||[]).push(W,x))}l&&(_=_||[]).push("style",l);var W=_;(o.updateQueue=W)&&(o.flags|=4)}},pv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Gl(i,o){if(!mt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function dn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function eA(i,o,l){var h=o.pendingProps;switch(Ff(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(o),null;case 1:return Pn(o.type)&&Uc(),dn(o),null;case 3:return h=o.stateNode,va(),ht(Rn),ht(cn),Xf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&($c(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ir!==null&&(Rp(Ir),Ir=null))),gp(i,o),dn(o),null;case 5:Qf(o);var p=ho(zl.current);if(l=o.type,i!==null&&o.stateNode!=null)fv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return dn(o),null}if(i=ho(qr.current),$c(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[$r]=o,h[Vl]=_,i=(o.mode&1)!==0,l){case"dialog":ct("cancel",h),ct("close",h);break;case"iframe":case"object":case"embed":ct("load",h);break;case"video":case"audio":for(p=0;p<Ol.length;p++)ct(Ol[p],h);break;case"source":ct("error",h);break;case"img":case"image":case"link":ct("error",h),ct("load",h);break;case"details":ct("toggle",h);break;case"input":Mr(h,_),ct("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},ct("invalid",h);break;case"textarea":oi(h,_),ct("invalid",h)}Wi(l,_),p=null;for(var I in _)if(_.hasOwnProperty(I)){var A=_[I];I==="children"?typeof A=="string"?h.textContent!==A&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,A,i),p=["children",""+A]):s.hasOwnProperty(I)&&A!=null&&I==="onScroll"&&ct("scroll",h)}switch(l){case"input":Vn(h),cr(h,_,!0);break;case"textarea":Vn(h),ji(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Vc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{I=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=I.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=I.createElement(l,{is:h.is}):(i=I.createElement(l),l==="select"&&(I=i,h.multiple?I.multiple=!0:h.size&&(I.size=h.size))):i=I.createElementNS(i,l),i[$r]=o,i[Vl]=h,dv(i,o,!1,!1),o.stateNode=i;e:{switch(I=q(l,h),l){case"dialog":ct("cancel",i),ct("close",i),p=h;break;case"iframe":case"object":case"embed":ct("load",i),p=h;break;case"video":case"audio":for(p=0;p<Ol.length;p++)ct(Ol[p],i);p=h;break;case"source":ct("error",i),p=h;break;case"img":case"image":case"link":ct("error",i),ct("load",i),p=h;break;case"details":ct("toggle",i),p=h;break;case"input":Mr(i,h),p=Je(i,h),ct("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),ct("invalid",i);break;case"textarea":oi(i,h),p=Yn(i,h),ct("invalid",i);break;default:p=h}Wi(l,p),A=p;for(_ in A)if(A.hasOwnProperty(_)){var x=A[_];_==="style"?Hs(i,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Bi(i,x)):_==="children"?typeof x=="string"?(l!=="textarea"||x!=="")&&Lr(i,x):typeof x=="number"&&Lr(i,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?x!=null&&_==="onScroll"&&ct("scroll",i):x!=null&&ie(i,_,x,I))}switch(l){case"input":Vn(i),cr(i,h,!1);break;case"textarea":Vn(i),ji(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ue(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?un(i,!!h.multiple,_,!1):h.defaultValue!=null&&un(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Vc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return dn(o),null;case 6:if(i&&o.stateNode!=null)pv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=ho(zl.current),ho(qr.current),$c(o)){if(h=o.stateNode,l=o.memoizedProps,h[$r]=o,(_=h.nodeValue!==l)&&(i=Wn,i!==null))switch(i.tag){case 3:Lc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Lc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[$r]=o,o.stateNode=h}return dn(o),null;case 13:if(ht(_t),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(mt&&$n!==null&&(o.mode&1)!==0&&(o.flags&128)===0)_y(),ma(),o.flags|=98560,_=!1;else if(_=$c(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[$r]=o}else ma(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;dn(o),_=!1}else Ir!==null&&(Rp(Ir),Ir=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(_t.current&1)!==0?Ft===0&&(Ft=3):Np())),o.updateQueue!==null&&(o.flags|=4),dn(o),null);case 4:return va(),gp(i,o),i===null&&Ml(o.stateNode.containerInfo),dn(o),null;case 10:return $f(o.type._context),dn(o),null;case 17:return Pn(o.type)&&Uc(),dn(o),null;case 19:if(ht(_t),_=o.memoizedState,_===null)return dn(o),null;if(h=(o.flags&128)!==0,I=_.rendering,I===null)if(h)Gl(_,!1);else{if(Ft!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(I=Yc(i),I!==null){for(o.flags|=128,Gl(_,!1),h=I.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,I=_.alternate,I===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=I.childLanes,_.lanes=I.lanes,_.child=I.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=I.memoizedProps,_.memoizedState=I.memoizedState,_.updateQueue=I.updateQueue,_.type=I.type,i=I.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ot(_t,_t.current&1|2),o.child}i=i.sibling}_.tail!==null&&st()>Ta&&(o.flags|=128,h=!0,Gl(_,!1),o.lanes=4194304)}else{if(!h)if(i=Yc(I),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Gl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!I.alternate&&!mt)return dn(o),null}else 2*st()-_.renderingStartTime>Ta&&l!==1073741824&&(o.flags|=128,h=!0,Gl(_,!1),o.lanes=4194304);_.isBackwards?(I.sibling=o.child,o.child=I):(l=_.last,l!==null?l.sibling=I:o.child=I,_.last=I)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=st(),o.sibling=null,l=_t.current,ot(_t,h?l&1|2:l&1),o):(dn(o),null);case 22:case 23:return kp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(qn&1073741824)!==0&&(dn(o),o.subtreeFlags&6&&(o.flags|=8192)):dn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function tA(i,o){switch(Ff(o),o.tag){case 1:return Pn(o.type)&&Uc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return va(),ht(Rn),ht(cn),Xf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Qf(o),null;case 13:if(ht(_t),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ma()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return ht(_t),null;case 4:return va(),null;case 10:return $f(o.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var sh=!1,fn=!1,nA=typeof WeakSet=="function"?WeakSet:Set,he=null;function wa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){It(i,o,h)}else l.current=null}function _p(i,o,l){try{l()}catch(h){It(i,o,h)}}var mv=!1;function rA(i,o){if(kf=Xi,i=G_(),wf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var I=0,A=-1,x=-1,W=0,X=0,J=i,Y=null;t:for(;;){for(var ue;J!==l||p!==0&&J.nodeType!==3||(A=I+p),J!==_||h!==0&&J.nodeType!==3||(x=I+h),J.nodeType===3&&(I+=J.nodeValue.length),(ue=J.firstChild)!==null;)Y=J,J=ue;for(;;){if(J===i)break t;if(Y===l&&++W===p&&(A=I),Y===_&&++X===h&&(x=I),(ue=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=ue}l=A===-1||x===-1?null:{start:A,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nf={focusedElem:i,selectionRange:l},Xi=!1,he=o;he!==null;)if(o=he,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,he=i;else for(;he!==null;){o=he;try{var de=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,Rt=de.memoizedState,U=o.stateNode,O=U.getSnapshotBeforeUpdate(o.elementType===o.type?fe:Tr(o.type,fe),Rt);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){It(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,he=i;break}he=o.return}return de=mv,mv=!1,de}function Kl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&_p(o,l,_)}p=p.next}while(p!==h)}}function oh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function yp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function gv(i){var o=i.alternate;o!==null&&(i.alternate=null,gv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[$r],delete o[Vl],delete o[Of],delete o[UC],delete o[jC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function _v(i){return i.tag===5||i.tag===3||i.tag===4}function yv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||_v(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function vp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Vc));else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,l),i=i.sibling;i!==null;)vp(i,o,l),i=i.sibling}function Ep(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ep(i,o,l),i=i.sibling;i!==null;)Ep(i,o,l),i=i.sibling}var en=null,Sr=!1;function os(i,o,l){for(l=l.child;l!==null;)vv(i,o,l),l=l.sibling}function vv(i,o,l){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Zs,l)}catch{}switch(l.tag){case 5:fn||wa(l,o);case 6:var h=en,p=Sr;en=null,os(i,o,l),en=h,Sr=p,en!==null&&(Sr?(i=en,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):en.removeChild(l.stateNode));break;case 18:en!==null&&(Sr?(i=en,l=l.stateNode,i.nodeType===8?bf(i.parentNode,l):i.nodeType===1&&bf(i,l),vr(i)):bf(en,l.stateNode));break;case 4:h=en,p=Sr,en=l.stateNode.containerInfo,Sr=!0,os(i,o,l),en=h,Sr=p;break;case 0:case 11:case 14:case 15:if(!fn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,I=_.destroy;_=_.tag,I!==void 0&&((_&2)!==0||(_&4)!==0)&&_p(l,o,I),p=p.next}while(p!==h)}os(i,o,l);break;case 1:if(!fn&&(wa(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){It(l,o,A)}os(i,o,l);break;case 21:os(i,o,l);break;case 22:l.mode&1?(fn=(h=fn)||l.memoizedState!==null,os(i,o,l),fn=h):os(i,o,l);break;default:os(i,o,l)}}function Ev(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new nA),o.forEach(function(h){var p=dA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Cr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,I=o,A=I;e:for(;A!==null;){switch(A.tag){case 5:en=A.stateNode,Sr=!1;break e;case 3:en=A.stateNode.containerInfo,Sr=!0;break e;case 4:en=A.stateNode.containerInfo,Sr=!0;break e}A=A.return}if(en===null)throw Error(t(160));vv(_,I,p),en=null,Sr=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(W){It(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)wv(o,i),o=o.sibling}function wv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Cr(o,i),Gr(i),h&4){try{Kl(3,i,i.return),oh(3,i)}catch(fe){It(i,i.return,fe)}try{Kl(5,i,i.return)}catch(fe){It(i,i.return,fe)}}break;case 1:Cr(o,i),Gr(i),h&512&&l!==null&&wa(l,l.return);break;case 5:if(Cr(o,i),Gr(i),h&512&&l!==null&&wa(l,l.return),i.flags&32){var p=i.stateNode;try{Lr(p,"")}catch(fe){It(i,i.return,fe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,I=l!==null?l.memoizedProps:_,A=i.type,x=i.updateQueue;if(i.updateQueue=null,x!==null)try{A==="input"&&_.type==="radio"&&_.name!=null&&an(p,_),q(A,I);var W=q(A,_);for(I=0;I<x.length;I+=2){var X=x[I],J=x[I+1];X==="style"?Hs(p,J):X==="dangerouslySetInnerHTML"?Bi(p,J):X==="children"?Lr(p,J):ie(p,X,J,W)}switch(A){case"input":ln(p,_);break;case"textarea":ai(p,_);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ue=_.value;ue!=null?un(p,!!_.multiple,ue,!1):Y!==!!_.multiple&&(_.defaultValue!=null?un(p,!!_.multiple,_.defaultValue,!0):un(p,!!_.multiple,_.multiple?[]:"",!1))}p[Vl]=_}catch(fe){It(i,i.return,fe)}}break;case 6:if(Cr(o,i),Gr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(fe){It(i,i.return,fe)}}break;case 3:if(Cr(o,i),Gr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{vr(o.containerInfo)}catch(fe){It(i,i.return,fe)}break;case 4:Cr(o,i),Gr(i);break;case 13:Cr(o,i),Gr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Tp=st())),h&4&&Ev(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(fn=(W=fn)||X,Cr(o,i),fn=W):Cr(o,i),Gr(i),h&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!X&&(i.mode&1)!==0)for(he=i,X=i.child;X!==null;){for(J=he=X;he!==null;){switch(Y=he,ue=Y.child,Y.tag){case 0:case 11:case 14:case 15:Kl(4,Y,Y.return);break;case 1:wa(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,de.props=o.memoizedProps,de.state=o.memoizedState,de.componentWillUnmount()}catch(fe){It(h,l,fe)}}break;case 5:wa(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Sv(J);continue}}ue!==null?(ue.return=Y,he=ue):Sv(J)}X=X.sibling}e:for(X=null,J=i;;){if(J.tag===5){if(X===null){X=J;try{p=J.stateNode,W?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(A=J.stateNode,x=J.memoizedProps.style,I=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=zi("display",I))}catch(fe){It(i,i.return,fe)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=W?"":J.memoizedProps}catch(fe){It(i,i.return,fe)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===i)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===i)break e;for(;J.sibling===null;){if(J.return===null||J.return===i)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Cr(o,i),Gr(i),h&4&&Ev(i);break;case 21:break;default:Cr(o,i),Gr(i)}}function Gr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(_v(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Lr(p,""),h.flags&=-33);var _=yv(i);Ep(i,_,p);break;case 3:case 4:var I=h.stateNode.containerInfo,A=yv(i);vp(i,A,I);break;default:throw Error(t(161))}}catch(x){It(i,i.return,x)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function iA(i,o,l){he=i,Iv(i)}function Iv(i,o,l){for(var h=(i.mode&1)!==0;he!==null;){var p=he,_=p.child;if(p.tag===22&&h){var I=p.memoizedState!==null||sh;if(!I){var A=p.alternate,x=A!==null&&A.memoizedState!==null||fn;A=sh;var W=fn;if(sh=I,(fn=x)&&!W)for(he=p;he!==null;)I=he,x=I.child,I.tag===22&&I.memoizedState!==null?Cv(p):x!==null?(x.return=I,he=x):Cv(p);for(;_!==null;)he=_,Iv(_),_=_.sibling;he=p,sh=A,fn=W}Tv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,he=_):Tv(i)}}function Tv(i){for(;he!==null;){var o=he;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:fn||oh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!fn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Tr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Sy(o,_,h);break;case 3:var I=o.updateQueue;if(I!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Sy(o,I,l)}break;case 5:var A=o.stateNode;if(l===null&&o.flags&4){l=A;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&l.focus();break;case"img":x.src&&(l.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var X=W.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&vr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||o.flags&512&&yp(o)}catch(Y){It(o,o.return,Y)}}if(o===i){he=null;break}if(l=o.sibling,l!==null){l.return=o.return,he=l;break}he=o.return}}function Sv(i){for(;he!==null;){var o=he;if(o===i){he=null;break}var l=o.sibling;if(l!==null){l.return=o.return,he=l;break}he=o.return}}function Cv(i){for(;he!==null;){var o=he;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{oh(4,o)}catch(x){It(o,l,x)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(x){It(o,p,x)}}var _=o.return;try{yp(o)}catch(x){It(o,_,x)}break;case 5:var I=o.return;try{yp(o)}catch(x){It(o,I,x)}}}catch(x){It(o,o.return,x)}if(o===i){he=null;break}var A=o.sibling;if(A!==null){A.return=o.return,he=A;break}he=o.return}}var sA=Math.ceil,ah=le.ReactCurrentDispatcher,wp=le.ReactCurrentOwner,ir=le.ReactCurrentBatchConfig,Ge=0,qt=null,xt=null,tn=0,qn=0,Ia=ts(0),Ft=0,Ql=null,po=0,lh=0,Ip=0,Yl=null,Nn=null,Tp=0,Ta=1/0,Ti=null,uh=!1,Sp=null,as=null,ch=!1,ls=null,hh=0,Xl=0,Cp=null,dh=-1,fh=0;function wn(){return(Ge&6)!==0?st():dh!==-1?dh:dh=st()}function us(i){return(i.mode&1)===0?1:(Ge&2)!==0&&tn!==0?tn&-tn:zC.transition!==null?(fh===0&&(fh=to()),fh):(i=Be,i!==0||(i=window.event,i=i===void 0?16:Cl(i.type)),i)}function Ar(i,o,l,h){if(50<Xl)throw Xl=0,Cp=null,Error(t(185));Gi(i,l,h),((Ge&2)===0||i!==qt)&&(i===qt&&((Ge&2)===0&&(lh|=l),Ft===4&&cs(i,tn)),xn(i,h),l===1&&Ge===0&&(o.mode&1)===0&&(Ta=st()+500,Bc&&rs()))}function xn(i,o){var l=i.callbackNode;hi(i,o);var h=eo(i,i===qt?tn:0);if(h===0)l!==null&&El(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&El(l),o===1)i.tag===0?BC(Rv.bind(null,i)):dy(Rv.bind(null,i)),VC(function(){(Ge&6)===0&&rs()}),l=null;else{switch(Qi(h)){case 1:l=Js;break;case 4:l=$i;break;case 16:l=Xn;break;case 536870912:l=fc;break;default:l=Xn}l=Mv(l,Av.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Av(i,o){if(dh=-1,fh=0,(Ge&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Sa()&&i.callbackNode!==l)return null;var h=eo(i,i===qt?tn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ph(i,h);else{o=h;var p=Ge;Ge|=2;var _=kv();(qt!==i||tn!==o)&&(Ti=null,Ta=st()+500,go(i,o));do try{lA();break}catch(A){Pv(i,A)}while(!0);Wf(),ah.current=_,Ge=p,xt!==null?o=0:(qt=null,tn=0,o=Ft)}if(o!==0){if(o===2&&(p=jn(i),p!==0&&(h=p,o=Ap(i,p))),o===1)throw l=Ql,go(i,0),cs(i,h),xn(i,st()),l;if(o===6)cs(i,h);else{if(p=i.current.alternate,(h&30)===0&&!oA(p)&&(o=ph(i,h),o===2&&(_=jn(i),_!==0&&(h=_,o=Ap(i,_))),o===1))throw l=Ql,go(i,0),cs(i,h),xn(i,st()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:_o(i,Nn,Ti);break;case 3:if(cs(i,h),(h&130023424)===h&&(o=Tp+500-st(),10<o)){if(eo(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){wn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Df(_o.bind(null,i,Nn,Ti),o);break}_o(i,Nn,Ti);break;case 4:if(cs(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var I=31-yn(h);_=1<<I,I=o[I],I>p&&(p=I),h&=~_}if(h=p,h=st()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*sA(h/1960))-h,10<h){i.timeoutHandle=Df(_o.bind(null,i,Nn,Ti),h);break}_o(i,Nn,Ti);break;case 5:_o(i,Nn,Ti);break;default:throw Error(t(329))}}}return xn(i,st()),i.callbackNode===l?Av.bind(null,i):null}function Ap(i,o){var l=Yl;return i.current.memoizedState.isDehydrated&&(go(i,o).flags|=256),i=ph(i,o),i!==2&&(o=Nn,Nn=l,o!==null&&Rp(o)),i}function Rp(i){Nn===null?Nn=i:Nn.push.apply(Nn,i)}function oA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!wr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function cs(i,o){for(o&=~Ip,o&=~lh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-yn(o),h=1<<l;i[l]=-1,o&=~h}}function Rv(i){if((Ge&6)!==0)throw Error(t(327));Sa();var o=eo(i,0);if((o&1)===0)return xn(i,st()),null;var l=ph(i,o);if(i.tag!==0&&l===2){var h=jn(i);h!==0&&(o=h,l=Ap(i,h))}if(l===1)throw l=Ql,go(i,0),cs(i,o),xn(i,st()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,_o(i,Nn,Ti),xn(i,st()),null}function Pp(i,o){var l=Ge;Ge|=1;try{return i(o)}finally{Ge=l,Ge===0&&(Ta=st()+500,Bc&&rs())}}function mo(i){ls!==null&&ls.tag===0&&(Ge&6)===0&&Sa();var o=Ge;Ge|=1;var l=ir.transition,h=Be;try{if(ir.transition=null,Be=1,i)return i()}finally{Be=h,ir.transition=l,Ge=o,(Ge&6)===0&&rs()}}function kp(){qn=Ia.current,ht(Ia)}function go(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,LC(l)),xt!==null)for(l=xt.return;l!==null;){var h=l;switch(Ff(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Uc();break;case 3:va(),ht(Rn),ht(cn),Xf();break;case 5:Qf(h);break;case 4:va();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:$f(h.type._context);break;case 22:case 23:kp()}l=l.return}if(qt=i,xt=i=hs(i.current,null),tn=qn=o,Ft=0,Ql=null,Ip=lh=po=0,Nn=Yl=null,co!==null){for(o=0;o<co.length;o++)if(l=co[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var I=_.next;_.next=p,h.next=I}l.pending=h}co=null}return i}function Pv(i,o){do{var l=xt;try{if(Wf(),Xc.current=th,Jc){for(var h=yt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Jc=!1}if(fo=0,$t=Vt=yt=null,Wl=!1,$l=0,wp.current=null,l===null||l.return===null){Ft=1,Ql=o,xt=null;break}e:{var _=i,I=l.return,A=l,x=o;if(o=tn,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var W=x,X=A,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ue=Zy(I);if(ue!==null){ue.flags&=-257,ev(ue,I,A,_,o),ue.mode&1&&Jy(_,W,o),o=ue,x=W;var de=o.updateQueue;if(de===null){var fe=new Set;fe.add(x),o.updateQueue=fe}else de.add(x);break e}else{if((o&1)===0){Jy(_,W,o),Np();break e}x=Error(t(426))}}else if(mt&&A.mode&1){var Rt=Zy(I);if(Rt!==null){(Rt.flags&65536)===0&&(Rt.flags|=256),ev(Rt,I,A,_,o),Bf(Ea(x,A));break e}}_=x=Ea(x,A),Ft!==4&&(Ft=2),Yl===null?Yl=[_]:Yl.push(_),_=I;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=Yy(_,x,o);Ty(_,U);break e;case 1:A=x;var O=_.type,j=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(as===null||!as.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=Xy(_,A,o);Ty(_,ee);break e}}_=_.return}while(_!==null)}xv(l)}catch(pe){o=pe,xt===l&&l!==null&&(xt=l=l.return);continue}break}while(!0)}function kv(){var i=ah.current;return ah.current=th,i===null?th:i}function Np(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),qt===null||(po&268435455)===0&&(lh&268435455)===0||cs(qt,tn)}function ph(i,o){var l=Ge;Ge|=2;var h=kv();(qt!==i||tn!==o)&&(Ti=null,go(i,o));do try{aA();break}catch(p){Pv(i,p)}while(!0);if(Wf(),Ge=l,ah.current=h,xt!==null)throw Error(t(261));return qt=null,tn=0,Ft}function aA(){for(;xt!==null;)Nv(xt)}function lA(){for(;xt!==null&&!hc();)Nv(xt)}function Nv(i){var o=Ov(i.alternate,i,qn);i.memoizedProps=i.pendingProps,o===null?xv(i):xt=o,wp.current=null}function xv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=eA(l,o,qn),l!==null){xt=l;return}}else{if(l=tA(l,o),l!==null){l.flags&=32767,xt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ft=6,xt=null;return}}if(o=o.sibling,o!==null){xt=o;return}xt=o=i}while(o!==null);Ft===0&&(Ft=5)}function _o(i,o,l){var h=Be,p=ir.transition;try{ir.transition=null,Be=1,uA(i,o,l,h)}finally{ir.transition=p,Be=h}return null}function uA(i,o,l,h){do Sa();while(ls!==null);if((Ge&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(nt(i,_),i===qt&&(xt=qt=null,tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ch||(ch=!0,Mv(Xn,function(){return Sa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ir.transition,ir.transition=null;var I=Be;Be=1;var A=Ge;Ge|=4,wp.current=null,rA(i,l),wv(l,i),kC(Nf),Xi=!!kf,Nf=kf=null,i.current=l,iA(l),ff(),Ge=A,Be=I,ir.transition=_}else i.current=l;if(ch&&(ch=!1,ls=i,hh=p),_=i.pendingLanes,_===0&&(as=null),pc(l.stateNode),xn(i,st()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(uh)throw uh=!1,i=Sp,Sp=null,i;return(hh&1)!==0&&i.tag!==0&&Sa(),_=i.pendingLanes,(_&1)!==0?i===Cp?Xl++:(Xl=0,Cp=i):Xl=0,rs(),null}function Sa(){if(ls!==null){var i=Qi(hh),o=ir.transition,l=Be;try{if(ir.transition=null,Be=16>i?16:i,ls===null)var h=!1;else{if(i=ls,ls=null,hh=0,(Ge&6)!==0)throw Error(t(331));var p=Ge;for(Ge|=4,he=i.current;he!==null;){var _=he,I=_.child;if((he.flags&16)!==0){var A=_.deletions;if(A!==null){for(var x=0;x<A.length;x++){var W=A[x];for(he=W;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:Kl(8,X,_)}var J=X.child;if(J!==null)J.return=X,he=J;else for(;he!==null;){X=he;var Y=X.sibling,ue=X.return;if(gv(X),X===W){he=null;break}if(Y!==null){Y.return=ue,he=Y;break}he=ue}}}var de=_.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var Rt=fe.sibling;fe.sibling=null,fe=Rt}while(fe!==null)}}he=_}}if((_.subtreeFlags&2064)!==0&&I!==null)I.return=_,he=I;else e:for(;he!==null;){if(_=he,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Kl(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,he=U;break e}he=_.return}}var O=i.current;for(he=O;he!==null;){I=he;var j=I.child;if((I.subtreeFlags&2064)!==0&&j!==null)j.return=I,he=j;else e:for(I=O;he!==null;){if(A=he,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:oh(9,A)}}catch(pe){It(A,A.return,pe)}if(A===I){he=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,he=ee;break e}he=A.return}}if(Ge=p,rs(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Zs,i)}catch{}h=!0}return h}finally{Be=l,ir.transition=o}}return!1}function Dv(i,o,l){o=Ea(l,o),o=Yy(i,o,1),i=ss(i,o,1),o=wn(),i!==null&&(Gi(i,1,o),xn(i,o))}function It(i,o,l){if(i.tag===3)Dv(i,i,l);else for(;o!==null;){if(o.tag===3){Dv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(as===null||!as.has(h))){i=Ea(l,i),i=Xy(o,i,1),o=ss(o,i,1),i=wn(),o!==null&&(Gi(o,1,i),xn(o,i));break}}o=o.return}}function cA(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=wn(),i.pingedLanes|=i.suspendedLanes&l,qt===i&&(tn&l)===l&&(Ft===4||Ft===3&&(tn&130023424)===tn&&500>st()-Tp?go(i,0):Ip|=l),xn(i,o)}function bv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Go,Go<<=1,(Go&130023424)===0&&(Go=4194304)));var l=wn();i=Ei(i,o),i!==null&&(Gi(i,o,l),xn(i,l))}function hA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),bv(i,l)}function dA(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),bv(i,l)}var Ov;Ov=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Rn.current)kn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return kn=!1,ZC(i,o,l);kn=(i.flags&131072)!==0}else kn=!1,mt&&(o.flags&1048576)!==0&&fy(o,Wc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;ih(i,o),i=o.pendingProps;var p=da(o,cn.current);ya(o,l),p=ep(null,o,h,i,p,l);var _=tp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Pn(h)?(_=!0,jc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Gf(o),p.updater=nh,o.stateNode=p,p._reactInternals=o,ap(o,h,i,l),o=hp(null,o,h,!0,_,l)):(o.tag=0,mt&&_&&Vf(o),En(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(ih(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=pA(h),i=Tr(h,i),p){case 0:o=cp(null,o,h,i,l);break e;case 1:o=ov(null,o,h,i,l);break e;case 11:o=tv(null,o,h,i,l);break e;case 14:o=nv(null,o,h,Tr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),cp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),ov(i,o,h,p,l);case 3:e:{if(av(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Iy(i,o),Qc(o,h,null,l);var I=o.memoizedState;if(h=I.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ea(Error(t(423)),o),o=lv(i,o,h,l,p);break e}else if(h!==p){p=Ea(Error(t(424)),o),o=lv(i,o,h,l,p);break e}else for($n=es(o.stateNode.containerInfo.firstChild),Wn=o,mt=!0,Ir=null,l=Ey(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ma(),h===p){o=Ii(i,o,l);break e}En(i,o,h,l)}o=o.child}return o;case 5:return Cy(o),i===null&&jf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,I=p.children,xf(h,p)?I=null:_!==null&&xf(h,_)&&(o.flags|=32),sv(i,o),En(i,o,I,l),o.child;case 6:return i===null&&jf(o),null;case 13:return uv(i,o,l);case 4:return Kf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=ga(o,null,h,l):En(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),tv(i,o,h,p,l);case 7:return En(i,o,o.pendingProps,l),o.child;case 8:return En(i,o,o.pendingProps.children,l),o.child;case 12:return En(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,I=p.value,ot(Hc,h._currentValue),h._currentValue=I,_!==null)if(wr(_.value,I)){if(_.children===p.children&&!Rn.current){o=Ii(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var A=_.dependencies;if(A!==null){I=_.child;for(var x=A.firstContext;x!==null;){if(x.context===h){if(_.tag===1){x=wi(-1,l&-l),x.tag=2;var W=_.updateQueue;if(W!==null){W=W.shared;var X=W.pending;X===null?x.next=x:(x.next=X.next,X.next=x),W.pending=x}}_.lanes|=l,x=_.alternate,x!==null&&(x.lanes|=l),qf(_.return,l,o),A.lanes|=l;break}x=x.next}}else if(_.tag===10)I=_.type===o.type?null:_.child;else if(_.tag===18){if(I=_.return,I===null)throw Error(t(341));I.lanes|=l,A=I.alternate,A!==null&&(A.lanes|=l),qf(I,l,o),I=_.sibling}else I=_.child;if(I!==null)I.return=_;else for(I=_;I!==null;){if(I===o){I=null;break}if(_=I.sibling,_!==null){_.return=I.return,I=_;break}I=I.return}_=I}En(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,ya(o,l),p=nr(p),h=h(p),o.flags|=1,En(i,o,h,l),o.child;case 14:return h=o.type,p=Tr(h,o.pendingProps),p=Tr(h.type,p),nv(i,o,h,p,l);case 15:return rv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),ih(i,o),o.tag=1,Pn(h)?(i=!0,jc(o)):i=!1,ya(o,l),Ky(o,h,p),ap(o,h,p,l),hp(null,o,h,!0,i,l);case 19:return hv(i,o,l);case 22:return iv(i,o,l)}throw Error(t(156,o.tag))};function Mv(i,o){return qo(i,o)}function fA(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(i,o,l,h){return new fA(i,o,l,h)}function xp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function pA(i){if(typeof i=="function")return xp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===kt)return 14}return 2}function hs(i,o){var l=i.alternate;return l===null?(l=sr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function mh(i,o,l,h,p,_){var I=2;if(h=i,typeof i=="function")xp(i)&&(I=1);else if(typeof i=="string")I=5;else e:switch(i){case N:return yo(l.children,p,_,o);case C:I=8,p|=8;break;case P:return i=sr(12,l,o,p|2),i.elementType=P,i.lanes=_,i;case R:return i=sr(13,l,o,p),i.elementType=R,i.lanes=_,i;case ft:return i=sr(19,l,o,p),i.elementType=ft,i.lanes=_,i;case He:return gh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:I=10;break e;case D:I=9;break e;case L:I=11;break e;case kt:I=14;break e;case ut:I=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=sr(I,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function yo(i,o,l,h){return i=sr(7,i,h,o),i.lanes=l,i}function gh(i,o,l,h){return i=sr(22,i,h,o),i.elementType=He,i.lanes=l,i.stateNode={isHidden:!1},i}function Dp(i,o,l){return i=sr(6,i,null,o),i.lanes=l,i}function bp(i,o,l){return o=sr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function mA(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Op(i,o,l,h,p,_,I,A,x){return i=new mA(i,o,l,A,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=sr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(_),i}function gA(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Lv(i){if(!i)return ns;i=i._reactInternals;e:{if(pr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Pn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Pn(l))return cy(i,l,o)}return o}function Vv(i,o,l,h,p,_,I,A,x){return i=Op(l,h,!0,i,p,_,I,A,x),i.context=Lv(null),l=i.current,h=wn(),p=us(l),_=wi(h,p),_.callback=o??null,ss(l,_,p),i.current.lanes=p,Gi(i,p,h),xn(i,h),i}function _h(i,o,l,h){var p=o.current,_=wn(),I=us(p);return l=Lv(l),o.context===null?o.context=l:o.pendingContext=l,o=wi(_,I),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ss(p,o,I),i!==null&&(Ar(i,p,I,_),Kc(i,p,I)),I}function yh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Fv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Mp(i,o){Fv(i,o),(i=i.alternate)&&Fv(i,o)}function _A(){return null}var Uv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Lp(i){this._internalRoot=i}vh.prototype.render=Lp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));_h(i,o,null,null)},vh.prototype.unmount=Lp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;mo(function(){_h(null,i,null,null)}),o[gi]=null}};function vh(i){this._internalRoot=i}vh.prototype.unstable_scheduleHydration=function(i){if(i){var o=vc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<jr.length&&o!==0&&o<jr[l].priority;l++);jr.splice(l,0,i),l===0&&Ic(i)}};function Vp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Eh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function jv(){}function yA(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var W=yh(I);_.call(W)}}var I=Vv(o,h,i,0,null,!1,!1,"",jv);return i._reactRootContainer=I,i[gi]=I.current,Ml(i.nodeType===8?i.parentNode:i),mo(),I}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var W=yh(x);A.call(W)}}var x=Op(i,0,!1,null,null,!1,!1,"",jv);return i._reactRootContainer=x,i[gi]=x.current,Ml(i.nodeType===8?i.parentNode:i),mo(function(){_h(o,x,l,h)}),x}function wh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var I=_;if(typeof p=="function"){var A=p;p=function(){var x=yh(I);A.call(x)}}_h(o,I,i,p)}else I=yA(l,o,i,p,h);return yh(I)}_c=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=qi(o.pendingLanes);l!==0&&(Ki(o,l|1),xn(o,st()),(Ge&6)===0&&(Ta=st()+500,rs()))}break;case 13:mo(function(){var h=Ei(i,1);if(h!==null){var p=wn();Ar(h,i,1,p)}}),Mp(i,1)}},Ko=function(i){if(i.tag===13){var o=Ei(i,134217728);if(o!==null){var l=wn();Ar(o,i,134217728,l)}Mp(i,134217728)}},yc=function(i){if(i.tag===13){var o=us(i),l=Ei(i,o);if(l!==null){var h=wn();Ar(l,i,o,h)}Mp(i,o)}},vc=function(){return Be},Ec=function(i,o){var l=Be;try{return Be=i,o()}finally{Be=l}},gt=function(i,o,l){switch(o){case"input":if(ln(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Fc(h);if(!p)throw Error(t(90));xe(h),ln(h,p)}}}break;case"textarea":ai(i,l);break;case"select":o=l.value,o!=null&&un(i,!!l.multiple,o,!1)}},Ks=Pp,gl=mo;var vA={usingClientEntryPoint:!1,Events:[Fl,ca,Fc,Fr,ml,Pp]},Jl={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:Jl.bundleType,version:Jl.version,rendererPackageName:Jl.rendererPackageName,rendererConfig:Jl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=vl(i),i===null?null:i.stateNode},findFiberByHostInstance:Jl.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ih.isDisabled&&Ih.supportsFiber)try{Zs=Ih.inject(EA),Un=Ih}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA,Dn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(o))throw Error(t(200));return gA(i,o,null,l)},Dn.createRoot=function(i,o){if(!Vp(i))throw Error(t(299));var l=!1,h="",p=Uv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Op(i,1,!1,null,null,l,!1,h,p),i[gi]=o.current,Ml(i.nodeType===8?i.parentNode:i),new Lp(o)},Dn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=vl(o),i=i===null?null:i.stateNode,i},Dn.flushSync=function(i){return mo(i)},Dn.hydrate=function(i,o,l){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!0,l)},Dn.hydrateRoot=function(i,o,l){if(!Vp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",I=Uv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(I=l.onRecoverableError)),o=Vv(o,null,i,1,l??null,p,!1,_,I),i[gi]=o.current,Ml(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new vh(o)},Dn.render=function(i,o,l){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!1,l)},Dn.unmountComponentAtNode=function(i){if(!Eh(i))throw Error(t(40));return i._reactRootContainer?(mo(function(){wh(null,null,i,!1,function(){i._reactRootContainer=null,i[gi]=null})}),!0):!1},Dn.unstable_batchedUpdates=Pp,Dn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Eh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return wh(i,o,l,!1,h)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Kv;function NA(){if(Kv)return jp.exports;Kv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),jp.exports=kA(),jp.exports}var Qv;function xA(){if(Qv)return Th;Qv=1;var n=NA();return Th.createRoot=n.createRoot,Th.hydrateRoot=n.hydrateRoot,Th}var DA=xA();const bA="modulepreload",OA=function(n){return"/"+n},Yv={},gI=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(m=>{if(m=OA(m),m in Yv)return;Yv[m]=!0;const y=m.endsWith(".css"),E=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${E}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":bA,y||(w.as="script"),w.crossOrigin="",w.href=m,f&&w.setAttribute("nonce",f),document.head.appendChild(w),y)return new Promise((k,V)=>{w.addEventListener("load",k),w.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};/**
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
 */const MA=()=>{};var Xv={};/**
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
 */const _I={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const te=function(n,e){if(!n)throw nl(e)},nl=function(n){return new Error("Firebase Database ("+_I.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const yI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},LA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|d>>4;let w=(d&15)<<2|m>>6,k=m&63;f||(k=64,u||(w=64)),r.push(t[y],t[E],t[w],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new VA;const w=a<<2|d>>4;if(r.push(w),m!==64){const k=d<<4&240|m>>2;if(r.push(k),E!==64){const V=m<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vI=function(n){const e=yI(n);return rg.encodeByteArray(e,!0)},Wh=function(n){return vI(n).replace(/\./g,"")},$h=function(n){try{return rg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FA(n){return EI(void 0,n)}function EI(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!UA(t)||(n[t]=EI(n[t],e[t]));return n}function UA(n){return n!=="__proto__"}/**
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
 */function jA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BA=()=>jA().__FIREBASE_DEFAULTS__,zA=()=>{if(typeof process>"u"||typeof Xv>"u")return;const n=Xv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},WA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$h(n[1]);return e&&JSON.parse(e)},Cd=()=>{try{return MA()||BA()||zA()||WA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wI=n=>{var e,t;return(t=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},II=n=>{const e=wI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},TI=()=>{var n;return(n=Cd())===null||n===void 0?void 0:n.config},SI=n=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Qr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Bs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ig(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function CI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wh(JSON.stringify(t)),Wh(JSON.stringify(u)),""].join(".")}const du={};function $A(){const n={prod:[],emulator:[]};for(const e of Object.keys(du))du[e]?n.emulator.push(e):n.prod.push(e);return n}function qA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jv=!1;function sg(n,e){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||du[n]===e||du[n]||Jv)return;du[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",a=$A().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function f(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function m(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Jv=!0,u()},w}function y(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function E(){const w=qA(r),k=t("text"),V=document.getElementById(k)||document.createElement("span"),B=t("learnmore"),z=document.getElementById(B)||document.createElement("a"),Z=t("preprendIcon"),Q=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ie=w.element;d(ie),y(z,B);const le=m();f(Q,Z),ie.append(Q,V,z,le),document.body.appendChild(ie)}a?(V.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function HA(){var n;const e=(n=Cd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function AI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QA(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YA(){return _I.NODE_ADMIN===!0}function XA(){return!HA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JA(){try{return typeof indexedDB=="object"}catch{return!1}}function ZA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const eR="FirebaseError";class Vi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=eR,Object.setPrototypeOf(this,Vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zu.prototype.create)}}class zu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?tR(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Vi(s,d,r)}}function tR(n,e){return n.replace(nR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nR=/\{\$([^}]+)}/g;/**
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
 */function Tu(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
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
 */const RI=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Tu($h(a[0])||""),t=Tu($h(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},rR=function(n){const e=RI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},iR=function(n){const e=RI(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ii(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ja(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function qh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Ni(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Zv(a)&&Zv(u)){if(!Ni(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Zv(n){return n!==null&&typeof n=="object"}/**
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
 */function rl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function iu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function su(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class sR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const w=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(w<<1|w>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):E<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const w=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=w}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function oR(n,e){const t=new aR(n,e);return t.subscribe.bind(t)}class aR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");lR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Wp),s.error===void 0&&(s.error=Wp),s.complete===void 0&&(s.complete=Wp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wp(){}function Ba(n,e){return`${n} failed: ${e} argument `}/**
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
 */const uR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,te(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ad=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class ks{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vo="[DEFAULT]";/**
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
 */class cR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dR(e))try{this.getOrInitializeService({instanceIdentifier:vo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=vo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vo){return this.instances.has(e)}getOptions(e=vo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vo){return this.component?this.component.multipleInstances?e:vo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hR(n){return n===vo?void 0:n}function dR(n){return n.instantiationMode==="EAGER"}/**
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
 */class fR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const pR={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},mR=Ve.INFO,gR={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},_R=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=gR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=mR,this._logHandler=_R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const yR=(n,e)=>e.some(t=>n instanceof t);let eE,tE;function vR(){return eE||(eE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ER(){return tE||(tE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PI=new WeakMap,um=new WeakMap,kI=new WeakMap,$p=new WeakMap,ag=new WeakMap;function wR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Es(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&PI.set(t,n)}).catch(()=>{}),ag.set(e,n),e}function IR(n){if(um.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});um.set(n,e)}let cm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return um.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function TR(n){cm=n(cm)}function SR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qp(this),e,...t);return kI.set(r,e.sort?e.sort():[e]),Es(r)}:ER().includes(n)?function(...e){return n.apply(qp(this),e),Es(PI.get(this))}:function(...e){return Es(n.apply(qp(this),e))}}function CR(n){return typeof n=="function"?SR(n):(n instanceof IDBTransaction&&IR(n),yR(n,vR())?new Proxy(n,cm):n)}function Es(n){if(n instanceof IDBRequest)return wR(n);if($p.has(n))return $p.get(n);const e=CR(n);return e!==n&&($p.set(n,e),ag.set(e,n)),e}const qp=n=>ag.get(n);function AR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Es(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Es(u.result),f.oldVersion,f.newVersion,Es(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const RR=["get","getKey","getAll","getAllKeys","count"],PR=["put","add","delete","clear"],Hp=new Map;function nE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hp.get(e))return Hp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=PR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Hp.set(e,a),a}TR(n=>({...n,get:(e,t,r)=>nE(e,t)||n.get(e,t,r),has:(e,t)=>!!nE(e,t)||n.has(e,t)}));/**
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
 */class kR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(NR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function NR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hm="@firebase/app",rE="0.13.2";/**
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
 */const xi=new Rd("@firebase/app"),xR="@firebase/app-compat",DR="@firebase/analytics-compat",bR="@firebase/analytics",OR="@firebase/app-check-compat",MR="@firebase/app-check",LR="@firebase/auth",VR="@firebase/auth-compat",FR="@firebase/database",UR="@firebase/data-connect",jR="@firebase/database-compat",BR="@firebase/functions",zR="@firebase/functions-compat",WR="@firebase/installations",$R="@firebase/installations-compat",qR="@firebase/messaging",HR="@firebase/messaging-compat",GR="@firebase/performance",KR="@firebase/performance-compat",QR="@firebase/remote-config",YR="@firebase/remote-config-compat",XR="@firebase/storage",JR="@firebase/storage-compat",ZR="@firebase/firestore",e1="@firebase/ai",t1="@firebase/firestore-compat",n1="firebase",r1="11.10.0";/**
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
 */const dm="[DEFAULT]",i1={[hm]:"fire-core",[xR]:"fire-core-compat",[bR]:"fire-analytics",[DR]:"fire-analytics-compat",[MR]:"fire-app-check",[OR]:"fire-app-check-compat",[LR]:"fire-auth",[VR]:"fire-auth-compat",[FR]:"fire-rtdb",[UR]:"fire-data-connect",[jR]:"fire-rtdb-compat",[BR]:"fire-fn",[zR]:"fire-fn-compat",[WR]:"fire-iid",[$R]:"fire-iid-compat",[qR]:"fire-fcm",[HR]:"fire-fcm-compat",[GR]:"fire-perf",[KR]:"fire-perf-compat",[QR]:"fire-rc",[YR]:"fire-rc-compat",[XR]:"fire-gcs",[JR]:"fire-gcs-compat",[ZR]:"fire-fst",[t1]:"fire-fst-compat",[e1]:"fire-vertex","fire-js":"fire-js",[n1]:"fire-js-all"};/**
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
 */const Gh=new Map,s1=new Map,fm=new Map;function iE(n,e){try{n.container.addComponent(e)}catch(t){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Co(n){const e=n.name;if(fm.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;fm.set(e,n);for(const t of Gh.values())iE(t,n);for(const t of s1.values())iE(t,n);return!0}function Pd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function or(n){return n==null?!1:n.settings!==void 0}/**
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
 */const o1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new zu("app","Firebase",o1);/**
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
 */class a1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const Oo=r1;function NI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(t||(t=TI()),!t)throw ws.create("no-options");const a=Gh.get(s);if(a){if(Ni(t,a.options)&&Ni(r,a.config))return a;throw ws.create("duplicate-app",{appName:s})}const u=new fR(s);for(const f of fm.values())u.addComponent(f);const d=new a1(t,r,u);return Gh.set(s,d),d}function lg(n=dm){const e=Gh.get(n);if(!e&&n===dm&&TI())return NI();if(!e)throw ws.create("no-app",{appName:n});return e}function Yr(n,e,t){var r;let s=(r=i1[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(d.join(" "));return}Co(new ks(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const l1="firebase-heartbeat-database",u1=1,Su="firebase-heartbeat-store";let Gp=null;function xI(){return Gp||(Gp=AR(l1,u1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Su)}catch(t){console.warn(t)}}}}).catch(n=>{throw ws.create("idb-open",{originalErrorMessage:n.message})})),Gp}async function c1(n){try{const t=(await xI()).transaction(Su),r=await t.objectStore(Su).get(DI(n));return await t.done,r}catch(e){if(e instanceof Vi)xi.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xi.warn(t.message)}}}async function sE(n,e){try{const r=(await xI()).transaction(Su,"readwrite");await r.objectStore(Su).put(e,DI(n)),await r.done}catch(t){if(t instanceof Vi)xi.warn(t.message);else{const r=ws.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xi.warn(r.message)}}}function DI(n){return`${n.name}!${n.options.appId}`}/**
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
 */const h1=1024,d1=30;class f1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new m1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=oE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>d1){const u=g1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oE(),{heartbeatsToSend:r,unsentEntries:s}=p1(this._heartbeatsCache.heartbeats),a=Wh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return xi.warn(t),""}}}function oE(){return new Date().toISOString().substring(0,10)}function p1(n,e=h1){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),aE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),aE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class m1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JA()?ZA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await c1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function aE(n){return Wh(JSON.stringify({version:2,heartbeats:n})).length}function g1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function _1(n){Co(new ks("platform-logger",e=>new kR(e),"PRIVATE")),Co(new ks("heartbeat",e=>new f1(e),"PRIVATE")),Yr(hm,rE,n),Yr(hm,rE,"esm2017"),Yr("fire-js","")}_1("");function ug(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function bI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y1=bI,OI=new zu("auth","Firebase",bI());/**
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
 */const Kh=new Rd("@firebase/auth");function v1(n,...e){Kh.logLevel<=Ve.WARN&&Kh.warn(`Auth (${Oo}): ${n}`,...e)}function Dh(n,...e){Kh.logLevel<=Ve.ERROR&&Kh.error(`Auth (${Oo}): ${n}`,...e)}/**
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
 */function Dr(n,...e){throw cg(n,...e)}function Xr(n,...e){return cg(n,...e)}function MI(n,e,t){const r=Object.assign(Object.assign({},y1()),{[e]:t});return new zu("auth","Firebase",r).create(e,{appName:n.name})}function Is(n){return MI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return OI.create(n,...e)}function Te(n,e,...t){if(!n)throw cg(e,...t)}function Ci(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dh(e),new Error(e)}function Di(n,e){n||Ci(e)}/**
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
 */function pm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function E1(){return lE()==="http:"||lE()==="https:"}function lE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function w1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||KA()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Wu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Di(t>e,"Short delay should be less than long delay!"),this.isMobile=og()||AI()}get(){return w1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hg(n,e){Di(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class LI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const S1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C1=new Wu(3e4,6e4);function zs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,r,s={}){return VI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=rl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return GA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(m.credentials="include"),LI.fetch()(await FI(n,n.config.apiHost,t,d),m)})}async function VI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},T1),e);try{const s=new R1(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Sh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Sh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Sh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw MI(n,y,m);Dr(n,y)}}catch(s){if(s instanceof Vi)throw s;Dr(n,"network-request-failed",{message:String(s)})}}async function kd(n,e,t,r,s={}){const a=await Fi(n,e,t,r,s);return"mfaPendingCredential"in a&&Dr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function FI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?hg(n.config,s):`${n.config.apiScheme}://${s}`;return S1.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function A1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xr(this.auth,"network-request-failed")),C1.get())})}}function Sh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xr(n,e,r);return s.customData._tokenResponse=t,s}function uE(n){return n!==void 0&&n.enterprise!==void 0}class P1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return A1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function k1(n,e){return Fi(n,"GET","/v2/recaptchaConfig",zs(n,e))}/**
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
 */async function N1(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function Qh(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x1(n,e=!1){const t=et(n),r=await t.getIdToken(e),s=dg(r);Te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:fu(Kp(s.auth_time)),issuedAtTime:fu(Kp(s.iat)),expirationTime:fu(Kp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Kp(n){return Number(n)*1e3}function dg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(t);return s?JSON.parse(s):(Dh("Failed to decode base64 JWT payload"),null)}catch(s){return Dh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cE(n){const e=dg(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vi&&D1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function D1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class b1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Yh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Cu(n,Qh(t,{idToken:r}));Te(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?UI(a.providerUserInfo):[],d=M1(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new mm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function O1(n){const e=et(n);await Yh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function UI(n){return n.map(e=>{var{providerId:t}=e,r=ug(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function L1(n,e){const t=await VI(n,{},async()=>{const r=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await FI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(f.credentials="include"),LI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V1(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",zs(n,e))}/**
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
 */class Da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=cE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await L1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Da;return r&&(Te(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Te(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Te(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Da,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
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
 */function fs(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=ug(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new mm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Cu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return x1(this,e)}reload(){return O1(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await Cu(this,N1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,k=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=t.photoURL)!==null&&u!==void 0?u:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,z=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,Z=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Q=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ie,emailVerified:le,isAnonymous:qe,providerData:Ne,stsTokenManager:N}=t;Te(ie&&N,e,"internal-error");const C=Da.fromJSON(this.name,N);Te(typeof ie=="string",e,"internal-error"),fs(E,e.name),fs(w,e.name),Te(typeof le=="boolean",e,"internal-error"),Te(typeof qe=="boolean",e,"internal-error"),fs(k,e.name),fs(V,e.name),fs(B,e.name),fs(z,e.name),fs(Z,e.name),fs(Q,e.name);const P=new Pr({uid:ie,auth:e,email:w,emailVerified:le,displayName:E,isAnonymous:qe,photoURL:V,phoneNumber:k,tenantId:B,stsTokenManager:C,createdAt:Z,lastLoginAt:Q});return Ne&&Array.isArray(Ne)&&(P.providerData=Ne.map(b=>Object.assign({},b))),z&&(P._redirectEventId=z),P}static async _fromIdTokenResponse(e,t,r=!1){const s=new Da;s.updateFromServerResponse(t);const a=new Pr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Te(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?UI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Da;d.updateFromIdToken(r);const f=new Pr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const hE=new Map;function Ai(n){Di(n instanceof Function,"Expected a class definition");let e=hE.get(n);return e?(Di(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hE.set(n,e),e)}/**
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
 */class jI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jI.type="NONE";const dE=jI;/**
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
 */function bh(n,e,t){return`firebase:${n}:${e}:${t}`}class ba{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=bh(this.userKey,s.apiKey,a),this.fullPersistenceKey=bh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qh(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ba(Ai(dE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Ai(dE);const u=bh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const w=await Qh(e,{idToken:y}).catch(()=>{});if(!w)break;E=await Pr._fromGetAccountInfoResponse(e,w,y)}else E=Pr._fromJSON(e,y);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ba(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new ba(a,e,r))}}/**
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
 */function fE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($I(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(BI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HI(e))return"Blackberry";if(GI(e))return"Webos";if(zI(e))return"Safari";if((e.includes("chrome/")||WI(e))&&!e.includes("edge/"))return"Chrome";if(qI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function BI(n=_n()){return/firefox\//i.test(n)}function zI(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function WI(n=_n()){return/crios\//i.test(n)}function $I(n=_n()){return/iemobile/i.test(n)}function qI(n=_n()){return/android/i.test(n)}function HI(n=_n()){return/blackberry/i.test(n)}function GI(n=_n()){return/webos/i.test(n)}function fg(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function F1(n=_n()){var e;return fg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return QA()&&document.documentMode===10}function KI(n=_n()){return fg(n)||qI(n)||GI(n)||HI(n)||/windows phone/i.test(n)||$I(n)}/**
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
 */function QI(n,e=[]){let t;switch(n){case"Browser":t=fE(_n());break;case"Worker":t=`${fE(_n())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Oo}/${r}`}/**
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
 */class j1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function B1(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",zs(n,e))}/**
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
 */const z1=6;class W1{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:z1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class $1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pE(this),this.idTokenSubscription=new pE(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ai(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await ba.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qh(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(or(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(Is(this));const t=e?et(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await B1(this),t=new W1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await V1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ai(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await ba.create(this,[Ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&v1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mo(n){return et(n)}class pE{constructor(e){this.auth=e,this.observer=null,this.addObserver=oR(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q1(n){Nd=n}function YI(n){return Nd.loadJS(n)}function H1(){return Nd.recaptchaEnterpriseScript}function G1(){return Nd.gapiScript}function K1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Q1{constructor(){this.enterprise=new Y1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Y1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const X1="recaptcha-enterprise",XI="NO_RECAPTCHA";class J1{constructor(e){this.type=X1,this.auth=Mo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{k1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new P1(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;uE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(XI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Q1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&uE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=H1();f.length!==0&&(f+=d),YI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function mE(n,e,t,r=!1,s=!1){const a=new J1(n);let u;if(s)u=XI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function gm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await mE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await mE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function Z1(n,e){const t=Pd(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ni(a,e??{}))return s;Dr(s,"already-initialized")}return t.initialize({options:e})}function eP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ai);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tP(n,e,t){const r=Mo(n);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=JI(e),{host:u,port:d}=nP(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(Ni(m,r.config.emulator)&&Ni(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Bs(u)?(ig(`${a}//${u}${f}`),sg("Auth",!0)):rP()}function JI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nP(n){const e=JI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:gE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:gE(u)}}}function gE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,t){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}async function iP(n,e){return Fi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sP(n,e){return kd(n,"POST","/v1/accounts:signInWithPassword",zs(n,e))}async function ZI(n,e){return Fi(n,"POST","/v1/accounts:sendOobCode",zs(n,e))}async function oP(n,e){return ZI(n,e)}async function aP(n,e){return ZI(n,e)}/**
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
 */async function lP(n,e){return kd(n,"POST","/v1/accounts:signInWithEmailLink",zs(n,e))}async function uP(n,e){return kd(n,"POST","/v1/accounts:signInWithEmailLink",zs(n,e))}/**
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
 */class Au extends pg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Au(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Au(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gm(e,t,"signInWithPassword",sP);case"emailLink":return lP(e,{email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gm(e,r,"signUpPassword",iP);case"emailLink":return uP(e,{idToken:t,email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oa(n,e){return kd(n,"POST","/v1/accounts:signInWithIdp",zs(n,e))}/**
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
 */const cP="http://localhost";class Ao extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=ug(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Ao(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Oa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Oa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oa(e,t)}buildRequest(){const e={requestUri:cP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
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
 */function hP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dP(n){const e=iu(su(n)).link,t=e?iu(su(e)).deep_link_id:null,r=iu(su(n)).deep_link_id;return(r?iu(su(r)).link:null)||r||t||e||n}class mg{constructor(e){var t,r,s,a,u,d;const f=iu(su(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=hP((s=f.mode)!==null&&s!==void 0?s:null);Te(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=dP(e);try{return new mg(t)}catch{return null}}}/**
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
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(e,t){return Au._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mg.parseLink(t);return Te(r,"argument-error"),Au._fromEmailAndCode(e,r.code,r.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $u extends eT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ps extends $u{constructor(){super("facebook.com")}static credential(e){return Ao._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ps.credential(e.oauthAccessToken)}catch{return null}}}ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";ps.PROVIDER_ID="facebook.com";/**
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
 */class ms extends $u{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ao._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ms.credential(t,r)}catch{return null}}}ms.GOOGLE_SIGN_IN_METHOD="google.com";ms.PROVIDER_ID="google.com";/**
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
 */class gs extends $u{constructor(){super("github.com")}static credential(e){return Ao._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.GITHUB_SIGN_IN_METHOD="github.com";gs.PROVIDER_ID="github.com";/**
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
 */class _s extends $u{constructor(){super("twitter.com")}static credential(e,t){return Ao._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _s.credential(t,r)}catch{return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com";_s.PROVIDER_ID="twitter.com";/**
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
 */class za{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Pr._fromIdTokenResponse(e,r,s),u=_E(r);return new za({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_E(r);return new za({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _E(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xh extends Vi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Xh(e,t,r,s)}}function tT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Xh._fromErrorAndOperation(n,a,e,r):a})}async function fP(n,e,t=!1){const r=await Cu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return za._forOperation(n,"link",r)}/**
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
 */async function pP(n,e,t=!1){const{auth:r}=n;if(or(r.app))return Promise.reject(Is(r));const s="reauthenticate";try{const a=await Cu(n,tT(r,s,e,n),t);Te(a.idToken,r,"internal-error");const u=dg(a.idToken);Te(u,r,"internal-error");const{sub:d}=u;return Te(n.uid===d,r,"user-mismatch"),za._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Dr(r,"user-mismatch"),a}}/**
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
 */async function nT(n,e,t=!1){if(or(n.app))return Promise.reject(Is(n));const r="signIn",s=await tT(n,r,e),a=await za._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function mP(n,e){return nT(Mo(n),e)}/**
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
 */async function gP(n){const e=Mo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _P(n,e,t){const r=Mo(n);await gm(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",aP)}function yP(n,e,t){return or(n.app)?Promise.reject(Is(n)):mP(et(n),il.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gP(n),r})}async function vP(n,e){const t=et(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await oP(t.auth,s);a!==n.email&&await n.reload()}function EP(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function wP(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function IP(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}function rT(n){return et(n).signOut()}const Jh="__sak";/**
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
 */class iT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jh,"1"),this.storage.removeItem(Jh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TP=1e3,SP=10;class sT extends iT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=KI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);U1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sT.type="LOCAL";const CP=sT;/**
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
 */class oT extends iT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oT.type="SESSION";const aT=oT;/**
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
 */function AP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await AP(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xd.receivers=[];/**
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
 */class RP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=gg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const w=E;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(w.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Jr(){return window}function PP(n){Jr().location.href=n}/**
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
 */function lT(){return typeof Jr().WorkerGlobalScope<"u"&&typeof Jr().importScripts=="function"}async function kP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xP(){return lT()?self:null}/**
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
 */const uT="firebaseLocalStorageDb",DP=1,Zh="firebaseLocalStorage",cT="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dd(n,e){return n.transaction([Zh],e?"readwrite":"readonly").objectStore(Zh)}function bP(){const n=indexedDB.deleteDatabase(uT);return new qu(n).toPromise()}function _m(){const n=indexedDB.open(uT,DP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Zh,{keyPath:cT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Zh)?e(r):(r.close(),await bP(),e(await _m()))})})}async function yE(n,e,t){const r=Dd(n,!0).put({[cT]:e,value:t});return new qu(r).toPromise()}async function OP(n,e){const t=Dd(n,!1).get(e),r=await new qu(t).toPromise();return r===void 0?null:r.value}function vE(n,e){const t=Dd(n,!0).delete(e);return new qu(t).toPromise()}const MP=800,LP=3;class hT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _m(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>LP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xd._getInstance(xP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kP(),!this.activeServiceWorker)return;this.sender=new RP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _m();return await yE(e,Jh,"1"),await vE(e,Jh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>OP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Dd(s,!1).getAll();return new qu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hT.type="LOCAL";const VP=hT;new Wu(3e4,6e4);/**
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
 */function FP(n,e){return e?Ai(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _g extends pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UP(n){return nT(n.auth,new _g(n),n.bypassAuthState)}function jP(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),pP(t,new _g(n),n.bypassAuthState)}async function BP(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),fP(t,new _g(n),n.bypassAuthState)}/**
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
 */class dT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UP;case"linkViaPopup":case"linkViaRedirect":return BP;case"reauthViaPopup":case"reauthViaRedirect":return jP;default:Dr(this.auth,"internal-error")}}resolve(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zP=new Wu(2e3,1e4);class Na extends dT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Na.currentPopupAction&&Na.currentPopupAction.cancel(),Na.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Di(this.filter.length===1,"Popup operations only handle one event");const e=gg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Na.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}Na.currentPopupAction=null;/**
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
 */const WP="pendingRedirect",Oh=new Map;class $P extends dT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Oh.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Oh.set(this.auth._key(),e)}return this.bypassAuthState||Oh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(n,e){const t=KP(e),r=GP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function HP(n,e){Oh.set(n._key(),e)}function GP(n){return Ai(n._redirectPersistence)}function KP(n){return bh(WP,n.config.apiKey,n.name)}async function QP(n,e,t=!1){if(or(n.app))return Promise.reject(Is(n));const r=Mo(n),s=FP(r,e),u=await new $P(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const YP=600*1e3;class XP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YP&&this.cachedEventUids.clear(),this.cachedEventUids.has(EE(e))}saveEventToCache(e){this.cachedEventUids.add(EE(e)),this.lastProcessedEventTime=Date.now()}}function EE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fT(n);default:return!1}}/**
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
 */async function ZP(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
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
 */const ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tk=/^https?/;async function nk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ZP(n);for(const t of e)try{if(rk(t))return}catch{}Dr(n,"unauthorized-domain")}function rk(n){const e=pm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!tk.test(t))return!1;if(ek.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ik=new Wu(3e4,6e4);function wE(){const n=Jr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sk(n){return new Promise((e,t)=>{var r,s,a;function u(){wE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wE(),t(Xr(n,"network-request-failed"))},timeout:ik.get()})}if(!((s=(r=Jr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Jr().gapi)===null||a===void 0)&&a.load)u();else{const d=K1("iframefcb");return Jr()[d]=()=>{gapi.load?u():t(Xr(n,"network-request-failed"))},YI(`${G1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Mh=null,e})}let Mh=null;function ok(n){return Mh=Mh||sk(n),Mh}/**
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
 */const ak=new Wu(5e3,15e3),lk="__/auth/iframe",uk="emulator/auth/iframe",ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dk(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hg(e,uk):`https://${n.config.authDomain}/${lk}`,r={apiKey:e.apiKey,appName:n.name,v:Oo},s=hk.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${rl(r).slice(1)}`}async function fk(n){const e=await ok(n),t=Jr().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:dk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ck,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Xr(n,"network-request-failed"),d=Jr().setTimeout(()=>{a(u)},ak.get());function f(){Jr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mk=500,gk=600,_k="_blank",yk="http://localhost";class IE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vk(n,e,t,r=mk,s=gk){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},pk),{width:r.toString(),height:s.toString(),top:a,left:u}),m=_n().toLowerCase();t&&(d=WI(m)?_k:t),BI(m)&&(e=e||yk,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[k,V])=>`${w}${k}=${V},`,"");if(F1(m)&&d!=="_self")return Ek(e||"",d),new IE(null);const E=window.open(e||"",d,y);Te(E,n,"popup-blocked");try{E.focus()}catch{}return new IE(E)}function Ek(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const wk="__/auth/handler",Ik="emulator/auth/handler",Tk=encodeURIComponent("fac");async function TE(n,e,t,r,s,a){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Oo,eventId:s};if(e instanceof eT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",qh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof $u){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${Tk}=${encodeURIComponent(f)}`:"";return`${Sk(n)}?${rl(d).slice(1)}${m}`}function Sk({config:n}){return n.emulator?hg(n,Ik):`https://${n.authDomain}/${wk}`}/**
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
 */const Qp="webStorageSupport";class Ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aT,this._completeRedirectFn=QP,this._overrideRedirectResult=HP}async _openPopup(e,t,r,s){var a;Di((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await TE(e,t,r,pm(),s);return vk(e,u,gg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await TE(e,t,r,pm(),s);return PP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Di(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fk(e),r=new XP(e);return t.register("authEvent",s=>(Te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qp,{type:Qp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Qp];u!==void 0&&t(!!u),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return KI()||zI()||fg()}}const Ak=Ck;var SE="@firebase/auth",CE="1.10.8";/**
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
 */class Rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kk(n){Co(new ks("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Te(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QI(n)},m=new $1(r,s,a,f);return eP(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Co(new ks("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(r=>new Rk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yr(SE,CE,Pk(n)),Yr(SE,CE,"esm2017")}/**
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
 */const Nk=300,xk=SI("authIdTokenMaxAge")||Nk;let AE=null;const Dk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>xk)return;const s=t==null?void 0:t.token;AE!==s&&(AE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bk(n=lg()){const e=Pd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Z1(n,{popupRedirectResolver:Ak,persistence:[VP,CP,aT]}),r=SI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Dk(a.toString());wP(t,u,()=>u(t.currentUser)),EP(t,d=>u(d))}}const s=wI("auth");return s&&tP(t,`http://${s}`),t}function Ok(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}q1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Xr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",Ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kk("Browser");var Mk="firebase",Lk="11.10.0";/**
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
 */Yr(Mk,Lk,"app");var RE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,pT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,C){function P(){}P.prototype=C.prototype,N.D=C.prototype,N.prototype=new P,N.prototype.constructor=N,N.C=function(b,D,L){for(var R=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)R[ft-2]=arguments[ft];return C.prototype[D].apply(b,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(N,C,P){P||(P=0);var b=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)b[D]=C.charCodeAt(P++)|C.charCodeAt(P++)<<8|C.charCodeAt(P++)<<16|C.charCodeAt(P++)<<24;else for(D=0;16>D;++D)b[D]=C[P++]|C[P++]<<8|C[P++]<<16|C[P++]<<24;C=N.g[0],P=N.g[1],D=N.g[2];var L=N.g[3],R=C+(L^P&(D^L))+b[0]+3614090360&4294967295;C=P+(R<<7&4294967295|R>>>25),R=L+(D^C&(P^D))+b[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=D+(P^L&(C^P))+b[2]+606105819&4294967295,D=L+(R<<17&4294967295|R>>>15),R=P+(C^D&(L^C))+b[3]+3250441966&4294967295,P=D+(R<<22&4294967295|R>>>10),R=C+(L^P&(D^L))+b[4]+4118548399&4294967295,C=P+(R<<7&4294967295|R>>>25),R=L+(D^C&(P^D))+b[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=D+(P^L&(C^P))+b[6]+2821735955&4294967295,D=L+(R<<17&4294967295|R>>>15),R=P+(C^D&(L^C))+b[7]+4249261313&4294967295,P=D+(R<<22&4294967295|R>>>10),R=C+(L^P&(D^L))+b[8]+1770035416&4294967295,C=P+(R<<7&4294967295|R>>>25),R=L+(D^C&(P^D))+b[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=D+(P^L&(C^P))+b[10]+4294925233&4294967295,D=L+(R<<17&4294967295|R>>>15),R=P+(C^D&(L^C))+b[11]+2304563134&4294967295,P=D+(R<<22&4294967295|R>>>10),R=C+(L^P&(D^L))+b[12]+1804603682&4294967295,C=P+(R<<7&4294967295|R>>>25),R=L+(D^C&(P^D))+b[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=D+(P^L&(C^P))+b[14]+2792965006&4294967295,D=L+(R<<17&4294967295|R>>>15),R=P+(C^D&(L^C))+b[15]+1236535329&4294967295,P=D+(R<<22&4294967295|R>>>10),R=C+(D^L&(P^D))+b[1]+4129170786&4294967295,C=P+(R<<5&4294967295|R>>>27),R=L+(P^D&(C^P))+b[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=D+(C^P&(L^C))+b[11]+643717713&4294967295,D=L+(R<<14&4294967295|R>>>18),R=P+(L^C&(D^L))+b[0]+3921069994&4294967295,P=D+(R<<20&4294967295|R>>>12),R=C+(D^L&(P^D))+b[5]+3593408605&4294967295,C=P+(R<<5&4294967295|R>>>27),R=L+(P^D&(C^P))+b[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=D+(C^P&(L^C))+b[15]+3634488961&4294967295,D=L+(R<<14&4294967295|R>>>18),R=P+(L^C&(D^L))+b[4]+3889429448&4294967295,P=D+(R<<20&4294967295|R>>>12),R=C+(D^L&(P^D))+b[9]+568446438&4294967295,C=P+(R<<5&4294967295|R>>>27),R=L+(P^D&(C^P))+b[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=D+(C^P&(L^C))+b[3]+4107603335&4294967295,D=L+(R<<14&4294967295|R>>>18),R=P+(L^C&(D^L))+b[8]+1163531501&4294967295,P=D+(R<<20&4294967295|R>>>12),R=C+(D^L&(P^D))+b[13]+2850285829&4294967295,C=P+(R<<5&4294967295|R>>>27),R=L+(P^D&(C^P))+b[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=D+(C^P&(L^C))+b[7]+1735328473&4294967295,D=L+(R<<14&4294967295|R>>>18),R=P+(L^C&(D^L))+b[12]+2368359562&4294967295,P=D+(R<<20&4294967295|R>>>12),R=C+(P^D^L)+b[5]+4294588738&4294967295,C=P+(R<<4&4294967295|R>>>28),R=L+(C^P^D)+b[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=D+(L^C^P)+b[11]+1839030562&4294967295,D=L+(R<<16&4294967295|R>>>16),R=P+(D^L^C)+b[14]+4259657740&4294967295,P=D+(R<<23&4294967295|R>>>9),R=C+(P^D^L)+b[1]+2763975236&4294967295,C=P+(R<<4&4294967295|R>>>28),R=L+(C^P^D)+b[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=D+(L^C^P)+b[7]+4139469664&4294967295,D=L+(R<<16&4294967295|R>>>16),R=P+(D^L^C)+b[10]+3200236656&4294967295,P=D+(R<<23&4294967295|R>>>9),R=C+(P^D^L)+b[13]+681279174&4294967295,C=P+(R<<4&4294967295|R>>>28),R=L+(C^P^D)+b[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=D+(L^C^P)+b[3]+3572445317&4294967295,D=L+(R<<16&4294967295|R>>>16),R=P+(D^L^C)+b[6]+76029189&4294967295,P=D+(R<<23&4294967295|R>>>9),R=C+(P^D^L)+b[9]+3654602809&4294967295,C=P+(R<<4&4294967295|R>>>28),R=L+(C^P^D)+b[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=D+(L^C^P)+b[15]+530742520&4294967295,D=L+(R<<16&4294967295|R>>>16),R=P+(D^L^C)+b[2]+3299628645&4294967295,P=D+(R<<23&4294967295|R>>>9),R=C+(D^(P|~L))+b[0]+4096336452&4294967295,C=P+(R<<6&4294967295|R>>>26),R=L+(P^(C|~D))+b[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=D+(C^(L|~P))+b[14]+2878612391&4294967295,D=L+(R<<15&4294967295|R>>>17),R=P+(L^(D|~C))+b[5]+4237533241&4294967295,P=D+(R<<21&4294967295|R>>>11),R=C+(D^(P|~L))+b[12]+1700485571&4294967295,C=P+(R<<6&4294967295|R>>>26),R=L+(P^(C|~D))+b[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=D+(C^(L|~P))+b[10]+4293915773&4294967295,D=L+(R<<15&4294967295|R>>>17),R=P+(L^(D|~C))+b[1]+2240044497&4294967295,P=D+(R<<21&4294967295|R>>>11),R=C+(D^(P|~L))+b[8]+1873313359&4294967295,C=P+(R<<6&4294967295|R>>>26),R=L+(P^(C|~D))+b[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=D+(C^(L|~P))+b[6]+2734768916&4294967295,D=L+(R<<15&4294967295|R>>>17),R=P+(L^(D|~C))+b[13]+1309151649&4294967295,P=D+(R<<21&4294967295|R>>>11),R=C+(D^(P|~L))+b[4]+4149444226&4294967295,C=P+(R<<6&4294967295|R>>>26),R=L+(P^(C|~D))+b[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=D+(C^(L|~P))+b[2]+718787259&4294967295,D=L+(R<<15&4294967295|R>>>17),R=P+(L^(D|~C))+b[9]+3951481745&4294967295,N.g[0]=N.g[0]+C&4294967295,N.g[1]=N.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+L&4294967295}r.prototype.u=function(N,C){C===void 0&&(C=N.length);for(var P=C-this.blockSize,b=this.B,D=this.h,L=0;L<C;){if(D==0)for(;L<=P;)s(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<C;)if(b[D++]=N.charCodeAt(L++),D==this.blockSize){s(this,b),D=0;break}}else for(;L<C;)if(b[D++]=N[L++],D==this.blockSize){s(this,b),D=0;break}}this.h=D,this.o+=C},r.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var C=1;C<N.length-8;++C)N[C]=0;var P=8*this.o;for(C=N.length-8;C<N.length;++C)N[C]=P&255,P/=256;for(this.u(N),N=Array(16),C=P=0;4>C;++C)for(var b=0;32>b;b+=8)N[P++]=this.g[C]>>>b&255;return N};function a(N,C){var P=d;return Object.prototype.hasOwnProperty.call(P,N)?P[N]:P[N]=C(N)}function u(N,C){this.h=C;for(var P=[],b=!0,D=N.length-1;0<=D;D--){var L=N[D]|0;b&&L==C||(P[D]=L,b=!1)}this.g=P}var d={};function f(N){return-128<=N&&128>N?a(N,function(C){return new u([C|0],0>C?-1:0)}):new u([N|0],0>N?-1:0)}function m(N){if(isNaN(N)||!isFinite(N))return E;if(0>N)return z(m(-N));for(var C=[],P=1,b=0;N>=P;b++)C[b]=N/P|0,P*=4294967296;return new u(C,0)}function y(N,C){if(N.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(N.charAt(0)=="-")return z(y(N.substring(1),C));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=m(Math.pow(C,8)),b=E,D=0;D<N.length;D+=8){var L=Math.min(8,N.length-D),R=parseInt(N.substring(D,D+L),C);8>L?(L=m(Math.pow(C,L)),b=b.j(L).add(m(R))):(b=b.j(P),b=b.add(m(R)))}return b}var E=f(0),w=f(1),k=f(16777216);n=u.prototype,n.m=function(){if(B(this))return-z(this).m();for(var N=0,C=1,P=0;P<this.g.length;P++){var b=this.i(P);N+=(0<=b?b:4294967296+b)*C,C*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(V(this))return"0";if(B(this))return"-"+z(this).toString(N);for(var C=m(Math.pow(N,6)),P=this,b="";;){var D=le(P,C).g;P=Z(P,D.j(C));var L=((0<P.g.length?P.g[0]:P.h)>>>0).toString(N);if(P=D,V(P))return L+b;for(;6>L.length;)L="0"+L;b=L+b}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function V(N){if(N.h!=0)return!1;for(var C=0;C<N.g.length;C++)if(N.g[C]!=0)return!1;return!0}function B(N){return N.h==-1}n.l=function(N){return N=Z(this,N),B(N)?-1:V(N)?0:1};function z(N){for(var C=N.g.length,P=[],b=0;b<C;b++)P[b]=~N.g[b];return new u(P,~N.h).add(w)}n.abs=function(){return B(this)?z(this):this},n.add=function(N){for(var C=Math.max(this.g.length,N.g.length),P=[],b=0,D=0;D<=C;D++){var L=b+(this.i(D)&65535)+(N.i(D)&65535),R=(L>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);b=R>>>16,L&=65535,R&=65535,P[D]=R<<16|L}return new u(P,P[P.length-1]&-2147483648?-1:0)};function Z(N,C){return N.add(z(C))}n.j=function(N){if(V(this)||V(N))return E;if(B(this))return B(N)?z(this).j(z(N)):z(z(this).j(N));if(B(N))return z(this.j(z(N)));if(0>this.l(k)&&0>N.l(k))return m(this.m()*N.m());for(var C=this.g.length+N.g.length,P=[],b=0;b<2*C;b++)P[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<N.g.length;D++){var L=this.i(b)>>>16,R=this.i(b)&65535,ft=N.i(D)>>>16,kt=N.i(D)&65535;P[2*b+2*D]+=R*kt,Q(P,2*b+2*D),P[2*b+2*D+1]+=L*kt,Q(P,2*b+2*D+1),P[2*b+2*D+1]+=R*ft,Q(P,2*b+2*D+1),P[2*b+2*D+2]+=L*ft,Q(P,2*b+2*D+2)}for(b=0;b<C;b++)P[b]=P[2*b+1]<<16|P[2*b];for(b=C;b<2*C;b++)P[b]=0;return new u(P,0)};function Q(N,C){for(;(N[C]&65535)!=N[C];)N[C+1]+=N[C]>>>16,N[C]&=65535,C++}function ie(N,C){this.g=N,this.h=C}function le(N,C){if(V(C))throw Error("division by zero");if(V(N))return new ie(E,E);if(B(N))return C=le(z(N),C),new ie(z(C.g),z(C.h));if(B(C))return C=le(N,z(C)),new ie(z(C.g),C.h);if(30<N.g.length){if(B(N)||B(C))throw Error("slowDivide_ only works with positive integers.");for(var P=w,b=C;0>=b.l(N);)P=qe(P),b=qe(b);var D=Ne(P,1),L=Ne(b,1);for(b=Ne(b,2),P=Ne(P,2);!V(b);){var R=L.add(b);0>=R.l(N)&&(D=D.add(P),L=R),b=Ne(b,1),P=Ne(P,1)}return C=Z(N,D.j(C)),new ie(D,C)}for(D=E;0<=N.l(C);){for(P=Math.max(1,Math.floor(N.m()/C.m())),b=Math.ceil(Math.log(P)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),L=m(P),R=L.j(C);B(R)||0<R.l(N);)P-=b,L=m(P),R=L.j(C);V(L)&&(L=w),D=D.add(L),N=Z(N,R)}return new ie(D,N)}n.A=function(N){return le(this,N).h},n.and=function(N){for(var C=Math.max(this.g.length,N.g.length),P=[],b=0;b<C;b++)P[b]=this.i(b)&N.i(b);return new u(P,this.h&N.h)},n.or=function(N){for(var C=Math.max(this.g.length,N.g.length),P=[],b=0;b<C;b++)P[b]=this.i(b)|N.i(b);return new u(P,this.h|N.h)},n.xor=function(N){for(var C=Math.max(this.g.length,N.g.length),P=[],b=0;b<C;b++)P[b]=this.i(b)^N.i(b);return new u(P,this.h^N.h)};function qe(N){for(var C=N.g.length+1,P=[],b=0;b<C;b++)P[b]=N.i(b)<<1|N.i(b-1)>>>31;return new u(P,N.h)}function Ne(N,C){var P=C>>5;C%=32;for(var b=N.g.length-P,D=[],L=0;L<b;L++)D[L]=0<C?N.i(L+P)>>>C|N.i(L+P+1)<<32-C:N.i(L+P);return new u(D,N.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Ts=u}).apply(typeof RE<"u"?RE:typeof self<"u"?self:typeof window<"u"?window:{});var Ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mT,ou,gT,Lh,ym,_T,yT,vT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ch=="object"&&Ch];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var F=c[S];if(!(F in v))break e;v=v[F]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,S=!1,F={next:function(){if(!S&&v<c.length){var $=v++;return{value:g($,c[$]),done:!1}}return S=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,S),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function w(c,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,w.apply(null,arguments)}function k(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function V(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,F,$){for(var ne=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)ne[Ze-2]=arguments[Ze];return g.prototype[F].apply(S,ne)}}function B(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function z(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(f(S)){const F=c.length||0,$=S.length||0;c.length=F+$;for(let ne=0;ne<$;ne++)c[F+ne]=S[ne]}else c.push(S)}}class Z{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Q(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function le(c){return le[" "](c),c}le[" "]=function(){};var qe=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function Ne(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function N(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function C(c){const g={};for(const v in c)g[v]=c[v];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,g){let v,S;for(let F=1;F<arguments.length;F++){S=arguments[F];for(v in S)c[v]=S[v];for(let $=0;$<P.length;$++)v=P[$],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function D(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function L(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ft{constructor(){this.h=this.g=null}add(g,v){const S=kt.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var kt=new Z(()=>new ut,c=>c.reset());class ut{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let He,re=!1,ge=new ft,ae=()=>{const c=d.Promise.resolve(void 0);He=()=>{c.then(M)}};var M=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(v){L(v)}var g=kt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}re=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ye=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function ke(c,g){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(qe){e:{try{le(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:me[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ke.aa.h.call(this)}}V(ke,se);var me={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function je(c,g,v,S,F){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=F,this.key=++Ue,this.da=this.fa=!1}function it(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Vn(c){this.src=c,this.g={},this.h=0}Vn.prototype.add=function(c,g,v,S,F){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ne=Fn(c,g,S,F);return-1<ne?(g=c[ne],v||(g.fa=!1)):(g=new je(g,this.src,$,!!S,F),g.fa=v,c.push(g)),g};function xe(c,g){var v=g.type;if(v in c.g){var S=c.g[v],F=Array.prototype.indexOf.call(S,g,void 0),$;($=0<=F)&&Array.prototype.splice.call(S,F,1),$&&(it(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Fn(c,g,v,S){for(var F=0;F<c.length;++F){var $=c[F];if(!$.da&&$.listener==g&&$.capture==!!v&&$.ha==S)return F}return-1}var Je="closure_lm_"+(1e6*Math.random()|0),Mr={};function an(c,g,v,S,F){if(Array.isArray(g)){for(var $=0;$<g.length;$++)an(c,g[$],v,S,F);return null}return v=ji(v),c&&c[ze]?c.K(g,v,m(S)?!!S.capture:!1,F):ln(c,g,v,!1,S,F)}function ln(c,g,v,S,F,$){if(!g)throw Error("Invalid event type");var ne=m(F)?!!F.capture:!!F,Ze=oi(c);if(Ze||(c[Je]=Ze=new Vn(c)),v=Ze.add(g,v,S,ne,$),v.proxy)return v;if(S=cr(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)ye||(F=ne),F===void 0&&(F=!1),c.addEventListener(g.toString(),S,F);else if(c.attachEvent)c.attachEvent(un(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function cr(){function c(v){return g.call(c.src,c.listener,v)}const g=Yn;return c}function si(c,g,v,S,F){if(Array.isArray(g))for(var $=0;$<g.length;$++)si(c,g[$],v,S,F);else S=m(S)?!!S.capture:!!S,v=ji(v),c&&c[ze]?(c=c.i,g=String(g).toString(),g in c.g&&($=c.g[g],v=Fn($,v,S,F),-1<v&&(it($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete c.g[g],c.h--)))):c&&(c=oi(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Fn(g,v,S,F)),(v=-1<c?g[c]:null)&&Qn(v))}function Qn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ze])xe(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(un(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=oi(g))?(xe(v,c),v.h==0&&(v.src=null,g[Je]=null)):it(c)}}}function un(c){return c in Mr?Mr[c]:Mr[c]="on"+c}function Yn(c,g){if(c.da)c=!0;else{g=new ke(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&Qn(c),c=v.call(S,g)}return c}function oi(c){return c=c[Je],c instanceof Vn?c:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function ji(c){return typeof c=="function"?c:(c[ai]||(c[ai]=function(g){return c.handleEvent(g)}),c[ai])}function Ct(){G.call(this),this.i=new Vn(this),this.M=this,this.F=null}V(Ct,G),Ct.prototype[ze]=!0,Ct.prototype.removeEventListener=function(c,g,v,S){si(this,c,g,v,S)};function wt(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new se(g,c);else if(g instanceof se)g.target=g.target||c;else{var F=g;g=new se(S,c),b(g,F)}if(F=!0,v)for(var $=v.length-1;0<=$;$--){var ne=g.g=v[$];F=hr(ne,S,!0,g)&&F}if(ne=g.g=c,F=hr(ne,S,!0,g)&&F,F=hr(ne,S,!1,g)&&F,v)for($=0;$<v.length;$++)ne=g.g=v[$],F=hr(ne,S,!1,g)&&F}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)it(v[S]);delete c.g[g],c.h--}}this.F=null},Ct.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},Ct.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function hr(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,$=0;$<g.length;++$){var ne=g[$];if(ne&&!ne.da&&ne.capture==v){var Ze=ne.listener,Lt=ne.ha||ne.src;ne.fa&&xe(c.i,ne),F=Ze.call(Lt,S)!==!1&&F}}return F&&!S.defaultPrevented}function Bi(c,g,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Lr(c){c.g=Bi(()=>{c.g=null,c.i&&(c.i=!1,Lr(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class li extends G{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(c){G.call(this),this.h=c,this.g={}}V(ui,G);var zi=[];function Hs(c){Ne(c.g,function(g,v){this.g.hasOwnProperty(v)&&Qn(g)},c),c.g={}}ui.prototype.N=function(){ui.aa.N.call(this),Hs(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gs=d.JSON.stringify,Wi=d.JSON.parse,q=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function ve(){}ve.prototype.h=null;function Ye(c){return c.h||(c.h=c.i())}function gt(){}var zt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){se.call(this,"d")}V(Vr,se);function jo(){se.call(this,"c")}V(jo,se);var Fr={},ml=null;function Ks(){return ml=ml||new Ct}Fr.La="serverreachability";function gl(c){se.call(this,Fr.La,c)}V(gl,se);function ci(c){const g=Ks();wt(g,new gl(g))}Fr.STAT_EVENT="statevent";function _l(c,g){se.call(this,Fr.STAT_EVENT,c),this.stat=g}V(_l,se);function At(c){const g=Ks();wt(g,new _l(g,c))}Fr.Ma="timingevent";function Bo(c,g){se.call(this,Fr.Ma,c),this.size=g}V(Bo,se);function dr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function Ys(c,g,v,S,F,$){c.info(function(){if(c.g)if($)for(var ne="",Ze=$.split("&"),Lt=0;Lt<Ze.length;Lt++){var We=Ze[Lt].split("=");if(1<We.length){var Wt=We[0];We=We[1];var Nt=Wt.split("_");ne=2<=Nt.length&&Nt[1]=="type"?ne+(Wt+"="+We+"&"):ne+(Wt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+S+") [attempt "+F+"]: "+g+`
`+v+`
`+ne})}function zo(c,g,v,S,F,$,ne){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+F+"]: "+g+`
`+v+`
`+$+" "+ne})}function fr(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+df(c,v)+(S?" "+S:"")})}function yl(c,g){c.info(function(){return"TIMEOUT: "+g})}Qs.prototype.info=function(){};function df(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var F=S[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<F.length;ne++)F[ne]=""}}}}return Gs(v)}catch{return g}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function Xs(){}V(Xs,ve),Xs.prototype.g=function(){return new XMLHttpRequest},Xs.prototype.i=function(){return{}},pr=new Xs;function mr(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var vl={},$o={};function qo(c,g,v){c.L=1,c.v=Ki(jn(g)),c.m=v,c.P=!0,El(c,null)}function El(c,g){c.F=Date.now(),st(c),c.A=jn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Yi(v.i,"t",S),c.C=0,v=c.j.J,c.h=new cc,c.g=Pc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new li(w(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(zi[0]=F.toString()),F=zi);for(var $=0;$<F.length;$++){var ne=an(v,F[$],S||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ci(),Ys(c.i,c.u,c.A,c.l,c.R,c.m)}mr.prototype.ca=function(c){c=c.target;const g=this.M;g&&An(c)==3?g.j():this.Y(c)},mr.prototype.Y=function(c){try{if(c==this.g)e:{const Nt=An(this.g);var g=this.g.Ba();const Zn=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Al(this.g)))){this.J||Nt!=4||g==7||(g==8||0>=Zn?ci(3):ci(2)),Js(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var S=Al(this.g);c="";var F=S.length,$=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),$i(this);var ne="";break t}this.h.i=new d.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!($&&g==F-1)});S.length=0,this.h.g+=c,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,zo(this.i,this.u,this.A,this.l,this.R,Nt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ze,Lt=this.g;if((Ze=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ze)){var We=Ze;break t}}We=null}if(v=We)fr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wl(this,v);else{this.o=!1,this.s=3,At(12),Xn(this),$i(this);break e}}if(this.P){v=!0;let zn;for(;!this.J&&this.C<ne.length;)if(zn=ff(this,ne),zn==$o){Nt==4&&(this.s=4,At(14),v=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(zn==vl){this.s=4,At(15),fr(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else fr(this.i,this.l,zn,null),wl(this,zn);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||ne.length!=0||this.h.h||(this.s=1,At(16),v=!1),this.o=this.o&&v,!v)fr(this.i,this.l,ne,"[Invalid Chunked Response]"),Xn(this),$i(this);else if(0<ne.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Pl(Wt),Wt.M=!0,At(11))}}else fr(this.i,this.l,ne,null),wl(this,ne);Nt==4&&Xn(this),this.o&&!this.J&&(Nt==4?na(this.j,this):(this.o=!1,st(this)))}else Xo(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Xn(this),$i(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ff(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?$o:(v=Number(g.substring(v,S)),isNaN(v)?vl:(S+=1,S+v>g.length?$o:(g=g.slice(S,S+v),c.C=S+v,g)))}mr.prototype.cancel=function(){this.J=!0,Xn(this)};function st(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=dr(w(c.ba,c),g)}function Js(c){c.B&&(d.clearTimeout(c.B),c.B=null)}mr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(yl(this.i,this.A),this.L!=2&&(ci(),At(17)),Xn(this),this.s=2,$i(this)):dc(this,this.S-c)};function $i(c){c.j.G==0||c.J||na(c.j,c)}function Xn(c){Js(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Hs(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function wl(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||yn(v.h,c))){if(!c.K&&yn(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var F=S;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ta(v),Er(v);else break e;ea(v),At(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=dr(w(v.Za,v),6e3));if(1>=pc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else mi(v,11)}else if((c.K||v.g==c)&&ta(v),!Q(g))for(F=v.Da.g.parse(g),g=0;g<F.length;g++){let We=F[g];if(v.T=We[0],We=We[1],v.G==2)if(We[0]=="c"){v.K=We[1],v.ia=We[2];const Wt=We[3];Wt!=null&&(v.la=Wt,v.j.info("VER="+v.la));const Nt=We[4];Nt!=null&&(v.Aa=Nt,v.j.info("SVER="+v.Aa));const Zn=We[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(S=1.5*Zn,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const zn=c.g;if(zn){const so=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var $=S.h;$.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Il($,$.h),$.h=null))}if(S.D){const ia=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;ia&&(S.ya=ia,nt(S.I,S.D,ia))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var ne=c;if(S.qa=Rc(S,S.J?S.ia:null,S.W),ne.K){mc(S.h,ne);var Ze=ne,Lt=S.L;Lt&&(Ze.I=Lt),Ze.B&&(Js(Ze),st(Ze)),S.g=ne}else io(S);0<v.i.length&&zr(v)}else We[0]!="stop"&&We[0]!="close"||mi(v,7);else v.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?mi(v,7):Zt(v):We[0]!="noop"&&v.l&&v.l.ta(We),v.v=0)}}ci(4)}catch{}}var fc=class{constructor(c,g){this.g=c,this.map=g}};function Zs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Un(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pc(c){return c.h?1:c.g?c.g.size:0}function yn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Il(c,g){c.g?c.g.add(g):c.h=g}function mc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Zs.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return B(c.i)}function Ho(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function Go(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function qi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Go(c),S=Ho(c),F=S.length,$=0;$<F;$++)g.call(void 0,S[$],v&&v[$],c)}var eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),F=null;if(0<=S){var $=c[v].substring(0,S);F=c[v].substring(S+1)}else $=c[v];g($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function hi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof hi){this.h=c.h,to(this,c.j),this.o=c.o,this.g=c.g,Hi(this,c.s),this.l=c.l;var g=c.i,v=new Ur;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Gi(this,v),this.m=c.m}else c&&(g=String(c).match(eo))?(this.h=!1,to(this,g[1]||"",!0),this.o=Be(g[2]||""),this.g=Be(g[3]||"",!0),Hi(this,g[4]),this.l=Be(g[5]||"",!0),Gi(this,g[6]||"",!0),this.m=Be(g[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}hi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Qi(g,Ko,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Qi(g,Ko,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Qi(v,v.charAt(0)=="/"?vc:yc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Qi(v,Tl)),c.join("")};function jn(c){return new hi(c)}function to(c,g,v){c.j=v?Be(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Hi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Gi(c,g,v){g instanceof Ur?(c.i=g,jr(c.i,c.h)):(v||(g=Qi(g,Ec)),c.i=new Ur(g,c.h))}function nt(c,g,v){c.i.set(g,v)}function Ki(c){return nt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Be(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,_c),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _c(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ko=/[#\/\?@]/g,yc=/[#\?:]/g,vc=/[#\?]/g,Ec=/[#\?@]/g,Tl=/#/g;function Ur(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Jt(c){c.g||(c.g=new Map,c.h=0,c.i&&pf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Ur.prototype,n.add=function(c,g){Jt(this),this.i=null,c=Jn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function gr(c,g){Jt(c),g=Jn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function _r(c,g){return Jt(c),g=Jn(c,g),c.g.has(g)}n.forEach=function(c,g){Jt(this),this.g.forEach(function(v,S){v.forEach(function(F){c.call(g,F,S,this)},this)},this)},n.na=function(){Jt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const F=c[S];for(let $=0;$<F.length;$++)v.push(g[S])}return v},n.V=function(c){Jt(this);let g=[];if(typeof c=="string")_r(this,c)&&(g=g.concat(this.g.get(Jn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Jt(this),this.i=null,c=Jn(this,c),_r(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Yi(c,g,v){gr(c,g),0<v.length&&(c.i=null,c.g.set(Jn(c,g),B(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const $=encodeURIComponent(String(S)),ne=this.V(S);for(S=0;S<ne.length;S++){var F=$;ne[S]!==""&&(F+="="+encodeURIComponent(String(ne[S]))),c.push(F)}}return this.i=c.join("&")};function Jn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function jr(c,g){g&&!c.j&&(Jt(c),c.i=null,c.g.forEach(function(v,S){var F=S.toLowerCase();S!=F&&(gr(this,S),Yi(this,F,v))},c)),c.j=g}function mf(c,g){const v=new Qs;if(d.Image){const S=new Image;S.onload=k(Cn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=k(Cn,v,"TestLoadImage: error",!1,g,S),S.onabort=k(Cn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=k(Cn,v,"TestLoadImage: timeout",!1,g,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function wc(c,g){const v=new Qs,S=new AbortController,F=setTimeout(()=>{S.abort(),Cn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then($=>{clearTimeout(F),$.ok?Cn(v,"TestPingServer: ok",!0,g):Cn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),Cn(v,"TestPingServer: error",!1,g)})}function Cn(c,g,v,S,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),S(v)}catch{}}function gf(){this.g=new q}function Ic(c,g,v){const S=v||"";try{qi(c,function(F,$){let ne=F;m(F)&&(ne=Gs(F)),g.push(S+$+"="+encodeURIComponent(ne))})}catch(F){throw g.push(S+"type="+encodeURIComponent("_badmap")),F}}function di(c){this.l=c.Ub||null,this.j=c.eb||!1}V(di,ve),di.prototype.g=function(){return new no(this.l,this.j)},di.prototype.i=(function(c){return function(){return c}})({});function no(c,g){Ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(no,Ct),n=no.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,vr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?yr(this):vr(this),this.readyState==3&&Tc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,yr(this))},n.Qa=function(c){this.g&&(this.response=c,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,vr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function vr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(no.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function fi(c){let g="";return Ne(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function Xi(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=fi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):nt(c,g,v))}function pt(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(pt,Ct);var _f=/^https?$/i,Sl=["POST","PUT"];n=pt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?Ye(this.o):Ye(pr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch($){ro(this,$);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var F in S)v.set(F,S[F]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const $ of S.keys())v.set($,S.get($));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Sl,g,void 0))||S||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of v)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yo(this),this.u=!0,this.g.send(c),this.u=!1}catch($){ro(this,$)}};function ro(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Qo(c),Bn(c)}function Qo(c){c.A||(c.A=!0,wt(c,"complete"),wt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,wt(this,"complete"),wt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Cl(this):this.bb())},n.bb=function(){Cl(this)};function Cl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||An(c)!=4||c.Z()!=2)){if(c.u&&An(c)==4)Bi(c.Ea,0,c);else if(wt(c,"readystatechange"),An(c)==4){c.h=!1;try{const ne=c.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=ne===0){var F=String(c.D).match(eo)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),S=!_f.test(F?F.toLowerCase():"")}v=S}if(v)wt(c,"complete"),wt(c,"success");else{c.m=6;try{var $=2<An(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Qo(c)}}finally{Bn(c)}}}}function Bn(c,g){if(c.g){Yo(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||wt(c,"ready");try{v.onreadystatechange=S}catch{}}}function Yo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function An(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Wi(g)}};function Al(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Xo(c){const g={};c=(c.g&&2<=An(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(Q(c[S]))continue;var v=D(c[S]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=g[F]||[];g[F]=$,$.push(v)}N(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Rl(c){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Br("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Br("baseRetryDelayMs",5e3,c),this.cb=Br("retryDelaySeedMs",1e4,c),this.Wa=Br("forwardChannelMaxRetries",2,c),this.wa=Br("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Zs(c&&c.concurrentRequestLimit),this.Da=new gf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,S){At(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Rc(this,null,this.W),zr(this)};function Zt(c){if(Jo(c),c.G==3){var g=c.U++,v=jn(c.I);if(nt(v,"SID",c.K),nt(v,"RID",g),nt(v,"TYPE","terminate"),pi(c,v),g=new mr(c,c.j,g),g.L=2,g.v=Ki(jn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Pc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),st(g)}Ac(c)}function Er(c){c.g&&(Pl(c),c.g.cancel(),c.g=null)}function Jo(c){Er(c),c.u&&(d.clearTimeout(c.u),c.u=null),ta(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function zr(c){if(!Un(c.h)&&!c.s){c.s=!0;var g=c.Ga;He||ae(),re||(He(),re=!0),ge.add(g,c),c.B=0}}function yf(c,g){return pc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=dr(w(c.Ga,c,g),Cc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new mr(this,this.j,c);let $=this.o;if(this.S&&($?($=C($),b($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Ji(this,F,g),v=jn(this.I),nt(v,"RID",c),nt(v,"CVER",22),this.D&&nt(v,"X-HTTP-Session-Id",this.D),pi(this,v),$&&(this.O?g="headers="+encodeURIComponent(String(fi($)))+"&"+g:this.m&&Xi(v,this.m,$)),Il(this.h,F),this.Ua&&nt(v,"TYPE","init"),this.P?(nt(v,"$req",g),nt(v,"SID","null"),F.T=!0,qo(F,v,null)):qo(F,v,g),this.G=2}}else this.G==3&&(c?Zo(this,c):this.i.length==0||Un(this.h)||Zo(this))};function Zo(c,g){var v;g?v=g.l:v=c.U++;const S=jn(c.I);nt(S,"SID",c.K),nt(S,"RID",v),nt(S,"AID",c.T),pi(c,S),c.m&&c.o&&Xi(S,c.m,c.o),v=new mr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ji(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Il(c.h,v),qo(v,S,g)}function pi(c,g){c.H&&Ne(c.H,function(v,S){nt(g,S,v)}),c.l&&qi({},function(v,S){nt(g,S,v)})}function Ji(c,g,v){v=Math.min(c.i.length,v);var S=c.l?w(c.l.Na,c.l,c):null;e:{var F=c.i;let $=-1;for(;;){const ne=["count="+v];$==-1?0<v?($=F[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let Ze=!0;for(let Lt=0;Lt<v;Lt++){let We=F[Lt].g;const Wt=F[Lt].map;if(We-=$,0>We)$=Math.max(0,F[Lt].g-100),Ze=!1;else try{Ic(Wt,ne,"req"+We+"_")}catch{S&&S(Wt)}}if(Ze){S=ne.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function io(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;He||ae(),re||(He(),re=!0),ge.add(g,c),c.v=0}}function ea(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=dr(w(c.Fa,c),Cc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=dr(w(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Er(this),Sc(this))};function Pl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new mr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=jn(c.qa);nt(g,"RID","rpc"),nt(g,"SID",c.K),nt(g,"AID",c.T),nt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&nt(g,"TO",c.ja),nt(g,"TYPE","xmlhttp"),pi(c,g),c.m&&c.o&&Xi(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ki(jn(g)),v.m=null,v.P=!0,El(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Er(this),ea(this),At(19))};function ta(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function na(c,g){var v=null;if(c.g==g){ta(c),Pl(c),c.g=null;var S=2}else if(yn(c.h,g))v=g.D,mc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;S=Ks(),wt(S,new Bo(S,v)),zr(c)}else io(c);else if(F=g.s,F==3||F==0&&0<g.X||!(S==1&&yf(c,g)||S==2&&ea(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),F){case 1:mi(c,5);break;case 4:mi(c,10);break;case 3:mi(c,6);break;default:mi(c,2)}}}function Cc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function mi(c,g){if(c.j.info("Error code "+g),g==2){var v=w(c.fb,c),S=c.Xa;const F=!S;S=new hi(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||to(S,"https"),Ki(S),F?mf(S.toString(),v):wc(S.toString(),v)}else At(2);c.G=0,c.l&&c.l.sa(g),Ac(c),Jo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Ac(c){if(c.G=0,c.ka=[],c.l){const g=gc(c.h);(g.length!=0||c.i.length!=0)&&(z(c.ka,g),z(c.ka,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.ra()}}function Rc(c,g,v){var S=v instanceof hi?jn(v):new hi(v);if(S.g!="")g&&(S.g=g+"."+S.g),Hi(S,S.s);else{var F=d.location;S=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var $=new hi(null);S&&to($,S),g&&($.g=g),F&&Hi($,F),v&&($.l=v),S=$}return v=c.D,g=c.ya,v&&g&&nt(S,v,g),nt(S,"VER",c.la),pi(c,S),S}function Pc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new pt(new di({eb:v})):new pt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}n=kl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ra(){}ra.prototype.g=function(c,g){return new vn(c,g)};function vn(c,g){Ct.call(this),this.g=new Rl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Q(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Q(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Wr(this)}V(vn,Ct),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Zt(this.g)},vn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Gs(c),c=v);g.i.push(new fc(g.Ya++,c)),g.G==3&&zr(g)},vn.prototype.N=function(){this.g.l=null,delete this.j,Zt(this.g),delete this.g,vn.aa.N.call(this)};function kc(c){Vr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}V(kc,Vr);function Nc(){jo.call(this),this.status=1}V(Nc,jo);function Wr(c){this.g=c}V(Wr,kl),Wr.prototype.ua=function(){wt(this.g,"a")},Wr.prototype.ta=function(c){wt(this.g,new kc(c))},Wr.prototype.sa=function(c){wt(this.g,new Nc)},Wr.prototype.ra=function(){wt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,vT=function(){return new ra},yT=function(){return Ks()},_T=Fr,ym={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Lh=Wo,uc.COMPLETE="complete",gT=uc,gt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,ou=gt,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,mT=pt}).apply(typeof Ch<"u"?Ch:typeof self<"u"?self:typeof window<"u"?window:{});const PE="@firebase/firestore",kE="4.8.0";/**
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
 */class mn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mn.UNAUTHENTICATED=new mn(null),mn.GOOGLE_CREDENTIALS=new mn("google-credentials-uid"),mn.FIRST_PARTY=new mn("first-party-uid"),mn.MOCK_USER=new mn("mock-user");/**
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
 */let sl="11.10.0";/**
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
 */const Ro=new Rd("@firebase/firestore");function Aa(){return Ro.logLevel}function ce(n,...e){if(Ro.logLevel<=Ve.DEBUG){const t=e.map(yg);Ro.debug(`Firestore (${sl}): ${n}`,...t)}}function bi(n,...e){if(Ro.logLevel<=Ve.ERROR){const t=e.map(yg);Ro.error(`Firestore (${sl}): ${n}`,...t)}}function Ns(n,...e){if(Ro.logLevel<=Ve.WARN){const t=e.map(yg);Ro.warn(`Firestore (${sl}): ${n}`,...t)}}function yg(n){if(typeof n=="string")return n;try{/**
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
 */function Ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ET(n,r,t)}function ET(n,e,t){let r=`FIRESTORE (${sl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw bi(r),new Error(r)}function Xe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ET(e,s,r)}function Pe(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Vi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ss{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class wT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(mn.UNAUTHENTICATED)))}shutdown(){}}class Fk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Uk{constructor(e){this.t=e,this.currentUser=mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ss,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ss)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string",31837,{l:r}),new wT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new mn(e)}}class jk{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=mn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Bk{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new jk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(mn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class NE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,or(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new NE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new NE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function IT(){return new TextEncoder}/**
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
 */class vg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Wk(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function De(n,e){return n<e?-1:n>e?1:0}function vm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return De(r,s);{const a=IT(),u=$k(a.encode(xE(n,t)),a.encode(xE(e,t)));return u!==0?u:De(r,s)}}t+=r>65535?2:1}return De(n.length,e.length)}function xE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function $k(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return De(n[t],e[t]);return De(n.length,e.length)}function Wa(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const DE="__name__";class Kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Kr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return De(e.length,t.length)}static compareSegments(e,t){const r=Kr.isNumericId(e),s=Kr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Kr.extractNumericId(e).compare(Kr.extractNumericId(t)):vm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class lt extends Kr{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const qk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Kr{construct(e,t,r){return new rn(e,t,r)}static isValidIdentifier(e){return qk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===DE}static keyField(){return new rn([DE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(lt.fromString(e))}static fromName(e){return new _e(lt.fromString(e).popFirst(5))}static empty(){return new _e(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new lt(e.slice()))}}/**
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
 */function TT(n,e,t){if(!t)throw new oe(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hk(n,e,t,r){if(e===!0&&r===!0)throw new oe(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bE(n){if(!_e.isDocumentKey(n))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function OE(n){if(_e.isDocumentKey(n))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ST(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function Kn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(n);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ot(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hu(n,e){if(!ST(n))throw new oe(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const ME=-62135596800,LE=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*LE);return new dt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ME)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/LE}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hu(e,dt._jsonSchema))return new dt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ME;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:Ot("string",dt._jsonSchemaVersion),seconds:Ot("number"),nanoseconds:Ot("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new dt(0,0))}static max(){return new Re(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ru=-1;function Gk(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Re.fromTimestamp(r===1e9?new dt(t+1,0):new dt(t,r));return new xs(s,_e.empty(),e)}function Kk(n){return new xs(n.readTime,n.key,Ru)}class xs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xs(Re.min(),_e.empty(),Ru)}static max(){return new xs(Re.max(),_e.empty(),Ru)}}function Qk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
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
 */const Yk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ol(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==Yk)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((s=>s?K.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new K(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function Jk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function al(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Eg=-1;function Md(n){return n==null}function ed(n){return n===0&&1/n==-1/0}function Zk(n){return typeof n=="number"&&Number.isInteger(n)&&!ed(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const CT="";function eN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=VE(e)),e=tN(n.get(t),e);return VE(e)}function tN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case CT:t+="";break;default:t+=a}}return t}function VE(n){return n+CT+""}/**
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
 */function FE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function AT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Mt=class Em{constructor(e,t){this.comparator=e,this.root=t||Cs.EMPTY}insert(e,t){return new Em(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Cs.BLACK,null,null))}remove(e){return new Em(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ah(this.root,e,this.comparator,!0)}},Ah=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Cs=class Si{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Si.RED,this.left=s??Si.EMPTY,this.right=a??Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Si(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Si.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}};Cs.EMPTY=null,Cs.RED=!0,Cs.BLACK=!1;Cs.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Cs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class jt{constructor(e){this.comparator=e,this.data=new Mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new UE(this.data.getIterator())}getIteratorFrom(e){return new UE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new jt(this.comparator);return t.data=e,t}}class UE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hn{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new jt(rn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class RT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new RT("Invalid base64 string: "+a):a}})(e);return new on(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const nN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=nN.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bs(n){return typeof n=="string"?on.fromBase64String(n):on.fromUint8Array(n)}/**
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
 */const PT="server_timestamp",kT="__type__",NT="__previous_value__",xT="__local_write_time__";function wg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[kT])===null||t===void 0?void 0:t.stringValue)===PT}function Ld(n){const e=n.mapValue.fields[NT];return wg(e)?Ld(e):e}function Pu(n){const e=Ds(n.mapValue.fields[xT].timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class rN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const td="(default)";class ku{constructor(e,t){this.projectId=e,this.database=t||td}static empty(){return new ku("","")}get isDefaultDatabase(){return this.database===td}isEqual(e){return e instanceof ku&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const DT="__type__",iN="__max__",Rh={mapValue:{}},bT="__vector__",nd="value";function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wg(n)?4:oN(n)?9007199254740991:sN(n)?10:11:Ce(28295,{value:n})}function ri(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pu(n).isEqual(Pu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ds(s.timestampValue),d=Ds(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return bs(s.bytesValue).isEqual(bs(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return Pt(s.geoPointValue.latitude)===Pt(a.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return Pt(s.integerValue)===Pt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Pt(s.doubleValue),d=Pt(a.doubleValue);return u===d?ed(u)===ed(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Wa(n.arrayValue.values||[],e.arrayValue.values||[],ri);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(FE(u)!==FE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!ri(u[f],d[f])))return!1;return!0})(n,e);default:return Ce(52216,{left:n})}}function Nu(n,e){return(n.values||[]).find((t=>ri(t,e)))!==void 0}function $a(n,e){if(n===e)return 0;const t=Os(n),r=Os(e);if(t!==r)return De(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=Pt(a.integerValue||a.doubleValue),f=Pt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return jE(n.timestampValue,e.timestampValue);case 4:return jE(Pu(n),Pu(e));case 5:return vm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=bs(a),f=bs(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=De(d[m],f[m]);if(y!==0)return y}return De(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=De(Pt(a.latitude),Pt(u.latitude));return d!==0?d:De(Pt(a.longitude),Pt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return BE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const E=a.fields||{},w=u.fields||{},k=(d=E[nd])===null||d===void 0?void 0:d.arrayValue,V=(f=w[nd])===null||f===void 0?void 0:f.arrayValue,B=De(((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0,((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0);return B!==0?B:BE(k,V)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Rh.mapValue&&u===Rh.mapValue)return 0;if(a===Rh.mapValue)return 1;if(u===Rh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const w=vm(f[E],y[E]);if(w!==0)return w;const k=$a(d[f[E]],m[y[E]]);if(k!==0)return k}return De(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ce(23264,{le:t})}}function jE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Ds(n),r=Ds(e),s=De(t.seconds,r.seconds);return s!==0?s:De(t.nanos,r.nanos)}function BE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=$a(t[s],r[s]);if(a)return a}return De(t.length,r.length)}function qa(n){return wm(n)}function wm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ds(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return bs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=wm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${wm(t.fields[u])}`;return s+"}"})(n.mapValue):Ce(61005,{value:n})}function Vh(n){switch(Os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ld(n);return e?16+Vh(e):16;case 5:return 2*n.stringValue.length;case 6:return bs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Vh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ws(r.fields,((a,u)=>{s+=a.length+Vh(u)})),s})(n.mapValue);default:throw Ce(13486,{value:n})}}function zE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Im(n){return!!n&&"integerValue"in n}function Ig(n){return!!n&&"arrayValue"in n}function WE(n){return!!n&&"nullValue"in n}function $E(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fh(n){return!!n&&"mapValue"in n}function sN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[DT])===null||t===void 0?void 0:t.stringValue)===bT}function pu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ws(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=pu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function oN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===iN}/**
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
 */class Mn{constructor(e){this.value=e}static empty(){return new Mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pu(t)}setAll(e){let t=rn.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=pu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Fh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ri(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Fh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ws(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Mn(pu(this.value))}}function OT(n){const e=[];return Ws(n.fields,((t,r)=>{const s=new rn([t]);if(Fh(r)){const a=OT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Hn(e)}/**
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
 */class gn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new gn(e,0,Re.min(),Re.min(),Re.min(),Mn.empty(),0)}static newFoundDocument(e,t,r,s){return new gn(e,1,t,Re.min(),r,s,0)}static newNoDocument(e,t){return new gn(e,2,t,Re.min(),Re.min(),Mn.empty(),0)}static newUnknownDocument(e,t){return new gn(e,3,t,Re.min(),Re.min(),Mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rd{constructor(e,t){this.position=e,this.inclusive=t}}function qE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=$a(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function HE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ri(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function aN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class MT{}class bt extends MT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new uN(e,t,r):t==="array-contains"?new dN(e,r):t==="in"?new fN(e,r):t==="not-in"?new pN(e,r):t==="array-contains-any"?new mN(e,r):new bt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cN(e,r):new hN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($a(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison($a(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class br extends MT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new br(e,t)}matches(e){return LT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function LT(n){return n.op==="and"}function VT(n){return lN(n)&&LT(n)}function lN(n){for(const e of n.filters)if(e instanceof br)return!1;return!0}function Tm(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+qa(n.value);if(VT(n))return n.filters.map((e=>Tm(e))).join(",");{const e=n.filters.map((t=>Tm(t))).join(",");return`${n.op}(${e})`}}function FT(n,e){return n instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&ri(r.value,s.value)})(n,e):n instanceof br?(function(r,s){return s instanceof br&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&FT(u,s.filters[d])),!0):!1})(n,e):void Ce(19439)}function UT(n){return n instanceof bt?(function(t){return`${t.field.canonicalString()} ${t.op} ${qa(t.value)}`})(n):n instanceof br?(function(t){return t.op.toString()+" {"+t.getFilters().map(UT).join(" ,")+"}"})(n):"Filter"}class uN extends bt{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class cN extends bt{constructor(e,t){super(e,"in",t),this.keys=jT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hN extends bt{constructor(e,t){super(e,"not-in",t),this.keys=jT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function jT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>_e.fromName(r.referenceValue)))}class dN extends bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ig(t)&&Nu(t.arrayValue,this.value)}}class fN extends bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nu(this.value.arrayValue,t)}}class pN extends bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nu(this.value.arrayValue,t)}}class mN extends bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ig(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nu(this.value.arrayValue,r)))}}/**
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
 */class gN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function GE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new gN(n,e,t,r,s,a,u)}function Tg(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Tm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Md(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>qa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>qa(r))).join(",")),e.Pe=t}return e.Pe}function Sg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!aN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!FT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!HE(n.startAt,e.startAt)&&HE(n.endAt,e.endAt)}function Sm(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ll{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _N(n,e,t,r,s,a,u,d){return new ll(n,e,t,r,s,a,u,d)}function Vd(n){return new ll(n)}function KE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function BT(n){return n.collectionGroup!==null}function mu(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new jt(rn.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new xu(a,r))})),t.has(rn.keyField().canonicalString())||e.Te.push(new xu(rn.keyField(),r))}return e.Te}function Zr(n){const e=Pe(n);return e.Ie||(e.Ie=yN(e,mu(n))),e.Ie}function yN(n,e){if(n.limitType==="F")return GE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new xu(s.field,a)}));const t=n.endAt?new rd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rd(n.startAt.position,n.startAt.inclusive):null;return GE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cm(n,e){const t=n.filters.concat([e]);return new ll(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function id(n,e,t){return new ll(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fd(n,e){return Sg(Zr(n),Zr(e))&&n.limitType===e.limitType}function zT(n){return`${Tg(Zr(n))}|lt:${n.limitType}`}function Ra(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>UT(s))).join(", ")}]`),Md(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>qa(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>qa(s))).join(",")),`Target(${r})`})(Zr(n))}; limitType=${n.limitType})`}function Ud(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of mu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=qE(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,mu(r),s)||r.endAt&&!(function(u,d,f){const m=qE(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,mu(r),s))})(n,e)}function vN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function WT(n){return(e,t)=>{let r=!1;for(const s of mu(n)){const a=EN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function EN(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?$a(f,m):Ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ce(19790,{direction:n.dir})}}/**
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
 */class Lo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return AT(this.inner)}size(){return this.innerSize}}/**
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
 */const wN=new Mt(_e.comparator);function Oi(){return wN}const $T=new Mt(_e.comparator);function au(...n){let e=$T;for(const t of n)e=e.insert(t.key,t);return e}function qT(n){let e=$T;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function wo(){return gu()}function HT(){return gu()}function gu(){return new Lo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const IN=new Mt(_e.comparator),TN=new jt(_e.comparator);function Fe(...n){let e=TN;for(const t of n)e=e.add(t);return e}const SN=new jt(De);function CN(){return SN}/**
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
 */function Cg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ed(e)?"-0":e}}function GT(n){return{integerValue:""+n}}function AN(n,e){return Zk(e)?GT(e):Cg(n,e)}/**
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
 */class jd{constructor(){this._=void 0}}function RN(n,e,t){return n instanceof Du?(function(s,a){const u={fields:{[kT]:{stringValue:PT},[xT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&wg(a)&&(a=Ld(a)),a&&(u.fields[NT]=a),{mapValue:u}})(t,e):n instanceof Ha?QT(n,e):n instanceof bu?YT(n,e):(function(s,a){const u=KT(s,a),d=QE(u)+QE(s.Ee);return Im(u)&&Im(s.Ee)?GT(d):Cg(s.serializer,d)})(n,e)}function PN(n,e,t){return n instanceof Ha?QT(n,e):n instanceof bu?YT(n,e):t}function KT(n,e){return n instanceof sd?(function(r){return Im(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Du extends jd{}class Ha extends jd{constructor(e){super(),this.elements=e}}function QT(n,e){const t=XT(e);for(const r of n.elements)t.some((s=>ri(s,r)))||t.push(r);return{arrayValue:{values:t}}}class bu extends jd{constructor(e){super(),this.elements=e}}function YT(n,e){let t=XT(e);for(const r of n.elements)t=t.filter((s=>!ri(s,r)));return{arrayValue:{values:t}}}class sd extends jd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function QE(n){return Pt(n.integerValue||n.doubleValue)}function XT(n){return Ig(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class JT{constructor(e,t){this.field=e,this.transform=t}}function kN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Ha&&s instanceof Ha||r instanceof bu&&s instanceof bu?Wa(r.elements,s.elements,ri):r instanceof sd&&s instanceof sd?ri(r.Ee,s.Ee):r instanceof Du&&s instanceof Du})(n.transform,e.transform)}class NN{constructor(e,t){this.version=e,this.transformResults=t}}class Tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bd{}function ZT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zd(n.key,Tn.none()):new Gu(n.key,n.data,Tn.none());{const t=n.data,r=Mn.empty();let s=new jt(rn.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new $s(n.key,r,new Hn(s.toArray()),Tn.none())}}function xN(n,e,t){n instanceof Gu?(function(s,a,u){const d=s.value.clone(),f=XE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof $s?(function(s,a,u){if(!Uh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=XE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(e0(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function _u(n,e,t,r){return n instanceof Gu?(function(a,u,d,f){if(!Uh(a.precondition,u))return d;const m=a.value.clone(),y=JE(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof $s?(function(a,u,d,f){if(!Uh(a.precondition,u))return d;const m=JE(a.fieldTransforms,f,u),y=u.data;return y.setAll(e0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Uh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function DN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=KT(r.transform,s||null);a!=null&&(t===null&&(t=Mn.empty()),t.set(r.field,a))}return t||null}function YE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Wa(r,s,((a,u)=>kN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gu extends Bd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends Bd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function e0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function XE(n,e,t){const r=new Map;Xe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,PN(u,d,t[s]))}return r}function JE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,RN(a,u,e))}return r}class zd extends Bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bN extends Bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ON{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&xN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_u(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_u(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=HT();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=ZT(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Fe())}isEqual(e){return this.batchId===e.batchId&&Wa(this.mutations,e.mutations,((t,r)=>YE(t,r)))&&Wa(this.baseMutations,e.baseMutations,((t,r)=>YE(t,r)))}}class Ag{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Xe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return IN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ag(e,t,r,s)}}/**
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
 */class MN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Dt,$e;function VN(n){switch(n){case H.OK:return Ce(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function t0(n){if(n===void 0)return bi("GRPC error has no .code"),H.UNKNOWN;switch(n){case Dt.OK:return H.OK;case Dt.CANCELLED:return H.CANCELLED;case Dt.UNKNOWN:return H.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return H.INTERNAL;case Dt.UNAVAILABLE:return H.UNAVAILABLE;case Dt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Dt.NOT_FOUND:return H.NOT_FOUND;case Dt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Dt.ABORTED:return H.ABORTED;case Dt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Dt.DATA_LOSS:return H.DATA_LOSS;default:return Ce(39323,{code:n})}}($e=Dt||(Dt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const FN=new Ts([4294967295,4294967295],0);function ZE(n){const e=IT().encode(n),t=new pT;return t.update(e),new Uint8Array(t.digest())}function ew(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([s,a],0)]}class Rg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new lu(`Invalid padding: ${t}`);if(r<0)throw new lu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new lu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ts.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ts.fromNumber(r)));return s.compare(FN)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ZE(e),[r,s]=ew(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Rg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=ZE(e),[r,s]=ew(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class lu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wd(Re.min(),s,new Mt(De),Oi(),Fe())}}class Ku{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ku(r,t,Fe(),Fe(),Fe())}}/**
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
 */class jh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class n0{constructor(e,t){this.targetId=e,this.De=t}}class r0{constructor(e,t,r=on.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class tw{constructor(){this.ve=0,this.Ce=nw(),this.Fe=on.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Fe(),t=Fe(),r=Fe();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ce(38017,{changeType:a})}})),new Ku(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=nw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class UN{constructor(e){this.We=e,this.Ge=new Map,this.ze=Oi(),this.je=Ph(),this.Je=Ph(),this.He=new Mt(De)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Sm(a))if(r===0){const u=new _e(a.path);this.Xe(t,u,gn.newNoDocument(u,Re.min()))}else Xe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=bs(r).toUint8Array()}catch(f){if(f instanceof RT)return Ns("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Rg(u,s,a)}catch(f){return Ns(f instanceof lu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Sm(d.target)){const f=new _e(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,gn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Fe();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Wd(e,t,this.He,this.ze,r);return this.ze=Oi(),this.je=Ph(),this.Je=Ph(),this.He=new Mt(De),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new tw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new jt(De),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new jt(De),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ph(){return new Mt(_e.comparator)}function nw(){return new Mt(_e.comparator)}const jN={asc:"ASCENDING",desc:"DESCENDING"},BN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zN={and:"AND",or:"OR"};class WN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Am(n,e){return n.useProto3Json||Md(e)?e:{value:e}}function od(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $N(n,e){return od(n,e.toTimestamp())}function ei(n){return Xe(!!n,49232),Re.fromTimestamp((function(t){const r=Ds(t);return new dt(r.seconds,r.nanos)})(n))}function Pg(n,e){return Rm(n,e).canonicalString()}function Rm(n,e){const t=(function(s){return new lt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function s0(n){const e=lt.fromString(n);return Xe(c0(e),10190,{key:e.toString()}),e}function Pm(n,e){return Pg(n.databaseId,e.path)}function Yp(n,e){const t=s0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(a0(t))}function o0(n,e){return Pg(n.databaseId,e)}function qN(n){const e=s0(n);return e.length===4?lt.emptyPath():a0(e)}function km(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function a0(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function rw(n,e,t){return{name:Pm(n,e),fields:t.value.mapValue.fields}}function HN(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ce(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(Xe(y===void 0||typeof y=="string",58123),on.fromBase64String(y||"")):(Xe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),on.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?H.UNKNOWN:t0(m.code);return new oe(y,m.message||"")})(u);t=new r0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yp(n,r.document.name),a=ei(r.document.updateTime),u=r.document.createTime?ei(r.document.createTime):Re.min(),d=new Mn({mapValue:{fields:r.document.fields}}),f=gn.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new jh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yp(n,r.document),a=r.readTime?ei(r.readTime):Re.min(),u=gn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new jh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yp(n,r.document),a=r.removedTargetIds||[];t=new jh([],a,s,null)}else{if(!("filter"in e))return Ce(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new LN(s,a),d=r.targetId;t=new n0(d,u)}}return t}function GN(n,e){let t;if(e instanceof Gu)t={update:rw(n,e.key,e.value)};else if(e instanceof zd)t={delete:Pm(n,e.key)};else if(e instanceof $s)t={update:rw(n,e.key,e.data),updateMask:nx(e.fieldMask)};else{if(!(e instanceof bN))return Ce(16599,{Rt:e.type});t={verify:Pm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Du)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ha)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof bu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof sd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ce(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:$N(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ce(27497)})(n,e.precondition)),t}function KN(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ei(s.updateTime):ei(a);return u.isEqual(Re.min())&&(u=ei(a)),new NN(u,s.transformResults||[])})(t,e)))):[]}function QN(n,e){return{documents:[o0(n,e.path)]}}function YN(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=o0(n,s);const a=(function(m){if(m.length!==0)return u0(br.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(w){return{field:Pa(w.field),direction:ZN(w.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Am(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function XN(n){let e=qN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Xe(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(E){const w=l0(E);return w instanceof br&&VT(w)?w.getFilters():[w]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((w=>(function(V){return new xu(ka(V.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let w;return w=typeof E=="object"?E.value:E,Md(w)?null:w})(t.limit));let f=null;t.startAt&&(f=(function(E){const w=!!E.before,k=E.values||[];return new rd(k,w)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const w=!E.before,k=E.values||[];return new rd(k,w)})(t.endAt)),_N(e,s,u,a,d,"F",f,m)}function JN(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function l0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ka(t.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ka(t.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ka(t.unaryFilter.field);return bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ka(t.unaryFilter.field);return bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return bt.create(ka(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return br.create(t.compositeFilter.filters.map((r=>l0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(t.compositeFilter.op))})(n):Ce(30097,{filter:n})}function ZN(n){return jN[n]}function ex(n){return BN[n]}function tx(n){return zN[n]}function Pa(n){return{fieldPath:n.canonicalString()}}function ka(n){return rn.fromServerFormat(n.fieldPath)}function u0(n){return n instanceof bt?(function(t){if(t.op==="=="){if($E(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NAN"}};if(WE(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($E(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NOT_NAN"}};if(WE(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pa(t.field),op:ex(t.op),value:t.value}}})(n):n instanceof br?(function(t){const r=t.getFilters().map((s=>u0(s)));return r.length===1?r[0]:{compositeFilter:{op:tx(t.op),filters:r}}})(n):Ce(54877,{filter:n})}function nx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function c0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ys{constructor(e,t,r,s,a=Re.min(),u=Re.min(),d=on.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rx{constructor(e){this.gt=e}}function ix(n){const e=XN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?id(e,e.limit,"L"):e}/**
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
 */class sx{constructor(){this.Dn=new ox}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(xs.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class ox{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new jt(lt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new jt(lt.comparator)).toArray()}}/**
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
 */const iw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},h0=41943040;class On{static withCacheSize(e){return new On(e,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */On.DEFAULT_COLLECTION_PERCENTILE=10,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,On.DEFAULT=new On(h0,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),On.DISABLED=new On(-1,0,0);/**
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
 */class Ga{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ga(0)}static ur(){return new Ga(-1)}}/**
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
 */const sw="LruGarbageCollector",ax=1048576;function ow([n,e],[t,r]){const s=De(n,t);return s===0?De(e,r):s}class lx{constructor(e){this.Tr=e,this.buffer=new jt(ow),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ow(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ux{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(sw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){al(t)?ce(sw,"Ignoring IndexedDB error during garbage collection: ",t):await ol(t)}await this.Rr(3e5)}))}}class cx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Od.ue);const r=new lx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(iw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Aa()<=Ve.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function hx(n,e){return new cx(n,e)}/**
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
 */class dx{constructor(){this.changes=new Lo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class px{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&_u(r.mutation,s,Hn.empty(),dt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Fe()){const s=wo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=au();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=wo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Oi();const u=gu(),d=(function(){return gu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof $s)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),_u(y.mutation,m,y.mutation.getFieldMask(),dt.now())):u.set(m.key,Hn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var E;return d.set(m,new fx(y,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=gu();let s=new Mt(((u,d)=>u-d)),a=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||Hn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const E=(s.get(d.batchId)||Fe()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,E=HT();y.forEach((w=>{if(!a.has(w)){const k=ZT(t.get(w),r.get(w));k!==null&&E.set(w,k),a=a.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return K.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):K.resolve(wo());let d=Ru,f=a;return u.next((m=>K.forEach(m,((y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(y)?K.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{f=f.insert(y,w)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Fe()))).next((y=>({batchId:d,changes:qT(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((r=>{let s=au();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=au();return this.indexManager.getCollectionParents(e,a).next((d=>K.forEach(d,(f=>{const m=(function(E,w){return new ll(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((E,w)=>{u=u.insert(E,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,gn.newInvalidDocument(y)))}));let d=au();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&_u(y.mutation,m,Hn.empty(),dt.now()),Ud(t,m)&&(d=d.insert(f,m))})),d}))}}/**
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
 */class mx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ei(s.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:ix(s.bundledQuery),readTime:ei(s.readTime)}})(t)),K.resolve()}}/**
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
 */class gx{constructor(){this.overlays=new Mt(_e.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wo();return K.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const s=wo(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return K.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Mt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=wo(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=wo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return K.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new MN(t,r));let a=this.kr.get(t);a===void 0&&(a=Fe(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class _x{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class kg{constructor(){this.qr=new jt(Kt.Qr),this.$r=new jt(Kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Kt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Kt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new _e(new lt([])),r=new Kt(t,e),s=new Kt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new lt([])),r=new Kt(t,e),s=new Kt(t,e+1);let a=Fe();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Kt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
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
 */class yx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new jt(Kt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new ON(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Kt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Eg:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Kt(t,0),s=new Kt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new jt(De);return t.forEach((s=>{const a=new Kt(s,0),u=new Kt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new Kt(new _e(a),0);let d=new jt(De);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),K.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Xe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(t.mutations,(s=>{const a=new Kt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Kt(t,0),s=this.Yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vx{constructor(e){this.ni=e,this.docs=(function(){return new Mt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():gn.newInvalidDocument(t))}getEntries(e,t){let r=Oi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():gn.newInvalidDocument(s))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Oi();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Qk(Kk(y),r)<=0||(s.has(y.key)||Ud(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ce(9500)}ri(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Ex(this)}getSize(e){return K.resolve(this.size)}}class Ex extends dx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class wx{constructor(e){this.persistence=e,this.ii=new Lo((t=>Tg(t)),Sg),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.si=0,this.oi=new kg,this.targetCount=0,this._i=Ga.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ga(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),K.waitFor(a).next((()=>s))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
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
 */class d0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Od(0),this.ci=!1,this.ci=!0,this.li=new _x,this.referenceDelegate=e(this),this.hi=new wx(this),this.indexManager=new sx,this.remoteDocumentCache=(function(s){return new vx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new rx(t),this.Ti=new mx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new yx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const s=new Ix(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Ix extends Xk{constructor(e){super(),this.currentSequenceNumber=e}}class Ng{constructor(e){this.persistence=e,this.Ai=new kg,this.Ri=null}static Vi(e){return new Ng(e)}get mi(){if(this.Ri)return this.Ri;throw Ce(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(r=>{const s=_e.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Re.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ad{constructor(e,t){this.persistence=e,this.gi=new Lo((r=>eN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=hx(this,t)}static Vi(e,t){return new ad(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?K.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Re.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vh(e.data.value)),t}Sr(e,t,r){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Fe(),s=Fe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new xg(e,t.fromCache,r,s)}}/**
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
 */class Tx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Sx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return XA()?8:Jk(_n())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Tx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Aa()<=Ve.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ra(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Aa()<=Ve.DEBUG&&ce("QueryEngine","Query:",Ra(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Aa()<=Ve.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ra(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zr(t))):K.resolve())}ps(e,t){if(KE(t))return K.resolve(null);let r=Zr(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=id(t,null,"F"),r=Zr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Fe(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,id(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return KE(t)||s.isEqual(Re.min())?K.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?K.resolve(null):(Aa()<=Ve.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ra(t)),this.vs(e,u,t,Gk(s,Ru)).next((d=>d)))}))}bs(e,t){let r=new jt(WT(e));return t.forEach(((s,a)=>{Ud(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Aa()<=Ve.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ra(t)),this.gs.getDocumentsMatchingQuery(e,t,xs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Dg="LocalStore",Cx=3e8;class Ax{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Mt(De),this.Ms=new Lo((a=>Tg(a)),Sg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new px(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Rx(n,e,t,r){return new Ax(n,e,t,r)}async function f0(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Fe();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Px(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const E=m.batch,w=E.keys();let k=K.resolve();return w.forEach((V=>{k=k.next((()=>y.getEntry(f,V))).next((B=>{const z=m.docVersions.get(V);Xe(z!==null,48541),B.version.compareTo(z)<0&&(E.applyToRemoteDocument(B,m),B.isValidDocument()&&(B.setReadTime(m.commitVersion),y.addEntry(B)))}))})),k.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Fe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function p0(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function kx(n,e){const t=Pe(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,E)=>{const w=s.get(E);if(!w)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,E))));let k=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?k=k.withResumeToken(on.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(y.resumeToken,r)),s=s.insert(E,k),(function(B,z,Z){return B.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Cx?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(w,k,y)&&d.push(t.hi.updateTargetData(a,k))}));let f=Oi(),m=Fe();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Nx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(Re.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return K.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Nx(n,e,t){let r=Fe(),s=Fe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Oi();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Re.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ce(Dg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function xx(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Eg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Dx(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,K.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new ys(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Nm(n,e,t){const r=Pe(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!al(u))throw u;ce(Dg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function aw(n,e,t){const r=Pe(n);let s=Re.min(),a=Fe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const E=Pe(f),w=E.Ms.get(y);return w!==void 0?K.resolve(E.Fs.get(w)):E.hi.getTargetData(m,y)})(r,u,Zr(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Re.min(),t?a:Fe()))).next((d=>(bx(r,vN(e),d),{documents:d,qs:a})))))}function bx(n,e,t){let r=n.xs.get(e)||Re.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class lw{constructor(){this.activeTargetIds=CN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ox{constructor(){this.Fo=new lw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mx{xo(e){}shutdown(){}}/**
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
 */const uw="ConnectivityMonitor";class cw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(uw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(uw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Xp="RestConnection",Lx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===td?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=xm(),d=this.Go(e,t.toUriEncodedString());ce(Xp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=Bs(m);return this.jo(e,d,f,r,y).then((E=>(ce(Xp,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Ns(Xp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Lx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Fx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const pn="WebChannelConnection";class Ux extends Vx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=xm();return new Promise(((d,f)=>{const m=new mT;m.setWithCredentials(!0),m.listenOnce(gT.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Lh.NO_ERROR:const E=m.getResponseJson();ce(pn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Lh.TIMEOUT:ce(pn,`RPC '${e}' ${u} timed out`),f(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const w=m.getStatus();if(ce(pn,`RPC '${e}' ${u} failed with status:`,w,"response text:",m.getResponseText()),w>0){let k=m.getResponseJson();Array.isArray(k)&&(k=k[0]);const V=k==null?void 0:k.error;if(V&&V.status&&V.message){const B=(function(Z){const Q=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(Q)>=0?Q:H.UNKNOWN})(V.status);f(new oe(B,V.message))}else f(new oe(H.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new oe(H.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ce(pn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ce(pn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=xm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=vT(),d=yT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ce(pn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);this.T_(E);let w=!1,k=!1;const V=new Fx({Ho:z=>{k?ce(pn,`Not sending because RPC '${e}' stream ${s} is closed:`,z):(w||(ce(pn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),w=!0),ce(pn,`RPC '${e}' stream ${s} sending:`,z),E.send(z))},Yo:()=>E.close()}),B=(z,Z,Q)=>{z.listen(Z,(ie=>{try{Q(ie)}catch(le){setTimeout((()=>{throw le}),0)}}))};return B(E,ou.EventType.OPEN,(()=>{k||(ce(pn,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),B(E,ou.EventType.CLOSE,(()=>{k||(k=!0,ce(pn,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(E))})),B(E,ou.EventType.ERROR,(z=>{k||(k=!0,Ns(pn,`RPC '${e}' stream ${s} transport errored. Name:`,z.name,"Message:",z.message),V.__(new oe(H.UNAVAILABLE,"The operation could not be completed")))})),B(E,ou.EventType.MESSAGE,(z=>{var Z;if(!k){const Q=z.data[0];Xe(!!Q,16349);const ie=Q,le=(ie==null?void 0:ie.error)||((Z=ie[0])===null||Z===void 0?void 0:Z.error);if(le){ce(pn,`RPC '${e}' stream ${s} received error:`,le);const qe=le.status;let Ne=(function(P){const b=Dt[P];if(b!==void 0)return t0(b)})(qe),N=le.message;Ne===void 0&&(Ne=H.INTERNAL,N="Unknown error status: "+qe+" with message "+le.message),k=!0,V.__(new oe(Ne,N)),E.close()}else ce(pn,`RPC '${e}' stream ${s} received:`,Q),V.a_(Q)}})),B(d,_T.STAT_EVENT,(z=>{z.stat===ym.PROXY?ce(pn,`RPC '${e}' stream ${s} detected buffering proxy`):z.stat===ym.NOPROXY&&ce(pn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Jp(){return typeof document<"u"?document:null}/**
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
 */function $d(n){return new WN(n,!0)}/**
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
 */class m0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const hw="PersistentStream";class g0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new m0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(bi(t.toString()),bi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(hw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(hw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jx extends g0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=HN(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Re.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?ei(u.readTime):Re.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=km(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Sm(f)?{documents:QN(a,f)}:{query:YN(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=i0(a,u.resumeToken);const m=Am(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Re.min())>0){d.readTime=od(a,u.snapshotVersion.toTimestamp());const m=Am(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=JN(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=km(this.serializer),t.removeTarget=e,this.k_(t)}}class Bx extends g0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=KN(e.writeResults,e.commitTime),r=ei(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=km(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>GN(this.serializer,r)))};this.k_(t)}}/**
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
 */class zx{}class Wx extends zx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Rm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(H.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Rm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(H.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class $x{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(bi(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Po="RemoteStore";class qx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Vo(this)&&(ce(Po,"Restarting streams for network reachability change."),await(async function(f){const m=Pe(f);m.Ia.add(4),await Qu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await qd(m)})(this))}))})),this.Aa=new $x(r,s)}}async function qd(n){if(Vo(n))for(const e of n.da)await e(!0)}async function Qu(n){for(const e of n.da)await e(!1)}function _0(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Lg(t)?Mg(t):ul(t).x_()&&Og(t,e))}function bg(n,e){const t=Pe(n),r=ul(t);t.Ta.delete(e),r.x_()&&y0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Vo(t)&&t.Aa.set("Unknown"))}function Og(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ul(n).H_(e)}function y0(n,e){n.Ra.$e(e),ul(n).Y_(e)}function Mg(n){n.Ra=new UN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ul(n).start(),n.Aa.aa()}function Lg(n){return Vo(n)&&!ul(n).M_()&&n.Ta.size>0}function Vo(n){return Pe(n).Ia.size===0}function v0(n){n.Ra=void 0}async function Hx(n){n.Aa.set("Online")}async function Gx(n){n.Ta.forEach(((e,t)=>{Og(n,e)}))}async function Kx(n,e){v0(n),Lg(n)?(n.Aa.la(e),Mg(n)):n.Aa.set("Unknown")}async function Qx(n,e,t){if(n.Aa.set("Online"),e instanceof r0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ce(Po,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ld(n,r)}else if(e instanceof jh?n.Ra.Ye(e):e instanceof n0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Re.min()))try{const r=await p0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(on.EMPTY_BYTE_STRING,y.snapshotVersion)),y0(a,f);const E=new ys(y.target,f,m,y.sequenceNumber);Og(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ce(Po,"Failed to raise snapshot:",r),await ld(n,r)}}async function ld(n,e,t){if(!al(e))throw e;n.Ia.add(1),await Qu(n),n.Aa.set("Offline"),t||(t=()=>p0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(Po,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qd(n)}))}function E0(n,e){return e().catch((t=>ld(n,t,e)))}async function Hd(n){const e=Pe(n),t=Ms(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Eg;for(;Yx(e);)try{const s=await xx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Xx(e,s)}catch(s){await ld(e,s)}w0(e)&&I0(e)}function Yx(n){return Vo(n)&&n.Pa.length<10}function Xx(n,e){n.Pa.push(e);const t=Ms(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function w0(n){return Vo(n)&&!Ms(n).M_()&&n.Pa.length>0}function I0(n){Ms(n).start()}async function Jx(n){Ms(n).na()}async function Zx(n){const e=Ms(n);for(const t of n.Pa)e.X_(t.mutations)}async function eD(n,e,t){const r=n.Pa.shift(),s=Ag.from(r,e,t);await E0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Hd(n)}async function tD(n,e){e&&Ms(n).Z_&&await(async function(r,s){if((function(u){return VN(u)&&u!==H.ABORTED})(s.code)){const a=r.Pa.shift();Ms(r).N_(),await E0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Hd(r)}})(n,e),w0(n)&&I0(n)}async function dw(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),ce(Po,"RemoteStore received new credentials");const r=Vo(t);t.Ia.add(3),await Qu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qd(t)}async function nD(n,e){const t=Pe(n);e?(t.Ia.delete(2),await qd(t)):e||(t.Ia.add(2),await Qu(t),t.Aa.set("Unknown"))}function ul(n){return n.Va||(n.Va=(function(t,r,s){const a=Pe(t);return a.ia(),new jx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Hx.bind(null,n),e_:Gx.bind(null,n),n_:Kx.bind(null,n),J_:Qx.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Lg(n)?Mg(n):n.Aa.set("Unknown")):(await n.Va.stop(),v0(n))}))),n.Va}function Ms(n){return n.ma||(n.ma=(function(t,r,s){const a=Pe(t);return a.ia(),new Bx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Jx.bind(null,n),n_:tD.bind(null,n),ea:Zx.bind(null,n),ta:eD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Hd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(Po,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Vg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Vg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fg(n,e){if(bi("AsyncQueue",`${e}: ${n}`),al(n))return new oe(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ma{static emptySet(e){return new Ma(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=au(),this.sortedSet=new Mt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ma)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ma;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class fw{constructor(){this.fa=new Mt(_e.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ce(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ka{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ka(e,t,Ma.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class iD{constructor(){this.queries=pw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Pe(t),a=s.queries;s.queries=pw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new oe(H.ABORTED,"Firestore shutting down"))}}function pw(){return new Lo((n=>zT(n)),Fd)}async function T0(n,e){const t=Pe(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new rD,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Fg(u,`Initialization of query '${Ra(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Ug(t)}async function S0(n,e){const t=Pe(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sD(n,e){const t=Pe(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Ug(t)}function oD(n,e,t){const r=Pe(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Ug(n){n.Da.forEach((e=>{e.next()}))}var Dm,mw;(mw=Dm||(Dm={})).Fa="default",mw.Cache="cache";class C0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ka(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ka.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Dm.Cache}}/**
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
 */class A0{constructor(e){this.key=e}}class R0{constructor(e){this.key=e}}class aD{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Fe(),this.mutatedKeys=Fe(),this.Xa=WT(e),this.eu=new Ma(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new fw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,E)=>{const w=s.get(y),k=Ud(this.query,E)?E:null,V=!!w&&this.mutatedKeys.has(w.key),B=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let z=!1;w&&k?w.data.isEqual(k.data)?V!==B&&(r.track({type:3,doc:k}),z=!0):this.iu(w,k)||(r.track({type:2,doc:k}),z=!0,(f&&this.Xa(k,f)>0||m&&this.Xa(k,m)<0)&&(d=!0)):!w&&k?(r.track({type:0,doc:k}),z=!0):w&&!k&&(r.track({type:1,doc:w}),z=!0,(f||m)&&(d=!0)),z&&(k?(u=u.add(k),a=B?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,E)=>(function(k,V){const B=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{At:z})}};return B(k)-B(V)})(y.type,E.type)||this.Xa(y.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Ka(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new R0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new A0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ka.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const jg="SyncEngine";class lD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class uD{constructor(e){this.key=e,this.lu=!1}}class cD{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Lo((d=>zT(d)),Fd),this.Tu=new Map,this.Iu=new Set,this.du=new Mt(_e.comparator),this.Eu=new Map,this.Au=new kg,this.Ru={},this.Vu=new Map,this.mu=Ga.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function hD(n,e,t=!0){const r=b0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await P0(r,e,t,!0),s}async function dD(n,e){const t=b0(n);await P0(t,e,!0,!1)}async function P0(n,e,t,r){const s=await Dx(n.localStore,Zr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await fD(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&_0(n.remoteStore,s),d}async function fD(n,e,t,r,s){n.gu=(E,w,k)=>(async function(B,z,Z,Q){let ie=z.view.nu(Z);ie.Ds&&(ie=await aw(B.localStore,z.query,!1).then((({documents:N})=>z.view.nu(N,ie))));const le=Q&&Q.targetChanges.get(z.targetId),qe=Q&&Q.targetMismatches.get(z.targetId)!=null,Ne=z.view.applyChanges(ie,B.isPrimaryClient,le,qe);return _w(B,z.targetId,Ne._u),Ne.snapshot})(n,E,w,k);const a=await aw(n.localStore,e,!0),u=new aD(e,a.qs),d=u.nu(a.documents),f=Ku.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);_w(n,t,m._u);const y=new lD(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function pD(n,e,t){const r=Pe(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Fd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&bg(r.remoteStore,s.targetId),bm(r,s.targetId)})).catch(ol)):(bm(r,s.targetId),await Nm(r.localStore,s.targetId,!0))}async function mD(n,e){const t=Pe(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bg(t.remoteStore,r.targetId))}async function gD(n,e,t){const r=TD(n);try{const s=await(function(u,d){const f=Pe(u),m=dt.now(),y=d.reduce(((k,V)=>k.add(V.key)),Fe());let E,w;return f.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let V=Oi(),B=Fe();return f.Os.getEntries(k,y).next((z=>{V=z,V.forEach(((Z,Q)=>{Q.isValidDocument()||(B=B.add(Z))}))})).next((()=>f.localDocuments.getOverlayedDocuments(k,V))).next((z=>{E=z;const Z=[];for(const Q of d){const ie=DN(Q,E.get(Q.key).overlayedDocument);ie!=null&&Z.push(new $s(Q.key,ie,OT(ie.value.mapValue),Tn.exists(!0)))}return f.mutationQueue.addMutationBatch(k,m,Z,d)})).next((z=>{w=z;const Z=z.applyToLocalDocumentSet(E,B);return f.documentOverlayCache.saveOverlays(k,z.batchId,Z)}))})).then((()=>({batchId:w.batchId,changes:qT(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Mt(De)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Yu(r,s.changes),await Hd(r.remoteStore)}catch(s){const a=Fg(s,"Failed to persist write");t.reject(a)}}async function k0(n,e){const t=Pe(n);try{const r=await kx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?Xe(u.lu,14607):s.removedDocuments.size>0&&(Xe(u.lu,42227),u.lu=!1))})),await Yu(t,r,e)}catch(r){await ol(r)}}function gw(n,e,t){const r=Pe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Pe(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,E)=>{for(const w of E.wa)w.va(d)&&(m=!0)})),m&&Ug(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _D(n,e,t){const r=Pe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Mt(_e.comparator);u=u.insert(a,gn.newNoDocument(a,Re.min()));const d=Fe().add(a),f=new Wd(Re.min(),new Map,new Mt(De),u,d);await k0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Bg(r)}else await Nm(r.localStore,e,!1).then((()=>bm(r,e,t))).catch(ol)}async function yD(n,e){const t=Pe(n),r=e.batch.batchId;try{const s=await Px(t.localStore,e);x0(t,r,null),N0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yu(t,s)}catch(s){await ol(s)}}async function vD(n,e,t){const r=Pe(n);try{const s=await(function(u,d){const f=Pe(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(Xe(E!==null,37113),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);x0(r,e,t),N0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yu(r,s)}catch(s){await ol(s)}}function N0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function x0(n,e,t){const r=Pe(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function bm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||D0(n,r)}))}function D0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(bg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Bg(n))}function _w(n,e,t){for(const r of t)r instanceof A0?(n.Au.addReference(r.key,e),ED(n,r)):r instanceof R0?(ce(jg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||D0(n,r.key)):Ce(19791,{yu:r})}function ED(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ce(jg,"New document in limbo: "+t),n.Iu.add(r),Bg(n))}function Bg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(lt.fromString(e)),r=n.mu.next();n.Eu.set(r,new uD(t)),n.du=n.du.insert(t,r),_0(n.remoteStore,new ys(Zr(Vd(t.path)),r,"TargetPurposeLimboResolution",Od.ue))}}async function Yu(n,e,t){const r=Pe(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=xg.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=Pe(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>K.forEach(m,(w=>K.forEach(w.Is,(k=>y.persistence.referenceDelegate.addReference(E,w.targetId,k))).next((()=>K.forEach(w.ds,(k=>y.persistence.referenceDelegate.removeReference(E,w.targetId,k)))))))))}catch(E){if(!al(E))throw E;ce(Dg,"Failed to update sequence numbers: "+E)}for(const E of m){const w=E.targetId;if(!E.fromCache){const k=y.Fs.get(w),V=k.snapshotVersion,B=k.withLastLimboFreeSnapshotVersion(V);y.Fs=y.Fs.insert(w,B)}}})(r.localStore,a))}async function wD(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){ce(jg,"User change. New user:",e.toKey());const r=await f0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new oe(H.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yu(t,r.Bs)}}function ID(n,e){const t=Pe(n),r=t.Eu.get(e);if(r&&r.lu)return Fe().add(r.key);{let s=Fe();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function b0(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=k0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_D.bind(null,e),e.hu.J_=sD.bind(null,e.eventManager),e.hu.pu=oD.bind(null,e.eventManager),e}function TD(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vD.bind(null,e),e}class ud{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$d(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Rx(this.persistence,new Sx,e.initialUser,this.serializer)}Du(e){return new d0(Ng.Vi,this.serializer)}bu(e){return new Ox}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ud.provider={build:()=>new ud};class SD extends ud{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Xe(this.persistence.referenceDelegate instanceof ad,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ux(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?On.withCacheSize(this.cacheSizeBytes):On.DEFAULT;return new d0((r=>ad.Vi(r,t)),this.serializer)}}class Om{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wD.bind(null,this.syncEngine),await nD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new iD})()}createDatastore(e){const t=$d(e.databaseInfo.databaseId),r=(function(a){return new Ux(a)})(e.databaseInfo);return(function(a,u,d,f){return new Wx(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new qx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>gw(this.syncEngine,t,0)),(function(){return cw.C()?new cw:new Mx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const E=new cD(s,a,u,d,f,m);return y&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Pe(s);ce(Po,"RemoteStore shutting down."),a.Ia.add(5),await Qu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Om.provider={build:()=>new Om};/**
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
 */class O0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):bi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ls="FirestoreClient";class CD{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=mn.UNAUTHENTICATED,this.clientId=vg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(Ls,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(Ls,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Zp(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Ls,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await f0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ns("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ns("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function yw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AD(n);ce(Ls,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>dw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>dw(e.remoteStore,s))),n._onlineComponents=e}async function AD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Ls,"Using user provided OfflineComponentProvider");try{await Zp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ns("Error using user provided cache. Falling back to memory cache: "+t),await Zp(n,new ud)}}else ce(Ls,"Using default OfflineComponentProvider"),await Zp(n,new SD(void 0));return n._offlineComponents}async function M0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Ls,"Using user provided OnlineComponentProvider"),await yw(n,n._uninitializedComponentsProvider._online)):(ce(Ls,"Using default OnlineComponentProvider"),await yw(n,new Om))),n._onlineComponents}function RD(n){return M0(n).then((e=>e.syncEngine))}async function Mm(n){const e=await M0(n),t=e.eventManager;return t.onListen=hD.bind(null,e.syncEngine),t.onUnlisten=pD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mD.bind(null,e.syncEngine),t}function PD(n,e,t={}){const r=new Ss;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new O0({next:w=>{y.Ou(),u.enqueueAndForget((()=>S0(a,E)));const k=w.docs.has(d);!k&&w.fromCache?m.reject(new oe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&f&&f.source==="server"?m.reject(new oe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),E=new C0(Vd(d.path),y,{includeMetadataChanges:!0,ka:!0});return T0(a,E)})(await Mm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function L0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const V0="firestore.googleapis.com",Ew=!0;class ww{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=V0,this.ssl=Ew}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ew;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=h0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ax)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Vk;switch(r.type){case"firstParty":return new Bk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=vw.get(t);r&&(ce("ComponentProvider","Removing Datastore"),vw.delete(t),r.terminate())})(this),Promise.resolve()}}function kD(n,e,t,r={}){var s;n=Kn(n,Gd);const a=Bs(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(ig(`https://${f}`),sg("Firestore",!0)),u.host!==V0&&u.host!==f&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Ni(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=mn.MOCK_USER;else{y=CI(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new mn(w)}n._authCredentials=new Fk(new wT(y,E))}}/**
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
 */class qs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class St{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}toJSON(){return{type:St._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Hu(t,St._jsonSchema))return new St(e,r||null,new _e(lt.fromString(t.referencePath)))}}St._jsonSchemaVersion="firestore/documentReference/1.0",St._jsonSchema={type:Ot("string",St._jsonSchemaVersion),referencePath:Ot("string")};class As extends qs{constructor(e,t,r){super(e,t,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new _e(e))}withConverter(e){return new As(this.firestore,e,this._path)}}function Or(n,e,...t){if(n=et(n),TT("collection","path",e),n instanceof Gd){const r=lt.fromString(e,...t);return OE(r),new As(n,null,r)}{if(!(n instanceof St||n instanceof As))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return OE(r),new As(n.firestore,null,r)}}function sn(n,e,...t){if(n=et(n),arguments.length===1&&(e=vg.newId()),TT("doc","path",e),n instanceof Gd){const r=lt.fromString(e,...t);return bE(r),new St(n,null,new _e(r))}{if(!(n instanceof St||n instanceof As))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return bE(r),new St(n.firestore,n instanceof As?n.converter:null,new _e(r))}}/**
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
 */const Iw="AsyncQueue";class Tw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new m0(this,"async_queue_retry"),this.oc=()=>{const r=Jp();r&&ce(Iw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Jp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Jp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ss;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!al(e))throw e;ce(Iw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,bi("INTERNAL UNHANDLED ERROR: ",Sw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Vg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ce(47125,{hc:Sw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Sw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Cw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Mi extends Gd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tw(e),this._firestoreClient=void 0,await e}}}function ND(n,e){const t=typeof n=="object"?n:lg(),r=typeof n=="string"?n:td,s=Pd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=II("firestore");a&&kD(s,...a)}return s}function Kd(n){if(n._terminated)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xD(n),n._firestoreClient}function xD(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new rN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,L0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new CD(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(on.fromBase64String(e))}catch(t){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ar(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ar._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hu(e,ar._jsonSchema))return ar.fromBase64String(e.bytes)}}ar._jsonSchemaVersion="firestore/bytes/1.0",ar._jsonSchema={type:Ot("string",ar._jsonSchemaVersion),bytes:Ot("string")};/**
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
 */class Xu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ti{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ti._jsonSchemaVersion}}static fromJSON(e){if(Hu(e,ti._jsonSchema))return new ti(e.latitude,e.longitude)}}ti._jsonSchemaVersion="firestore/geoPoint/1.0",ti._jsonSchema={type:Ot("string",ti._jsonSchemaVersion),latitude:Ot("number"),longitude:Ot("number")};/**
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
 */class ni{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hu(e,ni._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ni(e.vectorValues);throw new oe(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ni._jsonSchemaVersion="firestore/vectorValue/1.0",ni._jsonSchema={type:Ot("string",ni._jsonSchemaVersion),vectorValues:Ot("object")};/**
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
 */const DD=/^__.*__$/;class bD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gu(e,this.data,t,this.fieldTransforms)}}class F0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $s(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function U0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ec:n})}}class Qd{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return cd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(U0(this.Ec)&&DD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class OD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$d(e)}Dc(e,t,r,s=!1){return new Qd({Ec:e,methodName:t,bc:r,path:rn.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zu(n){const e=n._freezeSettings(),t=$d(n._databaseId);return new OD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zg(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);qg("Data must be an object, but it was:",u,r);const d=z0(r,u);let f,m;if(a.merge)f=new Hn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const w=Lm(e,E,t);if(!u.contains(w))throw new oe(H.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);$0(y,w)||y.push(w)}f=new Hn(y),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new bD(new Mn(d),f,m)}class ec extends Ju{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function MD(n,e,t){return new Qd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wg extends Ju{_toFieldTransform(e){return new JT(e.path,new Du)}isEqual(e){return e instanceof Wg}}class $g extends Ju{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=MD(this,e,!0),r=this.vc.map((a=>cl(a,t))),s=new Ha(r);return new JT(e.path,s)}isEqual(e){return e instanceof $g&&Ni(this.vc,e.vc)}}function j0(n,e,t,r){const s=n.Dc(1,e,t);qg("Data must be an object, but it was:",s,r);const a=[],u=Mn.empty();Ws(r,((f,m)=>{const y=Hg(e,f,t);m=et(m);const E=s.gc(y);if(m instanceof ec)a.push(y);else{const w=cl(m,E);w!=null&&(a.push(y),u.set(y,w))}}));const d=new Hn(a);return new F0(u,d,s.fieldTransforms)}function B0(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Lm(e,r,t)],f=[s];if(a.length%2!=0)throw new oe(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)d.push(Lm(e,a[w])),f.push(a[w+1]);const m=[],y=Mn.empty();for(let w=d.length-1;w>=0;--w)if(!$0(m,d[w])){const k=d[w];let V=f[w];V=et(V);const B=u.gc(k);if(V instanceof ec)m.push(k);else{const z=cl(V,B);z!=null&&(m.push(k),y.set(k,z))}}const E=new Hn(m);return new F0(y,E,u.fieldTransforms)}function LD(n,e,t,r=!1){return cl(t,n.Dc(r?4:3,e))}function cl(n,e){if(W0(n=et(n)))return qg("Unsupported field value:",e,n),z0(n,e);if(n instanceof Ju)return(function(r,s){if(!U0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=cl(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=dt.fromDate(r);return{timestampValue:od(s.serializer,a)}}if(r instanceof dt){const a=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:od(s.serializer,a)}}if(r instanceof ti)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:i0(s.serializer,r._byteString)};if(r instanceof St){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Pg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ni)return(function(u,d){return{mapValue:{fields:{[DT]:{stringValue:bT},[nd]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Cg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${bd(r)}`)})(n,e)}function z0(n,e){const t={};return AT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(n,((r,s)=>{const a=cl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function W0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof ti||n instanceof ar||n instanceof St||n instanceof Ju||n instanceof ni)}function qg(n,e,t){if(!W0(t)||!ST(t)){const r=bd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Lm(n,e,t){if((e=et(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return Hg(n,e);throw cd("Field path arguments must be of type string or ",n,!1,void 0,t)}const VD=new RegExp("[~\\*/\\[\\]]");function Hg(n,e,t){if(e.search(VD)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xu(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new oe(H.INVALID_ARGUMENT,d+n+f)}function $0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class q0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FD extends q0{data(){return super.data()}}function Yd(n,e){return typeof e=="string"?Hg(n,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
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
 */function UD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gg{}class Kg extends Gg{}function ko(n,e,...t){let r=[];e instanceof Gg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Qg)).length,d=a.filter((f=>f instanceof Xd)).length;if(u>1||u>0&&d>0)throw new oe(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Xd extends Kg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xd(e,t,r)}_apply(e){const t=this._parse(e);return G0(e._query,t),new qs(e.firestore,e.converter,Cm(e._query,t))}_parse(e){const t=Zu(e.firestore);return(function(a,u,d,f,m,y,E){let w;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new oe(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Rw(E,y);const V=[];for(const B of E)V.push(Aw(f,a,B));w={arrayValue:{values:V}}}else w=Aw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Rw(E,y),w=LD(d,u,E,y==="in"||y==="not-in");return bt.create(m,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hd(n,e,t){const r=e,s=Yd("where",n);return Xd._create(s,r,t)}class Qg extends Gg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:br.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)G0(u,f),u=Cm(u,f)})(e._query,t),new qs(e.firestore,e.converter,Cm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yg extends Kg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xu(a,u)})(e._query,this._field,this._direction);return new qs(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new ll(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function H0(n,e="asc"){const t=e,r=Yd("orderBy",n);return Yg._create(r,t)}class Xg extends Kg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xg(e,t,r)}_apply(e){return new qs(e.firestore,e.converter,id(e._query,this._limit,this._limitType))}}function No(n){return Xg._create("limit",n,"F")}function Aw(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new oe(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!BT(e)&&t.indexOf("/")!==-1)throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(lt.fromString(t));if(!_e.isDocumentKey(r))throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zE(n,new _e(r))}if(t instanceof St)return zE(n,t._key);throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(t)}.`)}function Rw(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function G0(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jD{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ws(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[nd].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>Pt(u.doubleValue)));return new ni(a)}convertGeoPoint(e){return new ti(Pt(e.latitude),Pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ld(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pu(e));default:return null}}convertTimestamp(e){const t=Ds(e);return new dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Xe(c0(r),9688,{name:e});const s=new ku(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return s.isEqual(t)||bi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function Jg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class uu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class So extends q0{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=So._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}So._jsonSchemaVersion="firestore/documentSnapshot/1.0",So._jsonSchema={type:Ot("string",So._jsonSchemaVersion),bundleSource:Ot("string","DocumentSnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class Bh extends So{data(e={}){return super.data(e)}}class La{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new uu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Bh(this._firestore,this._userDataWriter,r.key,r,new uu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Bh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new uu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Bh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new uu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:BD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
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
 */function Nr(n){n=Kn(n,St);const e=Kn(n.firestore,Mi);return PD(Kd(e),n._key).then((t=>Y0(e,n,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:Ot("string",La._jsonSchemaVersion),bundleSource:Ot("string","QuerySnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class K0 extends jD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function Jd(n,e,t){n=Kn(n,St);const r=Kn(n.firestore,Mi),s=Jg(n.converter,e,t);return tc(r,[zg(Zu(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tn.none())])}function Qa(n,e,t,...r){n=Kn(n,St);const s=Kn(n.firestore,Mi),a=Zu(s);let u;return u=typeof(e=et(e))=="string"||e instanceof Xu?B0(a,"updateDoc",n._key,e,t,r):j0(a,"updateDoc",n._key,e),tc(s,[u.toMutation(n._key,Tn.exists(!0))])}function zD(n){return tc(Kn(n.firestore,Mi),[new zd(n._key,Tn.none())])}function Q0(n,e){const t=Kn(n.firestore,Mi),r=sn(n),s=Jg(n.converter,e);return tc(t,[zg(Zu(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Tn.exists(!1))]).then((()=>r))}function Pi(n,...e){var t,r,s;n=et(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Cw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Cw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof St)m=Kn(n.firestore,Mi),y=Vd(n._key.path),f={next:E=>{e[u]&&e[u](Y0(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=Kn(n,qs);m=Kn(E.firestore,Mi),y=E._query;const w=new K0(m);f={next:k=>{e[u]&&e[u](new La(m,w,E,k))},error:e[u+1],complete:e[u+2]},UD(n._query)}return(function(w,k,V,B){const z=new O0(B),Z=new C0(k,z,V);return w.asyncQueue.enqueueAndForget((async()=>T0(await Mm(w),Z))),()=>{z.Ou(),w.asyncQueue.enqueueAndForget((async()=>S0(await Mm(w),Z)))}})(Kd(m),y,d,f)}function tc(n,e){return(function(r,s){const a=new Ss;return r.asyncQueue.enqueueAndForget((async()=>gD(await RD(r),s,a))),a.promise})(Kd(n),e)}function Y0(n,e,t){const r=t.docs.get(e._key),s=new K0(n);return new So(n,s,e._key,r,new uu(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class WD{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Zu(e)}set(e,t,r){this._verifyNotCommitted();const s=em(e,this._firestore),a=Jg(s.converter,t,r),u=zg(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,Tn.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const a=em(e,this._firestore);let u;return u=typeof(t=et(t))=="string"||t instanceof Xu?B0(this._dataReader,"WriteBatch.update",a._key,t,r,s):j0(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(u.toMutation(a._key,Tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=em(e,this._firestore);return this._mutations=this._mutations.concat(new zd(t._key,Tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function em(n,e){if((n=et(n)).firestore!==e)throw new oe(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function $D(){return new ec("deleteField")}function Gn(){return new Wg("serverTimestamp")}function Pw(...n){return new $g("arrayUnion",n)}/**
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
 */function qD(n){return Kd(n=Kn(n,Mi)),new WD(n,(e=>tc(n,e)))}(function(e,t=!0){(function(s){sl=s})(Oo),Co(new ks("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Mi(new Uk(r.getProvider("auth-internal")),new zk(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ku(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Yr(PE,kE,e),Yr(PE,kE,"esm2017")})();var kw={};const Nw="@firebase/database",xw="1.0.20";/**
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
 */let X0="";function HD(n){X0=n}/**
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
 */class GD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class KD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ii(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const J0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GD(e)}}catch{}return new KD},Io=J0("localStorage"),QD=J0("sessionStorage");/**
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
 */const Va=new Rd("@firebase/database"),YD=(function(){let n=1;return function(){return n++}})(),Z0=function(n){const e=uR(n),t=new sR;t.update(e);const r=t.digest();return rg.encodeByteArray(r)},nc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=nc.apply(null,r):typeof r=="object"?e+=Ut(r):e+=r,e+=" "}return e};let yu=null,Dw=!0;const XD=function(n,e){te(!0,"Can't turn on custom loggers persistently."),Va.logLevel=Ve.VERBOSE,yu=Va.log.bind(Va)},Yt=function(...n){if(Dw===!0&&(Dw=!1,yu===null&&QD.get("logging_enabled")===!0&&XD()),yu){const e=nc.apply(null,n);yu(e)}},rc=function(n){return function(...e){Yt(n,...e)}},Vm=function(...n){const e="FIREBASE INTERNAL ERROR: "+nc(...n);Va.error(e)},Li=function(...n){const e=`FIREBASE FATAL ERROR: ${nc(...n)}`;throw Va.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+nc(...n);Va.warn(e)},JD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ZD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ya="[MIN_NAME]",xo="[MAX_NAME]",Fo=function(n,e){if(n===e)return 0;if(n===Ya||e===xo)return-1;if(e===Ya||n===xo)return 1;{const t=bw(n),r=bw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},eb=function(n,e){return n===e?0:n<e?-1:1},eu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},Zg=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ut(e[r]),t+=":",t+=Zg(n[e[r]]);return t+="}",t},eS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Xt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const tS=function(n){te(!Zd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let w=parseInt(y.substr(f,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},tb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rb(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const ib=new RegExp("^-?(0*)\\d{1,10}$"),sb=-2147483648,ob=2147483647,bw=function(n){if(ib.test(n)){const e=Number(n);if(e>=sb&&e<=ob)return e}return null},hl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},ab=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class lb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,or(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ub{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zh.OWNER="owner";/**
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
 */const e_="5",nS="v",rS="s",iS="r",sS="f",oS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aS="ls",lS="p",Fm="ac",uS="websocket",cS="long_polling";/**
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
 */class hS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function dS(n,e,t){te(typeof e=="string","typeof type must == string"),te(typeof t=="object","typeof params must == object");let r;if(e===uS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===cS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cb(n)&&(t.ns=n.namespace);const s=[];return Xt(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
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
 */class hb{constructor(){this.counters_={}}incrementCounter(e,t=1){ii(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return FA(this.counters_)}}/**
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
 */const tm={},nm={};function t_(n){const e=n.toString();return tm[e]||(tm[e]=new hb),tm[e]}function db(n,e){const t=n.toString();return nm[t]||(nm[t]=e()),nm[t]}/**
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
 */class fb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&hl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ow="start",pb="close",mb="pLPCommand",gb="pRTLPCB",fS="id",pS="pw",mS="ser",_b="cb",yb="seg",vb="ts",Eb="d",wb="dframe",gS=1870,_S=30,Ib=gS-_S,Tb=25e3,Sb=3e4;class xa{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rc(e),this.stats_=t_(t),this.urlFn=f=>(this.appCheckToken&&(f[Fm]=this.appCheckToken),dS(t,cS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sb)),ZD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new n_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ow)this.id=d,this.password=f;else if(u===pb)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ow]="t",r[mS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_b]=this.scriptTagHolder.uniqueCallbackIdentifier),r[nS]=e_,this.transportSessionId&&(r[rS]=this.transportSessionId),this.lastSessionId&&(r[aS]=this.lastSessionId),this.applicationId&&(r[lS]=this.applicationId),this.appCheckToken&&(r[Fm]=this.appCheckToken),typeof location<"u"&&location.hostname&&oS.test(location.hostname)&&(r[iS]=sS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xa.forceAllow_=!0}static forceDisallow(){xa.forceDisallow_=!0}static isAvailable(){return xa.forceAllow_?!0:!xa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tb()&&!nb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=vI(t),s=eS(r,Ib);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[wb]="t",r[fS]=e,r[pS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class n_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YD(),window[mb+this.uniqueCallbackIdentifier]=e,window[gb+this.uniqueCallbackIdentifier]=t,this.myIFrame=n_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Yt("frame writing exception"),d.stack&&Yt(d.stack),Yt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fS]=this.myID,e[pS]=this.myPW,e[mS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_S+r.length<=gS;){const u=this.pendingSegs.shift();r=r+"&"+yb+s+"="+u.seg+"&"+vb+s+"="+u.ts+"&"+Eb+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(Tb)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Cb=16384,Ab=45e3;let dd=null;typeof MozWebSocket<"u"?dd=MozWebSocket:typeof WebSocket<"u"&&(dd=WebSocket);class Rr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rc(this.connId),this.stats_=t_(t),this.connURL=Rr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[nS]=e_,typeof location<"u"&&location.hostname&&oS.test(location.hostname)&&(u[iS]=sS),t&&(u[rS]=t),r&&(u[aS]=r),s&&(u[Fm]=s),a&&(u[lS]=a),dS(e,uS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Io.set("previous_websocket_failure",!0);try{let r;YA(),this.mySock=new dd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dd!==null&&!Rr.forceDisallow_}static previouslyFailed(){return Io.isInMemoryStorage||Io.get("previous_websocket_failure")===!0}markConnectionHealthy(){Io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Tu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=eS(t,Cb);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ab))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rr.responsesRequiredToBeHealthy=2;Rr.healthyTimeout=3e4;/**
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
 */class Ou{static get ALL_TRANSPORTS(){return[xa,Rr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Rr&&Rr.isAvailable();let r=t&&!Rr.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rr];else{const s=this.transports_=[];for(const a of Ou.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Ou.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ou.globalTransportInitialized_=!1;/**
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
 */const Rb=6e4,Pb=5e3,kb=10*1024,Nb=100*1024,rm="t",Mw="d",xb="s",Lw="r",Db="e",Vw="o",Fw="a",Uw="n",jw="p",bb="h";class Ob{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rc("c:"+this.id+":"),this.transportManager_=new Ou(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Nb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rm in e){const t=e[rm];t===Fw?this.upgradeIfSecondaryHealthy_():t===Lw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Vw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=eu("t",e),r=eu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=eu("t",e),r=eu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=eu(rm,e);if(Mw in e){const r=e[Mw];if(t===bb){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Uw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===xb?this.onConnectionShutdown_(r):t===Lw?this.onReset_(r):t===Db?Vm("Server Error: "+r):t===Vw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),e_!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class vS{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){te(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class fd extends vS{static getInstance(){return new fd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!og()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bw=32,zw=768;class tt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Qe(){return new tt("")}function be(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Vs(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new tt(n.pieces_,e)}function r_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Mb(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ES(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new tt(e,0)}function vt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new tt(t,0)}function Me(n){return n.pieceNum_>=n.pieces_.length}function In(n,e){const t=be(n),r=be(e);if(t===null)return e;if(t===r)return In(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Lb(n,e){const t=Mu(n,0),r=Mu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Fo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function i_(n,e){if(Vs(n)!==Vs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function lr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Vs(n)>Vs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Vb{constructor(e,t){this.errorPrefix_=t,this.parts_=Mu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ad(this.parts_[r]);wS(this)}}function Fb(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ad(e),wS(n)}function Ub(n){const e=n.parts_.pop();n.byteLength_-=Ad(e),n.parts_.length>0&&(n.byteLength_-=1)}function wS(n){if(n.byteLength_>zw)throw new Error(n.errorPrefix_+"has a key path longer than "+zw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bw+") or object contains a cycle "+Eo(n))}function Eo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class s_ extends vS{static getInstance(){return new s_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const tu=1e3,jb=300*1e3,Ww=30*1e3,Bb=1.3,zb=3e4,Wb="server_kill",$w=3;class ki extends yS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=ki.nextPersistentConnectionId_++,this.log_=rc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tu,this.maxReconnectDelay_=jb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");s_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Ut(a)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Qr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;ki.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ii(e,"w")){const r=ja(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vm("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zb&&(this.reconnectDelay_=tu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ki.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){te(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Yt("getToken() completed but was canceled"):(Yt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,d=new Ob(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,k=>{Sn(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wb)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Sn(E),f())}}}interrupt(e){Yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qh(this.interruptReasons_)&&(this.reconnectDelay_=tu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Zg(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new tt(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Yt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$w&&(this.reconnectDelay_=Ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Yt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$w&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+X0.replace(/\./g,"-")]=1,og()?e["framework.cordova"]=1:AI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fd.getInstance().currentlyOnline();return qh(this.interruptReasons_)&&e}}ki.nextPersistentConnectionId_=0;ki.nextConnectionId_=0;/**
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
 */class Le{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Le(e,t)}}/**
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
 */class ef{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Le(Ya,e),s=new Le(Ya,t);return this.compare(r,s)!==0}minPost(){return Le.MIN}}/**
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
 */let Nh;class IS extends ef{static get __EMPTY_NODE(){return Nh}static set __EMPTY_NODE(e){Nh=e}compare(e,t){return Fo(e.name,t.name)}isDefinedOn(e){throw nl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Le.MIN}maxPost(){return new Le(xo,Nh)}makePost(e,t){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new Le(e,Nh)}toString(){return".key"}}const Fa=new IS;/**
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
 */class xh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Qt.RED,this.left=s??Ln.EMPTY_NODE,this.right=a??Ln.EMPTY_NODE}copy(e,t,r,s,a){return new Qt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ln.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Ln.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qt.RED=!0;Qt.BLACK=!1;class $b{copy(e,t,r,s,a){return this}insert(e,t,r){return new Qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ln{constructor(e,t=Ln.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ln(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Ln(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xh(this.root_,null,this.comparator_,!0,e)}}Ln.EMPTY_NODE=new $b;/**
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
 */function qb(n,e){return Fo(n.name,e.name)}function o_(n,e){return Fo(n,e)}/**
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
 */let Um;function Hb(n){Um=n}const TS=function(n){return typeof n=="number"?"number:"+tS(n):"string:"+n},SS=function(n){if(n.isLeafNode()){const e=n.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ii(e,".sv"),"Priority must be a string or number.")}else te(n===Um||n.isEmpty(),"priority of unexpected type.");te(n===Um||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qw;class Gt{static set __childrenNodeConstructor(e){qw=e}static get __childrenNodeConstructor(){return qw}constructor(e,t=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),SS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Me(e)?this:be(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=be(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(te(r!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+TS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=tS(this.value_):e+=this.value_,this.lazyHash_=Z0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Gt.VALUE_TYPE_ORDER.indexOf(t),a=Gt.VALUE_TYPE_ORDER.indexOf(r);return te(s>=0,"Unknown leaf type: "+t),te(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let CS,AS;function Gb(n){CS=n}function Kb(n){AS=n}class Qb extends ef{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Fo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(xo,new Gt("[PRIORITY-POST]",AS))}makePost(e,t){const r=CS(e);return new Le(t,new Gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Et=new Qb;/**
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
 */const Yb=Math.log(2);class Xb{constructor(e){const t=a=>parseInt(Math.log(a)/Yb,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,w;if(y===0)return null;if(y===1)return E=n[f],w=t?t(E):E,new Qt(w,E.node,Qt.BLACK,null,null);{const k=parseInt(y/2,10)+f,V=s(f,k),B=s(k+1,m);return E=n[k],w=t?t(E):E,new Qt(w,E.node,Qt.BLACK,V,B)}},a=function(f){let m=null,y=null,E=n.length;const w=function(V,B){const z=E-V,Z=E;E-=V;const Q=s(z+1,Z),ie=n[z],le=t?t(ie):ie;k(new Qt(le,ie.node,B,null,Q))},k=function(V){m?(m.left=V,m=V):(y=V,m=V)};for(let V=0;V<f.count;++V){const B=f.nextBitIsOne(),z=Math.pow(2,f.count-(V+1));B?w(z,Qt.BLACK):(w(z,Qt.BLACK),w(z,Qt.RED))}return y},u=new Xb(n.length),d=a(u);return new Ln(r||e,d)};/**
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
 */let im;const Ca={};class Ri{static get Default(){return te(Ca&&Et,"ChildrenNode.ts has not been loaded"),im=im||new Ri({".priority":Ca},{".priority":Et}),im}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ja(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ln?t:null}hasIndex(e){return ii(this.indexSet_,e.toString())}addIndex(e,t){te(e!==Fa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Le.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=pd(r,e.getCompare()):d=Ca;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new Ri(y,m)}addToIndexes(e,t){const r=Hh(this.indexes_,(s,a)=>{const u=ja(this.indexSet_,a);if(te(u,"Missing index implementation for "+a),s===Ca)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Le.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),pd(d,u.getCompare())}else return Ca;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Le(e.name,d))),f.insert(e,e.node)}});return new Ri(r,this.indexSet_)}removeFromIndexes(e,t){const r=Hh(this.indexes_,s=>{if(s===Ca)return s;{const a=t.get(e.name);return a?s.remove(new Le(e.name,a)):s}});return new Ri(r,this.indexSet_)}}/**
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
 */let nu;class Se{static get EMPTY_NODE(){return nu||(nu=new Se(new Ln(o_),null,Ri.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&SS(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nu}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?nu:t}}getChild(e){const t=be(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(te(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Le(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?nu:this.priorityNode_;return new Se(s,u,a)}}updateChild(e,t){const r=be(e);if(r===null)return t;{te(be(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(Et,(u,d)=>{t[u]=d.val(e),r++,a&&Se.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+TS(this.getPriority().val())+":"),this.forEachChild(Et,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Z0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Le(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Le(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Le(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Le.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Le.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ic?-1:0}withIndex(e){if(e===Fa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Et),s=t.getIterator(Et);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Fa?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jb extends Se{constructor(){super(new Ln(o_),Se.EMPTY_NODE,Ri.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const ic=new Jb;Object.defineProperties(Le,{MIN:{value:new Le(Ya,Se.EMPTY_NODE)},MAX:{value:new Le(xo,ic)}});IS.__EMPTY_NODE=Se.EMPTY_NODE;Gt.__childrenNodeConstructor=Se;Hb(ic);Kb(ic);/**
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
 */const Zb=!0;function Tt(n,e=null){if(n===null)return Se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Gt(t,Tt(e))}if(!(n instanceof Array)&&Zb){const t=[];let r=!1;if(Xt(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Tt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Le(u,f)))}}),t.length===0)return Se.EMPTY_NODE;const a=pd(t,qb,u=>u.name,o_);if(r){const u=pd(t,Et.getCompare());return new Se(a,Tt(e),new Ri({".priority":u},{".priority":Et}))}else return new Se(a,Tt(e),Ri.Default)}else{let t=Se.EMPTY_NODE;return Xt(n,(r,s)=>{if(ii(n,r)&&r.substring(0,1)!=="."){const a=Tt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Tt(e))}}Gb(Tt);/**
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
 */class eO extends ef{constructor(e){super(),this.indexPath_=e,te(!Me(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Fo(e.name,t.name):a}makePost(e,t){const r=Tt(e),s=Se.EMPTY_NODE.updateChild(this.indexPath_,r);return new Le(t,s)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,ic);return new Le(xo,e)}toString(){return Mu(this.indexPath_,0).join("/")}}/**
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
 */class tO extends ef{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Fo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(e,t){const r=Tt(e);return new Le(t,r)}toString(){return".value"}}const nO=new tO;/**
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
 */function RS(n){return{type:"value",snapshotNode:n}}function Xa(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Lu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class a_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){te(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Lu(t,d)):te(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Xa(t,r)):u.trackChildChange(Vu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Et,(s,a)=>{t.hasChild(s)||r.trackChildChange(Lu(s,a))}),t.isLeafNode()||t.forEachChild(Et,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Vu(s,a,u))}else r.trackChildChange(Xa(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Fu{constructor(e){this.indexedFilter_=new a_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fu.getStartPost_(e),this.endPost_=Fu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Le(t,r))||(r=Se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Se.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Se.EMPTY_NODE);const a=this;return t.forEachChild(Et,(u,d)=>{a.matches(new Le(u,d))||(s=s.updateImmediateChild(u,Se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class iO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Fu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Le(t,r))||(r=Se.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Se.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Se.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(w,k)=>E(k,w)}else u=this.index_.getCompare();const d=e;te(d.numChildren()===this.limit_,"");const f=new Le(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let w=s.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=s.getChildAfterChild(this.index_,w,this.reverse_);const k=w==null?1:u(w,f);if(y&&!r.isEmpty()&&k>=0)return a!=null&&a.trackChildChange(Vu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Lu(t,E));const B=d.updateImmediateChild(t,Se.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(Xa(w.name,w.node)),B.updateImmediateChild(w.name,w.node)):B}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Lu(m.name,m.node)),a.trackChildChange(Xa(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Se.EMPTY_NODE)):e}}/**
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
 */class l_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ya}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new l_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sO(n){return n.loadsAllData()?new a_(n.getIndex()):n.hasLimit()?new iO(n):new Fu(n)}function Hw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Et?t="$priority":n.index_===nO?t="$value":n.index_===Fa?t="$key":(te(n.index_ instanceof eO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ut(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ut(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ut(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ut(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Gw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Et&&(e.i=n.index_.toString()),e}/**
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
 */class md extends yS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=rc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=md.getListenId_(e,r),d={};this.listens_[u]=d;const f=Hw(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),ja(this.listens_,u)===d){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",s(w,null)}})}unlisten(e,t){const r=md.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Hw(e._queryParams),r=e._path.toString(),s=new Qr;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Tu(d.responseText)}catch{Sn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Sn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
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
 */class oO{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gd(){return{value:null,children:new Map}}function dl(n,e,t){if(Me(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=be(e);n.children.has(r)||n.children.set(r,gd());const s=n.children.get(r);e=rt(e),dl(s,e,t)}}function jm(n,e){if(Me(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Et,(r,s)=>{dl(n,new tt(r),s)}),jm(n,e)}}else if(n.children.size>0){const t=be(e);return e=rt(e),n.children.has(t)&&jm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Bm(n,e,t){n.value!==null?t(e,n.value):aO(n,(r,s)=>{const a=new tt(e.toString()+"/"+r);Bm(s,a,t)})}function aO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class lO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Xt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Kw=10*1e3,uO=30*1e3,cO=300*1e3;class hO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lO(e);const r=Kw+(uO-Kw)*Math.random();vu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Xt(e,(s,a)=>{a>0&&ii(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*cO))}}/**
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
 */class _d{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=kr.ACK_USER_WRITE,this.source=u_()}operationForChild(e){if(Me(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new tt(e));return new _d(Qe(),t,this.revert)}}else return te(be(this.path)===e,"operationForChild called for unrelated child."),new _d(rt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Uu{constructor(e,t){this.source=e,this.path=t,this.type=kr.LISTEN_COMPLETE}operationForChild(e){return Me(this.path)?new Uu(this.source,Qe()):new Uu(this.source,rt(this.path))}}/**
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
 */class Do{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=kr.OVERWRITE}operationForChild(e){return Me(this.path)?new Do(this.source,Qe(),this.snap.getImmediateChild(e)):new Do(this.source,rt(this.path),this.snap)}}/**
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
 */class Ja{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=kr.MERGE}operationForChild(e){if(Me(this.path)){const t=this.children.subtree(new tt(e));return t.isEmpty()?null:t.value?new Do(this.source,Qe(),t.value):new Ja(this.source,Qe(),t)}else return te(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ja(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fs{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Me(e))return this.isFullyInitialized()&&!this.filtered_;const t=be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class dO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(rO(u.childName,u.snapshotNode))}),ru(n,s,"child_removed",e,r,t),ru(n,s,"child_added",e,r,t),ru(n,s,"child_moved",a,r,t),ru(n,s,"child_changed",e,r,t),ru(n,s,"value",e,r,t),s}function ru(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>mO(n,d,f)),u.forEach(d=>{const f=pO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function pO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function mO(n,e,t){if(e.childName==null||t.childName==null)throw nl("Should only compare child_ events.");const r=new Le(e.childName,e.snapshotNode),s=new Le(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function tf(n,e){return{eventCache:n,serverCache:e}}function Eu(n,e,t,r){return tf(new Fs(e,t,r),n.serverCache)}function PS(n,e,t,r){return tf(n.eventCache,new Fs(e,t,r))}function yd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function bo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let sm;const gO=()=>(sm||(sm=new Ln(eb)),sm);class at{static fromObject(e){let t=new at(null);return Xt(e,(r,s)=>{t=t.set(new tt(r),s)}),t}constructor(e,t=gO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Qe(),value:this.value};if(Me(e))return null;{const r=be(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(rt(e),t);return a!=null?{path:vt(new tt(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Me(e))return this;{const t=be(e),r=this.children.get(t);return r!==null?r.subtree(rt(e)):new at(null)}}set(e,t){if(Me(e))return new at(t,this.children);{const r=be(e),a=(this.children.get(r)||new at(null)).set(rt(e),t),u=this.children.insert(r,a);return new at(this.value,u)}}remove(e){if(Me(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const t=be(e),r=this.children.get(t);if(r){const s=r.remove(rt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new at(null):new at(this.value,a)}else return this}}get(e){if(Me(e))return this.value;{const t=be(e),r=this.children.get(t);return r?r.get(rt(e)):null}}setTree(e,t){if(Me(e))return t;{const r=be(e),a=(this.children.get(r)||new at(null)).setTree(rt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new at(this.value,u)}}fold(e){return this.fold_(Qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(vt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Qe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Me(e))return null;{const a=be(e),u=this.children.get(a);return u?u.findOnPath_(rt(e),vt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Qe(),t)}foreachOnPath_(e,t,r){if(Me(e))return this;{this.value&&r(t,this.value);const s=be(e),a=this.children.get(s);return a?a.foreachOnPath_(rt(e),vt(t,s),r):new at(null)}}foreach(e){this.foreach_(Qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(vt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class xr{constructor(e){this.writeTree_=e}static empty(){return new xr(new at(null))}}function wu(n,e,t){if(Me(e))return new xr(new at(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=In(s,e);return a=a.updateChild(u,t),new xr(n.writeTree_.set(s,a))}else{const s=new at(t),a=n.writeTree_.setTree(e,s);return new xr(a)}}}function zm(n,e,t){let r=n;return Xt(t,(s,a)=>{r=wu(r,vt(e,s),a)}),r}function Qw(n,e){if(Me(e))return xr.empty();{const t=n.writeTree_.setTree(e,new at(null));return new xr(t)}}function Wm(n,e){return Uo(n,e)!=null}function Uo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(In(t.path,e)):null}function Yw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Et,(r,s)=>{e.push(new Le(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Le(r,s.value))}),e}function Rs(n,e){if(Me(e))return n;{const t=Uo(n,e);return t!=null?new xr(new at(t)):new xr(n.writeTree_.subtree(e))}}function $m(n){return n.writeTree_.isEmpty()}function Za(n,e){return kS(Qe(),n.writeTree_,e)}function kS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(te(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=kS(vt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(vt(n,".priority"),r)),t}}/**
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
 */function nf(n,e){return bS(e,n)}function _O(n,e,t,r,s){te(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=wu(n.visibleWrites,e,t)),n.lastWriteId=r}function yO(n,e,t,r){te(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=zm(n.visibleWrites,e,t),n.lastWriteId=r}function vO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function EO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);te(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&wO(d,r.path)?s=!1:lr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return IO(n),!0;if(r.snap)n.visibleWrites=Qw(n.visibleWrites,r.path);else{const d=r.children;Xt(d,f=>{n.visibleWrites=Qw(n.visibleWrites,vt(r.path,f))})}return!0}else return!1}function wO(n,e){if(n.snap)return lr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lr(vt(n.path,t),e))return!0;return!1}function IO(n){n.visibleWrites=NS(n.allWrites,TO,Qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function TO(n){return n.visible}function NS(n,e,t){let r=xr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)lr(t,u)?(d=In(t,u),r=wu(r,d,a.snap)):lr(u,t)&&(d=In(u,t),r=wu(r,Qe(),a.snap.getChild(d)));else if(a.children){if(lr(t,u))d=In(t,u),r=zm(r,d,a.children);else if(lr(u,t))if(d=In(u,t),Me(d))r=zm(r,Qe(),a.children);else{const f=ja(a.children,be(d));if(f){const m=f.getChild(rt(d));r=wu(r,Qe(),m)}}}else throw nl("WriteRecord should have .snap or .children")}}return r}function xS(n,e,t,r,s){if(!r&&!s){const a=Uo(n.visibleWrites,e);if(a!=null)return a;{const u=Rs(n.visibleWrites,e);if($m(u))return t;if(t==null&&!Wm(u,Qe()))return null;{const d=t||Se.EMPTY_NODE;return Za(u,d)}}}else{const a=Rs(n.visibleWrites,e);if(!s&&$m(a))return t;if(!s&&t==null&&!Wm(a,Qe()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(lr(m.path,e)||lr(e,m.path))},d=NS(n.allWrites,u,e),f=t||Se.EMPTY_NODE;return Za(d,f)}}}function SO(n,e,t){let r=Se.EMPTY_NODE;const s=Uo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Et,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Rs(n.visibleWrites,e);return t.forEachChild(Et,(u,d)=>{const f=Za(Rs(a,new tt(u)),d);r=r.updateImmediateChild(u,f)}),Yw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Rs(n.visibleWrites,e);return Yw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function CO(n,e,t,r,s){te(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=vt(e,t);if(Wm(n.visibleWrites,a))return null;{const u=Rs(n.visibleWrites,a);return $m(u)?s.getChild(t):Za(u,s.getChild(t))}}function AO(n,e,t,r){const s=vt(e,t),a=Uo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Rs(n.visibleWrites,s);return Za(u,r.getNode().getImmediateChild(t))}else return null}function RO(n,e){return Uo(n.visibleWrites,e)}function PO(n,e,t,r,s,a,u){let d;const f=Rs(n.visibleWrites,e),m=Uo(f,Qe());if(m!=null)d=m;else if(t!=null)d=Za(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),w=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let k=w.getNext();for(;k&&y.length<s;)E(k,r)!==0&&y.push(k),k=w.getNext();return y}else return[]}function kO(){return{visibleWrites:xr.empty(),allWrites:[],lastWriteId:-1}}function vd(n,e,t,r){return xS(n.writeTree,n.treePath,e,t,r)}function d_(n,e){return SO(n.writeTree,n.treePath,e)}function Xw(n,e,t,r){return CO(n.writeTree,n.treePath,e,t,r)}function Ed(n,e){return RO(n.writeTree,vt(n.treePath,e))}function NO(n,e,t,r,s,a){return PO(n.writeTree,n.treePath,e,t,r,s,a)}function f_(n,e,t){return AO(n.writeTree,n.treePath,e,t)}function DS(n,e){return bS(vt(n.treePath,e),n.writeTree)}function bS(n,e){return{treePath:n,writeTree:e}}/**
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
 */class xO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;te(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),te(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Vu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Lu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Xa(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Vu(r,e.snapshotNode,s.oldSnap));else throw nl("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class DO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const OS=new DO;class p_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return f_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bo(this.viewCache_),a=NO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function bO(n){return{filter:n}}function OO(n,e){te(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function MO(n,e,t,r,s){const a=new xO;let u,d;if(t.type===kr.OVERWRITE){const m=t;m.source.fromUser?u=qm(n,e,m.path,m.snap,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Me(m.path),u=wd(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===kr.MERGE){const m=t;m.source.fromUser?u=VO(n,e,m.path,m.children,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Hm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===kr.ACK_USER_WRITE){const m=t;m.revert?u=jO(n,e,m.path,r,s,a):u=FO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===kr.LISTEN_COMPLETE)u=UO(n,e,t.path,r,a);else throw nl("Unknown operation type: "+t.type);const f=a.getChanges();return LO(e,u,f),{viewCache:u,changes:f}}function LO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=yd(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(RS(yd(e)))}}function MS(n,e,t,r,s,a){const u=e.eventCache;if(Ed(r,t)!=null)return e;{let d,f;if(Me(t))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=bo(e),y=m instanceof Se?m:Se.EMPTY_NODE,E=d_(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=vd(r,bo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=be(t);if(m===".priority"){te(Vs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=Xw(r,t,y,f);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=rt(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const w=Xw(r,t,u.getNode(),f);w!=null?E=u.getNode().getImmediateChild(m).updateChild(y,w):E=u.getNode().getImmediateChild(m)}else E=f_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,s,a):d=u.getNode()}}return Eu(e,d,u.isFullyInitialized()||Me(t),n.filter.filtersNodes())}}function wd(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Me(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const k=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),k,null)}else{const k=be(t);if(!f.isCompleteForPath(t)&&Vs(t)>1)return e;const V=rt(t),z=f.getNode().getImmediateChild(k).updateChild(V,r);k===".priority"?m=y.updatePriority(f.getNode(),z):m=y.updateChild(f.getNode(),k,z,V,OS,null)}const E=PS(e,m,f.isFullyInitialized()||Me(t),y.filtersNodes()),w=new p_(s,E,a);return MS(n,E,t,s,w,d)}function qm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new p_(s,e,a);if(Me(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Eu(e,m,!0,n.filter.filtersNodes());else{const E=be(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Eu(e,m,d.isFullyInitialized(),d.isFiltered());else{const w=rt(t),k=d.getNode().getImmediateChild(E);let V;if(Me(w))V=r;else{const B=y.getCompleteChild(E);B!=null?r_(w)===".priority"&&B.getChild(ES(w)).isEmpty()?V=B:V=B.updateChild(w,r):V=Se.EMPTY_NODE}if(k.equals(V))f=e;else{const B=n.filter.updateChild(d.getNode(),E,V,w,y,u);f=Eu(e,B,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function Jw(n,e){return n.eventCache.isCompleteForChild(e)}function VO(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=vt(t,f);Jw(e,be(y))&&(d=qm(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=vt(t,f);Jw(e,be(y))||(d=qm(n,d,y,m,s,a,u))}),d}function Zw(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Hm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Me(t)?m=r:m=new at(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,w)=>{if(y.hasChild(E)){const k=e.serverCache.getNode().getImmediateChild(E),V=Zw(n,k,w);f=wd(n,f,new tt(E),V,s,a,u,d)}}),m.children.inorderTraversal((E,w)=>{const k=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!y.hasChild(E)&&!k){const V=e.serverCache.getNode().getImmediateChild(E),B=Zw(n,V,w);f=wd(n,f,new tt(E),B,s,a,u,d)}}),f}function FO(n,e,t,r,s,a,u){if(Ed(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Me(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return wd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Me(t)){let m=new at(null);return f.getNode().forEachChild(Fa,(y,E)=>{m=m.set(new tt(y),E)}),Hm(n,e,t,m,s,a,d,u)}else return e}else{let m=new at(null);return r.foreach((y,E)=>{const w=vt(t,y);f.isCompleteForPath(w)&&(m=m.set(y,f.getNode().getChild(w)))}),Hm(n,e,t,m,s,a,d,u)}}function UO(n,e,t,r,s){const a=e.serverCache,u=PS(e,a.getNode(),a.isFullyInitialized()||Me(t),a.isFiltered());return MS(n,u,t,r,OS,s)}function jO(n,e,t,r,s,a){let u;if(Ed(r,t)!=null)return e;{const d=new p_(r,e,s),f=e.eventCache.getNode();let m;if(Me(t)||be(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=vd(r,bo(e));else{const E=e.serverCache.getNode();te(E instanceof Se,"serverChildren would be complete if leaf node"),y=d_(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=be(t);let E=f_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,rt(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Se.EMPTY_NODE,rt(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=vd(r,bo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Ed(r,Qe())!=null,Eu(e,m,u,n.filter.filtersNodes())}}/**
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
 */class BO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new a_(r.getIndex()),a=sO(r);this.processor_=bO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Se.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Se.EMPTY_NODE,d.getNode(),null),y=new Fs(f,u.isFullyInitialized(),s.filtersNodes()),E=new Fs(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=tf(E,y),this.eventGenerator_=new dO(this.query_)}get query(){return this.query_}}function zO(n){return n.viewCache_.serverCache.getNode()}function WO(n){return yd(n.viewCache_)}function $O(n,e){const t=bo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Me(e)&&!t.getImmediateChild(be(e)).isEmpty())?t.getChild(e):null}function eI(n){return n.eventRegistrations_.length===0}function qO(n,e){n.eventRegistrations_.push(e)}function tI(n,e,t){const r=[];if(t){te(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function nI(n,e,t,r){e.type===kr.MERGE&&e.source.queryId!==null&&(te(bo(n.viewCache_),"We should always have a full cache before handling merges"),te(yd(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=MO(n.processor_,s,e,t,r);return OO(n.processor_,a.viewCache),te(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,LS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function HO(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Et,(a,u)=>{r.push(Xa(a,u))}),t.isFullyInitialized()&&r.push(RS(t.getNode())),LS(n,r,t.getNode(),e)}function LS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return fO(n.eventGenerator_,e,t,s)}/**
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
 */let Id;class VS{constructor(){this.views=new Map}}function GO(n){te(!Id,"__referenceConstructor has already been defined"),Id=n}function KO(){return te(Id,"Reference.ts has not been loaded"),Id}function QO(n){return n.views.size===0}function m_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return te(a!=null,"SyncTree gave us an op for an invalid query."),nI(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(nI(u,e,t,r));return a}}function FS(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=vd(t,s?r:null),f=!1;d?f=!0:r instanceof Se?(d=d_(t,r),f=!1):(d=Se.EMPTY_NODE,f=!1);const m=tf(new Fs(d,f,!1),new Fs(r,s,!1));return new BO(e,m)}return u}function YO(n,e,t,r,s,a){const u=FS(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),qO(u,t),HO(u,t)}function XO(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=Us(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(tI(m,t,r)),eI(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(tI(f,t,r)),eI(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!Us(n)&&a.push(new(KO())(e._repo,e._path)),{removed:a,events:u}}function US(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ps(n,e){let t=null;for(const r of n.views.values())t=t||$O(r,e);return t}function jS(n,e){if(e._queryParams.loadsAllData())return rf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function BS(n,e){return jS(n,e)!=null}function Us(n){return rf(n)!=null}function rf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Td;function JO(n){te(!Td,"__referenceConstructor has already been defined"),Td=n}function ZO(){return te(Td,"Reference.ts has not been loaded"),Td}let e2=1;class rI{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=kO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zS(n,e,t,r,s){return _O(n.pendingWriteTree_,e,t,r,s),s?fl(n,new Do(u_(),e,t)):[]}function t2(n,e,t,r){yO(n.pendingWriteTree_,e,t,r);const s=at.fromObject(t);return fl(n,new Ja(u_(),e,s))}function vs(n,e,t=!1){const r=vO(n.pendingWriteTree_,e);if(EO(n.pendingWriteTree_,e)){let a=new at(null);return r.snap!=null?a=a.set(Qe(),!0):Xt(r.children,u=>{a=a.set(new tt(u),!0)}),fl(n,new _d(r.path,a,t))}else return[]}function sc(n,e,t){return fl(n,new Do(c_(),e,t))}function n2(n,e,t){const r=at.fromObject(t);return fl(n,new Ja(c_(),e,r))}function r2(n,e){return fl(n,new Uu(c_(),e))}function i2(n,e,t){const r=__(n,t);if(r){const s=y_(r),a=s.path,u=s.queryId,d=In(a,e),f=new Uu(h_(u),d);return v_(n,a,f)}else return[]}function Sd(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||BS(u,e))){const f=XO(u,e,t,r);QO(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(w,k)=>Us(k));if(y&&!E){const w=n.syncPointTree_.subtree(a);if(!w.isEmpty()){const k=a2(w);for(let V=0;V<k.length;++V){const B=k[V],z=B.query,Z=HS(n,B);n.listenProvider_.startListening(Iu(z),ju(n,z),Z.hashFn,Z.onComplete)}}}!E&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Iu(e),null):m.forEach(w=>{const k=n.queryToTagMap.get(sf(w));n.listenProvider_.stopListening(Iu(w),k)}))}l2(n,m)}return d}function WS(n,e,t,r){const s=__(n,r);if(s!=null){const a=y_(s),u=a.path,d=a.queryId,f=In(u,e),m=new Do(h_(d),f,t);return v_(n,u,m)}else return[]}function s2(n,e,t,r){const s=__(n,r);if(s){const a=y_(s),u=a.path,d=a.queryId,f=In(u,e),m=at.fromObject(t),y=new Ja(h_(d),f,m);return v_(n,u,y)}else return[]}function Gm(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(w,k)=>{const V=In(w,s);a=a||Ps(k,V),u=u||Us(k)});let d=n.syncPointTree_.get(s);d?(u=u||Us(d),a=a||Ps(d,Qe())):(d=new VS,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Se.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((k,V)=>{const B=Ps(V,Qe());B&&(a=a.updateImmediateChild(k,B))}));const m=BS(d,e);if(!m&&!e._queryParams.loadsAllData()){const w=sf(e);te(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const k=u2();n.queryToTagMap.set(w,k),n.tagToQueryMap.set(k,w)}const y=nf(n.pendingWriteTree_,s);let E=YO(d,e,t,y,a,f);if(!m&&!u&&!r){const w=jS(d,e);E=E.concat(c2(n,e,w))}return E}function g_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=In(u,e),m=Ps(d,f);if(m)return m});return xS(s,e,a,t,!0)}function o2(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(m,y)=>{const E=In(m,t);r=r||Ps(y,E)});let s=n.syncPointTree_.get(t);s?r=r||Ps(s,Qe()):(s=new VS,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=r!=null,u=a?new Fs(r,!0,!1):null,d=nf(n.pendingWriteTree_,e._path),f=FS(s,e,d,a?u.getNode():Se.EMPTY_NODE,a);return WO(f)}function fl(n,e){return $S(e,n.syncPointTree_,null,nf(n.pendingWriteTree_,Qe()))}function $S(n,e,t,r){if(Me(n.path))return qS(n,e,t,r);{const s=e.get(Qe());t==null&&s!=null&&(t=Ps(s,Qe()));let a=[];const u=be(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=DS(r,u);a=a.concat($S(d,f,m,y))}return s&&(a=a.concat(m_(s,n,r,t))),a}}function qS(n,e,t,r){const s=e.get(Qe());t==null&&s!=null&&(t=Ps(s,Qe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=DS(r,u),y=n.operationForChild(u);y&&(a=a.concat(qS(y,d,f,m)))}),s&&(a=a.concat(m_(s,n,r,t))),a}function HS(n,e){const t=e.query,r=ju(n,t);return{hashFn:()=>(zO(e)||Se.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?i2(n,t._path,r):r2(n,t._path);{const a=rb(s,t);return Sd(n,t,null,a)}}}}function ju(n,e){const t=sf(e);return n.queryToTagMap.get(t)}function sf(n){return n._path.toString()+"$"+n._queryIdentifier}function __(n,e){return n.tagToQueryMap.get(e)}function y_(n){const e=n.indexOf("$");return te(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new tt(n.substr(0,e))}}function v_(n,e,t){const r=n.syncPointTree_.get(e);te(r,"Missing sync point for query tag that we're tracking");const s=nf(n.pendingWriteTree_,e);return m_(r,t,s,null)}function a2(n){return n.fold((e,t,r)=>{if(t&&Us(t))return[rf(t)];{let s=[];return t&&(s=US(t)),Xt(r,(a,u)=>{s=s.concat(u)}),s}})}function Iu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ZO())(n._repo,n._path):n}function l2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=sf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function u2(){return e2++}function c2(n,e,t){const r=e._path,s=ju(n,e),a=HS(n,t),u=n.listenProvider_.startListening(Iu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)te(!Us(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,E)=>{if(!Me(m)&&y&&Us(y))return[rf(y).query];{let w=[];return y&&(w=w.concat(US(y).map(k=>k.query))),Xt(E,(k,V)=>{w=w.concat(V)}),w}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Iu(y),ju(n,y))}}return u}/**
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
 */class E_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new E_(t)}node(){return this.node_}}class w_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new w_(this.syncTree_,t)}node(){return g_(this.syncTree_,this.path_)}}const h2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},iI=function(n,e,t){if(!n||typeof n!="object")return n;if(te(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return d2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return f2(n[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},d2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:te(!1,"Unexpected server value: "+n)}},f2=function(n,e,t){n.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&te(!1,"Unexpected increment value: "+r);const s=e.node();if(te(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},GS=function(n,e,t,r){return I_(e,new w_(t,n),r)},KS=function(n,e,t){return I_(n,new E_(e),t)};function I_(n,e,t){const r=n.getPriority().val(),s=iI(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=iI(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Gt(d,Tt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Gt(s))),u.forEachChild(Et,(d,f)=>{const m=I_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
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
 */class T_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function S_(n,e){let t=e instanceof tt?e:new tt(e),r=n,s=be(t);for(;s!==null;){const a=ja(r.node.children,s)||{children:{},childCount:0};r=new T_(s,r,a),t=rt(t),s=be(t)}return r}function pl(n){return n.node.value}function QS(n,e){n.node.value=e,Km(n)}function YS(n){return n.node.childCount>0}function p2(n){return pl(n)===void 0&&!YS(n)}function of(n,e){Xt(n.node.children,(t,r)=>{e(new T_(t,n,r))})}function XS(n,e,t,r){t&&e(n),of(n,s=>{XS(s,e,!0)})}function m2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oc(n){return new tt(n.parent===null?n.name:oc(n.parent)+"/"+n.name)}function Km(n){n.parent!==null&&g2(n.parent,n.name,n)}function g2(n,e,t){const r=p2(t),s=ii(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Km(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Km(n))}/**
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
 */const _2=/[\[\].#$\/\u0000-\u001F\u007F]/,y2=/[\[\].#$\u0000-\u001F\u007F]/,om=10*1024*1024,C_=function(n){return typeof n=="string"&&n.length!==0&&!_2.test(n)},JS=function(n){return typeof n=="string"&&n.length!==0&&!y2.test(n)},v2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),JS(n)},ZS=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Zd(n)||n&&typeof n=="object"&&ii(n,".sv")},Qm=function(n,e,t,r){af(Ba(n,"value"),e,t)},af=function(n,e,t){const r=t instanceof tt?new Vb(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Eo(r));if(typeof e=="function")throw new Error(n+"contains a function "+Eo(r)+" with contents = "+e.toString());if(Zd(e))throw new Error(n+"contains "+e.toString()+" "+Eo(r));if(typeof e=="string"&&e.length>om/3&&Ad(e)>om)throw new Error(n+"contains a string greater than "+om+" utf8 bytes "+Eo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Xt(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!C_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Eo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fb(r,u),af(n,d,r),Ub(r)}),s&&a)throw new Error(n+' contains ".value" child '+Eo(r)+" in addition to actual children.")}},E2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Mu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!C_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Lb);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&lr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},eC=function(n,e,t,r){const s=Ba(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Xt(e,(u,d)=>{const f=new tt(u);if(af(s,d,vt(t,f)),r_(f)===".priority"&&!ZS(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),E2(s,a)},w2=function(n,e,t){if(Zd(e))throw new Error(Ba(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ZS(e))throw new Error(Ba(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},tC=function(n,e,t,r){if(!JS(t))throw new Error(Ba(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},I2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tC(n,e,t)},cu=function(n,e){if(be(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},T2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!C_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!v2(t))throw new Error(Ba(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class S2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lf(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!i_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function nC(n,e,t){lf(n,t),rC(n,r=>i_(r,e))}function ur(n,e,t){lf(n,t),rC(n,r=>lr(r,e)||lr(e,r))}function rC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(C2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function C2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();yu&&Yt("event: "+t.toString()),hl(r)}}}/**
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
 */const A2="repo_interrupt",R2=25;class P2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new S2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gd(),this.transactionQueueTree_=new T_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function k2(n,e,t){if(n.stats_=t_(n.repoInfo_),n.forceRestClient_||ab())n.server_=new md(n.repoInfo_,(r,s,a,u)=>{sI(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>oI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ki(n.repoInfo_,e,(r,s,a,u)=>{sI(n,r,s,a,u)},r=>{oI(n,r)},r=>{x2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=db(n.repoInfo_,()=>new hO(n.stats_,n.server_)),n.infoData_=new oO,n.infoSyncTree_=new rI({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=sc(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),A_(n,"connected",!1),n.serverSyncTree_=new rI({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);ur(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function N2(n){const t=n.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function uf(n){return h2({timestamp:N2(n)})}function sI(n,e,t,r,s){n.dataUpdateCount++;const a=new tt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Hh(t,m=>Tt(m));u=s2(n.serverSyncTree_,a,f,s)}else{const f=Tt(t);u=WS(n.serverSyncTree_,a,f,s)}else if(r){const f=Hh(t,m=>Tt(m));u=n2(n.serverSyncTree_,a,f)}else{const f=Tt(t);u=sc(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=el(n,a)),ur(n.eventQueue_,d,u)}function oI(n,e){A_(n,"connected",e),e===!1&&M2(n)}function x2(n,e){Xt(e,(t,r)=>{A_(n,t,r)})}function A_(n,e,t){const r=new tt("/.info/"+e),s=Tt(t);n.infoData_.updateSnapshot(r,s);const a=sc(n.infoSyncTree_,r,s);ur(n.eventQueue_,r,a)}function R_(n){return n.nextWriteId_++}function D2(n,e,t){const r=o2(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const a=Tt(s).withIndex(e._queryParams.getIndex());Gm(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=sc(n.serverSyncTree_,e._path,a);else{const d=ju(n.serverSyncTree_,e);u=WS(n.serverSyncTree_,e._path,a,d)}return ur(n.eventQueue_,e._path,u),Sd(n.serverSyncTree_,e,t,null,!0),a},s=>(ac(n,"get for query "+Ut(e)+" failed: "+s),Promise.reject(new Error(s))))}function b2(n,e,t,r,s){ac(n,"set",{path:e.toString(),value:t,priority:r});const a=uf(n),u=Tt(t,r),d=g_(n.serverSyncTree_,e),f=KS(u,d,a),m=R_(n),y=zS(n.serverSyncTree_,e,f,m,!0);lf(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(w,k)=>{const V=w==="ok";V||Sn("set at "+e+" failed: "+w);const B=vs(n.serverSyncTree_,m,!V);ur(n.eventQueue_,e,B),js(n,s,w,k)});const E=k_(n,e);el(n,E),ur(n.eventQueue_,E,[])}function O2(n,e,t,r){ac(n,"update",{path:e.toString(),value:t});let s=!0;const a=uf(n),u={};if(Xt(t,(d,f)=>{s=!1,u[d]=GS(vt(e,d),Tt(f),n.serverSyncTree_,a)}),s)Yt("update() called with empty data.  Don't do anything."),js(n,r,"ok",void 0);else{const d=R_(n),f=t2(n.serverSyncTree_,e,u,d);lf(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const E=m==="ok";E||Sn("update at "+e+" failed: "+m);const w=vs(n.serverSyncTree_,d,!E),k=w.length>0?el(n,e):e;ur(n.eventQueue_,k,w),js(n,r,m,y)}),Xt(t,m=>{const y=k_(n,vt(e,m));el(n,y)}),ur(n.eventQueue_,e,[])}}function M2(n){ac(n,"onDisconnectEvents");const e=uf(n),t=gd();Bm(n.onDisconnect_,Qe(),(s,a)=>{const u=GS(s,a,n.serverSyncTree_,e);dl(t,s,u)});let r=[];Bm(t,Qe(),(s,a)=>{r=r.concat(sc(n.serverSyncTree_,s,a));const u=k_(n,s);el(n,u)}),n.onDisconnect_=gd(),ur(n.eventQueue_,Qe(),r)}function L2(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&jm(n.onDisconnect_,e),js(n,t,r,s)})}function aI(n,e,t,r){const s=Tt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&dl(n.onDisconnect_,e,s),js(n,r,a,u)})}function V2(n,e,t,r,s){const a=Tt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&dl(n.onDisconnect_,e,a),js(n,s,u,d)})}function F2(n,e,t,r){if(qh(t)){Yt("onDisconnect().update() called with empty data.  Don't do anything."),js(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Xt(t,(u,d)=>{const f=Tt(d);dl(n.onDisconnect_,vt(e,u),f)}),js(n,r,s,a)})}function U2(n,e,t){let r;be(e._path)===".info"?r=Gm(n.infoSyncTree_,e,t):r=Gm(n.serverSyncTree_,e,t),nC(n.eventQueue_,e._path,r)}function lI(n,e,t){let r;be(e._path)===".info"?r=Sd(n.infoSyncTree_,e,t):r=Sd(n.serverSyncTree_,e,t),nC(n.eventQueue_,e._path,r)}function j2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(A2)}function ac(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Yt(t,...e)}function js(n,e,t,r){e&&hl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function iC(n,e,t){return g_(n.serverSyncTree_,e,t)||Se.EMPTY_NODE}function P_(n,e=n.transactionQueueTree_){if(e||cf(n,e),pl(e)){const t=oC(n,e);te(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&B2(n,oc(e),t)}else YS(e)&&of(e,t=>{P_(n,t)})}function B2(n,e,t){const r=t.map(m=>m.currentWriteId),s=iC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];te(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=In(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{ac(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(vs(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&E.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();cf(n,S_(n.transactionQueueTree_,e)),P_(n,n.transactionQueueTree_),ur(n.eventQueue_,e,y);for(let w=0;w<E.length;w++)hl(E[w])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Sn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}el(n,e)}},u)}function el(n,e){const t=sC(n,e),r=oc(t),s=oC(n,t);return z2(n,s,r),r}function z2(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=In(t,f.path);let y=!1,E;if(te(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(vs(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=R2)y=!0,E="maxretry",s=s.concat(vs(n.serverSyncTree_,f.currentWriteId,!0));else{const w=iC(n,f.path,u);f.currentInputSnapshot=w;const k=e[d].update(w.val());if(k!==void 0){af("transaction failed: Data returned ",k,f.path);let V=Tt(k);typeof k=="object"&&k!=null&&ii(k,".priority")||(V=V.updatePriority(w.getPriority()));const z=f.currentWriteId,Z=uf(n),Q=KS(V,w,Z);f.currentOutputSnapshotRaw=V,f.currentOutputSnapshotResolved=Q,f.currentWriteId=R_(n),u.splice(u.indexOf(z),1),s=s.concat(zS(n.serverSyncTree_,f.path,Q,f.currentWriteId,f.applyLocally)),s=s.concat(vs(n.serverSyncTree_,z,!0))}else y=!0,E="nodata",s=s.concat(vs(n.serverSyncTree_,f.currentWriteId,!0))}ur(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}cf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)hl(r[d]);P_(n,n.transactionQueueTree_)}function sC(n,e){let t,r=n.transactionQueueTree_;for(t=be(e);t!==null&&pl(r)===void 0;)r=S_(r,t),e=rt(e),t=be(e);return r}function oC(n,e){const t=[];return aC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function aC(n,e,t){const r=pl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);of(e,s=>{aC(n,s,t)})}function cf(n,e){const t=pl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,QS(e,t.length>0?t:void 0)}of(e,r=>{cf(n,r)})}function k_(n,e){const t=oc(sC(n,e)),r=S_(n.transactionQueueTree_,e);return m2(r,s=>{am(n,s)}),am(n,r),XS(r,s=>{am(n,s)}),t}function am(n,e){const t=pl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(te(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(te(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(vs(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?QS(e,void 0):t.length=a+1,ur(n.eventQueue_,oc(e),s);for(let u=0;u<r.length;u++)hl(r[u])}}/**
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
 */function W2(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const uI=function(n,e){const t=q2(n),r=t.namespace;t.domain==="firebase.com"&&Li(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Li("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||JD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new hS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new tt(t.pathString)}},q2=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=W2(n.substring(y,E)));const w=$2(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const V=e.indexOf(".");r=e.substring(0,V).toLowerCase(),t=e.substring(V+1),a=r}"ns"in w&&(a=w.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
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
 */class H2{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class G2{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class lC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return te(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class K2{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Qr;return L2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){cu("OnDisconnect.remove",this._path);const e=new Qr;return aI(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){cu("OnDisconnect.set",this._path),Qm("OnDisconnect.set",e,this._path);const t=new Qr;return aI(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){cu("OnDisconnect.setWithPriority",this._path),Qm("OnDisconnect.setWithPriority",e,this._path),w2("OnDisconnect.setWithPriority",t);const r=new Qr;return V2(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){cu("OnDisconnect.update",this._path),eC("OnDisconnect.update",e,this._path);const t=new Qr;return F2(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class N_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Me(this._path)?null:r_(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=Gw(this._queryParams),t=Zg(e);return t==="{}"?"default":t}get _queryObject(){return Gw(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof N_))return!1;const t=this._repo===e._repo,r=i_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mb(this._path)}}class Ui extends N_{constructor(e,t){super(e,t,new l_,!1)}get parent(){const e=ES(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bu{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new tt(e),r=Ym(this.ref,e);return new Bu(this._node.getChild(t),r,Et)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Bu(s,Ym(this.ref,r),Et)))}hasChild(e){const t=new tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function XM(n,e){return n=et(n),n._checkNotDeleted("ref"),e!==void 0?Ym(n._root,e):n._root}function Ym(n,e){return n=et(n),be(n._path)===null?I2("child","path",e):tC("child","path",e),new Ui(n._repo,vt(n._path,e))}function JM(n){return n=et(n),new K2(n._repo,n._path)}function ZM(n,e){n=et(n),cu("set",n._path),Qm("set",e,n._path);const t=new Qr;return b2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function eL(n,e){eC("update",e,n._path);const t=new Qr;return O2(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function tL(n){n=et(n);const e=new lC(()=>{}),t=new hf(e);return D2(n._repo,n,t).then(r=>new Bu(r,new Ui(n._repo,n._path),n._queryParams.getIndex()))}class hf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new H2("value",this,new Bu(e.snapshotNode,new Ui(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new G2(this,e,t):null}matches(e){return e instanceof hf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Q2(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,E)=>{lI(n._repo,n,d),f(y,E)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new lC(t,a||void 0),d=new hf(u);return U2(n._repo,n,d),()=>lI(n._repo,n,d)}function nL(n,e,t,r){return Q2(n,"value",e,t,r)}GO(Ui);JO(Ui);/**
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
 */const Y2="FIREBASE_DATABASE_EMULATOR_HOST",Xm={};let X2=!1;function J2(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Bs(a);n.repoInfo_=new hS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function Z2(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Li("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=uI(a,s),d=u.repoInfo,f;typeof process<"u"&&kw&&(f=kw[Y2]),f?(a=`http://${f}?ns=${d.namespace}`,u=uI(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new ub(n.name,n.options,e);T2("Invalid Firebase Database URL",u),Me(u.path)||Li("Database URL must point to the root of a Firebase Database (not including a child path).");const y=tM(d,n,m,new lb(n,t));return new nM(y,n)}function eM(n,e){const t=Xm[e];(!t||t[n.key]!==n)&&Li(`Database ${e}(${n.repoInfo_}) has already been deleted.`),j2(n),delete t[n.key]}function tM(n,e,t,r){let s=Xm[e.name];s||(s={},Xm[e.name]=s);let a=s[n.toURLString()];return a&&Li("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new P2(n,X2,t,r),s[n.toURLString()]=a,a}class nM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(k2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,Qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Li("Cannot call "+e+" on a deleted database.")}}function rM(n=lg(),e){const t=Pd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=II("database");r&&iM(t,...r)}return t}function iM(n,e,t,r={}){n=et(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ni(r,a.repoInfo_.emulatorOptions))return;Li("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Li('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new zh(zh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:CI(r.mockUserToken,n.app.options.projectId);u=new zh(d)}Bs(e)&&(ig(e),sg("Database",!0)),J2(a,s,r,u)}/**
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
 */function sM(n){HD(Oo),Co(new ks("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return Z2(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Yr(Nw,xw,n),Yr(Nw,xw,"esm2017")}/**
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
 */const oM={".sv":"timestamp"};function rL(){return oM}ki.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ki.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};sM();const x_={apiKey:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",authDomain:"discordia-573e7.firebaseapp.com",projectId:"discordia-573e7",appId:"1:757817424564:web:39457c92d2c75e1374f5e1",databaseURL:"https://discordia-573e7-default-rtdb.firebaseio.com",messagingSenderId:"757817424564",measurementId:void 0},uC=["apiKey","authDomain","projectId","appId"].every(n=>!!x_[n]),tl=uC?NI(x_):null,bn=tl?bk(tl):null,cI=tl?ND(tl):null,iL=tl&&x_.databaseURL?rM(tl):null,aM=Object.freeze([{id:"gothic3d",name:"Gótico 3D",color:"#ffae22"},{id:"gold",name:"Dourado Premium",color:"#f5d375"},{id:"bubble",name:"Bubble Magic",color:"#c69af8"},{id:"neon",name:"Neon Cyber",color:"#53deff"},{id:"tech",name:"Futurista Tech",color:"#52e6d6"},{id:"glitch",name:"Glitch Digital",color:"#fd73df"},{id:"ice",name:"Cristal de Gelo",color:"#a8e8ff"},{id:"fire",name:"Fogo Infernal",color:"#ff7744"},{id:"galaxy",name:"Galáxia Cósmica",color:"#bd88ff"},{id:"pixel",name:"Retrô Pixel",color:"#80e783"},{id:"chrome",name:"Chrome Prateado",color:"#e3eaf9"},{id:"royal",name:"Elegante Royal",color:"#f3db98"}]);new Map(aM.map(n=>[n.id,n]));const Ua=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(n),cC=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,128}$/.test(n);function lM(n=[],e=""){return[...new Set(n.filter(t=>(t==null?void 0:t.toUid)===e&&(t==null?void 0:t.status)==="accepted"&&Ua(t==null?void 0:t.serverId)).map(t=>t.serverId))].slice(0,100)}function Jm(n,e){return!!n&&Array.isArray(n.memberUids)&&n.memberUids.includes(e)&&Array.isArray(n.bannedUids??[])&&!(n.bannedUids??[]).includes(e)}function hC(n,e=typeof localStorage>"u"?null:localStorage){if(!cC(n)||!e)return[];try{const t=JSON.parse(e.getItem("discordia_known_server_ids_rc103_"+n)||"[]");return Array.isArray(t)?[...new Set(t.filter(Ua))].slice(0,100):[]}catch{return[]}}function Zm(n,e,t=typeof localStorage>"u"?null:localStorage){if(!cC(n)||!Ua(e)||!t)return!1;const r=hC(n,t);if(r.includes(e))return!1;try{return t.setItem("discordia_known_server_ids_rc103_"+n,JSON.stringify([...r,e].slice(-100))),typeof window<"u"&&t===window.localStorage&&window.dispatchEvent(new CustomEvent("discordia:server-discovery-updated",{detail:{uid:n,id:e}})),!0}catch{return!1}}async function uM({invite:n,uid:e,loadInvite:t,requestMembership:r,readJoinedServer:s}={}){if(!n||n.toUid!==e||n.status!=="accepted"||!n.serverId||n.id!==n.serverId+"_"+e)throw new Error("Convite inválido. Solicite um novo convite ao responsável.");const a=await t();if(!a||a.status!=="accepted"||a.toUid!==e||a.serverId!==n.serverId)throw new Error("Este convite não está mais válido. Peça um novo ao responsável.");let u=null;try{await r()}catch(m){u=m}let d=null,f=null;try{d=await s()}catch(m){f=m}if((d==null?void 0:d.id)===n.serverId&&Array.isArray(d.memberUids)&&d.memberUids.includes(e)&&!(d.bannedUids||[]).includes(e)&&!Object.hasOwn(d,"deletingAt")&&!Object.hasOwn(d,"deletionOwnerUid"))return d;throw u||f||new Error("A entrada ainda não foi confirmada pelo servidor. Tente novamente.")}const cM=n=>`DISC-${n}`,hM=n=>String(n||"").trim().replace(/^@/,"").toLowerCase(),hI=n=>/^[a-z][a-z0-9_]{2,15}$/.test(n),dM=n=>String(n||"").trim().replace(/^DISC-/i,""),Bt=()=>{if(!cI)throw new Error("Configure o Firebase antes de continuar.");return cI},D_=(n,e)=>[n,e].sort().join("_"),eg=(n,e)=>`${n}_${e}`;async function fM(n,e){const t=Bt(),r=sn(t,"publicProfiles",n.uid),s=await Nr(r),a={uid:n.uid,peerId:cM(n.uid),displayName:String(e).trim().slice(0,50)||"Amigo"};s.exists()?s.data().displayName!==a.displayName&&await Qa(r,{displayName:a.displayName}):await Jd(r,{...a,presence:"offline",lastSeenAt:Gn(),createdAt:Gn()})}async function pM(n,e){const t=hM(n);let r=dM(n);if(hI(t)){const a=await Nr(sn(Bt(),"handles",t));if(!a.exists())throw new Error("Nenhuma conta encontrada com esse @identificador.");r=a.data().uid}else if(!/^[A-Za-z0-9]{20,128}$/.test(r))throw new Error("Informe @identificador ou o ID DISC-... completo.");if(r===e)throw new Error("Você não pode se adicionar.");const s=await Nr(sn(Bt(),"publicProfiles",r));if(!s.exists()||hI(t)&&s.data().handle!==t)throw new Error("Nenhuma conta encontrada com esse ID.");return s.data()}async function mM(n,e){const t=await pM(e,n);if((await Nr(sn(Bt(),"users",n,"blocks",t.uid))).exists())throw new Error("Desbloqueie essa pessoa antes de enviar uma solicitação.");const r=sn(Bt(),"friendRequests",eg(n,t.uid)),s=await Nr(sn(Bt(),"friendRequests",eg(t.uid,n)));if(s.exists())throw new Error(s.data().status==="pending"?"Você já recebeu uma solicitação dessa pessoa. Aceite-a na lista.":"Já existe uma relação com esta pessoa.");if((await Nr(r)).exists())throw new Error("Essa solicitação já foi enviada.");return await Jd(r,{fromUid:n,toUid:t.uid,status:"pending",createdAt:Gn(),updatedAt:Gn()}),t}async function gM(n,e,t){if(n.toUid!==e||n.status!=="pending")throw new Error("Solicitação inválida.");await Qa(sn(Bt(),"friendRequests",eg(n.fromUid,n.toUid)),{status:t?"accepted":"rejected",updatedAt:Gn()})}function _M(n,e,t,r=()=>{}){const s=new Map,a=new Map,u=()=>e([...s.values(),...a.values()]),d=(y,E,w)=>{y.clear(),E.docs.forEach(k=>y.set(k.id,{id:k.id,...k.data()})),r(w),u()},f=Pi(ko(Or(Bt(),"friendRequests"),hd("toUid","==",n),No(100)),y=>d(s,y,"incoming"),y=>t(y,"incoming")),m=Pi(ko(Or(Bt(),"friendRequests"),hd("fromUid","==",n),No(100)),y=>d(a,y,"outgoing"),y=>t(y,"outgoing"));return()=>{f(),m()}}function yM(n,e,t){return Pi(sn(Bt(),"publicProfiles",n),r=>e(r.exists()?r.data({serverTimestamps:"estimate"}):null),t)}async function vM(n,e){const t=[n,e].sort(),r=sn(Bt(),"dmRooms",D_(n,e));return(await Nr(r)).exists()||await Jd(r,{members:t,createdAt:Gn()}),r.id}const dC=n=>{var r,s;const e=n.data(),t=(s=(r=e.createdAt)==null?void 0:r.toDate)==null?void 0:s.call(r);return{id:n.id,...e,sender:e.senderName||"Amigo",avatar:"💬",time:(t==null?void 0:t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}))||"Agora",dateLabel:(t==null?void 0:t.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}))||"Hoje"}},fC=["💜","🔥","😂","👍","😮","🎮","✨","❤️"],pC=(n,e)=>{var s;const t=[...new Set([...String(n).matchAll(/:([a-z0-9_]{1,22}):/g)].map(a=>a[1]))].slice(0,4),r={};for(const a of t){const u=((s=e==null?void 0:e.find(d=>d.name===a))==null?void 0:s.image)||"";/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(u)&&u.length<3e4&&(r[a]=u)}return r};function b_(n,e,t,r,s){const a=Bt();return n==="dm"?Or(a,"dmRooms",D_(e,t),"messages"):Or(a,"servers",r,"channels",s,"messages")}async function EM(n,e,t,r,s,a,u){const d=String(u||"").trim().slice(0,2e3);if(!d)throw new Error("A mensagem não pode ficar vazia.");await Qa(sn(b_(e,n,t,r,s),a),{text:d,editedAt:Gn()})}async function wM(n,e,t,r,s,a,u){var m;if(!fC.includes(u))throw new Error("Reação inválida.");const d=sn(b_(e,n,t,r,s),a.id),f=((m=a.reactions)==null?void 0:m[n])===u;await Qa(d,{[`reactions.${n}`]:f?$D():u})}async function IM(n,e,t,r,s,a){await zD(sn(b_(e,n,t,r,s),a))}function TM(n,e,t,r){const s=D_(n,e);return Pi(ko(Or(Bt(),"dmRooms",s,"messages"),H0("createdAt","desc"),No(100)),a=>t(a.docs.map(dC).reverse()),r)}async function SM(n,e,t,r,s=[]){const a=await vM(n,e);await Q0(Or(Bt(),"dmRooms",a,"messages"),{senderUid:n,senderName:String(t).slice(0,50),text:String(r).trim().slice(0,2e3),customEmojiData:pC(r,s),reactions:{},createdAt:Gn()})}function CM(n,e,t){const r=Bt(),s=new Set,a=new Set,u=new Set(hC(n)),d=new Map,f=new Map,m=[],y=new Set,E=async Z=>{if(y.has(Z))return;y.add(Z);const Q=sn(r,"serverOwnerIndex",n,"servers",Z);try{(await Nr(Q)).exists()||await Jd(Q,{ownerUid:n,serverId:Z})}catch(ie){!w&&(ie==null?void 0:ie.code)!=="permission-denied"&&(ie==null?void 0:ie.code)!=="not-found"&&(t==null||t(ie))}};let w=!1;const k=()=>{w||e([...d.values()].sort((Z,Q)=>String(Z.name||"").localeCompare(String(Q.name||""),"pt-BR")))},V=()=>{if(w)return;const Z=new Set([...s,...a,...u].filter(Ua));for(const[Q,ie]of f)Z.has(Q)||(ie(),f.delete(Q),d.delete(Q));for(const Q of Z){if(f.has(Q))continue;const ie=Pi(sn(r,"servers",Q),le=>{if(w)return;const qe=le.exists()?le.data():null;Jm(qe,n)?(d.set(Q,{id:Q,...qe}),Zm(n,Q),qe.ownerUid===n&&!Object.prototype.hasOwnProperty.call(qe,"deletingAt")&&E(Q)):d.delete(Q),k()},le=>{d.delete(Q),k(),(le==null?void 0:le.code)!=="permission-denied"&&(le==null?void 0:le.code)!=="not-found"&&(t==null||t(le))});f.set(Q,ie)}k()},B=ko(Or(r,"serverOwnerIndex",n,"servers"),No(100));m.push(Pi(B,Z=>{s.clear(),Z.docs.forEach(Q=>{var ie,le;Ua(Q.id)&&((ie=Q.data())==null?void 0:ie.serverId)===Q.id&&((le=Q.data())==null?void 0:le.ownerUid)===n&&s.add(Q.id)}),V()},Z=>{(Z==null?void 0:Z.code)!=="permission-denied"&&(t==null||t(Z)),V()})),m.push(Pi(ko(Or(r,"serverInvites"),hd("toUid","==",n),No(100)),Z=>{a.clear(),lM(Z.docs.map(Q=>Q.data()),n).forEach(Q=>a.add(Q)),V()},Z=>{(Z==null?void 0:Z.code)!=="permission-denied"&&(t==null||t(Z)),V()}));const z=Z=>{var Q;((Q=Z==null?void 0:Z.detail)==null?void 0:Q.uid)!==n||!Ua(Z.detail.id)||(u.add(Z.detail.id),V())};return typeof window<"u"&&window.addEventListener("discordia:server-discovery-updated",z),V(),()=>{w=!0,typeof window<"u"&&window.removeEventListener("discordia:server-discovery-updated",z),m.forEach(Z=>Z()),f.forEach(Z=>Z()),f.clear(),d.clear()}}function AM(n,e,t,r){return Pi(ko(Or(Bt(),"servers",n,"channels",e,"messages"),H0("createdAt","desc"),No(100)),s=>t(s.docs.map(dC).reverse()),r)}async function RM(n,e,t,r,s,a=[]){await Q0(Or(Bt(),"servers",e,"channels",t,"messages"),{senderUid:n,senderName:String(r).slice(0,50),text:String(s).trim().slice(0,2e3),customEmojiData:pC(s,a),reactions:{},createdAt:Gn()})}function PM(n,e,t){return Pi(ko(Or(Bt(),"serverInvites"),hd("toUid","==",n),No(100)),r=>e(r.docs.map(s=>({id:s.id,...s.data()}))),t)}async function kM(n,e,t){if(n.toUid!==e||!["pending","accepted"].includes(n.status))throw new Error("Convite inválido.");const r=Bt(),s=sn(r,"serverInvites",n.id),a=sn(r,"servers",n.serverId);if(!t){if(n.status!=="pending")throw new Error("Este convite já foi aceito.");await Qa(s,{status:"rejected",updatedAt:Gn()});return}if(n.status==="accepted")try{const d=await uM({invite:n,uid:e,loadInvite:async()=>{const f=await Nr(s);return f.exists()?f.data():null},requestMembership:()=>Qa(a,{memberUids:Pw(e),[`memberJoinedAt.${e}`]:Gn()}),readJoinedServer:async()=>{const f=await Nr(a),m=f.exists()?f.data():null;return Jm(m,e)?{id:f.id,...m}:null}});return Zm(e,n.serverId),d}catch(d){throw(d==null?void 0:d.code)==="permission-denied"?new Error("A entrada foi negada pelo servidor. O convite pode estar revogado, você pode estar banido ou a comunidade pode estar bloqueada. Peça ao responsável um novo convite."):new Error((d==null?void 0:d.message)||"Não foi possível concluir a entrada. Tente novamente.")}if(n.inviteVersion!==2)throw new Error("Convite antigo sem comprovação de segurança. Peça ao responsável um novo convite.");const u=qD(r);u.update(s,{status:"accepted",updatedAt:Gn()}),u.update(a,{memberUids:Pw(e),[`memberJoinedAt.${e}`]:Gn()});try{await u.commit();const d=await Nr(a),f=d.exists()?d.data():null;if(!Jm(f,e))throw new Error("Convite aceito, mas a participação ainda não foi confirmada. Use Concluir entrada para recuperar.");return Zm(e,n.serverId),{id:d.id,...f}}catch(d){const f=(d==null?void 0:d.code)==="permission-denied"?"A entrada não foi autorizada. O convite pode estar inválido ou sua conta pode não ter permissão; solicite ajuda ao responsável pelo servidor.":(d==null?void 0:d.message)||"Não foi possível confirmar sua entrada no servidor. Tente novamente.";throw new Error(f)}}const NM="/assets/discordia-orbit-DRQ15dZr.png",dI={screen:T.jsxs(T.Fragment,{children:[T.jsx("rect",{x:"3",y:"4",width:"18",height:"13",rx:"2"}),T.jsx("path",{d:"M8 21h8m-4-4v4"})]}),fullscreen:T.jsx(T.Fragment,{children:T.jsx("path",{d:"M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m13-5v4a1 1 0 0 1-1 1h-4"})}),shrink:T.jsx(T.Fragment,{children:T.jsx("path",{d:"M8 3v5H3m5 0L3 3m13 0v5h5m-5 0 5-5M8 21v-5H3m5 0-5 5m13 0v-5h5m-5 0 5 5"})}),link:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"}),T.jsx("path",{d:"M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"})]}),copy:T.jsxs(T.Fragment,{children:[T.jsx("rect",{x:"8",y:"8",width:"13",height:"13",rx:"2"}),T.jsx("path",{d:"M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"})]}),users:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"9",cy:"8",r:"4"}),T.jsx("path",{d:"M2 21v-2a6 6 0 0 1 12 0v2m2-17a4 4 0 0 1 0 8m2 2a6 6 0 0 1 4 6v1"})]}),user:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"12",cy:"8",r:"4"}),T.jsx("path",{d:"M4 21v-2a8 8 0 0 1 16 0v2"})]}),video:T.jsxs(T.Fragment,{children:[T.jsx("rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}),T.jsx("path",{d:"m16 10 6-4v12l-6-4"})]}),chat:T.jsx(T.Fragment,{children:T.jsx("path",{d:"M20 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.6-.3-3.6-.8L3 21l1.8-4.7A8.5 8.5 0 1 1 20 11.5Z"})}),send:T.jsx(T.Fragment,{children:T.jsx("path",{d:"m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"})}),exit:T.jsx(T.Fragment,{children:T.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 4 5 5-5 5m5-5H9"})}),plus:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M12 5v14M5 12h14"}),T.jsx("circle",{cx:"12",cy:"12",r:"10"})]}),arrow:T.jsx(T.Fragment,{children:T.jsx("path",{d:"M5 12h14m-7-7 7 7-7 7"})}),stop:T.jsx(T.Fragment,{children:T.jsx("rect",{x:"5",y:"5",width:"14",height:"14",rx:"3"})}),shield:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M12 22s9-4 9-11V5l-9-3-9 3v6c0 7 9 11 9 11Z"}),T.jsx("path",{d:"m9 12 2 2 4-4"})]})};function To({name:n="screen",size:e=19,className:t="",title:r}){return T.jsxs("svg",{className:"room-icon "+t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[dI[n]||dI.screen,r&&T.jsx("title",{children:r})]})}const xM=Object.freeze(["microphone","camera","screen"]);function mC({secureContext:n=!1,mediaDevices:e}={}){const t=e||{};return{microphone:n===!0&&typeof t.getUserMedia=="function",camera:n===!0&&typeof t.getUserMedia=="function",screen:n===!0&&typeof t.getDisplayMedia=="function"}}function DM(n){const e=String((n==null?void 0:n.name)||(n==null?void 0:n.code)||"");return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"Permissão negada ou seleção cancelada pelo navegador.":e==="NotFoundError"||e==="DevicesNotFoundError"?"Nenhuma fonte compatível encontrada neste dispositivo.":e==="NotReadableError"||e==="TrackStartError"?"A fonte de mídia está ocupada ou indisponível.":e==="OverconstrainedError"?"Os recursos solicitados não são compatíveis com este dispositivo.":"Não foi possível iniciar a captura. Verifique as permissões do navegador."}function lm(n){var e;for(const t of((e=n==null?void 0:n.getTracks)==null?void 0:e.call(n))||[])try{t.stop()}catch{}}function bM({mediaDevices:n,secureContext:e,onChange:t=()=>{}}={}){const r=n;let s=null,a=0,u=!1;const d=w=>{u||t(w)};function f(){var k,V,B;if(!s)return;const w=s;s=null;for(const z of((V=(k=w.stream).getTracks)==null?void 0:V.call(k))||[])try{(B=z.removeEventListener)==null||B.call(z,"ended",w.onEnded)}catch{}lm(w.stream)}function m(){u||(a+=1,f(),d({status:"idle",kind:null}))}async function y(w){var Q,ie;if(u)return null;if(!xM.includes(w))throw new TypeError("Tipo de captura inválido.");const k=++a;if(f(),!mC({secureContext:e,mediaDevices:r})[w])return d({status:"unsupported",kind:w,message:"Captura indisponível. Use HTTPS ou localhost e um navegador compatível."}),null;d({status:"requesting",kind:w});let B;try{w==="screen"?B=await r.getDisplayMedia({video:{frameRate:{ideal:30,max:30}},audio:!1}):w==="camera"?B=await r.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:24,max:30}},audio:!1}):B=await r.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(le){return k===a&&!u&&d({status:"error",kind:w,message:DM(le)}),null}if(u||k!==a)return lm(B),null;const z=((Q=B==null?void 0:B.getTracks)==null?void 0:Q.call(B))||[];if(!z.length)return lm(B),d({status:"error",kind:w,message:"Nenhuma faixa de mídia foi disponibilizada."}),null;const Z=()=>{(s==null?void 0:s.stream)===B&&m()};s={stream:B,kind:w,onEnded:Z};for(const le of z)(ie=le.addEventListener)==null||ie.call(le,"ended",Z);return d({status:"active",kind:w,hasAudio:z.some(le=>le.kind==="audio"),hasVideo:z.some(le=>le.kind==="video")}),B}function E(){u=!0,a+=1,f()}return{start:y,stop:m,dispose:E,getStream:()=>(s==null?void 0:s.stream)||null}}const fI={microphone:{icon:"🎙",name:"Microfone",description:"Verifica a permissão de acesso ao microfone."},camera:{icon:"📷",name:"Câmera",description:"Mostra uma prévia local da câmera."},screen:{icon:"▣",name:"Tela",description:"Abre o seletor de tela ou janela do navegador."}};function OM(){var m;const[n,e]=Ie.useState({status:"idle",kind:null}),t=Ie.useRef(null),r=Ie.useRef(null),s=Ie.useMemo(()=>mC({secureContext:typeof window<"u"&&window.isSecureContext===!0,mediaDevices:typeof navigator<"u"?navigator.mediaDevices:void 0}),[]);Ie.useEffect(()=>{const y=bM({mediaDevices:navigator.mediaDevices,secureContext:window.isSecureContext,onChange:e});return r.current=y,()=>{y.dispose(),r.current=null}},[]),Ie.useEffect(()=>{var w;const y=t.current;if(!y)return;const E=n.status==="active"?(w=r.current)==null?void 0:w.getStream():null;if(y.srcObject=E||null,E){const k=y.play();k&&typeof k.catch=="function"&&k.catch(()=>{})}return()=>{y.pause(),y.srcObject=null}},[n.status,n.kind]);function a(y){var E;(E=r.current)==null||E.start(y)}function u(){var y;(y=r.current)==null||y.stop()}const d=n.kind?(m=fI[n.kind])==null?void 0:m.name:"",f=n.status==="active"||n.status==="requesting";return T.jsxs("section",{className:"media-lab","aria-labelledby":"media-lab-title",children:[T.jsxs("div",{className:"lab-heading",children:[T.jsx("div",{className:"lab-orbit","aria-hidden":"true",children:"◉"}),T.jsxs("div",{children:[T.jsx("span",{className:"lab-eyebrow",children:"LABORATÓRIO DE MÍDIA · PRÉVIA PRIVADA"}),T.jsx("h2",{id:"media-lab-title",children:"Teste seus dispositivos"}),T.jsx("p",{children:"Confira a câmera, o microfone e a captura de tela antes da integração com chamadas reais."})]})]}),T.jsxs("div",{className:"lab-privacy",role:"note",children:[T.jsx("strong",{children:"Teste somente local"}),T.jsx("p",{children:"Os dispositivos só são ativados quando você clicar. Este painel não transmite para outras pessoas, não grava vídeo ou áudio e não envia mídia ao Discórdia."})]}),T.jsx("div",{className:"lab-options",children:Object.entries(fI).map(([y,E])=>T.jsxs("button",{type:"button",className:n.kind===y&&f?"lab-option selected":"lab-option",onClick:()=>a(y),disabled:!s[y],"aria-pressed":n.kind===y&&f,children:[T.jsx("span",{className:"lab-option-icon","aria-hidden":"true",children:E.icon}),T.jsx("strong",{children:E.name}),T.jsx("span",{children:E.description}),T.jsx("small",{children:s[y]?n.kind===y&&n.status==="active"?"Capturando localmente":"Clique para testar":"Não disponível neste navegador"})]},y))}),T.jsxs("div",{className:"lab-viewer",children:[T.jsxs("div",{className:"lab-viewer-head",children:[T.jsx("strong",{children:"Prévia dos dispositivos"}),T.jsx("span",{className:n.status==="active"?"lab-live":"lab-off",children:n.status==="active"?"● Captura local ativa":"● Nenhuma transmissão ativa"})]}),T.jsx("div",{className:"lab-stage","aria-live":"polite",children:n.status==="active"&&n.hasVideo?T.jsx("video",{ref:t,autoPlay:!0,playsInline:!0,muted:!0,"aria-label":"Prévia local de "+d}):T.jsxs("div",{className:"lab-placeholder",children:[T.jsx("span",{"aria-hidden":"true",children:n.status==="active"?"🎙":"▤"}),T.jsx("strong",{children:n.status==="requesting"?"Aguardando sua permissão…":n.status==="active"&&n.kind==="microphone"?"Microfone disponível":"Nenhuma prévia em execução"}),T.jsx("p",{children:n.status==="active"&&n.kind==="microphone"?"O microfone foi autorizado. A reprodução é mantida desligada para evitar microfonia.":"Selecione um dispositivo acima para testar localmente."})]})}),(n.status==="error"||n.status==="unsupported")&&T.jsx("p",{role:"alert",className:"lab-error",children:n.message}),T.jsxs("div",{className:"lab-controls",children:[T.jsx("button",{type:"button",onClick:u,disabled:!f,children:"Parar captura"}),T.jsx("small",{children:f?"Ao trocar de teste ou sair desta tela, todas as faixas são encerradas.":"Use HTTPS ou localhost e libere a permissão apenas se desejar."})]})]}),T.jsx("p",{className:"lab-disclaimer",children:"Chamadas WebRTC, transmissão para salas, áudio do sistema e reconexão entre usuários ainda não estão implementados nesta prévia."})]})}const MM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://web-testers-preview.discordia-ari.pages.dev",VITE_WEB_SFU_RECEIVE_ENABLED:"false",VITE_WEB_SIGNUP_ENABLED:"false"},pI="https://web-testers-preview.discordia-ari.pages.dev",LM=/^[a-f0-9]{48}$/,VM=28;function lc(n){return typeof n=="string"&&LM.test(n)}function sL(n){return String(n||"").replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,VM)}function tg(n){const e=String(n||"").match(/^\/r\/([a-f0-9]{48})\/?$/);return e?e[1]:""}function FM(n,e){const t=String(n||"").trim();if(lc(t))return t;try{const r=new URL(e),s=new URL(t);return!/^https?:$/.test(r.protocol)||s.origin!==r.origin||s.search||s.hash||s.username||s.password?"":tg(s.pathname)}catch{return""}}function UM(n,e){if(!lc(n))throw Error("INVALID_ROOM_ID");return String(e).replace(/\/$/,"")+"/r/"+n}function O_(n=MM){return String((n==null?void 0:n.VITE_QUICK_ROOMS_ENABLED)||"")!=="true"?"":String((n==null?void 0:n.VITE_QUICK_ROOM_API_ORIGIN)||"")===pI?pI:""}const gC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://web-testers-preview.discordia-ari.pages.dev",VITE_WEB_SFU_RECEIVE_ENABLED:"false",VITE_WEB_SIGNUP_ENABLED:"false"};function oL(n,e=gC){const t=O_(e);return!t||!lc(n)?"":t.replace(/^https:/,"wss:")+"/api/rooms/"+n+"/connect"}async function jM({env:n=gC,request:e=fetch,storage:t=globalThis.sessionStorage,origin:r=(s=>(s=globalThis.location)==null?void 0:s.origin)()||""}={}){const a=O_(n);if(!a)throw Error("QUICK_ROOMS_UNAVAILABLE");const u=await e(a+"/api/rooms",{method:"POST",cache:"no-store",redirect:"error"});if(!u.ok)throw Error("QUICK_ROOM_CREATE_FAILED");const d=await u.json();if(!lc(d==null?void 0:d.roomId)||typeof(d==null?void 0:d.hostKey)!="string"||!/^[a-f0-9]{64}$/.test(d.hostKey))throw Error("QUICK_ROOM_INVALID_RESPONSE");return t.setItem("discordia:room-host:"+d.roomId,d.hostKey),{id:d.roomId,url:UM(d.roomId,r)}}function aL(n,e=globalThis.sessionStorage){var r;if(!lc(n))return"";const t=(r=e==null?void 0:e.getItem)==null?void 0:r.call(e,"discordia:room-host:"+n);return typeof t=="string"&&/^[a-f0-9]{64}$/.test(t)?t:""}function BM(n){switch(n==null?void 0:n.message){case"QUICK_ROOMS_UNAVAILABLE":return"As salas rápidas ainda não foram ativadas neste ambiente.";case"QUICK_ROOM_CREATE_FAILED":return"Não foi possível criar a sala agora. Tente novamente.";default:return"Não foi possível conectar à sala. Confira o link ou tente novamente."}}function nn(n){switch(String((n==null?void 0:n.code)||"")){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-email":return"E-mail ou senha inválidos.";case"auth/email-already-in-use":return"Este e-mail já possui uma conta. Use Entrar ou Recupere sua senha.";case"auth/weak-password":return"Senha muito fraca. Escolha outra com pelo menos 8 caracteres.";case"auth/operation-not-allowed":return"Cadastro de novas contas indisponível nesta configuração do Firebase.";case"auth/too-many-requests":return"Muitas tentativas. Tente novamente mais tarde.";case"auth/network-request-failed":case"unavailable":return"Sem conexão. Confira sua internet e tente novamente.";case"permission-denied":return"Você não tem permissão para realizar esta operação.";default:return"Não foi possível concluir a operação. Tente novamente."}}function _C({user:n,section:e,server:t,channel:r,friendUid:s,friendUids:a}){return!(n!=null&&n.uid)||n.emailVerified!==!0?!1:e==="dm"?typeof s=="string"&&s.length>0&&Array.isArray(a)&&a.includes(s)&&s!==n.uid:e==="servers"&&!!(t!=null&&t.id)&&Array.isArray(t.memberUids)&&t.memberUids.includes(n.uid)&&Array.isArray(t.bannedUids??[])&&!(t.bannedUids??[]).includes(n.uid)&&!!(r!=null&&r.id)&&Array.isArray(t.textChannels)&&t.textChannels.some(u=>(u==null?void 0:u.id)===r.id)}function zM(n){if(!_C(n))return"";const{user:e,section:t,server:r,channel:s,friendUid:a}=n;return t==="dm"?`dm:${e.uid}:${a}`:`server:${e.uid}:${r.id}:${s.id}`}function WM(n){var e;try{const t=(e=n==null?void 0:n.toDate)==null?void 0:e.call(n);return t instanceof Date&&!Number.isNaN(t.getTime())?t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}catch{return""}}const $M=Ie.lazy(()=>gI(()=>import("./QuickRoom-C2Rq2Jz4.js"),[])),qM=Ie.lazy(()=>gI(()=>import("./WebVoiceRoom-DeHTi3Oq.js"),[]));function hu({small:n=!1}){return T.jsx("img",{className:n?"brand-symbol small":"brand-symbol",src:NM,alt:"Símbolo do Discórdia",draggable:"false"})}function yC({subtitle:n}){return T.jsxs("div",{className:"brand",children:[T.jsx(hu,{}),T.jsxs("div",{children:[T.jsx("strong",{children:"DISCÓRDIA"}),T.jsx("span",{children:n})]})]})}function mI({onJoinGuest:n,onCreateRoom:e,initialMode:t="login"}){const[r,s]=Ie.useState(t),[a,u]=Ie.useState(""),[d,f]=Ie.useState(""),[m,y]=Ie.useState(""),[E,w]=Ie.useState(""),[k,V]=Ie.useState(""),[B,z]=Ie.useState(!1),[Z,Q]=Ie.useState("");async function ie(N){if(N.preventDefault(),!(!bn||B)){z(!0),Q("");try{await yP(bn,d.trim(),m)}catch(C){Q(nn(C))}finally{z(!1)}}}async function le(N){if(N.preventDefault(),!(!bn||B)){Q("Cadastro Web ainda não foi liberado na prévia. Use uma conta existente.");return}}async function qe(){if(!d.trim()||B||!bn){Q("Informe seu e-mail antes de recuperar a senha.");return}z(!0),Q("");try{await _P(bn,d.trim()),Q("Se esta conta existir, as instruções serão enviadas por e-mail.")}catch(N){Q(nn(N))}finally{z(!1)}}function Ne(N){N.preventDefault();const C=FM(k,window.location.origin);if(!C){Q("Cole um link de sala do próprio Discórdia.");return}n(C)}return T.jsxs("main",{className:"entrance",children:[T.jsx("div",{className:"entrance-ambient","aria-hidden":"true"}),T.jsxs("section",{className:"entry-content",children:[T.jsx(yC,{subtitle:"WEB · ACESSO SIMPLIFICADO"}),T.jsx("h1",{children:"Entre, convide e compartilhe."}),T.jsx("p",{children:"Use sua conta do Discórdia ou entre em uma sala temporária com um apelido. Nenhum convidado precisa instalar aplicativo ou criar conta."}),T.jsxs("div",{className:"entry-modes","aria-label":"Formas de entrar",children:[T.jsxs("div",{className:"entry-mode current",children:[T.jsx("span",{className:"entry-icon",children:T.jsx(To,{name:"user",size:25})}),T.jsxs("div",{children:[T.jsx("strong",{children:"Já tenho Discórdia"}),T.jsx("small",{children:"Mesma conta do Desktop e Android"})]}),T.jsx("span",{className:"mode-tag",children:"Acesso normal"})]}),T.jsxs("div",{className:"entry-mode",children:[T.jsx("span",{className:"entry-icon",children:T.jsx(To,{name:"link",size:25})}),T.jsxs("div",{children:[T.jsx("strong",{children:"Sou convidado"}),T.jsx("small",{children:"Entro por link, vejo a tela e converso"})]}),T.jsx("span",{className:"mode-tag",children:"Sem cadastro"})]}),T.jsxs("div",{className:"entry-mode",children:[T.jsx("span",{className:"entry-icon",children:T.jsx(To,{name:"shield",size:25})}),T.jsxs("div",{children:[T.jsx("strong",{children:"Quero uma conta"}),T.jsx("small",{children:"Cadastro com e-mail e senha"})]}),T.jsx("span",{className:"mode-tag",children:"Acesso completo*"})]})]}),T.jsxs("form",{className:"guest-join-form",onSubmit:Ne,children:[T.jsx("label",{htmlFor:"guest-invite",children:"Recebeu um convite para sala rápida?"}),T.jsx("input",{id:"guest-invite",placeholder:"Cole o link da sala ou o código",value:k,onChange:N=>V(N.target.value),maxLength:400}),T.jsx("button",{type:"submit",children:"Entrar como convidado"})]}),O_()&&T.jsxs("button",{type:"button",className:"primary",disabled:B,onClick:async()=>{if(!B){z(!0),Q("");try{await e()||Q("Não foi possível criar sua sala agora.")}finally{z(!1)}}},children:[T.jsx(To,{name:"plus",size:19})," ",B?"Criando sala…":"Criar sala temporária sem conta"]}),T.jsx("p",{className:"entry-footnote",children:"*Conta completa: servidores, mensagens e amigos permitidos. Salas rápidas e transmissão exigem o serviço Web de homologação ativo."})]}),T.jsxs("section",{className:"login-card","aria-labelledby":"login-title",children:[T.jsx("span",{className:"eyebrow",children:"SUA CONTA DISCÓRDIA"}),T.jsxs("div",{className:"auth-mode-switch",children:[T.jsx("button",{type:"button",className:r==="login"?"active":"",onClick:()=>{s("login"),Q("")},children:"Entrar"}),T.jsx("button",{type:"button",className:r==="register"?"active":"",onClick:()=>{{Q("Cadastro Web temporariamente desativado na prévia. Use uma conta existente.");return}},children:"Criar conta"})]}),T.jsx("h2",{id:"login-title",children:r==="login"?"Entrar na conta":"Cadastrar no Discórdia"}),r==="login"?T.jsxs(T.Fragment,{children:[T.jsx("p",{children:"Use as mesmas credenciais do Discórdia Desktop."}),T.jsxs("form",{onSubmit:ie,className:"login-form",children:[T.jsx("label",{htmlFor:"web-email",children:"E-mail"}),T.jsx("input",{id:"web-email",type:"email",autoComplete:"email",value:d,maxLength:254,required:!0,placeholder:"seuemail@exemplo.com",onChange:N=>f(N.target.value)}),T.jsx("label",{htmlFor:"web-password",children:"Senha"}),T.jsx("input",{id:"web-password",type:"password",autoComplete:"current-password",value:m,required:!0,onChange:N=>y(N.target.value)}),T.jsx("button",{className:"primary",type:"submit",disabled:!bn||B,children:B?"Conectando…":"Entrar no Discórdia"})]}),T.jsx("button",{className:"link-button",type:"button",onClick:qe,disabled:!bn||B,children:"Recuperar senha"})]}):T.jsxs(T.Fragment,{children:[T.jsx("p",{children:"Crie sua conta uma vez e use também no Desktop e no Android."}),T.jsxs("form",{onSubmit:le,className:"register-form",children:[T.jsx("label",{htmlFor:"register-name",children:"Nome"}),T.jsx("input",{id:"register-name",value:a,minLength:2,maxLength:50,autoComplete:"name",required:!0,placeholder:"Seu nome ou apelido",onChange:N=>u(N.target.value)}),T.jsx("label",{htmlFor:"register-email",children:"E-mail"}),T.jsx("input",{id:"register-email",type:"email",autoComplete:"email",value:d,maxLength:254,required:!0,onChange:N=>f(N.target.value)}),T.jsx("label",{htmlFor:"register-password",children:"Senha (mínimo 8 caracteres)"}),T.jsx("input",{id:"register-password",type:"password",autoComplete:"new-password",value:m,minLength:8,required:!0,onChange:N=>y(N.target.value)}),T.jsx("label",{htmlFor:"register-confirm",children:"Confirmar senha"}),T.jsx("input",{id:"register-confirm",type:"password",autoComplete:"new-password",value:E,minLength:8,required:!0,onChange:N=>w(N.target.value)}),T.jsx("button",{className:"primary",type:"submit",disabled:!bn||B,children:B?"Criando…":"Criar conta gratuita"}),T.jsx("small",{children:"Você precisará confirmar o e-mail. A conta não concede acesso automático a servidores privados."})]})]}),Z&&T.jsx("p",{className:"notice",role:"status",children:Z}),!bn&&T.jsx("p",{className:"login-note",children:"Login/cadastro aguardam configuração Firebase; convidados não precisam desta configuração."})]})]})}function HM({user:n,onRefresh:e,setError:t}){const[r,s]=Ie.useState(!1);async function a(){s(!0);try{await n.reload(),e()}catch(d){t(nn(d))}finally{s(!1)}}async function u(){s(!0);try{await vP(n),t("Se permitido, um e-mail de confirmação foi enviado.")}catch(d){t(nn(d))}finally{s(!1)}}return T.jsx("main",{className:"center-screen",children:T.jsxs("div",{className:"setup-card",children:[T.jsx(yC,{subtitle:"VERIFICAÇÃO DE CONTA"}),T.jsx("h1",{children:"Confirme seu e-mail"}),T.jsx("p",{children:"Verifique sua caixa de entrada para acessar mensagens e servidores."}),T.jsxs("div",{className:"setup-actions",children:[T.jsx("button",{className:"primary",disabled:r,onClick:a,children:"Já confirmei"}),T.jsx("button",{disabled:r,onClick:u,children:"Reenviar confirmação"}),T.jsx("button",{onClick:()=>void rT(bn),children:"Sair"})]})]})})}function GM({item:n,user:e,onReact:t,onEdit:r,onDelete:s,editingId:a,editText:u,setEditText:d,onSave:f,onCancel:m,busy:y}){const E=n.senderUid===e.uid;return T.jsxs("article",{className:E?"chat-message mine":"chat-message",children:[T.jsx("span",{className:"message-avatar","aria-hidden":"true",children:String(n.senderName||"M").charAt(0).toUpperCase()}),T.jsxs("div",{className:"message-body",children:[T.jsxs("div",{className:"message-meta",children:[T.jsx("strong",{children:n.senderName||"Membro"}),T.jsx("time",{children:WM(n.createdAt)})]}),T.jsx("p",{children:n.text||"[Mensagem sem texto]"}),T.jsxs("div",{className:"message-controls",children:[fC.slice(0,4).map(w=>{var k;return T.jsxs("button",{className:((k=n.reactions)==null?void 0:k[e.uid])===w?"chosen-reaction":"","aria-label":"Reagir com "+w,title:"Reagir com "+w,onClick:()=>t(n,w),children:[w," ",Object.values(n.reactions||{}).filter(V=>V===w).length||""]},w)}),E&&T.jsxs(T.Fragment,{children:[T.jsx("button",{onClick:()=>r(n),children:"Editar"}),T.jsx("button",{onClick:()=>s(n),disabled:y,children:"Excluir"})]})]}),a===n.id&&T.jsxs("form",{className:"edit-row",onSubmit:w=>f(w,n),children:[T.jsx("input",{"aria-label":"Editar mensagem",maxLength:2e3,value:u,onChange:w=>d(w.target.value)}),T.jsx("button",{className:"primary",disabled:y||!u.trim(),children:"Salvar"}),T.jsx("button",{type:"button",onClick:m,children:"Cancelar"})]})]})]})}function KM(){var Wi;const[n,e]=Ie.useState(void 0),[t,r]=Ie.useState(()=>tg(window.location.pathname)),[s,a]=Ie.useState("login");Ie.useEffect(()=>{const q=()=>r(tg(window.location.pathname));return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[]);function u(q){window.history.pushState({},"","/r/"+q),r(q)}function d(q=!1){window.history.pushState({},"","/"),r(""),a(q?"register":"login")}async function f(){if(se)return!1;ye(!0),me("");try{const q=await jM();return u(q.id),!0}catch(q){return me(BM(q)),!1}finally{ye(!1)}}const[m,y]=Ie.useState(0),[E,w]=Ie.useState([]),[k,V]=Ie.useState([]),[B,z]=Ie.useState([]),[Z,Q]=Ie.useState({}),[ie,le]=Ie.useState(""),[qe,Ne]=Ie.useState(""),[N,C]=Ie.useState(""),[P,b]=Ie.useState(""),[D,L]=Ie.useState("servers"),[R,ft]=Ie.useState({scope:"",items:[]}),[kt,ut]=Ie.useState(""),[He,re]=Ie.useState(""),[ge,ae]=Ie.useState(""),[M,G]=Ie.useState(""),[se,ye]=Ie.useState(!1),[ke,me]=Ie.useState(""),[ze,Ue]=Ie.useState("");Ie.useEffect(()=>{if(!bn){e(null);return}return IP(bn,e,()=>e(null))},[]);const je=!!(n!=null&&n.uid)&&n.emailVerified===!0;Ie.useEffect(()=>{if(!je||!(n!=null&&n.uid))return;const q="discordia:web:profile-pending:"+n.uid;try{if(window.localStorage.getItem(q)!=="1")return}catch{return}let ve=!0;return fM(n,n.displayName||"Membro").then(()=>{if(ve)try{window.localStorage.removeItem(q)}catch{}}).catch(Ye=>{ve&&me(nn(Ye))}),()=>{ve=!1}},[je,n==null?void 0:n.uid,m]),Ie.useEffect(()=>{if(!je){w([]),V([]);return}const q=gt=>me(nn(gt)),ve=CM(n.uid,w,q),Ye=PM(n.uid,V,q);return()=>{ve(),Ye()}},[n==null?void 0:n.uid,je,m]),Ie.useEffect(()=>{if(!je){z([]);return}return _M(n.uid,z,q=>me(nn(q)))},[n==null?void 0:n.uid,je,m]);const it=Ie.useMemo(()=>[...new Set(B.filter(q=>q.status==="accepted").map(q=>q.fromUid===(n==null?void 0:n.uid)?q.toUid:q.fromUid).filter(q=>typeof q=="string"&&q&&q!==(n==null?void 0:n.uid)))],[B,n==null?void 0:n.uid]),Vn=it.join("|");Ie.useEffect(()=>{if(!je){Q({});return}const q=Vn?Vn.split("|"):[];Q({});const ve=q.map(Ye=>yM(Ye,gt=>Q(zt=>({...zt,[Ye]:gt})),gt=>me(nn(gt))));return()=>ve.forEach(Ye=>Ye==null?void 0:Ye())},[n==null?void 0:n.uid,je,Vn]);const xe=E.find(q=>q.id===ie)||E[0]||null,Fn=Array.isArray(xe==null?void 0:xe.textChannels)?xe.textChannels.filter(q=>q==null?void 0:q.id):[],Je=Fn.find(q=>q.id===qe)||Fn[0]||null,Mr=Array.isArray(xe==null?void 0:xe.voiceChannels)?xe.voiceChannels.filter(q=>q==null?void 0:q.id):[],an=Mr.find(q=>q.id===N)||null,ln=it.includes(P)?P:"",cr=q=>{const ve=Z[q];return String((ve==null?void 0:ve.displayName)||(ve==null?void 0:ve.name)||(ve!=null&&ve.handle?"@"+ve.handle:"Amigo")).slice(0,50)},si=B.filter(q=>q.status==="pending"&&q.toUid===(n==null?void 0:n.uid)),Qn={user:n,section:D,server:xe,channel:Je,friendUid:ln,friendUids:it},un=_C(Qn),Yn=zM(Qn),oi=Yn&&R.scope===Yn?R.items:[];Ie.useEffect(()=>{if(ft({scope:Yn,items:[]}),ae(""),!Yn)return;let q=!0;const ve=zt=>{q&&ft({scope:Yn,items:zt})},Ye=zt=>{q&&me(nn(zt))};let gt;return D==="dm"?gt=TM(n.uid,ln,ve,Ye):D==="servers"&&(gt=AM(xe.id,Je.id,ve,Ye)),()=>{q=!1,gt==null||gt()}},[Yn]);function ai(q){L("servers"),le(q),Ne(""),C(""),ut(""),me("")}function ji(q){it.includes(q)&&(L("dm"),b(q),ut(""),me(""))}async function Ct(q){var Ye;q.preventDefault();const ve=kt.trim();if(!(!ve||ve.length>2e3||se||!un)){ye(!0),me("");try{const gt=String(n.displayName||((Ye=n.email)==null?void 0:Ye.split("@")[0])||"Membro").slice(0,50);D==="dm"?await SM(n.uid,ln,gt,ve):await RM(n.uid,xe.id,Je.id,gt,ve),ut("")}catch(gt){me(nn(gt))}finally{ye(!1)}}}async function wt(q,ve){if(!se){ye(!0),me("");try{await kM(q,n.uid,ve)}catch(Ye){me(nn(Ye))}finally{ye(!1)}}}async function hr(q){if(q.preventDefault(),!(!He.trim()||se)){ye(!0),Ue("");try{await mM(n.uid,He.trim()),re(""),Ue("Solicitação enviada.")}catch(ve){Ue(nn(ve))}finally{ye(!1)}}}async function Bi(q,ve){if(!se){ye(!0),me("");try{await gM(q,n.uid,ve)}catch(Ye){me(nn(Ye))}finally{ye(!1)}}}async function Lr(q,ve){if(un)try{await wM(n.uid,D==="dm"?"dm":"server",ln,xe==null?void 0:xe.id,Je==null?void 0:Je.id,q,ve)}catch(Ye){me(nn(Ye))}}async function li(q,ve){if(q.preventDefault(),!(!un||ve.senderUid!==n.uid||!M.trim()||se)){ye(!0);try{await EM(n.uid,D==="dm"?"dm":"server",ln,xe==null?void 0:xe.id,Je==null?void 0:Je.id,ve.id,M.trim()),ae(""),G("")}catch(Ye){me(nn(Ye))}finally{ye(!1)}}}async function ui(q){if(!(!un||q.senderUid!==n.uid||se)&&window.confirm("Excluir esta mensagem para todos?")){ye(!0);try{await IM(n.uid,D==="dm"?"dm":"server",ln,xe==null?void 0:xe.id,Je==null?void 0:Je.id,q.id)}catch(ve){me(nn(ve))}finally{ye(!1)}}}function zi(){L("friends"),ut(""),me("")}function Hs(){rT(bn).catch(q=>me(nn(q)))}if(t)return T.jsx(Ie.Suspense,{fallback:T.jsx("main",{className:"center-screen",children:"Abrindo sala rápida…"}),children:T.jsx($M,{roomId:t,user:n!=null&&n.emailVerified?n:null,onExit:()=>d(!1),onRegister:()=>d(!0)},t)});if(!uC||!bn)return T.jsx(mI,{initialMode:s,onJoinGuest:u,onCreateRoom:f});if(n===void 0)return T.jsx("main",{className:"center-screen",children:T.jsxs("div",{className:"loading",children:[T.jsx(hu,{}),T.jsx("p",{children:"Carregando Discórdia Web…"})]})});if(!n)return T.jsx(mI,{initialMode:s,onJoinGuest:u,onCreateRoom:f},s);if(!n.emailVerified)return T.jsxs(T.Fragment,{children:[T.jsx(HM,{user:n,onRefresh:()=>y(q=>q+1),setError:me}),ke&&T.jsx("div",{className:"auth-feedback",role:"status",children:ke})]});const Gs=D==="voice"?"◉ "+((an==null?void 0:an.name)||"Canal de voz"):D==="media-lab"?"Testes de mídia":D==="friends"?"Amigos e mensagens":D==="dm"?cr(ln):Je?"# "+(Je.name||"canal"):(xe==null?void 0:xe.name)||"Bem-vindo ao Discórdia";return T.jsxs("div",{className:"app-shell",children:[T.jsxs("nav",{className:"server-rail","aria-label":"Servidores e áreas",children:[T.jsx("button",{className:"rail-home","aria-label":"Discórdia, início",title:"Início",onClick:()=>ai(""),children:T.jsx(hu,{small:!0})}),T.jsx("span",{className:"rail-divider"}),E.map(q=>{var ve;return T.jsx("button",{className:D==="servers"&&(xe==null?void 0:xe.id)===q.id?"server-icon active":"server-icon",title:q.name||"Servidor","aria-label":q.name||"Servidor",onClick:()=>ai(q.id),children:String(q.icon||((ve=q.name)==null?void 0:ve.charAt(0))||"◆").slice(0,2)},q.id)}),T.jsx("button",{className:D!=="servers"?"server-icon friends-icon active":"server-icon friends-icon","aria-label":"Amigos",title:"Amigos",onClick:zi,children:T.jsx(To,{name:"users",size:23})}),T.jsx("button",{className:"rail-quick-room","aria-label":"Criar sala rápida",title:"Criar sala por link",onClick:()=>void f(),disabled:se,children:T.jsx(To,{name:"link",size:24})}),T.jsx("button",{className:"rail-logout","aria-label":"Sair",title:"Sair da conta",onClick:Hs,children:T.jsx(To,{name:"exit",size:23})})]}),T.jsxs("aside",{className:"channel-sidebar","aria-label":"Navegação do espaço",children:[T.jsxs("div",{className:"sidebar-title",children:[T.jsx(hu,{small:!0}),T.jsxs("div",{children:[T.jsx("strong",{children:D==="servers"?(xe==null?void 0:xe.name)||"Meus servidores":"Mensagens"}),T.jsx("small",{children:"DISCÓRDIA WEB"})]})]}),D==="servers"?T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE TEXTO"}),T.jsxs("div",{className:"channel-list",children:[Fn.map(q=>T.jsxs("button",{className:q.id===(Je==null?void 0:Je.id)?"channel-choice active":"channel-choice",onClick:()=>{L("servers"),Ne(q.id),ut("")},children:["# ",T.jsx("span",{children:q.name||"canal"})]},q.id)),!Fn.length&&T.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de texto disponível."})]}),T.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE VOZ · PRÉVIA"}),T.jsxs("div",{className:"channel-list",children:[Mr.map(q=>T.jsxs("button",{className:D==="voice"&&(an==null?void 0:an.id)===q.id?"channel-choice active":"channel-choice",onClick:()=>{L("voice"),C(q.id),ut("")},children:["◉ ",T.jsx("span",{children:q.name||"voz"})]},q.id)),!Mr.length&&T.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de voz disponível."})]}),T.jsx("p",{className:"sidebar-empty",children:"Assistir pelo SFU exige permissão e ativação na prévia."})]}):T.jsxs(T.Fragment,{children:[T.jsxs("button",{className:D==="friends"?"channel-choice active":"channel-choice",onClick:zi,children:["♧ ",T.jsx("span",{children:"Amigos"})]}),T.jsx("div",{className:"sidebar-subhead",children:"MENSAGENS DIRETAS"}),T.jsx("div",{className:"channel-list",children:it.map(q=>T.jsxs("button",{className:D==="dm"&&q===ln?"channel-choice active":"channel-choice",onClick:()=>ji(q),children:["◉ ",T.jsx("span",{children:cr(q)})]},q))})]}),T.jsxs("div",{className:"quick-room-launch",children:[T.jsx("strong",{children:"Sala rápida por link"}),T.jsx("p",{children:"Crie uma sala temporária para assistir à sua tela com convidados."}),T.jsx("button",{type:"button",className:"primary",disabled:se,onClick:()=>void f(),children:se?"Criando sala…":"Criar sala e convidar"})]}),T.jsx("div",{className:"sidebar-subhead",children:"DISPOSITIVOS WEB"}),T.jsxs("button",{type:"button",className:D==="media-lab"?"channel-choice active":"channel-choice",onClick:()=>{L("media-lab"),ut(""),me("")},children:["◉ ",T.jsx("span",{children:"Testar microfone, câmera e tela"})]}),T.jsxs("div",{className:"sidebar-user",children:[T.jsx("div",{className:"user-avatar",children:String(n.displayName||n.email||"U").charAt(0).toUpperCase()}),T.jsxs("div",{children:[T.jsx("strong",{children:n.displayName||((Wi=n.email)==null?void 0:Wi.split("@")[0])||"Usuário"}),T.jsx("small",{children:"Conectado"})]})]})]}),T.jsxs("main",{className:"conversation",children:[T.jsxs("header",{className:"conversation-header",children:[T.jsxs("div",{children:[T.jsx("span",{className:"header-kicker",children:"DISCÓRDIA WEB · RC20"}),T.jsx("h1",{children:Gs})]}),T.jsxs("span",{className:"sync-badge",children:[T.jsx("span",{className:"online-dot"})," Conta autenticada"]})]}),ke&&T.jsxs("div",{role:"alert",className:"inline-error",children:[T.jsx("span",{children:ke}),T.jsx("button",{onClick:()=>me(""),children:"Fechar"})]}),k.filter(q=>q.status==="pending").map(q=>T.jsxs("div",{className:"invite-banner",children:[T.jsxs("span",{children:["Convite para ",T.jsx("strong",{children:String(q.serverName||"servidor").slice(0,70)})]}),T.jsx("button",{disabled:se,onClick:()=>void wt(q,!0),children:"Aceitar"}),T.jsx("button",{disabled:se,onClick:()=>void wt(q,!1),children:"Recusar"})]},q.id)),D==="voice"?T.jsx(Ie.Suspense,{fallback:T.jsx("div",{className:"center-screen",children:"Preparando visualizador Web…"}),children:T.jsx(qM,{user:n,server:xe,channel:an},n.uid+":"+((xe==null?void 0:xe.id)||"")+":"+((an==null?void 0:an.id)||""))}):D==="media-lab"?T.jsx(OM,{}):D==="friends"?T.jsxs("section",{className:"friend-content",children:[T.jsxs("div",{className:"section-heading",children:[T.jsx("h2",{children:"Seus amigos"}),T.jsx("p",{children:"Converse com seus contatos do Desktop e Android."})]}),T.jsxs("form",{className:"friend-form",onSubmit:hr,children:[T.jsx("label",{htmlFor:"web-friend",children:"Adicionar por @identificador"}),T.jsxs("div",{children:[T.jsx("input",{id:"web-friend",value:He,maxLength:130,onChange:q=>re(q.target.value),placeholder:"@seuamigo",required:!0}),T.jsx("button",{className:"primary",disabled:se||!He.trim(),children:"Enviar solicitação"})]})]}),ze&&T.jsx("p",{className:"notice",role:"status",children:ze}),si.length>0&&T.jsxs("div",{className:"friend-group",children:[T.jsx("h3",{children:"Solicitações recebidas"}),si.map(q=>T.jsxs("div",{className:"friend-line",children:[T.jsx("strong",{children:cr(q.fromUid)}),T.jsxs("div",{children:[T.jsx("button",{disabled:se,onClick:()=>void Bi(q,!0),children:"Aceitar"}),T.jsx("button",{disabled:se,onClick:()=>void Bi(q,!1),children:"Recusar"})]})]},q.id))]}),T.jsxs("div",{className:"friend-group",children:[T.jsx("h3",{children:"Conversas"}),!it.length&&T.jsx("p",{className:"empty",children:"Seus amigos aparecerão aqui após aceitarem a solicitação."}),it.map(q=>T.jsxs("button",{className:"friend-line clickable",onClick:()=>ji(q),children:[T.jsxs("span",{className:"friend-identity",children:[T.jsx("span",{className:"friend-avatar",children:cr(q).charAt(0).toUpperCase()}),T.jsx("strong",{children:cr(q)})]}),T.jsx("span",{children:"Enviar mensagem →"})]},q))]})]}):T.jsxs(T.Fragment,{children:[T.jsxs("section",{className:"message-scroll","aria-label":"Mensagens","aria-live":"polite",children:[D==="servers"&&!xe&&T.jsxs("div",{className:"empty-state",children:[T.jsx(hu,{}),T.jsx("h2",{children:"Bem-vindo ao Discórdia Web"}),T.jsx("p",{children:"Os servidores aos quais você tem acesso aparecerão na barra lateral."})]}),D==="servers"&&xe&&!Je&&T.jsxs("div",{className:"empty-state",children:[T.jsx("h2",{children:"Sem canal de texto"}),T.jsx("p",{children:"Este servidor ainda não possui canais disponíveis para você."})]}),D==="dm"&&!ln&&T.jsxs("div",{className:"empty-state",children:[T.jsx("h2",{children:"Conversa indisponível"}),T.jsx("p",{children:"Selecione um amigo com solicitação aceita."})]}),un&&oi.length===0&&T.jsxs("div",{className:"empty-state",children:[T.jsx("h2",{children:"Comece a conversa"}),T.jsx("p",{children:"Suas mensagens serão sincronizadas com as outras plataformas."})]}),oi.map(q=>T.jsx(GM,{item:q,user:n,onReact:Lr,onEdit:ve=>{ae(ve.id),G(ve.text||"")},onDelete:ui,editingId:ge,editText:M,setEditText:G,onSave:li,onCancel:()=>ae(""),busy:se},q.id))]}),un&&T.jsxs("form",{className:"composer",onSubmit:Ct,children:[T.jsx("label",{htmlFor:"web-message",children:"Mensagem"}),T.jsxs("div",{className:"composer-inner",children:[T.jsx("input",{id:"web-message",maxLength:2e3,value:kt,onChange:q=>ut(q.target.value),placeholder:D==="dm"?"Mensagem para "+cr(ln):"Mensagem em #"+((Je==null?void 0:Je.name)||"canal")}),T.jsx("button",{type:"submit",className:"primary",disabled:se||!kt.trim(),children:"Enviar"})]}),T.jsx("small",{children:"Mensagens de texto · Sem integração de voz ou transmissão nesta prévia"})]})]})]})]})}DA.createRoot(document.getElementById("root")).render(T.jsx(AA.StrictMode,{children:T.jsx(KM,{})}));export{To as R,UM as a,oL as b,aL as c,iL as d,XM as e,JM as f,O_ as g,bn as h,tL as i,T as j,rL as k,sL as n,nL as o,Ie as r,ZM as s,eL as u};
