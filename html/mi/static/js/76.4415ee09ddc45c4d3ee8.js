webpackJsonp([76],{E4LH:function(t,e,i){"use strict";function a(t){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(t)}function n(t,e,i){""===e||/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(e)?i():i(new Error("手机号码不合法"))}function l(t){return function(e,i,a){i&&!/^[\d]+$/.test(i)?a(new Error(t)):a()}}function r(t){return function(e,i,a){i&&!/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(i)?a(new Error(t)):a()}}function o(t,e,i){e>999?i("优先权重最大999"):i()}e.e=a,e.a=n,e.c=l,e.d=r,e.b=o},WmyQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("woOf"),n=i.n(a),l=i("//Fk"),r=i.n(l),o=i("E4LH");e.default={props:{dialogStatus:{type:String,default:"create"},statusOptions:{type:Array,default:function(){return[]}},dialogFormVisible:{type:Boolean,default:!1},detail:{type:Object,default:function(){return{id:"",name:"",description:"",hide:"false",priority:0}}}},data:function(){return{isMain:!1,textMap:{update:"编辑",create:"创建"},detailRules:{name:[{required:!0,min:3,max:32,message:"分类名称长度3到32位",trigger:"blur"}],priority:[{validator:o.b,trigger:"blur"},{validator:o.c("优先权重只能为数字"),trigger:"blur"}]}}},methods:{validate:function(){var t=this;return new r.a(function(e,i){t.$refs.detailForm.validate(function(t){t?e():i()})})},create:function(){var t=this,e=this;e.validate().then(function(){var i=n()({},e.detail);delete i.id,e.$store.dispatch("CreateShopClassification",i).then(function(){t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),t.$emit("submit")},function(){})},function(){})},update:function(){var t=this,e=this;e.validate().then(function(){var i=n()({},e.detail);e.$store.dispatch("UpdateShopClassificationDetail",i).then(function(){e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),t.$emit("submit")},function(){})},function(){})},cancel:function(){this.$emit("cancel")}},watch:{dialogFormVisible:function(){this.$refs.detailForm&&this.$refs.detailForm.resetFields()}}}},dQtU:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"before-close":t.cancel,size:"small"}},[i("el-form",{ref:"detailForm",staticClass:"small-space",staticStyle:{width:"320px","margin-left":"50px"},attrs:{model:t.detail,rules:t.detailRules,"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[i("el-input",{model:{value:t.detail.name,callback:function(e){t.detail.name=e},expression:"detail.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"优先权重",prop:"priority"}},[i("el-input",{attrs:{type:"number",min:"0"},model:{value:t.detail.priority,callback:function(e){t.detail.priority=e},expression:"detail.priority"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"状态"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"状态"},model:{value:t.detail.hide,callback:function(e){t.detail.hide=e},expression:"detail.hide"}},t._l(t.statusOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}))],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",slot:"footer"},[i("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("确 定")]):t._e(),t._v(" "),t.checkPermission(t.permissionConstant.shopClassification_u)&&"update"===t.dialogStatus?[i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("确 定")])]:t._e()],2)],1)},staticRenderFns:[]}},y9G9:function(t,e,i){var a=i("VU/8")(i("WmyQ"),i("dQtU"),null,null,null);t.exports=a.exports}});