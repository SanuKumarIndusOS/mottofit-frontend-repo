(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[83,96,189],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"ErrorComponent",(function(){return a}));r(2);var n=r(1),a=function(e){var t=e.message;return Object(n.jsx)("span",{className:"text-danger",style:{fontSize:"16px"},children:t||"Error in field"})}},133:function(e,t,r){"use strict";r.r(t);var n=r(62),a=r.n(n),s=r(4),c=r(87),o=r(15),i=r(2),u=(r(471),r(88)),l=r(14),b=r(82),j=r(33),m=r(21),f=r(86),p=r(119),d=r(1),O=Object(j.b)(null,(function(e){return Object(m.b)({resetPassword:u.resetPassword},e)}))((function(e){var t=Object(i.useState)(""),r=Object(o.a)(t,2),n=r[0],u=r[1];function j(){return(j=Object(c.a)(a.a.mark((function t(r){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),x(s={email:n})){t.next=4;break}return t.abrupt("return");case 4:e.resetPassword(s).then((function(){l.history.push("/forgot/success")})).catch((function(e){return console.log(e)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=Object(i.useState)({}),O=Object(o.a)(m,2),h=O[0],v=O[1],x=function(e){var t=Object(f.default)(e,{email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0}});if(void 0!==t){var r=Object(s.a)({},t);v(Object(s.a)(Object(s.a)({},r),t))}return!t};return Object(d.jsxs)("div",{className:"container forgot_main",children:[Object(d.jsx)("h2",{children:"Forgot Password?"})," ",Object(d.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(d.jsx)("input",{type:"email",placeholder:"Enter your email address",value:n,name:"email",onChange:function(e){e.persist();var t=e.target||{},r=t.name,n=t.value,a=Object(s.a)({},h);a[r]=void 0,v(Object(s.a)(Object(s.a)({},h),a)),u(n)}}),h.email&&Object(d.jsx)(p.ErrorComponent,{message:h.email[0]}),Object(d.jsxs)("button",{type:"submit",className:"forgot_submit",children:["Submit ",Object(d.jsx)(b.default,{})]})]})]})}));t.default=O},471:function(e,t,r){}}]);
//# sourceMappingURL=83.7f04d64b.chunk.js.map