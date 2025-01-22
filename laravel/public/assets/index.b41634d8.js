import{_ as V,J as D,U as w,S as m,f as o,L as s,F as q,R as u,ab as C,O as f}from"./index.21ff1b6f.js";import{Q as d,a as g}from"./QCard.0e8ebcc4.js";import{Q as y,a as S,b as k,d as v,c as h}from"./QCardActions.d1272d0f.js";import{Q as b}from"./scroll.ee318c66.js";import{Q as N}from"./QPage.25587d11.js";import{api as c}from"./axios.0c2b4f81.js";import"./QItem.7d7cb892.js";const U={data(){return{token:"Bearer "+localStorage.getItem("authToken"),categoriesList:[],branchesList:[],categorySelected:[],dataNewStock:[],searchQuery:"",productsList:[],productsStockList:[],product:[],dialogVisible:!1,DialogStock:!1,DialogNewStock:!1,DialogMove:!1,isEditMode:!1,isStockIn:!1,stockData:{},productData:{},columns:[{name:"name",label:"Name",align:"left",field:a=>a.name},{name:"description",label:"Description",align:"left",field:a=>a.description},{name:"sku",label:"sku",align:"left",field:a=>a.sku},{name:"price",label:"Precio",align:"left",field:a=>a.price},{name:"category",label:"Categoria",align:"left",field:a=>a.category.name},{name:"actions",label:"Actions",align:"center"}],columns_stock:[{name:"branch",label:"Sucursal",align:"left",field:a=>a.branch.name},{name:"quantity_available",label:"Cantidad disponible",align:"left",field:a=>a.quantity_available},{name:"minimum_quantity",label:"minim",align:"left",field:a=>a.minimum_quantity},{name:"actions",label:"Actions",align:"center"}],pagination:{rowsPerPage:5}}},computed:{},methods:{loadCategories(){var a,e;try{c.get("/api/categories/",{headers:{Authorization:this.token}}).then(i=>{this.categoriesList=i.data.data.map(n=>({label:n.name,value:n.id}))})}catch(i){this.$q.notify({type:"negative",message:((e=(a=i.response)==null?void 0:a.data)==null?void 0:e.message)||"Error al obtener productos"})}},loadproducts(){var a,e;try{c.get("/api/products/",{headers:{Authorization:this.token}}).then(i=>{this.productsList=i.data.data})}catch(i){this.$q.notify({type:"negative",message:((e=(a=i.response)==null?void 0:a.data)==null?void 0:e.message)||"Error al obtener productos"})}},ShowCreateProduct(){this.isEditMode=!1,this.productData={},this.dialogVisible=!0},editProduct(a){this.product=a,this.isEditMode=!0,this.productData={...a},this.categorySelected={label:a.category.name,value:a.category_id},this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1},saveProduct(){var e,i,n,l;let a={name:this.productData.name,description:this.productData.description,category_id:this.categorySelected.value,sku:this.productData.sku,price:this.productData.price,status:1};if(this.isEditMode)try{c.put("/api/products/update/"+this.product.id,a,{headers:{Authorization:this.token}}).then(r=>{this.$q.notify({type:"positive",message:"Producto Actualizado"}),this.loadproducts()})}catch(r){this.$q.notify({type:"negative",message:((i=(e=r.response)==null?void 0:e.data)==null?void 0:i.message)||"Error al Actualizar Producto"})}else try{c.post("/api/products/new-product/",a,{headers:{Authorization:this.token}}).then(r=>{this.$q.notify({type:"positive",message:"Producto Creado con exito"}),this.loadproducts()})}catch(r){this.$q.notify({type:"negative",message:((l=(n=r.response)==null?void 0:n.data)==null?void 0:l.message)||"Error al Actualizar Producto"})}this.closeDialog()},ShowNewStockDialog(){var a,e;try{c.get("/api/branches/list-nostock/"+this.product.id,{headers:{Authorization:this.token}}).then(i=>{if(i.data.data.length<1){alert("Este producto ya tiene todos los stock");return}this.branchesList=[],this.dataNewStock=[],this.branchesList=i.data.data.map(n=>({label:n.name,value:n.id})),this.DialogNewStock=!0})}catch(i){this.$q.notify({type:"negative",message:((e=(a=i.response)==null?void 0:a.data)==null?void 0:e.message)||"Error al obtener productos"})}},saveStockbyproduct(){var e,i;let a={product_id:this.product.id,branch_id:this.dataNewStock.branch.value,minimum_quantity:this.dataNewStock.minimum_quantity,quantity_available:this.dataNewStock.quantity_available};try{c.post("/api/stock/createstock",a,{headers:{Authorization:this.token}}).then(n=>{this.$q.notify({type:"positive",message:"Stock de producto creado con exito!"}),this.DialogNewStock=!1,this.listStock(this.product)})}catch(n){this.$q.notify({type:"negative",message:((i=(e=n.response)==null?void 0:e.data)==null?void 0:i.message)||"Error al crear stock"})}},listStock(a){var e,i;this.product=a;try{c.get("/api/products/stocks/"+a.id,{headers:{Authorization:this.token}}).then(n=>{this.productsStockList=n.data.data,this.DialogStock=!0,console.log(this.productsStockList)})}catch(n){this.$q.notify({type:"negative",message:((i=(e=n.response)==null?void 0:e.data)==null?void 0:i.message)||"Error al obtener stocks"})}},showUpdateStock(a,e){this.isStockIn=e=="in",this.stockData={...a},this.DialogMove=!0},UpdateStock(){var e,i;let a={minimum_quantity:this.stockData.minimum_quantity,quantity:this.quantity,in:this.isStockIn};try{c.put("/api/stock/update/"+this.stockData.id,a,{headers:{Authorization:this.token}}).then(n=>{this.DialogMove=!1,this.listStock(this.product)})}catch(n){this.$q.notify({type:"negative",message:((i=(e=n.response)==null?void 0:e.data)==null?void 0:i.message)||"Error al actualizar stock"})}}},mounted(){this.loadproducts(),this.loadCategories()}},P={style:{width:"50%",height:"50%"},class:"bg-white rounded"},E={class:"text-h6"},Q={class:"text-h6"};function L(a,e,i,n,l,r){return D(),w(q,null,[e[25]||(e[25]=m("h5",{class:"q-ml-md"},"Productos",-1)),o(N,{class:"custon-page"},{default:s(()=>[o(u,{onClick:r.ShowCreateProduct,label:"Nuevo Producto",color:"primary",class:"q-mb-md"},null,8,["onClick"]),o(d,{modelValue:l.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>l.searchQuery=t),label:"Buscar Producto",debounce:"300",class:"q-mb-md",onKeydown:e[1]||(e[1]=C(t=>a.searchBranch(),["enter"]))},null,8,["modelValue"]),o(y,{rows:l.productsList,columns:l.columns,"row-key":"id",pagination:l.pagination,onRequest:r.loadproducts,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(t=>[o(S,{props:t},{default:s(()=>[o(u,{flat:"",label:"Stock",color:"green",onClick:p=>r.listStock(t.row)},null,8,["onClick"]),o(u,{flat:"",label:"Edit",color:"primary",onClick:p=>r.editProduct(t.row)},null,8,["onClick"]),o(u,{flat:"",label:"Delete",color:"negative",onClick:p=>a.deleteBranch(t.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),o(k,{modelValue:l.dialogVisible,"onUpdate:modelValue":e[8]||(e[8]=t=>l.dialogVisible=t)},{default:s(()=>[m("div",P,[o(g,null,{default:s(()=>[o(b,null,{default:s(()=>[m("div",E,f(l.isEditMode?"Editar Producto":"Crear Producto"),1),o(d,{modelValue:l.productData.name,"onUpdate:modelValue":e[2]||(e[2]=t=>l.productData.name=t),label:"Nombre",required:""},null,8,["modelValue"]),o(d,{modelValue:l.productData.description,"onUpdate:modelValue":e[3]||(e[3]=t=>l.productData.description=t),label:"Descripcion",required:""},null,8,["modelValue"]),o(d,{modelValue:l.productData.sku,"onUpdate:modelValue":e[4]||(e[4]=t=>l.productData.sku=t),label:"SKU",required:""},null,8,["modelValue"]),o(d,{modelValue:l.productData.price,"onUpdate:modelValue":e[5]||(e[5]=t=>l.productData.price=t),label:"Precio",required:""},null,8,["modelValue"]),o(v,{modelValue:l.categorySelected,"onUpdate:modelValue":e[6]||(e[6]=t=>l.categorySelected=t),options:l.categoriesList,label:"Selecciona una opci\xF3n","option-label":"label","option-value":"value",outlined:""},null,8,["modelValue","options"])]),_:1}),o(h,null,{default:s(()=>[o(u,{flat:"",label:"Cancel",onClick:r.closeDialog},null,8,["onClick"]),o(u,{flat:"",label:"Save",color:"primary",onClick:e[7]||(e[7]=t=>r.saveProduct())})]),_:1})]),_:1})])]),_:1},8,["modelValue"]),o(k,{modelValue:l.DialogStock,"onUpdate:modelValue":e[11]||(e[11]=t=>l.DialogStock=t)},{default:s(()=>[o(g,null,{default:s(()=>[o(y,{rows:l.productsStockList,columns:l.columns_stock,"row-key":"id",pagination:l.pagination,onRequest:r.listStock,"rows-per-page-options":[5,10,15]},{"body-cell-actions":s(t=>[o(S,{props:t},{default:s(()=>[o(u,{flat:"",label:"Entrada",color:"primary",onClick:p=>r.showUpdateStock(t.row,"in")},null,8,["onClick"]),o(u,{flat:"",label:"Salida",color:"negative",onClick:p=>r.showUpdateStock(t.row,"out")},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","onRequest"]),o(h,null,{default:s(()=>[o(u,{flat:"",label:"Cancel",onClick:e[9]||(e[9]=t=>{this.DialogStock=!1})}),o(u,{flat:"",label:"Nuevo",color:"primary",onClick:e[10]||(e[10]=t=>r.ShowNewStockDialog())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(k,{modelValue:l.DialogMove,"onUpdate:modelValue":e[17]||(e[17]=t=>l.DialogMove=t)},{default:s(()=>[o(g,null,{default:s(()=>[o(b,null,{default:s(()=>[m("div",Q,f(l.isStockIn?"Entrada":"Salida"),1),o(d,{modelValue:l.stockData.quantity_available,"onUpdate:modelValue":e[12]||(e[12]=t=>l.stockData.quantity_available=t),label:"Cantidad Disponible",disable:""},null,8,["modelValue"]),o(d,{modelValue:l.stockData.minimum_quantity,"onUpdate:modelValue":e[13]||(e[13]=t=>l.stockData.minimum_quantity=t),label:"Cantidad minima"},null,8,["modelValue"]),o(d,{modelValue:a.quantity,"onUpdate:modelValue":e[14]||(e[14]=t=>a.quantity=t),label:"Cantidad",disable:"false"},null,8,["modelValue"])]),_:1}),o(h,null,{default:s(()=>[o(u,{flat:"",label:"Cancel",onClick:e[15]||(e[15]=t=>{l.DialogMove=!1})}),o(u,{flat:"",label:"Guardar",color:"primary",onClick:e[16]||(e[16]=t=>r.UpdateStock())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(k,{modelValue:l.DialogNewStock,"onUpdate:modelValue":e[23]||(e[23]=t=>l.DialogNewStock=t)},{default:s(()=>[o(g,null,{default:s(()=>[o(b,null,{default:s(()=>[e[24]||(e[24]=m("div",{class:"text-h6"},"Nuevo Stock",-1)),o(v,{modelValue:l.dataNewStock.branch,"onUpdate:modelValue":e[18]||(e[18]=t=>l.dataNewStock.branch=t),options:l.branchesList,label:"Selecciona una opci\xF3n","option-label":"label","option-value":"value",outlined:""},null,8,["modelValue","options"]),o(d,{modelValue:l.dataNewStock.quantity_available,"onUpdate:modelValue":e[19]||(e[19]=t=>l.dataNewStock.quantity_available=t),label:"Cantidad Disponible"},null,8,["modelValue"]),o(d,{modelValue:l.dataNewStock.minimum_quantity,"onUpdate:modelValue":e[20]||(e[20]=t=>l.dataNewStock.minimum_quantity=t),label:"Cantidad minima"},null,8,["modelValue"])]),_:1}),o(h,null,{default:s(()=>[o(u,{flat:"",label:"Cancel",onClick:e[21]||(e[21]=t=>{l.DialogNewStock=!1})}),o(u,{flat:"",label:"Guardar",color:"primary",onClick:e[22]||(e[22]=t=>r.saveStockbyproduct())})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var R=V(U,[["render",L]]);export{R as default};
