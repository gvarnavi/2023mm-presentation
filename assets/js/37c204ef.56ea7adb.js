"use strict";(self.webpackChunk_2023_mm_presentation=self.webpackChunk_2023_mm_presentation||[]).push([[71],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={id:"transition",sidebar_position:1,title:"Transition Outline",hide_table_of_contents:!0,hide_title:!0},s=void 0,a={unversionedId:"results/transition",id:"results/transition",title:"Transition Outline",description:"Talk Outline",source:"@site/slides/results/transition.md",sourceDirName:"results",slug:"/results/transition",permalink:"/2023mm-presentation/slides/results/transition",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"transition",sidebar_position:1,title:"Transition Outline",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Simultaneous Reconstructions",permalink:"/2023mm-presentation/slides/methods/methods_simultaneous"},next:{title:"Bulk Antiferromagnets",permalink:"/2023mm-presentation/slides/results/results_bulk"}},c={},l=[{value:"Talk Outline",id:"talk-outline",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"talk-outline"},"Talk Outline"),(0,i.kt)("mermaid",{value:'%%{init: { \'theme\': \'neutral\', \'gitGraph\': {\'mainBranchName\': "presentation"}} }%%\ngitGraph\n   commit id: "outline"\n   branch microscopy-bg\n   checkout microscopy-bg\n   commit id: "4dstem"\n   commit id: "magnetization"\n   checkout presentation\n   merge microscopy-bg tag: "Questions?"\n   branch maths-bg\n   checkout maths-bg\n   commit id:"projection-sets"\n   commit id:"ptychography"\n   checkout presentation\n   merge maths-bg tag: "Questions?"\n   branch methods\n   checkout methods\n   commit id:"py4DSTEM"\n   commit id:"simultaneous"\n   checkout presentation\n   merge methods tag: "Questions?" type: highlight\n   branch results\n   checkout results\n   commit id:"AFM"\n   commit id:"AFM-twin"\n   checkout presentation\n   merge results tag: "Questions?"\n   commit id: "conclusions"\n   commit id: "outlook"'}))}p.isMDXComponent=!0}}]);