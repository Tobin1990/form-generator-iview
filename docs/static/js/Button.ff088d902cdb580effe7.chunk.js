(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,t,n){var o=n(205);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("e91641ce",o,!0,{})},200:function(e,t,n){var o=n(207);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("81bb6994",o,!0,{})},201:function(e,t,n){var o=n(209);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("ef5e7348",o,!0,{})},202:function(e,t,n){"use strict";n(213),n(84),n(83);var o=n(214),d=n.n(o),l=(n(215),n(216)),a=n.n(l),i={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,d.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,d.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new a.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},r=(n(204),n(206),n(0)),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=s.exports},203:function(e,t,n){"use strict";n(83);var o=n(212),d={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},l=(n(208),n(0)),a=Object(l.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=a.exports},204:function(e,t,n){"use strict";var o=n(199);n.n(o).a},205:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(e,t,n){"use strict";var o=n(200);n.n(o).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(e,t,n){"use strict";var o=n(201);n.n(o).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},218:function(e,t,n){"use strict";let o={};const d={type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]},l={status:"1"};o.data={field:d,model:l},o.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(d)+",\n            model: "+JSON.stringify(l)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let a={};const i={type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]},r={status:["1","2"]};a.data={field:i,model:r},a.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(i)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',t.a={simple:o,multiple:a}},308:function(e,t,n){"use strict";n.r(t);var o=n(210),d=n(211),l=n(202),a=n(203);let i={};const r={type:"Slider",model:"percent",showInput:!0,left:!0,step:20,inputSize:"default"},s={percent:30};i.data={field:r,model:s},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(s)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let v={};const c={type:"Slider",model:"percent",range:!0,step:10,inputSize:"default"},_={percent:[30,80]};v.data={field:c,model:_},v.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(c)+",\n            model: "+JSON.stringify(_)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var p={simple:i,range:v},m={components:{iArticle:o.a,inAnchor:d.a,iCode:l.a,Demo:a.a},data:()=>({code:p}),methods:{handleFieldChange(e,t){console.log(e,t)}}},h=n(0),u=Object(h.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("slider 示例")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("选择比例")]),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Slider。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=u},309:function(e,t,n){"use strict";n.r(t);var o=n(210),d=n(211),l=n(202),a=n(203);let i={};const r={type:"List",model:"imgs",cardWidth:"220px",cardHeight:"150px"},s={imgs:[{id:"11",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{id:"12",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]};i.data={field:r,model:s},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(s)+"\n        };\n    }\n    methods: {\n        handleClick(value) {\n            console.log(value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-checkboxCard-click='handleClick'\n        />\n    </Form>\n</template>\n";var v={simple:i},c={components:{iArticle:o.a,inAnchor:d.a,iCode:l.a,Demo:a.a},data:()=>({code:v}),methods:{handleClick(){}}},_=n(0),p=Object(_.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("List 列表")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("基本组件-列表。主要用于列表数据的展示-支持图片和视频显示")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("optionsType")]),e._v(" "),n("td",[e._v("内容类型(图片:image,视频:video)")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("image")])]),e._v(" "),n("tr",[n("td",[e._v("cardWidth")]),e._v(" "),n("td",[e._v("Card宽度")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("220px")])]),e._v(" "),n("tr",[n("td",[e._v("cardHeight")]),e._v(" "),n("td",[e._v("Card高度")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("220px")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"选项配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("value.url")]),e._v(" "),n("td",[e._v("内容地址")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("value.header")]),e._v(" "),n("td",[e._v("头部信息")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("value.footer")]),e._v(" "),n("td",[e._v("尾部信息")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"事件",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("方法名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-list-item-click")]),e._v(" "),n("td",[e._v("点击列表项时触发")]),e._v(" "),n("td",[e._v("当前项")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-checkboxCard-click":e.handleClick}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个List。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=p},310:function(e,t,n){"use strict";n.r(t);var o=n(210),d=n(211),l=n(202),a=n(203);let i={};const r={type:"Steps",model:"step",options:[{title:"已完成",content:"这里是该步骤的描述信息"},{title:"进行中",content:"这里是该步骤的描述信息"},{title:"待进行",content:"这里是该步骤的描述信息"}]},s={step:0};i.data={field:r,model:s},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(s)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let v={};const c={type:"Radio",model:"gender",options:"/radioApi"},_={gender:"F"};v.data={field:c,model:_},v.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(c)+",\n            model: "+JSON.stringify(_)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var p={simple:i,api:v},m={components:{iArticle:o.a,inAnchor:d.a,iCode:l.a,Demo:a.a},data:()=>({code:p}),methods:{handleFieldChange(e,t){console.log(e,t)}}},h=n(0),u=Object(h.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Steps")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("拆分某项流程的步骤，引导用户按流程完成任务。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("选项列表或者选项数据接口，如\n                                "),n("pre",[e._v("[\n    {title: '已完成', 'content': '这里是该步骤的描述信息'},\n    {title: '进行中', 'content': '这里是该步骤的描述信息'},\n    {title: '待进行', 'content': '这里是该步骤的描述信息'}\n]\n                                ")])]),e._v(" "),n("td",[e._v("Array(option) | String")]),e._v(" "),n("td",[e._v("[] | '', 如果为String则为获取选项数据的api。")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("尺寸，可选值为"),n("code",[e._v("large")]),e._v("、"),n("code",[e._v("small")]),e._v("、"),n("code",[e._v("default")]),e._v("或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("direction")]),e._v(" "),n("td",[e._v("步骤条的方向，可选值为horizontal（水平）或vertical（垂直）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("horizontal")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"选项配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("选项展示名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("status")]),e._v(" "),n("td",[e._v("步骤的状态，可选值为wait、process、finish、error，不设置时自动判断")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("content")]),e._v(" "),n("td",[e._v("步骤的详细描述，可选")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("icon")]),e._v(" "),n("td",[e._v("步骤的图标，可选")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("false")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Step。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=u},313:function(e,t,n){"use strict";n.r(t);var o=n(210),d=n(211),l=n(202),a=n(203);const i={id:"test-id000001",name:"张三的明细",detailUrl:"https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6",detailRoute:{path:"/home",query:{test:"aaa"}}},r={},s={type:"Button",text:"删除",subtype:"error",action:{type:"event",name:"delete"}};r.data={field:s,model:i},r.code="\n<script>\nconst field = "+JSON.stringify(s,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';const v={},c={type:"Button",model:"detailRoute",subtype:"primary",text:"详情",action:{type:"route"}};v.data={field:c,model:i},v.code="\n<script>\nconst field = "+JSON.stringify(c,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';const _={},p={type:"Button",model:"detailUrl",textModel:"name",subtype:"text",action:{type:"url"}};_.data={field:p,model:i},_.code="\n<script>\nconst field = "+JSON.stringify(p,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';const m={},h={type:"Button",model:"detailUrl",subtype:"primary",text:"详情",action:{type:"url"}};m.data={field:h,model:i},m.code="\n<script>\nconst field = "+JSON.stringify(h,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let u={};const f={type:"Button",text:"删除",subtype:"error",action:{type:"ajax",api:"/curdDelete",method:"get"}};u.data={field:f,model:i},u.code="\n<script>\nconst field = "+JSON.stringify(f,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';const g={},x={confirmPoptip:{title:"确定删除?",placement:"right"},type:"Button",text:"删除",subtype:"error",action:{type:"ajax",api:"/curdDelete"}};g.data={field:x,model:i},g.code="\n<script>\nconst field = "+JSON.stringify(x,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var y={simple:r,route:v,textModel:_,url:m,ajax:u,confirm:g},b={components:{iArticle:o.a,inAnchor:d.a,iCode:l.a,Demo:a.a},data:()=>({code:y}),methods:{handleButtonEvent(e){console.log(e),this.$Message.info("event: "+e.name+" has been triggered")}}},F=n(0),C=Object(F.a)(b,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Button")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("基础组件-按钮。主要用于在配置表单中一些额外的交互操作。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("subtype")]),e._v(" "),n("td",[e._v("button 的样式")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("尺寸，可选值为"),n("code",[e._v("large")]),e._v("、"),n("code",[e._v("small")]),e._v("、"),n("code",[e._v("default")]),e._v("或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("textModel")]),e._v(" "),n("td",[e._v("按钮文案对应的model属性，指定后将从"),n("code",[e._v("form.model")]),e._v("里面获取按钮的文案")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("confirmPoptip")]),e._v(" "),n("td",[e._v("配置后，点击按钮，会触发确认提示")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("confirmPoptip.title")]),e._v(" "),n("td",[e._v("确认提示弹框的标题")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("confirmPoptip.placement")]),e._v(" "),n("td",[e._v("确认提示弹框的的位置")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("confirmPoptip.classes")]),e._v(" "),n("td",[e._v("确认提示弹框的的位置类名")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("action")]),e._v(" "),n("td",[e._v("按钮的行为配置")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("必填，且内置type不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("action.type")]),e._v(" "),n("td",[e._v("行为类型，目前支持事件、ajax请求、Route、Url四中形态，分别通过event、ajax、route、url来标识")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("必填")])]),e._v(" "),n("tr",[n("td",[e._v("action.name")]),e._v(" "),n("td",[e._v("当 action.type 为 event 时，需要指定name")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("当action.name为event时，必填")])]),e._v(" "),n("tr",[n("td",[e._v("action.api")]),e._v(" "),n("td",[e._v("当 action.type 为 ajax 时，需要指定api， 触发点击后会向该接口返送请求。")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("当 action.name 为 ajax 时，必填")])]),e._v(" "),n("tr",[n("td",[e._v("action.method")]),e._v(" "),n("td",[e._v("当 action.type 为 ajax 时，可以指定请求方式get、post、put等")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("非必填，默认值为get")])]),e._v(" "),n("tr",[n("td",[e._v("action.route")]),e._v(" "),n("td",[e._v("\n                                当 action.type 为 route 时，可以指定action.route， 触发点击后会向该接口返送请求。\n                                "),n("br"),e._v(" "),n("strong",[e._v("另外一种常用的指定action.route方法是，申明field.model（不支持foo.bar这种形式），然后会从form.model中获取对应的route值，参考下面的示例:")]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("form.model")]),e._v(" "),n("pre",[e._v(e._s(JSON.stringify(e.code.route.data.model,null,4))+"\n                                ")]),e._v(" "),n("span",[e._v("Button.field")]),e._v(" "),n("pre",[e._v(e._s(JSON.stringify(e.code.route.data.field,null,4))+"\n                                ")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("当 action.name 为 ajax 时，必填")])]),e._v(" "),n("tr",[n("td",[e._v("action.url")]),e._v(" "),n("td",[e._v("\n                                当 action.type 为 url 时，可以指定action.url， 触发点击后会向该接口返送请求。\n                                "),n("br"),e._v(" "),n("strong",[e._v("另外一种常用的指定action.url方法是，申明field.model（不支持foo.bar这种形式），然后会从form.model中获取对应的route值，参考下面的示例:")]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("form.model")]),e._v(" "),n("pre",[e._v(e._s(JSON.stringify(e.code.url.data.model,null,4))+"\n                                ")]),e._v(" "),n("span",[e._v("Button.field")]),e._v(" "),n("pre",[e._v(e._s(JSON.stringify(e.code.url.data.field,null,4))+"\n                                ")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("当 action.name 为 ajax 时，必填")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"事件",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{attrs:{width:"160"}},[e._v("方法名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("参数")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-button-event")]),e._v(" "),n("td",[e._v("\n                                action.type 为 event 时，点击按钮触发；\n                                "),n("br"),e._v("\n                                action.type 为 ajax 时，请求成功会 emit 一个 on-button-event 事件， name 为 ajaxSuccess。\n                            ")]),e._v(" "),n("td",[e._v("\n                                $event, 内部解构为({name, field})，其中name为事件名称，field为完整配置项。\n                                "),n("br"),e._v("\n                                如果\n                            ")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-button-event":e.handleButtonEvent}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v("即可生成一个Button按钮")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"从数据中获取按钮文案"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.textModel.data.model}},[n("FieldGenerator",{attrs:{field:e.code.textModel.data.field},on:{"on-button-event":e.handleButtonEvent}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.textModel")]),e._v("可以指定按钮的文案对应model的值。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.textModel.code))])],1),e._v(" "),n("Demo",{attrs:{title:"route"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.route.data.model}},[n("FieldGenerator",{attrs:{field:e.code.route.data.field},on:{"on-button-event":e.handleButtonEvent}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.action.type")]),e._v("为"),n("code",[e._v("route")]),e._v("可以跳转到指定的route")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.route.code))])],1),e._v(" "),n("Demo",{attrs:{title:"链接"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.url.data.model}},[n("FieldGenerator",{attrs:{field:e.code.url.data.field},on:{"on-button-event":e.handleButtonEvent}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.action.type")]),e._v("为"),n("code",[e._v("url")]),e._v("即可生成一个Button按钮")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.url.code))])],1),e._v(" "),n("Demo",{attrs:{title:"点击发送Ajax请求"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.ajax.data.model}},[n("FieldGenerator",{attrs:{field:e.code.ajax.data.field},on:{"on-button-event":e.handleButtonEvent}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("\n                        通过设置"),n("code",[e._v("field.action.type")]),e._v("为"),n("code",[e._v("ajax")]),e._v("，并设置"),n("code",[e._v("field.api")]),e._v("，即可通过点击按钮发送请求。\n                        "),n("br"),e._v("\n                        发送请求默认会携带form.model作为参数，可以通过paramsContainer传入外部参数，并可通过apiParams选择所需的参数。\n                    ")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.ajax.code))])],1),e._v(" "),n("Demo",{attrs:{title:"结合toolTip"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.ajax.data.model}},[n("FieldGenerator",{attrs:{field:e.code.confirm.data.field},on:{"on-button-event":e.handleButtonEvent}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("设置"),n("code",[e._v("field.confirmPoptip")]),e._v("，点击按钮会先出现确认弹框。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.confirm.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=C},342:function(e,t,n){"use strict";n.r(t);var o=n(210),d=n(211),l=n(218),a={components:{iArticle:o.a,inAnchor:d.a},data:()=>({code:l.a}),methods:{handleFieldChange(e,t){console.log(e,t)}}},i=n(0),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Reset")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("表单重置")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("标签的类型，不可改")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Reset")])])])])],1)],1)])},[],!1,null,null,null).exports;t.default=r},343:function(e,t,n){"use strict";n.r(t);var o=n(210),d=n(211),l=n(218),a={components:{iArticle:o.a,inAnchor:d.a},data:()=>({code:l.a}),methods:{handleFieldChange(e,t){console.log(e,t)}}},i=n(0),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Divider")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("分割线")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("水平还是垂直类型，可选值为 horizontal 或 vertical")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("horizontal")])]),e._v(" "),n("tr",[n("td",[e._v("orientation")]),e._v(" "),n("td",[e._v("分割线标题的位置，可选值为 left、right 或 center")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("center")])]),e._v(" "),n("tr",[n("td",[e._v("dashed")]),e._v(" "),n("td",[e._v("是否虚线")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("尺寸，可选值为 small 或 default")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("default")])])])])],1)],1)])},[],!1,null,null,null).exports;t.default=r}}]);