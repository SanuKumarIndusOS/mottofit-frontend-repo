(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[42,93,180,310,311,312,313,314,315,316],{161:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return n}));c(2);var a=c(244),s=c(1);function n(){return Object(s.jsx)("div",{children:Object(s.jsx)(a.TrainerMyEarnings,{})})}},244:function(e,t,c){"use strict";c.r(t),c.d(t,"TrainerMyEarnings",(function(){return o}));var a=c(10),s=c(2),n=(c(457),c(419)),i=c(421),r=c(415),d=(c(418),c(416)),l=c(420),j=(c(417),c(1)),o=function(){var e=Object(s.useState)(),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),r=Object(a.a)(i,2),l=r[0],o=r[1];return console.log(c,"paymentHistory"),console.log(l,"myEarning"),Object(s.useEffect)((function(){fetch("http://doodlebluelive.com:2336/v1/payment-history/trainer?trainerId=7f007fd1-7042-4c1c-b8ea-3d739cf9f707",{method:"get",headers:new Headers({Authorization:localStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.history),n(e.data.history),o(e.data)})).catch((function(e){console.log(e,"error")}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"outter_earn_container",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"inner_earn_container",children:[Object(j.jsx)("div",{className:"earn_heading",children:Object(j.jsx)("div",{className:"earnHeader",children:Object(j.jsx)("h2",{children:"My Earnings"})})}),Object(j.jsx)("div",{className:"earn_wrapper",children:Object(j.jsx)("div",{className:"earn_graph",children:Object(j.jsx)("div",{className:"earn_total",children:Object(j.jsxs)("div",{className:"earn_total_inner",children:[Object(j.jsx)("div",{className:"total_item1",children:Object(j.jsxs)("div",{className:"total_data",children:[Object(j.jsx)("img",{src:d.default,className:"earn_image",alt:"icon"}),Object(j.jsxs)("div",{className:"earning_money",children:[Object(j.jsx)("h2",{children:"$8,500"}),Object(j.jsx)("p",{children:"Total Earnings in q1"})]})]})}),Object(j.jsx)("div",{className:"total_item2",children:Object(j.jsxs)("div",{className:"annual_status",children:[Object(j.jsxs)("div",{className:"day_earn",children:[Object(j.jsxs)("h2",{children:["$",l&&l.dayRevenue&&!0===l.dayRevenue.total_amount?l.dayRevenue.total_amount:"N/A"]}),Object(j.jsx)("p",{children:"Today"})]}),Object(j.jsxs)("div",{className:"day_earn",children:[Object(j.jsxs)("h2",{children:["$",l&&l.weekRevenue?l.weekRevenue.total_amount:"N/A"]}),Object(j.jsx)("p",{children:"This Week"})]}),Object(j.jsxs)("div",{className:"month_earn",children:[Object(j.jsxs)("h2",{children:["$",l&&l.monthRevenue?l.monthRevenue.total_amount:"N/A"]}),Object(j.jsx)("p",{children:"This Month"})]})]})})]})})})}),Object(j.jsx)(h,{paymentHistory:c})]})})})})},h=function(e){var t=e.paymentHistory;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"outter_ts",children:Object(j.jsx)("div",{className:"s",children:Object(j.jsxs)("div",{className:"inner_ts",children:[Object(j.jsx)("div",{className:"ts_header",children:Object(j.jsx)("h2",{children:"Transaction"})}),Object(j.jsx)("div",{className:"ts_overflow_container",children:t?t.map((function(e,t){return Object(j.jsx)("div",{className:"ts_wrapper",children:Object(j.jsxs)("div",{className:"ts_card",children:[Object(j.jsxs)("div",{className:"card_profile",children:[Object(j.jsx)("img",{src:l.default,className:"profile_card_img"}),Object(j.jsxs)("div",{className:"profile_card_content",children:[Object(j.jsx)("h4",{children:"Client"}),Object(j.jsxs)("div",{className:"wrap_content_ts",children:[Object(j.jsx)("img",{src:n.default,alt:"icon"}),Object(j.jsx)("p",{style:{textTransform:"capitalize"},children:e.userDetail.firstName})]})]})]}),Object(j.jsx)("div",{className:"card_transaction",children:Object(j.jsxs)("div",{className:"transaction_card_content",children:[Object(j.jsx)("h4",{children:"Transaction Date"}),Object(j.jsxs)("div",{className:"wrap_content_ts",children:[Object(j.jsx)("img",{src:i.default,alt:"icon"}),Object(j.jsx)("p",{children:e.userDetail.createdAt})]})]})}),Object(j.jsx)("div",{className:"card_amount",children:Object(j.jsxs)("div",{className:"amount_card_content",children:[Object(j.jsx)("h4",{children:"Amount"}),Object(j.jsxs)("div",{className:"wrap_content_ts",children:[Object(j.jsx)("img",{src:r.default,alt:"icon"}),Object(j.jsx)("p",{children:e.amount})]})]})}),Object(j.jsx)("div",{className:"card_payment",children:Object(j.jsxs)("div",{className:"payment_card_content",children:[Object(j.jsx)("h4",{children:"Payment type"}),Object(j.jsx)("p",{style:{textTransform:"capitalize"},children:e.paymentDetail.card.brand})]})})]})},t)})):"Loading...."})]})})})})}},415:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Amount Icon.6f80cd9a.svg"},416:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Earn.37bda77f.svg"},417:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Image 1.de9674b3.svg"},418:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mastercard.a5c1de52.svg"},419:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Person Icon.a4f87620.svg"},420:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Profile Picture.59d54d6a.svg"},421:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Shedule Icon.ff6f5846.svg"},457:function(e,t,c){}}]);
//# sourceMappingURL=42.e4be1778.chunk.js.map