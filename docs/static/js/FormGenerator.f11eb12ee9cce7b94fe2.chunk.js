(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{293:function(e,t,n){var o=n(297);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("f03ffdc6",o,!0,{})},294:function(e,t,n){var o=n(299);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("81bb6994",o,!0,{})},295:function(e,t,n){var o=n(301);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("ef5e7348",o,!0,{})},296:function(e,t,n){"use strict";var o=n(293);n.n(o).a},297:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\ndiv[data-v-1f3faa6e]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-1f3faa6e], span.scale[data-v-1f3faa6e], span.open-fiddle[data-v-1f3faa6e]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-1f3faa6e]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-1f3faa6e]{\n    right: 50px;\n}\n.bg + span.copy[data-v-1f3faa6e]{\n    right: 5px;\n}\nspan.copy[data-v-1f3faa6e]:hover, span.scale[data-v-1f3faa6e]:hover, span.open-fiddle[data-v-1f3faa6e]:hover{\n    color: #5c6b77;\n}\n\n",""])},298:function(e,t,n){"use strict";var o=n(294);n.n(o).a},299:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},300:function(e,t,n){"use strict";var o=n(295);n.n(o).a},301:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},302:function(e,t,n){"use strict";n(127);var o=n(306),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(n(300),n(0)),i=Object(a.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=i.exports},303:function(e,t,n){"use strict";n(307),n(308),n(127);var o=n(309),l=n.n(o),a=(n(310),n(311)),i=n.n(a),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new i.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},d=(n(296),n(298),n(0)),r=Object(d.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"1f3faa6e",null);t.a=r.exports},377:function(e,t,n){"use strict";n.r(t);var o=n(304),l=n(305),a=n(303),i=n(302);let s={};const d=[{type:"Input",model:"username",placehold:"Username",prefix:"ios-person-outline",width:120,rules:[{required:!0,message:"Please fill in the user name",trigger:"blur"}]},{type:"Input",subtype:"password",model:"password",placehold:"Password",prefix:"ios-lock-outline",width:120,rules:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]},{type:"Submit",subtype:"primary",text:"登录",width:80}],r={inline:!0,title:"用户名、密码登录"},p={username:"",password:""};s.data={fields:d,options:r,model:p},s.code="\n<script>\nconst field = "+JSON.stringify(d,null,4)+";\nconst model = "+JSON.stringify(p,null,4)+";\nconst options = "+JSON.stringify(r,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model,\n            options\n        };\n    }\n};\n<script>\n<template>\n    <FormGenerator\n        :field="field"\n        :options="options"\n        :model="model"\n    />\n</template>\n';let c={},m=[{label:"Input",type:"Input",model:"input",placehold:"Entering something..."},{label:"Select",type:"Select",model:"select",placehold:"请选择",options:[{label:"北京",value:"Beijing"},{label:"上海",value:"Shanghai"},{label:"广州",value:"Guangzhou"},{label:"深圳",value:"Shenzhen"}]},{label:"Date",type:"DatePicker",model:"date",width:"50%",inline:!0},{label:"",type:"TimePicker",model:"time",width:"50%",inline:!0,labelWidth:20},{label:"Radio",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"unknown",disabled:!0}]},{label:"Checkbox",type:"Checkbox",model:"fruit",options:[{label:"西瓜",value:"1"},{label:"苹果",value:"2"},{label:"梨",value:"3",disabled:!0}]},{label:"Switch",type:"Switch",model:"open"},{label:"Textarea",type:"Input",subtype:"textarea",model:"textarea",placehold:"Entering something..."},{type:"Submit",subtype:"primary",text:"提交",width:"50%",inline:!0},{type:"Reset",subtype:"primary",text:"重置",width:"50%",labelWidth:0,inline:!0}],u={input:"",select:"",date:"",gender:"",fruit:[],open:!0,textarea:""};c.data={fields:m,model:u},c.code="\n<script>\nconst field = "+JSON.stringify(m,null,4)+";\nconst model = "+JSON.stringify(u,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n};\n<script>\n<template>\n    <FormGenerator\n        :field="field"\n        :model="model"\n    />\n</template>\n';let h={};h.data={fields:[{label:"姓名",type:"Input",model:"name",placehold:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{label:"城市",type:"Select",model:"city",placehold:"请选择",options:[{label:"北京",value:"Beijing"},{label:"上海",value:"Shanghai"},{label:"广州",value:"Guangzhou"},{label:"深圳",value:"Shenzhen"}],required:!0},{label:"生日",type:"DatePicker",model:"birthday",required:!0},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"}],required:!0},{label:"水果",type:"Checkbox",model:"fruit",options:[{label:"西瓜",value:"1"},{label:"苹果",value:"2"},{label:"梨子",value:"3"}],required:!0},{type:"Submit",subtype:"primary",text:"提交",width:"50%",inline:!0},{type:"Reset",text:"重置",width:"50%",labelWidth:0,inline:!0}],model:{input:"",select:"",date:"",gender:"",fruit:[],open:!0,textarea:""}},h.code="\n<script>\nconst field = "+JSON.stringify(m,null,4)+";\nconst model = "+JSON.stringify(u,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n};\n<script>\n<template>\n    <FormGenerator\n        :field="field"\n        :model="model"\n    />\n</template>\n';let v={};const f=[{type:"Divider",label:"Personal",orientation:"left",dashed:!0},{type:"Input",label:"Name",model:"name"},{type:"DatePicker",label:"Birth",model:"birth"},{type:"Radio",subtype:"button",size:"small",label:"Favorite Animal",options:[{label:"Tiger",value:"tiger"},{label:"Lion",value:"lion"},{label:"Bear",value:"bear"},{label:"Bull",value:"bull"},{label:"Serval",value:"Serval"}],model:"animal"},{type:"Divider",label:"Account",orientation:"left",dashed:!0},{type:"Input",subtype:"email",label:"Email",placehold:"example@email.com",model:"email"},{type:"Input",subtype:"password",label:"Password",model:"password"},{type:"Input",subtype:"password",label:"Verify Password",model:"varifyPassword"},{type:"Divider",label:"Contact",orientation:"left",dashed:!0},{type:"Input",label:"Address",model:"address"},{type:"Select",label:"State",options:[{label:"China",value:"China"},{label:"America",value:"America"},{label:"British",value:"British"},{label:"Japan",value:"Japan"}],model:"state"},{type:"Input",label:"Phone",model:"phone"},{type:"Divider",orientation:"left",dashed:!0,size:"small"},{type:"Submit",subtype:"primary",text:"Submit",width:"50%",inline:!0},{type:"Reset",text:"Reset",labelWidth:30,width:"50%",inline:!0}],b={name:"",birth:"",animal:"",email:"",password:"",varifyPassword:"",address:"",state:"",phone:""},g={labelWidth:100};v.data={fields:f,model:b,options:g},v.code="\n<script>\nconst field = "+JSON.stringify(f,null,4)+";\nconst model = "+JSON.stringify(b,null,4)+";\nconst options = "+JSON.stringify(g,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model,\n            options\n        };\n    }\n};\n<script>\n<template>\n    <FormGenerator\n        :field="field"\n        :options="options"\n        :model="model"\n    />\n</template>\n';let y={};const x=[{label:"登录方式",type:"Radio",model:"loginType",options:[{label:"用户名密码登录",value:"1"},{label:"手机号登录",value:"2"}],required:!0},{label:"用户名",type:"Input",model:"username",placehold:"Username",prefix:"ios-person-outline",rules:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],showOn:{loginType:[{type:"enum",enum:["1"]}]}},{label:"密码",type:"Input",subtype:"password",model:"password",placehold:"Password",prefix:"ios-lock-outline",rules:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}],showOn:{loginType:[{type:"enum",enum:["1"]}]}},{label:"手机号",type:"Input",model:"phoneNumber",placehold:"PhoneNumber",prefix:"ios-phone-portrait",required:!0,showOn:{loginType:[{type:"enum",required:!0,enum:["2"]}]}},{type:"Button",text:"发送验证码",action:{type:"ajax",api:"/sendValidCode"},showOn:{loginType:[{type:"enum",required:!0,enum:["2"]}],phoneNumber:[{type:"string",required:!0}]}},{label:"验证码",type:"Input",model:"valideCode",placehold:"Please input valide code you riceived",prefix:"ios-lock-outline",required:!0,showOn:{loginType:[{type:"enum",required:!0,enum:["2"]}]}},{type:"Submit",subtype:"primary",text:"登录",width:80}],w={loginType:"1",username:"",password:""};y.data={fields:x,model:w},y.code="\n<script>\nconst field = "+JSON.stringify(x,null,4)+";\nconst model = "+JSON.stringify(w,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model,\n            options\n        };\n    }\n};\n<script>\n<template>\n    <FormGenerator\n        :field="field"\n        :options="options"\n        :model="model"\n    />\n</template>\n';var _={simple:s,form:c,validate:h,divider:v,hiddenOn:y},C={components:{iArticle:o.a,inAnchor:l.a,iCode:a.a,Demo:i.a},data:()=>({code:_})},S=n(0),k=Object(S.a)(C,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("FormGenerator")]),e._v(" "),n("p",[e._v("在iView表单的基础上，新增了几种中台中常用的类型：逻辑输入、逻辑选择，对于文件上传，实现了图片上传和视频上传。")]),e._v(" "),n("inAnchor",{attrs:{title:"示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"简单示例"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.simple.data.fields,model:e.code.simple.data.model,options:e.code.simple.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("FormGenerator组件依赖三个属性: "),n("code",[e._v("fields")]),e._v(", "),n("code",[e._v("model")]),e._v(", "),n("code",[e._v("options")]),e._v("。")]),e._v(" "),n("p",[e._v("通过设置"),n("code",[e._v("fields")]),e._v(", "),n("code",[e._v("model")]),e._v(", "),n("code",[e._v("options")]),e._v("即可生成一个表单UI。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"表单控件"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.form.data.fields,model:e.code.form.data.model,options:e.code.form.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.form.code))])],1),e._v(" "),n("Demo",{attrs:{title:"校验"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.validate.data.fields,model:e.code.validate.data.model,options:e.code.validate.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.validate.code))])],1),e._v(" "),n("Demo",{attrs:{title:"分割线"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.divider.data.fields,model:e.code.divider.data.model,options:e.code.divider.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.divider.code))])],1),e._v(" "),n("Demo",{attrs:{title:"联动"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.hiddenOn.data.fields,model:e.code.hiddenOn.data.model,options:e.code.hiddenOn.data.options}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"}),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.hiddenOn.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=k}}]);