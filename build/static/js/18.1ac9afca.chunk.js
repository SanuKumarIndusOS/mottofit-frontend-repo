(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[18,93,122,153,247,248,249,269,294,295,296,298,312,328,329,353,354,355,356,357,407,409],{160:function(e,t,i){"use strict";i.r(t);var n=i(11),c=i(2),a=i(1367),r=i(1368),s=(i(569),i(40)),l=i(1);t.default=function(e){var t,i,o=e.images,d=e.toggle,u=e.currItemIndex,j=Object(c.useState)(0),b=Object(n.a)(j,2),f=b[0],h=b[1],m=Object(c.useState)(!1),O=Object(n.a)(m,2),v=(O[0],O[1],null===o||void 0===o?void 0:o.map((function(e){return{src:e}})));v.map((function(e){return Object(l.jsx)(a.a,{children:Object(l.jsx)("img",{src:e.src,alt:e.altText})},e.src)}));return Object(c.useEffect)((function(){return document.body.style.overflow="hidden",u!==f&&h(u),function(){document.body.style.overflow="auto"}}),[]),Object(l.jsxs)("div",{className:"full-screen-carousel",children:[Object(l.jsxs)("div",{className:"full-carousel",children:[Object(l.jsx)("div",{className:"full-carousel-inner ",children:Object(l.jsx)("div",{className:"full-carousel-item",children:Object(l.jsx)("img",{src:null===(t=v[f])||void 0===t?void 0:t.src,alt:null===(i=v[f])||void 0===i?void 0:i.altText})})}),Object(l.jsx)(r.a,{direction:"prev",directionText:"Previous",onClickHandler:function(){var e=0===f?v.length-1:f-1;h(e)}}),Object(l.jsx)(r.a,{direction:"next",directionText:"Next",onClickHandler:function(){var e=f===v.length-1?0:f+1;h(e)}}),Object(l.jsx)("div",{className:"total-items text-right",children:Object(l.jsx)("span",{className:"text-white",children:"".concat(f+1," of ").concat(v.length)})})]}),Object(l.jsx)("div",{className:"close-icon",onClick:d,children:Object(l.jsx)(s.CloseIcon,{})})]})}},176:function(e,t,i){"use strict";i.r(t);var n=i(89),c=i(4),a=i(11),r=i(2),s=i.n(r),l=(i(604),i(470)),o=i(17),d=i(9),u=i(416),j=i(472),b=i(88),f=i(232),h=(i(287),i(605),i(122)),m=i(471),O=i(507),v=i(55),x=i(411),p=i(491),g=i(297),_=i(54),y=i(8),N=i(281),k=i(24),A=i(20),T=i(36),M=i(90),S=i(160),P=i(1),C=Object(P.jsx)("img",{src:h.default,alt:"close"}),D=function(e){var t=e.selectedTimes,i=e.handleSessionType,n=(null===t||void 0===t?void 0:t.length)>0;return Object(P.jsx)("div",{className:"schedular_slots",children:Object(P.jsxs)("div",{className:"items_slots",children:[Object(P.jsxs)("div",{className:"item_slot1",children:[Object(P.jsx)("div",{className:"indicator"}),Object(P.jsx)("h5",{children:"AVAILABLE"})]}),Object(P.jsxs)("div",{className:"item_slot2",children:[Object(P.jsx)("div",{className:"indicator2"}),Object(P.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(P.jsxs)("div",{className:"item_slot3",children:[Object(P.jsx)("div",{className:"indicator3"}),Object(P.jsx)("h5",{children:"BOOKED SLOT"})," "]}),Object(P.jsxs)("div",{className:"item_slot4",children:[Object(P.jsxs)("button",{onClick:i,disabled:!n,className:"".concat(n?"":"disable-btn"),children:["BOOK a session ",Object(P.jsx)(_.default,{})," "]})," "]})]})})},w=function(e){var t,i,c,s,o=e.trainerProfileData,d=e.toggle,u=Object(r.useState)([{image:p.default}]),j=Object(a.a)(u,2),b=j[0],f=j[1],h=o.images,m=void 0===h?[]:h;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"profile_images_grid",children:Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"profile_images_container",children:[m[0]&&Object(P.jsx)("div",{className:"profile_images_card box1",onClick:function(){return d(0)},children:Object(P.jsx)("img",{src:m[0]||(null===(t=b[0])||void 0===t?void 0:t.image),alt:"picture",className:"box1",onError:function(e){var t;e.target.src=null===(t=b[0])||void 0===t?void 0:t.image}})}),Object(P.jsxs)("div",{className:"flex-try-2",children:[m[1]&&Object(P.jsx)("div",{className:"profile_images_card box2",onClick:function(){return d(1)},children:Object(P.jsx)("img",{src:m[1]||(null===(i=b[0])||void 0===i?void 0:i.image),alt:"picture",className:"box2"})}),Object(P.jsxs)("div",{className:"flex-try-3",children:[m[2]&&Object(P.jsx)("div",{className:"profile_images_card box3",onClick:function(){return d(2)},children:Object(P.jsx)("img",{src:m[2]||(null===(c=b[0])||void 0===c?void 0:c.image),alt:"Not Added",className:"box3"})}),m[3]&&Object(P.jsx)("div",{className:"profile_images_card box4",onClick:function(){return d(3)},children:Object(P.jsx)("img",{src:m[3]||(null===(s=b[0])||void 0===s?void 0:s.image),alt:"picture",className:"box4"})})]})]})]}),0===m.length&&Object(P.jsx)("p",{children:"Images Not Added"})]})}),o&&o.images&&o.images[4]?Object(P.jsxs)("div",{className:"image_more",onClick:function(){f([].concat(Object(n.a)(b),[{image:l.default}]))},children:[Object(P.jsx)("h5",{children:"View More Images"}),Object(P.jsx)("img",{src:v.default,ali:"icon"})]}):null]})},L=Object(k.b)((function(e){return{selectedTrainerData:e.userReducer.selectedTrainerData,selectedTimes:e.userReducer.selectedTimes}}),(function(e){return Object(A.b)({getTrainerDetail:N.getTrainerDetail,updateUserDetails:T.updateUserDetails},e)}))((function(e){var t,i,n,l,_,N,k=e.getTrainerDetail,A=e.updateUserDetails,T=e.selectedTimes,L=Object(r.useState)(!1),Y=Object(a.a)(L,2),I=Y[0],B=Y[1],E=Object(r.useRef)(null),F=Object(r.useState)(!1),R=Object(a.a)(F,2),H=R[0],q=R[1],U=s.a.useState(),$=Object(a.a)(U,2),V=$[0],W=$[1],Q=s.a.useState(),z=Object(a.a)(Q,2),G=z[0],J=z[1],K=s.a.useState(),X=Object(a.a)(K,2),Z=X[0],ee=X[1],te=Object(r.useState)(!1),ie=Object(a.a)(te,2),ne=ie[0],ce=ie[1],ae=Object(r.useState)(""),re=Object(a.a)(ae,2),se=re[0],le=re[1],oe=Object(r.useState)(!1),de=Object(a.a)(oe,2),ue=de[0],je=de[1],be=Object(r.useState)(""),fe=Object(a.a)(be,2),he=fe[0],me=fe[1],Oe=Object(r.useState)([]),ve=Object(a.a)(Oe,2),xe=ve[0],pe=ve[1],ge=Object(r.useState)([]),_e=Object(a.a)(ge,2),ye=_e[0],Ne=_e[1];Object(r.useEffect)((function(){k(ke,!1).then((function(e){var t=e.certification.filter((function(e){return""!==e.certificate}));pe(t),Ne(e)}))}),[]);var ke=Object(o.h)().id;var Ae=function(e){ce(!ne),le(e)},Te=function(){var e={selectedTrainerData:{trainerId:ye.id,trainerData:Object(c.a)({},ye)}};A(e),y.history.push("/user/scheduler")},Me=null===ye||void 0===ye||null===(t=ye.areaOfExpertise)||void 0===t?void 0:t.toString(),Se=null===ye||void 0===ye||null===(i=ye.preferedTrainingMode)||void 0===i?void 0:i.includes("virtual"),Pe=null===ye||void 0===ye||null===(n=ye.preferedTrainingMode)||void 0===n?void 0:n.includes("inPerson"),Ce=(null===ye||void 0===ye?void 0:ye.oneOnOnePricing)||{},De=Ce.virtualSession,we=void 0===De?"":De,Le=Ce.inPersonAtClientLocation,Ye=void 0===Le?"":Le,Ie=Ce.inPersonAtTrainerLocation,Be=void 0===Ie?"":Ie,Ee=ye.socialSessionPricing||{},Fe=Ee.virtualSessionfor2People,Re=void 0===Fe?"":Fe,He=Ee.virtualSessionfor3People,qe=void 0===He?"":He,Ue=Ee.virtualSessionfor4People,$e=void 0===Ue?"":Ue,Ve=Ee.inPeronAtClientLocationfor2People,We=void 0===Ve?"":Ve,Qe=Ee.inPeronAtClientLocationfor3People,ze=void 0===Qe?"":Qe,Ge=Ee.inPeronAtClientLocationfor4People,Je=void 0===Ge?"":Ge,Ke=Ee.inPeronAtTrainerLocationfor2People,Xe=void 0===Ke?"":Ke,Ze=Ee.inPeronAtTrainerLocationfor3People,et=void 0===Ze?"":Ze,tt=Ee.inPeronAtTrainerLocationfor4People,it=void 0===tt?"":tt,nt=ye.classSessionPricing||{},ct=nt.virtualSessionfor15People,at=void 0===ct?"":ct,rt=nt.inPersonAtclientLocationfor15People,st=void 0===rt?"":rt,lt=nt.inPersonAttrainerLocationfor15People,ot=void 0===lt?"":lt,dt=[we,Ye,Be].some((function(e){return""!==e&&parseFloat(e)>0})),ut=[Re,qe,$e,We,ze,Je,Xe,et,it].some((function(e){return""!==e&&parseFloat(e)>0})),jt=[at,st,ot].some((function(e){return""!==e&&parseFloat(e)>0}));return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"profile_main",children:[Object(P.jsx)("div",{className:"profile_outter_container",children:Object(P.jsxs)("div",{className:"profile_wrapper_container ",children:[Object(P.jsx)("div",{className:"profile_header",children:Object(P.jsxs)("div",{className:"inner_profile container",children:[ye&&ye.profilePicture?Object(P.jsx)("img",{src:ye.profilePicture,alt:"Not Found Image",onError:function(e){e.target.onerror=null,e.target.src="https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"}}):Object(P.jsx)("img",{src:p.default,alt:"Not Found Image"}),Object(P.jsxs)("div",{className:"profile_header_inner",children:[Object(P.jsxs)("h2",{children:[ye.firstName,"\xa0",ye.lastName]}),Object(P.jsx)("p",{children:Me})]}),Object(P.jsxs)("div",{className:"profile_header_link",children:[Object(P.jsx)("img",{src:x.default,alt:"icon"}),Object(P.jsx)(d.a,{to:"/trainer/find",children:"Back to Search"})]})]})}),Object(P.jsxs)("div",{className:"profile_main_contents container",children:[Object(P.jsxs)("div",{className:"profile_aside",children:[Object(P.jsxs)("div",{className:"profile_aside_link",children:[Object(P.jsx)(d.a,{onClick:Te,children:"View Calender"}),Object(P.jsx)("img",{src:v.default,alt:"icon"})]}),Object(P.jsxs)("div",{className:"profile_aside_items",children:[dt&&Object(P.jsxs)("div",{className:"profile_aside_item",children:[Object(P.jsx)("h2",{children:"1 ON 1 INDIVIDUAL TRAINING"}),Object(P.jsx)("hr",{}),Object(P.jsxs)("div",{className:"profile_aside_inner_item",children:[we&&Se?Object(P.jsxs)("h6",{children:["$".concat(we," "),Object(P.jsx)("span",{children:"(Virtual Session)"})]}):"",Ye&&Pe?Object(P.jsxs)("h6",{children:["$".concat(Ye," "),Object(P.jsx)("span",{children:"(at your location)"})]}):"",Be&&Pe?Object(P.jsxs)("h6",{children:["$".concat(Be," "),Object(P.jsx)("span",{children:"(at trainer location)"})]}):"",Object(P.jsx)("h5",{children:"See package rates during checkout"})]})]}),ut?Object(P.jsxs)("div",{className:"profile_aside_item",children:[Object(P.jsxs)("h2",{children:["SOCIAL SESSIONS"," ",Object(P.jsx)("img",{src:m.default,alt:"icon",onClick:function(){return B(!0)},className:"model_Qmark"})]}),Object(P.jsx)("hr",{}),I?Object(P.jsx)(f.a,{open:I,onClose:function(){return B(!1)},center:!0,closeIcon:C,container:E.current,styles:{boaderRadius:"10px"},children:Object(P.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(P.jsx)("h2",{children:"Want to Train with Friends?"}),Object(P.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(P.jsxs)("div",{className:"profile_aside_inner_item",children:[Re&&Se?Object(P.jsxs)("h6",{children:["$".concat(Re," "),Object(P.jsx)("span",{children:"/ Session (Virtual For 2 People)"})]}):"",We&&Pe?Object(P.jsxs)("h6",{children:["$".concat(We," "),Object(P.jsx)("span",{children:"(at your location for 2 people)"})]}):"",Xe&&Pe?Object(P.jsxs)("h6",{children:["$".concat(Xe," "),Object(P.jsx)("span",{children:"(at trainer location for 2 people)"})]}):"",qe&&Se?Object(P.jsxs)("h6",{children:["$".concat(qe," "),Object(P.jsx)("span",{children:"/ Session (Virtual For 3 People)"})]}):"",ze&&Pe?Object(P.jsxs)("h6",{children:["$".concat(ze," "),Object(P.jsx)("span",{children:"(at your location for 3 people)"})]}):"",et&&Pe?Object(P.jsxs)("h6",{children:["$".concat(et," "),Object(P.jsx)("span",{children:"(at trainer location for 3 people)"})]}):"",$e&&Se?Object(P.jsxs)("h6",{children:["$".concat($e," "),Object(P.jsx)("span",{children:"/ Session (Virtual For 4 People)"})]}):"",Je&&Pe?Object(P.jsxs)("h6",{children:["$".concat(Je," "),Object(P.jsx)("span",{children:"(at your location for 4 people)"})]}):"",it&&Pe?Object(P.jsxs)("h6",{children:["$".concat(it," "),Object(P.jsx)("span",{children:"(at trainer location for 4 people)"})]}):""]})]}):"",jt?Object(P.jsxs)("div",{className:"profile_aside_item",children:[Object(P.jsxs)("h2",{children:["CREATE A CLASS",Object(P.jsx)("img",{src:m.default,alt:"icon",onClick:function(){return q(!0)},className:"model_Qmark"})]}),Object(P.jsx)("hr",{}),H?Object(P.jsx)(f.a,{open:H,onClose:function(){return q(!1)},center:!0,closeIcon:C,container:E.current,styles:{boaderRadius:"10px"},children:Object(P.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(P.jsx)("h2",{children:"Want to Create a Class?"}),Object(P.jsx)("p",{children:"Design your very own workout party with the vertical & location of your choice. Create a class by paying a flat rate and adding up to 19 friends. You will be notified once they accept your invite."})]})}):null,Object(P.jsxs)("div",{className:"profile_aside_inner_item",children:[at&&Se?Object(P.jsxs)("h6",{children:["$".concat(at," "),Object(P.jsx)("span",{children:"Flat Rate Class (For 5-15 People)"})]}):"",st&&Pe?Object(P.jsxs)("h6",{children:["$".concat(st," "),Object(P.jsx)("span",{children:"(at your location) (For 5-15 People)"})]}):"",ot&&Pe?Object(P.jsxs)("h6",{children:["$".concat(ot," "),Object(P.jsx)("span",{children:"(at trainer location) (For 5-15 People)"})]}):"",Object(P.jsx)("h5",{children:"If trainer offers Virtual Social Sessions and Classes they will be at a discount to in person rates above. You will see these prior to checkout."})]})]}):"",Object(P.jsxs)("div",{className:"profile_aside_item",children:[Object(P.jsx)("h2",{children:"TRAINING LOCATIONS"}),Object(P.jsx)("hr",{}),Object(P.jsxs)("div",{className:"profile_aside_inner_item",children:[(null===ye||void 0===ye?void 0:ye.preferedTrainingMode)&&(null===ye||void 0===ye||null===(l=ye.preferedTrainingMode)||void 0===l?void 0:l.includes("virtual"))&&Object(P.jsxs)("div",{className:"profile_location",children:[Object(P.jsx)("img",{src:u.default,alt:"icon"}),Object(P.jsx)("h4",{children:"Virtual"})]}),ye&&(null===(_=ye.servicableLocation)||void 0===_?void 0:_.length)>0&&(null===ye||void 0===ye?void 0:ye.trainingFacility)?Object(P.jsx)("div",{className:"profile_location flex-column mt-2",children:Object(P.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(P.jsx)("img",{src:u.default,alt:"icon"}),Object(P.jsxs)("h4",{children:["".concat(null===ye||void 0===ye?void 0:ye.servicableLocation[0],"(Training Facility)"),Object(P.jsx)(d.a,{onClick:function(){je(!0),me("trainer")},children:"location details"})]})]})}):"",ye&&(null===(N=ye.servicableLocation)||void 0===N?void 0:N.length)>0&&(null===ye||void 0===ye?void 0:ye.willingToTravel)?Object(P.jsx)("div",{className:"profile_location flex-column mt-2",children:Object(P.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(P.jsx)("img",{src:u.default,alt:"icon"}),Object(P.jsxs)("h4",{children:["".concat(null===ye||void 0===ye?void 0:ye.servicableLocation[0],"(Your Location)"),Object(P.jsx)(d.a,{onClick:function(){je(!0),me("servicable")},children:"areas serviced"})]})]})}):"",Object(P.jsxs)("div",{className:"profile_share",children:[Object(P.jsx)("img",{src:j.default,alt:"icon"}),Object(P.jsx)(d.a,{onClick:function(){var e,t,i=null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.href;i&&Object(M.copyTextToClipboard)(i,"Link copied")},children:"Share Profile"})]})]})]}),Object(P.jsxs)("button",{className:"w-100",onClick:Te,children:["Book a session ",Object(P.jsx)(b.default,{})]})]})]}),Object(P.jsx)("div",{className:"profile_trainer_data",children:Object(P.jsxs)("div",{className:"profile_right_data",children:[Object(P.jsxs)("div",{className:"profile_right_item1",children:[Object(P.jsx)("img",{src:O.default,alt:"qoute"}),Object(P.jsx)("h6",{children:ye.myMotto?ye.myMotto:"Not Added"})]}),Object(P.jsxs)("div",{className:"profile_right_item2",children:[Object(P.jsxs)("h4",{children:["About ",ye.firstName]}),Object(P.jsx)("p",{children:ye.trainingProcess?ye.trainingProcess:"Not Added"}),Object(P.jsx)("div",{className:"profile_images",children:Object(P.jsx)(w,{trainerProfileData:ye,toggle:Ae,currItemIndex:se})})]}),Object(P.jsxs)("div",{className:"profile_right_item3 mb-5 pb-5",children:[Object(P.jsx)("h2",{children:"Certifications"}),Object(P.jsx)("div",{className:"profile_item3_inner",children:xe.length>0?Object(P.jsx)(P.Fragment,{children:xe.map((function(e,t){var i=e.certificate;return Object(P.jsxs)("div",{className:"inner_items",children:[Object(P.jsx)("img",{src:u.default,alt:"check"}),Object(P.jsx)("h6",{children:i})]},"".concat(i,"_").concat(t))}))}):Object(P.jsx)("p",{children:"Not Added"})})]}),Object(P.jsxs)("div",{className:"profile_right_item4",children:[Object(P.jsxs)("h2",{style:{textTransform:"capitalize"},children:[ye.firstName,Object(P.jsx)("span",{style:{textTransform:"none"},children:"'s"})," ","Schedule"," "]}),Object(P.jsx)(g.default,{id:ke,parentCallback:function(e,t,i){W(e),J(t),ee(i)},updateUserDetails:A}),Object(P.jsx)(D,{selectedTimes:T,handleSessionType:function(){var e={selectedTrainerData:Object(c.a)({},ye),bookingData:{start_slot:V,end_slot:G,date:Z}};A(e),y.history.push("/user/session-type")}})]})]})})]})]})}),ne&&Object(P.jsx)(S.default,{images:null===ye||void 0===ye?void 0:ye.images,toggle:Ae,currItemIndex:se}),ue?Object(P.jsx)(f.a,{open:ue,onClose:function(){je(!1),me("")},center:!0,closeIcon:Object(P.jsx)("img",{src:h.default,alt:"close"}),styles:{boaderRadius:"10px"},children:Object(P.jsxs)("div",{className:"model_styles modal-heading",children:[Object(P.jsx)("h2",{children:"".concat("trainer"===he?"Trainer's":"Servicable"," Locations")}),"trainer"===he?Object(P.jsx)("p",{children:(null===ye||void 0===ye?void 0:ye.trainingFacilityLocation)||"No trainer locations"}):Object(P.jsx)("p",{children:(null===ye||void 0===ye?void 0:ye.serviceableNeighbourHood)||"No neighbourhood locations"})]})}):null]})})}));t.default=L},281:function(e,t,i){"use strict";i.r(t),i.d(t,"changeApproval",(function(){return a})),i.d(t,"adminCancelSession",(function(){return r})),i.d(t,"getTrainerDetail",(function(){return s})),i.d(t,"getAllTrainerLists",(function(){return l})),i.d(t,"getAdminSession",(function(){return o})),i.d(t,"getStatsData",(function(){return d})),i.d(t,"getAllUsersLists",(function(){return u})),i.d(t,"AddorRemoveUser",(function(){return j})),i.d(t,"fetchTrainersLists",(function(){return b}));var n=i(4),c=i(15),a=function(e,t){return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.changeTrainerStatus,l={trainerId:t,action:null===e||void 0===e?void 0:e.trainerStatus};r.body=l,s(Object(n.a)({},r)).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}},r=function(e,t){return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.adminCancelSession,l={sessionId:e,sessionStatus:t};r.body=l,console.log("action",l),s(Object(n.a)({},r)).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.getTrainerDetail;r.id=e,s(Object(n.a)(Object(n.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.getAllTrainerLists;r.page=e,s(Object(n.a)(Object(n.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}},o=function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(a,r,s){var l=s.api;return new Promise((function(a,r){var s=c.TrainerApi.getAdminSession;s.page="?limit=10&offset="+e,s.type=t+"/",console.log(s.type+s.page,"action"),l(Object(n.a)(Object(n.a)({},s),{},{isAdmin:i})).then((function(e){var t=e.data;a(t)})).catch((function(e){r(e)}))}))}},d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,i,a){var r=a.api;return new Promise((function(e,i){r(Object(n.a)(Object(n.a)({},c.TrainerApi.getStatsData),{},{isAdmin:t})).then((function(t){e(t)})).catch((function(e){i(e)}))}))}},u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.getAllUsersLists;r.page=e,s(Object(n.a)(Object(n.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}},j=function(e,t){return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.AddorRemoveUser,l={userId:e,status:t};r.body=l,console.log(l,r),s(Object(n.a)({},r)).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}},b=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(i,a,r){var s=r.api;return new Promise((function(i,a){var r=c.TrainerApi.fetchTrainersLists;r.page=e,s(Object(n.a)(Object(n.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;i(t)})).catch((function(e){a(e)}))}))}}},297:function(e,t,i){"use strict";i.r(t);var n=i(89),c=i(11),a=i(2),r=i.n(a),s=i(230),l=i.n(s),o=i(39),d=i.n(o),u=i(435),j=i(436),b=(i(798),i(503),i(452)),f=i(456),h=i(454),m=i(453),O=i(455),v=i(36),x=i(24),p=i(20),g=(i(90),i(63)),_=i(1),y=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var N=Object(x.b)((function(e){return{queryObject:e.trainerReducer.query}}),(function(e){return Object(p.b)({getCalenderDetails:v.getCalenderDetails,updateTrainerDetails:g.updateTrainerDetails},e)}))((function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",b.default],i=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",f.default],s=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",h.default],o=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",h.default],v=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",m.default],x=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],p=r.a.useState(t),g=Object(c.a)(p,2),N=g[0],k=g[1],A=r.a.useState("EarlyBird"),T=Object(c.a)(A,2),M=T[0],S=T[1],P=r.a.useState([]),C=Object(c.a)(P,2),D=C[0],w=C[1],L=r.a.useState([]),Y=Object(c.a)(L,2),I=(Y[0],Y[1]),B=r.a.useState([]),E=Object(c.a)(B,2),F=E[0],R=E[1],H=r.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),q=Object(c.a)(H,2),U=q[0],$=(q[1],r.a.useState([])),V=Object(c.a)($,2),W=V[0],Q=V[1],z=r.a.useState(l()().startOf("isoWeek")),G=Object(c.a)(z,2),J=G[0],K=G[1],X=r.a.useState(l()().endOf("isoWeek")),Z=Object(c.a)(X,2),ee=Z[0],te=Z[1],ie=new Object,ne=new Object,ce=r.a.useState([]),ae=Object(c.a)(ce,2),re=ae[0],se=ae[1],le=r.a.useState(),oe=Object(c.a)(le,2),de=oe[0],ue=oe[1],je=r.a.useState(),be=Object(c.a)(je,2),fe=be[0],he=be[1];Object(a.useEffect)((function(){xe(J,ee),me(J,ee),window.scrollTo(0,0)}),[]),Object(a.useEffect)((function(){var t;2===(null===e||void 0===e||null===(t=e.selectedTimes)||void 0===t?void 0:t.length)&&R(e.selectedTimes)}),[e.selectedTimes]),Object(a.useEffect)((function(){I([]),xe(J,ee),me(J,ee)}),[N]),Object(a.useEffect)((function(){var e;Object.keys(re).map((function(e){ie[re[e].slotDate]=re[e].availabileTimes})),Object.keys(ie).map((function(t){e=[],ie[t].map((function(t){var i=d.a.tz(t.startTime,"America/New_York"),n=d()().tz("America/New_York");i.isBefore(n,"minutes")||e.push(t.start)})),ne[t]=e})),ue(ne),he(Object.keys(ne))}),[re]),Object(a.useEffect)((function(){w([]),N.map((function(e){var t=[];W.map((function(i){t.push({date:i,time:e})})),w((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[W]),Object(a.useEffect)((function(){I([]),U.map((function(e,t){var i=[];0!==t&&(e.map((function(e,t){!0===e&&i.push(t-1)})),I((function(e){return[].concat(Object(n.a)(e),[i])})))}))}),[U]);var me=function(e,t){w([]);for(var i=e.clone(),c=[];i.isSameOrBefore(t);)c.push(i.format("YYYY-MM-DD")),i.add(1,"days");Q(c),0===D.length&&N.map((function(e){var t=[];c.map((function(i){t.push({date:i,time:e})})),w((function(e){return[].concat(Object(n.a)(e),[t])}))}))};function Oe(t,i){var n=[],c=de[t];n.push(i+t);var a,r=l()(i,"hh:mm A").add(30,"minutes").format("hh:mm A"),s=l()("".concat(t," ").concat(i),"YYYY-MM-DD hh:mm A").valueOf();if(c.find((function(e){return e===r}))){n.push(r+t),a=l()("".concat(t," ").concat(i),"YYYY-MM-DD hh:mm A").add(60,"minutes").valueOf();var o={selectedTimes:n};(null===e||void 0===e?void 0:e.updateUserDetails)&&(null===e||void 0===e||e.updateUserDetails(o)),e.parentCallback(s,a,t)}else{var d=l()(r,"hh:mm A").subtract(60,"minutes").format("hh:mm A");n.push(d+t),a=l()("".concat(t," ").concat(i),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),s=l()("".concat(t," ").concat(i),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf();var u={selectedTimes:n};e.updateUserDetails(u),e.parentCallback(a,s,t)}R(n)}Object(a.useEffect)((function(){me(J,ee)}),[F]);var ve,xe=function(t,i){var n=t.format("YYYY-MM-DD"),c=i.format("YYYY-MM-DD");e.id&&e.getCalenderDetails(e.id,n,c,M).then((function(e){var t=e.data;se(t)}))};return Object(a.useEffect)((function(){var n,c,a=null===(n=e.queryObject)||void 0===n||null===(c=n.availability)||void 0===c?void 0:c.value,r={};if(a&&M!==a){switch(S(a),a){case"EarlyBird":k(t);break;case"RiseAndShine":k(i);break;case"MidDayBreak1":k(s);break;case"MidDayBreak2":k(o);break;case"HappyHours":k(v);break;case"NeverTooLate":k(x);break;default:k(t)}r=y.filter((function(e){return e.value===a}))[0]}else r=y.filter((function(e){return"EarlyBird"===e.value}))[0];var l={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:r,city:e.queryObject.city}};e.updateTrainerDetails(l)}),[]),0===D.length||(ve=Object(_.jsxs)("table",{children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsxs)("th",{style:{height:"70px"},children:[Object(_.jsx)("img",{src:N[7],style:{width:"30px",height:"30px"}}),Object(_.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",N[6]]})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[0].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[1].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[2].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[3].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"THU"})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[4].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[5].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(_.jsxs)("th",{children:[Object(_.jsx)("div",{className:"table_header_number",children:W[6].slice(8,10)}),Object(_.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(_.jsxs)("tbody",{children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"user_time_slot",children:N[0]}),D[0].map((function(e){return 0!==fe.length&&fe.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?F.find((function(t){return t===e.time+e.date}))?Object(_.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(_.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{})}))]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"user_time_slot",children:N[1]}),D[1].map((function(e){return 0!==fe.length&&fe.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?F.find((function(t){return t===e.time+e.date}))?Object(_.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot"}):Object(_.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{})}))]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"user_time_slot",children:N[2]}),D[2].map((function(e){return 0!==fe.length&&fe.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?F.find((function(t){return t===e.time+e.date}))?Object(_.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{})}))]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"user_time_slot",children:N[3]}),D[3].map((function(e){return 0!==fe.length&&fe.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?F.find((function(t){return t===e.time+e.date}))?Object(_.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{})}))]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"user_time_slot",children:N[4]}),D[4].map((function(e){return 0!==fe.length&&fe.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?F.find((function(t){return t===e.time+e.date}))?Object(_.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{})}))]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"user_time_slot",children:N[5]}),D[5].map((function(e){return 0!==fe.length&&fe.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?F.find((function(t){return t===e.time+e.date}))?Object(_.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(_.jsx)("td",{})}))]})]})]})),Object(_.jsxs)("div",{className:"outter_table_user",children:[Object(_.jsx)("div",{className:"table_user",children:Object(_.jsxs)("div",{className:"table_inner_trainer",children:[Object(_.jsxs)("div",{className:"table_date",children:[l()(J.format("YYYY-MM-DD")).isAfter(l()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:u.default,onClick:function(){K(J.subtract(7,"days")),te(ee.subtract(7,"days")),xe(J,ee),me(J,ee)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(_.jsxs)("div",{style:{display:"flex"},children:[Object(_.jsx)("img",{src:u.default,disabled:!0,style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(_.jsxs)("div",{className:"date_week",children:[J.format("DD")," - ",ee.format("DD")," \u2002",J.format("MMMM")," \u2002 ",J.format("yyyy")," "]}),Object(_.jsx)("img",{src:j.default,onClick:function(){K(J.add(7,"days")),te(ee.add(7,"days")),xe(J,ee),me(J,ee)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(_.jsx)("select",{value:M,name:"TimeSlot",onChange:function(n){var c=n.target.value;S(c),"EarlyBird"===c&&k(t),"RiseAndShine"===c&&k(i),"MidDayBreak1"===c&&k(s),"MidDayBreak2"===c&&k(o),"HappyHours"===c&&k(v),"NeverTooLate"===c&&k(x);var a=y.filter((function(e){return e.value===c}))[0],r={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:a}};e.updateTrainerDetails(r)},children:y.map((function(e,t){return Object(_.jsx)("option",{value:e.value,children:e.label},t)}))})]})}),Object(_.jsx)("br",{}),ve]})}));t.default=N},411:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Arrow Back.d3693c0f.svg"},416:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Tick 1.bf0e36e8.svg"},435:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Left Button.0b9d3a76.svg"},436:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Right Button.648b272c.svg"},452:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},453:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/HappyHour_Inactive.bef73318.svg"},454:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},455:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},456:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},470:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Profile Picture.ca592372.png"},471:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Q Mark.c9a955fb.svg"},472:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/share.b27e3212.svg"},491:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/NoImageFound.298b9820.png"},503:function(e,t,i){},507:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Quote Icon.6ae62bcc.svg"},569:function(e,t,i){},604:function(e,t,i){},605:function(e,t,i){}}]);