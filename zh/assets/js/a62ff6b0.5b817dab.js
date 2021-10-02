"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41008],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(a),h=r,k=d["".concat(i,".").concat(h)]||d[h]||s[h]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43101:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p={title:"Apache APISIX \u52a9\u529b\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u5c0f\u7535\uff0c\u5b9e\u73b0\u4e91\u539f\u751f\u65b9\u6848",author:"\u5b59\u5189",keywords:["Apache APISIX","\u5c0f\u7535","\u4e91\u539f\u751f","\u5bb9\u5668\u5316"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u56fd\u5185\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u2014\u2014\u5c0f\u7535\u901a\u8fc7\u5e94\u7528 Apache APISIX\uff0c\u8fdb\u884c\u516c\u53f8\u4ea7\u54c1\u67b6\u6784\u7684\u4e91\u539f\u751f\u9879\u76ee\u642d\u5efa\u7684\u76f8\u5173\u80cc\u666f\u548c\u5b9e\u8df5\u4ecb\u7ecd",tags:["User Case"]},c=void 0,i={permalink:"/zh/blog/2021/09/18/xiaodian-usercase",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-09-18-xiaodian-usercase.md",title:"Apache APISIX \u52a9\u529b\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u5c0f\u7535\uff0c\u5b9e\u73b0\u4e91\u539f\u751f\u65b9\u6848",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u56fd\u5185\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u2014\u2014\u5c0f\u7535\u901a\u8fc7\u5e94\u7528 Apache APISIX\uff0c\u8fdb\u884c\u516c\u53f8\u4ea7\u54c1\u67b6\u6784\u7684\u4e91\u539f\u751f\u9879\u76ee\u642d\u5efa\u7684\u76f8\u5173\u80cc\u666f\u548c\u5b9e\u8df5\u4ecb\u7ecd",date:"2021-09-18T00:00:00.000Z",formattedDate:"2021\u5e749\u670818\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:1.735,truncated:!0,authors:[{name:"\u5b59\u5189"}],prevItem:{title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",permalink:"/zh/blog/2021/09/24/youpaicloud-usercase"},nextItem:{title:"Apache APISIX \u5728\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/zh/blog/2021/09/16/tencent-cloud"}},o={authorsImageUrls:[void 0]},u=[{value:"\u4e1a\u52a1\u80cc\u666f",id:"\u4e1a\u52a1\u80cc\u666f",children:[]},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 Apache APISIX",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-apache-apisix",children:[{value:"\u7f51\u5173\u9009\u62e9",id:"\u7f51\u5173\u9009\u62e9",children:[]}]},{value:"\u5e94\u7528 Apache APISIX \u540e\u7684\u53d8\u5316",id:"\u5e94\u7528-apache-apisix-\u540e\u7684\u53d8\u5316",children:[{value:"\u6574\u4f53\u67b6\u6784",id:"\u6574\u4f53\u67b6\u6784",children:[]},{value:"\u4e1a\u52a1\u6a21\u578b",id:"\u4e1a\u52a1\u6a21\u578b",children:[]},{value:"\u529f\u80fd\u52a0\u6301",id:"\u529f\u80fd\u52a0\u6301",children:[]}]},{value:"\u57fa\u4e8e Apache APISIX \u7684\u5177\u4f53\u5b9e\u8df5",id:"\u57fa\u4e8e-apache-apisix-\u7684\u5177\u4f53\u5b9e\u8df5",children:[{value:"\u57fa\u4e8e OpenShift \u90e8\u7f72",id:"\u57fa\u4e8e-openshift-\u90e8\u7f72",children:[]},{value:"\u8de8\u7248\u672c\u5e73\u6ed1\u5904\u7406",id:"\u8de8\u7248\u672c\u5e73\u6ed1\u5904\u7406",children:[]},{value:"\u89e3\u51b3 etcd \u538b\u7f29\u95ee\u9898",id:"\u89e3\u51b3-etcd-\u538b\u7f29\u95ee\u9898",children:[]},{value:"\u83b7\u53d6 Client-IP",id:"\u83b7\u53d6-client-ip",children:[]}]},{value:"\u672a\u6765\u671f\u671b",id:"\u672a\u6765\u671f\u671b",children:[]}],s={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86\u56fd\u5185\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u2014\u2014\u5c0f\u7535\u901a\u8fc7\u5e94\u7528 Apache APISIX\uff0c\u8fdb\u884c\u516c\u53f8\u4ea7\u54c1\u67b6\u6784\u7684\u4e91\u539f\u751f\u9879\u76ee\u642d\u5efa\u7684\u76f8\u5173\u80cc\u666f\u548c\u5b9e\u8df5\u4ecb\u7ecd\n\u4f5c\u8005\u5b59\u5189\uff0c\u8fd0\u7ef4\u4e13\u5bb6\u3002\u76ee\u524d\u5c31\u804c\u4e8e\u5c0f\u7535\u5e73\u53f0\u67b6\u6784\u90e8\uff0c\u4e3b\u8981\u8d1f\u8d23 K8s \u96c6\u7fa4\u548c API \u7f51\u5173\u7684\u76f8\u5173\u90e8\u7f72\u3002")),(0,l.kt)("h2",{id:"\u4e1a\u52a1\u80cc\u666f"},"\u4e1a\u52a1\u80cc\u666f"),(0,l.kt)("p",null,"\u5c0f\u7535\u4f5c\u4e3a\u56fd\u5185\u5171\u4eab\u5145\u7535\u5b9d\u670d\u52a1\u5e73\u53f0\uff0c\u76ee\u524d\u8fd8\u5904\u4e8e\u521d\u521b\u9636\u6bb5\u3002\u4ece\u8fd0\u7ef4\u4f53\u7cfb\u3001\u6d4b\u8bd5\u73af\u5883\u7b49\u65b9\u9762\u6765\u8bb2\uff0c\u5f53\u4e0b\u4ea7\u54c1\u7684\u4e1a\u52a1\u4e3b\u8981\u9762\u4e34\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"VM \u4f20\u7edf\u6a21\u5f0f\u90e8\u7f72\uff0c\u5229\u7528\u7387\u4f4e\u4e14\u4e0d\u6613\u6269\u5c55"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u6d4b\u8bd5\u8d44\u6e90\u62a2\u5360"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u5957\u72ec\u7acb\u7684\u6d4b\u8bd5\u73af\u5883\uff08k8s\uff09\uff0c\u6bcf\u6b21\u90e8\u7f72\u7ef4\u62a4\u6b65\u9aa4\u91cd\u590d\u6548\u7387\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Nginx \u914d\u7f6e\u7ba1\u7406\uff0c\u8fd0\u7ef4\u6210\u672c\u6781\u9ad8")),(0,l.kt)("p",null,"\u5728 2020 \u5e74\u521d\uff0c\u6211\u4eec\u51b3\u5b9a\u542f\u52a8\u5bb9\u5668\u5316\u9879\u76ee\uff0c\u6253\u7b97\u5bfb\u627e\u4e00\u4e2a\u73b0\u6709\u65b9\u6848\u6765\u8fdb\u884c\u4e0a\u8ff0\u95ee\u9898\u7684\u89e3\u51b3\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u516c\u53f8\u662f\u4ee5\u300c\u62e5\u62b1\u4e91\u539f\u751f\u300d\u7684\u6001\u5ea6\u6765\u8fdb\u884c\u540e\u7eed\u4e1a\u52a1\u7684\u65b9\u6848\u9009\u62e9\uff0c\u4e3b\u8981\u770b\u91cd\u4e91\u539f\u751f\u6a21\u5f0f\u4e0b\u7684\u5fae\u670d\u52a1\u6539\u9020\u3001DevOps\u3001\u6301\u7eed\u4ea4\u4ed8\u4ee5\u53ca\u6700\u91cd\u8981\u7684\u5bb9\u5668\u5316\u7279\u6027\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631946996654-5cb0668b-bd15-42f8-9446-06ba11449367.png",alt:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e91\u539f\u751f"})),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-apache-apisix"},"\u4e3a\u4ec0\u4e48\u9700\u8981 Apache APISIX"),(0,l.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u4e91\u539f\u751f\u6a21\u5f0f\u7684\u9009\u62e9\uff0c\u6211\u4eec\u5f00\u542f\u4e86\u5bb9\u5668\u5316\u65b9\u6848\u642d\u5efa\u3002\u65b9\u6848\u4e3b\u8981\u6709\u4e09\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u81ea\u7814 Devops \u5e73\u53f0 - DNA"),"\uff1a\u8fd9\u4e2a\u5e73\u53f0\u4e3b\u8981\u662f\u7528\u4e8e\u9879\u76ee\u7ba1\u7406\u3001\u53d8\u66f4\u7ba1\u7406\uff08\u9884\u53d1\u3001\u751f\u4ea7\u73af\u5883\uff09\u3001\u5e94\u7528\u751f\u547d\u5468\u671f\u7ba1\u7406\uff08DNA Operator\uff09\u548c CI/CD \u76f8\u5173\u529f\u80fd\u7684\u5d4c\u5165\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u57fa\u4e8e k8s Namespace \u7684\u9694\u79bb"),"\uff1a\u4e4b\u524d\u6211\u4eec\u6240\u6709\u7684\u5f00\u53d1\u9879\u76ee\u73af\u5883\uff0c\u5305\u62ec\u53d8\u66f4\u73af\u5883\u7b49\u90fd\u5168\u90e8\u6ce8\u518c\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u73af\u5883\u4e0e\u73af\u5883\u4e4b\u95f4\u7684\u76f8\u4e92\u9694\u79bb\u6210\u4e3a\u6211\u4eec\u5fc5\u8981\u7684\u5904\u7406\u8fc7\u7a0b\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u52a8\u6001\u7ba1\u7406\u8def\u7531\u7684\u7f51\u5173\u63a5\u5165\u5c42"),"\uff1a\u8003\u8651\u5230\u5185\u90e8\u7684\u591a\u5e94\u7528\u548c\u591a\u73af\u5883\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u6709\u4e00\u4e2a\u52a8\u6001\u7ba1\u7406\u7684\u7f51\u5173\u63a5\u5165\u5c42\u6765\u8fdb\u884c\u76f8\u5173\u7684\u64cd\u4f5c\u5904\u7406\u3002")),(0,l.kt)("h3",{id:"\u7f51\u5173\u9009\u62e9"},"\u7f51\u5173\u9009\u62e9"),(0,l.kt)("p",null,"\u5728\u7f51\u5173\u9009\u62e9\u4e0a\uff0c\u6211\u4eec\u5bf9\u6bd4\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u4ea7\u54c1\uff1aOpenShift Route\u3001Nginx Ingress \u548c Apache APISIX\u3002"),(0,l.kt)("p",null,"OpenShift 3.0 \u5f00\u59cb\u5f15\u5165 OpenShift Route \uff0c\u4f5c\u7528\u662f\u901a\u8fc7 Ingress Operator \u4e3a Kubernetes \u63d0\u4f9b Ingress Controller\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u5916\u90e8\u5165\u6808\u8bf7\u6c42\u7684\u6d41\u91cf\u8def\u7531\u3002\u4f46\u662f\u5728\u540e\u7eed\u6d4b\u8bd5\u4e2d\uff0c\u529f\u80fd\u652f\u6301\u65b9\u9762\u4e0d\u5b8c\u5584\u4e14\u7ef4\u62a4\u6210\u672c\u5f88\u9ad8\u3002\u540c\u65f6 Nginx Ingres \u4e5f\u5b58\u5728\u7c7b\u4f3c\u7684\u95ee\u9898\uff0c\u4f7f\u7528\u6210\u672c\u548c\u8fd0\u7ef4\u6210\u672c\u504f\u9ad8\u3002"),(0,l.kt)("p",null,"\u5728\u53c2\u4e0e Apache APISIX \u7684\u8c03\u7814\u8fc7\u7a0b\u4e2d\u6211\u4eec\u53d1\u73b0\uff0cApache APISIX \u7684\u6838\u5fc3\u5c31\u662f\u63d0\u4f9b\u8def\u7531\u548c\u8d1f\u8f7d\u5747\u8861\u76f8\u5173\u529f\u80fd\uff0c\u540c\u65f6\u8fd8\u652f\u6301\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8def\u7531\u52a0\u8f7d\u3001\u5b9e\u65f6\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"etcd \u5b58\u50a8\u4e0b\u7684\u65e0\u72b6\u6001\u9ad8\u53ef\u7528\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u6a2a\u5411\u6269\u5c55"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab\uff08CORS\uff09\u3001Proxy Rewrite \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"API \u8c03\u7528\u548c\u81ea\u52a8\u5316\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"Dashboard \u6e05\u6670\u6613\u7528")),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0cApache APISIX \u6709\u7740\u975e\u5e38\u9ad8\u7684\u793e\u533a\u6d3b\u8dc3\u5ea6\uff0c\u4e5f\u7b26\u5408\u6211\u4eec\u8ffd\u6c42\u4e91\u539f\u751f\u7684\u8d8b\u52bf\uff0c\u7efc\u5408\u8003\u8651\u6211\u4eec\u7684\u5e94\u7528\u573a\u666f\u548c Apache APISIX \u7684\u4ea7\u54c1\u4f18\u52bf\uff0c\u6700\u7ec8\u5c06\u9879\u76ee\u73af\u5883\u4e2d\u6240\u6709\u8def\u7531\u90fd\u66ff\u6362\u4e3a Apache APISIX\u3002"),(0,l.kt)("h2",{id:"\u5e94\u7528-apache-apisix-\u540e\u7684\u53d8\u5316"},"\u5e94\u7528 Apache APISIX \u540e\u7684\u53d8\u5316"),(0,l.kt)("h3",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,l.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u7684\u4ea7\u54c1\u67b6\u6784\u4e0e\u5728 K8s \u4e2d\u4f7f\u7528 Apache APISIX \u5927\u4f53\u7c7b\u4f3c\u3002\u4e3b\u8981\u662f\u5c06 Apache APISIX \u7684 Service \u4ee5 LoadBalancer \u7c7b\u578b\u66b4\u9732\u5230\u5916\u90e8\u3002\u7136\u540e\u7528\u6237\u901a\u8fc7\u8bf7\u6c42\u8bbf\u95ee\u4f20\u8f93\u5230 Apache APISIX\uff0c\u518d\u5c06\u8def\u7531\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u76f8\u5173\u670d\u52a1\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632293465988-e166530d-c82c-4676-8d6c-3ccafd60e703.37",alt:"\u6574\u4f53\u67b6\u6784"})),(0,l.kt)("p",null,"\u989d\u5916\u8981\u63d0\u7684\u4e00\u70b9\u662f\uff0c\u4e3a\u4ec0\u4e48\u6211\u4eec\u628a etcd \u653e\u5728\u4e86\u6280\u672f\u6808\u5916\u3002\u4e00\u662f\u56e0\u4e3a\u65e9\u4e9b\u7248\u672c\u89e3\u6790\u57df\u540d\u65f6\u4f1a\u51fa\u73b0\u504f\u5dee\uff0c\u4e8c\u662f\u56e0\u4e3a\u5728\u5185\u90e8\u6211\u4eec\u8fdb\u884c\u7ef4\u62a4\u548c\u5907\u4efd\u7684\u8fc7\u7a0b\u6bd4\u8f83\u7e41\u7410\uff0c\u6240\u4ee5\u5c31\u628a etcd \u5355\u72ec\u62ff\u4e86\u51fa\u6765\u3002"),(0,l.kt)("h3",{id:"\u4e1a\u52a1\u6a21\u578b"},"\u4e1a\u52a1\u6a21\u578b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632293498420-77c63400-7afc-4774-97ee-540bd670f4fe.37",alt:"\u4e1a\u52a1\u6a21\u578b"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u662f\u63a5\u5165 Apache APISIX \u540e\u7684\u4e1a\u52a1\u73af\u5883\u6539\u9020\u6a21\u578b\u3002\u6bcf\u4e2a\u5f00\u53d1\u6216\u9879\u76ee\u8fdb\u884c\u53d8\u66f4\u65f6\uff0cDNA \u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u53d8\u66f4\uff0c\u540c\u65f6\u8f6c\u5316\u4e3a k8s Namespace \u8d44\u6e90\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a k8s Namespace \u672c\u8eab\u5c31\u5177\u5907\u8d44\u6e90\u9694\u79bb\u7684\u529f\u80fd\uff0c\u6240\u4ee5\u5728\u90e8\u7f72\u65f6\u6211\u4eec\u57fa\u4e8e Namespace \u63d0\u4f9b\u4e86\u591a\u5957\u9879\u76ee\u53d8\u66f4\u73af\u5883\uff0c\u540c\u65f6\u5305\u542b\u6240\u6709\u5e94\u7528\u526f\u672c\u5e76\u6ce8\u518c\u5230\u540c\u4e00\u4e2a Eureka\u3002\u6211\u4eec\u6539\u9020\u4e86 Eureka \u4f7f\u5f97\u5b83\u53ef\u4ee5\u652f\u6301\u4e0d\u540c Namespace \u7684\u5e94\u7528\u526f\u672c\u9694\u79bb\uff0c\u4fdd\u8bc1\u4e92\u76f8\u4e0d\u88ab\u8c03\u7528\u3002"),(0,l.kt)("h3",{id:"\u529f\u80fd\u52a0\u6301"},"\u529f\u80fd\u52a0\u6301"),(0,l.kt)("p",null,"\u5c06\u4e0a\u8ff0\u67b6\u6784\u548c\u4e1a\u52a1\u6a21\u578b\u5b9e\u8df5\u8d77\u6765\u540e\uff0c\u6bcf\u4e2a\u9879\u76ee\u53d8\u66f4\u90fd\u4f1a\u4ea7\u751f\u5bf9\u5e94\u7684 Namespace \u8d44\u6e90\uff0c\u540c\u65f6 DNA Operator \u5c31\u4f1a\u53bb\u521b\u5efa\u5bf9\u5e94\u7684 APP \u8d44\u6e90\uff0c\u6700\u540e\u53bb\u751f\u6210\u76f8\u5e94\u7684 Apache APISIX \u8def\u7531\u89c4\u5219\u3002"),(0,l.kt)("h4",{id:"\u529f\u80fd\u4e00\uff1a\u9879\u76ee\u53d8\u66f4\u591a\u73af\u5883"},"\u529f\u80fd\u4e00\uff1a\u9879\u76ee\u53d8\u66f4\u591a\u73af\u5883"),(0,l.kt)("p",null,"\u5728\u53d8\u66f4\u73af\u5883\u4e2d\u6211\u4eec\u6709\u4e24\u79cd\u573a\u666f\uff0c\u4e00\u4e2a\u662f\u70b9\u5bf9\u70b9\u6a21\u5f0f\uff0c\u5373\u4e00\u4e2a\u57df\u540d\u5bf9\u5e94\u4e00\u4e2a\u5e94\u7528\u3002\u5f00\u53d1\u53ea\u9700\u8981\u542f\u7528\u57df\u540d\uff0cDNA \u91cc\u5c31\u4f1a\u5229\u7528 Apache APISIX \u53bb\u751f\u6210\u5bf9\u5e94\u8def\u7531\uff0c\u8fd9\u79cd\u5c31\u662f\u5355\u4e00\u8def\u5f84\u7684\u8def\u7531\u89c4\u5219\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632293545058-511768bc-b9b9-4f2d-ad58-73f206f1b7c2.38",alt:"\u5355\u4e00\u8def\u5f84"})),(0,l.kt)("p",null,"\u53e6\u4e00\u79cd\u573a\u666f\u5c31\u662f\u591a\u7ea7\u8def\u5f84\u8def\u7531\u3002\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u6211\u4eec\u57fa\u4e8e Apache APISIX \u5c06\u9879\u76ee\u53d8\u66f4\u4e2d\u9700\u8981\u7684\u591a\u4e2a APP \u8def\u7531\u6307\u5411\u5230\u5f53\u524d Namespace \u73af\u5883\uff0c\u5176\u5173\u8054 APP \u8def\u7531\u5219\u6307\u5411\u5230\u4e00\u5957\u7a33\u5b9a\u7684 Namespace \u73af\u5883\u4e2d\uff08\u901a\u5e38\u4e3a Stable \u73af\u5883\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632293571396-564db5f5-eef5-45d1-80d8-1d0dded8b9da.38",alt:"\u591a\u7ea7\u8def\u5f84"})),(0,l.kt)("h4",{id:"\u529f\u80fd\u4e8c\uff1a\u81ea\u52a8\u5316\u6d41\u7a0b"},"\u529f\u80fd\u4e8c\uff1a\u81ea\u52a8\u5316\u6d41\u7a0b"),(0,l.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u9879\u76ee\u73af\u5883\u7684\u4e00\u4e9b\u8def\u7531\u89c4\u5219\uff0c\u642d\u914d Apache APISIX \u7684 API \u8c03\u7528\u529f\u80fd\u505a\u4e86\u4e00\u4e2a\u63a7\u5236\u4e2d\u5fc3\uff0c\u96c6\u5408\u4e86\u4e00\u4e9b\u5305\u62ec\u57df\u540d\u524d\u7f00\u548c\u5bf9\u5e94\u7684\u5e94\u7528\u5b9e\u4f8b\u7b49\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u67d0\u4e2a\u65b0\u5e94\u7528\u4e0a\u7ebf\u65f6\uff0c\u53ef\u4ee5\u7533\u8bf7\u4e00\u6761\u76f8\u5e94\u7684\u8def\u7531\u89c4\u5219\uff0c\u7136\u540e\u628a\u89c4\u5219\u52a0\u5230\u63a7\u5236\u4e2d\u5fc3\u4e2d\u3002\u9700\u8981\u8bf7\u6c42\u8def\u7531\u65f6\uff0c\u5c31\u53ef\u4ee5\u4e00\u952e\u542f\u7528\u8fd9\u6761\u8def\u7531\u89c4\u5219\u5e76\u81ea\u52a8\u540c\u6b65\u5230 Apache APISIX\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632294540198-e0a21138-b0ec-490d-966b-55d5bbddd33d.06",alt:"\u81ea\u52a8\u5316\u6d41\u7a0b"})),(0,l.kt)("p",null,"\u53e6\u5916\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5355\u4e00\u666e\u901a\u8def\u7531\u7533\u8bf7\uff0c\u5305\u62ec\u7ebf\u4e0a\u73af\u5883\u548c\u6d4b\u8bd5\u73af\u5883\uff0c\u6216\u8005\u4e00\u4e9b\u5bf9\u5916\u516c\u7f51\u7684\u66b4\u9732\u4e0e\u6d4b\u8bd5\u9700\u6c42\u7b49\uff0c\u4e5f\u53ef\u4ee5\u8c03\u7528 Apache APISIX \u63a5\u53e3\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632294623255-1a9762ab-59b4-4798-82b8-e9fc3e32f571.07",alt:"\u666e\u901a\u8def\u7531"})),(0,l.kt)("h2",{id:"\u57fa\u4e8e-apache-apisix-\u7684\u5177\u4f53\u5b9e\u8df5"},"\u57fa\u4e8e Apache APISIX \u7684\u5177\u4f53\u5b9e\u8df5"),(0,l.kt)("h3",{id:"\u57fa\u4e8e-openshift-\u90e8\u7f72"},"\u57fa\u4e8e OpenShift \u90e8\u7f72"),(0,l.kt)("p",null,"OpenShift \u5177\u6709\u975e\u5e38\u4e25\u683c\u7684 SCC \u673a\u5236\uff0c\u5728\u5229\u7528 OpenShift \u53bb\u90e8\u7f72 Apache APISIX \u65f6\u9047\u5230\u4e86\u5f88\u591a\u95ee\u9898\uff0c\u6240\u4ee5\u6bcf\u6b21\u53d1\u7248\u90fd\u8981\u91cd\u65b0\u53bb\u505a\u7f16\u8bd1\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u57fa\u4e8e Apache APISIX \u63d0\u4f9b\u7684 Docker \u955c\u50cf\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u65e5\u5e38\u7684\u4e00\u4e9b\u57fa\u7840\u8f6f\u4ef6\u8fdb\u884c\u4e86\u66f4\u65b0\uff0c\u6bd4\u5982\u8c03\u4f18\u548c\u95ee\u9898\u67e5\u770b\uff0c\u901a\u8fc7 Image Rebuild \u529f\u80fd\u4e0a\u4f20\u5230\u5185\u90e8\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("h3",{id:"\u8de8\u7248\u672c\u5e73\u6ed1\u5904\u7406"},"\u8de8\u7248\u672c\u5e73\u6ed1\u5904\u7406"),(0,l.kt)("p",null,"\u6211\u4eec\u4e00\u5f00\u59cb\u4f7f\u7528\u7684 Apache APISIX \u4e3a 1.5 \u7248\u672c\uff0c\u5728\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u7ecf\u5386\u4e86\u7c7b\u4f3c etcd v2 \u7248\u672c\u6027\u80fd\u4e0b\u964d\u3001\u589e\u52a0\u4e86 CORS \u63d2\u4ef6\u5f3a\u6821\u9a8c\u7b49\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632294589632-e113850d-57a6-4a82-be21-63ec8e78f842.png",alt:"\u5e73\u6ed1\u5904\u7406"})),(0,l.kt)("p",null,"\u57fa\u4e8e\u6b64\uff0c\u6211\u4eec\u91c7\u53d6\u4e86\u7248\u672c\u5207\u6d41\u7684\u65b9\u6848\uff0c\u65b0\u7248\u672c\u542f\u7528\u5e76\u521b\u5efa\u65b0\u7684 Service \u4ee5\u53ca\u66b4\u9732\u76f8\u5173 SLB \u4fe1\u606f\u3002\u901a\u8fc7 Service \u7684 Selector \u5c5e\u6027\uff0c\u5c06 Gateway \u5207\u6362\u5230\u65b0\u7248\u672c\u7684 Apache APISIX \u4e2d\u3002\u53e6\u4e00\u65b9\u9762\u6211\u4eec\u4e5f\u4f1a\u5c06\u6d41\u91cf\u8fdb\u884c\u5207\u5206\u5904\u7406\uff0c\u5c06\u90e8\u5206\u6d41\u91cf\u901a\u8fc7 DNS \u89e3\u6790\u5230\u65b0\u7248\u672c Apache APISIX SLB \u5730\u5740\uff0c\u6765\u5b9e\u73b0\u7248\u672c\u66f4\u8fed\u7684\u5e73\u6ed1\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"\u89e3\u51b3-etcd-\u538b\u7f29\u95ee\u9898"},"\u89e3\u51b3 etcd \u538b\u7f29\u95ee\u9898"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u671f\u95f4\u6211\u4eec\u4e5f\u89c2\u5bdf\u5230 Load \u4e00\u76f4\u7a81\u9ad8\u4e0d\u4e0b\u7684\u60c5\u51b5\uff0c\u7ecf\u68c0\u67e5\u53d1\u73b0 etcd \u5185\u7684\u6570\u636e\u91cf\u5df2\u8fbe\u5230 600 \u591a\u5146\uff0c\u6240\u4ee5\u6211\u4eec\u91c7\u53d6\u4e86\u5b9a\u671f\u538b\u7f29 etcd \u7684\u63aa\u65bd\uff0c\u5c06\u5386\u53f2\u4e8b\u7269\u6570\u636e\u5168\u90e8\u6e05\u9664\u3002\u5177\u4f53\u4ee3\u7801\u53ef\u53c2\u8003\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ETCDCTL_API=3 etcdctl --endpoints=http://etcd-1:2379 compact 1693729\nETCDCTL_API=3 etcdctl --endpoints=http://etcd-1:2379 defrag\n")),(0,l.kt)("h3",{id:"\u83b7\u53d6-client-ip"},"\u83b7\u53d6 Client-IP"),(0,l.kt)("p",null,"\u5728\u7ebf\u4e0a\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u83b7\u53d6\u5230\u6e90 IP \u53bb\u505a\u76f8\u5173\u7684\u4e1a\u52a1\u5904\u7406\u3002\u521a\u597d Apache APISIX \u63d0\u4f9b\u4e86\u300cX-Real-IP\u300d\u7684\u529f\u80fd\uff0c\u901a\u8fc7\u914d\u7f6e real_ip_header \u548c\u5f00\u542f externalTrafficPolicy \u7684 Local \u6a21\u5f0f\u8fdb\u884c\u76f8\u5173\u83b7\u53d6\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u672a\u6765\u671f\u671b"},"\u672a\u6765\u671f\u671b"),(0,l.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u5c0f\u7535\u73b0\u5728\u662f\u4e3b\u505a\u5171\u4eab\u5145\u7535\u5b9d\u4e1a\u52a1\u573a\u666f\uff0c\u6240\u4ee5\u5728\u5c5e\u6027\u4e0a\u4e5f\u662f\u504f\u7269\u8054\u7f51\u65b9\u5411\u3002"),(0,l.kt)("p",null,"\u4ece\u4e1a\u52a1\u5c42\u9762\u51fa\u53d1\uff0c\u6211\u4eec\u4e5f\u8fd8\u6709\u4e00\u4e9b\u91cd\u8981\u4e1a\u52a1\u6bd4\u5982 MQTT \u7c7b\u578b\u7684\u5e94\u7528\u3002\u76ee\u524d\u5b83\u4eec\u5728\u5bb9\u5668\u5185\u8fd8\u662f\u4ee5 SLB \u6a21\u5f0f\u53bb\u66b4\u9732\u7684\uff0c\u5e0c\u671b\u540e\u7eed\u4e5f\u53ef\u4ee5\u63a5\u5165\u5230\u6574\u4e2a Apache APISIX \u96c6\u7fa4\u91cc\u3002"),(0,l.kt)("p",null,"\u4ece\u524d\u7aef\u5c42\u9762\u6765\u8bb2\uff0c\u76ee\u524d\u7684\u524d\u7aef\u5e94\u7528\u8fd8\u662f\u90e8\u7f72\u5728\u5bb9\u5668\u91cc\uff0c\u540e\u7eed\u6211\u4eec\u4e5f\u6253\u7b97\u5c06\u524d\u7aef\u5e94\u7528\u76f4\u63a5\u63a5\u5165 Apache APISIX\uff0c\u901a\u8fc7 Proxy Rewrite \u63d2\u4ef6\u529f\u80fd\u76f4\u63a5\u6307\u5411\u6211\u4eec\u7684\u963f\u91cc\u4e91 OSS \u57df\u540d\u3002\u8fd9\u6837\u53ef\u4ee5\u8282\u7701\u5bb9\u5668\u90e8\u7f72\u7684\u8d44\u6e90\uff0c\u8fdb\u884c\u66f4\u65b9\u4fbf\u5730\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u5728\u5bf9 Apache APISIX \u9879\u76ee\u4e0a\uff0c\u6211\u4eec\u7ecf\u8fc7\u5b9e\u8df5\u90e8\u7f72\u4e5f\u4ea7\u751f\u4e86\u4e00\u4e9b\u6539\u8fdb\u9700\u6c42\uff0c\u5e0c\u671b\u540e\u7eed Apache APISIX \u7684\u7248\u672c\u66f4\u8fed\u4e2d\u53ef\u4ee5\u8fdb\u884c\u76f8\u5173\u529f\u80fd\u7684\u652f\u6301\u6216\u5b8c\u5584\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6280\u672f\u7ba1\u7406\u5c42\u9762\u8fdb\u884c\u591a\u96c6\u7fa4\u529f\u80fd\u7684\u6dfb\u52a0"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u5c42\u9762\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u7528\u6237\u6743\u9650\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ol"},"\u529f\u80fd\u5c42\u9762\u652f\u6301 SSL \u8bc1\u4e66\u6eda\u52a8\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ol"},"Apache APISIX-Ingress-Controller \u76f8\u5173\u4e1a\u52a1\u63a5\u5165")))}d.isMDXComponent=!0}}]);