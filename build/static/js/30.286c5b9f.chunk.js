(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[30,39,45,233,234,268,286,355,356,357,358,359,360,361,362,363,364,365,366],{104:function(e,t,s){"use strict";s.r(t);s(2),s(392);var c=s(389),n=s(384),i=s(383),a=s(386),r=s(385),l=s(388),o=s(387),d=s(381),j=s(382),u=s(1);t.default=function(){var e,t,s,b,O,m,f,h,x,p,v;return window.location.pathname.includes("/user/scheduler")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:n.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:j.default,alt:"icon"}),f=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"inactive",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/session-type")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:j.default,alt:"icon"}),f=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/motto-pass")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),s=Object(u.jsx)("img",{src:r.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:d.default,alt:"icon"}),f=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/payment")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),s=Object(u.jsx)("img",{src:r.default,alt:"icon"}),b=Object(u.jsx)("img",{src:o.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:d.default,alt:"icon"}),f=Object(u.jsx)("img",{src:d.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"active",children:"Make a Payment"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,h]}),O,Object(u.jsxs)("div",{className:"items",children:[t," ",x]}),m,Object(u.jsxs)("div",{className:"items",children:[s," ",p]}),f,Object(u.jsxs)("div",{className:"items",children:[b," ",v]})]})})})}},142:function(e,t,s){"use strict";s.r(t);var c=s(12),n=s(2),i=s.n(n),a=s(6),r=s(640),l=(s(506),s(633)),o=(s(632),s(471)),d=s(470),j=s(469),u=s(71),b=s(372),O=s(339),m=s(197),f=(s(235),s(100)),h=s(26),x=s(37),p=s(73),v=(s(50),s(17)),g=s(9),N=s(1),y=[{value:"New York City",label:"New York"},{value:"Miami",label:"Maimi"},{value:"Hamptons",label:"Hampton"},{value:"Palm Beach",label:"Plam Beach"}],S=[{value:"trainerLocation",label:"Trainer's Location"},{value:"clientLocation",label:"Your Location"}],_=Object(N.jsx)("img",{src:f.default,alt:"close"}),w=Object(x.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(h.b)({updateUserDetails:p.updateUserDetails},e)}))((function(e){var t=e.updateUserDetails,s=e.sessionData,f=Object(n.useState)([]),h=Object(c.a)(f,2),x=h[0],p=h[1],w=Object(n.useState)([]),A=Object(c.a)(w,2),I=A[0],k=A[1],C=Object(n.useState)(""),P=Object(c.a)(C,2),E=P[0],T=P[1],R=Object(n.useState)(!1),B=Object(c.a)(R,2),L=B[0],M=B[1],Y=Object(n.useRef)(null),G=Object(n.useState)(!1),U=Object(c.a)(G,2);U[0],U[1],Object(g.g)();i.a.useEffect((function(){p(null===s||void 0===s?void 0:s.location),k(null===s||void 0===s?void 0:s.trainingVenue),T(null===s||void 0===s?void 0:s.preferedTrainingMode),window.scrollTo(0,0)}),[]);var D=function(e,s){t({sessionData:{location:x,trainingVenue:I,preferedTrainingMode:E,price:e,sessionType:s}}),v.history.push({pathname:"/user/payment"})},$=""!==E&&(null===x||void 0===x?void 0:x.value)&&(null===I||void 0===I?void 0:I.value);return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"session_outter_container",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"seesion_inner_container",children:[Object(N.jsxs)("div",{className:"link_wrapper",children:[Object(N.jsx)("img",{src:O.default,alt:"icon"}),Object(N.jsxs)("div",{className:"inner_links",children:[Object(N.jsx)(a.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(N.jsx)("div",{})]})]}),Object(N.jsxs)("div",{className:"session_inner_wrapper",children:[Object(N.jsxs)("div",{className:"session_heading",children:[Object(N.jsx)("h2",{children:"Choose your Session Type"}),Object(N.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(N.jsx)("div",{className:"session_tabs",children:Object(N.jsx)("div",{className:"session_tabs_inner",children:Object(N.jsxs)(l.d,{defaultTab:"virtual",onChange:function(e){console.log(e)},children:[Object(N.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(N.jsxs)(l.b,{children:[Object(N.jsx)(l.a,{tabFor:"virtual",children:Object(N.jsx)("button",{onClick:function(){return T("virtual")},className:"".concat("virtual"===E?"active":""),children:"Virtual"})}),Object(N.jsx)(l.a,{tabFor:"inPerson",children:Object(N.jsx)("button",{onClick:function(){return T("inPerson")},className:"".concat("inPerson"===E?"active":""),children:"In Person"})})]}),Object(N.jsxs)("div",{className:"session_location_dd",children:[Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{value:x,onChange:p,options:y,className:"session_location_select"})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{value:I,onChange:k,options:S,placeholder:"Select Training Venue",className:"session_location_select"})})})]}),Object(N.jsx)("div",{className:"session_view_location",children:Object(N.jsx)(a.a,{to:"",children:"View Trainer\u2019s Location"})})]}),Object(N.jsx)(l.c,{tabId:"virtual",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),L?Object(N.jsx)(m.a,{open:L,onClose:function(){return M(!1)},center:!0,closeIcon:_,container:Y.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return M(!0)}})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return D(20,"1 ON 1 TRAINING")},disabled:!$,className:"".concat($?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$15",Object(N.jsxs)("span",{children:["/ 5 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return M(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return D(15,"SOCIAL SESSION")},disabled:!$,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 12 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return M(!0)}})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return D(20,"CREATE A CLASS")},disabled:!$,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]})]})})}),Object(N.jsx)(l.c,{tabId:"inPerson",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$125",Object(N.jsxs)("span",{children:["/ Session ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return D(120,"1 ON 1 TRAINING")},disabled:!$,className:"".concat($?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 4 People ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return D(20,"SOCIAL SESSION")},disabled:!$,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$30",Object(N.jsxs)("span",{children:["/ 15 People ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return D(30,"CREATE A CLASS")},disabled:!$,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]})]})})})]})})})]})]})})})})}));t.default=w},173:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return a}));s(2);var c=s(104),n=s(142),i=s(1);function a(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.default,{}),Object(i.jsx)(n.default,{})]})}},339:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Arrow Back.d3693c0f.svg"},372:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Q Mark.c9a955fb.svg"},381:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Arrow Active.29c0a0c4.svg"},382:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Arrow InActive.71319793.svg"},383:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Book Session Icon Active.57a202ef.svg"},384:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Book Session Icon.4fc668f8.svg"},385:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Motto Pass Icon Active.1e37dec5.svg"},386:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Motto Pass Icon.26e91783.svg"},387:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Payment Icon Active.d34a42c9.svg"},388:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Payment Icon.9d154cc9.svg"},389:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Schedule Slot Icon.40eb0810.svg"},392:function(e,t,s){},469:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/class.abfe0b19.svg"},470:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/social.034fbac8.svg"},471:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/training1on1.8661114c.svg"},506:function(e,t,s){},606:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(13);function n(e,t){if(null==e)return{};var s,n,i=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}},612:function(e,t,s){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,c=new Array(t);s<t;s++)c[s]=e[s];return c}s.d(t,"a",(function(){return c}))},622:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(612);function n(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Object(c.a)(e,t):void 0}}},634:function(e,t,s){"use strict";function c(e,t){for(var s=0;s<t.length;s++){var c=t[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,t,s){return t&&c(e.prototype,t),s&&c(e,s),e}s.d(t,"a",(function(){return n}))},636:function(e,t,s){"use strict";function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.d(t,"a",(function(){return c}))},641:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var c=s(612);var n=s(622);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=30.286c5b9f.chunk.js.map