(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[69,144,164,383,384,385,478],{224:function(e,t,s){"use strict";s.r(t);s(2);var a=s(334),n=s(1);t.default=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(a.default,{isDataPresent:!0})})}},333:function(e,t,s){"use strict";s.r(t),s.d(t,"ChatItem",(function(){return l}));var a=s(5),n=(s(2),s(268)),c=s.n(n),i=(s(475),s(47)),r=s(1),l=function(e){var t,s=e.currentChannelMembers,n=void 0===s?[]:s,l=e.currMsg,o=l.type,d=l.state,h=l.date;if("message"===o){var m=c()(d.timestamp).format("LT"),u=(null===d||void 0===d?void 0:d.author)===localStorage.getItem("user-id"),g=n.filter((function(e){return e.userIdenity===d.author}))[0]||{};t=Object(r.jsxs)("div",{className:"message_chat_".concat(u?"right":"left"),children:[Object(r.jsxs)("div",{className:"message_text",children:[Object(r.jsx)("h5",{children:(null===d||void 0===d?void 0:d.body)||""}),Object(r.jsx)("span",{className:"msg-time",children:m})]}),Object(r.jsx)(i.UserAvatar,Object(a.a)({},g))]})}else t=Object(r.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center my-3",children:Object(r.jsx)("span",{className:"info-badge",children:h})});return Object(r.jsx)("div",{children:t})}},334:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s(109),c=s(20),i=s(21),r=s(32),l=s(27),o=s(26),d=s(2),h=s.n(d),m=s(473),u=s(480),g=s(467),j=s(67),b=s(333),v=s(25),f=s(77),O=s(51),p=s(30),x=s(111),y=s(19),M=s(1),C=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).scrollToMessageListBottom=function(){var e,t;null===(e=i.messagesEndRef.current)||void 0===e||e.scrollTo(0,null===(t=i.messagesEndRef.current)||void 0===t?void 0:t.scrollHeight)},i.handleChange=function(e){var t=e.target.value,s=i.props.activeChannel;i.setState({message:t}),s&&s.typing()},i.handleSendMessage=function(e){e.preventDefault();var t=i.state.message,s=i.props.activeChannel;if(!s)return console.log("Chat Service is not configured.");s&&""!==t&&s.sendMessage(String(t)).then((function(){i.setState({message:""}),i.scrollToMessageListBottom(),i.unread()}))},i.formatMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="",s=e.reduce((function(e,s){var c=Object(n.a)(e),i=s.state.timestamp,r=Object(x.getFormatDate)(null,"YYYY"),l=Object(x.getFormatDate)(i,"YYYY"),o=Object(x.getFormatDate)(i,"MMMM DD"),d=r===l?o:"".concat(o,", ").concat(l);return t===d?c=[].concat(Object(n.a)(c),[Object(a.a)({type:"message"},s)]):(t=d,c=[].concat(Object(n.a)(c),[{type:"timestamp",date:d},Object(a.a)({type:"message"},s)])),c}),[]);return s},i.unread=function(){var e=[];i.setState({members:i.props.currentChannelMembers},(function(){var t=i.state.members.filter((function(e){return e.memberIdenity!==localStorage.getItem("user-id")}));e=t.map((function(e){return e.userId})),i.props.send_unread_notification({recepients:e})}))},i.handleKeyUp=function(e){13!=e.keyCode||e.shiftKey||i.handleSendMessage(e)},i.goBack=i.goBack.bind(Object(r.a)(i)),i.messagesEndRef=h.a.createRef(),i.state={message:"",members:[]},i}return Object(i.a)(s,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.activeChannelMessages.length!==e.activeChannelMessages.length&&this.scrollToMessageListBottom(),!1===this.props.isLoading&&!0===e.isLoading&&setTimeout((function(){t.scrollToMessageListBottom()}),100)}},{key:"componentDidMount",value:function(){this.scrollToMessageListBottom()}},{key:"render",value:function(){var e=this.props,t=e.activeChannelMessages,s=void 0===t?[]:t,a=e.typingMembers,n=void 0===a?[]:a,c=e.currentChannelMembers,i=void 0===c?[]:c,r=e.isLoading,l=void 0!==r&&r,o=e.activeChannel,d=void 0===o?{}:o,h=e.channelData,v=void 0===h?{}:h,f=e.isDataPresent,O=void 0!==f&&f,p=this.state.message,y=this.formatMessage(s);return O?Object(M.jsx)("div",{className:"message_right_chatarea",children:(null===d||void 0===d?void 0:d.sid)?Object(M.jsx)(M.Fragment,{children:l?Object(M.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(M.jsx)("span",{className:"info-badge",children:"".concat(l?"Loading...":"Connecting...")})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("div",{className:"mobile_chat_header",children:[Object(M.jsx)("h2",{style:{textTransform:"Capitalize"},children:(null===v||void 0===v?void 0:v.chatTitle)||"Title"}),Object(M.jsx)("h1",{onClick:this.goBack,children:"\u2039"})]}),Object(M.jsxs)("div",{className:"message_right_header",children:[Object(M.jsx)("h2",{style:{textTransform:"Capitalize"},children:(null===v||void 0===v?void 0:v.chatTitle)||"Title"}),Object(M.jsxs)("div",{className:"message_header_times",children:[Object(M.jsxs)("div",{className:"message_header_items",children:[Object(M.jsx)("img",{src:u.default,alt:"icon"}),Object(M.jsx)("h5",{children:Object(x.getFormatDate)(null===v||void 0===v?void 0:v.startTime,"ddd MMM DD YYYY",!0)})]}),Object(M.jsxs)("div",{className:"message_header_items",children:[Object(M.jsx)("img",{src:g.default,alt:"icon"}),Object(M.jsx)("h5",{children:Object(x.getFormatDate)(null===v||void 0===v?void 0:v.startTime,"hh:mm A",!0)})]}),Object(M.jsxs)("div",{className:"message_header_items",children:[Object(M.jsx)("img",{src:m.default,alt:"icon"}),Object(M.jsx)("h5",{children:null===v||void 0===v?void 0:v.venue})]})]}),Object(M.jsx)("p",{children:n.length>0&&Object(M.jsx)("span",{className:"ml-auto text-primary fw-600",children:"".concat(n.toString()," ").concat(n.length>1?"are":"is"," typing...")})})]}),Object(M.jsxs)("div",{className:"message_right_textarea",ref:this.messagesEndRef,children:[(null===y||void 0===y?void 0:y.length)>0?y.map((function(e,t){return Object(M.jsx)(b.ChatItem,{item:e,currentChannelMembers:i,currMsg:e},"".concat(Date.now(),"_").concat(t))})):Object(M.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(M.jsx)("span",{className:"info-badge",children:"No message"})}),Object(M.jsx)("div",{id:"end-message"})]}),Object(M.jsx)("form",{className:"w-100",onSubmit:this.handleSendMessage,children:Object(M.jsxs)("div",{className:"message_right_input",children:[Object(M.jsx)("textarea",{type:"text",placeholder:"Type your message here..",value:p,onChange:this.handleChange,onKeyDown:this.handleKeyUp,onKeyPress:this.handleKeyUp}),Object(M.jsx)("div",{className:"submit-btn-block",onClick:this.handleSendMessage,children:Object(M.jsx)("button",{className:"transparent-btn",children:Object(M.jsx)(j.default,{})})})]})})]})}):Object(M.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(M.jsx)("span",{className:"info-badge",children:"".concat(l?"Loading...":"Select a chat to start messaging")})})}):Object(M.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:l?"":Object(M.jsx)("h3",{children:"No New Messages"})})}}]),s}(d.Component),N=Object(p.b)((function(e){return{clientData:e.messagingReducer.clientData,activeChannel:e.messagingReducer.activeChannel,activeChannelMessages:e.messagingReducer.activeChannelMessages,typingMembers:e.messagingReducer.typingMembers,chatClientInstance:e.messagingReducer.chatClientInstance,currentChannelMembers:e.messagingReducer.currentChannelMembers,isLoading:e.messagingReducer.isLoading,channelData:e.messagingReducer.channelData}}),(function(e){return Object(v.b)({trainerChannel:f.trainerChannel,send_unread_notification:O.send_unread_notification},e)}))(C);t.default=Object(y.i)(N)},467:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Availability Icon.ad0517cb.svg"},473:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Location Icon.cbb0b32d.svg"},475:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Image 1.5667afc3.png"},480:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Shedule Icon.7b9fb7aa.svg"}}]);