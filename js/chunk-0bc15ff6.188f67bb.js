(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc15ff6","chunk-2d0bdba6"],{"2cdc":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("96cf");var a=r("1da1");t["default"]={props:{id:{type:String,required:!0}},data:function(){return{form:{name:"",address:""}}},methods:{resetFormData:function(){this.form={name:"",address:""}},getFormData:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.resetFormData(),r.prev=1,r.next=4,t.$api.DEMO_BUSINESS_ISSUE_142_DETAIL(e);case 4:a=r.sent,n=a.name,s=a.address,t.form={name:n,address:s},t.$message.success("getFormData"),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),console.log("error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},handleSubmit:function(){this.$notify({title:"Submit",message:"提交了表单",type:"info"})}}}},"33a8":function(e,t,r){"use strict";var a=r("561b"),n=r.n(a);n.a},"561b":function(e,t,r){},e2b9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",{staticClass:"page",attrs:{type:"card"}},[r("el-form",{ref:"form",staticClass:"page--form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"地址"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("修改")])],1)],1)],1)},n=[],s=r("2cdc"),o={mixins:[s["default"]],beforeRouteEnter:function(e,t,r){var a=e.params.id;r(a?function(e){e.resetFormData(),e.getFormData(a)}:new Error("未指定ID"))},beforeRouteUpdate:function(e,t,r){var a=e.params.id;a?(this.resetFormData(),this.getFormData(a),r()):r(new Error("未指定ID"))}},i=o,c=(r("33a8"),r("2877")),u=function(e){e.options.__source="src/views/demo/business/issues/142/edit.vue"},m=u,f=Object(c["a"])(i,a,n,!1,null,null,null);"function"===typeof m&&m(f);t["default"]=f.exports}}]);