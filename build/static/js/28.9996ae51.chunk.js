(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[28,155,200,204,336,360,363,364,430],{163:function(e,i,n){"use strict";n.r(i);var s=n(4),t=n(83),a=n(15),l=n(44),r=n(2),c=(n(576),n(126)),o=n(53),d=n(435),u=n(396),j=n(480),v=n(479),m=n(478),b=n(82),f=(n(484),n(50)),h=n(8),p=n(14),O=n(38),x=n(33),N=n(21),g=(n(268),n(84)),T=n(701),P=n.n(T),_=n(16),S=n(85),D=(n(40),n(207)),F=n.n(D),y=n(1),E=[{title:"Social Session",session:"1 Session / 2 People",session1:"1 Session / 3 People",session2:"1 Session / 4 People",price:"$65.00 / Person",price1:"$65.00 / Person",price2:"$65.00 / Person",isPrice:!0},{title:"Class Session",session:"Class (5-15 People)",price:"$15.00 / Person",isPrice:!0},{title:"Cancellation Session",session:"Cancellation Fee",price:"Free upto 24 hours",isPrice:!1}],C=function(e){var i=e.data,n=Object(r.useState)(0),s=Object(a.a)(n,2),t=s[0],l=s[1];return Object(y.jsx)(y.Fragment,{children:i.map((function(e,n){return Object(y.jsxs)("div",{className:"TF_data_item ".concat(n===i.length-1?"no-border":""),children:[Object(y.jsx)("div",{className:"TF_data_title",onClick:function(){return function(e){if(t===e)return l(null);l(e)}(n)},children:Object(y.jsx)("h3",{children:e.title})}),Object(y.jsxs)("div",{className:"session-block",children:[(null===e||void 0===e?void 0:e.price)?Object(y.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(y.jsx)("p",{children:e.session}),Object(y.jsx)("p",{className:"ml-auto",children:e.isPrice?"$".concat(null===e||void 0===e?void 0:e.price," / Person"):null===e||void 0===e?void 0:e.price})]}):"",e.price1?Object(y.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(y.jsx)("p",{children:e.session1}),Object(y.jsx)("p",{className:"ml-auto",children:"$".concat(null===e||void 0===e?void 0:e.price1," / Person")})]}):"",e.price2?Object(y.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(y.jsx)("p",{children:e.session2}),Object(y.jsx)("p",{className:"ml-auto",children:"$".concat(null===e||void 0===e?void 0:e.price2," / Person")})]}):""]})]},n)}))})},I=Object(x.b)((function(e){var i;return{bookingData:e.userReducer.bookingData,selectedTimes:e.userReducer.selectedTimes,defaulCardDetails:e.userReducer.defaulCardDetails,queryQbject:e.trainerReducer.query,sessionData:e.userReducer.sessionData,trainerData:null===(i=e.userReducer.selectedTrainerData)||void 0===i?void 0:i.trainerData,selectedTrainerData:e.userReducer.selectedTrainerData,submittedData:e.userReducer.submittedData}}),(function(e){return Object(N.b)({userSession:O.userSession,updateUserDetails:O.updateUserDetails},e)}))((function(e){var i,n,O,x,N=e.userSession,T=e.sessionData,D=(e.scheduleSession,e.trainerData),I=e.bookingData,A=(e.defaulCardDetails,e.queryQbject,e.selectedTimes),L=e.selectedTrainerData,w=e.submittedData,k=e.updateUserDetails,R=(Object(l.a)(e,["userSession","sessionData","scheduleSession","trainerData","bookingData","defaulCardDetails","queryQbject","selectedTimes","selectedTrainerData","submittedData","updateUserDetails"]),Object(r.useState)([{friendName:"",friendEmail:"",friendPhone:""}])),M=Object(a.a)(R,2),U=M[0],Y=M[1],q=Object(r.useState)(E),$=Object(a.a)(q,2),J=$[0],G=$[1],Q=Object(r.useState)([]),K=Object(a.a)(Q,2),Z=K[0],z=K[1],V=Object(r.useState)(!1),W=Object(a.a)(V,2),B=W[0],X=W[1],H=(localStorage.getItem("sessionTrainingType"),function(e,i){var n=Object(t.a)(U),a=i.target,l=a.name,r=a.value;(n[e][l]=r,Z.friendsData&&Z.friendsData[e])&&(Object(s.a)({},Z).friendsData[e][l]=void 0);Y(n)});Object(r.useEffect)((function(){var e=_.userApi.getSessionData,i=null===w||void 0===w?void 0:w.id;e.id=i,Object(S.api)(Object(s.a)({},e)).then((function(e){var i=e.data,n=i.friends,t=void 0===n?[]:n,a="";"social"===i.trainingType?a="SOCIAL SESSION":"class"===i.trainingType?a="CREATE A CLASS":"1on1"===i.trainingType&&(a="1 ON 1 TRAINING");var l={location:{label:(null===i||void 0===i?void 0:i.city)||"",value:(null===i||void 0===i?void 0:i.city)||""},trainingVenue:{label:"clientLocation"===i.venue?"Your Location":"Trainer's Location",value:(null===i||void 0===i?void 0:i.venue)||""},preferedTrainingMode:(null===i||void 0===i?void 0:i.sessionType)||"",price:i.price||"",sessionType:a||"",trainingType:{label:(null===i||void 0===i?void 0:i.activity)||"",value:(null===i||void 0===i?void 0:i.activity)||""}},r={start_slot:i.sessionStartTime,end_slot:i.sessionEndTime,date:i.sessionDate},c=Object(s.a)({},i.trainerDetail),o=t.map((function(e){var i=e.userDetail;return{friendName:(null===i||void 0===i?void 0:i.firstName)||"",friendEmail:(null===i||void 0===i?void 0:i.email)||"",friendPhone:(null===i||void 0===i?void 0:i.phoneNo)||""}}));o.length>0&&Y(o);var d={bookingData:r,sessionData:l,selectedTrainerData:c,submittedData:Object(s.a)({},i)};k(d)}))}),[]);var ee=function(e){e.preventDefault();null===w||void 0===w||w.id,_.userApi.editSessionData,U.filter((function(e){var i=e.friendEmail,n=e.friendName,s=e.friendPhone;return i&&n&&s})).map((function(e){var i=e.friendEmail,n=e.friendName,s=e.friendPhone;return{email:i,firstName:n,phoneNo:s.includes("+")?s:"+".concat(s)}}));var i={friendsData:Object(t.a)(U)};ie(i)},ie=function(e){var i=F()(e,(F.a.validators.array=function(e,i){var n=e.reduce((function(e,n,t){var a,l=Object.values({friendEmail:n.friendEmail,friendName:n.friendName,friendPhone:n.friendName}).some((function(e){return""!==e}));console.log(l);var r=Object(s.a)({},n);return(0===t||l)&&(a=F()(r,i),console.log(a)),e[t]=a||null,e}),[]),t=n.every((function(e){return null===e}));return console.log(t),t?null:n},{friendsData:{array:{friendEmail:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},friendPhone:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},friendName:Object(s.a)({presence:{allowEmpty:!1,message:"^Name is required"}},{format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}})}}}));if(void 0!==i){var n=Object(s.a)({},i);z(Object(s.a)(Object(s.a)({},n),i))}return!i};Object(r.useEffect)((function(){var e,i,n,a,l,r,c,o,d,u,j,v,m,b,f,h=null===T||void 0===T||null===(e=T.trainingVenue)||void 0===e?void 0:e.value,p=((null===I||void 0===I||null===(i=I.activity)||void 0===i?void 0:i.label)||(null===T||void 0===T||null===(n=T.trainingType)||void 0===n||n.label),"virtual"===(null===T||void 0===T?void 0:T.preferedTrainingMode)),O=D||L,x={},N=null===O||void 0===O||null===(a=O.socialSessionPricing)||void 0===a?void 0:a.virtualSessionfor2People,g=null===O||void 0===O||null===(l=O.socialSessionPricing)||void 0===l?void 0:l.virtualSessionfor3People,P=null===O||void 0===O||null===(r=O.socialSessionPricing)||void 0===r?void 0:r.virtualSessionfor4People,_="trainerLocation"===h?null===O||void 0===O||null===(c=O.socialSessionPricing)||void 0===c?void 0:c.inPeronAtTrainerLocationfor2People:null===O||void 0===O||null===(o=O.socialSessionPricing)||void 0===o?void 0:o.inPeronAtClientLocationfor2People,S="trainerLocation"===h?null===O||void 0===O||null===(d=O.socialSessionPricing)||void 0===d?void 0:d.inPeronAtTrainerLocationfor3People:null===O||void 0===O||null===(u=O.socialSessionPricing)||void 0===u?void 0:u.inPeronAtClientLocationfor2People,F="trainerLocation"===h?null===O||void 0===O||null===(j=O.socialSessionPricing)||void 0===j?void 0:j.inPeronAtTrainerLocationfor4People:null===O||void 0===O||null===(v=O.socialSessionPricing)||void 0===v?void 0:v.inPeronAtClientLocationfor4People;x.social={twoPeople:p?N:_,threePeople:p?g:S,foureople:p?P:F};var y=null===O||void 0===O||null===(m=O.classSessionPricing)||void 0===m?void 0:m.virtualSessionfor15People,E="trainerLocation"===h?null===O||void 0===O||null===(b=O.classSessionPricing)||void 0===b?void 0:b.inPersonAttrainerLocationfor15People:null===O||void 0===O||null===(f=O.classSessionPricing)||void 0===f?void 0:f.inPersonAtclientLocationfor15People;x.class={fifteenPeople:p?y:E};var C=Object(t.a)(J);C[0]=Object(s.a)(Object(s.a)({},C[0]),{},{price:isNaN(x.social.twoPeople)?null:parseFloat(x.social.twoPeople),price1:isNaN(x.social.threePeople)?null:parseFloat(x.social.threePeople),price2:isNaN(x.social.foureople)?null:parseFloat(x.social.foureople)}),C[1]=Object(s.a)(Object(s.a)({},C[1]),{},{price:isNaN(x.class.fifteenPeople)?null:parseFloat(x.class.fifteenPeople)}),G(Object(t.a)(C))}),[]);var ne=D||L,se=null===ne||void 0===ne||null===(i=ne.areaOfExpertise)||void 0===i?void 0:i.toString(),te=(null===I||void 0===I?void 0:I.start_slot)?Object(g.getFormatDate)(null===I||void 0===I?void 0:I.start_slot,"MMMM Do, YYYY hh:mm A.",!0):"",ae=(null===T||void 0===T?void 0:T.sessionType)||"";return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"TF_outter_container",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"TF_inner_container",children:[Object(y.jsxs)("div",{className:"TF_headers",children:[Object(y.jsx)("h2",{children:"Your session is booked! Start adding your friends"}),Object(y.jsx)("p",{children:"Invite as many friends as you\u2019d like, the friends that accept will automatically be added in correspondence to session size! Once they accept your session, your rate will automatically be adjusted."})]}),Object(y.jsxs)("div",{className:"TF_wrapper",children:[Object(y.jsxs)("div",{className:"TF_inner_wrapper",children:[Object(y.jsx)("div",{className:"TF_wrapper_left",children:Object(y.jsxs)("div",{className:"TF_wrapper_content",children:[Object(y.jsx)("h2",{children:"Add Friends to Your Session"}),Object(y.jsx)("div",{className:"TF_form",children:Object(y.jsxs)("form",{onSubmit:ee,children:[Object(y.jsx)("h3",{children:"Enter your friend's details"}),Object(y.jsxs)("div",{className:"TF_inner_form",children:[U.map((function(e,i){return Object(y.jsxs)("div",{className:"TF_wrapper_input",children:[Object(y.jsxs)("h4",{children:["Friend #",i+1]}),Object(y.jsxs)("div",{className:"inner_input",children:[Object(y.jsx)("input",{type:"text",placeholder:"Name",name:"friendName",value:e.friendName,onChange:function(e){return H(i,e)}}),Object(y.jsx)("img",{src:o.default,alt:"icon"})]}),Z.friendsData&&Z.friendsData[i]&&Z.friendsData[i].friendName&&Object(y.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:Z.friendsData[i].friendName[0]}),Object(y.jsx)("div",{className:"TF_input",children:Object(y.jsxs)("div",{className:"inner_input",children:[Object(y.jsxs)("div",{className:"w-100",children:[Object(y.jsxs)("div",{className:"position-relative",children:[Object(y.jsx)("input",{type:"text",placeholder:"Email",name:"friendEmail",value:e.friendEmail,onChange:function(e){return H(i,e)}}),Object(y.jsx)("img",{src:c.default,alt:"icon"})]}),Z.friendsData&&Z.friendsData[i]&&Z.friendsData[i].friendEmail&&Object(y.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:Z.friendsData[i].friendEmail[0]})]}),Object(y.jsxs)("div",{className:"w-100",children:[Object(y.jsxs)("div",{className:"position-relative",children:[Object(y.jsx)(P.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone",inputProps:{name:"phone"},specialLabel:"",value:e.friendPhone,name:"phoneNo",onChange:function(e){H(i,{target:{name:"friendPhone",value:e}})}}),Object(y.jsx)("img",{src:d.default,alt:"icon"})]}),Z.friendsData&&Z.friendsData[i]&&Z.friendsData[i].friendPhone&&Object(y.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:Z.friendsData[i].friendPhone[0]})]})]})})]},i)})),Object(y.jsxs)("div",{className:"TF_remember_left",children:[Object(y.jsx)("input",{className:"TF_check",type:"checkbox",name:"iWillPay",checked:B,onChange:function(){return X(!B)}}),Object(y.jsx)("label",{children:"I will pay for all the people that I will be inviting to my social session or class"})]})]}),Object(y.jsxs)("div",{className:"TF_button",children:[Object(y.jsxs)("button",{onClick:ee,children:["Invite Friends ",Object(y.jsx)(b.default,{})," "]}),ae.includes("SOCIAL")&&U.length<3||ae.includes("CLASS")&&U.length<14?Object(y.jsx)("h5",{onClick:function(){Y([].concat(Object(t.a)(U),[{friendName:"",friendEmail:"",friendPhone:""}]))},children:"+ Add More Friends"}):null]})]})})]})}),Object(y.jsx)("div",{className:"TF_wrapper_right",children:Object(y.jsxs)("div",{className:"TF_right",children:[Object(y.jsxs)("div",{className:"TF_profile",children:[Object(y.jsx)("img",{src:(null===ne||void 0===ne?void 0:ne.profilePicture)||u.default,alt:"Trainer ".concat(null===ne||void 0===ne?void 0:ne.firstName)}),Object(y.jsxs)("div",{className:"TF_name",children:[Object(y.jsx)("h2",{children:"".concat((null===ne||void 0===ne?void 0:ne.firstName)||""," ").concat((null===ne||void 0===ne?void 0:ne.lastName)||"")}),Object(y.jsx)("p",{children:se})]})]}),Object(y.jsxs)("div",{className:"TF_wrapper",children:[Object(y.jsxs)("div",{className:"TF_details",children:[Object(y.jsx)("h3",{children:"I WANT TO TRAIN IN"}),Object(y.jsxs)("div",{className:"TF_data_inner",children:[Object(y.jsx)("img",{src:j.default,alt:"icon"}),Object(y.jsx)("h4",{children:(null===I||void 0===I||null===(n=I.activity)||void 0===n?void 0:n.label)||(null===T||void 0===T||null===(O=T.trainingType)||void 0===O?void 0:O.label)})]})]}),Object(y.jsxs)("div",{className:"TF_details",children:[Object(y.jsx)("h3",{children:"I want to train on"}),Object(y.jsxs)("div",{className:"TF_data_inner",children:[Object(y.jsx)("img",{src:v.default,alt:"icon"}),Object(y.jsx)("h4",{children:te||Object(g.getFormatDate)(A[0],"YYYY-MM-DD")})]})]}),Object(y.jsxs)("div",{className:"TF_details",children:[Object(y.jsx)("h3",{children:"I WANT TO TRAIN AT"}),Object(y.jsxs)("div",{className:"TF_data_inner",children:[Object(y.jsx)("img",{src:m.default,alt:"icon"}),Object(y.jsx)("h4",{children:"".concat(null===T||void 0===T||null===(x=T.trainingVenue)||void 0===x?void 0:x.label)})]})]}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"TF_service_details",children:Object(y.jsx)("div",{className:"TF_service_wrapper",children:Object(y.jsx)("div",{className:"TF_service_left",children:Object(y.jsxs)("div",{className:"TF_service_header",children:[Object(y.jsxs)("div",{className:"TF_inner_header",children:[Object(y.jsx)("h3",{children:"Service Details"}),Object(y.jsx)("h3",{children:"Price / Hour"})]}),Object(y.jsx)(C,{data:J})]})})})})]})]})})]}),Object(y.jsxs)("div",{className:"TF_skip",children:[Object(y.jsx)("h2",{className:"w-100 text-right",children:"Not right now? "}),Object(y.jsxs)(h.a,{onClick:function(){N().then((function(){p.history.push({pathname:"/users/dashboard/session"})})).catch((function(e){return console.log(e)}))},children:["CONTINUE TO ACCOUNT ",Object(y.jsx)(f.default,{})]})]})]})]})})})})}));i.default=I},268:function(e,i,n){"use strict";n.r(i),n.d(i,"COMMON_URL",(function(){return s})),n.d(i,"MESSAGING_URL",(function(){return t})),n.d(i,"SESSION_URL",(function(){return a})),n.d(i,"NOTIFICATION_URL",(function(){return l})),n.d(i,"PAYMENT_URL",(function(){return r})),n.d(i,"STRIPE_URL",(function(){return c}));var s="https://apis.bookmotto.com/user",t="https://apis.bookmotto.com/messaging",a="https://apis.bookmotto.com/session",l="",r="https://apis.bookmotto.com/payments",c="pk_live_51IJnd4BqgEC4bFYp4gC7EoInjpEKKjJXZMZGZurak1aK2ft1XN72QU355hRhLry3QmEucSKialeSBOGevqDJqfIJ00sU4zSO7O"},396:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Jenny.c50273b9.png"},435:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Phone Icon.f207d1b4.svg"},478:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Location Icon.c8540d80.svg"},479:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Shedule Icon.c434a0ee.svg"},480:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Strength Icon.533b1e81.svg"},484:function(e,i,n){},576:function(e,i,n){}}]);
//# sourceMappingURL=28.9996ae51.chunk.js.map