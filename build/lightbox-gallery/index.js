(()=>{var e,t={374:(e,t,l)=>{"use strict";const a=window.React,i=window.wp.blockEditor,n=window.wp.i18n,r=window.wp.components,o=window.wp.url,c=window.lodash;var s=l(485),m=l.n(s);const u=window.wp.element,g=window.wp.data,d=window.wp.blob,p={};p.image=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",viewBox:"0 0 100 100"},(0,a.createElement)("path",{style:{blockProgression:"tb",webkitTextIndent:"0",textIndent:"0",webkitTextTransform:"none",textTransform:"none"},d:"M29.678 957.35c-1.151-.07-2.202.722-2.5 1.844l-3.344 12.594h-13c-1.354 0-2.437 1.14-2.437 2.469v62.063a2.46 2.46 0 002.437 2.437h20.22c1.052 4.913 5.406 8.625 10.624 8.625 5.219 0 9.572-3.712 10.625-8.625h20.22c.695 0 1.333-.3 1.78-.781a2.386 2.386 0 001.22-1.5l16-59.97c.346-1.303-.46-2.651-1.75-3l-59.595-16.061a2.864 2.864 0 00-.437-.094 1 1 0 00-.063 0zm-.156 2c.02.002.018-.001.031 0 .042.005.083.029.094.031l59.594 16.062c.247.067.408.32.344.563l-14.625 54.75v-11.75l10.406-39.125c.31-1.162-.385-2.402-1.563-2.72l-8.844-2.405v-.5c0-1.33-1.083-2.47-2.437-2.47h-8.625l-30.375-8.155c-.109-.03-.239-.078-.375-.094a1 1 0 00-.063 0c-1.029-.063-2.01.636-2.281 1.656l-1.781 6.594h-3.094l3.188-12.094c.058-.22.227-.343.406-.344zm3.437 6.188c.007.002.013-.005.031 0l23.188 6.25H31.117l1.624-6.094c.033-.122.121-.163.22-.157zm-22.125 8.25h13.531a1.004 1.004 0 00.5 0h4.688a1.004 1.004 0 00.5 0h33.625a1.004 1.004 0 00.218 0h8.625c.247 0 .438.196.438.468v1.22a1 1 0 000 .093v60.75a.555.555 0 01-.031.187c-.013.023-.012.036-.031.062-.07.125-.198.188-.376.188H52.553c.003-.097.03-.183.03-.282 0-.385-.022-.749-.062-1.125-.004-.043-.026-.082-.031-.125a10.83 10.83 0 00-.406-2c-.106-.34-.237-.674-.375-1a10.834 10.834 0 00-1-1.843c-.191-.283-.41-.55-.625-.813-.005-.01.005-.025 0-.03-.104-.126-.235-.224-.344-.344-.125-.138-.243-.275-.375-.407-.246-.246-.481-.496-.75-.718-.27-.223-.554-.429-.844-.625a10.82 10.82 0 00-4.969-1.813 11.3 11.3 0 00-1.125-.062c-3.457 0-6.53 1.662-8.53 4.188-.162.205-.354.408-.5.625-.005.01.004.024 0 .03-.071.106-.153.206-.22.313-.243.388-.43.8-.624 1.219-.046.098-.114.181-.157.281-.003.01.004.023 0 .031-.133.317-.24.638-.343.969-.328 1.034-.532 2.11-.532 3.25 0 .098.029.184.032.281h-19.97c-.271 0-.437-.165-.437-.437v-62.063c0-.272.19-.47.438-.47zm64.125 3.062l8.344 2.25c.121.033.163.138.125.281l-8.469 31.813V976.85zm-59.312.031a2.236 2.236 0 00-2.219 2.219v42.938a2.236 2.236 0 002.22 2.219h52.061a2.236 2.236 0 002.219-2.219v-15.531a1 1 0 000-.406v-27a2.236 2.236 0 00-2.219-2.22H15.647zm0 2H67.71c.139 0 .219.08.219.219v24.844a71.332 71.332 0 00-5.969-5.031c-4.329-3.242-9.653-6.517-14.28-5.907-3.524.465-6.625 3.834-9.063 6.938-2.037 2.592-2.995 4.334-3.438 5.094-.572-.548-1.467-1.435-3.375-2.844-2.425-1.79-5.376-3.672-8.187-3.438-2.533.212-4.816 2.282-6.657 4.188a35.368 35.368 0 00-1.53 1.687v-25.53c0-.14.08-.22.218-.22zm15.47 5.938c-3.219 0-5.845 2.639-5.845 5.875s2.626 5.875 5.844 5.875 5.844-2.64 5.844-5.875-2.626-5.875-5.844-5.875zm0 2c2.14 0 3.874 1.723 3.874 3.875s-1.735 3.843-3.875 3.843-3.844-1.691-3.844-3.843 1.704-3.875 3.844-3.875zm17.5 8.125c3.402-.047 8.23 2.623 12.155 5.562 3.78 2.83 6.616 5.643 7.156 6.188v15.344c0 .139-.08.219-.218.219H15.648c-.139 0-.219-.08-.219-.22v-14.155s1.245-1.747 2.969-3.532c1.723-1.784 3.983-3.477 5.375-3.593 1.67-.14 4.554 1.34 6.844 3.03a39.47 39.47 0 014.03 3.438 1 1 0 001.595-.218s1.608-2.88 3.937-5.844c2.329-2.965 5.47-5.883 7.781-6.188.214-.028.43-.028.657-.03zm-6.938 32.656a8.865 8.865 0 017.812 4.625c.24.443.431.92.594 1.406.129.38.266.755.344 1.156.102.542.125 1.115.125 1.688 0 .223-.016.437-.032.656-.014.146-.012.29-.03.438-.54 4.401-4.264 7.812-8.813 7.812-4.517 0-8.228-3.363-8.813-7.719a1 1 0 000-.03c-.002-.022.003-.043 0-.063-.044-.361-.093-.72-.093-1.094 0-.605.072-1.21.187-1.78.002-.01-.002-.022 0-.032a8.62 8.62 0 01.219-.812c.003-.01-.003-.022 0-.031.173-.557.382-1.09.656-1.594a9.13 9.13 0 01.969-1.406c.181-.22.392-.425.593-.625 1.005-1 2.238-1.788 3.626-2.22a9.003 9.003 0 012.656-.374zm-.125 2.219a1 1 0 00-.875 1.03v4.626h-4.625a1 1 0 100 2h4.625v4.625a1 1 0 102 0v-4.625h4.625a1 1 0 100-2h-4.625v-4.625a1 1 0 00-1.125-1.031z",color:"#000",enableBackground:"accumulate",transform:"translate(0 -952.362)"})),p.closeSmall=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z",color:"#000"})),p.chevronRight=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z",color:"#000"})),p.chevronLeft=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z",color:"#000"})),p.edit=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z",color:"#000"})),p.gallery=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0","data-name":"Layer 1",viewBox:"0 0 100 100"},(0,a.createElement)("g",{"data-name":"Group"},(0,a.createElement)("path",{d:"M79.2 44.1V12H3.9v55.2h47.7a22.3 22.3 0 1027.6-23.1zm-4-28.1v27.4h-1.4a22.2 22.2 0 00-8.5 1.7l-5.1-3.7-14.1 10.2-15.6-15.3L7.9 50.1V16zM61.4 47.2a22.9 22.9 0 00-8.6 11L49 54.4l11.2-8.1zM7.9 54.8l22-13.5 21.8 21.4v.5H7.9zM73.8 84a18.3 18.3 0 1118.3-18.3A18.3 18.3 0 0173.8 84z","data-name":"Compound Path"}),(0,a.createElement)("path",{d:"M75.8 55.9L71.8 55.9 71.8 63.7 64 63.7 64 67.7 71.8 67.7 71.8 75.5 75.8 75.5 75.8 67.7 83.7 67.7 83.7 63.7 75.8 63.7 75.8 55.9z","data-name":"Path"}))),p.lightbox=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",enableBackground:"new 0 0 69 69",viewBox:"0 0 69 69"},(0,a.createElement)("path",{d:"M66.72 64.5H56.086L42.957 47.9h-3.61v3.86l10.07 12.74h-12.07V47.9h-5.6v16.6H19.688l10.06-12.73V47.9h-3.61l-13.12 16.6H2.28a1 1 0 100 2h64.44a1 1 0 100-2zM33.297 14.42c-5.58 0-10.13 4.54-10.13 10.12 0 5.59 4.55 10.13 10.13 10.13 5.58 0 10.12-4.54 10.12-10.13 0-5.58-4.54-10.12-10.12-10.12z"}),(0,a.createElement)("path",{d:"M51.747 13.34c0-1.81-1.47-3.28-3.28-3.28h-30.35c-1.81 0-3.28 1.47-3.28 3.28v25.69h36.91V13.34zm-18.45 23.33c-6.69 0-12.13-5.44-12.13-12.13 0-6.68 5.44-12.12 12.13-12.12 6.68 0 12.12 5.44 12.12 12.12 0 6.69-5.44 12.13-12.12 12.13zM45.037 5.71c0-1.77-1.44-3.21-3.21-3.21h-17.06c-1.78 0-3.22 1.44-3.22 3.21v2.35h23.49V5.71zM12.704 45.9h41.183a1 1 0 001-1v-2.873a1 1 0 00-1-1H12.704a1 1 0 00-1 1V44.9a1 1 0 001 1z"}));const b=p,h=(e,t="x-large",l="medium")=>{const a=(0,c.pick)(e,["alt","id","caption"]);return a.id=parseInt(a.id,10),a.url=(0,c.get)(e,["sizes",t,"url"])||(0,c.get)(e,["media_details","sizes",t,"source_url"])||e.url,a.thumbUrl=(0,c.get)(e,["sizes",l,"url"])||(0,c.get)(e,["media_details","sizes",l,"source_url"])||e.url,a},y=e=>{const{url:t,alt:l,id:o,linksto:s,focalPointX:g,focalPointY:p,isFirstItem:y,isLastItem:f,isSelected:v,caption:k,onRemove:w,onMoveForward:E,onMoveBackward:x,onSelect:C,setAttributes:S,"aria-label":I,onDeselect:z,inlineEdit:_,sizeSlug:T}=e,[P,L]=(0,u.useState)(!1),M={objectPosition:`${100*g}% ${100*p}%`},N=(0,a.createElement)(a.Fragment,null,(0,a.createElement)("img",{src:t,alt:l,"data-id":o,onClick:C,onFocus:C,onKeyDown:function(e){return()=>{const t=(0,c.filter)(t,((t,l)=>e!==l));S({images:t}),z()}},tabIndex:"0","aria-label":I,style:M}),(0,d.isBlobURL)(t)&&(0,a.createElement)(r.Spinner,null)),B=m()({"is-selected":v,"is-transient":(0,d.isBlobURL)(t)});return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.InspectorControls,null,v&&(0,a.createElement)(r.PanelBody,{title:(0,n.__)("Image Settings","carkeek-blocks")},(0,a.createElement)(r.FocalPointPicker,{label:(0,n.__)("Focal Point","carkeek-blocks"),url:t,onChange:function(e){S({focalPointX:e.x,focalPointY:e.y})},value:{x:g,y:p}}))),(0,a.createElement)("figure",{className:B},!P&&N,P&&(0,a.createElement)(i.MediaPlaceholder,{labels:{title:(0,n.__)("Edit gallery image")},icon:b.imageIcon,onSelect:function(e){if(!e||!e.url)return;let a=h(e,T);((e,t)=>!e&&(0,d.isBlobURL)(t))(o,t)&&l&&(a=(0,c.omit)(a,["alt"])),k&&!(0,c.get)(a,["caption"])&&(a=(0,c.omit)(a,["caption"])),S({mediaAttributes:a}),L(!1)},accept:"image/*",allowedTypes:["image"],value:{id:o,src:t}}),(0,a.createElement)(r.ButtonGroup,{className:"block-library-gallery-item__inline-menu carkeek-edit is-left"},(0,a.createElement)(r.Button,{icon:b.chevronLeft,onClick:y?void 0:x,label:(0,n.__)("Move image backward"),"aria-disabled":y,disabled:!v}),(0,a.createElement)(r.Button,{icon:b.chevronRight,onClick:f?void 0:E,label:(0,n.__)("Move image forward"),"aria-disabled":f,disabled:!v})),_&&(0,a.createElement)(r.ButtonGroup,{className:"block-library-gallery-item__inline-menu carkeek-edit is-right"},(0,a.createElement)(i.URLInputButton,{url:s,onChange:function(e){S({linksto:e})}}),(0,a.createElement)(r.Button,{icon:b.edit,onClick:()=>L(!0),label:(0,n.__)("Replace image"),disabled:!v}),(0,a.createElement)(r.Button,{icon:b.closeSmall,onClick:w,label:(0,n.__)("Remove image"),disabled:!v})),!P&&(v||k)&&(0,a.createElement)(i.RichText,{tagName:"figcaption",placeholder:v?(0,n.__)("Write caption…"):null,value:k,onChange:e=>S({caption:e}),inlineToolbar:!0})))},f=(0,g.withSelect)(((e,{attributes:{ids:t},isSelected:l})=>{const{getMedia:a}=e("core"),{getSettings:i}=e("core/block-editor"),{imageSizes:n}=i(),r=(0,u.useMemo)((()=>l?(0,c.reduce)(t,((e,t)=>{if(!t)return e;const l=a(t),i=(0,c.reduce)(n,((e,t)=>{const a=(0,c.get)(l,["sizes",t.slug,"url"]),i=(0,c.get)(l,["media_details","sizes",t.slug,"source_url"]);return{...e,[t.slug]:a||i}}),{});return{...e,[parseInt(t,10)]:i}}),{}):{}),[l,t,n]);return{imageSizes:n,resizedImages:r}}))((e=>{const{attributes:t,className:l,isSelected:o,imageSizes:s,resizedImages:g}=e,{images:d,sizeSlug:p,sizeSlugThumbs:f,ids:v,displayAs:k,columns:w,columnsMobile:E,columnsTablet:x,cropImages:C,imageLayout:S,limitView:I,viewLimit:z}=t,[_,T]=(0,u.useState)(null),[P,L]=(0,u.useState)(d.map((e=>({id:parseInt(e.id,10),caption:e.caption})))),M="gallery"==k,N=m()({"blocks-gallery-grid":M,[`columns-${w}`]:M,[`columns-m-${E}`]:M,[`columns-t-${x}`]:M,"fixed-images":M&&C,[`fixed-images-${S}`]:M&&C});function B(t){if(t.ids)throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes');t.images&&(t={...t,ids:(0,c.map)(t.images,(({id:e})=>parseInt(e,10)))}),e.setAttributes(t)}function $(e,t){const l=[...d];l.splice(t,1,d[e]),l.splice(e,1,d[t]),T({newIndex:t}),B({images:l})}function F(e){return()=>{0!==e&&$(e,e-1)}}function R(e){return()=>{B({images:(0,c.filter)(d,((t,l)=>e!==l)),selectedImage:null})}}function j(e,t,l){const a=parseInt(e.id,10),i=(0,c.find)(t,{id:a}),n=i?i.caption:e.caption;if(!l)return n;const r=(0,c.find)(l,{id:a});return r&&r.caption!==e.caption?e.caption:n}function A(e){L(e.map((e=>({id:parseInt(e.id,10),caption:e.caption})))),B({images:e.map((e=>({...h(e,p,f),caption:j(e,d,P),id:parseInt(e.id)})))})}const V=!!d.length,O=(0,c.map)(s,(({name:e,slug:t})=>({value:t,label:e}))),U=V&&!(0,c.isEmpty)(O);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(r.PanelBody,null,U&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.SelectControl,{label:(0,n.__)("Thumbnail size"),value:f,options:O,onChange:function(e){B({images:(0,c.map)(d,(t=>{if(!t.id)return t;const l=(0,c.get)(g,[parseInt(t.id,10),e]);return{...t,...l&&{thumbUrl:l}}})),sizeSlugThumbs:e})}}),(0,a.createElement)(r.SelectControl,{label:(0,n.__)("Image size"),value:p,options:O,onChange:function(e){B({images:(0,c.map)(d,(t=>{if(!t.id)return t;const l=(0,c.get)(g,[parseInt(t.id,10),e]);return{...t,...l&&{url:l}}})),sizeSlug:e})}})))),(0,a.createElement)("ul",{className:N},d.map(((e,t)=>{const l=(0,n.sprintf)(/* translators: 1: the order number of the image. 2: the total number of images. */ /* translators: 1: the order number of the image. 2: the total number of images. */
(0,n.__)("image %1$d of %2$d in gallery"),t+1,d.length),i=m()({"blocks-gallery-item":!0,"ck-blocks-gallery-grid-item":!0,"ck-blocks-gallery-hidden":I&&t>=z});return(0,a.createElement)("li",{className:i,key:e.id||e.url},(0,a.createElement)(y,{key:e.id||e.url,url:e.url,alt:e.alt,id:parseInt(e.id,10),focalPointX:e.focalPointX,focalPointY:e.focalPointY,isFirstItem:0===t,isLastItem:t+1===d.length,isSelected:o&&_===t,inlineEdit:!1,onMoveForward:(r=t,()=>{r!==d.length-1&&$(r,r+1)}),onMoveBackward:F(t),onRemove:R(t),onSelect:()=>T(t),onDeselect:()=>T(t),setAttributes:e=>function(e,t){d[e]&&B({images:[...d.slice(0,e),{...d[e],...t},...d.slice(e+1)]})}(t,e),linksto:e.linksto,caption:e.caption,"aria-label":l,sizeSlug:p}));var r}))),!V&&(0,a.createElement)(i.MediaUploadCheck,null,(0,a.createElement)(i.MediaPlaceholder,{addToGallery:V,isAppender:V,className:l,disableMediaButtons:V&&!o,icon:b.gallery,labels:{title:V?(0,n.__)("Edit your gallery"):(0,n.__)("Gallery Images"),instructions:V?(0,n.__)('Click "Media Library" to edit your gallery'):(0,n.__)("Select files from your library.")},onSelect:A,accept:"image/*",allowedTypes:["image"],multiple:!0,gallery:!0,value:d,onError:function(t){const{noticeOperations:l}=e;l.removeAllNotices(),l.createErrorNotice(t)}})),V&&(0,a.createElement)(i.MediaUploadCheck,null,(0,a.createElement)(i.MediaUpload,{onSelect:A,allowedTypes:["image"],isAppender:V,addToGallery:!1,multiple:!0,gallery:!0,value:v,render:({open:e})=>(0,a.createElement)(r.Button,{className:"ck-custom-appender",onClick:e},(0,n.__)(" + Add to / Edit Gallery"))})))})),v=[{attributes:{title:{type:"string"},subtitle:{type:"string"},images:{type:"array",default:[]},linkFirstImage:{type:"boolean",default:!0},hideTitle:{type:"boolean",default:!1},sizeSlug:{type:"string",default:"full"},sizeSlugThumbs:{type:"string",default:"medium"},blockId:{type:"string"},ids:{type:"array",items:{type:"number"},default:[]}},save({attributes:e}){const{title:t,subtitle:l,images:n,linkFirstImage:r,blockId:c,hideTitle:s}=e,m=i.useBlockProps.save(),u=!!n.length,g=t?(0,o.cleanForSlug)(t):c;return(0,a.createElement)("div",{...m},u&&r&&(0,a.createElement)("a",{className:"ck-lightbox-featured-image","data-title":t,"data-fancybox-trigger":`gallery-${g}`,href:"javascript:;"},(0,a.createElement)("img",{src:n[0].thumbUrl,alt:n[0].alt})),!s&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.RichText.Content,{className:"ck-lightbox-title",tagName:"a","data-fancybox-trigger":`gallery-${g}`,href:"javascript:;","data-title":t,value:t}),l&&(0,a.createElement)(i.RichText.Content,{className:"ck-lightbox-subtitle",tagName:"p",value:l})),(0,a.createElement)("div",{style:{display:"none"}},n.map(((e,t)=>(0,a.createElement)("a",{href:e.url,key:t,"data-fancybox":`gallery-${g}`,"data-caption":e.caption},(0,a.createElement)("img",{src:e.thumbUrl}))))))}},{attributes:{title:{type:"string"},subtitle:{type:"string"},images:{type:"array",default:[]},displayAs:{type:"string",default:"single"},columns:{type:"number",default:4},cropImages:{type:"boolean",default:!0},imageLayout:{type:"string",default:"landscape"},limitView:{type:"boolean",default:!1},viewLimit:{type:"number",default:4},mobileScroll:{type:"boolean",default:!1},linkFirstImage:{type:"boolean",default:!0},hideTitle:{type:"boolean",default:!1},sizeSlug:{type:"string",default:"full"},sizeSlugThumbs:{type:"string",default:"medium"},blockId:{type:"string"},ids:{type:"array",items:{type:"number"},default:[]}},save({attributes:e}){const{title:t,subtitle:l,images:n,linkFirstImage:r,blockId:c,hideTitle:s,displayAs:u,viewLimit:g,cropImages:d,columns:p,limitView:b,imageLayout:h,mobileScroll:y}=e,f=i.useBlockProps.save(),v=!!n.length,k=t?(0,o.cleanForSlug)(t):c,w="gallery"==u,E=m()({"ck-blocks-gallery-grid":w,[`columns-${p}`]:w,"fixed-images":w&&d,"ck-blocks-gallery-hidden":!w,[`fixed-images-${h}`]:w&&d,"mobile-scroll":y});return(0,a.createElement)("div",{...f},v&&r&&!w&&(0,a.createElement)("a",{className:"ck-lightbox-featured-image","data-title":t,"data-fancybox-trigger":`gallery-${k}`,href:"javascript:;"},(0,a.createElement)("img",{src:n[0].thumbUrl,alt:n[0].alt})),!s&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.RichText.Content,{className:"ck-lightbox-title",tagName:"a","data-fancybox-trigger":`gallery-${k}`,href:"javascript:;","data-title":t,value:t}),l&&(0,a.createElement)(i.RichText.Content,{className:"ck-lightbox-subtitle",tagName:"p",value:l})),(0,a.createElement)("ul",{className:E,"data-title":t,id:`wrappergallery-${k}`},n.map(((e,t)=>{let l={};e.focalPointX&&e.focalPointY&&(l.objectPosition=`${100*e.focalPointX}% ${100*e.focalPointY}%`);const i=m()({"ck-blocks-gallery-grid-item":!0,"ck-blocks-gallery-hidden":b&&t>=g});return(0,a.createElement)("li",{key:t,className:i}," ",(0,a.createElement)("a",{href:e.url,"data-fancybox":`gallery-${k}`,"data-caption":e.caption},(0,a.createElement)("img",{style:l,src:e.thumbUrl})))}))))}}],k=window.wp.blocks,w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/lightbox-gallery","version":"0.1.0","title":"Lightbox Gallery","category":"widgets","description":"Create an image linked to a lightbox gallery","supports":{"reusable":true,"html":false,"align":["wide","full"],"spacing":{"padding":true,"margin":true}},"textdomain":"carkeek-blocks","attributes":{"title":{"type":"string"},"subtitle":{"type":"string"},"images":{"type":"array","default":[]},"displayAs":{"type":"string","default":"single"},"columns":{"type":"number","default":4},"columnsMobile":{"type":"number","default":1},"columnsTablet":{"type":"number","default":2},"cropImages":{"type":"boolean","default":true},"imageLayout":{"type":"string","default":"landscape"},"limitView":{"type":"boolean","default":false},"viewLimit":{"type":"number","default":4},"mobileScroll":{"type":"boolean","default":false},"linkFirstImage":{"type":"boolean","default":true},"hideTitle":{"type":"boolean","default":false},"sizeSlug":{"type":"string","default":"full"},"sizeSlugThumbs":{"type":"string","default":"large"},"blockId":{"type":"string"},"style":{"type":"object","default":{"spacing":{"margin":{},"padding":{}}}},"ids":{"type":"array","items":{"type":"number"},"default":[]}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./script.js","style":"file:./style-index.css"}');(0,k.registerBlockType)(w,{icon:b.lightbox,keywords:[(0,n.__)("lightbox","carkeek-blocks"),(0,n.__)("gallery","carkeek-blocks")],save:function({attributes:e}){const{title:t,subtitle:l,images:n,linkFirstImage:r,blockId:c,hideTitle:s,displayAs:u,viewLimit:g,cropImages:d,columns:p,columnsMobile:b,columnsTablet:h,limitView:y,imageLayout:f,mobileScroll:v}=e,k=i.useBlockProps.save(),w=!!n.length,E=t?(0,o.cleanForSlug)(t):c,x="gallery"==u,C=m()({"ck-blocks-gallery-grid":x,[`columns-${p}`]:x,[`columns-m-${b}`]:x,[`columns-t-${h}`]:x,"fixed-images":x&&d,"ck-blocks-gallery-hidden":!x,[`fixed-images-${f}`]:x&&d,"mobile-scroll":v});return(0,a.createElement)("div",{...k},w&&r&&!x&&(0,a.createElement)("a",{className:"ck-lightbox-featured-image","data-title":t,"data-fancybox-trigger":`gallery-${E}`,href:"#fancybox"},(0,a.createElement)("img",{src:n[0].thumbUrl,alt:n[0].alt})),!s&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.RichText.Content,{className:"ck-lightbox-title",tagName:"a","data-fancybox-trigger":`gallery-${E}`,href:"javascript:;","data-title":t,value:t}),l&&(0,a.createElement)(i.RichText.Content,{className:"ck-lightbox-subtitle",tagName:"p",value:l})),(0,a.createElement)("ul",{className:C,"data-title":t,id:`wrappergallery-${E}`},n.map(((e,t)=>{let l={};e.focalPointX&&e.focalPointY&&(l.objectPosition=`${100*e.focalPointX}% ${100*e.focalPointY}%`);const i=m()({"ck-blocks-gallery-grid-item":!0,"ck-blocks-gallery-hidden":y&&t>=g});return(0,a.createElement)("li",{key:t,className:i}," ",(0,a.createElement)("a",{href:e.url,"data-fancybox":`gallery-${E}`,"data-caption":e.caption},(0,a.createElement)("img",{style:l,alt:e.alt,src:e.thumbUrl})))}))))},edit:function(e){const{attributes:t,isSelected:l,clientId:c,setAttributes:s}=e,{title:m,subtitle:u,images:g,blockId:d,linkFirstImage:p,hideTitle:b,displayAs:h,columns:y,columnsMobile:v,columnsTablet:k,cropImages:w,limitView:E,viewLimit:x,imageLayout:C,mobileScroll:S}=t;d||s({blockId:c}),v||s({columnsMobile:1}),k||s({columnsTablet:2});const I=(0,i.useBlockProps)(),z=!!g.length,_="gallery"==h,T=function(e,t){return'<a href="javascript:;" data-title="'+e+'" data-fancybox-trigger="gallery-'+t+'" class="is-style-cta">Link to Gallery</a>'}(m,m?(0,o.cleanForSlug)(m):d);return(0,a.createElement)("div",{...I},(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(r.PanelBody,null,(0,a.createElement)(r.RadioControl,{label:"Display on page as",selected:h,options:[{label:"Single Image",value:"single"},{label:"Gallery",value:"gallery"}],onChange:e=>s({displayAs:e})}),"single"==h&&(0,a.createElement)(r.CheckboxControl,{label:"Link first image to Lightbox",checked:p,onChange:function(e){s({linkFirstImage:e}),e||s({hideTitle:!1})}})),"gallery"==h&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.PanelBody,{title:"Gallery"},(0,a.createElement)(r.RangeControl,{label:"Columns",value:y,onChange:e=>s({columns:e}),min:1,max:6,step:1}),(0,a.createElement)(r.ToggleControl,{label:"Crop Images",help:"Crop the images in the page view to a uniform size",checked:w,onChange:e=>s({cropImages:e})}),w&&(0,a.createElement)(r.RadioControl,{label:"Image Layout",selected:C,options:[{label:"Landscape",value:"landscape"},{label:"Portrait",value:"portrait"},{label:"Square",value:"square"}],onChange:e=>s({imageLayout:e})}),(0,a.createElement)(r.ToggleControl,{label:"Limit Initial View",help:"Limit the gallery view on the page to a number (all images will be accessible from the lightbox)",checked:E,onChange:e=>s({limitView:e})}),E&&(0,a.createElement)(r.RangeControl,{label:"Number of images to show on page",value:x,onChange:e=>s({viewLimit:e}),min:y,step:y}),(0,a.createElement)(r.ToggleControl,{label:"Horizontal scroll on mobile",help:"Scroll gallery items horizontally on mobile",checked:S,onChange:e=>s({mobileScroll:e})}),!S&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.RangeControl,{label:"Columns Mobile",value:v,onChange:e=>s({columnsMobile:e}),min:1,max:6,step:1}),(0,a.createElement)(r.RangeControl,{label:"Columns Tablet",value:k,onChange:e=>s({columnsTablet:e}),min:1,max:6,step:1})))),(0,a.createElement)(r.PanelBody,{title:"Lightbox"},(0,a.createElement)(r.TextControl,{label:"Title",value:m,help:"Provide a unique title for your lightbox.",onChange:e=>s({title:e})}),(0,a.createElement)(r.TextControl,{label:"Sub Title",value:u,help:"Provide an optional subtitle for your lightbox.",onChange:e=>s({subtitle:e})}),(0,a.createElement)(r.CheckboxControl,{label:"Hide title",checked:b,onChange:e=>s({hideTitle:e})}),(0,a.createElement)("div",null,"Add a link to this gallery from elsewhere on the page. ",T))),z&&p&&!l&&!_&&(0,a.createElement)("div",{className:"ck-lightbox-featured"},function(e){let t={};return e.focalPoint&&(t.objectPosition=`${100*e.focalPoint.x}% ${100*e.focalPoint.y}%`),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("img",{src:e.url,alt:e.alt,style:t}))}(g[0])),(l||_)&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(f,{...e})),(0,a.createElement)(i.RichText,{className:"ck-lightbox-title",tagName:"div",onChange:e=>s({title:e}),value:m,placeholder:(0,n.__)("Title","carkeek-blocks"),formatingControls:[]}),(0,a.createElement)(i.RichText,{className:"ck-lightbox-subtitle",tagName:"div",onChange:e=>s({subtitle:e}),value:u,placeholder:l?(0,n.__)("Sub-Title","carkeek-blocks"):null,formatingControls:[]}))},deprecated:v})},485:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)){if(l.length){var r=i.apply(null,l);r&&e.push(r)}}else if("object"===n){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var o in l)a.call(l,o)&&l[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(l=function(){return i}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var i=l[e];if(void 0!==i)return i.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,i,n)=>{if(!l){var r=1/0;for(m=0;m<e.length;m++){for(var[l,i,n]=e[m],o=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(m--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[l,i,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={7e3:0,1664:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var i,n,[r,o,c]=l,s=0;if(r.some((t=>0!==e[t]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var m=c(a)}for(t&&t(l);s<r.length;s++)n=r[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},l=globalThis.webpackChunkcarkeek_blocks_v2=globalThis.webpackChunkcarkeek_blocks_v2||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var i=a.O(void 0,[1664],(()=>a(374)));i=a.O(i)})();