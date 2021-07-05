(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[60,63,143,213,261,346],{151:function(e,t,a){"use strict";a.r(t);var s=a(64),n=a.n(s),c=a(93),i=a(28),r=a(4),o=a(11),l=a(2),j=a(43),m=a(131),p=a(445),d=a(128),u=(a(97),a(98),a(551),a(17)),b=a(9),h=a(288),O=a(88),x=a(15),f=a(66),g=a(24),N=a(20),v=a(92),w=a(736),y=a.n(w),_=a(31),S=a(67),C=a(1),E=Object(g.b)(null,(function(e){return Object(N.b)({loginOrSignupAct:f.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=Object(l.useState)({firstName:"",lastName:"",email:"",phoneNo:"",password:"",cpassword:"",location:"",signUpType:"email"}),s=Object(o.a)(a,2),f=s[0],g=s[1],N=Object(l.useState)({}),w=Object(o.a)(N,2),E=w[0],A=w[1],L=Object(l.useState)(!1),P=Object(o.a)(L,2),k=P[0],q=P[1],I=Object(l.useState)(!1),U=Object(o.a)(I,2),M=U[0],T=U[1],F=Object(l.useState)(""),J=Object(o.a)(F,2),Z=J[0],$=(J[1],function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,s=t.value,n=Object(r.a)({},E);n[a]=void 0,g(Object(r.a)(Object(r.a)({},f),{},Object(i.a)({},a,s))),A(Object(r.a)(Object(r.a)({},E),n))}),z=Object(u.f)();function D(e){return R.apply(this,arguments)}function R(){return(R=Object(c.a)(n.a.mark((function e(a){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s={firstName:f.firstName,lastName:f.lastName,email:f.email,phoneNo:f.phoneNo,password:f.password,cpassword:f.cpassword,location:f.location,signUpType:f.signUpType},c=x.AuthApi.userSignUp,B(s)){e.next=5;break}return e.abrupt("return");case 5:s.phoneNo=f.phoneNo.includes("+")?f.phoneNo:"+".concat(f.phoneNo),t(c,s).then((function(){localStorage.setItem("type",3),z.push("/trainer/find")})).catch((function(e){Object(_.Toast)({type:"error",message:e.message||"Error"})}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){var t=Object(v.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}},t={format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}};return{firstName:Object(r.a)({presence:{allowEmpty:!1,message:"^First name is required"}},t),lastName:Object(r.a)({presence:{allowEmpty:!1,message:"^Last name is required"}},t),location:Object(r.a)({presence:{allowEmpty:!1,message:"^Location is required"}},t),phoneNo:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(r.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(r.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(r.a)({},t);A(Object(r.a)(Object(r.a)({},a),t))}return!t};return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"main_container",children:Object(C.jsx)("div",{className:"wrapper",children:Object(C.jsx)("div",{className:"inner_wrapper",children:Object(C.jsxs)("div",{className:"inner_items",children:[Object(C.jsx)("h2",{children:"Sign Up with Motto!"}),Object(C.jsx)("p",{children:"Fill up the following details to create your account"}),Object(C.jsx)("div",{className:"form_items",children:Object(C.jsxs)("form",{onSubmit:D,children:[Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Name",type:"text",value:f.firstName,name:"firstName",onChange:$}),Object(C.jsx)("img",{src:j.default,alt:"icon"}),E.firstName&&Object(C.jsx)("span",{children:E.firstName[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"LastName",type:"text",value:f.lastName,name:"lastName",onChange:$}),Object(C.jsx)("img",{src:j.default,alt:"icon"}),E.lastName&&Object(C.jsx)("span",{children:E.lastName[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Location",type:"text",value:f.location,name:"location",onChange:$}),Object(C.jsx)("img",{src:j.default,alt:"icon"}),E.location&&Object(C.jsx)("span",{children:E.location[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Email",type:"email",value:f.email,name:"email",onChange:$}),Object(C.jsx)("img",{src:m.default,alt:"icon"}),E.email&&Object(C.jsx)("span",{children:E.email[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)(y.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone",inputProps:{name:"phone"},specialLabel:"",value:f.phoneNo,name:"phoneNo",onChange:function(e){$({target:{name:"phoneNo",value:e}})}}),Object(C.jsx)("img",{src:p.default,alt:"icon"}),E.phoneNo&&Object(C.jsx)("span",{children:E.phoneNo[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Create Password",type:k?"text":"password",value:f.password,name:"password",onChange:$}),Object(C.jsx)("img",{src:d.default,alt:"icon",onClick:function(){q(!k)}}),E.password&&Object(C.jsx)("span",{children:E.password[0]})]}),Object(C.jsxs)("div",{className:"input_items",children:[Object(C.jsx)("input",{placeholder:"Confirm Password",type:M?"text":"password",name:"cpassword",value:f.cpassword,onChange:$}),Object(C.jsx)("img",{src:d.default,alt:"icon",onClick:function(){T(!M)}}),E.cpassword&&Object(C.jsx)("span",{children:E.cpassword[0]})]}),Z&&Object(C.jsx)("span",{className:"errorMessage",children:Z}),Object(C.jsxs)("div",{className:"or_items",children:[Object(C.jsx)("div",{className:"hr_line"}),Object(C.jsx)("div",{children:Object(C.jsx)("p",{children:"or"})}),Object(C.jsx)("div",{className:"hr_line"})]}),Object(C.jsx)("div",{className:"social_buttons",children:Object(C.jsx)(S.SocialLogin,{type:"user",loginType:"singup"})}),Object(C.jsx)("div",{className:"submit_button",children:Object(C.jsxs)("button",{type:"submit",onClick:D,children:[" ",Object(C.jsx)(O.default,{})]})})]})}),Object(C.jsxs)("div",{className:"login_content_signup",children:[Object(C.jsx)("h1",{children:"Already have an account?"}),Object(C.jsxs)(b.a,{to:"/",children:["Sign In now",Object(C.jsx)(h.default,{})]})]})]})})})})})}));t.default=E},199:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(2);var s=a(151),n=a(1);function c(){return Object(n.jsx)("div",{children:Object(n.jsx)(s.default,{})})}},288:function(e,t,a){"use strict";a.r(t);a(2),a(494);var s=a(1);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsx)("span",{className:"arrow-hover",children:Object(s.jsxs)("svg",{className:"arrow-icon",focusable:"false",imageRendering:"auto",baseProfile:"basic",version:"1.1",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 62 35",children:[Object(s.jsx)("title",{children:"Arrow Icon"}),Object(s.jsx)("rect",{x:"0",y:"14.7",width:"55.2",height:"4.55"}),Object(s.jsx)("g",{transform:"translate(40.9 0)",children:Object(s.jsx)("path",{stroke:"none",d:"M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"})})]})})})})}},445:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},494:function(e,t,a){},551:function(e,t,a){}}]);