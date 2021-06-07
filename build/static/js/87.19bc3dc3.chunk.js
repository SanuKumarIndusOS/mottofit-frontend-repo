(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[87,133],{111:function(e,r,t){"use strict";t.r(r);var n=t(2),a=t.n(n),i=t(5),c=t(12),s=t(4),o=t.n(s),d=t(30),l=t.n(d),b=t(107),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:b.b,responsiveTag:b.b,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},j=function(e){var r=e.className,t=e.cssModule,n=e.size,s=e.bordered,o=e.borderless,d=e.striped,u=e.dark,j=e.hover,p=e.responsive,h=e.tag,v=e.responsiveTag,f=e.innerRef,O=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(b.a)(l()(r,"table",!!n&&"table-"+n,!!s&&"table-bordered",!!o&&"table-borderless",!!d&&"table-striped",!!u&&"table-dark",!!j&&"table-hover"),t),m=a.a.createElement(h,Object(i.a)({},O,{ref:f,className:g}));if(p){var x=Object(b.a)(!0===p?"table-responsive":"table-responsive-"+p,t);return a.a.createElement(v,{className:x},m)}return m};j.propTypes=u,j.defaultProps={tag:"table",responsiveTag:"div"};var p=j,h=t(6),v=t(226),f=t(34),O=t(27),g=t(1),m=Object(f.b)(null,(function(e){return Object(O.b)({changeApproval:v.changeApproval},e)}))((function(e){var r=e.trainerList,t=e.fetchAllTrainers,n=e.loading,a=e.changeApproval;if(n)return Object(g.jsx)("h2",{children:"loading..."});function i(e,r){a({trainerStatus:r},e).then((function(){alert("Approved"),t()})).catch((function(e){console.error("Error:",e)}))}return Object(g.jsxs)(p,{bordered:!0,hover:!0,size:"sm",responsive:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"row",children:"First Name"}),Object(g.jsx)("th",{scope:"row",children:"Email"}),Object(g.jsx)("th",{scope:"row",children:"Phone Number"}),Object(g.jsx)("th",{scope:"row",children:"Location"}),Object(g.jsx)("th",{scope:"row",children:"Expertise"}),Object(g.jsx)("th",{scope:"row",children:"Servicable Location"}),Object(g.jsx)("th",{scope:"row",children:"Trainer Status"})]})}),Object(g.jsx)("tbody",{children:r.map((function(e){var r;return r="approved"===e.trainerStatus?Object(g.jsx)("div",{onClick:function(){return i(e.id,"disapproved")},className:"btn btn-danger",children:"Disapprove"}):Object(g.jsx)("div",{onClick:function(){return i(e.id,"approved")},className:"btn btn-success",children:"Approve"}),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[" ",e.firstName]}),Object(g.jsxs)("td",{children:[" ",e.email]}),Object(g.jsxs)("td",{children:[" ",e.phoneNumber]}),Object(g.jsxs)("td",{children:[" ",e.location]}),Object(g.jsxs)("td",{children:[" ",e.areaOfExpertise]}),Object(g.jsxs)("td",{children:[" ",e.servicableLocation]}),Object(g.jsxs)("td",{children:[" ",e.trainerStatus]}),Object(g.jsx)("td",{children:Object(g.jsx)(h.a,{className:"btn btn-primary",to:"/admins/view/".concat(e.id),children:"view"})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{style:{border:"none"},children:r})})]})})}))})]})}));r.default=m},226:function(e,r,t){"use strict";t.r(r),t.d(r,"changeApproval",(function(){return i})),t.d(r,"getTrainerDetail",(function(){return c})),t.d(r,"getAllTrainerLists",(function(){return s})),t.d(r,"getAllUsersLists",(function(){return o})),t.d(r,"fetchTrainersLists",(function(){return d}));var n=t(3),a=t(13),i=function(e,r){return function(t,i,c){var s=c.api;return new Promise((function(t,i){var c=a.TrainerApi.changeApproval;c.id=r,s(Object(n.a)(Object(n.a)({},c),{},{body:e})).then((function(e){var r=e.data;t(r)})).catch((function(e){i(e)}))}))}},c=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,i,c){var s=c.api;return new Promise((function(t,i){var c=a.TrainerApi.getTrainerDetail;c.id=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:r})).then((function(e){var r=e.data;t(r)})).catch((function(e){i(e)}))}))}},s=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,i,c){var s=c.api;return new Promise((function(t,i){var c=a.TrainerApi.getAllTrainerLists;c.page=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:r})).then((function(e){var r=e.data;t(r)})).catch((function(e){i(e)}))}))}},o=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,i,c){var s=c.api;return new Promise((function(t,i){var c=a.TrainerApi.getAllUsersLists;c.page=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:r})).then((function(e){var r=e.data;t(r)})).catch((function(e){i(e)}))}))}},d=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t,i,c){var s=c.api;return new Promise((function(t,i){var c=a.TrainerApi.fetchTrainersLists;c.page=e,s(Object(n.a)(Object(n.a)({},c),{},{isAdmin:r})).then((function(e){var r=e.data;t(r)})).catch((function(e){i(e)}))}))}}}}]);
//# sourceMappingURL=87.19bc3dc3.chunk.js.map