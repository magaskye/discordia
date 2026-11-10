const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/QuickRoom-DXWnFdLN.js","assets/useConnectionDiagnostics-CwOHf-lT.js","assets/WebVoiceRoom-BImYbSHD.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function $A(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qp={exports:{}},nu={},Hp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function qA(){if(eE)return je;eE=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function I(F){return F===null||typeof F!="object"?null:(F=w&&F[w]||F["@@iterator"],typeof F=="function"?F:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,V={};function U(F,Q,ge){this.props=F,this.context=Q,this.refs=V,this.updater=ge||R}U.prototype.isReactComponent={},U.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},U.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function q(){}q.prototype=U.prototype;function G(F,Q,ge){this.props=F,this.context=Q,this.refs=V,this.updater=ge||R}var Z=G.prototype=new q;Z.constructor=G,L(Z,U.prototype),Z.isPureReactComponent=!0;var se=Array.isArray,ae=Object.prototype.hasOwnProperty,he={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(F,Q,ge){var ve,Te={},Le=null,Ee=null;if(Q!=null)for(ve in Q.ref!==void 0&&(Ee=Q.ref),Q.key!==void 0&&(Le=""+Q.key),Q)ae.call(Q,ve)&&!x.hasOwnProperty(ve)&&(Te[ve]=Q[ve]);var qe=arguments.length-2;if(qe===1)Te.children=ge;else if(1<qe){for(var Je=Array(qe),at=0;at<qe;at++)Je[at]=arguments[at+2];Te.children=Je}if(F&&F.defaultProps)for(ve in qe=F.defaultProps,qe)Te[ve]===void 0&&(Te[ve]=qe[ve]);return{$$typeof:n,type:F,key:Le,ref:Ee,props:Te,_owner:he.current}}function N(F,Q){return{$$typeof:n,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function P(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function O(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ge){return Q[ge]})}var D=/\/+/g;function k(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):Q.toString(36)}function pt(F,Q,ge,ve,Te){var Le=typeof F;(Le==="undefined"||Le==="boolean")&&(F=null);var Ee=!1;if(F===null)Ee=!0;else switch(Le){case"string":case"number":Ee=!0;break;case"object":switch(F.$$typeof){case n:case e:Ee=!0}}if(Ee)return Ee=F,Te=Te(Ee),F=ve===""?"."+k(Ee,0):ve,se(Te)?(ge="",F!=null&&(ge=F.replace(D,"$&/")+"/"),pt(Te,Q,ge,"",function(at){return at})):Te!=null&&(P(Te)&&(Te=N(Te,ge+(!Te.key||Ee&&Ee.key===Te.key?"":(""+Te.key).replace(D,"$&/")+"/")+F)),Q.push(Te)),1;if(Ee=0,ve=ve===""?".":ve+":",se(F))for(var qe=0;qe<F.length;qe++){Le=F[qe];var Je=ve+k(Le,qe);Ee+=pt(Le,Q,ge,Je,Te)}else if(Je=I(F),typeof Je=="function")for(F=Je.call(F),qe=0;!(Le=F.next()).done;)Le=Le.value,Je=ve+k(Le,qe++),Ee+=pt(Le,Q,ge,Je,Te);else if(Le==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Me(F,Q,ge){if(F==null)return F;var ve=[],Te=0;return pt(F,ve,"","",function(Le){return Q.call(ge,Le,Te++)}),ve}function De(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(ge){(F._status===0||F._status===-1)&&(F._status=1,F._result=ge)},function(ge){(F._status===0||F._status===-1)&&(F._status=2,F._result=ge)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var Oe={current:null},re={transition:null},we={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:re,ReactCurrentOwner:he};function le(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:Me,forEach:function(F,Q,ge){Me(F,function(){Q.apply(this,arguments)},ge)},count:function(F){var Q=0;return Me(F,function(){Q++}),Q},toArray:function(F){return Me(F,function(Q){return Q})||[]},only:function(F){if(!P(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},je.Component=U,je.Fragment=t,je.Profiler=s,je.PureComponent=G,je.StrictMode=r,je.Suspense=f,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=we,je.act=le,je.cloneElement=function(F,Q,ge){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ve=L({},F.props),Te=F.key,Le=F.ref,Ee=F._owner;if(Q!=null){if(Q.ref!==void 0&&(Le=Q.ref,Ee=he.current),Q.key!==void 0&&(Te=""+Q.key),F.type&&F.type.defaultProps)var qe=F.type.defaultProps;for(Je in Q)ae.call(Q,Je)&&!x.hasOwnProperty(Je)&&(ve[Je]=Q[Je]===void 0&&qe!==void 0?qe[Je]:Q[Je])}var Je=arguments.length-2;if(Je===1)ve.children=ge;else if(1<Je){qe=Array(Je);for(var at=0;at<Je;at++)qe[at]=arguments[at+2];ve.children=qe}return{$$typeof:n,type:F.type,key:Te,ref:Le,props:ve,_owner:Ee}},je.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},je.createElement=C,je.createFactory=function(F){var Q=C.bind(null,F);return Q.type=F,Q},je.createRef=function(){return{current:null}},je.forwardRef=function(F){return{$$typeof:h,render:F}},je.isValidElement=P,je.lazy=function(F){return{$$typeof:y,_payload:{_status:-1,_result:F},_init:De}},je.memo=function(F,Q){return{$$typeof:m,type:F,compare:Q===void 0?null:Q}},je.startTransition=function(F){var Q=re.transition;re.transition={};try{F()}finally{re.transition=Q}},je.unstable_act=le,je.useCallback=function(F,Q){return Oe.current.useCallback(F,Q)},je.useContext=function(F){return Oe.current.useContext(F)},je.useDebugValue=function(){},je.useDeferredValue=function(F){return Oe.current.useDeferredValue(F)},je.useEffect=function(F,Q){return Oe.current.useEffect(F,Q)},je.useId=function(){return Oe.current.useId()},je.useImperativeHandle=function(F,Q,ge){return Oe.current.useImperativeHandle(F,Q,ge)},je.useInsertionEffect=function(F,Q){return Oe.current.useInsertionEffect(F,Q)},je.useLayoutEffect=function(F,Q){return Oe.current.useLayoutEffect(F,Q)},je.useMemo=function(F,Q){return Oe.current.useMemo(F,Q)},je.useReducer=function(F,Q,ge){return Oe.current.useReducer(F,Q,ge)},je.useRef=function(F){return Oe.current.useRef(F)},je.useState=function(F){return Oe.current.useState(F)},je.useSyncExternalStore=function(F,Q,ge){return Oe.current.useSyncExternalStore(F,Q,ge)},je.useTransition=function(){return Oe.current.useTransition()},je.version="18.3.1",je}var tE;function dg(){return tE||(tE=1,Hp.exports=qA()),Hp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function HA(){if(nE)return nu;nE=1;var n=dg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,m){var y,w={},I=null,R=null;m!==void 0&&(I=""+m),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(R=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(w[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:e,type:h,key:I,ref:R,props:w,_owner:s.current}}return nu.Fragment=t,nu.jsx=u,nu.jsxs=u,nu}var rE;function GA(){return rE||(rE=1,qp.exports=HA()),qp.exports}var v=GA(),ye=dg();const MI=$A(ye);var Ah={},Gp={exports:{}},On={},Kp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function KA(){return iE||(iE=1,(function(n){function e(re,we){var le=re.length;re.push(we);e:for(;0<le;){var F=le-1>>>1,Q=re[F];if(0<s(Q,we))re[F]=we,re[le]=Q,le=F;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var we=re[0],le=re.pop();if(le!==we){re[0]=le;e:for(var F=0,Q=re.length,ge=Q>>>1;F<ge;){var ve=2*(F+1)-1,Te=re[ve],Le=ve+1,Ee=re[Le];if(0>s(Te,le))Le<Q&&0>s(Ee,Te)?(re[F]=Ee,re[Le]=le,F=Le):(re[F]=Te,re[ve]=le,F=ve);else if(Le<Q&&0>s(Ee,le))re[F]=Ee,re[Le]=le,F=Le;else break e}}return we}function s(re,we){var le=re.sortIndex-we.sortIndex;return le!==0?le:re.id-we.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var f=[],m=[],y=1,w=null,I=3,R=!1,L=!1,V=!1,U=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(re){for(var we=t(m);we!==null;){if(we.callback===null)r(m);else if(we.startTime<=re)r(m),we.sortIndex=we.expirationTime,e(f,we);else break;we=t(m)}}function se(re){if(V=!1,Z(re),!L)if(t(f)!==null)L=!0,De(ae);else{var we=t(m);we!==null&&Oe(se,we.startTime-re)}}function ae(re,we){L=!1,V&&(V=!1,q(C),C=-1),R=!0;var le=I;try{for(Z(we),w=t(f);w!==null&&(!(w.expirationTime>we)||re&&!O());){var F=w.callback;if(typeof F=="function"){w.callback=null,I=w.priorityLevel;var Q=F(w.expirationTime<=we);we=n.unstable_now(),typeof Q=="function"?w.callback=Q:w===t(f)&&r(f),Z(we)}else r(f);w=t(f)}if(w!==null)var ge=!0;else{var ve=t(m);ve!==null&&Oe(se,ve.startTime-we),ge=!1}return ge}finally{w=null,I=le,R=!1}}var he=!1,x=null,C=-1,N=5,P=-1;function O(){return!(n.unstable_now()-P<N)}function D(){if(x!==null){var re=n.unstable_now();P=re;var we=!0;try{we=x(!0,re)}finally{we?k():(he=!1,x=null)}}else he=!1}var k;if(typeof G=="function")k=function(){G(D)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Me=pt.port2;pt.port1.onmessage=D,k=function(){Me.postMessage(null)}}else k=function(){U(D,0)};function De(re){x=re,he||(he=!0,k())}function Oe(re,we){C=U(function(){re(n.unstable_now())},we)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){L||R||(L=!0,De(ae))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var we=3;break;default:we=I}var le=I;I=we;try{return re()}finally{I=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,we){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var le=I;I=re;try{return we()}finally{I=le}},n.unstable_scheduleCallback=function(re,we,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=le+Q,re={id:y++,callback:we,priorityLevel:re,startTime:le,expirationTime:Q,sortIndex:-1},le>F?(re.sortIndex=le,e(m,re),t(f)===null&&re===t(m)&&(V?(q(C),C=-1):V=!0,Oe(se,le-F))):(re.sortIndex=Q,e(f,re),L||R||(L=!0,De(ae))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var we=I;return function(){var le=I;I=we;try{return re.apply(this,arguments)}finally{I=le}}}})(Qp)),Qp}var sE;function QA(){return sE||(sE=1,Kp.exports=KA()),Kp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE;function YA(){if(oE)return On;oE=1;var n=dg(),e=QA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function I(i){return f.call(w,i)?!0:f.call(y,i)?!1:m.test(i)?w[i]=!0:(y[i]=!0,!1)}function R(i,o,l,d){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function L(i,o,l,d){if(o===null||typeof o>"u"||R(i,o,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function V(i,o,l,d,p,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){U[i]=new V(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];U[o]=new V(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){U[i]=new V(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){U[i]=new V(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){U[i]=new V(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){U[i]=new V(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){U[i]=new V(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){U[i]=new V(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){U[i]=new V(i,5,!1,i.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function G(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(q,G);U[o]=new V(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(q,G);U[o]=new V(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(q,G);U[o]=new V(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){U[i]=new V(i,1,!1,i.toLowerCase(),null,!1,!1)}),U.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){U[i]=new V(i,1,!1,i.toLowerCase(),null,!0,!0)});function Z(i,o,l,d){var p=U.hasOwnProperty(o)?U[o]:null;(p!==null?p.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(L(o,l,p,d)&&(l=null),d||p===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,o,l):i.setAttribute(o,l))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),he=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),re=Symbol.iterator;function we(i){return i===null||typeof i!="object"?null:(i=re&&i[re]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,F;function Q(i){if(F===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);F=o&&o[1]||""}return`
`+F+i}var ge=!1;function ve(i,o){if(!i||ge)return"";ge=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var d=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){d=W}i.call(o.prototype)}else{try{throw Error()}catch(W){d=W}i()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),_=d.stack.split(`
`),T=p.length-1,A=_.length-1;1<=T&&0<=A&&p[T]!==_[A];)A--;for(;1<=T&&0<=A;T--,A--)if(p[T]!==_[A]){if(T!==1||A!==1)do if(T--,A--,0>A||p[T]!==_[A]){var b=`
`+p[T].replace(" at new "," at ");return i.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",i.displayName)),b}while(1<=T&&0<=A);break}}}finally{ge=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function Te(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=ve(i.type,!1),i;case 11:return i=ve(i.type.render,!1),i;case 1:return i=ve(i.type,!0),i;default:return""}}function Le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case he:return"Portal";case N:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case pt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case P:return(i._context.displayName||"Context")+".Provider";case D:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Me:return o=i.displayName||null,o!==null?o:Le(i.type)||"Memo";case De:o=i._payload,i=i._init;try{return Le(i(o))}catch{}}return null}function Ee(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function qe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function at(i){var o=Je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,_.call(this,T)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function en(i){i._valueTracker||(i._valueTracker=at(i))}function jr(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),d="";return i&&(d=Je(i)?i.checked?"true":"false":i.value),i=d,i!==l?(o.setValue(i),!0):!1}function Ae(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Xn(i,o){var l=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function ot(i,o){var l=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;l=qe(o.value!=null?o.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Bo(i,o){o=o.checked,o!=null&&Z(i,"checked",o,!1)}function un(i,o){Bo(i,o);var l=qe(o.value),d=o.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Fn(i,o.type,l):o.hasOwnProperty("defaultValue")&&Fn(i,o.type,qe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function vn(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Fn(i,o,l){(o!=="number"||Ae(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Jn=Array.isArray;function Zn(i,o,l,d){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+qe(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function er(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function jn(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Jn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:qe(l)}}function oi(i,o){var l=qe(o.value),d=qe(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function zi(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function St(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?St(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var tr,Gs=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,d,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=tr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function mr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},li=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(i){li.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ai[o]=ai[i]})});function Ks(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ai.hasOwnProperty(i)&&ai[i]?(""+o).trim():o+"px"}function Bi(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Ks(l,o[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Qs=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(i,o){if(o){if(Qs[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Wi(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function me(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Xe=null,tt=null,cn=null;function Wo(i){if(i=zl(i)){if(typeof Xe!="function")throw Error(t(280));var o=i.stateNode;o&&(o=zc(o),Xe(i.stateNode,i.type,o))}}function Ur(i){tt?cn?cn.push(i):cn=[i]:tt=i}function yl(){if(tt){var i=tt,o=cn;if(cn=tt=null,Wo(i),o)for(i=0;i<o.length;i++)Wo(o[i])}}function Xs(i,o){return i(o)}function vl(){}var ui=!1;function El(i,o,l){if(ui)return i(o,l);ui=!0;try{return Xs(i,o,l)}finally{ui=!1,(tt!==null||cn!==null)&&(vl(),yl())}}function kt(i,o){var l=i.stateNode;if(l===null)return null;var d=zc(l);if(d===null)return null;l=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var $o=!1;if(h)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){$o=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{$o=!1}function Js(i,o,l,d,p,_,T,A,b){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(J){this.onError(J)}}var Zs=!1,qo=null,_r=!1,wl=null,vf={onError:function(i){Zs=!0,qo=i}};function Ho(i,o,l,d,p,_,T,A,b){Zs=!1,qo=null,Js.apply(vf,arguments)}function dc(i,o,l,d,p,_,T,A,b){if(Ho.apply(this,arguments),Zs){if(Zs){var W=qo;Zs=!1,qo=null}else throw Error(t(198));_r||(_r=!0,wl=W)}}function yr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function eo(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function vr(i){if(yr(i)!==i)throw Error(t(188))}function fc(i){var o=i.alternate;if(!o){if(o=yr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,d=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return vr(p),i;if(_===d)return vr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var T=!1,A=p.child;A;){if(A===l){T=!0,l=p,d=_;break}if(A===d){T=!0,d=p,l=_;break}A=A.sibling}if(!T){for(A=_.child;A;){if(A===l){T=!0,l=_,d=p;break}if(A===d){T=!0,d=_,l=p;break}A=A.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function Il(i){return i=fc(i),i!==null?Go(i):null}function Go(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Go(i);if(o!==null)return o;i=i.sibling}return null}var Ko=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,pc=e.unstable_shouldYield,Ef=e.unstable_requestPaint,ct=e.unstable_now,mc=e.unstable_getCurrentPriorityLevel,to=e.unstable_ImmediatePriority,$i=e.unstable_UserBlockingPriority,nr=e.unstable_NormalPriority,Sl=e.unstable_LowPriority,gc=e.unstable_IdlePriority,no=null,Un=null;function _c(i){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(no,i,void 0,(i.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:vc,Cl=Math.log,yc=Math.LN2;function vc(i){return i>>>=0,i===0?32:31-(Cl(i)/yc|0)|0}var Qo=64,Yo=4194304;function qi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ro(i,o){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var A=T&~p;A!==0?d=qi(A):(_&=T,_!==0&&(d=qi(_)))}else T=l&~p,T!==0?d=qi(T):_!==0&&(d=qi(_));if(d===0)return 0;if(o!==0&&o!==d&&(o&p)===0&&(p=d&-d,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((d&4)!==0&&(d|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)l=31-En(o),p=1<<l,d|=i[l],o&=~p;return d}function wf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ci(i,o){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-En(_),A=1<<T,b=p[T];b===-1?((A&l)===0||(A&d)!==0)&&(p[T]=wf(A,o)):b<=o&&(i.expiredLanes|=A),_&=~A}}function zn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function io(){var i=Qo;return Qo<<=1,(Qo&4194240)===0&&(Qo=64),i}function Hi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Gi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-En(o),i[o]=l}function lt(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-En(l),_=1<<p;o[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function Ki(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var d=31-En(l),p=1<<d;p&o|i[d]&o&&(i[d]|=o),l&=~p}}var $e=0;function Qi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ec,Xo,wc,Ic,Tc,Al=!1,zr=[],tn=null,Er=null,wr=null,Yi=new Map,rr=new Map,Br=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(i,o){switch(i){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Yi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(o.pointerId)}}function Rn(i,o,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},o!==null&&(o=zl(o),o!==null&&Xo(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Tf(i,o,l,d,p){switch(o){case"focusin":return tn=Rn(tn,i,o,l,d,p),!0;case"dragenter":return Er=Rn(Er,i,o,l,d,p),!0;case"mouseover":return wr=Rn(wr,i,o,l,d,p),!0;case"pointerover":var _=p.pointerId;return Yi.set(_,Rn(Yi.get(_)||null,i,o,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,rr.set(_,Rn(rr.get(_)||null,i,o,l,d,p)),!0}return!1}function Cc(i){var o=uo(i.target);if(o!==null){var l=yr(o);if(l!==null){if(o=l.tag,o===13){if(o=eo(l),o!==null){i.blockedOn=o,Tc(i.priority,function(){wc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function hi(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Jo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);H=d,l.target.dispatchEvent(d),H=null}else return o=zl(l),o!==null&&Xo(o),i.blockedOn=l,!1;o.shift()}return!0}function so(i,o,l){hi(i)&&l.delete(o)}function Ac(){Al=!1,tn!==null&&hi(tn)&&(tn=null),Er!==null&&hi(Er)&&(Er=null),wr!==null&&hi(wr)&&(wr=null),Yi.forEach(so),rr.forEach(so)}function Ir(i,o){i.blockedOn===o&&(i.blockedOn=null,Al||(Al=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ac)))}function Tr(i){function o(p){return Ir(p,i)}if(0<zr.length){Ir(zr[0],i);for(var l=1;l<zr.length;l++){var d=zr[l];d.blockedOn===i&&(d.blockedOn=null)}}for(tn!==null&&Ir(tn,i),Er!==null&&Ir(Er,i),wr!==null&&Ir(wr,i),Yi.forEach(o),rr.forEach(o),l=0;l<Br.length;l++)d=Br[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Br.length&&(l=Br[0],l.blockedOn===null);)Cc(l),l.blockedOn===null&&Br.shift()}var di=se.ReactCurrentBatchConfig,Xi=!0;function yt(i,o,l,d){var p=$e,_=di.transition;di.transition=null;try{$e=1,Rl(i,o,l,d)}finally{$e=p,di.transition=_}}function Sf(i,o,l,d){var p=$e,_=di.transition;di.transition=null;try{$e=4,Rl(i,o,l,d)}finally{$e=p,di.transition=_}}function Rl(i,o,l,d){if(Xi){var p=Jo(i,o,l,d);if(p===null)Mf(i,o,d,oo,l),Sc(i,d);else if(Tf(p,i,o,l,d))d.stopPropagation();else if(Sc(i,d),o&4&&-1<If.indexOf(i)){for(;p!==null;){var _=zl(p);if(_!==null&&Ec(_),_=Jo(i,o,l,d),_===null&&Mf(i,o,d,oo,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else Mf(i,o,d,null,l)}}var oo=null;function Jo(i,o,l,d){if(oo=null,i=me(d),i=uo(i),i!==null)if(o=yr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=eo(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return oo=i,null}function Pl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case to:return 1;case $i:return 4;case nr:case Sl:return 16;case gc:return 536870912;default:return 16}default:return 16}}var Bn=null,Zo=null,Pn=null;function kl(){if(Pn)return Pn;var i,o=Zo,l=o.length,d,p="value"in Bn?Bn.value:Bn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var T=l-i;for(d=1;d<=T&&o[l-d]===p[_-d];d++);return Pn=p.slice(i,1<d?1-d:void 0)}function ea(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Wr(){return!0}function Nl(){return!1}function nn(i){function o(l,d,p,_,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Wr:Nl,this.isPropagationStopped=Nl,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),o}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=nn(Sr),$r=le({},Sr,{view:0,detail:0}),Cf=nn($r),na,fi,Ji,ao=le({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ji&&(Ji&&i.type==="mousemove"?(na=i.screenX-Ji.screenX,fi=i.screenY-Ji.screenY):fi=na=0,Ji=i),na)},movementY:function(i){return"movementY"in i?i.movementY:fi}}),ra=nn(ao),xl=le({},ao,{dataTransfer:0}),Rc=nn(xl),ia=le({},$r,{relatedTarget:0}),sa=nn(ia),Pc=le({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),pi=nn(Pc),kc=le({},Sr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Nc=nn(kc),xc=le({},Sr,{data:0}),bl=nn(xc),oa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=bc[i])?!!o[i]:!1}function qr(){return Dc}var c=le({},$r,{key:function(i){if(i.key){var o=oa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ea(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?wn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qr,charCode:function(i){return i.type==="keypress"?ea(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ea(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=nn(c),E=le({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=nn(E),j=le({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qr}),$=nn(j),ie=le({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nt=nn(ie),Ft=le({},ao,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),He=nn(Ft),$t=[9,13,27,32],bt=h&&"CompositionEvent"in window,ir=null;h&&"documentMode"in document&&(ir=document.documentMode);var Wn=h&&"TextEvent"in window&&!ir,lo=h&&(!bt||ir&&8<ir&&11>=ir),aa=" ",K_=!1;function Q_(i,o){switch(i){case"keyup":return $t.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var la=!1;function zC(i,o){switch(i){case"compositionend":return Y_(o);case"keypress":return o.which!==32?null:(K_=!0,aa);case"textInput":return i=o.data,i===aa&&K_?null:i;default:return null}}function BC(i,o){if(la)return i==="compositionend"||!bt&&Q_(i,o)?(i=kl(),Pn=Zo=Bn=null,la=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return lo&&o.locale!=="ko"?null:o.data;default:return null}}var WC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!WC[i.type]:o==="textarea"}function J_(i,o,l,d){Ur(d),o=Fc(o,"onChange"),0<o.length&&(l=new ta("onChange","change",null,l,d),i.push({event:l,listeners:o}))}var Dl=null,Ol=null;function $C(i){gy(i,0)}function Oc(i){var o=fa(i);if(jr(o))return i}function qC(i,o){if(i==="change")return o}var Z_=!1;if(h){var Af;if(h){var Rf="oninput"in document;if(!Rf){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),Rf=typeof ey.oninput=="function"}Af=Rf}else Af=!1;Z_=Af&&(!document.documentMode||9<document.documentMode)}function ty(){Dl&&(Dl.detachEvent("onpropertychange",ny),Ol=Dl=null)}function ny(i){if(i.propertyName==="value"&&Oc(Ol)){var o=[];J_(o,Ol,i,me(i)),El($C,o)}}function HC(i,o,l){i==="focusin"?(ty(),Dl=o,Ol=l,Dl.attachEvent("onpropertychange",ny)):i==="focusout"&&ty()}function GC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Oc(Ol)}function KC(i,o){if(i==="click")return Oc(o)}function QC(i,o){if(i==="input"||i==="change")return Oc(o)}function YC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Cr=typeof Object.is=="function"?Object.is:YC;function Ml(i,o){if(Cr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),d=Object.keys(o);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(o,p)||!Cr(i[p],o[p]))return!1}return!0}function ry(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function iy(i,o){var l=ry(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=o&&d>=o)return{node:l,offset:o-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ry(l)}}function sy(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?sy(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function oy(){for(var i=window,o=Ae();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Ae(i.document)}return o}function Pf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function XC(i){var o=oy(),l=i.focusedElem,d=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&sy(l.ownerDocument.documentElement,l)){if(d!==null&&Pf(l)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=iy(l,_);var T=iy(l,d);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var JC=h&&"documentMode"in document&&11>=document.documentMode,ua=null,kf=null,Ll=null,Nf=!1;function ay(i,o,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nf||ua==null||ua!==Ae(d)||(d=ua,"selectionStart"in d&&Pf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ll&&Ml(Ll,d)||(Ll=d,d=Fc(kf,"onSelect"),0<d.length&&(o=new ta("onSelect","select",null,o,l),i.push({event:o,listeners:d}),o.target=ua)))}function Mc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ca={animationend:Mc("Animation","AnimationEnd"),animationiteration:Mc("Animation","AnimationIteration"),animationstart:Mc("Animation","AnimationStart"),transitionend:Mc("Transition","TransitionEnd")},xf={},ly={};h&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Lc(i){if(xf[i])return xf[i];if(!ca[i])return i;var o=ca[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in ly)return xf[i]=o[l];return i}var uy=Lc("animationend"),cy=Lc("animationiteration"),hy=Lc("animationstart"),dy=Lc("transitionend"),fy=new Map,py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(i,o){fy.set(i,o),a(o,[i])}for(var bf=0;bf<py.length;bf++){var Df=py[bf],ZC=Df.toLowerCase(),eA=Df[0].toUpperCase()+Df.slice(1);Zi(ZC,"on"+eA)}Zi(uy,"onAnimationEnd"),Zi(cy,"onAnimationIteration"),Zi(hy,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(dy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vl));function my(i,o,l){var d=i.type||"unknown-event";i.currentTarget=l,dc(d,o,void 0,i),i.currentTarget=null}function gy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var T=d.length-1;0<=T;T--){var A=d[T],b=A.instance,W=A.currentTarget;if(A=A.listener,b!==_&&p.isPropagationStopped())break e;my(p,A,W),_=b}else for(T=0;T<d.length;T++){if(A=d[T],b=A.instance,W=A.currentTarget,A=A.listener,b!==_&&p.isPropagationStopped())break e;my(p,A,W),_=b}}}if(_r)throw i=wl,_r=!1,wl=null,i}function mt(i,o){var l=o[zf];l===void 0&&(l=o[zf]=new Set);var d=i+"__bubble";l.has(d)||(_y(o,i,2,!1),l.add(d))}function Of(i,o,l){var d=0;o&&(d|=4),_y(l,i,d,o)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Fl(i){if(!i[Vc]){i[Vc]=!0,r.forEach(function(l){l!=="selectionchange"&&(tA.has(l)||Of(l,!1,i),Of(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Vc]||(o[Vc]=!0,Of("selectionchange",!1,o))}}function _y(i,o,l,d){switch(Pl(o)){case 1:var p=yt;break;case 4:p=Sf;break;default:p=Rl}l=p.bind(null,o,l,i),p=void 0,!$o||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Mf(i,o,l,d,p){var _=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var A=d.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var b=T.tag;if((b===3||b===4)&&(b=T.stateNode.containerInfo,b===p||b.nodeType===8&&b.parentNode===p))return;T=T.return}for(;A!==null;){if(T=uo(A),T===null)return;if(b=T.tag,b===5||b===6){d=_=T;continue e}A=A.parentNode}}d=d.return}El(function(){var W=_,J=me(l),ee=[];e:{var X=fy.get(i);if(X!==void 0){var ue=ta,fe=i;switch(i){case"keypress":if(ea(l)===0)break e;case"keydown":case"keyup":ue=g;break;case"focusin":fe="focus",ue=sa;break;case"focusout":fe="blur",ue=sa;break;case"beforeblur":case"afterblur":ue=sa;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$;break;case uy:case cy:case hy:ue=pi;break;case dy:ue=nt;break;case"scroll":ue=Cf;break;case"wheel":ue=He;break;case"copy":case"cut":case"paste":ue=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=S}var pe=(o&4)!==0,Nt=!pe&&i==="scroll",z=pe?X!==null?X+"Capture":null:X;pe=[];for(var M=W,B;M!==null;){B=M;var te=B.stateNode;if(B.tag===5&&te!==null&&(B=te,z!==null&&(te=kt(M,z),te!=null&&pe.push(jl(M,te,B)))),Nt)break;M=M.return}0<pe.length&&(X=new ue(X,fe,null,l,J),ee.push({event:X,listeners:pe}))}}if((o&7)===0){e:{if(X=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",X&&l!==H&&(fe=l.relatedTarget||l.fromElement)&&(uo(fe)||fe[mi]))break e;if((ue||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,ue?(fe=l.relatedTarget||l.toElement,ue=W,fe=fe?uo(fe):null,fe!==null&&(Nt=yr(fe),fe!==Nt||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ue=null,fe=W),ue!==fe)){if(pe=ra,te="onMouseLeave",z="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(pe=S,te="onPointerLeave",z="onPointerEnter",M="pointer"),Nt=ue==null?X:fa(ue),B=fe==null?X:fa(fe),X=new pe(te,M+"leave",ue,l,J),X.target=Nt,X.relatedTarget=B,te=null,uo(J)===W&&(pe=new pe(z,M+"enter",fe,l,J),pe.target=B,pe.relatedTarget=Nt,te=pe),Nt=te,ue&&fe)t:{for(pe=ue,z=fe,M=0,B=pe;B;B=ha(B))M++;for(B=0,te=z;te;te=ha(te))B++;for(;0<M-B;)pe=ha(pe),M--;for(;0<B-M;)z=ha(z),B--;for(;M--;){if(pe===z||z!==null&&pe===z.alternate)break t;pe=ha(pe),z=ha(z)}pe=null}else pe=null;ue!==null&&yy(ee,X,ue,pe,!1),fe!==null&&Nt!==null&&yy(ee,Nt,fe,pe,!0)}}e:{if(X=W?fa(W):window,ue=X.nodeName&&X.nodeName.toLowerCase(),ue==="select"||ue==="input"&&X.type==="file")var _e=qC;else if(X_(X))if(Z_)_e=QC;else{_e=GC;var Se=HC}else(ue=X.nodeName)&&ue.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(_e=KC);if(_e&&(_e=_e(i,W))){J_(ee,_e,l,J);break e}Se&&Se(i,X,W),i==="focusout"&&(Se=X._wrapperState)&&Se.controlled&&X.type==="number"&&Fn(X,"number",X.value)}switch(Se=W?fa(W):window,i){case"focusin":(X_(Se)||Se.contentEditable==="true")&&(ua=Se,kf=W,Ll=null);break;case"focusout":Ll=kf=ua=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,ay(ee,l,J);break;case"selectionchange":if(JC)break;case"keydown":case"keyup":ay(ee,l,J)}var Ce;if(bt)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else la?Q_(i,l)&&(Ne="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(lo&&l.locale!=="ko"&&(la||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&la&&(Ce=kl()):(Bn=J,Zo="value"in Bn?Bn.value:Bn.textContent,la=!0)),Se=Fc(W,Ne),0<Se.length&&(Ne=new bl(Ne,i,null,l,J),ee.push({event:Ne,listeners:Se}),Ce?Ne.data=Ce:(Ce=Y_(l),Ce!==null&&(Ne.data=Ce)))),(Ce=Wn?zC(i,l):BC(i,l))&&(W=Fc(W,"onBeforeInput"),0<W.length&&(J=new bl("onBeforeInput","beforeinput",null,l,J),ee.push({event:J,listeners:W}),J.data=Ce))}gy(ee,o)})}function jl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Fc(i,o){for(var l=o+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=kt(i,l),_!=null&&d.unshift(jl(i,_,p)),_=kt(i,o),_!=null&&d.push(jl(i,_,p))),i=i.return}return d}function ha(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function yy(i,o,l,d,p){for(var _=o._reactName,T=[];l!==null&&l!==d;){var A=l,b=A.alternate,W=A.stateNode;if(b!==null&&b===d)break;A.tag===5&&W!==null&&(A=W,p?(b=kt(l,_),b!=null&&T.unshift(jl(l,b,A))):p||(b=kt(l,_),b!=null&&T.push(jl(l,b,A)))),l=l.return}T.length!==0&&i.push({event:o,listeners:T})}var nA=/\r\n?/g,rA=/\u0000|\uFFFD/g;function vy(i){return(typeof i=="string"?i:""+i).replace(nA,`
`).replace(rA,"")}function jc(i,o,l){if(o=vy(o),vy(i)!==o&&l)throw Error(t(425))}function Uc(){}var Lf=null,Vf=null;function Ff(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,iA=typeof clearTimeout=="function"?clearTimeout:void 0,Ey=typeof Promise=="function"?Promise:void 0,sA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ey<"u"?function(i){return Ey.resolve(null).then(i).catch(oA)}:jf;function oA(i){setTimeout(function(){throw i})}function Uf(i,o){var l=o,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Tr(o);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Tr(o)}function es(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function wy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var da=Math.random().toString(36).slice(2),Hr="__reactFiber$"+da,Ul="__reactProps$"+da,mi="__reactContainer$"+da,zf="__reactEvents$"+da,aA="__reactListeners$"+da,lA="__reactHandles$"+da;function uo(i){var o=i[Hr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[mi]||l[Hr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=wy(i);i!==null;){if(l=i[Hr])return l;i=wy(i)}return o}i=l,l=i.parentNode}return null}function zl(i){return i=i[Hr]||i[mi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function fa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function zc(i){return i[Ul]||null}var Bf=[],pa=-1;function ts(i){return{current:i}}function gt(i){0>pa||(i.current=Bf[pa],Bf[pa]=null,pa--)}function ht(i,o){pa++,Bf[pa]=i.current,i.current=o}var ns={},hn=ts(ns),kn=ts(!1),co=ns;function ma(i,o){var l=i.type.contextTypes;if(!l)return ns;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(i){return i=i.childContextTypes,i!=null}function Bc(){gt(kn),gt(hn)}function Iy(i,o,l){if(hn.current!==ns)throw Error(t(168));ht(hn,o),ht(kn,l)}function Ty(i,o,l){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in o))throw Error(t(108,Ee(i)||"Unknown",p));return le({},l,d)}function Wc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ns,co=hn.current,ht(hn,i),ht(kn,kn.current),!0}function Sy(i,o,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=Ty(i,o,co),d.__reactInternalMemoizedMergedChildContext=i,gt(kn),gt(hn),ht(hn,i)):gt(kn),ht(kn,l)}var gi=null,$c=!1,Wf=!1;function Cy(i){gi===null?gi=[i]:gi.push(i)}function uA(i){$c=!0,Cy(i)}function rs(){if(!Wf&&gi!==null){Wf=!0;var i=0,o=$e;try{var l=gi;for($e=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}gi=null,$c=!1}catch(p){throw gi!==null&&(gi=gi.slice(i+1)),Ko(to,rs),p}finally{$e=o,Wf=!1}}return null}var ga=[],_a=0,qc=null,Hc=0,sr=[],or=0,ho=null,_i=1,yi="";function fo(i,o){ga[_a++]=Hc,ga[_a++]=qc,qc=i,Hc=o}function Ay(i,o,l){sr[or++]=_i,sr[or++]=yi,sr[or++]=ho,ho=i;var d=_i;i=yi;var p=32-En(d)-1;d&=~(1<<p),l+=1;var _=32-En(o)+p;if(30<_){var T=p-p%5;_=(d&(1<<T)-1).toString(32),d>>=T,p-=T,_i=1<<32-En(o)+p|l<<p|d,yi=_+i}else _i=1<<_|l<<p|d,yi=i}function $f(i){i.return!==null&&(fo(i,1),Ay(i,1,0))}function qf(i){for(;i===qc;)qc=ga[--_a],ga[_a]=null,Hc=ga[--_a],ga[_a]=null;for(;i===ho;)ho=sr[--or],sr[or]=null,yi=sr[--or],sr[or]=null,_i=sr[--or],sr[or]=null}var $n=null,qn=null,vt=!1,Ar=null;function Ry(i,o){var l=cr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Py(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,$n=i,qn=es(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,$n=i,qn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=ho!==null?{id:_i,overflow:yi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=cr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,$n=i,qn=null,!0):!1;default:return!1}}function Hf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Gf(i){if(vt){var o=qn;if(o){var l=o;if(!Py(i,o)){if(Hf(i))throw Error(t(418));o=es(l.nextSibling);var d=$n;o&&Py(i,o)?Ry(d,l):(i.flags=i.flags&-4097|2,vt=!1,$n=i)}}else{if(Hf(i))throw Error(t(418));i.flags=i.flags&-4097|2,vt=!1,$n=i}}}function ky(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$n=i}function Gc(i){if(i!==$n)return!1;if(!vt)return ky(i),vt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Ff(i.type,i.memoizedProps)),o&&(o=qn)){if(Hf(i))throw Ny(),Error(t(418));for(;o;)Ry(i,o),o=es(o.nextSibling)}if(ky(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){qn=es(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}qn=null}}else qn=$n?es(i.stateNode.nextSibling):null;return!0}function Ny(){for(var i=qn;i;)i=es(i.nextSibling)}function ya(){qn=$n=null,vt=!1}function Kf(i){Ar===null?Ar=[i]:Ar.push(i)}var cA=se.ReactCurrentBatchConfig;function Bl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var A=p.refs;T===null?delete A[_]:A[_]=T},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Kc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function xy(i){var o=i._init;return o(i._payload)}function by(i){function o(z,M){if(i){var B=z.deletions;B===null?(z.deletions=[M],z.flags|=16):B.push(M)}}function l(z,M){if(!i)return null;for(;M!==null;)o(z,M),M=M.sibling;return null}function d(z,M){for(z=new Map;M!==null;)M.key!==null?z.set(M.key,M):z.set(M.index,M),M=M.sibling;return z}function p(z,M){return z=hs(z,M),z.index=0,z.sibling=null,z}function _(z,M,B){return z.index=B,i?(B=z.alternate,B!==null?(B=B.index,B<M?(z.flags|=2,M):B):(z.flags|=2,M)):(z.flags|=1048576,M)}function T(z){return i&&z.alternate===null&&(z.flags|=2),z}function A(z,M,B,te){return M===null||M.tag!==6?(M=jp(B,z.mode,te),M.return=z,M):(M=p(M,B),M.return=z,M)}function b(z,M,B,te){var _e=B.type;return _e===x?J(z,M,B.props.children,te,B.key):M!==null&&(M.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===De&&xy(_e)===M.type)?(te=p(M,B.props),te.ref=Bl(z,M,B),te.return=z,te):(te=yh(B.type,B.key,B.props,null,z.mode,te),te.ref=Bl(z,M,B),te.return=z,te)}function W(z,M,B,te){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Up(B,z.mode,te),M.return=z,M):(M=p(M,B.children||[]),M.return=z,M)}function J(z,M,B,te,_e){return M===null||M.tag!==7?(M=wo(B,z.mode,te,_e),M.return=z,M):(M=p(M,B),M.return=z,M)}function ee(z,M,B){if(typeof M=="string"&&M!==""||typeof M=="number")return M=jp(""+M,z.mode,B),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ae:return B=yh(M.type,M.key,M.props,null,z.mode,B),B.ref=Bl(z,null,M),B.return=z,B;case he:return M=Up(M,z.mode,B),M.return=z,M;case De:var te=M._init;return ee(z,te(M._payload),B)}if(Jn(M)||we(M))return M=wo(M,z.mode,B,null),M.return=z,M;Kc(z,M)}return null}function X(z,M,B,te){var _e=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return _e!==null?null:A(z,M,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ae:return B.key===_e?b(z,M,B,te):null;case he:return B.key===_e?W(z,M,B,te):null;case De:return _e=B._init,X(z,M,_e(B._payload),te)}if(Jn(B)||we(B))return _e!==null?null:J(z,M,B,te,null);Kc(z,B)}return null}function ue(z,M,B,te,_e){if(typeof te=="string"&&te!==""||typeof te=="number")return z=z.get(B)||null,A(M,z,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case ae:return z=z.get(te.key===null?B:te.key)||null,b(M,z,te,_e);case he:return z=z.get(te.key===null?B:te.key)||null,W(M,z,te,_e);case De:var Se=te._init;return ue(z,M,B,Se(te._payload),_e)}if(Jn(te)||we(te))return z=z.get(B)||null,J(M,z,te,_e,null);Kc(M,te)}return null}function fe(z,M,B,te){for(var _e=null,Se=null,Ce=M,Ne=M=0,Gt=null;Ce!==null&&Ne<B.length;Ne++){Ce.index>Ne?(Gt=Ce,Ce=null):Gt=Ce.sibling;var Qe=X(z,Ce,B[Ne],te);if(Qe===null){Ce===null&&(Ce=Gt);break}i&&Ce&&Qe.alternate===null&&o(z,Ce),M=_(Qe,M,Ne),Se===null?_e=Qe:Se.sibling=Qe,Se=Qe,Ce=Gt}if(Ne===B.length)return l(z,Ce),vt&&fo(z,Ne),_e;if(Ce===null){for(;Ne<B.length;Ne++)Ce=ee(z,B[Ne],te),Ce!==null&&(M=_(Ce,M,Ne),Se===null?_e=Ce:Se.sibling=Ce,Se=Ce);return vt&&fo(z,Ne),_e}for(Ce=d(z,Ce);Ne<B.length;Ne++)Gt=ue(Ce,z,Ne,B[Ne],te),Gt!==null&&(i&&Gt.alternate!==null&&Ce.delete(Gt.key===null?Ne:Gt.key),M=_(Gt,M,Ne),Se===null?_e=Gt:Se.sibling=Gt,Se=Gt);return i&&Ce.forEach(function(ds){return o(z,ds)}),vt&&fo(z,Ne),_e}function pe(z,M,B,te){var _e=we(B);if(typeof _e!="function")throw Error(t(150));if(B=_e.call(B),B==null)throw Error(t(151));for(var Se=_e=null,Ce=M,Ne=M=0,Gt=null,Qe=B.next();Ce!==null&&!Qe.done;Ne++,Qe=B.next()){Ce.index>Ne?(Gt=Ce,Ce=null):Gt=Ce.sibling;var ds=X(z,Ce,Qe.value,te);if(ds===null){Ce===null&&(Ce=Gt);break}i&&Ce&&ds.alternate===null&&o(z,Ce),M=_(ds,M,Ne),Se===null?_e=ds:Se.sibling=ds,Se=ds,Ce=Gt}if(Qe.done)return l(z,Ce),vt&&fo(z,Ne),_e;if(Ce===null){for(;!Qe.done;Ne++,Qe=B.next())Qe=ee(z,Qe.value,te),Qe!==null&&(M=_(Qe,M,Ne),Se===null?_e=Qe:Se.sibling=Qe,Se=Qe);return vt&&fo(z,Ne),_e}for(Ce=d(z,Ce);!Qe.done;Ne++,Qe=B.next())Qe=ue(Ce,z,Ne,Qe.value,te),Qe!==null&&(i&&Qe.alternate!==null&&Ce.delete(Qe.key===null?Ne:Qe.key),M=_(Qe,M,Ne),Se===null?_e=Qe:Se.sibling=Qe,Se=Qe);return i&&Ce.forEach(function(WA){return o(z,WA)}),vt&&fo(z,Ne),_e}function Nt(z,M,B,te){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ae:e:{for(var _e=B.key,Se=M;Se!==null;){if(Se.key===_e){if(_e=B.type,_e===x){if(Se.tag===7){l(z,Se.sibling),M=p(Se,B.props.children),M.return=z,z=M;break e}}else if(Se.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===De&&xy(_e)===Se.type){l(z,Se.sibling),M=p(Se,B.props),M.ref=Bl(z,Se,B),M.return=z,z=M;break e}l(z,Se);break}else o(z,Se);Se=Se.sibling}B.type===x?(M=wo(B.props.children,z.mode,te,B.key),M.return=z,z=M):(te=yh(B.type,B.key,B.props,null,z.mode,te),te.ref=Bl(z,M,B),te.return=z,z=te)}return T(z);case he:e:{for(Se=B.key;M!==null;){if(M.key===Se)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){l(z,M.sibling),M=p(M,B.children||[]),M.return=z,z=M;break e}else{l(z,M);break}else o(z,M);M=M.sibling}M=Up(B,z.mode,te),M.return=z,z=M}return T(z);case De:return Se=B._init,Nt(z,M,Se(B._payload),te)}if(Jn(B))return fe(z,M,B,te);if(we(B))return pe(z,M,B,te);Kc(z,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,M!==null&&M.tag===6?(l(z,M.sibling),M=p(M,B),M.return=z,z=M):(l(z,M),M=jp(B,z.mode,te),M.return=z,z=M),T(z)):l(z,M)}return Nt}var va=by(!0),Dy=by(!1),Qc=ts(null),Yc=null,Ea=null,Qf=null;function Yf(){Qf=Ea=Yc=null}function Xf(i){var o=Qc.current;gt(Qc),i._currentValue=o}function Jf(i,o,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===l)break;i=i.return}}function wa(i,o){Yc=i,Qf=Ea=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(xn=!0),i.firstContext=null)}function ar(i){var o=i._currentValue;if(Qf!==i)if(i={context:i,memoizedValue:o,next:null},Ea===null){if(Yc===null)throw Error(t(308));Ea=i,Yc.dependencies={lanes:0,firstContext:i}}else Ea=Ea.next=i;return o}var po=null;function Zf(i){po===null?po=[i]:po.push(i)}function Oy(i,o,l,d){var p=o.interleaved;return p===null?(l.next=l,Zf(o)):(l.next=p.next,p.next=l),o.interleaved=l,vi(i,d)}function vi(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var is=!1;function ep(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ei(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ss(i,o,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Ke&2)!==0){var p=d.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),d.pending=o,vi(i,l)}return p=d.interleaved,p===null?(o.next=o,Zf(d)):(o.next=p.next,p.next=o),d.interleaved=o,vi(i,l)}function Xc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,Ki(i,l)}}function Ly(i,o){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Jc(i,o,l,d){var p=i.updateQueue;is=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var b=A,W=b.next;b.next=null,T===null?_=W:T.next=W,T=b;var J=i.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==T&&(A===null?J.firstBaseUpdate=W:A.next=W,J.lastBaseUpdate=b))}if(_!==null){var ee=p.baseState;T=0,J=W=b=null,A=_;do{var X=A.lane,ue=A.eventTime;if((d&X)===X){J!==null&&(J=J.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var fe=i,pe=A;switch(X=o,ue=l,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){ee=fe.call(ue,ee,X);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,X=typeof fe=="function"?fe.call(ue,ee,X):fe,X==null)break e;ee=le({},ee,X);break e;case 2:is=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,X=p.effects,X===null?p.effects=[A]:X.push(A))}else ue={eventTime:ue,lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(W=J=ue,b=ee):J=J.next=ue,T|=X;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;X=A,A=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);if(J===null&&(b=ee),p.baseState=b,p.firstBaseUpdate=W,p.lastBaseUpdate=J,o=p.shared.interleaved,o!==null){p=o;do T|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);_o|=T,i.lanes=T,i.memoizedState=ee}}function Vy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Wl={},Gr=ts(Wl),$l=ts(Wl),ql=ts(Wl);function mo(i){if(i===Wl)throw Error(t(174));return i}function tp(i,o){switch(ht(ql,o),ht($l,i),ht(Gr,Wl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Pt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Pt(o,i)}gt(Gr),ht(Gr,o)}function Ia(){gt(Gr),gt($l),gt(ql)}function Fy(i){mo(ql.current);var o=mo(Gr.current),l=Pt(o,i.type);o!==l&&(ht($l,i),ht(Gr,l))}function np(i){$l.current===i&&(gt(Gr),gt($l))}var Et=ts(0);function Zc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var rp=[];function ip(){for(var i=0;i<rp.length;i++)rp[i]._workInProgressVersionPrimary=null;rp.length=0}var eh=se.ReactCurrentDispatcher,sp=se.ReactCurrentBatchConfig,go=0,wt=null,jt=null,qt=null,th=!1,Hl=!1,Gl=0,hA=0;function dn(){throw Error(t(321))}function op(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Cr(i[l],o[l]))return!1;return!0}function ap(i,o,l,d,p,_){if(go=_,wt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,eh.current=i===null||i.memoizedState===null?mA:gA,i=l(d,p),Hl){_=0;do{if(Hl=!1,Gl=0,25<=_)throw Error(t(301));_+=1,qt=jt=null,o.updateQueue=null,eh.current=_A,i=l(d,p)}while(Hl)}if(eh.current=ih,o=jt!==null&&jt.next!==null,go=0,qt=jt=wt=null,th=!1,o)throw Error(t(300));return i}function lp(){var i=Gl!==0;return Gl=0,i}function Kr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?wt.memoizedState=qt=i:qt=qt.next=i,qt}function lr(){if(jt===null){var i=wt.alternate;i=i!==null?i.memoizedState:null}else i=jt.next;var o=qt===null?wt.memoizedState:qt.next;if(o!==null)qt=o,jt=i;else{if(i===null)throw Error(t(310));jt=i,i={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},qt===null?wt.memoizedState=qt=i:qt=qt.next=i}return qt}function Kl(i,o){return typeof o=="function"?o(i):o}function up(i){var o=lr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=jt,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var A=T=null,b=null,W=_;do{var J=W.lane;if((go&J)===J)b!==null&&(b=b.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:i(d,W.action);else{var ee={lane:J,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};b===null?(A=b=ee,T=d):b=b.next=ee,wt.lanes|=J,_o|=J}W=W.next}while(W!==null&&W!==_);b===null?T=d:b.next=A,Cr(d,o.memoizedState)||(xn=!0),o.memoizedState=d,o.baseState=T,o.baseQueue=b,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,wt.lanes|=_,_o|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function cp(i){var o=lr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);Cr(_,o.memoizedState)||(xn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,d]}function jy(){}function Uy(i,o){var l=wt,d=lr(),p=o(),_=!Cr(d.memoizedState,p);if(_&&(d.memoizedState=p,xn=!0),d=d.queue,hp(Wy.bind(null,l,d,i),[i]),d.getSnapshot!==o||_||qt!==null&&qt.memoizedState.tag&1){if(l.flags|=2048,Ql(9,By.bind(null,l,d,p,o),void 0,null),Ht===null)throw Error(t(349));(go&30)!==0||zy(l,o,p)}return p}function zy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=wt.updateQueue,o===null?(o={lastEffect:null,stores:null},wt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function By(i,o,l,d){o.value=l,o.getSnapshot=d,$y(o)&&qy(i)}function Wy(i,o,l){return l(function(){$y(o)&&qy(i)})}function $y(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Cr(i,l)}catch{return!0}}function qy(i){var o=vi(i,1);o!==null&&Nr(o,i,1,-1)}function Hy(i){var o=Kr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:i},o.queue=i,i=i.dispatch=pA.bind(null,wt,i),[o.memoizedState,i]}function Ql(i,o,l,d){return i={tag:i,create:o,destroy:l,deps:d,next:null},o=wt.updateQueue,o===null?(o={lastEffect:null,stores:null},wt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,o.lastEffect=i)),i}function Gy(){return lr().memoizedState}function nh(i,o,l,d){var p=Kr();wt.flags|=i,p.memoizedState=Ql(1|o,l,void 0,d===void 0?null:d)}function rh(i,o,l,d){var p=lr();d=d===void 0?null:d;var _=void 0;if(jt!==null){var T=jt.memoizedState;if(_=T.destroy,d!==null&&op(d,T.deps)){p.memoizedState=Ql(o,l,_,d);return}}wt.flags|=i,p.memoizedState=Ql(1|o,l,_,d)}function Ky(i,o){return nh(8390656,8,i,o)}function hp(i,o){return rh(2048,8,i,o)}function Qy(i,o){return rh(4,2,i,o)}function Yy(i,o){return rh(4,4,i,o)}function Xy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Jy(i,o,l){return l=l!=null?l.concat([i]):null,rh(4,4,Xy.bind(null,o,i),l)}function dp(){}function Zy(i,o){var l=lr();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&op(o,d[1])?d[0]:(l.memoizedState=[i,o],i)}function ev(i,o){var l=lr();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&op(o,d[1])?d[0]:(i=i(),l.memoizedState=[i,o],i)}function tv(i,o,l){return(go&21)===0?(i.baseState&&(i.baseState=!1,xn=!0),i.memoizedState=l):(Cr(l,o)||(l=io(),wt.lanes|=l,_o|=l,i.baseState=!0),o)}function dA(i,o){var l=$e;$e=l!==0&&4>l?l:4,i(!0);var d=sp.transition;sp.transition={};try{i(!1),o()}finally{$e=l,sp.transition=d}}function nv(){return lr().memoizedState}function fA(i,o,l){var d=us(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},rv(i))iv(o,l);else if(l=Oy(i,o,l,d),l!==null){var p=Tn();Nr(l,i,d,p),sv(l,o,d)}}function pA(i,o,l){var d=us(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(rv(i))iv(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,A=_(T,l);if(p.hasEagerState=!0,p.eagerState=A,Cr(A,T)){var b=o.interleaved;b===null?(p.next=p,Zf(o)):(p.next=b.next,b.next=p),o.interleaved=p;return}}catch{}finally{}l=Oy(i,o,p,d),l!==null&&(p=Tn(),Nr(l,i,d,p),sv(l,o,d))}}function rv(i){var o=i.alternate;return i===wt||o!==null&&o===wt}function iv(i,o){Hl=th=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function sv(i,o,l){if((l&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,Ki(i,l)}}var ih={readContext:ar,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},mA={readContext:ar,useCallback:function(i,o){return Kr().memoizedState=[i,o===void 0?null:o],i},useContext:ar,useEffect:Ky,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,nh(4194308,4,Xy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return nh(4194308,4,i,o)},useInsertionEffect:function(i,o){return nh(4,2,i,o)},useMemo:function(i,o){var l=Kr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var d=Kr();return o=l!==void 0?l(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=fA.bind(null,wt,i),[d.memoizedState,i]},useRef:function(i){var o=Kr();return i={current:i},o.memoizedState=i},useState:Hy,useDebugValue:dp,useDeferredValue:function(i){return Kr().memoizedState=i},useTransition:function(){var i=Hy(!1),o=i[0];return i=dA.bind(null,i[1]),Kr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var d=wt,p=Kr();if(vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ht===null)throw Error(t(349));(go&30)!==0||zy(d,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,Ky(Wy.bind(null,d,_,i),[i]),d.flags|=2048,Ql(9,By.bind(null,d,_,l,o),void 0,null),l},useId:function(){var i=Kr(),o=Ht.identifierPrefix;if(vt){var l=yi,d=_i;l=(d&~(1<<32-En(d)-1)).toString(32)+l,o=":"+o+"R"+l,l=Gl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=hA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},gA={readContext:ar,useCallback:Zy,useContext:ar,useEffect:hp,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:up,useRef:Gy,useState:function(){return up(Kl)},useDebugValue:dp,useDeferredValue:function(i){var o=lr();return tv(o,jt.memoizedState,i)},useTransition:function(){var i=up(Kl)[0],o=lr().memoizedState;return[i,o]},useMutableSource:jy,useSyncExternalStore:Uy,useId:nv,unstable_isNewReconciler:!1},_A={readContext:ar,useCallback:Zy,useContext:ar,useEffect:hp,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:cp,useRef:Gy,useState:function(){return cp(Kl)},useDebugValue:dp,useDeferredValue:function(i){var o=lr();return jt===null?o.memoizedState=i:tv(o,jt.memoizedState,i)},useTransition:function(){var i=cp(Kl)[0],o=lr().memoizedState;return[i,o]},useMutableSource:jy,useSyncExternalStore:Uy,useId:nv,unstable_isNewReconciler:!1};function Rr(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function fp(i,o,l,d){o=i.memoizedState,l=l(d,o),l=l==null?o:le({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var sh={isMounted:function(i){return(i=i._reactInternals)?yr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var d=Tn(),p=us(i),_=Ei(d,p);_.payload=o,l!=null&&(_.callback=l),o=ss(i,_,p),o!==null&&(Nr(o,i,p,d),Xc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var d=Tn(),p=us(i),_=Ei(d,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ss(i,_,p),o!==null&&(Nr(o,i,p,d),Xc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Tn(),d=us(i),p=Ei(l,d);p.tag=2,o!=null&&(p.callback=o),o=ss(i,p,d),o!==null&&(Nr(o,i,d,l),Xc(o,i,d))}};function ov(i,o,l,d,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,T):o.prototype&&o.prototype.isPureReactComponent?!Ml(l,d)||!Ml(p,_):!0}function av(i,o,l){var d=!1,p=ns,_=o.contextType;return typeof _=="object"&&_!==null?_=ar(_):(p=Nn(o)?co:hn.current,d=o.contextTypes,_=(d=d!=null)?ma(i,p):ns),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=sh,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function lv(i,o,l,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,d),o.state!==i&&sh.enqueueReplaceState(o,o.state,null)}function pp(i,o,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},ep(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=ar(_):(_=Nn(o)?co:hn.current,p.context=ma(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(fp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&sh.enqueueReplaceState(p,p.state,null),Jc(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ta(i,o){try{var l="",d=o;do l+=Te(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function mp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function gp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var yA=typeof WeakMap=="function"?WeakMap:Map;function uv(i,o,l){l=Ei(-1,l),l.tag=3,l.payload={element:null};var d=o.value;return l.callback=function(){dh||(dh=!0,xp=d),gp(i,o)},l}function cv(i,o,l){l=Ei(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;l.payload=function(){return d(p)},l.callback=function(){gp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){gp(i,o),typeof d!="function"&&(as===null?as=new Set([this]):as.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function hv(i,o,l){var d=i.pingCache;if(d===null){d=i.pingCache=new yA;var p=new Set;d.set(o,p)}else p=d.get(o),p===void 0&&(p=new Set,d.set(o,p));p.has(l)||(p.add(l),i=bA.bind(null,i,o,l),o.then(i,i))}function dv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function fv(i,o,l,d,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ei(-1,1),o.tag=2,ss(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var vA=se.ReactCurrentOwner,xn=!1;function In(i,o,l,d){o.child=i===null?Dy(o,null,l,d):va(o,i.child,l,d)}function pv(i,o,l,d,p){l=l.render;var _=o.ref;return wa(o,p),d=ap(i,o,l,d,_,p),l=lp(),i!==null&&!xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,wi(i,o,p)):(vt&&l&&$f(o),o.flags|=1,In(i,o,d,p),o.child)}function mv(i,o,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!Fp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,gv(i,o,_,d,p)):(i=yh(l.type,null,d,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ml,l(T,d)&&i.ref===o.ref)return wi(i,o,p)}return o.flags|=1,i=hs(_,d),i.ref=o.ref,i.return=o,o.child=i}function gv(i,o,l,d,p){if(i!==null){var _=i.memoizedProps;if(Ml(_,d)&&i.ref===o.ref)if(xn=!1,o.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(xn=!0);else return o.lanes=i.lanes,wi(i,o,p)}return _p(i,o,l,d,p)}function _v(i,o,l){var d=o.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ca,Hn),Hn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ht(Ca,Hn),Hn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,ht(Ca,Hn),Hn|=d}else _!==null?(d=_.baseLanes|l,o.memoizedState=null):d=l,ht(Ca,Hn),Hn|=d;return In(i,o,p,l),o.child}function yv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function _p(i,o,l,d,p){var _=Nn(l)?co:hn.current;return _=ma(o,_),wa(o,p),l=ap(i,o,l,d,_,p),d=lp(),i!==null&&!xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,wi(i,o,p)):(vt&&d&&$f(o),o.flags|=1,In(i,o,l,p),o.child)}function vv(i,o,l,d,p){if(Nn(l)){var _=!0;Wc(o)}else _=!1;if(wa(o,p),o.stateNode===null)ah(i,o),av(o,l,d),pp(o,l,d,p),d=!0;else if(i===null){var T=o.stateNode,A=o.memoizedProps;T.props=A;var b=T.context,W=l.contextType;typeof W=="object"&&W!==null?W=ar(W):(W=Nn(l)?co:hn.current,W=ma(o,W));var J=l.getDerivedStateFromProps,ee=typeof J=="function"||typeof T.getSnapshotBeforeUpdate=="function";ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(A!==d||b!==W)&&lv(o,T,d,W),is=!1;var X=o.memoizedState;T.state=X,Jc(o,d,T,p),b=o.memoizedState,A!==d||X!==b||kn.current||is?(typeof J=="function"&&(fp(o,l,J,d),b=o.memoizedState),(A=is||ov(o,l,A,d,X,b,W))?(ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=b),T.props=d,T.state=b,T.context=W,d=A):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{T=o.stateNode,My(i,o),A=o.memoizedProps,W=o.type===o.elementType?A:Rr(o.type,A),T.props=W,ee=o.pendingProps,X=T.context,b=l.contextType,typeof b=="object"&&b!==null?b=ar(b):(b=Nn(l)?co:hn.current,b=ma(o,b));var ue=l.getDerivedStateFromProps;(J=typeof ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(A!==ee||X!==b)&&lv(o,T,d,b),is=!1,X=o.memoizedState,T.state=X,Jc(o,d,T,p);var fe=o.memoizedState;A!==ee||X!==fe||kn.current||is?(typeof ue=="function"&&(fp(o,l,ue,d),fe=o.memoizedState),(W=is||ov(o,l,W,d,X,fe,b)||!1)?(J||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,fe,b),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,fe,b)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=fe),T.props=d,T.state=fe,T.context=b,d=W):(typeof T.componentDidUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),d=!1)}return yp(i,o,l,d,_,p)}function yp(i,o,l,d,p,_){yv(i,o);var T=(o.flags&128)!==0;if(!d&&!T)return p&&Sy(o,l,!1),wi(i,o,_);d=o.stateNode,vA.current=o;var A=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&T?(o.child=va(o,i.child,null,_),o.child=va(o,null,A,_)):In(i,o,A,_),o.memoizedState=d.state,p&&Sy(o,l,!0),o.child}function Ev(i){var o=i.stateNode;o.pendingContext?Iy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Iy(i,o.context,!1),tp(i,o.containerInfo)}function wv(i,o,l,d,p){return ya(),Kf(p),o.flags|=256,In(i,o,l,d),o.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function Ep(i){return{baseLanes:i,cachePool:null,transitions:null}}function Iv(i,o,l){var d=o.pendingProps,p=Et.current,_=!1,T=(o.flags&128)!==0,A;if((A=T)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ht(Et,p&1),i===null)return Gf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=d.children,i=d.fallback,_?(d=o.mode,_=o.child,T={mode:"hidden",children:T},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=vh(T,d,0,null),i=wo(i,d,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Ep(l),o.memoizedState=vp,i):wp(o,T));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return EA(i,o,T,d,A,p,l);if(_){_=d.fallback,T=o.mode,p=i.child,A=p.sibling;var b={mode:"hidden",children:d.children};return(T&1)===0&&o.child!==p?(d=o.child,d.childLanes=0,d.pendingProps=b,o.deletions=null):(d=hs(p,b),d.subtreeFlags=p.subtreeFlags&14680064),A!==null?_=hs(A,_):(_=wo(_,T,l,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,T=i.child.memoizedState,T=T===null?Ep(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,o.memoizedState=vp,d}return _=i.child,i=_.sibling,d=hs(_,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=l),d.return=o,d.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=d,o.memoizedState=null,d}function wp(i,o){return o=vh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function oh(i,o,l,d){return d!==null&&Kf(d),va(o,i.child,null,l),i=wp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function EA(i,o,l,d,p,_,T){if(l)return o.flags&256?(o.flags&=-257,d=mp(Error(t(422))),oh(i,o,T,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=d.fallback,p=o.mode,d=vh({mode:"visible",children:d.children},p,0,null),_=wo(_,p,T,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,(o.mode&1)!==0&&va(o,i.child,null,T),o.child.memoizedState=Ep(T),o.memoizedState=vp,_);if((o.mode&1)===0)return oh(i,o,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var A=d.dgst;return d=A,_=Error(t(419)),d=mp(_,d,void 0),oh(i,o,T,d)}if(A=(T&i.childLanes)!==0,xn||A){if(d=Ht,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,vi(i,p),Nr(d,i,p,-1))}return Vp(),d=mp(Error(t(421))),oh(i,o,T,d)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=DA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,qn=es(p.nextSibling),$n=o,vt=!0,Ar=null,i!==null&&(sr[or++]=_i,sr[or++]=yi,sr[or++]=ho,_i=i.id,yi=i.overflow,ho=o),o=wp(o,d.children),o.flags|=4096,o)}function Tv(i,o,l){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),Jf(i.return,o,l)}function Ip(i,o,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function Sv(i,o,l){var d=o.pendingProps,p=d.revealOrder,_=d.tail;if(In(i,o,d.children,l),d=Et.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Tv(i,l,o);else if(i.tag===19)Tv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(ht(Et,d),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Zc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Ip(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Zc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Ip(o,!0,l,null,_);break;case"together":Ip(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ah(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function wi(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),_o|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=hs(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=hs(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function wA(i,o,l){switch(o.tag){case 3:Ev(o),ya();break;case 5:Fy(o);break;case 1:Nn(o.type)&&Wc(o);break;case 4:tp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,p=o.memoizedProps.value;ht(Qc,d._currentValue),d._currentValue=p;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(ht(Et,Et.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Iv(i,o,l):(ht(Et,Et.current&1),i=wi(i,o,l),i!==null?i.sibling:null);ht(Et,Et.current&1);break;case 19:if(d=(l&o.childLanes)!==0,(i.flags&128)!==0){if(d)return Sv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ht(Et,Et.current),d)break;return null;case 22:case 23:return o.lanes=0,_v(i,o,l)}return wi(i,o,l)}var Cv,Tp,Av,Rv;Cv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Tp=function(){},Av=function(i,o,l,d){var p=i.memoizedProps;if(p!==d){i=o.stateNode,mo(Gr.current);var _=null;switch(l){case"input":p=Xn(i,p),d=Xn(i,d),_=[];break;case"select":p=le({},p,{value:void 0}),d=le({},d,{value:void 0}),_=[];break;case"textarea":p=er(i,p),d=er(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Uc)}Ys(l,d);var T;l=null;for(W in p)if(!d.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var A=p[W];for(T in A)A.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?_||(_=[]):(_=_||[]).push(W,null));for(W in d){var b=d[W];if(A=p!=null?p[W]:void 0,d.hasOwnProperty(W)&&b!==A&&(b!=null||A!=null))if(W==="style")if(A){for(T in A)!A.hasOwnProperty(T)||b&&b.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in b)b.hasOwnProperty(T)&&A[T]!==b[T]&&(l||(l={}),l[T]=b[T])}else l||(_||(_=[]),_.push(W,l)),l=b;else W==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,A=A?A.__html:void 0,b!=null&&A!==b&&(_=_||[]).push(W,b)):W==="children"?typeof b!="string"&&typeof b!="number"||(_=_||[]).push(W,""+b):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(b!=null&&W==="onScroll"&&mt("scroll",i),_||A===b||(_=[])):(_=_||[]).push(W,b))}l&&(_=_||[]).push("style",l);var W=_;(o.updateQueue=W)&&(o.flags|=4)}},Rv=function(i,o,l,d){l!==d&&(o.flags|=4)};function Yl(i,o){if(!vt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function fn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,o}function IA(i,o,l){var d=o.pendingProps;switch(qf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(o),null;case 1:return Nn(o.type)&&Bc(),fn(o),null;case 3:return d=o.stateNode,Ia(),gt(kn),gt(hn),ip(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Gc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ar!==null&&(Op(Ar),Ar=null))),Tp(i,o),fn(o),null;case 5:np(o);var p=mo(ql.current);if(l=o.type,i!==null&&o.stateNode!=null)Av(i,o,l,d,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return fn(o),null}if(i=mo(Gr.current),Gc(o)){d=o.stateNode,l=o.type;var _=o.memoizedProps;switch(d[Hr]=o,d[Ul]=_,i=(o.mode&1)!==0,l){case"dialog":mt("cancel",d),mt("close",d);break;case"iframe":case"object":case"embed":mt("load",d);break;case"video":case"audio":for(p=0;p<Vl.length;p++)mt(Vl[p],d);break;case"source":mt("error",d);break;case"img":case"image":case"link":mt("error",d),mt("load",d);break;case"details":mt("toggle",d);break;case"input":ot(d,_),mt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},mt("invalid",d);break;case"textarea":jn(d,_),mt("invalid",d)}Ys(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var A=_[T];T==="children"?typeof A=="string"?d.textContent!==A&&(_.suppressHydrationWarning!==!0&&jc(d.textContent,A,i),p=["children",A]):typeof A=="number"&&d.textContent!==""+A&&(_.suppressHydrationWarning!==!0&&jc(d.textContent,A,i),p=["children",""+A]):s.hasOwnProperty(T)&&A!=null&&T==="onScroll"&&mt("scroll",d)}switch(l){case"input":en(d),vn(d,_,!0);break;case"textarea":en(d),zi(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Uc)}d=p,o.updateQueue=d,d!==null&&(o.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=St(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=T.createElement(l,{is:d.is}):(i=T.createElement(l),l==="select"&&(T=i,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):i=T.createElementNS(i,l),i[Hr]=o,i[Ul]=d,Cv(i,o,!1,!1),o.stateNode=i;e:{switch(T=Wi(l,d),l){case"dialog":mt("cancel",i),mt("close",i),p=d;break;case"iframe":case"object":case"embed":mt("load",i),p=d;break;case"video":case"audio":for(p=0;p<Vl.length;p++)mt(Vl[p],i);p=d;break;case"source":mt("error",i),p=d;break;case"img":case"image":case"link":mt("error",i),mt("load",i),p=d;break;case"details":mt("toggle",i),p=d;break;case"input":ot(i,d),p=Xn(i,d),mt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=le({},d,{value:void 0}),mt("invalid",i);break;case"textarea":jn(i,d),p=er(i,d),mt("invalid",i);break;default:p=d}Ys(l,p),A=p;for(_ in A)if(A.hasOwnProperty(_)){var b=A[_];_==="style"?Bi(i,b):_==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Gs(i,b)):_==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&mr(i,b):typeof b=="number"&&mr(i,""+b):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?b!=null&&_==="onScroll"&&mt("scroll",i):b!=null&&Z(i,_,b,T))}switch(l){case"input":en(i),vn(i,d,!1);break;case"textarea":en(i),zi(i);break;case"option":d.value!=null&&i.setAttribute("value",""+qe(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?Zn(i,!!d.multiple,_,!1):d.defaultValue!=null&&Zn(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Uc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return fn(o),null;case 6:if(i&&o.stateNode!=null)Rv(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(l=mo(ql.current),mo(Gr.current),Gc(o)){if(d=o.stateNode,l=o.memoizedProps,d[Hr]=o,(_=d.nodeValue!==l)&&(i=$n,i!==null))switch(i.tag){case 3:jc(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&jc(d.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Hr]=o,o.stateNode=d}return fn(o),null;case 13:if(gt(Et),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(vt&&qn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ny(),ya(),o.flags|=98560,_=!1;else if(_=Gc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Hr]=o}else ya(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;fn(o),_=!1}else Ar!==null&&(Op(Ar),Ar=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Et.current&1)!==0?Ut===0&&(Ut=3):Vp())),o.updateQueue!==null&&(o.flags|=4),fn(o),null);case 4:return Ia(),Tp(i,o),i===null&&Fl(o.stateNode.containerInfo),fn(o),null;case 10:return Xf(o.type._context),fn(o),null;case 17:return Nn(o.type)&&Bc(),fn(o),null;case 19:if(gt(Et),_=o.memoizedState,_===null)return fn(o),null;if(d=(o.flags&128)!==0,T=_.rendering,T===null)if(d)Yl(_,!1);else{if(Ut!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(T=Zc(i),T!==null){for(o.flags|=128,Yl(_,!1),d=T.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=l,l=o.child;l!==null;)_=l,i=d,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ht(Et,Et.current&1|2),o.child}i=i.sibling}_.tail!==null&&ct()>Aa&&(o.flags|=128,d=!0,Yl(_,!1),o.lanes=4194304)}else{if(!d)if(i=Zc(T),i!==null){if(o.flags|=128,d=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Yl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!vt)return fn(o),null}else 2*ct()-_.renderingStartTime>Aa&&l!==1073741824&&(o.flags|=128,d=!0,Yl(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(l=_.last,l!==null?l.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=ct(),o.sibling=null,l=Et.current,ht(Et,d?l&1|2:l&1),o):(fn(o),null);case 22:case 23:return Lp(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(Hn&1073741824)!==0&&(fn(o),o.subtreeFlags&6&&(o.flags|=8192)):fn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function TA(i,o){switch(qf(o),o.tag){case 1:return Nn(o.type)&&Bc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ia(),gt(kn),gt(hn),ip(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return np(o),null;case 13:if(gt(Et),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ya()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return gt(Et),null;case 4:return Ia(),null;case 10:return Xf(o.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var lh=!1,pn=!1,SA=typeof WeakSet=="function"?WeakSet:Set,de=null;function Sa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Ct(i,o,d)}else l.current=null}function Sp(i,o,l){try{l()}catch(d){Ct(i,o,d)}}var Pv=!1;function CA(i,o){if(Lf=Xi,i=oy(),Pf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,A=-1,b=-1,W=0,J=0,ee=i,X=null;t:for(;;){for(var ue;ee!==l||p!==0&&ee.nodeType!==3||(A=T+p),ee!==_||d!==0&&ee.nodeType!==3||(b=T+d),ee.nodeType===3&&(T+=ee.nodeValue.length),(ue=ee.firstChild)!==null;)X=ee,ee=ue;for(;;){if(ee===i)break t;if(X===l&&++W===p&&(A=T),X===_&&++J===d&&(b=T),(ue=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=ue}l=A===-1||b===-1?null:{start:A,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vf={focusedElem:i,selectionRange:l},Xi=!1,de=o;de!==null;)if(o=de,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,de=i;else for(;de!==null;){o=de;try{var fe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,Nt=fe.memoizedState,z=o.stateNode,M=z.getSnapshotBeforeUpdate(o.elementType===o.type?pe:Rr(o.type,pe),Nt);z.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){Ct(o,o.return,te)}if(i=o.sibling,i!==null){i.return=o.return,de=i;break}de=o.return}return fe=Pv,Pv=!1,fe}function Xl(i,o,l){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Sp(o,l,_)}p=p.next}while(p!==d)}}function uh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==o)}}function Cp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function kv(i){var o=i.alternate;o!==null&&(i.alternate=null,kv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Hr],delete o[Ul],delete o[zf],delete o[aA],delete o[lA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Nv(i){return i.tag===5||i.tag===3||i.tag===4}function xv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Nv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ap(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Uc));else if(d!==4&&(i=i.child,i!==null))for(Ap(i,o,l),i=i.sibling;i!==null;)Ap(i,o,l),i=i.sibling}function Rp(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Rp(i,o,l),i=i.sibling;i!==null;)Rp(i,o,l),i=i.sibling}var rn=null,Pr=!1;function os(i,o,l){for(l=l.child;l!==null;)bv(i,o,l),l=l.sibling}function bv(i,o,l){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(no,l)}catch{}switch(l.tag){case 5:pn||Sa(l,o);case 6:var d=rn,p=Pr;rn=null,os(i,o,l),rn=d,Pr=p,rn!==null&&(Pr?(i=rn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):rn.removeChild(l.stateNode));break;case 18:rn!==null&&(Pr?(i=rn,l=l.stateNode,i.nodeType===8?Uf(i.parentNode,l):i.nodeType===1&&Uf(i,l),Tr(i)):Uf(rn,l.stateNode));break;case 4:d=rn,p=Pr,rn=l.stateNode.containerInfo,Pr=!0,os(i,o,l),rn=d,Pr=p;break;case 0:case 11:case 14:case 15:if(!pn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Sp(l,o,T),p=p.next}while(p!==d)}os(i,o,l);break;case 1:if(!pn&&(Sa(l,o),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(A){Ct(l,o,A)}os(i,o,l);break;case 21:os(i,o,l);break;case 22:l.mode&1?(pn=(d=pn)||l.memoizedState!==null,os(i,o,l),pn=d):os(i,o,l);break;default:os(i,o,l)}}function Dv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new SA),o.forEach(function(d){var p=OA.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function kr(i,o){var l=o.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,T=o,A=T;e:for(;A!==null;){switch(A.tag){case 5:rn=A.stateNode,Pr=!1;break e;case 3:rn=A.stateNode.containerInfo,Pr=!0;break e;case 4:rn=A.stateNode.containerInfo,Pr=!0;break e}A=A.return}if(rn===null)throw Error(t(160));bv(_,T,p),rn=null,Pr=!1;var b=p.alternate;b!==null&&(b.return=null),p.return=null}catch(W){Ct(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Ov(o,i),o=o.sibling}function Ov(i,o){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(kr(o,i),Qr(i),d&4){try{Xl(3,i,i.return),uh(3,i)}catch(pe){Ct(i,i.return,pe)}try{Xl(5,i,i.return)}catch(pe){Ct(i,i.return,pe)}}break;case 1:kr(o,i),Qr(i),d&512&&l!==null&&Sa(l,l.return);break;case 5:if(kr(o,i),Qr(i),d&512&&l!==null&&Sa(l,l.return),i.flags&32){var p=i.stateNode;try{mr(p,"")}catch(pe){Ct(i,i.return,pe)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,A=i.type,b=i.updateQueue;if(i.updateQueue=null,b!==null)try{A==="input"&&_.type==="radio"&&_.name!=null&&Bo(p,_),Wi(A,T);var W=Wi(A,_);for(T=0;T<b.length;T+=2){var J=b[T],ee=b[T+1];J==="style"?Bi(p,ee):J==="dangerouslySetInnerHTML"?Gs(p,ee):J==="children"?mr(p,ee):Z(p,J,ee,W)}switch(A){case"input":un(p,_);break;case"textarea":oi(p,_);break;case"select":var X=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ue=_.value;ue!=null?Zn(p,!!_.multiple,ue,!1):X!==!!_.multiple&&(_.defaultValue!=null?Zn(p,!!_.multiple,_.defaultValue,!0):Zn(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ul]=_}catch(pe){Ct(i,i.return,pe)}}break;case 6:if(kr(o,i),Qr(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(pe){Ct(i,i.return,pe)}}break;case 3:if(kr(o,i),Qr(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Tr(o.containerInfo)}catch(pe){Ct(i,i.return,pe)}break;case 4:kr(o,i),Qr(i);break;case 13:kr(o,i),Qr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Np=ct())),d&4&&Dv(i);break;case 22:if(J=l!==null&&l.memoizedState!==null,i.mode&1?(pn=(W=pn)||J,kr(o,i),pn=W):kr(o,i),Qr(i),d&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!J&&(i.mode&1)!==0)for(de=i,J=i.child;J!==null;){for(ee=de=J;de!==null;){switch(X=de,ue=X.child,X.tag){case 0:case 11:case 14:case 15:Xl(4,X,X.return);break;case 1:Sa(X,X.return);var fe=X.stateNode;if(typeof fe.componentWillUnmount=="function"){d=X,l=X.return;try{o=d,fe.props=o.memoizedProps,fe.state=o.memoizedState,fe.componentWillUnmount()}catch(pe){Ct(d,l,pe)}}break;case 5:Sa(X,X.return);break;case 22:if(X.memoizedState!==null){Vv(ee);continue}}ue!==null?(ue.return=X,de=ue):Vv(ee)}J=J.sibling}e:for(J=null,ee=i;;){if(ee.tag===5){if(J===null){J=ee;try{p=ee.stateNode,W?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(A=ee.stateNode,b=ee.memoizedProps.style,T=b!=null&&b.hasOwnProperty("display")?b.display:null,A.style.display=Ks("display",T))}catch(pe){Ct(i,i.return,pe)}}}else if(ee.tag===6){if(J===null)try{ee.stateNode.nodeValue=W?"":ee.memoizedProps}catch(pe){Ct(i,i.return,pe)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===i)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===i)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===i)break e;J===ee&&(J=null),ee=ee.return}J===ee&&(J=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:kr(o,i),Qr(i),d&4&&Dv(i);break;case 21:break;default:kr(o,i),Qr(i)}}function Qr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Nv(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(mr(p,""),d.flags&=-33);var _=xv(i);Rp(i,_,p);break;case 3:case 4:var T=d.stateNode.containerInfo,A=xv(i);Ap(i,A,T);break;default:throw Error(t(161))}}catch(b){Ct(i,i.return,b)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function AA(i,o,l){de=i,Mv(i)}function Mv(i,o,l){for(var d=(i.mode&1)!==0;de!==null;){var p=de,_=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||lh;if(!T){var A=p.alternate,b=A!==null&&A.memoizedState!==null||pn;A=lh;var W=pn;if(lh=T,(pn=b)&&!W)for(de=p;de!==null;)T=de,b=T.child,T.tag===22&&T.memoizedState!==null?Fv(p):b!==null?(b.return=T,de=b):Fv(p);for(;_!==null;)de=_,Mv(_),_=_.sibling;de=p,lh=A,pn=W}Lv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,de=_):Lv(i)}}function Lv(i){for(;de!==null;){var o=de;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:pn||uh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!pn)if(l===null)d.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Rr(o.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Vy(o,_,d);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Vy(o,T,l)}break;case 5:var A=o.stateNode;if(l===null&&o.flags&4){l=A;var b=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var J=W.memoizedState;if(J!==null){var ee=J.dehydrated;ee!==null&&Tr(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||o.flags&512&&Cp(o)}catch(X){Ct(o,o.return,X)}}if(o===i){de=null;break}if(l=o.sibling,l!==null){l.return=o.return,de=l;break}de=o.return}}function Vv(i){for(;de!==null;){var o=de;if(o===i){de=null;break}var l=o.sibling;if(l!==null){l.return=o.return,de=l;break}de=o.return}}function Fv(i){for(;de!==null;){var o=de;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{uh(4,o)}catch(b){Ct(o,l,b)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var p=o.return;try{d.componentDidMount()}catch(b){Ct(o,p,b)}}var _=o.return;try{Cp(o)}catch(b){Ct(o,_,b)}break;case 5:var T=o.return;try{Cp(o)}catch(b){Ct(o,T,b)}}}catch(b){Ct(o,o.return,b)}if(o===i){de=null;break}var A=o.sibling;if(A!==null){A.return=o.return,de=A;break}de=o.return}}var RA=Math.ceil,ch=se.ReactCurrentDispatcher,Pp=se.ReactCurrentOwner,ur=se.ReactCurrentBatchConfig,Ke=0,Ht=null,Dt=null,sn=0,Hn=0,Ca=ts(0),Ut=0,Jl=null,_o=0,hh=0,kp=0,Zl=null,bn=null,Np=0,Aa=1/0,Ii=null,dh=!1,xp=null,as=null,fh=!1,ls=null,ph=0,eu=0,bp=null,mh=-1,gh=0;function Tn(){return(Ke&6)!==0?ct():mh!==-1?mh:mh=ct()}function us(i){return(i.mode&1)===0?1:(Ke&2)!==0&&sn!==0?sn&-sn:cA.transition!==null?(gh===0&&(gh=io()),gh):(i=$e,i!==0||(i=window.event,i=i===void 0?16:Pl(i.type)),i)}function Nr(i,o,l,d){if(50<eu)throw eu=0,bp=null,Error(t(185));Gi(i,l,d),((Ke&2)===0||i!==Ht)&&(i===Ht&&((Ke&2)===0&&(hh|=l),Ut===4&&cs(i,sn)),Dn(i,d),l===1&&Ke===0&&(o.mode&1)===0&&(Aa=ct()+500,$c&&rs()))}function Dn(i,o){var l=i.callbackNode;ci(i,o);var d=ro(i,i===Ht?sn:0);if(d===0)l!==null&&Tl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(l!=null&&Tl(l),o===1)i.tag===0?uA(Uv.bind(null,i)):Cy(Uv.bind(null,i)),sA(function(){(Ke&6)===0&&rs()}),l=null;else{switch(Qi(d)){case 1:l=to;break;case 4:l=$i;break;case 16:l=nr;break;case 536870912:l=gc;break;default:l=nr}l=Kv(l,jv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function jv(i,o){if(mh=-1,gh=0,(Ke&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ra()&&i.callbackNode!==l)return null;var d=ro(i,i===Ht?sn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=_h(i,d);else{o=d;var p=Ke;Ke|=2;var _=Bv();(Ht!==i||sn!==o)&&(Ii=null,Aa=ct()+500,vo(i,o));do try{NA();break}catch(A){zv(i,A)}while(!0);Yf(),ch.current=_,Ke=p,Dt!==null?o=0:(Ht=null,sn=0,o=Ut)}if(o!==0){if(o===2&&(p=zn(i),p!==0&&(d=p,o=Dp(i,p))),o===1)throw l=Jl,vo(i,0),cs(i,d),Dn(i,ct()),l;if(o===6)cs(i,d);else{if(p=i.current.alternate,(d&30)===0&&!PA(p)&&(o=_h(i,d),o===2&&(_=zn(i),_!==0&&(d=_,o=Dp(i,_))),o===1))throw l=Jl,vo(i,0),cs(i,d),Dn(i,ct()),l;switch(i.finishedWork=p,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Eo(i,bn,Ii);break;case 3:if(cs(i,d),(d&130023424)===d&&(o=Np+500-ct(),10<o)){if(ro(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Tn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=jf(Eo.bind(null,i,bn,Ii),o);break}Eo(i,bn,Ii);break;case 4:if(cs(i,d),(d&4194240)===d)break;for(o=i.eventTimes,p=-1;0<d;){var T=31-En(d);_=1<<T,T=o[T],T>p&&(p=T),d&=~_}if(d=p,d=ct()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*RA(d/1960))-d,10<d){i.timeoutHandle=jf(Eo.bind(null,i,bn,Ii),d);break}Eo(i,bn,Ii);break;case 5:Eo(i,bn,Ii);break;default:throw Error(t(329))}}}return Dn(i,ct()),i.callbackNode===l?jv.bind(null,i):null}function Dp(i,o){var l=Zl;return i.current.memoizedState.isDehydrated&&(vo(i,o).flags|=256),i=_h(i,o),i!==2&&(o=bn,bn=l,o!==null&&Op(o)),i}function Op(i){bn===null?bn=i:bn.push.apply(bn,i)}function PA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!Cr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function cs(i,o){for(o&=~kp,o&=~hh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-En(o),d=1<<l;i[l]=-1,o&=~d}}function Uv(i){if((Ke&6)!==0)throw Error(t(327));Ra();var o=ro(i,0);if((o&1)===0)return Dn(i,ct()),null;var l=_h(i,o);if(i.tag!==0&&l===2){var d=zn(i);d!==0&&(o=d,l=Dp(i,d))}if(l===1)throw l=Jl,vo(i,0),cs(i,o),Dn(i,ct()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Eo(i,bn,Ii),Dn(i,ct()),null}function Mp(i,o){var l=Ke;Ke|=1;try{return i(o)}finally{Ke=l,Ke===0&&(Aa=ct()+500,$c&&rs())}}function yo(i){ls!==null&&ls.tag===0&&(Ke&6)===0&&Ra();var o=Ke;Ke|=1;var l=ur.transition,d=$e;try{if(ur.transition=null,$e=1,i)return i()}finally{$e=d,ur.transition=l,Ke=o,(Ke&6)===0&&rs()}}function Lp(){Hn=Ca.current,gt(Ca)}function vo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,iA(l)),Dt!==null)for(l=Dt.return;l!==null;){var d=l;switch(qf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Bc();break;case 3:Ia(),gt(kn),gt(hn),ip();break;case 5:np(d);break;case 4:Ia();break;case 13:gt(Et);break;case 19:gt(Et);break;case 10:Xf(d.type._context);break;case 22:case 23:Lp()}l=l.return}if(Ht=i,Dt=i=hs(i.current,null),sn=Hn=o,Ut=0,Jl=null,kp=hh=_o=0,bn=Zl=null,po!==null){for(o=0;o<po.length;o++)if(l=po[o],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,d.next=T}l.pending=d}po=null}return i}function zv(i,o){do{var l=Dt;try{if(Yf(),eh.current=ih,th){for(var d=wt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}th=!1}if(go=0,qt=jt=wt=null,Hl=!1,Gl=0,Pp.current=null,l===null||l.return===null){Ut=1,Jl=o,Dt=null;break}e:{var _=i,T=l.return,A=l,b=o;if(o=sn,A.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var W=b,J=A,ee=J.tag;if((J.mode&1)===0&&(ee===0||ee===11||ee===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var ue=dv(T);if(ue!==null){ue.flags&=-257,fv(ue,T,A,_,o),ue.mode&1&&hv(_,W,o),o=ue,b=W;var fe=o.updateQueue;if(fe===null){var pe=new Set;pe.add(b),o.updateQueue=pe}else fe.add(b);break e}else{if((o&1)===0){hv(_,W,o),Vp();break e}b=Error(t(426))}}else if(vt&&A.mode&1){var Nt=dv(T);if(Nt!==null){(Nt.flags&65536)===0&&(Nt.flags|=256),fv(Nt,T,A,_,o),Kf(Ta(b,A));break e}}_=b=Ta(b,A),Ut!==4&&(Ut=2),Zl===null?Zl=[_]:Zl.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var z=uv(_,b,o);Ly(_,z);break e;case 1:A=b;var M=_.type,B=_.stateNode;if((_.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(as===null||!as.has(B)))){_.flags|=65536,o&=-o,_.lanes|=o;var te=cv(_,A,o);Ly(_,te);break e}}_=_.return}while(_!==null)}$v(l)}catch(_e){o=_e,Dt===l&&l!==null&&(Dt=l=l.return);continue}break}while(!0)}function Bv(){var i=ch.current;return ch.current=ih,i===null?ih:i}function Vp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Ht===null||(_o&268435455)===0&&(hh&268435455)===0||cs(Ht,sn)}function _h(i,o){var l=Ke;Ke|=2;var d=Bv();(Ht!==i||sn!==o)&&(Ii=null,vo(i,o));do try{kA();break}catch(p){zv(i,p)}while(!0);if(Yf(),Ke=l,ch.current=d,Dt!==null)throw Error(t(261));return Ht=null,sn=0,Ut}function kA(){for(;Dt!==null;)Wv(Dt)}function NA(){for(;Dt!==null&&!pc();)Wv(Dt)}function Wv(i){var o=Gv(i.alternate,i,Hn);i.memoizedProps=i.pendingProps,o===null?$v(i):Dt=o,Pp.current=null}function $v(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=IA(l,o,Hn),l!==null){Dt=l;return}}else{if(l=TA(l,o),l!==null){l.flags&=32767,Dt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ut=6,Dt=null;return}}if(o=o.sibling,o!==null){Dt=o;return}Dt=o=i}while(o!==null);Ut===0&&(Ut=5)}function Eo(i,o,l){var d=$e,p=ur.transition;try{ur.transition=null,$e=1,xA(i,o,l,d)}finally{ur.transition=p,$e=d}return null}function xA(i,o,l,d){do Ra();while(ls!==null);if((Ke&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(lt(i,_),i===Ht&&(Dt=Ht=null,sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||fh||(fh=!0,Kv(nr,function(){return Ra(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ur.transition,ur.transition=null;var T=$e;$e=1;var A=Ke;Ke|=4,Pp.current=null,CA(i,l),Ov(l,i),XC(Vf),Xi=!!Lf,Vf=Lf=null,i.current=l,AA(l),Ef(),Ke=A,$e=T,ur.transition=_}else i.current=l;if(fh&&(fh=!1,ls=i,ph=p),_=i.pendingLanes,_===0&&(as=null),_c(l.stateNode),Dn(i,ct()),o!==null)for(d=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(dh)throw dh=!1,i=xp,xp=null,i;return(ph&1)!==0&&i.tag!==0&&Ra(),_=i.pendingLanes,(_&1)!==0?i===bp?eu++:(eu=0,bp=i):eu=0,rs(),null}function Ra(){if(ls!==null){var i=Qi(ph),o=ur.transition,l=$e;try{if(ur.transition=null,$e=16>i?16:i,ls===null)var d=!1;else{if(i=ls,ls=null,ph=0,(Ke&6)!==0)throw Error(t(331));var p=Ke;for(Ke|=4,de=i.current;de!==null;){var _=de,T=_.child;if((de.flags&16)!==0){var A=_.deletions;if(A!==null){for(var b=0;b<A.length;b++){var W=A[b];for(de=W;de!==null;){var J=de;switch(J.tag){case 0:case 11:case 15:Xl(8,J,_)}var ee=J.child;if(ee!==null)ee.return=J,de=ee;else for(;de!==null;){J=de;var X=J.sibling,ue=J.return;if(kv(J),J===W){de=null;break}if(X!==null){X.return=ue,de=X;break}de=ue}}}var fe=_.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var Nt=pe.sibling;pe.sibling=null,pe=Nt}while(pe!==null)}}de=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,de=T;else e:for(;de!==null;){if(_=de,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Xl(9,_,_.return)}var z=_.sibling;if(z!==null){z.return=_.return,de=z;break e}de=_.return}}var M=i.current;for(de=M;de!==null;){T=de;var B=T.child;if((T.subtreeFlags&2064)!==0&&B!==null)B.return=T,de=B;else e:for(T=M;de!==null;){if(A=de,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:uh(9,A)}}catch(_e){Ct(A,A.return,_e)}if(A===T){de=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,de=te;break e}de=A.return}}if(Ke=p,rs(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(no,i)}catch{}d=!0}return d}finally{$e=l,ur.transition=o}}return!1}function qv(i,o,l){o=Ta(l,o),o=uv(i,o,1),i=ss(i,o,1),o=Tn(),i!==null&&(Gi(i,1,o),Dn(i,o))}function Ct(i,o,l){if(i.tag===3)qv(i,i,l);else for(;o!==null;){if(o.tag===3){qv(o,i,l);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(as===null||!as.has(d))){i=Ta(l,i),i=cv(o,i,1),o=ss(o,i,1),i=Tn(),o!==null&&(Gi(o,1,i),Dn(o,i));break}}o=o.return}}function bA(i,o,l){var d=i.pingCache;d!==null&&d.delete(o),o=Tn(),i.pingedLanes|=i.suspendedLanes&l,Ht===i&&(sn&l)===l&&(Ut===4||Ut===3&&(sn&130023424)===sn&&500>ct()-Np?vo(i,0):kp|=l),Dn(i,o)}function Hv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Yo,Yo<<=1,(Yo&130023424)===0&&(Yo=4194304)));var l=Tn();i=vi(i,o),i!==null&&(Gi(i,o,l),Dn(i,l))}function DA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Hv(i,l)}function OA(i,o){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),Hv(i,l)}var Gv;Gv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||kn.current)xn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return xn=!1,wA(i,o,l);xn=(i.flags&131072)!==0}else xn=!1,vt&&(o.flags&1048576)!==0&&Ay(o,Hc,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;ah(i,o),i=o.pendingProps;var p=ma(o,hn.current);wa(o,l),p=ap(null,o,d,i,p,l);var _=lp();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Nn(d)?(_=!0,Wc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ep(o),p.updater=sh,o.stateNode=p,p._reactInternals=o,pp(o,d,i,l),o=yp(null,o,d,!0,_,l)):(o.tag=0,vt&&_&&$f(o),In(null,o,p,l),o=o.child),o;case 16:d=o.elementType;e:{switch(ah(i,o),i=o.pendingProps,p=d._init,d=p(d._payload),o.type=d,p=o.tag=LA(d),i=Rr(d,i),p){case 0:o=_p(null,o,d,i,l);break e;case 1:o=vv(null,o,d,i,l);break e;case 11:o=pv(null,o,d,i,l);break e;case 14:o=mv(null,o,d,Rr(d.type,i),l);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Rr(d,p),_p(i,o,d,p,l);case 1:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Rr(d,p),vv(i,o,d,p,l);case 3:e:{if(Ev(o),i===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,p=_.element,My(i,o),Jc(o,d,null,l);var T=o.memoizedState;if(d=T.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Ta(Error(t(423)),o),o=wv(i,o,d,l,p);break e}else if(d!==p){p=Ta(Error(t(424)),o),o=wv(i,o,d,l,p);break e}else for(qn=es(o.stateNode.containerInfo.firstChild),$n=o,vt=!0,Ar=null,l=Dy(o,null,d,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ya(),d===p){o=wi(i,o,l);break e}In(i,o,d,l)}o=o.child}return o;case 5:return Fy(o),i===null&&Gf(o),d=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Ff(d,p)?T=null:_!==null&&Ff(d,_)&&(o.flags|=32),yv(i,o),In(i,o,T,l),o.child;case 6:return i===null&&Gf(o),null;case 13:return Iv(i,o,l);case 4:return tp(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=va(o,null,d,l):In(i,o,d,l),o.child;case 11:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Rr(d,p),pv(i,o,d,p,l);case 7:return In(i,o,o.pendingProps,l),o.child;case 8:return In(i,o,o.pendingProps.children,l),o.child;case 12:return In(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(d=o.type._context,p=o.pendingProps,_=o.memoizedProps,T=p.value,ht(Qc,d._currentValue),d._currentValue=T,_!==null)if(Cr(_.value,T)){if(_.children===p.children&&!kn.current){o=wi(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var A=_.dependencies;if(A!==null){T=_.child;for(var b=A.firstContext;b!==null;){if(b.context===d){if(_.tag===1){b=Ei(-1,l&-l),b.tag=2;var W=_.updateQueue;if(W!==null){W=W.shared;var J=W.pending;J===null?b.next=b:(b.next=J.next,J.next=b),W.pending=b}}_.lanes|=l,b=_.alternate,b!==null&&(b.lanes|=l),Jf(_.return,l,o),A.lanes|=l;break}b=b.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,A=T.alternate,A!==null&&(A.lanes|=l),Jf(T,l,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}In(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,d=o.pendingProps.children,wa(o,l),p=ar(p),d=d(p),o.flags|=1,In(i,o,d,l),o.child;case 14:return d=o.type,p=Rr(d,o.pendingProps),p=Rr(d.type,p),mv(i,o,d,p,l);case 15:return gv(i,o,o.type,o.pendingProps,l);case 17:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:Rr(d,p),ah(i,o),o.tag=1,Nn(d)?(i=!0,Wc(o)):i=!1,wa(o,l),av(o,d,p),pp(o,d,p,l),yp(null,o,d,!0,i,l);case 19:return Sv(i,o,l);case 22:return _v(i,o,l)}throw Error(t(156,o.tag))};function Kv(i,o){return Ko(i,o)}function MA(i,o,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(i,o,l,d){return new MA(i,o,l,d)}function Fp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function LA(i){if(typeof i=="function")return Fp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===D)return 11;if(i===Me)return 14}return 2}function hs(i,o){var l=i.alternate;return l===null?(l=cr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function yh(i,o,l,d,p,_){var T=2;if(d=i,typeof i=="function")Fp(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case x:return wo(l.children,p,_,o);case C:T=8,p|=8;break;case N:return i=cr(12,l,o,p|2),i.elementType=N,i.lanes=_,i;case k:return i=cr(13,l,o,p),i.elementType=k,i.lanes=_,i;case pt:return i=cr(19,l,o,p),i.elementType=pt,i.lanes=_,i;case Oe:return vh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case P:T=10;break e;case O:T=9;break e;case D:T=11;break e;case Me:T=14;break e;case De:T=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=cr(T,l,o,p),o.elementType=i,o.type=d,o.lanes=_,o}function wo(i,o,l,d){return i=cr(7,i,d,o),i.lanes=l,i}function vh(i,o,l,d){return i=cr(22,i,d,o),i.elementType=Oe,i.lanes=l,i.stateNode={isHidden:!1},i}function jp(i,o,l){return i=cr(6,i,null,o),i.lanes=l,i}function Up(i,o,l){return o=cr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function VA(i,o,l,d,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zp(i,o,l,d,p,_,T,A,b){return i=new VA(i,o,l,A,b),o===1?(o=1,_===!0&&(o|=8)):o=0,_=cr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(_),i}function FA(i,o,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:d==null?null:""+d,children:i,containerInfo:o,implementation:l}}function Qv(i){if(!i)return ns;i=i._reactInternals;e:{if(yr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Nn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Nn(l))return Ty(i,l,o)}return o}function Yv(i,o,l,d,p,_,T,A,b){return i=zp(l,d,!0,i,p,_,T,A,b),i.context=Qv(null),l=i.current,d=Tn(),p=us(l),_=Ei(d,p),_.callback=o??null,ss(l,_,p),i.current.lanes=p,Gi(i,p,d),Dn(i,d),i}function Eh(i,o,l,d){var p=o.current,_=Tn(),T=us(p);return l=Qv(l),o.context===null?o.context=l:o.pendingContext=l,o=Ei(_,T),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=ss(p,o,T),i!==null&&(Nr(i,p,T,_),Xc(i,p,T)),T}function wh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Xv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Bp(i,o){Xv(i,o),(i=i.alternate)&&Xv(i,o)}function jA(){return null}var Jv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Wp(i){this._internalRoot=i}Ih.prototype.render=Wp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Eh(i,o,null,null)},Ih.prototype.unmount=Wp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;yo(function(){Eh(null,i,null,null)}),o[mi]=null}};function Ih(i){this._internalRoot=i}Ih.prototype.unstable_scheduleHydration=function(i){if(i){var o=Ic();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Br.length&&o!==0&&o<Br[l].priority;l++);Br.splice(l,0,i),l===0&&Cc(i)}};function $p(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Th(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function UA(i,o,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var W=wh(T);_.call(W)}}var T=Yv(o,d,i,0,null,!1,!1,"",Zv);return i._reactRootContainer=T,i[mi]=T.current,Fl(i.nodeType===8?i.parentNode:i),yo(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var A=d;d=function(){var W=wh(b);A.call(W)}}var b=zp(i,0,!1,null,null,!1,!1,"",Zv);return i._reactRootContainer=b,i[mi]=b.current,Fl(i.nodeType===8?i.parentNode:i),yo(function(){Eh(o,b,l,d)}),b}function Sh(i,o,l,d,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var A=p;p=function(){var b=wh(T);A.call(b)}}Eh(o,T,i,p)}else T=UA(l,o,i,p,d);return wh(T)}Ec=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=qi(o.pendingLanes);l!==0&&(Ki(o,l|1),Dn(o,ct()),(Ke&6)===0&&(Aa=ct()+500,rs()))}break;case 13:yo(function(){var d=vi(i,1);if(d!==null){var p=Tn();Nr(d,i,1,p)}}),Bp(i,1)}},Xo=function(i){if(i.tag===13){var o=vi(i,134217728);if(o!==null){var l=Tn();Nr(o,i,134217728,l)}Bp(i,134217728)}},wc=function(i){if(i.tag===13){var o=us(i),l=vi(i,o);if(l!==null){var d=Tn();Nr(l,i,o,d)}Bp(i,o)}},Ic=function(){return $e},Tc=function(i,o){var l=$e;try{return $e=i,o()}finally{$e=l}},Xe=function(i,o,l){switch(o){case"input":if(un(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var d=l[o];if(d!==i&&d.form===i.form){var p=zc(d);if(!p)throw Error(t(90));jr(d),un(d,p)}}}break;case"textarea":oi(i,l);break;case"select":o=l.value,o!=null&&Zn(i,!!l.multiple,o,!1)}},Xs=Mp,vl=yo;var zA={usingClientEntryPoint:!1,Events:[zl,fa,zc,Ur,yl,Mp]},tu={findFiberByHostInstance:uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BA={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Il(i),i===null?null:i.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||jA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ch=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ch.isDisabled&&Ch.supportsFiber)try{no=Ch.inject(BA),Un=Ch}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zA,On.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$p(o))throw Error(t(200));return FA(i,o,null,l)},On.createRoot=function(i,o){if(!$p(i))throw Error(t(299));var l=!1,d="",p=Jv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=zp(i,1,!1,null,null,l,!1,d,p),i[mi]=o.current,Fl(i.nodeType===8?i.parentNode:i),new Wp(o)},On.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Il(o),i=i===null?null:i.stateNode,i},On.flushSync=function(i){return yo(i)},On.hydrate=function(i,o,l){if(!Th(o))throw Error(t(200));return Sh(null,i,o,!0,l)},On.hydrateRoot=function(i,o,l){if(!$p(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",T=Jv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=Yv(o,null,i,1,l??null,p,!1,_,T),i[mi]=o.current,Fl(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Ih(o)},On.render=function(i,o,l){if(!Th(o))throw Error(t(200));return Sh(null,i,o,!1,l)},On.unmountComponentAtNode=function(i){if(!Th(i))throw Error(t(40));return i._reactRootContainer?(yo(function(){Sh(null,null,i,!1,function(){i._reactRootContainer=null,i[mi]=null})}),!0):!1},On.unstable_batchedUpdates=Mp,On.unstable_renderSubtreeIntoContainer=function(i,o,l,d){if(!Th(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Sh(i,o,l,!1,d)},On.version="18.3.1-next-f1338f8080-20240426",On}var aE;function XA(){if(aE)return Gp.exports;aE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gp.exports=YA(),Gp.exports}var lE;function JA(){if(lE)return Ah;lE=1;var n=XA();return Ah.createRoot=n.createRoot,Ah.hydrateRoot=n.hydrateRoot,Ah}var ZA=JA();const eR="modulepreload",tR=function(n){return"/"+n},uE={},LI=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=u(t.map(m=>{if(m=tR(m),m in uE)return;uE[m]=!0;const y=m.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${w}`))return;const I=document.createElement("link");if(I.rel=y?"stylesheet":eR,y||(I.as="script"),I.crossOrigin="",I.href=m,f&&I.setAttribute("nonce",f),document.head.appendChild(I),y)return new Promise((R,L)=>{I.addEventListener("load",R),I.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return s.then(u=>{for(const h of u||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};/**
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
 */const nR=()=>{};var cE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw sl(e)},sl=function(n){return new Error("Firebase Database ("+VI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],h=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,h=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,w=(a&3)<<4|h>>4;let I=(h&15)<<2|m>>6,R=m&63;f||(R=64,u||(I=64)),r.push(t[y],t[w],t[I],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(FI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||m==null||w==null)throw new iR;const I=a<<2|h>>4;if(r.push(I),m!==64){const R=h<<4&240|m>>2;if(r.push(R),w!==64){const L=m<<6&192|w;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(n){const e=FI(n);return fg.encodeByteArray(e,!0)},Kh=function(n){return jI(n).replace(/\./g,"")},Qh=function(n){try{return fg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(n){return UI(void 0,n)}function UI(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oR(t)||(n[t]=UI(n[t],e[t]));return n}function oR(n){return n!=="__proto__"}/**
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
 */function aR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lR=()=>aR().__FIREBASE_DEFAULTS__,uR=()=>{if(typeof process>"u"||typeof cE>"u")return;const n=cE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},bd=()=>{try{return nR()||lR()||uR()||cR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zI=n=>{var e,t;return(t=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},BI=n=>{const e=zI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},WI=()=>{var n;return(n=bd())===null||n===void 0?void 0:n.config},$I=n=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function qI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kh(JSON.stringify(t)),Kh(JSON.stringify(u)),""].join(".")}const pu={};function hR(){const n={prod:[],emulator:[]};for(const e of Object.keys(pu))pu[e]?n.emulator.push(e):n.prod.push(e);return n}function dR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hE=!1;function mg(n,e){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||pu[n]===e||pu[n]||hE)return;pu[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=hR().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function h(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function f(I,R){I.setAttribute("width","24"),I.setAttribute("id",R),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function m(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{hE=!0,u()},I}function y(I,R){I.setAttribute("id",R),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=dR(r),R=t("text"),L=document.getElementById(R)||document.createElement("span"),V=t("learnmore"),U=document.getElementById(V)||document.createElement("a"),q=t("preprendIcon"),G=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const Z=I.element;h(Z),y(U,V);const se=m();f(G,q),Z.append(G,L,U,se),document.body.appendChild(Z)}a?(L.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function fR(){var n;const e=(n=bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gR(){const n=yn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _R(){return VI.NODE_ADMIN===!0}function yR(){return!fR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vR(){try{return typeof indexedDB=="object"}catch{return!1}}function ER(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="FirebaseError";class Fi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wR,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qu.prototype.create)}}class qu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?IR(a,r):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new Fi(s,h,r)}}function IR(n,e){return n.replace(TR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){return JSON.parse(n)}function zt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Au(Qh(a[0])||""),t=Au(Qh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},SR=function(n){const e=GI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},CR=function(n){const e=GI(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function xi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(dE(a)&&dE(u)){if(!xi(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function dE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let w=0;w<80;w++){w<40?w<20?(m=h^a&(u^h),y=1518500249):(m=a^u^h,y=1859775393):w<60?(m=a&u|h&(a|u),y=2400959708):(m=a^u^h,y=3395469782);const I=(s<<5|s>>>27)+m+f+y+r[w]&4294967295;f=h,h=u,u=(a<<30|a>>>2)&4294967295,a=s,s=I}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function RR(n,e){const t=new PR(n,e);return t.subscribe.bind(t)}class PR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Yp),s.error===void 0&&(s.error=Yp),s.complete===void 0&&(s.complete=Yp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yp(){}function $a(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function it(n){return n&&n._delegate?n._delegate:n}class ks{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Io="[DEFAULT]";/**
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
 */class xR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DR(e))try{this.getOrInitializeService({instanceIdentifier:Io})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Io){return this.instances.has(e)}getOptions(e=Io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Io){return this.component?this.component.multipleInstances?e:Io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bR(n){return n===Io?void 0:n}function DR(n){return n.instantiationMode==="EAGER"}/**
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
 */class OR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const MR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},LR=Be.INFO,VR={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},FR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=VR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=LR,this._logHandler=FR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const jR=(n,e)=>e.some(t=>n instanceof t);let fE,pE;function UR(){return fE||(fE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zR(){return pE||(pE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KI=new WeakMap,ym=new WeakMap,QI=new WeakMap,Xp=new WeakMap,_g=new WeakMap;function BR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Es(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&KI.set(t,n)}).catch(()=>{}),_g.set(e,n),e}function WR(n){if(ym.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});ym.set(n,e)}let vm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ym.get(n);if(e==="objectStoreNames")return n.objectStoreNames||QI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $R(n){vm=n(vm)}function qR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jp(this),e,...t);return QI.set(r,e.sort?e.sort():[e]),Es(r)}:zR().includes(n)?function(...e){return n.apply(Jp(this),e),Es(KI.get(this))}:function(...e){return Es(n.apply(Jp(this),e))}}function HR(n){return typeof n=="function"?qR(n):(n instanceof IDBTransaction&&WR(n),jR(n,UR())?new Proxy(n,vm):n)}function Es(n){if(n instanceof IDBRequest)return BR(n);if(Xp.has(n))return Xp.get(n);const e=HR(n);return e!==n&&(Xp.set(n,e),_g.set(e,n)),e}const Jp=n=>_g.get(n);function GR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),h=Es(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Es(u.result),f.oldVersion,f.newVersion,Es(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const KR=["get","getKey","getAll","getAllKeys","count"],QR=["put","add","delete","clear"],Zp=new Map;function mE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zp.get(e))return Zp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=QR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KR.includes(t)))return;const a=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),s&&f.done]))[0]};return Zp.set(e,a),a}$R(n=>({...n,get:(e,t,r)=>mE(e,t)||n.get(e,t,r),has:(e,t)=>!!mE(e,t)||n.has(e,t)}));/**
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
 */class YR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(XR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function XR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Em="@firebase/app",gE="0.13.2";/**
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
 */const bi=new Od("@firebase/app"),JR="@firebase/app-compat",ZR="@firebase/analytics-compat",e1="@firebase/analytics",t1="@firebase/app-check-compat",n1="@firebase/app-check",r1="@firebase/auth",i1="@firebase/auth-compat",s1="@firebase/database",o1="@firebase/data-connect",a1="@firebase/database-compat",l1="@firebase/functions",u1="@firebase/functions-compat",c1="@firebase/installations",h1="@firebase/installations-compat",d1="@firebase/messaging",f1="@firebase/messaging-compat",p1="@firebase/performance",m1="@firebase/performance-compat",g1="@firebase/remote-config",_1="@firebase/remote-config-compat",y1="@firebase/storage",v1="@firebase/storage-compat",E1="@firebase/firestore",w1="@firebase/ai",I1="@firebase/firestore-compat",T1="firebase",S1="11.10.0";/**
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
 */const wm="[DEFAULT]",C1={[Em]:"fire-core",[JR]:"fire-core-compat",[e1]:"fire-analytics",[ZR]:"fire-analytics-compat",[n1]:"fire-app-check",[t1]:"fire-app-check-compat",[r1]:"fire-auth",[i1]:"fire-auth-compat",[s1]:"fire-rtdb",[o1]:"fire-data-connect",[a1]:"fire-rtdb-compat",[l1]:"fire-fn",[u1]:"fire-fn-compat",[c1]:"fire-iid",[h1]:"fire-iid-compat",[d1]:"fire-fcm",[f1]:"fire-fcm-compat",[p1]:"fire-perf",[m1]:"fire-perf-compat",[g1]:"fire-rc",[_1]:"fire-rc-compat",[y1]:"fire-gcs",[v1]:"fire-gcs-compat",[E1]:"fire-fst",[I1]:"fire-fst-compat",[w1]:"fire-vertex","fire-js":"fire-js",[T1]:"fire-js-all"};/**
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
 */const Jh=new Map,A1=new Map,Im=new Map;function _E(n,e){try{n.container.addComponent(e)}catch(t){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Po(n){const e=n.name;if(Im.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,n);for(const t of Jh.values())_E(t,n);for(const t of A1.values())_E(t,n);return!0}function Md(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Gn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const R1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new qu("app","Firebase",R1);/**
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
 */class P1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=S1;function YI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(t||(t=WI()),!t)throw ws.create("no-options");const a=Jh.get(s);if(a){if(xi(t,a.options)&&xi(r,a.config))return a;throw ws.create("duplicate-app",{appName:s})}const u=new OR(s);for(const f of Im.values())u.addComponent(f);const h=new P1(t,r,u);return Jh.set(s,h),h}function yg(n=wm){const e=Jh.get(n);if(!e&&n===wm&&WI())return YI();if(!e)throw ws.create("no-app",{appName:n});return e}function Jr(n,e,t){var r;let s=(r=C1[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(h.join(" "));return}Po(new ks(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const k1="firebase-heartbeat-database",N1=1,Ru="firebase-heartbeat-store";let em=null;function XI(){return em||(em=GR(k1,N1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ru)}catch(t){console.warn(t)}}}}).catch(n=>{throw ws.create("idb-open",{originalErrorMessage:n.message})})),em}async function x1(n){try{const t=(await XI()).transaction(Ru),r=await t.objectStore(Ru).get(JI(n));return await t.done,r}catch(e){if(e instanceof Fi)bi.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(t.message)}}}async function yE(n,e){try{const r=(await XI()).transaction(Ru,"readwrite");await r.objectStore(Ru).put(e,JI(n)),await r.done}catch(t){if(t instanceof Fi)bi.warn(t.message);else{const r=ws.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bi.warn(r.message)}}}function JI(n){return`${n.name}!${n.options.appId}`}/**
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
 */const b1=1024,D1=30;class O1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=vE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>D1){const u=V1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vE(),{heartbeatsToSend:r,unsentEntries:s}=M1(this._heartbeatsCache.heartbeats),a=Kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return bi.warn(t),""}}}function vE(){return new Date().toISOString().substring(0,10)}function M1(n,e=b1){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),EE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),EE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class L1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vR()?ER().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await x1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return yE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return yE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function EE(n){return Kh(JSON.stringify({version:2,heartbeats:n})).length}function V1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function F1(n){Po(new ks("platform-logger",e=>new YR(e),"PRIVATE")),Po(new ks("heartbeat",e=>new O1(e),"PRIVATE")),Jr(Em,gE,n),Jr(Em,gE,"esm2017"),Jr("fire-js","")}F1("");function vg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ZI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j1=ZI,eT=new qu("auth","Firebase",ZI());/**
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
 */const Zh=new Od("@firebase/auth");function U1(n,...e){Zh.logLevel<=Be.WARN&&Zh.warn(`Auth (${Vo}): ${n}`,...e)}function Mh(n,...e){Zh.logLevel<=Be.ERROR&&Zh.error(`Auth (${Vo}): ${n}`,...e)}/**
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
 */function fr(n,...e){throw wg(n,...e)}function Or(n,...e){return wg(n,...e)}function Eg(n,e,t){const r=Object.assign(Object.assign({},j1()),{[e]:t});return new qu("auth","Firebase",r).create(e,{appName:n.name})}function Is(n){return Eg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function z1(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&fr(n,"argument-error"),Eg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return eT.create(n,...e)}function Re(n,e,...t){if(!n)throw wg(e,...t)}function Ai(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mh(e),new Error(e)}function Di(n,e){n||Ai(e)}/**
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
 */function Tm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function B1(){return wE()==="http:"||wE()==="https:"}function wE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function W1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B1()||mR()||"connection"in navigator)?navigator.onLine:!0}function $1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Di(t>e,"Short delay should be less than long delay!"),this.isMobile=gg()||HI()}get(){return W1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ig(n,e){Di(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const q1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const H1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],G1=new Hu(3e4,6e4);function Bs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ji(n,e,t,r,s={}){return nT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=ol(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return pR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&zs(n.emulatorConfig.host)&&(m.credentials="include"),tT.fetch()(await rT(n,n.config.apiHost,t,h),m)})}async function nT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},q1),e);try{const s=new Q1(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Rh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Rh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Rh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Eg(n,y,m);fr(n,y)}}catch(s){if(s instanceof Fi)throw s;fr(n,"network-request-failed",{message:String(s)})}}async function Ld(n,e,t,r,s={}){const a=await ji(n,e,t,r,s);return"mfaPendingCredential"in a&&fr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function rT(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?Ig(n.config,s):`${n.config.apiScheme}://${s}`;return H1.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function K1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Q1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Or(this.auth,"network-request-failed")),G1.get())})}}function Rh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Or(n,e,r);return s.customData._tokenResponse=t,s}function IE(n){return n!==void 0&&n.enterprise!==void 0}class Y1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return K1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function X1(n,e){return ji(n,"GET","/v2/recaptchaConfig",Bs(n,e))}/**
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
 */async function J1(n,e){return ji(n,"POST","/v1/accounts:delete",e)}async function ed(n,e){return ji(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function mu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z1(n,e=!1){const t=it(n),r=await t.getIdToken(e),s=Tg(r);Re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:mu(tm(s.auth_time)),issuedAtTime:mu(tm(s.iat)),expirationTime:mu(tm(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function tm(n){return Number(n)*1e3}function Tg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(Mh("Failed to decode base64 JWT payload"),null)}catch(s){return Mh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function TE(n){const e=Tg(n);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fi&&eP(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function eP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mu(this.lastLoginAt),this.creationTime=mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function td(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Pu(n,ed(t,{idToken:r}));Re(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?iT(a.providerUserInfo):[],h=rP(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Sm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function nP(n){const e=it(n);await td(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rP(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iT(n){return n.map(e=>{var{providerId:t}=e,r=vg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function iP(n,e){const t=await nT(n,{},async()=>{const r=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await rT(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:r};return n.emulatorConfig&&zs(n.emulatorConfig.host)&&(f.credentials="include"),tT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sP(n,e){return ji(n,"POST","/v2/accounts:revokeToken",Bs(n,e))}/**
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
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=TE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await iP(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ma;return r&&(Re(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Re(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Re(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return Ai("not implemented")}}/**
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
 */function fs(n,e){Re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=vg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Sm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Pu(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Z1(this,e)}reload(){return nP(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await td(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await Pu(this,J1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,h,f,m,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,L=(u=t.photoURL)!==null&&u!==void 0?u:void 0,V=(h=t.tenantId)!==null&&h!==void 0?h:void 0,U=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,q=(m=t.createdAt)!==null&&m!==void 0?m:void 0,G=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Z,emailVerified:se,isAnonymous:ae,providerData:he,stsTokenManager:x}=t;Re(Z&&x,e,"internal-error");const C=Ma.fromJSON(this.name,x);Re(typeof Z=="string",e,"internal-error"),fs(w,e.name),fs(I,e.name),Re(typeof se=="boolean",e,"internal-error"),Re(typeof ae=="boolean",e,"internal-error"),fs(R,e.name),fs(L,e.name),fs(V,e.name),fs(U,e.name),fs(q,e.name),fs(G,e.name);const N=new br({uid:Z,auth:e,email:I,emailVerified:se,displayName:w,isAnonymous:ae,photoURL:L,phoneNumber:R,tenantId:V,stsTokenManager:C,createdAt:q,lastLoginAt:G});return he&&Array.isArray(he)&&(N.providerData=he.map(P=>Object.assign({},P))),U&&(N._redirectEventId=U),N}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ma;s.updateFromServerResponse(t);const a=new br({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await td(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Re(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?iT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),h=new Ma;h.updateFromIdToken(r);const f=new br({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const SE=new Map;function Ri(n){Di(n instanceof Function,"Expected a class definition");let e=SE.get(n);return e?(Di(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,SE.set(n,e),e)}/**
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
 */class sT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sT.type="NONE";const CE=sT;/**
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
 */function Lh(n,e,t){return`firebase:${n}:${e}:${t}`}class La{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Lh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Lh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ed(this.auth,{idToken:e}).catch(()=>{});return t?br._fromGetAccountInfoResponse(this.auth,t,e):null}return br._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new La(Ri(CE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Ri(CE);const u=Lh(r,e.config.apiKey,e.name);let h=null;for(const m of t)try{const y=await m._get(u);if(y){let w;if(typeof y=="string"){const I=await ed(e,{idToken:y}).catch(()=>{});if(!I)break;w=await br._fromGetAccountInfoResponse(e,I,y)}else w=br._fromJSON(e,y);m!==a&&(h=w),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new La(a,e,r):(a=f[0],h&&await a._set(u,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new La(a,e,r))}}/**
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
 */function AE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hT(e))return"Blackberry";if(dT(e))return"Webos";if(aT(e))return"Safari";if((e.includes("chrome/")||lT(e))&&!e.includes("edge/"))return"Chrome";if(cT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oT(n=yn()){return/firefox\//i.test(n)}function aT(n=yn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lT(n=yn()){return/crios\//i.test(n)}function uT(n=yn()){return/iemobile/i.test(n)}function cT(n=yn()){return/android/i.test(n)}function hT(n=yn()){return/blackberry/i.test(n)}function dT(n=yn()){return/webos/i.test(n)}function Sg(n=yn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function oP(n=yn()){var e;return Sg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aP(){return gR()&&document.documentMode===10}function fT(n=yn()){return Sg(n)||cT(n)||dT(n)||hT(n)||/windows phone/i.test(n)||uT(n)}/**
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
 */function pT(n,e=[]){let t;switch(n){case"Browser":t=AE(yn());break;case"Worker":t=`${AE(yn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${r}`}/**
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
 */class lP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,h)=>{try{const f=e(a);u(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uP(n,e={}){return ji(n,"GET","/v2/passwordPolicy",Bs(n,e))}/**
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
 */const cP=6;class hP{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:cP,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class dP{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RE(this),this.idTokenSubscription=new RE(this),this.beforeStateQueue=new lP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ri(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await La.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ed(this,{idToken:e}),r=await br._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Gn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await td(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(Is(this));const t=e?it(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uP(this),t=new hP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await sP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ri(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[Ri(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&U1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ws(n){return it(n)}class RE{constructor(e){this.auth=e,this.observer=null,this.addObserver=RR(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fP(n){Vd=n}function mT(n){return Vd.loadJS(n)}function pP(){return Vd.recaptchaEnterpriseScript}function mP(){return Vd.gapiScript}function gP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _P{constructor(){this.enterprise=new yP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vP="recaptcha-enterprise",gT="NO_RECAPTCHA";class EP{constructor(e){this.type=vP,this.auth=Ws(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,h)=>{X1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new Y1(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{h(f)})})}function s(a,u,h){const f=window.grecaptcha;IE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(gT)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _P().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(h=>{if(!t&&IE(window.grecaptcha))s(h,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=pP();f.length!==0&&(f+=h),mT(f).then(()=>{s(h,a,u)}).catch(m=>{u(m)})}}).catch(h=>{u(h)})})}}async function PE(n,e,t,r=!1,s=!1){const a=new EP(n);let u;if(s)u=gT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Cm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await PE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await PE(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(u)})}/**
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
 */function wP(n,e){const t=Md(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(xi(a,e??{}))return s;fr(s,"already-initialized")}return t.initialize({options:e})}function IP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ri);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TP(n,e,t){const r=Ws(n);Re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=_T(e),{host:u,port:h}=SP(e),f=h===null?"":`:${h}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Re(xi(m,r.config.emulator)&&xi(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,zs(u)?(pg(`${a}//${u}${f}`),mg("Auth",!0)):CP()}function _T(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function SP(n){const e=_T(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:kE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:kE(u)}}}function kE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function CP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ai("not implemented")}_getIdTokenResponse(e){return Ai("not implemented")}_linkToIdToken(e,t){return Ai("not implemented")}_getReauthenticationResolver(e){return Ai("not implemented")}}async function AP(n,e){return ji(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RP(n,e){return Ld(n,"POST","/v1/accounts:signInWithPassword",Bs(n,e))}async function yT(n,e){return ji(n,"POST","/v1/accounts:sendOobCode",Bs(n,e))}async function PP(n,e){return yT(n,e)}async function kP(n,e){return yT(n,e)}/**
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
 */async function NP(n,e){return Ld(n,"POST","/v1/accounts:signInWithEmailLink",Bs(n,e))}async function xP(n,e){return Ld(n,"POST","/v1/accounts:signInWithEmailLink",Bs(n,e))}/**
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
 */class ku extends Cg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ku(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ku(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cm(e,t,"signInWithPassword",RP);case"emailLink":return NP(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cm(e,r,"signUpPassword",AP);case"emailLink":return xP(e,{idToken:t,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Va(n,e){return Ld(n,"POST","/v1/accounts:signInWithIdp",Bs(n,e))}/**
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
 */const bP="http://localhost";class ko extends Cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ko(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=vg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new ko(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Va(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Va(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Va(e,t)}buildRequest(){const e={requestUri:bP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
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
 */function DP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OP(n){const e=au(lu(n)).link,t=e?au(lu(e)).deep_link_id:null,r=au(lu(n)).deep_link_id;return(r?au(lu(r)).link:null)||r||t||e||n}class Ag{constructor(e){var t,r,s,a,u,h;const f=au(lu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,w=DP((s=f.mode)!==null&&s!==void 0?s:null);Re(m&&y&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=OP(e);try{return new Ag(t)}catch{return null}}}/**
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
 */class al{constructor(){this.providerId=al.PROVIDER_ID}static credential(e,t){return ku._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ag.parseLink(t);return Re(r,"argument-error"),ku._fromEmailAndCode(e,r.code,r.tenantId)}}al.PROVIDER_ID="password";al.EMAIL_PASSWORD_SIGN_IN_METHOD="password";al.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gu extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ps extends Gu{constructor(){super("facebook.com")}static credential(e){return ko._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ps.credential(e.oauthAccessToken)}catch{return null}}}ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";ps.PROVIDER_ID="facebook.com";/**
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
 */class Si extends Gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ko._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Si.credential(t,r)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class ms extends Gu{constructor(){super("github.com")}static credential(e){return ko._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
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
 */class gs extends Gu{constructor(){super("twitter.com")}static credential(e,t){return ko._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gs.credential(t,r)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
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
 */class qa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await br._fromIdTokenResponse(e,r,s),u=NE(r);return new qa({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=NE(r);return new qa({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function NE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class nd extends Fi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new nd(e,t,r,s)}}function vT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(n,a,e,r):a})}async function MP(n,e,t=!1){const r=await Pu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qa._forOperation(n,"link",r)}/**
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
 */async function LP(n,e,t=!1){const{auth:r}=n;if(Gn(r.app))return Promise.reject(Is(r));const s="reauthenticate";try{const a=await Pu(n,vT(r,s,e,n),t);Re(a.idToken,r,"internal-error");const u=Tg(a.idToken);Re(u,r,"internal-error");const{sub:h}=u;return Re(n.uid===h,r,"user-mismatch"),qa._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&fr(r,"user-mismatch"),a}}/**
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
 */async function ET(n,e,t=!1){if(Gn(n.app))return Promise.reject(Is(n));const r="signIn",s=await vT(n,r,e),a=await qa._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function VP(n,e){return ET(Ws(n),e)}/**
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
 */async function FP(n){const e=Ws(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jP(n,e,t){const r=Ws(n);await Cm(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",kP)}function UP(n,e,t){return Gn(n.app)?Promise.reject(Is(n)):VP(it(n),al.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&FP(n),r})}async function zP(n,e){const t=it(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await PP(t.auth,s);a!==n.email&&await n.reload()}function BP(n,e,t,r){return it(n).onIdTokenChanged(e,t,r)}function WP(n,e,t){return it(n).beforeAuthStateChanged(e,t)}function $P(n,e,t,r){return it(n).onAuthStateChanged(e,t,r)}function wT(n){return it(n).signOut()}const rd="__sak";/**
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
 */class IT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qP=1e3,HP=10;class TT extends IT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);aP()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}TT.type="LOCAL";const GP=TT;/**
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
 */class ST extends IT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ST.type="SESSION";const CT=ST;/**
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
 */function KP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(u).map(async m=>m(t.origin,a)),f=await KP(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fd.receivers=[];/**
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
 */function Pg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class QP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((h,f)=>{const m=Pg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(I.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Zr(){return window}function YP(n){Zr().location.href=n}/**
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
 */function AT(){return typeof Zr().WorkerGlobalScope<"u"&&typeof Zr().importScripts=="function"}async function XP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ZP(){return AT()?self:null}/**
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
 */const RT="firebaseLocalStorageDb",ek=1,id="firebaseLocalStorage",PT="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jd(n,e){return n.transaction([id],e?"readwrite":"readonly").objectStore(id)}function tk(){const n=indexedDB.deleteDatabase(RT);return new Ku(n).toPromise()}function Am(){const n=indexedDB.open(RT,ek);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(id,{keyPath:PT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(id)?e(r):(r.close(),await tk(),e(await Am()))})})}async function xE(n,e,t){const r=jd(n,!0).put({[PT]:e,value:t});return new Ku(r).toPromise()}async function nk(n,e){const t=jd(n,!1).get(e),r=await new Ku(t).toPromise();return r===void 0?null:r.value}function bE(n,e){const t=jd(n,!0).delete(e);return new Ku(t).toPromise()}const rk=800,ik=3;class kT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Am(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fd._getInstance(ZP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XP(),!this.activeServiceWorker)return;this.sender=new QP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Am();return await xE(e,rd,"1"),await bE(e,rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>nk(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=jd(s,!1).getAll();return new Ku(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kT.type="LOCAL";const sk=kT;new Hu(3e4,6e4);/**
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
 */function NT(n,e){return e?Ri(e):(Re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class kg extends Cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Va(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Va(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Va(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ok(n){return ET(n.auth,new kg(n),n.bypassAuthState)}function ak(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),LP(t,new kg(n),n.bypassAuthState)}async function lk(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),MP(t,new kg(n),n.bypassAuthState)}/**
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
 */class xT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ok;case"linkViaPopup":case"linkViaRedirect":return lk;case"reauthViaPopup":case"reauthViaRedirect":return ak;default:fr(this.auth,"internal-error")}}resolve(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uk=new Hu(2e3,1e4);async function ck(n,e,t){if(Gn(n.app))return Promise.reject(Or(n,"operation-not-supported-in-this-environment"));const r=Ws(n);z1(n,e,Rg);const s=NT(r,t);return new So(r,"signInViaPopup",e,s).executeNotNull()}class So extends xT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Di(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uk.get())};e()}}So.currentPopupAction=null;/**
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
 */const hk="pendingRedirect",Vh=new Map;class dk extends xT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vh.get(this.auth._key());if(!e){try{const r=await fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vh.set(this.auth._key(),e)}return this.bypassAuthState||Vh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fk(n,e){const t=gk(e),r=mk(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pk(n,e){Vh.set(n._key(),e)}function mk(n){return Ri(n._redirectPersistence)}function gk(n){return Lh(hk,n.config.apiKey,n.name)}async function _k(n,e,t=!1){if(Gn(n.app))return Promise.reject(Is(n));const r=Ws(n),s=NT(r,e),u=await new dk(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const yk=600*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ek(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Or(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yk&&this.cachedEventUids.clear(),this.cachedEventUids.has(DE(e))}saveEventToCache(e){this.cachedEventUids.add(DE(e)),this.lastProcessedEventTime=Date.now()}}function DE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ek(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bT(n);default:return!1}}/**
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
 */async function wk(n,e={}){return ji(n,"GET","/v1/projects",e)}/**
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
 */const Ik=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tk=/^https?/;async function Sk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wk(n);for(const t of e)try{if(Ck(t))return}catch{}fr(n,"unauthorized-domain")}function Ck(n){const e=Tm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!Tk.test(t))return!1;if(Ik.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ak=new Hu(3e4,6e4);function OE(){const n=Zr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Rk(n){return new Promise((e,t)=>{var r,s,a;function u(){OE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OE(),t(Or(n,"network-request-failed"))},timeout:Ak.get()})}if(!((s=(r=Zr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Zr().gapi)===null||a===void 0)&&a.load)u();else{const h=gP("iframefcb");return Zr()[h]=()=>{gapi.load?u():t(Or(n,"network-request-failed"))},mT(`${mP()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Fh=null,e})}let Fh=null;function Pk(n){return Fh=Fh||Rk(n),Fh}/**
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
 */const kk=new Hu(5e3,15e3),Nk="__/auth/iframe",xk="emulator/auth/iframe",bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ok(n){const e=n.config;Re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ig(e,xk):`https://${n.config.authDomain}/${Nk}`,r={apiKey:e.apiKey,appName:n.name,v:Vo},s=Dk.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ol(r).slice(1)}`}async function Mk(n){const e=await Pk(n),t=Zr().gapi;return Re(t,n,"internal-error"),e.open({where:document.body,url:Ok(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bk,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Or(n,"network-request-failed"),h=Zr().setTimeout(()=>{a(u)},kk.get());function f(){Zr().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const Lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vk=500,Fk=600,jk="_blank",Uk="http://localhost";class ME{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zk(n,e,t,r=Vk,s=Fk){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},Lk),{width:r.toString(),height:s.toString(),top:a,left:u}),m=yn().toLowerCase();t&&(h=lT(m)?jk:t),oT(m)&&(e=e||Uk,f.scrollbars="yes");const y=Object.entries(f).reduce((I,[R,L])=>`${I}${R}=${L},`,"");if(oP(m)&&h!=="_self")return Bk(e||"",h),new ME(null);const w=window.open(e||"",h,y);Re(w,n,"popup-blocked");try{w.focus()}catch{}return new ME(w)}function Bk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Wk="__/auth/handler",$k="emulator/auth/handler",qk=encodeURIComponent("fac");async function LE(n,e,t,r,s,a){Re(n.config.authDomain,n,"auth-domain-config-required"),Re(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vo,eventId:s};if(e instanceof Rg){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Yh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof Gu){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),m=f?`#${qk}=${encodeURIComponent(f)}`:"";return`${Hk(n)}?${ol(h).slice(1)}${m}`}function Hk({config:n}){return n.emulator?Ig(n,$k):`https://${n.authDomain}/${Wk}`}/**
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
 */const nm="webStorageSupport";class Gk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CT,this._completeRedirectFn=_k,this._overrideRedirectResult=pk}async _openPopup(e,t,r,s){var a;Di((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await LE(e,t,r,Tm(),s);return zk(e,u,Pg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await LE(e,t,r,Tm(),s);return YP(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Di(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Mk(e),r=new vk(e);return t.register("authEvent",s=>(Re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nm,{type:nm},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[nm];u!==void 0&&t(!!u),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fT()||aT()||Sg()}}const Kk=Gk;var VE="@firebase/auth",FE="1.10.8";/**
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
 */class Qk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Yk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xk(n){Po(new ks("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;Re(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pT(n)},m=new dP(r,s,a,f);return IP(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Po(new ks("auth-internal",e=>{const t=Ws(e.getProvider("auth").getImmediate());return(r=>new Qk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jr(VE,FE,Yk(n)),Jr(VE,FE,"esm2017")}/**
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
 */const Jk=300,Zk=$I("authIdTokenMaxAge")||Jk;let jE=null;const eN=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Zk)return;const s=t==null?void 0:t.token;jE!==s&&(jE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tN(n=yg()){const e=Md(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wP(n,{popupRedirectResolver:Kk,persistence:[sk,GP,CT]}),r=$I("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=eN(a.toString());WP(t,u,()=>u(t.currentUser)),BP(t,h=>u(h))}}const s=zI("auth");return s&&TP(t,`http://${s}`),t}function nN(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}fP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Or("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xk("Browser");var rN="firebase",iN="11.10.0";/**
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
 */Jr(rN,iN,"app");var UE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,DT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,C){function N(){}N.prototype=C.prototype,x.D=C.prototype,x.prototype=new N,x.prototype.constructor=x,x.C=function(P,O,D){for(var k=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)k[pt-2]=arguments[pt];return C.prototype[O].apply(P,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,C,N){N||(N=0);var P=Array(16);if(typeof C=="string")for(var O=0;16>O;++O)P[O]=C.charCodeAt(N++)|C.charCodeAt(N++)<<8|C.charCodeAt(N++)<<16|C.charCodeAt(N++)<<24;else for(O=0;16>O;++O)P[O]=C[N++]|C[N++]<<8|C[N++]<<16|C[N++]<<24;C=x.g[0],N=x.g[1],O=x.g[2];var D=x.g[3],k=C+(D^N&(O^D))+P[0]+3614090360&4294967295;C=N+(k<<7&4294967295|k>>>25),k=D+(O^C&(N^O))+P[1]+3905402710&4294967295,D=C+(k<<12&4294967295|k>>>20),k=O+(N^D&(C^N))+P[2]+606105819&4294967295,O=D+(k<<17&4294967295|k>>>15),k=N+(C^O&(D^C))+P[3]+3250441966&4294967295,N=O+(k<<22&4294967295|k>>>10),k=C+(D^N&(O^D))+P[4]+4118548399&4294967295,C=N+(k<<7&4294967295|k>>>25),k=D+(O^C&(N^O))+P[5]+1200080426&4294967295,D=C+(k<<12&4294967295|k>>>20),k=O+(N^D&(C^N))+P[6]+2821735955&4294967295,O=D+(k<<17&4294967295|k>>>15),k=N+(C^O&(D^C))+P[7]+4249261313&4294967295,N=O+(k<<22&4294967295|k>>>10),k=C+(D^N&(O^D))+P[8]+1770035416&4294967295,C=N+(k<<7&4294967295|k>>>25),k=D+(O^C&(N^O))+P[9]+2336552879&4294967295,D=C+(k<<12&4294967295|k>>>20),k=O+(N^D&(C^N))+P[10]+4294925233&4294967295,O=D+(k<<17&4294967295|k>>>15),k=N+(C^O&(D^C))+P[11]+2304563134&4294967295,N=O+(k<<22&4294967295|k>>>10),k=C+(D^N&(O^D))+P[12]+1804603682&4294967295,C=N+(k<<7&4294967295|k>>>25),k=D+(O^C&(N^O))+P[13]+4254626195&4294967295,D=C+(k<<12&4294967295|k>>>20),k=O+(N^D&(C^N))+P[14]+2792965006&4294967295,O=D+(k<<17&4294967295|k>>>15),k=N+(C^O&(D^C))+P[15]+1236535329&4294967295,N=O+(k<<22&4294967295|k>>>10),k=C+(O^D&(N^O))+P[1]+4129170786&4294967295,C=N+(k<<5&4294967295|k>>>27),k=D+(N^O&(C^N))+P[6]+3225465664&4294967295,D=C+(k<<9&4294967295|k>>>23),k=O+(C^N&(D^C))+P[11]+643717713&4294967295,O=D+(k<<14&4294967295|k>>>18),k=N+(D^C&(O^D))+P[0]+3921069994&4294967295,N=O+(k<<20&4294967295|k>>>12),k=C+(O^D&(N^O))+P[5]+3593408605&4294967295,C=N+(k<<5&4294967295|k>>>27),k=D+(N^O&(C^N))+P[10]+38016083&4294967295,D=C+(k<<9&4294967295|k>>>23),k=O+(C^N&(D^C))+P[15]+3634488961&4294967295,O=D+(k<<14&4294967295|k>>>18),k=N+(D^C&(O^D))+P[4]+3889429448&4294967295,N=O+(k<<20&4294967295|k>>>12),k=C+(O^D&(N^O))+P[9]+568446438&4294967295,C=N+(k<<5&4294967295|k>>>27),k=D+(N^O&(C^N))+P[14]+3275163606&4294967295,D=C+(k<<9&4294967295|k>>>23),k=O+(C^N&(D^C))+P[3]+4107603335&4294967295,O=D+(k<<14&4294967295|k>>>18),k=N+(D^C&(O^D))+P[8]+1163531501&4294967295,N=O+(k<<20&4294967295|k>>>12),k=C+(O^D&(N^O))+P[13]+2850285829&4294967295,C=N+(k<<5&4294967295|k>>>27),k=D+(N^O&(C^N))+P[2]+4243563512&4294967295,D=C+(k<<9&4294967295|k>>>23),k=O+(C^N&(D^C))+P[7]+1735328473&4294967295,O=D+(k<<14&4294967295|k>>>18),k=N+(D^C&(O^D))+P[12]+2368359562&4294967295,N=O+(k<<20&4294967295|k>>>12),k=C+(N^O^D)+P[5]+4294588738&4294967295,C=N+(k<<4&4294967295|k>>>28),k=D+(C^N^O)+P[8]+2272392833&4294967295,D=C+(k<<11&4294967295|k>>>21),k=O+(D^C^N)+P[11]+1839030562&4294967295,O=D+(k<<16&4294967295|k>>>16),k=N+(O^D^C)+P[14]+4259657740&4294967295,N=O+(k<<23&4294967295|k>>>9),k=C+(N^O^D)+P[1]+2763975236&4294967295,C=N+(k<<4&4294967295|k>>>28),k=D+(C^N^O)+P[4]+1272893353&4294967295,D=C+(k<<11&4294967295|k>>>21),k=O+(D^C^N)+P[7]+4139469664&4294967295,O=D+(k<<16&4294967295|k>>>16),k=N+(O^D^C)+P[10]+3200236656&4294967295,N=O+(k<<23&4294967295|k>>>9),k=C+(N^O^D)+P[13]+681279174&4294967295,C=N+(k<<4&4294967295|k>>>28),k=D+(C^N^O)+P[0]+3936430074&4294967295,D=C+(k<<11&4294967295|k>>>21),k=O+(D^C^N)+P[3]+3572445317&4294967295,O=D+(k<<16&4294967295|k>>>16),k=N+(O^D^C)+P[6]+76029189&4294967295,N=O+(k<<23&4294967295|k>>>9),k=C+(N^O^D)+P[9]+3654602809&4294967295,C=N+(k<<4&4294967295|k>>>28),k=D+(C^N^O)+P[12]+3873151461&4294967295,D=C+(k<<11&4294967295|k>>>21),k=O+(D^C^N)+P[15]+530742520&4294967295,O=D+(k<<16&4294967295|k>>>16),k=N+(O^D^C)+P[2]+3299628645&4294967295,N=O+(k<<23&4294967295|k>>>9),k=C+(O^(N|~D))+P[0]+4096336452&4294967295,C=N+(k<<6&4294967295|k>>>26),k=D+(N^(C|~O))+P[7]+1126891415&4294967295,D=C+(k<<10&4294967295|k>>>22),k=O+(C^(D|~N))+P[14]+2878612391&4294967295,O=D+(k<<15&4294967295|k>>>17),k=N+(D^(O|~C))+P[5]+4237533241&4294967295,N=O+(k<<21&4294967295|k>>>11),k=C+(O^(N|~D))+P[12]+1700485571&4294967295,C=N+(k<<6&4294967295|k>>>26),k=D+(N^(C|~O))+P[3]+2399980690&4294967295,D=C+(k<<10&4294967295|k>>>22),k=O+(C^(D|~N))+P[10]+4293915773&4294967295,O=D+(k<<15&4294967295|k>>>17),k=N+(D^(O|~C))+P[1]+2240044497&4294967295,N=O+(k<<21&4294967295|k>>>11),k=C+(O^(N|~D))+P[8]+1873313359&4294967295,C=N+(k<<6&4294967295|k>>>26),k=D+(N^(C|~O))+P[15]+4264355552&4294967295,D=C+(k<<10&4294967295|k>>>22),k=O+(C^(D|~N))+P[6]+2734768916&4294967295,O=D+(k<<15&4294967295|k>>>17),k=N+(D^(O|~C))+P[13]+1309151649&4294967295,N=O+(k<<21&4294967295|k>>>11),k=C+(O^(N|~D))+P[4]+4149444226&4294967295,C=N+(k<<6&4294967295|k>>>26),k=D+(N^(C|~O))+P[11]+3174756917&4294967295,D=C+(k<<10&4294967295|k>>>22),k=O+(C^(D|~N))+P[2]+718787259&4294967295,O=D+(k<<15&4294967295|k>>>17),k=N+(D^(O|~C))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+C&4294967295,x.g[1]=x.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+D&4294967295}r.prototype.u=function(x,C){C===void 0&&(C=x.length);for(var N=C-this.blockSize,P=this.B,O=this.h,D=0;D<C;){if(O==0)for(;D<=N;)s(this,x,D),D+=this.blockSize;if(typeof x=="string"){for(;D<C;)if(P[O++]=x.charCodeAt(D++),O==this.blockSize){s(this,P),O=0;break}}else for(;D<C;)if(P[O++]=x[D++],O==this.blockSize){s(this,P),O=0;break}}this.h=O,this.o+=C},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var C=1;C<x.length-8;++C)x[C]=0;var N=8*this.o;for(C=x.length-8;C<x.length;++C)x[C]=N&255,N/=256;for(this.u(x),x=Array(16),C=N=0;4>C;++C)for(var P=0;32>P;P+=8)x[N++]=this.g[C]>>>P&255;return x};function a(x,C){var N=h;return Object.prototype.hasOwnProperty.call(N,x)?N[x]:N[x]=C(x)}function u(x,C){this.h=C;for(var N=[],P=!0,O=x.length-1;0<=O;O--){var D=x[O]|0;P&&D==C||(N[O]=D,P=!1)}this.g=N}var h={};function f(x){return-128<=x&&128>x?a(x,function(C){return new u([C|0],0>C?-1:0)}):new u([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return w;if(0>x)return U(m(-x));for(var C=[],N=1,P=0;x>=N;P++)C[P]=x/N|0,N*=4294967296;return new u(C,0)}function y(x,C){if(x.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(x.charAt(0)=="-")return U(y(x.substring(1),C));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=m(Math.pow(C,8)),P=w,O=0;O<x.length;O+=8){var D=Math.min(8,x.length-O),k=parseInt(x.substring(O,O+D),C);8>D?(D=m(Math.pow(C,D)),P=P.j(D).add(m(k))):(P=P.j(N),P=P.add(m(k)))}return P}var w=f(0),I=f(1),R=f(16777216);n=u.prototype,n.m=function(){if(V(this))return-U(this).m();for(var x=0,C=1,N=0;N<this.g.length;N++){var P=this.i(N);x+=(0<=P?P:4294967296+P)*C,C*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(L(this))return"0";if(V(this))return"-"+U(this).toString(x);for(var C=m(Math.pow(x,6)),N=this,P="";;){var O=se(N,C).g;N=q(N,O.j(C));var D=((0<N.g.length?N.g[0]:N.h)>>>0).toString(x);if(N=O,L(N))return D+P;for(;6>D.length;)D="0"+D;P=D+P}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function L(x){if(x.h!=0)return!1;for(var C=0;C<x.g.length;C++)if(x.g[C]!=0)return!1;return!0}function V(x){return x.h==-1}n.l=function(x){return x=q(this,x),V(x)?-1:L(x)?0:1};function U(x){for(var C=x.g.length,N=[],P=0;P<C;P++)N[P]=~x.g[P];return new u(N,~x.h).add(I)}n.abs=function(){return V(this)?U(this):this},n.add=function(x){for(var C=Math.max(this.g.length,x.g.length),N=[],P=0,O=0;O<=C;O++){var D=P+(this.i(O)&65535)+(x.i(O)&65535),k=(D>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);P=k>>>16,D&=65535,k&=65535,N[O]=k<<16|D}return new u(N,N[N.length-1]&-2147483648?-1:0)};function q(x,C){return x.add(U(C))}n.j=function(x){if(L(this)||L(x))return w;if(V(this))return V(x)?U(this).j(U(x)):U(U(this).j(x));if(V(x))return U(this.j(U(x)));if(0>this.l(R)&&0>x.l(R))return m(this.m()*x.m());for(var C=this.g.length+x.g.length,N=[],P=0;P<2*C;P++)N[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<x.g.length;O++){var D=this.i(P)>>>16,k=this.i(P)&65535,pt=x.i(O)>>>16,Me=x.i(O)&65535;N[2*P+2*O]+=k*Me,G(N,2*P+2*O),N[2*P+2*O+1]+=D*Me,G(N,2*P+2*O+1),N[2*P+2*O+1]+=k*pt,G(N,2*P+2*O+1),N[2*P+2*O+2]+=D*pt,G(N,2*P+2*O+2)}for(P=0;P<C;P++)N[P]=N[2*P+1]<<16|N[2*P];for(P=C;P<2*C;P++)N[P]=0;return new u(N,0)};function G(x,C){for(;(x[C]&65535)!=x[C];)x[C+1]+=x[C]>>>16,x[C]&=65535,C++}function Z(x,C){this.g=x,this.h=C}function se(x,C){if(L(C))throw Error("division by zero");if(L(x))return new Z(w,w);if(V(x))return C=se(U(x),C),new Z(U(C.g),U(C.h));if(V(C))return C=se(x,U(C)),new Z(U(C.g),C.h);if(30<x.g.length){if(V(x)||V(C))throw Error("slowDivide_ only works with positive integers.");for(var N=I,P=C;0>=P.l(x);)N=ae(N),P=ae(P);var O=he(N,1),D=he(P,1);for(P=he(P,2),N=he(N,2);!L(P);){var k=D.add(P);0>=k.l(x)&&(O=O.add(N),D=k),P=he(P,1),N=he(N,1)}return C=q(x,O.j(C)),new Z(O,C)}for(O=w;0<=x.l(C);){for(N=Math.max(1,Math.floor(x.m()/C.m())),P=Math.ceil(Math.log(N)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),D=m(N),k=D.j(C);V(k)||0<k.l(x);)N-=P,D=m(N),k=D.j(C);L(D)&&(D=I),O=O.add(D),x=q(x,k)}return new Z(O,x)}n.A=function(x){return se(this,x).h},n.and=function(x){for(var C=Math.max(this.g.length,x.g.length),N=[],P=0;P<C;P++)N[P]=this.i(P)&x.i(P);return new u(N,this.h&x.h)},n.or=function(x){for(var C=Math.max(this.g.length,x.g.length),N=[],P=0;P<C;P++)N[P]=this.i(P)|x.i(P);return new u(N,this.h|x.h)},n.xor=function(x){for(var C=Math.max(this.g.length,x.g.length),N=[],P=0;P<C;P++)N[P]=this.i(P)^x.i(P);return new u(N,this.h^x.h)};function ae(x){for(var C=x.g.length+1,N=[],P=0;P<C;P++)N[P]=x.i(P)<<1|x.i(P-1)>>>31;return new u(N,x.h)}function he(x,C){var N=C>>5;C%=32;for(var P=x.g.length-N,O=[],D=0;D<P;D++)O[D]=0<C?x.i(D+N)>>>C|x.i(D+N+1)<<32-C:x.i(D+N);return new u(O,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,DT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Ts=u}).apply(typeof UE<"u"?UE:typeof self<"u"?self:typeof window<"u"?window:{});var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OT,uu,MT,jh,Rm,LT,VT,FT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,E){return c==Array.prototype||c==Object.prototype||(c[g]=E.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ph=="object"&&Ph];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var E=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var j=c[S];if(!(j in E))break e;E=E[j]}c=c[c.length-1],S=E[c],g=g(S),g!=S&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var E=0,S=!1,j={next:function(){if(!S&&E<c.length){var $=E++;return{value:g($,c[$]),done:!1}}return S=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,E){return c.call.apply(c.bind,arguments)}function w(c,g,E){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,S),c.apply(g,j)}}return function(){return c.apply(g,arguments)}}function I(c,g,E){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,I.apply(null,arguments)}function R(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var S=E.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function L(c,g){function E(){}E.prototype=g.prototype,c.aa=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(S,j,$){for(var ie=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)ie[nt-2]=arguments[nt];return g.prototype[j].apply(S,ie)}}function V(c){const g=c.length;if(0<g){const E=Array(g);for(let S=0;S<g;S++)E[S]=c[S];return E}return[]}function U(c,g){for(let E=1;E<arguments.length;E++){const S=arguments[E];if(f(S)){const j=c.length||0,$=S.length||0;c.length=j+$;for(let ie=0;ie<$;ie++)c[j+ie]=S[ie]}else c.push(S)}}class q{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function G(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function se(c){return se[" "](c),c}se[" "]=function(){};var ae=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function he(c,g,E){for(const S in c)g.call(E,c[S],S,c)}function x(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function C(c){const g={};for(const E in c)g[E]=c[E];return g}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(c,g){let E,S;for(let j=1;j<arguments.length;j++){S=arguments[j];for(E in S)c[E]=S[E];for(let $=0;$<N.length;$++)E=N[$],Object.prototype.hasOwnProperty.call(S,E)&&(c[E]=S[E])}}function O(c){var g=1;c=c.split(":");const E=[];for(;0<g&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function D(c){h.setTimeout(()=>{throw c},0)}function k(){var c=we;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class pt{constructor(){this.h=this.g=null}add(g,E){const S=Me.get();S.set(g,E),this.h?this.h.next=S:this.g=S,this.h=S}}var Me=new q(()=>new De,c=>c.reset());class De{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,re=!1,we=new pt,le=()=>{const c=h.Promise.resolve(void 0);Oe=()=>{c.then(F)}};var F=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(E){D(E)}var g=Me;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var ve=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};h.addEventListener("test",E,g),h.removeEventListener("test",E,g)}catch{}return c})();function Te(c,g){if(ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ae){e:{try{se(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Te.aa.h.call(this)}}L(Te,ge);var Le={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ee="closure_listenable_"+(1e6*Math.random()|0),qe=0;function Je(c,g,E,S,j){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!S,this.ha=j,this.key=++qe,this.da=this.fa=!1}function at(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function en(c){this.src=c,this.g={},this.h=0}en.prototype.add=function(c,g,E,S,j){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ie=Ae(c,g,S,j);return-1<ie?(g=c[ie],E||(g.fa=!1)):(g=new Je(g,this.src,$,!!S,j),g.fa=E,c.push(g)),g};function jr(c,g){var E=g.type;if(E in c.g){var S=c.g[E],j=Array.prototype.indexOf.call(S,g,void 0),$;($=0<=j)&&Array.prototype.splice.call(S,j,1),$&&(at(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Ae(c,g,E,S){for(var j=0;j<c.length;++j){var $=c[j];if(!$.da&&$.listener==g&&$.capture==!!E&&$.ha==S)return j}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),ot={};function Bo(c,g,E,S,j){if(Array.isArray(g)){for(var $=0;$<g.length;$++)Bo(c,g[$],E,S,j);return null}return E=zi(E),c&&c[Ee]?c.K(g,E,m(S)?!!S.capture:!1,j):un(c,g,E,!1,S,j)}function un(c,g,E,S,j,$){if(!g)throw Error("Invalid event type");var ie=m(j)?!!j.capture:!!j,nt=jn(c);if(nt||(c[Xn]=nt=new en(c)),E=nt.add(g,E,S,ie,$),E.proxy)return E;if(S=vn(),E.proxy=S,S.src=c,S.listener=E,c.addEventListener)ve||(j=ie),j===void 0&&(j=!1),c.addEventListener(g.toString(),S,j);else if(c.attachEvent)c.attachEvent(Zn(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return E}function vn(){function c(E){return g.call(c.src,c.listener,E)}const g=er;return c}function Fn(c,g,E,S,j){if(Array.isArray(g))for(var $=0;$<g.length;$++)Fn(c,g[$],E,S,j);else S=m(S)?!!S.capture:!!S,E=zi(E),c&&c[Ee]?(c=c.i,g=String(g).toString(),g in c.g&&($=c.g[g],E=Ae($,E,S,j),-1<E&&(at($[E]),Array.prototype.splice.call($,E,1),$.length==0&&(delete c.g[g],c.h--)))):c&&(c=jn(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ae(g,E,S,j)),(E=-1<c?g[c]:null)&&Jn(E))}function Jn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Ee])jr(g.i,c);else{var E=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(E,S,c.capture):g.detachEvent?g.detachEvent(Zn(E),S):g.addListener&&g.removeListener&&g.removeListener(S),(E=jn(g))?(jr(E,c),E.h==0&&(E.src=null,g[Xn]=null)):at(c)}}}function Zn(c){return c in ot?ot[c]:ot[c]="on"+c}function er(c,g){if(c.da)c=!0;else{g=new Te(g,this);var E=c.listener,S=c.ha||c.src;c.fa&&Jn(c),c=E.call(S,g)}return c}function jn(c){return c=c[Xn],c instanceof en?c:null}var oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function zi(c){return typeof c=="function"?c:(c[oi]||(c[oi]=function(g){return c.handleEvent(g)}),c[oi])}function St(){Q.call(this),this.i=new en(this),this.M=this,this.F=null}L(St,Q),St.prototype[Ee]=!0,St.prototype.removeEventListener=function(c,g,E,S){Fn(this,c,g,E,S)};function Pt(c,g){var E,S=c.F;if(S)for(E=[];S;S=S.F)E.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new ge(g,c);else if(g instanceof ge)g.target=g.target||c;else{var j=g;g=new ge(S,c),P(g,j)}if(j=!0,E)for(var $=E.length-1;0<=$;$--){var ie=g.g=E[$];j=tr(ie,S,!0,g)&&j}if(ie=g.g=c,j=tr(ie,S,!0,g)&&j,j=tr(ie,S,!1,g)&&j,E)for($=0;$<E.length;$++)ie=g.g=E[$],j=tr(ie,S,!1,g)&&j}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var E=c.g[g],S=0;S<E.length;S++)at(E[S]);delete c.g[g],c.h--}}this.F=null},St.prototype.K=function(c,g,E,S){return this.i.add(String(c),g,!1,E,S)},St.prototype.L=function(c,g,E,S){return this.i.add(String(c),g,!0,E,S)};function tr(c,g,E,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,$=0;$<g.length;++$){var ie=g[$];if(ie&&!ie.da&&ie.capture==E){var nt=ie.listener,Ft=ie.ha||ie.src;ie.fa&&jr(c.i,ie),j=nt.call(Ft,S)!==!1&&j}}return j&&!S.defaultPrevented}function Gs(c,g,E){if(typeof c=="function")E&&(c=I(c,E));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function mr(c){c.g=Gs(()=>{c.g=null,c.i&&(c.i=!1,mr(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ai extends Q{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:mr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(c){Q.call(this),this.h=c,this.g={}}L(li,Q);var Ks=[];function Bi(c){he(c.g,function(g,E){this.g.hasOwnProperty(E)&&Jn(g)},c),c.g={}}li.prototype.N=function(){li.aa.N.call(this),Bi(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qs=h.JSON.stringify,Ys=h.JSON.parse,Wi=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function H(){}H.prototype.h=null;function me(c){return c.h||(c.h=c.i())}function Xe(){}var tt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cn(){ge.call(this,"d")}L(cn,ge);function Wo(){ge.call(this,"c")}L(Wo,ge);var Ur={},yl=null;function Xs(){return yl=yl||new St}Ur.La="serverreachability";function vl(c){ge.call(this,Ur.La,c)}L(vl,ge);function ui(c){const g=Xs();Pt(g,new vl(g))}Ur.STAT_EVENT="statevent";function El(c,g){ge.call(this,Ur.STAT_EVENT,c),this.stat=g}L(El,ge);function kt(c){const g=Xs();Pt(g,new El(g,c))}Ur.Ma="timingevent";function $o(c,g){ge.call(this,Ur.Ma,c),this.size=g}L($o,ge);function gr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function Js(){this.g=!0}Js.prototype.xa=function(){this.g=!1};function Zs(c,g,E,S,j,$){c.info(function(){if(c.g)if($)for(var ie="",nt=$.split("&"),Ft=0;Ft<nt.length;Ft++){var He=nt[Ft].split("=");if(1<He.length){var $t=He[0];He=He[1];var bt=$t.split("_");ie=2<=bt.length&&bt[1]=="type"?ie+($t+"="+He+"&"):ie+($t+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+S+") [attempt "+j+"]: "+g+`
`+E+`
`+ie})}function qo(c,g,E,S,j,$,ie){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+j+"]: "+g+`
`+E+`
`+$+" "+ie})}function _r(c,g,E,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+vf(c,E)+(S?" "+S:"")})}function wl(c,g){c.info(function(){return"TIMEOUT: "+g})}Js.prototype.info=function(){};function vf(c,g){if(!c.g)return g;if(!g)return null;try{var E=JSON.parse(g);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var S=E[c];if(!(2>S.length)){var j=S[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return Qs(E)}catch{return g}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yr;function eo(){}L(eo,H),eo.prototype.g=function(){return new XMLHttpRequest},eo.prototype.i=function(){return{}},yr=new eo;function vr(c,g,E,S){this.j=c,this.i=g,this.l=E,this.R=S||1,this.U=new li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}var Il={},Go={};function Ko(c,g,E){c.L=1,c.v=Ki(zn(g)),c.m=E,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),ct(c),c.A=zn(c.v);var E=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Yi(E.i,"t",S),c.C=0,E=c.j.J,c.h=new fc,c.g=xc(c.j,E?g:null,!c.m),0<c.O&&(c.M=new ai(I(c.Y,c,c.g),c.O)),g=c.U,E=c.g,S=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ks[0]=j.toString()),j=Ks);for(var $=0;$<j.length;$++){var ie=Bo(E,j[$],S||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ui(),Zs(c.i,c.u,c.A,c.l,c.R,c.m)}vr.prototype.ca=function(c){c=c.target;const g=this.M;g&&Pn(c)==3?g.j():this.Y(c)},vr.prototype.Y=function(c){try{if(c==this.g)e:{const bt=Pn(this.g);var g=this.g.Ba();const ir=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||bt!=4||g==7||(g==8||0>=ir?ui(3):ui(2)),to(this);var E=this.g.Z();this.X=E;t:if(pc(this)){var S=kl(this.g);c="";var j=S.length,$=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),$i(this);var ie="";break t}this.h.i=new h.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!($&&g==j-1)});S.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=E==200,qo(this.i,this.u,this.A,this.l,this.R,bt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var nt,Ft=this.g;if((nt=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(nt)){var He=nt;break t}}He=null}if(E=He)_r(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,E);else{this.o=!1,this.s=3,kt(12),nr(this),$i(this);break e}}if(this.P){E=!0;let Wn;for(;!this.J&&this.C<ie.length;)if(Wn=Ef(this,ie),Wn==Go){bt==4&&(this.s=4,kt(14),E=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(Wn==Il){this.s=4,kt(15),_r(this.i,this.l,ie,"[Invalid Chunk]"),E=!1;break}else _r(this.i,this.l,Wn,null),Sl(this,Wn);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||ie.length!=0||this.h.h||(this.s=1,kt(16),E=!1),this.o=this.o&&E,!E)_r(this.i,this.l,ie,"[Invalid Chunked Response]"),nr(this),$i(this);else if(0<ie.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),xl($t),$t.M=!0,kt(11))}}else _r(this.i,this.l,ie,null),Sl(this,ie);bt==4&&nr(this),this.o&&!this.J&&(bt==4?sa(this.j,this):(this.o=!1,ct(this)))}else ea(this.g),E==400&&0<ie.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),nr(this),$i(this)}}}catch{}finally{}};function pc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ef(c,g){var E=c.C,S=g.indexOf(`
`,E);return S==-1?Go:(E=Number(g.substring(E,S)),isNaN(E)?Il:(S+=1,S+E>g.length?Go:(g=g.slice(S,S+E),c.C=S+E,g)))}vr.prototype.cancel=function(){this.J=!0,nr(this)};function ct(c){c.S=Date.now()+c.I,mc(c,c.I)}function mc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=gr(I(c.ba,c),g)}function to(c){c.B&&(h.clearTimeout(c.B),c.B=null)}vr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(wl(this.i,this.A),this.L!=2&&(ui(),kt(17)),nr(this),this.s=2,$i(this)):mc(this,this.S-c)};function $i(c){c.j.G==0||c.J||sa(c.j,c)}function nr(c){to(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Bi(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Sl(c,g){try{var E=c.j;if(E.G!=0&&(E.g==c||En(E.h,c))){if(!c.K&&En(E.h,c)&&E.G==3){try{var S=E.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var j=S;if(j[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)ia(E),Sr(E);else break e;ra(E),kt(18)}}else E.za=j[1],0<E.za-E.T&&37500>j[2]&&E.F&&E.v==0&&!E.C&&(E.C=gr(I(E.Za,E),6e3));if(1>=_c(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else pi(E,11)}else if((c.K||E.g==c)&&ia(E),!G(g))for(j=E.Da.g.parse(g),g=0;g<j.length;g++){let He=j[g];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const $t=He[3];$t!=null&&(E.la=$t,E.j.info("VER="+E.la));const bt=He[4];bt!=null&&(E.Aa=bt,E.j.info("SVER="+E.Aa));const ir=He[5];ir!=null&&typeof ir=="number"&&0<ir&&(S=1.5*ir,E.L=S,E.j.info("backChannelRequestTimeoutMs_="+S)),S=E;const Wn=c.g;if(Wn){const lo=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lo){var $=S.h;$.g||lo.indexOf("spdy")==-1&&lo.indexOf("quic")==-1&&lo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Cl($,$.h),$.h=null))}if(S.D){const aa=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(S.ya=aa,lt(S.I,S.D,aa))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),S=E;var ie=c;if(S.qa=Nc(S,S.J?S.ia:null,S.W),ie.K){yc(S.h,ie);var nt=ie,Ft=S.L;Ft&&(nt.I=Ft),nt.B&&(to(nt),ct(nt)),S.g=ie}else ao(S);0<E.i.length&&$r(E)}else He[0]!="stop"&&He[0]!="close"||pi(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?pi(E,7):nn(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}ui(4)}catch{}}var gc=class{constructor(c,g){this.g=c,this.map=g}};function no(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Un(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function _c(c){return c.h?1:c.g?c.g.size:0}function En(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Cl(c,g){c.g?c.g.add(g):c.h=g}function yc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}no.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.D);return g}return V(c.i)}function Qo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],E=c.length,S=0;S<E;S++)g.push(c[S]);return g}g=[],E=0;for(S in c)g[E++]=c[S];return g}function Yo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var E=0;E<c;E++)g.push(E);return g}g=[],E=0;for(const S in c)g[E++]=S;return g}}}function qi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var E=Yo(c),S=Qo(c),j=S.length,$=0;$<j;$++)g.call(void 0,S[$],E&&E[$],c)}var ro=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wf(c,g){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var S=c[E].indexOf("="),j=null;if(0<=S){var $=c[E].substring(0,S);j=c[E].substring(S+1)}else $=c[E];g($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ci(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ci){this.h=c.h,io(this,c.j),this.o=c.o,this.g=c.g,Hi(this,c.s),this.l=c.l;var g=c.i,E=new zr;E.i=g.i,g.g&&(E.g=new Map(g.g),E.h=g.h),Gi(this,E),this.m=c.m}else c&&(g=String(c).match(ro))?(this.h=!1,io(this,g[1]||"",!0),this.o=$e(g[2]||""),this.g=$e(g[3]||"",!0),Hi(this,g[4]),this.l=$e(g[5]||"",!0),Gi(this,g[6]||"",!0),this.m=$e(g[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}ci.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Qi(g,Xo,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Qi(g,Xo,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Qi(E,E.charAt(0)=="/"?Ic:wc,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Qi(E,Al)),c.join("")};function zn(c){return new ci(c)}function io(c,g,E){c.j=E?$e(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Hi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Gi(c,g,E){g instanceof zr?(c.i=g,Br(c.i,c.h)):(E||(g=Qi(g,Tc)),c.i=new zr(g,c.h))}function lt(c,g,E){c.i.set(g,E)}function Ki(c){return lt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function $e(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qi(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,Ec),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ec(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Xo=/[#\/\?@]/g,wc=/[#\?:]/g,Ic=/[#\?]/g,Tc=/[#\?@]/g,Al=/#/g;function zr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function tn(c){c.g||(c.g=new Map,c.h=0,c.i&&wf(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}n=zr.prototype,n.add=function(c,g){tn(this),this.i=null,c=rr(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function Er(c,g){tn(c),g=rr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function wr(c,g){return tn(c),g=rr(c,g),c.g.has(g)}n.forEach=function(c,g){tn(this),this.g.forEach(function(E,S){E.forEach(function(j){c.call(g,j,S,this)},this)},this)},n.na=function(){tn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),E=[];for(let S=0;S<g.length;S++){const j=c[S];for(let $=0;$<j.length;$++)E.push(g[S])}return E},n.V=function(c){tn(this);let g=[];if(typeof c=="string")wr(this,c)&&(g=g.concat(this.g.get(rr(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)g=g.concat(c[E])}return g},n.set=function(c,g){return tn(this),this.i=null,c=rr(this,c),wr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Yi(c,g,E){Er(c,g),0<E.length&&(c.i=null,c.g.set(rr(c,g),V(E)),c.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var E=0;E<g.length;E++){var S=g[E];const $=encodeURIComponent(String(S)),ie=this.V(S);for(S=0;S<ie.length;S++){var j=$;ie[S]!==""&&(j+="="+encodeURIComponent(String(ie[S]))),c.push(j)}}return this.i=c.join("&")};function rr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Br(c,g){g&&!c.j&&(tn(c),c.i=null,c.g.forEach(function(E,S){var j=S.toLowerCase();S!=j&&(Er(this,S),Yi(this,j,E))},c)),c.j=g}function If(c,g){const E=new Js;if(h.Image){const S=new Image;S.onload=R(Rn,E,"TestLoadImage: loaded",!0,g,S),S.onerror=R(Rn,E,"TestLoadImage: error",!1,g,S),S.onabort=R(Rn,E,"TestLoadImage: abort",!1,g,S),S.ontimeout=R(Rn,E,"TestLoadImage: timeout",!1,g,S),h.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Sc(c,g){const E=new Js,S=new AbortController,j=setTimeout(()=>{S.abort(),Rn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then($=>{clearTimeout(j),$.ok?Rn(E,"TestPingServer: ok",!0,g):Rn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),Rn(E,"TestPingServer: error",!1,g)})}function Rn(c,g,E,S,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),S(E)}catch{}}function Tf(){this.g=new Wi}function Cc(c,g,E){const S=E||"";try{qi(c,function(j,$){let ie=j;m(j)&&(ie=Qs(j)),g.push(S+$+"="+encodeURIComponent(ie))})}catch(j){throw g.push(S+"type="+encodeURIComponent("_badmap")),j}}function hi(c){this.l=c.Ub||null,this.j=c.eb||!1}L(hi,H),hi.prototype.g=function(){return new so(this.l,this.j)},hi.prototype.i=(function(c){return function(){return c}})({});function so(c,g){St.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(so,St),n=so.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Tr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ac(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ac(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Ir(this):Tr(this),this.readyState==3&&Ac(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Ir(this))},n.Qa=function(c){this.g&&(this.response=c,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Tr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function Tr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(so.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function di(c){let g="";return he(c,function(E,S){g+=S,g+=":",g+=E,g+=`\r
`}),g}function Xi(c,g,E){e:{for(S in E){var S=!1;break e}S=!0}S||(E=di(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):lt(c,g,E))}function yt(c){St.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(yt,St);var Sf=/^https?$/i,Rl=["POST","PUT"];n=yt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,E,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yr.g(),this.v=this.o?me(this.o):me(yr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch($){oo(this,$);return}if(c=E||"",E=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var j in S)E.set(j,S[j]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const $ of S.keys())E.set($,S.get($));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(E.keys()).find($=>$.toLowerCase()=="content-type"),j=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||S||j||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of E)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zo(this),this.u=!0,this.g.send(c),this.u=!1}catch($){oo(this,$)}};function oo(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Jo(c),Bn(c)}function Jo(c){c.A||(c.A=!0,Pt(c,"complete"),Pt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Pt(this,"complete"),Pt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),yt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pl(this):this.bb())},n.bb=function(){Pl(this)};function Pl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Pn(c)!=4||c.Z()!=2)){if(c.u&&Pn(c)==4)Gs(c.Ea,0,c);else if(Pt(c,"readystatechange"),Pn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var S;if(S=ie===0){var j=String(c.D).match(ro)[1]||null;!j&&h.self&&h.self.location&&(j=h.self.location.protocol.slice(0,-1)),S=!Sf.test(j?j.toLowerCase():"")}E=S}if(E)Pt(c,"complete"),Pt(c,"success");else{c.m=6;try{var $=2<Pn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Jo(c)}}finally{Bn(c)}}}}function Bn(c,g){if(c.g){Zo(c);const E=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Pt(c,"ready");try{E.onreadystatechange=S}catch{}}}function Zo(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Pn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Ys(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(c){const g={};c=(c.g&&2<=Pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(G(c[S]))continue;var E=O(c[S]);const j=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const $=g[j]||[];g[j]=$,$.push(E)}x(g,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Nl(c){this.Aa=0,this.i=[],this.j=new Js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wr("baseRetryDelayMs",5e3,c),this.cb=Wr("retryDelaySeedMs",1e4,c),this.Wa=Wr("forwardChannelMaxRetries",2,c),this.wa=Wr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new no(c&&c.concurrentRequestLimit),this.Da=new Tf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Nl.prototype,n.la=8,n.G=1,n.connect=function(c,g,E,S){kt(0),this.W=c,this.H=g||{},E&&S!==void 0&&(this.H.OSID=E,this.H.OAID=S),this.F=this.X,this.I=Nc(this,null,this.W),$r(this)};function nn(c){if(ta(c),c.G==3){var g=c.U++,E=zn(c.I);if(lt(E,"SID",c.K),lt(E,"RID",g),lt(E,"TYPE","terminate"),fi(c,E),g=new vr(c,c.j,g),g.L=2,g.v=Ki(zn(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=g.v,E=!0),E||(g.g=xc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ct(g)}kc(c)}function Sr(c){c.g&&(xl(c),c.g.cancel(),c.g=null)}function ta(c){Sr(c),c.u&&(h.clearTimeout(c.u),c.u=null),ia(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function $r(c){if(!Un(c.h)&&!c.s){c.s=!0;var g=c.Ga;Oe||le(),re||(Oe(),re=!0),we.add(g,c),c.B=0}}function Cf(c,g){return _c(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=gr(I(c.Ga,c,g),Pc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new vr(this,this.j,c);let $=this.o;if(this.S&&($?($=C($),P($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var S=this.i[E];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Ji(this,j,g),E=zn(this.I),lt(E,"RID",c),lt(E,"CVER",22),this.D&&lt(E,"X-HTTP-Session-Id",this.D),fi(this,E),$&&(this.O?g="headers="+encodeURIComponent(String(di($)))+"&"+g:this.m&&Xi(E,this.m,$)),Cl(this.h,j),this.Ua&&lt(E,"TYPE","init"),this.P?(lt(E,"$req",g),lt(E,"SID","null"),j.T=!0,Ko(j,E,null)):Ko(j,E,g),this.G=2}}else this.G==3&&(c?na(this,c):this.i.length==0||Un(this.h)||na(this))};function na(c,g){var E;g?E=g.l:E=c.U++;const S=zn(c.I);lt(S,"SID",c.K),lt(S,"RID",E),lt(S,"AID",c.T),fi(c,S),c.m&&c.o&&Xi(S,c.m,c.o),E=new vr(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ji(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Cl(c.h,E),Ko(E,S,g)}function fi(c,g){c.H&&he(c.H,function(E,S){lt(g,S,E)}),c.l&&qi({},function(E,S){lt(g,S,E)})}function Ji(c,g,E){E=Math.min(c.i.length,E);var S=c.l?I(c.l.Na,c.l,c):null;e:{var j=c.i;let $=-1;for(;;){const ie=["count="+E];$==-1?0<E?($=j[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let nt=!0;for(let Ft=0;Ft<E;Ft++){let He=j[Ft].g;const $t=j[Ft].map;if(He-=$,0>He)$=Math.max(0,j[Ft].g-100),nt=!1;else try{Cc($t,ie,"req"+He+"_")}catch{S&&S($t)}}if(nt){S=ie.join("&");break e}}}return c=c.i.splice(0,E),g.D=c,S}function ao(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Oe||le(),re||(Oe(),re=!0),we.add(g,c),c.v=0}}function ra(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=gr(I(c.Fa,c),Pc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=gr(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Sr(this),Rc(this))};function xl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Rc(c){c.g=new vr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=zn(c.qa);lt(g,"RID","rpc"),lt(g,"SID",c.K),lt(g,"AID",c.T),lt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&lt(g,"TO",c.ja),lt(g,"TYPE","xmlhttp"),fi(c,g),c.m&&c.o&&Xi(g,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=Ki(zn(g)),E.m=null,E.P=!0,Tl(E,c)}n.Za=function(){this.C!=null&&(this.C=null,Sr(this),ra(this),kt(19))};function ia(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function sa(c,g){var E=null;if(c.g==g){ia(c),xl(c),c.g=null;var S=2}else if(En(c.h,g))E=g.D,yc(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){E=g.m?g.m.length:0,g=Date.now()-g.F;var j=c.B;S=Xs(),Pt(S,new $o(S,E)),$r(c)}else ao(c);else if(j=g.s,j==3||j==0&&0<g.X||!(S==1&&Cf(c,g)||S==2&&ra(c)))switch(E&&0<E.length&&(g=c.h,g.i=g.i.concat(E)),j){case 1:pi(c,5);break;case 4:pi(c,10);break;case 3:pi(c,6);break;default:pi(c,2)}}}function Pc(c,g){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*g}function pi(c,g){if(c.j.info("Error code "+g),g==2){var E=I(c.fb,c),S=c.Xa;const j=!S;S=new ci(S||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||io(S,"https"),Ki(S),j?If(S.toString(),E):Sc(S.toString(),E)}else kt(2);c.G=0,c.l&&c.l.sa(g),kc(c),ta(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function kc(c){if(c.G=0,c.ka=[],c.l){const g=vc(c.h);(g.length!=0||c.i.length!=0)&&(U(c.ka,g),U(c.ka,c.i),c.h.i.length=0,V(c.i),c.i.length=0),c.l.ra()}}function Nc(c,g,E){var S=E instanceof ci?zn(E):new ci(E);if(S.g!="")g&&(S.g=g+"."+S.g),Hi(S,S.s);else{var j=h.location;S=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var $=new ci(null);S&&io($,S),g&&($.g=g),j&&Hi($,j),E&&($.l=E),S=$}return E=c.D,g=c.ya,E&&g&&lt(S,E,g),lt(S,"VER",c.la),fi(c,S),S}function xc(c,g,E){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new yt(new hi({eb:E})):new yt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bl(){}n=bl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(c,g){return new wn(c,g)};function wn(c,g){St.call(this),this.g=new Nl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!G(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!G(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new qr(this)}L(wn,St),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){nn(this.g)},wn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Qs(c),c=E);g.i.push(new gc(g.Ya++,c)),g.G==3&&$r(g)},wn.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,wn.aa.N.call(this)};function bc(c){cn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}L(bc,cn);function Dc(){Wo.call(this),this.status=1}L(Dc,Wo);function qr(c){this.g=c}L(qr,bl),qr.prototype.ua=function(){Pt(this.g,"a")},qr.prototype.ta=function(c){Pt(this.g,new bc(c))},qr.prototype.sa=function(c){Pt(this.g,new Dc)},qr.prototype.ra=function(){Pt(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,FT=function(){return new oa},VT=function(){return Xs()},LT=Ur,Rm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,jh=Ho,dc.COMPLETE="complete",MT=dc,Xe.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",St.prototype.listen=St.prototype.K,uu=Xe,yt.prototype.listenOnce=yt.prototype.L,yt.prototype.getLastError=yt.prototype.Ka,yt.prototype.getLastErrorCode=yt.prototype.Ba,yt.prototype.getStatus=yt.prototype.Z,yt.prototype.getResponseJson=yt.prototype.Oa,yt.prototype.getResponseText=yt.prototype.oa,yt.prototype.send=yt.prototype.ea,yt.prototype.setWithCredentials=yt.prototype.Ha,OT=yt}).apply(typeof Ph<"u"?Ph:typeof self<"u"?self:typeof window<"u"?window:{});const zE="@firebase/firestore",BE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const No=new Od("@firebase/firestore");function ka(){return No.logLevel}function ce(n,...e){if(No.logLevel<=Be.DEBUG){const t=e.map(Ng);No.debug(`Firestore (${ll}): ${n}`,...t)}}function Oi(n,...e){if(No.logLevel<=Be.ERROR){const t=e.map(Ng);No.error(`Firestore (${ll}): ${n}`,...t)}}function Ns(n,...e){if(No.logLevel<=Be.WARN){const t=e.map(Ng);No.warn(`Firestore (${ll}): ${n}`,...t)}}function Ng(n){if(typeof n=="string")return n;try{/**
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
 */function ke(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,jT(n,r,t)}function jT(n,e,t){let r=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Oi(r),new Error(r)}function et(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||jT(e,s,r)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Fi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gn.UNAUTHENTICATED)))}shutdown(){}}class oN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class aN{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ss,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},h=f=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>h(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ss)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string",31837,{l:r}),new UT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string",2055,{h:e}),new gn(e)}}class lN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new lN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(gn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class WE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){et(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new WE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(et(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new WE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function zT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hN(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Ve(n,e){return n<e?-1:n>e?1:0}function Pm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Ve(r,s);{const a=zT(),u=dN(a.encode($E(n,t)),a.encode($E(e,t)));return u!==0?u:Ve(r,s)}}t+=r>65535?2:1}return Ve(n.length,e.length)}function $E(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function dN(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ve(n[t],e[t]);return Ve(n.length,e.length)}function Ha(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="__name__";class Yr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ke(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ke(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Yr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Ve(e.length,t.length)}static compareSegments(e,t){const r=Yr.isNumericId(e),s=Yr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Yr.extractNumericId(e).compare(Yr.extractNumericId(t)):Pm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class ft extends Yr{construct(e,t,r){return new ft(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ft(t)}static emptyPath(){return new ft([])}}const fN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Yr{construct(e,t,r){return new on(e,t,r)}static isValidIdentifier(e){return fN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qE}static keyField(){return new on([qE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(r+=h,s++):(a(),s++)}if(a(),u)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new on(t)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(ft.fromString(e))}static fromName(e){return new Ie(ft.fromString(e).popFirst(5))}static empty(){return new Ie(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ft.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n,e,t){if(!t)throw new oe(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pN(n,e,t,r){if(e===!0&&r===!0)throw new oe(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function HE(n){if(!Ie.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function GE(n){if(Ie.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function WT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ud(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ke(12329,{type:typeof n})}function Yn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ud(n);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Lt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qu(n,e){if(!WT(n))throw new oe(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=-62135596800,QE=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*QE);return new _t(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<KE)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/QE}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qu(e,_t._jsonSchema))return new _t(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-KE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:Lt("string",_t._jsonSchemaVersion),seconds:Lt("number"),nanoseconds:Lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new _t(0,0))}static max(){return new xe(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Nu=-1;function mN(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=xe.fromTimestamp(r===1e9?new _t(t+1,0):new _t(t,r));return new xs(s,Ie.empty(),e)}function gN(n){return new xs(n.readTime,n.key,Nu)}class xs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xs(xe.min(),Ie.empty(),Nu)}static max(){return new xs(xe.max(),Ie.empty(),Nu)}}function _N(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ie.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
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
 */const yN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==yN)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ke(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,r)=>{t(e)}))}static reject(e){return new Y(((t,r)=>{r(e)}))}static waitFor(e){return new Y(((t,r)=>{let s=0,a=0,u=!1;e.forEach((h=>{++s,h.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Y.resolve(!1);for(const r of e)t=t.next((s=>s?Y.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Y(((r,s)=>{const a=e.length,u=new Array(a);let h=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++h,h===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new Y(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function EN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=-1;function Bd(n){return n==null}function sd(n){return n===0&&1/n==-1/0}function wN(n){return typeof n=="number"&&Number.isInteger(n)&&!sd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="";function IN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=YE(e)),e=TN(n.get(t),e);return YE(e)}function TN(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case $T:t+="";break;default:t+=a}}return t}function YE(n){return n+$T+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $s(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt=class km{constructor(e,t){this.comparator=e,this.root=t||Cs.EMPTY}insert(e,t){return new km(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Cs.BLACK,null,null))}remove(e){return new km(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kh(this.root,e,this.comparator,!0)}},kh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Cs=class Ti{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ti.RED,this.left=s??Ti.EMPTY,this.right=a??Ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Ti(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ti.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ti.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ke(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ke(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ke(27949);return e+(this.isRed()?0:1)}};Cs.EMPTY=null,Cs.RED=!0,Cs.BLACK=!1;Cs.EMPTY=new class{constructor(){this.size=0}get key(){throw ke(57766)}get value(){throw ke(16141)}get color(){throw ke(16727)}get left(){throw ke(29726)}get right(){throw ke(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Cs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new JE(this.data.getIterator())}getIteratorFrom(e){return new JE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class JE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kn{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new Kn([])}unionWith(e){let t=new Bt(on.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ha(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class HT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new HT("Invalid base64 string: "+a):a}})(e);return new ln(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new ln(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const SN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(n){if(et(!!n,39018),typeof n=="string"){let e=0;const t=SN.exec(n);if(et(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ds(n){return typeof n=="string"?ln.fromBase64String(n):ln.fromUint8Array(n)}/**
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
 */const GT="server_timestamp",KT="__type__",QT="__previous_value__",YT="__local_write_time__";function Dg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[KT])===null||t===void 0?void 0:t.stringValue)===GT}function Wd(n){const e=n.mapValue.fields[QT];return Dg(e)?Wd(e):e}function xu(n){const e=bs(n.mapValue.fields[YT].timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,t,r,s,a,u,h,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const od="(default)";class bu{constructor(e,t){this.projectId=e,this.database=t||od}static empty(){return new bu("","")}get isDefaultDatabase(){return this.database===od}isEqual(e){return e instanceof bu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const XT="__type__",AN="__max__",Nh={mapValue:{}},JT="__vector__",ad="value";function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dg(n)?4:PN(n)?9007199254740991:RN(n)?10:11:ke(28295,{value:n})}function ii(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xu(n).isEqual(xu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=bs(s.timestampValue),h=bs(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Ds(s.bytesValue).isEqual(Ds(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return xt(s.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return xt(s.integerValue)===xt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=xt(s.doubleValue),h=xt(a.doubleValue);return u===h?sd(u)===sd(h):isNaN(u)&&isNaN(h)}return!1})(n,e);case 9:return Ha(n.arrayValue.values||[],e.arrayValue.values||[],ii);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},h=a.mapValue.fields||{};if(XE(u)!==XE(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!ii(u[f],h[f])))return!1;return!0})(n,e);default:return ke(52216,{left:n})}}function Du(n,e){return(n.values||[]).find((t=>ii(t,e)))!==void 0}function Ga(n,e){if(n===e)return 0;const t=Os(n),r=Os(e);if(t!==r)return Ve(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const h=xt(a.integerValue||a.doubleValue),f=xt(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1})(n,e);case 3:return ZE(n.timestampValue,e.timestampValue);case 4:return ZE(xu(n),xu(e));case 5:return Pm(n.stringValue,e.stringValue);case 6:return(function(a,u){const h=Ds(a),f=Ds(u);return h.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const h=a.split("/"),f=u.split("/");for(let m=0;m<h.length&&m<f.length;m++){const y=Ve(h[m],f[m]);if(y!==0)return y}return Ve(h.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const h=Ve(xt(a.latitude),xt(u.latitude));return h!==0?h:Ve(xt(a.longitude),xt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ew(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var h,f,m,y;const w=a.fields||{},I=u.fields||{},R=(h=w[ad])===null||h===void 0?void 0:h.arrayValue,L=(f=I[ad])===null||f===void 0?void 0:f.arrayValue,V=Ve(((m=R==null?void 0:R.values)===null||m===void 0?void 0:m.length)||0,((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0);return V!==0?V:ew(R,L)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Nh.mapValue&&u===Nh.mapValue)return 0;if(a===Nh.mapValue)return 1;if(u===Nh.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let w=0;w<f.length&&w<y.length;++w){const I=Pm(f[w],y[w]);if(I!==0)return I;const R=Ga(h[f[w]],m[y[w]]);if(R!==0)return R}return Ve(f.length,y.length)})(n.mapValue,e.mapValue);default:throw ke(23264,{le:t})}}function ZE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=bs(n),r=bs(e),s=Ve(t.seconds,r.seconds);return s!==0?s:Ve(t.nanos,r.nanos)}function ew(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ga(t[s],r[s]);if(a)return a}return Ve(t.length,r.length)}function Ka(n){return Nm(n)}function Nm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=bs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ds(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ie.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Nm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Nm(t.fields[u])}`;return s+"}"})(n.mapValue):ke(61005,{value:n})}function Uh(n){switch(Os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wd(n);return e?16+Uh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Uh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return $s(r.fields,((a,u)=>{s+=a.length+Uh(u)})),s})(n.mapValue);default:throw ke(13486,{value:n})}}function tw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xm(n){return!!n&&"integerValue"in n}function Og(n){return!!n&&"arrayValue"in n}function nw(n){return!!n&&"nullValue"in n}function rw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zh(n){return!!n&&"mapValue"in n}function RN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[XT])===null||t===void 0?void 0:t.stringValue)===JT}function gu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $s(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=gu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function PN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===AN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!zh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gu(t)}setAll(e){let t=on.emptyPath(),r={},s=[];e.forEach(((u,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=h.popLast()}u?r[h.lastSegment()]=gu(u):s.push(h.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());zh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];zh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){$s(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Ln(gu(this.value))}}function ZT(n){const e=[];return $s(n.fields,((t,r)=>{const s=new on([t]);if(zh(r)){const a=ZT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,r,s,a,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new _n(e,0,xe.min(),xe.min(),xe.min(),Ln.empty(),0)}static newFoundDocument(e,t,r,s){return new _n(e,1,t,xe.min(),r,s,0)}static newNoDocument(e,t){return new _n(e,2,t,xe.min(),xe.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new _n(e,3,t,xe.min(),xe.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ld{constructor(e,t){this.position=e,this.inclusive=t}}function iw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=Ie.comparator(Ie.fromName(u.referenceValue),t.key):r=Ga(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function sw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ii(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ou{constructor(e,t="asc"){this.field=e,this.dir=t}}function kN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class e0{}class Mt extends e0{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xN(e,t,r):t==="array-contains"?new ON(e,r):t==="in"?new MN(e,r):t==="not-in"?new LN(e,r):t==="array-contains-any"?new VN(e,r):new Mt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bN(e,r):new DN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ga(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison(Ga(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vr extends e0{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Vr(e,t)}matches(e){return t0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function t0(n){return n.op==="and"}function n0(n){return NN(n)&&t0(n)}function NN(n){for(const e of n.filters)if(e instanceof Vr)return!1;return!0}function bm(n){if(n instanceof Mt)return n.field.canonicalString()+n.op.toString()+Ka(n.value);if(n0(n))return n.filters.map((e=>bm(e))).join(",");{const e=n.filters.map((t=>bm(t))).join(",");return`${n.op}(${e})`}}function r0(n,e){return n instanceof Mt?(function(r,s){return s instanceof Mt&&r.op===s.op&&r.field.isEqual(s.field)&&ii(r.value,s.value)})(n,e):n instanceof Vr?(function(r,s){return s instanceof Vr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,h)=>a&&r0(u,s.filters[h])),!0):!1})(n,e):void ke(19439)}function i0(n){return n instanceof Mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ka(t.value)}`})(n):n instanceof Vr?(function(t){return t.op.toString()+" {"+t.getFilters().map(i0).join(" ,")+"}"})(n):"Filter"}class xN extends Mt{constructor(e,t,r){super(e,t,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const t=Ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class bN extends Mt{constructor(e,t){super(e,"in",t),this.keys=s0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class DN extends Mt{constructor(e,t){super(e,"not-in",t),this.keys=s0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function s0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ie.fromName(r.referenceValue)))}class ON extends Mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Og(t)&&Du(t.arrayValue,this.value)}}class MN extends Mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Du(this.value.arrayValue,t)}}class LN extends Mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Du(this.value.arrayValue,t)}}class VN extends Mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Og(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Du(this.value.arrayValue,r)))}}/**
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
 */class FN{constructor(e,t=null,r=[],s=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=h,this.Pe=null}}function ow(n,e=null,t=[],r=[],s=null,a=null,u=null){return new FN(n,e,t,r,s,a,u)}function Mg(n){const e=be(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>bm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Bd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ka(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ka(r))).join(",")),e.Pe=t}return e.Pe}function Lg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!r0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sw(n.startAt,e.startAt)&&sw(n.endAt,e.endAt)}function Dm(n){return Ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t=null,r=[],s=[],a=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jN(n,e,t,r,s,a,u,h){return new hl(n,e,t,r,s,a,u,h)}function $d(n){return new hl(n)}function aw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function o0(n){return n.collectionGroup!==null}function _u(n){const e=be(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new Bt(on.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(h=h.add(m.field))}))})),h})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Ou(a,r))})),t.has(on.keyField().canonicalString())||e.Te.push(new Ou(on.keyField(),r))}return e.Te}function ei(n){const e=be(n);return e.Ie||(e.Ie=UN(e,_u(n))),e.Ie}function UN(n,e){if(n.limitType==="F")return ow(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Ou(s.field,a)}));const t=n.endAt?new ld(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ld(n.startAt.position,n.startAt.inclusive):null;return ow(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Om(n,e){const t=n.filters.concat([e]);return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ud(n,e,t){return new hl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qd(n,e){return Lg(ei(n),ei(e))&&n.limitType===e.limitType}function a0(n){return`${Mg(ei(n))}|lt:${n.limitType}`}function Na(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>i0(s))).join(", ")}]`),Bd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ka(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ka(s))).join(",")),`Target(${r})`})(ei(n))}; limitType=${n.limitType})`}function Hd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ie.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of _u(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,h,f){const m=iw(u,h,f);return u.inclusive?m<=0:m<0})(r.startAt,_u(r),s)||r.endAt&&!(function(u,h,f){const m=iw(u,h,f);return u.inclusive?m>=0:m>0})(r.endAt,_u(r),s))})(n,e)}function zN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function l0(n){return(e,t)=>{let r=!1;for(const s of _u(n)){const a=BN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function BN(n,e,t){const r=n.field.isKeyField()?Ie.comparator(e.key,t.key):(function(a,u,h){const f=u.data.field(a),m=h.data.field(a);return f!==null&&m!==null?Ga(f,m):ke(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ke(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return qT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new Vt(Ie.comparator);function Mi(){return WN}const u0=new Vt(Ie.comparator);function cu(...n){let e=u0;for(const t of n)e=e.insert(t.key,t);return e}function c0(n){let e=u0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Co(){return yu()}function h0(){return yu()}function yu(){return new Fo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const $N=new Vt(Ie.comparator),qN=new Bt(Ie.comparator);function We(...n){let e=qN;for(const t of n)e=e.add(t);return e}const HN=new Bt(Ve);function GN(){return HN}/**
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
 */function Vg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sd(e)?"-0":e}}function d0(n){return{integerValue:""+n}}function KN(n,e){return wN(e)?d0(e):Vg(n,e)}/**
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
 */class Gd{constructor(){this._=void 0}}function QN(n,e,t){return n instanceof Mu?(function(s,a){const u={fields:{[KT]:{stringValue:GT},[YT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Dg(a)&&(a=Wd(a)),a&&(u.fields[QT]=a),{mapValue:u}})(t,e):n instanceof Qa?p0(n,e):n instanceof Lu?m0(n,e):(function(s,a){const u=f0(s,a),h=lw(u)+lw(s.Ee);return xm(u)&&xm(s.Ee)?d0(h):Vg(s.serializer,h)})(n,e)}function YN(n,e,t){return n instanceof Qa?p0(n,e):n instanceof Lu?m0(n,e):t}function f0(n,e){return n instanceof cd?(function(r){return xm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Mu extends Gd{}class Qa extends Gd{constructor(e){super(),this.elements=e}}function p0(n,e){const t=g0(e);for(const r of n.elements)t.some((s=>ii(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Lu extends Gd{constructor(e){super(),this.elements=e}}function m0(n,e){let t=g0(e);for(const r of n.elements)t=t.filter((s=>!ii(s,r)));return{arrayValue:{values:t}}}class cd extends Gd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function lw(n){return xt(n.integerValue||n.doubleValue)}function g0(n){return Og(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.field=e,this.transform=t}}function XN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Qa&&s instanceof Qa||r instanceof Lu&&s instanceof Lu?Ha(r.elements,s.elements,ii):r instanceof cd&&s instanceof cd?ii(r.Ee,s.Ee):r instanceof Mu&&s instanceof Mu})(n.transform,e.transform)}class JN{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kd{}function y0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qd(n.key,Cn.none()):new Yu(n.key,n.data,Cn.none());{const t=n.data,r=Ln.empty();let s=new Bt(on.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new qs(n.key,r,new Kn(s.toArray()),Cn.none())}}function ZN(n,e,t){n instanceof Yu?(function(s,a,u){const h=s.value.clone(),f=cw(s.fieldTransforms,a,u.transformResults);h.setAll(f),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,e,t):n instanceof qs?(function(s,a,u){if(!Bh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const h=cw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(v0(s)),f.setAll(h),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function vu(n,e,t,r){return n instanceof Yu?(function(a,u,h,f){if(!Bh(a.precondition,u))return h;const m=a.value.clone(),y=hw(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof qs?(function(a,u,h,f){if(!Bh(a.precondition,u))return h;const m=hw(a.fieldTransforms,f,u),y=u.data;return y.setAll(v0(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,h){return Bh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h})(n,e,t)}function ex(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=f0(r.transform,s||null);a!=null&&(t===null&&(t=Ln.empty()),t.set(r.field,a))}return t||null}function uw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ha(r,s,((a,u)=>XN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yu extends Kd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qs extends Kd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function v0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function cw(n,e,t){const r=new Map;et(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,h=e.data.field(a.field);r.set(a.field,YN(u,h,t[s]))}return r}function hw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,QN(a,u,e))}return r}class Qd extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tx extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&ZN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=h0();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=t.has(s.key)?null:h;const f=y0(u,h);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),We())}isEqual(e){return this.batchId===e.batchId&&Ha(this.mutations,e.mutations,((t,r)=>uw(t,r)))&&Ha(this.baseMutations,e.baseMutations,((t,r)=>uw(t,r)))}}class Fg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){et(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return $N})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Fg(e,t,r,s)}}/**
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
 */class rx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ix{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,Ge;function sx(n){switch(n){case K.OK:return ke(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ke(15467,{code:n})}}function E0(n){if(n===void 0)return Oi("GRPC error has no .code"),K.UNKNOWN;switch(n){case Ot.OK:return K.OK;case Ot.CANCELLED:return K.CANCELLED;case Ot.UNKNOWN:return K.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return K.INTERNAL;case Ot.UNAVAILABLE:return K.UNAVAILABLE;case Ot.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Ot.NOT_FOUND:return K.NOT_FOUND;case Ot.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Ot.ABORTED:return K.ABORTED;case Ot.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Ot.DATA_LOSS:return K.DATA_LOSS;default:return ke(39323,{code:n})}}(Ge=Ot||(Ot={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ox=new Ts([4294967295,4294967295],0);function dw(n){const e=zT().encode(n),t=new DT;return t.update(e),new Uint8Array(t.digest())}function fw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([s,a],0)]}class jg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hu(`Invalid padding: ${t}`);if(r<0)throw new hu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ts.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ts.fromNumber(r)));return s.compare(ox)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=dw(e),[r,s]=fw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new jg(a,s,t);return r.forEach((h=>u.insert(h))),u}insert(e){if(this.fe===0)return;const t=dw(e),[r,s]=fw(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yd(xe.min(),s,new Vt(Ve),Mi(),We())}}class Xu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xu(r,t,We(),We(),We())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class w0{constructor(e,t){this.targetId=e,this.De=t}}class I0{constructor(e,t,r=ln.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class pw{constructor(){this.ve=0,this.Ce=mw(),this.Fe=ln.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=We(),t=We(),r=We();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ke(38017,{changeType:a})}})),new Xu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=mw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ax{constructor(e){this.We=e,this.Ge=new Map,this.ze=Mi(),this.je=xh(),this.Je=xh(),this.He=new Vt(Ve)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ke(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Dm(a))if(r===0){const u=new Ie(a.path);this.Xe(t,u,_n.newNoDocument(u,xe.min()))}else et(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const h=this._t(e),f=h?this.ut(h,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,h;try{u=Ds(r).toUint8Array()}catch(f){if(f instanceof HT)return Ns("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new jg(u,s,a)}catch(f){return Ns(f instanceof hu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.fe===0?null:h}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const h=this.st(u);if(h){if(a.current&&Dm(h.target)){const f=new Ie(h.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,_n.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=We();this.Je.forEach(((a,u)=>{let h=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Yd(e,t,this.He,this.ze,r);return this.ze=Mi(),this.je=xh(),this.Je=xh(),this.He=new Vt(Ve),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new pw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Bt(Ve),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Bt(Ve),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new pw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function xh(){return new Vt(Ie.comparator)}function mw(){return new Vt(Ie.comparator)}const lx={asc:"ASCENDING",desc:"DESCENDING"},ux={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cx={and:"AND",or:"OR"};class hx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mm(n,e){return n.useProto3Json||Bd(e)?e:{value:e}}function hd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dx(n,e){return hd(n,e.toTimestamp())}function ti(n){return et(!!n,49232),xe.fromTimestamp((function(t){const r=bs(t);return new _t(r.seconds,r.nanos)})(n))}function Ug(n,e){return Lm(n,e).canonicalString()}function Lm(n,e){const t=(function(s){return new ft(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function S0(n){const e=ft.fromString(n);return et(k0(e),10190,{key:e.toString()}),e}function Vm(n,e){return Ug(n.databaseId,e.path)}function rm(n,e){const t=S0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ie(A0(t))}function C0(n,e){return Ug(n.databaseId,e)}function fx(n){const e=S0(n);return e.length===4?ft.emptyPath():A0(e)}function Fm(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function A0(n){return et(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gw(n,e,t){return{name:Vm(n,e),fields:t.value.mapValue.fields}}function px(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ke(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(et(y===void 0||typeof y=="string",58123),ln.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ln.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&(function(m){const y=m.code===void 0?K.UNKNOWN:E0(m.code);return new oe(y,m.message||"")})(u);t=new I0(r,s,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rm(n,r.document.name),a=ti(r.document.updateTime),u=r.document.createTime?ti(r.document.createTime):xe.min(),h=new Ln({mapValue:{fields:r.document.fields}}),f=_n.newFoundDocument(s,a,u,h),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Wh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rm(n,r.document),a=r.readTime?ti(r.readTime):xe.min(),u=_n.newNoDocument(s,a),h=r.removedTargetIds||[];t=new Wh([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rm(n,r.document),a=r.removedTargetIds||[];t=new Wh([],a,s,null)}else{if(!("filter"in e))return ke(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ix(s,a),h=r.targetId;t=new w0(h,u)}}return t}function mx(n,e){let t;if(e instanceof Yu)t={update:gw(n,e.key,e.value)};else if(e instanceof Qd)t={delete:Vm(n,e.key)};else if(e instanceof qs)t={update:gw(n,e.key,e.data),updateMask:Sx(e.fieldMask)};else{if(!(e instanceof tx))return ke(16599,{Rt:e.type});t={verify:Vm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const h=u.transform;if(h instanceof Mu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Qa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Lu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof cd)return{fieldPath:u.field.canonicalString(),increment:h.Ee};throw ke(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:dx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ke(27497)})(n,e.precondition)),t}function gx(n,e){return n&&n.length>0?(et(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ti(s.updateTime):ti(a);return u.isEqual(xe.min())&&(u=ti(a)),new JN(u,s.transformResults||[])})(t,e)))):[]}function _x(n,e){return{documents:[C0(n,e.path)]}}function yx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=C0(n,s);const a=(function(m){if(m.length!==0)return P0(Vr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(I){return{field:xa(I.field),direction:wx(I.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=Mm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function vx(n){let e=fx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){et(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(w){const I=R0(w);return I instanceof Vr&&n0(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((I=>(function(L){return new Ou(ba(L.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(I)))})(t.orderBy));let h=null;t.limit&&(h=(function(w){let I;return I=typeof w=="object"?w.value:w,Bd(I)?null:I})(t.limit));let f=null;t.startAt&&(f=(function(w){const I=!!w.before,R=w.values||[];return new ld(R,I)})(t.startAt));let m=null;return t.endAt&&(m=(function(w){const I=!w.before,R=w.values||[];return new ld(R,I)})(t.endAt)),jN(e,s,u,a,h,"F",f,m)}function Ex(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ke(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function R0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ba(t.unaryFilter.field);return Mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ba(t.unaryFilter.field);return Mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ba(t.unaryFilter.field);return Mt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ba(t.unaryFilter.field);return Mt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ke(61313);default:return ke(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Mt.create(ba(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ke(58110);default:return ke(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Vr.create(t.compositeFilter.filters.map((r=>R0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ke(1026)}})(t.compositeFilter.op))})(n):ke(30097,{filter:n})}function wx(n){return lx[n]}function Ix(n){return ux[n]}function Tx(n){return cx[n]}function xa(n){return{fieldPath:n.canonicalString()}}function ba(n){return on.fromServerFormat(n.fieldPath)}function P0(n){return n instanceof Mt?(function(t){if(t.op==="=="){if(rw(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NAN"}};if(nw(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rw(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NOT_NAN"}};if(nw(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xa(t.field),op:Ix(t.op),value:t.value}}})(n):n instanceof Vr?(function(t){const r=t.getFilters().map((s=>P0(s)));return r.length===1?r[0]:{compositeFilter:{op:Tx(t.op),filters:r}}})(n):ke(54877,{filter:n})}function Sx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function k0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,r,s,a=xe.min(),u=xe.min(),h=ln.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.gt=e}}function Ax(n){const e=vx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
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
 */class Rx{constructor(){this.Dn=new Px}addToCollectionParentIndex(e,t){return this.Dn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(xs.min())}updateCollectionGroup(e,t,r){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class Px{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Bt(ft.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Bt(ft.comparator)).toArray()}}/**
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
 */const _w={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},N0=41943040;class Mn{static withCacheSize(e){return new Mn(e,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.DEFAULT_COLLECTION_PERCENTILE=10,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mn.DEFAULT=new Mn(N0,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mn.DISABLED=new Mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yw="LruGarbageCollector",kx=1048576;function vw([n,e],[t,r]){const s=Ve(n,t);return s===0?Ve(e,r):s}class Nx{constructor(e){this.Tr=e,this.buffer=new Bt(vw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(yw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?ce(yw,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.Rr(3e5)}))}}class bx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Y.resolve(zd.ue);const r=new Nx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(_w)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_w):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,h,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,h=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(m=Date.now(),ka()<=Be.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function Dx(n,e){return new bx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.changes=new Fo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_n.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&vu(r.mutation,s,Kn.empty(),_t.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,We()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=We()){const s=Co();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=cu();return a.forEach(((h,f)=>{u=u.insert(h,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Co();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,We())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,h)=>{t.set(u,h)}))}))}computeViews(e,t,r,s){let a=Mi();const u=yu(),h=(function(){return yu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof qs)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),vu(y.mutation,m,y.mutation.getFieldMask(),_t.now())):u.set(m.key,Kn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var w;return h.set(m,new Mx(y,(w=u.get(m))!==null&&w!==void 0?w:null))})),h)))}recalculateAndSaveOverlays(e,t){const r=yu();let s=new Vt(((u,h)=>u-h)),a=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const h of u)h.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||Kn.empty();y=h.applyToLocalView(m,y),r.set(f,y);const w=(s.get(h.batchId)||We()).add(f);s=s.insert(h.batchId,w)}))})).next((()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,y=f.value,w=h0();y.forEach((I=>{if(!a.has(I)){const R=y0(t.get(I),r.get(I));R!==null&&w.set(I,R),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,w))}return Y.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return Ie.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):o0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Y.resolve(Co());let h=Nu,f=a;return u.next((m=>Y.forEach(m,((y,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),a.get(y)?Y.resolve():this.remoteDocumentCache.getEntry(e,y).next((I=>{f=f.insert(y,I)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,We()))).next((y=>({batchId:h,changes:c0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ie(t)).next((r=>{let s=cu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=cu();return this.indexManager.getCollectionParents(e,a).next((h=>Y.forEach(h,(f=>{const m=(function(w,I){return new hl(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((w,I)=>{u=u.insert(w,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,_n.newInvalidDocument(y)))}));let h=cu();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&vu(y.mutation,m,Kn.empty(),_t.now()),Hd(t,m)&&(h=h.insert(f,m))})),h}))}}/**
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
 */class Vx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Y.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ti(s.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Ax(s.bundledQuery),readTime:ti(s.readTime)}})(t)),Y.resolve()}}/**
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
 */class Fx{constructor(){this.overlays=new Vt(Ie.comparator),this.kr=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Co();return Y.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Y.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Y.resolve()}getOverlaysForCollection(e,t,r){const s=Co(),a=t.length+1,u=new Ie(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Y.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Vt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=Co(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const h=Co(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>h.set(m,y))),!(h.size()>=s)););return Y.resolve(h)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new rx(t,r));let a=this.kr.get(t);a===void 0&&(a=We(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class jx{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.qr=new Bt(Yt.Qr),this.$r=new Bt(Yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Yt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Yt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ie(new ft([])),r=new Yt(t,e),s=new Yt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ie(new ft([])),r=new Yt(t,e),s=new Yt(t,e+1);let a=We();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Yt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Yt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ie.comparator(e.key,t.key)||Ve(e.Hr,t.Hr)}static Ur(e,t){return Ve(e.Hr,t.Hr)||Ie.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Bt(Yt.Qr)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new nx(a,t,r,s);this.mutationQueue.push(u);for(const h of s)this.Yr=this.Yr.add(new Yt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Y.resolve(u)}lookupMutationBatch(e,t){return Y.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Y.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?bg:this.er-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Yt(t,0),s=new Yt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const h=this.Zr(u.Hr);a.push(h)})),Y.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Bt(Ve);return t.forEach((s=>{const a=new Yt(s,0),u=new Yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(h=>{r=r.add(h.Hr)}))})),Y.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;Ie.isDocumentKey(a)||(a=a.child(""));const u=new Yt(new Ie(a),0);let h=new Bt(Ve);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(h=h.add(f.Hr)),!0)}),u),Y.resolve(this.ei(h))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){et(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Y.forEach(t.mutations,(s=>{const a=new Yt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Yt(t,0),s=this.Yr.firstAfterOrEqual(r);return Y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.ni=e,this.docs=(function(){return new Vt(Ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Y.resolve(r?r.document.mutableCopy():_n.newInvalidDocument(t))}getEntries(e,t){let r=Mi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():_n.newInvalidDocument(s))})),Y.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Mi();const u=t.path,h=new Ie(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||_N(gN(y),r)<=0||(s.has(y.key)||Hd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return Y.resolve(a)}getAllFromCollectionGroup(e,t,r,s){ke(9500)}ri(e,t){return Y.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Bx(this)}getSize(e){return Y.resolve(this.size)}}class Bx extends Ox{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Y.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.persistence=e,this.ii=new Fo((t=>Mg(t)),Lg),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.si=0,this.oi=new zg,this.targetCount=0,this._i=Ya.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Y.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.hr(t),Y.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)})),Y.waitFor(a).next((()=>s))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Y.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Y.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Y.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Y.resolve(r)}containsKey(e,t){return Y.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t){this.ai={},this.overlays={},this.ui=new zd(0),this.ci=!1,this.ci=!0,this.li=new jx,this.referenceDelegate=e(this),this.hi=new Wx(this),this.indexManager=new Rx,this.remoteDocumentCache=(function(s){return new zx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Cx(t),this.Ti=new Vx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ux(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const s=new $x(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Y.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class $x extends vN{constructor(e){super(),this.currentSequenceNumber=e}}class Bg{constructor(e){this.persistence=e,this.Ai=new zg,this.Ri=null}static Vi(e){return new Bg(e)}get mi(){if(this.Ri)return this.Ri;throw ke(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Y.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.mi,(r=>{const s=Ie.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,xe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Y.or([()=>Y.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class dd{constructor(e,t){this.persistence=e,this.gi=new Fo((r=>IN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Dx(this,t)}static Vi(e,t){return new dd(e,t)}Ii(){}di(e){return Y.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Y.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Y.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((h=>{h||(r++,a.removeEntry(u,xe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Y.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Y.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Y.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uh(e.data.value)),t}Sr(e,t,r){return Y.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Y.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=We(),s=We();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Wg(e,t.fromCache,r,s)}}/**
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
 */class qx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return yR()?8:EN(yn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new qx;return this.ws(e,t,u).next((h=>{if(a.result=h,this.Rs)return this.Ss(e,t,u,h.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ka()<=Be.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Na(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Y.resolve()):(ka()<=Be.DEBUG&&ce("QueryEngine","Query:",Na(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ka()<=Be.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Na(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ei(t))):Y.resolve())}ps(e,t){if(aw(t))return Y.resolve(null);let r=ei(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ud(t,null,"F"),r=ei(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=We(...a);return this.gs.getDocuments(e,u).next((h=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,h);return this.Ds(t,m,u,f.readTime)?this.ps(e,ud(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return aw(t)||s.isEqual(xe.min())?Y.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Y.resolve(null):(ka()<=Be.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Na(t)),this.vs(e,u,t,mN(s,Nu)).next((h=>h)))}))}bs(e,t){let r=new Bt(l0(e));return t.forEach(((s,a)=>{Hd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return ka()<=Be.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Na(t)),this.gs.getDocumentsMatchingQuery(e,t,xs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const $g="LocalStore",Gx=3e8;class Kx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Vt(Ve),this.Ms=new Fo((a=>Mg(a)),Lg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Qx(n,e,t,r){return new Kx(n,e,t,r)}async function b0(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],h=[];let f=We();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){h.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:h})))}))}))}function Yx(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(h,f,m,y){const w=m.batch,I=w.keys();let R=Y.resolve();return I.forEach((L=>{R=R.next((()=>y.getEntry(f,L))).next((V=>{const U=m.docVersions.get(L);et(U!==null,48541),V.version.compareTo(U)<0&&(w.applyToRemoteDocument(V,m),V.isValidDocument()&&(V.setReadTime(m.commitVersion),y.addEntry(V)))}))})),R.next((()=>h.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let f=We();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function D0(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Xx(n,e){const t=be(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const h=[];e.targetChanges.forEach(((y,w)=>{const I=s.get(w);if(!I)return;h.push(t.hi.removeMatchingKeys(a,y.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,w))));let R=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?R=R.withResumeToken(ln.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),s=s.insert(w,R),(function(V,U,q){return V.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Gx?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(I,R,y)&&h.push(t.hi.updateTargetData(a,R))}));let f=Mi(),m=We();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),h.push(Jx(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(xe.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));h.push(y)}return Y.waitFor(h).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Jx(n,e,t){let r=We(),s=We();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Mi();return t.forEach(((h,f)=>{const m=a.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(h)),f.isNoDocument()&&f.version.isEqual(xe.min())?(e.removeEntry(h,f.readTime),u=u.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(h,f)):ce($g,"Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Zx(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=bg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function eb(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Y.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new _s(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function jm(n,e,t){const r=be(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!cl(u))throw u;ce($g,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Ew(n,e,t){const r=be(n);let s=xe.min(),a=We();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const w=be(f),I=w.Ms.get(y);return I!==void 0?Y.resolve(w.Fs.get(I)):w.hi.getTargetData(m,y)})(r,u,ei(e)).next((h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,h.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:xe.min(),t?a:We()))).next((h=>(tb(r,zN(e),h),{documents:h,qs:a})))))}function tb(n,e,t){let r=n.xs.get(e)||xe.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class ww{constructor(){this.activeTargetIds=GN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nb{constructor(){this.Fo=new ww,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ww,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rb{xo(e){}shutdown(){}}/**
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
 */const Iw="ConnectivityMonitor";class Tw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(Iw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(Iw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bh=null;function Um(){return bh===null?bh=(function(){return 268435456+Math.round(2147483648*Math.random())})():bh++,"0x"+bh.toString(16)}/**
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
 */const im="RestConnection",ib={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===od?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Um(),h=this.Go(e,t.toUriEncodedString());ce(im,`Sending RPC '${e}' ${u}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(h),y=zs(m);return this.jo(e,h,f,r,y).then((w=>(ce(im,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Ns(im,`RPC '${e}' ${u} failed with error: `,w,"url: ",h,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ll})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=ib[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class ab extends sb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Um();return new Promise(((h,f)=>{const m=new OT;m.setWithCredentials(!0),m.listenOnce(MT.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case jh.NO_ERROR:const w=m.getResponseJson();ce(mn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case jh.TIMEOUT:ce(mn,`RPC '${e}' ${u} timed out`),f(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case jh.HTTP_ERROR:const I=m.getStatus();if(ce(mn,`RPC '${e}' ${u} failed with status:`,I,"response text:",m.getResponseText()),I>0){let R=m.getResponseJson();Array.isArray(R)&&(R=R[0]);const L=R==null?void 0:R.error;if(L&&L.status&&L.message){const V=(function(q){const G=q.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(G)>=0?G:K.UNKNOWN})(L.status);f(new oe(V,L.message))}else f(new oe(K.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new oe(K.UNAVAILABLE,"Connection failed."));break;default:ke(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ce(mn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ce(mn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=Um(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=FT(),h=VT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ce(mn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const w=u.createWebChannel(y,f);this.T_(w);let I=!1,R=!1;const L=new ob({Ho:U=>{R?ce(mn,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(I||(ce(mn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),ce(mn,`RPC '${e}' stream ${s} sending:`,U),w.send(U))},Yo:()=>w.close()}),V=(U,q,G)=>{U.listen(q,(Z=>{try{G(Z)}catch(se){setTimeout((()=>{throw se}),0)}}))};return V(w,uu.EventType.OPEN,(()=>{R||(ce(mn,`RPC '${e}' stream ${s} transport opened.`),L.s_())})),V(w,uu.EventType.CLOSE,(()=>{R||(R=!0,ce(mn,`RPC '${e}' stream ${s} transport closed`),L.__(),this.I_(w))})),V(w,uu.EventType.ERROR,(U=>{R||(R=!0,Ns(mn,`RPC '${e}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),L.__(new oe(K.UNAVAILABLE,"The operation could not be completed")))})),V(w,uu.EventType.MESSAGE,(U=>{var q;if(!R){const G=U.data[0];et(!!G,16349);const Z=G,se=(Z==null?void 0:Z.error)||((q=Z[0])===null||q===void 0?void 0:q.error);if(se){ce(mn,`RPC '${e}' stream ${s} received error:`,se);const ae=se.status;let he=(function(N){const P=Ot[N];if(P!==void 0)return E0(P)})(ae),x=se.message;he===void 0&&(he=K.INTERNAL,x="Unknown error status: "+ae+" with message "+se.message),R=!0,L.__(new oe(he,x)),w.close()}else ce(mn,`RPC '${e}' stream ${s} received:`,G),L.a_(G)}})),V(h,LT.STAT_EVENT,(U=>{U.stat===Rm.PROXY?ce(mn,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===Rm.NOPROXY&&ce(mn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{L.o_()}),0),L}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function sm(){return typeof document<"u"?document:null}/**
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
 */function Xd(n){return new hx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="PersistentStream";class M0{constructor(e,t,r,s,a,u,h,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new O0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Oi(t.toString()),Oi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(Sw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(Sw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lb extends M0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=px(this.serializer,e),r=(function(a){if(!("targetChange"in a))return xe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?xe.min():u.readTime?ti(u.readTime):xe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Fm(this.serializer),t.addTarget=(function(a,u){let h;const f=u.target;if(h=Dm(f)?{documents:_x(a,f)}:{query:yx(a,f).Vt},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=T0(a,u.resumeToken);const m=Mm(a,u.expectedCount);m!==null&&(h.expectedCount=m)}else if(u.snapshotVersion.compareTo(xe.min())>0){h.readTime=hd(a,u.snapshotVersion.toTimestamp());const m=Mm(a,u.expectedCount);m!==null&&(h.expectedCount=m)}return h})(this.serializer,e);const r=Ex(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Fm(this.serializer),t.removeTarget=e,this.k_(t)}}class ub extends M0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return et(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){et(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=gx(e.writeResults,e.commitTime),r=ti(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Fm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>mx(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{}class hb extends cb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Lm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(K.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Jo(e,Lm(t,r),s,u,h,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(K.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class db{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Oi(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="RemoteStore";class fb{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{jo(this)&&(ce(xo,"Restarting streams for network reachability change."),await(async function(f){const m=be(f);m.Ia.add(4),await Ju(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Jd(m)})(this))}))})),this.Aa=new db(r,s)}}async function Jd(n){if(jo(n))for(const e of n.da)await e(!0)}async function Ju(n){for(const e of n.da)await e(!1)}function L0(n,e){const t=be(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Kg(t)?Gg(t):dl(t).x_()&&Hg(t,e))}function qg(n,e){const t=be(n),r=dl(t);t.Ta.delete(e),r.x_()&&V0(t,e),t.Ta.size===0&&(r.x_()?r.B_():jo(t)&&t.Aa.set("Unknown"))}function Hg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dl(n).H_(e)}function V0(n,e){n.Ra.$e(e),dl(n).Y_(e)}function Gg(n){n.Ra=new ax({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),dl(n).start(),n.Aa.aa()}function Kg(n){return jo(n)&&!dl(n).M_()&&n.Ta.size>0}function jo(n){return be(n).Ia.size===0}function F0(n){n.Ra=void 0}async function pb(n){n.Aa.set("Online")}async function mb(n){n.Ta.forEach(((e,t)=>{Hg(n,e)}))}async function gb(n,e){F0(n),Kg(n)?(n.Aa.la(e),Gg(n)):n.Aa.set("Unknown")}async function _b(n,e,t){if(n.Aa.set("Online"),e instanceof I0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const h of a.targetIds)s.Ta.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.Ta.delete(h),s.Ra.removeTarget(h))})(n,e)}catch(r){ce(xo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fd(n,r)}else if(e instanceof Wh?n.Ra.Ye(e):e instanceof w0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(xe.min()))try{const r=await D0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const h=a.Ra.Pt(u);return h.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),h.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(ln.EMPTY_BYTE_STRING,y.snapshotVersion)),V0(a,f);const w=new _s(y.target,f,m,y.sequenceNumber);Hg(a,w)})),a.remoteSyncer.applyRemoteEvent(h)})(n,t)}catch(r){ce(xo,"Failed to raise snapshot:",r),await fd(n,r)}}async function fd(n,e,t){if(!cl(e))throw e;n.Ia.add(1),await Ju(n),n.Aa.set("Offline"),t||(t=()=>D0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(xo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Jd(n)}))}function j0(n,e){return e().catch((t=>fd(n,t,e)))}async function Zd(n){const e=be(n),t=Ms(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bg;for(;yb(e);)try{const s=await Zx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,vb(e,s)}catch(s){await fd(e,s)}U0(e)&&z0(e)}function yb(n){return jo(n)&&n.Pa.length<10}function vb(n,e){n.Pa.push(e);const t=Ms(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function U0(n){return jo(n)&&!Ms(n).M_()&&n.Pa.length>0}function z0(n){Ms(n).start()}async function Eb(n){Ms(n).na()}async function wb(n){const e=Ms(n);for(const t of n.Pa)e.X_(t.mutations)}async function Ib(n,e,t){const r=n.Pa.shift(),s=Fg.from(r,e,t);await j0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Zd(n)}async function Tb(n,e){e&&Ms(n).Z_&&await(async function(r,s){if((function(u){return sx(u)&&u!==K.ABORTED})(s.code)){const a=r.Pa.shift();Ms(r).N_(),await j0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Zd(r)}})(n,e),U0(n)&&z0(n)}async function Cw(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),ce(xo,"RemoteStore received new credentials");const r=jo(t);t.Ia.add(3),await Ju(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Jd(t)}async function Sb(n,e){const t=be(n);e?(t.Ia.delete(2),await Jd(t)):e||(t.Ia.add(2),await Ju(t),t.Aa.set("Unknown"))}function dl(n){return n.Va||(n.Va=(function(t,r,s){const a=be(t);return a.ia(),new lb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:pb.bind(null,n),e_:mb.bind(null,n),n_:gb.bind(null,n),J_:_b.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Kg(n)?Gg(n):n.Aa.set("Unknown")):(await n.Va.stop(),F0(n))}))),n.Va}function Ms(n){return n.ma||(n.ma=(function(t,r,s){const a=be(t);return a.ia(),new ub(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Eb.bind(null,n),n_:Tb.bind(null,n),ea:wb.bind(null,n),ta:Ib.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Zd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(xo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,h=new Qg(e,t,u,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yg(n,e){if(Oi("AsyncQueue",`${e}: ${n}`),cl(n))return new oe(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{static emptySet(e){return new Fa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ie.comparator(t.key,r.key):(t,r)=>Ie.comparator(t.key,r.key),this.keyedMap=cu(),this.sortedSet=new Vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Aw{constructor(){this.fa=new Vt(Ie.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ke(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xa{constructor(e,t,r,s,a,u,h,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((h=>{u.push({type:0,doc:h})})),new Xa(e,t,Fa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Ab{constructor(){this.queries=Rw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=be(t),a=s.queries;s.queries=Rw(),a.forEach(((u,h)=>{for(const f of h.wa)f.onError(r)}))})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function Rw(){return new Fo((n=>a0(n)),qd)}async function B0(n,e){const t=be(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new Cb,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=Yg(u,`Initialization of query '${Na(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Xg(t)}async function W0(n,e){const t=be(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Rb(n,e){const t=be(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const h of u.wa)h.Ca(s)&&(r=!0);u.ya=s}}r&&Xg(t)}function Pb(n,e,t){const r=be(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Xg(n){n.Da.forEach((e=>{e.next()}))}var zm,Pw;(Pw=zm||(zm={})).Fa="default",Pw.Cache="cache";class $0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==zm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.key=e}}class H0{constructor(e){this.key=e}}class kb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=We(),this.mutatedKeys=We(),this.Xa=l0(e),this.eu=new Fa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Aw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,w)=>{const I=s.get(y),R=Hd(this.query,w)?w:null,L=!!I&&this.mutatedKeys.has(I.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let U=!1;I&&R?I.data.isEqual(R.data)?L!==V&&(r.track({type:3,doc:R}),U=!0):this.iu(I,R)||(r.track({type:2,doc:R}),U=!0,(f&&this.Xa(R,f)>0||m&&this.Xa(R,m)<0)&&(h=!0)):!I&&R?(r.track({type:0,doc:R}),U=!0):I&&!R&&(r.track({type:1,doc:I}),U=!0,(f||m)&&(h=!0)),U&&(R?(u=u.add(R),a=V?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:h,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,w)=>(function(R,L){const V=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ke(20277,{At:U})}};return V(R)-V(L)})(y.type,w.type)||this.Xa(y.doc,w.doc))),this.su(r),s=s!=null&&s;const h=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Xa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Aw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=We(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new H0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new q0(r))})),t}uu(e){this.Ha=e.qs,this.Za=We();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Jg="SyncEngine";class Nb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xb{constructor(e){this.key=e,this.lu=!1}}class bb{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Fo((h=>a0(h)),qd),this.Tu=new Map,this.Iu=new Set,this.du=new Vt(Ie.comparator),this.Eu=new Map,this.Au=new zg,this.Ru={},this.Vu=new Map,this.mu=Ya.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Db(n,e,t=!0){const r=J0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await G0(r,e,t,!0),s}async function Ob(n,e){const t=J0(n);await G0(t,e,!0,!1)}async function G0(n,e,t,r){const s=await eb(n.localStore,ei(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await Mb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&L0(n.remoteStore,s),h}async function Mb(n,e,t,r,s){n.gu=(w,I,R)=>(async function(V,U,q,G){let Z=U.view.nu(q);Z.Ds&&(Z=await Ew(V.localStore,U.query,!1).then((({documents:x})=>U.view.nu(x,Z))));const se=G&&G.targetChanges.get(U.targetId),ae=G&&G.targetMismatches.get(U.targetId)!=null,he=U.view.applyChanges(Z,V.isPrimaryClient,se,ae);return Nw(V,U.targetId,he._u),he.snapshot})(n,w,I,R);const a=await Ew(n.localStore,e,!0),u=new kb(e,a.qs),h=u.nu(a.documents),f=Xu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(h,n.isPrimaryClient,f);Nw(n,t,m._u);const y=new Nb(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function Lb(n,e,t){const r=be(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!qd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&qg(r.remoteStore,s.targetId),Bm(r,s.targetId)})).catch(ul)):(Bm(r,s.targetId),await jm(r.localStore,s.targetId,!0))}async function Vb(n,e){const t=be(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qg(t.remoteStore,r.targetId))}async function Fb(n,e,t){const r=qb(n);try{const s=await(function(u,h){const f=be(u),m=_t.now(),y=h.reduce(((R,L)=>R.add(L.key)),We());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let L=Mi(),V=We();return f.Os.getEntries(R,y).next((U=>{L=U,L.forEach(((q,G)=>{G.isValidDocument()||(V=V.add(q))}))})).next((()=>f.localDocuments.getOverlayedDocuments(R,L))).next((U=>{w=U;const q=[];for(const G of h){const Z=ex(G,w.get(G.key).overlayedDocument);Z!=null&&q.push(new qs(G.key,Z,ZT(Z.value.mapValue),Cn.exists(!0)))}return f.mutationQueue.addMutationBatch(R,m,q,h)})).next((U=>{I=U;const q=U.applyToLocalDocumentSet(w,V);return f.documentOverlayCache.saveOverlays(R,U.batchId,q)}))})).then((()=>({batchId:I.batchId,changes:c0(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,h,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Vt(Ve)),m=m.insert(h,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Zu(r,s.changes),await Zd(r.remoteStore)}catch(s){const a=Yg(s,"Failed to persist write");t.reject(a)}}async function K0(n,e){const t=be(n);try{const r=await Xx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?et(u.lu,14607):s.removedDocuments.size>0&&(et(u.lu,42227),u.lu=!1))})),await Zu(t,r,e)}catch(r){await ul(r)}}function kw(n,e,t){const r=be(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const h=u.view.va(e);h.snapshot&&s.push(h.snapshot)})),(function(u,h){const f=be(u);f.onlineState=h;let m=!1;f.queries.forEach(((y,w)=>{for(const I of w.wa)I.va(h)&&(m=!0)})),m&&Xg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jb(n,e,t){const r=be(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Vt(Ie.comparator);u=u.insert(a,_n.newNoDocument(a,xe.min()));const h=We().add(a),f=new Yd(xe.min(),new Map,new Vt(Ve),u,h);await K0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Zg(r)}else await jm(r.localStore,e,!1).then((()=>Bm(r,e,t))).catch(ul)}async function Ub(n,e){const t=be(n),r=e.batch.batchId;try{const s=await Yx(t.localStore,e);Y0(t,r,null),Q0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(t,s)}catch(s){await ul(s)}}async function zb(n,e,t){const r=be(n);try{const s=await(function(u,h){const f=be(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,h).next((w=>(et(w!==null,37113),y=w.keys(),f.mutationQueue.removeMutationBatch(m,w)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,h))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);Y0(r,e,t),Q0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zu(r,s)}catch(s){await ul(s)}}function Q0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Y0(n,e,t){const r=be(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Bm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||X0(n,r)}))}function X0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(qg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Zg(n))}function Nw(n,e,t){for(const r of t)r instanceof q0?(n.Au.addReference(r.key,e),Bb(n,r)):r instanceof H0?(ce(Jg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||X0(n,r.key)):ke(19791,{yu:r})}function Bb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ce(Jg,"New document in limbo: "+t),n.Iu.add(r),Zg(n))}function Zg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ie(ft.fromString(e)),r=n.mu.next();n.Eu.set(r,new xb(t)),n.du=n.du.insert(t,r),L0(n.remoteStore,new _s(ei($d(t.path)),r,"TargetPurposeLimboResolution",zd.ue))}}async function Zu(n,e,t){const r=be(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((h,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const w=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=Wg.Es(f.targetId,m);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=be(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Y.forEach(m,(I=>Y.forEach(I.Is,(R=>y.persistence.referenceDelegate.addReference(w,I.targetId,R))).next((()=>Y.forEach(I.ds,(R=>y.persistence.referenceDelegate.removeReference(w,I.targetId,R)))))))))}catch(w){if(!cl(w))throw w;ce($g,"Failed to update sequence numbers: "+w)}for(const w of m){const I=w.targetId;if(!w.fromCache){const R=y.Fs.get(I),L=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(L);y.Fs=y.Fs.insert(I,V)}}})(r.localStore,a))}async function Wb(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){ce(Jg,"User change. New user:",e.toKey());const r=await b0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((h=>{h.forEach((f=>{f.reject(new oe(K.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zu(t,r.Bs)}}function $b(n,e){const t=be(n),r=t.Eu.get(e);if(r&&r.lu)return We().add(r.key);{let s=We();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const h=t.Pu.get(u);s=s.unionWith(h.view.tu)}return s}}function J0(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=K0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jb.bind(null,e),e.hu.J_=Rb.bind(null,e.eventManager),e.hu.pu=Pb.bind(null,e.eventManager),e}function qb(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zb.bind(null,e),e}class pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Qx(this.persistence,new Hx,e.initialUser,this.serializer)}Du(e){return new x0(Bg.Vi,this.serializer)}bu(e){return new nb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pd.provider={build:()=>new pd};class Hb extends pd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){et(this.persistence.referenceDelegate instanceof dd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xx(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Mn.withCacheSize(this.cacheSizeBytes):Mn.DEFAULT;return new x0((r=>dd.Vi(r,t)),this.serializer)}}class Wm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wb.bind(null,this.syncEngine),await Sb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ab})()}createDatastore(e){const t=Xd(e.databaseInfo.databaseId),r=(function(a){return new ab(a)})(e.databaseInfo);return(function(a,u,h,f){return new hb(a,u,h,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,h){return new fb(r,s,a,u,h)})(this.localStore,this.datastore,e.asyncQueue,(t=>kw(this.syncEngine,t,0)),(function(){return Tw.C()?new Tw:new rb})())}createSyncEngine(e,t){return(function(s,a,u,h,f,m,y){const w=new bb(s,a,u,h,f,m);return y&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=be(s);ce(xo,"RemoteStore shutting down."),a.Ia.add(5),await Ju(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wm.provider={build:()=>new Wm};/**
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
 */class Z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Oi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="FirestoreClient";class Gb{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=gn.UNAUTHENTICATED,this.clientId=xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(Ls,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(Ls,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function om(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Ls,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await b0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ns("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ns("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function xw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Kb(n);ce(Ls,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Cw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Cw(e.remoteStore,s))),n._onlineComponents=e}async function Kb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Ls,"Using user provided OfflineComponentProvider");try{await om(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ns("Error using user provided cache. Falling back to memory cache: "+t),await om(n,new pd)}}else ce(Ls,"Using default OfflineComponentProvider"),await om(n,new Hb(void 0));return n._offlineComponents}async function eS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Ls,"Using user provided OnlineComponentProvider"),await xw(n,n._uninitializedComponentsProvider._online)):(ce(Ls,"Using default OnlineComponentProvider"),await xw(n,new Wm))),n._onlineComponents}function Qb(n){return eS(n).then((e=>e.syncEngine))}async function $m(n){const e=await eS(n),t=e.eventManager;return t.onListen=Db.bind(null,e.syncEngine),t.onUnlisten=Lb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ob.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vb.bind(null,e.syncEngine),t}function Yb(n,e,t={}){const r=new Ss;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,h,f,m){const y=new Z0({next:I=>{y.Ou(),u.enqueueAndForget((()=>W0(a,w)));const R=I.docs.has(h);!R&&I.fromCache?m.reject(new oe(K.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&f&&f.source==="server"?m.reject(new oe(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),w=new $0($d(h.path),y,{includeMetadataChanges:!0,ka:!0});return B0(a,w)})(await $m(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function tS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bw=new Map;/**
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
 */const nS="firestore.googleapis.com",Dw=!0;class Ow{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nS,this.ssl=Dw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Dw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=N0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kx)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ow({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ow(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new sN;switch(r.type){case"firstParty":return new uN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=bw.get(t);r&&(ce("ComponentProvider","Removing Datastore"),bw.delete(t),r.terminate())})(this),Promise.resolve()}}function Xb(n,e,t,r={}){var s;n=Yn(n,ef);const a=zs(e),u=n._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(pg(`https://${f}`),mg("Firestore",!0)),u.host!==nS&&u.host!==f&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!xi(m,h)&&(n._setSettings(m),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=gn.MOCK_USER;else{y=qI(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new gn(I)}n._authCredentials=new oN(new UT(y,w))}}/**
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
 */class Hs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class Rt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Qu(t,Rt._jsonSchema))return new Rt(e,r||null,new Ie(ft.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Lt("string",Rt._jsonSchemaVersion),referencePath:Lt("string")};class As extends Hs{constructor(e,t,r){super(e,t,$d(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new Ie(e))}withConverter(e){return new As(this.firestore,e,this._path)}}function Fr(n,e,...t){if(n=it(n),BT("collection","path",e),n instanceof ef){const r=ft.fromString(e,...t);return GE(r),new As(n,null,r)}{if(!(n instanceof Rt||n instanceof As))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(e,...t));return GE(r),new As(n.firestore,null,r)}}function an(n,e,...t){if(n=it(n),arguments.length===1&&(e=xg.newId()),BT("doc","path",e),n instanceof ef){const r=ft.fromString(e,...t);return HE(r),new Rt(n,null,new Ie(r))}{if(!(n instanceof Rt||n instanceof As))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(e,...t));return HE(r),new Rt(n.firestore,n instanceof As?n.converter:null,new Ie(r))}}/**
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
 */const Mw="AsyncQueue";class Lw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new O0(this,"async_queue_retry"),this.oc=()=>{const r=sm();r&&ce(Mw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=sm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=sm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ss;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!cl(e))throw e;ce(Mw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Oi("INTERNAL UNHANDLED ERROR: ",Vw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Qg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&ke(47125,{hc:Vw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Vw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Fw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Li extends ef{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Lw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lw(e),this._firestoreClient=void 0,await e}}}function Jb(n,e){const t=typeof n=="object"?n:yg(),r=typeof n=="string"?n:od,s=Md(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=BI("firestore");a&&Xb(s,...a)}return s}function tf(n){if(n._terminated)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zb(n),n._firestoreClient}function Zb(n){var e,t,r;const s=n._freezeSettings(),a=(function(h,f,m,y){return new CN(h,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,tS(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Gb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hr(ln.fromBase64String(e))}catch(t){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hr(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qu(e,hr._jsonSchema))return hr.fromBase64String(e.bytes)}}hr._jsonSchemaVersion="firestore/bytes/1.0",hr._jsonSchema={type:Lt("string",hr._jsonSchemaVersion),bytes:Lt("string")};/**
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
 */class ec{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ni{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ni._jsonSchemaVersion}}static fromJSON(e){if(Qu(e,ni._jsonSchema))return new ni(e.latitude,e.longitude)}}ni._jsonSchemaVersion="firestore/geoPoint/1.0",ni._jsonSchema={type:Lt("string",ni._jsonSchemaVersion),latitude:Lt("number"),longitude:Lt("number")};/**
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
 */class ri{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qu(e,ri._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ri(e.vectorValues);throw new oe(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ri._jsonSchemaVersion="firestore/vectorValue/1.0",ri._jsonSchema={type:Lt("string",ri._jsonSchemaVersion),vectorValues:Lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=/^__.*__$/;class tD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yu(e,this.data,t,this.fieldTransforms)}}class rS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke(40011,{Ec:n})}}class nf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return md(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(iS(this.Ec)&&eD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class nD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xd(e)}Dc(e,t,r,s=!1){return new nf({Ec:e,methodName:t,bc:r,path:on.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(n){const e=n._freezeSettings(),t=Xd(n._databaseId);return new nD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function e_(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);r_("Data must be an object, but it was:",u,r);const h=aS(r,u);let f,m;if(a.merge)f=new Kn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const I=qm(e,w,t);if(!u.contains(I))throw new oe(K.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);uS(y,I)||y.push(I)}f=new Kn(y),m=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,m=u.fieldTransforms;return new tD(new Ln(h),f,m)}class rc extends tc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function rD(n,e,t){return new nf({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class t_ extends tc{_toFieldTransform(e){return new _0(e.path,new Mu)}isEqual(e){return e instanceof t_}}class n_ extends tc{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=rD(this,e,!0),r=this.vc.map((a=>fl(a,t))),s=new Qa(r);return new _0(e.path,s)}isEqual(e){return e instanceof n_&&xi(this.vc,e.vc)}}function sS(n,e,t,r){const s=n.Dc(1,e,t);r_("Data must be an object, but it was:",s,r);const a=[],u=Ln.empty();$s(r,((f,m)=>{const y=i_(e,f,t);m=it(m);const w=s.gc(y);if(m instanceof rc)a.push(y);else{const I=fl(m,w);I!=null&&(a.push(y),u.set(y,I))}}));const h=new Kn(a);return new rS(u,h,s.fieldTransforms)}function oS(n,e,t,r,s,a){const u=n.Dc(1,e,t),h=[qm(e,r,t)],f=[s];if(a.length%2!=0)throw new oe(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)h.push(qm(e,a[I])),f.push(a[I+1]);const m=[],y=Ln.empty();for(let I=h.length-1;I>=0;--I)if(!uS(m,h[I])){const R=h[I];let L=f[I];L=it(L);const V=u.gc(R);if(L instanceof rc)m.push(R);else{const U=fl(L,V);U!=null&&(m.push(R),y.set(R,U))}}const w=new Kn(m);return new rS(y,w,u.fieldTransforms)}function iD(n,e,t,r=!1){return fl(t,n.Dc(r?4:3,e))}function fl(n,e){if(lS(n=it(n)))return r_("Unsupported field value:",e,n),aS(n,e);if(n instanceof tc)return(function(r,s){if(!iS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const h of r){let f=fl(h,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=_t.fromDate(r);return{timestampValue:hd(s.serializer,a)}}if(r instanceof _t){const a=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hd(s.serializer,a)}}if(r instanceof ni)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hr)return{bytesValue:T0(s.serializer,r._byteString)};if(r instanceof Rt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Ug(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ri)return(function(u,h){return{mapValue:{fields:{[XT]:{stringValue:JT},[ad]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw h.wc("VectorValues must only contain numeric values.");return Vg(h.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ud(r)}`)})(n,e)}function aS(n,e){const t={};return qT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(n,((r,s)=>{const a=fl(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function lS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof ni||n instanceof hr||n instanceof Rt||n instanceof tc||n instanceof ri)}function r_(n,e,t){if(!lS(t)||!WT(t)){const r=Ud(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function qm(n,e,t){if((e=it(e))instanceof ec)return e._internalPath;if(typeof e=="string")return i_(n,e);throw md("Field path arguments must be of type string or ",n,!1,void 0,t)}const sD=new RegExp("[~\\*/\\[\\]]");function i_(n,e,t){if(e.search(sD)>=0)throw md(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ec(...e.split("."))._internalPath}catch{throw md(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function md(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new oe(K.INVALID_ARGUMENT,h+n+f)}function uS(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class cS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oD extends cS{data(){return super.data()}}function rf(n,e){return typeof e=="string"?i_(n,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
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
 */function aD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class s_{}class o_ extends s_{}function bo(n,e,...t){let r=[];e instanceof s_&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof a_)).length,h=a.filter((f=>f instanceof sf)).length;if(u>1||u>0&&h>0)throw new oe(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class sf extends o_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sf(e,t,r)}_apply(e){const t=this._parse(e);return dS(e._query,t),new Hs(e.firestore,e.converter,Om(e._query,t))}_parse(e){const t=nc(e.firestore);return(function(a,u,h,f,m,y,w){let I;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new oe(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Uw(w,y);const L=[];for(const V of w)L.push(jw(f,a,V));I={arrayValue:{values:L}}}else I=jw(f,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Uw(w,y),I=iD(h,u,w,y==="in"||y==="not-in");return Mt.create(m,y,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gd(n,e,t){const r=e,s=rf("where",n);return sf._create(s,r,t)}class a_ extends s_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new a_(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Vr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const h=a.getFlattenedFilters();for(const f of h)dS(u,f),u=Om(u,f)})(e._query,t),new Hs(e.firestore,e.converter,Om(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class l_ extends o_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new l_(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ou(a,u)})(e._query,this._field,this._direction);return new Hs(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new hl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function hS(n,e="asc"){const t=e,r=rf("orderBy",n);return l_._create(r,t)}class u_ extends o_{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new u_(e,t,r)}_apply(e){return new Hs(e.firestore,e.converter,ud(e._query,this._limit,this._limitType))}}function Do(n){return u_._create("limit",n,"F")}function jw(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new oe(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!o0(e)&&t.indexOf("/")!==-1)throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ft.fromString(t));if(!Ie.isDocumentKey(r))throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tw(n,new Ie(r))}if(t instanceof Rt)return tw(n,t._key);throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ud(t)}.`)}function Uw(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dS(n,e){const t=(function(s,a){for(const u of s)for(const h of u.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class lD{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ke(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $s(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ad].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>xt(u.doubleValue)));return new ri(a)}convertGeoPoint(e){return new ni(xt(e.latitude),xt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Wd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xu(e));default:return null}}convertTimestamp(e){const t=bs(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ft.fromString(e);et(k0(r),9688,{name:e});const s=new bu(r.get(1),r.get(3)),a=new Ie(r.popFirst(5));return s.isEqual(t)||Oi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function c_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ro extends cS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ro._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ro._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ro._jsonSchema={type:Lt("string",Ro._jsonSchemaVersion),bundleSource:Lt("string","DocumentSnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class $h extends Ro{data(e={}){return super.data(e)}}class ja{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new du(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new $h(this._firestore,this._userDataWriter,r.key,r,new du(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((h=>{const f=new $h(s._firestore,s._userDataWriter,h.doc.key,h.doc,new du(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((h=>a||h.type!==3)).map((h=>{const f=new $h(s._firestore,s._userDataWriter,h.doc.key,h.doc,new du(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return h.type!==0&&(m=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),y=u.indexOf(h.doc.key)),{type:uD(h.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ja._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ke(61501,{type:n})}}/**
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
 */function Mr(n){n=Yn(n,Rt);const e=Yn(n.firestore,Li);return Yb(tf(e),n._key).then((t=>mS(e,n,t)))}ja._jsonSchemaVersion="firestore/querySnapshot/1.0",ja._jsonSchema={type:Lt("string",ja._jsonSchemaVersion),bundleSource:Lt("string","QuerySnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class fS extends lD{constructor(e){super(),this.firestore=e}convertBytes(e){return new hr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function of(n,e,t){n=Yn(n,Rt);const r=Yn(n.firestore,Li),s=c_(n.converter,e,t);return ic(r,[e_(nc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Cn.none())])}function Ja(n,e,t,...r){n=Yn(n,Rt);const s=Yn(n.firestore,Li),a=nc(s);let u;return u=typeof(e=it(e))=="string"||e instanceof ec?oS(a,"updateDoc",n._key,e,t,r):sS(a,"updateDoc",n._key,e),ic(s,[u.toMutation(n._key,Cn.exists(!0))])}function cD(n){return ic(Yn(n.firestore,Li),[new Qd(n._key,Cn.none())])}function pS(n,e){const t=Yn(n.firestore,Li),r=an(n),s=c_(n.converter,e);return ic(t,[e_(nc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then((()=>r))}function ki(n,...e){var t,r,s;n=it(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Fw(e[u])||(a=e[u++]);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Fw(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,m,y;if(n instanceof Rt)m=Yn(n.firestore,Li),y=$d(n._key.path),f={next:w=>{e[u]&&e[u](mS(m,n,w))},error:e[u+1],complete:e[u+2]};else{const w=Yn(n,Hs);m=Yn(w.firestore,Li),y=w._query;const I=new fS(m);f={next:R=>{e[u]&&e[u](new ja(m,I,w,R))},error:e[u+1],complete:e[u+2]},aD(n._query)}return(function(I,R,L,V){const U=new Z0(V),q=new $0(R,U,L);return I.asyncQueue.enqueueAndForget((async()=>B0(await $m(I),q))),()=>{U.Ou(),I.asyncQueue.enqueueAndForget((async()=>W0(await $m(I),q)))}})(tf(m),y,h,f)}function ic(n,e){return(function(r,s){const a=new Ss;return r.asyncQueue.enqueueAndForget((async()=>Fb(await Qb(r),s,a))),a.promise})(tf(n),e)}function mS(n,e,t){const r=t.docs.get(e._key),s=new fS(n);return new Ro(n,s,e._key,r,new du(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class hD{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=nc(e)}set(e,t,r){this._verifyNotCommitted();const s=am(e,this._firestore),a=c_(s.converter,t,r),u=e_(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,Cn.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const a=am(e,this._firestore);let u;return u=typeof(t=it(t))=="string"||t instanceof ec?oS(this._dataReader,"WriteBatch.update",a._key,t,r,s):sS(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(u.toMutation(a._key,Cn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=am(e,this._firestore);return this._mutations=this._mutations.concat(new Qd(t._key,Cn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function am(n,e){if((n=it(n)).firestore!==e)throw new oe(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function dD(){return new rc("deleteField")}function Qn(){return new t_("serverTimestamp")}function zw(...n){return new n_("arrayUnion",n)}/**
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
 */function fD(n){return tf(n=Yn(n,Li)),new hD(n,(e=>ic(n,e)))}(function(e,t=!0){(function(s){ll=s})(Vo),Po(new ks("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new Li(new aN(r.getProvider("auth-internal")),new cN(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bu(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h}),"PUBLIC").setMultipleInstances(!0)),Jr(zE,BE,e),Jr(zE,BE,"esm2017")})();var Bw={};const Ww="@firebase/database",$w="1.0.20";/**
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
 */let gS="";function pD(n){gS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Au(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return si(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mD(e)}}catch{}return new gD},Ao=_S("localStorage"),_D=_S("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Od("@firebase/database"),yD=(function(){let n=1;return function(){return n++}})(),yS=function(n){const e=NR(n),t=new AR;t.update(e);const r=t.digest();return fg.encodeByteArray(r)},sc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sc.apply(null,r):typeof r=="object"?e+=zt(r):e+=r,e+=" "}return e};let Eu=null,qw=!0;const vD=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Ua.logLevel=Be.VERBOSE,Eu=Ua.log.bind(Ua)},Jt=function(...n){if(qw===!0&&(qw=!1,Eu===null&&_D.get("logging_enabled")===!0&&vD()),Eu){const e=sc.apply(null,n);Eu(e)}},oc=function(n){return function(...e){Jt(n,...e)}},Hm=function(...n){const e="FIREBASE INTERNAL ERROR: "+sc(...n);Ua.error(e)},Vi=function(...n){const e=`FIREBASE FATAL ERROR: ${sc(...n)}`;throw Ua.error(e),new Error(e)},An=function(...n){const e="FIREBASE WARNING: "+sc(...n);Ua.warn(e)},ED=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},af=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Za="[MIN_NAME]",Oo="[MAX_NAME]",Uo=function(n,e){if(n===e)return 0;if(n===Za||e===Oo)return-1;if(e===Za||n===Oo)return 1;{const t=Hw(n),r=Hw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},ID=function(n,e){return n===e?0:n<e?-1:1},ru=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+zt(e))},h_=function(n){if(typeof n!="object"||n===null)return zt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=zt(e[r]),t+=":",t+=h_(n[e[r]]);return t+="}",t},vS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Zt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ES=function(n){ne(!af(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,h,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,u=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let w="";for(f=0;f<64;f+=8){let I=parseInt(y.substr(f,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},TD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const AD=new RegExp("^-?(0*)\\d{1,10}$"),RD=-2147483648,PD=2147483647,Hw=function(n){if(AD.test(n)){const e=Number(n);if(e>=RD&&e<=PD)return e}return null},pl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw An("Exception was thrown by user callback.",t),e},Math.floor(0))}},kD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ND{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Gn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class qh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="5",wS="v",IS="s",TS="r",SS="f",CS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,AS="ls",RS="p",Gm="ac",PS="websocket",kS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t,r,s,a=!1,u="",h=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ao.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ao.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function xS(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===PS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bD(n)&&(t.ns=n.namespace);const s=[];return Zt(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.counters_={}}incrementCounter(e,t=1){si(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={},um={};function f_(n){const e=n.toString();return lm[e]||(lm[e]=new DD),lm[e]}function OD(n,e){const t=n.toString();return um[t]||(um[t]=e()),um[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&pl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="start",LD="close",VD="pLPCommand",FD="pRTLPCB",bS="id",DS="pw",OS="ser",jD="cb",UD="seg",zD="ts",BD="d",WD="dframe",MS=1870,LS=30,$D=MS-LS,qD=25e3,HD=3e4;class Oa{constructor(e,t,r,s,a,u,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oc(e),this.stats_=f_(t),this.urlFn=f=>(this.appCheckToken&&(f[Gm]=this.appCheckToken),xS(t,kS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new MD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HD)),wD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new p_((...a)=>{const[u,h,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Gw)this.id=h,this.password=f;else if(u===LD)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[Gw]="t",r[OS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wS]=d_,this.transportSessionId&&(r[IS]=this.transportSessionId),this.lastSessionId&&(r[AS]=this.lastSessionId),this.applicationId&&(r[RS]=this.applicationId),this.appCheckToken&&(r[Gm]=this.appCheckToken),typeof location<"u"&&location.hostname&&CS.test(location.hostname)&&(r[TS]=SS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oa.forceAllow_=!0}static forceDisallow(){Oa.forceDisallow_=!0}static isAvailable(){return Oa.forceAllow_?!0:!Oa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TD()&&!SD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=jI(t),s=vS(r,$D);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[WD]="t",r[bS]=e,r[DS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class p_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yD(),window[VD+this.uniqueCallbackIdentifier]=e,window[FD+this.uniqueCallbackIdentifier]=t,this.myIFrame=p_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(h){Jt("frame writing exception"),h.stack&&Jt(h.stack),Jt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bS]=this.myID,e[DS]=this.myPW,e[OS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+LS+r.length<=MS;){const u=this.pendingSegs.shift();r=r+"&"+UD+s+"="+u.seg+"&"+zD+s+"="+u.ts+"&"+BD+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(qD)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=16384,KD=45e3;let _d=null;typeof MozWebSocket<"u"?_d=MozWebSocket:typeof WebSocket<"u"&&(_d=WebSocket);class xr{constructor(e,t,r,s,a,u,h){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oc(this.connId),this.stats_=f_(t),this.connURL=xr.connectionURL_(t,u,h,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[wS]=d_,typeof location<"u"&&location.hostname&&CS.test(location.hostname)&&(u[TS]=SS),t&&(u[IS]=t),r&&(u[AS]=r),s&&(u[Gm]=s),a&&(u[RS]=a),xS(e,PS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ao.set("previous_websocket_failure",!0);try{let r;_R(),this.mySock=new _d(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_d!==null&&!xr.forceDisallow_}static previouslyFailed(){return Ao.isInMemoryStorage||Ao.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ao.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Au(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=vS(t,GD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xr.responsesRequiredToBeHealthy=2;xr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static get ALL_TRANSPORTS(){return[Oa,xr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=xr&&xr.isAvailable();let r=t&&!xr.previouslyFailed();if(e.webSocketOnly&&(t||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xr];else{const s=this.transports_=[];for(const a of Vu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Vu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=6e4,YD=5e3,XD=10*1024,JD=100*1024,cm="t",Kw="d",ZD="s",Qw="r",eO="e",Yw="o",Xw="a",Jw="n",Zw="p",tO="h";class nO{constructor(e,t,r,s,a,u,h,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oc("c:"+this.id+":"),this.transportManager_=new Vu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cm in e){const t=e[cm];t===Xw?this.upgradeIfSecondaryHealthy_():t===Qw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Yw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ru("t",e),r=ru("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ru("t",e),r=ru("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ru(cm,e);if(Kw in e){const r=e[Kw];if(t===tO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Jw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ZD?this.onConnectionShutdown_(r):t===Qw?this.onReset_(r):t===eO?Hm("Server Error: "+r):t===Yw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),d_!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),wu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ao.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends FS{static getInstance(){return new yd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=32,tI=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new st("")}function Fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Vs(n){return n.pieces_.length-n.pieceNum_}function ut(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function m_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function rO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function jS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function It(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof st)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new st(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function Sn(n,e){const t=Fe(n),r=Fe(e);if(t===null)return e;if(t===r)return Sn(ut(n),ut(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function iO(n,e){const t=Fu(n,0),r=Fu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Uo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function g_(n,e){if(Vs(n)!==Vs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function dr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Vs(n)>Vs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class sO{constructor(e,t){this.errorPrefix_=t,this.parts_=Fu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dd(this.parts_[r]);US(this)}}function oO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Dd(e),US(n)}function aO(n){const e=n.parts_.pop();n.byteLength_-=Dd(e),n.parts_.length>0&&(n.byteLength_-=1)}function US(n){if(n.byteLength_>tI)throw new Error(n.errorPrefix_+"has a key path longer than "+tI+" bytes ("+n.byteLength_+").");if(n.parts_.length>eI)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eI+") or object contains a cycle "+To(n))}function To(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __ extends FS{static getInstance(){return new __}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=1e3,lO=300*1e3,nI=30*1e3,uO=1.3,cO=3e4,hO="server_kill",rI=3;class Ni extends VS{constructor(e,t,r,s,a,u,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=Ni.nextPersistentConnectionId_++,this.log_=oc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=iu,this.maxReconnectDelay_=lO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");__.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(zt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Xr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const h=u.d;u.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,h=>{const f=h.d,m=h.s;Ni.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&si(e,"w")){const r=Wa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nI)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=SR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+zt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hm("Unrecognized action received from server: "+zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cO&&(this.reconnectDelay_=iu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ni.nextConnectionId_++,a=this.lastSessionId;let u=!1,h=null;const f=function(){h?h.close():(u=!0,r())},m=function(w){ne(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(w)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,h=new nO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,R=>{An(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(hO)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&An(w),f())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>h_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new st(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rI&&(this.reconnectDelay_=nI,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rI&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+gS.replace(/\./g,"-")]=1,gg()?e["framework.cordova"]=1:HI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yd.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}Ni.nextPersistentConnectionId_=0;Ni.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ze(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new ze(Za,e),s=new ze(Za,t);return this.compare(r,s)!==0}minPost(){return ze.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;class zS extends lf{static get __EMPTY_NODE(){return Dh}static set __EMPTY_NODE(e){Dh=e}compare(e,t){return Uo(e.name,t.name)}isDefinedOn(e){throw sl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ze.MIN}maxPost(){return new ze(Oo,Dh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new ze(e,Dh)}toString(){return".key"}}const za=new zS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Xt.RED,this.left=s??Vn.EMPTY_NODE,this.right=a??Vn.EMPTY_NODE}copy(e,t,r,s,a){return new Xt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Vn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class dO{copy(e,t,r,s,a){return this}insert(e,t,r){return new Xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vn{constructor(e,t=Vn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new Vn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Oh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Oh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Oh(this.root_,null,this.comparator_,!0,e)}}Vn.EMPTY_NODE=new dO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n,e){return Uo(n.name,e.name)}function y_(n,e){return Uo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Km;function pO(n){Km=n}const BS=function(n){return typeof n=="number"?"number:"+ES(n):"string:"+n},WS=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&si(e,".sv"),"Priority must be a string or number.")}else ne(n===Km||n.isEmpty(),"priority of unexpected type.");ne(n===Km||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iI;class Qt{static set __childrenNodeConstructor(e){iI=e}static get __childrenNodeConstructor(){return iI}constructor(e,t=Qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),WS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Fe(e)===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Fe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ut(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ES(this.value_):e+=this.value_,this.lazyHash_=yS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Qt.VALUE_TYPE_ORDER.indexOf(t),a=Qt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $S,qS;function mO(n){$S=n}function gO(n){qS=n}class _O extends lf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Uo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ze.MIN}maxPost(){return new ze(Oo,new Qt("[PRIORITY-POST]",qS))}makePost(e,t){const r=$S(e);return new ze(t,new Qt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Tt=new _O;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=Math.log(2);class vO{constructor(e){const t=a=>parseInt(Math.log(a)/yO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let w,I;if(y===0)return null;if(y===1)return w=n[f],I=t?t(w):w,new Xt(I,w.node,Xt.BLACK,null,null);{const R=parseInt(y/2,10)+f,L=s(f,R),V=s(R+1,m);return w=n[R],I=t?t(w):w,new Xt(I,w.node,Xt.BLACK,L,V)}},a=function(f){let m=null,y=null,w=n.length;const I=function(L,V){const U=w-L,q=w;w-=L;const G=s(U+1,q),Z=n[U],se=t?t(Z):Z;R(new Xt(se,Z.node,V,null,G))},R=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<f.count;++L){const V=f.nextBitIsOne(),U=Math.pow(2,f.count-(L+1));V?I(U,Xt.BLACK):(I(U,Xt.BLACK),I(U,Xt.RED))}return y},u=new vO(n.length),h=a(u);return new Vn(r||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;const Pa={};class Pi{static get Default(){return ne(Pa&&Tt,"ChildrenNode.ts has not been loaded"),hm=hm||new Pi({".priority":Pa},{".priority":Tt}),hm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Wa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vn?t:null}hasIndex(e){return si(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==za,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(ze.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let h;s?h=vd(r,e.getCompare()):h=Pa;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=h,new Pi(y,m)}addToIndexes(e,t){const r=Xh(this.indexes_,(s,a)=>{const u=Wa(this.indexSet_,a);if(ne(u,"Missing index implementation for "+a),s===Pa)if(u.isDefinedOn(e.node)){const h=[],f=t.getIterator(ze.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),vd(h,u.getCompare())}else return Pa;else{const h=t.get(e.name);let f=s;return h&&(f=f.remove(new ze(e.name,h))),f.insert(e,e.node)}});return new Pi(r,this.indexSet_)}removeFromIndexes(e,t){const r=Xh(this.indexes_,s=>{if(s===Pa)return s;{const a=t.get(e.name);return a?s.remove(new ze(e.name,a)):s}});return new Pi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;class Pe{static get EMPTY_NODE(){return su||(su=new Pe(new Vn(y_),null,Pi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&WS(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||su}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?su:t}}getChild(e){const t=Fe(e);return t===null?this:this.getImmediateChild(t).getChild(ut(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new ze(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?su:this.priorityNode_;return new Pe(s,u,a)}}updateChild(e,t){const r=Fe(e);if(r===null)return t;{ne(Fe(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ut(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(Tt,(u,h)=>{t[u]=h.val(e),r++,a&&Pe.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const h in t)u[h]=t[h];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BS(this.getPriority().val())+":"),this.forEachChild(Tt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":yS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new ze(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ze(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ze(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ze.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ze.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ac?-1:0}withIndex(e){if(e===za||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===za||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Tt),s=t.getIterator(Tt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===za?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EO extends Pe{constructor(){super(new Vn(y_),Pe.EMPTY_NODE,Pi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const ac=new EO;Object.defineProperties(ze,{MIN:{value:new ze(Za,Pe.EMPTY_NODE)},MAX:{value:new ze(Oo,ac)}});zS.__EMPTY_NODE=Pe.EMPTY_NODE;Qt.__childrenNodeConstructor=Pe;pO(ac);gO(ac);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=!0;function At(n,e=null){if(n===null)return Pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qt(t,At(e))}if(!(n instanceof Array)&&wO){const t=[];let r=!1;if(Zt(n,(u,h)=>{if(u.substring(0,1)!=="."){const f=At(h);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new ze(u,f)))}}),t.length===0)return Pe.EMPTY_NODE;const a=vd(t,fO,u=>u.name,y_);if(r){const u=vd(t,Tt.getCompare());return new Pe(a,At(e),new Pi({".priority":u},{".priority":Tt}))}else return new Pe(a,At(e),Pi.Default)}else{let t=Pe.EMPTY_NODE;return Zt(n,(r,s)=>{if(si(n,r)&&r.substring(0,1)!=="."){const a=At(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(At(e))}}mO(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO extends lf{constructor(e){super(),this.indexPath_=e,ne(!Ue(e)&&Fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Uo(e.name,t.name):a}makePost(e,t){const r=At(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,r);return new ze(t,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,ac);return new ze(Oo,e)}toString(){return Fu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO extends lf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Uo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ze.MIN}maxPost(){return ze.MAX}makePost(e,t){const r=At(e);return new ze(t,r)}toString(){return".value"}}const SO=new TO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(n){return{type:"value",snapshotNode:n}}function el(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ju(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Uu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function CO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(s).equals(r.getChild(s))&&h.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(ju(t,h)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?u.trackChildChange(el(t,r)):u.trackChildChange(Uu(t,r,h))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Tt,(s,a)=>{t.hasChild(s)||r.trackChildChange(ju(s,a))}),t.isLeafNode()||t.forEachChild(Tt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Uu(s,a,u))}else r.trackChildChange(el(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Pe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.indexedFilter_=new v_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zu.getStartPost_(e),this.endPost_=zu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new ze(t,r))||(r=Pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Pe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Pe.EMPTY_NODE);const a=this;return t.forEachChild(Tt,(u,h)=>{a.matches(new ze(u,h))||(s=s.updateImmediateChild(u,Pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new zu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new ze(t,r))||(r=Pe.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Pe.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))s=s.updateImmediateChild(h.name,h.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Pe.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const h=a.getNext();u<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?u++:s=s.updateImmediateChild(h.name,Pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(I,R)=>w(R,I)}else u=this.index_.getCompare();const h=e;ne(h.numChildren()===this.limit_,"");const f=new ze(t,r),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const w=h.getImmediateChild(t);let I=s.getChildAfterChild(this.index_,m,this.reverse_);for(;I!=null&&(I.name===t||h.hasChild(I.name));)I=s.getChildAfterChild(this.index_,I,this.reverse_);const R=I==null?1:u(I,f);if(y&&!r.isEmpty()&&R>=0)return a!=null&&a.trackChildChange(Uu(t,r,w)),h.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(ju(t,w));const V=h.updateImmediateChild(t,Pe.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a!=null&&a.trackChildChange(el(I.name,I.node)),V.updateImmediateChild(I.name,I.node)):V}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(ju(m.name,m.node)),a.trackChildChange(el(t,r))),h.updateImmediateChild(t,r).updateImmediateChild(m.name,Pe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Za}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new E_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RO(n){return n.loadsAllData()?new v_(n.getIndex()):n.hasLimit()?new AO(n):new zu(n)}function sI(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Tt?t="$priority":n.index_===SO?t="$value":n.index_===za?t="$key":(ne(n.index_ instanceof IO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=zt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=zt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+zt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=zt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+zt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function oI(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Tt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends VS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=oc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Ed.getListenId_(e,r),h={};this.listens_[u]=h;const f=sI(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let w=y;if(m===404&&(w=null,m=null),m===null&&this.onDataUpdate_(a,w,!1,r),Wa(this.listens_,u)===h){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",s(I,null)}})}unlisten(e,t){const r=Ed.getListenId_(e,t);delete this.listens_[r]}get(e){const t=sI(e._queryParams),r=e._path.toString(),s=new Xr;return this.restRequest_(r+".json",t,(a,u)=>{let h=u;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ol(t);this.log_("Sending REST request for "+u);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+u+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=Au(h.responseText)}catch{An("Failed to parse JSON response for "+u+": "+h.responseText)}r(null,f)}else h.status!==401&&h.status!==404&&An("Got unsuccessful REST response for "+u+" Status: "+h.status),r(h.status);r=null}},h.open("GET",u,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){return{value:null,children:new Map}}function ml(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Fe(e);n.children.has(r)||n.children.set(r,wd());const s=n.children.get(r);e=ut(e),ml(s,e,t)}}function Qm(n,e){if(Ue(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Tt,(r,s)=>{ml(n,new st(r),s)}),Qm(n,e)}}else if(n.children.size>0){const t=Fe(e);return e=ut(e),n.children.has(t)&&Qm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Ym(n,e,t){n.value!==null?t(e,n.value):kO(n,(r,s)=>{const a=new st(e.toString()+"/"+r);Ym(s,a,t)})}function kO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Zt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=10*1e3,xO=30*1e3,bO=300*1e3;class DO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new NO(e);const r=aI+(xO-aI)*Math.random();wu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Zt(e,(s,a)=>{a>0&&si(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),wu(this.reportStats_.bind(this),Math.floor(Math.random()*2*bO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dr||(Dr={}));function w_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function I_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function T_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Dr.ACK_USER_WRITE,this.source=w_()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new Id(Ye(),t,this.revert)}}else return ne(Fe(this.path)===e,"operationForChild called for unrelated child."),new Id(ut(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t){this.source=e,this.path=t,this.type=Dr.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new Bu(this.source,Ye()):new Bu(this.source,ut(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Dr.OVERWRITE}operationForChild(e){return Ue(this.path)?new Mo(this.source,Ye(),this.snap.getImmediateChild(e)):new Mo(this.source,ut(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Dr.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new Mo(this.source,Ye(),t.value):new tl(this.source,Ye(),t)}else return ne(Fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tl(this.source,ut(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(CO(u.childName,u.snapshotNode))}),ou(n,s,"child_removed",e,r,t),ou(n,s,"child_added",e,r,t),ou(n,s,"child_moved",a,r,t),ou(n,s,"child_changed",e,r,t),ou(n,s,"value",e,r,t),s}function ou(n,e,t,r,s,a){const u=r.filter(h=>h.type===t);u.sort((h,f)=>VO(n,h,f)),u.forEach(h=>{const f=LO(n,h,a);s.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,n.query_))})})}function LO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function VO(n,e,t){if(e.childName==null||t.childName==null)throw sl("Should only compare child_ events.");const r=new ze(e.childName,e.snapshotNode),s=new ze(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n,e){return{eventCache:n,serverCache:e}}function Iu(n,e,t,r){return uf(new Fs(e,t,r),n.serverCache)}function GS(n,e,t,r){return uf(n.eventCache,new Fs(e,t,r))}function Td(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Lo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dm;const FO=()=>(dm||(dm=new Vn(ID)),dm);class dt{static fromObject(e){let t=new dt(null);return Zt(e,(r,s)=>{t=t.set(new st(r),s)}),t}constructor(e,t=FO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Ue(e))return null;{const r=Fe(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(ut(e),t);return a!=null?{path:It(new st(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Fe(e),r=this.children.get(t);return r!==null?r.subtree(ut(e)):new dt(null)}}set(e,t){if(Ue(e))return new dt(t,this.children);{const r=Fe(e),a=(this.children.get(r)||new dt(null)).set(ut(e),t),u=this.children.insert(r,a);return new dt(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new dt(null):new dt(null,this.children);{const t=Fe(e),r=this.children.get(t);if(r){const s=r.remove(ut(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new dt(null):new dt(this.value,a)}else return this}}get(e){if(Ue(e))return this.value;{const t=Fe(e),r=this.children.get(t);return r?r.get(ut(e)):null}}setTree(e,t){if(Ue(e))return t;{const r=Fe(e),a=(this.children.get(r)||new dt(null)).setTree(ut(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new dt(this.value,u)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(It(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ue(e))return null;{const a=Fe(e),u=this.children.get(a);return u?u.findOnPath_(ut(e),It(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,r){if(Ue(e))return this;{this.value&&r(t,this.value);const s=Fe(e),a=this.children.get(s);return a?a.foreachOnPath_(ut(e),It(t,s),r):new dt(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(It(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.writeTree_=e}static empty(){return new Lr(new dt(null))}}function Tu(n,e,t){if(Ue(e))return new Lr(new dt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Sn(s,e);return a=a.updateChild(u,t),new Lr(n.writeTree_.set(s,a))}else{const s=new dt(t),a=n.writeTree_.setTree(e,s);return new Lr(a)}}}function Xm(n,e,t){let r=n;return Zt(t,(s,a)=>{r=Tu(r,It(e,s),a)}),r}function lI(n,e){if(Ue(e))return Lr.empty();{const t=n.writeTree_.setTree(e,new dt(null));return new Lr(t)}}function Jm(n,e){return zo(n,e)!=null}function zo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Sn(t.path,e)):null}function uI(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tt,(r,s)=>{e.push(new ze(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ze(r,s.value))}),e}function Rs(n,e){if(Ue(e))return n;{const t=zo(n,e);return t!=null?new Lr(new dt(t)):new Lr(n.writeTree_.subtree(e))}}function Zm(n){return n.writeTree_.isEmpty()}function nl(n,e){return KS(Ye(),n.writeTree_,e)}function KS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=KS(It(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(It(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e){return JS(e,n)}function jO(n,e,t,r,s){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Tu(n.visibleWrites,e,t)),n.lastWriteId=r}function UO(n,e,t,r){ne(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Xm(n.visibleWrites,e,t),n.lastWriteId=r}function zO(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function BO(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const h=n.allWrites[u];h.visible&&(u>=t&&WO(h,r.path)?s=!1:dr(r.path,h.path)&&(a=!0)),u--}if(s){if(a)return $O(n),!0;if(r.snap)n.visibleWrites=lI(n.visibleWrites,r.path);else{const h=r.children;Zt(h,f=>{n.visibleWrites=lI(n.visibleWrites,It(r.path,f))})}return!0}else return!1}function WO(n,e){if(n.snap)return dr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&dr(It(n.path,t),e))return!0;return!1}function $O(n){n.visibleWrites=QS(n.allWrites,qO,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function qO(n){return n.visible}function QS(n,e,t){let r=Lr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let h;if(a.snap)dr(t,u)?(h=Sn(t,u),r=Tu(r,h,a.snap)):dr(u,t)&&(h=Sn(u,t),r=Tu(r,Ye(),a.snap.getChild(h)));else if(a.children){if(dr(t,u))h=Sn(t,u),r=Xm(r,h,a.children);else if(dr(u,t))if(h=Sn(u,t),Ue(h))r=Xm(r,Ye(),a.children);else{const f=Wa(a.children,Fe(h));if(f){const m=f.getChild(ut(h));r=Tu(r,Ye(),m)}}}else throw sl("WriteRecord should have .snap or .children")}}return r}function YS(n,e,t,r,s){if(!r&&!s){const a=zo(n.visibleWrites,e);if(a!=null)return a;{const u=Rs(n.visibleWrites,e);if(Zm(u))return t;if(t==null&&!Jm(u,Ye()))return null;{const h=t||Pe.EMPTY_NODE;return nl(u,h)}}}else{const a=Rs(n.visibleWrites,e);if(!s&&Zm(a))return t;if(!s&&t==null&&!Jm(a,Ye()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(dr(m.path,e)||dr(e,m.path))},h=QS(n.allWrites,u,e),f=t||Pe.EMPTY_NODE;return nl(h,f)}}}function HO(n,e,t){let r=Pe.EMPTY_NODE;const s=zo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Tt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Rs(n.visibleWrites,e);return t.forEachChild(Tt,(u,h)=>{const f=nl(Rs(a,new st(u)),h);r=r.updateImmediateChild(u,f)}),uI(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Rs(n.visibleWrites,e);return uI(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function GO(n,e,t,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=It(e,t);if(Jm(n.visibleWrites,a))return null;{const u=Rs(n.visibleWrites,a);return Zm(u)?s.getChild(t):nl(u,s.getChild(t))}}function KO(n,e,t,r){const s=It(e,t),a=zo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Rs(n.visibleWrites,s);return nl(u,r.getNode().getImmediateChild(t))}else return null}function QO(n,e){return zo(n.visibleWrites,e)}function YO(n,e,t,r,s,a,u){let h;const f=Rs(n.visibleWrites,e),m=zo(f,Ye());if(m!=null)h=m;else if(t!=null)h=nl(f,t);else return[];if(h=h.withIndex(u),!h.isEmpty()&&!h.isLeafNode()){const y=[],w=u.getCompare(),I=a?h.getReverseIteratorFrom(r,u):h.getIteratorFrom(r,u);let R=I.getNext();for(;R&&y.length<s;)w(R,r)!==0&&y.push(R),R=I.getNext();return y}else return[]}function XO(){return{visibleWrites:Lr.empty(),allWrites:[],lastWriteId:-1}}function Sd(n,e,t,r){return YS(n.writeTree,n.treePath,e,t,r)}function S_(n,e){return HO(n.writeTree,n.treePath,e)}function cI(n,e,t,r){return GO(n.writeTree,n.treePath,e,t,r)}function Cd(n,e){return QO(n.writeTree,It(n.treePath,e))}function JO(n,e,t,r,s,a){return YO(n.writeTree,n.treePath,e,t,r,s,a)}function C_(n,e,t){return KO(n.writeTree,n.treePath,e,t)}function XS(n,e){return JS(It(n.treePath,e),n.writeTree)}function JS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Uu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,ju(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,el(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Uu(r,e.snapshotNode,s.oldSnap));else throw sl("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const ZS=new e2;class A_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return C_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lo(this.viewCache_),a=JO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(n){return{filter:n}}function n2(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function r2(n,e,t,r,s){const a=new ZO;let u,h;if(t.type===Dr.OVERWRITE){const m=t;m.source.fromUser?u=eg(n,e,m.path,m.snap,r,s,a):(ne(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!Ue(m.path),u=Ad(n,e,m.path,m.snap,r,s,h,a))}else if(t.type===Dr.MERGE){const m=t;m.source.fromUser?u=s2(n,e,m.path,m.children,r,s,a):(ne(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),u=tg(n,e,m.path,m.children,r,s,h,a))}else if(t.type===Dr.ACK_USER_WRITE){const m=t;m.revert?u=l2(n,e,m.path,r,s,a):u=o2(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Dr.LISTEN_COMPLETE)u=a2(n,e,t.path,r,a);else throw sl("Unknown operation type: "+t.type);const f=a.getChanges();return i2(e,u,f),{viewCache:u,changes:f}}function i2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Td(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(HS(Td(e)))}}function eC(n,e,t,r,s,a){const u=e.eventCache;if(Cd(r,t)!=null)return e;{let h,f;if(Ue(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Lo(e),y=m instanceof Pe?m:Pe.EMPTY_NODE,w=S_(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const m=Sd(r,Lo(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Fe(t);if(m===".priority"){ne(Vs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const w=cI(r,t,y,f);w!=null?h=n.filter.updatePriority(y,w):h=u.getNode()}else{const y=ut(t);let w;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const I=cI(r,t,u.getNode(),f);I!=null?w=u.getNode().getImmediateChild(m).updateChild(y,I):w=u.getNode().getImmediateChild(m)}else w=C_(r,m,e.serverCache);w!=null?h=n.filter.updateChild(u.getNode(),m,w,y,s,a):h=u.getNode()}}return Iu(e,h,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function Ad(n,e,t,r,s,a,u,h){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const R=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),R,null)}else{const R=Fe(t);if(!f.isCompleteForPath(t)&&Vs(t)>1)return e;const L=ut(t),U=f.getNode().getImmediateChild(R).updateChild(L,r);R===".priority"?m=y.updatePriority(f.getNode(),U):m=y.updateChild(f.getNode(),R,U,L,ZS,null)}const w=GS(e,m,f.isFullyInitialized()||Ue(t),y.filtersNodes()),I=new A_(s,w,a);return eC(n,w,t,s,I,h)}function eg(n,e,t,r,s,a,u){const h=e.eventCache;let f,m;const y=new A_(s,e,a);if(Ue(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Iu(e,m,!0,n.filter.filtersNodes());else{const w=Fe(t);if(w===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Iu(e,m,h.isFullyInitialized(),h.isFiltered());else{const I=ut(t),R=h.getNode().getImmediateChild(w);let L;if(Ue(I))L=r;else{const V=y.getCompleteChild(w);V!=null?m_(I)===".priority"&&V.getChild(jS(I)).isEmpty()?L=V:L=V.updateChild(I,r):L=Pe.EMPTY_NODE}if(R.equals(L))f=e;else{const V=n.filter.updateChild(h.getNode(),w,L,I,y,u);f=Iu(e,V,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function hI(n,e){return n.eventCache.isCompleteForChild(e)}function s2(n,e,t,r,s,a,u){let h=e;return r.foreach((f,m)=>{const y=It(t,f);hI(e,Fe(y))&&(h=eg(n,h,y,m,s,a,u))}),r.foreach((f,m)=>{const y=It(t,f);hI(e,Fe(y))||(h=eg(n,h,y,m,s,a,u))}),h}function dI(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function tg(n,e,t,r,s,a,u,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Ue(t)?m=r:m=new dt(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((w,I)=>{if(y.hasChild(w)){const R=e.serverCache.getNode().getImmediateChild(w),L=dI(n,R,I);f=Ad(n,f,new st(w),L,s,a,u,h)}}),m.children.inorderTraversal((w,I)=>{const R=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!y.hasChild(w)&&!R){const L=e.serverCache.getNode().getImmediateChild(w),V=dI(n,L,I);f=Ad(n,f,new st(w),V,s,a,u,h)}}),f}function o2(n,e,t,r,s,a,u){if(Cd(s,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Ue(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ad(n,e,t,f.getNode().getChild(t),s,a,h,u);if(Ue(t)){let m=new dt(null);return f.getNode().forEachChild(za,(y,w)=>{m=m.set(new st(y),w)}),tg(n,e,t,m,s,a,h,u)}else return e}else{let m=new dt(null);return r.foreach((y,w)=>{const I=It(t,y);f.isCompleteForPath(I)&&(m=m.set(y,f.getNode().getChild(I)))}),tg(n,e,t,m,s,a,h,u)}}function a2(n,e,t,r,s){const a=e.serverCache,u=GS(e,a.getNode(),a.isFullyInitialized()||Ue(t),a.isFiltered());return eC(n,u,t,r,ZS,s)}function l2(n,e,t,r,s,a){let u;if(Cd(r,t)!=null)return e;{const h=new A_(r,e,s),f=e.eventCache.getNode();let m;if(Ue(t)||Fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Sd(r,Lo(e));else{const w=e.serverCache.getNode();ne(w instanceof Pe,"serverChildren would be complete if leaf node"),y=S_(r,w)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Fe(t);let w=C_(r,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=f.getImmediateChild(y)),w!=null?m=n.filter.updateChild(f,y,w,ut(t),h,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Pe.EMPTY_NODE,ut(t),h,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Sd(r,Lo(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Cd(r,Ye())!=null,Iu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new v_(r.getIndex()),a=RO(r);this.processor_=t2(a);const u=t.serverCache,h=t.eventCache,f=s.updateFullNode(Pe.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Pe.EMPTY_NODE,h.getNode(),null),y=new Fs(f,u.isFullyInitialized(),s.filtersNodes()),w=new Fs(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=uf(w,y),this.eventGenerator_=new OO(this.query_)}get query(){return this.query_}}function c2(n){return n.viewCache_.serverCache.getNode()}function h2(n){return Td(n.viewCache_)}function d2(n,e){const t=Lo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Fe(e)).isEmpty())?t.getChild(e):null}function fI(n){return n.eventRegistrations_.length===0}function f2(n,e){n.eventRegistrations_.push(e)}function pI(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function mI(n,e,t,r){e.type===Dr.MERGE&&e.source.queryId!==null&&(ne(Lo(n.viewCache_),"We should always have a full cache before handling merges"),ne(Td(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=r2(n.processor_,s,e,t,r);return n2(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,tC(n,a.changes,a.viewCache.eventCache.getNode(),null)}function p2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Tt,(a,u)=>{r.push(el(a,u))}),t.isFullyInitialized()&&r.push(HS(t.getNode())),tC(n,r,t.getNode(),e)}function tC(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return MO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd;class nC{constructor(){this.views=new Map}}function m2(n){ne(!Rd,"__referenceConstructor has already been defined"),Rd=n}function g2(){return ne(Rd,"Reference.ts has not been loaded"),Rd}function _2(n){return n.views.size===0}function R_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ne(a!=null,"SyncTree gave us an op for an invalid query."),mI(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(mI(u,e,t,r));return a}}function rC(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let h=Sd(t,s?r:null),f=!1;h?f=!0:r instanceof Pe?(h=S_(t,r),f=!1):(h=Pe.EMPTY_NODE,f=!1);const m=uf(new Fs(h,f,!1),new Fs(r,s,!1));return new u2(e,m)}return u}function y2(n,e,t,r,s,a){const u=rC(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),f2(u,t),p2(u,t)}function v2(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const h=js(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(pI(m,t,r)),fI(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(pI(f,t,r)),fI(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return h&&!js(n)&&a.push(new(g2())(e._repo,e._path)),{removed:a,events:u}}function iC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ps(n,e){let t=null;for(const r of n.views.values())t=t||d2(r,e);return t}function sC(n,e){if(e._queryParams.loadsAllData())return hf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function oC(n,e){return sC(n,e)!=null}function js(n){return hf(n)!=null}function hf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;function E2(n){ne(!Pd,"__referenceConstructor has already been defined"),Pd=n}function w2(){return ne(Pd,"Reference.ts has not been loaded"),Pd}let I2=1;class gI{constructor(e){this.listenProvider_=e,this.syncPointTree_=new dt(null),this.pendingWriteTree_=XO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aC(n,e,t,r,s){return jO(n.pendingWriteTree_,e,t,r,s),s?gl(n,new Mo(w_(),e,t)):[]}function T2(n,e,t,r){UO(n.pendingWriteTree_,e,t,r);const s=dt.fromObject(t);return gl(n,new tl(w_(),e,s))}function ys(n,e,t=!1){const r=zO(n.pendingWriteTree_,e);if(BO(n.pendingWriteTree_,e)){let a=new dt(null);return r.snap!=null?a=a.set(Ye(),!0):Zt(r.children,u=>{a=a.set(new st(u),!0)}),gl(n,new Id(r.path,a,t))}else return[]}function lc(n,e,t){return gl(n,new Mo(I_(),e,t))}function S2(n,e,t){const r=dt.fromObject(t);return gl(n,new tl(I_(),e,r))}function C2(n,e){return gl(n,new Bu(I_(),e))}function A2(n,e,t){const r=k_(n,t);if(r){const s=N_(r),a=s.path,u=s.queryId,h=Sn(a,e),f=new Bu(T_(u),h);return x_(n,a,f)}else return[]}function kd(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let h=[];if(u&&(e._queryIdentifier==="default"||oC(u,e))){const f=v2(u,e,t,r);_2(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(h=f.events,!s){const y=m.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(I,R)=>js(R));if(y&&!w){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const R=k2(I);for(let L=0;L<R.length;++L){const V=R[L],U=V.query,q=hC(n,V);n.listenProvider_.startListening(Su(U),Wu(n,U),q.hashFn,q.onComplete)}}}!w&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(Su(e),null):m.forEach(I=>{const R=n.queryToTagMap.get(df(I));n.listenProvider_.stopListening(Su(I),R)}))}N2(n,m)}return h}function lC(n,e,t,r){const s=k_(n,r);if(s!=null){const a=N_(s),u=a.path,h=a.queryId,f=Sn(u,e),m=new Mo(T_(h),f,t);return x_(n,u,m)}else return[]}function R2(n,e,t,r){const s=k_(n,r);if(s){const a=N_(s),u=a.path,h=a.queryId,f=Sn(u,e),m=dt.fromObject(t),y=new tl(T_(h),f,m);return x_(n,u,y)}else return[]}function ng(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(I,R)=>{const L=Sn(I,s);a=a||Ps(R,L),u=u||js(R)});let h=n.syncPointTree_.get(s);h?(u=u||js(h),a=a||Ps(h,Ye())):(h=new nC,n.syncPointTree_=n.syncPointTree_.set(s,h));let f;a!=null?f=!0:(f=!1,a=Pe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((R,L)=>{const V=Ps(L,Ye());V&&(a=a.updateImmediateChild(R,V))}));const m=oC(h,e);if(!m&&!e._queryParams.loadsAllData()){const I=df(e);ne(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const R=x2();n.queryToTagMap.set(I,R),n.tagToQueryMap.set(R,I)}const y=cf(n.pendingWriteTree_,s);let w=y2(h,e,t,y,a,f);if(!m&&!u&&!r){const I=sC(h,e);w=w.concat(b2(n,e,I))}return w}function P_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,h)=>{const f=Sn(u,e),m=Ps(h,f);if(m)return m});return YS(s,e,a,t,!0)}function P2(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(m,y)=>{const w=Sn(m,t);r=r||Ps(y,w)});let s=n.syncPointTree_.get(t);s?r=r||Ps(s,Ye()):(s=new nC,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=r!=null,u=a?new Fs(r,!0,!1):null,h=cf(n.pendingWriteTree_,e._path),f=rC(s,e,h,a?u.getNode():Pe.EMPTY_NODE,a);return h2(f)}function gl(n,e){return uC(e,n.syncPointTree_,null,cf(n.pendingWriteTree_,Ye()))}function uC(n,e,t,r){if(Ue(n.path))return cC(n,e,t,r);{const s=e.get(Ye());t==null&&s!=null&&(t=Ps(s,Ye()));let a=[];const u=Fe(n.path),h=n.operationForChild(u),f=e.children.get(u);if(f&&h){const m=t?t.getImmediateChild(u):null,y=XS(r,u);a=a.concat(uC(h,f,m,y))}return s&&(a=a.concat(R_(s,n,r,t))),a}}function cC(n,e,t,r){const s=e.get(Ye());t==null&&s!=null&&(t=Ps(s,Ye()));let a=[];return e.children.inorderTraversal((u,h)=>{const f=t?t.getImmediateChild(u):null,m=XS(r,u),y=n.operationForChild(u);y&&(a=a.concat(cC(y,h,f,m)))}),s&&(a=a.concat(R_(s,n,r,t))),a}function hC(n,e){const t=e.query,r=Wu(n,t);return{hashFn:()=>(c2(e)||Pe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?A2(n,t._path,r):C2(n,t._path);{const a=CD(s,t);return kd(n,t,null,a)}}}}function Wu(n,e){const t=df(e);return n.queryToTagMap.get(t)}function df(n){return n._path.toString()+"$"+n._queryIdentifier}function k_(n,e){return n.tagToQueryMap.get(e)}function N_(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function x_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=cf(n.pendingWriteTree_,e);return R_(r,t,s,null)}function k2(n){return n.fold((e,t,r)=>{if(t&&js(t))return[hf(t)];{let s=[];return t&&(s=iC(t)),Zt(r,(a,u)=>{s=s.concat(u)}),s}})}function Su(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(w2())(n._repo,n._path):n}function N2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=df(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function x2(){return I2++}function b2(n,e,t){const r=e._path,s=Wu(n,e),a=hC(n,t),u=n.listenProvider_.startListening(Su(e),s,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(r);if(s)ne(!js(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((m,y,w)=>{if(!Ue(m)&&y&&js(y))return[hf(y).query];{let I=[];return y&&(I=I.concat(iC(y).map(R=>R.query))),Zt(w,(R,L)=>{I=I.concat(L)}),I}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(Su(y),Wu(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new b_(t)}node(){return this.node_}}class D_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=It(this.path_,e);return new D_(this.syncTree_,t)}node(){return P_(this.syncTree_,this.path_)}}const D2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_I=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return O2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return M2(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},O2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},M2=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},dC=function(n,e,t,r){return O_(e,new D_(t,n),r)},fC=function(n,e,t){return O_(n,new b_(e),t)};function O_(n,e,t){const r=n.getPriority().val(),s=_I(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,h=_I(u.getValue(),e,t);return h!==u.getValue()||s!==u.getPriority().val()?new Qt(h,At(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Qt(s))),u.forEachChild(Tt,(h,f)=>{const m=O_(f,e.getImmediateChild(h),t);m!==f&&(a=a.updateImmediateChild(h,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function L_(n,e){let t=e instanceof st?e:new st(e),r=n,s=Fe(t);for(;s!==null;){const a=Wa(r.node.children,s)||{children:{},childCount:0};r=new M_(s,r,a),t=ut(t),s=Fe(t)}return r}function _l(n){return n.node.value}function pC(n,e){n.node.value=e,rg(n)}function mC(n){return n.node.childCount>0}function L2(n){return _l(n)===void 0&&!mC(n)}function ff(n,e){Zt(n.node.children,(t,r)=>{e(new M_(t,n,r))})}function gC(n,e,t,r){t&&e(n),ff(n,s=>{gC(s,e,!0)})}function V2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function uc(n){return new st(n.parent===null?n.name:uc(n.parent)+"/"+n.name)}function rg(n){n.parent!==null&&F2(n.parent,n.name,n)}function F2(n,e,t){const r=L2(t),s=si(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,rg(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,rg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=/[\[\].#$\/\u0000-\u001F\u007F]/,U2=/[\[\].#$\u0000-\u001F\u007F]/,fm=10*1024*1024,V_=function(n){return typeof n=="string"&&n.length!==0&&!j2.test(n)},_C=function(n){return typeof n=="string"&&n.length!==0&&!U2.test(n)},z2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_C(n)},yC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!af(n)||n&&typeof n=="object"&&si(n,".sv")},ig=function(n,e,t,r){pf($a(n,"value"),e,t)},pf=function(n,e,t){const r=t instanceof st?new sO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+To(r));if(typeof e=="function")throw new Error(n+"contains a function "+To(r)+" with contents = "+e.toString());if(af(e))throw new Error(n+"contains "+e.toString()+" "+To(r));if(typeof e=="string"&&e.length>fm/3&&Dd(e)>fm)throw new Error(n+"contains a string greater than "+fm+" utf8 bytes "+To(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Zt(e,(u,h)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!V_(u)))throw new Error(n+" contains an invalid key ("+u+") "+To(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oO(r,u),pf(n,h,r),aO(r)}),s&&a)throw new Error(n+' contains ".value" child '+To(r)+" in addition to actual children.")}},B2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Fu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!V_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iO);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&dr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},vC=function(n,e,t,r){const s=$a(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Zt(e,(u,h)=>{const f=new st(u);if(pf(s,h,It(t,f)),m_(f)===".priority"&&!yC(h))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),B2(s,a)},W2=function(n,e,t){if(af(e))throw new Error($a(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!yC(e))throw new Error($a(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},EC=function(n,e,t,r){if(!_C(t))throw new Error($a(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),EC(n,e,t)},fu=function(n,e){if(Fe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},q2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!V_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!z2(t))throw new Error($a(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mf(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!g_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function wC(n,e,t){mf(n,t),IC(n,r=>g_(r,e))}function pr(n,e,t){mf(n,t),IC(n,r=>dr(r,e)||dr(e,r))}function IC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(G2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function G2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Eu&&Jt("event: "+t.toString()),pl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="repo_interrupt",Q2=25;class Y2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new H2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wd(),this.transactionQueueTree_=new M_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function X2(n,e,t){if(n.stats_=f_(n.repoInfo_),n.forceRestClient_||kD())n.server_=new Ed(n.repoInfo_,(r,s,a,u)=>{yI(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>vI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ni(n.repoInfo_,e,(r,s,a,u)=>{yI(n,r,s,a,u)},r=>{vI(n,r)},r=>{Z2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=OD(n.repoInfo_,()=>new DO(n.stats_,n.server_)),n.infoData_=new PO,n.infoSyncTree_=new gI({startListening:(r,s,a,u)=>{let h=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(h=lc(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),h},stopListening:()=>{}}),F_(n,"connected",!1),n.serverSyncTree_=new gI({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(h,f)=>{const m=u(h,f);pr(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function J2(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function gf(n){return D2({timestamp:J2(n)})}function yI(n,e,t,r,s){n.dataUpdateCount++;const a=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Xh(t,m=>At(m));u=R2(n.serverSyncTree_,a,f,s)}else{const f=At(t);u=lC(n.serverSyncTree_,a,f,s)}else if(r){const f=Xh(t,m=>At(m));u=S2(n.serverSyncTree_,a,f)}else{const f=At(t);u=lc(n.serverSyncTree_,a,f)}let h=a;u.length>0&&(h=rl(n,a)),pr(n.eventQueue_,h,u)}function vI(n,e){F_(n,"connected",e),e===!1&&rM(n)}function Z2(n,e){Zt(e,(t,r)=>{F_(n,t,r)})}function F_(n,e,t){const r=new st("/.info/"+e),s=At(t);n.infoData_.updateSnapshot(r,s);const a=lc(n.infoSyncTree_,r,s);pr(n.eventQueue_,r,a)}function j_(n){return n.nextWriteId_++}function eM(n,e,t){const r=P2(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const a=At(s).withIndex(e._queryParams.getIndex());ng(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=lc(n.serverSyncTree_,e._path,a);else{const h=Wu(n.serverSyncTree_,e);u=lC(n.serverSyncTree_,e._path,a,h)}return pr(n.eventQueue_,e._path,u),kd(n.serverSyncTree_,e,t,null,!0),a},s=>(cc(n,"get for query "+zt(e)+" failed: "+s),Promise.reject(new Error(s))))}function tM(n,e,t,r,s){cc(n,"set",{path:e.toString(),value:t,priority:r});const a=gf(n),u=At(t,r),h=P_(n.serverSyncTree_,e),f=fC(u,h,a),m=j_(n),y=aC(n.serverSyncTree_,e,f,m,!0);mf(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(I,R)=>{const L=I==="ok";L||An("set at "+e+" failed: "+I);const V=ys(n.serverSyncTree_,m,!L);pr(n.eventQueue_,e,V),Us(n,s,I,R)});const w=z_(n,e);rl(n,w),pr(n.eventQueue_,w,[])}function nM(n,e,t,r){cc(n,"update",{path:e.toString(),value:t});let s=!0;const a=gf(n),u={};if(Zt(t,(h,f)=>{s=!1,u[h]=dC(It(e,h),At(f),n.serverSyncTree_,a)}),s)Jt("update() called with empty data.  Don't do anything."),Us(n,r,"ok",void 0);else{const h=j_(n),f=T2(n.serverSyncTree_,e,u,h);mf(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const w=m==="ok";w||An("update at "+e+" failed: "+m);const I=ys(n.serverSyncTree_,h,!w),R=I.length>0?rl(n,e):e;pr(n.eventQueue_,R,I),Us(n,r,m,y)}),Zt(t,m=>{const y=z_(n,It(e,m));rl(n,y)}),pr(n.eventQueue_,e,[])}}function rM(n){cc(n,"onDisconnectEvents");const e=gf(n),t=wd();Ym(n.onDisconnect_,Ye(),(s,a)=>{const u=dC(s,a,n.serverSyncTree_,e);ml(t,s,u)});let r=[];Ym(t,Ye(),(s,a)=>{r=r.concat(lc(n.serverSyncTree_,s,a));const u=z_(n,s);rl(n,u)}),n.onDisconnect_=wd(),pr(n.eventQueue_,Ye(),r)}function iM(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Qm(n.onDisconnect_,e),Us(n,t,r,s)})}function EI(n,e,t,r){const s=At(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&ml(n.onDisconnect_,e,s),Us(n,r,a,u)})}function sM(n,e,t,r,s){const a=At(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,h)=>{u==="ok"&&ml(n.onDisconnect_,e,a),Us(n,s,u,h)})}function oM(n,e,t,r){if(Yh(t)){Jt("onDisconnect().update() called with empty data.  Don't do anything."),Us(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Zt(t,(u,h)=>{const f=At(h);ml(n.onDisconnect_,It(e,u),f)}),Us(n,r,s,a)})}function aM(n,e,t){let r;Fe(e._path)===".info"?r=ng(n.infoSyncTree_,e,t):r=ng(n.serverSyncTree_,e,t),wC(n.eventQueue_,e._path,r)}function wI(n,e,t){let r;Fe(e._path)===".info"?r=kd(n.infoSyncTree_,e,t):r=kd(n.serverSyncTree_,e,t),wC(n.eventQueue_,e._path,r)}function lM(n){n.persistentConnection_&&n.persistentConnection_.interrupt(K2)}function cc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Jt(t,...e)}function Us(n,e,t,r){e&&pl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function TC(n,e,t){return P_(n.serverSyncTree_,e,t)||Pe.EMPTY_NODE}function U_(n,e=n.transactionQueueTree_){if(e||_f(n,e),_l(e)){const t=CC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&uM(n,uc(e),t)}else mC(e)&&ff(e,t=>{U_(n,t)})}function uM(n,e,t){const r=t.map(m=>m.currentWriteId),s=TC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=Sn(e,y.path);a=a.updateChild(w,y.currentOutputSnapshotRaw)}const h=a.val(!0),f=e;n.server_.put(f.toString(),h,m=>{cc(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,y=y.concat(ys(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();_f(n,L_(n.transactionQueueTree_,e)),U_(n,n.transactionQueueTree_),pr(n.eventQueue_,e,y);for(let I=0;I<w.length;I++)pl(w[I])}else{if(m==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{An("transaction at "+f.toString()+" failed: "+m);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=m}rl(n,e)}},u)}function rl(n,e){const t=SC(n,e),r=uc(t),s=CC(n,t);return cM(n,s,r),r}function cM(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=Sn(t,f.path);let y=!1,w;if(ne(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,w=f.abortReason,s=s.concat(ys(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=Q2)y=!0,w="maxretry",s=s.concat(ys(n.serverSyncTree_,f.currentWriteId,!0));else{const I=TC(n,f.path,u);f.currentInputSnapshot=I;const R=e[h].update(I.val());if(R!==void 0){pf("transaction failed: Data returned ",R,f.path);let L=At(R);typeof R=="object"&&R!=null&&si(R,".priority")||(L=L.updatePriority(I.getPriority()));const U=f.currentWriteId,q=gf(n),G=fC(L,I,q);f.currentOutputSnapshotRaw=L,f.currentOutputSnapshotResolved=G,f.currentWriteId=j_(n),u.splice(u.indexOf(U),1),s=s.concat(aC(n.serverSyncTree_,f.path,G,f.currentWriteId,f.applyLocally)),s=s.concat(ys(n.serverSyncTree_,U,!0))}else y=!0,w="nodata",s=s.concat(ys(n.serverSyncTree_,f.currentWriteId,!0))}pr(n.eventQueue_,t,s),s=[],y&&(e[h].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(w==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(w),!1,null))))}_f(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)pl(r[h]);U_(n,n.transactionQueueTree_)}function SC(n,e){let t,r=n.transactionQueueTree_;for(t=Fe(e);t!==null&&_l(r)===void 0;)r=L_(r,t),e=ut(e),t=Fe(e);return r}function CC(n,e){const t=[];return AC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function AC(n,e,t){const r=_l(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);ff(e,s=>{AC(n,s,t)})}function _f(n,e){const t=_l(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,pC(e,t.length>0?t:void 0)}ff(e,r=>{_f(n,r)})}function z_(n,e){const t=uc(SC(n,e)),r=L_(n.transactionQueueTree_,e);return V2(r,s=>{pm(n,s)}),pm(n,r),gC(r,s=>{pm(n,s)}),t}function pm(n,e){const t=_l(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ne(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ne(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(ys(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?pC(e,void 0):t.length=a+1,pr(n.eventQueue_,uc(e),s);for(let u=0;u<r.length;u++)pl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dM(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${t}' in query '${n}'`)}return e}const II=function(n,e){const t=fM(n),r=t.namespace;t.domain==="firebase.com"&&Vi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Vi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ED();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new NS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new st(t.pathString)}},fM=function(n){let e="",t="",r="",s="",a="",u=!0,h="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(y,w)),y<w&&(s=hM(n.substring(y,w)));const I=dM(n.substring(Math.min(n.length,w)));m=e.indexOf(":"),m>=0?(u=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const R=e.slice(0,m);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const L=e.indexOf(".");r=e.substring(0,L).toLowerCase(),t=e.substring(L+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:h,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+zt(this.snapshot.exportVal())}}class mM{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gM{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Xr;return iM(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){fu("OnDisconnect.remove",this._path);const e=new Xr;return EI(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){fu("OnDisconnect.set",this._path),ig("OnDisconnect.set",e,this._path);const t=new Xr;return EI(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){fu("OnDisconnect.setWithPriority",this._path),ig("OnDisconnect.setWithPriority",e,this._path),W2("OnDisconnect.setWithPriority",t);const r=new Xr;return sM(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){fu("OnDisconnect.update",this._path),vC("OnDisconnect.update",e,this._path);const t=new Xr;return oM(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class B_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ue(this._path)?null:m_(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=oI(this._queryParams),t=h_(e);return t==="{}"?"default":t}get _queryObject(){return oI(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof B_))return!1;const t=this._repo===e._repo,r=g_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+rO(this._path)}}class Ui extends B_{constructor(e,t){super(e,t,new E_,!1)}get parent(){const e=jS(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $u{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),r=sg(this.ref,e);return new $u(this._node.getChild(t),r,Tt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new $u(s,sg(this.ref,r),Tt)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cu(n,e){return n=it(n),n._checkNotDeleted("ref"),e!==void 0?sg(n._root,e):n._root}function sg(n,e){return n=it(n),Fe(n._path)===null?$2("child","path",e):EC("child","path",e),new Ui(n._repo,It(n._path,e))}function TI(n){return n=it(n),new gM(n._repo,n._path)}function SI(n,e){n=it(n),fu("set",n._path),ig("set",e,n._path);const t=new Xr;return tM(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function _M(n,e){vC("update",e,n._path);const t=new Xr;return nM(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function yM(n){n=it(n);const e=new RC(()=>{}),t=new yf(e);return eM(n._repo,n,t).then(r=>new $u(r,new Ui(n._repo,n._path),n._queryParams.getIndex()))}class yf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new pM("value",this,new $u(e.snapshotNode,new Ui(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mM(this,e,t):null}matches(e){return e instanceof yf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vM(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,w)=>{wI(n._repo,n,h),f(y,w)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new RC(t,a||void 0),h=new yf(u);return aM(n._repo,n,h),()=>wI(n._repo,n,h)}function Nd(n,e,t,r){return vM(n,"value",e,t,r)}m2(Ui);E2(Ui);/**
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
 */const EM="FIREBASE_DATABASE_EMULATOR_HOST",og={};let wM=!1;function IM(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=zs(a);n.repoInfo_=new NS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function TM(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Vi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=II(a,s),h=u.repoInfo,f;typeof process<"u"&&Bw&&(f=Bw[EM]),f?(a=`http://${f}?ns=${h.namespace}`,u=II(a,s),h=u.repoInfo):u.repoInfo.secure;const m=new xD(n.name,n.options,e);q2("Invalid Firebase Database URL",u),Ue(u.path)||Vi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=CM(h,n,m,new ND(n,t));return new AM(y,n)}function SM(n,e){const t=og[e];(!t||t[n.key]!==n)&&Vi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),lM(n),delete t[n.key]}function CM(n,e,t,r){let s=og[e.name];s||(s={},og[e.name]=s);let a=s[n.toURLString()];return a&&Vi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new Y2(n,wM,t,r),s[n.toURLString()]=a,a}class AM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(X2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vi("Cannot call "+e+" on a deleted database.")}}function RM(n=yg(),e){const t=Md(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=BI("database");r&&PM(t,...r)}return t}function PM(n,e,t,r={}){n=it(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&xi(r,a.repoInfo_.emulatorOptions))return;Vi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Vi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new qh(qh.OWNER);else if(r.mockUserToken){const h=typeof r.mockUserToken=="string"?r.mockUserToken:qI(r.mockUserToken,n.app.options.projectId);u=new qh(h)}zs(e)&&(pg(e),mg("Database",!0)),IM(a,s,r,u)}/**
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
 */function kM(n){pD(Vo),Po(new ks("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return TM(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Jr(Ww,$w,n),Jr(Ww,$w,"esm2017")}/**
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
 */const NM={".sv":"timestamp"};function mm(){return NM}Ni.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ni.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};kM();const W_={apiKey:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",authDomain:"discordia-573e7.firebaseapp.com",projectId:"discordia-573e7",appId:"1:757817424564:web:39457c92d2c75e1374f5e1",databaseURL:"https://discordia-573e7-default-rtdb.firebaseio.com",messagingSenderId:"757817424564",measurementId:void 0},PC=["apiKey","authDomain","projectId","appId"].every(n=>!!W_[n]),il=PC?YI(W_):null,rt=il?tN(il):null,CI=il?Jb(il):null,vs=il&&W_.databaseURL?RM(il):null,xM=Object.freeze([{id:"gothic3d",name:"Gótico 3D",color:"#ffae22"},{id:"gold",name:"Dourado Premium",color:"#f5d375"},{id:"bubble",name:"Bubble Magic",color:"#c69af8"},{id:"neon",name:"Neon Cyber",color:"#53deff"},{id:"tech",name:"Futurista Tech",color:"#52e6d6"},{id:"glitch",name:"Glitch Digital",color:"#fd73df"},{id:"ice",name:"Cristal de Gelo",color:"#a8e8ff"},{id:"fire",name:"Fogo Infernal",color:"#ff7744"},{id:"galaxy",name:"Galáxia Cósmica",color:"#bd88ff"},{id:"pixel",name:"Retrô Pixel",color:"#80e783"},{id:"chrome",name:"Chrome Prateado",color:"#e3eaf9"},{id:"royal",name:"Elegante Royal",color:"#f3db98"}]);new Map(xM.map(n=>[n.id,n]));const Ba=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(n),kC=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,128}$/.test(n);function bM(n=[],e=""){return[...new Set(n.filter(t=>(t==null?void 0:t.toUid)===e&&(t==null?void 0:t.status)==="accepted"&&Ba(t==null?void 0:t.serverId)).map(t=>t.serverId))].slice(0,100)}function ag(n,e){return!!n&&Array.isArray(n.memberUids)&&n.memberUids.includes(e)&&Array.isArray(n.bannedUids??[])&&!(n.bannedUids??[]).includes(e)}function NC(n,e=typeof localStorage>"u"?null:localStorage){if(!kC(n)||!e)return[];try{const t=JSON.parse(e.getItem("discordia_known_server_ids_rc103_"+n)||"[]");return Array.isArray(t)?[...new Set(t.filter(Ba))].slice(0,100):[]}catch{return[]}}function lg(n,e,t=typeof localStorage>"u"?null:localStorage){if(!kC(n)||!Ba(e)||!t)return!1;const r=NC(n,t);if(r.includes(e))return!1;try{return t.setItem("discordia_known_server_ids_rc103_"+n,JSON.stringify([...r,e].slice(-100))),typeof window<"u"&&t===window.localStorage&&window.dispatchEvent(new CustomEvent("discordia:server-discovery-updated",{detail:{uid:n,id:e}})),!0}catch{return!1}}async function DM({invite:n,uid:e,loadInvite:t,requestMembership:r,readJoinedServer:s}={}){if(!n||n.toUid!==e||n.status!=="accepted"||!n.serverId||n.id!==n.serverId+"_"+e)throw new Error("Convite inválido. Solicite um novo convite ao responsável.");const a=await t();if(!a||a.status!=="accepted"||a.toUid!==e||a.serverId!==n.serverId)throw new Error("Este convite não está mais válido. Peça um novo ao responsável.");let u=null;try{await r()}catch(m){u=m}let h=null,f=null;try{h=await s()}catch(m){f=m}if((h==null?void 0:h.id)===n.serverId&&Array.isArray(h.memberUids)&&h.memberUids.includes(e)&&!(h.bannedUids||[]).includes(e)&&!Object.hasOwn(h,"deletingAt")&&!Object.hasOwn(h,"deletionOwnerUid"))return h;throw u||f||new Error("A entrada ainda não foi confirmada pelo servidor. Tente novamente.")}const OM=n=>`DISC-${n}`,MM=n=>String(n||"").trim().replace(/^@/,"").toLowerCase(),AI=n=>/^[a-z][a-z0-9_]{2,15}$/.test(n),LM=n=>String(n||"").trim().replace(/^DISC-/i,""),Wt=()=>{if(!CI)throw new Error("Configure o Firebase antes de continuar.");return CI},$_=(n,e)=>[n,e].sort().join("_"),ug=(n,e)=>`${n}_${e}`;async function VM(n,e){const t=Wt(),r=an(t,"publicProfiles",n.uid),s=await Mr(r),a={uid:n.uid,peerId:OM(n.uid),displayName:String(e).trim().slice(0,50)||"Amigo"};s.exists()?s.data().displayName!==a.displayName&&await Ja(r,{displayName:a.displayName}):await of(r,{...a,presence:"offline",lastSeenAt:Qn(),createdAt:Qn()})}async function FM(n,e){const t=MM(n);let r=LM(n);if(AI(t)){const a=await Mr(an(Wt(),"handles",t));if(!a.exists())throw new Error("Nenhuma conta encontrada com esse @identificador.");r=a.data().uid}else if(!/^[A-Za-z0-9]{20,128}$/.test(r))throw new Error("Informe @identificador ou o ID DISC-... completo.");if(r===e)throw new Error("Você não pode se adicionar.");const s=await Mr(an(Wt(),"publicProfiles",r));if(!s.exists()||AI(t)&&s.data().handle!==t)throw new Error("Nenhuma conta encontrada com esse ID.");return s.data()}async function jM(n,e){const t=await FM(e,n);if((await Mr(an(Wt(),"users",n,"blocks",t.uid))).exists())throw new Error("Desbloqueie essa pessoa antes de enviar uma solicitação.");const r=an(Wt(),"friendRequests",ug(n,t.uid)),s=await Mr(an(Wt(),"friendRequests",ug(t.uid,n)));if(s.exists())throw new Error(s.data().status==="pending"?"Você já recebeu uma solicitação dessa pessoa. Aceite-a na lista.":"Já existe uma relação com esta pessoa.");if((await Mr(r)).exists())throw new Error("Essa solicitação já foi enviada.");return await of(r,{fromUid:n,toUid:t.uid,status:"pending",createdAt:Qn(),updatedAt:Qn()}),t}async function UM(n,e,t){if(n.toUid!==e||n.status!=="pending")throw new Error("Solicitação inválida.");await Ja(an(Wt(),"friendRequests",ug(n.fromUid,n.toUid)),{status:t?"accepted":"rejected",updatedAt:Qn()})}function zM(n,e,t,r=()=>{}){const s=new Map,a=new Map,u=()=>e([...s.values(),...a.values()]),h=(y,w,I)=>{y.clear(),w.docs.forEach(R=>y.set(R.id,{id:R.id,...R.data()})),r(I),u()},f=ki(bo(Fr(Wt(),"friendRequests"),gd("toUid","==",n),Do(100)),y=>h(s,y,"incoming"),y=>t(y,"incoming")),m=ki(bo(Fr(Wt(),"friendRequests"),gd("fromUid","==",n),Do(100)),y=>h(a,y,"outgoing"),y=>t(y,"outgoing"));return()=>{f(),m()}}function BM(n,e,t){return ki(an(Wt(),"publicProfiles",n),r=>e(r.exists()?r.data({serverTimestamps:"estimate"}):null),t)}async function WM(n,e){const t=[n,e].sort(),r=an(Wt(),"dmRooms",$_(n,e));return(await Mr(r)).exists()||await of(r,{members:t,createdAt:Qn()}),r.id}const xC=n=>{var r,s;const e=n.data(),t=(s=(r=e.createdAt)==null?void 0:r.toDate)==null?void 0:s.call(r);return{id:n.id,...e,sender:e.senderName||"Amigo",avatar:"💬",time:(t==null?void 0:t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}))||"Agora",dateLabel:(t==null?void 0:t.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}))||"Hoje"}},bC=["💜","🔥","😂","👍","😮","🎮","✨","❤️"],DC=(n,e)=>{var s;const t=[...new Set([...String(n).matchAll(/:([a-z0-9_]{1,22}):/g)].map(a=>a[1]))].slice(0,4),r={};for(const a of t){const u=((s=e==null?void 0:e.find(h=>h.name===a))==null?void 0:s.image)||"";/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(u)&&u.length<3e4&&(r[a]=u)}return r};function q_(n,e,t,r,s){const a=Wt();return n==="dm"?Fr(a,"dmRooms",$_(e,t),"messages"):Fr(a,"servers",r,"channels",s,"messages")}async function $M(n,e,t,r,s,a,u){const h=String(u||"").trim().slice(0,2e3);if(!h)throw new Error("A mensagem não pode ficar vazia.");await Ja(an(q_(e,n,t,r,s),a),{text:h,editedAt:Qn()})}async function qM(n,e,t,r,s,a,u){var m;if(!bC.includes(u))throw new Error("Reação inválida.");const h=an(q_(e,n,t,r,s),a.id),f=((m=a.reactions)==null?void 0:m[n])===u;await Ja(h,{[`reactions.${n}`]:f?dD():u})}async function HM(n,e,t,r,s,a){await cD(an(q_(e,n,t,r,s),a))}function GM(n,e,t,r){const s=$_(n,e);return ki(bo(Fr(Wt(),"dmRooms",s,"messages"),hS("createdAt","desc"),Do(100)),a=>t(a.docs.map(xC).reverse()),r)}async function KM(n,e,t,r,s=[]){const a=await WM(n,e);await pS(Fr(Wt(),"dmRooms",a,"messages"),{senderUid:n,senderName:String(t).slice(0,50),text:String(r).trim().slice(0,2e3),customEmojiData:DC(r,s),reactions:{},createdAt:Qn()})}function QM(n,e,t){const r=Wt(),s=new Set,a=new Set,u=new Set(NC(n)),h=new Map,f=new Map,m=[],y=new Set,w=async q=>{if(y.has(q))return;y.add(q);const G=an(r,"serverOwnerIndex",n,"servers",q);try{(await Mr(G)).exists()||await of(G,{ownerUid:n,serverId:q})}catch(Z){!I&&(Z==null?void 0:Z.code)!=="permission-denied"&&(Z==null?void 0:Z.code)!=="not-found"&&(t==null||t(Z))}};let I=!1;const R=()=>{I||e([...h.values()].sort((q,G)=>String(q.name||"").localeCompare(String(G.name||""),"pt-BR")))},L=()=>{if(I)return;const q=new Set([...s,...a,...u].filter(Ba));for(const[G,Z]of f)q.has(G)||(Z(),f.delete(G),h.delete(G));for(const G of q){if(f.has(G))continue;const Z=ki(an(r,"servers",G),se=>{if(I)return;const ae=se.exists()?se.data():null;ag(ae,n)?(h.set(G,{id:G,...ae}),lg(n,G),ae.ownerUid===n&&!Object.prototype.hasOwnProperty.call(ae,"deletingAt")&&w(G)):h.delete(G),R()},se=>{h.delete(G),R(),(se==null?void 0:se.code)!=="permission-denied"&&(se==null?void 0:se.code)!=="not-found"&&(t==null||t(se))});f.set(G,Z)}R()},V=bo(Fr(r,"serverOwnerIndex",n,"servers"),Do(100));m.push(ki(V,q=>{s.clear(),q.docs.forEach(G=>{var Z,se;Ba(G.id)&&((Z=G.data())==null?void 0:Z.serverId)===G.id&&((se=G.data())==null?void 0:se.ownerUid)===n&&s.add(G.id)}),L()},q=>{(q==null?void 0:q.code)!=="permission-denied"&&(t==null||t(q)),L()})),m.push(ki(bo(Fr(r,"serverInvites"),gd("toUid","==",n),Do(100)),q=>{a.clear(),bM(q.docs.map(G=>G.data()),n).forEach(G=>a.add(G)),L()},q=>{(q==null?void 0:q.code)!=="permission-denied"&&(t==null||t(q)),L()}));const U=q=>{var G;((G=q==null?void 0:q.detail)==null?void 0:G.uid)!==n||!Ba(q.detail.id)||(u.add(q.detail.id),L())};return typeof window<"u"&&window.addEventListener("discordia:server-discovery-updated",U),L(),()=>{I=!0,typeof window<"u"&&window.removeEventListener("discordia:server-discovery-updated",U),m.forEach(q=>q()),f.forEach(q=>q()),f.clear(),h.clear()}}function YM(n,e,t,r){return ki(bo(Fr(Wt(),"servers",n,"channels",e,"messages"),hS("createdAt","desc"),Do(100)),s=>t(s.docs.map(xC).reverse()),r)}async function XM(n,e,t,r,s,a=[]){await pS(Fr(Wt(),"servers",e,"channels",t,"messages"),{senderUid:n,senderName:String(r).slice(0,50),text:String(s).trim().slice(0,2e3),customEmojiData:DC(s,a),reactions:{},createdAt:Qn()})}function JM(n,e,t){return ki(bo(Fr(Wt(),"serverInvites"),gd("toUid","==",n),Do(100)),r=>e(r.docs.map(s=>({id:s.id,...s.data()}))),t)}async function ZM(n,e,t){if(n.toUid!==e||!["pending","accepted"].includes(n.status))throw new Error("Convite inválido.");const r=Wt(),s=an(r,"serverInvites",n.id),a=an(r,"servers",n.serverId);if(!t){if(n.status!=="pending")throw new Error("Este convite já foi aceito.");await Ja(s,{status:"rejected",updatedAt:Qn()});return}if(n.status==="accepted")try{const h=await DM({invite:n,uid:e,loadInvite:async()=>{const f=await Mr(s);return f.exists()?f.data():null},requestMembership:()=>Ja(a,{memberUids:zw(e),[`memberJoinedAt.${e}`]:Qn()}),readJoinedServer:async()=>{const f=await Mr(a),m=f.exists()?f.data():null;return ag(m,e)?{id:f.id,...m}:null}});return lg(e,n.serverId),h}catch(h){throw(h==null?void 0:h.code)==="permission-denied"?new Error("A entrada foi negada pelo servidor. O convite pode estar revogado, você pode estar banido ou a comunidade pode estar bloqueada. Peça ao responsável um novo convite."):new Error((h==null?void 0:h.message)||"Não foi possível concluir a entrada. Tente novamente.")}if(n.inviteVersion!==2)throw new Error("Convite antigo sem comprovação de segurança. Peça ao responsável um novo convite.");const u=fD(r);u.update(s,{status:"accepted",updatedAt:Qn()}),u.update(a,{memberUids:zw(e),[`memberJoinedAt.${e}`]:Qn()});try{await u.commit();const h=await Mr(a),f=h.exists()?h.data():null;if(!ag(f,e))throw new Error("Convite aceito, mas a participação ainda não foi confirmada. Use Concluir entrada para recuperar.");return lg(e,n.serverId),{id:h.id,...f}}catch(h){const f=(h==null?void 0:h.code)==="permission-denied"?"A entrada não foi autorizada. O convite pode estar inválido ou sua conta pode não ter permissão; solicite ajuda ao responsável pelo servidor.":(h==null?void 0:h.message)||"Não foi possível confirmar sua entrada no servidor. Tente novamente.";throw new Error(f)}}const OC="/assets/discordia-orbit-DRQ15dZr.png",RI={screen:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"3",y:"4",width:"18",height:"13",rx:"2"}),v.jsx("path",{d:"M8 21h8m-4-4v4"})]}),fullscreen:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m13-5v4a1 1 0 0 1-1 1h-4"})}),shrink:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M8 3v5H3m5 0L3 3m13 0v5h5m-5 0 5-5M8 21v-5H3m5 0-5 5m13 0v-5h5m-5 0 5 5"})}),link:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"}),v.jsx("path",{d:"M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"})]}),copy:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"8",y:"8",width:"13",height:"13",rx:"2"}),v.jsx("path",{d:"M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"})]}),users:v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:"9",cy:"8",r:"4"}),v.jsx("path",{d:"M2 21v-2a6 6 0 0 1 12 0v2m2-17a4 4 0 0 1 0 8m2 2a6 6 0 0 1 4 6v1"})]}),user:v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:"12",cy:"8",r:"4"}),v.jsx("path",{d:"M4 21v-2a8 8 0 0 1 16 0v2"})]}),video:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}),v.jsx("path",{d:"m16 10 6-4v12l-6-4"})]}),chat:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M20 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.6-.3-3.6-.8L3 21l1.8-4.7A8.5 8.5 0 1 1 20 11.5Z"})}),mail:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),v.jsx("path",{d:"m3 7 9 6 9-6"})]}),lock:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),v.jsx("path",{d:"M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"})]}),eye:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M2 12s3.7-6.5 10-6.5 10 6.5 10 6.5-3.7 6.5-10 6.5S2 12 2 12Z"}),v.jsx("circle",{cx:"12",cy:"12",r:"2.6"})]}),"eye-off":v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M3 3l18 18M10.6 5.6q.7-.1 1.4-.1c6.3 0 10 6.5 10 6.5a16 16 0 0 1-3.6 4.2M6.5 6.6C3.6 8.3 2 12 2 12s3.7 6.5 10 6.5c1.1 0 2.2-.2 3.2-.6"}),v.jsx("path",{d:"M10 10a2.8 2.8 0 0 0 4 4"})]}),headphones:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M3 13v-2a9 9 0 0 1 18 0v2"}),v.jsx("rect",{x:"2",y:"12",width:"4",height:"8",rx:"2"}),v.jsx("rect",{x:"18",y:"12",width:"4",height:"8",rx:"2"})]}),mic:v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),v.jsx("path",{d:"M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"})]}),"mic-off":v.jsxs(v.Fragment,{children:[v.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),v.jsx("path",{d:"M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8M3 3l18 18"})]}),"arrow-up-right":v.jsx(v.Fragment,{children:v.jsx("path",{d:"M7 17 17 7M8 7h9v9"})}),"volume-2":v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5Z"}),v.jsx("path",{d:"M15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"})]}),"volume-x":v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5Z"}),v.jsx("path",{d:"m17 9 5 6m0-6-5 6"})]}),network:v.jsxs(v.Fragment,{children:[v.jsx("circle",{cx:"4",cy:"12",r:"2"}),v.jsx("circle",{cx:"20",cy:"5",r:"2"}),v.jsx("circle",{cx:"20",cy:"19",r:"2"}),v.jsx("path",{d:"M6 11 18 6M6 13l12 5"})]}),send:v.jsx(v.Fragment,{children:v.jsx("path",{d:"m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"})}),exit:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 4 5 5-5 5m5-5H9"})}),plus:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M12 5v14M5 12h14"}),v.jsx("circle",{cx:"12",cy:"12",r:"10"})]}),arrow:v.jsx(v.Fragment,{children:v.jsx("path",{d:"M5 12h14m-7-7 7 7-7 7"})}),stop:v.jsx(v.Fragment,{children:v.jsx("rect",{x:"5",y:"5",width:"14",height:"14",rx:"3"})}),shield:v.jsxs(v.Fragment,{children:[v.jsx("path",{d:"M12 22s9-4 9-11V5l-9-3-9 3v6c0 7 9 11 9 11Z"}),v.jsx("path",{d:"m9 12 2 2 4-4"})]})};function Ze({name:n="screen",size:e=19,className:t="",title:r}){return v.jsxs("svg",{className:"room-icon "+t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[RI[n]||RI.screen,r&&v.jsx("title",{children:r})]})}const eL=Object.freeze(["microphone","camera","screen"]);function MC({secureContext:n=!1,mediaDevices:e}={}){const t=e||{};return{microphone:n===!0&&typeof t.getUserMedia=="function",camera:n===!0&&typeof t.getUserMedia=="function",screen:n===!0&&typeof t.getDisplayMedia=="function"}}function tL(n){const e=String((n==null?void 0:n.name)||(n==null?void 0:n.code)||"");return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"Permissão negada ou seleção cancelada pelo navegador.":e==="NotFoundError"||e==="DevicesNotFoundError"?"Nenhuma fonte compatível encontrada neste dispositivo.":e==="NotReadableError"||e==="TrackStartError"?"A fonte de mídia está ocupada ou indisponível.":e==="OverconstrainedError"?"Os recursos solicitados não são compatíveis com este dispositivo.":"Não foi possível iniciar a captura. Verifique as permissões do navegador."}function gm(n){var e;for(const t of((e=n==null?void 0:n.getTracks)==null?void 0:e.call(n))||[])try{t.stop()}catch{}}function nL({mediaDevices:n,secureContext:e,onChange:t=()=>{}}={}){const r=n;let s=null,a=0,u=!1;const h=I=>{u||t(I)};function f(){var R,L,V;if(!s)return;const I=s;s=null;for(const U of((L=(R=I.stream).getTracks)==null?void 0:L.call(R))||[])try{(V=U.removeEventListener)==null||V.call(U,"ended",I.onEnded)}catch{}gm(I.stream)}function m(){u||(a+=1,f(),h({status:"idle",kind:null}))}async function y(I){var G,Z;if(u)return null;if(!eL.includes(I))throw new TypeError("Tipo de captura inválido.");const R=++a;if(f(),!MC({secureContext:e,mediaDevices:r})[I])return h({status:"unsupported",kind:I,message:"Captura indisponível. Use HTTPS ou localhost e um navegador compatível."}),null;h({status:"requesting",kind:I});let V;try{I==="screen"?V=await r.getDisplayMedia({video:{frameRate:{ideal:30,max:30}},audio:!1}):I==="camera"?V=await r.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:24,max:30}},audio:!1}):V=await r.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(se){return R===a&&!u&&h({status:"error",kind:I,message:tL(se)}),null}if(u||R!==a)return gm(V),null;const U=((G=V==null?void 0:V.getTracks)==null?void 0:G.call(V))||[];if(!U.length)return gm(V),h({status:"error",kind:I,message:"Nenhuma faixa de mídia foi disponibilizada."}),null;const q=()=>{(s==null?void 0:s.stream)===V&&m()};s={stream:V,kind:I,onEnded:q};for(const se of U)(Z=se.addEventListener)==null||Z.call(se,"ended",q);return h({status:"active",kind:I,hasAudio:U.some(se=>se.kind==="audio"),hasVideo:U.some(se=>se.kind==="video")}),V}function w(){u=!0,a+=1,f()}return{start:y,stop:m,dispose:w,getStream:()=>(s==null?void 0:s.stream)||null}}const PI={microphone:{icon:"🎙",name:"Microfone",description:"Verifica a permissão de acesso ao microfone."},camera:{icon:"📷",name:"Câmera",description:"Mostra uma prévia local da câmera."},screen:{icon:"▣",name:"Tela",description:"Abre o seletor de tela ou janela do navegador."}};function rL(){var m;const[n,e]=ye.useState({status:"idle",kind:null}),t=ye.useRef(null),r=ye.useRef(null),s=ye.useMemo(()=>MC({secureContext:typeof window<"u"&&window.isSecureContext===!0,mediaDevices:typeof navigator<"u"?navigator.mediaDevices:void 0}),[]);ye.useEffect(()=>{const y=nL({mediaDevices:navigator.mediaDevices,secureContext:window.isSecureContext,onChange:e});return r.current=y,()=>{y.dispose(),r.current=null}},[]),ye.useEffect(()=>{var I;const y=t.current;if(!y)return;const w=n.status==="active"?(I=r.current)==null?void 0:I.getStream():null;if(y.srcObject=w||null,w){const R=y.play();R&&typeof R.catch=="function"&&R.catch(()=>{})}return()=>{y.pause(),y.srcObject=null}},[n.status,n.kind]);function a(y){var w;(w=r.current)==null||w.start(y)}function u(){var y;(y=r.current)==null||y.stop()}const h=n.kind?(m=PI[n.kind])==null?void 0:m.name:"",f=n.status==="active"||n.status==="requesting";return v.jsxs("section",{className:"media-lab","aria-labelledby":"media-lab-title",children:[v.jsxs("div",{className:"lab-heading",children:[v.jsx("div",{className:"lab-orbit","aria-hidden":"true",children:"◉"}),v.jsxs("div",{children:[v.jsx("span",{className:"lab-eyebrow",children:"LABORATÓRIO DE MÍDIA · PRÉVIA PRIVADA"}),v.jsx("h2",{id:"media-lab-title",children:"Teste seus dispositivos"}),v.jsx("p",{children:"Confira a câmera, o microfone e a captura de tela antes da integração com chamadas reais."})]})]}),v.jsxs("div",{className:"lab-privacy",role:"note",children:[v.jsx("strong",{children:"Teste somente local"}),v.jsx("p",{children:"Os dispositivos só são ativados quando você clicar. Este painel não transmite para outras pessoas, não grava vídeo ou áudio e não envia mídia ao Discórdia."})]}),v.jsx("div",{className:"lab-options",children:Object.entries(PI).map(([y,w])=>v.jsxs("button",{type:"button",className:n.kind===y&&f?"lab-option selected":"lab-option",onClick:()=>a(y),disabled:!s[y],"aria-pressed":n.kind===y&&f,children:[v.jsx("span",{className:"lab-option-icon","aria-hidden":"true",children:w.icon}),v.jsx("strong",{children:w.name}),v.jsx("span",{children:w.description}),v.jsx("small",{children:s[y]?n.kind===y&&n.status==="active"?"Capturando localmente":"Clique para testar":"Não disponível neste navegador"})]},y))}),v.jsxs("div",{className:"lab-viewer",children:[v.jsxs("div",{className:"lab-viewer-head",children:[v.jsx("strong",{children:"Prévia dos dispositivos"}),v.jsx("span",{className:n.status==="active"?"lab-live":"lab-off",children:n.status==="active"?"● Captura local ativa":"● Nenhuma transmissão ativa"})]}),v.jsx("div",{className:"lab-stage","aria-live":"polite",children:n.status==="active"&&n.hasVideo?v.jsx("video",{ref:t,autoPlay:!0,playsInline:!0,muted:!0,"aria-label":"Prévia local de "+h}):v.jsxs("div",{className:"lab-placeholder",children:[v.jsx("span",{"aria-hidden":"true",children:n.status==="active"?"🎙":"▤"}),v.jsx("strong",{children:n.status==="requesting"?"Aguardando sua permissão…":n.status==="active"&&n.kind==="microphone"?"Microfone disponível":"Nenhuma prévia em execução"}),v.jsx("p",{children:n.status==="active"&&n.kind==="microphone"?"O microfone foi autorizado. A reprodução é mantida desligada para evitar microfonia.":"Selecione um dispositivo acima para testar localmente."})]})}),(n.status==="error"||n.status==="unsupported")&&v.jsx("p",{role:"alert",className:"lab-error",children:n.message}),v.jsxs("div",{className:"lab-controls",children:[v.jsx("button",{type:"button",onClick:u,disabled:!f,children:"Parar captura"}),v.jsx("small",{children:f?"Ao trocar de teste ou sair desta tela, todas as faixas são encerradas.":"Use HTTPS ou localhost e libere a permissão apenas se desejar."})]})]}),v.jsx("p",{className:"lab-disclaimer",children:"Este laboratório testa apenas dispositivos locais. Salas temporárias têm transmissão de tela P2P e opção experimental de áudio da aba/sistema. Chat de voz nativo dos servidores, TURN e recepção privada SFU ainda não foram homologados na Web."})]})}const iL=2e4,sL=15e4,Hh=3e4;function cg(n,e=Date.now()){if(!n||typeof n!="object"||Array.isArray(n))return!1;const t=Number(n.heartbeatAt??n.connectedAt);return Number.isFinite(t)&&t>0&&t<=e+Hh&&e-t<=sL}function H_(n,e=Date.now()){return!n||typeof n!="object"||Array.isArray(n)?[]:Object.values(n).filter(t=>cg(t,e))}function oL(n,e=Date.now()){return!n||typeof n!="object"||Array.isArray(n)?[]:Object.entries(n).filter(([,t])=>H_(t,e).length>0).map(([t])=>t)}const aL=45e3,lL=9e3,uL=3e4;function cL(n=0){const e=Math.max(0,Math.min(6,Math.floor(Number(n)||0)));return Math.min(aL,4e3*2**e)}function hL({lastRepairAt:n=0,now:e=Date.now()}={}){const t=Number(n)||0,r=Number(e)||0;return Math.max(lL,t?uL-Math.max(0,r-t):0)}function dL(){let n=0,e=!1;return{ingest:a=>{const u=Number(a);return Number.isFinite(u)&&Math.abs(u)<=1440*60*1e3?(n=u,e=!0,!0):!1},now:(a=Date.now())=>a+n,status:()=>({ready:e,offsetMs:n})}}const fL=6e3;function pL({emit:n=()=>{},graceMs:e=fL,schedule:t=(s,a)=>setTimeout(s,a),cancel:r=s=>clearTimeout(s)}={}){let s={},a={},u=!1;const h=new Map,f=R=>Object.fromEntries(Object.entries(R||{}).map(([L,V])=>[L,{...V||{}}])),m=(R,L)=>Object.values(R).some(V=>Object.prototype.hasOwnProperty.call(V||{},L)),y=R=>{h.has(R)&&(r(h.get(R)),h.delete(R))};return{push:R=>{if(u)return;a=f(R);const L=f(R);for(const[V,U]of Object.entries(s))for(const[q,G]of Object.entries(U||{})){const Z=`${V}:\0${q}`;if(Object.prototype.hasOwnProperty.call(L[V]||{},q)||m(a,q)){y(Z);continue}if(!h.has(Z)){const se=t(()=>{if(h.delete(Z),u||Object.prototype.hasOwnProperty.call(a[V]||{},q)||m(a,q))return;const ae=f(s);ae[V]&&delete ae[V][q],s=ae,n(s)},e);h.set(Z,se)}(L[V]??(L[V]={}))[q]=G}s=L,n(s)},close:()=>{u=!0;for(const R of[...h.keys()])y(R)}}}function mL(n,e=Date.now()){if(!Number.isFinite(e)||!n||typeof n!="object"||Array.isArray(n))return null;let t=null;for(const r of Object.values(n))for(const s of H_(r,e)){const a=Number(s.connectedAt);if(!Number.isFinite(a)||a<=0||a>e+Hh)continue;const u=Number(s.callStartedAt),f=Number.isFinite(u)&&u>0&&u<=a+Hh&&u<=e+Hh?Math.min(u,a):a;(t===null||f<t)&&(t=f)}return t}const LC=dL(),Gh=()=>LC.now();function VC(n=()=>{}){return vs?Nd(Cu(vs,".info/serverTimeOffset"),e=>{LC.ingest(e.val())&&n()},()=>{}):()=>{}}const Da=n=>String(n||"").replace(/[^a-zA-Z0-9_-]/g,"_").slice(0,100);function gL(n,e,t=()=>{}){if(!vs||!n)return()=>{};const r=pL({emit:e});let s={},a=!1;const u=VC(()=>{a&&r.push(s)});let h=!1,f=()=>{},m=null,y=0;const w=()=>{h||(f=Nd(Cu(vs,`discordiaVoice/${Da(n)}`),I=>{h||(m&&(clearTimeout(m),m=null),y=0,s=I.val()||{},a=!0,r.push(s))},I=>{if(h||(t(I),m))return;const R=cL(y++);m=setTimeout(()=>{m=null,!h&&(f(),w())},R)}))};return w(),()=>{h=!0,m&&clearTimeout(m),f(),u(),r.close()}}function WL(n,e,t,r,s=()=>{}){if(!vs||!n||!e||!t)return{update:async()=>{},close:()=>{}};const a=`voice_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`,u=Cu(vs,`discordiaVoice/${Da(e)}/${Da(t)}`),h=Cu(vs,`discordiaVoice/${Da(e)}/${Da(t)}/${Da(n)}/${a}`);let f=!0,m=!1,y=!1,w=!1,I=!1,R=!1,L=null,V=Promise.resolve(),U=null,q={},G=null,Z=0;const se=()=>{var De;if(!f||!m||!w)return;const Me=(De=q==null?void 0:q[n])==null?void 0:De[a];if(cg(Me,Gh())){G&&(clearTimeout(G),G=null);return}G||(G=setTimeout(()=>{var Oe;G=null,!(!f||!m||!w)&&(cg((Oe=q==null?void 0:q[n])==null?void 0:Oe[a],Gh())||(Z=Date.now(),w=!1,C()))},hL({lastRepairAt:Z,now:Date.now()})))},ae=Me=>{q=Me||{},se();const De=mL(q,Gh());De!==null&&(U===null||De<U)&&(U=De,f&&w&&m&&C())},he=(Me,De,Oe="")=>{f&&s(Me,De,Oe)},x=()=>{!f||!m||L||(L=setTimeout(()=>{L=null,C()},5e3))},C=()=>!f||!m?Promise.resolve():I?(R=!0,V):(I=!0,V=(async()=>{var Me;try{if(((Me=rt==null?void 0:rt.currentUser)==null?void 0:Me.uid)!==n){he("waiting","Aguardando autenticação da sala.","auth/waiting"),x();return}if(await rt.currentUser.getIdToken(),y||(await TI(h).remove(),y=!0),!f)return;if(!w)try{ae((await yM(u)).val())}catch{}if(!f)return;const De={...r(),heartbeatAt:mm(),...U!==null?{callStartedAt:U}:{}};w?await _M(h,De):(await SI(h,{...De,connectedAt:mm(),...U===null?{callStartedAt:mm()}:{}}),w=!0),he("ok","Participação publicada na sala de voz.")}catch(De){console.error("[Discórdia RTDB][sala]",(De==null?void 0:De.code)||"unknown",De),he("error",(De==null?void 0:De.message)||"Falha ao registrar sala.",(De==null?void 0:De.code)||"unknown"),x()}})().finally(()=>{I=!1,R&&f&&m&&(R=!1,queueMicrotask(()=>{C()}))}),V),N=Nd(u,Me=>ae(Me.val()),()=>{}),P=VC(()=>ae(q)),O=Nd(Cu(vs,".info/connected"),Me=>{if(m=Me.val()===!0,!!f){if(!m){y=!1,w=!1,U=null,G&&(clearTimeout(G),G=null),he("offline","Sem conexão para atualizar a sala de voz.");return}C()}},Me=>he("error",(Me==null?void 0:Me.message)||"Falha na conexão da sala.",(Me==null?void 0:Me.code)||"unknown")),D=setInterval(()=>{f&&m&&C()},iL);return{update:()=>f&&m?C():Promise.resolve(),close:()=>{f=!1,O(),N(),P(),clearInterval(D),L&&clearTimeout(L),G&&clearTimeout(G),V.catch(()=>{}).then(()=>SI(h,null)).then(()=>TI(h).cancel()).catch(()=>{})}}}const kI=/^[A-Za-z0-9_-]{1,100}$/;function _L(n,e,t=Date.now()){if(!Array.isArray(e==null?void 0:e.memberUids)||!Array.isArray((e==null?void 0:e.bannedUids)??[]))return[];const r=new Set(e.memberUids.filter(a=>kI.test(a))),s=new Set(e.bannedUids??[]);return oL(n,t).filter(a=>kI.test(a)&&r.has(a)&&!s.has(a)).slice(0,30).map(a=>{const h=H_(n==null?void 0:n[a],t).slice().sort((y,w)=>Number(w.heartbeatAt||0)-Number(y.heartbeatAt||0)),f=h.find(y=>typeof y.name=="string")||h[0]||{},m=String(f.name||"Participante").replace(/<[^>]*>/g,"").replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,50)||"Participante";return Object.freeze({uid:a,name:m,muted:h.length>0&&h.every(y=>y.muted===!0),streaming:h.some(y=>y.streaming===!0)})})}const NI=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(n),yL="https://discordia-voice-lease-gateway-production.carlos1702s.workers.dev/server/voice-lease",vL=n=>"".trim()||yL,EL=new Set(["voice_lease_membership_denied","voice_lease_channel_not_found","voice_lease_invalid_server","voice_lease_authorization_unavailable","voice_lease_write_unavailable","voice_lease_backend_unavailable","voice_lease_disabled","voice_lease_rate_limited","voice_lease_rate_unavailable","invalid_firebase_token","firebase_login_required","firebase_verification_unavailable","voice_lease_moderation_pending"]),_m=n=>typeof n=="string"&&EL.has(n)?n:"";function wL(n){const e=(n==null?void 0:n.reason)||"";return e==="voice_lease_membership_denied"||e==="voice_lease_moderation_pending"?"Sua conta não tem permissão para entrar neste servidor ou foi removida dele.":e==="voice_lease_channel_not_found"?"Este canal não foi encontrado no servidor. Atualize a lista de canais.":e==="invalid_firebase_token"||e==="firebase_login_required"?"Sua sessão Firebase precisa ser atualizada. Saia e entre novamente.":e==="voice_lease_invalid_server"?"Este servidor tem dados incompatíveis com as novas permissões de voz.":e==="voice_lease_write_unavailable"?"O Firebase não conseguiu registrar a permissão de voz. Código: WRITE.":e==="voice_lease_authorization_unavailable"?"O serviço não conseguiu consultar os membros do servidor. Código: AUTH.":e==="voice_lease_backend_unavailable"||e==="voice_lease_disabled"?"O serviço de autorização de voz está indisponível. Código: BACKEND.":e==="voice_lease_rate_limited"?"Muitas tentativas de chamada. Tente novamente mais tarde.":e==="voice_lease_rate_unavailable"?"Controle de acesso temporariamente indisponível. Código: RATE.":(n==null?void 0:n.diagnostic)==="timeout"?"Tempo esgotado ao autorizar voz (TIMEOUT). Verifique o serviço de autorização.":(n==null?void 0:n.diagnostic)==="transport"?"Falha de comunicação com o serviço de autorização (NETWORK).":(n==null?void 0:n.diagnostic)==="invalid_response"?"Serviço de autorização retornou resposta incompatível (RESPONSE).":(n==null?void 0:n.diagnostic)==="token"?"Não foi possível obter seu token de sessão Firebase (TOKEN).":(n==null?void 0:n.diagnostic)==="invalid_request"?"Servidor ou canal de voz com identificador incompatível (CHANNEL).":(n==null?void 0:n.httpStatus)===429?"Serviço de voz limitou novas tentativas (HTTP 429).":(n==null?void 0:n.httpStatus)===503?"O serviço de voz está temporariamente indisponível (HTTP 503).":(n==null?void 0:n.httpStatus)===403?"O servidor recusou sua entrada no canal de voz (HTTP 403).":(n==null?void 0:n.httpStatus)===401?"O Firebase não confirmou seu login (HTTP 401).":Number.isInteger(n==null?void 0:n.httpStatus)?`Autorização de voz recusada pelo serviço (HTTP ${n.httpStatus}).`:"Não foi possível entrar na chamada. Confira sua conexão e tente novamente."}function IL({expiresAt:n,renewAfterMs:e}={},t=Date.now(),r=!1){if(!Number.isSafeInteger(n)||n<=t)return null;const s=n-t,a=Number.isSafeInteger(e)&&e>=5e3?Math.min(e,55e3):55e3;return Math.max(1e3,Math.min(r?5e3:a,Math.max(1e3,s-1e4)))}async function TL({endpoint:n,getToken:e,serverId:t,channelId:r,request:s=fetch,timeoutMs:a=8e3}={}){if(!NI(t)||!NI(r)||typeof e!="function"){const y=Error("voice_lease_invalid_request");throw y.diagnostic="invalid_request",y}let u;try{u=new URL(String(n||""))}catch{throw Error("voice_lease_invalid_endpoint")}if(u.protocol!=="https:"||u.pathname!=="/server/voice-lease"||u.search||u.hash||u.username||u.password)throw Error("voice_lease_invalid_endpoint");let h;try{h=await e()}catch(y){const w=Error("voice_lease_auth_required",{cause:y});throw w.diagnostic="token",w}if(typeof h!="string"||!h){const y=Error("voice_lease_auth_required");throw y.diagnostic="token",y}const f=new AbortController,m=setTimeout(()=>f.abort(),a);try{const y=await s(u.href,{method:"POST",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},cache:"no-store",redirect:"error",signal:f.signal,body:JSON.stringify({serverId:t,channelId:r})});let w;try{w=await y.json()}catch{w=null}if(y.status===403){const q=new Error("voice_lease_not_authorized");throw q.revoked=!0,q.httpStatus=403,q.reason=_m(w==null?void 0:w.error),q}if(!y.ok){const q=new Error("voice_lease_not_authorized");throw q.httpStatus=y.status,q.reason=_m(w==null?void 0:w.error),q}const I=Date.now(),R=w==null?void 0:w.expiresAt;if(!y.ok||(w==null?void 0:w.ok)!==!0||(w==null?void 0:w.serverId)!==t||(w==null?void 0:w.channelId)!==r||!Number.isSafeInteger(R)||R<=I+1e4||R>I+3e5){const q=Error("voice_lease_not_authorized");throw q.diagnostic="invalid_response",q}const L=R-I,V=Number(w.renewAfterMs),U=Number.isFinite(V)&&V>=5e3?Math.min(6e4,V,L-5e3):Math.min(6e4,L-5e3);return{expiresAt:R,renewAfterMs:U}}catch(y){const w=new Error("voice_lease_not_authorized",{cause:y});throw w.revoked=(y==null?void 0:y.revoked)===!0,w.httpStatus=Number.isInteger(y==null?void 0:y.httpStatus)?y.httpStatus:null,w.reason=_m(y==null?void 0:y.reason),w.diagnostic=(y==null?void 0:y.diagnostic)||((y==null?void 0:y.name)==="AbortError"?"timeout":(y==null?void 0:y.message)==="voice_lease_not_authorized"&&!Number.isInteger(y==null?void 0:y.httpStatus)?"invalid_response":!(y!=null&&y.httpStatus)&&y instanceof TypeError?"transport":""),w}finally{clearTimeout(m)}}function SL({server:n,user:e,activeChannelId:t="",onSelect:r}){var Z,se;const[s,a]=ye.useState(null),[u,h]=ye.useState("loading"),[f,m]=ye.useState("pending"),[y,w]=ye.useState(""),[I,R]=ye.useState(0),L=((se=(Z=n==null?void 0:n.voiceChannels)==null?void 0:Z.find(ae=>ae==null?void 0:ae.id))==null?void 0:se.id)||"",V=Array.isArray(n==null?void 0:n.memberUids)?n.memberUids.join("|"):"",U=Array.isArray(n==null?void 0:n.bannedUids)?n.bannedUids.join("|"):"";ye.useEffect(()=>{var C,N;let ae=!0,he=null;if(a(null),h("loading"),m("pending"),w(""),!L)return m("empty"),h("empty"),()=>{ae=!1};if(!(e!=null&&e.uid)||e.emailVerified!==!0||!((C=n==null?void 0:n.memberUids)!=null&&C.includes(e.uid))||(N=n==null?void 0:n.bannedUids)!=null&&N.includes(e.uid))return m("denied"),w("Você precisa de uma conta autorizada para visualizar os canais."),()=>{ae=!1};async function x(){var P;try{if(((P=rt==null?void 0:rt.currentUser)==null?void 0:P.uid)!==e.uid)throw Error("firebase_login_required");const O=await TL({endpoint:vL(),serverId:n.id,channelId:L,getToken:()=>rt.currentUser.getIdToken()});if(!ae)return;m("ready"),w("");const D=IL(O);if(D===null){m("expired"),w("A autorização de voz expirou.");return}he=setTimeout(()=>{he=null,x()},D)}catch(O){if(!ae)return;m("denied"),w(wL(O))}}return x(),()=>{ae=!1,he!==null&&clearTimeout(he)}},[n==null?void 0:n.id,L,e==null?void 0:e.uid,e==null?void 0:e.emailVerified,I]),ye.useEffect(()=>{if(!(n!=null&&n.id)||f!=="ready"){a(null);return}let ae=!0;h("loading");const he=gL(n.id,x=>{ae&&(a(x||{}),h("ready"))},x=>{ae&&(a(null),h("error"),w((x==null?void 0:x.code)==="PERMISSION_DENIED"||(x==null?void 0:x.code)==="permission-denied"?"O Firebase recusou a leitura deste canal. Atualize a autorização e tente novamente.":"Falha ao ler participantes. Verifique a conexão e tente novamente."))});return()=>{ae=!1,he==null||he()}},[n==null?void 0:n.id,f,I]);const q=Array.isArray(n==null?void 0:n.voiceChannels)?n.voiceChannels.filter(ae=>ae==null?void 0:ae.id):[],G=ye.useMemo(()=>{if(u!=="ready")return{};const ae=Gh();return Object.fromEntries(q.map(he=>[he.id,_L(s==null?void 0:s[he.id],n,ae)]))},[s,u,n==null?void 0:n.id,V,U,q.map(ae=>ae.id).join("|")]);return v.jsxs("div",{className:"web-server-voice-list",role:"group","aria-label":"Canais de voz e participantes",children:[!q.length&&v.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de voz disponível."}),q.map(ae=>{const he=G[ae.id]||[],x=he.filter(C=>C.streaming);return v.jsxs("div",{className:"web-server-voice-channel",children:[v.jsxs("button",{type:"button",className:"channel-choice web-server-voice-entry"+(t===ae.id?" active":""),"aria-label":"Abrir canal de voz "+(ae.name||"voz")+(u==="ready"?", "+he.length+" participantes, "+x.length+" transmitindo":""),onClick:()=>r==null?void 0:r(ae.id),children:[v.jsx(Ze,{name:"headphones",size:17}),v.jsx("span",{className:"web-server-voice-name",children:ae.name||"voz"}),u==="ready"&&he.length>0&&v.jsx("span",{className:"web-server-voice-count",children:he.length}),x.length>0&&v.jsx(Ze,{name:"screen",size:15})]}),u==="ready"&&he.length>0&&v.jsx("ul",{className:"web-server-voice-members",children:he.map(C=>v.jsxs("li",{className:"web-server-voice-member",children:[v.jsx("span",{className:"web-server-voice-avatar","aria-hidden":"true",children:C.name.slice(0,1).toUpperCase()}),v.jsx("span",{className:"web-server-voice-member-name",title:C.name,children:C.name}),v.jsx("span",{className:"web-server-voice-member-state",title:C.streaming?"Transmitindo tela":C.muted?"Microfone silenciado":"Conectado à voz",children:v.jsx(Ze,{name:C.streaming?"screen":C.muted?"mic-off":"mic",size:14})})]},C.uid))})]},ae.id)}),(f==="denied"||f==="expired"||u==="error")&&q.length>0&&v.jsxs("div",{className:"web-server-voice-feedback",role:"status",children:[v.jsx("p",{children:y||"Não foi possível consultar os canais de voz."}),v.jsx("button",{type:"button",onClick:()=>R(ae=>ae+1),children:"Tentar novamente"})]}),f==="pending"&&q.length>0&&v.jsx("p",{className:"web-server-voice-notice",role:"status",children:"Autorizando visualização dos canais…"}),f==="ready"&&u==="loading"&&q.length>0&&v.jsx("p",{className:"web-server-voice-notice",role:"status",children:"Sincronizando participantes…"})]})}function xd(n){if(typeof n!="string"||!n||n.length>6e5)return null;if(/^data:image\/(?:png|jpeg|webp|gif);base64,[a-z0-9+/=]+$/i.test(n))return n;try{const e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}function xI({server:n,variant:e="hero"}){if(!n)return null;const t=String(n.name||"Servidor Discórdia").slice(0,80),r=xd(n.banner),s=xd(n.iconUrl),a=Array.isArray(n.memberUids)?n.memberUids.length:0,u=e==="sidebar";return v.jsxs("section",{className:"discordia-server-banner "+(u?"is-sidebar":"is-hero"),"aria-label":"Servidor "+t,children:[r&&v.jsx("img",{className:"discordia-server-banner-art",src:r,alt:"",loading:"lazy",decoding:"async",referrerPolicy:"no-referrer"}),v.jsx("div",{className:"discordia-server-banner-glow","aria-hidden":"true"}),v.jsxs("div",{className:"discordia-server-banner-copy",children:[v.jsxs("span",{className:"discordia-server-banner-label",children:[v.jsx("span",{className:"discordia-server-banner-dot"})," SERVIR A DOR"]}),v.jsxs("div",{className:"discordia-server-banner-identity",children:[v.jsx("span",{className:"discordia-server-banner-icon",children:s?v.jsx("img",{src:s,alt:"",loading:"lazy",decoding:"async",referrerPolicy:"no-referrer"}):v.jsx("img",{src:OC,alt:"","aria-hidden":"true"})}),v.jsxs("span",{className:"discordia-server-banner-details",children:[v.jsx("strong",{title:t,children:t}),v.jsx("small",{children:a===1?"1 membro":a>1?a+" membros":"Comunidade Discórdia"})]})]})]})]})}const CL={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://discordia-web-beta.pages.dev",VITE_SFU_BETA_ENABLED:"true",VITE_SFU_BETA_ORIGIN:"https://discordia-sfu-media-production.carlos1702s.workers.dev",VITE_WEB_PUBLIC_LAUNCH:"true",VITE_WEB_SFU_RECEIVE_ENABLED:"true",VITE_WEB_SIGNUP_ENABLED:"false",VITE_WEB_STABLE_RELEASE:"true"},bI="https://web-testers-preview.discordia-ari.pages.dev",DI="https://discordia-web-beta.pages.dev",AL=/^[a-f0-9]{48}$/,RL=28;function hc(n){return typeof n=="string"&&AL.test(n)}function PL(n){return String(n||"").replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,RL)}function $L({storage:n=globalThis.sessionStorage,cryptoSource:e=globalThis.crypto}={}){var a,u;const t="discordia:web:guest-nickname";try{const h=PL((a=n==null?void 0:n.getItem)==null?void 0:a.call(n,t));if(h.length>=2)return h}catch{}let r="Web";try{const h=e.getRandomValues(new Uint8Array(2));r=Array.from(h,f=>f.toString(16).padStart(2,"0")).join("").toUpperCase()}catch{}const s="Convidado "+r;try{(u=n==null?void 0:n.setItem)==null||u.call(n,t,s)}catch{}return s}function hg(n){const e=String(n||"").match(/^\/r\/([a-f0-9]{48})\/?$/);return e?e[1]:""}function kL(n,e){const t=String(n||"").trim();if(hc(t))return t;try{const r=new URL(e),s=new URL(t);return!/^https?:$/.test(r.protocol)||s.origin!==r.origin||s.search||s.hash||s.username||s.password?"":hg(s.pathname)}catch{return""}}function NL(n,e){if(!hc(n))throw Error("INVALID_ROOM_ID");return String(e).replace(/\/$/,"")+"/r/"+n}function G_(n=CL){if(String((n==null?void 0:n.VITE_QUICK_ROOMS_ENABLED)||"")!=="true")return"";const e=String((n==null?void 0:n.VITE_QUICK_ROOM_API_ORIGIN)||"");return String((n==null?void 0:n.VITE_WEB_PUBLIC_LAUNCH)||"")==="true"?e===DI?DI:"":e===bI?bI:""}const FC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"true",VITE_QUICK_ROOM_API_ORIGIN:"https://discordia-web-beta.pages.dev",VITE_SFU_BETA_ENABLED:"true",VITE_SFU_BETA_ORIGIN:"https://discordia-sfu-media-production.carlos1702s.workers.dev",VITE_WEB_PUBLIC_LAUNCH:"true",VITE_WEB_SFU_RECEIVE_ENABLED:"true",VITE_WEB_SIGNUP_ENABLED:"false",VITE_WEB_STABLE_RELEASE:"true"};function qL(n,e=FC){const t=G_(e);return!t||!hc(n)?"":t.replace(/^https:/,"wss:")+"/api/rooms/"+n+"/connect"}async function xL({env:n=FC,request:e=fetch,storage:t=globalThis.sessionStorage,origin:r=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",getToken:s=null}={}){const u=G_(n);if(!u)throw Error("QUICK_ROOMS_UNAVAILABLE");const h=String((n==null?void 0:n.VITE_WEB_PUBLIC_LAUNCH)||"")==="true",f={};if(h&&typeof s=="function"){const w=await s();if(w!=null&&w!==""){if(typeof w!="string"||w.length<30||w.length>8192)throw Error("QUICK_ROOM_INVALID_TOKEN");f.Authorization="Bearer "+w}}const m=await e(u+"/api/rooms",{method:"POST",cache:"no-store",redirect:"error",headers:f});if(m.status===429)throw Error("QUICK_ROOM_RATE_LIMITED");if(m.status===503)throw Error("QUICK_ROOM_SERVICE_UNAVAILABLE");if(!m.ok)throw Error("QUICK_ROOM_CREATE_FAILED");const y=await m.json();if(!hc(y==null?void 0:y.roomId)||typeof(y==null?void 0:y.hostKey)!="string"||!/^[a-f0-9]{64}$/.test(y.hostKey))throw Error("QUICK_ROOM_INVALID_RESPONSE");return t.setItem("discordia:room-host:"+y.roomId,y.hostKey),{id:y.roomId,url:NL(y.roomId,r)}}function HL(n,e=globalThis.sessionStorage){var r;if(!hc(n))return"";const t=(r=e==null?void 0:e.getItem)==null?void 0:r.call(e,"discordia:room-host:"+n);return typeof t=="string"&&/^[a-f0-9]{64}$/.test(t)?t:""}function bL(n){switch(n==null?void 0:n.message){case"QUICK_ROOMS_UNAVAILABLE":return"As salas rápidas ainda não foram ativadas neste ambiente.";case"QUICK_ROOM_RATE_LIMITED":return"O limite temporário de criação de salas foi atingido. Tente novamente na próxima hora. Você ainda pode entrar por convite.";case"QUICK_ROOM_SERVICE_UNAVAILABLE":return"O servidor de salas está indisponível neste momento. Tente novamente mais tarde.";case"QUICK_ROOM_INVALID_TOKEN":return"Não foi possível confirmar sua sessão. Atualize a página e tente novamente.";case"QUICK_ROOM_CREATE_FAILED":return"Não foi possível criar a sala agora. Tente novamente.";default:return"Não foi possível conectar à sala. Confira o link ou tente novamente."}}function Kt(n){switch(String((n==null?void 0:n.code)||"")){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-email":return"E-mail ou senha inválidos.";case"auth/email-already-in-use":return"Este e-mail já possui uma conta. Use Entrar ou Recupere sua senha.";case"auth/weak-password":return"Senha muito fraca. Escolha outra com pelo menos 8 caracteres.";case"auth/operation-not-allowed":return"Cadastro de novas contas indisponível nesta configuração do Firebase.";case"auth/too-many-requests":return"Muitas tentativas. Tente novamente mais tarde.";case"auth/network-request-failed":case"unavailable":return"Sem conexão. Confira sua internet e tente novamente.";case"permission-denied":return"Você não tem permissão para realizar esta operação.";default:return"Não foi possível concluir a operação. Tente novamente."}}function jC({user:n,section:e,server:t,channel:r,friendUid:s,friendUids:a}){return!(n!=null&&n.uid)||n.emailVerified!==!0?!1:e==="dm"?typeof s=="string"&&s.length>0&&Array.isArray(a)&&a.includes(s)&&s!==n.uid:e==="servers"&&!!(t!=null&&t.id)&&Array.isArray(t.memberUids)&&t.memberUids.includes(n.uid)&&Array.isArray(t.bannedUids??[])&&!(t.bannedUids??[]).includes(n.uid)&&!!(r!=null&&r.id)&&Array.isArray(t.textChannels)&&t.textChannels.some(u=>(u==null?void 0:u.id)===r.id)}function DL(n){if(!jC(n))return"";const{user:e,section:t,server:r,channel:s,friendUid:a}=n;return t==="dm"?`dm:${e.uid}:${a}`:`server:${e.uid}:${r.id}:${s.id}`}function OL(n){var e;try{const t=(e=n==null?void 0:n.toDate)==null?void 0:e.call(n);return t instanceof Date&&!Number.isNaN(t.getTime())?t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}catch{return""}}const ML=ye.lazy(()=>LI(()=>import("./QuickRoom-DXWnFdLN.js"),__vite__mapDeps([0,1]))),LL=ye.lazy(()=>LI(()=>import("./WebVoiceRoom-BImYbSHD.js"),__vite__mapDeps([2,1])));function Ci({small:n=!1}){return v.jsx("img",{className:n?"brand-symbol small":"brand-symbol",src:OC,alt:"Símbolo do Discórdia",draggable:"false"})}function UC({subtitle:n}){return v.jsxs("div",{className:"brand",children:[v.jsx(Ci,{}),v.jsxs("div",{children:[v.jsx("strong",{children:"DISCÓRDIA"}),v.jsx("span",{children:n})]})]})}function OI({onJoinGuest:n,onCreateRoom:e,initialMode:t="login"}){const[r,s]=ye.useState(t),[a,u]=ye.useState(""),[h,f]=ye.useState(""),[m,y]=ye.useState(""),[w,I]=ye.useState(""),[R,L]=ye.useState(""),[V,U]=ye.useState(!1),[q,G]=ye.useState(""),[Z,se]=ye.useState(!1);async function ae(P){if(P.preventDefault(),!(!rt||V)){U(!0),G("");try{await UP(rt,h.trim(),m)}catch(O){G(Kt(O))}finally{U(!1)}}}async function he(){if(!(!rt||V)){U(!0),G("");try{rt.languageCode="pt-BR",await ck(rt,new Si)}catch(P){G((P==null?void 0:P.code)==="auth/popup-blocked"?"Seu navegador bloqueou o Google. Permita pop-ups para este site.":(P==null?void 0:P.code)==="auth/unauthorized-domain"?"É necessário autorizar este domínio no Firebase para o login Google.":Kt(P))}finally{U(!1)}}}async function x(P){if(P.preventDefault(),!(!rt||V)){G("Cadastro Web ainda não foi liberado na prévia. Use uma conta existente.");return}}async function C(){if(!h.trim()||V||!rt){G("Informe seu e-mail antes de recuperar a senha.");return}U(!0),G("");try{await jP(rt,h.trim()),G("Se esta conta existir, as instruções serão enviadas por e-mail.")}catch(P){G(Kt(P))}finally{U(!1)}}function N(P){P.preventDefault();const O=kL(R,window.location.origin);if(!O){G("Cole um link de sala do próprio Discórdia.");return}n(O)}return v.jsxs("main",{className:"entrance entrance-v2",id:"inicio",children:[v.jsx("div",{className:"entrance-ambient","aria-hidden":"true"}),v.jsxs("div",{className:"entry-starlight","aria-hidden":"true",children:[v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{})]}),v.jsxs("header",{className:"entry-nav",children:[v.jsx(UC,{subtitle:"WEB · VERSÃO ESTÁVEL"}),v.jsxs("nav",{className:"entry-nav-links","aria-label":"Navegação da versão Web",children:[v.jsxs("span",{className:"entry-preview-badge",children:[v.jsx("i",{})," ","VERSÃO ESTÁVEL"]}),v.jsxs("a",{href:"https://discordia-ari.pages.dev/",target:"_blank",rel:"noopener noreferrer",children:["Site oficial ",v.jsx(Ze,{name:"arrow-up-right",size:16})]})]})]}),v.jsxs("section",{className:"entry-content","aria-labelledby":"entry-title",children:[v.jsxs("span",{className:"entry-overline",children:[v.jsx("span",{className:"entry-live-pulse"})," SUA GALERA, EM QUALQUER TELA"]}),v.jsxs("h1",{id:"entry-title",children:["SUA GALERA.",v.jsx("br",{}),"SEU JOGO.",v.jsx("br",{}),v.jsx("em",{children:"SEU LUGAR."})]}),v.jsx("p",{className:"entry-lead",children:"A conversa começa aqui. Encontre seus amigos, entre com sua conta e compartilhe momentos — ou crie e participe de uma sala por convite, sem cadastro."}),v.jsxs("div",{className:"entry-scene","aria-label":"Ilustração da experiência de uma sala do Discórdia",children:[v.jsxs("div",{className:"entry-scene-top",children:[v.jsxs("div",{className:"entry-scene-dots","aria-hidden":"true",children:[v.jsx("i",{}),v.jsx("i",{}),v.jsx("i",{})]}),v.jsx("span",{children:"DISCÓRDIA · SALA DA GALERA"}),v.jsxs("span",{className:"entry-scene-live",children:[v.jsx("i",{})," CONCEITO VISUAL"]})]}),v.jsxs("div",{className:"entry-scene-body",children:[v.jsxs("div",{className:"entry-scene-rail","aria-hidden":"true",children:[v.jsx(Ci,{small:!0}),v.jsx("span",{children:v.jsx(Ze,{name:"users",size:19})}),v.jsx("span",{children:v.jsx(Ze,{name:"chat",size:19})}),v.jsx("span",{children:v.jsx(Ze,{name:"video",size:19})})]}),v.jsxs("div",{className:"entry-scene-room","aria-hidden":"true",children:[v.jsx("span",{className:"entry-scene-section",children:"SEU ESPAÇO"}),v.jsx("strong",{children:"Nosso lugar"}),v.jsx("div",{className:"entry-scene-channel",children:"# geral"}),v.jsx("div",{className:"entry-scene-channel",children:"# jogos"}),v.jsx("span",{className:"entry-scene-section",children:"SALAS"}),v.jsxs("div",{className:"entry-scene-channel active",children:[v.jsx(Ze,{name:"headphones",size:15})," Galera reunida"]}),v.jsxs("div",{className:"entry-scene-people",children:[v.jsx("b",{children:"A"}),v.jsx("b",{children:"L"}),v.jsx("b",{children:"F"}),v.jsx("b",{children:"+"})]})]}),v.jsxs("div",{className:"entry-scene-video","aria-hidden":"true",children:[v.jsxs("div",{className:"entry-scene-video-head",children:[v.jsx(Ze,{name:"video",size:16})," Compartilhando momentos"]}),v.jsxs("div",{className:"entry-scene-video-visual",children:[v.jsx("span",{className:"entry-scene-orbit",children:v.jsx(Ci,{})}),v.jsx("strong",{children:"A PARTIDA COMEÇA AQUI."}),v.jsx("small",{children:"Converse · Jogue · Compartilhe"})]}),v.jsxs("div",{className:"entry-scene-video-controls",children:[v.jsx("span",{children:v.jsx(Ze,{name:"headphones",size:15})}),v.jsx("span",{children:v.jsx(Ze,{name:"screen",size:15})}),v.jsx("span",{children:v.jsx(Ze,{name:"chat",size:15})})]})]})]}),v.jsx("span",{className:"entry-scene-caption",children:"CENA ILUSTRATIVA · NÃO É UMA TRANSMISSÃO REAL"})]}),v.jsxs("div",{className:"entry-trust-row","aria-label":"Recursos do Discórdia Web",children:[v.jsxs("span",{children:[v.jsx(Ze,{name:"shield",size:17})," Conta existente"]}),v.jsxs("span",{children:[v.jsx(Ze,{name:"link",size:17})," Crie ou entre sem conta"]}),v.jsxs("span",{children:[v.jsx(Ze,{name:"screen",size:17})," Compartilhe sua tela"]})]})]}),v.jsxs("section",{className:"login-card login-card-v2","aria-labelledby":"login-title",children:[v.jsxs("div",{className:"login-card-head",children:[v.jsxs("div",{children:[v.jsx("span",{className:"eyebrow",children:"BEM-VINDO AO DISCÓRDIA"}),v.jsx("h2",{id:"login-title",children:r==="login"?"Bom ter você aqui.":"Crie seu universo."}),v.jsx("p",{children:r==="login"?"Sua conta do Desktop e Android também funciona aqui.":"Uma conta para continuar suas conversas em todas as telas."})]}),v.jsx("div",{className:"login-card-orbit","aria-hidden":"true",children:v.jsx(Ci,{small:!0})})]}),v.jsxs("div",{className:"auth-mode-switch",role:"group","aria-label":"Escolha a forma de acesso",children:[v.jsx("button",{type:"button",className:r==="login"?"active":"","aria-pressed":r==="login",onClick:()=>{s("login"),G("")},children:"Entrar"}),v.jsx("button",{type:"button",className:r==="register"?"active":"","aria-pressed":r==="register","aria-disabled":!0,onClick:()=>{{G("Cadastro Web temporariamente desativado na prévia. Use sua conta existente.");return}},children:"Criar conta"})]}),r==="login"?v.jsxs(v.Fragment,{children:[v.jsxs("form",{onSubmit:ae,className:"login-form login-form-v2",children:[v.jsx("label",{htmlFor:"web-email",children:"Seu e-mail"}),v.jsxs("div",{className:"login-input-box",children:[v.jsx(Ze,{name:"mail",size:19}),v.jsx("input",{id:"web-email",type:"email",autoComplete:"username",inputMode:"email",value:h,maxLength:254,required:!0,placeholder:"voce@exemplo.com",onChange:P=>f(P.target.value)})]}),v.jsx("label",{htmlFor:"web-password",children:"Senha"}),v.jsxs("div",{className:"login-input-box",children:[v.jsx(Ze,{name:"lock",size:19}),v.jsx("input",{id:"web-password",type:Z?"text":"password",autoComplete:"current-password",value:m,required:!0,onChange:P=>y(P.target.value)}),v.jsx("button",{className:"login-password-toggle",type:"button",onClick:()=>se(P=>!P),"aria-label":Z?"Ocultar senha":"Mostrar senha","aria-pressed":Z,children:v.jsx(Ze,{name:Z?"eye-off":"eye",size:19})})]}),v.jsx("div",{className:"login-recovery-row",children:v.jsx("button",{className:"login-reset-link",type:"button",onClick:C,disabled:!rt||V,"aria-label":"Esqueceu a senha? Recuperar acesso",children:"Esqueceu a senha?"})}),v.jsxs("button",{className:"primary login-main-cta",type:"submit",disabled:!rt||V,children:[V?"Conectando…":"Entrar no Discórdia",!V&&v.jsx(Ze,{name:"arrow",size:19})]})]}),v.jsxs("div",{className:"login-google-section",children:[v.jsx("span",{className:"login-google-separator",children:"OU"}),v.jsxs("button",{type:"button",className:"login-google-button",disabled:!rt||V,onClick:()=>void he(),children:[v.jsx("span",{className:"login-google-g","aria-hidden":"true",children:"G"}),V?"Conectando…":"Continuar com Google"]}),v.jsx("small",{children:"Use sua conta Google do Discórdia."})]})]}):v.jsx(v.Fragment,{children:v.jsxs("form",{onSubmit:x,className:"register-form register-form-v2",children:[v.jsx("label",{htmlFor:"register-name",children:"Seu nome"}),v.jsx("input",{id:"register-name",value:a,minLength:2,maxLength:50,autoComplete:"name",required:!0,placeholder:"Como quer ser chamado?",onChange:P=>u(P.target.value)}),v.jsx("label",{htmlFor:"register-email",children:"E-mail"}),v.jsx("input",{id:"register-email",type:"email",autoComplete:"email",value:h,maxLength:254,required:!0,onChange:P=>f(P.target.value)}),v.jsx("label",{htmlFor:"register-password",children:"Senha (mínimo 8 caracteres)"}),v.jsx("input",{id:"register-password",type:Z?"text":"password",autoComplete:"new-password",value:m,minLength:8,required:!0,onChange:P=>y(P.target.value)}),v.jsx("label",{htmlFor:"register-confirm",children:"Confirmar senha"}),v.jsx("input",{id:"register-confirm",type:Z?"text":"password",autoComplete:"new-password",value:w,minLength:8,required:!0,onChange:P=>I(P.target.value)}),v.jsxs("button",{className:"login-password-toggle register-visibility",type:"button",onClick:()=>se(P=>!P),"aria-pressed":Z,children:[v.jsx(Ze,{name:Z?"eye-off":"eye",size:17}),Z?"Ocultar senhas":"Mostrar senhas"]}),v.jsxs("button",{className:"primary login-main-cta",type:"submit",disabled:!rt||V,children:[V?"Criando…":"Criar conta gratuita"," ",v.jsx(Ze,{name:"arrow",size:19})]}),v.jsx("small",{children:"Para liberar mensagens e servidores, confirme seu e-mail. O cadastro não libera canais privados automaticamente."})]})}),q&&v.jsx("p",{className:"notice",role:"status","aria-live":"polite",children:q}),!rt&&v.jsx("p",{className:"login-note",children:"Login temporariamente indisponível. O modo convidado não exige uma conta do Firebase."}),r==="login"&&!0&&v.jsxs("p",{className:"login-register-note",children:[v.jsx(Ze,{name:"shield",size:15}),"Cadastro de novas contas Web em preparação. Use uma conta existente."]}),v.jsx("div",{className:"entry-separator",children:v.jsx("span",{children:"OU CRIE UMA SALA SEM CONTA"})}),v.jsxs("div",{className:"login-guest-zone",id:"sala-rapida",children:[v.jsxs("div",{className:"login-guest-intro",children:[v.jsx("div",{className:"login-guest-symbol",children:v.jsx(Ze,{name:"link",size:21})}),v.jsxs("div",{children:[v.jsx("strong",{children:"Recebeu um convite?"}),v.jsx("span",{children:"Entre com seu apelido e assista sem cadastro."})]})]}),v.jsxs("form",{className:"guest-join-form",onSubmit:N,children:[v.jsx("label",{htmlFor:"guest-invite",children:"Link da sala temporária"}),v.jsxs("div",{className:"login-invite-box",children:[v.jsx("input",{id:"guest-invite",placeholder:"Cole o link ou o código da sala",autoComplete:"off",value:R,onChange:P=>L(P.target.value),maxLength:400}),v.jsxs("button",{type:"submit",children:["Entrar como convidado ",v.jsx(Ze,{name:"arrow-up-right",size:17})]})]})]}),G_()&&v.jsxs("button",{type:"button",className:"entry-create-room",disabled:V,onClick:async()=>{if(!V){U(!0),G("");try{const P=await e();P!==!0&&G(typeof P=="string"?P:"Não foi possível criar sua sala agora.")}catch{G("Falha inesperada ao criar a sala. Atualize a página e tente novamente.")}finally{U(!1)}}},children:[v.jsx(Ze,{name:"plus",size:19}),V?"Criando sala…":"Criar sala temporária sem conta"]}),v.jsx("p",{className:"entry-public-note",children:"Crie ou entre em salas temporárias sem cadastro. Para acessar servidores, amigos e mensagens privadas, use sua conta."})]}),v.jsxs("footer",{className:"entry-login-footer",children:[v.jsxs("span",{children:[v.jsx(Ze,{name:"shield",size:16})," ","Salas protegidas por convite"]}),v.jsxs("a",{href:"https://discordia-ari.pages.dev/",target:"_blank",rel:"noopener noreferrer",children:["Conheça o projeto ",v.jsx(Ze,{name:"arrow-up-right",size:14})]})]})]})]})}function VL({user:n,onRefresh:e,setError:t}){const[r,s]=ye.useState(!1);async function a(){s(!0);try{await n.reload(),e()}catch(h){t(Kt(h))}finally{s(!1)}}async function u(){s(!0);try{await zP(n),t("Se permitido, um e-mail de confirmação foi enviado.")}catch(h){t(Kt(h))}finally{s(!1)}}return v.jsx("main",{className:"center-screen",children:v.jsxs("div",{className:"setup-card",children:[v.jsx(UC,{subtitle:"VERIFICAÇÃO DE CONTA"}),v.jsx("h1",{children:"Confirme seu e-mail"}),v.jsx("p",{children:"Verifique sua caixa de entrada para acessar mensagens e servidores."}),v.jsxs("div",{className:"setup-actions",children:[v.jsx("button",{className:"primary",disabled:r,onClick:a,children:"Já confirmei"}),v.jsx("button",{disabled:r,onClick:u,children:"Reenviar confirmação"}),v.jsx("button",{onClick:()=>void wT(rt),children:"Sair"})]})]})})}function FL({item:n,user:e,onReact:t,onEdit:r,onDelete:s,editingId:a,editText:u,setEditText:h,onSave:f,onCancel:m,busy:y}){const w=n.senderUid===e.uid;return v.jsxs("article",{className:w?"chat-message mine":"chat-message",children:[v.jsx("span",{className:"message-avatar","aria-hidden":"true",children:String(n.senderName||"M").charAt(0).toUpperCase()}),v.jsxs("div",{className:"message-body",children:[v.jsxs("div",{className:"message-meta",children:[v.jsx("strong",{children:n.senderName||"Membro"}),v.jsx("time",{children:OL(n.createdAt)})]}),v.jsx("p",{children:n.text||"[Mensagem sem texto]"}),v.jsxs("div",{className:"message-controls",children:[bC.slice(0,4).map(I=>{var R;return v.jsxs("button",{className:((R=n.reactions)==null?void 0:R[e.uid])===I?"chosen-reaction":"","aria-label":"Reagir com "+I,title:"Reagir com "+I,onClick:()=>t(n,I),children:[I," ",Object.values(n.reactions||{}).filter(L=>L===I).length||""]},I)}),w&&v.jsxs(v.Fragment,{children:[v.jsx("button",{onClick:()=>r(n),children:"Editar"}),v.jsx("button",{onClick:()=>s(n),disabled:y,children:"Excluir"})]})]}),a===n.id&&v.jsxs("form",{className:"edit-row",onSubmit:I=>f(I,n),children:[v.jsx("input",{"aria-label":"Editar mensagem",maxLength:2e3,value:u,onChange:I=>h(I.target.value)}),v.jsx("button",{className:"primary",disabled:y||!u.trim(),children:"Salvar"}),v.jsx("button",{type:"button",onClick:m,children:"Cancelar"})]})]})]})}function jL(){var Wi;const[n,e]=ye.useState(void 0),[t,r]=ye.useState(()=>hg(window.location.pathname)),[s,a]=ye.useState("login");ye.useEffect(()=>{const H=()=>r(hg(window.location.pathname));return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[]);function u(H){window.history.pushState({},"","/r/"+H),r(H)}function h(){window.history.pushState({},"","/"),r(""),a("login")}function f(){h()}async function m(){if(ve)return!1;Te(!0),Ee("");try{const H=await xL({getToken:async()=>{const me=rt==null?void 0:rt.currentUser;return!(me!=null&&me.uid)||me.emailVerified!==!0?null:me.getIdToken()}});return u(H.id),!0}catch(H){const me=bL(H);return Ee(me),me}finally{Te(!1)}}const[y,w]=ye.useState(0),[I,R]=ye.useState([]),[L,V]=ye.useState([]),[U,q]=ye.useState([]),[G,Z]=ye.useState({}),[se,ae]=ye.useState(""),[he,x]=ye.useState(""),[C,N]=ye.useState(""),[P,O]=ye.useState(""),[D,k]=ye.useState("servers"),[pt,Me]=ye.useState({scope:"",items:[]}),[De,Oe]=ye.useState(""),[re,we]=ye.useState(""),[le,F]=ye.useState(""),[Q,ge]=ye.useState(""),[ve,Te]=ye.useState(!1),[Le,Ee]=ye.useState(""),[qe,Je]=ye.useState("");ye.useEffect(()=>{if(!rt){e(null);return}return $P(rt,e,()=>e(null))},[]);const at=!!(n!=null&&n.uid)&&n.emailVerified===!0;ye.useEffect(()=>{if(!at||!(n!=null&&n.uid))return;const H="discordia:web:profile-pending:"+n.uid;try{if(window.localStorage.getItem(H)!=="1")return}catch{return}let me=!0;return VM(n,n.displayName||"Membro").then(()=>{if(me)try{window.localStorage.removeItem(H)}catch{}}).catch(Xe=>{me&&Ee(Kt(Xe))}),()=>{me=!1}},[at,n==null?void 0:n.uid,y]),ye.useEffect(()=>{if(!at){R([]),V([]);return}const H=tt=>Ee(Kt(tt)),me=QM(n.uid,R,H),Xe=JM(n.uid,V,H);return()=>{me(),Xe()}},[n==null?void 0:n.uid,at,y]),ye.useEffect(()=>{if(!at){q([]);return}return zM(n.uid,q,H=>Ee(Kt(H)))},[n==null?void 0:n.uid,at,y]);const en=ye.useMemo(()=>[...new Set(U.filter(H=>H.status==="accepted").map(H=>H.fromUid===(n==null?void 0:n.uid)?H.toUid:H.fromUid).filter(H=>typeof H=="string"&&H&&H!==(n==null?void 0:n.uid)))],[U,n==null?void 0:n.uid]),jr=en.join("|");ye.useEffect(()=>{if(!at){Z({});return}const H=jr?jr.split("|"):[];Z({});const me=H.map(Xe=>BM(Xe,tt=>Z(cn=>({...cn,[Xe]:tt})),tt=>Ee(Kt(tt))));return()=>me.forEach(Xe=>Xe==null?void 0:Xe())},[n==null?void 0:n.uid,at,jr]);const Ae=I.find(H=>H.id===se)||I[0]||null,Xn=Array.isArray(Ae==null?void 0:Ae.textChannels)?Ae.textChannels.filter(H=>H==null?void 0:H.id):[],ot=Xn.find(H=>H.id===he)||Xn[0]||null,un=(Array.isArray(Ae==null?void 0:Ae.voiceChannels)?Ae.voiceChannels.filter(H=>H==null?void 0:H.id):[]).find(H=>H.id===C)||null,vn=en.includes(P)?P:"",Fn=H=>{const me=G[H];return String((me==null?void 0:me.displayName)||(me==null?void 0:me.name)||(me!=null&&me.handle?"@"+me.handle:"Amigo")).slice(0,50)},Jn=U.filter(H=>H.status==="pending"&&H.toUid===(n==null?void 0:n.uid)),Zn={user:n,section:D,server:Ae,channel:ot,friendUid:vn,friendUids:en},er=jC(Zn),jn=DL(Zn),oi=jn&&pt.scope===jn?pt.items:[];ye.useEffect(()=>{if(Me({scope:jn,items:[]}),F(""),!jn)return;let H=!0;const me=cn=>{H&&Me({scope:jn,items:cn})},Xe=cn=>{H&&Ee(Kt(cn))};let tt;return D==="dm"?tt=GM(n.uid,vn,me,Xe):D==="servers"&&(tt=YM(Ae.id,ot.id,me,Xe)),()=>{H=!1,tt==null||tt()}},[jn]);function zi(H){k("servers"),ae(H),x(""),N(""),Oe(""),Ee("")}function St(H){en.includes(H)&&(k("dm"),O(H),Oe(""),Ee(""))}async function Pt(H){var Xe;H.preventDefault();const me=De.trim();if(!(!me||me.length>2e3||ve||!er)){Te(!0),Ee("");try{const tt=String(n.displayName||((Xe=n.email)==null?void 0:Xe.split("@")[0])||"Membro").slice(0,50);D==="dm"?await KM(n.uid,vn,tt,me):await XM(n.uid,Ae.id,ot.id,tt,me),Oe("")}catch(tt){Ee(Kt(tt))}finally{Te(!1)}}}async function tr(H,me){if(!ve){Te(!0),Ee("");try{await ZM(H,n.uid,me)}catch(Xe){Ee(Kt(Xe))}finally{Te(!1)}}}async function Gs(H){if(H.preventDefault(),!(!re.trim()||ve)){Te(!0),Je("");try{await jM(n.uid,re.trim()),we(""),Je("Solicitação enviada.")}catch(me){Je(Kt(me))}finally{Te(!1)}}}async function mr(H,me){if(!ve){Te(!0),Ee("");try{await UM(H,n.uid,me)}catch(Xe){Ee(Kt(Xe))}finally{Te(!1)}}}async function ai(H,me){if(er)try{await qM(n.uid,D==="dm"?"dm":"server",vn,Ae==null?void 0:Ae.id,ot==null?void 0:ot.id,H,me)}catch(Xe){Ee(Kt(Xe))}}async function li(H,me){if(H.preventDefault(),!(!er||me.senderUid!==n.uid||!Q.trim()||ve)){Te(!0);try{await $M(n.uid,D==="dm"?"dm":"server",vn,Ae==null?void 0:Ae.id,ot==null?void 0:ot.id,me.id,Q.trim()),F(""),ge("")}catch(Xe){Ee(Kt(Xe))}finally{Te(!1)}}}async function Ks(H){if(!(!er||H.senderUid!==n.uid||ve)&&window.confirm("Excluir esta mensagem para todos?")){Te(!0);try{await HM(n.uid,D==="dm"?"dm":"server",vn,Ae==null?void 0:Ae.id,ot==null?void 0:ot.id,H.id)}catch(me){Ee(Kt(me))}finally{Te(!1)}}}function Bi(){k("friends"),Oe(""),Ee("")}function Qs(){wT(rt).catch(H=>Ee(Kt(H)))}if(t)return v.jsx(ye.Suspense,{fallback:v.jsx("main",{className:"center-screen brand-loading-screen",children:v.jsxs("div",{className:"brand-loading",children:[v.jsx(Ci,{}),v.jsx("strong",{children:"DISCÓRDIA"}),v.jsx("span",{children:"Preparando sua sala rápida…"})]})}),children:v.jsx(ML,{roomId:t,user:n!=null&&n.emailVerified?n:null,onExit:h,onAuthRefresh:()=>w(H=>H+1),onOpenApp:f},t)});if(!PC||!rt)return v.jsx(OI,{initialMode:s,onJoinGuest:u,onCreateRoom:m});if(n===void 0)return v.jsx("main",{className:"center-screen",children:v.jsxs("div",{className:"loading",children:[v.jsx(Ci,{}),v.jsx("p",{children:"Carregando Discórdia Web…"})]})});if(!n)return v.jsx(OI,{initialMode:s,onJoinGuest:u,onCreateRoom:m},s);if(!n.emailVerified)return v.jsxs(v.Fragment,{children:[v.jsx(VL,{user:n,onRefresh:()=>w(H=>H+1),setError:Ee}),Le&&v.jsx("div",{className:"auth-feedback",role:"status",children:Le})]});const Ys=D==="voice"?"◉ "+((un==null?void 0:un.name)||"Canal de voz"):D==="media-lab"?"Testes de mídia":D==="friends"?"Amigos e mensagens":D==="dm"?Fn(vn):ot?"# "+(ot.name||"canal"):(Ae==null?void 0:Ae.name)||"Bem-vindo ao Discórdia";return v.jsxs("div",{className:"app-shell",children:[v.jsxs("nav",{className:"server-rail","aria-label":"Servidores e áreas",children:[v.jsx("button",{className:"rail-home","aria-label":"Discórdia, início",title:"Início",onClick:()=>zi(""),children:v.jsx(Ci,{small:!0})}),v.jsx("span",{className:"rail-divider"}),I.map(H=>{var me;return v.jsx("button",{className:(D==="servers"||D==="voice")&&(Ae==null?void 0:Ae.id)===H.id?"server-icon active":"server-icon",title:H.name||"Servidor","aria-label":H.name||"Servidor",onClick:()=>zi(H.id),children:xd(H.iconUrl)?v.jsx("img",{className:"server-rail-artwork",src:xd(H.iconUrl),alt:"",loading:"lazy",referrerPolicy:"no-referrer"}):String(H.icon||((me=H.name)==null?void 0:me.charAt(0))||"◆").slice(0,2)},H.id)}),v.jsx("button",{className:D!=="servers"?"server-icon friends-icon active":"server-icon friends-icon","aria-label":"Amigos",title:"Amigos",onClick:Bi,children:v.jsx(Ze,{name:"users",size:23})}),v.jsx("button",{className:"rail-quick-room","aria-label":"Criar sala temporária por link",title:"Criar sala por link",onClick:()=>void m(),disabled:ve,children:v.jsx(Ze,{name:"link",size:24})}),v.jsx("button",{className:"rail-logout","aria-label":"Sair",title:"Sair da conta",onClick:Qs,children:v.jsx(Ze,{name:"exit",size:23})})]}),v.jsxs("aside",{className:"channel-sidebar","aria-label":"Navegação do espaço",children:[v.jsx("div",{className:"sidebar-title"+((D==="servers"||D==="voice")&&Ae?" sidebar-title--with-banner":""),children:(D==="servers"||D==="voice")&&Ae?v.jsx(xI,{server:Ae,variant:"sidebar"}):v.jsxs(v.Fragment,{children:[v.jsx(Ci,{small:!0}),v.jsxs("div",{children:[v.jsx("strong",{children:D==="servers"?"Meus servidores":"Mensagens"}),v.jsx("small",{children:"DISCÓRDIA WEB"})]})]})}),D==="servers"||D==="voice"?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE TEXTO"}),v.jsxs("div",{className:"channel-list",children:[Xn.map(H=>v.jsxs("button",{className:H.id===(ot==null?void 0:ot.id)?"channel-choice active":"channel-choice",onClick:()=>{k("servers"),x(H.id),Oe("")},children:["# ",v.jsx("span",{children:H.name||"canal"})]},H.id)),!Xn.length&&v.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de texto disponível."})]}),v.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE VOZ · AO VIVO"}),v.jsx(SL,{server:Ae,user:n,activeChannelId:D==="voice"?un==null?void 0:un.id:"",onSelect:H=>{k("voice"),N(H),Oe(""),Ee("")}},(Ae==null?void 0:Ae.id)||"no-server"),v.jsx("p",{className:"sidebar-empty",children:"Presença sincronizada com o Desktop e Android. Entrar na chamada e assistir à mídia exigem conexão autorizada."})]}):v.jsxs(v.Fragment,{children:[v.jsxs("button",{className:D==="friends"?"channel-choice active":"channel-choice",onClick:Bi,children:["♧ ",v.jsx("span",{children:"Amigos"})]}),v.jsx("div",{className:"sidebar-subhead",children:"MENSAGENS DIRETAS"}),v.jsx("div",{className:"channel-list",children:en.map(H=>v.jsxs("button",{className:D==="dm"&&H===vn?"channel-choice active":"channel-choice",onClick:()=>St(H),children:["◉ ",v.jsx("span",{children:Fn(H)})]},H))})]}),D!=="voice"&&v.jsxs("div",{className:"quick-room-launch",children:[v.jsx("strong",{children:"Sala rápida por link"}),v.jsx("p",{children:"Crie uma sala por convite e transmita com seus amigos."}),v.jsx("button",{type:"button",className:"primary",disabled:ve,onClick:()=>void m(),children:ve?"Criando sala…":"Criar sala e convidar"})]}),v.jsx("div",{className:"sidebar-subhead",children:"DISPOSITIVOS WEB"}),v.jsxs("button",{type:"button",className:D==="media-lab"?"channel-choice active":"channel-choice",onClick:()=>{k("media-lab"),Oe(""),Ee("")},children:["◉ ",v.jsx("span",{children:"Testar microfone, câmera e tela"})]}),v.jsxs("div",{className:"sidebar-user",children:[v.jsx("div",{className:"user-avatar",children:String(n.displayName||n.email||"U").charAt(0).toUpperCase()}),v.jsxs("div",{children:[v.jsx("strong",{children:n.displayName||((Wi=n.email)==null?void 0:Wi.split("@")[0])||"Usuário"}),v.jsx("small",{children:"Conectado"})]})]})]}),v.jsxs("main",{className:"conversation",children:[(D==="servers"||D==="voice")&&Ae&&v.jsx(xI,{server:Ae,variant:"hero"}),v.jsxs("header",{className:"conversation-header",children:[v.jsxs("div",{children:[v.jsx("span",{className:"header-kicker",children:"DISCÓRDIA WEB · 1.0 ESTÁVEL"}),v.jsx("h1",{children:Ys})]}),v.jsxs("span",{className:"sync-badge",children:[v.jsx("span",{className:"online-dot"})," Conta autenticada"]})]}),Le&&v.jsxs("div",{role:"alert",className:"inline-error",children:[v.jsx("span",{children:Le}),v.jsx("button",{onClick:()=>Ee(""),children:"Fechar"})]}),L.filter(H=>H.status==="pending").map(H=>v.jsxs("div",{className:"invite-banner",children:[v.jsxs("span",{children:["Convite para ",v.jsx("strong",{children:String(H.serverName||"servidor").slice(0,70)})]}),v.jsx("button",{disabled:ve,onClick:()=>void tr(H,!0),children:"Aceitar"}),v.jsx("button",{disabled:ve,onClick:()=>void tr(H,!1),children:"Recusar"})]},H.id)),D==="voice"?v.jsx(ye.Suspense,{fallback:v.jsx("div",{className:"center-screen",children:"Preparando visualizador Web…"}),children:v.jsx(LL,{user:n,server:Ae,channel:un,onBack:()=>{k("servers"),Oe(""),Ee("")}},n.uid+":"+((Ae==null?void 0:Ae.id)||"")+":"+((un==null?void 0:un.id)||""))}):D==="media-lab"?v.jsx(rL,{}):D==="friends"?v.jsxs("section",{className:"friend-content",children:[v.jsxs("div",{className:"section-heading",children:[v.jsx("h2",{children:"Seus amigos"}),v.jsx("p",{children:"Converse com seus contatos do Desktop e Android."})]}),v.jsxs("form",{className:"friend-form",onSubmit:Gs,children:[v.jsx("label",{htmlFor:"web-friend",children:"Adicionar por @identificador"}),v.jsxs("div",{children:[v.jsx("input",{id:"web-friend",value:re,maxLength:130,onChange:H=>we(H.target.value),placeholder:"@seuamigo",required:!0}),v.jsx("button",{className:"primary",disabled:ve||!re.trim(),children:"Enviar solicitação"})]})]}),qe&&v.jsx("p",{className:"notice",role:"status",children:qe}),Jn.length>0&&v.jsxs("div",{className:"friend-group",children:[v.jsx("h3",{children:"Solicitações recebidas"}),Jn.map(H=>v.jsxs("div",{className:"friend-line",children:[v.jsx("strong",{children:Fn(H.fromUid)}),v.jsxs("div",{children:[v.jsx("button",{disabled:ve,onClick:()=>void mr(H,!0),children:"Aceitar"}),v.jsx("button",{disabled:ve,onClick:()=>void mr(H,!1),children:"Recusar"})]})]},H.id))]}),v.jsxs("div",{className:"friend-group",children:[v.jsx("h3",{children:"Conversas"}),!en.length&&v.jsx("p",{className:"empty",children:"Seus amigos aparecerão aqui após aceitarem a solicitação."}),en.map(H=>v.jsxs("button",{className:"friend-line clickable",onClick:()=>St(H),children:[v.jsxs("span",{className:"friend-identity",children:[v.jsx("span",{className:"friend-avatar",children:Fn(H).charAt(0).toUpperCase()}),v.jsx("strong",{children:Fn(H)})]}),v.jsx("span",{children:"Enviar mensagem →"})]},H))]})]}):v.jsxs(v.Fragment,{children:[v.jsxs("section",{className:"message-scroll","aria-label":"Mensagens","aria-live":"polite",children:[D==="servers"&&!Ae&&v.jsxs("div",{className:"empty-state",children:[v.jsx(Ci,{}),v.jsx("h2",{children:"Bem-vindo ao Discórdia Web"}),v.jsx("p",{children:"Os servidores aos quais você tem acesso aparecerão na barra lateral."})]}),D==="servers"&&Ae&&!ot&&v.jsxs("div",{className:"empty-state",children:[v.jsx("h2",{children:"Sem canal de texto"}),v.jsx("p",{children:"Este servidor ainda não possui canais disponíveis para você."})]}),D==="dm"&&!vn&&v.jsxs("div",{className:"empty-state",children:[v.jsx("h2",{children:"Conversa indisponível"}),v.jsx("p",{children:"Selecione um amigo com solicitação aceita."})]}),er&&oi.length===0&&v.jsxs("div",{className:"empty-state",children:[v.jsx("h2",{children:"Comece a conversa"}),v.jsx("p",{children:"Suas mensagens serão sincronizadas com as outras plataformas."})]}),oi.map(H=>v.jsx(FL,{item:H,user:n,onReact:ai,onEdit:me=>{F(me.id),ge(me.text||"")},onDelete:Ks,editingId:le,editText:Q,setEditText:ge,onSave:li,onCancel:()=>F(""),busy:ve},H.id))]}),er&&v.jsxs("form",{className:"composer",onSubmit:Pt,children:[v.jsx("label",{htmlFor:"web-message",children:"Mensagem"}),v.jsxs("div",{className:"composer-inner",children:[v.jsx("input",{id:"web-message",maxLength:2e3,value:De,onChange:H=>Oe(H.target.value),placeholder:D==="dm"?"Mensagem para "+Fn(vn):"Mensagem em #"+((ot==null?void 0:ot.name)||"canal")}),v.jsx("button",{type:"submit",className:"primary",disabled:ve||!De.trim(),children:"Enviar"})]}),v.jsx("small",{children:"Mensagens sincronizadas com sua conta Discórdia"})]})]})]})]})}class UL extends MI.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){console.error("Discórdia Web: falha ao abrir a interface",e,t)}render(){return this.state.failed?v.jsx("main",{className:"center-screen brand-failure",role:"alert",children:v.jsxs("div",{className:"brand-failure-card",children:[v.jsx("img",{src:"/discordia-orbit.png",alt:"Discórdia",width:"72",height:"72"}),v.jsx("span",{className:"brand-eyebrow",children:"DISCÓRDIA WEB · SALA RÁPIDA"}),v.jsx("h1",{children:"Não foi possível abrir a sala"}),v.jsx("p",{children:"A sala pode ter sido criada, mas a interface não carregou. Você pode tentar novamente sem perder o convite nesta aba."}),v.jsx("button",{className:"primary",type:"button",onClick:()=>window.location.reload(),children:"Tentar novamente"}),v.jsx("p",{children:v.jsx("a",{href:"/",children:"Voltar ao início"})})]})}):this.props.children}}ZA.createRoot(document.getElementById("root")).render(v.jsx(MI.StrictMode,{children:v.jsx(UL,{children:v.jsx(jL,{})})}));export{Si as G,Ze as R,G_ as a,NL as b,qL as c,HL as d,OC as e,rt as f,$L as g,jP as h,ck as i,v as j,Gh as k,gL as l,_L as m,PL as n,WL as o,TL as p,wL as q,ye as r,UP as s,vL as t,vs as u,IL as v};
