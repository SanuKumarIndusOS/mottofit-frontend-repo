(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[64,140,201,249,334],{143:function(e,t,a){"use strict";a.r(t);var s=a(62),n=a.n(s),c=a(87),i=a(25),r=a(4),o=a(15),l=a(2),j=a(53),m=a(125),d=a(434),p=a(122),u=a(170),b=a(171),h=(a(539),a(17)),O=a(8),x=a(278),g=a(82),f=a(16),N=a(88),w=a(33),v=a(21),y=a(86),S=a(699),_=a.n(S),C=a(1),k=Object(w.b)(null,(function(e){return Object(v.b)({loginOrSignupAct:N.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=Object(l.useState)({firstName:"",lastName:"",email:"",phoneNo:"",password:"",cpassword:"",location:"",signUpType:"email"}),s=Object(o.a)(a,2),N=s[0],w=s[1],v=Object(l.useState)({}),S=Object(o.a)(v,2),k=S[0],A=S[1],E=Object(l.useState)(!1),P=Object(o.a)(E,2),L=P[0],q=P[1],U=Object(l.useState)(!1),I=Object(o.a)(U,2),F=I[0],M=I[1],J=Object(l.useState)(""),Z=Object(o.a)(J,2),$=Z[0],z=Z[1],T=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,s=t.value,n=Object(r.a)({},k);n[a]=void 0,w(Object(r.a)(Object(r.a)({},N),{},Object(i.a)({},a,s))),A(Object(r.a)(Object(r.a)({},k),n))},D=Object(h.f)();function R(e){return B.apply(this,arguments)}function B(){return(B=Object(c.a)(n.a.mark((function e(a){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s={firstName:N.firstName,lastName:N.lastName,email:N.email,phoneNo:N.phoneNo,password:N.password,cpassword:N.cpassword,location:N.location,signUpType:N.signUpType},c=f.AuthApi.userSignUp,G(s)){e.next=5;break}return e.abrupt("return");case 5:s.phoneNo=N.phoneNo.includes("+")?N.phoneNo:"+".concat(N.phoneNo),t(c,s).then((function(){localStorage.setItem("type",3),D.push("/trainer/find")})).catch((function(e){z("Sorry, something went wrong.",e.message)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e){var t=Object(y.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}},t={format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}};return{firstName:Object(r.a)({presence:{allowEmpty:!1,message:"^First name is required"}},t),lastName:Object(r.a)({presence:{allowEmpty:!1,message:"^Last name is required"}},t),location:Object(r.a)({presence:{allowEmpty:!1,message:"^Location is required"}},t),phoneNo:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(r.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(r.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(r.a)({},t);A(Object(r.a)(Object(r.a)({},a),t))}return!t};return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"main_container",children:Object(C.jsx)("div",{className:"wrapper",children:Object(C.jsx)("div",{className:"inner_wrapper",children:Object(C.jsxs)("div",{className:"inner_items",children:[Object(C.jsx)("h2",{children:"Sign Up with Motto!"}),Object(C.jsx)("p",{children:"Fill up the following details to create your account"}),Object(C.jsx)("div",{className:"form_items",children:Object(C.jsxs)("form",{onSubmit:R,children:[Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Name",type:"text",value:N.firstName,name:"firstName",onChange:T}),Object(C.jsx)("img",{src:j.default,alt:"icon"}),k.firstName&&Object(C.jsx)("span",{children:k.firstName[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"LastName",type:"text",value:N.lastName,name:"lastName",onChange:T}),Object(C.jsx)("img",{src:j.default,alt:"icon"}),k.lastName&&Object(C.jsx)("span",{children:k.lastName[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Location",type:"text",value:N.location,name:"location",onChange:T}),Object(C.jsx)("img",{src:j.default,alt:"icon"}),k.location&&Object(C.jsx)("span",{children:k.location[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Email",type:"email",value:N.email,name:"email",onChange:T}),Object(C.jsx)("img",{src:m.default,alt:"icon"}),k.email&&Object(C.jsx)("span",{children:k.email[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)(_.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone",inputProps:{name:"phone"},specialLabel:"",value:N.phoneNo,name:"phoneNo",onChange:function(e){T({target:{name:"phoneNo",value:e}})}}),Object(C.jsx)("img",{src:d.default,alt:"icon"}),k.phoneNo&&Object(C.jsx)("span",{children:k.phoneNo[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Create Password",type:L?"text":"password",value:N.password,name:"password",onChange:T}),Object(C.jsx)("img",{src:p.default,alt:"icon",onClick:function(){q(!L)}}),k.password&&Object(C.jsx)("span",{children:k.password[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Confirm Password",type:F?"text":"password",name:"cpassword",value:N.cpassword,onChange:T}),Object(C.jsx)("img",{src:p.default,alt:"icon",onClick:function(){M(!F)}}),k.cpassword&&Object(C.jsx)("span",{children:k.cpassword[0]})]}),$&&Object(C.jsx)("span",{className:"errorMessage",children:$}),Object(C.jsxs)("div",{className:"or_items",children:[Object(C.jsx)("div",{className:"hr_line"}),Object(C.jsx)("div",{children:Object(C.jsx)("p",{children:"or"})}),Object(C.jsx)("div",{className:"hr_line"})]}),Object(C.jsxs)("div",{className:"social_buttons",children:[Object(C.jsxs)("button",{className:"facebook-auth",children:[Object(C.jsx)("img",{src:u.default,alt:"icon"}),"Sign Up with Facebook"]}),Object(C.jsxs)("button",{className:"google-auth",children:[Object(C.jsx)("img",{src:b.default,alt:"icon"}),"Sign up with Google"]})]}),Object(C.jsx)("div",{className:"submit_button",children:Object(C.jsxs)("button",{type:"submit",onClick:R,children:[" ",Object(C.jsx)(g.default,{})]})})]})}),Object(C.jsxs)("div",{className:"login_content_signup",children:[Object(C.jsx)("h1",{children:"Already have an account?"}),Object(C.jsxs)(O.a,{to:"/",children:["Sign In now",Object(C.jsx)(x.default,{})]})]})]})})})})})}));t.default=k},278:function(e,t,a){"use strict";a.r(t);a(2),a(483);var s=a(1);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsx)("span",{className:"arrow-hover",children:Object(s.jsxs)("svg",{className:"arrow-icon",focusable:"false",imageRendering:"auto",baseProfile:"basic",version:"1.1",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 62 35",children:[Object(s.jsx)("title",{children:"Arrow Icon"}),Object(s.jsx)("rect",{x:"0",y:"14.7",width:"55.2",height:"4.55"}),Object(s.jsx)("g",{transform:"translate(40.9 0)",children:Object(s.jsx)("path",{stroke:"none",d:"M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"})})]})})})})}},434:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},483:function(e,t,a){},539:function(e,t,a){}}]);
//# sourceMappingURL=64.cee93b48.chunk.js.map