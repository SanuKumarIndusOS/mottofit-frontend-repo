(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[124,141,350,351,352,445],{281:function(e,t,s){"use strict";s.r(t),s.d(t,"ChatItem",(function(){return l}));var a=s(4),n=(s(2),s(220)),c=s.n(n),i=(s(426),s(46)),r=s(1),l=function(e){var t,s=e.currentChannelMembers,n=void 0===s?[]:s,l=e.currMsg,o=l.type,d=l.state,m=l.date;if("message"===o){var g=c()(d.timestamp).format("LT"),h=(null===d||void 0===d?void 0:d.author)===localStorage.getItem("user-id"),u=n.filter((function(e){return e.userIdenity===d.author}))[0]||{};t=Object(r.jsxs)("div",{className:"message_chat_".concat(h?"right":"left"),children:[Object(r.jsxs)("div",{className:"message_text",children:[Object(r.jsx)("h5",{children:(null===d||void 0===d?void 0:d.body)||""}),Object(r.jsx)("span",{className:"msg-time",children:g})]}),Object(r.jsx)(i.UserAvatar,Object(a.a)({},u))]})}else t=Object(r.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center my-3",children:Object(r.jsx)("span",{className:"info-badge",children:m})});return Object(r.jsx)("div",{children:t})}},297:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s(84),c=s(22),i=s(23),r=s(27),l=s(26),o=s(2),d=s.n(o),m=s(402),g=s(454),h=s(400),u=s(53),j=s(281),b=s(21),v=s(62),f=s(33),O=s(85),p=s(1),x=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).scrollToMessageListBottom=function(){var e,t;null===(e=i.messagesEndRef.current)||void 0===e||e.scrollTo(0,null===(t=i.messagesEndRef.current)||void 0===t?void 0:t.scrollHeight)},i.handleChange=function(e){var t=e.target.value,s=i.props.activeChannel;i.setState({message:t}),s&&s.typing()},i.handleSendMessage=function(e){e.preventDefault();var t=i.state.message,s=i.props.activeChannel;if(!s)return console.log("Chat Service is not configured.");s&&s.sendMessage(String(t)).then((function(){i.setState({message:""}),i.scrollToMessageListBottom()}))},i.formatMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="",s=e.reduce((function(e,s){var c=Object(n.a)(e),i=s.state.timestamp,r=Object(O.getFormatDate)(null,"YYYY"),l=Object(O.getFormatDate)(i,"YYYY"),o=Object(O.getFormatDate)(i,"MMMM DD"),d=r===l?o:"".concat(o,", ").concat(l);return t===d?c=[].concat(Object(n.a)(c),[Object(a.a)({type:"message"},s)]):(t=d,c=[].concat(Object(n.a)(c),[{type:"timestamp",date:d},Object(a.a)({type:"message"},s)])),c}),[]);return s},i.messagesEndRef=d.a.createRef(),i.state={message:""},i}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.activeChannelMessages.length!==e.activeChannelMessages.length&&this.scrollToMessageListBottom(),!1===this.props.isLoading&&!0===e.isLoading&&setTimeout((function(){t.scrollToMessageListBottom()}),100)}},{key:"componentDidMount",value:function(){this.scrollToMessageListBottom()}},{key:"render",value:function(){var e=this.props,t=e.activeChannelMessages,s=void 0===t?[]:t,a=e.typingMembers,n=void 0===a?[]:a,c=e.currentChannelMembers,i=void 0===c?[]:c,r=e.isLoading,l=void 0!==r&&r,o=e.activeChannel,d=void 0===o?{}:o,b=e.channelData,v=void 0===b?{}:b,f=e.isDataPresent,x=void 0!==f&&f,M=this.state.message,C=this.formatMessage(s);return x?Object(p.jsx)("div",{className:"message_right_chatarea",children:(null===d||void 0===d?void 0:d.sid)?Object(p.jsx)(p.Fragment,{children:l?Object(p.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(p.jsx)("span",{className:"info-badge",children:"".concat(l?"Loading...":"Connecting...")})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"message_right_header",children:[Object(p.jsx)("h2",{children:(null===v||void 0===v?void 0:v.chatTitle)||"Title"}),Object(p.jsxs)("div",{className:"message_header_times",children:[Object(p.jsxs)("div",{className:"message_header_items",children:[Object(p.jsx)("img",{src:g.default,alt:"icon"}),Object(p.jsx)("h5",{children:Object(O.getFormatDate)(null===v||void 0===v?void 0:v.startTime,"ddd MMM DD YYYY",!0)})]}),Object(p.jsxs)("div",{className:"message_header_items",children:[Object(p.jsx)("img",{src:h.default,alt:"icon"}),Object(p.jsx)("h5",{children:Object(O.getFormatDate)(null===v||void 0===v?void 0:v.startTime,"hh:mm A",!0)})]}),Object(p.jsxs)("div",{className:"message_header_items",children:[Object(p.jsx)("img",{src:m.default,alt:"icon"}),Object(p.jsx)("h5",{children:null===v||void 0===v?void 0:v.venue})]})]}),Object(p.jsx)("p",{children:n.length>0&&Object(p.jsx)("span",{className:"ml-auto text-primary fw-600",children:"".concat(n.toString()," ").concat(n.length>1?"are":"is"," typing...")})})]}),Object(p.jsxs)("div",{className:"message_right_textarea",ref:this.messagesEndRef,children:[(null===C||void 0===C?void 0:C.length)>0?C.map((function(e,t){return Object(p.jsx)(j.ChatItem,{item:e,currentChannelMembers:i,currMsg:e},"".concat(Date.now(),"_").concat(t))})):Object(p.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(p.jsx)("span",{className:"info-badge",children:"No message"})}),Object(p.jsx)("div",{id:"end-message"})]}),Object(p.jsx)("form",{className:"w-100",onSubmit:this.handleSendMessage,children:Object(p.jsxs)("div",{className:"message_right_input",children:[Object(p.jsx)("input",{type:"text",placeholder:"Type your message here..",value:M,onChange:this.handleChange}),Object(p.jsx)("div",{className:"submit-btn-block",children:Object(p.jsx)("button",{className:"transparent-btn",children:Object(p.jsx)(u.default,{})})})]})})]})}):Object(p.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(p.jsx)("span",{className:"info-badge",children:"".concat(l?"Loading...":"Select a chat to start messaging")})})}):null}}]),s}(o.Component),M=Object(f.b)((function(e){return{clientData:e.messagingReducer.clientData,activeChannel:e.messagingReducer.activeChannel,activeChannelMessages:e.messagingReducer.activeChannelMessages,typingMembers:e.messagingReducer.typingMembers,chatClientInstance:e.messagingReducer.chatClientInstance,currentChannelMembers:e.messagingReducer.currentChannelMembers,isLoading:e.messagingReducer.isLoading,channelData:e.messagingReducer.channelData}}),(function(e){return Object(b.b)({trainerChannel:v.trainerChannel},e)}))(x);t.default=M},400:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Availability Icon.ad0517cb.svg"},402:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Location Icon.cbb0b32d.svg"},426:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Image 1.5667afc3.png"},454:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Shedule Icon.7b9fb7aa.svg"}}]);
//# sourceMappingURL=124.f61030fa.chunk.js.map