(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[33,41,56,213,214,246,264,333,334,335,336,337,338,339,340,341,342,343,344],{101:function(e,s,t){"use strict";t.r(s);t(2),t(367);var c=t(364),i=t(359),a=t(358),n=t(361),l=t(360),r=t(363),o=t(362),j=t(356),d=t(357),u=t(1);s.default=function(){var e,s,t,b,O,h,x,m,f,p,v;return window.location.pathname.includes("/user/scheduler")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:i.default,alt:"icon"}),t=Object(u.jsx)("img",{src:n.default,alt:"icon"}),b=Object(u.jsx)("img",{src:r.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("img",{src:d.default,alt:"icon"}),x=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"inactive",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/session-type")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),t=Object(u.jsx)("img",{src:n.default,alt:"icon"}),b=Object(u.jsx)("img",{src:r.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("img",{src:d.default,alt:"icon"}),x=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/motto-pass")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),t=Object(u.jsx)("img",{src:l.default,alt:"icon"}),b=Object(u.jsx)("img",{src:r.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("img",{src:j.default,alt:"icon"}),x=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/payment")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),t=Object(u.jsx)("img",{src:l.default,alt:"icon"}),b=Object(u.jsx)("img",{src:o.default,alt:"icon"}),O=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("img",{src:j.default,alt:"icon"}),x=Object(u.jsx)("img",{src:j.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),f=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"active",children:"Make a Payment"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,m]}),O,Object(u.jsxs)("div",{className:"items",children:[s," ",f]}),h,Object(u.jsxs)("div",{className:"items",children:[t," ",p]}),x,Object(u.jsxs)("div",{className:"items",children:[b," ",v]})]})})})}},137:function(e,s,t){"use strict";t.r(s);var c=t(10),i=t(2),a=t.n(i),n=t(6),l=t(867),r=(t(471),t(602)),o=(t(601),t(434)),j=t(433),d=t(432),u=t(69),b=t(347),O=t(316),h=t(186),x=(t(221),t(100)),m=t(27),f=t(34),p=t(71),v=(t(49),t(14)),g=t(9),N=t(1),_=[{value:"nyw",label:"New York"},{value:"maimi",label:"Maimi"},{value:"hampton",label:"Hampton"},{value:"plam",label:"Plam Beach"}],y=[{value:"trainerlocation",label:"Trainer's Location"},{value:"yourlocation",label:"Your Location"}],S=Object(N.jsx)("img",{src:x.default,alt:"close"}),w=Object(f.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(m.b)({updateUserDetails:p.updateUserDetails},e)}))((function(e){var s=e.updateUserDetails,t=(e.sessionData,Object(i.useState)([])),x=Object(c.a)(t,2),m=x[0],f=x[1],p=Object(i.useState)([]),w=Object(c.a)(p,2),k=w[0],C=w[1],I=Object(i.useState)(""),A=Object(c.a)(I,2),P=A[0],B=A[1],D=Object(i.useState)(!1),T=Object(c.a)(D,2),E=T[0],R=T[1],Y=Object(i.useRef)(null),M=Object(i.useState)(!1),U=Object(c.a)(M,2),G=(U[0],U[1],Object(g.g)());a.a.useEffect((function(){}),[]);var L=function(e,t){var c={sessionData:{location:m,trainingVenue:k,preferedTrainingMode:P,price:e}};console.log("called",c.sessionData),s(c),v.history.push({pathname:"/user/payment",state:{slotDetails:G.state.slotDetails,sessionData:c.sessionData,sessionType:t}})};return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"session_outter_container",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"seesion_inner_container",children:[Object(N.jsxs)("div",{className:"link_wrapper",children:[Object(N.jsx)("img",{src:O.default,alt:"icon"}),Object(N.jsxs)("div",{className:"inner_links",children:[Object(N.jsx)(n.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(N.jsx)("div",{})]})]}),Object(N.jsxs)("div",{className:"session_inner_wrapper",children:[Object(N.jsxs)("div",{className:"session_heading",children:[Object(N.jsx)("h2",{children:"Choose your Session Type"}),Object(N.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(N.jsx)("div",{className:"session_tabs",children:Object(N.jsx)("div",{className:"session_tabs_inner",children:Object(N.jsxs)(r.d,{defaultTab:"virtual",onChange:function(e){console.log(e)},children:[Object(N.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(N.jsxs)(r.b,{children:[Object(N.jsx)(r.a,{tabFor:"virtual",children:Object(N.jsx)("button",{onClick:function(){return B("virtual")},className:"".concat("virtual"===P?"active":""),children:"Virtual"})}),Object(N.jsx)(r.a,{tabFor:"inPerson",children:Object(N.jsx)("button",{onClick:function(){return B("inperson")},className:"".concat("inperson"===P?"active":""),children:"In Person"})})]}),Object(N.jsxs)("div",{className:"session_location_dd",children:[Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(l.a,{defaultValue:m,onChange:f,options:_,className:"session_location_select"})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(l.a,{defaultValue:k,onChange:C,options:y,placeholder:"Select Training Venue",className:"session_location_select"})})})]}),Object(N.jsx)("div",{className:"session_view_location",children:Object(N.jsx)(n.a,{to:"",children:"View Trainer\u2019s Location"})})]}),Object(N.jsx)(r.c,{tabId:"virtual",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),E?Object(N.jsx)(h.a,{open:E,onClose:function(){return R(!1)},center:!0,closeIcon:S,container:Y.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return R(!0)}})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return L(20,"1on1")},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$15",Object(N.jsxs)("span",{children:["/ 5 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return R(!0)}})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return L(15,"group")},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 12 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return R(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return L(20,"class")},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(u.default,{})]})]})]})})}),Object(N.jsx)(r.c,{tabId:"inPerson",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$125",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return L(120)},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 4 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return L(20)},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$30",Object(N.jsxs)("span",{children:["/ 15 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return L(30)},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(u.default,{})]})]})]})})})]})})})]})]})})})})}));s.default=w},166:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return n}));t(2);var c=t(101),i=t(137),a=t(1);function n(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(c.default,{}),Object(a.jsx)(i.default,{})]})}},316:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow Back.d3693c0f.svg"},347:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Q Mark.c9a955fb.svg"},356:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow Active.29c0a0c4.svg"},357:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow InActive.71319793.svg"},358:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Book Session Icon Active.57a202ef.svg"},359:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Book Session Icon.4fc668f8.svg"},360:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Motto Pass Icon Active.1e37dec5.svg"},361:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Motto Pass Icon.26e91783.svg"},362:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Payment Icon Active.d34a42c9.svg"},363:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Payment Icon.9d154cc9.svg"},364:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Schedule Slot Icon.40eb0810.svg"},367:function(e,s,t){},432:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/class.abfe0b19.svg"},433:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/social.034fbac8.svg"},434:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/training1on1.8661114c.svg"},471:function(e,s,t){}}]);
//# sourceMappingURL=33.6bdcc4b0.chunk.js.map