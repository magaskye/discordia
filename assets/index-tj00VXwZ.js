(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function EA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vp={exports:{}},Jl={},Fp={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function wA(){if(Uv)return Oe;Uv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function z(M,G,se){this.props=M,this.context=G,this.refs=B,this.updater=se||k}z.prototype.isReactComponent={},z.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},z.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function Q(){}Q.prototype=z.prototype;function J(M,G,se){this.props=M,this.context=G,this.refs=B,this.updater=se||k}var ie=J.prototype=new Q;ie.constructor=J,L(ie,z.prototype),ie.isPureReactComponent=!0;var le=Array.isArray,qe=Object.prototype.hasOwnProperty,fe={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(M,G,se){var ve,Ne={},ge=null,ze=null;if(G!=null)for(ve in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(ge=""+G.key),G)qe.call(G,ve)&&!b.hasOwnProperty(ve)&&(Ne[ve]=G[ve]);var Ue=arguments.length-2;if(Ue===1)Ne.children=se;else if(1<Ue){for(var je=Array(Ue),it=0;it<Ue;it++)je[it]=arguments[it+2];Ne.children=je}if(M&&M.defaultProps)for(ve in Ue=M.defaultProps,Ue)Ne[ve]===void 0&&(Ne[ve]=Ue[ve]);return{$$typeof:n,type:M,key:ge,ref:ze,props:Ne,_owner:fe.current}}function P(M,G){return{$$typeof:n,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function x(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(se){return G[se]})}var V=/\/+/g;function R(M,G){return typeof M=="object"&&M!==null&&M.key!=null?x(""+M.key):G.toString(36)}function ft(M,G,se,ve,Ne){var ge=typeof M;(ge==="undefined"||ge==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(ge){case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case n:case e:ze=!0}}if(ze)return ze=M,Ne=Ne(ze),M=ve===""?"."+R(ze,0):ve,le(Ne)?(se="",M!=null&&(se=M.replace(V,"$&/")+"/"),ft(Ne,G,se,"",function(it){return it})):Ne!=null&&(D(Ne)&&(Ne=P(Ne,se+(!Ne.key||ze&&ze.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+M)),G.push(Ne)),1;if(ze=0,ve=ve===""?".":ve+":",le(M))for(var Ue=0;Ue<M.length;Ue++){ge=M[Ue];var je=ve+R(ge,Ue);ze+=ft(ge,G,se,je,Ne)}else if(je=w(M),typeof je=="function")for(M=je.call(M),Ue=0;!(ge=M.next()).done;)ge=ge.value,je=ve+R(ge,Ue++),ze+=ft(ge,G,se,je,Ne);else if(ge==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function kt(M,G,se){if(M==null)return M;var ve=[],Ne=0;return ft(M,ve,"","",function(ge){return G.call(se,ge,Ne++)}),ve}function ut(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(se){(M._status===0||M._status===-1)&&(M._status=1,M._result=se)},function(se){(M._status===0||M._status===-1)&&(M._status=2,M._result=se)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var He={current:null},re={transition:null},_e={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:re,ReactCurrentOwner:fe};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:kt,forEach:function(M,G,se){kt(M,function(){G.apply(this,arguments)},se)},count:function(M){var G=0;return kt(M,function(){G++}),G},toArray:function(M){return kt(M,function(G){return G})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Oe.Component=z,Oe.Fragment=t,Oe.Profiler=s,Oe.PureComponent=J,Oe.StrictMode=r,Oe.Suspense=f,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Oe.act=ae,Oe.cloneElement=function(M,G,se){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ve=L({},M.props),Ne=M.key,ge=M.ref,ze=M._owner;if(G!=null){if(G.ref!==void 0&&(ge=G.ref,ze=fe.current),G.key!==void 0&&(Ne=""+G.key),M.type&&M.type.defaultProps)var Ue=M.type.defaultProps;for(je in G)qe.call(G,je)&&!b.hasOwnProperty(je)&&(ve[je]=G[je]===void 0&&Ue!==void 0?Ue[je]:G[je])}var je=arguments.length-2;if(je===1)ve.children=se;else if(1<je){Ue=Array(je);for(var it=0;it<je;it++)Ue[it]=arguments[it+2];ve.children=Ue}return{$$typeof:n,type:M.type,key:Ne,ref:ge,props:ve,_owner:ze}},Oe.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Oe.createElement=A,Oe.createFactory=function(M){var G=A.bind(null,M);return G.type=M,G},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(M){return{$$typeof:d,render:M}},Oe.isValidElement=D,Oe.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:ut}},Oe.memo=function(M,G){return{$$typeof:m,type:M,compare:G===void 0?null:G}},Oe.startTransition=function(M){var G=re.transition;re.transition={};try{M()}finally{re.transition=G}},Oe.unstable_act=ae,Oe.useCallback=function(M,G){return He.current.useCallback(M,G)},Oe.useContext=function(M){return He.current.useContext(M)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(M){return He.current.useDeferredValue(M)},Oe.useEffect=function(M,G){return He.current.useEffect(M,G)},Oe.useId=function(){return He.current.useId()},Oe.useImperativeHandle=function(M,G,se){return He.current.useImperativeHandle(M,G,se)},Oe.useInsertionEffect=function(M,G){return He.current.useInsertionEffect(M,G)},Oe.useLayoutEffect=function(M,G){return He.current.useLayoutEffect(M,G)},Oe.useMemo=function(M,G){return He.current.useMemo(M,G)},Oe.useReducer=function(M,G,se){return He.current.useReducer(M,G,se)},Oe.useRef=function(M){return He.current.useRef(M)},Oe.useState=function(M){return He.current.useState(M)},Oe.useSyncExternalStore=function(M,G,se){return He.current.useSyncExternalStore(M,G,se)},Oe.useTransition=function(){return He.current.useTransition()},Oe.version="18.3.1",Oe}var jv;function tg(){return jv||(jv=1,Fp.exports=wA()),Fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function IA(){if(Bv)return Jl;Bv=1;var n=tg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,E={},w=null,k=null;m!==void 0&&(w=""+m),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(k=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:d,key:w,ref:k,props:E,_owner:s.current}}return Jl.Fragment=t,Jl.jsx=u,Jl.jsxs=u,Jl}var zv;function TA(){return zv||(zv=1,Vp.exports=IA()),Vp.exports}var S=TA(),Te=tg();const SA=EA(Te);var Ih={},Up={exports:{}},Dn={},jp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function CA(){return Wv||(Wv=1,(function(n){function e(re,_e){var ae=re.length;re.push(_e);e:for(;0<ae;){var M=ae-1>>>1,G=re[M];if(0<s(G,_e))re[M]=_e,re[ae]=G,ae=M;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var _e=re[0],ae=re.pop();if(ae!==_e){re[0]=ae;e:for(var M=0,G=re.length,se=G>>>1;M<se;){var ve=2*(M+1)-1,Ne=re[ve],ge=ve+1,ze=re[ge];if(0>s(Ne,ae))ge<G&&0>s(ze,Ne)?(re[M]=ze,re[ge]=ae,M=ge):(re[M]=Ne,re[ve]=ae,M=ve);else if(ge<G&&0>s(ze,ae))re[M]=ze,re[ge]=ae,M=ge;else break e}}return _e}function s(re,_e){var ae=re.sortIndex-_e.sortIndex;return ae!==0?ae:re.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,E=null,w=3,k=!1,L=!1,B=!1,z=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(re){for(var _e=t(m);_e!==null;){if(_e.callback===null)r(m);else if(_e.startTime<=re)r(m),_e.sortIndex=_e.expirationTime,e(f,_e);else break;_e=t(m)}}function le(re){if(B=!1,ie(re),!L)if(t(f)!==null)L=!0,ut(qe);else{var _e=t(m);_e!==null&&He(le,_e.startTime-re)}}function qe(re,_e){L=!1,B&&(B=!1,Q(A),A=-1),k=!0;var ae=w;try{for(ie(_e),E=t(f);E!==null&&(!(E.expirationTime>_e)||re&&!x());){var M=E.callback;if(typeof M=="function"){E.callback=null,w=E.priorityLevel;var G=M(E.expirationTime<=_e);_e=n.unstable_now(),typeof G=="function"?E.callback=G:E===t(f)&&r(f),ie(_e)}else r(f);E=t(f)}if(E!==null)var se=!0;else{var ve=t(m);ve!==null&&He(le,ve.startTime-_e),se=!1}return se}finally{E=null,w=ae,k=!1}}var fe=!1,b=null,A=-1,P=5,D=-1;function x(){return!(n.unstable_now()-D<P)}function V(){if(b!==null){var re=n.unstable_now();D=re;var _e=!0;try{_e=b(!0,re)}finally{_e?R():(fe=!1,b=null)}}else fe=!1}var R;if(typeof J=="function")R=function(){J(V)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,kt=ft.port2;ft.port1.onmessage=V,R=function(){kt.postMessage(null)}}else R=function(){z(V,0)};function ut(re){b=re,fe||(fe=!0,R())}function He(re,_e){A=z(function(){re(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){L||k||(L=!0,ut(qe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(w){case 1:case 2:case 3:var _e=3;break;default:_e=w}var ae=w;w=_e;try{return re()}finally{w=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,_e){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=w;w=re;try{return _e()}finally{w=ae}},n.unstable_scheduleCallback=function(re,_e,ae){var M=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?M+ae:M):ae=M,re){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,re={id:y++,callback:_e,priorityLevel:re,startTime:ae,expirationTime:G,sortIndex:-1},ae>M?(re.sortIndex=ae,e(m,re),t(f)===null&&re===t(m)&&(B?(Q(A),A=-1):B=!0,He(le,ae-M))):(re.sortIndex=G,e(f,re),L||k||(L=!0,ut(qe))),re},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(re){var _e=w;return function(){var ae=w;w=_e;try{return re.apply(this,arguments)}finally{w=ae}}}})(Bp)),Bp}var $v;function AA(){return $v||($v=1,jp.exports=CA()),jp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function RA(){if(qv)return Dn;qv=1;var n=tg(),e=AA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function w(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function k(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function L(i,o,l,h){if(o===null||typeof o>"u"||k(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function B(i,o,l,h,p,_,I){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=I}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){z[i]=new B(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];z[o]=new B(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){z[i]=new B(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){z[i]=new B(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){z[i]=new B(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){z[i]=new B(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){z[i]=new B(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){z[i]=new B(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){z[i]=new B(i,5,!1,i.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function J(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(Q,J);z[o]=new B(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(Q,J);z[o]=new B(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(Q,J);z[o]=new B(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){z[i]=new B(i,1,!1,i.toLowerCase(),null,!1,!1)}),z.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){z[i]=new B(i,1,!1,i.toLowerCase(),null,!0,!0)});function ie(i,o,l,h){var p=z.hasOwnProperty(o)?z[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(L(o,l,p,h)&&(l=null),h||p===null?w(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),fe=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),re=Symbol.iterator;function _e(i){return i===null||typeof i!="object"?null:(i=re&&i[re]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,M;function G(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var se=!1;function ve(i,o){if(!i||se)return"";se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){h=W}i.call(o.prototype)}else{try{throw Error()}catch(W){h=W}i()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),_=h.stack.split(`
`),I=p.length-1,C=_.length-1;1<=I&&0<=C&&p[I]!==_[C];)C--;for(;1<=I&&0<=C;I--,C--)if(p[I]!==_[C]){if(I!==1||C!==1)do if(I--,C--,0>C||p[I]!==_[C]){var N=`
`+p[I].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=I&&0<=C);break}}}finally{se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function Ne(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=ve(i.type,!1),i;case 11:return i=ve(i.type.render,!1),i;case 1:return i=ve(i.type,!0),i;default:return""}}function ge(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case fe:return"Portal";case P:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case ft:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case x:return(i.displayName||"Context")+".Consumer";case D:return(i._context.displayName||"Context")+".Provider";case V:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case kt:return o=i.displayName||null,o!==null?o:ge(i.type)||"Memo";case ut:o=i._payload,i=i._init;try{return ge(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(o);case 8:return o===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ue(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function it(i){var o=je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(I){h=""+I,_.call(this,I)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(I){h=""+I},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Vn(i){i._valueTracker||(i._valueTracker=it(i))}function xe(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=je(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Fn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Je(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Lr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ue(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function an(i,o){o=o.checked,o!=null&&ie(i,"checked",o,!1)}function ln(i,o){an(i,o);var l=Ue(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?si(i,o.type,l):o.hasOwnProperty("defaultValue")&&si(i,o.type,Ue(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function cr(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function si(i,o,l){(o!=="number"||Fn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Qn=Array.isArray;function un(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ue(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Yn(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function oi(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Qn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Ue(l)}}function ai(i,o){var l=Ue(o.value),h=Ue(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ji(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var hr,Bi=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=hr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Mr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ui=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(i){ui.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),li[o]=li[i]})});function zi(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||li.hasOwnProperty(i)&&li[i]?(""+o).trim():o+"px"}function Hs(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=zi(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Gs=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(i,o){if(o){if(Gs[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function q(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function Ye(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var gt=null,zt=null,Vr=null;function Uo(i){if(i=Vl(i)){if(typeof gt!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Vc(o),gt(i.stateNode,i.type,o))}}function Fr(i){zt?Vr?Vr.push(i):Vr=[i]:zt=i}function pl(){if(zt){var i=zt,o=Vr;if(Vr=zt=null,Uo(i),o)for(i=0;i<o.length;i++)Uo(o[i])}}function Ks(i,o){return i(o)}function ml(){}var ci=!1;function gl(i,o,l){if(ci)return i(o,l);ci=!0;try{return Ks(i,o,l)}finally{ci=!1,(zt!==null||Vr!==null)&&(ml(),pl())}}function At(i,o){var l=i.stateNode;if(l===null)return null;var h=Vc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var jo=!1;if(d)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){jo=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{jo=!1}function Qs(i,o,l,h,p,_,I,C,N){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(X){this.onError(X)}}var Ys=!1,Bo=null,fr=!1,_l=null,hf={onError:function(i){Ys=!0,Bo=i}};function zo(i,o,l,h,p,_,I,C,N){Ys=!1,Bo=null,Qs.apply(hf,arguments)}function lc(i,o,l,h,p,_,I,C,N){if(zo.apply(this,arguments),Ys){if(Ys){var W=Bo;Ys=!1,Bo=null}else throw Error(t(198));fr||(fr=!0,_l=W)}}function pr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Xs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function mr(i){if(pr(i)!==i)throw Error(t(188))}function uc(i){var o=i.alternate;if(!o){if(o=pr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return mr(p),i;if(_===h)return mr(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var I=!1,C=p.child;C;){if(C===l){I=!0,l=p,h=_;break}if(C===h){I=!0,h=p,l=_;break}C=C.sibling}if(!I){for(C=_.child;C;){if(C===l){I=!0,l=_,h=p;break}if(C===h){I=!0,h=_,l=p;break}C=C.sibling}if(!I)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function yl(i){return i=uc(i),i!==null?Wo(i):null}function Wo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Wo(i);if(o!==null)return o;i=i.sibling}return null}var $o=e.unstable_scheduleCallback,vl=e.unstable_cancelCallback,cc=e.unstable_shouldYield,df=e.unstable_requestPaint,st=e.unstable_now,hc=e.unstable_getCurrentPriorityLevel,Js=e.unstable_ImmediatePriority,$i=e.unstable_UserBlockingPriority,Xn=e.unstable_NormalPriority,El=e.unstable_LowPriority,dc=e.unstable_IdlePriority,Zs=null,Un=null;function fc(i){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Zs,i,void 0,(i.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:mc,wl=Math.log,pc=Math.LN2;function mc(i){return i>>>=0,i===0?32:31-(wl(i)/pc|0)|0}var qo=64,Ho=4194304;function qi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function eo(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,I=l&268435455;if(I!==0){var C=I&~p;C!==0?h=qi(C):(_&=I,_!==0&&(h=qi(_)))}else I=l&~p,I!==0?h=qi(I):_!==0&&(h=qi(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-yn(o),p=1<<l,h|=i[l],o&=~p;return h}function ff(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hi(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var I=31-yn(_),C=1<<I,N=p[I];N===-1?((C&l)===0||(C&h)!==0)&&(p[I]=ff(C,o)):N<=o&&(i.expiredLanes|=C),_&=~C}}function jn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function to(){var i=qo;return qo<<=1,(qo&4194240)===0&&(qo=64),i}function Hi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Gi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-yn(o),i[o]=l}function nt(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-yn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ki(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-yn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Be=0;function Qi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gc,Go,_c,yc,vc,Il=!1,Ur=[],Jt=null,gr=null,_r=null,Yi=new Map,Jn=new Map,jr=[],pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(i,o){switch(i){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Yi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(o.pointerId)}}function Cn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Vl(o),o!==null&&Go(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function mf(i,o,l,h,p){switch(o){case"focusin":return Jt=Cn(Jt,i,o,l,h,p),!0;case"dragenter":return gr=Cn(gr,i,o,l,h,p),!0;case"mouseover":return _r=Cn(_r,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Yi.set(_,Cn(Yi.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Jn.set(_,Cn(Jn.get(_)||null,i,o,l,h,p)),!0}return!1}function wc(i){var o=oo(i.target);if(o!==null){var l=pr(o);if(l!==null){if(o=l.tag,o===13){if(o=Xs(l),o!==null){i.blockedOn=o,vc(i.priority,function(){_c(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function di(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Ko(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Ee=h,l.target.dispatchEvent(h),Ee=null}else return o=Vl(l),o!==null&&Go(o),i.blockedOn=l,!1;o.shift()}return!0}function no(i,o,l){di(i)&&l.delete(o)}function Ic(){Il=!1,Jt!==null&&di(Jt)&&(Jt=null),gr!==null&&di(gr)&&(gr=null),_r!==null&&di(_r)&&(_r=null),Yi.forEach(no),Jn.forEach(no)}function yr(i,o){i.blockedOn===o&&(i.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ic)))}function vr(i){function o(p){return yr(p,i)}if(0<Ur.length){yr(Ur[0],i);for(var l=1;l<Ur.length;l++){var h=Ur[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Jt!==null&&yr(Jt,i),gr!==null&&yr(gr,i),_r!==null&&yr(_r,i),Yi.forEach(o),Jn.forEach(o),l=0;l<jr.length;l++)h=jr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<jr.length&&(l=jr[0],l.blockedOn===null);)wc(l),l.blockedOn===null&&jr.shift()}var fi=le.ReactCurrentBatchConfig,Xi=!0;function pt(i,o,l,h){var p=Be,_=fi.transition;fi.transition=null;try{Be=1,Tl(i,o,l,h)}finally{Be=p,fi.transition=_}}function gf(i,o,l,h){var p=Be,_=fi.transition;fi.transition=null;try{Be=4,Tl(i,o,l,h)}finally{Be=p,fi.transition=_}}function Tl(i,o,l,h){if(Xi){var p=Ko(i,o,l,h);if(p===null)Rf(i,o,h,ro,l),Ec(i,h);else if(mf(p,i,o,l,h))h.stopPropagation();else if(Ec(i,h),o&4&&-1<pf.indexOf(i)){for(;p!==null;){var _=Vl(p);if(_!==null&&gc(_),_=Ko(i,o,l,h),_===null&&Rf(i,o,h,ro,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Rf(i,o,h,null,l)}}var ro=null;function Ko(i,o,l,h){if(ro=null,i=Ye(h),i=oo(i),i!==null)if(o=pr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Xs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return ro=i,null}function Sl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hc()){case Js:return 1;case $i:return 4;case Xn:case El:return 16;case dc:return 536870912;default:return 16}default:return 16}}var Bn=null,Qo=null,An=null;function Cl(){if(An)return An;var i,o=Qo,l=o.length,h,p="value"in Bn?Bn.value:Bn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var I=l-i;for(h=1;h<=I&&o[l-h]===p[_-h];h++);return An=p.slice(i,1<h?1-h:void 0)}function Yo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Br(){return!0}function Al(){return!1}function Zt(i){function o(l,h,p,_,I){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=I,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(l=i[C],this[C]=l?l(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Br:Al,this.isPropagationStopped=Al,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),o}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Zt(Er),zr=ae({},Er,{view:0,detail:0}),_f=Zt(zr),Jo,pi,Ji,io=ae({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ji&&(Ji&&i.type==="mousemove"?(Jo=i.screenX-Ji.screenX,pi=i.screenY-Ji.screenY):pi=Jo=0,Ji=i),Jo)},movementY:function(i){return"movementY"in i?i.movementY:pi}}),Zo=Zt(io),Rl=ae({},io,{dataTransfer:0}),Tc=Zt(Rl),ea=ae({},zr,{relatedTarget:0}),ta=Zt(ea),Sc=ae({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),mi=Zt(Sc),Cc=ae({},Er,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ac=Zt(Cc),Rc=ae({},Er,{data:0}),Pl=Zt(Rc),na={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Pc[i])?!!o[i]:!1}function Wr(){return kc}var c=ae({},zr,{key:function(i){if(i.key){var o=na[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Yo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?vn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wr,charCode:function(i){return i.type==="keypress"?Yo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Yo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Zt(c),v=ae({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Zt(v),F=ae({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wr}),$=Zt(F),ne=ae({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ze=Zt(ne),Mt=ae({},io,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=Zt(Mt),Wt=[9,13,27,32],Nt=d&&"CompositionEvent"in window,Zn=null;d&&"documentMode"in document&&(Zn=document.documentMode);var zn=d&&"TextEvent"in window&&!Zn,so=d&&(!Nt||Zn&&8<Zn&&11>=Zn),ra=" ",b_=!1;function O_(i,o){switch(i){case"keyup":return Wt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ia=!1;function _C(i,o){switch(i){case"compositionend":return L_(o);case"keypress":return o.which!==32?null:(b_=!0,ra);case"textInput":return i=o.data,i===ra&&b_?null:i;default:return null}}function yC(i,o){if(ia)return i==="compositionend"||!Nt&&O_(i,o)?(i=Cl(),An=Qo=Bn=null,ia=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return so&&o.locale!=="ko"?null:o.data;default:return null}}var vC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!vC[i.type]:o==="textarea"}function V_(i,o,l,h){Fr(h),o=Oc(o,"onChange"),0<o.length&&(l=new Xo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var kl=null,Nl=null;function EC(i){ty(i,0)}function Nc(i){var o=ua(i);if(xe(o))return i}function wC(i,o){if(i==="change")return o}var F_=!1;if(d){var yf;if(d){var vf="oninput"in document;if(!vf){var U_=document.createElement("div");U_.setAttribute("oninput","return;"),vf=typeof U_.oninput=="function"}yf=vf}else yf=!1;F_=yf&&(!document.documentMode||9<document.documentMode)}function j_(){kl&&(kl.detachEvent("onpropertychange",B_),Nl=kl=null)}function B_(i){if(i.propertyName==="value"&&Nc(Nl)){var o=[];V_(o,Nl,i,Ye(i)),gl(EC,o)}}function IC(i,o,l){i==="focusin"?(j_(),kl=o,Nl=l,kl.attachEvent("onpropertychange",B_)):i==="focusout"&&j_()}function TC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Nc(Nl)}function SC(i,o){if(i==="click")return Nc(o)}function CC(i,o){if(i==="input"||i==="change")return Nc(o)}function AC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var wr=typeof Object.is=="function"?Object.is:AC;function xl(i,o){if(wr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!wr(i[p],o[p]))return!1}return!0}function z_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function W_(i,o){var l=z_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=z_(l)}}function $_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?$_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function q_(){for(var i=window,o=Fn();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Fn(i.document)}return o}function Ef(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function RC(i){var o=q_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&$_(l.ownerDocument.documentElement,l)){if(h!==null&&Ef(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=W_(l,_);var I=W_(l,h);p&&I&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==I.node||i.focusOffset!==I.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(I.node,I.offset)):(o.setEnd(I.node,I.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var PC=d&&"documentMode"in document&&11>=document.documentMode,sa=null,wf=null,Dl=null,If=!1;function H_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;If||sa==null||sa!==Fn(h)||(h=sa,"selectionStart"in h&&Ef(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Dl&&xl(Dl,h)||(Dl=h,h=Oc(wf,"onSelect"),0<h.length&&(o=new Xo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=sa)))}function xc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var oa={animationend:xc("Animation","AnimationEnd"),animationiteration:xc("Animation","AnimationIteration"),animationstart:xc("Animation","AnimationStart"),transitionend:xc("Transition","TransitionEnd")},Tf={},G_={};d&&(G_=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function Dc(i){if(Tf[i])return Tf[i];if(!oa[i])return i;var o=oa[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in G_)return Tf[i]=o[l];return i}var K_=Dc("animationend"),Q_=Dc("animationiteration"),Y_=Dc("animationstart"),X_=Dc("transitionend"),J_=new Map,Z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(i,o){J_.set(i,o),a(o,[i])}for(var Sf=0;Sf<Z_.length;Sf++){var Cf=Z_[Sf],kC=Cf.toLowerCase(),NC=Cf[0].toUpperCase()+Cf.slice(1);Zi(kC,"on"+NC)}Zi(K_,"onAnimationEnd"),Zi(Q_,"onAnimationIteration"),Zi(Y_,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(X_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xC=new Set("cancel close invalid load scroll toggle".split(" ").concat(bl));function ey(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,lc(h,o,void 0,i),i.currentTarget=null}function ty(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var I=h.length-1;0<=I;I--){var C=h[I],N=C.instance,W=C.currentTarget;if(C=C.listener,N!==_&&p.isPropagationStopped())break e;ey(p,C,W),_=N}else for(I=0;I<h.length;I++){if(C=h[I],N=C.instance,W=C.currentTarget,C=C.listener,N!==_&&p.isPropagationStopped())break e;ey(p,C,W),_=N}}}if(fr)throw i=_l,fr=!1,_l=null,i}function ct(i,o){var l=o[bf];l===void 0&&(l=o[bf]=new Set);var h=i+"__bubble";l.has(h)||(ny(o,i,2,!1),l.add(h))}function Af(i,o,l){var h=0;o&&(h|=4),ny(l,i,h,o)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Ol(i){if(!i[bc]){i[bc]=!0,r.forEach(function(l){l!=="selectionchange"&&(xC.has(l)||Af(l,!1,i),Af(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[bc]||(o[bc]=!0,Af("selectionchange",!1,o))}}function ny(i,o,l,h){switch(Sl(o)){case 1:var p=pt;break;case 4:p=gf;break;default:p=Tl}l=p.bind(null,o,l,i),p=void 0,!jo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Rf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var I=h.tag;if(I===3||I===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(I===4)for(I=h.return;I!==null;){var N=I.tag;if((N===3||N===4)&&(N=I.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;I=I.return}for(;C!==null;){if(I=oo(C),I===null)return;if(N=I.tag,N===5||N===6){h=_=I;continue e}C=C.parentNode}}h=h.return}gl(function(){var W=_,X=Ye(l),Z=[];e:{var Y=J_.get(i);if(Y!==void 0){var ue=Xo,de=i;switch(i){case"keypress":if(Yo(l)===0)break e;case"keydown":case"keyup":ue=g;break;case"focusin":de="focus",ue=ta;break;case"focusout":de="blur",ue=ta;break;case"beforeblur":case"afterblur":ue=ta;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Tc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$;break;case K_:case Q_:case Y_:ue=mi;break;case X_:ue=Ze;break;case"scroll":ue=_f;break;case"wheel":ue=We;break;case"copy":case"cut":case"paste":ue=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=T}var pe=(o&4)!==0,Rt=!pe&&i==="scroll",U=pe?Y!==null?Y+"Capture":null:Y;pe=[];for(var O=W,j;O!==null;){j=O;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,U!==null&&(ee=At(O,U),ee!=null&&pe.push(Ll(O,ee,j)))),Rt)break;O=O.return}0<pe.length&&(Y=new ue(Y,de,null,l,X),Z.push({event:Y,listeners:pe}))}}if((o&7)===0){e:{if(Y=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",Y&&l!==Ee&&(de=l.relatedTarget||l.fromElement)&&(oo(de)||de[gi]))break e;if((ue||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ue?(de=l.relatedTarget||l.toElement,ue=W,de=de?oo(de):null,de!==null&&(Rt=pr(de),de!==Rt||de.tag!==5&&de.tag!==6)&&(de=null)):(ue=null,de=W),ue!==de)){if(pe=Zo,ee="onMouseLeave",U="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(pe=T,ee="onPointerLeave",U="onPointerEnter",O="pointer"),Rt=ue==null?Y:ua(ue),j=de==null?Y:ua(de),Y=new pe(ee,O+"leave",ue,l,X),Y.target=Rt,Y.relatedTarget=j,ee=null,oo(X)===W&&(pe=new pe(U,O+"enter",de,l,X),pe.target=j,pe.relatedTarget=Rt,ee=pe),Rt=ee,ue&&de)t:{for(pe=ue,U=de,O=0,j=pe;j;j=aa(j))O++;for(j=0,ee=U;ee;ee=aa(ee))j++;for(;0<O-j;)pe=aa(pe),O--;for(;0<j-O;)U=aa(U),j--;for(;O--;){if(pe===U||U!==null&&pe===U.alternate)break t;pe=aa(pe),U=aa(U)}pe=null}else pe=null;ue!==null&&ry(Z,Y,ue,pe,!1),de!==null&&Rt!==null&&ry(Z,Rt,de,pe,!0)}}e:{if(Y=W?ua(W):window,ue=Y.nodeName&&Y.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Y.type==="file")var me=wC;else if(M_(Y))if(F_)me=CC;else{me=TC;var we=IC}else(ue=Y.nodeName)&&ue.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=SC);if(me&&(me=me(i,W))){V_(Z,me,l,X);break e}we&&we(i,Y,W),i==="focusout"&&(we=Y._wrapperState)&&we.controlled&&Y.type==="number"&&si(Y,"number",Y.value)}switch(we=W?ua(W):window,i){case"focusin":(M_(we)||we.contentEditable==="true")&&(sa=we,wf=W,Dl=null);break;case"focusout":Dl=wf=sa=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,H_(Z,l,X);break;case"selectionchange":if(PC)break;case"keydown":case"keyup":H_(Z,l,X)}var Ie;if(Nt)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else ia?O_(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(so&&l.locale!=="ko"&&(ia||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&ia&&(Ie=Cl()):(Bn=X,Qo="value"in Bn?Bn.value:Bn.textContent,ia=!0)),we=Oc(W,Re),0<we.length&&(Re=new Pl(Re,i,null,l,X),Z.push({event:Re,listeners:we}),Ie?Re.data=Ie:(Ie=L_(l),Ie!==null&&(Re.data=Ie)))),(Ie=zn?_C(i,l):yC(i,l))&&(W=Oc(W,"onBeforeInput"),0<W.length&&(X=new Pl("onBeforeInput","beforeinput",null,l,X),Z.push({event:X,listeners:W}),X.data=Ie))}ty(Z,o)})}function Ll(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Oc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=At(i,l),_!=null&&h.unshift(Ll(i,_,p)),_=At(i,o),_!=null&&h.push(Ll(i,_,p))),i=i.return}return h}function aa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ry(i,o,l,h,p){for(var _=o._reactName,I=[];l!==null&&l!==h;){var C=l,N=C.alternate,W=C.stateNode;if(N!==null&&N===h)break;C.tag===5&&W!==null&&(C=W,p?(N=At(l,_),N!=null&&I.unshift(Ll(l,N,C))):p||(N=At(l,_),N!=null&&I.push(Ll(l,N,C)))),l=l.return}I.length!==0&&i.push({event:o,listeners:I})}var DC=/\r\n?/g,bC=/\u0000|\uFFFD/g;function iy(i){return(typeof i=="string"?i:""+i).replace(DC,`
`).replace(bC,"")}function Lc(i,o,l){if(o=iy(o),iy(i)!==o&&l)throw Error(t(425))}function Mc(){}var Pf=null,kf=null;function Nf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,OC=typeof clearTimeout=="function"?clearTimeout:void 0,sy=typeof Promise=="function"?Promise:void 0,LC=typeof queueMicrotask=="function"?queueMicrotask:typeof sy<"u"?function(i){return sy.resolve(null).then(i).catch(MC)}:xf;function MC(i){setTimeout(function(){throw i})}function Df(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),vr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);vr(o)}function es(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function oy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var la=Math.random().toString(36).slice(2),$r="__reactFiber$"+la,Ml="__reactProps$"+la,gi="__reactContainer$"+la,bf="__reactEvents$"+la,VC="__reactListeners$"+la,FC="__reactHandles$"+la;function oo(i){var o=i[$r];if(o)return o;for(var l=i.parentNode;l;){if(o=l[gi]||l[$r]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=oy(i);i!==null;){if(l=i[$r])return l;i=oy(i)}return o}i=l,l=i.parentNode}return null}function Vl(i){return i=i[$r]||i[gi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ua(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Vc(i){return i[Ml]||null}var Of=[],ca=-1;function ts(i){return{current:i}}function ht(i){0>ca||(i.current=Of[ca],Of[ca]=null,ca--)}function ot(i,o){ca++,Of[ca]=i.current,i.current=o}var ns={},cn=ts(ns),Rn=ts(!1),ao=ns;function ha(i,o){var l=i.type.contextTypes;if(!l)return ns;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Pn(i){return i=i.childContextTypes,i!=null}function Fc(){ht(Rn),ht(cn)}function ay(i,o,l){if(cn.current!==ns)throw Error(t(168));ot(cn,o),ot(Rn,l)}function ly(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return ae({},l,h)}function Uc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ns,ao=cn.current,ot(cn,i),ot(Rn,Rn.current),!0}function uy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=ly(i,o,ao),h.__reactInternalMemoizedMergedChildContext=i,ht(Rn),ht(cn),ot(cn,i)):ht(Rn),ot(Rn,l)}var _i=null,jc=!1,Lf=!1;function cy(i){_i===null?_i=[i]:_i.push(i)}function UC(i){jc=!0,cy(i)}function rs(){if(!Lf&&_i!==null){Lf=!0;var i=0,o=Be;try{var l=_i;for(Be=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}_i=null,jc=!1}catch(p){throw _i!==null&&(_i=_i.slice(i+1)),$o(Js,rs),p}finally{Be=o,Lf=!1}}return null}var da=[],fa=0,Bc=null,zc=0,er=[],tr=0,lo=null,yi=1,vi="";function uo(i,o){da[fa++]=zc,da[fa++]=Bc,Bc=i,zc=o}function hy(i,o,l){er[tr++]=yi,er[tr++]=vi,er[tr++]=lo,lo=i;var h=yi;i=vi;var p=32-yn(h)-1;h&=~(1<<p),l+=1;var _=32-yn(o)+p;if(30<_){var I=p-p%5;_=(h&(1<<I)-1).toString(32),h>>=I,p-=I,yi=1<<32-yn(o)+p|l<<p|h,vi=_+i}else yi=1<<_|l<<p|h,vi=i}function Mf(i){i.return!==null&&(uo(i,1),hy(i,1,0))}function Vf(i){for(;i===Bc;)Bc=da[--fa],da[fa]=null,zc=da[--fa],da[fa]=null;for(;i===lo;)lo=er[--tr],er[tr]=null,vi=er[--tr],er[tr]=null,yi=er[--tr],er[tr]=null}var Wn=null,$n=null,mt=!1,Ir=null;function dy(i,o){var l=sr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function fy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Wn=i,$n=es(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Wn=i,$n=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=lo!==null?{id:yi,overflow:vi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=sr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Wn=i,$n=null,!0):!1;default:return!1}}function Ff(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Uf(i){if(mt){var o=$n;if(o){var l=o;if(!fy(i,o)){if(Ff(i))throw Error(t(418));o=es(l.nextSibling);var h=Wn;o&&fy(i,o)?dy(h,l):(i.flags=i.flags&-4097|2,mt=!1,Wn=i)}}else{if(Ff(i))throw Error(t(418));i.flags=i.flags&-4097|2,mt=!1,Wn=i}}}function py(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function Wc(i){if(i!==Wn)return!1;if(!mt)return py(i),mt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Nf(i.type,i.memoizedProps)),o&&(o=$n)){if(Ff(i))throw my(),Error(t(418));for(;o;)dy(i,o),o=es(o.nextSibling)}if(py(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){$n=es(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}$n=null}}else $n=Wn?es(i.stateNode.nextSibling):null;return!0}function my(){for(var i=$n;i;)i=es(i.nextSibling)}function pa(){$n=Wn=null,mt=!1}function jf(i){Ir===null?Ir=[i]:Ir.push(i)}var jC=le.ReactCurrentBatchConfig;function Fl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(I){var C=p.refs;I===null?delete C[_]:C[_]=I},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function $c(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function gy(i){var o=i._init;return o(i._payload)}function _y(i){function o(U,O){if(i){var j=U.deletions;j===null?(U.deletions=[O],U.flags|=16):j.push(O)}}function l(U,O){if(!i)return null;for(;O!==null;)o(U,O),O=O.sibling;return null}function h(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function p(U,O){return U=hs(U,O),U.index=0,U.sibling=null,U}function _(U,O,j){return U.index=j,i?(j=U.alternate,j!==null?(j=j.index,j<O?(U.flags|=2,O):j):(U.flags|=2,O)):(U.flags|=1048576,O)}function I(U){return i&&U.alternate===null&&(U.flags|=2),U}function C(U,O,j,ee){return O===null||O.tag!==6?(O=xp(j,U.mode,ee),O.return=U,O):(O=p(O,j),O.return=U,O)}function N(U,O,j,ee){var me=j.type;return me===b?X(U,O,j.props.children,ee,j.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ut&&gy(me)===O.type)?(ee=p(O,j.props),ee.ref=Fl(U,O,j),ee.return=U,ee):(ee=ph(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Fl(U,O,j),ee.return=U,ee)}function W(U,O,j,ee){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=Dp(j,U.mode,ee),O.return=U,O):(O=p(O,j.children||[]),O.return=U,O)}function X(U,O,j,ee,me){return O===null||O.tag!==7?(O=yo(j,U.mode,ee,me),O.return=U,O):(O=p(O,j),O.return=U,O)}function Z(U,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return O=xp(""+O,U.mode,j),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case qe:return j=ph(O.type,O.key,O.props,null,U.mode,j),j.ref=Fl(U,null,O),j.return=U,j;case fe:return O=Dp(O,U.mode,j),O.return=U,O;case ut:var ee=O._init;return Z(U,ee(O._payload),j)}if(Qn(O)||_e(O))return O=yo(O,U.mode,j,null),O.return=U,O;$c(U,O)}return null}function Y(U,O,j,ee){var me=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return me!==null?null:C(U,O,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case qe:return j.key===me?N(U,O,j,ee):null;case fe:return j.key===me?W(U,O,j,ee):null;case ut:return me=j._init,Y(U,O,me(j._payload),ee)}if(Qn(j)||_e(j))return me!==null?null:X(U,O,j,ee,null);$c(U,j)}return null}function ue(U,O,j,ee,me){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(j)||null,C(O,U,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case qe:return U=U.get(ee.key===null?j:ee.key)||null,N(O,U,ee,me);case fe:return U=U.get(ee.key===null?j:ee.key)||null,W(O,U,ee,me);case ut:var we=ee._init;return ue(U,O,j,we(ee._payload),me)}if(Qn(ee)||_e(ee))return U=U.get(j)||null,X(O,U,ee,me,null);$c(O,ee)}return null}function de(U,O,j,ee){for(var me=null,we=null,Ie=O,Re=O=0,Ht=null;Ie!==null&&Re<j.length;Re++){Ie.index>Re?(Ht=Ie,Ie=null):Ht=Ie.sibling;var Ke=Y(U,Ie,j[Re],ee);if(Ke===null){Ie===null&&(Ie=Ht);break}i&&Ie&&Ke.alternate===null&&o(U,Ie),O=_(Ke,O,Re),we===null?me=Ke:we.sibling=Ke,we=Ke,Ie=Ht}if(Re===j.length)return l(U,Ie),mt&&uo(U,Re),me;if(Ie===null){for(;Re<j.length;Re++)Ie=Z(U,j[Re],ee),Ie!==null&&(O=_(Ie,O,Re),we===null?me=Ie:we.sibling=Ie,we=Ie);return mt&&uo(U,Re),me}for(Ie=h(U,Ie);Re<j.length;Re++)Ht=ue(Ie,U,Re,j[Re],ee),Ht!==null&&(i&&Ht.alternate!==null&&Ie.delete(Ht.key===null?Re:Ht.key),O=_(Ht,O,Re),we===null?me=Ht:we.sibling=Ht,we=Ht);return i&&Ie.forEach(function(ds){return o(U,ds)}),mt&&uo(U,Re),me}function pe(U,O,j,ee){var me=_e(j);if(typeof me!="function")throw Error(t(150));if(j=me.call(j),j==null)throw Error(t(151));for(var we=me=null,Ie=O,Re=O=0,Ht=null,Ke=j.next();Ie!==null&&!Ke.done;Re++,Ke=j.next()){Ie.index>Re?(Ht=Ie,Ie=null):Ht=Ie.sibling;var ds=Y(U,Ie,Ke.value,ee);if(ds===null){Ie===null&&(Ie=Ht);break}i&&Ie&&ds.alternate===null&&o(U,Ie),O=_(ds,O,Re),we===null?me=ds:we.sibling=ds,we=ds,Ie=Ht}if(Ke.done)return l(U,Ie),mt&&uo(U,Re),me;if(Ie===null){for(;!Ke.done;Re++,Ke=j.next())Ke=Z(U,Ke.value,ee),Ke!==null&&(O=_(Ke,O,Re),we===null?me=Ke:we.sibling=Ke,we=Ke);return mt&&uo(U,Re),me}for(Ie=h(U,Ie);!Ke.done;Re++,Ke=j.next())Ke=ue(Ie,U,Re,Ke.value,ee),Ke!==null&&(i&&Ke.alternate!==null&&Ie.delete(Ke.key===null?Re:Ke.key),O=_(Ke,O,Re),we===null?me=Ke:we.sibling=Ke,we=Ke);return i&&Ie.forEach(function(vA){return o(U,vA)}),mt&&uo(U,Re),me}function Rt(U,O,j,ee){if(typeof j=="object"&&j!==null&&j.type===b&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case qe:e:{for(var me=j.key,we=O;we!==null;){if(we.key===me){if(me=j.type,me===b){if(we.tag===7){l(U,we.sibling),O=p(we,j.props.children),O.return=U,U=O;break e}}else if(we.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ut&&gy(me)===we.type){l(U,we.sibling),O=p(we,j.props),O.ref=Fl(U,we,j),O.return=U,U=O;break e}l(U,we);break}else o(U,we);we=we.sibling}j.type===b?(O=yo(j.props.children,U.mode,ee,j.key),O.return=U,U=O):(ee=ph(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Fl(U,O,j),ee.return=U,U=ee)}return I(U);case fe:e:{for(we=j.key;O!==null;){if(O.key===we)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){l(U,O.sibling),O=p(O,j.children||[]),O.return=U,U=O;break e}else{l(U,O);break}else o(U,O);O=O.sibling}O=Dp(j,U.mode,ee),O.return=U,U=O}return I(U);case ut:return we=j._init,Rt(U,O,we(j._payload),ee)}if(Qn(j))return de(U,O,j,ee);if(_e(j))return pe(U,O,j,ee);$c(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,O!==null&&O.tag===6?(l(U,O.sibling),O=p(O,j),O.return=U,U=O):(l(U,O),O=xp(j,U.mode,ee),O.return=U,U=O),I(U)):l(U,O)}return Rt}var ma=_y(!0),yy=_y(!1),qc=ts(null),Hc=null,ga=null,Bf=null;function zf(){Bf=ga=Hc=null}function Wf(i){var o=qc.current;ht(qc),i._currentValue=o}function $f(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function _a(i,o){Hc=i,Bf=ga=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(kn=!0),i.firstContext=null)}function nr(i){var o=i._currentValue;if(Bf!==i)if(i={context:i,memoizedValue:o,next:null},ga===null){if(Hc===null)throw Error(t(308));ga=i,Hc.dependencies={lanes:0,firstContext:i}}else ga=ga.next=i;return o}var co=null;function qf(i){co===null?co=[i]:co.push(i)}function vy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,qf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ei(i,h)}function Ei(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var is=!1;function Hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ey(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function wi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ss(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ge&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ei(i,l)}return p=h.interleaved,p===null?(o.next=o,qf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ei(i,l)}function Gc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ki(i,l)}}function wy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var I={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=I:_=_.next=I,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Kc(i,o,l,h){var p=i.updateQueue;is=!1;var _=p.firstBaseUpdate,I=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var N=C,W=N.next;N.next=null,I===null?_=W:I.next=W,I=N;var X=i.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==I&&(C===null?X.firstBaseUpdate=W:C.next=W,X.lastBaseUpdate=N))}if(_!==null){var Z=p.baseState;I=0,X=W=N=null,C=_;do{var Y=C.lane,ue=C.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:ue,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var de=i,pe=C;switch(Y=o,ue=l,pe.tag){case 1:if(de=pe.payload,typeof de=="function"){Z=de.call(ue,Z,Y);break e}Z=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=pe.payload,Y=typeof de=="function"?de.call(ue,Z,Y):de,Y==null)break e;Z=ae({},Z,Y);break e;case 2:is=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,Y=p.effects,Y===null?p.effects=[C]:Y.push(C))}else ue={eventTime:ue,lane:Y,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?(W=X=ue,N=Z):X=X.next=ue,I|=Y;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;Y=C,C=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(X===null&&(N=Z),p.baseState=N,p.firstBaseUpdate=W,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do I|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);po|=I,i.lanes=I,i.memoizedState=Z}}function Iy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ul={},qr=ts(Ul),jl=ts(Ul),Bl=ts(Ul);function ho(i){if(i===Ul)throw Error(t(174));return i}function Gf(i,o){switch(ot(Bl,o),ot(jl,i),ot(qr,Ul),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:wt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=wt(o,i)}ht(qr),ot(qr,o)}function ya(){ht(qr),ht(jl),ht(Bl)}function Ty(i){ho(Bl.current);var o=ho(qr.current),l=wt(o,i.type);o!==l&&(ot(jl,i),ot(qr,l))}function Kf(i){jl.current===i&&(ht(qr),ht(jl))}var _t=ts(0);function Qc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Qf=[];function Yf(){for(var i=0;i<Qf.length;i++)Qf[i]._workInProgressVersionPrimary=null;Qf.length=0}var Yc=le.ReactCurrentDispatcher,Xf=le.ReactCurrentBatchConfig,fo=0,yt=null,Vt=null,$t=null,Xc=!1,zl=!1,Wl=0,BC=0;function hn(){throw Error(t(321))}function Jf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!wr(i[l],o[l]))return!1;return!0}function Zf(i,o,l,h,p,_){if(fo=_,yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Yc.current=i===null||i.memoizedState===null?qC:HC,i=l(h,p),zl){_=0;do{if(zl=!1,Wl=0,25<=_)throw Error(t(301));_+=1,$t=Vt=null,o.updateQueue=null,Yc.current=GC,i=l(h,p)}while(zl)}if(Yc.current=eh,o=Vt!==null&&Vt.next!==null,fo=0,$t=Vt=yt=null,Xc=!1,o)throw Error(t(300));return i}function ep(){var i=Wl!==0;return Wl=0,i}function Hr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?yt.memoizedState=$t=i:$t=$t.next=i,$t}function rr(){if(Vt===null){var i=yt.alternate;i=i!==null?i.memoizedState:null}else i=Vt.next;var o=$t===null?yt.memoizedState:$t.next;if(o!==null)$t=o,Vt=i;else{if(i===null)throw Error(t(310));Vt=i,i={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},$t===null?yt.memoizedState=$t=i:$t=$t.next=i}return $t}function $l(i,o){return typeof o=="function"?o(i):o}function tp(i){var o=rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Vt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var I=p.next;p.next=_.next,_.next=I}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var C=I=null,N=null,W=_;do{var X=W.lane;if((fo&X)===X)N!==null&&(N=N.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:i(h,W.action);else{var Z={lane:X,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};N===null?(C=N=Z,I=h):N=N.next=Z,yt.lanes|=X,po|=X}W=W.next}while(W!==null&&W!==_);N===null?I=h:N.next=C,wr(h,o.memoizedState)||(kn=!0),o.memoizedState=h,o.baseState=I,o.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,yt.lanes|=_,po|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function np(i){var o=rr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var I=p=p.next;do _=i(_,I.action),I=I.next;while(I!==p);wr(_,o.memoizedState)||(kn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Sy(){}function Cy(i,o){var l=yt,h=rr(),p=o(),_=!wr(h.memoizedState,p);if(_&&(h.memoizedState=p,kn=!0),h=h.queue,rp(Py.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||$t!==null&&$t.memoizedState.tag&1){if(l.flags|=2048,ql(9,Ry.bind(null,l,h,p,o),void 0,null),qt===null)throw Error(t(349));(fo&30)!==0||Ay(l,o,p)}return p}function Ay(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Ry(i,o,l,h){o.value=l,o.getSnapshot=h,ky(o)&&Ny(i)}function Py(i,o,l){return l(function(){ky(o)&&Ny(i)})}function ky(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!wr(i,l)}catch{return!0}}function Ny(i){var o=Ei(i,1);o!==null&&Ar(o,i,1,-1)}function xy(i){var o=Hr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$l,lastRenderedState:i},o.queue=i,i=i.dispatch=$C.bind(null,yt,i),[o.memoizedState,i]}function ql(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Dy(){return rr().memoizedState}function Jc(i,o,l,h){var p=Hr();yt.flags|=i,p.memoizedState=ql(1|o,l,void 0,h===void 0?null:h)}function Zc(i,o,l,h){var p=rr();h=h===void 0?null:h;var _=void 0;if(Vt!==null){var I=Vt.memoizedState;if(_=I.destroy,h!==null&&Jf(h,I.deps)){p.memoizedState=ql(o,l,_,h);return}}yt.flags|=i,p.memoizedState=ql(1|o,l,_,h)}function by(i,o){return Jc(8390656,8,i,o)}function rp(i,o){return Zc(2048,8,i,o)}function Oy(i,o){return Zc(4,2,i,o)}function Ly(i,o){return Zc(4,4,i,o)}function My(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Vy(i,o,l){return l=l!=null?l.concat([i]):null,Zc(4,4,My.bind(null,o,i),l)}function ip(){}function Fy(i,o){var l=rr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Jf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Uy(i,o){var l=rr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Jf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function jy(i,o,l){return(fo&21)===0?(i.baseState&&(i.baseState=!1,kn=!0),i.memoizedState=l):(wr(l,o)||(l=to(),yt.lanes|=l,po|=l,i.baseState=!0),o)}function zC(i,o){var l=Be;Be=l!==0&&4>l?l:4,i(!0);var h=Xf.transition;Xf.transition={};try{i(!1),o()}finally{Be=l,Xf.transition=h}}function By(){return rr().memoizedState}function WC(i,o,l){var h=us(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},zy(i))Wy(o,l);else if(l=vy(i,o,l,h),l!==null){var p=wn();Ar(l,i,h,p),$y(l,o,h)}}function $C(i,o,l){var h=us(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(zy(i))Wy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var I=o.lastRenderedState,C=_(I,l);if(p.hasEagerState=!0,p.eagerState=C,wr(C,I)){var N=o.interleaved;N===null?(p.next=p,qf(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=vy(i,o,p,h),l!==null&&(p=wn(),Ar(l,i,h,p),$y(l,o,h))}}function zy(i){var o=i.alternate;return i===yt||o!==null&&o===yt}function Wy(i,o){zl=Xc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function $y(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ki(i,l)}}var eh={readContext:nr,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},qC={readContext:nr,useCallback:function(i,o){return Hr().memoizedState=[i,o===void 0?null:o],i},useContext:nr,useEffect:by,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Jc(4194308,4,My.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Jc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Jc(4,2,i,o)},useMemo:function(i,o){var l=Hr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Hr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=WC.bind(null,yt,i),[h.memoizedState,i]},useRef:function(i){var o=Hr();return i={current:i},o.memoizedState=i},useState:xy,useDebugValue:ip,useDeferredValue:function(i){return Hr().memoizedState=i},useTransition:function(){var i=xy(!1),o=i[0];return i=zC.bind(null,i[1]),Hr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=yt,p=Hr();if(mt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),qt===null)throw Error(t(349));(fo&30)!==0||Ay(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,by(Py.bind(null,h,_,i),[i]),h.flags|=2048,ql(9,Ry.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Hr(),o=qt.identifierPrefix;if(mt){var l=vi,h=yi;l=(h&~(1<<32-yn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=Wl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=BC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},HC={readContext:nr,useCallback:Fy,useContext:nr,useEffect:rp,useImperativeHandle:Vy,useInsertionEffect:Oy,useLayoutEffect:Ly,useMemo:Uy,useReducer:tp,useRef:Dy,useState:function(){return tp($l)},useDebugValue:ip,useDeferredValue:function(i){var o=rr();return jy(o,Vt.memoizedState,i)},useTransition:function(){var i=tp($l)[0],o=rr().memoizedState;return[i,o]},useMutableSource:Sy,useSyncExternalStore:Cy,useId:By,unstable_isNewReconciler:!1},GC={readContext:nr,useCallback:Fy,useContext:nr,useEffect:rp,useImperativeHandle:Vy,useInsertionEffect:Oy,useLayoutEffect:Ly,useMemo:Uy,useReducer:np,useRef:Dy,useState:function(){return np($l)},useDebugValue:ip,useDeferredValue:function(i){var o=rr();return Vt===null?o.memoizedState=i:jy(o,Vt.memoizedState,i)},useTransition:function(){var i=np($l)[0],o=rr().memoizedState;return[i,o]},useMutableSource:Sy,useSyncExternalStore:Cy,useId:By,unstable_isNewReconciler:!1};function Tr(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function sp(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var th={isMounted:function(i){return(i=i._reactInternals)?pr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=wn(),p=us(i),_=wi(h,p);_.payload=o,l!=null&&(_.callback=l),o=ss(i,_,p),o!==null&&(Ar(o,i,p,h),Gc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=wn(),p=us(i),_=wi(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ss(i,_,p),o!==null&&(Ar(o,i,p,h),Gc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=wn(),h=us(i),p=wi(l,h);p.tag=2,o!=null&&(p.callback=o),o=ss(i,p,h),o!==null&&(Ar(o,i,h,l),Gc(o,i,h))}};function qy(i,o,l,h,p,_,I){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,I):o.prototype&&o.prototype.isPureReactComponent?!xl(l,h)||!xl(p,_):!0}function Hy(i,o,l){var h=!1,p=ns,_=o.contextType;return typeof _=="object"&&_!==null?_=nr(_):(p=Pn(o)?ao:cn.current,h=o.contextTypes,_=(h=h!=null)?ha(i,p):ns),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=th,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Gy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&th.enqueueReplaceState(o,o.state,null)}function op(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Hf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=nr(_):(_=Pn(o)?ao:cn.current,p.context=ha(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(sp(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&th.enqueueReplaceState(p,p.state,null),Kc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function va(i,o){try{var l="",h=o;do l+=Ne(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function ap(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function lp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var KC=typeof WeakMap=="function"?WeakMap:Map;function Ky(i,o,l){l=wi(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){lh||(lh=!0,Tp=h),lp(i,o)},l}function Qy(i,o,l){l=wi(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){lp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){lp(i,o),typeof h!="function"&&(as===null?as=new Set([this]):as.add(this));var I=o.stack;this.componentDidCatch(o.value,{componentStack:I!==null?I:""})}),l}function Yy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new KC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=lA.bind(null,i,o,l),o.then(i,i))}function Xy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Jy(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=wi(-1,1),o.tag=2,ss(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var QC=le.ReactCurrentOwner,kn=!1;function En(i,o,l,h){o.child=i===null?yy(o,null,l,h):ma(o,i.child,l,h)}function Zy(i,o,l,h,p){l=l.render;var _=o.ref;return _a(o,p),h=Zf(i,o,l,h,_,p),l=ep(),i!==null&&!kn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ii(i,o,p)):(mt&&l&&Mf(o),o.flags|=1,En(i,o,h,p),o.child)}function ev(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!Np(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,tv(i,o,_,h,p)):(i=ph(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var I=_.memoizedProps;if(l=l.compare,l=l!==null?l:xl,l(I,h)&&i.ref===o.ref)return Ii(i,o,p)}return o.flags|=1,i=hs(_,h),i.ref=o.ref,i.return=o,o.child=i}function tv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(xl(_,h)&&i.ref===o.ref)if(kn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(kn=!0);else return o.lanes=i.lanes,Ii(i,o,p)}return up(i,o,l,h,p)}function nv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(wa,qn),qn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ot(wa,qn),qn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,ot(wa,qn),qn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,ot(wa,qn),qn|=h;return En(i,o,p,l),o.child}function rv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function up(i,o,l,h,p){var _=Pn(l)?ao:cn.current;return _=ha(o,_),_a(o,p),l=Zf(i,o,l,h,_,p),h=ep(),i!==null&&!kn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Ii(i,o,p)):(mt&&h&&Mf(o),o.flags|=1,En(i,o,l,p),o.child)}function iv(i,o,l,h,p){if(Pn(l)){var _=!0;Uc(o)}else _=!1;if(_a(o,p),o.stateNode===null)rh(i,o),Hy(o,l,h),op(o,l,h,p),h=!0;else if(i===null){var I=o.stateNode,C=o.memoizedProps;I.props=C;var N=I.context,W=l.contextType;typeof W=="object"&&W!==null?W=nr(W):(W=Pn(l)?ao:cn.current,W=ha(o,W));var X=l.getDerivedStateFromProps,Z=typeof X=="function"||typeof I.getSnapshotBeforeUpdate=="function";Z||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(C!==h||N!==W)&&Gy(o,I,h,W),is=!1;var Y=o.memoizedState;I.state=Y,Kc(o,h,I,p),N=o.memoizedState,C!==h||Y!==N||Rn.current||is?(typeof X=="function"&&(sp(o,l,X,h),N=o.memoizedState),(C=is||qy(o,l,C,h,Y,N,W))?(Z||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(o.flags|=4194308)):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=N),I.props=h,I.state=N,I.context=W,h=C):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{I=o.stateNode,Ey(i,o),C=o.memoizedProps,W=o.type===o.elementType?C:Tr(o.type,C),I.props=W,Z=o.pendingProps,Y=I.context,N=l.contextType,typeof N=="object"&&N!==null?N=nr(N):(N=Pn(l)?ao:cn.current,N=ha(o,N));var ue=l.getDerivedStateFromProps;(X=typeof ue=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(C!==Z||Y!==N)&&Gy(o,I,h,N),is=!1,Y=o.memoizedState,I.state=Y,Kc(o,h,I,p);var de=o.memoizedState;C!==Z||Y!==de||Rn.current||is?(typeof ue=="function"&&(sp(o,l,ue,h),de=o.memoizedState),(W=is||qy(o,l,W,h,Y,de,N)||!1)?(X||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(h,de,N),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(h,de,N)),typeof I.componentDidUpdate=="function"&&(o.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof I.componentDidUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=de),I.props=h,I.state=de,I.context=N,h=W):(typeof I.componentDidUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),h=!1)}return cp(i,o,l,h,_,p)}function cp(i,o,l,h,p,_){rv(i,o);var I=(o.flags&128)!==0;if(!h&&!I)return p&&uy(o,l,!1),Ii(i,o,_);h=o.stateNode,QC.current=o;var C=I&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&I?(o.child=ma(o,i.child,null,_),o.child=ma(o,null,C,_)):En(i,o,C,_),o.memoizedState=h.state,p&&uy(o,l,!0),o.child}function sv(i){var o=i.stateNode;o.pendingContext?ay(i,o.pendingContext,o.pendingContext!==o.context):o.context&&ay(i,o.context,!1),Gf(i,o.containerInfo)}function ov(i,o,l,h,p){return pa(),jf(p),o.flags|=256,En(i,o,l,h),o.child}var hp={dehydrated:null,treeContext:null,retryLane:0};function dp(i){return{baseLanes:i,cachePool:null,transitions:null}}function av(i,o,l){var h=o.pendingProps,p=_t.current,_=!1,I=(o.flags&128)!==0,C;if((C=I)||(C=i!==null&&i.memoizedState===null?!1:(p&2)!==0),C?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ot(_t,p&1),i===null)return Uf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(I=h.children,i=h.fallback,_?(h=o.mode,_=o.child,I={mode:"hidden",children:I},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=I):_=mh(I,h,0,null),i=yo(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=dp(l),o.memoizedState=hp,i):fp(o,I));if(p=i.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return YC(i,o,I,h,C,p,l);if(_){_=h.fallback,I=o.mode,p=i.child,C=p.sibling;var N={mode:"hidden",children:h.children};return(I&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=N,o.deletions=null):(h=hs(p,N),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?_=hs(C,_):(_=yo(_,I,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,I=i.child.memoizedState,I=I===null?dp(l):{baseLanes:I.baseLanes|l,cachePool:null,transitions:I.transitions},_.memoizedState=I,_.childLanes=i.childLanes&~l,o.memoizedState=hp,h}return _=i.child,i=_.sibling,h=hs(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function fp(i,o){return o=mh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function nh(i,o,l,h){return h!==null&&jf(h),ma(o,i.child,null,l),i=fp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function YC(i,o,l,h,p,_,I){if(l)return o.flags&256?(o.flags&=-257,h=ap(Error(t(422))),nh(i,o,I,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=mh({mode:"visible",children:h.children},p,0,null),_=yo(_,p,I,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&ma(o,i.child,null,I),o.child.memoizedState=dp(I),o.memoizedState=hp,_);if((o.mode&1)===0)return nh(i,o,I,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,_=Error(t(419)),h=ap(_,h,void 0),nh(i,o,I,h)}if(C=(I&i.childLanes)!==0,kn||C){if(h=qt,h!==null){switch(I&-I){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|I))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ei(i,p),Ar(h,i,p,-1))}return kp(),h=ap(Error(t(421))),nh(i,o,I,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=uA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,$n=es(p.nextSibling),Wn=o,mt=!0,Ir=null,i!==null&&(er[tr++]=yi,er[tr++]=vi,er[tr++]=lo,yi=i.id,vi=i.overflow,lo=o),o=fp(o,h.children),o.flags|=4096,o)}function lv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),$f(i.return,o,l)}function pp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function uv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(En(i,o,h.children,l),h=_t.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&lv(i,l,o);else if(i.tag===19)lv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ot(_t,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Qc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),pp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Qc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}pp(o,!0,l,null,_);break;case"together":pp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function rh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ii(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),po|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=hs(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=hs(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function XC(i,o,l){switch(o.tag){case 3:sv(o),pa();break;case 5:Ty(o);break;case 1:Pn(o.type)&&Uc(o);break;case 4:Gf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;ot(qc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(ot(_t,_t.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?av(i,o,l):(ot(_t,_t.current&1),i=Ii(i,o,l),i!==null?i.sibling:null);ot(_t,_t.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return uv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ot(_t,_t.current),h)break;return null;case 22:case 23:return o.lanes=0,nv(i,o,l)}return Ii(i,o,l)}var cv,mp,hv,dv;cv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},mp=function(){},hv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,ho(qr.current);var _=null;switch(l){case"input":p=Je(i,p),h=Je(i,h),_=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),_=[];break;case"textarea":p=Yn(i,p),h=Yn(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Mc)}Wi(l,h);var I;l=null;for(W in p)if(!h.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var C=p[W];for(I in C)C.hasOwnProperty(I)&&(l||(l={}),l[I]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?_||(_=[]):(_=_||[]).push(W,null));for(W in h){var N=h[W];if(C=p!=null?p[W]:void 0,h.hasOwnProperty(W)&&N!==C&&(N!=null||C!=null))if(W==="style")if(C){for(I in C)!C.hasOwnProperty(I)||N&&N.hasOwnProperty(I)||(l||(l={}),l[I]="");for(I in N)N.hasOwnProperty(I)&&C[I]!==N[I]&&(l||(l={}),l[I]=N[I])}else l||(_||(_=[]),_.push(W,l)),l=N;else W==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,C=C?C.__html:void 0,N!=null&&C!==N&&(_=_||[]).push(W,N)):W==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push(W,""+N):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(N!=null&&W==="onScroll"&&ct("scroll",i),_||C===N||(_=[])):(_=_||[]).push(W,N))}l&&(_=_||[]).push("style",l);var W=_;(o.updateQueue=W)&&(o.flags|=4)}},dv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Hl(i,o){if(!mt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function dn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function JC(i,o,l){var h=o.pendingProps;switch(Vf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(o),null;case 1:return Pn(o.type)&&Fc(),dn(o),null;case 3:return h=o.stateNode,ya(),ht(Rn),ht(cn),Yf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Wc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ir!==null&&(Ap(Ir),Ir=null))),mp(i,o),dn(o),null;case 5:Kf(o);var p=ho(Bl.current);if(l=o.type,i!==null&&o.stateNode!=null)hv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return dn(o),null}if(i=ho(qr.current),Wc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[$r]=o,h[Ml]=_,i=(o.mode&1)!==0,l){case"dialog":ct("cancel",h),ct("close",h);break;case"iframe":case"object":case"embed":ct("load",h);break;case"video":case"audio":for(p=0;p<bl.length;p++)ct(bl[p],h);break;case"source":ct("error",h);break;case"img":case"image":case"link":ct("error",h),ct("load",h);break;case"details":ct("toggle",h);break;case"input":Lr(h,_),ct("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},ct("invalid",h);break;case"textarea":oi(h,_),ct("invalid",h)}Wi(l,_),p=null;for(var I in _)if(_.hasOwnProperty(I)){var C=_[I];I==="children"?typeof C=="string"?h.textContent!==C&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,C,i),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&Lc(h.textContent,C,i),p=["children",""+C]):s.hasOwnProperty(I)&&C!=null&&I==="onScroll"&&ct("scroll",h)}switch(l){case"input":Vn(h),cr(h,_,!0);break;case"textarea":Vn(h),ji(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Mc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{I=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=I.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=I.createElement(l,{is:h.is}):(i=I.createElement(l),l==="select"&&(I=i,h.multiple?I.multiple=!0:h.size&&(I.size=h.size))):i=I.createElementNS(i,l),i[$r]=o,i[Ml]=h,cv(i,o,!1,!1),o.stateNode=i;e:{switch(I=q(l,h),l){case"dialog":ct("cancel",i),ct("close",i),p=h;break;case"iframe":case"object":case"embed":ct("load",i),p=h;break;case"video":case"audio":for(p=0;p<bl.length;p++)ct(bl[p],i);p=h;break;case"source":ct("error",i),p=h;break;case"img":case"image":case"link":ct("error",i),ct("load",i),p=h;break;case"details":ct("toggle",i),p=h;break;case"input":Lr(i,h),p=Je(i,h),ct("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),ct("invalid",i);break;case"textarea":oi(i,h),p=Yn(i,h),ct("invalid",i);break;default:p=h}Wi(l,p),C=p;for(_ in C)if(C.hasOwnProperty(_)){var N=C[_];_==="style"?Hs(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Bi(i,N)):_==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&Mr(i,N):typeof N=="number"&&Mr(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&ct("scroll",i):N!=null&&ie(i,_,N,I))}switch(l){case"input":Vn(i),cr(i,h,!1);break;case"textarea":Vn(i),ji(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ue(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?un(i,!!h.multiple,_,!1):h.defaultValue!=null&&un(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Mc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return dn(o),null;case 6:if(i&&o.stateNode!=null)dv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=ho(Bl.current),ho(qr.current),Wc(o)){if(h=o.stateNode,l=o.memoizedProps,h[$r]=o,(_=h.nodeValue!==l)&&(i=Wn,i!==null))switch(i.tag){case 3:Lc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Lc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[$r]=o,o.stateNode=h}return dn(o),null;case 13:if(ht(_t),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(mt&&$n!==null&&(o.mode&1)!==0&&(o.flags&128)===0)my(),pa(),o.flags|=98560,_=!1;else if(_=Wc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[$r]=o}else pa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;dn(o),_=!1}else Ir!==null&&(Ap(Ir),Ir=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(_t.current&1)!==0?Ft===0&&(Ft=3):kp())),o.updateQueue!==null&&(o.flags|=4),dn(o),null);case 4:return ya(),mp(i,o),i===null&&Ol(o.stateNode.containerInfo),dn(o),null;case 10:return Wf(o.type._context),dn(o),null;case 17:return Pn(o.type)&&Fc(),dn(o),null;case 19:if(ht(_t),_=o.memoizedState,_===null)return dn(o),null;if(h=(o.flags&128)!==0,I=_.rendering,I===null)if(h)Hl(_,!1);else{if(Ft!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(I=Qc(i),I!==null){for(o.flags|=128,Hl(_,!1),h=I.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,I=_.alternate,I===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=I.childLanes,_.lanes=I.lanes,_.child=I.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=I.memoizedProps,_.memoizedState=I.memoizedState,_.updateQueue=I.updateQueue,_.type=I.type,i=I.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ot(_t,_t.current&1|2),o.child}i=i.sibling}_.tail!==null&&st()>Ia&&(o.flags|=128,h=!0,Hl(_,!1),o.lanes=4194304)}else{if(!h)if(i=Qc(I),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Hl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!I.alternate&&!mt)return dn(o),null}else 2*st()-_.renderingStartTime>Ia&&l!==1073741824&&(o.flags|=128,h=!0,Hl(_,!1),o.lanes=4194304);_.isBackwards?(I.sibling=o.child,o.child=I):(l=_.last,l!==null?l.sibling=I:o.child=I,_.last=I)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=st(),o.sibling=null,l=_t.current,ot(_t,h?l&1|2:l&1),o):(dn(o),null);case 22:case 23:return Pp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(qn&1073741824)!==0&&(dn(o),o.subtreeFlags&6&&(o.flags|=8192)):dn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function ZC(i,o){switch(Vf(o),o.tag){case 1:return Pn(o.type)&&Fc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ya(),ht(Rn),ht(cn),Yf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Kf(o),null;case 13:if(ht(_t),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));pa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return ht(_t),null;case 4:return ya(),null;case 10:return Wf(o.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var ih=!1,fn=!1,eA=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ea(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){It(i,o,h)}else l.current=null}function gp(i,o,l){try{l()}catch(h){It(i,o,h)}}var fv=!1;function tA(i,o){if(Pf=Xi,i=q_(),Ef(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var I=0,C=-1,N=-1,W=0,X=0,Z=i,Y=null;t:for(;;){for(var ue;Z!==l||p!==0&&Z.nodeType!==3||(C=I+p),Z!==_||h!==0&&Z.nodeType!==3||(N=I+h),Z.nodeType===3&&(I+=Z.nodeValue.length),(ue=Z.firstChild)!==null;)Y=Z,Z=ue;for(;;){if(Z===i)break t;if(Y===l&&++W===p&&(C=I),Y===_&&++X===h&&(N=I),(ue=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=ue}l=C===-1||N===-1?null:{start:C,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(kf={focusedElem:i,selectionRange:l},Xi=!1,he=o;he!==null;)if(o=he,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,he=i;else for(;he!==null;){o=he;try{var de=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var pe=de.memoizedProps,Rt=de.memoizedState,U=o.stateNode,O=U.getSnapshotBeforeUpdate(o.elementType===o.type?pe:Tr(o.type,pe),Rt);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){It(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,he=i;break}he=o.return}return de=fv,fv=!1,de}function Gl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&gp(o,l,_)}p=p.next}while(p!==h)}}function sh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function _p(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function pv(i){var o=i.alternate;o!==null&&(i.alternate=null,pv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[$r],delete o[Ml],delete o[bf],delete o[VC],delete o[FC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function mv(i){return i.tag===5||i.tag===3||i.tag===4}function gv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||mv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function yp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Mc));else if(h!==4&&(i=i.child,i!==null))for(yp(i,o,l),i=i.sibling;i!==null;)yp(i,o,l),i=i.sibling}function vp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,l),i=i.sibling;i!==null;)vp(i,o,l),i=i.sibling}var en=null,Sr=!1;function os(i,o,l){for(l=l.child;l!==null;)_v(i,o,l),l=l.sibling}function _v(i,o,l){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Zs,l)}catch{}switch(l.tag){case 5:fn||Ea(l,o);case 6:var h=en,p=Sr;en=null,os(i,o,l),en=h,Sr=p,en!==null&&(Sr?(i=en,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):en.removeChild(l.stateNode));break;case 18:en!==null&&(Sr?(i=en,l=l.stateNode,i.nodeType===8?Df(i.parentNode,l):i.nodeType===1&&Df(i,l),vr(i)):Df(en,l.stateNode));break;case 4:h=en,p=Sr,en=l.stateNode.containerInfo,Sr=!0,os(i,o,l),en=h,Sr=p;break;case 0:case 11:case 14:case 15:if(!fn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,I=_.destroy;_=_.tag,I!==void 0&&((_&2)!==0||(_&4)!==0)&&gp(l,o,I),p=p.next}while(p!==h)}os(i,o,l);break;case 1:if(!fn&&(Ea(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){It(l,o,C)}os(i,o,l);break;case 21:os(i,o,l);break;case 22:l.mode&1?(fn=(h=fn)||l.memoizedState!==null,os(i,o,l),fn=h):os(i,o,l);break;default:os(i,o,l)}}function yv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new eA),o.forEach(function(h){var p=cA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Cr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,I=o,C=I;e:for(;C!==null;){switch(C.tag){case 5:en=C.stateNode,Sr=!1;break e;case 3:en=C.stateNode.containerInfo,Sr=!0;break e;case 4:en=C.stateNode.containerInfo,Sr=!0;break e}C=C.return}if(en===null)throw Error(t(160));_v(_,I,p),en=null,Sr=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch(W){It(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)vv(o,i),o=o.sibling}function vv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Cr(o,i),Gr(i),h&4){try{Gl(3,i,i.return),sh(3,i)}catch(pe){It(i,i.return,pe)}try{Gl(5,i,i.return)}catch(pe){It(i,i.return,pe)}}break;case 1:Cr(o,i),Gr(i),h&512&&l!==null&&Ea(l,l.return);break;case 5:if(Cr(o,i),Gr(i),h&512&&l!==null&&Ea(l,l.return),i.flags&32){var p=i.stateNode;try{Mr(p,"")}catch(pe){It(i,i.return,pe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,I=l!==null?l.memoizedProps:_,C=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&an(p,_),q(C,I);var W=q(C,_);for(I=0;I<N.length;I+=2){var X=N[I],Z=N[I+1];X==="style"?Hs(p,Z):X==="dangerouslySetInnerHTML"?Bi(p,Z):X==="children"?Mr(p,Z):ie(p,X,Z,W)}switch(C){case"input":ln(p,_);break;case"textarea":ai(p,_);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ue=_.value;ue!=null?un(p,!!_.multiple,ue,!1):Y!==!!_.multiple&&(_.defaultValue!=null?un(p,!!_.multiple,_.defaultValue,!0):un(p,!!_.multiple,_.multiple?[]:"",!1))}p[Ml]=_}catch(pe){It(i,i.return,pe)}}break;case 6:if(Cr(o,i),Gr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(pe){It(i,i.return,pe)}}break;case 3:if(Cr(o,i),Gr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{vr(o.containerInfo)}catch(pe){It(i,i.return,pe)}break;case 4:Cr(o,i),Gr(i);break;case 13:Cr(o,i),Gr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Ip=st())),h&4&&yv(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(fn=(W=fn)||X,Cr(o,i),fn=W):Cr(o,i),Gr(i),h&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!X&&(i.mode&1)!==0)for(he=i,X=i.child;X!==null;){for(Z=he=X;he!==null;){switch(Y=he,ue=Y.child,Y.tag){case 0:case 11:case 14:case 15:Gl(4,Y,Y.return);break;case 1:Ea(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,de.props=o.memoizedProps,de.state=o.memoizedState,de.componentWillUnmount()}catch(pe){It(h,l,pe)}}break;case 5:Ea(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Iv(Z);continue}}ue!==null?(ue.return=Y,he=ue):Iv(Z)}X=X.sibling}e:for(X=null,Z=i;;){if(Z.tag===5){if(X===null){X=Z;try{p=Z.stateNode,W?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=Z.stateNode,N=Z.memoizedProps.style,I=N!=null&&N.hasOwnProperty("display")?N.display:null,C.style.display=zi("display",I))}catch(pe){It(i,i.return,pe)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=W?"":Z.memoizedProps}catch(pe){It(i,i.return,pe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===i)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===i)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===i)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Cr(o,i),Gr(i),h&4&&yv(i);break;case 21:break;default:Cr(o,i),Gr(i)}}function Gr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(mv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Mr(p,""),h.flags&=-33);var _=gv(i);vp(i,_,p);break;case 3:case 4:var I=h.stateNode.containerInfo,C=gv(i);yp(i,C,I);break;default:throw Error(t(161))}}catch(N){It(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function nA(i,o,l){he=i,Ev(i)}function Ev(i,o,l){for(var h=(i.mode&1)!==0;he!==null;){var p=he,_=p.child;if(p.tag===22&&h){var I=p.memoizedState!==null||ih;if(!I){var C=p.alternate,N=C!==null&&C.memoizedState!==null||fn;C=ih;var W=fn;if(ih=I,(fn=N)&&!W)for(he=p;he!==null;)I=he,N=I.child,I.tag===22&&I.memoizedState!==null?Tv(p):N!==null?(N.return=I,he=N):Tv(p);for(;_!==null;)he=_,Ev(_),_=_.sibling;he=p,ih=C,fn=W}wv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,he=_):wv(i)}}function wv(i){for(;he!==null;){var o=he;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:fn||sh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!fn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Tr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Iy(o,_,h);break;case 3:var I=o.updateQueue;if(I!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Iy(o,I,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var X=W.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&vr(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||o.flags&512&&_p(o)}catch(Y){It(o,o.return,Y)}}if(o===i){he=null;break}if(l=o.sibling,l!==null){l.return=o.return,he=l;break}he=o.return}}function Iv(i){for(;he!==null;){var o=he;if(o===i){he=null;break}var l=o.sibling;if(l!==null){l.return=o.return,he=l;break}he=o.return}}function Tv(i){for(;he!==null;){var o=he;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{sh(4,o)}catch(N){It(o,l,N)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(N){It(o,p,N)}}var _=o.return;try{_p(o)}catch(N){It(o,_,N)}break;case 5:var I=o.return;try{_p(o)}catch(N){It(o,I,N)}}}catch(N){It(o,o.return,N)}if(o===i){he=null;break}var C=o.sibling;if(C!==null){C.return=o.return,he=C;break}he=o.return}}var rA=Math.ceil,oh=le.ReactCurrentDispatcher,Ep=le.ReactCurrentOwner,ir=le.ReactCurrentBatchConfig,Ge=0,qt=null,xt=null,tn=0,qn=0,wa=ts(0),Ft=0,Kl=null,po=0,ah=0,wp=0,Ql=null,Nn=null,Ip=0,Ia=1/0,Ti=null,lh=!1,Tp=null,as=null,uh=!1,ls=null,ch=0,Yl=0,Sp=null,hh=-1,dh=0;function wn(){return(Ge&6)!==0?st():hh!==-1?hh:hh=st()}function us(i){return(i.mode&1)===0?1:(Ge&2)!==0&&tn!==0?tn&-tn:jC.transition!==null?(dh===0&&(dh=to()),dh):(i=Be,i!==0||(i=window.event,i=i===void 0?16:Sl(i.type)),i)}function Ar(i,o,l,h){if(50<Yl)throw Yl=0,Sp=null,Error(t(185));Gi(i,l,h),((Ge&2)===0||i!==qt)&&(i===qt&&((Ge&2)===0&&(ah|=l),Ft===4&&cs(i,tn)),xn(i,h),l===1&&Ge===0&&(o.mode&1)===0&&(Ia=st()+500,jc&&rs()))}function xn(i,o){var l=i.callbackNode;hi(i,o);var h=eo(i,i===qt?tn:0);if(h===0)l!==null&&vl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&vl(l),o===1)i.tag===0?UC(Cv.bind(null,i)):cy(Cv.bind(null,i)),LC(function(){(Ge&6)===0&&rs()}),l=null;else{switch(Qi(h)){case 1:l=Js;break;case 4:l=$i;break;case 16:l=Xn;break;case 536870912:l=dc;break;default:l=Xn}l=bv(l,Sv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Sv(i,o){if(hh=-1,dh=0,(Ge&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ta()&&i.callbackNode!==l)return null;var h=eo(i,i===qt?tn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=fh(i,h);else{o=h;var p=Ge;Ge|=2;var _=Rv();(qt!==i||tn!==o)&&(Ti=null,Ia=st()+500,go(i,o));do try{oA();break}catch(C){Av(i,C)}while(!0);zf(),oh.current=_,Ge=p,xt!==null?o=0:(qt=null,tn=0,o=Ft)}if(o!==0){if(o===2&&(p=jn(i),p!==0&&(h=p,o=Cp(i,p))),o===1)throw l=Kl,go(i,0),cs(i,h),xn(i,st()),l;if(o===6)cs(i,h);else{if(p=i.current.alternate,(h&30)===0&&!iA(p)&&(o=fh(i,h),o===2&&(_=jn(i),_!==0&&(h=_,o=Cp(i,_))),o===1))throw l=Kl,go(i,0),cs(i,h),xn(i,st()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:_o(i,Nn,Ti);break;case 3:if(cs(i,h),(h&130023424)===h&&(o=Ip+500-st(),10<o)){if(eo(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){wn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=xf(_o.bind(null,i,Nn,Ti),o);break}_o(i,Nn,Ti);break;case 4:if(cs(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var I=31-yn(h);_=1<<I,I=o[I],I>p&&(p=I),h&=~_}if(h=p,h=st()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*rA(h/1960))-h,10<h){i.timeoutHandle=xf(_o.bind(null,i,Nn,Ti),h);break}_o(i,Nn,Ti);break;case 5:_o(i,Nn,Ti);break;default:throw Error(t(329))}}}return xn(i,st()),i.callbackNode===l?Sv.bind(null,i):null}function Cp(i,o){var l=Ql;return i.current.memoizedState.isDehydrated&&(go(i,o).flags|=256),i=fh(i,o),i!==2&&(o=Nn,Nn=l,o!==null&&Ap(o)),i}function Ap(i){Nn===null?Nn=i:Nn.push.apply(Nn,i)}function iA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!wr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function cs(i,o){for(o&=~wp,o&=~ah,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-yn(o),h=1<<l;i[l]=-1,o&=~h}}function Cv(i){if((Ge&6)!==0)throw Error(t(327));Ta();var o=eo(i,0);if((o&1)===0)return xn(i,st()),null;var l=fh(i,o);if(i.tag!==0&&l===2){var h=jn(i);h!==0&&(o=h,l=Cp(i,h))}if(l===1)throw l=Kl,go(i,0),cs(i,o),xn(i,st()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,_o(i,Nn,Ti),xn(i,st()),null}function Rp(i,o){var l=Ge;Ge|=1;try{return i(o)}finally{Ge=l,Ge===0&&(Ia=st()+500,jc&&rs())}}function mo(i){ls!==null&&ls.tag===0&&(Ge&6)===0&&Ta();var o=Ge;Ge|=1;var l=ir.transition,h=Be;try{if(ir.transition=null,Be=1,i)return i()}finally{Be=h,ir.transition=l,Ge=o,(Ge&6)===0&&rs()}}function Pp(){qn=wa.current,ht(wa)}function go(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,OC(l)),xt!==null)for(l=xt.return;l!==null;){var h=l;switch(Vf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Fc();break;case 3:ya(),ht(Rn),ht(cn),Yf();break;case 5:Kf(h);break;case 4:ya();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:Wf(h.type._context);break;case 22:case 23:Pp()}l=l.return}if(qt=i,xt=i=hs(i.current,null),tn=qn=o,Ft=0,Kl=null,wp=ah=po=0,Nn=Ql=null,co!==null){for(o=0;o<co.length;o++)if(l=co[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var I=_.next;_.next=p,h.next=I}l.pending=h}co=null}return i}function Av(i,o){do{var l=xt;try{if(zf(),Yc.current=eh,Xc){for(var h=yt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Xc=!1}if(fo=0,$t=Vt=yt=null,zl=!1,Wl=0,Ep.current=null,l===null||l.return===null){Ft=1,Kl=o,xt=null;break}e:{var _=i,I=l.return,C=l,N=o;if(o=tn,C.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var W=N,X=C,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ue=Xy(I);if(ue!==null){ue.flags&=-257,Jy(ue,I,C,_,o),ue.mode&1&&Yy(_,W,o),o=ue,N=W;var de=o.updateQueue;if(de===null){var pe=new Set;pe.add(N),o.updateQueue=pe}else de.add(N);break e}else{if((o&1)===0){Yy(_,W,o),kp();break e}N=Error(t(426))}}else if(mt&&C.mode&1){var Rt=Xy(I);if(Rt!==null){(Rt.flags&65536)===0&&(Rt.flags|=256),Jy(Rt,I,C,_,o),jf(va(N,C));break e}}_=N=va(N,C),Ft!==4&&(Ft=2),Ql===null?Ql=[_]:Ql.push(_),_=I;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=Ky(_,N,o);wy(_,U);break e;case 1:C=N;var O=_.type,j=_.stateNode;if((_.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(as===null||!as.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=Qy(_,C,o);wy(_,ee);break e}}_=_.return}while(_!==null)}kv(l)}catch(me){o=me,xt===l&&l!==null&&(xt=l=l.return);continue}break}while(!0)}function Rv(){var i=oh.current;return oh.current=eh,i===null?eh:i}function kp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),qt===null||(po&268435455)===0&&(ah&268435455)===0||cs(qt,tn)}function fh(i,o){var l=Ge;Ge|=2;var h=Rv();(qt!==i||tn!==o)&&(Ti=null,go(i,o));do try{sA();break}catch(p){Av(i,p)}while(!0);if(zf(),Ge=l,oh.current=h,xt!==null)throw Error(t(261));return qt=null,tn=0,Ft}function sA(){for(;xt!==null;)Pv(xt)}function oA(){for(;xt!==null&&!cc();)Pv(xt)}function Pv(i){var o=Dv(i.alternate,i,qn);i.memoizedProps=i.pendingProps,o===null?kv(i):xt=o,Ep.current=null}function kv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=JC(l,o,qn),l!==null){xt=l;return}}else{if(l=ZC(l,o),l!==null){l.flags&=32767,xt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ft=6,xt=null;return}}if(o=o.sibling,o!==null){xt=o;return}xt=o=i}while(o!==null);Ft===0&&(Ft=5)}function _o(i,o,l){var h=Be,p=ir.transition;try{ir.transition=null,Be=1,aA(i,o,l,h)}finally{ir.transition=p,Be=h}return null}function aA(i,o,l,h){do Ta();while(ls!==null);if((Ge&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(nt(i,_),i===qt&&(xt=qt=null,tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||uh||(uh=!0,bv(Xn,function(){return Ta(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ir.transition,ir.transition=null;var I=Be;Be=1;var C=Ge;Ge|=4,Ep.current=null,tA(i,l),vv(l,i),RC(kf),Xi=!!Pf,kf=Pf=null,i.current=l,nA(l),df(),Ge=C,Be=I,ir.transition=_}else i.current=l;if(uh&&(uh=!1,ls=i,ch=p),_=i.pendingLanes,_===0&&(as=null),fc(l.stateNode),xn(i,st()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(lh)throw lh=!1,i=Tp,Tp=null,i;return(ch&1)!==0&&i.tag!==0&&Ta(),_=i.pendingLanes,(_&1)!==0?i===Sp?Yl++:(Yl=0,Sp=i):Yl=0,rs(),null}function Ta(){if(ls!==null){var i=Qi(ch),o=ir.transition,l=Be;try{if(ir.transition=null,Be=16>i?16:i,ls===null)var h=!1;else{if(i=ls,ls=null,ch=0,(Ge&6)!==0)throw Error(t(331));var p=Ge;for(Ge|=4,he=i.current;he!==null;){var _=he,I=_.child;if((he.flags&16)!==0){var C=_.deletions;if(C!==null){for(var N=0;N<C.length;N++){var W=C[N];for(he=W;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:Gl(8,X,_)}var Z=X.child;if(Z!==null)Z.return=X,he=Z;else for(;he!==null;){X=he;var Y=X.sibling,ue=X.return;if(pv(X),X===W){he=null;break}if(Y!==null){Y.return=ue,he=Y;break}he=ue}}}var de=_.alternate;if(de!==null){var pe=de.child;if(pe!==null){de.child=null;do{var Rt=pe.sibling;pe.sibling=null,pe=Rt}while(pe!==null)}}he=_}}if((_.subtreeFlags&2064)!==0&&I!==null)I.return=_,he=I;else e:for(;he!==null;){if(_=he,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Gl(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,he=U;break e}he=_.return}}var O=i.current;for(he=O;he!==null;){I=he;var j=I.child;if((I.subtreeFlags&2064)!==0&&j!==null)j.return=I,he=j;else e:for(I=O;he!==null;){if(C=he,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:sh(9,C)}}catch(me){It(C,C.return,me)}if(C===I){he=null;break e}var ee=C.sibling;if(ee!==null){ee.return=C.return,he=ee;break e}he=C.return}}if(Ge=p,rs(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Zs,i)}catch{}h=!0}return h}finally{Be=l,ir.transition=o}}return!1}function Nv(i,o,l){o=va(l,o),o=Ky(i,o,1),i=ss(i,o,1),o=wn(),i!==null&&(Gi(i,1,o),xn(i,o))}function It(i,o,l){if(i.tag===3)Nv(i,i,l);else for(;o!==null;){if(o.tag===3){Nv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(as===null||!as.has(h))){i=va(l,i),i=Qy(o,i,1),o=ss(o,i,1),i=wn(),o!==null&&(Gi(o,1,i),xn(o,i));break}}o=o.return}}function lA(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=wn(),i.pingedLanes|=i.suspendedLanes&l,qt===i&&(tn&l)===l&&(Ft===4||Ft===3&&(tn&130023424)===tn&&500>st()-Ip?go(i,0):wp|=l),xn(i,o)}function xv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Ho,Ho<<=1,(Ho&130023424)===0&&(Ho=4194304)));var l=wn();i=Ei(i,o),i!==null&&(Gi(i,o,l),xn(i,l))}function uA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),xv(i,l)}function cA(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),xv(i,l)}var Dv;Dv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Rn.current)kn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return kn=!1,XC(i,o,l);kn=(i.flags&131072)!==0}else kn=!1,mt&&(o.flags&1048576)!==0&&hy(o,zc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;rh(i,o),i=o.pendingProps;var p=ha(o,cn.current);_a(o,l),p=Zf(null,o,h,i,p,l);var _=ep();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Pn(h)?(_=!0,Uc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Hf(o),p.updater=th,o.stateNode=p,p._reactInternals=o,op(o,h,i,l),o=cp(null,o,h,!0,_,l)):(o.tag=0,mt&&_&&Mf(o),En(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(rh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=dA(h),i=Tr(h,i),p){case 0:o=up(null,o,h,i,l);break e;case 1:o=iv(null,o,h,i,l);break e;case 11:o=Zy(null,o,h,i,l);break e;case 14:o=ev(null,o,h,Tr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),up(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),iv(i,o,h,p,l);case 3:e:{if(sv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Ey(i,o),Kc(o,h,null,l);var I=o.memoizedState;if(h=I.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=va(Error(t(423)),o),o=ov(i,o,h,l,p);break e}else if(h!==p){p=va(Error(t(424)),o),o=ov(i,o,h,l,p);break e}else for($n=es(o.stateNode.containerInfo.firstChild),Wn=o,mt=!0,Ir=null,l=yy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pa(),h===p){o=Ii(i,o,l);break e}En(i,o,h,l)}o=o.child}return o;case 5:return Ty(o),i===null&&Uf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,I=p.children,Nf(h,p)?I=null:_!==null&&Nf(h,_)&&(o.flags|=32),rv(i,o),En(i,o,I,l),o.child;case 6:return i===null&&Uf(o),null;case 13:return av(i,o,l);case 4:return Gf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=ma(o,null,h,l):En(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),Zy(i,o,h,p,l);case 7:return En(i,o,o.pendingProps,l),o.child;case 8:return En(i,o,o.pendingProps.children,l),o.child;case 12:return En(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,I=p.value,ot(qc,h._currentValue),h._currentValue=I,_!==null)if(wr(_.value,I)){if(_.children===p.children&&!Rn.current){o=Ii(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){I=_.child;for(var N=C.firstContext;N!==null;){if(N.context===h){if(_.tag===1){N=wi(-1,l&-l),N.tag=2;var W=_.updateQueue;if(W!==null){W=W.shared;var X=W.pending;X===null?N.next=N:(N.next=X.next,X.next=N),W.pending=N}}_.lanes|=l,N=_.alternate,N!==null&&(N.lanes|=l),$f(_.return,l,o),C.lanes|=l;break}N=N.next}}else if(_.tag===10)I=_.type===o.type?null:_.child;else if(_.tag===18){if(I=_.return,I===null)throw Error(t(341));I.lanes|=l,C=I.alternate,C!==null&&(C.lanes|=l),$f(I,l,o),I=_.sibling}else I=_.child;if(I!==null)I.return=_;else for(I=_;I!==null;){if(I===o){I=null;break}if(_=I.sibling,_!==null){_.return=I.return,I=_;break}I=I.return}_=I}En(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,_a(o,l),p=nr(p),h=h(p),o.flags|=1,En(i,o,h,l),o.child;case 14:return h=o.type,p=Tr(h,o.pendingProps),p=Tr(h.type,p),ev(i,o,h,p,l);case 15:return tv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Tr(h,p),rh(i,o),o.tag=1,Pn(h)?(i=!0,Uc(o)):i=!1,_a(o,l),Hy(o,h,p),op(o,h,p,l),cp(null,o,h,!0,i,l);case 19:return uv(i,o,l);case 22:return nv(i,o,l)}throw Error(t(156,o.tag))};function bv(i,o){return $o(i,o)}function hA(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(i,o,l,h){return new hA(i,o,l,h)}function Np(i){return i=i.prototype,!(!i||!i.isReactComponent)}function dA(i){if(typeof i=="function")return Np(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===kt)return 14}return 2}function hs(i,o){var l=i.alternate;return l===null?(l=sr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ph(i,o,l,h,p,_){var I=2;if(h=i,typeof i=="function")Np(i)&&(I=1);else if(typeof i=="string")I=5;else e:switch(i){case b:return yo(l.children,p,_,o);case A:I=8,p|=8;break;case P:return i=sr(12,l,o,p|2),i.elementType=P,i.lanes=_,i;case R:return i=sr(13,l,o,p),i.elementType=R,i.lanes=_,i;case ft:return i=sr(19,l,o,p),i.elementType=ft,i.lanes=_,i;case He:return mh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case D:I=10;break e;case x:I=9;break e;case V:I=11;break e;case kt:I=14;break e;case ut:I=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=sr(I,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function yo(i,o,l,h){return i=sr(7,i,h,o),i.lanes=l,i}function mh(i,o,l,h){return i=sr(22,i,h,o),i.elementType=He,i.lanes=l,i.stateNode={isHidden:!1},i}function xp(i,o,l){return i=sr(6,i,null,o),i.lanes=l,i}function Dp(i,o,l){return o=sr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function fA(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function bp(i,o,l,h,p,_,I,C,N){return i=new fA(i,o,l,C,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=sr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(_),i}function pA(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Ov(i){if(!i)return ns;i=i._reactInternals;e:{if(pr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Pn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Pn(l))return ly(i,l,o)}return o}function Lv(i,o,l,h,p,_,I,C,N){return i=bp(l,h,!0,i,p,_,I,C,N),i.context=Ov(null),l=i.current,h=wn(),p=us(l),_=wi(h,p),_.callback=o??null,ss(l,_,p),i.current.lanes=p,Gi(i,p,h),xn(i,h),i}function gh(i,o,l,h){var p=o.current,_=wn(),I=us(p);return l=Ov(l),o.context===null?o.context=l:o.pendingContext=l,o=wi(_,I),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ss(p,o,I),i!==null&&(Ar(i,p,I,_),Gc(i,p,I)),I}function _h(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Mv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Op(i,o){Mv(i,o),(i=i.alternate)&&Mv(i,o)}function mA(){return null}var Vv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Lp(i){this._internalRoot=i}yh.prototype.render=Lp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));gh(i,o,null,null)},yh.prototype.unmount=Lp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;mo(function(){gh(null,i,null,null)}),o[gi]=null}};function yh(i){this._internalRoot=i}yh.prototype.unstable_scheduleHydration=function(i){if(i){var o=yc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<jr.length&&o!==0&&o<jr[l].priority;l++);jr.splice(l,0,i),l===0&&wc(i)}};function Mp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function vh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function gA(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var W=_h(I);_.call(W)}}var I=Lv(o,h,i,0,null,!1,!1,"",Fv);return i._reactRootContainer=I,i[gi]=I.current,Ol(i.nodeType===8?i.parentNode:i),mo(),I}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var W=_h(N);C.call(W)}}var N=bp(i,0,!1,null,null,!1,!1,"",Fv);return i._reactRootContainer=N,i[gi]=N.current,Ol(i.nodeType===8?i.parentNode:i),mo(function(){gh(o,N,l,h)}),N}function Eh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var I=_;if(typeof p=="function"){var C=p;p=function(){var N=_h(I);C.call(N)}}gh(o,I,i,p)}else I=gA(l,o,i,p,h);return _h(I)}gc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=qi(o.pendingLanes);l!==0&&(Ki(o,l|1),xn(o,st()),(Ge&6)===0&&(Ia=st()+500,rs()))}break;case 13:mo(function(){var h=Ei(i,1);if(h!==null){var p=wn();Ar(h,i,1,p)}}),Op(i,1)}},Go=function(i){if(i.tag===13){var o=Ei(i,134217728);if(o!==null){var l=wn();Ar(o,i,134217728,l)}Op(i,134217728)}},_c=function(i){if(i.tag===13){var o=us(i),l=Ei(i,o);if(l!==null){var h=wn();Ar(l,i,o,h)}Op(i,o)}},yc=function(){return Be},vc=function(i,o){var l=Be;try{return Be=i,o()}finally{Be=l}},gt=function(i,o,l){switch(o){case"input":if(ln(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Vc(h);if(!p)throw Error(t(90));xe(h),ln(h,p)}}}break;case"textarea":ai(i,l);break;case"select":o=l.value,o!=null&&un(i,!!l.multiple,o,!1)}},Ks=Rp,ml=mo;var _A={usingClientEntryPoint:!1,Events:[Vl,ua,Vc,Fr,pl,Rp]},Xl={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yA={bundleType:Xl.bundleType,version:Xl.version,rendererPackageName:Xl.rendererPackageName,rendererConfig:Xl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=yl(i),i===null?null:i.stateNode},findFiberByHostInstance:Xl.findFiberByHostInstance||mA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wh.isDisabled&&wh.supportsFiber)try{Zs=wh.inject(yA),Un=wh}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A,Dn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(o))throw Error(t(200));return pA(i,o,null,l)},Dn.createRoot=function(i,o){if(!Mp(i))throw Error(t(299));var l=!1,h="",p=Vv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=bp(i,1,!1,null,null,l,!1,h,p),i[gi]=o.current,Ol(i.nodeType===8?i.parentNode:i),new Lp(o)},Dn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=yl(o),i=i===null?null:i.stateNode,i},Dn.flushSync=function(i){return mo(i)},Dn.hydrate=function(i,o,l){if(!vh(o))throw Error(t(200));return Eh(null,i,o,!0,l)},Dn.hydrateRoot=function(i,o,l){if(!Mp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",I=Vv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(I=l.onRecoverableError)),o=Lv(o,null,i,1,l??null,p,!1,_,I),i[gi]=o.current,Ol(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new yh(o)},Dn.render=function(i,o,l){if(!vh(o))throw Error(t(200));return Eh(null,i,o,!1,l)},Dn.unmountComponentAtNode=function(i){if(!vh(i))throw Error(t(40));return i._reactRootContainer?(mo(function(){Eh(null,null,i,!1,function(){i._reactRootContainer=null,i[gi]=null})}),!0):!1},Dn.unstable_batchedUpdates=Rp,Dn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!vh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Eh(i,o,l,!1,h)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Hv;function PA(){if(Hv)return Up.exports;Hv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Up.exports=RA(),Up.exports}var Gv;function kA(){if(Gv)return Ih;Gv=1;var n=PA();return Ih.createRoot=n.createRoot,Ih.hydrateRoot=n.hydrateRoot,Ih}var NA=kA();const xA="modulepreload",DA=function(n,e){return new URL(n,e).href},Kv={},fI=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(y){return Promise.all(y.map(E=>Promise.resolve(E).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};const d=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));s=u(t.map(y=>{if(y=DA(y,r),y in Kv)return;Kv[y]=!0;const E=y.endsWith(".css"),w=E?'[rel="stylesheet"]':"";if(!!r)for(let B=d.length-1;B>=0;B--){const z=d[B];if(z.href===y&&(!E||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${y}"]${w}`))return;const L=document.createElement("link");if(L.rel=E?"stylesheet":xA,E||(L.as="script"),L.crossOrigin="",L.href=y,m&&L.setAttribute("nonce",m),document.head.appendChild(L),E)return new Promise((B,z)=>{L.addEventListener("load",B),L.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${y}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};/**
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
 */const bA=()=>{};var Qv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(n,e){if(!n)throw tl(e)},tl=function(n){return new Error("Firebase Database ("+pI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},OA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|d>>4;let w=(d&15)<<2|m>>6,k=m&63;f||(k=64,u||(w=64)),r.push(t[y],t[E],t[w],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new LA;const w=a<<2|d>>4;if(r.push(w),m!==64){const k=d<<4&240|m>>2;if(r.push(k),E!==64){const L=m<<6&192|E;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class LA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gI=function(n){const e=mI(n);return ng.encodeByteArray(e,!0)},zh=function(n){return gI(n).replace(/\./g,"")},Wh=function(n){try{return ng.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n){return _I(void 0,n)}function _I(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!VA(t)||(n[t]=_I(n[t],e[t]));return n}function VA(n){return n!=="__proto__"}/**
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
 */function FA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UA=()=>FA().__FIREBASE_DEFAULTS__,jA=()=>{if(typeof process>"u"||typeof Qv>"u")return;const n=Qv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},BA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wh(n[1]);return e&&JSON.parse(e)},Sd=()=>{try{return bA()||UA()||jA()||BA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yI=n=>{var e,t;return(t=(e=Sd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vI=n=>{const e=yI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},EI=()=>{var n;return(n=Sd())===null||n===void 0?void 0:n.config},wI=n=>{var e;return(e=Sd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function II(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zh(JSON.stringify(t)),zh(JSON.stringify(u)),""].join(".")}const hu={};function zA(){const n={prod:[],emulator:[]};for(const e of Object.keys(hu))hu[e]?n.emulator.push(e):n.prod.push(e);return n}function WA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Yv=!1;function ig(n,e){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||hu[n]===e||hu[n]||Yv)return;hu[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",a=zA().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function f(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function m(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Yv=!0,u()},w}function y(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function E(){const w=WA(r),k=t("text"),L=document.getElementById(k)||document.createElement("span"),B=t("learnmore"),z=document.getElementById(B)||document.createElement("a"),Q=t("preprendIcon"),J=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ie=w.element;d(ie),y(z,B);const le=m();f(J,Q),ie.append(J,L,z,le),document.body.appendChild(ie)}a?(L.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function $A(){var n;const e=(n=Sd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function TI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GA(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function KA(){return pI.NODE_ADMIN===!0}function QA(){return!$A()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YA(){try{return typeof indexedDB=="object"}catch{return!1}}function XA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="FirebaseError";class Vi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=JA,Object.setPrototypeOf(this,Vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bu.prototype.create)}}class Bu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?ZA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Vi(s,d,r)}}function ZA(n,e){return n.replace(eR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Iu(Wh(a[0])||""),t=Iu(Wh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},tR=function(n){const e=SI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},nR=function(n){const e=SI(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ua(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function $h(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Ni(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Xv(a)&&Xv(u)){if(!Ni(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Xv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ru(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function iu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const w=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(w<<1|w>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),y=1518500249):(m=a^u^d,y=1859775393):E<60?(m=a&u|d&(a|u),y=2400959708):(m=a^u^d,y=3395469782);const w=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=w}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function iR(n,e){const t=new sR(n,e);return t.subscribe.bind(t)}class sR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");oR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=zp),s.error===void 0&&(s.error=zp),s.complete===void 0&&(s.complete=zp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zp(){}function ja(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,te(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */class lR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cR(e))try{this.getOrInitializeService({instanceIdentifier:vo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=vo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vo){return this.instances.has(e)}getOptions(e=vo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vo){return this.component?this.component.multipleInstances?e:vo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uR(n){return n===vo?void 0:n}function cR(n){return n.instantiationMode==="EAGER"}/**
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
 */class hR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const dR={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},fR=Ve.INFO,pR={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},mR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=pR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ad{constructor(e){this.name=e,this._logLevel=fR,this._logHandler=mR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const gR=(n,e)=>e.some(t=>n instanceof t);let Jv,Zv;function _R(){return Jv||(Jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yR(){return Zv||(Zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CI=new WeakMap,lm=new WeakMap,AI=new WeakMap,Wp=new WeakMap,og=new WeakMap;function vR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Es(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&CI.set(t,n)}).catch(()=>{}),og.set(e,n),e}function ER(n){if(lm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});lm.set(n,e)}let um={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||AI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wR(n){um=n(um)}function IR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($p(this),e,...t);return AI.set(r,e.sort?e.sort():[e]),Es(r)}:yR().includes(n)?function(...e){return n.apply($p(this),e),Es(CI.get(this))}:function(...e){return Es(n.apply($p(this),e))}}function TR(n){return typeof n=="function"?IR(n):(n instanceof IDBTransaction&&ER(n),gR(n,_R())?new Proxy(n,um):n)}function Es(n){if(n instanceof IDBRequest)return vR(n);if(Wp.has(n))return Wp.get(n);const e=TR(n);return e!==n&&(Wp.set(n,e),og.set(e,n)),e}const $p=n=>og.get(n);function SR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Es(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Es(u.result),f.oldVersion,f.newVersion,Es(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const CR=["get","getKey","getAll","getAllKeys","count"],AR=["put","add","delete","clear"],qp=new Map;function eE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qp.get(e))return qp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=AR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return qp.set(e,a),a}wR(n=>({...n,get:(e,t,r)=>eE(e,t)||n.get(e,t,r),has:(e,t)=>!!eE(e,t)||n.has(e,t)}));/**
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
 */class RR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function PR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cm="@firebase/app",tE="0.13.2";/**
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
 */const xi=new Ad("@firebase/app"),kR="@firebase/app-compat",NR="@firebase/analytics-compat",xR="@firebase/analytics",DR="@firebase/app-check-compat",bR="@firebase/app-check",OR="@firebase/auth",LR="@firebase/auth-compat",MR="@firebase/database",VR="@firebase/data-connect",FR="@firebase/database-compat",UR="@firebase/functions",jR="@firebase/functions-compat",BR="@firebase/installations",zR="@firebase/installations-compat",WR="@firebase/messaging",$R="@firebase/messaging-compat",qR="@firebase/performance",HR="@firebase/performance-compat",GR="@firebase/remote-config",KR="@firebase/remote-config-compat",QR="@firebase/storage",YR="@firebase/storage-compat",XR="@firebase/firestore",JR="@firebase/ai",ZR="@firebase/firestore-compat",eP="firebase",tP="11.10.0";/**
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
 */const hm="[DEFAULT]",nP={[cm]:"fire-core",[kR]:"fire-core-compat",[xR]:"fire-analytics",[NR]:"fire-analytics-compat",[bR]:"fire-app-check",[DR]:"fire-app-check-compat",[OR]:"fire-auth",[LR]:"fire-auth-compat",[MR]:"fire-rtdb",[VR]:"fire-data-connect",[FR]:"fire-rtdb-compat",[UR]:"fire-fn",[jR]:"fire-fn-compat",[BR]:"fire-iid",[zR]:"fire-iid-compat",[WR]:"fire-fcm",[$R]:"fire-fcm-compat",[qR]:"fire-perf",[HR]:"fire-perf-compat",[GR]:"fire-rc",[KR]:"fire-rc-compat",[QR]:"fire-gcs",[YR]:"fire-gcs-compat",[XR]:"fire-fst",[ZR]:"fire-fst-compat",[JR]:"fire-vertex","fire-js":"fire-js",[eP]:"fire-js-all"};/**
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
 */const Hh=new Map,rP=new Map,dm=new Map;function nE(n,e){try{n.container.addComponent(e)}catch(t){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function So(n){const e=n.name;if(dm.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;dm.set(e,n);for(const t of Hh.values())nE(t,n);for(const t of rP.values())nE(t,n);return!0}function Rd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function or(n){return n==null?!1:n.settings!==void 0}/**
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
 */const iP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new Bu("app","Firebase",iP);/**
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
 */class sP{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=tP;function RI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(t||(t=EI()),!t)throw ws.create("no-options");const a=Hh.get(s);if(a){if(Ni(t,a.options)&&Ni(r,a.config))return a;throw ws.create("duplicate-app",{appName:s})}const u=new hR(s);for(const f of dm.values())u.addComponent(f);const d=new sP(t,r,u);return Hh.set(s,d),d}function ag(n=hm){const e=Hh.get(n);if(!e&&n===hm&&EI())return RI();if(!e)throw ws.create("no-app",{appName:n});return e}function Yr(n,e,t){var r;let s=(r=nP[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(d.join(" "));return}So(new ks(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oP="firebase-heartbeat-database",aP=1,Tu="firebase-heartbeat-store";let Hp=null;function PI(){return Hp||(Hp=SR(oP,aP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tu)}catch(t){console.warn(t)}}}}).catch(n=>{throw ws.create("idb-open",{originalErrorMessage:n.message})})),Hp}async function lP(n){try{const t=(await PI()).transaction(Tu),r=await t.objectStore(Tu).get(kI(n));return await t.done,r}catch(e){if(e instanceof Vi)xi.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xi.warn(t.message)}}}async function rE(n,e){try{const r=(await PI()).transaction(Tu,"readwrite");await r.objectStore(Tu).put(e,kI(n)),await r.done}catch(t){if(t instanceof Vi)xi.warn(t.message);else{const r=ws.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xi.warn(r.message)}}}function kI(n){return`${n.name}!${n.options.appId}`}/**
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
 */const uP=1024,cP=30;class hP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fP(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=iE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>cP){const u=pP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iE(),{heartbeatsToSend:r,unsentEntries:s}=dP(this._heartbeatsCache.heartbeats),a=zh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return xi.warn(t),""}}}function iE(){return new Date().toISOString().substring(0,10)}function dP(n,e=uP){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),sE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),sE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class fP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YA()?XA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lP(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sE(n){return zh(JSON.stringify({version:2,heartbeats:n})).length}function pP(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function mP(n){So(new ks("platform-logger",e=>new RR(e),"PRIVATE")),So(new ks("heartbeat",e=>new hP(e),"PRIVATE")),Yr(cm,tE,n),Yr(cm,tE,"esm2017"),Yr("fire-js","")}mP("");function lg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function NI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gP=NI,xI=new Bu("auth","Firebase",NI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Ad("@firebase/auth");function _P(n,...e){Gh.logLevel<=Ve.WARN&&Gh.warn(`Auth (${bo}): ${n}`,...e)}function xh(n,...e){Gh.logLevel<=Ve.ERROR&&Gh.error(`Auth (${bo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,...e){throw ug(n,...e)}function Xr(n,...e){return ug(n,...e)}function DI(n,e,t){const r=Object.assign(Object.assign({},gP()),{[e]:t});return new Bu("auth","Firebase",r).create(e,{appName:n.name})}function Is(n){return DI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ug(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xI.create(n,...e)}function Se(n,e,...t){if(!n)throw ug(e,...t)}function Ci(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xh(e),new Error(e)}function Di(n,e){n||Ci(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yP(){return oE()==="http:"||oE()==="https:"}function oE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yP()||HA()||"connection"in navigator)?navigator.onLine:!0}function EP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Di(t>e,"Short delay should be less than long delay!"),this.isMobile=sg()||TI()}get(){return vP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e){Di(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TP=new zu(3e4,6e4);function zs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,r,s={}){return OI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=nl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return qA()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(m.credentials="include"),bI.fetch()(await LI(n,n.config.apiHost,t,d),m)})}async function OI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wP),e);try{const s=new CP(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Th(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Th(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Th(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Th(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw DI(n,y,m);Dr(n,y)}}catch(s){if(s instanceof Vi)throw s;Dr(n,"network-request-failed",{message:String(s)})}}async function Pd(n,e,t,r,s={}){const a=await Fi(n,e,t,r,s);return"mfaPendingCredential"in a&&Dr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function LI(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?cg(n.config,s):`${n.config.apiScheme}://${s}`;return IP.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function SP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xr(this.auth,"network-request-failed")),TP.get())})}}function Th(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xr(n,e,r);return s.customData._tokenResponse=t,s}function aE(n){return n!==void 0&&n.enterprise!==void 0}class AP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return SP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RP(n,e){return Fi(n,"GET","/v2/recaptchaConfig",zs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function Kh(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kP(n,e=!1){const t=et(n),r=await t.getIdToken(e),s=hg(r);Se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:du(Gp(s.auth_time)),issuedAtTime:du(Gp(s.iat)),expirationTime:du(Gp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Gp(n){return Number(n)*1e3}function hg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wh(t);return s?JSON.parse(s):(xh("Failed to decode base64 JWT payload"),null)}catch(s){return xh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lE(n){const e=hg(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vi&&NP(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function NP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=du(this.lastLoginAt),this.creationTime=du(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Su(n,Kh(t,{idToken:r}));Se(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?MI(a.providerUserInfo):[],d=bP(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new pm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function DP(n){const e=et(n);await Qh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bP(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function MI(n){return n.map(e=>{var{providerId:t}=e,r=lg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(n,e){const t=await OI(n,{},async()=>{const r=nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await LI(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(f.credentials="include"),bI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LP(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",zs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=lE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await OP(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new xa;return r&&(Se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Se(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Se(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xa,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=lg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new pm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Su(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kP(this,e)}reload(){return DP(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await Su(this,PP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,k=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,L=(u=t.photoURL)!==null&&u!==void 0?u:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,z=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,Q=(m=t.createdAt)!==null&&m!==void 0?m:void 0,J=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ie,emailVerified:le,isAnonymous:qe,providerData:fe,stsTokenManager:b}=t;Se(ie&&b,e,"internal-error");const A=xa.fromJSON(this.name,b);Se(typeof ie=="string",e,"internal-error"),fs(E,e.name),fs(w,e.name),Se(typeof le=="boolean",e,"internal-error"),Se(typeof qe=="boolean",e,"internal-error"),fs(k,e.name),fs(L,e.name),fs(B,e.name),fs(z,e.name),fs(Q,e.name),fs(J,e.name);const P=new Pr({uid:ie,auth:e,email:w,emailVerified:le,displayName:E,isAnonymous:qe,photoURL:L,phoneNumber:k,tenantId:B,stsTokenManager:A,createdAt:Q,lastLoginAt:J});return fe&&Array.isArray(fe)&&(P.providerData=fe.map(D=>Object.assign({},D))),z&&(P._redirectEventId=z),P}static async _fromIdTokenResponse(e,t,r=!1){const s=new xa;s.updateFromServerResponse(t);const a=new Pr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Se(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?MI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new xa;d.updateFromIdToken(r);const f=new Pr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new Map;function Ai(n){Di(n instanceof Function,"Expected a class definition");let e=uE.get(n);return e?(Di(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,uE.set(n,e),e)}/**
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
 */class VI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}VI.type="NONE";const cE=VI;/**
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
 */function Dh(n,e,t){return`firebase:${n}:${e}:${t}`}class Da{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Dh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Dh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Kh(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Da(Ai(cE),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Ai(cE);const u=Dh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const w=await Kh(e,{idToken:y}).catch(()=>{});if(!w)break;E=await Pr._fromGetAccountInfoResponse(e,w,y)}else E=Pr._fromJSON(e,y);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Da(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Da(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WI(e))return"Blackberry";if($I(e))return"Webos";if(UI(e))return"Safari";if((e.includes("chrome/")||jI(e))&&!e.includes("edge/"))return"Chrome";if(zI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FI(n=_n()){return/firefox\//i.test(n)}function UI(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jI(n=_n()){return/crios\//i.test(n)}function BI(n=_n()){return/iemobile/i.test(n)}function zI(n=_n()){return/android/i.test(n)}function WI(n=_n()){return/blackberry/i.test(n)}function $I(n=_n()){return/webos/i.test(n)}function dg(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function MP(n=_n()){var e;return dg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VP(){return GA()&&document.documentMode===10}function qI(n=_n()){return dg(n)||zI(n)||$I(n)||WI(n)||/windows phone/i.test(n)||BI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n,e=[]){let t;switch(n){case"Browser":t=hE(_n());break;case"Worker":t=`${hE(_n())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${r}`}/**
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
 */class FP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function UP(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",zs(n,e))}/**
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
 */const jP=6;class BP{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:jP,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dE(this),this.idTokenSubscription=new dE(this),this.beforeStateQueue=new FP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ai(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Da.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kh(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(or(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(Is(this));const t=e?et(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UP(this),t=new BP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await LP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ai(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Da.create(this,[Ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_P(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oo(n){return et(n)}class dE{constructor(e){this.auth=e,this.observer=null,this.addObserver=iR(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WP(n){kd=n}function GI(n){return kd.loadJS(n)}function $P(){return kd.recaptchaEnterpriseScript}function qP(){return kd.gapiScript}function HP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class GP{constructor(){this.enterprise=new KP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const QP="recaptcha-enterprise",KI="NO_RECAPTCHA";class YP{constructor(e){this.type=QP,this.auth=Oo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{RP(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new AP(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;aE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(KI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GP().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&aE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=$P();f.length!==0&&(f+=d),GI(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function fE(n,e,t,r=!1,s=!1){const a=new YP(n);let u;if(s)u=KI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function mm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await fE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await fE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(n,e){const t=Rd(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ni(a,e??{}))return s;Dr(s,"already-initialized")}return t.initialize({options:e})}function JP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ai);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZP(n,e,t){const r=Oo(n);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=QI(e),{host:u,port:d}=ek(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(Ni(m,r.config.emulator)&&Ni(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Bs(u)?(rg(`${a}//${u}${f}`),ig("Auth",!0)):tk()}function QI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ek(n){const e=QI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:pE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:pE(u)}}}function pE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,t){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}async function nk(n,e){return Fi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(n,e){return Pd(n,"POST","/v1/accounts:signInWithPassword",zs(n,e))}async function YI(n,e){return Fi(n,"POST","/v1/accounts:sendOobCode",zs(n,e))}async function ik(n,e){return YI(n,e)}async function sk(n,e){return YI(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(n,e){return Pd(n,"POST","/v1/accounts:signInWithEmailLink",zs(n,e))}async function ak(n,e){return Pd(n,"POST","/v1/accounts:signInWithEmailLink",zs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends fg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Cu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Cu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mm(e,t,"signInWithPassword",rk);case"emailLink":return ok(e,{email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mm(e,r,"signUpPassword",nk);case"emailLink":return ak(e,{idToken:t,email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(n,e){return Pd(n,"POST","/v1/accounts:signInWithIdp",zs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="http://localhost";class Co extends fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Co(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=lg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Co(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return ba(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ba(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ba(e,t)}buildRequest(){const e={requestUri:lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ck(n){const e=ru(iu(n)).link,t=e?ru(iu(e)).deep_link_id:null,r=ru(iu(n)).deep_link_id;return(r?ru(iu(r)).link:null)||r||t||e||n}class pg{constructor(e){var t,r,s,a,u,d;const f=ru(iu(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=uk((s=f.mode)!==null&&s!==void 0?s:null);Se(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=ck(e);try{return new pg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.providerId=rl.PROVIDER_ID}static credential(e,t){return Cu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=pg.parseLink(t);return Se(r,"argument-error"),Cu._fromEmailAndCode(e,r.code,r.tenantId)}}rl.PROVIDER_ID="password";rl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wu extends XI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Wu{constructor(){super("facebook.com")}static credential(e){return Co._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ps.credential(e.oauthAccessToken)}catch{return null}}}ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";ps.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Wu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Co._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ms.credential(t,r)}catch{return null}}}ms.GOOGLE_SIGN_IN_METHOD="google.com";ms.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Wu{constructor(){super("github.com")}static credential(e){return Co._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.GITHUB_SIGN_IN_METHOD="github.com";gs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Wu{constructor(){super("twitter.com")}static credential(e,t){return Co._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _s.credential(t,r)}catch{return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com";_s.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Pr._fromIdTokenResponse(e,r,s),u=mE(r);return new Ba({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=mE(r);return new Ba({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function mE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Vi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Yh(e,t,r,s)}}function JI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Yh._fromErrorAndOperation(n,a,e,r):a})}async function hk(n,e,t=!1){const r=await Su(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ba._forOperation(n,"link",r)}/**
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
 */async function dk(n,e,t=!1){const{auth:r}=n;if(or(r.app))return Promise.reject(Is(r));const s="reauthenticate";try{const a=await Su(n,JI(r,s,e,n),t);Se(a.idToken,r,"internal-error");const u=hg(a.idToken);Se(u,r,"internal-error");const{sub:d}=u;return Se(n.uid===d,r,"user-mismatch"),Ba._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Dr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(n,e,t=!1){if(or(n.app))return Promise.reject(Is(n));const r="signIn",s=await JI(n,r,e),a=await Ba._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function fk(n,e){return ZI(Oo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(n){const e=Oo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mk(n,e,t){const r=Oo(n);await mm(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",sk)}function gk(n,e,t){return or(n.app)?Promise.reject(Is(n)):fk(et(n),rl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pk(n),r})}async function _k(n,e){const t=et(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await ik(t.auth,s);a!==n.email&&await n.reload()}function yk(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function vk(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function Ek(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}function eT(n){return et(n).signOut()}const Xh="__sak";/**
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
 */class tT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xh,"1"),this.storage.removeItem(Xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=1e3,Ik=10;class nT extends tT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);VP()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ik):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nT.type="LOCAL";const Tk=nT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT extends tT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rT.type="SESSION";const iT=rT;/**
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
 */function Sk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Nd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await Sk(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ck{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=mg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const w=E;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(w.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(){return window}function Ak(n){Jr().location.href=n}/**
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
 */function sT(){return typeof Jr().WorkerGlobalScope<"u"&&typeof Jr().importScripts=="function"}async function Rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function kk(){return sT()?self:null}/**
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
 */const oT="firebaseLocalStorageDb",Nk=1,Jh="firebaseLocalStorage",aT="fbase_key";class $u{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xd(n,e){return n.transaction([Jh],e?"readwrite":"readonly").objectStore(Jh)}function xk(){const n=indexedDB.deleteDatabase(oT);return new $u(n).toPromise()}function gm(){const n=indexedDB.open(oT,Nk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Jh,{keyPath:aT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Jh)?e(r):(r.close(),await xk(),e(await gm()))})})}async function gE(n,e,t){const r=xd(n,!0).put({[aT]:e,value:t});return new $u(r).toPromise()}async function Dk(n,e){const t=xd(n,!1).get(e),r=await new $u(t).toPromise();return r===void 0?null:r.value}function _E(n,e){const t=xd(n,!0).delete(e);return new $u(t).toPromise()}const bk=800,Ok=3;class lT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ok)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nd._getInstance(kk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rk(),!this.activeServiceWorker)return;this.sender=new Ck(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gm();return await gE(e,Xh,"1"),await _E(e,Xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dk(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_E(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=xd(s,!1).getAll();return new $u(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lT.type="LOCAL";const Lk=lT;new zu(3e4,6e4);/**
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
 */function Mk(n,e){return e?Ai(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class gg extends fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ba(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ba(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ba(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vk(n){return ZI(n.auth,new gg(n),n.bypassAuthState)}function Fk(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),dk(t,new gg(n),n.bypassAuthState)}async function Uk(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),hk(t,new gg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vk;case"linkViaPopup":case"linkViaRedirect":return Uk;case"reauthViaPopup":case"reauthViaRedirect":return Fk;default:Dr(this.auth,"internal-error")}}resolve(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new zu(2e3,1e4);class ka extends uT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ka.currentPopupAction&&ka.currentPopupAction.cancel(),ka.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Di(this.filter.length===1,"Popup operations only handle one event");const e=mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ka.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jk.get())};e()}}ka.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="pendingRedirect",bh=new Map;class zk extends uT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=bh.get(this.auth._key());if(!e){try{const r=await Wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}bh.set(this.auth._key(),e)}return this.bypassAuthState||bh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wk(n,e){const t=Hk(e),r=qk(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function $k(n,e){bh.set(n._key(),e)}function qk(n){return Ai(n._redirectPersistence)}function Hk(n){return Dh(Bk,n.config.apiKey,n.name)}async function Gk(n,e,t=!1){if(or(n.app))return Promise.reject(Is(n));const r=Oo(n),s=Mk(r,e),u=await new zk(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=600*1e3;class Qk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kk&&this.cachedEventUids.clear(),this.cachedEventUids.has(yE(e))}saveEventToCache(e){this.cachedEventUids.add(yE(e)),this.lastProcessedEventTime=Date.now()}}function yE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zk=/^https?/;async function e1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xk(n);for(const t of e)try{if(t1(t))return}catch{}Dr(n,"unauthorized-domain")}function t1(n){const e=fm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!Zk.test(t))return!1;if(Jk.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const n1=new zu(3e4,6e4);function vE(){const n=Jr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function r1(n){return new Promise((e,t)=>{var r,s,a;function u(){vE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vE(),t(Xr(n,"network-request-failed"))},timeout:n1.get()})}if(!((s=(r=Jr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Jr().gapi)===null||a===void 0)&&a.load)u();else{const d=HP("iframefcb");return Jr()[d]=()=>{gapi.load?u():t(Xr(n,"network-request-failed"))},GI(`${qP()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Oh=null,e})}let Oh=null;function i1(n){return Oh=Oh||r1(n),Oh}/**
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
 */const s1=new zu(5e3,15e3),o1="__/auth/iframe",a1="emulator/auth/iframe",l1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c1(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cg(e,a1):`https://${n.config.authDomain}/${o1}`,r={apiKey:e.apiKey,appName:n.name,v:bo},s=u1.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${nl(r).slice(1)}`}async function h1(n){const e=await i1(n),t=Jr().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:c1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l1,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Xr(n,"network-request-failed"),d=Jr().setTimeout(()=>{a(u)},s1.get());function f(){Jr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const d1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f1=500,p1=600,m1="_blank",g1="http://localhost";class EE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _1(n,e,t,r=f1,s=p1){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},d1),{width:r.toString(),height:s.toString(),top:a,left:u}),m=_n().toLowerCase();t&&(d=jI(m)?m1:t),FI(m)&&(e=e||g1,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[k,L])=>`${w}${k}=${L},`,"");if(MP(m)&&d!=="_self")return y1(e||"",d),new EE(null);const E=window.open(e||"",d,y);Se(E,n,"popup-blocked");try{E.focus()}catch{}return new EE(E)}function y1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const v1="__/auth/handler",E1="emulator/auth/handler",w1=encodeURIComponent("fac");async function wE(n,e,t,r,s,a){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bo,eventId:s};if(e instanceof XI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",$h(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Wu){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${w1}=${encodeURIComponent(f)}`:"";return`${I1(n)}?${nl(d).slice(1)}${m}`}function I1({config:n}){return n.emulator?cg(n,E1):`https://${n.authDomain}/${v1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="webStorageSupport";class T1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iT,this._completeRedirectFn=Gk,this._overrideRedirectResult=$k}async _openPopup(e,t,r,s){var a;Di((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await wE(e,t,r,fm(),s);return _1(e,u,mg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await wE(e,t,r,fm(),s);return Ak(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Di(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await h1(e),r=new Qk(e);return t.register("authEvent",s=>(Se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kp,{type:Kp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Kp];u!==void 0&&t(!!u),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qI()||UI()||dg()}}const S1=T1;var IE="@firebase/auth",TE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R1(n){So(new ks("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HI(n)},m=new zP(r,s,a,f);return JP(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),So(new ks("auth-internal",e=>{const t=Oo(e.getProvider("auth").getImmediate());return(r=>new C1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yr(IE,TE,A1(n)),Yr(IE,TE,"esm2017")}/**
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
 */const P1=300,k1=wI("authIdTokenMaxAge")||P1;let SE=null;const N1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>k1)return;const s=t==null?void 0:t.token;SE!==s&&(SE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function x1(n=ag()){const e=Rd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=XP(n,{popupRedirectResolver:S1,persistence:[Lk,Tk,iT]}),r=wI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=N1(a.toString());vk(t,u,()=>u(t.currentUser)),yk(t,d=>u(d))}}const s=yI("auth");return s&&ZP(t,`http://${s}`),t}function D1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}WP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Xr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",D1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R1("Browser");var b1="firebase",O1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr(b1,O1,"app");var CE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,hT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function P(){}P.prototype=A.prototype,b.D=A.prototype,b.prototype=new P,b.prototype.constructor=b,b.C=function(D,x,V){for(var R=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)R[ft-2]=arguments[ft];return A.prototype[x].apply(D,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,A,P){P||(P=0);var D=Array(16);if(typeof A=="string")for(var x=0;16>x;++x)D[x]=A.charCodeAt(P++)|A.charCodeAt(P++)<<8|A.charCodeAt(P++)<<16|A.charCodeAt(P++)<<24;else for(x=0;16>x;++x)D[x]=A[P++]|A[P++]<<8|A[P++]<<16|A[P++]<<24;A=b.g[0],P=b.g[1],x=b.g[2];var V=b.g[3],R=A+(V^P&(x^V))+D[0]+3614090360&4294967295;A=P+(R<<7&4294967295|R>>>25),R=V+(x^A&(P^x))+D[1]+3905402710&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(P^V&(A^P))+D[2]+606105819&4294967295,x=V+(R<<17&4294967295|R>>>15),R=P+(A^x&(V^A))+D[3]+3250441966&4294967295,P=x+(R<<22&4294967295|R>>>10),R=A+(V^P&(x^V))+D[4]+4118548399&4294967295,A=P+(R<<7&4294967295|R>>>25),R=V+(x^A&(P^x))+D[5]+1200080426&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(P^V&(A^P))+D[6]+2821735955&4294967295,x=V+(R<<17&4294967295|R>>>15),R=P+(A^x&(V^A))+D[7]+4249261313&4294967295,P=x+(R<<22&4294967295|R>>>10),R=A+(V^P&(x^V))+D[8]+1770035416&4294967295,A=P+(R<<7&4294967295|R>>>25),R=V+(x^A&(P^x))+D[9]+2336552879&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(P^V&(A^P))+D[10]+4294925233&4294967295,x=V+(R<<17&4294967295|R>>>15),R=P+(A^x&(V^A))+D[11]+2304563134&4294967295,P=x+(R<<22&4294967295|R>>>10),R=A+(V^P&(x^V))+D[12]+1804603682&4294967295,A=P+(R<<7&4294967295|R>>>25),R=V+(x^A&(P^x))+D[13]+4254626195&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(P^V&(A^P))+D[14]+2792965006&4294967295,x=V+(R<<17&4294967295|R>>>15),R=P+(A^x&(V^A))+D[15]+1236535329&4294967295,P=x+(R<<22&4294967295|R>>>10),R=A+(x^V&(P^x))+D[1]+4129170786&4294967295,A=P+(R<<5&4294967295|R>>>27),R=V+(P^x&(A^P))+D[6]+3225465664&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^P&(V^A))+D[11]+643717713&4294967295,x=V+(R<<14&4294967295|R>>>18),R=P+(V^A&(x^V))+D[0]+3921069994&4294967295,P=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(P^x))+D[5]+3593408605&4294967295,A=P+(R<<5&4294967295|R>>>27),R=V+(P^x&(A^P))+D[10]+38016083&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^P&(V^A))+D[15]+3634488961&4294967295,x=V+(R<<14&4294967295|R>>>18),R=P+(V^A&(x^V))+D[4]+3889429448&4294967295,P=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(P^x))+D[9]+568446438&4294967295,A=P+(R<<5&4294967295|R>>>27),R=V+(P^x&(A^P))+D[14]+3275163606&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^P&(V^A))+D[3]+4107603335&4294967295,x=V+(R<<14&4294967295|R>>>18),R=P+(V^A&(x^V))+D[8]+1163531501&4294967295,P=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(P^x))+D[13]+2850285829&4294967295,A=P+(R<<5&4294967295|R>>>27),R=V+(P^x&(A^P))+D[2]+4243563512&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^P&(V^A))+D[7]+1735328473&4294967295,x=V+(R<<14&4294967295|R>>>18),R=P+(V^A&(x^V))+D[12]+2368359562&4294967295,P=x+(R<<20&4294967295|R>>>12),R=A+(P^x^V)+D[5]+4294588738&4294967295,A=P+(R<<4&4294967295|R>>>28),R=V+(A^P^x)+D[8]+2272392833&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^P)+D[11]+1839030562&4294967295,x=V+(R<<16&4294967295|R>>>16),R=P+(x^V^A)+D[14]+4259657740&4294967295,P=x+(R<<23&4294967295|R>>>9),R=A+(P^x^V)+D[1]+2763975236&4294967295,A=P+(R<<4&4294967295|R>>>28),R=V+(A^P^x)+D[4]+1272893353&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^P)+D[7]+4139469664&4294967295,x=V+(R<<16&4294967295|R>>>16),R=P+(x^V^A)+D[10]+3200236656&4294967295,P=x+(R<<23&4294967295|R>>>9),R=A+(P^x^V)+D[13]+681279174&4294967295,A=P+(R<<4&4294967295|R>>>28),R=V+(A^P^x)+D[0]+3936430074&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^P)+D[3]+3572445317&4294967295,x=V+(R<<16&4294967295|R>>>16),R=P+(x^V^A)+D[6]+76029189&4294967295,P=x+(R<<23&4294967295|R>>>9),R=A+(P^x^V)+D[9]+3654602809&4294967295,A=P+(R<<4&4294967295|R>>>28),R=V+(A^P^x)+D[12]+3873151461&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^P)+D[15]+530742520&4294967295,x=V+(R<<16&4294967295|R>>>16),R=P+(x^V^A)+D[2]+3299628645&4294967295,P=x+(R<<23&4294967295|R>>>9),R=A+(x^(P|~V))+D[0]+4096336452&4294967295,A=P+(R<<6&4294967295|R>>>26),R=V+(P^(A|~x))+D[7]+1126891415&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~P))+D[14]+2878612391&4294967295,x=V+(R<<15&4294967295|R>>>17),R=P+(V^(x|~A))+D[5]+4237533241&4294967295,P=x+(R<<21&4294967295|R>>>11),R=A+(x^(P|~V))+D[12]+1700485571&4294967295,A=P+(R<<6&4294967295|R>>>26),R=V+(P^(A|~x))+D[3]+2399980690&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~P))+D[10]+4293915773&4294967295,x=V+(R<<15&4294967295|R>>>17),R=P+(V^(x|~A))+D[1]+2240044497&4294967295,P=x+(R<<21&4294967295|R>>>11),R=A+(x^(P|~V))+D[8]+1873313359&4294967295,A=P+(R<<6&4294967295|R>>>26),R=V+(P^(A|~x))+D[15]+4264355552&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~P))+D[6]+2734768916&4294967295,x=V+(R<<15&4294967295|R>>>17),R=P+(V^(x|~A))+D[13]+1309151649&4294967295,P=x+(R<<21&4294967295|R>>>11),R=A+(x^(P|~V))+D[4]+4149444226&4294967295,A=P+(R<<6&4294967295|R>>>26),R=V+(P^(A|~x))+D[11]+3174756917&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~P))+D[2]+718787259&4294967295,x=V+(R<<15&4294967295|R>>>17),R=P+(V^(x|~A))+D[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,b.g[2]=b.g[2]+x&4294967295,b.g[3]=b.g[3]+V&4294967295}r.prototype.u=function(b,A){A===void 0&&(A=b.length);for(var P=A-this.blockSize,D=this.B,x=this.h,V=0;V<A;){if(x==0)for(;V<=P;)s(this,b,V),V+=this.blockSize;if(typeof b=="string"){for(;V<A;)if(D[x++]=b.charCodeAt(V++),x==this.blockSize){s(this,D),x=0;break}}else for(;V<A;)if(D[x++]=b[V++],x==this.blockSize){s(this,D),x=0;break}}this.h=x,this.o+=A},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;var P=8*this.o;for(A=b.length-8;A<b.length;++A)b[A]=P&255,P/=256;for(this.u(b),b=Array(16),A=P=0;4>A;++A)for(var D=0;32>D;D+=8)b[P++]=this.g[A]>>>D&255;return b};function a(b,A){var P=d;return Object.prototype.hasOwnProperty.call(P,b)?P[b]:P[b]=A(b)}function u(b,A){this.h=A;for(var P=[],D=!0,x=b.length-1;0<=x;x--){var V=b[x]|0;D&&V==A||(P[x]=V,D=!1)}this.g=P}var d={};function f(b){return-128<=b&&128>b?a(b,function(A){return new u([A|0],0>A?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return z(m(-b));for(var A=[],P=1,D=0;b>=P;D++)A[D]=b/P|0,P*=4294967296;return new u(A,0)}function y(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return z(y(b.substring(1),A));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=m(Math.pow(A,8)),D=E,x=0;x<b.length;x+=8){var V=Math.min(8,b.length-x),R=parseInt(b.substring(x,x+V),A);8>V?(V=m(Math.pow(A,V)),D=D.j(V).add(m(R))):(D=D.j(P),D=D.add(m(R)))}return D}var E=f(0),w=f(1),k=f(16777216);n=u.prototype,n.m=function(){if(B(this))return-z(this).m();for(var b=0,A=1,P=0;P<this.g.length;P++){var D=this.i(P);b+=(0<=D?D:4294967296+D)*A,A*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(L(this))return"0";if(B(this))return"-"+z(this).toString(b);for(var A=m(Math.pow(b,6)),P=this,D="";;){var x=le(P,A).g;P=Q(P,x.j(A));var V=((0<P.g.length?P.g[0]:P.h)>>>0).toString(b);if(P=x,L(P))return V+D;for(;6>V.length;)V="0"+V;D=V+D}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function L(b){if(b.h!=0)return!1;for(var A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function B(b){return b.h==-1}n.l=function(b){return b=Q(this,b),B(b)?-1:L(b)?0:1};function z(b){for(var A=b.g.length,P=[],D=0;D<A;D++)P[D]=~b.g[D];return new u(P,~b.h).add(w)}n.abs=function(){return B(this)?z(this):this},n.add=function(b){for(var A=Math.max(this.g.length,b.g.length),P=[],D=0,x=0;x<=A;x++){var V=D+(this.i(x)&65535)+(b.i(x)&65535),R=(V>>>16)+(this.i(x)>>>16)+(b.i(x)>>>16);D=R>>>16,V&=65535,R&=65535,P[x]=R<<16|V}return new u(P,P[P.length-1]&-2147483648?-1:0)};function Q(b,A){return b.add(z(A))}n.j=function(b){if(L(this)||L(b))return E;if(B(this))return B(b)?z(this).j(z(b)):z(z(this).j(b));if(B(b))return z(this.j(z(b)));if(0>this.l(k)&&0>b.l(k))return m(this.m()*b.m());for(var A=this.g.length+b.g.length,P=[],D=0;D<2*A;D++)P[D]=0;for(D=0;D<this.g.length;D++)for(var x=0;x<b.g.length;x++){var V=this.i(D)>>>16,R=this.i(D)&65535,ft=b.i(x)>>>16,kt=b.i(x)&65535;P[2*D+2*x]+=R*kt,J(P,2*D+2*x),P[2*D+2*x+1]+=V*kt,J(P,2*D+2*x+1),P[2*D+2*x+1]+=R*ft,J(P,2*D+2*x+1),P[2*D+2*x+2]+=V*ft,J(P,2*D+2*x+2)}for(D=0;D<A;D++)P[D]=P[2*D+1]<<16|P[2*D];for(D=A;D<2*A;D++)P[D]=0;return new u(P,0)};function J(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function ie(b,A){this.g=b,this.h=A}function le(b,A){if(L(A))throw Error("division by zero");if(L(b))return new ie(E,E);if(B(b))return A=le(z(b),A),new ie(z(A.g),z(A.h));if(B(A))return A=le(b,z(A)),new ie(z(A.g),A.h);if(30<b.g.length){if(B(b)||B(A))throw Error("slowDivide_ only works with positive integers.");for(var P=w,D=A;0>=D.l(b);)P=qe(P),D=qe(D);var x=fe(P,1),V=fe(D,1);for(D=fe(D,2),P=fe(P,2);!L(D);){var R=V.add(D);0>=R.l(b)&&(x=x.add(P),V=R),D=fe(D,1),P=fe(P,1)}return A=Q(b,x.j(A)),new ie(x,A)}for(x=E;0<=b.l(A);){for(P=Math.max(1,Math.floor(b.m()/A.m())),D=Math.ceil(Math.log(P)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),V=m(P),R=V.j(A);B(R)||0<R.l(b);)P-=D,V=m(P),R=V.j(A);L(V)&&(V=w),x=x.add(V),b=Q(b,R)}return new ie(x,b)}n.A=function(b){return le(this,b).h},n.and=function(b){for(var A=Math.max(this.g.length,b.g.length),P=[],D=0;D<A;D++)P[D]=this.i(D)&b.i(D);return new u(P,this.h&b.h)},n.or=function(b){for(var A=Math.max(this.g.length,b.g.length),P=[],D=0;D<A;D++)P[D]=this.i(D)|b.i(D);return new u(P,this.h|b.h)},n.xor=function(b){for(var A=Math.max(this.g.length,b.g.length),P=[],D=0;D<A;D++)P[D]=this.i(D)^b.i(D);return new u(P,this.h^b.h)};function qe(b){for(var A=b.g.length+1,P=[],D=0;D<A;D++)P[D]=b.i(D)<<1|b.i(D-1)>>>31;return new u(P,b.h)}function fe(b,A){var P=A>>5;A%=32;for(var D=b.g.length-P,x=[],V=0;V<D;V++)x[V]=0<A?b.i(V+P)>>>A|b.i(V+P+1)<<32-A:b.i(V+P);return new u(x,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Ts=u}).apply(typeof CE<"u"?CE:typeof self<"u"?self:typeof window<"u"?window:{});var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dT,su,fT,Lh,_m,pT,mT,gT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sh=="object"&&Sh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var F=c[T];if(!(F in v))break e;v=v[F]}c=c[c.length-1],T=v[c],g=g(T),g!=T&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,T=!1,F={next:function(){if(!T&&v<c.length){var $=v++;return{value:g($,c[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,T),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function w(c,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,w.apply(null,arguments)}function k(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function L(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(T,F,$){for(var ne=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)ne[Ze-2]=arguments[Ze];return g.prototype[F].apply(T,ne)}}function B(c){const g=c.length;if(0<g){const v=Array(g);for(let T=0;T<g;T++)v[T]=c[T];return v}return[]}function z(c,g){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(f(T)){const F=c.length||0,$=T.length||0;c.length=F+$;for(let ne=0;ne<$;ne++)c[F+ne]=T[ne]}else c.push(T)}}class Q{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function J(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function le(c){return le[" "](c),c}le[" "]=function(){};var qe=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function fe(c,g,v){for(const T in c)g.call(v,c[T],T,c)}function b(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function A(c){const g={};for(const v in c)g[v]=c[v];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,g){let v,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(v in T)c[v]=T[v];for(let $=0;$<P.length;$++)v=P[$],Object.prototype.hasOwnProperty.call(T,v)&&(c[v]=T[v])}}function x(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function V(c){d.setTimeout(()=>{throw c},0)}function R(){var c=_e;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ft{constructor(){this.h=this.g=null}add(g,v){const T=kt.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var kt=new Q(()=>new ut,c=>c.reset());class ut{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let He,re=!1,_e=new ft,ae=()=>{const c=d.Promise.resolve(void 0);He=()=>{c.then(M)}};var M=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(v){V(v)}var g=kt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}re=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ve=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c})();function Ne(c,g){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(qe){e:{try{le(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ge[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ne.aa.h.call(this)}}L(Ne,se);var ge={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function je(c,g,v,T,F){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=F,this.key=++Ue,this.da=this.fa=!1}function it(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Vn(c){this.src=c,this.g={},this.h=0}Vn.prototype.add=function(c,g,v,T,F){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ne=Fn(c,g,T,F);return-1<ne?(g=c[ne],v||(g.fa=!1)):(g=new je(g,this.src,$,!!T,F),g.fa=v,c.push(g)),g};function xe(c,g){var v=g.type;if(v in c.g){var T=c.g[v],F=Array.prototype.indexOf.call(T,g,void 0),$;($=0<=F)&&Array.prototype.splice.call(T,F,1),$&&(it(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Fn(c,g,v,T){for(var F=0;F<c.length;++F){var $=c[F];if(!$.da&&$.listener==g&&$.capture==!!v&&$.ha==T)return F}return-1}var Je="closure_lm_"+(1e6*Math.random()|0),Lr={};function an(c,g,v,T,F){if(Array.isArray(g)){for(var $=0;$<g.length;$++)an(c,g[$],v,T,F);return null}return v=ji(v),c&&c[ze]?c.K(g,v,m(T)?!!T.capture:!1,F):ln(c,g,v,!1,T,F)}function ln(c,g,v,T,F,$){if(!g)throw Error("Invalid event type");var ne=m(F)?!!F.capture:!!F,Ze=oi(c);if(Ze||(c[Je]=Ze=new Vn(c)),v=Ze.add(g,v,T,ne,$),v.proxy)return v;if(T=cr(),v.proxy=T,T.src=c,T.listener=v,c.addEventListener)ve||(F=ne),F===void 0&&(F=!1),c.addEventListener(g.toString(),T,F);else if(c.attachEvent)c.attachEvent(un(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function cr(){function c(v){return g.call(c.src,c.listener,v)}const g=Yn;return c}function si(c,g,v,T,F){if(Array.isArray(g))for(var $=0;$<g.length;$++)si(c,g[$],v,T,F);else T=m(T)?!!T.capture:!!T,v=ji(v),c&&c[ze]?(c=c.i,g=String(g).toString(),g in c.g&&($=c.g[g],v=Fn($,v,T,F),-1<v&&(it($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete c.g[g],c.h--)))):c&&(c=oi(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Fn(g,v,T,F)),(v=-1<c?g[c]:null)&&Qn(v))}function Qn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ze])xe(g.i,c);else{var v=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(v,T,c.capture):g.detachEvent?g.detachEvent(un(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=oi(g))?(xe(v,c),v.h==0&&(v.src=null,g[Je]=null)):it(c)}}}function un(c){return c in Lr?Lr[c]:Lr[c]="on"+c}function Yn(c,g){if(c.da)c=!0;else{g=new Ne(g,this);var v=c.listener,T=c.ha||c.src;c.fa&&Qn(c),c=v.call(T,g)}return c}function oi(c){return c=c[Je],c instanceof Vn?c:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function ji(c){return typeof c=="function"?c:(c[ai]||(c[ai]=function(g){return c.handleEvent(g)}),c[ai])}function Ct(){G.call(this),this.i=new Vn(this),this.M=this,this.F=null}L(Ct,G),Ct.prototype[ze]=!0,Ct.prototype.removeEventListener=function(c,g,v,T){si(this,c,g,v,T)};function wt(c,g){var v,T=c.F;if(T)for(v=[];T;T=T.F)v.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new se(g,c);else if(g instanceof se)g.target=g.target||c;else{var F=g;g=new se(T,c),D(g,F)}if(F=!0,v)for(var $=v.length-1;0<=$;$--){var ne=g.g=v[$];F=hr(ne,T,!0,g)&&F}if(ne=g.g=c,F=hr(ne,T,!0,g)&&F,F=hr(ne,T,!1,g)&&F,v)for($=0;$<v.length;$++)ne=g.g=v[$],F=hr(ne,T,!1,g)&&F}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],T=0;T<v.length;T++)it(v[T]);delete c.g[g],c.h--}}this.F=null},Ct.prototype.K=function(c,g,v,T){return this.i.add(String(c),g,!1,v,T)},Ct.prototype.L=function(c,g,v,T){return this.i.add(String(c),g,!0,v,T)};function hr(c,g,v,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,$=0;$<g.length;++$){var ne=g[$];if(ne&&!ne.da&&ne.capture==v){var Ze=ne.listener,Mt=ne.ha||ne.src;ne.fa&&xe(c.i,ne),F=Ze.call(Mt,T)!==!1&&F}}return F&&!T.defaultPrevented}function Bi(c,g,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Mr(c){c.g=Bi(()=>{c.g=null,c.i&&(c.i=!1,Mr(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class li extends G{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Mr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(c){G.call(this),this.h=c,this.g={}}L(ui,G);var zi=[];function Hs(c){fe(c.g,function(g,v){this.g.hasOwnProperty(v)&&Qn(g)},c),c.g={}}ui.prototype.N=function(){ui.aa.N.call(this),Hs(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gs=d.JSON.stringify,Wi=d.JSON.parse,q=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Ee(){}Ee.prototype.h=null;function Ye(c){return c.h||(c.h=c.i())}function gt(){}var zt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){se.call(this,"d")}L(Vr,se);function Uo(){se.call(this,"c")}L(Uo,se);var Fr={},pl=null;function Ks(){return pl=pl||new Ct}Fr.La="serverreachability";function ml(c){se.call(this,Fr.La,c)}L(ml,se);function ci(c){const g=Ks();wt(g,new ml(g))}Fr.STAT_EVENT="statevent";function gl(c,g){se.call(this,Fr.STAT_EVENT,c),this.stat=g}L(gl,se);function At(c){const g=Ks();wt(g,new gl(g,c))}Fr.Ma="timingevent";function jo(c,g){se.call(this,Fr.Ma,c),this.size=g}L(jo,se);function dr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function Ys(c,g,v,T,F,$){c.info(function(){if(c.g)if($)for(var ne="",Ze=$.split("&"),Mt=0;Mt<Ze.length;Mt++){var We=Ze[Mt].split("=");if(1<We.length){var Wt=We[0];We=We[1];var Nt=Wt.split("_");ne=2<=Nt.length&&Nt[1]=="type"?ne+(Wt+"="+We+"&"):ne+(Wt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+g+`
`+v+`
`+ne})}function Bo(c,g,v,T,F,$,ne){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+g+`
`+v+`
`+$+" "+ne})}function fr(c,g,v,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+hf(c,v)+(T?" "+T:"")})}function _l(c,g){c.info(function(){return"TIMEOUT: "+g})}Qs.prototype.info=function(){};function hf(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var T=v[c];if(!(2>T.length)){var F=T[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<F.length;ne++)F[ne]=""}}}}return Gs(v)}catch{return g}}var zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},lc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function Xs(){}L(Xs,Ee),Xs.prototype.g=function(){return new XMLHttpRequest},Xs.prototype.i=function(){return{}},pr=new Xs;function mr(c,g,v,T){this.j=c,this.i=g,this.l=v,this.R=T||1,this.U=new ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var yl={},Wo={};function $o(c,g,v){c.L=1,c.v=Ki(jn(g)),c.m=v,c.P=!0,vl(c,null)}function vl(c,g){c.F=Date.now(),st(c),c.A=jn(c.v);var v=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Yi(v.i,"t",T),c.C=0,v=c.j.J,c.h=new uc,c.g=Rc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new li(w(c.Y,c,c.g),c.O)),g=c.U,v=c.g,T=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(zi[0]=F.toString()),F=zi);for(var $=0;$<F.length;$++){var ne=an(v,F[$],T||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ci(),Ys(c.i,c.u,c.A,c.l,c.R,c.m)}mr.prototype.ca=function(c){c=c.target;const g=this.M;g&&An(c)==3?g.j():this.Y(c)},mr.prototype.Y=function(c){try{if(c==this.g)e:{const Nt=An(this.g);var g=this.g.Ba();const Zn=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Cl(this.g)))){this.J||Nt!=4||g==7||(g==8||0>=Zn?ci(3):ci(2)),Js(this);var v=this.g.Z();this.X=v;t:if(cc(this)){var T=Cl(this.g);c="";var F=T.length,$=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),$i(this);var ne="";break t}this.h.i=new d.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(T[g],{stream:!($&&g==F-1)});T.length=0,this.h.g+=c,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,Bo(this.i,this.u,this.A,this.l,this.R,Nt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ze,Mt=this.g;if((Ze=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ze)){var We=Ze;break t}}We=null}if(v=We)fr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,v);else{this.o=!1,this.s=3,At(12),Xn(this),$i(this);break e}}if(this.P){v=!0;let zn;for(;!this.J&&this.C<ne.length;)if(zn=df(this,ne),zn==Wo){Nt==4&&(this.s=4,At(14),v=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(zn==yl){this.s=4,At(15),fr(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else fr(this.i,this.l,zn,null),El(this,zn);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||ne.length!=0||this.h.h||(this.s=1,At(16),v=!1),this.o=this.o&&v,!v)fr(this.i,this.l,ne,"[Invalid Chunked Response]"),Xn(this),$i(this);else if(0<ne.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Rl(Wt),Wt.M=!0,At(11))}}else fr(this.i,this.l,ne,null),El(this,ne);Nt==4&&Xn(this),this.o&&!this.J&&(Nt==4?ta(this.j,this):(this.o=!1,st(this)))}else Yo(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Xn(this),$i(this)}}}catch{}finally{}};function cc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function df(c,g){var v=c.C,T=g.indexOf(`
`,v);return T==-1?Wo:(v=Number(g.substring(v,T)),isNaN(v)?yl:(T+=1,T+v>g.length?Wo:(g=g.slice(T,T+v),c.C=T+v,g)))}mr.prototype.cancel=function(){this.J=!0,Xn(this)};function st(c){c.S=Date.now()+c.I,hc(c,c.I)}function hc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=dr(w(c.ba,c),g)}function Js(c){c.B&&(d.clearTimeout(c.B),c.B=null)}mr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(_l(this.i,this.A),this.L!=2&&(ci(),At(17)),Xn(this),this.s=2,$i(this)):hc(this,this.S-c)};function $i(c){c.j.G==0||c.J||ta(c.j,c)}function Xn(c){Js(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Hs(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function El(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||yn(v.h,c))){if(!c.K&&yn(v.h,c)&&v.G==3){try{var T=v.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ea(v),Er(v);else break e;Zo(v),At(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=dr(w(v.Za,v),6e3));if(1>=fc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else mi(v,11)}else if((c.K||v.g==c)&&ea(v),!J(g))for(F=v.Da.g.parse(g),g=0;g<F.length;g++){let We=F[g];if(v.T=We[0],We=We[1],v.G==2)if(We[0]=="c"){v.K=We[1],v.ia=We[2];const Wt=We[3];Wt!=null&&(v.la=Wt,v.j.info("VER="+v.la));const Nt=We[4];Nt!=null&&(v.Aa=Nt,v.j.info("SVER="+v.Aa));const Zn=We[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(T=1.5*Zn,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const zn=c.g;if(zn){const so=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var $=T.h;$.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(wl($,$.h),$.h=null))}if(T.D){const ra=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(T.ya=ra,nt(T.I,T.D,ra))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var ne=c;if(T.qa=Ac(T,T.J?T.ia:null,T.W),ne.K){pc(T.h,ne);var Ze=ne,Mt=T.L;Mt&&(Ze.I=Mt),Ze.B&&(Js(Ze),st(Ze)),T.g=ne}else io(T);0<v.i.length&&zr(v)}else We[0]!="stop"&&We[0]!="close"||mi(v,7);else v.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?mi(v,7):Zt(v):We[0]!="noop"&&v.l&&v.l.ta(We),v.v=0)}}ci(4)}catch{}}var dc=class{constructor(c,g){this.g=c,this.map=g}};function Zs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Un(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function fc(c){return c.h?1:c.g?c.g.size:0}function yn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function wl(c,g){c.g?c.g.add(g):c.h=g}function pc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Zs.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function mc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return B(c.i)}function qo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,T=0;T<v;T++)g.push(c[T]);return g}g=[],v=0;for(T in c)g[v++]=c[T];return g}function Ho(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const T in c)g[v++]=T;return g}}}function qi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Ho(c),T=qo(c),F=T.length,$=0;$<F;$++)g.call(void 0,T[$],v&&v[$],c)}var eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var T=c[v].indexOf("="),F=null;if(0<=T){var $=c[v].substring(0,T);F=c[v].substring(T+1)}else $=c[v];g($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function hi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof hi){this.h=c.h,to(this,c.j),this.o=c.o,this.g=c.g,Hi(this,c.s),this.l=c.l;var g=c.i,v=new Ur;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Gi(this,v),this.m=c.m}else c&&(g=String(c).match(eo))?(this.h=!1,to(this,g[1]||"",!0),this.o=Be(g[2]||""),this.g=Be(g[3]||"",!0),Hi(this,g[4]),this.l=Be(g[5]||"",!0),Gi(this,g[6]||"",!0),this.m=Be(g[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}hi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Qi(g,Go,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Qi(g,Go,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Qi(v,v.charAt(0)=="/"?yc:_c,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Qi(v,Il)),c.join("")};function jn(c){return new hi(c)}function to(c,g,v){c.j=v?Be(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Hi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Gi(c,g,v){g instanceof Ur?(c.i=g,jr(c.i,c.h)):(v||(g=Qi(g,vc)),c.i=new Ur(g,c.h))}function nt(c,g,v){c.i.set(g,v)}function Ki(c){return nt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Be(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,gc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Go=/[#\/\?@]/g,_c=/[#\?:]/g,yc=/[#\?]/g,vc=/[#\?@]/g,Il=/#/g;function Ur(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Jt(c){c.g||(c.g=new Map,c.h=0,c.i&&ff(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Ur.prototype,n.add=function(c,g){Jt(this),this.i=null,c=Jn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function gr(c,g){Jt(c),g=Jn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function _r(c,g){return Jt(c),g=Jn(c,g),c.g.has(g)}n.forEach=function(c,g){Jt(this),this.g.forEach(function(v,T){v.forEach(function(F){c.call(g,F,T,this)},this)},this)},n.na=function(){Jt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let T=0;T<g.length;T++){const F=c[T];for(let $=0;$<F.length;$++)v.push(g[T])}return v},n.V=function(c){Jt(this);let g=[];if(typeof c=="string")_r(this,c)&&(g=g.concat(this.g.get(Jn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Jt(this),this.i=null,c=Jn(this,c),_r(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Yi(c,g,v){gr(c,g),0<v.length&&(c.i=null,c.g.set(Jn(c,g),B(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var T=g[v];const $=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var F=$;ne[T]!==""&&(F+="="+encodeURIComponent(String(ne[T]))),c.push(F)}}return this.i=c.join("&")};function Jn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function jr(c,g){g&&!c.j&&(Jt(c),c.i=null,c.g.forEach(function(v,T){var F=T.toLowerCase();T!=F&&(gr(this,T),Yi(this,F,v))},c)),c.j=g}function pf(c,g){const v=new Qs;if(d.Image){const T=new Image;T.onload=k(Cn,v,"TestLoadImage: loaded",!0,g,T),T.onerror=k(Cn,v,"TestLoadImage: error",!1,g,T),T.onabort=k(Cn,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=k(Cn,v,"TestLoadImage: timeout",!1,g,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function Ec(c,g){const v=new Qs,T=new AbortController,F=setTimeout(()=>{T.abort(),Cn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then($=>{clearTimeout(F),$.ok?Cn(v,"TestPingServer: ok",!0,g):Cn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),Cn(v,"TestPingServer: error",!1,g)})}function Cn(c,g,v,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(v)}catch{}}function mf(){this.g=new q}function wc(c,g,v){const T=v||"";try{qi(c,function(F,$){let ne=F;m(F)&&(ne=Gs(F)),g.push(T+$+"="+encodeURIComponent(ne))})}catch(F){throw g.push(T+"type="+encodeURIComponent("_badmap")),F}}function di(c){this.l=c.Ub||null,this.j=c.eb||!1}L(di,Ee),di.prototype.g=function(){return new no(this.l,this.j)},di.prototype.i=(function(c){return function(){return c}})({});function no(c,g){Ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(no,Ct),n=no.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,vr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?yr(this):vr(this),this.readyState==3&&Ic(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,yr(this))},n.Qa=function(c){this.g&&(this.response=c,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,vr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function vr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(no.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function fi(c){let g="";return fe(c,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function Xi(c,g,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=fi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):nt(c,g,v))}function pt(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(pt,Ct);var gf=/^https?$/i,Tl=["POST","PUT"];n=pt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?Ye(this.o):Ye(pr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch($){ro(this,$);return}if(c=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)v.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())v.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Tl,g,void 0))||T||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of v)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qo(this),this.u=!0,this.g.send(c),this.u=!1}catch($){ro(this,$)}};function ro(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ko(c),Bn(c)}function Ko(c){c.A||(c.A=!0,wt(c,"complete"),wt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,wt(this,"complete"),wt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sl(this):this.bb())},n.bb=function(){Sl(this)};function Sl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||An(c)!=4||c.Z()!=2)){if(c.u&&An(c)==4)Bi(c.Ea,0,c);else if(wt(c,"readystatechange"),An(c)==4){c.h=!1;try{const ne=c.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var T;if(T=ne===0){var F=String(c.D).match(eo)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),T=!gf.test(F?F.toLowerCase():"")}v=T}if(v)wt(c,"complete"),wt(c,"success");else{c.m=6;try{var $=2<An(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Ko(c)}}finally{Bn(c)}}}}function Bn(c,g){if(c.g){Qo(c);const v=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||wt(c,"ready");try{v.onreadystatechange=T}catch{}}}function Qo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function An(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Wi(g)}};function Cl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Yo(c){const g={};c=(c.g&&2<=An(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(J(c[T]))continue;var v=x(c[T]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=g[F]||[];g[F]=$,$.push(v)}b(g,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Al(c){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Br("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Br("baseRetryDelayMs",5e3,c),this.cb=Br("retryDelaySeedMs",1e4,c),this.Wa=Br("forwardChannelMaxRetries",2,c),this.wa=Br("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Zs(c&&c.concurrentRequestLimit),this.Da=new mf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Al.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,T){At(0),this.W=c,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Ac(this,null,this.W),zr(this)};function Zt(c){if(Xo(c),c.G==3){var g=c.U++,v=jn(c.I);if(nt(v,"SID",c.K),nt(v,"RID",g),nt(v,"TYPE","terminate"),pi(c,v),g=new mr(c,c.j,g),g.L=2,g.v=Ki(jn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Rc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),st(g)}Cc(c)}function Er(c){c.g&&(Rl(c),c.g.cancel(),c.g=null)}function Xo(c){Er(c),c.u&&(d.clearTimeout(c.u),c.u=null),ea(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function zr(c){if(!Un(c.h)&&!c.s){c.s=!0;var g=c.Ga;He||ae(),re||(He(),re=!0),_e.add(g,c),c.B=0}}function _f(c,g){return fc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=dr(w(c.Ga,c,g),Sc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new mr(this,this.j,c);let $=this.o;if(this.S&&($?($=A($),D($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Ji(this,F,g),v=jn(this.I),nt(v,"RID",c),nt(v,"CVER",22),this.D&&nt(v,"X-HTTP-Session-Id",this.D),pi(this,v),$&&(this.O?g="headers="+encodeURIComponent(String(fi($)))+"&"+g:this.m&&Xi(v,this.m,$)),wl(this.h,F),this.Ua&&nt(v,"TYPE","init"),this.P?(nt(v,"$req",g),nt(v,"SID","null"),F.T=!0,$o(F,v,null)):$o(F,v,g),this.G=2}}else this.G==3&&(c?Jo(this,c):this.i.length==0||Un(this.h)||Jo(this))};function Jo(c,g){var v;g?v=g.l:v=c.U++;const T=jn(c.I);nt(T,"SID",c.K),nt(T,"RID",v),nt(T,"AID",c.T),pi(c,T),c.m&&c.o&&Xi(T,c.m,c.o),v=new mr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ji(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),wl(c.h,v),$o(v,T,g)}function pi(c,g){c.H&&fe(c.H,function(v,T){nt(g,T,v)}),c.l&&qi({},function(v,T){nt(g,T,v)})}function Ji(c,g,v){v=Math.min(c.i.length,v);var T=c.l?w(c.l.Na,c.l,c):null;e:{var F=c.i;let $=-1;for(;;){const ne=["count="+v];$==-1?0<v?($=F[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let Ze=!0;for(let Mt=0;Mt<v;Mt++){let We=F[Mt].g;const Wt=F[Mt].map;if(We-=$,0>We)$=Math.max(0,F[Mt].g-100),Ze=!1;else try{wc(Wt,ne,"req"+We+"_")}catch{T&&T(Wt)}}if(Ze){T=ne.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,T}function io(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;He||ae(),re||(He(),re=!0),_e.add(g,c),c.v=0}}function Zo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=dr(w(c.Fa,c),Sc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Tc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=dr(w(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Er(this),Tc(this))};function Rl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Tc(c){c.g=new mr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=jn(c.qa);nt(g,"RID","rpc"),nt(g,"SID",c.K),nt(g,"AID",c.T),nt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&nt(g,"TO",c.ja),nt(g,"TYPE","xmlhttp"),pi(c,g),c.m&&c.o&&Xi(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ki(jn(g)),v.m=null,v.P=!0,vl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Er(this),Zo(this),At(19))};function ea(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function ta(c,g){var v=null;if(c.g==g){ea(c),Rl(c),c.g=null;var T=2}else if(yn(c.h,g))v=g.D,pc(c.h,g),T=1;else return;if(c.G!=0){if(g.o)if(T==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;T=Ks(),wt(T,new jo(T,v)),zr(c)}else io(c);else if(F=g.s,F==3||F==0&&0<g.X||!(T==1&&_f(c,g)||T==2&&Zo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),F){case 1:mi(c,5);break;case 4:mi(c,10);break;case 3:mi(c,6);break;default:mi(c,2)}}}function Sc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function mi(c,g){if(c.j.info("Error code "+g),g==2){var v=w(c.fb,c),T=c.Xa;const F=!T;T=new hi(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||to(T,"https"),Ki(T),F?pf(T.toString(),v):Ec(T.toString(),v)}else At(2);c.G=0,c.l&&c.l.sa(g),Cc(c),Xo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Cc(c){if(c.G=0,c.ka=[],c.l){const g=mc(c.h);(g.length!=0||c.i.length!=0)&&(z(c.ka,g),z(c.ka,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.ra()}}function Ac(c,g,v){var T=v instanceof hi?jn(v):new hi(v);if(T.g!="")g&&(T.g=g+"."+T.g),Hi(T,T.s);else{var F=d.location;T=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var $=new hi(null);T&&to($,T),g&&($.g=g),F&&Hi($,F),v&&($.l=v),T=$}return v=c.D,g=c.ya,v&&g&&nt(T,v,g),nt(T,"VER",c.la),pi(c,T),T}function Rc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new pt(new di({eb:v})):new pt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pl(){}n=Pl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function na(){}na.prototype.g=function(c,g){return new vn(c,g)};function vn(c,g){Ct.call(this),this.g=new Al(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!J(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!J(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Wr(this)}L(vn,Ct),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Zt(this.g)},vn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Gs(c),c=v);g.i.push(new dc(g.Ya++,c)),g.G==3&&zr(g)},vn.prototype.N=function(){this.g.l=null,delete this.j,Zt(this.g),delete this.g,vn.aa.N.call(this)};function Pc(c){Vr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}L(Pc,Vr);function kc(){Uo.call(this),this.status=1}L(kc,Uo);function Wr(c){this.g=c}L(Wr,Pl),Wr.prototype.ua=function(){wt(this.g,"a")},Wr.prototype.ta=function(c){wt(this.g,new Pc(c))},Wr.prototype.sa=function(c){wt(this.g,new kc)},Wr.prototype.ra=function(){wt(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,gT=function(){return new na},mT=function(){return Ks()},pT=Fr,_m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zo.NO_ERROR=0,zo.TIMEOUT=8,zo.HTTP_ERROR=6,Lh=zo,lc.COMPLETE="complete",fT=lc,gt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,su=gt,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,dT=pt}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});const AE="@firebase/firestore",RE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let il="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Ad("@firebase/firestore");function Ca(){return Ao.logLevel}function ce(n,...e){if(Ao.logLevel<=Ve.DEBUG){const t=e.map(_g);Ao.debug(`Firestore (${il}): ${n}`,...t)}}function bi(n,...e){if(Ao.logLevel<=Ve.ERROR){const t=e.map(_g);Ao.error(`Firestore (${il}): ${n}`,...t)}}function Ns(n,...e){if(Ao.logLevel<=Ve.WARN){const t=e.map(_g);Ao.warn(`Firestore (${il}): ${n}`,...t)}}function _g(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_T(n,r,t)}function _T(n,e,t){let r=`FIRESTORE (${il}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw bi(r),new Error(r)}function Xe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||_T(e,s,r)}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(mn.UNAUTHENTICATED)))}shutdown(){}}class M1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class V1{constructor(e){this.t=e,this.currentUser=mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ss,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ss)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string",31837,{l:r}),new yT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new mn(e)}}class F1{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=mn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U1{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new F1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(mn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class PE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,or(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new PE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new PE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function vT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=B1(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function De(n,e){return n<e?-1:n>e?1:0}function ym(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return De(r,s);{const a=vT(),u=z1(a.encode(kE(n,t)),a.encode(kE(e,t)));return u!==0?u:De(r,s)}}t+=r>65535?2:1}return De(n.length,e.length)}function kE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function z1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return De(n[t],e[t]);return De(n.length,e.length)}function za(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="__name__";class Kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Kr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return De(e.length,t.length)}static compareSegments(e,t){const r=Kr.isNumericId(e),s=Kr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Kr.extractNumericId(e).compare(Kr.extractNumericId(t)):ym(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class lt extends Kr{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const W1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Kr{construct(e,t,r){return new rn(e,t,r)}static isValidIdentifier(e){return W1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===NE}static keyField(){return new rn([NE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(lt.fromString(e))}static fromName(e){return new ye(lt.fromString(e).popFirst(5))}static empty(){return new ye(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(n,e,t){if(!t)throw new oe(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $1(n,e,t,r){if(e===!0&&r===!0)throw new oe(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xE(n){if(!ye.isDocumentKey(n))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function DE(n){if(ye.isDocumentKey(n))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Dd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Kn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dd(n);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ot(n,e){const t={typeString:n};return e&&(t.value=e),t}function qu(n,e){if(!wT(n))throw new oe(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=-62135596800,OE=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*OE);return new dt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bE)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/OE}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qu(e,dt._jsonSchema))return new dt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:Ot("string",dt._jsonSchemaVersion),seconds:Ot("number"),nanoseconds:Ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new dt(0,0))}static max(){return new Pe(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Au=-1;function q1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Pe.fromTimestamp(r===1e9?new dt(t+1,0):new dt(t,r));return new xs(s,ye.empty(),e)}function H1(n){return new xs(n.readTime,n.key,Au)}class xs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xs(Pe.min(),ye.empty(),Au)}static max(){return new xs(Pe.max(),ye.empty(),Au)}}function G1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==K1)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((s=>s?K.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((y=>{u[m]=y,++d,d===a&&r(u)}),(y=>s(y)))}}))}static doWhile(e,t){return new K(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function Y1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ol(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class bd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}bd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=-1;function Od(n){return n==null}function Zh(n){return n===0&&1/n==-1/0}function X1(n){return typeof n=="number"&&Number.isInteger(n)&&!Zh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="";function J1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=LE(e)),e=Z1(n.get(t),e);return LE(e)}function Z1(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case IT:t+="";break;default:t+=a}}return t}function LE(n){return n+IT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function TT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt=class vm{constructor(e,t){this.comparator=e,this.root=t||Cs.EMPTY}insert(e,t){return new vm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Cs.BLACK,null,null))}remove(e){return new vm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ch(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ch(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ch(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ch(this.root,e,this.comparator,!0)}},Ch=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Cs=class Si{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Si.RED,this.left=s??Si.EMPTY,this.right=a??Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Si(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Si.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};Cs.EMPTY=null,Cs.RED=!0,Cs.BLACK=!1;Cs.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Cs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.comparator=e,this.data=new Lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new VE(this.data.getIterator())}getIteratorFrom(e){return new VE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new jt(this.comparator);return t.data=e,t}}class VE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new jt(rn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return za(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class ST extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new ST("Invalid base64 string: "+a):a}})(e);return new on(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const eN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=eN.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bs(n){return typeof n=="string"?on.fromBase64String(n):on.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="server_timestamp",AT="__type__",RT="__previous_value__",PT="__local_write_time__";function Eg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[AT])===null||t===void 0?void 0:t.stringValue)===CT}function Ld(n){const e=n.mapValue.fields[RT];return Eg(e)?Ld(e):e}function Ru(n){const e=Ds(n.mapValue.fields[PT].timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,t,r,s,a,u,d,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const ed="(default)";class Pu{constructor(e,t){this.projectId=e,this.database=t||ed}static empty(){return new Pu("","")}get isDefaultDatabase(){return this.database===ed}isEqual(e){return e instanceof Pu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="__type__",nN="__max__",Ah={mapValue:{}},NT="__vector__",td="value";function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Eg(n)?4:iN(n)?9007199254740991:rN(n)?10:11:Ae(28295,{value:n})}function ri(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ru(n).isEqual(Ru(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ds(s.timestampValue),d=Ds(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return bs(s.bytesValue).isEqual(bs(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return Pt(s.geoPointValue.latitude)===Pt(a.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return Pt(s.integerValue)===Pt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Pt(s.doubleValue),d=Pt(a.doubleValue);return u===d?Zh(u)===Zh(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return za(n.arrayValue.values||[],e.arrayValue.values||[],ri);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(ME(u)!==ME(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!ri(u[f],d[f])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function ku(n,e){return(n.values||[]).find((t=>ri(t,e)))!==void 0}function Wa(n,e){if(n===e)return 0;const t=Os(n),r=Os(e);if(t!==r)return De(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=Pt(a.integerValue||a.doubleValue),f=Pt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return FE(n.timestampValue,e.timestampValue);case 4:return FE(Ru(n),Ru(e));case 5:return ym(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=bs(a),f=bs(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=De(d[m],f[m]);if(y!==0)return y}return De(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=De(Pt(a.latitude),Pt(u.latitude));return d!==0?d:De(Pt(a.longitude),Pt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return UE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,m,y;const E=a.fields||{},w=u.fields||{},k=(d=E[td])===null||d===void 0?void 0:d.arrayValue,L=(f=w[td])===null||f===void 0?void 0:f.arrayValue,B=De(((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0,((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0);return B!==0?B:UE(k,L)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Ah.mapValue&&u===Ah.mapValue)return 0;if(a===Ah.mapValue)return 1;if(u===Ah.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const w=ym(f[E],y[E]);if(w!==0)return w;const k=Wa(d[f[E]],m[y[E]]);if(k!==0)return k}return De(f.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function FE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Ds(n),r=Ds(e),s=De(t.seconds,r.seconds);return s!==0?s:De(t.nanos,r.nanos)}function UE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Wa(t[s],r[s]);if(a)return a}return De(t.length,r.length)}function $a(n){return Em(n)}function Em(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ds(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return bs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Em(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Em(t.fields[u])}`;return s+"}"})(n.mapValue):Ae(61005,{value:n})}function Mh(n){switch(Os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ld(n);return e?16+Mh(e):16;case 5:return 2*n.stringValue.length;case 6:return bs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Mh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ws(r.fields,((a,u)=>{s+=a.length+Mh(u)})),s})(n.mapValue);default:throw Ae(13486,{value:n})}}function jE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wm(n){return!!n&&"integerValue"in n}function wg(n){return!!n&&"arrayValue"in n}function BE(n){return!!n&&"nullValue"in n}function zE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vh(n){return!!n&&"mapValue"in n}function rN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[kT])===null||t===void 0?void 0:t.stringValue)===NT}function fu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ws(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=fu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===nN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fu(t)}setAll(e){let t=rn.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=fu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ri(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Vh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ws(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new Ln(fu(this.value))}}function xT(n){const e=[];return Ws(n.fields,((t,r)=>{const s=new rn([t]);if(Vh(r)){const a=xT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new gn(e,0,Pe.min(),Pe.min(),Pe.min(),Ln.empty(),0)}static newFoundDocument(e,t,r,s){return new gn(e,1,t,Pe.min(),r,s,0)}static newNoDocument(e,t){return new gn(e,2,t,Pe.min(),Pe.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new gn(e,3,t,Pe.min(),Pe.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nd{constructor(e,t){this.position=e,this.inclusive=t}}function WE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=ye.comparator(ye.fromName(u.referenceValue),t.key):r=Wa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function $E(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ri(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nu{constructor(e,t="asc"){this.field=e,this.dir=t}}function sN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class DT{}class bt extends DT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new aN(e,t,r):t==="array-contains"?new cN(e,r):t==="in"?new hN(e,r):t==="not-in"?new dN(e,r):t==="array-contains-any"?new fN(e,r):new bt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lN(e,r):new uN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wa(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison(Wa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class br extends DT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new br(e,t)}matches(e){return bT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function bT(n){return n.op==="and"}function OT(n){return oN(n)&&bT(n)}function oN(n){for(const e of n.filters)if(e instanceof br)return!1;return!0}function Im(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+$a(n.value);if(OT(n))return n.filters.map((e=>Im(e))).join(",");{const e=n.filters.map((t=>Im(t))).join(",");return`${n.op}(${e})`}}function LT(n,e){return n instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&ri(r.value,s.value)})(n,e):n instanceof br?(function(r,s){return s instanceof br&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&LT(u,s.filters[d])),!0):!1})(n,e):void Ae(19439)}function MT(n){return n instanceof bt?(function(t){return`${t.field.canonicalString()} ${t.op} ${$a(t.value)}`})(n):n instanceof br?(function(t){return t.op.toString()+" {"+t.getFilters().map(MT).join(" ,")+"}"})(n):"Filter"}class aN extends bt{constructor(e,t,r){super(e,t,r),this.key=ye.fromName(r.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class lN extends bt{constructor(e,t){super(e,"in",t),this.keys=VT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uN extends bt{constructor(e,t){super(e,"not-in",t),this.keys=VT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function VT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ye.fromName(r.referenceValue)))}class cN extends bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wg(t)&&ku(t.arrayValue,this.value)}}class hN extends bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ku(this.value.arrayValue,t)}}class dN extends bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ku(this.value.arrayValue,t)}}class fN extends bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ku(this.value.arrayValue,r)))}}/**
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
 */class pN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function qE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new pN(n,e,t,r,s,a,u)}function Ig(n){const e=ke(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Im(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Od(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>$a(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>$a(r))).join(",")),e.Pe=t}return e.Pe}function Tg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!LT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$E(n.startAt,e.startAt)&&$E(n.endAt,e.endAt)}function Tm(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mN(n,e,t,r,s,a,u,d){return new al(n,e,t,r,s,a,u,d)}function Md(n){return new al(n)}function HE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function FT(n){return n.collectionGroup!==null}function pu(n){const e=ke(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new jt(rn.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Nu(a,r))})),t.has(rn.keyField().canonicalString())||e.Te.push(new Nu(rn.keyField(),r))}return e.Te}function Zr(n){const e=ke(n);return e.Ie||(e.Ie=gN(e,pu(n))),e.Ie}function gN(n,e){if(n.limitType==="F")return qE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Nu(s.field,a)}));const t=n.endAt?new nd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new nd(n.startAt.position,n.startAt.inclusive):null;return qE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Sm(n,e){const t=n.filters.concat([e]);return new al(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function rd(n,e,t){return new al(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vd(n,e){return Tg(Zr(n),Zr(e))&&n.limitType===e.limitType}function UT(n){return`${Ig(Zr(n))}|lt:${n.limitType}`}function Aa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>MT(s))).join(", ")}]`),Od(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>$a(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>$a(s))).join(",")),`Target(${r})`})(Zr(n))}; limitType=${n.limitType})`}function Fd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ye.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of pu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const m=WE(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,pu(r),s)||r.endAt&&!(function(u,d,f){const m=WE(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,pu(r),s))})(n,e)}function _N(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jT(n){return(e,t)=>{let r=!1;for(const s of pu(n)){const a=yN(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function yN(n,e,t){const r=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Wa(f,m):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return TT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new Lt(ye.comparator);function Oi(){return vN}const BT=new Lt(ye.comparator);function ou(...n){let e=BT;for(const t of n)e=e.insert(t.key,t);return e}function zT(n){let e=BT;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function wo(){return mu()}function WT(){return mu()}function mu(){return new Lo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const EN=new Lt(ye.comparator),wN=new jt(ye.comparator);function Fe(...n){let e=wN;for(const t of n)e=e.add(t);return e}const IN=new jt(De);function TN(){return IN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zh(e)?"-0":e}}function $T(n){return{integerValue:""+n}}function SN(n,e){return X1(e)?$T(e):Sg(n,e)}/**
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
 */class Ud{constructor(){this._=void 0}}function CN(n,e,t){return n instanceof xu?(function(s,a){const u={fields:{[AT]:{stringValue:CT},[PT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Eg(a)&&(a=Ld(a)),a&&(u.fields[RT]=a),{mapValue:u}})(t,e):n instanceof qa?HT(n,e):n instanceof Du?GT(n,e):(function(s,a){const u=qT(s,a),d=GE(u)+GE(s.Ee);return wm(u)&&wm(s.Ee)?$T(d):Sg(s.serializer,d)})(n,e)}function AN(n,e,t){return n instanceof qa?HT(n,e):n instanceof Du?GT(n,e):t}function qT(n,e){return n instanceof id?(function(r){return wm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class xu extends Ud{}class qa extends Ud{constructor(e){super(),this.elements=e}}function HT(n,e){const t=KT(e);for(const r of n.elements)t.some((s=>ri(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Du extends Ud{constructor(e){super(),this.elements=e}}function GT(n,e){let t=KT(e);for(const r of n.elements)t=t.filter((s=>!ri(s,r)));return{arrayValue:{values:t}}}class id extends Ud{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function GE(n){return Pt(n.integerValue||n.doubleValue)}function KT(n){return wg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.field=e,this.transform=t}}function RN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof qa&&s instanceof qa||r instanceof Du&&s instanceof Du?za(r.elements,s.elements,ri):r instanceof id&&s instanceof id?ri(r.Ee,s.Ee):r instanceof xu&&s instanceof xu})(n.transform,e.transform)}class PN{constructor(e,t){this.version=e,this.transformResults=t}}class Tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jd{}function YT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bd(n.key,Tn.none()):new Hu(n.key,n.data,Tn.none());{const t=n.data,r=Ln.empty();let s=new jt(rn.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new $s(n.key,r,new Hn(s.toArray()),Tn.none())}}function kN(n,e,t){n instanceof Hu?(function(s,a,u){const d=s.value.clone(),f=QE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof $s?(function(s,a,u){if(!Fh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=QE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(XT(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function gu(n,e,t,r){return n instanceof Hu?(function(a,u,d,f){if(!Fh(a.precondition,u))return d;const m=a.value.clone(),y=YE(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof $s?(function(a,u,d,f){if(!Fh(a.precondition,u))return d;const m=YE(a.fieldTransforms,f,u),y=u.data;return y.setAll(XT(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Fh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function NN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=qT(r.transform,s||null);a!=null&&(t===null&&(t=Ln.empty()),t.set(r.field,a))}return t||null}function KE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&za(r,s,((a,u)=>RN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hu extends jd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends jd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function XT(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function QE(n,e,t){const r=new Map;Xe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,AN(u,d,t[s]))}return r}function YE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,CN(a,u,e))}return r}class Bd extends jd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xN extends jd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&kN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=WT();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=YT(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Fe())}isEqual(e){return this.batchId===e.batchId&&za(this.mutations,e.mutations,((t,r)=>KE(t,r)))&&za(this.baseMutations,e.baseMutations,((t,r)=>KE(t,r)))}}class Cg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Xe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return EN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Cg(e,t,r,s)}}/**
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
 */class bN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ON{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,$e;function LN(n){switch(n){case H.OK:return Ae(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function JT(n){if(n===void 0)return bi("GRPC error has no .code"),H.UNKNOWN;switch(n){case Dt.OK:return H.OK;case Dt.CANCELLED:return H.CANCELLED;case Dt.UNKNOWN:return H.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return H.INTERNAL;case Dt.UNAVAILABLE:return H.UNAVAILABLE;case Dt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Dt.NOT_FOUND:return H.NOT_FOUND;case Dt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Dt.ABORTED:return H.ABORTED;case Dt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Dt.DATA_LOSS:return H.DATA_LOSS;default:return Ae(39323,{code:n})}}($e=Dt||(Dt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const MN=new Ts([4294967295,4294967295],0);function XE(n){const e=vT().encode(n),t=new hT;return t.update(e),new Uint8Array(t.digest())}function JE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([s,a],0)]}class Ag{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new au(`Invalid padding: ${t}`);if(r<0)throw new au(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new au(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new au(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ts.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ts.fromNumber(r)));return s.compare(MN)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=XE(e),[r,s]=JE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Ag(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=XE(e),[r,s]=JE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class au extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zd(Pe.min(),s,new Lt(De),Oi(),Fe())}}class Gu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gu(r,t,Fe(),Fe(),Fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class ZT{constructor(e,t){this.targetId=e,this.De=t}}class e0{constructor(e,t,r=on.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ZE{constructor(){this.ve=0,this.Ce=ew(),this.Fe=on.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Fe(),t=Fe(),r=Fe();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ae(38017,{changeType:a})}})),new Gu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ew()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class VN{constructor(e){this.We=e,this.Ge=new Map,this.ze=Oi(),this.je=Rh(),this.Je=Rh(),this.He=new Lt(De)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Tm(a))if(r===0){const u=new ye(a.path);this.Xe(t,u,gn.newNoDocument(u,Pe.min()))}else Xe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=bs(r).toUint8Array()}catch(f){if(f instanceof ST)return Ns("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Ag(u,s,a)}catch(f){return Ns(f instanceof au?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Tm(d.target)){const f=new ye(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,gn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Fe();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new zd(e,t,this.He,this.ze,r);return this.ze=Oi(),this.je=Rh(),this.Je=Rh(),this.He=new Lt(De),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ZE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new jt(De),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new jt(De),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ZE),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Rh(){return new Lt(ye.comparator)}function ew(){return new Lt(ye.comparator)}const FN={asc:"ASCENDING",desc:"DESCENDING"},UN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jN={and:"AND",or:"OR"};class BN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cm(n,e){return n.useProto3Json||Od(e)?e:{value:e}}function sd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zN(n,e){return sd(n,e.toTimestamp())}function ei(n){return Xe(!!n,49232),Pe.fromTimestamp((function(t){const r=Ds(t);return new dt(r.seconds,r.nanos)})(n))}function Rg(n,e){return Am(n,e).canonicalString()}function Am(n,e){const t=(function(s){return new lt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function n0(n){const e=lt.fromString(n);return Xe(a0(e),10190,{key:e.toString()}),e}function Rm(n,e){return Rg(n.databaseId,e.path)}function Qp(n,e){const t=n0(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(i0(t))}function r0(n,e){return Rg(n.databaseId,e)}function WN(n){const e=n0(n);return e.length===4?lt.emptyPath():i0(e)}function Pm(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function i0(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tw(n,e,t){return{name:Rm(n,e),fields:t.value.mapValue.fields}}function $N(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(m,y){return m.useProto3Json?(Xe(y===void 0||typeof y=="string",58123),on.fromBase64String(y||"")):(Xe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),on.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?H.UNKNOWN:JT(m.code);return new oe(y,m.message||"")})(u);t=new e0(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qp(n,r.document.name),a=ei(r.document.updateTime),u=r.document.createTime?ei(r.document.createTime):Pe.min(),d=new Ln({mapValue:{fields:r.document.fields}}),f=gn.newFoundDocument(s,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Uh(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qp(n,r.document),a=r.readTime?ei(r.readTime):Pe.min(),u=gn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Uh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qp(n,r.document),a=r.removedTargetIds||[];t=new Uh([],a,s,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ON(s,a),d=r.targetId;t=new ZT(d,u)}}return t}function qN(n,e){let t;if(e instanceof Hu)t={update:tw(n,e.key,e.value)};else if(e instanceof Bd)t={delete:Rm(n,e.key)};else if(e instanceof $s)t={update:tw(n,e.key,e.data),updateMask:ex(e.fieldMask)};else{if(!(e instanceof xN))return Ae(16599,{Rt:e.type});t={verify:Rm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof xu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof qa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Du)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof id)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ae(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:zN(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)})(n,e.precondition)),t}function HN(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?ei(s.updateTime):ei(a);return u.isEqual(Pe.min())&&(u=ei(a)),new PN(u,s.transformResults||[])})(t,e)))):[]}function GN(n,e){return{documents:[r0(n,e.path)]}}function KN(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=r0(n,s);const a=(function(m){if(m.length!==0)return o0(br.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((y=>(function(w){return{field:Ra(w.field),direction:XN(w.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Cm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:s}}function QN(n){let e=WN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Xe(r===1,65062);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=(function(E){const w=s0(E);return w instanceof br&&OT(w)?w.getFilters():[w]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((w=>(function(L){return new Nu(Pa(L.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let w;return w=typeof E=="object"?E.value:E,Od(w)?null:w})(t.limit));let f=null;t.startAt&&(f=(function(E){const w=!!E.before,k=E.values||[];return new nd(k,w)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const w=!E.before,k=E.values||[];return new nd(k,w)})(t.endAt)),mN(e,s,u,a,d,"F",f,m)}function YN(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function s0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pa(t.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pa(t.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Pa(t.unaryFilter.field);return bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pa(t.unaryFilter.field);return bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return bt.create(Pa(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return br.create(t.compositeFilter.filters.map((r=>s0(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function XN(n){return FN[n]}function JN(n){return UN[n]}function ZN(n){return jN[n]}function Ra(n){return{fieldPath:n.canonicalString()}}function Pa(n){return rn.fromServerFormat(n.fieldPath)}function o0(n){return n instanceof bt?(function(t){if(t.op==="=="){if(zE(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NAN"}};if(BE(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zE(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NAN"}};if(BE(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(t.field),op:JN(t.op),value:t.value}}})(n):n instanceof br?(function(t){const r=t.getFilters().map((s=>o0(s)));return r.length===1?r[0]:{compositeFilter:{op:ZN(t.op),filters:r}}})(n):Ae(54877,{filter:n})}function ex(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function a0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,r,s,a=Pe.min(),u=Pe.min(),d=on.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.gt=e}}function nx(n){const e=QN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
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
 */class rx{constructor(){this.Dn=new ix}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(xs.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new jt(lt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new jt(lt.comparator)).toArray()}}/**
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
 */const nw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l0=41943040;class On{static withCacheSize(e){return new On(e,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.DEFAULT_COLLECTION_PERCENTILE=10,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,On.DEFAULT=new On(l0,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),On.DISABLED=new On(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ha(0)}static ur(){return new Ha(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="LruGarbageCollector",sx=1048576;function iw([n,e],[t,r]){const s=De(n,t);return s===0?De(e,r):s}class ox{constructor(e){this.Tr=e,this.buffer=new jt(iw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();iw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ax{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(rw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ol(t)?ce(rw,"Ignoring IndexedDB error during garbage collection: ",t):await sl(t)}await this.Rr(3e5)}))}}class lx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(bd.ue);const r=new ox(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(nw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Ca()<=Ve.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E}))))}}function ux(n,e){return new lx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.changes=new Lo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&gu(r.mutation,s,Hn.empty(),dt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Fe()){const s=wo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=ou();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=wo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Oi();const u=mu(),d=(function(){return mu()})();return t.forEach(((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof $s)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),gu(y.mutation,m,y.mutation.getFieldMask(),dt.now())):u.set(m.key,Hn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>{var E;return d.set(m,new hx(y,(E=u.get(m))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=mu();let s=new Lt(((u,d)=>u-d)),a=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||Hn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const E=(s.get(d.batchId)||Fe()).add(f);s=s.insert(d.batchId,E)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,E=WT();y.forEach((w=>{if(!a.has(w)){const k=YT(t.get(w),r.get(w));k!==null&&E.set(w,k),a=a.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return K.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return ye.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):FT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):K.resolve(wo());let d=Au,f=a;return u.next((m=>K.forEach(m,((y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(y)?K.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{f=f.insert(y,w)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Fe()))).next((y=>({batchId:d,changes:zT(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((r=>{let s=ou();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=ou();return this.indexManager.getCollectionParents(e,a).next((d=>K.forEach(d,(f=>{const m=(function(E,w){return new al(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next((y=>{y.forEach(((E,w)=>{u=u.insert(E,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,gn.newInvalidDocument(y)))}));let d=ou();return u.forEach(((f,m)=>{const y=a.get(f);y!==void 0&&gu(y.mutation,m,Hn.empty(),dt.now()),Fd(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ei(s.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:nx(s.bundledQuery),readTime:ei(s.readTime)}})(t)),K.resolve()}}/**
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
 */class px{constructor(){this.overlays=new Lt(ye.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wo();return K.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const s=wo(),a=t.length+1,u=new ye(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return K.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Lt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=wo(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=wo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=s)););return K.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new bN(t,r));let a=this.kr.get(t);a===void 0&&(a=Fe(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class mx{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.qr=new jt(Kt.Qr),this.$r=new jt(Kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Kt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Kt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ye(new lt([])),r=new Kt(t,e),s=new Kt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new lt([])),r=new Kt(t,e),s=new Kt(t,e+1);let a=Fe();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Kt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new jt(Kt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new DN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Kt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?vg:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Kt(t,0),s=new Kt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new jt(De);return t.forEach((s=>{const a=new Kt(s,0),u=new Kt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;ye.isDocumentKey(a)||(a=a.child(""));const u=new Kt(new ye(a),0);let d=new jt(De);return this.Yr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)}),u),K.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Xe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(t.mutations,(s=>{const a=new Kt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Kt(t,0),s=this.Yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.ni=e,this.docs=(function(){return new Lt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():gn.newInvalidDocument(t))}getEntries(e,t){let r=Oi();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():gn.newInvalidDocument(s))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Oi();const u=t.path,d=new ye(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||G1(H1(y),r)<=0||(s.has(y.key)||Fd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ae(9500)}ri(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new yx(this)}getSize(e){return K.resolve(this.size)}}class yx extends cx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.persistence=e,this.ii=new Lo((t=>Ig(t)),Tg),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.si=0,this.oi=new Pg,this.targetCount=0,this._i=Ha.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ha(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),K.waitFor(a).next((()=>s))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,t){this.ai={},this.overlays={},this.ui=new bd(0),this.ci=!1,this.ci=!0,this.li=new mx,this.referenceDelegate=e(this),this.hi=new vx(this),this.indexManager=new rx,this.remoteDocumentCache=(function(s){return new _x(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new tx(t),this.Ti=new fx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new px,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new gx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const s=new Ex(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Ex extends Q1{constructor(e){super(),this.currentSequenceNumber=e}}class kg{constructor(e){this.persistence=e,this.Ai=new Pg,this.Ri=null}static Vi(e){return new kg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(r=>{const s=ye.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Pe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class od{constructor(e,t){this.persistence=e,this.gi=new Lo((r=>J1(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=ux(this,t)}static Vi(e,t){return new od(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?K.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mh(e.data.value)),t}Sr(e,t,r){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Fe(),s=Fe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ng(e,t.fromCache,r,s)}}/**
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
 */class wx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ix{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return QA()?8:Y1(_n())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new wx;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Ca()<=Ve.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Aa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ca()<=Ve.DEBUG&&ce("QueryEngine","Query:",Aa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ca()<=Ve.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Aa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zr(t))):K.resolve())}ps(e,t){if(HE(t))return K.resolve(null);let r=Zr(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=rd(t,null,"F"),r=Zr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Fe(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,rd(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ys(e,t,r,s){return HE(t)||s.isEqual(Pe.min())?K.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?K.resolve(null):(Ca()<=Ve.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Aa(t)),this.vs(e,u,t,q1(s,Au)).next((d=>d)))}))}bs(e,t){let r=new jt(jT(e));return t.forEach(((s,a)=>{Fd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Ca()<=Ve.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Aa(t)),this.gs.getDocumentsMatchingQuery(e,t,xs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="LocalStore",Tx=3e8;class Sx{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Lt(De),this.Ms=new Lo((a=>Ig(a)),Tg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Cx(n,e,t,r){return new Sx(n,e,t,r)}async function c0(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Fe();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Bs:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Ax(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,y){const E=m.batch,w=E.keys();let k=K.resolve();return w.forEach((L=>{k=k.next((()=>y.getEntry(f,L))).next((B=>{const z=m.docVersions.get(L);Xe(z!==null,48541),B.version.compareTo(z)<0&&(E.applyToRemoteDocument(B,m),B.isValidDocument()&&(B.setReadTime(m.commitVersion),y.addEntry(B)))}))})),k.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Fe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function h0(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Rx(n,e){const t=ke(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((y,E)=>{const w=s.get(E);if(!w)return;d.push(t.hi.removeMatchingKeys(a,y.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,y.addedDocuments,E))));let k=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?k=k.withResumeToken(on.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):y.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(y.resumeToken,r)),s=s.insert(E,k),(function(B,z,Q){return B.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Tx?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(w,k,y)&&d.push(t.hi.updateTargetData(a,k))}));let f=Oi(),m=Fe();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))})),d.push(Px(a,u,e.documentUpdates).next((y=>{f=y.Ls,m=y.ks}))),!r.isEqual(Pe.min())){const y=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(y)}return K.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Px(n,e,t){let r=Fe(),s=Fe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Oi();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Pe.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ce(xg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function kx(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=vg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Nx(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,K.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new ys(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function km(n,e,t){const r=ke(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!ol(u))throw u;ce(xg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function sw(n,e,t){const r=ke(n);let s=Pe.min(),a=Fe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,y){const E=ke(f),w=E.Ms.get(y);return w!==void 0?K.resolve(E.Fs.get(w)):E.hi.getTargetData(m,y)})(r,u,Zr(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Pe.min(),t?a:Fe()))).next((d=>(xx(r,_N(e),d),{documents:d,qs:a})))))}function xx(n,e,t){let r=n.xs.get(e)||Pe.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class ow{constructor(){this.activeTargetIds=TN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dx{constructor(){this.Fo=new ow,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ow,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bx{xo(e){}shutdown(){}}/**
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
 */const aw="ConnectivityMonitor";class lw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(aw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(aw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ph=null;function Nm(){return Ph===null?Ph=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ph++,"0x"+Ph.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="RestConnection",Ox={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ed?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Nm(),d=this.Go(e,t.toUriEncodedString());ce(Yp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),y=Bs(m);return this.jo(e,d,f,r,y).then((E=>(ce(Yp,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Ns(Yp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+il})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=Ox[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="WebChannelConnection";class Vx extends Lx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Nm();return new Promise(((d,f)=>{const m=new dT;m.setWithCredentials(!0),m.listenOnce(fT.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Lh.NO_ERROR:const E=m.getResponseJson();ce(pn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Lh.TIMEOUT:ce(pn,`RPC '${e}' ${u} timed out`),f(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const w=m.getStatus();if(ce(pn,`RPC '${e}' ${u} failed with status:`,w,"response text:",m.getResponseText()),w>0){let k=m.getResponseJson();Array.isArray(k)&&(k=k[0]);const L=k==null?void 0:k.error;if(L&&L.status&&L.message){const B=(function(Q){const J=Q.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(J)>=0?J:H.UNKNOWN})(L.status);f(new oe(B,L.message))}else f(new oe(H.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new oe(H.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{ce(pn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(s);ce(pn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",y,r,15)}))}P_(e,t,r){const s=Nm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=gT(),d=mT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ce(pn,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);this.T_(E);let w=!1,k=!1;const L=new Mx({Ho:z=>{k?ce(pn,`Not sending because RPC '${e}' stream ${s} is closed:`,z):(w||(ce(pn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),w=!0),ce(pn,`RPC '${e}' stream ${s} sending:`,z),E.send(z))},Yo:()=>E.close()}),B=(z,Q,J)=>{z.listen(Q,(ie=>{try{J(ie)}catch(le){setTimeout((()=>{throw le}),0)}}))};return B(E,su.EventType.OPEN,(()=>{k||(ce(pn,`RPC '${e}' stream ${s} transport opened.`),L.s_())})),B(E,su.EventType.CLOSE,(()=>{k||(k=!0,ce(pn,`RPC '${e}' stream ${s} transport closed`),L.__(),this.I_(E))})),B(E,su.EventType.ERROR,(z=>{k||(k=!0,Ns(pn,`RPC '${e}' stream ${s} transport errored. Name:`,z.name,"Message:",z.message),L.__(new oe(H.UNAVAILABLE,"The operation could not be completed")))})),B(E,su.EventType.MESSAGE,(z=>{var Q;if(!k){const J=z.data[0];Xe(!!J,16349);const ie=J,le=(ie==null?void 0:ie.error)||((Q=ie[0])===null||Q===void 0?void 0:Q.error);if(le){ce(pn,`RPC '${e}' stream ${s} received error:`,le);const qe=le.status;let fe=(function(P){const D=Dt[P];if(D!==void 0)return JT(D)})(qe),b=le.message;fe===void 0&&(fe=H.INTERNAL,b="Unknown error status: "+qe+" with message "+le.message),k=!0,L.__(new oe(fe,b)),E.close()}else ce(pn,`RPC '${e}' stream ${s} received:`,J),L.a_(J)}})),B(d,pT.STAT_EVENT,(z=>{z.stat===_m.PROXY?ce(pn,`RPC '${e}' stream ${s} detected buffering proxy`):z.stat===_m.NOPROXY&&ce(pn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{L.o_()}),0),L}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Xp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n){return new BN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="PersistentStream";class f0{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new d0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(bi(t.toString()),bi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new oe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(uw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(uw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fx extends f0{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=$N(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Pe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Pe.min():u.readTime?ei(u.readTime):Pe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Pm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Tm(f)?{documents:GN(a,f)}:{query:KN(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=t0(a,u.resumeToken);const m=Cm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Pe.min())>0){d.readTime=sd(a,u.snapshotVersion.toTimestamp());const m=Cm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=YN(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Pm(this.serializer),t.removeTarget=e,this.k_(t)}}class Ux extends f0{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=HN(e.writeResults,e.commitTime),r=ei(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Pm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>qN(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{}class Bx extends jx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Am(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(H.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Am(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(H.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class zx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ro="RemoteStore";class Wx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Mo(this)&&(ce(Ro,"Restarting streams for network reachability change."),await(async function(f){const m=ke(f);m.Ia.add(4),await Ku(m),m.Aa.set("Unknown"),m.Ia.delete(4),await $d(m)})(this))}))})),this.Aa=new zx(r,s)}}async function $d(n){if(Mo(n))for(const e of n.da)await e(!0)}async function Ku(n){for(const e of n.da)await e(!1)}function p0(n,e){const t=ke(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Lg(t)?Og(t):ll(t).x_()&&bg(t,e))}function Dg(n,e){const t=ke(n),r=ll(t);t.Ta.delete(e),r.x_()&&m0(t,e),t.Ta.size===0&&(r.x_()?r.B_():Mo(t)&&t.Aa.set("Unknown"))}function bg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ll(n).H_(e)}function m0(n,e){n.Ra.$e(e),ll(n).Y_(e)}function Og(n){n.Ra=new VN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ll(n).start(),n.Aa.aa()}function Lg(n){return Mo(n)&&!ll(n).M_()&&n.Ta.size>0}function Mo(n){return ke(n).Ia.size===0}function g0(n){n.Ra=void 0}async function $x(n){n.Aa.set("Online")}async function qx(n){n.Ta.forEach(((e,t)=>{bg(n,e)}))}async function Hx(n,e){g0(n),Lg(n)?(n.Aa.la(e),Og(n)):n.Aa.set("Unknown")}async function Gx(n,e,t){if(n.Aa.set("Online"),e instanceof e0&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ce(Ro,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ad(n,r)}else if(e instanceof Uh?n.Ra.Ye(e):e instanceof ZT?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Pe.min()))try{const r=await h0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(on.EMPTY_BYTE_STRING,y.snapshotVersion)),m0(a,f);const E=new ys(y.target,f,m,y.sequenceNumber);bg(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ce(Ro,"Failed to raise snapshot:",r),await ad(n,r)}}async function ad(n,e,t){if(!ol(e))throw e;n.Ia.add(1),await Ku(n),n.Aa.set("Offline"),t||(t=()=>h0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(Ro,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await $d(n)}))}function _0(n,e){return e().catch((t=>ad(n,t,e)))}async function qd(n){const e=ke(n),t=Ls(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:vg;for(;Kx(e);)try{const s=await kx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Qx(e,s)}catch(s){await ad(e,s)}y0(e)&&v0(e)}function Kx(n){return Mo(n)&&n.Pa.length<10}function Qx(n,e){n.Pa.push(e);const t=Ls(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function y0(n){return Mo(n)&&!Ls(n).M_()&&n.Pa.length>0}function v0(n){Ls(n).start()}async function Yx(n){Ls(n).na()}async function Xx(n){const e=Ls(n);for(const t of n.Pa)e.X_(t.mutations)}async function Jx(n,e,t){const r=n.Pa.shift(),s=Cg.from(r,e,t);await _0(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await qd(n)}async function Zx(n,e){e&&Ls(n).Z_&&await(async function(r,s){if((function(u){return LN(u)&&u!==H.ABORTED})(s.code)){const a=r.Pa.shift();Ls(r).N_(),await _0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await qd(r)}})(n,e),y0(n)&&v0(n)}async function cw(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),ce(Ro,"RemoteStore received new credentials");const r=Mo(t);t.Ia.add(3),await Ku(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await $d(t)}async function eD(n,e){const t=ke(n);e?(t.Ia.delete(2),await $d(t)):e||(t.Ia.add(2),await Ku(t),t.Aa.set("Unknown"))}function ll(n){return n.Va||(n.Va=(function(t,r,s){const a=ke(t);return a.ia(),new Fx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:$x.bind(null,n),e_:qx.bind(null,n),n_:Hx.bind(null,n),J_:Gx.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Lg(n)?Og(n):n.Aa.set("Unknown")):(await n.Va.stop(),g0(n))}))),n.Va}function Ls(n){return n.ma||(n.ma=(function(t,r,s){const a=ke(t);return a.ia(),new Ux(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Yx.bind(null,n),n_:Zx.bind(null,n),ea:Xx.bind(null,n),ta:Jx.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await qd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(Ro,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Mg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(n,e){if(bi("AsyncQueue",`${e}: ${n}`),ol(n))return new oe(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{static emptySet(e){return new Oa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ye.comparator(t.key,r.key):(t,r)=>ye.comparator(t.key,r.key),this.keyedMap=ou(),this.sortedSet=new Lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Oa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.fa=new Lt(ye.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ga{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ga(e,t,Oa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class nD{constructor(){this.queries=dw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ke(t),a=s.queries;s.queries=dw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new oe(H.ABORTED,"Firestore shutting down"))}}function dw(){return new Lo((n=>UT(n)),Vd)}async function E0(n,e){const t=ke(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new tD,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Vg(u,`Initialization of query '${Aa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Fg(t)}async function w0(n,e){const t=ke(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function rD(n,e){const t=ke(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Fg(t)}function iD(n,e,t){const r=ke(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Fg(n){n.Da.forEach((e=>{e.next()}))}var xm,fw;(fw=xm||(xm={})).Fa="default",fw.Cache="cache";class I0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.key=e}}class S0{constructor(e){this.key=e}}class sD{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Fe(),this.mutatedKeys=Fe(),this.Xa=jT(e),this.eu=new Oa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new hw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((y,E)=>{const w=s.get(y),k=Fd(this.query,E)?E:null,L=!!w&&this.mutatedKeys.has(w.key),B=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let z=!1;w&&k?w.data.isEqual(k.data)?L!==B&&(r.track({type:3,doc:k}),z=!0):this.iu(w,k)||(r.track({type:2,doc:k}),z=!0,(f&&this.Xa(k,f)>0||m&&this.Xa(k,m)<0)&&(d=!0)):!w&&k?(r.track({type:0,doc:k}),z=!0):w&&!k&&(r.track({type:1,doc:w}),z=!0,(f||m)&&(d=!0)),z&&(k?(u=u.add(k),a=B?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((y,E)=>(function(k,L){const B=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:z})}};return B(k)-B(L)})(y.type,E.type)||this.Xa(y.doc,E.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Ga(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new hw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new S0(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new T0(r))})),t}uu(e){this.Ha=e.qs,this.Za=Fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ga.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ug="SyncEngine";class oD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aD{constructor(e){this.key=e,this.lu=!1}}class lD{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Lo((d=>UT(d)),Vd),this.Tu=new Map,this.Iu=new Set,this.du=new Lt(ye.comparator),this.Eu=new Map,this.Au=new Pg,this.Ru={},this.Vu=new Map,this.mu=Ha.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function uD(n,e,t=!0){const r=N0(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await C0(r,e,t,!0),s}async function cD(n,e){const t=N0(n);await C0(t,e,!0,!1)}async function C0(n,e,t,r){const s=await Nx(n.localStore,Zr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await hD(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&p0(n.remoteStore,s),d}async function hD(n,e,t,r,s){n.gu=(E,w,k)=>(async function(B,z,Q,J){let ie=z.view.nu(Q);ie.Ds&&(ie=await sw(B.localStore,z.query,!1).then((({documents:b})=>z.view.nu(b,ie))));const le=J&&J.targetChanges.get(z.targetId),qe=J&&J.targetMismatches.get(z.targetId)!=null,fe=z.view.applyChanges(ie,B.isPrimaryClient,le,qe);return mw(B,z.targetId,fe._u),fe.snapshot})(n,E,w,k);const a=await sw(n.localStore,e,!0),u=new sD(e,a.qs),d=u.nu(a.documents),f=Gu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);mw(n,t,m._u);const y=new oD(e,t,u);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function dD(n,e,t){const r=ke(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Vd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await km(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Dg(r.remoteStore,s.targetId),Dm(r,s.targetId)})).catch(sl)):(Dm(r,s.targetId),await km(r.localStore,s.targetId,!0))}async function fD(n,e){const t=ke(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Dg(t.remoteStore,r.targetId))}async function pD(n,e,t){const r=wD(n);try{const s=await(function(u,d){const f=ke(u),m=dt.now(),y=d.reduce(((k,L)=>k.add(L.key)),Fe());let E,w;return f.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let L=Oi(),B=Fe();return f.Os.getEntries(k,y).next((z=>{L=z,L.forEach(((Q,J)=>{J.isValidDocument()||(B=B.add(Q))}))})).next((()=>f.localDocuments.getOverlayedDocuments(k,L))).next((z=>{E=z;const Q=[];for(const J of d){const ie=NN(J,E.get(J.key).overlayedDocument);ie!=null&&Q.push(new $s(J.key,ie,xT(ie.value.mapValue),Tn.exists(!0)))}return f.mutationQueue.addMutationBatch(k,m,Q,d)})).next((z=>{w=z;const Q=z.applyToLocalDocumentSet(E,B);return f.documentOverlayCache.saveOverlays(k,z.batchId,Q)}))})).then((()=>({batchId:w.batchId,changes:zT(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Lt(De)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m})(r,s.batchId,t),await Qu(r,s.changes),await qd(r.remoteStore)}catch(s){const a=Vg(s,"Failed to persist write");t.reject(a)}}async function A0(n,e){const t=ke(n);try{const r=await Rx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?Xe(u.lu,14607):s.removedDocuments.size>0&&(Xe(u.lu,42227),u.lu=!1))})),await Qu(t,r,e)}catch(r){await sl(r)}}function pw(n,e,t){const r=ke(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=ke(u);f.onlineState=d;let m=!1;f.queries.forEach(((y,E)=>{for(const w of E.wa)w.va(d)&&(m=!0)})),m&&Fg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mD(n,e,t){const r=ke(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Lt(ye.comparator);u=u.insert(a,gn.newNoDocument(a,Pe.min()));const d=Fe().add(a),f=new zd(Pe.min(),new Map,new Lt(De),u,d);await A0(r,f),r.du=r.du.remove(a),r.Eu.delete(e),jg(r)}else await km(r.localStore,e,!1).then((()=>Dm(r,e,t))).catch(sl)}async function gD(n,e){const t=ke(n),r=e.batch.batchId;try{const s=await Ax(t.localStore,e);P0(t,r,null),R0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qu(t,s)}catch(s){await sl(s)}}async function _D(n,e,t){const r=ke(n);try{const s=await(function(u,d){const f=ke(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(Xe(E!==null,37113),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>f.localDocuments.getDocuments(m,y)))}))})(r.localStore,e);P0(r,e,t),R0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qu(r,s)}catch(s){await sl(s)}}function R0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function P0(n,e,t){const r=ke(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Dm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||k0(n,r)}))}function k0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Dg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),jg(n))}function mw(n,e,t){for(const r of t)r instanceof T0?(n.Au.addReference(r.key,e),yD(n,r)):r instanceof S0?(ce(Ug,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||k0(n,r.key)):Ae(19791,{yu:r})}function yD(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ce(Ug,"New document in limbo: "+t),n.Iu.add(r),jg(n))}function jg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ye(lt.fromString(e)),r=n.mu.next();n.Eu.set(r,new aD(t)),n.du=n.du.insert(t,r),p0(n.remoteStore,new ys(Zr(Md(t.path)),r,"TargetPurposeLimboResolution",bd.ue))}}async function Qu(n,e,t){const r=ke(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Ng.Es(f.targetId,m);a.push(E)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,m){const y=ke(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>K.forEach(m,(w=>K.forEach(w.Is,(k=>y.persistence.referenceDelegate.addReference(E,w.targetId,k))).next((()=>K.forEach(w.ds,(k=>y.persistence.referenceDelegate.removeReference(E,w.targetId,k)))))))))}catch(E){if(!ol(E))throw E;ce(xg,"Failed to update sequence numbers: "+E)}for(const E of m){const w=E.targetId;if(!E.fromCache){const k=y.Fs.get(w),L=k.snapshotVersion,B=k.withLastLimboFreeSnapshotVersion(L);y.Fs=y.Fs.insert(w,B)}}})(r.localStore,a))}async function vD(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){ce(Ug,"User change. New user:",e.toKey());const r=await c0(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new oe(H.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qu(t,r.Bs)}}function ED(n,e){const t=ke(n),r=t.Eu.get(e);if(r&&r.lu)return Fe().add(r.key);{let s=Fe();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function N0(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=A0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ED.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mD.bind(null,e),e.hu.J_=rD.bind(null,e.eventManager),e.hu.pu=iD.bind(null,e.eventManager),e}function wD(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_D.bind(null,e),e}class ld{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Cx(this.persistence,new Ix,e.initialUser,this.serializer)}Du(e){return new u0(kg.Vi,this.serializer)}bu(e){return new Dx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ld.provider={build:()=>new ld};class ID extends ld{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Xe(this.persistence.referenceDelegate instanceof od,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ax(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?On.withCacheSize(this.cacheSizeBytes):On.DEFAULT;return new u0((r=>od.Vi(r,t)),this.serializer)}}class bm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vD.bind(null,this.syncEngine),await eD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nD})()}createDatastore(e){const t=Wd(e.databaseInfo.databaseId),r=(function(a){return new Vx(a)})(e.databaseInfo);return(function(a,u,d,f){return new Bx(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new Wx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>pw(this.syncEngine,t,0)),(function(){return lw.C()?new lw:new bx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,m,y){const E=new lD(s,a,u,d,f,m);return y&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=ke(s);ce(Ro,"RemoteStore shutting down."),a.Ia.add(5),await Ku(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bm.provider={build:()=>new bm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class x0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):bi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="FirestoreClient";class TD{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=mn.UNAUTHENTICATED,this.clientId=yg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(Ms,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(Ms,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Jp(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Ms,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await c0(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ns("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ns("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function gw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await SD(n);ce(Ms,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>cw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>cw(e.remoteStore,s))),n._onlineComponents=e}async function SD(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Ms,"Using user provided OfflineComponentProvider");try{await Jp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ns("Error using user provided cache. Falling back to memory cache: "+t),await Jp(n,new ld)}}else ce(Ms,"Using default OfflineComponentProvider"),await Jp(n,new ID(void 0));return n._offlineComponents}async function D0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Ms,"Using user provided OnlineComponentProvider"),await gw(n,n._uninitializedComponentsProvider._online)):(ce(Ms,"Using default OnlineComponentProvider"),await gw(n,new bm))),n._onlineComponents}function CD(n){return D0(n).then((e=>e.syncEngine))}async function Om(n){const e=await D0(n),t=e.eventManager;return t.onListen=uD.bind(null,e.syncEngine),t.onUnlisten=dD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fD.bind(null,e.syncEngine),t}function AD(n,e,t={}){const r=new Ss;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const y=new x0({next:w=>{y.Ou(),u.enqueueAndForget((()=>w0(a,E)));const k=w.docs.has(d);!k&&w.fromCache?m.reject(new oe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&f&&f.source==="server"?m.reject(new oe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),E=new I0(Md(d.path),y,{includeMetadataChanges:!0,ka:!0});return E0(a,E)})(await Om(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function b0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="firestore.googleapis.com",yw=!0;class vw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=O0,this.ssl=yw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:yw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sx)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new L1;switch(r.type){case"firstParty":return new U1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=_w.get(t);r&&(ce("ComponentProvider","Removing Datastore"),_w.delete(t),r.terminate())})(this),Promise.resolve()}}function RD(n,e,t,r={}){var s;n=Kn(n,Hd);const a=Bs(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(rg(`https://${f}`),ig("Firestore",!0)),u.host!==O0&&u.host!==f&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Ni(m,d)&&(n._setSettings(m),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=mn.MOCK_USER;else{y=II(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new mn(w)}n._authCredentials=new M1(new yT(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class St{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}toJSON(){return{type:St._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(qu(t,St._jsonSchema))return new St(e,r||null,new ye(lt.fromString(t.referencePath)))}}St._jsonSchemaVersion="firestore/documentReference/1.0",St._jsonSchema={type:Ot("string",St._jsonSchemaVersion),referencePath:Ot("string")};class As extends qs{constructor(e,t,r){super(e,t,Md(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new ye(e))}withConverter(e){return new As(this.firestore,e,this._path)}}function Or(n,e,...t){if(n=et(n),ET("collection","path",e),n instanceof Hd){const r=lt.fromString(e,...t);return DE(r),new As(n,null,r)}{if(!(n instanceof St||n instanceof As))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return DE(r),new As(n.firestore,null,r)}}function sn(n,e,...t){if(n=et(n),arguments.length===1&&(e=yg.newId()),ET("doc","path",e),n instanceof Hd){const r=lt.fromString(e,...t);return xE(r),new St(n,null,new ye(r))}{if(!(n instanceof St||n instanceof As))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return xE(r),new St(n.firestore,n instanceof As?n.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="AsyncQueue";class ww{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new d0(this,"async_queue_retry"),this.oc=()=>{const r=Xp();r&&ce(Ew,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ss;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ol(e))throw e;ce(Ew,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,bi("INTERNAL UNHANDLED ERROR: ",Iw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Mg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ae(47125,{hc:Iw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Iw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Tw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Li extends Hd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ww,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ww(e),this._firestoreClient=void 0,await e}}}function PD(n,e){const t=typeof n=="object"?n:ag(),r=typeof n=="string"?n:ed,s=Rd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=vI("firestore");a&&RD(s,...a)}return s}function Gd(n){if(n._terminated)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kD(n),n._firestoreClient}function kD(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,m,y){return new tN(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,b0(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new TD(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(on.fromBase64String(e))}catch(t){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ar(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ar._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qu(e,ar._jsonSchema))return ar.fromBase64String(e.bytes)}}ar._jsonSchemaVersion="firestore/bytes/1.0",ar._jsonSchema={type:Ot("string",ar._jsonSchemaVersion),bytes:Ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ti._jsonSchemaVersion}}static fromJSON(e){if(qu(e,ti._jsonSchema))return new ti(e.latitude,e.longitude)}}ti._jsonSchemaVersion="firestore/geoPoint/1.0",ti._jsonSchema={type:Ot("string",ti._jsonSchemaVersion),latitude:Ot("number"),longitude:Ot("number")};/**
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
 */class ni{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qu(e,ni._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ni(e.vectorValues);throw new oe(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ni._jsonSchemaVersion="firestore/vectorValue/1.0",ni._jsonSchema={type:Ot("string",ni._jsonSchemaVersion),vectorValues:Ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=/^__.*__$/;class xD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hu(e,this.data,t,this.fieldTransforms)}}class L0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $s(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function M0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class Kd{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ud(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(M0(this.Ec)&&ND.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class DD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wd(e)}Dc(e,t,r,s=!1){return new Kd({Ec:e,methodName:t,bc:r,path:rn.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ju(n){const e=n._freezeSettings(),t=Wd(n._databaseId);return new DD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bg(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);$g("Data must be an object, but it was:",u,r);const d=U0(r,u);let f,m;if(a.merge)f=new Hn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const w=Lm(e,E,t);if(!u.contains(w))throw new oe(H.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);B0(y,w)||y.push(w)}f=new Hn(y),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new xD(new Ln(d),f,m)}class Zu extends Xu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zu}}function bD(n,e,t){return new Kd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zg extends Xu{_toFieldTransform(e){return new QT(e.path,new xu)}isEqual(e){return e instanceof zg}}class Wg extends Xu{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=bD(this,e,!0),r=this.vc.map((a=>ul(a,t))),s=new qa(r);return new QT(e.path,s)}isEqual(e){return e instanceof Wg&&Ni(this.vc,e.vc)}}function V0(n,e,t,r){const s=n.Dc(1,e,t);$g("Data must be an object, but it was:",s,r);const a=[],u=Ln.empty();Ws(r,((f,m)=>{const y=qg(e,f,t);m=et(m);const E=s.gc(y);if(m instanceof Zu)a.push(y);else{const w=ul(m,E);w!=null&&(a.push(y),u.set(y,w))}}));const d=new Hn(a);return new L0(u,d,s.fieldTransforms)}function F0(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Lm(e,r,t)],f=[s];if(a.length%2!=0)throw new oe(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)d.push(Lm(e,a[w])),f.push(a[w+1]);const m=[],y=Ln.empty();for(let w=d.length-1;w>=0;--w)if(!B0(m,d[w])){const k=d[w];let L=f[w];L=et(L);const B=u.gc(k);if(L instanceof Zu)m.push(k);else{const z=ul(L,B);z!=null&&(m.push(k),y.set(k,z))}}const E=new Hn(m);return new L0(y,E,u.fieldTransforms)}function OD(n,e,t,r=!1){return ul(t,n.Dc(r?4:3,e))}function ul(n,e){if(j0(n=et(n)))return $g("Unsupported field value:",e,n),U0(n,e);if(n instanceof Xu)return(function(r,s){if(!M0(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=ul(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=dt.fromDate(r);return{timestampValue:sd(s.serializer,a)}}if(r instanceof dt){const a=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sd(s.serializer,a)}}if(r instanceof ti)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:t0(s.serializer,r._byteString)};if(r instanceof St){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Rg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ni)return(function(u,d){return{mapValue:{fields:{[kT]:{stringValue:NT},[td]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return Sg(d.serializer,m)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Dd(r)}`)})(n,e)}function U0(n,e){const t={};return TT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(n,((r,s)=>{const a=ul(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function j0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof ti||n instanceof ar||n instanceof St||n instanceof Xu||n instanceof ni)}function $g(n,e,t){if(!j0(t)||!wT(t)){const r=Dd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Lm(n,e,t){if((e=et(e))instanceof Yu)return e._internalPath;if(typeof e=="string")return qg(n,e);throw ud("Field path arguments must be of type string or ",n,!1,void 0,t)}const LD=new RegExp("[~\\*/\\[\\]]");function qg(n,e,t){if(e.search(LD)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yu(...e.split("."))._internalPath}catch{throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ud(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new oe(H.INVALID_ARGUMENT,d+n+f)}function B0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MD extends z0{data(){return super.data()}}function Qd(n,e){return typeof e=="string"?qg(n,e):e instanceof Yu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hg{}class Gg extends Hg{}function Po(n,e,...t){let r=[];e instanceof Hg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Kg)).length,d=a.filter((f=>f instanceof Yd)).length;if(u>1||u>0&&d>0)throw new oe(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Yd extends Gg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yd(e,t,r)}_apply(e){const t=this._parse(e);return $0(e._query,t),new qs(e.firestore,e.converter,Sm(e._query,t))}_parse(e){const t=Ju(e.firestore);return(function(a,u,d,f,m,y,E){let w;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new oe(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Cw(E,y);const L=[];for(const B of E)L.push(Sw(f,a,B));w={arrayValue:{values:L}}}else w=Sw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Cw(E,y),w=OD(d,u,E,y==="in"||y==="not-in");return bt.create(m,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cd(n,e,t){const r=e,s=Qd("where",n);return Yd._create(s,r,t)}class Kg extends Hg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:br.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)$0(u,f),u=Sm(u,f)})(e._query,t),new qs(e.firestore,e.converter,Sm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends Gg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nu(a,u)})(e._query,this._field,this._direction);return new qs(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new al(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function W0(n,e="asc"){const t=e,r=Qd("orderBy",n);return Qg._create(r,t)}class Yg extends Gg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Yg(e,t,r)}_apply(e){return new qs(e.firestore,e.converter,rd(e._query,this._limit,this._limitType))}}function ko(n){return Yg._create("limit",n,"F")}function Sw(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new oe(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FT(e)&&t.indexOf("/")!==-1)throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(lt.fromString(t));if(!ye.isDocumentKey(r))throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jE(n,new ye(r))}if(t instanceof St)return jE(n,t._key);throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dd(t)}.`)}function Cw(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $0(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class FD{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ws(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[td].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>Pt(u.doubleValue)));return new ni(a)}convertGeoPoint(e){return new ti(Pt(e.latitude),Pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ld(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ru(e));default:return null}}convertTimestamp(e){const t=Ds(e);return new dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);Xe(a0(r),9688,{name:e});const s=new Pu(r.get(1),r.get(3)),a=new ye(r.popFirst(5));return s.isEqual(t)||bi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class To extends z0{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=To._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}To._jsonSchemaVersion="firestore/documentSnapshot/1.0",To._jsonSchema={type:Ot("string",To._jsonSchemaVersion),bundleSource:Ot("string","DocumentSnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class jh extends To{data(e={}){return super.data(e)}}class La{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new lu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new jh(this._firestore,this._userDataWriter,r.key,r,new lu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new jh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new lu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new jh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new lu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:UD(d.type),doc:f,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){n=Kn(n,St);const e=Kn(n.firestore,Li);return AD(Gd(e),n._key).then((t=>G0(e,n,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:Ot("string",La._jsonSchemaVersion),bundleSource:Ot("string","QuerySnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class q0 extends FD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function Xd(n,e,t){n=Kn(n,St);const r=Kn(n.firestore,Li),s=Xg(n.converter,e,t);return ec(r,[Bg(Ju(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tn.none())])}function Ka(n,e,t,...r){n=Kn(n,St);const s=Kn(n.firestore,Li),a=Ju(s);let u;return u=typeof(e=et(e))=="string"||e instanceof Yu?F0(a,"updateDoc",n._key,e,t,r):V0(a,"updateDoc",n._key,e),ec(s,[u.toMutation(n._key,Tn.exists(!0))])}function jD(n){return ec(Kn(n.firestore,Li),[new Bd(n._key,Tn.none())])}function H0(n,e){const t=Kn(n.firestore,Li),r=sn(n),s=Xg(n.converter,e);return ec(t,[Bg(Ju(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Tn.exists(!1))]).then((()=>r))}function Pi(n,...e){var t,r,s;n=et(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Tw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Tw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof St)m=Kn(n.firestore,Li),y=Md(n._key.path),f={next:E=>{e[u]&&e[u](G0(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=Kn(n,qs);m=Kn(E.firestore,Li),y=E._query;const w=new q0(m);f={next:k=>{e[u]&&e[u](new La(m,w,E,k))},error:e[u+1],complete:e[u+2]},VD(n._query)}return(function(w,k,L,B){const z=new x0(B),Q=new I0(k,z,L);return w.asyncQueue.enqueueAndForget((async()=>E0(await Om(w),Q))),()=>{z.Ou(),w.asyncQueue.enqueueAndForget((async()=>w0(await Om(w),Q)))}})(Gd(m),y,d,f)}function ec(n,e){return(function(r,s){const a=new Ss;return r.asyncQueue.enqueueAndForget((async()=>pD(await CD(r),s,a))),a.promise})(Gd(n),e)}function G0(n,e,t){const r=t.docs.get(e._key),s=new q0(n);return new To(n,s,e._key,r,new lu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ju(e)}set(e,t,r){this._verifyNotCommitted();const s=Zp(e,this._firestore),a=Xg(s.converter,t,r),u=Bg(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,Tn.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const a=Zp(e,this._firestore);let u;return u=typeof(t=et(t))=="string"||t instanceof Yu?F0(this._dataReader,"WriteBatch.update",a._key,t,r,s):V0(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(u.toMutation(a._key,Tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Zp(e,this._firestore);return this._mutations=this._mutations.concat(new Bd(t._key,Tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zp(n,e){if((n=et(n)).firestore!==e)throw new oe(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(){return new Zu("deleteField")}function Gn(){return new zg("serverTimestamp")}function Aw(...n){return new Wg("arrayUnion",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(n){return Gd(n=Kn(n,Li)),new BD(n,(e=>ec(n,e)))}(function(e,t=!0){(function(s){il=s})(bo),So(new ks("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Li(new V1(r.getProvider("auth-internal")),new j1(u,r.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pu(m.options.projectId,y)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Yr(AE,RE,e),Yr(AE,RE,"esm2017")})();var Rw={};const Pw="@firebase/database",kw="1.0.20";/**
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
 */let K0="";function $D(n){K0=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Iu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ii(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qD(e)}}catch{}return new HD},Io=Q0("localStorage"),GD=Q0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Ad("@firebase/database"),KD=(function(){let n=1;return function(){return n++}})(),Y0=function(n){const e=aR(n),t=new rR;t.update(e);const r=t.digest();return ng.encodeByteArray(r)},tc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=tc.apply(null,r):typeof r=="object"?e+=Ut(r):e+=r,e+=" "}return e};let _u=null,Nw=!0;const QD=function(n,e){te(!0,"Can't turn on custom loggers persistently."),Ma.logLevel=Ve.VERBOSE,_u=Ma.log.bind(Ma)},Yt=function(...n){if(Nw===!0&&(Nw=!1,_u===null&&GD.get("logging_enabled")===!0&&QD()),_u){const e=tc.apply(null,n);_u(e)}},nc=function(n){return function(...e){Yt(n,...e)}},Mm=function(...n){const e="FIREBASE INTERNAL ERROR: "+tc(...n);Ma.error(e)},Mi=function(...n){const e=`FIREBASE FATAL ERROR: ${tc(...n)}`;throw Ma.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+tc(...n);Ma.warn(e)},YD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},XD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qa="[MIN_NAME]",No="[MAX_NAME]",Vo=function(n,e){if(n===e)return 0;if(n===Qa||e===No)return-1;if(e===Qa||n===No)return 1;{const t=xw(n),r=xw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},JD=function(n,e){return n===e?0:n<e?-1:1},Zl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},Jg=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ut(e[r]),t+=":",t+=Jg(n[e[r]]);return t+="}",t},X0=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Xt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const J0=function(n){te(!Jd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let w=parseInt(y.substr(f,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},ZD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tb(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const nb=new RegExp("^-?(0*)\\d{1,10}$"),rb=-2147483648,ib=2147483647,xw=function(n){if(nb.test(n)){const e=Number(n);if(e>=rb&&e<=ib)return e}return null},cl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},sb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ob{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,or(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class Bh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="5",Z0="v",eS="s",tS="r",nS="f",rS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iS="ls",sS="p",Vm="ac",oS="websocket",aS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function lb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function uS(n,e,t){te(typeof e=="string","typeof type must == string"),te(typeof t=="object","typeof params must == object");let r;if(e===oS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===aS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lb(n)&&(t.ns=n.namespace);const s=[];return Xt(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.counters_={}}incrementCounter(e,t=1){ii(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return MA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={},tm={};function e_(n){const e=n.toString();return em[e]||(em[e]=new ub),em[e]}function cb(n,e){const t=n.toString();return tm[t]||(tm[t]=e()),tm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&cl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="start",db="close",fb="pLPCommand",pb="pRTLPCB",cS="id",hS="pw",dS="ser",mb="cb",gb="seg",_b="ts",yb="d",vb="dframe",fS=1870,pS=30,Eb=fS-pS,wb=25e3,Ib=3e4;class Na{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nc(e),this.stats_=e_(t),this.urlFn=f=>(this.appCheckToken&&(f[Vm]=this.appCheckToken),uS(t,aS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ib)),XD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new t_((...a)=>{const[u,d,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Dw)this.id=d,this.password=f;else if(u===db)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Dw]="t",r[dS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Z0]=Zg,this.transportSessionId&&(r[eS]=this.transportSessionId),this.lastSessionId&&(r[iS]=this.lastSessionId),this.applicationId&&(r[sS]=this.applicationId),this.appCheckToken&&(r[Vm]=this.appCheckToken),typeof location<"u"&&location.hostname&&rS.test(location.hostname)&&(r[tS]=nS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Na.forceAllow_=!0}static forceDisallow(){Na.forceDisallow_=!0}static isAvailable(){return Na.forceAllow_?!0:!Na.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZD()&&!eb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=gI(t),s=X0(r,Eb);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[vb]="t",r[cS]=e,r[hS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class t_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KD(),window[fb+this.uniqueCallbackIdentifier]=e,window[pb+this.uniqueCallbackIdentifier]=t,this.myIFrame=t_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Yt("frame writing exception"),d.stack&&Yt(d.stack),Yt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cS]=this.myID,e[hS]=this.myPW,e[dS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pS+r.length<=fS;){const u=this.pendingSegs.shift();r=r+"&"+gb+s+"="+u.seg+"&"+_b+s+"="+u.ts+"&"+yb+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(wb)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=16384,Sb=45e3;let hd=null;typeof MozWebSocket<"u"?hd=MozWebSocket:typeof WebSocket<"u"&&(hd=WebSocket);class Rr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nc(this.connId),this.stats_=e_(t),this.connURL=Rr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[Z0]=Zg,typeof location<"u"&&location.hostname&&rS.test(location.hostname)&&(u[tS]=nS),t&&(u[eS]=t),r&&(u[iS]=r),s&&(u[Vm]=s),a&&(u[sS]=a),uS(e,oS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Io.set("previous_websocket_failure",!0);try{let r;KA(),this.mySock=new hd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hd!==null&&!Rr.forceDisallow_}static previouslyFailed(){return Io.isInMemoryStorage||Io.get("previous_websocket_failure")===!0}markConnectionHealthy(){Io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Iu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=X0(t,Tb);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sb))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rr.responsesRequiredToBeHealthy=2;Rr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static get ALL_TRANSPORTS(){return[Na,Rr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Rr&&Rr.isAvailable();let r=t&&!Rr.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rr];else{const s=this.transports_=[];for(const a of bu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);bu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=6e4,Ab=5e3,Rb=10*1024,Pb=100*1024,nm="t",bw="d",kb="s",Ow="r",Nb="e",Lw="o",Mw="a",Vw="n",Fw="p",xb="h";class Db{constructor(e,t,r,s,a,u,d,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nc("c:"+this.id+":"),this.transportManager_=new bu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nm in e){const t=e[nm];t===Mw?this.upgradeIfSecondaryHealthy_():t===Ow?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Lw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Zl("t",e),r=Zl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Zl("t",e),r=Zl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Zl(nm,e);if(bw in e){const r=e[bw];if(t===xb){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Vw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===kb?this.onConnectionShutdown_(r):t===Ow?this.onReset_(r):t===Nb?Mm("Server Error: "+r):t===Lw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zg!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),yu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Cb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ab))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){te(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends gS{static getInstance(){return new dd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=32,jw=768;class tt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Qe(){return new tt("")}function be(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Vs(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new tt(n.pieces_,e)}function n_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function bb(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ou(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _S(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new tt(e,0)}function vt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new tt(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function In(n,e){const t=be(n),r=be(e);if(t===null)return e;if(t===r)return In(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ob(n,e){const t=Ou(n,0),r=Ou(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=Vo(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function r_(n,e){if(Vs(n)!==Vs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function lr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Vs(n)>Vs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Lb{constructor(e,t){this.errorPrefix_=t,this.parts_=Ou(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cd(this.parts_[r]);yS(this)}}function Mb(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Cd(e),yS(n)}function Vb(n){const e=n.parts_.pop();n.byteLength_-=Cd(e),n.parts_.length>0&&(n.byteLength_-=1)}function yS(n){if(n.byteLength_>jw)throw new Error(n.errorPrefix_+"has a key path longer than "+jw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Uw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uw+") or object contains a cycle "+Eo(n))}function Eo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends gS{static getInstance(){return new i_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=1e3,Fb=300*1e3,Bw=30*1e3,Ub=1.3,jb=3e4,Bb="server_kill",zw=3;class ki extends mS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=ki.nextPersistentConnectionId_++,this.log_=nc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eu,this.maxReconnectDelay_=Fb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");i_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Ut(a)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Qr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;ki.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ii(e,"w")){const r=Ua(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Mm("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jb&&(this.reconnectDelay_=eu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ub)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ki.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){te(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Yt("getToken() completed but was canceled"):(Yt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,d=new Db(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,k=>{Sn(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(Bb)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Sn(E),f())}}}interrupt(e){Yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$h(this.interruptReasons_)&&(this.reconnectDelay_=eu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Jg(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new tt(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Yt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zw&&(this.reconnectDelay_=Bw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Yt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+K0.replace(/\./g,"-")]=1,sg()?e["framework.cordova"]=1:TI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dd.getInstance().currentlyOnline();return $h(this.interruptReasons_)&&e}}ki.nextPersistentConnectionId_=0;ki.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Me(Qa,e),s=new Me(Qa,t);return this.compare(r,s)!==0}minPost(){return Me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh;class vS extends Zd{static get __EMPTY_NODE(){return kh}static set __EMPTY_NODE(e){kh=e}compare(e,t){return Vo(e.name,t.name)}isDefinedOn(e){throw tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(No,kh)}makePost(e,t){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,kh)}toString(){return".key"}}const Va=new vS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Qt.RED,this.left=s??Mn.EMPTY_NODE,this.right=a??Mn.EMPTY_NODE}copy(e,t,r,s,a){return new Qt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Mn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qt.RED=!0;Qt.BLACK=!1;class zb{copy(e,t,r,s,a){return this}insert(e,t,r){return new Qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mn{constructor(e,t=Mn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Mn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Mn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nh(this.root_,null,this.comparator_,!0,e)}}Mn.EMPTY_NODE=new zb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(n,e){return Vo(n.name,e.name)}function s_(n,e){return Vo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;function $b(n){Fm=n}const ES=function(n){return typeof n=="number"?"number:"+J0(n):"string:"+n},wS=function(n){if(n.isLeafNode()){const e=n.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ii(e,".sv"),"Priority must be a string or number.")}else te(n===Fm||n.isEmpty(),"priority of unexpected type.");te(n===Fm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ww;class Gt{static set __childrenNodeConstructor(e){Ww=e}static get __childrenNodeConstructor(){return Ww}constructor(e,t=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:be(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=be(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(te(r!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ES(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=J0(this.value_):e+=this.value_,this.lazyHash_=Y0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Gt.VALUE_TYPE_ORDER.indexOf(t),a=Gt.VALUE_TYPE_ORDER.indexOf(r);return te(s>=0,"Unknown leaf type: "+t),te(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IS,TS;function qb(n){IS=n}function Hb(n){TS=n}class Gb extends Zd{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Vo(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(No,new Gt("[PRIORITY-POST]",TS))}makePost(e,t){const r=IS(e);return new Me(t,new Gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Et=new Gb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=Math.log(2);class Qb{constructor(e){const t=a=>parseInt(Math.log(a)/Kb,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fd=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,w;if(y===0)return null;if(y===1)return E=n[f],w=t?t(E):E,new Qt(w,E.node,Qt.BLACK,null,null);{const k=parseInt(y/2,10)+f,L=s(f,k),B=s(k+1,m);return E=n[k],w=t?t(E):E,new Qt(w,E.node,Qt.BLACK,L,B)}},a=function(f){let m=null,y=null,E=n.length;const w=function(L,B){const z=E-L,Q=E;E-=L;const J=s(z+1,Q),ie=n[z],le=t?t(ie):ie;k(new Qt(le,ie.node,B,null,J))},k=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<f.count;++L){const B=f.nextBitIsOne(),z=Math.pow(2,f.count-(L+1));B?w(z,Qt.BLACK):(w(z,Qt.BLACK),w(z,Qt.RED))}return y},u=new Qb(n.length),d=a(u);return new Mn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rm;const Sa={};class Ri{static get Default(){return te(Sa&&Et,"ChildrenNode.ts has not been loaded"),rm=rm||new Ri({".priority":Sa},{".priority":Et}),rm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ua(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Mn?t:null}hasIndex(e){return ii(this.indexSet_,e.toString())}addIndex(e,t){te(e!==Va,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Me.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=fd(r,e.getCompare()):d=Sa;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=d,new Ri(y,m)}addToIndexes(e,t){const r=qh(this.indexes_,(s,a)=>{const u=Ua(this.indexSet_,a);if(te(u,"Missing index implementation for "+a),s===Sa)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Me.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),fd(d,u.getCompare())}else return Sa;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Me(e.name,d))),f.insert(e,e.node)}});return new Ri(r,this.indexSet_)}removeFromIndexes(e,t){const r=qh(this.indexes_,s=>{if(s===Sa)return s;{const a=t.get(e.name);return a?s.remove(new Me(e.name,a)):s}});return new Ri(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu;class Ce{static get EMPTY_NODE(){return tu||(tu=new Ce(new Mn(s_),null,Ri.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&wS(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tu}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?tu:t}}getChild(e){const t=be(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(te(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Me(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?tu:this.priorityNode_;return new Ce(s,u,a)}}updateChild(e,t){const r=be(e);if(r===null)return t;{te(be(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(Et,(u,d)=>{t[u]=d.val(e),r++,a&&Ce.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ES(this.getPriority().val())+":"),this.forEachChild(Et,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Y0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Me(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Me.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rc?-1:0}withIndex(e){if(e===Va||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Va||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Et),s=t.getIterator(Et);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Va?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yb extends Ce{constructor(){super(new Mn(s_),Ce.EMPTY_NODE,Ri.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const rc=new Yb;Object.defineProperties(Me,{MIN:{value:new Me(Qa,Ce.EMPTY_NODE)},MAX:{value:new Me(No,rc)}});vS.__EMPTY_NODE=Ce.EMPTY_NODE;Gt.__childrenNodeConstructor=Ce;$b(rc);Hb(rc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=!0;function Tt(n,e=null){if(n===null)return Ce.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Gt(t,Tt(e))}if(!(n instanceof Array)&&Xb){const t=[];let r=!1;if(Xt(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Tt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Me(u,f)))}}),t.length===0)return Ce.EMPTY_NODE;const a=fd(t,Wb,u=>u.name,s_);if(r){const u=fd(t,Et.getCompare());return new Ce(a,Tt(e),new Ri({".priority":u},{".priority":Et}))}else return new Ce(a,Tt(e),Ri.Default)}else{let t=Ce.EMPTY_NODE;return Xt(n,(r,s)=>{if(ii(n,r)&&r.substring(0,1)!=="."){const a=Tt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Tt(e))}}qb(Tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb extends Zd{constructor(e){super(),this.indexPath_=e,te(!Le(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Vo(e.name,t.name):a}makePost(e,t){const r=Tt(e),s=Ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new Me(t,s)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,rc);return new Me(No,e)}toString(){return Ou(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb extends Zd{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Vo(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const r=Tt(e);return new Me(t,r)}toString(){return".value"}}const eO=new Zb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(n){return{type:"value",snapshotNode:n}}function Ya(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Lu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function tO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){te(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Lu(t,d)):te(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Ya(t,r)):u.trackChildChange(Mu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Et,(s,a)=>{t.hasChild(s)||r.trackChildChange(Lu(s,a))}),t.isLeafNode()||t.forEachChild(Et,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Mu(s,a,u))}else r.trackChildChange(Ya(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ce.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.indexedFilter_=new o_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vu.getStartPost_(e),this.endPost_=Vu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Me(t,r))||(r=Ce.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ce.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ce.EMPTY_NODE);const a=this;return t.forEachChild(Et,(u,d)=>{a.matches(new Me(u,d))||(s=s.updateImmediateChild(u,Ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Vu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Me(t,r))||(r=Ce.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Ce.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ce.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ce.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(w,k)=>E(k,w)}else u=this.index_.getCompare();const d=e;te(d.numChildren()===this.limit_,"");const f=new Me(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let w=s.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=s.getChildAfterChild(this.index_,w,this.reverse_);const k=w==null?1:u(w,f);if(y&&!r.isEmpty()&&k>=0)return a!=null&&a.trackChildChange(Mu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Lu(t,E));const B=d.updateImmediateChild(t,Ce.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(Ya(w.name,w.node)),B.updateImmediateChild(w.name,w.node)):B}}else return r.isEmpty()?e:y&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Lu(m.name,m.node)),a.trackChildChange(Ya(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Ce.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qa}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:No}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new a_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rO(n){return n.loadsAllData()?new o_(n.getIndex()):n.hasLimit()?new nO(n):new Vu(n)}function $w(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Et?t="$priority":n.index_===eO?t="$value":n.index_===Va?t="$key":(te(n.index_ instanceof Jb,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ut(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ut(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ut(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ut(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function qw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Et&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends mS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=nc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=pd.getListenId_(e,r),d={};this.listens_[u]=d;const f=$w(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),Ua(this.listens_,u)===d){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",s(w,null)}})}unlisten(e,t){const r=pd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=$w(e._queryParams),r=e._path.toString(),s=new Qr;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+nl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Iu(d.responseText)}catch{Sn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Sn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return{value:null,children:new Map}}function hl(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=be(e);n.children.has(r)||n.children.set(r,md());const s=n.children.get(r);e=rt(e),hl(s,e,t)}}function Um(n,e){if(Le(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Et,(r,s)=>{hl(n,new tt(r),s)}),Um(n,e)}}else if(n.children.size>0){const t=be(e);return e=rt(e),n.children.has(t)&&Um(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function jm(n,e,t){n.value!==null?t(e,n.value):sO(n,(r,s)=>{const a=new tt(e.toString()+"/"+r);jm(s,a,t)})}function sO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Xt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=10*1e3,aO=30*1e3,lO=300*1e3;class uO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new oO(e);const r=Hw+(aO-Hw)*Math.random();yu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Xt(e,(s,a)=>{a>0&&ii(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),yu(this.reportStats_.bind(this),Math.floor(Math.random()*2*lO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kr||(kr={}));function l_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function u_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function c_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=kr.ACK_USER_WRITE,this.source=l_()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new tt(e));return new gd(Qe(),t,this.revert)}}else return te(be(this.path)===e,"operationForChild called for unrelated child."),new gd(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.source=e,this.path=t,this.type=kr.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new Fu(this.source,Qe()):new Fu(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=kr.OVERWRITE}operationForChild(e){return Le(this.path)?new xo(this.source,Qe(),this.snap.getImmediateChild(e)):new xo(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=kr.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new tt(e));return t.isEmpty()?null:t.value?new xo(this.source,Qe(),t.value):new Xa(this.source,Qe(),t)}else return te(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xa(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hO(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(tO(u.childName,u.snapshotNode))}),nu(n,s,"child_removed",e,r,t),nu(n,s,"child_added",e,r,t),nu(n,s,"child_moved",a,r,t),nu(n,s,"child_changed",e,r,t),nu(n,s,"value",e,r,t),s}function nu(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>fO(n,d,f)),u.forEach(d=>{const f=dO(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function dO(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function fO(n,e,t){if(e.childName==null||t.childName==null)throw tl("Should only compare child_ events.");const r=new Me(e.childName,e.snapshotNode),s=new Me(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n,e){return{eventCache:n,serverCache:e}}function vu(n,e,t,r){return ef(new Fs(e,t,r),n.serverCache)}function CS(n,e,t,r){return ef(n.eventCache,new Fs(e,t,r))}function _d(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Do(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;const pO=()=>(im||(im=new Mn(JD)),im);class at{static fromObject(e){let t=new at(null);return Xt(e,(r,s)=>{t=t.set(new tt(r),s)}),t}constructor(e,t=pO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Qe(),value:this.value};if(Le(e))return null;{const r=be(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(rt(e),t);return a!=null?{path:vt(new tt(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=be(e),r=this.children.get(t);return r!==null?r.subtree(rt(e)):new at(null)}}set(e,t){if(Le(e))return new at(t,this.children);{const r=be(e),a=(this.children.get(r)||new at(null)).set(rt(e),t),u=this.children.insert(r,a);return new at(this.value,u)}}remove(e){if(Le(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const t=be(e),r=this.children.get(t);if(r){const s=r.remove(rt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new at(null):new at(this.value,a)}else return this}}get(e){if(Le(e))return this.value;{const t=be(e),r=this.children.get(t);return r?r.get(rt(e)):null}}setTree(e,t){if(Le(e))return t;{const r=be(e),a=(this.children.get(r)||new at(null)).setTree(rt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new at(this.value,u)}}fold(e){return this.fold_(Qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(vt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Qe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Le(e))return null;{const a=be(e),u=this.children.get(a);return u?u.findOnPath_(rt(e),vt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Qe(),t)}foreachOnPath_(e,t,r){if(Le(e))return this;{this.value&&r(t,this.value);const s=be(e),a=this.children.get(s);return a?a.foreachOnPath_(rt(e),vt(t,s),r):new at(null)}}foreach(e){this.foreach_(Qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(vt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.writeTree_=e}static empty(){return new xr(new at(null))}}function Eu(n,e,t){if(Le(e))return new xr(new at(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=In(s,e);return a=a.updateChild(u,t),new xr(n.writeTree_.set(s,a))}else{const s=new at(t),a=n.writeTree_.setTree(e,s);return new xr(a)}}}function Bm(n,e,t){let r=n;return Xt(t,(s,a)=>{r=Eu(r,vt(e,s),a)}),r}function Gw(n,e){if(Le(e))return xr.empty();{const t=n.writeTree_.setTree(e,new at(null));return new xr(t)}}function zm(n,e){return Fo(n,e)!=null}function Fo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(In(t.path,e)):null}function Kw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Et,(r,s)=>{e.push(new Me(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Me(r,s.value))}),e}function Rs(n,e){if(Le(e))return n;{const t=Fo(n,e);return t!=null?new xr(new at(t)):new xr(n.writeTree_.subtree(e))}}function Wm(n){return n.writeTree_.isEmpty()}function Ja(n,e){return AS(Qe(),n.writeTree_,e)}function AS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(te(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=AS(vt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(vt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n,e){return NS(e,n)}function mO(n,e,t,r,s){te(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Eu(n.visibleWrites,e,t)),n.lastWriteId=r}function gO(n,e,t,r){te(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Bm(n.visibleWrites,e,t),n.lastWriteId=r}function _O(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function yO(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);te(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&vO(d,r.path)?s=!1:lr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return EO(n),!0;if(r.snap)n.visibleWrites=Gw(n.visibleWrites,r.path);else{const d=r.children;Xt(d,f=>{n.visibleWrites=Gw(n.visibleWrites,vt(r.path,f))})}return!0}else return!1}function vO(n,e){if(n.snap)return lr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lr(vt(n.path,t),e))return!0;return!1}function EO(n){n.visibleWrites=RS(n.allWrites,wO,Qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function wO(n){return n.visible}function RS(n,e,t){let r=xr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)lr(t,u)?(d=In(t,u),r=Eu(r,d,a.snap)):lr(u,t)&&(d=In(u,t),r=Eu(r,Qe(),a.snap.getChild(d)));else if(a.children){if(lr(t,u))d=In(t,u),r=Bm(r,d,a.children);else if(lr(u,t))if(d=In(u,t),Le(d))r=Bm(r,Qe(),a.children);else{const f=Ua(a.children,be(d));if(f){const m=f.getChild(rt(d));r=Eu(r,Qe(),m)}}}else throw tl("WriteRecord should have .snap or .children")}}return r}function PS(n,e,t,r,s){if(!r&&!s){const a=Fo(n.visibleWrites,e);if(a!=null)return a;{const u=Rs(n.visibleWrites,e);if(Wm(u))return t;if(t==null&&!zm(u,Qe()))return null;{const d=t||Ce.EMPTY_NODE;return Ja(u,d)}}}else{const a=Rs(n.visibleWrites,e);if(!s&&Wm(a))return t;if(!s&&t==null&&!zm(a,Qe()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(lr(m.path,e)||lr(e,m.path))},d=RS(n.allWrites,u,e),f=t||Ce.EMPTY_NODE;return Ja(d,f)}}}function IO(n,e,t){let r=Ce.EMPTY_NODE;const s=Fo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Et,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Rs(n.visibleWrites,e);return t.forEachChild(Et,(u,d)=>{const f=Ja(Rs(a,new tt(u)),d);r=r.updateImmediateChild(u,f)}),Kw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Rs(n.visibleWrites,e);return Kw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function TO(n,e,t,r,s){te(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=vt(e,t);if(zm(n.visibleWrites,a))return null;{const u=Rs(n.visibleWrites,a);return Wm(u)?s.getChild(t):Ja(u,s.getChild(t))}}function SO(n,e,t,r){const s=vt(e,t),a=Fo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Rs(n.visibleWrites,s);return Ja(u,r.getNode().getImmediateChild(t))}else return null}function CO(n,e){return Fo(n.visibleWrites,e)}function AO(n,e,t,r,s,a,u){let d;const f=Rs(n.visibleWrites,e),m=Fo(f,Qe());if(m!=null)d=m;else if(t!=null)d=Ja(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),w=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let k=w.getNext();for(;k&&y.length<s;)E(k,r)!==0&&y.push(k),k=w.getNext();return y}else return[]}function RO(){return{visibleWrites:xr.empty(),allWrites:[],lastWriteId:-1}}function yd(n,e,t,r){return PS(n.writeTree,n.treePath,e,t,r)}function h_(n,e){return IO(n.writeTree,n.treePath,e)}function Qw(n,e,t,r){return TO(n.writeTree,n.treePath,e,t,r)}function vd(n,e){return CO(n.writeTree,vt(n.treePath,e))}function PO(n,e,t,r,s,a){return AO(n.writeTree,n.treePath,e,t,r,s,a)}function d_(n,e,t){return SO(n.writeTree,n.treePath,e,t)}function kS(n,e){return NS(vt(n.treePath,e),n.writeTree)}function NS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;te(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),te(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Mu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Lu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Ya(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Mu(r,e.snapshotNode,s.oldSnap));else throw tl("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const xS=new NO;class f_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return d_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Do(this.viewCache_),a=PO(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(n){return{filter:n}}function DO(n,e){te(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function bO(n,e,t,r,s){const a=new kO;let u,d;if(t.type===kr.OVERWRITE){const m=t;m.source.fromUser?u=$m(n,e,m.path,m.snap,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Le(m.path),u=Ed(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===kr.MERGE){const m=t;m.source.fromUser?u=LO(n,e,m.path,m.children,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=qm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===kr.ACK_USER_WRITE){const m=t;m.revert?u=FO(n,e,m.path,r,s,a):u=MO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===kr.LISTEN_COMPLETE)u=VO(n,e,t.path,r,a);else throw tl("Unknown operation type: "+t.type);const f=a.getChanges();return OO(e,u,f),{viewCache:u,changes:f}}function OO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=_d(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(SS(_d(e)))}}function DS(n,e,t,r,s,a){const u=e.eventCache;if(vd(r,t)!=null)return e;{let d,f;if(Le(t))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Do(e),y=m instanceof Ce?m:Ce.EMPTY_NODE,E=h_(r,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=yd(r,Do(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=be(t);if(m===".priority"){te(Vs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=Qw(r,t,y,f);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=rt(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const w=Qw(r,t,u.getNode(),f);w!=null?E=u.getNode().getImmediateChild(m).updateChild(y,w):E=u.getNode().getImmediateChild(m)}else E=d_(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,s,a):d=u.getNode()}}return vu(e,d,u.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function Ed(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Le(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const k=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),k,null)}else{const k=be(t);if(!f.isCompleteForPath(t)&&Vs(t)>1)return e;const L=rt(t),z=f.getNode().getImmediateChild(k).updateChild(L,r);k===".priority"?m=y.updatePriority(f.getNode(),z):m=y.updateChild(f.getNode(),k,z,L,xS,null)}const E=CS(e,m,f.isFullyInitialized()||Le(t),y.filtersNodes()),w=new f_(s,E,a);return DS(n,E,t,s,w,d)}function $m(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const y=new f_(s,e,a);if(Le(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=vu(e,m,!0,n.filter.filtersNodes());else{const E=be(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=vu(e,m,d.isFullyInitialized(),d.isFiltered());else{const w=rt(t),k=d.getNode().getImmediateChild(E);let L;if(Le(w))L=r;else{const B=y.getCompleteChild(E);B!=null?n_(w)===".priority"&&B.getChild(_S(w)).isEmpty()?L=B:L=B.updateChild(w,r):L=Ce.EMPTY_NODE}if(k.equals(L))f=e;else{const B=n.filter.updateChild(d.getNode(),E,L,w,y,u);f=vu(e,B,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function Yw(n,e){return n.eventCache.isCompleteForChild(e)}function LO(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const y=vt(t,f);Yw(e,be(y))&&(d=$m(n,d,y,m,s,a,u))}),r.foreach((f,m)=>{const y=vt(t,f);Yw(e,be(y))||(d=$m(n,d,y,m,s,a,u))}),d}function Xw(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function qm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Le(t)?m=r:m=new at(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,w)=>{if(y.hasChild(E)){const k=e.serverCache.getNode().getImmediateChild(E),L=Xw(n,k,w);f=Ed(n,f,new tt(E),L,s,a,u,d)}}),m.children.inorderTraversal((E,w)=>{const k=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!y.hasChild(E)&&!k){const L=e.serverCache.getNode().getImmediateChild(E),B=Xw(n,L,w);f=Ed(n,f,new tt(E),B,s,a,u,d)}}),f}function MO(n,e,t,r,s,a,u){if(vd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Le(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ed(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Le(t)){let m=new at(null);return f.getNode().forEachChild(Va,(y,E)=>{m=m.set(new tt(y),E)}),qm(n,e,t,m,s,a,d,u)}else return e}else{let m=new at(null);return r.foreach((y,E)=>{const w=vt(t,y);f.isCompleteForPath(w)&&(m=m.set(y,f.getNode().getChild(w)))}),qm(n,e,t,m,s,a,d,u)}}function VO(n,e,t,r,s){const a=e.serverCache,u=CS(e,a.getNode(),a.isFullyInitialized()||Le(t),a.isFiltered());return DS(n,u,t,r,xS,s)}function FO(n,e,t,r,s,a){let u;if(vd(r,t)!=null)return e;{const d=new f_(r,e,s),f=e.eventCache.getNode();let m;if(Le(t)||be(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=yd(r,Do(e));else{const E=e.serverCache.getNode();te(E instanceof Ce,"serverChildren would be complete if leaf node"),y=h_(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=be(t);let E=d_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,rt(t),d,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,Ce.EMPTY_NODE,rt(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=yd(r,Do(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||vd(r,Qe())!=null,vu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new o_(r.getIndex()),a=rO(r);this.processor_=xO(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Ce.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Ce.EMPTY_NODE,d.getNode(),null),y=new Fs(f,u.isFullyInitialized(),s.filtersNodes()),E=new Fs(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=ef(E,y),this.eventGenerator_=new cO(this.query_)}get query(){return this.query_}}function jO(n){return n.viewCache_.serverCache.getNode()}function BO(n){return _d(n.viewCache_)}function zO(n,e){const t=Do(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(be(e)).isEmpty())?t.getChild(e):null}function Jw(n){return n.eventRegistrations_.length===0}function WO(n,e){n.eventRegistrations_.push(e)}function Zw(n,e,t){const r=[];if(t){te(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function eI(n,e,t,r){e.type===kr.MERGE&&e.source.queryId!==null&&(te(Do(n.viewCache_),"We should always have a full cache before handling merges"),te(_d(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=bO(n.processor_,s,e,t,r);return DO(n.processor_,a.viewCache),te(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,bS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function $O(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Et,(a,u)=>{r.push(Ya(a,u))}),t.isFullyInitialized()&&r.push(SS(t.getNode())),bS(n,r,t.getNode(),e)}function bS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return hO(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;class OS{constructor(){this.views=new Map}}function qO(n){te(!wd,"__referenceConstructor has already been defined"),wd=n}function HO(){return te(wd,"Reference.ts has not been loaded"),wd}function GO(n){return n.views.size===0}function p_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return te(a!=null,"SyncTree gave us an op for an invalid query."),eI(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(eI(u,e,t,r));return a}}function LS(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=yd(t,s?r:null),f=!1;d?f=!0:r instanceof Ce?(d=h_(t,r),f=!1):(d=Ce.EMPTY_NODE,f=!1);const m=ef(new Fs(d,f,!1),new Fs(r,s,!1));return new UO(e,m)}return u}function KO(n,e,t,r,s,a){const u=LS(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),WO(u,t),$O(u,t)}function QO(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=Us(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(Zw(m,t,r)),Jw(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(Zw(f,t,r)),Jw(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!Us(n)&&a.push(new(HO())(e._repo,e._path)),{removed:a,events:u}}function MS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ps(n,e){let t=null;for(const r of n.views.values())t=t||zO(r,e);return t}function VS(n,e){if(e._queryParams.loadsAllData())return nf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function FS(n,e){return VS(n,e)!=null}function Us(n){return nf(n)!=null}function nf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id;function YO(n){te(!Id,"__referenceConstructor has already been defined"),Id=n}function XO(){return te(Id,"Reference.ts has not been loaded"),Id}let JO=1;class tI{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=RO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function US(n,e,t,r,s){return mO(n.pendingWriteTree_,e,t,r,s),s?dl(n,new xo(l_(),e,t)):[]}function ZO(n,e,t,r){gO(n.pendingWriteTree_,e,t,r);const s=at.fromObject(t);return dl(n,new Xa(l_(),e,s))}function vs(n,e,t=!1){const r=_O(n.pendingWriteTree_,e);if(yO(n.pendingWriteTree_,e)){let a=new at(null);return r.snap!=null?a=a.set(Qe(),!0):Xt(r.children,u=>{a=a.set(new tt(u),!0)}),dl(n,new gd(r.path,a,t))}else return[]}function ic(n,e,t){return dl(n,new xo(u_(),e,t))}function eL(n,e,t){const r=at.fromObject(t);return dl(n,new Xa(u_(),e,r))}function tL(n,e){return dl(n,new Fu(u_(),e))}function nL(n,e,t){const r=g_(n,t);if(r){const s=__(r),a=s.path,u=s.queryId,d=In(a,e),f=new Fu(c_(u),d);return y_(n,a,f)}else return[]}function Td(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||FS(u,e))){const f=QO(u,e,t,r);GO(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(w,k)=>Us(k));if(y&&!E){const w=n.syncPointTree_.subtree(a);if(!w.isEmpty()){const k=sL(w);for(let L=0;L<k.length;++L){const B=k[L],z=B.query,Q=WS(n,B);n.listenProvider_.startListening(wu(z),Uu(n,z),Q.hashFn,Q.onComplete)}}}!E&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(wu(e),null):m.forEach(w=>{const k=n.queryToTagMap.get(rf(w));n.listenProvider_.stopListening(wu(w),k)}))}oL(n,m)}return d}function jS(n,e,t,r){const s=g_(n,r);if(s!=null){const a=__(s),u=a.path,d=a.queryId,f=In(u,e),m=new xo(c_(d),f,t);return y_(n,u,m)}else return[]}function rL(n,e,t,r){const s=g_(n,r);if(s){const a=__(s),u=a.path,d=a.queryId,f=In(u,e),m=at.fromObject(t),y=new Xa(c_(d),f,m);return y_(n,u,y)}else return[]}function Hm(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(w,k)=>{const L=In(w,s);a=a||Ps(k,L),u=u||Us(k)});let d=n.syncPointTree_.get(s);d?(u=u||Us(d),a=a||Ps(d,Qe())):(d=new OS,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Ce.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((k,L)=>{const B=Ps(L,Qe());B&&(a=a.updateImmediateChild(k,B))}));const m=FS(d,e);if(!m&&!e._queryParams.loadsAllData()){const w=rf(e);te(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const k=aL();n.queryToTagMap.set(w,k),n.tagToQueryMap.set(k,w)}const y=tf(n.pendingWriteTree_,s);let E=KO(d,e,t,y,a,f);if(!m&&!u&&!r){const w=VS(d,e);E=E.concat(lL(n,e,w))}return E}function m_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=In(u,e),m=Ps(d,f);if(m)return m});return PS(s,e,a,t,!0)}function iL(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(m,y)=>{const E=In(m,t);r=r||Ps(y,E)});let s=n.syncPointTree_.get(t);s?r=r||Ps(s,Qe()):(s=new OS,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=r!=null,u=a?new Fs(r,!0,!1):null,d=tf(n.pendingWriteTree_,e._path),f=LS(s,e,d,a?u.getNode():Ce.EMPTY_NODE,a);return BO(f)}function dl(n,e){return BS(e,n.syncPointTree_,null,tf(n.pendingWriteTree_,Qe()))}function BS(n,e,t,r){if(Le(n.path))return zS(n,e,t,r);{const s=e.get(Qe());t==null&&s!=null&&(t=Ps(s,Qe()));let a=[];const u=be(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,y=kS(r,u);a=a.concat(BS(d,f,m,y))}return s&&(a=a.concat(p_(s,n,r,t))),a}}function zS(n,e,t,r){const s=e.get(Qe());t==null&&s!=null&&(t=Ps(s,Qe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=kS(r,u),y=n.operationForChild(u);y&&(a=a.concat(zS(y,d,f,m)))}),s&&(a=a.concat(p_(s,n,r,t))),a}function WS(n,e){const t=e.query,r=Uu(n,t);return{hashFn:()=>(jO(e)||Ce.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?nL(n,t._path,r):tL(n,t._path);{const a=tb(s,t);return Td(n,t,null,a)}}}}function Uu(n,e){const t=rf(e);return n.queryToTagMap.get(t)}function rf(n){return n._path.toString()+"$"+n._queryIdentifier}function g_(n,e){return n.tagToQueryMap.get(e)}function __(n){const e=n.indexOf("$");return te(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new tt(n.substr(0,e))}}function y_(n,e,t){const r=n.syncPointTree_.get(e);te(r,"Missing sync point for query tag that we're tracking");const s=tf(n.pendingWriteTree_,e);return p_(r,t,s,null)}function sL(n){return n.fold((e,t,r)=>{if(t&&Us(t))return[nf(t)];{let s=[];return t&&(s=MS(t)),Xt(r,(a,u)=>{s=s.concat(u)}),s}})}function wu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(XO())(n._repo,n._path):n}function oL(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=rf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function aL(){return JO++}function lL(n,e,t){const r=e._path,s=Uu(n,e),a=WS(n,t),u=n.listenProvider_.startListening(wu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)te(!Us(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,y,E)=>{if(!Le(m)&&y&&Us(y))return[nf(y).query];{let w=[];return y&&(w=w.concat(MS(y).map(k=>k.query))),Xt(E,(k,L)=>{w=w.concat(L)}),w}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(wu(y),Uu(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new v_(t)}node(){return this.node_}}class E_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new E_(this.syncTree_,t)}node(){return m_(this.syncTree_,this.path_)}}const uL=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},nI=function(n,e,t){if(!n||typeof n!="object")return n;if(te(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cL(n[".sv"],e,t);if(typeof n[".sv"]=="object")return hL(n[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cL=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:te(!1,"Unexpected server value: "+n)}},hL=function(n,e,t){n.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&te(!1,"Unexpected increment value: "+r);const s=e.node();if(te(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},$S=function(n,e,t,r){return w_(e,new E_(t,n),r)},qS=function(n,e,t){return w_(n,new v_(e),t)};function w_(n,e,t){const r=n.getPriority().val(),s=nI(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=nI(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Gt(d,Tt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Gt(s))),u.forEachChild(Et,(d,f)=>{const m=w_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function T_(n,e){let t=e instanceof tt?e:new tt(e),r=n,s=be(t);for(;s!==null;){const a=Ua(r.node.children,s)||{children:{},childCount:0};r=new I_(s,r,a),t=rt(t),s=be(t)}return r}function fl(n){return n.node.value}function HS(n,e){n.node.value=e,Gm(n)}function GS(n){return n.node.childCount>0}function dL(n){return fl(n)===void 0&&!GS(n)}function sf(n,e){Xt(n.node.children,(t,r)=>{e(new I_(t,n,r))})}function KS(n,e,t,r){t&&e(n),sf(n,s=>{KS(s,e,!0)})}function fL(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function sc(n){return new tt(n.parent===null?n.name:sc(n.parent)+"/"+n.name)}function Gm(n){n.parent!==null&&pL(n.parent,n.name,n)}function pL(n,e,t){const r=dL(t),s=ii(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Gm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Gm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=/[\[\].#$\/\u0000-\u001F\u007F]/,gL=/[\[\].#$\u0000-\u001F\u007F]/,sm=10*1024*1024,S_=function(n){return typeof n=="string"&&n.length!==0&&!mL.test(n)},QS=function(n){return typeof n=="string"&&n.length!==0&&!gL.test(n)},_L=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),QS(n)},YS=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Jd(n)||n&&typeof n=="object"&&ii(n,".sv")},Km=function(n,e,t,r){of(ja(n,"value"),e,t)},of=function(n,e,t){const r=t instanceof tt?new Lb(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Eo(r));if(typeof e=="function")throw new Error(n+"contains a function "+Eo(r)+" with contents = "+e.toString());if(Jd(e))throw new Error(n+"contains "+e.toString()+" "+Eo(r));if(typeof e=="string"&&e.length>sm/3&&Cd(e)>sm)throw new Error(n+"contains a string greater than "+sm+" utf8 bytes "+Eo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Xt(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!S_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Eo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mb(r,u),of(n,d,r),Vb(r)}),s&&a)throw new Error(n+' contains ".value" child '+Eo(r)+" in addition to actual children.")}},yL=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Ou(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!S_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ob);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&lr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},XS=function(n,e,t,r){const s=ja(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Xt(e,(u,d)=>{const f=new tt(u);if(of(s,d,vt(t,f)),n_(f)===".priority"&&!YS(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),yL(s,a)},vL=function(n,e,t){if(Jd(e))throw new Error(ja(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!YS(e))throw new Error(ja(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},JS=function(n,e,t,r){if(!QS(t))throw new Error(ja(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},EL=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),JS(n,e,t)},uu=function(n,e){if(be(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},wL=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!S_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!_L(t))throw new Error(ja(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function af(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!r_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function ZS(n,e,t){af(n,t),eC(n,r=>r_(r,e))}function ur(n,e,t){af(n,t),eC(n,r=>lr(r,e)||lr(e,r))}function eC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(TL(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TL(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();_u&&Yt("event: "+t.toString()),cl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="repo_interrupt",CL=25;class AL{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=md(),this.transactionQueueTree_=new I_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RL(n,e,t){if(n.stats_=e_(n.repoInfo_),n.forceRestClient_||sb())n.server_=new pd(n.repoInfo_,(r,s,a,u)=>{rI(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>iI(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ki(n.repoInfo_,e,(r,s,a,u)=>{rI(n,r,s,a,u)},r=>{iI(n,r)},r=>{kL(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=cb(n.repoInfo_,()=>new uO(n.stats_,n.server_)),n.infoData_=new iO,n.infoSyncTree_=new tI({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=ic(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),C_(n,"connected",!1),n.serverSyncTree_=new tI({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);ur(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function PL(n){const t=n.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function lf(n){return uL({timestamp:PL(n)})}function rI(n,e,t,r,s){n.dataUpdateCount++;const a=new tt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=qh(t,m=>Tt(m));u=rL(n.serverSyncTree_,a,f,s)}else{const f=Tt(t);u=jS(n.serverSyncTree_,a,f,s)}else if(r){const f=qh(t,m=>Tt(m));u=eL(n.serverSyncTree_,a,f)}else{const f=Tt(t);u=ic(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=Za(n,a)),ur(n.eventQueue_,d,u)}function iI(n,e){C_(n,"connected",e),e===!1&&bL(n)}function kL(n,e){Xt(e,(t,r)=>{C_(n,t,r)})}function C_(n,e,t){const r=new tt("/.info/"+e),s=Tt(t);n.infoData_.updateSnapshot(r,s);const a=ic(n.infoSyncTree_,r,s);ur(n.eventQueue_,r,a)}function A_(n){return n.nextWriteId_++}function NL(n,e,t){const r=iL(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const a=Tt(s).withIndex(e._queryParams.getIndex());Hm(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=ic(n.serverSyncTree_,e._path,a);else{const d=Uu(n.serverSyncTree_,e);u=jS(n.serverSyncTree_,e._path,a,d)}return ur(n.eventQueue_,e._path,u),Td(n.serverSyncTree_,e,t,null,!0),a},s=>(oc(n,"get for query "+Ut(e)+" failed: "+s),Promise.reject(new Error(s))))}function xL(n,e,t,r,s){oc(n,"set",{path:e.toString(),value:t,priority:r});const a=lf(n),u=Tt(t,r),d=m_(n.serverSyncTree_,e),f=qS(u,d,a),m=A_(n),y=US(n.serverSyncTree_,e,f,m,!0);af(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(w,k)=>{const L=w==="ok";L||Sn("set at "+e+" failed: "+w);const B=vs(n.serverSyncTree_,m,!L);ur(n.eventQueue_,e,B),js(n,s,w,k)});const E=P_(n,e);Za(n,E),ur(n.eventQueue_,E,[])}function DL(n,e,t,r){oc(n,"update",{path:e.toString(),value:t});let s=!0;const a=lf(n),u={};if(Xt(t,(d,f)=>{s=!1,u[d]=$S(vt(e,d),Tt(f),n.serverSyncTree_,a)}),s)Yt("update() called with empty data.  Don't do anything."),js(n,r,"ok",void 0);else{const d=A_(n),f=ZO(n.serverSyncTree_,e,u,d);af(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const E=m==="ok";E||Sn("update at "+e+" failed: "+m);const w=vs(n.serverSyncTree_,d,!E),k=w.length>0?Za(n,e):e;ur(n.eventQueue_,k,w),js(n,r,m,y)}),Xt(t,m=>{const y=P_(n,vt(e,m));Za(n,y)}),ur(n.eventQueue_,e,[])}}function bL(n){oc(n,"onDisconnectEvents");const e=lf(n),t=md();jm(n.onDisconnect_,Qe(),(s,a)=>{const u=$S(s,a,n.serverSyncTree_,e);hl(t,s,u)});let r=[];jm(t,Qe(),(s,a)=>{r=r.concat(ic(n.serverSyncTree_,s,a));const u=P_(n,s);Za(n,u)}),n.onDisconnect_=md(),ur(n.eventQueue_,Qe(),r)}function OL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Um(n.onDisconnect_,e),js(n,t,r,s)})}function sI(n,e,t,r){const s=Tt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&hl(n.onDisconnect_,e,s),js(n,r,a,u)})}function LL(n,e,t,r,s){const a=Tt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&hl(n.onDisconnect_,e,a),js(n,s,u,d)})}function ML(n,e,t,r){if($h(t)){Yt("onDisconnect().update() called with empty data.  Don't do anything."),js(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Xt(t,(u,d)=>{const f=Tt(d);hl(n.onDisconnect_,vt(e,u),f)}),js(n,r,s,a)})}function VL(n,e,t){let r;be(e._path)===".info"?r=Hm(n.infoSyncTree_,e,t):r=Hm(n.serverSyncTree_,e,t),ZS(n.eventQueue_,e._path,r)}function oI(n,e,t){let r;be(e._path)===".info"?r=Td(n.infoSyncTree_,e,t):r=Td(n.serverSyncTree_,e,t),ZS(n.eventQueue_,e._path,r)}function FL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(SL)}function oc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Yt(t,...e)}function js(n,e,t,r){e&&cl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function tC(n,e,t){return m_(n.serverSyncTree_,e,t)||Ce.EMPTY_NODE}function R_(n,e=n.transactionQueueTree_){if(e||uf(n,e),fl(e)){const t=rC(n,e);te(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&UL(n,sc(e),t)}else GS(e)&&sf(e,t=>{R_(n,t)})}function UL(n,e,t){const r=t.map(m=>m.currentWriteId),s=tC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];te(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=In(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{oc(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(vs(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&E.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();uf(n,T_(n.transactionQueueTree_,e)),R_(n,n.transactionQueueTree_),ur(n.eventQueue_,e,y);for(let w=0;w<E.length;w++)cl(E[w])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Sn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}Za(n,e)}},u)}function Za(n,e){const t=nC(n,e),r=sc(t),s=rC(n,t);return jL(n,s,r),r}function jL(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=In(t,f.path);let y=!1,E;if(te(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(vs(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=CL)y=!0,E="maxretry",s=s.concat(vs(n.serverSyncTree_,f.currentWriteId,!0));else{const w=tC(n,f.path,u);f.currentInputSnapshot=w;const k=e[d].update(w.val());if(k!==void 0){of("transaction failed: Data returned ",k,f.path);let L=Tt(k);typeof k=="object"&&k!=null&&ii(k,".priority")||(L=L.updatePriority(w.getPriority()));const z=f.currentWriteId,Q=lf(n),J=qS(L,w,Q);f.currentOutputSnapshotRaw=L,f.currentOutputSnapshotResolved=J,f.currentWriteId=A_(n),u.splice(u.indexOf(z),1),s=s.concat(US(n.serverSyncTree_,f.path,J,f.currentWriteId,f.applyLocally)),s=s.concat(vs(n.serverSyncTree_,z,!0))}else y=!0,E="nodata",s=s.concat(vs(n.serverSyncTree_,f.currentWriteId,!0))}ur(n.eventQueue_,t,s),s=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}uf(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)cl(r[d]);R_(n,n.transactionQueueTree_)}function nC(n,e){let t,r=n.transactionQueueTree_;for(t=be(e);t!==null&&fl(r)===void 0;)r=T_(r,t),e=rt(e),t=be(e);return r}function rC(n,e){const t=[];return iC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function iC(n,e,t){const r=fl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);sf(e,s=>{iC(n,s,t)})}function uf(n,e){const t=fl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,HS(e,t.length>0?t:void 0)}sf(e,r=>{uf(n,r)})}function P_(n,e){const t=sc(nC(n,e)),r=T_(n.transactionQueueTree_,e);return fL(r,s=>{om(n,s)}),om(n,r),KS(r,s=>{om(n,s)}),t}function om(n,e){const t=fl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(te(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(te(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(vs(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?HS(e,void 0):t.length=a+1,ur(n.eventQueue_,sc(e),s);for(let u=0;u<r.length;u++)cl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const aI=function(n,e){const t=WL(n),r=t.namespace;t.domain==="firebase.com"&&Mi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Mi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||YD();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new tt(t.pathString)}},WL=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=BL(n.substring(y,E)));const w=zL(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const L=e.indexOf(".");r=e.substring(0,L).toLowerCase(),t=e.substring(L+1),a=r}"ns"in w&&(a=w.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class qL{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return te(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class HL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Qr;return OL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){uu("OnDisconnect.remove",this._path);const e=new Qr;return sI(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){uu("OnDisconnect.set",this._path),Km("OnDisconnect.set",e,this._path);const t=new Qr;return sI(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){uu("OnDisconnect.setWithPriority",this._path),Km("OnDisconnect.setWithPriority",e,this._path),vL("OnDisconnect.setWithPriority",t);const r=new Qr;return LL(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){uu("OnDisconnect.update",this._path),XS("OnDisconnect.update",e,this._path);const t=new Qr;return ML(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Le(this._path)?null:n_(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=qw(this._queryParams),t=Jg(e);return t==="{}"?"default":t}get _queryObject(){return qw(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof k_))return!1;const t=this._repo===e._repo,r=r_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+bb(this._path)}}class Ui extends k_{constructor(e,t){super(e,t,new a_,!1)}get parent(){const e=_S(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ju{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new tt(e),r=Qm(this.ref,e);return new ju(this._node.getChild(t),r,Et)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ju(s,Qm(this.ref,r),Et)))}hasChild(e){const t=new tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function QM(n,e){return n=et(n),n._checkNotDeleted("ref"),e!==void 0?Qm(n._root,e):n._root}function Qm(n,e){return n=et(n),be(n._path)===null?EL("child","path",e):JS("child","path",e),new Ui(n._repo,vt(n._path,e))}function YM(n){return n=et(n),new HL(n._repo,n._path)}function XM(n,e){n=et(n),uu("set",n._path),Km("set",e,n._path);const t=new Qr;return xL(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function JM(n,e){XS("update",e,n._path);const t=new Qr;return DL(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ZM(n){n=et(n);const e=new sC(()=>{}),t=new cf(e);return NL(n._repo,n,t).then(r=>new ju(r,new Ui(n._repo,n._path),n._queryParams.getIndex()))}class cf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new $L("value",this,new ju(e.snapshotNode,new Ui(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new qL(this,e,t):null}matches(e){return e instanceof cf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function GL(n,e,t,r,s){let a;if(typeof r=="object"&&(a=void 0,s=r),typeof r=="function"&&(a=r),s&&s.onlyOnce){const f=t,m=(y,E)=>{oI(n._repo,n,d),f(y,E)};m.userCallback=t.userCallback,m.context=t.context,t=m}const u=new sC(t,a||void 0),d=new cf(u);return VL(n._repo,n,d),()=>oI(n._repo,n,d)}function eV(n,e,t,r){return GL(n,"value",e,t,r)}qO(Ui);YO(Ui);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL="FIREBASE_DATABASE_EMULATOR_HOST",Ym={};let QL=!1;function YL(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=Bs(a);n.repoInfo_=new lS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function XL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Mi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=aI(a,s),d=u.repoInfo,f;typeof process<"u"&&Rw&&(f=Rw[KL]),f?(a=`http://${f}?ns=${d.namespace}`,u=aI(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new ab(n.name,n.options,e);wL("Invalid Firebase Database URL",u),Le(u.path)||Mi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=ZL(d,n,m,new ob(n,t));return new eM(y,n)}function JL(n,e){const t=Ym[e];(!t||t[n.key]!==n)&&Mi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),FL(n),delete t[n.key]}function ZL(n,e,t,r){let s=Ym[e.name];s||(s={},Ym[e.name]=s);let a=s[n.toURLString()];return a&&Mi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new AL(n,QL,t,r),s[n.toURLString()]=a,a}class eM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,Qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mi("Cannot call "+e+" on a deleted database.")}}function tM(n=ag(),e){const t=Rd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=vI("database");r&&nM(t,...r)}return t}function nM(n,e,t,r={}){n=et(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ni(r,a.repoInfo_.emulatorOptions))return;Mi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Mi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Bh(Bh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:II(r.mockUserToken,n.app.options.projectId);u=new Bh(d)}Bs(e)&&(rg(e),ig("Database",!0)),YL(a,s,r,u)}/**
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
 */function rM(n){$D(bo),So(new ks("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return XL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Yr(Pw,kw,n),Yr(Pw,kw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM={".sv":"timestamp"};function tV(){return iM}ki.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ki.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};rM();const N_={apiKey:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",authDomain:"discordia-573e7.firebaseapp.com",projectId:"discordia-573e7",appId:"1:757817424564:web:39457c92d2c75e1374f5e1",databaseURL:"https://discordia-573e7-default-rtdb.firebaseio.com",messagingSenderId:"757817424564",measurementId:void 0},oC=["apiKey","authDomain","projectId","appId"].every(n=>!!N_[n]),el=oC?RI(N_):null,bn=el?x1(el):null,lI=el?PD(el):null,nV=el&&N_.databaseURL?tM(el):null,sM=Object.freeze([{id:"gothic3d",name:"Gótico 3D",color:"#ffae22"},{id:"gold",name:"Dourado Premium",color:"#f5d375"},{id:"bubble",name:"Bubble Magic",color:"#c69af8"},{id:"neon",name:"Neon Cyber",color:"#53deff"},{id:"tech",name:"Futurista Tech",color:"#52e6d6"},{id:"glitch",name:"Glitch Digital",color:"#fd73df"},{id:"ice",name:"Cristal de Gelo",color:"#a8e8ff"},{id:"fire",name:"Fogo Infernal",color:"#ff7744"},{id:"galaxy",name:"Galáxia Cósmica",color:"#bd88ff"},{id:"pixel",name:"Retrô Pixel",color:"#80e783"},{id:"chrome",name:"Chrome Prateado",color:"#e3eaf9"},{id:"royal",name:"Elegante Royal",color:"#f3db98"}]);new Map(sM.map(n=>[n.id,n]));const Fa=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(n),aC=n=>typeof n=="string"&&/^[A-Za-z0-9_-]{1,128}$/.test(n);function oM(n=[],e=""){return[...new Set(n.filter(t=>(t==null?void 0:t.toUid)===e&&(t==null?void 0:t.status)==="accepted"&&Fa(t==null?void 0:t.serverId)).map(t=>t.serverId))].slice(0,100)}function Xm(n,e){return!!n&&Array.isArray(n.memberUids)&&n.memberUids.includes(e)&&Array.isArray(n.bannedUids??[])&&!(n.bannedUids??[]).includes(e)}function lC(n,e=typeof localStorage>"u"?null:localStorage){if(!aC(n)||!e)return[];try{const t=JSON.parse(e.getItem("discordia_known_server_ids_rc103_"+n)||"[]");return Array.isArray(t)?[...new Set(t.filter(Fa))].slice(0,100):[]}catch{return[]}}function Jm(n,e,t=typeof localStorage>"u"?null:localStorage){if(!aC(n)||!Fa(e)||!t)return!1;const r=lC(n,t);if(r.includes(e))return!1;try{return t.setItem("discordia_known_server_ids_rc103_"+n,JSON.stringify([...r,e].slice(-100))),typeof window<"u"&&t===window.localStorage&&window.dispatchEvent(new CustomEvent("discordia:server-discovery-updated",{detail:{uid:n,id:e}})),!0}catch{return!1}}async function aM({invite:n,uid:e,loadInvite:t,requestMembership:r,readJoinedServer:s}={}){if(!n||n.toUid!==e||n.status!=="accepted"||!n.serverId||n.id!==n.serverId+"_"+e)throw new Error("Convite inválido. Solicite um novo convite ao responsável.");const a=await t();if(!a||a.status!=="accepted"||a.toUid!==e||a.serverId!==n.serverId)throw new Error("Este convite não está mais válido. Peça um novo ao responsável.");let u=null;try{await r()}catch(m){u=m}let d=null,f=null;try{d=await s()}catch(m){f=m}if((d==null?void 0:d.id)===n.serverId&&Array.isArray(d.memberUids)&&d.memberUids.includes(e)&&!(d.bannedUids||[]).includes(e)&&!Object.hasOwn(d,"deletingAt")&&!Object.hasOwn(d,"deletionOwnerUid"))return d;throw u||f||new Error("A entrada ainda não foi confirmada pelo servidor. Tente novamente.")}const lM=n=>`DISC-${n}`,uM=n=>String(n||"").trim().replace(/^@/,"").toLowerCase(),uI=n=>/^[a-z][a-z0-9_]{2,15}$/.test(n),cM=n=>String(n||"").trim().replace(/^DISC-/i,""),Bt=()=>{if(!lI)throw new Error("Configure o Firebase antes de continuar.");return lI},x_=(n,e)=>[n,e].sort().join("_"),Zm=(n,e)=>`${n}_${e}`;async function hM(n,e){const t=Bt(),r=sn(t,"publicProfiles",n.uid),s=await Nr(r),a={uid:n.uid,peerId:lM(n.uid),displayName:String(e).trim().slice(0,50)||"Amigo"};s.exists()?s.data().displayName!==a.displayName&&await Ka(r,{displayName:a.displayName}):await Xd(r,{...a,presence:"offline",lastSeenAt:Gn(),createdAt:Gn()})}async function dM(n,e){const t=uM(n);let r=cM(n);if(uI(t)){const a=await Nr(sn(Bt(),"handles",t));if(!a.exists())throw new Error("Nenhuma conta encontrada com esse @identificador.");r=a.data().uid}else if(!/^[A-Za-z0-9]{20,128}$/.test(r))throw new Error("Informe @identificador ou o ID DISC-... completo.");if(r===e)throw new Error("Você não pode se adicionar.");const s=await Nr(sn(Bt(),"publicProfiles",r));if(!s.exists()||uI(t)&&s.data().handle!==t)throw new Error("Nenhuma conta encontrada com esse ID.");return s.data()}async function fM(n,e){const t=await dM(e,n);if((await Nr(sn(Bt(),"users",n,"blocks",t.uid))).exists())throw new Error("Desbloqueie essa pessoa antes de enviar uma solicitação.");const r=sn(Bt(),"friendRequests",Zm(n,t.uid)),s=await Nr(sn(Bt(),"friendRequests",Zm(t.uid,n)));if(s.exists())throw new Error(s.data().status==="pending"?"Você já recebeu uma solicitação dessa pessoa. Aceite-a na lista.":"Já existe uma relação com esta pessoa.");if((await Nr(r)).exists())throw new Error("Essa solicitação já foi enviada.");return await Xd(r,{fromUid:n,toUid:t.uid,status:"pending",createdAt:Gn(),updatedAt:Gn()}),t}async function pM(n,e,t){if(n.toUid!==e||n.status!=="pending")throw new Error("Solicitação inválida.");await Ka(sn(Bt(),"friendRequests",Zm(n.fromUid,n.toUid)),{status:t?"accepted":"rejected",updatedAt:Gn()})}function mM(n,e,t,r=()=>{}){const s=new Map,a=new Map,u=()=>e([...s.values(),...a.values()]),d=(y,E,w)=>{y.clear(),E.docs.forEach(k=>y.set(k.id,{id:k.id,...k.data()})),r(w),u()},f=Pi(Po(Or(Bt(),"friendRequests"),cd("toUid","==",n),ko(100)),y=>d(s,y,"incoming"),y=>t(y,"incoming")),m=Pi(Po(Or(Bt(),"friendRequests"),cd("fromUid","==",n),ko(100)),y=>d(a,y,"outgoing"),y=>t(y,"outgoing"));return()=>{f(),m()}}function gM(n,e,t){return Pi(sn(Bt(),"publicProfiles",n),r=>e(r.exists()?r.data({serverTimestamps:"estimate"}):null),t)}async function _M(n,e){const t=[n,e].sort(),r=sn(Bt(),"dmRooms",x_(n,e));return(await Nr(r)).exists()||await Xd(r,{members:t,createdAt:Gn()}),r.id}const uC=n=>{var r,s;const e=n.data(),t=(s=(r=e.createdAt)==null?void 0:r.toDate)==null?void 0:s.call(r);return{id:n.id,...e,sender:e.senderName||"Amigo",avatar:"💬",time:(t==null?void 0:t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}))||"Agora",dateLabel:(t==null?void 0:t.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}))||"Hoje"}},cC=["💜","🔥","😂","👍","😮","🎮","✨","❤️"],hC=(n,e)=>{var s;const t=[...new Set([...String(n).matchAll(/:([a-z0-9_]{1,22}):/g)].map(a=>a[1]))].slice(0,4),r={};for(const a of t){const u=((s=e==null?void 0:e.find(d=>d.name===a))==null?void 0:s.image)||"";/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(u)&&u.length<3e4&&(r[a]=u)}return r};function D_(n,e,t,r,s){const a=Bt();return n==="dm"?Or(a,"dmRooms",x_(e,t),"messages"):Or(a,"servers",r,"channels",s,"messages")}async function yM(n,e,t,r,s,a,u){const d=String(u||"").trim().slice(0,2e3);if(!d)throw new Error("A mensagem não pode ficar vazia.");await Ka(sn(D_(e,n,t,r,s),a),{text:d,editedAt:Gn()})}async function vM(n,e,t,r,s,a,u){var m;if(!cC.includes(u))throw new Error("Reação inválida.");const d=sn(D_(e,n,t,r,s),a.id),f=((m=a.reactions)==null?void 0:m[n])===u;await Ka(d,{[`reactions.${n}`]:f?zD():u})}async function EM(n,e,t,r,s,a){await jD(sn(D_(e,n,t,r,s),a))}function wM(n,e,t,r){const s=x_(n,e);return Pi(Po(Or(Bt(),"dmRooms",s,"messages"),W0("createdAt","desc"),ko(100)),a=>t(a.docs.map(uC).reverse()),r)}async function IM(n,e,t,r,s=[]){const a=await _M(n,e);await H0(Or(Bt(),"dmRooms",a,"messages"),{senderUid:n,senderName:String(t).slice(0,50),text:String(r).trim().slice(0,2e3),customEmojiData:hC(r,s),reactions:{},createdAt:Gn()})}function TM(n,e,t){const r=Bt(),s=new Set,a=new Set,u=new Set(lC(n)),d=new Map,f=new Map,m=[],y=new Set,E=async Q=>{if(y.has(Q))return;y.add(Q);const J=sn(r,"serverOwnerIndex",n,"servers",Q);try{(await Nr(J)).exists()||await Xd(J,{ownerUid:n,serverId:Q})}catch(ie){!w&&(ie==null?void 0:ie.code)!=="permission-denied"&&(ie==null?void 0:ie.code)!=="not-found"&&(t==null||t(ie))}};let w=!1;const k=()=>{w||e([...d.values()].sort((Q,J)=>String(Q.name||"").localeCompare(String(J.name||""),"pt-BR")))},L=()=>{if(w)return;const Q=new Set([...s,...a,...u].filter(Fa));for(const[J,ie]of f)Q.has(J)||(ie(),f.delete(J),d.delete(J));for(const J of Q){if(f.has(J))continue;const ie=Pi(sn(r,"servers",J),le=>{if(w)return;const qe=le.exists()?le.data():null;Xm(qe,n)?(d.set(J,{id:J,...qe}),Jm(n,J),qe.ownerUid===n&&!Object.prototype.hasOwnProperty.call(qe,"deletingAt")&&E(J)):d.delete(J),k()},le=>{d.delete(J),k(),(le==null?void 0:le.code)!=="permission-denied"&&(le==null?void 0:le.code)!=="not-found"&&(t==null||t(le))});f.set(J,ie)}k()},B=Po(Or(r,"serverOwnerIndex",n,"servers"),ko(100));m.push(Pi(B,Q=>{s.clear(),Q.docs.forEach(J=>{var ie,le;Fa(J.id)&&((ie=J.data())==null?void 0:ie.serverId)===J.id&&((le=J.data())==null?void 0:le.ownerUid)===n&&s.add(J.id)}),L()},Q=>{(Q==null?void 0:Q.code)!=="permission-denied"&&(t==null||t(Q)),L()})),m.push(Pi(Po(Or(r,"serverInvites"),cd("toUid","==",n),ko(100)),Q=>{a.clear(),oM(Q.docs.map(J=>J.data()),n).forEach(J=>a.add(J)),L()},Q=>{(Q==null?void 0:Q.code)!=="permission-denied"&&(t==null||t(Q)),L()}));const z=Q=>{var J;((J=Q==null?void 0:Q.detail)==null?void 0:J.uid)!==n||!Fa(Q.detail.id)||(u.add(Q.detail.id),L())};return typeof window<"u"&&window.addEventListener("discordia:server-discovery-updated",z),L(),()=>{w=!0,typeof window<"u"&&window.removeEventListener("discordia:server-discovery-updated",z),m.forEach(Q=>Q()),f.forEach(Q=>Q()),f.clear(),d.clear()}}function SM(n,e,t,r){return Pi(Po(Or(Bt(),"servers",n,"channels",e,"messages"),W0("createdAt","desc"),ko(100)),s=>t(s.docs.map(uC).reverse()),r)}async function CM(n,e,t,r,s,a=[]){await H0(Or(Bt(),"servers",e,"channels",t,"messages"),{senderUid:n,senderName:String(r).slice(0,50),text:String(s).trim().slice(0,2e3),customEmojiData:hC(s,a),reactions:{},createdAt:Gn()})}function AM(n,e,t){return Pi(Po(Or(Bt(),"serverInvites"),cd("toUid","==",n),ko(100)),r=>e(r.docs.map(s=>({id:s.id,...s.data()}))),t)}async function RM(n,e,t){if(n.toUid!==e||!["pending","accepted"].includes(n.status))throw new Error("Convite inválido.");const r=Bt(),s=sn(r,"serverInvites",n.id),a=sn(r,"servers",n.serverId);if(!t){if(n.status!=="pending")throw new Error("Este convite já foi aceito.");await Ka(s,{status:"rejected",updatedAt:Gn()});return}if(n.status==="accepted")try{const d=await aM({invite:n,uid:e,loadInvite:async()=>{const f=await Nr(s);return f.exists()?f.data():null},requestMembership:()=>Ka(a,{memberUids:Aw(e),[`memberJoinedAt.${e}`]:Gn()}),readJoinedServer:async()=>{const f=await Nr(a),m=f.exists()?f.data():null;return Xm(m,e)?{id:f.id,...m}:null}});return Jm(e,n.serverId),d}catch(d){throw(d==null?void 0:d.code)==="permission-denied"?new Error("A entrada foi negada pelo servidor. O convite pode estar revogado, você pode estar banido ou a comunidade pode estar bloqueada. Peça ao responsável um novo convite."):new Error((d==null?void 0:d.message)||"Não foi possível concluir a entrada. Tente novamente.")}if(n.inviteVersion!==2)throw new Error("Convite antigo sem comprovação de segurança. Peça ao responsável um novo convite.");const u=WD(r);u.update(s,{status:"accepted",updatedAt:Gn()}),u.update(a,{memberUids:Aw(e),[`memberJoinedAt.${e}`]:Gn()});try{await u.commit();const d=await Nr(a),f=d.exists()?d.data():null;if(!Xm(f,e))throw new Error("Convite aceito, mas a participação ainda não foi confirmada. Use Concluir entrada para recuperar.");return Jm(e,n.serverId),{id:d.id,...f}}catch(d){const f=(d==null?void 0:d.code)==="permission-denied"?"A entrada não foi autorizada. O convite pode estar inválido ou sua conta pode não ter permissão; solicite ajuda ao responsável pelo servidor.":(d==null?void 0:d.message)||"Não foi possível confirmar sua entrada no servidor. Tente novamente.";throw new Error(f)}}const PM=""+new URL("discordia-orbit-DRQ15dZr.png",import.meta.url).href,kM=Object.freeze(["microphone","camera","screen"]);function dC({secureContext:n=!1,mediaDevices:e}={}){const t=e||{};return{microphone:n===!0&&typeof t.getUserMedia=="function",camera:n===!0&&typeof t.getUserMedia=="function",screen:n===!0&&typeof t.getDisplayMedia=="function"}}function NM(n){const e=String((n==null?void 0:n.name)||(n==null?void 0:n.code)||"");return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"Permissão negada ou seleção cancelada pelo navegador.":e==="NotFoundError"||e==="DevicesNotFoundError"?"Nenhuma fonte compatível encontrada neste dispositivo.":e==="NotReadableError"||e==="TrackStartError"?"A fonte de mídia está ocupada ou indisponível.":e==="OverconstrainedError"?"Os recursos solicitados não são compatíveis com este dispositivo.":"Não foi possível iniciar a captura. Verifique as permissões do navegador."}function am(n){var e;for(const t of((e=n==null?void 0:n.getTracks)==null?void 0:e.call(n))||[])try{t.stop()}catch{}}function xM({mediaDevices:n,secureContext:e,onChange:t=()=>{}}={}){const r=n;let s=null,a=0,u=!1;const d=w=>{u||t(w)};function f(){var k,L,B;if(!s)return;const w=s;s=null;for(const z of((L=(k=w.stream).getTracks)==null?void 0:L.call(k))||[])try{(B=z.removeEventListener)==null||B.call(z,"ended",w.onEnded)}catch{}am(w.stream)}function m(){u||(a+=1,f(),d({status:"idle",kind:null}))}async function y(w){var J,ie;if(u)return null;if(!kM.includes(w))throw new TypeError("Tipo de captura inválido.");const k=++a;if(f(),!dC({secureContext:e,mediaDevices:r})[w])return d({status:"unsupported",kind:w,message:"Captura indisponível. Use HTTPS ou localhost e um navegador compatível."}),null;d({status:"requesting",kind:w});let B;try{w==="screen"?B=await r.getDisplayMedia({video:{frameRate:{ideal:30,max:30}},audio:!1}):w==="camera"?B=await r.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:24,max:30}},audio:!1}):B=await r.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch(le){return k===a&&!u&&d({status:"error",kind:w,message:NM(le)}),null}if(u||k!==a)return am(B),null;const z=((J=B==null?void 0:B.getTracks)==null?void 0:J.call(B))||[];if(!z.length)return am(B),d({status:"error",kind:w,message:"Nenhuma faixa de mídia foi disponibilizada."}),null;const Q=()=>{(s==null?void 0:s.stream)===B&&m()};s={stream:B,kind:w,onEnded:Q};for(const le of z)(ie=le.addEventListener)==null||ie.call(le,"ended",Q);return d({status:"active",kind:w,hasAudio:z.some(le=>le.kind==="audio"),hasVideo:z.some(le=>le.kind==="video")}),B}function E(){u=!0,a+=1,f()}return{start:y,stop:m,dispose:E,getStream:()=>(s==null?void 0:s.stream)||null}}const cI={microphone:{icon:"🎙",name:"Microfone",description:"Verifica a permissão de acesso ao microfone."},camera:{icon:"📷",name:"Câmera",description:"Mostra uma prévia local da câmera."},screen:{icon:"▣",name:"Tela",description:"Abre o seletor de tela ou janela do navegador."}};function DM(){var m;const[n,e]=Te.useState({status:"idle",kind:null}),t=Te.useRef(null),r=Te.useRef(null),s=Te.useMemo(()=>dC({secureContext:typeof window<"u"&&window.isSecureContext===!0,mediaDevices:typeof navigator<"u"?navigator.mediaDevices:void 0}),[]);Te.useEffect(()=>{const y=xM({mediaDevices:navigator.mediaDevices,secureContext:window.isSecureContext,onChange:e});return r.current=y,()=>{y.dispose(),r.current=null}},[]),Te.useEffect(()=>{var w;const y=t.current;if(!y)return;const E=n.status==="active"?(w=r.current)==null?void 0:w.getStream():null;if(y.srcObject=E||null,E){const k=y.play();k&&typeof k.catch=="function"&&k.catch(()=>{})}return()=>{y.pause(),y.srcObject=null}},[n.status,n.kind]);function a(y){var E;(E=r.current)==null||E.start(y)}function u(){var y;(y=r.current)==null||y.stop()}const d=n.kind?(m=cI[n.kind])==null?void 0:m.name:"",f=n.status==="active"||n.status==="requesting";return S.jsxs("section",{className:"media-lab","aria-labelledby":"media-lab-title",children:[S.jsxs("div",{className:"lab-heading",children:[S.jsx("div",{className:"lab-orbit","aria-hidden":"true",children:"◉"}),S.jsxs("div",{children:[S.jsx("span",{className:"lab-eyebrow",children:"LABORATÓRIO DE MÍDIA · PRÉVIA PRIVADA"}),S.jsx("h2",{id:"media-lab-title",children:"Teste seus dispositivos"}),S.jsx("p",{children:"Confira a câmera, o microfone e a captura de tela antes da integração com chamadas reais."})]})]}),S.jsxs("div",{className:"lab-privacy",role:"note",children:[S.jsx("strong",{children:"Teste somente local"}),S.jsx("p",{children:"Os dispositivos só são ativados quando você clicar. Este painel não transmite para outras pessoas, não grava vídeo ou áudio e não envia mídia ao Discórdia."})]}),S.jsx("div",{className:"lab-options",children:Object.entries(cI).map(([y,E])=>S.jsxs("button",{type:"button",className:n.kind===y&&f?"lab-option selected":"lab-option",onClick:()=>a(y),disabled:!s[y],"aria-pressed":n.kind===y&&f,children:[S.jsx("span",{className:"lab-option-icon","aria-hidden":"true",children:E.icon}),S.jsx("strong",{children:E.name}),S.jsx("span",{children:E.description}),S.jsx("small",{children:s[y]?n.kind===y&&n.status==="active"?"Capturando localmente":"Clique para testar":"Não disponível neste navegador"})]},y))}),S.jsxs("div",{className:"lab-viewer",children:[S.jsxs("div",{className:"lab-viewer-head",children:[S.jsx("strong",{children:"Prévia dos dispositivos"}),S.jsx("span",{className:n.status==="active"?"lab-live":"lab-off",children:n.status==="active"?"● Captura local ativa":"● Nenhuma transmissão ativa"})]}),S.jsx("div",{className:"lab-stage","aria-live":"polite",children:n.status==="active"&&n.hasVideo?S.jsx("video",{ref:t,autoPlay:!0,playsInline:!0,muted:!0,"aria-label":"Prévia local de "+d}):S.jsxs("div",{className:"lab-placeholder",children:[S.jsx("span",{"aria-hidden":"true",children:n.status==="active"?"🎙":"▤"}),S.jsx("strong",{children:n.status==="requesting"?"Aguardando sua permissão…":n.status==="active"&&n.kind==="microphone"?"Microfone disponível":"Nenhuma prévia em execução"}),S.jsx("p",{children:n.status==="active"&&n.kind==="microphone"?"O microfone foi autorizado. A reprodução é mantida desligada para evitar microfonia.":"Selecione um dispositivo acima para testar localmente."})]})}),(n.status==="error"||n.status==="unsupported")&&S.jsx("p",{role:"alert",className:"lab-error",children:n.message}),S.jsxs("div",{className:"lab-controls",children:[S.jsx("button",{type:"button",onClick:u,disabled:!f,children:"Parar captura"}),S.jsx("small",{children:f?"Ao trocar de teste ou sair desta tela, todas as faixas são encerradas.":"Use HTTPS ou localhost e libere a permissão apenas se desejar."})]})]}),S.jsx("p",{className:"lab-disclaimer",children:"Chamadas WebRTC, transmissão para salas, áudio do sistema e reconexão entre usuários ainda não estão implementados nesta prévia."})]})}const bM={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"false",VITE_WEB_SFU_RECEIVE_ENABLED:"false",VITE_WEB_SIGNUP_ENABLED:"false"},hI="https://discordia-guest-rooms-staging.carlos1702s.workers.dev",OM=/^[a-f0-9]{48}$/,LM=28;function ac(n){return typeof n=="string"&&OM.test(n)}function rV(n){return String(n||"").replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,LM)}function eg(n){const e=String(n||"").match(/^\/r\/([a-f0-9]{48})\/?$/);return e?e[1]:""}function MM(n,e){const t=String(n||"").trim();if(ac(t))return t;try{const r=new URL(e),s=new URL(t);return!/^https?:$/.test(r.protocol)||s.origin!==r.origin||s.search||s.hash||s.username||s.password?"":eg(s.pathname)}catch{return""}}function VM(n,e){if(!ac(n))throw Error("INVALID_ROOM_ID");return String(e).replace(/\/$/,"")+"/r/"+n}function fC(n=bM){return String((n==null?void 0:n.VITE_QUICK_ROOMS_ENABLED)||"")!=="true"?"":String((n==null?void 0:n.VITE_QUICK_ROOM_API_ORIGIN)||"")===hI?hI:""}const pC={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBZt6BOodfk1SxjM2JBEUf3--Edo8P82IY",VITE_FIREBASE_APP_ID:"1:757817424564:web:39457c92d2c75e1374f5e1",VITE_FIREBASE_AUTH_DOMAIN:"discordia-573e7.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://discordia-573e7-default-rtdb.firebaseio.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"757817424564",VITE_FIREBASE_PROJECT_ID:"discordia-573e7",VITE_QUICK_ROOMS_ENABLED:"false",VITE_WEB_SFU_RECEIVE_ENABLED:"false",VITE_WEB_SIGNUP_ENABLED:"false"};function iV(n,e=pC){const t=fC(e);return!t||!ac(n)?"":t.replace(/^https:/,"wss:")+"/api/rooms/"+n+"/connect"}async function FM({env:n=pC,request:e=fetch,storage:t=globalThis.sessionStorage,origin:r=(s=>(s=globalThis.location)==null?void 0:s.origin)()||""}={}){const a=fC(n);if(!a)throw Error("QUICK_ROOMS_UNAVAILABLE");const u=await e(a+"/api/rooms",{method:"POST",cache:"no-store",redirect:"error"});if(!u.ok)throw Error("QUICK_ROOM_CREATE_FAILED");const d=await u.json();if(!ac(d==null?void 0:d.roomId)||typeof(d==null?void 0:d.hostKey)!="string"||!/^[a-f0-9]{64}$/.test(d.hostKey))throw Error("QUICK_ROOM_INVALID_RESPONSE");return t.setItem("discordia:room-host:"+d.roomId,d.hostKey),{id:d.roomId,url:VM(d.roomId,r)}}function sV(n,e=globalThis.sessionStorage){var r;if(!ac(n))return"";const t=(r=e==null?void 0:e.getItem)==null?void 0:r.call(e,"discordia:room-host:"+n);return typeof t=="string"&&/^[a-f0-9]{64}$/.test(t)?t:""}function UM(n){switch(n==null?void 0:n.message){case"QUICK_ROOMS_UNAVAILABLE":return"As salas rápidas ainda não foram ativadas neste ambiente.";case"QUICK_ROOM_CREATE_FAILED":return"Não foi possível criar a sala agora. Tente novamente.";default:return"Não foi possível conectar à sala. Confira o link ou tente novamente."}}function nn(n){switch(String((n==null?void 0:n.code)||"")){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-email":return"E-mail ou senha inválidos.";case"auth/email-already-in-use":return"Este e-mail já possui uma conta. Use Entrar ou Recupere sua senha.";case"auth/weak-password":return"Senha muito fraca. Escolha outra com pelo menos 8 caracteres.";case"auth/operation-not-allowed":return"Cadastro de novas contas indisponível nesta configuração do Firebase.";case"auth/too-many-requests":return"Muitas tentativas. Tente novamente mais tarde.";case"auth/network-request-failed":case"unavailable":return"Sem conexão. Confira sua internet e tente novamente.";case"permission-denied":return"Você não tem permissão para realizar esta operação.";default:return"Não foi possível concluir a operação. Tente novamente."}}function mC({user:n,section:e,server:t,channel:r,friendUid:s,friendUids:a}){return!(n!=null&&n.uid)||n.emailVerified!==!0?!1:e==="dm"?typeof s=="string"&&s.length>0&&Array.isArray(a)&&a.includes(s)&&s!==n.uid:e==="servers"&&!!(t!=null&&t.id)&&Array.isArray(t.memberUids)&&t.memberUids.includes(n.uid)&&Array.isArray(t.bannedUids??[])&&!(t.bannedUids??[]).includes(n.uid)&&!!(r!=null&&r.id)&&Array.isArray(t.textChannels)&&t.textChannels.some(u=>(u==null?void 0:u.id)===r.id)}function jM(n){if(!mC(n))return"";const{user:e,section:t,server:r,channel:s,friendUid:a}=n;return t==="dm"?`dm:${e.uid}:${a}`:`server:${e.uid}:${r.id}:${s.id}`}function BM(n){var e;try{const t=(e=n==null?void 0:n.toDate)==null?void 0:e.call(n);return t instanceof Date&&!Number.isNaN(t.getTime())?t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}catch{return""}}const zM=Te.lazy(()=>fI(()=>import("./QuickRoom-DFaQD5vQ.js"),[],import.meta.url)),WM=Te.lazy(()=>fI(()=>import("./WebVoiceRoom-DNrzMm2t.js"),[],import.meta.url));function cu({small:n=!1}){return S.jsx("img",{className:n?"brand-symbol small":"brand-symbol",src:PM,alt:"Símbolo do Discórdia",draggable:"false"})}function gC({subtitle:n}){return S.jsxs("div",{className:"brand",children:[S.jsx(cu,{}),S.jsxs("div",{children:[S.jsx("strong",{children:"DISCÓRDIA"}),S.jsx("span",{children:n})]})]})}function dI({onJoinGuest:n,initialMode:e="login"}){const[t,r]=Te.useState(e),[s,a]=Te.useState(""),[u,d]=Te.useState(""),[f,m]=Te.useState(""),[y,E]=Te.useState(""),[w,k]=Te.useState(""),[L,B]=Te.useState(!1),[z,Q]=Te.useState("");async function J(fe){if(fe.preventDefault(),!(!bn||L)){B(!0),Q("");try{await gk(bn,u.trim(),f)}catch(b){Q(nn(b))}finally{B(!1)}}}async function ie(fe){if(fe.preventDefault(),!(!bn||L)){Q("Cadastro Web ainda não foi liberado na prévia. Use uma conta existente.");return}}async function le(){if(!u.trim()||L||!bn){Q("Informe seu e-mail antes de recuperar a senha.");return}B(!0),Q("");try{await mk(bn,u.trim()),Q("Se esta conta existir, as instruções serão enviadas por e-mail.")}catch(fe){Q(nn(fe))}finally{B(!1)}}function qe(fe){fe.preventDefault();const b=MM(w,window.location.origin);if(!b){Q("Cole um link de sala do próprio Discórdia.");return}n(b)}return S.jsxs("main",{className:"entrance",children:[S.jsx("div",{className:"entrance-ambient","aria-hidden":"true"}),S.jsxs("section",{className:"entry-content",children:[S.jsx(gC,{subtitle:"WEB · ACESSO SIMPLIFICADO"}),S.jsx("h1",{children:"Entre, convide e compartilhe."}),S.jsx("p",{children:"Use sua conta do Discórdia ou entre em uma sala temporária com um apelido. Nenhum convidado precisa instalar aplicativo ou criar conta."}),S.jsxs("div",{className:"entry-modes","aria-label":"Formas de entrar",children:[S.jsxs("div",{className:"entry-mode current",children:[S.jsx("span",{className:"entry-icon",children:"◈"}),S.jsxs("div",{children:[S.jsx("strong",{children:"Já tenho Discórdia"}),S.jsx("small",{children:"Mesma conta do Desktop e Android"})]}),S.jsx("span",{className:"mode-tag",children:"Acesso normal"})]}),S.jsxs("div",{className:"entry-mode",children:[S.jsx("span",{className:"entry-icon",children:"↗"}),S.jsxs("div",{children:[S.jsx("strong",{children:"Sou convidado"}),S.jsx("small",{children:"Entro por link, vejo a tela e converso"})]}),S.jsx("span",{className:"mode-tag",children:"Sem cadastro"})]}),S.jsxs("div",{className:"entry-mode",children:[S.jsx("span",{className:"entry-icon",children:"✦"}),S.jsxs("div",{children:[S.jsx("strong",{children:"Quero uma conta"}),S.jsx("small",{children:"Cadastro com e-mail e senha"})]}),S.jsx("span",{className:"mode-tag",children:"Acesso completo*"})]})]}),S.jsxs("form",{className:"guest-join-form",onSubmit:qe,children:[S.jsx("label",{htmlFor:"guest-invite",children:"Recebeu um convite para sala rápida?"}),S.jsx("input",{id:"guest-invite",placeholder:"Cole o link da sala ou o código",value:w,onChange:fe=>k(fe.target.value),maxLength:400}),S.jsx("button",{type:"submit",children:"Entrar como convidado"})]}),S.jsx("p",{className:"entry-footnote",children:"*Conta completa: servidores, mensagens e amigos permitidos. Salas rápidas e transmissão exigem o serviço Web de homologação ativo."})]}),S.jsxs("section",{className:"login-card","aria-labelledby":"login-title",children:[S.jsx("span",{className:"eyebrow",children:"SUA CONTA DISCÓRDIA"}),S.jsxs("div",{className:"auth-mode-switch",children:[S.jsx("button",{type:"button",className:t==="login"?"active":"",onClick:()=>{r("login"),Q("")},children:"Entrar"}),S.jsx("button",{type:"button",className:t==="register"?"active":"",onClick:()=>{{Q("Cadastro Web temporariamente desativado na prévia. Use uma conta existente.");return}},children:"Criar conta"})]}),S.jsx("h2",{id:"login-title",children:t==="login"?"Entrar na conta":"Cadastrar no Discórdia"}),t==="login"?S.jsxs(S.Fragment,{children:[S.jsx("p",{children:"Use as mesmas credenciais do Discórdia Desktop."}),S.jsxs("form",{onSubmit:J,className:"login-form",children:[S.jsx("label",{htmlFor:"web-email",children:"E-mail"}),S.jsx("input",{id:"web-email",type:"email",autoComplete:"email",value:u,maxLength:254,required:!0,placeholder:"seuemail@exemplo.com",onChange:fe=>d(fe.target.value)}),S.jsx("label",{htmlFor:"web-password",children:"Senha"}),S.jsx("input",{id:"web-password",type:"password",autoComplete:"current-password",value:f,required:!0,onChange:fe=>m(fe.target.value)}),S.jsx("button",{className:"primary",type:"submit",disabled:!bn||L,children:L?"Conectando…":"Entrar no Discórdia"})]}),S.jsx("button",{className:"link-button",type:"button",onClick:le,disabled:!bn||L,children:"Recuperar senha"})]}):S.jsxs(S.Fragment,{children:[S.jsx("p",{children:"Crie sua conta uma vez e use também no Desktop e no Android."}),S.jsxs("form",{onSubmit:ie,className:"register-form",children:[S.jsx("label",{htmlFor:"register-name",children:"Nome"}),S.jsx("input",{id:"register-name",value:s,minLength:2,maxLength:50,autoComplete:"name",required:!0,placeholder:"Seu nome ou apelido",onChange:fe=>a(fe.target.value)}),S.jsx("label",{htmlFor:"register-email",children:"E-mail"}),S.jsx("input",{id:"register-email",type:"email",autoComplete:"email",value:u,maxLength:254,required:!0,onChange:fe=>d(fe.target.value)}),S.jsx("label",{htmlFor:"register-password",children:"Senha (mínimo 8 caracteres)"}),S.jsx("input",{id:"register-password",type:"password",autoComplete:"new-password",value:f,minLength:8,required:!0,onChange:fe=>m(fe.target.value)}),S.jsx("label",{htmlFor:"register-confirm",children:"Confirmar senha"}),S.jsx("input",{id:"register-confirm",type:"password",autoComplete:"new-password",value:y,minLength:8,required:!0,onChange:fe=>E(fe.target.value)}),S.jsx("button",{className:"primary",type:"submit",disabled:!bn||L,children:L?"Criando…":"Criar conta gratuita"}),S.jsx("small",{children:"Você precisará confirmar o e-mail. A conta não concede acesso automático a servidores privados."})]})]}),z&&S.jsx("p",{className:"notice",role:"status",children:z}),!bn&&S.jsx("p",{className:"login-note",children:"Login/cadastro aguardam configuração Firebase; convidados não precisam desta configuração."})]})]})}function $M({user:n,onRefresh:e,setError:t}){const[r,s]=Te.useState(!1);async function a(){s(!0);try{await n.reload(),e()}catch(d){t(nn(d))}finally{s(!1)}}async function u(){s(!0);try{await _k(n),t("Se permitido, um e-mail de confirmação foi enviado.")}catch(d){t(nn(d))}finally{s(!1)}}return S.jsx("main",{className:"center-screen",children:S.jsxs("div",{className:"setup-card",children:[S.jsx(gC,{subtitle:"VERIFICAÇÃO DE CONTA"}),S.jsx("h1",{children:"Confirme seu e-mail"}),S.jsx("p",{children:"Verifique sua caixa de entrada para acessar mensagens e servidores."}),S.jsxs("div",{className:"setup-actions",children:[S.jsx("button",{className:"primary",disabled:r,onClick:a,children:"Já confirmei"}),S.jsx("button",{disabled:r,onClick:u,children:"Reenviar confirmação"}),S.jsx("button",{onClick:()=>void eT(bn),children:"Sair"})]})]})})}function qM({item:n,user:e,onReact:t,onEdit:r,onDelete:s,editingId:a,editText:u,setEditText:d,onSave:f,onCancel:m,busy:y}){const E=n.senderUid===e.uid;return S.jsxs("article",{className:E?"chat-message mine":"chat-message",children:[S.jsx("span",{className:"message-avatar","aria-hidden":"true",children:String(n.senderName||"M").charAt(0).toUpperCase()}),S.jsxs("div",{className:"message-body",children:[S.jsxs("div",{className:"message-meta",children:[S.jsx("strong",{children:n.senderName||"Membro"}),S.jsx("time",{children:BM(n.createdAt)})]}),S.jsx("p",{children:n.text||"[Mensagem sem texto]"}),S.jsxs("div",{className:"message-controls",children:[cC.slice(0,4).map(w=>{var k;return S.jsxs("button",{className:((k=n.reactions)==null?void 0:k[e.uid])===w?"chosen-reaction":"","aria-label":"Reagir com "+w,title:"Reagir com "+w,onClick:()=>t(n,w),children:[w," ",Object.values(n.reactions||{}).filter(L=>L===w).length||""]},w)}),E&&S.jsxs(S.Fragment,{children:[S.jsx("button",{onClick:()=>r(n),children:"Editar"}),S.jsx("button",{onClick:()=>s(n),disabled:y,children:"Excluir"})]})]}),a===n.id&&S.jsxs("form",{className:"edit-row",onSubmit:w=>f(w,n),children:[S.jsx("input",{"aria-label":"Editar mensagem",maxLength:2e3,value:u,onChange:w=>d(w.target.value)}),S.jsx("button",{className:"primary",disabled:y||!u.trim(),children:"Salvar"}),S.jsx("button",{type:"button",onClick:m,children:"Cancelar"})]})]})]})}function HM(){var Wi;const[n,e]=Te.useState(void 0),[t,r]=Te.useState(()=>eg(window.location.pathname)),[s,a]=Te.useState("login");Te.useEffect(()=>{const q=()=>r(eg(window.location.pathname));return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[]);function u(q){window.history.pushState({},"","/r/"+q),r(q)}function d(q=!1){window.history.pushState({},"","/"),r(""),a(q?"register":"login")}async function f(){if(!(!(n!=null&&n.emailVerified)||se)){ve(!0),ge("");try{const q=await FM();u(q.id)}catch(q){ge(UM(q))}finally{ve(!1)}}}const[m,y]=Te.useState(0),[E,w]=Te.useState([]),[k,L]=Te.useState([]),[B,z]=Te.useState([]),[Q,J]=Te.useState({}),[ie,le]=Te.useState(""),[qe,fe]=Te.useState(""),[b,A]=Te.useState(""),[P,D]=Te.useState(""),[x,V]=Te.useState("servers"),[R,ft]=Te.useState({scope:"",items:[]}),[kt,ut]=Te.useState(""),[He,re]=Te.useState(""),[_e,ae]=Te.useState(""),[M,G]=Te.useState(""),[se,ve]=Te.useState(!1),[Ne,ge]=Te.useState(""),[ze,Ue]=Te.useState("");Te.useEffect(()=>{if(!bn){e(null);return}return Ek(bn,e,()=>e(null))},[]);const je=!!(n!=null&&n.uid)&&n.emailVerified===!0;Te.useEffect(()=>{if(!je||!(n!=null&&n.uid))return;const q="discordia:web:profile-pending:"+n.uid;try{if(window.localStorage.getItem(q)!=="1")return}catch{return}let Ee=!0;return hM(n,n.displayName||"Membro").then(()=>{if(Ee)try{window.localStorage.removeItem(q)}catch{}}).catch(Ye=>{Ee&&ge(nn(Ye))}),()=>{Ee=!1}},[je,n==null?void 0:n.uid,m]),Te.useEffect(()=>{if(!je){w([]),L([]);return}const q=gt=>ge(nn(gt)),Ee=TM(n.uid,w,q),Ye=AM(n.uid,L,q);return()=>{Ee(),Ye()}},[n==null?void 0:n.uid,je,m]),Te.useEffect(()=>{if(!je){z([]);return}return mM(n.uid,z,q=>ge(nn(q)))},[n==null?void 0:n.uid,je,m]);const it=Te.useMemo(()=>[...new Set(B.filter(q=>q.status==="accepted").map(q=>q.fromUid===(n==null?void 0:n.uid)?q.toUid:q.fromUid).filter(q=>typeof q=="string"&&q&&q!==(n==null?void 0:n.uid)))],[B,n==null?void 0:n.uid]),Vn=it.join("|");Te.useEffect(()=>{if(!je){J({});return}const q=Vn?Vn.split("|"):[];J({});const Ee=q.map(Ye=>gM(Ye,gt=>J(zt=>({...zt,[Ye]:gt})),gt=>ge(nn(gt))));return()=>Ee.forEach(Ye=>Ye==null?void 0:Ye())},[n==null?void 0:n.uid,je,Vn]);const xe=E.find(q=>q.id===ie)||E[0]||null,Fn=Array.isArray(xe==null?void 0:xe.textChannels)?xe.textChannels.filter(q=>q==null?void 0:q.id):[],Je=Fn.find(q=>q.id===qe)||Fn[0]||null,Lr=Array.isArray(xe==null?void 0:xe.voiceChannels)?xe.voiceChannels.filter(q=>q==null?void 0:q.id):[],an=Lr.find(q=>q.id===b)||null,ln=it.includes(P)?P:"",cr=q=>{const Ee=Q[q];return String((Ee==null?void 0:Ee.displayName)||(Ee==null?void 0:Ee.name)||(Ee!=null&&Ee.handle?"@"+Ee.handle:"Amigo")).slice(0,50)},si=B.filter(q=>q.status==="pending"&&q.toUid===(n==null?void 0:n.uid)),Qn={user:n,section:x,server:xe,channel:Je,friendUid:ln,friendUids:it},un=mC(Qn),Yn=jM(Qn),oi=Yn&&R.scope===Yn?R.items:[];Te.useEffect(()=>{if(ft({scope:Yn,items:[]}),ae(""),!Yn)return;let q=!0;const Ee=zt=>{q&&ft({scope:Yn,items:zt})},Ye=zt=>{q&&ge(nn(zt))};let gt;return x==="dm"?gt=wM(n.uid,ln,Ee,Ye):x==="servers"&&(gt=SM(xe.id,Je.id,Ee,Ye)),()=>{q=!1,gt==null||gt()}},[Yn]);function ai(q){V("servers"),le(q),fe(""),A(""),ut(""),ge("")}function ji(q){it.includes(q)&&(V("dm"),D(q),ut(""),ge(""))}async function Ct(q){var Ye;q.preventDefault();const Ee=kt.trim();if(!(!Ee||Ee.length>2e3||se||!un)){ve(!0),ge("");try{const gt=String(n.displayName||((Ye=n.email)==null?void 0:Ye.split("@")[0])||"Membro").slice(0,50);x==="dm"?await IM(n.uid,ln,gt,Ee):await CM(n.uid,xe.id,Je.id,gt,Ee),ut("")}catch(gt){ge(nn(gt))}finally{ve(!1)}}}async function wt(q,Ee){if(!se){ve(!0),ge("");try{await RM(q,n.uid,Ee)}catch(Ye){ge(nn(Ye))}finally{ve(!1)}}}async function hr(q){if(q.preventDefault(),!(!He.trim()||se)){ve(!0),Ue("");try{await fM(n.uid,He.trim()),re(""),Ue("Solicitação enviada.")}catch(Ee){Ue(nn(Ee))}finally{ve(!1)}}}async function Bi(q,Ee){if(!se){ve(!0),ge("");try{await pM(q,n.uid,Ee)}catch(Ye){ge(nn(Ye))}finally{ve(!1)}}}async function Mr(q,Ee){if(un)try{await vM(n.uid,x==="dm"?"dm":"server",ln,xe==null?void 0:xe.id,Je==null?void 0:Je.id,q,Ee)}catch(Ye){ge(nn(Ye))}}async function li(q,Ee){if(q.preventDefault(),!(!un||Ee.senderUid!==n.uid||!M.trim()||se)){ve(!0);try{await yM(n.uid,x==="dm"?"dm":"server",ln,xe==null?void 0:xe.id,Je==null?void 0:Je.id,Ee.id,M.trim()),ae(""),G("")}catch(Ye){ge(nn(Ye))}finally{ve(!1)}}}async function ui(q){if(!(!un||q.senderUid!==n.uid||se)&&window.confirm("Excluir esta mensagem para todos?")){ve(!0);try{await EM(n.uid,x==="dm"?"dm":"server",ln,xe==null?void 0:xe.id,Je==null?void 0:Je.id,q.id)}catch(Ee){ge(nn(Ee))}finally{ve(!1)}}}function zi(){V("friends"),ut(""),ge("")}function Hs(){eT(bn).catch(q=>ge(nn(q)))}if(t)return S.jsx(Te.Suspense,{fallback:S.jsx("main",{className:"center-screen",children:"Abrindo sala rápida…"}),children:S.jsx(zM,{roomId:t,user:n!=null&&n.emailVerified?n:null,onExit:()=>d(!1),onRegister:()=>d(!0)},t)});if(!oC||!bn)return S.jsx(dI,{initialMode:s,onJoinGuest:u});if(n===void 0)return S.jsx("main",{className:"center-screen",children:S.jsxs("div",{className:"loading",children:[S.jsx(cu,{}),S.jsx("p",{children:"Carregando Discórdia Web…"})]})});if(!n)return S.jsx(dI,{initialMode:s,onJoinGuest:u},s);if(!n.emailVerified)return S.jsxs(S.Fragment,{children:[S.jsx($M,{user:n,onRefresh:()=>y(q=>q+1),setError:ge}),Ne&&S.jsx("div",{className:"auth-feedback",role:"status",children:Ne})]});const Gs=x==="voice"?"◉ "+((an==null?void 0:an.name)||"Canal de voz"):x==="media-lab"?"Testes de mídia":x==="friends"?"Amigos e mensagens":x==="dm"?cr(ln):Je?"# "+(Je.name||"canal"):(xe==null?void 0:xe.name)||"Bem-vindo ao Discórdia";return S.jsxs("div",{className:"app-shell",children:[S.jsxs("nav",{className:"server-rail","aria-label":"Servidores e áreas",children:[S.jsx("button",{className:"rail-home","aria-label":"Discórdia, início",title:"Início",onClick:()=>ai(""),children:S.jsx(cu,{small:!0})}),S.jsx("span",{className:"rail-divider"}),E.map(q=>{var Ee;return S.jsx("button",{className:x==="servers"&&(xe==null?void 0:xe.id)===q.id?"server-icon active":"server-icon",title:q.name||"Servidor","aria-label":q.name||"Servidor",onClick:()=>ai(q.id),children:String(q.icon||((Ee=q.name)==null?void 0:Ee.charAt(0))||"◆").slice(0,2)},q.id)}),S.jsx("button",{className:x!=="servers"?"server-icon friends-icon active":"server-icon friends-icon","aria-label":"Amigos",title:"Amigos",onClick:zi,children:"♧"}),S.jsx("button",{className:"rail-quick-room","aria-label":"Criar sala rápida",title:"Criar sala por link",onClick:()=>void f(),disabled:se,children:"↗"}),S.jsx("button",{className:"rail-logout","aria-label":"Sair",title:"Sair da conta",onClick:Hs,children:"⏻"})]}),S.jsxs("aside",{className:"channel-sidebar","aria-label":"Navegação do espaço",children:[S.jsxs("div",{className:"sidebar-title",children:[S.jsx(cu,{small:!0}),S.jsxs("div",{children:[S.jsx("strong",{children:x==="servers"?(xe==null?void 0:xe.name)||"Meus servidores":"Mensagens"}),S.jsx("small",{children:"DISCÓRDIA WEB"})]})]}),x==="servers"?S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE TEXTO"}),S.jsxs("div",{className:"channel-list",children:[Fn.map(q=>S.jsxs("button",{className:q.id===(Je==null?void 0:Je.id)?"channel-choice active":"channel-choice",onClick:()=>{V("servers"),fe(q.id),ut("")},children:["# ",S.jsx("span",{children:q.name||"canal"})]},q.id)),!Fn.length&&S.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de texto disponível."})]}),S.jsx("div",{className:"sidebar-subhead",children:"CANAIS DE VOZ · PRÉVIA"}),S.jsxs("div",{className:"channel-list",children:[Lr.map(q=>S.jsxs("button",{className:x==="voice"&&(an==null?void 0:an.id)===q.id?"channel-choice active":"channel-choice",onClick:()=>{V("voice"),A(q.id),ut("")},children:["◉ ",S.jsx("span",{children:q.name||"voz"})]},q.id)),!Lr.length&&S.jsx("p",{className:"sidebar-empty",children:"Nenhum canal de voz disponível."})]}),S.jsx("p",{className:"sidebar-empty",children:"Assistir pelo SFU exige permissão e ativação na prévia."})]}):S.jsxs(S.Fragment,{children:[S.jsxs("button",{className:x==="friends"?"channel-choice active":"channel-choice",onClick:zi,children:["♧ ",S.jsx("span",{children:"Amigos"})]}),S.jsx("div",{className:"sidebar-subhead",children:"MENSAGENS DIRETAS"}),S.jsx("div",{className:"channel-list",children:it.map(q=>S.jsxs("button",{className:x==="dm"&&q===ln?"channel-choice active":"channel-choice",onClick:()=>ji(q),children:["◉ ",S.jsx("span",{children:cr(q)})]},q))})]}),S.jsxs("div",{className:"quick-room-launch",children:[S.jsx("strong",{children:"Sala rápida por link"}),S.jsx("p",{children:"Crie uma sala temporária para assistir à sua tela com convidados."}),S.jsx("button",{type:"button",className:"primary",disabled:se,onClick:()=>void f(),children:se?"Criando sala…":"Criar sala e convidar"})]}),S.jsx("div",{className:"sidebar-subhead",children:"DISPOSITIVOS WEB"}),S.jsxs("button",{type:"button",className:x==="media-lab"?"channel-choice active":"channel-choice",onClick:()=>{V("media-lab"),ut(""),ge("")},children:["◉ ",S.jsx("span",{children:"Testar microfone, câmera e tela"})]}),S.jsxs("div",{className:"sidebar-user",children:[S.jsx("div",{className:"user-avatar",children:String(n.displayName||n.email||"U").charAt(0).toUpperCase()}),S.jsxs("div",{children:[S.jsx("strong",{children:n.displayName||((Wi=n.email)==null?void 0:Wi.split("@")[0])||"Usuário"}),S.jsx("small",{children:"Conectado"})]})]})]}),S.jsxs("main",{className:"conversation",children:[S.jsxs("header",{className:"conversation-header",children:[S.jsxs("div",{children:[S.jsx("span",{className:"header-kicker",children:"DISCÓRDIA WEB · RC20"}),S.jsx("h1",{children:Gs})]}),S.jsxs("span",{className:"sync-badge",children:[S.jsx("span",{className:"online-dot"})," Conta autenticada"]})]}),Ne&&S.jsxs("div",{role:"alert",className:"inline-error",children:[S.jsx("span",{children:Ne}),S.jsx("button",{onClick:()=>ge(""),children:"Fechar"})]}),k.filter(q=>q.status==="pending").map(q=>S.jsxs("div",{className:"invite-banner",children:[S.jsxs("span",{children:["Convite para ",S.jsx("strong",{children:String(q.serverName||"servidor").slice(0,70)})]}),S.jsx("button",{disabled:se,onClick:()=>void wt(q,!0),children:"Aceitar"}),S.jsx("button",{disabled:se,onClick:()=>void wt(q,!1),children:"Recusar"})]},q.id)),x==="voice"?S.jsx(Te.Suspense,{fallback:S.jsx("div",{className:"center-screen",children:"Preparando visualizador Web…"}),children:S.jsx(WM,{user:n,server:xe,channel:an},n.uid+":"+((xe==null?void 0:xe.id)||"")+":"+((an==null?void 0:an.id)||""))}):x==="media-lab"?S.jsx(DM,{}):x==="friends"?S.jsxs("section",{className:"friend-content",children:[S.jsxs("div",{className:"section-heading",children:[S.jsx("h2",{children:"Seus amigos"}),S.jsx("p",{children:"Converse com seus contatos do Desktop e Android."})]}),S.jsxs("form",{className:"friend-form",onSubmit:hr,children:[S.jsx("label",{htmlFor:"web-friend",children:"Adicionar por @identificador"}),S.jsxs("div",{children:[S.jsx("input",{id:"web-friend",value:He,maxLength:130,onChange:q=>re(q.target.value),placeholder:"@seuamigo",required:!0}),S.jsx("button",{className:"primary",disabled:se||!He.trim(),children:"Enviar solicitação"})]})]}),ze&&S.jsx("p",{className:"notice",role:"status",children:ze}),si.length>0&&S.jsxs("div",{className:"friend-group",children:[S.jsx("h3",{children:"Solicitações recebidas"}),si.map(q=>S.jsxs("div",{className:"friend-line",children:[S.jsx("strong",{children:cr(q.fromUid)}),S.jsxs("div",{children:[S.jsx("button",{disabled:se,onClick:()=>void Bi(q,!0),children:"Aceitar"}),S.jsx("button",{disabled:se,onClick:()=>void Bi(q,!1),children:"Recusar"})]})]},q.id))]}),S.jsxs("div",{className:"friend-group",children:[S.jsx("h3",{children:"Conversas"}),!it.length&&S.jsx("p",{className:"empty",children:"Seus amigos aparecerão aqui após aceitarem a solicitação."}),it.map(q=>S.jsxs("button",{className:"friend-line clickable",onClick:()=>ji(q),children:[S.jsxs("span",{className:"friend-identity",children:[S.jsx("span",{className:"friend-avatar",children:cr(q).charAt(0).toUpperCase()}),S.jsx("strong",{children:cr(q)})]}),S.jsx("span",{children:"Enviar mensagem →"})]},q))]})]}):S.jsxs(S.Fragment,{children:[S.jsxs("section",{className:"message-scroll","aria-label":"Mensagens","aria-live":"polite",children:[x==="servers"&&!xe&&S.jsxs("div",{className:"empty-state",children:[S.jsx(cu,{}),S.jsx("h2",{children:"Bem-vindo ao Discórdia Web"}),S.jsx("p",{children:"Os servidores aos quais você tem acesso aparecerão na barra lateral."})]}),x==="servers"&&xe&&!Je&&S.jsxs("div",{className:"empty-state",children:[S.jsx("h2",{children:"Sem canal de texto"}),S.jsx("p",{children:"Este servidor ainda não possui canais disponíveis para você."})]}),x==="dm"&&!ln&&S.jsxs("div",{className:"empty-state",children:[S.jsx("h2",{children:"Conversa indisponível"}),S.jsx("p",{children:"Selecione um amigo com solicitação aceita."})]}),un&&oi.length===0&&S.jsxs("div",{className:"empty-state",children:[S.jsx("h2",{children:"Comece a conversa"}),S.jsx("p",{children:"Suas mensagens serão sincronizadas com as outras plataformas."})]}),oi.map(q=>S.jsx(qM,{item:q,user:n,onReact:Mr,onEdit:Ee=>{ae(Ee.id),G(Ee.text||"")},onDelete:ui,editingId:_e,editText:M,setEditText:G,onSave:li,onCancel:()=>ae(""),busy:se},q.id))]}),un&&S.jsxs("form",{className:"composer",onSubmit:Ct,children:[S.jsx("label",{htmlFor:"web-message",children:"Mensagem"}),S.jsxs("div",{className:"composer-inner",children:[S.jsx("input",{id:"web-message",maxLength:2e3,value:kt,onChange:q=>ut(q.target.value),placeholder:x==="dm"?"Mensagem para "+cr(ln):"Mensagem em #"+((Je==null?void 0:Je.name)||"canal")}),S.jsx("button",{type:"submit",className:"primary",disabled:se||!kt.trim(),children:"Enviar"})]}),S.jsx("small",{children:"Mensagens de texto · Sem integração de voz ou transmissão nesta prévia"})]})]})]})]})}NA.createRoot(document.getElementById("root")).render(S.jsx(SA.StrictMode,{children:S.jsx(HM,{})}));export{VM as a,iV as b,sV as c,nV as d,QM as e,YM as f,fC as g,bn as h,ZM as i,S as j,tV as k,rV as n,eV as o,Te as r,XM as s,JM as u};
