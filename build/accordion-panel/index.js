!function(){"use strict";var e=window.wp.blocks,t=window.wp.element;const a={};a.dropdown=(0,t.createElement)("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M87 37H13a4 4 0 00-4 4v18a4 4 0 004 4h74a4 4 0 004-4V41a4 4 0 00-4-4zm2 22a2 2 0 01-2 2H13a2 2 0 01-2-2V41a2 2 0 012-2h74a2 2 0 012 2zm-37-9a1 1 0 01-1 1H18a1 1 0 010-2h33a1 1 0 011 1zm30.33-4.07a1 1 0 01.14 1.41l-5 6.12a1 1 0 01-.77.37 1 1 0 01-.78-.37l-5-6.12a1 1 0 011.55-1.27l4.23 5.18 4.22-5.18a1 1 0 011.41-.14z"}));var n=a,r=window.wp.i18n,c=window.wp.blockEditor,l=window.wp.data,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/accordion-panel","version":"0.1.0","title":"Accordion Panel","category":"widgets","description":"Example block scaffolded with Create Block tool.","supports":{"html":false,"align":["wide","full"],"__experimentalLayout":{"type":"constrained"}},"parent":["carkeek-blocks/accordion"],"usesContext":["carkeek-blocks/headerStyle"],"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"title":{"type":"string"},"inheritedHeaderStyle":{"type":"string"},"layout":{"type":"object","default":{"type":"constrained"}}}}'),o=[{attributes:{title:{type:"string"},inheritedHeaderStyle:{type:"string"},content:{type:"string"}},save(e){let{attributes:a}=e;const{title:n,content:r,inheritedHeaderStyle:l}=a,i=`${l}`;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i,{"data-aria-accordion-heading":!0,className:"ck-accordion-header"},(0,t.createElement)(c.RichText.Content,{value:n})),(0,t.createElement)("div",{"data-aria-accordion-panel":!0,className:"ck-accordion-panel"},(0,t.createElement)(c.RichText.Content,{value:r}),(0,t.createElement)(c.InnerBlocks.Content,null)))}},{attributes:{title:{type:"string"},inheritedHeaderStyle:{type:"string"},content:{type:"string"}},save(e){let{attributes:a}=e;const{title:n,content:r,inheritedHeaderStyle:l}=a,i=`${l}`;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i,{"data-aria-accordion-heading":!0,className:"ck-accordion-header"},n),(0,t.createElement)("div",{"data-aria-accordion-panel":!0,className:"ck-accordion-panel"},(0,t.createElement)(c.RichText.Content,{value:r}),(0,t.createElement)(c.InnerBlocks.Content,null)))}}];(0,e.registerBlockType)(i,{icon:n.dropdown,edit:function(e){const{attributes:a,setAttributes:n,clientId:i}=e,{title:o,inheritedHeaderStyle:s,layout:d}=a;if(!s){var p=(0,l.select)("core/block-editor").getBlockParents(i);const e=(0,l.select)("core/block-editor").getBlockAttributes(p);n({inheritedHeaderStyle:e.headerStyle})}const m=(0,c.useSetting)("layout")||{},u=null!=d&&d.type?{...m,...d}:{...m,...d,type:"constrained"},k=(0,c.useBlockProps)(),h=(0,c.useInnerBlocksProps)(k,{__experimentalLayout:u});return(0,t.createElement)("div",h,(0,t.createElement)(c.RichText,{tagName:s,value:o,className:"ck-accordion-button",onChange:e=>n({title:e}),placeholder:(0,r.__)("Section Heading...")}),(0,t.createElement)("div",{className:"ck-accordion-panel"},(0,t.createElement)(c.InnerBlocks,{className:"ck-accordion-inner-blocks",template:[["core/paragraph",{placeholder:"Enter panel content..."}]]})))},save:function(e){let{attributes:a}=e;const{title:n,inheritedHeaderStyle:r}=a,l=`${r}`;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l,{"data-aria-accordion-heading":!0,className:"ck-accordion-header"},(0,t.createElement)(c.RichText.Content,{value:n})),(0,t.createElement)("div",{"data-aria-accordion-panel":!0,className:"ck-accordion-panel"},(0,t.createElement)(c.InnerBlocks.Content,null)))},deprecated:o})}();