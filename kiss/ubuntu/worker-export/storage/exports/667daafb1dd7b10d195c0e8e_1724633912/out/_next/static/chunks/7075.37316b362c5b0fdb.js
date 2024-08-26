"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7075],{47419:function(e,t,l){var o=l(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElement=function(e,t){return replaceElement(e,e,t)},t.isFragment=function(e){return e&&u.default.isValidElement(e)&&e.type===u.default.Fragment},t.replaceElement=void 0;var u=o(l(67294));let replaceElement=(e,t,l)=>u.default.isValidElement(e)?u.default.cloneElement(e,"function"==typeof l?l(e.props||{}):l):t;t.replaceElement=replaceElement},65693:function(e,t,l){var o=l(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(l(67294)),i=o(l(3236));t.default=e=>{let t=u.default.useContext(i.default),l=u.default.useMemo(()=>e?"string"==typeof e?null!=e?e:t:e instanceof Function?e(t):t:t,[e,t]);return l}},46549:function(e,t,l){var o=l(64836).default,u=l(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useCompactItemContext=t.default=t.SpaceCompactItemContext=t.NoCompactStyle=void 0;var i=u(l(67294)),c=o(l(93967)),s=o(l(45598)),f=l(31929),p=o(l(65693)),d=o(l(54277)),__rest=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(l[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var u=0,o=Object.getOwnPropertySymbols(e);u<o.length;u++)0>t.indexOf(o[u])&&Object.prototype.propertyIsEnumerable.call(e,o[u])&&(l[o[u]]=e[o[u]]);return l};let m=t.SpaceCompactItemContext=i.createContext(null);t.useCompactItemContext=(e,t)=>{let l=i.useContext(m),o=i.useMemo(()=>{if(!l)return"";let{compactDirection:o,isFirstItem:u,isLastItem:i}=l,s="vertical"===o?"-vertical-":"-";return(0,c.default)(`${e}-compact${s}item`,{[`${e}-compact${s}first-item`]:u,[`${e}-compact${s}last-item`]:i,[`${e}-compact${s}item-rtl`]:"rtl"===t})},[e,t,l]);return{compactSize:null==l?void 0:l.compactSize,compactDirection:null==l?void 0:l.compactDirection,compactItemClassnames:o}},t.NoCompactStyle=e=>{let{children:t}=e;return i.createElement(m.Provider,{value:null},t)};let CompactItem=e=>{var{children:t}=e,l=__rest(e,["children"]);return i.createElement(m.Provider,{value:l},t)};t.default=e=>{let{getPrefixCls:t,direction:l}=i.useContext(f.ConfigContext),{size:o,direction:u,block:v,prefixCls:S,className:y,rootClassName:g,children:b}=e,$=__rest(e,["size","direction","block","prefixCls","className","rootClassName","children"]),E=(0,p.default)(e=>null!=o?o:e),h=t("space-compact",S),[C,x]=(0,d.default)(h),O=(0,c.default)(h,x,{[`${h}-rtl`]:"rtl"===l,[`${h}-block`]:v,[`${h}-vertical`]:"vertical"===u},y,g),j=i.useContext(m),_=(0,s.default)(b),I=i.useMemo(()=>_.map((e,t)=>{let l=e&&e.key||`${h}-item-${t}`;return i.createElement(CompactItem,{key:l,compactSize:E,compactDirection:u,isFirstItem:0===t&&(!j||(null==j?void 0:j.isFirstItem)),isLastItem:t===_.length-1&&(!j||(null==j?void 0:j.isLastItem))},e)}),[o,_,j]);return 0===_.length?null:C(i.createElement("div",Object.assign({className:O},$),I))}},35969:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=e=>{let{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}}},54277:function(e,t,l){var o=l(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var u=l(3184),i=o(l(35969));let genSpaceStyle=e=>{let{componentCls:t,antCls:l}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"},[`${t}-item > ${l}-badge-not-a-wrapper:only-child`]:{display:"block"}}}},genSpaceGapStyle=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}};t.prepareComponentToken=()=>({}),t.default=(0,u.genStyleHooks)("Space",e=>{let t=(0,u.mergeToken)(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[genSpaceStyle(t),genSpaceGapStyle(t),(0,i.default)(t)]},()=>({}),{resetStyle:!1})},78793:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.genCompactItemStyle=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0},{componentCls:l}=e,o=`${l}-compact`;return{[o]:Object.assign(Object.assign({},function(e,t,l){let{focusElCls:o,focus:u,borderElCls:i}=l,c=i?"> *":"",s=["hover",u?"focus":null,"active"].filter(Boolean).map(e=>`&:${e} ${c}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[s]:{zIndex:2}},o?{[`&${o}`]:{zIndex:2}}:{}),{[`&[disabled] ${c}`]:{zIndex:0}})}}(e,o,t)),function(e,t,l){let{borderElCls:o}=l,u=o?`> ${o}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${u}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${u}, &${e}-sm ${u}, &${e}-lg ${u}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${u}, &${e}-sm ${u}, &${e}-lg ${u}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}(l,o,t))}}},45598:function(e,t,l){var o=l(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function toArray(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=[];return u.default.Children.forEach(e,function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?l=l.concat(toArray(e)):(0,i.isFragment)(e)&&e.props?l=l.concat(toArray(e.props.children,t)):l.push(e))}),l};var u=o(l(67294)),i=l(11805)},18475:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var l=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(e){delete l[e]}),l}},75531:function(e,t,l){var o=l(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useComposeRef=t.supportRef=t.supportNodeRef=t.getNodeRef=t.fillRef=t.composeRef=void 0;var u=o(l(18698)),i=l(67294),c=l(11805),s=o(l(67265)),f=t.fillRef=function(e,t){"function"==typeof e?e(t):"object"===(0,u.default)(e)&&e&&"current"in e&&(e.current=t)},p=t.composeRef=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var o=t.filter(Boolean);return o.length<=1?o[0]:function(e){t.forEach(function(t){f(t,e)})}};t.useComposeRef=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,s.default)(function(){return p.apply(void 0,t)},t,function(e,t){return e.length!==t.length||e.every(function(e,l){return e!==t[l]})})};var d=t.supportRef=function(e){var t,l,o=(0,c.isMemo)(e)?e.type.type:e.type;return("function"!=typeof o||null!==(t=o.prototype)&&void 0!==t&&!!t.render||o.$$typeof===c.ForwardRef)&&("function"!=typeof e||null!==(l=e.prototype)&&void 0!==l&&!!l.render||e.$$typeof===c.ForwardRef)};function isReactElement(e){return(0,i.isValidElement)(e)&&!(0,c.isFragment)(e)}t.supportNodeRef=function(e){return isReactElement(e)&&d(e)},t.getNodeRef=Number(i.version.split(".")[0])>=19?function(e){return isReactElement(e)?e.props.ref:null}:function(e){return isReactElement(e)?e.ref:null}},39755:function(e,t,l){l.d(t,{r:function(){return n}});var o=l(67294);let createStoreImpl=e=>{let t;let l=new Set,setState=(e,o)=>{let u="function"==typeof e?e(t):e;if(u!==t){let e=t;t=o?u:Object.assign({},t,u),l.forEach(l=>l(t,e))}},getState=()=>t,o={setState,getState,subscribe:e=>(l.add(e),()=>l.delete(e)),destroy:()=>l.clear()};return t=e(setState,getState,o),o},createStore=e=>e?createStoreImpl(e):createStoreImpl;var u=l(52798);let{useSyncExternalStoreWithSelector:i}=u,createImpl=e=>{let t="function"==typeof e?createStore(e):e,useBoundStore=(e,l)=>(function(e,t=e.getState,l){let u=i(e.subscribe,e.getState,e.getServerState||e.getState,t,l);return(0,o.useDebugValue)(u),u})(t,e,l);return Object.assign(useBoundStore,t),useBoundStore};var create$1=e=>e?createImpl(e):createImpl;let n=e=>{let t=create$1(()=>e),l=(Object.keys(e),(e,l)=>{t.setState(t=>{var o;return{[e]:(o=t[e],"function"==typeof l?l(o):l)}})});return{useGlobalState:e=>{let u=(0,o.useCallback)(t=>t[e],[e]);return[t(u),(0,o.useCallback)(t=>l(e,t),[e])]},getGlobalState:e=>t.getState()[e],setGlobalState:l,subscribe:(e,l)=>{t.subscribe((t,o)=>{t[e]!==o[e]&&l(t[e])})}}}},53250:function(e,t,l){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=l(67294),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useState,c=o.useEffect,s=o.useLayoutEffect,f=o.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!u(e,l)}catch(e){return!0}}var p="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var l=t(),o=i({inst:{value:l,getSnapshot:t}}),u=o[0].inst,p=o[1];return s(function(){u.value=l,u.getSnapshot=t,r(u)&&p({inst:u})},[e,l,t]),c(function(){return r(u)&&p({inst:u}),e(function(){r(u)&&p({inst:u})})},[e]),f(l),l};t.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:p},50139:function(e,t,l){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=l(67294),u=l(61688),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=u.useSyncExternalStore,s=o.useRef,f=o.useEffect,p=o.useMemo,d=o.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,l,o,u){var m=s(null);if(null===m.current){var v={hasValue:!1,value:null};m.current=v}else v=m.current;var S=c(e,(m=p(function(){function a(t){if(!s){if(s=!0,e=t,t=o(t),void 0!==u&&v.hasValue){var l=v.value;if(u(l,t))return c=l}return c=t}if(l=c,i(e,t))return l;var f=o(t);return void 0!==u&&u(l,f)?l:(e=t,c=f)}var e,c,s=!1,f=void 0===l?null:l;return[function(){return a(t())},null===f?void 0:function(){return a(f())}]},[t,l,o,u]))[0],m[1]);return f(function(){v.hasValue=!0,v.value=S},[S]),d(S),S}},61688:function(e,t,l){e.exports=l(53250)},52798:function(e,t,l){e.exports=l(50139)}}]);
//# sourceMappingURL=7075.37316b362c5b0fdb.js.map