(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[120,127,168],{245:function(e,t,a){"use strict";a.r(t);var n=a(50),s=a.n(n),i=a(17),c=a(3),r=a(71),l=a(12),o=a(2),d=a(9),j=(a(457),a(109)),m=a(105),u=a(27),b=a(75),p=a(35),O=a(10),h=a(73),f=a(1),g=Object(p.b)(null,(function(e){return Object(u.b)({loginAct:b.loginOrSignUp},e)}))((function(e){var t=e.loginAct,a=Object(o.useState)({email:"",password:"",signUpType:"email",deviceName:"email"}),n=Object(l.a)(a,2),u=n[0],b=n[1],p=Object(o.useState)({}),g=Object(l.a)(p,2),x=g[0],v=g[1],w=Object(o.useState)(!1),N=Object(l.a)(w,2),y=N[0],_=N[1],S=Object(o.useState)(!1),k=Object(l.a)(S,2),A=k[0],E=k[1],C=Object(o.useState)(""),U=Object(l.a)(C,2),L=U[0],P=U[1],T=Object(d.f)();function q(e){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(s.a.mark((function e(a){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n={email:u.email,password:u.password,signUpType:u.signUpType,deviceName:u.deviceName},M(n)){e.next=4;break}return e.abrupt("return");case 4:i=O.AuthApi.adminApi,E(!0),P(""),t(i,n).then((function(e){var t=e.type,a=e.token;E(!1),"admin"===t&&(localStorage.setItem("admin-token",a),T.push("/admins/dashboard"))})).catch((function(e){E(!1),P("Sorry, something went wrong.",e.message)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,n=t.value,s=Object(c.a)({},x);s[a]=void 0,b(Object(c.a)(Object(c.a)({},u),{},Object(i.a)({},a,n))),v(Object(c.a)(Object(c.a)({},x),s))},M=function(e){var t=Object(h.default)(e,{email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:{presence:{allowEmpty:!1,message:"^Password is required"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}}});if(void 0!==t){var a=Object(c.a)({},t);v(Object(c.a)(Object(c.a)({},a),t))}return!t};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"outter_admin_login",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"inner_admin_login",children:Object(f.jsxs)("div",{className:"login_wraper",children:[Object(f.jsx)("h2",{children:"Mottofit Admin Dashboard "}),Object(f.jsx)("form",{onSubmit:q,children:Object(f.jsxs)("div",{className:"inner_form_loginAdmin",children:[Object(f.jsx)("label",{children:"Email"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"input_item1_signin",children:[Object(f.jsx)("input",{type:"text",placeholder:"Email",value:u.email,onChange:J,name:"email"}),Object(f.jsx)("img",{src:j.default,alt:"icon"})]}),x.email&&Object(f.jsx)("span",{className:"fs-14 text-danger",children:x.email[0]})]}),Object(f.jsx)("label",{children:"Password"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"input_item1_signin",children:[Object(f.jsx)("input",{type:y?"text":"password",placeholder:"Password",value:u.password,onChange:J,name:"password"}),Object(f.jsx)("img",{src:m.default,alt:"icon",onClick:function(){_(!y)}})]}),x.password&&Object(f.jsx)("span",{className:"fs-14 text-danger",children:x.password[0]})]}),L&&Object(f.jsx)("span",{className:"errorMessage",children:L}),Object(f.jsx)("button",{type:"submit",onClick:function(e){return q(e)},disabled:A,children:A?"Loading...":"Login"})]})})]})})})})})}));t.default=g},277:function(e,t,a){"use strict";a.r(t);var n=a(245),s=(a(2),a(1));t.default=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(n.default,{})})}},457:function(e,t,a){}}]);
//# sourceMappingURL=120.c6393eee.chunk.js.map