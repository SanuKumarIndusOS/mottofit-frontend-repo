(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[120],{253:function(t,e,a){"use strict";a.r(e);var n=a(10),o=a(5),i=a(2),r=(a(88),a(84)),c=a(57),s=a(38),u=a(40),l=a(86),d=a(1),b=Object(c.b)((function(t){return{details:t.trainerReducer.details,trainerPersonalData:t.trainerReducer.data}}),(function(t){return Object(s.b)({updateTrainerDetails:r.updateTrainerDetails,getTrainerDetails:r.getTrainerDetails},t)}))((function(t){var e=t.getTrainerDetails,a=t.details,r=(t.updateTrainerDetails,Object(i.useState)({motto:""})),c=Object(o.a)(r,2),s=c[0],b=c[1];return Object(i.useEffect)((function(){e().then((function(t){console.log(t,"api data demo");var e=(t||{}).myMotto,o=void 0===e?"":e,i={details:Object(n.a)({motto:o},a)};b(i.details)})).catch((function(t){return console.log(t)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:s.motto,onChange:function(t){b(Object(n.a)(Object(n.a)({},s),{},{motto:t.target.value}))},name:"motto"}),Object(d.jsx)("button",{onClick:function(){var t={myMotto:s.motto},e=u.TrainerApi.updateTrainerAvailabilityApi;e.body=t,Object(l.api)(Object(n.a)({},e)).then((function(t){var e=t.data,a=t.message;alert("Data modified"),console.log(e,a)})).catch((function(t){return console.log(t)}))},children:"Save Changes"})]})}));e.default=b}}]);
//# sourceMappingURL=120.e44458e3.chunk.js.map