(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[66,75,246,340,341,428],{159:function(e,t,a){"use strict";a.r(t);var s=a(44),i=a(4),n=a(13),c=a(2),r=a.n(c),o=(a(561),a(703)),l=(a(702),a(400)),d=a(402),j=a(8),b=a(50),u=a(397),h=a(51),v=a(15),m=(a(220),a(38)),O=a(33),p=a(21),x=a(85),f=a(1),g=function(e){var t=e.tabname,a=e.tabData,o=e.prevData,m=e.cancelSessionApi,O=e.handleChange,p=void 0===O?{}:O,g=Object(s.a)(e,["tabname","tabData","prevData","cancelSessionApi","handleChange"]),w=Object(c.useState)([3]),T=Object(n.a)(w,2),N=T[0],D=T[1],y=Object(c.useState)(!1),P=Object(n.a)(y,2),A=P[0],M=P[1];return Object(f.jsxs)("div",{className:"tabPanel_overview",children:[Object(f.jsx)("div",{className:"tabPanel_overview_left",children:Object(f.jsxs)("div",{className:"TP_overview_wrapper",children:[Object(f.jsxs)("h3",{style:{textTransform:"capitalize"},children:[t," Sessions"]}),Object(f.jsxs)("div",{className:"TP_US_overview",children:[Object(f.jsx)("div",{className:"TP_US_overview_inner",children:a.slice(0,N).map((function(e,a){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)("div",{className:"TP_upcomeSession_overview",children:[Object(f.jsx)("div",{className:"TP_USession_dates",children:Object(f.jsxs)("h4",{children:[e.sessionDate.substr(8,2),Object(f.jsx)("span",{children:_[e.sessionDate.substr(5,2)]})]})}),Object(f.jsxs)("div",{className:"TP_USession_data",children:[Object(f.jsxs)("h2",{style:{textTransform:"capitalize"},children:[e.activity,"\xa0",Object(f.jsx)("span",{style:{textTransform:"lowerCase"},children:"with"})," ","\xa0",Object(f.jsx)("h2",{style:{textTransform:"capitalize"},children:e.trainerDetail.firstName})]}),Object(f.jsxs)("div",{className:"TP_USession_data_icons",children:[Object(f.jsxs)("h5",{children:[Object(f.jsx)("img",{src:l.default,alt:"icon"}),Object(x.getFormatDate)(e.sessionStartTime,"LT",!0)]}),Object(f.jsxs)("h5",{children:[Object(f.jsx)("img",{src:d.default,alt:"icon"}),S[0].loc]})]}),Object(f.jsxs)("div",{className:"TP_USession_data_buttons",children:[Object(f.jsx)("button",{children:"Reschedule"}),"cancelled"!==e.sessionStatus?Object(f.jsx)(f.Fragment,{children:"Previous"!==t?Object(f.jsx)("button",{disabled:A,onClick:function(){return function(e){var t={sessionId:e,sessionStatus:"cancelled"};M(!0),m(t).then((function(){M(!1),p()})).catch((function(){return M(!1)}))}(e.id)},children:"Cancel"}):""}):Object(f.jsx)("button",{className:"text-danger",disabled:!0,children:"Cancelled"}),"1on1"!==e.trainingType&&Object(f.jsxs)("div",{className:"button_boarder",children:[Object(f.jsxs)("button",{onClick:function(){return function(e){var t="";"social"===e.trainingType?t="SOCIAL SESSION":"class"===e.trainingType?t="CREATE A CLASS":"1on1"===e.trainingType&&(t="1 ON 1 TRAINING");var a={location:{label:(null===e||void 0===e?void 0:e.city)||"",value:(null===e||void 0===e?void 0:e.city)||""},trainingVenue:{label:"clientLocation"===e.venue?"Your Location":"Trainer's Location",value:(null===e||void 0===e?void 0:e.venue)||""},preferedTrainingMode:(null===e||void 0===e?void 0:e.sessionType)||"",price:e.price||"",sessionType:t||"",trainingType:{label:(null===e||void 0===e?void 0:e.activity)||"",value:(null===e||void 0===e?void 0:e.activity)||""}},s={bookingData:{start_slot:e.sessionStartTime,end_slot:e.sessionEndTime,date:e.sessionDate},sessionData:a,selectedTrainerData:Object(i.a)({},e.trainerDetail),submittedData:Object(i.a)({},e)};null===g||void 0===g||g.updateUserDetails(s),v.history.push({pathname:"/user/with-friends"})}(e)},children:["Add Friends"," "]}),Object(f.jsx)("img",{src:h.default,alt:"icon"})]})]})]})]}),Object(f.jsx)("hr",{})]},a)}))}),Object(f.jsxs)("button",{onClick:function(){D((function(e){return e+1}))},className:"viewMoreButton",children:["View all Session ",Object(f.jsx)(b.default,{})]})]})]})}),Object(f.jsx)("div",{className:"tabPanel_overview_right",children:Object(f.jsxs)("div",{className:"TB_overview_right",children:[Object(f.jsx)("div",{className:"TB_overview_row_one",children:Object(f.jsxs)("div",{className:"row_one_data",children:[Object(f.jsx)("h2",{children:"Want to Do More for Less?"}),Object(f.jsx)("p",{children:"Save money by purchasing multiple sessions at once, eligible for use within 60 days of the purchase date."}),Object(f.jsxs)(j.a,{to:"/",children:["Get A pass ",Object(f.jsx)(b.default,{})," "]})]})}),Object(f.jsx)("div",{className:"TB_overview_row_two",children:Object(f.jsxs)("div",{className:"row_two_data",children:[Object(f.jsx)("h2",{children:"PREVIOUS SESSIONS"}),Object(f.jsx)("div",{className:"row_two_scroll",children:o.map((function(e,t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"row_previous_data",children:[Object(f.jsx)("div",{className:"row_previous_avater",children:Object(f.jsx)("img",{src:u.default,alt:"profile"})}),Object(f.jsxs)("div",{className:"row_previous_header",children:[Object(f.jsxs)("h2",{className:"d-flex flex-wrap",style:{textTransform:"capitalize"},children:[e.activity,"\xa0",Object(f.jsx)("span",{style:{textTransform:"lowerCase"},children:"with"})," ","\xa0",Object(f.jsx)("h2",{className:"d-flex flex-wrap",style:{textTransform:"capitalize"},children:e.trainerDetail.firstName})]}),Object(f.jsx)("p",{children:"".concat(e.sessionDate.substr(8,2)," ").concat(_[e.sessionDate.substr(5,2)]," ").concat(e.sessionDate.substr(0,4))})]})]},t),Object(f.jsx)("hr",{})]})}))})]})})]})})]})},S=[{date:"14",month:"Feb",heading:"Strength & HIIT with John Doe",imgAva:l.default,avaTime:"  5:00 PM PST",imgLoc:d.default,loc:"Trainer GYM",previousImg:u.default,prevHeading:"Yoga with Kane",prevDate:"02 May 2021"},{date:"25",month:"May",heading:"Yoga with Kane",imgAva:l.default,avaTime:"  5:00 PM PST",imgLoc:d.default,loc:"Trainer GYM",previousImg:u.default,prevHeading:"Yoga with John Doe",prevDate:"02 May 2021"},{date:"20",month:"Apr",heading:"Boxing with John Doe",imgAva:l.default,avaTime:"  5:00 PM PST",imgLoc:d.default,loc:"Trainer GYM",previousImg:u.default,prevHeading:"Yoga with Kane ",prevDate:"02 May 2021"},{date:"20",month:"Apr",heading:"Boxing with John Doe",imgAva:l.default,avaTime:"  5:00 PM PST",imgLoc:d.default,loc:"Trainer GYM",previousImg:u.default,prevHeading:"Yoga with Ananaya ",prevDate:"02 May 2021"},{date:"20",month:"Apr",heading:"Boxing with John Doe",imgAva:l.default,avaTime:"  5:00 PM PST",imgLoc:d.default,loc:"Trainer GYM",previousImg:u.default,prevHeading:"Yoga with Kane ",prevDate:"02 May 2021"}],_={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},w=Object(O.b)(null,(function(e){return Object(p.b)({userSession:m.userSession,cancelSession:m.cancelSession,updateUserDetails:m.updateUserDetails},e)}))((function(e){var t=r.a.useState({upcomingSessions:[],pastSessions:[],onGoingSessions:[]}),a=Object(n.a)(t,2),s=a[0],l=a[1];Object(c.useEffect)((function(){d(),window.scrollTo(0,0)}),[]);var d=function(){e.userSession().then((function(e){l(e)})).catch((function(e){console.log(e)}))};return Object(f.jsx)("div",{className:"outter_user_container",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"inner_user_container ",children:[Object(f.jsx)("div",{className:"userSession_heading",children:Object(f.jsx)("h2",{children:"My Session"})}),Object(f.jsx)("div",{className:"US_tabs_wrapper",children:Object(f.jsxs)(o.d,{defaultTab:"overview",children:[Object(f.jsxs)(o.b,{children:[Object(f.jsx)(o.a,{tabFor:"overview",children:"Overview"}),Object(f.jsx)(o.a,{tabFor:"upcoming",children:"Upcoming"}),Object(f.jsx)(o.a,{tabFor:"pass",children:"Motto pass"}),Object(f.jsx)(o.a,{tabFor:"previous",children:"Previous"})]}),Object(f.jsx)("div",{className:"tabPanel_outter",children:Object(f.jsx)(o.c,{tabId:"overview",children:Object(f.jsx)(g,Object(i.a)({tabname:"Overview",tabData:s.upcomingSessions,prevData:s.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return d()}},e))})}),Object(f.jsx)("div",{className:"tabPanel_outter",children:Object(f.jsx)(o.c,{tabId:"upcoming",children:Object(f.jsx)(g,Object(i.a)({tabname:"Upcoming",tabData:s.upcomingSessions,prevData:s.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return d()}},e))})}),Object(f.jsx)("div",{className:"tabPanel_outter",children:Object(f.jsx)(o.c,{tabId:"pass",children:Object(f.jsx)(g,Object(i.a)({tabname:"Moto Pass",tabData:s.pastSessions,prevData:s.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return d()}},e))})}),Object(f.jsx)("div",{className:"tabPanel_outter",children:Object(f.jsx)(o.c,{tabId:"previous",children:Object(f.jsx)(g,Object(i.a)({tabname:"Previous",tabData:s.pastSessions,prevData:s.pastSessions,cancelSessionApi:e.cancelSession,handleChange:function(){return d()}},e))})})]})})]})})})}));t.default=w},198:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return n}));a(2);var s=a(159),i=a(1);function n(){return Object(i.jsx)("div",{children:Object(i.jsx)(s.default,{})})}},397:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Jenny.c50273b9.png"},400:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Availability Icon.ad0517cb.svg"},402:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Location Icon.cbb0b32d.svg"},561:function(e,t,a){}}]);
//# sourceMappingURL=66.01c67e37.chunk.js.map