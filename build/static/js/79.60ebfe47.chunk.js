(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[79,149,180],{116:function(t,e,n){"use strict";n.r(e);var o=n(3),c=n(11),i=n(2),r=(n(398),n(225)),s=n(14),u=n(69),a=n(1);e.default=function(){var t=Object(i.useState)({email:""}),e=Object(c.a)(t,2),n=e[0],l=e[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container forgot_main",children:[Object(a.jsx)("h2",{children:"Forgot Password?"})," ",Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("".concat(r.COMMON_URL,"/v1/user/reset-password"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:n.email})}).then((function(t){t.ok&&s.history.push("/forgot/success")})).catch((function(t){return console.log(t)}))},children:[Object(a.jsx)("input",{type:"email",placeholder:"Enter your email address",value:n.email,name:"email",onChange:function(t){l(Object(o.a)(Object(o.a)({},n),{},{email:t.target.value}))}}),Object(a.jsxs)("button",{type:"submit",className:"forgot_submit",children:["Submit ",Object(a.jsx)(u.default,{})]})]})]})})}},225:function(t,e,n){"use strict";n.r(e),n.d(e,"COMMON_URL",(function(){return o})),n.d(e,"MESSAGING_URL",(function(){return c})),n.d(e,"SESSION_URL",(function(){return i})),n.d(e,"NOTIFICATION_URL",(function(){return r})),n.d(e,"PAYMENT_URL",(function(){return s}));var o="http://doodlebluelive.com:2307",c="http://doodlebluelive.com:2338",i="http://doodlebluelive.com:2337",r="",s="http://doodlebluelive.com:2336"},398:function(t,e,n){}}]);
//# sourceMappingURL=79.60ebfe47.chunk.js.map