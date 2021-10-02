"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12077],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return I}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=l(r),I=a,m=h["".concat(c,".").concat(I)]||h[I]||u[I]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function I(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19599:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return l},toc:function(){return s},default:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p={title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",author:"Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Ingress"],description:"Apache APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\u3002",tags:["Events"]},i=void 0,c={permalink:"/zh/blog/2021/08/30/Ingress-Meeting",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-08-30-Ingress-Meeting.md",title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",description:"Apache APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\u3002",date:"2021-08-30T00:00:00.000Z",formattedDate:"2021\u5e748\u670830\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:.525,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"Apache APISIX \xd7 KubeSphere\uff1a\u63d0\u4f9b\u66f4\u597d\u7528\u7684\u7f51\u5173\u53ca K8S Ingress Controller",permalink:"/zh/blog/2021/08/31/Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller"},nextItem:{title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021 8.23-8.29",permalink:"/zh/blog/2021/08/30/weekly-report"}},l={authorsImageUrls:[void 0]},s=[{value:"\u4f1a\u8bae\u65f6\u95f4",id:"\u4f1a\u8bae\u65f6\u95f4",children:[]},{value:"\u4f1a\u8bae\u5730\u5740",id:"\u4f1a\u8bae\u5730\u5740",children:[]},{value:"\u4f1a\u8bae\u5468\u62a5",id:"\u4f1a\u8bae\u5468\u62a5",children:[]},{value:"\u6bcf\u671f\u4f1a\u8bae\u7684\u8bae\u9898\u53ef\u80fd\u662f",id:"\u6bcf\u671f\u4f1a\u8bae\u7684\u8bae\u9898\u53ef\u80fd\u662f",children:[]}],u={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u968f\u7740 ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released"},"Apache APISIX Ingress Controller 1.0 \u7248\u672c")," \u53d1\u5e03\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u5f00\u59cb\u5173\u6ce8 Apache APISIX Ingress \u65b9\u6848\uff0cApache APISIX \u793e\u533a\u5e0c\u671b\u80fd\u591f\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u66f4\u76f4\u63a5\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\uff0c\u5e0c\u671b\u6bcf\u4e00\u4f4d\u7528\u6237\u3001\u6bcf\u4e00\u4f4d\u5f00\u53d1\u8005\u7684\u58f0\u97f3\u90fd\u53ef\u4ee5\u88ab\u542c\u89c1\u3002 \u56e0\u6b64\uff0cApache APISIX \u793e\u533a\u5f00\u59cb\u7ec4\u7ec7\u6bcf\u4e24\u5468\u7ebf\u4e0a\u793e\u533a\u4f1a\u8bae\u3002")),(0,o.kt)("h2",{id:"\u4f1a\u8bae\u65f6\u95f4"},"\u4f1a\u8bae\u65f6\u95f4"),(0,o.kt)("p",null,"\u6bcf\u4e24\u5468 (\u5468\u4e09)\u4e0b\u5348 2 \u70b9\uff0c\u6bcf\u6b21\u4f1a\u8bae\u7ea6 1 \u5c0f\u65f6\u3002"),(0,o.kt)("h2",{id:"\u4f1a\u8bae\u5730\u5740"},"\u4f1a\u8bae\u5730\u5740"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://meeting.tencent.com/s/eTvhm052verD"},"\u817e\u8baf\u4f1a\u8bae")," ID\uff1a377 1555 2043"),(0,o.kt)("h2",{id:"\u4f1a\u8bae\u5468\u62a5"},"\u4f1a\u8bae\u5468\u62a5"),(0,o.kt)("p",null,"\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://docs.qq.com/doc/DSEhMeGJ0UXdydFJy"},"\u6b64\u6587\u6863"),"\u63d0\u524d\u7559\u4e0b\u4f60\u60f3\u8ba8\u8bba\u7684\u8bae\u9898"),(0,o.kt)("h2",{id:"\u6bcf\u671f\u4f1a\u8bae\u7684\u8bae\u9898\u53ef\u80fd\u662f"},"\u6bcf\u671f\u4f1a\u8bae\u7684\u8bae\u9898\u53ef\u80fd\u662f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u65b0\u529f\u80fd\u9700\u6c42\u7684\u8ba8\u8bba"),(0,o.kt)("li",{parentName:"ul"},"\u6280\u672f\u67b6\u6784\u8bbe\u8ba1\u7684\u5206\u4eab"),(0,o.kt)("li",{parentName:"ul"},"Bug \u7684\u53cd\u9988"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u6216\u6240\u5728\u56e2\u961f\u4f7f\u7528 Apache APISIX Ingress Controller \u8fc7\u7a0b\u4e2d\u7684\u7ecf\u9a8c\u5206\u4eab\u548c\u8e29\u5751"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9 Apache APISIX Ingress Controller \u7684\u80af\u5b9a\u6216\u5410\u69fd")),(0,o.kt)("p",null,"\u5f53\u7136\u4e5f\u5341\u5206\u6b22\u8fce\u5927\u5bb6\u5bf9 Apache APISIX \u793e\u533a\u7684\u5efa\u8bbe\u63d0\u51fa\u4e2d\u80af\u610f\u89c1\u6216\u8d21\u732e\u5404\u79cd\u5947\u601d\u5999\u60f3\uff0c\u5982\u679c\u5927\u5bb6\u5bf9\u4f1a\u8bae\u6709\u5efa\u8bae\u3001\u6709\u60f3\u6cd5\uff0c\u6b22\u8fce\u5230\u6b64 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"issue")," \u4e0b\u56de\u590d\u54e6~"),(0,o.kt)("p",null,"\u6b22\u8fce\u5927\u5bb6\u53c2\u4e0e\u4f1a\u8bae\uff0c\u4e00\u540c\u63a2\u8ba8 Apache APISIX Ingress \u65b9\u6848\uff0c\u66f4\u6b22\u8fce\u5c0f\u4f19\u4f34\u4eec\u52a0\u5165\u793e\u533a\u5f00\u53d1\u8005\u7684\u961f\u4f0d\u4e2d\uff0c\u4e00\u8d77\u6253\u9020\u4e00\u6b3e\u66f4\u597d\u7528\u7684 Apache APISIX Ingress Controller\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5bf9 Apache APISIX \u7684\u6280\u672f\u65b9\u5411\u611f\u5174\u8da3\uff0c\u5e0c\u671b\u4e00\u540c\u5f00\u53d1\uff0c\u6216\u8005\u6709\u5176\u4ed6\u5efa\u8bae\u6216\u610f\u89c1\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6e20\u9053\u53c2\u4e0e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8ba2\u9605\u5e76\u53d1\u9001\u90ae\u4ef6\u81f3 ",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org"),"\u200d\n\u4ee5 Apache Way \u7684\u65b9\u5f0f\u53c2\u4e0e\u793e\u533a\uff0c\u8ba2\u9605\u65b9\u5f0f\u89c1\u5b98\u7f51",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/subscribe-guide"},"\u8ba2\u9605\u6307\u5357"),"\u3002\u90ae\u4ef6\u5217\u8868\u662f Apache \u793e\u533a\u6700\u5e38\u7528\u7684\u6c9f\u901a\u65b9\u5f0f\uff0c\u793e\u533a\u4f1a\u79ef\u6781\u56de\u590d\u90ae\u4ef6\u5217\u8868\u4e2d\u7684\u95ee\u9898\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 Apache APISIX Github discussion \u53d1\u8d77\u8ba8\u8bba\n\u6b22\u8fce\u5927\u5bb6\u5728 GitHub discussion \u8ba8\u8bba\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"discussion")," \u533a\u975e\u5e38\u6d3b\u8dc3\u54e6\u3002\u6211\u4eec\u4e5f\u4f1a\u4e0d\u5b9a\u671f\u7684\u5c06\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u5728 discussion \u4e2d\u8fdb\u884c\u6c47\u603b\u548c\u7b54\u590d\uff0c\u65b9\u4fbf\u5927\u5bb6\u67e5\u627e\u3002"))))}h.isMDXComponent=!0}}]);