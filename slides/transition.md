---
id: transition
sidebar_position: 6
title: Transition Outline
hide_table_of_contents: true
hide_title: true
---

## Talk Outline

```mermaid
%%{init: { 'theme': 'neutral', 'gitGraph': {'mainBranchName': "presentation"}} }%%
gitGraph
   commit id: "outline"
   branch microscopy-bg
   checkout microscopy-bg
   commit id: "4dstem"
   commit id: "magnetization"
   checkout presentation
   merge microscopy-bg tag: "Questions?"
   branch maths-bg
   checkout maths-bg
   commit id:"projection-sets"
   commit id:"ptychography"
   checkout presentation
   merge maths-bg tag: "Questions?"
   branch methods
   checkout methods
   commit id:"py4DSTEM"
   commit id:"simultaneous"
   checkout presentation
   merge methods tag: "Questions?"
   branch results
   checkout results
   commit id:"AFM"
   commit id:"AFM-twin"
   checkout presentation
   merge results tag: "Questions?" type: highlight
   commit id: "conclusions"
   commit id: "outlook"
```
