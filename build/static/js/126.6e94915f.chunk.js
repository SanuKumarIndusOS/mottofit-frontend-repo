(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[126,84,96,213],{120:function(e,s,t){"use strict";t.r(s),t.d(s,"ErrorComponent",(function(){return a}));t(2);var r=t(1),a=function(e){var s=e.message;return Object(r.jsx)("span",{className:"text-danger",style:{fontSize:"16px"},children:s||"Error in field"})}},146:function(e,s,t){"use strict";t.r(s);var r=t(25),a=t(4),n=t(13),o=t(2),c=(t(543),t(15)),i=t(123),d=t(83),u=t(89),w=t(33),l=t(21),j=t(87),m=t(120),p=t(16),b=t(36),O=t(1),f=Object(w.b)(null,(function(e){return Object(l.b)({changePasswordAct:u.changePasswordAct},e)}))((function(e){var s=Object(o.useState)(!1),t=Object(n.a)(s,2),u=t[0],w=t[1],l=Object(o.useState)(!1),f=Object(n.a)(l,2),h=f[0],P=f[1],g=Object(o.useState)({password:"",newPassword:"",confirmPassword:""}),x=Object(n.a)(g,2),v=x[0],y=x[1],C=Object(o.useState)({}),N=Object(n.a)(C,2),S=N[0],A=N[1],E=function(e){var s=Object(j.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}};return{password:Object(a.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),newPassword:Object(a.a)({presence:{allowEmpty:!1,message:"^New password is required"}},e),confirmPassword:Object(a.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"newPassword",message:"^Passwords doesn't match",comparator:function(e,s){return JSON.stringify(e)===JSON.stringify(s)}}},e)}}());if(void 0!==s){var t=Object(a.a)({},s);A(Object(a.a)(Object(a.a)({},t),s))}return!s},k=function(){P(!h)},_=function(e){e.persist();var s=e.target||e||{},t=s.name,n=s.value,o=Object(a.a)({},S);o[t]=void 0,y(Object(a.a)(Object(a.a)({},v),{},Object(r.a)({},t,n))),A(Object(a.a)(Object(a.a)({},S),o))};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"password_main",children:[Object(O.jsx)("div",{className:"password_heading",children:Object(O.jsx)("h2",{children:"Password Change"})}),Object(O.jsx)("div",{className:"password_form",children:Object(O.jsxs)("form",{onSubmit:function(s){s.preventDefault();var t={password:v.password,newPassword:v.newPassword},r={password:v.password,newPassword:v.newPassword,confirmPassword:v.confirmPassword},a=e.location.pathname,n="users"===(void 0===a?"":a).split("/")[1]?p.AuthApi.changePasswordUser:p.AuthApi.changePasswordTrainer;E(r)&&e.changePasswordAct(t,n).then((function(){c.history.push("/trainers/dashboard/schedule")})).catch((function(e){return Object(b.Toast)({type:"error",message:e.message||"Error"})}))},children:[Object(O.jsxs)("div",{className:"newPassword",children:[Object(O.jsx)("input",{type:u?"text":"password",placeholder:"Old Password",value:v.password,onChange:function(e){return _(e)},name:"password"}),Object(O.jsx)("img",{src:i.default,alt:"icon",onClick:function(){w(!u)},style:{cursor:"pointer"}})]}),S.password&&Object(O.jsx)(m.ErrorComponent,{message:S.password[0]}),Object(O.jsxs)("div",{className:"newPassword",children:[Object(O.jsx)("input",{type:h?"text":"password",placeholder:"New Password",value:v.newPassword,onChange:function(e){return _(e)},name:"newPassword"}),Object(O.jsx)("img",{src:i.default,alt:"icon",onClick:k,style:{cursor:"pointer"}})]}),S.newPassword&&Object(O.jsx)(m.ErrorComponent,{message:S.newPassword[0]}),Object(O.jsxs)("div",{className:"newPassword",children:[Object(O.jsx)("input",{type:h?"text":"password",placeholder:"Confirm New Password",value:v.confirmPassword,onChange:function(e){return _(e)},name:"confirmPassword"}),Object(O.jsx)("img",{src:i.default,alt:"icon",onClick:k,style:{cursor:"pointer"}})]}),S.confirmPassword&&Object(O.jsx)(m.ErrorComponent,{message:S.confirmPassword[0]}),Object(O.jsxs)("button",{type:"submit",children:["Submit ",Object(O.jsx)(d.default,{})]})]})})]})})})}));s.default=f},339:function(e,s,t){"use strict";t.r(s);var r=t(4),a=t(146),n=(t(2),t(1));s.default=function(e){return Object(n.jsx)(a.default,Object(r.a)({},e))}},543:function(e,s,t){}}]);
//# sourceMappingURL=126.6e94915f.chunk.js.map