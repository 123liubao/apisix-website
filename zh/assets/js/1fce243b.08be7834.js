(self.webpackChunk=self.webpackChunk||[]).push([[15878],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=a,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63121:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Apache APISIX not affected by NGINX CVE-2021-23017",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",tags:["security","news"]},c={permalink:"/zh/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017",source:"@site/blog/2021-06-07-Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017.md",title:"Apache APISIX not affected by NGINX CVE-2021-23017",description:"@Serendipity96, Apache APISIX contributor from Shenzhen Zhiliu Technology Co.",date:"2021-06-07T00:00:00.000Z",formattedDate:"2021\u5e746\u67087\u65e5",tags:[{label:"security",permalink:"/zh/blog/tags/security"},{label:"news",permalink:"/zh/blog/tags/news"}],readingTime:1.545,truncated:!0,prevItem:{title:"Apache APISIX \u548c Envoy \u6027\u80fd\u5927\u6bd4\u62fc",permalink:"/zh/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison"},nextItem:{title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",permalink:"/zh/blog/2021/05/31/\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90"}},l=[{value:"Apache APISIX",id:"apache-apisix",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Serendipity96"},"@Serendipity96"),", Apache APISIX contributor from ",(0,i.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,i.kt)("p",null,"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ngx_resolver_copy()"),' handles DNS responses with errors. When the "resolver" instruction is used in the NGINX configuration file, it might allow an attacker who is able to forge UDP packets from the DNS server to cause 1-byte memory overwrite, resulting in worker process crash or other potential impacts.'),(0,i.kt)("p",null,"Vulnerability level: high risk, CVSS score 8.1"),(0,i.kt)("p",null,"Affected versions: NGINX 0.6.18 - 1.20.0"),(0,i.kt)("p",null,"If you want to know more details, you can visit the following link\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-23017"},"https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-23017")),(0,i.kt)("p",null,"Two days before this security vulnerability was disclosed, on May 24, ",(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzI1MDU3NjQ5OA==&mid=2247485444&idx=1&sn=5b0bab964490dc2d7a7b25262d9396b2&chksm=e9816319def6ea0fbdafa69426718184e042d6d1cde1d20e410e6ee414756960273f9d625bd2&scene=21#wechat_redirect"},"Apache APISIX released version 2.6"),". This version contains many excellent features, such as support for using Java to write plugins. Apache APISIX 2.6 is not affected by this vulnerability."),(0,i.kt)("p",null,"Apache APISIX only uses some features of NGINX, other core functions, such as\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Route matching"),(0,i.kt)("li",{parentName:"ul"},"IP matching"),(0,i.kt)("li",{parentName:"ul"},"DNS resolve"),(0,i.kt)("li",{parentName:"ul"},"Dynamic Upstream"),(0,i.kt)("li",{parentName:"ul"},"Dynamic Certificate")),(0,i.kt)("p",null,"are all implemented by Apache APISIX instead of the built-in mechanism of NGINX, so it will not be affected by this security vulnerability."),(0,i.kt)("h2",{id:"apache-apisix"},"Apache APISIX"),(0,i.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway that provides rich traffic management features  such as load balancing, dynamic upstream, grayscale publishing, service meltdown , authentication , observability and so on."),(0,i.kt)("p",null,"You can use Apache APISIX to handle traditional north-south traffic, as well as east-west traffic between services."),(0,i.kt)("p",null,"In the cloud-native era, dynamic and observability are standard features of API gateway."),(0,i.kt)("p",null,"This architecture of Apache APISIX can not only meet the elastic scaling and rapid release under the cloud-native architecture, but also be more efficient, flexible and secure. It also cooperates with SkyWalking deeply in observability,  improving service management capability greatly."),(0,i.kt)("p",null,"Welcome to follow and use Apache APISIX: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")))}p.isMDXComponent=!0}}]);