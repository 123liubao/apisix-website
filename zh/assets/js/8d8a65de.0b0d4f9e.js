"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24343],{3905:function(e,a,t){t.d(a,{Zo:function(){return A},kt:function(){return k}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),g=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},A=function(e){var a=g(e.components);return n.createElement(c.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,A=r(e,["components","mdxType","originalType","parentName"]),h=g(t),k=i,s=h["".concat(c,".").concat(k)]||h[k]||o[k]||l;return t?n.createElement(s,p(p({ref:a},A),{},{components:t})):n.createElement(s,p({ref:a},A))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,p=new Array(l);p[0]=h;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,p[1]=r;for(var g=2;g<l;g++)p[g]=t[g];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},54926:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return r},metadata:function(){return c},assets:function(){return g},toc:function(){return A},default:function(){return h}});var n=t(87462),i=t(63366),l=(t(67294),t(3905)),p={title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",author:"\u91d1\u536b",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Nginx","\u53ef\u89c2\u6d4b\u6027"],description:"\u6700\u4f73\u5b9e\u8df5\uff1a\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002",tags:["Practical Case"]},r=void 0,c={permalink:"/zh/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-08-06-using-apache-apisix-to-improve-the-observability-of-nginx.md",title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",description:"\u6700\u4f73\u5b9e\u8df5\uff1a\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002",date:"2021-08-06T00:00:00.000Z",formattedDate:"2021\u5e748\u67086\u65e5",tags:[{label:"Practical Case",permalink:"/zh/blog/tags/practical-case"}],readingTime:3.685,truncated:!0,authors:[{name:"\u91d1\u536b",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/zh/blog/2021/08/09/Apache-APISIX-in-Quliankeji"},nextItem:{title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",permalink:"/zh/blog/2021/08/05/Kong-to-APISIX"}},g={authorsImageUrls:[void 0]},A=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"Nginx \u7684\u53ef\u89c2\u6d4b\u6027",id:"nginx-\u7684\u53ef\u89c2\u6d4b\u6027",children:[{value:"Nginx \u5e38\u89c1\u76d1\u63a7\u65b9\u5f0f",id:"nginx-\u5e38\u89c1\u76d1\u63a7\u65b9\u5f0f",children:[]},{value:"Nginx \u7684\u7f3a\u9677",id:"nginx-\u7684\u7f3a\u9677",children:[]},{value:"Nginx \u53ef\u89c2\u6d4b\u6027\u603b\u7ed3",id:"nginx-\u53ef\u89c2\u6d4b\u6027\u603b\u7ed3",children:[]}]},{value:"Apache APISIX \u6982\u8ff0",id:"apache-apisix-\u6982\u8ff0",children:[{value:"Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb",id:"apache-apisix-\u4e0e-nginx-\u7684\u5173\u7cfb",children:[]},{value:"Apache APISIX \u7b80\u4ecb",id:"apache-apisix-\u7b80\u4ecb",children:[]},{value:"Apache APISIX \u89e3\u51b3\u65b9\u6848",id:"apache-apisix-\u89e3\u51b3\u65b9\u6848",children:[]}]},{value:"Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027",id:"apache-apisix-\u7684\u53ef\u89c2\u6d4b\u6027",children:[{value:"Apache APISIX \u652f\u6301\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b",id:"apache-apisix-\u652f\u6301\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b",children:[]},{value:"Apache APISIX \u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u7684\u4f18\u52bf",id:"apache-apisix-\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u7684\u4f18\u52bf",children:[]}]},{value:"\u7ed3\u5408 Apache SkyWalking\uff0c\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u505a\u8fdb\u4e00\u6b65\u63d0\u5347",id:"\u7ed3\u5408-apache-skywalking\uff0c\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u505a\u8fdb\u4e00\u6b65\u63d0\u5347",children:[{value:"SkyWalking Satellite",id:"skywalking-satellite",children:[]},{value:"ALS \u65b9\u6848",id:"als-\u65b9\u6848",children:[]},{value:"\u5c06 Events \u6574\u5408\u5230 SkyWalking",id:"\u5c06-events-\u6574\u5408\u5230-skywalking",children:[]}]},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",children:[{value:"Apache APISIX \u7684\u6269\u5c55\u673a\u5236\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u5176\u5bf9\u7a33\u5b9a\u6027\u7684\u5f71\u54cd",id:"apache-apisix-\u7684\u6269\u5c55\u673a\u5236\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u5176\u5bf9\u7a33\u5b9a\u6027\u7684\u5f71\u54cd",children:[]},{value:"\u5982\u4f55\u786e\u8ba4\u89c4\u5219\u5df2\u751f\u6548\uff1f",id:"\u5982\u4f55\u786e\u8ba4\u89c4\u5219\u5df2\u751f\u6548\uff1f",children:[]}]},{value:"\u5173\u4e8e\u4f5c\u8005",id:"\u5173\u4e8e\u4f5c\u8005",children:[]}],o={toc:A};function h(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002")),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u201c\u53ef\u89c2\u6d4b\u6027\u201c\u662f\u4e00\u79cd\u5ea6\u91cf\u624b\u6bb5\uff0c\u65b9\u4fbf\u638c\u63e1\u57fa\u7840\u8bbe\u65bd\u3001\u7cfb\u7edf\u5e73\u53f0\u6216\u8005\u5e94\u7528\u7a0b\u5e8f\u7684\u8fd0\u884c\u72b6\u51b5\u3002\u5e38\u89c1\u7684\u624b\u6bb5\u662f\u6536\u96c6 metrics\u3001logging \u548c tracing \u53ca events \u6570\u636e\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u4eba\u5458\u68c0\u6d4b\u3001\u8c03\u67e5\u3001\u9884\u8b66\u548c\u7ea0\u6b63\u7cfb\u7edf\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u4ece Nginx \u53ef\u89c2\u6d4b\u6027\u3001Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb\u3001Apache APISIX \u53ef\u89c2\u6d4b\u6027\uff0c\u4ee5\u53ca\u7ed3\u5408 Apache SkyWalking \u8fdb\u4e00\u6b65\u63d0\u5347\u53ef\u89c2\u6d4b\u6027\u8fd9\u4e9b\u65b9\u9762\u5206\u4eab\u5173\u4e8e\u53ef\u89c2\u6d4b\u6027\u7684\u65b9\u6848\u4e0e\u5b9e\u8df5\u3002"),(0,l.kt)("h2",{id:"nginx-\u7684\u53ef\u89c2\u6d4b\u6027"},"Nginx \u7684\u53ef\u89c2\u6d4b\u6027"),(0,l.kt)("h3",{id:"nginx-\u5e38\u89c1\u76d1\u63a7\u65b9\u5f0f"},"Nginx \u5e38\u89c1\u76d1\u63a7\u65b9\u5f0f"),(0,l.kt)("p",null,"Nginx \u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u80fd\u591f\u505a\u5230\u53ef\u89c2\u6d4b\uff0c\u4ee5\u4e0b\u7f57\u5217\u51fa Nginx \u7684\u5e38\u89c1\u76d1\u63a7\u65b9\u5f0f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"ngx_http_stub_status_module"),(0,l.kt)("li",{parentName:"ol"},"VTS module + exporter + prometheus + grafana\uff08\u5982\u679c Nginx \u7248\u672c\u6bd4\u8f83\u4f4e\uff0c\u9700\u8981\u5f15\u5165 exporter \uff09"),(0,l.kt)("li",{parentName:"ol"},"Nginx Amplify SaaS")),(0,l.kt)("h4",{id:"ngx_http_stub_status_module"},"ngx_http_stub_status_module"),(0,l.kt)("p",null,"ngx_http_stub_status_module \u4e3b\u8981\u6536\u96c6\u5b9e\u4f8b\u7ea7\u522b\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,l.kt)("h4",{id:"vts-module"},"VTS module"),(0,l.kt)("p",null,"VTS module \u6709 3 \u4e2a\u6bd4\u8f83\u660e\u663e\u7684\u7f3a\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u590d\u6742"),"\uff1a\u867d\u7136 VTS module \u80fd\u591f\u91c7\u96c6\u6307\u6807\uff0c\u91c7\u96c6\u7684\u6307\u6807\u7c7b\u578b\u4e5f\u6bd4\u8f83\u591a\uff0c\u4f46\u662f\u5b83\u7684\u5b89\u88c5\u6bd4\u8f83\u590d\u6742\u3002\u5982\u679c\u60f3\u8981\u91c7\u7528 VTS module\uff0c\u9700\u8981\u91cd\u65b0\u7f16\u8bd1 Nginx\uff0c\u5728\u7f16\u8bd1 Nginx \u4e4b\u524d\u52a0\u5165 VTS moudle\uff0c\u5b8c\u6210\u7f16\u8bd1\u540e\u91cd\u65b0\u5b89\u88c5 Nginx \u624d\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528 VTS\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6269\u5c55\u80fd\u529b\u5f31"),"\uff1aVTS \u6269\u5c55\u80fd\u529b\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u4e00\u662f\u5728\u7f16\u8bd1\u4e4b\u524d\u7ed9 VTS \u589e\u52a0\u6269\u5c55\uff1b\u4e8c\u662f\u5728\u7f16\u8bd1\u4e4b\u540e\u589e\u52a0\u6269\u5c55 \u2014\u2014 \u4fee\u6539 nginx.conf \u914d\u7f6e\u6587\u4ef6\u3002\u901a\u8fc7\u4fee\u6539 nginx.conf \u6587\u4ef6\u6765\u589e\u52a0\u6269\u5c55\u4f1a\u4f7f Nginx reload\uff0c\u751f\u4ea7\u73af\u5883\u76f4\u63a5 reload \u6216\u591a\u6216\u5c11\u4f1a\u5bf9\u4e1a\u52a1\u4ea7\u751f\u4e00\u4e9b\u5f71\u54cd\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u793e\u533a\u66f4\u65b0\u7f13\u6162"),"\uff1aVTS module \u6700\u65b0\u7684\u4e00\u6b21\u66f4\u65b0\u662f\u5728 2018 \u5e74\uff0c\u5df2\u7ecf\u505c\u6446 3 \u5e74\u4e86\u3002"))),(0,l.kt)("h4",{id:"nginx-amplify-saas"},"Nginx Amplify SaaS"),(0,l.kt)("p",null,"Nginx Amplify \u662f\u4e00\u4e2a SaaS \u670d\u52a1\uff0cNginx Amplify \u5728\u8fdc\u7aef\u63d0\u4f9b\u670d\u52a1\uff0c\u5728 Nginx \u670d\u52a1\u4e4b\u5916\u5b89\u88c5 Agent\u3002\n\u5728 Nginx \u4e4b\u5916\u5b89\u88c5\u91c7\u96c6\u6a21\u5757\uff0c\u90a3\u4e48\u5728\u91c7\u96c6\u6307\u6807\u4e0a\u5c31\u4f1a\u6709\u9650\u5236\uff0c\u53ea\u80fd\u62ff\u5230 Nginx \u66b4\u9732\u51fa\u6765\u7684\u4fe1\u606f\uff0c\u6ca1\u6709\u66b4\u9732\u7684\u5185\u90e8\u4fe1\u606f\u662f\u62ff\u4e0d\u5230\u7684\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u7531\u4e8e Nginx Amplify SaaS \u662f\u4e00\u4e2a SaaS \u670d\u52a1\uff0c\u9700\u8981\u901a\u8fc7\u516c\u7f51\u5c06\u91c7\u96c6\u5230\u7684\u6570\u636e\u4f20\u5230\u670d\u52a1\u7aef\uff0c\u8fd9\u4f1a\u5e26\u6765\u4e00\u4e9b\u5b89\u5168\u9690\u60a3\uff0c\u540c\u65f6\u628a\u4e00\u4e9b\u4f01\u4e1a\u7528\u6237\u963b\u6321\u5728\u5916\u9762\u3002\u6216\u8bb8 Nginx Amplify \u7684\u76ee\u6807\u7fa4\u4f53\u662f Nginx plus \u8fd9\u6837\u7684\u4f01\u4e1a\u7528\u6237\uff0c\u4e0d\u662f\u5f00\u6e90\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0cNginx Amplify SaaS \u793e\u533a\u4e5f\u4e0d\u6d3b\u8dc3\uff0c\u5df2\u7ecf\u505c\u6446 2 \u5e74\u3002"),(0,l.kt)("h3",{id:"nginx-\u7684\u7f3a\u9677"},"Nginx \u7684\u7f3a\u9677"),(0,l.kt)("p",null,"Nginx \u5728 Events \u6536\u96c6\u4e0a\u81ea\u8eab\u6709\u7f3a\u9677\uff0c\u8fd9\u91cc\u5217\u4e3e\u51fa\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Nginx \u57fa\u4e8e nginx.conf \u8fdb\u884c\u914d\u7f6e\uff0c\u4fee\u6539\u540e\u901a\u8fc7 reload nginx.conf \u6587\u4ef6\u4f7f\u914d\u7f6e\u751f\u6548\u3002\u9664 reload \u4e8b\u4ef6\u5916\uff0c\u6ca1\u6709\u5176\u4ed6 Events \u53ef\u7528\uff0c\u6211\u4eec\u65e0\u6cd5\u5f97\u77e5\u6bcf\u6b21\u4fee\u6539\u6587\u4ef6\u7684\u53d8\u5316\uff0c\u5982\uff1a\u8d77\u521d\u53ea\u914d\u7f6e 1 \u4e2a\u8def\u7531\uff0c\u4fee\u6539\u6587\u4ef6\u589e\u52a0 10 \u4e2a\u8def\u7531\uff0c\u53ea\u6709 reload \u4e8b\u4ef6\u65e0\u6cd5\u5f97\u77e5\u589e\u52a0\u7684\u5230\u4f4e\u662f\u54ea 10 \u4e2a\u8def\u7531\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Nginx \u5f00\u6e90\u4ea7\u54c1\u7f3a\u5c11\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\u3002Nginx \u662f\u4e00\u4e2a\u53cd\u5411\u4ee3\u7406\uff0c\u771f\u6b63\u7684\u540e\u7aef\u670d\u52a1\u53ef\u80fd\u4f1a\u51fa\u73b0\u91cd\u542f\u3001\u5347\u7ea7\u6216\u8005\u5f02\u5e38\u7684\u60c5\u51b5\uff0c\u5982\u679c\u6ca1\u6709\u4e3b\u52a8\u7684\u5065\u5eb7\u68c0\u67e5\uff0c\u4f9d\u9760\u88ab\u52a8\u68c0\u67e5\uff0c\u53ea\u80fd\u5728\u6d41\u91cf\u51fa\u73b0\u5f02\u5e38\u7684\u65f6\u5019\uff0c\u624d\u77e5\u9053\u670d\u52a1\u51fa\u4e86\u95ee\u9898\uff0c\u8fd9\u4f1a\u4e22\u6389\u5f88\u591a Events\uff0c\u5bfc\u81f4\u4e0a\u6e38 Events \u4e8b\u4ef6\u4fe1\u606f\u4e0d\u5b8c\u6574\u3002"))),(0,l.kt)("h3",{id:"nginx-\u53ef\u89c2\u6d4b\u6027\u603b\u7ed3"},"Nginx \u53ef\u89c2\u6d4b\u6027\u603b\u7ed3"),(0,l.kt)("p",null,"Nginx \u7684\u5f00\u6e90\u7248\u672c\u6ca1\u6709\u63d0\u4f9b\u975e\u5e38\u597d\u7528\u7684\u76d1\u63a7\u3002\u867d\u7136 Nginx \u63d0\u4f9b\u4e86\u4e00\u4e9b\u76d1\u63a7\u5de5\u5177\uff0c\u4f46\u8fd9\u4e9b\u5de5\u5177\u7684\u5b89\u88c5\u548c\u914d\u7f6e\u975e\u5e38\u590d\u6742\uff0c\u51e0\u4e4e\u6ca1\u6709\u6269\u5c55\u6027\u3002\u53ef\u80fd\u8fd9\u4e9b\u5de5\u5177\u7684\u8bbe\u8ba1\u5e76\u4e0d\u662f\u4e3a\u4e86\u53ef\u89c2\u6d4b\u6027\uff0c\u53ea\u662f\u4e3a\u4e86\u80fd\u770b\u5230\u6307\u6807\u6216\u7edf\u8ba1\u6570\u636e\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u95ee\u9898\u3002\u73b0\u5728\u6709\u5404\u79cd\u53ef\u89c2\u6d4b\u6027\u8bbe\u7f6e\u7c7b\u7684\u4ea7\u54c1\uff0c\u4f46\u662f\u5f88\u96be\u96c6\u6210\u5230 Nginx \u4e0a\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0cNginx \u793e\u533a\u505c\u6ede\u4e0d\u524d\uff0c\u5bfc\u81f4 Nginx \u8fed\u4ee3\u901f\u5ea6\u6162\u3002"),(0,l.kt)("h2",{id:"apache-apisix-\u6982\u8ff0"},"Apache APISIX \u6982\u8ff0"),(0,l.kt)("h3",{id:"apache-apisix-\u4e0e-nginx-\u7684\u5173\u7cfb"},"Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158638-aba4e627-d2d6-4bf5-b431-61eb3913a296.png",alt:"Apache APISIX \u4e0e Nginx \u7684\u5173\u7cfb"})),(0,l.kt)("p",null,"Apache APISIX \u57fa\u4e8e Nginx \u5b9e\u73b0\uff0c\u4f46\u53ea\u4f9d\u8d56 Nginx \u7684\u7f51\u7edc\u5e93\uff0c\u5728 Nginx \u57fa\u7840\u4e0a\uff0cApache APISIX \u5b9e\u73b0\u4e86\u81ea\u5df1\u7684\u6838\u5fc3\u7684\u4ee3\u7801\uff0c\u5e76\u9884\u7559\u4e86\u6269\u5c55\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u5728\u8868\u683c\u4e2d\u5217\u51fa\u4e86 Apache APISIX \u548c Nginx \u7684\u529f\u80fd\u5bf9\u6bd4\uff0cApache APISIX \u65e2\u53ef\u4ee5\u505a\u53cd\u5411\u4ee3\u7406\uff0c\u53c8\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e9b Nginx \u4e0d\u652f\u6301\u7684\u529f\u80fd\uff0c\u5982\uff1a\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\u3001\u6d41\u91cf\u7ba1\u7406\u3001\u6a2a\u5411\u6269\u7f29\u5bb9\u7b49\uff0c\u800c\u4e14\u8fd9\u4e9b\u529f\u80fd\u90fd\u662f\u5f00\u6e90\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"API \u8bbe\u8ba1"),"\uff1a\u5728 API \u8bbe\u8ba1\u65b9\u9762\u4f7f\u7528 Apache APISIX \u66f4\u52a0\u7b80\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5f00\u6e90 Dashboard"),"\uff1a\u5728\u754c\u9762\u4e0a\u5c31\u80fd\u628a\u53cd\u5411\u4ee3\u7406\u5168\u90e8\u914d\u7f6e\u5b8c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5"),"\uff1aApache APISIX \u652f\u6301\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\uff0c\u53ef\u4ee5\u7ed3\u5408 Events \u5b8c\u5584\u53ef\u89c2\u6d4b\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6d41\u91cf\u7ba1\u7406"),"\uff1a\u9002\u5408\u76d1\u6d4b\u6570\u636e\uff0c\u6216\u8005\u5728\u4e1a\u52a1\u53d1\u5e03\u4e0a\u7ebf\u65f6\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6a2a\u5411\u6269\u7f29\u5bb9"),"\uff1aApache APISIX \u652f\u6301\u6a2a\u5411\u6269\u7f29\u5bb9\uff0c\u8fd9\u4e2a\u7279\u6027\u5f97\u76ca\u4e8e Apache APISIX \u7684\u67b6\u6784\uff08\u89c1\u4e0b\u56fe\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u63d2\u4ef6\u6269\u5c55\u673a\u5236"),"\uff1aApache APISIX \u7684\u63d2\u4ef6\u6269\u5c55\u673a\u5236\u4f7f\u5176\u5177\u6709\u6781\u4e3a\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u63d2\u4ef6\u7f16\u6392"),"\uff1a\u6309\u7167\u4e1a\u52a1\u9700\u6c42\uff0c\u5c06\u591a\u4e2a\u63d2\u4ef6\u6309\u7167\u903b\u8f91\u7f16\u6392\uff0c\u7ec4\u5408\u8d77\u6765\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bc1\u4e66\u7ba1\u7406"),"\uff1aApache APISIX \u652f\u6301\u52a8\u6001\u7684\u8bc1\u4e66\u7ba1\u7406\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158643-ecc67e12-2076-41e5-88d8-baa14144f35d.png",alt:"Apache APISIX \u67b6\u6784\u56fe"})),(0,l.kt)("h3",{id:"apache-apisix-\u7b80\u4ecb"},"Apache APISIX \u7b80\u4ecb"),(0,l.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002Apache APISIX \u4e5f\u662f\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\uff0c\u662f\u751f\u4ea7\u53ef\u7528\u7684\u9ad8\u6027\u80fd\u7f51\u5173\u3002\u5168\u7403\u5df2\u6709\u6570\u767e\u5bb6\u4f01\u4e1a\u4f7f\u7528 Apache APISIX \u5904\u7406\u5173\u952e\u4e1a\u52a1\u6d41\u91cf\uff0c\u6db5\u76d6\u91d1\u878d\u3001\u4e92\u8054\u7f51\u3001\u5236\u9020\u3001\u96f6\u552e\u3001\u8fd0\u8425\u5546\u7b49\u7b49\uff0c\u6bd4\u5982\u7f8e\u56fd\u822a\u7a7a\u822a\u5929\u5c40\uff08NASA\uff09\u3001\u6b27\u76df\u7684\u6570\u5b57\u5de5\u5382\u3001\u4e2d\u56fd\u822a\u4fe1\u3001\u4e2d\u56fd\u79fb\u52a8\u3001\u817e\u8baf\u3001\u534e\u4e3a\u3001\u5fae\u535a\u3001\u7f51\u6613\u3001\u8d1d\u58f3\u627e\u623f\u3001360\u3001\u6cf0\u5eb7\u7b49\u3002"),(0,l.kt)("h3",{id:"apache-apisix-\u89e3\u51b3\u65b9\u6848"},"Apache APISIX \u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158645-83c22975-ebf1-4861-8b61-38639a28875a.png",alt:"Apache APISIX \u5168\u6d41\u91cf\u89e3\u51b3\u65b9\u6848"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u5de6\u8fb9\uff0c\u4ece\u4e0a\u5f80\u4e0b\u662f\u4ece\u5355\u4f53\u670d\u52a1\u5230 SOA\uff08\u9762\u5411\u670d\u52a1\u7684\u67b6\u6784\uff09\u5230\u5fae\u670d\u52a1\u7684\u6f14\u8fdb\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u5728 SOA \u4e0b\uff0c\u7f51\u5173\u4e00\u822c\u91c7\u7528 Nginx \u6216\u8005 HAProxy\uff1b\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\uff0c\u7f51\u5173\u4f7f\u7528 Nginx \u505a\u8d1f\u8f7d\u5747\u8861\u3002\u5fae\u670d\u52a1\u67b6\u6784\u6709\u4e24\u4e2a\u6bd4\u8f83\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848\uff1a\u4e00\u4e2a\u662f\u57fa\u4e8e Java \u6280\u672f\u6808\u5b9e\u73b0\uff0c\u5982 Spring Cloud \u7cfb\u5217\uff1b\u53e6\u4e00\u4e2a\u662f Service Mesh\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u6f14\u8fdb\u8fc7\u7a0b\u4e2d\uff0cApache APISIX \u5904\u4e8e\u4ec0\u4e48\u4f4d\u7f6e\uff0c\u80fd\u505a\u4ec0\u4e48\u5462\uff1f"),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u5de6\u56fe\u4e2d\u7ea2\u8272\u7684\u90e8\u5206\uff08Nginx / HAProxy / Kong / Spring Cloud Zuul / Spring Cloud Gateway / Traefik / Envoy / Ingress Nginx\uff09\u90fd\u53ef\u4ee5\u66ff\u6362\u4e3a Apache APISIX \u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728 SOA \u4e0b\u6709 Apache APISIX SLB \u89e3\u51b3\u65b9\u6848\uff0c\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u6709 Apache APISIX Gateway\uff0c\u5728 Kubernetes \u90e8\u7f72\u6709 Apache APISIX Ingress\uff0c\u5728 Service Mesh \u91cc\u90e8\u7f72\u6709 Apache APISIX mesh"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158648-dffd59dd-15c2-4f76-832e-5ed3763b18e5.png",alt:"Apache APISIX \u5168\u6d41\u91cf\u6570\u636e\u9762"})),(0,l.kt)("p",null,"\u4ece\u4e1a\u52a1\u8bf7\u6c42\u7684\u6d41\u91cf\u65b9\u9762\u770b\uff0c\u5f53\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u4f1a\u7ecf\u8fc7 LB\uff0c\u7ecf\u8fc7 Gateway\uff0c\u8bf7\u6c42\u88ab\u5206\u53d1\u5230\u540e\u7aef\u4e1a\u52a1\u670d\u52a1\u3002\u7ea2\u8272\u7684\u90e8\u5206\uff08LB / Gateway / Spring Cloud Gateway / K8s Ingress / Sidecar\uff09\u90fd\u53ef\u4ee5\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u89e3\u51b3\u65b9\u6848\u3002Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u5f00\u53d1\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728 Java \u4f53\u7cfb\u4e0b\u4f7f\u7528 Java \u7f16\u5199\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"Apache APISIX \u662f\u5168\u6d41\u91cf\u7684\u6570\u636e\u9762\uff0c\u5728 LB\u3001Gateway\u3001Ingress\u3001sidecar \u65b9\u9762 Apache APISIX \u90fd\u6709\u76f8\u5e94\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4ed6\u4eec\u662f\u7edf\u4e00\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5728\u53ef\u89c2\u6d4b\u6027\u65b9\u9762\u4e5f\u662f\u7edf\u4e00\u7684\u65b9\u6848\u3002\u5f53\u89e3\u51b3\u65b9\u6848\u7edf\u4e00\u65f6\uff0c\u7ba1\u7406\u63a7\u5236\u94fe\u4e5f\u662f\u5f88\u5bb9\u6613\u5b9e\u73b0\u51fa\u6765\u7684\u3002"),(0,l.kt)("h2",{id:"apache-apisix-\u7684\u53ef\u89c2\u6d4b\u6027"},"Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027"),(0,l.kt)("p",null,"\u7b80\u5355\u4e86\u89e3\u5b8c Nginx \u548c Apache APISIX \u4e4b\u540e\uff0c\u73b0\u5728\u6709\u4e24\u4e2a\u95ee\u9898\uff1aApache APISIX \u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u53ef\u4ee5\u505a\u54ea\u4e9b\u4e8b\u60c5\uff1fApache APISIX \u53ef\u89c2\u6d4b\u6027\u4e0a\u7684\u4f18\u52bf\u5728\u54ea\u91cc\uff1f"),(0,l.kt)("h3",{id:"apache-apisix-\u652f\u6301\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b"},"Apache APISIX \u652f\u6301\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,"Apache APISIX \u652f\u6301\u91c7\u96c6\u7684\u6570\u636e\u7c7b\u578b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Tracing - \u96c6\u6210 SkyWalking"),(0,l.kt)("li",{parentName:"ol"},"Metrics - \u96c6\u6210 SkyWalking / Prometheus"),(0,l.kt)("li",{parentName:"ol"},"Logging - \u96c6\u6210 SkyWalking / \u5176\u4ed6\u65e5\u5fd7\u5e73\u53f0")),(0,l.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u7f51\u5173\u7c7b\u7684\u4ea7\u54c1\uff0c\u53ef\u4ee5\u66ff\u4ee3 Nginx \u6216\u8005\u5176\u4ed6\u7684\u7f51\u5173\uff1b\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a Apache APISIX \u53ef\u4ee5\u96c6\u6210\u591a\u4e2a APM \u6216\u53ef\u89c2\u6d4b\u6027\u7cfb\u7edf\uff0c\u5982\uff1aTracing \u90e8\u5206\u53ef\u4ee5\u96c6\u6210 SkyWalking\uff0cMetrics \u6307\u6807\u4e0a\u53ef\u4ee5\u96c6\u6210 SkyWalking \u6216 Prometheus\uff0cLogging \u53ef\u4ee5\u96c6\u6210 SkyWalking \u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u65e5\u5fd7\u7cfb\u7edf\u3002"),(0,l.kt)("h3",{id:"apache-apisix-\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u7684\u4f18\u52bf"},"Apache APISIX \u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u7684\u4f18\u52bf"),(0,l.kt)("h4",{id:"\u9ad8\u5ea6\u6269\u5c55\u80fd\u529b"},"\u9ad8\u5ea6\u6269\u5c55\u80fd\u529b"),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48 Apache APISIX \u62e5\u6709\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff1f\u56e0\u4e3a Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 Lua\u3001Java\u3001Golang \u7b49\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u3002Apache APISIX \u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55\u81ea\u8eab\u7684\u80fd\u529b\u3002\u4e0a\u6587\u63d0\u5230\u7684\u4e09\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u6765\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("h4",{id:"\u7075\u6d3b\u7684\u914d\u7f6e\u80fd\u529b"},"\u7075\u6d3b\u7684\u914d\u7f6e\u80fd\u529b"),(0,l.kt)("p",null,"\u4e3e\u4e09\u4e2a\u4f8b\u5b50\u6765\u4ecb\u7ecd\u4e00\u4e0b Apache APISIX \u7075\u6d3b\u7684\u914d\u7f6e\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u662f ",(0,l.kt)("strong",{parentName:"p"},"Apache APISIX \u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4fee\u6539 logging \u7684\u914d\u7f6e"),"\uff0c\u5982\uff1a\u589e\u52a0\u6216\u4fee\u6539\u65e5\u5fd7\u5b57\u6bb5\u3002\u4fee\u6539\u65e5\u5fd7\u5b57\u6bb5\u662f\u4e00\u4e2a\u6bd4\u8f83\u5e38\u89c1\u7684\u9700\u6c42\uff0c\u6bd4\u5982\uff1a\u4e1a\u52a1\u521a\u5f00\u59cb\u4e0a\u7ebf\u65f6\uff0c\u914d\u7f6e\u597d\u4e86\u65e5\u5fd7\u5b57\u6bb5\uff0c\u7cfb\u7edf\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u9700\u8981\u4fee\u6539\u6216\u8005\u589e\u52a0\u51e0\u4e2a\u65e5\u5fd7\u5b57\u6bb5\u3002\u5982\u679c\u4f7f\u7528 Nginx\uff0c\u901a\u8fc7\u4fee\u6539 nginx.conf \u6587\u4ef6\u5b9e\u73b0\u9700\u6c42\uff0creload \u4f7f\u914d\u7f6e\u751f\u6548\u3002 ",(0,l.kt)("strong",{parentName:"p"},"Apache APISIX \u53ea\u9700\u8981\u901a\u8fc7\u811a\u672c\u628a\u5b57\u6bb5\u914d\u7f6e\u597d\uff0c\u5c31\u4f1a\u52a8\u6001\u751f\u6548"),"\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7075\u6d3b\u914d\u7f6e\u80fd\u529b\u7684\u4f8b\u5b50\u662f Prometheus \u7684\u4f7f\u7528\u3002\u5728 Apache APISIX \u91cc\uff0c\u60f3\u8981\u521b\u5efa / \u5220\u9664\u67d0\u4e00\u4e2a metric \u6216\u8005\u6269\u5c55 metrics labels\uff0c\u53ea\u9700\u8981\u5728 Prometheus \u63d2\u4ef6\u91cc\u65b0\u589e\u4e00\u4e2a metircs \u6216\u8005\u586b\u5199\u76f8\u5173\u4fe1\u606f\uff0cApache APISIX \u6709 hot reload \u673a\u5236\u53ef\u4ee5\u76f4\u63a5\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e09\u4e2a\u7075\u6d3b\u7684\u914d\u7f6e\u80fd\u529b\u4f53\u73b0\u5728 Apache APISIX \u7684\u5b9e\u73b0\u3002Apache APISIX \u628a\u8def\u7531\u5bf9\u8c61\u5168\u90e8\u7ba1\u7406\u8d77\u6765\uff0c\u5728\u5185\u5b58\u91cc\u6709\u4e00\u5957\u5bf9\u8c61\u7ba1\u7406\u673a\u5236\u3002\u5728 Apache APISIX \u91cc\u7ed9\u67d0\u4e2a API \u52a0\u63d2\u4ef6\uff0c\u751f\u6548\u7684\u7ea7\u522b\u53ef\u4ee5\u7ec6\u5316\u5230 API\uff0c\u6bcf\u4e00\u4e2a API \u90fd\u53ef\u4ee5\u7ed1\u5b9a\u63d2\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u4ece API \u4e0a\u628a\u63d2\u4ef6\u53bb\u6389\u3002 Apache APISIX \u53ef\u4ee5\u7cbe\u7ec6\u5316\u63a7\u5236\u5230\u6bcf\u4e00\u4e2a\u670d\u52a1\u91cc\u9762\u6bcf\u4e00\u4e2a API \u7684\u53ef\u89c2\u6d4b\u6027\u6570\u636e\u91c7\u96c6\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f60\u53ef\u4ee5\u53ea\u91c7\u96c6\u6700\u5173\u5fc3\u7684\u6570\u636e\uff0c\u800c\u4e14\u8fd9\u4e9b\u914d\u7f6e\u90fd\u662f\u52a8\u6001\u751f\u6548\u7684\uff0c\u53ef\u4ee5\u968f\u65f6\u8c03\u6574\u3002"),(0,l.kt)("h4",{id:"\u6d3b\u8dc3\u7684\u793e\u533a"},"\u6d3b\u8dc3\u7684\u793e\u533a"),(0,l.kt)("p",null,"Apache APISIX \u6700\u91cd\u8981\u7684\u4e00\u4e2a\u4f18\u52bf\u662f\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\uff0c\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u53ef\u4ee5\u8ba9\u4ea7\u54c1\u5feb\u901f\u8fed\u4ee3\u3001\u53d8\u5f97\u8d8a\u6765\u8d8a\u5b8c\u5584\uff0c\u8ba9\u5927\u5bb6\u7684\u9700\u6c42\u5f97\u5230\u6ee1\u8db3\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158650-2c4a287f-45a3-4c49-94d1-5be3914e5f69.png",alt:"Apache APISIX \u793e\u533a\u6d3b\u8dc3\u5ea6\u5bf9\u6bd4\u56fe"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u5c55\u793a\u7684\u662f Apache APISIX\uff08\u7eff\u8272\uff09\u3001Kong\uff08\u6d45\u84dd\uff09\u3001mosn\uff08\u9ec4\u8272\uff09\u3001bfe \uff08\u6df1\u84dd\uff09\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\uff0cApache APISX \u589e\u957f\u8d8b\u52bf\u6700\u5feb\uff0c\u66f2\u7ebf\u6700\u4e3a\u9661\u5ced\u3002 Apache APISIX \u793e\u533a\u6d3b\u8dc3\u5ea6\u5728\u540c\u7c7b\u578b\u9879\u76ee\u91cc\u9762\u662f\u6700\u6d3b\u8dc3\u7684\u3002"),(0,l.kt)("h2",{id:"\u7ed3\u5408-apache-skywalking\uff0c\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u505a\u8fdb\u4e00\u6b65\u63d0\u5347"},"\u7ed3\u5408 Apache SkyWalking\uff0c\u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u505a\u8fdb\u4e00\u6b65\u63d0\u5347"),(0,l.kt)("p",null,"Apache APISIX \u4e0e Apache SkyWalking \u7ed3\u5408\u53ef\u4ee5\u505a\u54ea\u4e9b\u63d0\u5347\uff1f\u9664\u4e86 SkyWalking tracing \u63d2\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u5c06tracing\u3001metrics\u3001logging\u3001events \u6c47\u805a\u5230 SkyWalking\uff0c\u501f\u52a9 SkyWalking \u7684\u805a\u5408\u80fd\u529b\u8ba9\u6570\u636e\u5b9e\u73b0\u8054\u52a8\u3002"),(0,l.kt)("h3",{id:"skywalking-satellite"},"SkyWalking Satellite"),(0,l.kt)("p",null,"SkyWalking Satellite \u7531 Apache APISIX\u793e\u533a\u3001Apache SkyWalking \u793e\u533a\u3001\u767e\u5ea6\u6df1\u5ea6\u5408\u4f5c\u5f00\u53d1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158652-130e62e1-32dd-4705-9f24-ceffd039560a.png",alt:"Apache APISIX SkyWalking Satellite"})),(0,l.kt)("p",null,"SkyWalking Satellite \u6309\u7167\u4e0a\u56fe\u6b65\u9aa4\u91c7\u96c6\u6570\u636e\uff0cSkyWalking Satellite \u53ef\u4ee5\u90e8\u7f72\u5230\u66f4\u9760\u8fd1\u4ea7\u751f\u6570\u636e\u7684\u524d\u7aef\uff0c\u4ee5 sidecar \u7684\u5f62\u5f0f\u5b58\u5728\u3002"),(0,l.kt)("p",null,"\u56fe\u4e2d\u4ece\u4e0a\u5f80\u4e0b\u4e1a\u52a1\u8bf7\u6c42\u7ecf\u8fc7 Apache APISIX \u4ee3\u7406\u5230 Upstream\uff0cSatellite \u5728 Apache APISIX \u7684\u65c1\u8fb9\uff0c\u4ee5 sidecar \u7684\u5f62\u5f0f\u90e8\u7f72\uff0c\u6536\u96c6 Apache  APISIX \u7684 tracing\u3001metrics\u3001logging \u8fd9\u4e09\u79cd\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e\uff0c\u901a\u8fc7 GRPC \u534f\u8bae\u53d1\u9001\u7ed9 SkyWalking\u3002"),(0,l.kt)("p",null,"\u6700\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u5728\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u4e0b\uff0cApache  APISIX \u4e0d\u9700\u8981\u505a\u4efb\u4f55\u6539\u52a8\u5c31\u53ef\u4ee5\u76f4\u63a5\u5c06\u4e09\u79cd\u6570\u636e\u7c7b\u578b\u96c6\u6210\u5230 SkyWalking"),"\u3002"),(0,l.kt)("h3",{id:"als-\u65b9\u6848"},"ALS \u65b9\u6848"),(0,l.kt)("p",null,"ALS \uff08Access Log Service\uff09\u5c06\u7ecf\u8fc7 Apache  APISIX \u7684\u8bbf\u95ee\u65e5\u5fd7\u53d1\u9001\u51fa\u6765\uff0c\u5728\u666e\u901a\u7684 access log \u4e0a\u589e\u52a0\u7279\u6b8a\u7684\u5b57\u6bb5\uff0c\u5982\uff1a\u589e\u52a0\u5173\u952e\u5b57\u6bb5\u4fbf\u4e8e\u751f\u6210\u62d3\u6251\u56fe\uff0c\u540c\u65f6\u805a\u5408\u51fa metrics\u3002"),(0,l.kt)("p",null,"ALS \u65b9\u6848\u6700\u5927\u7684\u597d\u5904\u662f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 access log \u65b9\u5f0f\u5206\u6790\u548c\u805a\u5408\u51fa\u62d3\u6251\u56fe\u3001metrics \u3001logging \u8fd9\u4e09\u79cd\u7c7b\u578b\u7684\u6570\u636e\u3002\n\u5728\u4f7f\u7528 Prometheus \u65f6\uff0c\u5982\u679c\u914d\u7f6e\u4e86 URI \u7ea7\u522b\u7684 metrics \u6307\u6807\u7684\u7edf\u8ba1\uff0c\u4f1a\u5bfc\u81f4\u6574\u4e2a metrics \u6025\u5267\u81a8\u80c0\u3002\u56e0\u4e3a URI \u7ea7\u522b\u7684\u670d\u52a1\u53ef\u80fd\u6709\u51e0\u5341\u4e2a\uff0c\u6bcf\u4e2a metrics \u540e\u9762\u53ef\u80fd\u6709\u8bb8\u591a labels\uff0c\u8fd9\u4f1a\u964d\u4f4e\u7f51\u5173\u6027\u80fd\uff0c\u589e\u52a0 metrics \u83b7\u53d6\u96be\u5ea6\u3002",(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 ALS \u65b9\u6848\uff0c\u901a\u8fc7\u6d41\u7684\u65b9\u5f0f\u5c06\u6570\u636e\u53d1\u9001\u7ed9 SkyWalking\uff0c\u628a\u8ba1\u7b97\u7684\u4e8b\u60c5\u4ea4\u7ed9 SkyWalking\uff0c\u540e\u7eed\u4e5f\u65b9\u4fbf\u67e5\u8be2"),"\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6bcf\u9694\u51e0\u79d2\u949f\u62c9\u53d6\u4e00\u6b21\u975e\u5e38\u5e9e\u5927\u7684\u6570\u636e\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h3",{id:"\u5c06-events-\u6574\u5408\u5230-skywalking"},"\u5c06 Events \u6574\u5408\u5230 SkyWalking"),(0,l.kt)("p",null,"\u5e38\u7528\u7684 Events \u5305\u62ec\uff1a\u914d\u7f6e\u5206\u53d1\u3001\u96c6\u7fa4\u53d8\u5316\u3001\u5065\u5eb7\u68c0\u67e5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5206\u53d1"),"\uff1a\u5728\u914d\u7f6e API \u5206\u53d1\u65f6\uff0c\u53ef\u80fd\u4f1a\u65b0\u589e\u8def\u7531\u3001\u4fee\u6539\u8def\u7531\u3001\u5220\u9664\u8def\u7531\u6216\u589e\u52a0\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u53d8\u5316"),"\uff1a\u96c6\u7fa4\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u9700\u8981\u77e5\u9053\u96c6\u7fa4\u91cc\u7684\u670d\u52a1\u6570\u3002\u5982\uff1a\u6269\u5bb9\u65f6 IP \u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u53d8\u5316\u4f53\u73b0\u5728\u7f51\u5173\u6536\u5230\u6d88\u606f\u7684\u65f6\u5019\u3002\u6bcf\u4e2a\u8fc7\u7a0b\u90fd\u662f\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u90fd\u9700\u8981\u88ab\u66b4\u9732\u51fa\u6765\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5065\u5eb7\u68c0\u67e5"),"\uff1a\u4e3b\u52a8\u63a2\u6d4b\u662f\u5426\u5065\u5eb7\uff0c\u4f8b\u5982\uff1a\u4e1a\u52a1\u8bf7\u6c42\u5931\u8d25\u7387\u7a81\u7136\u53d8\u9ad8\uff0c\u4e8b\u4ef6\u63a2\u6d4b\u5230\u4e1a\u52a1\u670d\u52a1\u4e0d\u5065\u5eb7\uff0c\u6b64\u65f6\u53ef\u4ee5\u5feb\u901f\u5b9a\u4f4d\u5230\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,l.kt)("h3",{id:"apache-apisix-\u7684\u6269\u5c55\u673a\u5236\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u5176\u5bf9\u7a33\u5b9a\u6027\u7684\u5f71\u54cd"},"Apache APISIX \u7684\u6269\u5c55\u673a\u5236\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u5176\u5bf9\u7a33\u5b9a\u6027\u7684\u5f71\u54cd"),(0,l.kt)("p",null,"\u95ee\u9898\uff1aApache APISIX \u7684\u6269\u5c55\u673a\u5236\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f\u6269\u5c55\u8fd9\u4e2a\u529f\u80fd\u662f\u5426\u5bf9 Apache APISIX \u672c\u8eab\u7a33\u5b9a\u6027\u6709\u5f71\u54cd\uff1f"),(0,l.kt)("p",null,"\u7b54\uff1aApache APISIX \u6269\u5c55\u673a\u5236\u5f97\u76ca\u4e8e\u5b83\u7684\u67b6\u6784\uff0c\u53ef\u4ee5\u5728\u5404\u4e2a phases \uff08rewrite / access / header_filter / body_filter / preread_filter / log\uff09\u589e\u52a0\u4e1a\u52a1\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u81f3\u4e8e\u7a33\u5b9a\u6027\u65b9\u9762\uff0c Apahce  APISIX \u5df2\u7ecf\u5f00\u6e90\u4e86\u8fd1 50 \u4e2a\u63d2\u4ef6\uff0c\u6bcf\u4e00\u4e2a\u63d2\u4ef6\u90fd\u4f1a\u6709\u7aef\u5230\u7aef\u7684\u6d4b\u8bd5\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u90fd\u662f\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u3001\u662f\u7a33\u5b9a\u53ef\u7528\u7684\u3002\u4f46\u662f\u81ea\u5b9a\u4e49\u63d2\u4ef6\u8981\u9075\u5faa\u4e00\u5b9a\u7684\u89c4\u8303\uff0c\u867d\u7136\u5f88\u7b80\u5355\uff0c\u4f46\u662f\u5927\u5bb6\u4e5f\u4e0d\u80fd\u592a\u968f\u610f\u3002\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u7a33\u5b9a\u6027\u4fdd\u8bc1\uff0c\u9700\u8981\u7531\u4e1a\u52a1\u65b9\u81ea\u5df1\u6765\u4fdd\u8bc1\u3002"),(0,l.kt)("h3",{id:"\u5982\u4f55\u786e\u8ba4\u89c4\u5219\u5df2\u751f\u6548\uff1f"},"\u5982\u4f55\u786e\u8ba4\u89c4\u5219\u5df2\u751f\u6548\uff1f"),(0,l.kt)("p",null,"\u95ee\uff1aNginx \u7684 nginx.conf \u6587\u4ef6\u91cc\u9762\u53ef\u80fd\u914d\u7f6e\u4e86\u5f88\u591a\u89c4\u5219\uff0c\u540e\u9762\u7684\u89c4\u5219\u53ef\u80fd\u88ab\u524d\u9762\u7684\u89c4\u5219\u62e6\u622a\uff0c\u4e0d\u6e05\u695a\u540e\u9762\u7684\u89c4\u5219\u662f\u5426\u751f\u6548\uff0cApache APISIX \u662f\u5426\u6709\u4ec0\u4e48\u65b9\u6cd5\u77e5\u9053\u54ea\u4e9b\u89c4\u5219\u5df2\u751f\u6548\uff1f"),(0,l.kt)("p",null,"\u7b54\uff1aNginx \u7684 nginx.conf \u6587\u4ef6\u914d\u7f6e\u8d8a\u591a\uff0c\u914d\u7f6e\u670d\u52a1\u8d8a\u590d\u6742\uff0c\u8fd9\u4e2a\u6587\u4ef6\u8d8a\u96be\u4ee5\u7ef4\u62a4\u3002\u4f46\u662f\u5728 Apache APISIX \u91cc\u914d\u7f6e\u6587\u4ef6\u662f\u56fa\u5b9a\u7684\uff0cApache APISIX \u5b98\u65b9\u63d0\u4f9b\u7684\u914d\u7f6e\u5c31\u662f\u5728\u5927\u591a\u6570\u573a\u666f\u4e0b\u7684\u6700\u4f18\u914d\u7f6e\uff0c\u5176\u4ed6\u8def\u7531\u7684\u914d\u7f6e\u662f\u901a\u8fc7 API \u7684\u65b9\u5f0f\u914d\u7f6e\u8fdb\u53bb\u7684\uff0c\u8def\u7531\u914d\u7f6e\u90fd\u662f\u5728\u5185\u5b58\u91cc\u9762\u7684\u3002"),(0,l.kt)("p",null,"\u5728\u7ba1\u7406\u65b9\u5f0f\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u7ec4\u7ec7\u65b9\u5f0f\u7ba1\u7406\u4f60\u7684\u8def\u7531\uff0c\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7 Dashboard \u6765\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u4e3e\u4f8b\u8bf4\u660e\uff0c\u6bd4\u5982\u6709\u4e00\u4e2a\u670d\u52a1\u53eb ABC\uff0c\u5728\u8fd9\u4e2a\u670d\u52a1\u4e0b\u9762\u53ef\u4f1a\u6709\u5404\u79cd\u8def\u7531\u5b9a\u4e49\uff0c\u8def\u7531\u5b9a\u4e49\u901a\u8fc7\u5217\u8868\u7684\u65b9\u5f0f\u8fdb\u884c\u67e5\u770b\uff0c\u8def\u7531\u91cc\u6709\u4e00\u4e2a\u5b57\u6bb5\u53eb\u4f18\u5148\u7ea7\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u8def\u7531\u7684\u4f18\u5148\u7ea7\u5b57\u6bb5\uff0c\u8ba9\u76f8\u4f3c\u7684\u8def\u7531\u89c4\u5219\u6309\u7167\u4f18\u5148\u7ea7\u4f9d\u6b21\u5339\u914d\u3002\u53e6\u5916\u4e00\u79cd\u8def\u7531\u67e5\u770b\u65b9\u5f0f\u662f\u5728 dashboard \u4e2d\u7ed9 API \u6253\u4e0a\u6807\u7b7e\uff0c\u53ef\u4ee5\u8ba9\u8def\u7531\u7684\u7ba1\u7406\u53d8\u5f97\u66f4\u52a0\u4eba\u6027\u5316\uff0c\u4fbf\u4e8e\u6309\u7167\u6807\u7b7e\u8fc7\u6ee4\u67e5\u8be2\u8def\u7531\u5217\u8868\u3002"),(0,l.kt)("h2",{id:"\u5173\u4e8e\u4f5c\u8005"},"\u5173\u4e8e\u4f5c\u8005"),(0,l.kt)("p",null,"\u91d1\u536b\uff0cApache APISIX PMC \u548c Apache SkyWalking committer\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158654-2e028970-9e09-4d52-bf72-ab53aa98706b.png",alt:"\u91d1\u536b\u4e2a\u4eba\u4ecb\u7ecd"})))}h.isMDXComponent=!0}}]);