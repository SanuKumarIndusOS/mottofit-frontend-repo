(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[109,225,302,303,327,328,329,330,331],{241:function(e,t,a){"use strict";a.r(t);var n=a(195),c=a(12),i=a(2),s=a.n(i),r=a(196),d=a.n(r),l=a(359),u=a(360),o=a(691),f=(a(428),a(376)),b=a(380),j=a(378),m=a(377),h=a(379),O=a(73),v=a(37),x=a(26),M=(a(72),a(1)),p=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var y=Object(v.b)((function(e){return{queryQbject:e.trainerReducer.query}}),(function(e){return Object(x.b)({getCalenderDetails:O.getCalenderDetails},e)}))((function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",f.default],a=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",b.default],r=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",j.default],O=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",j.default],v=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",m.default],x=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",h.default],y=s.a.useState(t),_=Object(c.a)(y,2),g=_[0],k=_[1],D=s.a.useState("EarlyBird"),Y=Object(c.a)(D,2),N=Y[0],C=Y[1],S=s.a.useState([]),A=Object(c.a)(S,2),P=A[0],B=A[1],T=s.a.useState([]),E=Object(c.a)(T,2),w=(E[0],E[1]),H=s.a.useState([]),R=Object(c.a)(H,2),L=R[0],I=R[1],U=s.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),W=Object(c.a)(U,2),q=W[0],F=(W[1],s.a.useState([])),J=Object(c.a)(F,2),Q=J[0],Z=J[1],z=s.a.useState(d()().startOf("isoWeek")),G=Object(c.a)(z,2),K=G[0],V=G[1],X=s.a.useState(d()().endOf("isoWeek")),$=Object(c.a)(X,2),ee=$[0],te=$[1],ae=new Object,ne=new Object,ce=s.a.useState([]),ie=Object(c.a)(ce,2),se=ie[0],re=ie[1],de=s.a.useState(),le=Object(c.a)(de,2),ue=le[0],oe=le[1],fe=s.a.useState(),be=Object(c.a)(fe,2),je=be[0],me=be[1];Object(i.useEffect)((function(){xe(K,ee),he(K,ee),window.scrollTo(0,0)}),[]),Object(i.useEffect)((function(){var t;2===(null===e||void 0===e||null===(t=e.selectedTimes)||void 0===t?void 0:t.length)&&I(e.selectedTimes)}),[e.selectedTimes]),Object(i.useEffect)((function(){w([]),xe(K,ee),he(K,ee)}),[g]),Object(i.useEffect)((function(){var e;Object.keys(se).map((function(e){ae[se[e].slotDate]=se[e].availabileTimes})),Object.keys(ae).map((function(t){e=[],ae[t].map((function(t){e.push(t.start)})),ne[t]=e})),oe(ne),me(Object.keys(ne))}),[se]),Object(i.useEffect)((function(){B([]),g.map((function(e){var t=[];Q.map((function(a){t.push({date:a,time:e})})),B((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[Q]),Object(i.useEffect)((function(){w([]),q.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),w((function(e){return[].concat(Object(n.a)(e),[a])})))}))}),[q]);var he=function(e,t){B([]);for(var a=e.clone(),c=[];a.isSameOrBefore(t);)c.push(a.format("YYYY-MM-DD")),a.add(1,"days");Z(c),0===P.length&&g.map((function(e){var t=[];c.map((function(a){t.push({date:a,time:e})})),B((function(e){return[].concat(Object(n.a)(e),[t])}))}))};function Oe(t,a){var n=[],c=ue[t];n.push(a+t);var i,s=d()(a,"hh:mm A").add(30,"minutes").format("hh:mm A"),r=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").valueOf();if(c.find((function(e){return e===s}))){n.push(s+t),i=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(60,"minutes").valueOf(),console.log(n,"cellCollection1");var l={selectedTimes:n};(null===e||void 0===e?void 0:e.updateUserDetails)&&(null===e||void 0===e||e.updateUserDetails(l)),e.parentCallback(r,i,t)}else{var u=d()(s,"hh:mm A").subtract(60,"minutes").format("hh:mm A");n.push(u+t),i=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),r=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf(),console.log(n,"cellCollection1");var o={selectedTimes:n};e.updateUserDetails(o),e.parentCallback(i,r,t)}I(n)}Object(i.useEffect)((function(){he(K,ee)}),[L]);var ve,xe=function(t,a){var n=t.format("YYYY-MM-DD"),c=a.format("YYYY-MM-DD");e.id&&e.getCalenderDetails(e.id,n,c,N).then((function(e){var t=e.data;re(t)}))};return 0===P.length||(ve=Object(M.jsxs)("table",{children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsxs)("th",{style:{height:"70px"},children:[Object(M.jsx)("img",{src:g[7],style:{width:"30px",height:"30px"}}),Object(M.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",g[6]]})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[0].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[1].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[2].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[3].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[4].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[5].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:Q[6].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:g[0]}),P[0].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:g[1]}),P[1].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot"}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:g[2]}),P[2].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:g[3]}),P[3].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:g[4]}),P[4].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:g[5]}),P[5].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]})]})]})),Object(M.jsxs)("div",{className:"outter_table_user",children:[Object(M.jsx)("div",{className:"table_user",children:Object(M.jsxs)("div",{className:"table_inner_trainer",children:[Object(M.jsxs)("div",{className:"table_date",children:[d()(K.format("YYYY-MM-DD")).isAfter(d()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:l.default,onClick:function(){V(K.subtract(7,"days")),te(ee.subtract(7,"days")),xe(K,ee),he(K,ee)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:l.default,disabled:"true",style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(M.jsxs)("div",{className:"date_week",children:[K.format("DD")," - ",ee.format("DD")," \u2002",K.format("MMMM")," \u2002 ",K.format("yyyy")," "]}),Object(M.jsx)("img",{src:u.default,onClick:function(){V(K.add(7,"days")),te(ee.add(7,"days")),xe(K,ee),he(K,ee)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(M.jsx)(o.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:p,value:N,onChange:function(e){C(e.value),"EarlyBird"===e.value&&k(t),"RiseAndShine"===e.value&&k(a),"MidDayBreak1"===e.value&&k(r),"MidDayBreak2"===e.value&&k(O),"HappyHours"===e.value&&k(v),"NeverTooLate"===e.value&&k(x)},name:"TimeSlot"})]})}),Object(M.jsx)("br",{}),ve]})}));t.default=y},359:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},360:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},376:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},377:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},378:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},379:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},380:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},428:function(e,t,a){}}]);
//# sourceMappingURL=109.c98404c9.chunk.js.map