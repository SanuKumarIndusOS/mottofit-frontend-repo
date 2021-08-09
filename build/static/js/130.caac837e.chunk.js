(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[130,260,340,341,365,366,367,368,369],{309:function(e,t,a){"use strict";a.r(t);var n=a(92),c=a(11),i=a(2),r=a.n(i),s=a(242),d=a.n(s),l=a(37),u=a.n(l),o=a(452),b=a(453),f=(a(845),a(518),a(468)),j=a(472),m=a(470),h=a(469),O=a(471),v=a(40),M=a(27),x=a(23),y=(a(93),a(66)),p=a(1),_=[{label:"EARLY BIRD (5AM-8AM)",value:"EarlyBird"},{label:"RISE & SHINE (8AM-11AM)",value:"RiseAndShine"},{label:"MID-DAY BREAK (11:30AM-2PM)",value:"MidDayBreak1"},{label:"MID-DAY LUNCHTIME (2AM-5PM)",value:"MidDayBreak2"},{label:"HAPPY HOUR (5PM-8PM)",value:"HappyHours"},{label:"NEVER TOO LATE (8PM-11PM)",value:"NeverTooLate"}];var k=Object(M.b)((function(e){return{queryObject:e.trainerReducer.query}}),(function(e){return Object(x.b)({getCalenderDetails:v.getCalenderDetails,updateTrainerDetails:y.updateTrainerDetails},e)}))((function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",f.default],a=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",j.default],s=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",m.default],l=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",m.default],v=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",h.default],M=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],x=r.a.useState(t),y=Object(c.a)(x,2),k=y[0],g=y[1],D=r.a.useState("EarlyBird"),Y=Object(c.a)(D,2),A=Y[0],N=Y[1],C=r.a.useState([]),P=Object(c.a)(C,2),T=P[0],E=P[1],S=r.a.useState([]),B=Object(c.a)(S,2),H=(B[0],B[1]),R=r.a.useState([]),w=Object(c.a)(R,2),q=w[0],I=w[1],L=r.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),U=Object(c.a)(L,2),W=U[0],z=(U[1],r.a.useState([])),F=Object(c.a)(z,2),J=F[0],K=F[1],V=r.a.useState(d()().startOf("isoWeek")),G=Object(c.a)(V,2),Q=G[0],X=G[1],Z=r.a.useState(d()().endOf("isoWeek")),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=new Object,ne=new Object,ce=r.a.useState([]),ie=Object(c.a)(ce,2),re=ie[0],se=ie[1],de=r.a.useState(),le=Object(c.a)(de,2),ue=le[0],oe=le[1],be=r.a.useState(),fe=Object(c.a)(be,2),je=fe[0],me=fe[1];Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.useEffect)((function(){var t;2===(null===e||void 0===e||null===(t=e.selectedTimes)||void 0===t?void 0:t.length)&&I(e.selectedTimes)}),[e.selectedTimes]),Object(i.useEffect)((function(){H([]),Me(Q,ee),he(Q,ee)}),[k]),Object(i.useEffect)((function(){var e;Object.keys(re).map((function(e){ae[re[e].slotDate]=re[e].availabileTimes})),Object.keys(ae).map((function(t){e=[],ae[t].map((function(t){var a=u.a.tz(t.startTime,"America/New_York"),n=u()().tz("America/New_York");a.isBefore(n,"minutes")||e.push(t.start)})),ne[t]=e})),oe(ne),me(Object.keys(ne))}),[re]),Object(i.useEffect)((function(){E([]),k.map((function(e){var t=[];J.map((function(a){t.push({date:a,time:e})})),E((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[J]),Object(i.useEffect)((function(){H([]),W.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),H((function(e){return[].concat(Object(n.a)(e),[a])})))}))}),[W]);var he=function(e,t){E([]);for(var a=e.clone(),c=[];a.isSameOrBefore(t);)c.push(a.format("YYYY-MM-DD")),a.add(1,"days");K(c),0===T.length&&k.map((function(e){var t=[];c.map((function(a){t.push({date:a,time:e})})),E((function(e){return[].concat(Object(n.a)(e),[t])}))}))};function Oe(t,a){var n=[],c=ue[t];n.push(a+t);var i,r=d()(a,"hh:mm A").add(30,"minutes").format("hh:mm A"),s=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm A").valueOf();if(c.find((function(e){return e===r}))){n.push(r+t),i=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm A").add(60,"minutes").valueOf();var l={selectedTimes:n};(null===e||void 0===e?void 0:e.updateUserDetails)&&(null===e||void 0===e||e.updateUserDetails(l)),e.parentCallback(s,i,t)}else{var u=d()(r,"hh:mm A").subtract(60,"minutes").format("hh:mm A");n.push(u+t),i=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),s=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf();var o={selectedTimes:n};e.updateUserDetails(o),e.parentCallback(i,s,t)}I(n)}Object(i.useEffect)((function(){he(Q,ee)}),[q]);var ve,Me=function(t,a){var n=t.format("YYYY-MM-DD"),c=a.format("YYYY-MM-DD");e.id&&e.getCalenderDetails(e.id,n,c,A).then((function(e){var t=e.data;se(t)}))};return Object(i.useEffect)((function(){var n,c,i=null===(n=e.queryObject)||void 0===n||null===(c=n.availability)||void 0===c?void 0:c.value,r={};if(i&&A!==i){switch(N(i),i){case"EarlyBird":g(t);break;case"RiseAndShine":g(a);break;case"MidDayBreak1":g(s);break;case"MidDayBreak2":g(l);break;case"HappyHours":g(v);break;case"NeverTooLate":g(M);break;default:g(t)}r=_.filter((function(e){return e.value===i}))[0]}else r=_.filter((function(e){return"EarlyBird"===e.value}))[0];var d={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:r,city:e.queryObject.city}};e.updateTrainerDetails(d)}),[]),0===T.length||(ve=Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsxs)("th",{style:{height:"70px"},children:[Object(p.jsx)("img",{src:k[7],style:{width:"30px",height:"30px"}}),Object(p.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",k[6]]})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[0].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[1].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[2].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[3].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"THU"})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[4].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[5].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(p.jsxs)("th",{children:[Object(p.jsx)("div",{className:"table_header_number",children:J[6].slice(8,10)}),Object(p.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"user_time_slot",children:k[0]}),T[0].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?q.find((function(t){return t===e.time+e.date}))?Object(p.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(p.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{})}))]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"user_time_slot",children:k[1]}),T[1].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?q.find((function(t){return t===e.time+e.date}))?Object(p.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot"}):Object(p.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{})}))]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"user_time_slot",children:k[2]}),T[2].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?q.find((function(t){return t===e.time+e.date}))?Object(p.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{})}))]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"user_time_slot",children:k[3]}),T[3].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?q.find((function(t){return t===e.time+e.date}))?Object(p.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{})}))]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"user_time_slot",children:k[4]}),T[4].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?q.find((function(t){return t===e.time+e.date}))?Object(p.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{})}))]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"user_time_slot",children:k[5]}),T[5].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?q.find((function(t){return t===e.time+e.date}))?Object(p.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(p.jsx)("td",{})}))]})]})]})),Object(p.jsxs)("div",{className:"outter_table_user",children:[Object(p.jsx)("div",{className:"table_user",children:Object(p.jsxs)("div",{className:"table_inner_trainer",children:[Object(p.jsxs)("div",{className:"table_date",children:[d()(Q.format("YYYY-MM-DD")).isAfter(d()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:o.default,onClick:function(){X(Q.subtract(7,"days")),te(ee.subtract(7,"days")),Me(Q,ee),he(Q,ee)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("img",{src:o.default,disabled:!0,style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(p.jsxs)("div",{className:"date_week",children:[Q.format("DD")," - ",ee.format("DD")," \u2002",Q.format("MMMM")," \u2002 ",Q.format("yyyy")," "]}),Object(p.jsx)("img",{src:b.default,onClick:function(){X(Q.add(7,"days")),te(ee.add(7,"days")),Me(Q,ee),he(Q,ee)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(p.jsx)("select",{value:A,name:"TimeSlot",onChange:function(n){var c=n.target.value;N(c),"EarlyBird"===c&&g(t),"RiseAndShine"===c&&g(a),"MidDayBreak1"===c&&g(s),"MidDayBreak2"===c&&g(l),"HappyHours"===c&&g(v),"NeverTooLate"===c&&g(M);var i=_.filter((function(e){return e.value===c}))[0],r={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:i}};e.updateTrainerDetails(r)},children:_.map((function(e,t){return Object(p.jsx)("option",{value:e.value,children:e.label},t)}))})]})}),Object(p.jsx)("br",{}),ve]})}));t.default=k},452:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},453:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},468:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},469:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},470:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},471:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},472:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},518:function(e,t,a){}}]);