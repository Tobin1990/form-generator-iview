(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{199:function(t,e,o){var a=o(205);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o(13).default)("e91641ce",a,!0,{})},200:function(t,e,o){var a=o(207);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o(13).default)("81bb6994",a,!0,{})},201:function(t,e,o){var a=o(209);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o(13).default)("ef5e7348",a,!0,{})},202:function(t,e,o){"use strict";o(83);var a=o(212),d={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let t={};return this.ready&&(this.showCode?t.height=this.code_height+"px":t.height=this.demo_height+"px"),t},style(){let t={opacity:1};return this.isCodeHide&&!this.showCode&&(t.opacity=0),t},title_link(){return a.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const t=this.$children[0].$children[0].$el.clientHeight,e=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=e,e<=t&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:t,this.ready=!0})}}},i=(o(208),o(0)),n=Object(i.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Row",{staticClass:"example",class:{"example-vertical":t.isVertical},attrs:{id:t.title_link}},[o("i-col",{staticClass:"example-demo",attrs:{span:t.isVertical?24:10}},[o("div",{staticClass:"example-case"},[t._t("demo")],2),t._v(" "),o("header",{staticClass:"example-header"},[o("span",[t._v("\n                "+t._s(t.title)+"\n                "),o("a",{attrs:{href:"#"+t.title_link,"data-title":t.title}},[t._v("#")])])]),t._v(" "),o("div",{staticClass:"example-desc"},[t._t("desc")],2)]),t._v(" "),o("div",{staticClass:"example-split"}),t._v(" "),o("i-col",{staticClass:"example-code",style:t.codeHeight,attrs:{span:t.isVertical?24:14}},[o("div",{style:t.style},[t._t("code")],2),t._v(" "),t.showMore?o("div",{staticClass:"example-code-more",on:{click:function(e){t.showCode=!t.showCode}}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),t._v(" "),o("Icon",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),t._v(" "),o("i-button",{directives:[{name:"show",rawName:"v-show",value:t.isCodeHide&&!t.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===t.lang?[t._v("显示代码")]:[t._v("Show Code")]],2)],1):t._e()])],1)},[],!1,null,null,null);e.a=n.exports},203:function(t,e,o){"use strict";o(213),o(84),o(83);var a=o(214),d=o.n(a),i=(o(215),o(216)),n=o.n(i),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,d.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,d.a.highlightBlock(this.$refs.code2);const t=this.$parent.$parent.$parent;"Demo"===t.$options.name&&(this.title=t.title)},methods:{clip(){const t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),e=new n.a(".copy",{text:()=>t});e.on("success",t=>{t.clearSelection(),e.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(t,e){const o=new RegExp("<"+e+"[^>]*>");let a=t.match(o);return a?(a=a[0],t.slice(t.indexOf(a)+a.length,t.lastIndexOf("</"+e+">"))):""},openFiddle(){}}},l=(o(204),o(206),o(0)),r=Object(l.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("pre",{class:{bg:t.bg}},[o("code",{ref:"code",class:t.language},[t._t("default")],2)]),t._v(" "),o("span",{staticClass:"scale",on:{click:t.scale}},[o("Tooltip",{attrs:{content:t.$t("index.code_fullscreen"),placement:"top",transfer:""}},[o("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),t._v(" "),o("span",{staticClass:"copy",on:{click:t.clip}},[o("Tooltip",{attrs:{content:t.$t("index.code_copy"),placement:"top",transfer:""}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),t._v(" "),o("Icon",{directives:[{name:"show",rawName:"v-show",value:t.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),t._v(" "),o("Modal",{attrs:{"class-name":"code-scale-modal",title:t.title,width:"65"},model:{value:t.openScale,callback:function(e){t.openScale=e},expression:"openScale"}},[o("pre",{class:{bg:t.bg}},[t._v("            "),o("code",{ref:"code2",class:t.language}),t._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);e.a=r.exports},204:function(t,e,o){"use strict";var a=o(199);o.n(a).a},205:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(t,e,o){"use strict";var a=o(200);o.n(a).a},207:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(t,e,o){"use strict";var a=o(201);o.n(a).a},209:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},323:function(t,e,o){"use strict";o.r(e);var a=o(210),d=o(211),i=o(203),n=o(202);let s={};const l={type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"unknown",disabled:!0}]},r={gender:"F"};s.data={field:l,model:r},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(l)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let c={};const v={type:"Radio",model:"gender",options:"/radioApi"},_={gender:"F"};c.data={field:v,model:_},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(_)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';let p={};const m={type:"Radio",model:"fruit",options:"/radioApi",subtype:"button"},h={fruit:"F"};p.data={field:m,model:h},p.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(m)+",\n            model: "+JSON.stringify(h)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var u={simple:s,api:c,button:p},g={components:{iArticle:a.a,inAnchor:d.a,iCode:i.a,Demo:n.a},data:()=>({code:u}),methods:{handleFieldChange(t,e){console.log(t,e)}}},f=o(0),b=Object(f.a)(g,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i-article",[o("article",[o("h1",[t._v("Radio")]),t._v(" "),o("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),o("p",[t._v("基本组件-单选框。主要用于一组可选项单项选择")]),t._v(" "),o("div",{staticClass:"api"},[o("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),o("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("model")]),t._v(" "),o("td",[t._v("绑定的值的名称")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("不可为空")])]),t._v(" "),o("tr",[o("td",[t._v("options")]),t._v(" "),o("td",[t._v("选项列表或者选项数据接口，如[{label: '男', 'value': 'M'},{label: '女', 'value': 'F'}, {label: '保密', 'value': 'unknown', disabled: true}]")]),t._v(" "),o("td",[t._v("Array(option) | String")]),t._v(" "),o("td",[t._v("[] | '', 如果为String则为获取选项数据的api。")])]),t._v(" "),o("tr",[o("td",[t._v("api")]),t._v(" "),o("td",[t._v("获取选项的接口")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("''，api的返回值格式为{status: 0, data: [{label: '男', 'value': 'M'}]}")])]),t._v(" "),o("tr",[o("td",[t._v("subtype")]),t._v(" "),o("td",[t._v("可选值为 button 或不填，为 button 时使用按钮样式")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("size")]),t._v(" "),o("td",[t._v("尺寸，可选值为"),o("code",[t._v("large")]),t._v("、"),o("code",[t._v("small")]),t._v("、"),o("code",[t._v("default")]),t._v("或者不设置")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("vertical")]),t._v(" "),o("td",[t._v("是否垂直排列，按钮样式下无效")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])])])]),t._v(" "),o("inAnchor",{attrs:{title:"选项配置",h3:""}}),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("label")]),t._v(" "),o("td",[t._v("选项展示名称")]),t._v(" "),o("td",[t._v("String|Number")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("value")]),t._v(" "),o("td",[t._v("选项的值")]),t._v(" "),o("td",[t._v("String | Number")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("disabled")]),t._v(" "),o("td",[t._v("是否禁用该选项")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])])])])],1),t._v(" "),o("inAnchor",{attrs:{title:"代码示例",h2:""}}),t._v(" "),o("Demo",{attrs:{title:"基础用法"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.simple.data.model}},[o("FieldGenerator",{attrs:{field:t.code.simple.data.field},on:{"on-field-change":t.handleFieldChange}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field")]),t._v(", "),o("code",[t._v("model")]),t._v("即可生成一个Radio。")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.simple.code))])],1),t._v(" "),o("Demo",{attrs:{title:"使用api获取选项信息"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.api.data.model}},[o("FieldGenerator",{attrs:{field:t.code.api.data.field,"form-model":t.code.api.data.model}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field.api")]),t._v("可以动态获取选项信息")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.api.code))])],1),t._v(" "),o("Demo",{attrs:{title:"Button形态"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.button.data.model}},[o("FieldGenerator",{attrs:{field:t.code.button.data.field,"form-model":t.code.button.data.model}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field.subtype")]),t._v("为"),o("code",[t._v("button")]),t._v("可以展示为button形态")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.button.code))])],1)],1)])},[],!1,null,null,null).exports;e.default=b},324:function(t,e,o){"use strict";o.r(e);var a=o(210),d=o(211),i=o(203),n=o(202);let s={};const l={type:"RadioCard",model:"card",showRadio:!1,cardWidth:"220px",cardHeight:"155px",options:[{id:"11",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]},r={card:[]};s.data={field:l,model:r},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(l)+",\n            model: "+JSON.stringify(r)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";let c={};const v={type:"RadioCard",model:"card",pageLation:!0,pageSize:2,cardWidth:"220px",cardHeight:"185px",options:[{id:"44",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：44这是北京鸟巢",header:"美丽北京"},{id:"55",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：55这是上海",header:"美丽上海"},{id:"66",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：66这是北京鸟巢",header:"美丽北京"},{id:"77",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：77这是上海",header:"美丽上海"},{id:"88",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：88这是北京鸟巢",header:"美丽北京"},{id:"99",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：99这是上海",header:"美丽上海"}]},_={card:[]};c.data={field:v,model:_},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(_)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";let p={};const m={type:"RadioCard",model:"card",pageLation:!0,pageSize:3,cardWidth:"220px",cardHeight:"245px",options:"/radioCardApi"},h={card:[]};p.data={field:m,model:h},p.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(m)+",\n            model: "+JSON.stringify(h)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";let u={};const g={type:"RadioCard",model:"card",cardWidth:"220px",cardHeight:"185px",openCarousel:!0,carouselOptions:{loop:!1,radiusDot:!1},options:[{id:"carousel1",footer:"大北京夜上海",header:"美丽中国",urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"]},{id:"carousel2",footer:"夜上海大北京",header:"中华大地",urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"]}]},f={card:[]};u.data={field:g,model:f},u.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(g)+",\n            model: "+JSON.stringify(f)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var b={simple:s,page:c,api:p,carousel:u},F={components:{iArticle:a.a,inAnchor:d.a,iCode:i.a,Demo:n.a},data:()=>({code:b}),computed:{pageModel(){return this.code.page.data.model}},watch:{pageModel:{handler(){},deep:!0}},methods:{handleClick(){}}},x=o(0),y=Object(x.a)(F,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i-article",[o("article",[o("h1",[t._v("RadioCard 选择框卡片")]),t._v(" "),o("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),o("p",[t._v("基本组件-选择框卡片。主要用于可选的卡片-支持图片和视频显示")]),t._v(" "),o("div",{staticClass:"api"},[o("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),o("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("model")]),t._v(" "),o("td",[t._v("绑定的值的名称")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("不可为空")])]),t._v(" "),o("tr",[o("td",[t._v("options")]),t._v(" "),o("td",[t._v("选项列表,如\n                                "),o("pre",[t._v("[\n    {\n        type: '',\n        url: '',\n        showRadio: true,\n        disabled: false\n    }\n]\n                                ")])]),t._v(" "),o("td",[t._v("Array(option) | String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("optionsType")]),t._v(" "),o("td",[t._v("内容类型(图片:image,视频:video)")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("image")])]),t._v(" "),o("tr",[o("td",[t._v("api")]),t._v(" "),o("td",[t._v("获取选项的接口")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("''，api的返回值格式为:\n                                "),o("pre",[t._v('{\n    status: 0,\n    data: [\n        {\n            "id": "",\n            "url": ""\n        }\n    ]\n}\n                                ')])])]),t._v(" "),o("tr",[o("td",[t._v("showRadio")]),t._v(" "),o("td",[t._v("是否展示卡片radio")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("true")])]),t._v(" "),o("tr",[o("td",[t._v("cardWidth")]),t._v(" "),o("td",[t._v("Card宽度")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("220px")])]),t._v(" "),o("tr",[o("td",[t._v("cardHeight")]),t._v(" "),o("td",[t._v("Card高度")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("220px")])]),t._v(" "),o("tr",[o("td",[t._v("pageLation")]),t._v(" "),o("td",[t._v("是否分页")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("pageSize")]),t._v(" "),o("td",[t._v("每页条数")]),t._v(" "),o("td",[t._v("Number")]),t._v(" "),o("td",[t._v("10")])]),t._v(" "),o("tr",[o("td",[t._v("videoControl")]),t._v(" "),o("td",[t._v("视频源是否展示播放控件")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("openCarousel")]),t._v(" "),o("td",[t._v("开启走马灯。true：开启，需要配置options.urls")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions")]),t._v(" "),o("td",[t._v("走马灯配置信息，如\n                                "),o("pre",[t._v("{\n    value: 0,\n    loop: false,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    dots: inside,\n    radiusDot: false,\n    trigger: click,\n    arrow: hover,\n    easing: ease\n}\n                                ")])]),t._v(" "),o("td",[t._v("Object")]),t._v(" "),o("td",[t._v("-")])])])]),t._v(" "),o("inAnchor",{attrs:{title:"选项配置",h3:""}}),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("options.url")]),t._v(" "),o("td",[t._v("内容地址（默认，不启用走马灯）")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("options.header")]),t._v(" "),o("td",[t._v("头部信息")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("options.footer")]),t._v(" "),o("td",[t._v("尾部信息")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("options.disabled")]),t._v(" "),o("td",[t._v("是否禁用该选项")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("options.urls")]),t._v(" "),o("td",[t._v("走马灯数据（启用走马灯）")]),t._v(" "),o("td",[t._v("Array")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.value")]),t._v(" "),o("td",[t._v("幻灯片的索引，从 0 开始")]),t._v(" "),o("td",[t._v("Number")]),t._v(" "),o("td",[t._v("0")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.loop")]),t._v(" "),o("td",[t._v("是否开启循环")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.autoplay")]),t._v(" "),o("td",[t._v("是否自动切换")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.autoplaySpeed")]),t._v(" "),o("td",[t._v("自动切换的时间间隔，单位为毫秒")]),t._v(" "),o("td",[t._v("Number")]),t._v(" "),o("td",[t._v("2000")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.dots")]),t._v(" "),o("td",[t._v("指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("inside")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.radiusDot")]),t._v(" "),o("td",[t._v("是否显示圆形指示器")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.trigger")]),t._v(" "),o("td",[t._v("指示器的触发方式，可选值为 click（点击），hover（悬停）")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("click")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.arrow")]),t._v(" "),o("td",[t._v("切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("hover")])]),t._v(" "),o("tr",[o("td",[t._v("carouselOptions.easing")]),t._v(" "),o("td",[t._v("动画效果")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("ease")])])])])],1),t._v(" "),o("inAnchor",{attrs:{title:"代码示例",h2:""}}),t._v(" "),o("Demo",{attrs:{title:"基础用法",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.simple.data.model}},[o("FieldGenerator",{attrs:{field:t.code.simple.data.field}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field")]),t._v(", "),o("code",[t._v("model")]),t._v("即可生成一个RadioCard。")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.simple.code))])],1),t._v(" "),o("Demo",{attrs:{title:"分页",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.page.data.model}},[o("FieldGenerator",{attrs:{field:t.code.page.data.field}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field.pageLation")]),t._v("可以控制是否本地分页。")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.page.code))])],1),t._v(" "),o("Demo",{attrs:{title:"api",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.api.data.model}},[o("FieldGenerator",{attrs:{field:t.code.api.data.field}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field.options")]),t._v("可以是接口地址")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.api.code))])],1),t._v(" "),o("Demo",{attrs:{title:"走马灯",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:t.code.carousel.data.model}},[o("FieldGenerator",{attrs:{field:t.code.carousel.data.field}})],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[t._v("通过设置"),o("code",[t._v("field.openCarousel")]),t._v("可以开启走马灯")])]),t._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.carousel.code))])],1)],1)])},[],!1,null,null,null).exports;e.default=y}}]);