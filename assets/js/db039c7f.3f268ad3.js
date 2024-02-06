"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5103],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(o),u=n,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return o?r.createElement(f,s(s({ref:t},m),{},{components:o})):r.createElement(f,s({ref:t},m))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},50740:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),s=["components"],i={id:"learn-xcm-docs-overview-format",title:"XCM is a Format, not a Protocol",sidebar_label:"A Format, not a Protocol",description:"XCM is a Format, not a Protocol.",keywords:["xcm","cross-consensus messaging","format"],slug:"../overview-format"},c="A Format, Not a Protocol",l={unversionedId:"learn/xcm/overview/learn-xcm-docs-overview-format",id:"learn/xcm/overview/learn-xcm-docs-overview-format",title:"XCM is a Format, not a Protocol",description:"XCM is a Format, not a Protocol.",source:"@site/../docs/learn/xcm/overview/format.md",sourceDirName:"learn/xcm/overview",slug:"/learn/xcm/overview-format",permalink:"/docs/learn/xcm/overview-format",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/overview/format.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694074887,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-overview-format",title:"XCM is a Format, not a Protocol",sidebar_label:"A Format, not a Protocol",description:"XCM is a Format, not a Protocol.",keywords:["xcm","cross-consensus messaging","format"],slug:"../overview-format"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/learn/xcm/overview-intro"},next:{title:"The XCVM",permalink:"/docs/learn/xcm/overview-xcvm"}},m={},p=[],d={toc:p},u="wrapper";function f(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-format-not-a-protocol"},"A Format, Not a Protocol"),(0,a.kt)("p",null,"It's essential to understand that XCM is a format, not a protocol. It describes how messages should\nbe structured and contains instructions that convey on-chain actions that the message intends to\nperform. However, XCM does not dictate how messages are delivered. That responsibility falls on\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-xcm-transport"},"transport layer protocols")," such as XCMP\n(Cross Chain Message Passing) and VMP (Vertical Message Passing) in the Polkadot ecosystem, or\nbridging protocols."),(0,a.kt)("p",null,"This separation of concerns is useful, since it allows us to think of the interactions we want to\nbuild between systems without having to think about how the messages involved are actually routed."),(0,a.kt)("p",null,"Not every system is expected to be able to interpret any possible XCM. Some messages will not have\nreasonable interpretations under some systems or will be intentionally unsupported. For example,\nsome consensus systems won't deal with NFTs, and that's okay. Instructions that relate to NFTs will\nhave valid interpretations on some systems but not on others."),(0,a.kt)("p",null,"Furthermore, XCMs by themselves are not considered on-chain transactions: XCM describes how to\nchange the state of the target consensus system, but the message by itself does not perform state\nchanges. XCM communicates intentions; the actual interpretation and behaviour of each instruction in\nan XCM is defined by target's XCVM implementation."),(0,a.kt)("p",null,"Both simple and more complex scenarios can be expressed, and developers are encouraged to design and\nimplement diverse cross-consensus communication solutions."))}f.isMDXComponent=!0}}]);