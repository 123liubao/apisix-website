(self.webpackChunk=self.webpackChunk||[]).push([[92074],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Yiyiyimu",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"},s={permalink:"/zh/blog/2021/08/12/Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",source:"@site/blog/2021-08-12-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability.md",title:"Chaos Mesh Helps Apache APISIX Improve System Stability",description:"@Yiyiyimu, Apache APISIX committer.",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[],readingTime:5.38,truncated:!0,prevItem:{title:"Using the Apache APISIX OpenID Connect Plugin for Centralized Authentication",permalink:"/zh/blog/2021/08/16/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication"},nextItem:{title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",permalink:"/zh/blog/2021/08/11/interview-TuZhengsong"}},c=[{value:"Our pain points",id:"our-pain-points",children:[]},{value:"Why we chose Chaos Mesh",id:"why-we-chose-chaos-mesh",children:[]},{value:"How we use Chaos Mesh in APISIX",id:"how-we-use-chaos-mesh-in-apisix",children:[{value:"Scenario #1",id:"scenario-1",children:[]},{value:"Scenario #2",id:"scenario-2",children:[]}]},{value:"Our future plans",id:"our-future-plans",children:[{value:"Run a chaos test in E2E simulation scenarios",id:"run-a-chaos-test-in-e2e-simulation-scenarios",children:[]},{value:"Add chaos tests to more Apache APISIX projects",id:"add-chaos-tests-to-more-apache-apisix-projects",children:[]},{value:"Add features to Chaos Mesh",id:"add-features-to-chaos-mesh",children:[]}]}],l={toc:c};function h(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yiyiyimu"},"@Yiyiyimu"),", Apache APISIX committer.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a cloud-native, high-performance, scaling microservices API gateway. It is one of the Apache Software Foundation's top-level projects and serves hundreds of companies around the world, processing their mission-critical traffic, including finance, the Internet, manufacturing, retail, and operators. Our customers include NASA, the European Union\u2019s digital factory, China Mobile, and Tencent."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Apache APISIX architecture",src:n(74835).Z})),(0,a.kt)("p",null,"As our community grows, Apache APISIX\u2019s features more frequently interact with external components, making our system more complex and increasing the possibility of errors. To identify potential system failures and build confidence in the production environment, we introduced the concept of Chaos Engineering."),(0,a.kt)("p",null,"In this post, we\u2019ll share how we use ",(0,a.kt)("a",{parentName:"p",href:"https://chaos-mesh.org/docs/"},"Chaos Mesh\xae")," to improve our system stability."),(0,a.kt)("h2",{id:"our-pain-points"},"Our pain points"),(0,a.kt)("p",null,"Apache APISIX processes tens of billions of requests a day. At that volume level, our users have noticed a couple of issues:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario #1:")),(0,a.kt)("p",null,"In Apache APISIX\u2019s configuration center, when unexpectedly high network latency occurs between etcd and Apache APISIX, can Apache APISIX still filter and forward traffic normally?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario #2:")),(0,a.kt)("p",null,"When a node in the etcd cluster fails and the cluster can still run normally, an error is reported for the node\u2019s interaction with the Apache APISIX admin API."),(0,a.kt)("p",null,"Although Apache APISIX has covered many scenarios through unit, end-to-end (E2E), and fuzz tests in continuous integration (CI), it has not covered the interaction scenario with external components. If the system behaves abnormally, for example, if the network jitters, a hard disk fails, or a process is killed, can Apache APISIX give appropriate error messages? Can it keep running or restore itself to normal operation?"),(0,a.kt)("h2",{id:"why-we-chose-chaos-mesh"},"Why we chose Chaos Mesh"),(0,a.kt)("p",null,"To test these user scenarios and to discover similar problems before our product goes into production, our community decided to use Chaos Mesh for chaos testing."),(0,a.kt)("p",null,"Chaos Mesh is a cloud-native Chaos Engineering platform that features all-around fault injection methods for complex systems on Kubernetes, covering faults in Pod, the network, file system, and even the kernel. It helps users find weaknesses in the system and ensures that the system can resist out-of-control situations in the production environment."),(0,a.kt)("p",null,"Like Apache APISIX, Chaos Mesh has an active open source community. We know that an active community can ensure stable software use and rapid iteration. This makes Chaos Mesh more attractive."),(0,a.kt)("h2",{id:"how-we-use-chaos-mesh-in-apisix"},"How we use Chaos Mesh in APISIX"),(0,a.kt)("p",null,'Chaos Engineering has grown beyond simple fault injection and now forms a complete methodology. To create a chaos experiment, we determined what the normal operation or "steady state" of our application should be. We then introduced potential problems to see how the system responded. If the problems knocked the application out of its steady state, we fixed them.'),(0,a.kt)("p",null,"Now, we\u2019ll take the two scenarios we mentioned to show you how we use Chaos Mesh in Apache APISIX."),(0,a.kt)("h3",{id:"scenario-1"},"Scenario #1"),(0,a.kt)("p",null,"We deployed a Chaos Engineering experiment using the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We found metrics to measure whether Apache APISIX is running normally. In the test, the most important method is to use Grafana to monitor the Apache APISIX\u2019s running metrics. We extracted data from Prometheus in CI for comparison. Here, we used the routing and forwarding requests per second (RPS) and etcd connectivity as evaluation metrics. We analyzed the log. For Apache APISIX, we checked Nginx\u2019s error log to determine whether there was an error and whether the error was in line with our expectations.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We performed a test in the control group. We found that both ",(0,a.kt)("inlineCode",{parentName:"p"},"create route")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"access route")," were successful, and we could connect to etcd. We recorded the RPS.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We used network chaos to add a five second network latency and then retested. This time, ",(0,a.kt)("inlineCode",{parentName:"p"},"set route")," failed, ",(0,a.kt)("inlineCode",{parentName:"p"},"get route")," succeeded, etcd could be connected to, and RPS had no significant change compared to the previous experiment. The experiment met our expectations."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High network latency occurs between etcd and Apache APISIX",src:n(97425).Z})),(0,a.kt)("h3",{id:"scenario-2"},"Scenario #2"),(0,a.kt)("p",null,"After we conducted the same experiment as above in the control group, we introduced pod-kill chaos and reproduced the expected error. When we randomly deleted a small number of etcd nodes in the cluster, sometimes APISIX could connect to etcd and sometimes not, and the log printed a large number of connection rejection errors."),(0,a.kt)("p",null,"When we deleted the first or third node in the etcd endpoint list, the ",(0,a.kt)("inlineCode",{parentName:"p"},"set route")," returned a result normally. However, when we deleted the second node in the list, the ",(0,a.kt)("inlineCode",{parentName:"p"},"set route"),' returned the error "connection refused."'),(0,a.kt)("p",null,"Our troubleshooting revealed that the etcd Lua API used by Apache APISIX selected the endpoint sequentially, not randomly. Therefore, when we created an etcd client, we bound to only one etcd endpoint. This led to continuous failure."),(0,a.kt)("p",null,"After we fixed this problem, we added a health check to the etcd Lua API to ensure that a large number of requests would not be sent to the disconnected etcd node. To avoid flooding the log with errors, we added a fallback mechanism when the etcd cluster was completely disconnected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An error is reported from one etcd node\u2019s interaction with the Apache APISIX admin API",src:n(13545).Z})),(0,a.kt)("h2",{id:"our-future-plans"},"Our future plans"),(0,a.kt)("h3",{id:"run-a-chaos-test-in-e2e-simulation-scenarios"},"Run a chaos test in E2E simulation scenarios"),(0,a.kt)("p",null,"In Apache APISIX, we manually identify system weaknesses for testing and repair. As in the open source community, we test in CI, so we don\u2019t need to worry about the impact of Chaos Engineering\u2019s failure radius on the production environment. But the test cannot cover complicated and comprehensive application scenarios in the production environment."),(0,a.kt)("p",null,"To cover more scenarios, the community plans to use the existing E2E test to simulate more complete scenarios and conduct chaos tests that are more random and cover a larger range."),(0,a.kt)("h3",{id:"add-chaos-tests-to-more-apache-apisix-projects"},"Add chaos tests to more Apache APISIX projects"),(0,a.kt)("p",null,"In addition to finding more vulnerabilities for Apache APISIX, the community plans to add chaos tests to more projects such as Apache APISIX Dashboard and Apache APISIX Ingress Controller."),(0,a.kt)("h3",{id:"add-features-to-chaos-mesh"},"Add features to Chaos Mesh"),(0,a.kt)("p",null,"When we deployed Chaos Mesh, some features were temporarily unsupported. For example, we couldn\u2019t select a service as a network latency target or specify container port injection as network chaos. In the future, the Apache APISIX community will assist Chaos Mesh to add related features."),(0,a.kt)("p",null,"You\u2019re welcome to contribute to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX project")," on GitHub. If you are interested in Chaos Mesh and would like to improve it, join its ",(0,a.kt)("a",{parentName:"p",href:"https://slack.cncf.io/"},"Slack channel")," (#project-chaos-mesh) or submit your pull requests or issues to its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh"},"GitHub repository"),"."))}h.isMDXComponent=!0},97425:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-06-16-1-ffb5085607d040e39a26c48739c6d581.png"},13545:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-06-16-2-7da0a0b158ae1eef191c24b2d93afb9c.png"},74835:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-07-27-1-9266db42637d7615e4d9dd779dbd56e6.png"}}]);