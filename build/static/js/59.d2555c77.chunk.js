(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[59,89,133,170,237],{101:function(t,e,n){"use strict";n.r(e);n(2),n(362);var i=n(665),a=n.n(i),r=n(1);e.default=function(t){var e=t.pageMetaData,n=void 0===e?{}:e,i=t.total,c=void 0===i?0:i,s=t.pageChange,o=void 0===s?{}:s;return Object(r.jsx)("div",{class:"common-pagination",children:n&&n.totalPages>1?Object(r.jsx)(a.a,{totalPosts:c,activePage:n.page,itemsCountPerPage:n.chunk,totalItemsCount:n.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(t){return o(t)}}):null})}},110:function(t,e,n){"use strict";n.r(e);var i=n(194),a=n(12),r=n(2),c=(n(398),n(229)),s=n(35),o=n(27),u=n(101),l=n(1),d=Object(s.b)(null,(function(t){return Object(o.b)({changeApproval:c.changeApproval,getAllTrainerLists:c.getAllTrainerLists},t)}))((function(t){var e=Object(r.useState)([]),n=Object(a.a)(e,2),c=n[0],s=n[1],o=Object(r.useState)({}),d=Object(a.a)(o,2),f=d[0],j=d[1];function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.getAllTrainerLists(e).then((function(t){var e,n=null===(e=t.list)||void 0===e?void 0:e.filter((function(t){return"removed"!==t.trainerStatus}));s(Object(i.a)(n)),j(t.pageMetaData)}))}function h(e,n){var i={trainerStatus:n};t.changeApproval(i,e).then((function(){v()})).catch((function(t){console.error("Error:",t)}))}return Object(r.useEffect)((function(){v(1)}),[]),Object(l.jsx)("div",{className:"outter_container_AD",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Admin Overall Data"}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"Trainer List"}),Object(l.jsxs)("div",{className:"admin",children:[Object(l.jsxs)("div",{className:"tariner_info",children:[Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Name"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Email"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Trainer Status"})}),Object(l.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(l.jsx)("span",{className:"mx-auto",children:"Action"})})]}),c.map((function(t){var e;return e="approved"===t.trainerStatus?Object(l.jsx)("div",{onClick:function(){return h(t.id,"disapproved")},children:"Disapprove"}):Object(l.jsx)("div",{onClick:function(){return h(t.id,"approved")},children:"Approve"}),Object(l.jsxs)("div",{className:"trainer_info",children:[Object(l.jsx)("div",{className:"tariner_info_item",children:t.firstName}),Object(l.jsx)("div",{className:"tariner_info_item",children:t.email}),Object(l.jsx)("div",{className:"tariner_info_item",children:t.trainerStatus}),Object(l.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(l.jsx)("button",{className:"tariner_info_button mr-4",children:e})," ",Object(l.jsx)("button",{className:"tariner_info_button",onClick:function(){return h(t.id,"removed")},children:"Remove"})," "]})]})})),Object(l.jsx)(u.default,{pageMetaData:f,totalPosts:c.length,pageChange:function(t){return v(t)}})]})]})})}));e.default=d},229:function(t,e,n){"use strict";n.r(e),n.d(e,"changeApproval",(function(){return r})),n.d(e,"getTrainerDetail",(function(){return c})),n.d(e,"getAllTrainerLists",(function(){return s})),n.d(e,"getStatsData",(function(){return o})),n.d(e,"getAllUsersLists",(function(){return u})),n.d(e,"fetchTrainersLists",(function(){return l}));var i=n(3),a=n(10),r=function(t,e){return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.changeApproval;c.id=e,s(Object(i.a)(Object(i.a)({},c),{},{body:t})).then((function(t){var e=t.data;n(e)})).catch((function(t){r(t)}))}))}},c=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getTrainerDetail;c.id=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:e})).then((function(t){var e=t.data;n(e)})).catch((function(t){r(t)}))}))}},s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getAllTrainerLists;c.page=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:e})).then((function(t){var e=t.data;n(e)})).catch((function(t){r(t)}))}))}},o=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,n,r){var c=r.api;return new Promise((function(t,n){c(Object(i.a)(Object(i.a)({},a.TrainerApi.getStatsData),{},{isAdmin:e})).then((function(e){t(e)})).catch((function(t){n(t)}))}))}},u=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getAllUsersLists;c.page=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:e})).then((function(t){var e=t.data;n(e)})).catch((function(t){r(t)}))}))}},l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.fetchTrainersLists;c.page=t,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:e})).then((function(t){var e=t.data;n(e)})).catch((function(t){r(t)}))}))}}},362:function(t,e,n){},398:function(t,e,n){}}]);
//# sourceMappingURL=59.d2555c77.chunk.js.map