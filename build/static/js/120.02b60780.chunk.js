(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[120,89,93,149,195,264],{123:function(e,t,n){"use strict";n.r(t);n(2),n(415);var a=n(768),i=n.n(a),r=n(1);t.default=function(e){var t=e.pageMetaData,n=void 0===t?{}:t,a=e.total,o=void 0===a?0:a,c=e.pageChange,s=void 0===c?{}:c;return Object(r.jsx)("div",{class:"common-pagination",children:n&&n.totalPages>1?Object(r.jsx)(i.a,{totalPosts:o,activePage:n.page,itemsCountPerPage:n.chunk,totalItemsCount:n.total,pageRangeDisplayed:3,hideFirstLastPages:!0,itemClass:"page-item",linkClass:"page-link",innerClass:"custom-pagination pagination pt-2",nextPageText:"\xbb",prevPageText:"\xab",onChange:function(e){return s(e)}}):null})}},133:function(e,t,n){"use strict";n.r(t);n(2);var a=n(889),i=n.n(a),r=(n(894),n(895)),o=n.n(r),c=(n(896),n(1));t.default=function(e){var t=e.userList,n=(e.fetchAllTrainers,e.loading),a=e.noTrainer,s=e.addOrRemove;if(n)return Object(c.jsx)("h2",{children:"loading..."});var u=[{dataField:"firstName",text:"First Name",sort:!0,filter:Object(r.textFilter)()},{dataField:"lastName",text:"Last Name",sort:!0,filter:Object(r.textFilter)()},{dataField:"email",text:"Email",filter:Object(r.textFilter)()},{dataField:"location",text:"Location",filter:Object(r.textFilter)()},{dataField:"phoneNo",text:"Phone Number",filter:Object(r.textFilter)()},{dataField:"status",text:"status",filter:Object(r.textFilter)()},{dataField:"id",text:"id",formatter:function(e,t){return"active"===t.status?Object(c.jsx)("div",{onClick:function(){s(e,"removed")},children:"REMOVE"}):Object(c.jsx)("div",{onClick:function(){s(e,"active")},children:"ADD"})}}],l=t&&Object.keys(t);console.log(l,"column");var d=a&&Object.keys(a);return console.log(d,"noTrainer"),console.log(a," data"),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.a,{bootstrap4:!0,keyField:"id",columns:u,data:t,filter:o()()})})}},277:function(e,t,n){"use strict";n.r(t),n.d(t,"changeApproval",(function(){return r})),n.d(t,"adminCancelSession",(function(){return o})),n.d(t,"getTrainerDetail",(function(){return c})),n.d(t,"getAllTrainerLists",(function(){return s})),n.d(t,"getAdminSession",(function(){return u})),n.d(t,"getStatsData",(function(){return l})),n.d(t,"getAllUsersLists",(function(){return d})),n.d(t,"AddorRemoveUser",(function(){return f})),n.d(t,"fetchTrainersLists",(function(){return p}));var a=n(4),i=n(15),r=function(e,t){return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.changeTrainerStatus,s={trainerId:t,action:null===e||void 0===e?void 0:e.trainerStatus};o.body=s,c(Object(a.a)({},o)).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},o=function(e,t){return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.adminCancelSession,s={sessionId:e,sessionStatus:t};o.body=s,console.log("action",s),c(Object(a.a)({},o)).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.getTrainerDetail;o.id=e,c(Object(a.a)(Object(a.a)({},o),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.getAllTrainerLists;o.page=e,c(Object(a.a)(Object(a.a)({},o),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},u=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(r,o,c){var s=c.api;return new Promise((function(r,o){var c=i.TrainerApi.getAdminSession;c.page="?limit=10&offset="+e,c.type=t+"/",console.log(c.type+c.page,"action"),s(Object(a.a)(Object(a.a)({},c),{},{isAdmin:n})).then((function(e){var t=e.data;r(t)})).catch((function(e){o(e)}))}))}},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e,n,r){var o=r.api;return new Promise((function(e,n){o(Object(a.a)(Object(a.a)({},i.TrainerApi.getStatsData),{},{isAdmin:t})).then((function(t){e(t)})).catch((function(e){n(e)}))}))}},d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.getAllUsersLists;o.page=e,c(Object(a.a)(Object(a.a)({},o),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},f=function(e,t){return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.AddorRemoveUser,s={userId:e,status:t};o.body=s,console.log(s,o),c(Object(a.a)({},o)).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}},p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,r,o){var c=o.api;return new Promise((function(n,r){var o=i.TrainerApi.fetchTrainersLists;o.page=e,c(Object(a.a)(Object(a.a)({},o),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){r(e)}))}))}}},304:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n(2),r=n.n(i),o=n(133),c=n(123),s=n(65),u=n(888),l=(n(543),n(277)),d=n(24),f=n(20),p=n(1),v=Object(d.b)(null,(function(e){return Object(f.b)({getAllUsersListsApi:l.getAllUsersLists,AddorRemoveUser:l.AddorRemoveUser},e)}))((function(e){var t,n=e.getAllUsersListsApi,l=e.AddorRemoveUser,d=r.a.useState([]),f=Object(a.a)(d,2),v=f[0],b=f[1],g=Object(i.useState)({}),j=Object(a.a)(g,2),h=j[0],O=j[1],m=Object(i.useState)(!1),x=Object(a.a)(m,2),A=x[0],T=x[1],y=Object(i.useState)(1),P=Object(a.a)(y,2),w=P[0],C=P[1],L=Object(i.useState)(""),S=Object(a.a)(L,2),F=S[0],R=S[1];function N(e){console.log(w),n(e).then((function(e){b(e.list),O(e.pageMetaData),T(!1)}))}return Object(i.useEffect)((function(){T(!0),N(1)}),[]),Object(i.useEffect)((function(){console.log(h.page,"page"),C(h.page)}),[h]),Object(p.jsx)("div",{className:"outter_container_AD container",children:A?Object(p.jsx)(s.CommonPageLoader,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Admin User's Data"}),Object(p.jsx)("div",{className:"trainer_admin",children:Object(p.jsxs)("div",{className:"views_trainer",children:[Object(p.jsx)("p",{children:"No of"}),Object(p.jsxs)("h3",{children:["User: ",Object(p.jsx)("span",{children:h.total})]})]})}),Object(p.jsx)(u.a,{style:{width:"20%"},type:"text",placeholder:"Search for User's",value:F,onChange:function(e){return R(e.target.value)},className:"mb-1"}),Object(p.jsx)(o.default,{userList:(t=v,t.filter((function(e){return e.email.toLowerCase().indexOf(F.toLowerCase())>-1||e.firstName.toLowerCase().indexOf(F.toLowerCase())>-1}))),loading:A,addOrRemove:function(e,t){console.log(e,t,w),l(e,t).then((function(){N(w),console.log("s")})).catch((function(e){console.error("Error:",e)}))}}),Object(p.jsx)(c.default,{pageMetaData:h,totalPosts:v.length,pageChange:function(e){return N(e)}})]})})}));t.default=v},415:function(e,t,n){},543:function(e,t,n){},888:function(e,t,n){"use strict";var a=n(6),i=n(12),r=n(27),o=n(10),c=n(2),s=n.n(c),u=n(3),l=n.n(u),d=n(23),f=n.n(d),p=n(5),v={children:l.a.node,type:l.a.string,size:l.a.oneOfType([l.a.number,l.a.string]),bsSize:l.a.string,valid:l.a.bool,invalid:l.a.bool,tag:p.g,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),plaintext:l.a.bool,addon:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.focus=n.focus.bind(Object(r.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,u=e.invalid,l=e.tag,d=e.addon,v=e.plaintext,b=e.innerRef,g=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),j=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),O=l||("select"===r||"textarea"===r?r:"input"),m="form-control";v?(m+="-plaintext",O=l||"input"):"file"===r?m+="-file":"range"===r?m+="-range":j&&(m=d?null:"form-check-input"),g.size&&h.test(g.size)&&(Object(p.i)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var x=Object(p.e)(f()(t,u&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,m),n);return("input"===O||l&&"function"===typeof l)&&(g.type=r),g.children&&!v&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(p.i)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(O,Object(a.a)({},g,{ref:b,className:x,"aria-invalid":u}))},t}(s.a.Component);b.propTypes=v,b.defaultProps={type:"text"},t.a=b}}]);