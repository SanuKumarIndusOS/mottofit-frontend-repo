(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[139,223],{297:function(e,t,c){"use strict";c.r(t),c.d(t,"TrainerPrevModal",(function(){return d}));var s=c(4),n=c(15),r=c(2),i=c.n(r),a=c(115),o=c(221),l=(c(33),c(549),c(1)),d=function(e){var t=e.open,c=e.setOpen,d=e.trainerCardData,j=e.image,u=Object(r.useRef)(null),b=Object(l.jsx)("img",{src:a.default,alt:"close"}),m=i.a.useState(0),f=Object(n.a)(m,2),h=f[0],p=f[1];return i.a.useEffect((function(){var e=Object(s.a)({},d),t=(e=Object.keys(e).filter((function(e){return"description"!==e&&"firstName"!==e&&"verticals"!==e&&"lastName"!==e}))).map((function(e){return parseInt(d[e])})).filter((function(e){return!isNaN(e)&&parseFloat(e)>0})).sort((function(e,t){return e-t}));(null===t||void 0===t?void 0:t.length)>0&&p(t[0])}),[t]),Object(l.jsx)("div",{children:t?Object(l.jsx)(o.a,{open:t,onClose:function(){c(!1)},center:!0,closeIcon:b,container:u.current,styles:{boaderRadius:"10px"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row m-0",style:{alignleft:"auto"},children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"card-img-top",src:j||"https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg",style:j?{objectFit:"cover"}:{objectFit:"cover",backgroundColor:"blue"}}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("h3",{style:{textTransform:"capitalize"},children:[d.firstName,"\xa0",d.lastName]}),Object(l.jsx)("h6",{style:{color:"#898989",fontWeight:"bold"},children:void 0!==d.verticals?d.verticals.map((function(e){return Object(l.jsxs)("h6",{style:{margin:"0 0.3em 0 0"},children:[e,","]})})):null}),Object(l.jsx)("p",{children:d.description})]}),Object(l.jsx)("div",{className:"card-button",children:Object(l.jsxs)("button",{style:{backgroundColor:"#53BFD2"},children:["book a session",Object(l.jsxs)("p",{children:["from ",Object(l.jsxs)("span",{children:["$",h||""]})]})]})})]})})})}):null})}},549:function(e,t,c){}}]);
//# sourceMappingURL=139.887a4bd4.chunk.js.map