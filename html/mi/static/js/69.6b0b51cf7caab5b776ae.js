webpackJsonp([69],{OoCC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("viA7");e.default={data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,n.i(o.a)(this.listQuery).then(function(e){t.list=e.data,t.listLoading=!1})},handleDownload:function(){var t=this;n.e(93).then(function(){var e=n("zWO4"),o=e.export_json_to_excel,a=["序号","文章标题","作者","阅读数","发布时间"],i=["id","title","author","pageviews","display_time"],r=t.list;o(a,t.formatJson(i,r),"列表excel")}.bind(null,n)).catch(n.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}}},OqES:function(t,e,n){var o=n("VU/8")(n("OoCC"),n("TVoZ"),null,null,null);t.exports=o.exports},TVoZ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{"margin-bottom":"20px",float:"right"},attrs:{type:"primary",icon:"document"},on:{click:t.handleDownload}},[t._v("导出excel")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"作者",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"阅读数",width:"105",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"发布时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.display_time))])]}}])})],1)],1)},staticRenderFns:[]}},Vo7i:function(t,e,n){"use strict";var o=n("//Fk"),a=n.n(o),i=n("mtWM"),r=n.n(i),l=n("zL8q"),s=(n.n(l),n("IcnI")),u=n("TIfe"),c=r.a.create({baseURL:"http://djq.tunnel.qydev.com",timeout:5e3});c.interceptors.request.use(function(t){return s.a.getters.token&&(t.headers["x-access-token"]=n.i(u.a)()),t},function(t){console.log(t),a.a.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return console.log("err"+t),n.i(l.Message)({message:t.message,type:"error",duration:5e3}),a.a.reject(t)}),e.a=c},viA7:function(t,e,n){"use strict";function o(){return n.i(i.a)({url:"/article/list",method:"get"})}function a(){return n.i(i.a)({url:"/article/detail",method:"get"})}e.a=o,e.b=a;var i=n("Vo7i")}});