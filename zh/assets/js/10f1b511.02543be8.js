(self.webpackChunk=self.webpackChunk||[]).push([[80784],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||s;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67746:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var n=t(22122),a=t(19756),s=(t(67294),t(3905)),i={title:"Release Apache APISIX Ingress Controller 0.6.0",tags:["APISIX Ingress Controller"]},o={permalink:"/zh/releases/2021/05/13/release-apache-apisix-ingress-controller-0.6.0",source:"@site/releases/2021-5-13-release-apache-apisix-ingress-controller-0.6.0.md",title:"Release Apache APISIX Ingress Controller 0.6.0",description:"We have added some new features, fixed some bugs, and made some optimizations to the internal code.",date:"2021-05-13T00:00:00.000Z",formattedDate:"2021\u5e745\u670813\u65e5",tags:[{label:"APISIX Ingress Controller",permalink:"/zh/releases/tags/apisix-ingress-controller"}],readingTime:.535,truncated:!1,prevItem:{title:"Release Apache APISIX 2.6",permalink:"/zh/releases/2021/05/24/release-apache-apisix-2.6"},nextItem:{title:"Release Apache APISIX Dashboard 2.6",permalink:"/zh/releases/2021/04/22/release-apache-apisix-dashboard-2.6"}},l=[{value:"Core",id:"core",children:[]},{value:"Fix",id:"fix",children:[]}],p={toc:l};function c(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We have added some new features, fixed some bugs, and made some optimizations to the internal code."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note: The CRDs should be re-applied because of some new features")),(0,s.kt)("h2",{id:"core"},"Core"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Support TCP definition ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/115"},"#115")),(0,s.kt)("li",{parentName:"ul"},"Add labels to mark resources are pushed by ingress controller ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/242"},"#242")),(0,s.kt)("li",{parentName:"ul"},"Add jsonschema validate for ApisixUpstream and ApisixTls resource ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/371"},"#371")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/372"},"#372")),(0,s.kt)("li",{parentName:"ul"},"Support to record kubernetes events for resources processing ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/394"},"#394")),(0,s.kt)("li",{parentName:"ul"},"Support to report resources status ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/395"},"#395")),(0,s.kt)("li",{parentName:"ul"},"Support global_rules for cluster scoped plugins ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/402"},"#402"))),(0,s.kt)("h2",{id:"fix"},"Fix"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Remove upstream caching correctly ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/421"},"#421")),(0,s.kt)("li",{parentName:"ul"},"Avoid retrying caused by 404 when deleting cache ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/424"},"#424")),(0,s.kt)("li",{parentName:"ul"},"Handle cookie exprs correctly ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/425"},"#425"))))}c.isMDXComponent=!0}}]);