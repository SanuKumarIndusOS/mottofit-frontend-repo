(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[64,96,157,201,273],{124:function(n,t,e){"use strict";e.r(t);e(2),e(423);var i=e(779),a=e.n(i),r=e(1);t.default=function(n){var t=n.pageMetaData,e=void 0===t?{}:t,i=n.total,c=void 0===i?0:i,o=n.pageChange,s=void 0===o?{}:o;return Object(r.jsx)("div",{class:"common-pagination",children:e&&e.totalPages>1?Object(r.jsx)(a.a,{totalPosts:c,activePage:e.page,itemsCountPerPage:e.chunk,totalItemsCount:e.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(n){return s(n)}}):null})}},133:function(n,t,e){"use strict";e.r(t);var i=e(89),a=e(11),r=e(2),c=(e(471),e(285)),o=e(26),s=e(22),u=e(124),l=e(1),d=Object(o.b)(null,(function(n){return Object(s.b)({changeApproval:c.changeApproval,getAllTrainerLists:c.getAllTrainerLists},n)}))((function(n){var t=Object(r.useState)([]),e=Object(a.a)(t,2),c=e[0],o=e[1],s=Object(r.useState)({}),d=Object(a.a)(s,2),f=d[0],v=d[1];function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n.getAllTrainerLists(t).then((function(n){var t,e=null===(t=n.list)||void 0===t?void 0:t.filter((function(n){return"removed"!==n.trainerStatus}));o(Object(i.a)(e)),v(n.pageMetaData)}))}function m(t,e){var i={trainerStatus:e};n.changeApproval(i,t).then((function(){j()})).catch((function(n){console.error("Error:",n)}))}return Object(r.useEffect)((function(){j(1)}),[]),Object(l.jsx)("div",{className:"outter_container_AD",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Admin Overall Data"}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"Trainer List"}),Object(l.jsxs)("div",{className:"admin",children:[Object(l.jsxs)("div",{className:"tariner_info",children:[Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Name"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Email"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Trainer Status"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Action"})})]}),c.map((function(n){var t;return t="approved"===n.trainerStatus?Object(l.jsx)("div",{onClick:function(){return m(n.id,"disapproved")},children:"Disapprove"}):Object(l.jsx)("div",{onClick:function(){return m(n.id,"approved")},children:"Approve"}),Object(l.jsxs)("div",{className:"trainer_info",children:[Object(l.jsx)("div",{className:"tariner_info_item",children:n.firstName}),Object(l.jsx)("div",{className:"tariner_info_item",children:n.email}),Object(l.jsx)("div",{className:"tariner_info_item",children:n.trainerStatus}),Object(l.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(l.jsx)("button",{className:"tariner_info_button mr-4",children:t})," ",Object(l.jsx)("button",{className:"tariner_info_button",onClick:function(){return m(n.id,"removed")},children:"Remove"})," "]})]})})),Object(l.jsx)(u.default,{pageMetaData:f,totalPosts:c.length,pageChange:function(n){return j(n)}})]})]})})}));t.default=d},285:function(n,t,e){"use strict";e.r(t),e.d(t,"changeApproval",(function(){return r})),e.d(t,"adminCancelSession",(function(){return c})),e.d(t,"getTrainerDetail",(function(){return o})),e.d(t,"getAllTrainerLists",(function(){return s})),e.d(t,"getAdminSession",(function(){return u})),e.d(t,"getStatsData",(function(){return l})),e.d(t,"getAllUsersLists",(function(){return d})),e.d(t,"AddorRemoveUser",(function(){return f})),e.d(t,"fetchTrainersLists",(function(){return v}));var i=e(4),a=e(15),r=function(n,t){return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.changeTrainerStatus,s={trainerId:t,action:null===n||void 0===n?void 0:n.trainerStatus};c.body=s,o(Object(i.a)({},c)).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}},c=function(n,t){return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.adminCancelSession,s={sessionId:n,sessionStatus:t};c.body=s,console.log("action",s),o(Object(i.a)({},c)).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}},o=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.getTrainerDetail;c.id=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}},s=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.getAllTrainerLists;c.page=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}},u=function(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(r,c,o){var s=o.api;return new Promise((function(r,c){var o=a.TrainerApi.getAdminSession;o.page="?limit=10&offset="+n,o.type=t+"/",console.log(o.type+o.page,"action"),s(Object(i.a)(Object(i.a)({},o),{},{isAdmin:e})).then((function(n){var t=n.data;r(t)})).catch((function(n){c(n)}))}))}},l=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,e,r){var c=r.api;return new Promise((function(n,e){c(Object(i.a)(Object(i.a)({},a.TrainerApi.getStatsData),{},{isAdmin:t})).then((function(t){n(t)})).catch((function(n){e(n)}))}))}},d=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.getAllUsersLists;c.page=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}},f=function(n,t){return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.AddorRemoveUser,s={userId:n,status:t};c.body=s,console.log(s,c),o(Object(i.a)({},c)).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}},v=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var o=c.api;return new Promise((function(e,r){var c=a.TrainerApi.fetchTrainersLists;c.page=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;e(t)})).catch((function(n){r(n)}))}))}}},423:function(n,t,e){},471:function(n,t,e){}}]);