(()=>{var e,t={856:(e,t,l)=>{"use strict";const a=window.React,o={};o.columns=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",viewBox:"0 0 32 32"},(0,a.createElement)("path",{d:"M1 1023.362c-.552 0-1 .486-1 1.084v23.832c0 .6.447 1.084 1 1.084h30c.553 0 1-.485 1-1.084v-23.832c0-.599-.447-1.084-1-1.084H1zm22 1a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm-27.063 3h28.125c.518 0 .94.392.94.875v19.25c0 .483-.421.875-.94.875H1.938c-.518 0-.937-.392-.937-.875v-19.25c0-.483.42-.875.938-.875zm.094 1v19h8v-19h-8zm10 0v19h8v-19h-8zm10 0v19h8v-19h-8z",transform:"translate(0 -1020.362)"}));const r=o;var n=l(485),s=l.n(n);const c=window.lodash,i=window.wp.i18n,m=window.wp.blockEditor,u=window.wp.components,p=window.wp.blocks,d=window.wp.data,k=[{attributes:{innerBlockType:{type:"string"},allowedBlocks:{type:"array"},blocksTemplate:{type:"array"},allowItemsWrap:{type:"boolean",default:!1},itemsPerRow:{type:"number",default:3},itemsPerRowMobile:{type:"number",default:1},itemsPerRowTablet:{type:"number",default:2},alignInnerBlocks:{type:"string",default:"left"},rowDirection:{type:"string",default:"horizontal"}},save({attributes:e}){const{allowItemsWrap:t,itemsPerRow:l,itemsPerRowMobile:o,itemsPerRowTablet:r,alignInnerBlocks:n,rowDirection:c}=e,i=m.useBlockProps.save();return(0,a.createElement)("div",{...i,className:s()(i.className,{"ck-columns":"true",[`ck-columns-wrap-${t}`]:!0,[`ck-columns-align-${n}`]:!0,[`has-${l}-columns`]:!0,[`has-${o}-columns-mobile`]:!0,[`has-${r}-columns-tablet`]:!0,[`direction-${c}`]:"true"})},(0,a.createElement)("div",{className:"ck-columns__wrap"},(0,a.createElement)(m.InnerBlocks.Content,null)))}},{attributes:{innerBlockType:{type:"string"},allowedBlocks:{type:"array"},blocksTemplate:{type:"array"},allowItemsWrap:{type:"boolean",default:!1},itemsPerRow:{type:"number",default:3},alignInnerBlocks:{type:"string",default:"left"},rowDirection:{type:"string",default:"horizontal"}},save({attributes:e}){const{allowItemsWrap:t,itemsPerRow:l,alignInnerBlocks:o,rowDirection:r}=e,n=m.useBlockProps.save();return(0,a.createElement)("div",{...n,className:s()(n.className,{"ck-columns":"true",[`ck-columns-wrap-${t}`]:!0,[`ck-columns-align-${o}`]:!0,[`has-${l}-columns`]:"true",[`direction-${r}`]:"true"})},(0,a.createElement)("div",{className:"ck-columns__wrap"},(0,a.createElement)(m.InnerBlocks.Content,null)))}},{attributes:{innerBlockType:{type:"string"},allowedBlocks:{type:"array"},blocksTemplate:{type:"array"},allowItemsWrap:{type:"boolean",default:!1},itemsPerRow:{type:"number",default:3},alignInnerBlocks:{type:"string",default:"left"}},save({attributes:e}){const{allowItemsWrap:t,itemsPerRow:l,alignInnerBlocks:o}=e,r=m.useBlockProps.save();return(0,a.createElement)("div",{...r,className:s()(r.className,{"ck-columns":"true",[`ck-columns-wrap-${t}`]:!0,[`ck-columns-align-${o}`]:!0,[`has-${l}-columns`]:"true"})},(0,a.createElement)("div",{className:"ck-columns__wrap"},(0,a.createElement)(m.InnerBlocks.Content,null)))}}],b=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/widget-row","version":"2.0.01","title":"Widget Row","category":"widgets","description":"Layout inner blocks, equally distributed in columns.","supports":{"anchor":true,"html":false,"align":["wide","full","left","center","right"],"spacing":{"padding":true,"margin":true}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"border-solid","label":"Borders Solid"},{"name":"border-dashed","label":"Borders Dashed"},{"name":"border-dotted","label":"Borders Dotted"}],"attributes":{"innerBlockType":{"type":"string"},"allowedBlocks":{"type":"array"},"blocksTemplate":{"type":"array"},"layoutType":{"type":"string","default":"grid"},"allowItemsWrap":{"type":"boolean","default":false},"itemsPerRow":{"type":"number","default":3},"itemsPerRowMobile":{"type":"number","default":1},"itemsPerRowTablet":{"type":"number","default":2},"alignInnerBlocks":{"type":"string","default":"left"},"customGap":{"type":"boolean","default":false},"rowGap":{"type":"number","default":3},"columnGap":{"type":"number","default":3},"style":{"type":"object","default":{"spacing":{"margin":{},"padding":{}}}}},"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,p.registerBlockType)(b,{icon:{src:r.columns},keywords:[(0,i.__)("columns","carkeek-blocks"),(0,i.__)("horizontal","carkeek-blocks"),(0,i.__)("layout","carkeek-blocks")],edit:function(e){const{attributes:t,setAttributes:l,clientId:o}=e,{innerBlockType:r,layoutType:n,allowedBlocks:k,allowItemsWrap:b,itemsPerRow:w,itemsPerRowMobile:g,itemsPerRowTablet:h,alignInnerBlocks:y,customGap:f,columnGap:v,rowGap:B}=t;n||l({layoutType:"flex"}),h||l({itemsPerRowTablet:w>3?3:w}),g||l({itemsPerRowMobile:1});const _=(0,p.getBlockTypes)();let R=k,E=(0,i.__)("a Block");if(r){R=[r];const e=(0,p.getBlockType)(r);E=e?e.title:(0,i.__)("a Block")}else R=[];let I=_.map((e=>({label:e.title,value:e.name})));I=(0,c.sortBy)(I,["label"]),I.unshift({label:"Select a Block",value:""});let P=(0,m.useBlockProps)();const C=(0,d.useSelect)((e=>e("core/block-editor").getBlock(o).innerBlocks));return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(m.InspectorControls,null,(0,a.createElement)(u.PanelBody,{title:(0,i.__)("Layout Settings","carkeek-blocks")},"flex"==n&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(u.ToggleControl,{label:(0,i.__)("Allow Items to Wrap"),checked:b,onChange:e=>l({allowItemsWrap:e})}),(0,a.createElement)(u.RadioControl,{label:"Align inner blocks",selected:y,help:(0,i.__)("If the number of inner blocks does not complete a row, how should they be aligned?"),options:[{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Center",value:"center"},{label:"Stretch to fit",value:"stretch"}],onChange:e=>l({alignInnerBlocks:e})}),(0,a.createElement)(u.ToggleControl,{label:(0,i.__)("Customize Gaps"),checked:f,onChange:e=>l({customGap:e})}),f&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(u.RangeControl,{label:(0,i.__)("Column Gap","carkeek-blocks"),value:v,help:"Set the space between each item",onChange:e=>l({columnGap:parseInt(e)}),min:0,max:8}),(0,a.createElement)(u.RangeControl,{label:(0,i.__)("Row Gap","carkeek-blocks"),value:B,help:"Set the space between each row",onChange:e=>l({rowGap:parseInt(e)}),min:0,max:8}))),(b||"stretch"!==y)&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(u.RangeControl,{label:(0,i.__)("Items Per Row","carkeek-blocks"),value:w,help:b?"":"This will fix the size of each item",onChange:e=>l({itemsPerRow:e}),min:1,max:6}))),(0,a.createElement)(u.PanelBody,{title:(0,i.__)("Responsive Settings","carkeek-blocks")},(0,a.createElement)(u.RangeControl,{label:(0,i.__)("Items Per Row Mobile","carkeek-blocks"),value:g,onChange:e=>l({itemsPerRowMobile:e}),min:1,max:6}),(0,a.createElement)(u.RangeControl,{label:(0,i.__)("Items Per Row Tablet","carkeek-blocks"),value:h,onChange:e=>l({itemsPerRowTablet:e}),min:1,max:6}))),(0,a.createElement)(m.InspectorAdvancedControls,null,(0,a.createElement)(u.SelectControl,{label:"Restrict to Block",value:r,options:I,onChange:e=>l({innerBlockType:e})}),(0,a.createElement)(u.RadioControl,{label:"Layout Type",selected:n,help:(0,i.__)("If trailing items should align center choose flex, otherwise grid is preferred"),options:[{label:"Grid",value:"grid"},{label:"Flex-flow",value:"flex"}],onChange:e=>l({layoutType:e})})),(0,a.createElement)("div",{...P,className:s()(P.className,{"ck-columns":"true",[`ck-columns-layout-${n}`]:"grid"==n,[`ck-columns-wrap-${b}`]:"flex"==n,[`ck-columns-align-${y}`]:"flex"==n,[`has-${w}-columns`]:"stretch"!==y||"grid"==n,[`has-${g}-columns-mobile`]:!0,[`has-${h}-columns-tablet`]:!0})},r?(0,a.createElement)(m.InnerBlocks,{allowedBlocks:R,orientation:"horizontal",renderAppender:()=>!("flex"==n&&!b&&C.length>=w)&&(0,a.createElement)("button",{className:"ck-custom-appender",onClick:()=>{(0,d.dispatch)("core/block-editor").insertBlocks((0,p.createBlock)(r),9999,o)}},(0,i.__)(" + Add ")," ",E)}):(0,a.createElement)(m.InnerBlocks,{orientation:"horizontal"})))},deprecated:k,save({attributes:e}){const{allowItemsWrap:t,itemsPerRow:l,layoutType:o,itemsPerRowMobile:r,itemsPerRowTablet:n,alignInnerBlocks:c,customGap:i,columnGap:u,rowGap:p}=e,d=m.useBlockProps.save();return(0,a.createElement)("div",{...d,className:s()(d.className,{"ck-columns":"true",[`ck-columns-layout-${o}`]:"grid"==o,[`ck-columns-wrap-${t}`]:"flex"==o,[`ck-columns-align-${c}`]:"flex"==o,[`has-${l}-columns`]:"stretch"!==c||"grid"==o,[`has-${r}-columns-mobile`]:!0,[`has-${n}-columns-tablet`]:!0,[`ck-columns-col-gap-${u}`]:i,[`ck-columns-row-gap-${p}`]:i})},(0,a.createElement)("div",{className:"ck-columns__wrap"},(0,a.createElement)(m.InnerBlocks.Content,null)))}})},485:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var n=o.apply(null,l);n&&e.push(n)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var s in l)a.call(l,s)&&l[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,o,r)=>{if(!l){var n=1/0;for(m=0;m<e.length;m++){for(var[l,o,r]=e[m],s=!0,c=0;c<l.length;c++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(s=!1,r<n&&(n=r));if(s){e.splice(m--,1);var i=o();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2621:0,6145:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[n,s,c]=l,i=0;if(n.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(c)var m=c(a)}for(t&&t(l);i<n.length;i++)r=n[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(m)},l=globalThis.webpackChunkcarkeek_blocks_v2=globalThis.webpackChunkcarkeek_blocks_v2||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[6145],(()=>a(856)));o=a.O(o)})();