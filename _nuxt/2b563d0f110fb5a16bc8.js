(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{447:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];isNaN(o)||(n+=o,t.push({label:"".concat(r.getMonth()+1,"/").concat(r.getDate()),transition:o,cumulative:n}))})),t}},467:function(t,e,n){var content=n(546);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("4b55f26a",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(548);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("15495534",content,!0,{sourceMap:!1})},474:function(t,e,n){var content=n(604);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("435e5f58",content,!0,{sourceMap:!1})},477:function(t,e,n){var content=n(608);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("1f822b4c",content,!0,{sourceMap:!1})},488:function(t,e,n){"use strict";n(108),n(549);var r=n(133),o=(n(40),n(1)),l=n(22),d=n.n(l),c=n(443),h=n(486),f=n(445),_=n(446),m=n(109),v=n(472),y={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{DataView:c.a,DataSelector:h.a,DataViewBasicInfoPanel:f.a,OpenDataLink:_.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""},scrollPlugin:{type:Array,default:function(){return m.b}},yAxesBgPlugin:{type:Array,default:function(){return m.c}}},data:function(){return{dataKind:"transition",chartWidth:null,canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){return"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){var style=Object(v.a)(1)[0];return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1,datalabels:{font:{size:"0"}}}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#edfff3",borderColor:style.strokeColor,borderWidth:2,datalabels:{font:{size:"0"}}}]}},displayOption:function(){var t=this.unit,e={tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)},title:function(t,data){return data.labels[t[0].index]}}},responsive:!1,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0,datalabels:{font:{size:"0"}}}]}:{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0,datalabels:{font:{size:"0"}}}]}},displayOptionHeader:function(){return{responsive:!1,maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:"".concat(this.title," (").concat(this.$t("日別"),")"),value:"transition",align:"end"},{text:"".concat(this.title," (").concat(this.$t("累計"),")"),value:"cumulative",align:"end"}]},tableData:function(){return this.chartData.map((function(t,e){return{text:t.label,transition:t.transition.toLocaleString(),cumulative:t.cumulative.toLocaleString()}})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},graphWidth:function(){var t=this.chartWidth?this.chartWidth:0,e=11*this.displayData.labels.length;return Math.max(t,e)}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}},isNotLoaded:function(){return 0===this.chartData.length},displayValue:function(t){return"bar"===t?this.isTransition()?"block":"none":this.isCumulative()?"block":"none"},isTransition:function(){return"transition"===this.dataKind},isCumulative:function(){return"cumulative"===this.dataKind}},mounted:function(){this.$el&&(this.chartWidth=(this.$el.clientWidth-44-38)/60*this.displayData.labels.length+38,this.chartWidth=Math.max(this.$el.clientWidth-44,this.chartWidth)),this.$refs.barChart.$el.querySelector("canvas").parentElement.parentElement.parentElement.scrollLeft=Number("100000")}},x=o.a.extend(y),w=n(8),C=n(62),$=n.n(C),D=n(632),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"dataTable",fn:function(){return[n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e){return n("tr",{key:e.text},[n("th",[t._v(t._s(e.text))]),t._v(" "),n("td",{staticClass:"text-end"},[t._v(t._s(e.transition))]),t._v(" "),n("td",{staticClass:"text-end"},[t._v(t._s(e.cumulative))])])})),0)]}}])})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"m-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("div",{staticClass:"LegendStickyChart"},[n("div",{staticClass:"scrollable"},[n("div",{style:{width:t.chartWidth+"px"}},[n("bar",{ref:"barChart",style:{display:t.displayValue("bar")},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,plugins:t.scrollPlugin,height:240,width:t.graphWidth}}),t._v(" "),n("line-chart",{ref:"lineChart",style:{display:t.displayValue("line")},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,plugins:t.scrollPlugin,height:240,width:t.graphWidth}})],1),t._v(" "),n("bar",{staticClass:"sticky-legend",style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})],1)])])}),[],!1,null,null,null);e.a=component.exports;$()(component,{VDataTable:D.a})},498:function(t,e,n){"use strict";var r=n(1),o=n(443),l=r.a.extend({components:{DataView:o.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""}}}),d=n(545),c=n(8);var h=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.notes},[n("li",[t._v("\n        "+t._s(t.$t("速報値として公開するものであり、後日確定データとして修正される場合があります。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("「入院中」には、入院する医療機関を調整中の方が含まれています。"))+"\n      ")])])]},proxy:!0}])},[t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null).exports,f=(n(108),r.a.extend({props:{"累計":{type:Number,required:!0},"入院中":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}}})),_=n(547);var m={components:{ConfirmedCasesCard:h,ConfirmedCasesTable:Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.tall,t.$style.parent,t.$style.cases]},[n("div",{class:t.$style.title},[t._v(" ")]),t._v(" "),n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性患者数")))]),t._v(" "),n("span",{class:t.$style.small},[t._v("("+t._s(t.$t("累計"))+")")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.累計))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.inside]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.inside]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.inside]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null).exports},data:function(){return{date:String,confirmedCases:{}}},created:function(){this.setData()},methods:{setData:function(){var data,t=this.$store.state.data;this.confirmedCases={"累計":(data=t.main_summary).value,"入院中":data.children[0].value,"死亡":data.children[1].value,"退院":data.children[2].value},this.date=t.main_summary.date}}},v=n(62),y=n.n(v),x=n(631),w=Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("confirmed-cases-card",{attrs:{title:this.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:this.date}},[e("confirmed-cases-table",this._b({attrs:{"aria-label":this.$t("検査陽性者の状況")}},"confirmed-cases-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=w.exports;y()(w,{VCol:x.a})},499:function(t,e,n){"use strict";var r=n(475),o=n(443),l=n(445),d=n(446),c={components:{DataView:o.a,DataViewBasicInfoPanel:l.a,OpenDataLink:d.a},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"pie-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},info:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""}},computed:{displayInfo:function(){if(this.isNotLoaded())return{lText:"",sText:"",unit:""};var t=this.chartData[this.chartData.length-1],e=t.cumulative;return{lText:e-t.transition+"/"+e,sText:this.info,unit:this.unit}},displayData:function(){var t=this;if(this.isNotLoaded())return{labels:[""],datasets:[{label:"",data:"",backgroundColor:"",borderWidth:0}]};var e=["#00B849","#D9D9D9"];return{labels:this.chartData.map((function(e){return t.$t(e.label)})),datasets:[{label:this.chartData.map((function(e){return t.$t(e.label)})),data:this.chartData.map((function(t){return t.transition})),backgroundColor:this.chartData.map((function(t,n){return e[n]})),borderWidth:0,datalabels:{font:{size:"20",weight:"bold"}}}]}},displayOption:function(){return this.isNotLoaded()?{}:{tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1,legend:{display:!0}}}},methods:{isNotLoaded:function(){return 0===this.chartData.length}}},h=n(607),f=n(8);var _={components:{CircleChart:Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.notes},[n("li",[t._v("\n        "+t._s(t.$t("病院以外で対応する場合もあるため、これが最大許容数ではありません。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("入院患者数には、入院する医療機関を調整中の方が含まれています。"))+"\n      ")])])]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"m-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("pie-chart",{attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}})],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null).exports},data:function(){return{date:String,sickbedsGraph:[]}},created:function(){this.setData()},methods:{setData:function(){var t=this.$store.state.data;this.sickbedsGraph=Object(r.a)(t.sickbeds_summary.data),this.date=t.sickbeds_summary.date}}},m=n(62),v=n.n(m),y=n(631),x=Object(f.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("circle-chart",{attrs:{title:this.$t("入院患者数と病床数"),"title-id":"patietns-and-sickedbeds","chart-data":this.sickbedsGraph,date:this.date,unit:this.$t("床"),info:this.$t("入院患者数")+"/"+this.$t("病床数"),url:"https://www.pref.oita.jp/site/bosaianzen/shingatacorona.html"}})],1)}),[],!1,null,null,null);e.a=x.exports;v()(x,{VCol:y.a})},501:function(t,e,n){"use strict";n(9),n(43),n(13),n(41),n(42),n(31),n(15),n(16),n(5);var r=n(447),o=n(22),l=n.n(o),d=[{text:"公表日",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}];function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f={components:{DataTable:n(513).a},data:function(){return{date:String,patientsTable:{},sumInfoOfPatients:{}}},created:function(){this.setData()},methods:{setData:function(){var data,t,e=this.$store.state.data;this.date=e.patients.date,this.patientsTable=(data=e.patients.data,t={headers:d,datasets:[]},data.forEach((function(e){var n,r,o,d,c={"公表日":null!==(n=l()(e["リリース日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"不明","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(d=e["性別"])&&void 0!==d?d:"不明","退院":e["退院"]};t.datasets.push(c)})),t.datasets.sort((function(a,b){return l()(a.公表日).unix()-l()(b.公表日).unix()})).reverse(),t);var n=Object(r.a)(e.patients_summary.data);this.sumInfoOfPatients={lText:n[n.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:n[n.length-1].label}),unit:this.$t("人")};var o,h=c(this.patientsTable.headers);try{for(h.s();!(o=h.n()).done;){var header=o.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){h.e(t)}finally{h.f()}var f,_=c(this.patientsTable.datasets);try{for(_.s();!(f=_.n()).done;){var m=f.value;if(m["居住地"]=this.$t(m["居住地"]),m["性別"]=this.$t(m["性別"]),m["退院"]=this.$t(m["退院"]),"10歳未満"===m["年代"])m["年代"]=this.$t("10歳未満");else if("非公開"===m["年代"])m["年代"]=this.$t("非公開");else{var v=m["年代"].substring(0,2);m["年代"]=this.$t("{age}代",{age:v})}}}catch(t){_.e(t)}finally{_.f()}}}},_=n(8),m=n(62),v=n.n(m),y=n(631),component=Object(_.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.date,info:this.sumInfoOfPatients,url:"https://data.bodik.jp/dataset/_covid19"}})],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VCol:y.a})},502:function(t,e,n){"use strict";var r=n(447),o={components:{TimeChart:n(488).a},data:function(){return{date:String,patientsGraph:[]}},created:function(){this.setData()},methods:{setData:function(){var t=this.$store.state.data;this.patientsGraph=Object(r.a)(t.patients_summary.data),this.date=t.patients_summary.date}}},l=n(8),d=n(62),c=n.n(d),h=n(631),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-chart-patients","chart-data":this.patientsGraph,date:this.date,unit:this.$t("人"),url:"https://data.bodik.jp/dataset/_covid19"}})],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCol:h.a})},503:function(t,e,n){"use strict";n(9),n(43),n(13),n(41),n(42),n(31),n(15),n(16),n(5),n(64);var r=n(22),o=n.n(r),l=n(513),d=n(447);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f={components:{DataTable:l.a},data:function(){var t={headers:[],datasets:[]};t.headers=[{text:this.$t("居住地"),value:"label"},{text:this.$t("陽性患者数"),value:"count",align:"end"}];var e,n=c(this.$store.state.data.patients.data.reduce((function(t,e){var element=t.find((function(p){return p.label===e["居住地"]}));return element?element.count++:t.push({label:e["居住地"],count:1}),t}),[]).sort((function(a,b){return b.count-a.count})));try{for(n.s();!(e=n.n()).done;){var r=e.value;t.datasets.push({label:this.$t(r.label),count:r.count})}}catch(t){n.e(t)}finally{n.f()}var l=o()(this.$store.state.data.patients.date).format("YYYY/MM/DD HH:mm"),h=this.$store.state.data,f=Object(d.a)(h.patients_summary.data),data={date:l,chartData:t,info:{lText:f[f.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:o()(this.$store.state.data.patients.date).format("M/DD")}),unit:this.$t("人")}};return data}},_=n(8),m=n(62),v=n.n(m),y=n(631),component=Object(_.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("居住地別陽性患者数"),"title-id":"patients-by-residence","chart-data":this.chartData,date:this.date,info:this.info,url:"https://data.bodik.jp/dataset/_covid19"}})],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VCol:y.a})},504:function(t,e,n){"use strict";var r=n(488),o=n(447),l={components:{TimeChart:r.a},data:function(){return{date:String,inspectionsGraph:[]}},created:function(){this.setData()},methods:{setData:function(){var t=this.$store.state.data;this.inspectionsGraph=Object(o.a)(t.inspections_summary.data),this.date=t.inspections_summary.date}}},d=n(8),c=n(62),h=n.n(c),f=n(631),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-chart",{attrs:{title:this.$t("検査実施数"),"title-id":"number-of-tested-cases","chart-id":"time-chart-tested","chart-data":this.inspectionsGraph,date:this.date,unit:this.$t("件.tested"),url:"https://data.bodik.jp/dataset/_covid19"}})],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCol:f.a})},505:function(t,e,n){"use strict";var r=n(475),o={components:{HorizontalBarChart:n(510).a},data:function(){return{date:String,ageGraph:[]}},created:function(){this.setData()},methods:{setData:function(){var t=this.$store.state.data;this.ageGraph=Object(r.a)(t.age.data),this.date=t.age.date}}},l=n(8),d=n(62),c=n.n(d),h=n(631),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("horizontal-bar-chart",{attrs:{description:"年代が公開されていない患者は含まれていません。",title:this.$t("年代別陽性患者数"),"title-id":"patients-by-age","chart-data":this.ageGraph,date:this.date,unit:this.$t("人"),info:this.$t("累計値"),url:"https://data.bodik.jp/dataset/_covid19"}})],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCol:h.a})},507:function(t,e,n){"use strict";var r=n(447),o={components:{TimeChart:n(488).a},data:function(){return{date:String,querentsGraph:[]}},created:function(){this.setData()},methods:{setData:function(){var t=this.$store.state.data;this.querentsGraph=Object(r.a)(t.querents.data),this.date=t.querents.date}}},l=n(8),d=n(62),c=n.n(d),h=n(631),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-chart",{attrs:{title:this.$t("相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-chart-querents","chart-data":this.querentsGraph,date:this.date,unit:this.$t("件.reports"),url:"https://data.bodik.jp/dataset/_covid19"}})],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCol:h.a})},513:function(t,e,n){"use strict";var r=n(1),o=n(443),l=n(445),d=n(446),c=r.a.extend({components:{DataView:o.a,DataViewBasicInfoPanel:l.a,OpenDataLink:d.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""},customSort:{type:Function,default:function(t,e,n){return t.sort((function(a,b){var t=0;return String(a[e[0]])<String(b[e[0]])?t=-1:String(b[e[0]])<String(a[e[0]])&&(t=1),0!==t&&(t=n[0]?-1*t:t),t})),t}}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),h=(n(603),n(8)),f=n(62),_=n.n(f),m=n(632),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"m-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"custom-sort":t.customSort}})],1)}),[],!1,null,null,null);e.a=component.exports;_()(component,{VDataTable:m.a})},545:function(t,e,n){"use strict";var r=n(467),o=n.n(r);e.default=o.a},546:function(t,e,n){(e=n(24)(!1)).push([t.i,"ul.notes_2gIEJ{margin-top:10px;margin-bottom:0;padding-left:0 !important;font-size:12px;color:#707070}ul.notes_2gIEJ>li{list-style-type:none}",""]),e.locals={notes:"notes_2gIEJ"},t.exports=e},547:function(t,e,n){"use strict";var r=n(468),o=n.n(r);e.default=o.a},548:function(t,e,n){(e=n(24)(!1)).push([t.i,".container_37WEO{width:100%;display:flex;justify-content:center;box-sizing:border-box;color:#008830;line-height:1.35;padding-left:0 !important}.container_37WEO *{box-sizing:border-box}.container_37WEO ul{padding-left:0}.pillar_F62Yl{display:flex;flex-direction:column;justify-content:flex-end;flex:0 0 auto;text-align:center;width:100%;border:3px solid #008830}.group_1ksdS{display:flex;flex:0 0 auto;padding-left:0;padding-top:3px;border-top:3px solid #008830;border-left:3px solid #008830}.content_1gFZ-{min-height:150px;padding:10px 2px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.content_1gFZ->span{display:block;width:100%;font-size:16px;font-size:1rem}.content_1gFZ->span:last-child{margin-top:.1em}.content_1gFZ->span:not(:last-child){word-break:break-all}.content_1gFZ- span strong{font-size:18px;font-size:1.125rem}.content_1gFZ- span.unit_25C4Z{font-size:16px;font-size:1rem}.content_1gFZ- .small_l5iwO{font-size:14px;font-size:0.875rem}.box_2dey9{display:flex}.box_2dey9.parent_23pyN{border-top:3px solid #008830;border-left:3px solid #008830;position:relative}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-9px;border-top:none;border-right:none;border-left:none}.box_2dey9.cases_2wmCU{flex-wrap:wrap;align-items:stretch;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{display:flex;justify-content:center;align-items:center;text-align:center;width:100%;padding:10px 10px 10px calc(10px + 3px);border-right:3px solid #008830}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc((100% + 3px * 2) / 3 - 3px * 3);align-self:flex-end}.box_2dey9.cases_2wmCU>.pillar_F62Yl>.content_1gFZ-{padding-top:19px}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc((100% + 3px * 2) / 3 * 2 + 3px)}.box_2dey9.inside_3zDfq{margin-left:3px;width:calc(100% / 2 - 3px)}@media screen and (max-width: 1440px){.pillar_F62Yl{border-width:.209vw}.group_1ksdS{padding-top:.209vw;border-top-width:.209vw;border-left-width:.209vw}.content_1gFZ- span strong{font-size:17px;font-size:1.0625rem}.content_1gFZ- span.unit_25C4Z{font-size:15px;font-size:0.9375rem}.content_1gFZ->span{font-size:15px;font-size:0.9375rem}.content_1gFZ- .unit_25C4Z{font-size:13px;font-size:0.8125rem}.content_1gFZ- .small_l5iwO{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.209vw;border-left-width:.209vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-0.625vw}.box_2dey9.cases_2wmCU{margin-left:.209vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.209vw);border-right-width:.209vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.209vw * 2) / 3 - 0.209vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.209vw * 2) / 3 * 2 + 0.209vw )}.box_2dey9.inside_3zDfq{margin-left:.209vw;width:calc(100% / 2 - 0.209vw)}}@media screen and (max-width: 1263px){.pillar_F62Yl{border-width:.159vw}.group_1ksdS{padding-top:.159vw;border-top-width:.159vw;border-left-width:.159vw}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- .unit_25C4Z{font-size:11px;font-size:0.6875rem}.content_1gFZ- .small_l5iwO{font-size:12px;font-size:0.75rem}.box_2dey9.parent_23pyN{border-top-width:.159vw;border-left-width:.159vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-0.475vw}.box_2dey9.cases_2wmCU{margin-left:.159vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.159vw);border-right-width:.159vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.159vw * 2) / 3 - 0.159vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.159vw * 2) / 3 * 2 + 0.159vw )}.box_2dey9.inside_3zDfq{margin-left:.159vw;width:calc(100% / 2 - 0.159vw)}}@media screen and (max-width: 1170px){.pillar_F62Yl{border-width:.171vw}.group_1ksdS{padding-top:.171vw;border-top-width:.171vw;border-left-width:.171vw}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- .unit_25C4Z{font-size:11px;font-size:0.6875rem}.content_1gFZ- .small_l5iwO{font-size:12px;font-size:0.75rem}.box_2dey9.parent_23pyN{border-top-width:.171vw;border-left-width:.171vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-0.512vw}.box_2dey9.cases_2wmCU{margin-left:.171vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.171vw);border-right-width:.171vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.171vw * 2) / 3 - 0.171vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.171vw * 2) / 3 * 2 + 0.171vw )}.box_2dey9.inside_3zDfq{margin-left:.171vw;width:calc(100% / 2 - 0.171vw)}}@media screen and (max-width: 959px){.pillar_F62Yl{border-width:.417vw}.group_1ksdS{padding-top:.417vw;border-top-width:.417vw;border-left-width:.417vw}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- .unit_25C4Z{font-size:12px;font-size:0.75rem}.content_1gFZ- .small_l5iwO{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.417vw;border-left-width:.417vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.25vw}.box_2dey9.cases_2wmCU{margin-left:.417vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.417vw);border-right-width:.417vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.417vw * 2) / 3 - 0.417vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.417vw * 2) / 3 * 2 + 0.417vw )}.box_2dey9.inside_3zDfq{margin-left:.417vw;width:calc(100% / 2 - 0.417vw)}}@media screen and (max-width: 767px){.pillar_F62Yl{border-width:.313vw}.group_1ksdS{padding-top:.313vw;border-top-width:.313vw;border-left-width:.313vw}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- .unit_25C4Z{font-size:12px;font-size:0.75rem}.content_1gFZ- .small_l5iwO{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.313vw;border-left-width:.313vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-0.937vw}.box_2dey9.cases_2wmCU{margin-left:.313vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.313vw);border-right-width:.313vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.313vw * 2) / 3 - 0.313vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.313vw * 2) / 3 * 2 + 0.313vw )}.box_2dey9.inside_3zDfq{margin-left:.313vw;width:calc(100% / 2 - 0.313vw)}}@media screen and (max-width: 600px){.pillar_F62Yl{border-width:.5vw}.group_1ksdS{padding-top:.5vw;border-top-width:.5vw;border-left-width:.5vw}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- .unit_25C4Z{font-size:12px;font-size:0.75rem}.content_1gFZ- .small_l5iwO{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.5vw;border-left-width:.5vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.5vw}.box_2dey9.cases_2wmCU{margin-left:.5vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.5vw);border-right-width:.5vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.5vw * 2) / 3 - 0.5vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.5vw * 2) / 3 * 2 + 0.5vw )}.box_2dey9.inside_3zDfq{margin-left:.5vw;width:calc(100% / 2 - 0.5vw)}}@media screen and (max-width: 420px){.pillar_F62Yl{border-width:.334vw}.group_1ksdS{padding-top:.334vw;border-top-width:.334vw;border-left-width:.334vw}.content_1gFZ- span strong{font-size:14px;font-size:0.875rem}.content_1gFZ- span.unit_25C4Z{font-size:12px;font-size:0.75rem}.content_1gFZ->span{font-size:12px;font-size:0.75rem}.content_1gFZ- .unit_25C4Z{font-size:10px;font-size:0.625rem}.content_1gFZ- .small_l5iwO{font-size:11px;font-size:0.6875rem}.box_2dey9.parent_23pyN{border-top-width:.334vw;border-left-width:.334vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1vw}.box_2dey9.cases_2wmCU{margin-left:.334vw;width:100%}.box_2dey9.cases_2wmCU>.title_G50CO{margin-top:-1px;padding-left:calc(10px + 0.334vw);border-right-width:.334vw}.box_2dey9.cases_2wmCU>.pillar_F62Yl{width:calc( (100% + 0.334vw * 2) / 3 - 0.334vw * 3 )}.box_2dey9.cases_2wmCU>.group_1ksdS{width:calc( (100% + 0.334vw * 2) / 3 * 2 + 0.334vw )}.box_2dey9.inside_3zDfq{margin-left:.334vw;width:calc(100% / 2 - 0.334vw)}}",""]),e.locals={container:"container_37WEO",pillar:"pillar_F62Yl",group:"group_1ksdS",content:"content_1gFZ-",unit:"unit_25C4Z",small:"small_l5iwO",box:"box_2dey9",parent:"parent_23pyN",cases:"cases_2wmCU",title:"title_G50CO",inside:"inside_3zDfq"},t.exports=e},549:function(t,e,n){var r=n(11);r(r.S,"Math",{sign:n(321)})},603:function(t,e,n){"use strict";var r=n(474);n.n(r).a},604:function(t,e,n){(e=n(24)(!1)).push([t.i,".cardTable.v-data-table{box-shadow:0 -20px 12px -12px #0003 inset}.cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr th{font-weight:normal}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) th,.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table:focus{outline:dotted #707070 1px}.note{margin:8px 0 0;font-size:12px;color:#707070}.note ul,.note ol{list-style-type:none;padding:0}",""]),t.exports=e},607:function(t,e,n){"use strict";var r=n(477),o=n.n(r);e.default=o.a},608:function(t,e,n){(e=n(24)(!1)).push([t.i,".Graph-Desc_3iL2h{margin:10px 0;font-size:12px;color:#707070}.link_Uixjl{text-decoration:none}ul.notes_dyca2{margin-top:10px;margin-bottom:0;padding-left:0 !important;font-size:12px;color:#707070}ul.notes_dyca2>li{list-style-type:none}",""]),e.locals={"Graph-Desc":"Graph-Desc_3iL2h",link:"link_Uixjl",notes:"notes_dyca2"},t.exports=e}}]);