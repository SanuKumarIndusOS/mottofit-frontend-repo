(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[72,224,351,352,447],{148:function(e,s,t){"use strict";t.r(s);var c=t(4),a=t(14),i=t(2),n=t.n(i),r=(t(548),t(729)),l=(t(728),t(400)),j=t(402),d=t(8),o=t(53),b=t(397),h=t(62),v=t(39),m=t(33),O=t(21),u=t(85),x=t(16),_=t(86),p=t(36),N=t(1),g=function(e){var s=e.datas,t=void 0===s?[]:s,c=e.handleSessionStatus,r=e.handleCancel,l=(e.isLoading,Object(i.useState)([3])),j=Object(a.a)(l,2),d=(j[0],j[1]);return Object(N.jsxs)("div",{className:"tabPanel_overview d-flex",children:[Object(N.jsx)("div",{className:"tabPanel_overview_left w-100",children:Object(N.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(N.jsx)("h3",{children:"Upcoming Sessions"}),Object(N.jsxs)("div",{className:"TP_US_overview",children:[Object(N.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(N.jsx)("div",{className:"TP_USession_dates",children:Object(N.jsxs)("h4",{children:[e.date,Object(N.jsx)("span",{children:e.month})]})}),Object(N.jsxs)("div",{className:"TP_USession_data",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(N.jsxs)("h5",{children:[Object(N.jsx)("img",{src:e.imgAva,alt:"icon"}),e.avaTime]}),Object(N.jsxs)("h5",{className:"text-capitalize",children:[Object(N.jsx)("img",{src:e.imgLoc,alt:"icon"}),e.loc]})]}),Object(N.jsxs)("div",{className:"d-flex align-items-center mt-2 TP_USession_data_buttons",children:["cancelled"!==e.sessionStatus?Object(N.jsx)("button",{onClick:function(){return r(e.id)},className:"mr-2",children:"Cancel"}):Object(N.jsx)("div",{className:"d-flex align-items-center",children:Object(N.jsx)("p",{className:"text-danger text-underline mb-0 fs-15 fw-600 mr-2",children:"Cancelled"})}),"completed"!==e.sessionStatus?Object(N.jsxs)("div",{className:"TP_USession_data_buttons mt-0",children:[Object(N.jsx)("button",{children:"Reschedule"}),Object(N.jsx)("button",{className:"text-primary",onClick:function(){return c(e.id,"completed")},children:"Complete"})]}):Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"Completed"})})]})]})]},s),Object(N.jsx)("hr",{})]})})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})}),t.length>0?Object(N.jsxs)("button",{onClick:function(){d((function(e){return e+1}))},className:"viewMoreButton",children:["View all Session ",Object(N.jsx)(o.default,{})]}):null]})]})}),Object(N.jsx)("div",{className:"tabPanel_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_row_two",children:Object(N.jsxs)("div",{className:"row_two_data",children:[Object(N.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(N.jsx)("div",{className:"row_two_scroll",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(n.a.Fragment,{children:[Object(N.jsxs)("div",{className:"row_previous_data",children:[Object(N.jsx)("div",{className:"row_previous_avater",children:Object(N.jsx)("img",{src:e.previousImg,alt:"profile"})}),Object(N.jsxs)("div",{className:"row_previous_header",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsx)("p",{children:e.prevDate})]})]}),Object(N.jsx)("hr",{})]},s)})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})})]})})})})]})},S=function(e){var s=e.datas,t=void 0===s?[]:s,c=e.handleSessionStatus,n=e.handleCancel,r=Object(i.useState)([3]),l=Object(a.a)(r,2),j=(l[0],l[1]);return Object(N.jsx)("div",{className:"tabPanel_overview d-flex",children:Object(N.jsx)("div",{className:"tabPanel_overview_left w-100",children:Object(N.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(N.jsx)("h3",{children:"Upcoming Sessions"}),Object(N.jsxs)("div",{className:"TP_US_overview",children:[Object(N.jsx)("div",{className:"TP_US_overview_inner",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(N.jsx)("div",{className:"TP_USession_dates",children:Object(N.jsxs)("h4",{children:[e.date,Object(N.jsx)("span",{children:e.month})]})}),Object(N.jsxs)("div",{className:"TP_USession_data",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(N.jsxs)("h5",{children:[Object(N.jsx)("img",{src:e.imgAva,alt:"icon"}),e.avaTime]}),Object(N.jsxs)("h5",{className:"text-capitalize",children:[Object(N.jsx)("img",{src:e.imgLoc,alt:"icon"}),e.loc]})]}),"completed"!==e.sessionStatus?Object(N.jsxs)("div",{className:"TP_USession_data_buttons",children:[Object(N.jsx)("button",{children:"Reschedule"}),Object(N.jsx)("button",{onClick:function(){return n(e.id)},children:"Cancel"}),Object(N.jsx)("button",{className:"text-primary",onClick:function(){return c(e.id,"completed")},children:"Complete"})]}):Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"Completed"})})]})]},s),Object(N.jsx)("hr",{})]})})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})}),t.length>0?Object(N.jsxs)("button",{onClick:function(){j((function(e){return e+1}))},className:"viewMoreButton",children:["View all Session ",Object(N.jsx)(o.default,{})]}):null]})]})})})},f=function(){return Object(N.jsx)("div",{className:"tabPanel_overview",children:Object(N.jsx)("div",{className:"tabPanel_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_row_one",children:Object(N.jsxs)("div",{className:"row_one_data",children:[Object(N.jsx)("h2",{children:"Want to Do More for Less?"}),Object(N.jsx)("p",{children:"Save money by purchasing multiple sessions at once, eligible for use within 60 days of the purchase date."}),Object(N.jsxs)(d.a,{to:"/",children:["Get A pass ",Object(N.jsx)(o.default,{})," "]})]})})})})})},w=function(e){var s=e.datas,t=void 0===s?[]:s;return Object(N.jsx)("div",{className:"tabPanel_overview d-flex",children:Object(N.jsx)("div",{className:"tabPanel_overview_right w-100",children:Object(N.jsx)("div",{className:"TB_overview_right",children:Object(N.jsx)("div",{className:"TB_overview_row_two",children:Object(N.jsxs)("div",{className:"row_two_data",children:[Object(N.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(N.jsx)("div",{className:"row_two_scroll",children:t.length>0?t.map((function(e,s){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"row_previous_data",children:[Object(N.jsx)("div",{className:"row_previous_avater",children:Object(N.jsx)("img",{src:e.previousImg,alt:"profile"})}),Object(N.jsxs)("div",{className:"row_previous_header",children:[Object(N.jsx)("h2",{className:"text-capitalize",children:e.heading}),Object(N.jsx)("p",{children:e.prevDate})]})]},s),Object(N.jsx)("hr",{})]})})):Object(N.jsx)("h3",{className:"my-5 py-5 text-center",children:"No Data Found"})})]})})})})})},T=Object(m.b)((function(e){return{sessionData:e.trainerReducer.sessionData}}),(function(e){return Object(O.b)({getTrainerSessionDetailsApi:h.getTrainerSessionDetails,cancelSession:v.cancelSession},e)}))((function(e){var s=e.sessionData,t=e.getTrainerSessionDetailsApi,n=e.cancelSession,d=Object(i.useState)({upcomingSessions:[],pastSessions:[],onGoingSessions:[]}),o=Object(a.a)(d,2),h=o[0],v=o[1],m=Object(i.useState)(!1),O=Object(a.a)(m,2),T=O[0],P=O[1];Object(i.useEffect)((function(){D()}),[]);var D=function(){t().then((function(e){var t={};Object.keys(e).forEach((function(c){t[c]=e[c].map((function(e){var t=e.title,c=e.venue,a=e.sessionDate,i=e.sessionStartTime,n=e.id,r=e.sessionStatus;return{date:Object(u.getFormatDate)(a,"D"),month:Object(u.getFormatDate)(a,"MMM"),heading:t,imgAva:l.default,avaTime:"".concat(Object(u.getFormatDate)(i,"LT",!0)," EST"),imgLoc:j.default,loc:c,previousImg:b.default,prevHeading:"Yoga with Kane",prevDate:Object(u.getFormatDate)(s,"DD MMMM YYYY"),sessionStatus:r,id:n}}))})),v(t)}))},y=function(e,s){var t={sessionId:e,sessionStatus:s},a=x.TrainerApi.changeSessionStatus;a.body=t,Object(_.api)(Object(c.a)({},a)).then((function(e){var s=e.data;console.log(s),D()})).catch((function(e){console.log(e),Object(p.Toast)({type:"error",message:e.message||""})}))},U=function(e){var s={sessionId:e,sessionStatus:"cancelled"};P(!0),n(s).then((function(){P(!1),D()})).catch((function(){return P(!1)}))};return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"outter_user_container",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"inner_user_container ",children:[Object(N.jsx)("div",{className:"userSession_heading",children:Object(N.jsx)("h2",{children:"My Session"})}),Object(N.jsx)("div",{className:"US_tabs_wrapper",children:Object(N.jsxs)(r.d,{defaultTab:"upcoming",children:[Object(N.jsxs)(r.b,{children:[Object(N.jsx)(r.a,{tabFor:"upcoming",children:"Upcoming"}),Object(N.jsx)(r.a,{tabFor:"previous",children:"Previous"})]}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"overview",children:Object(N.jsx)(g,{datas:h.upcomingSessions,handleSessionStatus:y,handleCancel:U,isLoading:T})})}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"upcoming",children:Object(N.jsx)(S,{datas:h.upcomingSessions,handleSessionStatus:y,handleCancel:U})})}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"pass",children:Object(N.jsx)(f,{})})}),Object(N.jsx)("div",{className:"tabPanel_outter",children:Object(N.jsx)(r.c,{tabId:"previous",children:Object(N.jsx)(w,{datas:h.pastSessions,handleSessionStatus:y})})})]})})]})})})})}));s.default=T},397:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Jenny.c50273b9.png"},400:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Availability Icon.ad0517cb.svg"},402:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Location Icon.cbb0b32d.svg"},548:function(e,s,t){}}]);
//# sourceMappingURL=72.5e052bb4.chunk.js.map