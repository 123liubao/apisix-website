"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46420],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},h),{},{components:n})):r.createElement(d,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5545:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return h},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",author:"Yuansheng Wang",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Envoy","Apache APISIX","Service Mesh","API Gateway","Performance"],description:"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.",tags:["Technology"]},s=void 0,l={permalink:"/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison",source:"@site/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison.md",title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",description:"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.",date:"2021-06-10T00:00:00.000Z",formattedDate:"June 10, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:5.98,truncated:!0,authors:[{name:"Yuansheng Wang",url:"https://github.com/membphis",imageURL:"https://avatars.githubusercontent.com/u/6814606?v=4"}],prevItem:{title:"Chaos Mesh Helps Apache APISIX Improve Stability",permalink:"/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability"},nextItem:{title:"Apache APISIX not affected by NGINX CVE-2021-23017",permalink:"/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017"}},c={authorsImageUrls:[void 0]},h=[{value:"Build Environment Preparation",id:"build-environment-preparation",children:[]},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f",children:[]},{value:"Route Configuration",id:"route-configuration",children:[]},{value:"Results",id:"results",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.")),(0,o.kt)("p",null,"I learned about Envoy at the CNCF technology sharing session and did performance tests on Apache APISIX and Envoy after the session."),(0,o.kt)("p",null,"At a technical sharing session organized by CNCF, I heard about Envoy for the first time, and the guest speaker talked a lot about it, but all I can recall is a particularly novel concept \u201ccommunication bus\u201d. This is how the official website describes it."),(0,o.kt)("p",null,"\u201cEnvoy is an L7 proxy and communication bus designed for large modern SOA (Service Oriented Architecture) architectures\u201d"),(0,o.kt)("p",null,"In other words, Envoy is to solve the Server Mesh field and the birth of L7 proxy software. I found a diagram online. My understanding of Envoy is probably the following deployment architecture (please correct me if I am wrong)."),(0,o.kt)("p",null,"Since it is a proxy software for L7, as an experienced user in the OpenResty community for many years, naturally I can\u2019t help but use it to engage in comparison."),(0,o.kt)("p",null,"The object we chose to test is Apache APISIX, which is an API gateway based on OpenResty implementation. (In fact, it is also an L7 proxy and then added routing, authentication, flow restriction, dynamic upstream, and other features)"),(0,o.kt)("p",null,"Why did I choose it? Because once I heard about the great routing implementation of this product during a community share. Since our business routing system is in a mess, I downloaded the source code of Apache APISIX and found that it is an awesome API gateway, beating all similar products I\u2019ve seen, so I was impressed by it!"),(0,o.kt)("p",null,"Here is a diagram from the Apache APISIX official website, a diagram explains things better than words, you can see how Apache APISIX works."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617002.png",alt:"APISIX architechture"})),(0,o.kt)("p",null,"Let\u2019s get started, first we go to the official website to find the most versions of two products: Apache APISIX 1.5 and Envoy 1.14 (the latest version at the time of writing this article)."),(0,o.kt)("h2",{id:"build-environment-preparation"},"Build Environment Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stress test client: wrk."),(0,o.kt)("li",{parentName:"ul"},"Testing main metrics including: gateway latency, QPS and whether it scales linearly."),(0,o.kt)("li",{parentName:"ul"},"Test environment: Microsoft Cloud Linux (ubuntu 18.04), Standard D13 v2 (8 vcpus, 56 GiB memory)."),(0,o.kt)("li",{parentName:"ul"},"Test method 1: single-core run for side-by-side comparison (since they are both based on epoll IO model, single-core crush test is used to verify their processing power)."),(0,o.kt)("li",{parentName:"ul"},"Test method 2: using multicore to run a side-by-side comparison, mainly to verify whether their overall processing power can grow linearly under the scenario of adding more (processes|threads).")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u573a\u666f"},"\u6d4b\u8bd5\u573a\u666f"),(0,o.kt)("p",null,"We built an upstream server with NGINX, configured it with 2 workers, and received a request to directly answer 4k content, with the following reference configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'server {\n  listen 1980;\n\n  access_log off;\n  location = /hello {\n    echo_duplicate 400 "1234567890";\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The network architecture schematic is as follows: (green normal load, not run full. Red is a high pressure load, to run the process resources full, mainly CPU)\n\u662f CPU\uff09")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617003.png",alt:"test result"})),(0,o.kt)("h2",{id:"route-configuration"},"Route Configuration"),(0,o.kt)("p",null,"First we find the Apache APISIX Getting Started configuration guide and we add a route to /hello with the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -X PUT -d \'{\u3001\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }}\'\n')),(0,o.kt)("p",null,"Note that the proxy_cache and proxy_mirror plugins are not started here, as Envoy does not have similar functionality."),(0,o.kt)("p",null,"Then we add a route to Envoy by referring to the official Envoy pressure test guide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'static_resources:\n  listeners:\n  - name: listener_0\n    address:\n      socket_address: { address: "0.0.0.0", port_value: 10000 }\n\n    filter_chains:\n    - filters:\n      - name: envoy.http_connection_manager\n        config:\n          generate_request_id: false,\n          stat_prefix: ingress_http\n          route_config:\n            name: local_route\n            virtual_hosts:\n            - name: local_service\n              domains: ["*"]\n              routes:\n              - match: { prefix: "/hello" }\n                route: { cluster: service_test }\n          http_filters:\n          - name: envoy.router\n            config:\n              dynamic_stats: false\n  clusters:\n  - name: service_test\n    connect_timeout: 0.25s\n    type: LOGICAL_DNS\n    dns_lookup_family: V4_ONLY\n    lb_policy: ROUND_ROBIN\n    hosts: [{ socket_address: { address: "127.0.0.1", port_value: 1980 }}]\n    circuit_breakers:\n      thresholds:\n        - priority: DEFAULT\n          max_connections: 1000000000\n          max_pending_requests: 1000000000\n          max_requests: 1000000000\n          max_retries: 1000000000\n        - priority: HIGH\n        max_connections: 1000000000\n        max_pending_requests: 1000000000\n        max_requests: 1000000000\n        max_retries: 1000000000\n')),(0,o.kt)("p",null,"The generate",(0,o.kt)("em",{parentName:"p"},"request_id, dynamic_stats and circuit_breakers sections above are turned on by default inside Envoy, but they are not used in this compression test and need to be turned off explicitly or set to oversize thresholds to improve performance. (Can someone explain to me why this is so complicated to configure -"),"-!)"),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("p",null,"Single route without any plugins turned on. Turn on different CPU counts for full load stress test."),(0,o.kt)("p",null,"Note: For NGINX called worker number, Envoy is concurrent, in order to unify the number of workers called after."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Workers")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"APISIX QPS")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"APISIX Latency")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Envoy QPS")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Envoy Latency")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"1 worker")),(0,o.kt)("td",{parentName:"tr",align:"left"},"18608.4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.96"),(0,o.kt)("td",{parentName:"tr",align:"left"},"15625.56"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.02")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"2 workers")),(0,o.kt)("td",{parentName:"tr",align:"left"},"34975.8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.01"),(0,o.kt)("td",{parentName:"tr",align:"left"},"29058.135"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"3 workers")),(0,o.kt)("td",{parentName:"tr",align:"left"},"52334.8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.02"),(0,o.kt)("td",{parentName:"tr",align:"left"},"42561.125"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.12")))),(0,o.kt)("p",null,"Note: The raw data is publicly available at ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/aifeiasdf/9fc4585f6404e3a0a70c568c2a14b9c9"},"gist")," preview."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617004.png",alt:"test result"})),(0,o.kt)("p",null,"QPS: The number of requests completed per second, the higher the number the better, the higher the value means the more requests can be completed per unit time. From the QPS results, Apache APISIX performance is about 120% of Envoy\u2019s, and the higher the number of cores, the bigger the QPS difference."),(0,o.kt)("p",null,"Latency: Latency per request, the smaller the value the better. It represents how long it takes to receive an answer per request from the time it is sent. For reverse proxy scenarios, the smaller the value, the smaller the impact on the request will be. From the results, Envoy\u2019s per-request latency is 6\u201310% more than Apache APISIX, and the higher the number of cores the higher the latency."),(0,o.kt)("p",null,"We can see that the difference between the two metrics in the single-worker thread|process mode, QPS and Latency is not large, but with the increase in the number of threads|processes their gap is gradually enlarged, here I analyze that there may be two reasons, NGINX in the high concurrency scenario with multiple workers and the system IO model for interaction is not more advantageous, on the other hand, also On the other hand, NGINX itself may be more \u201cstingy\u201d in terms of memory and CPU usage in its implementation, so that the cumulative performance advantage can be evaluated in detail later."),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"In general, Apache APISIX is slightly better than Envoy in terms of response latency and QPS, and due to NGINX\u2019s multi-worker collaboration method, which is more advantageous in high concurrency scenarios, Apache APISIX\u2019s performance improvement is more obvious than Envoy\u2019s after opening multiple worker processes. The bus design of Envoy gives it a unique advantage in handling east-west traffic, while the performance and latency of Apache APISIX gives it a massive throughput capability in handling north-south traffic.\nApache APISIX"))}p.isMDXComponent=!0}}]);