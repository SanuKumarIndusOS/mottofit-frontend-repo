(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[76,155,189,335],{128:function(e,t,n){"use strict";n.r(t);var s=n(83),c=n(15),r=n(2),i=(n(481),n(477)),o=n(14),a=n(82),u=n(268),l=n(33),d=n(38),b=n(21),j=n(1),h=function(e){var t=e.bestMatchRef;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"wrapper_heading",ref:t,children:[Object(j.jsx)("h2",{children:"Your Motto Matches"}),Object(j.jsx)("p",{children:"These matches are the perfect fit based on your filters. The prices shown are for 1:1 sessions. Click on the trainer profile for group rates!"})]})})})},f=Object(l.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(b.b)({updateUserDetails:d.updateUserDetails},e)}))((function(e){var t=Object(r.useState)([]),n=Object(c.a)(t,2),l=n[0],d=n[1];Object(r.useEffect)((function(){d(e.content)}));var b=Object(r.useState)(3),f=Object(c.a)(b,2),O=f[0],p=f[1],m=Object(j.jsx)("div",{});0===l.length&&(m=Object(j.jsx)("h1",{className:"no_match",children:"No Matches found"}));var v=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s={selectedTrainerData:{trainerId:l[t].id,trainerData:l[t]}};e.updateUserDetails(s),n?o.history.push({pathname:"/trainer/profile/".concat(l[t].id)}):o.history.push({pathname:"/user/scheduler"})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{bestMatchRef:e.bestMatchRef}),m,Object(j.jsx)("div",{className:"row",style:{alignleft:"auto"},children:Object.keys(l).map((function(e,t){"".concat(u.COMMON_URL).concat(l[e].profilePicture);var n,c,r,i,o,d,b,h,f=null===(n=l[e])||void 0===n||null===(c=n.areaOfExpertise)||void 0===c?void 0:c.toString(),O=Object.values((null===(r=l[e])||void 0===r?void 0:r.oneOnOnePricing)||{}),p=Object.values((null===(i=l[e])||void 0===i?void 0:i.socialSessionPricing)||{}),m=Object.values((null===(o=l[e])||void 0===o?void 0:o.classSessionPricing)||{}),x=[].concat(Object(s.a)(O),Object(s.a)(p),Object(s.a)(m)).map((function(e){return parseFloat(e)})).filter((function(e){return!isNaN(e)&&e>0})).sort((function(e,t){return e-t}));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{className:"card-img-top",src:l[e].profilePicture||"https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd",style:{objectFit:"cover"},alt:"Profile Picture Not Found ",onError:function(e){e.target.onerror=null,e.target.src="https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"}}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h3",{style:{textTransform:"capitalize"},children:[null===(d=l[e])||void 0===d?void 0:d.firstName,"\xa0",null===(b=l[e])||void 0===b?void 0:b.lastName]}),Object(j.jsx)("h6",{children:f}),Object(j.jsxs)("p",{children:[null===(h=l[e])||void 0===h?void 0:h.description,"\xa0",Object(j.jsx)("button",{onClick:function(){return v(e,!0)},children:"Read More"})]})]}),Object(j.jsx)("div",{className:"card-button",children:Object(j.jsxs)("button",{style:{backgroundColor:"#53BFD2"},onClick:function(){return v(e)},children:["book a session",Object(j.jsx)(a.default,{}),Object(j.jsxs)("p",{children:["from ",Object(j.jsxs)("span",{children:["$",x[0]||""]})]})]})})]},t)}))}),Object(j.jsx)("div",{className:"showmore",children:Object(j.jsxs)("button",{className:"showmore_btn",onClick:function(){p((function(e){return e+3}))},children:[O?"View More Trainers ":null,Object(j.jsx)("img",{src:i.default,alt:"icon"})]})})]})})}));t.default=f},268:function(e,t,n){"use strict";n.r(t),n.d(t,"COMMON_URL",(function(){return s})),n.d(t,"MESSAGING_URL",(function(){return c})),n.d(t,"SESSION_URL",(function(){return r})),n.d(t,"NOTIFICATION_URL",(function(){return i})),n.d(t,"PAYMENT_URL",(function(){return o})),n.d(t,"STRIPE_URL",(function(){return a}));var s="https://apis.bookmotto.com/user",c="https://apis.bookmotto.com/messaging",r="https://apis.bookmotto.com/session",i="",o="https://apis.bookmotto.com/payments",a="pk_live_51IJnd4BqgEC4bFYp4gC7EoInjpEKKjJXZMZGZurak1aK2ft1XN72QU355hRhLry3QmEucSKialeSBOGevqDJqfIJ00sU4zSO7O"},477:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ArrowSecondary.2dfb6299.svg"},481:function(e,t,n){}}]);
//# sourceMappingURL=76.bece43cd.chunk.js.map