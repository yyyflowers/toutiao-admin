(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf64"],{"842d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"comment"}},[a("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/comment"}}},[t._v("评论统计")])],1)],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.comment,stripe:""}},[a("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),a("el-table-column",{attrs:{prop:"totalComment",label:"总评论数",width:"180"}}),a("el-table-column",{attrs:{prop:"totalFans",label:"粉丝评论数"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[!0===e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):t._e(),!1===e.row.status?a("el-tag",{attrs:{type:"danger"}},[t._v("关闭")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},nativeOn:{click:function(e){return t.operateClick.apply(null,arguments)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])})],1),a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"current-change":t.handleCurrentChange}})],1)])],1)},r=[],l=a("1bab");function o(){return Object(l["b"])({url:"/comment/info",methods:"get"})}var s={name:"comment",data:function(){return{comment:null,currentPage1:1,loading:!0}},created:function(){this._getComment()},methods:{_getComment:function(){var t=this;o().then((function(e){t.comment=e.data.comment[0].result,t.result=e.data.comment,t.loading=!1}))},operateClick:function(){this.$message({showClose:!0,message:"操作成功",type:"success"})},handleCurrentChange:function(t){this.comment=this.result[t-1].result}}},c=s,u=a("2877"),i=Object(u["a"])(c,n,r,!1,null,"e9b08060",null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0ddf64.9c4c3513.js.map