(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[174],{306:function(t,e,r){"use strict";r.r(e),r.d(e,"CustomScrollbar",(function(){return h}));var a=r(4),o=r(50),n=r(19),c=r(20),s=r(25),u=r(24),l=r(2),i=r.n(l),b=r(1007),d=r(1),h=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(n.a)(this,r);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return(t=e.call.apply(e,[this].concat(s))).scrollbars=i.a.createRef(),t.state={mounted:!1},t.renderThumb=function(e){var r=e.style,n=Object(o.a)(e,["style"]),c=t.props.customStyle,s=Object(a.a)({backgroundColor:"#f2f2f2",borderRadius:"8px",width:"16px"},c);return Object(d.jsx)("div",Object(a.a)(Object(a.a)({style:Object(a.a)(Object(a.a)({},r),s)},n),{},{className:"render-y"}))},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(){var t=this.props.scrollToBottomUpdate;void 0!==t&&t&&this.state.mounted&&this.scrollbars.current.scrollToBottom()}},{key:"renderView",value:function(t){var e=t.style,r=Object(o.a)(t,["style"]);return Object(d.jsx)("div",Object(a.a)(Object(a.a)({style:Object(a.a)({},e)},r),{},{className:"h"}))}},{key:"render",value:function(){var t=this.props,e=(t.customStyle,Object(o.a)(t,["customStyle"]));return Object(d.jsx)(b.Scrollbars,Object(a.a)({ref:this.scrollbars,renderThumbHorizontal:this.renderThumb,renderThumbVertical:this.renderThumb,renderView:this.renderView},e))}}]),r}(l.Component)}}]);