(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{697:function(e,t,n){var o=n(703);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("1d1ca5c6",o,!0,{})},698:function(e,t,n){var o=n(705);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("81bb6994",o,!0,{})},699:function(e,t,n){var o=n(707);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("77ec0b88",o,!0,{})},700:function(e,t,n){"use strict";n(711),n(290),n(289);var o=n(712),l=n.n(o),d=n(713),a=n.n(d),i={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new a.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){var n=new RegExp("<"+t+"[^>]*>"),o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},r=(n(702),n(704),n(1)),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"doc-code"},[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("div",{staticClass:"doc-code"},[n("pre",{class:{bg:e.bg}},[e._v("                "),n("code",{ref:"code2",class:e.language}),e._v("\n            ")])])])],1)}),[],!1,null,null,null);t.a=s.exports},701:function(e,t,n){"use strict";n(289);var o=n(710),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},d=(n(706),n(1)),a=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);t.a=a.exports},702:function(e,t,n){"use strict";var o=n(697);n.n(o).a},703:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,".doc-code .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n.doc-code .hljs-doctype {\n  color: #999;\n}\n.doc-code .hljs-tag {\n  color: #3e76f6;\n}\n.doc-code .hljs-attribute {\n  color: #e96900;\n}\n.doc-code .hljs-value {\n  color: #42b983;\n}\n.doc-code .hljs-name {\n  color: #63a35c;\n  font-weight: bold;\n}\n.doc-code .hljs-keyword {\n  color: #e96900;\n}\n.doc-code .hljs-string {\n  color: #42b983;\n}\n.doc-code .hljs-comment {\n  color: #b3b3b3;\n}\n.doc-code .hljs-operator .hljs-comment {\n  color: #525252;\n}\n.doc-code .hljs-regexp {\n  color: #af7dff;\n}\n.doc-code .hljs-built_in {\n  color: #2db7f5;\n}\n.doc-code div {\n  position: relative;\n  font-size: 14px;\n}\n.doc-code span.copy,\n.doc-code span.scale,\n.doc-code span.open-fiddle {\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: #b2b2b2;\n  cursor: pointer;\n}\n.doc-code span.scale {\n  right: 25px;\n}\n.doc-code span.open-fiddle {\n  right: 50px;\n}\n.doc-code .bg {\n  margin: 20px auto;\n}\n.doc-code .bg + span.copy {\n  right: 5px;\n}\n.doc-code span.copy:hover,\n.doc-code span.scale:hover,\n.doc-code span.open-fiddle:hover {\n  color: #5c6b77;\n}\n.doc-code code {\n  margin: 0;\n  background: none;\n  border-radius: 0;\n  font-size: 1em;\n  border: none;\n}\n",""])},704:function(e,t,n){"use strict";var o=n(698);n.n(o).a},705:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},706:function(e,t,n){"use strict";var o=n(699);n.n(o).a},707:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},715:function(e,t,n){"use strict";var o={},l={type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]},d={status:"1"};o.data={field:l,model:d},o.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(l)+",\n            model: "+JSON.stringify(d)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var a={},i={type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]},r={status:["1","2"]};a.data={field:i,model:r},a.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(i)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',t.a={simple:o,multiple:a}},728:function(e,t,n){var o=n(773);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(45).default)("3ede7255",o,!0,{})},772:function(e,t,n){"use strict";var o=n(728);n.n(o).a},773:function(e,t,n){(e.exports=n(44)(!1)).push([e.i,"\n.fg-ivu-input[data-v-474951f6] {\n    margin-top: 20px;\n}\n",""])},828:function(e,t,n){"use strict";n.r(t);var o=n(708),l=n(709),d=n(700),a=n(701),i={},r={type:"Text",model:"username"},s={username:"Alex"};i.data={field:r,model:s},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(s)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var c={},v={type:"Text",model:"username",options:[{label:"张三",value:"zhangsan"},{label:"王五",value:"wangwu"}]},m={username:"zhangsan"};c.data={field:v,model:m},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(m)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var _={},p={type:"Text",model:"username",options:[{label:"张三",value:"zhangsan"},{label:"王五",value:"wangwu"}]},h={username:"zhangsan1"};_.data={field:p,model:h},_.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(p)+",\n            model: "+JSON.stringify(h)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var u={},g={type:"Text",model:"username",nullValue:"空",options:[{label:"张三",value:"zhangsan"},{label:"王五",value:"wangwu"}]},f={username:"zhangsan1"};u.data={field:g,model:f},u.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(g)+",\n            model: "+JSON.stringify(f)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var x={},y={type:"Text",model:"username",nullValue:null,options:[{label:"张三",value:"zhangsan"},{label:"王五",value:"wangwu"}]},b={username:"zhangsan1"};x.data={field:y,model:b},x.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(y)+",\n            model: "+JSON.stringify(b)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var F={},C={type:"Text",model:"username",options:[{label:"张三",value:"zhangsan"},{label:"王五",value:"wangwu"}]},w={username:["zhangsan","wangwu"]};F.data={field:C,model:w},F.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(C)+",\n            model: "+JSON.stringify(w)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var S={},k={type:"Text",model:"username",options:"/textApi"},N={username:"zhangsan"};S.data={field:k,model:N},S.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(k)+",\n            model: "+JSON.stringify(N)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var O={simple:i,optionExample:c,arrayExample:F,remote:S,nullExample:_,myNullExample:u,originalNullExample:x},T={components:{iArticle:o.a,inAnchor:l.a,iCode:d.a,Demo:a.a},data:()=>({code:O}),methods:{handleFieldChange(e,t){console.log(e,t)}}},A=(n(772),n(1)),J=Object(A.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Text")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("基本文本组件")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("映射列表，如[{label: '西瓜', 'value': '1'},{label: '苹果', 'value': '2'}, {label: '梨', 'value': '3', disabled: true}]")]),e._v(" "),n("td",[e._v("Array(option)")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("nullValue")]),e._v(" "),n("td",[e._v("当value值不存在于options列表时，text项显示的值"),n("br"),e._v("当nullValue为null时，展示原始value值")]),e._v(" "),n("td",[e._v("String|null")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"option配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("展示项名称")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("展示项值")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Text。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"options用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.optionExample.data.model}},[n("FieldGenerator",{attrs:{field:e.code.optionExample.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Text。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.remote.code))])],1),e._v(" "),n("Demo",{attrs:{title:"远程options用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.remote.data.model}},[n("FieldGenerator",{attrs:{field:e.code.remote.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Text。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.remote.code))])],1),e._v(" "),n("Demo",{attrs:{title:"model值为array用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.arrayExample.data.model}},[n("FieldGenerator",{attrs:{field:e.code.arrayExample.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Text。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.arrayExample.code))])],1),e._v(" "),n("Demo",{attrs:{title:"model值在option中不存在的情况"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.nullExample.data.model}},[n("FieldGenerator",{attrs:{field:e.code.nullExample.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Text。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.nullExample.code))])],1),e._v(" "),n("Demo",{attrs:{title:"自定义空值"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.myNullExample.data.model}},[n("FieldGenerator",{attrs:{field:e.code.myNullExample.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Text。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.myNullExample.code))])],1),e._v(" "),n("Demo",{attrs:{title:"自定义空值为null"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.originalNullExample.data.model}},[n("FieldGenerator",{attrs:{field:e.code.originalNullExample.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("当空值为null时，显示本来的value值")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.originalNullExample.code))])],1)],1)])}),[],!1,null,"474951f6",null).exports;t.default=J},829:function(e,t,n){"use strict";n.r(t);var o=n(708),l=n(709),d=n(700),a=n(701),i={},r={type:"Tree",label:"树形多选",model:"permissions",multiple:!0,checkDirectly:!0,showCheckbox:!0,options:[{id:"1",title:"用户管理",children:[{id:"2",title:"查看用户"},{id:"3",title:"新增用户"},{id:"4",title:"编辑用户"},{id:"5",title:"删除用户"},{id:"11",title:"编辑用户角色"}]},{id:"6",title:"角色管理",children:[{id:"7",title:"查看角色"},{id:"8",title:"新增角色"},{id:"9",title:"编辑角色"},{id:"10",title:"删除角色"}]}]},s={status:"1"};i.data={field:r,model:s},i.code="\n<script>\nconst field = "+JSON.stringify(r,null,4)+";\nconst model = "+JSON.stringify(s,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model,\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-field-change='handleFieldChange'\n        />\n    </Form>\n</template>\n";var c={},v={type:"Tree",label:"树形多选",model:"permissions",multiple:!0,showCheckbox:!0,checkDirectly:!0,options:"/treeOptionApi"},m={status:"1"};c.data={field:v,model:m},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(m)+"\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-field-change='handleFieldChange'\n        />\n    </Form>\n</template>\n";var _={simple:i,remote:c},p={components:{iArticle:o.a,inAnchor:l.a,iCode:d.a,Demo:a.a},data:()=>({code:_}),methods:{handleFieldChange(e,t){console.log(e,t)}}},h=n(1),u=Object(h.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Tree")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("time")])]),e._v(" "),n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("Tree")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("data")]),e._v(" "),n("td",[e._v("可嵌套的节点属性的数组，生成 tree 的数据")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("multiple")]),e._v(" "),n("td",[e._v("是否支持多选")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("show-checkbox")]),e._v(" "),n("td",[e._v("是否显示多选框")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("check-strictly")]),e._v(" "),n("td",[e._v("在显示复选框的情况下，是否严格的遵循父子不互相关联的做法")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"Tree events",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-select-change")]),e._v(" "),n("td",[e._v("点击树节点时触发")]),e._v(" "),n("td",[e._v("当前已选中的节点数组、当前项")])]),e._v(" "),n("tr",[n("td",[e._v("on-check-change")]),e._v(" "),n("td",[e._v("点击复选框时触发")]),e._v(" "),n("td",[e._v("当前已勾选节点的数组、当前项")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("基础用法")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"remote"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.remote.data.model}},[n("FieldGenerator",{attrs:{field:e.code.remote.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("远程数据")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.remote.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=u},830:function(e,t,n){"use strict";n.r(t);var o=n(708),l=n(709),d=n(700),a=n(701),i={},r={type:"TableSelect",label:"角色选择",multiple:!0,model:"roles",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:[{id:"1",name:"admin",description:"超级管理员，拥有所有权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:"2",name:"user",description:"普通用户，只有浏览的权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:"3",name:"editor",description:"编辑，可以编辑、发布文章等",create_time:"2019-9-10",update_time:"2019-10-10"},{id:"4",name:"auditor",description:"审核人员，可以查看、审核文案",create_time:"2019-9-10",update_time:"2019-10-10"}]},s={roles:["1","2"]};i.data={field:r,model:s},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(s)+"\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-field-change='handleFieldChange'\n        />\n    </Form>\n</template>\n";var c={},v={type:"TableSelect",label:"角色选择",multiple:!0,model:"roles",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:"/tableSelectOptionsApi"},m={roles:["1","2"]};c.data={field:v,model:m},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(m)+"\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-field-change='handleFieldChange'\n        />\n    </Form>\n</template>\n";var _={},p={type:"TableSelect",label:"角色选择",multiple:!1,model:"roles",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:[{id:"1",name:"admin",description:"超级管理员，拥有所有权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:"2",name:"user",description:"普通用户，只有浏览的权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:"3",name:"editor",description:"编辑，可以编辑、发布文章等",create_time:"2019-9-10",update_time:"2019-10-10"},{id:"4",name:"auditor",description:"审核人员，可以查看、审核文案",create_time:"2019-9-10",update_time:"2019-10-10"}]},h={roles:"1"};_.data={field:p,model:h},_.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(p)+",\n            model: "+JSON.stringify(h)+"\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-field-change='handleFieldChange'\n        />\n    </Form>\n</template>\n";var u={simple:i,remote:c,single:_},g={components:{iArticle:o.a,inAnchor:l.a,iCode:d.a,Demo:a.a},data:()=>({code:u}),methods:{handleFieldChange(e,t){console.log(e,t)}}},f=n(1),x=Object(f.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("TableSelect")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("支持单选/多选表格")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("表格选择器的类型，不可改")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("TableSelect")])]),e._v(" "),n("tr",[n("td",[e._v("columns")]),e._v(" "),n("td",[e._v("列定义,需要存在key&&title,必填")]),e._v(" "),n("td",[e._v("Array[Object]")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("索引名称（必填）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不为空")])]),e._v(" "),n("tr",[n("td",[e._v("api")]),e._v(" "),n("td",[e._v("获取选项的接口")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("''，api的返回值格式为{status: 0, data: [\n                            {\n                            'id': '1',\n                            'name': 'admin',\n                            'description': '超级管理员，拥有所有权限',\n                            'create_time': '2019-9-10',\n                            'update_time': '2019-10-10'\n                            }]}\n                        ")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("选项列表或者选项数据接口，如[\n                            {\n                            'id': '1',\n                            'name': 'admin',\n                            'description': '超级管理员，拥有所有权限',\n                            'create_time': '2019-9-10',\n                            'update_time': '2019-10-10'\n                            }]\n                        ")]),e._v(" "),n("td",[e._v("Array(option) | String")]),e._v(" "),n("td",[e._v("[] | '', 如果为String则为获取选项数据的api。"),n("br")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"扩展配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("multiple")]),e._v(" "),n("td",[e._v("是否多选")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("表格选择器的左侧标签")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("border")]),e._v(" "),n("td",[e._v("是否显示纵向边框")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("基础用法")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"远程"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.remote.data.model}},[n("FieldGenerator",{attrs:{field:e.code.remote.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("远程")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.remote.code))])],1),e._v(" "),n("Demo",{attrs:{title:"单选"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.single.data.model}},[n("FieldGenerator",{attrs:{field:e.code.single.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("单选")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.single.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=x},851:function(e,t,n){"use strict";n.r(t);var o=n(708),l=n(709),d=n(700),a=n(701),i=n(715),r={components:{iArticle:o.a,inAnchor:l.a,iCode:d.a,Demo:a.a},data:()=>({code:i.a}),methods:{handleFieldChange(e,t){console.log(e,t)}}},s=n(1),c=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Tag")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("创建单标签/标签组")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("标签的类型，不可改")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Tag")])]),e._v(" "),n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("索引名称（必填）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不为空")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("标签类型的配置集合，如:\n                                "),n("pre",[e._v("[\n    {\n        name: '正常',\n        value: '1',\n        color: 'primary'\n    },\n    {\n        name: '黑用户',\n        value: '2',\n        color: 'error'\n    }\n]\n                                ")])]),e._v(" "),n("td",[e._v("Array("),n("a",{attrs:{href:"#TagOptions"}},[e._v("TagOptions")]),e._v(")")]),e._v(" "),n("td",[e._v("[]"),n("br")])]),e._v(" "),n("tr",[n("td",[e._v("subtype")]),e._v(" "),n("td",[e._v("默认标签的样式类型，可选值为 border、dot或不填")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("color")]),e._v(" "),n("td",[e._v("\n                                默认标签颜色，预设颜色值为default、primary、success、warning、error、blue、green、red、yellow、pink、magenta、volcano、orange、gold、lime、cyan、geekblue、purple，你也可以自定义颜色值。\n                            ")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("default")])]),e._v(" "),n("tr",[n("td",[e._v("fade")]),e._v(" "),n("td",[e._v("默认是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"TagOptions",h3:"",id:"TagOptions"}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("subtype")]),e._v(" "),n("td",[e._v("标签的样式类型，可选值为 border、dot或不填")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("color")]),e._v(" "),n("td",[e._v("\n                                标签颜色，预设颜色值为default、primary、success、warning、error、blue、green、red、yellow、pink、magenta、volcano、orange、gold、lime、cyan、geekblue、purple，你也可以自定义颜色值。\n                            ")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("default")])]),e._v(" "),n("tr",[n("td",[e._v("fade")]),e._v(" "),n("td",[e._v("是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("name")]),e._v(" "),n("td",[e._v("当前标签的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p")]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"数组"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.multiple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.multiple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p")]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.multiple.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=c}}]);