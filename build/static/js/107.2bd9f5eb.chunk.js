(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[107,118],{253:function(t,e,a){"use strict";a.r(e);var n=a(10),i=a(5),o=a(2),r=(a(88),a(84)),c=a(57),u=a(38),s=a(40),l=a(85),d=a(1),b=Object(c.b)((function(t){return{details:t.trainerReducer.details,trainerPersonalData:t.trainerReducer.data}}),(function(t){return Object(u.b)({updateTrainerDetails:r.updateTrainerDetails,getTrainerDetails:r.getTrainerDetails},t)}))((function(t){var e=t.getTrainerDetails,a=t.details,r=(t.updateTrainerDetails,Object(o.useState)({motto:""})),c=Object(i.a)(r,2),u=c[0],b=c[1];return Object(o.useEffect)((function(){e().then((function(t){console.log(t,"api data demo");var e=(t||{}).myMotto,i=void 0===e?"":e,o={details:Object(n.a)({motto:i},a)};b(o.details)})).catch((function(t){return console.log(t)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:u.motto,onChange:function(t){b(Object(n.a)(Object(n.a)({},u),{},{motto:t.target.value}))},name:"motto"}),Object(d.jsx)("button",{onClick:function(){var t={myMotto:u.motto},e=s.TrainerApi.updateTrainerAvailabilityApi;e.body=t,Object(l.api)(Object(n.a)({},e)).then((function(t){var e=t.data,a=t.message;alert("Data modified"),console.log(e,a)})).catch((function(t){return console.log(t)}))},children:"Save Changes"})]})}));e.default=b},280:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return o}));a(2);var n=a(260),i=(a(253),a(1));function o(){return Object(i.jsx)("div",{children:Object(i.jsx)(n.default,{})})}}}]);
//# sourceMappingURL=107.2bd9f5eb.chunk.js.map