(self.webpackChunk=self.webpackChunk||[]).push([[40414],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=o(a),m=i,f=h["".concat(u,".").concat(m)]||h[m]||s[m]||n;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var o=2;o<n;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55886:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=a(22122),i=a(19756),n=(a(67294),a(3905)),p={title:"Release Apache APISIX 2.3",tags:["APISIX"]},l={permalink:"/zh/releases/2021/02/09/release-apache-apisix-2.3",source:"@site/releases/2021-2-9-release-apache-apisix-2.3.md",title:"Release Apache APISIX 2.3",description:"Change",date:"2021-02-09T00:00:00.000Z",formattedDate:"2021\u5e742\u67089\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:1.235,truncated:!1,prevItem:{title:"Release Apache APISIX Ingress Controller 0.3.0",permalink:"/zh/releases/2021/02/11/release-apache-apisix-ingress-controller-0.3.0"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.2.0",permalink:"/zh/releases/2021/01/19/release-apache-apisix-ingress-controller-0.2.0"}},u=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"change"},"Change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix: use luajit by default when run apisix ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3335"},"#3335")),(0,n.kt)("li",{parentName:"ul"},"feat: use luasocket instead of curl in etcd.lua ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2965"},"#2965"))),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support to communicate with etcd by TLS without verification in command line ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3415"},"#3415")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: chaos test on route could still works when etcd is down ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3404"},"#3404")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: ewma use p2c to improve performance ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3300"},"#3300")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support specifying https in upstream to talk with https backend ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3430"},"#3430")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow customizing lua_package_path & lua_package_cpath ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3417"},"#3417")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow to pass SNI in HTTPS proxy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3420"},"#3420")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support gRPCS ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3411"},"#3411")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow getting upstream health check status via control API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3345"},"#3345")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support dubbo ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3224"},"#3224")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: load balance by least connections ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3304"},"#3304"))),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: kafka-logger implemented reuse kafka producer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3429"},"#3429")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(authz-keycloak): dynamic scope and resource mapping. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3308"},"#3308")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: proxy-rewrite host support host with port ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3428"},"#3428")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(fault-injection): support conditional fault injection using nginx variables ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3363"},"#3363"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix(standalone): require consumer's id to be the same as username ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3394"},"#3394")),(0,n.kt)("li",{parentName:"ul"},"fix: support upstream_id & consumer with grpc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3387"},"#3387")),(0,n.kt)("li",{parentName:"ul"},"fix: set conf info when global rule is hit without matched rule ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3332"},"#3332")),(0,n.kt)("li",{parentName:"ul"},"fix: avoid caching outdated discovery upstream nodes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3295"},"#3295")),(0,n.kt)("li",{parentName:"ul"},"fix: create the health checker in ",(0,n.kt)("inlineCode",{parentName:"li"},"access")," phase ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3240"},"#3240")),(0,n.kt)("li",{parentName:"ul"},"fix: make set_more_retries() work when upstream_type is chash ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2676"},"#2676"))),(0,n.kt)("p",null,"For more changes, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/12"},"Milestone")))}c.isMDXComponent=!0}}]);