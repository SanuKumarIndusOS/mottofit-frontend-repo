(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[46,66,67,93,144,279,280,281,381,397,398,399,400,401,402,403,459,460,461,464],{194:function(e,t,a){"use strict";a.r(t);var n=a(14),s=a.n(n),i=a(28),r=a(36),c=a(5),o=a(11),l=a(2),d=(a(624),a(81)),u=a(159),j=a(498),m=a(155),b=a(19),p=a(9),h=a(110),O=a(67),f=a(30),x=a(79),g=a(25),v=a(6),w=a(814),C=a.n(w),N=(a(853),a(114)),y=a(38),_=a(80),k=a(1),S=Object(f.b)(null,(function(e){return Object(g.b)({loginOrSignupAct:x.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=(e.submitForm,Object(b.f)()),n=Object(l.useState)({name:"",email:"",phoneNumber:"",password:"",cpassword:"",signUpType:"email"}),f=Object(o.a)(n,2),x=f[0],g=f[1],w=Object(l.useState)({}),S=Object(o.a)(w,2),P=S[0],M=S[1],T=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,n=t.value,s=Object(c.a)({},P);s[a]=void 0,g(Object(c.a)(Object(c.a)({},x),{},Object(r.a)({},a,n))),M(Object(c.a)(Object(c.a)({},P),s))},I=Object(l.useState)(!1),A=Object(o.a)(I,2),L=A[0],B=A[1],E=Object(l.useState)(!1),q=Object(o.a)(E,2),U=q[0],Z=q[1],W=Object(l.useState)(""),F=Object(o.a)(W,2),H=F[0];F[1];function z(e){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(s.a.mark((function e(n){var i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i={name:x.name,email:x.email,password:x.password,cpassword:x.cpassword,phoneNumber:x.phoneNumber,signUpType:x.signUpType},J(i)){e.next=4;break}return e.abrupt("return");case 4:i.phoneNumber=x.phoneNumber.includes("+")?x.phoneNumber:"+".concat(null===x||void 0===x?void 0:x.phoneNumber),r=v.AuthApi.trainerSignUp,t(r,i).then((function(e){e.data;localStorage.setItem("type",2),a.push("/trainer/about")})).catch((function(e){Object(y.Toast)({type:"error",message:e.message||"Error"})}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){var t=Object(N.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}};return{name:{presence:{allowEmpty:!1,message:"^Name is required"},format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"^Enter a valid name"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(c.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(c.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(c.a)({},t);M(Object(c.a)(Object(c.a)({},a),t))}return!t};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"banner_container_trainer",children:Object(k.jsxs)("div",{className:"wrapper_main container",children:[Object(k.jsxs)("div",{className:"item_left",children:[Object(k.jsx)("h2",{children:"Sign Up to be a part of the Motto Family"}),Object(k.jsx)("h6",{children:"Create an account to start the application process of becoming a Motto trainer in one of our live cities."})]}),Object(k.jsx)("div",{className:"wrapper",children:Object(k.jsx)("div",{className:"item_right",children:Object(k.jsx)("div",{className:"inner_wrapper ",children:Object(k.jsxs)("div",{className:"inner_items",children:[Object(k.jsx)("h3",{children:"Train with Motto!"}),Object(k.jsx)("p",{children:"Sign up to apply to become a Motto Trainer"}),Object(k.jsx)("div",{className:"form_items_trainer",children:Object(k.jsxs)("form",{onSubmit:z,children:[Object(k.jsxs)("div",{className:"input_items_trainer",children:[Object(k.jsx)("input",{placeholder:"Full Name",type:"text",value:x.name,name:"name",onChange:T,className:"fullname"}),Object(k.jsx)("img",{src:d.default,alt:"icon"}),P.name&&Object(k.jsx)("span",{children:P.name[0]})]}),Object(k.jsxs)("div",{className:"input_items_trainer",children:[Object(k.jsx)("input",{placeholder:"Email",type:"email",value:x.email,name:"email",onChange:T}),Object(k.jsx)("img",{src:u.default,alt:"icon"}),P.email&&Object(k.jsx)("span",{children:P.email[0]})]}),Object(k.jsxs)("div",{className:"input_items_trainer",children:[Object(k.jsx)(C.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone Number",inputProps:{name:"phoneNumber"},value:x.phoneNumber,name:"phoneNumber",onChange:function(e){T({target:{name:"phoneNumber",value:e}})}}),Object(k.jsx)("img",{src:j.default,alt:"icon"}),P.phoneNumber&&Object(k.jsx)("span",{children:P.phoneNumber[0]})]}),Object(k.jsxs)("div",{className:"input_items_trainer",children:[Object(k.jsx)("input",{placeholder:"Create Password",type:L?"text":"password",value:x.password,name:"password",onChange:T}),Object(k.jsx)("img",{src:m.default,alt:"icon",onClick:function(){B(!L)}}),P.password&&Object(k.jsx)("span",{children:P.password[0]})]}),Object(k.jsxs)("div",{className:"input_items_trainer",children:[Object(k.jsx)("input",{placeholder:"Confirm Password",type:U?"text":"password",value:x.cpassword,name:"cpassword",onChange:T}),Object(k.jsx)("img",{src:m.default,alt:"icon",onClick:function(){Z(!U)}}),P.cpassword&&Object(k.jsx)("span",{children:P.cpassword[0]})]}),H&&Object(k.jsx)("span",{className:"errorMessage",children:H}),Object(k.jsx)("div",{className:"submit_button",children:Object(k.jsxs)("button",{type:"submit",onClick:z,children:["Continue to Account",Object(k.jsx)(h.default,{})]})}),Object(k.jsxs)("div",{className:"or_items",children:[Object(k.jsx)("div",{className:"hr_line"}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"or"})}),Object(k.jsx)("div",{className:"hr_line"})]}),Object(k.jsx)("div",{className:"social_buttons",children:Object(k.jsx)(_.SocialLogin,{type:"trainer",loginType:"singup"})})]})}),Object(k.jsxs)("div",{className:"login_items",children:[Object(k.jsx)("h4",{children:"Already have an account?"}),Object(k.jsxs)(p.a,{to:"/",children:["Sign In now",Object(k.jsx)(O.default,{})]})]})]})})})}),Object(k.jsx)("br",{})]})})})}));t.default=S},195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(20),s=a(21),i=a(27),r=a(26),c=a(2),o=(a(625),a(582)),l=a(583),d=a(584),u=a(585),j=a(586),m=a(587),b=a(1),p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"big_container",children:Object(b.jsxs)("div",{className:"personal_container_trainer container",children:[Object(b.jsxs)("div",{className:"personal_trainer_description",children:[Object(b.jsx)("h2",{className:"heading",children:"Here is why you should apply to be a Motto Trainer"}),Object(b.jsx)("p",{className:"discription",children:"Your personal trainer marketplace for Strength & HIIT, Boxing, Yoga & Pilates. Train virtually from anywhere or locally in Motto markets."})]}),Object(b.jsxs)("div",{className:"right_container_trainer",children:[Object(b.jsx)(h,{icon:o.default,description:"Be a part of an elite community of trainers to boost your brand"}),Object(b.jsx)(h,{icon:l.default,description:"  Get access to a large client network."}),Object(b.jsx)(h,{icon:d.default,description:"Maximise your time and earnings by booking 1 on 1 or group sessions "}),Object(b.jsx)(h,{icon:u.default,description:"Minimize customer acquisition cost"}),Object(b.jsx)(h,{icon:j.default,description:"Get matched with the right clients based on your training expertise"}),Object(b.jsx)(h,{icon:m.default,description:"Get access to our trusted partner brands"})]})]})})})}}]),a}(c.Component),h=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"flex-contents_trainer",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:e.icon,alt:"icon"})}),Object(b.jsx)("p",{className:"discription",children:e.description})]})})}},196:function(e,t,a){"use strict";a.r(t);var n=a(5),s=(a(2),a(626),a(918)),i=a.n(s),r=a(350),c=(a(919),a(920),a(1));function o(e){var t=e.style,a=e.onClick;return Object(c.jsx)("div",{className:"right-arrow",style:Object(n.a)(Object(n.a)({},t),{},{display:"block"}),onClick:a,children:Object(c.jsxs)("svg",{id:"Tertiary_Button","data-name":"Tertiary Button",xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 45 45",children:[Object(c.jsx)("path",{id:"Path_7512","data-name":"Path 7512",d:"M0,0V17.692",transform:"translate(13 22.534) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),Object(c.jsx)("path",{id:"Path_7513","data-name":"Path 7513",d:"M13.068,0,6.534,6.534,0,0",transform:"translate(25.185 29.068) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),Object(c.jsxs)("g",{id:"Path_14198","data-name":"Path 14198",fill:"none",children:[Object(c.jsx)("path",{d:"M22.5,0A22.5,22.5,0,1,1,0,22.5,22.5,22.5,0,0,1,22.5,0Z",stroke:"none"}),Object(c.jsx)("path",{d:"M 22.5 2 C 19.73163986206055 2 17.04714012145996 2.541740417480469 14.52108955383301 3.61016845703125 C 12.0802001953125 4.642578125 9.887641906738281 6.120979309082031 8.004310607910156 8.004310607910156 C 6.120979309082031 9.887641906738281 4.642578125 12.0802001953125 3.61016845703125 14.52108955383301 C 2.541740417480469 17.04714012145996 2 19.73163986206055 2 22.5 C 2 25.26836013793945 2.541740417480469 27.95285987854004 3.61016845703125 30.47891044616699 C 4.642578125 32.9197998046875 6.120979309082031 35.11235809326172 8.004310607910156 36.99568939208984 C 9.887641906738281 38.87902069091797 12.0802001953125 40.357421875 14.52108955383301 41.38983154296875 C 17.04714012145996 42.45825958251953 19.73163986206055 43 22.5 43 C 25.26836013793945 43 27.95285987854004 42.45825958251953 30.47891044616699 41.38983154296875 C 32.9197998046875 40.357421875 35.11235809326172 38.87902069091797 36.99568939208984 36.99568939208984 C 38.87902069091797 35.11235809326172 40.357421875 32.9197998046875 41.38983154296875 30.47891044616699 C 42.45825958251953 27.95285987854004 43 25.26836013793945 43 22.5 C 43 19.73163986206055 42.45825958251953 17.04714012145996 41.38983154296875 14.52108955383301 C 40.357421875 12.0802001953125 38.87902069091797 9.887641906738281 36.99568939208984 8.004310607910156 C 35.11235809326172 6.120979309082031 32.9197998046875 4.642578125 30.47891044616699 3.61016845703125 C 27.95285987854004 2.541740417480469 25.26836013793945 2 22.5 2 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z",stroke:"none",fill:"#bcbcbc"})]})]})})}function l(e){var t=e.style,a=e.onClick;return Object(c.jsx)("div",{className:"left-arrow",style:Object(n.a)(Object(n.a)({},t),{},{display:"block"}),onClick:a,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 45 45",children:Object(c.jsxs)("g",{id:"Tertiary_Button","data-name":"Tertiary Button",transform:"translate(45 45) rotate(180)",children:[Object(c.jsx)("path",{id:"Path_7512","data-name":"Path 7512",d:"M0,0V17.692",transform:"translate(13 22.534) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5"}),Object(c.jsx)("path",{id:"Path_7513","data-name":"Path 7513",d:"M13.068,0,6.534,6.534,0,0",transform:"translate(25.185 29.068) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5"}),Object(c.jsxs)("g",{id:"Path_14198","data-name":"Path 14198",fill:"none",children:[Object(c.jsx)("path",{d:"M22.5,0A22.5,22.5,0,1,1,0,22.5,22.5,22.5,0,0,1,22.5,0Z",stroke:"none"}),Object(c.jsx)("path",{d:"M 22.5 2 C 19.73163986206055 2 17.04714012145996 2.541740417480469 14.52108955383301 3.61016845703125 C 12.0802001953125 4.642578125 9.887641906738281 6.120979309082031 8.004310607910156 8.004310607910156 C 6.120979309082031 9.887641906738281 4.642578125 12.0802001953125 3.61016845703125 14.52108955383301 C 2.541740417480469 17.04714012145996 2 19.73163986206055 2 22.5 C 2 25.26836013793945 2.541740417480469 27.95285987854004 3.61016845703125 30.47891044616699 C 4.642578125 32.9197998046875 6.120979309082031 35.11235809326172 8.004310607910156 36.99568939208984 C 9.887641906738281 38.87902069091797 12.0802001953125 40.357421875 14.52108955383301 41.38983154296875 C 17.04714012145996 42.45825958251953 19.73163986206055 43 22.5 43 C 25.26836013793945 43 27.95285987854004 42.45825958251953 30.47891044616699 41.38983154296875 C 32.9197998046875 40.357421875 35.11235809326172 38.87902069091797 36.99568939208984 36.99568939208984 C 38.87902069091797 35.11235809326172 40.357421875 32.9197998046875 41.38983154296875 30.47891044616699 C 42.45825958251953 27.95285987854004 43 25.26836013793945 43 22.5 C 43 19.73163986206055 42.45825958251953 17.04714012145996 41.38983154296875 14.52108955383301 C 40.357421875 12.0802001953125 38.87902069091797 9.887641906738281 36.99568939208984 8.004310607910156 C 35.11235809326172 6.120979309082031 32.9197998046875 4.642578125 30.47891044616699 3.61016845703125 C 27.95285987854004 2.541740417480469 25.26836013793945 2 22.5 2 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z",stroke:"none",fill:"#bcbcbc"})]})]})})})}t.default=function(){var e={dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:2e3,nextArrow:Object(c.jsx)(o,{}),prevArrow:Object(c.jsx)(l,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:765,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:300,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(c.jsx)("div",{className:"slide-container_trainer",children:Object(c.jsxs)("div",{className:"inner_location container",children:[Object(c.jsxs)("div",{className:"header-content",children:[Object(c.jsx)("h1",{children:"We are in these Cities"}),Object(c.jsx)("p",{children:"Currently available for in-person live training in Miami, New York City, Hamptons & Palm Beach. We will be launching in other cities across the United States soon."})]}),Object(c.jsx)("div",{className:"slider_wrapper_container",children:Object(c.jsx)(i.a,Object(n.a)(Object(n.a)({},e),{},{children:r.SlideData.map((function(e,t){return Object(c.jsx)("div",{className:"main-slide",children:Object(c.jsxs)("div",{className:"slide-content",children:[Object(c.jsx)("img",{src:e.image,alt:e.name,className:"slide-image"}),Object(c.jsx)("img",{src:e.line,alt:e.name,className:"slide-line"}),Object(c.jsx)("p",{children:e.name})]})},t)}))}))})]})})}},234:function(e,t,a){"use strict";a.r(t);a(2);var n=a(194),s=a(195),i=a(196),r=a(1);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(n.default,{}),Object(r.jsx)(s.default,{}),Object(r.jsx)(i.default,{})]})}},350:function(e,t,a){"use strict";a.r(t),a.d(t,"SlideData",(function(){return o}));var n=a(479),s=a(478),i=a(477),r=a(484),c=a(480),o=[{name:"New york city",image:n.default,line:r.default},{name:"Miami",image:s.default,line:r.default},{name:"Hamptons",image:i.default,line:r.default},{name:"Palm Beach",image:c.default,line:r.default}]},477:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Hamptons Image.0daace2f.png"},478:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Miami Image.a63d3986.png"},479:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NYC.e195b1c3.png"},480:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tessa-wilson.b4101337.jpeg"},484:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rectangle.5312514a.svg"},498:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},582:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 1.8e7e8872.svg"},583:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 2.ba1db01f.svg"},584:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 3.f7ade7e6.svg"},585:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 4.f460183f.svg"},586:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 5.976b6dc1.svg"},587:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 6.60678f5c.svg"},624:function(e,t,a){},625:function(e,t,a){},626:function(e,t,a){}}]);