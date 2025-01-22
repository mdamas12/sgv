import{Q as l}from"./scroll.53a79c4d.js";import{a as d,Q as p}from"./QCard.a48b5fba.js";import{_ as f,J as c,K as g,L as t,f as e,S as n,R as m}from"./index.577d1a64.js";import{Q as v}from"./QForm.2539d410.js";import{Q as y}from"./QPage.42238b80.js";import{a as Q,b}from"./QLayout.0b921bc8.js";import{api as w}from"./axios.3c46386f.js";const _={name:"ForgotPasswordPage",data(){return{email:""}},methods:{async requestResetPassword(){var r,a;try{await w.post("/api/forgot-password",{email:this.email}),this.$q.notify({type:"positive",message:"Enlace de restablecimiento enviado. Revisa tu correo."})}catch(s){this.$q.notify({type:"negative",message:((a=(r=s.response)==null?void 0:r.data)==null?void 0:a.message)||"Error al enviar el enlace."})}}}};function P(r,a,s,h,i,u){return c(),g(Q,{view:"hHh lpR fFf"},{default:t(()=>[e(b,null,{default:t(()=>[e(y,{class:"q-pa-md flex flex-center"},{default:t(()=>[e(d,{style:{width:"400px"}},{default:t(()=>[e(l,null,{default:t(()=>a[2]||(a[2]=[n("div",{class:"text-h6"},"\xBFOlvidaste tu contrase\xF1a?",-1),n("p",null,"Ingresa tu correo para recibir un enlace de restablecimiento.",-1)])),_:1}),e(l,null,{default:t(()=>[e(v,{onSubmit:u.requestResetPassword},{default:t(()=>[e(p,{modelValue:i.email,"onUpdate:modelValue":a[0]||(a[0]=o=>i.email=o),label:"Correo electr\xF3nico",type:"email",rules:[o=>!!o||"El correo es obligatorio"],outlined:""},null,8,["modelValue","rules"]),e(m,{label:"Enviar enlace",type:"submit",color:"primary",class:"q-mt-md full-width"})]),_:1},8,["onSubmit"])]),_:1}),e(l,null,{default:t(()=>[e(m,{flat:"",label:"Volver al inicio de sesi\xF3n",onClick:a[1]||(a[1]=o=>r.$router.push("/login")),color:"primary"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var E=f(_,[["render",P]]);export{E as default};
