(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[116,241,321,322,346,347,348,349,350],{284:function(e,t,a){"use strict";a.r(t);var n=a(84),c=a(14),i=a(2),r=a.n(i),s=a(220),d=a.n(s),l=a(35),u=a.n(l),o=a(419),b=a(420),f=(a(782),a(489),a(437)),j=a(441),m=a(439),h=a(438),O=a(440),v=a(39),x=a(33),y=a(21),p=(a(85),a(62)),M=a(1),_=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var k=Object(x.b)((function(e){return{queryObject:e.trainerReducer.query}}),(function(e){return Object(y.b)({getCalenderDetails:v.getCalenderDetails,updateTrainerDetails:p.updateTrainerDetails},e)}))((function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",f.default],a=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",j.default],s=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",m.default],l=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",m.default],v=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",h.default],x=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],y=r.a.useState(t),p=Object(c.a)(y,2),k=p[0],g=p[1],D=r.a.useState("EarlyBird"),Y=Object(c.a)(D,2),N=Y[0],C=Y[1],T=r.a.useState([]),A=Object(c.a)(T,2),S=A[0],B=A[1],P=r.a.useState([]),E=Object(c.a)(P,2),w=(E[0],E[1]),H=r.a.useState([]),q=Object(c.a)(H,2),R=q[0],L=q[1],I=r.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),U=Object(c.a)(I,2),W=U[0],z=(U[1],r.a.useState([])),F=Object(c.a)(z,2),J=F[0],G=F[1],K=r.a.useState(d()().startOf("isoWeek")),Q=Object(c.a)(K,2),V=Q[0],X=Q[1],Z=r.a.useState(d()().endOf("isoWeek")),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=new Object,ne=new Object,ce=r.a.useState([]),ie=Object(c.a)(ce,2),re=ie[0],se=ie[1],de=r.a.useState(),le=Object(c.a)(de,2),ue=le[0],oe=le[1],be=r.a.useState(),fe=Object(c.a)(be,2),je=fe[0],me=fe[1];Object(i.useEffect)((function(){xe(V,ee),he(V,ee),window.scrollTo(0,0)}),[]),Object(i.useEffect)((function(){var t;2===(null===e||void 0===e||null===(t=e.selectedTimes)||void 0===t?void 0:t.length)&&L(e.selectedTimes)}),[e.selectedTimes]),Object(i.useEffect)((function(){w([]),xe(V,ee),he(V,ee)}),[k]),Object(i.useEffect)((function(){var e;Object.keys(re).map((function(e){ae[re[e].slotDate]=re[e].availabileTimes})),Object.keys(ae).map((function(t){e=[],ae[t].map((function(t){var a=u.a.tz(t.startTime,"America/New_York"),n=u()().tz("America/New_York");a.isBefore(n,"minutes")||e.push(t.start)})),ne[t]=e})),oe(ne),me(Object.keys(ne))}),[re]),Object(i.useEffect)((function(){B([]),k.map((function(e){var t=[];J.map((function(a){t.push({date:a,time:e})})),B((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[J]),Object(i.useEffect)((function(){w([]),W.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),w((function(e){return[].concat(Object(n.a)(e),[a])})))}))}),[W]);var he=function(e,t){B([]);for(var a=e.clone(),c=[];a.isSameOrBefore(t);)c.push(a.format("YYYY-MM-DD")),a.add(1,"days");G(c),0===S.length&&k.map((function(e){var t=[];c.map((function(a){t.push({date:a,time:e})})),B((function(e){return[].concat(Object(n.a)(e),[t])}))}))};function Oe(t,a){var n=[],c=ue[t];n.push(a+t);var i,r=d()(a,"hh:mm A").add(30,"minutes").format("hh:mm A"),s=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").valueOf();if(c.find((function(e){return e===r}))){n.push(r+t),i=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(60,"minutes").valueOf();var l={selectedTimes:n};(null===e||void 0===e?void 0:e.updateUserDetails)&&(null===e||void 0===e||e.updateUserDetails(l)),e.parentCallback(s,i,t)}else{var u=d()(r,"hh:mm A").subtract(60,"minutes").format("hh:mm A");n.push(u+t),i=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),s=d()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf();var o={selectedTimes:n};e.updateUserDetails(o),e.parentCallback(i,s,t)}L(n)}Object(i.useEffect)((function(){he(V,ee)}),[R]);var ve,xe=function(t,a){var n=t.format("YYYY-MM-DD"),c=a.format("YYYY-MM-DD");e.id&&e.getCalenderDetails(e.id,n,c,N).then((function(e){var t=e.data;se(t)}))};return Object(i.useEffect)((function(){var n,c,i=null===(n=e.queryObject)||void 0===n||null===(c=n.availability)||void 0===c?void 0:c.value,r={};if(i&&N!==i){switch(C(i),i){case"EarlyBird":g(t);break;case"RiseAndShine":g(a);break;case"MidDayBreak1":g(s);break;case"MidDayBreak2":g(l);break;case"HappyHours":g(v);break;case"NeverTooLate":g(x);break;default:g(t)}r=_.filter((function(e){return e.value===i}))[0]}else r=_.filter((function(e){return"EarlyBird"===e.value}))[0];var d={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:r,city:e.queryObject.city}};e.updateTrainerDetails(d)}),[]),0===S.length||(ve=Object(M.jsxs)("table",{children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsxs)("th",{style:{height:"70px"},children:[Object(M.jsx)("img",{src:k[7],style:{width:"30px",height:"30px"}}),Object(M.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",k[6]]})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[0].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[1].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[2].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[3].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[4].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[5].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(M.jsxs)("th",{children:[Object(M.jsx)("div",{className:"table_header_number",children:J[6].slice(8,10)}),Object(M.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:k[0]}),S[0].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:k[1]}),S[1].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot"}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:k[2]}),S[2].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:k[3]}),S[3].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:k[4]}),S[4].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"user_time_slot",children:k[5]}),S[5].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&ue[e.date].find((function(t){return t===e.time}))?R.find((function(t){return t===e.time+e.date}))?Object(M.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(M.jsx)("td",{})}))]})]})]})),Object(M.jsxs)("div",{className:"outter_table_user",children:[Object(M.jsx)("div",{className:"table_user",children:Object(M.jsxs)("div",{className:"table_inner_trainer",children:[Object(M.jsxs)("div",{className:"table_date",children:[d()(V.format("YYYY-MM-DD")).isAfter(d()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:o.default,onClick:function(){X(V.subtract(7,"days")),te(ee.subtract(7,"days")),xe(V,ee),he(V,ee)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:o.default,disabled:!0,style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(M.jsxs)("div",{className:"date_week",children:[V.format("DD")," - ",ee.format("DD")," \u2002",V.format("MMMM")," \u2002 ",V.format("yyyy")," "]}),Object(M.jsx)("img",{src:b.default,onClick:function(){X(V.add(7,"days")),te(ee.add(7,"days")),xe(V,ee),he(V,ee)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(M.jsx)("select",{value:N,name:"TimeSlot",onChange:function(n){var c=n.target.value;C(c),"EarlyBird"===c&&g(t),"RiseAndShine"===c&&g(a),"MidDayBreak1"===c&&g(s),"MidDayBreak2"===c&&g(l),"HappyHours"===c&&g(v),"NeverTooLate"===c&&g(x);var i=_.filter((function(e){return e.value===c}))[0],r={query:{location:e.queryObject.location,date:e.queryObject.date,trainingType:e.queryObject.trainingType,availability:i}};e.updateTrainerDetails(r)},children:_.map((function(e,t){return Object(M.jsx)("option",{value:e.value,children:e.label},t)}))})]})}),Object(M.jsx)("br",{}),ve]})}));t.default=k},419:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},420:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},437:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},438:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},439:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},440:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},441:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},489:function(e,t,a){}}]);
//# sourceMappingURL=116.61b999d3.chunk.js.map