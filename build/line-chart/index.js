!function(){"use strict";var e,t={90:function(){var e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}var a=window.wp.element,r=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components;window.wp.serverSideRender;var o=(0,l.withColors)("backgroundColor","color")((function(e){const{name:o,attributes:s,setAttributes:c,setColor:i,setBackgroundColor:u,color:p,backgroundColor:h,clientId:d}=e,{direction:m,barLength:g,barThickness:f,textBeforeVal:b,textBeforeGoal:x,numberVal:k,numberValGoal:y,expressAs:v,textAfterVal:E,textAfterGoal:w,isPercentage:C,animate:N}=s,V=k/y*100;let $="",_="",B={},A={},G={};var S;c({direction:S=m}),"horizontal"==S?($="Width",_="Height",A={maxWidth:g+"px",height:f+"px"},G={height:f+"px",width:V+"%"},B={width:g+"px"}):($="Height",_="Width",A={width:f+"px",maxHeight:g+"px"},G={width:f+"px",height:V+"%"},B={height:g+"px"});let T="",O="";function P(e){c({expressAs:e}),T="",O="","percent"==e?O="%":"dollar"==e&&(T="$")}P(v);const H=(0,l.useBlockProps)({className:`ck-line-chart-${m} animate-${N}  pct-${V}`});return(0,a.createElement)("div",t({},H,{style:B}),(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:(0,r.__)("Value settings")},(0,a.createElement)(n.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>c({numberVal:parseInt(e)}),shiftStep:1,value:k,label:(0,r.__)("Current Value","carkeek-blocks")}),(0,a.createElement)(n.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>c({numberValGoal:parseInt(e)}),shiftStep:1,value:y,label:(0,r.__)("Goal","carkeek-blocks")}),(0,a.createElement)(n.RadioControl,{label:"Express #s as",selected:v,options:[{label:"Dollars",value:"dollar"},{label:"Percentage",value:"percent"},{label:"Plain",value:"plain"}],onChange:e=>P(e)})),(0,a.createElement)(n.PanelBody,{title:(0,r.__)("Text Settings")},(0,a.createElement)(n.TextControl,{label:"Text Before Current Value",value:b,onChange:e=>c({textBeforeVal:e})}),(0,a.createElement)(n.TextControl,{label:"Text After Current Value",help:"Use this to add a suffix to the number, e.g. %",value:E,onChange:e=>c({textAfterVal:e})}),(0,a.createElement)(n.TextControl,{label:"Text Before Goal Value",value:x,onChange:e=>c({textBeforeGoal:e})}),(0,a.createElement)(n.TextControl,{label:"Text After Goal Value",help:"Use this to add a suffix to the number, e.g. %",value:w,onChange:e=>c({textAfterGoal:e})})),(0,a.createElement)(n.PanelBody,{title:(0,r.__)("Layout")},(0,a.createElement)(n.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>c({barLength:e}),shiftStep:1,value:g,label:$}),(0,a.createElement)(n.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>c({barThickness:e}),shiftStep:1,value:f,label:_}),(0,a.createElement)(n.ToggleControl,{label:"Animate on Scroll into View",checked:N,onChange:e=>c({animate:e})})),(0,a.createElement)(l.PanelColorSettings,{title:(0,r.__)("Color settings"),colorSettings:[{value:p.color,onChange:function(e){i(e),c({colorHex:e})},label:(0,r.__)("Highlight color")},{value:h.color,onChange:function(e){u(e),c({backgroundColorHex:e})},label:(0,r.__)("Background color")}]})),(0,a.createElement)("div",{className:"ck-line-chart--text",style:B},(0,a.createElement)("span",{className:"ck-line-chart--current"},b," ",(0,a.createElement)("span",{className:"value"},T,k,O)," ",E),(0,a.createElement)("span",{className:"ck-line-chart--goal"},x," ",(0,a.createElement)("span",{className:"value"},T,y,O)," ",w)),(0,a.createElement)("div",{className:`ck-line-chart--line ${h.class} layout-${m}`,style:A},(0,a.createElement)("span",{className:`has-${p.slug}-background-color`,"data-progress":`${k}`,style:G})))}));window.wp.data;var s=[{attributes:{numberVal:{type:"number",default:0},numberValGoal:{type:"number",default:0},expressAs:{type:"string",default:"dollar"},textBeforeVal:{type:"string",default:""},textAfterVal:{type:"string",default:""},textBeforeGoal:{type:"string",default:""},textAfterGoal:{type:"string",default:""},color:{type:"string"},customColor:{type:"string"},colorHex:{type:"string",default:"#000000"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},backgroundColorHex:{type:"string",default:"rgba(0, 0, 0, 0)"},className:{type:"string"},animate:{type:"boolean",default:!0},barLength:{type:"string",default:"300"},barThickness:{type:"string",default:"20"},direction:{type:"string",default:"horizontal"},align:{type:"string",default:"center"}},save(e){const{attributes:r}=e,{align:n,direction:o,color:s,backgroundColor:c,barLength:i,barThickness:u,textBeforeVal:p,textBeforeGoal:h,numberVal:d,numberValGoal:m,expressAs:g,textAfterVal:f,textAfterGoal:b,isPercentage:x,animate:k}=r;let y={},v={},E={},w="",C="";const N=d/m*100;var V;w="",C="","percent"==(V=g)?C="%":"dollar"==V&&(w="$"),function(e){"horizontal"==e?(y={maxWidth:i+"px",height:u+"px"},v={height:u+"px",width:N+"%"},E={width:i+"px"},k&&(v.width="0")):(y={width:u+"px",maxHeight:i+"px"},v={width:u+"px",height:N+"%"},E={height:i+"px"},k&&(v.height="0"))}(o);const $=k?0:d,_=l.useBlockProps.save({className:`ck-line-chart-${o} pct-${N} animate-${k}`});return(0,a.createElement)("div",t({},_,{"data-progress":`${d}`,"data-goal":`${m}`,"data-type":g}),(0,a.createElement)("div",{className:"ck-line-chart--text",style:E},(0,a.createElement)("span",{className:"ck-line-chart--current"},p," ",(0,a.createElement)("span",{className:"value"},w,(0,a.createElement)("span",{className:"ck-chart--number"},$),C)," ",f),(0,a.createElement)("span",{className:"ck-line-chart--goal"},h," ",(0,a.createElement)("span",{className:"value"},w,(0,a.createElement)("span",{className:"ck-chart--goal"},function(e){const t=/(\d+)(\d{3})/,a=(e+="").split(".");let r=a[0],l=a.length>1?"."+a[1]:"";for(;t.test(r);)r=r.replace(t,"$1,$2");return r+l}(m)),C)," ",b)),(0,a.createElement)("div",{className:`ck-line-chart--line has-${c}-background-color layout-${o}`,style:y},(0,a.createElement)("span",{className:`has-${s}-background-color  ck-bar`,style:v})))}}],c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/line-chart","version":"0.1.1","title":"Progress Bar","category":"widgets","description":"Create an animated progress or bar chart.","icon":"chart-bar","keywords":["progress","bar","chart","line","graph"],"supports":{"html":false,"align":["left","center","right"]},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"rounded","label":"Rounded Edges"}],"textdomain":"carkeek-blocks","attributes":{"numberVal":{"type":"number","default":0},"numberValGoal":{"type":"number","default":0},"expressAs":{"type":"string","default":"dollar"},"textBeforeVal":{"type":"string","default":""},"textAfterVal":{"type":"string","default":""},"textBeforeGoal":{"type":"string","default":""},"textAfterGoal":{"type":"string","default":""},"color":{"type":"string"},"customColor":{"type":"string"},"colorHex":{"type":"string","default":"#000000"},"backgroundColor":{"type":"string"},"customBackgroundColor":{"type":"string"},"backgroundColorHex":{"type":"string","default":"rgba(0, 0, 0, 0)"},"className":{"type":"string"},"animate":{"type":"boolean","default":true},"barLength":{"type":"string","default":"300"},"barThickness":{"type":"string","default":"20"},"direction":{"type":"string","default":"horizontal"},"align":{"type":"string","default":"center"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./script.js"}');(0,a.createElement)("svg",{width:"512pt",height:"512pt",version:"1.1",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"m469.33 256c0 117.33-96 213.33-213.33 213.33s-213.33-96-213.33-213.33 96-213.33 213.33-213.33c57.602 0 110.93 21.332 151.46 61.867l29.867-29.867c-49.066-49.066-113.07-74.668-181.33-74.668-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256z"}),(0,a.createElement)("path",{d:"m384 256h42.668c0-93.867-76.801-170.67-170.67-172.8-93.867 0-170.67 76.801-170.67 170.67 0 93.867 76.801 170.67 170.67 172.8v-42.668c-70.398 0-128-57.602-128-130.13 0-70.398 57.602-128 128-128 70.398 2.1328 128 59.734 128 130.13z"}),(0,a.createElement)("path",{d:"m315.73 315.73c34.133-34.133 34.133-87.465 0-121.6-34.133-34.133-87.465-34.133-121.6 0-34.133 34.133-34.133 87.465 0 121.6l29.867-29.867c-17.066-17.066-17.066-42.668 0-59.734 17.066-17.066 42.668-17.066 59.734 0 17.066 17.066 17.066 42.668 0 59.734z"}))),(0,e.registerBlockType)(c,{edit:o,save:function(e){const{attributes:r}=e,{align:n,direction:o,color:s,backgroundColor:c,barLength:i,barThickness:u,textBeforeVal:p,textBeforeGoal:h,numberVal:d,numberValGoal:m,expressAs:g,textAfterVal:f,textAfterGoal:b,isPercentage:x,animate:k}=r;let y={},v={},E={},w="",C="";const N=d/m*100;var V;w="",C="","percent"==(V=g)?C="%":"dollar"==V&&(w="$"),function(e){"horizontal"==e?(y={maxWidth:i+"px",height:u+"px"},v={height:u+"px",width:N+"%"},E={maxWidth:i+"px"},k&&(v.width="0")):(y={width:u+"px",maxHeight:i+"px"},v={width:u+"px",height:N+"%"},E={maxHeight:i+"px"},k&&(v.height="0"))}(o);const $=k?0:d,_=l.useBlockProps.save({className:`ck-line-chart-${o} pct-${N} animate-${k}`});return(0,a.createElement)("div",t({},_,{"data-progress":`${d}`,"data-goal":`${m}`,"data-type":g}),(0,a.createElement)("div",{className:"ck-line-chart--text",style:E},(0,a.createElement)("span",{className:"ck-line-chart--current"},p," ",(0,a.createElement)("span",{className:"value"},w,(0,a.createElement)("span",{className:"ck-chart--number"},$),C)," ",f),(0,a.createElement)("span",{className:"ck-line-chart--goal"},h," ",(0,a.createElement)("span",{className:"value"},w,(0,a.createElement)("span",{className:"ck-chart--goal"},function(e){const t=/(\d+)(\d{3})/,a=(e+="").split(".");let r=a[0],l=a.length>1?"."+a[1]:"";for(;t.test(r);)r=r.replace(t,"$1,$2");return r+l}(m)),C)," ",b)),(0,a.createElement)("div",{className:`ck-line-chart--line has-${c}-background-color layout-${o}`,style:y},(0,a.createElement)("span",{className:`has-${s}-background-color  ck-bar`,style:v})))},deprecated:s})}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=function(t,a,l,n){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],l=e[u][1],n=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(s=!1,n<o&&(o=n));if(s){e.splice(u--,1);var i=l();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,l,n]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={94:0,897:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,n,o=a[0],s=a[1],c=a[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(c)var u=c(r)}for(t&&t(a);i<o.length;i++)n=o[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},a=self.webpackChunkcarkeek_blocks_v2=self.webpackChunkcarkeek_blocks_v2||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var l=r.O(void 0,[897],(function(){return r(90)}));l=r.O(l)}();