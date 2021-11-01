"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65578],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},382:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return c},toc:function(){return u},default:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i={title:"A First Look at Kubernetes Service APIs",author:"Wei Jin",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars2.githubusercontent.com/u/4413028?s=400&u=e140a6d2bf19c426da6498b8888edc96509be649&v=4",keywords:["API Gateway","APISIX","Apache APISIX","Kubernetes Service APIs"],description:"This article provides a basic introduction to the Kubernetes Service APIs by asking questions. As a whole, the Kubernetes Service APIs refine many ingress best practices, such as the enhanced expressiveness, which actually extends the capabilities of Route, and the BackendPolicy objects, which can specify almost any Kubernetes backend resource for upstream.",tags:["Technology"]},o=void 0,l={permalink:"/blog/2020/12/18/first-look-at-kubernetes-service-api",source:"@site/blog/2020/12/18/first-look-at-kubernetes-service-api.md",title:"A First Look at Kubernetes Service APIs",description:"This article provides a basic introduction to the Kubernetes Service APIs by asking questions. As a whole, the Kubernetes Service APIs refine many ingress best practices, such as the enhanced expressiveness, which actually extends the capabilities of Route, and the BackendPolicy objects, which can specify almost any Kubernetes backend resource for upstream.",date:"2020-12-18T00:00:00.000Z",formattedDate:"December 18, 2020",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:6.285,truncated:!0,authors:[{name:"Wei Jin",url:"https://github.com/gxthrj",imageURL:"https://avatars2.githubusercontent.com/u/4413028?s=400&u=e140a6d2bf19c426da6498b8888edc96509be649&v=4"}],prevItem:{title:"Apache APISIX Contributor Interview | Pengcheng Wang, Senior Security Consultant, PricewaterhouseCoopers China Data Security & Privacy Team",permalink:"/blog/2021/01/11/interview-Apache-APISIX-contributor-Wang-Pengcheng-Senior-Security-Advisor-of-PwC-South-China-Data-Security-and-Privacy-Protection-Team"},nextItem:{title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",permalink:"/blog/2020/12/16/another-way-to-implement-envoy-filter"}},c={authorsImageUrls:[void 0]},u=[{value:"Preface",id:"preface",children:[]},{value:"Topic Description",id:"topic-description",children:[]},{value:"Introduction",id:"introduction",children:[{value:"Kubernetes Service APIs is called the second generation of Ingress technology, in what ways is it better than the first generation",id:"kubernetes-service-apis-is-called-the-second-generation-of-ingress-technology-in-what-ways-is-it-better-than-the-first-generation",children:[]}]},{value:"What resource objects are abstracted by the Kubernetes Service APIs",id:"what-resource-objects-are-abstracted-by-the-kubernetes-service-apis",children:[]},{value:"What changes will come with the implementation of Kubernetes Service APIs",id:"what-changes-will-come-with-the-implementation-of-kubernetes-service-apis",children:[]},{value:"What ingress implementations of Kubernetes Service APIs are currently available",id:"what-ingress-implementations-of-kubernetes-service-apis-are-currently-available",children:[]},{value:"How Kubernetes Service APIs manage resource read and write permissions",id:"how-kubernetes-service-apis-manage-resource-read-and-write-permissions",children:[]},{value:"What are the extension points for Kubernetes Service APIs",id:"what-are-the-extension-points-for-kubernetes-service-apis",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This article provides a basic introduction to the Kubernetes Service APIs by asking questions. As a whole, the Kubernetes Service APIs refine many ingress best practices, such as expression enhancements that actually extend the capabilities of Route, and BackendPolicy objects that can specify almost any Kubernetes backend resource for upstream.")),(0,s.kt)("h2",{id:"preface"},"Preface"),(0,s.kt)("p",null,"The author is an Apache APISIX PMC and Apache APISIX Ingress Controller Founder. Through research and community communication, I plan to gradually support Kubernetes Service APIs in later versions of Apache APISIX Ingress Controller."),(0,s.kt)("p",null,"As we know, Kubernetes has a variety of solutions for exposing services inside the cluster, one of which is Ingress, a standard for exposing services to the public, and there are many third-party implementations of Ingress, each with its own technology stack and dependency on gateways that are not compatible with each other."),(0,s.kt)("p",null,"To unify the various Ingress implementations and facilitate unified management on Kubernetes, the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/tree/master/sig-network"},"SIG-NETWORK")," community has launched the ",(0,s.kt)("a",{parentName:"p",href:"https://gateway-api.sigs.k8s.io/"},"Kubernetes Service APIs"),", a set of standard implementations called second-generation Ingress."),(0,s.kt)("h2",{id:"topic-description"},"Topic Description"),(0,s.kt)("p",null,"This article provides an introduction to the basic concepts of Kubernetes Service APIs, starting with a few questions."),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("h3",{id:"kubernetes-service-apis-is-called-the-second-generation-of-ingress-technology-in-what-ways-is-it-better-than-the-first-generation"},"Kubernetes Service APIs is called the second generation of Ingress technology, in what ways is it better than the first generation"),(0,s.kt)("p",null,"The Kubernetes Service APIs were designed not to be limited to Ingress, but to enhance service networking by focusing on the following points: expressiveness, scalability, and RBAC."),(0,s.kt)("p",null,"For example, traffic can be managed based on header, weighting"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'kind: HTTPRoute\napiVersion: networking.x-k8s.io/v1alpha1\n...\nmatches:\n  - path:\n      value: "/foo"\n    headers:\n      values:\n        version: "2"\n  - path:\n      value: "/v2/foo"\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"The Service APIs propose the concept of multi-layer APIs, each layer exposes its interface independently to facilitate other custom resources to interface with the APIs and achieve finer granularity (API granularity) control.")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://gateway-api.sigs.k8s.io/images/api-model.png",alt:"api-model"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Role-oriented RBAC: One of the ideas behind the multi-tier API implementation is to design resource objects from the user's perspective. These resources are ultimately mapped to common roles for running applications on Kubernetes.")),(0,s.kt)("h2",{id:"what-resource-objects-are-abstracted-by-the-kubernetes-service-apis"},"What resource objects are abstracted by the Kubernetes Service APIs"),(0,s.kt)("p",null,"The Kubernetes Service APIs will define the following kinds of resources based on user roles."),(0,s.kt)("p",null,"GatewayClass, Gateway, Route"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"GatewayClass defines a set of gateway types with common configuration and behavior")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"relationship to the Gateway, similar to the ingress.class annotation in ingress.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A GatewayClass defines a set of gateways that share the same configuration and behavior. Each GatewayClass will be handled by a single controller, and controllers have a one-to-many relationship with GatewayClass.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A GatewayClass is a cluster resource. At least one GatewayClass must be defined to have a functional gateway."))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Gateway requests a point at which traffic can be converted to services within the cluster.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Role: Bringing traffic from outside the cluster inside the cluster. This is the true ingress entity.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It defines a request for a specific LB configuration that is also the implementation of the GatewayClass configuration and behavior.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Gateway resources can be created either directly by the operator or by the controller handling the GatewayClass.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Gateway and Route are in a many-to-many relationship."))),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"the Route describes how traffic passing through the gateway is mapped to a service.")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://gateway-api.sigs.k8s.io/images/schema-uml.svg",alt:"schema-uml"})),(0,s.kt)("p",null,"In addition, the Kubernetes Service APIs define a BackendPolicy resource object in order to enable flexible configuration of backend services."),(0,s.kt)("p",null,"The BackendPolicy object allows you to configure TLS, health checks, and specify the type of backend service, such as service or pod."),(0,s.kt)("h2",{id:"what-changes-will-come-with-the-implementation-of-kubernetes-service-apis"},"What changes will come with the implementation of Kubernetes Service APIs"),(0,s.kt)("p",null,"Kubernetes Service APIs, as an implementation standard, brings the following changes."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"generality: there can be multiple implementations, just like there are multiple implementations of ingress. ingress controllers can be customized based on the characteristics of the gateway, but they all have a consistent configuration structure. A data structure, you can configure a variety of ingress controller.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Class concept: GatewayClasses can be configured for different types of load balancing implementations. These class classes allow the user to easily and explicitly understand what functionality can be used as the resource model itself.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"By allowing independent routing resources HTTPRoute to be bound to the same GatewayClass, they can share load balancers and VIPs. layered by user, this allows teams to safely share infrastructure without having to care about the specific implementation of the lower level Gateway. 4.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"backend references with types: With backend references with types, routes can reference Kubernetes Services, or any type of Kubernetes resource designed as a gateway backend, such as a pod, or a statefulset such as a DB, or even an accessible cluster external resource."))),(0,s.kt)("p",null,"Cross-namespace references: Routes across different namespaces can be bound to a Gateway, allowing access to each other across namespaces. It is also possible to restrict the range of namespaces that a Route under a Gateway can access."),(0,s.kt)("h2",{id:"what-ingress-implementations-of-kubernetes-service-apis-are-currently-available"},"What ingress implementations of Kubernetes Service APIs are currently available"),(0,s.kt)("p",null,"The Ingress that are known to support Kubernetes Service APIs resource objects at the code level are Contour, ingress-gce."),(0,s.kt)("h2",{id:"how-kubernetes-service-apis-manage-resource-read-and-write-permissions"},"How Kubernetes Service APIs manage resource read and write permissions"),(0,s.kt)("p",null,"The Kubernetes Service APIs are divided into 3 roles based on the user dimension"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"infrastructure provider GatewayClass")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"cluster operator Gateway")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"application developer Route"))),(0,s.kt)("p",null,"RBAC (Role Based Access Control) is the standard used for Kubernetes authorization. It allows users to configure who can perform operations on a specific range of resources. RBAC can be used to enable each of the roles defined above."),(0,s.kt)("p",null,"In most cases, all roles are expected to be able to read all resources"),(0,s.kt)("p",null,"The three-tier model has the following write permissions."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"GatewayClass"),(0,s.kt)("th",{parentName:"tr",align:null},"Gateway"),(0,s.kt)("th",{parentName:"tr",align:null},"Route"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Infrastructure Provider"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Cluster Operators"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,s.kt)("p",null,"| The Kubernetes Service Provider is a service provider that provides a variety of services to the Kubernetes community."),(0,s.kt)("h2",{id:"what-are-the-extension-points-for-kubernetes-service-apis"},"What are the extension points for Kubernetes Service APIs"),(0,s.kt)("p",null,"The Kubernetes Service APIs refine the multi-tier resource object, but also leave some extension points open."),(0,s.kt)("p",null,"Currently, the Kubernetes Service APIs are focused on Route."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"RouteMatch extends Route matching rules.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Specify Backend extends specific types of backend services, such as file systems, function expressions, etc., in addition to the Kubernetes resources mentioned above.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Route filter adds extensions to the Route lifecycle to handle requests/response.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Custom Route can be fully customized if none of the above extensions are met."))),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"This article provides a basic introduction to the Kubernetes Service APIs by asking questions. As a whole, the Kubernetes Service APIs refine a lot of ingress best practices, such as the enhancement of expression capabilities, which actually extends the capabilities of the Route, and the BackendPolicy object The Kubernetes Service APIs as a whole refine a lot of ingress best practices, such as the enhanced expressiveness, which actually extends the capabilities of Route, and the BackendPolicy object, which can specify almost all Kubernetes backend resources for upstream. Of course, there are also shortcomings in the early stage of the project. Although the Kubernetes Service APIs have specified the resource objects at a broad level, there are still a lot of details within the resource objects that need to be discussed and then determined to prevent possible conflict scenarios, and there are certain variables in the structure."),(0,s.kt)("p",null,"Reference:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/"},"https://gateway-api.sigs.k8s.io/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api"},"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"https://github.com/apache/apisix-ingress-controller"))))}h.isMDXComponent=!0}}]);