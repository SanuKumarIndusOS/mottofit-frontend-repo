(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[64,135,195,242,326],{127:function(e,t,a){"use strict";a.r(t);var s=a(51),n=a.n(s),c=a(75),i=a(18),r=a(3),o=a(12),l=a(2),j=a(61),m=a(109),d=a(379),p=a(106),u=a(154),b=a(155),h=(a(488),a(10)),O=a(6),x=a(240),g=a(71),f=a(9),w=a(77),N=a(37),v=a(26),y=a(76),S=a(1),_=Object(N.b)(null,(function(e){return Object(v.b)({loginOrSignupAct:w.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=Object(l.useState)({firstName:"",lastName:"",email:"",phoneNo:"",password:"",cpassword:"",location:"",signUpType:"email"}),s=Object(o.a)(a,2),w=s[0],N=s[1],v=Object(l.useState)({}),_=Object(o.a)(v,2),C=_[0],k=_[1],A=Object(l.useState)(!1),E=Object(o.a)(A,2),P=E[0],q=E[1],L=Object(l.useState)(!1),U=Object(o.a)(L,2),I=U[0],F=U[1],M=Object(l.useState)(""),J=Object(o.a)(M,2),Z=J[0],$=J[1],z=function(e){e.persist();var t=e.target||e||{},a=t.name,s=t.value,n=Object(r.a)({},C);n[a]=void 0,N(Object(r.a)(Object(r.a)({},w),{},Object(i.a)({},a,s))),k(Object(r.a)(Object(r.a)({},C),n))},T=Object(h.f)();function R(e){return B.apply(this,arguments)}function B(){return(B=Object(c.a)(n.a.mark((function e(a){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s={firstName:w.firstName,lastName:w.lastName,email:w.email,phoneNo:"+1".concat(w.phoneNo),password:w.password,cpassword:w.cpassword,location:w.location,signUpType:w.signUpType},c=f.AuthApi.userSignUp,D(s)){e.next=5;break}return e.abrupt("return");case 5:t(c,s).then((function(){localStorage.setItem("type",3),T.push("/trainer/find")})).catch((function(e){$("Sorry, something went wrong.",e.message)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){var t=Object(y.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}},t={format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}};return{firstName:Object(r.a)({presence:{allowEmpty:!1,message:"^First name is required"}},t),lastName:Object(r.a)({presence:{allowEmpty:!1,message:"^Last name is required"}},t),location:Object(r.a)({presence:{allowEmpty:!1,message:"^Location is required"}},t),phoneNo:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(r.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(r.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(r.a)({},t);k(Object(r.a)(Object(r.a)({},a),t))}return!t};return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:"main_container",children:Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)("div",{className:"inner_wrapper",children:Object(S.jsxs)("div",{className:"inner_items",children:[Object(S.jsx)("h2",{children:"Sign Up with Motto!"}),Object(S.jsx)("p",{children:"Fill up the following details to create your account"}),Object(S.jsx)("div",{className:"form_items",children:Object(S.jsxs)("form",{onSubmit:R,children:[Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Name",type:"text",value:w.firstName,name:"firstName",onChange:z}),Object(S.jsx)("img",{src:j.default,alt:"icon"}),C.firstName&&Object(S.jsx)("span",{children:C.firstName[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"LastName",type:"text",value:w.lastName,name:"lastName",onChange:z}),Object(S.jsx)("img",{src:j.default,alt:"icon"}),C.lastName&&Object(S.jsx)("span",{children:C.lastName[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Location",type:"text",value:w.location,name:"location",onChange:z}),Object(S.jsx)("img",{src:j.default,alt:"icon"}),C.location&&Object(S.jsx)("span",{children:C.location[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Email",type:"email",value:w.email,name:"email",onChange:z}),Object(S.jsx)("img",{src:m.default,alt:"icon"}),C.email&&Object(S.jsx)("span",{children:C.email[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Phone",type:"text",value:w.phoneNo,name:"phoneNo",onChange:z}),Object(S.jsx)("img",{src:d.default,alt:"icon"}),C.phoneNo&&Object(S.jsx)("span",{children:C.phoneNo[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Create Password",type:P?"text":"password",value:w.password,name:"password",onChange:z}),Object(S.jsx)("img",{src:p.default,alt:"icon",onClick:function(){q(!P)}}),C.password&&Object(S.jsx)("span",{children:C.password[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Confirm Password",type:I?"text":"password",name:"cpassword",value:w.cpassword,onChange:z}),Object(S.jsx)("img",{src:p.default,alt:"icon",onClick:function(){F(!I)}}),C.cpassword&&Object(S.jsx)("span",{children:C.cpassword[0]})]}),Z&&Object(S.jsx)("span",{className:"errorMessage",children:Z}),Object(S.jsxs)("div",{className:"or_items",children:[Object(S.jsx)("div",{className:"hr_line"}),Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:"or"})}),Object(S.jsx)("div",{className:"hr_line"})]}),Object(S.jsxs)("div",{className:"social_buttons",children:[Object(S.jsxs)("button",{className:"facebook-auth",children:[Object(S.jsx)("img",{src:u.default,alt:"icon"}),"Sign Up with Facebook"]}),Object(S.jsxs)("button",{className:"google-auth",children:[Object(S.jsx)("img",{src:b.default,alt:"icon"}),"Sign up with Google"]})]}),Object(S.jsx)("div",{className:"submit_button",children:Object(S.jsxs)("button",{type:"submit",onClick:R,children:[" ",Object(S.jsx)(g.default,{})]})})]})}),Object(S.jsxs)("div",{className:"login_content_signup",children:[Object(S.jsx)("h1",{children:"Already have an account?"}),Object(S.jsxs)(O.a,{to:"/",children:["Sign In now",Object(S.jsx)(x.default,{})]})]})]})})})})})}));t.default=_},240:function(e,t,a){"use strict";a.r(t);a(2),a(428);var s=a(1);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsx)("span",{className:"arrow-hover",children:Object(s.jsxs)("svg",{className:"arrow-icon",focusable:"false",imageRendering:"auto",baseProfile:"basic",version:"1.1",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 62 35",children:[Object(s.jsx)("title",{children:"Arrow Icon"}),Object(s.jsx)("rect",{x:"0",y:"14.7",width:"55.2",height:"4.55"}),Object(s.jsx)("g",{transform:"translate(40.9 0)",children:Object(s.jsx)("path",{stroke:"none",d:"M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"})})]})})})})}},379:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},428:function(e,t,a){},488:function(e,t,a){}}]);
//# sourceMappingURL=64.b8c64fc4.chunk.js.map