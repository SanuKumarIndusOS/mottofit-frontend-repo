(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[139,80,157,197],{140:function(e,n,t){"use strict";t.r(n);var i=t(11),c=t(2),s=t.n(c),r=t(285),a=t(26),o=t(22),l=(t(548),t(1));var d=Object(a.b)(null,(function(e){return Object(o.b)({getAdminSession:r.getAdminSession,adminCancelSession:r.adminCancelSession},e)}))((function(e){var n=s.a.useState([]),t=Object(i.a)(n,2),c=t[0],r=t[1],a=s.a.useState(1),o=Object(i.a)(a,2),d=o[0],u=o[1],j=s.a.useState("all"),b=Object(i.a)(j,2),v=b[0],h=b[1],f=s.a.useState(),O=Object(i.a)(f,2),m=O[0],x=O[1];return s.a.useEffect((function(){e.getAdminSession(d,v).then((function(e){console.log(e,"session"),r(e.list),x(e.totalCount/10)}))}),[d]),s.a.useEffect((function(){e.getAdminSession(d,v).then((function(e){console.log(e,"session"),r(e.list),u(1)}))}),[v]),s.a.useEffect((function(){e.getAdminSession(d,v).then((function(e){console.log(e,"session"),r(e.list)}))}),[]),Object(l.jsxs)("div",{className:"admin_booking",children:[Object(l.jsx)("div",{className:"filters",children:Object(l.jsxs)("div",{className:"type",children:[Object(l.jsx)("div",{className:"all"===v?"all active":"all",onClick:function(){h("all")},children:"All"}),Object(l.jsx)("div",{className:"upcoming"===v?"upcoming active":"upcoming",onClick:function(){h("upcoming")},children:"Upcoming"}),Object(l.jsx)("div",{className:"past"===v?"cancelled active":"cancelled",onClick:function(){h("past")},children:"Past"})]})}),c.map((function(n){return Object(l.jsxs)("div",{className:"session_card_outer",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"session_card",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("div",{className:"txt",children:null===n||void 0===n?void 0:n.title}),Object(l.jsx)("div",{className:"date",children:null===n||void 0===n?void 0:n.sessionDate})]}),Object(l.jsxs)("div",{className:"status",children:["completed"===(null===n||void 0===n?void 0:n.sessionStatus)?Object(l.jsx)("div",{className:"completed",children:"Completed "}):null,"created"===(null===n||void 0===n?void 0:n.sessionStatus)?Object(l.jsx)("div",{className:"created",children:"Created "}):null,"cancelled"===(null===n||void 0===n?void 0:n.sessionStatus)?Object(l.jsx)("div",{className:"cancelled",children:"Cancelled "}):null]})]}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"left_content",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Trainer Name :"}),"\u2002",n.trainer.firstName," ",n.trainer.lastName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Trainer Phone number :"}),"\u2002",n.trainer.phoneNumber]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Session Type :"}),"\u2002",n.sessionType]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Training Type :"}),"\u2002",n.trainingType]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"City :"}),"\u2002",n.city]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Price :"}),"\u2002",n.price]})]}),Object(l.jsxs)("div",{className:"right_content",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"User Name :"}),"\u2002 ",n.user.firstName," ",n.user.lastName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"User Phone number :"}),"\u2002 ",n.user.phoneNo]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Venue :"}),"\u2002 ",n.venue]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("b",{children:"Meeting Link :"}),"\u2002",n.meetingLink?n.meetingLink:Object(l.jsx)("div",{children:"N/A"})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("b",{children:"MottoPass :"}),"\u2002",n.mottoPassAvailed?n.mottoPassAvailed:Object(l.jsx)("div",{children:"N/A"})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("b",{children:"Paid by User :"}),"\u2002",n.mottoPassAvailed?Object(l.jsx)("div",{children:"PAID"}):Object(l.jsx)("div",{children:"NOT PAID"})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("b",{children:"Payment Status :"}),"\u2002",n.paymentStatus?Object(l.jsx)("div",{children:"COMPLETED"}):Object(l.jsx)("div",{children:"NOT COMPLETED"})]}),Object(l.jsx)("div",{children:n.paidByUser}),Object(l.jsx)("div",{children:n.paymentStatus})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"friendSection"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"cancelSession",children:"created"===n.sessionStatus?Object(l.jsx)("button",{onClick:function(){return t=n.id,void e.adminCancelSession(t,"cancelled").then((function(){e.getAdminSession(d).then((function(e){console.log(e,"session"),r(e.list)})),console.log("s")})).catch((function(e){console.error("Error:",e)}));var t},children:"Cancel Session"}):Object(l.jsx)("button",{disabled:"true",children:"Cancel Session"})})]})]})})),Object(l.jsxs)("div",{style:{margin:"1rem",display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[Object(l.jsx)("b",{style:{cursor:"pointer"},onClick:function(){1!==d&&u(d-1)},children:1===d?null:d-1}),Object(l.jsx)("b",{style:{margin:"1rem",backgroundColor:"#53BFD2",padding:"1rem",color:"white"},children:d}),Object(l.jsx)("b",{style:{cursor:"pointer"},onClick:function(){u(d+1)},children:m===d?null:d+1})]}),m]})}));n.default=d},285:function(e,n,t){"use strict";t.r(n),t.d(n,"changeApproval",(function(){return s})),t.d(n,"adminCancelSession",(function(){return r})),t.d(n,"getTrainerDetail",(function(){return a})),t.d(n,"getAllTrainerLists",(function(){return o})),t.d(n,"getAdminSession",(function(){return l})),t.d(n,"getStatsData",(function(){return d})),t.d(n,"getAllUsersLists",(function(){return u})),t.d(n,"AddorRemoveUser",(function(){return j})),t.d(n,"fetchTrainersLists",(function(){return b}));var i=t(4),c=t(15),s=function(e,n){return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.changeTrainerStatus,o={trainerId:n,action:null===e||void 0===e?void 0:e.trainerStatus};r.body=o,a(Object(i.a)({},r)).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}},r=function(e,n){return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.adminCancelSession,o={sessionId:e,sessionStatus:n};r.body=o,console.log("action",o),a(Object(i.a)({},r)).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}},a=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.getTrainerDetail;r.id=e,a(Object(i.a)(Object(i.a)({},r),{},{isAdmin:n})).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}},o=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.getAllTrainerLists;r.page=e,a(Object(i.a)(Object(i.a)({},r),{},{isAdmin:n})).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}},l=function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(s,r,a){var o=a.api;return new Promise((function(s,r){var a=c.TrainerApi.getAdminSession;a.page="?limit=10&offset="+e,a.type=n+"/",console.log(a.type+a.page,"action"),o(Object(i.a)(Object(i.a)({},a),{},{isAdmin:t})).then((function(e){var n=e.data;s(n)})).catch((function(e){r(e)}))}))}},d=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,t,s){var r=s.api;return new Promise((function(e,t){r(Object(i.a)(Object(i.a)({},c.TrainerApi.getStatsData),{},{isAdmin:n})).then((function(n){e(n)})).catch((function(e){t(e)}))}))}},u=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.getAllUsersLists;r.page=e,a(Object(i.a)(Object(i.a)({},r),{},{isAdmin:n})).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}},j=function(e,n){return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.AddorRemoveUser,o={userId:e,status:n};r.body=o,console.log(o,r),a(Object(i.a)({},r)).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}},b=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,s,r){var a=r.api;return new Promise((function(t,s){var r=c.TrainerApi.fetchTrainersLists;r.page=e,a(Object(i.a)(Object(i.a)({},r),{},{isAdmin:n})).then((function(e){var n=e.data;t(n)})).catch((function(e){s(e)}))}))}}},344:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var i=t(140),c=(t(2),t(1));function s(){return Object(c.jsx)("div",{children:Object(c.jsx)(i.default,{})})}},548:function(e,n,t){}}]);