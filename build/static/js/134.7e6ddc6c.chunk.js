(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[134,187],{292:function(e,t,a){"use strict";a.r(t);var n=a(63),s=a.n(n),i=a(25),c=a(4),r=a(88),l=a(13),o=a(2),d=a(17),j=(a(530),a(126)),m=a(123),b=a(21),u=a(89),p=a(33),O=a(16),h=a(87),g=a(1),x=Object(p.b)(null,(function(e){return Object(b.b)({loginAct:u.loginOrSignUp},e)}))((function(e){var t=e.loginAct,a=Object(o.useState)({email:"",password:"",signUpType:"email",deviceName:"email"}),n=Object(l.a)(a,2),b=n[0],u=n[1],p=Object(o.useState)({}),x=Object(l.a)(p,2),f=x[0],v=x[1],w=Object(o.useState)(!1),y=Object(l.a)(w,2),N=y[0],S=y[1],_=Object(o.useState)(!1),k=Object(l.a)(_,2),A=k[0],E=k[1],C=Object(o.useState)(""),U=Object(l.a)(C,2),L=U[0],P=U[1],T=Object(d.f)();function q(e){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(s.a.mark((function e(a){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n={email:b.email,password:b.password,signUpType:b.signUpType,deviceName:b.deviceName},J(n)){e.next=4;break}return e.abrupt("return");case 4:i=O.AuthApi.adminApi,E(!0),P(""),t(i,n).then((function(e){var t=e.type,a=e.token;E(!1),"admin"===t&&(localStorage.setItem("admin-token",a),localStorage.setItem("type",1),T.push("/admins/dashboard"))})).catch((function(e){E(!1),P("Sorry, something went wrong.",e.message)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,n=t.value,s=Object(c.a)({},f);s[a]=void 0,u(Object(c.a)(Object(c.a)({},b),{},Object(i.a)({},a,n))),v(Object(c.a)(Object(c.a)({},f),s))},J=function(e){var t=Object(h.default)(e,{email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:{presence:{allowEmpty:!1,message:"^Password is required"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}}});if(void 0!==t){var a=Object(c.a)({},t);v(Object(c.a)(Object(c.a)({},a),t))}return!t};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"outter_admin_login",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"inner_admin_login",children:Object(g.jsxs)("div",{className:"login_wraper",children:[Object(g.jsx)("h2",{children:"Mottofit Admin Dashboard "}),Object(g.jsx)("form",{onSubmit:q,children:Object(g.jsxs)("div",{className:"inner_form_loginAdmin",children:[Object(g.jsx)("label",{children:"Email"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"input_item1_signin",children:[Object(g.jsx)("input",{type:"text",placeholder:"Email",value:b.email,onChange:I,name:"email"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),f.email&&Object(g.jsx)("span",{className:"fs-14 text-danger",children:f.email[0]})]}),Object(g.jsx)("label",{children:"Password"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"input_item1_signin",children:[Object(g.jsx)("input",{type:N?"text":"password",placeholder:"Password",value:b.password,onChange:I,name:"password"}),Object(g.jsx)("img",{src:m.default,alt:"icon",onClick:function(){S(!N)}})]}),f.password&&Object(g.jsx)("span",{className:"fs-14 text-danger",children:f.password[0]})]}),L&&Object(g.jsx)("span",{className:"errorMessage",children:L}),Object(g.jsx)("button",{type:"submit",onClick:function(e){return q(e)},disabled:A,children:A?"Loading...":"Login"})]})})]})})})})})}));t.default=x},530:function(e,t,a){}}]);
//# sourceMappingURL=134.7e6ddc6c.chunk.js.map