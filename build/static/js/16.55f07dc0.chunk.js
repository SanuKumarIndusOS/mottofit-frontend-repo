(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[16,172],{1065:function(e,s){},1102:function(e,s){},151:function(e,s,t){"use strict";t.r(s);var c=t(56),a=t.n(c),n=t(87),i=t(564),r=t(5),l=t(2),j=t.n(l),d=t(6),h=(t(89),t(478),t(14)),m=t(81),o=t(188),b=t(16),O=t(20),x=t(15),u=t(1),g=t(971),_=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"message_chat_right",children:[Object(u.jsx)("div",{className:"message_text",children:Object(u.jsx)("h5",{children:e.data})}),Object(u.jsx)("img",{src:m.default,alt:"icon"})]})})};s.default=function(){var e=j.a.useState([]),s=Object(r.a)(e,2),t=s[0],c=s[1],l=j.a.useState([]),m=Object(r.a)(l,2),v=m[0],f=m[1],N=j.a.useState([]),p=Object(r.a)(N,2),y=p[0],w=p[1],C=j.a.useState([]),k=Object(r.a)(C,2),S=k[0],T=k[1],I=j.a.useState(),D=Object(r.a)(I,2),A=(D[0],D[1],j.a.useState([])),J=Object(r.a)(A,2),L=J[0],U=J[1],F=j.a.useState([]),H=Object(r.a)(F,2),q=H[0],M=H[1],R=j.a.useState(""),z=Object(r.a)(R,2),E=z[0],G=z[1],P=j.a.useState(""),B=Object(r.a)(P,2);B[0],B[1];j.a.useEffect((function(){var e=localStorage.getItem("token");fetch("http://doodlebluelive.com:2338/v1/token?identity=7f007fd1-7042-4c1c-b8ea-3d739cf9f707",{method:"get",headers:new Headers({Authorization:e,"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){G(e.chatToken)})),fetch("http://doodlebluelive.com:2338/v1/trainer/channel",{method:"get",headers:new Headers({Authorization:e,"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){c(e.data.individualClient),f(e.data.socialGroups),w(e.data.admins),console.log("admin data",y)}))}),[]);var V=function(){console.log(q);S.sendMessage(q),console.log("text_thread"),S.on("messageAdded",K),M(" ")},K=function(e){U((function(s){return[].concat(Object(i.a)(s),[e])})),console.log(L)};function Q(){return(Q=Object(n.a)(a.a.mark((function e(s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U([]),console.log("loadMessages",s),g.Client.create(E).then((function(e){var t;e.getChannelByUniqueName(s).then((function(e){console.log(e),T(t=e),t.join()})),e.on("channelAdded",(function(e){})),e.on("channelJoined",function(){var e=Object(n.a)(a.a.mark((function e(s){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("joined",s),e.next=3,s.getMessages();case 3:t=e.sent,U(t.items),console.log(t.items);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),e.on("channelRemoved",(function(e){}))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){console.log("PopulateContacts",e),function(e){Q.apply(this,arguments)}(e)}var X=j.a.useRef();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container main_message_container",children:Object(u.jsxs)("div",{className:"message_outter_container",children:[Object(u.jsx)("h2",{children:"Messages"}),Object(u.jsx)("div",{className:"message_inner",children:Object(u.jsxs)("div",{className:"message_wrapper",children:[Object(u.jsxs)(d.d,{defaultTab:"one",onChange:function(e){console.log(e)},children:[Object(u.jsxs)(d.b,{children:[Object(u.jsx)(d.a,{tabFor:"one",children:"All"}),Object(u.jsx)(d.a,{tabFor:"two",children:"INDIVIDUAL CLIENTS"}),Object(u.jsx)(d.a,{tabFor:"three",children:"SOCIAL GROUPS"}),Object(u.jsx)(d.a,{tabFor:"four",children:"ADMIN"})]}),Object(u.jsxs)("div",{className:"message_inner",children:[Object(u.jsx)(d.c,{tabId:"one",children:Object(u.jsxs)("div",{className:"message_inner_one",children:[Object(u.jsx)("div",{className:"message_left",children:[].concat(Object(i.a)(t),Object(i.a)(v),Object(i.a)(y)).map((function(e){return Object(u.jsx)("div",{className:"contact_item",children:Object(u.jsxs)("div",{className:"inner_link",children:[Object(u.jsx)("img",{src:h.default,alt:"icon"}),Object(u.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(u.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(u.jsx)("div",{className:"message_right",children:Object(u.jsxs)("div",{className:"message_right_chatarea",children:[Object(u.jsxs)("div",{className:"message_right_header",children:[Object(u.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(u.jsxs)("div",{className:"message_header_times",children:[Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:o.default,alt:"icon"}),Object(u.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:b.default,alt:"icon"}),Object(u.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:O.default,alt:"icon"}),Object(u.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(u.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(u.jsx)(_,{data:e.state.body})})),Object(u.jsx)("div",{ref:X})]}),Object(u.jsxs)("div",{className:"message_right_input",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(u.jsx)("div",{onClick:V,children:Object(u.jsx)(x.default,{})})]})]})})]})}),Object(u.jsx)(d.c,{tabId:"two",children:Object(u.jsxs)("div",{className:"message_inner_one",children:[Object(u.jsx)("div",{className:"message_left",children:t.map((function(e){return Object(u.jsx)("div",{className:"contact_item",children:Object(u.jsxs)("div",{className:"inner_link",children:[Object(u.jsx)("img",{src:h.default,alt:"icon"}),Object(u.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(u.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(u.jsx)("div",{className:"message_right",children:Object(u.jsxs)("div",{className:"message_right_chatarea",children:[Object(u.jsxs)("div",{className:"message_right_header",children:[Object(u.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(u.jsxs)("div",{className:"message_header_times",children:[Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:o.default,alt:"icon"}),Object(u.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:b.default,alt:"icon"}),Object(u.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:O.default,alt:"icon"}),Object(u.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(u.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(u.jsx)(_,{data:e.state.body})})),Object(u.jsx)("div",{ref:X})]}),Object(u.jsxs)("div",{className:"message_right_input",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(u.jsx)("div",{onClick:V,children:Object(u.jsx)(x.default,{})})]})]})})]})}),Object(u.jsx)(d.c,{tabId:"three",children:Object(u.jsxs)("div",{className:"message_inner_one",children:[Object(u.jsx)("div",{className:"message_left",children:v.map((function(e){return Object(u.jsx)("div",{className:"contact_item",children:Object(u.jsxs)("div",{className:"inner_link",children:[Object(u.jsx)("img",{src:h.default,alt:"icon"}),Object(u.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(u.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(u.jsx)("div",{className:"message_right",children:Object(u.jsxs)("div",{className:"message_right_chatarea",children:[Object(u.jsxs)("div",{className:"message_right_header",children:[Object(u.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(u.jsxs)("div",{className:"message_header_times",children:[Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:o.default,alt:"icon"}),Object(u.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:b.default,alt:"icon"}),Object(u.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:O.default,alt:"icon"}),Object(u.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(u.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(u.jsx)(_,{data:e.state.body})})),Object(u.jsx)("div",{ref:X})]}),Object(u.jsxs)("div",{className:"message_right_input",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(u.jsx)("div",{onClick:V,children:Object(u.jsx)(x.default,{})})]})]})})]})}),Object(u.jsx)(d.c,{tabId:"four",children:Object(u.jsxs)("div",{className:"message_inner_one",children:[Object(u.jsx)("div",{className:"message_left",children:y.map((function(e){return Object(u.jsx)("div",{className:"contact_item",children:Object(u.jsxs)("div",{className:"inner_link",children:[Object(u.jsx)("img",{src:h.default,alt:"icon"}),Object(u.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(u.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(u.jsx)("div",{className:"message_right",children:Object(u.jsxs)("div",{className:"message_right_chatarea",children:[Object(u.jsxs)("div",{className:"message_right_header",children:[Object(u.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(u.jsxs)("div",{className:"message_header_times",children:[Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:o.default,alt:"icon"}),Object(u.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:b.default,alt:"icon"}),Object(u.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(u.jsxs)("div",{className:"message_header_items",children:[Object(u.jsx)("img",{src:O.default,alt:"icon"}),Object(u.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(u.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(u.jsx)(_,{data:e.state.body})})),Object(u.jsx)("div",{ref:X})]}),Object(u.jsxs)("div",{className:"message_right_input",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(u.jsx)("div",{onClick:V,children:Object(u.jsx)(x.default,{})})]})]})})]})})]})]}),Object(u.jsx)("div",{className:""})]})})]})})})}},478:function(e,s,t){}}]);
//# sourceMappingURL=16.55f07dc0.chunk.js.map