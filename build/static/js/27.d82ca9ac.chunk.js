(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[27,152,198,202,333,357,360,361,427],{160:function(e,i,s){"use strict";s.r(i);var n=s(4),t=s(214),a=s(14),c=s(44),o=s(2),l=(s(570),s(122)),r=s(53),d=s(428),u=s(389),j=s(473),v=s(472),b=s(471),p=s(82),h=(s(477),s(50)),m=s(8),f=s(13),O=s(38),x=s(33),N=s(21),T=(s(263),s(83)),g=s(694),P=s.n(g),_=s(15),S=s(84),F=s(40),D=(s(201),s(1)),y=[{title:"Social Session",session:"1 Session / 2 People",session1:"1 Session / 3 People",session2:"1 Session / 4 People",price:"$65.00 / Person",price1:"$65.00 / Person",price2:"$65.00 / Person",isPrice:!0},{title:"Class Session",session:"Class (5-15 People)",price:"$15.00 / Person",isPrice:!0},{title:"Cancellation Session",session:"Cancellation Fee",price:"Free upto 24 hours",isPrice:!1}],C=function(e){var i=e.data,s=Object(o.useState)(0),n=Object(a.a)(s,2),t=n[0],c=n[1];return Object(D.jsx)(D.Fragment,{children:i.map((function(e,s){return Object(D.jsxs)("div",{className:"TF_data_item ".concat(s===i.length-1?"no-border":""),children:[Object(D.jsx)("div",{className:"TF_data_title",onClick:function(){return function(e){if(t===e)return c(null);c(e)}(s)},children:Object(D.jsx)("h3",{children:e.title})}),Object(D.jsxs)("div",{className:"session-block",children:[(null===e||void 0===e?void 0:e.price)&&Object(D.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(D.jsx)("p",{children:e.session}),Object(D.jsx)("p",{className:"ml-auto",children:e.isPrice?"$".concat(null===e||void 0===e?void 0:e.price," / Person"):null===e||void 0===e?void 0:e.price})]}),e.price1&&Object(D.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(D.jsx)("p",{children:e.session1}),Object(D.jsx)("p",{className:"ml-auto",children:"$".concat(null===e||void 0===e?void 0:e.price1," / Person")})]}),e.price2&&Object(D.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(D.jsx)("p",{children:e.session2}),Object(D.jsx)("p",{className:"ml-auto",children:"$".concat(null===e||void 0===e?void 0:e.price2," / Person")})]})]})]},s)}))})},I=Object(x.b)((function(e){var i;return{bookingData:e.userReducer.bookingData,selectedTimes:e.userReducer.selectedTimes,defaulCardDetails:e.userReducer.defaulCardDetails,queryQbject:e.trainerReducer.query,sessionData:e.userReducer.sessionData,trainerData:null===(i=e.userReducer.selectedTrainerData)||void 0===i?void 0:i.trainerData,selectedTrainerData:e.userReducer.selectedTrainerData,submittedData:e.userReducer.submittedData}}),(function(e){return Object(N.b)({userSession:O.userSession,updateUserDetails:O.updateUserDetails},e)}))((function(e){var i,s,O,x,N=e.userSession,g=e.sessionData,I=(e.scheduleSession,e.trainerData),A=e.bookingData,L=(e.defaulCardDetails,e.queryQbject,e.selectedTimes),E=e.selectedTrainerData,k=e.submittedData,w=e.updateUserDetails,R=(Object(c.a)(e,["userSession","sessionData","scheduleSession","trainerData","bookingData","defaulCardDetails","queryQbject","selectedTimes","selectedTrainerData","submittedData","updateUserDetails"]),Object(o.useState)([{friendName:"",friendEmail:"",friendPhone:""}])),U=Object(a.a)(R,2),M=U[0],Y=U[1],q=Object(o.useState)(y),J=Object(a.a)(q,2),$=J[0],G=J[1],Q=Object(o.useState)([]),K=Object(a.a)(Q,2),B=(K[0],K[1],Object(o.useState)(!1)),V=Object(a.a)(B,2),W=V[0],Z=V[1],z=(localStorage.getItem("sessionTrainingType"),function(e,i){var s=Object(t.a)(M),n=i.target,a=n.name,c=n.value;s[e][a]=c,Y(s)});Object(o.useEffect)((function(){var e=_.userApi.getSessionData,i=null===k||void 0===k?void 0:k.id;e.id=i,Object(S.api)(Object(n.a)({},e)).then((function(e){var i=e.data,s=i.friends,t=void 0===s?[]:s,a="";"social"===i.trainingType?a="SOCIAL SESSION":"class"===i.trainingType?a="CREATE A CLASS":"1on1"===i.trainingType&&(a="1 ON 1 TRAINING");var c={location:{label:(null===i||void 0===i?void 0:i.city)||"",value:(null===i||void 0===i?void 0:i.city)||""},trainingVenue:{label:"clientLocation"===i.venue?"Your Location":"Trainer's Location",value:(null===i||void 0===i?void 0:i.venue)||""},preferedTrainingMode:(null===i||void 0===i?void 0:i.sessionType)||"",price:i.price||"",sessionType:a||"",trainingType:{label:(null===i||void 0===i?void 0:i.activity)||"",value:(null===i||void 0===i?void 0:i.activity)||""}},o={start_slot:i.sessionStartTime,end_slot:i.sessionEndTime,date:i.sessionDate},l=Object(n.a)({},i.trainerDetail),r=t.map((function(e){var i=e.userDetail;return{friendName:(null===i||void 0===i?void 0:i.firstName)||"",friendEmail:(null===i||void 0===i?void 0:i.email)||"",friendPhone:(null===i||void 0===i?void 0:i.phoneNo)||""}}));r.length>0&&Y(r);var d={bookingData:o,sessionData:c,selectedTrainerData:l,submittedData:Object(n.a)({},i)};w(d)}))}),[]);var X=function(e){e.preventDefault();var i=null===k||void 0===k?void 0:k.id,s=_.userApi.editSessionData,t={sessionId:i,friends:M.filter((function(e){var i=e.friendEmail,s=e.friendName,n=e.friendPhone;return i&&s&&n})).map((function(e){var i=e.friendEmail,s=e.friendName,n=e.friendPhone;return{email:i,firstName:s,phoneNo:n.includes("+")?n:"+".concat(n)}})),paidByUser:W};s.body=t,Object(S.api)(Object(n.a)({},s)).then((function(e){Object(F.Toast)({type:"success",message:e.message||"Success"}),f.history.push("/users/dashboard/session")})).catch((function(e){Object(F.Toast)({type:"error",message:e.message||"Error"})}))};Object(o.useEffect)((function(){var e,i,s,a,c,o,l,r,d,u,j,v,b,p,h,m=null===g||void 0===g||null===(e=g.trainingVenue)||void 0===e?void 0:e.value,f=((null===A||void 0===A||null===(i=A.activity)||void 0===i?void 0:i.label)||(null===g||void 0===g||null===(s=g.trainingType)||void 0===s||s.label),"virtual"===(null===g||void 0===g?void 0:g.preferedTrainingMode)),O=I||E,x={},N=null===O||void 0===O||null===(a=O.socialSessionPricing)||void 0===a?void 0:a.virtualSessionfor2People,T=null===O||void 0===O||null===(c=O.socialSessionPricing)||void 0===c?void 0:c.virtualSessionfor3People,P=null===O||void 0===O||null===(o=O.socialSessionPricing)||void 0===o?void 0:o.virtualSessionfor4People,_="trainerLocation"===m?null===O||void 0===O||null===(l=O.socialSessionPricing)||void 0===l?void 0:l.inPeronAtTrainerLocationfor2People:null===O||void 0===O||null===(r=O.socialSessionPricing)||void 0===r?void 0:r.inPeronAtClientLocationfor2People,S="trainerLocation"===m?null===O||void 0===O||null===(d=O.socialSessionPricing)||void 0===d?void 0:d.inPeronAtTrainerLocationfor3People:null===O||void 0===O||null===(u=O.socialSessionPricing)||void 0===u?void 0:u.inPeronAtClientLocationfor2People,F="trainerLocation"===m?null===O||void 0===O||null===(j=O.socialSessionPricing)||void 0===j?void 0:j.inPeronAtTrainerLocationfor4People:null===O||void 0===O||null===(v=O.socialSessionPricing)||void 0===v?void 0:v.inPeronAtClientLocationfor4People;x.social={twoPeople:f?N:_,threePeople:f?T:S,foureople:f?P:F};var D=null===O||void 0===O||null===(b=O.classSessionPricing)||void 0===b?void 0:b.virtualSessionfor15People,y="trainerLocation"===m?null===O||void 0===O||null===(p=O.classSessionPricing)||void 0===p?void 0:p.inPersonAttrainerLocationfor15People:null===O||void 0===O||null===(h=O.classSessionPricing)||void 0===h?void 0:h.inPersonAtclientLocationfor15People;x.class={fifteenPeople:f?D:y};var C=Object(t.a)($);C[0]=Object(n.a)(Object(n.a)({},C[0]),{},{price:isNaN(x.social.twoPeople)?null:parseFloat(x.social.twoPeople),price1:isNaN(x.social.threePeople)?null:parseFloat(x.social.threePeople),price2:isNaN(x.social.foureople)?null:parseFloat(x.social.foureople)}),C[1]=Object(n.a)(Object(n.a)({},C[1]),{},{price:isNaN(x.class.fifteenPeople)?null:parseFloat(x.class.fifteenPeople)}),G(Object(t.a)(C))}),[]);var H=I||E,ee=null===H||void 0===H||null===(i=H.areaOfExpertise)||void 0===i?void 0:i.toString(),ie=(null===A||void 0===A?void 0:A.start_slot)?Object(T.getFormatDate)(null===A||void 0===A?void 0:A.start_slot,"MMMM Do, YYYY hh:mm A.",!0):"",se=(null===g||void 0===g?void 0:g.sessionType)||"";return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"TF_outter_container",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"TF_inner_container",children:[Object(D.jsxs)("div",{className:"TF_headers",children:[Object(D.jsx)("h2",{children:"Your session is booked! Start adding your friends"}),Object(D.jsx)("p",{children:"Invite as many friends as you\u2019d like, the friends that accept will automatically be added in correspondence to session size! Once they accept your session, your rate will automatically be adjusted."})]}),Object(D.jsxs)("div",{className:"TF_wrapper",children:[Object(D.jsxs)("div",{className:"TF_inner_wrapper",children:[Object(D.jsx)("div",{className:"TF_wrapper_left",children:Object(D.jsxs)("div",{className:"TF_wrapper_content",children:[Object(D.jsx)("h2",{children:"Add Friends to Your Session"}),Object(D.jsx)("div",{className:"TF_form",children:Object(D.jsxs)("form",{onSubmit:X,children:[Object(D.jsx)("h3",{children:"Enter your friend's details"}),Object(D.jsxs)("div",{className:"TF_inner_form",children:[M.map((function(e,i){return Object(D.jsxs)("div",{className:"TF_wrapper_input",children:[Object(D.jsxs)("h4",{children:["Friend #",i+1]}),Object(D.jsxs)("div",{className:"inner_input",children:[Object(D.jsx)("input",{type:"text",placeholder:"Name",name:"friendName",value:e.friendName,onChange:function(e){return z(i,e)}}),Object(D.jsx)("img",{src:r.default,alt:"icon"})]}),Object(D.jsx)("div",{className:"TF_input",children:Object(D.jsxs)("div",{className:"inner_input",children:[Object(D.jsx)("input",{type:"text",placeholder:"Email",name:"friendEmail",value:e.friendEmail,onChange:function(e){return z(i,e)}}),Object(D.jsx)("img",{src:l.default,alt:"icon"}),Object(D.jsx)(P.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone",inputProps:{name:"phone"},specialLabel:"",value:e.friendPhone,name:"phoneNo",onChange:function(e){z(i,{target:{name:"friendPhone",value:e}})}}),Object(D.jsx)("img",{src:d.default,alt:"icon"})]})})]},i)})),Object(D.jsxs)("div",{className:"TF_remember_left",children:[Object(D.jsx)("input",{className:"TF_check",type:"checkbox",name:"iWillPay",checked:W,onChange:function(){return Z(!W)}}),Object(D.jsx)("label",{children:"I will pay for all the people that I will be inviting to my social session or class"})]})]}),Object(D.jsxs)("div",{className:"TF_button",children:[Object(D.jsxs)("button",{onClick:X,children:["Invite Friends ",Object(D.jsx)(p.default,{})," "]}),se.includes("SOCIAL")&&M.length<3||se.includes("CLASS")&&M.length<14?Object(D.jsx)("h5",{onClick:function(){Y([].concat(Object(t.a)(M),[{friendName:"",friendEmail:"",friendPhone:""}]))},children:"+ Add More Friends"}):null]})]})})]})}),Object(D.jsx)("div",{className:"TF_wrapper_right",children:Object(D.jsxs)("div",{className:"TF_right",children:[Object(D.jsxs)("div",{className:"TF_profile",children:[Object(D.jsx)("img",{src:(null===H||void 0===H?void 0:H.profilePicture)||u.default,alt:"Trainer ".concat(null===H||void 0===H?void 0:H.firstName)}),Object(D.jsxs)("div",{className:"TF_name",children:[Object(D.jsx)("h2",{children:"".concat((null===H||void 0===H?void 0:H.firstName)||""," ").concat((null===H||void 0===H?void 0:H.lastName)||"")}),Object(D.jsx)("p",{children:ee})]})]}),Object(D.jsxs)("div",{className:"TF_wrapper",children:[Object(D.jsxs)("div",{className:"TF_details",children:[Object(D.jsx)("h3",{children:"I WANT TO TRAIN IN"}),Object(D.jsxs)("div",{className:"TF_data_inner",children:[Object(D.jsx)("img",{src:j.default,alt:"icon"}),Object(D.jsx)("h4",{children:(null===A||void 0===A||null===(s=A.activity)||void 0===s?void 0:s.label)||(null===g||void 0===g||null===(O=g.trainingType)||void 0===O?void 0:O.label)})]})]}),Object(D.jsxs)("div",{className:"TF_details",children:[Object(D.jsx)("h3",{children:"I want to train on"}),Object(D.jsxs)("div",{className:"TF_data_inner",children:[Object(D.jsx)("img",{src:v.default,alt:"icon"}),Object(D.jsx)("h4",{children:ie||Object(T.getFormatDate)(L[0],"YYYY-MM-DD")})]})]}),Object(D.jsxs)("div",{className:"TF_details",children:[Object(D.jsx)("h3",{children:"I WANT TO TRAIN AT"}),Object(D.jsxs)("div",{className:"TF_data_inner",children:[Object(D.jsx)("img",{src:b.default,alt:"icon"}),Object(D.jsx)("h4",{children:"".concat(null===g||void 0===g||null===(x=g.trainingVenue)||void 0===x?void 0:x.label)})]})]}),Object(D.jsx)("hr",{}),Object(D.jsx)("div",{className:"TF_service_details",children:Object(D.jsx)("div",{className:"TF_service_wrapper",children:Object(D.jsx)("div",{className:"TF_service_left",children:Object(D.jsxs)("div",{className:"TF_service_header",children:[Object(D.jsxs)("div",{className:"TF_inner_header",children:[Object(D.jsx)("h3",{children:"Service Details"}),Object(D.jsx)("h3",{children:"Price / Hour"})]}),Object(D.jsx)(C,{data:$})]})})})})]})]})})]}),Object(D.jsxs)("div",{className:"TF_skip",children:[Object(D.jsx)("h2",{className:"w-100 text-right",children:"Not right now? "}),Object(D.jsxs)(m.a,{onClick:function(){N().then((function(){f.history.push({pathname:"/users/dashboard/session"})})).catch((function(e){return console.log(e)}))},children:["CONTINUE TO ACCOUNT ",Object(D.jsx)(h.default,{})]})]})]})]})})})})}));i.default=I},263:function(e,i,s){"use strict";s.r(i),s.d(i,"COMMON_URL",(function(){return n})),s.d(i,"MESSAGING_URL",(function(){return t})),s.d(i,"SESSION_URL",(function(){return a})),s.d(i,"NOTIFICATION_URL",(function(){return c})),s.d(i,"PAYMENT_URL",(function(){return o})),s.d(i,"STRIPE_URL",(function(){return l}));var n="https://apis.bookmotto.com/user",t="https://apis.bookmotto.com/messaging",a="https://apis.bookmotto.com/session",c="",o="https://apis.bookmotto.com/payments",l="pk_live_51IJnd4BqgEC4bFYp4gC7EoInjpEKKjJXZMZGZurak1aK2ft1XN72QU355hRhLry3QmEucSKialeSBOGevqDJqfIJ00sU4zSO7O"},389:function(e,i,s){"use strict";s.r(i),i.default=s.p+"static/media/Jenny.c50273b9.png"},428:function(e,i,s){"use strict";s.r(i),i.default=s.p+"static/media/Phone Icon.f207d1b4.svg"},471:function(e,i,s){"use strict";s.r(i),i.default=s.p+"static/media/Location Icon.c8540d80.svg"},472:function(e,i,s){"use strict";s.r(i),i.default=s.p+"static/media/Shedule Icon.c434a0ee.svg"},473:function(e,i,s){"use strict";s.r(i),i.default=s.p+"static/media/Strength Icon.533b1e81.svg"},477:function(e,i,s){},570:function(e,i,s){}}]);
//# sourceMappingURL=27.d82ca9ac.chunk.js.map