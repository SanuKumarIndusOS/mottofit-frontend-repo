(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[85,232,333],{150:function(e,t,a){"use strict";a.r(t);var n=a(62),s=a.n(n),r=a(86),c=a(25),i=a(4),o=a(14),l=a(2),m=(a(547),a(53)),u=a(122),p=a(428),j=a(119),d=a(16),b=a(8),h=a(82),O=a(50),g=a(33),x=a(87),f=a(21),v=a(15),w=a(694),N=a.n(w),y=(a(728),a(85)),_=a(1),S=Object(g.b)(null,(function(e){return Object(f.b)({loginOrSignupAct:x.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=(e.submitForm,Object(d.f)()),n=Object(l.useState)({name:"",email:"",phoneNumber:"",password:"",cpassword:"",signUpType:"email"}),g=Object(o.a)(n,2),x=g[0],f=g[1],w=Object(l.useState)({}),S=Object(o.a)(w,2),C=S[0],A=S[1],E=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,n=t.value,s=Object(i.a)({},C);s[a]=void 0,f(Object(i.a)(Object(i.a)({},x),{},Object(c.a)({},a,n))),A(Object(i.a)(Object(i.a)({},C),s))},P=Object(l.useState)(!1),k=Object(o.a)(P,2),q=k[0],U=k[1],I=Object(l.useState)(!1),M=Object(o.a)(I,2),T=M[0],F=M[1],J=Object(l.useState)(""),$=Object(o.a)(J,2),z=$[0],L=$[1];function Z(e){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(s.a.mark((function e(n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={name:x.name,email:x.email,password:x.password,cpassword:x.cpassword,phoneNumber:x.phoneNumber,signUpType:x.signUpType},B(r)){e.next=4;break}return e.abrupt("return");case 4:r.phoneNumber=x.phoneNumber.includes("+")?x.phoneNumber:"+".concat(null===x||void 0===x?void 0:x.phoneNumber),c=v.AuthApi.trainerSignUp,t(c,r).then((function(e){e.data;localStorage.setItem("type",2),a.push("/trainer/about")})).catch((function(e){L(e.message)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){var t=Object(y.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}};return{name:{presence:{allowEmpty:!1,message:"^Name is required"},format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"^Enter a valid name"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(i.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(i.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(i.a)({},t);console.log(a),A(Object(i.a)(Object(i.a)({},a),t))}return!t};return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"banner_container_trainer",children:Object(_.jsxs)("div",{className:"wrapper_main container",children:[Object(_.jsxs)("div",{className:"item_left",children:[Object(_.jsx)("h2",{children:"Sign Up to be a part of the Motto Family"}),Object(_.jsx)("h6",{children:"Create an account to start the application process of becoming a Motto trainer in one of our live cities."})]}),Object(_.jsx)("div",{className:"wrapper",children:Object(_.jsx)("div",{className:"item_right",children:Object(_.jsx)("div",{className:"inner_wrapper ",children:Object(_.jsxs)("div",{className:"inner_items",children:[Object(_.jsx)("h3",{children:"Train with Motto!"}),Object(_.jsx)("p",{children:"Sign up to apply to become a Motto Trainer"}),Object(_.jsx)("div",{className:"form_items_trainer",children:Object(_.jsxs)("form",{onSubmit:Z,children:[Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Full Name",type:"text",value:x.name,name:"name",onChange:E,className:"fullname"}),Object(_.jsx)("img",{src:m.default,alt:"icon"}),C.name&&Object(_.jsx)("span",{children:C.name[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Email",type:"email",value:x.email,name:"email",onChange:E}),Object(_.jsx)("img",{src:u.default,alt:"icon"}),C.email&&Object(_.jsx)("span",{children:C.email[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)(N.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone Number",inputProps:{name:"phoneNumber"},value:x.phoneNumber,name:"phoneNumber",onChange:function(e){E({target:{name:"phoneNumber",value:e}})}}),Object(_.jsx)("img",{src:p.default,alt:"icon"}),C.phoneNumber&&Object(_.jsx)("span",{children:C.phoneNumber[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Create Password",type:q?"text":"password",value:x.password,name:"password",onChange:E}),Object(_.jsx)("img",{src:j.default,alt:"icon",onClick:function(){U(!q)}}),C.password&&Object(_.jsx)("span",{children:C.password[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Confirm Password",type:T?"text":"password",value:x.cpassword,name:"cpassword",onChange:E}),Object(_.jsx)("img",{src:j.default,alt:"icon",onClick:function(){F(!T)}}),C.cpassword&&Object(_.jsx)("span",{children:C.cpassword[0]})]}),z&&Object(_.jsx)("span",{className:"errorMessage",children:z}),Object(_.jsx)("div",{className:"submit_button",children:Object(_.jsxs)("button",{type:"submit",onClick:Z,children:["Continue to Account",Object(_.jsx)(h.default,{})]})})]})}),Object(_.jsxs)("div",{className:"login_items",children:[Object(_.jsx)("h4",{children:"Already have an account?"}),Object(_.jsxs)(b.a,{to:"/",children:["Sign In now",Object(_.jsx)(O.default,{})]})]})]})})})}),Object(_.jsx)("br",{})]})})})}));t.default=S},428:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},547:function(e,t,a){}}]);
//# sourceMappingURL=85.273cf95a.chunk.js.map