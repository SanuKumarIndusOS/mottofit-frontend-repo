(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[28,155,209,213,345,369,372,373,447],{163:function(e,i,n){"use strict";n.r(i);var s=n(4),t=n(84),a=n(14),r=n(46),l=n(2),c=(n(576),n(126)),o=n(41),d=n(436),u=n(397),j=n(481),v=n(480),m=n(479),b=n(83),f=(n(485),n(53)),h=n(8),p=n(13),O=n(39),x=n(33),N=n(21),g=(n(268),n(85)),T=n(727),P=n.n(T),S=n(16),_=n(86),D=n(36),y=n(207),F=n.n(y),E=n(1),I=[{title:"Social Session",session:"1 Session / 2 People",session1:"1 Session / 3 People",session2:"1 Session / 4 People",price:"$65.00 / Person",price1:"$65.00 / Person",price2:"$65.00 / Person",isPrice:!0},{title:"Class Session",session:"Class (5-15 People)",price:"$15.00 / Person",isPrice:!0},{title:"Cancellation Session",session:"Cancellation Fee",price:"Free upto 24 hours",isPrice:!1}],C=function(e){var i=e.data,n=Object(l.useState)(0),s=Object(a.a)(n,2),t=s[0],r=s[1];return Object(E.jsx)(E.Fragment,{children:i.map((function(e,n){return Object(E.jsxs)("div",{className:"TF_data_item ".concat(n===i.length-1?"no-border":""),children:[Object(E.jsx)("div",{className:"TF_data_title",onClick:function(){return function(e){if(t===e)return r(null);r(e)}(n)},children:Object(E.jsx)("h3",{children:e.title})}),Object(E.jsxs)("div",{className:"session-block",children:[(null===e||void 0===e?void 0:e.price)?Object(E.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(E.jsx)("p",{children:e.session}),Object(E.jsx)("p",{className:"ml-auto",children:e.isPrice?"$".concat(null===e||void 0===e?void 0:e.price," / Person"):null===e||void 0===e?void 0:e.price})]}):"",e.price1?Object(E.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(E.jsx)("p",{children:e.session1}),Object(E.jsx)("p",{className:"ml-auto",children:"$".concat(null===e||void 0===e?void 0:e.price1," / Person")})]}):"",e.price2?Object(E.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(E.jsx)("p",{children:e.session2}),Object(E.jsx)("p",{className:"ml-auto",children:"$".concat(null===e||void 0===e?void 0:e.price2," / Person")})]}):""]})]},n)}))})},A=Object(x.b)((function(e){var i;return{bookingData:e.userReducer.bookingData,selectedTimes:e.userReducer.selectedTimes,defaulCardDetails:e.userReducer.defaulCardDetails,queryQbject:e.trainerReducer.query,sessionData:e.userReducer.sessionData,trainerData:null===(i=e.userReducer.selectedTrainerData)||void 0===i?void 0:i.trainerData,selectedTrainerData:e.userReducer.selectedTrainerData,submittedData:e.userReducer.submittedData}}),(function(e){return Object(N.b)({userSession:O.userSession,updateUserDetails:O.updateUserDetails},e)}))((function(e){var i,n,O,x,N=e.userSession,T=e.sessionData,y=(e.scheduleSession,e.trainerData),A=e.bookingData,L=(e.defaulCardDetails,e.queryQbject,e.selectedTimes),w=e.selectedTrainerData,k=e.submittedData,R=e.updateUserDetails,U=(Object(r.a)(e,["userSession","sessionData","scheduleSession","trainerData","bookingData","defaulCardDetails","queryQbject","selectedTimes","selectedTrainerData","submittedData","updateUserDetails"]),Object(l.useState)([{friendName:"",friendEmail:"",friendPhone:""}])),M=Object(a.a)(U,2),Y=M[0],q=M[1],$=Object(l.useState)(I),J=Object(a.a)($,2),G=J[0],Q=J[1],K=Object(l.useState)([]),Z=Object(a.a)(K,2),z=Z[0],B=Z[1],V=Object(l.useState)(!1),W=Object(a.a)(V,2),X=W[0],H=W[1],ee=(localStorage.getItem("sessionTrainingType"),function(e,i){var n=Object(t.a)(Y),a=i.target,r=a.name,l=a.value;(n[e][r]=l,z.friendsData&&z.friendsData[e])&&(Object(s.a)({},z).friendsData[e][r]=void 0);q(n)});Object(l.useEffect)((function(){var e=S.userApi.getSessionData,i=null===k||void 0===k?void 0:k.id;e.id=i,Object(_.api)(Object(s.a)({},e)).then((function(e){var i=e.data,n=i.friends,t=void 0===n?[]:n,a="";"social"===i.trainingType?a="SOCIAL SESSION":"class"===i.trainingType?a="CREATE A CLASS":"1on1"===i.trainingType&&(a="1 ON 1 TRAINING");var r={location:{label:(null===i||void 0===i?void 0:i.city)||"",value:(null===i||void 0===i?void 0:i.city)||""},trainingVenue:{label:"clientLocation"===i.venue?"Your Location":"Trainer's Location",value:(null===i||void 0===i?void 0:i.venue)||""},preferedTrainingMode:(null===i||void 0===i?void 0:i.sessionType)||"",price:i.price||"",sessionType:a||"",trainingType:{label:(null===i||void 0===i?void 0:i.activity)||"",value:(null===i||void 0===i?void 0:i.activity)||""}},l={start_slot:i.sessionStartTime,end_slot:i.sessionEndTime,date:i.sessionDate},c=Object(s.a)({},i.trainerDetail),o=t.map((function(e){var i=e.userDetail;return{friendName:(null===i||void 0===i?void 0:i.firstName)||"",friendEmail:(null===i||void 0===i?void 0:i.email)||"",friendPhone:(null===i||void 0===i?void 0:i.phoneNo)||""}}));o.length>0&&q(o);var d={bookingData:l,sessionData:r,selectedTrainerData:c,submittedData:Object(s.a)({},i)};R(d)}))}),[]);var ie=function(e){e.preventDefault();var i=null===k||void 0===k?void 0:k.id,n=S.userApi.editSessionData,a={sessionId:i,friends:Y.filter((function(e){var i=e.friendEmail,n=e.friendName,s=e.friendPhone;return i&&n&&s})).map((function(e){var i=e.friendEmail,n=e.friendName,s=e.friendPhone;return{email:i,firstName:n,phoneNo:s.includes("+")?s:"+".concat(s)}})),paidByUser:X},r={friendsData:Object(t.a)(Y)};ne(r)&&(n.body=a,Object(_.api)(Object(s.a)({},n)).then((function(e){Object(D.Toast)({type:"success",message:e.message||"Success"}),p.history.push("/users/dashboard/session")})).catch((function(e){Object(D.Toast)({type:"error",message:e.message||"Error"})})))},ne=function(e){var i=F()(e,(F.a.validators.array=function(e,i){var n=e.reduce((function(e,n,t){var a,r=Object.values({friendEmail:n.friendEmail,friendName:n.friendName,friendPhone:n.friendName}).some((function(e){return""!==e}));console.log(r);var l=Object(s.a)({},n);return(0===t||r)&&(a=F()(l,i),console.log(a)),e[t]=a||null,e}),[]),t=n.every((function(e){return null===e}));return console.log(t),t?null:n},{friendsData:{array:{friendEmail:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},friendPhone:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},friendName:Object(s.a)({presence:{allowEmpty:!1,message:"^Name is required"}},{format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}})}}}));if(void 0!==i){var n=Object(s.a)({},i);B(Object(s.a)(Object(s.a)({},n),i))}return!i};Object(l.useEffect)((function(){var e,i,n,a,r,l,c,o,d,u,j,v,m,b,f,h=null===T||void 0===T||null===(e=T.trainingVenue)||void 0===e?void 0:e.value,p=((null===A||void 0===A||null===(i=A.activity)||void 0===i?void 0:i.label)||(null===T||void 0===T||null===(n=T.trainingType)||void 0===n||n.label),"virtual"===(null===T||void 0===T?void 0:T.preferedTrainingMode)),O=y||w,x={},N=null===O||void 0===O||null===(a=O.socialSessionPricing)||void 0===a?void 0:a.virtualSessionfor2People,g=null===O||void 0===O||null===(r=O.socialSessionPricing)||void 0===r?void 0:r.virtualSessionfor3People,P=null===O||void 0===O||null===(l=O.socialSessionPricing)||void 0===l?void 0:l.virtualSessionfor4People,S="trainerLocation"===h?null===O||void 0===O||null===(c=O.socialSessionPricing)||void 0===c?void 0:c.inPeronAtTrainerLocationfor2People:null===O||void 0===O||null===(o=O.socialSessionPricing)||void 0===o?void 0:o.inPeronAtClientLocationfor2People,_="trainerLocation"===h?null===O||void 0===O||null===(d=O.socialSessionPricing)||void 0===d?void 0:d.inPeronAtTrainerLocationfor3People:null===O||void 0===O||null===(u=O.socialSessionPricing)||void 0===u?void 0:u.inPeronAtClientLocationfor2People,D="trainerLocation"===h?null===O||void 0===O||null===(j=O.socialSessionPricing)||void 0===j?void 0:j.inPeronAtTrainerLocationfor4People:null===O||void 0===O||null===(v=O.socialSessionPricing)||void 0===v?void 0:v.inPeronAtClientLocationfor4People;x.social={twoPeople:p?N:S,threePeople:p?g:_,foureople:p?P:D};var F=null===O||void 0===O||null===(m=O.classSessionPricing)||void 0===m?void 0:m.virtualSessionfor15People,E="trainerLocation"===h?null===O||void 0===O||null===(b=O.classSessionPricing)||void 0===b?void 0:b.inPersonAttrainerLocationfor15People:null===O||void 0===O||null===(f=O.classSessionPricing)||void 0===f?void 0:f.inPersonAtclientLocationfor15People;x.class={fifteenPeople:p?F:E};var I=Object(t.a)(G);I[0]=Object(s.a)(Object(s.a)({},I[0]),{},{price:isNaN(x.social.twoPeople)?null:parseFloat(x.social.twoPeople),price1:isNaN(x.social.threePeople)?null:parseFloat(x.social.threePeople),price2:isNaN(x.social.foureople)?null:parseFloat(x.social.foureople)}),I[1]=Object(s.a)(Object(s.a)({},I[1]),{},{price:isNaN(x.class.fifteenPeople)?null:parseFloat(x.class.fifteenPeople)}),Q(Object(t.a)(I))}),[]);var se=y||w,te=null===se||void 0===se||null===(i=se.areaOfExpertise)||void 0===i?void 0:i.toString(),ae=(null===A||void 0===A?void 0:A.start_slot)?Object(g.getFormatDate)(null===A||void 0===A?void 0:A.start_slot,"MMMM Do, YYYY hh:mm A.",!0):"",re=(null===T||void 0===T?void 0:T.sessionType)||"";return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"TF_outter_container",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"TF_inner_container",children:[Object(E.jsxs)("div",{className:"TF_headers",children:[Object(E.jsx)("h2",{children:"Your session is booked! Start adding your friends"}),Object(E.jsx)("p",{children:"Invite as many friends as you\u2019d like, the friends that accept will automatically be added in correspondence to session size! Once they accept your session, your rate will automatically be adjusted."})]}),Object(E.jsxs)("div",{className:"TF_wrapper",children:[Object(E.jsxs)("div",{className:"TF_inner_wrapper",children:[Object(E.jsx)("div",{className:"TF_wrapper_left",children:Object(E.jsxs)("div",{className:"TF_wrapper_content",children:[Object(E.jsx)("h2",{children:"Add Friends to Your Session"}),Object(E.jsx)("div",{className:"TF_form",children:Object(E.jsxs)("form",{onSubmit:ie,children:[Object(E.jsx)("h3",{children:"Enter your friend's details"}),Object(E.jsxs)("div",{className:"TF_inner_form",children:[Y.map((function(e,i){return Object(E.jsxs)("div",{className:"TF_wrapper_input",children:[Object(E.jsxs)("h4",{children:["Friend #",i+1]}),Object(E.jsxs)("div",{className:"inner_input",children:[Object(E.jsx)("input",{type:"text",placeholder:"Name",name:"friendName",value:e.friendName,onChange:function(e){return ee(i,e)}}),Object(E.jsx)("img",{src:o.default,alt:"icon"})]}),z.friendsData&&z.friendsData[i]&&z.friendsData[i].friendName&&Object(E.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:z.friendsData[i].friendName[0]}),Object(E.jsx)("div",{className:"TF_input",children:Object(E.jsxs)("div",{className:"inner_input",children:[Object(E.jsxs)("div",{className:"w-100",children:[Object(E.jsxs)("div",{className:"position-relative",children:[Object(E.jsx)("input",{type:"text",placeholder:"Email",name:"friendEmail",value:e.friendEmail,onChange:function(e){return ee(i,e)}}),Object(E.jsx)("img",{src:c.default,alt:"icon"})]}),z.friendsData&&z.friendsData[i]&&z.friendsData[i].friendEmail&&Object(E.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:z.friendsData[i].friendEmail[0]})]}),Object(E.jsxs)("div",{className:"w-100",children:[Object(E.jsxs)("div",{className:"position-relative",children:[Object(E.jsx)(P.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone",inputProps:{name:"phone"},specialLabel:"",value:e.friendPhone,name:"phoneNo",onChange:function(e){ee(i,{target:{name:"friendPhone",value:e}})}}),Object(E.jsx)("img",{src:d.default,alt:"icon"})]}),z.friendsData&&z.friendsData[i]&&z.friendsData[i].friendPhone&&Object(E.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:z.friendsData[i].friendPhone[0]})]})]})})]},i)})),Object(E.jsxs)("div",{className:"TF_remember_left",children:[Object(E.jsx)("input",{className:"TF_check",type:"checkbox",name:"iWillPay",checked:X,onChange:function(){return H(!X)}}),Object(E.jsx)("label",{children:"I will pay for all the people that I will be inviting to my social session or class"})]})]}),Object(E.jsxs)("div",{className:"TF_button",children:[Object(E.jsxs)("button",{onClick:ie,children:["Invite Friends ",Object(E.jsx)(b.default,{})," "]}),re.includes("SOCIAL")&&Y.length<3||re.includes("CLASS")&&Y.length<14?Object(E.jsx)("h5",{onClick:function(){q([].concat(Object(t.a)(Y),[{friendName:"",friendEmail:"",friendPhone:""}]))},children:"+ Add More Friends"}):null]})]})})]})}),Object(E.jsx)("div",{className:"TF_wrapper_right",children:Object(E.jsxs)("div",{className:"TF_right",children:[Object(E.jsxs)("div",{className:"TF_profile",children:[Object(E.jsx)("img",{src:(null===se||void 0===se?void 0:se.profilePicture)||u.default,alt:"Trainer ".concat(null===se||void 0===se?void 0:se.firstName)}),Object(E.jsxs)("div",{className:"TF_name",children:[Object(E.jsx)("h2",{children:"".concat((null===se||void 0===se?void 0:se.firstName)||""," ").concat((null===se||void 0===se?void 0:se.lastName)||"")}),Object(E.jsx)("p",{children:te})]})]}),Object(E.jsxs)("div",{className:"TF_wrapper",children:[Object(E.jsxs)("div",{className:"TF_details",children:[Object(E.jsx)("h3",{children:"I WANT TO TRAIN IN"}),Object(E.jsxs)("div",{className:"TF_data_inner",children:[Object(E.jsx)("img",{src:j.default,alt:"icon"}),Object(E.jsx)("h4",{children:(null===A||void 0===A||null===(n=A.activity)||void 0===n?void 0:n.label)||(null===T||void 0===T||null===(O=T.trainingType)||void 0===O?void 0:O.label)})]})]}),Object(E.jsxs)("div",{className:"TF_details",children:[Object(E.jsx)("h3",{children:"I want to train on"}),Object(E.jsxs)("div",{className:"TF_data_inner",children:[Object(E.jsx)("img",{src:v.default,alt:"icon"}),Object(E.jsx)("h4",{children:ae||Object(g.getFormatDate)(L[0],"YYYY-MM-DD")})]})]}),Object(E.jsxs)("div",{className:"TF_details",children:[Object(E.jsx)("h3",{children:"I WANT TO TRAIN AT"}),Object(E.jsxs)("div",{className:"TF_data_inner",children:[Object(E.jsx)("img",{src:m.default,alt:"icon"}),Object(E.jsx)("h4",{children:"".concat(null===T||void 0===T||null===(x=T.trainingVenue)||void 0===x?void 0:x.label)})]})]}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{className:"TF_service_details",children:Object(E.jsx)("div",{className:"TF_service_wrapper",children:Object(E.jsx)("div",{className:"TF_service_left",children:Object(E.jsxs)("div",{className:"TF_service_header",children:[Object(E.jsxs)("div",{className:"TF_inner_header",children:[Object(E.jsx)("h3",{children:"Service Details"}),Object(E.jsx)("h3",{children:"Price / Hour"})]}),Object(E.jsx)(C,{data:G})]})})})})]})]})})]}),Object(E.jsxs)("div",{className:"TF_skip",children:[Object(E.jsx)("h2",{className:"w-100 text-right",children:"Not right now? "}),Object(E.jsxs)(h.a,{onClick:function(){N().then((function(){p.history.push({pathname:"/users/dashboard/session"})})).catch((function(e){return console.log(e)}))},children:["CONTINUE TO ACCOUNT ",Object(E.jsx)(f.default,{})]})]})]})]})})})})}));i.default=A},268:function(e,i,n){"use strict";n.r(i),n.d(i,"COMMON_URL",(function(){return s})),n.d(i,"MESSAGING_URL",(function(){return t})),n.d(i,"SESSION_URL",(function(){return a})),n.d(i,"NOTIFICATION_URL",(function(){return r})),n.d(i,"PAYMENT_URL",(function(){return l})),n.d(i,"STRIPE_URL",(function(){return c}));var s="https://apis.bookmotto.com/user",t="https://apis.bookmotto.com/messaging",a="https://apis.bookmotto.com/session",r="",l="https://apis.bookmotto.com/payments",c="pk_live_51IJnd4BqgEC4bFYp4gC7EoInjpEKKjJXZMZGZurak1aK2ft1XN72QU355hRhLry3QmEucSKialeSBOGevqDJqfIJ00sU4zSO7O"},397:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Jenny.c50273b9.png"},436:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Phone Icon.f207d1b4.svg"},479:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Location Icon.c8540d80.svg"},480:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Shedule Icon.c434a0ee.svg"},481:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Strength Icon.533b1e81.svg"},485:function(e,i,n){},576:function(e,i,n){}}]);
//# sourceMappingURL=28.934d442b.chunk.js.map