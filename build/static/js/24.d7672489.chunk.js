(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[24,259,354,355,450],{171:function(e,t,s){"use strict";s.r(t);var a=s(47),n=s(4),i=s(14),c=s(2),r=s.n(c),o=(s(594),s(745)),l=(s(743),s(403)),d=s(421),j=s(54),b=s(402),u=s(55),v=s(10),h=(s(222),s(34)),O=s(33),m=s(21),p=s(86),x=s(38),f=s(87),S=s(16),g=s(41),_=s(1),N=function(e){var t=e.tabname,s=e.tabData,o=e.prevData,b=e.cancelSessionApi,h=e.invitationApi,O=e.handleChange,m=void 0===O?{}:O,f=e.isDefaultCardPresent,S=Object(a.a)(e,["tabname","tabData","prevData","cancelSessionApi","invitationApi","handleChange","isDefaultCardPresent"]),N=Object(c.useState)([3]),T=Object(i.a)(N,2),D=T[0],y=T[1],P=Object(c.useState)(!1),C=Object(i.a)(P,2),A=C[0],I=C[1],F=function(e,t){var s={sessionId:e,acceptance:t};if(I(!0),!f&&t)return v.history.push("/users/dashboard/settings/profile"),Object(x.Toast)({type:"info",message:"User needs to add default card to proceed futher"});h(s).then((function(){I(!1),m(),Object(x.Toast)({type:"success",message:"success"})})).catch((function(e){I(!1),Object(x.Toast)({type:"error",message:e.message||"Error"})}))},U=function(e){var t="".concat(window.location.host),s="".concat(window.location.protocol),a="".concat(s,"//").concat(t,"/").concat("trainer/profile/").concat(e);e&&window.open(a)};return Object(_.jsxs)("div",{className:"tabPanel_overview",children:[Object(_.jsx)("div",{className:"tabPanel_overview_left",children:Object(_.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(_.jsxs)("h3",{style:{textTransform:"capitalize"},children:[t," Sessions"]}),Object(_.jsxs)("div",{className:"TP_US_overview",children:[Object(_.jsx)("div",{className:"TP_US_overview_inner",children:null===s||void 0===s?void 0:s.slice(0,D).map((function(e,s){var a;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(_.jsx)("div",{className:"TP_USession_dates",children:Object(_.jsxs)("h4",{children:[e.sessionDate.substr(8,2),Object(_.jsx)("span",{children:w[e.sessionDate.substr(5,2)]})]})}),Object(_.jsxs)("div",{className:"TP_USession_data",children:[Object(_.jsxs)("h2",{style:{textTransform:"capitalize"},children:[null===e||void 0===e?void 0:e.activity,"\xa0",Object(_.jsx)("span",{style:{textTransform:"lowerCase"},children:"with"})," ","\xa0",Object(_.jsx)("h2",{style:{textTransform:"capitalize"},children:null===e||void 0===e||null===(a=e.trainerDetail)||void 0===a?void 0:a.firstName})]}),Object(_.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(_.jsxs)("h5",{children:[Object(_.jsx)("img",{src:l.default,alt:"icon"}),Object(p.getFormatDate)(e.sessionStartTime,"LT",!0)]}),Object(_.jsxs)("h5",{children:[Object(_.jsx)("img",{src:d.default,alt:"icon"}),null===e||void 0===e?void 0:e.venue]})]}),"OnGoing"!==t&&Object(_.jsxs)("div",{className:"TP_USession_data_buttons",children:["Invited"===t?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("button",{disabled:A,onClick:function(){return F(e.id,!1)},children:"Decline"}),Object(_.jsx)("button",{disabled:A,onClick:function(){return F(e.id,!0)},className:"text-success",children:"Accept"}),Object(_.jsx)("button",{disabled:A,onClick:function(){return U(e.trainerId)},className:"text-primary",children:"View Trainer"})]}):Object(_.jsx)(_.Fragment,{children:"completed"===e.sessionStatus?Object(_.jsx)("button",{className:"text-primary",disabled:!0,children:"Completed"}):Object(_.jsx)(_.Fragment,{children:e.asFriend?Object(_.jsxs)("div",{className:"d-flex align-items-center",children:[Object(_.jsx)("span",{className:"text-black mr-4",children:"Invited session"}),Object(_.jsx)("button",{disabled:A,onClick:function(){return U(e.trainerId)},className:"text-primary",children:"View Trainer"})]}):Object(_.jsx)(_.Fragment,{children:"cancelled"!==e.sessionStatus?Object(_.jsx)(_.Fragment,{children:"Previous"!==t?Object(_.jsx)("button",{disabled:A,onClick:function(){return function(e){var t={sessionId:e,sessionStatus:"cancelled"};I(!0),b(t).then((function(){I(!1),m()})).catch((function(){return I(!1)}))}(e.id)},children:"Cancel"}):""}):Object(_.jsx)("button",{className:"text-danger",disabled:!0,children:"Cancelled"})})})}),"1on1"!==e.trainingType&&!e.asFriend&&"Previous"!==t&&Object(_.jsxs)("div",{className:"button_boarder",children:[Object(_.jsxs)("button",{onClick:function(){return function(e){var t="";"social"===e.trainingType?t="SOCIAL SESSION":"class"===e.trainingType?t="CREATE A CLASS":"1on1"===e.trainingType&&(t="1 ON 1 TRAINING");var s={location:{label:(null===e||void 0===e?void 0:e.city)||"",value:(null===e||void 0===e?void 0:e.city)||""},trainingVenue:{label:"clientLocation"===e.venue?"Your Location":"Trainer's Location",value:(null===e||void 0===e?void 0:e.venue)||""},preferedTrainingMode:(null===e||void 0===e?void 0:e.sessionType)||"",price:e.price||"",sessionType:t||"",trainingType:{label:(null===e||void 0===e?void 0:e.activity)||"",value:(null===e||void 0===e?void 0:e.activity)||""}},a={bookingData:{start_slot:e.sessionStartTime,end_slot:e.sessionEndTime,date:e.sessionDate},sessionData:s,selectedTrainerData:Object(n.a)({},e.trainerDetail),submittedData:Object(n.a)({},e)};null===S||void 0===S||S.updateUserDetails(a),v.history.push({pathname:"/user/with-friends"})}(e)},children:["Add Friends"," "]}),Object(_.jsx)("img",{src:u.default,alt:"icon"})]})]})]})]}),Object(_.jsx)("hr",{})]},s)}))}),Object(_.jsxs)("button",{onClick:function(){y((function(e){return e+1}))},className:"viewMoreButton",children:["View all Session ",Object(_.jsx)(j.default,{})]})]})]})}),Object(_.jsx)("div",{className:"tabPanel_overview_right",children:Object(_.jsx)("div",{className:"TB_overview_right",children:Object(_.jsx)("div",{className:"TB_overview_row_two",children:Object(_.jsxs)("div",{className:"row_two_data",children:[Object(_.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(_.jsx)("div",{className:"row_two_scroll",children:o.map((function(e,t){var s,a,i,c={profilePicture:null===e||void 0===e||null===(s=e.trainerDetail)||void 0===s?void 0:s.profilePicture,userName:"".concat((null===e||void 0===e||null===(a=e.trainerDetail)||void 0===a?void 0:a.firstName)||""," ").concat((null===e||void 0===e||null===(i=e.trainerDetail)||void 0===i?void 0:i.lastName)||"")};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"row_previous_data",children:[Object(_.jsx)("div",{className:"row_previous_avater ml-2",children:Object(_.jsx)(g.UserAvatar,Object(n.a)(Object(n.a)({},c),{},{className:"img-md-2"}))}),Object(_.jsxs)("div",{className:"row_previous_header",children:[Object(_.jsxs)("h2",{className:"d-flex flex-wrap",style:{textTransform:"capitalize"},children:[e.activity,"\xa0",Object(_.jsx)("span",{style:{textTransform:"lowerCase"},children:"with"})," ","\xa0",Object(_.jsx)("h2",{className:"d-flex flex-wrap",style:{textTransform:"capitalize"},children:e.trainerDetail.firstName})]}),Object(_.jsx)("p",{children:"".concat(e.sessionDate.substr(8,2)," ").concat(w[e.sessionDate.substr(5,2)]," ").concat(e.sessionDate.substr(0,4))})]})]},t),Object(_.jsx)("hr",{})]})}))})]})})})})]})},w=(l.default,d.default,b.default,l.default,d.default,b.default,l.default,d.default,b.default,l.default,d.default,b.default,l.default,d.default,b.default,{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"}),T=Object(O.b)(null,(function(e){return Object(m.b)({userSession:h.userSession,cancelSession:h.cancelSession,invitationSession:h.invitationSession,updateUserDetails:h.updateUserDetails},e)}))((function(e){var t=r.a.useState({upcomingSessions:[],pastSessions:[],onGoingSessions:[],invitedSessions:[]}),s=Object(i.a)(t,2),a=s[0],l=s[1],d=Object(c.useState)(!1),j=Object(i.a)(d,2),b=j[0],u=j[1];Object(c.useEffect)((function(){v(),h(),window.scrollTo(0,0)}),[]);var v=function(){e.userSession().then((function(e){l(e)})).catch((function(e){Object(x.Toast)({type:"error",message:e.message||"Error"})}))},h=function(){var e=S.PaymentApi.getPaymentMethods;Object(f.api)(Object(n.a)({},e)).then((function(e){var t=(e.data[0]||{}).default;u(t)}))};return Object(_.jsx)("div",{className:"outter_user_container",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"inner_user_container ",children:[Object(_.jsx)("div",{className:"userSession_heading",children:Object(_.jsx)("h2",{children:"My Session"})}),Object(_.jsx)("div",{className:"US_tabs_wrapper",children:Object(_.jsxs)(o.d,{defaultTab:"invited",children:[Object(_.jsxs)(o.b,{children:[Object(_.jsx)(o.a,{tabFor:"invited",children:"Invited"}),Object(_.jsx)(o.a,{tabFor:"upcoming",children:"Upcoming"}),Object(_.jsx)(o.a,{tabFor:"previous",children:"Previous"}),Object(_.jsx)(o.a,{tabFor:"ongoing",children:"Ongoing"})]}),Object(_.jsx)("div",{className:"tabPanel_outter",children:Object(_.jsx)(o.c,{tabId:"invited",children:Object(_.jsx)(N,Object(n.a)({tabname:"Invited",tabData:a.invitedSessions,prevData:a.pastSessions,cancelSessionApi:e.cancelSession,invitationApi:e.invitationSession,handleChange:function(){return v()},isDefaultCardPresent:b},e))})}),Object(_.jsx)("div",{className:"tabPanel_outter",children:Object(_.jsx)(o.c,{tabId:"upcoming",children:Object(_.jsx)(N,Object(n.a)({tabname:"Upcoming",tabData:a.upcomingSessions,prevData:a.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return v()}},e))})}),Object(_.jsx)("div",{className:"tabPanel_outter",children:Object(_.jsx)(o.c,{tabId:"pass",children:Object(_.jsx)(N,Object(n.a)({tabname:"Moto Pass",tabData:a.pastSessions,prevData:a.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return v()}},e))})}),Object(_.jsx)("div",{className:"tabPanel_outter",children:Object(_.jsx)(o.c,{tabId:"previous",children:Object(_.jsx)(N,Object(n.a)({tabname:"Previous",tabData:a.pastSessions,prevData:a.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return v()}},e))})}),Object(_.jsx)("div",{className:"tabPanel_outter",children:Object(_.jsx)(o.c,{tabId:"ongoing",children:Object(_.jsx)(N,Object(n.a)({tabname:"OnGoing",tabData:a.onGoingSessions,prevData:a.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return v()}},e))})})]})})]})})})}));t.default=T},402:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Jenny.c50273b9.png"},403:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Availability Icon.ad0517cb.svg"},421:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Location Icon.cbb0b32d.svg"},594:function(e,t,s){}}]);