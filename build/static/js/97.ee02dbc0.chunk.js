(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[97,80,120,122,134,157],{111:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(4),s=n(12),c=n(3),o=n.n(c),l=n(30),d=n.n(l),u=n(105),b={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.b,responsiveTag:u.b,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var t=e.className,n=e.cssModule,a=e.size,c=e.bordered,o=e.borderless,l=e.striped,b=e.dark,p=e.hover,j=e.responsive,f=e.tag,h=e.responsiveTag,O=e.innerRef,v=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),m=Object(u.a)(d()(t,"table",!!a&&"table-"+a,!!c&&"table-bordered",!!o&&"table-borderless",!!l&&"table-striped",!!b&&"table-dark",!!p&&"table-hover"),n),g=r.a.createElement(f,Object(i.a)({},v,{ref:O,className:m}));if(j){var x=Object(u.a)(!0===j?"table-responsive":"table-responsive-"+j,n);return r.a.createElement(h,{className:x},g)}return g};p.propTypes=b,p.defaultProps={tag:"table",responsiveTag:"div"};var j=p,f=n(5),h=n(217),O=n(34),v=n(27),m=n(1),g=Object(O.b)(null,(function(e){return Object(v.b)({changeApproval:h.changeApproval},e)}))((function(e){var t=e.trainerList,n=e.fetchAllTrainers,a=e.loading,r=e.changeApproval;if(a)return Object(m.jsx)("h2",{children:"loading..."});function i(e,t){r({trainerStatus:t},e).then((function(){alert("Approved"),n()})).catch((function(e){console.error("Error:",e)}))}return Object(m.jsxs)(j,{bordered:!0,hover:!0,size:"sm",responsive:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"First Name"}),Object(m.jsx)("th",{scope:"row",children:"Email"}),Object(m.jsx)("th",{scope:"row",children:"Phone Number"}),Object(m.jsx)("th",{scope:"row",children:"Location"}),Object(m.jsx)("th",{scope:"row",children:"Expertise"}),Object(m.jsx)("th",{scope:"row",children:"Servicable Location"}),Object(m.jsx)("th",{scope:"row",children:"Trainer Status"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){var t;return t="approved"===e.trainerStatus?Object(m.jsx)("div",{onClick:function(){return i(e.id,"disapproved")},className:"btn btn-danger",children:"Disapprove"}):Object(m.jsx)("div",{onClick:function(){return i(e.id,"approved")},className:"btn btn-success",children:"Approve"}),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",e.firstName]}),Object(m.jsxs)("td",{children:[" ",e.email]}),Object(m.jsxs)("td",{children:[" ",e.phoneNumber]}),Object(m.jsxs)("td",{children:[" ",e.location]}),Object(m.jsxs)("td",{children:[" ",e.areaOfExpertise]}),Object(m.jsxs)("td",{children:[" ",e.servicableLocation]}),Object(m.jsxs)("td",{children:[" ",e.trainerStatus]}),Object(m.jsx)("td",{children:Object(m.jsx)(f.a,{className:"btn btn-primary",to:"/admins/view/".concat(e.id),children:"view"})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{style:{border:"none"},children:t})})]})})}))})]})}));t.default=g},215:function(e,t,n){"use strict";n.r(t),n.d(t,"COMMON_URL",(function(){return a})),n.d(t,"MESSAGING_URL",(function(){return r})),n.d(t,"SESSION_URL",(function(){return i})),n.d(t,"NOTIFICATION_URL",(function(){return s})),n.d(t,"PAYMENT_URL",(function(){return c}));var a="https://apis.bookmotto.com/user",r="https://apis.bookmotto.com/messaging",i="https://apis.bookmotto.com/session",s="",c="https://apis.bookmotto.com/payments"},217:function(e,t,n){"use strict";n.r(t),n.d(t,"changeApproval",(function(){return i})),n.d(t,"getTrainerDetail",(function(){return s}));var a=n(6),r=n(24),i=function(e,t){return function(n,i,s){var c=s.api;return new Promise((function(n,i){var s=r.TrainerApi.changeApproval;s.id=t,c(Object(a.a)(Object(a.a)({},s),{},{body:e})).then((function(e){var t=e.data;n(t)})).catch((function(e){i(e)}))}))}},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n,i,s){var c=s.api;return new Promise((function(n,i){var s=r.TrainerApi.getTrainerDetail;s.id=e,c(Object(a.a)(Object(a.a)({},s),{},{isAdmin:t})).then((function(e){var t=e.data;n(t)})).catch((function(e){i(e)}))}))}}},221:function(e,t,n){"use strict";n.r(t);n(2);var a=n(1);t.default=function(e){for(var t=e.postsPerPage,n=e.totalPosts,r=e.paginate,i=[],s=1;s<=Math.ceil(n/t);s++)i.push(s);return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{onClick:function(){return r(e)},href:"!#",className:"page-link",children:e})},e)}))})})}},239:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(2),i=n.n(r),s=n(111),c=n(221),o=n(699),l=n(215),d=(n(363),n(1));t.default=function(){var e=i.a.useState([]),t=Object(a.a)(e,2),n=t[0],u=t[1],b=Object(r.useState)([]),p=Object(a.a)(b,2),j=p[0],f=p[1],h=Object(r.useState)(1),O=Object(a.a)(h,2),v=O[0],m=O[1],g=Object(r.useState)(2e3),x=Object(a.a)(g,1)[0],N=Object(r.useState)(!1),w=Object(a.a)(N,2),y=w[0],T=w[1],S=Object(r.useState)(""),R=Object(a.a)(S,2),k=R[0],A=R[1];Object(r.useEffect)((function(){T(!0),T(!0),fetch("".concat(l.COMMON_URL,"/v1/admin/trainers?limit=").concat(x,"&page=").concat(v),{method:"get",headers:new Headers({Authorization:localStorage.getItem("admin-token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){u(e.data.list),f(e.data.pageMetaData),T(!1)}))}),[]);var z,L=v*x,M=L-x,P=n.slice(M,L);return Object(d.jsxs)("div",{className:"outter_container_AD container",children:[Object(d.jsx)("h2",{children:"Admin Trainer's Data "}),Object(d.jsxs)("div",{className:"trainer_admin",children:[Object(d.jsxs)("div",{className:"views_trainer",children:[Object(d.jsx)("p",{children:"No of"}),Object(d.jsxs)("h3",{children:["Trainer's :",y?Object(d.jsx)("span",{children:"Loading..."}):Object(d.jsxs)("span",{children:[" ",j.total]})]})]}),Object(d.jsx)(o.a,{style:{width:"20%"},type:"text",placeholder:"Search for Trainer's",value:k,onChange:function(e){return A(e.target.value)}})]}),Object(d.jsx)(s.default,{trainerList:(z=P,z.filter((function(e){return e.email.toLowerCase().indexOf(k.toLowerCase())>-1||e.firstName.toLowerCase().indexOf(k.toLowerCase())>-1}))),loading:y}),Object(d.jsx)(c.default,{postsPerPage:x,totalPosts:n.length,paginate:function(e){return m(e)}})]})}},363:function(e,t,n){},699:function(e,t,n){"use strict";var a=n(4),r=n(12),i=n(74),s=n(11),c=n(2),o=n.n(c),l=n(3),d=n.n(l),u=n(30),b=n.n(u),p=n(105),j={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.b,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(i.a)(n)),n.focus=n.focus.bind(Object(i.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.type,s=e.bsSize,c=e.valid,l=e.invalid,d=e.tag,u=e.addon,j=e.plaintext,f=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),O=["radio","checkbox"].indexOf(i)>-1,v=new RegExp("\\D","g"),m=d||("select"===i||"textarea"===i?i:"input"),g="form-control";j?(g+="-plaintext",m=d||"input"):"file"===i?g+="-file":"range"===i?g+="-range":O&&(g=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.c)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var x=Object(p.a)(b()(t,l&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,g),n);return("input"===m||d&&"function"===typeof d)&&(h.type=i),h.children&&!j&&"select"!==i&&"string"===typeof m&&"select"!==m&&(Object(p.c)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(m,Object(a.a)({},h,{ref:f,className:x,"aria-invalid":l}))},t}(o.a.Component);f.propTypes=j,f.defaultProps={type:"text"},t.a=f}}]);
//# sourceMappingURL=97.ee02dbc0.chunk.js.map