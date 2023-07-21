"use strict";(self.webpackChunk_2023_mm_presentation=self.webpackChunk_2023_mm_presentation||[]).push([[822],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),f=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=f(t.components);return i.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},A=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=f(n),A=r,d=p["".concat(s,".").concat(A)]||p[A]||m[A]||a;return n?i.createElement(d,o(o({ref:e},c),{},{components:n})):i.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=A;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var f=2;f<a;f++)o[f]=n[f];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}A.displayName="MDXCreateElement"},7464:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var i,r,a=n(7462),o=n(7294),l=n(3905);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s.apply(this,arguments)}const f=t=>{let{title:e,titleId:n,...a}=t;return o.createElement("svg",s({fill:"currentColor",fontFamily:"system-ui, sans-serif",fontSize:10,textAnchor:"middle",width:1e3,height:600,viewBox:"0 0 1000 600",id:"svg5478",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",background:"#fff",height:"intrinsic",maxWidth:"100%"},"aria-labelledby":n},a),e?o.createElement("title",{id:n},e):null,i||(i=o.createElement("style",{id:"style5472"},".plot-d6a7b5 text,.plot-d6a7b5 tspan{white-space:pre}")),r||(r=o.createElement("g",{"aria-label":"raster",id:"g5476",transform:"translate(100 99.75)"},o.createElement("image",{transform:"matrix(1 0 0 -1 .5 400)",width:799,height:399.5,preserveAspectRatio:"none",xlinkHref:"data:image/png;base64,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",id:"image5474"}))),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:69.29,y:514.651,id:"text295-3",transform:"rotate(-30)"},o.createElement("tspan",{id:"tspan293-6",x:69.29,y:514.651,style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}},"Microscopy"),o.createElement("tspan",{x:69.29,y:554.651,id:"tspan384",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}},"Background")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:269.94,y:369.766,id:"text295-3-7",transform:"rotate(-30)"},o.createElement("tspan",{id:"tspan293-6-5",x:269.94,y:369.766,style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"start",textAnchor:"start",fill:"#afafaf",fillOpacity:1}},"Mathematics"),o.createElement("tspan",{x:269.94,y:409.766,id:"tspan384-3",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"start",textAnchor:"start",fill:"#afafaf",fillOpacity:1}},"Background")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:505.481,y:504.061,id:"text295-3-7-5",transform:"rotate(-30)"},o.createElement("tspan",{x:505.481,y:504.061,id:"tspan384-3-2",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",fill:"#afafaf",fillOpacity:1}},"Results")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:414.494,y:714.042,id:"text295-3-7-5-2",transform:"rotate(-30)"},o.createElement("tspan",{x:414.494,y:714.042,id:"tspan384-3-2-7",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}},"Conclusions"),o.createElement("tspan",{x:414.494,y:754.042,id:"tspan584",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}}," & Outlook")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:240.186,y:613.304,id:"text295-3-7-5-9",transform:"rotate(-30)"},o.createElement("tspan",{x:240.186,y:613.304,id:"tspan384-3-2-1",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#000",fillOpacity:1}},"Open-source"),o.createElement("tspan",{x:240.186,y:653.304,id:"tspan549",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#000",fillOpacity:1}},"Methods")))},c={id:"methods_outline",sidebar_position:1,title:"Transition Outline",hide_table_of_contents:!0,hide_title:!0},p=void 0,m={unversionedId:"methods/methods_outline",id:"methods/methods_outline",title:"Transition Outline",description:"",source:"@site/slides/methods/methods_outline.mdx",sourceDirName:"methods",slug:"/methods/methods_outline",permalink:"/2023mm-presentation/slides/methods/methods_outline",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"methods_outline",sidebar_position:1,title:"Transition Outline",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Extended Ptychographic Iterative Engine",permalink:"/2023mm-presentation/slides/maths-bg/maths-bg_epie"},next:{title:"Phase Retrieval in py4DSTEM",permalink:"/2023mm-presentation/slides/methods/methods_py4dstem"}},A={},d=[],y={toc:d},g="wrapper";function h(t){let{components:e,...n}=t;return(0,l.kt)(g,(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(f,{width:"80%",height:"auto",mdxType:"OutlineImageLight"}))}h.isMDXComponent=!0}}]);