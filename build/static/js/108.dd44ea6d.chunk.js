(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[108,110,111],{245:function(t,e,n){"use strict";n.r(e),n.d(e,"LoaderWrapper",(function(){return d}));var a=n(10),o=n(18),r=n(19),c=n(24),i=n(23),s=n(2),u=n(33),l=n(1),p={page:1,filter:"",search:""},d=function(t){return function(e){return function(n){Object(c.a)(u,n);var s=Object(i.a)(u);function u(t){var e;return Object(o.a)(this,u),(e=s.call(this,t)).state={loading:!0,componentAPIprops:{}},e.getComponentProps=function(){return Object(a.a)(Object(a.a)({},e.props),e.state.componentAPIprops)},e.isLoading=function(t,e){return t.loaderKey.every((function(t){return""!==e[t]}))},e}return Object(r.a)(u,[{key:"componentWillMount",value:function(){var t=this;m(e,this.props).then((function(n){e.loaderKey||t.setState({loading:!1,componentAPIprops:n})}))}},{key:"componentWillReceiveProps",value:function(t){e.loaderKey&&this.isLoading(e,t)&&this.setState({loading:!1})}},{key:"render",value:function(){return this.state.loading?Object(l.jsx)("div",{className:"page-loader",children:Object(l.jsx)("div",{className:"position-relative w-100 h-100",children:Object(l.jsx)("div",{className:"loader-circle"})})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(t,Object(a.a)({},this.getComponentProps()))})}}]),u}(s.Component)}},m=function(t,e){var n=e.history,o=void 0===n?{location:{search:""}}:n,r=Object(u.convertStringToObject)(o.location.search);return new Promise((function(n,o){Promise.all(t.actions.map((function(t){return"object"===typeof t&&t.handler?t.handler(Object(a.a)(Object(a.a)(Object(a.a)({},p),e.match?e.match.params:{}),{},{initialLoad:!0,match:e.match},r)):e[t](Object(a.a)(Object(a.a)(Object(a.a)({},p),e.match?e.match.params:{}),{},{initialLoad:!0,match:e.match},r))}))).then((function(e){n(f(e,t.actions))})).catch((function(t){n(!0)}))}))},f=function(t,e){return e.map((function(t,e){return!("object"!==typeof t||!t.handler)&&e})).filter(Boolean).reduce((function(n,a){return n[e[a].propsKey]=t[a],n}),{})}},246:function(t,e,n){"use strict";n.r(e),n.d(e,"getHomePageDetails",(function(){return o})),n.d(e,"getPageDetails",(function(){return r}));var a=n(25),o=function(t){return function(t,e,n){n.api;return console.log("called"),new Promise((function(e,n){t({type:a.HomeActionType.updateHomePageData,payload:"test"}),e(!0)}))}},r=function(){return new Promise((function(t,e){t({name:"viswaram"})}))}},275:function(t,e,n){"use strict";n.r(e);var a=n(18),o=n(19),r=n(24),c=n(23),i=n(2),s=n(57),u=n(38),l=n(246),p=n(245),d=n(17),m=n(1),f=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.data,e=void 0===t?"":t;return Object(m.jsxs)(m.Fragment,{children:["Login ",e,Object(m.jsx)("button",{onClick:function(t){return Object(d.pageNavigationByName)({params:{id:1},name:"LoginDashboard"})},children:"Click"})]})}}]),n}(i.Component),h=["getHomePageDetails",{handler:l.getPageDetails,propsKey:"pageDetails"}],j=Object(p.LoaderWrapper)(f)({actions:h});e.default=Object(s.b)((function(t){return{data:t.home.data}}),(function(t){return Object(u.b)({getHomePageDetails:l.getHomePageDetails},t)}))(j)}}]);
//# sourceMappingURL=108.dd44ea6d.chunk.js.map