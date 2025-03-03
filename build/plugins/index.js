(()=>{"use strict";const e=window.React,t=window.wp.editor,a=window.wp.i18n,o=window.wp.components,i=window.wp.data,l=window.wp.compose,s=(0,i.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),{getMedia:a,getPostType:o}=e("core"),i=o(t("type"));let l,s,c,n,r,d,u=!1,k=!1;return i&&i.supports["custom-fields"]&&i.supports["custom-fields"]&&(k=!0),k&&(l=t("meta")._carkeekblocks_title_hidden,s=t("meta")._carkeekblocks_featuredimage_hidden,c=t("meta")._carkeekblocks_featured_image_focal_point,n=t("featured_media"),r=n?a(n):null,u=!(!ckBlocksVars||1!=ckBlocksVars.supportsOpacity),u&&(d=t("meta")._carkeekblocks_featured_image_opacity,101===d&&(d=parseInt(ckBlocksVars.opacityDefault)))),{hideTitle:l,hideFeaturedImage:s,featuredMedia:r,featuredImageFocalPoint:c,supportsMeta:k,featuredImageOpacity:d,supportsOpacity:u}})),c=(0,i.withDispatch)((e=>{const{editPost:t}=e("core/editor");return{setHideTitle:e=>{t({meta:{_carkeekblocks_title_hidden:e}})},setHideFeaturedImage:e=>{t({meta:{_carkeekblocks_featuredimage_hidden:e}})},setFeaturedImageFocalPoint:e=>{t({meta:{_carkeekblocks_featured_image_focal_point:e}})},setFeaturedImageOpacity:e=>{t({meta:{_carkeekblocks_featured_image_opacity:e}})}}})),n=(0,l.compose)(s,c)((function(i){const{hideTitle:l,setHideTitle:s,hideFeaturedImage:c,setHideFeaturedImage:n,featuredMedia:r,featuredImageFocalPoint:d,setFeaturedImageFocalPoint:u,supportsMeta:k,supportsOpacity:m,setFeaturedImageOpacity:p,featuredImageOpacity:g}=i,_=document.querySelector(".editor-post-title__block"),h={x:.5,y:.5};if(!m||d&&"object"==typeof d||u(h),_){const e=void 0!==l&&void 0!==l&&l,t=e?"carkeek-blocks-title-hidden":"carkeek-blocks-title-visible";e?document.body.classList.remove("carkeek-blocks-title-visible"):document.body.classList.remove("carkeek-blocks-title-hidden"),document.body.classList.add(t)}let b,y;if(!c&&r&&r.source_url){const t=r.source_url,{width:i,height:l}=r.media_details,s=m?"ck-focal-point-wrapper has-opacity":"";b=(0,e.createElement)("div",{className:s,style:{"--focal-opacity":g}},(0,e.createElement)(o.FocalPointPicker,{label:(0,a.__)("Featured Image Focal Point"),url:t,dimensions:{width:i,height:l},value:d,onChange:e=>u(e)}),(0,e.createElement)(o.Button,{variant:"secondary",className:"is-secondary",onClick:function(){u(h)}},"Reset FocalPoint")),m&&(y=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.RangeControl,{label:"Overlay Opacity",value:g,onChange:e=>p(e),min:0,max:50,step:5})))}const w=(0,e.createElement)(o.CheckboxControl,{className:"carkeek-hide-featured-image-label",label:"Hide Featured Image",checked:c,onChange:e=>n(e),help:c?(0,a.__)("The Featured Image is hidden on the rendered page.","carkeek-blocks"):(0,a.__)("The Featured Image is visible on the rendered page.","carkeek-blocks")});return(0,e.createElement)(t.PluginDocumentSettingPanel,{name:"page-header-settings-panel",title:"Page Header Settings",className:"page-header-settings-panel"},k&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.CheckboxControl,{className:"carkeek-hide-title-label",label:(0,a.__)("Hide Page Title","carkeek-blocks"),checked:l,onChange:e=>s(e),help:l?(0,a.__)("Title is hidden on the rendered page.","carkeek-blocks"):null}),w,b,y,(0,e.createElement)("p",null),(0,e.createElement)("p",null,"These settings may not be applied on all pages/posts.")),!k&&(0,e.createElement)("p",null,"Not supported for this post type. If you want to use this feature on this post, let your site admin know that this post type must support 'custom-fields'."))})),r=window.wp.plugins;(0,r.registerPlugin)("carkeek-blocks-pageheader",{icon:!1,render:n}),(0,r.registerPlugin)("carkeek-blocks-sidebar",{icon:!1,render:function(){const l=(0,i.useSelect)((e=>e("core/edit-post").isFeatureActive("ckGroupOutlines"))),s=(0,i.useSelect)((e=>e("core/edit-post").isFeatureActive("ckColumnOutlines"))),c=(0,i.useSelect)((e=>e("core/edit-post").isFeatureActive("ckBlockOutlines"))),{toggleFeature:n}=(0,i.useDispatch)("core/edit-post");return l?document.body.classList.add("is-group-lines-on"):document.body.classList.remove("is-group-lines-on"),s?document.body.classList.add("is-column-lines-on"):document.body.classList.remove("is-column-lines-on"),c?document.body.classList.add("is-block-lines-on"):document.body.classList.remove("is-block-lines-on"),(0,e.createElement)(t.PluginSidebar,{name:"carkeek-blocks-sidebar",icon:"admin-settings",title:(0,a.__)("Carkeek Blocks")},(0,e.createElement)(o.PanelBody,{title:(0,a.__)("Editor Controls")},(0,e.createElement)(o.ToggleControl,{label:(0,a.__)("Outline Groups"),checked:l,help:(0,a.__)("Show outlines on Group Blocks in edit view"),onChange:()=>{n("ckGroupOutlines")}}),(0,e.createElement)(o.ToggleControl,{label:(0,a.__)("Outline Columns"),checked:s,help:(0,a.__)("Show outlines on Column Blocks in edit view"),onChange:()=>{n("ckColumnOutlines")}}),(0,e.createElement)(o.ToggleControl,{label:(0,a.__)("Outline All Blocks"),checked:c,help:(0,a.__)("Show outlines on all Blocks in edit view"),onChange:()=>{n("ckBlockOutlines")}})))}})})();