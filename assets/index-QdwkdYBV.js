const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/QuickRoom-CgH-SiwB.js","assets/useConnectionDiagnostics-CT_bk-Eb.js","assets/WebVoiceRoom-DmBE5bj4.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function FA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $p={exports:{}},nu={},qp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function jA(){if(Yv)return je;Yv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,F={};function B(V,Q,pe){this.props=V,this.context=Q,this.refs=F,this.updater=pe||P}B.prototype.isReactComponent={},B.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function K(){}K.prototype=B.prototype;function H(V,Q,pe){this.props=V,this.context=Q,this.refs=F,this.updater=pe||P}var ee=H.prototype=new K;ee.constructor=H,O(ee,B.prototype),ee.isPureReactComponent=!0;var se=Array.isArray,Oe=Object.prototype.hasOwnProperty,Pe={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(V,Q,pe){var ge,we={},Le=null,_e=null;if(Q!=null)for(ge in Q.ref!==void 0&&(_e=Q.ref),Q.key!==void 0&&(Le=""+Q.key),Q)Oe.call(Q,ge)&&!D.hasOwnProperty(ge)&&(we[ge]=Q[ge]);var qe=arguments.length-2;if(qe===1)we.children=pe;else if(1<qe){for(var Je=Array(qe),ot=0;ot<qe;ot++)Je[ot]=arguments[ot+2];we.children=Je}if(V&&V.defaultProps)for(ge in qe=V.defaultProps,qe)we[ge]===void 0&&(we[ge]=qe[ge]);return{$$typeof:n,type:V,key:Le,ref:_e,props:we,_owner:Pe.current}}function C(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function L(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return Q[pe]})}var b=/\/+/g;function k(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):Q.toString(36)}function ft(V,Q,pe,ge,we){var Le=typeof V;(Le==="undefined"||Le==="boolean")&&(V=null);var _e=!1;if(V===null)_e=!0;else switch(Le){case"string":case"number":_e=!0;break;case"object":switch(V.$$typeof){case n:case e:_e=!0}}if(_e)return _e=V,we=we(_e),V=ge===""?"."+k(_e,0):ge,se(we)?(pe="",V!=null&&(pe=V.replace(b,"$&/")+"/"),ft(we,Q,pe,"",function(ot){return ot})):we!=null&&(x(we)&&(we=C(we,pe+(!we.key||_e&&_e.key===we.key?"":(""+we.key).replace(b,"$&/")+"/")+V)),Q.push(we)),1;if(_e=0,ge=ge===""?".":ge+":",se(V))for(var qe=0;qe<V.length;qe++){Le=V[qe];var Je=ge+k(Le,qe);_e+=ft(Le,Q,pe,Je,we)}else if(Je=I(V),typeof Je=="function")for(V=Je.call(V),qe=0;!(Le=V.next()).done;)Le=Le.value,Je=ge+k(Le,qe++),_e+=ft(Le,Q,pe,Je,we);else if(Le==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return _e}function Me(V,Q,pe){if(V==null)return V;var ge=[],we=0;return ft(V,ge,"","",function(Le){return Q.call(pe,Le,we++)}),ge}function be(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var De={current:null},re={transition:null},ye={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:re,ReactCurrentOwner:Pe};function ae(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:Me,forEach:function(V,Q,pe){Me(V,function(){Q.apply(this,arguments)},pe)},count:function(V){var Q=0;return Me(V,function(){Q++}),Q},toArray:function(V){return Me(V,function(Q){return Q})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},je.Component=B,je.Fragment=t,je.Profiler=s,je.PureComponent=H,je.StrictMode=r,je.Suspense=f,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,je.act=ae,je.cloneElement=function(V,Q,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ge=O({},V.props),we=V.key,Le=V.ref,_e=V._owner;if(Q!=null){if(Q.ref!==void 0&&(Le=Q.ref,_e=Pe.current),Q.key!==void 0&&(we=""+Q.key),V.type&&V.type.defaultProps)var qe=V.type.defaultProps;for(Je in Q)Oe.call(Q,Je)&&!D.hasOwnProperty(Je)&&(ge[Je]=Q[Je]===void 0&&qe!==void 0?qe[Je]:Q[Je])}var Je=arguments.length-2;if(Je===1)ge.children=pe;else if(1<Je){qe=Array(Je);for(var ot=0;ot<Je;ot++)qe[ot]=arguments[ot+2];ge.children=qe}return{$$typeof:n,type:V.type,key:we,ref:Le,props:ge,_owner:_e}},je.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},je.createElement=A,je.createFactory=function(V){var Q=A.bind(null,V);return Q.type=V,Q},je.createRef=function(){return{current:null}},je.forwardRef=function(V){return{$$typeof:h,render:V}},je.isValidElement=x,je.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:be}},je.memo=function(V,Q){return{$$typeof:m,type:V,compare:Q===void 0?null:Q}},je.startTransition=function(V){var Q=re.transition;re.transition={};try{V()}finally{re.transition=Q}},je.unstable_act=ae,je.useCallback=function(V,Q){return De.current.useCallback(V,Q)},je.useContext=function(V){return De.current.useContext(V)},je.useDebugValue=function(){},je.useDeferredValue=function(V){return De.current.useDeferredValue(V)},je.useEffect=function(V,Q){return De.current.useEffect(V,Q)},je.useId=function(){return De.current.useId()},je.useImperativeHandle=function(V,Q,pe){return De.current.useImperativeHandle(V,Q,pe)},je.useInsertionEffect=function(V,Q){return De.current.useInsertionEffect(V,Q)},je.useLayoutEffect=function(V,Q){return De.current.useLayoutEffect(V,Q)},je.useMemo=function(V,Q){return De.current.useMemo(V,Q)},je.useReducer=function(V,Q,pe){return De.current.useReducer(V,Q,pe)},je.useRef=function(V){return De.current.useRef(V)},je.useState=function(V){return De.current.useState(V)},je.useSyncExternalStore=function(V,Q,pe){return De.current.useSyncExternalStore(V,Q,pe)},je.useTransition=function(){return De.current.useTransition()},je.version="18.3.1",je}var Xv;function cg(){return Xv||(Xv=1,qp.exports=jA()),qp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function UA(){if(Jv)return nu;Jv=1;var n=cg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,m){var y,w={},I=null,P=null;m!==void 0&&(I=""+m),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(P=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(w[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:e,type:h,key:I,ref:P,props:w,_owner:s.current}}return nu.Fragment=t,nu.jsx=u,nu.jsxs=u,nu}var Zv;function BA(){return Zv||(Zv=1,$p.exports=UA()),$p.exports}var v=BA(),Ee=cg();const kI=FA(Ee);var Ah={},Hp={exports:{}},On={},Gp={exports:{}},Kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function zA(){return eE||(eE=1,(function(n){function e(re,ye){var ae=re.length;re.push(ye);e:for(;0<ae;){var V=ae-1>>>1,Q=re[V];if(0<s(Q,ye))re[V]=ye,re[ae]=Q,ae=V;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var ye=re[0],ae=re.pop();if(ae!==ye){re[0]=ae;e:for(var V=0,Q=re.length,pe=Q>>>1;V<pe;){var ge=2*(V+1)-1,we=re[ge],Le=ge+1,_e=re[Le];if(0>s(we,ae))Le<Q&&0>s(_e,we)?(re[V]=_e,re[Le]=ae,V=Le):(re[V]=we,re[ge]=ae,V=ge);else if(Le<Q&&0>s(_e,ae))re[V]=_e,re[Le]=ae,V=Le;else break e}}return ye}function s(re,ye){var ae=re.sortIndex-ye.sortIndex;return ae!==0?ae:re.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var f=[],m=[],y=1,w=null,I=3,P=!1,O=!1,F=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(re){for(var ye=t(m);ye!==null;){if(ye.callback===null)r(m);else if(ye.startTime<=re)r(m),ye.sortIndex=ye.expirationTime,e(f,ye);else break;ye=t(m)}}function se(re){if(F=!1,ee(re),!O)if(t(f)!==null)O=!0,be(Oe);else{var ye=t(m);ye!==null&&De(se,ye.startTime-re)}}function Oe(re,ye){O=!1,F&&(F=!1,K(A),A=-1),P=!0;var ae=I;try{for(ee(ye),w=t(f);w!==null&&(!(w.expirationTime>ye)||re&&!L());){var V=w.callback;if(typeof V=="function"){w.callback=null,I=w.priorityLevel;var Q=V(w.expirationTime<=ye);ye=n.unstable_now(),typeof Q=="function"?w.callback=Q:w===t(f)&&r(f),ee(ye)}else r(f);w=t(f)}if(w!==null)var pe=!0;else{var ge=t(m);ge!==null&&De(se,ge.startTime-ye),pe=!1}return pe}finally{w=null,I=ae,P=!1}}var Pe=!1,D=null,A=-1,C=5,x=-1;function L(){return!(n.unstable_now()-x<C)}function b(){if(D!==null){var re=n.unstable_now();x=re;var ye=!0;try{ye=D(!0,re)}finally{ye?k():(Pe=!1,D=null)}}else Pe=!1}var k;if(typeof H=="function")k=function(){H(b)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Me=ft.port2;ft.port1.onmessage=b,k=function(){Me.postMessage(null)}}else k=function(){B(b,0)};function be(re){D=re,Pe||(Pe=!0,k())}function De(re,ye){A=B(function(){re(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){O||P||(O=!0,be(Oe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var ye=3;break;default:ye=I}var ae=I;I=ye;try{return re()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,ye){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=I;I=re;try{return ye()}finally{I=ae}},n.unstable_scheduleCallback=function(re,ye,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,re={id:y++,callback:ye,priorityLevel:re,startTime:ae,expirationTime:Q,sortIndex:-1},ae>V?(re.sortIndex=ae,e(m,re),t(f)===null&&re===t(m)&&(F?(K(A),A=-1):F=!0,De(se,ae-V))):(re.sortIndex=Q,e(f,re),O||P||(O=!0,be(Oe))),re},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(re){var ye=I;return function(){var ae=I;I=ye;try{return re.apply(this,arguments)}finally{I=ae}}}})(Kp)),Kp}var tE;function WA(){return tE||(tE=1,Gp.exports=zA()),Gp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function $A(){if(nE)return On;nE=1;var n=cg(),e=WA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function I(i){return f.call(w,i)?!0:f.call(y,i)?!1:m.test(i)?w[i]=!0:(y[i]=!0,!1)}function P(i,o,l,d){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function O(i,o,l,d){if(o===null||typeof o>"u"||P(i,o,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function F(i,o,l,d,p,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new F(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];B[o]=new F(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new F(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new F(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new F(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new F(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new F(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new F(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new F(i,5,!1,i.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function H(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(K,H);B[o]=new F(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(K,H);B[o]=new F(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(K,H);B[o]=new F(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new F(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new F(i,1,!1,i.toLowerCase(),null,!0,!0)});function ee(i,o,l,d){var p=B.hasOwnProperty(o)?B[o]:null;(p!==null?p.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(O(o,l,p,d)&&(l=null),d||p===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,o,l):i.setAttribute(o,l))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),re=Symbol.iterator;function ye(i){return i===null||typeof i!="object"?null:(i=re&&i[re]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,V;function Q(i){if(V===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+i}var pe=!1;function ge(i,o){if(!i||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var d=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){d=W}i.call(o.prototype)}else{try{throw Error()}catch(W){d=W}i()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),_=d.stack.split(`
`),T=p.length-1,R=_.length-1;1<=T&&0<=R&&p[T]!==_[R];)R--;for(;1<=T&&0<=R;T--,R--)if(p[T]!==_[R]){if(T!==1||R!==1)do if(T--,R--,0>R||p[T]!==_[R]){var N=`
`+p[T].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=T&&0<=R);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function we(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=ge(i.type,!1),i;case 11:return i=ge(i.type.render,!1),i;case 1:return i=ge(i.type,!0),i;default:return""}}function Le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case Pe:return"Portal";case C:return"Profiler";case A:return"StrictMode";case k:return"Suspense";case ft:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case L:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case b:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Me:return o=i.displayName||null,o!==null?o:Le(i.type)||"Memo";case be:o=i._payload,i=i._init;try{return Le(i(o))}catch{}}return null}function _e(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function qe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function ot(i){var o=Je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,_.call(this,T)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Zt(i){i._valueTracker||(i._valueTracker=ot(i))}function Fr(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),d="";return i&&(d=Je(i)?i.checked?"true":"false":i.value),i=d,i!==l?(o.setValue(i),!0):!1}function Re(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Yn(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function st(i,o){var l=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;l=qe(o.value!=null?o.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Bo(i,o){o=o.checked,o!=null&&ee(i,"checked",o,!1)}function un(i,o){Bo(i,o);var l=qe(o.value),d=o.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Fn(i,o.type,l):o.hasOwnProperty("defaultValue")&&Fn(i,o.type,qe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function vn(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Fn(i,o,l){(o!=="number"||Re(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Xn=Array.isArray;function Jn(i,o,l,d){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+qe(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Zn(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function jn(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Xn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:qe(l)}}function oi(i,o){var l=qe(o.value),d=qe(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function Ui(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Tt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Tt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var er,Hs=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,d,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=er.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function pr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},li=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(i){li.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ai[o]=ai[i]})});function Gs(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ai.hasOwnProperty(i)&&ai[i]?(""+o).trim():o+"px"}function Bi(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Gs(l,o[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Ks=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(i,o){if(o){if(Ks[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function zi(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q=null;function fe(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Xe=null,tt=null,cn=null;function zo(i){if(i=Bl(i)){if(typeof Xe!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Bc(o),Xe(i.stateNode,i.type,o))}}function jr(i){tt?cn?cn.push(i):cn=[i]:tt=i}function yl(){if(tt){var i=tt,o=cn;if(cn=tt=null,zo(i),o)for(i=0;i<o.length;i++)zo(o[i])}}function Ys(i,o){return i(o)}function vl(){}var ui=!1;function El(i,o,l){if(ui)return i(o,l);ui=!0;try{return Ys(i,o,l)}finally{ui=!1,(tt!==null||cn!==null)&&(vl(),yl())}}function Pt(i,o){var l=i.stateNode;if(l===null)return null;var d=Bc(l);if(d===null)return null;l=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Wo=!1;if(h)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Wo=!1}function Xs(i,o,l,d,p,_,T,R,N){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(J){this.onError(J)}}var Js=!1,$o=null,gr=!1,wl=null,yf={onError:function(i){Js=!0,$o=i}};function qo(i,o,l,d,p,_,T,R,N){Js=!1,$o=null,Xs.apply(yf,arguments)}function dc(i,o,l,d,p,_,T,R,N){if(qo.apply(this,arguments),Js){if(Js){var W=$o;Js=!1,$o=null}else throw Error(t(198));gr||(gr=!0,wl=W)}}function _r(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Zs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function yr(i){if(_r(i)!==i)throw Error(t(188))}function fc(i){var o=i.alternate;if(!o){if(o=_r(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,d=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return yr(p),i;if(_===d)return yr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var T=!1,R=p.child;R;){if(R===l){T=!0,l=p,d=_;break}if(R===d){T=!0,d=p,l=_;break}R=R.sibling}if(!T){for(R=_.child;R;){if(R===l){T=!0,l=_,d=p;break}if(R===d){T=!0,d=_,l=p;break}R=R.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function Il(i){return i=fc(i),i!==null?Ho(i):null}function Ho(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Ho(i);if(o!==null)return o;i=i.sibling}return null}var Go=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,pc=e.unstable_shouldYield,vf=e.unstable_requestPaint,ut=e.unstable_now,mc=e.unstable_getCurrentPriorityLevel,eo=e.unstable_ImmediatePriority,Wi=e.unstable_UserBlockingPriority,tr=e.unstable_NormalPriority,Sl=e.unstable_LowPriority,gc=e.unstable_IdlePriority,to=null,Un=null;function _c(i){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(to,i,void 0,(i.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:vc,Cl=Math.log,yc=Math.LN2;function vc(i){return i>>>=0,i===0?32:31-(Cl(i)/yc|0)|0}var Ko=64,Qo=4194304;function $i(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function no(i,o){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var R=T&~p;R!==0?d=$i(R):(_&=T,_!==0&&(d=$i(_)))}else T=l&~p,T!==0?d=$i(T):_!==0&&(d=$i(_));if(d===0)return 0;if(o!==0&&o!==d&&(o&p)===0&&(p=d&-d,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((d&4)!==0&&(d|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)l=31-En(o),p=1<<l,d|=i[l],o&=~p;return d}function Ef(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ci(i,o){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-En(_),R=1<<T,N=p[T];N===-1?((R&l)===0||(R&d)!==0)&&(p[T]=Ef(R,o)):N<=o&&(i.expiredLanes|=R),_&=~R}}function Bn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ro(){var i=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),i}function qi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Hi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-En(o),i[o]=l}function at(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-En(l),_=1<<p;o[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function Gi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var d=31-En(l),p=1<<d;p&o|i[d]&o&&(i[d]|=o),l&=~p}}var $e=0;function Ki(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ec,Yo,wc,Ic,Tc,Al=!1,Ur=[],en=null,vr=null,Er=null,Qi=new Map,nr=new Map,Br=[],wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(i,o){switch(i){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Qi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(o.pointerId)}}function Rn(i,o,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Bl(o),o!==null&&Yo(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function If(i,o,l,d,p){switch(o){case"focusin":return en=Rn(en,i,o,l,d,p),!0;case"dragenter":return vr=Rn(vr,i,o,l,d,p),!0;case"mouseover":return Er=Rn(Er,i,o,l,d,p),!0;case"pointerover":var _=p.pointerId;return Qi.set(_,Rn(Qi.get(_)||null,i,o,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,nr.set(_,Rn(nr.get(_)||null,i,o,l,d,p)),!0}return!1}function Cc(i){var o=lo(i.target);if(o!==null){var l=_r(o);if(l!==null){if(o=l.tag,o===13){if(o=Zs(l),o!==null){i.blockedOn=o,Tc(i.priority,function(){wc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function hi(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Xo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);q=d,l.target.dispatchEvent(d),q=null}else return o=Bl(l),o!==null&&Yo(o),i.blockedOn=l,!1;o.shift()}return!0}function io(i,o,l){hi(i)&&l.delete(o)}function Ac(){Al=!1,en!==null&&hi(en)&&(en=null),vr!==null&&hi(vr)&&(vr=null),Er!==null&&hi(Er)&&(Er=null),Qi.forEach(io),nr.forEach(io)}function wr(i,o){i.blockedOn===o&&(i.blockedOn=null,Al||(Al=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ac)))}function Ir(i){function o(p){return wr(p,i)}if(0<Ur.length){wr(Ur[0],i);for(var l=1;l<Ur.length;l++){var d=Ur[l];d.blockedOn===i&&(d.blockedOn=null)}}for(en!==null&&wr(en,i),vr!==null&&wr(vr,i),Er!==null&&wr(Er,i),Qi.forEach(o),nr.forEach(o),l=0;l<Br.length;l++)d=Br[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Br.length&&(l=Br[0],l.blockedOn===null);)Cc(l),l.blockedOn===null&&Br.shift()}var di=se.ReactCurrentBatchConfig,Yi=!0;function _t(i,o,l,d){var p=$e,_=di.transition;di.transition=null;try{$e=1,Rl(i,o,l,d)}finally{$e=p,di.transition=_}}function Tf(i,o,l,d){var p=$e,_=di.transition;di.transition=null;try{$e=4,Rl(i,o,l,d)}finally{$e=p,di.transition=_}}function Rl(i,o,l,d){if(Yi){var p=Xo(i,o,l,d);if(p===null)Of(i,o,d,so,l),Sc(i,d);else if(If(p,i,o,l,d))d.stopPropagation();else if(Sc(i,d),o&4&&-1<wf.indexOf(i)){for(;p!==null;){var _=Bl(p);if(_!==null&&Ec(_),_=Xo(i,o,l,d),_===null&&Of(i,o,d,so,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else Of(i,o,d,null,l)}}var so=null;function Xo(i,o,l,d){if(so=null,i=fe(d),i=lo(i),i!==null)if(o=_r(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Zs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return so=i,null}function Pl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case eo:return 1;case Wi:return 4;case tr:case Sl:return 16;case gc:return 536870912;default:return 16}default:return 16}}var zn=null,Jo=null,Pn=null;function kl(){if(Pn)return Pn;var i,o=Jo,l=o.length,d,p="value"in zn?zn.value:zn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var T=l-i;for(d=1;d<=T&&o[l-d]===p[_-d];d++);return Pn=p.slice(i,1<d?1-d:void 0)}function Zo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function zr(){return!0}function Nl(){return!1}function tn(i){function o(l,d,p,_,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?zr:Nl,this.isPropagationStopped=Nl,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),o}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=tn(Tr),Wr=ae({},Tr,{view:0,detail:0}),Sf=tn(Wr),ta,fi,Xi,oo=ae({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Xi&&(Xi&&i.type==="mousemove"?(ta=i.screenX-Xi.screenX,fi=i.screenY-Xi.screenY):fi=ta=0,Xi=i),ta)},movementY:function(i){return"movementY"in i?i.movementY:fi}}),na=tn(oo),xl=ae({},oo,{dataTransfer:0}),Rc=tn(xl),ra=ae({},Wr,{relatedTarget:0}),ia=tn(ra),Pc=ae({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),pi=tn(Pc),kc=ae({},Tr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Nc=tn(kc),xc=ae({},Tr,{data:0}),bl=tn(xc),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=bc[i])?!!o[i]:!1}function $r(){return Dc}var c=ae({},Wr,{key:function(i){if(i.key){var o=sa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Zo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?wn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(i){return i.type==="keypress"?Zo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Zo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=tn(c),E=ae({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=tn(E),j=ae({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),$=tn(j),ie=ae({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nt=tn(ie),Ft=ae({},oo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),He=tn(Ft),$t=[9,13,27,32],bt=h&&"CompositionEvent"in window,rr=null;h&&"documentMode"in document&&(rr=document.documentMode);var Wn=h&&"TextEvent"in window&&!rr,ao=h&&(!bt||rr&&8<rr&&11>=rr),oa=" ",$_=!1;function q_(i,o){switch(i){case"keyup":return $t.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var aa=!1;function MC(i,o){switch(i){case"compositionend":return H_(o);case"keypress":return o.which!==32?null:($_=!0,oa);case"textInput":return i=o.data,i===oa&&$_?null:i;default:return null}}function LC(i,o){if(aa)return i==="compositionend"||!bt&&q_(i,o)?(i=kl(),Pn=Jo=zn=null,aa=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return ao&&o.locale!=="ko"?null:o.data;default:return null}}var VC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!VC[i.type]:o==="textarea"}function K_(i,o,l,d){jr(d),o=Fc(o,"onChange"),0<o.length&&(l=new ea("onChange","change",null,l,d),i.push({event:l,listeners:o}))}var Dl=null,Ol=null;function FC(i){dy(i,0)}function Oc(i){var o=da(i);if(Fr(o))return i}function jC(i,o){if(i==="change")return o}var Q_=!1;if(h){var Cf;if(h){var Af="oninput"in document;if(!Af){var Y_=document.createElement("div");Y_.setAttribute("oninput","return;"),Af=typeof Y_.oninput=="function"}Cf=Af}else Cf=!1;Q_=Cf&&(!document.documentMode||9<document.documentMode)}function X_(){Dl&&(Dl.detachEvent("onpropertychange",J_),Ol=Dl=null)}function J_(i){if(i.propertyName==="value"&&Oc(Ol)){var o=[];K_(o,Ol,i,fe(i)),El(FC,o)}}function UC(i,o,l){i==="focusin"?(X_(),Dl=o,Ol=l,Dl.attachEvent("onpropertychange",J_)):i==="focusout"&&X_()}function BC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Oc(Ol)}function zC(i,o){if(i==="click")return Oc(o)}function WC(i,o){if(i==="input"||i==="change")return Oc(o)}function $C(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Sr=typeof Object.is=="function"?Object.is:$C;function Ml(i,o){if(Sr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),d=Object.keys(o);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(o,p)||!Sr(i[p],o[p]))return!1}return!0}function Z_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ey(i,o){var l=Z_(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=o&&d>=o)return{node:l,offset:o-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Z_(l)}}function ty(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?ty(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function ny(){for(var i=window,o=Re();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Re(i.document)}return o}function Rf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function qC(i){var o=ny(),l=i.focusedElem,d=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&ty(l.ownerDocument.documentElement,l)){if(d!==null&&Rf(l)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=ey(l,_);var T=ey(l,d);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var HC=h&&"documentMode"in document&&11>=document.documentMode,la=null,Pf=null,Ll=null,kf=!1;function ry(i,o,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;kf||la==null||la!==Re(d)||(d=la,"selectionStart"in d&&Rf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ll&&Ml(Ll,d)||(Ll=d,d=Fc(Pf,"onSelect"),0<d.length&&(o=new ea("onSelect","select",null,o,l),i.push({event:o,listeners:d}),o.target=la)))}function Mc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ua={animationend:Mc("Animation","AnimationEnd"),animationiteration:Mc("Animation","AnimationIteration"),animationstart:Mc("Animation","AnimationStart"),transitionend:Mc("Transition","TransitionEnd")},Nf={},iy={};h&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function Lc(i){if(Nf[i])return Nf[i];if(!ua[i])return i;var o=ua[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in iy)return Nf[i]=o[l];return i}var sy=Lc("animationend"),oy=Lc("animationiteration"),ay=Lc("animationstart"),ly=Lc("transitionend"),uy=new Map,cy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(i,o){uy.set(i,o),a(o,[i])}for(var xf=0;xf<cy.length;xf++){var bf=cy[xf],GC=bf.toLowerCase(),KC=bf[0].toUpperCase()+bf.slice(1);Ji(GC,"on"+KC)}Ji(sy,"onAnimationEnd"),Ji(oy,"onAnimationIteration"),Ji(ay,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(ly,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vl));function hy(i,o,l){var d=i.type||"unknown-event";i.currentTarget=l,dc(d,o,void 0,i),i.currentTarget=null}function dy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var T=d.length-1;0<=T;T--){var R=d[T],N=R.instance,W=R.currentTarget;if(R=R.listener,N!==_&&p.isPropagationStopped())break e;hy(p,R,W),_=N}else for(T=0;T<d.length;T++){if(R=d[T],N=R.instance,W=R.currentTarget,R=R.listener,N!==_&&p.isPropagationStopped())break e;hy(p,R,W),_=N}}}if(gr)throw i=wl,gr=!1,wl=null,i}function pt(i,o){var l=o[Uf];l===void 0&&(l=o[Uf]=new Set);var d=i+"__bubble";l.has(d)||(fy(o,i,2,!1),l.add(d))}function Df(i,o,l){var d=0;o&&(d|=4),fy(l,i,d,o)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Fl(i){if(!i[Vc]){i[Vc]=!0,r.forEach(function(l){l!=="selectionchange"&&(QC.has(l)||Df(l,!1,i),Df(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Vc]||(o[Vc]=!0,Df("selectionchange",!1,o))}}function fy(i,o,l,d){switch(Pl(o)){case 1:var p=_t;break;case 4:p=Tf;break;default:p=Rl}l=p.bind(null,o,l,i),p=void 0,!Wo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Of(i,o,l,d,p){var _=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var R=d.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var N=T.tag;if((N===3||N===4)&&(N=T.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;T=T.return}for(;R!==null;){if(T=lo(R),T===null)return;if(N=T.tag,N===5||N===6){d=_=T;continue e}R=R.parentNode}}d=d.return}El(function(){var W=_,J=fe(l),Z=[];e:{var X=uy.get(i);if(X!==void 0){var le=ea,he=i;switch(i){case"keypress":if(Zo(l)===0)break e;case"keydown":case"keyup":le=g;break;case"focusin":he="focus",le=ia;break;case"focusout":he="blur",le=ia;break;case"beforeblur":case"afterblur":le=ia;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=$;break;case sy:case oy:case ay:le=pi;break;case ly:le=nt;break;case"scroll":le=Sf;break;case"wheel":le=He;break;case"copy":case"cut":case"paste":le=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=S}var de=(o&4)!==0,kt=!de&&i==="scroll",U=de?X!==null?X+"Capture":null:X;de=[];for(var M=W,z;M!==null;){z=M;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,U!==null&&(te=Pt(M,U),te!=null&&de.push(jl(M,te,z)))),kt)break;M=M.return}0<de.length&&(X=new le(X,he,null,l,J),Z.push({event:X,listeners:de}))}}if((o&7)===0){e:{if(X=i==="mouseover"||i==="pointerover",le=i==="mouseout"||i==="pointerout",X&&l!==q&&(he=l.relatedTarget||l.fromElement)&&(lo(he)||he[mi]))break e;if((le||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,le?(he=l.relatedTarget||l.toElement,le=W,he=he?lo(he):null,he!==null&&(kt=_r(he),he!==kt||he.tag!==5&&he.tag!==6)&&(he=null)):(le=null,he=W),le!==he)){if(de=na,te="onMouseLeave",U="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(de=S,te="onPointerLeave",U="onPointerEnter",M="pointer"),kt=le==null?X:da(le),z=he==null?X:da(he),X=new de(te,M+"leave",le,l,J),X.target=kt,X.relatedTarget=z,te=null,lo(J)===W&&(de=new de(U,M+"enter",he,l,J),de.target=z,de.relatedTarget=kt,te=de),kt=te,le&&he)t:{for(de=le,U=he,M=0,z=de;z;z=ca(z))M++;for(z=0,te=U;te;te=ca(te))z++;for(;0<M-z;)de=ca(de),M--;for(;0<z-M;)U=ca(U),z--;for(;M--;){if(de===U||U!==null&&de===U.alternate)break t;de=ca(de),U=ca(U)}de=null}else de=null;le!==null&&py(Z,X,le,de,!1),he!==null&&kt!==null&&py(Z,kt,he,de,!0)}}e:{if(X=W?da(W):window,le=X.nodeName&&X.nodeName.toLowerCase(),le==="select"||le==="input"&&X.type==="file")var me=jC;else if(G_(X))if(Q_)me=WC;else{me=BC;var Ie=UC}else(le=X.nodeName)&&le.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(me=zC);if(me&&(me=me(i,W))){K_(Z,me,l,J);break e}Ie&&Ie(i,X,W),i==="focusout"&&(Ie=X._wrapperState)&&Ie.controlled&&X.type==="number"&&Fn(X,"number",X.value)}switch(Ie=W?da(W):window,i){case"focusin":(G_(Ie)||Ie.contentEditable==="true")&&(la=Ie,Pf=W,Ll=null);break;case"focusout":Ll=Pf=la=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,ry(Z,l,J);break;case"selectionchange":if(HC)break;case"keydown":case"keyup":ry(Z,l,J)}var Te;if(bt)e:{switch(i){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else aa?q_(i,l)&&(ke="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ke="onCompositionStart");ke&&(ao&&l.locale!=="ko"&&(aa||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&aa&&(Te=kl()):(zn=J,Jo="value"in zn?zn.value:zn.textContent,aa=!0)),Ie=Fc(W,ke),0<Ie.length&&(ke=new bl(ke,i,null,l,J),Z.push({event:ke,listeners:Ie}),Te?ke.data=Te:(Te=H_(l),Te!==null&&(ke.data=Te)))),(Te=Wn?MC(i,l):LC(i,l))&&(W=Fc(W,"onBeforeInput"),0<W.length&&(J=new bl("onBeforeInput","beforeinput",null,l,J),Z.push({event:J,listeners:W}),J.data=Te))}dy(Z,o)})}function jl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Fc(i,o){for(var l=o+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Pt(i,l),_!=null&&d.unshift(jl(i,_,p)),_=Pt(i,o),_!=null&&d.push(jl(i,_,p))),i=i.return}return d}function ca(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function py(i,o,l,d,p){for(var _=o._reactName,T=[];l!==null&&l!==d;){var R=l,N=R.alternate,W=R.stateNode;if(N!==null&&N===d)break;R.tag===5&&W!==null&&(R=W,p?(N=Pt(l,_),N!=null&&T.unshift(jl(l,N,R))):p||(N=Pt(l,_),N!=null&&T.push(jl(l,N,R)))),l=l.return}T.length!==0&&i.push({event:o,listeners:T})}var YC=/\r\n?/g,XC=/\u0000|\uFFFD/g;function my(i){return(typeof i=="string"?i:""+i).replace(YC,`
`).replace(XC,"")}function jc(i,o,l){if(o=my(o),my(i)!==o&&l)throw Error(t(425))}function Uc(){}var Mf=null,Lf=null;function Vf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,JC=typeof clearTimeout=="function"?clearTimeout:void 0,gy=typeof Promise=="function"?Promise:void 0,ZC=typeof queueMicrotask=="function"?queueMicrotask:typeof gy<"u"?function(i){return gy.resolve(null).then(i).catch(eA)}:Ff;function eA(i){setTimeout(function(){throw i})}function jf(i,o){var l=o,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Ir(o);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Ir(o)}function Zi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function _y(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ha=Math.random().toString(36).slice(2),qr="__reactFiber$"+ha,Ul="__reactProps$"+ha,mi="__reactContainer$"+ha,Uf="__reactEvents$"+ha,tA="__reactListeners$"+ha,nA="__reactHandles$"+ha;function lo(i){var o=i[qr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[mi]||l[qr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=_y(i);i!==null;){if(l=i[qr])return l;i=_y(i)}return o}i=l,l=i.parentNode}return null}function Bl(i){return i=i[qr]||i[mi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function da(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Bc(i){return i[Ul]||null}var Bf=[],fa=-1;function es(i){return{current:i}}function mt(i){0>fa||(i.current=Bf[fa],Bf[fa]=null,fa--)}function ct(i,o){fa++,Bf[fa]=i.current,i.current=o}var ts={},hn=es(ts),kn=es(!1),uo=ts;function pa(i,o){var l=i.type.contextTypes;if(!l)return ts;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(i){return i=i.childContextTypes,i!=null}function zc(){mt(kn),mt(hn)}function yy(i,o,l){if(hn.current!==ts)throw Error(t(168));ct(hn,o),ct(kn,l)}function vy(i,o,l){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in o))throw Error(t(108,_e(i)||"Unknown",p));return ae({},l,d)}function Wc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ts,uo=hn.current,ct(hn,i),ct(kn,kn.current),!0}function Ey(i,o,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=vy(i,o,uo),d.__reactInternalMemoizedMergedChildContext=i,mt(kn),mt(hn),ct(hn,i)):mt(kn),ct(kn,l)}var gi=null,$c=!1,zf=!1;function wy(i){gi===null?gi=[i]:gi.push(i)}function rA(i){$c=!0,wy(i)}function ns(){if(!zf&&gi!==null){zf=!0;var i=0,o=$e;try{var l=gi;for($e=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}gi=null,$c=!1}catch(p){throw gi!==null&&(gi=gi.slice(i+1)),Go(eo,ns),p}finally{$e=o,zf=!1}}return null}var ma=[],ga=0,qc=null,Hc=0,ir=[],sr=0,co=null,_i=1,yi="";function ho(i,o){ma[ga++]=Hc,ma[ga++]=qc,qc=i,Hc=o}function Iy(i,o,l){ir[sr++]=_i,ir[sr++]=yi,ir[sr++]=co,co=i;var d=_i;i=yi;var p=32-En(d)-1;d&=~(1<<p),l+=1;var _=32-En(o)+p;if(30<_){var T=p-p%5;_=(d&(1<<T)-1).toString(32),d>>=T,p-=T,_i=1<<32-En(o)+p|l<<p|d,yi=_+i}else _i=1<<_|l<<p|d,yi=i}function Wf(i){i.return!==null&&(ho(i,1),Iy(i,1,0))}function $f(i){for(;i===qc;)qc=ma[--ga],ma[ga]=null,Hc=ma[--ga],ma[ga]=null;for(;i===co;)co=ir[--sr],ir[sr]=null,yi=ir[--sr],ir[sr]=null,_i=ir[--sr],ir[sr]=null}var $n=null,qn=null,yt=!1,Cr=null;function Ty(i,o){var l=ur(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Sy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,$n=i,qn=Zi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,$n=i,qn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=co!==null?{id:_i,overflow:yi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=ur(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,$n=i,qn=null,!0):!1;default:return!1}}function qf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Hf(i){if(yt){var o=qn;if(o){var l=o;if(!Sy(i,o)){if(qf(i))throw Error(t(418));o=Zi(l.nextSibling);var d=$n;o&&Sy(i,o)?Ty(d,l):(i.flags=i.flags&-4097|2,yt=!1,$n=i)}}else{if(qf(i))throw Error(t(418));i.flags=i.flags&-4097|2,yt=!1,$n=i}}}function Cy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$n=i}function Gc(i){if(i!==$n)return!1;if(!yt)return Cy(i),yt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Vf(i.type,i.memoizedProps)),o&&(o=qn)){if(qf(i))throw Ay(),Error(t(418));for(;o;)Ty(i,o),o=Zi(o.nextSibling)}if(Cy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){qn=Zi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}qn=null}}else qn=$n?Zi(i.stateNode.nextSibling):null;return!0}function Ay(){for(var i=qn;i;)i=Zi(i.nextSibling)}function _a(){qn=$n=null,yt=!1}function Gf(i){Cr===null?Cr=[i]:Cr.push(i)}var iA=se.ReactCurrentBatchConfig;function zl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var R=p.refs;T===null?delete R[_]:R[_]=T},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Kc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Ry(i){var o=i._init;return o(i._payload)}function Py(i){function o(U,M){if(i){var z=U.deletions;z===null?(U.deletions=[M],U.flags|=16):z.push(M)}}function l(U,M){if(!i)return null;for(;M!==null;)o(U,M),M=M.sibling;return null}function d(U,M){for(U=new Map;M!==null;)M.key!==null?U.set(M.key,M):U.set(M.index,M),M=M.sibling;return U}function p(U,M){return U=cs(U,M),U.index=0,U.sibling=null,U}function _(U,M,z){return U.index=z,i?(z=U.alternate,z!==null?(z=z.index,z<M?(U.flags|=2,M):z):(U.flags|=2,M)):(U.flags|=1048576,M)}function T(U){return i&&U.alternate===null&&(U.flags|=2),U}function R(U,M,z,te){return M===null||M.tag!==6?(M=Fp(z,U.mode,te),M.return=U,M):(M=p(M,z),M.return=U,M)}function N(U,M,z,te){var me=z.type;return me===D?J(U,M,z.props.children,te,z.key):M!==null&&(M.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===be&&Ry(me)===M.type)?(te=p(M,z.props),te.ref=zl(U,M,z),te.return=U,te):(te=yh(z.type,z.key,z.props,null,U.mode,te),te.ref=zl(U,M,z),te.return=U,te)}function W(U,M,z,te){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=jp(z,U.mode,te),M.return=U,M):(M=p(M,z.children||[]),M.return=U,M)}function J(U,M,z,te,me){return M===null||M.tag!==7?(M=Eo(z,U.mode,te,me),M.return=U,M):(M=p(M,z),M.return=U,M)}function Z(U,M,z){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Fp(""+M,U.mode,z),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oe:return z=yh(M.type,M.key,M.props,null,U.mode,z),z.ref=zl(U,null,M),z.return=U,z;case Pe:return M=jp(M,U.mode,z),M.return=U,M;case be:var te=M._init;return Z(U,te(M._payload),z)}if(Xn(M)||ye(M))return M=Eo(M,U.mode,z,null),M.return=U,M;Kc(U,M)}return null}function X(U,M,z,te){var me=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return me!==null?null:R(U,M,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Oe:return z.key===me?N(U,M,z,te):null;case Pe:return z.key===me?W(U,M,z,te):null;case be:return me=z._init,X(U,M,me(z._payload),te)}if(Xn(z)||ye(z))return me!==null?null:J(U,M,z,te,null);Kc(U,z)}return null}function le(U,M,z,te,me){if(typeof te=="string"&&te!==""||typeof te=="number")return U=U.get(z)||null,R(M,U,""+te,me);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Oe:return U=U.get(te.key===null?z:te.key)||null,N(M,U,te,me);case Pe:return U=U.get(te.key===null?z:te.key)||null,W(M,U,te,me);case be:var Ie=te._init;return le(U,M,z,Ie(te._payload),me)}if(Xn(te)||ye(te))return U=U.get(z)||null,J(M,U,te,me,null);Kc(M,te)}return null}function he(U,M,z,te){for(var me=null,Ie=null,Te=M,ke=M=0,Gt=null;Te!==null&&ke<z.length;ke++){Te.index>ke?(Gt=Te,Te=null):Gt=Te.sibling;var Qe=X(U,Te,z[ke],te);if(Qe===null){Te===null&&(Te=Gt);break}i&&Te&&Qe.alternate===null&&o(U,Te),M=_(Qe,M,ke),Ie===null?me=Qe:Ie.sibling=Qe,Ie=Qe,Te=Gt}if(ke===z.length)return l(U,Te),yt&&ho(U,ke),me;if(Te===null){for(;ke<z.length;ke++)Te=Z(U,z[ke],te),Te!==null&&(M=_(Te,M,ke),Ie===null?me=Te:Ie.sibling=Te,Ie=Te);return yt&&ho(U,ke),me}for(Te=d(U,Te);ke<z.length;ke++)Gt=le(Te,U,ke,z[ke],te),Gt!==null&&(i&&Gt.alternate!==null&&Te.delete(Gt.key===null?ke:Gt.key),M=_(Gt,M,ke),Ie===null?me=Gt:Ie.sibling=Gt,Ie=Gt);return i&&Te.forEach(function(hs){return o(U,hs)}),yt&&ho(U,ke),me}function de(U,M,z,te){var me=ye(z);if(typeof me!="function")throw Error(t(150));if(z=me.call(z),z==null)throw Error(t(151));for(var Ie=me=null,Te=M,ke=M=0,Gt=null,Qe=z.next();Te!==null&&!Qe.done;ke++,Qe=z.next()){Te.index>ke?(Gt=Te,Te=null):Gt=Te.sibling;var hs=X(U,Te,Qe.value,te);if(hs===null){Te===null&&(Te=Gt);break}i&&Te&&hs.alternate===null&&o(U,Te),M=_(hs,M,ke),Ie===null?me=hs:Ie.sibling=hs,Ie=hs,Te=Gt}if(Qe.done)return l(U,Te),yt&&ho(U,ke),me;if(Te===null){for(;!Qe.done;ke++,Qe=z.next())Qe=Z(U,Qe.value,te),Qe!==null&&(M=_(Qe,M,ke),Ie===null?me=Qe:Ie.sibling=Qe,Ie=Qe);return yt&&ho(U,ke),me}for(Te=d(U,Te);!Qe.done;ke++,Qe=z.next())Qe=le(Te,U,ke,Qe.value,te),Qe!==null&&(i&&Qe.alternate!==null&&Te.delete(Qe.key===null?ke:Qe.key),M=_(Qe,M,ke),Ie===null?me=Qe:Ie.sibling=Qe,Ie=Qe);return i&&Te.forEach(function(VA){return o(U,VA)}),yt&&ho(U,ke),me}function kt(U,M,z,te){if(typeof z=="object"&&z!==null&&z.type===D&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Oe:e:{for(var me=z.key,Ie=M;Ie!==null;){if(Ie.key===me){if(me=z.type,me===D){if(Ie.tag===7){l(U,Ie.sibling),M=p(Ie,z.props.children),M.return=U,U=M;break e}}else if(Ie.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===be&&Ry(me)===Ie.type){l(U,Ie.sibling),M=p(Ie,z.props),M.ref=zl(U,Ie,z),M.return=U,U=M;break e}l(U,Ie);break}else o(U,Ie);Ie=Ie.sibling}z.type===D?(M=Eo(z.props.children,U.mode,te,z.key),M.return=U,U=M):(te=yh(z.type,z.key,z.props,null,U.mode,te),te.ref=zl(U,M,z),te.return=U,U=te)}return T(U);case Pe:e:{for(Ie=z.key;M!==null;){if(M.key===Ie)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){l(U,M.sibling),M=p(M,z.children||[]),M.return=U,U=M;break e}else{l(U,M);break}else o(U,M);M=M.sibling}M=jp(z,U.mode,te),M.return=U,U=M}return T(U);case be:return Ie=z._init,kt(U,M,Ie(z._payload),te)}if(Xn(z))return he(U,M,z,te);if(ye(z))return de(U,M,z,te);Kc(U,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,M!==null&&M.tag===6?(l(U,M.sibling),M=p(M,z),M.return=U,U=M):(l(U,M),M=Fp(z,U.mode,te),M.return=U,U=M),T(U)):l(U,M)}return kt}var ya=Py(!0),ky=Py(!1),Qc=es(null),Yc=null,va=null,Kf=null;function Qf(){Kf=va=Yc=null}function Yf(i){var o=Qc.current;mt(Qc),i._currentValue=o}function Xf(i,o,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===l)break;i=i.return}}function Ea(i,o){Yc=i,Kf=va=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(xn=!0),i.firstContext=null)}function or(i){var o=i._currentValue;if(Kf!==i)if(i={context:i,memoizedValue:o,next:null},va===null){if(Yc===null)throw Error(t(308));va=i,Yc.dependencies={lanes:0,firstContext:i}}else va=va.next=i;return o}var fo=null;function Jf(i){fo===null?fo=[i]:fo.push(i)}function Ny(i,o,l,d){var p=o.interleaved;return p===null?(l.next=l,Jf(o)):(l.next=p.next,p.next=l),o.interleaved=l,vi(i,d)}function vi(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var rs=!1;function Zf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ei(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function is(i,o,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Ke&2)!==0){var p=d.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),d.pending=o,vi(i,l)}return p=d.interleaved,p===null?(o.next=o,Jf(d)):(o.next=p.next,p.next=o),d.interleaved=o,vi(i,l)}function Xc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,Gi(i,l)}}function by(i,o){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Jc(i,o,l,d){var p=i.updateQueue;rs=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var N=R,W=N.next;N.next=null,T===null?_=W:T.next=W,T=N;var J=i.alternate;J!==null&&(J=J.updateQueue,R=J.lastBaseUpdate,R!==T&&(R===null?J.firstBaseUpdate=W:R.next=W,J.lastBaseUpdate=N))}if(_!==null){var Z=p.baseState;T=0,J=W=N=null,R=_;do{var X=R.lane,le=R.eventTime;if((d&X)===X){J!==null&&(J=J.next={eventTime:le,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var he=i,de=R;switch(X=o,le=l,de.tag){case 1:if(he=de.payload,typeof he=="function"){Z=he.call(le,Z,X);break e}Z=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,X=typeof he=="function"?he.call(le,Z,X):he,X==null)break e;Z=ae({},Z,X);break e;case 2:rs=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,X=p.effects,X===null?p.effects=[R]:X.push(R))}else le={eventTime:le,lane:X,tag:R.tag,payload:R.payload,callback:R.callback,next:null},J===null?(W=J=le,N=Z):J=J.next=le,T|=X;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;X=R,R=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);if(J===null&&(N=Z),p.baseState=N,p.firstBaseUpdate=W,p.lastBaseUpdate=J,o=p.shared.interleaved,o!==null){p=o;do T|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);go|=T,i.lanes=T,i.memoizedState=Z}}function Dy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Wl={},Hr=es(Wl),$l=es(Wl),ql=es(Wl);function po(i){if(i===Wl)throw Error(t(174));return i}function ep(i,o){switch(ct(ql,o),ct($l,i),ct(Hr,Wl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Rt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Rt(o,i)}mt(Hr),ct(Hr,o)}function wa(){mt(Hr),mt($l),mt(ql)}function Oy(i){po(ql.current);var o=po(Hr.current),l=Rt(o,i.type);o!==l&&(ct($l,i),ct(Hr,l))}function tp(i){$l.current===i&&(mt(Hr),mt($l))}var vt=es(0);function Zc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var np=[];function rp(){for(var i=0;i<np.length;i++)np[i]._workInProgressVersionPrimary=null;np.length=0}var eh=se.ReactCurrentDispatcher,ip=se.ReactCurrentBatchConfig,mo=0,Et=null,jt=null,qt=null,th=!1,Hl=!1,Gl=0,sA=0;function dn(){throw Error(t(321))}function sp(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Sr(i[l],o[l]))return!1;return!0}function op(i,o,l,d,p,_){if(mo=_,Et=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,eh.current=i===null||i.memoizedState===null?uA:cA,i=l(d,p),Hl){_=0;do{if(Hl=!1,Gl=0,25<=_)throw Error(t(301));_+=1,qt=jt=null,o.updateQueue=null,eh.current=hA,i=l(d,p)}while(Hl)}if(eh.current=ih,o=jt!==null&&jt.next!==null,mo=0,qt=jt=Et=null,th=!1,o)throw Error(t(300));return i}function ap(){var i=Gl!==0;return Gl=0,i}function Gr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Et.memoizedState=qt=i:qt=qt.next=i,qt}function ar(){if(jt===null){var i=Et.alternate;i=i!==null?i.memoizedState:null}else i=jt.next;var o=qt===null?Et.memoizedState:qt.next;if(o!==null)qt=o,jt=i;else{if(i===null)throw Error(t(310));jt=i,i={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},qt===null?Et.memoizedState=qt=i:qt=qt.next=i}return qt}function Kl(i,o){return typeof o=="function"?o(i):o}function lp(i){var o=ar(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=jt,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var R=T=null,N=null,W=_;do{var J=W.lane;if((mo&J)===J)N!==null&&(N=N.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:i(d,W.action);else{var Z={lane:J,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};N===null?(R=N=Z,T=d):N=N.next=Z,Et.lanes|=J,go|=J}W=W.next}while(W!==null&&W!==_);N===null?T=d:N.next=R,Sr(d,o.memoizedState)||(xn=!0),o.memoizedState=d,o.baseState=T,o.baseQueue=N,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Et.lanes|=_,go|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function up(i){var o=ar(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);Sr(_,o.memoizedState)||(xn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,d]}function My(){}function Ly(i,o){var l=Et,d=ar(),p=o(),_=!Sr(d.memoizedState,p);if(_&&(d.memoizedState=p,xn=!0),d=d.queue,cp(jy.bind(null,l,d,i),[i]),d.getSnapshot!==o||_||qt!==null&&qt.memoizedState.tag&1){if(l.flags|=2048,Ql(9,Fy.bind(null,l,d,p,o),void 0,null),Ht===null)throw Error(t(349));(mo&30)!==0||Vy(l,o,p)}return p}function Vy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Et.updateQueue,o===null?(o={lastEffect:null,stores:null},Et.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Fy(i,o,l,d){o.value=l,o.getSnapshot=d,Uy(o)&&By(i)}function jy(i,o,l){return l(function(){Uy(o)&&By(i)})}function Uy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Sr(i,l)}catch{return!0}}function By(i){var o=vi(i,1);o!==null&&kr(o,i,1,-1)}function zy(i){var o=Gr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:i},o.queue=i,i=i.dispatch=lA.bind(null,Et,i),[o.memoizedState,i]}function Ql(i,o,l,d){return i={tag:i,create:o,destroy:l,deps:d,next:null},o=Et.updateQueue,o===null?(o={lastEffect:null,stores:null},Et.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,o.lastEffect=i)),i}function Wy(){return ar().memoizedState}function nh(i,o,l,d){var p=Gr();Et.flags|=i,p.memoizedState=Ql(1|o,l,void 0,d===void 0?null:d)}function rh(i,o,l,d){var p=ar();d=d===void 0?null:d;var _=void 0;if(jt!==null){var T=jt.memoizedState;if(_=T.destroy,d!==null&&sp(d,T.deps)){p.memoizedState=Ql(o,l,_,d);return}}Et.flags|=i,p.memoizedState=Ql(1|o,l,_,d)}function $y(i,o){return nh(8390656,8,i,o)}function cp(i,o){return rh(2048,8,i,o)}function qy(i,o){return rh(4,2,i,o)}function Hy(i,o){return rh(4,4,i,o)}function Gy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Ky(i,o,l){return l=l!=null?l.concat([i]):null,rh(4,4,Gy.bind(null,o,i),l)}function hp(){}function Qy(i,o){var l=ar();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&sp(o,d[1])?d[0]:(l.memoizedState=[i,o],i)}function Yy(i,o){var l=ar();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&sp(o,d[1])?d[0]:(i=i(),l.memoizedState=[i,o],i)}function Xy(i,o,l){return(mo&21)===0?(i.baseState&&(i.baseState=!1,xn=!0),i.memoizedState=l):(Sr(l,o)||(l=ro(),Et.lanes|=l,go|=l,i.baseState=!0),o)}function oA(i,o){var l=$e;$e=l!==0&&4>l?l:4,i(!0);var d=ip.transition;ip.transition={};try{i(!1),o()}finally{$e=l,ip.transition=d}}function Jy(){return ar().memoizedState}function aA(i,o,l){var d=ls(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Zy(i))ev(o,l);else if(l=Ny(i,o,l,d),l!==null){var p=Tn();kr(l,i,d,p),tv(l,o,d)}}function lA(i,o,l){var d=ls(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Zy(i))ev(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,R=_(T,l);if(p.hasEagerState=!0,p.eagerState=R,Sr(R,T)){var N=o.interleaved;N===null?(p.next=p,Jf(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=Ny(i,o,p,d),l!==null&&(p=Tn(),kr(l,i,d,p),tv(l,o,d))}}function Zy(i){var o=i.alternate;return i===Et||o!==null&&o===Et}function ev(i,o){Hl=th=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function tv(i,o,l){if((l&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,Gi(i,l)}}var ih={readContext:or,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},uA={readContext:or,useCallback:function(i,o){return Gr().memoizedState=[i,o===void 0?null:o],i},useContext:or,useEffect:$y,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,nh(4194308,4,Gy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return nh(4194308,4,i,o)},useInsertionEffect:function(i,o){return nh(4,2,i,o)},useMemo:function(i,o){var l=Gr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var d=Gr();return o=l!==void 0?l(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=aA.bind(null,Et,i),[d.memoizedState,i]},useRef:function(i){var o=Gr();return i={current:i},o.memoizedState=i},useState:zy,useDebugValue:hp,useDeferredValue:function(i){return Gr().memoizedState=i},useTransition:function(){var i=zy(!1),o=i[0];return i=oA.bind(null,i[1]),Gr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var d=Et,p=Gr();if(yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ht===null)throw Error(t(349));(mo&30)!==0||Vy(d,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,$y(jy.bind(null,d,_,i),[i]),d.flags|=2048,Ql(9,Fy.bind(null,d,_,l,o),void 0,null),l},useId:function(){var i=Gr(),o=Ht.identifierPrefix;if(yt){var l=yi,d=_i;l=(d&~(1<<32-En(d)-1)).toString(32)+l,o=":"+o+"R"+l,l=Gl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=sA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},cA={readContext:or,useCallback:Qy,useContext:or,useEffect:cp,useImperativeHandle:Ky,useInsertionEffect:qy,useLayoutEffect:Hy,useMemo:Yy,useReducer:lp,useRef:Wy,useState:function(){return lp(Kl)},useDebugValue:hp,useDeferredValue:function(i){var o=ar();return Xy(o,jt.memoizedState,i)},useTransition:function(){var i=lp(Kl)[0],o=ar().memoizedState;return[i,o]},useMutableSource:My,useSyncExternalStore:Ly,useId:Jy,unstable_isNewReconciler:!1},hA={readContext:or,useCallback:Qy,useContext:or,useEffect:cp,useImperativeHandle:Ky,useInsertionEffect:qy,useLayoutEffect:Hy,useMemo:Yy,useReducer:up,useRef:Wy,useState:function(){return up(Kl)},useDebugValue:hp,useDeferredValue:function(i){var o=ar();return jt===null?o.memoizedState=i:Xy(o,jt.memoizedState,i)},useTransition:function(){var i=up(Kl)[0],o=ar().memoizedState;return[i,o]},useMutableSource:My,useSyncExternalStore:Ly,useId:Jy,unstable_isNewReconciler:!1};function Ar(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function dp(i,o,l,d){o=i.memoizedState,l=l(d,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var sh={isMounted:function(i){return(i=i._reactInternals)?_r(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var d=Tn(),p=ls(i),_=Ei(d,p);_.payload=o,l!=null&&(_.callback=l),o=is(i,_,p),o!==null&&(kr(o,i,p,d),Xc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var d=Tn(),p=ls(i),_=Ei(d,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=is(i,_,p),o!==null&&(kr(o,i,p,d),Xc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Tn(),d=ls(i),p=Ei(l,d);p.tag=2,o!=null&&(p.callback=o),o=is(i,p,d),o!==null&&(kr(o,i,d,l),Xc(o,i,d))}};function nv(i,o,l,d,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,T):o.prototype&&o.prototype.isPureReactComponent?!Ml(l,d)||!Ml(p,_):!0}function rv(i,o,l){var d=!1,p=ts,_=o.contextType;return typeof _=="object"&&_!==null?_=or(_):(p=Nn(o)?uo:hn.current,d=o.contextTypes,_=(d=d!=null)?pa(i,p):ts),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=sh,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function iv(i,o,l,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,d),o.state!==i&&sh.enqueueReplaceState(o,o.state,null)}function fp(i,o,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Zf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=or(_):(_=Nn(o)?uo:hn.current,p.context=pa(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(dp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&sh.enqueueReplaceState(p,p.state,null),Jc(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ia(i,o){try{var l="",d=o;do l+=we(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function pp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function mp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var dA=typeof WeakMap=="function"?WeakMap:Map;function sv(i,o,l){l=Ei(-1,l),l.tag=3,l.payload={element:null};var d=o.value;return l.callback=function(){dh||(dh=!0,Np=d),mp(i,o)},l}function ov(i,o,l){l=Ei(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;l.payload=function(){return d(p)},l.callback=function(){mp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){mp(i,o),typeof d!="function"&&(os===null?os=new Set([this]):os.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function av(i,o,l){var d=i.pingCache;if(d===null){d=i.pingCache=new dA;var p=new Set;d.set(o,p)}else p=d.get(o),p===void 0&&(p=new Set,d.set(o,p));p.has(l)||(p.add(l),i=AA.bind(null,i,o,l),o.then(i,i))}function lv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function uv(i,o,l,d,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ei(-1,1),o.tag=2,is(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var fA=se.ReactCurrentOwner,xn=!1;function In(i,o,l,d){o.child=i===null?ky(o,null,l,d):ya(o,i.child,l,d)}function cv(i,o,l,d,p){l=l.render;var _=o.ref;return Ea(o,p),d=op(i,o,l,d,_,p),l=ap(),i!==null&&!xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,wi(i,o,p)):(yt&&l&&Wf(o),o.flags|=1,In(i,o,d,p),o.child)}function hv(i,o,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!Vp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,dv(i,o,_,d,p)):(i=yh(l.type,null,d,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ml,l(T,d)&&i.ref===o.ref)return wi(i,o,p)}return o.flags|=1,i=cs(_,d),i.ref=o.ref,i.return=o,o.child=i}function dv(i,o,l,d,p){if(i!==null){var _=i.memoizedProps;if(Ml(_,d)&&i.ref===o.ref)if(xn=!1,o.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(xn=!0);else return o.lanes=i.lanes,wi(i,o,p)}return gp(i,o,l,d,p)}function fv(i,o,l){var d=o.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Sa,Hn),Hn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ct(Sa,Hn),Hn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,ct(Sa,Hn),Hn|=d}else _!==null?(d=_.baseLanes|l,o.memoizedState=null):d=l,ct(Sa,Hn),Hn|=d;return In(i,o,p,l),o.child}function pv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function gp(i,o,l,d,p){var _=Nn(l)?uo:hn.current;return _=pa(o,_),Ea(o,p),l=op(i,o,l,d,_,p),d=ap(),i!==null&&!xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,wi(i,o,p)):(yt&&d&&Wf(o),o.flags|=1,In(i,o,l,p),o.child)}function mv(i,o,l,d,p){if(Nn(l)){var _=!0;Wc(o)}else _=!1;if(Ea(o,p),o.stateNode===null)ah(i,o),rv(o,l,d),fp(o,l,d,p),d=!0;else if(i===null){var T=o.stateNode,R=o.memoizedProps;T.props=R;var N=T.context,W=l.contextType;typeof W=="object"&&W!==null?W=or(W):(W=Nn(l)?uo:hn.current,W=pa(o,W));var J=l.getDerivedStateFromProps,Z=typeof J=="function"||typeof T.getSnapshotBeforeUpdate=="function";Z||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(R!==d||N!==W)&&iv(o,T,d,W),rs=!1;var X=o.memoizedState;T.state=X,Jc(o,d,T,p),N=o.memoizedState,R!==d||X!==N||kn.current||rs?(typeof J=="function"&&(dp(o,l,J,d),N=o.memoizedState),(R=rs||nv(o,l,R,d,X,N,W))?(Z||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=N),T.props=d,T.state=N,T.context=W,d=R):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{T=o.stateNode,xy(i,o),R=o.memoizedProps,W=o.type===o.elementType?R:Ar(o.type,R),T.props=W,Z=o.pendingProps,X=T.context,N=l.contextType,typeof N=="object"&&N!==null?N=or(N):(N=Nn(l)?uo:hn.current,N=pa(o,N));var le=l.getDerivedStateFromProps;(J=typeof le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(R!==Z||X!==N)&&iv(o,T,d,N),rs=!1,X=o.memoizedState,T.state=X,Jc(o,d,T,p);var he=o.memoizedState;R!==Z||X!==he||kn.current||rs?(typeof le=="function"&&(dp(o,l,le,d),he=o.memoizedState),(W=rs||nv(o,l,W,d,X,he,N)||!1)?(J||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,he,N),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,he,N)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=he),T.props=d,T.state=he,T.context=N,d=W):(typeof T.componentDidUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),d=!1)}return _p(i,o,l,d,_,p)}function _p(i,o,l,d,p,_){pv(i,o);var T=(o.flags&128)!==0;if(!d&&!T)return p&&Ey(o,l,!1),wi(i,o,_);d=o.stateNode,fA.current=o;var R=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&T?(o.child=ya(o,i.child,null,_),o.child=ya(o,null,R,_)):In(i,o,R,_),o.memoizedState=d.state,p&&Ey(o,l,!0),o.child}function gv(i){var o=i.stateNode;o.pendingContext?yy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&yy(i,o.context,!1),ep(i,o.containerInfo)}function _v(i,o,l,d,p){return _a(),Gf(p),o.flags|=256,In(i,o,l,d),o.child}var yp={dehydrated:null,treeContext:null,retryLane:0};function vp(i){return{baseLanes:i,cachePool:null,transitions:null}}function yv(i,o,l){var d=o.pendingProps,p=vt.current,_=!1,T=(o.flags&128)!==0,R;if((R=T)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ct(vt,p&1),i===null)return Hf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=d.children,i=d.fallback,_?(d=o.mode,_=o.child,T={mode:"hidden",children:T},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=vh(T,d,0,null),i=Eo(i,d,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=vp(l),o.memoizedState=yp,i):Ep(o,T));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return pA(i,o,T,d,R,p,l);if(_){_=d.fallback,T=o.mode,p=i.child,R=p.sibling;var N={mode:"hidden",children:d.children};return(T&1)===0&&o.child!==p?(d=o.child,d.childLanes=0,d.pendingProps=N,o.deletions=null):(d=cs(p,N),d.subtreeFlags=p.subtreeFlags&14680064),R!==null?_=cs(R,_):(_=Eo(_,T,l,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,T=i.child.memoizedState,T=T===null?vp(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,o.memoizedState=yp,d}return _=i.child,i=_.sibling,d=cs(_,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=l),d.return=o,d.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=d,o.memoizedState=null,d}function Ep(i,o){return o=vh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function oh(i,o,l,d){return d!==null&&Gf(d),ya(o,i.child,null,l),i=Ep(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function pA(i,o,l,d,p,_,T){if(l)return o.flags&256?(o.flags&=-257,d=pp(Error(t(422))),oh(i,o,T,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=d.fallback,p=o.mode,d=vh({mode:"visible",children:d.children},p,0,null),_=Eo(_,p,T,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,(o.mode&1)!==0&&ya(o,i.child,null,T),o.child.memoizedState=vp(T),o.memoizedState=yp,_);if((o.mode&1)===0)return oh(i,o,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var R=d.dgst;return d=R,_=Error(t(419)),d=pp(_,d,void 0),oh(i,o,T,d)}if(R=(T&i.childLanes)!==0,xn||R){if(d=Ht,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,vi(i,p),kr(d,i,p,-1))}return Lp(),d=pp(Error(t(421))),oh(i,o,T,d)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=RA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,qn=Zi(p.nextSibling),$n=o,yt=!0,Cr=null,i!==null&&(ir[sr++]=_i,ir[sr++]=yi,ir[sr++]=co,_i=i.id,yi=i.overflow,co=o),o=Ep(o,d.children),o.flags|=4096,o)}function vv(i,o,l){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),Xf(i.return,o,l)}function wp(i,o,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function Ev(i,o,l){var d=o.pendingProps,p=d.revealOrder,_=d.tail;if(In(i,o,d.children,l),d=vt.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&vv(i,l,o);else if(i.tag===19)vv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(ct(vt,d),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Zc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),wp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Zc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}wp(o,!0,l,null,_);break;case"together":wp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ah(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function wi(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),go|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=cs(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=cs(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function mA(i,o,l){switch(o.tag){case 3:gv(o),_a();break;case 5:Oy(o);break;case 1:Nn(o.type)&&Wc(o);break;case 4:ep(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,p=o.memoizedProps.value;ct(Qc,d._currentValue),d._currentValue=p;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(ct(vt,vt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?yv(i,o,l):(ct(vt,vt.current&1),i=wi(i,o,l),i!==null?i.sibling:null);ct(vt,vt.current&1);break;case 19:if(d=(l&o.childLanes)!==0,(i.flags&128)!==0){if(d)return Ev(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ct(vt,vt.current),d)break;return null;case 22:case 23:return o.lanes=0,fv(i,o,l)}return wi(i,o,l)}var wv,Ip,Iv,Tv;wv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ip=function(){},Iv=function(i,o,l,d){var p=i.memoizedProps;if(p!==d){i=o.stateNode,po(Hr.current);var _=null;switch(l){case"input":p=Yn(i,p),d=Yn(i,d),_=[];break;case"select":p=ae({},p,{value:void 0}),d=ae({},d,{value:void 0}),_=[];break;case"textarea":p=Zn(i,p),d=Zn(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Uc)}Qs(l,d);var T;l=null;for(W in p)if(!d.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var R=p[W];for(T in R)R.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?_||(_=[]):(_=_||[]).push(W,null));for(W in d){var N=d[W];if(R=p!=null?p[W]:void 0,d.hasOwnProperty(W)&&N!==R&&(N!=null||R!=null))if(W==="style")if(R){for(T in R)!R.hasOwnProperty(T)||N&&N.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in N)N.hasOwnProperty(T)&&R[T]!==N[T]&&(l||(l={}),l[T]=N[T])}else l||(_||(_=[]),_.push(W,l)),l=N;else W==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,R=R?R.__html:void 0,N!=null&&R!==N&&(_=_||[]).push(W,N)):W==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push(W,""+N):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(N!=null&&W==="onScroll"&&pt("scroll",i),_||R===N||(_=[])):(_=_||[]).push(W,N))}l&&(_=_||[]).push("style",l);var W=_;(o.updateQueue=W)&&(o.flags|=4)}},Tv=function(i,o,l,d){l!==d&&(o.flags|=4)};function Yl(i,o){if(!yt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function fn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,o}function gA(i,o,l){var d=o.pendingProps;switch($f(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(o),null;case 1:return Nn(o.type)&&zc(),fn(o),null;case 3:return d=o.stateNode,wa(),mt(kn),mt(hn),rp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Gc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Cr!==null&&(Dp(Cr),Cr=null))),Ip(i,o),fn(o),null;case 5:tp(o);var p=po(ql.current);if(l=o.type,i!==null&&o.stateNode!=null)Iv(i,o,l,d,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return fn(o),null}if(i=po(Hr.current),Gc(o)){d=o.stateNode,l=o.type;var _=o.memoizedProps;switch(d[qr]=o,d[Ul]=_,i=(o.mode&1)!==0,l){case"dialog":pt("cancel",d),pt("close",d);break;case"iframe":case"object":case"embed":pt("load",d);break;case"video":case"audio":for(p=0;p<Vl.length;p++)pt(Vl[p],d);break;case"source":pt("error",d);break;case"img":case"image":case"link":pt("error",d),pt("load",d);break;case"details":pt("toggle",d);break;case"input":st(d,_),pt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},pt("invalid",d);break;case"textarea":jn(d,_),pt("invalid",d)}Qs(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var R=_[T];T==="children"?typeof R=="string"?d.textContent!==R&&(_.suppressHydrationWarning!==!0&&jc(d.textContent,R,i),p=["children",R]):typeof R=="number"&&d.textContent!==""+R&&(_.suppressHydrationWarning!==!0&&jc(d.textContent,R,i),p=["children",""+R]):s.hasOwnProperty(T)&&R!=null&&T==="onScroll"&&pt("scroll",d)}switch(l){case"input":Zt(d),vn(d,_,!0);break;case"textarea":Zt(d),Ui(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Uc)}d=p,o.updateQueue=d,d!==null&&(o.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Tt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=T.createElement(l,{is:d.is}):(i=T.createElement(l),l==="select"&&(T=i,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):i=T.createElementNS(i,l),i[qr]=o,i[Ul]=d,wv(i,o,!1,!1),o.stateNode=i;e:{switch(T=zi(l,d),l){case"dialog":pt("cancel",i),pt("close",i),p=d;break;case"iframe":case"object":case"embed":pt("load",i),p=d;break;case"video":case"audio":for(p=0;p<Vl.length;p++)pt(Vl[p],i);p=d;break;case"source":pt("error",i),p=d;break;case"img":case"image":case"link":pt("error",i),pt("load",i),p=d;break;case"details":pt("toggle",i),p=d;break;case"input":st(i,d),p=Yn(i,d),pt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=ae({},d,{value:void 0}),pt("invalid",i);break;case"textarea":jn(i,d),p=Zn(i,d),pt("invalid",i);break;default:p=d}Qs(l,p),R=p;for(_ in R)if(R.hasOwnProperty(_)){var N=R[_];_==="style"?Bi(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Hs(i,N)):_==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&pr(i,N):typeof N=="number"&&pr(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&pt("scroll",i):N!=null&&ee(i,_,N,T))}switch(l){case"input":Zt(i),vn(i,d,!1);break;case"textarea":Zt(i),Ui(i);break;case"option":d.value!=null&&i.setAttribute("value",""+qe(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?Jn(i,!!d.multiple,_,!1):d.defaultValue!=null&&Jn(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Uc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return fn(o),null;case 6:if(i&&o.stateNode!=null)Tv(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(l=po(ql.current),po(Hr.current),Gc(o)){if(d=o.stateNode,l=o.memoizedProps,d[qr]=o,(_=d.nodeValue!==l)&&(i=$n,i!==null))switch(i.tag){case 3:jc(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&jc(d.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[qr]=o,o.stateNode=d}return fn(o),null;case 13:if(mt(vt),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(yt&&qn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ay(),_a(),o.flags|=98560,_=!1;else if(_=Gc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[qr]=o}else _a(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;fn(o),_=!1}else Cr!==null&&(Dp(Cr),Cr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(vt.current&1)!==0?Ut===0&&(Ut=3):Lp())),o.updateQueue!==null&&(o.flags|=4),fn(o),null);case 4:return wa(),Ip(i,o),i===null&&Fl(o.stateNode.containerInfo),fn(o),null;case 10:return Yf(o.type._context),fn(o),null;case 17:return Nn(o.type)&&zc(),fn(o),null;case 19:if(mt(vt),_=o.memoizedState,_===null)return fn(o),null;if(d=(o.flags&128)!==0,T=_.rendering,T===null)if(d)Yl(_,!1);else{if(Ut!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(T=Zc(i),T!==null){for(o.flags|=128,Yl(_,!1),d=T.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=l,l=o.child;l!==null;)_=l,i=d,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ct(vt,vt.current&1|2),o.child}i=i.sibling}_.tail!==null&&ut()>Ca&&(o.flags|=128,d=!0,Yl(_,!1),o.lanes=4194304)}else{if(!d)if(i=Zc(T),i!==null){if(o.flags|=128,d=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Yl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!yt)return fn(o),null}else 2*ut()-_.renderingStartTime>Ca&&l!==1073741824&&(o.flags|=128,d=!0,Yl(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(l=_.last,l!==null?l.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=ut(),o.sibling=null,l=vt.current,ct(vt,d?l&1|2:l&1),o):(fn(o),null);case 22:case 23:return Mp(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(Hn&1073741824)!==0&&(fn(o),o.subtreeFlags&6&&(o.flags|=8192)):fn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function _A(i,o){switch($f(o),o.tag){case 1:return Nn(o.type)&&zc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return wa(),mt(kn),mt(hn),rp(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return tp(o),null;case 13:if(mt(vt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));_a()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return mt(vt),null;case 4:return wa(),null;case 10:return Yf(o.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var lh=!1,pn=!1,yA=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Ta(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){St(i,o,d)}else l.current=null}function Tp(i,o,l){try{l()}catch(d){St(i,o,d)}}var Sv=!1;function vA(i,o){if(Mf=Yi,i=ny(),Rf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,R=-1,N=-1,W=0,J=0,Z=i,X=null;t:for(;;){for(var le;Z!==l||p!==0&&Z.nodeType!==3||(R=T+p),Z!==_||d!==0&&Z.nodeType!==3||(N=T+d),Z.nodeType===3&&(T+=Z.nodeValue.length),(le=Z.firstChild)!==null;)X=Z,Z=le;for(;;){if(Z===i)break t;if(X===l&&++W===p&&(R=T),X===_&&++J===d&&(N=T),(le=Z.nextSibling)!==null)break;Z=X,X=Z.parentNode}Z=le}l=R===-1||N===-1?null:{start:R,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Lf={focusedElem:i,selectionRange:l},Yi=!1,ce=o;ce!==null;)if(o=ce,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ce=i;else for(;ce!==null;){o=ce;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,kt=he.memoizedState,U=o.stateNode,M=U.getSnapshotBeforeUpdate(o.elementType===o.type?de:Ar(o.type,de),kt);U.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var z=o.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){St(o,o.return,te)}if(i=o.sibling,i!==null){i.return=o.return,ce=i;break}ce=o.return}return he=Sv,Sv=!1,he}function Xl(i,o,l){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Tp(o,l,_)}p=p.next}while(p!==d)}}function uh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==o)}}function Sp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Cv(i){var o=i.alternate;o!==null&&(i.alternate=null,Cv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[qr],delete o[Ul],delete o[Uf],delete o[tA],delete o[nA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Av(i){return i.tag===5||i.tag===3||i.tag===4}function Rv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Av(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Cp(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Uc));else if(d!==4&&(i=i.child,i!==null))for(Cp(i,o,l),i=i.sibling;i!==null;)Cp(i,o,l),i=i.sibling}function Ap(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Ap(i,o,l),i=i.sibling;i!==null;)Ap(i,o,l),i=i.sibling}var nn=null,Rr=!1;function ss(i,o,l){for(l=l.child;l!==null;)Pv(i,o,l),l=l.sibling}function Pv(i,o,l){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(to,l)}catch{}switch(l.tag){case 5:pn||Ta(l,o);case 6:var d=nn,p=Rr;nn=null,ss(i,o,l),nn=d,Rr=p,nn!==null&&(Rr?(i=nn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):nn.removeChild(l.stateNode));break;case 18:nn!==null&&(Rr?(i=nn,l=l.stateNode,i.nodeType===8?jf(i.parentNode,l):i.nodeType===1&&jf(i,l),Ir(i)):jf(nn,l.stateNode));break;case 4:d=nn,p=Rr,nn=l.stateNode.containerInfo,Rr=!0,ss(i,o,l),nn=d,Rr=p;break;case 0:case 11:case 14:case 15:if(!pn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Tp(l,o,T),p=p.next}while(p!==d)}ss(i,o,l);break;case 1:if(!pn&&(Ta(l,o),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(R){St(l,o,R)}ss(i,o,l);break;case 21:ss(i,o,l);break;case 22:l.mode&1?(pn=(d=pn)||l.memoizedState!==null,ss(i,o,l),pn=d):ss(i,o,l);break;default:ss(i,o,l)}}function kv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new yA),o.forEach(function(d){var p=PA.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Pr(i,o){var l=o.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,T=o,R=T;e:for(;R!==null;){switch(R.tag){case 5:nn=R.stateNode,Rr=!1;break e;case 3:nn=R.stateNode.containerInfo,Rr=!0;break e;case 4:nn=R.stateNode.containerInfo,Rr=!0;break e}R=R.return}if(nn===null)throw Error(t(160));Pv(_,T,p),nn=null,Rr=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch(W){St(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Nv(o,i),o=o.sibling}function Nv(i,o){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Pr(o,i),Kr(i),d&4){try{Xl(3,i,i.return),uh(3,i)}catch(de){St(i,i.return,de)}try{Xl(5,i,i.return)}catch(de){St(i,i.return,de)}}break;case 1:Pr(o,i),Kr(i),d&512&&l!==null&&Ta(l,l.return);break;case 5:if(Pr(o,i),Kr(i),d&512&&l!==null&&Ta(l,l.return),i.flags&32){var p=i.stateNode;try{pr(p,"")}catch(de){St(i,i.return,de)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,R=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{R==="input"&&_.type==="radio"&&_.name!=null&&Bo(p,_),zi(R,T);var W=zi(R,_);for(T=0;T<N.length;T+=2){var J=N[T],Z=N[T+1];J==="style"?Bi(p,Z):J==="dangerouslySetInnerHTML"?Hs(p,Z):J==="children"?pr(p,Z):ee(p,J,Z,W)}switch(R){case"input":un(p,_);break;case"textarea":oi(p,_);break;case"select":var X=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var le=_.value;le!=null?Jn(p,!!_.multiple,le,!1):X!==!!_.multiple&&(_.defaultValue!=null?Jn(p,!!_.multiple,_.defaultValue,!0):Jn(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ul]=_}catch(de){St(i,i.return,de)}}break;case 6:if(Pr(o,i),Kr(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(de){St(i,i.return,de)}}break;case 3:if(Pr(o,i),Kr(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Ir(o.containerInfo)}catch(de){St(i,i.return,de)}break;case 4:Pr(o,i),Kr(i);break;case 13:Pr(o,i),Kr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(kp=ut())),d&4&&kv(i);break;case 22:if(J=l!==null&&l.memoizedState!==null,i.mode&1?(pn=(W=pn)||J,Pr(o,i),pn=W):Pr(o,i),Kr(i),d&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!J&&(i.mode&1)!==0)for(ce=i,J=i.child;J!==null;){for(Z=ce=J;ce!==null;){switch(X=ce,le=X.child,X.tag){case 0:case 11:case 14:case 15:Xl(4,X,X.return);break;case 1:Ta(X,X.return);var he=X.stateNode;if(typeof he.componentWillUnmount=="function"){d=X,l=X.return;try{o=d,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(de){St(d,l,de)}}break;case 5:Ta(X,X.return);break;case 22:if(X.memoizedState!==null){Dv(Z);continue}}le!==null?(le.return=X,ce=le):Dv(Z)}J=J.sibling}e:for(J=null,Z=i;;){if(Z.tag===5){if(J===null){J=Z;try{p=Z.stateNode,W?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(R=Z.stateNode,N=Z.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null,R.style.display=Gs("display",T))}catch(de){St(i,i.return,de)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=W?"":Z.memoizedProps}catch(de){St(i,i.return,de)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===i)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===i)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===i)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Pr(o,i),Kr(i),d&4&&kv(i);break;case 21:break;default:Pr(o,i),Kr(i)}}function Kr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Av(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(pr(p,""),d.flags&=-33);var _=Rv(i);Ap(i,_,p);break;case 3:case 4:var T=d.stateNode.containerInfo,R=Rv(i);Cp(i,R,T);break;default:throw Error(t(161))}}catch(N){St(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function EA(i,o,l){ce=i,xv(i)}function xv(i,o,l){for(var d=(i.mode&1)!==0;ce!==null;){var p=ce,_=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||lh;if(!T){var R=p.alternate,N=R!==null&&R.memoizedState!==null||pn;R=lh;var W=pn;if(lh=T,(pn=N)&&!W)for(ce=p;ce!==null;)T=ce,N=T.child,T.tag===22&&T.memoizedState!==null?Ov(p):N!==null?(N.return=T,ce=N):Ov(p);for(;_!==null;)ce=_,xv(_),_=_.sibling;ce=p,lh=R,pn=W}bv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ce=_):bv(i)}}function bv(i){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:pn||uh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!pn)if(l===null)d.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Ar(o.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Dy(o,_,d);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Dy(o,T,l)}break;case 5:var R=o.stateNode;if(l===null&&o.flags&4){l=R;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var J=W.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&Ir(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||o.flags&512&&Sp(o)}catch(X){St(o,o.return,X)}}if(o===i){ce=null;break}if(l=o.sibling,l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Dv(i){for(;ce!==null;){var o=ce;if(o===i){ce=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Ov(i){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{uh(4,o)}catch(N){St(o,l,N)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var p=o.return;try{d.componentDidMount()}catch(N){St(o,p,N)}}var _=o.return;try{Sp(o)}catch(N){St(o,_,N)}break;case 5:var T=o.return;try{Sp(o)}catch(N){St(o,T,N)}}}catch(N){St(o,o.return,N)}if(o===i){ce=null;break}var R=o.sibling;if(R!==null){R.return=o.return,ce=R;break}ce=o.return}}var wA=Math.ceil,ch=se.ReactCurrentDispatcher,Rp=se.ReactCurrentOwner,lr=se.ReactCurrentBatchConfig,Ke=0,Ht=null,Dt=null,rn=0,Hn=0,Sa=es(0),Ut=0,Jl=null,go=0,hh=0,Pp=0,Zl=null,bn=null,kp=0,Ca=1/0,Ii=null,dh=!1,Np=null,os=null,fh=!1,as=null,ph=0,eu=0,xp=null,mh=-1,gh=0;function Tn(){return(Ke&6)!==0?ut():mh!==-1?mh:mh=ut()}function ls(i){return(i.mode&1)===0?1:(Ke&2)!==0&&rn!==0?rn&-rn:iA.transition!==null?(gh===0&&(gh=ro()),gh):(i=$e,i!==0||(i=window.event,i=i===void 0?16:Pl(i.type)),i)}function kr(i,o,l,d){if(50<eu)throw eu=0,xp=null,Error(t(185));Hi(i,l,d),((Ke&2)===0||i!==Ht)&&(i===Ht&&((Ke&2)===0&&(hh|=l),Ut===4&&us(i,rn)),Dn(i,d),l===1&&Ke===0&&(o.mode&1)===0&&(Ca=ut()+500,$c&&ns()))}function Dn(i,o){var l=i.callbackNode;ci(i,o);var d=no(i,i===Ht?rn:0);if(d===0)l!==null&&Tl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(l!=null&&Tl(l),o===1)i.tag===0?rA(Lv.bind(null,i)):wy(Lv.bind(null,i)),ZC(function(){(Ke&6)===0&&ns()}),l=null;else{switch(Ki(d)){case 1:l=eo;break;case 4:l=Wi;break;case 16:l=tr;break;case 536870912:l=gc;break;default:l=tr}l=$v(l,Mv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Mv(i,o){if(mh=-1,gh=0,(Ke&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Aa()&&i.callbackNode!==l)return null;var d=no(i,i===Ht?rn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=_h(i,d);else{o=d;var p=Ke;Ke|=2;var _=Fv();(Ht!==i||rn!==o)&&(Ii=null,Ca=ut()+500,yo(i,o));do try{SA();break}catch(R){Vv(i,R)}while(!0);Qf(),ch.current=_,Ke=p,Dt!==null?o=0:(Ht=null,rn=0,o=Ut)}if(o!==0){if(o===2&&(p=Bn(i),p!==0&&(d=p,o=bp(i,p))),o===1)throw l=Jl,yo(i,0),us(i,d),Dn(i,ut()),l;if(o===6)us(i,d);else{if(p=i.current.alternate,(d&30)===0&&!IA(p)&&(o=_h(i,d),o===2&&(_=Bn(i),_!==0&&(d=_,o=bp(i,_))),o===1))throw l=Jl,yo(i,0),us(i,d),Dn(i,ut()),l;switch(i.finishedWork=p,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:vo(i,bn,Ii);break;case 3:if(us(i,d),(d&130023424)===d&&(o=kp+500-ut(),10<o)){if(no(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Tn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Ff(vo.bind(null,i,bn,Ii),o);break}vo(i,bn,Ii);break;case 4:if(us(i,d),(d&4194240)===d)break;for(o=i.eventTimes,p=-1;0<d;){var T=31-En(d);_=1<<T,T=o[T],T>p&&(p=T),d&=~_}if(d=p,d=ut()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*wA(d/1960))-d,10<d){i.timeoutHandle=Ff(vo.bind(null,i,bn,Ii),d);break}vo(i,bn,Ii);break;case 5:vo(i,bn,Ii);break;default:throw Error(t(329))}}}return Dn(i,ut()),i.callbackNode===l?Mv.bind(null,i):null}function bp(i,o){var l=Zl;return i.current.memoizedState.isDehydrated&&(yo(i,o).flags|=256),i=_h(i,o),i!==2&&(o=bn,bn=l,o!==null&&Dp(o)),i}function Dp(i){bn===null?bn=i:bn.push.apply(bn,i)}function IA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!Sr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function us(i,o){for(o&=~Pp,o&=~hh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-En(o),d=1<<l;i[l]=-1,o&=~d}}function Lv(i){if((Ke&6)!==0)throw Error(t(327));Aa();var o=no(i,0);if((o&1)===0)return Dn(i,ut()),null;var l=_h(i,o);if(i.tag!==0&&l===2){var d=Bn(i);d!==0&&(o=d,l=bp(i,d))}if(l===1)throw l=Jl,yo(i,0),us(i,o),Dn(i,ut()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,vo(i,bn,Ii),Dn(i,ut()),null}function Op(i,o){var l=Ke;Ke|=1;try{return i(o)}finally{Ke=l,Ke===0&&(Ca=ut()+500,$c&&ns())}}function _o(i){as!==null&&as.tag===0&&(Ke&6)===0&&Aa();var o=Ke;Ke|=1;var l=lr.transition,d=$e;try{if(lr.transition=null,$e=1,i)return i()}finally{$e=d,lr.transition=l,Ke=o,(Ke&6)===0&&ns()}}function Mp(){Hn=Sa.current,mt(Sa)}function yo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,JC(l)),Dt!==null)for(l=Dt.return;l!==null;){var d=l;switch($f(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&zc();break;case 3:wa(),mt(kn),mt(hn),rp();break;case 5:tp(d);break;case 4:wa();break;case 13:mt(vt);break;case 19:mt(vt);break;case 10:Yf(d.type._context);break;case 22:case 23:Mp()}l=l.return}if(Ht=i,Dt=i=cs(i.current,null),rn=Hn=o,Ut=0,Jl=null,Pp=hh=go=0,bn=Zl=null,fo!==null){for(o=0;o<fo.length;o++)if(l=fo[o],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,d.next=T}l.pending=d}fo=null}return i}function Vv(i,o){do{var l=Dt;try{if(Qf(),eh.current=ih,th){for(var d=Et.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}th=!1}if(mo=0,qt=jt=Et=null,Hl=!1,Gl=0,Rp.current=null,l===null||l.return===null){Ut=1,Jl=o,Dt=null;break}e:{var _=i,T=l.return,R=l,N=o;if(o=rn,R.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var W=N,J=R,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var le=lv(T);if(le!==null){le.flags&=-257,uv(le,T,R,_,o),le.mode&1&&av(_,W,o),o=le,N=W;var he=o.updateQueue;if(he===null){var de=new Set;de.add(N),o.updateQueue=de}else he.add(N);break e}else{if((o&1)===0){av(_,W,o),Lp();break e}N=Error(t(426))}}else if(yt&&R.mode&1){var kt=lv(T);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),uv(kt,T,R,_,o),Gf(Ia(N,R));break e}}_=N=Ia(N,R),Ut!==4&&(Ut=2),Zl===null?Zl=[_]:Zl.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=sv(_,N,o);by(_,U);break e;case 1:R=N;var M=_.type,z=_.stateNode;if((_.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(os===null||!os.has(z)))){_.flags|=65536,o&=-o,_.lanes|=o;var te=ov(_,R,o);by(_,te);break e}}_=_.return}while(_!==null)}Uv(l)}catch(me){o=me,Dt===l&&l!==null&&(Dt=l=l.return);continue}break}while(!0)}function Fv(){var i=ch.current;return ch.current=ih,i===null?ih:i}function Lp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Ht===null||(go&268435455)===0&&(hh&268435455)===0||us(Ht,rn)}function _h(i,o){var l=Ke;Ke|=2;var d=Fv();(Ht!==i||rn!==o)&&(Ii=null,yo(i,o));do try{TA();break}catch(p){Vv(i,p)}while(!0);if(Qf(),Ke=l,ch.current=d,Dt!==null)throw Error(t(261));return Ht=null,rn=0,Ut}function TA(){for(;Dt!==null;)jv(Dt)}function SA(){for(;Dt!==null&&!pc();)jv(Dt)}function jv(i){var o=Wv(i.alternate,i,Hn);i.memoizedProps=i.pendingProps,o===null?Uv(i):Dt=o,Rp.current=null}function Uv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=gA(l,o,Hn),l!==null){Dt=l;return}}else{if(l=_A(l,o),l!==null){l.flags&=32767,Dt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ut=6,Dt=null;return}}if(o=o.sibling,o!==null){Dt=o;return}Dt=o=i}while(o!==null);Ut===0&&(Ut=5)}function vo(i,o,l){var d=$e,p=lr.transition;try{lr.transition=null,$e=1,CA(i,o,l,d)}finally{lr.transition=p,$e=d}return null}function CA(i,o,l,d){do Aa();while(as!==null);if((Ke&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(at(i,_),i===Ht&&(Dt=Ht=null,rn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||fh||(fh=!0,$v(tr,function(){return Aa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=lr.transition,lr.transition=null;var T=$e;$e=1;var R=Ke;Ke|=4,Rp.current=null,vA(i,l),Nv(l,i),qC(Lf),Yi=!!Mf,Lf=Mf=null,i.current=l,EA(l),vf(),Ke=R,$e=T,lr.transition=_}else i.current=l;if(fh&&(fh=!1,as=i,ph=p),_=i.pendingLanes,_===0&&(os=null),_c(l.stateNode),Dn(i,ut()),o!==null)for(d=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(dh)throw dh=!1,i=Np,Np=null,i;return(ph&1)!==0&&i.tag!==0&&Aa(),_=i.pendingLanes,(_&1)!==0?i===xp?eu++:(eu=0,xp=i):eu=0,ns(),null}function Aa(){if(as!==null){var i=Ki(ph),o=lr.transition,l=$e;try{if(lr.transition=null,$e=16>i?16:i,as===null)var d=!1;else{if(i=as,as=null,ph=0,(Ke&6)!==0)throw Error(t(331));var p=Ke;for(Ke|=4,ce=i.current;ce!==null;){var _=ce,T=_.child;if((ce.flags&16)!==0){var R=_.deletions;if(R!==null){for(var N=0;N<R.length;N++){var W=R[N];for(ce=W;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:Xl(8,J,_)}var Z=J.child;if(Z!==null)Z.return=J,ce=Z;else for(;ce!==null;){J=ce;var X=J.sibling,le=J.return;if(Cv(J),J===W){ce=null;break}if(X!==null){X.return=le,ce=X;break}ce=le}}}var he=_.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var kt=de.sibling;de.sibling=null,de=kt}while(de!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,ce=T;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Xl(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,ce=U;break e}ce=_.return}}var M=i.current;for(ce=M;ce!==null;){T=ce;var z=T.child;if((T.subtreeFlags&2064)!==0&&z!==null)z.return=T,ce=z;else e:for(T=M;ce!==null;){if(R=ce,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:uh(9,R)}}catch(me){St(R,R.return,me)}if(R===T){ce=null;break e}var te=R.sibling;if(te!==null){te.return=R.return,ce=te;break e}ce=R.return}}if(Ke=p,ns(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(to,i)}catch{}d=!0}return d}finally{$e=l,lr.transition=o}}return!1}function Bv(i,o,l){o=Ia(l,o),o=sv(i,o,1),i=is(i,o,1),o=Tn(),i!==null&&(Hi(i,1,o),Dn(i,o))}function St(i,o,l){if(i.tag===3)Bv(i,i,l);else for(;o!==null;){if(o.tag===3){Bv(o,i,l);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(os===null||!os.has(d))){i=Ia(l,i),i=ov(o,i,1),o=is(o,i,1),i=Tn(),o!==null&&(Hi(o,1,i),Dn(o,i));break}}o=o.return}}function AA(i,o,l){var d=i.pingCache;d!==null&&d.delete(o),o=Tn(),i.pingedLanes|=i.suspendedLanes&l,Ht===i&&(rn&l)===l&&(Ut===4||Ut===3&&(rn&130023424)===rn&&500>ut()-kp?yo(i,0):Pp|=l),Dn(i,o)}function zv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Qo,Qo<<=1,(Qo&130023424)===0&&(Qo=4194304)));var l=Tn();i=vi(i,o),i!==null&&(Hi(i,o,l),Dn(i,l))}function RA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),zv(i,l)}function PA(i,o){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),zv(i,l)}var Wv;Wv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||kn.current)xn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return xn=!1,mA(i,o,l);xn=(i.flags&131072)!==0}else xn=!1,yt&&(o.flags&1048576)!==0&&Iy(o,Hc,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;ah(i,o),i=o.pendingProps;var p=pa(o,hn.current);Ea(o,l),p=op(null,o,d,i,p,l);var _=ap();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Nn(d)?(_=!0,Wc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Zf(o),p.updater=sh,o.stateNode=p,p._reactInternals=o,fp(o,d,i,l),o=_p(null,o,d,!0,_,l)):(o.tag=0,yt&&_&&Wf(o),In(null,o,p,l),o=o.child),o;case 16:d=o.elementType;e:{switch(ah(i,o),i=o.pendingProps,p=d._init,d=p(d._payload),o.type=d,p=o.tag=NA(d),i=Ar(d,i),p){case 0:o=gp(null,o,d,i,l);break e;case 1:o=mv(null,o,d,i,l);break e;case 11:o=cv(null,o,d,i,l);break e;case 14:o=hv(null,o,d,Ar(d.type,i),l);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Ar(d,p),gp(i,o,d,p,l);case 1:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Ar(d,p),mv(i,o,d,p,l);case 3:e:{if(gv(o),i===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,p=_.element,xy(i,o),Jc(o,d,null,l);var T=o.memoizedState;if(d=T.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ia(Error(t(423)),o),o=_v(i,o,d,l,p);break e}else if(d!==p){p=Ia(Error(t(424)),o),o=_v(i,o,d,l,p);break e}else for(qn=Zi(o.stateNode.containerInfo.firstChild),$n=o,yt=!0,Cr=null,l=ky(o,null,d,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(_a(),d===p){o=wi(i,o,l);break e}In(i,o,d,l)}o=o.child}return o;case 5:return Oy(o),i===null&&Hf(o),d=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Vf(d,p)?T=null:_!==null&&Vf(d,_)&&(o.flags|=32),pv(i,o),In(i,o,T,l),o.child;case 6:return i===null&&Hf(o),null;case 13:return yv(i,o,l);case 4:return ep(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=ya(o,null,d,l):In(i,o,d,l),o.child;case 11:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Ar(d,p),cv(i,o,d,p,l);case 7:return In(i,o,o.pendingProps,l),o.child;case 8:return In(i,o,o.pendingProps.children,l),o.child;case 12:return In(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(d=o.type._context,p=o.pendingProps,_=o.memoizedProps,T=p.value,ct(Qc,d._currentValue),d._currentValue=T,_!==null)if(Sr(_.value,T)){if(_.children===p.children&&!kn.current){o=wi(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var R=_.dependencies;if(R!==null){T=_.child;for(var N=R.firstContext;N!==null;){if(N.context===d){if(_.tag===1){N=Ei(-1,l&-l),N.tag=2;var W=_.updateQueue;if(W!==null){W=W.shared;var J=W.pending;J===null?N.next=N:(N.next=J.next,J.next=N),W.pending=N}}_.lanes|=l,N=_.alternate,N!==null&&(N.lanes|=l),Xf(_.return,l,o),R.lanes|=l;break}N=N.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,R=T.alternate,R!==null&&(R.lanes|=l),Xf(T,l,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}In(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,d=o.pendingProps.children,Ea(o,l),p=or(p),d=d(p),o.flags|=1,In(i,o,d,l),o.child;case 14:return d=o.type,p=Ar(d,o.pendingProps),p=Ar(d.type,p),hv(i,o,d,p,l);case 15:return dv(i,o,o.type,o.pendingProps,l);case 17:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Ar(d,p),ah(i,o),o.tag=1,Nn(d)?(i=!0,Wc(o)):i=!1,Ea(o,l),rv(o,d,p),fp(o,d,p,l),_p(null,o,d,!0,i,l);case 19:return Ev(i,o,l);case 22:return fv(i,o,l)}throw Error(t(156,o.tag))};function $v(i,o){return Go(i,o)}function kA(i,o,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ur(i,o,l,d){return new kA(i,o,l,d)}function Vp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function NA(i){if(typeof i=="function")return Vp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===b)return 11;if(i===Me)return 14}return 2}function cs(i,o){var l=i.alternate;return l===null?(l=ur(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function yh(i,o,l,d,p,_){var T=2;if(d=i,typeof i=="function")Vp(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case D:return Eo(l.children,p,_,o);case A:T=8,p|=8;break;case C:return i=ur(12,l,o,p|2),i.elementType=C,i.lanes=_,i;case k:return i=ur(13,l,o,p),i.elementType=k,i.lanes=_,i;case ft:return i=ur(19,l,o,p),i.elementType=ft,i.lanes=_,i;case De:return vh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:T=10;break e;case L:T=9;break e;case b:T=11;break e;case Me:T=14;break e;case be:T=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=ur(T,l,o,p),o.elementType=i,o.type=d,o.lanes=_,o}function Eo(i,o,l,d){return i=ur(7,i,d,o),i.lanes=l,i}function vh(i,o,l,d){return i=ur(22,i,d,o),i.elementType=De,i.lanes=l,i.stateNode={isHidden:!1},i}function Fp(i,o,l){return i=ur(6,i,null,o),i.lanes=l,i}function jp(i,o,l){return o=ur(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function xA(i,o,l,d,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Up(i,o,l,d,p,_,T,R,N){return i=new xA(i,o,l,R,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=ur(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(_),i}function bA(i,o,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:d==null?null:""+d,children:i,containerInfo:o,implementation:l}}function qv(i){if(!i)return ts;i=i._reactInternals;e:{if(_r(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Nn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Nn(l))return vy(i,l,o)}return o}function Hv(i,o,l,d,p,_,T,R,N){return i=Up(l,d,!0,i,p,_,T,R,N),i.context=qv(null),l=i.current,d=Tn(),p=ls(l),_=Ei(d,p),_.callback=o??null,is(l,_,p),i.current.lanes=p,Hi(i,p,d),Dn(i,d),i}function Eh(i,o,l,d){var p=o.current,_=Tn(),T=ls(p);return l=qv(l),o.context===null?o.context=l:o.pendingContext=l,o=Ei(_,T),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=is(p,o,T),i!==null&&(kr(i,p,T,_),Xc(i,p,T)),T}function wh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Gv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Bp(i,o){Gv(i,o),(i=i.alternate)&&Gv(i,o)}function DA(){return null}var Kv=typeof reportError=="function"?reportError:function(i){console.error(i)};function zp(i){this._internalRoot=i}Ih.prototype.render=zp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Eh(i,o,null,null)},Ih.prototype.unmount=zp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;_o(function(){Eh(null,i,null,null)}),o[mi]=null}};function Ih(i){this._internalRoot=i}Ih.prototype.unstable_scheduleHydration=function(i){if(i){var o=Ic();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Br.length&&o!==0&&o<Br[l].priority;l++);Br.splice(l,0,i),l===0&&Cc(i)}};function Wp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Th(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Qv(){}function OA(i,o,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var W=wh(T);_.call(W)}}var T=Hv(o,d,i,0,null,!1,!1,"",Qv);return i._reactRootContainer=T,i[mi]=T.current,Fl(i.nodeType===8?i.parentNode:i),_o(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var R=d;d=function(){var W=wh(N);R.call(W)}}var N=Up(i,0,!1,null,null,!1,!1,"",Qv);return i._reactRootContainer=N,i[mi]=N.current,Fl(i.nodeType===8?i.parentNode:i),_o(function(){Eh(o,N,l,d)}),N}function Sh(i,o,l,d,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var R=p;p=function(){var N=wh(T);R.call(N)}}Eh(o,T,i,p)}else T=OA(l,o,i,p,d);return wh(T)}Ec=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=$i(o.pendingLanes);l!==0&&(Gi(o,l|1),Dn(o,ut()),(Ke&6)===0&&(Ca=ut()+500,ns()))}break;case 13:_o(function(){var d=vi(i,1);if(d!==null){var p=Tn();kr(d,i,1,p)}}),Bp(i,1)}},Yo=function(i){if(i.tag===13){var o=vi(i,134217728);if(o!==null){var l=Tn();kr(o,i,134217728,l)}Bp(i,134217728)}},wc=function(i){if(i.tag===13){var o=ls(i),l=vi(i,o);if(l!==null){var d=Tn();kr(l,i,o,d)}Bp(i,o)}},Ic=function(){return $e},Tc=function(i,o){var l=$e;try{return $e=i,o()}finally{$e=l}},Xe=function(i,o,l){switch(o){case"input":if(un(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var d=l[o];if(d!==i&&d.form===i.form){var p=Bc(d);if(!p)throw Error(t(90));Fr(d),un(d,p)}}}break;case"textarea":oi(i,l);break;case"select":o=l.value,o!=null&&Jn(i,!!l.multiple,o,!1)}},Ys=Op,vl=_o;var MA={usingClientEntryPoint:!1,Events:[Bl,da,Bc,jr,yl,Op]},tu={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LA={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Il(i),i===null?null:i.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||DA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ch=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ch.isDisabled&&Ch.supportsFiber)try{to=Ch.inject(LA),Un=Ch}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MA,On.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(o))throw Error(t(200));return bA(i,o,null,l)},On.createRoot=function(i,o){if(!Wp(i))throw Error(t(299));var l=!1,d="",p=Kv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Up(i,1,!1,null,null,l,!1,d,p),i[mi]=o.current,Fl(i.nodeType===8?i.parentNode:i),new zp(o)},On.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Il(o),i=i===null?null:i.stateNode,i},On.flushSync=function(i){return _o(i)},On.hydrate=function(i,o,l){if(!Th(o))throw Error(t(200));return Sh(null,i,o,!0,l)},On.hydrateRoot=function(i,o,l){if(!Wp(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",T=Kv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=Hv(o,null,i,1,l??null,p,!1,_,T),i[mi]=o.current,Fl(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Ih(o)},On.render=function(i,o,l){if(!Th(o))throw Error(t(200));return Sh(null,i,o,!1,l)},On.unmountComponentAtNode=function(i){if(!Th(i))throw Error(t(40));return i._reactRootContainer?(_o(function(){Sh(null,null,i,!1,function(){i._reactRootContainer=null,i[mi]=null})}),!0):!1},On.unstable_batchedUpdates=Op,On.unstable_renderSubtreeIntoContainer=function(i,o,l,d){if(!Th(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Sh(i,o,l,!1,d)},On.version="18.3.1-next-f1338f8080-20240426",On}var rE;function qA(){if(rE)return Hp.exports;rE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Hp.exports=$A(),Hp.exports}var iE;function HA(){if(iE)return Ah;iE=1;var n=qA();return Ah.createRoot=n.createRoot,Ah.hydrateRoot=n.hydrateRoot,Ah}var GA=HA();const KA="modulepreload",QA=function(n){return"/"+n},sE={},NI=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=u(t.map(m=>{if(m=QA(m),m in sE)return;sE[m]=!0;const y=m.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${w}`))return;const I=document.createElement("link");if(I.rel=y?"stylesheet":KA,y||(I.as="script"),I.crossOrigin="",I.href=m,f&&I.setAttribute("nonce",f),document.head.appendChild(I),y)return new Promise((P,O)=>{I.addEventListener("load",P),I.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return s.then(u=>{for(const h of u||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};/**
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
 */const YA=()=>{};var oE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw sl(e)},sl=function(n){return new Error("Firebase Database ("+xI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},XA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],h=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,h=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,w=(a&3)<<4|h>>4;let I=(h&15)<<2|m>>6,P=m&63;f||(P=64,u||(I=64)),r.push(t[y],t[w],t[I],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):XA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||m==null||w==null)throw new JA;const I=a<<2|h>>4;if(r.push(I),m!==64){const P=h<<4&240|m>>2;if(r.push(P),w!==64){const O=m<<6&192|w;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class JA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DI=function(n){const e=bI(n);return hg.encodeByteArray(e,!0)},Kh=function(n){return DI(n).replace(/\./g,"")},Qh=function(n){try{return hg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){return OI(void 0,n)}function OI(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!eR(t)||(n[t]=OI(n[t],e[t]));return n}function eR(n){return n!=="__proto__"}/**
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
 */function tR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nR=()=>tR().__FIREBASE_DEFAULTS__,rR=()=>{if(typeof process>"u"||typeof oE>"u")return;const n=oE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},xd=()=>{try{return YA()||nR()||rR()||iR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},MI=n=>{var e,t;return(t=(e=xd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},LI=n=>{const e=MI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},VI=()=>{var n;return(n=xd())===null||n===void 0?void 0:n.config},FI=n=>{var e;return(e=xd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Bs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function jI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kh(JSON.stringify(t)),Kh(JSON.stringify(u)),""].join(".")}const pu={};function sR(){const n={prod:[],emulator:[]};for(const e of Object.keys(pu))pu[e]?n.emulator.push(e):n.prod.push(e);return n}function oR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let aE=!1;function fg(n,e){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||pu[n]===e||pu[n]||aE)return;pu[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=sR().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function h(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function f(I,P){I.setAttribute("width","24"),I.setAttribute("id",P),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function m(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{aE=!0,u()},I}function y(I,P){I.setAttribute("id",P),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=oR(r),P=t("text"),O=document.getElementById(P)||document.createElement("span"),F=t("learnmore"),B=document.getElementById(F)||document.createElement("a"),K=t("preprendIcon"),H=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ee=I.element;h(ee),y(B,F);const se=m();f(H,K),ee.append(H,O,B,se),document.body.appendChild(ee)}a?(O.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function aR(){var n;const e=(n=xd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function UI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cR(){const n=yn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hR(){return xI.NODE_ADMIN===!0}function dR(){return!aR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fR(){try{return typeof indexedDB=="object"}catch{return!1}}function pR(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="FirebaseError";class Vi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=mR,Object.setPrototypeOf(this,Vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qu.prototype.create)}}class qu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?gR(a,r):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new Vi(s,h,r)}}function gR(n,e){return n.replace(_R,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _R=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){return JSON.parse(n)}function Bt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Au(Qh(a[0])||""),t=Au(Qh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},yR=function(n){const e=BI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vR=function(n){const e=BI(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Ni(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(lE(a)&&lE(u)){if(!Ni(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function lE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function au(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function lu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let w=0;w<80;w++){w<40?w<20?(m=h^a&(u^h),y=1518500249):(m=a^u^h,y=1859775393):w<60?(m=a&u|h&(a|u),y=2400959708):(m=a^u^h,y=3395469782);const I=(s<<5|s>>>27)+m+f+y+r[w]&4294967295;f=h,h=u,u=(a<<30|a>>>2)&4294967295,a=s,s=I}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function wR(n,e){const t=new IR(n,e);return t.subscribe.bind(t)}class IR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");TR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Qp),s.error===void 0&&(s.error=Qp),s.complete===void 0&&(s.complete=Qp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qp(){}function $a(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function rt(n){return n&&n._delegate?n._delegate:n}class ks{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wo="[DEFAULT]";/**
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
 */class CR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RR(e))try{this.getOrInitializeService({instanceIdentifier:wo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=wo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wo){return this.instances.has(e)}getOptions(e=wo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wo){return this.component?this.component.multipleInstances?e:wo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AR(n){return n===wo?void 0:n}function RR(n){return n.instantiationMode==="EAGER"}/**
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
 */class PR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const kR={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},NR=ze.INFO,xR={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},bR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=xR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dd{constructor(e){this.name=e,this._logLevel=NR,this._logHandler=bR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const DR=(n,e)=>e.some(t=>n instanceof t);let uE,cE;function OR(){return uE||(uE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MR(){return cE||(cE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zI=new WeakMap,gm=new WeakMap,WI=new WeakMap,Yp=new WeakMap,mg=new WeakMap;function LR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Es(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&zI.set(t,n)}).catch(()=>{}),mg.set(e,n),e}function VR(n){if(gm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});gm.set(n,e)}let _m={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||WI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function FR(n){_m=n(_m)}function jR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Xp(this),e,...t);return WI.set(r,e.sort?e.sort():[e]),Es(r)}:MR().includes(n)?function(...e){return n.apply(Xp(this),e),Es(zI.get(this))}:function(...e){return Es(n.apply(Xp(this),e))}}function UR(n){return typeof n=="function"?jR(n):(n instanceof IDBTransaction&&VR(n),DR(n,OR())?new Proxy(n,_m):n)}function Es(n){if(n instanceof IDBRequest)return LR(n);if(Yp.has(n))return Yp.get(n);const e=UR(n);return e!==n&&(Yp.set(n,e),mg.set(e,n)),e}const Xp=n=>mg.get(n);function BR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),h=Es(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Es(u.result),f.oldVersion,f.newVersion,Es(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const zR=["get","getKey","getAll","getAllKeys","count"],WR=["put","add","delete","clear"],Jp=new Map;function hE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jp.get(e))return Jp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=WR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zR.includes(t)))return;const a=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),s&&f.done]))[0]};return Jp.set(e,a),a}FR(n=>({...n,get:(e,t,r)=>hE(e,t)||n.get(e,t,r),has:(e,t)=>!!hE(e,t)||n.has(e,t)}));/**
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
 */class $R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ym="@firebase/app",dE="0.13.2";/**
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
 */const xi=new Dd("@firebase/app"),HR="@firebase/app-compat",GR="@firebase/analytics-compat",KR="@firebase/analytics",QR="@firebase/app-check-compat",YR="@firebase/app-check",XR="@firebase/auth",JR="@firebase/auth-compat",ZR="@firebase/database",e1="@firebase/data-connect",t1="@firebase/database-compat",n1="@firebase/functions",r1="@firebase/functions-compat",i1="@firebase/installations",s1="@firebase/installations-compat",o1="@firebase/messaging",a1="@firebase/messaging-compat",l1="@firebase/performance",u1="@firebase/performance-compat",c1="@firebase/remote-config",h1="@firebase/remote-config-compat",d1="@firebase/storage",f1="@firebase/storage-compat",p1="@firebase/firestore",m1="@firebase/ai",g1="@firebase/firestore-compat",_1="firebase",y1="11.10.0";/**
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
 */const vm="[DEFAULT]",v1={[ym]:"fire-core",[HR]:"fire-core-compat",[KR]:"fire-analytics",[GR]:"fire-analytics-compat",[YR]:"fire-app-check",[QR]:"fire-app-check-compat",[XR]:"fire-auth",[JR]:"fire-auth-compat",[ZR]:"fire-rtdb",[e1]:"fire-data-connect",[t1]:"fire-rtdb-compat",[n1]:"fire-fn",[r1]:"fire-fn-compat",[i1]:"fire-iid",[s1]:"fire-iid-compat",[o1]:"fire-fcm",[a1]:"fire-fcm-compat",[l1]:"fire-perf",[u1]:"fire-perf-compat",[c1]:"fire-rc",[h1]:"fire-rc-compat",[d1]:"fire-gcs",[f1]:"fire-gcs-compat",[p1]:"fire-fst",[g1]:"fire-fst-compat",[m1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const Jh=new Map,E1=new Map,Em=new Map;function fE(n,e){try{n.container.addComponent(e)}catch(t){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ao(n){const e=n.name;if(Em.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;Em.set(e,n);for(const t of Jh.values())fE(t,n);for(const t of E1.values())fE(t,n);return!0}function Od(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function cr(n){return n==null?!1:n.settings!==void 0}/**
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
 */const w1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new qu("app","Firebase",w1);/**
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
 */class I1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=y1;function $I(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(t||(t=VI()),!t)throw ws.create("no-options");const a=Jh.get(s);if(a){if(Ni(t,a.options)&&Ni(r,a.config))return a;throw ws.create("duplicate-app",{appName:s})}const u=new PR(s);for(const f of Em.values())u.addComponent(f);const h=new I1(t,r,u);return Jh.set(s,h),h}function gg(n=vm){const e=Jh.get(n);if(!e&&n===vm&&VI())return $I();if(!e)throw ws.create("no-app",{appName:n});return e}function Xr(n,e,t){var r;let s=(r=v1[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(h.join(" "));return}Ao(new ks(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const T1="firebase-heartbeat-database",S1=1,Ru="firebase-heartbeat-store";let Zp=null;function qI(){return Zp||(Zp=BR(T1,S1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ru)}catch(t){console.warn(t)}}}}).catch(n=>{throw ws.create("idb-open",{originalErrorMessage:n.message})})),Zp}async function C1(n){try{const t=(await qI()).transaction(Ru),r=await t.objectStore(Ru).get(HI(n));return await t.done,r}catch(e){if(e instanceof Vi)xi.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xi.warn(t.message)}}}async function pE(n,e){try{const r=(await qI()).transaction(Ru,"readwrite");await r.objectStore(Ru).put(e,HI(n)),await r.done}catch(t){if(t instanceof Vi)xi.warn(t.message);else{const r=ws.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xi.warn(r.message)}}}function HI(n){return`${n.name}!${n.options.appId}`}/**
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
 */const A1=1024,R1=30;class P1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new N1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=mE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>R1){const u=x1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mE(),{heartbeatsToSend:r,unsentEntries:s}=k1(this._heartbeatsCache.heartbeats),a=Kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return xi.warn(t),""}}}function mE(){return new Date().toISOString().substring(0,10)}function k1(n,e=A1){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),gE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class N1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fR()?pR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await C1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return pE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return pE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gE(n){return Kh(JSON.stringify({version:2,heartbeats:n})).length}function x1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function b1(n){Ao(new ks("platform-logger",e=>new $R(e),"PRIVATE")),Ao(new ks("heartbeat",e=>new P1(e),"PRIVATE")),Xr(ym,dE,n),Xr(ym,dE,"esm2017"),Xr("fire-js","")}b1("");function _g(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function GI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D1=GI,KI=new qu("auth","Firebase",GI());/**
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
 */const Zh=new Dd("@firebase/auth");function O1(n,...e){Zh.logLevel<=ze.WARN&&Zh.warn(`Auth (${Mo}): ${n}`,...e)}function Mh(n,...e){Zh.logLevel<=ze.ERROR&&Zh.error(`Auth (${Mo}): ${n}`,...e)}/**
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
 */function Mr(n,...e){throw yg(n,...e)}function Jr(n,...e){return yg(n,...e)}function QI(n,e,t){const r=Object.assign(Object.assign({},D1()),{[e]:t});return new qu("auth","Firebase",r).create(e,{appName:n.name})}function Is(n){return QI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return KI.create(n,...e)}function Se(n,e,...t){if(!n)throw yg(e,...t)}function Ci(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mh(e),new Error(e)}function bi(n,e){n||Ci(e)}/**
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
 */function wm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function M1(){return _E()==="http:"||_E()==="https:"}function _E(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function L1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M1()||uR()||"connection"in navigator)?navigator.onLine:!0}function V1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,bi(t>e,"Short delay should be less than long delay!"),this.isMobile=pg()||UI()}get(){return L1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vg(n,e){bi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class YI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const F1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const j1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U1=new Hu(3e4,6e4);function zs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,r,s={}){return XI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=ol(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return lR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(m.credentials="include"),YI.fetch()(await JI(n,n.config.apiHost,t,h),m)})}async function XI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},F1),e);try{const s=new z1(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Rh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Rh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Rh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw QI(n,y,m);Mr(n,y)}}catch(s){if(s instanceof Vi)throw s;Mr(n,"network-request-failed",{message:String(s)})}}async function Md(n,e,t,r,s={}){const a=await Fi(n,e,t,r,s);return"mfaPendingCredential"in a&&Mr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function JI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?vg(n.config,s):`${n.config.apiScheme}://${s}`;return j1.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function B1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class z1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jr(this.auth,"network-request-failed")),U1.get())})}}function Rh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Jr(n,e,r);return s.customData._tokenResponse=t,s}function yE(n){return n!==void 0&&n.enterprise!==void 0}class W1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return B1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $1(n,e){return Fi(n,"GET","/v2/recaptchaConfig",zs(n,e))}/**
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
 */async function q1(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function ed(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function mu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H1(n,e=!1){const t=rt(n),r=await t.getIdToken(e),s=Eg(r);Se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:mu(em(s.auth_time)),issuedAtTime:mu(em(s.iat)),expirationTime:mu(em(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function em(n){return Number(n)*1e3}function Eg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(Mh("Failed to decode base64 JWT payload"),null)}catch(s){return Mh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vE(n){const e=Eg(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vi&&G1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function G1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class K1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Im{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mu(this.lastLoginAt),this.creationTime=mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function td(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Pu(n,ed(t,{idToken:r}));Se(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?ZI(a.providerUserInfo):[],h=Y1(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Im(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function Q1(n){const e=rt(n);await td(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ZI(n){return n.map(e=>{var{providerId:t}=e,r=_g(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function X1(n,e){const t=await XI(n,{},async()=>{const r=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await JI(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:r};return n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(f.credentials="include"),YI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function J1(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",zs(n,e))}/**
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
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=vE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await X1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ma;return r&&(Se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Se(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Se(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
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
 */function ds(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=_g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Im(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Pu(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H1(this,e)}reload(){return Q1(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await td(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cr(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await Pu(this,q1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,h,f,m,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,O=(u=t.photoURL)!==null&&u!==void 0?u:void 0,F=(h=t.tenantId)!==null&&h!==void 0?h:void 0,B=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,K=(m=t.createdAt)!==null&&m!==void 0?m:void 0,H=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ee,emailVerified:se,isAnonymous:Oe,providerData:Pe,stsTokenManager:D}=t;Se(ee&&D,e,"internal-error");const A=Ma.fromJSON(this.name,D);Se(typeof ee=="string",e,"internal-error"),ds(w,e.name),ds(I,e.name),Se(typeof se=="boolean",e,"internal-error"),Se(typeof Oe=="boolean",e,"internal-error"),ds(P,e.name),ds(O,e.name),ds(F,e.name),ds(B,e.name),ds(K,e.name),ds(H,e.name);const C=new xr({uid:ee,auth:e,email:I,emailVerified:se,displayName:w,isAnonymous:Oe,photoURL:O,phoneNumber:P,tenantId:F,stsTokenManager:A,createdAt:K,lastLoginAt:H});return Pe&&Array.isArray(Pe)&&(C.providerData=Pe.map(x=>Object.assign({},x))),B&&(C._redirectEventId=B),C}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ma;s.updateFromServerResponse(t);const a=new xr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await td(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Se(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?ZI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),h=new Ma;h.updateFromIdToken(r);const f=new xr({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Im(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const EE=new Map;function Ai(n){bi(n instanceof Function,"Expected a class definition");let e=EE.get(n);return e?(bi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,EE.set(n,e),e)}/**
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
 */class eT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eT.type="NONE";const wE=eT;/**
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
 */function Lh(n,e,t){return`firebase:${n}:${e}:${t}`}class La{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Lh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Lh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ed(this.auth,{idToken:e}).catch(()=>{});return t?xr._fromGetAccountInfoResponse(this.auth,t,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new La(Ai(wE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Ai(wE);const u=Lh(r,e.config.apiKey,e.name);let h=null;for(const m of t)try{const y=await m._get(u);if(y){let w;if(typeof y=="string"){const I=await ed(e,{idToken:y}).catch(()=>{});if(!I)break;w=await xr._fromGetAccountInfoResponse(e,I,y)}else w=xr._fromJSON(e,y);m!==a&&(h=w),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new La(a,e,r):(a=f[0],h&&await a._set(u,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new La(a,e,r))}}/**
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
 */function IE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oT(e))return"Blackberry";if(aT(e))return"Webos";if(nT(e))return"Safari";if((e.includes("chrome/")||rT(e))&&!e.includes("edge/"))return"Chrome";if(sT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tT(n=yn()){return/firefox\//i.test(n)}function nT(n=yn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rT(n=yn()){return/crios\//i.test(n)}function iT(n=yn()){return/iemobile/i.test(n)}function sT(n=yn()){return/android/i.test(n)}function oT(n=yn()){return/blackberry/i.test(n)}function aT(n=yn()){return/webos/i.test(n)}function wg(n=yn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Z1(n=yn()){var e;return wg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eP(){return cR()&&document.documentMode===10}function lT(n=yn()){return wg(n)||sT(n)||aT(n)||oT(n)||/windows phone/i.test(n)||iT(n)}/**
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
 */function uT(n,e=[]){let t;switch(n){case"Browser":t=IE(yn());break;case"Worker":t=`${IE(yn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mo}/${r}`}/**
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
 */class tP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,h)=>{try{const f=e(a);u(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nP(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",zs(n,e))}/**
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
 */const rP=6;class iP{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:rP,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class sP{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new TE(this),this.idTokenSubscription=new TE(this),this.beforeStateQueue=new tP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ai(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await La.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ed(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(cr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await td(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cr(this.app))return Promise.reject(Is(this));const t=e?rt(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cr(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cr(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nP(this),t=new iP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await J1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ai(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[Ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(cr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&O1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lo(n){return rt(n)}class TE{constructor(e){this.auth=e,this.observer=null,this.addObserver=wR(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ld={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oP(n){Ld=n}function cT(n){return Ld.loadJS(n)}function aP(){return Ld.recaptchaEnterpriseScript}function lP(){return Ld.gapiScript}function uP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class cP{constructor(){this.enterprise=new hP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const dP="recaptcha-enterprise",hT="NO_RECAPTCHA";class fP{constructor(e){this.type=dP,this.auth=Lo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,h)=>{$1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new W1(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{h(f)})})}function s(a,u,h){const f=window.grecaptcha;yE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(hT)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(h=>{if(!t&&yE(window.grecaptcha))s(h,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=aP();f.length!==0&&(f+=h),cT(f).then(()=>{s(h,a,u)}).catch(m=>{u(m)})}}).catch(h=>{u(h)})})}}async function SE(n,e,t,r=!1,s=!1){const a=new fP(n);let u;if(s)u=hT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Tm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await SE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await SE(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(u)})}/**
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
 */function pP(n,e){const t=Od(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ni(a,e??{}))return s;Mr(s,"already-initialized")}return t.initialize({options:e})}function mP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ai);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gP(n,e,t){const r=Lo(n);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=dT(e),{host:u,port:h}=_P(e),f=h===null?"":`:${h}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(Ni(m,r.config.emulator)&&Ni(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Bs(u)?(dg(`${a}//${u}${f}`),fg("Auth",!0)):yP()}function dT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _P(n){const e=dT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:CE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:CE(u)}}}function CE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ig{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,t){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}async function vP(n,e){return Fi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function EP(n,e){return Md(n,"POST","/v1/accounts:signInWithPassword",zs(n,e))}async function fT(n,e){return Fi(n,"POST","/v1/accounts:sendOobCode",zs(n,e))}async function wP(n,e){return fT(n,e)}async function IP(n,e){return fT(n,e)}/**
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
 */async function TP(n,e){return Md(n,"POST","/v1/accounts:signInWithEmailLink",zs(n,e))}async function SP(n,e){return Md(n,"POST","/v1/accounts:signInWithEmailLink",zs(n,e))}/**
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
 */class ku extends Ig{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ku(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ku(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tm(e,t,"signInWithPassword",EP);case"emailLink":return TP(e,{email:this._email,oobCode:this._password});default:Mr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tm(e,r,"signUpPassword",vP);case"emailLink":return SP(e,{idToken:t,email:this._email,oobCode:this._password});default:Mr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Va(n,e){return Md(n,"POST","/v1/accounts:signInWithIdp",zs(n,e))}/**
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
 */const CP="http://localhost";class Ro extends Ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=_g(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Ro(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Va(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Va(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Va(e,t)}buildRequest(){const e={requestUri:CP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
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
 */function AP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RP(n){const e=au(lu(n)).link,t=e?au(lu(e)).deep_link_id:null,r=au(lu(n)).deep_link_id;return(r?au(lu(r)).link:null)||r||t||e||n}class Tg{constructor(e){var t,r,s,a,u,h;const f=au(lu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,w=AP((s=f.mode)!==null&&s!==void 0?s:null);Se(m&&y&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=RP(e);try{return new Tg(t)}catch{return null}}}/**
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
 */class al{constructor(){this.providerId=al.PROVIDER_ID}static credential(e,t){return ku._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tg.parseLink(t);return Se(r,"argument-error"),ku._fromEmailAndCode(e,r.code,r.tenantId)}}al.PROVIDER_ID="password";al.EMAIL_PASSWORD_SIGN_IN_METHOD="password";al.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gu extends pT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fs extends Gu{constructor(){super("facebook.com")}static credential(e){return Ro._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";fs.PROVIDER_ID="facebook.com";/**
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
 */class ps extends Gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ro._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ps.credential(t,r)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
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
 */class ms extends Gu{constructor(){super("github.com")}static credential(e){return Ro._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
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
 */class gs extends Gu{constructor(){super("twitter.com")}static credential(e,t){return Ro._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gs.credential(t,r)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
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
 */class qa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await xr._fromIdTokenResponse(e,r,s),u=AE(r);return new qa({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=AE(r);return new qa({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function AE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class nd extends Vi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new nd(e,t,r,s)}}function mT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(n,a,e,r):a})}async function PP(n,e,t=!1){const r=await Pu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qa._forOperation(n,"link",r)}/**
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
 */async function kP(n,e,t=!1){const{auth:r}=n;if(cr(r.app))return Promise.reject(Is(r));const s="reauthenticate";try{const a=await Pu(n,mT(r,s,e,n),t);Se(a.idToken,r,"internal-error");const u=Eg(a.idToken);Se(u,r,"internal-error");const{sub:h}=u;return Se(n.uid===h,r,"user-mismatch"),qa._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Mr(r,"user-mismatch"),a}}/**
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
 */async function gT(n,e,t=!1){if(cr(n.app))return Promise.reject(Is(n));const r="signIn",s=await mT(n,r,e),a=await qa._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function NP(n,e){return gT(Lo(n),e)}/**
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
 */async function xP(n){const e=Lo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bP(n,e,t){const r=Lo(n);await Tm(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",IP)}function DP(n,e,t){return cr(n.app)?Promise.reject(Is(n)):NP(rt(n),al.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xP(n),r})}async function OP(n,e){const t=rt(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await wP(t.auth,s);a!==n.email&&await n.reload()}function MP(n,e,t,r){return rt(n).onIdTokenChanged(e,t,r)}function LP(n,e,t){return rt(n).beforeAuthStateChanged(e,t)}function VP(n,e,t,r){return rt(n).onAuthStateChanged(e,t,r)}function _T(n){return rt(n).signOut()}const rd="__sak";/**
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
 */class yT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FP=1e3,jP=10;class vT extends yT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);eP()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vT.type="LOCAL";const UP=vT;/**
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
 */class ET extends yT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ET.type="SESSION";const wT=ET;/**
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
 */function BP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(u).map(async m=>m(t.origin,a)),f=await BP(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vd.receivers=[];/**
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
 */function Sg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((h,f)=>{const m=Sg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(I.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Zr(){return window}function WP(n){Zr().location.href=n}/**
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
 */function IT(){return typeof Zr().WorkerGlobalScope<"u"&&typeof Zr().importScripts=="function"}async function $P(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function HP(){return IT()?self:null}/**
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
 */const TT="firebaseLocalStorageDb",GP=1,id="firebaseLocalStorage",ST="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fd(n,e){return n.transaction([id],e?"readwrite":"readonly").objectStore(id)}function KP(){const n=indexedDB.deleteDatabase(TT);return new Ku(n).toPromise()}function Sm(){const n=indexedDB.open(TT,GP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(id,{keyPath:ST})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(id)?e(r):(r.close(),await KP(),e(await Sm()))})})}async function RE(n,e,t){const r=Fd(n,!0).put({[ST]:e,value:t});return new Ku(r).toPromise()}async function QP(n,e){const t=Fd(n,!1).get(e),r=await new Ku(t).toPromise();return r===void 0?null:r.value}function PE(n,e){const t=Fd(n,!0).delete(e);return new Ku(t).toPromise()}const YP=800,XP=3;class CT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>XP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vd._getInstance(HP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $P(),!this.activeServiceWorker)return;this.sender=new zP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sm();return await RE(e,rd,"1"),await PE(e,rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>RE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>QP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>PE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Fd(s,!1).getAll();return new Ku(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CT.type="LOCAL";const JP=CT;new Hu(3e4,6e4);/**
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
 */function ZP(n,e){return e?Ai(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cg extends Ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Va(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Va(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Va(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ek(n){return gT(n.auth,new Cg(n),n.bypassAuthState)}function tk(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),kP(t,new Cg(n),n.bypassAuthState)}async function nk(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),PP(t,new Cg(n),n.bypassAuthState)}/**
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
 */class AT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ek;case"linkViaPopup":case"linkViaRedirect":return nk;case"reauthViaPopup":case"reauthViaRedirect":return tk;default:Mr(this.auth,"internal-error")}}resolve(e){bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rk=new Hu(2e3,1e4);class Da extends AT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){bi(this.filter.length===1,"Popup operations only handle one event");const e=Sg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rk.get())};e()}}Da.currentPopupAction=null;/**
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
 */const ik="pendingRedirect",Vh=new Map;class sk extends AT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vh.get(this.auth._key());if(!e){try{const r=await ok(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vh.set(this.auth._key(),e)}return this.bypassAuthState||Vh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ok(n,e){const t=uk(e),r=lk(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ak(n,e){Vh.set(n._key(),e)}function lk(n){return Ai(n._redirectPersistence)}function uk(n){return Lh(ik,n.config.apiKey,n.name)}async function ck(n,e,t=!1){if(cr(n.app))return Promise.reject(Is(n));const r=Lo(n),s=ZP(r,e),u=await new sk(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const hk=600*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!RT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Jr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(kE(e))}saveEventToCache(e){this.cachedEventUids.add(kE(e)),this.lastProcessedEventTime=Date.now()}}function kE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function RT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RT(n);default:return!1}}/**
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
 */async function pk(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
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
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function _k(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pk(n);for(const t of e)try{if(yk(t))return}catch{}Mr(n,"unauthorized-domain")}function yk(n){const e=wm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!gk.test(t))return!1;if(mk.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vk=new Hu(3e4,6e4);function NE(){const n=Zr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ek(n){return new Promise((e,t)=>{var r,s,a;function u(){NE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NE(),t(Jr(n,"network-request-failed"))},timeout:vk.get()})}if(!((s=(r=Zr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Zr().gapi)===null||a===void 0)&&a.load)u();else{const h=uP("iframefcb");return Zr()[h]=()=>{gapi.load?u():t(Jr(n,"network-request-failed"))},cT(`${lP()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Fh=null,e})}let Fh=null;function wk(n){return Fh=Fh||Ek(n),Fh}/**
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
 */const Ik=new Hu(5e3,15e3),Tk="__/auth/iframe",Sk="emulator/auth/iframe",Ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ak=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rk(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vg(e,Sk):`https://${n.config.authDomain}/${Tk}`,r={apiKey:e.apiKey,appName:n.name,v:Mo},s=Ak.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ol(r).slice(1)}`}async function Pk(n){const e=await wk(n),t=Zr().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:Rk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ck,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Jr(n,"network-request-failed"),h=Zr().setTimeout(()=>{a(u)},Ik.get());function f(){Zr().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,xk=600,bk="_blank",Dk="http://localhost";class xE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(n,e,t,r=Nk,s=xk){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},kk),{width:r.toString(),height:s.toString(),top:a,left:u}),m=yn().toLowerCase();t&&(h=rT(m)?bk:t),tT(m)&&(e=e||Dk,f.scrollbars="yes");const y=Object.entries(f).reduce((I,[P,O])=>`${I}${P}=${O},`,"");if(Z1(m)&&h!=="_self")return Mk(e||"",h),new xE(null);const w=window.open(e||"",h,y);Se(w,n,"popup-blocked");try{w.focus()}catch{}return new xE(w)}function Mk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Lk="__/auth/handler",Vk="emulator/auth/handler",Fk=encodeURIComponent("fac");async function bE(n,e,t,r,s,a){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mo,eventId:s};if(e instanceof pT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Yh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof Gu){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),m=f?`#${Fk}=${encodeURIComponent(f)}`:"";return`${jk(n)}?${ol(h).slice(1)}${m}`}function jk({config:n}){return n.emulator?vg(n,Vk):`https://${n.authDomain}/${Lk}`}/**
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
 */const tm="webStorageSupport";class Uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wT,this._completeRedirectFn=ck,this._overrideRedirectResult=ak}async _openPopup(e,t,r,s){var a;bi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await bE(e,t,r,wm(),s);return Ok(e,u,Sg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await bE(e,t,r,wm(),s);return WP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(bi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pk(e),r=new dk(e);return t.register("authEvent",s=>(Se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tm,{type:tm},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[tm];u!==void 0&&t(!!u),Mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_k(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lT()||nT()||wg()}}const Bk=Uk;var DE="@firebase/auth",OE="1.10.8";/**
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
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $k(n){Ao(new ks("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uT(n)},m=new sP(r,s,a,f);return mP(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ao(new ks("auth-internal",e=>{const t=Lo(e.getProvider("auth").getImmediate());return(r=>new zk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xr(DE,OE,Wk(n)),Xr(DE,OE,"esm2017")}/**
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
 */const qk=300,Hk=FI("authIdTokenMaxAge")||qk;let ME=null;const Gk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Hk)return;const s=t==null?void 0:t.token;ME!==s&&(ME=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kk(n=gg()){const e=Od(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pP(n,{popupRedirectResolver:Bk,persistence:[JP,UP,wT]}),r=FI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Gk(a.toString());LP(t,u,()=>u(t.currentUser)),MP(t,h=>u(h))}}const s=MI("auth");return s&&gP(t,`http://${s}`),t}function Qk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Jr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$k("Browser");var Yk="firebase",Xk="11.10.0";/**
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
 */Xr(Yk,Xk,"app");var LE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,PT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function C(){}C.prototype=A.prototype,D.D=A.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(x,L,b){for(var k=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)k[ft-2]=arguments[ft];return A.prototype[L].apply(x,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,A,C){C||(C=0);var x=Array(16);if(typeof A=="string")for(var L=0;16>L;++L)x[L]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(L=0;16>L;++L)x[L]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=D.g[0],C=D.g[1],L=D.g[2];var b=D.g[3],k=A+(b^C&(L^b))+x[0]+3614090360&4294967295;A=C+(k<<7&4294967295|k>>>25),k=b+(L^A&(C^L))+x[1]+3905402710&4294967295,b=A+(k<<12&4294967295|k>>>20),k=L+(C^b&(A^C))+x[2]+606105819&4294967295,L=b+(k<<17&4294967295|k>>>15),k=C+(A^L&(b^A))+x[3]+3250441966&4294967295,C=L+(k<<22&4294967295|k>>>10),k=A+(b^C&(L^b))+x[4]+4118548399&4294967295,A=C+(k<<7&4294967295|k>>>25),k=b+(L^A&(C^L))+x[5]+1200080426&4294967295,b=A+(k<<12&4294967295|k>>>20),k=L+(C^b&(A^C))+x[6]+2821735955&4294967295,L=b+(k<<17&4294967295|k>>>15),k=C+(A^L&(b^A))+x[7]+4249261313&4294967295,C=L+(k<<22&4294967295|k>>>10),k=A+(b^C&(L^b))+x[8]+1770035416&4294967295,A=C+(k<<7&4294967295|k>>>25),k=b+(L^A&(C^L))+x[9]+2336552879&4294967295,b=A+(k<<12&4294967295|k>>>20),k=L+(C^b&(A^C))+x[10]+4294925233&4294967295,L=b+(k<<17&4294967295|k>>>15),k=C+(A^L&(b^A))+x[11]+2304563134&4294967295,C=L+(k<<22&4294967295|k>>>10),k=A+(b^C&(L^b))+x[12]+1804603682&4294967295,A=C+(k<<7&4294967295|k>>>25),k=b+(L^A&(C^L))+x[13]+4254626195&4294967295,b=A+(k<<12&4294967295|k>>>20),k=L+(C^b&(A^C))+x[14]+2792965006&4294967295,L=b+(k<<17&4294967295|k>>>15),k=C+(A^L&(b^A))+x[15]+1236535329&4294967295,C=L+(k<<22&4294967295|k>>>10),k=A+(L^b&(C^L))+x[1]+4129170786&4294967295,A=C+(k<<5&4294967295|k>>>27),k=b+(C^L&(A^C))+x[6]+3225465664&4294967295,b=A+(k<<9&4294967295|k>>>23),k=L+(A^C&(b^A))+x[11]+643717713&4294967295,L=b+(k<<14&4294967295|k>>>18),k=C+(b^A&(L^b))+x[0]+3921069994&4294967295,C=L+(k<<20&4294967295|k>>>12),k=A+(L^b&(C^L))+x[5]+3593408605&4294967295,A=C+(k<<5&4294967295|k>>>27),k=b+(C^L&(A^C))+x[10]+38016083&4294967295,b=A+(k<<9&4294967295|k>>>23),k=L+(A^C&(b^A))+x[15]+3634488961&4294967295,L=b+(k<<14&4294967295|k>>>18),k=C+(b^A&(L^b))+x[4]+3889429448&4294967295,C=L+(k<<20&4294967295|k>>>12),k=A+(L^b&(C^L))+x[9]+568446438&4294967295,A=C+(k<<5&4294967295|k>>>27),k=b+(C^L&(A^C))+x[14]+3275163606&4294967295,b=A+(k<<9&4294967295|k>>>23),k=L+(A^C&(b^A))+x[3]+4107603335&4294967295,L=b+(k<<14&4294967295|k>>>18),k=C+(b^A&(L^b))+x[8]+1163531501&4294967295,C=L+(k<<20&4294967295|k>>>12),k=A+(L^b&(C^L))+x[13]+2850285829&4294967295,A=C+(k<<5&4294967295|k>>>27),k=b+(C^L&(A^C))+x[2]+4243563512&4294967295,b=A+(k<<9&4294967295|k>>>23),k=L+(A^C&(b^A))+x[7]+1735328473&4294967295,L=b+(k<<14&4294967295|k>>>18),k=C+(b^A&(L^b))+x[12]+2368359562&4294967295,C=L+(k<<20&4294967295|k>>>12),k=A+(C^L^b)+x[5]+4294588738&4294967295,A=C+(k<<4&4294967295|k>>>28),k=b+(A^C^L)+x[8]+2272392833&4294967295,b=A+(k<<11&4294967295|k>>>21),k=L+(b^A^C)+x[11]+1839030562&4294967295,L=b+(k<<16&4294967295|k>>>16),k=C+(L^b^A)+x[14]+4259657740&4294967295,C=L+(k<<23&4294967295|k>>>9),k=A+(C^L^b)+x[1]+2763975236&4294967295,A=C+(k<<4&4294967295|k>>>28),k=b+(A^C^L)+x[4]+1272893353&4294967295,b=A+(k<<11&4294967295|k>>>21),k=L+(b^A^C)+x[7]+4139469664&4294967295,L=b+(k<<16&4294967295|k>>>16),k=C+(L^b^A)+x[10]+3200236656&4294967295,C=L+(k<<23&4294967295|k>>>9),k=A+(C^L^b)+x[13]+681279174&4294967295,A=C+(k<<4&4294967295|k>>>28),k=b+(A^C^L)+x[0]+3936430074&4294967295,b=A+(k<<11&4294967295|k>>>21),k=L+(b^A^C)+x[3]+3572445317&4294967295,L=b+(k<<16&4294967295|k>>>16),k=C+(L^b^A)+x[6]+76029189&4294967295,C=L+(k<<23&4294967295|k>>>9),k=A+(C^L^b)+x[9]+3654602809&4294967295,A=C+(k<<4&4294967295|k>>>28),k=b+(A^C^L)+x[12]+3873151461&4294967295,b=A+(k<<11&4294967295|k>>>21),k=L+(b^A^C)+x[15]+530742520&4294967295,L=b+(k<<16&4294967295|k>>>16),k=C+(L^b^A)+x[2]+3299628645&4294967295,C=L+(k<<23&4294967295|k>>>9),k=A+(L^(C|~b))+x[0]+4096336452&4294967295,A=C+(k<<6&4294967295|k>>>26),k=b+(C^(A|~L))+x[7]+1126891415&4294967295,b=A+(k<<10&4294967295|k>>>22),k=L+(A^(b|~C))+x[14]+2878612391&4294967295,L=b+(k<<15&4294967295|k>>>17),k=C+(b^(L|~A))+x[5]+4237533241&4294967295,C=L+(k<<21&4294967295|k>>>11),k=A+(L^(C|~b))+x[12]+1700485571&4294967295,A=C+(k<<6&4294967295|k>>>26),k=b+(C^(A|~L))+x[3]+2399980690&4294967295,b=A+(k<<10&4294967295|k>>>22),k=L+(A^(b|~C))+x[10]+4293915773&4294967295,L=b+(k<<15&4294967295|k>>>17),k=C+(b^(L|~A))+x[1]+2240044497&4294967295,C=L+(k<<21&4294967295|k>>>11),k=A+(L^(C|~b))+x[8]+1873313359&4294967295,A=C+(k<<6&4294967295|k>>>26),k=b+(C^(A|~L))+x[15]+4264355552&4294967295,b=A+(k<<10&4294967295|k>>>22),k=L+(A^(b|~C))+x[6]+2734768916&4294967295,L=b+(k<<15&4294967295|k>>>17),k=C+(b^(L|~A))+x[13]+1309151649&4294967295,C=L+(k<<21&4294967295|k>>>11),k=A+(L^(C|~b))+x[4]+4149444226&4294967295,A=C+(k<<6&4294967295|k>>>26),k=b+(C^(A|~L))+x[11]+3174756917&4294967295,b=A+(k<<10&4294967295|k>>>22),k=L+(A^(b|~C))+x[2]+718787259&4294967295,L=b+(k<<15&4294967295|k>>>17),k=C+(b^(L|~A))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(L+(k<<21&4294967295|k>>>11))&4294967295,D.g[2]=D.g[2]+L&4294967295,D.g[3]=D.g[3]+b&4294967295}r.prototype.u=function(D,A){A===void 0&&(A=D.length);for(var C=A-this.blockSize,x=this.B,L=this.h,b=0;b<A;){if(L==0)for(;b<=C;)s(this,D,b),b+=this.blockSize;if(typeof D=="string"){for(;b<A;)if(x[L++]=D.charCodeAt(b++),L==this.blockSize){s(this,x),L=0;break}}else for(;b<A;)if(x[L++]=D[b++],L==this.blockSize){s(this,x),L=0;break}}this.h=L,this.o+=A},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;var C=8*this.o;for(A=D.length-8;A<D.length;++A)D[A]=C&255,C/=256;for(this.u(D),D=Array(16),A=C=0;4>A;++A)for(var x=0;32>x;x+=8)D[C++]=this.g[A]>>>x&255;return D};function a(D,A){var C=h;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=A(D)}function u(D,A){this.h=A;for(var C=[],x=!0,L=D.length-1;0<=L;L--){var b=D[L]|0;x&&b==A||(C[L]=b,x=!1)}this.g=C}var h={};function f(D){return-128<=D&&128>D?a(D,function(A){return new u([A|0],0>A?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return w;if(0>D)return B(m(-D));for(var A=[],C=1,x=0;D>=C;x++)A[x]=D/C|0,C*=4294967296;return new u(A,0)}function y(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return B(y(D.substring(1),A));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=m(Math.pow(A,8)),x=w,L=0;L<D.length;L+=8){var b=Math.min(8,D.length-L),k=parseInt(D.substring(L,L+b),A);8>b?(b=m(Math.pow(A,b)),x=x.j(b).add(m(k))):(x=x.j(C),x=x.add(m(k)))}return x}var w=f(0),I=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(F(this))return-B(this).m();for(var D=0,A=1,C=0;C<this.g.length;C++){var x=this.i(C);D+=(0<=x?x:4294967296+x)*A,A*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(O(this))return"0";if(F(this))return"-"+B(this).toString(D);for(var A=m(Math.pow(D,6)),C=this,x="";;){var L=se(C,A).g;C=K(C,L.j(A));var b=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=L,O(C))return b+x;for(;6>b.length;)b="0"+b;x=b+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function O(D){if(D.h!=0)return!1;for(var A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function F(D){return D.h==-1}n.l=function(D){return D=K(this,D),F(D)?-1:O(D)?0:1};function B(D){for(var A=D.g.length,C=[],x=0;x<A;x++)C[x]=~D.g[x];return new u(C,~D.h).add(I)}n.abs=function(){return F(this)?B(this):this},n.add=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],x=0,L=0;L<=A;L++){var b=x+(this.i(L)&65535)+(D.i(L)&65535),k=(b>>>16)+(this.i(L)>>>16)+(D.i(L)>>>16);x=k>>>16,b&=65535,k&=65535,C[L]=k<<16|b}return new u(C,C[C.length-1]&-2147483648?-1:0)};function K(D,A){return D.add(B(A))}n.j=function(D){if(O(this)||O(D))return w;if(F(this))return F(D)?B(this).j(B(D)):B(B(this).j(D));if(F(D))return B(this.j(B(D)));if(0>this.l(P)&&0>D.l(P))return m(this.m()*D.m());for(var A=this.g.length+D.g.length,C=[],x=0;x<2*A;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var L=0;L<D.g.length;L++){var b=this.i(x)>>>16,k=this.i(x)&65535,ft=D.i(L)>>>16,Me=D.i(L)&65535;C[2*x+2*L]+=k*Me,H(C,2*x+2*L),C[2*x+2*L+1]+=b*Me,H(C,2*x+2*L+1),C[2*x+2*L+1]+=k*ft,H(C,2*x+2*L+1),C[2*x+2*L+2]+=b*ft,H(C,2*x+2*L+2)}for(x=0;x<A;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=A;x<2*A;x++)C[x]=0;return new u(C,0)};function H(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function ee(D,A){this.g=D,this.h=A}function se(D,A){if(O(A))throw Error("division by zero");if(O(D))return new ee(w,w);if(F(D))return A=se(B(D),A),new ee(B(A.g),B(A.h));if(F(A))return A=se(D,B(A)),new ee(B(A.g),A.h);if(30<D.g.length){if(F(D)||F(A))throw Error("slowDivide_ only works with positive integers.");for(var C=I,x=A;0>=x.l(D);)C=Oe(C),x=Oe(x);var L=Pe(C,1),b=Pe(x,1);for(x=Pe(x,2),C=Pe(C,2);!O(x);){var k=b.add(x);0>=k.l(D)&&(L=L.add(C),b=k),x=Pe(x,1),C=Pe(C,1)}return A=K(D,L.j(A)),new ee(L,A)}for(L=w;0<=D.l(A);){for(C=Math.max(1,Math.floor(D.m()/A.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),b=m(C),k=b.j(A);F(k)||0<k.l(D);)C-=x,b=m(C),k=b.j(A);O(b)&&(b=I),L=L.add(b),D=K(D,k)}return new ee(L,D)}n.A=function(D){return se(this,D).h},n.and=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],x=0;x<A;x++)C[x]=this.i(x)&D.i(x);return new u(C,this.h&D.h)},n.or=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],x=0;x<A;x++)C[x]=this.i(x)|D.i(x);return new u(C,this.h|D.h)},n.xor=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],x=0;x<A;x++)C[x]=this.i(x)^D.i(x);return new u(C,this.h^D.h)};function Oe(D){for(var A=D.g.length+1,C=[],x=0;x<A;x++)C[x]=D.i(x)<<1|D.i(x-1)>>>31;return new u(C,D.h)}function Pe(D,A){var C=A>>5;A%=32;for(var x=D.g.length-C,L=[],b=0;b<x;b++)L[b]=0<A?D.i(b+C)>>>A|D.i(b+C+1)<<32-A:D.i(b+C);return new u(L,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,PT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Ts=u}).apply(typeof LE<"u"?LE:typeof self<"u"?self:typeof window<"u"?window:{});var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kT,uu,NT,jh,Cm,xT,bT,DT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,E){return c==Array.prototype||c==Object.prototype||(c[g]=E.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ph=="object"&&Ph];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var E=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var j=c[S];if(!(j in E))break e;E=E[j]}c=c[c.length-1],S=E[c],g=g(S),g!=S&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var E=0,S=!1,j={next:function(){if(!S&&E<c.length){var $=E++;return{value:g($,c[$]),done:!1}}return S=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,E){return c.call.apply(c.bind,arguments)}function w(c,g,E){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,S),c.apply(g,j)}}return function(){return c.apply(g,arguments)}}function I(c,g,E){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,I.apply(null,arguments)}function P(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var S=E.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function O(c,g){function E(){}E.prototype=g.prototype,c.aa=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(S,j,$){for(var ie=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)ie[nt-2]=arguments[nt];return g.prototype[j].apply(S,ie)}}function F(c){const g=c.length;if(0<g){const E=Array(g);for(let S=0;S<g;S++)E[S]=c[S];return E}return[]}function B(c,g){for(let E=1;E<arguments.length;E++){const S=arguments[E];if(f(S)){const j=c.length||0,$=S.length||0;c.length=j+$;for(let ie=0;ie<$;ie++)c[j+ie]=S[ie]}else c.push(S)}}class K{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function H(c){return/^[\s\xa0]*$/.test(c)}function ee(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function se(c){return se[" "](c),c}se[" "]=function(){};var Oe=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function Pe(c,g,E){for(const S in c)g.call(E,c[S],S,c)}function D(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function A(c){const g={};for(const E in c)g[E]=c[E];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,g){let E,S;for(let j=1;j<arguments.length;j++){S=arguments[j];for(E in S)c[E]=S[E];for(let $=0;$<C.length;$++)E=C[$],Object.prototype.hasOwnProperty.call(S,E)&&(c[E]=S[E])}}function L(c){var g=1;c=c.split(":");const E=[];for(;0<g&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function b(c){h.setTimeout(()=>{throw c},0)}function k(){var c=ye;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ft{constructor(){this.h=this.g=null}add(g,E){const S=Me.get();S.set(g,E),this.h?this.h.next=S:this.g=S,this.h=S}}var Me=new K(()=>new be,c=>c.reset());class be{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let De,re=!1,ye=new ft,ae=()=>{const c=h.Promise.resolve(void 0);De=()=>{c.then(V)}};var V=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(E){b(E)}var g=Me;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};h.addEventListener("test",E,g),h.removeEventListener("test",E,g)}catch{}return c})();function we(c,g){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Oe){e:{try{se(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&we.aa.h.call(this)}}O(we,pe);var Le={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),qe=0;function Je(c,g,E,S,j){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!S,this.ha=j,this.key=++qe,this.da=this.fa=!1}function ot(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Zt(c){this.src=c,this.g={},this.h=0}Zt.prototype.add=function(c,g,E,S,j){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ie=Re(c,g,S,j);return-1<ie?(g=c[ie],E||(g.fa=!1)):(g=new Je(g,this.src,$,!!S,j),g.fa=E,c.push(g)),g};function Fr(c,g){var E=g.type;if(E in c.g){var S=c.g[E],j=Array.prototype.indexOf.call(S,g,void 0),$;($=0<=j)&&Array.prototype.splice.call(S,j,1),$&&(ot(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Re(c,g,E,S){for(var j=0;j<c.length;++j){var $=c[j];if(!$.da&&$.listener==g&&$.capture==!!E&&$.ha==S)return j}return-1}var Yn="closure_lm_"+(1e6*Math.random()|0),st={};function Bo(c,g,E,S,j){if(Array.isArray(g)){for(var $=0;$<g.length;$++)Bo(c,g[$],E,S,j);return null}return E=Ui(E),c&&c[_e]?c.K(g,E,m(S)?!!S.capture:!1,j):un(c,g,E,!1,S,j)}function un(c,g,E,S,j,$){if(!g)throw Error("Invalid event type");var ie=m(j)?!!j.capture:!!j,nt=jn(c);if(nt||(c[Yn]=nt=new Zt(c)),E=nt.add(g,E,S,ie,$),E.proxy)return E;if(S=vn(),E.proxy=S,S.src=c,S.listener=E,c.addEventListener)ge||(j=ie),j===void 0&&(j=!1),c.addEventListener(g.toString(),S,j);else if(c.attachEvent)c.attachEvent(Jn(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return E}function vn(){function c(E){return g.call(c.src,c.listener,E)}const g=Zn;return c}function Fn(c,g,E,S,j){if(Array.isArray(g))for(var $=0;$<g.length;$++)Fn(c,g[$],E,S,j);else S=m(S)?!!S.capture:!!S,E=Ui(E),c&&c[_e]?(c=c.i,g=String(g).toString(),g in c.g&&($=c.g[g],E=Re($,E,S,j),-1<E&&(ot($[E]),Array.prototype.splice.call($,E,1),$.length==0&&(delete c.g[g],c.h--)))):c&&(c=jn(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,E,S,j)),(E=-1<c?g[c]:null)&&Xn(E))}function Xn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[_e])Fr(g.i,c);else{var E=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(E,S,c.capture):g.detachEvent?g.detachEvent(Jn(E),S):g.addListener&&g.removeListener&&g.removeListener(S),(E=jn(g))?(Fr(E,c),E.h==0&&(E.src=null,g[Yn]=null)):ot(c)}}}function Jn(c){return c in st?st[c]:st[c]="on"+c}function Zn(c,g){if(c.da)c=!0;else{g=new we(g,this);var E=c.listener,S=c.ha||c.src;c.fa&&Xn(c),c=E.call(S,g)}return c}function jn(c){return c=c[Yn],c instanceof Zt?c:null}var oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(c){return typeof c=="function"?c:(c[oi]||(c[oi]=function(g){return c.handleEvent(g)}),c[oi])}function Tt(){Q.call(this),this.i=new Zt(this),this.M=this,this.F=null}O(Tt,Q),Tt.prototype[_e]=!0,Tt.prototype.removeEventListener=function(c,g,E,S){Fn(this,c,g,E,S)};function Rt(c,g){var E,S=c.F;if(S)for(E=[];S;S=S.F)E.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new pe(g,c);else if(g instanceof pe)g.target=g.target||c;else{var j=g;g=new pe(S,c),x(g,j)}if(j=!0,E)for(var $=E.length-1;0<=$;$--){var ie=g.g=E[$];j=er(ie,S,!0,g)&&j}if(ie=g.g=c,j=er(ie,S,!0,g)&&j,j=er(ie,S,!1,g)&&j,E)for($=0;$<E.length;$++)ie=g.g=E[$],j=er(ie,S,!1,g)&&j}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var E=c.g[g],S=0;S<E.length;S++)ot(E[S]);delete c.g[g],c.h--}}this.F=null},Tt.prototype.K=function(c,g,E,S){return this.i.add(String(c),g,!1,E,S)},Tt.prototype.L=function(c,g,E,S){return this.i.add(String(c),g,!0,E,S)};function er(c,g,E,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,$=0;$<g.length;++$){var ie=g[$];if(ie&&!ie.da&&ie.capture==E){var nt=ie.listener,Ft=ie.ha||ie.src;ie.fa&&Fr(c.i,ie),j=nt.call(Ft,S)!==!1&&j}}return j&&!S.defaultPrevented}function Hs(c,g,E){if(typeof c=="function")E&&(c=I(c,E));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function pr(c){c.g=Hs(()=>{c.g=null,c.i&&(c.i=!1,pr(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ai extends Q{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:pr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(c){Q.call(this),this.h=c,this.g={}}O(li,Q);var Gs=[];function Bi(c){Pe(c.g,function(g,E){this.g.hasOwnProperty(E)&&Xn(g)},c),c.g={}}li.prototype.N=function(){li.aa.N.call(this),Bi(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ks=h.JSON.stringify,Qs=h.JSON.parse,zi=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function q(){}q.prototype.h=null;function fe(c){return c.h||(c.h=c.i())}function Xe(){}var tt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cn(){pe.call(this,"d")}O(cn,pe);function zo(){pe.call(this,"c")}O(zo,pe);var jr={},yl=null;function Ys(){return yl=yl||new Tt}jr.La="serverreachability";function vl(c){pe.call(this,jr.La,c)}O(vl,pe);function ui(c){const g=Ys();Rt(g,new vl(g))}jr.STAT_EVENT="statevent";function El(c,g){pe.call(this,jr.STAT_EVENT,c),this.stat=g}O(El,pe);function Pt(c){const g=Ys();Rt(g,new El(g,c))}jr.Ma="timingevent";function Wo(c,g){pe.call(this,jr.Ma,c),this.size=g}O(Wo,pe);function mr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function Js(c,g,E,S,j,$){c.info(function(){if(c.g)if($)for(var ie="",nt=$.split("&"),Ft=0;Ft<nt.length;Ft++){var He=nt[Ft].split("=");if(1<He.length){var $t=He[0];He=He[1];var bt=$t.split("_");ie=2<=bt.length&&bt[1]=="type"?ie+($t+"="+He+"&"):ie+($t+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+S+") [attempt "+j+"]: "+g+`
`+E+`
`+ie})}function $o(c,g,E,S,j,$,ie){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+j+"]: "+g+`
`+E+`
`+$+" "+ie})}function gr(c,g,E,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+yf(c,E)+(S?" "+S:"")})}function wl(c,g){c.info(function(){return"TIMEOUT: "+g})}Xs.prototype.info=function(){};function yf(c,g){if(!c.g)return g;if(!g)return null;try{var E=JSON.parse(g);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var S=E[c];if(!(2>S.length)){var j=S[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return Ks(E)}catch{return g}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_r;function Zs(){}O(Zs,q),Zs.prototype.g=function(){return new XMLHttpRequest},Zs.prototype.i=function(){return{}},_r=new Zs;function yr(c,g,E,S){this.j=c,this.i=g,this.l=E,this.R=S||1,this.U=new li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}var Il={},Ho={};function Go(c,g,E){c.L=1,c.v=Gi(Bn(g)),c.m=E,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),ut(c),c.A=Bn(c.v);var E=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Qi(E.i,"t",S),c.C=0,E=c.j.J,c.h=new fc,c.g=xc(c.j,E?g:null,!c.m),0<c.O&&(c.M=new ai(I(c.Y,c,c.g),c.O)),g=c.U,E=c.g,S=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(Gs[0]=j.toString()),j=Gs);for(var $=0;$<j.length;$++){var ie=Bo(E,j[$],S||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ui(),Js(c.i,c.u,c.A,c.l,c.R,c.m)}yr.prototype.ca=function(c){c=c.target;const g=this.M;g&&Pn(c)==3?g.j():this.Y(c)},yr.prototype.Y=function(c){try{if(c==this.g)e:{const bt=Pn(this.g);var g=this.g.Ba();const rr=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||bt!=4||g==7||(g==8||0>=rr?ui(3):ui(2)),eo(this);var E=this.g.Z();this.X=E;t:if(pc(this)){var S=kl(this.g);c="";var j=S.length,$=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),Wi(this);var ie="";break t}this.h.i=new h.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!($&&g==j-1)});S.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=E==200,$o(this.i,this.u,this.A,this.l,this.R,bt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var nt,Ft=this.g;if((nt=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(nt)){var He=nt;break t}}He=null}if(E=He)gr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,E);else{this.o=!1,this.s=3,Pt(12),tr(this),Wi(this);break e}}if(this.P){E=!0;let Wn;for(;!this.J&&this.C<ie.length;)if(Wn=vf(this,ie),Wn==Ho){bt==4&&(this.s=4,Pt(14),E=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Wn==Il){this.s=4,Pt(15),gr(this.i,this.l,ie,"[Invalid Chunk]"),E=!1;break}else gr(this.i,this.l,Wn,null),Sl(this,Wn);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||ie.length!=0||this.h.h||(this.s=1,Pt(16),E=!1),this.o=this.o&&E,!E)gr(this.i,this.l,ie,"[Invalid Chunked Response]"),tr(this),Wi(this);else if(0<ie.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),xl($t),$t.M=!0,Pt(11))}}else gr(this.i,this.l,ie,null),Sl(this,ie);bt==4&&tr(this),this.o&&!this.J&&(bt==4?ia(this.j,this):(this.o=!1,ut(this)))}else Zo(this.g),E==400&&0<ie.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),tr(this),Wi(this)}}}catch{}finally{}};function pc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function vf(c,g){var E=c.C,S=g.indexOf(`
`,E);return S==-1?Ho:(E=Number(g.substring(E,S)),isNaN(E)?Il:(S+=1,S+E>g.length?Ho:(g=g.slice(S,S+E),c.C=S+E,g)))}yr.prototype.cancel=function(){this.J=!0,tr(this)};function ut(c){c.S=Date.now()+c.I,mc(c,c.I)}function mc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=mr(I(c.ba,c),g)}function eo(c){c.B&&(h.clearTimeout(c.B),c.B=null)}yr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(wl(this.i,this.A),this.L!=2&&(ui(),Pt(17)),tr(this),this.s=2,Wi(this)):mc(this,this.S-c)};function Wi(c){c.j.G==0||c.J||ia(c.j,c)}function tr(c){eo(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Bi(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Sl(c,g){try{var E=c.j;if(E.G!=0&&(E.g==c||En(E.h,c))){if(!c.K&&En(E.h,c)&&E.G==3){try{var S=E.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var j=S;if(j[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)ra(E),Tr(E);else break e;na(E),Pt(18)}}else E.za=j[1],0<E.za-E.T&&37500>j[2]&&E.F&&E.v==0&&!E.C&&(E.C=mr(I(E.Za,E),6e3));if(1>=_c(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else pi(E,11)}else if((c.K||E.g==c)&&ra(E),!H(g))for(j=E.Da.g.parse(g),g=0;g<j.length;g++){let He=j[g];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const $t=He[3];$t!=null&&(E.la=$t,E.j.info("VER="+E.la));const bt=He[4];bt!=null&&(E.Aa=bt,E.j.info("SVER="+E.Aa));const rr=He[5];rr!=null&&typeof rr=="number"&&0<rr&&(S=1.5*rr,E.L=S,E.j.info("backChannelRequestTimeoutMs_="+S)),S=E;const Wn=c.g;if(Wn){const ao=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var $=S.h;$.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Cl($,$.h),$.h=null))}if(S.D){const oa=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(S.ya=oa,at(S.I,S.D,oa))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),S=E;var ie=c;if(S.qa=Nc(S,S.J?S.ia:null,S.W),ie.K){yc(S.h,ie);var nt=ie,Ft=S.L;Ft&&(nt.I=Ft),nt.B&&(eo(nt),ut(nt)),S.g=ie}else oo(S);0<E.i.length&&Wr(E)}else He[0]!="stop"&&He[0]!="close"||pi(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?pi(E,7):tn(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}ui(4)}catch{}}var gc=class{constructor(c,g){this.g=c,this.map=g}};function to(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Un(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function _c(c){return c.h?1:c.g?c.g.size:0}function En(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Cl(c,g){c.g?c.g.add(g):c.h=g}function yc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}to.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.D);return g}return F(c.i)}function Ko(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],E=c.length,S=0;S<E;S++)g.push(c[S]);return g}g=[],E=0;for(S in c)g[E++]=c[S];return g}function Qo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var E=0;E<c;E++)g.push(E);return g}g=[],E=0;for(const S in c)g[E++]=S;return g}}}function $i(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var E=Qo(c),S=Ko(c),j=S.length,$=0;$<j;$++)g.call(void 0,S[$],E&&E[$],c)}var no=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ef(c,g){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var S=c[E].indexOf("="),j=null;if(0<=S){var $=c[E].substring(0,S);j=c[E].substring(S+1)}else $=c[E];g($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ci(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ci){this.h=c.h,ro(this,c.j),this.o=c.o,this.g=c.g,qi(this,c.s),this.l=c.l;var g=c.i,E=new Ur;E.i=g.i,g.g&&(E.g=new Map(g.g),E.h=g.h),Hi(this,E),this.m=c.m}else c&&(g=String(c).match(no))?(this.h=!1,ro(this,g[1]||"",!0),this.o=$e(g[2]||""),this.g=$e(g[3]||"",!0),qi(this,g[4]),this.l=$e(g[5]||"",!0),Hi(this,g[6]||"",!0),this.m=$e(g[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}ci.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ki(g,Yo,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ki(g,Yo,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Ki(E,E.charAt(0)=="/"?Ic:wc,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Ki(E,Al)),c.join("")};function Bn(c){return new ci(c)}function ro(c,g,E){c.j=E?$e(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function qi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Hi(c,g,E){g instanceof Ur?(c.i=g,Br(c.i,c.h)):(E||(g=Ki(g,Tc)),c.i=new Ur(g,c.h))}function at(c,g,E){c.i.set(g,E)}function Gi(c){return at(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function $e(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ki(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,Ec),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ec(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Yo=/[#\/\?@]/g,wc=/[#\?:]/g,Ic=/[#\?]/g,Tc=/[#\?@]/g,Al=/#/g;function Ur(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function en(c){c.g||(c.g=new Map,c.h=0,c.i&&Ef(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}n=Ur.prototype,n.add=function(c,g){en(this),this.i=null,c=nr(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function vr(c,g){en(c),g=nr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Er(c,g){return en(c),g=nr(c,g),c.g.has(g)}n.forEach=function(c,g){en(this),this.g.forEach(function(E,S){E.forEach(function(j){c.call(g,j,S,this)},this)},this)},n.na=function(){en(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),E=[];for(let S=0;S<g.length;S++){const j=c[S];for(let $=0;$<j.length;$++)E.push(g[S])}return E},n.V=function(c){en(this);let g=[];if(typeof c=="string")Er(this,c)&&(g=g.concat(this.g.get(nr(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)g=g.concat(c[E])}return g},n.set=function(c,g){return en(this),this.i=null,c=nr(this,c),Er(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Qi(c,g,E){vr(c,g),0<E.length&&(c.i=null,c.g.set(nr(c,g),F(E)),c.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var E=0;E<g.length;E++){var S=g[E];const $=encodeURIComponent(String(S)),ie=this.V(S);for(S=0;S<ie.length;S++){var j=$;ie[S]!==""&&(j+="="+encodeURIComponent(String(ie[S]))),c.push(j)}}return this.i=c.join("&")};function nr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Br(c,g){g&&!c.j&&(en(c),c.i=null,c.g.forEach(function(E,S){var j=S.toLowerCase();S!=j&&(vr(this,S),Qi(this,j,E))},c)),c.j=g}function wf(c,g){const E=new Xs;if(h.Image){const S=new Image;S.onload=P(Rn,E,"TestLoadImage: loaded",!0,g,S),S.onerror=P(Rn,E,"TestLoadImage: error",!1,g,S),S.onabort=P(Rn,E,"TestLoadImage: abort",!1,g,S),S.ontimeout=P(Rn,E,"TestLoadImage: timeout",!1,g,S),h.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Sc(c,g){const E=new Xs,S=new AbortController,j=setTimeout(()=>{S.abort(),Rn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then($=>{clearTimeout(j),$.ok?Rn(E,"TestPingServer: ok",!0,g):Rn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),Rn(E,"TestPingServer: error",!1,g)})}function Rn(c,g,E,S,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),S(E)}catch{}}function If(){this.g=new zi}function Cc(c,g,E){const S=E||"";try{$i(c,function(j,$){let ie=j;m(j)&&(ie=Ks(j)),g.push(S+$+"="+encodeURIComponent(ie))})}catch(j){throw g.push(S+"type="+encodeURIComponent("_badmap")),j}}function hi(c){this.l=c.Ub||null,this.j=c.eb||!1}O(hi,q),hi.prototype.g=function(){return new io(this.l,this.j)},hi.prototype.i=(function(c){return function(){return c}})({});function io(c,g){Tt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(io,Tt),n=io.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Ir(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ac(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ac(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?wr(this):Ir(this),this.readyState==3&&Ac(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,wr(this))},n.Qa=function(c){this.g&&(this.response=c,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ir(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function Ir(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function di(c){let g="";return Pe(c,function(E,S){g+=S,g+=":",g+=E,g+=`\r
`}),g}function Yi(c,g,E){e:{for(S in E){var S=!1;break e}S=!0}S||(E=di(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):at(c,g,E))}function _t(c){Tt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(_t,Tt);var Tf=/^https?$/i,Rl=["POST","PUT"];n=_t.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,E,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_r.g(),this.v=this.o?fe(this.o):fe(_r),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch($){so(this,$);return}if(c=E||"",E=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var j in S)E.set(j,S[j]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const $ of S.keys())E.set($,S.get($));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(E.keys()).find($=>$.toLowerCase()=="content-type"),j=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||S||j||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of E)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jo(this),this.u=!0,this.g.send(c),this.u=!1}catch($){so(this,$)}};function so(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Xo(c),zn(c)}function Xo(c){c.A||(c.A=!0,Rt(c,"complete"),Rt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Rt(this,"complete"),Rt(this,"abort"),zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zn(this,!0)),_t.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pl(this):this.bb())},n.bb=function(){Pl(this)};function Pl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Pn(c)!=4||c.Z()!=2)){if(c.u&&Pn(c)==4)Hs(c.Ea,0,c);else if(Rt(c,"readystatechange"),Pn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var S;if(S=ie===0){var j=String(c.D).match(no)[1]||null;!j&&h.self&&h.self.location&&(j=h.self.location.protocol.slice(0,-1)),S=!Tf.test(j?j.toLowerCase():"")}E=S}if(E)Rt(c,"complete"),Rt(c,"success");else{c.m=6;try{var $=2<Pn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Xo(c)}}finally{zn(c)}}}}function zn(c,g){if(c.g){Jo(c);const E=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Rt(c,"ready");try{E.onreadystatechange=S}catch{}}}function Jo(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Pn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Qs(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(c){const g={};c=(c.g&&2<=Pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(H(c[S]))continue;var E=L(c[S]);const j=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const $=g[j]||[];g[j]=$,$.push(E)}D(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zr(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Nl(c){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zr("baseRetryDelayMs",5e3,c),this.cb=zr("retryDelaySeedMs",1e4,c),this.Wa=zr("forwardChannelMaxRetries",2,c),this.wa=zr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new to(c&&c.concurrentRequestLimit),this.Da=new If,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Nl.prototype,n.la=8,n.G=1,n.connect=function(c,g,E,S){Pt(0),this.W=c,this.H=g||{},E&&S!==void 0&&(this.H.OSID=E,this.H.OAID=S),this.F=this.X,this.I=Nc(this,null,this.W),Wr(this)};function tn(c){if(ea(c),c.G==3){var g=c.U++,E=Bn(c.I);if(at(E,"SID",c.K),at(E,"RID",g),at(E,"TYPE","terminate"),fi(c,E),g=new yr(c,c.j,g),g.L=2,g.v=Gi(Bn(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=g.v,E=!0),E||(g.g=xc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ut(g)}kc(c)}function Tr(c){c.g&&(xl(c),c.g.cancel(),c.g=null)}function ea(c){Tr(c),c.u&&(h.clearTimeout(c.u),c.u=null),ra(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function Wr(c){if(!Un(c.h)&&!c.s){c.s=!0;var g=c.Ga;De||ae(),re||(De(),re=!0),ye.add(g,c),c.B=0}}function Sf(c,g){return _c(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=mr(I(c.Ga,c,g),Pc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new yr(this,this.j,c);let $=this.o;if(this.S&&($?($=A($),x($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var S=this.i[E];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Xi(this,j,g),E=Bn(this.I),at(E,"RID",c),at(E,"CVER",22),this.D&&at(E,"X-HTTP-Session-Id",this.D),fi(this,E),$&&(this.O?g="headers="+encodeURIComponent(String(di($)))+"&"+g:this.m&&Yi(E,this.m,$)),Cl(this.h,j),this.Ua&&at(E,"TYPE","init"),this.P?(at(E,"$req",g),at(E,"SID","null"),j.T=!0,Go(j,E,null)):Go(j,E,g),this.G=2}}else this.G==3&&(c?ta(this,c):this.i.length==0||Un(this.h)||ta(this))};function ta(c,g){var E;g?E=g.l:E=c.U++;const S=Bn(c.I);at(S,"SID",c.K),at(S,"RID",E),at(S,"AID",c.T),fi(c,S),c.m&&c.o&&Yi(S,c.m,c.o),E=new yr(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Xi(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Cl(c.h,E),Go(E,S,g)}function fi(c,g){c.H&&Pe(c.H,function(E,S){at(g,S,E)}),c.l&&$i({},function(E,S){at(g,S,E)})}function Xi(c,g,E){E=Math.min(c.i.length,E);var S=c.l?I(c.l.Na,c.l,c):null;e:{var j=c.i;let $=-1;for(;;){const ie=["count="+E];$==-1?0<E?($=j[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let nt=!0;for(let Ft=0;Ft<E;Ft++){let He=j[Ft].g;const $t=j[Ft].map;if(He-=$,0>He)$=Math.max(0,j[Ft].g-100),nt=!1;else try{Cc($t,ie,"req"+He+"_")}catch{S&&S($t)}}if(nt){S=ie.join("&");break e}}}return c=c.i.splice(0,E),g.D=c,S}function oo(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;De||ae(),re||(De(),re=!0),ye.add(g,c),c.v=0}}function na(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=mr(I(c.Fa,c),Pc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=mr(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Tr(this),Rc(this))};function xl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Rc(c){c.g=new yr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Bn(c.qa);at(g,"RID","rpc"),at(g,"SID",c.K),at(g,"AID",c.T),at(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&at(g,"TO",c.ja),at(g,"TYPE","xmlhttp"),fi(c,g),c.m&&c.o&&Yi(g,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=Gi(Bn(g)),E.m=null,E.P=!0,Tl(E,c)}n.Za=function(){this.C!=null&&(this.C=null,Tr(this),na(this),Pt(19))};function ra(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function ia(c,g){var E=null;if(c.g==g){ra(c),xl(c),c.g=null;var S=2}else if(En(c.h,g))E=g.D,yc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){E=g.m?g.m.length:0,g=Date.now()-g.F;var j=c.B;S=Ys(),Rt(S,new Wo(S,E)),Wr(c)}else oo(c);else if(j=g.s,j==3||j==0&&0<g.X||!(S==1&&Sf(c,g)||S==2&&na(c)))switch(E&&0<E.length&&(g=c.h,g.i=g.i.concat(E)),j){case 1:pi(c,5);break;case 4:pi(c,10);break;case 3:pi(c,6);break;default:pi(c,2)}}}function Pc(c,g){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*g}function pi(c,g){if(c.j.info("Error code "+g),g==2){var E=I(c.fb,c),S=c.Xa;const j=!S;S=new ci(S||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ro(S,"https"),Gi(S),j?wf(S.toString(),E):Sc(S.toString(),E)}else Pt(2);c.G=0,c.l&&c.l.sa(g),kc(c),ea(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function kc(c){if(c.G=0,c.ka=[],c.l){const g=vc(c.h);(g.length!=0||c.i.length!=0)&&(B(c.ka,g),B(c.ka,c.i),c.h.i.length=0,F(c.i),c.i.length=0),c.l.ra()}}function Nc(c,g,E){var S=E instanceof ci?Bn(E):new ci(E);if(S.g!="")g&&(S.g=g+"."+S.g),qi(S,S.s);else{var j=h.location;S=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var $=new ci(null);S&&ro($,S),g&&($.g=g),j&&qi($,j),E&&($.l=E),S=$}return E=c.D,g=c.ya,E&&g&&at(S,E,g),at(S,"VER",c.la),fi(c,S),S}function xc(c,g,E){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new _t(new hi({eb:E})):new _t(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bl(){}n=bl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sa(){}sa.prototype.g=function(c,g){return new wn(c,g)};function wn(c,g){Tt.call(this),this.g=new Nl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!H(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!H(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new $r(this)}O(wn,Tt),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){tn(this.g)},wn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Ks(c),c=E);g.i.push(new gc(g.Ya++,c)),g.G==3&&Wr(g)},wn.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,wn.aa.N.call(this)};function bc(c){cn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}O(bc,cn);function Dc(){zo.call(this),this.status=1}O(Dc,zo);function $r(c){this.g=c}O($r,bl),$r.prototype.ua=function(){Rt(this.g,"a")},$r.prototype.ta=function(c){Rt(this.g,new bc(c))},$r.prototype.sa=function(c){Rt(this.g,new Dc)},$r.prototype.ra=function(){Rt(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,DT=function(){return new sa},bT=function(){return Ys()},xT=jr,Cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,jh=qo,dc.COMPLETE="complete",NT=dc,Xe.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,uu=Xe,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,kT=_t}).apply(typeof Ph<"u"?Ph:typeof self<"u"?self:typeof window<"u"?window:{});const VE="@firebase/firestore",FE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ll="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Dd("@firebase/firestore");function Pa(){return Po.logLevel}function ue(n,...e){if(Po.logLevel<=ze.DEBUG){const t=e.map(Ag);Po.debug(`Firestore (${ll}): ${n}`,...t)}}function Di(n,...e){if(Po.logLevel<=ze.ERROR){const t=e.map(Ag);Po.error(`Firestore (${ll}): ${n}`,...t)}}function Ns(n,...e){if(Po.logLevel<=ze.WARN){const t=e.map(Ag);Po.warn(`Firestore (${ll}): ${n}`,...t)}}function Ag(n){if(typeof n=="string")return n;try{/**
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
 */function Ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,OT(n,r,t)}function OT(n,e,t){let r=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Di(r),new Error(r)}function et(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||OT(e,s,r)}function xe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Vi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gn.UNAUTHENTICATED)))}shutdown(){}}class Zk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eN{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ss,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},h=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>h(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ss)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string",31837,{l:r}),new MT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string",2055,{h:e}),new gn(e)}}class tN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(gn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){et(this.o===void 0,3512);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(et(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function LT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Ve(n,e){return n<e?-1:n>e?1:0}function Am(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Ve(r,s);{const a=LT(),u=sN(a.encode(UE(n,t)),a.encode(UE(e,t)));return u!==0?u:Ve(r,s)}}t+=r>65535?2:1}return Ve(n.length,e.length)}function UE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ve(n[t],e[t]);return Ve(n.length,e.length)}function Ha(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="__name__";class Qr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Qr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Ve(e.length,t.length)}static compareSegments(e,t){const r=Qr.isNumericId(e),s=Qr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Qr.extractNumericId(e).compare(Qr.extractNumericId(t)):Am(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class dt extends Qr{construct(e,t,r){return new dt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new dt(t)}static emptyPath(){return new dt([])}}const oN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Qr{construct(e,t,r){return new on(e,t,r)}static isValidIdentifier(e){return oN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===BE}static keyField(){return new on([BE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new oe(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new oe(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(r+=h,s++):(a(),s++)}if(a(),u)throw new oe(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new on(t)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(dt.fromString(e))}static fromName(e){return new ve(dt.fromString(e).popFirst(5))}static empty(){return new ve(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return dt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new dt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n,e,t){if(!t)throw new oe(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aN(n,e,t,r){if(e===!0&&r===!0)throw new oe(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zE(n){if(!ve.isDocumentKey(n))throw new oe(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function WE(n){if(ve.isDocumentKey(n))throw new oe(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function FT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jd(n);throw new oe(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Lt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qu(n,e){if(!FT(n))throw new oe(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=-62135596800,qE=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qE);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$E)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qE}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:gt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qu(e,gt._jsonSchema))return new gt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$E;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}gt._jsonSchemaVersion="firestore/timestamp/1.0",gt._jsonSchema={type:Lt("string",gt._jsonSchemaVersion),seconds:Lt("number"),nanoseconds:Lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new gt(0,0))}static max(){return new Ne(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Nu=-1;function lN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ne.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new xs(s,ve.empty(),e)}function uN(n){return new xs(n.readTime,n.key,Nu)}class xs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xs(Ne.min(),ve.empty(),Nu)}static max(){return new xs(Ne.max(),ve.empty(),Nu)}}function cN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
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
 */const hN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==hN)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,r)=>{t(e)}))}static reject(e){return new Y(((t,r)=>{r(e)}))}static waitFor(e){return new Y(((t,r)=>{let s=0,a=0,u=!1;e.forEach((h=>{++s,h.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Y.resolve(!1);for(const r of e)t=t.next((s=>s?Y.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Y(((r,s)=>{const a=e.length,u=new Array(a);let h=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++h,h===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new Y(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function fN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ud.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=-1;function Bd(n){return n==null}function sd(n){return n===0&&1/n==-1/0}function pN(n){return typeof n=="number"&&Number.isInteger(n)&&!sd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="";function mN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=HE(e)),e=gN(n.get(t),e);return HE(e)}function gN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case jT:t+="";break;default:t+=a}}return t}function HE(n){return n+jT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function UT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt=class Rm{constructor(e,t){this.comparator=e,this.root=t||Cs.EMPTY}insert(e,t){return new Rm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Cs.BLACK,null,null))}remove(e){return new Rm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kh(this.root,e,this.comparator,!0)}},kh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Cs=class Ti{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ti.RED,this.left=s??Ti.EMPTY,this.right=a??Ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Ti(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ti.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ti.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};Cs.EMPTY=null,Cs.RED=!0,Cs.BLACK=!1;Cs.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Cs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new KE(this.data.getIterator())}getIteratorFrom(e){return new KE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class KE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gn{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new Gn([])}unionWith(e){let t=new zt(on.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ha(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class BT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new BT("Invalid base64 string: "+a):a}})(e);return new ln(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new ln(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const _N=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(n){if(et(!!n,39018),typeof n=="string"){let e=0;const t=_N.exec(n);if(et(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ds(n){return typeof n=="string"?ln.fromBase64String(n):ln.fromUint8Array(n)}/**
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
 */const zT="server_timestamp",WT="__type__",$T="__previous_value__",qT="__local_write_time__";function kg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[WT])===null||t===void 0?void 0:t.stringValue)===zT}function zd(n){const e=n.mapValue.fields[$T];return kg(e)?zd(e):e}function xu(n){const e=bs(n.mapValue.fields[qT].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,r,s,a,u,h,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const od="(default)";class bu{constructor(e,t){this.projectId=e,this.database=t||od}static empty(){return new bu("","")}get isDefaultDatabase(){return this.database===od}isEqual(e){return e instanceof bu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const HT="__type__",vN="__max__",Nh={mapValue:{}},GT="__vector__",ad="value";function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kg(n)?4:wN(n)?9007199254740991:EN(n)?10:11:Ae(28295,{value:n})}function ii(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xu(n).isEqual(xu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=bs(s.timestampValue),h=bs(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Ds(s.bytesValue).isEqual(Ds(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return xt(s.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return xt(s.integerValue)===xt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=xt(s.doubleValue),h=xt(a.doubleValue);return u===h?sd(u)===sd(h):isNaN(u)&&isNaN(h)}return!1})(n,e);case 9:return Ha(n.arrayValue.values||[],e.arrayValue.values||[],ii);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},h=a.mapValue.fields||{};if(GE(u)!==GE(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!ii(u[f],h[f])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function Du(n,e){return(n.values||[]).find((t=>ii(t,e)))!==void 0}function Ga(n,e){if(n===e)return 0;const t=Os(n),r=Os(e);if(t!==r)return Ve(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const h=xt(a.integerValue||a.doubleValue),f=xt(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1})(n,e);case 3:return QE(n.timestampValue,e.timestampValue);case 4:return QE(xu(n),xu(e));case 5:return Am(n.stringValue,e.stringValue);case 6:return(function(a,u){const h=Ds(a),f=Ds(u);return h.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const h=a.split("/"),f=u.split("/");for(let m=0;m<h.length&&m<f.length;m++){const y=Ve(h[m],f[m]);if(y!==0)return y}return Ve(h.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const h=Ve(xt(a.latitude),xt(u.latitude));return h!==0?h:Ve(xt(a.longitude),xt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return YE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var h,f,m,y;const w=a.fields||{},I=u.fields||{},P=(h=w[ad])===null||h===void 0?void 0:h.arrayValue,O=(f=I[ad])===null||f===void 0?void 0:f.arrayValue,F=Ve(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0);return F!==0?F:YE(P,O)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Nh.mapValue&&u===Nh.mapValue)return 0;if(a===Nh.mapValue)return 1;if(u===Nh.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let w=0;w<f.length&&w<y.length;++w){const I=Am(f[w],y[w]);if(I!==0)return I;const P=Ga(h[f[w]],m[y[w]]);if(P!==0)return P}return Ve(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function QE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=bs(n),r=bs(e),s=Ve(t.seconds,r.seconds);return s!==0?s:Ve(t.nanos,r.nanos)}function YE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ga(t[s],r[s]);if(a)return a}return Ve(t.length,r.length)}function Ka(n){return Pm(n)}function Pm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=bs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ds(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ve.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Pm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Pm(t.fields[u])}`;return s+"}"})(n.mapValue):Ae(61005,{value:n})}function Uh(n){switch(Os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zd(n);return e?16+Uh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Uh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ws(r.fields,((a,u)=>{s+=a.length+Uh(u)})),s})(n.mapValue);default:throw Ae(13486,{value:n})}}function XE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function km(n){return!!n&&"integerValue"in n}function Ng(n){return!!n&&"arrayValue"in n}function JE(n){return!!n&&"nullValue"in n}function ZE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bh(n){return!!n&&"mapValue"in n}function EN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[HT])===null||t===void 0?void 0:t.stringValue)===GT}function gu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ws(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=gu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gu(t)}setAll(e){let t=on.emptyPath(),r={},s=[];e.forEach(((u,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=h.popLast()}u?r[h.lastSegment()]=gu(u):s.push(h.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Bh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Bh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ws(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Ln(gu(this.value))}}function KT(n){const e=[];return Ws(n.fields,((t,r)=>{const s=new on([t]);if(Bh(r)){const a=KT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,r,s,a,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new _n(e,0,Ne.min(),Ne.min(),Ne.min(),Ln.empty(),0)}static newFoundDocument(e,t,r,s){return new _n(e,1,t,Ne.min(),r,s,0)}static newNoDocument(e,t){return new _n(e,2,t,Ne.min(),Ne.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new _n(e,3,t,Ne.min(),Ne.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ld{constructor(e,t){this.position=e,this.inclusive=t}}function ew(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=ve.comparator(ve.fromName(u.referenceValue),t.key):r=Ga(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function tw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ii(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ou{constructor(e,t="asc"){this.field=e,this.dir=t}}function IN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class QT{}class Mt extends QT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new SN(e,t,r):t==="array-contains"?new RN(e,r):t==="in"?new PN(e,r):t==="not-in"?new kN(e,r):t==="array-contains-any"?new NN(e,r):new Mt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new CN(e,r):new AN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ga(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison(Ga(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lr extends QT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Lr(e,t)}matches(e){return YT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function YT(n){return n.op==="and"}function XT(n){return TN(n)&&YT(n)}function TN(n){for(const e of n.filters)if(e instanceof Lr)return!1;return!0}function Nm(n){if(n instanceof Mt)return n.field.canonicalString()+n.op.toString()+Ka(n.value);if(XT(n))return n.filters.map((e=>Nm(e))).join(",");{const e=n.filters.map((t=>Nm(t))).join(",");return`${n.op}(${e})`}}function JT(n,e){return n instanceof Mt?(function(r,s){return s instanceof Mt&&r.op===s.op&&r.field.isEqual(s.field)&&ii(r.value,s.value)})(n,e):n instanceof Lr?(function(r,s){return s instanceof Lr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,h)=>a&&JT(u,s.filters[h])),!0):!1})(n,e):void Ae(19439)}function ZT(n){return n instanceof Mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ka(t.value)}`})(n):n instanceof Lr?(function(t){return t.op.toString()+" {"+t.getFilters().map(ZT).join(" ,")+"}"})(n):"Filter"}class SN extends Mt{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class CN extends Mt{constructor(e,t){super(e,"in",t),this.keys=e0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AN extends Mt{constructor(e,t){super(e,"not-in",t),this.keys=e0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function e0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ve.fromName(r.referenceValue)))}class RN extends Mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ng(t)&&Du(t.arrayValue,this.value)}}class PN extends Mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Du(this.value.arrayValue,t)}}class kN extends Mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Du(this.value.arrayValue,t)}}class NN extends Mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ng(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Du(this.value.arrayValue,r)))}}/**
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
 */class xN{constructor(e,t=null,r=[],s=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=h,this.Pe=null}}function nw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new xN(n,e,t,r,s,a,u)}function xg(n){const e=xe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Nm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Bd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ka(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ka(r))).join(",")),e.Pe=t}return e.Pe}function bg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!IN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!JT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tw(n.startAt,e.startAt)&&tw(n.endAt,e.endAt)}function xm(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t=null,r=[],s=[],a=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function bN(n,e,t,r,s,a,u,h){return new hl(n,e,t,r,s,a,u,h)}function Wd(n){return new hl(n)}function rw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function t0(n){return n.collectionGroup!==null}function _u(n){const e=xe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new zt(on.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(h=h.add(m.field))}))})),h})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Ou(a,r))})),t.has(on.keyField().canonicalString())||e.Te.push(new Ou(on.keyField(),r))}return e.Te}function ei(n){const e=xe(n);return e.Ie||(e.Ie=DN(e,_u(n))),e.Ie}function DN(n,e){if(n.limitType==="F")return nw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Ou(s.field,a)}));const t=n.endAt?new ld(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ld(n.startAt.position,n.startAt.inclusive):null;return nw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bm(n,e){const t=n.filters.concat([e]);return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ud(n,e,t){return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $d(n,e){return bg(ei(n),ei(e))&&n.limitType===e.limitType}function n0(n){return`${xg(ei(n))}|lt:${n.limitType}`}function ka(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>ZT(s))).join(", ")}]`),Bd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ka(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ka(s))).join(",")),`Target(${r})`})(ei(n))}; limitType=${n.limitType})`}function qd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ve.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of _u(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,h,f){const m=ew(u,h,f);return u.inclusive?m<=0:m<0})(r.startAt,_u(r),s)||r.endAt&&!(function(u,h,f){const m=ew(u,h,f);return u.inclusive?m>=0:m>0})(r.endAt,_u(r),s))})(n,e)}function ON(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function r0(n){return(e,t)=>{let r=!1;for(const s of _u(n)){const a=MN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function MN(n,e,t){const r=n.field.isKeyField()?ve.comparator(e.key,t.key):(function(a,u,h){const f=u.data.field(a),m=h.data.field(a);return f!==null&&m!==null?Ga(f,m):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return UT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new Vt(ve.comparator);function Oi(){return LN}const i0=new Vt(ve.comparator);function cu(...n){let e=i0;for(const t of n)e=e.insert(t.key,t);return e}function s0(n){let e=i0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function To(){return yu()}function o0(){return yu()}function yu(){return new Vo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const VN=new Vt(ve.comparator),FN=new zt(ve.comparator);function We(...n){let e=FN;for(const t of n)e=e.add(t);return e}const jN=new zt(Ve);function UN(){return jN}/**
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
 */function Dg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sd(e)?"-0":e}}function a0(n){return{integerValue:""+n}}function BN(n,e){return pN(e)?a0(e):Dg(n,e)}/**
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
 */class Hd{constructor(){this._=void 0}}function zN(n,e,t){return n instanceof Mu?(function(s,a){const u={fields:{[WT]:{stringValue:zT},[qT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&kg(a)&&(a=zd(a)),a&&(u.fields[$T]=a),{mapValue:u}})(t,e):n instanceof Qa?u0(n,e):n instanceof Lu?c0(n,e):(function(s,a){const u=l0(s,a),h=iw(u)+iw(s.Ee);return km(u)&&km(s.Ee)?a0(h):Dg(s.serializer,h)})(n,e)}function WN(n,e,t){return n instanceof Qa?u0(n,e):n instanceof Lu?c0(n,e):t}function l0(n,e){return n instanceof cd?(function(r){return km(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Mu extends Hd{}class Qa extends Hd{constructor(e){super(),this.elements=e}}function u0(n,e){const t=h0(e);for(const r of n.elements)t.some((s=>ii(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Lu extends Hd{constructor(e){super(),this.elements=e}}function c0(n,e){let t=h0(e);for(const r of n.elements)t=t.filter((s=>!ii(s,r)));return{arrayValue:{values:t}}}class cd extends Hd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iw(n){return xt(n.integerValue||n.doubleValue)}function h0(n){return Ng(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t){this.field=e,this.transform=t}}function $N(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Qa&&s instanceof Qa||r instanceof Lu&&s instanceof Lu?Ha(r.elements,s.elements,ii):r instanceof cd&&s instanceof cd?ii(r.Ee,s.Ee):r instanceof Mu&&s instanceof Mu})(n.transform,e.transform)}class qN{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gd{}function f0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kd(n.key,Cn.none()):new Yu(n.key,n.data,Cn.none());{const t=n.data,r=Ln.empty();let s=new zt(on.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new $s(n.key,r,new Gn(s.toArray()),Cn.none())}}function HN(n,e,t){n instanceof Yu?(function(s,a,u){const h=s.value.clone(),f=ow(s.fieldTransforms,a,u.transformResults);h.setAll(f),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,e,t):n instanceof $s?(function(s,a,u){if(!zh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const h=ow(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(p0(s)),f.setAll(h),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function vu(n,e,t,r){return n instanceof Yu?(function(a,u,h,f){if(!zh(a.precondition,u))return h;const m=a.value.clone(),y=aw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof $s?(function(a,u,h,f){if(!zh(a.precondition,u))return h;const m=aw(a.fieldTransforms,f,u),y=u.data;return y.setAll(p0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,h){return zh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h})(n,e,t)}function GN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=l0(r.transform,s||null);a!=null&&(t===null&&(t=Ln.empty()),t.set(r.field,a))}return t||null}function sw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ha(r,s,((a,u)=>$N(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yu extends Gd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends Gd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function p0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ow(n,e,t){const r=new Map;et(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,h=e.data.field(a.field);r.set(a.field,WN(u,h,t[s]))}return r}function aw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,zN(a,u,e))}return r}class Kd extends Gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KN extends Gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&HN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=o0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=t.has(s.key)?null:h;const f=f0(u,h);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ne.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),We())}isEqual(e){return this.batchId===e.batchId&&Ha(this.mutations,e.mutations,((t,r)=>sw(t,r)))&&Ha(this.baseMutations,e.baseMutations,((t,r)=>sw(t,r)))}}class Og{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){et(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return VN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Og(e,t,r,s)}}/**
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
 */class YN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,Ge;function JN(n){switch(n){case G.OK:return Ae(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function m0(n){if(n===void 0)return Di("GRPC error has no .code"),G.UNKNOWN;switch(n){case Ot.OK:return G.OK;case Ot.CANCELLED:return G.CANCELLED;case Ot.UNKNOWN:return G.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return G.INTERNAL;case Ot.UNAVAILABLE:return G.UNAVAILABLE;case Ot.UNAUTHENTICATED:return G.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case Ot.NOT_FOUND:return G.NOT_FOUND;case Ot.ALREADY_EXISTS:return G.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return G.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case Ot.ABORTED:return G.ABORTED;case Ot.OUT_OF_RANGE:return G.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return G.UNIMPLEMENTED;case Ot.DATA_LOSS:return G.DATA_LOSS;default:return Ae(39323,{code:n})}}(Ge=Ot||(Ot={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZN=new Ts([4294967295,4294967295],0);function lw(n){const e=LT().encode(n),t=new PT;return t.update(e),new Uint8Array(t.digest())}function uw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([s,a],0)]}class Mg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hu(`Invalid padding: ${t}`);if(r<0)throw new hu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ts.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ts.fromNumber(r)));return s.compare(ZN)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=lw(e),[r,s]=uw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Mg(a,s,t);return r.forEach((h=>u.insert(h))),u}insert(e){if(this.fe===0)return;const t=lw(e),[r,s]=uw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Qd(Ne.min(),s,new Vt(Ve),Oi(),We())}}class Xu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xu(r,t,We(),We(),We())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class g0{constructor(e,t){this.targetId=e,this.De=t}}class _0{constructor(e,t,r=ln.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cw{constructor(){this.ve=0,this.Ce=hw(),this.Fe=ln.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=We(),t=We(),r=We();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ae(38017,{changeType:a})}})),new Xu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=hw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ex{constructor(e){this.We=e,this.Ge=new Map,this.ze=Oi(),this.je=xh(),this.Je=xh(),this.He=new Vt(Ve)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(xm(a))if(r===0){const u=new ve(a.path);this.Xe(t,u,_n.newNoDocument(u,Ne.min()))}else et(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const h=this._t(e),f=h?this.ut(h,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,h;try{u=Ds(r).toUint8Array()}catch(f){if(f instanceof BT)return Ns("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new Mg(u,s,a)}catch(f){return Ns(f instanceof hu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.fe===0?null:h}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const h=this.st(u);if(h){if(a.current&&xm(h.target)){const f=new ve(h.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,_n.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=We();this.Je.forEach(((a,u)=>{let h=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Qd(e,t,this.He,this.ze,r);return this.ze=Oi(),this.je=xh(),this.Je=xh(),this.He=new Vt(Ve),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new cw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new zt(Ve),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new zt(Ve),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new cw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function xh(){return new Vt(ve.comparator)}function hw(){return new Vt(ve.comparator)}const tx={asc:"ASCENDING",desc:"DESCENDING"},nx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rx={and:"AND",or:"OR"};class ix{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dm(n,e){return n.useProto3Json||Bd(e)?e:{value:e}}function hd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sx(n,e){return hd(n,e.toTimestamp())}function ti(n){return et(!!n,49232),Ne.fromTimestamp((function(t){const r=bs(t);return new gt(r.seconds,r.nanos)})(n))}function Lg(n,e){return Om(n,e).canonicalString()}function Om(n,e){const t=(function(s){return new dt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function v0(n){const e=dt.fromString(n);return et(S0(e),10190,{key:e.toString()}),e}function Mm(n,e){return Lg(n.databaseId,e.path)}function nm(n,e){const t=v0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(w0(t))}function E0(n,e){return Lg(n.databaseId,e)}function ox(n){const e=v0(n);return e.length===4?dt.emptyPath():w0(e)}function Lm(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function w0(n){return et(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function dw(n,e,t){return{name:Mm(n,e),fields:t.value.mapValue.fields}}function ax(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(et(y===void 0||typeof y=="string",58123),ln.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ln.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&(function(m){const y=m.code===void 0?G.UNKNOWN:m0(m.code);return new oe(y,m.message||"")})(u);t=new _0(r,s,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nm(n,r.document.name),a=ti(r.document.updateTime),u=r.document.createTime?ti(r.document.createTime):Ne.min(),h=new Ln({mapValue:{fields:r.document.fields}}),f=_n.newFoundDocument(s,a,u,h),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Wh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nm(n,r.document),a=r.readTime?ti(r.readTime):Ne.min(),u=_n.newNoDocument(s,a),h=r.removedTargetIds||[];t=new Wh([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nm(n,r.document),a=r.removedTargetIds||[];t=new Wh([],a,s,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new XN(s,a),h=r.targetId;t=new g0(h,u)}}return t}function lx(n,e){let t;if(e instanceof Yu)t={update:dw(n,e.key,e.value)};else if(e instanceof Kd)t={delete:Mm(n,e.key)};else if(e instanceof $s)t={update:dw(n,e.key,e.data),updateMask:_x(e.fieldMask)};else{if(!(e instanceof KN))return Ae(16599,{Rt:e.type});t={verify:Mm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const h=u.transform;if(h instanceof Mu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Qa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Lu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof cd)return{fieldPath:u.field.canonicalString(),increment:h.Ee};throw Ae(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:sx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)})(n,e.precondition)),t}function ux(n,e){return n&&n.length>0?(et(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ti(s.updateTime):ti(a);return u.isEqual(Ne.min())&&(u=ti(a)),new qN(u,s.transformResults||[])})(t,e)))):[]}function cx(n,e){return{documents:[E0(n,e.path)]}}function hx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=E0(n,s);const a=(function(m){if(m.length!==0)return T0(Lr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(I){return{field:Na(I.field),direction:px(I.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=Dm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function dx(n){let e=ox(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){et(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(w){const I=I0(w);return I instanceof Lr&&XT(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((I=>(function(O){return new Ou(xa(O.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(I)))})(t.orderBy));let h=null;t.limit&&(h=(function(w){let I;return I=typeof w=="object"?w.value:w,Bd(I)?null:I})(t.limit));let f=null;t.startAt&&(f=(function(w){const I=!!w.before,P=w.values||[];return new ld(P,I)})(t.startAt));let m=null;return t.endAt&&(m=(function(w){const I=!w.before,P=w.values||[];return new ld(P,I)})(t.endAt)),bN(e,s,u,a,h,"F",f,m)}function fx(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function I0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xa(t.unaryFilter.field);return Mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xa(t.unaryFilter.field);return Mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=xa(t.unaryFilter.field);return Mt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=xa(t.unaryFilter.field);return Mt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Mt.create(xa(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lr.create(t.compositeFilter.filters.map((r=>I0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function px(n){return tx[n]}function mx(n){return nx[n]}function gx(n){return rx[n]}function Na(n){return{fieldPath:n.canonicalString()}}function xa(n){return on.fromServerFormat(n.fieldPath)}function T0(n){return n instanceof Mt?(function(t){if(t.op==="=="){if(ZE(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NAN"}};if(JE(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ZE(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NAN"}};if(JE(t.value))return{unaryFilter:{field:Na(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Na(t.field),op:mx(t.op),value:t.value}}})(n):n instanceof Lr?(function(t){const r=t.getFilters().map((s=>T0(s)));return r.length===1?r[0]:{compositeFilter:{op:gx(t.op),filters:r}}})(n):Ae(54877,{filter:n})}function _x(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function S0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,r,s,a=Ne.min(),u=Ne.min(),h=ln.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.gt=e}}function vx(n){const e=dx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
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
 */class Ex{constructor(){this.Dn=new wx}addToCollectionParentIndex(e,t){return this.Dn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(xs.min())}updateCollectionGroup(e,t,r){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class wx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new zt(dt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new zt(dt.comparator)).toArray()}}/**
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
 */const fw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C0=41943040;class Mn{static withCacheSize(e){return new Mn(e,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.DEFAULT_COLLECTION_PERCENTILE=10,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mn.DEFAULT=new Mn(C0,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mn.DISABLED=new Mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ya(0)}static ur(){return new Ya(-1)}}/**
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
 */const pw="LruGarbageCollector",Ix=1048576;function mw([n,e],[t,r]){const s=Ve(n,t);return s===0?Ve(e,r):s}class Tx{constructor(e){this.Tr=e,this.buffer=new zt(mw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();mw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(pw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?ue(pw,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.Rr(3e5)}))}}class Cx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Y.resolve(Ud.ue);const r=new Tx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(fw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,h,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,h=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(m=Date.now(),Pa()<=ze.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function Ax(n,e){return new Cx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this.changes=new Vo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_n.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Px{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&vu(r.mutation,s,Gn.empty(),gt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,We()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=We()){const s=To();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=cu();return a.forEach(((h,f)=>{u=u.insert(h,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=To();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,We())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,h)=>{t.set(u,h)}))}))}computeViews(e,t,r,s){let a=Oi();const u=yu(),h=(function(){return yu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof $s)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),vu(y.mutation,m,y.mutation.getFieldMask(),gt.now())):u.set(m.key,Gn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var w;return h.set(m,new Px(y,(w=u.get(m))!==null&&w!==void 0?w:null))})),h)))}recalculateAndSaveOverlays(e,t){const r=yu();let s=new Vt(((u,h)=>u-h)),a=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const h of u)h.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||Gn.empty();y=h.applyToLocalView(m,y),r.set(f,y);const w=(s.get(h.batchId)||We()).add(f);s=s.insert(h.batchId,w)}))})).next((()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,y=f.value,w=o0();y.forEach((I=>{if(!a.has(I)){const P=f0(t.get(I),r.get(I));P!==null&&w.set(I,P),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,w))}return Y.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):t0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Y.resolve(To());let h=Nu,f=a;return u.next((m=>Y.forEach(m,((y,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),a.get(y)?Y.resolve():this.remoteDocumentCache.getEntry(e,y).next((I=>{f=f.insert(y,I)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,We()))).next((y=>({batchId:h,changes:s0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next((r=>{let s=cu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=cu();return this.indexManager.getCollectionParents(e,a).next((h=>Y.forEach(h,(f=>{const m=(function(w,I){return new hl(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((w,I)=>{u=u.insert(w,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,_n.newInvalidDocument(y)))}));let h=cu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&vu(y.mutation,m,Gn.empty(),gt.now()),qd(t,m)&&(h=h.insert(f,m))})),h}))}}/**
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
 */class Nx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Y.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ti(s.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:vx(s.bundledQuery),readTime:ti(s.readTime)}})(t)),Y.resolve()}}/**
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
 */class xx{constructor(){this.overlays=new Vt(ve.comparator),this.kr=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=To();return Y.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Y.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Y.resolve()}getOverlaysForCollection(e,t,r){const s=To(),a=t.length+1,u=new ve(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Y.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Vt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=To(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const h=To(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>h.set(m,y))),!(h.size()>=s)););return Y.resolve(h)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new YN(t,r));let a=this.kr.get(t);a===void 0&&(a=We(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class bx{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.qr=new zt(Qt.Qr),this.$r=new zt(Qt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Qt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Qt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ve(new dt([])),r=new Qt(t,e),s=new Qt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ve(new dt([])),r=new Qt(t,e),s=new Qt(t,e+1);let a=We();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Qt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ve.comparator(e.key,t.key)||Ve(e.Hr,t.Hr)}static Ur(e,t){return Ve(e.Hr,t.Hr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new zt(Qt.Qr)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new QN(a,t,r,s);this.mutationQueue.push(u);for(const h of s)this.Yr=this.Yr.add(new Qt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Y.resolve(u)}lookupMutationBatch(e,t){return Y.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Y.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Pg:this.er-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qt(t,0),s=new Qt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const h=this.Zr(u.Hr);a.push(h)})),Y.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new zt(Ve);return t.forEach((s=>{const a=new Qt(s,0),u=new Qt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(h=>{r=r.add(h.Hr)}))})),Y.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;ve.isDocumentKey(a)||(a=a.child(""));const u=new Qt(new ve(a),0);let h=new zt(Ve);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(h=h.add(f.Hr)),!0)}),u),Y.resolve(this.ei(h))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){et(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Y.forEach(t.mutations,(s=>{const a=new Qt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Qt(t,0),s=this.Yr.firstAfterOrEqual(r);return Y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.ni=e,this.docs=(function(){return new Vt(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Y.resolve(r?r.document.mutableCopy():_n.newInvalidDocument(t))}getEntries(e,t){let r=Oi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():_n.newInvalidDocument(s))})),Y.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Oi();const u=t.path,h=new ve(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||cN(uN(y),r)<=0||(s.has(y.key)||qd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return Y.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ae(9500)}ri(e,t){return Y.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Mx(this)}getSize(e){return Y.resolve(this.size)}}class Mx extends Rx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Y.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.persistence=e,this.ii=new Vo((t=>xg(t)),bg),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.si=0,this.oi=new Vg,this.targetCount=0,this._i=Ya.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Y.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.hr(t),Y.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)})),Y.waitFor(a).next((()=>s))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Y.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Y.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Y.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Y.resolve(r)}containsKey(e,t){return Y.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ud(0),this.ci=!1,this.ci=!0,this.li=new bx,this.referenceDelegate=e(this),this.hi=new Lx(this),this.indexManager=new Ex,this.remoteDocumentCache=(function(s){return new Ox(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new yx(t),this.Ti=new Nx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Dx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const s=new Vx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Y.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Vx extends dN{constructor(e){super(),this.currentSequenceNumber=e}}class Fg{constructor(e){this.persistence=e,this.Ai=new Vg,this.Ri=null}static Vi(e){return new Fg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Y.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.mi,(r=>{const s=ve.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Ne.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Y.or([()=>Y.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class dd{constructor(e,t){this.persistence=e,this.gi=new Vo((r=>mN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ax(this,t)}static Vi(e,t){return new dd(e,t)}Ii(){}di(e){return Y.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Y.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Y.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((h=>{h||(r++,a.removeEntry(u,Ne.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Y.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Y.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Y.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uh(e.data.value)),t}Sr(e,t,r){return Y.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Y.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=We(),s=We();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new jg(e,t.fromCache,r,s)}}/**
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
 */class Fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return dR()?8:fN(yn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Fx;return this.ws(e,t,u).next((h=>{if(a.result=h,this.Rs)return this.Ss(e,t,u,h.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Pa()<=ze.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",ka(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Y.resolve()):(Pa()<=ze.DEBUG&&ue("QueryEngine","Query:",ka(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Pa()<=ze.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",ka(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ei(t))):Y.resolve())}ps(e,t){if(rw(t))return Y.resolve(null);let r=ei(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ud(t,null,"F"),r=ei(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=We(...a);return this.gs.getDocuments(e,u).next((h=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,h);return this.Ds(t,m,u,f.readTime)?this.ps(e,ud(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return rw(t)||s.isEqual(Ne.min())?Y.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Y.resolve(null):(Pa()<=ze.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ka(t)),this.vs(e,u,t,lN(s,Nu)).next((h=>h)))}))}bs(e,t){let r=new zt(r0(e));return t.forEach(((s,a)=>{qd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Pa()<=ze.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",ka(t)),this.gs.getDocumentsMatchingQuery(e,t,xs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Ug="LocalStore",Ux=3e8;class Bx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Vt(Ve),this.Ms=new Vo((a=>xg(a)),bg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function zx(n,e,t,r){return new Bx(n,e,t,r)}async function R0(n,e){const t=xe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],h=[];let f=We();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){h.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:h})))}))}))}function Wx(n,e){const t=xe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(h,f,m,y){const w=m.batch,I=w.keys();let P=Y.resolve();return I.forEach((O=>{P=P.next((()=>y.getEntry(f,O))).next((F=>{const B=m.docVersions.get(O);et(B!==null,48541),F.version.compareTo(B)<0&&(w.applyToRemoteDocument(F,m),F.isValidDocument()&&(F.setReadTime(m.commitVersion),y.addEntry(F)))}))})),P.next((()=>h.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let f=We();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function P0(n){const e=xe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function $x(n,e){const t=xe(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const h=[];e.targetChanges.forEach(((y,w)=>{const I=s.get(w);if(!I)return;h.push(t.hi.removeMatchingKeys(a,y.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,w))));let P=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?P=P.withResumeToken(ln.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):y.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(y.resumeToken,r)),s=s.insert(w,P),(function(F,B,K){return F.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Ux?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(I,P,y)&&h.push(t.hi.updateTargetData(a,P))}));let f=Oi(),m=We();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),h.push(qx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(Ne.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));h.push(y)}return Y.waitFor(h).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function qx(n,e,t){let r=We(),s=We();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Oi();return t.forEach(((h,f)=>{const m=a.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(h)),f.isNoDocument()&&f.version.isEqual(Ne.min())?(e.removeEntry(h,f.readTime),u=u.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(h,f)):ue(Ug,"Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Hx(n,e){const t=xe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Pg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Gx(n,e){const t=xe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Y.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new _s(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Vm(n,e,t){const r=xe(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!cl(u))throw u;ue(Ug,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function gw(n,e,t){const r=xe(n);let s=Ne.min(),a=We();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const w=xe(f),I=w.Ms.get(y);return I!==void 0?Y.resolve(w.Fs.get(I)):w.hi.getTargetData(m,y)})(r,u,ei(e)).next((h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,h.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Ne.min(),t?a:We()))).next((h=>(Kx(r,ON(e),h),{documents:h,qs:a})))))}function Kx(n,e,t){let r=n.xs.get(e)||Ne.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class _w{constructor(){this.activeTargetIds=UN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qx{constructor(){this.Fo=new _w,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new _w,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yx{xo(e){}shutdown(){}}/**
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
 */const yw="ConnectivityMonitor";class vw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(yw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(yw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bh=null;function Fm(){return bh===null?bh=(function(){return 268435456+Math.round(2147483648*Math.random())})():bh++,"0x"+bh.toString(16)}/**
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
 */const rm="RestConnection",Xx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===od?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Fm(),h=this.Go(e,t.toUriEncodedString());ue(rm,`Sending RPC '${e}' ${u}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(h),y=Bs(m);return this.jo(e,h,f,r,y).then((w=>(ue(rm,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Ns(rm,`RPC '${e}' ${u} failed with error: `,w,"url: ",h,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ll})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Xx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class eb extends Jx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Fm();return new Promise(((h,f)=>{const m=new kT;m.setWithCredentials(!0),m.listenOnce(NT.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case jh.NO_ERROR:const w=m.getResponseJson();ue(mn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case jh.TIMEOUT:ue(mn,`RPC '${e}' ${u} timed out`),f(new oe(G.DEADLINE_EXCEEDED,"Request time out"));break;case jh.HTTP_ERROR:const I=m.getStatus();if(ue(mn,`RPC '${e}' ${u} failed with status:`,I,"response text:",m.getResponseText()),I>0){let P=m.getResponseJson();Array.isArray(P)&&(P=P[0]);const O=P==null?void 0:P.error;if(O&&O.status&&O.message){const F=(function(K){const H=K.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(H)>=0?H:G.UNKNOWN})(O.status);f(new oe(F,O.message))}else f(new oe(G.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new oe(G.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ue(mn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ue(mn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=Fm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=DT(),h=bT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ue(mn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const w=u.createWebChannel(y,f);this.T_(w);let I=!1,P=!1;const O=new Zx({Ho:B=>{P?ue(mn,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(I||(ue(mn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),ue(mn,`RPC '${e}' stream ${s} sending:`,B),w.send(B))},Yo:()=>w.close()}),F=(B,K,H)=>{B.listen(K,(ee=>{try{H(ee)}catch(se){setTimeout((()=>{throw se}),0)}}))};return F(w,uu.EventType.OPEN,(()=>{P||(ue(mn,`RPC '${e}' stream ${s} transport opened.`),O.s_())})),F(w,uu.EventType.CLOSE,(()=>{P||(P=!0,ue(mn,`RPC '${e}' stream ${s} transport closed`),O.__(),this.I_(w))})),F(w,uu.EventType.ERROR,(B=>{P||(P=!0,Ns(mn,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),O.__(new oe(G.UNAVAILABLE,"The operation could not be completed")))})),F(w,uu.EventType.MESSAGE,(B=>{var K;if(!P){const H=B.data[0];et(!!H,16349);const ee=H,se=(ee==null?void 0:ee.error)||((K=ee[0])===null||K===void 0?void 0:K.error);if(se){ue(mn,`RPC '${e}' stream ${s} received error:`,se);const Oe=se.status;let Pe=(function(C){const x=Ot[C];if(x!==void 0)return m0(x)})(Oe),D=se.message;Pe===void 0&&(Pe=G.INTERNAL,D="Unknown error status: "+Oe+" with message "+se.message),P=!0,O.__(new oe(Pe,D)),w.close()}else ue(mn,`RPC '${e}' stream ${s} received:`,H),O.a_(H)}})),F(h,xT.STAT_EVENT,(B=>{B.stat===Cm.PROXY?ue(mn,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Cm.NOPROXY&&ue(mn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.o_()}),0),O}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function im(){return typeof document<"u"?document:null}/**
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
 */function Yd(n){return new ix(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="PersistentStream";class N0{constructor(e,t,r,s,a,u,h,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new k0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Di(t.toString()),Di("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(Ew,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(Ew,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tb extends N0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ax(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ne.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ne.min():u.readTime?ti(u.readTime):Ne.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Lm(this.serializer),t.addTarget=(function(a,u){let h;const f=u.target;if(h=xm(f)?{documents:cx(a,f)}:{query:hx(a,f).Vt},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=y0(a,u.resumeToken);const m=Dm(a,u.expectedCount);m!==null&&(h.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ne.min())>0){h.readTime=hd(a,u.snapshotVersion.toTimestamp());const m=Dm(a,u.expectedCount);m!==null&&(h.expectedCount=m)}return h})(this.serializer,e);const r=fx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Lm(this.serializer),t.removeTarget=e,this.k_(t)}}class nb extends N0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return et(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){et(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=ux(e.writeResults,e.commitTime),r=ti(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Lm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>lx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{}class ib extends rb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Om(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(G.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Jo(e,Om(t,r),s,u,h,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(G.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class sb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Di(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="RemoteStore";class ob{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Fo(this)&&(ue(ko,"Restarting streams for network reachability change."),await(async function(f){const m=xe(f);m.Ia.add(4),await Ju(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Xd(m)})(this))}))})),this.Aa=new sb(r,s)}}async function Xd(n){if(Fo(n))for(const e of n.da)await e(!0)}async function Ju(n){for(const e of n.da)await e(!1)}function x0(n,e){const t=xe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),$g(t)?Wg(t):dl(t).x_()&&zg(t,e))}function Bg(n,e){const t=xe(n),r=dl(t);t.Ta.delete(e),r.x_()&&b0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Fo(t)&&t.Aa.set("Unknown"))}function zg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dl(n).H_(e)}function b0(n,e){n.Ra.$e(e),dl(n).Y_(e)}function Wg(n){n.Ra=new ex({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),dl(n).start(),n.Aa.aa()}function $g(n){return Fo(n)&&!dl(n).M_()&&n.Ta.size>0}function Fo(n){return xe(n).Ia.size===0}function D0(n){n.Ra=void 0}async function ab(n){n.Aa.set("Online")}async function lb(n){n.Ta.forEach(((e,t)=>{zg(n,e)}))}async function ub(n,e){D0(n),$g(n)?(n.Aa.la(e),Wg(n)):n.Aa.set("Unknown")}async function cb(n,e,t){if(n.Aa.set("Online"),e instanceof _0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const h of a.targetIds)s.Ta.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.Ta.delete(h),s.Ra.removeTarget(h))})(n,e)}catch(r){ue(ko,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fd(n,r)}else if(e instanceof Wh?n.Ra.Ye(e):e instanceof g0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ne.min()))try{const r=await P0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const h=a.Ra.Pt(u);return h.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),h.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(ln.EMPTY_BYTE_STRING,y.snapshotVersion)),b0(a,f);const w=new _s(y.target,f,m,y.sequenceNumber);zg(a,w)})),a.remoteSyncer.applyRemoteEvent(h)})(n,t)}catch(r){ue(ko,"Failed to raise snapshot:",r),await fd(n,r)}}async function fd(n,e,t){if(!cl(e))throw e;n.Ia.add(1),await Ju(n),n.Aa.set("Offline"),t||(t=()=>P0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(ko,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Xd(n)}))}function O0(n,e){return e().catch((t=>fd(n,t,e)))}async function Jd(n){const e=xe(n),t=Ms(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Pg;for(;hb(e);)try{const s=await Hx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,db(e,s)}catch(s){await fd(e,s)}M0(e)&&L0(e)}function hb(n){return Fo(n)&&n.Pa.length<10}function db(n,e){n.Pa.push(e);const t=Ms(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function M0(n){return Fo(n)&&!Ms(n).M_()&&n.Pa.length>0}function L0(n){Ms(n).start()}async function fb(n){Ms(n).na()}async function pb(n){const e=Ms(n);for(const t of n.Pa)e.X_(t.mutations)}async function mb(n,e,t){const r=n.Pa.shift(),s=Og.from(r,e,t);await O0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Jd(n)}async function gb(n,e){e&&Ms(n).Z_&&await(async function(r,s){if((function(u){return JN(u)&&u!==G.ABORTED})(s.code)){const a=r.Pa.shift();Ms(r).N_(),await O0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Jd(r)}})(n,e),M0(n)&&L0(n)}async function ww(n,e){const t=xe(n);t.asyncQueue.verifyOperationInProgress(),ue(ko,"RemoteStore received new credentials");const r=Fo(t);t.Ia.add(3),await Ju(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xd(t)}async function _b(n,e){const t=xe(n);e?(t.Ia.delete(2),await Xd(t)):e||(t.Ia.add(2),await Ju(t),t.Aa.set("Unknown"))}function dl(n){return n.Va||(n.Va=(function(t,r,s){const a=xe(t);return a.ia(),new tb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:ab.bind(null,n),e_:lb.bind(null,n),n_:ub.bind(null,n),J_:cb.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),$g(n)?Wg(n):n.Aa.set("Unknown")):(await n.Va.stop(),D0(n))}))),n.Va}function Ms(n){return n.ma||(n.ma=(function(t,r,s){const a=xe(t);return a.ia(),new nb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:fb.bind(null,n),n_:gb.bind(null,n),ea:pb.bind(null,n),ta:mb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Jd(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(ko,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,h=new qg(e,t,u,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hg(n,e){if(Di("AsyncQueue",`${e}: ${n}`),cl(n))return new oe(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{static emptySet(e){return new Fa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=cu(),this.sortedSet=new Vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.fa=new Vt(ve.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xa{constructor(e,t,r,s,a,u,h,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((h=>{u.push({type:0,doc:h})})),new Xa(e,t,Fa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vb{constructor(){this.queries=Tw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=xe(t),a=s.queries;s.queries=Tw(),a.forEach(((u,h)=>{for(const f of h.wa)f.onError(r)}))})(this,new oe(G.ABORTED,"Firestore shutting down"))}}function Tw(){return new Vo((n=>n0(n)),$d)}async function V0(n,e){const t=xe(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new yb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=Hg(u,`Initialization of query '${ka(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Gg(t)}async function F0(n,e){const t=xe(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Eb(n,e){const t=xe(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const h of u.wa)h.Ca(s)&&(r=!0);u.ya=s}}r&&Gg(t)}function wb(n,e,t){const r=xe(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Gg(n){n.Da.forEach((e=>{e.next()}))}var jm,Sw;(Sw=jm||(jm={})).Fa="default",Sw.Cache="cache";class j0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==jm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.key=e}}class B0{constructor(e){this.key=e}}class Ib{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=We(),this.mutatedKeys=We(),this.Xa=r0(e),this.eu=new Fa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Iw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,w)=>{const I=s.get(y),P=qd(this.query,w)?w:null,O=!!I&&this.mutatedKeys.has(I.key),F=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let B=!1;I&&P?I.data.isEqual(P.data)?O!==F&&(r.track({type:3,doc:P}),B=!0):this.iu(I,P)||(r.track({type:2,doc:P}),B=!0,(f&&this.Xa(P,f)>0||m&&this.Xa(P,m)<0)&&(h=!0)):!I&&P?(r.track({type:0,doc:P}),B=!0):I&&!P&&(r.track({type:1,doc:I}),B=!0,(f||m)&&(h=!0)),B&&(P?(u=u.add(P),a=F?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:h,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,w)=>(function(P,O){const F=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:B})}};return F(P)-F(O)})(y.type,w.type)||this.Xa(y.doc,w.doc))),this.su(r),s=s!=null&&s;const h=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Xa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Iw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=We(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new B0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new U0(r))})),t}uu(e){this.Ha=e.qs,this.Za=We();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Kg="SyncEngine";class Tb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Sb{constructor(e){this.key=e,this.lu=!1}}class Cb{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Vo((h=>n0(h)),$d),this.Tu=new Map,this.Iu=new Set,this.du=new Vt(ve.comparator),this.Eu=new Map,this.Au=new Vg,this.Ru={},this.Vu=new Map,this.mu=Ya.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ab(n,e,t=!0){const r=G0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await z0(r,e,t,!0),s}async function Rb(n,e){const t=G0(n);await z0(t,e,!0,!1)}async function z0(n,e,t,r){const s=await Gx(n.localStore,ei(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await Pb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&x0(n.remoteStore,s),h}async function Pb(n,e,t,r,s){n.gu=(w,I,P)=>(async function(F,B,K,H){let ee=B.view.nu(K);ee.Ds&&(ee=await gw(F.localStore,B.query,!1).then((({documents:D})=>B.view.nu(D,ee))));const se=H&&H.targetChanges.get(B.targetId),Oe=H&&H.targetMismatches.get(B.targetId)!=null,Pe=B.view.applyChanges(ee,F.isPrimaryClient,se,Oe);return Aw(F,B.targetId,Pe._u),Pe.snapshot})(n,w,I,P);const a=await gw(n.localStore,e,!0),u=new Ib(e,a.qs),h=u.nu(a.documents),f=Xu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(h,n.isPrimaryClient,f);Aw(n,t,m._u);const y=new Tb(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function kb(n,e,t){const r=xe(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!$d(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Bg(r.remoteStore,s.targetId),Um(r,s.targetId)})).catch(ul)):(Um(r,s.targetId),await Vm(r.localStore,s.targetId,!0))}async function Nb(n,e){const t=xe(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Bg(t.remoteStore,r.targetId))}async function xb(n,e,t){const r=Fb(n);try{const s=await(function(u,h){const f=xe(u),m=gt.now(),y=h.reduce(((P,O)=>P.add(O.key)),We());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let O=Oi(),F=We();return f.Os.getEntries(P,y).next((B=>{O=B,O.forEach(((K,H)=>{H.isValidDocument()||(F=F.add(K))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,O))).next((B=>{w=B;const K=[];for(const H of h){const ee=GN(H,w.get(H.key).overlayedDocument);ee!=null&&K.push(new $s(H.key,ee,KT(ee.value.mapValue),Cn.exists(!0)))}return f.mutationQueue.addMutationBatch(P,m,K,h)})).next((B=>{I=B;const K=B.applyToLocalDocumentSet(w,F);return f.documentOverlayCache.saveOverlays(P,B.batchId,K)}))})).then((()=>({batchId:I.batchId,changes:s0(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,h,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Vt(Ve)),m=m.insert(h,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Zu(r,s.changes),await Jd(r.remoteStore)}catch(s){const a=Hg(s,"Failed to persist write");t.reject(a)}}async function W0(n,e){const t=xe(n);try{const r=await $x(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?et(u.lu,14607):s.removedDocuments.size>0&&(et(u.lu,42227),u.lu=!1))})),await Zu(t,r,e)}catch(r){await ul(r)}}function Cw(n,e,t){const r=xe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const h=u.view.va(e);h.snapshot&&s.push(h.snapshot)})),(function(u,h){const f=xe(u);f.onlineState=h;let m=!1;f.queries.forEach(((y,w)=>{for(const I of w.wa)I.va(h)&&(m=!0)})),m&&Gg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bb(n,e,t){const r=xe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Vt(ve.comparator);u=u.insert(a,_n.newNoDocument(a,Ne.min()));const h=We().add(a),f=new Qd(Ne.min(),new Map,new Vt(Ve),u,h);await W0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Qg(r)}else await Vm(r.localStore,e,!1).then((()=>Um(r,e,t))).catch(ul)}async function Db(n,e){const t=xe(n),r=e.batch.batchId;try{const s=await Wx(t.localStore,e);q0(t,r,null),$0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(t,s)}catch(s){await ul(s)}}async function Ob(n,e,t){const r=xe(n);try{const s=await(function(u,h){const f=xe(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,h).next((w=>(et(w!==null,37113),y=w.keys(),f.mutationQueue.removeMutationBatch(m,w)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,h))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);q0(r,e,t),$0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zu(r,s)}catch(s){await ul(s)}}function $0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function q0(n,e,t){const r=xe(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Um(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||H0(n,r)}))}function H0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Bg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Qg(n))}function Aw(n,e,t){for(const r of t)r instanceof U0?(n.Au.addReference(r.key,e),Mb(n,r)):r instanceof B0?(ue(Kg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||H0(n,r.key)):Ae(19791,{yu:r})}function Mb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ue(Kg,"New document in limbo: "+t),n.Iu.add(r),Qg(n))}function Qg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ve(dt.fromString(e)),r=n.mu.next();n.Eu.set(r,new Sb(t)),n.du=n.du.insert(t,r),x0(n.remoteStore,new _s(ei(Wd(t.path)),r,"TargetPurposeLimboResolution",Ud.ue))}}async function Zu(n,e,t){const r=xe(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((h,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const w=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=jg.Es(f.targetId,m);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=xe(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Y.forEach(m,(I=>Y.forEach(I.Is,(P=>y.persistence.referenceDelegate.addReference(w,I.targetId,P))).next((()=>Y.forEach(I.ds,(P=>y.persistence.referenceDelegate.removeReference(w,I.targetId,P)))))))))}catch(w){if(!cl(w))throw w;ue(Ug,"Failed to update sequence numbers: "+w)}for(const w of m){const I=w.targetId;if(!w.fromCache){const P=y.Fs.get(I),O=P.snapshotVersion,F=P.withLastLimboFreeSnapshotVersion(O);y.Fs=y.Fs.insert(I,F)}}})(r.localStore,a))}async function Lb(n,e){const t=xe(n);if(!t.currentUser.isEqual(e)){ue(Kg,"User change. New user:",e.toKey());const r=await R0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((h=>{h.forEach((f=>{f.reject(new oe(G.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zu(t,r.Bs)}}function Vb(n,e){const t=xe(n),r=t.Eu.get(e);if(r&&r.lu)return We().add(r.key);{let s=We();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const h=t.Pu.get(u);s=s.unionWith(h.view.tu)}return s}}function G0(n){const e=xe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bb.bind(null,e),e.hu.J_=Eb.bind(null,e.eventManager),e.hu.pu=wb.bind(null,e.eventManager),e}function Fb(n){const e=xe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}class pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return zx(this.persistence,new jx,e.initialUser,this.serializer)}Du(e){return new A0(Fg.Vi,this.serializer)}bu(e){return new Qx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pd.provider={build:()=>new pd};class jb extends pd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){et(this.persistence.referenceDelegate instanceof dd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Mn.withCacheSize(this.cacheSizeBytes):Mn.DEFAULT;return new A0((r=>dd.Vi(r,t)),this.serializer)}}class Bm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lb.bind(null,this.syncEngine),await _b(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vb})()}createDatastore(e){const t=Yd(e.databaseInfo.databaseId),r=(function(a){return new eb(a)})(e.databaseInfo);return(function(a,u,h,f){return new ib(a,u,h,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,h){return new ob(r,s,a,u,h)})(this.localStore,this.datastore,e.asyncQueue,(t=>Cw(this.syncEngine,t,0)),(function(){return vw.C()?new vw:new Yx})())}createSyncEngine(e,t){return(function(s,a,u,h,f,m,y){const w=new Cb(s,a,u,h,f,m);return y&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=xe(s);ue(ko,"RemoteStore shutting down."),a.Ia.add(5),await Ju(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bm.provider={build:()=>new Bm};/**
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
 */class K0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Di("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="FirestoreClient";class Ub{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=gn.UNAUTHENTICATED,this.clientId=Rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ue(Ls,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ue(Ls,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function sm(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Ls,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await R0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ns("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ns("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Rw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Bb(n);ue(Ls,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ww(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ww(e.remoteStore,s))),n._onlineComponents=e}async function Bb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Ls,"Using user provided OfflineComponentProvider");try{await sm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ns("Error using user provided cache. Falling back to memory cache: "+t),await sm(n,new pd)}}else ue(Ls,"Using default OfflineComponentProvider"),await sm(n,new jb(void 0));return n._offlineComponents}async function Q0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Ls,"Using user provided OnlineComponentProvider"),await Rw(n,n._uninitializedComponentsProvider._online)):(ue(Ls,"Using default OnlineComponentProvider"),await Rw(n,new Bm))),n._onlineComponents}function zb(n){return Q0(n).then((e=>e.syncEngine))}async function zm(n){const e=await Q0(n),t=e.eventManager;return t.onListen=Ab.bind(null,e.syncEngine),t.onUnlisten=kb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Rb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Nb.bind(null,e.syncEngine),t}function Wb(n,e,t={}){const r=new Ss;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,h,f,m){const y=new K0({next:I=>{y.Ou(),u.enqueueAndForget((()=>F0(a,w)));const P=I.docs.has(h);!P&&I.fromCache?m.reject(new oe(G.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&f&&f.source==="server"?m.reject(new oe(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),w=new j0(Wd(h.path),y,{includeMetadataChanges:!0,ka:!0});return V0(a,w)})(await zm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Y0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pw=new Map;/**
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
 */const X0="firestore.googleapis.com",kw=!0;class Nw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=X0,this.ssl=kw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:kw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ix)throw new oe(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Jk;switch(r.type){case"firstParty":return new nN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Pw.get(t);r&&(ue("ComponentProvider","Removing Datastore"),Pw.delete(t),r.terminate())})(this),Promise.resolve()}}function $b(n,e,t,r={}){var s;n=Qn(n,Zd);const a=Bs(e),u=n._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(dg(`https://${f}`),fg("Firestore",!0)),u.host!==X0&&u.host!==f&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Ni(m,h)&&(n._setSettings(m),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=gn.MOCK_USER;else{y=jI(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new oe(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new gn(I)}n._authCredentials=new Zk(new MT(y,w))}}/**
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
 */class qs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class At{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Qu(t,At._jsonSchema))return new At(e,r||null,new ve(dt.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:Lt("string",At._jsonSchemaVersion),referencePath:Lt("string")};class As extends qs{constructor(e,t,r){super(e,t,Wd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ve(e))}withConverter(e){return new As(this.firestore,e,this._path)}}function Vr(n,e,...t){if(n=rt(n),VT("collection","path",e),n instanceof Zd){const r=dt.fromString(e,...t);return WE(r),new As(n,null,r)}{if(!(n instanceof At||n instanceof As))throw new oe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(dt.fromString(e,...t));return WE(r),new As(n.firestore,null,r)}}function an(n,e,...t){if(n=rt(n),arguments.length===1&&(e=Rg.newId()),VT("doc","path",e),n instanceof Zd){const r=dt.fromString(e,...t);return zE(r),new At(n,null,new ve(r))}{if(!(n instanceof At||n instanceof As))throw new oe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(dt.fromString(e,...t));return zE(r),new At(n.firestore,n instanceof As?n.converter:null,new ve(r))}}/**
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
 */const xw="AsyncQueue";class bw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new k0(this,"async_queue_retry"),this.oc=()=>{const r=im();r&&ue(xw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=im();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=im();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ss;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!cl(e))throw e;ue(xw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Di("INTERNAL UNHANDLED ERROR: ",Dw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=qg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ae(47125,{hc:Dw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Dw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Ow(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Mi extends Zd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bw(e),this._firestoreClient=void 0,await e}}}function qb(n,e){const t=typeof n=="object"?n:gg(),r=typeof n=="string"?n:od,s=Od(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=LI("firestore");a&&$b(s,...a)}return s}function ef(n){if(n._terminated)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Hb(n),n._firestoreClient}function Hb(n){var e,t,r;const s=n._freezeSettings(),a=(function(h,f,m,y){return new yN(h,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Y0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ub(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hr(ln.fromBase64String(e))}catch(t){throw new oe(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hr(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qu(e,hr._jsonSchema))return hr.fromBase64String(e.bytes)}}hr._jsonSchemaVersion="firestore/bytes/1.0",hr._jsonSchema={type:Lt("string",hr._jsonSchemaVersion),bytes:Lt("string")};/**
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
 */class ec{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ni._jsonSchemaVersion}}static fromJSON(e){if(Qu(e,ni._jsonSchema))return new ni(e.latitude,e.longitude)}}ni._jsonSchemaVersion="firestore/geoPoint/1.0",ni._jsonSchema={type:Lt("string",ni._jsonSchemaVersion),latitude:Lt("number"),longitude:Lt("number")};/**
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
 */class ri{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qu(e,ri._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ri(e.vectorValues);throw new oe(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ri._jsonSchemaVersion="firestore/vectorValue/1.0",ri._jsonSchema={type:Lt("string",ri._jsonSchemaVersion),vectorValues:Lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^__.*__$/;class Kb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yu(e,this.data,t,this.fieldTransforms)}}class J0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $s(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Z0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class tf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return md(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Z0(this.Ec)&&Gb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Qb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yd(e)}Dc(e,t,r,s=!1){return new tf({Ec:e,methodName:t,bc:r,path:on.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(n){const e=n._freezeSettings(),t=Yd(n._databaseId);return new Qb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yg(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Zg("Data must be an object, but it was:",u,r);const h=nS(r,u);let f,m;if(a.merge)f=new Gn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const I=Wm(e,w,t);if(!u.contains(I))throw new oe(G.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);iS(y,I)||y.push(I)}f=new Gn(y),m=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,m=u.fieldTransforms;return new Kb(new Ln(h),f,m)}class rc extends tc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function Yb(n,e,t){return new tf({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Xg extends tc{_toFieldTransform(e){return new d0(e.path,new Mu)}isEqual(e){return e instanceof Xg}}class Jg extends tc{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Yb(this,e,!0),r=this.vc.map((a=>fl(a,t))),s=new Qa(r);return new d0(e.path,s)}isEqual(e){return e instanceof Jg&&Ni(this.vc,e.vc)}}function eS(n,e,t,r){const s=n.Dc(1,e,t);Zg("Data must be an object, but it was:",s,r);const a=[],u=Ln.empty();Ws(r,((f,m)=>{const y=e_(e,f,t);m=rt(m);const w=s.gc(y);if(m instanceof rc)a.push(y);else{const I=fl(m,w);I!=null&&(a.push(y),u.set(y,I))}}));const h=new Gn(a);return new J0(u,h,s.fieldTransforms)}function tS(n,e,t,r,s,a){const u=n.Dc(1,e,t),h=[Wm(e,r,t)],f=[s];if(a.length%2!=0)throw new oe(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)h.push(Wm(e,a[I])),f.push(a[I+1]);const m=[],y=Ln.empty();for(let I=h.length-1;I>=0;--I)if(!iS(m,h[I])){const P=h[I];let O=f[I];O=rt(O);const F=u.gc(P);if(O instanceof rc)m.push(P);else{const B=fl(O,F);B!=null&&(m.push(P),y.set(P,B))}}const w=new Gn(m);return new J0(y,w,u.fieldTransforms)}function Xb(n,e,t,r=!1){return fl(t,n.Dc(r?4:3,e))}function fl(n,e){if(rS(n=rt(n)))return Zg("Unsupported field value:",e,n),nS(n,e);if(n instanceof tc)return(function(r,s){if(!Z0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const h of r){let f=fl(h,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=gt.fromDate(r);return{timestampValue:hd(s.serializer,a)}}if(r instanceof gt){const a=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hd(s.serializer,a)}}if(r instanceof ni)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hr)return{bytesValue:y0(s.serializer,r._byteString)};if(r instanceof At){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Lg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ri)return(function(u,h){return{mapValue:{fields:{[HT]:{stringValue:GT},[ad]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw h.wc("VectorValues must only contain numeric values.");return Dg(h.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${jd(r)}`)})(n,e)}function nS(n,e){const t={};return UT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(n,((r,s)=>{const a=fl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function rS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof ni||n instanceof hr||n instanceof At||n instanceof tc||n instanceof ri)}function Zg(n,e,t){if(!rS(t)||!FT(t)){const r=jd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Wm(n,e,t){if((e=rt(e))instanceof ec)return e._internalPath;if(typeof e=="string")return e_(n,e);throw md("Field path arguments must be of type string or ",n,!1,void 0,t)}const Jb=new RegExp("[~\\*/\\[\\]]");function e_(n,e,t){if(e.search(Jb)>=0)throw md(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ec(...e.split("."))._internalPath}catch{throw md(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function md(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new oe(G.INVALID_ARGUMENT,h+n+f)}function iS(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class sS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Zb extends sS{data(){return super.data()}}function nf(n,e){return typeof e=="string"?e_(n,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
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
 */function eD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class t_{}class n_ extends t_{}function No(n,e,...t){let r=[];e instanceof t_&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof r_)).length,h=a.filter((f=>f instanceof rf)).length;if(u>1||u>0&&h>0)throw new oe(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class rf extends n_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new rf(e,t,r)}_apply(e){const t=this._parse(e);return aS(e._query,t),new qs(e.firestore,e.converter,bm(e._query,t))}_parse(e){const t=nc(e.firestore);return(function(a,u,h,f,m,y,w){let I;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new oe(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Lw(w,y);const O=[];for(const F of w)O.push(Mw(f,a,F));I={arrayValue:{values:O}}}else I=Mw(f,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Lw(w,y),I=Xb(h,u,w,y==="in"||y==="not-in");return Mt.create(m,y,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gd(n,e,t){const r=e,s=nf("where",n);return rf._create(s,r,t)}class r_ extends t_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new r_(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Lr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const h=a.getFlattenedFilters();for(const f of h)aS(u,f),u=bm(u,f)})(e._query,t),new qs(e.firestore,e.converter,bm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class i_ extends n_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new i_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new oe(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ou(a,u)})(e._query,this._field,this._direction);return new qs(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new hl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function oS(n,e="asc"){const t=e,r=nf("orderBy",n);return i_._create(r,t)}class s_ extends n_{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new s_(e,t,r)}_apply(e){return new qs(e.firestore,e.converter,ud(e._query,this._limit,this._limitType))}}function xo(n){return s_._create("limit",n,"F")}function Mw(n,e,t){if(typeof(t=rt(t))=="string"){if(t==="")throw new oe(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t0(e)&&t.indexOf("/")!==-1)throw new oe(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(dt.fromString(t));if(!ve.isDocumentKey(r))throw new oe(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return XE(n,new ve(r))}if(t instanceof At)return XE(n,t._key);throw new oe(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jd(t)}.`)}function Lw(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aS(n,e){const t=(function(s,a){for(const u of s)for(const h of u.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tD{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ws(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ad].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>xt(u.doubleValue)));return new ri(a)}convertGeoPoint(e){return new ni(xt(e.latitude),xt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xu(e));default:return null}}convertTimestamp(e){const t=bs(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=dt.fromString(e);et(S0(r),9688,{name:e});const s=new bu(r.get(1),r.get(3)),a=new ve(r.popFirst(5));return s.isEqual(t)||Di(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function o_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Co extends sS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Co._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Co._jsonSchemaVersion="firestore/documentSnapshot/1.0",Co._jsonSchema={type:Lt("string",Co._jsonSchemaVersion),bundleSource:Lt("string","DocumentSnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class $h extends Co{data(e={}){return super.data(e)}}class ja{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new du(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new $h(this._firestore,this._userDataWriter,r.key,r,new du(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((h=>{const f=new $h(s._firestore,s._userDataWriter,h.doc.key,h.doc,new du(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((h=>a||h.type!==3)).map((h=>{const f=new $h(s._firestore,s._userDataWriter,h.doc.key,h.doc,new du(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return h.type!==0&&(m=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),y=u.indexOf(h.doc.key)),{type:nD(h.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ja._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
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
 */function Dr(n){n=Qn(n,At);const e=Qn(n.firestore,Mi);return Wb(ef(e),n._key).then((t=>cS(e,n,t)))}ja._jsonSchemaVersion="firestore/querySnapshot/1.0",ja._jsonSchema={type:Lt("string",ja._jsonSchemaVersion),bundleSource:Lt("string","QuerySnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class lS extends tD{constructor(e){super(),this.firestore=e}convertBytes(e){return new hr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function sf(n,e,t){n=Qn(n,At);const r=Qn(n.firestore,Mi),s=o_(n.converter,e,t);return ic(r,[Yg(nc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Cn.none())])}function Ja(n,e,t,...r){n=Qn(n,At);const s=Qn(n.firestore,Mi),a=nc(s);let u;return u=typeof(e=rt(e))=="string"||e instanceof ec?tS(a,"updateDoc",n._key,e,t,r):eS(a,"updateDoc",n._key,e),ic(s,[u.toMutation(n._key,Cn.exists(!0))])}function rD(n){return ic(Qn(n.firestore,Mi),[new Kd(n._key,Cn.none())])}function uS(n,e){const t=Qn(n.firestore,Mi),r=an(n),s=o_(n.converter,e);return ic(t,[Yg(nc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then((()=>r))}function Pi(n,...e){var t,r,s;n=rt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Ow(e[u])||(a=e[u++]);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Ow(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,m,y;if(n instanceof At)m=Qn(n.firestore,Mi),y=Wd(n._key.path),f={next:w=>{e[u]&&e[u](cS(m,n,w))},error:e[u+1],complete:e[u+2]};else{const w=Qn(n,qs);m=Qn(w.firestore,Mi),y=w._query;const I=new lS(m);f={next:P=>{e[u]&&e[u](new ja(m,I,w,P))},error:e[u+1],complete:e[u+2]},eD(n._query)}return(function(I,P,O,F){const B=new K0(F),K=new j0(P,B,O);return I.asyncQueue.enqueueAndForget((async()=>V0(await zm(I),K))),()=>{B.Ou(),I.asyncQueue.enqueueAndForget((async()=>F0(await zm(I),K)))}})(ef(m),y,h,f)}function ic(n,e){return(function(r,s){const a=new Ss;return r.asyncQueue.enqueueAndForget((async()=>xb(await zb(r),s,a))),a.promise})(ef(n),e)}function cS(n,e,t){const r=t.docs.get(e._key),s=new lS(n);return new Co(n,s,e._key,r,new du(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class iD{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=nc(e)}set(e,t,r){this._verifyNotCommitted();const s=om(e,this._firestore),a=o_(s.converter,t,r),u=Yg(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,Cn.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const a=om(e,this._firestore);let u;return u=typeof(t=rt(t))=="string"||t instanceof ec?tS(this._dataReader,"WriteBatch.update",a._key,t,r,s):eS(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(u.toMutation(a._key,Cn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=om(e,this._firestore);return this._mutations=this._mutations.concat(new Kd(t._key,Cn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(G.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function om(n,e){if((n=rt(n)).firestore!==e)throw new oe(G.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function sD(){return new rc("deleteField")}function Kn(){return new Xg("serverTimestamp")}function Vw(...n){return new Jg("arrayUnion",n)}/**
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
 */function oD(n){return ef(n=Qn(n,Mi)),new iD(n,(e=>ic(n,e)))}(function(e,t=!0){(function(s){ll=s})(Mo),Ao(new ks("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new Mi(new eN(r.getProvider("auth-internal")),new rN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new oe(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bu(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h}),"PUBLIC").setMultipleInstances(!0)),Xr(VE,FE,e),Xr(VE,FE,"esm2017")})();var Fw={};const jw="@firebase/database",Uw="1.0.20";/**
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
 */let hS="";function aD(n){hS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Bt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Au(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return si(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lD(e)}}catch{}return new uD},So=dS("localStorage"),cD=dS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Dd("@firebase/database"),hD=(function(){let n=1;return function(){return n++}})(),fS=function(n){const e=SR(n),t=new ER;t.update(e);const r=t.digest();return hg.encodeByteArray(r)},sc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sc.apply(null,r):typeof r=="object"?e+=Bt(r):e+=r,e+=" "}return e};let Eu=null,Bw=!0;const dD=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Ua.logLevel=ze.VERBOSE,Eu=Ua.log.bind(Ua)},Xt=function(...n){if(Bw===!0&&(Bw=!1,Eu===null&&cD.get("logging_enabled")===!0&&dD()),Eu){const e=sc.apply(null,n);Eu(e)}},oc=function(n){return function(...e){Xt(n,...e)}},$m=function(...n){const e="FIREBASE INTERNAL ERROR: "+sc(...n);Ua.error(e)},Li=function(...n){const e=`FIREBASE FATAL ERROR: ${sc(...n)}`;throw Ua.error(e),new Error(e)},An=function(...n){const e="FIREBASE WARNING: "+sc(...n);Ua.warn(e)},fD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},of=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Za="[MIN_NAME]",bo="[MAX_NAME]",jo=function(n,e){if(n===e)return 0;if(n===Za||e===bo)return-1;if(e===Za||n===bo)return 1;{const t=zw(n),r=zw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},mD=function(n,e){return n===e?0:n<e?-1:1},ru=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Bt(e))},a_=function(n){if(typeof n!="object"||n===null)return Bt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Bt(e[r]),t+=":",t+=a_(n[e[r]]);return t+="}",t},pS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Jt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const mS=function(n){ne(!of(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,h,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,u=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let w="";for(f=0;f<64;f+=8){let I=parseInt(y.substr(f,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},gD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_D=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const vD=new RegExp("^-?(0*)\\d{1,10}$"),ED=-2147483648,wD=2147483647,zw=function(n){if(vD.test(n)){const e=Number(n);if(e>=ED&&e<=wD)return e}return null},pl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw An("Exception was thrown by user callback.",t),e},Math.floor(0))}},ID=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class TD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,cr(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class qh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="5",gS="v",_S="s",yS="r",vS="f",ES=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wS="ls",IS="p",qm="ac",TS="websocket",SS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,t,r,s,a=!1,u="",h=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=So.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&So.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function CD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function AS(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===TS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===SS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CD(n)&&(t.ns=n.namespace);const s=[];return Jt(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(){this.counters_={}}incrementCounter(e,t=1){si(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ZA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={},lm={};function u_(n){const e=n.toString();return am[e]||(am[e]=new AD),am[e]}function RD(n,e){const t=n.toString();return lm[t]||(lm[t]=e()),lm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&pl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="start",kD="close",ND="pLPCommand",xD="pRTLPCB",RS="id",PS="pw",kS="ser",bD="cb",DD="seg",OD="ts",MD="d",LD="dframe",NS=1870,xS=30,VD=NS-xS,FD=25e3,jD=3e4;class Oa{constructor(e,t,r,s,a,u,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oc(e),this.stats_=u_(t),this.urlFn=f=>(this.appCheckToken&&(f[qm]=this.appCheckToken),AS(t,SS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new PD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jD)),pD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new c_((...a)=>{const[u,h,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ww)this.id=h,this.password=f;else if(u===kD)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ww]="t",r[kS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gS]=l_,this.transportSessionId&&(r[_S]=this.transportSessionId),this.lastSessionId&&(r[wS]=this.lastSessionId),this.applicationId&&(r[IS]=this.applicationId),this.appCheckToken&&(r[qm]=this.appCheckToken),typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(r[yS]=vS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oa.forceAllow_=!0}static forceDisallow(){Oa.forceDisallow_=!0}static isAvailable(){return Oa.forceAllow_?!0:!Oa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gD()&&!_D()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Bt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=DI(t),s=pS(r,VD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[LD]="t",r[RS]=e,r[PS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Bt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class c_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hD(),window[ND+this.uniqueCallbackIdentifier]=e,window[xD+this.uniqueCallbackIdentifier]=t,this.myIFrame=c_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(h){Xt("frame writing exception"),h.stack&&Xt(h.stack),Xt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[RS]=this.myID,e[PS]=this.myPW,e[kS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xS+r.length<=NS;){const u=this.pendingSegs.shift();r=r+"&"+DD+s+"="+u.seg+"&"+OD+s+"="+u.ts+"&"+MD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(FD)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=16384,BD=45e3;let _d=null;typeof MozWebSocket<"u"?_d=MozWebSocket:typeof WebSocket<"u"&&(_d=WebSocket);class Nr{constructor(e,t,r,s,a,u,h){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oc(this.connId),this.stats_=u_(t),this.connURL=Nr.connectionURL_(t,u,h,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[gS]=l_,typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(u[yS]=vS),t&&(u[_S]=t),r&&(u[wS]=r),s&&(u[qm]=s),a&&(u[IS]=a),AS(e,TS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,So.set("previous_websocket_failure",!0);try{let r;hR(),this.mySock=new _d(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_d!==null&&!Nr.forceDisallow_}static previouslyFailed(){return So.isInMemoryStorage||So.get("previous_websocket_failure")===!0}markConnectionHealthy(){So.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Au(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Bt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=pS(t,UD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nr.responsesRequiredToBeHealthy=2;Nr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static get ALL_TRANSPORTS(){return[Oa,Nr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Nr&&Nr.isAvailable();let r=t&&!Nr.previouslyFailed();if(e.webSocketOnly&&(t||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nr];else{const s=this.transports_=[];for(const a of Vu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Vu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=6e4,WD=5e3,$D=10*1024,qD=100*1024,um="t",$w="d",HD="s",qw="r",GD="e",Hw="o",Gw="a",Kw="n",Qw="p",KD="h";class QD{constructor(e,t,r,s,a,u,h,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oc("c:"+this.id+":"),this.transportManager_=new Vu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$D?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(um in e){const t=e[um];t===Gw?this.upgradeIfSecondaryHealthy_():t===qw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Hw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ru("t",e),r=ru("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ru("t",e),r=ru("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ru(um,e);if($w in e){const r=e[$w];if(t===KD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Kw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===HD?this.onConnectionShutdown_(r):t===qw?this.onReset_(r):t===GD?$m("Server Error: "+r):t===Hw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$m("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),l_!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),wu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(So.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends DS{static getInstance(){return new yd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=32,Xw=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new it("")}function Fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Vs(n){return n.pieces_.length-n.pieceNum_}function lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function h_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function YD(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function OS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function wt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof it)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new it(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function Sn(n,e){const t=Fe(n),r=Fe(e);if(t===null)return e;if(t===r)return Sn(lt(n),lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function XD(n,e){const t=Fu(n,0),r=Fu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=jo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function d_(n,e){if(Vs(n)!==Vs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function dr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Vs(n)>Vs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class JD{constructor(e,t){this.errorPrefix_=t,this.parts_=Fu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bd(this.parts_[r]);MS(this)}}function ZD(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bd(e),MS(n)}function eO(n){const e=n.parts_.pop();n.byteLength_-=bd(e),n.parts_.length>0&&(n.byteLength_-=1)}function MS(n){if(n.byteLength_>Xw)throw new Error(n.errorPrefix_+"has a key path longer than "+Xw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Yw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yw+") or object contains a cycle "+Io(n))}function Io(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends DS{static getInstance(){return new f_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=1e3,tO=300*1e3,Jw=30*1e3,nO=1.3,rO=3e4,iO="server_kill",Zw=3;class ki extends bS{constructor(e,t,r,s,a,u,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=ki.nextPersistentConnectionId_++,this.log_=oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=iu,this.maxReconnectDelay_=tO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");f_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Bt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Yr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const h=u.d;u.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,h=>{const f=h.d,m=h.s;ki.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&si(e,"w")){const r=Wa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Bt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):$m("Unrecognized action received from server: "+Bt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rO&&(this.reconnectDelay_=iu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ki.nextConnectionId_++,a=this.lastSessionId;let u=!1,h=null;const f=function(){h?h.close():(u=!0,r())},m=function(w){ne(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(w)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Xt("getToken() completed but was canceled"):(Xt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,h=new QD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,P=>{An(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(iO)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&An(w),f())}}}interrupt(e){Xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>a_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new it(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Xt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zw&&(this.reconnectDelay_=Jw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Xt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hS.replace(/\./g,"-")]=1,pg()?e["framework.cordova"]=1:UI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yd.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}ki.nextPersistentConnectionId_=0;ki.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Be(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Be(Za,e),s=new Be(Za,t);return this.compare(r,s)!==0}minPost(){return Be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;class LS extends af{static get __EMPTY_NODE(){return Dh}static set __EMPTY_NODE(e){Dh=e}compare(e,t){return jo(e.name,t.name)}isDefinedOn(e){throw sl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Be.MIN}maxPost(){return new Be(bo,Dh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Be(e,Dh)}toString(){return".key"}}const Ba=new LS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Yt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Yt.RED,this.left=s??Vn.EMPTY_NODE,this.right=a??Vn.EMPTY_NODE}copy(e,t,r,s,a){return new Yt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Vn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Yt.RED=!0;Yt.BLACK=!1;class sO{copy(e,t,r,s,a){return this}insert(e,t,r){return new Yt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vn{constructor(e,t=Vn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Yt.BLACK,null,null))}remove(e){return new Vn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Yt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Oh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Oh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Oh(this.root_,null,this.comparator_,!0,e)}}Vn.EMPTY_NODE=new sO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(n,e){return jo(n.name,e.name)}function p_(n,e){return jo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm;function aO(n){Hm=n}const VS=function(n){return typeof n=="number"?"number:"+mS(n):"string:"+n},FS=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&si(e,".sv"),"Priority must be a string or number.")}else ne(n===Hm||n.isEmpty(),"priority of unexpected type.");ne(n===Hm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI;class Kt{static set __childrenNodeConstructor(e){eI=e}static get __childrenNodeConstructor(){return eI}constructor(e,t=Kt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Kt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Fe(e)===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Kt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Fe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Kt.__childrenNodeConstructor.EMPTY_NODE.updateChild(lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=mS(this.value_):e+=this.value_,this.lazyHash_=fS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Kt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Kt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Kt.VALUE_TYPE_ORDER.indexOf(t),a=Kt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Kt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jS,US;function lO(n){jS=n}function uO(n){US=n}class cO extends af{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?jo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Be.MIN}maxPost(){return new Be(bo,new Kt("[PRIORITY-POST]",US))}makePost(e,t){const r=jS(e);return new Be(t,new Kt("[PRIORITY-POST]",r))}toString(){return".priority"}}const It=new cO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=Math.log(2);class dO{constructor(e){const t=a=>parseInt(Math.log(a)/hO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let w,I;if(y===0)return null;if(y===1)return w=n[f],I=t?t(w):w,new Yt(I,w.node,Yt.BLACK,null,null);{const P=parseInt(y/2,10)+f,O=s(f,P),F=s(P+1,m);return w=n[P],I=t?t(w):w,new Yt(I,w.node,Yt.BLACK,O,F)}},a=function(f){let m=null,y=null,w=n.length;const I=function(O,F){const B=w-O,K=w;w-=O;const H=s(B+1,K),ee=n[B],se=t?t(ee):ee;P(new Yt(se,ee.node,F,null,H))},P=function(O){m?(m.left=O,m=O):(y=O,m=O)};for(let O=0;O<f.count;++O){const F=f.nextBitIsOne(),B=Math.pow(2,f.count-(O+1));F?I(B,Yt.BLACK):(I(B,Yt.BLACK),I(B,Yt.RED))}return y},u=new dO(n.length),h=a(u);return new Vn(r||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;const Ra={};class Ri{static get Default(){return ne(Ra&&It,"ChildrenNode.ts has not been loaded"),cm=cm||new Ri({".priority":Ra},{".priority":It}),cm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Wa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vn?t:null}hasIndex(e){return si(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Ba,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Be.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let h;s?h=vd(r,e.getCompare()):h=Ra;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=h,new Ri(y,m)}addToIndexes(e,t){const r=Xh(this.indexes_,(s,a)=>{const u=Wa(this.indexSet_,a);if(ne(u,"Missing index implementation for "+a),s===Ra)if(u.isDefinedOn(e.node)){const h=[],f=t.getIterator(Be.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),vd(h,u.getCompare())}else return Ra;else{const h=t.get(e.name);let f=s;return h&&(f=f.remove(new Be(e.name,h))),f.insert(e,e.node)}});return new Ri(r,this.indexSet_)}removeFromIndexes(e,t){const r=Xh(this.indexes_,s=>{if(s===Ra)return s;{const a=t.get(e.name);return a?s.remove(new Be(e.name,a)):s}});return new Ri(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;class Ce{static get EMPTY_NODE(){return su||(su=new Ce(new Vn(p_),null,Ri.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&FS(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||su}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?su:t}}getChild(e){const t=Fe(e);return t===null?this:this.getImmediateChild(t).getChild(lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Be(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?su:this.priorityNode_;return new Ce(s,u,a)}}updateChild(e,t){const r=Fe(e);if(r===null)return t;{ne(Fe(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(lt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(It,(u,h)=>{t[u]=h.val(e),r++,a&&Ce.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const h in t)u[h]=t[h];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VS(this.getPriority().val())+":"),this.forEachChild(It,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":fS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Be(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Be(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Be.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Be.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ac?-1:0}withIndex(e){if(e===Ba||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ba||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(It),s=t.getIterator(It);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ba?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fO extends Ce{constructor(){super(new Vn(p_),Ce.EMPTY_NODE,Ri.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const ac=new fO;Object.defineProperties(Be,{MIN:{value:new Be(Za,Ce.EMPTY_NODE)},MAX:{value:new Be(bo,ac)}});LS.__EMPTY_NODE=Ce.EMPTY_NODE;Kt.__childrenNodeConstructor=Ce;aO(ac);uO(ac);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=!0;function Ct(n,e=null){if(n===null)return Ce.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Kt(t,Ct(e))}if(!(n instanceof Array)&&pO){const t=[];let r=!1;if(Jt(n,(u,h)=>{if(u.substring(0,1)!=="."){const f=Ct(h);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Be(u,f)))}}),t.length===0)return Ce.EMPTY_NODE;const a=vd(t,oO,u=>u.name,p_);if(r){const u=vd(t,It.getCompare());return new Ce(a,Ct(e),new Ri({".priority":u},{".priority":It}))}else return new Ce(a,Ct(e),Ri.Default)}else{let t=Ce.EMPTY_NODE;return Jt(n,(r,s)=>{if(si(n,r)&&r.substring(0,1)!=="."){const a=Ct(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Ct(e))}}lO(Ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO extends af{constructor(e){super(),this.indexPath_=e,ne(!Ue(e)&&Fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?jo(e.name,t.name):a}makePost(e,t){const r=Ct(e),s=Ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new Be(t,s)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,ac);return new Be(bo,e)}toString(){return Fu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO extends af{compare(e,t){const r=e.node.compareTo(t.node);return r===0?jo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Be.MIN}maxPost(){return Be.MAX}makePost(e,t){const r=Ct(e);return new Be(t,r)}toString(){return".value"}}const _O=new gO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(n){return{type:"value",snapshotNode:n}}function el(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ju(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Uu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function yO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(s).equals(r.getChild(s))&&h.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(ju(t,h)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?u.trackChildChange(el(t,r)):u.trackChildChange(Uu(t,r,h))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(It,(s,a)=>{t.hasChild(s)||r.trackChildChange(ju(s,a))}),t.isLeafNode()||t.forEachChild(It,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Uu(s,a,u))}else r.trackChildChange(el(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ce.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.indexedFilter_=new m_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bu.getStartPost_(e),this.endPost_=Bu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Be(t,r))||(r=Ce.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ce.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ce.EMPTY_NODE);const a=this;return t.forEachChild(It,(u,h)=>{a.matches(new Be(u,h))||(s=s.updateImmediateChild(u,Ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Bu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Be(t,r))||(r=Ce.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Ce.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ce.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))s=s.updateImmediateChild(h.name,h.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ce.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const h=a.getNext();u<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?u++:s=s.updateImmediateChild(h.name,Ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(I,P)=>w(P,I)}else u=this.index_.getCompare();const h=e;ne(h.numChildren()===this.limit_,"");const f=new Be(t,r),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const w=h.getImmediateChild(t);let I=s.getChildAfterChild(this.index_,m,this.reverse_);for(;I!=null&&(I.name===t||h.hasChild(I.name));)I=s.getChildAfterChild(this.index_,I,this.reverse_);const P=I==null?1:u(I,f);if(y&&!r.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(Uu(t,r,w)),h.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(ju(t,w));const F=h.updateImmediateChild(t,Ce.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a!=null&&a.trackChildChange(el(I.name,I.node)),F.updateImmediateChild(I.name,I.node)):F}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(ju(m.name,m.node)),a.trackChildChange(el(t,r))),h.updateImmediateChild(t,r).updateImmediateChild(m.name,Ce.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Za}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new g_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function EO(n){return n.loadsAllData()?new m_(n.getIndex()):n.hasLimit()?new vO(n):new Bu(n)}function tI(n){const e={};if(n.isDefault())return e;let t;if(n.index_===It?t="$priority":n.index_===_O?t="$value":n.index_===Ba?t="$key":(ne(n.index_ instanceof mO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Bt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Bt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Bt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Bt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Bt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nI(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==It&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends bS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=oc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Ed.getListenId_(e,r),h={};this.listens_[u]=h;const f=tI(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let w=y;if(m===404&&(w=null,m=null),m===null&&this.onDataUpdate_(a,w,!1,r),Wa(this.listens_,u)===h){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",s(I,null)}})}unlisten(e,t){const r=Ed.getListenId_(e,t);delete this.listens_[r]}get(e){const t=tI(e._queryParams),r=e._path.toString(),s=new Yr;return this.restRequest_(r+".json",t,(a,u)=>{let h=u;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ol(t);this.log_("Sending REST request for "+u);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+u+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=Au(h.responseText)}catch{An("Failed to parse JSON response for "+u+": "+h.responseText)}r(null,f)}else h.status!==401&&h.status!==404&&An("Got unsuccessful REST response for "+u+" Status: "+h.status),r(h.status);r=null}},h.open("GET",u,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){return{value:null,children:new Map}}function ml(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Fe(e);n.children.has(r)||n.children.set(r,wd());const s=n.children.get(r);e=lt(e),ml(s,e,t)}}function Gm(n,e){if(Ue(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(It,(r,s)=>{ml(n,new it(r),s)}),Gm(n,e)}}else if(n.children.size>0){const t=Fe(e);return e=lt(e),n.children.has(t)&&Gm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Km(n,e,t){n.value!==null?t(e,n.value):IO(n,(r,s)=>{const a=new it(e.toString()+"/"+r);Km(s,a,t)})}function IO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Jt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=10*1e3,SO=30*1e3,CO=300*1e3;class AO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new TO(e);const r=rI+(SO-rI)*Math.random();wu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Jt(e,(s,a)=>{a>0&&si(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),wu(this.reportStats_.bind(this),Math.floor(Math.random()*2*CO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(br||(br={}));function __(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function y_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function v_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=br.ACK_USER_WRITE,this.source=__()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new Id(Ye(),t,this.revert)}}else return ne(Fe(this.path)===e,"operationForChild called for unrelated child."),new Id(lt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.source=e,this.path=t,this.type=br.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new zu(this.source,Ye()):new zu(this.source,lt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=br.OVERWRITE}operationForChild(e){return Ue(this.path)?new Do(this.source,Ye(),this.snap.getImmediateChild(e)):new Do(this.source,lt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=br.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Do(this.source,Ye(),t.value):new tl(this.source,Ye(),t)}else return ne(Fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tl(this.source,lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(yO(u.childName,u.snapshotNode))}),ou(n,s,"child_removed",e,r,t),ou(n,s,"child_added",e,r,t),ou(n,s,"child_moved",a,r,t),ou(n,s,"child_changed",e,r,t),ou(n,s,"value",e,r,t),s}function ou(n,e,t,r,s,a){const u=r.filter(h=>h.type===t);u.sort((h,f)=>NO(n,h,f)),u.forEach(h=>{const f=kO(n,h,a);s.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,n.query_))})})}function kO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function NO(n,e,t){if(e.childName==null||t.childName==null)throw sl("Should only compare child_ events.");const r=new Be(e.childName,e.snapshotNode),s=new Be(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,e){return{eventCache:n,serverCache:e}}function Iu(n,e,t,r){return lf(new Fs(e,t,r),n.serverCache)}function zS(n,e,t,r){return lf(n.eventCache,new Fs(e,t,r))}function Td(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Oo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;const xO=()=>(hm||(hm=new Vn(mD)),hm);class ht{static fromObject(e){let t=new ht(null);return Jt(e,(r,s)=>{t=t.set(new it(r),s)}),t}constructor(e,t=xO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Ue(e))return null;{const r=Fe(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(lt(e),t);return a!=null?{path:wt(new it(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Fe(e),r=this.children.get(t);return r!==null?r.subtree(lt(e)):new ht(null)}}set(e,t){if(Ue(e))return new ht(t,this.children);{const r=Fe(e),a=(this.children.get(r)||new ht(null)).set(lt(e),t),u=this.children.insert(r,a);return new ht(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=Fe(e),r=this.children.get(t);if(r){const s=r.remove(lt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new ht(null):new ht(this.value,a)}else return this}}get(e){if(Ue(e))return this.value;{const t=Fe(e),r=this.children.get(t);return r?r.get(lt(e)):null}}setTree(e,t){if(Ue(e))return t;{const r=Fe(e),a=(this.children.get(r)||new ht(null)).setTree(lt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new ht(this.value,u)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(wt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ue(e))return null;{const a=Fe(e),u=this.children.get(a);return u?u.findOnPath_(lt(e),wt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,r){if(Ue(e))return this;{this.value&&r(t,this.value);const s=Fe(e),a=this.children.get(s);return a?a.foreachOnPath_(lt(e),wt(t,s),r):new ht(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(wt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.writeTree_=e}static empty(){return new Or(new ht(null))}}function Tu(n,e,t){if(Ue(e))return new Or(new ht(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Sn(s,e);return a=a.updateChild(u,t),new Or(n.writeTree_.set(s,a))}else{const s=new ht(t),a=n.writeTree_.setTree(e,s);return new Or(a)}}}function Qm(n,e,t){let r=n;return Jt(t,(s,a)=>{r=Tu(r,wt(e,s),a)}),r}function iI(n,e){if(Ue(e))return Or.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new Or(t)}}function Ym(n,e){return Uo(n,e)!=null}function Uo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Sn(t.path,e)):null}function sI(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(It,(r,s)=>{e.push(new Be(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Be(r,s.value))}),e}function Rs(n,e){if(Ue(e))return n;{const t=Uo(n,e);return t!=null?new Or(new ht(t)):new Or(n.writeTree_.subtree(e))}}function Xm(n){return n.writeTree_.isEmpty()}function nl(n,e){return WS(Ye(),n.writeTree_,e)}function WS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=WS(wt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(wt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n,e){return GS(e,n)}function bO(n,e,t,r,s){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Tu(n.visibleWrites,e,t)),n.lastWriteId=r}function DO(n,e,t,r){ne(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Qm(n.visibleWrites,e,t),n.lastWriteId=r}function OO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function MO(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const h=n.allWrites[u];h.visible&&(u>=t&&LO(h,r.path)?s=!1:dr(r.path,h.path)&&(a=!0)),u--}if(s){if(a)return VO(n),!0;if(r.snap)n.visibleWrites=iI(n.visibleWrites,r.path);else{const h=r.children;Jt(h,f=>{n.visibleWrites=iI(n.visibleWrites,wt(r.path,f))})}return!0}else return!1}function LO(n,e){if(n.snap)return dr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&dr(wt(n.path,t),e))return!0;return!1}function VO(n){n.visibleWrites=$S(n.allWrites,FO,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function FO(n){return n.visible}function $S(n,e,t){let r=Or.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let h;if(a.snap)dr(t,u)?(h=Sn(t,u),r=Tu(r,h,a.snap)):dr(u,t)&&(h=Sn(u,t),r=Tu(r,Ye(),a.snap.getChild(h)));else if(a.children){if(dr(t,u))h=Sn(t,u),r=Qm(r,h,a.children);else if(dr(u,t))if(h=Sn(u,t),Ue(h))r=Qm(r,Ye(),a.children);else{const f=Wa(a.children,Fe(h));if(f){const m=f.getChild(lt(h));r=Tu(r,Ye(),m)}}}else throw sl("WriteRecord should have .snap or .children")}}return r}function qS(n,e,t,r,s){if(!r&&!s){const a=Uo(n.visibleWrites,e);if(a!=null)return a;{const u=Rs(n.visibleWrites,e);if(Xm(u))return t;if(t==null&&!Ym(u,Ye()))return null;{const h=t||Ce.EMPTY_NODE;return nl(u,h)}}}else{const a=Rs(n.visibleWrites,e);if(!s&&Xm(a))return t;if(!s&&t==null&&!Ym(a,Ye()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(dr(m.path,e)||dr(e,m.path))},h=$S(n.allWrites,u,e),f=t||Ce.EMPTY_NODE;return nl(h,f)}}}function jO(n,e,t){let r=Ce.EMPTY_NODE;const s=Uo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(It,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Rs(n.visibleWrites,e);return t.forEachChild(It,(u,h)=>{const f=nl(Rs(a,new it(u)),h);r=r.updateImmediateChild(u,f)}),sI(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Rs(n.visibleWrites,e);return sI(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function UO(n,e,t,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=wt(e,t);if(Ym(n.visibleWrites,a))return null;{const u=Rs(n.visibleWrites,a);return Xm(u)?s.getChild(t):nl(u,s.getChild(t))}}function BO(n,e,t,r){const s=wt(e,t),a=Uo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Rs(n.visibleWrites,s);return nl(u,r.getNode().getImmediateChild(t))}else return null}function zO(n,e){return Uo(n.visibleWrites,e)}function WO(n,e,t,r,s,a,u){let h;const f=Rs(n.visibleWrites,e),m=Uo(f,Ye());if(m!=null)h=m;else if(t!=null)h=nl(f,t);else return[];if(h=h.withIndex(u),!h.isEmpty()&&!h.isLeafNode()){const y=[],w=u.getCompare(),I=a?h.getReverseIteratorFrom(r,u):h.getIteratorFrom(r,u);let P=I.getNext();for(;P&&y.length<s;)w(P,r)!==0&&y.push(P),P=I.getNext();return y}else return[]}function $O(){return{visibleWrites:Or.empty(),allWrites:[],lastWriteId:-1}}function Sd(n,e,t,r){return qS(n.writeTree,n.treePath,e,t,r)}function E_(n,e){return jO(n.writeTree,n.treePath,e)}function oI(n,e,t,r){return UO(n.writeTree,n.treePath,e,t,r)}function Cd(n,e){return zO(n.writeTree,wt(n.treePath,e))}function qO(n,e,t,r,s,a){return WO(n.writeTree,n.treePath,e,t,r,s,a)}function w_(n,e,t){return BO(n.writeTree,n.treePath,e,t)}function HS(n,e){return GS(wt(n.treePath,e),n.writeTree)}function GS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Uu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,ju(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,el(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Uu(r,e.snapshotNode,s.oldSnap));else throw sl("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const KS=new GO;class I_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return w_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oo(this.viewCache_),a=qO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(n){return{filter:n}}function QO(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function YO(n,e,t,r,s){const a=new HO;let u,h;if(t.type===br.OVERWRITE){const m=t;m.source.fromUser?u=Jm(n,e,m.path,m.snap,r,s,a):(ne(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!Ue(m.path),u=Ad(n,e,m.path,m.snap,r,s,h,a))}else if(t.type===br.MERGE){const m=t;m.source.fromUser?u=JO(n,e,m.path,m.children,r,s,a):(ne(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),u=Zm(n,e,m.path,m.children,r,s,h,a))}else if(t.type===br.ACK_USER_WRITE){const m=t;m.revert?u=t2(n,e,m.path,r,s,a):u=ZO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===br.LISTEN_COMPLETE)u=e2(n,e,t.path,r,a);else throw sl("Unknown operation type: "+t.type);const f=a.getChanges();return XO(e,u,f),{viewCache:u,changes:f}}function XO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Td(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(BS(Td(e)))}}function QS(n,e,t,r,s,a){const u=e.eventCache;if(Cd(r,t)!=null)return e;{let h,f;if(Ue(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Oo(e),y=m instanceof Ce?m:Ce.EMPTY_NODE,w=E_(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const m=Sd(r,Oo(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Fe(t);if(m===".priority"){ne(Vs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const w=oI(r,t,y,f);w!=null?h=n.filter.updatePriority(y,w):h=u.getNode()}else{const y=lt(t);let w;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const I=oI(r,t,u.getNode(),f);I!=null?w=u.getNode().getImmediateChild(m).updateChild(y,I):w=u.getNode().getImmediateChild(m)}else w=w_(r,m,e.serverCache);w!=null?h=n.filter.updateChild(u.getNode(),m,w,y,s,a):h=u.getNode()}}return Iu(e,h,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function Ad(n,e,t,r,s,a,u,h){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const P=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),P,null)}else{const P=Fe(t);if(!f.isCompleteForPath(t)&&Vs(t)>1)return e;const O=lt(t),B=f.getNode().getImmediateChild(P).updateChild(O,r);P===".priority"?m=y.updatePriority(f.getNode(),B):m=y.updateChild(f.getNode(),P,B,O,KS,null)}const w=zS(e,m,f.isFullyInitialized()||Ue(t),y.filtersNodes()),I=new I_(s,w,a);return QS(n,w,t,s,I,h)}function Jm(n,e,t,r,s,a,u){const h=e.eventCache;let f,m;const y=new I_(s,e,a);if(Ue(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Iu(e,m,!0,n.filter.filtersNodes());else{const w=Fe(t);if(w===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Iu(e,m,h.isFullyInitialized(),h.isFiltered());else{const I=lt(t),P=h.getNode().getImmediateChild(w);let O;if(Ue(I))O=r;else{const F=y.getCompleteChild(w);F!=null?h_(I)===".priority"&&F.getChild(OS(I)).isEmpty()?O=F:O=F.updateChild(I,r):O=Ce.EMPTY_NODE}if(P.equals(O))f=e;else{const F=n.filter.updateChild(h.getNode(),w,O,I,y,u);f=Iu(e,F,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function aI(n,e){return n.eventCache.isCompleteForChild(e)}function JO(n,e,t,r,s,a,u){let h=e;return r.foreach((f,m)=>{const y=wt(t,f);aI(e,Fe(y))&&(h=Jm(n,h,y,m,s,a,u))}),r.foreach((f,m)=>{const y=wt(t,f);aI(e,Fe(y))||(h=Jm(n,h,y,m,s,a,u))}),h}function lI(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Zm(n,e,t,r,s,a,u,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Ue(t)?m=r:m=new ht(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((w,I)=>{if(y.hasChild(w)){const P=e.serverCache.getNode().getImmediateChild(w),O=lI(n,P,I);f=Ad(n,f,new it(w),O,s,a,u,h)}}),m.children.inorderTraversal((w,I)=>{const P=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!y.hasChild(w)&&!P){const O=e.serverCache.getNode().getImmediateChild(w),F=lI(n,O,I);f=Ad(n,f,new it(w),F,s,a,u,h)}}),f}function ZO(n,e,t,r,s,a,u){if(Cd(s,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Ue(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ad(n,e,t,f.getNode().getChild(t),s,a,h,u);if(Ue(t)){let m=new ht(null);return f.getNode().forEachChild(Ba,(y,w)=>{m=m.set(new it(y),w)}),Zm(n,e,t,m,s,a,h,u)}else return e}else{let m=new ht(null);return r.foreach((y,w)=>{const I=wt(t,y);f.isCompleteForPath(I)&&(m=m.set(y,f.getNode().getChild(I)))}),Zm(n,e,t,m,s,a,h,u)}}function e2(n,e,t,r,s){const a=e.serverCache,u=zS(e,a.getNode(),a.isFullyInitialized()||Ue(t),a.isFiltered());return QS(n,u,t,r,KS,s)}function t2(n,e,t,r,s,a){let u;if(Cd(r,t)!=null)return e;{const h=new I_(r,e,s),f=e.eventCache.getNode();let m;if(Ue(t)||Fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Sd(r,Oo(e));else{const w=e.serverCache.getNode();ne(w instanceof Ce,"serverChildren would be complete if leaf node"),y=E_(r,w)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Fe(t);let w=w_(r,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=f.getImmediateChild(y)),w!=null?m=n.filter.updateChild(f,y,w,lt(t),h,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Ce.EMPTY_NODE,lt(t),h,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Sd(r,Oo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Cd(r,Ye())!=null,Iu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new m_(r.getIndex()),a=EO(r);this.processor_=KO(a);const u=t.serverCache,h=t.eventCache,f=s.updateFullNode(Ce.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Ce.EMPTY_NODE,h.getNode(),null),y=new Fs(f,u.isFullyInitialized(),s.filtersNodes()),w=new Fs(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=lf(w,y),this.eventGenerator_=new RO(this.query_)}get query(){return this.query_}}function r2(n){return n.viewCache_.serverCache.getNode()}function i2(n){return Td(n.viewCache_)}function s2(n,e){const t=Oo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Fe(e)).isEmpty())?t.getChild(e):null}function uI(n){return n.eventRegistrations_.length===0}function o2(n,e){n.eventRegistrations_.push(e)}function cI(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function hI(n,e,t,r){e.type===br.MERGE&&e.source.queryId!==null&&(ne(Oo(n.viewCache_),"We should always have a full cache before handling merges"),ne(Td(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=YO(n.processor_,s,e,t,r);return QO(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,YS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function a2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(It,(a,u)=>{r.push(el(a,u))}),t.isFullyInitialized()&&r.push(BS(t.getNode())),YS(n,r,t.getNode(),e)}function YS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return PO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd;class XS{constructor(){this.views=new Map}}function l2(n){ne(!Rd,"__referenceConstructor has already been defined"),Rd=n}function u2(){return ne(Rd,"Reference.ts has not been loaded"),Rd}function c2(n){return n.views.size===0}function T_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ne(a!=null,"SyncTree gave us an op for an invalid query."),hI(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(hI(u,e,t,r));return a}}function JS(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let h=Sd(t,s?r:null),f=!1;h?f=!0:r instanceof Ce?(h=E_(t,r),f=!1):(h=Ce.EMPTY_NODE,f=!1);const m=lf(new Fs(h,f,!1),new Fs(r,s,!1));return new n2(e,m)}return u}function h2(n,e,t,r,s,a){const u=JS(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),o2(u,t),a2(u,t)}function d2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const h=js(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(cI(m,t,r)),uI(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(cI(f,t,r)),uI(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return h&&!js(n)&&a.push(new(u2())(e._repo,e._path)),{removed:a,events:u}}function ZS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ps(n,e){let t=null;for(const r of n.views.values())t=t||s2(r,e);return t}function eC(n,e){if(e._queryParams.loadsAllData())return cf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function tC(n,e){return eC(n,e)!=null}function js(n){return cf(n)!=null}function cf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;function f2(n){ne(!Pd,"__referenceConstructor has already been defined"),Pd=n}function p2(){return ne(Pd,"Reference.ts has not been loaded"),Pd}let m2=1;class dI{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=$O(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nC(n,e,t,r,s){return bO(n.pendingWriteTree_,e,t,r,s),s?gl(n,new Do(__(),e,t)):[]}function g2(n,e,t,r){DO(n.pendingWriteTree_,e,t,r);const s=ht.fromObject(t);return gl(n,new tl(__(),e,s))}function ys(n,e,t=!1){const r=OO(n.pendingWriteTree_,e);if(MO(n.pendingWriteTree_,e)){let a=new ht(null);return r.snap!=null?a=a.set(Ye(),!0):Jt(r.children,u=>{a=a.set(new it(u),!0)}),gl(n,new Id(r.path,a,t))}else return[]}function lc(n,e,t){return gl(n,new Do(y_(),e,t))}function _2(n,e,t){const r=ht.fromObject(t);return gl(n,new tl(y_(),e,r))}function y2(n,e){return gl(n,new zu(y_(),e))}function v2(n,e,t){const r=C_(n,t);if(r){const s=A_(r),a=s.path,u=s.queryId,h=Sn(a,e),f=new zu(v_(u),h);return R_(n,a,f)}else return[]}function kd(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let h=[];if(u&&(e._queryIdentifier==="default"||tC(u,e))){const f=d2(u,e,t,r);c2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(h=f.events,!s){const y=m.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(I,P)=>js(P));if(y&&!w){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const P=I2(I);for(let O=0;O<P.length;++O){const F=P[O],B=F.query,K=oC(n,F);n.listenProvider_.startListening(Su(B),Wu(n,B),K.hashFn,K.onComplete)}}}!w&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Su(e),null):m.forEach(I=>{const P=n.queryToTagMap.get(hf(I));n.listenProvider_.stopListening(Su(I),P)}))}T2(n,m)}return h}function rC(n,e,t,r){const s=C_(n,r);if(s!=null){const a=A_(s),u=a.path,h=a.queryId,f=Sn(u,e),m=new Do(v_(h),f,t);return R_(n,u,m)}else return[]}function E2(n,e,t,r){const s=C_(n,r);if(s){const a=A_(s),u=a.path,h=a.queryId,f=Sn(u,e),m=ht.fromObject(t),y=new tl(v_(h),f,m);return R_(n,u,y)}else return[]}function eg(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(I,P)=>{const O=Sn(I,s);a=a||Ps(P,O),u=u||js(P)});let h=n.syncPointTree_.get(s);h?(u=u||js(h),a=a||Ps(h,Ye())):(h=new XS,n.syncPointTree_=n.syncPointTree_.set(s,h));let f;a!=null?f=!0:(f=!1,a=Ce.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((P,O)=>{const F=Ps(O,Ye());F&&(a=a.updateImmediateChild(P,F))}));const m=tC(h,e);if(!m&&!e._queryParams.loadsAllData()){const I=hf(e);ne(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const P=S2();n.queryToTagMap.set(I,P),n.tagToQueryMap.set(P,I)}const y=uf(n.pendingWriteTree_,s);let w=h2(h,e,t,y,a,f);if(!m&&!u&&!r){const I=eC(h,e);w=w.concat(C2(n,e,I))}return w}function S_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,h)=>{const f=Sn(u,e),m=Ps(h,f);if(m)return m});return qS(s,e,a,t,!0)}function w2(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(m,y)=>{const w=Sn(m,t);r=r||Ps(y,w)});let s=n.syncPointTree_.get(t);s?r=r||Ps(s,Ye()):(s=new XS,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=r!=null,u=a?new Fs(r,!0,!1):null,h=uf(n.pendingWriteTree_,e._path),f=JS(s,e,h,a?u.getNode():Ce.EMPTY_NODE,a);return i2(f)}function gl(n,e){return iC(e,n.syncPointTree_,null,uf(n.pendingWriteTree_,Ye()))}function iC(n,e,t,r){if(Ue(n.path))return sC(n,e,t,r);{const s=e.get(Ye());t==null&&s!=null&&(t=Ps(s,Ye()));let a=[];const u=Fe(n.path),h=n.operationForChild(u),f=e.children.get(u);if(f&&h){const m=t?t.getImmediateChild(u):null,y=HS(r,u);a=a.concat(iC(h,f,m,y))}return s&&(a=a.concat(T_(s,n,r,t))),a}}function sC(n,e,t,r){const s=e.get(Ye());t==null&&s!=null&&(t=Ps(s,Ye()));let a=[];return e.children.inorderTraversal((u,h)=>{const f=t?t.getImmediateChild(u):null,m=HS(r,u),y=n.operationForChild(u);y&&(a=a.concat(sC(y,h,f,m)))}),s&&(a=a.concat(T_(s,n,r,t))),a}function oC(n,e){const t=e.query,r=Wu(n,t);return{hashFn:()=>(r2(e)||Ce.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?v2(n,t._path,r):y2(n,t._path);{const a=yD(s,t);return kd(n,t,null,a)}}}}function Wu(n,e){const t=hf(e);return n.queryToTagMap.get(t)}function hf(n){return n._path.toString()+"$"+n._queryIdentifier}function C_(n,e){return n.tagToQueryMap.get(e)}function A_(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function R_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=uf(n.pendingWriteTree_,e);return T_(r,t,s,null)}function I2(n){return n.fold((e,t,r)=>{if(t&&js(t))return[cf(t)];{let s=[];return t&&(s=ZS(t)),Jt(r,(a,u)=>{s=s.concat(u)}),s}})}function Su(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(p2())(n._repo,n._path):n}function T2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=hf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function S2(){return m2++}function C2(n,e,t){const r=e._path,s=Wu(n,e),a=oC(n,t),u=n.listenProvider_.startListening(Su(e),s,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(r);if(s)ne(!js(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((m,y,w)=>{if(!Ue(m)&&y&&js(y))return[cf(y).query];{let I=[];return y&&(I=I.concat(ZS(y).map(P=>P.query))),Jt(w,(P,O)=>{I=I.concat(O)}),I}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Su(y),Wu(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new P_(t)}node(){return this.node_}}class k_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=wt(this.path_,e);return new k_(this.syncTree_,t)}node(){return S_(this.syncTree_,this.path_)}}const A2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},fI=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return R2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return P2(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},R2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},P2=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},aC=function(n,e,t,r){return N_(e,new k_(t,n),r)},lC=function(n,e,t){return N_(n,new P_(e),t)};function N_(n,e,t){const r=n.getPriority().val(),s=fI(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,h=fI(u.getValue(),e,t);return h!==u.getValue()||s!==u.getPriority().val()?new Kt(h,Ct(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Kt(s))),u.forEachChild(It,(h,f)=>{const m=N_(f,e.getImmediateChild(h),t);m!==f&&(a=a.updateImmediateChild(h,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function b_(n,e){let t=e instanceof it?e:new it(e),r=n,s=Fe(t);for(;s!==null;){const a=Wa(r.node.children,s)||{children:{},childCount:0};r=new x_(s,r,a),t=lt(t),s=Fe(t)}return r}function _l(n){return n.node.value}function uC(n,e){n.node.value=e,tg(n)}function cC(n){return n.node.childCount>0}function k2(n){return _l(n)===void 0&&!cC(n)}function df(n,e){Jt(n.node.children,(t,r)=>{e(new x_(t,n,r))})}function hC(n,e,t,r){t&&e(n),df(n,s=>{hC(s,e,!0)})}function N2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function uc(n){return new it(n.parent===null?n.name:uc(n.parent)+"/"+n.name)}function tg(n){n.parent!==null&&x2(n.parent,n.name,n)}function x2(n,e,t){const r=k2(t),s=si(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,tg(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,tg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=/[\[\].#$\/\u0000-\u001F\u007F]/,D2=/[\[\].#$\u0000-\u001F\u007F]/,dm=10*1024*1024,D_=function(n){return typeof n=="string"&&n.length!==0&&!b2.test(n)},dC=function(n){return typeof n=="string"&&n.length!==0&&!D2.test(n)},O2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dC(n)},fC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!of(n)||n&&typeof n=="object"&&si(n,".sv")},ng=function(n,e,t,r){ff($a(n,"value"),e,t)},ff=function(n,e,t){const r=t instanceof it?new JD(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Io(r));if(typeof e=="function")throw new Error(n+"contains a function "+Io(r)+" with contents = "+e.toString());if(of(e))throw new Error(n+"contains "+e.toString()+" "+Io(r));if(typeof e=="string"&&e.length>dm/3&&bd(e)>dm)throw new Error(n+"contains a string greater than "+dm+" utf8 bytes "+Io(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Jt(e,(u,h)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!D_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Io(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZD(r,u),ff(n,h,r),eO(r)}),s&&a)throw new Error(n+' contains ".value" child '+Io(r)+" in addition to actual children.")}},M2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Fu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!D_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XD);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&dr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},pC=function(n,e,t,r){const s=$a(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Jt(e,(u,h)=>{const f=new it(u);if(ff(s,h,wt(t,f)),h_(f)===".priority"&&!fC(h))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),M2(s,a)},L2=function(n,e,t){if(of(e))throw new Error($a(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fC(e))throw new Error($a(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},mC=function(n,e,t,r){if(!dC(t))throw new Error($a(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},V2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mC(n,e,t)},fu=function(n,e){if(Fe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},F2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!D_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!O2(t))throw new Error($a(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pf(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!d_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function gC(n,e,t){pf(n,t),_C(n,r=>d_(r,e))}function fr(n,e,t){pf(n,t),_C(n,r=>dr(r,e)||dr(e,r))}function _C(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(U2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function U2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Eu&&Xt("event: "+t.toString()),pl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2="repo_interrupt",z2=25;class W2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new j2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wd(),this.transactionQueueTree_=new x_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $2(n,e,t){if(n.stats_=u_(n.repoInfo_),n.forceRestClient_||ID())n.server_=new Ed(n.repoInfo_,(r,s,a,u)=>{pI(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>mI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Bt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ki(n.repoInfo_,e,(r,s,a,u)=>{pI(n,r,s,a,u)},r=>{mI(n,r)},r=>{H2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=RD(n.repoInfo_,()=>new AO(n.stats_,n.server_)),n.infoData_=new wO,n.infoSyncTree_=new dI({startListening:(r,s,a,u)=>{let h=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(h=lc(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),h},stopListening:()=>{}}),O_(n,"connected",!1),n.serverSyncTree_=new dI({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(h,f)=>{const m=u(h,f);fr(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function q2(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function mf(n){return A2({timestamp:q2(n)})}function pI(n,e,t,r,s){n.dataUpdateCount++;const a=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Xh(t,m=>Ct(m));u=E2(n.serverSyncTree_,a,f,s)}else{const f=Ct(t);u=rC(n.serverSyncTree_,a,f,s)}else if(r){const f=Xh(t,m=>Ct(m));u=_2(n.serverSyncTree_,a,f)}else{const f=Ct(t);u=lc(n.serverSyncTree_,a,f)}let h=a;u.length>0&&(h=rl(n,a)),fr(n.eventQueue_,h,u)}function mI(n,e){O_(n,"connected",e),e===!1&&Y2(n)}function H2(n,e){Jt(e,(t,r)=>{O_(n,t,r)})}function O_(n,e,t){const r=new it("/.info/"+e),s=Ct(t);n.infoData_.updateSnapshot(r,s);const a=lc(n.infoSyncTree_,r,s);fr(n.eventQueue_,r,a)}function M_(n){return n.nextWriteId_++}function G2(n,e,t){const r=w2(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const a=Ct(s).withIndex(e._queryParams.getIndex());eg(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=lc(n.serverSyncTree_,e._path,a);else{const h=Wu(n.serverSyncTree_,e);u=rC(n.serverSyncTree_,e._path,a,h)}return fr(n.eventQueue_,e._path,u),kd(n.serverSyncTree_,e,t,null,!0),a},s=>(cc(n,"get for query "+Bt(e)+" failed: "+s),Promise.reject(new Error(s))))}function K2(n,e,t,r,s){cc(n,"set",{path:e.toString(),value:t,priority:r});const a=mf(n),u=Ct(t,r),h=S_(n.serverSyncTree_,e),f=lC(u,h,a),m=M_(n),y=nC(n.serverSyncTree_,e,f,m,!0);pf(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(I,P)=>{const O=I==="ok";O||An("set at "+e+" failed: "+I);const F=ys(n.serverSyncTree_,m,!O);fr(n.eventQueue_,e,F),Us(n,s,I,P)});const w=V_(n,e);rl(n,w),fr(n.eventQueue_,w,[])}function Q2(n,e,t,r){cc(n,"update",{path:e.toString(),value:t});let s=!0;const a=mf(n),u={};if(Jt(t,(h,f)=>{s=!1,u[h]=aC(wt(e,h),Ct(f),n.serverSyncTree_,a)}),s)Xt("update() called with empty data.  Don't do anything."),Us(n,r,"ok",void 0);else{const h=M_(n),f=g2(n.serverSyncTree_,e,u,h);pf(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const w=m==="ok";w||An("update at "+e+" failed: "+m);const I=ys(n.serverSyncTree_,h,!w),P=I.length>0?rl(n,e):e;fr(n.eventQueue_,P,I),Us(n,r,m,y)}),Jt(t,m=>{const y=V_(n,wt(e,m));rl(n,y)}),fr(n.eventQueue_,e,[])}}function Y2(n){cc(n,"onDisconnectEvents");const e=mf(n),t=wd();Km(n.onDisconnect_,Ye(),(s,a)=>{const u=aC(s,a,n.serverSyncTree_,e);ml(t,s,u)});let r=[];Km(t,Ye(),(s,a)=>{r=r.concat(lc(n.serverSyncTree_,s,a));const u=V_(n,s);rl(n,u)}),n.onDisconnect_=wd(),fr(n.eventQueue_,Ye(),r)}function X2(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Gm(n.onDisconnect_,e),Us(n,t,r,s)})}function gI(n,e,t,r){const s=Ct(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&ml(n.onDisconnect_,e,s),Us(n,r,a,u)})}function J2(n,e,t,r,s){const a=Ct(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,h)=>{u==="ok"&&ml(n.onDisconnect_,e,a),Us(n,s,u,h)})}function Z2(n,e,t,r){if(Yh(t)){Xt("onDisconnect().update() called with empty data.  Don't do anything."),Us(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Jt(t,(u,h)=>{const f=Ct(h);ml(n.onDisconnect_,wt(e,u),f)}),Us(n,r,s,a)})}function eM(n,e,t){let r;Fe(e._path)===".info"?r=eg(n.infoSyncTree_,e,t):r=eg(n.serverSyncTree_,e,t),gC(n.eventQueue_,e._path,r)}function _I(n,e,t){let r;Fe(e._path)===".info"?r=kd(n.infoSyncTree_,e,t):r=kd(n.serverSyncTree_,e,t),gC(n.eventQueue_,e._path,r)}function tM(n){n.persistentConnection_&&n.persistentConnection_.interrupt(B2)}function cc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Xt(t,...e)}function Us(n,e,t,r){e&&pl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function yC(n,e,t){return S_(n.serverSyncTree_,e,t)||Ce.EMPTY_NODE}function L_(n,e=n.transactionQueueTree_){if(e||gf(n,e),_l(e)){const t=EC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&nM(n,uc(e),t)}else cC(e)&&df(e,t=>{L_(n,t)})}function nM(n,e,t){const r=t.map(m=>m.currentWriteId),s=yC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=Sn(e,y.path);a=a.updateChild(w,y.currentOutputSnapshotRaw)}const h=a.val(!0),f=e;n.server_.put(f.toString(),h,m=>{cc(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,y=y.concat(ys(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();gf(n,b_(n.transactionQueueTree_,e)),L_(n,n.transactionQueueTree_),fr(n.eventQueue_,e,y);for(let I=0;I<w.length;I++)pl(w[I])}else{if(m==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{An("transaction at "+f.toString()+" failed: "+m);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=m}rl(n,e)}},u)}function rl(n,e){const t=vC(n,e),r=uc(t),s=EC(n,t);return rM(n,s,r),r}function rM(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=Sn(t,f.path);let y=!1,w;if(ne(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,w=f.abortReason,s=s.concat(ys(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=z2)y=!0,w="maxretry",s=s.concat(ys(n.serverSyncTree_,f.currentWriteId,!0));else{const I=yC(n,f.path,u);f.currentInputSnapshot=I;const P=e[h].update(I.val());if(P!==void 0){ff("transaction failed: Data returned ",P,f.path);let O=Ct(P);typeof P=="object"&&P!=null&&si(P,".priority")||(O=O.updatePriority(I.getPriority()));const B=f.currentWriteId,K=mf(n),H=lC(O,I,K);f.currentOutputSnapshotRaw=O,f.currentOutputSnapshotResolved=H,f.currentWriteId=M_(n),u.splice(u.indexOf(B),1),s=s.concat(nC(n.serverSyncTree_,f.path,H,f.currentWriteId,f.applyLocally)),s=s.concat(ys(n.serverSyncTree_,B,!0))}else y=!0,w="nodata",s=s.concat(ys(n.serverSyncTree_,f.currentWriteId,!0))}fr(n.eventQueue_,t,s),s=[],y&&(e[h].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(w==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(w),!1,null))))}gf(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)pl(r[h]);L_(n,n.transactionQueueTree_)}function vC(n,e){let t,r=n.transactionQueueTree_;for(t=Fe(e);t!==null&&_l(r)===void 0;)r=b_(r,t),e=lt(e),t=Fe(e);return r}function EC(n,e){const t=[];return wC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function wC(n,e,t){const r=_l(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);df(e,s=>{wC(n,s,t)})}function gf(n,e){const t=_l(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,uC(e,t.length>0?t:void 0)}df(e,r=>{gf(n,r)})}function V_(n,e){const t=uc(vC(n,e)),r=b_(n.transactionQueueTree_,e);return N2(r,s=>{fm(n,s)}),fm(n,r),hC(r,s=>{fm(n,s)}),t}function fm(n,e){const t=_l(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ne(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ne(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(ys(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?uC(e,void 0):t.length=a+1,fr(n.eventQueue_,uc(e),s);for(let u=0;u<r.length;u++)pl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function sM(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${t}' in query '${n}'`)}return e}const yI=function(n,e){const t=oM(n),r=t.namespace;t.domain==="firebase.com"&&Li(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Li("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new CS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new it(t.pathString)}},oM=function(n){let e="",t="",r="",s="",a="",u=!0,h="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(y,w)),y<w&&(s=iM(n.substring(y,w)));const I=sM(n.substring(Math.min(n.length,w)));m=e.indexOf(":"),m>=0?(u=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const O=e.indexOf(".");r=e.substring(0,O).toLowerCase(),t=e.substring(O+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:h,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Bt(this.snapshot.exportVal())}}class lM{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class uM{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Yr;return X2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){fu("OnDisconnect.remove",this._path);const e=new Yr;return gI(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){fu("OnDisconnect.set",this._path),ng("OnDisconnect.set",e,this._path);const t=new Yr;return gI(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){fu("OnDisconnect.setWithPriority",this._path),ng("OnDisconnect.setWithPriority",e,this._path),L2("OnDisconnect.setWithPriority",t);const r=new Yr;return J2(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){fu("OnDisconnect.update",this._path),pC("OnDisconnect.update",e,this._path);const t=new Yr;return Z2(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class F_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ue(this._path)?null:h_(this._path)}get ref(){return new ji(this._repo,this._path)}get _queryIdentifier(){const e=nI(this._queryParams),t=a_(e);return t==="{}"?"default":t}get _queryObject(){return nI(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof F_))return!1;const t=this._repo===e._repo,r=d_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+YD(this._path)}}class ji extends F_{constructor(e,t){super(e,t,new g_,!1)}get parent(){const e=OS(this._path);return e===null?null:new ji(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $u{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new it(e),r=rg(this.ref,e);return new $u(this._node.getChild(t),r,It)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new $u(s,rg(this.ref,r),It)))}hasChild(e){const t=new it(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cu(n,e){return n=rt(n),n._checkNotDeleted("ref"),e!==void 0?rg(n._root,e):n._root}function rg(n,e){return n=rt(n),Fe(n._path)===null?V2("child","path",e):mC("child","path",e),new ji(n._repo,wt(n._path,e))}function vI(n){return n=rt(n),new uM(n._repo,n._path)}function EI(n,e){n=rt(n),fu("set",n._path),ng("set",e,n._path);const t=new Yr;return K2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function cM(n,e){pC("update",e,n._path);const t=new Yr;return Q2(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function hM(n){n=rt(n);const e=new IC(()=>{}),t=new _f(e);return G2(n._repo,n,t).then(r=>new $u(r,new ji(n._repo,n._path),n._queryParams.getIndex()))}class _f{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new aM("value",this,new $u(e.snapshotNode,new ji(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new lM(this,e,t):null}matches(e){return e instanceof _f?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dM(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,w)=>{_I(n._repo,n,h),f(y,w)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new IC(t,a||void 0),h=new _f(u);return eM(n._repo,n,h),()=>_I(n._repo,n,h)}function Nd(n,e,t,r){return dM(n,"value",e,t,r)}l2(ji);f2(ji);/**
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
 */const fM="FIREBASE_DATABASE_EMULATOR_HOST",ig={};let pM=!1;function mM(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Bs(a);n.repoInfo_=new CS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function gM(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Li("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=yI(a,s),h=u.repoInfo,f;typeof process<"u"&&Fw&&(f=Fw[fM]),f?(a=`http://${f}?ns=${h.namespace}`,u=yI(a,s),h=u.repoInfo):u.repoInfo.secure;const m=new SD(n.name,n.options,e);F2("Invalid Firebase Database URL",u),Ue(u.path)||Li("Database URL must point to the root of a Firebase Database (not including a child path).");const y=yM(h,n,m,new TD(n,t));return new vM(y,n)}function _M(n,e){const t=ig[e];(!t||t[n.key]!==n)&&Li(`Database ${e}(${n.repoInfo_}) has already been deleted.`),tM(n),delete t[n.key]}function yM(n,e,t,r){let s=ig[e.name];s||(s={},ig[e.name]=s);let a=s[n.toURLString()];return a&&Li("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new W2(n,pM,t,r),s[n.toURLString()]=a,a}class vM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ji(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_M(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Li("Cannot call "+e+" on a deleted database.")}}function EM(n=gg(),e){const t=Od(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=LI("database");r&&wM(t,...r)}return t}function wM(n,e,t,r={}){n=rt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ni(r,a.repoInfo_.emulatorOptions))return;Li("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Li('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new qh(qh.OWNER);else if(r.mockUserToken){const h=typeof r.mockUserToken=="string"?r.mockUserToken:jI(r.mockUserToken,n.app.options.projectId);u=new qh(h)}Bs(e)&&(dg(e),fg("Database",!0)),mM(a,s,r,u)}/**
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
 */function IM(n){aD(Mo),Ao(new ks("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return gM(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Xr(jw,Uw,n),Xr(jw,Uw,"esm2017")}/**
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
 */const TM={".sv":"timestamp"};function pm(){return TM}ki.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ki.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};IM();const j_={apiKey:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",authDomain:"discordia-573e7.firebaseapp.com",projectId:"discordia-573e7",appId:"1:757817424564:web:39457c92d2c75e1374f5e1",databaseURL:"https://discordia-573e7-default-rtdb.firebaseio.com",messagingSenderId:"757817424564",measurementId:void 0},TC=["apiKey","authDomain","projectId","appId"].every(n=>!!j_[n]),il=TC?$I(j_):null,Nt=il?Kk(il):null,wI=il?qb(il):null,vs=il&&j_.databaseURL?EM(il):null,SM=Object.freeze([{id:"gothic3d",name:"Gótico 3D",color:"#ffae22"},{id:"gold",name:"Dourado Premium",color:"#f5d375"},{id:"bubble",name:"Bubble Magic",color:"#c69af8"},{id:"neon",name:"Neon Cyber",color:"#53deff"},{id:"tech",name:"Futurista Tech",color:"#52e6d6"},{id:"glitch",name:"Glitch Digital",color:"#fd73df"},{id:"ice",name:"Cristal de Gelo",color:"#a8e8ff"},{id:"fire",name:"Fogo Infernal",color:"#ff7744"},{id:"galaxy",name:"Galáxia Cósmica",color:"#bd88ff"},{id:"pixel",name:"Retrô Pixel",color:"#80e783"},{id:"chrome",name:"Chrome Prateado",color:"#e3eaf9"},{id:"royal",name:"Elegante Royal",color:"#f3db98"}]);new Map(SM.map(n=>[n.id,n]));const za=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(n),SC=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,128}$/.test(n);function CM(n=[],e=""){return[...new Set(n.filter(t=>(t==null?void 0:t.toUid)===e&&(t==null?void 0:t.status)==="accepted"&&za(t==null?void 0:t.serverId)).map(t=>t.serverId))].slice(0,100)}function sg(n,e){return!!n&&Array.isArray(n.memberUids)&&n.memberUids.includes(e)&&Array.isArray(n.bannedUids??[])&&!(n.bannedUids??[]).includes(e)}function CC(n,e=typeof localStorage>"u"?null:localStorage){if(!SC(n)||!e)return[];try{const t=JSON.parse(e.getItem("discordia_known_server_ids_rc103_"+n)||"[]");return Array.isArray(t)?[...new Set(t.filter(za))].slice(0,100):[]}catch{return[]}}function og(n,e,t=typeof localStorage>"u"?null:localStorage){if(!SC(n)||!za(e)||!t)return!1;const r=CC(n,t);if(r.includes(e))return!1;try{return t.setItem("discordia_known_server_ids_rc103_"+n,JSON.stringify([...r,e].slice(-100))),typeof window<"u"&&t===window.localStorage&&window.dispatchEvent(new CustomEvent("discordia:server-discovery-updated",{detail:{uid:n,id:e}})),!0}catch{return!1}}async function AM({invite:n,uid:e,loadInvite:t,requestMembership:r,readJoinedServer:s}={}){if(!n||n.toUid!==e||n.status!=="accepted"||!n.serverId||n.id!==n.serverId+"_"+e)throw new Error("Convite inválido. Solicite um novo convite ao responsável.");const a=await t();if(!a||a.status!=="accepted"||a.toUid!==e||a.serverId!==n.serverId)throw new Error("Este convite não está mais válido. Peça um novo ao responsável.");let u=null;try{await r()}catch(m){u=m}let h=null,f=null;try{h=await s()}catch(m){f=m}if((h==null?void 0:h.id)===n.serverId&&Array.isArray(h.memberUids)&&h.memberUids.includes(e)&&!(h.bannedUids||[]).includes(e)&&!Object.hasOwn(h,"deletingAt")&&!Object.hasOwn(h,"deletionOwnerUid"))return h;throw u||f||new Error("A entrada ainda não foi confirmada pelo servidor. Tente novamente.")}const RM=n=>`DISC-${n}`,PM=n=>String(n||"").trim().replace(/^@/,"").toLowerCase(),II=n=>/^[a-z][a-z0-9_]{2,15}$/.test(n),kM=n=>String(n||"").trim().replace(/^DISC-/i,""),Wt=()=>{if(!wI)throw new Error("Configure o Firebase antes de continuar.");return wI},U_=(n,e)=>[n,e].sort().join("_"),ag=(n,e)=>`${n}_${e}`;async function NM(n,e){const t=Wt(),r=an(t,"publicProfiles",n.uid),s=await Dr(r),a={uid:n.uid,peerId:RM(n.uid),displayName:String(e).trim().slice(0,50)||"Amigo"};s.exists()?s.data().displayName!==a.displayName&&await Ja(r,{displayName:a.displayName}):await sf(r,{...a,presence:"offline",lastSeenAt:Kn(),createdAt:Kn()})}async function xM(n,e){const t=PM(n);let r=kM(n);if(II(t)){const a=await Dr(an(Wt(),"handles",t));if(!a.exists())throw new Error("Nenhuma conta encontrada com esse @identificador.");r=a.data().uid}else if(!/^[A-Za-z0-9]{20,128}$/.test(r))throw new Error("Informe @identificador ou o ID DISC-... completo.");if(r===e)throw new Error("Você não pode se adicionar.");const s=await Dr(an(Wt(),"publicProfiles",r));if(!s.exists()||II(t)&&s.data().handle!==t)throw new Error("Nenhuma conta encontrada com esse ID.");return s.data()}async function bM(n,e){const t=await xM(e,n);if((await Dr(an(Wt(),"users",n,"blocks",t.uid))).exists())throw new Error("Desbloqueie essa pessoa antes de enviar uma solicitação.");const r=an(Wt(),"friendRequests",ag(n,t.uid)),s=await Dr(an(Wt(),"friendRequests",ag(t.uid,n)));if(s.exists())throw new Error(s.data().status==="pending"?"Você já recebeu uma solicitação dessa pessoa. Aceite-a na lista.":"Já existe uma relação com esta pessoa.");if((await Dr(r)).exists())throw new Error("Essa solicitação já foi enviada.");return await sf(r,{fromUid:n,toUid:t.uid,status:"pending",createdAt:Kn(),updatedAt:Kn()}),t}async function DM(n,e,t){if(n.toUid!==e||n.status!=="pending")throw new Error("Solicitação inválida.");await Ja(an(Wt(),"friendRequests",ag(n.fromUid,n.toUid)),{status:t?"accepted":"rejected",updatedAt:Kn()})}function OM(n,e,t,r=()=>{}){const s=new Map,a=new Map,u=()=>e([...s.values(),...a.values()]),h=(y,w,I)=>{y.clear(),w.docs.forEach(P=>y.set(P.id,{id:P.id,...P.data()})),r(I),u()},f=Pi(No(Vr(Wt(),"friendRequests"),gd("toUid","==",n),xo(100)),y=>h(s,y,"incoming"),y=>t(y,"incoming")),m=Pi(No(Vr(Wt(),"friendRequests"),gd("fromUid","==",n),xo(100)),y=>h(a,y,"outgoing"),y=>t(y,"outgoing"));return()=>{f(),m()}}function MM(n,e,t){return Pi(an(Wt(),"publicProfiles",n),r=>e(r.exists()?r.data({serverTimestamps:"estimate"}):null),t)}async function LM(n,e){const t=[n,e].sort(),r=an(Wt(),"dmRooms",U_(n,e));return(await Dr(r)).exists()||await sf(r,{members:t,createdAt:Kn()}),r.id}const AC=n=>{var r,s;const e=n.data(),t=(s=(r=e.createdAt)==null?void 0:r.toDate)==null?void 0:s.call(r);return{id:n.id,...e,sender:e.senderName||"Amigo",avatar:"💬",time:(t==null?void 0:t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}))||"Agora",dateLabel:(t==null?void 0:t.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}))||"Hoje"}},RC=["💜","🔥","😂","👍","😮","🎮","✨","❤️"],PC=(n,e)=>{var s;const t=[...new Set([...String(n).matchAll(/:([a-z0-9_]{1,22}):/g)].map(a=>a[1]))].slice(0,4),r={};for(const a of t){const u=((s=e==null?void 0:e.find(h=>h.name===a))==null?void 0:s.image)||"";/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(u)&&u.length<3e4&&(r[a]=u)}return r};function B_(n,e,t,r,s){const a=Wt();return n==="dm"?Vr(a,"dmRooms",U_(e,t),"messages"):Vr(a,"servers",r,"channels",s,"messages")}async function VM(n,e,t,r,s,a,u){const h=String(u||"").trim().slice(0,2e3);if(!h)throw new Error("A mensagem não pode ficar vazia.");await Ja(an(B_(e,n,t,r,s),a),{text:h,editedAt:Kn()})}async function FM(n,e,t,r,s,a,u){var m;if(!RC.includes(u))throw new Error("Reação inválida.");const h=an(B_(e,n,t,r,s),a.id),f=((m=a.reactions)==null?void 0:m[n])===u;await Ja(h,{[`reactions.${n}`]:f?sD():u})}async function jM(n,e,t,r,s,a){await rD(an(B_(e,n,t,r,s),a))}function UM(n,e,t,r){const s=U_(n,e);return Pi(No(Vr(Wt(),"dmRooms",s,"messages"),oS("createdAt","desc"),xo(100)),a=>t(a.docs.map(AC).reverse()),r)}async function BM(n,e,t,r,s=[]){const a=await LM(n,e);await uS(Vr(Wt(),"dmRooms",a,"messages"),{senderUid:n,senderName:String(t).slice(0,50),text:String(r).trim().slice(0,2e3),customEmojiData:PC(r,s),reactions:{},createdAt:Kn()})}function zM(n,e,t){const r=Wt(),s=new Set,a=new Set,u=new Set(CC(n)),h=new Map,f=new Map,m=[],y=new Set,w=async K=>{if(y.has(K))return;y.add(K);const H=an(r,"serverOwnerIndex",n,"servers",K);try{(await Dr(H)).exists()||await sf(H,{ownerUid:n,serverId:K})}catch(ee){!I&&(ee==null?void 0:ee.code)!=="permission-denied"&&(ee==null?void 0:ee.code)!=="not-found"&&(t==null||t(ee))}};let I=!1;const P=()=>{I||e([...h.values()].sort((K,H)=>String(K.name||"").localeCompare(String(H.name||""),"pt-BR")))},O=()=>{if(I)return;const K=new Set([...s,...a,...u].filter(za));for(const[H,ee]of f)K.has(H)||(ee(),f.delete(H),h.delete(H));for(const H of K){if(f.has(H))continue;const ee=Pi(an(r,"servers",H),se=>{if(I)return;const Oe=se.exists()?se.data():null;sg(Oe,n)?(h.set(H,{id:H,...Oe}),og(n,H),Oe.ownerUid===n&&!Object.prototype.hasOwnProperty.call(Oe,"deletingAt")&&w(H)):h.delete(H),P()},se=>{h.delete(H),P(),(se==null?void 0:se.code)!=="permission-denied"&&(se==null?void 0:se.code)!=="not-found"&&(t==null||t(se))});f.set(H,ee)}P()},F=No(Vr(r,"serverOwnerIndex",n,"servers"),xo(100));m.push(Pi(F,K=>{s.clear(),K.docs.forEach(H=>{var ee,se;za(H.id)&&((ee=H.data())==null?void 0:ee.serverId)===H.id&&((se=H.data())==null?void 0:se.ownerUid)===n&&s.add(H.id)}),O()},K=>{(K==null?void 0:K.code)!=="permission-denied"&&(t==null||t(K)),O()})),m.push(Pi(No(Vr(r,"serverInvites"),gd("toUid","==",n),xo(100)),K=>{a.clear(),CM(K.docs.map(H=>H.data()),n).forEach(H=>a.add(H)),O()},K=>{(K==null?void 0:K.code)!=="permission-denied"&&(t==null||t(K)),O()}));const B=K=>{var H;((H=K==null?void 0:K.detail)==null?void 0:H.uid)!==n||!za(K.detail.id)||(u.add(K.detail.id),O())};return typeof window<"u"&&window.addEventListener("discordia:server-discovery-updated",B),O(),()=>{I=!0,typeof window<"u"&&window.removeEventListener("discordia:server-discovery-updated",B),m.forEach(K=>K()),f.forEach(K=>K()),f.clear(),h.clear()}}function WM(n,e,t,r){return Pi(No(Vr(Wt(),"servers",n,"channels",e,"messages"),oS("createdAt","desc"),xo(100)),s=>t(s.docs.map(AC).reverse()),r)}async function $M(n,e,t,r,s,a=[]){await uS(Vr(Wt(),"servers",e,"channels",t,"messages"),{senderUid:n,senderName:String(r).slice(0,50),text:String(s).trim().slice(0,2e3),customEmojiData:PC(s,a),reactions:{},createdAt:Kn()})}function qM(n,e,t){return Pi(No(Vr(Wt(),"serverInvites"),gd("toUid","==",n),xo(100)),r=>e(r.docs.map(s=>({id:s.id,...s.data()}))),t)}async function HM(n,e,t){if(n.toUid!==e||!["pending","accepted"].includes(n.status))throw new Error("Convite inválido.");const r=Wt(),s=an(r,"serverInvites",n.id),a=an(r,"servers",n.serverId);if(!t){if(n.status!=="pending")throw new Error("Este convite já foi aceito.");await Ja(s,{status:"rejected",updatedAt:Kn()});return}if(n.status==="accepted")try{const h=await AM({invite:n,uid:e,loadInvite:async()=>{const f=await Dr(s);return f.exists()?f.data():null},requestMembership:()=>Ja(a,{memberUids:Vw(e),[`memberJoinedAt.${e}`]:Kn()}),readJoinedServer:async()=>{const f=await Dr(a),m=f.exists()?f.data():null;return sg(m,e)?{id:f.id,...m}:null}});return og(e,n.serverId),h}catch(h){throw(h==null?void 0:h.code)==="permission-denied"?new Error("A entrada foi negada pelo servidor. O convite pode estar revogado, você pode estar banido ou a comunidade pode estar bloqueada. Peça ao responsável um novo convite."):new Error((h==null?void 0:h.message)||"Não foi possível concluir a entrada. Tente novamente.")}if(n.inviteVersion!==2)throw new Error("Convite antigo sem comprovação de segurança. Peça ao responsável um novo convite.");const u=oD(r);u.update(s,{status:"accepted",updatedAt:Kn()}),u.update(a,{memberUids:Vw(e),[`memberJoinedAt.${e}`]:Kn()});try{await u.commit();const h=await Dr(a),f=h.exists()?h.data():null;if(!sg(f,e))throw new Error("Convite aceito, mas a participação ainda não foi confirmada. Use Concluir entrada para recuperar.");return og(e,n.serverId),{id:h.id,...f}}catch(h){const f=(h==null?void 0:h.code)==="permission-denied"?"A entrada não foi autorizada. O convite pode estar inválido ou sua conta pode não ter permissão; solicite ajuda ao responsável pelo servidor.":(h==null?void 0:h.message)||"Não foi possível confirmar sua entrada no servidor. Tente novamente.";throw new Error(f)}}const GM="/assets/discordia-orbit-DRQ15dZr.png",TI={screen:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"3",y:"4",width:"18",height:"13",rx:"2"}),v.jsx("path",{d:"M8 21h8m-4-4v4"})]}),fullscreen:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m13-5v4a1 1 0 0 1-1 1h-4"})}),shrink:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M8 3v5H3m5 0L3 3m13 0v5h5m-5 0 5-5M8 21v-5H3m5 0-5 5m13 0v-5h5m-5 0 5 5"})}),link:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"}),v.jsx("path",{d:"M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"})]}),copy:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"8",y:"8",width:"13",height:"13",rx:"2"}),v.jsx("path",{d:"M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"})]}),users:v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:"9",cy:"8",r:"4"}),v.jsx("path",{d:"M2 21v-2a6 6 0 0 1 12 0v2m2-17a4 4 0 0 1 0 8m2 2a6 6 0 0 1 4 6v1"})]}),user:v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:"12",cy:"8",r:"4"}),v.jsx("path",{d:"M4 21v-2a8 8 0 0 1 16 0v2"})]}),video:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}),v.jsx("path",{d:"m16 10 6-4v12l-6-4"})]}),chat:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M20 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.6-.3-3.6-.8L3 21l1.8-4.7A8.5 8.5 0 1 1 20 11.5Z"})}),mail:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),v.jsx("path",{d:"m3 7 9 6 9-6"})]}),lock:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),v.jsx("path",{d:"M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"})]}),eye:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M2 12s3.7-6.5 10-6.5 10 6.5 10 6.5-3.7 6.5-10 6.5S2 12 2 12Z"}),v.jsx("circle",{cx:"12",cy:"12",r:"2.6"})]}),"eye-off":v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M3 3l18 18M10.6 5.6q.7-.1 1.4-.1c6.3 0 10 6.5 10 6.5a16 16 0 0 1-3.6 4.2M6.5 6.6C3.6 8.3 2 12 2 12s3.7 6.5 10 6.5c1.1 0 2.2-.2 3.2-.6"}),v.jsx("path",{d:"M10 10a2.8 2.8 0 0 0 4 4"})]}),headphones:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M3 13v-2a9 9 0 0 1 18 0v2"}),v.jsx("rect",{x:"2",y:"12",width:"4",height:"8",rx:"2"}),v.jsx("rect",{x:"18",y:"12",width:"4",height:"8",rx:"2"})]}),mic:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),v.jsx("path",{d:"M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"})]}),"mic-off":v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),v.jsx("path",{d:"M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8M3 3l18 18"})]}),"arrow-up-right":v.jsx(v.Fragment,{children:v.jsx("path",{d:"M7 17 17 7M8 7h9v9"})}),"volume-2":v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5Z"}),v.jsx("path",{d:"M15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"})]}),"volume-x":v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5Z"}),v.jsx("path",{d:"m17 9 5 6m0-6-5 6"})]}),network:v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:"4",cy:"12",r:"2"}),v.jsx("circle",{cx:"20",cy:"5",r:"2"}),v.jsx("circle",{cx:"20",cy:"19",r:"2"}),v.jsx("path",{d:"M6 11 18 6M6 13l12 5"})]}),send:v.jsx(v.Fragment,{children:v.jsx("path",{d:"m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"})}),exit:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 4 5 5-5 5m5-5H9"})}),plus:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M12 5v14M5 12h14"}),v.jsx("circle",{cx:"12",cy:"12",r:"10"})]}),arrow:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M5 12h14m-7-7 7 7-7 7"})}),stop:v.jsx(v.Fragment,{children:v.jsx("rect",{x:"5",y:"5",width:"14",height:"14",rx:"3"})}),shield:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M12 22s9-4 9-11V5l-9-3-9 3v6c0 7 9 11 9 11Z"}),v.jsx("path",{d:"m9 12 2 2 4-4"})]})};function Ze({name:n="screen",size:e=19,className:t="",title:r}){return v.jsxs("svg",{className:"room-icon "+t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[TI[n]||TI.screen,r&&v.jsx("title",{children:r})]})}const KM=Object.freeze(["microphone","camera","screen"]);function kC({secureContext:n=!1,mediaDevices:e}={}){const t=e||{};return{microphone:n===!0&&typeof t.getUserMedia=="function",camera:n===!0&&typeof t.getUserMedia=="function",screen:n===!0&&typeof t.getDisplayMedia=="function"}}function QM(n){const e=String((n==null?void 0:n.name)||(n==null?void 0:n.code)||"");return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"Permissão negada ou seleção cancelada pelo navegador.":e==="NotFoundError"||e==="DevicesNotFoundError"?"Nenhuma fonte compatível encontrada neste dispositivo.":e==="NotReadableError"||e==="TrackStartError"?"A fonte de mídia está ocupada ou indisponível.":e==="OverconstrainedError"?"Os recursos solicitados não são compatíveis com este dispositivo.":"Não foi possível iniciar a captura. Verifique as permissões do navegador."}function mm(n){var e;for(const t of((e=n==null?void 0:n.getTracks)==null?void 0:e.call(n))||[])try{t.stop()}catch{}}function YM({mediaDevices:n,secureContext:e,onChange:t=()=>{}}={}){const r=n;let s=null,a=0,u=!1;const h=I=>{u||t(I)};function f(){var P,O,F;if(!s)return;const I=s;s=null;for(const B of((O=(P=I.stream).getTracks)==null?void 0:O.call(P))||[])try{(F=B.removeEventListener)==null||F.call(B,"ended",I.onEnded)}catch{}mm(I.stream)}function m(){u||(a+=1,f(),h({status:"idle",kind:null}))}async function y(I){var H,ee;if(u)return null;if(!KM.includes(I))throw new TypeError("Tipo de captura inválido.");const P=++a;if(f(),!kC({secureContext:e,mediaDevices:r})[I])return h({status:"unsupported",kind:I,message:"Captura indisponível. Use HTTPS ou localhost e um navegador compatível."}),null;h({status:"requesting",kind:I});let F;try{I==="screen"?F=await r.getDisplayMedia({video:{frameRate:{ideal:30,max:30}},audio:!1}):I==="camera"?F=await r.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:24,max:30}},audio:!1}):F=await r.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(se){return P===a&&!u&&h({status:"error",kind:I,message:QM(se)}),null}if(u||P!==a)return mm(F),null;const B=((H=F==null?void 0:F.getTracks)==null?void 0:H.call(F))||[];if(!B.length)return mm(F),h({status:"error",kind:I,message:"Nenhuma faixa de mídia foi disponibilizada."}),null;const K=()=>{(s==null?void 0:s.stream)===F&&m()};s={stream:F,kind:I,onEnded:K};for(const se of B)(ee=se.addEventListener)==null||ee.call(se,"ended",K);return h({status:"active",kind:I,hasAudio:B.some(se=>se.kind==="audio"),hasVideo:B.some(se=>se.kind==="video")}),F}function w(){u=!0,a+=1,f()}return{start:y,stop:m,dispose:w,getStream:()=>(s==null?void 0:s.stream)||null}}const SI={microphone:{icon:"🎙",name:"Microfone",description:"Verifica a permissão de acesso ao microfone."},camera:{icon:"📷",name:"Câmera",description:"Mostra uma prévia local da câmera."},screen:{icon:"▣",name:"Tela",description:"Abre o seletor de tela ou janela do navegador."}};function XM(){var m;const[n,e]=Ee.useState({status:"idle",kind:null}),t=Ee.useRef(null),r=Ee.useRef(null),s=Ee.useMemo(()=>kC({secureContext:typeof window<"u"&&window.isSecureContext===!0,mediaDevices:typeof navigator<"u"?navigator.mediaDevices:void 0}),[]);Ee.useEffect(()=>{const y=YM({mediaDevices:navigator.mediaDevices,secureContext:window.isSecureContext,onChange:e});return r.current=y,()=>{y.dispose(),r.current=null}},[]),Ee.useEffect(()=>{var I;const y=t.current;if(!y)return;const w=n.status==="active"?(I=r.current)==null?void 0:I.getStream():null;if(y.srcObject=w||null,w){const P=y.play();P&&typeof P.catch=="function"&&P.catch(()=>{})}return()=>{y.pause(),y.srcObject=null}},[n.status,n.kind]);function a(y){var w;(w=r.current)==null||w.start(y)}function u(){var y;(y=r.current)==null||y.stop()}const h=n.kind?(m=SI[n.kind])==null?void 0:m.name:"",f=n.status==="active"||n.status==="requesting";return v.jsxs("section",{className:"media-lab","aria-labelledby":"media-lab-title",children:[v.jsxs("div",{className:"lab-heading",children:[v.jsx("div",{className:"lab-orbit","aria-hidden":"true",children:"◉"}),v.jsxs("div",{children:[v.jsx("span",{className:"lab-eyebrow",children:"LABORATÓRIO DE MÍDIA · PRÉVIA PRIVADA"}),v.jsx("h2",{id:"media-lab-title",children:"Teste seus dispositivos"}),v.jsx("p",{children:"Confira a câmera, o microfone e a captura de tela antes da integração com chamadas reais."})]})]}),v.jsxs("div",{className:"lab-privacy",role:"note",children:[v.jsx("strong",{children:"Teste somente local"}),v.jsx("p",{children:"Os dispositivos só são ativados quando você clicar. Este painel não transmite para outras pessoas, não grava vídeo ou áudio e não envia mídia ao Discórdia."})]}),v.jsx("div",{className:"lab-options",children:Object.entries(SI).map(([y,w])=>v.jsxs("button",{type:"button",className:n.kind===y&&f?"lab-option selected":"lab-option",onClick:()=>a(y),disabled:!s[y],"aria-pressed":n.kind===y&&f,children:[v.jsx("span",{className:"lab-option-icon","aria-hidden":"true",children:w.icon}),v.jsx("strong",{children:w.name}),v.jsx("span",{children:w.description}),v.jsx("small",{children:s[y]?n.kind===y&&n.status==="active"?"Capturando localmente":"Clique para testar":"Não disponível neste navegador"})]},y))}),v.jsxs("div",{className:"lab-viewer",children:[v.jsxs("div",{className:"lab-viewer-head",children:[v.jsx("strong",{children:"Prévia dos dispositivos"}),v.jsx("span",{className:n.status==="active"?"lab-live":"lab-off",children:n.status==="active"?"● Captura local ativa":"● Nenhuma transmissão ativa"})]}),v.jsx("div",{className:"lab-stage","aria-live":"polite",children:n.status==="active"&&n.hasVideo?v.jsx("video",{ref:t,autoPlay:!0,playsInline:!0,muted:!0,"aria-label":"Prévia local de "+h}):v.jsxs("div",{className:"lab-placeholder",children:[v.jsx("span",{"aria-hidden":"true",children:n.status==="active"?"🎙":"▤"}),v.jsx("strong",{children:n.status==="requesting"?"Aguardando sua permissão…":n.status==="active"&&n.kind==="microphone"?"Microfone disponível":"Nenhuma prévia em execução"}),v.jsx("p",{children:n.status==="active"&&n.kind==="microphone"?"O microfone foi autorizado. A reprodução é mantida desligada para evitar microfonia.":"Selecione um dispositivo acima para testar localmente."})]})}),(n.status==="error"||n.status==="unsupported")&&v.jsx("p",{role:"alert",className:"lab-error",children:n.message}),v.jsxs("div",{className:"lab-controls",children:[v.jsx("button",{type:"button",onClick:u,disabled:!f,children:"Parar captura"}),v.jsx("small",{children:f?"Ao trocar de teste ou sair desta tela, todas as faixas são encerradas.":"Use HTTPS ou localhost e libere a permissão apenas se desejar."})]})]}),v.jsx("p",{className:"lab-disclaimer",children:"Este laboratório testa apenas dispositivos locais. Salas temporárias têm transmissão de tela P2P e opção experimental de áudio da aba/sistema. Chat de voz nativo dos servidores, TURN e recepção privada SFU ainda não foram homologados na Web."})]})}const JM=2e4,ZM=15e4,Hh=3e4;function lg(n,e=Date.now()){if(!n||typeof n!="object"||Array.isArray(n))return!1;const t=Number(n.heartbeatAt??n.connectedAt);return Number.isFinite(t)&&t>0&&t<=e+Hh&&e-t<=ZM}function z_(n,e=Date.now()){return!n||typeof n!="object"||Array.isArray(n)?[]:Object.values(n).filter(t=>lg(t,e))}function eL(n,e=Date.now()){return!n||typeof n!="object"||Array.isArray(n)?[]:Object.entries(n).filter(([,t])=>z_(t,e).length>0).map(([t])=>t)}const tL=45e3,nL=9e3,rL=3e4;function iL(n=0){const e=Math.max(0,Math.min(6,Math.floor(Number(n)||0)));return Math.min(tL,4e3*2**e)}function sL({lastRepairAt:n=0,now:e=Date.now()}={}){const t=Number(n)||0,r=Number(e)||0;return Math.max(nL,t?rL-Math.max(0,r-t):0)}function oL(){let n=0,e=!1;return{ingest:a=>{const u=Number(a);return Number.isFinite(u)&&Math.abs(u)<=1440*60*1e3?(n=u,e=!0,!0):!1},now:(a=Date.now())=>a+n,status:()=>({ready:e,offsetMs:n})}}const aL=6e3;function lL({emit:n=()=>{},graceMs:e=aL,schedule:t=(s,a)=>setTimeout(s,a),cancel:r=s=>clearTimeout(s)}={}){let s={},a={},u=!1;const h=new Map,f=P=>Object.fromEntries(Object.entries(P||{}).map(([O,F])=>[O,{...F||{}}])),m=(P,O)=>Object.values(P).some(F=>Object.prototype.hasOwnProperty.call(F||{},O)),y=P=>{h.has(P)&&(r(h.get(P)),h.delete(P))};return{push:P=>{if(u)return;a=f(P);const O=f(P);for(const[F,B]of Object.entries(s))for(const[K,H]of Object.entries(B||{})){const ee=`${F}:\0${K}`;if(Object.prototype.hasOwnProperty.call(O[F]||{},K)||m(a,K)){y(ee);continue}if(!h.has(ee)){const se=t(()=>{if(h.delete(ee),u||Object.prototype.hasOwnProperty.call(a[F]||{},K)||m(a,K))return;const Oe=f(s);Oe[F]&&delete Oe[F][K],s=Oe,n(s)},e);h.set(ee,se)}(O[F]??(O[F]={}))[K]=H}s=O,n(s)},close:()=>{u=!0;for(const P of[...h.keys()])y(P)}}}function uL(n,e=Date.now()){if(!Number.isFinite(e)||!n||typeof n!="object"||Array.isArray(n))return null;let t=null;for(const r of Object.values(n))for(const s of z_(r,e)){const a=Number(s.connectedAt);if(!Number.isFinite(a)||a<=0||a>e+Hh)continue;const u=Number(s.callStartedAt),f=Number.isFinite(u)&&u>0&&u<=a+Hh&&u<=e+Hh?Math.min(u,a):a;(t===null||f<t)&&(t=f)}return t}const NC=oL(),Gh=()=>NC.now();function xC(n=()=>{}){return vs?Nd(Cu(vs,".info/serverTimeOffset"),e=>{NC.ingest(e.val())&&n()},()=>{}):()=>{}}const ba=n=>String(n||"").replace(/[^a-zA-Z0-9_-]/g,"_").slice(0,100);function cL(n,e,t=()=>{}){if(!vs||!n)return()=>{};const r=lL({emit:e});let s={},a=!1;const u=xC(()=>{a&&r.push(s)});let h=!1,f=()=>{},m=null,y=0;const w=()=>{h||(f=Nd(Cu(vs,`discordiaVoice/${ba(n)}`),I=>{h||(m&&(clearTimeout(m),m=null),y=0,s=I.val()||{},a=!0,r.push(s))},I=>{if(h||(t(I),m))return;const P=iL(y++);m=setTimeout(()=>{m=null,!h&&(f(),w())},P)}))};return w(),()=>{h=!0,m&&clearTimeout(m),f(),u(),r.close()}}function xL(n,e,t,r,s=()=>{}){if(!vs||!n||!e||!t)return{update:async()=>{},close:()=>{}};const a=`voice_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`,u=Cu(vs,`discordiaVoice/${ba(e)}/${ba(t)}`),h=Cu(vs,`discordiaVoice/${ba(e)}/${ba(t)}/${ba(n)}/${a}`);let f=!0,m=!1,y=!1,w=!1,I=!1,P=!1,O=null,F=Promise.resolve(),B=null,K={},H=null,ee=0;const se=()=>{var be;if(!f||!m||!w)return;const Me=(be=K==null?void 0:K[n])==null?void 0:be[a];if(lg(Me,Gh())){H&&(clearTimeout(H),H=null);return}H||(H=setTimeout(()=>{var De;H=null,!(!f||!m||!w)&&(lg((De=K==null?void 0:K[n])==null?void 0:De[a],Gh())||(ee=Date.now(),w=!1,A()))},sL({lastRepairAt:ee,now:Date.now()})))},Oe=Me=>{K=Me||{},se();const be=uL(K,Gh());be!==null&&(B===null||be<B)&&(B=be,f&&w&&m&&A())},Pe=(Me,be,De="")=>{f&&s(Me,be,De)},D=()=>{!f||!m||O||(O=setTimeout(()=>{O=null,A()},5e3))},A=()=>!f||!m?Promise.resolve():I?(P=!0,F):(I=!0,F=(async()=>{var Me;try{if(((Me=Nt==null?void 0:Nt.currentUser)==null?void 0:Me.uid)!==n){Pe("waiting","Aguardando autenticação da sala.","auth/waiting"),D();return}if(await Nt.currentUser.getIdToken(),y||(await vI(h).remove(),y=!0),!f)return;if(!w)try{Oe((await hM(u)).val())}catch{}if(!f)return;const be={...r(),heartbeatAt:pm(),...B!==null?{callStartedAt:B}:{}};w?await cM(h,be):(await EI(h,{...be,connectedAt:pm(),...B===null?{callStartedAt:pm()}:{}}),w=!0),Pe("ok","Participação publicada na sala de voz.")}catch(be){console.error("[Discórdia RTDB][sala]",(be==null?void 0:be.code)||"unknown",be),Pe("error",(be==null?void 0:be.message)||"Falha ao registrar sala.",(be==null?void 0:be.code)||"unknown"),D()}})().finally(()=>{I=!1,P&&f&&m&&(P=!1,queueMicrotask(()=>{A()}))}),F),C=Nd(u,Me=>Oe(Me.val()),()=>{}),x=xC(()=>Oe(K)),L=Nd(Cu(vs,".info/connected"),Me=>{if(m=Me.val()===!0,!!f){if(!m){y=!1,w=!1,B=null,H&&(clearTimeout(H),H=null),Pe("offline","Sem conexão para atualizar a sala de voz.");return}A()}},Me=>Pe("error",(Me==null?void 0:Me.message)||"Falha na conexão da sala.",(Me==null?void 0:Me.code)||"unknown")),b=setInterval(()=>{f&&m&&A()},JM);return{update:()=>f&&m?A():Promise.resolve(),close:()=>{f=!1,L(),C(),x(),clearInterval(b),O&&clearTimeout(O),H&&clearTimeout(H),F.catch(()=>{}).then(()=>EI(h,null)).then(()=>vI(h).cancel()).catch(()=>{})}}}const CI=/^[A-Za-z0-9_-]{1,100}$/;function hL(n,e,t=Date.now()){if(!Array.isArray(e==null?void 0:e.memberUids)||!Array.isArray((e==null?void 0:e.bannedUids)??[]))return[];const r=new Set(e.memberUids.filter(a=>CI.test(a))),s=new Set(e.bannedUids??[]);return eL(n,t).filter(a=>CI.test(a)&&r.has(a)&&!s.has(a)).slice(0,30).map(a=>{const h=z_(n==null?void 0:n[a],t).slice().sort((y,w)=>Number(w.heartbeatAt||0)-Number(y.heartbeatAt||0)),f=h.find(y=>typeof y.name=="string")||h[0]||{},m=String(f.name||"Participante").replace(/<[^>]*>/g,"").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,50)||"Participante";return Object.freeze({uid:a,name:m,muted:h.length>0&&h.every(y=>y.muted===!0),streaming:h.some(y=>y.streaming===!0)})})}function dL({server:n,activeChannelId:e="",onSelect:t}){const[r,s]=Ee.useState(null),[a,u]=Ee.useState("loading"),h=Array.isArray(n==null?void 0:n.memberUids)?n.memberUids.join("|"):"",f=Array.isArray(n==null?void 0:n.bannedUids)?n.bannedUids.join("|"):"";Ee.useEffect(()=>{if(!(n!=null&&n.id)){s(null),u("empty");return}let w=!0;u("loading"),s(null);const I=cL(n.id,P=>{w&&(s(P||{}),u("ready"))},()=>{w&&(s(null),u("error"))});return()=>{w=!1,I==null||I()}},[n==null?void 0:n.id]);const m=Array.isArray(n==null?void 0:n.voiceChannels)?n.voiceChannels.filter(w=>w==null?void 0:w.id):[],y=Ee.useMemo(()=>{if(a!=="ready")return{};const w=Gh();return Object.fromEntries(m.map(I=>[I.id,hL(r==null?void 0:r[I.id],n,w)]))},[r,a,n==null?void 0:n.id,h,f,m.map(w=>w.id).join("|")]);return v.jsxs("div",{className:"web-server-voice-list",role:"group","aria-label":"Canais de voz e participantes",children:[!m.length&&v.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de voz disponível."}),m.map(w=>{const I=y[w.id]||[],P=I.filter(O=>O.streaming);return v.jsxs("div",{className:"web-server-voice-channel",children:[v.jsxs("button",{type:"button",className:"channel-choice web-server-voice-entry"+(e===w.id?" active":""),"aria-label":"Abrir canal de voz "+(w.name||"voz")+(a==="ready"?", "+I.length+" participantes, "+P.length+" transmitindo":""),onClick:()=>t==null?void 0:t(w.id),children:[v.jsx(Ze,{name:"headphones",size:17}),v.jsx("span",{className:"web-server-voice-name",children:w.name||"voz"}),a==="ready"&&I.length>0&&v.jsx("span",{className:"web-server-voice-count",children:I.length}),P.length>0&&v.jsx(Ze,{name:"screen",size:15})]}),a==="ready"&&I.length>0&&v.jsx("ul",{className:"web-server-voice-members",children:I.map(O=>v.jsxs("li",{className:"web-server-voice-member",children:[v.jsx("span",{className:"web-server-voice-avatar","aria-hidden":"true",children:O.name.slice(0,1).toUpperCase()}),v.jsx("span",{className:"web-server-voice-member-name",title:O.name,children:O.name}),v.jsx("span",{className:"web-server-voice-member-state",title:O.streaming?"Transmitindo tela":O.muted?"Microfone silenciado":"Conectado à voz",children:v.jsx(Ze,{name:O.streaming?"screen":O.muted?"mic-off":"mic",size:14})})]},O.uid))})]},w.id)}),a==="error"&&v.jsx("p",{className:"web-server-voice-notice",role:"status",children:"Não foi possível consultar quem está nos canais. Verifique sua sessão."}),a==="loading"&&m.length>0&&v.jsx("p",{className:"web-server-voice-notice",role:"status",children:"Sincronizando participantes…"})]})}const fL={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://discordia-web-beta.pages.dev",VITE_SFU_BETA_ENABLED:"true",VITE_SFU_BETA_ORIGIN:"https://discordia-sfu-media-production.carlos1702s.workers.dev",VITE_WEB_PUBLIC_LAUNCH:"true",VITE_WEB_SFU_RECEIVE_ENABLED:"true",VITE_WEB_SIGNUP_ENABLED:"false"},AI="https://web-testers-preview.discordia-ari.pages.dev",RI="https://discordia-web-beta.pages.dev",pL=/^[a-f0-9]{48}$/,mL=28;function hc(n){return typeof n=="string"&&pL.test(n)}function gL(n){return String(n||"").replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,mL)}function bL({storage:n=globalThis.sessionStorage,cryptoSource:e=globalThis.crypto}={}){var a,u;const t="discordia:web:guest-nickname";try{const h=gL((a=n==null?void 0:n.getItem)==null?void 0:a.call(n,t));if(h.length>=2)return h}catch{}let r="Web";try{const h=e.getRandomValues(new Uint8Array(2));r=Array.from(h,f=>f.toString(16).padStart(2,"0")).join("").toUpperCase()}catch{}const s="Convidado "+r;try{(u=n==null?void 0:n.setItem)==null||u.call(n,t,s)}catch{}return s}function ug(n){const e=String(n||"").match(/^\/r\/([a-f0-9]{48})\/?$/);return e?e[1]:""}function _L(n,e){const t=String(n||"").trim();if(hc(t))return t;try{const r=new URL(e),s=new URL(t);return!/^https?:$/.test(r.protocol)||s.origin!==r.origin||s.search||s.hash||s.username||s.password?"":ug(s.pathname)}catch{return""}}function yL(n,e){if(!hc(n))throw Error("INVALID_ROOM_ID");return String(e).replace(/\/$/,"")+"/r/"+n}function W_(n=fL){if(String((n==null?void 0:n.VITE_QUICK_ROOMS_ENABLED)||"")!=="true")return"";const e=String((n==null?void 0:n.VITE_QUICK_ROOM_API_ORIGIN)||"");return String((n==null?void 0:n.VITE_WEB_PUBLIC_LAUNCH)||"")==="true"?e===RI?RI:"":e===AI?AI:""}const bC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://discordia-web-beta.pages.dev",VITE_SFU_BETA_ENABLED:"true",VITE_SFU_BETA_ORIGIN:"https://discordia-sfu-media-production.carlos1702s.workers.dev",VITE_WEB_PUBLIC_LAUNCH:"true",VITE_WEB_SFU_RECEIVE_ENABLED:"true",VITE_WEB_SIGNUP_ENABLED:"false"};function DL(n,e=bC){const t=W_(e);return!t||!hc(n)?"":t.replace(/^https:/,"wss:")+"/api/rooms/"+n+"/connect"}async function vL({env:n=bC,request:e=fetch,storage:t=globalThis.sessionStorage,origin:r=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",getToken:s=null}={}){const u=W_(n);if(!u)throw Error("QUICK_ROOMS_UNAVAILABLE");const h=String((n==null?void 0:n.VITE_WEB_PUBLIC_LAUNCH)||"")==="true",f={};if(h&&typeof s=="function"){const w=await s();if(w!=null&&w!==""){if(typeof w!="string"||w.length<30||w.length>8192)throw Error("QUICK_ROOM_INVALID_TOKEN");f.Authorization="Bearer "+w}}const m=await e(u+"/api/rooms",{method:"POST",cache:"no-store",redirect:"error",headers:f});if(m.status===429)throw Error("QUICK_ROOM_RATE_LIMITED");if(m.status===503)throw Error("QUICK_ROOM_SERVICE_UNAVAILABLE");if(!m.ok)throw Error("QUICK_ROOM_CREATE_FAILED");const y=await m.json();if(!hc(y==null?void 0:y.roomId)||typeof(y==null?void 0:y.hostKey)!="string"||!/^[a-f0-9]{64}$/.test(y.hostKey))throw Error("QUICK_ROOM_INVALID_RESPONSE");return t.setItem("discordia:room-host:"+y.roomId,y.hostKey),{id:y.roomId,url:yL(y.roomId,r)}}function OL(n,e=globalThis.sessionStorage){var r;if(!hc(n))return"";const t=(r=e==null?void 0:e.getItem)==null?void 0:r.call(e,"discordia:room-host:"+n);return typeof t=="string"&&/^[a-f0-9]{64}$/.test(t)?t:""}function EL(n){switch(n==null?void 0:n.message){case"QUICK_ROOMS_UNAVAILABLE":return"As salas rápidas ainda não foram ativadas neste ambiente.";case"QUICK_ROOM_RATE_LIMITED":return"O limite temporário de criação de salas foi atingido. Tente novamente na próxima hora. Você ainda pode entrar por convite.";case"QUICK_ROOM_SERVICE_UNAVAILABLE":return"O servidor de salas está indisponível neste momento. Tente novamente mais tarde.";case"QUICK_ROOM_INVALID_TOKEN":return"Não foi possível confirmar sua sessão. Atualize a página e tente novamente.";case"QUICK_ROOM_CREATE_FAILED":return"Não foi possível criar a sala agora. Tente novamente.";default:return"Não foi possível conectar à sala. Confira o link ou tente novamente."}}function sn(n){switch(String((n==null?void 0:n.code)||"")){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-email":return"E-mail ou senha inválidos.";case"auth/email-already-in-use":return"Este e-mail já possui uma conta. Use Entrar ou Recupere sua senha.";case"auth/weak-password":return"Senha muito fraca. Escolha outra com pelo menos 8 caracteres.";case"auth/operation-not-allowed":return"Cadastro de novas contas indisponível nesta configuração do Firebase.";case"auth/too-many-requests":return"Muitas tentativas. Tente novamente mais tarde.";case"auth/network-request-failed":case"unavailable":return"Sem conexão. Confira sua internet e tente novamente.";case"permission-denied":return"Você não tem permissão para realizar esta operação.";default:return"Não foi possível concluir a operação. Tente novamente."}}function DC({user:n,section:e,server:t,channel:r,friendUid:s,friendUids:a}){return!(n!=null&&n.uid)||n.emailVerified!==!0?!1:e==="dm"?typeof s=="string"&&s.length>0&&Array.isArray(a)&&a.includes(s)&&s!==n.uid:e==="servers"&&!!(t!=null&&t.id)&&Array.isArray(t.memberUids)&&t.memberUids.includes(n.uid)&&Array.isArray(t.bannedUids??[])&&!(t.bannedUids??[]).includes(n.uid)&&!!(r!=null&&r.id)&&Array.isArray(t.textChannels)&&t.textChannels.some(u=>(u==null?void 0:u.id)===r.id)}function wL(n){if(!DC(n))return"";const{user:e,section:t,server:r,channel:s,friendUid:a}=n;return t==="dm"?`dm:${e.uid}:${a}`:`server:${e.uid}:${r.id}:${s.id}`}function IL(n){var e;try{const t=(e=n==null?void 0:n.toDate)==null?void 0:e.call(n);return t instanceof Date&&!Number.isNaN(t.getTime())?t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}catch{return""}}const TL=Ee.lazy(()=>NI(()=>import("./QuickRoom-CgH-SiwB.js"),__vite__mapDeps([0,1]))),SL=Ee.lazy(()=>NI(()=>import("./WebVoiceRoom-DmBE5bj4.js"),__vite__mapDeps([2,1])));function Si({small:n=!1}){return v.jsx("img",{className:n?"brand-symbol small":"brand-symbol",src:GM,alt:"Símbolo do Discórdia",draggable:"false"})}function OC({subtitle:n}){return v.jsxs("div",{className:"brand",children:[v.jsx(Si,{}),v.jsxs("div",{children:[v.jsx("strong",{children:"DISCÓRDIA"}),v.jsx("span",{children:n})]})]})}function PI({onJoinGuest:n,onCreateRoom:e,initialMode:t="login"}){const[r,s]=Ee.useState(t),[a,u]=Ee.useState(""),[h,f]=Ee.useState(""),[m,y]=Ee.useState(""),[w,I]=Ee.useState(""),[P,O]=Ee.useState(""),[F,B]=Ee.useState(!1),[K,H]=Ee.useState(""),[ee,se]=Ee.useState(!1);async function Oe(C){if(C.preventDefault(),!(!Nt||F)){B(!0),H("");try{await DP(Nt,h.trim(),m)}catch(x){H(sn(x))}finally{B(!1)}}}async function Pe(C){if(C.preventDefault(),!(!Nt||F)){H("Cadastro Web ainda não foi liberado na prévia. Use uma conta existente.");return}}async function D(){if(!h.trim()||F||!Nt){H("Informe seu e-mail antes de recuperar a senha.");return}B(!0),H("");try{await bP(Nt,h.trim()),H("Se esta conta existir, as instruções serão enviadas por e-mail.")}catch(C){H(sn(C))}finally{B(!1)}}function A(C){C.preventDefault();const x=_L(P,window.location.origin);if(!x){H("Cole um link de sala do próprio Discórdia.");return}n(x)}return v.jsxs("main",{className:"entrance entrance-v2",id:"inicio",children:[v.jsx("div",{className:"entrance-ambient","aria-hidden":"true"}),v.jsxs("div",{className:"entry-starlight","aria-hidden":"true",children:[v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{})]}),v.jsxs("header",{className:"entry-nav",children:[v.jsx(OC,{subtitle:"WEB · BETA PÚBLICA"}),v.jsxs("nav",{className:"entry-nav-links","aria-label":"Navegação da versão Web",children:[v.jsxs("span",{className:"entry-preview-badge",children:[v.jsx("i",{})," ","BETA PÚBLICA"]}),v.jsxs("a",{href:"https://discordia-ari.pages.dev/",target:"_blank",rel:"noopener noreferrer",children:["Site oficial ",v.jsx(Ze,{name:"arrow-up-right",size:16})]})]})]}),v.jsxs("section",{className:"entry-content","aria-labelledby":"entry-title",children:[v.jsxs("span",{className:"entry-overline",children:[v.jsx("span",{className:"entry-live-pulse"})," SUA GALERA, EM QUALQUER TELA"]}),v.jsxs("h1",{id:"entry-title",children:["SUA GALERA.",v.jsx("br",{}),"SEU JOGO.",v.jsx("br",{}),v.jsx("em",{children:"SEU LUGAR."})]}),v.jsx("p",{className:"entry-lead",children:"A conversa começa aqui. Encontre seus amigos, entre com sua conta e compartilhe momentos — ou crie e participe de uma sala por convite, sem cadastro."}),v.jsxs("div",{className:"entry-scene","aria-label":"Ilustração da experiência de uma sala do Discórdia",children:[v.jsxs("div",{className:"entry-scene-top",children:[v.jsxs("div",{className:"entry-scene-dots","aria-hidden":"true",children:[v.jsx("i",{}),v.jsx("i",{}),v.jsx("i",{})]}),v.jsx("span",{children:"DISCÓRDIA · SALA DA GALERA"}),v.jsxs("span",{className:"entry-scene-live",children:[v.jsx("i",{})," CONCEITO VISUAL"]})]}),v.jsxs("div",{className:"entry-scene-body",children:[v.jsxs("div",{className:"entry-scene-rail","aria-hidden":"true",children:[v.jsx(Si,{small:!0}),v.jsx("span",{children:v.jsx(Ze,{name:"users",size:19})}),v.jsx("span",{children:v.jsx(Ze,{name:"chat",size:19})}),v.jsx("span",{children:v.jsx(Ze,{name:"video",size:19})})]}),v.jsxs("div",{className:"entry-scene-room","aria-hidden":"true",children:[v.jsx("span",{className:"entry-scene-section",children:"SEU ESPAÇO"}),v.jsx("strong",{children:"Nosso lugar"}),v.jsx("div",{className:"entry-scene-channel",children:"# geral"}),v.jsx("div",{className:"entry-scene-channel",children:"# jogos"}),v.jsx("span",{className:"entry-scene-section",children:"SALAS"}),v.jsxs("div",{className:"entry-scene-channel active",children:[v.jsx(Ze,{name:"headphones",size:15})," Galera reunida"]}),v.jsxs("div",{className:"entry-scene-people",children:[v.jsx("b",{children:"A"}),v.jsx("b",{children:"L"}),v.jsx("b",{children:"F"}),v.jsx("b",{children:"+"})]})]}),v.jsxs("div",{className:"entry-scene-video","aria-hidden":"true",children:[v.jsxs("div",{className:"entry-scene-video-head",children:[v.jsx(Ze,{name:"video",size:16})," Compartilhando momentos"]}),v.jsxs("div",{className:"entry-scene-video-visual",children:[v.jsx("span",{className:"entry-scene-orbit",children:v.jsx(Si,{})}),v.jsx("strong",{children:"A PARTIDA COMEÇA AQUI."}),v.jsx("small",{children:"Converse · Jogue · Compartilhe"})]}),v.jsxs("div",{className:"entry-scene-video-controls",children:[v.jsx("span",{children:v.jsx(Ze,{name:"headphones",size:15})}),v.jsx("span",{children:v.jsx(Ze,{name:"screen",size:15})}),v.jsx("span",{children:v.jsx(Ze,{name:"chat",size:15})})]})]})]}),v.jsx("span",{className:"entry-scene-caption",children:"CENA ILUSTRATIVA · NÃO É UMA TRANSMISSÃO REAL"})]}),v.jsxs("div",{className:"entry-trust-row","aria-label":"Recursos do Discórdia Web",children:[v.jsxs("span",{children:[v.jsx(Ze,{name:"shield",size:17})," Conta existente"]}),v.jsxs("span",{children:[v.jsx(Ze,{name:"link",size:17})," Crie ou entre sem conta"]}),v.jsxs("span",{children:[v.jsx(Ze,{name:"screen",size:17})," Compartilhe sua tela"]})]})]}),v.jsxs("section",{className:"login-card login-card-v2","aria-labelledby":"login-title",children:[v.jsxs("div",{className:"login-card-head",children:[v.jsxs("div",{children:[v.jsx("span",{className:"eyebrow",children:"BEM-VINDO AO DISCÓRDIA"}),v.jsx("h2",{id:"login-title",children:r==="login"?"Bom ter você aqui.":"Crie seu universo."}),v.jsx("p",{children:r==="login"?"Sua conta do Desktop e Android também funciona aqui.":"Uma conta para continuar suas conversas em todas as telas."})]}),v.jsx("div",{className:"login-card-orbit","aria-hidden":"true",children:v.jsx(Si,{small:!0})})]}),v.jsxs("div",{className:"auth-mode-switch",role:"group","aria-label":"Escolha a forma de acesso",children:[v.jsx("button",{type:"button",className:r==="login"?"active":"","aria-pressed":r==="login",onClick:()=>{s("login"),H("")},children:"Entrar"}),v.jsx("button",{type:"button",className:r==="register"?"active":"","aria-pressed":r==="register","aria-disabled":!0,onClick:()=>{{H("Cadastro Web temporariamente desativado na prévia. Use sua conta existente.");return}},children:"Criar conta"})]}),r==="login"?v.jsx(v.Fragment,{children:v.jsxs("form",{onSubmit:Oe,className:"login-form login-form-v2",children:[v.jsx("label",{htmlFor:"web-email",children:"Seu e-mail"}),v.jsxs("div",{className:"login-input-box",children:[v.jsx(Ze,{name:"mail",size:19}),v.jsx("input",{id:"web-email",type:"email",autoComplete:"username",inputMode:"email",value:h,maxLength:254,required:!0,placeholder:"voce@exemplo.com",onChange:C=>f(C.target.value)})]}),v.jsxs("div",{className:"login-label-row",children:[v.jsx("label",{htmlFor:"web-password",children:"Senha"}),v.jsx("button",{className:"login-reset-link",type:"button",onClick:D,disabled:!Nt||F,children:"Esqueceu a senha?"})]}),v.jsxs("div",{className:"login-input-box",children:[v.jsx(Ze,{name:"lock",size:19}),v.jsx("input",{id:"web-password",type:ee?"text":"password",autoComplete:"current-password",value:m,required:!0,onChange:C=>y(C.target.value)}),v.jsx("button",{className:"login-password-toggle",type:"button",onClick:()=>se(C=>!C),"aria-label":ee?"Ocultar senha":"Mostrar senha","aria-pressed":ee,children:v.jsx(Ze,{name:ee?"eye-off":"eye",size:19})})]}),v.jsxs("button",{className:"primary login-main-cta",type:"submit",disabled:!Nt||F,children:[F?"Conectando…":"Entrar no Discórdia",!F&&v.jsx(Ze,{name:"arrow",size:19})]})]})}):v.jsx(v.Fragment,{children:v.jsxs("form",{onSubmit:Pe,className:"register-form register-form-v2",children:[v.jsx("label",{htmlFor:"register-name",children:"Seu nome"}),v.jsx("input",{id:"register-name",value:a,minLength:2,maxLength:50,autoComplete:"name",required:!0,placeholder:"Como quer ser chamado?",onChange:C=>u(C.target.value)}),v.jsx("label",{htmlFor:"register-email",children:"E-mail"}),v.jsx("input",{id:"register-email",type:"email",autoComplete:"email",value:h,maxLength:254,required:!0,onChange:C=>f(C.target.value)}),v.jsx("label",{htmlFor:"register-password",children:"Senha (mínimo 8 caracteres)"}),v.jsx("input",{id:"register-password",type:ee?"text":"password",autoComplete:"new-password",value:m,minLength:8,required:!0,onChange:C=>y(C.target.value)}),v.jsx("label",{htmlFor:"register-confirm",children:"Confirmar senha"}),v.jsx("input",{id:"register-confirm",type:ee?"text":"password",autoComplete:"new-password",value:w,minLength:8,required:!0,onChange:C=>I(C.target.value)}),v.jsxs("button",{className:"login-password-toggle register-visibility",type:"button",onClick:()=>se(C=>!C),"aria-pressed":ee,children:[v.jsx(Ze,{name:ee?"eye-off":"eye",size:17}),ee?"Ocultar senhas":"Mostrar senhas"]}),v.jsxs("button",{className:"primary login-main-cta",type:"submit",disabled:!Nt||F,children:[F?"Criando…":"Criar conta gratuita"," ",v.jsx(Ze,{name:"arrow",size:19})]}),v.jsx("small",{children:"Para liberar mensagens e servidores, confirme seu e-mail. O cadastro não libera canais privados automaticamente."})]})}),K&&v.jsx("p",{className:"notice",role:"status","aria-live":"polite",children:K}),!Nt&&v.jsx("p",{className:"login-note",children:"Login temporariamente indisponível. O modo convidado não exige uma conta do Firebase."}),r==="login"&&!0&&v.jsxs("p",{className:"login-register-note",children:[v.jsx(Ze,{name:"shield",size:15}),"Cadastro de novas contas Web em preparação. Use uma conta existente."]}),v.jsx("div",{className:"entry-separator",children:v.jsx("span",{children:"OU CRIE UMA SALA SEM CONTA"})}),v.jsxs("div",{className:"login-guest-zone",id:"sala-rapida",children:[v.jsxs("div",{className:"login-guest-intro",children:[v.jsx("div",{className:"login-guest-symbol",children:v.jsx(Ze,{name:"link",size:21})}),v.jsxs("div",{children:[v.jsx("strong",{children:"Recebeu um convite?"}),v.jsx("span",{children:"Entre com seu apelido e assista sem cadastro."})]})]}),v.jsxs("form",{className:"guest-join-form",onSubmit:A,children:[v.jsx("label",{htmlFor:"guest-invite",children:"Link da sala temporária"}),v.jsxs("div",{className:"login-invite-box",children:[v.jsx("input",{id:"guest-invite",placeholder:"Cole o link ou o código da sala",autoComplete:"off",value:P,onChange:C=>O(C.target.value),maxLength:400}),v.jsxs("button",{type:"submit",children:["Entrar como convidado ",v.jsx(Ze,{name:"arrow-up-right",size:17})]})]})]}),W_()&&v.jsxs("button",{type:"button",className:"entry-create-room",disabled:F,onClick:async()=>{if(!F){B(!0),H("");try{const C=await e();C!==!0&&H(typeof C=="string"?C:"Não foi possível criar sua sala agora.")}catch{H("Falha inesperada ao criar a sala. Atualize a página e tente novamente.")}finally{B(!1)}}},children:[v.jsx(Ze,{name:"plus",size:19}),F?"Criando sala…":"Criar sala temporária sem conta"]}),v.jsx("p",{className:"entry-public-note",children:"Crie ou entre em salas temporárias sem cadastro. Para acessar servidores, amigos e mensagens privadas, use sua conta."})]}),v.jsxs("footer",{className:"entry-login-footer",children:[v.jsxs("span",{children:[v.jsx(Ze,{name:"shield",size:16})," ","Salas protegidas por convite"]}),v.jsxs("a",{href:"https://discordia-ari.pages.dev/",target:"_blank",rel:"noopener noreferrer",children:["Conheça o projeto ",v.jsx(Ze,{name:"arrow-up-right",size:14})]})]})]})]})}function CL({user:n,onRefresh:e,setError:t}){const[r,s]=Ee.useState(!1);async function a(){s(!0);try{await n.reload(),e()}catch(h){t(sn(h))}finally{s(!1)}}async function u(){s(!0);try{await OP(n),t("Se permitido, um e-mail de confirmação foi enviado.")}catch(h){t(sn(h))}finally{s(!1)}}return v.jsx("main",{className:"center-screen",children:v.jsxs("div",{className:"setup-card",children:[v.jsx(OC,{subtitle:"VERIFICAÇÃO DE CONTA"}),v.jsx("h1",{children:"Confirme seu e-mail"}),v.jsx("p",{children:"Verifique sua caixa de entrada para acessar mensagens e servidores."}),v.jsxs("div",{className:"setup-actions",children:[v.jsx("button",{className:"primary",disabled:r,onClick:a,children:"Já confirmei"}),v.jsx("button",{disabled:r,onClick:u,children:"Reenviar confirmação"}),v.jsx("button",{onClick:()=>void _T(Nt),children:"Sair"})]})]})})}function AL({item:n,user:e,onReact:t,onEdit:r,onDelete:s,editingId:a,editText:u,setEditText:h,onSave:f,onCancel:m,busy:y}){const w=n.senderUid===e.uid;return v.jsxs("article",{className:w?"chat-message mine":"chat-message",children:[v.jsx("span",{className:"message-avatar","aria-hidden":"true",children:String(n.senderName||"M").charAt(0).toUpperCase()}),v.jsxs("div",{className:"message-body",children:[v.jsxs("div",{className:"message-meta",children:[v.jsx("strong",{children:n.senderName||"Membro"}),v.jsx("time",{children:IL(n.createdAt)})]}),v.jsx("p",{children:n.text||"[Mensagem sem texto]"}),v.jsxs("div",{className:"message-controls",children:[RC.slice(0,4).map(I=>{var P;return v.jsxs("button",{className:((P=n.reactions)==null?void 0:P[e.uid])===I?"chosen-reaction":"","aria-label":"Reagir com "+I,title:"Reagir com "+I,onClick:()=>t(n,I),children:[I," ",Object.values(n.reactions||{}).filter(O=>O===I).length||""]},I)}),w&&v.jsxs(v.Fragment,{children:[v.jsx("button",{onClick:()=>r(n),children:"Editar"}),v.jsx("button",{onClick:()=>s(n),disabled:y,children:"Excluir"})]})]}),a===n.id&&v.jsxs("form",{className:"edit-row",onSubmit:I=>f(I,n),children:[v.jsx("input",{"aria-label":"Editar mensagem",maxLength:2e3,value:u,onChange:I=>h(I.target.value)}),v.jsx("button",{className:"primary",disabled:y||!u.trim(),children:"Salvar"}),v.jsx("button",{type:"button",onClick:m,children:"Cancelar"})]})]})]})}function RL(){var zi;const[n,e]=Ee.useState(void 0),[t,r]=Ee.useState(()=>ug(window.location.pathname)),[s,a]=Ee.useState("login");Ee.useEffect(()=>{const q=()=>r(ug(window.location.pathname));return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[]);function u(q){window.history.pushState({},"","/r/"+q),r(q)}function h(){window.history.pushState({},"","/"),r(""),a("login")}function f(){h()}async function m(){if(ge)return!1;we(!0),_e("");try{const q=await vL({getToken:async()=>{const fe=Nt==null?void 0:Nt.currentUser;return!(fe!=null&&fe.uid)||fe.emailVerified!==!0?null:fe.getIdToken()}});return u(q.id),!0}catch(q){const fe=EL(q);return _e(fe),fe}finally{we(!1)}}const[y,w]=Ee.useState(0),[I,P]=Ee.useState([]),[O,F]=Ee.useState([]),[B,K]=Ee.useState([]),[H,ee]=Ee.useState({}),[se,Oe]=Ee.useState(""),[Pe,D]=Ee.useState(""),[A,C]=Ee.useState(""),[x,L]=Ee.useState(""),[b,k]=Ee.useState("servers"),[ft,Me]=Ee.useState({scope:"",items:[]}),[be,De]=Ee.useState(""),[re,ye]=Ee.useState(""),[ae,V]=Ee.useState(""),[Q,pe]=Ee.useState(""),[ge,we]=Ee.useState(!1),[Le,_e]=Ee.useState(""),[qe,Je]=Ee.useState("");Ee.useEffect(()=>{if(!Nt){e(null);return}return VP(Nt,e,()=>e(null))},[]);const ot=!!(n!=null&&n.uid)&&n.emailVerified===!0;Ee.useEffect(()=>{if(!ot||!(n!=null&&n.uid))return;const q="discordia:web:profile-pending:"+n.uid;try{if(window.localStorage.getItem(q)!=="1")return}catch{return}let fe=!0;return NM(n,n.displayName||"Membro").then(()=>{if(fe)try{window.localStorage.removeItem(q)}catch{}}).catch(Xe=>{fe&&_e(sn(Xe))}),()=>{fe=!1}},[ot,n==null?void 0:n.uid,y]),Ee.useEffect(()=>{if(!ot){P([]),F([]);return}const q=tt=>_e(sn(tt)),fe=zM(n.uid,P,q),Xe=qM(n.uid,F,q);return()=>{fe(),Xe()}},[n==null?void 0:n.uid,ot,y]),Ee.useEffect(()=>{if(!ot){K([]);return}return OM(n.uid,K,q=>_e(sn(q)))},[n==null?void 0:n.uid,ot,y]);const Zt=Ee.useMemo(()=>[...new Set(B.filter(q=>q.status==="accepted").map(q=>q.fromUid===(n==null?void 0:n.uid)?q.toUid:q.fromUid).filter(q=>typeof q=="string"&&q&&q!==(n==null?void 0:n.uid)))],[B,n==null?void 0:n.uid]),Fr=Zt.join("|");Ee.useEffect(()=>{if(!ot){ee({});return}const q=Fr?Fr.split("|"):[];ee({});const fe=q.map(Xe=>MM(Xe,tt=>ee(cn=>({...cn,[Xe]:tt})),tt=>_e(sn(tt))));return()=>fe.forEach(Xe=>Xe==null?void 0:Xe())},[n==null?void 0:n.uid,ot,Fr]);const Re=I.find(q=>q.id===se)||I[0]||null,Yn=Array.isArray(Re==null?void 0:Re.textChannels)?Re.textChannels.filter(q=>q==null?void 0:q.id):[],st=Yn.find(q=>q.id===Pe)||Yn[0]||null,un=(Array.isArray(Re==null?void 0:Re.voiceChannels)?Re.voiceChannels.filter(q=>q==null?void 0:q.id):[]).find(q=>q.id===A)||null,vn=Zt.includes(x)?x:"",Fn=q=>{const fe=H[q];return String((fe==null?void 0:fe.displayName)||(fe==null?void 0:fe.name)||(fe!=null&&fe.handle?"@"+fe.handle:"Amigo")).slice(0,50)},Xn=B.filter(q=>q.status==="pending"&&q.toUid===(n==null?void 0:n.uid)),Jn={user:n,section:b,server:Re,channel:st,friendUid:vn,friendUids:Zt},Zn=DC(Jn),jn=wL(Jn),oi=jn&&ft.scope===jn?ft.items:[];Ee.useEffect(()=>{if(Me({scope:jn,items:[]}),V(""),!jn)return;let q=!0;const fe=cn=>{q&&Me({scope:jn,items:cn})},Xe=cn=>{q&&_e(sn(cn))};let tt;return b==="dm"?tt=UM(n.uid,vn,fe,Xe):b==="servers"&&(tt=WM(Re.id,st.id,fe,Xe)),()=>{q=!1,tt==null||tt()}},[jn]);function Ui(q){k("servers"),Oe(q),D(""),C(""),De(""),_e("")}function Tt(q){Zt.includes(q)&&(k("dm"),L(q),De(""),_e(""))}async function Rt(q){var Xe;q.preventDefault();const fe=be.trim();if(!(!fe||fe.length>2e3||ge||!Zn)){we(!0),_e("");try{const tt=String(n.displayName||((Xe=n.email)==null?void 0:Xe.split("@")[0])||"Membro").slice(0,50);b==="dm"?await BM(n.uid,vn,tt,fe):await $M(n.uid,Re.id,st.id,tt,fe),De("")}catch(tt){_e(sn(tt))}finally{we(!1)}}}async function er(q,fe){if(!ge){we(!0),_e("");try{await HM(q,n.uid,fe)}catch(Xe){_e(sn(Xe))}finally{we(!1)}}}async function Hs(q){if(q.preventDefault(),!(!re.trim()||ge)){we(!0),Je("");try{await bM(n.uid,re.trim()),ye(""),Je("Solicitação enviada.")}catch(fe){Je(sn(fe))}finally{we(!1)}}}async function pr(q,fe){if(!ge){we(!0),_e("");try{await DM(q,n.uid,fe)}catch(Xe){_e(sn(Xe))}finally{we(!1)}}}async function ai(q,fe){if(Zn)try{await FM(n.uid,b==="dm"?"dm":"server",vn,Re==null?void 0:Re.id,st==null?void 0:st.id,q,fe)}catch(Xe){_e(sn(Xe))}}async function li(q,fe){if(q.preventDefault(),!(!Zn||fe.senderUid!==n.uid||!Q.trim()||ge)){we(!0);try{await VM(n.uid,b==="dm"?"dm":"server",vn,Re==null?void 0:Re.id,st==null?void 0:st.id,fe.id,Q.trim()),V(""),pe("")}catch(Xe){_e(sn(Xe))}finally{we(!1)}}}async function Gs(q){if(!(!Zn||q.senderUid!==n.uid||ge)&&window.confirm("Excluir esta mensagem para todos?")){we(!0);try{await jM(n.uid,b==="dm"?"dm":"server",vn,Re==null?void 0:Re.id,st==null?void 0:st.id,q.id)}catch(fe){_e(sn(fe))}finally{we(!1)}}}function Bi(){k("friends"),De(""),_e("")}function Ks(){_T(Nt).catch(q=>_e(sn(q)))}if(t)return v.jsx(Ee.Suspense,{fallback:v.jsx("main",{className:"center-screen brand-loading-screen",children:v.jsxs("div",{className:"brand-loading",children:[v.jsx(Si,{}),v.jsx("strong",{children:"DISCÓRDIA"}),v.jsx("span",{children:"Preparando sua sala rápida…"})]})}),children:v.jsx(TL,{roomId:t,user:n!=null&&n.emailVerified?n:null,onExit:h,onAuthRefresh:()=>w(q=>q+1),onOpenApp:f},t)});if(!TC||!Nt)return v.jsx(PI,{initialMode:s,onJoinGuest:u,onCreateRoom:m});if(n===void 0)return v.jsx("main",{className:"center-screen",children:v.jsxs("div",{className:"loading",children:[v.jsx(Si,{}),v.jsx("p",{children:"Carregando Discórdia Web…"})]})});if(!n)return v.jsx(PI,{initialMode:s,onJoinGuest:u,onCreateRoom:m},s);if(!n.emailVerified)return v.jsxs(v.Fragment,{children:[v.jsx(CL,{user:n,onRefresh:()=>w(q=>q+1),setError:_e}),Le&&v.jsx("div",{className:"auth-feedback",role:"status",children:Le})]});const Qs=b==="voice"?"◉ "+((un==null?void 0:un.name)||"Canal de voz"):b==="media-lab"?"Testes de mídia":b==="friends"?"Amigos e mensagens":b==="dm"?Fn(vn):st?"# "+(st.name||"canal"):(Re==null?void 0:Re.name)||"Bem-vindo ao Discórdia";return v.jsxs("div",{className:"app-shell",children:[v.jsxs("nav",{className:"server-rail","aria-label":"Servidores e áreas",children:[v.jsx("button",{className:"rail-home","aria-label":"Discórdia, início",title:"Início",onClick:()=>Ui(""),children:v.jsx(Si,{small:!0})}),v.jsx("span",{className:"rail-divider"}),I.map(q=>{var fe;return v.jsx("button",{className:(b==="servers"||b==="voice")&&(Re==null?void 0:Re.id)===q.id?"server-icon active":"server-icon",title:q.name||"Servidor","aria-label":q.name||"Servidor",onClick:()=>Ui(q.id),children:String(q.icon||((fe=q.name)==null?void 0:fe.charAt(0))||"◆").slice(0,2)},q.id)}),v.jsx("button",{className:b!=="servers"?"server-icon friends-icon active":"server-icon friends-icon","aria-label":"Amigos",title:"Amigos",onClick:Bi,children:v.jsx(Ze,{name:"users",size:23})}),v.jsx("button",{className:"rail-quick-room","aria-label":"Criar sala temporária por link",title:"Criar sala por link",onClick:()=>void m(),disabled:ge,children:v.jsx(Ze,{name:"link",size:24})}),v.jsx("button",{className:"rail-logout","aria-label":"Sair",title:"Sair da conta",onClick:Ks,children:v.jsx(Ze,{name:"exit",size:23})})]}),v.jsxs("aside",{className:"channel-sidebar","aria-label":"Navegação do espaço",children:[v.jsxs("div",{className:"sidebar-title",children:[v.jsx(Si,{small:!0}),v.jsxs("div",{children:[v.jsx("strong",{children:b==="servers"?(Re==null?void 0:Re.name)||"Meus servidores":"Mensagens"}),v.jsx("small",{children:"DISCÓRDIA WEB"})]})]}),b==="servers"||b==="voice"?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE TEXTO"}),v.jsxs("div",{className:"channel-list",children:[Yn.map(q=>v.jsxs("button",{className:q.id===(st==null?void 0:st.id)?"channel-choice active":"channel-choice",onClick:()=>{k("servers"),D(q.id),De("")},children:["# ",v.jsx("span",{children:q.name||"canal"})]},q.id)),!Yn.length&&v.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de texto disponível."})]}),v.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE VOZ · AO VIVO"}),v.jsx(dL,{server:Re,activeChannelId:b==="voice"?un==null?void 0:un.id:"",onSelect:q=>{k("voice"),C(q),De(""),_e("")}},(Re==null?void 0:Re.id)||"no-server"),v.jsx("p",{className:"sidebar-empty",children:"Presença sincronizada com o Desktop e Android. Entrar na chamada e assistir à mídia exigem conexão autorizada."})]}):v.jsxs(v.Fragment,{children:[v.jsxs("button",{className:b==="friends"?"channel-choice active":"channel-choice",onClick:Bi,children:["♧ ",v.jsx("span",{children:"Amigos"})]}),v.jsx("div",{className:"sidebar-subhead",children:"MENSAGENS DIRETAS"}),v.jsx("div",{className:"channel-list",children:Zt.map(q=>v.jsxs("button",{className:b==="dm"&&q===vn?"channel-choice active":"channel-choice",onClick:()=>Tt(q),children:["◉ ",v.jsx("span",{children:Fn(q)})]},q))})]}),b!=="voice"&&v.jsxs("div",{className:"quick-room-launch",children:[v.jsx("strong",{children:"Sala rápida por link"}),v.jsx("p",{children:"Crie uma sala temporária para assistir à sua tela com convidados."}),v.jsx("button",{type:"button",className:"primary",disabled:ge,onClick:()=>void m(),children:ge?"Criando sala…":"Criar sala e convidar"})]}),v.jsx("div",{className:"sidebar-subhead",children:"DISPOSITIVOS WEB"}),v.jsxs("button",{type:"button",className:b==="media-lab"?"channel-choice active":"channel-choice",onClick:()=>{k("media-lab"),De(""),_e("")},children:["◉ ",v.jsx("span",{children:"Testar microfone, câmera e tela"})]}),v.jsxs("div",{className:"sidebar-user",children:[v.jsx("div",{className:"user-avatar",children:String(n.displayName||n.email||"U").charAt(0).toUpperCase()}),v.jsxs("div",{children:[v.jsx("strong",{children:n.displayName||((zi=n.email)==null?void 0:zi.split("@")[0])||"Usuário"}),v.jsx("small",{children:"Conectado"})]})]})]}),v.jsxs("main",{className:"conversation",children:[v.jsxs("header",{className:"conversation-header",children:[v.jsxs("div",{children:[v.jsx("span",{className:"header-kicker",children:"DISCÓRDIA WEB · BETA PÚBLICA 1"}),v.jsx("h1",{children:Qs})]}),v.jsxs("span",{className:"sync-badge",children:[v.jsx("span",{className:"online-dot"})," Conta autenticada"]})]}),Le&&v.jsxs("div",{role:"alert",className:"inline-error",children:[v.jsx("span",{children:Le}),v.jsx("button",{onClick:()=>_e(""),children:"Fechar"})]}),O.filter(q=>q.status==="pending").map(q=>v.jsxs("div",{className:"invite-banner",children:[v.jsxs("span",{children:["Convite para ",v.jsx("strong",{children:String(q.serverName||"servidor").slice(0,70)})]}),v.jsx("button",{disabled:ge,onClick:()=>void er(q,!0),children:"Aceitar"}),v.jsx("button",{disabled:ge,onClick:()=>void er(q,!1),children:"Recusar"})]},q.id)),b==="voice"?v.jsx(Ee.Suspense,{fallback:v.jsx("div",{className:"center-screen",children:"Preparando visualizador Web…"}),children:v.jsx(SL,{user:n,server:Re,channel:un,onBack:()=>{k("servers"),De(""),_e("")}},n.uid+":"+((Re==null?void 0:Re.id)||"")+":"+((un==null?void 0:un.id)||""))}):b==="media-lab"?v.jsx(XM,{}):b==="friends"?v.jsxs("section",{className:"friend-content",children:[v.jsxs("div",{className:"section-heading",children:[v.jsx("h2",{children:"Seus amigos"}),v.jsx("p",{children:"Converse com seus contatos do Desktop e Android."})]}),v.jsxs("form",{className:"friend-form",onSubmit:Hs,children:[v.jsx("label",{htmlFor:"web-friend",children:"Adicionar por @identificador"}),v.jsxs("div",{children:[v.jsx("input",{id:"web-friend",value:re,maxLength:130,onChange:q=>ye(q.target.value),placeholder:"@seuamigo",required:!0}),v.jsx("button",{className:"primary",disabled:ge||!re.trim(),children:"Enviar solicitação"})]})]}),qe&&v.jsx("p",{className:"notice",role:"status",children:qe}),Xn.length>0&&v.jsxs("div",{className:"friend-group",children:[v.jsx("h3",{children:"Solicitações recebidas"}),Xn.map(q=>v.jsxs("div",{className:"friend-line",children:[v.jsx("strong",{children:Fn(q.fromUid)}),v.jsxs("div",{children:[v.jsx("button",{disabled:ge,onClick:()=>void pr(q,!0),children:"Aceitar"}),v.jsx("button",{disabled:ge,onClick:()=>void pr(q,!1),children:"Recusar"})]})]},q.id))]}),v.jsxs("div",{className:"friend-group",children:[v.jsx("h3",{children:"Conversas"}),!Zt.length&&v.jsx("p",{className:"empty",children:"Seus amigos aparecerão aqui após aceitarem a solicitação."}),Zt.map(q=>v.jsxs("button",{className:"friend-line clickable",onClick:()=>Tt(q),children:[v.jsxs("span",{className:"friend-identity",children:[v.jsx("span",{className:"friend-avatar",children:Fn(q).charAt(0).toUpperCase()}),v.jsx("strong",{children:Fn(q)})]}),v.jsx("span",{children:"Enviar mensagem →"})]},q))]})]}):v.jsxs(v.Fragment,{children:[v.jsxs("section",{className:"message-scroll","aria-label":"Mensagens","aria-live":"polite",children:[b==="servers"&&!Re&&v.jsxs("div",{className:"empty-state",children:[v.jsx(Si,{}),v.jsx("h2",{children:"Bem-vindo ao Discórdia Web"}),v.jsx("p",{children:"Os servidores aos quais você tem acesso aparecerão na barra lateral."})]}),b==="servers"&&Re&&!st&&v.jsxs("div",{className:"empty-state",children:[v.jsx("h2",{children:"Sem canal de texto"}),v.jsx("p",{children:"Este servidor ainda não possui canais disponíveis para você."})]}),b==="dm"&&!vn&&v.jsxs("div",{className:"empty-state",children:[v.jsx("h2",{children:"Conversa indisponível"}),v.jsx("p",{children:"Selecione um amigo com solicitação aceita."})]}),Zn&&oi.length===0&&v.jsxs("div",{className:"empty-state",children:[v.jsx("h2",{children:"Comece a conversa"}),v.jsx("p",{children:"Suas mensagens serão sincronizadas com as outras plataformas."})]}),oi.map(q=>v.jsx(AL,{item:q,user:n,onReact:ai,onEdit:fe=>{V(fe.id),pe(fe.text||"")},onDelete:Gs,editingId:ae,editText:Q,setEditText:pe,onSave:li,onCancel:()=>V(""),busy:ge},q.id))]}),Zn&&v.jsxs("form",{className:"composer",onSubmit:Rt,children:[v.jsx("label",{htmlFor:"web-message",children:"Mensagem"}),v.jsxs("div",{className:"composer-inner",children:[v.jsx("input",{id:"web-message",maxLength:2e3,value:be,onChange:q=>De(q.target.value),placeholder:b==="dm"?"Mensagem para "+Fn(vn):"Mensagem em #"+((st==null?void 0:st.name)||"canal")}),v.jsx("button",{type:"submit",className:"primary",disabled:ge||!be.trim(),children:"Enviar"})]}),v.jsx("small",{children:"Mensagens de texto · Sem integração de voz ou transmissão nesta prévia"})]})]})]})]})}class PL extends kI.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){console.error("Discórdia Web: falha ao abrir a interface",e,t)}render(){return this.state.failed?v.jsx("main",{className:"center-screen brand-failure",role:"alert",children:v.jsxs("div",{className:"brand-failure-card",children:[v.jsx("img",{src:"/discordia-orbit.png",alt:"Discórdia",width:"72",height:"72"}),v.jsx("span",{className:"brand-eyebrow",children:"DISCÓRDIA WEB · SALA RÁPIDA"}),v.jsx("h1",{children:"Não foi possível abrir a sala"}),v.jsx("p",{children:"A sala pode ter sido criada, mas a interface não carregou. Você pode tentar novamente sem perder o convite nesta aba."}),v.jsx("button",{className:"primary",type:"button",onClick:()=>window.location.reload(),children:"Tentar novamente"}),v.jsx("p",{children:v.jsx("a",{href:"/",children:"Voltar ao início"})})]})}):this.props.children}}GA.createRoot(document.getElementById("root")).render(v.jsx(kI.StrictMode,{children:v.jsx(PL,{children:v.jsx(RL,{})})}));export{Ze as R,W_ as a,yL as b,DL as c,OL as d,GM as e,Nt as f,bL as g,Gh as h,hL as i,v as j,vs as k,cL as l,gL as n,xL as o,Ee as r,DP as s};
