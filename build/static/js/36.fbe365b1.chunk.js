(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[36,58,59,85,123,233,234,235,334,350,351,352,353,354,355,356,404,405,406,409],{153:function(e,t,a){"use strict";a.r(t);var n=a(62),s=a.n(n),i=a(88),r=a(25),c=a(4),o=a(13),l=a(2),d=(a(553),a(53)),u=a(126),m=a(436),j=a(123),b=a(17),p=a(8),h=a(83),f=a(50),O=a(33),x=a(89),g=a(21),v=a(16),w=a(701),C=a.n(w),N=(a(735),a(87)),y=a(1),k=Object(O.b)(null,(function(e){return Object(g.b)({loginOrSignupAct:x.loginOrSignUp},e)}))((function(e){var t=e.loginOrSignupAct,a=(e.submitForm,Object(b.f)()),n=Object(l.useState)({name:"",email:"",phoneNumber:"",password:"",cpassword:"",signUpType:"email"}),O=Object(o.a)(n,2),x=O[0],g=O[1],w=Object(l.useState)({}),k=Object(o.a)(w,2),_=k[0],S=k[1],P=function(e){e.persist&&e.persist();var t=e.target||e||{},a=t.name,n=t.value,s=Object(c.a)({},_);s[a]=void 0,g(Object(c.a)(Object(c.a)({},x),{},Object(r.a)({},a,n))),S(Object(c.a)(Object(c.a)({},_),s))},M=Object(l.useState)(!1),T=Object(o.a)(M,2),I=T[0],A=T[1],L=Object(l.useState)(!1),B=Object(o.a)(L,2),E=B[0],q=B[1],U=Object(l.useState)(""),Z=Object(o.a)(U,2),W=Z[0],F=Z[1];function H(e){return z.apply(this,arguments)}function z(){return(z=Object(i.a)(s.a.mark((function e(n){var i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i={name:x.name,email:x.email,password:x.password,cpassword:x.cpassword,phoneNumber:x.phoneNumber,signUpType:x.signUpType},D(i)){e.next=4;break}return e.abrupt("return");case 4:i.phoneNumber=x.phoneNumber.includes("+")?x.phoneNumber:"+".concat(null===x||void 0===x?void 0:x.phoneNumber),r=v.AuthApi.trainerSignUp,t(r,i).then((function(e){e.data;localStorage.setItem("type",2),a.push("/trainer/about")})).catch((function(e){F(e.message)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){var t=Object(N.default)(e,function(){var e={format:{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,flags:"i",message:"^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"},length:{minimum:8,tooShort:"must contain alteast 8 character",maximum:12,tooLong:"must contain less than 12 character"}};return{name:{presence:{allowEmpty:!1,message:"^Name is required"},format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"^Enter a valid name"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},password:Object(c.a)({presence:{allowEmpty:!1,message:"^Password is required"}},e),cpassword:Object(c.a)({presence:{allowEmpty:!1,message:"^Confirm password is required"},equality:{attribute:"password",message:"^Passwords doesn't match",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},e)}}());if(void 0!==t){var a=Object(c.a)({},t);console.log(a),S(Object(c.a)(Object(c.a)({},a),t))}return!t};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"banner_container_trainer",children:Object(y.jsxs)("div",{className:"wrapper_main container",children:[Object(y.jsxs)("div",{className:"item_left",children:[Object(y.jsx)("h2",{children:"Sign Up to be a part of the Motto Family"}),Object(y.jsx)("h6",{children:"Create an account to start the application process of becoming a Motto trainer in one of our live cities."})]}),Object(y.jsx)("div",{className:"wrapper",children:Object(y.jsx)("div",{className:"item_right",children:Object(y.jsx)("div",{className:"inner_wrapper ",children:Object(y.jsxs)("div",{className:"inner_items",children:[Object(y.jsx)("h3",{children:"Train with Motto!"}),Object(y.jsx)("p",{children:"Sign up to apply to become a Motto Trainer"}),Object(y.jsx)("div",{className:"form_items_trainer",children:Object(y.jsxs)("form",{onSubmit:H,children:[Object(y.jsxs)("div",{className:"input_items_trainer",children:[Object(y.jsx)("input",{placeholder:"Full Name",type:"text",value:x.name,name:"name",onChange:P,className:"fullname"}),Object(y.jsx)("img",{src:d.default,alt:"icon"}),_.name&&Object(y.jsx)("span",{children:_.name[0]})]}),Object(y.jsxs)("div",{className:"input_items_trainer",children:[Object(y.jsx)("input",{placeholder:"Email",type:"email",value:x.email,name:"email",onChange:P}),Object(y.jsx)("img",{src:u.default,alt:"icon"}),_.email&&Object(y.jsx)("span",{children:_.email[0]})]}),Object(y.jsxs)("div",{className:"input_items_trainer",children:[Object(y.jsx)(C.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone Number",inputProps:{name:"phoneNumber"},value:x.phoneNumber,name:"phoneNumber",onChange:function(e){P({target:{name:"phoneNumber",value:e}})}}),Object(y.jsx)("img",{src:m.default,alt:"icon"}),_.phoneNumber&&Object(y.jsx)("span",{children:_.phoneNumber[0]})]}),Object(y.jsxs)("div",{className:"input_items_trainer",children:[Object(y.jsx)("input",{placeholder:"Create Password",type:I?"text":"password",value:x.password,name:"password",onChange:P}),Object(y.jsx)("img",{src:j.default,alt:"icon",onClick:function(){A(!I)}}),_.password&&Object(y.jsx)("span",{children:_.password[0]})]}),Object(y.jsxs)("div",{className:"input_items_trainer",children:[Object(y.jsx)("input",{placeholder:"Confirm Password",type:E?"text":"password",value:x.cpassword,name:"cpassword",onChange:P}),Object(y.jsx)("img",{src:j.default,alt:"icon",onClick:function(){q(!E)}}),_.cpassword&&Object(y.jsx)("span",{children:_.cpassword[0]})]}),W&&Object(y.jsx)("span",{className:"errorMessage",children:W}),Object(y.jsx)("div",{className:"submit_button",children:Object(y.jsxs)("button",{type:"submit",onClick:H,children:["Continue to Account",Object(y.jsx)(h.default,{})]})})]})}),Object(y.jsxs)("div",{className:"login_items",children:[Object(y.jsx)("h4",{children:"Already have an account?"}),Object(y.jsxs)(p.a,{to:"/",children:["Sign In now",Object(y.jsx)(f.default,{})]})]})]})})})}),Object(y.jsx)("br",{})]})})})}));t.default=k},154:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(22),s=a(23),i=a(27),r=a(26),c=a(2),o=(a(554),a(517)),l=a(518),d=a(519),u=a(520),m=a(521),j=a(522),b=a(1),p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"big_container",children:Object(b.jsxs)("div",{className:"personal_container_trainer container",children:[Object(b.jsxs)("div",{className:"personal_trainer_description",children:[Object(b.jsx)("h2",{className:"heading",children:"Here is why you should apply to be a Motto Trainer"}),Object(b.jsx)("p",{className:"discription",children:"Your personal trainer marketplace for Strength & HIIT, Boxing, Yoga & Pilates. Train virtually from anywhere or locally in Motto markets."})]}),Object(b.jsxs)("div",{className:"right_container_trainer",children:[Object(b.jsx)(h,{icon:o.default,description:"Be a part of an elite community of trainers to boost your brand"}),Object(b.jsx)(h,{icon:l.default,description:"  Get access to a large client network."}),Object(b.jsx)(h,{icon:d.default,description:"Maximise your time and earnings by booking 1 on 1 or group sessions "}),Object(b.jsx)(h,{icon:u.default,description:"Minimize customer acquisition cost"}),Object(b.jsx)(h,{icon:m.default,description:"Get matched with the right clients based on your training expertise"}),Object(b.jsx)(h,{icon:j.default,description:"Get access to our trusted partner brands"})]})]})})})}}]),a}(c.Component),h=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"flex-contents_trainer",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:e.icon,alt:"icon"})}),Object(b.jsx)("p",{className:"discription",children:e.description})]})})}},155:function(e,t,a){"use strict";a.r(t);var n=a(4),s=(a(2),a(555),a(792)),i=a.n(s),r=a(284),c=(a(794),a(795),a(1));function o(e){var t=e.style,a=e.onClick;return Object(c.jsx)("div",{className:"right-arrow",style:Object(n.a)(Object(n.a)({},t),{},{display:"block"}),onClick:a,children:Object(c.jsxs)("svg",{id:"Tertiary_Button","data-name":"Tertiary Button",xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 45 45",children:[Object(c.jsx)("path",{id:"Path_7512","data-name":"Path 7512",d:"M0,0V17.692",transform:"translate(13 22.534) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),Object(c.jsx)("path",{id:"Path_7513","data-name":"Path 7513",d:"M13.068,0,6.534,6.534,0,0",transform:"translate(25.185 29.068) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),Object(c.jsxs)("g",{id:"Path_14198","data-name":"Path 14198",fill:"none",children:[Object(c.jsx)("path",{d:"M22.5,0A22.5,22.5,0,1,1,0,22.5,22.5,22.5,0,0,1,22.5,0Z",stroke:"none"}),Object(c.jsx)("path",{d:"M 22.5 2 C 19.73163986206055 2 17.04714012145996 2.541740417480469 14.52108955383301 3.61016845703125 C 12.0802001953125 4.642578125 9.887641906738281 6.120979309082031 8.004310607910156 8.004310607910156 C 6.120979309082031 9.887641906738281 4.642578125 12.0802001953125 3.61016845703125 14.52108955383301 C 2.541740417480469 17.04714012145996 2 19.73163986206055 2 22.5 C 2 25.26836013793945 2.541740417480469 27.95285987854004 3.61016845703125 30.47891044616699 C 4.642578125 32.9197998046875 6.120979309082031 35.11235809326172 8.004310607910156 36.99568939208984 C 9.887641906738281 38.87902069091797 12.0802001953125 40.357421875 14.52108955383301 41.38983154296875 C 17.04714012145996 42.45825958251953 19.73163986206055 43 22.5 43 C 25.26836013793945 43 27.95285987854004 42.45825958251953 30.47891044616699 41.38983154296875 C 32.9197998046875 40.357421875 35.11235809326172 38.87902069091797 36.99568939208984 36.99568939208984 C 38.87902069091797 35.11235809326172 40.357421875 32.9197998046875 41.38983154296875 30.47891044616699 C 42.45825958251953 27.95285987854004 43 25.26836013793945 43 22.5 C 43 19.73163986206055 42.45825958251953 17.04714012145996 41.38983154296875 14.52108955383301 C 40.357421875 12.0802001953125 38.87902069091797 9.887641906738281 36.99568939208984 8.004310607910156 C 35.11235809326172 6.120979309082031 32.9197998046875 4.642578125 30.47891044616699 3.61016845703125 C 27.95285987854004 2.541740417480469 25.26836013793945 2 22.5 2 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z",stroke:"none",fill:"#bcbcbc"})]})]})})}function l(e){var t=e.style,a=e.onClick;return Object(c.jsx)("div",{className:"left-arrow",style:Object(n.a)(Object(n.a)({},t),{},{display:"block"}),onClick:a,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 45 45",children:Object(c.jsxs)("g",{id:"Tertiary_Button","data-name":"Tertiary Button",transform:"translate(45 45) rotate(180)",children:[Object(c.jsx)("path",{id:"Path_7512","data-name":"Path 7512",d:"M0,0V17.692",transform:"translate(13 22.534) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5"}),Object(c.jsx)("path",{id:"Path_7513","data-name":"Path 7513",d:"M13.068,0,6.534,6.534,0,0",transform:"translate(25.185 29.068) rotate(-90)",fill:"none",stroke:"#53bfd2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5"}),Object(c.jsxs)("g",{id:"Path_14198","data-name":"Path 14198",fill:"none",children:[Object(c.jsx)("path",{d:"M22.5,0A22.5,22.5,0,1,1,0,22.5,22.5,22.5,0,0,1,22.5,0Z",stroke:"none"}),Object(c.jsx)("path",{d:"M 22.5 2 C 19.73163986206055 2 17.04714012145996 2.541740417480469 14.52108955383301 3.61016845703125 C 12.0802001953125 4.642578125 9.887641906738281 6.120979309082031 8.004310607910156 8.004310607910156 C 6.120979309082031 9.887641906738281 4.642578125 12.0802001953125 3.61016845703125 14.52108955383301 C 2.541740417480469 17.04714012145996 2 19.73163986206055 2 22.5 C 2 25.26836013793945 2.541740417480469 27.95285987854004 3.61016845703125 30.47891044616699 C 4.642578125 32.9197998046875 6.120979309082031 35.11235809326172 8.004310607910156 36.99568939208984 C 9.887641906738281 38.87902069091797 12.0802001953125 40.357421875 14.52108955383301 41.38983154296875 C 17.04714012145996 42.45825958251953 19.73163986206055 43 22.5 43 C 25.26836013793945 43 27.95285987854004 42.45825958251953 30.47891044616699 41.38983154296875 C 32.9197998046875 40.357421875 35.11235809326172 38.87902069091797 36.99568939208984 36.99568939208984 C 38.87902069091797 35.11235809326172 40.357421875 32.9197998046875 41.38983154296875 30.47891044616699 C 42.45825958251953 27.95285987854004 43 25.26836013793945 43 22.5 C 43 19.73163986206055 42.45825958251953 17.04714012145996 41.38983154296875 14.52108955383301 C 40.357421875 12.0802001953125 38.87902069091797 9.887641906738281 36.99568939208984 8.004310607910156 C 35.11235809326172 6.120979309082031 32.9197998046875 4.642578125 30.47891044616699 3.61016845703125 C 27.95285987854004 2.541740417480469 25.26836013793945 2 22.5 2 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z",stroke:"none",fill:"#bcbcbc"})]})]})})})}t.default=function(){var e={dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:2e3,nextArrow:Object(c.jsx)(o,{}),prevArrow:Object(c.jsx)(l,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:765,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:300,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(c.jsx)("div",{className:"slide-container_trainer",children:Object(c.jsxs)("div",{className:"inner_location container",children:[Object(c.jsxs)("div",{className:"header-content",children:[Object(c.jsx)("h1",{children:"We are in these Cities"}),Object(c.jsx)("p",{children:"Currently available for in-person live training in Miami, New York City, Hamptons & Palm Beach. We will be launching in other cities across the United States soon."})]}),Object(c.jsx)("div",{className:"slider_wrapper_container",children:Object(c.jsx)(i.a,Object(n.a)(Object(n.a)({},e),{},{children:r.SlideData.map((function(e,t){return Object(c.jsx)("div",{className:"main-slide",children:Object(c.jsxs)("div",{className:"slide-content",children:[Object(c.jsx)("img",{src:e.image,alt:e.name,className:"slide-image"}),Object(c.jsx)("img",{src:e.line,alt:e.name,className:"slide-line"}),Object(c.jsx)("p",{children:e.name})]})},t)}))}))})]})})}},186:function(e,t,a){"use strict";a.r(t);a(2);var n=a(153),s=a(154),i=a(155),r=a(1);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(n.default,{}),Object(r.jsx)(s.default,{}),Object(r.jsx)(i.default,{})]})}},284:function(e,t,a){"use strict";a.r(t),a.d(t,"SlideData",(function(){return o}));var n=a(417),s=a(416),i=a(415),r=a(421),c=a(418),o=[{name:"New york city",image:n.default,line:r.default},{name:"Miami",image:s.default,line:r.default},{name:"Hamptons",image:i.default,line:r.default},{name:"Palm Beach",image:c.default,line:r.default}]},415:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Hamptons Image.0daace2f.png"},416:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Miami Image.a63d3986.png"},417:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NYC.e195b1c3.png"},418:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tessa-wilson.b4101337.jpeg"},421:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rectangle.5312514a.svg"},436:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Phone Icon.f207d1b4.svg"},517:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 1.8e7e8872.svg"},518:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 2.ba1db01f.svg"},519:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 3.f7ade7e6.svg"},520:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 4.f460183f.svg"},521:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 5.976b6dc1.svg"},522:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Icon 6.60678f5c.svg"},553:function(e,t,a){},554:function(e,t,a){},555:function(e,t,a){}}]);
//# sourceMappingURL=36.fbe365b1.chunk.js.map