(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[87,56,63,72,112,144,146],{111:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(2),r=n.n(i),s=(n(331),n(1));t.default=function(){var e=r.a.useState([]),t=Object(a.a)(e,2),n=t[0],i=t[1];function c(){fetch("http://doodlebluelive.com:2307/v1/admin/trainers?limit=20&page=1",{method:"get",headers:new Headers({Authorization:localStorage.getItem("admin-token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.list),i(e.data.list)}))}function o(e,t){console.log("http://doodlebluelive.com:2307/v1/trainer?trainerId="+e,{trainerStatus:t});var n={trainerStatus:t};fetch("http://doodlebluelive.com:2307/v1/trainer?trainerId="+e,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("admin-token")},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),c()})).catch((function(e){console.error("Error:",e)}))}return r.a.useEffect((function(){c()}),[]),Object(s.jsx)("div",{className:"outter_container_AD",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Admin Overall Data"}),Object(s.jsx)("br",{}),Object(s.jsx)("h3",{children:"Trainer List"}),Object(s.jsxs)("div",{className:"admin",children:[Object(s.jsxs)("div",{className:"tariner_info",children:[Object(s.jsx)("div",{className:"tariner_info_item_heading",children:"Name"}),Object(s.jsx)("div",{className:"tariner_info_item_heading",children:"Email"}),Object(s.jsx)("div",{className:"tariner_info_item_heading",children:"Trainer Status"}),Object(s.jsx)("div",{className:"tariner_info_item_heading",children:"Action"})]}),n.map((function(e){var t;return t="approved"===e.trainerStatus?Object(s.jsx)("div",{onClick:function(){return o(e.id,"disapproved")},children:"Disapprove"}):Object(s.jsx)("div",{onClick:function(){return o(e.id,"approved")},children:"Approve"}),Object(s.jsxs)("div",{className:"trainer_info",children:[Object(s.jsx)("div",{className:"tariner_info_item",children:e.firstName}),Object(s.jsx)("div",{className:"tariner_info_item",children:e.email}),Object(s.jsx)("div",{className:"tariner_info_item",children:e.trainerStatus}),Object(s.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(s.jsx)("button",{className:"tariner_info_button",children:t})," "]})]})}))]})]})})}},113:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(2),r=n(111),s=(n(364),n(1));t.default=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)([]),l=Object(a.a)(o,2),d=l[0],j=l[1],b=Object(i.useState)(!1),h=Object(a.a)(b,2),u=h[0],p=h[1];return console.log(d,"user"),console.log(n,"trainer"),Object(i.useEffect)((function(){p(!0),fetch("http://doodlebluelive.com:2307/v1/admin/trainers?limit=10&page=1",{method:"get",headers:new Headers({Authorization:localStorage.getItem("admin-token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){c(e.data.pageMetaData),p(!1)})),p(!0),fetch("http://doodlebluelive.com:2307/v1/admin/users?limit=5&page=2",{method:"get",headers:new Headers({Authorization:localStorage.getItem("admin-token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){j(e.data.pageMetaData),p(!1)}))}),[]),Object(s.jsx)("div",{className:"outter_container_AD",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Admin Dashboard"}),Object(s.jsxs)("div",{className:"inner_AD",children:[Object(s.jsx)("div",{className:"wrapper_AD",children:Object(s.jsxs)("div",{className:"AD_views",children:[Object(s.jsxs)("div",{className:"views_AD",children:[Object(s.jsx)("p",{children:"No of"}),Object(s.jsxs)("h3",{children:["User's :",u?Object(s.jsx)("span",{children:"Loading..."}):Object(s.jsxs)("span",{children:[" ",d.total]})]})]}),Object(s.jsxs)("div",{className:"views_AD",children:[Object(s.jsx)("p",{children:"No of"}),Object(s.jsxs)("h3",{children:["Trainer's :",u?Object(s.jsx)("span",{children:"Loading..."}):Object(s.jsxs)("span",{children:[" ",n.total]})]})]}),Object(s.jsxs)("div",{className:"views_AD",children:[Object(s.jsx)("p",{children:"No of"}),Object(s.jsxs)("h3",{children:["Page Views : ",Object(s.jsx)("span",{children:"300"})]})]}),Object(s.jsxs)("div",{className:"views_AD",children:[Object(s.jsxs)("h3",{children:["Revenue : ",Object(s.jsx)("span",{children:"$100"})]})," "]})]})}),Object(s.jsx)(r.default,{})]})]})})}},121:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(9),s=n(13),c=n(3),o=n.n(c),l=n(36),d=n.n(l),j=n(118),b={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:j.b,responsiveTag:j.b,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},h=function(e){var t=e.className,n=e.cssModule,a=e.size,c=e.bordered,o=e.borderless,l=e.striped,b=e.dark,h=e.hover,u=e.responsive,p=e.tag,f=e.responsiveTag,O=e.innerRef,m=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(j.a)(d()(t,"table",!!a&&"table-"+a,!!c&&"table-bordered",!!o&&"table-borderless",!!l&&"table-striped",!!b&&"table-dark",!!h&&"table-hover"),n),x=i.a.createElement(p,Object(r.a)({},m,{ref:O,className:v}));if(u){var g=Object(j.a)(!0===u?"table-responsive":"table-responsive-"+u,n);return i.a.createElement(f,{className:g},x)}return x};h.propTypes=b,h.defaultProps={tag:"table",responsiveTag:"div"};var u=h,p=n(4),f=n(1);t.default=function(e){var t=e.trainerList,n=e.fetchAllTrainers;if(e.loading)return Object(f.jsx)("h2",{children:"loading..."});var a=t[0]&&Object.keys(t[0]);function i(e,t){console.log("http://doodlebluelive.com:2307/v1/trainer?trainerId="+e,{trainerStatus:t});var a={trainerStatus:t};fetch("http://doodlebluelive.com:2307/v1/trainer?trainerId="+e,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("admin-token")},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),n()})).catch((function(e){console.error("Error:",e)}))}return console.log(a,"column"),Object(f.jsxs)(u,{bordered:!0,hover:!0,size:"sm",responsive:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:"First Name"}),Object(f.jsx)("th",{scope:"row",children:"Email"}),Object(f.jsx)("th",{scope:"row",children:"Phone Number"}),Object(f.jsx)("th",{scope:"row",children:"Location"}),Object(f.jsx)("th",{scope:"row",children:"Expertise"}),Object(f.jsx)("th",{scope:"row",children:"Servicable Location"}),Object(f.jsx)("th",{scope:"row",children:"Trainer Status"})]})}),Object(f.jsx)("tbody",{children:t.map((function(e){var t;return t="approved"===e.trainerStatus?Object(f.jsx)("div",{onClick:function(){return i(e.id,"disapproved")},className:"btn btn-danger",children:"Disapprove"}):Object(f.jsx)("div",{onClick:function(){return i(e.id,"approved")},className:"btn btn-success",children:"Approve"}),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[" ",e.firstName]}),Object(f.jsxs)("td",{children:[" ",e.email]}),Object(f.jsxs)("td",{children:[" ",e.phoneNumber]}),Object(f.jsxs)("td",{children:[" ",e.location]}),Object(f.jsxs)("td",{children:[" ",e.areaOfExpertise]}),Object(f.jsxs)("td",{children:[" ",e.servicableLocation]}),Object(f.jsxs)("td",{children:[" ",e.trainerStatus]}),Object(f.jsxs)("td",{children:[" ",Object(f.jsx)(p.a,{style:{border:"none"},className:"btn btn-primary",children:"view"})," "]}),Object(f.jsxs)("div",{children:[" ",Object(f.jsx)("button",{style:{border:"none"},children:t})," "]})]})})}))})]})}},231:function(e,t,n){"use strict";n.r(t);n(2);var a=n(1);t.default=function(e){for(var t=e.postsPerPage,n=e.totalPosts,i=e.paginate,r=[],s=1;s<=Math.ceil(n/t);s++)r.push(s);return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{onClick:function(){return i(e)},href:"!#",className:"page-link",children:e})},e)}))})})}},248:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(2),r=n.n(i),s=n(121),c=n(231),o=n(671),l=(n(331),n(113),n(1));t.default=function(){var e=r.a.useState([]),t=Object(a.a)(e,2),n=t[0],d=t[1],j=Object(i.useState)([]),b=Object(a.a)(j,2),h=b[0],u=b[1],p=Object(i.useState)(1),f=Object(a.a)(p,2),O=f[0],m=f[1],v=Object(i.useState)(2e3),x=Object(a.a)(v,1)[0],g=Object(i.useState)(!1),N=Object(a.a)(g,2),w=N[0],_=N[1],S=Object(i.useState)(""),y=Object(a.a)(S,2),T=y[0],A=y[1];console.log(h,"main"),Object(i.useEffect)((function(){_(!0),_(!0),fetch("http://doodlebluelive.com:2307/v1/admin/trainers?limit=".concat(x,"&page=").concat(O),{method:"get",headers:new Headers({Authorization:localStorage.getItem("admin-token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){d(e.data.list),u(e.data.pageMetaData),_(!1)}))}),[]);var k,z=O*x,D=z-x,C=n.slice(D,z);return Object(l.jsxs)("div",{className:"outter_container_AD container",children:[Object(l.jsx)("h2",{children:"Admin Trainer's Data "}),Object(l.jsxs)("div",{className:"trainer_admin",children:[Object(l.jsxs)("div",{className:"views_trainer",children:[Object(l.jsx)("p",{children:"No of"}),Object(l.jsxs)("h3",{children:["Trainer's :",w?Object(l.jsx)("span",{children:"Loading..."}):Object(l.jsxs)("span",{children:[" ",h.total]})]})]}),Object(l.jsx)(o.a,{style:{width:"20%"},type:"text",placeholder:"Search for Trainer's",value:T,onChange:function(e){return A(e.target.value)}})]}),Object(l.jsx)(s.default,{trainerList:(k=C,k.filter((function(e){return e.email.toLowerCase().indexOf(T.toLowerCase())>-1||e.firstName.toLowerCase().indexOf(T.toLowerCase())>-1}))),loading:w}),Object(l.jsx)(c.default,{postsPerPage:x,totalPosts:n.length,paginate:function(e){return m(e)}})]})}},331:function(e,t,n){},364:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(9),i=n(13),r=n(90),s=n(12),c=n(2),o=n.n(c),l=n(3),d=n.n(l),j=n(36),b=n.n(j),h=n(118),u={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.b,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.focus=n.focus.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,l=e.invalid,d=e.tag,j=e.addon,u=e.plaintext,p=e.innerRef,f=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),O=["radio","checkbox"].indexOf(r)>-1,m=new RegExp("\\D","g"),v=d||("select"===r||"textarea"===r?r:"input"),x="form-control";u?(x+="-plaintext",v=d||"input"):"file"===r?x+="-file":"range"===r?x+="-range":O&&(x=j?null:"form-check-input"),f.size&&m.test(f.size)&&(Object(h.c)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=f.size,delete f.size);var g=Object(h.a)(b()(t,l&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,x),n);return("input"===v||d&&"function"===typeof d)&&(f.type=r),f.children&&!u&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(h.c)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),o.a.createElement(v,Object(a.a)({},f,{ref:p,className:g,"aria-invalid":l}))},t}(o.a.Component);p.propTypes=u,p.defaultProps={type:"text"},t.a=p}}]);
//# sourceMappingURL=87.69d57b51.chunk.js.map