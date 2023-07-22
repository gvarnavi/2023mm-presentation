(self.webpackChunk_2023_mm_presentation=self.webpackChunk_2023_mm_presentation||[]).push([[630],{1187:(a,e,t)=>{var s={"./arquero.js":9391,"./arrow.js":7938,"./dependencies.js":7363,"./dependency.js":170,"./dom/canvas.js":6342,"./dom/context2d.js":9733,"./dom/download.js":2938,"./dom/element.js":3380,"./dom/index.js":1820,"./dom/input.js":7585,"./dom/range.js":7170,"./dom/select.js":1106,"./dom/svg.js":5895,"./dom/text.js":281,"./dom/uid.js":1831,"./duckdb.js":3874,"./fileAttachment.js":3277,"./files/buffer.js":3825,"./files/index.js":6155,"./files/text.js":9974,"./files/url.js":2174,"./generators/disposable.js":2238,"./generators/filter.js":7254,"./generators/index.js":6785,"./generators/input.js":8044,"./generators/map.js":3921,"./generators/observe.js":1367,"./generators/queue.js":9042,"./generators/range.js":2707,"./generators/valueAt.js":5890,"./generators/worker.js":8179,"./html.js":6566,"./index.js":7138,"./leaflet.js":3861,"./library.js":4739,"./md.js":1715,"./mermaid.js":8843,"./mutable.js":221,"./now.js":3666,"./promises/delay.js":2984,"./promises/index.js":5898,"./promises/tick.js":2989,"./promises/when.js":7782,"./require.js":9204,"./resolve.js":5545,"./sqlite.js":4054,"./svg.js":4745,"./table.js":4199,"./template.js":9225,"./tex.js":667,"./that.js":5243,"./vegalite.js":423,"./width.js":282,"./xlsx.js":538};function m(a){return Promise.resolve().then((()=>{if(!t.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return t(s[a])}))}m.keys=()=>Object.keys(s),m.id=1187,a.exports=m},6864:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>N,metadata:()=>c,toc:()=>k});var s=t(7462),m=t(7294),n=t(3905),p=t(7940),r=t(9583);const l=function(){const a=(0,m.useRef)();return(0,m.useEffect)((()=>{const e=new p.r_;return e.module(r.Z,p.lj.into(a.current)),()=>e.dispose()}),[]),m.createElement(m.Fragment,null,m.createElement("div",{ref:a}))},N={id:"maths-bg_epie",sidebar_position:3,title:"Ptychographic Iterative Engine",hide_table_of_contents:!0,hide_title:!0},i=void 0,c={unversionedId:"maths-bg/maths-bg_epie",id:"maths-bg/maths-bg_epie",title:"Ptychographic Iterative Engine",description:"Electron Ptychography",source:"@site/slides/maths-bg/maths-bg_epie.mdx",sourceDirName:"maths-bg",slug:"/maths-bg/maths-bg_epie",permalink:"/2023mm-presentation/slides/maths-bg/maths-bg_epie",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"maths-bg_epie",sidebar_position:3,title:"Ptychographic Iterative Engine",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Projection Set Algorithms",permalink:"/2023mm-presentation/slides/maths-bg/maths-bg_projections"},next:{title:"Transition Outline",permalink:"/2023mm-presentation/slides/methods/methods_outline"}},o={},k=[{value:"Electron Ptychography",id:"electron-ptychography",level:2}],h={toc:k},d="wrapper";function g(a){let{components:e,...t}=a;return(0,n.kt)(d,(0,s.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"electron-ptychography"},"Electron Ptychography"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each diffraction pattern ","\u2192"," non-convex set",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Problem: reconstruct probe ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover",mathvariant:"script"},"P"),(0,n.kt)("mo",{parentName:"mover"},"^"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\hat{\\mathcal{P}}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9468em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9468em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.08222em"}},"P")),(0,n.kt)("span",{parentName:"span",style:{top:"-3.2523em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1667em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"^")))))))))))," and object ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover",mathvariant:"script"},"O"),(0,n.kt)("mo",{parentName:"mover"},"^"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\hat{\\mathcal{O}}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9468em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9468em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,n.kt)("span",{parentName:"span",style:{top:"-3.2523em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1667em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"^")))))))))))," from diffraction intensities ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"I")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"))))))))),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mtable",{parentName:"semantics",rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03c8"),(0,n.kt)("mi",{parentName:"msub"},"j")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"r"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover",mathvariant:"script"},"P"),(0,n.kt)("mo",{parentName:"mover"},"^")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"r"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover",mathvariant:"script"},"O"),(0,n.kt)("mo",{parentName:"mover"},"^")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"r"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub",mathvariant:"bold-italic"},"R"),(0,n.kt)("mi",{parentName:"msub"},"j")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"I"),(0,n.kt)("mi",{parentName:"msub"},"j")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"k"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"\u2223"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"script"},"F"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03c8"),(0,n.kt)("mi",{parentName:"msub"},"j")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"r"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"]")),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"\u2223")),(0,n.kt)("mn",{parentName:"msup"},"2"))))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{aligned} \\psi_j(\\boldsymbol{r}) &= \\hat{\\mathcal{P}}(\\boldsymbol{r}) \\times \\hat{\\mathcal{O}}(\\boldsymbol{r}-\\boldsymbol{R}_j) \\\\ I_j(\\boldsymbol{k}) &= \\left| \\mathcal{F}\\left[\\psi_j(\\boldsymbol{r})\\right]\\right|^2 \\end{aligned}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3.2208em",verticalAlign:"-1.3604em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-r"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.8604em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.9136em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord boldsymbol",style:{marginRight:"0.03194em"}},"r"))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.2996em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord boldsymbol",style:{marginRight:"0.01852em"}},"k"))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3604em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"col-align-l"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.8604em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.9136em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9468em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.08222em"}},"P")),(0,n.kt)("span",{parentName:"span",style:{top:"-3.2523em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1667em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"^"))))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord boldsymbol",style:{marginRight:"0.03194em"}},"r"))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9468em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,n.kt)("span",{parentName:"span",style:{top:"-3.2523em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1667em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"^"))))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord boldsymbol",style:{marginRight:"0.03194em"}},"r"))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord boldsymbol",style:{marginRight:"0.00421em"}},"R"))),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.2996em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"\u2223"),(0,n.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.09931em"}},"F"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord boldsymbol",style:{marginRight:"0.03194em"}},"r"))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"]")),(0,n.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"\u2223")),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.954em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3604em"}},(0,n.kt)("span",{parentName:"span"})))))))))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rich literature of reconstruction algorithms:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'"Fourier" projection',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reconstructed probe and object accurately reproduce measured intensities"))),(0,n.kt)("li",{parentName:"ul"},'"Overlap" projection',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reconstructed probe and object are self-consistent with adjacent scanning positions")))))),(0,n.kt)("details",null,(0,n.kt)("summary",null," Interactive Extended Ptychographic Iterative Engine Simulation "),(0,n.kt)(l,{mdxType:"EpieComponent"})))}g.isMDXComponent=!0}}]);