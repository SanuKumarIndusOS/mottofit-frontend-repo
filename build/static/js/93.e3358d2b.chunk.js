(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[93,223],{153:function(e,t,s){"use strict";s.r(t);var a=s(64),i=s.n(a),n=s(93),c=s(28),r=s(4),l=s(11),o=s(2),j=(s(563),s(130)),b=s(128),d=s(9),u=s(88),m=(s(123),s(54)),p=s(15),h=s(22),O=s(26),g=s(66),x=s(63),v=s(8),f=s(92),N=s(37),_=s(31),w=(s(80),s(67)),y=s(1),S=Object(O.b)(null,(function(e){return Object(h.b)({loginAct:g.loginOrSignUp,trainerDetail:x.trainerDetail,updateUserDetails:N.updateUserDetails},e)}))((function(e){var t=e.loginAct,s=e.trainerDetail,a=e.updateUserDetails,h=(Object(o.useRef)(null),Object(o.useState)({email:"",password:"",signUpType:"email",deviceName:"email"})),O=Object(l.a)(h,2),g=O[0],x=O[1],N=Object(o.useState)({}),S=Object(l.a)(N,2),k=S[0],U=S[1],D=Object(o.useState)(!1),P=Object(l.a)(D,2),A=P[0],T=P[1],C=Object(o.useState)(""),E=Object(l.a)(C,2),M=E[0],R=(E[1],function(e){e.persist();var t=e.target||{},s=t.name,a=t.value,i=Object(r.a)({},k);i[s]=void 0,x(Object(r.a)(Object(r.a)({},g),{},Object(c.a)({},s,a))),U(Object(r.a)(Object(r.a)({},k),i))});function $(e){return q.apply(this,arguments)}function q(){return(q=Object(n.a)(i.a.mark((function e(n){var c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c={email:g.email,password:g.password,signUpType:g.signUpType,deviceName:g.deviceName},z(c)){e.next=4;break}return e.abrupt("return");case 4:r=p.AuthApi.loginApi,t(r,c).then((function(e){localStorage.setItem("user-id",e.id);a({isModelOpen:!1}),console.log("log1"),Object(v.nextPathReRouter)()||(console.log("log1"),"trainer"===e.type?s().then((function(e){null===e.applicationStatus?v.history.push("/trainer/about"):v.history.push("/trainers/dashboard/schedule")})):v.history.push("/users/dashboard/session"))})).catch((function(e){Object(_.Toast)({type:"error",message:e.message||"Error"})}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e){var t=Object(f.default)(e,{email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:{presence:{allowEmpty:!1,message:"^Password is required"},format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}}});if(void 0!==t){var s=Object(r.a)({},t);U(Object(r.a)(Object(r.a)({},s),t))}return!t};return Object(y.jsx)("div",{className:"mobile_login",children:Object(y.jsxs)("div",{className:"outter_container",children:[Object(y.jsx)("div",{className:"inner_container"}),Object(y.jsxs)("div",{className:"wrapper_inner",children:[Object(y.jsx)("h2",{children:"Welcome to Motto!"}),Object(y.jsx)("p",{children:"Sign into your account by filling in the details below"}),Object(y.jsx)("div",{className:"form_item_login",children:Object(y.jsxs)("form",{onSubmit:$,children:[Object(y.jsxs)("div",{className:"input_item1_signin",children:[Object(y.jsx)("input",{placeholder:"Email",type:"email",value:g.email,name:"email",onChange:R}),Object(y.jsx)("img",{src:j.default,alt:"icon"}),k.email&&Object(y.jsx)("span",{children:k.email[0]})]}),Object(y.jsxs)("div",{className:"input_item1_signin",children:[Object(y.jsx)("input",{placeholder:"Password",type:A?"text":"password",value:g.password,onChange:R,name:"password"}),Object(y.jsx)("img",{src:b.default,alt:"icon",onClick:function(){T(!A)}}),k.password&&Object(y.jsx)("span",{children:k.password[0]})]}),Object(y.jsxs)("div",{className:"remember_container",children:[Object(y.jsxs)("div",{className:"remember_left",children:[Object(y.jsx)("input",{className:"check",type:"checkbox",value:"lsRememberMe",id:"rememberMe"})," ",Object(y.jsx)("label",{children:"Remember me"})]}),Object(y.jsx)("div",{className:"forgotpass_right",children:Object(y.jsx)(d.a,{to:"/forgot",className:"forgotpass",children:"Forgot Password?"})})]}),M&&Object(y.jsx)("span",{className:"errorMessage",children:M}),Object(y.jsxs)("div",{className:"or_items",children:[Object(y.jsx)("div",{className:"hr_line"}),Object(y.jsx)("div",{children:Object(y.jsx)("p",{children:"or"})}),Object(y.jsx)("div",{className:"hr_line"})]}),Object(y.jsx)("div",{className:"social_buttons",children:Object(y.jsx)(w.SocialLogin,{loginType:"login"})}),Object(y.jsx)("div",{className:"submit_button",children:Object(y.jsxs)("button",{className:"login_button",type:"submit",onClick:$,children:["Signin",Object(y.jsx)(u.default,{})]})})]})}),Object(y.jsxs)("div",{className:"login_items",children:[Object(y.jsx)("h4",{children:"Don't have an account yet?"}),Object(y.jsxs)("div",{className:"links_item_signup",children:[Object(y.jsxs)(d.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),Object(v.nextPathPusher)("/user/signup")},children:["User Sign Up",Object(y.jsx)(m.default,{})]}),Object(y.jsxs)(d.a,{to:"/trainer/signup",children:["Trainer Sign Up",Object(y.jsx)(m.default,{})]})]})]})]})]})})}));t.default=S},563:function(e,t,s){}}]);