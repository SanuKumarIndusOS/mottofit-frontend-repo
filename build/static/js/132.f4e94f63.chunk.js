(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[132,277,357,358,382,383,384,385,386],{349:function(e,t,a){"use strict";a.r(t);var n=a(109),i=a(11),c=a(2),r=a.n(c),s=a(268),l=a.n(s),u=a(40),d=a.n(u),o=a(482),b=a(483),f=(a(868),a(553),a(499)),j=a(503),m=a(501),h=a(500),O=a(502),v=a(43),x=a(30),M=a(25),y=(a(111),a(77)),p=a(113),k=a(1),g=[{label:"EARLY BIRD (5AM-8AM)",value:"EarlyBird"},{label:"RISE & SHINE (8AM-11AM)",value:"RiseAndShine"},{label:"LUNCHTIME (11:30AM-2PM)",value:"MidDayBreak1"},{label:"MID-DAY BREAK (2AM-5PM)",value:"MidDayBreak2"},{label:"HAPPY HOUR (5PM-8PM)",value:"HappyHours"},{label:"NEVER TOO LATE (8PM-11PM)",value:"NeverTooLate"}];var _=Object(x.b)((function(e){return{queryObject:e.trainerReducer.query}}),(function(e){return Object(M.b)({getCalenderDetails:v.getCalenderDetails,updateTrainerDetails:y.updateTrainerDetails,getTrainerDetail:p.getTrainerDetail},e)}))((function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",f.default],a=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",j.default],s=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",m.default],u=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",m.default],v=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",h.default],x=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],M=r.a.useState(t),y=Object(i.a)(M,2),p=y[0],_=y[1],D=r.a.useState("EarlyBird"),Y=Object(i.a)(D,2),N=Y[0],A=Y[1],C=r.a.useState([]),P=Object(i.a)(C,2),T=P[0],E=P[1],S=r.a.useState([]),B=Object(i.a)(S,2),w=(B[0],B[1]),q=r.a.useState([]),H=Object(i.a)(q,2),R=H[0],I=H[1],L=r.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),U=Object(i.a)(L,2),W=U[0],z=(U[1],r.a.useState([])),F=Object(i.a)(z,2),J=F[0],K=F[1],V=r.a.useState(l()().startOf("isoWeek")),G=Object(i.a)(V,2),Q=G[0],X=G[1],Z=r.a.useState(l()().endOf("isoWeek")),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=new Object,ne=new Object,ie=r.a.useState([]),ce=Object(i.a)(ie,2),re=ce[0],se=ce[1],le=r.a.useState(),ue=Object(i.a)(le,2),de=ue[0],oe=ue[1],be=r.a.useState(),fe=Object(i.a)(be,2),je=fe[0],me=fe[1];Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.useEffect)((function(){var t;2===(null===e||void 0===e||null===(t=e.selectedTimes)||void 0===t?void 0:t.length)&&I(e.selectedTimes)}),[e.selectedTimes]),Object(c.useEffect)((function(){w([]),xe(Q,ee),he(Q,ee)}),[p]),Object(c.useEffect)((function(){var e;Object.keys(re).map((function(e){ae[re[e].slotDate]=re[e].availabileTimes})),Object.keys(ae).map((function(t){e=[],ae[t].map((function(t){var a=d.a.tz(t.startTime,"America/New_York"),n=d()().tz("America/New_York");a.isBefore(n,"minutes")||e.push(t.start)})),ne[t]=e})),oe(ne),me(Object.keys(ne))}),[re]),Object(c.useEffect)((function(){E([]),p.map((function(e){var t=[];J.map((function(a){t.push({date:a,time:e})})),E((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[J]),Object(c.useEffect)((function(){w([]),W.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),w((function(e){return[].concat(Object(n.a)(e),[a])})))}))}),[W]);var he=function(e,t){E([]);for(var a=e.clone(),i=[];a.isSameOrBefore(t);)i.push(a.format("YYYY-MM-DD")),a.add(1,"days");K(i),0===T.length&&p.map((function(e){var t=[];i.map((function(a){t.push({date:a,time:e})})),E((function(e){return[].concat(Object(n.a)(e),[t])}))}))};function Oe(t,a){var n=[],i=de[t];n.push(a+t);var c,r=l()(a,"hh:mm A").add(30,"minutes").format("hh:mm A"),s=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm A").valueOf();if(i.find((function(e){return e===r}))){n.push(r+t),c=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm A").add(60,"minutes").valueOf();var u={selectedTimes:n};(null===e||void 0===e?void 0:e.updateUserDetails)&&(null===e||void 0===e||e.updateUserDetails(u)),e.parentCallback(s,c,t)}else{var d=l()(r,"hh:mm A").subtract(60,"minutes").format("hh:mm A");n.push(d+t),c=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),s=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf();var o={selectedTimes:n};e.updateUserDetails(o),e.parentCallback(c,s,t)}I(n)}Object(c.useEffect)((function(){he(Q,ee)}),[R]);var ve,xe=function(t,a){var n=t.format("YYYY-MM-DD"),i=a.format("YYYY-MM-DD");e.id&&e.getCalenderDetails(e.id,n,i,N).then((function(e){var t=e.data;se(t)}))};return Object(c.useEffect)((function(){var n,i,c=null===(n=e.queryObject)||void 0===n||null===(i=n.availability)||void 0===i?void 0:i.value,r={};if(c&&N!==c){switch(A(c),c){case"EarlyBird":_(t);break;case"RiseAndShine":_(a);break;case"MidDayBreak1":_(s);break;case"MidDayBreak2":_(u);break;case"HappyHours":_(v);break;case"NeverTooLate":_(x);break;default:_(t)}r=g.filter((function(e){return e.value===c}))[0]}else r=g.filter((function(e){return"EarlyBird"===e.value}))[0];var l={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:r,city:e.queryObject.city}};e.updateTrainerDetails(l)}),[]),0===T.length||(ve=Object(k.jsxs)("table",{children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsxs)("th",{style:{height:"70px"},children:[Object(k.jsx)("img",{src:p[7],style:{width:"30px",height:"30px"}}),Object(k.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",p[6]]})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[0].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[1].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[2].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[3].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"THU"})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[4].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[5].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(k.jsxs)("th",{children:[Object(k.jsx)("div",{className:"table_header_number",children:J[6].slice(8,10)}),Object(k.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"user_time_slot",children:p[0]}),T[0].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(k.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(k.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{title:"You can request this time through link/button below"})}))]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"user_time_slot",children:p[1]}),T[1].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(k.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot"}):Object(k.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{title:"You can request this time through link/button below"})}))]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"user_time_slot",children:p[2]}),T[2].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(k.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{title:"You can request this time through link/button below"})}))]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"user_time_slot",children:p[3]}),T[3].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(k.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{title:"You can request this time through link/button below"})}))]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"user_time_slot",children:p[4]}),T[4].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(k.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{title:"You can request this time through link/button below"})}))]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"user_time_slot",children:p[5]}),T[5].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(k.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(k.jsx)("td",{title:"You can request this time through link/button below"})}))]})]})]})),Object(k.jsxs)("div",{className:"outter_table_user",children:[Object(k.jsx)("div",{className:"table_user",children:Object(k.jsxs)("div",{className:"table_inner_trainer",children:[Object(k.jsxs)("div",{className:"table_date",children:[l()(Q.format("YYYY-MM-DD")).isAfter(l()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:o.default,onClick:function(){X(Q.subtract(7,"days")),te(ee.subtract(7,"days")),xe(Q,ee),he(Q,ee)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(k.jsxs)("div",{style:{display:"flex"},children:[Object(k.jsx)("img",{src:o.default,disabled:!0,style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(k.jsxs)("div",{className:"date_week",children:[Q.format("DD")," - ",ee.format("DD")," \u2002",Q.format("MMMM")," \u2002 ",Q.format("yyyy")," "]}),Object(k.jsx)("img",{src:b.default,onClick:function(){X(Q.add(7,"days")),te(ee.add(7,"days")),xe(Q,ee),he(Q,ee)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(k.jsx)("select",{value:N,name:"TimeSlot",onChange:function(n){var i=n.target.value;A(i),"EarlyBird"===i&&_(t),"RiseAndShine"===i&&_(a),"MidDayBreak1"===i&&_(s),"MidDayBreak2"===i&&_(u),"HappyHours"===i&&_(v),"NeverTooLate"===i&&_(x);var c=g.filter((function(e){return e.value===i}))[0],r={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:c}};e.updateTrainerDetails(r)},children:g.map((function(e,t){return Object(k.jsx)("option",{value:e.value,children:e.label},t)}))})]})}),Object(k.jsx)("br",{}),ve]})}));t.default=_},482:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},483:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},499:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},500:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},501:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},502:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},503:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},553:function(e,t,a){}}]);