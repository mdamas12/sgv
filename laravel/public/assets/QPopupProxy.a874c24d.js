import{c as M,aE as Ge,aF as qt,k as Ke,r as F,w as te,h,ai as oe,l as kt,g as et,az as Ot,G as ze,R as N,af as It}from"./index.a2d46050.js";import{u as jt,a as Tt}from"./scroll.4b111f6a.js";import{g as Vt,l as $t,k as Ft}from"./QCard.9f1b9e44.js";import{p as Y}from"./QItem.ae415059.js";import{u as pt,f as Et,b as At,g as Nt}from"./QCardActions.59b839eb.js";function Zt(){let e=Object.create(null);return{getCache:(r,i)=>e[r]===void 0?e[r]=typeof i=="function"?i():i:e[r],setCache(r,i){e[r]=i},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const R=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Pt(e,r,i){return Object.prototype.toString.call(e)==="[object Date]"&&(i=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),zt(Ie(e,r,i))}function Le(e,r,i){return at(Rt(e,r,i))}function Bt(e){return Qt(e)===0}function me(e,r){return r<=6?31:r<=11||Bt(e)?30:29}function Qt(e){const r=R.length;let i=R[0],c,d,o,D,l;if(e<i||e>=R[r-1])throw new Error("Invalid Jalaali year "+e);for(l=1;l<r&&(c=R[l],d=c-i,!(e<c));l+=1)i=c;return D=e-i,d-D<6&&(D=D-d+x(d+4,33)*33),o=V(V(D+1,33)-1,4),o===-1&&(o=4),o}function tt(e,r){const i=R.length,c=e+621;let d=-14,o=R[0],D,l,m,C,v;if(e<o||e>=R[i-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<i&&(D=R[v],l=D-o,!(e<D));v+=1)d=d+x(l,33)*8+x(V(l,33),4),o=D;C=e-o,d=d+x(C,33)*8+x(V(C,33)+3,4),V(l,33)===4&&l-C===4&&(d+=1);const w=x(c,4)-x((x(c,100)+1)*3,4)-150,p=20+d-w;return r||(l-C<6&&(C=C-l+x(l+4,33)*33),m=V(V(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:c,march:p}}function Rt(e,r,i){const c=tt(e,!0);return Ie(c.gy,3,c.march)+(r-1)*31-x(r,7)*(r-7)+i-1}function zt(e){const r=at(e).gy;let i=r-621,c,d,o;const D=tt(i,!1),l=Ie(r,3,D.march);if(o=e-l,o>=0){if(o<=185)return d=1+x(o,31),c=V(o,31)+1,{jy:i,jm:d,jd:c};o-=186}else i-=1,o+=179,D.leap===1&&(o+=1);return d=7+x(o,30),c=V(o,30)+1,{jy:i,jm:d,jd:c}}function Ie(e,r,i){let c=x((e+x(r-8,6)+100100)*1461,4)+x(153*V(r+9,12)+2,5)+i-34840408;return c=c-x(x(e+100100+x(r-8,6),100)*3,4)+752,c}function at(e){let r=4*e+139361631;r=r+x(x(4*e+183187720,146097)*3,4)*4-3908;const i=x(V(r,1461),4)*5+308,c=x(V(i,153),5)+1,d=V(x(i,153),12)+1;return{gy:x(r,1461)-100100+x(8-d,6),gm:d,gd:c}}function x(e,r){return~~(e/r)}function V(e,r){return e-~~(e/r)*r}const Lt=["gregorian","persian"],Xe={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Lt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Xt=["update:modelValue"];function B(e){return e.year+"/"+Y(e.month)+"/"+Y(e.day)}function Jt(e,r){const i=M(()=>e.disable!==!0&&e.readonly!==!0),c=M(()=>i.value===!0?0:-1),d=M(()=>{const l=[];return e.color!==void 0&&l.push(`bg-${e.color}`),e.textColor!==void 0&&l.push(`text-${e.textColor}`),l.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(l){const m=new Date,C=l===!0?null:0;if(e.calendar==="persian"){const v=Pt(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:i,tabindex:c,headerClass:d,getLocale:o,getCurrentDate:D}}const nt=864e5,Wt=36e5,Oe=6e4,rt="YYYY-MM-DDTHH:mm:ss.SSSZ",Ut=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Gt=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,He={};function Kt(e,r){const i="("+r.days.join("|")+")",c=e+i;if(He[c]!==void 0)return He[c];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",l={};let m=0;const C=e.replace(Gt,w=>{switch(m++,w){case"YY":return l.YY=m,"(-?\\d{1,2})";case"YYYY":return l.YYYY=m,"(-?\\d{1,4})";case"M":return l.M=m,"(\\d{1,2})";case"Mo":return l.M=m++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return l.M=m,"(\\d{2})";case"MMM":return l.MMM=m,D;case"MMMM":return l.MMMM=m,o;case"D":return l.D=m,"(\\d{1,2})";case"Do":return l.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return l.D=m,"(\\d{2})";case"H":return l.H=m,"(\\d{1,2})";case"HH":return l.H=m,"(\\d{2})";case"h":return l.h=m,"(\\d{1,2})";case"hh":return l.h=m,"(\\d{2})";case"m":return l.m=m,"(\\d{1,2})";case"mm":return l.m=m,"(\\d{2})";case"s":return l.s=m,"(\\d{1,2})";case"ss":return l.s=m,"(\\d{2})";case"S":return l.S=m,"(\\d{1})";case"SS":return l.S=m,"(\\d{2})";case"SSS":return l.S=m,"(\\d{3})";case"A":return l.A=m,"(AM|PM)";case"a":return l.a=m,"(am|pm)";case"aa":return l.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return i;case"Q":case"d":case"E":return"(\\d{1})";case"do":return m++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return m++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return m++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return l.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return l.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return l.X=m,"(-?\\d+)";case"x":return l.x=m,"(-?\\d{4,})";default:return m--,w[0]==="["&&(w=w.substring(1,w.length-1)),w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:l,regex:new RegExp("^"+C)};return He[c]=v,v}function ot(e,r){return e!==void 0?e:r!==void 0?r.date:qt.date}function Je(e,r=""){const i=e>0?"-":"+",c=Math.abs(e),d=Math.floor(c/60),o=c%60;return i+Y(d)+r+Y(o)}function ea(e,r,i,c,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=rt);const D=ot(i,Ge.props),l=D.months,m=D.monthsShort,{regex:C,map:v}=Kt(r,D),w=e.match(C);if(w===null)return o;let p="";if(v.X!==void 0||v.x!==void 0){const I=parseInt(w[v.X!==void 0?v.X:v.x],10);if(isNaN(I)===!0||I<0)return o;const j=new Date(I*(v.X!==void 0?1e3:1));o.year=j.getFullYear(),o.month=j.getMonth()+1,o.day=j.getDate(),o.hour=j.getHours(),o.minute=j.getMinutes(),o.second=j.getSeconds(),o.millisecond=j.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(w[v.YYYY],10);else if(v.YY!==void 0){const I=parseInt(w[v.YY],10);o.year=I<0?I:2e3+I}if(v.M!==void 0){if(o.month=parseInt(w[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(w[v.MMM])+1:v.MMMM!==void 0&&(o.month=l.indexOf(w[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(w[v.D],10),o.year===null||o.month===null||o.day<1)return o;const I=c!=="persian"?new Date(o.year,o.month,0).getDate():me(o.year,o.month);if(o.day>I)return o}v.H!==void 0?o.hour=parseInt(w[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(w[v.h],10)%12,(v.A&&w[v.A]==="PM"||v.a&&w[v.a]==="pm"||v.aa&&w[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(w[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(w[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(w[v.S],10)*10**(3-w[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(p=v.Z!==void 0?w[v.Z].replace(":",""):w[v.ZZ],o.timezoneOffset=(p[0]==="+"?-1:1)*(60*p.slice(1,3)+1*p.slice(3,5)))}return o.dateHash=Y(o.year,6)+"/"+Y(o.month)+"/"+Y(o.day),o.timeHash=Y(o.hour)+":"+Y(o.minute)+":"+Y(o.second)+p,o}function Ce(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const i=new Date(r.getFullYear(),0,4);i.setDate(i.getDate()-(i.getDay()+6)%7+3);const c=r.getTimezoneOffset()-i.getTimezoneOffset();r.setHours(r.getHours()-c);const d=(r-i)/(nt*7);return 1+Math.floor(d)}function Z(e,r,i){const c=new Date(e),d=`set${i===!0?"UTC":""}`;switch(r){case"year":case"years":c[`${d}Month`](0);case"month":case"months":c[`${d}Date`](1);case"day":case"days":case"date":c[`${d}Hours`](0);case"hour":case"hours":c[`${d}Minutes`](0);case"minute":case"minutes":c[`${d}Seconds`](0);case"second":case"seconds":c[`${d}Milliseconds`](0)}return c}function fe(e,r,i){return(e.getTime()-e.getTimezoneOffset()*Oe-(r.getTime()-r.getTimezoneOffset()*Oe))/i}function lt(e,r,i="days"){const c=new Date(e),d=new Date(r);switch(i){case"years":case"year":return c.getFullYear()-d.getFullYear();case"months":case"month":return(c.getFullYear()-d.getFullYear())*12+c.getMonth()-d.getMonth();case"days":case"day":case"date":return fe(Z(c,"day"),Z(d,"day"),nt);case"hours":case"hour":return fe(Z(c,"hour"),Z(d,"hour"),Wt);case"minutes":case"minute":return fe(Z(c,"minute"),Z(d,"minute"),Oe);case"seconds":case"second":return fe(Z(c,"second"),Z(d,"second"),1e3)}}function qe(e){return lt(e,Z(e,"year"),"days")+1}function K(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const We={YY(e,r,i){const c=this.YYYY(e,r,i)%100;return c>=0?Y(c):"-"+Y(Math.abs(c))},YYYY(e,r,i){return i!=null?i:e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return K(e.getMonth()+1)},MM(e){return Y(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return K(this.Q(e))},D(e){return e.getDate()},Do(e){return K(e.getDate())},DD(e){return Y(e.getDate())},DDD(e){return qe(e)},DDDo(e){return K(qe(e))},DDDD(e){return Y(qe(e),3)},d(e){return e.getDay()},do(e){return K(e.getDay())},dd(e,r){return r.days[e.getDay()].slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Ce(e)},wo(e){return K(Ce(e))},ww(e){return Y(Ce(e))},H(e){return e.getHours()},HH(e){return Y(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return Y(this.h(e))},m(e){return e.getMinutes()},mm(e){return Y(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return Y(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return Y(Math.floor(e.getMilliseconds()/10))},SSS(e){return Y(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,r,i,c){const d=c==null?e.getTimezoneOffset():c;return Je(d,":")},ZZ(e,r,i,c){const d=c==null?e.getTimezoneOffset():c;return Je(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ta(e,r,i,c,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=rt);const D=ot(i,Ge.props);return r.replace(Ut,(l,m)=>l in We?We[l](o,D,c,d):m===void 0?l:m.split("\\]").join("]"))}const X=20,aa=["Calendar","Years","Months"],Ue=e=>aa.includes(e),ke=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function Q(e){return e.year+"/"+Y(e.month)}var sa=Ke({name:"QDate",props:{...Xe,...Vt,...jt,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Xe.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:ke},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:ke},navigationMaxYearMonth:{type:String,validator:ke},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ue}},emits:[...Xt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:i}){const{proxy:c}=et(),{$q:d}=c,o=Tt(e,d),{getCache:D}=Zt(),{tabindex:l,headerClass:m,getLocale:C,getCurrentDate:v}=Jt(e,d);let w;const p=$t(e),I=Ft(p),j=F(null),S=F(Ae()),H=F(C()),ut=M(()=>Ae()),st=M(()=>C()),A=M(()=>v()),g=F(Ne(S.value,H.value)),T=F(e.defaultView),je=M(()=>d.lang.rtl===!0?"right":"left"),le=F(je.value),he=F(je.value),ge=g.value.year,ue=F(ge-ge%X-(ge<0?X:0)),O=F(null),it=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),z=M(()=>e.color||"primary"),J=M(()=>e.textColor||"white"),se=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ye=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),E=M(()=>ye.value.filter(t=>typeof t=="string").map(t=>be(t,S.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),W=M(()=>{const t=a=>be(a,S.value,H.value);return ye.value.filter(a=>Ot(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ie=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Le(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),Me=M(()=>e.calendar==="persian"?B:(t,a,n)=>ta(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?S.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),ae=M(()=>E.value.length+W.value.reduce((t,a)=>t+1+lt(ie.value(a.to),ie.value(a.from)),0)),Te=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(O.value!==null){const n=O.value.init,u=ie.value(n);return H.value.daysShort[u.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(ae.value===0)return ee;if(ae.value>1)return`${ae.value} ${H.value.pluralDay}`;const t=E.value[0],a=ie.value(t);return isNaN(a.valueOf())===!0?ee:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),ct=M(()=>E.value.concat(W.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),dt=M(()=>E.value.concat(W.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ve=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ae.value===0)return ee;if(ae.value>1){const t=ct.value,a=dt.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return E.value[0].year}),ce=M(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),$e=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),vt=M(()=>{const t=H.value.daysShort,a=$e.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),P=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():me(t.year,t.month)}),ft=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),q=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),k=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),De=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return q.value!==null&&q.value.year>=g.value.year&&(t.year.prev=!1,q.value.year===g.value.year&&q.value.month>=g.value.month&&(t.month.prev=!1)),k.value!==null&&k.value.year<=g.value.year&&(t.year.next=!1,k.value.year===g.value.year&&k.value.month<=g.value.month&&(t.month.next=!1)),t}),de=M(()=>{const t={};return E.value.forEach(a=>{const n=Q(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Fe=M(()=>{const t={};return W.value.forEach(a=>{const n=Q(a.from),u=Q(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===u?a.to.day:void 0,range:a}),n<u){let s;const{year:b,month:f}=a.from,y=f<12?{year:b,month:f+1}:{year:b+1,month:1};for(;(s=Q(y))<=u;)t[s]===void 0&&(t[s]=[]),t[s].push({from:void 0,to:s===u?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ne=M(()=>{if(O.value===null)return;const{init:t,initHash:a,final:n,finalHash:u}=O.value,[s,b]=a<=u?[t,n]:[n,t],f=Q(s),y=Q(b);if(f!==$.value&&y!==$.value)return;const _={};return f===$.value?(_.from=s.day,_.includeFrom=!0):_.from=1,y===$.value?(_.to=b.day,_.includeTo=!0):_.to=P.value,_}),$=M(()=>Q(g.value)),mt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=P.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=P.value;n++){const u=$.value+"/"+Y(n);t[n]=a(u)}return t}),ht=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=P.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=P.value;n++){const u=$.value+"/"+Y(n);t[n]=a(u)===!0&&ft.value(u)}}return t}),gt=M(()=>{let t,a;const{year:n,month:u}=g.value;if(e.calendar!=="persian")t=new Date(n,u-1,1),a=new Date(n,u-1,0).getDate();else{const s=Le(n,u,1);t=new Date(s.gy,s.gm-1,s.gd);let b=u-1,f=n;b===0&&(b=12,f--),a=me(f,b)}return{days:t.getDay()-$e.value-1,endDay:a}}),pe=M(()=>{const t=[],{days:a,endDay:n}=gt.value,u=a<0?a+7:a;if(u<6)for(let f=n-u;f<=n;f++)t.push({i:f,fill:!0});const s=t.length;for(let f=1;f<=P.value;f++){const y={i:f,event:ht.value[f],classes:[]};mt.value[f]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(de.value[$.value]!==void 0&&de.value[$.value].forEach(f=>{const y=s+f-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:z.value,textColor:J.value})}),Fe.value[$.value]!==void 0&&Fe.value[$.value].forEach(f=>{if(f.from!==void 0){const y=s+f.from-1,_=s+(f.to||P.value)-1;for(let re=y;re<=_;re++)Object.assign(t[re],{range:f.range,unelevated:!0,color:z.value,textColor:J.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const y=s+f.to-1;for(let _=s;_<=y;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:z.value,textColor:J.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=s+P.value-1;for(let _=s;_<=y;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:z.value,textColor:J.value})}}),ne.value!==void 0){const f=s+ne.value.from-1,y=s+ne.value.to-1;for(let _=f;_<=y;_++)t[_].color=z.value,t[_].editRange=!0;ne.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ne.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===A.value.year&&g.value.month===A.value.month&&(t[s+A.value.day-1].today=!0);const b=t.length%7;if(b>0){const f=7-b;for(let y=1;y<=f;y++)t.push({i:y,fill:!0})}return t.forEach(f=>{let y="q-date__calendar-item ";f.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(y+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(y+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(y+=` text-${f.color}`)),f.classes=y}),t}),yt=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});te(()=>e.modelValue,t=>{if(w===t)w=0;else{const a=Ne(S.value,H.value);U(a.year,a.month,a)}}),te(T,()=>{j.value!==null&&c.$el.contains(document.activeElement)===!0&&j.value.focus()}),te(()=>g.value.year+"|"+g.value.month,()=>{i("navigation",{year:g.value.year,month:g.value.month})}),te(ut,t=>{Re(t,H.value,"mask"),S.value=t}),te(st,t=>{Re(S.value,t,"locale"),H.value=t});function Ee(){const{year:t,month:a,day:n}=A.value,u={...g.value,year:t,month:a,day:n},s=de.value[Q(u)];(s===void 0||s.includes(u.day)===!1)&&_e(u),we(u.year,u.month)}function Mt(t){Ue(t)===!0&&(T.value=t)}function Dt(t,a){["month","year"].includes(t)&&(t==="month"?Pe:Ye)(a===!0?-1:1)}function we(t,a){T.value="Calendar",U(t,a)}function wt(t,a){if(e.range===!1||!t){O.value=null;return}const n=Object.assign({...g.value},t),u=a!==void 0?Object.assign({...g.value},a):n;O.value={init:n,initHash:B(n),final:u,finalHash:B(u)},we(n.year,n.month)}function Ae(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function be(t,a,n){return ea(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ne(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ze();const u=n[n.length-1],s=be(u.from!==void 0?u.from:u,t,a);return s.dateHash===null?Ze():s}function Ze(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=A.value!==void 0?A.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+Y(a)+"/01"}}function Pe(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),U(a,n),se.value===!0&&ve("month")}function Ye(t){const a=Number(g.value.year)+t;U(a,g.value.month),se.value===!0&&ve("year")}function bt(t){U(t,g.value.month),T.value=e.defaultView==="Years"?"Months":"Calendar",se.value===!0&&ve("year")}function Yt(t){U(g.value.year,t),T.value="Calendar",se.value===!0&&ve("month")}function _t(t,a){const n=de.value[a];(n!==void 0&&n.includes(t.day)===!0?xe:_e)(t)}function L(t){return{year:t.year,month:t.month,day:t.day}}function U(t,a,n){if(q.value!==null&&t<=q.value.year&&((a<q.value.month||t<q.value.year)&&(a=q.value.month),t=q.value.year),k.value!==null&&t>=k.value.year&&((a>k.value.month||t>k.value.year)&&(a=k.value.month),t=k.value.year),n!==void 0){const{hour:s,minute:b,second:f,millisecond:y,timezoneOffset:_,timeHash:re}=n;Object.assign(g.value,{hour:s,minute:b,second:f,millisecond:y,timezoneOffset:_,timeHash:re})}const u=t+"/"+Y(a)+"/01";u!==g.value.dateHash&&(le.value=g.value.dateHash<u==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(he.value=le.value),ze(()=>{ue.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:u})}))}function Be(t,a,n){const u=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;w=u;const{reason:s,details:b}=Qe(a,n);i("update:modelValue",u,s,b)}function ve(t){const a=E.value[0]!==void 0&&E.value[0].dateHash!==null?{...E.value[0]}:{...g.value};ze(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():me(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const u=G(a);w=u;const{details:s}=Qe("",a);i("update:modelValue",u,t,s)})}function Qe(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...L(a.target),from:L(a.from),to:L(a.to)}}:{reason:`${t}-day`,details:L(a)}}function G(t,a,n){return t.from!==void 0?{from:Me.value(t.from,a,n),to:Me.value(t.to,a,n)}:Me.value(t,a,n)}function _e(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=B(t.from),u=B(t.to),s=E.value.filter(f=>f.dateHash<n||f.dateHash>u),b=W.value.filter(({from:f,to:y})=>y.dateHash<n||f.dateHash>u);a=s.concat(b).concat(t).map(f=>G(f))}else{const n=ye.value.slice();n.push(G(t)),a=n}else a=G(t);Be(a,"add",t)}function xe(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(u=>u.from!==void 0?u.from!==n.from&&u.to!==n.to:!0):a=e.modelValue.filter(u=>u!==n),a.length===0&&(a=null)}Be(a,"remove",t)}function Re(t,a,n){const u=E.value.concat(W.value).map(s=>G(s,t,a)).filter(s=>s.from!==void 0?s.from.dateHash!==null&&s.to.dateHash!==null:s.dateHash!==null);i("update:modelValue",(e.multiple===!0?u:u[0])||null,n)}function xt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ve.value,class:"q-date__header-subtitle q-date__header-link "+(T.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...D("vY",{onClick(){T.value="Years"},onKeyup(t){t.keyCode===13&&(T.value="Years")}})},[Ve.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Te.value,class:"q-date__header-title-label q-date__header-link "+(T.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...D("vC",{onClick(){T.value="Calendar"},onKeyup(t){t.keyCode===13&&(T.value="Calendar")}})},[Te.value]))]),e.todayBtn===!0?h(N,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:l.value,onClick:Ee}):null])])}function Se({label:t,type:a,key:n,dir:u,goTo:s,boundaries:b,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ce.value[0],tabindex:l.value,disable:b.prev===!1,...D("go-#"+a,{onClick(){s(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(oe,{name:"q-transition--jump-"+u},()=>h("div",{key:n},[h(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:l.value,...D("view#"+a,{onClick:()=>{T.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ce.value[1],tabindex:l.value,disable:b.next===!1,...D("go+#"+a,{onClick(){s(1)}})})])]}const St={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},Se({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:le.value,goTo:Pe,boundaries:De.value.month,cls:" col"}).concat(Se({label:g.value.year,type:"Years",key:g.value.year,dir:he.value,goTo:Ye,boundaries:De.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},vt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(oe,{name:"q-transition--slide-"+le.value},()=>h("div",{key:$.value,class:"q-date__calendar-days fit"},pe.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:l.value,...D("day#"+t.i,{onClick:()=>{Ht(t.i)},onMouseover:()=>{Ct(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===A.value.year,a=u=>q.value!==null&&g.value.year===q.value.year&&q.value.month>u||k.value!==null&&g.value.year===k.value.year&&k.value.month<u,n=H.value.monthsShort.map((u,s)=>{const b=g.value.month===s+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(N,{class:t===!0&&A.value.month===s+1?"q-date__today":null,flat:b!==!0,label:u,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?J.value:null,tabindex:l.value,disable:a(s+1),...D("month#"+s,{onClick:()=>{Yt(s+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[Se({label:g.value.year,type:"Years",key:g.value.year,dir:he.value,goTo:Ye,boundaries:De.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=ue.value,a=t+X,n=[],u=s=>q.value!==null&&q.value.year>s||k.value!==null&&k.value.year<s;for(let s=t;s<=a;s++){const b=g.value.year===s;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(N,{key:"yr"+s,class:A.value.year===s?"q-date__today":null,flat:!b,label:s,dense:!0,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?J.value:null,tabindex:l.value,disable:u(s),...D("yr#"+s,{onClick:()=>{bt(s)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:ce.value[0],tabindex:l.value,disable:u(t),...D("y-",{onClick:()=>{ue.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:ce.value[1],tabindex:l.value,disable:u(a),...D("y+",{onClick:()=>{ue.value+=X}})})])])}};function Ht(t){const a={...g.value,day:t};if(e.range===!1){_t(a,$.value);return}if(O.value===null){const n=pe.value.find(s=>s.fill!==!0&&s.i===t);if(e.noUnset!==!0&&n.range!==void 0){xe({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){xe(a);return}const u=B(a);O.value={init:a,initHash:u,final:a,finalHash:u},i("rangeStart",L(a))}else{const n=O.value.initHash,u=B(a),s=n<=u?{from:O.value.init,to:a}:{from:a,to:O.value.init};O.value=null,_e(n===u?a:{target:a,...s}),i("rangeEnd",{from:L(s.from),to:L(s.to)})}}function Ct(t){if(O.value!==null){const a={...g.value,day:t};Object.assign(O.value,{final:a,finalHash:B(a)})}}return Object.assign(c,{setToday:Ee,setView:Mt,offsetCalendar:Dt,setCalendarTo:we,setEditingRange:wt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(oe,{name:"q-transition--fade"},St[T.value])])],a=kt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&I(t,"push"),h("div",{class:it.value,...yt.value},[xt(),h("div",{ref:j,class:"q-date__main col column",tabindex:-1},t)])}}}),ia=Ke({name:"QPopupProxy",props:{...pt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:i,attrs:c}){const{proxy:d}=et(),{$q:o}=d,D=F(!1),l=F(null),m=M(()=>parseInt(e.breakpoint,10)),{canShow:C}=Et({showing:D});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const w=F(v()),p=M(()=>w.value==="menu"?{maxHeight:"99vh"}:{});te(()=>v(),S=>{D.value!==!0&&(w.value=S)});function I(S){D.value=!0,i("show",S)}function j(S){D.value=!1,w.value=v(),i("hide",S)}return Object.assign(d,{show(S){C(S)===!0&&l.value.show(S)},hide(S){l.value.hide(S)},toggle(S){l.value.toggle(S)}}),It(d,"currentComponent",()=>({type:w.value,ref:l.value})),()=>{const S={ref:l,...p.value,...c,onShow:I,onHide:j};let H;return w.value==="dialog"?H=At:(H=Nt,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(H,S,r.default)}}});export{ia as Q,sa as a};
