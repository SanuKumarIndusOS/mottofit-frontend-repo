(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[141,445],{281:function(e,t,s){"use strict";s.r(t),s.d(t,"ChatItem",(function(){return d}));var a=s(4),c=(s(2),s(220)),n=s.n(c),i=(s(426),s(46)),r=s(1),d=function(e){var t,s=e.currentChannelMembers,c=void 0===s?[]:s,d=e.currMsg,l=d.type,o=d.state,m=d.date;if("message"===l){var u=n()(o.timestamp).format("LT"),j=(null===o||void 0===o?void 0:o.author)===localStorage.getItem("user-id"),h=c.filter((function(e){return e.userIdenity===o.author}))[0]||{};t=Object(r.jsxs)("div",{className:"message_chat_".concat(j?"right":"left"),children:[Object(r.jsxs)("div",{className:"message_text",children:[Object(r.jsx)("h5",{children:(null===o||void 0===o?void 0:o.body)||""}),Object(r.jsx)("span",{className:"msg-time",children:u})]}),Object(r.jsx)(i.UserAvatar,Object(a.a)({},h))]})}else t=Object(r.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center my-3",children:Object(r.jsx)("span",{className:"info-badge",children:m})});return Object(r.jsx)("div",{children:t})}},426:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Image 1.5667afc3.png"}}]);
//# sourceMappingURL=141.c43f6c72.chunk.js.map