(self.webpackChunk=self.webpackChunk||[]).push([[23174],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=o(r),m=a,h=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39032:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Release Apache APISIX Go Plugin Runner 0.2.0",tags:["APISIX Go Plugin Runner"]},u={permalink:"/zh/releases/2021/09/03/release-apache-apisix-go-plugin-runner-0.2.0",source:"@site/releases/2021-9-3-release-apache-apisix-go-plugin-runner-0.2.0.md",title:"Release Apache APISIX Go Plugin Runner 0.2.0",description:"Feature",date:"2021-09-03T00:00:00.000Z",formattedDate:"2021\u5e749\u67083\u65e5",tags:[{label:"APISIX Go Plugin Runner",permalink:"/zh/releases/tags/apisix-go-plugin-runner"}],readingTime:.24,truncated:!1,prevItem:{title:"Release Apache APISIX Python Plugin Runner 0.1.0",permalink:"/zh/releases/2021/09/06/release-apache-apisix-python-plugin-runner-0.1.0"},nextItem:{title:"Release Apache APISIX 2.9",permalink:"/zh/releases/2021/08/27/release-apache-apisix-2.9"}},p=[{value:"Feature",id:"feature",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support Var API ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/31"},"#31")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: provide default APISIX_CONF_EXPIRE_TIME to simplify thing ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/30"},"#30")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: handle idempotent key in PrepareConf ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/27"},"#27"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix: a race when reusing flatbuffers.Builder ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/35"},"#35")),(0,i.kt)("li",{parentName:"ul"},"fix: the default socket permission is not enough ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/25"},"#25"))))}c.isMDXComponent=!0}}]);