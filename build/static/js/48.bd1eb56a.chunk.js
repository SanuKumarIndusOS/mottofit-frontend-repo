(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[48,117,126,127,174,220,301],{124:function(e,t,s){"use strict";s.r(t);var a=s(49),i=s.n(a),n=s(71),c=s(17),o=s(6),r=s(10),l=s(2),d=s(61),h=s(102),j=s(348),p=s(104),m=s(149),u=s(150),b=(s(454),s(9)),O=s(5),f=s(228),x=s(69),g=s(24),N=s(75),w=s(34),v=s(27),y=s(229),T=s(230),_=s(1),S=Object(w.b)(null,(function(e){return Object(v.b)({loginOrSignupAct:N.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,s=e.submitForm,a=Object(y.default)(T.default,s),N=a.data,w=a.handleFormSubmit,v=a.error,S=a.setData,A=Object(l.useState)(!1),C=Object(r.a)(A,2),$=C[0],k=C[1],P=Object(l.useState)(!1),Z=Object(r.a)(P,2),z=Z[0],U=Z[1],q=Object(l.useState)(""),F=Object(r.a)(q,2),M=F[0],I=F[1],D=function(e){e.persist(),S(Object(o.a)(Object(o.a)({},N),{},Object(c.a)({},e.target.name,e.target.value)))},L=Object(b.f)();function E(){return(E=Object(n.a)(i.a.mark((function e(){var s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={firstName:N.firstName,lastName:N.lastName,email:N.email,phoneNo:N.phoneNo,password:N.password,cpassword:N.cpassword,location:N.location,signUpType:N.signUpType},a=g.AuthApi.userSignUp,0===Object.keys(v).length&&t(a,s).then((function(){L.push("/trainer/find")})).catch((function(e){I("Sorry, something went wrong.",e.message)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"main_container",children:Object(_.jsx)("div",{className:"wrapper",children:Object(_.jsx)("div",{className:"inner_wrapper",children:Object(_.jsxs)("div",{className:"inner_items",children:[Object(_.jsx)("h2",{children:"Sign Up with Motto!"}),Object(_.jsx)("p",{children:"Fill up the following details to create your account"}),Object(_.jsx)("div",{className:"form_items",children:Object(_.jsxs)("form",{onSubmit:w,children:[Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"Name",type:"text",value:N.firstName,name:"firstName",onChange:D}),Object(_.jsx)("img",{src:d.default,alt:"icon"}),v.firstName&&Object(_.jsx)("span",{children:v.firstName})]}),Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"LastName",type:"text",value:N.lastName,name:"lastName",onChange:D}),Object(_.jsx)("img",{src:d.default,alt:"icon"}),v.lastName&&Object(_.jsx)("span",{children:v.lastName})]}),Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"Location",type:"text",value:N.location,name:"location",onChange:D}),Object(_.jsx)("img",{src:d.default,alt:"icon"}),v.location&&Object(_.jsx)("span",{children:v.location})]}),Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"Email",type:"email",value:N.email,name:"email",onChange:D}),Object(_.jsx)("img",{src:h.default,alt:"icon"}),v.email&&Object(_.jsx)("span",{children:v.email})]}),Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"Phone",type:"text",value:N.phoneNo,name:"phoneNo",onChange:D}),Object(_.jsx)("img",{src:j.default,alt:"icon"}),v.phoneNo&&Object(_.jsx)("span",{children:v.phoneNo})]}),Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"Create Password",type:$?"text":"password",value:N.password,name:"password",onChange:D}),Object(_.jsx)("img",{src:p.default,alt:"icon",onClick:function(){k(!$)}}),v.password&&Object(_.jsx)("span",{children:v.password})]}),Object(_.jsxs)("div",{className:"input_items",children:[Object(_.jsx)("input",{placeholder:"Confirm Password",type:z?"text":"password",name:"cpassword",value:N.cpassword,onChange:D}),Object(_.jsx)("img",{src:p.default,alt:"icon",onClick:function(){U(!z)}}),v.cpassword&&Object(_.jsx)("span",{children:v.cpassword})]}),M&&Object(_.jsx)("span",{className:"errorMessage",children:M}),Object(_.jsxs)("div",{className:"or_items",children:[Object(_.jsx)("div",{className:"hr_line"}),Object(_.jsx)("div",{children:Object(_.jsx)("p",{children:"or"})}),Object(_.jsx)("div",{className:"hr_line"})]}),Object(_.jsxs)("div",{className:"social_buttons",children:[Object(_.jsxs)("button",{className:"facebook-auth",children:[Object(_.jsx)("img",{src:m.default,alt:"icon"}),"Sign Up with Facebook"]}),Object(_.jsxs)("button",{className:"google-auth",children:[Object(_.jsx)("img",{src:u.default,alt:"icon"}),"Sign up with Google"]})]}),Object(_.jsx)("div",{className:"submit_button",children:Object(_.jsxs)("button",{type:"submit",onClick:function(){return E.apply(this,arguments)}(),children:["Continue to Account"," ",Object(_.jsx)(x.default,{})]})})]})}),Object(_.jsxs)("div",{className:"login_content_signup",children:[Object(_.jsx)("h1",{children:"Already have an account?"}),Object(_.jsxs)(O.a,{to:"/",children:["Sign In now",Object(_.jsx)(f.default,{})]})]})]})})})})})}));t.default=S},228:function(e,t,s){"use strict";s.r(t);s(2),s(391);var a=s(1);t.default=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"arrow-hover",children:Object(a.jsxs)("svg",{className:"arrow-icon",focusable:"false",imageRendering:"auto",baseProfile:"basic",version:"1.1",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 62 35",children:[Object(a.jsx)("title",{children:"Arrow Icon"}),Object(a.jsx)("rect",{x:"0",y:"14.7",width:"55.2",height:"4.55"}),Object(a.jsx)("g",{transform:"translate(40.9 0)",children:Object(a.jsx)("path",{stroke:"none",d:"M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"})})]})})})})}},229:function(e,t,s){"use strict";s.r(t);var a=s(10),i=s(2);t.default=function(e,t){var s=Object(i.useState)({firstName:"",lastName:"",email:"",phoneNo:"",password:"",cpassword:"",location:"",signUpType:"email"}),n=Object(a.a)(s,2),c=n[0],o=n[1],r=Object(i.useState)({firstName:"",lastName:"",email:"",phoneNo:"",password:"",cpassword:"",location:"",signUpType:"email"}),l=Object(a.a)(r,2),d=l[0],h=l[1],j=Object(i.useState)(!1),p=Object(a.a)(j,2);p[0],p[1];return{data:c,handleFormSubmit:function(t){t.preventDefault();var s=e(c);h(s),console.log(c),console.log(s),console.log(d),console.log(h)},error:d,setData:o}}},230:function(e,t,s){"use strict";s.r(t);t.default=function(e){var t={};return e.firstName?e.firstName.length<=1?t.firstName="This field should contain more than one character":/^[A-Za-z]+$/i.test(e.firstName)||(t.firstName="  This field accepts only alphabets"):t.firstName="This field is required",e.lastName?e.lastName.length<=1?t.lastName="This field should contain more than one character":/^[A-Za-z]+$/i.test(e.lastName)||(t.lastName="This field accepts only alphabets"):t.lastName="This field is required",e.location?e.location.length<=1?t.location="This field should contain more than one character":/^[A-Za-z]+$/i.test(e.location)||(t.location="This field accepts only alphabets"):t.location="This field is required",e.email?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(e.email)?e.email.length<8&&(t.email=" This field should contain greater then 8 character"):t.email=" Please enter a valid email address":t.email="This field is required",e.phoneNo?/^[0-9]*$/i.test(e.phoneNo)?e.phoneNo.length<10?t.phoneNo="Enter a valid number":e.phoneNo.length>=11&&(t.phoneNo=" This field exceed max length"):t.phoneNo="Invalid Number":t.phoneNo="This field is required",e.password?e.password.length<6?t.password=" Password should be more then 6 Charcters":e.password.length>16?t.password=" This field exceed max length":/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.password)||(t.password=" Password should contain atleast one one captial letter, number and special character"):t.password="This field is required",e.cpassword?e.cpassword.length<6?t.cpassword=" Password should be more then 6 Charcters":e.cpassword.length>16?t.cpassword=" This field exceed max length":/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.cpassword)?e.password!==e.cpassword&&(t.cpassword="  The passwords do not match"):t.cpassword=" Password should contain atleast one one captial letter, number and special character":t.cpassword="This field is required",t}},348:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Phone Icon.f207d1b4.svg"},391:function(e,t,s){},454:function(e,t,s){}}]);
//# sourceMappingURL=48.bd1eb56a.chunk.js.map