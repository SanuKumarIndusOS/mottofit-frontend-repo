<<<<<<< HEAD:build/static/js/3.ca3bc564.chunk.js
(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[3,69,102,117,153,156,157,158,159,160,161,162,163,164,165,210,211,212,219],{228:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c(2),i=c.n(a),l=c(545),n=c.n(l),d=c(304),r=c(312),o=c(307),j=c(306),u=c(310),h=c(303),b=c(311),m=c(308),O=c(305),f=c(309),x=(c(352),c(1));t.default=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],l=t[1],v=Object(a.useState)(!1),p=Object(s.a)(v,2),_=p[0],N=p[1],g=Object(a.useState)(!1),y=Object(s.a)(g,2),S=y[0],k=y[1],M=Object(a.useState)(!1),A=Object(s.a)(M,2),D=A[0],E=A[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"box_3_active_home",children:[Object(x.jsxs)("div",{className:"dd_row_one",children:[Object(x.jsx)("div",{className:"option",onClick:function(){l(!c),console.log(c,"boxing")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:d.default,hoverSrc:h.default,onClick:i.a.MouseEventHandler}),Object(x.jsx)("h2",{children:"Early Bird"}),Object(x.jsx)("label",{children:"(5am-7:30am)"})]})}),Object(x.jsx)("div",{className:"option",onClick:function(){N(!_),console.log(_,"pilates")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:r.default,hoverSrc:b.default}),Object(x.jsx)("h2",{children:"Rise & Shine"}),Object(x.jsx)("label",{children:"(8am-11am)"})]})})]}),Object(x.jsxs)("div",{className:"dd_row_two",children:[Object(x.jsx)("div",{className:"option",onClick:function(){E(!D),console.log(D,"hiit")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:o.default,hoverSrc:m.default}),Object(x.jsx)("h2",{children:"Mid-day Break"}),Object(x.jsx)("label",{children:"(11:30am-4pm)"})]})}),Object(x.jsx)("div",{className:"option",onClick:function(){k(!S),console.log(S,"yoga")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:j.default,hoverSrc:O.default}),Object(x.jsx)("h2",{children:"Happy Hour"}),Object(x.jsx)("label",{children:"(4:30pm-7pm)"})]})})]}),Object(x.jsx)("div",{className:"dd_row_two",children:Object(x.jsx)("div",{className:"option",onClick:function(){k(!S),console.log(S,"yoga")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:u.default,hoverSrc:f.default}),Object(x.jsx)("h2",{children:"Never Too Late"}),Object(x.jsx)("label",{children:"(7:30pm-9:30pm)"})]})})})]})})}},244:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c(2),i=c.n(a),l=c(49),n=c.n(l),d=(c(463),c(464),c(439)),r=c(440),o=c(437),j=c(438),u=c(228),h=c(118),b=c(16),m=c(1),O=[{value:"nyw",label:"New York"},{value:"maimi",label:"Maimi"},{value:"hampton",label:"Hampton"},{value:"plam",label:"Plam Beach"}];t.default=function(e){var t=i.a.useState([]),c=Object(s.a)(t,2),l=c[0],f=c[1],x=i.a.useState(n()().startOf("isoWeek")),v=Object(s.a)(x,2),p=v[0],_=v[1],N=i.a.useState(n()().endOf("isoWeek")),g=Object(s.a)(N,2),y=g[0],S=g[1];i.a.useEffect((function(){n()("02:00 AM","hh:mm A").add(30,"minutes").format("hh:mm A");M(p,y),console.log()}),[]);var k,M=function(e,t){for(var c=e.clone(),s=[];c.isSameOrBefore(t);)s.push(c.format("YYYY-MM-DD")),c.add(1,"days");f(s),console.log(s)},A=new Object,D=new Object,E=i.a.useState([]),w=Object(s.a)(E,2),C=w[0],Y=w[1];i.a.useEffect((function(){console.log("check effect",e.trainerID),M(p,y),fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?trainerId="+"".concat(e.trainerID)+"&startDate=2021-05-01&endDate=2021-05-08&timeBlock=EarlyBird",{method:"GET",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){Y(e.data),console.log(e.data)}))}),[]),Object.keys(C).map((function(e){A[C[e].slotDate]=C[e].availabileTimes})),Object.keys(A).map((function(e){k=[],A[e].map((function(e){k.push(e.end),k.push(e.start)})),D[e]=k})),console.log(D);var B,I=Object(a.useState)([]),H=Object(s.a)(I,2),L=H[0],T=H[1],R=Object(a.useState)(!1),F=Object(s.a)(R,2),U=F[0],V=F[1],W=Object(a.useState)([]),z=Object(s.a)(W,2),J=(z[0],z[1]);U&&(B=Object(m.jsx)(u.default,{}));var G=[],K=Object(a.useState)([]),P=Object(s.a)(K,2),q=P[0],Q=P[1],X=function(t,c){G=[];var s=D[c];console.log(t,c,s),G.push(t+c);var a,i=n()(t,"hh:mm A").add(30,"minutes").format("hh:mm A"),l=n()("".concat(c," ").concat(t),"YYYY-MM-DD hh:mm").valueOf();if(s.find((function(e){return e===i})))console.log("found",c),G.push(i+c),console.log(G),a=n()("".concat(c," ").concat(t),"YYYY-MM-DD hh:mm").add(60,"minutes").valueOf();else{console.log("not_found");var d=n()(i,"hh:mm A").subtract(60,"minutes").format("hh:mm A");G.push(d+c),console.log(G),a=n()("".concat(c," ").concat(t),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf()}Q(G),console.log(l,"".concat(c," ").concat(t),a),e.parentCallback(l,a,c)};return Object(m.jsxs)("div",{className:"outer_schedular_container",children:[Object(m.jsxs)("div",{className:"schedular_header",children:[Object(m.jsxs)("div",{className:"schedular_buttons",children:[Object(m.jsx)("img",{src:o.default,alt:"back",onClick:function(){_(p.subtract(7,"days")),S(y.subtract(7,"days")),console.log(p.format("DD/MM"),y.format("DD/MM")),M(p,y)}}),Object(m.jsx)("p",{children:"Week Month, 2021"}),Object(m.jsx)("img",{src:j.default,alt:"back",onClick:function(){_(p.add(7,"days")),S(y.add(7,"days")),console.log(p.format("DD/MM"),y.format("DD/MM")),M(p,y)}})]}),Object(m.jsxs)("div",{className:"schedular_dropdown",children:[Object(m.jsxs)("div",{className:"availability_dropdown_outter",children:[Object(m.jsx)("div",{className:"availability_dropdown",children:Object(m.jsxs)("div",{className:"availability",onClick:function(){V(!U),J("Boxing")},children:[Object(m.jsx)("img",{src:r.default,alt:"icon"}),Object(m.jsx)("p",{children:"Early Bird"})]})}),B]}),Object(m.jsx)("div",{className:"time_zone",children:Object(m.jsx)(h.a,{defaultValue:L,onChange:T,options:O,className:"session_location_select"})}),Object(m.jsx)("img",{src:d.default,alt:"icon"})]})]}),Object(m.jsxs)("div",{className:"schedular_table",children:[Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:"schedular_selection",children:[Object(m.jsx)("img",{src:r.default,alt:"icon"}),Object(m.jsx)("h3",{className:"schedular_selection_header",children:"Earlybird"})]})})})}),Object(m.jsxs)("tbody",{className:"schedular_time_display",children:[Object(m.jsx)("tr",{children:Object(m.jsx)("td",{className:"schedular_time",children:"5:00 A.M"})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{className:"schedular_time",children:"6:00 A.M"})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{className:"schedular_time",children:"7.00 A.M"})})]})]}),Object(m.jsxs)("table",{className:"week_selection_table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[0]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"MON"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[1]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"TUE"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[2]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"WED"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[3]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"THU"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[4]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"FRI"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[5]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"SAT"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[6]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"SUN"})]})]})}),Object(m.jsx)("tbody",{children:["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 Am"].map((function(e){return Object(m.jsx)("tr",{children:l.map((function(t){return Object.keys(A).find((function(e){return e===t}))?D[t].find((function(t){return t===e}))?q.find((function(c){return c===e+t}))?Object(m.jsx)("td",{style:{backgroundColor:"#53bfd2 ",border:"2px solid #53bfd2 ",height:"70px"},onClick:function(){X(e,t)}},e+t):Object(m.jsx)("td",{style:{backgroundColor:"#F8F8F8",border:"2px solid #E6E6E6",height:"70px"},onClick:function(){X(e,t)}},e+t):Object(m.jsx)("td",{style:{border:"2px solid #E6E6E6",height:"70px"}},e+t):Object(m.jsx)("td",{},e+t)}))},e)}))})]})]}),Object(m.jsxs)("div",{className:"schedular_slots",children:[Object(m.jsxs)("div",{className:"items_slots",children:[Object(m.jsxs)("div",{className:"item_slot1",children:[Object(m.jsx)("div",{className:"indicator"}),Object(m.jsx)("h5",{children:"AVAILABLE"})]}),Object(m.jsxs)("div",{className:"item_slot2",children:[Object(m.jsx)("div",{className:"indicator2"}),Object(m.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(m.jsxs)("div",{className:"item_slot3",children:[Object(m.jsx)("div",{className:"indicator3"}),Object(m.jsx)("h5",{children:"YOUR SLOT"})," "]})]}),Object(m.jsx)("div",{className:"items_slot_button",children:Object(m.jsxs)("button",{children:["BOOK A SESSION ",Object(m.jsx)(b.default,{})," "]})})]})]})}},303:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/EarlyBird_Active.53ef0601.svg"},304:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/EarlyBird_Inactive.1b9f5507.svg"},305:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/HappyHour_Active.bea5a551.svg"},306:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/HappyHour_Inactive.855505ff.svg"},307:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mid-DayBreak_Inactive.cd4a93ae.svg"},308:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mid_DayBreak_Active.9ab42574.svg"},309:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/NeverTooLate_Active.3ef576c6.svg"},310:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/NeverTooLate_Inactive.ef006801.svg"},311:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Rise_Shine_Active.54b69531.svg"},312:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Rise_Shine_Inactive.2d2d4d98.svg"},352:function(e,t,c){},437:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Left Button.0b9d3a76.svg"},438:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Right Button.648b272c.svg"},439:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Availability Icon.0afc93d8.svg"},440:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Early bird.114f1643.svg"},463:function(e,t,c){},464:function(e,t,c){},545:function(e,t,c){var s,a=(s=c(2))&&"object"==typeof s&&"default"in s?s.default:s;e.exports=function(e){var t=e.src,c=e.hoverSrc,s=e.style,i=e.disabled,l=e.onClick,n=e.className,d=a.useState(t),r=d[0],o=d[1],j=a.useCallback((function(){o(c)}),[]),u=a.useCallback((function(){o(t)}),[]);return a.createElement("img",{src:r,style:s,onMouseOver:j,onMouseOut:u,onClick:function(e){l&&(i||l(e))},className:n})}}}]);
//# sourceMappingURL=3.ca3bc564.chunk.js.map
=======
(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[3,69,102,117,153,156,157,158,159,160,161,162,163,164,165,210,211,212,219],{229:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c(2),i=c.n(a),l=c(551),n=c.n(l),d=c(310),r=c(318),o=c(313),j=c(312),u=c(316),h=c(309),b=c(317),m=c(314),O=c(311),f=c(315),x=(c(358),c(1));t.default=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],l=t[1],v=Object(a.useState)(!1),p=Object(s.a)(v,2),_=p[0],N=p[1],g=Object(a.useState)(!1),y=Object(s.a)(g,2),S=y[0],k=y[1],M=Object(a.useState)(!1),A=Object(s.a)(M,2),D=A[0],E=A[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"box_3_active_home",children:[Object(x.jsxs)("div",{className:"dd_row_one",children:[Object(x.jsx)("div",{className:"option",onClick:function(){l(!c),console.log(c,"boxing")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:d.default,hoverSrc:h.default,onClick:i.a.MouseEventHandler}),Object(x.jsx)("h2",{children:"Early Bird"}),Object(x.jsx)("label",{children:"(5am-7:30am)"})]})}),Object(x.jsx)("div",{className:"option",onClick:function(){N(!_),console.log(_,"pilates")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:r.default,hoverSrc:b.default}),Object(x.jsx)("h2",{children:"Rise & Shine"}),Object(x.jsx)("label",{children:"(8am-11am)"})]})})]}),Object(x.jsxs)("div",{className:"dd_row_two",children:[Object(x.jsx)("div",{className:"option",onClick:function(){E(!D),console.log(D,"hiit")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:o.default,hoverSrc:m.default}),Object(x.jsx)("h2",{children:"Mid-day Break"}),Object(x.jsx)("label",{children:"(11:30am-4pm)"})]})}),Object(x.jsx)("div",{className:"option",onClick:function(){k(!S),console.log(S,"yoga")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:j.default,hoverSrc:O.default}),Object(x.jsx)("h2",{children:"Happy Hour"}),Object(x.jsx)("label",{children:"(4:30pm-7pm)"})]})})]}),Object(x.jsx)("div",{className:"dd_row_two",children:Object(x.jsx)("div",{className:"option",onClick:function(){k(!S),console.log(S,"yoga")},children:Object(x.jsxs)("div",{className:"option_wapper",children:[Object(x.jsx)(n.a,{src:u.default,hoverSrc:f.default}),Object(x.jsx)("h2",{children:"Never Too Late"}),Object(x.jsx)("label",{children:"(7:30pm-9:30pm)"})]})})})]})})}},245:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c(2),i=c.n(a),l=c(49),n=c.n(l),d=(c(469),c(470),c(445)),r=c(446),o=c(443),j=c(444),u=c(229),h=c(118),b=c(16),m=c(1),O=[{value:"nyw",label:"New York"},{value:"maimi",label:"Maimi"},{value:"hampton",label:"Hampton"},{value:"plam",label:"Plam Beach"}];t.default=function(e){var t=i.a.useState([]),c=Object(s.a)(t,2),l=c[0],f=c[1],x=i.a.useState(n()().startOf("isoWeek")),v=Object(s.a)(x,2),p=v[0],_=v[1],N=i.a.useState(n()().endOf("isoWeek")),g=Object(s.a)(N,2),y=g[0],S=g[1];i.a.useEffect((function(){n()("02:00 AM","hh:mm A").add(30,"minutes").format("hh:mm A");M(p,y),console.log()}),[]);var k,M=function(e,t){for(var c=e.clone(),s=[];c.isSameOrBefore(t);)s.push(c.format("YYYY-MM-DD")),c.add(1,"days");f(s),console.log(s)},A=new Object,D=new Object,E=i.a.useState([]),w=Object(s.a)(E,2),C=w[0],Y=w[1];i.a.useEffect((function(){console.log("check effect",e.trainerID),M(p,y),fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?trainerId="+"".concat(e.trainerID)+"&startDate=2021-05-01&endDate=2021-05-08&timeBlock=EarlyBird",{method:"GET",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){Y(e.data),console.log(e.data)}))}),[]),Object.keys(C).map((function(e){A[C[e].slotDate]=C[e].availabileTimes})),Object.keys(A).map((function(e){k=[],A[e].map((function(e){k.push(e.end),k.push(e.start)})),D[e]=k})),console.log(D);var B,I=Object(a.useState)([]),H=Object(s.a)(I,2),L=H[0],T=H[1],R=Object(a.useState)(!1),F=Object(s.a)(R,2),U=F[0],V=F[1],W=Object(a.useState)([]),z=Object(s.a)(W,2),J=(z[0],z[1]);U&&(B=Object(m.jsx)(u.default,{}));var G=[],K=Object(a.useState)([]),P=Object(s.a)(K,2),q=P[0],Q=P[1],X=function(t,c){G=[];var s=D[c];console.log(t,c,s),G.push(t+c);var a,i=n()(t,"hh:mm A").add(30,"minutes").format("hh:mm A"),l=n()("".concat(c," ").concat(t),"YYYY-MM-DD hh:mm").valueOf();if(s.find((function(e){return e===i})))console.log("found",c),G.push(i+c),console.log(G),a=n()("".concat(c," ").concat(t),"YYYY-MM-DD hh:mm").add(60,"minutes").valueOf();else{console.log("not_found");var d=n()(i,"hh:mm A").subtract(60,"minutes").format("hh:mm A");G.push(d+c),console.log(G),a=n()("".concat(c," ").concat(t),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf()}Q(G),console.log(l,"".concat(c," ").concat(t),a),e.parentCallback(l,a,c)};return Object(m.jsxs)("div",{className:"outer_schedular_container",children:[Object(m.jsxs)("div",{className:"schedular_header",children:[Object(m.jsxs)("div",{className:"schedular_buttons",children:[Object(m.jsx)("img",{src:o.default,alt:"back",onClick:function(){_(p.subtract(7,"days")),S(y.subtract(7,"days")),console.log(p.format("DD/MM"),y.format("DD/MM")),M(p,y)}}),Object(m.jsx)("p",{children:"Week Month, 2021"}),Object(m.jsx)("img",{src:j.default,alt:"back",onClick:function(){_(p.add(7,"days")),S(y.add(7,"days")),console.log(p.format("DD/MM"),y.format("DD/MM")),M(p,y)}})]}),Object(m.jsxs)("div",{className:"schedular_dropdown",children:[Object(m.jsxs)("div",{className:"availability_dropdown_outter",children:[Object(m.jsx)("div",{className:"availability_dropdown",children:Object(m.jsxs)("div",{className:"availability",onClick:function(){V(!U),J("Boxing")},children:[Object(m.jsx)("img",{src:r.default,alt:"icon"}),Object(m.jsx)("p",{children:"Early Bird"})]})}),B]}),Object(m.jsx)("div",{className:"time_zone",children:Object(m.jsx)(h.a,{defaultValue:L,onChange:T,options:O,className:"session_location_select"})}),Object(m.jsx)("img",{src:d.default,alt:"icon"})]})]}),Object(m.jsxs)("div",{className:"schedular_table",children:[Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:"schedular_selection",children:[Object(m.jsx)("img",{src:r.default,alt:"icon"}),Object(m.jsx)("h3",{className:"schedular_selection_header",children:"Earlybird"})]})})})}),Object(m.jsxs)("tbody",{className:"schedular_time_display",children:[Object(m.jsx)("tr",{children:Object(m.jsx)("td",{className:"schedular_time",children:"5:00 A.M"})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{className:"schedular_time",children:"6:00 A.M"})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{className:"schedular_time",children:"7.00 A.M"})})]})]}),Object(m.jsxs)("table",{className:"week_selection_table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[0]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"MON"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[1]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"TUE"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[2]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"WED"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[3]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"THU"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[4]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"FRI"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[5]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"SAT"})]}),Object(m.jsxs)("th",{children:[Object(m.jsx)("div",{className:"scheduler_date",children:String(l[6]).slice(8,10)}),Object(m.jsx)("div",{className:"schedular_day",children:"SUN"})]})]})}),Object(m.jsx)("tbody",{children:["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 Am"].map((function(e){return Object(m.jsx)("tr",{children:l.map((function(t){return Object.keys(A).find((function(e){return e===t}))?D[t].find((function(t){return t===e}))?q.find((function(c){return c===e+t}))?Object(m.jsx)("td",{style:{backgroundColor:"#53bfd2 ",border:"2px solid #53bfd2 ",height:"70px"},onClick:function(){X(e,t)}},e+t):Object(m.jsx)("td",{style:{backgroundColor:"#F8F8F8",border:"2px solid #E6E6E6",height:"70px"},onClick:function(){X(e,t)}},e+t):Object(m.jsx)("td",{style:{border:"2px solid #E6E6E6",height:"70px"}},e+t):Object(m.jsx)("td",{},e+t)}))},e)}))})]})]}),Object(m.jsxs)("div",{className:"schedular_slots",children:[Object(m.jsxs)("div",{className:"items_slots",children:[Object(m.jsxs)("div",{className:"item_slot1",children:[Object(m.jsx)("div",{className:"indicator"}),Object(m.jsx)("h5",{children:"AVAILABLE"})]}),Object(m.jsxs)("div",{className:"item_slot2",children:[Object(m.jsx)("div",{className:"indicator2"}),Object(m.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(m.jsxs)("div",{className:"item_slot3",children:[Object(m.jsx)("div",{className:"indicator3"}),Object(m.jsx)("h5",{children:"YOUR SLOT"})," "]})]}),Object(m.jsx)("div",{className:"items_slot_button",children:Object(m.jsxs)("button",{children:["BOOK A SESSION ",Object(m.jsx)(b.default,{})," "]})})]})]})}},309:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/EarlyBird_Active.53ef0601.svg"},310:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/EarlyBird_Inactive.1b9f5507.svg"},311:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/HappyHour_Active.bea5a551.svg"},312:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/HappyHour_Inactive.855505ff.svg"},313:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mid-DayBreak_Inactive.cd4a93ae.svg"},314:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mid_DayBreak_Active.9ab42574.svg"},315:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/NeverTooLate_Active.3ef576c6.svg"},316:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/NeverTooLate_Inactive.ef006801.svg"},317:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Rise_Shine_Active.54b69531.svg"},318:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Rise_Shine_Inactive.2d2d4d98.svg"},358:function(e,t,c){},443:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Left Button.0b9d3a76.svg"},444:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Right Button.648b272c.svg"},445:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Availability Icon.0afc93d8.svg"},446:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Early bird.114f1643.svg"},469:function(e,t,c){},470:function(e,t,c){},551:function(e,t,c){var s,a=(s=c(2))&&"object"==typeof s&&"default"in s?s.default:s;e.exports=function(e){var t=e.src,c=e.hoverSrc,s=e.style,i=e.disabled,l=e.onClick,n=e.className,d=a.useState(t),r=d[0],o=d[1],j=a.useCallback((function(){o(c)}),[]),u=a.useCallback((function(){o(t)}),[]);return a.createElement("img",{src:r,style:s,onMouseOver:j,onMouseOut:u,onClick:function(e){l&&(i||l(e))},className:n})}}}]);
//# sourceMappingURL=3.8128adfb.chunk.js.map
>>>>>>> c8cee4c44ed4aa251dea3ace2c1aa72f82b18d8c:build/static/js/3.8128adfb.chunk.js
