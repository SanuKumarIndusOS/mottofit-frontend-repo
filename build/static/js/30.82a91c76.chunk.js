(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[30,39,45,234,235,269,287,356,357,358,359,360,361,362,363,364,365,366,367],{104:function(e,t,s){"use strict";s.r(t);s(2),s(393);var c=s(390),n=s(385),i=s(384),a=s(387),r=s(386),l=s(389),o=s(388),d=s(382),j=s(383),u=s(1);t.default=function(){var e,t,s,b,O,m,f,h,x,p,v;return window.location.pathname.includes("/user/scheduler")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:n.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:j.default,alt:"icon"}),f=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"inactive",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/session-type")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),s=Object(u.jsx)("img",{src:a.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:j.default,alt:"icon"}),f=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"inactive",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/motto-pass")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),s=Object(u.jsx)("img",{src:r.default,alt:"icon"}),b=Object(u.jsx)("img",{src:l.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:d.default,alt:"icon"}),f=Object(u.jsx)("img",{src:j.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"inactive",children:"Make a Payment"})),window.location.pathname.includes("/user/payment")&&(e=Object(u.jsx)("img",{src:c.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),s=Object(u.jsx)("img",{src:r.default,alt:"icon"}),b=Object(u.jsx)("img",{src:o.default,alt:"icon"}),O=Object(u.jsx)("img",{src:d.default,alt:"icon"}),m=Object(u.jsx)("img",{src:d.default,alt:"icon"}),f=Object(u.jsx)("img",{src:d.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"Schedule your slot"}),x=Object(u.jsx)("p",{className:"active",children:"Book Your Slot"}),p=Object(u.jsx)("p",{className:"active",children:"Get a motto pass"}),v=Object(u.jsx)("p",{className:"active",children:"Make a Payment"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,h]}),O,Object(u.jsxs)("div",{className:"items",children:[t," ",x]}),m,Object(u.jsxs)("div",{className:"items",children:[s," ",p]}),f,Object(u.jsxs)("div",{className:"items",children:[b," ",v]})]})})})}},142:function(e,t,s){"use strict";s.r(t);var c=s(12),n=s(2),i=s.n(n),a=s(6),r=s(641),l=(s(507),s(634)),o=(s(633),s(472)),d=s(471),j=s(470),u=s(71),b=s(373),O=s(340),m=s(197),f=(s(235),s(100)),h=s(26),x=s(37),p=s(73),v=(s(50),s(17)),g=s(9),N=s(1),y=[{value:"New York City",label:"New York"},{value:"Miami",label:"Maimi"},{value:"Hamptons",label:"Hampton"},{value:"Palm Beach",label:"Plam Beach"}],S=[{value:"trainerLocation",label:"Trainer's Location"},{value:"clientLocation",label:"Your Location"}],_=Object(N.jsx)("img",{src:f.default,alt:"close"}),w=Object(x.b)((function(e){return{sessionData:e.userReducer.sessionData,queryObject:e.trainerReducer.query}}),(function(e){return Object(h.b)({updateUserDetails:p.updateUserDetails},e)}))((function(e){var t=e.updateUserDetails,s=e.sessionData,f=e.queryObject,h=Object(n.useState)([]),x=Object(c.a)(h,2),p=x[0],w=x[1],A=Object(n.useState)([]),I=Object(c.a)(A,2),k=I[0],C=I[1],P=Object(n.useState)(""),E=Object(c.a)(P,2),T=E[0],R=E[1],B=Object(n.useState)(!1),L=Object(c.a)(B,2),M=L[0],Y=L[1],G=Object(n.useRef)(null),U=Object(n.useState)(!1),D=Object(c.a)(U,2);D[0],D[1],Object(g.g)();i.a.useEffect((function(){C(null===s||void 0===s?void 0:s.trainingVenue),R(null===s||void 0===s?void 0:s.preferedTrainingMode);var e=y.filter((function(e){return e.value===(null===f||void 0===f?void 0:f.city)}))[0];(null===e||void 0===e?void 0:e.value)&&w(e),window.scrollTo(0,0)}),[]);var $=function(e,s){t({sessionData:{location:p,trainingVenue:k,preferedTrainingMode:T,price:e,sessionType:s}}),v.history.push({pathname:"/user/payment"})},K=""!==T&&(null===p||void 0===p?void 0:p.value)&&(null===k||void 0===k?void 0:k.value);return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"session_outter_container",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"seesion_inner_container",children:[Object(N.jsxs)("div",{className:"link_wrapper",children:[Object(N.jsx)("img",{src:O.default,alt:"icon"}),Object(N.jsxs)("div",{className:"inner_links",children:[Object(N.jsx)(a.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(N.jsx)("div",{})]})]}),Object(N.jsxs)("div",{className:"session_inner_wrapper",children:[Object(N.jsxs)("div",{className:"session_heading",children:[Object(N.jsx)("h2",{children:"Choose your Session Type"}),Object(N.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(N.jsx)("div",{className:"session_tabs",children:Object(N.jsx)("div",{className:"session_tabs_inner",children:Object(N.jsxs)(l.d,{defaultTab:"virtual",onChange:function(e){console.log(e)},children:[Object(N.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(N.jsxs)(l.b,{children:[Object(N.jsx)(l.a,{tabFor:"virtual",children:Object(N.jsx)("button",{onClick:function(){return R("virtual")},className:"".concat("virtual"===T?"active":""),children:"Virtual"})}),Object(N.jsx)(l.a,{tabFor:"inPerson",children:Object(N.jsx)("button",{onClick:function(){return R("inPerson")},className:"".concat("inPerson"===T?"active":""),children:"In Person"})})]}),Object(N.jsxs)("div",{className:"session_location_dd",children:[Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{value:p,onChange:w,options:y,className:"session_location_select"})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{value:k,onChange:C,options:S,placeholder:"Select Training Venue",className:"session_location_select"})})})]}),Object(N.jsx)("div",{className:"session_view_location",children:Object(N.jsx)(a.a,{to:"",children:"View Trainer\u2019s Location"})})]}),Object(N.jsx)(l.c,{tabId:"virtual",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),M?Object(N.jsx)(m.a,{open:M,onClose:function(){return Y(!1)},center:!0,closeIcon:_,container:G.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return Y(!0)}})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return $(20,"1 ON 1 TRAINING")},disabled:!K,className:"".concat(K?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$15",Object(N.jsxs)("span",{children:["/ 5 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return Y(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return $(15,"SOCIAL SESSION")},disabled:!K,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 12 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return Y(!0)}})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return $(20,"CREATE A CLASS")},disabled:!K,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]})]})})}),Object(N.jsx)(l.c,{tabId:"inPerson",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$125",Object(N.jsxs)("span",{children:["/ Session ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:o.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return $(120,"1 ON 1 TRAINING")},disabled:!K,className:"".concat(K?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 4 People ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return $(20,"SOCIAL SESSION")},disabled:!K,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$30",Object(N.jsxs)("span",{children:["/ 15 People ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:j.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return $(30,"CREATE A CLASS")},disabled:!K,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(u.default,{})]})]})]})})})]})})})]})]})})})})}));t.default=w},173:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return a}));s(2);var c=s(104),n=s(142),i=s(1);function a(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.default,{}),Object(i.jsx)(n.default,{})]})}},340:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Arrow Back.d3693c0f.svg"},373:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Q Mark.c9a955fb.svg"},382:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Arrow Active.29c0a0c4.svg"},383:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Arrow InActive.71319793.svg"},384:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Book Session Icon Active.57a202ef.svg"},385:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Book Session Icon.4fc668f8.svg"},386:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Motto Pass Icon Active.1e37dec5.svg"},387:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Motto Pass Icon.26e91783.svg"},388:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Payment Icon Active.d34a42c9.svg"},389:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Payment Icon.9d154cc9.svg"},390:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Schedule Slot Icon.40eb0810.svg"},393:function(e,t,s){},470:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/class.abfe0b19.svg"},471:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/social.034fbac8.svg"},472:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/training1on1.8661114c.svg"},507:function(e,t,s){},607:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(13);function n(e,t){if(null==e)return{};var s,n,i=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}},613:function(e,t,s){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,c=new Array(t);s<t;s++)c[s]=e[s];return c}s.d(t,"a",(function(){return c}))},623:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(613);function n(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Object(c.a)(e,t):void 0}}},635:function(e,t,s){"use strict";function c(e,t){for(var s=0;s<t.length;s++){var c=t[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,t,s){return t&&c(e.prototype,t),s&&c(e,s),e}s.d(t,"a",(function(){return n}))},637:function(e,t,s){"use strict";function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.d(t,"a",(function(){return c}))},642:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var c=s(613);var n=s(623);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=30.82a91c76.chunk.js.map