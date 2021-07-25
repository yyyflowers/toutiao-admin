(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfb59670"],{"187d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-management"},[r("el-card",{staticClass:"box-card first-card",scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"card-header"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",{attrs:{to:{path:"/content"}}},[e._v("内容管理")])],1)],1)]},proxy:!0}])},[r("div",{staticClass:"text item"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"60px",size:"mini"}},[r("el-form-item",{attrs:{label:"状态",prop:"resource"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"-1"}},[e._v("全部")]),r("el-radio",{attrs:{label:"0"}},[e._v("草稿")]),r("el-radio",{attrs:{label:"1"}},[e._v("待审核")]),r("el-radio",{attrs:{label:"2"}},[e._v("审核通过")]),r("el-radio",{attrs:{label:"3"}},[e._v("审核失败")]),r("el-radio",{attrs:{label:"4"}},[e._v("已删除")])],1)],1),r("el-form-item",{attrs:{label:"频道",prop:"region"}},[r("el-select",{attrs:{placeholder:"请选择频道"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[r("el-option",{attrs:{label:"频道一",value:"shanghai"}}),r("el-option",{attrs:{label:"频道二",value:"beijing"}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("查询")])],1)],1)],1)]),r("el-card",{staticClass:"box-card",scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"card-header"},[r("span",[e._v("根据筛选条件共查询到"+e._s(e.count)+"条数据")])])]},proxy:!0}])},[r("div",{staticClass:"text item"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.collect,stripe:""}},[r("el-table-column",{attrs:{label:"封面",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{src:e.row.images,alt:""}})]}}])}),r("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?r("el-tag",[e._v("待审核")]):2===t.row.status?r("el-tag",{attrs:{type:"success"}},[e._v("审核通过")]):0===t.row.status?r("el-tag",{attrs:{type:"info"}},[e._v("草稿")]):4===t.row.status?r("el-tag",{attrs:{type:"warning"}},[e._v("已删除")]):3===t.row.status?r("el-tag",{attrs:{type:"danger"}},[e._v("审核失败")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"pubDate",label:"发布时间"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.push("/publish")}}},[e._v(" 编辑 ")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.deleteClick(t.$index)}}},[e._v(" 删除 ")])]}}])})],1),r("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next",total:e.count},on:{"current-change":e.pageClick}})],1)])],1)},n=[],o=(r("a9e3"),r("a434"),r("1bab"));function s(){return Object(o["b"])({url:"/content/info/get"})}function l(){return Object(o["b"])({url:"/content/info?status"})}var c={name:"content-management",data:function(){return{form:{region:"",resource:""},rules:{region:[{required:!0,message:"请选择频道",trigger:"blur"}],resource:[{required:!0,message:"请选择状态",trigger:"blur"}]},collect:null,result:[],loading:!0,count:0}},methods:{_getContent:function(){var e=this;s().then((function(t){e.collect=t.data.collect[0].result,e.result=t.data.collect,e.count=10*e.result.length,e.loading=!1}))},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return alert("error submit!!"),t.$message({type:"error",message:"查询失败!"}),!1;t.$message({type:"success",message:"查询成功!"}),t.loading=!0,l().then((function(e){-1===Number(t.form.resource)?(t.collect=e.data.a[0].result,t.result=e.data.a):0===Number(t.form.resource)?(t.collect=e.data.b[0].result,t.result=e.data.b):1===Number(t.form.resource)?(t.collect=e.data.c[0].result,t.result=e.data.c):2===Number(t.form.resource)?(t.collect=e.data.d[0].result,t.result=e.data.d):4===Number(t.form.resource)?(t.collect=e.data.f[0].result,t.result=e.data.f):3===Number(t.form.resource)&&(t.collect=e.data.e[0].result,t.result=e.data.e),t.count=10*t.result.length,t.loading=!1}))}))},pageClick:function(e){this.collect=this.result[e-1].result},deleteClick:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!"}),t.count--,t.collect.splice(e,1)})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this._getContent()}},i=c,u=(r("25b9"),r("2877")),f=Object(u["a"])(i,a,n,!1,null,"b80ad4de",null);t["default"]=f.exports},"1dde":function(e,t,r){var a=r("d039"),n=r("b622"),o=r("2d00"),s=n("species");e.exports=function(e){return o>=51||!a((function(){var t=[],r=t.constructor={};return r[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25b9":function(e,t,r){"use strict";r("b4c5")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),n=r("5899"),o="["+n+"]",s=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},"65f0":function(e,t,r){var a=r("861d"),n=r("e8b5"),o=r("b622"),s=o("species");e.exports=function(e,t){var r;return n(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},8418:function(e,t,r){"use strict";var a=r("c04e"),n=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var s=a(t);s in e?n.f(e,s,o(0,r)):e[s]=r}},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),o=r("a691"),s=r("50c4"),l=r("7b0b"),c=r("65f0"),i=r("8418"),u=r("1dde"),f=u("splice"),d=Math.max,b=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var r,a,u,f,g,v,h=l(this),_=s(h.length),y=n(e,_),x=arguments.length;if(0===x?r=a=0:1===x?(r=0,a=_-y):(r=x-2,a=b(d(o(t),0),_-y)),_+r-a>p)throw TypeError(m);for(u=c(h,a),f=0;f<a;f++)g=y+f,g in h&&i(u,f,h[g]);if(u.length=a,r<a){for(f=y;f<_-a;f++)g=f+a,v=f+r,g in h?h[v]=h[g]:delete h[v];for(f=_;f>_-a+r;f--)delete h[f-1]}else if(r>a)for(f=_-a;f>y;f--)g=f+a-1,v=f+r-1,g in h?h[v]=h[g]:delete h[v];for(f=0;f<r;f++)h[f+y]=arguments[f+2];return h.length=_-a+r,u}})},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),o=r("94ca"),s=r("6eeb"),l=r("5135"),c=r("c6b6"),i=r("7156"),u=r("c04e"),f=r("d039"),d=r("7c73"),b=r("241c").f,p=r("06cf").f,m=r("9bf2").f,g=r("58a8").trim,v="Number",h=n[v],_=h.prototype,y=c(d(_))==v,x=function(e){var t,r,a,n,o,s,l,c,i=u(e,!1);if("string"==typeof i&&i.length>2)if(i=g(i),t=i.charCodeAt(0),43===t||45===t){if(r=i.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(i.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+i}for(o=i.slice(2),s=o.length,l=0;l<s;l++)if(c=o.charCodeAt(l),c<48||c>n)return NaN;return parseInt(o,a)}return+i};if(o(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(y?f((function(){_.valueOf.call(r)})):c(r)!=v)?i(new h(x(t)),r,w):x(t)},k=a?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)l(h,N=k[I])&&!l(w,N)&&m(w,N,p(h,N));w.prototype=_,_.constructor=w,s(n,v,w)}},b4c5:function(e,t,r){},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-cfb59670.e6c7e3d5.js.map