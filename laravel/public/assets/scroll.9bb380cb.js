import{k as i,c as s,h as c,l as a,V as d,W as r}from"./index.47afc6b5.js";var w=i({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:o}){const e=s(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>c(t.tag,{class:e.value},a(o.default))}});const p={dark:{type:Boolean,default:null}};function h(t,o){return s(()=>t.dark===null?o.dark.isActive:t.dark)}const m=[Element,String],u=[null,document,document.body,document.scrollingElement,document.documentElement];function g(t,o){let e=d(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return u.includes(e)?window:e}function v(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function y(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let n;function S(){if(n!==void 0)return n;const t=document.createElement("p"),o=document.createElement("div");r(t,{width:"100%",height:"200px"}),r(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let l=t.offsetWidth;return e===l&&(l=o.clientWidth),o.remove(),n=e-l,n}function E(t,o=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:o?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{w as Q,h as a,v as b,g as c,S as d,y as g,E as h,m as s,p as u};
