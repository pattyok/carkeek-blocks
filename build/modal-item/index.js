(()=>{var e,t={263:(e,t,a)=>{"use strict";const l=window.React,i=window.wp.blockEditor;function m(){return(0,l.createElement)(i.InnerBlocks,{template:[["carkeek-blocks/fixed-image",{useCaption:!1,useLink:!1}]],templateLock:"all"})}function o(){return(0,l.createElement)(i.InnerBlocks.Content,null)}function c(e){const t=wp.data.select("core/block-editor"),a=t.getBlockSelectionStart(),l=t.getBlock(e.clientId).innerBlocks;for(let e=0;e<l.length;e++)if(l[e].clientId===a||l[e].innerBlocks.length&&c(l[e]))return!0;return!1}var s=a(485),r=a.n(s);const n=window.wp.components,d=window.wp.i18n,u=[{attributes:{name:{type:"string",source:"html",selector:".ck-modal-item-name"},title:{type:"string",source:"html",selector:".ck-modal-item-title"},details:{type:"string",source:"html",selector:".ck-modal-item-details"},blockId:{type:"string",source:"attribute",selector:".ck-modal-item",attribute:"data-id"},hideImagePreview:{type:"boolean",default:!1},hideTitlePreview:{type:"boolean",default:!1}},save({attributes:e}){const{title:t,name:a,details:m,blockId:c,hideImagePreview:s,hideTitlePreview:n,modalLayout:u,mailtoLink:g}=e,v=i.useBlockProps.save();return(0,l.createElement)("div",{...v,className:r()(v.className,{[`pos-${u}`]:u,"has-image":"image-hide"!==u})},(0,l.createElement)("div",{className:"ck-modal-item","data-id":c},!s&&(0,l.createElement)("div",{className:"ck-modal-item-image","data-toggle":"modal","data-target":`#dialog-${c}`},(0,l.createElement)(o,null)),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"a",value:a,id:`title-${c}`,"data-toggle":"modal","data-target":`#dialog-${c}`}),t&&!n&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),(0,l.createElement)("div",{className:"ck-modal-item-dialog modal fade",id:`dialog-${c}`,tabIndex:"-1",role:"dialog","aria-labelledby":`title-${c}`,"aria-hidden":"true"},(0,l.createElement)("div",{className:"modal-dialog modal-dialog-centered",role:"document"},(0,l.createElement)("div",{className:"modal-content"},(0,l.createElement)("div",{className:"modal-header"},(0,l.createElement)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},(0,l.createElement)("span",{"aria-hidden":"true"},"×"))),(0,l.createElement)("div",{className:"modal-body"},(0,l.createElement)("div",{className:"ck-modal-item-header"},(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"div",value:a}),t&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),m&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-details",tagName:"div",value:m}),g&&(0,l.createElement)("a",{className:"ck-modal-item-mailto arrow-link",href:`mailto:${g}`},"Contact")),(0,l.createElement)("div",{className:"modal-footer"},(0,l.createElement)("button",{type:"button","data-dismiss":"modal"},(0,d.__)("Close","carkeek-blocks")))))))}},{attributes:{name:{type:"string",source:"html",selector:".ck-modal-item-name"},title:{type:"string",source:"html",selector:".ck-modal-item-title"},details:{type:"string",source:"html",selector:".ck-modal-item-details"},blockId:{type:"string",source:"attribute",selector:".ck-modal-item",attribute:"data-id"},hideImagePreview:{type:"boolean",default:!1},hideTitlePreview:{type:"boolean",default:!1}},save({attributes:e}){const{title:t,name:a,details:m,blockId:c,hideImagePreview:s,hideTitlePreview:n,modalLayout:u}=e,g=i.useBlockProps.save();return(0,l.createElement)("div",{...g,className:r()(g.className,{[`pos-${u}`]:u})},(0,l.createElement)("div",{className:"ck-modal-item","data-id":c},!s&&(0,l.createElement)("div",{className:"ck-modal-item-image","data-toggle":"modal","data-target":`#dialog-${c}`},(0,l.createElement)(o,null)),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"a",value:a,id:`title-${c}`,"data-toggle":"modal","data-target":`#dialog-${c}`}),t&&!n&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),(0,l.createElement)("div",{className:"ck-modal-item-dialog modal fade",id:`dialog-${c}`,tabIndex:"-1",role:"dialog","aria-labelledby":`title-${c}`,"aria-hidden":"true"},(0,l.createElement)("div",{className:"modal-dialog modal-dialog-centered",role:"document"},(0,l.createElement)("div",{className:"modal-content"},(0,l.createElement)("div",{className:"modal-header"},(0,l.createElement)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},(0,l.createElement)("span",{"aria-hidden":"true"},"×"))),(0,l.createElement)("div",{className:"modal-body"},(0,l.createElement)(o,null),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"div",value:a}),t&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t}),m&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-details",tagName:"p",value:m})),(0,l.createElement)("div",{className:"modal-footer"},(0,l.createElement)("a",{"data-dismiss":"modal"},(0,d.__)("Close","carkeek-blocks")))))))}},{attributes:{name:{type:"string",source:"html",selector:".ck-modal-item-name"},title:{type:"string",source:"html",selector:".ck-modal-item-title"},details:{type:"string",source:"html",selector:".ck-modal-item-details"},blockId:{type:"string",source:"attribute",selector:".ck-modal-item",attribute:"data-id"},hideImagePreview:{type:"boolean",default:!1},hideTitlePreview:{type:"boolean",default:!1}},save({attributes:e}){const{title:t,name:a,details:m,blockId:c,hideImagePreview:s,hideTitlePreview:r}=e,n=i.useBlockProps.save();return(0,l.createElement)("div",{...n},(0,l.createElement)("div",{className:"ck-modal-item","data-id":c},!s&&(0,l.createElement)("div",{className:"ck-modal-item-image","data-toggle":"modal","data-target":`#dialog-${c}`},(0,l.createElement)(o,null)),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"a",value:a,id:`title-${c}`,"data-toggle":"modal","data-target":`#dialog-${c}`}),t&&!r&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),(0,l.createElement)("div",{className:"ck-modal-item-dialog modal fade",id:`dialog-${c}`,tabIndex:"-1",role:"dialog","aria-labelledby":`title-${c}`,"aria-hidden":"true"},(0,l.createElement)("div",{className:"modal-dialog modal-dialog-centered",role:"document"},(0,l.createElement)("div",{className:"modal-content"},(0,l.createElement)("div",{className:"modal-header"},(0,l.createElement)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},(0,l.createElement)("span",{"aria-hidden":"true"},"×"))),(0,l.createElement)("div",{className:"modal-body"},(0,l.createElement)(o,null),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"div",value:a}),t&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t}),m&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-details",tagName:"p",value:m})),(0,l.createElement)("div",{className:"modal-footer"},(0,l.createElement)("a",{"data-dismiss":"modal"},(0,d.__)("Close","carkeek-blocks")))))))}},{attributes:{name:{type:"string",source:"html",selector:".ck-modal-item-name"},title:{type:"string",source:"html",selector:".ck-modal-item-title"},details:{type:"string",source:"html",selector:".ck-modal-item-details"},blockId:{type:"string",source:"attribute",selector:".ck-modal-item",attribute:"data-id"}},save({attributes:e}){const{title:t,name:a,details:m,blockId:c}=e,s=i.useBlockProps.save();return(0,l.createElement)("div",{...s},(0,l.createElement)("div",{className:"ck-modal-item","data-id":c},(0,l.createElement)("div",{className:"ck-modal-item-image","data-toggle":"modal","data-target":`#dialog-${c}`},(0,l.createElement)(o,null)),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"a",value:a,id:`title-${c}`,"data-toggle":"modal","data-target":`#dialog-${c}`}),t&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),(0,l.createElement)("div",{className:"ck-modal-item-dialog modal fade",id:`dialog-${c}`,tabIndex:"-1",role:"dialog","aria-labelledby":`title-${c}`,"aria-hidden":"true"},(0,l.createElement)("div",{className:"modal-dialog modal-dialog-centered",role:"document"},(0,l.createElement)("div",{className:"modal-content"},(0,l.createElement)("div",{className:"modal-header"},(0,l.createElement)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},(0,l.createElement)("span",{"aria-hidden":"true"},"×"))),(0,l.createElement)("div",{className:"modal-body"},(0,l.createElement)(o,null),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"div",value:a}),t&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t}),m&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-details",tagName:"p",value:m})),(0,l.createElement)("div",{className:"modal-footer"},(0,l.createElement)("a",{"data-dismiss":"modal"},(0,d.__)("Close","carkeek-blocks")))))))}}],g={};g.image=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",viewBox:"0 0 100 100"},(0,l.createElement)("circle",{cx:"63.6",cy:"44.5",r:"3.9"}),(0,l.createElement)("path",{d:"M75.3 74.4H23.2c-1.2 0-2.1-.9-2.1-2.1V33.8c0-1.2.9-2.1 2.1-2.1h52.1c1.2 0 2.1.9 2.1 2.1v38.5c0 1.2-1 2.1-2.1 2.1zm-50-4.2h47.8V35.9H25.3v34.3z"}),(0,l.createElement)("path",{d:"M15.9 38c-1.2 0-2.1-.9-2.1-2.1v-9.7c0-1.2.9-2.1 2.1-2.1h10.6c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1H18v7.6c0 1.1-.9 2.1-2.1 2.1zM82.6 38c-1.2 0-2.1-.9-2.1-2.1v-7.6H72c-1.2 0-2.1-.9-2.1-2.1S70.8 24 72 24h10.6c1.2 0 2.1.9 2.1 2.1v9.7c0 1.2-1 2.2-2.1 2.2zM82.6 82.1H72c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1h8.4v-7.6c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1V80c.1 1.1-.9 2.1-2 2.1zM26.5 82.1H15.9c-1.2 0-2.1-.9-2.1-2.1v-9.7c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v7.6h8.4c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2 2.1z"}),(0,l.createElement)("path",{d:"M23.2 74.4c-.5 0-1-.2-1.4-.5-.9-.7-1-2.1-.3-3l16.1-19.3c.7-.8 1.9-1 2.8-.4l11.4 7.5 5.8-5.1c.7-.6 1.8-.7 2.6-.1l16.2 11.7c.9.7 1.2 2 .5 2.9-.7.9-2 1.2-2.9.5L59.2 58l-5.8 5.1c-.7.6-1.8.7-2.6.2l-11.2-7.4-14.8 17.8c-.4.5-1 .7-1.6.7z"})),g.modal=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",enableBackground:"new -3 5 512 512",viewBox:"-3 5 512 512"},(0,l.createElement)("path",{d:"M479.9 26.1H20.1c-5.5 0-10 4.5-10 10V496c0 5.5 4.5 10 10 10h459.8c5.5 0 10-4.5 10-10V36.1c0-5.6-4.5-10-10-10zm-449.8 20h439.8v80H30.1v-80zm0 439.8V146h439.8v339.9H30.1z"}),(0,l.createElement)("path",{d:"M439.9 76.1H250c-5.5 0-10 4.5-10 10s4.5 10 10 10h189.9c5.5 0 10-4.5 10-10s-4.4-10-10-10zM70.1 76.1h-10c-5.5 0-10 4.5-10 10s4.5 10 10 10h10c5.5 0 10-4.5 10-10s-4.5-10-10-10zM120 76.1h-10c-5.5 0-10 4.5-10 10s4.5 10 10 10h10c5.5 0 10-4.5 10-10s-4.4-10-10-10zM409.9 176H90.1c-5.5 0-10 4.5-10 10v259.9c0 5.5 4.5 10 10 10H410c5.5 0 10-4.5 10-10V186c-.1-5.5-4.5-10-10.1-10zm-309.8 20H400v42.4H100.1V196zm0 239.9V258.4H400v177.5H100.1z"}),(0,l.createElement)("path",{d:"M280 296H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10s-4.5-10-10-10zM280 336H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10s-4.5-10-10-10zM280 376H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10 0-5.6-4.5-10-10-10z"}));const v=g,k=window.wp.blocks,h=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/modal-item","version":"0.1.3","title":"Modal Item","category":"widgets","description":"Block that opens additional content in a modal window.","supports":{"reusable":true,"html":false},"textdomain":"carkeek-blocks","attributes":{"name":{"type":"string","source":"html","selector":".ck-modal-item-name"},"title":{"type":"string","source":"html","selector":".ck-modal-item-title"},"details":{"type":"string","source":"html","selector":".ck-modal-item-details"},"blockId":{"type":"string","source":"attribute","selector":".ck-modal-item","attribute":"data-id"},"modalLayout":{"type":"string","default":"image-large"},"hideImagePreview":{"type":"boolean","default":false},"hideTitlePreview":{"type":"boolean","default":false},"mailtoLink":{"type":"string"}},"editorScript":"file:./index.js","viewScript":"file:./script.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,k.registerBlockType)(h,{icon:v.modal,keywords:[(0,d.__)("modal","carkeek-blocks"),(0,d.__)("image and text","carkeek-blocks")],save:function({attributes:e}){const{title:t,name:a,details:m,blockId:c,hideImagePreview:s,hideTitlePreview:n,modalLayout:d,mailtoLink:u}=e,g=i.useBlockProps.save();return(0,l.createElement)("div",{...g,className:r()(g.className,{[`pos-${d}`]:d,"has-image":"image-hide"!==d})},(0,l.createElement)("div",{className:"ck-modal-item","data-id":c},!s&&(0,l.createElement)("a",{href:"javascript:;",class:"ck-modal-item-image","aria-controls":`dialog-${c}`},(0,l.createElement)(o,null)),(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"a",value:a,id:`title-${c}`,"aria-controls":`dialog-${c}`}),t&&!n&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),(0,l.createElement)("div",{class:"ck-modal-item-dialog modal2 modal--animate-scale js-modal",id:`dialog-${c}`},(0,l.createElement)("div",{className:"modal__content"},(0,l.createElement)("div",{className:"modal-header"},(0,l.createElement)("button",{class:"modal__close-btn modal__close-btn--inner mc4-hide@md js-modal__close js-tab-focus"},(0,l.createElement)("svg",{class:"mc4-icon mc4-icon--xs",viewBox:"0 0 16 16"},(0,l.createElement)("title",null,"Close modal window"),(0,l.createElement)("g",{"stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10"},(0,l.createElement)("line",{x1:"13.5",y1:"2.5",x2:"2.5",y2:"13.5"}),(0,l.createElement)("line",{x1:"2.5",y1:"2.5",x2:"13.5",y2:"13.5"}))))),(0,l.createElement)("div",{className:"modal-body"},(0,l.createElement)("div",{className:"ck-modal-item-header"},(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-name",tagName:"div",value:a}),t&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:t})),m&&(0,l.createElement)(i.RichText.Content,{className:"ck-modal-item-details",tagName:"div",value:m}),u&&(0,l.createElement)("a",{className:"ck-modal-item-mailto arrow-link",href:`mailto:${u}`},"Contact")),(0,l.createElement)("footer",{class:"modal-footer"},(0,l.createElement)("button",{class:"modal__close-btn modal__close-btn--outer js-modal__close js-tab-focus"},"Close")))))},edit:function(e){const{attributes:t,isSelected:a,clientId:o,setAttributes:s}=e,{title:u,name:g,details:v,blockId:k,hideImagePreview:h,hideTitlePreview:p,modalLayout:b,mailtoLink:E}=t;k||s({blockId:o});const N=(0,i.useBlockProps)();return(0,l.createElement)("div",{...N,className:r()(N.className,{[`pos-${b}`]:b})},(0,l.createElement)(i.InspectorControls,null,(0,l.createElement)(n.PanelBody,null,(0,l.createElement)(n.ToggleControl,{label:(0,d.__)("Hide Image in Preview"),checked:h,onChange:e=>s({hideImagePreview:e})}),(0,l.createElement)(n.ToggleControl,{label:(0,d.__)("Hide Title in Preview"),checked:p,onChange:e=>s({hideTitlePreview:e})}),(0,l.createElement)(n.RadioControl,{label:"Modal Window Image Layout",help:"Control the size of the image in the modal view",selected:b,options:[{label:"Large",value:"image-large"},{label:"Small",value:"image-small"},{label:"Hide",value:"image-hide"}],onChange:e=>s({modalLayout:e})}))),(!h||a||c(e))&&(0,l.createElement)(m,null),(0,l.createElement)(i.RichText,{className:"ck-modal-name",tagName:"div",onChange:e=>s({name:e}),value:g,placeholder:(0,d.__)("Member Name","carkeek-blocks"),formatingCowithoutInteractiveFormatting:!0,allowedFormats:[]}),(!p||a||c(e))&&(0,l.createElement)(i.RichText,{className:"ck-modal-title",tagName:"div",onChange:e=>s({title:e}),value:u,placeholder:a?(0,d.__)("Member Title","carkeek-blocks"):null,allowedFormats:[],withoutInteractiveFormatting:!0}),(a||c(e))&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.TextControl,{value:E,className:"block-editor-media-placeholder__url-input-field",onChange:e=>s({mailtoLink:e}),label:(0,d.__)("Email Address","carkeek-blocks")}),(0,l.createElement)(i.RichText,{className:"ck-modal-details",tagName:"div",multiline:"p",onChange:e=>s({details:e}),value:v,placeholder:(0,d.__)("Member Details","carkeek-blocks"),preserveWhiteSpace:!0})))},deprecated:u})},485:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var m=typeof a;if("string"===m||"number"===m)e.push(a);else if(Array.isArray(a)){if(a.length){var o=i.apply(null,a);o&&e.push(o)}}else if("object"===m){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var c in a)l.call(a,c)&&a[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()}},a={};function l(e){var i=a[e];if(void 0!==i)return i.exports;var m=a[e]={exports:{}};return t[e](m,m.exports,l),m.exports}l.m=t,e=[],l.O=(t,a,i,m)=>{if(!a){var o=1/0;for(n=0;n<e.length;n++){for(var[a,i,m]=e[n],c=!0,s=0;s<a.length;s++)(!1&m||o>=m)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(c=!1,m<o&&(o=m));if(c){e.splice(n--,1);var r=i();void 0!==r&&(t=r)}}return t}m=m||0;for(var n=e.length;n>0&&e[n-1][2]>m;n--)e[n]=e[n-1];e[n]=[a,i,m]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={279:0,287:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var i,m,[o,c,s]=a,r=0;if(o.some((t=>0!==e[t]))){for(i in c)l.o(c,i)&&(l.m[i]=c[i]);if(s)var n=s(l)}for(t&&t(a);r<o.length;r++)m=o[r],l.o(e,m)&&e[m]&&e[m][0](),e[m]=0;return l.O(n)},a=globalThis.webpackChunkcarkeek_blocks_v2=globalThis.webpackChunkcarkeek_blocks_v2||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=l.O(void 0,[287],(()=>l(263)));i=l.O(i)})();