function Wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qi={},Gp={get exports(){return Qi},set exports(e){Qi=e}},xo={},E={},Qp={get exports(){return E},set exports(e){E=e}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ei=Symbol.for("react.element"),qp=Symbol.for("react.portal"),Yp=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),Xp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),em=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),im=Symbol.for("react.lazy"),du=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cd=Object.assign,dd={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fd(){}fd.prototype=Qn.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=dd,this.updater=n||ud}var Ja=Ya.prototype=new fd;Ja.constructor=Ya;cd(Ja,Qn.prototype);Ja.isPureReactComponent=!0;var fu=Array.isArray,hd=Object.prototype.hasOwnProperty,Xa={current:null},pd={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)hd.call(t,r)&&!pd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ei,type:e,key:o,ref:s,props:i,_owner:Xa.current}}function sm(e,t){return{$$typeof:ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Za(e){return typeof e=="object"&&e!==null&&e.$$typeof===ei}function am(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?am(""+e.key):t.toString(36)}function Ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ei:case qp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+is(s,0):r,fu(i)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),Ai(i,t,n,"",function(u){return u})):i!=null&&(Za(i)&&(i=sm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",fu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+is(o,a);s+=Ai(o,t,n,l,i)}else if(l=om(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+is(o,a++),s+=Ai(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function pi(e,t,n){if(e==null)return e;var r=[],i=0;return Ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Di={transition:null},um={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Di,ReactCurrentOwner:Xa};D.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!Za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Qn;D.Fragment=Yp;D.Profiler=Xp;D.PureComponent=Ya;D.StrictMode=Jp;D.Suspense=nm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=um;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)hd.call(t,l)&&!pd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ei,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};D.createElement=md;D.createFactory=function(e){var t=md.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:tm,render:e}};D.isValidElement=Za;D.lazy=function(e){return{$$typeof:im,_payload:{_status:-1,_result:e},_init:lm}};D.memo=function(e,t){return{$$typeof:rm,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return pe.current.useCallback(e,t)};D.useContext=function(e){return pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};D.useEffect=function(e,t){return pe.current.useEffect(e,t)};D.useId=function(){return pe.current.useId()};D.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return pe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};D.useRef=function(e){return pe.current.useRef(e)};D.useState=function(e){return pe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return pe.current.useTransition()};D.version="18.2.0";(function(e){e.exports=D})(Qp);const gd=Kp(E),Bs=Wp({__proto__:null,default:gd},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=E,dm=Symbol.for("react.element"),fm=Symbol.for("react.fragment"),hm=Object.prototype.hasOwnProperty,pm=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mm={key:!0,ref:!0,__self:!0,__source:!0};function vd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)hm.call(t,r)&&!mm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dm,type:e,key:o,ref:s,props:i,_owner:pm.current}}xo.Fragment=fm;xo.jsx=vd;xo.jsxs=vd;(function(e){e.exports=xo})(Gp);const v=Qi.jsx,B=Qi.jsxs;var Vs={},Hs={},gm={get exports(){return Hs},set exports(e){Hs=e}},Te={},Ws={},vm={get exports(){return Ws},set exports(e){Ws=e}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,N){var O=C.length;C.push(N);e:for(;0<O;){var Q=O-1>>>1,ee=C[Q];if(0<i(ee,N))C[Q]=N,C[O]=ee,O=Q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var N=C[0],O=C.pop();if(O!==N){C[0]=O;e:for(var Q=0,ee=C.length,fi=ee>>>1;Q<fi;){var Wt=2*(Q+1)-1,rs=C[Wt],Kt=Wt+1,hi=C[Kt];if(0>i(rs,O))Kt<ee&&0>i(hi,rs)?(C[Q]=hi,C[Kt]=O,Q=Kt):(C[Q]=rs,C[Wt]=O,Q=Wt);else if(Kt<ee&&0>i(hi,O))C[Q]=hi,C[Kt]=O,Q=Kt;else break e}}return N}function i(C,N){var O=C.sortIndex-N.sortIndex;return O!==0?O:C.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,p=3,g=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=C)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function _(C){if(y=!1,m(C),!w)if(n(l)!==null)w=!0,ts(k);else{var N=n(u);N!==null&&ns(_,N.startTime-C)}}function k(C,N){w=!1,y&&(y=!1,f(P),P=-1),g=!0;var O=p;try{for(m(N),h=n(l);h!==null&&(!(h.expirationTime>N)||C&&!be());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,p=h.priorityLevel;var ee=Q(h.expirationTime<=N);N=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(l)&&r(l),m(N)}else r(l);h=n(l)}if(h!==null)var fi=!0;else{var Wt=n(u);Wt!==null&&ns(_,Wt.startTime-N),fi=!1}return fi}finally{h=null,p=O,g=!1}}var T=!1,R=null,P=-1,z=5,A=-1;function be(){return!(e.unstable_now()-A<z)}function ir(){if(R!==null){var C=e.unstable_now();A=C;var N=!0;try{N=R(!0,C)}finally{N?or():(T=!1,R=null)}}else T=!1}var or;if(typeof c=="function")or=function(){c(ir)};else if(typeof MessageChannel<"u"){var cu=new MessageChannel,Hp=cu.port2;cu.port1.onmessage=ir,or=function(){Hp.postMessage(null)}}else or=function(){M(ir,0)};function ts(C){R=C,T||(T=!0,or())}function ns(C,N){P=M(function(){C(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,ts(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var O=p;p=N;try{return C()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,N){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=p;p=C;try{return N()}finally{p=O}},e.unstable_scheduleCallback=function(C,N,O){var Q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,C){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=O+ee,C={id:d++,callback:N,priorityLevel:C,startTime:O,expirationTime:ee,sortIndex:-1},O>Q?(C.sortIndex=O,t(u,C),n(l)===null&&C===n(u)&&(y?(f(P),P=-1):y=!0,ns(_,O-Q))):(C.sortIndex=ee,t(l,C),w||g||(w=!0,ts(k))),C},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(C){var N=p;return function(){var O=p;p=N;try{return C.apply(this,arguments)}finally{p=O}}}})(yd);(function(e){e.exports=yd})(vm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=E,Ce=Ws;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _d=new Set,Or={};function mn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Or[e]=t,e=0;e<t.length;e++)_d.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},mu={};function wm(e){return Ks.call(mu,e)?!0:Ks.call(pu,e)?!1:ym.test(e)?mu[e]=!0:(pu[e]=!0,!1)}function _m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sm(e,t,n,r){if(t===null||typeof t>"u"||_m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(el,tl);oe[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(el,tl);oe[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(el,tl);oe[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function nl(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sm(t,n,i,r)&&(n=null),r||i===null?wm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),Gs=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),Ed=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),Qs=Symbol.for("react.suspense"),qs=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),kd=Symbol.for("react.offscreen"),gu=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,os;function pr(e){if(os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);os=t&&t[1]||""}return`
`+os+e}var ss=!1;function as(e,t){if(!e||ss)return"";ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function Em(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=as(e.type,!1),e;case 11:return e=as(e.type.render,!1),e;case 1:return e=as(e.type,!0),e;default:return""}}function Ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case _n:return"Portal";case Gs:return"Profiler";case rl:return"StrictMode";case Qs:return"Suspense";case qs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ed:return(e.displayName||"Context")+".Consumer";case Sd:return(e._context.displayName||"Context")+".Provider";case il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return t=e.displayName||null,t!==null?t:Ys(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Ys(e(t))}catch{}}return null}function km(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ys(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e){var t=Id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=Im(e))}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Js(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Td(e,t){t=t.checked,t!=null&&nl(e,"checked",t,!1)}function Xs(e,t){Td(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zs(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zs(e,t,n){(t!=="number"||qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(mr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Rd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cm=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){Cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function Nd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Od(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tm=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(Tm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,Dn=null,Ln=null;function Su(e){if(e=ri(e)){if(typeof oa!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Lo(t),oa(e.stateNode,e.type,t))}}function Ad(e){Dn?Ln?Ln.push(e):Ln=[e]:Dn=e}function Dd(){if(Dn){var e=Dn,t=Ln;if(Ln=Dn=null,Su(e),t)for(e=0;e<t.length;e++)Su(t[e])}}function Ld(e,t){return e(t)}function Md(){}var ls=!1;function Ud(e,t,n){if(ls)return e(t,n);ls=!0;try{return Ld(e,t,n)}finally{ls=!1,(Dn!==null||Ln!==null)&&(Md(),Dd())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var sa=!1;if(ut)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){sa=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{sa=!1}function Rm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Sr=!1,Yi=null,Ji=!1,aa=null,Pm={onError:function(e){Sr=!0,Yi=e}};function xm(e,t,n,r,i,o,s,a,l){Sr=!1,Yi=null,Rm.apply(Pm,arguments)}function Nm(e,t,n,r,i,o,s,a,l){if(xm.apply(this,arguments),Sr){if(Sr){var u=Yi;Sr=!1,Yi=null}else throw Error(S(198));Ji||(Ji=!0,aa=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eu(e){if(gn(e)!==e)throw Error(S(188))}function Om(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Eu(i),e;if(o===r)return Eu(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Fd(e){return e=Om(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var jd=Ce.unstable_scheduleCallback,ku=Ce.unstable_cancelCallback,Am=Ce.unstable_shouldYield,Dm=Ce.unstable_requestPaint,q=Ce.unstable_now,Lm=Ce.unstable_getCurrentPriorityLevel,al=Ce.unstable_ImmediatePriority,$d=Ce.unstable_UserBlockingPriority,Xi=Ce.unstable_NormalPriority,Mm=Ce.unstable_LowPriority,Bd=Ce.unstable_IdlePriority,No=null,Qe=null;function Um(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:zm,bm=Math.log,Fm=Math.LN2;function zm(e){return e>>>=0,e===0?32:31-(bm(e)/Fm|0)|0}var yi=64,wi=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=gr(a):(o&=s,o!==0&&(r=gr(o)))}else s=n&~i,s!==0?r=gr(s):o!==0&&(r=gr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $m(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Be(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=jm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function la(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vd(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function Bm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wd,ul,Kd,Gd,Qd,ua=!1,_i=[],Pt=null,xt=null,Nt=null,Lr=new Map,Mr=new Map,_t=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iu(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ri(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hm(e,t,n,r,i){switch(t){case"focusin":return Pt=lr(Pt,e,t,n,r,i),!0;case"dragenter":return xt=lr(xt,e,t,n,r,i),!0;case"mouseover":return Nt=lr(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,lr(Lr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mr.set(o,lr(Mr.get(o)||null,e,t,n,r,i)),!0}return!1}function qd(e){var t=Yt(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=bd(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Kd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ia=r,n.target.dispatchEvent(r),ia=null}else return t=ri(n),t!==null&&ul(t),e.blockedOn=n,!1;t.shift()}return!0}function Cu(e,t,n){Li(e)&&n.delete(t)}function Wm(){ua=!1,Pt!==null&&Li(Pt)&&(Pt=null),xt!==null&&Li(xt)&&(xt=null),Nt!==null&&Li(Nt)&&(Nt=null),Lr.forEach(Cu),Mr.forEach(Cu)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Wm)))}function Ur(e){function t(i){return ur(i,e)}if(0<_i.length){ur(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&ur(Pt,e),xt!==null&&ur(xt,e),Nt!==null&&ur(Nt,e),Lr.forEach(t),Mr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&_t.shift()}var Mn=mt.ReactCurrentBatchConfig,eo=!0;function Km(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=1,cl(e,t,n,r)}finally{U=i,Mn.transition=o}}function Gm(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=4,cl(e,t,n,r)}finally{U=i,Mn.transition=o}}function cl(e,t,n,r){if(eo){var i=ca(e,t,n,r);if(i===null)ws(e,t,r,to,n),Iu(e,r);else if(Hm(i,e,t,n,r))r.stopPropagation();else if(Iu(e,r),t&4&&-1<Vm.indexOf(e)){for(;i!==null;){var o=ri(i);if(o!==null&&Wd(o),o=ca(e,t,n,r),o===null&&ws(e,t,r,to,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ws(e,t,r,null,n)}}var to=null;function ca(e,t,n,r){if(to=null,e=sl(r),e=Yt(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function Yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case al:return 1;case $d:return 4;case Xi:case Mm:return 16;case Bd:return 536870912;default:return 16}default:return 16}}var Ct=null,dl=null,Mi=null;function Jd(){if(Mi)return Mi;var e,t=dl,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Tu(){return!1}function Re(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Si:Tu,this.isPropagationStopped=Tu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Re(qn),ni=K({},qn,{view:0,detail:0}),Qm=Re(ni),cs,ds,cr,Oo=K({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(cs=e.screenX-cr.screenX,ds=e.screenY-cr.screenY):ds=cs=0,cr=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:ds}}),Ru=Re(Oo),qm=K({},Oo,{dataTransfer:0}),Ym=Re(qm),Jm=K({},ni,{relatedTarget:0}),fs=Re(Jm),Xm=K({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Re(Xm),eg=K({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=Re(eg),ng=K({},qn,{data:0}),Pu=Re(ng),rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=og[e])?!!t[e]:!1}function hl(){return sg}var ag=K({},ni,{key:function(e){if(e.key){var t=rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=Re(ag),ug=K({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Re(ug),cg=K({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),dg=Re(cg),fg=K({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Re(fg),pg=K({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=Re(pg),gg=[9,13,27,32],pl=ut&&"CompositionEvent"in window,Er=null;ut&&"documentMode"in document&&(Er=document.documentMode);var vg=ut&&"TextEvent"in window&&!Er,Xd=ut&&(!pl||Er&&8<Er&&11>=Er),Nu=String.fromCharCode(32),Ou=!1;function Zd(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function yg(e,t){switch(e){case"compositionend":return ef(t);case"keypress":return t.which!==32?null:(Ou=!0,Nu);case"textInput":return e=t.data,e===Nu&&Ou?null:e;default:return null}}function wg(e,t){if(En)return e==="compositionend"||!pl&&Zd(e,t)?(e=Jd(),Mi=dl=Ct=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xd&&t.locale!=="ko"?null:t.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_g[e.type]:t==="textarea"}function tf(e,t,n,r){Ad(r),t=no(t,"onChange"),0<t.length&&(n=new fl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,br=null;function Sg(e){hf(e,0)}function Ao(e){var t=Cn(e);if(Cd(t))return e}function Eg(e,t){if(e==="change")return t}var nf=!1;if(ut){var hs;if(ut){var ps="oninput"in document;if(!ps){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),ps=typeof Du.oninput=="function"}hs=ps}else hs=!1;nf=hs&&(!document.documentMode||9<document.documentMode)}function Lu(){kr&&(kr.detachEvent("onpropertychange",rf),br=kr=null)}function rf(e){if(e.propertyName==="value"&&Ao(br)){var t=[];tf(t,br,e,sl(e)),Ud(Sg,t)}}function kg(e,t,n){e==="focusin"?(Lu(),kr=t,br=n,kr.attachEvent("onpropertychange",rf)):e==="focusout"&&Lu()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(br)}function Cg(e,t){if(e==="click")return Ao(t)}function Tg(e,t){if(e==="input"||e==="change")return Ao(t)}function Rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Rg;function Fr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ks.call(t,i)||!He(e[i],t[i]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sf(){for(var e=window,t=qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qi(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pg(e){var t=sf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&of(n.ownerDocument.documentElement,n)){if(r!==null&&ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Uu(n,o);var s=Uu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xg=ut&&"documentMode"in document&&11>=document.documentMode,kn=null,da=null,Ir=null,fa=!1;function bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fa||kn==null||kn!==qi(r)||(r=kn,"selectionStart"in r&&ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Fr(Ir,r)||(Ir=r,r=no(da,"onSelect"),0<r.length&&(t=new fl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},ms={},af={};ut&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Do(e){if(ms[e])return ms[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in af)return ms[e]=t[n];return e}var lf=Do("animationend"),uf=Do("animationiteration"),cf=Do("animationstart"),df=Do("transitionend"),ff=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){ff.set(e,t),mn(t,[e])}for(var gs=0;gs<Fu.length;gs++){var vs=Fu[gs],Ng=vs.toLowerCase(),Og=vs[0].toUpperCase()+vs.slice(1);$t(Ng,"on"+Og)}$t(lf,"onAnimationEnd");$t(uf,"onAnimationIteration");$t(cf,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(df,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nm(r,t,void 0,e),e.currentTarget=null}function hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,u),o=l}}}if(Ji)throw e=aa,Ji=!1,aa=null,e}function j(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(pf(t,e,2,!1),n.add(r))}function ys(e,t,n){var r=0;t&&(r|=4),pf(n,e,r,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[ki]){e[ki]=!0,_d.forEach(function(n){n!=="selectionchange"&&(Ag.has(n)||ys(n,!1,e),ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,ys("selectionchange",!1,t))}}function pf(e,t,n,r){switch(Yd(t)){case 1:var i=Km;break;case 4:i=Gm;break;default:i=cl}n=i.bind(null,t,n,e),i=void 0,!sa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ws(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Yt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ud(function(){var u=o,d=sl(n),h=[];e:{var p=ff.get(e);if(p!==void 0){var g=fl,w=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":g=lg;break;case"focusin":w="focus",g=fs;break;case"focusout":w="blur",g=fs;break;case"beforeblur":case"afterblur":g=fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dg;break;case lf:case uf:case cf:g=Zm;break;case df:g=hg;break;case"scroll":g=Qm;break;case"wheel":g=mg;break;case"copy":case"cut":case"paste":g=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xu}var y=(t&4)!==0,M=!y&&e==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var c=u,m;c!==null;){m=c;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,f!==null&&(_=Dr(c,f),_!=null&&y.push(jr(c,_,m)))),M)break;c=c.return}0<y.length&&(p=new g(p,w,null,n,d),h.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==ia&&(w=n.relatedTarget||n.fromElement)&&(Yt(w)||w[ct]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Yt(w):null,w!==null&&(M=gn(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=Ru,_="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=xu,_="onPointerLeave",f="onPointerEnter",c="pointer"),M=g==null?p:Cn(g),m=w==null?p:Cn(w),p=new y(_,c+"leave",g,n,d),p.target=M,p.relatedTarget=m,_=null,Yt(d)===u&&(y=new y(f,c+"enter",w,n,d),y.target=m,y.relatedTarget=M,_=y),M=_,g&&w)t:{for(y=g,f=w,c=0,m=y;m;m=yn(m))c++;for(m=0,_=f;_;_=yn(_))m++;for(;0<c-m;)y=yn(y),c--;for(;0<m-c;)f=yn(f),m--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=yn(y),f=yn(f)}y=null}else y=null;g!==null&&ju(h,p,g,y,!1),w!==null&&M!==null&&ju(h,M,w,y,!0)}}e:{if(p=u?Cn(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=Eg;else if(Au(p))if(nf)k=Tg;else{k=Ig;var T=kg}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Cg);if(k&&(k=k(e,u))){tf(h,k,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Zs(p,"number",p.value)}switch(T=u?Cn(u):window,e){case"focusin":(Au(T)||T.contentEditable==="true")&&(kn=T,da=u,Ir=null);break;case"focusout":Ir=da=kn=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,bu(h,n,d);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":bu(h,n,d)}var R;if(pl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else En?Zd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xd&&n.locale!=="ko"&&(En||P!=="onCompositionStart"?P==="onCompositionEnd"&&En&&(R=Jd()):(Ct=d,dl="value"in Ct?Ct.value:Ct.textContent,En=!0)),T=no(u,P),0<T.length&&(P=new Pu(P,e,null,n,d),h.push({event:P,listeners:T}),R?P.data=R:(R=ef(n),R!==null&&(P.data=R)))),(R=vg?yg(e,n):wg(e,n))&&(u=no(u,"onBeforeInput"),0<u.length&&(d=new Pu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=R))}hf(h,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,n),o!=null&&r.unshift(jr(e,o,i)),o=Dr(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Dr(n,o),l!=null&&s.unshift(jr(n,l,a))):i||(l=Dr(n,o),l!=null&&s.push(jr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function $u(e){return(typeof e=="string"?e:""+e).replace(Dg,`
`).replace(Lg,"")}function Ii(e,t,n){if(t=$u(t),$u(e)!==t&&n)throw Error(S(425))}function ro(){}var ha=null,pa=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(bg)}:ga;function bg(e){setTimeout(function(){throw e})}function _s(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Yn,$r="__reactProps$"+Yn,ct="__reactContainer$"+Yn,va="__reactEvents$"+Yn,Fg="__reactListeners$"+Yn,zg="__reactHandles$"+Yn;function Yt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vu(e);e!==null;){if(n=e[Ge])return n;e=Vu(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[Ge]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Lo(e){return e[$r]||null}var ya=[],Tn=-1;function Bt(e){return{current:e}}function $(e){0>Tn||(e.current=ya[Tn],ya[Tn]=null,Tn--)}function F(e,t){Tn++,ya[Tn]=e.current,e.current=t}var jt={},ue=Bt(jt),ye=Bt(!1),on=jt;function $n(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function io(){$(ye),$(ue)}function Hu(e,t,n){if(ue.current!==jt)throw Error(S(168));F(ue,t),F(ye,n)}function mf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,km(e)||"Unknown",i));return K({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,on=ue.current,F(ue,e),F(ye,ye.current),!0}function Wu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=mf(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,$(ye),$(ue),F(ue,e)):$(ye),F(ye,n)}var nt=null,Mo=!1,Ss=!1;function gf(e){nt===null?nt=[e]:nt.push(e)}function jg(e){Mo=!0,gf(e)}function Vt(){if(!Ss&&nt!==null){Ss=!0;var e=0,t=U;try{var n=nt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Mo=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),jd(al,Vt),i}finally{U=t,Ss=!1}}return null}var Rn=[],Pn=0,so=null,ao=0,Pe=[],xe=0,sn=null,it=1,ot="";function Gt(e,t){Rn[Pn++]=ao,Rn[Pn++]=so,so=e,ao=t}function vf(e,t,n){Pe[xe++]=it,Pe[xe++]=ot,Pe[xe++]=sn,sn=e;var r=it;e=ot;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var o=32-Be(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,it=1<<32-Be(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function gl(e){e.return!==null&&(Gt(e,1),vf(e,1,0))}function vl(e){for(;e===so;)so=Rn[--Pn],Rn[Pn]=null,ao=Rn[--Pn],Rn[Pn]=null;for(;e===sn;)sn=Pe[--xe],Pe[xe]=null,ot=Pe[--xe],Pe[xe]=null,it=Pe[--xe],Pe[xe]=null}var ke=null,Ee=null,V=!1,$e=null;function yf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,Ee=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,Ee=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _a(e){if(V){var t=Ee;if(t){var n=t;if(!Ku(e,t)){if(wa(e))throw Error(S(418));t=Ot(n.nextSibling);var r=ke;t&&Ku(e,t)?yf(r,n):(e.flags=e.flags&-4097|2,V=!1,ke=e)}}else{if(wa(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,ke=e}}}function Gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ci(e){if(e!==ke)return!1;if(!V)return Gu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=Ee)){if(wa(e))throw wf(),Error(S(418));for(;t;)yf(e,t),t=Ot(t.nextSibling)}if(Gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=ke?Ot(e.stateNode.nextSibling):null;return!0}function wf(){for(var e=Ee;e;)e=Ot(e.nextSibling)}function Bn(){Ee=ke=null,V=!1}function yl(e){$e===null?$e=[e]:$e.push(e)}var $g=mt.ReactCurrentBatchConfig;function ze(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var lo=Bt(null),uo=null,xn=null,wl=null;function _l(){wl=xn=uo=null}function Sl(e){var t=lo.current;$(lo),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){uo=e,wl=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(wl!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(uo===null)throw Error(S(308));xn=e,uo.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Jt=null;function El(e){Jt===null?Jt=[e]:Jt.push(e)}function _f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,El(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,El(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ll(e,n)}}function Qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(p=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(g,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(g,h,p):w,p==null)break e;h=K({},h,p);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ln|=s,e.lanes=s,e.memoizedState=h}}function qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ef=new wd.Component().refs;function Ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uo={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Lt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Ve(t,e,i,r),bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Lt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Ve(t,e,i,r),bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Lt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(Ve(t,e,r,n),bi(t,e,r))}};function Yu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,o):!0}function kf(e,t,n){var r=!1,i=jt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=we(t)?on:ue.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ef,kl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=we(t)?on:ue.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ea(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uo.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Ef&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xu(e){var t=e._init;return t(e._payload)}function If(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,_){return c===null||c.tag!==6?(c=Ps(m,f.mode,_),c.return=f,c):(c=i(c,m),c.return=f,c)}function l(f,c,m,_){var k=m.type;return k===Sn?d(f,c,m.props.children,_,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yt&&Xu(k)===c.type)?(_=i(c,m.props),_.ref=dr(f,c,m),_.return=f,_):(_=Vi(m.type,m.key,m.props,null,f.mode,_),_.ref=dr(f,c,m),_.return=f,_)}function u(f,c,m,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=xs(m,f.mode,_),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function d(f,c,m,_,k){return c===null||c.tag!==7?(c=nn(m,f.mode,_,k),c.return=f,c):(c=i(c,m),c.return=f,c)}function h(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ps(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mi:return m=Vi(c.type,c.key,c.props,null,f.mode,m),m.ref=dr(f,null,c),m.return=f,m;case _n:return c=xs(c,f.mode,m),c.return=f,c;case yt:var _=c._init;return h(f,_(c._payload),m)}if(mr(c)||sr(c))return c=nn(c,f.mode,m,null),c.return=f,c;Ti(f,c)}return null}function p(f,c,m,_){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(f,c,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mi:return m.key===k?l(f,c,m,_):null;case _n:return m.key===k?u(f,c,m,_):null;case yt:return k=m._init,p(f,c,k(m._payload),_)}if(mr(m)||sr(m))return k!==null?null:d(f,c,m,_,null);Ti(f,m)}return null}function g(f,c,m,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(m)||null,a(c,f,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case mi:return f=f.get(_.key===null?m:_.key)||null,l(c,f,_,k);case _n:return f=f.get(_.key===null?m:_.key)||null,u(c,f,_,k);case yt:var T=_._init;return g(f,c,m,T(_._payload),k)}if(mr(_)||sr(_))return f=f.get(m)||null,d(c,f,_,k,null);Ti(c,_)}return null}function w(f,c,m,_){for(var k=null,T=null,R=c,P=c=0,z=null;R!==null&&P<m.length;P++){R.index>P?(z=R,R=null):z=R.sibling;var A=p(f,R,m[P],_);if(A===null){R===null&&(R=z);break}e&&R&&A.alternate===null&&t(f,R),c=o(A,c,P),T===null?k=A:T.sibling=A,T=A,R=z}if(P===m.length)return n(f,R),V&&Gt(f,P),k;if(R===null){for(;P<m.length;P++)R=h(f,m[P],_),R!==null&&(c=o(R,c,P),T===null?k=R:T.sibling=R,T=R);return V&&Gt(f,P),k}for(R=r(f,R);P<m.length;P++)z=g(R,f,P,m[P],_),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?P:z.key),c=o(z,c,P),T===null?k=z:T.sibling=z,T=z);return e&&R.forEach(function(be){return t(f,be)}),V&&Gt(f,P),k}function y(f,c,m,_){var k=sr(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var T=k=null,R=c,P=c=0,z=null,A=m.next();R!==null&&!A.done;P++,A=m.next()){R.index>P?(z=R,R=null):z=R.sibling;var be=p(f,R,A.value,_);if(be===null){R===null&&(R=z);break}e&&R&&be.alternate===null&&t(f,R),c=o(be,c,P),T===null?k=be:T.sibling=be,T=be,R=z}if(A.done)return n(f,R),V&&Gt(f,P),k;if(R===null){for(;!A.done;P++,A=m.next())A=h(f,A.value,_),A!==null&&(c=o(A,c,P),T===null?k=A:T.sibling=A,T=A);return V&&Gt(f,P),k}for(R=r(f,R);!A.done;P++,A=m.next())A=g(R,f,P,A.value,_),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?P:A.key),c=o(A,c,P),T===null?k=A:T.sibling=A,T=A);return e&&R.forEach(function(ir){return t(f,ir)}),V&&Gt(f,P),k}function M(f,c,m,_){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mi:e:{for(var k=m.key,T=c;T!==null;){if(T.key===k){if(k=m.type,k===Sn){if(T.tag===7){n(f,T.sibling),c=i(T,m.props.children),c.return=f,f=c;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yt&&Xu(k)===T.type){n(f,T.sibling),c=i(T,m.props),c.ref=dr(f,T,m),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}m.type===Sn?(c=nn(m.props.children,f.mode,_,m.key),c.return=f,f=c):(_=Vi(m.type,m.key,m.props,null,f.mode,_),_.ref=dr(f,c,m),_.return=f,f=_)}return s(f);case _n:e:{for(T=m.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=xs(m,f.mode,_),c.return=f,f=c}return s(f);case yt:return T=m._init,M(f,c,T(m._payload),_)}if(mr(m))return w(f,c,m,_);if(sr(m))return y(f,c,m,_);Ti(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,m),c.return=f,f=c):(n(f,c),c=Ps(m,f.mode,_),c.return=f,f=c),s(f)):n(f,c)}return M}var Vn=If(!0),Cf=If(!1),ii={},qe=Bt(ii),Br=Bt(ii),Vr=Bt(ii);function Xt(e){if(e===ii)throw Error(S(174));return e}function Il(e,t){switch(F(Vr,t),F(Br,e),F(qe,ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}$(qe),F(qe,t)}function Hn(){$(qe),$(Br),$(Vr)}function Tf(e){Xt(Vr.current);var t=Xt(qe.current),n=ta(t,e.type);t!==n&&(F(Br,e),F(qe,n))}function Cl(e){Br.current===e&&($(qe),$(Br))}var H=Bt(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function Tl(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var Fi=mt.ReactCurrentDispatcher,ks=mt.ReactCurrentBatchConfig,an=0,W=null,X=null,te=null,ho=!1,Cr=!1,Hr=0,Bg=0;function se(){throw Error(S(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Pl(e,t,n,r,i,o){if(an=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?Kg:Gg,e=n(r,i),Cr){o=0;do{if(Cr=!1,Hr=0,25<=o)throw Error(S(301));o+=1,te=X=null,t.updateQueue=null,Fi.current=Qg,e=n(r,i)}while(Cr)}if(Fi.current=po,t=X!==null&&X.next!==null,an=0,te=X=W=null,ho=!1,t)throw Error(S(300));return e}function xl(){var e=Hr!==0;return Hr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?W.memoizedState=te=e:te=te.next=e,te}function Le(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?W.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?W.memoizedState=te=e:te=te.next=e}return te}function Wr(e,t){return typeof t=="function"?t(e):t}function Is(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((an&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,W.lanes|=d,ln|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,He(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cs(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);He(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rf(){}function Pf(e,t){var n=W,r=Le(),i=t(),o=!He(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Nl(Of.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Nf.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(S(349));an&30||xf(n,t,i)}return i}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nf(e,t,n,r){t.value=n,t.getSnapshot=r,Af(t)&&Df(e)}function Of(e,t,n){return n(function(){Af(t)&&Df(e)})}function Af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Df(e){var t=dt(e,1);t!==null&&Ve(t,e,1,-1)}function Zu(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Wg.bind(null,W,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lf(){return Le().memoizedState}function zi(e,t,n,r){var i=Ke();W.flags|=e,i.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(X!==null){var s=X.memoizedState;if(o=s.destroy,r!==null&&Rl(r,s.deps)){i.memoizedState=Kr(t,n,o,r);return}}W.flags|=e,i.memoizedState=Kr(1|t,n,o,r)}function ec(e,t){return zi(8390656,8,e,t)}function Nl(e,t){return bo(2048,8,e,t)}function Mf(e,t){return bo(4,2,e,t)}function Uf(e,t){return bo(4,4,e,t)}function bf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,bf.bind(null,t,e),n)}function Ol(){}function zf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jf(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $f(e,t,n){return an&21?(He(n,t)||(n=Vd(),W.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Vg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ks.transition;ks.transition={};try{e(!1),t()}finally{U=n,ks.transition=r}}function Bf(){return Le().memoizedState}function Hg(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vf(e))Hf(t,n);else if(n=_f(e,t,n,r),n!==null){var i=he();Ve(n,e,r,i),Wf(n,t,r)}}function Wg(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vf(e))Hf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,He(a,s)){var l=t.interleaved;l===null?(i.next=i,El(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_f(e,t,i,r),n!==null&&(i=he(),Ve(n,e,r,i),Wf(n,t,r))}}function Vf(e){var t=e.alternate;return e===W||t!==null&&t===W}function Hf(e,t){Cr=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ll(e,n)}}var po={readContext:De,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Kg={readContext:De,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,bf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hg.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:Ol,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=Vg.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=Ke();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));an&30||xf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ec(Of.bind(null,r,o,e),[e]),r.flags|=2048,Kr(9,Nf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ke(),t=ne.identifierPrefix;if(V){var n=ot,r=it;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gg={readContext:De,useCallback:zf,useContext:De,useEffect:Nl,useImperativeHandle:Ff,useInsertionEffect:Mf,useLayoutEffect:Uf,useMemo:jf,useReducer:Is,useRef:Lf,useState:function(){return Is(Wr)},useDebugValue:Ol,useDeferredValue:function(e){var t=Le();return $f(t,X.memoizedState,e)},useTransition:function(){var e=Is(Wr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Pf,useId:Bf,unstable_isNewReconciler:!1},Qg={readContext:De,useCallback:zf,useContext:De,useEffect:Nl,useImperativeHandle:Ff,useInsertionEffect:Mf,useLayoutEffect:Uf,useMemo:jf,useReducer:Cs,useRef:Lf,useState:function(){return Cs(Wr)},useDebugValue:Ol,useDeferredValue:function(e){var t=Le();return X===null?t.memoizedState=e:$f(t,X.memoizedState,e)},useTransition:function(){var e=Cs(Wr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Pf,useId:Bf,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=Em(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ia(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function Kf(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,La=r),Ia(e,t)},n}function Gf(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ia(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ia(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uv.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var Yg=mt.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?Cf(t,null,n,r):Vn(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var o=t.ref;return Un(t,i),r=Pl(e,t,n,r,o,i),n=xl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(V&&n&&gl(t),t.flags|=1,fe(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qf(e,t,o,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(s,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ft(e,t,i)}return Ca(e,t,n,r,i)}function qf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(On,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(On,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(On,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(On,Se),Se|=r;return fe(e,t,i,n),t.child}function Yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,n,r,i){var o=we(n)?on:ue.current;return o=$n(t,o),Un(t,i),n=Pl(e,t,n,r,o,i),r=xl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(V&&r&&gl(t),t.flags|=1,fe(e,t,n,i),t.child)}function sc(e,t,n,r,i){if(we(n)){var o=!0;oo(t)}else o=!1;if(Un(t,i),t.stateNode===null)ji(e,t),kf(t,n,r),ka(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=we(n)?on:ue.current,u=$n(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ju(t,s,r,u),wt=!1;var p=t.memoizedState;s.state=p,co(t,r,s,i),l=t.memoizedState,a!==r||p!==l||ye.current||wt?(typeof d=="function"&&(Ea(t,n,d,r),l=t.memoizedState),(a=wt||Yu(t,n,a,r,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Sf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ze(t.type,a),s.props=u,h=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=De(l):(l=we(n)?on:ue.current,l=$n(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||p!==l)&&Ju(t,s,r,l),wt=!1,p=t.memoizedState,s.state=p,co(t,r,s,i);var w=t.memoizedState;a!==h||p!==w||ye.current||wt?(typeof g=="function"&&(Ea(t,n,g,r),w=t.memoizedState),(u=wt||Yu(t,n,u,r,p,w,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ta(e,t,n,r,o,i)}function Ta(e,t,n,r,i,o){Yf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Wu(t,n,!1),ft(e,t,o);r=t.stateNode,Yg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Vn(t,e.child,null,o),t.child=Vn(t,null,a,o)):fe(e,t,a,o),t.memoizedState=r.state,i&&Wu(t,n,!0),t.child}function Jf(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),Il(e,t.containerInfo)}function ac(e,t,n,r,i){return Bn(),yl(i),t.flags|=256,fe(e,t,n,r),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xf(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(H,i&1),e===null)return _a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=jo(s,r,0,null),e=nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Pa(n),t.memoizedState=Ra,e):Al(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Jg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Pa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ra,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Al(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&yl(r),Vn(t,e.child,null,n),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ts(Error(S(422))),Ri(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jo({mode:"visible",children:r.children},i,0,null),o=nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Vn(t,e.child,null,s),t.child.memoizedState=Pa(s),t.memoizedState=Ra,o);if(!(t.mode&1))return Ri(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Ts(o,r,void 0),Ri(e,t,s,r)}if(a=(s&e.childLanes)!==0,ve||a){if(r=ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),Ve(r,e,i,-1))}return Fl(),r=Ts(Error(S(421))),Ri(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=Ot(i.nextSibling),ke=t,V=!0,$e=null,e!==null&&(Pe[xe++]=it,Pe[xe++]=ot,Pe[xe++]=sn,it=e.id,ot=e.overflow,sn=t),t=Al(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function Rs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rs(t,!0,n,null,o);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t,n){switch(t.tag){case 3:Jf(t),Bn();break;case 5:Tf(t);break;case 1:we(t.type)&&oo(t);break;case 4:Il(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Xf(e,t,n):(F(H,H.current&1),e=ft(e,t,n),e!==null?e.sibling:null);F(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,qf(e,t,n)}return ft(e,t,n)}var eh,xa,th,nh;eh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};th=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(qe.current);var o=null;switch(n){case"input":i=Js(e,i),r=Js(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=ea(e,i),r=ea(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}na(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};nh=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zg(e,t,n){var r=t.pendingProps;switch(vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return we(t.type)&&io(),ae(t),null;case 3:return r=t.stateNode,Hn(),$(ye),$(ue),Tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(ba($e),$e=null))),xa(e,t),ae(t),null;case 5:Cl(t);var i=Xt(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)th(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ae(t),null}if(e=Xt(qe.current),Ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ge]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)j(vr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":vu(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":wu(r,o),j("invalid",r)}na(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",""+a]):Or.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":gi(r),yu(r,o,!0);break;case"textarea":gi(r),_u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ro)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ge]=t,e[$r]=r,eh(e,t,!1,!1),t.stateNode=e;e:{switch(s=ra(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)j(vr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":vu(e,r),i=Js(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),j("invalid",e);break;case"textarea":wu(e,r),i=ea(e,r),j("invalid",e);break;default:i=r}na(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Od(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ar(e,l):typeof l=="number"&&Ar(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Or.hasOwnProperty(o)?l!=null&&o==="onScroll"&&j("scroll",e):l!=null&&nl(e,o,l,s))}switch(n){case"input":gi(e),yu(e,r,!1);break;case"textarea":gi(e),_u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?An(e,!!r.multiple,o,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)nh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Xt(Vr.current),Xt(qe.current),Ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(o=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return ae(t),null;case 13:if($(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ee!==null&&t.mode&1&&!(t.flags&128))wf(),Bn(),t.flags|=98560,o=!1;else if(o=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ge]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else $e!==null&&(ba($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):Fl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Hn(),xa(e,t),e===null&&zr(t.stateNode.containerInfo),ae(t),null;case 10:return Sl(t.type._context),ae(t),null;case 17:return we(t.type)&&io(),ae(t),null;case 19:if($(H),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)fr(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=fo(e),s!==null){for(t.flags|=128,fr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Kn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=fo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return ae(t),null}else 2*q()-o.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=H.current,F(H,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return bl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ev(e,t){switch(vl(t),t.tag){case 1:return we(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),$(ye),$(ue),Tl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return Hn(),null;case 10:return Sl(t.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var Pi=!1,le=!1,tv=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Na(e,t,n){try{n()}catch(r){G(e,t,r)}}var uc=!1;function nv(e,t){if(ha=eo,e=sf(),ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++d===r&&(l=s),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pa={focusedElem:e,selectionRange:n},eo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,M=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:ze(t.type,y),M);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){G(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=uc,uc=!1,w}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Na(t,n,o)}i=i.next}while(i!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rh(e){var t=e.alternate;t!==null&&(e.alternate=null,rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[$r],delete t[va],delete t[Fg],delete t[zg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ih(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Aa(e,t,n),e=e.sibling;e!==null;)Aa(e,t,n),e=e.sibling}function Da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}var re=null,je=!1;function gt(e,t,n){for(n=n.child;n!==null;)oh(e,t,n),n=n.sibling}function oh(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:le||Nn(n,t);case 6:var r=re,i=je;re=null,gt(e,t,n),re=r,je=i,re!==null&&(je?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(je?(e=re,n=n.stateNode,e.nodeType===8?_s(e.parentNode,n):e.nodeType===1&&_s(e,n),Ur(e)):_s(re,n.stateNode));break;case 4:r=re,i=je,re=n.stateNode.containerInfo,je=!0,gt(e,t,n),re=r,je=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Na(n,t,s),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!le&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,gt(e,t,n),le=r):gt(e,t,n);break;default:gt(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tv),t.forEach(function(r){var i=dv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,je=!1;break e;case 3:re=a.stateNode.containerInfo,je=!0;break e;case 4:re=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(re===null)throw Error(S(160));oh(o,s,i),re=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sh(t,e),t=t.sibling}function sh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),We(e),r&4){try{Tr(3,e,e.return),Fo(3,e)}catch(y){G(e,e.return,y)}try{Tr(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Fe(t,e),We(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Fe(t,e),We(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(y){G(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Td(i,o),ra(a,s);var u=ra(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?Od(i,h):d==="dangerouslySetInnerHTML"?xd(i,h):d==="children"?Ar(i,h):nl(i,d,h,u)}switch(a){case"input":Xs(i,o);break;case"textarea":Rd(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?An(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?An(i,!!o.multiple,o.defaultValue,!0):An(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(y){G(e,e.return,y)}}break;case 6:if(Fe(t,e),We(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(Fe(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Fe(t,e),We(e);break;case 13:Fe(t,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ml=q())),r&4&&dc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||d,Fe(t,e),le=u):Fe(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(h=I=d;I!==null;){switch(p=I,g=p.child,p.tag){case 0:case 11:case 14:case 15:Tr(4,p,p.return);break;case 1:Nn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:Nn(p,p.return);break;case 22:if(p.memoizedState!==null){hc(h);continue}}g!==null?(g.return=p,I=g):hc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nd("display",s))}catch(y){G(e,e.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){G(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fe(t,e),We(e),r&4&&dc(e);break;case 21:break;default:Fe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ih(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=cc(e);Da(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cc(e);Aa(e,a,s);break;default:throw Error(S(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rv(e,t,n){I=e,ah(e)}function ah(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Pi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=Pi;var u=le;if(Pi=s,(le=l)&&!u)for(I=i;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?pc(i):l!==null?(l.return=s,I=l):pc(i);for(;o!==null;)I=o,ah(o),o=o.sibling;I=i,Pi=a,le=u}fc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):fc(e)}}function fc(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ur(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||t.flags&512&&Oa(t)}catch(p){G(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function hc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function pc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(l){G(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){G(t,i,l)}}var o=t.return;try{Oa(t)}catch(l){G(t,o,l)}break;case 5:var s=t.return;try{Oa(t)}catch(l){G(t,s,l)}}}catch(l){G(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var iv=Math.ceil,mo=mt.ReactCurrentDispatcher,Dl=mt.ReactCurrentOwner,Oe=mt.ReactCurrentBatchConfig,L=0,ne=null,Y=null,ie=0,Se=0,On=Bt(0),Z=0,Gr=null,ln=0,zo=0,Ll=0,Rr=null,ge=null,Ml=0,Kn=1/0,tt=null,go=!1,La=null,Dt=null,xi=!1,Tt=null,vo=0,Pr=0,Ma=null,$i=-1,Bi=0;function he(){return L&6?q():$i!==-1?$i:$i=q()}function Lt(e){return e.mode&1?L&2&&ie!==0?ie&-ie:$g.transition!==null?(Bi===0&&(Bi=Vd()),Bi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Yd(e.type)),e):1}function Ve(e,t,n,r){if(50<Pr)throw Pr=0,Ma=null,Error(S(185));ti(e,n,r),(!(L&2)||e!==ne)&&(e===ne&&(!(L&2)&&(zo|=n),Z===4&&St(e,ie)),_e(e,r),n===1&&L===0&&!(t.mode&1)&&(Kn=q()+500,Mo&&Vt()))}function _e(e,t){var n=e.callbackNode;$m(e,t);var r=Zi(e,e===ne?ie:0);if(r===0)n!==null&&ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ku(n),t===1)e.tag===0?jg(mc.bind(null,e)):gf(mc.bind(null,e)),Ug(function(){!(L&6)&&Vt()}),n=null;else{switch(Hd(r)){case 1:n=al;break;case 4:n=$d;break;case 16:n=Xi;break;case 536870912:n=Bd;break;default:n=Xi}n=mh(n,lh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lh(e,t){if($i=-1,Bi=0,L&6)throw Error(S(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=Zi(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var i=L;L|=2;var o=ch();(ne!==e||ie!==t)&&(tt=null,Kn=q()+500,tn(e,t));do try{av();break}catch(a){uh(e,a)}while(1);_l(),mo.current=o,L=i,Y!==null?t=0:(ne=null,ie=0,t=Z)}if(t!==0){if(t===2&&(i=la(e),i!==0&&(r=i,t=Ua(e,i))),t===1)throw n=Gr,tn(e,0),St(e,r),_e(e,q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!ov(i)&&(t=yo(e,r),t===2&&(o=la(e),o!==0&&(r=o,t=Ua(e,o))),t===1))throw n=Gr,tn(e,0),St(e,r),_e(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Qt(e,ge,tt);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Ml+500-q(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ga(Qt.bind(null,e,ge,tt),t);break}Qt(e,ge,tt);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Be(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iv(r/1960))-r,10<r){e.timeoutHandle=ga(Qt.bind(null,e,ge,tt),r);break}Qt(e,ge,tt);break;case 5:Qt(e,ge,tt);break;default:throw Error(S(329))}}}return _e(e,q()),e.callbackNode===n?lh.bind(null,e):null}function Ua(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=yo(e,t),e!==2&&(t=ge,ge=n,t!==null&&ba(t)),e}function ba(e){ge===null?ge=e:ge.push.apply(ge,e)}function ov(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!He(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Ll,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if(L&6)throw Error(S(327));bn();var t=Zi(e,0);if(!(t&1))return _e(e,q()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=la(e);r!==0&&(t=r,n=Ua(e,r))}if(n===1)throw n=Gr,tn(e,0),St(e,t),_e(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,ge,tt),_e(e,q()),null}function Ul(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Kn=q()+500,Mo&&Vt())}}function un(e){Tt!==null&&Tt.tag===0&&!(L&6)&&bn();var t=L;L|=1;var n=Oe.transition,r=U;try{if(Oe.transition=null,U=1,e)return e()}finally{U=r,Oe.transition=n,L=t,!(L&6)&&Vt()}}function bl(){Se=On.current,$(On)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mg(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:Hn(),$(ye),$(ue),Tl();break;case 5:Cl(r);break;case 4:Hn();break;case 13:$(H);break;case 19:$(H);break;case 10:Sl(r.type._context);break;case 22:case 23:bl()}n=n.return}if(ne=e,Y=e=Mt(e.current,null),ie=Se=t,Z=0,Gr=null,Ll=zo=ln=0,ge=Rr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jt=null}return e}function uh(e,t){do{var n=Y;try{if(_l(),Fi.current=po,ho){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(an=0,te=X=W=null,Cr=!1,Hr=0,Dl.current=null,n===null||n.return===null){Z=1,Gr=t,Y=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=nc(s);if(g!==null){g.flags&=-257,rc(g,s,a,o,t),g.mode&1&&tc(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){tc(o,u,t),Fl();break e}l=Error(S(426))}}else if(V&&a.mode&1){var M=nc(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),rc(M,s,a,o,t),yl(Wn(l,a));break e}}o=l=Wn(l,a),Z!==4&&(Z=2),Rr===null?Rr=[o]:Rr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Kf(o,l,t);Qu(o,f);break e;case 1:a=l;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dt===null||!Dt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=Gf(o,a,t);Qu(o,_);break e}}o=o.return}while(o!==null)}fh(n)}catch(k){t=k,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function ch(){var e=mo.current;return mo.current=po,e===null?po:e}function Fl(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(ln&268435455)&&!(zo&268435455)||St(ne,ie)}function yo(e,t){var n=L;L|=2;var r=ch();(ne!==e||ie!==t)&&(tt=null,tn(e,t));do try{sv();break}catch(i){uh(e,i)}while(1);if(_l(),L=n,mo.current=r,Y!==null)throw Error(S(261));return ne=null,ie=0,Z}function sv(){for(;Y!==null;)dh(Y)}function av(){for(;Y!==null&&!Am();)dh(Y)}function dh(e){var t=ph(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?fh(e):Y=t,Dl.current=null}function fh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ev(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=Zg(n,t,Se),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Qt(e,t,n){var r=U,i=Oe.transition;try{Oe.transition=null,U=1,lv(e,t,n,r)}finally{Oe.transition=i,U=r}return null}function lv(e,t,n,r){do bn();while(Tt!==null);if(L&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Bm(e,o),e===ne&&(Y=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,mh(Xi,function(){return bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=U;U=1;var a=L;L|=4,Dl.current=null,nv(e,n),sh(n,e),Pg(pa),eo=!!ha,pa=ha=null,e.current=n,rv(n),Dm(),L=a,U=s,Oe.transition=o}else e.current=n;if(xi&&(xi=!1,Tt=e,vo=i),o=e.pendingLanes,o===0&&(Dt=null),Um(n.stateNode),_e(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=La,La=null,e;return vo&1&&e.tag!==0&&bn(),o=e.pendingLanes,o&1?e===Ma?Pr++:(Pr=0,Ma=e):Pr=0,Vt(),null}function bn(){if(Tt!==null){var e=Hd(vo),t=Oe.transition,n=U;try{if(Oe.transition=null,U=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,vo=0,L&6)throw Error(S(331));var i=L;for(L|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Tr(8,d,o)}var h=d.child;if(h!==null)h.return=d,I=h;else for(;I!==null;){d=I;var p=d.sibling,g=d.return;if(rh(d),d===u){I=null;break}if(p!==null){p.return=g,I=p;break}I=g}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var M=y.sibling;y.sibling=null,y=M}while(y!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){s=I;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,I=m;else e:for(s=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fo(9,a)}}catch(k){G(a,a.return,k)}if(a===s){I=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,I=_;break e}I=a.return}}if(L=i,Vt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{U=n,Oe.transition=t}}return!1}function gc(e,t,n){t=Wn(n,t),t=Kf(e,t,1),e=At(e,t,1),t=he(),e!==null&&(ti(e,1,t),_e(e,t))}function G(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Wn(n,e),e=Gf(t,e,1),t=At(t,e,1),e=he(),t!==null&&(ti(t,1,e),_e(t,e));break}}t=t.return}}function uv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(Z===4||Z===3&&(ie&130023424)===ie&&500>q()-Ml?tn(e,0):Ll|=n),_e(e,t)}function hh(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=he();e=dt(e,t),e!==null&&(ti(e,t,n),_e(e,n))}function cv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hh(e,n)}function dv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),hh(e,n)}var ph;ph=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Xg(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&vf(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=$n(t,ue.current);Un(t,n),i=Pl(null,t,r,e,i,n);var o=xl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kl(t),i.updater=Uo,t.stateNode=i,i._reactInternals=t,ka(t,r,e,n),t=Ta(null,t,r,!0,o,n)):(t.tag=0,V&&o&&gl(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hv(r),e=ze(r,e),i){case 0:t=Ca(null,t,r,e,n);break e;case 1:t=sc(null,t,r,e,n);break e;case 11:t=ic(null,t,r,e,n);break e;case 14:t=oc(null,t,r,ze(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Ca(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),sc(e,t,r,i,n);case 3:e:{if(Jf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sf(e,t),co(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(S(423)),t),t=ac(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(S(424)),t),t=ac(e,t,r,n,i);break e}else for(Ee=Ot(t.stateNode.containerInfo.firstChild),ke=t,V=!0,$e=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){t=ft(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Tf(t),e===null&&_a(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ma(r,i)?s=null:o!==null&&ma(r,o)&&(t.flags|=32),Yf(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&_a(t),null;case 13:return Xf(e,t,n);case 4:return Il(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),ic(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,F(lo,r._currentValue),r._currentValue=s,o!==null)if(He(o.value,s)){if(o.children===i.children&&!ye.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=lt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Sa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=De(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),oc(e,t,r,i,n);case 15:return Qf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),ji(e,t),t.tag=1,we(r)?(e=!0,oo(t)):e=!1,Un(t,n),kf(t,r,i),ka(t,r,i,n),Ta(null,t,r,!0,e,n);case 19:return Zf(e,t,n);case 22:return qf(e,t,n)}throw Error(S(156,t.tag))};function mh(e,t){return jd(e,t)}function fv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new fv(e,t,n,r)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hv(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===ol)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")zl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return nn(n.children,i,o,t);case rl:s=8,i|=8;break;case Gs:return e=Ne(12,n,t,i|2),e.elementType=Gs,e.lanes=o,e;case Qs:return e=Ne(13,n,t,i),e.elementType=Qs,e.lanes=o,e;case qs:return e=Ne(19,n,t,i),e.elementType=qs,e.lanes=o,e;case kd:return jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sd:s=10;break e;case Ed:s=9;break e;case il:s=11;break e;case ol:s=14;break e;case yt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function jo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=kd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ps(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function xs(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jl(e,t,n,r,i,o,s,a,l){return e=new pv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(o),e}function mv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gh(e){if(!e)return jt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(we(n))return mf(e,n,t)}return t}function vh(e,t,n,r,i,o,s,a,l){return e=jl(n,r,!0,e,i,o,s,a,l),e.context=gh(null),n=e.current,r=he(),i=Lt(n),o=lt(r,i),o.callback=t??null,At(n,o,i),e.current.lanes=i,ti(e,i,r),_e(e,r),e}function $o(e,t,n,r){var i=t.current,o=he(),s=Lt(i);return n=gh(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,s),e!==null&&(Ve(e,i,s,o),bi(e,i,s)),s}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function gv(){return null}var yh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}Bo.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));$o(e,t,null,null)};Bo.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){$o(null,e,null,null)}),t[ct]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&qd(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function vv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wo(s);o.call(u)}}var s=vh(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=s,e[ct]=s.current,zr(e.nodeType===8?e.parentNode:e),un(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wo(l);a.call(u)}}var l=jl(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=l,e[ct]=l.current,zr(e.nodeType===8?e.parentNode:e),un(function(){$o(t,l,n,r)}),l}function Ho(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=wo(s);a.call(l)}}$o(t,s,e,i)}else s=vv(n,t,e,i,r);return wo(s)}Wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(ll(t,n|1),_e(t,q()),!(L&6)&&(Kn=q()+500,Vt()))}break;case 13:un(function(){var r=dt(e,1);if(r!==null){var i=he();Ve(r,e,1,i)}}),$l(e,1)}};ul=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=he();Ve(t,e,134217728,n)}$l(e,134217728)}};Kd=function(e){if(e.tag===13){var t=Lt(e),n=dt(e,t);if(n!==null){var r=he();Ve(n,e,t,r)}$l(e,t)}};Gd=function(){return U};Qd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};oa=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lo(r);if(!i)throw Error(S(90));Cd(r),Xs(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};Ld=Ul;Md=un;var yv={usingClientEntryPoint:!1,Events:[ri,Cn,Lo,Ad,Dd,Ul]},hr={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wv={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fd(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{No=Ni.inject(wv),Qe=Ni}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(S(200));return mv(e,t,null,n)};Te.createRoot=function(e,t){if(!Vl(e))throw Error(S(299));var n=!1,r="",i=yh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=jl(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,zr(e.nodeType===8?e.parentNode:e),new Bl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Fd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return un(e)};Te.hydrate=function(e,t,n){if(!Vo(t))throw Error(S(200));return Ho(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Vl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=yh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vh(t,null,e,1,n??null,i,!1,o,s),e[ct]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};Te.render=function(e,t,n){if(!Vo(t))throw Error(S(200));return Ho(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(S(40));return e._reactRootContainer?(un(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Te.unstable_batchedUpdates=Ul;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ho(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Te})(gm);var wc=Hs;Vs.createRoot=wc.createRoot,Vs.hydrateRoot=wc.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_o.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const _c="popstate";function _v(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Fa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qr(i)}return kv(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sv(){return Math.random().toString(36).substr(2,8)}function Sc(e){return{usr:e.state,key:e.key}}function Fa(e,t,n,r){return n===void 0&&(n=null),_o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||Sv()})}function Qr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ev(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Qr(e);return J(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function kv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Rt.Pop,l=null;function u(){a=Rt.Pop,l&&l({action:a,location:p.location})}function d(g,w){a=Rt.Push;let y=Fa(p.location,g,w);n&&n(y,g);let M=Sc(y),f=p.createHref(y);try{s.pushState(M,"",f)}catch{i.location.assign(f)}o&&l&&l({action:a,location:p.location})}function h(g,w){a=Rt.Replace;let y=Fa(p.location,g,w);n&&n(y,g);let M=Sc(y),f=p.createHref(y);s.replaceState(M,"",f),o&&l&&l({action:a,location:p.location})}let p={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_c,u),l=g,()=>{i.removeEventListener(_c,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let w=Ev(typeof g=="string"?g:Qr(g));return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:h,go(g){return s.go(g)}};return p}var Ec;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ec||(Ec={}));function Iv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jn(t):t,i=Sh(r.pathname||"/",n);if(i==null)return null;let o=wh(e);Cv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Lv(o[a],bv(i));return s}function wh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ut([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Av(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of _h(o.path))i(o,s,l)}),t}function _h(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=_h(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Cv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Tv=/^:\w+$/,Rv=3,Pv=2,xv=1,Nv=10,Ov=-2,kc=e=>e==="*";function Av(e,t){let n=e.split("/"),r=n.length;return n.some(kc)&&(r+=Ov),t&&(r+=Pv),n.filter(i=>!kc(i)).reduce((i,o)=>i+(Tv.test(o)?Rv:o===""?xv:Nv),r)}function Dv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Lv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Mv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:Ut([i,d.pathname]),pathnameBase:$v(Ut([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Ut([i,d.pathnameBase]))}return o}function Mv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let p=a[h]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=Fv(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Uv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function bv(e){try{return decodeURI(e)}catch(t){return Hl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fv(e,t){try{return decodeURIComponent(e)}catch(n){return Hl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Sh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Hl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:jv(n,t):t,search:Bv(r),hash:Vv(i)}}function jv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ns(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=_o({},e),J(!i.pathname||!i.pathname.includes("?"),Ns("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Ns("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Ns("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?t[h]:"/"}let l=zv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),$v=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Hv{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wv(e){return e instanceof Hv}const Kv=["post","put","patch","delete"];[...Kv];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},za.apply(this,arguments)}function Gv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Qv=typeof Object.is=="function"?Object.is:Gv,{useState:qv,useEffect:Yv,useLayoutEffect:Jv,useDebugValue:Xv}=Bs;function Zv(e,t,n){const r=t(),[{inst:i},o]=qv({inst:{value:r,getSnapshot:t}});return Jv(()=>{i.value=r,i.getSnapshot=t,Os(i)&&o({inst:i})},[e,r,t]),Yv(()=>(Os(i)&&o({inst:i}),e(()=>{Os(i)&&o({inst:i})})),[e]),Xv(r),r}function Os(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Qv(n,r)}catch{return!0}}function ey(e,t,n){return t()}const ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ny=!ty,ry=ny?ey:Zv;"useSyncExternalStore"in Bs&&(e=>e.useSyncExternalStore)(Bs);const iy=E.createContext(null),oy=E.createContext(null),Wl=E.createContext(null),Wo=E.createContext(null),Ko=E.createContext(null),Ht=E.createContext({outlet:null,matches:[]}),Ih=E.createContext(null);function sy(e,t){let{relative:n}=t===void 0?{}:t;Xn()||J(!1);let{basename:r,navigator:i}=E.useContext(Wo),{hash:o,pathname:s,search:a}=Ch(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ut([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Xn(){return E.useContext(Ko)!=null}function Go(){return Xn()||J(!1),E.useContext(Ko).location}function oi(){Xn()||J(!1);let{basename:e,navigator:t}=E.useContext(Wo),{matches:n}=E.useContext(Ht),{pathname:r}=Go(),i=JSON.stringify(Eh(n).map(a=>a.pathnameBase)),o=E.useRef(!1);return E.useEffect(()=>{o.current=!0}),E.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=kh(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Ut([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const ay=E.createContext(null);function ly(e){let t=E.useContext(Ht).outlet;return t&&E.createElement(ay.Provider,{value:e},t)}function uy(){let{matches:e}=E.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function Ch(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(Ht),{pathname:i}=Go(),o=JSON.stringify(Eh(r).map(s=>s.pathnameBase));return E.useMemo(()=>kh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function cy(e,t){Xn()||J(!1);let{navigator:n}=E.useContext(Wo),r=E.useContext(Wl),{matches:i}=E.useContext(Ht),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Go(),u;if(t){var d;let y=typeof t=="string"?Jn(t):t;a==="/"||(d=y.pathname)!=null&&d.startsWith(a)||J(!1),u=y}else u=l;let h=u.pathname||"/",p=a==="/"?h:h.slice(a.length)||"/",g=Iv(e,{pathname:p}),w=py(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Ut([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Ut([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&w?E.createElement(Ko.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rt.Pop}},w):w}function dy(){let e=yy(),t=Wv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unhandled Thrown Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:o},"errorElement")," props on ",E.createElement("code",{style:o},"<Route>")))}class fy extends E.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Ht.Provider,{value:this.props.routeContext},E.createElement(Ih.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hy(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(iy);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),E.createElement(Ht.Provider,{value:t},r)}function py(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||J(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||E.createElement(dy,null):null,d=t.concat(r.slice(0,a+1)),h=()=>E.createElement(hy,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?E.createElement(fy,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:d}}):h()},null)}var Ic;(function(e){e.UseRevalidator="useRevalidator"})(Ic||(Ic={}));var So;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(So||(So={}));function my(e){let t=E.useContext(Wl);return t||J(!1),t}function gy(e){let t=E.useContext(Ht);return t||J(!1),t}function vy(e){let t=gy(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function yy(){var e;let t=E.useContext(Ih),n=my(So.UseRouteError),r=vy(So.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Th(e){let{to:t,replace:n,state:r,relative:i}=e;Xn()||J(!1);let o=E.useContext(Wl),s=oi();return E.useEffect(()=>{o&&o.navigation.state!=="idle"||s(t,{replace:n,state:r,relative:i})}),null}function Rh(e){return ly(e.context)}function de(e){J(!1)}function wy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rt.Pop,navigator:o,static:s=!1}=e;Xn()&&J(!1);let a=t.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Jn(r));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:g="default"}=r,w=E.useMemo(()=>{let y=Sh(u,a);return y==null?null:{pathname:y,search:d,hash:h,state:p,key:g}},[a,u,d,h,p,g]);return w==null?null:E.createElement(Wo.Provider,{value:l},E.createElement(Ko.Provider,{children:n,value:{location:w,navigationType:i}}))}function _y(e){let{children:t,location:n}=e,r=E.useContext(oy),i=r&&!t?r.router.routes:ja(t);return cy(i,n)}var Cc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Cc||(Cc={}));new Promise(()=>{});function ja(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){n.push.apply(n,ja(r.props.children,t));return}r.type!==de&&J(!1),!r.props.index||!r.props.children||J(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=ja(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$a.apply(this,arguments)}function Sy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ey(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ky(e,t){return e.button===0&&(!t||t==="_self")&&!Ey(e)}const Iy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Cy(e){let{basename:t,children:n,window:r}=e,i=E.useRef();i.current==null&&(i.current=_v({window:r,v5Compat:!0}));let o=i.current,[s,a]=E.useState({action:o.action,location:o.location});return E.useLayoutEffect(()=>o.listen(a),[o]),E.createElement(wy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const Gn=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,h=Sy(t,Iy),p=sy(u,{relative:i}),g=Ty(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function w(y){r&&r(y),y.defaultPrevented||g(y)}return E.createElement("a",$a({},h,{href:p,onClick:o?r:w,ref:n,target:l}))});var Tc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Tc||(Tc={}));var Rc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rc||(Rc={}));function Ty(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=oi(),l=Go(),u=Ch(e,{relative:s});return E.useCallback(d=>{if(ky(d,n)){d.preventDefault();let h=r!==void 0?r:Qr(l)===Qr(u);a(e,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}function Ry(){return v("div",{children:"NotFound"})}const Py=[{_id:"63af178832ac9da6ca33f025",title:"Boilcat",description:"hernandezdowns@boilcat.com",image:"https://robohash.org/user1"},{_id:"63af1788769c891efd4b3d79",title:"Xylar",description:"hernandezdowns@xylar.com",image:"https://robohash.org/user2"},{_id:"63af17883a7122dafed0161a",title:"Intrawear",description:"hernandezdowns@intrawear.com",image:"https://robohash.org/user3"},{_id:"63af1788b292e39b23bc6c69",title:"Neocent",description:"hernandezdowns@neocent.com",image:"https://robohash.org/user4"},{_id:"63af1788231b0363b008e231",title:"Medesign",description:"hernandezdowns@medesign.com",image:"https://robohash.org/user5"}],Qo=E.createContext();function xy(e){const[t,n]=E.useState([]);function r(o){n([...t,{title:o.title,_id:t.length,description:o.description,image:"https://robohash.org/user"+t.length+1}])}function i(o){n(t.filter(s=>s._id!==o))}return E.useEffect(()=>{n(Py)},[]),v(Qo.Provider,{value:{tasks:t,createTask:r,deleteTask:i},children:e.children})}function Ny(){const[e,t]=E.useState(""),[n,r]=E.useState(""),{createTask:i}=E.useContext(Qo);return v("div",{className:"max-w-md mx-auto",children:B("form",{className:"bg-slate-800 p-10 mb-4",onSubmit:s=>{s.preventDefault(),i({title:e,description:n}),t(""),r("")},children:[v("h1",{className:"text-2xl font-bold text-white mb-3",children:"Crea tu tarea"}),v("input",{placeholder:"Escribe tu tarea",onChange:s=>t(s.target.value),value:e,autoFocus:!0,className:"bg-slate-300 p-3 w-full mb-2"}),v("textarea",{placeholder:"escribe la descripcion de la tarea",onChange:s=>r(s.target.value),value:n,className:"bg-slate-300 p-3 w-full mb-2"}),v("button",{className:"bg-indigo-500 px-3 py-1 text-white",children:"Guardar"})]})})}function Oy({task:e}){const{deleteTask:t}=E.useContext(Qo);return B("div",{className:"bg-gray-800 text-white p-4 rounded-md",children:[v("img",{src:e.image,alt:e.title}),v("h1",{className:"text-xl font-bold capitalize",children:e.title}),v("p",{className:"text-gray-500 break-words",children:e.description}),v("button",{className:"bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400",onClick:()=>t(e._id),children:"Eliminar Tarea"})]})}function Ay(){const{tasks:e}=E.useContext(Qo);return e.length===0?v("h1",{className:"text-white text-4xl font-bold text-center",children:"no hay tareas aun"}):v("div",{className:"grid grid-cols-4 gap-2 p-4",children:e.map(t=>v(Oy,{task:t},t._id))})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ph=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Dy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(p=64)),r.push(n[d],n[h],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ph(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Dy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw Error();const p=o<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ly=function(e){const t=Ph(e);return xh.encodeByteArray(t,!0)},Nh=function(e){return Ly(e).replace(/\./g,"")},Oh=function(e){try{return xh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function My(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Ah(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Uy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Dh(){try{return typeof indexedDB=="object"}catch{return!1}}function Lh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Fy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jy=()=>zy().__FIREBASE_DEFAULTS__,$y=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},By=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Oh(e[1]);return t&&JSON.parse(t)},Kl=()=>{try{return jy()||$y()||By()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vy=e=>{var t,n;return(n=(t=Kl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Hy=()=>{var e;return(e=Kl())===null||e===void 0?void 0:e.config},Mh=e=>{var t;return(t=Kl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="FirebaseError";class et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ky,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Gy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new et(i,a,r)}}function Gy(e,t){return e.replace(Qy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Qy=/\{\$([^}]+)}/g;function qy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Pc(o)&&Pc(s)){if(!qr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function yr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function wr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Yy(e,t){const n=new Jy(e,t);return n.subscribe.bind(n)}class Jy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=As),i.error===void 0&&(i.error=As),i.complete===void 0&&(i.complete=As);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function As(){}/**
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
 */const Zy=1e3,e0=2,t0=4*60*60*1e3,n0=.5;function xc(e,t=Zy,n=e0){const r=t*Math.pow(n,e),i=Math.round(n0*r*(Math.random()-.5)*2);return Math.min(t0,r+i)}/**
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
 */function Ue(e){return e&&e._delegate?e._delegate:e}class Ze{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class r0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Wy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(o0(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i0(e){return e===qt?void 0:e}function o0(e){return e.instantiationMode==="EAGER"}/**
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
 */class s0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new r0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const a0={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},l0=b.INFO,u0={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},c0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=u0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gl{constructor(t){this.name=t,this._logLevel=l0,this._logHandler=c0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?a0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const d0=(e,t)=>t.some(n=>e instanceof n);let Nc,Oc;function f0(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h0(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uh=new WeakMap,Ba=new WeakMap,bh=new WeakMap,Ds=new WeakMap,Ql=new WeakMap;function p0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(bt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Uh.set(n,e)}).catch(()=>{}),Ql.set(t,e),t}function m0(e){if(Ba.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ba.set(e,t)}let Va={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ba.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function g0(e){Va=e(Va)}function v0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ls(this),t,...n);return bh.set(r,t.sort?t.sort():[t]),bt(r)}:h0().includes(e)?function(...t){return e.apply(Ls(this),t),bt(Uh.get(this))}:function(...t){return bt(e.apply(Ls(this),t))}}function y0(e){return typeof e=="function"?v0(e):(e instanceof IDBTransaction&&m0(e),d0(e,f0())?new Proxy(e,Va):e)}function bt(e){if(e instanceof IDBRequest)return p0(e);if(Ds.has(e))return Ds.get(e);const t=y0(e);return t!==e&&(Ds.set(e,t),Ql.set(t,e)),t}const Ls=e=>Ql.get(e);function Fh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=bt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(bt(s.result),l.oldVersion,l.newVersion,bt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const w0=["get","getKey","getAll","getAllKeys","count"],_0=["put","add","delete","clear"],Ms=new Map;function Ac(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ms.get(t))return Ms.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||w0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ms.set(t,o),o}g0(e=>({...e,get:(t,n,r)=>Ac(t,n)||e.get(t,n,r),has:(t,n)=>!!Ac(t,n)||e.has(t,n)}));/**
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
 */class S0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ha="@firebase/app",Dc="0.9.0";/**
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
 */const cn=new Gl("@firebase/app"),k0="@firebase/app-compat",I0="@firebase/analytics-compat",C0="@firebase/analytics",T0="@firebase/app-check-compat",R0="@firebase/app-check",P0="@firebase/auth",x0="@firebase/auth-compat",N0="@firebase/database",O0="@firebase/database-compat",A0="@firebase/functions",D0="@firebase/functions-compat",L0="@firebase/installations",M0="@firebase/installations-compat",U0="@firebase/messaging",b0="@firebase/messaging-compat",F0="@firebase/performance",z0="@firebase/performance-compat",j0="@firebase/remote-config",$0="@firebase/remote-config-compat",B0="@firebase/storage",V0="@firebase/storage-compat",H0="@firebase/firestore",W0="@firebase/firestore-compat",K0="firebase",G0="9.15.0";/**
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
 */const Wa="[DEFAULT]",Q0={[Ha]:"fire-core",[k0]:"fire-core-compat",[C0]:"fire-analytics",[I0]:"fire-analytics-compat",[R0]:"fire-app-check",[T0]:"fire-app-check-compat",[P0]:"fire-auth",[x0]:"fire-auth-compat",[N0]:"fire-rtdb",[O0]:"fire-rtdb-compat",[A0]:"fire-fn",[D0]:"fire-fn-compat",[L0]:"fire-iid",[M0]:"fire-iid-compat",[U0]:"fire-fcm",[b0]:"fire-fcm-compat",[F0]:"fire-perf",[z0]:"fire-perf-compat",[j0]:"fire-rc",[$0]:"fire-rc-compat",[B0]:"fire-gcs",[V0]:"fire-gcs-compat",[H0]:"fire-fst",[W0]:"fire-fst-compat","fire-js":"fire-js",[K0]:"fire-js-all"};/**
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
 */const Eo=new Map,Ka=new Map;function q0(e,t){try{e.container.addComponent(t)}catch(n){cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ht(e){const t=e.name;if(Ka.has(t))return cn.debug(`There were multiple attempts to register component ${t}.`),!1;Ka.set(t,e);for(const n of Eo.values())q0(n,e);return!0}function Zn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Y0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new vn("app","Firebase",Y0);/**
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
 */class J0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const qo=G0;function zh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Wa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Hy()),!n)throw Ft.create("no-options");const o=Eo.get(i);if(o){if(qr(n,o.options)&&qr(r,o.config))return o;throw Ft.create("duplicate-app",{appName:i})}const s=new s0(i);for(const l of Ka.values())s.addComponent(l);const a=new J0(n,r,s);return Eo.set(i,a),a}function jh(e=Wa){const t=Eo.get(e);if(!t&&e===Wa)return zh();if(!t)throw Ft.create("no-app",{appName:e});return t}function Ye(e,t,n){var r;let i=(r=Q0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}ht(new Ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const X0="firebase-heartbeat-database",Z0=1,Yr="firebase-heartbeat-store";let Us=null;function $h(){return Us||(Us=Fh(X0,Z0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yr)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Us}async function ew(e){try{return(await $h()).transaction(Yr).objectStore(Yr).get(Bh(e))}catch(t){if(t instanceof et)cn.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});cn.warn(n.message)}}}async function Lc(e,t){try{const r=(await $h()).transaction(Yr,"readwrite");return await r.objectStore(Yr).put(t,Bh(e)),r.done}catch(n){if(n instanceof et)cn.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function Bh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const tw=1024,nw=30*24*60*60*1e3;class rw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ow(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=nw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mc(),{heartbeatsToSend:n,unsentEntries:r}=iw(this._heartbeatsCache.heartbeats),i=Nh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mc(){return new Date().toISOString().substring(0,10)}function iw(e,t=tw){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Uc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ow{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dh()?Lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ew(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Uc(e){return Nh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function sw(e){ht(new Ze("platform-logger",t=>new S0(t),"PRIVATE")),ht(new Ze("heartbeat",t=>new rw(t),"PRIVATE")),Ye(Ha,Dc,e),Ye(Ha,Dc,"esm2017"),Ye("fire-js","")}sw("");function ql(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Vh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aw=Vh,Hh=new vn("auth","Firebase",Vh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Gl("@firebase/auth");function Hi(e,...t){bc.logLevel<=b.ERROR&&bc.error(`Auth (${qo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e,...t){throw Yl(e,...t)}function Je(e,...t){return Yl(e,...t)}function Wh(e,t,n){const r=Object.assign(Object.assign({},aw()),{[t]:n});return new vn("auth","Firebase",r).create(t,{appName:e.name})}function lw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Me(e,"argument-error"),Wh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Hh.create(e,...t)}function x(e,t,...n){if(!e)throw Yl(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Hi(t),new Error(t)}function pt(e,t){e||st(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function at(e){pt(e instanceof Function,"Expected a class definition");let t=Fc.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Fc.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(e,t){const n=Zn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(qr(o,t??{}))return i;Me(i,"already-initialized")}return n.initialize({options:t})}function cw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function dw(){return zc()==="http:"||zc()==="https:"}function zc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dw()||Ah()||"connection"in navigator)?navigator.onLine:!0}function hw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=My()||Uy()}get(){return fw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new ai(3e4,6e4);function er(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tr(e,t,n,r,i={}){return Gh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=si(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Kh.fetch()(Qh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Gh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},pw),t);try{const i=new gw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Oi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Oi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Oi(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wh(e,d,u);Me(e,d)}}catch(i){if(i instanceof et)throw i;Me(e,"network-request-failed")}}async function li(e,t,n,r,i={}){const o=await tr(e,t,n,r,i);return"mfaPendingCredential"in o&&Me(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Qh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Jl(e.config,i):`${e.config.apiScheme}://${i}`}class gw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),mw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(e,t){return tr(e,"POST","/v1/accounts:delete",t)}async function yw(e,t){return tr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ww(e,t=!1){const n=Ue(e),r=await n.getIdToken(t),i=Xl(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:xr(bs(i.auth_time)),issuedAtTime:xr(bs(i.iat)),expirationTime:xr(bs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function bs(e){return Number(e)*1e3}function Xl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oh(n);return i?JSON.parse(i):(Hi("Failed to decode base64 JWT payload"),null)}catch(i){return Hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _w(e){const t=Xl(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof et&&Sw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Sw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jr(e,yw(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Cw(o.providerUserInfo):[],a=Iw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new qh(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function kw(e){const t=Ue(e);await ko(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Iw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Cw(e){return e.map(t=>{var{providerId:n}=t,r=ql(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(e,t){const n=await Gh(e,{},async()=>{const r=si({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Qh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_w(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return x(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Tw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Xr;return r&&(x(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(x(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ql(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ew(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ww(this,t)}reload(){return kw(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Jr(this,vw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:_,isAnonymous:k,providerData:T,stsTokenManager:R}=n;x(m&&R,t,"internal-error");const P=Xr.fromJSON(this.name,R);x(typeof m=="string",t,"internal-error"),vt(h,t.name),vt(p,t.name),x(typeof _=="boolean",t,"internal-error"),x(typeof k=="boolean",t,"internal-error"),vt(g,t.name),vt(w,t.name),vt(y,t.name),vt(M,t.name),vt(f,t.name),vt(c,t.name);const z=new rn({uid:m,auth:t,email:p,emailVerified:_,displayName:h,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:y,stsTokenManager:P,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(z.providerData=T.map(A=>Object.assign({},A))),M&&(z._redirectEventId=M),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Xr;i.updateFromServerResponse(n);const o=new rn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ko(o),o}}/**
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
 */class Yh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Yh.type="NONE";const jc=Yh;/**
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
 */function Wi(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Wi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Wi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(at(jc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||at(jc);const s=Wi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=rn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tp(t))return"Blackberry";if(np(t))return"Webos";if(Zl(t))return"Safari";if((t.includes("chrome/")||Xh(t))&&!t.includes("edge/"))return"Chrome";if(ep(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jh(e=ce()){return/firefox\//i.test(e)}function Zl(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xh(e=ce()){return/crios\//i.test(e)}function Zh(e=ce()){return/iemobile/i.test(e)}function ep(e=ce()){return/android/i.test(e)}function tp(e=ce()){return/blackberry/i.test(e)}function np(e=ce()){return/webos/i.test(e)}function Yo(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Rw(e=ce()){var t;return Yo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pw(){return by()&&document.documentMode===10}function rp(e=ce()){return Yo(e)||ep(e)||np(e)||tp(e)||/windows phone/i.test(e)||Zh(e)}function xw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e,t=[]){let n;switch(e){case"Browser":n=$c(ce());break;case"Worker":n=`${$c(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qo}/${r}`}/**
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
 */class Nw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bc(this),this.idTokenSubscription=new Bc(this),this.beforeStateQueue=new Nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ko(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ue(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&at(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return x(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ip(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function nr(e){return Ue(e)}class Bc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yy(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Aw(e,t,n){const r=nr(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=op(t),{host:s,port:a}=Dw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Lw()}function op(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Dw(e){const t=op(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Vc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Vc(s)}}}function Vc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Lw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function Mw(e,t){return tr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(e,t){return li(e,"POST","/v1/accounts:signInWithPassword",er(e,t))}async function bw(e,t){return tr(e,"POST","/v1/accounts:sendOobCode",er(e,t))}async function Fw(e,t){return bw(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(e,t){return li(e,"POST","/v1/accounts:signInWithEmailLink",er(e,t))}async function jw(e,t){return li(e,"POST","/v1/accounts:signInWithEmailLink",er(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends eu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Zr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Zr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Uw(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zw(t,{email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Mw(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jw(t,{idToken:n,email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){return li(e,"POST","/v1/accounts:signInWithIdp",er(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="http://localhost";class dn extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ql(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new dn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:$w,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=si(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vw(e){const t=yr(wr(e)).link,n=t?yr(wr(t)).deep_link_id:null,r=yr(wr(e)).deep_link_id;return(r?yr(wr(r)).link:null)||r||n||t||e}class tu{constructor(t){var n,r,i,o,s,a;const l=yr(wr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Bw((i=l.mode)!==null&&i!==void 0?i:null);x(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Vw(t);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(t,n){return Zr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=tu.parseLink(n);return x(r,"argument-error"),Zr._fromEmailAndCode(t,r.code,r.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ui{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dn._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return rt.credentialFromTaggedObject(t)}static credentialFromError(t){return rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ui{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ui{constructor(){super("twitter.com")}static credential(t,n){return dn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(e,t){return li(e,"POST","/v1/accounts:signUp",er(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await rn._fromIdTokenResponse(t,r,i),s=Hc(r);return new fn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Hc(r);return new fn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Hc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends et{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Io(t,n,r,i)}}function sp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(e,o,t,r):o})}async function Ww(e,t,n=!1){const r=await Jr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fn._forOperation(e,"link",r)}/**
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
 */async function Kw(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Jr(e,sp(r,i,t,e),n);x(o.idToken,r,"internal-error");const s=Xl(o.idToken);x(s,r,"internal-error");const{sub:a}=s;return x(e.uid===a,r,"user-mismatch"),fn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(e,t,n=!1){const r="signIn",i=await sp(e,r,t),o=await fn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Gw(e,t){return ap(nr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e,t,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(e,t,n){const r=Ue(e),i={requestType:"PASSWORD_RESET",email:t};n&&Qw(r,i,n),await Fw(r,i)}async function Yw(e,t,n){const r=nr(e),i=await Hw(r,{returnSecureToken:!0,email:t,password:n}),o=await fn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Jw(e,t,n){return Gw(Ue(e),rr.credential(t,n))}function Xw(e,t,n,r){return Ue(e).onIdTokenChanged(t,n,r)}function Zw(e,t,n){return Ue(e).beforeAuthStateChanged(t,n)}function e1(e,t,n,r){return Ue(e).onAuthStateChanged(t,n,r)}function t1(e){return Ue(e).signOut()}const Co="__sak";/**
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
 */class lp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(){const e=ce();return Zl(e)||Yo(e)}const r1=1e3,i1=10;class up extends lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n1()&&xw(),this.fallbackToPolling=rp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Pw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,i1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},r1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}up.type="LOCAL";const o1=up;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}cp.type="SESSION";const dp=cp;/**
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
 */function s1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Jo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await s1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class a1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=ru("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function l1(e){Xe().location.href=e}/**
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
 */function fp(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function u1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function d1(){return fp()?self:null}/**
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
 */const hp="firebaseLocalStorageDb",f1=1,To="firebaseLocalStorage",pp="fbase_key";class ci{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(e,t){return e.transaction([To],t?"readwrite":"readonly").objectStore(To)}function h1(){const e=indexedDB.deleteDatabase(hp);return new ci(e).toPromise()}function Qa(){const e=indexedDB.open(hp,f1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(To,{keyPath:pp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(To)?t(r):(r.close(),await h1(),t(await Qa()))})})}async function Wc(e,t,n){const r=Xo(e,!0).put({[pp]:t,value:n});return new ci(r).toPromise()}async function p1(e,t){const n=Xo(e,!1).get(t),r=await new ci(n).toPromise();return r===void 0?null:r.value}function Kc(e,t){const n=Xo(e,!0).delete(t);return new ci(n).toPromise()}const m1=800,g1=3;class mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>g1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(d1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await u1(),!this.activeServiceWorker)return;this.sender=new a1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||c1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qa();return await Wc(t,Co,"1"),await Kc(t,Co),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>p1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Xo(i,!1).getAll();return new ci(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mp.type="LOCAL";const v1=mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function w1(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Je("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",y1().appendChild(r)})}function _1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ai(3e4,6e4);/**
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
 */function gp(e,t){return t?at(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class iu extends eu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function S1(e){return ap(e.auth,new iu(e),e.bypassAuthState)}function E1(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),Kw(n,new iu(e),e.bypassAuthState)}async function k1(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),Ww(n,new iu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return S1;case"linkViaPopup":case"linkViaRedirect":return k1;case"reauthViaPopup":case"reauthViaRedirect":return E1;default:Me(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=new ai(2e3,1e4);async function C1(e,t,n){const r=nr(e);lw(e,t,nu);const i=gp(r,n);return new Zt(r,"signInViaPopup",t,i).executeNotNull()}class Zt extends vp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,I1.get())};t()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="pendingRedirect",Ki=new Map;class R1 extends vp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ki.get(this.auth._key());if(!t){try{const r=await P1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ki.set(this.auth._key(),t)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P1(e,t){const n=O1(t),r=N1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function x1(e,t){Ki.set(e._key(),t)}function N1(e){return at(e._redirectPersistence)}function O1(e){return Wi(T1,e.config.apiKey,e.name)}async function A1(e,t,n=!1){const r=nr(e),i=gp(r,t),s=await new R1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=10*60*1e3;class L1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!M1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!yp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=D1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(t))}saveEventToCache(t){this.cachedEventUids.add(Gc(t)),this.lastProcessedEventTime=Date.now()}}function Gc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function yp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function M1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(e,t={}){return tr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F1=/^https?/;async function z1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await U1(e);for(const n of t)try{if(j1(n))return}catch{}Me(e,"unauthorized-domain")}function j1(e){const t=Ga(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!F1.test(n))return!1;if(b1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $1=new ai(3e4,6e4);function Qc(){const e=Xe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function B1(e){return new Promise((t,n)=>{var r,i,o;function s(){Qc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qc(),n(Je(e,"network-request-failed"))},timeout:$1.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Xe().gapi)===null||o===void 0)&&o.load)s();else{const a=_1("iframefcb");return Xe()[a]=()=>{gapi.load?s():n(Je(e,"network-request-failed"))},w1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Gi=null,t})}let Gi=null;function V1(e){return Gi=Gi||B1(e),Gi}/**
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
 */const H1=new ai(5e3,15e3),W1="__/auth/iframe",K1="emulator/auth/iframe",G1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q1(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jl(t,K1):`https://${e.config.authDomain}/${W1}`,r={apiKey:t.apiKey,appName:e.name,v:qo},i=Q1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${si(r).slice(1)}`}async function Y1(e){const t=await V1(e),n=Xe().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:q1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Je(e,"network-request-failed"),a=Xe().setTimeout(()=>{o(s)},H1.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const J1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X1=500,Z1=600,e_="_blank",t_="http://localhost";class qc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n_(e,t,n,r=X1,i=Z1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},J1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ce().toLowerCase();n&&(a=Xh(u)?e_:n),Jh(u)&&(t=t||t_,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(Rw(u)&&a!=="_self")return r_(t||"",a),new qc(null);const h=window.open(t||"",a,d);x(h,e,"popup-blocked");try{h.focus()}catch{}return new qc(h)}function r_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const i_="__/auth/handler",o_="emulator/auth/handler";function Yc(e,t,n,r,i,o){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qo,eventId:i};if(t instanceof nu){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",qy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ui){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${s_(e)}?${si(a).slice(1)}`}function s_({config:e}){return e.emulator?Jl(e,o_):`https://${e.authDomain}/${i_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="webStorageSupport";class a_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dp,this._completeRedirectFn=A1,this._overrideRedirectResult=x1}async _openPopup(t,n,r,i){var o;pt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Yc(t,n,r,Ga(),i);return n_(t,s,ru())}async _openRedirect(t,n,r,i){return await this._originValidation(t),l1(Yc(t,n,r,Ga(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(pt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Y1(t),r=new L1(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Fs,{type:Fs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Fs];s!==void 0&&n(!!s),Me(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return rp()||Zl()||Yo()}}const l_=a_;var Jc="@firebase/auth",Xc="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function d_(e){ht(new Ze("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{x(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),x(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ip(e)},d=new Ow(a,l,u);return cw(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ht(new Ze("auth-internal",t=>{const n=nr(t.getProvider("auth").getImmediate());return(r=>new u_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Jc,Xc,c_(e)),Ye(Jc,Xc,"esm2017")}/**
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
 */const f_=5*60,h_=Mh("authIdTokenMaxAge")||f_;let Zc=null;const p_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>h_)return;const i=n==null?void 0:n.token;Zc!==i&&(Zc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function m_(e=jh()){const t=Zn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=uw(e,{popupRedirectResolver:l_,persistence:[v1,o1,dp]}),r=Mh("authTokenSyncURL");if(r){const o=p_(r);Zw(n,o,()=>o(n.currentUser)),Xw(n,s=>o(s))}const i=Vy("auth");return i&&Aw(n,`http://${i}`),n}d_("Browser");var g_="firebase",v_="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(g_,v_,"app");const wp="@firebase/installations",ou="0.6.0";/**
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
 */const _p=1e4,Sp=`w:${ou}`,Ep="FIS_v2",y_="https://firebaseinstallations.googleapis.com/v1",w_=60*60*1e3,__="installations",S_="Installations";/**
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
 */const E_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},hn=new vn(__,S_,E_);function kp(e){return e instanceof et&&e.code.includes("request-failed")}/**
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
 */function Ip({projectId:e}){return`${y_}/projects/${e}/installations`}function Cp(e){return{token:e.token,requestStatus:2,expiresIn:I_(e.expiresIn),creationTime:Date.now()}}async function Tp(e,t){const r=(await t.json()).error;return hn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Rp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function k_(e,{refreshToken:t}){const n=Rp(e);return n.append("Authorization",C_(t)),n}async function Pp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function I_(e){return Number(e.replace("s","000"))}function C_(e){return`${Ep} ${e}`}/**
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
 */async function T_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ip(e),i=Rp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Ep,appId:e.appId,sdkVersion:Sp},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Pp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Cp(u.authToken)}}else throw await Tp("Create Installation",l)}/**
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
 */function xp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function R_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const P_=/^[cdef][\w-]{21}$/,qa="";function x_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=N_(e);return P_.test(n)?n:qa}catch{return qa}}function N_(e){return R_(e).substr(0,22)}/**
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
 */function Zo(e){return`${e.appName}!${e.appId}`}/**
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
 */const Np=new Map;function Op(e,t){const n=Zo(e);Ap(n,t),O_(n,t)}function Ap(e,t){const n=Np.get(e);if(n)for(const r of n)r(t)}function O_(e,t){const n=A_();n&&n.postMessage({key:e,fid:t}),D_()}let en=null;function A_(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=e=>{Ap(e.data.key,e.data.fid)}),en}function D_(){Np.size===0&&en&&(en.close(),en=null)}/**
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
 */const L_="firebase-installations-database",M_=1,pn="firebase-installations-store";let zs=null;function su(){return zs||(zs=Fh(L_,M_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pn)}}})),zs}async function Ro(e,t){const n=Zo(e),i=(await su()).transaction(pn,"readwrite"),o=i.objectStore(pn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Op(e,t.fid),t}async function Dp(e){const t=Zo(e),r=(await su()).transaction(pn,"readwrite");await r.objectStore(pn).delete(t),await r.done}async function es(e,t){const n=Zo(e),i=(await su()).transaction(pn,"readwrite"),o=i.objectStore(pn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Op(e,a.fid),a}/**
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
 */async function au(e){let t;const n=await es(e.appConfig,r=>{const i=U_(r),o=b_(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===qa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function U_(e){const t=e||{fid:x_(),registrationStatus:0};return Lp(t)}function b_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=F_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:z_(e)}:{installationEntry:t}}async function F_(e,t){try{const n=await T_(e,t);return Ro(e.appConfig,n)}catch(n){throw kp(n)&&n.customData.serverCode===409?await Dp(e.appConfig):await Ro(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function z_(e){let t=await ed(e.appConfig);for(;t.registrationStatus===1;)await xp(100),t=await ed(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await au(e);return r||n}return t}function ed(e){return es(e,t=>{if(!t)throw hn.create("installation-not-found");return Lp(t)})}function Lp(e){return j_(e)?{fid:e.fid,registrationStatus:0}:e}function j_(e){return e.registrationStatus===1&&e.registrationTime+_p<Date.now()}/**
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
 */async function $_({appConfig:e,heartbeatServiceProvider:t},n){const r=B_(e,n),i=k_(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Sp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Pp(()=>fetch(r,a));if(l.ok){const u=await l.json();return Cp(u)}else throw await Tp("Generate Auth Token",l)}function B_(e,{fid:t}){return`${Ip(e)}/${t}/authTokens:generate`}/**
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
 */async function lu(e,t=!1){let n;const r=await es(e.appConfig,o=>{if(!Mp(o))throw hn.create("not-registered");const s=o.authToken;if(!t&&W_(s))return o;if(s.requestStatus===1)return n=V_(e,t),o;{if(!navigator.onLine)throw hn.create("app-offline");const a=G_(o);return n=H_(e,a),a}});return n?await n:r.authToken}async function V_(e,t){let n=await td(e.appConfig);for(;n.authToken.requestStatus===1;)await xp(100),n=await td(e.appConfig);const r=n.authToken;return r.requestStatus===0?lu(e,t):r}function td(e){return es(e,t=>{if(!Mp(t))throw hn.create("not-registered");const n=t.authToken;return Q_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function H_(e,t){try{const n=await $_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ro(e.appConfig,r),n}catch(n){if(kp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ro(e.appConfig,r)}throw n}}function Mp(e){return e!==void 0&&e.registrationStatus===2}function W_(e){return e.requestStatus===2&&!K_(e)}function K_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+w_}function G_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Q_(e){return e.requestStatus===1&&e.requestTime+_p<Date.now()}/**
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
 */async function q_(e){const t=e,{installationEntry:n,registrationPromise:r}=await au(t);return r?r.catch(console.error):lu(t).catch(console.error),n.fid}/**
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
 */async function Y_(e,t=!1){const n=e;return await J_(n),(await lu(n,t)).token}async function J_(e){const{registrationPromise:t}=await au(e);t&&await t}/**
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
 */function X_(e){if(!e||!e.options)throw js("App Configuration");if(!e.name)throw js("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw js(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function js(e){return hn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="installations",Z_="installations-internal",eS=e=>{const t=e.getProvider("app").getImmediate(),n=X_(t),r=Zn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tS=e=>{const t=e.getProvider("app").getImmediate(),n=Zn(t,Up).getImmediate();return{getId:()=>q_(n),getToken:i=>Y_(n,i)}};function nS(){ht(new Ze(Up,eS,"PUBLIC")),ht(new Ze(Z_,tS,"PRIVATE"))}nS();Ye(wp,ou);Ye(wp,ou,"esm2017");/**
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
 */const Po="analytics",rS="firebase_id",iS="origin",oS=60*1e3,sS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new Gl("@firebase/analytics");/**
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
 */function Fp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function aS(e,t){const n=document.createElement("script");n.src=`${bp}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function lS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function uS(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Fp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ie.error(a)}e("config",i,o)}async function cS(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Fp(n);for(const l of s){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ie.error(o)}}function dS(e,t,n,r){async function i(o,s,a){try{o==="event"?await cS(e,t,n,s,a):o==="config"?await uS(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ie.error(l)}}return i}function fS(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=dS(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function hS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(bp)&&n.src.includes(e))return n;return null}/**
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
 */const pS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ae=new vn("analytics","Analytics",pS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=30,gS=1e3;class vS{constructor(t={},n=gS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zp=new vS;function yS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:yS(r)},o=sS.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function _S(e,t=zp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ae.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ae.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new kS;return setTimeout(async()=>{a.abort()},n!==void 0?n:oS),jp({appId:r,apiKey:i,measurementId:o},s,a,t)}async function jp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=zp){var o;const{appId:s,measurementId:a}=e;try{await SS(r,t)}catch(l){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await wS(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!ES(u)){if(i.deleteThrottleMetadata(s),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?xc(n,i.intervalMillis,mS):xc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),Ie.debug(`Calling attemptFetch again in ${d} millis`),jp(e,h,r,i)}}function SS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ES(e){if(!(e instanceof et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class kS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function IS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(){if(Dh())try{await Lh()}catch(e){return Ie.warn(Ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TS(e,t,n,r,i,o,s){var a;const l=_S(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ie.error(g)),t.push(l);const u=CS().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([l,u]);hS(o)||aS(o,d.measurementId),i("js",new Date);const p=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return p[iS]="firebase",p.update=!0,h!=null&&(p[rS]=h),i("config",d.measurementId,p),d.measurementId}/**
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
 */class RS{constructor(t){this.app=t}_delete(){return delete Nr[this.app.options.appId],Promise.resolve()}}let Nr={},nd=[];const rd={};let $s="dataLayer",PS="gtag",id,$p,od=!1;function xS(){const e=[];if(Ah()&&e.push("This is a browser extension environment."),Fy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ae.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function NS(e,t,n){xS();const r=e.options.appId;if(!r)throw Ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(Nr[r]!=null)throw Ae.create("already-exists",{id:r});if(!od){lS($s);const{wrappedGtag:o,gtagCore:s}=fS(Nr,nd,rd,$s,PS);$p=o,id=s,od=!0}return Nr[r]=TS(e,nd,rd,t,id,$s,n),new RS(e)}function OS(e=jh()){e=Ue(e);const t=Zn(e,Po);return t.isInitialized()?t.getImmediate():AS(e)}function AS(e,t={}){const n=Zn(e,Po);if(n.isInitialized()){const i=n.getImmediate();if(qr(t,n.getOptions()))return i;throw Ae.create("already-initialized")}return n.initialize({options:t})}function DS(e,t,n,r){e=Ue(e),IS($p,Nr[e.app.options.appId],t,n,r).catch(i=>Ie.error(i))}const sd="@firebase/analytics",ad="0.9.0";function LS(){ht(new Ze(Po,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return NS(r,i,n)},"PUBLIC")),ht(new Ze("analytics-internal",e,"PRIVATE")),Ye(sd,ad),Ye(sd,ad,"esm2017");function e(t){try{const n=t.getProvider(Po).getImmediate();return{logEvent:(r,i,o)=>DS(n,r,i,o)}}catch(n){throw Ae.create("interop-component-reg-failed",{reason:n})}}}LS();const MS={apiKey:"AIzaSyB3yax05_NE2aoImV9OfrAOj_f_ZJzL92A",authDomain:"react-fb-auth-dc4a0.firebaseapp.com",projectId:"react-fb-auth-dc4a0",storageBucket:"react-fb-auth-dc4a0.appspot.com",messagingSenderId:"522032381569",appId:"1:522032381569:web:2ad24b106cd4045e7f5780",measurementId:"G-SSQ6P15GFS"},Bp=zh(MS),wn=m_(Bp);OS(Bp);const Vp=E.createContext(),di=()=>E.useContext(Vp);function US({children:e}){const[t,n]=E.useState(null),[r,i]=E.useState(!0),o=(d,h)=>Yw(wn,d,h),s=(d,h)=>Jw(wn,d,h),a=()=>t1(wn),l=()=>{const d=new rt;return C1(wn,d)},u=d=>{qw(wn,d)};return E.useEffect(()=>{e1(wn,d=>{n(d),i(!1)})},[]),v(Vp.Provider,{value:{signup:o,login:s,user:t,logout:a,loading:r,loginWithGoogle:l,resetPassword:u},children:e})}function bS(){const{user:e,logout:t,loading:n}=di(),r=async()=>{await t()};return n?v("h1",{children:"loading..."}):B("div",{children:[v("h1",{children:e.email}),v("button",{onClick:r,children:"Logout"}),v(Ny,{})]})}function FS(){return v("div",{children:"About"})}function zS(){return v("div",{children:v(Ay,{})})}function jS(){const{id:e}=uy();return B("div",{children:["User ",v("h1",{children:e})]})}function $S(){const e=oi();return B("div",{children:[v("button",{onClick:()=>{e("/")},children:"go to landing"}),v("br",{}),v(Gn,{to:"welcome",children:"say welcome"}),v("br",{}),v(Gn,{to:"goodbye",children:"say goodbye"}),v("br",{}),v(Rh,{})]})}const BS=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=di();return r?v("h1",{children:"loading..."}):n?e||v(Rh,{}):v(Th,{to:t})};function uu({message:e}){return v("div",{children:B("span",{className:"inline-flex text-sm text-red-700 duration-1 ease-in-out",children:[e,v("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})]})})}const ld=()=>{const[e,t]=E.useState({email:"",password:""}),[n,r]=E.useState(null),{login:i,loginWithGoogle:o,resetPassword:s}=di(),a=oi(),l=({target:{name:h,value:p}})=>{t({...e,[h]:p})};return v("div",{children:v("div",{className:"relative flex flex-col justify-center min-h-screen overflow-hidden",children:B("div",{className:"w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl",children:[v("h1",{className:"text-3xl font-semibold text-center text-purple-700 uppercase",children:"Sign in"}),B("form",{className:"mt-6",onSubmit:async h=>{h.preventDefault(),r("");try{await i(e.email,e.password),a("/home")}catch(p){r(p.message)}},children:[n&&v(uu,{message:n}),B("div",{className:"mb-2",children:[v("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-800",children:"Email"}),v("input",{type:"email",className:"block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40",name:"email",onChange:l})]}),B("div",{className:"mb-2",children:[v("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-800",children:"Password"}),v("input",{type:"password",className:"block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40",name:"password",onChange:l})]}),v(Gn,{className:"text-xs text-purple-600 hover:underline",to:"/resetPassword",children:"Forget Password?"}),v("div",{className:"mt-6",children:v("button",{className:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600",children:"Login"})})]}),v("div",{className:"relative flex items-center justify-center w-full mt-6 border border-t",children:v("div",{className:"absolute px-5 bg-white",children:"Or"})}),v("div",{className:"flex mt-4 gap-x-2",children:B("button",{type:"button",className:"flex items-left justify-left w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600",onClick:async()=>{try{await o(),a("/home")}catch(h){console.error(h.message)}},children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"presentation","data-v-e9db3ad8":"",className:"w-5 h-5 fill-current",children:B("g",{fill:"","data-v-e9db3ad8":"",children:[v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.6 10.2273C19.6 9.51825 19.5364 8.83643 19.4182 8.18188H10V12.0501H15.3818C15.15 13.3001 14.4455 14.3592 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2728 19.6 10.2273Z",fill:"#4285F4"}),v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99984 19.9999C12.6998 19.9999 14.9635 19.1044 16.618 17.5772L13.3862 15.0681C12.4907 15.6681 11.3453 16.0226 9.99984 16.0226C7.39529 16.0226 5.19075 14.2635 4.40439 11.8999H1.06348V14.4908C2.70893 17.759 6.09075 19.9999 9.99984 19.9999Z",fill:"#34A853"}),v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994V5.50903H1.06364C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z",fill:"#FBBC05"}),v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99984 3.97727C11.468 3.97727 12.7862 4.48182 13.8226 5.47273L16.6907 2.60455C14.9589 0.990909 12.6953 0 9.99984 0C6.09075 0 2.70893 2.24091 1.06348 5.50909L4.40439 8.1C5.19075 5.73636 7.39529 3.97727 9.99984 3.97727Z",fill:"#EA4335"})]})}),v("span",{className:"ml-40",children:"Continue with google"})]})}),B("p",{className:"mt-8 text-xs font-light text-center text-gray-700",children:[" ","Don't have an account?"," ",v(Gn,{className:"font-medium text-purple-600 hover:underline",to:"/register",children:"Sign Up"})]})]})})})},VS=()=>{const[e,t]=E.useState({email:"",password:""}),[n,r]=E.useState(),{signup:i}=di(),o=oi(),s=({target:{name:l,value:u}})=>{t({...e,[l]:u})};return B("div",{children:[n&&v(uu,{message:n}),v("div",{className:"relative flex flex-col justify-center min-h-screen overflow-hidden",children:B("div",{className:"w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl",children:[v("h1",{className:"text-3xl font-semibold text-center text-purple-700 uppercase",children:"Sign in"}),B("form",{className:"mt-6",onSubmit:async l=>{l.preventDefault(),r("");try{await i(e.email,e.password),o("/home")}catch(u){r(u.message)}},children:[B("div",{className:"mb-2",children:[v("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-800",children:"Email"}),v("input",{type:"email",className:"block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40",name:"email",onChange:s})]}),B("div",{className:"mb-2",children:[v("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-800",children:"Password"}),v("input",{type:"password",className:"block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40",name:"password",onChange:s})]}),v("a",{href:"#",className:"text-xs text-purple-600 hover:underline",children:v(Gn,{to:"/login",children:"Back to login"})}),v("div",{className:"mt-6",children:v("button",{className:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600",children:"Register"})})]})]})})]})},HS=()=>{const[e,t]=E.useState({email:"",password:""}),[n,r]=E.useState(null),{resetPassword:i}=di();return v("div",{children:v("div",{className:"relative flex flex-col justify-center min-h-screen overflow-hidden",children:B("div",{className:"w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl",children:[v("h1",{className:"text-3xl font-semibold text-center text-purple-700 uppercase",children:"Reset Password"}),B("form",{className:"mt-6",onSubmit:async a=>{a.preventDefault(),r("");try{await i(e.email),r("enviamos un enlace para recuperar la clave")}catch(l){r(l.message),console.error(l)}},children:[n&&v(uu,{message:n}),B("div",{className:"mb-2",children:[v("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-800",children:"Email"}),v("input",{type:"email",className:"block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40",name:"email",onChange:({target:{name:a,value:l}})=>{t({...e,[a]:l})}})]}),v(Gn,{className:"text-xs text-purple-600 hover:underline",to:"/login",children:"Back to login"}),v("div",{className:"mt-6",children:v("button",{className:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600",children:"Send"})})]})]})})})};function WS(){return v("main",{className:"min-h-screen bg-gradient-to-b from-gray-200 to-gray-500",children:v("div",{className:"container mx-auto",children:v(Cy,{basename:"/react-tasks-app/",children:B(_y,{children:[v(de,{index:!0,path:"/",element:v(ld,{})}),v(de,{path:"/login",element:v(ld,{})}),v(de,{path:"/register",element:v(VS,{})}),v(de,{path:"/resetPassword",element:v(HS,{})}),B(de,{element:v(BS,{}),children:[v(de,{path:"/home",element:v(bS,{})}),B(de,{path:"/dashboard/*",element:v($S,{}),children:[v(de,{path:"welcome",element:v("p",{children:"welcome"})}),v(de,{path:"goodbye",element:v("p",{children:"goodbye"})})]}),v(de,{path:"/about",element:v(FS,{})}),v(de,{path:"/users",element:v(zS,{})}),v(de,{path:"/usuarios",element:v(Th,{to:"/users"})}),v(de,{path:"/users/:id",element:v(jS,{})})]}),v(de,{path:"/*",element:v(Ry,{})})]})})})})}Vs.createRoot(document.getElementById("root")).render(v(gd.StrictMode,{children:v(US,{children:v(xy,{children:v(WS,{})})})}));
