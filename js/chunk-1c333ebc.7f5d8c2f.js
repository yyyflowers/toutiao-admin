(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c333ebc"],{1592:function(t,a,e){"use strict";e("c016")},"77b8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"home"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[e("div",{staticClass:"text item",on:{click:t.contentClick}},[e("i",{staticClass:"el-icon-menu icon"}),e("span",[t._v("内容管理")])])])],1),e("el-col",{attrs:{span:6}},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[e("div",{staticClass:"text item",on:{click:t.materialClick}},[e("i",{staticClass:"el-icon-folder icon"}),e("span",[t._v("素材管理")])])])],1),e("el-col",{attrs:{span:6}},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[e("div",{staticClass:"text item",on:{click:t.commentClick}},[e("i",{staticClass:"el-icon-edit-outline icon"}),e("span",[t._v("评论统计")])])])],1),e("el-col",{attrs:{span:6}},[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[e("div",{staticClass:"text item",on:{click:t.fansClick}},[e("i",{staticClass:"el-icon-s-custom icon"}),e("span",[t._v("粉丝统计")])])])],1)],1),e("el-card",{staticClass:"box-card2",attrs:{shadow:"hover"}},[e("div",{staticClass:"text item"},[e("div",{ref:"main",staticStyle:{width:"1020px",height:"400px"}})])])],1)},i=[],c=e("313e"),n={name:"home",mounted:function(){var t=c["a"](this.$refs.main),a={title:{text:"折线图堆叠"},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]};t.setOption(a)},methods:{contentClick:function(){this.$router.push("/content")},materialClick:function(){this.$router.push("/material")},commentClick:function(){this.$router.push("/comment")},fansClick:function(){this.$router.push("/fans")}}},o=n,l=(e("1592"),e("2877")),r=Object(l["a"])(o,s,i,!1,null,"e52f3e3e",null);a["default"]=r.exports},c016:function(t,a,e){}}]);
//# sourceMappingURL=chunk-1c333ebc.7f5d8c2f.js.map