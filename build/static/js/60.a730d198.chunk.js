(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[60,131,186,233,316],{126:function(e,t,a){"use strict";a.r(t);var s=a(48),n=a.n(s),c=a(70),i=a(18),r=a(3),o=a(11),l=a(2),j=a(60),m=a(106),d=a(358),p=a(103),u=a(152),b=a(153),h=(a(468),a(9)),O=a(6),x=a(234),g=a(68),f=a(13),v=a(74),w=a(34),N=a(27),y=a(73),S=a(1),_=Object(w.b)(null,(function(e){return Object(N.b)({loginOrSignupAct:v.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=Object(l.useState)({firstName:"",lastName:"",email:"",phoneNo:"",password:"",cpassword:"",location:"",signUpType:"email"}),s=Object(o.a)(a,2),v=s[0],w=s[1],N=Object(l.useState)({}),_=Object(o.a)(N,2),C=_[0],k=_[1],A=Object(l.useState)(!1),E=Object(o.a)(A,2),P=E[0],q=E[1],L=Object(l.useState)(!1),U=Object(o.a)(L,2),I=U[0],F=U[1],M=Object(l.useState)(""),$=Object(o.a)(M,2),J=$[0],Z=$[1],z=function(e){e.persist();var t=e.target||e||{},a=t.name,s=t.value,n=Object(r.a)({},C);n[a]=void 0,w(Object(r.a)(Object(r.a)({},v),{},Object(i.a)({},a,s))),k(Object(r.a)(Object(r.a)({},C),n))},T=Object(h.f)();function R(e){return B.apply(this,arguments)}function B(){return(B=Object(c.a)(n.a.mark((function e(a){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s={firstName:v.firstName,lastName:v.lastName,email:v.email,phoneNo:v.phoneNo,password:v.password,cpassword:v.cpassword,location:v.location,signUpType:v.signUpType},c=f.AuthApi.userSignUp,D(s)){e.next=5;break}return e.abrupt("return");case 5:t(c,s).then((function(){T.push("/trainer/find")})).catch((function(e){Z("Sorry, something went wrong.",e.message)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){var t=Object(y.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}},t={format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}};return{firstName:Object(r.a)({presence:{allowEmpty:!1,message:"^First name is required"}},t),lastName:Object(r.a)({presence:{allowEmpty:!1,message:"^Last name is required"}},t),location:Object(r.a)({presence:{allowEmpty:!1,message:"^Location is required"}},t),phoneNo:{presence:{allowEmpty:!1,message:"^Phone number is required"},format:{pattern:/^[1-9][0-9]*$/,flags:"i",message:"^Invalid number"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(r.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(r.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(r.a)({},t);k(Object(r.a)(Object(r.a)({},a),t))}return!t};return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:"main_container",children:Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)("div",{className:"inner_wrapper",children:Object(S.jsxs)("div",{className:"inner_items",children:[Object(S.jsx)("h2",{children:"Sign Up with Motto!"}),Object(S.jsx)("p",{children:"Fill up the following details to create your account"}),Object(S.jsx)("div",{className:"form_items",children:Object(S.jsxs)("form",{onSubmit:R,children:[Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Name",type:"text",value:v.firstName,name:"firstName",onChange:z}),Object(S.jsx)("img",{src:j.default,alt:"icon"}),C.firstName&&Object(S.jsx)("span",{children:C.firstName[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"LastName",type:"text",value:v.lastName,name:"lastName",onChange:z}),Object(S.jsx)("img",{src:j.default,alt:"icon"}),C.lastName&&Object(S.jsx)("span",{children:C.lastName[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Location",type:"text",value:v.location,name:"location",onChange:z}),Object(S.jsx)("img",{src:j.default,alt:"icon"}),C.location&&Object(S.jsx)("span",{children:C.location[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Email",type:"email",value:v.email,name:"email",onChange:z}),Object(S.jsx)("img",{src:m.default,alt:"icon"}),C.email&&Object(S.jsx)("span",{children:C.email[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Phone",type:"text",value:v.phoneNo,name:"phoneNo",onChange:z}),Object(S.jsx)("img",{src:d.default,alt:"icon"}),C.phoneNo&&Object(S.jsx)("span",{children:C.phoneNo[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Create Password",type:P?"text":"password",value:v.password,name:"password",onChange:z}),Object(S.jsx)("img",{src:p.default,alt:"icon",onClick:function(){q(!P)}}),C.password&&Object(S.jsx)("span",{children:C.password[0]})]}),Object(S.jsxs)("div",{className:"input_items",children:[Object(S.jsx)("input",{placeholder:"Confirm Password",type:I?"text":"password",name:"cpassword",value:v.cpassword,onChange:z}),Object(S.jsx)("img",{src:p.default,alt:"icon",onClick:function(){F(!I)}}),C.cpassword&&Object(S.jsx)("span",{children:C.cpassword[0]})]}),J&&Object(S.jsx)("span",{className:"errorMessage",children:J}),Object(S.jsxs)("div",{className:"or_items",children:[Object(S.jsx)("div",{className:"hr_line"}),Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:"or"})}),Object(S.jsx)("div",{className:"hr_line"})]}),Object(S.jsxs)("div",{className:"social_buttons",children:[Object(S.jsxs)("button",{className:"facebook-auth",children:[Object(S.jsx)("img",{src:u.default,alt:"icon"}),"Sign Up with Facebook"]}),Object(S.jsxs)("button",{className:"google-auth",children:[Object(S.jsx)("img",{src:b.default,alt:"icon"}),"Sign up with Google"]})]}),Object(S.jsx)("div",{className:"submit_button",children:Object(S.jsxs)("button",{type:"submit",onClick:R,children:[" ",Object(S.jsx)(g.default,{})]})})]})}),Object(S.jsxs)("div",{className:"login_content_signup",children:[Object(S.jsx)("h1",{children:"Already have an account?"}),Object(S.jsxs)(O.a,{to:"/",children:["Sign In now",Object(S.jsx)(x.default,{})]})]})]})})})})})}));t.default=_},234:function(e,t,a){"use strict";a.r(t);a(2),a(403);var s=a(1);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsx)("span",{className:"arrow-hover",children:Object(s.jsxs)("svg",{className:"arrow-icon",focusable:"false",imageRendering:"auto",baseProfile:"basic",version:"1.1",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 62 35",children:[Object(s.jsx)("title",{children:"Arrow Icon"}),Object(s.jsx)("rect",{x:"0",y:"14.7",width:"55.2",height:"4.55"}),Object(s.jsx)("g",{transform:"translate(40.9 0)",children:Object(s.jsx)("path",{stroke:"none",d:"M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"})})]})})})})}},358:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},403:function(e,t,a){},468:function(e,t,a){}}]);
//# sourceMappingURL=60.a730d198.chunk.js.map