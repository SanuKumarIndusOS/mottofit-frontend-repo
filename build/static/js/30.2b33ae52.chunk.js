(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[30,38,44,111,196,197,223,241,302,303,304,305,306,307,308,309,310,311,312,313],{112:function(e,s,t){"use strict";t.r(s);t(2),t(346),t(32);var c=t(345),i=t(340),n=t(339),a=t(342),r=t(341),l=t(344),o=t(343),j=t(337),d=t(338),u=t(1);s.default=function(){var e,s,t,b,O,x,h,m,f,p,v;return window.location.pathname.includes("/user/scheduler")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:i.default,alt:"icon"}),t=Object(u.jsx)("img",{src:a.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),x=Object(u.jsx)("img",{src:d.default,alt:"icon"}),h=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"inactive",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/session-type")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:a.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),x=Object(u.jsx)("img",{src:d.default,alt:"icon"}),h=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/motto-pass")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),x=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/payment")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),b=Object(u.jsx)("img",{src:o.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),x=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("img",{src:j.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"active",children:"Make a Payment"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,m]}),O,Object(u.jsxs)("div",{className:"items",children:[s," ",f]}),x,Object(u.jsxs)("div",{className:"items",children:[t," ",p]}),h,Object(u.jsxs)("div",{className:"items",children:[b," ",v]})]})})})}},147:function(e,s,t){"use strict";t.r(s);var c=t(5),i=t(2),n=t.n(i),a=t(4),r=(t(448),t(6)),l=(t(89),t(412)),o=t(411),j=t(410),d=t(83),u=t(355),b=(t(22),t(314)),O=t(194),x=(t(230),t(69)),h=t(38),m=t(57),f=t(228),p=(t(84),t(17)),v=t(11),g=t(1),N=Object(g.jsx)("img",{src:x.default,alt:"close"}),_=Object(m.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(h.b)({updateUserDetails:f.updateUserDetails},e)}))((function(e){var s=e.updateUserDetails,t=(e.sessionData,Object(i.useState)([])),x=Object(c.a)(t,2),h=x[0],m=(x[1],Object(i.useState)([])),f=Object(c.a)(m,2),_=f[0],y=(f[1],Object(i.useState)("")),S=Object(c.a)(y,2),w=S[0],k=S[1],I=Object(i.useState)(!1),C=Object(c.a)(I,2),A=C[0],P=C[1],D=Object(i.useRef)(null),B=Object(i.useState)(!1),E=Object(c.a)(B,2),R=(E[0],E[1],Object(v.g)());n.a.useEffect((function(){console.log(R.state.slotDetails)}),[]);var T=function(e,t){var c={sessionData:{location:h,trainingVenue:_,preferedTrainingMode:w,price:e}};console.log("called",c.sessionData),s(c),p.history.push({pathname:"/user/motto-pass",state:{slotDetails:R.state.slotDetails,sessionData:c.sessionData,sessionType:t}})};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"session_outter_container",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"seesion_inner_container",children:[Object(g.jsxs)("div",{className:"link_wrapper",children:[Object(g.jsx)("img",{src:b.default,alt:"icon"}),Object(g.jsxs)("div",{className:"inner_links",children:[Object(g.jsx)(a.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(g.jsx)("div",{})]})]}),Object(g.jsxs)("div",{className:"session_inner_wrapper",children:[Object(g.jsxs)("div",{className:"session_heading",children:[Object(g.jsx)("h2",{children:"Choose your Session Type"}),Object(g.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(g.jsx)("div",{className:"session_tabs",children:Object(g.jsx)("div",{className:"session_tabs_inner",children:Object(g.jsxs)(r.d,{defaultTab:"virtual",onChange:function(e){console.log(e)},children:[Object(g.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(g.jsxs)(r.b,{children:[Object(g.jsx)(r.a,{tabFor:"virtual",children:Object(g.jsx)("button",{onClick:function(){return k("virtual")},className:"".concat("virtual"===w?"active":""),children:"Virtual"})}),Object(g.jsx)(r.a,{tabFor:"inPerson",children:Object(g.jsx)("button",{onClick:function(){return k("inperson")},className:"".concat("inperson"===w?"active":""),children:"In Person"})})]}),Object(g.jsxs)("div",{className:"session_location_dd",children:[Object(g.jsx)("div",{className:"session_location"}),Object(g.jsx)("div",{className:"session_venue",children:Object(g.jsx)("div",{className:"session_location"})})]}),Object(g.jsx)("div",{className:"session_view_location",children:Object(g.jsx)(a.a,{to:"",children:"View Trainer\u2019s Location"})})]}),Object(g.jsx)(r.c,{tabId:"virtual",children:Object(g.jsx)("div",{className:"inPerson_tab_inner",children:Object(g.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(g.jsxs)("div",{className:"session_cards",children:[Object(g.jsxs)("div",{className:"session_card_content",children:[Object(g.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(g.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),A?Object(g.jsx)(O.a,{open:A,onClose:function(){return P(!1)},center:!0,closeIcon:N,container:D.current,styles:{boaderRadius:"10px"},children:Object(g.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(g.jsx)("h2",{children:"Want to Train with Friends?"}),Object(g.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(g.jsxs)("div",{className:"session_card_inner",children:[Object(g.jsxs)("h6",{children:["$20",Object(g.jsxs)("span",{children:["/ Session"," ",Object(g.jsx)("img",{src:u.default,alt:"icon",onClick:function(){return P(!0)}})]})]}),Object(g.jsx)("img",{src:l.default,alt:"icon"})]}),Object(g.jsxs)("button",{onClick:function(){return T(20,"1on1")},children:["BOOK YOUR SESSION"," ",Object(g.jsx)(d.default,{})]})]}),Object(g.jsxs)("div",{className:"session_cards",children:[Object(g.jsxs)("div",{className:"session_card_content",children:[Object(g.jsx)("h2",{children:"SOCIAL SESSION"}),Object(g.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(g.jsxs)("div",{className:"session_card_inner",children:[Object(g.jsxs)("h6",{children:["$15",Object(g.jsxs)("span",{children:["/ 5 People"," ",Object(g.jsx)("img",{src:u.default,alt:"icon",onClick:function(){return P(!0)}})]})]}),Object(g.jsx)("img",{src:o.default,alt:"icon"})]}),Object(g.jsxs)("button",{onClick:function(){return T(15,"group")},children:["BOOK YOUR SESSION"," ",Object(g.jsx)(d.default,{})]})]}),Object(g.jsxs)("div",{className:"session_cards",children:[Object(g.jsxs)("div",{className:"session_card_content",children:[Object(g.jsx)("h2",{children:"CREATE A CLASS"}),Object(g.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(g.jsxs)("div",{className:"session_card_inner",children:[Object(g.jsxs)("h6",{children:["$20",Object(g.jsxs)("span",{children:["/ 12 People"," ",Object(g.jsx)("img",{src:u.default,alt:"icon",onClick:function(){return P(!0)}})]})]}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("button",{onClick:function(){return T(20,"class")},children:["BOOK YOUR SESSION"," ",Object(g.jsx)(d.default,{})]})]})]})})}),Object(g.jsx)(r.c,{tabId:"inPerson",children:Object(g.jsx)("div",{className:"inPerson_tab_inner",children:Object(g.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(g.jsxs)("div",{className:"session_cards",children:[Object(g.jsxs)("div",{className:"session_card_content",children:[Object(g.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(g.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),Object(g.jsxs)("div",{className:"session_card_inner",children:[Object(g.jsxs)("h6",{children:["$125",Object(g.jsxs)("span",{children:["/ Session"," ",Object(g.jsx)("img",{src:u.default,alt:"icon"})]})]}),Object(g.jsx)("img",{src:l.default,alt:"icon"})]}),Object(g.jsxs)("button",{onClick:function(){return T(120)},children:["BOOK YOUR SESSION"," ",Object(g.jsx)(d.default,{})]})]}),Object(g.jsxs)("div",{className:"session_cards",children:[Object(g.jsxs)("div",{className:"session_card_content",children:[Object(g.jsx)("h2",{children:"SOCIAL SESSION"}),Object(g.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(g.jsxs)("div",{className:"session_card_inner",children:[Object(g.jsxs)("h6",{children:["$20",Object(g.jsxs)("span",{children:["/ 4 People"," ",Object(g.jsx)("img",{src:u.default,alt:"icon"})]})]}),Object(g.jsx)("img",{src:o.default,alt:"icon"})]}),Object(g.jsxs)("button",{onClick:function(){return T(20)},children:["BOOK YOUR SESSION"," ",Object(g.jsx)(d.default,{})]})]}),Object(g.jsxs)("div",{className:"session_cards",children:[Object(g.jsxs)("div",{className:"session_card_content",children:[Object(g.jsx)("h2",{children:"CREATE A CLASS"}),Object(g.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(g.jsxs)("div",{className:"session_card_inner",children:[Object(g.jsxs)("h6",{children:["$30",Object(g.jsxs)("span",{children:["/ 15 People"," ",Object(g.jsx)("img",{src:u.default,alt:"icon"})]})]}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("button",{onClick:function(){return T(30)},children:["BOOK YOUR SESSION"," ",Object(g.jsx)(d.default,{})]})]})]})})})]})})})]})]})})})})}));s.default=_},175:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return a}));t(2);var c=t(112),i=t(147),n=t(1);function a(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(c.default,{}),Object(n.jsx)(i.default,{})]})}},228:function(e,s,t){"use strict";t.r(s),t.d(s,"updateUserDetails",(function(){return i}));var c=t(25),i=function(e){return function(s){return new Promise((function(t){s({type:c.UserActionType.updateUserDetails,payload:e}),t(!0)}))}}},314:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow Back.d3693c0f.svg"},337:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow Active.29c0a0c4.svg"},338:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow InActive.71319793.svg"},339:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Book Session Icon Active.57a202ef.svg"},340:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Book Session Icon.4fc668f8.svg"},341:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Motto Pass Icon Active.1e37dec5.svg"},342:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Motto Pass Icon.26e91783.svg"},343:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Payment Icon Active.d34a42c9.svg"},344:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Payment Icon.9d154cc9.svg"},345:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Schedule Slot Icon.40eb0810.svg"},346:function(e,s,t){},355:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Q Mark.c9a955fb.svg"},410:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/class.abfe0b19.svg"},411:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/social.034fbac8.svg"},412:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/training1on1.8661114c.svg"},448:function(e,s,t){}}]);
//# sourceMappingURL=30.2b33ae52.chunk.js.map