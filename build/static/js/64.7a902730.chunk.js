(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[64,92,139,179,250],{115:function(t,n,e){"use strict";e.r(n);e(2),e(415);var i=e(744),a=e.n(i),r=e(1);n.default=function(t){var n=t.pageMetaData,e=void 0===n?{}:n,i=t.total,c=void 0===i?0:i,s=t.pageChange,o=void 0===s?{}:s;return Object(r.jsx)("div",{class:"common-pagination",children:e&&e.totalPages>1?Object(r.jsx)(a.a,{totalPosts:c,activePage:e.page,itemsCountPerPage:e.chunk,totalItemsCount:e.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(t){return o(t)}}):null})}},123:function(t,n,e){"use strict";e.r(n);var i=e(214),a=e(14),r=e(2),c=(e(464),e(264)),s=e(33),o=e(21),u=e(115),l=e(1),d=Object(s.b)(null,(function(t){return Object(o.b)({changeApproval:c.changeApproval,getAllTrainerLists:c.getAllTrainerLists},t)}))((function(t){var n=Object(r.useState)([]),e=Object(a.a)(n,2),c=e[0],s=e[1],o=Object(r.useState)({}),d=Object(a.a)(o,2),f=d[0],j=d[1];function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.getAllTrainerLists(n).then((function(t){var n,e=null===(n=t.list)||void 0===n?void 0:n.filter((function(t){return"removed"!==t.trainerStatus}));s(Object(i.a)(e)),j(t.pageMetaData)}))}function h(n,e){var i={trainerStatus:e};t.changeApproval(i,n).then((function(){v()})).catch((function(t){console.error("Error:",t)}))}return Object(r.useEffect)((function(){v(1)}),[]),Object(l.jsx)("div",{className:"outter_container_AD",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Admin Overall Data"}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"Trainer List"}),Object(l.jsxs)("div",{className:"admin",children:[Object(l.jsxs)("div",{className:"tariner_info",children:[Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Name"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Email"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Trainer Status"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Action"})})]}),c.map((function(t){var n;return n="approved"===t.trainerStatus?Object(l.jsx)("div",{onClick:function(){return h(t.id,"disapproved")},children:"Disapprove"}):Object(l.jsx)("div",{onClick:function(){return h(t.id,"approved")},children:"Approve"}),Object(l.jsxs)("div",{className:"trainer_info",children:[Object(l.jsx)("div",{className:"tariner_info_item",children:t.firstName}),Object(l.jsx)("div",{className:"tariner_info_item",children:t.email}),Object(l.jsx)("div",{className:"tariner_info_item",children:t.trainerStatus}),Object(l.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(l.jsx)("button",{className:"tariner_info_button mr-4",children:n})," ",Object(l.jsx)("button",{className:"tariner_info_button",onClick:function(){return h(t.id,"removed")},children:"Remove"})," "]})]})})),Object(l.jsx)(u.default,{pageMetaData:f,totalPosts:c.length,pageChange:function(t){return v(t)}})]})]})})}));n.default=d},264:function(t,n,e){"use strict";e.r(n),e.d(n,"changeApproval",(function(){return r})),e.d(n,"getTrainerDetail",(function(){return c})),e.d(n,"getAllTrainerLists",(function(){return s})),e.d(n,"getStatsData",(function(){return o})),e.d(n,"getAllUsersLists",(function(){return u})),e.d(n,"fetchTrainersLists",(function(){return l}));var i=e(4),a=e(15),r=function(t,n){return function(e,r,c){var s=c.api;return new Promise((function(e,r){var c=a.TrainerApi.changeTrainerStatus,o={trainerId:n,action:null===t||void 0===t?void 0:t.trainerStatus};c.body=o,s(Object(i.a)({},c)).then((function(t){var n=t.data;e(n)})).catch((function(t){r(t)}))}))}},c=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var s=c.api;return new Promise((function(e,r){var c=a.TrainerApi.getTrainerDetail;c.id=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:n})).then((function(t){var n=t.data;e(n)})).catch((function(t){r(t)}))}))}},s=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var s=c.api;return new Promise((function(e,r){var c=a.TrainerApi.getAllTrainerLists;c.page=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:n})).then((function(t){var n=t.data;e(n)})).catch((function(t){r(t)}))}))}},o=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,e,r){var c=r.api;return new Promise((function(t,e){c(Object(i.a)(Object(i.a)({},a.TrainerApi.getStatsData),{},{isAdmin:n})).then((function(n){t(n)})).catch((function(t){e(t)}))}))}},u=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var s=c.api;return new Promise((function(e,r){var c=a.TrainerApi.getAllUsersLists;c.page=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:n})).then((function(t){var n=t.data;e(n)})).catch((function(t){r(t)}))}))}},l=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,c){var s=c.api;return new Promise((function(e,r){var c=a.TrainerApi.fetchTrainersLists;c.page=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:n})).then((function(t){var n=t.data;e(n)})).catch((function(t){r(t)}))}))}}},415:function(t,n,e){},464:function(t,n,e){}}]);
//# sourceMappingURL=64.7a902730.chunk.js.map