(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8,4],{CQ3q:function(n,e,t){"use strict";var r=t("fFZ8"),a=t.n(r),o=t("vOnD"),i="#ffffff",l="#979797",c="#6c72f9";function u(){var n=a()(["\n  background-color: #00000000;\n  color: ",";\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return u=function(){return n},n}function s(){var n=a()(["\n  background-color: #00000000;\n  color: ",";\n  border-color: ",";\n  float: right;\n  border: 1px solid;\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  background-color: ",";\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  background-color: ",";\n  float: right;\n  font-size: 16px;\n  margin-left: 10px;\n  padding: 10px 0;\n  width: 120px;\n  &:disabled {\n    background: ",";\n    opacity: 0.6;\n    pointer-events: none;\n    cursor: default;\n  }\n"]);return f=function(){return n},n}function p(){var n=a()(["\n  background-color: ",";\n  border-radius: 5px;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  font-family: 'Clear Sans Bold','Nitti Grotesk','Museo Sans','Helvetica Neue',Verdana,Arial,sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: initial;\n  padding: 14px 0 18px 0;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]);return p=function(){return n},n}t.d(e,"a",function(){return g}),t.d(e,"d",function(){return v}),t.d(e,"c",function(){return b}),t.d(e,"b",function(){return m});var h=o["a"].button(p(),c,i),g=Object(o["a"])(h)(f(),n=>n.color,l),v=Object(o["a"])(h)(d(),n=>n.color?n.color:c),b=Object(o["a"])(h)(s(),n=>n.color?n.color:c,n=>n.color?n.color:c),m=Object(o["a"])(h)(u(),n=>n.color?n.color:c)},EDuE:function(n,e,t){n.exports={normal:"normal___HWRKS",list:"list___1QtXr"}},QeBL:function(n,e,t){"use strict";t.r(e),t.d(e,"TitleParagraph",function(){return k});t("jCWc");var r=t("kPKH"),a=t("fFZ8"),o=t.n(a),i=t("q1tI"),l=t.n(i),c=t("vOnD"),u=t("jeCx"),s=t("CQ3q"),d=t("he5r"),f=t("EDuE"),p=t.n(f);function h(){var n=o()(["\nfont-size: 23px;\nline-height: 1.3;\nmargin-bottom: 10px;\n"]);return h=function(){return n},n}function g(){var n=o()(["\nfont-size: 18px;\nline-height: 1.67;\n"]);return g=function(){return n},n}function v(){var n=o()(["\nfont-size: 36px;\nfont-weight: 500;\nline-height: 1.33;\n"]);return v=function(){return n},n}function b(){var n=o()(["\nfont-size: 28px;\nfont-weight: 300;\n"]);return b=function(){return n},n}var m=c["a"].h1(b()),x=c["a"].h2(v()),E=c["a"].p(g()),k=c["a"].h2(h());e["default"]=function(){return l.a.createElement("div",{className:p.a.normal},l.a.createElement(r["a"],{style:{marginBottom:100}},l.a.createElement(m,null,"Welcome in Stellot"),l.a.createElement(x,null,"Voting platform backed by Stellar blockchain network"),l.a.createElement(E,null,"Stellot is designed around voter privacy, ensuring that everyone can be sure about its vote anonimity. Inherited decentralized and permissionless Stellar blockchain properties, allows everyone to verify the election results without having to trust central authority."),l.a.createElement("a",{href:d["b"],target:"_blank",rel:"noreferrer noopener"},l.a.createElement(s["c"],null,"Whitepaper"))),l.a.createElement(k,null,"Explore public votings"),l.a.createElement(u["a"],null))}},he5r:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"a",function(){return a});var r="https://github.com/stasbar/stellar-voting/releases/download/0.0.1/draft_evoting_on_stellar.pdf",a="https://github.com/stasbar/stellar-voting"},jeCx:function(n,e,t){"use strict";t("g9YV");var r=t("wCAj"),a=t("/MKj"),o=t("q1tI"),i=t.n(o),l=t("Yjk7"),c=t("55Ip"),u=t("wd/R"),s=t.n(u),d=n=>{var e=n.dispatch,t=n.votes;Object(o["useEffect"])(()=>Object(l["dispatchFetchVotes"])(e),[]);var a=[{title:"Title",dataIndex:"title",key:"title",render:(n,e)=>i.a.createElement(c["Link"],{to:"/voting/".concat(e.slug)},n)},{title:"Begin",dataIndex:"startDate",key:"startDate",render:n=>i.a.createElement("span",null,s()().to(n)),sorter:(n,e)=>s()(n.startDate).seconds()-s()(e.startDate).seconds()},{title:"End",dataIndex:"endDate",key:"endDate",render:n=>i.a.createElement("span",null,s()().to(n)),sorter:(n,e)=>s()(n.endDate).seconds()-s()(e.endDate).seconds()},{title:"Auth",dataIndex:"authorization",key:"authorization",render:n=>i.a.createElement("span",null,n.charAt(0).toUpperCase()+n.substring(1))}];return console.log({votes:t}),i.a.createElement("div",null,i.a.createElement(r["a"],{pagination:!1,columns:a,dataSource:t,rowKey:n=>n.slug}))};e["a"]=Object(a["c"])(n=>{var e=n.wall;return{votes:e.votes}})(d)},u8WN:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),a=t.n(r),o=t("QeBL"),i=t("jeCx"),l=()=>a.a.createElement("div",null,a.a.createElement(o["TitleParagraph"],null,"Explore"),a.a.createElement(i["a"],null));e["default"]=l}}]);