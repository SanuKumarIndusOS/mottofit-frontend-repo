(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[103,40,61,89,90,136,170,173,242,243],{101:function(e,t,n){"use strict";n.r(t);n(2),n(359);var i=n(674),a=n.n(i),c=n(1);t.default=function(e){var t=e.pageMetaData,n=void 0===t?{}:t,i=e.total,r=void 0===i?0:i,s=e.pageChange,o=void 0===s?{}:s;return Object(c.jsx)("div",{class:"common-pagination",children:n&&n.totalPages>1?Object(c.jsx)(a.a,{totalPosts:r,activePage:n.page,itemsCountPerPage:n.chunk,totalItemsCount:n.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(e){return o(e)}}):null})}},103:function(e,t,n){"use strict";n.r(t),n.d(t,"CommonPageLoaderClass",(function(){return u})),n.d(t,"CommonPageLoader",(function(){return d}));var i=n(15),a=n(16),c=n(19),r=n(18),s=n(2),o=n(36),j=(n(386),n(1)),u=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.isSpinningLoader,t=void 0!==e&&e;return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsxs)("div",{className:"lds-spinner",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}):Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("div",{className:"loader-circle"})})})}}]),n}(s.Component),l=u,d=Object(o.b)(null,null)(l)},110:function(e,t,n){"use strict";n.r(t);var i=n(195),a=n(12),c=n(2),r=(n(403),n(229)),s=n(36),o=n(25),j=n(101),u=n(1),l=Object(s.b)(null,(function(e){return Object(o.b)({changeApproval:r.changeApproval,getAllTrainerLists:r.getAllTrainerLists},e)}))((function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)({}),l=Object(a.a)(o,2),d=l[0],v=l[1];function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.getAllTrainerLists(t).then((function(e){var t,n=null===(t=e.list)||void 0===t?void 0:t.filter((function(e){return"removed"!==e.trainerStatus}));s(Object(i.a)(n)),v(e.pageMetaData)}))}function f(t,n){var i={trainerStatus:n};e.changeApproval(i,t).then((function(){b()})).catch((function(e){console.error("Error:",e)}))}return Object(c.useEffect)((function(){b(1)}),[]),Object(u.jsx)("div",{className:"outter_container_AD",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Admin Overall Data"}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Trainer List"}),Object(u.jsxs)("div",{className:"admin",children:[Object(u.jsxs)("div",{className:"tariner_info",children:[Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Name"})}),Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Email"})}),Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Trainer Status"})}),Object(u.jsx)("div",{className:"tariner_info_item_heading d-flex align-item-center justofy-content-center",children:Object(u.jsx)("span",{className:"mx-auto",children:"Action"})})]}),r.map((function(e){var t;return t="approved"===e.trainerStatus?Object(u.jsx)("div",{onClick:function(){return f(e.id,"disapproved")},children:"Disapprove"}):Object(u.jsx)("div",{onClick:function(){return f(e.id,"approved")},children:"Approve"}),Object(u.jsxs)("div",{className:"trainer_info",children:[Object(u.jsx)("div",{className:"tariner_info_item",children:e.firstName}),Object(u.jsx)("div",{className:"tariner_info_item",children:e.email}),Object(u.jsx)("div",{className:"tariner_info_item",children:e.trainerStatus}),Object(u.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(u.jsx)("button",{className:"tariner_info_button mr-4",children:t})," ",Object(u.jsx)("button",{className:"tariner_info_button",onClick:function(){return f(e.id,"removed")},children:"Remove"})," "]})]})})),Object(u.jsx)(j.default,{pageMetaData:d,totalPosts:r.length,pageChange:function(e){return b(e)}})]})]})})}));t.default=l},115:function(e,t,n){"use strict";n.r(t);var i=n(12),a=n(2),c=n(110),r=(n(474),n(229)),s=n(36),o=n(25),j=n(103),u=n(1),l=Object(s.b)(null,(function(e){return Object(o.b)({getStatsDataApi:r.getStatsData},e)}))((function(e){var t=e.getStatsDataApi,n=Object(a.useState)(!1),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(a.useState)({}),d=Object(i.a)(l,2),v=d[0],b=d[1];return Object(a.useEffect)((function(){o(!0),t().then((function(e){b(e),o(!1)})).catch((function(){return o(!1)}))}),[]),Object(u.jsx)("div",{className:"outter_container_AD",children:s?Object(u.jsx)(j.CommonPageLoader,{}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Admin Dashboard"}),Object(u.jsxs)("div",{className:"inner_AD",children:[Object(u.jsx)("div",{className:"wrapper_AD",children:Object(u.jsxs)("div",{className:"AD_views",children:[Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsx)("p",{children:"No of"}),Object(u.jsxs)("h3",{children:["User's :",Object(u.jsxs)("span",{children:[" ",v.userCount]})]})]}),Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsx)("p",{children:"No of"}),Object(u.jsxs)("h3",{children:["Trainer's :",Object(u.jsxs)("span",{children:[" ",v.trainerCount]})]})]}),Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsx)("p",{children:"No of"}),Object(u.jsxs)("h3",{children:["Page Views : ",Object(u.jsx)("span",{children:v.pageViews})]})]}),Object(u.jsxs)("div",{className:"views_AD",children:[Object(u.jsxs)("h3",{children:["Revenue : ",Object(u.jsxs)("span",{children:["$",v.totalRevenue]})]})," "]})]})}),Object(u.jsx)(c.default,{})]})]})})}));t.default=l},229:function(e,t,n){"use strict";n.r(t),n.d(t,"changeApproval",(function(){return c})),n.d(t,"getTrainerDetail",(function(){return r})),n.d(t,"getAllTrainerLists",(function(){return s})),n.d(t,"getStatsData",(function(){return o})),n.d(t,"getAllUsersLists",(function(){return j})),n.d(t,"fetchTrainersLists",(function(){return u}));var i=n(3),a=n(10),c=function(e,t){return function(n,c,r){var s=r.api;return new Promise((function(n,c){var r=a.TrainerApi.changeTrainerStatus,o={trainerId:t,action:null===e||void 0===e?void 0:e.trainerStatus};r.body=o,s(Object(i.a)({},r)).then((function(e){var t=e.data;n(t)})).catch((function(e){c(e)}))}))}},r=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,c,r){var s=r.api;return new Promise((function(n,c){var r=a.TrainerApi.getTrainerDetail;r.id=e,s(Object(i.a)(Object(i.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){c(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,c,r){var s=r.api;return new Promise((function(n,c){var r=a.TrainerApi.getAllTrainerLists;r.page=e,s(Object(i.a)(Object(i.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){c(e)}))}))}},o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,n,c){var r=c.api;return new Promise((function(e,n){r(Object(i.a)(Object(i.a)({},a.TrainerApi.getStatsData),{},{isAdmin:t})).then((function(t){e(t)})).catch((function(e){n(e)}))}))}},j=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,c,r){var s=r.api;return new Promise((function(n,c){var r=a.TrainerApi.getAllUsersLists;r.page=e,s(Object(i.a)(Object(i.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){c(e)}))}))}},u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,c,r){var s=r.api;return new Promise((function(n,c){var r=a.TrainerApi.fetchTrainersLists;r.page=e,s(Object(i.a)(Object(i.a)({},r),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){c(e)}))}))}}},283:function(e,t,n){"use strict";n.r(t);n(2);var i=n(115),a=n(1);t.default=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(i.default,{})})}},359:function(e,t,n){},386:function(e,t,n){},403:function(e,t,n){},474:function(e,t,n){}}]);
//# sourceMappingURL=103.c258db2c.chunk.js.map