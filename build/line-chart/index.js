(()=>{"use strict";var e,t={251:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.components;window.wp.serverSideRender;const n=(0,l.withColors)("backgroundColor","color")((function(e){const{name:n,attributes:o,setAttributes:s,setColor:c,setBackgroundColor:i,color:p,backgroundColor:u,clientId:d}=e,{direction:h,barLength:g,barThickness:m,textBeforeVal:b,textBeforeGoal:f,numberVal:x,numberValGoal:k,expressAs:y,textAfterVal:v,textAfterGoal:E,isPercentage:w,animate:C}=o,N=x/k*100;let V="",$="",_={},B={},A={};var G;s({direction:G=h}),"horizontal"==G?(V="Width",$="Height",B={maxWidth:g+"px",height:m+"px"},A={height:m+"px",width:N+"%"},_={width:g+"px"}):(V="Height",$="Width",B={width:m+"px",maxHeight:g+"px"},A={width:m+"px",height:N+"%"},_={height:g+"px"});let S="",T="";function P(e){s({expressAs:e}),S="",T="","percent"==e?T="%":"dollar"==e&&(S="$")}P(y);const H=(0,l.useBlockProps)({className:`ck-line-chart-${h} animate-${C}  pct-${N}`});return(0,t.createElement)("div",{...H,style:_},(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,a.__)("Value settings")},(0,t.createElement)(r.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>s({numberVal:parseInt(e)}),shiftStep:1,value:x,label:(0,a.__)("Current Value","carkeek-blocks")}),(0,t.createElement)(r.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>s({numberValGoal:parseInt(e)}),shiftStep:1,value:k,label:(0,a.__)("Goal","carkeek-blocks")}),(0,t.createElement)(r.RadioControl,{label:"Express #s as",selected:y,options:[{label:"Dollars",value:"dollar"},{label:"Percentage",value:"percent"},{label:"Plain",value:"plain"}],onChange:e=>P(e)})),(0,t.createElement)(r.PanelBody,{title:(0,a.__)("Text Settings")},(0,t.createElement)(r.TextControl,{label:"Text Before Current Value",value:b,onChange:e=>s({textBeforeVal:e})}),(0,t.createElement)(r.TextControl,{label:"Text After Current Value",help:"Use this to add a suffix to the number, e.g. %",value:v,onChange:e=>s({textAfterVal:e})}),(0,t.createElement)(r.TextControl,{label:"Text Before Goal Value",value:f,onChange:e=>s({textBeforeGoal:e})}),(0,t.createElement)(r.TextControl,{label:"Text After Goal Value",help:"Use this to add a suffix to the number, e.g. %",value:E,onChange:e=>s({textAfterGoal:e})})),(0,t.createElement)(r.PanelBody,{title:(0,a.__)("Layout")},(0,t.createElement)(r.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>s({barLength:e}),shiftStep:1,value:g,label:V}),(0,t.createElement)(r.__experimentalNumberControl,{isShiftStepEnabled:!0,onChange:e=>s({barThickness:e}),shiftStep:1,value:m,label:$}),(0,t.createElement)(r.ToggleControl,{label:"Animate on Scroll into View",checked:C,onChange:e=>s({animate:e})})),(0,t.createElement)(l.PanelColorSettings,{title:(0,a.__)("Color settings"),colorSettings:[{value:p.color,onChange:function(e){c(e),s({colorHex:e})},label:(0,a.__)("Highlight color")},{value:u.color,onChange:function(e){i(e),s({backgroundColorHex:e})},label:(0,a.__)("Background color")}]})),(0,t.createElement)("div",{className:"ck-line-chart--text",style:_},(0,t.createElement)("span",{className:"ck-line-chart--current"},b," ",(0,t.createElement)("span",{className:"value"},S,x,T)," ",v),(0,t.createElement)("span",{className:"ck-line-chart--goal"},f," ",(0,t.createElement)("span",{className:"value"},S,k,T)," ",E)),(0,t.createElement)("div",{className:`ck-line-chart--line ${u.class} layout-${h}`,style:B},(0,t.createElement)("span",{className:`has-${p.slug}-background-color`,"data-progress":`${x}`,style:A})))}));window.wp.data;const o=[{attributes:{numberVal:{type:"number",default:0},numberValGoal:{type:"number",default:0},expressAs:{type:"string",default:"dollar"},textBeforeVal:{type:"string",default:""},textAfterVal:{type:"string",default:""},textBeforeGoal:{type:"string",default:""},textAfterGoal:{type:"string",default:""},color:{type:"string"},customColor:{type:"string"},colorHex:{type:"string",default:"#000000"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},backgroundColorHex:{type:"string",default:"rgba(0, 0, 0, 0)"},className:{type:"string"},animate:{type:"boolean",default:!0},barLength:{type:"string",default:"300"},barThickness:{type:"string",default:"20"},direction:{type:"string",default:"horizontal"},align:{type:"string",default:"center"}},save(e){const{attributes:a}=e,{align:r,direction:n,color:o,backgroundColor:s,barLength:c,barThickness:i,textBeforeVal:p,textBeforeGoal:u,numberVal:d,numberValGoal:h,expressAs:g,textAfterVal:m,textAfterGoal:b,isPercentage:f,animate:x}=a;let k={},y={},v={},E="",w="";const C=d/h*100;var N;E="",w="","percent"==(N=g)?w="%":"dollar"==N&&(E="$"),function(e){"horizontal"==e?(k={maxWidth:c+"px",height:i+"px"},y={height:i+"px",width:C+"%"},v={width:c+"px"},x&&(y.width="0")):(k={width:i+"px",maxHeight:c+"px"},y={width:i+"px",height:C+"%"},v={height:c+"px"},x&&(y.height="0"))}(n);const V=x?0:d,$=l.useBlockProps.save({className:`ck-line-chart-${n} pct-${C} animate-${x}`});return(0,t.createElement)("div",{...$,"data-progress":`${d}`,"data-goal":`${h}`,"data-type":g},(0,t.createElement)("div",{className:"ck-line-chart--text",style:v},(0,t.createElement)("span",{className:"ck-line-chart--current"},p," ",(0,t.createElement)("span",{className:"value"},E,(0,t.createElement)("span",{className:"ck-chart--number"},V),w)," ",m),(0,t.createElement)("span",{className:"ck-line-chart--goal"},u," ",(0,t.createElement)("span",{className:"value"},E,(0,t.createElement)("span",{className:"ck-chart--goal"},function(e){const t=/(\d+)(\d{3})/,a=(e+="").split(".");let l=a[0],r=a.length>1?"."+a[1]:"";for(;t.test(l);)l=l.replace(t,"$1,$2");return l+r}(h)),w)," ",b)),(0,t.createElement)("div",{className:`ck-line-chart--line has-${s}-background-color layout-${n}`,style:k},(0,t.createElement)("span",{className:`has-${o}-background-color  ck-bar`,style:y})))}}],s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/line-chart","version":"0.1.1","title":"Progress Bar","category":"widgets","description":"Create an animated progress or bar chart.","icon":"chart-bar","keywords":["progress","bar","chart","line","graph"],"supports":{"html":false,"align":["left","center","right"],"spacing":{"padding":true,"margin":true}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"rounded","label":"Rounded Edges"}],"textdomain":"carkeek-blocks","attributes":{"numberVal":{"type":"number","default":0},"numberValGoal":{"type":"number","default":0},"expressAs":{"type":"string","default":"dollar"},"textBeforeVal":{"type":"string","default":""},"textAfterVal":{"type":"string","default":""},"textBeforeGoal":{"type":"string","default":""},"textAfterGoal":{"type":"string","default":""},"color":{"type":"string"},"customColor":{"type":"string"},"colorHex":{"type":"string","default":"#000000"},"backgroundColor":{"type":"string"},"customBackgroundColor":{"type":"string"},"backgroundColorHex":{"type":"string","default":"rgba(0, 0, 0, 0)"},"className":{"type":"string"},"animate":{"type":"boolean","default":true},"barLength":{"type":"string","default":"300"},"barThickness":{"type":"string","default":"20"},"direction":{"type":"string","default":"horizontal"},"align":{"type":"string","default":"center"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./script.js"}');(0,t.createElement)("svg",{width:"512pt",height:"512pt",version:"1.1",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("g",null,(0,t.createElement)("path",{d:"m469.33 256c0 117.33-96 213.33-213.33 213.33s-213.33-96-213.33-213.33 96-213.33 213.33-213.33c57.602 0 110.93 21.332 151.46 61.867l29.867-29.867c-49.066-49.066-113.07-74.668-181.33-74.668-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256z"}),(0,t.createElement)("path",{d:"m384 256h42.668c0-93.867-76.801-170.67-170.67-172.8-93.867 0-170.67 76.801-170.67 170.67 0 93.867 76.801 170.67 170.67 172.8v-42.668c-70.398 0-128-57.602-128-130.13 0-70.398 57.602-128 128-128 70.398 2.1328 128 59.734 128 130.13z"}),(0,t.createElement)("path",{d:"m315.73 315.73c34.133-34.133 34.133-87.465 0-121.6-34.133-34.133-87.465-34.133-121.6 0-34.133 34.133-34.133 87.465 0 121.6l29.867-29.867c-17.066-17.066-17.066-42.668 0-59.734 17.066-17.066 42.668-17.066 59.734 0 17.066 17.066 17.066 42.668 0 59.734z"}))),(0,e.registerBlockType)(s,{edit:n,save:function(e){const{attributes:a}=e,{align:r,direction:n,color:o,backgroundColor:s,barLength:c,barThickness:i,textBeforeVal:p,textBeforeGoal:u,numberVal:d,numberValGoal:h,expressAs:g,textAfterVal:m,textAfterGoal:b,isPercentage:f,animate:x}=a;let k={},y={},v={},E="",w="";const C=d/h*100;var N;E="",w="","percent"==(N=g)?w="%":"dollar"==N&&(E="$"),function(e){"horizontal"==e?(k={maxWidth:c+"px",height:i+"px"},y={height:i+"px",width:C+"%"},v={maxWidth:c+"px"},x&&(y.width="0")):(k={width:i+"px",maxHeight:c+"px"},y={width:i+"px",height:C+"%"},v={maxHeight:c+"px"},x&&(y.height="0"))}(n);const V=x?0:d,$=l.useBlockProps.save({className:`ck-line-chart-${n} pct-${C} animate-${x}`});return(0,t.createElement)("div",{...$,"data-progress":`${d}`,"data-goal":`${h}`,"data-type":g},(0,t.createElement)("div",{className:"ck-line-chart--text",style:v},(0,t.createElement)("span",{className:"ck-line-chart--current"},p," ",(0,t.createElement)("span",{className:"value"},E,(0,t.createElement)("span",{className:"ck-chart--number"},V),w)," ",m),(0,t.createElement)("span",{className:"ck-line-chart--goal"},u," ",(0,t.createElement)("span",{className:"value"},E,(0,t.createElement)("span",{className:"ck-chart--goal"},function(e){const t=/(\d+)(\d{3})/,a=(e+="").split(".");let l=a[0],r=a.length>1?"."+a[1]:"";for(;t.test(l);)l=l.replace(t,"$1,$2");return l+r}(h)),w)," ",b)),(0,t.createElement)("div",{className:`ck-line-chart--line has-${s}-background-color layout-${n}`,style:k},(0,t.createElement)("span",{className:`has-${o}-background-color  ck-bar`,style:y})))},deprecated:o})}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,a,r,n)=>{if(!a){var o=1/0;for(p=0;p<e.length;p++){for(var[a,r,n]=e[p],s=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(s=!1,n<o&&(o=n));if(s){e.splice(p--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[a,r,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={23:0,887:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[o,s,c]=a,i=0;if(o.some((t=>0!==e[t]))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(c)var p=c(l)}for(t&&t(a);i<o.length;i++)n=o[i],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(p)},a=globalThis.webpackChunkcarkeek_blocks_v2=globalThis.webpackChunkcarkeek_blocks_v2||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[887],(()=>l(251)));r=l.O(r)})();