(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[32,168,220,225,356,380,383,384,457],{172:function(e,i,n){"use strict";n.r(i);var s=n(4),t=n(89),a=n(11),r=n(47),c=n(2),o=(n(595),n(130)),l=n(43),d=n(454),u=(n(417),n(498)),j=n(497),v=n(496),b=n(88),m=(n(502),n(54)),p=n(9),f=n(8),h=n(37),O=n(26),x=n(22),N=(n(316),n(90)),g=n(747),P=n.n(g),T=n(15),S=n(91),D=n(31),_=n(220),F=n.n(_),y=n(42),E=n(1),I=[{title:"Social Session",session:"1 Session / 2 People",session1:"1 Session / 3 People",session2:"1 Session / 4 People",price:"$65.00 / Person",price1:"$65.00 / Person",price2:"$65.00 / Person",isPrice:!0},{title:"Class Session",session:"Class (5-15 People)",price:"$15.00 / Person",isPrice:!0},{title:"Cancellation Session",session:"Cancellation Fee",price:"Free upto 24 hours",isPrice:!1}],C=function(e){var i=e.data,n=Object(c.useState)(0),s=Object(a.a)(n,2),t=s[0],r=s[1];return Object(E.jsx)(E.Fragment,{children:i.map((function(e,n){return(null===e||void 0===e?void 0:e.price)||e.price1||e.price2?Object(E.jsxs)("div",{className:"TF_data_item ".concat(n===i.length-1?"no-border":""),children:[Object(E.jsx)("div",{className:"TF_data_title",onClick:function(){return function(e){if(t===e)return r(null);r(e)}(n)},children:Object(E.jsx)("h3",{children:e.title})}),Object(E.jsxs)("div",{className:"session-block",children:[(null===e||void 0===e?void 0:e.price)?Object(E.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(E.jsx)("p",{children:e.session}),Object(E.jsx)("p",{className:"ml-auto",children:e.people?"$".concat(parseFloat(((null===e||void 0===e?void 0:e.price)||0)/e.people).toFixed(1)," / Person"):e.isPrice?"$".concat(null===e||void 0===e?void 0:e.price," / Person"):null===e||void 0===e?void 0:e.price})]}):"",e.price1?Object(E.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(E.jsx)("p",{children:e.session1}),Object(E.jsxs)("p",{className:"ml-auto",children:[" ",e.people1?"$".concat(parseFloat(((null===e||void 0===e?void 0:e.price1)||0)/e.people1).toFixed(1)," / Person"):e.isPrice?"$".concat(null===e||void 0===e?void 0:e.price1," / Person"):null===e||void 0===e?void 0:e.price1]})]}):"",e.price2?Object(E.jsxs)("div",{className:"session-item d-flex aling-items-center",children:[Object(E.jsx)("p",{children:e.session2}),Object(E.jsx)("p",{className:"ml-auto",children:e.people2?"$".concat(parseFloat(((null===e||void 0===e?void 0:e.price2)||0)/e.people2).toFixed(1)," / Person"):e.isPrice?"$".concat(null===e||void 0===e?void 0:e.price2," / Person"):null===e||void 0===e?void 0:e.price2})]}):""]})]},n):null}))})},w=Object(O.b)((function(e){var i;return{bookingData:e.userReducer.bookingData,selectedTimes:e.userReducer.selectedTimes,defaulCardDetails:e.userReducer.defaulCardDetails,queryQbject:e.trainerReducer.query,sessionData:e.userReducer.sessionData,trainerData:null===(i=e.userReducer.selectedTrainerData)||void 0===i?void 0:i.trainerData,selectedTrainerData:e.userReducer.selectedTrainerData,submittedData:e.userReducer.submittedData}}),(function(e){return Object(x.b)({userSession:h.userSession,updateUserDetails:h.updateUserDetails},e)}))((function(e){var i,n,h,O,x=e.userSession,g=e.sessionData,_=(e.scheduleSession,e.trainerData),w=e.bookingData,A=(e.defaulCardDetails,e.queryQbject,e.selectedTimes),L=e.selectedTrainerData,k=e.submittedData,R=e.updateUserDetails,U=(Object(r.a)(e,["userSession","sessionData","scheduleSession","trainerData","bookingData","defaulCardDetails","queryQbject","selectedTimes","selectedTrainerData","submittedData","updateUserDetails"]),Object(c.useState)([{friendName:"",friendEmail:"",friendPhone:""}])),M=Object(a.a)(U,2),Y=M[0],$=M[1],q=Object(c.useState)(I),J=Object(a.a)(q,2),G=J[0],Q=J[1],B=Object(c.useState)([]),K=Object(a.a)(B,2),Z=K[0],z=K[1],W=Object(c.useState)(!1),V=Object(a.a)(W,2),X=V[0],H=V[1],ee=Object(c.useState)(0),ie=Object(a.a)(ee,2),ne=ie[0],se=ie[1],te=(localStorage.getItem("sessionTrainingType"),function(e,i){var n=Object(t.a)(Y),a=i.target,r=a.name,c=a.value;(n[e][r]=c,Z.friendsData&&Z.friendsData[e])&&(Object(s.a)({},Z).friendsData[e][r]=void 0);$(n)});Object(c.useEffect)((function(){var e=T.userApi.getSessionData,i=null===k||void 0===k?void 0:k.id;e.id=i,Object(S.api)(Object(s.a)({},e)).then((function(e){var i,n,a,r,c,o,l,d,u,j,v,b,m,p,f,h,O=e.data,x=O.friends,N=void 0===x?[]:x,g=O.venue,P="virtual"===de,T=O.trainerDetail||{},S={},D=null===T||void 0===T||null===(i=T.socialSessionPricing)||void 0===i?void 0:i.virtualSessionfor2People,_=null===T||void 0===T||null===(n=T.socialSessionPricing)||void 0===n?void 0:n.virtualSessionfor3People,F=null===T||void 0===T||null===(a=T.socialSessionPricing)||void 0===a?void 0:a.virtualSessionfor4People,y="trainerLocation"===g?null===T||void 0===T||null===(r=T.socialSessionPricing)||void 0===r?void 0:r.inPeronAtTrainerLocationfor2People:null===T||void 0===T||null===(c=T.socialSessionPricing)||void 0===c?void 0:c.inPeronAtClientLocationfor2People,E="trainerLocation"===g?null===T||void 0===T||null===(o=T.socialSessionPricing)||void 0===o?void 0:o.inPeronAtTrainerLocationfor3People:null===T||void 0===T||null===(l=T.socialSessionPricing)||void 0===l?void 0:l.inPeronAtClientLocationfor3People,I="trainerLocation"===g?null===T||void 0===T||null===(d=T.socialSessionPricing)||void 0===d?void 0:d.inPeronAtTrainerLocationfor4People:null===T||void 0===T||null===(u=T.socialSessionPricing)||void 0===u?void 0:u.inPeronAtClientLocationfor4People;S.social={twoPeople:P?D:y,threePeople:P?_:E,foureople:P?F:I};var C=null===T||void 0===T||null===(j=T.classSessionPricing)||void 0===j?void 0:j.virtualSessionfor15People,w="trainerLocation"===g?null===T||void 0===T||null===(v=T.classSessionPricing)||void 0===v?void 0:v.inPersonAttrainerLocationfor15People:null===T||void 0===T||null===(b=T.classSessionPricing)||void 0===b?void 0:b.inPersonAtclientLocationfor15People;S.class={fifteenPeople:P?C:w};var A=Object(t.a)(G);A[0]=Object(s.a)(Object(s.a)({},A[0]),{},{price:isNaN(S.social.twoPeople)?null:parseFloat(S.social.twoPeople),price1:isNaN(S.social.threePeople)?null:parseFloat(S.social.threePeople),price2:isNaN(S.social.foureople)?null:parseFloat(S.social.foureople),people:2,people1:3,people2:4}),A[1]=Object(s.a)(Object(s.a)({},A[1]),{},{price:isNaN(S.class.fifteenPeople)?null:parseFloat(S.class.fifteenPeople),people:15}),(null===(m=A[1])||void 0===m?void 0:m.price)?se(15):(null===(p=A[0])||void 0===p?void 0:p.price2)?se(4):(null===(f=A[0])||void 0===f?void 0:f.price1)?se(3):(null===(h=A[0])||void 0===h?void 0:h.price)&&se(2),Q(Object(t.a)(A)),window.scrollTo(0,0);var L="";"social"===O.trainingType?L="SOCIAL SESSION":"class"===O.trainingType?L="CREATE A CLASS":"1on1"===O.trainingType&&(L="1 ON 1 TRAINING");var k={location:{label:(null===O||void 0===O?void 0:O.city)||"",value:(null===O||void 0===O?void 0:O.city)||""},trainingVenue:{label:"clientLocation"===O.venue?"Your Location":"Trainer's Location",value:(null===O||void 0===O?void 0:O.venue)||""},preferedTrainingMode:(null===O||void 0===O?void 0:O.sessionType)||"",price:O.price||"",sessionType:L||"",trainingType:{label:(null===O||void 0===O?void 0:O.activity)||"",value:(null===O||void 0===O?void 0:O.activity)||""}},U={start_slot:O.sessionStartTime,end_slot:O.sessionEndTime,date:O.sessionDate},M=Object(s.a)({},O.trainerDetail),Y=N.map((function(e){var i=e.userDetail,n=e.userId;return{friendName:(null===i||void 0===i?void 0:i.firstName)||"",friendEmail:(null===i||void 0===i?void 0:i.email)||"",friendPhone:(null===i||void 0===i?void 0:i.phoneNo)||"",id:n,isSubmitted:!0}}));H(O.paidByUser),Y.length>0&&$(Y);var q={bookingData:U,sessionData:k,selectedTrainerData:M,submittedData:Object(s.a)({},O)};R(q)}))}),[]);var ae=function(e){e.preventDefault();var i=null===k||void 0===k?void 0:k.id,n=T.userApi.editSessionData,a={sessionId:i,friends:Y.filter((function(e){var i=e.friendEmail,n=e.friendName,s=e.friendPhone,t=e.id;return i&&n&&s&&!t})).map((function(e){var i=e.friendEmail,n=e.friendName,s=e.friendPhone;return{email:i,firstName:n,phoneNo:s.includes("+")?s:"+".concat(s)}})),paidByUser:X},r={friendsData:Object(t.a)(Y)};re(r)&&(n.body=a,Object(S.api)(Object(s.a)({},n)).then((function(e){Object(D.Toast)({type:"success",message:e.message||"Success"}),f.history.push("/users/dashboard/session")})).catch((function(e){Object(D.Toast)({type:"error",message:e.message||"Error"})})))},re=function(e){var i=F()(e,(F.a.validators.array=function(e,i){var n=e.reduce((function(e,n,t){var a,r=Object.values({friendEmail:n.friendEmail,friendName:n.friendName,friendPhone:n.friendName}).some((function(e){return""!==e})),c=Object(s.a)({},n);return(0===t||r)&&(a=F()(c,i)),e[t]=a||null,e}),[]);return n.every((function(e){return null===e}))?null:n},{friendsData:{array:{friendEmail:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},friendPhone:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},friendName:Object(s.a)({presence:{allowEmpty:!1,message:"^Name is required"}},{format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}})}}}));if(void 0!==i){var n=Object(s.a)({},i);z(Object(s.a)(Object(s.a)({},n),i))}return!i};Object(c.useEffect)((function(){}),[]);var ce=_||L,oe=null===ce||void 0===ce||null===(i=ce.areaOfExpertise)||void 0===i?void 0:i.toString(),le=(null===w||void 0===w?void 0:w.start_slot)?Object(N.getFormatDate)(null===w||void 0===w?void 0:w.start_slot,"MMMM Do, YYYY hh:mm A.",!0):"",de=(null===g||void 0===g?void 0:g.sessionType)||"",ue=de.includes("SOCIAL")&&Y.length<3||de.includes("CLASS")&&Y.length<14,je=Y.length+1<ne,ve={profilePicture:null===ce||void 0===ce?void 0:ce.profilePicture,userName:"".concat((null===ce||void 0===ce?void 0:ce.firstName)||""," ").concat((null===ce||void 0===ce?void 0:ce.lastName)||"")};return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"TF_outter_container",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"TF_inner_container",children:[Object(E.jsxs)("div",{className:"TF_headers",children:[Object(E.jsx)("h2",{children:"Your session is booked! Start adding your friends"}),Object(E.jsx)("p",{children:"Invite as many friends as you\u2019d like, the friends that accept will automatically be added in correspondence to session size! Once they accept your session, your rate will automatically be adjusted."})]}),Object(E.jsxs)("div",{className:"TF_wrapper",children:[Object(E.jsxs)("div",{className:"TF_inner_wrapper",children:[Object(E.jsx)("div",{className:"TF_wrapper_left",children:Object(E.jsxs)("div",{className:"TF_wrapper_content",children:[Object(E.jsx)("h2",{children:"Add Friends to Your Session"}),Object(E.jsx)("div",{className:"TF_form",children:Object(E.jsxs)("form",{onSubmit:ae,children:[Object(E.jsx)("h3",{children:"Enter your friend's details"}),Object(E.jsxs)("div",{className:"TF_inner_form",children:[Y.map((function(e,i){return Object(E.jsxs)("div",{className:"TF_wrapper_input d-flex flex-column",children:[Object(E.jsxs)("h4",{className:"text-left",children:["Friend #",i+1]}),Object(E.jsxs)("div",{className:"inner_input",children:[Object(E.jsx)("input",{type:"text",placeholder:"Name",name:"friendName",value:e.friendName,onChange:function(e){return te(i,e)},disabled:e.isSubmitted,className:"".concat(e.isSubmitted?"disable-btn":"")}),Object(E.jsx)("img",{src:l.default,alt:"icon"})]}),Z.friendsData&&Z.friendsData[i]&&Z.friendsData[i].friendName&&Object(E.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:Z.friendsData[i].friendName[0]}),Object(E.jsx)("div",{className:"TF_input",children:Object(E.jsxs)("div",{className:"inner_input",children:[Object(E.jsxs)("div",{className:"w-100 mr-3",children:[Object(E.jsxs)("div",{className:"position-relative",children:[Object(E.jsx)("input",{type:"text",placeholder:"Email",name:"friendEmail",value:e.friendEmail,onChange:function(e){return te(i,e)},disabled:e.isSubmitted,className:"".concat(e.isSubmitted?"disable-btn":"")}),Object(E.jsx)("img",{src:o.default,alt:"icon"})]}),Z.friendsData&&Z.friendsData[i]&&Z.friendsData[i].friendEmail&&Object(E.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:Z.friendsData[i].friendEmail[0]})]}),Object(E.jsxs)("div",{className:"w-100",children:[Object(E.jsxs)("div",{className:"position-relative",children:[Object(E.jsx)(P.a,{disableDropdown:!0,countryCodeEditable:!1,country:"us",placeholder:"Phone",inputProps:{name:"phone"},specialLabel:"",value:e.friendPhone,name:"phoneNo",onChange:function(e){te(i,{target:{name:"friendPhone",value:e}})},disabled:e.isSubmitted,className:"".concat(e.isSubmitted?"disable-btn":"")}),Object(E.jsx)("img",{src:d.default,alt:"icon"})]}),Z.friendsData&&Z.friendsData[i]&&Z.friendsData[i].friendPhone&&Object(E.jsx)("span",{className:"text-danger fs-12 d-inline-block w-100",children:Z.friendsData[i].friendPhone[0]})]})]})}),(e.id||0!==i)&&Object(E.jsx)("button",{className:"btn-link btn text-underline fw-400 text-right",onClick:function(n){return function(e,i,n){e.preventDefault();var a=Object(t.a)(Y);if(a=a.filter((function(e,i){return i!==n})),!i){var r;$(a);var c=Object(s.a)({},Z);return c.friendsData=null===(r=c.friendsData)||void 0===r?void 0:r.filter((function(e,i){return i!==n})),void z(c)}var o=T.userApi.editSessionData,l={sessionId:null===k||void 0===k?void 0:k.id,removeFriend:i};o.body=l,Object(S.api)(Object(s.a)({},o)).then((function(e){Object(D.Toast)({type:"success",message:e.message||"Success"}),$(a)})).catch((function(e){Object(D.Toast)({type:"error",message:e.message||"Error"})}))}(n,e.id,i)},children:"Remove"})]},i)})),Object(E.jsxs)("div",{className:"TF_remember_left",children:[Object(E.jsx)("input",{className:"TF_check",type:"checkbox",name:"iWillPay",checked:X,onChange:function(){return H(!X)}}),Object(E.jsx)("label",{children:"I will pay for all the people that I will be inviting to my social session or class"})]})]}),Object(E.jsxs)("div",{className:"TF_button",children:[Object(E.jsxs)("button",{onClick:ae,children:["Invite Friends ",Object(E.jsx)(b.default,{})," "]}),ue&&je?Object(E.jsx)("h5",{onClick:function(){$([].concat(Object(t.a)(Y),[{friendName:"",friendEmail:"",friendPhone:""}]))},children:"+ Add More Friends"}):null]})]})})]})}),Object(E.jsx)("div",{className:"TF_wrapper_right",children:Object(E.jsxs)("div",{className:"TF_right",children:[Object(E.jsxs)("div",{className:"TF_profile",children:[Object(E.jsx)(y.UserAvatar,Object(s.a)(Object(s.a)({},ve),{},{className:"img-md"})),Object(E.jsxs)("div",{className:"TF_name",children:[Object(E.jsx)("h2",{children:"".concat((null===ce||void 0===ce?void 0:ce.firstName)||""," ").concat((null===ce||void 0===ce?void 0:ce.lastName)||"")}),Object(E.jsx)("p",{children:oe})]})]}),Object(E.jsxs)("div",{className:"TF_wrapper",children:[Object(E.jsxs)("div",{className:"TF_details",children:[Object(E.jsx)("h3",{children:"I WANT TO TRAIN IN"}),Object(E.jsxs)("div",{className:"TF_data_inner",children:[Object(E.jsx)("img",{src:u.default,alt:"icon"}),Object(E.jsx)("h4",{children:(null===w||void 0===w||null===(n=w.activity)||void 0===n?void 0:n.label)||(null===g||void 0===g||null===(h=g.trainingType)||void 0===h?void 0:h.label)})]})]}),Object(E.jsxs)("div",{className:"TF_details",children:[Object(E.jsx)("h3",{children:"I want to train on"}),Object(E.jsxs)("div",{className:"TF_data_inner",children:[Object(E.jsx)("img",{src:j.default,alt:"icon"}),Object(E.jsx)("h4",{children:le||Object(N.getFormatDate)(A[0],"YYYY-MM-DD")})]})]}),Object(E.jsxs)("div",{className:"TF_details",children:[Object(E.jsx)("h3",{children:"I WANT TO TRAIN AT"}),Object(E.jsxs)("div",{className:"TF_data_inner",children:[Object(E.jsx)("img",{src:v.default,alt:"icon"}),Object(E.jsx)("h4",{children:"".concat(null===g||void 0===g||null===(O=g.trainingVenue)||void 0===O?void 0:O.label)})]})]}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{className:"TF_service_details",children:Object(E.jsx)("div",{className:"TF_service_wrapper",children:Object(E.jsx)("div",{className:"TF_service_left",children:Object(E.jsxs)("div",{className:"TF_service_header",children:[Object(E.jsxs)("div",{className:"TF_inner_header",children:[Object(E.jsx)("h3",{children:"Service Details"}),Object(E.jsx)("h3",{children:"Price / Hour"})]}),Object(E.jsx)(C,{data:G})]})})})})]})]})})]}),Object(E.jsxs)("div",{className:"TF_skip",children:[Object(E.jsx)("h2",{className:"w-100 text-right",children:"Not right now? "}),Object(E.jsxs)(p.a,{onClick:function(){x().then((function(){f.history.push({pathname:"/users/dashboard/session"})})).catch((function(e){return console.log(e)}))},children:["CONTINUE TO ACCOUNT ",Object(E.jsx)(m.default,{})]})]})]})]})})})})}));i.default=w},316:function(e,i,n){"use strict";n.r(i),n.d(i,"COMMON_URL",(function(){return s})),n.d(i,"MESSAGING_URL",(function(){return t})),n.d(i,"SESSION_URL",(function(){return a})),n.d(i,"NOTIFICATION_URL",(function(){return r})),n.d(i,"PAYMENT_URL",(function(){return c})),n.d(i,"STRIPE_URL",(function(){return o}));var s="https://apis.bookmotto.com/user",t="https://apis.bookmotto.com/messaging",a="https://apis.bookmotto.com/session",r="",c="https://apis.bookmotto.com/payments",o="pk_live_51IJnd4BqgEC4bFYp4gC7EoInjpEKKjJXZMZGZurak1aK2ft1XN72QU355hRhLry3QmEucSKialeSBOGevqDJqfIJ00sU4zSO7O"},417:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Jenny.c50273b9.png"},454:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Phone Icon.f207d1b4.svg"},496:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Location Icon.c8540d80.svg"},497:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Shedule Icon.c434a0ee.svg"},498:function(e,i,n){"use strict";n.r(i),i.default=n.p+"static/media/Strength Icon.533b1e81.svg"},502:function(e,i,n){},595:function(e,i,n){}}]);