function Bp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ki={},Hp={get exports(){return Ki},set exports(e){Ki=e}},Ro={},S={},Wp={get exports(){return S},set exports(e){S=e}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Gp=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),qp=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Zp=Symbol.for("react.suspense"),em=Symbol.for("react.memo"),tm=Symbol.for("react.lazy"),lu=Symbol.iterator;function nm(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ld=Object.assign,ud={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=ud,this.updater=n||ad}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cd(){}cd.prototype=Kn.prototype;function Qa(e,t,n){this.props=e,this.context=t,this.refs=ud,this.updater=n||ad}var qa=Qa.prototype=new cd;qa.constructor=Qa;ld(qa,Kn.prototype);qa.isPureReactComponent=!0;var uu=Array.isArray,dd=Object.prototype.hasOwnProperty,Ya={current:null},fd={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)dd.call(t,r)&&!fd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qr,type:e,key:o,ref:s,props:i,_owner:Ya.current}}function rm(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function im(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cu=/\/+/g;function ns(e,t){return typeof e=="object"&&e!==null&&e.key!=null?im(""+e.key):t.toString(36)}function Oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qr:case Kp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ns(s,0):r,uu(i)?(n="",e!=null&&(n=e.replace(cu,"$&/")+"/"),Oi(i,t,n,"",function(u){return u})):i!=null&&(Ja(i)&&(i=rm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(cu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",uu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ns(o,a);s+=Oi(o,t,n,l,i)}else if(l=nm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ns(o,a++),s+=Oi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function di(e,t,n){if(e==null)return e;var r=[],i=0;return Oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function om(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Ai={transition:null},sm={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Ya};D.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!Ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Kn;D.Fragment=Gp;D.Profiler=qp;D.PureComponent=Qa;D.StrictMode=Qp;D.Suspense=Zp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ld({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ya.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)dd.call(t,l)&&!fd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yp,_context:e},e.Consumer=e};D.createElement=hd;D.createFactory=function(e){var t=hd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Xp,render:e}};D.isValidElement=Ja;D.lazy=function(e){return{$$typeof:tm,_payload:{_status:-1,_result:e},_init:om}};D.memo=function(e,t){return{$$typeof:em,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return he.current.useCallback(e,t)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,t){return he.current.useEffect(e,t)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return he.current.useMemo(e,t)};D.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return he.current.useTransition()};D.version="18.2.0";(function(e){e.exports=D})(Wp);const pd=Vp(S),$s=Bp({__proto__:null,default:pd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am=S,lm=Symbol.for("react.element"),um=Symbol.for("react.fragment"),cm=Object.prototype.hasOwnProperty,dm=am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fm={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)cm.call(t,r)&&!fm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lm,type:e,key:o,ref:s,props:i,_owner:dm.current}}Ro.Fragment=um;Ro.jsx=md;Ro.jsxs=md;(function(e){e.exports=Ro})(Hp);const E=Ki.jsx,je=Ki.jsxs;var bs={},Bs={},hm={get exports(){return Bs},set exports(e){Bs=e}},Ce={},Vs={},pm={get exports(){return Vs},set exports(e){Vs=e}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var A=C.length;C.push(O);e:for(;0<A;){var G=A-1>>>1,Z=C[G];if(0<i(Z,O))C[G]=O,C[A]=Z,A=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],A=C.pop();if(A!==O){C[0]=A;e:for(var G=0,Z=C.length,ui=Z>>>1;G<ui;){var Wt=2*(G+1)-1,ts=C[Wt],Kt=Wt+1,ci=C[Kt];if(0>i(ts,A))Kt<Z&&0>i(ci,ts)?(C[G]=ci,C[Kt]=A,G=Kt):(C[G]=ts,C[Wt]=A,G=Wt);else if(Kt<Z&&0>i(ci,A))C[G]=ci,C[Kt]=A,G=Kt;else break e}}return O}function i(C,O){var A=C.sortIndex-O.sortIndex;return A!==0?A:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,m=3,g=!1,y=!1,v=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function w(C){if(v=!1,h(C),!y)if(n(l)!==null)y=!0,Zo(I);else{var O=n(u);O!==null&&es(w,O.startTime-C)}}function I(C,O){y=!1,v&&(v=!1,f(P),P=-1),g=!0;var A=m;try{for(h(O),p=n(l);p!==null&&(!(p.expirationTime>O)||C&&!Le());){var G=p.callback;if(typeof G=="function"){p.callback=null,m=p.priorityLevel;var Z=G(p.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&r(l),h(O)}else r(l);p=n(l)}if(p!==null)var ui=!0;else{var Wt=n(u);Wt!==null&&es(w,Wt.startTime-O),ui=!1}return ui}finally{p=null,m=A,g=!1}}var T=!1,R=null,P=-1,j=5,x=-1;function Le(){return!(e.unstable_now()-x<j)}function Zn(){if(R!==null){var C=e.unstable_now();x=C;var O=!0;try{O=R(!0,C)}finally{O?er():(T=!1,R=null)}}else T=!1}var er;if(typeof c=="function")er=function(){c(Zn)};else if(typeof MessageChannel<"u"){var au=new MessageChannel,bp=au.port2;au.port1.onmessage=Zn,er=function(){bp.postMessage(null)}}else er=function(){M(Zn,0)};function Zo(C){R=C,T||(T=!0,er())}function es(C,O){P=M(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Zo(I))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return C()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=m;m=C;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(C,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:d++,callback:O,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(C.sortIndex=A,t(u,C),n(l)===null&&C===n(u)&&(v?(f(P),P=-1):v=!0,es(w,A-G))):(C.sortIndex=Z,t(l,C),y||g||(y=!0,Zo(I))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var O=m;return function(){var A=m;m=O;try{return C.apply(this,arguments)}finally{m=A}}}})(gd);(function(e){e.exports=gd})(pm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=S,ke=Vs;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yd=new Set,Tr={};function pn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)yd.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=Object.prototype.hasOwnProperty,mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,du={},fu={};function gm(e){return Hs.call(fu,e)?!0:Hs.call(du,e)?!1:mm.test(e)?fu[e]=!0:(du[e]=!0,!1)}function vm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ym(e,t,n,r){if(t===null||typeof t>"u"||vm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,Za);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,Za);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,Za);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function el(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ym(t,n,i,r)&&(n=null),r||i===null?gm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),tl=Symbol.for("react.strict_mode"),Ws=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),_d=Symbol.for("react.context"),nl=Symbol.for("react.forward_ref"),Ks=Symbol.for("react.suspense"),Gs=Symbol.for("react.suspense_list"),rl=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Sd=Symbol.for("react.offscreen"),hu=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,rs;function ur(e){if(rs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rs=t&&t[1]||""}return`
`+rs+e}var is=!1;function os(e,t){if(!e||is)return"";is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function wm(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=os(e.type,!1),e;case 11:return e=os(e.type.render,!1),e;case 1:return e=os(e.type,!0),e;default:return""}}function Qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case Ws:return"Profiler";case tl:return"StrictMode";case Ks:return"Suspense";case Gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _d:return(e.displayName||"Context")+".Consumer";case wd:return(e._context.displayName||"Context")+".Provider";case nl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rl:return t=e.displayName||null,t!==null?t:Qs(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Qs(e(t))}catch{}}return null}function _m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qs(t);case 8:return t===tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sm(e){var t=Ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Sm(e))}function Id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kd(e,t){t=t.checked,t!=null&&el(e,"checked",t,!1)}function Ys(e,t){kd(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Js(e,t.type,n):t.hasOwnProperty("defaultValue")&&Js(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Js(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(cr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function Cd(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Td(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Td(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,Rd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Em.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Im=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(e,t){if(t){if(Im[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ra=null,xn=null,Dn=null;function yu(e){if(e=Xr(e)){if(typeof ra!="function")throw Error(_(280));var t=e.stateNode;t&&(t=xo(t),ra(e.stateNode,e.type,t))}}function Od(e){xn?Dn?Dn.push(e):Dn=[e]:xn=e}function Ad(){if(xn){var e=xn,t=Dn;if(Dn=xn=null,yu(e),t)for(e=0;e<t.length;e++)yu(t[e])}}function xd(e,t){return e(t)}function Dd(){}var ss=!1;function Ld(e,t,n){if(ss)return e(t,n);ss=!0;try{return xd(e,t,n)}finally{ss=!1,(xn!==null||Dn!==null)&&(Dd(),Ad())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ia=!1;if(lt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ia=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ia=!1}function km(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var gr=!1,Qi=null,qi=!1,oa=null,Cm={onError:function(e){gr=!0,Qi=e}};function Tm(e,t,n,r,i,o,s,a,l){gr=!1,Qi=null,km.apply(Cm,arguments)}function Rm(e,t,n,r,i,o,s,a,l){if(Tm.apply(this,arguments),gr){if(gr){var u=Qi;gr=!1,Qi=null}else throw Error(_(198));qi||(qi=!0,oa=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wu(e){if(mn(e)!==e)throw Error(_(188))}function Pm(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wu(i),e;if(o===r)return wu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ud(e){return e=Pm(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fd(e);if(t!==null)return t;e=e.sibling}return null}var zd=ke.unstable_scheduleCallback,_u=ke.unstable_cancelCallback,Nm=ke.unstable_shouldYield,Om=ke.unstable_requestPaint,Q=ke.unstable_now,Am=ke.unstable_getCurrentPriorityLevel,ol=ke.unstable_ImmediatePriority,jd=ke.unstable_UserBlockingPriority,Yi=ke.unstable_NormalPriority,xm=ke.unstable_LowPriority,$d=ke.unstable_IdlePriority,Po=null,Qe=null;function Dm(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Um,Lm=Math.log,Mm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Lm(e)/Mm|0)|0}var mi=64,gi=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=dr(a):(o&=s,o!==0&&(r=dr(o)))}else s=n&~i,s!==0?r=dr(s):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),i=1<<n,r|=e[n],t&=~i;return r}function Fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$e(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Fm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bd(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function as(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function jm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$e(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vd,al,Hd,Wd,Kd,aa=!1,vi=[],Pt=null,Nt=null,Ot=null,Nr=new Map,Or=new Map,wt=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xr(t),t!==null&&al(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bm(e,t,n,r,i){switch(t){case"focusin":return Pt=rr(Pt,e,t,n,r,i),!0;case"dragenter":return Nt=rr(Nt,e,t,n,r,i),!0;case"mouseover":return Ot=rr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,rr(Nr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Or.set(o,rr(Or.get(o)||null,e,t,n,r,i)),!0}return!1}function Gd(e){var t=Yt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Md(n),t!==null){e.blockedOn=t,Kd(e.priority,function(){Hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=la(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);na=r,n.target.dispatchEvent(r),na=null}else return t=Xr(n),t!==null&&al(t),e.blockedOn=n,!1;t.shift()}return!0}function Eu(e,t,n){xi(e)&&n.delete(t)}function Bm(){aa=!1,Pt!==null&&xi(Pt)&&(Pt=null),Nt!==null&&xi(Nt)&&(Nt=null),Ot!==null&&xi(Ot)&&(Ot=null),Nr.forEach(Eu),Or.forEach(Eu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,aa||(aa=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Bm)))}function Ar(e){function t(i){return ir(i,e)}if(0<vi.length){ir(vi[0],e);for(var n=1;n<vi.length;n++){var r=vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&ir(Pt,e),Nt!==null&&ir(Nt,e),Ot!==null&&ir(Ot,e),Nr.forEach(t),Or.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Gd(n),n.blockedOn===null&&wt.shift()}var Ln=pt.ReactCurrentBatchConfig,Xi=!0;function Vm(e,t,n,r){var i=U,o=Ln.transition;Ln.transition=null;try{U=1,ll(e,t,n,r)}finally{U=i,Ln.transition=o}}function Hm(e,t,n,r){var i=U,o=Ln.transition;Ln.transition=null;try{U=4,ll(e,t,n,r)}finally{U=i,Ln.transition=o}}function ll(e,t,n,r){if(Xi){var i=la(e,t,n,r);if(i===null)vs(e,t,r,Zi,n),Su(e,r);else if(bm(i,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<$m.indexOf(e)){for(;i!==null;){var o=Xr(i);if(o!==null&&Vd(o),o=la(e,t,n,r),o===null&&vs(e,t,r,Zi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vs(e,t,r,null,n)}}var Zi=null;function la(e,t,n,r){if(Zi=null,e=il(r),e=Yt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function Qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Am()){case ol:return 1;case jd:return 4;case Yi:case xm:return 16;case $d:return 536870912;default:return 16}default:return 16}}var Ct=null,ul=null,Di=null;function qd(){if(Di)return Di;var e,t=ul,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Di=i.slice(e,1<r?1-r:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function Iu(){return!1}function Te(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yi:Iu,this.isPropagationStopped=Iu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Te(Gn),Jr=W({},Gn,{view:0,detail:0}),Wm=Te(Jr),ls,us,or,No=W({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(ls=e.screenX-or.screenX,us=e.screenY-or.screenY):us=ls=0,or=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:us}}),ku=Te(No),Km=W({},No,{dataTransfer:0}),Gm=Te(Km),Qm=W({},Jr,{relatedTarget:0}),cs=Te(Qm),qm=W({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=Te(qm),Jm=W({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xm=Te(Jm),Zm=W({},Gn,{data:0}),Cu=Te(Zm),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ng[e])?!!t[e]:!1}function dl(){return rg}var ig=W({},Jr,{key:function(e){if(e.key){var t=eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dl,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),og=Te(ig),sg=W({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Te(sg),ag=W({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dl}),lg=Te(ag),ug=W({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=Te(ug),dg=W({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=Te(dg),hg=[9,13,27,32],fl=lt&&"CompositionEvent"in window,vr=null;lt&&"documentMode"in document&&(vr=document.documentMode);var pg=lt&&"TextEvent"in window&&!vr,Yd=lt&&(!fl||vr&&8<vr&&11>=vr),Ru=String.fromCharCode(32),Pu=!1;function Jd(e,t){switch(e){case"keyup":return hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function mg(e,t){switch(e){case"compositionend":return Xd(t);case"keypress":return t.which!==32?null:(Pu=!0,Ru);case"textInput":return e=t.data,e===Ru&&Pu?null:e;default:return null}}function gg(e,t){if(_n)return e==="compositionend"||!fl&&Jd(e,t)?(e=qd(),Di=ul=Ct=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yd&&t.locale!=="ko"?null:t.data;default:return null}}var vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vg[e.type]:t==="textarea"}function Zd(e,t,n,r){Od(r),t=eo(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,xr=null;function yg(e){df(e,0)}function Oo(e){var t=In(e);if(Id(t))return e}function wg(e,t){if(e==="change")return t}var ef=!1;if(lt){var ds;if(lt){var fs="oninput"in document;if(!fs){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),fs=typeof Ou.oninput=="function"}ds=fs}else ds=!1;ef=ds&&(!document.documentMode||9<document.documentMode)}function Au(){yr&&(yr.detachEvent("onpropertychange",tf),xr=yr=null)}function tf(e){if(e.propertyName==="value"&&Oo(xr)){var t=[];Zd(t,xr,e,il(e)),Ld(yg,t)}}function _g(e,t,n){e==="focusin"?(Au(),yr=t,xr=n,yr.attachEvent("onpropertychange",tf)):e==="focusout"&&Au()}function Sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(xr)}function Eg(e,t){if(e==="click")return Oo(t)}function Ig(e,t){if(e==="input"||e==="change")return Oo(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:kg;function Dr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hs.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var n=xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rf(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cg(e){var t=rf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nf(n.ownerDocument.documentElement,n)){if(r!==null&&hl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Du(n,o);var s=Du(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tg=lt&&"documentMode"in document&&11>=document.documentMode,Sn=null,ua=null,wr=null,ca=!1;function Lu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ca||Sn==null||Sn!==Gi(r)||(r=Sn,"selectionStart"in r&&hl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Dr(wr,r)||(wr=r,r=eo(ua,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},hs={},of={};lt&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Ao(e){if(hs[e])return hs[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in of)return hs[e]=t[n];return e}var sf=Ao("animationend"),af=Ao("animationiteration"),lf=Ao("animationstart"),uf=Ao("transitionend"),cf=new Map,Mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){cf.set(e,t),pn(t,[e])}for(var ps=0;ps<Mu.length;ps++){var ms=Mu[ps],Rg=ms.toLowerCase(),Pg=ms[0].toUpperCase()+ms.slice(1);bt(Rg,"on"+Pg)}bt(sf,"onAnimationEnd");bt(af,"onAnimationIteration");bt(lf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(uf,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rm(r,t,void 0,e),e.currentTarget=null}function df(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Uu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Uu(i,a,u),o=l}}}if(qi)throw e=oa,qi=!1,oa=null,e}function $(e,t){var n=t[ma];n===void 0&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(ff(t,e,2,!1),n.add(r))}function gs(e,t,n){var r=0;t&&(r|=4),ff(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[_i]){e[_i]=!0,yd.forEach(function(n){n!=="selectionchange"&&(Ng.has(n)||gs(n,!1,e),gs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,gs("selectionchange",!1,t))}}function ff(e,t,n,r){switch(Qd(t)){case 1:var i=Vm;break;case 4:i=Hm;break;default:i=ll}n=i.bind(null,t,n,e),i=void 0,!ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Yt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ld(function(){var u=o,d=il(n),p=[];e:{var m=cf.get(e);if(m!==void 0){var g=cl,y=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":g=og;break;case"focusin":y="focus",g=cs;break;case"focusout":y="blur",g=cs;break;case"beforeblur":case"afterblur":g=cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lg;break;case sf:case af:case lf:g=Ym;break;case uf:g=cg;break;case"scroll":g=Wm;break;case"wheel":g=fg;break;case"copy":case"cut":case"paste":g=Xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Tu}var v=(t&4)!==0,M=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,f!==null&&(w=Pr(c,f),w!=null&&v.push(Mr(c,w,h)))),M)break;c=c.return}0<v.length&&(m=new g(m,y,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==na&&(y=n.relatedTarget||n.fromElement)&&(Yt(y)||y[ut]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Yt(y):null,y!==null&&(M=mn(y),y!==M||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=ku,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Tu,w="onPointerLeave",f="onPointerEnter",c="pointer"),M=g==null?m:In(g),h=y==null?m:In(y),m=new v(w,c+"leave",g,n,d),m.target=M,m.relatedTarget=h,w=null,Yt(d)===u&&(v=new v(f,c+"enter",y,n,d),v.target=h,v.relatedTarget=M,w=v),M=w,g&&y)t:{for(v=g,f=y,c=0,h=v;h;h=vn(h))c++;for(h=0,w=f;w;w=vn(w))h++;for(;0<c-h;)v=vn(v),c--;for(;0<h-c;)f=vn(f),h--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=vn(v),f=vn(f)}v=null}else v=null;g!==null&&Fu(p,m,g,v,!1),y!==null&&M!==null&&Fu(p,M,y,v,!0)}}e:{if(m=u?In(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var I=wg;else if(Nu(m))if(ef)I=Ig;else{I=Sg;var T=_g}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=Eg);if(I&&(I=I(e,u))){Zd(p,I,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Js(m,"number",m.value)}switch(T=u?In(u):window,e){case"focusin":(Nu(T)||T.contentEditable==="true")&&(Sn=T,ua=u,wr=null);break;case"focusout":wr=ua=Sn=null;break;case"mousedown":ca=!0;break;case"contextmenu":case"mouseup":case"dragend":ca=!1,Lu(p,n,d);break;case"selectionchange":if(Tg)break;case"keydown":case"keyup":Lu(p,n,d)}var R;if(fl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _n?Jd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Yd&&n.locale!=="ko"&&(_n||P!=="onCompositionStart"?P==="onCompositionEnd"&&_n&&(R=qd()):(Ct=d,ul="value"in Ct?Ct.value:Ct.textContent,_n=!0)),T=eo(u,P),0<T.length&&(P=new Cu(P,e,null,n,d),p.push({event:P,listeners:T}),R?P.data=R:(R=Xd(n),R!==null&&(P.data=R)))),(R=pg?mg(e,n):gg(e,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(d=new Cu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=R))}df(p,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift(Mr(e,o,i)),o=Pr(e,t),o!=null&&r.push(Mr(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Pr(n,o),l!=null&&s.unshift(Mr(n,l,a))):i||(l=Pr(n,o),l!=null&&s.push(Mr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Og=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function zu(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Ag,"")}function Si(e,t,n){if(t=zu(t),zu(e)!==t&&n)throw Error(_(425))}function to(){}var da=null,fa=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Lg)}:pa;function Lg(e){setTimeout(function(){throw e})}function ys(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ar(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Qn,Ur="__reactProps$"+Qn,ut="__reactContainer$"+Qn,ma="__reactEvents$"+Qn,Mg="__reactListeners$"+Qn,Ug="__reactHandles$"+Qn;function Yt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$u(e);e!==null;){if(n=e[Ge])return n;e=$u(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[Ge]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function xo(e){return e[Ur]||null}var ga=[],kn=-1;function Bt(e){return{current:e}}function b(e){0>kn||(e.current=ga[kn],ga[kn]=null,kn--)}function z(e,t){kn++,ga[kn]=e.current,e.current=t}var $t={},le=Bt($t),ve=Bt(!1),rn=$t;function $n(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function no(){b(ve),b(le)}function bu(e,t,n){if(le.current!==$t)throw Error(_(168));z(le,t),z(ve,n)}function hf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,_m(e)||"Unknown",i));return W({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,rn=le.current,z(le,e),z(ve,ve.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=hf(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,b(ve),b(le),z(le,e)):b(ve),z(ve,n)}var nt=null,Do=!1,ws=!1;function pf(e){nt===null?nt=[e]:nt.push(e)}function Fg(e){Do=!0,pf(e)}function Vt(){if(!ws&&nt!==null){ws=!0;var e=0,t=U;try{var n=nt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Do=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),zd(ol,Vt),i}finally{U=t,ws=!1}}return null}var Cn=[],Tn=0,io=null,oo=0,Re=[],Pe=0,on=null,rt=1,it="";function Gt(e,t){Cn[Tn++]=oo,Cn[Tn++]=io,io=e,oo=t}function mf(e,t,n){Re[Pe++]=rt,Re[Pe++]=it,Re[Pe++]=on,on=e;var r=rt;e=it;var i=32-$e(r)-1;r&=~(1<<i),n+=1;var o=32-$e(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,rt=1<<32-$e(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function pl(e){e.return!==null&&(Gt(e,1),mf(e,1,0))}function ml(e){for(;e===io;)io=Cn[--Tn],Cn[Tn]=null,oo=Cn[--Tn],Cn[Tn]=null;for(;e===on;)on=Re[--Pe],Re[Pe]=null,it=Re[--Pe],Re[Pe]=null,rt=Re[--Pe],Re[Pe]=null}var Ee=null,Se=null,B=!1,ze=null;function gf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function va(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ya(e){if(B){var t=Se;if(t){var n=t;if(!Vu(e,t)){if(va(e))throw Error(_(418));t=At(n.nextSibling);var r=Ee;t&&Vu(e,t)?gf(r,n):(e.flags=e.flags&-4097|2,B=!1,Ee=e)}}else{if(va(e))throw Error(_(418));e.flags=e.flags&-4097|2,B=!1,Ee=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Ei(e){if(e!==Ee)return!1;if(!B)return Hu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=Se)){if(va(e))throw vf(),Error(_(418));for(;t;)gf(e,t),t=At(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?At(e.stateNode.nextSibling):null;return!0}function vf(){for(var e=Se;e;)e=At(e.nextSibling)}function bn(){Se=Ee=null,B=!1}function gl(e){ze===null?ze=[e]:ze.push(e)}var zg=pt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var so=Bt(null),ao=null,Rn=null,vl=null;function yl(){vl=Rn=ao=null}function wl(e){var t=so.current;b(so),e._currentValue=t}function wa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){ao=e,vl=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(vl!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(ao===null)throw Error(_(308));Rn=e,ao.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var Jt=null;function _l(e){Jt===null?Jt=[e]:Jt.push(e)}function yf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_l(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,_l(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}function Wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(m=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(g,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(g,p,m):y,m==null)break e;p=W({},p,m);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=p}}function Ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var _f=new vd.Component().refs;function _a(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(be(t,e,i,r),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(be(t,e,i,r),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Lt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(be(t,e,r,n),Mi(t,e,r))}};function Gu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,o):!0}function Sf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=xe(o):(i=ye(t)?rn:le.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_f,Sl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xe(o):(o=ye(t)?rn:le.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_a(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Lo.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===_f&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function Ef(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function o(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,w){return c===null||c.tag!==6?(c=Ts(h,f.mode,w),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,w){var I=h.type;return I===wn?d(f,c,h.props.children,w,h.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===vt&&qu(I)===c.type)?(w=i(c,h.props),w.ref=sr(f,c,h),w.return=f,w):(w=bi(h.type,h.key,h.props,null,f.mode,w),w.ref=sr(f,c,h),w.return=f,w)}function u(f,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Rs(h,f.mode,w),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function d(f,c,h,w,I){return c===null||c.tag!==7?(c=tn(h,f.mode,w,I),c.return=f,c):(c=i(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ts(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fi:return h=bi(c.type,c.key,c.props,null,f.mode,h),h.ref=sr(f,null,c),h.return=f,h;case yn:return c=Rs(c,f.mode,h),c.return=f,c;case vt:var w=c._init;return p(f,w(c._payload),h)}if(cr(c)||tr(c))return c=tn(c,f.mode,h,null),c.return=f,c;Ii(f,c)}return null}function m(f,c,h,w){var I=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return I!==null?null:a(f,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fi:return h.key===I?l(f,c,h,w):null;case yn:return h.key===I?u(f,c,h,w):null;case vt:return I=h._init,m(f,c,I(h._payload),w)}if(cr(h)||tr(h))return I!==null?null:d(f,c,h,w,null);Ii(f,h)}return null}function g(f,c,h,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(h)||null,a(c,f,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fi:return f=f.get(w.key===null?h:w.key)||null,l(c,f,w,I);case yn:return f=f.get(w.key===null?h:w.key)||null,u(c,f,w,I);case vt:var T=w._init;return g(f,c,h,T(w._payload),I)}if(cr(w)||tr(w))return f=f.get(h)||null,d(c,f,w,I,null);Ii(c,w)}return null}function y(f,c,h,w){for(var I=null,T=null,R=c,P=c=0,j=null;R!==null&&P<h.length;P++){R.index>P?(j=R,R=null):j=R.sibling;var x=m(f,R,h[P],w);if(x===null){R===null&&(R=j);break}e&&R&&x.alternate===null&&t(f,R),c=o(x,c,P),T===null?I=x:T.sibling=x,T=x,R=j}if(P===h.length)return n(f,R),B&&Gt(f,P),I;if(R===null){for(;P<h.length;P++)R=p(f,h[P],w),R!==null&&(c=o(R,c,P),T===null?I=R:T.sibling=R,T=R);return B&&Gt(f,P),I}for(R=r(f,R);P<h.length;P++)j=g(R,f,P,h[P],w),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?P:j.key),c=o(j,c,P),T===null?I=j:T.sibling=j,T=j);return e&&R.forEach(function(Le){return t(f,Le)}),B&&Gt(f,P),I}function v(f,c,h,w){var I=tr(h);if(typeof I!="function")throw Error(_(150));if(h=I.call(h),h==null)throw Error(_(151));for(var T=I=null,R=c,P=c=0,j=null,x=h.next();R!==null&&!x.done;P++,x=h.next()){R.index>P?(j=R,R=null):j=R.sibling;var Le=m(f,R,x.value,w);if(Le===null){R===null&&(R=j);break}e&&R&&Le.alternate===null&&t(f,R),c=o(Le,c,P),T===null?I=Le:T.sibling=Le,T=Le,R=j}if(x.done)return n(f,R),B&&Gt(f,P),I;if(R===null){for(;!x.done;P++,x=h.next())x=p(f,x.value,w),x!==null&&(c=o(x,c,P),T===null?I=x:T.sibling=x,T=x);return B&&Gt(f,P),I}for(R=r(f,R);!x.done;P++,x=h.next())x=g(R,f,P,x.value,w),x!==null&&(e&&x.alternate!==null&&R.delete(x.key===null?P:x.key),c=o(x,c,P),T===null?I=x:T.sibling=x,T=x);return e&&R.forEach(function(Zn){return t(f,Zn)}),B&&Gt(f,P),I}function M(f,c,h,w){if(typeof h=="object"&&h!==null&&h.type===wn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fi:e:{for(var I=h.key,T=c;T!==null;){if(T.key===I){if(I=h.type,I===wn){if(T.tag===7){n(f,T.sibling),c=i(T,h.props.children),c.return=f,f=c;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===vt&&qu(I)===T.type){n(f,T.sibling),c=i(T,h.props),c.ref=sr(f,T,h),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}h.type===wn?(c=tn(h.props.children,f.mode,w,h.key),c.return=f,f=c):(w=bi(h.type,h.key,h.props,null,f.mode,w),w.ref=sr(f,c,h),w.return=f,f=w)}return s(f);case yn:e:{for(T=h.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Rs(h,f.mode,w),c.return=f,f=c}return s(f);case vt:return T=h._init,M(f,c,T(h._payload),w)}if(cr(h))return y(f,c,h,w);if(tr(h))return v(f,c,h,w);Ii(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=Ts(h,f.mode,w),c.return=f,f=c),s(f)):n(f,c)}return M}var Bn=Ef(!0),If=Ef(!1),Zr={},qe=Bt(Zr),Fr=Bt(Zr),zr=Bt(Zr);function Xt(e){if(e===Zr)throw Error(_(174));return e}function El(e,t){switch(z(zr,t),z(Fr,e),z(qe,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zs(t,e)}b(qe),z(qe,t)}function Vn(){b(qe),b(Fr),b(zr)}function kf(e){Xt(zr.current);var t=Xt(qe.current),n=Zs(t,e.type);t!==n&&(z(Fr,e),z(qe,n))}function Il(e){Fr.current===e&&(b(qe),b(Fr))}var V=Bt(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _s=[];function kl(){for(var e=0;e<_s.length;e++)_s[e]._workInProgressVersionPrimary=null;_s.length=0}var Ui=pt.ReactCurrentDispatcher,Ss=pt.ReactCurrentBatchConfig,sn=0,H=null,J=null,ee=null,co=!1,_r=!1,jr=0,jg=0;function oe(){throw Error(_(321))}function Cl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Tl(e,t,n,r,i,o){if(sn=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Vg:Hg,e=n(r,i),_r){o=0;do{if(_r=!1,jr=0,25<=o)throw Error(_(301));o+=1,ee=J=null,t.updateQueue=null,Ui.current=Wg,e=n(r,i)}while(_r)}if(Ui.current=fo,t=J!==null&&J.next!==null,sn=0,ee=J=H=null,co=!1,t)throw Error(_(300));return e}function Rl(){var e=jr!==0;return jr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function De(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(_(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function $r(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=De(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,H.lanes|=d,an|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,an|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Is(e){var t=De(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Be(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cf(){}function Tf(e,t){var n=H,r=De(),i=t(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,Pl(Nf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,br(9,Pf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(_(349));sn&30||Rf(n,t,i)}return i}function Rf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pf(e,t,n,r){t.value=n,t.getSnapshot=r,Of(t)&&Af(e)}function Nf(e,t,n){return n(function(){Of(t)&&Af(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Af(e){var t=ct(e,1);t!==null&&be(t,e,1,-1)}function Yu(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Bg.bind(null,H,e),[t.memoizedState,e]}function br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xf(){return De().memoizedState}function Fi(e,t,n,r){var i=Ke();H.flags|=e,i.memoizedState=br(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&Cl(r,s.deps)){i.memoizedState=br(t,n,o,r);return}}H.flags|=e,i.memoizedState=br(1|t,n,o,r)}function Ju(e,t){return Fi(8390656,8,e,t)}function Pl(e,t){return Mo(2048,8,e,t)}function Df(e,t){return Mo(4,2,e,t)}function Lf(e,t){return Mo(4,4,e,t)}function Mf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uf(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,Mf.bind(null,t,e),n)}function Nl(){}function Ff(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jf(e,t,n){return sn&21?(Be(n,t)||(n=bd(),H.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function $g(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ss.transition;Ss.transition={};try{e(!1),t()}finally{U=n,Ss.transition=r}}function $f(){return De().memoizedState}function bg(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bf(e))Bf(t,n);else if(n=yf(e,t,n,r),n!==null){var i=fe();be(n,e,r,i),Vf(n,t,r)}}function Bg(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bf(e))Bf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Be(a,s)){var l=t.interleaved;l===null?(i.next=i,_l(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=yf(e,t,i,r),n!==null&&(i=fe(),be(n,e,r,i),Vf(n,t,r))}}function bf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Bf(e,t){_r=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}var fo={readContext:xe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Vg={readContext:xe,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4194308,4,Mf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Yu,useDebugValue:Nl,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Yu(!1),t=e[0];return e=$g.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ke();if(B){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),te===null)throw Error(_(349));sn&30||Rf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ju(Nf.bind(null,r,o,e),[e]),r.flags|=2048,br(9,Pf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ke(),t=te.identifierPrefix;if(B){var n=it,r=rt;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:xe,useCallback:Ff,useContext:xe,useEffect:Pl,useImperativeHandle:Uf,useInsertionEffect:Df,useLayoutEffect:Lf,useMemo:zf,useReducer:Es,useRef:xf,useState:function(){return Es($r)},useDebugValue:Nl,useDeferredValue:function(e){var t=De();return jf(t,J.memoizedState,e)},useTransition:function(){var e=Es($r)[0],t=De().memoizedState;return[e,t]},useMutableSource:Cf,useSyncExternalStore:Tf,useId:$f,unstable_isNewReconciler:!1},Wg={readContext:xe,useCallback:Ff,useContext:xe,useEffect:Pl,useImperativeHandle:Uf,useInsertionEffect:Df,useLayoutEffect:Lf,useMemo:zf,useReducer:Is,useRef:xf,useState:function(){return Is($r)},useDebugValue:Nl,useDeferredValue:function(e){var t=De();return J===null?t.memoizedState=e:jf(t,J.memoizedState,e)},useTransition:function(){var e=Is($r)[0],t=De().memoizedState;return[e,t]},useMutableSource:Cf,useSyncExternalStore:Tf,useId:$f,unstable_isNewReconciler:!1};function Hn(e,t){try{var n="",r=t;do n+=wm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function Hf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,xa=r),Ea(e,t)},n}function Wf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ea(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sv.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Gg=pt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?If(t,null,n,r):Bn(t,e.child,n,r)}function tc(e,t,n,r,i){n=n.render;var o=t.ref;return Mn(t,i),r=Tl(e,t,n,r,o,i),n=Rl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&n&&pl(t),t.flags|=1,de(e,t,r,i),t.child)}function nc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kf(e,t,o,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Dr(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Ia(e,t,n,r,i)}function Gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Nn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Nn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Nn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Nn,_e),_e|=r;return de(e,t,i,n),t.child}function Qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ia(e,t,n,r,i){var o=ye(n)?rn:le.current;return o=$n(t,o),Mn(t,i),n=Tl(e,t,n,r,o,i),r=Rl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&r&&pl(t),t.flags|=1,de(e,t,n,i),t.child)}function rc(e,t,n,r,i){if(ye(n)){var o=!0;ro(t)}else o=!1;if(Mn(t,i),t.stateNode===null)zi(e,t),Sf(t,n,r),Sa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=xe(u):(u=ye(n)?rn:le.current,u=$n(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qu(t,s,r,u),yt=!1;var m=t.memoizedState;s.state=m,lo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ve.current||yt?(typeof d=="function"&&(_a(t,n,d,r),l=t.memoizedState),(a=yt||Gu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,wf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=xe(l):(l=ye(n)?rn:le.current,l=$n(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Qu(t,s,r,l),yt=!1,m=t.memoizedState,s.state=m,lo(t,r,s,i);var y=t.memoizedState;a!==p||m!==y||ve.current||yt?(typeof g=="function"&&(_a(t,n,g,r),y=t.memoizedState),(u=yt||Gu(t,n,u,r,m,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ka(e,t,n,r,o,i)}function ka(e,t,n,r,i,o){Qf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Bu(t,n,!1),dt(e,t,o);r=t.stateNode,Gg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,i&&Bu(t,n,!0),t.child}function qf(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),El(e,t.containerInfo)}function ic(e,t,n,r,i){return bn(),gl(i),t.flags|=256,de(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=zo(s,r,0,null),e=tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ta(n),t.memoizedState=Ca,e):Ol(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Qg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=tn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ta(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&gl(r),Bn(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ks(Error(_(422))),ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zo({mode:"visible",children:r.children},i,0,null),o=tn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,s),t.child.memoizedState=Ta(s),t.memoizedState=Ca,o);if(!(t.mode&1))return ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=ks(o,r,void 0),ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),be(r,e,i,-1))}return Ul(),r=ks(Error(_(421))),ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=av.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=At(i.nextSibling),Ee=t,B=!0,ze=null,e!==null&&(Re[Pe++]=rt,Re[Pe++]=it,Re[Pe++]=on,rt=e.id,it=e.overflow,on=t),t=Ol(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wa(e.return,t,n)}function Cs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cs(t,!0,n,null,o);break;case"together":Cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qg(e,t,n){switch(t.tag){case 3:qf(t),bn();break;case 5:kf(t);break;case 1:ye(t.type)&&ro(t);break;case 4:El(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(so,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Yf(e,t,n):(z(V,V.current&1),e=dt(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,n)}return dt(e,t,n)}var Xf,Ra,Zf,eh;Xf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ra=function(){};Zf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(qe.current);var o=null;switch(n){case"input":i=qs(e,i),r=qs(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=Xs(e,i),r=Xs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}ea(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};eh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yg(e,t,n){var r=t.pendingProps;switch(ml(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&no(),se(t),null;case 3:return r=t.stateNode,Vn(),b(ve),b(le),kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Ma(ze),ze=null))),Ra(e,t),se(t),null;case 5:Il(t);var i=Xt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return se(t),null}if(e=Xt(qe.current),Ei(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ge]=t,r[Ur]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)$(fr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":pu(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":gu(r,o),$("invalid",r)}ea(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",""+a]):Tr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":hi(r),mu(r,o,!0);break;case"textarea":hi(r),vu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Td(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ge]=t,e[Ur]=r,Xf(e,t,!1,!1),t.stateNode=e;e:{switch(s=ta(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)$(fr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":pu(e,r),i=qs(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":gu(e,r),i=Xs(e,r),$("invalid",e);break;default:i=r}ea(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Nd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rr(e,l):typeof l=="number"&&Rr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&el(e,o,l,s))}switch(n){case"input":hi(e),mu(e,r,!1);break;case"textarea":hi(e),vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?An(e,!!r.multiple,o,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)eh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Xt(zr.current),Xt(qe.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return se(t),null;case 13:if(b(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Se!==null&&t.mode&1&&!(t.flags&128))vf(),bn(),t.flags|=98560,o=!1;else if(o=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Ge]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else ze!==null&&(Ma(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Ul())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Vn(),Ra(e,t),e===null&&Lr(t.stateNode.containerInfo),se(t),null;case 10:return wl(t.type._context),se(t),null;case 17:return ye(t.type)&&no(),se(t),null;case 19:if(b(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ar(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=uo(e),s!==null){for(t.flags|=128,ar(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Wn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return se(t),null}else 2*Q()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Jg(e,t){switch(ml(t),t.tag){case 1:return ye(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),b(ve),b(le),kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Il(t),null;case 13:if(b(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(V),null;case 4:return Vn(),null;case 10:return wl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Ci=!1,ae=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,k=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Pa(e,t,n){try{n()}catch(r){K(e,t,r)}}var sc=!1;function Zg(e,t){if(da=Xi,e=rf(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fa={focusedElem:e,selectionRange:n},Xi=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,M=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ue(t.type,v),M);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return y=sc,sc=!1,y}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pa(t,n,o)}i=i.next}while(i!==r)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function th(e){var t=e.alternate;t!==null&&(e.alternate=null,th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[Ur],delete t[ma],delete t[Mg],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nh(e){return e.tag===5||e.tag===3||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function Aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Aa(e,t,n),e=e.sibling;e!==null;)Aa(e,t,n),e=e.sibling}var ne=null,Fe=!1;function mt(e,t,n){for(n=n.child;n!==null;)rh(e,t,n),n=n.sibling}function rh(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:ae||Pn(n,t);case 6:var r=ne,i=Fe;ne=null,mt(e,t,n),ne=r,Fe=i,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?ys(e.parentNode,n):e.nodeType===1&&ys(e,n),Ar(e)):ys(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,mt(e,t,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Pa(n,t,s),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!ae&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,mt(e,t,n),ae=r):mt(e,t,n);break;default:mt(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xg),t.forEach(function(r){var i=lv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Fe=!1;break e;case 3:ne=a.stateNode.containerInfo,Fe=!0;break e;case 4:ne=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ne===null)throw Error(_(160));rh(o,s,i),ne=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ih(t,e),t=t.sibling}function ih(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),We(e),r&4){try{Sr(3,e,e.return),Uo(3,e)}catch(v){K(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:Me(t,e),We(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Me(t,e),We(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Rr(i,"")}catch(v){K(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kd(i,o),ta(a,s);var u=ta(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?Nd(i,p):d==="dangerouslySetInnerHTML"?Rd(i,p):d==="children"?Rr(i,p):el(i,d,p,u)}switch(a){case"input":Ys(i,o);break;case"textarea":Cd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?An(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?An(i,!!o.multiple,o.defaultValue,!0):An(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ur]=o}catch(v){K(e,e.return,v)}}break;case 6:if(Me(t,e),We(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){K(e,e.return,v)}}break;case 3:if(Me(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:Me(t,e),We(e);break;case 13:Me(t,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Dl=Q())),r&4&&lc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Me(t,e),ae=u):Me(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(p=k=d;k!==null;){switch(m=k,g=m.child,m.tag){case 0:case 11:case 14:case 15:Sr(4,m,m.return);break;case 1:Pn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:Pn(m,m.return);break;case 22:if(m.memoizedState!==null){cc(p);continue}}g!==null?(g.return=m,k=g):cc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pd("display",s))}catch(v){K(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){K(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),We(e),r&4&&lc(e);break;case 21:break;default:Me(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rr(i,""),r.flags&=-33);var o=ac(e);Aa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ac(e);Oa(e,a,s);break;default:throw Error(_(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ev(e,t,n){k=e,oh(e)}function oh(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ci;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Ci;var u=ae;if(Ci=s,(ae=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?dc(i):l!==null?(l.return=s,k=l):dc(i);for(;o!==null;)k=o,oh(o),o=o.sibling;k=i,Ci=a,ae=u}uc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):uc(e)}}function uc(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ku(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ku(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ar(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ae||t.flags&512&&Na(t)}catch(m){K(t,t.return,m)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function cc(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function dc(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Na(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Na(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var tv=Math.ceil,ho=pt.ReactCurrentDispatcher,Al=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,L=0,te=null,q=null,re=0,_e=0,Nn=Bt(0),X=0,Br=null,an=0,Fo=0,xl=0,Er=null,me=null,Dl=0,Wn=1/0,tt=null,po=!1,xa=null,Dt=null,Ti=!1,Tt=null,mo=0,Ir=0,Da=null,ji=-1,$i=0;function fe(){return L&6?Q():ji!==-1?ji:ji=Q()}function Lt(e){return e.mode&1?L&2&&re!==0?re&-re:zg.transition!==null?($i===0&&($i=bd()),$i):(e=U,e!==0||(e=window.event,e=e===void 0?16:Qd(e.type)),e):1}function be(e,t,n,r){if(50<Ir)throw Ir=0,Da=null,Error(_(185));Yr(e,n,r),(!(L&2)||e!==te)&&(e===te&&(!(L&2)&&(Fo|=n),X===4&&_t(e,re)),we(e,r),n===1&&L===0&&!(t.mode&1)&&(Wn=Q()+500,Do&&Vt()))}function we(e,t){var n=e.callbackNode;zm(e,t);var r=Ji(e,e===te?re:0);if(r===0)n!==null&&_u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_u(n),t===1)e.tag===0?Fg(fc.bind(null,e)):pf(fc.bind(null,e)),Dg(function(){!(L&6)&&Vt()}),n=null;else{switch(Bd(r)){case 1:n=ol;break;case 4:n=jd;break;case 16:n=Yi;break;case 536870912:n=$d;break;default:n=Yi}n=hh(n,sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sh(e,t){if(ji=-1,$i=0,L&6)throw Error(_(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Ji(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=go(e,r);else{t=r;var i=L;L|=2;var o=lh();(te!==e||re!==t)&&(tt=null,Wn=Q()+500,en(e,t));do try{iv();break}catch(a){ah(e,a)}while(1);yl(),ho.current=o,L=i,q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=sa(e),i!==0&&(r=i,t=La(e,i))),t===1)throw n=Br,en(e,0),_t(e,r),we(e,Q()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!nv(i)&&(t=go(e,r),t===2&&(o=sa(e),o!==0&&(r=o,t=La(e,o))),t===1))throw n=Br,en(e,0),_t(e,r),we(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Qt(e,me,tt);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Dl+500-Q(),10<t)){if(Ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pa(Qt.bind(null,e,me,tt),t);break}Qt(e,me,tt);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-$e(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tv(r/1960))-r,10<r){e.timeoutHandle=pa(Qt.bind(null,e,me,tt),r);break}Qt(e,me,tt);break;case 5:Qt(e,me,tt);break;default:throw Error(_(329))}}}return we(e,Q()),e.callbackNode===n?sh.bind(null,e):null}function La(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=go(e,t),e!==2&&(t=me,me=n,t!==null&&Ma(t)),e}function Ma(e){me===null?me=e:me.push.apply(me,e)}function nv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~xl,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(L&6)throw Error(_(327));Un();var t=Ji(e,0);if(!(t&1))return we(e,Q()),null;var n=go(e,t);if(e.tag!==0&&n===2){var r=sa(e);r!==0&&(t=r,n=La(e,r))}if(n===1)throw n=Br,en(e,0),_t(e,t),we(e,Q()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,me,tt),we(e,Q()),null}function Ll(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Wn=Q()+500,Do&&Vt())}}function ln(e){Tt!==null&&Tt.tag===0&&!(L&6)&&Un();var t=L;L|=1;var n=Oe.transition,r=U;try{if(Oe.transition=null,U=1,e)return e()}finally{U=r,Oe.transition=n,L=t,!(L&6)&&Vt()}}function Ml(){_e=Nn.current,b(Nn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xg(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ml(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Vn(),b(ve),b(le),kl();break;case 5:Il(r);break;case 4:Vn();break;case 13:b(V);break;case 19:b(V);break;case 10:wl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(te=e,q=e=Mt(e.current,null),re=_e=t,X=0,Br=null,xl=Fo=an=0,me=Er=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jt=null}return e}function ah(e,t){do{var n=q;try{if(yl(),Ui.current=fo,co){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}co=!1}if(sn=0,ee=J=H=null,_r=!1,jr=0,Al.current=null,n===null||n.return===null){X=1,Br=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Zu(s);if(g!==null){g.flags&=-257,ec(g,s,a,o,t),g.mode&1&&Xu(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){Xu(o,u,t),Ul();break e}l=Error(_(426))}}else if(B&&a.mode&1){var M=Zu(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),ec(M,s,a,o,t),gl(Hn(l,a));break e}}o=l=Hn(l,a),X!==4&&(X=2),Er===null?Er=[o]:Er.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Hf(o,l,t);Wu(o,f);break e;case 1:a=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Wf(o,a,t);Wu(o,w);break e}}o=o.return}while(o!==null)}ch(n)}catch(I){t=I,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function lh(){var e=ho.current;return ho.current=fo,e===null?fo:e}function Ul(){(X===0||X===3||X===2)&&(X=4),te===null||!(an&268435455)&&!(Fo&268435455)||_t(te,re)}function go(e,t){var n=L;L|=2;var r=lh();(te!==e||re!==t)&&(tt=null,en(e,t));do try{rv();break}catch(i){ah(e,i)}while(1);if(yl(),L=n,ho.current=r,q!==null)throw Error(_(261));return te=null,re=0,X}function rv(){for(;q!==null;)uh(q)}function iv(){for(;q!==null&&!Nm();)uh(q)}function uh(e){var t=fh(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?ch(e):q=t,Al.current=null}function ch(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jg(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=Yg(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Qt(e,t,n){var r=U,i=Oe.transition;try{Oe.transition=null,U=1,ov(e,t,n,r)}finally{Oe.transition=i,U=r}return null}function ov(e,t,n,r){do Un();while(Tt!==null);if(L&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jm(e,o),e===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ti||(Ti=!0,hh(Yi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=U;U=1;var a=L;L|=4,Al.current=null,Zg(e,n),ih(n,e),Cg(fa),Xi=!!da,fa=da=null,e.current=n,ev(n),Om(),L=a,U=s,Oe.transition=o}else e.current=n;if(Ti&&(Ti=!1,Tt=e,mo=i),o=e.pendingLanes,o===0&&(Dt=null),Dm(n.stateNode),we(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(po)throw po=!1,e=xa,xa=null,e;return mo&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===Da?Ir++:(Ir=0,Da=e):Ir=0,Vt(),null}function Un(){if(Tt!==null){var e=Bd(mo),t=Oe.transition,n=U;try{if(Oe.transition=null,U=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,mo=0,L&6)throw Error(_(331));var i=L;for(L|=4,k=e.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Sr(8,d,o)}var p=d.child;if(p!==null)p.return=d,k=p;else for(;k!==null;){d=k;var m=d.sibling,g=d.return;if(th(d),d===u){k=null;break}if(m!==null){m.return=g,k=m;break}k=g}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var M=v.sibling;v.sibling=null,v=M}while(v!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){s=k;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,k=h;else e:for(s=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uo(9,a)}}catch(I){K(a,a.return,I)}if(a===s){k=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,k=w;break e}k=a.return}}if(L=i,Vt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{U=n,Oe.transition=t}}return!1}function hc(e,t,n){t=Hn(n,t),t=Hf(e,t,1),e=xt(e,t,1),t=fe(),e!==null&&(Yr(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)hc(e,e,n);else for(;t!==null;){if(t.tag===3){hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Hn(n,e),e=Wf(t,e,1),t=xt(t,e,1),e=fe(),t!==null&&(Yr(t,1,e),we(t,e));break}}t=t.return}}function sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-Dl?en(e,0):xl|=n),we(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var n=fe();e=ct(e,t),e!==null&&(Yr(e,t,n),we(e,n))}function av(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dh(e,n)}function lv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),dh(e,n)}var fh;fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,qg(e,t,n);ge=!!(e.flags&131072)}else ge=!1,B&&t.flags&1048576&&mf(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=$n(t,le.current);Mn(t,n),i=Tl(null,t,r,e,i,n);var o=Rl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sl(t),i.updater=Lo,t.stateNode=i,i._reactInternals=t,Sa(t,r,e,n),t=ka(null,t,r,!0,o,n)):(t.tag=0,B&&o&&pl(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cv(r),e=Ue(r,e),i){case 0:t=Ia(null,t,r,e,n);break e;case 1:t=rc(null,t,r,e,n);break e;case 11:t=tc(null,t,r,e,n);break e;case 14:t=nc(null,t,r,Ue(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ia(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),rc(e,t,r,i,n);case 3:e:{if(qf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wf(e,t),lo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Hn(Error(_(423)),t),t=ic(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(_(424)),t),t=ic(e,t,r,n,i);break e}else for(Se=At(t.stateNode.containerInfo.firstChild),Ee=t,B=!0,ze=null,n=If(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===i){t=dt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return kf(t),e===null&&ya(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ha(r,i)?s=null:o!==null&&ha(r,o)&&(t.flags|=32),Qf(e,t),de(e,t,s,n),t.child;case 6:return e===null&&ya(t),null;case 13:return Yf(e,t,n);case 4:return El(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),tc(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(so,r._currentValue),r._currentValue=s,o!==null)if(Be(o.value,s)){if(o.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mn(t,n),i=xe(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),nc(e,t,r,i,n);case 15:return Kf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),zi(e,t),t.tag=1,ye(r)?(e=!0,ro(t)):e=!1,Mn(t,n),Sf(t,r,i),Sa(t,r,i,n),ka(null,t,r,!0,e,n);case 19:return Jf(e,t,n);case 22:return Gf(e,t,n)}throw Error(_(156,t.tag))};function hh(e,t){return zd(e,t)}function uv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new uv(e,t,n,r)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cv(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nl)return 11;if(e===rl)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return tn(n.children,i,o,t);case tl:s=8,i|=8;break;case Ws:return e=Ne(12,n,t,i|2),e.elementType=Ws,e.lanes=o,e;case Ks:return e=Ne(13,n,t,i),e.elementType=Ks,e.lanes=o,e;case Gs:return e=Ne(19,n,t,i),e.elementType=Gs,e.lanes=o,e;case Sd:return zo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wd:s=10;break e;case _d:s=9;break e;case nl:s=11;break e;case rl:s=14;break e;case vt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function zo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Sd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ts(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=as(0),this.expirationTimes=as(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zl(e,t,n,r,i,o,s,a,l){return e=new dv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(o),e}function fv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ph(e){if(!e)return $t;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ye(n))return hf(e,n,t)}return t}function mh(e,t,n,r,i,o,s,a,l){return e=zl(n,r,!0,e,i,o,s,a,l),e.context=ph(null),n=e.current,r=fe(),i=Lt(n),o=at(r,i),o.callback=t??null,xt(n,o,i),e.current.lanes=i,Yr(e,i,r),we(e,r),e}function jo(e,t,n,r){var i=t.current,o=fe(),s=Lt(i);return n=ph(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,s),e!==null&&(be(e,i,s,o),Mi(e,i,s)),s}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jl(e,t){pc(e,t),(e=e.alternate)&&pc(e,t)}function hv(){return null}var gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}$o.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));jo(e,t,null,null)};$o.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){jo(null,e,null,null)}),t[ut]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Gd(e)}};function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vo(s);o.call(u)}}var s=mh(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=s,e[ut]=s.current,Lr(e.nodeType===8?e.parentNode:e),ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vo(l);a.call(u)}}var l=zl(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=l,e[ut]=l.current,Lr(e.nodeType===8?e.parentNode:e),ln(function(){jo(t,l,n,r)}),l}function Bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=vo(s);a.call(l)}}jo(t,s,e,i)}else s=pv(n,t,e,i,r);return vo(s)}Vd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(sl(t,n|1),we(t,Q()),!(L&6)&&(Wn=Q()+500,Vt()))}break;case 13:ln(function(){var r=ct(e,1);if(r!==null){var i=fe();be(r,e,1,i)}}),jl(e,1)}};al=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=fe();be(t,e,134217728,n)}jl(e,134217728)}};Hd=function(e){if(e.tag===13){var t=Lt(e),n=ct(e,t);if(n!==null){var r=fe();be(n,e,t,r)}jl(e,t)}};Wd=function(){return U};Kd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ra=function(e,t,n){switch(t){case"input":if(Ys(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(_(90));Id(r),Ys(r,i)}}}break;case"textarea":Cd(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};xd=Ll;Dd=ln;var mv={usingClientEntryPoint:!1,Events:[Xr,In,xo,Od,Ad,Ll]},lr={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gv={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ud(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Po=Ri.inject(gv),Qe=Ri}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bl(t))throw Error(_(200));return fv(e,t,null,n)};Ce.createRoot=function(e,t){if(!bl(e))throw Error(_(299));var n=!1,r="",i=gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zl(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Lr(e.nodeType===8?e.parentNode:e),new $l(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ud(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return ln(e)};Ce.hydrate=function(e,t,n){if(!bo(t))throw Error(_(200));return Bo(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!bl(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=gh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=mh(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $o(t)};Ce.render=function(e,t,n){if(!bo(t))throw Error(_(200));return Bo(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!bo(e))throw Error(_(40));return e._reactRootContainer?(ln(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ll;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Bo(e,t,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ce})(hm);var gc=Bs;bs.createRoot=gc.createRoot,bs.hydrateRoot=gc.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const vc="popstate";function vv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ua("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vr(i)}return _v(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yv(){return Math.random().toString(36).substr(2,8)}function yc(e){return{usr:e.state,key:e.key}}function Ua(e,t,n,r){return n===void 0&&(n=null),yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qn(t):t,{state:n,key:t&&t.key||r||yv()})}function Vr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wv(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Vr(e);return Y(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function _v(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Rt.Pop,l=null;function u(){a=Rt.Pop,l&&l({action:a,location:m.location})}function d(g,y){a=Rt.Push;let v=Ua(m.location,g,y);n&&n(v,g);let M=yc(v),f=m.createHref(v);try{s.pushState(M,"",f)}catch{i.location.assign(f)}o&&l&&l({action:a,location:m.location})}function p(g,y){a=Rt.Replace;let v=Ua(m.location,g,y);n&&n(v,g);let M=yc(v),f=m.createHref(v);s.replaceState(M,"",f),o&&l&&l({action:a,location:m.location})}let m={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vc,u),l=g,()=>{i.removeEventListener(vc,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let y=wv(typeof g=="string"?g:Vr(g));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:p,go(g){return s.go(g)}};return m}var wc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wc||(wc={}));function Sv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qn(t):t,i=wh(r.pathname||"/",n);if(i==null)return null;let o=vh(e);Ev(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Av(o[a],Lv(i));return s}function vh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ut([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Nv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of yh(o.path))i(o,s,l)}),t}function yh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=yh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ev(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ov(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Iv=/^:\w+$/,kv=3,Cv=2,Tv=1,Rv=10,Pv=-2,_c=e=>e==="*";function Nv(e,t){let n=e.split("/"),r=n.length;return n.some(_c)&&(r+=Pv),t&&(r+=Cv),n.filter(i=>!_c(i)).reduce((i,o)=>i+(Iv.test(o)?kv:o===""?Tv:Rv),r)}function Ov(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Av(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=xv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:Ut([i,d.pathname]),pathnameBase:zv(Ut([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Ut([i,d.pathnameBase]))}return o}function xv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Mv(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Dv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Lv(e){try{return decodeURI(e)}catch(t){return Bl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mv(e,t){try{return decodeURIComponent(e)}catch(n){return Bl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function wh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Bl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:Fv(n,t):t,search:jv(r),hash:$v(i)}}function Fv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ps(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _h(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qn(e):(i=yo({},e),Y(!i.pathname||!i.pathname.includes("?"),Ps("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),Ps("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),Ps("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let l=Uv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class bv{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Bv(e){return e instanceof bv}const Vv=["post","put","patch","delete"];[...Vv];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}function Hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Wv=typeof Object.is=="function"?Object.is:Hv,{useState:Kv,useEffect:Gv,useLayoutEffect:Qv,useDebugValue:qv}=$s;function Yv(e,t,n){const r=t(),[{inst:i},o]=Kv({inst:{value:r,getSnapshot:t}});return Qv(()=>{i.value=r,i.getSnapshot=t,Ns(i)&&o({inst:i})},[e,r,t]),Gv(()=>(Ns(i)&&o({inst:i}),e(()=>{Ns(i)&&o({inst:i})})),[e]),qv(r),r}function Ns(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Wv(n,r)}catch{return!0}}function Jv(e,t,n){return t()}const Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zv=!Xv,ey=Zv?Jv:Yv;"useSyncExternalStore"in $s&&(e=>e.useSyncExternalStore)($s);const ty=S.createContext(null),ny=S.createContext(null),Vl=S.createContext(null),Vo=S.createContext(null),Ho=S.createContext(null),Ht=S.createContext({outlet:null,matches:[]}),Eh=S.createContext(null);function ry(e,t){let{relative:n}=t===void 0?{}:t;Yn()||Y(!1);let{basename:r,navigator:i}=S.useContext(Vo),{hash:o,pathname:s,search:a}=Ih(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ut([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Yn(){return S.useContext(Ho)!=null}function Wo(){return Yn()||Y(!1),S.useContext(Ho).location}function ei(){Yn()||Y(!1);let{basename:e,navigator:t}=S.useContext(Vo),{matches:n}=S.useContext(Ht),{pathname:r}=Wo(),i=JSON.stringify(_h(n).map(a=>a.pathnameBase)),o=S.useRef(!1);return S.useEffect(()=>{o.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Sh(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Ut([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const iy=S.createContext(null);function oy(e){let t=S.useContext(Ht).outlet;return t&&S.createElement(iy.Provider,{value:e},t)}function sy(){let{matches:e}=S.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function Ih(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(Ht),{pathname:i}=Wo(),o=JSON.stringify(_h(r).map(s=>s.pathnameBase));return S.useMemo(()=>Sh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function ay(e,t){Yn()||Y(!1);let{navigator:n}=S.useContext(Vo),r=S.useContext(Vl),{matches:i}=S.useContext(Ht),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Wo(),u;if(t){var d;let v=typeof t=="string"?qn(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||Y(!1),u=v}else u=l;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",g=Sv(e,{pathname:m}),y=dy(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Ut([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Ut([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&y?S.createElement(Ho.Provider,{value:{location:Fa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rt.Pop}},y):y}function ly(){let e=my(),t=Bv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unhandled Thrown Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:o},"errorElement")," props on ",S.createElement("code",{style:o},"<Route>")))}class uy extends S.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(Ht.Provider,{value:this.props.routeContext},S.createElement(Eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cy(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ty);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S.createElement(Ht.Provider,{value:t},r)}function dy(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Y(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||S.createElement(ly,null):null,d=t.concat(r.slice(0,a+1)),p=()=>S.createElement(cy,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?S.createElement(uy,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var Sc;(function(e){e.UseRevalidator="useRevalidator"})(Sc||(Sc={}));var wo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(wo||(wo={}));function fy(e){let t=S.useContext(Vl);return t||Y(!1),t}function hy(e){let t=S.useContext(Ht);return t||Y(!1),t}function py(e){let t=hy(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function my(){var e;let t=S.useContext(Eh),n=fy(wo.UseRouteError),r=py(wo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function kh(e){let{to:t,replace:n,state:r,relative:i}=e;Yn()||Y(!1);let o=S.useContext(Vl),s=ei();return S.useEffect(()=>{o&&o.navigation.state!=="idle"||s(t,{replace:n,state:r,relative:i})}),null}function Ch(e){return oy(e.context)}function ce(e){Y(!1)}function gy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rt.Pop,navigator:o,static:s=!1}=e;Yn()&&Y(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=qn(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:g="default"}=r,y=S.useMemo(()=>{let v=wh(u,a);return v==null?null:{pathname:v,search:d,hash:p,state:m,key:g}},[a,u,d,p,m,g]);return y==null?null:S.createElement(Vo.Provider,{value:l},S.createElement(Ho.Provider,{children:n,value:{location:y,navigationType:i}}))}function vy(e){let{children:t,location:n}=e,r=S.useContext(ny),i=r&&!t?r.router.routes:za(t);return ay(i,n)}var Ec;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ec||(Ec={}));new Promise(()=>{});function za(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,za(r.props.children,t));return}r.type!==ce&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=za(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}function yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _y(e,t){return e.button===0&&(!t||t==="_self")&&!wy(e)}const Sy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ey(e){let{basename:t,children:n,window:r}=e,i=S.useRef();i.current==null&&(i.current=vv({window:r,v5Compat:!0}));let o=i.current,[s,a]=S.useState({action:o.action,location:o.location});return S.useLayoutEffect(()=>o.listen(a),[o]),S.createElement(gy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const Ic=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,p=yy(t,Sy),m=ry(u,{relative:i}),g=Iy(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function y(v){r&&r(v),v.defaultPrevented||g(v)}return S.createElement("a",ja({},p,{href:m,onClick:o?r:y,ref:n,target:l}))});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(kc||(kc={}));var Cc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cc||(Cc={}));function Iy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=ei(),l=Wo(),u=Ih(e,{relative:s});return S.useCallback(d=>{if(_y(d,n)){d.preventDefault();let p=r!==void 0?r:Vr(l)===Vr(u);a(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}function ky(){return E("div",{children:"NotFound"})}const Cy=[{_id:"63af178832ac9da6ca33f025",title:"Boilcat",description:"hernandezdowns@boilcat.com",image:"https://robohash.org/user1"},{_id:"63af1788769c891efd4b3d79",title:"Xylar",description:"hernandezdowns@xylar.com",image:"https://robohash.org/user2"},{_id:"63af17883a7122dafed0161a",title:"Intrawear",description:"hernandezdowns@intrawear.com",image:"https://robohash.org/user3"},{_id:"63af1788b292e39b23bc6c69",title:"Neocent",description:"hernandezdowns@neocent.com",image:"https://robohash.org/user4"},{_id:"63af1788231b0363b008e231",title:"Medesign",description:"hernandezdowns@medesign.com",image:"https://robohash.org/user5"}],Hl=S.createContext();function Ty(e){const[t,n]=S.useState([]);function r(o){n([...t,{title:o.title,_id:t.length,description:o.description,image:"https://robohash.org/user"+t.length+1}])}function i(o){n(t.filter(s=>s._id!==o))}return S.useEffect(()=>{n(Cy)},[]),E(Hl.Provider,{value:{tasks:t,createTask:r,deleteTask:i},children:e.children})}function Ry({task:e}){const{deleteTask:t}=S.useContext(Hl);return je("div",{className:"bg-gray-800 text-white p-4 rounded-md",children:[E("img",{src:e.image,alt:e.title}),E("h1",{className:"text-xl font-bold capitalize",children:e.title}),E("p",{className:"text-gray-500 break-words",children:e.description}),E("button",{className:"bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400",onClick:()=>t(e._id),children:"Eliminar Tarea"})]})}function Py(){const{tasks:e}=S.useContext(Hl);return e.length===0?E("h1",{className:"text-white text-4xl font-bold text-center",children:"no hay tareas aun"}):E("div",{className:"grid grid-cols-4 gap-2 p-4",children:e.map(t=>E(Ry,{task:t},t._id))})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Th=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ny=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[p],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Th(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ny(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const y=u<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Oy=function(e){const t=Th(e);return Rh.encodeByteArray(t,!0)},Ph=function(e){return Oy(e).replace(/\./g,"")},Nh=function(e){try{return Rh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function Oh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dy(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ah(){try{return typeof indexedDB=="object"}catch{return!1}}function xh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ly(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function My(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uy=()=>My().__FIREBASE_DEFAULTS__,Fy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nh(e[1]);return t&&JSON.parse(t)},Wl=()=>{try{return Uy()||Fy()||zy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},jy=e=>{var t,n;return(n=(t=Wl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$y=()=>{var e;return(e=Wl())===null||e===void 0?void 0:e.config},Dh=e=>{var t;return(t=Wl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="FirebaseError";class et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=By,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Vy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new et(i,a,r)}}function Vy(e,t){return e.replace(Hy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Hy=/\{\$([^}]+)}/g;function Wy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Tc(o)&&Tc(s)){if(!Hr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function hr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function pr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Ky(e,t){const n=new Gy(e,t);return n.subscribe.bind(n)}class Gy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Os),i.error===void 0&&(i.error=Os),i.complete===void 0&&(i.complete=Os);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Os(){}/**
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
 */const qy=1e3,Yy=2,Jy=4*60*60*1e3,Xy=.5;function Rc(e,t=qy,n=Yy){const r=t*Math.pow(n,e),i=Math.round(Xy*r*(Math.random()-.5)*2);return Math.min(Jy,r+i)}/**
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
 */function He(e){return e&&e._delegate?e._delegate:e}class Ze{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Zy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new by;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(t0(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e0(e){return e===qt?void 0:e}function t0(e){return e.instantiationMode==="EAGER"}/**
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
 */class n0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Zy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const r0={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},i0=F.INFO,o0={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},s0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=o0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kl{constructor(t){this.name=t,this._logLevel=i0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?r0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const a0=(e,t)=>t.some(n=>e instanceof n);let Pc,Nc;function l0(){return Pc||(Pc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u0(){return Nc||(Nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lh=new WeakMap,$a=new WeakMap,Mh=new WeakMap,As=new WeakMap,Gl=new WeakMap;function c0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ft(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Lh.set(n,e)}).catch(()=>{}),Gl.set(t,e),t}function d0(e){if($a.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});$a.set(e,t)}let ba={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $a.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Mh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function f0(e){ba=e(ba)}function h0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xs(this),t,...n);return Mh.set(r,t.sort?t.sort():[t]),Ft(r)}:u0().includes(e)?function(...t){return e.apply(xs(this),t),Ft(Lh.get(this))}:function(...t){return Ft(e.apply(xs(this),t))}}function p0(e){return typeof e=="function"?h0(e):(e instanceof IDBTransaction&&d0(e),a0(e,l0())?new Proxy(e,ba):e)}function Ft(e){if(e instanceof IDBRequest)return c0(e);if(As.has(e))return As.get(e);const t=p0(e);return t!==e&&(As.set(e,t),Gl.set(t,e)),t}const xs=e=>Gl.get(e);function Uh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ft(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ft(s.result),l.oldVersion,l.newVersion,Ft(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const m0=["get","getKey","getAll","getAllKeys","count"],g0=["put","add","delete","clear"],Ds=new Map;function Oc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=g0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ds.set(t,o),o}f0(e=>({...e,get:(t,n,r)=>Oc(t,n)||e.get(t,n,r),has:(t,n)=>!!Oc(t,n)||e.has(t,n)}));/**
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
 */class v0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function y0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ba="@firebase/app",Ac="0.9.0";/**
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
 */const un=new Kl("@firebase/app"),w0="@firebase/app-compat",_0="@firebase/analytics-compat",S0="@firebase/analytics",E0="@firebase/app-check-compat",I0="@firebase/app-check",k0="@firebase/auth",C0="@firebase/auth-compat",T0="@firebase/database",R0="@firebase/database-compat",P0="@firebase/functions",N0="@firebase/functions-compat",O0="@firebase/installations",A0="@firebase/installations-compat",x0="@firebase/messaging",D0="@firebase/messaging-compat",L0="@firebase/performance",M0="@firebase/performance-compat",U0="@firebase/remote-config",F0="@firebase/remote-config-compat",z0="@firebase/storage",j0="@firebase/storage-compat",$0="@firebase/firestore",b0="@firebase/firestore-compat",B0="firebase",V0="9.15.0";/**
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
 */const Va="[DEFAULT]",H0={[Ba]:"fire-core",[w0]:"fire-core-compat",[S0]:"fire-analytics",[_0]:"fire-analytics-compat",[I0]:"fire-app-check",[E0]:"fire-app-check-compat",[k0]:"fire-auth",[C0]:"fire-auth-compat",[T0]:"fire-rtdb",[R0]:"fire-rtdb-compat",[P0]:"fire-fn",[N0]:"fire-fn-compat",[O0]:"fire-iid",[A0]:"fire-iid-compat",[x0]:"fire-fcm",[D0]:"fire-fcm-compat",[L0]:"fire-perf",[M0]:"fire-perf-compat",[U0]:"fire-rc",[F0]:"fire-rc-compat",[z0]:"fire-gcs",[j0]:"fire-gcs-compat",[$0]:"fire-fst",[b0]:"fire-fst-compat","fire-js":"fire-js",[B0]:"fire-js-all"};/**
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
 */const _o=new Map,Ha=new Map;function W0(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(Ha.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;Ha.set(t,e);for(const n of _o.values())W0(n,e);return!0}function Jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const K0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new gn("app","Firebase",K0);/**
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
 */class G0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ko=V0;function Fh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Va,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=$y()),!n)throw zt.create("no-options");const o=_o.get(i);if(o){if(Hr(n,o.options)&&Hr(r,o.config))return o;throw zt.create("duplicate-app",{appName:i})}const s=new n0(i);for(const l of Ha.values())s.addComponent(l);const a=new G0(n,r,s);return _o.set(i,a),a}function zh(e=Va){const t=_o.get(e);if(!t&&e===Va)return Fh();if(!t)throw zt.create("no-app",{appName:e});return t}function Ye(e,t,n){var r;let i=(r=H0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}ft(new Ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Q0="firebase-heartbeat-database",q0=1,Wr="firebase-heartbeat-store";let Ls=null;function jh(){return Ls||(Ls=Uh(Q0,q0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wr)}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),Ls}async function Y0(e){try{return(await jh()).transaction(Wr).objectStore(Wr).get($h(e))}catch(t){if(t instanceof et)un.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(n.message)}}}async function xc(e,t){try{const r=(await jh()).transaction(Wr,"readwrite");return await r.objectStore(Wr).put(t,$h(e)),r.done}catch(n){if(n instanceof et)un.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function $h(e){return`${e.name}!${e.options.appId}`}/**
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
 */const J0=1024,X0=30*24*60*60*1e3;class Z0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=X0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dc(),{heartbeatsToSend:n,unsentEntries:r}=ew(this._heartbeatsCache.heartbeats),i=Ph(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dc(){return new Date().toISOString().substring(0,10)}function ew(e,t=J0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Lc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ah()?xh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Y0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lc(e){return Ph(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nw(e){ft(new Ze("platform-logger",t=>new v0(t),"PRIVATE")),ft(new Ze("heartbeat",t=>new Z0(t),"PRIVATE")),Ye(Ba,Ac,e),Ye(Ba,Ac,"esm2017"),Ye("fire-js","")}nw("");function Ql(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function bh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rw=bh,Bh=new gn("auth","Firebase",bh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Kl("@firebase/auth");function Bi(e,...t){Mc.logLevel<=F.ERROR&&Mc.error(`Auth (${Ko}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e,...t){throw ql(e,...t)}function Je(e,...t){return ql(e,...t)}function iw(e,t,n){const r=Object.assign(Object.assign({},rw()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function ql(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Bh.create(e,...t)}function N(e,t,...n){if(!e)throw ql(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Bi(t),new Error(t)}function ht(e,t){e||ot(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=Uc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Uc.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(e,t){const n=Jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Hr(o,t??{}))return i;Ve(i,"already-initialized")}return n.initialize({options:t})}function sw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function aw(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aw()||Oh()||"connection"in navigator)?navigator.onLine:!0}function uw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=Ay()||xy()}get(){return lw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new ni(3e4,6e4);function ri(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ii(e,t,n,r,i={}){return Hh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ti(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Vh.fetch()(Wh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Hh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},cw),t);try{const i=new fw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Pi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Pi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Pi(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iw(e,d,u);Ve(e,d)}}catch(i){if(i instanceof et)throw i;Ve(e,"network-request-failed")}}async function oi(e,t,n,r,i={}){const o=await ii(e,t,n,r,i);return"mfaPendingCredential"in o&&Ve(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Wh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Yl(e.config,i):`${e.config.apiScheme}://${i}`}class fw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),dw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(e,t){return ii(e,"POST","/v1/accounts:delete",t)}async function pw(e,t){return ii(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mw(e,t=!1){const n=He(e),r=await n.getIdToken(t),i=Jl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:kr(Ms(i.auth_time)),issuedAtTime:kr(Ms(i.iat)),expirationTime:kr(Ms(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ms(e){return Number(e)*1e3}function Jl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nh(n);return i?JSON.parse(i):(Bi("Failed to decode base64 JWT payload"),null)}catch(i){return Bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gw(e){const t=Jl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof et&&vw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function vw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Kr(e,pw(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Sw(o.providerUserInfo):[],a=_w(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Kh(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function ww(e){const t=He(e);await So(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _w(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Sw(e){return e.map(t=>{var{providerId:n}=t,r=Ql(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(e,t){const n=await Hh(e,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Wh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ew(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Gr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ql(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Kh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Kr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return mw(this,t)}reload(){return ww(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Kr(this,hw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:w,isAnonymous:I,providerData:T,stsTokenManager:R}=n;N(h&&R,t,"internal-error");const P=Gr.fromJSON(this.name,R);N(typeof h=="string",t,"internal-error"),gt(p,t.name),gt(m,t.name),N(typeof w=="boolean",t,"internal-error"),N(typeof I=="boolean",t,"internal-error"),gt(g,t.name),gt(y,t.name),gt(v,t.name),gt(M,t.name),gt(f,t.name),gt(c,t.name);const j=new nn({uid:h,auth:t,email:m,emailVerified:w,displayName:p,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(j.providerData=T.map(x=>Object.assign({},x))),M&&(j._redirectEventId=M),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const o=new nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await So(o),o}}/**
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
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Gh.type="NONE";const zc=Gh;/**
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
 */function Vi(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Vi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Vi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(st(zc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(zc);const s=Vi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const p=nn._fromJSON(t,d);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xh(t))return"Blackberry";if(Zh(t))return"Webos";if(Xl(t))return"Safari";if((t.includes("chrome/")||qh(t))&&!t.includes("edge/"))return"Chrome";if(Jh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qh(e=ue()){return/firefox\//i.test(e)}function Xl(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qh(e=ue()){return/crios\//i.test(e)}function Yh(e=ue()){return/iemobile/i.test(e)}function Jh(e=ue()){return/android/i.test(e)}function Xh(e=ue()){return/blackberry/i.test(e)}function Zh(e=ue()){return/webos/i.test(e)}function Go(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Iw(e=ue()){var t;return Go(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kw(){return Dy()&&document.documentMode===10}function ep(e=ue()){return Go(e)||Jh(e)||Zh(e)||Xh(e)||/windows phone/i.test(e)||Yh(e)}function Cw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e,t=[]){let n;switch(e){case"Browser":n=jc(ue());break;case"Worker":n=`${jc(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ko}/${r}`}/**
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
 */class Tw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $c(this),this.idTokenSubscription=new $c(this),this.beforeStateQueue=new Tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await So(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?He(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function si(e){return He(e)}class $c{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ky(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pw(e,t,n){const r=si(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=np(t),{host:s,port:a}=Nw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ow()}function np(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Nw(e){const t=np(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:bc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:bc(s)}}}function bc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ow(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function Aw(e,t){return ii(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(e,t){return oi(e,"POST","/v1/accounts:signInWithPassword",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(e,t){return oi(e,"POST","/v1/accounts:signInWithEmailLink",ri(e,t))}async function Lw(e,t){return oi(e,"POST","/v1/accounts:signInWithEmailLink",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Zl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Qr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Qr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return xw(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dw(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Aw(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lw(t,{idToken:n,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){return oi(e,"POST","/v1/accounts:signInWithIdp",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="http://localhost";class cn extends Zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ql(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new cn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:Mw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ti(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fw(e){const t=hr(pr(e)).link,n=t?hr(pr(t)).deep_link_id:null,r=hr(pr(e)).deep_link_id;return(r?hr(pr(r)).link:null)||r||n||t||e}class eu{constructor(t){var n,r,i,o,s,a;const l=hr(pr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Uw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Fw(t);try{return new eu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(t,n){return Qr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=eu.parseLink(n);return N(r,"argument-error"),Qr._fromEmailAndCode(t,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends rp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ai{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ai{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ai{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(e,t){return oi(e,"POST","/v1/accounts:signUp",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await nn._fromIdTokenResponse(t,r,i),s=Bc(r);return new dn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Bc(r);return new dn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Bc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends et{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Eo(t,n,r,i)}}function ip(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(e,o,t,r):o})}async function jw(e,t,n=!1){const r=await Kr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dn._forOperation(e,"link",r)}/**
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
 */async function $w(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Kr(e,ip(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=Jl(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),dn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(e,t,n=!1){const r="signIn",i=await ip(e,r,t),o=await dn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function bw(e,t){return op(si(e),t)}async function Bw(e,t,n){const r=si(e),i=await zw(r,{returnSecureToken:!0,email:t,password:n}),o=await dn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Vw(e,t,n){return bw(He(e),Xn.credential(t,n))}function Hw(e,t,n,r){return He(e).onIdTokenChanged(t,n,r)}function Ww(e,t,n){return He(e).beforeAuthStateChanged(t,n)}function Kw(e,t,n,r){return He(e).onAuthStateChanged(t,n,r)}function Gw(e){return He(e).signOut()}const Io="__sak";/**
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
 */class sp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(){const e=ue();return Xl(e)||Go(e)}const qw=1e3,Yw=10;class ap extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Qw()&&Cw(),this.fallbackToPolling=ep(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);kw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Yw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ap.type="LOCAL";const Jw=ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp extends sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}lp.type="SESSION";const up=lp;/**
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
 */function Xw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Qo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Xw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Zw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=tu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function e_(e){Xe().location.href=e}/**
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
 */function cp(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function t_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function r_(){return cp()?self:null}/**
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
 */const dp="firebaseLocalStorageDb",i_=1,ko="firebaseLocalStorage",fp="fbase_key";class li{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([ko],t?"readwrite":"readonly").objectStore(ko)}function o_(){const e=indexedDB.deleteDatabase(dp);return new li(e).toPromise()}function Ka(){const e=indexedDB.open(dp,i_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ko,{keyPath:fp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ko)?t(r):(r.close(),await o_(),t(await Ka()))})})}async function Vc(e,t,n){const r=qo(e,!0).put({[fp]:t,value:n});return new li(r).toPromise()}async function s_(e,t){const n=qo(e,!1).get(t),r=await new li(n).toPromise();return r===void 0?null:r.value}function Hc(e,t){const n=qo(e,!0).delete(t);return new li(n).toPromise()}const a_=800,l_=3;class hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ka(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>l_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(r_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await t_(),!this.activeServiceWorker)return;this.sender=new Zw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||n_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ka();return await Vc(t,Io,"1"),await Hc(t,Io),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>s_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=qo(i,!1).getAll();return new li(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hp.type="LOCAL";const u_=hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function d_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Je("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",c_().appendChild(r)})}function f_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ni(3e4,6e4);/**
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
 */function h_(e,t){return t?st(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class nu extends Zl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function p_(e){return op(e.auth,new nu(e),e.bypassAuthState)}function m_(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),$w(n,new nu(e),e.bypassAuthState)}async function g_(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),jw(n,new nu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return p_;case"linkViaPopup":case"linkViaRedirect":return g_;case"reauthViaPopup":case"reauthViaRedirect":return m_;default:Ve(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new ni(2e3,1e4);class On extends pp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,v_.get())};t()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="pendingRedirect",Hi=new Map;class w_ extends pp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Hi.get(this.auth._key());if(!t){try{const r=await __(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Hi.set(this.auth._key(),t)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function __(e,t){const n=I_(t),r=E_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S_(e,t){Hi.set(e._key(),t)}function E_(e){return st(e._redirectPersistence)}function I_(e){return Vi(y_,e.config.apiKey,e.name)}async function k_(e,t,n=!1){const r=si(e),i=h_(r,t),s=await new w_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=10*60*1e3;class T_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!R_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!mp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=C_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wc(t))}saveEventToCache(t){this.cachedEventUids.add(Wc(t)),this.lastProcessedEventTime=Date.now()}}function Wc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function mp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function R_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(e,t={}){return ii(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,O_=/^https?/;async function A_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await P_(e);for(const n of t)try{if(x_(n))return}catch{}Ve(e,"unauthorized-domain")}function x_(e){const t=Wa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!O_.test(n))return!1;if(N_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const D_=new ni(3e4,6e4);function Kc(){const e=Xe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function L_(e){return new Promise((t,n)=>{var r,i,o;function s(){Kc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kc(),n(Je(e,"network-request-failed"))},timeout:D_.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Xe().gapi)===null||o===void 0)&&o.load)s();else{const a=f_("iframefcb");return Xe()[a]=()=>{gapi.load?s():n(Je(e,"network-request-failed"))},d_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Wi=null,t})}let Wi=null;function M_(e){return Wi=Wi||L_(e),Wi}/**
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
 */const U_=new ni(5e3,15e3),F_="__/auth/iframe",z_="emulator/auth/iframe",j_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b_(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Yl(t,z_):`https://${e.config.authDomain}/${F_}`,r={apiKey:t.apiKey,appName:e.name,v:Ko},i=$_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ti(r).slice(1)}`}async function B_(e){const t=await M_(e),n=Xe().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:b_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Je(e,"network-request-failed"),a=Xe().setTimeout(()=>{o(s)},U_.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const V_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H_=500,W_=600,K_="_blank",G_="http://localhost";class Gc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q_(e,t,n,r=H_,i=W_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V_),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=qh(u)?K_:n),Qh(u)&&(t=t||G_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if(Iw(u)&&a!=="_self")return q_(t||"",a),new Gc(null);const p=window.open(t||"",a,d);N(p,e,"popup-blocked");try{p.focus()}catch{}return new Gc(p)}function q_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y_="__/auth/handler",J_="emulator/auth/handler";function Qc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ko,eventId:i};if(t instanceof rp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Wy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ai){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${X_(e)}?${ti(a).slice(1)}`}function X_({config:e}){return e.emulator?Yl(e,J_):`https://${e.authDomain}/${Y_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="webStorageSupport";class Z_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=up,this._completeRedirectFn=k_,this._overrideRedirectResult=S_}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Qc(t,n,r,Wa(),i);return Q_(t,s,tu())}async _openRedirect(t,n,r,i){return await this._originValidation(t),e_(Qc(t,n,r,Wa(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await B_(t),r=new T_(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Us,{type:Us},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Us];s!==void 0&&n(!!s),Ve(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ep()||Xl()||Go()}}const e1=Z_;var qc="@firebase/auth",Yc="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function r1(e){ft(new Ze("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tp(e)},d=new Rw(a,l,u);return sw(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Ze("auth-internal",t=>{const n=si(t.getProvider("auth").getImmediate());return(r=>new t1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(qc,Yc,n1(e)),Ye(qc,Yc,"esm2017")}/**
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
 */const i1=5*60,o1=Dh("authIdTokenMaxAge")||i1;let Jc=null;const s1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>o1)return;const i=n==null?void 0:n.token;Jc!==i&&(Jc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function a1(e=zh()){const t=Jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ow(e,{popupRedirectResolver:e1,persistence:[u_,Jw,up]}),r=Dh("authTokenSyncURL");if(r){const o=s1(r);Ww(n,o,()=>o(n.currentUser)),Hw(n,s=>o(s))}const i=jy("auth");return i&&Pw(n,`http://${i}`),n}r1("Browser");var l1="firebase",u1="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(l1,u1,"app");const gp="@firebase/installations",ru="0.6.0";/**
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
 */const vp=1e4,yp=`w:${ru}`,wp="FIS_v2",c1="https://firebaseinstallations.googleapis.com/v1",d1=60*60*1e3,f1="installations",h1="Installations";/**
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
 */const p1={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},fn=new gn(f1,h1,p1);function _p(e){return e instanceof et&&e.code.includes("request-failed")}/**
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
 */function Sp({projectId:e}){return`${c1}/projects/${e}/installations`}function Ep(e){return{token:e.token,requestStatus:2,expiresIn:g1(e.expiresIn),creationTime:Date.now()}}async function Ip(e,t){const r=(await t.json()).error;return fn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function m1(e,{refreshToken:t}){const n=kp(e);return n.append("Authorization",v1(t)),n}async function Cp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function g1(e){return Number(e.replace("s","000"))}function v1(e){return`${wp} ${e}`}/**
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
 */async function y1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Sp(e),i=kp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:wp,appId:e.appId,sdkVersion:yp},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Cp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ep(u.authToken)}}else throw await Ip("Create Installation",l)}/**
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
 */function Tp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function w1(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _1=/^[cdef][\w-]{21}$/,Ga="";function S1(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=E1(e);return _1.test(n)?n:Ga}catch{return Ga}}function E1(e){return w1(e).substr(0,22)}/**
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
 */function Yo(e){return`${e.appName}!${e.appId}`}/**
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
 */const Rp=new Map;function Pp(e,t){const n=Yo(e);Np(n,t),I1(n,t)}function Np(e,t){const n=Rp.get(e);if(n)for(const r of n)r(t)}function I1(e,t){const n=k1();n&&n.postMessage({key:e,fid:t}),C1()}let Zt=null;function k1(){return!Zt&&"BroadcastChannel"in self&&(Zt=new BroadcastChannel("[Firebase] FID Change"),Zt.onmessage=e=>{Np(e.data.key,e.data.fid)}),Zt}function C1(){Rp.size===0&&Zt&&(Zt.close(),Zt=null)}/**
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
 */const T1="firebase-installations-database",R1=1,hn="firebase-installations-store";let Fs=null;function iu(){return Fs||(Fs=Uh(T1,R1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hn)}}})),Fs}async function Co(e,t){const n=Yo(e),i=(await iu()).transaction(hn,"readwrite"),o=i.objectStore(hn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Pp(e,t.fid),t}async function Op(e){const t=Yo(e),r=(await iu()).transaction(hn,"readwrite");await r.objectStore(hn).delete(t),await r.done}async function Jo(e,t){const n=Yo(e),i=(await iu()).transaction(hn,"readwrite"),o=i.objectStore(hn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Pp(e,a.fid),a}/**
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
 */async function ou(e){let t;const n=await Jo(e.appConfig,r=>{const i=P1(r),o=N1(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ga?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function P1(e){const t=e||{fid:S1(),registrationStatus:0};return Ap(t)}function N1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=O1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:A1(e)}:{installationEntry:t}}async function O1(e,t){try{const n=await y1(e,t);return Co(e.appConfig,n)}catch(n){throw _p(n)&&n.customData.serverCode===409?await Op(e.appConfig):await Co(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function A1(e){let t=await Xc(e.appConfig);for(;t.registrationStatus===1;)await Tp(100),t=await Xc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ou(e);return r||n}return t}function Xc(e){return Jo(e,t=>{if(!t)throw fn.create("installation-not-found");return Ap(t)})}function Ap(e){return x1(e)?{fid:e.fid,registrationStatus:0}:e}function x1(e){return e.registrationStatus===1&&e.registrationTime+vp<Date.now()}/**
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
 */async function D1({appConfig:e,heartbeatServiceProvider:t},n){const r=L1(e,n),i=m1(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:yp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Cp(()=>fetch(r,a));if(l.ok){const u=await l.json();return Ep(u)}else throw await Ip("Generate Auth Token",l)}function L1(e,{fid:t}){return`${Sp(e)}/${t}/authTokens:generate`}/**
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
 */async function su(e,t=!1){let n;const r=await Jo(e.appConfig,o=>{if(!xp(o))throw fn.create("not-registered");const s=o.authToken;if(!t&&F1(s))return o;if(s.requestStatus===1)return n=M1(e,t),o;{if(!navigator.onLine)throw fn.create("app-offline");const a=j1(o);return n=U1(e,a),a}});return n?await n:r.authToken}async function M1(e,t){let n=await Zc(e.appConfig);for(;n.authToken.requestStatus===1;)await Tp(100),n=await Zc(e.appConfig);const r=n.authToken;return r.requestStatus===0?su(e,t):r}function Zc(e){return Jo(e,t=>{if(!xp(t))throw fn.create("not-registered");const n=t.authToken;return $1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function U1(e,t){try{const n=await D1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Co(e.appConfig,r),n}catch(n){if(_p(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Op(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Co(e.appConfig,r)}throw n}}function xp(e){return e!==void 0&&e.registrationStatus===2}function F1(e){return e.requestStatus===2&&!z1(e)}function z1(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d1}function j1(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function $1(e){return e.requestStatus===1&&e.requestTime+vp<Date.now()}/**
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
 */async function b1(e){const t=e,{installationEntry:n,registrationPromise:r}=await ou(t);return r?r.catch(console.error):su(t).catch(console.error),n.fid}/**
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
 */async function B1(e,t=!1){const n=e;return await V1(n),(await su(n,t)).token}async function V1(e){const{registrationPromise:t}=await ou(e);t&&await t}/**
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
 */function H1(e){if(!e||!e.options)throw zs("App Configuration");if(!e.name)throw zs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function zs(e){return fn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="installations",W1="installations-internal",K1=e=>{const t=e.getProvider("app").getImmediate(),n=H1(t),r=Jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},G1=e=>{const t=e.getProvider("app").getImmediate(),n=Jn(t,Dp).getImmediate();return{getId:()=>b1(n),getToken:i=>B1(n,i)}};function Q1(){ft(new Ze(Dp,K1,"PUBLIC")),ft(new Ze(W1,G1,"PRIVATE"))}Q1();Ye(gp,ru);Ye(gp,ru,"esm2017");/**
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
 */const To="analytics",q1="firebase_id",Y1="origin",J1=60*1e3,X1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new Kl("@firebase/analytics");/**
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
 */function Mp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Z1(e,t){const n=document.createElement("script");n.src=`${Lp}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function eS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function tS(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Mp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ie.error(a)}e("config",i,o)}async function nS(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Mp(n);for(const l of s){const u=a.find(p=>p.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ie.error(o)}}function rS(e,t,n,r){async function i(o,s,a){try{o==="event"?await nS(e,t,n,s,a):o==="config"?await tS(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ie.error(l)}}return i}function iS(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=rS(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function oS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Lp)&&n.src.includes(e))return n;return null}/**
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
 */const sS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ae=new gn("analytics","Analytics",sS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=30,lS=1e3;class uS{constructor(t={},n=lS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Up=new uS;function cS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function dS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:cS(r)},o=X1.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function fS(e,t=Up,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ae.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ae.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mS;return setTimeout(async()=>{a.abort()},n!==void 0?n:J1),Fp({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Fp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Up){var o;const{appId:s,measurementId:a}=e;try{await hS(r,t)}catch(l){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await dS(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!pS(u)){if(i.deleteThrottleMetadata(s),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Rc(n,i.intervalMillis,aS):Rc(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),Ie.debug(`Calling attemptFetch again in ${d} millis`),Fp(e,p,r,i)}}function hS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function pS(e){if(!(e instanceof et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class mS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function gS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(){if(Ah())try{await xh()}catch(e){return Ie.warn(Ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yS(e,t,n,r,i,o,s){var a;const l=fS(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ie.error(g)),t.push(l);const u=vS().then(g=>{if(g)return r.getId()}),[d,p]=await Promise.all([l,u]);oS(o)||Z1(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[Y1]="firebase",m.update=!0,p!=null&&(m[q1]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class wS{constructor(t){this.app=t}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},ed=[];const td={};let js="dataLayer",_S="gtag",nd,zp,rd=!1;function SS(){const e=[];if(Oh()&&e.push("This is a browser extension environment."),Ly()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ae.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function ES(e,t,n){SS();const r=e.options.appId;if(!r)throw Ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(Cr[r]!=null)throw Ae.create("already-exists",{id:r});if(!rd){eS(js);const{wrappedGtag:o,gtagCore:s}=iS(Cr,ed,td,js,_S);zp=o,nd=s,rd=!0}return Cr[r]=yS(e,ed,td,t,nd,js,n),new wS(e)}function IS(e=zh()){e=He(e);const t=Jn(e,To);return t.isInitialized()?t.getImmediate():kS(e)}function kS(e,t={}){const n=Jn(e,To);if(n.isInitialized()){const i=n.getImmediate();if(Hr(t,n.getOptions()))return i;throw Ae.create("already-initialized")}return n.initialize({options:t})}function CS(e,t,n,r){e=He(e),gS(zp,Cr[e.app.options.appId],t,n,r).catch(i=>Ie.error(i))}const id="@firebase/analytics",od="0.9.0";function TS(){ft(new Ze(To,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ES(r,i,n)},"PUBLIC")),ft(new Ze("analytics-internal",e,"PRIVATE")),Ye(id,od),Ye(id,od,"esm2017");function e(t){try{const n=t.getProvider(To).getImmediate();return{logEvent:(r,i,o)=>CS(n,r,i,o)}}catch(n){throw Ae.create("interop-component-reg-failed",{reason:n})}}}TS();const RS={apiKey:"AIzaSyB3yax05_NE2aoImV9OfrAOj_f_ZJzL92A",authDomain:"react-fb-auth-dc4a0.firebaseapp.com",projectId:"react-fb-auth-dc4a0",storageBucket:"react-fb-auth-dc4a0.appspot.com",messagingSenderId:"522032381569",appId:"1:522032381569:web:2ad24b106cd4045e7f5780",measurementId:"G-SSQ6P15GFS"},jp=Fh(RS),Ni=a1(jp);IS(jp);const $p=S.createContext(),Xo=()=>S.useContext($p);function PS({children:e}){const[t,n]=S.useState(null),[r,i]=S.useState(!0),o=(l,u)=>Bw(Ni,l,u),s=(l,u)=>Vw(Ni,l,u),a=()=>Gw(Ni);return S.useEffect(()=>{Kw(Ni,l=>{n(l),i(!1)})},[]),E($p.Provider,{value:{signup:o,login:s,user:t,logout:a,loading:r},children:e})}function NS(){const{user:e,logout:t,loading:n}=Xo(),r=async()=>{await t()};return n?E("h1",{children:"loading..."}):je("div",{children:[E("h1",{children:e.email}),E("button",{onClick:r,children:"Logout"})]})}function OS(){return E("div",{children:"About"})}function AS(){return E("div",{children:E(Py,{})})}function xS(){const{id:e}=sy();return je("div",{children:["User ",E("h1",{children:e})]})}function DS(){const e=ei();return je("div",{children:[E("button",{onClick:()=>{e("/")},children:"go to landing"}),E("br",{}),E(Ic,{to:"welcome",children:"say welcome"}),E("br",{}),E(Ic,{to:"goodbye",children:"say goodbye"}),E("br",{}),E(Ch,{})]})}const sd=()=>E("div",{children:"Landing"}),LS=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=Xo();return r?E("h1",{children:"loading..."}):n?e||E(Ch,{}):E(kh,{to:t})},MS=()=>{const[e,t]=S.useState({email:"",password:""}),[n,r]=S.useState(null),{login:i}=Xo(),o=ei(),s=({target:{name:l,value:u}})=>{t({...e,[l]:u})};return je("div",{children:[n&&E("p",{children:n}),je("form",{onSubmit:async l=>{l.preventDefault(),r("");try{await i(e.email,e.password),o("/home")}catch(u){r(u.message)}},children:[E("label",{htmlFor:"email",children:"Email"}),E("input",{type:"email",name:"email",placeholder:"youremai@company.ltd",onChange:s}),E("label",{htmlFor:"password",children:"Password"}),E("input",{type:"password",name:"password",id:"password",placeholder:"******",onChange:s}),E("button",{children:"login"})]})]})},US=()=>{const[e,t]=S.useState({email:"",password:""}),[n,r]=S.useState(),{signup:i}=Xo(),o=ei(),s=({target:{name:l,value:u}})=>{t({...e,[l]:u})};return je("div",{children:[n&&E("p",{children:n}),je("form",{onSubmit:async l=>{l.preventDefault(),r("");try{await i(e.email,e.password),o("/home")}catch(u){r(u.message)}},children:[E("label",{htmlFor:"email",children:"Email"}),E("input",{type:"email",name:"email",placeholder:"youremai@company.ltd",onChange:s}),E("label",{htmlFor:"password",children:"Password"}),E("input",{type:"password",name:"password",id:"password",placeholder:"******",onChange:s}),E("button",{children:"Register"})]})]})};function FS(){return E("main",{className:"min-h-screen bg-gradient-to-b from-gray-200 to-gray-500",children:E("div",{className:"container mx-auto",children:E(Ey,{basename:"/react-tasks-app/",children:je(vy,{children:[E(ce,{index:!0,path:"/",element:E(sd,{})}),E(ce,{path:"/landing",element:E(sd,{})}),je(ce,{element:E(LS,{}),children:[E(ce,{path:"/home",element:E(NS,{})}),je(ce,{path:"/dashboard/*",element:E(DS,{}),children:[E(ce,{path:"welcome",element:E("p",{children:"welcome"})}),E(ce,{path:"goodbye",element:E("p",{children:"goodbye"})})]}),E(ce,{path:"/about",element:E(OS,{})}),E(ce,{path:"/users",element:E(AS,{})}),E(ce,{path:"/usuarios",element:E(kh,{to:"/users"})}),E(ce,{path:"/users/:id",element:E(xS,{})})]}),E(ce,{path:"/login",element:E(MS,{})}),E(ce,{path:"/register",element:E(US,{})}),E(ce,{path:"/*",element:E(ky,{})})]})})})})}bs.createRoot(document.getElementById("root")).render(E(pd.StrictMode,{children:E(PS,{children:E(Ty,{children:E(FS,{})})})}));
