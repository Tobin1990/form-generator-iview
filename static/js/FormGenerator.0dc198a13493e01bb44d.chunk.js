(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{697:function(e,t,n){var o=n(703);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("1d1ca5c6",o,!0,{})},698:function(e,t,n){var o=n(705);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("81bb6994",o,!0,{})},699:function(e,t,n){var o=n(707);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("77ec0b88",o,!0,{})},700:function(e,t,n){"use strict";n(711),n(290),n(289);var o=n(712),l=n.n(o),i=n(713),a=n.n(i),d={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new a.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){var n=new RegExp("<"+t+"[^>]*>"),o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},s=(n(702),n(704),n(1)),r=Object(s.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"doc-code"},[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("div",{staticClass:"doc-code"},[n("pre",{class:{bg:e.bg}},[e._v("                "),n("code",{ref:"code2",class:e.language}),e._v("\n            ")])])])],1)}),[],!1,null,null,null);t.a=r.exports},701:function(e,t,n){"use strict";n(289);var o=n(710),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},i=(n(706),n(1)),a=Object(i.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);t.a=a.exports},702:function(e,t,n){"use strict";var o=n(697);n.n(o).a},703:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,".doc-code .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n.doc-code .hljs-doctype {\n  color: #999;\n}\n.doc-code .hljs-tag {\n  color: #3e76f6;\n}\n.doc-code .hljs-attribute {\n  color: #e96900;\n}\n.doc-code .hljs-value {\n  color: #42b983;\n}\n.doc-code .hljs-name {\n  color: #63a35c;\n  font-weight: bold;\n}\n.doc-code .hljs-keyword {\n  color: #e96900;\n}\n.doc-code .hljs-string {\n  color: #42b983;\n}\n.doc-code .hljs-comment {\n  color: #b3b3b3;\n}\n.doc-code .hljs-operator .hljs-comment {\n  color: #525252;\n}\n.doc-code .hljs-regexp {\n  color: #af7dff;\n}\n.doc-code .hljs-built_in {\n  color: #2db7f5;\n}\n.doc-code div {\n  position: relative;\n  font-size: 14px;\n}\n.doc-code span.copy,\n.doc-code span.scale,\n.doc-code span.open-fiddle {\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: #b2b2b2;\n  cursor: pointer;\n}\n.doc-code span.scale {\n  right: 25px;\n}\n.doc-code span.open-fiddle {\n  right: 50px;\n}\n.doc-code .bg {\n  margin: 20px auto;\n}\n.doc-code .bg + span.copy {\n  right: 5px;\n}\n.doc-code span.copy:hover,\n.doc-code span.scale:hover,\n.doc-code span.open-fiddle:hover {\n  color: #5c6b77;\n}\n.doc-code code {\n  margin: 0;\n  background: none;\n  border-radius: 0;\n  font-size: 1em;\n  border: none;\n}\n",""])},704:function(e,t,n){"use strict";var o=n(698);n.n(o).a},705:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},706:function(e,t,n){"use strict";var o=n(699);n.n(o).a},707:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},721:function(e,t,n){var o=n(759);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("82e6dc20",o,!0,{})},758:function(e,t,n){"use strict";var o=n(721);n.n(o).a},759:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,".ivu-icon-ios-help-circle-outline,\n.ivu-icon-ios-alert-outline {\n  position: absolute;\n  top: 7px;\n  left: -23px;\n}\n.wrap {\n  width: 30px;\n  height: 40px;\n  pointer-events: none;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: 2;\n}\n.wrap img {\n  width: 138px;\n  height: 129px;\n}\n.ruleWrap {\n  width: 180px;\n  padding: 5px;\n  box-sizing: border-box;\n  height: auto;\n  line-height: 1;\n  font-size: 12px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  pointer-events: none;\n  position: absolute;\n  top: -35px;\n  left: -104px;\n  z-index: 2;\n  word-wrap: break-word;\n  border-radius: 4px;\n  border: 1px solid #333;\n}\n.ruleWrap span {\n  display: block;\n  width: 0;\n  height: 0;\n  border-width: 5px 5px 0;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.7) transparent transparent;\n  position: absolute;\n  top: 34px;\n  left: 50%;\n  /* 三角形居中显示 */\n  margin-left: -5px;\n  /* 三角形居中显示 */\n}\n",""])},810:function(e,t,n){"use strict";n.r(t);var o=n(708),l=n(709),i=n(700),a=n(701),d={},s=[{type:"Input",model:"username",placehold:"Username",prefix:"ios-person-outline",width:120,rules:[{required:!0,message:"Please fill in the user name",trigger:"blur"}]},{type:"Input",subtype:"password",model:"password",placehold:"Password",prefix:"ios-lock-outline",width:120,rules:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]},{type:"Submit",subtype:"primary",text:"登录",width:80}],r={inline:!0,title:"用户名、密码登录"},p={username:"",password:""};d.data={fields:s,options:r,model:p},d.code="\n<script>\nconst fields = "+JSON.stringify(s,null,4)+";\nconst model = "+JSON.stringify(p,null,4)+";\nconst options = "+JSON.stringify(r,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model,\n            options\n        };\n    },\n    methods: {\n        handleSubmit(formName) {\n            console.log(this.$refs[formName].model);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :options="options"\n        :model="model"\n        @on-submit="handleSubmit(\'simple\')"\n    />\n</template>\n';var c={},v=[{label:"Input",type:"Input",model:"input",placehold:"Entering something..."},{label:"Select",type:"Select",model:"select",placehold:"请选择",options:[{label:"北京",value:"Beijing"},{label:"上海",value:"Shanghai"},{label:"广州",value:"Guangzhou"},{label:"深圳",value:"Shenzhen"}]},{label:"Date",type:"DatePicker",model:"date",width:"40%",inline:!0},{label:"",type:"TimePicker",model:"time",width:"40%",inline:!0,labelWidth:20},{label:"Radio",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"unknown",disabled:!0}]},{label:"Checkbox",type:"Checkbox",model:"fruit",options:[{label:"西瓜",value:"1"},{label:"苹果",value:"2"},{label:"梨",value:"3",disabled:!0}]},{label:"Switch",type:"Switch",model:"open"},{label:"Textarea",type:"Input",subtype:"textarea",model:"textarea",placehold:"Entering something..."},{type:"Submit",subtype:"primary",text:"提交",inline:!0},{type:"Reset",subtype:"primary",text:"重置",labelWidth:0,inline:!0}],m={input:"",select:"",date:"",gender:"",fruit:[],open:!0,textarea:""};c.data={fields:v,model:m},c.code="\n<script>\nconst fields = "+JSON.stringify(v,null,4)+";\nconst model = "+JSON.stringify(m,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :model="model"\n    />\n</template>\n';var h={},u=[{label:"姓名",type:"Input",model:"name",placehold:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{label:"城市",type:"Select",model:"city",placehold:"请选择",options:[{label:"北京",value:"Beijing"},{label:"上海",value:"Shanghai"},{label:"广州",value:"Guangzhou"},{label:"深圳",value:"Shenzhen"}],required:!0},{label:"生日",type:"DatePicker",subtype:"daterange",model:"birthday",required:!0},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"}],required:!0},{label:"水果",type:"Checkbox",model:"fruit",options:[{label:"西瓜",value:"1"},{label:"苹果",value:"2"},{label:"梨子",value:"3"}],required:!0},{type:"Submit",subtype:"primary",text:"提交",inline:!0},{type:"Reset",text:"重置",labelWidth:0,inline:!0}],_={name:"",city:"",birthday:"",gender:"",fruit:[]};h.data={fields:u,model:_},h.code="\n<script>\nconst fields = "+JSON.stringify(u,null,4)+";\nconst model = "+JSON.stringify(_,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :model="model"\n    />\n</template>\n';var b={},f=[{type:"Divider",label:"Personal",orientation:"left",dashed:!0},{type:"Input",label:"Name",model:"name"},{type:"DatePicker",label:"Birth",model:"birth"},{type:"Radio",subtype:"button",size:"small",label:"Favorite Animal",options:[{label:"Tiger",value:"tiger"},{label:"Lion",value:"lion"},{label:"Bear",value:"bear"},{label:"Bull",value:"bull"},{label:"Serval",value:"Serval"}],model:"animal"},{type:"Divider",label:"Account",orientation:"left",dashed:!0},{type:"Input",subtype:"email",label:"Email",placehold:"example@email.com",model:"email"},{type:"Input",subtype:"password",label:"Password",model:"password"},{type:"Input",subtype:"password",label:"Verify Password",model:"varifyPassword"},{type:"Divider",label:"Contact",orientation:"left",dashed:!0},{type:"Input",label:"Address",model:"address"},{type:"Select",label:"State",options:[{label:"China",value:"China"},{label:"America",value:"America"},{label:"British",value:"British"},{label:"Japan",value:"Japan"}],model:"state"},{type:"Input",label:"Phone",model:"phone"},{type:"Divider",orientation:"left",dashed:!0,size:"small"},{type:"Submit",subtype:"primary",text:"Submit",inline:!0},{type:"Reset",text:"Reset",labelWidth:30,inline:!0}],g={name:"",birth:"",animal:"",email:"",password:"",varifyPassword:"",address:"",state:"",phone:""},x={labelPosition:"top"};b.data={fields:f,model:g,options:x},b.code="\n<script>\nconst fields = "+JSON.stringify(f,null,4)+";\nconst model = "+JSON.stringify(g,null,4)+";\nconst options = "+JSON.stringify(x,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model,\n            options\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :options="options"\n        :model="model"\n    />\n</template>\n';var y={},w=[{label:"登录方式",type:"Radio",model:"loginType",options:[{label:"用户名密码登录",value:"1"},{label:"手机号登录",value:"2"}],required:!0},{label:"用户名",type:"Input",model:"username",placehold:"Username",prefix:"ios-person-outline",rules:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],showOn:{loginType:[{type:"enum",enum:["1"]}]}},{label:"密码",type:"Input",subtype:"password",model:"password",placehold:"Password",prefix:"ios-lock-outline",rules:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}],showOn:{loginType:[{type:"enum",enum:["1"]}]}},{label:"手机号",type:"Input",model:"phoneNumber",placehold:"PhoneNumber",prefix:"ios-phone-portrait",required:!0,showOn:{loginType:[{type:"enum",required:!0,enum:["2"]}]}},{type:"Button",text:"发送验证码",action:{type:"ajax",api:"/sendValidCode"},showOn:{loginType:[{type:"enum",required:!0,enum:["2"]}],phoneNumber:[{type:"string",required:!0}]}},{label:"验证码",type:"Input",model:"valideCode",placehold:"Please input valide code you riceived",prefix:"ios-lock-outline",required:!0,showOn:{loginType:[{type:"enum",required:!0,enum:["2"]}]}},{type:"Submit",subtype:"primary",text:"登录",width:80}],S={loginType:"1",username:"",password:""};y.data={fields:w,model:S},y.code="\n<script>\nconst fields = "+JSON.stringify(w,null,4)+";\nconst model = "+JSON.stringify(S,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model,\n            options\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :options="options"\n        :model="model"\n    />\n</template>\n';var C={},k=[{type:"Divider",label:"label添加tip信息",orientation:"left",dashed:!0},{type:"Input",label:"活动名称",model:"input",placeholder:"请输入用户名",required:!0,labelTip:{content:'<p>可参考下图进行配置<br/><img style="width:100px;margin:0 auto;" src="https://efe-h2.cdn.bcebos.com/ceug/resource/res/2019-06/1561358481371/iishnxu1f1fv.png"/></p>'}},{type:"Input",label:"你的姓名",model:"name",placeholder:"请输入姓名",required:!0,labelTip:{placement:"right-start",content:'<p>Display multiple lines of information</p><p><i>Can customize the style</i><a href="www.baidu.com">百度一下</a></p>'}}],O={input:"",name:"",link:""},N={labelWidth:120,labelPosition:"left"};C.data={fields:k,model:O,options:N},C.code="\n<script>\nconst fields = "+JSON.stringify(k,null,4)+";\nconst model = "+JSON.stringify(O,null,4)+";\nconst options = "+JSON.stringify(N,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model,\n            options\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :model="model"\n        :options="options",\n    />\n</template>\n';var $={simple:d,form:c,validate:h,divider:b,hiddenOn:y,labelTip:C},z={components:{iArticle:o.a,inAnchor:l.a,iCode:i.a,Demo:a.a},data:()=>({code:$}),methods:{handleSubmit(e){console.log(this.$refs[e].model),this.$Message.success(JSON.stringify(this.$refs[e].model))}}},T=(n(758),n(1)),j=Object(T.a)(z,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("FormGenerator")]),e._v(" "),n("p",[e._v("用来生成一个完整的表单，关于支持的组件类型可以参考"),n("router-link",{attrs:{to:"/intro#SJGL"}},[e._v("简介中的设计概览")]),e._v("。")],1),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("表单数据对象")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("fields")]),e._v(" "),n("td",[e._v("表单项配置列表")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("表单配置项，用于控制表单的样式、布局等，详见后续"),n("strong",[e._v("option配置详解")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("requestInterceptor")]),e._v(" "),n("td",[e._v("表单请求的拦截器，下拉选择的列表等需要动态获取数据的组件中传入该属性后，将使用该属性声明的方法进行数据请求。")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("paramsContainer")]),e._v(" "),n("td",[e._v("表单控件中的请求（如Select的option动态获取，Button的Ajax请求等）的额外参数的传入，通常配合表单控件的 field.apiParams 一起使用。")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"option配置详解",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("设置后，会展示表单标题")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("''")])]),e._v(" "),n("tr",[n("td",[e._v("tip")]),e._v(" "),n("td",[e._v("设置后，会展示表单提示信息")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("tip.title")]),e._v(" "),n("td",[e._v("表单提示信息的标题")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("tip.content")]),e._v(" "),n("td",[e._v("表单提示信息的内容，可以为html。"),n("strong",[e._v("内部使用了v-html，注意XSS攻击风险")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("labelWidth")]),e._v(" "),n("td",[e._v("表单标签的宽度")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("如果inline为true，则默认为80；否则默认为0。")])]),e._v(" "),n("tr",[n("td",[e._v("labelPosition")]),e._v(" "),n("td",[e._v("标签的位置，可选"),n("code",[e._v("left")]),e._v("、"),n("code",[e._v("right")]),e._v("、"),n("code",[e._v("top")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("right")])]),e._v(" "),n("tr",[n("td",[e._v("itemWidth")]),e._v(" "),n("td",[e._v("每个表单项的宽度")]),e._v(" "),n("td",[e._v("String，Number")]),e._v(" "),n("td",[e._v("如果inline为false，则默认为100%，否则由labelWidth和控件宽度决定")])]),e._v(" "),n("tr",[n("td",[e._v("inline")]),e._v(" "),n("td",[e._v("是否为内联，如果为true则表单项会顺次平铺，否则会折行。")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("apiBase")]),e._v(" "),n("td",[e._v("数据查询的基础地址。")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("extraType")]),e._v(" "),n("td",[e._v("有默认不展示的项时，'更多'项的展示位置。可选"),n("code",[e._v("right")]),e._v("、"),n("code",[e._v("button")])]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("right")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"事件",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-field-change")]),e._v(" "),n("td",[e._v("表单项数据变更时")]),e._v(" "),n("td",[e._v("(model, value) model；表单项的标识；value：表单项的值；")])]),e._v(" "),n("tr",[n("td",[e._v("on-submit")]),e._v(" "),n("td",[e._v("点击提交按钮时")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("on-reset")]),e._v(" "),n("td",[e._v("点击重置按钮时")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"方法",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("方法名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("参数")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("submit")]),e._v(" "),n("td",[e._v("提交表单")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("reset")]),e._v(" "),n("td",[e._v("重置表单")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("resetField")]),e._v(" "),n("td",[e._v("重置单个表单项")]),e._v(" "),n("td",[e._v("要重置的表单项的标识 String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("resetFields")]),e._v(" "),n("td",[e._v("要重置的表单项的标识，Array")]),e._v(" "),n("td",[e._v("重置多个表单项")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("validate")]),e._v(" "),n("td",[e._v("验证表单")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("validateField")]),e._v(" "),n("td",[e._v("验证单个表单项")]),e._v(" "),n("td",[e._v("要验证的表单项的标识 String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("validateField")]),e._v(" "),n("td",[e._v("验证多个表单项")]),e._v(" "),n("td",[e._v("要验证的表单项的标识 Array")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"简单示例"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{ref:"simple",attrs:{fields:e.code.simple.data.fields,model:e.code.simple.data.model,options:e.code.simple.data.options},on:{"on-submit":function(t){return e.handleSubmit("simple")}}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("FormGenerator组件依赖三个属性: "),n("code",[e._v("fields")]),e._v(", "),n("code",[e._v("model")]),e._v(", "),n("code",[e._v("options")]),e._v("。")]),e._v(" "),n("p",[e._v("通过设置"),n("code",[e._v("fields")]),e._v(", "),n("code",[e._v("model")]),e._v(", "),n("code",[e._v("options")]),e._v("即可生成一个表单UI。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"表单控件"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{ref:"form",attrs:{fields:e.code.form.data.fields,model:e.code.form.data.model,options:e.code.form.data.options},on:{"on-submit":function(t){return e.handleSubmit("form")}}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.form.code))])],1),e._v(" "),n("Demo",{attrs:{title:"校验"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.validate.data.fields,model:e.code.validate.data.model,options:e.code.validate.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.validate.code))])],1),e._v(" "),n("Demo",{attrs:{title:"分割线"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.divider.data.fields,model:e.code.divider.data.model,options:e.code.divider.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.divider.code))])],1),e._v(" "),n("Demo",{attrs:{title:"联动"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.hiddenOn.data.fields,model:e.code.hiddenOn.data.model,options:e.code.hiddenOn.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.hiddenOn.code))])],1),e._v(" "),n("Demo",{attrs:{title:"label添加tip信息"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.labelTip.data.fields,model:e.code.labelTip.data.model,options:e.code.labelTip.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.labelTip.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=j}}]);