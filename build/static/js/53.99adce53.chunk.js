(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[53,62,87,147,189,192,262],{123:function(e,t,n){"use strict";n.r(t);n(2),n(413);var i=n(768),a=n.n(i),r=n(1);t.default=function(e){var t=e.pageMetaData,n=void 0===t?{}:t,i=e.total,c=void 0===i?0:i,s=e.pageChange,o=void 0===s?{}:s;return Object(r.jsx)("div",{class:"common-pagination",children:n&&n.totalPages>1?Object(r.jsx)(a.a,{totalPosts:c,activePage:n.page,itemsCountPerPage:n.chunk,totalItemsCount:n.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(e){return o(e)}}):null})}},132:function(e,t,n){"use strict";n.r(t);var i=n(89),a=n(11),r=n(2),c=(n(460),n(276)),s=n(24),o=n(20),l=n(123),u=n(1),d=Object(s.b)(null,(function(e){return Object(o.b)({changeApproval:c.changeApproval,getAllTrainerLists:c.getAllTrainerLists},e)}))((function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)({}),d=Object(a.a)(o,2),j=d[0],f=d[1];function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.getAllTrainerLists(t).then((function(e){var t,n=null===(t=e.list)||void 0===t?void 0:t.filter((function(e){return"removed"!==e.trainerStatus}));s(Object(i.a)(n)),f(e.pageMetaData)}))}function v(t,n){var i={trainerStatus:n};e.changeApproval(i,t).then((function(){h()})).catch((function(e){console.error("Error:",e)}))}return Object(r.useEffect)((function(){h(1)}),[]),Object(u.jsx)("div",{className:"outter_container_AD",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Admin Overall Data"}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Trainer List"}),Object(u.jsxs)("div",{className:"admin",children:[Object(u.jsxs)("div",{className:"tariner_info",children:[Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Name"})}),Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Email"})}),Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Trainer Status"})}),Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Action"})})]}),c.map((function(e){var t;return t="approved"===e.trainerStatus?Object(u.jsx)("div",{onClick:function(){return v(e.id,"disapproved")},children:"Disapprove"}):Object(u.jsx)("div",{onClick:function(){return v(e.id,"approved")},children:"Approve"}),Object(u.jsxs)("div",{className:"trainer_info",children:[Object(u.jsx)("div",{className:"tariner_info_item",children:e.firstName}),Object(u.jsx)("div",{className:"tariner_info_item",children:e.email}),Object(u.jsx)("div",{className:"tariner_info_item",children:e.trainerStatus}),Object(u.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(u.jsx)("button",{className:"tariner_info_button mr-4",children:t})," ",Object(u.jsx)("button",{className:"tariner_info_button",onClick:function(){return v(e.id,"removed")},children:"Remove"})," "]})]})})),Object(u.jsx)(l.default,{pageMetaData:j,totalPosts:c.length,pageChange:function(e){return h(e)}})]})]})})}));t.default=d},140:function(e,t,n){"use strict";n.r(t);var i=n(11),a=n(2),r=n(132),c=(n(538),n(276)),s=n(24),o=n(20),l=n(65),u=n(1),d=Object(s.b)(null,(function(e){return Object(o.b)({getStatsDataApi:c.getStatsData},e)}))((function(e){var t=e.getStatsDataApi,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],o=c[1],d=Object(a.useState)({}),j=Object(i.a)(d,2),f=j[0],h=j[1];return Object(a.useEffect)((function(){o(!0),t().then((function(e){h(e),o(!1)})).catch((function(){return o(!1)}))}),[]),Object(u.jsx)("div",{className:"outter_container_AD",children:s?Object(u.jsx)(l.CommonPageLoader,{}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Admin Dashboard"}),Object(u.jsxs)("div",{className:"inner_AD",children:[Object(u.jsx)("div",{className:"wrapper_AD",children:Object(u.jsxs)("div",{className:"AD_views",children:[Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsx)("p",{children:"No of"}),Object(u.jsxs)("h3",{children:["User's :",Object(u.jsxs)("span",{children:[" ",f.userCount]})]})]}),Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsx)("p",{children:"No of"}),Object(u.jsxs)("h3",{children:["Trainer's :",Object(u.jsxs)("span",{children:[" ",f.trainerCount]})]})]}),Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsx)("p",{children:"No of"}),Object(u.jsxs)("h3",{children:["Page Views : ",Object(u.jsx)("span",{children:f.pageViews})]})]}),Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsxs)("h3",{children:["Revenue : ",Object(u.jsxs)("span",{children:["$",f.totalRevenue]})]})," "]})]})}),Object(u.jsx)(r.default,{})]})]})})}));t.default=d},276:function(e,t,n){"use strict";n.r(t),n.d(t,"changeApproval",(function(){return r})),n.d(t,"getTrainerDetail",(function(){return c})),n.d(t,"getAllTrainerLists",(function(){return s})),n.d(t,"getStatsData",(function(){return o})),n.d(t,"getAllUsersLists",(function(){return l})),n.d(t,"fetchTrainersLists",(function(){return u}));var i=n(4),a=n(15),r=function(e,t){return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.changeTrainerStatus,o={trainerId:t,action:null===e||void 0===e?void 0:e.trainerStatus};c.body=o,s(Object(i.a)({},c)).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getTrainerDetail;c.id=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getAllTrainerLists;c.page=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,n,r){var c=r.api;return new Promise((function(e,n){c(Object(i.a)(Object(i.a)({},a.TrainerApi.getStatsData),{},{isAdmin:t})).then((function(t){e(t)})).catch((function(e){n(e)}))}))}},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getAllUsersLists;c.page=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.fetchTrainersLists;c.page=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}}},413:function(e,t,n){},460:function(e,t,n){},538:function(e,t,n){}}]);