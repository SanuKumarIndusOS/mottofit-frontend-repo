(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[25,87,136,174,178,304,328,331,332,397],{142:function(e,s,t){"use strict";t.r(s);var n=t(580),c=t(10),i=t(2),r=(t(493),t(104)),a=t(61),l=t(350),o=t(315),d=t(431),j=t(430),h=t(429),u=t(69),b=(t(392),t(41)),O=t(6),m=t(14),x=t(71),f=t(34),p=t(27),v=t(216),_=t(1),T=[{title:"Social Session",session:"1 Session / 2 Session",session1:"1 Session / 2 Session",session2:"1 Session / 2 Session",price:"$65.00 / Person",price1:"$65.00 / Person",price2:"$65.00 / Person"},{title:"Class Session",session:"Class (5-15 People)",price:"$15.00 / Person"},{title:"Cancellation Session",session:"Cancellation Fee",price:"Free upto 48 hours"}],N=function(){var e=Object(i.useState)(0),s=Object(c.a)(e,2),t=s[0],n=s[1];return Object(_.jsx)(_.Fragment,{children:T.map((function(e,s){return Object(_.jsxs)("div",{className:"TF_data_item",children:[Object(_.jsxs)("div",{className:"TF_data_title",onClick:function(){return function(e){if(t===e)return n(null);n(e)}(s)},children:[Object(_.jsx)("h3",{children:e.title}),Object(_.jsx)("div",{className:t===s?"line show":"line"})]}),Object(_.jsxs)("div",{className:"TF_DT_grid",children:[Object(_.jsx)("div",{className:"TF_DT_left",children:Object(_.jsxs)("div",{className:t===s?"TF_DT_contentshow":"TF_DT_content",children:[Object(_.jsx)("p",{children:e.session}),Object(_.jsx)("p",{children:e.session1}),Object(_.jsx)("p",{children:e.session2})]})}),Object(_.jsx)("div",{className:"TF_DT_right",children:Object(_.jsxs)("div",{className:t===s?"TF_DT_contentshow":"TF_DT_content",children:[Object(_.jsx)("p",{children:e.price}),Object(_.jsx)("p",{children:e.price1}),Object(_.jsx)("p",{children:e.price2})]})})]}),Object(_.jsx)("div",{})]},s)}))})},F=Object(f.b)(null,(function(e){return Object(p.b)({userSession:x.userSession},e)}))((function(e){var s=e.userSession,t=Object(i.useState)([{friendName:"",friendEmail:"",friendPhone:""}]),x=Object(c.a)(t,2),f=x[0],p=x[1],T=localStorage.getItem("sessionTrainingType"),F=function(e,s){var t=Object(n.a)(f);t[e][s.target.name]=s.target.value,p(t)};return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"TF_outter_container",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"TF_inner_container",children:[Object(_.jsxs)("div",{className:"TF_headers",children:[Object(_.jsx)("h2",{children:"Your session is booked! Start adding your friends"}),Object(_.jsx)("p",{children:"Invite as many friends as you\u2019d like, the friends that accept will automatically be added in correspondence to session size! Once they accept your session, your rate will automatically be adjusted."})]}),Object(_.jsxs)("div",{className:"TF_wrapper",children:[Object(_.jsxs)("div",{className:"TF_inner_wrapper",children:[Object(_.jsx)("div",{className:"TF_wrapper_left",children:Object(_.jsxs)("div",{className:"TF_wrapper_content",children:[Object(_.jsx)("h2",{children:"Add Friends to Your Session"}),Object(_.jsx)("div",{className:"TF_form",children:Object(_.jsxs)("form",{children:[Object(_.jsx)("h3",{children:"Enter your friend's details"}),Object(_.jsxs)("div",{className:"TF_inner_form",children:[f.map((function(e,s){return Object(_.jsxs)("div",{className:"TF_wrapper_input",children:[Object(_.jsxs)("h4",{children:["Friend #",s]}),Object(_.jsxs)("div",{className:"inner_input",children:[Object(_.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:s.friendName,onChange:function(s){return F(e,s)}}),Object(_.jsx)("img",{src:a.default,alt:"icon"})]}),Object(_.jsx)("div",{className:"TF_input",children:Object(_.jsxs)("div",{className:"inner_input",children:[Object(_.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:s.friendEmail,onChange:function(s){return F(e,s)}}),Object(_.jsx)("img",{src:r.default,alt:"icon"}),Object(_.jsx)("input",{type:"text",placeholder:"Phone Number",name:"phone",value:s.friendPhone,onChange:function(s){return F(e,s)}}),Object(_.jsx)("img",{src:l.default,alt:"icon"})]})})]},e)})),Object(_.jsxs)("div",{className:"TF_remember_left",children:[Object(_.jsx)("input",{className:"TF_check",type:"checkbox",value:"lsRememberMe",id:"rememberMe"})," ",Object(_.jsx)("label",{children:"I will pay for all the people that I will be inviting to my social session or class"})]})]}),Object(_.jsxs)("div",{className:"TF_button",children:[Object(_.jsxs)("button",{onClick:function(){var e=localStorage.getItem("sessionId");fetch("".concat(v.SESSION_URL,"/v1/session/update"),{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},method:"PUT",body:JSON.stringify({friends:[{email:"stageuser001@doodleblue.com",firstName:"John",lastName:"Doe 001",phoneNo:"8220681305"}],sessionId:e})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},children:["Invite Friends ",Object(_.jsx)(u.default,{})," "]}),"social"===T&&f.length<3||"class"===T&&f.length<14?Object(_.jsx)("h5",{onClick:function(){p([].concat(Object(n.a)(f),[{friendName:"",friendEmail:"",friendPhone:""}]))},children:"+ Add More Friends"}):""]})]})})]})}),Object(_.jsx)("div",{className:"TF_wrapper_right",children:Object(_.jsxs)("div",{className:"TF_right",children:[Object(_.jsxs)("div",{className:"TF_profile",children:[Object(_.jsx)("img",{src:o.default,alt:"icon"}),Object(_.jsxs)("div",{className:"TF_name",children:[Object(_.jsx)("h2",{children:"John Doe"}),Object(_.jsx)("p",{children:"BOXING, STRENGTH & HIIT"})]})]}),Object(_.jsxs)("div",{className:"TF_wrapper",children:[Object(_.jsxs)("div",{className:"TF_details",children:[Object(_.jsx)("h3",{children:"I WANT TO TRAIN IN"}),Object(_.jsxs)("div",{className:"TF_data_inner",children:[Object(_.jsx)("img",{src:d.default,alt:"icon"}),Object(_.jsx)("h4",{children:"Strength & HIIT"})]})]}),Object(_.jsxs)("div",{className:"TF_details",children:[Object(_.jsx)("h3",{children:"I want to train on"}),Object(_.jsxs)("div",{className:"TF_data_inner",children:[Object(_.jsx)("img",{src:j.default,alt:"icon"}),Object(_.jsx)("h4",{children:"February 16th, 2021 at 5:00 A.M."})]})]}),Object(_.jsxs)("div",{className:"TF_details",children:[Object(_.jsx)("h3",{children:"I WANT TO TRAIN AT"}),Object(_.jsxs)("div",{className:"TF_data_inner",children:[Object(_.jsx)("img",{src:h.default,alt:"icon"}),Object(_.jsx)("h4",{children:"The Trainer\u2019s Gym"})]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("div",{className:"TF_service_details",children:Object(_.jsx)("div",{className:"TF_service_wrapper",children:Object(_.jsx)("div",{className:"TF_service_left",children:Object(_.jsxs)("div",{className:"TF_service_header",children:[Object(_.jsxs)("div",{className:"TF_inner_header",children:[Object(_.jsx)("h3",{children:"Service Details"}),Object(_.jsx)("h3",{children:"Price / Hour"})]}),Object(_.jsx)(N,{})]})})})})]})]})})]}),Object(_.jsxs)("div",{className:"TF_skip",children:[Object(_.jsx)("h2",{children:"Not right now? "}),Object(_.jsxs)(O.a,{onClick:function(){s().then((function(){m.history.push({pathname:"/users/dashboard/session"})})).catch((function(e){return console.log(e)}))},children:["CONTINUE TO ACCOUNT ",Object(_.jsx)(b.default,{})]})]})]})]})})})})}));s.default=F},216:function(e,s,t){"use strict";t.r(s),t.d(s,"COMMON_URL",(function(){return n})),t.d(s,"MESSAGING_URL",(function(){return c})),t.d(s,"SESSION_URL",(function(){return i})),t.d(s,"NOTIFICATION_URL",(function(){return r})),t.d(s,"PAYMENT_URL",(function(){return a}));var n="http://doodlebluelive.com:2307",c="http://doodlebluelive.com:2338",i="http://doodlebluelive.com:2337",r="",a="http://doodlebluelive.com:2336"},315:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Jenny.c50273b9.png"},350:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Phone Icon.595b1737.svg"},392:function(e,s,t){},429:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Location Icon.3c78595b.svg"},430:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Shedule Icon.f328f754.svg"},431:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Strength Icon.0bdf7577.svg"},493:function(e,s,t){},580:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));var n=t(99);var c=t(70);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=25.4f4c37b9.chunk.js.map