(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[69,134,163,300],{108:function(e,t,s){"use strict";s.r(t);var r=s(10),c=s(2),n=(s(386),s(385)),a=s(13),i=s(69),o=s(215),d=s(1),l=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"wrapper_heading",children:[Object(d.jsx)("h2",{children:"Your Motto Matches"}),Object(d.jsx)("p",{children:"These matches are the perfect fit based on your filters. The prices shown are for 1:1 sessions. Click on the trainer profile for group rates!"})]})})})};t.default=function(e){var t=Object(c.useState)([]),s=Object(r.a)(t,2),j=s[0],u=s[1];Object(c.useEffect)((function(){u(e.content)}));var h=Object(c.useState)(3),b=Object(r.a)(h,2),f=b[0],O=b[1],p=Object(d.jsx)("div",{});return 0===j.length&&(p=Object(d.jsx)("h1",{className:"no_match",children:"No Matches found"})),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(l,{}),p,Object(d.jsx)("div",{className:"row",style:{alignleft:"auto"},children:Object.keys(j).map((function(e,t){var s="".concat(o.COMMON_URL).concat(j[e].profilePicture);return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{className:"card-img-top",src:s,style:{objectFit:"cover"},alt:"Profile Picture Not Found ",onError:function(e){e.target.onerror=null,e.target.src="https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"}}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h3",{style:{textTransform:"capitalize"},children:[j[e].firstName,"\xa0",j[e].lastName]}),Object(d.jsxs)("h6",{children:[j[e].areaOfExpertise[0],j[e].areaOfExpertise[1]?",":"","\xa0",j[e].areaOfExpertise[1],j[e].areaOfExpertise[2]?",":"","\xa0",j[e].areaOfExpertise[2],"\xa0",j[e].areaOfExpertise[3]]}),Object(d.jsxs)("p",{children:[j[e].description,"\xa0",Object(d.jsx)("button",{onClick:function(){a.history.push({pathname:"/trainer/profile/".concat(j[e].id),state:{trainerId:j[e].id,trainerData:j[e]}})},children:"Read More"})]})]}),Object(d.jsx)("div",{className:"card-button",children:Object(d.jsxs)("button",{style:{backgroundColor:"#53BFD2"},onClick:function(){a.history.push({pathname:"/user/scheduler",state:{trainerId:j[e].id,trainerData:j[e]}})},children:["book a session",Object(d.jsx)(i.default,{}),Object(d.jsxs)("p",{children:["from"," ",Object(d.jsx)("span",{children:j[e].oneOnOnePricing.inPersonAtClientLocation})]})]})})]},t)}))}),Object(d.jsx)("div",{className:"showmore",children:Object(d.jsxs)("button",{className:"showmore_btn",onClick:function(){O((function(e){return e+3}))},children:[f?"View More Trainers ":null,Object(d.jsx)("img",{src:n.default,alt:"icon"})]})})]})})}},215:function(e,t,s){"use strict";s.r(t),s.d(t,"COMMON_URL",(function(){return r})),s.d(t,"MESSAGING_URL",(function(){return c})),s.d(t,"SESSION_URL",(function(){return n})),s.d(t,"NOTIFICATION_URL",(function(){return a})),s.d(t,"PAYMENT_URL",(function(){return i}));var r="https://apis.bookmotto.com/user",c="https://apis.bookmotto.com/messaging",n="https://apis.bookmotto.com/session",a="",i="https://apis.bookmotto.com/payments"},385:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/ArrowSecondary.2dfb6299.svg"},386:function(e,t,s){}}]);
//# sourceMappingURL=69.11f6f8da.chunk.js.map