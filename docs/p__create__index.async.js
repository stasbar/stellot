(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"/sTe":function(e,t,a){"use strict";a.r(t);a("BoS7");var n=a("Sdc0"),r=(a("iQDF"),a("+eQT")),o=(a("giR+"),a("fyUT")),l=(a("DZo9"),a("8z0m")),i=(a("7Kak"),a("9yH6")),c=(a("+L6B"),a("2/Rp")),u=(a("jCWc"),a("kPKH")),s=(a("14J3"),a("BMrR")),m=(a("5NDa"),a("5rEg")),d=(a("miYZ"),a("tsqr")),p=a("d6i3"),h=a.n(p),f=a("1l/V"),g=a.n(f),E=(a("y8nQ"),a("Vl3Y")),b=a("qIgq"),v=a.n(b),y=a("q1tI"),C=a.n(y),w=a("71ry"),O=a("hBab"),x=a("c+yx"),A=a("ih5i"),z=a("/MKj"),I=a("CQ3q"),j=(a("2qtc"),a("kLXV")),k=a("3a4m"),S=a.n(k),L=a("P5Jw"),B=a.n(L),P=a("zEw6"),T=a("uMRc"),q=a("/Faj"),N=e=>{var t=e.dispatch,a=e.voting,n=e.showSuccessCreation,r=Object(y["useState"])(!1),o=v()(r,2),l=o[0],i=o[1];if(!a||!n)return C.a.createElement(C.a.Fragment,null);var u=()=>{S.a.replace("/voting/".concat(a.slug)),Object(A["dispatchCancelSuccessCreationModel"])(t)};return console.log({location:window.location}),C.a.createElement(j["a"],{visible:a&&n,title:C.a.createElement("h2",null,C.a.createElement(T["a"],{twoToneColor:"#52c41a",style:{marginRight:4}}),"Successfully created voting"),closable:!0,width:500,okText:"Show voting",onOk:u,onCancel:()=>Object(A["dispatchCancelSuccessCreationModel"])(t),bodyStyle:{textAlign:"center"}},C.a.createElement(m["a"],{onClick:e=>e.preventDefault(),value:"".concat(window.location.origin,"/voting/").concat(a.slug),addonAfter:C.a.createElement(B.a,{text:"".concat(window.location.origin,"/voting/").concat(a.slug),onCopy:()=>i(!0)},C.a.createElement("a",null,l?"Copied!":"Copy"))}),C.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://testnet.lumenscan.io/account/".concat(a.distributionAccountId)},C.a.createElement(c["a"],{type:"link",icon:C.a.createElement(q["a"],null)},C.a.createElement("span",{style:{marginLeft:2}},"Distribution account"))),C.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://testnet.lumenscan.io/account/".concat(a.ballotBoxAccountId)},C.a.createElement(c["a"],{type:"link",icon:C.a.createElement(P["a"],null)},C.a.createElement("span",{style:{marginLeft:2}},"Ballot-box account"))))},R=Object(z["c"])(e=>{var t=e.create;return{voting:t.voting,showSuccessCreation:t.showSuccessCreation}})(N),D=a("LvDl"),V=a.n(D),M=a("NFtC"),F=a.n(M),U=e=>{var t=e.dispatch,a=e.loading,p=E["a"].useForm(),f=v()(p,1),b=f[0],z=Object(y["useState"])(),j=v()(z,2),k=j[0],S=j[1],L=Object(y["useState"])(!1),B=v()(L,2),P=B[0],T=B[1],q=function(){var e=g()(h.a.mark(function e(t,a){return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t,e.next=e.t0===O["Authorization"].KEYBASE?3:e.t0===O["Authorization"].EMAILS?4:e.t0===O["Authorization"].DOMAIN?9:10;break;case 3:return e.abrupt("return",a.authorizationOptions);case 4:return console.log(k),e.next=7,a.authorizationOptions.emails;case 7:return e.t1=e.sent,e.abrupt("return",{emails:e.t1});case 9:return e.abrupt("return",a.authorizationOptions);case 10:return e.abrupt("return",void 0);case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=g()(h.a.mark(function e(a){var n,r,o;return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a,e.next=3,q(n.authorization,n);case 3:r=e.sent,o={title:n.title,polls:[{question:n.question,options:[n.first,n.second,...n.options||[]].filter(x["d"]).map((e,t)=>({name:e,code:t+1}))}],authorization:n.authorization,authorizationOptions:r,visibility:n.visibility,votesCap:n.votesCap,encrypted:n.encrypted,challenges:n.challenges,startDate:n.period[0],endDate:n.period[1]},console.log({createVoting:o}),Object(A["dispatchCreateVoting"])(t,o);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),D={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},M={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},U=function(){var e=g()(h.a.mark(function e(t){var a,n,r,o,l,i,c;return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("done"!==t.file.status){e.next=10;break}return e.next=3,K(t.file);case 3:return a=e.sent,n=V.a.partition(a,x["c"]),r=v()(n,2),o=r[0],l=r[1],i=V.a.uniq(o),c="".concat(o.length!==i.length?"".concat(o.length-i.length," were duplicated and "):"").concat(l.length>0?"following emails were malformed: ".concat(l.join(" ")):""),d["a"].warn(c),S(i),e.abrupt("return",i);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function K(e){return new Promise((t,a)=>{if(!e.originFileObj)return a(new Error("Origin file object undefined"));var n=new FileReader;return n.readAsText(e.originFileObj),n.onload=(()=>{"string"===typeof n.result?t(n.result.split(/[\n,]/).map(e=>e.trim())):a(new Error("Can not process ArrayBuffer"))}),n.onerror=(e=>a(e)),n})}return C.a.createElement(C.a.Fragment,null,C.a.createElement(E["a"],Object.assign({layout:"horizontal"},D,{form:b,name:"options_form",onFinish:N,scrollToFirstError:!0,initialValues:{votesCap:100,authorization:O["Authorization"].OPEN,visibility:O["Visibility"].PUBLIC,encrypted:!1,challenges:100}}),C.a.createElement(E["a"].Item,{name:"title",label:"Title",rules:[{required:!0,whitespace:!0,message:"Please input option value or delete this field."}]},C.a.createElement(m["a"],{placeholder:"Favourite colour"})),C.a.createElement(E["a"].Item,{name:"question",label:"Question",rules:[{required:!0,whitespace:!0,message:"Please input option value or delete this field."}]},C.a.createElement(m["a"],{placeholder:"What is your favourite colour ?"})),C.a.createElement(E["a"].Item,{label:"Options"},C.a.createElement(s["a"],null,C.a.createElement(u["a"],{flex:"10px",style:{marginRight:10,alignSelf:"center"}},"1."),C.a.createElement(u["a"],{flex:"auto"},C.a.createElement(E["a"].Item,Object.assign({},D,{name:"first",key:"first",validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input option value or delete this field."}],noStyle:!0}),C.a.createElement(m["a"],{placeholder:"Blue",style:{marginRight:32}}))))),C.a.createElement(E["a"].Item,Object.assign({},M),C.a.createElement(s["a"],null,C.a.createElement(u["a"],{flex:"10px",style:{marginRight:10,alignSelf:"center"}},"2."),C.a.createElement(u["a"],{flex:"auto"},C.a.createElement(E["a"].Item,{name:"second",key:"second",validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input option value or delete this field."}],noStyle:!0},C.a.createElement(m["a"],{placeholder:"Red",style:{marginRight:32}}))))),C.a.createElement(E["a"].List,{name:"options"},(e,t)=>{var a=t.add,n=t.remove;return C.a.createElement("div",null,e.map((e,t)=>C.a.createElement(E["a"].Item,Object.assign({},M,{label:"",required:!1,key:e.key}),C.a.createElement(s["a"],null,C.a.createElement(u["a"],{flex:"10px",style:{marginRight:10,alignSelf:"center"}},t+3),C.a.createElement(u["a"],{flex:"auto"},C.a.createElement(E["a"].Item,Object.assign({},e,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input option value or delete this field."}],noStyle:!0}),C.a.createElement(m["a"],{placeholder:"Option",style:{marginRight:32}}))),C.a.createElement(u["a"],{flex:"30px",style:{alignSelf:"center",textAlign:"center"}},C.a.createElement(w["MinusCircleOutlined"],{className:F.a.dynamicDeleteButton,onClick:()=>{n(e.name)}}))))),C.a.createElement(E["a"].Item,Object.assign({},M),C.a.createElement(c["a"],{type:"dashed",onClick:()=>{a()}},C.a.createElement(w["PlusOutlined"],null)," Add an option")))}),C.a.createElement(E["a"].Item,{name:"authorization",label:"Authorization method"},C.a.createElement(i["a"].Group,null,C.a.createElement(i["a"].Button,{value:O["Authorization"].OPEN},Object(x["a"])(O["Authorization"].OPEN)),C.a.createElement(i["a"].Button,{value:O["Authorization"].COOKIE},Object(x["a"])(O["Authorization"].COOKIE)),C.a.createElement(i["a"].Button,{value:O["Authorization"].IP},O["Authorization"].IP.toUpperCase()),C.a.createElement(i["a"].Button,{value:O["Authorization"].EMAILS},Object(x["a"])(O["Authorization"].EMAILS)),C.a.createElement(i["a"].Button,{value:O["Authorization"].KEYBASE},Object(x["a"])(O["Authorization"].KEYBASE)),C.a.createElement(i["a"].Button,{disabled:!0,value:O["Authorization"].DOMAIN},Object(x["a"])(O["Authorization"].DOMAIN)),C.a.createElement(i["a"].Button,{disabled:!0,value:O["Authorization"].CODE},Object(x["a"])(O["Authorization"].CODE)))),C.a.createElement(E["a"].Item,{noStyle:!0,shouldUpdate:(e,t)=>e.authorization!==t.authorization},e=>{var t=e.getFieldValue;return{[O["Authorization"].KEYBASE]:C.a.createElement(E["a"].Item,{name:["authorizationOptions","team"],label:"(Optional) Team membership",rules:[{whitespace:!0,message:"Please input option value or delete this field."}]},C.a.createElement(m["a"],{placeholder:"stellar.public"})),[O["Authorization"].EMAILS]:C.a.createElement(E["a"].Item,{rules:[{required:!0,message:"You need to upload the file with eligible email addresses"}],name:["authorizationOptions","emails"],label:"Emails",valuePropName:"emails",getValueFromEvent:U,extra:k?"Uploaded file with ".concat(k.length," emails"):"Please upload file with eligible email addresses separated with new line or comma"},C.a.createElement(l["a"],{multiple:!1,name:"logo",accept:".csv, text/plain",listType:"text",customRequest:e=>{var t=e.file,a=e.onSuccess;setTimeout(()=>{a({},t)},0)}},C.a.createElement(c["a"],null,C.a.createElement(w["UploadOutlined"],null)," Click to upload"))),[O["Authorization"].OPEN]:null}[t("authorization")]}),C.a.createElement(E["a"].Item,{name:"visibility",label:"Listing visibility"},C.a.createElement(i["a"].Group,null,C.a.createElement(i["a"].Button,{value:O["Visibility"].PUBLIC},Object(x["a"])(O["Visibility"].PUBLIC)),C.a.createElement(i["a"].Button,{value:O["Visibility"].UNLISTED},Object(x["a"])(O["Visibility"].UNLISTED)),C.a.createElement(i["a"].Button,{value:O["Visibility"].PRIVATE},Object(x["a"])(O["Visibility"].PRIVATE)))),C.a.createElement(E["a"].Item,{label:"Number of votes cap",name:"votesCap",rules:[{validator:(e,t)=>{return k&&t<k.length?Promise.reject(new Error("The value is less than total number of email addresses eligible to cast a vote")):Promise.resolve()}}],shouldUpdate:(e,t)=>e.votesCap!==t.votesCap},C.a.createElement(o["a"],{min:2})),C.a.createElement(E["a"].Item,{name:"period",label:"Select time period",rules:[{type:"array",required:!0,message:"Please select time!"}]},C.a.createElement(r["a"].RangePicker,null)),!P&&C.a.createElement(E["a"].Item,Object.assign({},M),C.a.createElement("a",{style:{fontSize:12},onClick:()=>{T(!0)}},C.a.createElement(w["DownOutlined"],null)," Show advanced")),C.a.createElement(E["a"].Item,{name:"encrypted",label:"Encrypt partial results",valuePropName:"checked",style:{display:P?"":"none"}},C.a.createElement(n["a"],null)),C.a.createElement(E["a"].Item,{label:"Security level",style:{display:P?"":"none"}},C.a.createElement(E["a"].Item,{name:"challenges",noStyle:!0},C.a.createElement(o["a"],{min:2,max:500}))),C.a.createElement(E["a"].Item,Object.assign({},M),C.a.createElement(I["d"],{size:"large",type:"primary",htmlType:"submit",loading:a},a?"Creating...":"Create"))),C.a.createElement(R,null))};t["default"]=Object(z["c"])(e=>{var t=e.loading;return{loading:t.effects["".concat(A["CREATE"],"/").concat(A["CREATE_VOTING"])]}})(U)},CQ3q:function(e,t,a){"use strict";a.d(t,"a",function(){return h}),a.d(t,"c",function(){return f}),a.d(t,"d",function(){return g}),a.d(t,"b",function(){return E});a("+L6B");var n=a("2/Rp"),r=a("fFZ8"),o=a.n(r),l=a("vOnD"),i=a("xhQn");function c(){var e=o()(["\n  background-color: #00000000;\n  color: ",";\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return c=function(){return e},e}function u(){var e=o()(["\n  background-color: ",";\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return u=function(){return e},e}function s(){var e=o()(["\n  background-color: ",";\n  color: ",";\n  border-color: ",";\n  float: right;\n  border: 1px solid;\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n  &:hover {\n    color: ",";\n    background-color: #00000000;\n    border-color: ",";\n  }\n"]);return s=function(){return e},e}function m(){var e=o()(["\n  background-color: ",";\n  color: ",";\n  border-color: ",";\n  float: right;\n  width: 120px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    background: ",";\n    opacity: 0.6;\n    pointer-events: none;\n    cursor: default;\n  }\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"]);return m=function(){return e},e}function d(){var e=o()(["\n  background-color: ",";\n  border-radius: 5px;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  font-family: 'Clear Sans Bold','Nitti Grotesk','Museo Sans','Helvetica Neue',Verdana,Arial,sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: initial;\n  padding: 14px 0 18px 0;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]);return d=function(){return e},e}var p=Object(l["a"])(n["a"])(d(),i["a"],i["c"]),h=Object(l["a"])(p)(m(),e=>e.color?e.color:i["a"],i["c"],e=>e.color?e.color:i["a"],i["b"],i["c"],e=>e.color?e.color:i["a"]),f=Object(l["a"])(p)(s(),i["c"],e=>e.color?e.color:i["a"],e=>e.color?e.color:i["a"],e=>e.color?e.color:i["a"],e=>e.color?e.color:i["a"]),g=Object(l["a"])(p)(u(),e=>e.color?e.color:i["a"]),E=Object(l["a"])(p)(c(),e=>e.color?e.color:i["a"])},NFtC:function(e,t,a){e.exports={"dynamic-delete-button":"dynamic-delete-button___NsKQg"}},"c+yx":function(e,t,a){"use strict";(function(e){function n(e){return e&&0!==e.length&&e.trim()}function r(e){return e.charAt(0).toUpperCase()+e.substring(1)}function o(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(e){console.error(e)}document.body.removeChild(t)}function l(e){navigator.clipboard?navigator.clipboard.writeText(e).then(()=>{console.log("Async: Copying to clipboard was successful!")},e=>{console.error("Async: Could not copy text: ",e)}):o(e)}a.d(t,"d",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return i});var i=e=>e.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}).call(this,a("HDXh").Buffer)},xhQn:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o});var n="#ffffff",r="#979797",o="#6c72f9"},zEw6:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("8ub7"),r=a("q1tI"),o=a.n(r),l=()=>o.a.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 84 67"},o.a.createElement("path",{d:"M 40.559 0.729 L 62.334 10.882 C 62.768 11.085 62.952 11.598 62.753 12.029 L 54.366 30.015 L 49.749 30.015 L 57.282 13.859 C 57.484 13.427 57.296 12.912 56.864 12.709 L 42.4 5.965 C 42.114 5.834 41.771 5.957 41.637 6.247 L 30.554 30.015 L 25.972 30.015 C 25.984 29.96 26.005 29.902 26.032 29.848 L 39.415 1.147 C 39.616 0.716 40.128 0.527 40.559 0.729 Z M 22.716 28.668 L 58.873 28.666 C 59.416 28.666 59.85 29.107 59.846 29.649 L 59.827 31.779 C 59.822 32.321 59.38 32.759 58.838 32.759 L 22.682 32.761 C 22.139 32.761 21.703 32.323 21.708 31.78 L 21.726 29.651 C 21.729 29.108 22.174 28.668 22.716 28.668 Z"}),o.a.createElement("path",{style:{stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:5,fill:"none"},d:"M 57.221 19.904 L 66.294 19.829 L 80.871 44.106 C 80.92 44.325 3.047 44.325 3.021 44.325 L 2.92 73.986 C 2.92 73.986 80.708 74.007 80.82 73.742 L 80.92 44.325 M 3.039 43.646 L 17.615 20.177 L 32.321 20.087"})),i=e=>o.a.createElement(n["a"],Object.assign({component:l},e))}}]);