"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6518],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47878:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s={title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",keywords:["APISIX","Apache APISIX","Ingress Controller"],description:"Apache APISIX Ingress Controller v1.0 \u6b63\u5f0f\u53d1\u5e03\uff0c\u53ef\u652f\u6301\u4f7f\u7528\u5305\u62ec ApisixRoute \u548c  ApisixUpstream \u7b49\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u4ee5\u53ca Kubernetes \u539f\u751f Ingress \u8d44\u6e90\u7b49\u63a7\u5236\u5916\u90e8\u6d41\u91cf\u8bbf\u95ee\u90e8\u7f72\u5728 Kubernetes \u4e2d\u7684\u670d\u52a1\u3002",tags:["Release"]},i=void 0,c={permalink:"/zh/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-06-18-first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released.md",title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",description:"Apache APISIX Ingress Controller v1.0 \u6b63\u5f0f\u53d1\u5e03\uff0c\u53ef\u652f\u6301\u4f7f\u7528\u5305\u62ec ApisixRoute \u548c  ApisixUpstream \u7b49\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u4ee5\u53ca Kubernetes \u539f\u751f Ingress \u8d44\u6e90\u7b49\u63a7\u5236\u5916\u90e8\u6d41\u91cf\u8bbf\u95ee\u90e8\u7f72\u5728 Kubernetes \u4e2d\u7684\u670d\u52a1\u3002",date:"2021-06-18T00:00:00.000Z",formattedDate:"2021\u5e746\u670818\u65e5",tags:[{label:"Release",permalink:"/zh/blog/tags/release"}],readingTime:1.29,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",permalink:"/zh/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins"},nextItem:{title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",permalink:"/zh/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement"}},u={authorsImageUrls:[void 0]},l=[],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX Ingress Controller v1.0 \u6b63\u5f0f\u53d1\u5e03\uff0c\u53ef\u652f\u6301\u4f7f\u7528\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixUpstream")," \u7b49\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u4ee5\u53ca Kubernetes \u539f\u751f Ingress \u8d44\u6e90\u7b49\u63a7\u5236\u5916\u90e8\u6d41\u91cf\u8bbf\u95ee\u90e8\u7f72\u5728 Kubernetes \u4e2d\u7684\u670d\u52a1\u3002")))}f.isMDXComponent=!0}}]);