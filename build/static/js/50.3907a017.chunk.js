(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[50,177,296,297,298,382,383],{126:function(e,s,t){"use strict";t.r(s);var c=t(49),a=t.n(c),n=t(71),i=t(559),r=t(10),l=t(2),j=t.n(l),d=t(579),h=(t(578),t(436),t(304)),m=t(359),o=t(360),b=t(305),u=t(307),O=t(37),x=t(1),g=t(775),_=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"message_chat_right",children:[Object(x.jsx)("div",{className:"message_text",children:Object(x.jsx)("h5",{children:e.data})}),Object(x.jsx)("img",{src:m.default,alt:"icon"})]})})};s.default=function(){var e=j.a.useState([]),s=Object(r.a)(e,2),t=s[0],c=s[1],l=j.a.useState([]),m=Object(r.a)(l,2),f=m[0],v=m[1],N=j.a.useState([]),p=Object(r.a)(N,2),y=p[0],w=p[1],C=j.a.useState([]),k=Object(r.a)(C,2),S=k[0],I=k[1],T=j.a.useState(),D=Object(r.a)(T,2),A=(D[0],D[1],j.a.useState([])),J=Object(r.a)(A,2),L=J[0],U=J[1],F=j.a.useState([]),H=Object(r.a)(F,2),q=H[0],M=H[1],R=j.a.useState(""),z=Object(r.a)(R,2),E=z[0],G=z[1],P=j.a.useState(""),B=Object(r.a)(P,2);B[0],B[1];j.a.useEffect((function(){var e=localStorage.getItem("token");fetch("http://doodlebluelive.com:2338/v1/token?identity=7f007fd1-7042-4c1c-b8ea-3d739cf9f707",{method:"get",headers:new Headers({Authorization:e,"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){G(e.chatToken)})),fetch("http://doodlebluelive.com:2338/v1/trainer/channel",{method:"get",headers:new Headers({Authorization:e,"Content-Type":"application/x-www-form-urlencoded"})}).then((function(e){return e.json()})).then((function(e){c(e.data.individualClient),v(e.data.socialGroups),w(e.data.admins),console.log("admin data",y)}))}),[]);var V=function(){console.log(q);S.sendMessage(q),console.log("text_thread"),S.on("messageAdded",K),M(" ")},K=function(e){U((function(s){return[].concat(Object(i.a)(s),[e])})),console.log(L)};function Q(){return(Q=Object(n.a)(a.a.mark((function e(s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U([]),console.log("loadMessages",s),g.Client.create(E).then((function(e){var t;e.getChannelByUniqueName(s).then((function(e){console.log(e),I(t=e),t.join()})),e.on("channelAdded",(function(e){})),e.on("channelJoined",function(){var e=Object(n.a)(a.a.mark((function e(s){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("joined",s),e.next=3,s.getMessages();case 3:t=e.sent,U(t.items),console.log(t.items);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),e.on("channelRemoved",(function(e){}))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){console.log("PopulateContacts",e),function(e){Q.apply(this,arguments)}(e)}var X=j.a.useRef();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container main_message_container",children:Object(x.jsxs)("div",{className:"message_outter_container",children:[Object(x.jsx)("h2",{children:"Messages"}),Object(x.jsx)("div",{className:"message_inner",children:Object(x.jsxs)("div",{className:"message_wrapper",children:[Object(x.jsxs)(d.d,{defaultTab:"one",onChange:function(e){console.log(e)},children:[Object(x.jsxs)(d.b,{children:[Object(x.jsx)(d.a,{tabFor:"one",children:"All"}),Object(x.jsx)(d.a,{tabFor:"two",children:"INDIVIDUAL CLIENTS"}),Object(x.jsx)(d.a,{tabFor:"three",children:"SOCIAL GROUPS"}),Object(x.jsx)(d.a,{tabFor:"four",children:"ADMIN"})]}),Object(x.jsxs)("div",{className:"message_inner",children:[Object(x.jsx)(d.c,{tabId:"one",children:Object(x.jsxs)("div",{className:"message_inner_one",children:[Object(x.jsx)("div",{className:"message_left",children:[].concat(Object(i.a)(t),Object(i.a)(f),Object(i.a)(y)).map((function(e){return Object(x.jsx)("div",{className:"contact_item",children:Object(x.jsxs)("div",{className:"inner_link",children:[Object(x.jsx)("img",{src:h.default,alt:"icon"}),Object(x.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(x.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(x.jsx)("div",{className:"message_right",children:Object(x.jsxs)("div",{className:"message_right_chatarea",children:[Object(x.jsxs)("div",{className:"message_right_header",children:[Object(x.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(x.jsxs)("div",{className:"message_header_times",children:[Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:o.default,alt:"icon"}),Object(x.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:b.default,alt:"icon"}),Object(x.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:u.default,alt:"icon"}),Object(x.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(x.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(x.jsx)(_,{data:e.state.body})})),Object(x.jsx)("div",{ref:X})]}),Object(x.jsxs)("div",{className:"message_right_input",children:[Object(x.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(x.jsx)("div",{onClick:V,children:Object(x.jsx)(O.default,{})})]})]})})]})}),Object(x.jsx)(d.c,{tabId:"two",children:Object(x.jsxs)("div",{className:"message_inner_one",children:[Object(x.jsx)("div",{className:"message_left",children:t.map((function(e){return Object(x.jsx)("div",{className:"contact_item",children:Object(x.jsxs)("div",{className:"inner_link",children:[Object(x.jsx)("img",{src:h.default,alt:"icon"}),Object(x.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(x.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(x.jsx)("div",{className:"message_right",children:Object(x.jsxs)("div",{className:"message_right_chatarea",children:[Object(x.jsxs)("div",{className:"message_right_header",children:[Object(x.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(x.jsxs)("div",{className:"message_header_times",children:[Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:o.default,alt:"icon"}),Object(x.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:b.default,alt:"icon"}),Object(x.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:u.default,alt:"icon"}),Object(x.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(x.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(x.jsx)(_,{data:e.state.body})})),Object(x.jsx)("div",{ref:X})]}),Object(x.jsxs)("div",{className:"message_right_input",children:[Object(x.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(x.jsx)("div",{onClick:V,children:Object(x.jsx)(O.default,{})})]})]})})]})}),Object(x.jsx)(d.c,{tabId:"three",children:Object(x.jsxs)("div",{className:"message_inner_one",children:[Object(x.jsx)("div",{className:"message_left",children:f.map((function(e){return Object(x.jsx)("div",{className:"contact_item",children:Object(x.jsxs)("div",{className:"inner_link",children:[Object(x.jsx)("img",{src:h.default,alt:"icon"}),Object(x.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(x.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(x.jsx)("div",{className:"message_right",children:Object(x.jsxs)("div",{className:"message_right_chatarea",children:[Object(x.jsxs)("div",{className:"message_right_header",children:[Object(x.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(x.jsxs)("div",{className:"message_header_times",children:[Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:o.default,alt:"icon"}),Object(x.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:b.default,alt:"icon"}),Object(x.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:u.default,alt:"icon"}),Object(x.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(x.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(x.jsx)(_,{data:e.state.body})})),Object(x.jsx)("div",{ref:X})]}),Object(x.jsxs)("div",{className:"message_right_input",children:[Object(x.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(x.jsx)("div",{onClick:V,children:Object(x.jsx)(O.default,{})})]})]})})]})}),Object(x.jsx)(d.c,{tabId:"four",children:Object(x.jsxs)("div",{className:"message_inner_one",children:[Object(x.jsx)("div",{className:"message_left",children:y.map((function(e){return Object(x.jsx)("div",{className:"contact_item",children:Object(x.jsxs)("div",{className:"inner_link",children:[Object(x.jsx)("img",{src:h.default,alt:"icon"}),Object(x.jsx)("div",{className:"message_link_notify",onClick:function(){return W(e.channelUniqueName)},children:Object(x.jsx)("h3",{children:e.members[0].userName})})]})})}))}),Object(x.jsx)("div",{className:"message_right",children:Object(x.jsxs)("div",{className:"message_right_chatarea",children:[Object(x.jsxs)("div",{className:"message_right_header",children:[Object(x.jsx)("h2",{children:"Strength & HIIT with Jeremy Clark"}),Object(x.jsxs)("div",{className:"message_header_times",children:[Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:o.default,alt:"icon"}),Object(x.jsxs)("h5",{children:[" ",(new Date).toDateString()]})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:b.default,alt:"icon"}),Object(x.jsx)("h5",{children:(new Date).toLocaleTimeString()})]}),Object(x.jsxs)("div",{className:"message_header_items",children:[Object(x.jsx)("img",{src:u.default,alt:"icon"}),Object(x.jsx)("h5",{children:"Chennai, TN"})]})]})]}),Object(x.jsxs)("div",{className:"message_right_textarea",children:[L.map((function(e){return Object(x.jsx)(_,{data:e.state.body})})),Object(x.jsx)("div",{ref:X})]}),Object(x.jsxs)("div",{className:"message_right_input",children:[Object(x.jsx)("input",{type:"text",placeholder:"Type your message here..",value:q,onChange:function(e){M(e.target.value)}}),Object(x.jsx)("div",{onClick:V,children:Object(x.jsx)(O.default,{})})]})]})})]})})]})]}),Object(x.jsx)("div",{className:""})]})})]})})})}},304:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Jenny.c50273b9.png"},305:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Availability Icon.ad0517cb.svg"},307:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Location Icon.cbb0b32d.svg"},359:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Image 1.5667afc3.png"},360:function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/Shedule Icon.7b9fb7aa.svg"},436:function(e,s,t){},812:function(e,s){},826:function(e,s){}}]);
//# sourceMappingURL=50.3907a017.chunk.js.map