(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[19,78,91,129,147,160,222,355,356,357,450,451],{1003:function(e,t){},1017:function(e,t){},154:function(e,t,n){"use strict";n.r(t),n.d(t,"InfiniteScrollComponent",(function(){return g}));var a=n(4),s=n(64),i=n.n(s),c=n(93),r=n(21),o=n(22),l=n(26),d=n(25),u=n(2),h=n(65),m=n(291),j=n(1),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).toggleContent=function(e){var t=parseInt(e),n=a.state,s=n.showContent,i=(n.isMobile,s===t?"":t);a.setState({showContent:i},(function(){}))},a.handleAboutToReachBottom=Object(c.a)(i.a.mark((function e(){var t,n,s,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.isLoading,s=t.page,c=a.props.handleApi,a.setState({isLoading:!0}),!1!==n){e.next=9;break}return e.next=6,c(s+1);case 6:r=e.sent,r.data,a.setState({page:s+1,isLoading:!1});case 9:case"end":return e.stop()}}),e)}))),a.handleUpdate=function(e){var t=e.scrollTop,n=e.scrollHeight,s=e.clientHeight,i=a.state,c=i.isLoading,r=i.total,o=i.currentDataSize;(t+100)/(n-s)>1&&o<r&&!1===c&&a.handleAboutToReachBottom()},a.loader=function(){return Object(j.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center w-100 pt-3",children:Object(j.jsx)(h.CommonPageLoader,{})})},a.state={showContent:"",page:0,count:0,total:0,isMobile:!1,isLoading:!1,notificationData:[],currentDataSize:0,initialLoad:!0},a.refArray=[],a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props.totalSize,n=this.state,a=n.initialLoad,s=n.currentDataSize;!a&&0===s&&t!==e.totalSize&&t>0&&(this.setState({currentDataSize:s,initialLoad:!0,total:t}),console.log("Runned"))}},{key:"componentDidMount",value:function(){var e=this.props,t=e.currentDataSize,n=e.totalSize;window.matchMedia("(max-width: 700px)").matches&&this.setState({isMobile:!0}),t>0?this.setState({total:n}):this.setState({initialLoad:!1})}},{key:"render",value:function(){var e=this.state,t=(e.showContent,e.total),n=e.isMobile,s=e.isLoading,i=(e.notificationData,e.initialLoad),c=n?{style:{height:550}}:{style:{height:500}},r={};return e.currentDataSize<t&&(r.onUpdate=this.handleUpdate),Object(j.jsx)("div",{className:"notification-page",children:Object(j.jsx)("div",{className:"notification-page-body",children:i?Object(j.jsxs)(m.CustomScrollbar,Object(a.a)(Object(a.a)(Object(a.a)({customStyle:{width:"12px",right:"5px"}},c),r),{},{children:[this.props.children,s&&this.loader()]})):Object(j.jsx)(h.CommonPageLoader,{className:"mt-5 pt-5"})})})}}]),n}(u.Component)},170:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(28),i=n(89),c=n(11),r=n(2),o=n(752),l=(n(750),n(587),n(410),n(437),n(465),n(411),n(430),n(54),n(63)),d=n(24),u=n(20),h=(n(15),n(91),n(31)),m=n(310),j=n(285),g=n(90),b=n(42),p=n(65),v=(n(154),n(1)),f=Object(d.b)((function(e){return{clientData:e.messagingReducer.clientData,activeChannel:e.messagingReducer.activeChannel,activeChannelMessages:e.messagingReducer.activeChannelMessages,typingMembers:e.messagingReducer.typingMembers,chatClientInstance:e.messagingReducer.chatClientInstance,pastSessions:e.messagingReducer.pastSessions,upcomingSessions:e.messagingReducer.upcomingSessions,adminMessages:e.messagingReducer.adminMessages,invitedSessions:e.messagingReducer.invitedSessions}}),(function(e){return Object(u.b)({trainerChannel:l.trainerChannel,initClientDispatch:j.initClientDispatch,updateMessagingDetails:j.updateMessagingDetails},e)}))((function(e){var t=e.trainerChannel,n=e.initClientDispatch,l=(e.clientData,e.activeChannel,e.activeChannelMessages,e.typingMembers,e.chatClientInstance),d=e.updateMessagingDetails,u=e.pastSessions,j=e.upcomingSessions,f=e.adminMessages,O=e.invitedSessions,x=Object(r.useState)([]),y=Object(c.a)(x,2),S=(y[0],y[1],Object(r.useState)([])),C=Object(c.a)(S,2),_=(C[0],C[1],Object(r.useState)([])),M=Object(c.a)(_,2),T=(M[0],M[1],Object(r.useState)([])),N=Object(c.a)(T,2),D=(N[0],N[1],Object(r.useState)()),A=Object(c.a)(D,2),L=(A[0],A[1],Object(r.useState)([])),E=Object(c.a)(L,2),I=(E[0],E[1],Object(r.useState)([])),k=Object(c.a)(I,2),w=(k[0],k[1],Object(r.useState)("")),P=Object(c.a)(w,2),U=(P[0],P[1],Object(r.useState)("")),R=Object(c.a)(U,2),G=(R[0],R[1],Object(r.useState)(!0)),F=Object(c.a)(G,2),B=F[0],Y=F[1],z=Object(r.useState)({invited:0,upcoming:0,past:0,admin:0}),J=Object(c.a)(z,2),H=J[0],q=(J[1],Object(r.useState)("invited")),V=Object(c.a)(q,2),Z=(V[0],V[1]);Object(r.useEffect)((function(){return n(),function(){l&&l.removeChatClient()}}),[]),Object(r.useEffect)((function(){K()}),[H]);var K=function(e){t(e,H[e]).then((function(t){var n={invited:"invitedSessions",upcoming:"upcomingSessions",past:"pastSessions",admin:"adminSessions"}[e];Y(!1);var a=Object(s.a)({},n,Object(i.a)(t));console.log(a),d(a)})).catch((function(e){Y(!1),Object(h.Toast)({type:"error",message:e.message||"error"})}))};function Q(e,t,n){l.joinChannelByID(e).then((function(){console.log("Channel Loaded"),d({currentChannelMembers:t,channelData:n})}))}var W=3===parseInt(localStorage.getItem("type"));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"main_message_container",children:Object(v.jsxs)("div",{className:"message_outter_container",children:[Object(v.jsx)("h2",{children:"Messages"}),Object(v.jsx)("div",{className:"message_inner",children:Object(v.jsxs)("div",{className:"message_wrapper",children:[Object(v.jsxs)(o.d,{defaultTab:"invited",onChange:function(e){!function(e){Z(e),Y(!0),K(e),l&&l.unSubscribeChannel()}(e)},children:[Object(v.jsxs)(o.b,{children:[W&&Object(v.jsx)(o.a,{tabFor:"invited",children:"Invited"}),!W&&Object(v.jsx)(o.a,{tabFor:"upcoming",children:"Upcoming"}),Object(v.jsx)(o.a,{tabFor:"past",children:"Previous"}),Object(v.jsx)(o.a,{tabFor:"admin",children:"Admin"})]}),Object(v.jsxs)("div",{className:"message_inner",children:[Object(v.jsx)(o.c,{tabId:"invited",children:Object(v.jsxs)("div",{className:"message_inner_one",children:[Object(v.jsx)("div",{className:"message_left",children:B?Object(v.jsx)(p.CommonPageLoader,{}):O.map((function(e,t){var n,s=e.message,i=s.from,c=s.body,r=s.date_updated,o=(null===(n=e.members)||void 0===n?void 0:n.filter((function(e){return e.userId===i}))[0])||e.members[0]||{};return Object(v.jsx)("div",{className:"contact_item",children:Object(v.jsxs)("div",{className:"inner_link",children:[Object(v.jsx)(b.UserAvatar,Object(a.a)(Object(a.a)({},o),{},{className:"img-md-2"})),Object(v.jsxs)("div",{className:"message_link_notify",onClick:function(){return Q(e.channelUniqueName,e.members,e)},children:[Object(v.jsx)("h3",{children:e.chatTitle||""}),Object(v.jsxs)("div",{children:[c&&Object(v.jsx)("p",{children:"".concat(null===c||void 0===c?void 0:c.slice(0,100)).concat((null===c||void 0===c?void 0:c.length)>100?"...":"")}),r&&Object(v.jsx)("span",{className:"msg-timestamp-left",children:Object(g.getFormatDate)(r,"LT")})]})]})]})},"".concat(Date.now(),"_all_").concat(t))}))}),Object(v.jsx)("div",{className:"message_right",children:Object(v.jsx)(m.default,{isDataPresent:(null===O||void 0===O?void 0:O.length)>0})})]})}),Object(v.jsx)(o.c,{tabId:"upcoming",children:Object(v.jsxs)("div",{className:"message_inner_one",children:[Object(v.jsx)("div",{className:"message_left",children:B?Object(v.jsx)(p.CommonPageLoader,{}):j.map((function(e,t){var n,s=e.message,i=s.from,c=s.body,r=s.date_updated,o=(null===(n=e.members)||void 0===n?void 0:n.filter((function(e){return e.userId===i}))[0])||e.members[0]||{};return Object(v.jsx)("div",{className:"contact_item",children:Object(v.jsxs)("div",{className:"inner_link",children:[Object(v.jsx)(b.UserAvatar,Object(a.a)(Object(a.a)({},o),{},{className:"img-md-2"})),Object(v.jsxs)("div",{className:"message_link_notify",onClick:function(){return Q(e.channelUniqueName,e.members,e)},children:[Object(v.jsx)("h3",{children:e.chatTitle||""}),Object(v.jsxs)("div",{children:[c&&Object(v.jsx)("p",{children:"".concat(null===c||void 0===c?void 0:c.slice(0,100)).concat((null===c||void 0===c?void 0:c.length)>100?"...":"")}),r&&Object(v.jsx)("span",{className:"msg-timestamp-left",children:Object(g.getFormatDate)(r,"LT")})]})]})]})},"".concat(Date.now(),"_").concat(t))}))}),Object(v.jsx)("div",{className:"message_right",children:Object(v.jsx)(m.default,{isDataPresent:j.length>0})})]})}),Object(v.jsx)(o.c,{tabId:"past",children:Object(v.jsxs)("div",{className:"message_inner_one",children:[Object(v.jsx)("div",{className:"message_left",children:B?Object(v.jsx)(p.CommonPageLoader,{}):u.map((function(e,t){var n,s=e.message,i=s.from,c=s.body,r=s.date_updated,o=(null===(n=e.members)||void 0===n?void 0:n.filter((function(e){return e.userId===i}))[0])||e.members[0]||{};return Object(v.jsx)("div",{className:"contact_item",children:Object(v.jsxs)("div",{className:"inner_link",children:[Object(v.jsx)(b.UserAvatar,Object(a.a)(Object(a.a)({},o),{},{className:"img-md-2"})),Object(v.jsxs)("div",{className:"message_link_notify",onClick:function(){return Q(e.channelUniqueName,e.members,e)},children:[Object(v.jsx)("h3",{children:e.chatTitle||""}),Object(v.jsxs)("div",{children:[c&&Object(v.jsx)("p",{children:"".concat(null===c||void 0===c?void 0:c.slice(0,100)).concat((null===c||void 0===c?void 0:c.length)>100?"...":"")}),r&&Object(v.jsx)("span",{className:"msg-timestamp-left",children:Object(g.getFormatDate)(r,"LT")})]})]})]})},"".concat(t,"_").concat(Date.now()))}))}),Object(v.jsx)("div",{className:"message_right",children:Object(v.jsx)(m.default,{isDataPresent:u.length>0})})]})}),Object(v.jsx)(o.c,{tabId:"admin",children:Object(v.jsxs)("div",{className:"message_inner_one",children:[Object(v.jsx)("div",{className:"message_left",children:B?Object(v.jsx)(p.CommonPageLoader,{}):f.map((function(e){var t,n=e.message,s=n.from,i=n.body,c=n.date_updated,r=(null===(t=e.members)||void 0===t?void 0:t.filter((function(e){return e.userId===s}))[0])||e.members[0]||{};return Object(v.jsx)("div",{className:"contact_item",children:Object(v.jsxs)("div",{className:"inner_link",children:[Object(v.jsx)(b.UserAvatar,Object(a.a)(Object(a.a)({},r),{},{className:"img-md-2"})),Object(v.jsxs)("div",{className:"message_link_notify",onClick:function(){return Q(e.channelUniqueName,e.members,e)},children:[Object(v.jsx)("h3",{children:e.chatTitle||""}),Object(v.jsxs)("div",{children:[i&&Object(v.jsx)("p",{children:"".concat(null===i||void 0===i?void 0:i.slice(0,100)).concat((null===i||void 0===i?void 0:i.length)>100?"...":"")}),c&&Object(v.jsx)("span",{className:"msg-timestamp-left",children:Object(g.getFormatDate)(c,"LT")})]})]})]})})}))}),Object(v.jsx)("div",{className:"message_right",children:Object(v.jsx)(m.default,{isDataPresent:f.length>0})})]})})]})]}),Object(v.jsx)("div",{className:""})]})})]})})})}));t.default=f},285:function(e,t,n){"use strict";n.r(t),n.d(t,"updatePersonTyping",(function(){return r})),n.d(t,"resetChannelDetails",(function(){return o})),n.d(t,"updateMessagingDetails",(function(){return l})),n.d(t,"updateGlobalMessagingDetails",(function(){return d})),n.d(t,"initClientDispatch",(function(){return u}));var a=n(4),s=n(89),i=n(16),c=n(295),r=function(e){return function(t,n){var a=n().messagingReducer,c=a.typingMembers,r=a.currentChannelMembers,o=e.type,l=e.participant.state.identity,d=c,u=r.filter((function(e){return e.userIdenity===l}))[0]||{},h=(null===u||void 0===u?void 0:u.userName)||l;"typingStarted"===o?c.includes(h)||(d=[].concat(Object(s.a)(c),[h]),t({type:i.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{typingMembers:Object(s.a)(d)}})):"typingEnded"===o&&c.includes(h)&&(d=Object(s.a)(c).filter((function(e){return e!==h})),t({type:i.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{typingMembers:Object(s.a)(d)}}))}},o=function(){return function(e){e({type:i.MessagingActionType.RESET_CHANNEL_DETAILS})}},l=function(e){return function(t){t({type:i.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:e})}},d=function(e){return function(t,n){var a,c,r,o,l=null===e||void 0===e||null===(a=e.channel)||void 0===a?void 0:a.sid,d=null===e||void 0===e||null===(c=e.state)||void 0===c?void 0:c.body,u=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.author,m=n().messagingReducer,j=m.pastSessions,g=m.upcomingSessions,b=m.adminMessages,p=m.invitedSessions,v=Object(s.a)(j),f=Object(s.a)(g),O=Object(s.a)(p),x=Object(s.a)(b),y=h(v,l,d,u),S=h(f,l,d,u),C=h(O,l,d,u),_={pastSessions:y,upcomingSessions:S,adminMessages:h(x,l,d,u),invitedSessions:C},M=document.getElementsByClassName("message_left");null===(o=Object(s.a)(M))||void 0===o||o.forEach((function(e){return null===e||void 0===e?void 0:e.scrollTo(0,0)})),t({type:i.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:_})}},u=function(e){return function(t,n){t({type:i.MessagingActionType.UPDATE_CLIENT_INSTANCE,payload:new c.default(t,n,e)})}},h=function(e,t,n,i){var c=Object(s.a)(e).map((function(e){var s=Object(a.a)({},e);return(null===e||void 0===e?void 0:e.channelId)===t&&(s.message.body=n,s.message.date_updated=(new Date).toISOString(),s.message.from=i),Object(a.a)({},s)}));return c=c.sort((function(e,t){var n,a;return new Date((null===t||void 0===t||null===(n=t.message)||void 0===n?void 0:n.date_updated)||1950)-new Date((null===e||void 0===e||null===(a=e.message)||void 0===a?void 0:a.date_updated)||1950)})),Object(s.a)(c)}},290:function(e,t,n){"use strict";n.r(t),n.d(t,"ChatItem",(function(){return o}));var a=n(4),s=(n(2),n(226)),i=n.n(s),c=(n(437),n(42)),r=n(1),o=function(e){var t,n=e.currentChannelMembers,s=void 0===n?[]:n,o=e.currMsg,l=o.type,d=o.state,u=o.date;if("message"===l){var h=i()(d.timestamp).format("LT"),m=(null===d||void 0===d?void 0:d.author)===localStorage.getItem("user-id"),j=s.filter((function(e){return e.userIdenity===d.author}))[0]||{};t=Object(r.jsxs)("div",{className:"message_chat_".concat(m?"right":"left"),children:[Object(r.jsxs)("div",{className:"message_text",children:[Object(r.jsx)("h5",{children:(null===d||void 0===d?void 0:d.body)||""}),Object(r.jsx)("span",{className:"msg-time",children:h})]}),Object(r.jsx)(c.UserAvatar,Object(a.a)({},j))]})}else t=Object(r.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center my-3",children:Object(r.jsx)("span",{className:"info-badge",children:u})});return Object(r.jsx)("div",{children:t})}},291:function(e,t,n){"use strict";n.r(t),n.d(t,"CustomScrollbar",(function(){return m}));var a=n(4),s=n(48),i=n(21),c=n(22),r=n(26),o=n(25),l=n(2),d=n.n(l),u=n(956),h=n(1),m=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scrollbars=d.a.createRef(),e.state={mounted:!1},e.renderThumb=function(t){var n=t.style,i=Object(s.a)(t,["style"]),c=e.props.customStyle,r=Object(a.a)({backgroundColor:"#f2f2f2",borderRadius:"8px",width:"16px"},c);return Object(h.jsx)("div",Object(a.a)(Object(a.a)({style:Object(a.a)(Object(a.a)({},n),r)},i),{},{className:"render-y"}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(){var e=this.props.scrollToBottomUpdate;void 0!==e&&e&&this.state.mounted&&this.scrollbars.current.scrollToBottom()}},{key:"renderView",value:function(e){var t=e.style,n=Object(s.a)(e,["style"]);return Object(h.jsx)("div",Object(a.a)(Object(a.a)({style:Object(a.a)({},t)},n),{},{className:"h"}))}},{key:"render",value:function(){var e=this.props,t=(e.customStyle,Object(s.a)(e,["customStyle"]));return Object(h.jsx)(u.Scrollbars,Object(a.a)({ref:this.scrollbars,renderThumbHorizontal:this.renderThumb,renderThumbVertical:this.renderThumb,renderView:this.renderView},t))}}]),n}(l.Component)},295:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(4),s=n(89),i=n(64),c=n.n(i),r=n(93),o=n(21),l=n(22),d=n(16),u=n(15),h=n(91),m=n(31),j=n(285),g=n(966),b=function(){function e(t,n,i){var l=this;Object(o.a)(this,e),this.initClient=Object(r.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getToken();case 2:return t=e.sent,e.next=5,g.Client.create(t);case 5:n=e.sent,l.client=n,l.handler({type:d.MessagingActionType.INITIALIZE_CLIENT,payload:n}),l.initClientListeners(n);case 9:case"end":return e.stop()}}),e)}))),this.initClientListeners=function(e){e.removeAllListeners(),e.on("messageAdded",function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.globalMessage(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("typingStarted",(function(e){l.onParticipantStartTyping(e)})),e.on("typingEnded",(function(e){l.onParticipantEndedTyping(e)})),e.on("tokenAboutToExpire",Object(r.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.log("token is about to expire"),t.next=3,l.getToken();case 3:n=t.sent,e.updateToken(n);case 5:case"end":return t.stop()}}),t)})))),e.on("tokenExpired",Object(r.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.log("token is about to expire"),t.next=3,l.getToken();case 3:n=t.sent,e.updateToken(n);case 5:case"end":return t.stop()}}),t)}))))},this.globalMessage=function(e){Object(j.updateGlobalMessagingDetails)(e)(l.handler,l.getState)},this.joinChannelByID=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(r.a)(c.a.mark((function e(n,a){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l.unSubscribeChannel(),l.client){e.next=4;break}return e.abrupt("return",alert("Twilio loading"));case 4:return l.handler({type:d.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{isLoading:!0}}),l.log("Attempting to join ".concat(t," channel")),e.next=8,l.client.getChannelByUniqueName(t);case 8:return s=e.sent,e.next=11,l.joinChannel(s);case 11:return e.next=13,l.onChanelJoined(s);case 13:l.log("Channel joined"),l.activeChannel=s,s.on("messageAdded",function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.onMessagedAdded(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.on("typingStarted",(function(e){l.onParticipantStartTyping(e)})),s.on("typingEnded",(function(e){l.onParticipantEndedTyping(e)})),s.on("memberJoined",(function(e){l.onMemberJoined(e)})),s.on("memberLeft",(function(e){l.onMemberLeft(e)})),l.handler({type:d.MessagingActionType.UPDATE_CHANNEL_DETAILS,payload:s}),n(!0),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),l.log("Not able to join the channel"),a(e.t0);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.joinChannel=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("joined"===t.channelState.status){e.next=3;break}return e.next=3,t.join();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onChanelJoined=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMessages();case 2:n=e.sent,a=n.items||[],l.handler({type:d.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{activeChannelMessages:Object(s.a)(a),isLoading:!1}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onMessagedAdded=function(e){return e.channel.sid!==l.activeChannel.sid?(console.log(e,"msg","diff channel"),{}):l.handler({type:d.MessagingActionType.UPDATE_MESSAGE_DETAILS,payload:e})},this.onParticipantStartTyping=function(e){var t={type:"typingStarted",participant:e};Object(j.updatePersonTyping)(t)(l.handler,l.getState)},this.onParticipantEndedTyping=function(e){var t={type:"typingEnded",participant:e};Object(j.updatePersonTyping)(t)(l.handler,l.getState)},this.onMemberJoined=function(e){var t=e.state.identity;return l.log("".concat(t," has joined the chat")),l.handler({type:d.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{status:"".concat(t," has joined the chat")}})},this.onMemberLeft=function(e){var t=e.state.identity;return l.log("".concat(t," has left the chat")),l.handler({type:d.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{status:"".concat(t," has left the chat")}})},this.getToken=function(){var e=u.twilioApi.getIdentityToken;return e.id=localStorage.getItem("user-id"),new Promise((function(t,n){Object(h.api)(Object(a.a)({},e)).then((function(e){var n=e.chatToken;t(n)})).catch((function(e){Object(m.Toast)({type:"error",message:e.message||"Error"}),n(e)}))}))},this.getState=n,this.handler=t,this.activeChannel=null,this.client=null,this.callbackApi=i,this.initClient()}return Object(l.a)(e,[{key:"unSubscribeChannel",value:function(){this.activeChannel&&(this.activeChannel.removeAllListeners(),this.activeChannel=null,this.log("Un subscribed from the channel")),Object(j.resetChannelDetails)()(this.handler)}},{key:"removeChatClient",value:function(){this.client&&(this.client.removeAllListeners(),this.client=null,this.handler({type:d.MessagingActionType.UPDATE_MESSAGING_DETAILS,payload:{clientData:null}}),this.unSubscribeChannel(),this.log("chat client removed"))}},{key:"log",value:function(e){console.log("---------".concat(e,"------"))}}]),e}()},310:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(89),i=n(21),c=n(22),r=n(26),o=n(25),l=n(2),d=n.n(l),u=n(430),h=n(465),m=n(411),j=n(54),g=n(290),b=n(20),p=n(63),v=n(24),f=n(90),O=n(1),x=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).scrollToMessageListBottom=function(){var e,t;null===(e=c.messagesEndRef.current)||void 0===e||e.scrollTo(0,null===(t=c.messagesEndRef.current)||void 0===t?void 0:t.scrollHeight)},c.handleChange=function(e){var t=e.target.value,n=c.props.activeChannel;c.setState({message:t}),n&&n.typing()},c.handleSendMessage=function(e){e.preventDefault();var t=c.state.message,n=c.props.activeChannel;if(!n)return console.log("Chat Service is not configured.");n&&n.sendMessage(String(t)).then((function(){c.setState({message:""}),c.scrollToMessageListBottom()}))},c.formatMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="",n=e.reduce((function(e,n){var i=Object(s.a)(e),c=n.state.timestamp,r=Object(f.getFormatDate)(null,"YYYY"),o=Object(f.getFormatDate)(c,"YYYY"),l=Object(f.getFormatDate)(c,"MMMM DD"),d=r===o?l:"".concat(l,", ").concat(o);return t===d?i=[].concat(Object(s.a)(i),[Object(a.a)({type:"message"},n)]):(t=d,i=[].concat(Object(s.a)(i),[{type:"timestamp",date:d},Object(a.a)({type:"message"},n)])),i}),[]);return n},c.messagesEndRef=d.a.createRef(),c.state={message:""},c}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.activeChannelMessages.length!==e.activeChannelMessages.length&&this.scrollToMessageListBottom(),!1===this.props.isLoading&&!0===e.isLoading&&setTimeout((function(){t.scrollToMessageListBottom()}),100)}},{key:"componentDidMount",value:function(){this.scrollToMessageListBottom()}},{key:"render",value:function(){var e=this.props,t=e.activeChannelMessages,n=void 0===t?[]:t,a=e.typingMembers,s=void 0===a?[]:a,i=e.currentChannelMembers,c=void 0===i?[]:i,r=e.isLoading,o=void 0!==r&&r,l=e.activeChannel,d=void 0===l?{}:l,b=e.channelData,p=void 0===b?{}:b,v=e.isDataPresent,x=void 0!==v&&v,y=this.state.message,S=this.formatMessage(n);return x?Object(O.jsx)("div",{className:"message_right_chatarea",children:(null===d||void 0===d?void 0:d.sid)?Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(O.jsx)("span",{className:"info-badge",children:"".concat(o?"Loading...":"Connecting...")})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"message_right_header",children:[Object(O.jsx)("h2",{children:(null===p||void 0===p?void 0:p.chatTitle)||"Title"}),Object(O.jsxs)("div",{className:"message_header_times",children:[Object(O.jsxs)("div",{className:"message_header_items",children:[Object(O.jsx)("img",{src:h.default,alt:"icon"}),Object(O.jsx)("h5",{children:Object(f.getFormatDate)(null===p||void 0===p?void 0:p.startTime,"ddd MMM DD YYYY",!0)})]}),Object(O.jsxs)("div",{className:"message_header_items",children:[Object(O.jsx)("img",{src:m.default,alt:"icon"}),Object(O.jsx)("h5",{children:Object(f.getFormatDate)(null===p||void 0===p?void 0:p.startTime,"hh:mm A",!0)})]}),Object(O.jsxs)("div",{className:"message_header_items",children:[Object(O.jsx)("img",{src:u.default,alt:"icon"}),Object(O.jsx)("h5",{children:null===p||void 0===p?void 0:p.venue})]})]}),Object(O.jsx)("p",{children:s.length>0&&Object(O.jsx)("span",{className:"ml-auto text-primary fw-600",children:"".concat(s.toString()," ").concat(s.length>1?"are":"is"," typing...")})})]}),Object(O.jsxs)("div",{className:"message_right_textarea",ref:this.messagesEndRef,children:[(null===S||void 0===S?void 0:S.length)>0?S.map((function(e,t){return Object(O.jsx)(g.ChatItem,{item:e,currentChannelMembers:c,currMsg:e},"".concat(Date.now(),"_").concat(t))})):Object(O.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(O.jsx)("span",{className:"info-badge",children:"No message"})}),Object(O.jsx)("div",{id:"end-message"})]}),Object(O.jsx)("form",{className:"w-100",onSubmit:this.handleSendMessage,children:Object(O.jsxs)("div",{className:"message_right_input",children:[Object(O.jsx)("input",{type:"text",placeholder:"Type your message here..",value:y,onChange:this.handleChange}),Object(O.jsx)("div",{className:"submit-btn-block",children:Object(O.jsx)("button",{className:"transparent-btn",children:Object(O.jsx)(j.default,{})})})]})})]})}):Object(O.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(O.jsx)("span",{className:"info-badge",children:"".concat(o?"Loading...":"Select a chat to start messaging")})})}):Object(O.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:o?"":Object(O.jsx)("h3",{children:"No People"})})}}]),n}(l.Component),y=Object(v.b)((function(e){return{clientData:e.messagingReducer.clientData,activeChannel:e.messagingReducer.activeChannel,activeChannelMessages:e.messagingReducer.activeChannelMessages,typingMembers:e.messagingReducer.typingMembers,chatClientInstance:e.messagingReducer.chatClientInstance,currentChannelMembers:e.messagingReducer.currentChannelMembers,isLoading:e.messagingReducer.isLoading,channelData:e.messagingReducer.channelData}}),(function(e){return Object(b.b)({trainerChannel:p.trainerChannel},e)}))(x);t.default=y},410:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Jenny.c50273b9.png"},411:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Availability Icon.ad0517cb.svg"},430:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Location Icon.cbb0b32d.svg"},437:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Image 1.5667afc3.png"},465:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Shedule Icon.7b9fb7aa.svg"},587:function(e,t,n){}}]);