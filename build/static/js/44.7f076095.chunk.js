(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[44,58,81,122,156,159,223],{107:function(e,t,n){"use strict";n.r(t);var i=n(10),a=n(2),r=(n(365),n(217)),c=n(34),s=n(27),o=n(98),l=n(1),j=Object(c.b)(null,(function(e){return Object(s.b)({changeApproval:r.changeApproval,getAllTrainerLists:r.getAllTrainerLists},e)}))((function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)({}),j=Object(i.a)(s,2),u=j[0],d=j[1];function h(t){e.getAllTrainerLists(t).then((function(e){c(e.list),d(e.pageMetaData)}))}function f(t,n){var i={trainerStatus:n};e.changeApproval(i,t).then((function(){h()})).catch((function(e){console.error("Error:",e)}))}return Object(a.useEffect)((function(){h(1)}),[]),Object(l.jsx)("div",{className:"outter_container_AD",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Admin Overall Data"}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"Trainer List"}),Object(l.jsxs)("div",{className:"admin",children:[Object(l.jsxs)("div",{className:"tariner_info",children:[Object(l.jsx)("div",{className:"tariner_info_item_heading",children:"Name"}),Object(l.jsx)("div",{className:"tariner_info_item_heading",children:"Email"}),Object(l.jsx)("div",{className:"tariner_info_item_heading",children:"Trainer Status"}),Object(l.jsx)("div",{className:"tariner_info_item_heading",children:"Action"})]}),r.map((function(e){var t;return t="approved"===e.trainerStatus?Object(l.jsx)("div",{onClick:function(){return f(e.id,"disapproved")},children:"Disapprove"}):Object(l.jsx)("div",{onClick:function(){return f(e.id,"approved")},children:"Approve"}),Object(l.jsxs)("div",{className:"trainer_info",children:[Object(l.jsx)("div",{className:"tariner_info_item",children:e.firstName}),Object(l.jsx)("div",{className:"tariner_info_item",children:e.email}),Object(l.jsx)("div",{className:"tariner_info_item",children:e.trainerStatus}),Object(l.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(l.jsx)("button",{className:"tariner_info_button",children:t})," "]})]})})),Object(l.jsx)(o.default,{pageMetaData:u,totalPosts:r.length,pageChange:function(e){return h(e)}})]})]})})}));t.default=j},115:function(e,t,n){"use strict";n.r(t);var i=n(10),a=n(2),r=n(107),c=(n(440),n(217)),s=n(34),o=n(27),l=n(1),j=Object(s.b)(null,(function(e){return Object(o.b)({getAllTrainerLists:c.getAllTrainerLists,getAllUsersLists:c.getAllUsersLists},e)}))((function(e){var t=e.getAllTrainerLists,n=e.getAllUsersLists,c=Object(a.useState)([]),s=Object(i.a)(c,2),o=s[0],j=s[1],u=Object(a.useState)([]),d=Object(i.a)(u,2),h=d[0],f=d[1],b=Object(a.useState)(!1),v=Object(i.a)(b,2),O=v[0],p=v[1];return Object(a.useEffect)((function(){p(!0),t(1).then((function(e){j(e.pageMetaData),p(!1)})),n(1).then((function(e){f(e.pageMetaData),p(!1)}))}),[]),O?"Loading...":Object(l.jsx)("div",{className:"outter_container_AD",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Admin Dashboard"}),Object(l.jsxs)("div",{className:"inner_AD",children:[Object(l.jsx)("div",{className:"wrapper_AD",children:Object(l.jsxs)("div",{className:"AD_views",children:[Object(l.jsxs)("div",{className:"views_AD",children:[Object(l.jsx)("p",{children:"No of"}),Object(l.jsxs)("h3",{children:["User's :",Object(l.jsxs)("span",{children:[" ",h.total]})]})]}),Object(l.jsxs)("div",{className:"views_AD",children:[Object(l.jsx)("p",{children:"No of"}),Object(l.jsxs)("h3",{children:["Trainer's :",Object(l.jsxs)("span",{children:[" ",o.total]})]})]}),Object(l.jsxs)("div",{className:"views_AD",children:[Object(l.jsx)("p",{children:"No of"}),Object(l.jsxs)("h3",{children:["Page Views : ",Object(l.jsx)("span",{children:"300"})]})]}),Object(l.jsxs)("div",{className:"views_AD",children:[Object(l.jsxs)("h3",{children:["Revenue : ",Object(l.jsx)("span",{children:"$100"})]})," "]})]})}),Object(l.jsx)(r.default,{})]})]})})}));t.default=j},217:function(e,t,n){"use strict";n.r(t),n.d(t,"changeApproval",(function(){return r})),n.d(t,"getTrainerDetail",(function(){return c})),n.d(t,"getAllTrainerLists",(function(){return s})),n.d(t,"getAllUsersLists",(function(){return o})),n.d(t,"fetchTrainersLists",(function(){return l}));var i=n(4),a=n(13),r=function(e,t){return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.changeApproval;c.id=t,s(Object(i.a)(Object(i.a)({},c),{},{body:e})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getTrainerDetail;c.id=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getAllTrainerLists;c.page=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.getAllUsersLists;c.page=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,c){var s=c.api;return new Promise((function(n,r){var c=a.TrainerApi.fetchTrainersLists;c.page=e,s(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}}},319:function(e,t,n){},365:function(e,t,n){},440:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(2),n(319);var i=n(618),a=n.n(i),r=n(1);t.default=function(e){var t=e.pageMetaData,n=void 0===t?{}:t,i=e.total,c=void 0===i?0:i,s=e.pageChange,o=void 0===s?{}:s;return Object(r.jsx)("div",{class:"common-pagination",children:n&&n.totalPages>1?Object(r.jsx)(a.a,{totalPosts:c,activePage:n.page,itemsCountPerPage:n.chunk,totalItemsCount:n.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(e){return o(e)}}):null})}}}]);
//# sourceMappingURL=44.7f076095.chunk.js.map