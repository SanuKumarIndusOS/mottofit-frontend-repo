(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[27,114,154,211,212,310,311,335,336,337,338,339],{165:function(e,t,a){"use strict";a.r(t);a(2),a(579);var c=a(284),i=a(1);t.default=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"schedule_main",children:[Object(i.jsx)("div",{className:"schedule_heading",children:Object(i.jsx)("h1",{children:"My Schedule"})}),Object(i.jsx)("div",{className:"schedule_wrapper",children:Object(i.jsx)("div",{className:"eventCalender",children:Object(i.jsx)(c.default,{})})})]})})})}},267:function(e,t,a){"use strict";a.r(t),a.d(t,"COMMON_URL",(function(){return c})),a.d(t,"MESSAGING_URL",(function(){return i})),a.d(t,"SESSION_URL",(function(){return s})),a.d(t,"NOTIFICATION_URL",(function(){return n})),a.d(t,"PAYMENT_URL",(function(){return d})),a.d(t,"STRIPE_URL",(function(){return l}));var c="http://doodlebluelive.com:2307",i="http://doodlebluelive.com:2338",s="http://doodlebluelive.com:2337",n="",d="http://doodlebluelive.com:2336",l="pk_test_51IJnd4BqgEC4bFYpGGizgTzbIgTjeilOIQ1ht7qe6UfgB3yfVYRrcJbEZp37oPu7ACIFACqNc6hWVIPcIAbGqHyA00aa6T2SRm"},284:function(e,t,a){"use strict";a.r(t);var c=a(84),i=a(15),s=a(2),n=a(1018),d=a.n(n),l=(a(1025),a(219)),r=a.n(l),j=a(417),b=a(418),o=a(760),u=(a(544),a(82),a(435)),h=a(439),m=a(437),f=a(436),O=a(438),x=a(61),v=a(33),_=a(21),p=(a(267),a(40)),N=a(1),g=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var M=function(){return Object(N.jsx)("div",{className:"schedular_slots",children:Object(N.jsxs)("div",{className:"items_slots",children:[Object(N.jsxs)("div",{className:"item_slot1",children:[Object(N.jsx)("div",{className:"indicator"}),Object(N.jsx)("h5",{children:"AVAILABLE"})]}),Object(N.jsxs)("div",{className:"item_slot2",children:[Object(N.jsx)("div",{className:"indicator2"}),Object(N.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(N.jsxs)("div",{className:"item_slot3",children:[Object(N.jsx)("div",{className:"indicator3"}),Object(N.jsx)("h5",{children:"BOOKED SLOT"})," "]})]})})},y=Object(v.b)(null,(function(e){return Object(_.b)({getTrainerCalenderDetailsApi:x.getTrainerCalenderDetails,trainerSlotApi:x.trainerSlot,makeDefaultApi:x.makeDefaultApi,addTrainerSlotApi:x.addTrainerSlotApi},e)}))((function(e){var t=e.getTrainerCalenderDetailsApi,a=e.trainerSlotApi,n=e.makeDefaultApi,l=e.addTrainerSlotApi,x=Object(s.useState)(!1),v=Object(i.a)(x,2),_=v[0],y=v[1],S=Object(s.useState)(!1),A=Object(i.a)(S,2),D=A[0],k=A[1],Y=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],E=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",u.default],T=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",h.default],C=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",m.default],P=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",m.default],B=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",f.default],w=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],L=Object(s.useState)(E),I=Object(i.a)(L,2),R=I[0],H=I[1],U=Object(s.useState)("EarlyBird"),W=Object(i.a)(U,2),F=W[0],G=W[1],V=Object(s.useState)([]),Z=Object(i.a)(V,2),q=Z[0],J=Z[1],z=Object(s.useState)([]),K=Object(i.a)(z,2),Q=K[0],X=K[1],$=Object(s.useState)([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ce=Object(s.useState)([]),ie=Object(i.a)(ce,2),se=ie[0],ne=ie[1],de=Object(s.useState)(r()().startOf("isoWeek")),le=Object(i.a)(de,2),re=le[0],je=le[1],be=Object(s.useState)(r()().endOf("isoWeek")),oe=Object(i.a)(be,2),ue=oe[0],he=oe[1],me=(localStorage.getItem("token"),new Object),fe=new Object,Oe=Object(s.useState)([]),xe=Object(i.a)(Oe,2),ve=xe[0],_e=xe[1],pe=Object(s.useState)(),Ne=Object(i.a)(pe,2),ge=Ne[0],Me=Ne[1],ye=Object(s.useState)(),Se=Object(i.a)(ye,2),Ae=Se[0],De=Se[1];Object(s.useEffect)((function(){Ye(re,ue),ke(re,ue)}),[]),Object(s.useEffect)((function(){ke(re,ue)}),[Ae]),Object(s.useEffect)((function(){X([]),Ye(re,ue),ke(re,ue)}),[R]),Object(s.useEffect)((function(){var e;Object.keys(ve).map((function(e){me[ve[e].slotDate]=ve[e].availabileTimes})),Object.keys(me).map((function(t){e=[],me[t].map((function(t){e.push(t.start)})),fe[t]=e})),Me(fe),De(Object.keys(fe))}),[ve]),Object(s.useEffect)((function(){J([]),R.map((function(e){var t=[];se.map((function(a){t.push({date:a,time:e})})),J((function(e){return[].concat(Object(c.a)(e),[t])}))}))}),[se]),Object(s.useEffect)((function(){X([]),te.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),X((function(e){return[].concat(Object(c.a)(e),[a])})))}))}),[te]),Object(s.useEffect)((function(){var e=[],t=[];if(Q.map((function(t,a){0!==t.length&&t.map((function(t,c){e.push(q[a][t])}))})),0!==e.length&&(t=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)}))),0!==t.length){var a={startDate:t[t.length-1].date,endDate:t[0].date,timeZone:"America/New_York",availabilitySlot:[{availableMode:F,availableSlots:[t[0].time+"-"+r()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("hh:mm A")]}]};if(r()("".concat(null===a||void 0===a?void 0:a.startDate," ").concat(t[t.length-1].time)).isBefore(r()()))return ae(Y),Ye(re,ue),Object(p.Toast)({type:"error",message:"Cannot add slot at past"});l(a).then((function(){ae(Y),Ye(re,ue)})).catch((function(e){console.error("Error:",e)}))}}),[Q]),Object(s.useEffect)((function(){}),[re]);var ke=function(e,t){J([]);for(var a=e.clone(),i=[];a.isSameOrBefore(t);)i.push(a.format("YYYY-MM-DD")),a.add(1,"days");ne(i),0===q.length&&R.map((function(e){var t=[];i.map((function(a){t.push({date:a,time:e})})),J((function(e){return[].concat(Object(c.a)(e),[t])}))}))},Ye=function(e,a){var c=e.format("YYYY-MM-DD"),i=a.format("YYYY-MM-DD");t(c,i,F).then((function(e){var t=e.data;_e(t)}))};function Ee(e,t){a({date:e,mode:F,blockedSlot:t,state:"BLOCK",timeZone:"America/New_York"}).then((function(){ae(Y),Ye(re,ue)})).catch((function(e){console.error("Error:",e)}))}var Te,Ce,Pe=function(){_&&(Be(),y(!_)),k(!D)},Be=function(){var e={startDate:re.format("YYYY-MM-DD"),endDate:ue.format("YYYY-MM-DD"),defaultWeeks:2,mode:F,timeZone:"America/New_York"};n(e).then((function(){Object(p.Toast)({type:"success",message:"Slot def blocked"}),ae(Y),Ye(re,ue)})).catch((function(e){console.error("Error:",e)}))};return 0===q.length?console.log("hitu"):(Te=Object(N.jsxs)(d.a,{value:te,onChange:function(e){ae(e)},children:[Object(N.jsxs)("thead",{children:[Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("img",{src:R[7],style:{width:"30px",height:"30px"}}),Object(N.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"800",color:"#898989",margin:0,textAlign:"center"},children:[" ",R[6]]})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[0].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[1].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[2].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[3].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[4].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[5].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(N.jsxs)("td",{disabled:!0,style:{height:"120px"},children:[Object(N.jsx)("div",{className:"table_header_number",children:se[6].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[0]}),q[0].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return Ee(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[1]}),q[1].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return Ee(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[2]}),q[2].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return Ee(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[3]}),q[3].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return Ee(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[4]}),q[4].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return Ee(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[5]}),q[5].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return Ee(e.date,e.time)}}):Object(N.jsx)("td",{})}))]})]}),Ce=Object(N.jsxs)("table",{className:"table2",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("img",{src:R[7],style:{width:"30px",height:"30px"}}),Object(N.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0,textAlign:"center"},children:[" ",R[6]]})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[0].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[1].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[2].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[3].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[4].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[5].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:se[6].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",style:{backgroundColor:"fff"},children:R[0]}),q[0].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[1]}),q[1].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[2]}),q[2].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[3]}),q[3].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[4]}),q[4].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:R[5]}),q[5].map((function(e){return 0!==Ae.length&&Ae.find((function(t){return t===e.date}))&&ge[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]})]})]})),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"outter_table_trainer",children:[Object(N.jsxs)("div",{className:"table_trainer",children:[Object(N.jsxs)("div",{className:"table_inner_trainer",children:[Object(N.jsxs)("div",{className:"table_date",children:["\u2002",r()(re.format("YYYY-MM-DD")).isAfter(r()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j.default,onClick:function(){ae(Y),je(re.subtract(7,"days")),he(ue.subtract(7,"days")),Ye(re,ue),ke(re,ue)}})," \u2002"]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j.default,disabled:"true",style:{opacity:"0.5"}})," ","\u2002"]}),Object(N.jsxs)("div",{className:"date_week",children:[re.format("DD")," - ",ue.format("DD")," \u2002",re.format("MMMM"),", ",re.format("yyyy")]}),Object(N.jsx)("img",{src:b.default,onClick:function(){ae(Y),je(re.add(7,"days")),he(ue.add(7,"days")),Ye(re,ue),ke(re,ue)}})," \u2002 \u2002"]}),Object(N.jsx)("div",{className:"table_date",children:Object(N.jsx)(o.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:g,value:F,onChange:function(e){G(e.value),"EarlyBird"===e.value&&H(E),"RiseAndShine"===e.value&&H(T),"MidDayBreak1"===e.value&&H(C),"MidDayBreak2"===e.value&&H(P),"HappyHours"===e.value&&H(B),"NeverTooLate"===e.value&&H(w)},name:"TimeSlot"})})]}),D?Object(N.jsx)("div",{style:{height:"100%",width:"960px"},children:Te}):Object(N.jsx)("div",{style:{height:"100%",width:"960px"},children:Ce}),Object(N.jsx)("div",{className:"scheduler_button",children:D?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{type:"checkbox",id:"defualt",onChange:function(e){y(e.target.checked)},checked:_}),Object(N.jsxs)("label",{for:"defualt",style:{color:"#898989"},className:"default_label",children:[" ","Make defualt"]}),Object(N.jsx)("button",{onClick:Pe,className:"scheduler_button",style:{backgroundColor:"#53d27d",width:"100%"},children:"SAVE"})]}):Object(N.jsx)("button",{onClick:Pe,className:"scheduler_button",style:{backgroundColor:"#53bfd2",width:"100%"},children:"ADD YOUR SLOT"})})]}),Object(N.jsx)(M,{})]})})}));t.default=y},417:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},418:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},435:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},436:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},437:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},438:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},439:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},544:function(e,t,a){},579:function(e,t,a){}}]);
//# sourceMappingURL=27.f5b565cc.chunk.js.map