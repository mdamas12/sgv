import{k as ee,c as m,h as x,l as be,i as Oe,m as I,r as T,w,n as Ee,p as Je,q as xe,g as Qe,t as Ze,u as U,v as et,x as tt,y as K,z as de,A as $e,B as ce,C as pe,D as fe,E as at,o as rt,G as Se,H as nt,I as Be,d as W,_ as X,J as Q,K as F,L as o,f as u,Q as lt,M as Z,N as _,O as ye,P as G,R as Le,S as ut,U as ve}from"./index.577d1a64.js";import{u as ot,a as it,Q as st}from"./scroll.53a79c4d.js";import{Q as dt,a as ct,b as ft}from"./QLayout.0b921bc8.js";import{c as vt,u as mt,a as ht,b as pt,d as yt,e as bt,f as J,g as gt,Q as B,h as $,i as M,j as te}from"./QItem.888c16bb.js";import{api as wt}from"./axios.3c46386f.js";var kt=ee({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const i=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>x("div",{class:i.value},be(a.default))}}),_t=ee({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const i=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:i.value,role:"toolbar"},be(a.default))}}),qt=ee({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:i}){const{proxy:{$q:h}}=Qe(),t=Oe(xe,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const n=T(parseInt(e.heightHint,10)),s=T(!0),p=m(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||h.platform.is.ios&&t.isContainer.value===!0),y=m(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return s.value===!0?n.value:0;const d=n.value-t.scroll.value.position;return d>0?d:0}),c=m(()=>e.modelValue!==!0||p.value===!0&&s.value!==!0),l=m(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),S=m(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=m(()=>{const d=t.rows.value.top,D={};return d[0]==="l"&&t.left.space===!0&&(D[h.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(D[h.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),D});function b(d,D){t.update("header",d,D)}function v(d,D){d.value!==D&&(d.value=D)}function O({height:d}){v(n,d),b("size",d)}function q(d){l.value===!0&&v(s,!0),i("focusin",d)}w(()=>e.modelValue,d=>{b("space",d),v(s,!0),t.animate()}),w(y,d=>{b("offset",d)}),w(()=>e.reveal,d=>{d===!1&&v(s,e.modelValue)}),w(s,d=>{t.animate(),i("reveal",d)}),w(t.scroll,d=>{e.reveal===!0&&v(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&b("size",n.value),b("space",e.modelValue),b("offset",y.value),Ee(()=>{t.instances.header===g&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const d=Je(a.default,[]);return e.elevated===!0&&d.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(x(dt,{debounce:0,onResize:O})),x("header",{class:S.value,style:k.value,onFocusin:q},d)}}});const ge={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys(ge);ge.all=!0;function Me(e){const a={};for(const i of Ct)e[i]===!0&&(a[i]=!0);return Object.keys(a).length===0?ge:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const $t=["INPUT","TEXTAREA"];function Te(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&$t.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function me(e,a,i){const h=pe(e);let t,n=h.left-a.event.x,s=h.top-a.event.y,p=Math.abs(n),y=Math.abs(s);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?t=n<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",p>y&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.down===!0&&s>0?(t="down",p>y&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.left===!0&&n<0?(t="left",p<y&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&n>0&&(t="right",p<y&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&i===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,l=!0,t==="left"||t==="right"?(h.left-=n,p=0,n=0):(h.top-=s,y=0,s=0)}return{synthetic:l,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:h,direction:t,isFirst:a.event.isFirst,isFinal:i===!0,duration:Date.now()-a.event.time,distance:{x:p,y},offset:{x:n,y:s},delta:{x:h.left-a.event.lastX,y:h.top-a.event.lastY}}}}let St=0;var he=Ze({name:"touch-pan",beforeMount(e,{value:a,modifiers:i}){if(i.mouse!==!0&&U.has.touch!==!0)return;function h(n,s){i.mouse===!0&&s===!0?at(n):(i.stop===!0&&ce(n),i.prevent===!0&&$e(n))}const t={uid:"qvtp_"+St++,handler:a,modifiers:i,direction:Me(i),noop:et,mouseStart(n){Te(n,t)&&tt(n)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Te(n,t)){const s=n.target;K(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(U.is.firefox===!0&&de(e,!0),t.lastEvt=n,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&$e(c),n.cancelBubble===!0&&ce(c),Object.assign(c,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:c}}ce(n)}const{left:p,top:y}=pe(n);t.event={x:p,y,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:p,lastY:y}},move(n){if(t.event===void 0)return;const s=pe(n),p=s.left-t.event.x,y=s.top-t.event.y;if(p===0&&y===0)return;t.lastEvt=n;const c=t.event.mouse===!0,l=()=>{h(n,c);let b;i.preserveCursor!==!0&&i.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),vt(),t.styleCleanup=v=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),c===!0){const O=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{O(),v()},50):O()}else v!==void 0&&v()}};if(t.event.detected===!0){t.event.isFirst!==!0&&h(n,t.event.mouse);const{payload:b,synthetic:v}=me(n,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=v===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(n);return}const S=Math.abs(p),k=Math.abs(y);S!==k&&(t.direction.horizontal===!0&&S>k||t.direction.vertical===!0&&S<k||t.direction.up===!0&&S<k&&y<0||t.direction.down===!0&&S<k&&y>0||t.direction.left===!0&&S>k&&p<0||t.direction.right===!0&&S>k&&p>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(fe(t,"temp"),U.is.firefox===!0&&de(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(n===void 0?t.lastEvt:n,t).payload);const{payload:p}=me(n===void 0?t.lastEvt:n,t,!0),y=()=>{t.handler(p)};t.styleCleanup!==void 0?t.styleCleanup(y):y()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const n=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";K(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}U.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const i=e.__qtouchpan;i!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&i.end(),i.handler=a.value),i.direction=Me(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),fe(a,"main"),fe(a,"temp"),U.is.firefox===!0&&de(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});const De=150;var Bt=ee({name:"QDrawer",inheritAttrs:!1,props:{...mt,...ot,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ht,"onLayout","miniState"],setup(e,{slots:a,emit:i,attrs:h}){const t=Qe(),{proxy:{$q:n}}=t,s=it(e,n),{preventBodyScroll:p}=gt(),{registerTimeout:y,removeTimeout:c}=pt(),l=Oe(xe,I);if(l===I)return console.error("QDrawer needs to be child of QLayout"),I;let S,k=null,b;const v=T(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),O=m(()=>e.mini===!0&&v.value!==!0),q=m(()=>O.value===!0?e.miniWidth:e.width),g=T(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),d=m(()=>e.persistent!==!0&&(v.value===!0||Pe.value===!0));function D(r,f){if(Ve(),r!==!1&&l.animate(),L(0),v.value===!0){const C=l.instances[Y.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),V(1),l.isContainer.value!==!0&&p(!0)}else V(0),r!==!1&&oe(!1);y(()=>{r!==!1&&oe(!0),f!==!0&&i("show",r)},De)}function we(r,f){ze(),r!==!1&&l.animate(),V(0),L(P.value*q.value),ie(),f!==!0?y(()=>{i("hide",r)},De):c()}const{show:ae,hide:H}=yt({showing:g,hideOnRouteChange:d,handleShow:D,handleHide:we}),{addToHistory:Ve,removeFromHistory:ze}=bt(g,H,d),R={belowBreakpoint:v,hide:H},E=m(()=>e.side==="right"),P=m(()=>(n.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),ke=T(0),A=T(!1),re=T(!1),_e=T(q.value*P.value),Y=m(()=>E.value===!0?"left":"right"),ne=m(()=>g.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),le=m(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(E.value?"R":"L")!==-1||n.platform.is.ios===!0&&l.isContainer.value===!0),N=m(()=>e.overlay===!1&&g.value===!0&&v.value===!1),Pe=m(()=>e.overlay===!0&&g.value===!0&&v.value===!1),Ae=m(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&A.value===!1?" hidden":"")),Ie=m(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),qe=m(()=>E.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Fe=m(()=>E.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),He=m(()=>{const r={};return l.header.space===!0&&qe.value===!1&&(le.value===!0?r.top=`${l.header.offset}px`:l.header.space===!0&&(r.top=`${l.header.size}px`)),l.footer.space===!0&&Fe.value===!1&&(le.value===!0?r.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(r.bottom=`${l.footer.size}px`)),r}),Ne=m(()=>{const r={width:`${q.value}px`,transform:`translateX(${_e.value}px)`};return v.value===!0?r:Object.assign(r,He.value)}),Ue=m(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),We=m(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${O.value===!0?"mini":"standard"}`+(le.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(qe.value===!0?" q-drawer--top-padding":""))),Xe=m(()=>{const r=n.lang.rtl===!0?e.side:Y.value;return[[he,Ke,void 0,{[r]:!0,mouse:!0}]]}),Re=m(()=>{const r=n.lang.rtl===!0?Y.value:e.side;return[[he,Ce,void 0,{[r]:!0,mouse:!0}]]}),Ye=m(()=>{const r=n.lang.rtl===!0?Y.value:e.side;return[[he,Ce,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){Ge(v,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}w(v,r=>{r===!0?(S=g.value,g.value===!0&&H(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(g.value===!0?(L(0),V(0),ie()):ae(!1))}),w(()=>e.side,(r,f)=>{l.instances[f]===R&&(l.instances[f]=void 0,l[f].space=!1,l[f].offset=0),l.instances[r]=R,l[r].size=q.value,l[r].space=N.value,l[r].offset=ne.value}),w(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),w(()=>e.behavior+e.breakpoint,ue),w(l.isContainer,r=>{g.value===!0&&p(r!==!0),r===!0&&ue()}),w(l.scrollbarWidth,()=>{L(g.value===!0?0:void 0)}),w(ne,r=>{z("offset",r)}),w(N,r=>{i("onLayout",r),z("space",r)}),w(E,()=>{L()}),w(q,r=>{L(),se(e.miniToOverlay,r)}),w(()=>e.miniToOverlay,r=>{se(r,q.value)}),w(()=>n.lang.rtl,()=>{L()}),w(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(je(),l.animate())}),w(O,r=>{i("miniState",r)});function L(r){r===void 0?Se(()=>{r=g.value===!0?0:q.value,L(P.value*r)}):(l.isContainer.value===!0&&E.value===!0&&(v.value===!0||Math.abs(r)===q.value)&&(r+=P.value*l.scrollbarWidth.value),_e.value=r)}function V(r){ke.value=r}function oe(r){const f=r===!0?"remove":l.isContainer.value!==!0?"add":"";f!==""&&document.body.classList[f]("q-body--drawer-toggle")}function je(){k!==null&&clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,k=setTimeout(()=>{k=null,re.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ke(r){if(g.value!==!1)return;const f=q.value,C=J(r.distance.x,0,f);if(r.isFinal===!0){C>=Math.min(75,f)===!0?ae():(l.animate(),V(0),L(P.value*f)),A.value=!1;return}L((n.lang.rtl===!0?E.value!==!0:E.value)?Math.max(f-C,0):Math.min(0,C-f)),V(J(C/f,0,1)),r.isFirst===!0&&(A.value=!0)}function Ce(r){if(g.value!==!0)return;const f=q.value,C=r.direction===e.side,j=(n.lang.rtl===!0?C!==!0:C)?J(r.distance.x,0,f):0;if(r.isFinal===!0){Math.abs(j)<Math.min(75,f)===!0?(l.animate(),V(1),L(0)):H(),A.value=!1;return}L(P.value*j),V(J(1-j/f,0,1)),r.isFirst===!0&&(A.value=!0)}function ie(){p(!1),oe(!0)}function z(r,f){l.update(e.side,r,f)}function Ge(r,f){r.value!==f&&(r.value=f)}function se(r,f){z("size",r===!0?e.miniWidth:f)}return l.instances[e.side]=R,se(e.miniToOverlay,q.value),z("space",N.value),z("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),rt(()=>{i("onLayout",N.value),i("miniState",O.value),S=e.showIfAbove===!0;const r=()=>{(g.value===!0?D:we)(!1,!0)};if(l.totalWidth.value!==0){Se(r);return}b=w(l.totalWidth,()=>{b(),b=void 0,g.value===!1&&e.showIfAbove===!0&&v.value===!1?ae(!1):r()})}),Ee(()=>{b!==void 0&&b(),k!==null&&(clearTimeout(k),k=null),g.value===!0&&ie(),l.instances[e.side]===R&&(l.instances[e.side]=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const r=[];v.value===!0&&(e.noSwipeOpen===!1&&r.push(nt(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Xe.value)),r.push(Be("div",{ref:"backdrop",class:Ae.value,style:Ie.value,"aria-hidden":"true",onClick:H},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Ye.value)));const f=O.value===!0&&a.mini!==void 0,C=[x("div",{...h,key:""+f,class:[Ue.value,h.class]},f===!0?a.mini():be(a.default))];return e.elevated===!0&&g.value===!0&&C.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Be("aside",{ref:"content",class:We.value,style:Ne.value},C,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>Re.value)),x("div",{class:"q-drawer-container"},r)}}});const Lt=W({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Mt(e,a,i,h,t,n){return Q(),F(M,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:o(()=>[e.icon?(Q(),F(B,{key:0,avatar:""},{default:o(()=>[u(lt,{name:e.icon},null,8,["name"])]),_:1})):Z("",!0),u(B,null,{default:o(()=>[u($,null,{default:o(()=>[_(ye(e.title),1)]),_:1}),u($,{caption:""},{default:o(()=>[_(ye(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Tt=X(Lt,[["render",Mt]]);const Dt=[{title:"Sucursales",caption:"quasar.dev",icon:"school",link:"/branches"},{title:"Productos",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Productos",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Stock",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Ventas",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Usuarios",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Soporte",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"}],Ot=W({name:"MainLayout",data(){return{nameUser:""}},components:{EssentialLink:Tt},setup(){const e=T(!1);return{essentialLinks:Dt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Et(e,a,i,h,t,n){return Q(),F(te,null,{default:o(()=>[u(M,{clickable:"",to:"/branches"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[0]||(a[0]=[_("Sucursales")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/categories"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[1]||(a[1]=[_("Categorias")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/products"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[2]||(a[2]=[_("Productos")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/taxes"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[3]||(a[3]=[_("Impuestos")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/sales"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[4]||(a[4]=[_("Ventas")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/equipments"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[5]||(a[5]=[_("Soporte Tecnico")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/users"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[6]||(a[6]=[_("Usuarios")])),_:1})]),_:1})]),_:1})]),_:1})}var xt=X(Ot,[["render",Et]]);const Qt=W({name:"MenuSeller",data(){return{nameUser:""}},setup(){const e=T(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Vt(e,a,i,h,t,n){return Q(),F(te,null,{default:o(()=>[u(M,{clickable:"",to:"/sellers"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[0]||(a[0]=[_("Mis Ventas")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[1]||(a[1]=[_("Perfil")])),_:1})]),_:1})]),_:1})]),_:1})}var zt=X(Qt,[["render",Vt]]);const Pt=W({name:"MenuTechnical",data(){return{nameUser:""}},setup(){const e=T(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function At(e,a,i,h,t,n){return Q(),F(te,null,{default:o(()=>[u(M,{clickable:"",to:"/soport"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[0]||(a[0]=[_("Mis Equipos")])),_:1})]),_:1})]),_:1}),u(M,{clickable:"",to:"/"},{default:o(()=>[u(B,null,{default:o(()=>[u($,null,{default:o(()=>a[1]||(a[1]=[_("Perfil")])),_:1})]),_:1})]),_:1})]),_:1})}var It=X(Pt,[["render",At]]);const Ft=W({name:"MainLayout",data(){return{user:[]}},components:{menuAdministrator:xt,MenuSeller:zt,MenuTechnical:It},mounted(){var a,i;let e="Bearer "+localStorage.getItem("authToken");try{wt.get("/api/user",{headers:{Authorization:e}}).then(h=>{this.user=h.data})}catch(h){this.$q.notify({type:"negative",message:((i=(a=h.response)==null?void 0:a.data)==null?void 0:i.message)||"Error al recibir nombre."})}},setup(){const e=T(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{Logout(){localStorage.removeItem("authToken"),this.$router.push("/login")}}}),Ht={class:"text-h7"},Nt={key:0},Ut={key:1},Wt={key:2};function Xt(e,a,i,h,t,n){const s=G("menuAdministrator"),p=G("MenuSeller"),y=G("MenuTechnical"),c=G("router-view");return Q(),F(ct,{view:"lHh Lpr lFf"},{default:o(()=>[u(qt,{elevated:""},{default:o(()=>[u(_t,null,{default:o(()=>[u(Le,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),u(kt,null,{default:o(()=>a[2]||(a[2]=[_(" Gestion de Stock ")])),_:1}),u(st,null,{default:o(()=>[ut("div",Ht,ye(e.user.name),1),u(Le,{flat:"",label:"Cerrar Sesion",color:"secundary",onClick:a[0]||(a[0]=l=>e.Logout())})]),_:1})]),_:1})]),_:1}),u(Bt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=l=>e.leftDrawerOpen=l),"show-if-above":"",bordered:""},{default:o(()=>[u(te,null,{default:o(()=>[u($,{header:""},{default:o(()=>a[3]||(a[3]=[_(" Menu Dahsboard ")])),_:1}),e.user.role=="administrator"?(Q(),ve("div",Nt,[u(s)])):Z("",!0),e.user.role=="seller"?(Q(),ve("div",Ut,[u(p)])):Z("",!0),e.user.role=="technical"?(Q(),ve("div",Wt,[u(y)])):Z("",!0)]),_:1})]),_:1},8,["modelValue"]),u(ft,{class:"container-custon"},{default:o(()=>[u(c)]),_:1})]),_:1})}var Zt=X(Ft,[["render",Xt]]);export{Zt as default};
