(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[118,79,144,189],{128:function(e,t,s){"use strict";s.r(t);var o=s(3),n=s(11),a=s(2),c=(s(470),s(225)),r=s(17),d=s(103),i=s(68),l=s(1);t.default=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],u=t[1],j=Object(a.useState)(!1),w=Object(n.a)(j,2),b=w[0],p=w[1],O=Object(a.useState)({password:"",newPassword:"",confirmPassword:""}),h=Object(n.a)(O,2),f=h[0],m=h[1],v=function(){p(!b)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"password_main",children:[Object(l.jsx)("div",{className:"password_heading",children:Object(l.jsx)("h2",{children:"Password Change"})}),Object(l.jsx)("div",{className:"password_form",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("".concat(c.COMMON_URL,"/v1/trainer/change-password"),{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},method:"POST",body:JSON.stringify({password:f.password,newPassword:f.newPassword})}).then((function(e){console.log(e),e.ok?(alert("New Password has been updated!"),r.history.push("/")):alert("You're Old Password was not correct ")})).catch((function(e){return console.log(e)}))},children:[Object(l.jsxs)("div",{className:"newPassword",children:[Object(l.jsx)("input",{type:s?"text":"password",placeholder:"Old Password",value:f.password,onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{password:e.target.value}))},name:"password"}),Object(l.jsx)("img",{src:d.default,alt:"icon",onClick:function(){u(!s)},style:{cursor:"pointer"}})]}),Object(l.jsxs)("div",{className:"newPassword",children:[Object(l.jsx)("input",{type:b?"text":"password",placeholder:"New Password",value:f.newPassword,onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{newPassword:e.target.value}))},name:"password"}),Object(l.jsx)("img",{src:d.default,alt:"icon",onClick:v,style:{cursor:"pointer"}})]}),Object(l.jsxs)("div",{className:"newPassword",children:[Object(l.jsx)("input",{type:b?"text":"password",placeholder:"Confirm New Password",value:f.confirmPassword,onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{confirmPassword:e.target.value}))},name:"password"}),Object(l.jsx)("img",{src:d.default,alt:"icon",onClick:v,style:{cursor:"pointer"}})]}),Object(l.jsxs)("button",{type:"submit",children:["Submit ",Object(l.jsx)(i.default,{})]})]})})]})})})}},225:function(e,t,s){"use strict";s.r(t),s.d(t,"COMMON_URL",(function(){return o})),s.d(t,"MESSAGING_URL",(function(){return n})),s.d(t,"SESSION_URL",(function(){return a})),s.d(t,"NOTIFICATION_URL",(function(){return c})),s.d(t,"PAYMENT_URL",(function(){return r}));var o="http://doodlebluelive.com:2307",n="http://doodlebluelive.com:2338",a="http://doodlebluelive.com:2337",c="",r="http://doodlebluelive.com:2336"},288:function(e,t,s){"use strict";s.r(t);var o=s(128),n=(s(2),s(1));t.default=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(o.default,{})})}},470:function(e,t,s){}}]);
//# sourceMappingURL=118.bdcdbf33.chunk.js.map