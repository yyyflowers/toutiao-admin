(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fc94af3"],{"769a":function(t,e,a){},f2c5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"material"}},[a("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/material"}}},[t._v("素材管理")])],1)],1)]},proxy:!0}])},[a("collect")],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"body-radio"},[a("el-radio-group",{attrs:{size:"medium"},on:{change:t.radioClick},model:{value:t.collect,callback:function(e){t.collect=e},expression:"collect"}},[a("el-radio-button",{attrs:{label:"false"}},[t._v("全部")]),a("el-radio-button",{attrs:{label:"true"}},[t._v("收藏")])],1),a("el-button",{attrs:{type:"success",size:"medium"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加素材")])],1),t.isshow?a("el-row",{attrs:{gutter:20}},t._l(t.imgs,(function(t,e){return a("el-col",{key:e,attrs:{span:4}},[a("el-image",{attrs:{src:t.images,fit:"cover"}}),a("div",{staticClass:"img-icon"},[a("i",{class:t.is_collected?"el-icon-star-on":"el-icon-star-off"}),a("i",{staticClass:"el-icon-delete"})])],1)})),1):a("el-row",{attrs:{gutter:20}},t._l(t.Cimgs,(function(t,e){return a("el-col",{key:e,attrs:{span:4}},[a("el-image",{attrs:{src:t.imgs,fit:"cover"}}),a("div",{staticClass:"img-icon"},[a("i",{staticClass:"el-icon-star-on"}),a("i",{staticClass:"el-icon-delete"})])],1)})),1),a("el-dialog",{attrs:{title:"添加素材",visible:t.dialogVisible,width:"52%","append-to-body":"append-to-body"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"http://api-toutiao-web.itheima.net/meterial/post",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],1)},o=[],c=a("1bab");function r(){return Object(c["b"])({url:"/material/info",methods:"get"})}var n={name:"collect",data:function(){return{dialogVisible:!1,collect:!1,imgs:"",Cimgs:"",isshow:!0,appendToBody:!0}},created:function(){this._getMaterial()},methods:{_getMaterial:function(){var t=this;r().then((function(e){t.imgs=e.data.material,t.Cimgs=e.data.collect}))},radioClick:function(){this.isshow=!this.isshow}}},d=n,u=(a("fb14"),a("2877")),m=Object(u["a"])(d,l,o,!1,null,"a2d054de",null),p=m.exports,b={name:"material",components:{collect:p}},f=b,g=Object(u["a"])(f,i,s,!1,null,"c45b580c",null);e["default"]=g.exports},fb14:function(t,e,a){"use strict";a("769a")}}]);
//# sourceMappingURL=chunk-4fc94af3.1abed28a.js.map