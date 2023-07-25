!function(){var e,t={562:function(e,t,l){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},n.apply(this,arguments)}var o=window.wp.element;const a={};a.columns=(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",viewBox:"0 0 32 32"},(0,o.createElement)("path",{d:"M1 1023.362c-.552 0-1 .486-1 1.084v23.832c0 .6.447 1.084 1 1.084h30c.553 0 1-.485 1-1.084v-23.832c0-.599-.447-1.084-1-1.084H1zm22 1a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm-27.063 3h28.125c.518 0 .94.392.94.875v19.25c0 .483-.421.875-.94.875H1.938c-.518 0-.937-.392-.937-.875v-19.25c0-.483.42-.875.938-.875zm.094 1v19h8v-19h-8zm10 0v19h8v-19h-8zm10 0v19h8v-19h-8z",transform:"translate(0 -1020.362)"}));var r=a,s=l(184),c=l.n(s),i=window.lodash,u=window.wp.i18n,m=window.wp.blockEditor,p=window.wp.components,k=window.wp.blocks,d=window.wp.data,b=[{attributes:{innerBlockType:{type:"string"},allowedBlocks:{type:"array"},blocksTemplate:{type:"array"},allowItemsWrap:{type:"boolean",default:!1},itemsPerRow:{type:"number",default:3},itemsPerRowMobile:{type:"number",default:1},itemsPerRowTablet:{type:"number",default:2},alignInnerBlocks:{type:"string",default:"left"},rowDirection:{type:"string",default:"horizontal"}},save(e){let{attributes:t}=e;const{allowItemsWrap:l,itemsPerRow:a,itemsPerRowMobile:r,itemsPerRowTablet:s,alignInnerBlocks:i,rowDirection:u}=t,p=m.useBlockProps.save();return(0,o.createElement)("div",n({},p,{className:c()(p.className,{"ck-columns":"true",[`ck-columns-wrap-${l}`]:!0,[`ck-columns-align-${i}`]:!0,[`has-${a}-columns`]:!0,[`has-${r}-columns-mobile`]:!0,[`has-${s}-columns-tablet`]:!0,[`direction-${u}`]:"true"})}),(0,o.createElement)("div",{className:"ck-columns__wrap"},(0,o.createElement)(m.InnerBlocks.Content,null)))}},{attributes:{innerBlockType:{type:"string"},allowedBlocks:{type:"array"},blocksTemplate:{type:"array"},allowItemsWrap:{type:"boolean",default:!1},itemsPerRow:{type:"number",default:3},alignInnerBlocks:{type:"string",default:"left"},rowDirection:{type:"string",default:"horizontal"}},save(e){let{attributes:t}=e;const{allowItemsWrap:l,itemsPerRow:a,alignInnerBlocks:r,rowDirection:s}=t,i=m.useBlockProps.save();return(0,o.createElement)("div",n({},i,{className:c()(i.className,{"ck-columns":"true",[`ck-columns-wrap-${l}`]:!0,[`ck-columns-align-${r}`]:!0,[`has-${a}-columns`]:"true",[`direction-${s}`]:"true"})}),(0,o.createElement)("div",{className:"ck-columns__wrap"},(0,o.createElement)(m.InnerBlocks.Content,null)))}},{attributes:{innerBlockType:{type:"string"},allowedBlocks:{type:"array"},blocksTemplate:{type:"array"},allowItemsWrap:{type:"boolean",default:!1},itemsPerRow:{type:"number",default:3},alignInnerBlocks:{type:"string",default:"left"}},save(e){let{attributes:t}=e;const{allowItemsWrap:l,itemsPerRow:a,alignInnerBlocks:r}=t,s=m.useBlockProps.save();return(0,o.createElement)("div",n({},s,{className:c()(s.className,{"ck-columns":"true",[`ck-columns-wrap-${l}`]:!0,[`ck-columns-align-${r}`]:!0,[`has-${a}-columns`]:"true"})}),(0,o.createElement)("div",{className:"ck-columns__wrap"},(0,o.createElement)(m.InnerBlocks.Content,null)))}}],f=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/widget-row","version":"2.0.0","title":"Widget Row","category":"widgets","description":"Layout inner blocks, equally distributed in columns.","supports":{"anchor":true,"html":false,"align":["wide","full","left","center","right"]},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"border-solid","label":"Borders Solid"},{"name":"border-dashed","label":"Borders Dashed"},{"name":"border-dotted","label":"Borders Dotted"}],"attributes":{"innerBlockType":{"type":"string"},"allowedBlocks":{"type":"array"},"blocksTemplate":{"type":"array"},"layoutType":{"type":"string","default":"grid"},"allowItemsWrap":{"type":"boolean","default":false},"itemsPerRow":{"type":"number","default":3},"itemsPerRowMobile":{"type":"number","default":1},"itemsPerRowTablet":{"type":"number","default":2},"alignInnerBlocks":{"type":"string","default":"left"},"customGap":{"type":"boolean","default":false},"rowGap":{"type":"number","default":3},"columnGap":{"type":"number","default":3}},"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,k.registerBlockType)(f,{icon:{src:r.columns},keywords:[(0,u.__)("columns","carkeek-blocks"),(0,u.__)("horizontal","carkeek-blocks"),(0,u.__)("layout","carkeek-blocks")],edit:function(e){const{attributes:t,setAttributes:l,clientId:a}=e,{innerBlockType:r,layoutType:s,allowedBlocks:b,allowItemsWrap:f,itemsPerRow:w,itemsPerRowMobile:h,itemsPerRowTablet:g,alignInnerBlocks:y,customGap:v,columnGap:B,rowGap:_}=t;s||l({layoutType:"flex"}),g||l({itemsPerRowTablet:w>3?3:w}),h||l({itemsPerRowMobile:1});const R=(0,k.getBlockTypes)();let E=b,P=(0,u.__)("a Block");if(r){E=[r];const e=(0,k.getBlockType)(r);P=e?e.title:(0,u.__)("a Block")}else E=[];let I=R.map((e=>({label:e.title,value:e.name})));I=(0,i.sortBy)(I,["label"]),I.unshift({label:"Select a Block",value:""});let C=(0,m.useBlockProps)();const x=(0,d.useSelect)((e=>e("core/block-editor").getBlock(a).innerBlocks));return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(m.InspectorControls,null,(0,o.createElement)(p.PanelBody,{title:(0,u.__)("Layout Settings","carkeek-blocks")},"flex"==s&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.ToggleControl,{label:(0,u.__)("Allow Items to Wrap"),checked:f,onChange:e=>l({allowItemsWrap:e})}),(0,o.createElement)(p.RadioControl,{label:"Align inner blocks",selected:y,help:(0,u.__)("If the number of inner blocks does not complete a row, how should they be aligned?"),options:[{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Center",value:"center"},{label:"Stretch to fit",value:"stretch"}],onChange:e=>l({alignInnerBlocks:e})}),(0,o.createElement)(p.ToggleControl,{label:(0,u.__)("Customize Gaps"),checked:v,onChange:e=>l({customGap:e})}),v&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.RangeControl,{label:(0,u.__)("Column Gap","carkeek-blocks"),value:B,help:"Set the space between each item",onChange:e=>l({columnGap:parseInt(e)}),min:0,max:8}),(0,o.createElement)(p.RangeControl,{label:(0,u.__)("Row Gap","carkeek-blocks"),value:_,help:"Set the space between each row",onChange:e=>l({rowGap:parseInt(e)}),min:0,max:8}))),(f||"stretch"!==y)&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.RangeControl,{label:(0,u.__)("Items Per Row","carkeek-blocks"),value:w,help:f?"":"This will fix the size of each item",onChange:e=>l({itemsPerRow:e}),min:1,max:6}))),(0,o.createElement)(p.PanelBody,{title:(0,u.__)("Responsive Settings","carkeek-blocks")},(0,o.createElement)(p.RangeControl,{label:(0,u.__)("Items Per Row Mobile","carkeek-blocks"),value:h,onChange:e=>l({itemsPerRowMobile:e}),min:1,max:6}),(0,o.createElement)(p.RangeControl,{label:(0,u.__)("Items Per Row Tablet","carkeek-blocks"),value:g,onChange:e=>l({itemsPerRowTablet:e}),min:1,max:6}))),(0,o.createElement)(m.InspectorAdvancedControls,null,(0,o.createElement)(p.SelectControl,{label:"Restrict to Block",value:r,options:I,onChange:e=>l({innerBlockType:e})}),(0,o.createElement)(p.RadioControl,{label:"Layout Type",selected:s,help:(0,u.__)("If trailing items should align center choose flex, otherwise grid is preferred"),options:[{label:"Grid",value:"grid"},{label:"Flex-flow",value:"flex"}],onChange:e=>l({layoutType:e})})),(0,o.createElement)("div",n({},C,{className:c()(C.className,{"ck-columns":"true",[`ck-columns-layout-${s}`]:"grid"==s,[`ck-columns-wrap-${f}`]:"flex"==s,[`ck-columns-align-${y}`]:"flex"==s,[`has-${w}-columns`]:"stretch"!==y||"grid"==s,[`has-${h}-columns-mobile`]:!0,[`has-${g}-columns-tablet`]:!0})}),r?(0,o.createElement)(m.InnerBlocks,{allowedBlocks:E,orientation:"horizontal",renderAppender:()=>!("flex"==s&&!f&&x.length>=w)&&(0,o.createElement)("button",{className:"ck-custom-appender",onClick:()=>{(0,d.dispatch)("core/block-editor").insertBlocks((0,k.createBlock)(r),9999,a)}},(0,u.__)(" + Add ")," ",P)}):(0,o.createElement)(m.InnerBlocks,{orientation:"horizontal"})))},deprecated:b,save(e){let{attributes:t}=e;const{allowItemsWrap:l,itemsPerRow:a,layoutType:r,itemsPerRowMobile:s,itemsPerRowTablet:i,alignInnerBlocks:u,customGap:p,columnGap:k,rowGap:d}=t,b=m.useBlockProps.save();return(0,o.createElement)("div",n({},b,{className:c()(b.className,{"ck-columns":"true",[`ck-columns-layout-${r}`]:"grid"==r,[`ck-columns-wrap-${l}`]:"flex"==r,[`ck-columns-align-${u}`]:"flex"==r,[`has-${a}-columns`]:"stretch"!==u||"grid"==r,[`has-${s}-columns-mobile`]:!0,[`has-${i}-columns-tablet`]:!0,[`ck-columns-col-gap-${k}`]:p,[`ck-columns-row-gap-${d}`]:p})}),(0,o.createElement)("div",{className:"ck-columns__wrap"},(0,o.createElement)(m.InnerBlocks.Content,null)))}})},184:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)){if(l.length){var r=o.apply(null,l);r&&e.push(r)}}else if("object"===a){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var s in l)n.call(l,s)&&l[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,l,o,a){if(!l){var r=1/0;for(u=0;u<e.length;u++){l=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<l.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](l[c])}))?l.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,o,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={68:0,366:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,a,r=l[0],s=l[1],c=l[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(l);i<r.length;i++)a=r[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},l=self.webpackChunkcarkeek_blocks_v2=self.webpackChunkcarkeek_blocks_v2||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var o=n.O(void 0,[366],(function(){return n(562)}));o=n.O(o)}();