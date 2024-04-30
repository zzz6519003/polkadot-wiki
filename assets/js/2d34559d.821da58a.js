"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],r={id:"learn-jam-chain",title:"Polkadot's JAM Chain",sidebar_label:"JAM Chain",description:"Polkadot's Join-Accumulate Machine.",keywords:["Polkadot","JAM","join-accumulate"],slug:"../learn-jam-chain"},l=void 0,c={unversionedId:"learn/learn-jam-chain",id:"learn/learn-jam-chain",title:"Polkadot's JAM Chain",description:"Polkadot's Join-Accumulate Machine.",source:"@site/../docs/learn/learn-jam-chain.md",sourceDirName:"learn",slug:"/learn-jam-chain",permalink:"/docs/learn-jam-chain",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-jam-chain.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1713771917,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{id:"learn-jam-chain",title:"Polkadot's JAM Chain",sidebar_label:"JAM Chain",description:"Polkadot's Join-Accumulate Machine.",keywords:["Polkadot","JAM","join-accumulate"],slug:"../learn-jam-chain"},sidebar:"docs",previous:{title:"JAM",permalink:"/docs/learn-jam"},next:{title:"JAM FAQ",permalink:"/docs/learn-jam-faq"}},h={},d=[{value:"A Rollup Chain",id:"a-rollup-chain",level:2},{value:"Smart Contract Similarity",id:"smart-contract-similarity",level:2},{value:"Service Entry Points",id:"service-entry-points",level:2},{value:"JAM is Transactionless",id:"jam-is-transactionless",level:3},{value:"Refine Function",id:"refine-function",level:3},{value:"Accumulate Function",id:"accumulate-function",level:3},{value:"On-transfer Function",id:"on-transfer-function",level:3},{value:"JAM Chain&#39;s Generalization",id:"jam-chains-generalization",level:2},{value:"Polkadot Virtual Machine (PVM)",id:"polkadot-virtual-machine-pvm",level:2},{value:"SAFROLE",id:"safrole",level:2},{value:"Networking",id:"networking",level:2},{value:"Pipelining for Efficient Block Processing",id:"pipelining-for-efficient-block-processing",level:2},{value:"Architectural Differences: JAM vs. Relay Chain",id:"architectural-differences-jam-vs-relay-chain",level:2},{value:"JAM Toaster",id:"jam-toaster",level:2},{value:"JAM and Substrate",id:"jam-and-substrate",level:2},{value:"Benchmarks vs. Metering",id:"benchmarks-vs-metering",level:3},{value:"XCMP",id:"xcmp",level:3},{value:"Accords",id:"accords",level:3},{value:"Boosting Efficiency",id:"boosting-efficiency",level:3},{value:"Enhancements and Compatibility in JAM",id:"enhancements-and-compatibility-in-jam",level:2}],u={toc:d},p="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"JAM paper is available at ",(0,o.kt)("a",{parentName:"p",href:"https://graypaper.com/"},"graypaper.com")," and the information regarding JAM\nprize is available at ",(0,o.kt)("a",{parentName:"p",href:"https://jam.web3.foundation/"},"jam.web3.foundation"),".")),(0,o.kt)("p",null,"JAM, short for Join-Accumulate Machine, represents a prospective design to succeed the relay chain.\nIts name originates from CoreJAM, denoting Collect Refine Join Accumulate, which outlines the\ncomputation model the machine embodies and that was\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs/blob/006a9ff07c3d3bc5316c6bf63b05e966e694cc2d/text/corejam.md"},"first described in an RFC by Gavin Wood"),".\nHowever, within the actual chain, only the Join and Accumulate functions are executed, while the\nCollect and Refine processes occur off-chain."),(0,o.kt)("p",null,"Unlike the current iterative approach, JAM will be introduced as a comprehensive singular upgrade.\nSeveral factors contribute to this decision:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A unified upgrade allows for precise restriction of post-upgrade actions, which is challenging\nwith an iterative approach."),(0,o.kt)("li",{parentName:"ul"},"It mitigates the constant stream of minor upgrades and breaking changes that occur regularly over\nweeks or months.")),(0,o.kt)("p",null,"While this shift entails a significant breaking change, efforts will be made to minimize its impact\nto manageable levels. Consolidating multiple smaller breaking changes into a single transition is\ndeemed preferable, introducing a novel blockchain concept that uniquely integrates various existing\nideas."),(0,o.kt)("h2",{id:"a-rollup-chain"},"A Rollup Chain"),(0,o.kt)("p",null,"JAM will be a domain-specific chain that handles one particular domain of problems. In this case,\nroll-ups, what Ethereum people call optimistic roll-ups. JAM's rollups are heavily bounded in terms\nof their security. This is what Polkadot has been doing for the last five years, it is already a\nhighly domain-specific roll-up chain. JAM essentially makes it less opinionated and more generic."),(0,o.kt)("p",null,"The JAM chain accepts outputs of roll-ups, in more general terms, bits of computation done\nelsewhere, and integrates the outputs into a shared state, similarly to how the Polkadot Relay Chain\nfunctions."),(0,o.kt)("p",null,"The job of the JAM chain is to provide the necessary apparatus to ensure that the output correctly\nreflects the input when it goes through the transformation it's meant to have undergone."),(0,o.kt)("h2",{id:"smart-contract-similarity"},"Smart Contract Similarity"),(0,o.kt)("p",null,"JAM exhibits several similarities with a smart contract chain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Permissionless code execution occurs directly on the JAM chain itself."),(0,o.kt)("li",{parentName:"ul"},"The state of the JAM chain is organized into distinct encapsulations."),(0,o.kt)("li",{parentName:"ul"},"Alongside state, encapsulations encompass code and balance.")),(0,o.kt)("p",null,"These encapsulations of state are termed ",(0,o.kt)("strong",{parentName:"p"},"services"),". Thus, the JAM state is partitioned into\nservices. The creation of a new service is permissionless, akin to deploying a smart contract on a\nsmart contract chain. Consequently, adding a new service to the JAM chain does not necessitate\napproval from any authority or adherence to governance mechanisms, unlike Substrate-based chains\nthat mandate governance approval for adding new pallets. Services encompass code, balance, and\ncertain state components, resembling the structure commonly observed on a smart contract chain."),(0,o.kt)("h2",{id:"service-entry-points"},"Service Entry Points"),(0,o.kt)("p",null,"JAM services' code is split into three different entry points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Refine")," is the function that does the mostly stateless computation. It defines the\ntransformation for the rollup for a specific service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accumulate")," is the function that takes the output of that and folds it into the overall state\nof the service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OnTransfer")," handles information coming from other services.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Work packages")," are the input to a service. Work packages can have many ",(0,o.kt)("strong",{parentName:"p"},"work items")," in them.\nEvery work item is associated with a service, and it reflects the actual input to the service. For\nthe parachains service, this is where the transactions and all of the blockchain inputs are entered."),(0,o.kt)("p",null,"The JAM security apparatus consists a two-stage processing where the Refine function accepts a work\nitem as an input and yields a work result as an output, which gets fed into the Accumulate function\n(first Refine, then Accumulate). Work items are refined into ",(0,o.kt)("strong",{parentName:"p"},"work results"),", and therefore, a work\npackage containing many work items is refined into a ",(0,o.kt)("strong",{parentName:"p"},"work report"),", which is the corresponding\nresults of several items. A work package can be assigned that uses one core for a specific time slot\n(typically a period of 6 seconds)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"refine-accumulate",src:n(95209).Z,width:"1874",height:"1052"})),(0,o.kt)("h3",{id:"jam-is-transactionless"},"JAM is Transactionless"),(0,o.kt)("p",null,"JAM distinguishes itself from smart contract chains by operating transactionlessly. There are no\ntransactions within JAM; all actions are permissionless and initially undergo a Refine stage. During\nthis stage, the service pre-refines input data, transforming it into work reports consisting of work\nresults. Subsequently, these work results are transferred onto the chain."),(0,o.kt)("p",null,"Despite the absence of transactions, JAM still accommodates extrinsic information of a specific\nformat. There are five types of extrinsic information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Guarantees"),(0,o.kt)("li",{parentName:"ul"},"Assurances"),(0,o.kt)("li",{parentName:"ul"},"Judgments"),(0,o.kt)("li",{parentName:"ul"},"Preimages"),(0,o.kt)("li",{parentName:"ul"},"Tickets")),(0,o.kt)("p",null,"The first three types form part of the JAM chain's security framework. Guarantees and assurances\ninvolve validators collectively attesting that a work result accurately reflects the outcome of its\ncorresponding work item after transformation through the service's refine function."),(0,o.kt)("p",null,"Judgments occur when then integrity of a work result is considered uncertain and a large plurality\nof validators attest to its validity or lack thereof. In this case an invalid work item may already\nhave been integrated into the service\u2019s state and a rollback may need to happen. Judgments must\noccur within one hour of submitting the work report to the chain, during which finality is\ntemporarily paused."),(0,o.kt)("p",null,"Preimages represent a feature provided by the JAM chain for the refine function. While the refine\nfunction is typically stateless, it can perform one stateful operation: looking up the preimage of a\nhash. This feature is the only opinionated aspect of the refine function."),(0,o.kt)("p",null,"Tickets serve as anonymous entries into the block production mechanism. They are not immediately\nrequired for block production; instead, the system operates two epochs in advance. This mechanism is\npart of the SAFROL algorithm, a refined version of the original ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-sassafras"},"SASSAFRAS"),"\nalgorithm."),(0,o.kt)("h3",{id:"refine-function"},"Refine Function"),(0,o.kt)("p",null,"In the Refine processing stage within JAM, up to 15 MB of data can be accepted during each time\nslot, which lasts 6 seconds. However, Refine yields a maximum of 90 kB of data, resulting in\nsignificant data compaction that is necessary due to the distributed nature of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#availability-and-validity-anv-protocol"},"the availability system"),".\nFor instance, in the context of a parachain, the 15 MB of data represents the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#protocols-summary"},"Proof of Validity (PoV)"),", while the 90 kB of data\ncorresponds to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#candidate-receipts"},"candidate receipt"),"."),(0,o.kt)("p",null,"Refine can execute for up to 6 seconds of ",(0,o.kt)("a",{parentName:"p",href:"#polkadot-virtual-machine-pvm"},"PVM")," gas, equivalent to\nthe full block period of the relay chain. This extended execution time, compared to the current\nlimit of two seconds for PVFs, is facilitated by ",(0,o.kt)("a",{parentName:"p",href:"#benchmarks-vs-metering"},"secure metering")," and\nother optimizations inherent to PVM."),(0,o.kt)("p",null,"Preimage lookups can also be conducted within Refine. If a hash and its associated preimage are\nbelieved to be available on the JAM chain, the preimage can be requested by providing the hash. This\ncapability enables efficient storage and retrieval of code, such as parachain code, by storing the\ncode on the JAM chain and referencing its hash in the work package."),(0,o.kt)("p",null,"Refine is the primary processing workhorse, handling tasks with largely stateless operations."),(0,o.kt)("h3",{id:"accumulate-function"},"Accumulate Function"),(0,o.kt)("p",null,"The accumulate function is responsible for integrating the output generated by the Refine function\ninto the chain state. Accumulate can accept multiple outputs from Refine, all originating from the\nsame service. Both Refine and Accumulate serve as entry points from a service-specific code blob."),(0,o.kt)("p",null,"Accumulate's execution time per output is considerably shorter than Refine\u2019s, typically around 10\nmilliseconds at most. However, the duration depends on factors such as the number of work items in\nthe work package. If a work package contains multiple items, the available time is divided among\nthem."),(0,o.kt)("p",null,"Unlike Refine, Accumulate is stateful, granting it access to the JAM chain's state. It can read\nstorage from any service, write to its key-value store, transfer funds, and include a memo with fund\ntransfers. Additionally, Accumulate can create new services, upgrade its code, and request preimage\navailability, among other functionalities."),(0,o.kt)("p",null,"Moreover, Refine can invoke child instances of the PVM. This allows for creating sub-instances, or\nvirtual machines, where code and data can be deployed, memory and stack configurations can be\ncustomized, and computations can be executed within a flexible framework."),(0,o.kt)("h3",{id:"on-transfer-function"},"On-transfer Function"),(0,o.kt)("p",null,"The onTransfer function within the JAM system is also stateful, enabling it to modify the service's\nstate. It has the capability to inspect the state of other services and make changes to its own\nstate. This functionality facilitates communication between services, albeit in an asynchronous\nmanner."),(0,o.kt)("p",null,"Unlike many smart contract platforms, where interactions occur synchronously, in JAM the interaction\nbetween encapsulated components, such as smart contracts or services in this case, happens\nasynchronously. Messages, along with tokens, are sent, and at some point later during the same\nsix-second execution period, the receiving service processes them. There is no immediate return\npath; if a return path is needed, the sending service must initiate another transfer or modify its\nstate in a way that the receiving service can later interpret."),(0,o.kt)("p",null,"Both Accumulate and onTransfer are designed to be executed in parallel, allowing different services'\naccumulation and transfers to occur simultaneously. This design opens the possibility for future\nenhancements, such as allocating more than the current 10 milliseconds of gas input. In theory, a\nsecondary core could be utilized to execute certain accumulations, providing them with significantly\nmore gas to utilize."),(0,o.kt)("h2",{id:"jam-chains-generalization"},"JAM Chain's Generalization"),(0,o.kt)("p",null,"Polkadot, as outlined in the original Polkadot white paper, is primarily tailored to a specific\nservice profile: delivering parachains. In pursuit of this service, Polkadot has developed two\nessential subcomponents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the distributed data availability system"),(0,o.kt)("li",{parentName:"ul"},"the auditing and guarantees system for computation (i.e. an optimistic roll-up system with robust\nsecurity guarantees)")),(0,o.kt)("p",null,"JAM represents a reduction in the level of opinionation compared to Polkadot, offering a higher\nlevel of abstraction and generalization. This facilitates easier utilization of underlying\ncomponents according to individual preferences."),(0,o.kt)("p",null,"JAM operates in a permissionless manner, akin to smart contract chains, allowing individuals to\nupload and expect the execution of code. Additionally, it hosts data, enables preimage lookup, and\nmanages state, resembling a key-value pair system. The genesis block of JAM includes a service to\nfacilitate the creation of new services since JAM lacks a mechanism for accepting transactions\ndirectly."),(0,o.kt)("p",null,"Services within JAM have no predefined limits on the amount of code, data, or state they can\naccommodate. Their capabilities are determined by crypto-economic factors; the more DOT tokens\ndeposited, the greater capacity for data and state. For instance, ",(0,o.kt)("strong",{parentName:"p"},"the parachains service"),"\nconsolidates all Polkadot 1.1 functionality within a single service on JAM, with the potential for\nadditional services to leverage Polkadot's distributed availability system, and auditing and\nguarantees system for computation."),(0,o.kt)("h2",{id:"polkadot-virtual-machine-pvm"},"Polkadot Virtual Machine (PVM)"),(0,o.kt)("p",null,"The PVM design is rooted in the RISC-V ISA (Instruction Set Architecture), known for its simplicity\nand versatility. The RISC-V ISA offers several advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is easy to transpile into common hardware formats such as x86, x64, and ARM."),(0,o.kt)("li",{parentName:"ul"},"It is well-supported by tooling like ",(0,o.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM"))),(0,o.kt)("p",null,"The PVM itself embodies simplicity and security, being sandboxable and offering various execution\nguarantees. It is deterministic, consensus-sensitive, and friendly to metering. Unlike other VMs,\nthe PVM lacks complexity and excessive opinionation."),(0,o.kt)("p",null,"WASM, while optimized for web use cases, presents challenges with stack management, particularly in\nhandling continuations. RISC-V addresses this issue by placing the stack in memory, facilitating\ncontinuations handling naturally without additional complexity."),(0,o.kt)("p",null,"Additionally, the PVM demonstrates exceptional execution speeds, especially when run on conventional\nhardware like X64 and ARM, offering advantages such as free metering compared to WASM."),(0,o.kt)("p",null,"The incorporation of RISC-V-enabled continuations is poised to establish a new standard for scalable\ncoding across multi-core platforms like JAM. Asynchronous, parallelized architectures are\nincreasingly essential for scalability in both hardware and software platforms, a trend that is\nexpected to extend to blockchain and consensus algorithms."),(0,o.kt)("h2",{id:"safrole"},"SAFROLE"),(0,o.kt)("p",null,"SAFROLE is a block production algorithm, a simplification of ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-sassafras"},"SASSAFRAS"),". It\nexcludes some components that may be useful for parachains. So parachains may probably stick with\nSASSAFRAS rather SAFROLE. SAFROLE will be as simple as possile to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ensure that it is as minimally opinionated as possible to maximize the potential future use cases"),(0,o.kt)("li",{parentName:"ul"},"to follow in the footsteps of Ethereum yellow paper, and really try to get as many implementations\nas possible to try and spread the expertise.")),(0,o.kt)("p",null,"Understanding how Polkadot 1.0 works end-to-end is challenging. With JAM, someone who is capable of\nreading and understanding the yellow paper would be able to read and understand fairly quickly how\nJAM works. So simplicity is crucial."),(0,o.kt)("p",null,"SAFROLE is a SNARK-based block production algorithm. It uses SNARK specifically for their anonymity\nfeatures. And it delivers constant time block production, almost entirely fork-free. There are a\ncouple of instances where forks could possibly arise. They basically only happen when there's a net\nsplit or someone's being intentionally malicious. The great value for the anonymity is not\nspecifically to keep validators' identities sort of a secret. In fact, when they actually produce a\nblock, they give away their identity anyway, but rather for ensuring that the block production\nmechanism itself is secure, basically to avoid spamming."),(0,o.kt)("h2",{id:"networking"},"Networking"),(0,o.kt)("p",null,"Networking for JAM uses the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/QUIC"},"QUIC protocol"),". This allows direct\npoint-to-point connections between a large numbers of validators. So essentially all 1,000-plus\nvalidators on Polkadot can have a persistent connection to each other without potential issues with\nsockets. Gossip is avoided, mostly because it is not needed, because JAM will not handle\ntransactions. In case of distributing something that's not point-to-point or within a very small\nsubset validators, grid-diffusal will be used, in which validators are arranged into a grid, and\npackages are sent by a row, and then each node on the row sends it to all members of its column."),(0,o.kt)("h2",{id:"pipelining-for-efficient-block-processing"},"Pipelining for Efficient Block Processing"),(0,o.kt)("p",null,"In state-based blockchains like Ethereum, the header of blocks typically contains the posterior\nstate root, summarizing the state after all block computations. Consequently, the header cannot be\nsent until all computations are complete. However, some computations can be performed before sending\nthe header, as their outcomes determine the block's validity."),(0,o.kt)("p",null,"In JAM, a different approach is adopted by placing the prior state root in the header instead of the\nposterior state root. This means that the state roots featured in the header lag by one block. As a\nresult, lightweight computations, comprising approximately 5% of the block's workload or execution\ntime, can be executed, and the block can be distributed immediately afterward. The remaining 95% of\nthe block's computation, primarily accumulation tasks, can be completed subsequently. This enables\nthe next block to be started before the execution of the current block is finished."),(0,o.kt)("p",null,"This approach allows for more efficient utilization of time between blocks. In traditional setups\nlike Polkadot's six-second block time, where the posterior state root must be provided, only a\nportion of the time can be used for computation. However, with pipelining in JAM, the entire block\ntime can be effectively utilized for computations, maximizing efficiency."),(0,o.kt)("p",null,"While using the full block time for computation may not be ideal, as it could lead to perpetual\ncatching up and delayed block imports, JAM's approach enables significantly more time for\ncomputation compared to traditional setups. This means that approximately three to three and a half\nseconds of effective block computation time can be achieved, a substantial improvement over the\ncurrent setup."),(0,o.kt)("h2",{id:"architectural-differences-jam-vs-relay-chain"},"Architectural Differences: JAM vs. Relay Chain"),(0,o.kt)("p",null,"One of the architectural distinctions between JAM and the Relay Chain lies in the degree to which\nfunctionality is fixed. While the relay chain fixes certain elements, such as the language used to\ndefine the protocol (WASM), JAM goes further in this regard. For instance, it dictates the type used\nfor encoding the block header and the hashing scheme, making alterations to these aspects\nchallenging."),(0,o.kt)("p",null,"However, flexibility comparable to that enabled by the WebAssembly meta-protocol in the relay chain\nis preserved in JAM through its service model. In this model, upgradability responsibility is\nshifted to services, freeing the chain itself from the burden of being upgradable. Three primary\nreasons support this decision:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplicity is prioritized. Maintaining a non-upgradable chain significantly reduces complexity."),(0,o.kt)("li",{parentName:"ul"},"The relay chain's tendency to introduce complex functionalities without removing older ones\ncomplicates matters. Because upgrades are easily implemented, there's little incentive to simplify\nthe Substrate SDK. Consequently, replicating Polkadot becomes impractical."),(0,o.kt)("li",{parentName:"ul"},"The potential for optimization afforded by JAM's fixed parameters. With a clear understanding of\nthe specific tasks the JAM chain must perform and the ability to set fixed parameters,\noptimizations in areas like network topology and timing become feasible. This contrasts with the\nchallenges posed by the relay chain's highly upgradable nature, where such optimizations are more\ncomplex due to the frequent alterations possible with each upgrade.")),(0,o.kt)("p",null,"Despite these differences, JAM retains flexibility in application-level functionalities, such as\ncoretime sales, staking, and governance, all managed within services. Additionally, JAM introduces a\nnovel concept by associating a token balance with a service, providing opportunities for economic\nmodel adjustments that are not easily achievable in purely upgradable chains like the Relay Chain."),(0,o.kt)("h2",{id:"jam-toaster"},"JAM Toaster"),(0,o.kt)("p",null,"One of the ongoing efforts in ensuring that JAM meets its original expectations involves\nestablishing a comprehensive test environment for the JAM chain. Unlike small-scale test networks\nrunning on unreliable hardware to manage cloud computing costs, this initiative entails a\nsubstantial investment. Introducing the JAM toaster, essentially a test platform designed for\nconducting large-scale trials and performance assessments of JAM. This addresses a prior challenge\nencountered during the development of the Polkadot Relay Chain, where understanding the emergent\neffects and dynamics of operating a network at such scale proved difficult. Previous attempts were\nlimited to a few dozen nodes on a test network and the Kusama network, which lacks comprehensive\nmonitoring capabilities due to restrictions on accessing validator nodes. Conversely, the\nsmall-scale test network failed to accurately simulate the network dynamics of a larger-scale\ndeployment. The JAM toaster aims to bridge this gap by enabling in-depth research at the scale of\nthe entire JAM network, comprising 1,023 nodes. This platform facilitates the investigation of\nnetwork behavior and performance characteristics, providing valuable insights for developers\nregarding the expected performance of their parachains."),(0,o.kt)("h2",{id:"jam-and-substrate"},"JAM and Substrate"),(0,o.kt)("h3",{id:"benchmarks-vs-metering"},"Benchmarks vs. Metering"),(0,o.kt)("p",null,"Benchmarks, or performance tests, can be optional when working with JAM. While they may still be\nnecessary on occasion, JAM's metered system can often obviate the need for frequent benchmarking.\nJAM operates on a metered system, allowing users to assess computational workload after completion.\nAdditionally, there's a theoretical mechanism to control computation, typically implemented at block\nconstruction time."),(0,o.kt)("p",null,"However, there are scenarios where benchmarking remains relevant. For instance, when metering is\ndeemed too conservative for certain use cases, benchmarking might be necessary to enhance\nperformance. Additionally, benchmarking could be useful for tasks requiring extended execution\ntimes, ensuring they aren't run excessively long."),(0,o.kt)("h3",{id:"xcmp"},"XCMP"),(0,o.kt)("p",null,'Moving on to Cross-Chain Message Passing (XCMP), JAM mandates full XCMP support. This is because\nwithin the relay chain, there\'s a provision for passing more data via a candidate receipt than would\nbe practical if all parachains transmitted all data all the time. JAM adheres strictly to rules,\neven for parachain services, including limitations on data transmission between the "refine" and\n"accumulate" phases. Currently, with\n',(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm-transport#hrmp-xcmp-lites"},"Horizontal Relay Chain Message Passing (HRMP)"),", all\nmessages traverse the relay chain, constraining the data payload to 4 kB or less, which might not be\nrealistic. Thus, XCMP, where only message headers are relayed via the chain while the actual message\ndata is transmitted off-chain, emerges as a necessary and overdue improvement."),(0,o.kt)("h3",{id:"accords"},"Accords"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/polkadot-direction#xcm-and-accords"},"Accords")," essentially encapsulate state and logic,\nresembling smart contracts, with multiple instances residing alongside each parachain. They\nfacilitate message exchange between instances and enable synchronous interactions with parachains.\nAccords find utility in scenarios where trust between parachains is lacking, such as token\ntransfers. Unlike the existing method involving a reserve intermediary, Accords streamline direct\ntoken teleportation between parachains, eliminating the need for trust-compromising intermediaries.\nMoreover, Accords could function as XCM forwarding mechanisms, ensuring message integrity even when\nrelayed through third-party intermediaries, thus eliminating the need for explicit origin markers."),(0,o.kt)("h3",{id:"boosting-efficiency"},"Boosting Efficiency"),(0,o.kt)("p",null,"Lastly, JAM's broader, less opinionated approach to leveraging underlying consensus mechanisms makes\nit conducive to implementing more innovative solutions. For instance, distributed availability for\ncomplex tasks like zero-knowledge proofs becomes more practical and efficient with JAM.\nAdditionally, JAM supports a mixed resource consumption model, wherein work packages can contain\nboth computationally intensive tasks and data-heavy operations. By pairing services with diverse\nresource requirements, such as those needing extensive computation with those necessitating high\ndata availability, JAM optimizes the utilization of validators' resources, thereby reducing costs.\nThis flexible approach enables the combination of tasks like distributed availability and SNARK\nverification with parachain workloads, driving down costs while enhancing efficiency."),(0,o.kt)("h2",{id:"enhancements-and-compatibility-in-jam"},"Enhancements and Compatibility in JAM"),(0,o.kt)("p",null,"JAM's design prioritizes compatibility with existing Polkadot 1 parachains. While it maintains\ncompatibility with the Polkadot SDK, the Polkadot Validator Function (PVF) undergoes retargeting.\nInstead of WebAssembly, it will target the Polkadot Virtual Machine (PVM). This transition is\nfacilitated by the fact that PVM is a minor modification of RISC-V, which has already been\nestablished as an official LLVM target. Consequently, PVM could become an official LLVM target\nbefore the deployment of JAM."),(0,o.kt)("p",null,"Beyond serving as a host for parachains, JAM introduces significant enhancements. It offers the\npotential to streamline benchmarking efforts and alleviate future benchmarking requirements.\nAdditionally, JAM introduces the concept of accords, multi-instance, multi-sharded smart contracts\nthat govern and enforce specific interaction protocols between parachains. Furthermore, full\nCross-Chain Message Passing (XCMP) support is essential, enabling the removal of limitations on\ninformation transfer between parachains, typically facilitated by Cross-Chain Messages (XCM)."),(0,o.kt)("p",null,"Regarding Agile Coretime, JAM retains compatibility with existing setups. However, it introduces the\ncapability to target coretime not only at parachains but also at arbitrary sets of work packages.\nThis flexibility enhances the versatility and efficiency of resource allocation within the JAM\necosystem."))}m.isMDXComponent=!0},95209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refine-accumulate-376dcd569f7a4b6f1ed20798f522bd0e.png"}}]);