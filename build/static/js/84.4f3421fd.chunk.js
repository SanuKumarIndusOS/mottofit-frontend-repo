(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[84,96,200],{116:function(e,s,t){"use strict";t.r(s),t.d(s,"ErrorComponent",(function(){return r}));t(2);var a=t(1),r=function(e){var s=e.message;return Object(a.jsx)("span",{className:"text-danger",style:{fontSize:"16px"},children:s||"Error in field"})}},142:function(e,s,t){"use strict";t.r(s);var a=t(25),r=t(4),n=t(14),o=t(2),c=(t(533),t(13)),i=t(119),d=t(82),u=t(87),w=t(33),l=t(21),j=t(85),m=t(116),p=t(15),b=t(1),O=Object(w.b)(null,(function(e){return Object(l.b)({changePasswordAct:u.changePasswordAct},e)}))((function(e){var s=Object(o.useState)(!1),t=Object(n.a)(s,2),u=t[0],w=t[1],l=Object(o.useState)(!1),O=Object(n.a)(l,2),f=O[0],h=O[1],P=Object(o.useState)({password:"",newPassword:"",confirmPassword:""}),g=Object(n.a)(P,2),x=g[0],v=g[1],y=Object(o.useState)({}),C=Object(n.a)(y,2),N=C[0],S=C[1],A=function(e){var s=Object(j.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}};return{password:Object(r.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),newPassword:Object(r.a)({presence:{allowEmpty:!1,message:"^New password is required"}},e),confirmPassword:Object(r.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"newPassword",message:"^Passwords doesn't match",comparator:function(e,s){return JSON.stringify(e)===JSON.stringify(s)}}},e)}}());if(void 0!==s){var t=Object(r.a)({},s);S(Object(r.a)(Object(r.a)({},t),s))}return!s},E=function(){h(!f)},k=function(e){e.persist();var s=e.target||e||{},t=s.name,n=s.value,o=Object(r.a)({},N);o[t]=void 0,v(Object(r.a)(Object(r.a)({},x),{},Object(a.a)({},t,n))),S(Object(r.a)(Object(r.a)({},N),o))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"password_main",children:[Object(b.jsx)("div",{className:"password_heading",children:Object(b.jsx)("h2",{children:"Password Change"})}),Object(b.jsx)("div",{className:"password_form",children:Object(b.jsxs)("form",{onSubmit:function(s){s.preventDefault();var t={password:x.password,newPassword:x.newPassword},a={password:x.password,newPassword:x.newPassword,confirmPassword:x.confirmPassword},r=e.location.pathname,n="users"===(void 0===r?"":r).split("/")[1]?p.AuthApi.changePasswordUser:p.AuthApi.changePasswordTrainer;A(a)&&e.changePasswordAct(t,n).then((function(){c.history.push("/trainers/dashboard/schedule")})).catch((function(){return alert("You're Old Password was not correct ")}))},children:[Object(b.jsxs)("div",{className:"newPassword",children:[Object(b.jsx)("input",{type:u?"text":"password",placeholder:"Old Password",value:x.password,onChange:function(e){return k(e)},name:"password"}),Object(b.jsx)("img",{src:i.default,alt:"icon",onClick:function(){w(!u)},style:{cursor:"pointer"}})]}),N.password&&Object(b.jsx)(m.ErrorComponent,{message:N.password[0]}),Object(b.jsxs)("div",{className:"newPassword",children:[Object(b.jsx)("input",{type:f?"text":"password",placeholder:"New Password",value:x.newPassword,onChange:function(e){return k(e)},name:"newPassword"}),Object(b.jsx)("img",{src:i.default,alt:"icon",onClick:E,style:{cursor:"pointer"}})]}),N.newPassword&&Object(b.jsx)(m.ErrorComponent,{message:N.newPassword[0]}),Object(b.jsxs)("div",{className:"newPassword",children:[Object(b.jsx)("input",{type:f?"text":"password",placeholder:"Confirm New Password",value:x.confirmPassword,onChange:function(e){return k(e)},name:"confirmPassword"}),Object(b.jsx)("img",{src:i.default,alt:"icon",onClick:E,style:{cursor:"pointer"}})]}),N.confirmPassword&&Object(b.jsx)(m.ErrorComponent,{message:N.confirmPassword[0]}),Object(b.jsxs)("button",{type:"submit",children:["Submit ",Object(b.jsx)(d.default,{})]})]})})]})})})}));s.default=O},533:function(e,s,t){}}]);
//# sourceMappingURL=84.4f3421fd.chunk.js.map