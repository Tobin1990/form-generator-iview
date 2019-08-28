(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{320:function(e,l,a){var t=a(347);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,a(16).default)("43cec848",t,!0,{})},346:function(e,l,a){"use strict";var t=a(320);a.n(t).a},347:function(e,l,a){(e.exports=a(15)(!1)).push([e.i,".container[data-v-1deb28eb] {\n  margin: 10px;\n}\n",""])},365:function(e,l,a){"use strict";a.r(l);a(87);var t=a(14);const i=[{type:"Divider",label:"输入框",orientation:"left",dashed:!0,size:"small"},{key:"1000",type:"Input",label:"输入框",model:"input",placeholder:"请输入用户名",required:!0,defaultHide:!1},{key:"10001",type:"Input",label:"用户名-禁用",model:"inputForbidden",readonly:!0,disabled:!0,placeholder:"请输入用户名",defaultHide:!1},{key:"10002",type:"Input",subtype:"textarea",label:"输入框",model:"textarea",placeholder:"请输入用户名",required:!0,defaultHide:!1},{key:"100021",type:"InputNumber",label:"数值多行输入框",model:"inputNumber",placeholder:"",required:!0},{type:"Divider",label:"下拉选择",orientation:"left",dashed:!0,size:"small"},{key:"1002",type:"Select",label:"单选下拉",model:"singleSelect",required:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{key:"100211",type:"Select",label:"单选下拉可搜索",model:"singleSelectApi",required:!0,api:"/selectApi",apiParams:["radio"]},{key:"10021",type:"Select",label:"多选下拉",multiple:!0,model:"multiSelect",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}],required:!0},{key:"10023",type:"Select",multiple:!0,label:"多选下拉支持搜索",api:"/selectApi",apiParams:["radio"],model:"multiSelectApi"},{type:"Divider",label:"单选框",orientation:"left",dashed:!0,size:"small"},{key:"1003",type:"Radio",label:"单选",model:"radio",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}],required:!0},{key:"100311",type:"Radio",subtype:"button",label:"单选按钮",model:"radioButton",required:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{type:"Divider",label:"复选框",orientation:"left",dashed:!0,size:"small"},{key:"1004",type:"Checkbox",label:"多选",model:"checkbox",checkAll:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四",value:"4"}],required:!0},{type:"Divider",label:"级联选择",orientation:"left",dashed:!0,size:"small"},{key:"1005",type:"Cascader",label:"省/城市/景点",model:"cascader",required:!0,changeType:"all",options:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林",children:[{value:"1",label:"选项一"},{value:"2",label:"选项2"}]}]}]}]},{key:"1005",type:"Cascader",label:"省/城市/景点-api",model:"cascaderApi",required:!0,api:"/cascaderApi",apiParams:["radio"],options:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]}]},{type:"Divider",label:"日期时间",orientation:"left",dashed:!0,size:"small"},{key:"10006",type:"DatePicker",subtype:"date",label:"日期选择",model:"date",placeholder:"",required:!0},{key:"100061",type:"DatePicker",subtype:"daterange",label:"日期区间选择",model:"daterange",placeholder:"",required:!0},{key:"100062",type:"DatePicker",subtype:"datetime",label:"日期时间选择",model:"datetime",placeholder:"",required:!0,editable:!0,clearable:!0},{key:"100063",type:"DatePicker",subtype:"datetimerange",label:"日期时间区间选择",model:"datetimerange",placeholder:"",required:!0},{type:"Divider",label:"逻辑输入",orientation:"left",dashed:!0,size:"small"},{key:"10007",type:"LogicInput",label:"逻辑输入",model:"logicInput",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"]},{key:"10008",type:"LogicSelect",label:"逻辑选择",model:"logicSelect",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四",value:"4"}]},{key:"100081",type:"LogicSelect",label:"逻辑选择Api",model:"logicSelectApi",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],api:"/selectApi",apiParams:["radio"]},{type:"Divider",label:"切换",orientation:"left",dashed:!0,size:"small"},{key:"10009",type:"Switch",label:"切换",trueValue:"A",falseValue:"B",model:"switch"},{type:"Divider",label:"文件上传",orientation:"left",dashed:!0,size:"small"},{key:"1000111111",type:"Upload",subtype:"drag",accept:"image/gif, image/jpeg, image/png",format:["jpg","jpeg","png"],maxSize:2e4,action:"/uploadApi",multiple:!1,paste:!0,disabled:!1,data:{userName:"bingblog"},withCredentials:!0,showUploadList:!0,apiParams:["radio"],label:"文件上传",model:"upload",tip:"上传的提示信息或者帮助信息"},{key:"10001111111",type:"ImgUpload",subtype:"drag",accept:"image/gif, image/jpeg, image/png",format:["jpg","jpeg","png"],maxSize:2e4,action:"/uploadApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,showUploadList:!0,apiParams:["radio"],label:"图片上传",model:"imgUpload",tip:"上传的提示信息或者帮助信息"},{key:"1002311a",type:"Select",label:"省",api:"/selectApi",model:"province"},{key:"100231aaa",type:"Select",label:"市",api:"/selectApi",apiParams:["province"],model:"cidy",defaultHide:!0},{key:"10023acc",type:"Select",label:"县",api:"/selectApi",apiParams:["province","cidy"],model:"town",defaultHide:!0},{type:"Submit",subtype:"primary",text:"提交",width:"50%",inline:!0},{type:"Reset",subtype:"primary",text:"重置",width:"50%",labelWidth:0,inline:!0}],o={input:"wangbing",inputForbidden:"wangbing",textarea:"啊啊啊啊啊",singleSelect:"1",radioButton:"1",singleSelectApi:"1",multiSelect:["1","2"],multiSelectApi:["1","2"],checkbox:["1","2"],radio:"1",date:"2016-01-01",daterange:["2016-01-01","2016-02-15"],datetime:"2019-04-22 00:00:00",datetimerange:["2019-04-22 00:00:00","2019-05-30 00:00:00"],cascader:["jiangsu","suzhou","shizilin","1"],cascaderApi:["jiangsu","suzhou","shizilin","2"],inputNumber:7,logicInput:{logic:"betweenIn",value:["1","2"]},logicSelect:{logic:"betweenIn",value:["1","2"]},logicSelectApi:{logic:"betweenIn",value:["1","2"]},switch:!1,upload:[{id:"13414214123412421341234",name:"img1img1img1img1img1.jpg",url:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3276523708,1156514398&fm=173&app=49&f=JPEG?w=218&h=146&s=DAB210C768C5AA471C5DFBA403007081"},{id:"13414214123412421341234",name:"img2img2img2img2img2.jpg",url:"https://pics1.baidu.com/feed/500fd9f9d72a6059c36c75cfc82edd9f023bba83.jpeg?token=e779a49797d7d1ed7ea5bf253dccd408&s=6151AB6415402EEE28D4C09B03009082"}],imgUpload:[{id:"13414214123412421341234",name:"img1img1img1img1img1.jpg",url:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3276523708,1156514398&fm=173&app=49&f=JPEG?w=218&h=146&s=DAB210C768C5AA471C5DFBA403007081"},{id:"13414214123412421341234",name:"img2img2img2img2img2.jpg",url:"https://pics1.baidu.com/feed/500fd9f9d72a6059c36c75cfc82edd9f023bba83.jpeg?token=e779a49797d7d1ed7ea5bf253dccd408&s=6151AB6415402EEE28D4C09B03009082"}],province:"",city:"",town:""},d={labelWidth:120,title:" 分组表单",labelPosition:"left",tip:{title:"规则",content:"规则内容"}},n={fields:i.map(e=>(e.defaultValue=o[e.model],e)),options:d};var r=a(29),p=a.n(r),s={components:{iCol:t.Col},data:()=>({form:{config:JSON.stringify(n,null,8)},model:o,fields:i,options:d,requestInterceptor:function(e,l){return new Promise((a,t)=>{e="website-data-api/"+e+".json",p.a.get(e,{query:l}).then(e=>{a(e.data)}).catch(e=>{t(e)})})}}),mounted(){},beforeDestroy(){},methods:{handleConfigChange(e){let l;try{l=JSON.parse(e.target.value||"")||[]}catch(e){this.$Message("配置信息不是一个合法的json数据")}let a={};l.fields.forEach(e=>{a[e.model]=e.defaultValue}),this.model=a,this.fields=l.fields,this.options=l.options},submit(){this.$refs.FormGenerator.submit().then(e=>{console.log("submit",e);const l=[];Object.keys(e).map(a=>{l.push({key:a,value:e[a]})}),console.log("submit",JSON.stringify(l))})},reset(){this.$refs.FormGenerator.reset()}}},u=(a(346),a(0)),c=Object(u.a)(s,function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("Row",{staticClass:"container"},[a("iCol",{attrs:{span:"10"}},[a("div",{staticClass:"container"},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.fields,model:e.model,options:e.options,"request-interceptor":e.requestInterceptor}})],1)]),e._v(" "),a("iCol",{style:{margin:"60px 10px"},attrs:{span:"5"}},[a("Input",{style:{fontSize:"12px"},attrs:{value:JSON.stringify(e.model,null,8),type:"textarea",rows:50,placeholder:"请输入表单配置项",disabled:""}})],1),e._v(" "),a("iCol",{style:{margin:"60px 10px"},attrs:{span:"7"}},[a("Form",{attrs:{model:e.form}},[a("FormItem",[a("Input",{style:{fontSize:"12px"},attrs:{value:e.form.config,type:"textarea",rows:50,placeholder:"请输入表单配置项"},on:{"on-change":e.handleConfigChange}})],1)],1)],1)],1)],1)},[],!1,null,"1deb28eb",null).exports;l.default=c}}]);