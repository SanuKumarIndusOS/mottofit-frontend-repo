(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[132],{239:function(t,e,n){"use strict";n.r(e),n.d(e,"LoaderWrapper",(function(){return h}));var o=n(3),a=n(15),c=n(16),r=n(20),i=n(19),s=n(2),u=n(72),p=n(1),l={page:1,filter:"",search:""},h=function(t){return function(e){return function(n){Object(r.a)(u,n);var s=Object(i.a)(u);function u(t){var e;return Object(a.a)(this,u),(e=s.call(this,t)).state={loading:!0,componentAPIprops:{}},e.getComponentProps=function(){return Object(o.a)(Object(o.a)({},e.props),e.state.componentAPIprops)},e.isLoading=function(t,e){return t.loaderKey.every((function(t){return""!==e[t]}))},e}return Object(c.a)(u,[{key:"componentWillMount",value:function(){var t=this;m(e,this.props).then((function(n){e.loaderKey||t.setState({loading:!1,componentAPIprops:n})}))}},{key:"componentWillReceiveProps",value:function(t){e.loaderKey&&this.isLoading(e,t)&&this.setState({loading:!1})}},{key:"render",value:function(){return this.state.loading?Object(p.jsx)("div",{className:"page-loader",children:Object(p.jsx)("div",{className:"position-relative w-100 h-100",children:Object(p.jsx)("div",{className:"loader-circle"})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(t,Object(o.a)({},this.getComponentProps()))})}}]),u}(s.Component)}},m=function(t,e){var n=e.history,a=void 0===n?{location:{search:""}}:n,c=Object(u.convertStringToObject)(a.location.search);return new Promise((function(n,a){Promise.all(t.actions.map((function(t){return"object"===typeof t&&t.handler?t.handler(Object(o.a)(Object(o.a)(Object(o.a)({},l),e.match?e.match.params:{}),{},{initialLoad:!0,match:e.match},c)):e[t](Object(o.a)(Object(o.a)(Object(o.a)({},l),e.match?e.match.params:{}),{},{initialLoad:!0,match:e.match},c))}))).then((function(e){n(d(e,t.actions))})).catch((function(t){n(!0)}))}))},d=function(t,e){return e.map((function(t,e){return!("object"!==typeof t||!t.handler)&&e})).filter(Boolean).reduce((function(n,o){return n[e[o].propsKey]=t[o],n}),{})}}}]);
//# sourceMappingURL=132.5c5f9c9a.chunk.js.map