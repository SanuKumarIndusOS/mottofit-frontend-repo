(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[25,147,193,197,326,350,353,354,419],{148:function(e,s,t){"use strict";t.r(s);var c=t(195),n=t(12),i=t(2),r=(t(519),t(109)),a=t(61),l=t(375),d=t(338),o=t(421),j=t(420),h=t(419),u=t(71),b=(t(425),t(42)),O=t(6),m=t(17),x=t(73),p=t(37),f=t(26),_=t(231),T=t(1),v=[{title:"Social Session",session:"1 Session / 2 Session",session1:"1 Session / 2 Session",session2:"1 Session / 2 Session",price:"$65.00 / Person",price1:"$65.00 / Person",price2:"$65.00 / Person"},{title:"Class Session",session:"Class (5-15 People)",price:"$15.00 / Person"},{title:"Cancellation Session",session:"Cancellation Fee",price:"Free upto 48 hours"}],N=function(){var e=Object(i.useState)(0),s=Object(n.a)(e,2),t=s[0],c=s[1];return Object(T.jsx)(T.Fragment,{children:v.map((function(e,s){return Object(T.jsxs)("div",{className:"TF_data_item",children:[Object(T.jsxs)("div",{className:"TF_data_title",onClick:function(){return function(e){if(t===e)return c(null);c(e)}(s)},children:[Object(T.jsx)("h3",{children:e.title}),Object(T.jsx)("div",{className:t===s?"line show":"line"})]}),Object(T.jsxs)("div",{className:"TF_DT_grid",children:[Object(T.jsx)("div",{className:"TF_DT_left",children:Object(T.jsxs)("div",{className:t===s?"TF_DT_contentshow":"TF_DT_content",children:[Object(T.jsx)("p",{children:e.session}),Object(T.jsx)("p",{children:e.session1}),Object(T.jsx)("p",{children:e.session2})]})}),Object(T.jsx)("div",{className:"TF_DT_right",children:Object(T.jsxs)("div",{className:t===s?"TF_DT_contentshow":"TF_DT_content",children:[Object(T.jsx)("p",{children:e.price}),Object(T.jsx)("p",{children:e.price1}),Object(T.jsx)("p",{children:e.price2})]})})]})]},s)}))})},F=Object(p.b)(null,(function(e){return Object(f.b)({userSession:x.userSession},e)}))((function(e){var s=e.userSession,t=Object(i.useState)([{friendName:"",friendEmail:"",friendPhone:""}]),x=Object(n.a)(t,2),p=x[0],f=x[1],v=localStorage.getItem("sessionTrainingType"),F=function(e,s){var t=Object(c.a)(p);t[e][s.target.name]=s.target.value,f(t)};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{className:"TF_outter_container",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"TF_inner_container",children:[Object(T.jsxs)("div",{className:"TF_headers",children:[Object(T.jsx)("h2",{children:"Your session is booked! Start adding your friends"}),Object(T.jsx)("p",{children:"Invite as many friends as you\u2019d like, the friends that accept will automatically be added in correspondence to session size! Once they accept your session, your rate will automatically be adjusted."})]}),Object(T.jsxs)("div",{className:"TF_wrapper",children:[Object(T.jsxs)("div",{className:"TF_inner_wrapper",children:[Object(T.jsx)("div",{className:"TF_wrapper_left",children:Object(T.jsxs)("div",{className:"TF_wrapper_content",children:[Object(T.jsx)("h2",{children:"Add Friends to Your Session"}),Object(T.jsx)("div",{className:"TF_form",children:Object(T.jsxs)("form",{children:[Object(T.jsx)("h3",{children:"Enter your friend's details"}),Object(T.jsxs)("div",{className:"TF_inner_form",children:[p.map((function(e,s){return Object(T.jsxs)("div",{className:"TF_wrapper_input",children:[Object(T.jsxs)("h4",{children:["Friend #",s]}),Object(T.jsxs)("div",{className:"inner_input",children:[Object(T.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:s.friendName,onChange:function(s){return F(e,s)}}),Object(T.jsx)("img",{src:a.default,alt:"icon"})]}),Object(T.jsx)("div",{className:"TF_input",children:Object(T.jsxs)("div",{className:"inner_input",children:[Object(T.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:s.friendEmail,onChange:function(s){return F(e,s)}}),Object(T.jsx)("img",{src:r.default,alt:"icon"}),Object(T.jsx)("input",{type:"text",placeholder:"Phone Number",name:"phone",value:s.friendPhone,onChange:function(s){return F(e,s)}}),Object(T.jsx)("img",{src:l.default,alt:"icon"})]})})]},e)})),Object(T.jsxs)("div",{className:"TF_remember_left",children:[Object(T.jsx)("input",{className:"TF_check",type:"checkbox",value:"lsRememberMe",id:"rememberMe"})," ",Object(T.jsx)("label",{children:"I will pay for all the people that I will be inviting to my social session or class"})]})]}),Object(T.jsxs)("div",{className:"TF_button",children:[Object(T.jsxs)("button",{onClick:function(){var e=localStorage.getItem("sessionId");fetch("".concat(_.SESSION_URL,"/v1/session/update"),{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},method:"PUT",body:JSON.stringify({friends:[{email:"stageuser001@doodleblue.com",firstName:"John",lastName:"Doe 001",phoneNo:"8220681305"}],sessionId:e})}).then((function(e){return e.json()})).then((function(){})).catch((function(e){return console.log(e)}))},children:["Invite Friends ",Object(T.jsx)(u.default,{})," "]}),"social"===v&&p.length<3||"class"===v&&p.length<14?Object(T.jsx)("h5",{onClick:function(){f([].concat(Object(c.a)(p),[{friendName:"",friendEmail:"",friendPhone:""}]))},children:"+ Add More Friends"}):null]})]})})]})}),Object(T.jsx)("div",{className:"TF_wrapper_right",children:Object(T.jsxs)("div",{className:"TF_right",children:[Object(T.jsxs)("div",{className:"TF_profile",children:[Object(T.jsx)("img",{src:d.default,alt:"icon"}),Object(T.jsxs)("div",{className:"TF_name",children:[Object(T.jsx)("h2",{children:"John Doe"}),Object(T.jsx)("p",{children:"BOXING, STRENGTH & HIIT"})]})]}),Object(T.jsxs)("div",{className:"TF_wrapper",children:[Object(T.jsxs)("div",{className:"TF_details",children:[Object(T.jsx)("h3",{children:"I WANT TO TRAIN IN"}),Object(T.jsxs)("div",{className:"TF_data_inner",children:[Object(T.jsx)("img",{src:o.default,alt:"icon"}),Object(T.jsx)("h4",{children:"Strength & HIIT"})]})]}),Object(T.jsxs)("div",{className:"TF_details",children:[Object(T.jsx)("h3",{children:"I want to train on"}),Object(T.jsxs)("div",{className:"TF_data_inner",children:[Object(T.jsx)("img",{src:j.default,alt:"icon"}),Object(T.jsx)("h4",{children:"February 16th, 2021 at 5:00 A.M."})]})]}),Object(T.jsxs)("div",{className:"TF_details",children:[Object(T.jsx)("h3",{children:"I WANT TO TRAIN AT"}),Object(T.jsxs)("div",{className:"TF_data_inner",children:[Object(T.jsx)("img",{src:h.default,alt:"icon"}),Object(T.jsx)("h4",{children:"The Trainer\u2019s Gym"})]})]}),Object(T.jsx)("hr",{}),Object(T.jsx)("div",{className:"TF_service_details",children:Object(T.jsx)("div",{className:"TF_service_wrapper",children:Object(T.jsx)("div",{className:"TF_service_left",children:Object(T.jsxs)("div",{className:"TF_service_header",children:[Object(T.jsxs)("div",{className:"TF_inner_header",children:[Object(T.jsx)("h3",{children:"Service Details"}),Object(T.jsx)("h3",{children:"Price / Hour"})]}),Object(T.jsx)(N,{})]})})})})]})]})})]}),Object(T.jsxs)("div",{className:"TF_skip",children:[Object(T.jsx)("h2",{children:"Not right now? "}),Object(T.jsxs)(O.a,{onClick:function(){s().then((function(){m.history.push({pathname:"/users/dashboard/session"})})).catch((function(e){return console.log(e)}))},children:["CONTINUE TO ACCOUNT ",Object(T.jsx)(b.default,{})]})]})]})]})})})})}));s.default=F},231:function(e,s,t){"use strict";t.r(s),t.d(s,"COMMON_URL",(function(){return c})),t.d(s,"MESSAGING_URL",(function(){return n})),t.d(s,"SESSION_URL",(function(){return i})),t.d(s,"NOTIFICATION_URL",(function(){return r})),t.d(s,"PAYMENT_URL",(function(){return a}));var c="http://doodlebluelive.com:2307",n="http://doodlebluelive.com:2338",i="http://doodlebluelive.com:2337",r="",a="http://doodlebluelive.com:2336"},338:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Jenny.c50273b9.png"},375:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Phone Icon.f207d1b4.svg"},419:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Location Icon.c8540d80.svg"},420:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Shedule Icon.c434a0ee.svg"},421:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Strength Icon.533b1e81.svg"},425:function(e,s,t){},519:function(e,s,t){}}]);
//# sourceMappingURL=25.cf064dfe.chunk.js.map