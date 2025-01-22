import{_ as p,J as b,U as g,S as m,f as r,L as d,F as f,R as u,ab as y,O as D}from"./index.20f7f754.js";import{Q as c,a as V}from"./QCard.ea22969e.js";import{Q as B,a as v,b as k,c as C}from"./QCardActions.e14120f1.js";import{Q}from"./scroll.72e4ef0b.js";import{Q as q}from"./QPage.b694af81.js";import{api as h}from"./axios.50e1718e.js";import"./QItem.7a469b01.js";const S={data(){return{searchQuery:"",branch:[],branches:[],branches_list:[],dialogVisible:!1,isEditMode:!1,branchData:{name:"",address:""},columns:[{name:"name",label:"Name",align:"left",field:t=>t.name},{name:"description",label:"Description",align:"left",field:t=>t.description},{name:"Direccion",label:"Address",align:"left",field:t=>t.address},{name:"status",label:"Estado",align:"left",field:t=>t.status==1?"Activo":"Inactivo"},{name:"actions",label:"Actions",align:"center"}],pagination:{rowsPerPage:5}}},computed:{filteredBranches(){return this.branches.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))}},methods:{loadBranches(){var e,n;let t="Bearer "+localStorage.getItem("authToken");try{h.get("/api/branches/",{headers:{Authorization:t}}).then(s=>{this.branches_list=s.data.data})}catch(s){this.$q.notify({type:"negative",message:((n=(e=s.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al recibir nombre."})}},openCreateDialog(){this.isEditMode=!1,this.branchData={name:"",address:""},this.dialogVisible=!0},editBranch(t){this.branch=t,this.isEditMode=!0,this.branchData={...t},this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1},saveBranch(t){var s,a,i,l;let e="Bearer "+localStorage.getItem("authToken"),n={name:this.branchData.name,description:this.branchData.description,address:this.branchData.address,phone:this.branchData.phone,email:this.branchData.email,status:1};if(this.isEditMode)try{h.put("/api/branches/"+this.branchData.id,n,{headers:{Authorization:e}}).then(o=>{this.loadBranches()})}catch(o){this.$q.notify({type:"negative",message:((a=(s=o.response)==null?void 0:s.data)==null?void 0:a.message)||"Error al Actualizar Sucursal"})}else try{h.post("/api/branches/",n,{headers:{Authorization:e}}).then(o=>{this.loadBranches()})}catch(o){this.$q.notify({type:"negative",message:((l=(i=o.response)==null?void 0:i.data)==null?void 0:l.message)||"Error al Actualizar Sucursal"})}this.closeDialog()},deleteBranch(t){var n,s;let e="Bearer "+localStorage.getItem("authToken");try{h.delete("/api/branches/"+t.id,{headers:{Authorization:e}}).then(a=>{const i=this.branches_list.findIndex(l=>l.id===t.id);i!==-1&&this.branches_list.splice(i,1),this.$q.notify({type:"positive",message:"Sucursal ha sido eliminada"})})}catch(a){this.$q.notify({type:"negative",message:((s=(n=a.response)==null?void 0:n.data)==null?void 0:s.message)||"Error al Actualizar Sucursal"})}},searchBranch(){var e,n;let t="Bearer "+localStorage.getItem("authToken");try{h.get("/api/branches/"+this.searchQuery,{headers:{Authorization:t}}).then(s=>{this.branches_list=[],this.branches_list=s.data.data})}catch(s){this.$q.notify({type:"negative",message:((n=(e=s.response)==null?void 0:e.data)==null?void 0:n.message)||"Error al Actualizar Sucursal"})}}},mounted(){this.loadBranches()}},E={class:"text-h6"};function w(t,e,n,s,a,i){return b(),g(f,null,[e[9]||(e[9]=m("h5",{class:"q-ml-md"},"Sucursales",-1)),r(q,{class:"custon-page"},{default:d(()=>[r(u,{onClick:i.openCreateDialog,label:"Nueva Sucursal",color:"primary",class:"q-mb-md"},null,8,["onClick"]),r(c,{modelValue:a.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=l=>a.searchQuery=l),label:"Buscar Sucursal",debounce:"300",class:"q-mb-md",onKeydown:e[1]||(e[1]=y(l=>i.searchBranch(),["enter"]))},null,8,["modelValue"]),r(B,{rows:a.branches_list,columns:a.columns,"row-key":"id",pagination:a.pagination,onRequest:i.loadBranches,"rows-per-page-options":[5,10,15]},{"body-cell-actions":d(l=>[r(v,{props:l},{default:d(()=>[r(u,{flat:"",label:"Edit",color:"primary",onClick:o=>i.editBranch(l.row)},null,8,["onClick"]),r(u,{flat:"",label:"Delete",color:"negative",onClick:o=>i.deleteBranch(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),r(k,{modelValue:a.dialogVisible,"onUpdate:modelValue":e[8]||(e[8]=l=>a.dialogVisible=l)},{default:d(()=>[r(V,null,{default:d(()=>[r(Q,null,{default:d(()=>[m("div",E,D(a.isEditMode?"Edit Branch":"Create Branch"),1),r(c,{modelValue:a.branchData.name,"onUpdate:modelValue":e[2]||(e[2]=l=>a.branchData.name=l),label:"Nombre",required:""},null,8,["modelValue"]),r(c,{modelValue:a.branchData.description,"onUpdate:modelValue":e[3]||(e[3]=l=>a.branchData.description=l),label:"Descripcion",required:""},null,8,["modelValue"]),r(c,{modelValue:a.branchData.address,"onUpdate:modelValue":e[4]||(e[4]=l=>a.branchData.address=l),label:"Direccion",required:""},null,8,["modelValue"]),r(c,{modelValue:a.branchData.phone,"onUpdate:modelValue":e[5]||(e[5]=l=>a.branchData.phone=l),label:"Telefono",required:""},null,8,["modelValue"]),r(c,{modelValue:a.branchData.email,"onUpdate:modelValue":e[6]||(e[6]=l=>a.branchData.email=l),label:"Email",required:""},null,8,["modelValue"])]),_:1}),r(C,null,{default:d(()=>[r(u,{flat:"",label:"Cancel",onClick:i.closeDialog},null,8,["onClick"]),r(u,{flat:"",label:"Save",color:"primary",onClick:e[7]||(e[7]=l=>i.saveBranch(t.row))})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var M=p(S,[["render",w]]);export{M as default};
