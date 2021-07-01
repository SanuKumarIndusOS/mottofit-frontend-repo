(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[94,144],{162:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),i=r(6),c=r(10),s=r(3),o=r.n(s),d=r(20),l=r.n(d),u=r(5),b={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.g,responsiveTag:u.g,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},h=function(e){var t=e.className,r=e.cssModule,n=e.size,s=e.bordered,o=e.borderless,d=e.striped,b=e.dark,h=e.hover,p=e.responsive,j=e.tag,v=e.responsiveTag,f=e.innerRef,O=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),m=Object(u.e)(l()(t,"table",!!n&&"table-"+n,!!s&&"table-bordered",!!o&&"table-borderless",!!d&&"table-striped",!!b&&"table-dark",!!h&&"table-hover"),r),g=a.a.createElement(j,Object(i.a)({},O,{ref:f,className:m}));if(p){var x=Object(u.e)(!0===p?"table-responsive":"table-responsive-"+p,r);return a.a.createElement(v,{className:x},g)}return g};h.propTypes=b,h.defaultProps={tag:"table",responsiveTag:"div"};var p=h,j=r(8),v=r(270),f=r(33),O=r(21),m=r(1),g=Object(f.b)(null,(function(e){return Object(O.b)({changeApproval:v.changeApproval},e)}))((function(e){var t=e.trainerList,r=e.fetchAllTrainers,n=e.loading,a=e.changeApproval;if(n)return Object(m.jsx)("h2",{children:"loading..."});function i(e,t){a({trainerStatus:t},e).then((function(){r()})).catch((function(e){console.error("Error:",e)}))}return Object(m.jsxs)(p,{bordered:!0,hover:!0,size:"sm",responsive:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"First Name"}),Object(m.jsx)("th",{scope:"row",children:"Email"}),Object(m.jsx)("th",{scope:"row",children:"Phone Number"}),Object(m.jsx)("th",{scope:"row",children:"Location"}),Object(m.jsx)("th",{scope:"row",children:"Expertise"}),Object(m.jsx)("th",{scope:"row",children:"Serviceable Location"}),Object(m.jsx)("th",{scope:"row",children:"Trainer Status"}),Object(m.jsx)("th",{scope:"row",colSpan:"2",children:"Actions"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){var t;return t="approved"===e.trainerStatus?Object(m.jsx)("div",{onClick:function(){return i(e.id,"disapproved")},className:"btn btn-danger mx-0",children:"Disapprove"}):Object(m.jsx)("div",{onClick:function(){return i(e.id,"approved")},className:"btn btn-success mx-0",children:"Approve"}),Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",e.firstName?e.firstName:"-"]}),Object(m.jsxs)("td",{children:[" ",e.email?e.email:"-"]}),Object(m.jsxs)("td",{children:[" ",e.phoneNumber?e.phoneNumber:"-"]}),Object(m.jsxs)("td",{children:[" ",e.location?e.location:"-"]}),Object(m.jsxs)("td",{children:[" ",e.areaOfExpertise?e.areaOfExpertise:"-"]}),Object(m.jsx)("td",{children:e.servicableLocation?e.servicableLocation:"-"}),Object(m.jsxs)("td",{children:[" ",e.trainerStatus?e.trainerStatus:"-"]}),Object(m.jsx)("td",{children:Object(m.jsx)(j.a,{className:"btn btn-primary",to:"/admins/view/".concat(e.id),children:"view"})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{style:{border:"none"},className:"p-0",children:t})})]})}))})]})}));t.default=g},270:function(e,t,r){"use strict";r.r(t),r.d(t,"changeApproval",(function(){return i})),r.d(t,"getTrainerDetail",(function(){return c})),r.d(t,"getAllTrainerLists",(function(){return s})),r.d(t,"getStatsData",(function(){return o})),r.d(t,"getAllUsersLists",(function(){return d})),r.d(t,"fetchTrainersLists",(function(){return l}));var n=r(4),a=r(16),i=function(e,t){return function(r,i,c){var s=c.api;return new Promise((function(r,i){var c=a.TrainerApi.changeTrainerStatus,o={trainerId:t,action:null===e||void 0===e?void 0:e.trainerStatus};c.body=o,s(Object(n.a)({},c)).then((function(e){var t=e.data;r(t)})).catch((function(e){i(e)}))}))}},c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,i,c){var s=c.api;return new Promise((function(r,i){var c=a.TrainerApi.getTrainerDetail;c.id=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;r(t)})).catch((function(e){i(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,i,c){var s=c.api;return new Promise((function(r,i){var c=a.TrainerApi.getAllTrainerLists;c.page=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;r(t)})).catch((function(e){i(e)}))}))}},o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,r,i){var c=i.api;return new Promise((function(e,r){c(Object(n.a)(Object(n.a)({},a.TrainerApi.getStatsData),{},{isAdmin:t})).then((function(t){e(t)})).catch((function(e){r(e)}))}))}},d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,i,c){var s=c.api;return new Promise((function(r,i){var c=a.TrainerApi.getAllUsersLists;c.page=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;r(t)})).catch((function(e){i(e)}))}))}},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,i,c){var s=c.api;return new Promise((function(r,i){var c=a.TrainerApi.fetchTrainersLists;c.page=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:t})).then((function(e){var t=e.data;r(t)})).catch((function(e){i(e)}))}))}}}}]);
//# sourceMappingURL=94.ecdb8b03.chunk.js.map