(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{697:function(e,n,l){var t=l(703);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l(45).default)("1d1ca5c6",t,!0,{})},698:function(e,n,l){var t=l(705);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l(45).default)("81bb6994",t,!0,{})},699:function(e,n,l){var t=l(707);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l(45).default)("77ec0b88",t,!0,{})},700:function(e,n,l){"use strict";l(711),l(290),l(289);var t=l(712),a=l.n(t),o=l(713),i=l.n(o),d={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,a.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,a.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new i.a(".copy",{text:()=>e});n.on("success",e=>{e.clearSelection(),n.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,n){var l=new RegExp("<"+n+"[^>]*>"),t=e.match(l);return t?(t=t[0],e.slice(e.indexOf(t)+t.length,e.lastIndexOf("</"+n+">"))):""},openFiddle(){}}},s=(l(702),l(704),l(1)),c=Object(s.a)(d,(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",{staticClass:"doc-code"},[l("pre",{class:{bg:e.bg}},[l("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),l("span",{staticClass:"scale",on:{click:e.scale}},[l("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[l("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),l("span",{staticClass:"copy",on:{click:e.clip}},[l("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[l("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),l("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),l("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(n){e.openScale=n},expression:"openScale"}},[l("div",{staticClass:"doc-code"},[l("pre",{class:{bg:e.bg}},[e._v("                "),l("code",{ref:"code2",class:e.language}),e._v("\n            ")])])])],1)}),[],!1,null,null,null);n.a=c.exports},701:function(e,n,l){"use strict";l(289);var t=l(710),a={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return t.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,n=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=n,n<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},o=(l(706),l(1)),i=Object(o.a)(a,(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[l("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[l("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),l("header",{staticClass:"example-header"},[l("span",[e._v("\n                "+e._s(e.title)+"\n                "),l("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),l("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),l("div",{staticClass:"example-split"}),e._v(" "),l("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[l("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?l("div",{staticClass:"example-code-more",on:{click:function(n){e.showCode=!e.showCode}}},[l("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),l("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),l("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);n.a=i.exports},702:function(e,n,l){"use strict";var t=l(697);l.n(t).a},703:function(e,n,l){(e.exports=l(44)(!1)).push([e.i,".doc-code .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n.doc-code .hljs-doctype {\n  color: #999;\n}\n.doc-code .hljs-tag {\n  color: #3e76f6;\n}\n.doc-code .hljs-attribute {\n  color: #e96900;\n}\n.doc-code .hljs-value {\n  color: #42b983;\n}\n.doc-code .hljs-name {\n  color: #63a35c;\n  font-weight: bold;\n}\n.doc-code .hljs-keyword {\n  color: #e96900;\n}\n.doc-code .hljs-string {\n  color: #42b983;\n}\n.doc-code .hljs-comment {\n  color: #b3b3b3;\n}\n.doc-code .hljs-operator .hljs-comment {\n  color: #525252;\n}\n.doc-code .hljs-regexp {\n  color: #af7dff;\n}\n.doc-code .hljs-built_in {\n  color: #2db7f5;\n}\n.doc-code div {\n  position: relative;\n  font-size: 14px;\n}\n.doc-code span.copy,\n.doc-code span.scale,\n.doc-code span.open-fiddle {\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: #b2b2b2;\n  cursor: pointer;\n}\n.doc-code span.scale {\n  right: 25px;\n}\n.doc-code span.open-fiddle {\n  right: 50px;\n}\n.doc-code .bg {\n  margin: 20px auto;\n}\n.doc-code .bg + span.copy {\n  right: 5px;\n}\n.doc-code span.copy:hover,\n.doc-code span.scale:hover,\n.doc-code span.open-fiddle:hover {\n  color: #5c6b77;\n}\n.doc-code code {\n  margin: 0;\n  background: none;\n  border-radius: 0;\n  font-size: 1em;\n  border: none;\n}\n",""])},704:function(e,n,l){"use strict";var t=l(698);l.n(t).a},705:function(e,n,l){(e.exports=l(44)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},706:function(e,n,l){"use strict";var t=l(699);l.n(t).a},707:function(e,n,l){(e.exports=l(44)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},825:function(e,n,l){"use strict";l.r(n);var t=l(708),a=l(709),o=l(700),i=l(701),d={},s={type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},c={type:"Cascader",model:"attraction",disabled:!0,data:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},r={attraction:["jiangsu","suzhou","shizilin"]},p={size:"large",type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",disabled:!0,children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]};d.data={field:s,fieldDisabled:c,fieldOptionsDisabled:{type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",disabled:!0,children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},fieldSmall:{size:"small",type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",disabled:!0,children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},fieldLarge:p,model:r},d.code="\n<script>\nconst field = "+JSON.stringify(s,null,4)+";\nconst model = "+JSON.stringify(r,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',d.disabledCode="\n<script>\nconst field = "+JSON.stringify(c,null,4)+";\nconst model = "+JSON.stringify(r,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model,\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',d.largeCode="\n<script>\nconst field = "+JSON.stringify(p,null,4)+";\nconst model = "+JSON.stringify(r,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var h={simple:d},v={components:{iArticle:t.a,inAnchor:a.a,iCode:o.a,Demo:i.a},data:()=>({code:h}),methods:{handleFieldChange(e,n){console.log(e,n)}}},u=l(1),m=Object(u.a)(v,(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("i-article",[l("article",[l("h1",[e._v("Cascader 级联选择")]),e._v(" "),l("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),l("p",[e._v("从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。相比 Select 组件，可以一次性完成选择，体验更好。")]),e._v(" "),l("div",{staticClass:"api"},[l("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),l("table",[l("thead",[l("tr",[l("th",[e._v("属性")]),e._v(" "),l("th",[e._v("说明")]),e._v(" "),l("th",[e._v("类型")]),e._v(" "),l("th",[e._v("默认值")])])]),e._v(" "),l("tbody",[l("tr",[l("td",[e._v("model")]),e._v(" "),l("td",[e._v("绑定的值的名称")]),e._v(" "),l("td",[e._v("String")]),e._v(" "),l("td",[e._v("不可为空")])]),e._v(" "),l("tr",[l("td",[e._v("type")]),e._v(" "),l("td",[e._v("Cascader")]),e._v(" "),l("td",[e._v("String")]),e._v(" "),l("td",[e._v("不可为空")])]),e._v(" "),l("tr",[l("td",[e._v("disabled")]),e._v(" "),l("td",[e._v("是否禁用选择器")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("clearable")]),e._v(" "),l("td",[e._v("是否支持清除")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("true")])]),e._v(" "),l("tr",[l("td",[e._v("placeholder")]),e._v(" "),l("td",[e._v("输入框占位符")]),e._v(" "),l("td",[e._v("String")]),e._v(" "),l("td",[e._v("请选择")])]),e._v(" "),l("tr",[l("td",[e._v("size")]),e._v(" "),l("td",[e._v("输入框大小，可选值为large和small或者不填")]),e._v(" "),l("td",[e._v("String")]),e._v(" "),l("td",[e._v("请选择")])]),e._v(" "),l("tr",[l("td",[e._v("change-on-select")]),e._v(" "),l("td",[e._v("规则暂定")]),e._v(" "),l("td",[e._v("暂定")]),e._v(" "),l("td",[e._v("暂定")])])])])],1),e._v(" "),l("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),l("Demo",{attrs:{title:"基础用法"}},[l("div",{attrs:{slot:"demo"},slot:"demo"},[l("Form",{attrs:{model:e.code.simple.data.model}},[l("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[l("p",[e._v("通过设置"),l("code",[e._v("field")]),e._v(", "),l("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),l("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),l("Demo",{attrs:{title:"禁用基础用法"}},[l("div",{attrs:{slot:"demo"},slot:"demo"},[l("Form",{attrs:{model:e.code.simple.data.model}},[l("FieldGenerator",{attrs:{field:e.code.simple.data.fieldDisabled},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),l("FieldGenerator",{attrs:{field:e.code.simple.data.fieldOptionsDisabled},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[l("p",[e._v("通过设置"),l("code",[e._v("field")]),e._v(", "),l("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),l("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.disabledCode))])],1),e._v(" "),l("Demo",{attrs:{title:"size基础用法"}},[l("div",{attrs:{slot:"demo"},slot:"demo"},[l("Form",{attrs:{model:e.code.simple.data.model}},[l("FieldGenerator",{attrs:{field:e.code.simple.data.fieldLarge},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),l("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),l("FieldGenerator",{attrs:{field:e.code.simple.data.fieldSmall},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[l("p",[e._v("通过设置"),l("code",[e._v("field")]),e._v(", "),l("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),l("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.largeCode))])],1)],1)])}),[],!1,null,null,null).exports;n.default=m}}]);