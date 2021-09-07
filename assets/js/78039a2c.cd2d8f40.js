(self.webpackChunk=self.webpackChunk||[]).push([[6345],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(a),f=n,m=h["".concat(o,".").concat(f)]||h[f]||s[f]||i;return a?r.createElement(m,p(p({ref:t},u),{},{components:a})):r.createElement(m,p({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var c=2;c<i;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74093:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return u}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),p={title:"Release Apache APISIX 2.4",tags:["APISIX"]},l={permalink:"/releases/2021/03/05/release-apache-apisix-2.4",source:"@site/releases/2021-3-5-release-apache-apisix-2.4.md",title:"Release Apache APISIX 2.4",description:"Change",date:"2021-03-05T00:00:00.000Z",formattedDate:"March 5, 2021",tags:[{label:"APISIX",permalink:"/releases/tags/apisix"}],readingTime:.765,truncated:!1,prevItem:{title:"Release Apache APISIX Ingress Controller 0.4.0",permalink:"/releases/2021/03/12/release-apache-apisix-ingress-controller-0.4.0"},nextItem:{title:"Release Apache APISIX Dashboard 2.4",permalink:"/releases/2021/02/12/release-apache-apisix-dashboard-2.4"}},o=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],c={toc:o};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"change"},"Change"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"change: global rules should not be executed on the internal api by default ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3396"},"#3396")),(0,i.kt)("li",{parentName:"ul"},"change: default to cache DNS record according to the TTL ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3530"},"#3530"))),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support SRV record ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3686"},"#3686")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add dns discovery ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3629"},"#3629")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add consul kv discovery module ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3615"},"#3615")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support to bind plugin config by ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin_config_id")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3567"},"#3567")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support listen http2 with plaintext ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3547"},"#3547")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support DNS AAAA record ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3484"},"#3484"))),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: the traffic-split plugin supports upstream_id ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3512"},"#3512")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(zipkin): support b3 req header ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3551"},"#3551"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix(chash): ensure retry can try every node ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3651"},"#3651")),(0,i.kt)("li",{parentName:"ul"},"fix: script does not work when the route is bound to a service ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3678"},"#3678")),(0,i.kt)("li",{parentName:"ul"},"fix: use openssl111 in openresty dir in precedence ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3603"},"#3603")),(0,i.kt)("li",{parentName:"ul"},"fix(zipkin): don't cache the per-req sample ratio ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3522"},"#3522"))),(0,i.kt)("p",null,"For more changes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/13"},"Milestone")))}u.isMDXComponent=!0}}]);