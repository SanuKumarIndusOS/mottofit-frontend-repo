(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[77,85,107,216],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"ErrorComponent",(function(){return a}));r(2);var n=r(1),a=function(e){var t=e.message;return Object(n.jsx)("span",{className:"text-danger",style:{fontSize:"16px"},children:t||"Error in field"})}},148:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r.n(n),s=r(4),c=r(26),i=r(11),o=r(2),u=(r(501),r(68)),l=r(5),b=r(91),j=r(27),f=r(23),m=r(95),d=r(130),p=r(1),O=Object(j.b)(null,(function(e){return Object(f.b)({resetPassword:u.resetPassword},e)}))((function(e){var t=Object(o.useState)(""),r=Object(i.a)(t,2),n=r[0],u=r[1];function j(){return(j=Object(c.a)(a.a.mark((function t(r){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),x(s={email:n})){t.next=4;break}return t.abrupt("return");case 4:e.resetPassword(s).then((function(){l.history.push("/forgot/success")})).catch((function(e){return console.log(e)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=Object(o.useState)({}),O=Object(i.a)(f,2),h=O[0],v=O[1],x=function(e){var t=Object(m.default)(e,{email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0}});if(void 0!==t){var r=Object(s.a)({},t);v(Object(s.a)(Object(s.a)({},r),t))}return!t};return Object(p.jsxs)("div",{className:"container forgot_main",children:[Object(p.jsx)("h2",{children:"Forgot Password?"})," ",Object(p.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(p.jsx)("input",{type:"email",placeholder:"Enter your email address",value:n,name:"email",onChange:function(e){e.persist();var t=e.target||{},r=t.name,n=t.value,a=Object(s.a)({},h);a[r]=void 0,v(Object(s.a)(Object(s.a)({},h),a)),u(n)}}),h.email&&Object(p.jsx)(d.ErrorComponent,{message:h.email[0]}),Object(p.jsxs)("button",{type:"submit",className:"forgot_submit",children:["Submit ",Object(p.jsx)(b.default,{})]})]})]})}));t.default=O},194:function(e,t,r){"use strict";r.r(t);r(2);var n=r(148),a=r(1);t.default=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(n.default,{})})}},501:function(e,t,r){}}]);