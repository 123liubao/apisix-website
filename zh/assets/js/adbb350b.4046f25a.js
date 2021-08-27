(self.webpackChunk=self.webpackChunk||[]).push([[85427],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?i.createElement(m,n(n({ref:t},c),{},{components:r})):i.createElement(m,n({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var u=2;u<a;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39100:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return n},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var i=r(22122),o=r(19756),a=(r(67294),r(3905)),n={id:"contributor-guide",title:"Contributor Guide",keywords:["API gateway","APISIX","Apache APISIX","contributor guide"],description:"This article is a set of guidelines for Apache APISIX contributors, including things that a contributor can do and how to do it well."},s={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"This article is a set of guidelines for Apache APISIX contributors, including things that a contributor can do and how to do it well.",source:"@site/docs/general/contributor-guide.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/zh/docs/general/contributor-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/contributor-guide.md",version:"current",lastUpdatedBy:"\u7f57\u6cfd\u8f69",lastUpdatedAt:1630055566,formattedLastUpdatedAt:"2021/8/27",frontMatter:{id:"contributor-guide",title:"Contributor Guide",keywords:["API gateway","APISIX","Apache APISIX","contributor guide"],description:"This article is a set of guidelines for Apache APISIX contributors, including things that a contributor can do and how to do it well."},sidebar:"docs",previous:{title:"Subscribe Guide",permalink:"/zh/docs/general/subscribe-guide"},next:{title:"Committer Guide",permalink:"/zh/docs/general/committer-guide"}},l=[{value:"Submit an issue",id:"submit-an-issue",children:[]},{value:"Developer Flow",id:"developer-flow",children:[{value:"Fork repo",id:"fork-repo",children:[]},{value:"Choose an issue",id:"choose-an-issue",children:[]},{value:"Create your branch",id:"create-your-branch",children:[]},{value:"Coding",id:"coding",children:[]},{value:"Submit PR",id:"submit-pr",children:[]},{value:"Delete branch",id:"delete-branch",children:[]},{value:"Notice",id:"notice",children:[]}]}],u={toc:l};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide."),(0,a.kt)("h2",{id:"submit-an-issue"},"Submit an issue"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Before submitting your issues, please go through a comprehensive search to make sure the problem cannot be solved just by searching.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the Issue List to make sure the problem is not repeated.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new issue and choose the type of issue.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the issue with a clear and descriptive title.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in necessary information according to the template.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose a label after issue created.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please pay attention to your issue, you may need provide more information during discussion."))),(0,a.kt)("h2",{id:"developer-flow"},"Developer Flow"),(0,a.kt)("h3",{id:"fork-repo"},"Fork repo"),(0,a.kt)("p",null,"Fork the Apache APISIX repo to your own repo to work, then setting proper upstream."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/apache/apisix.git\n")),(0,a.kt)("h3",{id:"choose-an-issue"},"Choose an issue"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please choose your target issue. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find a mentor from the Team page and your mentor will give you feedback about your PR or issue in time."))),(0,a.kt)("h4",{id:"good-first-issues"},(0,a.kt)("strong",{parentName:"h4"},"Good First Issues"),":"),(0,a.kt)("p",null,"Good First Issue curates easy pickings from this project, and helps you make your first contribution to Apache APISIX\xae."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX Ingress Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX dashboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX Helm Chart")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-docker/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Docker distribution for APISIX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-control-plane/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"The Control-Plane for APISIX"))),(0,a.kt)("h3",{id:"create-your-branch"},"Create your branch"),(0,a.kt)("p",null,"Switch to your forked master branch, pull codes from upstream, then create a new branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git pull upstream master\n$ git checkout -b IssueNo\n")),(0,a.kt)("p",null,"Notice: We will merge PR using squash, commit logs will be different form upstream if you use one older branch."),(0,a.kt)("h3",{id:"coding"},"Coding"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please obey the Code of Conduct during the process of development and finish the check before submitting the pull request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then push codes to your fork repo."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git add modified-file-names\n$ git commit -m 'commit message'\n$ git push origin issueNo\n")),(0,a.kt)("h3",{id:"submit-pr"},"Submit PR"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send a pull request to the master branch.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The mentor will do codes review before discussing some details (including the design, the implementation and the performance) with you.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Also make sure that the pull request title has a semantic prefix like ",(0,a.kt)("inlineCode",{parentName:"p"},"fix:")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"feat:")," or any other ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/commitizen/conventional-commit-types/blob/master/index.json"},"conventional commit types"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then congratulate to you to be an official contributor of Apache APISIX."))),(0,a.kt)("h3",{id:"delete-branch"},"Delete branch"),(0,a.kt)("p",null,"You can delete the remote branch (origin/IssueNo) and the local branch (IssueNo) associated with the remote branch (origin/IssueNo) after the mentor merged the PR into the master branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git branch -d IssueNo\n$ git push origin --delete issueNo\n")),(0,a.kt)("h3",{id:"notice"},"Notice"),(0,a.kt)("p",null,"Please note that in order to show your ID in the contributor list, please DO NOT forget to set the configurations below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ git config --global user.name "username"\n$ git config --global user.email "mail address"\n')))}c.isMDXComponent=!0}}]);