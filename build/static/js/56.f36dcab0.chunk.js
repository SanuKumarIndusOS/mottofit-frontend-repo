(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[56,213,246,264,333,334,335],{137:function(e,s,t){"use strict";t.r(s);var n=t(10),c=t(2),i=t.n(c),a=t(6),r=t(867),l=(t(471),t(602)),o=(t(601),t(434)),d=t(433),j=t(432),b=t(69),u=t(347),O=t(316),h=t(186),x=(t(221),t(100)),p=t(27),m=t(34),f=t(71),v=(t(49),t(14)),_=t(9),N=t(1),g=[{value:"nyw",label:"New York"},{value:"maimi",label:"Maimi"},{value:"hampton",label:"Hampton"},{value:"plam",label:"Plam Beach"}],y=[{value:"trainerlocation",label:"Trainer's Location"},{value:"yourlocation",label:"Your Location"}],S=Object(N.jsx)("img",{src:x.default,alt:"close"}),w=Object(m.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(p.b)({updateUserDetails:f.updateUserDetails},e)}))((function(e){var s=e.updateUserDetails,t=(e.sessionData,Object(c.useState)([])),x=Object(n.a)(t,2),p=x[0],m=x[1],f=Object(c.useState)([]),w=Object(n.a)(f,2),C=w[0],k=w[1],I=Object(c.useState)(""),A=Object(n.a)(I,2),D=A[0],T=A[1],E=Object(c.useState)(!1),P=Object(n.a)(E,2),R=P[0],U=P[1],B=Object(c.useRef)(null),Y=Object(c.useState)(!1),L=Object(n.a)(Y,2),K=(L[0],L[1],Object(_.g)());i.a.useEffect((function(){}),[]);var V=function(e,t){var n={sessionData:{location:p,trainingVenue:C,preferedTrainingMode:D,price:e}};console.log("called",n.sessionData),s(n),v.history.push({pathname:"/user/payment",state:{slotDetails:K.state.slotDetails,sessionData:n.sessionData,sessionType:t}})};return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"session_outter_container",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"seesion_inner_container",children:[Object(N.jsxs)("div",{className:"link_wrapper",children:[Object(N.jsx)("img",{src:O.default,alt:"icon"}),Object(N.jsxs)("div",{className:"inner_links",children:[Object(N.jsx)(a.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(N.jsx)("div",{})]})]}),Object(N.jsxs)("div",{className:"session_inner_wrapper",children:[Object(N.jsxs)("div",{className:"session_heading",children:[Object(N.jsx)("h2",{children:"Choose your Session Type"}),Object(N.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(N.jsx)("div",{className:"session_tabs",children:Object(N.jsx)("div",{className:"session_tabs_inner",children:Object(N.jsxs)(l.d,{defaultTab:"virtual",onChange:function(e){console.log(e)},children:[Object(N.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(N.jsxs)(l.b,{children:[Object(N.jsx)(l.a,{tabFor:"virtual",children:Object(N.jsx)("button",{onClick:function(){return T("virtual")},className:"".concat("virtual"===D?"active":""),children:"Virtual"})}),Object(N.jsx)(l.a,{tabFor:"inPerson",children:Object(N.jsx)("button",{onClick:function(){return T("inperson")},className:"".concat("inperson"===D?"active":""),children:"In Person"})})]}),Object(N.jsxs)("div",{className:"session_location_dd",children:[Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{defaultValue:p,onChange:m,options:g,className:"session_location_select"})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{defaultValue:C,onChange:k,options:y,placeholder:"Select Training Venue",className:"session_location_select"})})})]}),Object(N.jsx)("div",{className:"session_view_location",children:Object(N.jsx)(a.a,{to:"",children:"View Trainer\u2019s Location"})})]}),Object(N.jsx)(l.c,{tabId:"virtual",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),R?Object(N.jsx)(h.a,{open:R,onClose:function(){return U(!1)},center:!0,closeIcon:S,container:B.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:u.default,alt:"icon",onClick:function(){return U(!0)}})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return V(20,"1on1")},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(b.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$15",Object(N.jsxs)("span",{children:["/ 5 People"," ",Object(N.jsx)("img",{src:u.default,alt:"icon",onClick:function(){return U(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return V(15,"group")},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(b.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 12 People"," ",Object(N.jsx)("img",{src:u.default,alt:"icon",onClick:function(){return U(!0)}})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return V(20,"class")},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(b.default,{})]})]})]})})}),Object(N.jsx)(l.c,{tabId:"inPerson",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$125",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:u.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return V(120)},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(b.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 4 People"," ",Object(N.jsx)("img",{src:u.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return V(20)},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(b.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$30",Object(N.jsxs)("span",{children:["/ 15 People"," ",Object(N.jsx)("img",{src:u.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return V(30)},children:["BOOK YOUR SESSION"," ",Object(N.jsx)(b.default,{})]})]})]})})})]})})})]})]})})})})}));s.default=w},316:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Arrow Back.eda9c053.svg"},347:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Q Mark.0ff4fda1.svg"},432:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/class.c3e761da.svg"},433:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/social.18284ed6.svg"},434:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/training1on1.f81fa571.svg"},471:function(e,s,t){}}]);
//# sourceMappingURL=56.f36dcab0.chunk.js.map