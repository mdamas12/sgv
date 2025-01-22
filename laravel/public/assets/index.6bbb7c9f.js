import{_ as E,J as D,U as V,S as p,f as i,L as n,F as v,R as r,ab as k,O as C}from"./index.c77837c0.js";import{Q as u,a as g}from"./QCard.a043643f.js";import{Q as y,a as b,b as h,c as f}from"./QCardActions.31878330.js";import{Q as w,a as T}from"./QPopupProxy.0530e8c6.js";import{Q as q}from"./scroll.78a5b6fd.js";import{Q as _}from"./QPage.e94278a4.js";import{api as m}from"./axios.cab0eb59.js";import"./QItem.868ac3c9.js";const S={data(){return{token:"Bearer "+localStorage.getItem("authToken"),equipments_list:[],EquipmentData:[],dialogVisible:!1,isEditMode:!1,DialogTechnical:!1,diagolo_diagnostic:!1,diagolo_report:!1,TechnicalList:[],searchQuery:"",selectedDate:"",asign:"",diagnostic:"",report:"",columns:[{name:"date",label:"Fecha",align:"left",field:t=>t.date},{name:"name",label:"Name",align:"left",field:t=>t.name},{name:"code",label:"codigo",align:"left",field:t=>t.code},{name:"description",label:"Description",align:"left",field:t=>t.description},{name:"user_id",label:"Asignado A",align:"left",field:t=>t.user?t.user.name:""},{name:"diagnostic",label:"diagnostico ",align:"left",field:t=>t.diagnostic},{name:"report",label:"Reporte ",align:"left",field:t=>t.report},{name:"status",label:"Estado",align:"left",field:t=>t.status},{name:"actions",label:"Actions",align:"center"}],columns_technical:[{name:"name",label:"Nombre",align:"left",field:t=>t.name},{name:"email",label:"Email",align:"left",field:t=>t.email},,{name:"actions",label:"Actiones",align:"center"}],pagination:{rowsPerPage:5}}},computed:{},methods:{openDatePicker(){this.$refs.datePopup.show()},closeDatePicker(){this.$refs.datePopup.hide()},loadEquipment(){var t,e;try{m.get("/api/equipments/all",{headers:{Authorization:this.token}}).then(o=>{this.equipments_list=o.data.data})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al recibir Equipos."})}},openCreateDialog(){this.isEditMode=!1,this.EquipmentData={},this.dialogVisible=!0,this.asign="toSave"},saveEquipment(){var o,d;let t=this.EquipmentData.user_id?"assigned":"pending",e={date:this.selectedDate,name:this.EquipmentData.name,code:this.EquipmentData.code,description:this.EquipmentData.description,user_id:this.EquipmentData.user_id,status:t};try{m.post("/api/equipments/create",e,{headers:{Authorization:this.token}}).then(a=>{this.$q.notify({type:"positive",message:"Soporte tecnico creado"}),this.loadEquipment(),this.dialogVisible=!1})}catch(a){this.$q.notify({type:"negative",message:((d=(o=a.response)==null?void 0:o.data)==null?void 0:d.message)||"Error al obtener clientes"})}},Asignar(){},deleteEquipment(){},StatusbyEquipment(){},OpenSearchTechnical(){this.loadTechnical(),this.DialogTechnical=!0},OpenSearchTechnicalAsign(t){this.equipment_id=t.id,this.loadTechnical(),this.DialogTechnical=!0},loadTechnical(){var t,e;try{m.get("/api/users/get-technical",{headers:{Authorization:this.token}}).then(o=>{this.TechnicalList=o.data.data})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},SelectTechnical(t){var e,o;if(this.asign=="toSave")this.EquipmentData.user_id=t.id,this.EquipmentData.technical=t.name;else try{let d={user_id:t.id};m.put("/api/equipments/asign/"+this.equipment_id,d,{headers:{Authorization:this.token}}).then(a=>{this.loadEquipment(),this.$q.notify({type:"primary",message:"Servicio Asignado"})})}catch(d){this.$q.notify({type:"negative",message:((o=(e=d.response)==null?void 0:e.data)==null?void 0:o.message)||"Error al obtener clientes"})}this.DialogTechnical=!1},DiagnosticEquipment(t){this.equipment_id=t.id,this.diagolo_diagnostic=!0},saveDiagnostic(){var t,e;try{let o={diagnostic:this.diagnostic};m.put("/api/equipments/diagnostic/"+this.equipment_id,o,{headers:{Authorization:this.token}}).then(d=>{this.loadEquipment(),this.$q.notify({type:"primary",message:"Diagnostico procesado"}),this.asign="",this.diagolo_diagnostic=!1})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al obtener clientes"})}},ReportEquipment(t){this.equipment_id=t.id,this.diagolo_report=!0},saveReport(){var t,e;try{let o={report:this.report};m.put("/api/equipments/report/"+this.equipment_id,o,{headers:{Authorization:this.token}}).then(d=>{this.loadEquipment(),this.$q.notify({type:"primary",message:"reporte procesado"}),this.diagolo_report=!1})}catch(o){this.$q.notify({type:"negative",message:((e=(t=o.response)==null?void 0:t.data)==null?void 0:e.message)||"Error al guardar reporte"})}},deleteEquipment(t){var e,o;try{m.delete("/api/equipments/delete/"+t.id,{headers:{Authorization:this.token}}).then(d=>{this.loadEquipment(),this.$q.notify({type:"positive",message:"Soporte tecnico Eliminado"})})}catch(d){this.$q.notify({type:"negative",message:((o=(e=d.response)==null?void 0:e.data)==null?void 0:o.message)||"Error al eliminar soporte"})}}},mounted(){this.loadEquipment()}},Q={class:"text-h6"},A={class:"q-pa-md"},x={class:"q-pa-md flex row"};function U(t,e,o,d,a,s){return D(),V(v,null,[e[23]||(e[23]=p("h5",{class:"q-ml-md"},"Soporte Tecnico",-1)),i(_,{class:"custon-page"},{default:n(()=>[i(r,{onClick:s.openCreateDialog,label:"Nuevo Equipo",color:"primary",class:"q-mb-md"},null,8,["onClick"]),i(u,{modelValue:a.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=l=>a.searchQuery=l),label:"Buscar Equipo",debounce:"300",class:"q-mb-md",onKeydown:e[1]||(e[1]=k(l=>t.searchBranch(),["enter"]))},null,8,["modelValue"]),i(y,{rows:a.equipments_list,columns:a.columns,"row-key":"id",pagination:a.pagination,onRequest:s.loadEquipment,"rows-per-page-options":[5,10,15]},{"body-cell-actions":n(l=>[i(b,{props:l},{default:n(()=>[i(r,{flat:"",label:"Asignar",color:"grey",onClick:c=>s.OpenSearchTechnicalAsign(l.row)},null,8,["onClick"]),i(r,{flat:"",label:"Diagnostico",color:"green",onClick:c=>s.DiagnosticEquipment(l.row)},null,8,["onClick"]),i(r,{flat:"",label:"Completar",color:"blue",onClick:c=>s.ReportEquipment(l.row)},null,8,["onClick"]),i(r,{flat:"",label:"Eliminar",color:"red",onClick:c=>s.deleteEquipment(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),i(h,{modelValue:a.dialogVisible,"onUpdate:modelValue":e[11]||(e[11]=l=>a.dialogVisible=l)},{default:n(()=>[i(g,{style:{width:"80%",height:"80%"}},{default:n(()=>[i(q,null,{default:n(()=>[p("div",Q,C(a.isEditMode?"Editar Soporte":"Crear Soporte Tecnico"),1),p("div",A,[i(u,{modelValue:a.selectedDate,"onUpdate:modelValue":e[2]||(e[2]=l=>a.selectedDate=l),label:"Selecciona una fecha",readonly:"",outlined:"",class:"q-mb-md"},{append:n(()=>[i(r,{flat:"",round:"",icon:"event",onClick:s.openDatePicker},null,8,["onClick"])]),_:1},8,["modelValue"]),i(w,{ref:"datePopup","transition-show":"scale","transition-hide":"scale"},{default:n(()=>[i(T,{modelValue:a.selectedDate,"onUpdate:modelValue":e[3]||(e[3]=l=>a.selectedDate=l),mask:"DD-MM-YYYY",color:"primary",onInput:s.closeDatePicker},null,8,["modelValue","onInput"])]),_:1},512)]),i(u,{modelValue:a.EquipmentData.name,"onUpdate:modelValue":e[4]||(e[4]=l=>a.EquipmentData.name=l),label:"Nombre",required:""},null,8,["modelValue"]),i(u,{modelValue:a.EquipmentData.code,"onUpdate:modelValue":e[5]||(e[5]=l=>a.EquipmentData.code=l),label:"codigo",required:""},null,8,["modelValue"]),i(u,{modelValue:a.EquipmentData.description,"onUpdate:modelValue":e[6]||(e[6]=l=>a.EquipmentData.description=l),label:"Descripcion",required:""},null,8,["modelValue"]),p("div",x,[i(u,{readonly:"",modelValue:a.EquipmentData.technical,"onUpdate:modelValue":e[7]||(e[7]=l=>a.EquipmentData.technical=l),label:"Tecnico",class:"q-mr-md col-8"},null,8,["modelValue"]),i(r,{label:"Seleccionar",color:"primary",class:"q-mr-md col-3",onClick:e[8]||(e[8]=l=>s.OpenSearchTechnical())})])]),_:1}),i(f,null,{default:n(()=>[i(r,{flat:"",label:"Cancel",onClick:e[9]||(e[9]=l=>{a.dialogVisible=!1})}),i(r,{flat:"",label:"Guardar",color:"primary",onClick:e[10]||(e[10]=l=>s.saveEquipment())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(h,{modelValue:a.DialogTechnical,"onUpdate:modelValue":e[12]||(e[12]=l=>a.DialogTechnical=l)},{default:n(()=>[i(g,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:n(()=>[i(y,{rows:a.TechnicalList,columns:a.columns_technical,"row-key":"id",pagination:a.pagination,onRequest:s.loadTechnical,"rows-per-page-options":[5,10,15]},{"body-cell-actions":n(l=>[i(b,{props:l},{default:n(()=>[i(r,{flat:"",label:"Seleccionar",color:"primary",onClick:c=>s.SelectTechnical(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"])]),_:1})]),_:1},8,["modelValue"]),i(h,{modelValue:a.diagolo_diagnostic,"onUpdate:modelValue":e[16]||(e[16]=l=>a.diagolo_diagnostic=l)},{default:n(()=>[i(g,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:n(()=>[i(q,null,{default:n(()=>[e[21]||(e[21]=p("div",{class:"text-h6"},"Disagnostico del equipo",-1)),i(u,{type:"text",modelValue:a.diagnostic,"onUpdate:modelValue":e[13]||(e[13]=l=>a.diagnostic=l),label:"Diagnostico",required:""},null,8,["modelValue"])]),_:1}),i(f,null,{default:n(()=>[i(r,{flat:"",label:"Cancel",onClick:e[14]||(e[14]=l=>{a.diagolo_diagnostic=!1})}),i(r,{flat:"",label:"Guardar",color:"primary",onClick:e[15]||(e[15]=l=>s.saveDiagnostic())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(h,{modelValue:a.diagolo_report,"onUpdate:modelValue":e[20]||(e[20]=l=>a.diagolo_report=l)},{default:n(()=>[i(g,{style:{width:"70%","max-width":"90vw",height:"auto"}},{default:n(()=>[i(q,null,{default:n(()=>[e[22]||(e[22]=p("div",{class:"text-h6"},"Reporte del equipo",-1)),i(u,{type:"text",modelValue:a.report,"onUpdate:modelValue":e[17]||(e[17]=l=>a.report=l),label:"Diagnostico",required:""},null,8,["modelValue"])]),_:1}),i(f,null,{default:n(()=>[i(r,{flat:"",label:"Cancel",onClick:e[18]||(e[18]=l=>{a.diagolo_report=!1})}),i(r,{flat:"",label:"Guardar",color:"primary",onClick:e[19]||(e[19]=l=>s.saveReport())})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var L=E(S,[["render",U]]);export{L as default};
