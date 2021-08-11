(self.webpackChunk=self.webpackChunk||[]).push([[94657],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62293:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"Debug Mode"},o={unversionedId:"architecture-design/debug-mode",id:"version-t/architecture-design/debug-mode",isDocsHomePage:!1,title:"Debug Mode",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-t/architecture-design/debug-mode.md",sourceDirName:"architecture-design",slug:"/architecture-design/debug-mode",permalink:"/zh/docs/apisix/architecture-design/debug-mode",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/debug-mode.md",version:"t",frontMatter:{title:"Debug Mode"},sidebar:"version-t/docs",previous:{title:"Router",permalink:"/zh/docs/apisix/architecture-design/router"},next:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/apisix/getting-started"}},p=[{value:"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f",id:"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f",children:[]},{value:"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f",id:"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f"},"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f"),(0,l.kt)("p",null,"\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.enable_debug")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u53ef\u5f00\u542f\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"/hello")," \u5f00\u542f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-conn"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"limit-count"),"\u63d2\u4ef6\uff0c\u8fd9\u65f6\u5019\u5e94\u7b54\u5934\u4e2d\u4f1a\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Plugins: limit-conn, limit-count"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:1984/hello -i\nHTTP/1.1 200 OK\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nApisix-Plugins: limit-conn, limit-count\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 1\nServer: openresty\n\nhello world\n")),(0,l.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u4fe1\u606f\u65e0\u6cd5\u901a\u8fc7 HTTP \u5e94\u7b54\u5934\u4f20\u9012\uff0c\u6bd4\u5982\u63d2\u4ef6\u5728 stream \u5b50\u7cfb\u7edf\u91cc\u9762\u6267\u884c\uff0c\n\u90a3\u4e48\u8fd9\u4e2a\u4fe1\u606f\u4f1a\u4ee5 warn \u7b49\u7ea7\u65e5\u5fd7\u5199\u5165\u5230\u9519\u8bef\u65e5\u5fd7\u4e2d\u3002"),(0,l.kt)("h3",{id:"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f"},"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f"),(0,l.kt)("p",null,"\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," \u4e2d\u7684\u9009\u9879\uff0c\u5f00\u542f\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u3002\u7531\u4e8e APISIX \u670d\u52a1\u542f\u52a8\u540e\u662f\u6bcf\u79d2\u5b9a\u671f\u68c0\u67e5\u8be5\u6587\u4ef6\uff0c\n\u5f53\u53ef\u4ee5\u6b63\u5e38\u8bfb\u53d6\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"#END")," \u7ed3\u5c3e\u65f6\uff0c\u624d\u8ba4\u4e3a\u6587\u4ef6\u5904\u4e8e\u5199\u5b8c\u5173\u95ed\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u6587\u4ef6\u6700\u540e\u4fee\u6539\u65f6\u95f4\u5224\u65ad\u6587\u4ef6\u5185\u5bb9\u662f\u5426\u6709\u53d8\u5316\uff0c\u5982\u6709\u53d8\u5316\u5219\u91cd\u65b0\u52a0\u8f7d\uff0c\u5982\u6ca1\u53d8\u5316\u5219\u8df3\u8fc7\u672c\u6b21\u68c0\u67e5\u3002\n\u6240\u4ee5\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u7684\u5f00\u542f\u3001\u5173\u95ed\u90fd\u662f\u70ed\u66f4\u65b0\u65b9\u5f0f\u5b8c\u6210\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\u3002\u5f00\u542f\u540e\u5c06\u6253\u5370\u6307\u5b9a\u6a21\u5757\u65b9\u6cd5\u7684\u8bf7\u6c42\u53c2\u6570\u6216\u8fd4\u56de\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\u7684\u6a21\u5757\u5217\u8868\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.log_level"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u8bf7\u6c42\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("td",{parentName:"tr",align:null},"warn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_input_args"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5370\u8f93\u5165\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_return_value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5370\u8fd4\u56de\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"\u8bf7\u770b\u4e0b\u9762\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"hook_conf:\n  enable: false # \u662f\u5426\u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\n  name: hook_phase # \u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\u7684\u6a21\u5757\u5217\u8868\u540d\u79f0\n  log_level: warn # \u65e5\u5fd7\u7ea7\u522b\n  is_print_input_args: true # \u662f\u5426\u6253\u5370\u8f93\u5165\u53c2\u6570\n  is_print_return_value: true # \u662f\u5426\u6253\u5370\u8fd4\u56de\u503c\n\nhook_phase: # \u6a21\u5757\u51fd\u6570\u5217\u8868\uff0c\u540d\u5b57\uff1ahook_phase\n  apisix: # \u5f15\u7528\u7684\u6a21\u5757\u540d\u79f0\n    - http_access_phase # \u51fd\u6570\u540d\uff1a\u6570\u7ec4\n    - http_header_filter_phase\n    - http_body_filter_phase\n    - http_log_phase\n#END\n")))}c.isMDXComponent=!0}}]);