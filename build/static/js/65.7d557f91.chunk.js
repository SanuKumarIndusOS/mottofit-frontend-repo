(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[65,72,214,340,341,428],{148:function(e,s,t){"use strict";t.r(s);var c=t(4),a=t(13),i=t(2),n=t.n(i),r=(t(547),t(703)),l=(t(702),t(400)),d=t(402),j=t(8),o=t(50),b=t(397),h=t(61),v=t(38),O=t(33),u=t(21),m=t(85),x=t(16),_=t(86),p=t(40),N=t(1),g=function(e){var s=e.datas,t=void 0===s?[]:s,c=e.handleSessionStatus,r=(e.handleCancel,e.isLoading,Object(i.useState)([3])),l=Object(a.a)(r,2),d=(l[0],l[1]);return Object(N.jsxs)("div",{className:"tabPanel_overview d-flex",children:[Object(N.jsx)("div",{className:"tabPanel_overview_left w-100",children:Object(N.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(N.jsx)("h3",{children:"Upcoming Sessions"}),Object(N.jsxs)("div",{className:"TP_US_overview",children:[Object(N.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(N.jsx)("div",{className:"TP_USession_dates",children:Object(N.jsxs)("h4",{children:[e.date,Object(N.jsx)("span",{children:e.month})]})}),Object(N.jsxs)("div",{className:"TP_USession_data",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(N.jsxs)("h5",{children:[Object(N.jsx)("img",{src:e.imgAva,alt:"icon"}),e.avaTime]}),Object(N.jsxs)("h5",{className:"text-capitalize",children:[Object(N.jsx)("img",{src:e.imgLoc,alt:"icon"}),e.loc]})]}),Object(N.jsxs)("div",{className:"d-flex align-items-center mt-2 TP_USession_data_buttons",children:["cancelled"!==e.sessionStatus?Object(N.jsx)("button",{disabled:!0,className:"mr-2 disable-btn",children:"Cancel"}):Object(N.jsx)("div",{className:"d-flex align-items-center",children:Object(N.jsx)("p",{className:"text-danger text-underline mb-0 fs-15 fw-600 mr-2",children:"Cancelled"})}),"completed"!==e.sessionStatus?Object(N.jsxs)("div",{className:"TP_USession_data_buttons mt-0",children:[Object(N.jsx)("button",{children:"Reschedule"}),Object(N.jsx)("button",{className:"text-primary",onClick:function(){return c(e.id,"completed")},children:"Complete"})]}):Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"Completed"})})]})]})]},s),Object(N.jsx)("hr",{})]})})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})}),t.length>0?Object(N.jsxs)("button",{onClick:function(){d((function(e){return e+1}))},className:"viewMoreButton",children:["View all Session ",Object(N.jsx)(o.default,{})]}):null]})]})}),Object(N.jsx)("div",{className:"tabPanel_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_row_two",children:Object(N.jsxs)("div",{className:"row_two_data",children:[Object(N.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(N.jsx)("div",{className:"row_two_scroll",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(n.a.Fragment,{children:[Object(N.jsxs)("div",{className:"row_previous_data",children:[Object(N.jsx)("div",{className:"row_previous_avater",children:Object(N.jsx)("img",{src:e.previousImg,alt:"profile"})}),Object(N.jsxs)("div",{className:"row_previous_header",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsx)("p",{children:e.prevDate})]})]}),Object(N.jsx)("hr",{})]},s)})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})})]})})})})]})},S=function(e){var s=e.datas,t=void 0===s?[]:s,c=e.handleSessionStatus,n=Object(i.useState)([3]),r=Object(a.a)(n,2),l=(r[0],r[1]);return Object(N.jsx)("div",{className:"tabPanel_overview d-flex",children:Object(N.jsx)("div",{className:"tabPanel_overview_left w-100",children:Object(N.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(N.jsx)("h3",{children:"Upcoming Sessions"}),Object(N.jsxs)("div",{className:"TP_US_overview",children:[Object(N.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(N.jsx)("div",{className:"TP_USession_dates",children:Object(N.jsxs)("h4",{children:[e.date,Object(N.jsx)("span",{children:e.month})]})}),Object(N.jsxs)("div",{className:"TP_USession_data",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(N.jsxs)("h5",{children:[Object(N.jsx)("img",{src:e.imgAva,alt:"icon"}),e.avaTime]}),Object(N.jsxs)("h5",{className:"text-capitalize",children:[Object(N.jsx)("img",{src:e.imgLoc,alt:"icon"}),e.loc]})]}),"completed"!==e.sessionStatus?Object(N.jsxs)("div",{className:"TP_USession_data_buttons",children:[Object(N.jsx)("button",{children:"Reschedule"}),Object(N.jsx)("button",{className:"disable-btn",disabled:!0,children:"Cancel"}),Object(N.jsx)("button",{className:"text-primary",onClick:function(){return c(e.id,"completed")},children:"Complete"})]}):Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"Completed"})})]})]},s),Object(N.jsx)("hr",{})]})})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})}),t.length>0?Object(N.jsxs)("button",{onClick:function(){l((function(e){return e+1}))},className:"viewMoreButton",children:["View all Session ",Object(N.jsx)(o.default,{})]}):null]})]})})})},f=function(){return Object(N.jsx)("div",{className:"tabPanel_overview",children:Object(N.jsx)("div",{className:"tabPanel_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_row_one",children:Object(N.jsxs)("div",{className:"row_one_data",children:[Object(N.jsx)("h2",{children:"Want to Do More for Less?"}),Object(N.jsx)("p",{children:"Save money by purchasing multiple sessions at once, eligible for use within 60 days of the purchase date."}),Object(N.jsxs)(j.a,{to:"/",children:["Get A pass ",Object(N.jsx)(o.default,{})," "]})]})})})})})},w=function(e){var s=e.datas,t=void 0===s?[]:s;return Object(N.jsx)("div",{className:"tabPanel_overview d-flex",children:Object(N.jsx)("div",{className:"tabPanel_overview_right w-100",children:Object(N.jsx)("div",{className:"TB_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_row_two",children:Object(N.jsxs)("div",{className:"row_two_data",children:[Object(N.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(N.jsx)("div",{className:"row_two_scroll",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"row_previous_data",children:[Object(N.jsx)("div",{className:"row_previous_avater",children:Object(N.jsx)("img",{src:e.previousImg,alt:"profile"})}),Object(N.jsxs)("div",{className:"row_previous_header",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsx)("p",{children:e.prevDate})]})]},s),Object(N.jsx)("hr",{})]})})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})})]})})})})})},T=Object(O.b)((function(e){return{sessionData:e.trainerReducer.sessionData}}),(function(e){return Object(u.b)({getTrainerSessionDetailsApi:h.getTrainerSessionDetails,cancelSession:v.cancelSession},e)}))((function(e){var s=e.sessionData,t=e.getTrainerSessionDetailsApi,n=e.cancelSession,j=Object(i.useState)({upcomingSessions:[],pastSessions:[],onGoingSessions:[]}),o=Object(a.a)(j,2),h=o[0],v=o[1],O=Object(i.useState)(!1),u=Object(a.a)(O,2),T=u[0],P=u[1];Object(i.useEffect)((function(){D()}),[]);var D=function(){t().then((function(e){var t={};Object.keys(e).forEach((function(c){t[c]=e[c].map((function(e){var t=e.title,c=e.venue,a=e.sessionDate,i=e.sessionStartTime,n=e.id,r=e.sessionStatus;return{date:Object(m.getFormatDate)(a,"D"),month:Object(m.getFormatDate)(a,"MMM"),heading:t,imgAva:l.default,avaTime:"".concat(Object(m.getFormatDate)(i,"LT",!0)," EST"),imgLoc:d.default,loc:c,previousImg:b.default,prevHeading:"Yoga with Kane",prevDate:Object(m.getFormatDate)(s,"DD MMMM YYYY"),sessionStatus:r,id:n}}))})),v(t)}))},y=function(e,s){var t={sessionId:e,sessionStatus:s},a=x.TrainerApi.changeSessionStatus;a.body=t,Object(_.api)(Object(c.a)({},a)).then((function(e){var s=e.data;console.log(s),D()})).catch((function(e){console.log(e),Object(p.Toast)({type:"error",message:e.message||""})}))};return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"outter_user_container",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"inner_user_container ",children:[Object(N.jsx)("div",{className:"userSession_heading",children:Object(N.jsx)("h2",{children:"My Session"})}),Object(N.jsx)("div",{className:"US_tabs_wrapper",children:Object(N.jsxs)(r.d,{defaultTab:"overview",children:[Object(N.jsxs)(r.b,{children:[Object(N.jsx)(r.a,{tabFor:"overview",children:"Overview"}),Object(N.jsx)(r.a,{tabFor:"upcoming",children:"Upcoming"}),Object(N.jsx)(r.a,{tabFor:"pass",children:"Motto pass"}),Object(N.jsx)(r.a,{tabFor:"previous",children:"Previous"})]}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"overview",children:Object(N.jsx)(g,{datas:h.upcomingSessions,handleSessionStatus:y,handleCancel:function(e){var s={sessionId:e,sessionStatus:"cancelled"};P(!0),n(s).then((function(){P(!1),D()})).catch((function(){return P(!1)}))},isLoading:T})})}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"upcoming",children:Object(N.jsx)(S,{datas:h.upcomingSessions,handleSessionStatus:y})})}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"pass",children:Object(N.jsx)(f,{})})}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"previous",children:Object(N.jsx)(w,{datas:h.pastSessions,handleSessionStatus:y})})})]})})]})})})})}));s.default=T},189:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return i}));t(2);var c=t(148),a=t(1);function i(){return Object(a.jsx)("div",{children:Object(a.jsx)(c.default,{})})}},397:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Jenny.c50273b9.png"},400:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Availability Icon.ad0517cb.svg"},402:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Location Icon.cbb0b32d.svg"},547:function(e,s,t){}}]);
//# sourceMappingURL=65.7d557f91.chunk.js.map