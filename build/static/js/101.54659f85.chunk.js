(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[101,82,203,276,277],{221:function(e,t,n){"use strict";n.r(t);var a=n(569),c=n(10),r=n(2),s=n.n(r),i=n(32),d=n.n(i),o=n(327),l=n(328),u=n(37),j=(n(372),n(13)),b=n(1);var f=function(){return Object(b.jsx)("div",{className:"schedular_slots",children:Object(b.jsxs)("div",{className:"items_slots",children:[Object(b.jsxs)("div",{className:"item_slot1",children:[Object(b.jsx)("div",{className:"indicator"}),Object(b.jsx)("h5",{children:"AVAILABLE"})]}),Object(b.jsxs)("div",{className:"item_slot2",children:[Object(b.jsx)("div",{className:"indicator2"}),Object(b.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(b.jsxs)("div",{className:"item_slot3",children:[Object(b.jsx)("div",{className:"indicator3"}),Object(b.jsx)("h5",{children:"BOOKED SLOT"})," "]}),Object(b.jsxs)("div",{className:"item_slot4",children:[Object(b.jsxs)("button",{onClick:function(){j.history.push("/user/session-type")},children:["BOOK a session ",Object(b.jsx)(u.default,{})," "]})," "]})]})})};t.default=function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM"],n=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM"],r=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM"],i=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM"],u=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM"],j=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM"],m=s.a.useState(t),h=Object(c.a)(m,2),O=h[0],x=h[1],v=s.a.useState("EarlyBird"),M=Object(c.a)(v,2),p=M[0],y=M[1],_=s.a.useState([]),k=Object(c.a)(_,2),N=k[0],g=k[1],Y=s.a.useState([]),A=Object(c.a)(Y,2),D=(A[0],A[1]),C=s.a.useState([]),S=Object(c.a)(C,2),P=S[0],E=S[1],B=s.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),T=Object(c.a)(B,2),w=T[0],L=(T[1],s.a.useState([])),H=Object(c.a)(L,2),I=H[0],R=H[1],U=s.a.useState(d()().startOf("isoWeek")),W=Object(c.a)(U,2),V=W[0],J=W[1],K=s.a.useState(d()().endOf("isoWeek")),z=Object(c.a)(K,2),F=z[0],G=z[1],q=localStorage.getItem("token"),Q=new Object,X=new Object,Z=s.a.useState([]),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ne=s.a.useState(),ae=Object(c.a)(ne,2),ce=ae[0],re=ae[1],se=s.a.useState(),ie=Object(c.a)(se,2),de=ie[0],oe=ie[1];s.a.useEffect((function(){be(V,F),le(V,F)}),[]),s.a.useEffect((function(){D([]),be(V,F),le(V,F)}),[O]),s.a.useEffect((function(){var e;Object.keys(ee).map((function(e){Q[ee[e].slotDate]=ee[e].availabileTimes})),Object.keys(Q).map((function(t){e=[],Q[t].map((function(t){e.push(t.start)})),X[t]=e})),re(X),oe(Object.keys(X))}),[ee]),s.a.useEffect((function(){g([]),O.map((function(e){var t=[];I.map((function(n){t.push({date:n,time:e})})),g((function(e){return[].concat(Object(a.a)(e),[t])}))}))}),[I]),s.a.useEffect((function(){D([]),w.map((function(e,t){var n=[];0!==t&&(e.map((function(e,t){!0===e&&n.push(t-1)})),D((function(e){return[].concat(Object(a.a)(e),[n])})))}))}),[w]),s.a.useEffect((function(){}),[V]);var le=function(e,t){g([]);for(var n=e.clone(),c=[];n.isSameOrBefore(t);)c.push(n.format("YYYY-MM-DD")),n.add(1,"days");R(c),0===N.length&&O.map((function(e){var t=[];c.map((function(n){t.push({date:n,time:e})})),g((function(e){return[].concat(Object(a.a)(e),[t])}))}))};function ue(t,n){var a=[],c=ce[t];a.push(n+t);var r,s=d()(n,"hh:mm A").add(30,"minutes").format("hh:mm A"),i=d()("".concat(t," ").concat(n),"YYYY-MM-DD hh:mm").valueOf();if(c.find((function(e){return e===s})))a.push(s+t),r=d()("".concat(t," ").concat(n),"YYYY-MM-DD hh:mm").add(60,"minutes").valueOf(),e.parentCallback(i,r,t);else{var o=d()(s,"hh:mm A").subtract(60,"minutes").format("hh:mm A");a.push(o+t),r=d()("".concat(t," ").concat(n),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),i=d()("".concat(t," ").concat(n),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf(),e.parentCallback(r,i,t)}E(a)}s.a.useEffect((function(){le(V,F)}),[P]);var je,be=function(t,n){var a=t.format("YYYY-MM-DD"),c=n.format("YYYY-MM-DD");fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?trainerId="+e.id+"&startDate="+a+"&endDate="+c+"&timeBlock="+p,{method:"GET",headers:{"Content-Type":"application/json",Authorization:q}}).then((function(e){return e.json()})).then((function(e){te(e.data)}))};return 0===N.length||(je=Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[0].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[1].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[2].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[3].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[4].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[5].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("div",{className:"table_header_number",children:I[6].slice(8,10)}),Object(b.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"user_time_slot",children:O[0]}),N[0].map((function(e){return 0!==de.length&&de.find((function(t){return t===e.date}))&&ce[e.date].find((function(t){return t===e.time}))?P.find((function(t){return t===e.time+e.date}))?Object(b.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return ue(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(b.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{})}))]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"user_time_slot",children:O[1]}),N[1].map((function(e){return 0!==de.length&&de.find((function(t){return t===e.date}))&&ce[e.date].find((function(t){return t===e.time}))?P.find((function(t){return t===e.time+e.date}))?Object(b.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return ue(e.date,e.time)},className:"avaiable_slot"}):Object(b.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{})}))]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"user_time_slot",children:O[2]}),N[2].map((function(e){return 0!==de.length&&de.find((function(t){return t===e.date}))&&ce[e.date].find((function(t){return t===e.time}))?P.find((function(t){return t===e.time+e.date}))?Object(b.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{})}))]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"user_time_slot",children:O[3]}),N[3].map((function(e){return 0!==de.length&&de.find((function(t){return t===e.date}))&&ce[e.date].find((function(t){return t===e.time}))?P.find((function(t){return t===e.time+e.date}))?Object(b.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{})}))]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"user_time_slot",children:O[4]}),N[4].map((function(e){return 0!==de.length&&de.find((function(t){return t===e.date}))&&ce[e.date].find((function(t){return t===e.time}))?P.find((function(t){return t===e.time+e.date}))?Object(b.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{})}))]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"user_time_slot",children:O[5]}),N[5].map((function(e){return 0!==de.length&&de.find((function(t){return t===e.date}))&&ce[e.date].find((function(t){return t===e.time}))?P.find((function(t){return t===e.time+e.date}))?Object(b.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return ue(e.date,e.time)}}):Object(b.jsx)("td",{})}))]})]})]})),Object(b.jsxs)("div",{className:"outter_table_user",children:[Object(b.jsx)("div",{className:"table_user",children:Object(b.jsxs)("div",{className:"table_inner_trainer",children:[Object(b.jsxs)("div",{className:"table_date",children:[d()(V.format("YYYY-MM-DD")).isAfter(d()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:o.default,onClick:function(){J(V.subtract(7,"days")),G(F.subtract(7,"days")),be(V,F),le(V,F)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:o.default,disabled:"true",style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(b.jsxs)("div",{className:"date_week",children:[V.format("DD")," - ",F.format("DD")," ","\u2002",V.format("MMMM")," \u2002"," ",V.format("yyyy")," "]}),Object(b.jsx)("img",{src:l.default,onClick:function(){J(V.add(7,"days")),G(F.add(7,"days")),be(V,F),le(V,F)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(b.jsxs)("select",{value:p,onChange:function(e){y(e.target.value),"EarlyBird"===e.target.value&&x(t),"RiseAndShine"===e.target.value&&x(n),"MidDayBreak1"===e.target.value&&x(r),"MidDayBreak2"===e.target.value&&x(i),"HappyHours"===e.target.value&&x(u),"NeverTooLate"===e.target.value&&x(j)},children:[Object(b.jsx)("option",{value:"EarlyBird",children:"Early Bird"}),Object(b.jsx)("option",{value:"RiseAndShine",children:"Rise & Shine"}),Object(b.jsx)("option",{value:"MidDayBreak1",children:"Mid-Day Break"}),Object(b.jsx)("option",{value:"MidDayBreak2",children:"Mid-Day AfterNoon"}),Object(b.jsx)("option",{value:"HappyHours",children:"Happy Hour"}),Object(b.jsx)("option",{value:"NeverTooLate",children:"Never Too Late"})]})]})}),Object(b.jsx)("br",{}),je,Object(b.jsx)(f,{})]})}},327:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Left Button.0b9d3a76.svg"},328:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Right Button.648b272c.svg"},372:function(e,t,n){},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(98);var c=n(70);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=101.54659f85.chunk.js.map