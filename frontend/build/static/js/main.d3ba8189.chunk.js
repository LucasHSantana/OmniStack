(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t){},109:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52),i=n.n(c),u=(n(65),n(21)),s=n(7),o=n(6),l=n.n(o),m=n(10),p=n(13),f=(n(67),n(53)),d=n.n(f).a.create({baseURL:"http://localhost:3333"}),b=n(20),E=n.n(b);function h(e){var t=e.history,n=Object(a.useState)(""),c=Object(p.a)(n,2),i=c[0],u=c[1];function s(){return(s=Object(m.a)(l.a.mark(function e(n){var a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(i),e.next=4,d.post("/devs",{username:i});case 4:a=e.sent,r=a.data._id,t.push("/dev/".concat(r));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("img",{src:E.a,alt:"Tindev"}),r.a.createElement("input",{placeholder:"Digite o seu usu\xe1rio no Github",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Enviar")))}var v=n(54),g=n.n(v),y=(n(109),n(55)),k=n.n(y),w=n(56),x=n.n(w),j=n(57),O=n.n(j);function N(e){var t=e.match,n=Object(a.useState)([]),c=Object(p.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),f=Object(p.a)(o,2),b=f[0],h=f[1];function v(){return(v=Object(m.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/devs/".concat(n,"/likes"),null,{headers:{user:t.params.id}});case 2:s(i.filter(function(e){return e._id!==n}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return(y=Object(m.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/devs/".concat(n,"/dislikes"),null,{headers:{user:t.params.id}});case 2:s(i.filter(function(e){return e._id!==n}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){function e(){return(e=Object(m.a)(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/devs",{headers:{user:t.params.id}});case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t.params.id]),Object(a.useEffect)(function(){g()("http://localhost:3333",{query:{user:t.params.id}}).on("match",function(e){h(e),console.log(e)})},[t.params.id]),r.a.createElement("div",{className:"main-container"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:E.a,alt:"Tindev"})),i.length>0?r.a.createElement("ul",null,i.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("img",{src:e.avatar,alt:e.name}),r.a.createElement("footer",null,r.a.createElement("strong",null,e.name,"s"),r.a.createElement("p",null,e.bio)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return function(e){return y.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:x.a,alt:"dislike"})),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return v.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:k.a,alt:"like"}))))})):r.a.createElement("div",{className:"empty"},"Acabou :("),b&&r.a.createElement("div",{className:"match-container"},r.a.createElement("img",{src:O.a,alt:"It's a match"}),r.a.createElement("img",{className:"avatar",src:b.avatar,alt:""}),r.a.createElement("strong",null,b.name),r.a.createElement("p",null,b.bio),r.a.createElement("button",{type:"button",onClick:function(){return h(null)}},"Fechar")))}function _(){return r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:h}),r.a.createElement(s.a,{path:"/dev/:id",component:N}))}var C=function(){return r.a.createElement(_,null)};i.a.render(r.a.createElement(C,null),document.getElementById("root"))},20:function(e,t,n){e.exports=n.p+"static/media/logo.b37460d1.svg"},55:function(e,t,n){e.exports=n.p+"static/media/like.739b1b16.svg"},56:function(e,t,n){e.exports=n.p+"static/media/dislike.b066eb4b.svg"},57:function(e,t,n){e.exports=n.p+"static/media/itsamatch.21c10b26.png"},60:function(e,t,n){e.exports=n(114)},65:function(e,t,n){},67:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.d3ba8189.chunk.js.map