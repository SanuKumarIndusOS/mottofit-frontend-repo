(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[80,218,316],{135:function(e,t,a){"use strict";a.r(t);var n=a(48),s=a.n(n),r=a(70),c=a(18),i=a(3),o=a(11),l=a(2),m=(a(480),a(60)),u=a(106),p=a(358),j=a(103),d=a(9),b=a(6),h=a(68),O=a(39),g=a(34),f=a(74),x=a(27),v=a(13),w=a(661),N=a.n(w),y=(a(662),a(73)),_=a(1),S=Object(g.b)(null,(function(e){return Object(x.b)({loginOrSignupAct:f.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=(e.submitForm,Object(d.f)()),n=Object(l.useState)({name:"",email:"",phoneNumber:"",password:"",cpassword:"",signUpType:"email"}),g=Object(o.a)(n,2),f=g[0],x=g[1],w=Object(l.useState)({}),S=Object(o.a)(w,2),C=S[0],A=S[1],E=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,n=t.value,s=Object(i.a)({},C);s[a]=void 0,x(Object(i.a)(Object(i.a)({},f),{},Object(c.a)({},a,n))),A(Object(i.a)(Object(i.a)({},C),s))},P=Object(l.useState)(!1),k=Object(o.a)(P,2),q=k[0],U=k[1],I=Object(l.useState)(!1),M=Object(o.a)(I,2),T=M[0],$=M[1],F=Object(l.useState)(""),J=Object(o.a)(F,2),z=J[0],L=J[1];function Z(e){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(s.a.mark((function e(n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={name:f.name,email:f.email,password:f.password,cpassword:f.cpassword,phoneNumber:f.phoneNumber,signUpType:f.signUpType},B(r)){e.next=4;break}return e.abrupt("return");case 4:c=v.AuthApi.trainerSignUp,t(c,r).then((function(e){e.data;a.push("/trainer/about")})).catch((function(e){L(e.message)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){var t=Object(y.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}};return{name:{presence:{allowEmpty:!1,message:"^Name is required"},format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"^Enter a valid name"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},format:{pattern:/^[1-9][0-9]*$/,flags:"i",message:"^Invalid number"},length:{minimum:8,tooShort:"Invalid number",maximum:15,tooLong:"Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(i.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(i.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(i.a)({},t);console.log(a),A(Object(i.a)(Object(i.a)({},a),t))}return!t};return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"banner_container_trainer",children:Object(_.jsxs)("div",{className:"wrapper_main container",children:[Object(_.jsxs)("div",{className:"item_left",children:[Object(_.jsx)("h2",{children:"Sign Up to be a part of the Motto Family"}),Object(_.jsx)("h6",{children:"Create an account to start the application process of becoming a Motto trainer in one of our live cities."})]}),Object(_.jsx)("div",{className:"wrapper",children:Object(_.jsx)("div",{className:"item_right",children:Object(_.jsx)("div",{className:"inner_wrapper ",children:Object(_.jsxs)("div",{className:"inner_items",children:[Object(_.jsx)("h3",{children:"Train with Motto!"}),Object(_.jsx)("p",{children:"Sign up to apply to become a Motto Trainer"}),Object(_.jsx)("div",{className:"form_items_trainer",children:Object(_.jsxs)("form",{onSubmit:Z,children:[Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Full Name",type:"text",value:f.name,name:"name",onChange:E,className:"fullname"}),Object(_.jsx)("img",{src:m.default,alt:"icon"}),C.name&&Object(_.jsx)("span",{children:C.name[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Email",type:"email",value:f.email,name:"email",onChange:E}),Object(_.jsx)("img",{src:u.default,alt:"icon"}),C.email&&Object(_.jsx)("span",{children:C.email[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)(N.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone Number",inputProps:{name:"phoneNumber"},value:f.phoneNumber,name:"phoneNumber",onChange:function(e){E({target:{name:"phoneNumber",value:e}})}}),Object(_.jsx)("img",{src:p.default,alt:"icon"}),C.phoneNumber&&Object(_.jsx)("span",{children:C.phoneNumber[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Create Password",type:q?"text":"password",value:f.password,name:"password",onChange:E}),Object(_.jsx)("img",{src:j.default,alt:"icon",onClick:function(){U(!q)}}),C.password&&Object(_.jsx)("span",{children:C.password[0]})]}),Object(_.jsxs)("div",{className:"input_items_trainer",children:[Object(_.jsx)("input",{placeholder:"Confirm Password",type:T?"text":"password",value:f.cpassword,name:"cpassword",onChange:E}),Object(_.jsx)("img",{src:j.default,alt:"icon",onClick:function(){$(!T)}}),C.cpassword&&Object(_.jsx)("span",{children:C.cpassword[0]})]}),z&&Object(_.jsx)("span",{className:"errorMessage",children:z}),Object(_.jsx)("div",{className:"submit_button",children:Object(_.jsxs)("button",{type:"submit",onClick:Z,children:[Object(_.jsx)("p",{children:"Continue to Account"}),Object(_.jsx)(h.default,{})]})})]})}),Object(_.jsxs)("div",{className:"login_items",children:[Object(_.jsx)("h4",{children:"Already have an account?"}),Object(_.jsxs)(b.a,{to:"/",children:["Sign In now",Object(_.jsx)(O.default,{})]})]})]})})})})]})})})}));t.default=S},358:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},480:function(e,t,a){}}]);
//# sourceMappingURL=80.11e74078.chunk.js.map