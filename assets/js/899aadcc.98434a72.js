"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"learn-xcm-docs-overview-architecture",title:"The XCM Architecture",sidebar_label:"Architecture",description:"The XCM Architecture.",keywords:["xcm","cross-consensus messaging","xcvm","architecture"],slug:"../overview-architecture"},s="Architecture",l={unversionedId:"learn/xcm/overview/learn-xcm-docs-overview-architecture",id:"learn/xcm/overview/learn-xcm-docs-overview-architecture",title:"The XCM Architecture",description:"The XCM Architecture.",source:"@site/../docs/learn/xcm/overview/architecture.md",sourceDirName:"learn/xcm/overview",slug:"/learn/xcm/overview-architecture",permalink:"/docs/learn/xcm/overview-architecture",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/overview/architecture.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"learn-xcm-docs-overview-architecture",title:"The XCM Architecture",sidebar_label:"Architecture",description:"The XCM Architecture.",keywords:["xcm","cross-consensus messaging","xcvm","architecture"],slug:"../overview-architecture"},sidebar:"docs",previous:{title:"The XCVM",permalink:"/docs/learn/xcm/overview-xcvm"},next:{title:"Quickstart",permalink:"/docs/learn/xcm/quickstart"}},u={},p=[{value:"Executor",id:"executor",level:2},{value:"Builder",id:"builder",level:2},{value:"Pallet",id:"pallet",level:2},{value:"Simulator",id:"simulator",level:2}],h={toc:p},d="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"XCM is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"format"),". Anyone can create an implementation of\nthe XCVM to interpret said format."),(0,o.kt)("p",null,"Parity Technologies maintains a Rust implementation, primarily for\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate"),"-based chains in the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot"),"\necosystem. It is this implementation that we use throughout this documentation."),(0,o.kt)("p",null,"All the code lives in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm"},"Polkadot repo"),". The main\nstructure is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/src"},"XCM"),": Defines the\nfundamental constructs used in XCM and an enum with all the instructions available."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-executor/src"},"Executor"),":\nImplements the XCVM, capable of executing XCMs. Highly configurable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-builder/src"},"Builder"),":\nOffers common configuration building blocks for the executor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/pallet-xcm/src"},"Pallet"),":\nFRAME pallet that provides extrinsics for interacting with the XCM executor, as well as specific\nXCM programs, such as teleports and reserve asset transfers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-simulator/example/src"},"Simulator"),":\nAllows for testing of XCM programs.")),(0,o.kt)("h2",{id:"executor"},"Executor"),(0,o.kt)("p",null,"The XCM executor is responsible for interpreting and executing XCM messages. It is the core engine\nthat processes and handles XCM instructions, ensuring that they are carried out accurately and in\nthe correct order. The XCM executor follows the Cross-Consensus Virtual Machine (XCVM) specification\nand can be extended, customized, or even replaced with an alternative construct that adheres to the\nXCVM spec."),(0,o.kt)("h2",{id:"builder"},"Builder"),(0,o.kt)("p",null,"The XCM executor is highly configurable. XCM builder provides building blocks people can use to\nconfigure their executor according to their needs. Many of these building blocks will be explained\nin the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/xcm/config-deep-dive"},"Config Deep Dive")," chapter. They cover common use-cases but are\nnot meant to be exhaustive. It's very easy to build your own building blocks for your specific\nconfiguration when needed, using these as examples."),(0,o.kt)("h2",{id:"pallet"},"Pallet"),(0,o.kt)("p",null,"The XCM pallet is a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/quick-start/substrate-at-a-glance/"},"FRAME")," pallet\nthat can be used to execute XCMs locally or send them to a different system. It also has extrinsics\nfor specific use cases such as teleporting assets or doing reserve asset transfers, which we'll talk\nabout later. It's the glue between XCM and FRAME, which is highly used in the Polkadot ecosystem."),(0,o.kt)("h2",{id:"simulator"},"Simulator"),(0,o.kt)("p",null,"The simulator allows for testing XCMs fast, without needing to boot up several different nodes in a\nnetwork, or test in production. It's a very useful tool which we'll use throughout this document to\nbuild and test different XCMs."))}m.isMDXComponent=!0}}]);