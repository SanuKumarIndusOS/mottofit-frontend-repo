(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[28,207,342,343,346,347,348],{296:function(e,t,c){"use strict";c.r(t);var a=c(14),s=c(2),n=(c(573),c(561)),i=c(563),r=c(559),l=c(560),d=c(562),o=c(61),j=c(33),u=c(21),m=c(40),v=c(13),h=c(83),b=c(1),O=function(e){var t=e.paymentHistory,c=e.isTrainer;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"outter_ts",children:Object(b.jsx)("div",{className:"s",children:Object(b.jsxs)("div",{className:"inner_ts",children:[Object(b.jsx)("div",{className:"ts_header",children:Object(b.jsx)("h2",{children:"Transaction"})}),Object(b.jsx)("div",{className:"ts_overflow_container",children:t&&t.length>0?t.map((function(e,t){var a,s,l,o,j,u,m,v,O="";return(null===e||void 0===e||null===(a=e.userDetail)||void 0===a?void 0:a.createdAt)&&(O=Object(h.getFormatDate)(null===e||void 0===e||null===(s=e.userDetail)||void 0===s?void 0:s.createdAt,"YYYY-MM-DD")),(null===e||void 0===e?void 0:e.createdAt)&&(O=Object(h.getFormatDate)(null===e||void 0===e?void 0:e.createdAt,"YYYY-MM-DD")),Object(b.jsx)("div",{className:"ts_wrapper",children:Object(b.jsxs)("div",{className:"ts_card row no-gutters",children:[Object(b.jsxs)("div",{className:"card_profile col-4",children:[Object(b.jsx)("img",{src:(null===e||void 0===e||null===(l=e.trainerDetail)||void 0===l?void 0:l.profilePicture)||(null===e||void 0===e||null===(o=e.userDetail)||void 0===o?void 0:o.profilePicture)||d.default,className:"profile_card_img"}),Object(b.jsxs)("div",{className:"profile_card_content",children:[Object(b.jsx)("h4",{className:"text-uppercase",children:c?"Client":"Trainer"}),Object(b.jsxs)("div",{className:"wrap_content_ts",children:[Object(b.jsx)("img",{src:n.default,alt:"icon"}),Object(b.jsx)("p",{style:{textTransform:"capitalize"},children:(null===e||void 0===e||null===(j=e.userDetail)||void 0===j?void 0:j.firstName)||(null===e||void 0===e||null===(u=e.trainerDetail)||void 0===u?void 0:u.firstName)})]})]})]}),Object(b.jsx)("div",{className:"card_transaction col-2",children:Object(b.jsxs)("div",{className:"transaction_card_content",children:[Object(b.jsx)("h4",{children:"Transaction Date"}),Object(b.jsxs)("div",{className:"wrap_content_ts",children:[Object(b.jsx)("img",{src:i.default,alt:"icon"}),Object(b.jsx)("p",{children:O})]})]})}),Object(b.jsx)("div",{className:"card_amount col-2",children:Object(b.jsxs)("div",{className:"amount_card_content",children:[Object(b.jsx)("h4",{children:"Amount"}),Object(b.jsxs)("div",{className:"wrap_content_ts",children:[Object(b.jsx)("img",{src:r.default,alt:"icon"}),Object(b.jsx)("p",{children:null===e||void 0===e?void 0:e.amount})]})]})}),Object(b.jsx)("div",{className:"card_payment col-2",children:Object(b.jsxs)("div",{className:"payment_card_content",children:[Object(b.jsx)("h4",{children:"Payment type"}),Object(b.jsx)("p",{style:{textTransform:"capitalize"},children:null===e||void 0===e||null===(m=e.paymentDetail)||void 0===m||null===(v=m.card)||void 0===v?void 0:v.brand})]})}),Object(b.jsx)("div",{className:"card_payment col-2",children:Object(b.jsxs)("div",{className:"payment_card_content",children:[Object(b.jsx)("h4",{children:"Status"}),Object(b.jsx)("p",{style:{textTransform:"capitalize"},children:null===e||void 0===e?void 0:e.status})]})})]})},t)})):Object(b.jsx)("h5",{className:"my-4 text-center",children:"Data not found"})})]})})})})},x=Object(j.b)(null,(function(e){return Object(u.b)({trainerMyEarning:o.trainerMyEarning},e)}))((function(e){var t,c,n,i,r=e.trainerMyEarning,d=Object(s.useState)(),o=Object(a.a)(d,2),j=o[0],u=o[1],h=Object(s.useState)(),x=Object(a.a)(h,2),_=x[0],p=x[1],f=Object(s.useState)(!1),N=Object(a.a)(f,2),g=N[0],y=N[1];return Object(s.useEffect)((function(){!function(){var e=(v.history.location||{}).pathname.includes("trainers");y(e);var t=localStorage.getItem("user-id");r(t,e).then((function(e){u(e.history),console.log(e),p(e)})).catch((function(e){Object(m.Toast)({type:"error",message:e.message||"Error"}),console.log(e,"error")}))}()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"outter_earn_container",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner_earn_container",children:[Object(b.jsx)("div",{className:"earn_heading",children:Object(b.jsx)("div",{className:"earnHeader w-100",children:Object(b.jsx)("h2",{children:"".concat(g?"My Earnings":"Payment History")})})}),g&&Object(b.jsx)("div",{className:"earn_wrapper",children:Object(b.jsx)("div",{className:"earn_graph",children:Object(b.jsx)("div",{className:"earn_total",children:Object(b.jsxs)("div",{className:"earn_total_inner",children:[Object(b.jsx)("div",{className:"total_item1",children:Object(b.jsxs)("div",{className:"total_data",children:[Object(b.jsx)("img",{src:l.default,className:"earn_image",alt:"icon"}),Object(b.jsxs)("div",{className:"earning_money",children:[Object(b.jsxs)("h2",{children:["$",_?null===(t=_.totalRevenue)||void 0===t?void 0:t.total_amount:"N/A"]}),Object(b.jsx)("p",{children:"Total Earnings in q1"})]})]})}),Object(b.jsx)("div",{className:"total_item2",children:Object(b.jsxs)("div",{className:"annual_status",children:[Object(b.jsxs)("div",{className:"day_earn",children:[Object(b.jsxs)("h2",{children:["$",_?null===(c=_.dayRevenue)||void 0===c?void 0:c.total_amount:"N/A"]}),Object(b.jsx)("p",{children:"Today"})]}),Object(b.jsxs)("div",{className:"day_earn",children:[Object(b.jsxs)("h2",{children:["$",_?null===(n=_.weekRevenue)||void 0===n?void 0:n.total_amount:"N/A"]}),Object(b.jsx)("p",{children:"This Week"})]}),Object(b.jsxs)("div",{className:"month_earn",children:[Object(b.jsxs)("h2",{children:["$",_?null===(i=_.monthRevenue)||void 0===i?void 0:i.total_amount:"N/A"]}),Object(b.jsx)("p",{children:"This Month"})]})]})})]})})})}),Object(b.jsx)(O,{paymentHistory:j,isTrainer:g})]})})})})}));t.default=x},559:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Amount Icon.6f80cd9a.svg"},560:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Earn.37bda77f.svg"},561:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Person Icon.a4f87620.svg"},562:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Profile Picture.59d54d6a.svg"},563:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Shedule Icon.ff6f5846.svg"},573:function(e,t,c){}}]);
//# sourceMappingURL=28.6ecb146a.chunk.js.map