(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[57,126],{124:function(e,t,i){"use strict";i.r(t);var n=i(6),r=i(2),a=i.n(r),c=(i(426),i(1));t.default=function(){var e=a.a.useState([]),t=Object(n.a)(e,2),i=t[0],r=t[1];function o(){fetch("http://doodlebluelive.com:2307/v1/admin/trainers?limit=10&page=1",{method:"get",headers:new Headers({Authorization:localStorage.getItem("admin-token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.list),r(e.data.list)}))}function s(e,t){console.log("http://doodlebluelive.com:2307/v1/trainer?trainerId="+e,{trainerStatus:t});var i={trainerStatus:t};fetch("http://doodlebluelive.com:2307/v1/trainer?trainerId="+e,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("admin-token")},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),o()})).catch((function(e){console.error("Error:",e)}))}return a.a.useEffect((function(){o()}),[]),Object(c.jsx)("div",{className:"outter_container_AD",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{children:"Admin Dashboard"}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Trainer List"}),Object(c.jsxs)("div",{className:"admin",children:[Object(c.jsxs)("div",{className:"tariner_info",children:[Object(c.jsx)("div",{className:"tariner_info_item_heading",children:"Name"}),Object(c.jsx)("div",{className:"tariner_info_item_heading",children:"Email"}),Object(c.jsx)("div",{className:"tariner_info_item_heading",children:"Trainer Status"}),Object(c.jsx)("div",{className:"tariner_info_item_heading",children:"Action"})]}),i.map((function(e){var t;return t="approved"===e.trainerStatus?Object(c.jsx)("div",{onClick:function(){return s(e.id,"disapproved")},children:"Disapprove"}):Object(c.jsx)("div",{onClick:function(){return s(e.id,"approved")},children:"Approve"}),Object(c.jsxs)("div",{className:"trainer_info",children:[Object(c.jsx)("div",{className:"tariner_info_item",children:e.firstName}),Object(c.jsx)("div",{className:"tariner_info_item",children:e.email}),Object(c.jsx)("div",{className:"tariner_info_item",children:e.trainerStatus}),Object(c.jsxs)("div",{className:"tariner_info_item",children:[" ",Object(c.jsx)("button",{className:"tariner_info_button",children:t})," "]})]})}))]})]})})}},426:function(e,t,i){}}]);
//# sourceMappingURL=57.ac4fd256.chunk.js.map