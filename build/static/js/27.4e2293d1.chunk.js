(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[27,243,370,371,465],{183:function(e,s,t){"use strict";t.r(s);var a=t(50),c=t(92),i=t(32),n=t(4),l=t(11),r=t(2),o=t.n(r),d=(t(615),t(795)),j=(t(792),t(427)),b=t(430),h=t(8),u=t(57),m=t(428),v=t(66),O=t(40),x=t(27),p=t(23),_=t(93),g=t(9),S=t(94),N=t(35),f=t(43),w=t(67),P=t(242),T=t.n(P),D=t(1),C=function(e){var s=e.datas,t=void 0===s?[]:s,a=e.handleSessionStatus,c=e.handleCancel,i=(e.isLoading,e.handlePagination),n=(e.pageSize,e.documentSize),d=Object(r.useState)([3]),j=Object(l.a)(d,2);j[0],j[1],Math.ceil(n/10);return Object(D.jsxs)("div",{className:"tabPanel_overview d-flex",children:[Object(D.jsx)("div",{className:"tabPanel_overview_left w-100",children:Object(D.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(D.jsx)("h3",{children:"Upcoming Sessions"}),Object(D.jsxs)("div",{className:"TP_US_overview",children:[Object(D.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?t.map((function(e,s){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(D.jsx)("div",{className:"TP_USession_dates",children:Object(D.jsxs)("h4",{children:[e.date,Object(D.jsx)("span",{children:e.month})]})}),Object(D.jsxs)("div",{className:"TP_USession_data",children:[Object(D.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(D.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(D.jsxs)("h5",{children:[Object(D.jsx)("img",{src:e.imgAva,alt:"icon"}),e.avaTime]}),Object(D.jsxs)("h5",{className:"text-capitalize",children:[Object(D.jsx)("img",{src:e.imgLoc,alt:"icon"}),e.loc]})]}),Object(D.jsxs)("div",{className:"d-flex align-items-center mt-2 TP_USession_data_buttons",children:["cancelled"!==e.sessionStatus?Object(D.jsx)("button",{onClick:function(){return c(e.id)},className:"mr-2",children:"Cancel"}):Object(D.jsx)("div",{className:"d-flex align-items-center",children:Object(D.jsx)("p",{className:"text-danger text-underline mb-0 fs-15 fw-600 mr-2",children:"Cancelled"})}),"completed"!==e.sessionStatus?Object(D.jsx)("div",{className:"TP_USession_data_buttons mt-0",children:Object(D.jsx)("button",{className:"text-primary",onClick:function(){return a(e.id,"completed")},children:"Complete"})}):Object(D.jsx)("div",{children:Object(D.jsx)("p",{children:"Completed"})})]})]})]},s),Object(D.jsx)("hr",{})]})})):Object(D.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})}),(null===t||void 0===t?void 0:t.length)<n&&Object(D.jsxs)("button",{onClick:i,className:"viewMoreButton",children:["View all Session ",Object(D.jsx)(u.default,{})]})]})]})}),Object(D.jsx)("div",{className:"tabPanel_overview_right",children:Object(D.jsx)("div",{className:"TB_overview_right",children:Object(D.jsx)("div",{className:"TB_overview_row_two",children:Object(D.jsxs)("div",{className:"row_two_data",children:[Object(D.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(D.jsx)("div",{className:"row_two_scroll",children:t.length>0?t.map((function(e,s){return Object(D.jsxs)(o.a.Fragment,{children:[Object(D.jsxs)("div",{className:"row_previous_data",children:[Object(D.jsx)("div",{className:"row_previous_avater",children:Object(D.jsx)("img",{src:e.previousImg,alt:"profile"})}),Object(D.jsxs)("div",{className:"row_previous_header",children:[Object(D.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(D.jsx)("p",{children:e.prevDate})]})]}),Object(D.jsx)("hr",{})]},s)})):Object(D.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})})]})})})})]})},U=function(e){var s=e.datas,t=void 0===s?[]:s,a=e.handleSessionStatus,c=e.handleCancel,i=e.handlePagination,n=(e.pageSize,e.documentSize),o=Object(r.useState)([3]),d=Object(l.a)(o,2);d[0],d[1],Math.ceil(n/10);return Object(D.jsx)("div",{className:"tabPanel_overview d-flex",children:Object(D.jsx)("div",{className:"tabPanel_overview_left w-100",children:Object(D.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(D.jsx)("h3",{children:"Upcoming Sessions"}),Object(D.jsxs)("div",{className:"TP_US_overview",children:[Object(D.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?t.map((function(e,s){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(D.jsx)("div",{className:"TP_USession_dates",children:Object(D.jsxs)("h4",{children:[e.date,Object(D.jsx)("span",{children:e.month})]})}),Object(D.jsxs)("div",{className:"TP_USession_data",children:[Object(D.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(D.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(D.jsxs)("h5",{children:[Object(D.jsx)("img",{src:e.imgAva,alt:"icon"}),e.avaTime]}),Object(D.jsxs)("h5",{className:"text-capitalize",children:[Object(D.jsx)("img",{src:e.imgLoc,alt:"icon"}),e.loc]})]}),"completed"!==e.sessionStatus?Object(D.jsxs)("div",{className:"TP_USession_data_buttons",children:[Object(D.jsx)("button",{onClick:function(){return c(e.id)},children:"Cancel"}),T()(T.a.tz("America/New_York").format("YYYY MM DD HH:MM")).isAfter(T.a.tz(e.sessionStartTime,"America/New_York").format("YYYY MM DD HH:MM"))?Object(D.jsx)("button",{className:"text-primary",onClick:function(){return a(e.id,"completed")},children:"Complete"}):null]}):Object(D.jsx)("div",{children:Object(D.jsx)("p",{children:"Completed"})})]})]},s),Object(D.jsx)("hr",{})]})})):Object(D.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Upcoming Session"})}),(null===t||void 0===t?void 0:t.length)<n&&Object(D.jsxs)("button",{onClick:i,className:"viewMoreButton",children:["View all Session ",Object(D.jsx)(u.default,{})]})]})]})})})},y=function(){return Object(D.jsx)("div",{className:"tabPanel_overview",children:Object(D.jsx)("div",{className:"tabPanel_overview_right",children:Object(D.jsx)("div",{className:"TB_overview_right",children:Object(D.jsx)("div",{className:"TB_overview_row_one",children:Object(D.jsxs)("div",{className:"row_one_data",children:[Object(D.jsx)("h2",{children:"Want to Do More for Less?"}),Object(D.jsx)("p",{children:"Save money by purchasing multiple sessions at once, eligible for use within 60 days of the purchase date."}),Object(D.jsxs)(h.a,{to:"/",children:["Get A pass ",Object(D.jsx)(u.default,{})," "]})]})})})})})},M=function(e){var s=e.tabname,t=e.tabData,c=e.prevData,i=e.cancelSessionApi,d=(e.invitationApi,e.handleChange),h=void 0===d?{}:d,m=(e.isDefaultCardPresent,e.handleSessionStatus),v=e.handlePagination,O=(e.pageSize,e.documentSize),x=e.currentTab,p=(Object(a.a)(e,["tabname","tabData","prevData","cancelSessionApi","invitationApi","handleChange","isDefaultCardPresent","handleSessionStatus","handlePagination","pageSize","documentSize","currentTab"]),Object(r.useState)([3])),_=Object(l.a)(p,2),g=(_[0],_[1],Object(r.useState)(!1)),S=Object(l.a)(g,2),w=(S[0],S[1]);Math.ceil(O/10);return Object(D.jsxs)("div",{className:"tabPanel_overview",children:[Object(D.jsx)("div",{className:"tabPanel_overview_left",children:Object(D.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(D.jsxs)("h3",{style:{textTransform:"capitalize"},children:[s," Sessions"]}),Object(D.jsxs)("div",{className:"TP_US_overview",children:[Object(D.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?null===t||void 0===t?void 0:t.map((function(e,t){return Object(D.jsxs)(o.a.Fragment,{children:[Object(D.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(D.jsx)("div",{className:"TP_USession_dates",children:Object(D.jsxs)("h4",{children:[e.date,Object(D.jsx)("span",{children:e.month})]})}),Object(D.jsxs)("div",{className:"TP_USession_data",children:[Object(D.jsx)("h2",{style:{textTransform:"capitalize"},children:null===e||void 0===e?void 0:e.heading}),Object(D.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(D.jsxs)("h5",{children:[Object(D.jsx)("img",{src:j.default,alt:"icon"}),e.avaTime]}),Object(D.jsxs)("h5",{children:[Object(D.jsx)("img",{src:b.default,alt:"icon"}),e.loc]})]}),"Ongoing"!==s&&Object(D.jsx)("div",{className:"TP_USession_data_buttons",children:"completed"!==e.sessionStatus?Object(D.jsx)("div",{className:"TP_USession_data_buttons",children:"cancelled"!==e.sessionStatus?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("button",{onClick:function(){return function(e){var s={sessionId:e,sessionStatus:"cancelled"};w(!0),i(s).then((function(e){var s=e.message;w(!1),Object(N.Toast)({type:"success",message:s}),h(x)})).catch((function(){return w(!1)}))}(e.id)},children:"Cancel"}),Object(D.jsx)("button",{className:"text-primary",onClick:function(){return m(e.id,"completed")},children:"Complete"})]}):Object(D.jsx)("div",{children:Object(D.jsx)("p",{className:"text-danger text-underline",children:"Cancelled"})})}):Object(D.jsx)("div",{children:Object(D.jsx)("p",{children:"Completed"})})})]})]}),Object(D.jsx)("hr",{})]},t)})):Object(D.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(D.jsx)("h4",{children:"No Data Found"})})}),(null===t||void 0===t?void 0:t.length)<O&&Object(D.jsxs)("button",{onClick:v,className:"viewMoreButton",children:["View all Session ",Object(D.jsx)(u.default,{})]})]})]})}),Object(D.jsx)("div",{className:"tabPanel_overview_right",children:Object(D.jsx)("div",{className:"TB_overview_right",children:Object(D.jsx)("div",{className:"TB_overview_row_two",children:Object(D.jsxs)("div",{className:"row_two_data",children:[Object(D.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(D.jsx)("div",{className:"row_two_scroll",children:c.length>0?c.map((function(e,s){var t,a,c,i={profilePicture:null===e||void 0===e||null===(t=e.userDetail)||void 0===t?void 0:t.profilePicture,userName:"".concat((null===e||void 0===e||null===(a=e.userDetail)||void 0===a?void 0:a.firstName)||""," ").concat((null===e||void 0===e||null===(c=e.userDetail)||void 0===c?void 0:c.lastName)||"")};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"row_previous_data",children:[Object(D.jsx)("div",{className:"row_previous_avater ml-2",children:Object(D.jsx)(f.UserAvatar,Object(n.a)(Object(n.a)({},i),{},{className:"img-md-2"}))}),Object(D.jsxs)("div",{className:"row_previous_header",children:[Object(D.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(D.jsx)("p",{children:e.prevDate})]})]},s),Object(D.jsx)("hr",{})]})})):Object(D.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})})]})})})})]})},z=Object(x.b)((function(e){return{sessionData:e.trainerReducer.sessionData}}),(function(e){return Object(p.b)({getTrainerSessionDetailsApi:v.getTrainerSessionDetails,cancelSession:O.cancelSession,updateUserDetails:O.updateUserDetails},e)}))((function(e){e.sessionData;var s=e.getTrainerSessionDetailsApi,t=e.cancelSession,a=e.updateUserDetails,o=Object(r.useState)({upcomingSessions:[],pastSessions:[],invitedSessions:[]}),h=Object(l.a)(o,2),u=h[0],v=h[1],O=Object(r.useState)({upcoming:0,past:0}),x=Object(l.a)(O,2),p=x[0],f=x[1],P=Object(r.useState)({upcoming:0,past:0}),T=Object(l.a)(P,2),z=T[0],A=T[1],F=Object(r.useState)(!1),I=Object(l.a)(F,2),Y=I[0],k=I[1],L=Object(r.useState)(!0),B=Object(l.a)(L,2),E=B[0],H=B[1],V=Object(r.useState)("upcoming"),J=Object(l.a)(V,2),R=J[0],G=J[1],K=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s(e,p[e]).then((function(s){var a=s.data||[],l=s.documentCount||0,r={upcoming:"upcomingSessions",past:"pastSessions"};console.log(a),A((function(s){return Object(n.a)(Object(n.a)({},s),{},Object(i.a)({},e,l))}));var o=null===a||void 0===a?void 0:a.map((function(e){var s=e.title,t=e.venue,a=e.sessionDate,c=e.sessionStartTime,i=e.id,n=e.sessionStatus,l=e.userDetail;return{date:Object(_.getFormatDate)(a,"D"),month:Object(_.getFormatDate)(a,"MMM"),heading:s,imgAva:j.default,avaTime:"".concat(Object(_.getFormatDate)(c,"LT",!0)," EST"),imgLoc:b.default,loc:t,previousImg:m.default,prevHeading:"Yoga with Kane",prevDate:Object(_.getFormatDate)(c,"DD MMMM YYYY",!0),sessionStatus:n,userDetail:l,sessionDate:a,sessionStartTime:c,id:i}}));v((function(s){var a=[].concat(Object(c.a)(s[r[e]]||[]),Object(c.a)(o));return Object(n.a)(Object(n.a)({},s),{},Object(i.a)({},r[e],t?a:o))})),H(!1)})).catch((function(e){H(!1),Object(N.Toast)({type:"error",message:e.message||"Error"})}))},W=function(e,s){var t={sessionId:e,sessionStatus:s},a=g.TrainerApi.changeSessionStatus;a.body=t,Object(S.api)(Object(n.a)({},a)).then((function(e){var s=e.data;console.log(s),K(R)})).catch((function(e){console.log(e),Object(N.Toast)({type:"error",message:e.message||""})}))},q=function(e){var s={sessionId:e,sessionStatus:"cancelled"};k(!0),t(s).then((function(e){var s=e.message;k(!1),Object(N.Toast)({type:"success",message:s}),K(R)})).catch((function(){return k(!1)}))},Q=function(){f((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(i.a)({},R,e[R]+1||0))}))};return Object(r.useEffect)((function(){K(R,!0)}),[p]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"outter_user_container",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"inner_user_container ",children:[Object(D.jsx)("div",{className:"userSession_heading",children:Object(D.jsx)("h2",{children:"My Session"})}),Object(D.jsx)("div",{className:"US_tabs_wrapper",children:Object(D.jsxs)(d.d,{defaultTab:"upcoming",onChange:function(e,s){var t={upcoming:"upcomingSessions",past:"pastSessions"}[e];G(e),v((function(s){var a;return(null===(a=s[t])||void 0===a?void 0:a.length)>0||(H(!0),K(e)),s}))},children:[Object(D.jsxs)(d.b,{children:[Object(D.jsx)(d.a,{tabFor:"upcoming",children:"Upcoming"}),Object(D.jsx)(d.a,{tabFor:"past",children:"Previous"})]}),Object(D.jsx)("div",{className:"tabPanel_outter",children:Object(D.jsx)(d.c,{tabId:"overview",children:E?Object(D.jsx)(w.CommonPageLoader,{}):Object(D.jsx)(C,{datas:u.upcomingSessions,handleSessionStatus:W,handleCancel:q,isLoading:Y,handlePagination:Q,currentTab:R})})}),Object(D.jsx)("div",{className:"tabPanel_outter",children:Object(D.jsx)(d.c,{tabId:"upcoming",children:E?Object(D.jsx)(w.CommonPageLoader,{}):Object(D.jsx)(U,{datas:u.upcomingSessions,handleSessionStatus:W,handleCancel:q,handlePagination:Q,pageSize:p.upcoming,documentSize:z.upcoming,currentTab:R})})}),Object(D.jsx)("div",{className:"tabPanel_outter",children:Object(D.jsx)(d.c,{tabId:"pass",children:Object(D.jsx)(y,{})})}),Object(D.jsx)("div",{className:"tabPanel_outter",children:Object(D.jsx)(d.c,{tabId:"past",children:E?Object(D.jsx)(w.CommonPageLoader,{}):Object(D.jsx)(M,{tabname:"Previous",tabData:u.pastSessions,prevData:u.pastSessions,handleSessionStatus:W,cancelSessionApi:q,handleChange:function(){return K(R)},updateUserDetails:a,handlePagination:Q,pageSize:p.past,documentSize:z.past,currentTab:R})})}),Object(D.jsx)("div",{className:"tabPanel_outter",children:Object(D.jsx)(d.c,{tabId:"ongoing",children:Object(D.jsx)(M,{tabname:"OnGoing",tabData:u.upcomingSessions,prevData:u.pastSessions,handleSessionStatus:W,cancelSessionApi:q,handleChange:function(){return K(R)},updateUserDetails:a})})})]})})]})})})})}));s.default=z},427:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Availability Icon.ad0517cb.svg"},428:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Jenny.c50273b9.png"},430:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Location Icon.cbb0b32d.svg"},615:function(e,s,t){}}]);