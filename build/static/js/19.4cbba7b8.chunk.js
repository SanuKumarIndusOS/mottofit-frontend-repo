(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[19,234,269,287,356,357,358],{165:function(e,n,t){"use strict";t.r(n);var s=t(14),i=t(2),c=t.n(i),a=t(8),r=t(682),o=(t(579),t(685)),l=(t(683),t(561)),d=t(560),u=t(559),j=t(82),b=t(443),O=t(386),h=t(216),v=(t(267),t(112)),f=t(21),p=t(33),x=t(38),m=(t(61),t(13)),y=t(16),N=t(1),S=[{value:"New York City",label:"New York"},{value:"Miami",label:"Miami"},{value:"Hamptons",label:"Hampton"},{value:"Palm Beach",label:"Palm Beach"}],g=[{value:"trainerLocation",label:"Trainer's Location"},{value:"clientLocation",label:"Your Location"}],_=Object(N.jsx)("img",{src:v.default,alt:"close"}),C=Object(p.b)((function(e){return{sessionData:e.userReducer.sessionData,queryObject:e.trainerReducer.query,selectedTrainerData:e.userReducer.selectedTrainerData}}),(function(e){return Object(f.b)({updateUserDetails:x.updateUserDetails},e)}))((function(e){var n,t,f=e.updateUserDetails,p=e.sessionData,x=e.queryObject,C=e.selectedTrainerData,P=Object(i.useState)([]),A=Object(s.a)(P,2),w=A[0],I=A[1],T=Object(i.useState)([]),k=Object(s.a)(T,2),L=k[0],E=k[1],R=Object(i.useState)(""),D=Object(s.a)(R,2),U=D[0],B=D[1],M=Object(i.useState)(!1),Y=Object(s.a)(M,2),$=Y[0],G=Y[1],K=Object(i.useState)(!1),q=Object(s.a)(K,2),F=q[0],V=q[1],z=Object(i.useRef)(null),H=Object(i.useState)(!1),J=Object(s.a)(H,2);J[0],J[1],Object(y.g)();c.a.useEffect((function(){if(!localStorage.getItem("token")){return m.history.push("?".concat(encodeURIComponent("nextpath=/user/session-type"))),f({isModelOpen:!0})}var e=(null===C||void 0===C?void 0:C.trainerData)||C;if(!(null===e||void 0===e?void 0:e.id))return m.history.push("/trainer/find");E(null===p||void 0===p?void 0:p.trainingVenue),B(null===x||void 0===x?void 0:x.location);var n=S.filter((function(e){return e.value===(null===x||void 0===x?void 0:x.city)}))[0];(null===n||void 0===n?void 0:n.value)&&I(n);var t=e.servicableLocation,s=void 0===t?[]:t;(null===s||void 0===s?void 0:s.length)>0&&(S=s.map((function(e){return{label:e,value:e}}))),window.scrollTo(0,0)}),[]);var Q=function(e,n){f({sessionData:{location:w,trainingVenue:L,preferedTrainingMode:U,price:e,sessionType:n}}),m.history.push({pathname:"/user/payment"})},W=""!==U&&(null===w||void 0===w?void 0:w.value)&&(null===L||void 0===L?void 0:L.value),X=(null===C||void 0===C?void 0:C.trainerData)||C,Z=null===X||void 0===X||null===(n=X.preferedTrainingMode)||void 0===n?void 0:n.includes("virtual"),ee=null===X||void 0===X||null===(t=X.preferedTrainingMode)||void 0===t?void 0:t.includes("inPerson"),ne=(null===X||void 0===X?void 0:X.oneOnOnePricing)||{},te=(ne.virtualSession,ne.inPersonAtClientLocation,X.socialSessionPricing||{}),se=(te.virtualSessionfor2People,te.virtualSessionfor3People,te.virtualSessionfor4People,te.inPeronAtClientLocationfor2People,te.inPeronAtClientLocationfor3People,te.inPeronAtClientLocationfor4People,X.classSessionPricing||{});se.virtualSessionfor15People,se.inPersonAtclientLocationfor15People;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"session_outter_container",children:[Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"seesion_inner_container",children:[Object(N.jsxs)("div",{className:"link_wrapper",children:[Object(N.jsx)("img",{src:O.default,alt:"icon"}),Object(N.jsxs)("div",{className:"inner_links",children:[Object(N.jsx)(a.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(N.jsx)("div",{})]})]}),Object(N.jsxs)("div",{className:"session_inner_wrapper",children:[Object(N.jsxs)("div",{className:"session_heading",children:[Object(N.jsx)("h2",{children:"Choose your Session Type"}),Object(N.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(N.jsx)("div",{className:"session_tabs",children:Object(N.jsx)("div",{className:"session_tabs_inner",children:Object(N.jsxs)(o.d,{defaultTab:"".concat("inPerson"===U?"inPerson":"virtual"),onChange:function(e){console.log(e)},children:[Object(N.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(N.jsxs)(o.b,{children:[Z&&Object(N.jsx)(o.a,{tabFor:"virtual",children:Object(N.jsx)("button",{onClick:function(){return B("virtual")},className:"".concat("virtual"===U?"active":""),children:"Virtual"})}),ee&&Object(N.jsx)(o.a,{tabFor:"inPerson",children:Object(N.jsx)("button",{onClick:function(){return B("inPerson")},className:"".concat("inPerson"===U?"active":""),children:"In Person"})})]}),ee&&Object(N.jsxs)("div",{className:"session_location_dd",children:[Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{value:w,onChange:I,options:S,className:"session_location_select"})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(r.a,{value:L,onChange:E,options:g,placeholder:"Select Training Venue",className:"session_location_select"})})})]}),(null===L||void 0===L?void 0:L.label)&&Object(N.jsx)("div",{className:"session_view_location",children:Object(N.jsx)(a.a,{onClick:function(){return V(!F)},children:" View ".concat("Trainer's Location"===(null===L||void 0===L?void 0:L.label)?"Trainer's Location":"Neighbourhood Location")})})]}),Object(N.jsx)(o.c,{tabId:"virtual",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),$?Object(N.jsx)(h.a,{open:$,onClose:function(){return G(!1)},center:!0,closeIcon:_,container:z.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ Session"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return G(!0)}})]})]}),Object(N.jsx)("img",{src:l.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Q(20,"1 ON 1 TRAINING")},disabled:!W,className:"".concat(W?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(j.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$15",Object(N.jsxs)("span",{children:["/ 5 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return G(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Q(15,"SOCIAL SESSION")},disabled:!W,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(j.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 12 People"," ",Object(N.jsx)("img",{src:b.default,alt:"icon",onClick:function(){return G(!0)}})]})]}),Object(N.jsx)("img",{src:u.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Q(20,"CREATE A CLASS")},disabled:!W,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(j.default,{})]})]})]})})}),Object(N.jsx)(o.c,{tabId:"inPerson",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$125",Object(N.jsxs)("span",{children:["/ Session ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:l.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Q(120,"1 ON 1 TRAINING")},disabled:!W,className:"".concat(W?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(j.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$20",Object(N.jsxs)("span",{children:["/ 4 People ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Q(20,"SOCIAL SESSION")},disabled:!W,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(j.default,{})]})]}),Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{children:["$30",Object(N.jsxs)("span",{children:["/ 15 People ",Object(N.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(N.jsx)("img",{src:u.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Q(30,"CREATE A CLASS")},disabled:!W,className:"btn-disabled",children:["BOOK YOUR SESSION ",Object(N.jsx)(j.default,{})]})]})]})})})]})})})]})]})}),F?Object(N.jsx)(h.a,{open:F,onClose:function(){V(!1)},center:!0,closeIcon:Object(N.jsx)("img",{src:v.default,alt:"close"}),styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{className:"model_styles modal-heading",children:[Object(N.jsx)("h2",{children:"".concat("Trainer's Location"===(null===L||void 0===L?void 0:L.label)?"Trainer's Locations":"Neighbourhood Locations")}),"Trainer's Location"===(null===L||void 0===L?void 0:L.label)?Object(N.jsx)("p",{children:(null===X||void 0===X?void 0:X.trainingFacilityLocation)||"No trainer locations"}):Object(N.jsx)("p",{children:(null===X||void 0===X?void 0:X.serviceableNeighbourHood)||"No neighbourhood locations"})]})}):null]})})}));n.default=C},386:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/Arrow Back.d3693c0f.svg"},443:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/Q Mark.c9a955fb.svg"},559:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/class.abfe0b19.svg"},560:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/social.034fbac8.svg"},561:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/training1on1.8661114c.svg"},579:function(e,n,t){},654:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var s=t(10);function i(e,n){if(null==e)return{};var t,i,c=Object(s.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}},667:function(e,n,t){"use strict";function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,s=new Array(n);t<n;t++)s[t]=e[t];return s}t.d(n,"a",(function(){return s}))},673:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var s=t(667);function i(e,n){if(e){if("string"===typeof e)return Object(s.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(s.a)(e,n):void 0}}},687:function(e,n,t){"use strict";function s(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),e}t.d(n,"a",(function(){return i}))},690:function(e,n,t){"use strict";function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.d(n,"a",(function(){return s}))},695:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var s=t(667);var i=t(673);function c(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=19.4cbba7b8.chunk.js.map