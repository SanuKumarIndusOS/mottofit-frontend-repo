(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[150],{317:function(t,e,a){"use strict";a.r(e);var n=a(4),o=a(13),i=a(2),c=a(62),r=a(33),s=a(21),u=a(16),l=a(86),b=a(36),d=a(1),j=Object(r.b)((function(t){return{details:t.trainerReducer.details,trainerPersonalData:t.trainerReducer.data}}),(function(t){return Object(s.b)({updateTrainerDetails:c.updateTrainerDetails,getTrainerDetails:c.getTrainerDetails},t)}))((function(t){var e=t.getTrainerDetails,a=t.details,c=(t.updateTrainerDetails,Object(i.useState)({motto:""})),r=Object(o.a)(c,2),s=r[0],j=r[1];return Object(i.useEffect)((function(){e().then((function(t){console.log(t,"api data demo");var e=(t||{}).myMotto,o=void 0===e?"":e,i={details:Object(n.a)({motto:o},a)};j(i.details)})).catch((function(t){return console.log(t)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:s.motto,onChange:function(t){j(Object(n.a)(Object(n.a)({},s),{},{motto:t.target.value}))},name:"motto"}),Object(d.jsx)("button",{onClick:function(){var t={myMotto:s.motto},e=u.TrainerApi.updateTrainerAvailabilityApi;e.body=t,Object(l.api)(Object(n.a)({},e)).then((function(t){var e=t.data,a=t.message;Object(b.Toast)({type:"success",message:a||"Success"}),console.log(e,a)})).catch((function(t){return console.log(t)}))},children:"Save Changes"})]})}));e.default=j}}]);
//# sourceMappingURL=150.e4f637f3.chunk.js.map