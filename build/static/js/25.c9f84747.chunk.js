(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[25,261,355,356,451],{177:function(e,t,s){"use strict";s.r(t);var n=s(48),a=s(89),i=s(28),c=s(4),o=s(11),r=s(2),l=s.n(r),d=(s(601),s(752)),j=(s(750),s(411)),u=s(430),b=s(54),v=s(410),O=s(55),h=s(8),m=(s(226),s(36)),p=s(24),x=s(20),f=s(90),g=s(31),S=s(91),_=s(15),N=s(42),w=s(65),T=s(1),D=function(e){var t=e.tabname,s=e.tabData,a=e.prevData,i=e.cancelSessionApi,d=e.invitationApi,v=e.handleChange,m=void 0===v?{}:v,p=e.isDefaultCardPresent,x=e.handlePagination,S=(e.pageSize,e.documentSize),_=Object(n.a)(e,["tabname","tabData","prevData","cancelSessionApi","invitationApi","handleChange","isDefaultCardPresent","handlePagination","pageSize","documentSize"]),w=Object(r.useState)([10]),D=Object(o.a)(w,2),y=(D[0],D[1],Object(r.useState)(!1)),C=Object(o.a)(y,2),A=C[0],I=C[1],F=function(e,t,s){var n={sessionId:e,acceptance:t};if(I(!0),!p&&t&&!s)return h.history.push("/users/dashboard/settings/profile"),Object(g.Toast)({type:"info",message:"User needs to add default card to proceed futher"});d(n).then((function(){I(!1),m(),Object(g.Toast)({type:"success",message:"success"})})).catch((function(e){I(!1),Object(g.Toast)({type:"error",message:e.message||"Error"})}))},U=function(e){var t="".concat(window.location.host),s="".concat(window.location.protocol),n="".concat(s,"//").concat(t,"/").concat("trainer/profile/").concat(e);e&&window.open(n)};return Object(T.jsxs)("div",{className:"tabPanel_overview",children:[Object(T.jsx)("div",{className:"tabPanel_overview_left",children:Object(T.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(T.jsxs)("h3",{style:{textTransform:"capitalize"},children:[t," Sessions"]}),Object(T.jsxs)("div",{className:"TP_US_overview",children:[Object(T.jsx)("div",{className:"TP_US_overview_inner",children:null===s||void 0===s?void 0:s.map((function(e,s){var n;return Object(T.jsxs)(l.a.Fragment,{children:[Object(T.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(T.jsx)("div",{className:"TP_USession_dates",children:Object(T.jsxs)("h4",{children:[e.sessionDate.substr(8,2),Object(T.jsx)("span",{children:P[e.sessionDate.substr(5,2)]})]})}),Object(T.jsxs)("div",{className:"TP_USession_data",children:[Object(T.jsxs)("h2",{style:{textTransform:"capitalize"},children:[null===e||void 0===e?void 0:e.activity,"\xa0",Object(T.jsx)("span",{style:{textTransform:"lowerCase"},children:"with"})," ","\xa0",Object(T.jsx)("h2",{style:{textTransform:"capitalize"},children:null===e||void 0===e||null===(n=e.trainerDetail)||void 0===n?void 0:n.firstName})]}),Object(T.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(T.jsxs)("h5",{children:[Object(T.jsx)("img",{src:j.default,alt:"icon"}),Object(f.getFormatDate)(e.sessionStartTime,"LT",!0)]}),Object(T.jsxs)("h5",{children:[Object(T.jsx)("img",{src:u.default,alt:"icon"}),null===e||void 0===e?void 0:e.venue]})]}),"OnGoing"!==t&&Object(T.jsxs)("div",{className:"TP_USession_data_buttons",children:["Invited"===t?Object(T.jsxs)(T.Fragment,{children:[e.acceptance?Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("span",{className:"text-black mr-4",children:"Invited session"})}):Object(T.jsx)(T.Fragment,{children:"cancelled"!==e.sessionStatus?Object(T.jsx)(T.Fragment,{children:"Previous"!==t?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("button",{disabled:A,onClick:function(){return F(e.id,!1)},children:"Decline"}),Object(T.jsx)("button",{disabled:A,onClick:function(){return F(e.id,!0,e.paidByUser)},className:"text-success",children:"Accept"})]}):""}):Object(T.jsx)("button",{className:"text-danger",disabled:!0,children:"Cancelled"})}),Object(T.jsx)("button",{disabled:A,onClick:function(){return U(e.trainerId)},className:"text-primary",children:"View Trainer"})]}):Object(T.jsx)(T.Fragment,{children:"completed"===e.sessionStatus?Object(T.jsx)("button",{className:"text-primary",disabled:!0,children:"Completed"}):Object(T.jsx)(T.Fragment,{children:e.asFriend?Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)("span",{className:"text-black mr-4",children:"Invited session"}),Object(T.jsx)("button",{disabled:A,onClick:function(){return U(e.trainerId)},className:"text-primary",children:"View Trainer"})]}):Object(T.jsx)(T.Fragment,{children:"cancelled"!==e.sessionStatus?Object(T.jsx)(T.Fragment,{children:"Previous"!==t?Object(T.jsx)("button",{disabled:A,onClick:function(){return function(e){var t={sessionId:e,sessionStatus:"cancelled"};I(!0),i(t).then((function(){I(!1),m()})).catch((function(){return I(!1)}))}(e.id)},children:"Cancel"}):""}):Object(T.jsx)("button",{className:"text-danger",disabled:!0,children:"Cancelled"})})})}),"1on1"!==e.trainingType&&!e.asFriend&&"Previous"!==t&&Object(T.jsxs)("div",{className:"button_boarder",children:[Object(T.jsxs)("button",{onClick:function(){return function(e){var t="";"social"===e.trainingType?t="SOCIAL SESSION":"class"===e.trainingType?t="CREATE A CLASS":"1on1"===e.trainingType&&(t="1 ON 1 TRAINING");var s={location:{label:(null===e||void 0===e?void 0:e.city)||"",value:(null===e||void 0===e?void 0:e.city)||""},trainingVenue:{label:"clientLocation"===e.venue?"Your Location":"Trainer's Location",value:(null===e||void 0===e?void 0:e.venue)||""},preferedTrainingMode:(null===e||void 0===e?void 0:e.sessionType)||"",price:e.price||"",sessionType:t||"",trainingType:{label:(null===e||void 0===e?void 0:e.activity)||"",value:(null===e||void 0===e?void 0:e.activity)||""}},n={bookingData:{start_slot:e.sessionStartTime,end_slot:e.sessionEndTime,date:e.sessionDate},sessionData:s,selectedTrainerData:Object(c.a)({},e.trainerDetail),submittedData:Object(c.a)({},e)};null===_||void 0===_||_.updateUserDetails(n),h.history.push({pathname:"/user/with-friends"})}(e)},children:["Add Friends"," "]}),Object(T.jsx)("img",{src:O.default,alt:"icon"})]})]})]})]}),Object(T.jsx)("hr",{})]},s)}))}),(null===s||void 0===s?void 0:s.length)<S&&Object(T.jsxs)("button",{onClick:x,className:"viewMoreButton",children:["View all Session ",Object(T.jsx)(b.default,{})]})]})]})}),Object(T.jsx)("div",{className:"tabPanel_overview_right",children:Object(T.jsx)("div",{className:"TB_overview_right",children:Object(T.jsx)("div",{className:"TB_overview_row_two",children:Object(T.jsxs)("div",{className:"row_two_data",children:[Object(T.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(T.jsx)("div",{className:"row_two_scroll",children:null===a||void 0===a?void 0:a.map((function(e,t){var s,n,a,i={profilePicture:null===e||void 0===e||null===(s=e.trainerDetail)||void 0===s?void 0:s.profilePicture,userName:"".concat((null===e||void 0===e||null===(n=e.trainerDetail)||void 0===n?void 0:n.firstName)||""," ").concat((null===e||void 0===e||null===(a=e.trainerDetail)||void 0===a?void 0:a.lastName)||"")};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"row_previous_data",children:[Object(T.jsx)("div",{className:"row_previous_avater ml-2",children:Object(T.jsx)(N.UserAvatar,Object(c.a)(Object(c.a)({},i),{},{className:"img-md-2"}))}),Object(T.jsxs)("div",{className:"row_previous_header",children:[Object(T.jsxs)("h2",{className:"d-flex flex-wrap",style:{textTransform:"capitalize"},children:[e.activity,"\xa0",Object(T.jsx)("span",{style:{textTransform:"lowerCase"},children:"with"})," ","\xa0",Object(T.jsx)("h2",{className:"d-flex flex-wrap",style:{textTransform:"capitalize"},children:e.trainerDetail.firstName})]}),Object(T.jsx)("p",{children:"".concat(e.sessionDate.substr(8,2)," ").concat(P[e.sessionDate.substr(5,2)]," ").concat(e.sessionDate.substr(0,4))})]})]},t),Object(T.jsx)("hr",{})]})}))})]})})})})]})},P=(j.default,u.default,v.default,j.default,u.default,v.default,j.default,u.default,v.default,j.default,u.default,v.default,j.default,u.default,v.default,{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"}),y=Object(p.b)(null,(function(e){return Object(x.b)({userSession:m.userSession,cancelSession:m.cancelSession,invitationSession:m.invitationSession,updateUserDetails:m.updateUserDetails},e)}))((function(e){var t=l.a.useState({upcomingSessions:[],pastSessions:[],onGoingSessions:[],invitedSessions:[]}),s=Object(o.a)(t,2),n=s[0],j=s[1],u=Object(r.useState)({upcoming:0,past:0,invited:0}),b=Object(o.a)(u,2),v=b[0],O=b[1],h=Object(r.useState)({upcoming:0,past:0,invited:0}),m=Object(o.a)(h,2),p=m[0],x=m[1],f=Object(r.useState)(!1),N=Object(o.a)(f,2),P=N[0],y=N[1],C=Object(r.useState)(!0),A=Object(o.a)(C,2),I=A[0],F=A[1],U=Object(r.useState)("invited"),z=Object(o.a)(U,2),k=z[0],E=z[1];Object(r.useEffect)((function(){M(),window.scrollTo(0,0)}),[]);var L=function(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.userSession(t,v[k]).then((function(e){var n=e.data,o=e.documentCount,r={invited:"invitedSessions",upcoming:"upcomingSessions",past:"pastSessions"};x((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(i.a)({},t,o))})),j((function(e){var o=[].concat(Object(a.a)(e[r[t]]),Object(a.a)(n));return Object(c.a)(Object(c.a)({},e),{},Object(i.a)({},r[t],s?o:Object(a.a)(n)))})),F(!1)})).catch((function(e){Object(g.Toast)({type:"error",message:e.message||"Error"}),F(!1)}))},M=function(){var e=_.PaymentApi.getPaymentMethods;Object(S.api)(Object(c.a)({},e)).then((function(e){var t=(e.data[0]||{}).default;y(t)}))},J=function(){O((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(i.a)({},k,e[k]+1||0))}))};return Object(r.useEffect)((function(){L(k,!0)}),[v]),Object(T.jsx)("div",{className:"outter_user_container",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"inner_user_container ",children:[Object(T.jsx)("div",{className:"userSession_heading",children:Object(T.jsx)("h2",{children:"My Session"})}),Object(T.jsx)("div",{className:"US_tabs_wrapper",children:Object(T.jsxs)(d.d,{defaultTab:"invited",onChange:function(e){!function(e,t){var s={invited:"invitedSessions",upcoming:"upcomingSessions",past:"pastSessions"}[e];E(e),j((function(t){var n;return(null===(n=t[s])||void 0===n?void 0:n.length)>0||(F(!0),L(e)),t}))}(e)},children:[Object(T.jsxs)(d.b,{children:[Object(T.jsx)(d.a,{tabFor:"invited",children:"Invited"}),Object(T.jsx)(d.a,{tabFor:"upcoming",children:"Upcoming"}),Object(T.jsx)(d.a,{tabFor:"past",children:"Previous"})]}),Object(T.jsx)("div",{className:"tabPanel_outter",children:Object(T.jsx)(d.c,{tabId:"invited",children:I?Object(T.jsx)(w.CommonPageLoader,{}):Object(T.jsx)(D,Object(c.a)({tabname:"Invited",tabData:n.invitedSessions,prevData:n.pastSessions,cancelSessionApi:e.cancelSession,invitationApi:e.invitationSession,handleChange:function(){return L("invited")},isDefaultCardPresent:P,handlePagination:J,pageSize:v.invited,documentSize:p.invited},e))})}),Object(T.jsx)("div",{className:"tabPanel_outter",children:Object(T.jsx)(d.c,{tabId:"upcoming",children:I?Object(T.jsx)(w.CommonPageLoader,{}):Object(T.jsx)(D,Object(c.a)({tabname:"Upcoming",tabData:n.upcomingSessions,prevData:n.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return L("upcoming")},handlePagination:J,pageSize:v.upcoming,documentSize:p.upcoming},e))})}),Object(T.jsx)("div",{className:"tabPanel_outter",children:Object(T.jsx)(d.c,{tabId:"pass",children:Object(T.jsx)(D,Object(c.a)({tabname:"Moto Pass",tabData:n.pastSessions,prevData:n.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return L()}},e))})}),Object(T.jsx)("div",{className:"tabPanel_outter",children:Object(T.jsx)(d.c,{tabId:"past",children:I?Object(T.jsx)(w.CommonPageLoader,{}):Object(T.jsx)(D,Object(c.a)({tabname:"Previous",tabData:n.pastSessions,prevData:n.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return L("past")},handlePagination:J,pageSize:v.past,documentSize:p.past},e))})}),Object(T.jsx)("div",{className:"tabPanel_outter",children:Object(T.jsx)(d.c,{tabId:"ongoing",children:Object(T.jsx)(D,Object(c.a)({tabname:"OnGoing",tabData:n.onGoingSessions,prevData:n.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return L()},handlePagination:J},e))})})]})})]})})})}));t.default=y},410:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Jenny.c50273b9.png"},411:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Availability Icon.ad0517cb.svg"},430:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Location Icon.cbb0b32d.svg"},601:function(e,t,s){}}]);