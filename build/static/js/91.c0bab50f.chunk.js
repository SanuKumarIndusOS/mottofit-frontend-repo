(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[91,160],{154:function(t,e,a){"use strict";a.r(e),a.d(e,"InfiniteScrollComponent",(function(){return m}));var n=a(4),o=a(64),i=a.n(o),r=a(93),s=a(21),c=a(22),l=a(26),u=a(25),d=a(2),h=a(65),b=a(291),p=a(1),m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).toggleContent=function(t){var e=parseInt(t),a=n.state,o=a.showContent,i=(a.isMobile,o===e?"":e);n.setState({showContent:i},(function(){}))},n.handleAboutToReachBottom=Object(r.a)(i.a.mark((function t(){var e,a,o,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.state,a=e.isLoading,o=e.page,r=n.props.handleApi,n.setState({isLoading:!0}),!1!==a){t.next=9;break}return t.next=6,r(o+1);case 6:s=t.sent,s.data,n.setState({page:o+1,isLoading:!1});case 9:case"end":return t.stop()}}),t)}))),n.handleUpdate=function(t){var e=t.scrollTop,a=t.scrollHeight,o=t.clientHeight,i=n.state,r=i.isLoading,s=i.total,c=i.currentDataSize;(e+100)/(a-o)>1&&c<s&&!1===r&&n.handleAboutToReachBottom()},n.loader=function(){return Object(p.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center w-100 pt-3",children:Object(p.jsx)(h.CommonPageLoader,{})})},n.state={showContent:"",page:0,count:0,total:0,isMobile:!1,isLoading:!1,notificationData:[],currentDataSize:0,initialLoad:!0},n.refArray=[],n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(t){var e=this.props.totalSize,a=this.state,n=a.initialLoad,o=a.currentDataSize;!n&&0===o&&e!==t.totalSize&&e>0&&(this.setState({currentDataSize:o,initialLoad:!0,total:e}),console.log("Runned"))}},{key:"componentDidMount",value:function(){var t=this.props,e=t.currentDataSize,a=t.totalSize;window.matchMedia("(max-width: 700px)").matches&&this.setState({isMobile:!0}),e>0?this.setState({total:a}):this.setState({initialLoad:!1})}},{key:"render",value:function(){var t=this.state,e=(t.showContent,t.total),a=t.isMobile,o=t.isLoading,i=(t.notificationData,t.initialLoad),r=a?{style:{height:550}}:{style:{height:500}},s={};return t.currentDataSize<e&&(s.onUpdate=this.handleUpdate),Object(p.jsx)("div",{className:"notification-page",children:Object(p.jsx)("div",{className:"notification-page-body",children:i?Object(p.jsxs)(b.CustomScrollbar,Object(n.a)(Object(n.a)(Object(n.a)({customStyle:{width:"12px",right:"5px"}},r),s),{},{children:[this.props.children,o&&this.loader()]})):Object(p.jsx)(h.CommonPageLoader,{className:"mt-5 pt-5"})})})}}]),a}(d.Component)},291:function(t,e,a){"use strict";a.r(e),a.d(e,"CustomScrollbar",(function(){return b}));var n=a(4),o=a(48),i=a(21),r=a(22),s=a(26),c=a(25),l=a(2),u=a.n(l),d=a(956),h=a(1),b=function(t){Object(s.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).scrollbars=u.a.createRef(),t.state={mounted:!1},t.renderThumb=function(e){var a=e.style,i=Object(o.a)(e,["style"]),r=t.props.customStyle,s=Object(n.a)({backgroundColor:"#f2f2f2",borderRadius:"8px",width:"16px"},r);return Object(h.jsx)("div",Object(n.a)(Object(n.a)({style:Object(n.a)(Object(n.a)({},a),s)},i),{},{className:"render-y"}))},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(){var t=this.props.scrollToBottomUpdate;void 0!==t&&t&&this.state.mounted&&this.scrollbars.current.scrollToBottom()}},{key:"renderView",value:function(t){var e=t.style,a=Object(o.a)(t,["style"]);return Object(h.jsx)("div",Object(n.a)(Object(n.a)({style:Object(n.a)({},e)},a),{},{className:"h"}))}},{key:"render",value:function(){var t=this.props,e=(t.customStyle,Object(o.a)(t,["customStyle"]));return Object(h.jsx)(d.Scrollbars,Object(n.a)({ref:this.scrollbars,renderThumbHorizontal:this.renderThumb,renderThumbVertical:this.renderThumb,renderView:this.renderView},e))}}]),a}(l.Component)}}]);