/*! For license information please see editor.js.LICENSE.txt */
!function(){var e={184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=wp.blockEditor;function t(){return wp.element.createElement(e.InnerBlocks,{templateLock:"all",template:[["carkeek-blocks/fixed-image",{useCaption:!1,useLink:!1}]]})}function a(){return wp.element.createElement(e.InnerBlocks.Content,null)}var l=wp.i18n,r={};r.accordion=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",enableBackground:"new 0 0 30.805 20.763",viewBox:"0 0 30.805 20.763"},wp.element.createElement("path",{d:"M8.772 1.058A1.142 1.142 0 008.28.347 1.156 1.156 0 007.428.19L.893 1.597a1.124 1.124 0 00-.712.493 1.122 1.122 0 00-.155.85l3.642 16.93a1.136 1.136 0 001.342.868l6.535-1.405c.296-.063.549-.238.714-.493a1.14 1.14 0 00.154-.851L8.772 1.058zM4.801 19.759c-.064.02-.139-.021-.156-.1L1.003 2.729c-.013-.06.04-.142.1-.154l3.993-.836.35 1.627-2.596.559.21.979 2.597-.559L6 5.938l-2.595.557.21.979 2.595-.558.343 1.594-2.595.557.21.979 2.596-.558.343 1.592-2.597.559.21.979 2.597-.559.343 1.594-2.597.559.21.979 2.597-.559.343 1.593-2.596.559.21.979 2.597-.559.366 1.699-3.989.856zM30.609 1.956a1.124 1.124 0 00-.723-.476L23.322.218a1.136 1.136 0 00-1.324.896L18.729 18.12c-.058.296.005.597.174.848.167.247.431.421.723.477l6.565 1.262a1.134 1.134 0 001.324-.896l3.268-17.006a1.12 1.12 0 00-.174-.849zm-6.226 3.473a.876.876 0 01.697 1.027.88.88 0 01-1.726-.331.877.877 0 011.029-.696zm-1.842 9.575a.877.877 0 01.332-1.724.877.877 0 11-.332 1.724zm.502-2.616a.878.878 0 11.334-1.724.878.878 0 01-.334 1.724zm.506-2.617a.878.878 0 11.33-1.725.878.878 0 01-.33 1.725zm1.359 7.045a.88.88 0 01-.699-1.03.88.88 0 011.728.332.88.88 0 01-1.029.698zm.502-2.617a.88.88 0 01-.697-1.029.88.88 0 011.726.331.878.878 0 01-1.029.698zm.504-2.616a.878.878 0 11.33-1.725.878.878 0 01-.33 1.725zm.504-2.617a.879.879 0 11.327-1.726.879.879 0 01-.327 1.726zm.502-2.617a.878.878 0 11.33-1.724.878.878 0 01-.33 1.724zM15.233.001c-.552.02-.85.481-.833 1.034l.64 16.986c.008.222.221.404.446.412.236.008.183-.177.191-.412L16 1.035V.968c0-.553-.214-.986-.767-.967zM20.477 1.122a1 1 0 10-1.986-.24l-2.063 17.074a.428.428 0 00.844.131l3.195-16.898a.774.774 0 00.01-.067zM12.567.816a1.002 1.002 0 00-1.967.372l3.197 16.898a.428.428 0 00.844-.131L12.577.882a.752.752 0 00-.01-.066z"})),r.dropdown=wp.element.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M87 37H13a4 4 0 00-4 4v18a4 4 0 004 4h74a4 4 0 004-4V41a4 4 0 00-4-4zm2 22a2 2 0 01-2 2H13a2 2 0 01-2-2V41a2 2 0 012-2h74a2 2 0 012 2zm-37-9a1 1 0 01-1 1H18a1 1 0 010-2h33a1 1 0 011 1zm30.33-4.07a1 1 0 01.14 1.41l-5 6.12a1 1 0 01-.77.37 1 1 0 01-.78-.37l-5-6.12a1 1 0 011.55-1.27l4.23 5.18 4.22-5.18a1 1 0 011.41-.14z"})),r.modal=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",enableBackground:"new -3 5 512 512",viewBox:"-3 5 512 512"},wp.element.createElement("path",{d:"M479.9 26.1H20.1c-5.5 0-10 4.5-10 10V496c0 5.5 4.5 10 10 10h459.8c5.5 0 10-4.5 10-10V36.1c0-5.6-4.5-10-10-10zm-449.8 20h439.8v80H30.1v-80zm0 439.8V146h439.8v339.9H30.1z"}),wp.element.createElement("path",{d:"M439.9 76.1H250c-5.5 0-10 4.5-10 10s4.5 10 10 10h189.9c5.5 0 10-4.5 10-10s-4.4-10-10-10zM70.1 76.1h-10c-5.5 0-10 4.5-10 10s4.5 10 10 10h10c5.5 0 10-4.5 10-10s-4.5-10-10-10zM120 76.1h-10c-5.5 0-10 4.5-10 10s4.5 10 10 10h10c5.5 0 10-4.5 10-10s-4.4-10-10-10zM409.9 176H90.1c-5.5 0-10 4.5-10 10v259.9c0 5.5 4.5 10 10 10H410c5.5 0 10-4.5 10-10V186c-.1-5.5-4.5-10-10.1-10zm-309.8 20H400v42.4H100.1V196zm0 239.9V258.4H400v177.5H100.1z"}),wp.element.createElement("path",{d:"M280 296H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10s-4.5-10-10-10zM280 336H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10s-4.5-10-10-10zM280 376H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10 0-5.6-4.5-10-10-10z"})),r.image=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",viewBox:"0 0 100 100"},wp.element.createElement("circle",{cx:"63.6",cy:"44.5",r:"3.9"}),wp.element.createElement("path",{d:"M75.3 74.4H23.2c-1.2 0-2.1-.9-2.1-2.1V33.8c0-1.2.9-2.1 2.1-2.1h52.1c1.2 0 2.1.9 2.1 2.1v38.5c0 1.2-1 2.1-2.1 2.1zm-50-4.2h47.8V35.9H25.3v34.3z"}),wp.element.createElement("path",{d:"M15.9 38c-1.2 0-2.1-.9-2.1-2.1v-9.7c0-1.2.9-2.1 2.1-2.1h10.6c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1H18v7.6c0 1.1-.9 2.1-2.1 2.1zM82.6 38c-1.2 0-2.1-.9-2.1-2.1v-7.6H72c-1.2 0-2.1-.9-2.1-2.1S70.8 24 72 24h10.6c1.2 0 2.1.9 2.1 2.1v9.7c0 1.2-1 2.2-2.1 2.2zM82.6 82.1H72c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1h8.4v-7.6c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1V80c.1 1.1-.9 2.1-2 2.1zM26.5 82.1H15.9c-1.2 0-2.1-.9-2.1-2.1v-9.7c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v7.6h8.4c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2 2.1z"}),wp.element.createElement("path",{d:"M23.2 74.4c-.5 0-1-.2-1.4-.5-.9-.7-1-2.1-.3-3l16.1-19.3c.7-.8 1.9-1 2.8-.4l11.4 7.5 5.8-5.1c.7-.6 1.8-.7 2.6-.1l16.2 11.7c.9.7 1.2 2 .5 2.9-.7.9-2 1.2-2.9.5L59.2 58l-5.8 5.1c-.7.6-1.8.7-2.6.2l-11.2-7.4-14.8 17.8c-.4.5-1 .7-1.6.7z"}));var c=r,o=wp.blocks;(0,o.registerBlockType)("carkeek-blocks/modal-item",{title:(0,l.__)("Modal Item","carkeek-blocks"),description:(0,l.__)(" Block that opens additional content in a modal window. ","carkeek-blocks"),icon:c.modal,supports:{reusable:!1,html:!1},category:"widgets",keywords:[(0,l.__)("modal","carkeek-blocks"),(0,l.__)("image and text","carkeek-blocks")],attributes:{name:{type:"string",source:"html",selector:".ck-modal-item-name"},title:{type:"string",source:"html",selector:".ck-modal-item-title"},details:{type:"string",source:"html",selector:".ck-modal-item-details"},blockId:{type:"string",source:"attribute",selector:".ck-modal-item",attribute:"data-id"}},save:function(t){var n=t.attributes,r=n.title,c=n.name,o=n.details,i=n.blockId,s=e.useBlockProps.save();return wp.element.createElement("div",s,wp.element.createElement("div",{className:"ck-modal-item","data-id":i},wp.element.createElement("div",{className:"ck-modal-item-image","data-toggle":"modal","data-target":"#dialog-".concat(i)},wp.element.createElement(a,null)),wp.element.createElement(e.RichText.Content,{className:"ck-modal-item-name",tagName:"a",value:c,id:"title-".concat(i),"data-toggle":"modal","data-target":"#dialog-".concat(i)}),r&&wp.element.createElement(e.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:r})),wp.element.createElement("div",{className:"ck-modal-item-dialog modal fade",id:"dialog-".concat(i),tabIndex:"-1",role:"dialog","aria-labelledby":"title-".concat(i),"aria-hidden":"true"},wp.element.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},wp.element.createElement("div",{className:"modal-content"},wp.element.createElement("div",{className:"modal-header"},wp.element.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},wp.element.createElement("span",{"aria-hidden":"true"},"×"))),wp.element.createElement("div",{className:"modal-body"},wp.element.createElement(a,null),wp.element.createElement(e.RichText.Content,{className:"ck-modal-item-name",tagName:"div",value:c}),r&&wp.element.createElement(e.RichText.Content,{className:"ck-modal-item-title",tagName:"p",value:r}),o&&wp.element.createElement(e.RichText.Content,{className:"ck-modal-item-details",tagName:"p",value:o})),wp.element.createElement("div",{className:"modal-footer"},wp.element.createElement("a",{"data-dismiss":"modal"},(0,l.__)("Close","carkeek-blocks")))))))},edit:function(n){var a=n.className,r=n.attributes,c=n.isSelected,o=n.clientId,i=n.setAttributes,s=r.title,m=r.name,u=r.details;r.blockId||i({blockId:o});var d=(0,e.useBlockProps)();return wp.element.createElement("div",d,wp.element.createElement("div",{className:a},wp.element.createElement(t,null),wp.element.createElement(e.RichText,{className:"ck-modal-name",tagName:"div",onChange:function(e){return i({name:e})},value:m,placeholder:(0,l.__)("Member Name","carkeek-blocks"),formatingControls:[]}),wp.element.createElement(e.RichText,{className:"ck-modal-title",tagName:"div",onChange:function(e){return i({title:e})},value:s,placeholder:c?(0,l.__)("Member Title","carkeek-blocks"):null,formatingControls:[]}),c&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(e.RichText,{className:"ck-modal-details",tagName:"p",onChange:function(e){return i({details:e})},value:u,placeholder:(0,l.__)("Member Details","carkeek-blocks"),formatingControls:[]}))))}});var i=n(184),s=n.n(i),m=lodash,u=wp.blob,d=wp.components,p=wp.data,g=wp.element,k=wp.compose;function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(t){var n=t.attributes,a=n.url,r=void 0===a?"":a,c=n.alt,i=n.caption,s=n.id,b=n.href,h=n.rel,w=n.linkClass,v=n.linkDestination,y=n.title,E=n.linkTarget,_=n.focalPoint,S=n.sizeSlug,x=n.useCaption,C=n.useLink,z=t.setAttributes,N=t.isSelected,B=t.insertBlocksAfter,I=t.onSelectImage,T=t.onSelectURL,A=t.onUploadError,R=(0,g.useRef)(),M=(0,k.usePrevious)(r),P=(0,p.useSelect)((function(e){var t=e("core").getMedia,n=e("core/block-editor"),a=n.getMultiSelectedBlockClientIds,l=n.getBlockName,r=n.getSelectedBlock,c=n.getSelectedBlockClientId,o=a();return{block:r(),currentId:c(),image:s&&N?t(s):null,multiImageSelection:o.length&&o.every((function(e){return"core/image"===l(e)}))}}),[s,N]),O=P.image,L=P.multiImageSelection,j=(0,p.useSelect)((function(e){var t=e("core/block-editor").getSettings;return(0,m.pick)(t(),["imageSizes","maxWidth","mediaUpload"])})).imageSizes,H=f((0,g.useState)(!1),2),U=H[0],F=H[1],V=f((0,g.useState)(!1),2),D=V[0],W=V[1],$=(0,m.map)((0,m.filter)(j,(function(e){var t=e.slug;return(0,m.get)(O,["media_details","sizes",t,"source_url"])})),(function(e){var t=e.name;return{value:e.slug,label:t}}));(0,g.useEffect)((function(){N||F(!1)}),[N]),(0,g.useEffect)((function(){r&&!M&&N&&x&&R.current.focus()}),[r,M]),(0,g.useEffect)((function(){N||W(!1)}),[N]);var G,q=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(e.BlockControls,null,C&&!L&&!D&&wp.element.createElement(d.ToolbarGroup,null,wp.element.createElement(e.__experimentalImageURLInputUI,{url:b||"",onChangeUrl:function(e){z(e)},linkDestination:v,mediaUrl:O&&O.source_url||r,mediaLink:O&&O.link,linkTarget:E,linkClass:w,rel:h})),!L&&!D&&wp.element.createElement(e.MediaReplaceFlow,{mediaId:s,mediaURL:r,allowedTypes:["image"],accept:"image/*",onSelect:I,onSelectURL:T,onError:A})),wp.element.createElement(e.InspectorControls,null,wp.element.createElement(d.PanelBody,{title:(0,l.__)("Image settings")},!L&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(d.TextareaControl,{label:(0,l.__)("Alt text (alternative text)"),value:c,onChange:function(e){z({alt:e})},help:wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(d.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},(0,l.__)("Describe the purpose of the image")),(0,l.__)("Leave empty if the image is purely decorative."))}),wp.element.createElement(d.SelectControl,{label:(0,l.__)("Image Size","carkeek-blocks"),options:$,onChange:function(e){var t=(0,m.get)(O,["media_details","sizes",e,"source_url"]);if(!t)return null;z({url:t,width:void 0,height:void 0,sizeSlug:e})},value:S}),wp.element.createElement(d.FocalPointPicker,{label:(0,l.__)("Focal Point","carkeek-blocks"),url:r,onChange:function(e){return z({focalPoint:e})},value:_})))),wp.element.createElement(e.InspectorAdvancedControls,null,wp.element.createElement(d.ToggleControl,{label:(0,l.__)("Include Caption"),checked:x,onChange:function(e){return z({useCaption:e})}}),wp.element.createElement(d.ToggleControl,{label:(0,l.__)("Include Image Link"),checked:C,onChange:function(e){return z({useLink:e})}}),wp.element.createElement(d.TextControl,{label:(0,l.__)("Title attribute"),value:y||"",onChange:function(e){z({title:e})},help:wp.element.createElement(wp.element.Fragment,null,(0,l.__)("Describe the role of this image on the page."),wp.element.createElement(d.ExternalLink,{href:"https://www.w3.org/TR/html52/dom.html#the-title-attribute"},(0,l.__)("(Note: many devices and browsers do not display this text.)")))}))),J=function(e){var t=function(e){var t=/^[^\/\s:]+:(?:\/\/)?[^\/\s#?]+[\/]([^\s#?]+)[#?]{0,1}\S*$/.exec(e);if(t)return t[1]}(e);if(t)return(0,m.last)(t.split("/"))}(r);G=c||(J?(0,l.sprintf)((0,l.__)("This image has an empty alt attribute; its file name is %s"),J):(0,l.__)("This image has an empty alt attribute"));var K={};_&&(K.objectPosition="".concat(100*_.x,"% ").concat(100*_.y,"%"));var Q=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:r,alt:G,onClick:function(){U&&F(!1)},className:"ck-fixed-image",style:K}),(0,u.isBlobURL)(r)&&wp.element.createElement(d.Spinner,null));return wp.element.createElement(wp.element.Fragment,null,q,Q,x&&(!e.RichText.isEmpty(i)||N)&&wp.element.createElement(e.RichText,{ref:R,tagName:"figcaption","aria-label":(0,l.__)("Image caption text"),placeholder:(0,l.__)("Write caption…"),value:i,unstableOnFocus:function(){U||F(!0)},onChange:function(e){return z({caption:e})},isSelected:U,inlineToolbar:!0,__unstableOnSplitAtEnd:function(){return B((0,o.createBlock)("core/paragraph"))}}))}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e,t){return!e&&(0,u.isBlobURL)(t)},S=(0,d.withNotices)((function(t){var n=t.attributes,a=t.setAttributes,r=t.isSelected,c=t.className,o=t.noticeUI,i=t.insertBlocksAfter,d=t.onReplace,k=t.noticeOperations,f=n.url,b=void 0===f?"":f,v=n.alt,S=n.caption,x=n.id,C=n.width,z=n.height,N=n.sizeSlug,B=(0,g.useRef)();(0,g.useEffect)((function(){B.current=v}),[v]);var I=(0,g.useRef)();(0,g.useEffect)((function(){I.current=S}),[S]);var T=(0,g.useRef)(),A=(0,p.useSelect)((function(e){return(0,e("core/block-editor").getSettings)().mediaUpload}));function R(e){k.removeAllNotices(),k.createErrorNotice(e)}function M(e){if(e&&e.url){var t,n,l,r=(t=e,(n=(0,m.pick)(t,["alt","id","link","caption"])).url=(0,m.get)(t,["sizes","large","url"])||(0,m.get)(t,["media_details","sizes","large","source_url"])||t.url,n);_(x,b)&&B.current&&(r=(0,m.omit)(r,["alt"])),I.current&&!(0,m.get)(r,["caption"])&&(r=(0,m.omit)(r,["caption"])),l=e.id&&e.id===x?{url:b}:{width:void 0,height:void 0,sizeSlug:"large"},a(y(y({},r),l))}else a({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0})}function P(e){e!==b&&a({url:e,id:void 0,sizeSlug:"large"})}var O=_(x,b);(0,g.useEffect)((function(){if(O){var e=(0,u.getBlobByURL)(b);e&&A({filesList:[e],onFileChange:function(e){var t,n;M((t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0])},allowedTypes:["image"],onError:function(e){k.createErrorNotice(e),a({src:void 0,id:void 0,url:void 0})}})}}),[]),(0,g.useEffect)((function(){if(O)return function(){(0,u.revokeBlobURL)(b)}}),[O]);var L=function(e,t){return t&&!e&&!(0,u.isBlobURL)(t)}(x,b)?b:void 0,j=!!b&&wp.element.createElement("img",{alt:(0,l.__)("Edit image"),title:(0,l.__)("Edit image"),className:"edit-image-preview",src:b}),H=s()(c,E({"is-transient":(0,u.isBlobURL)(b),"is-resized":!!C||!!z,"is-focused":r},"size-".concat(N),N)),U=(0,e.useBlockProps)({ref:T,className:H});return wp.element.createElement("figure",U,b&&wp.element.createElement(h,{attributes:n,setAttributes:a,isSelected:r,insertBlocksAfter:i,onReplace:d,onSelectImage:M,onSelectURL:P,onUploadError:R,containerRef:T}),wp.element.createElement(e.MediaPlaceholder,{icon:"format-image",onSelect:M,onSelectURL:P,notices:o,onError:R,allowedTypes:["image"],value:{id:x,src:L},mediaPreview:j,disableMediaButtons:b}))}));(0,o.registerBlockType)("carkeek-blocks/fixed-image",{apiVersion:2,title:(0,l.__)("Fixed Size Image","carkeek-blocks"),description:(0,l.__)("Image block with a Focal Point Picker.","carkeek-blocks"),icon:c.image,supports:{html:!1},category:"widgets",keywords:[(0,l.__)("image","carkeek-blocks"),(0,l.__)("crop","carkeek-blocks"),(0,l.__)("highlight","carkeek-blocks")],attributes:{id:{type:"number"},url:{type:"string",source:"attribute",selector:"img",attribute:"src"},focalPoint:{type:"object"},alt:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""},title:{type:"string",source:"attribute",selector:"img",attribute:"title"},sizeSlug:{type:"string",default:"large"},width:{type:"string"},height:{type:"string"},useCaption:{type:"boolean",default:!1},useLink:{type:"boolean",default:!0},caption:{type:"string",source:"html",selector:"figcaption"},href:{type:"string",source:"attribute",selector:"figure > a",attribute:"href"},rel:{type:"string",source:"attribute",selector:"figure > a",attribute:"rel"},linkClass:{type:"string",source:"attribute",selector:"figure > a",attribute:"class"},linkDestination:{type:"string"},linkTarget:{type:"string",source:"attribute",selector:"figure > a",attribute:"target"}},save:function(t){var n,a,l,r=t.attributes,c=r.url,o=r.alt,i=r.href,u=r.rel,d=r.linkClass,p=r.width,g=r.height,k=r.id,f=r.linkTarget,b=r.sizeSlug,h=r.title,w=r.caption,v=r.useCaption,y=(0,m.isEmpty)(u)?void 0:u,E=s()((n={},l=b,(a="size-".concat(b))in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l,n)),_=wp.element.createElement("img",{src:c,alt:o,className:k?"wp-image-".concat(k):null,width:p,height:g,title:h}),S=wp.element.createElement(wp.element.Fragment,null,i?wp.element.createElement("a",{className:d,href:i,target:f,rel:y},_):_,v&&!e.RichText.isEmpty(w)&&wp.element.createElement(e.RichText.Content,{tagName:"figcaption",value:w}));return wp.element.createElement("figure",e.useBlockProps.save({className:E}),S)},edit:S}),(0,o.registerBlockType)("carkeek-blocks/accordion",{title:(0,l.__)("Accordion","carkeek-blocks"),description:(0,l.__)("Make an accordion of inner blocks","carkeek-blocks"),icon:{src:c.accordion},category:"widgets",supports:{html:!1,align:["wide","full"]},attributes:{headerStyle:{type:"string",default:"h3"},accordionStyle:{type:"boolean",default:!1}},keywords:[(0,l.__)("accordion","carkeek-blocks"),(0,l.__)("expand","carkeek-blocks"),(0,l.__)("collapse","carkeek-blocks")],edit:function(t){var n=t.attributes,a=t.className,r=t.setAttributes,c=t.clientId,i=n.headerStyle,s=n.accordionStyle;return wp.element.createElement("div",{className:"".concat(a)},wp.element.createElement(e.InspectorControls,null,wp.element.createElement(d.PanelBody,null,wp.element.createElement(d.CheckboxControl,{className:"carkeek-accordion-style-label",label:"Use Accordion Style",checked:s,onChange:function(e){return r({accordionStyle:e})},help:s?(0,l.__)("One section will be expanded at a time","carkeek-blocks"):(0,l.__)("If selected only one section will be expanded at a time","carkeek-blocks")}),wp.element.createElement(d.RadioControl,{label:"Section Header Style",selected:i,options:[{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"}],onChange:function(e){return r({headerStyle:e})}}))),wp.element.createElement(e.InnerBlocks,{className:"ck-accordion-item",allowedBlocks:["carkeek-blocks/accordion-panel"],template:[["carkeek-blocks/accordion-panel"]],renderAppender:function(){return wp.element.createElement("button",{className:"custom-appender",onClick:function(){(0,p.dispatch)("core/block-editor").insertBlocks((0,o.createBlock)("carkeek-blocks/accordion-panel"),9999,c)}},(0,l.__)("Add Accordion Section"))}}))},save:function(t){var n=t.attributes,a=n.accordionStyle,l="innerblock-headline-style-"+n.headerStyle;return wp.element.createElement("div",{"data-accordion":a,className:l},wp.element.createElement(e.InnerBlocks.Content,null))}});var x=wp.editor;(0,o.registerBlockType)("carkeek-blocks/accordion-panel",{apiVersion:2,title:(0,l.__)("Accordion Panel","carkeek-blocks"),description:(0,l.__)("Build an Accordion with inner blocks","carkeek-blocks"),icon:{src:c.dropdown},category:"widgets",attributes:{title:{type:"string"},inheritedHeaderStyle:{type:"string"},content:{type:"string"}},parent:["carkeek-blocks/accordion"],keywords:[(0,l.__)("accordion","carkeek-blocks"),(0,l.__)("expand","carkeek-blocks"),(0,l.__)("collapse","carkeek-blocks")],edit:function(t){var n=t.attributes,a=t.setAttributes,r=n.title,c=(0,e.useBlockProps)();return wp.element.createElement("div",c,wp.element.createElement(e.RichText,{tagName:"div",value:r,className:"ck-accordion-button",onChange:function(e){return a({title:e})},placeholder:(0,l.__)("Section Heading...")}),wp.element.createElement(e.InnerBlocks,{className:"ck-accordion-inner-blocks",allowedBlocks:["core/paragraph","core/heading","core/list","core/image"],template:[["core/paragraph",{placeholder:"Enter panel content..."}]]}))},save:function(t){var n=t.attributes,a=n.title,l=n.content,r="accordion-"+(0,x.cleanForSlug)(a),c="accordion-panel"+(0,x.cleanForSlug)(a),o=e.useBlockProps.save();return wp.element.createElement("div",o,wp.element.createElement("div",{className:"ck-accordion-header"},wp.element.createElement("button",{className:"ck-accordion-button",type:"button",id:r,"aria-expanded":"false","aria-controls":c},a)),wp.element.createElement("div",{className:"ck-accordion-panel",id:c,role:"region","aria-labelledby":r,"aria-hidden":"true"},wp.element.createElement(e.RichText.Content,{tagName:"div",value:l}),wp.element.createElement(e.InnerBlocks.Content,null)))}})}()}();