(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[74,207,208],{136:function(e,t,c){"use strict";c.r(t);var n=c(89),r=c(11),s=c(2),i=(c(501),c(8)),a=c(88),o=(c(502),c(37)),d=c(26),l=c(22),u=c(1),j=function(e){var t=e.otherRef;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"wrapper_headings",ref:t,children:Object(u.jsx)("h2",{children:"just outside your time"})})})})},b=Object(d.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(l.b)({updateUserDetails:o.updateUserDetails},e)}))((function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),o=c[0],d=c[1];Object(s.useEffect)((function(){d(e.content)}),[]),Object(s.useEffect)((function(){d(e.content)}),[e.content]);var l=function(t){var c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={selectedTrainerData:{trainerId:o[t].id,trainerData:o[t]}};e.updateUserDetails(n),c?i.history.push({pathname:"/trainer/profile/".concat(o[t].id)}):i.history.push({pathname:"/user/scheduler"})};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{otherRef:e.otherRef}),Object(u.jsx)("div",{className:"row",children:Object.keys(o).map((function(e,t){var c,r,s,i,d,j,b,h,f=null===(c=o[e])||void 0===c||null===(r=c.areaOfExpertise)||void 0===r?void 0:r.toString(),O=Object.values((null===(s=o[e])||void 0===s?void 0:s.oneOnOnePricing)||{}),v=Object.values((null===(i=o[e])||void 0===i?void 0:i.socialSessionPricing)||{}),p=Object.values((null===(d=o[e])||void 0===d?void 0:d.classSessionPricing)||{}),m=[].concat(Object(n.a)(O),Object(n.a)(v),Object(n.a)(p)).map((function(e){return parseFloat(e)})).filter((function(e){return!isNaN(e)&&e>0})).sort((function(e,t){return e-t}));return Object(u.jsxs)("div",{className:"card cursor-pointer",onClick:function(){return l(e,!0)},children:[Object(u.jsxs)("div",{className:"inner_card",children:[Object(u.jsx)("img",{className:"card-img-top card-img",src:o[e].profilePicture||"https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd",style:{objectFit:"cover"},onError:function(e){e.target.onerror=null,e.target.src="https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"}}),Object(u.jsx)("div",{className:"overlay_card",children:Object(u.jsx)("div",{className:"content_card",children:Object(u.jsx)("div",{className:"circle_hover_card",children:Object(u.jsx)("p",{children:"check me out"})})})})]}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h3",{style:{textTransform:"capitalize"},children:[null===(j=o[e])||void 0===j?void 0:j.firstName,"\xa0",null===(b=o[e])||void 0===b?void 0:b.lastName]}),Object(u.jsx)("h6",{children:f}),Object(u.jsxs)("p",{children:[null===(h=o[e])||void 0===h?void 0:h.description,Object(u.jsx)("button",{onClick:function(){return l(e,!0)},children:"Read More"})]})]}),Object(u.jsx)("div",{className:"card-button",children:Object(u.jsxs)("button",{style:{backgroundColor:"#53BFD2"},onClick:function(t){t.preventDefault(),t.stopPropagation(),l(e)},children:["book a session",Object(u.jsx)(a.default,{}),Object(u.jsxs)("p",{children:["from ",Object(u.jsxs)("span",{children:["$",m[0]||""]})]})]})})]},t)}))})]})})}));t.default=b},501:function(e,t,c){},502:function(e,t,c){}}]);