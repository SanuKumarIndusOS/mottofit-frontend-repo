(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[71,143,175,317],{115:function(e,t,r){"use strict";r.r(t);var c=r(12),n=r(2),s=(r(459),r(432)),i=r(20),a=r(70),o=r(230),l=r(1),d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"wrapper_heading",children:[Object(l.jsx)("h2",{children:"Your Motto Matches"}),Object(l.jsx)("p",{children:"These matches are the perfect fit based on your filters. The prices shown are for 1:1 sessions. Click on the trainer profile for group rates!"})]})})})};t.default=function(e){var t=Object(n.useState)([]),r=Object(c.a)(t,2),u=r[0],j=r[1];Object(n.useEffect)((function(){j(e.content)}));var h=Object(n.useState)(3),b=Object(c.a)(h,2),f=b[0],O=b[1],p=Object(l.jsx)("div",{});return 0===u.length&&(p=Object(l.jsx)("h1",{className:"no_match",children:"No Matches found"})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(d,{}),p,Object(l.jsx)("div",{className:"row",style:{alignleft:"auto"},children:Object.keys(u).map((function(e,t){var r="".concat(o.COMMON_URL).concat(u[e].profilePicture);return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"card-img-top",src:r,style:{objectFit:"cover"},alt:"Profile Picture Not Found ",onError:function(e){e.target.onerror=null,e.target.src="https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"}}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("h3",{style:{textTransform:"capitalize"},children:[u[e].firstName,"\xa0",u[e].lastName]}),Object(l.jsxs)("h6",{children:[u[e].areaOfExpertise[0],u[e].areaOfExpertise[1]?",":"","\xa0",u[e].areaOfExpertise[1],u[e].areaOfExpertise[2]?",":"","\xa0",u[e].areaOfExpertise[2],"\xa0",u[e].areaOfExpertise[3]]}),Object(l.jsxs)("p",{children:[u[e].description,"\xa0",Object(l.jsx)("button",{onClick:function(){i.history.push({pathname:"/trainer/profile/".concat(u[e].id),state:{trainerId:u[e].id,trainerData:u[e]}})},children:"Read More"})]})]}),Object(l.jsx)("div",{className:"card-button",children:Object(l.jsxs)("button",{style:{backgroundColor:"#53BFD2"},onClick:function(){i.history.push({pathname:"/user/scheduler",state:{trainerId:u[e].id,trainerData:u[e]}})},children:["book a session",Object(l.jsx)(a.default,{}),Object(l.jsxs)("p",{children:["from"," ",Object(l.jsxs)("span",{children:["$",u[e].oneOnOnePricing.inPersonAtClientLocation]})]})]})})]},t)}))}),Object(l.jsx)("div",{className:"showmore",children:Object(l.jsxs)("button",{className:"showmore_btn",onClick:function(){O((function(e){return e+3}))},children:[f?"View More Trainers ":null,Object(l.jsx)("img",{src:s.default,alt:"icon"})]})})]})})}},230:function(e,t,r){"use strict";r.r(t),r.d(t,"COMMON_URL",(function(){return c})),r.d(t,"MESSAGING_URL",(function(){return n})),r.d(t,"SESSION_URL",(function(){return s})),r.d(t,"NOTIFICATION_URL",(function(){return i})),r.d(t,"PAYMENT_URL",(function(){return a}));var c="http://doodlebluelive.com:2307",n="http://doodlebluelive.com:2338",s="http://doodlebluelive.com:2337",i="",a="http://doodlebluelive.com:2336"},432:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/ArrowSecondary.2dfb6299.svg"},459:function(e,t,r){}}]);
//# sourceMappingURL=71.2f0b4a98.chunk.js.map