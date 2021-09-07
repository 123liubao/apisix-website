(self.webpackChunk=self.webpackChunk||[]).push([[19322],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=o(r),m=a,h=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1691:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Release Apache APISIX 1.3",tags:["APISIX"]},c={permalink:"/zh/releases/2020/05/26/release-apache-apisix-1.3",source:"@site/releases/2020-5-26-release-apache-apisix-1.3.md",title:"Release Apache APISIX 1.3",description:"The 1.3 version is mainly for security update.",date:"2020-05-26T00:00:00.000Z",formattedDate:"2020\u5e745\u670826\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:.225,truncated:!1,prevItem:{title:"Release Apache APISIX 1.4",permalink:"/zh/releases/2020/06/30/release-apache-apisix-1.4"},nextItem:{title:"Release Apache APISIX 1.2",permalink:"/zh/releases/2020/04/20/release-apache-apisix-1.2"}},p=[{value:"Security",id:"security",children:[]},{value:"Plugin",id:"plugin",children:[]}],o={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The 1.3 version is mainly for security update."),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reject invalid header",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1462"},"#1462")," and uri safe encode",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1461"},"#1461")),(0,i.kt)("li",{parentName:"ul"},"only allow 127.0.0.1 access admin API and dashboard by default. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1458"},"#1458"))),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"add batch request plugin"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1388"},"#1388")),(0,i.kt)("li",{parentName:"ul"},"implemented plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"sys logger"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1414"},"#1414"))))}u.isMDXComponent=!0}}]);