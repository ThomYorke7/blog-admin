(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),s=a.n(c),l=a(4),m=a(2),o=a(27),i=a.n(o),u=a(47),d=a(1),p=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),o=l[0],p=l[1],b=Object(n.useState)(""),g=Object(d.a)(b,2),E=g[0],h=g[1],f=Object(m.g)(),v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://denim-mighty-script.glitch.me/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({username:a,password:o})});case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent).token){e.next=12;break}return localStorage.setItem("currentUser",JSON.stringify(r)),f.push("/"),window.location.reload(),e.abrupt("return");case 12:h(r),p("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-4 m-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",required:!0,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",required:!0,onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),""!==E&&r.a.createElement("p",{className:"alert alert-warning mb-0 mt-4"},E.message)))))},b=a(5),g=a.n(b),E=a(15),h=a.n(E),f=function(e){var t=e.title,a=e.text,n=e.timestamp,c=e.lastUpdate,s=(e.id,e.slug);return r.a.createElement("div",{className:"card mb-3 postcard"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"card-body"},r.a.createElement(h.a,{className:"card-title"},t),r.a.createElement(h.a,{classname:"card-text",source:a}),r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-muted"},"Created: ",n),c&&r.a.createElement("small",{className:"text-muted"}," ","| Last Updated: ",c)),r.a.createElement("div",{className:"d-flex justify-content-end mt-3"},r.a.createElement(l.b,{to:"/api/posts/"+s,className:"btn btn-primary"},"Read Post")))))},v=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(l.b,{to:"/",className:"navbar-brand py-1"},"My Journal"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create"},"Create")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/login",onClick:e.handleLogout},"Logout"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit"},"Search"))))},N=a(18),y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),l=Object(d.a)(s,2),o=l[0],i=l[1],u=new N.Html5Entities,p=Object(n.useState)(JSON.parse(localStorage.getItem("currentUser"))),b=Object(d.a)(p,2),E=b[0],h=b[1],y=Object(m.g)();return Object(n.useEffect)((function(){g.a.get("https://denim-mighty-script.glitch.me/api/posts/").then((function(e){c(e.data),i(!1)})).catch((function(e){return console.log({message:e.message})}))}),[]),r.a.createElement(r.a.Fragment,null,E?r.a.createElement("div",null,r.a.createElement(v,{handleLogout:function(){h(""),localStorage.removeItem("currentUser"),y.push("/login")}}),o&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border text-dark m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card-deck mt-4"},a.map((function(e){return r.a.createElement(f,{title:u.decode(e.title),text:u.decode(e.text),timestamp:e.timestamp,lastUpdate:e.lastUpdate,comments:e.comments,key:e._id,id:e._id,slug:e.slug})}))))):r.a.createElement(m.a,{to:"/login"}))};function j(){var e=JSON.parse(localStorage.getItem("currentUser"));return e&&e.token?"Bearer ".concat(e.token):{}}var O=function(e){var t=e.post,a=e.setDeleteModal,n=Object(m.g)();return r.a.createElement("form",{className:"mt-3",onSubmit:function(e){return function(e){e.preventDefault(),g.a.delete("https://denim-mighty-script.glitch.me/api/posts/"+t._id,{headers:{"Content-Type":"application/json",Authorization:j()},mode:"cors"}).then((function(e){n.push("/"),window.location.reload()})).catch((function(e){401===e.response.status&&n.push("/login")}))}(e)}},r.a.createElement("p",{className:"alert alert-danger"},"This will delete the post. Are you sure?"),r.a.createElement("button",{className:"btn btn-secondary mr-2",onClick:function(){return a(!1)}},"Close"),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Confirm"))},x=function(e){var t=e.username,a=e.text,n=e.timestamp,c=e.id,s=e.postId,l=new N.Html5Entities,o=Object(m.g)();return r.a.createElement("div",{className:"card my-3 border-0"},r.a.createElement("div",{className:"row no-gutters border-bottom"},r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("button",{type:"button",onClick:function(){g.a.delete("https://denim-mighty-script.glitch.me/api/posts/".concat(s,"/comments/").concat(c),{headers:{"Content-Type":"application/json",Authorization:j()},mode:"cors"}).then((function(e){window.location.reload()})).catch((function(e){401===e.response.status&&o.push("/login")}))},className:"close","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement("h5",{className:"card-title m-0"},t),r.a.createElement("p",{className:"card-text m-0"},r.a.createElement("small",{className:"text-muted"},"Posted on ",n)),r.a.createElement("p",{className:"card-text my-2"},l.decode(a)))))},S=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],s=a[1],m=Object(n.useState)(""),o=Object(d.a)(m,2),i=o[0],u=o[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),E=b[0],f=b[1],N=Object(n.useState)([]),y=Object(d.a)(N,2),j=y[0],S=y[1],w=Object(n.useState)(!0),C=Object(d.a)(w,2),k=C[0],T=C[1],U=Object(n.useState)(!1),_=Object(d.a)(U,2),F=_[0],D=_[1];return Object(n.useEffect)((function(){g.a.get("https://denim-mighty-script.glitch.me/api/posts/"+e.match.params.slug).then((function(e){s(e.data.post),u(e.data.decodedTitle),f(e.data.decodedText),T(!1),g.a.get("https://denim-mighty-script.glitch.me/api/posts/".concat(e.data.post._id,"/comments")).then((function(e){S(e.data)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log({message:e.message})}))}),[c._id,e.match.params.id,e.match.params.slug]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),k&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border text-dark m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),!1===k&&r.a.createElement("div",{className:"card border-0"},r.a.createElement("div",{className:"row no-gutters mt-4 justify-content-center"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card-body p-0"},r.a.createElement(h.a,{className:"card-title"},i),r.a.createElement(h.a,{className:"card-text",source:E})),r.a.createElement("div",{className:"card-body p-0 mb-3"},r.a.createElement(l.b,{to:"/api/posts/edit/"+c.slug,className:"btn btn-info mr-2"},"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return D(!0)}},"Delete"),F&&r.a.createElement(O,{post:c,setDeleteModal:D})),r.a.createElement("h4",null,"COMMENTS"),j.length>0?j.map((function(e){return r.a.createElement(x,{username:e.username,text:e.text,timestamp:e.timestamp,key:e._id,id:e._id,postId:c._id})})):r.a.createElement("p",null,"There are no comments here.")))))},w=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),o=l[0],i=l[1],u=Object(n.useState)([]),p=Object(d.a)(u,2),b=p[0],E=p[1],h=Object(m.g)();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"container mt-5"},b.length>0?b.map((function(e){return r.a.createElement("p",{className:"alert alert-warning mb-0 mt-4",key:e.msg},e.msg)})):"",r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(e);var t={title:a,text:o};g.a.post("https://denim-mighty-script.glitch.me/api/posts/create",t,{headers:{"Content-Type":"application/json",Authorization:j()},mode:"cors"}).then((function(e){400!==e.status?h.push("/"):E(e)})).catch((function(e){401===e.response.status&&h.push("/login")}))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{className:"form-control",type:"text",name:"title",id:"title",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Content"),r.a.createElement("small",{className:"form-text text-muted mt-0"},"You can use"," ",r.a.createElement("a",{href:"https://www.markdownguide.org/cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},"Markdown"),"."),r.a.createElement("textarea",{name:"text",className:"form-control",id:"text",value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary mt-3"},"Create Post"))))},C=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),i=o[0],u=o[1],p=Object(n.useState)([]),b=Object(d.a)(p,2),E=b[0],h=b[1],f=Object(n.useState)(!0),N=Object(d.a)(f,2),y=N[0],O=N[1],x=Object(m.g)();Object(n.useEffect)((function(){g.a.get("https://denim-mighty-script.glitch.me/api/posts/"+e.match.params.slug).then((function(e){s(e.data.decodedTitle),u(e.data.decodedText),O(!1)})).catch((function(e){return console.log({message:e.message})}))}),[]);return r.a.createElement("div",null,r.a.createElement(v,null),y&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border text-dark m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),!1===y&&r.a.createElement("div",{className:"container mt-5"},E.length>0?E.map((function(e){return r.a.createElement("p",{className:"alert alert-warning mb-0 mt-4",key:e.msg},e.msg)})):"",r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(t);var a={title:c,text:i};g.a.patch("https://denim-mighty-script.glitch.me/api/posts/edit/"+e.match.params.slug,a,{headers:{"Content-Type":"application/json",Authorization:j()},mode:"cors"}).then((function(e){400!==e.status?x.push("/"):h(e)})).catch((function(e){401===e.response.status&&x.push("/login")}))}(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{className:"form-control",type:"text",name:"title",id:"title",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Content"),r.a.createElement("textarea",{name:"text",className:"form-control",id:"text",value:i,onChange:function(e){return u(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary mt-3"},"Save Changes"))))};a(158),a(159);var k=function(){return r.a.createElement(l.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/login",component:p}),r.a.createElement(m.b,{path:"/",exact:!0,component:y}),r.a.createElement(m.b,{path:"/create",component:w}),r.a.createElement(m.b,{path:"/api/posts/:slug",exact:!0,component:S}),r.a.createElement(m.b,{path:"/api/posts/edit/:slug",exact:!0,component:C})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},49:function(e,t,a){e.exports=a(160)}},[[49,1,2]]]);
//# sourceMappingURL=main.7e9162f2.chunk.js.map