(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[105,148],{247:function(e,t,n){"use strict";n.r(t);var a=n(56),s=n.n(a),i=n(21),c=n(10),r=n(87),o=n(5),l=n(2),d=n(11),j=(n(421),n(616)),p=n(113),m=n(115),u=(n(83),n(1));t.default=function(){var e=Object(l.useState)({email:"",password:"",signUpType:"email",deviceName:"email"}),t=Object(o.a)(e,2),n=t[0],a=t[1],b=Object(l.useState)(!1),h=Object(o.a)(b,2),O=h[0],g=h[1],f=Object(l.useState)(""),v=Object(o.a)(f,2),x=v[0],w=v[1],y=Object(d.f)();function N(){return(N=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={email:n.email,password:n.password,signUpType:n.signUpType,deviceName:n.deviceName},console.log(t),a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},fetch("http://doodlebluelive.com:2307/v1/admin/login",a).then(function(){var e=Object(r.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,localStorage.setItem("admin-token",n.token),t.ok?(console.log(n),y.push("/admins/dashboard")):w("User Not Registered",t.statusText);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){w("Sorry, something went wrong.",e.message)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){e.persist(),a(Object(c.a)(Object(c.a)({},n),{},Object(i.a)({},e.target.name,e.target.value)))},k=Object(j.a)(),S=(k.register,k.errors,k.handleSubmit);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"outter_admin_login",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"inner_admin_login",children:Object(u.jsxs)("div",{className:"login_wraper",children:[Object(u.jsx)("h2",{children:"Mottofit Admin Dashboard "}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(u.jsxs)("div",{className:"inner_form_loginAdmin",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsxs)("div",{className:"input_item1_signin",children:[Object(u.jsx)("input",{type:"text",placeholder:"Email",value:n.email,onChange:_,name:"email"}),Object(u.jsx)("img",{src:p.default,alt:"icon"})]}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsxs)("div",{className:"input_item1_signin",children:[Object(u.jsx)("input",{type:O?"text":"password",placeholder:"Password",value:n.password,onChange:_,name:"password"}),Object(u.jsx)("img",{src:m.default,alt:"icon",onClick:function(){g(!O)}})]}),x&&Object(u.jsx)("span",{className:"errorMessage",children:x}),Object(u.jsx)("button",{type:"submit",onClick:S((function(){return N.apply(this,arguments)})),children:"Login"})]})})]})})})})})}},421:function(e,t,n){}}]);
//# sourceMappingURL=105.ed98ba47.chunk.js.map