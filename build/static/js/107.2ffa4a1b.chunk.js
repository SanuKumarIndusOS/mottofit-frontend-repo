(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[107,113,154],{231:function(e,t,n){"use strict";n.r(t);var a=n(49),s=n.n(a),i=n(16),c=n(11),r=n(71),o=n(10),l=n(2),d=n(8),j=(n(418),n(617)),u=n(102),p=n(104),m=(n(68),n(1));t.default=function(){var e=Object(l.useState)({email:"",password:"",signUpType:"email",deviceName:"email"}),t=Object(o.a)(e,2),n=t[0],a=t[1],b=Object(l.useState)(!1),h=Object(o.a)(b,2),O=h[0],f=h[1],g=Object(l.useState)(""),v=Object(o.a)(g,2),x=v[0],w=v[1],y=Object(d.f)();function N(){return(N=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={email:n.email,password:n.password,signUpType:n.signUpType,deviceName:n.deviceName},console.log(t),a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},fetch("http://doodlebluelive.com:2307/v1/admin/login",a).then(function(){var e=Object(r.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,localStorage.setItem("admin-token",n.token),t.ok?(console.log(n),y.push("/admins/dashboard")):w("User Not Registered",t.statusText);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){w("Sorry, something went wrong.",e.message)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){e.persist(),a(Object(c.a)(Object(c.a)({},n),{},Object(i.a)({},e.target.name,e.target.value)))},k=Object(j.a)(),S=(k.register,k.errors,k.handleSubmit);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"outter_admin_login",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"inner_admin_login",children:Object(m.jsxs)("div",{className:"login_wraper",children:[Object(m.jsx)("h2",{children:"Mottofit Admin Dashboard "}),Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(m.jsxs)("div",{className:"inner_form_loginAdmin",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsxs)("div",{className:"input_item1_signin",children:[Object(m.jsx)("input",{type:"text",placeholder:"Email",value:n.email,onChange:_,name:"email"}),Object(m.jsx)("img",{src:u.default,alt:"icon"})]}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsxs)("div",{className:"input_item1_signin",children:[Object(m.jsx)("input",{type:O?"text":"password",placeholder:"Password",value:n.password,onChange:_,name:"password"}),Object(m.jsx)("img",{src:p.default,alt:"icon",onClick:function(){f(!O)}})]}),x&&Object(m.jsx)("span",{className:"errorMessage",children:x}),Object(m.jsx)("button",{type:"submit",onClick:S((function(){return N.apply(this,arguments)})),children:"Login"})]})})]})})})})})}},256:function(e,t,n){"use strict";n.r(t);var a=n(231),s=(n(2),n(1));t.default=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(a.default,{})})}},418:function(e,t,n){}}]);
//# sourceMappingURL=107.2ffa4a1b.chunk.js.map