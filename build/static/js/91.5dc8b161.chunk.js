(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[91,134,183,277,278,302,303,304,305,306],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"COMMON_URL",(function(){return s})),a.d(t,"MESSAGING_URL",(function(){return n})),a.d(t,"SESSION_URL",(function(){return c})),a.d(t,"NOTIFICATION_URL",(function(){return i})),a.d(t,"PAYMENT_URL",(function(){return d}));var s="https://apis.bookmotto.com/user",n="https://apis.bookmotto.com/messaging",c="https://apis.bookmotto.com/session",i="",d="https://apis.bookmotto.com/payments"},234:function(e,t,a){"use strict";a.r(t);var s=a(578),n=a(10),c=a(2),i=a.n(c),d=a(853),l=a.n(d),r=(a(860),a(35)),o=a.n(r),j=a(334),b=a(335),u=a(597),h=(a(459),a(349)),m=a(353),f=a(351),O=a(350),x=a(352),p=a(215),v=a(1),g=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var _=function(){return Object(v.jsx)("div",{className:"schedular_slots",children:Object(v.jsxs)("div",{className:"items_slots",children:[Object(v.jsxs)("div",{className:"item_slot1",children:[Object(v.jsx)("div",{className:"indicator"}),Object(v.jsx)("h5",{children:"AVAILABLE"})]}),Object(v.jsxs)("div",{className:"item_slot2",children:[Object(v.jsx)("div",{className:"indicator2"}),Object(v.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(v.jsxs)("div",{className:"item_slot3",children:[Object(v.jsx)("div",{className:"indicator3"}),Object(v.jsx)("h5",{children:"BOOKED SLOT"})," "]})]})})};t.default=function(){var e=i.a.useState(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],d=i.a.useState(!1),r=Object(n.a)(d,2),M=r[0],N=r[1],y=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],D=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",h.default],S=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",m.default],k=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",f.default],A=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",f.default],Y=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",O.default],E=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",x.default],H=i.a.useState(D),T=Object(n.a)(H,2),C=T[0],L=T[1],B=i.a.useState("EarlyBird"),P=Object(n.a)(B,2),R=P[0],w=P[1],U=i.a.useState([]),I=Object(n.a)(U,2),W=I[0],F=I[1],J=i.a.useState([]),z=Object(n.a)(J,2),V=z[0],G=z[1],K=i.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),Z=Object(n.a)(K,2),q=Z[0],Q=Z[1],X=i.a.useState([]),$=Object(n.a)(X,2),ee=$[0],te=$[1],ae=i.a.useState(o()().startOf("isoWeek")),se=Object(n.a)(ae,2),ne=se[0],ce=se[1],ie=i.a.useState(o()().endOf("isoWeek")),de=Object(n.a)(ie,2),le=de[0],re=de[1],oe=localStorage.getItem("token"),je=new Object,be=new Object,ue=i.a.useState([]),he=Object(n.a)(ue,2),me=he[0],fe=he[1],Oe=i.a.useState(),xe=Object(n.a)(Oe,2),pe=xe[0],ve=xe[1],ge=i.a.useState(),_e=Object(n.a)(ge,2),Me=_e[0],Ne=_e[1];i.a.useEffect((function(){De(ne,le),ye(ne,le),console.log(R)}),[]),i.a.useEffect((function(){ye(ne,le)}),[Me]),i.a.useEffect((function(){G([]),console.log("time changed"),De(ne,le),ye(ne,le)}),[C]),i.a.useEffect((function(){var e;Object.keys(me).map((function(e){je[me[e].slotDate]=me[e].availabileTimes})),console.log(je),Object.keys(je).map((function(t){e=[],je[t].map((function(t){e.push(t.start)})),be[t]=e})),ve(be),Ne(Object.keys(be)),console.log(Object.keys(be))}),[me]),i.a.useEffect((function(){console.log(ee),F([]),C.map((function(e){var t=[];ee.map((function(a){t.push({date:a,time:e})})),F((function(e){return[].concat(Object(s.a)(e),[t])}))}))}),[ee]),i.a.useEffect((function(){console.log("change",q,W),G([]),q.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),G((function(e){return[].concat(Object(s.a)(e),[a])})))}))}),[q]),i.a.useEffect((function(){console.log(V);var e=[],t=[];if(V.map((function(t,a){0!==t.length&&t.map((function(t,s){console.log(W[a][t]),e.push(W[a][t])}))})),0!==e.length&&(t=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),console.log(t),console.log(o()(t[0].time,["hh:mm A"]).format("HH:mm")+"-"+o()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("HH:mm"))),0!==t.length){console.log(t[0].time+"-"+t[t.length-1].time);var a={startDate:t[t.length-1].date,endDate:t[0].date,availabilitySlot:[{availableMode:R,availableSlots:[o()(t[0].time,["hh:mm A"]).format("HH:mm")+"-"+o()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("HH:mm")]}]};fetch("".concat(p.COMMON_URL,"/v1/addTrainerSlot"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:oe},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){alert("Slot Added"),Q(y),De(ne,le)})).catch((function(e){console.error("Error:",e)}))}}),[V]),i.a.useEffect((function(){}),[ne]);var ye=function(e,t){F([]);for(var a=e.clone(),n=[];a.isSameOrBefore(t);)n.push(a.format("YYYY-MM-DD")),a.add(1,"days");te(n),0===W.length&&(console.log("0"),C.map((function(e){var t=[];n.map((function(a){t.push({date:a,time:e})})),F((function(e){return[].concat(Object(s.a)(e),[t])}))})))},De=function(e,t){var a=e.format("YYYY-MM-DD"),s=t.format("YYYY-MM-DD");fetch("".concat(p.COMMON_URL,"/v1/trainer/calenderView?startDate=")+a+"&endDate="+s+"&timeBlock="+R,{method:"GET",headers:{"Content-Type":"application/json",Authorization:oe}}).then((function(e){return e.json()})).then((function(e){fe(e.data)}))};function Se(e,t){var a={date:e,mode:"EarlyBird",blockedSlot:o()(t,["h:mm A"]).format("HH:mm"),state:"BLOCK"};fetch("".concat(p.COMMON_URL,"/v1/block/trainerSlot"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:oe},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){Q(y),De(ne,le)})).catch((function(e){console.error("Error:",e)}))}var ke,Ae,Ye=function(){console.log("edit mode",a),a&&(Ee(),c(!a)),N(!M)},Ee=function(){console.log("clicked",ne.format("YYYY-MM-DD"),le.format("YYYY-MM-DD"),R);var e={startDate:ne.format("YYYY-MM-DD"),endDate:le.format("YYYY-MM-DD"),defaultWeeks:2,mode:R};fetch("".concat(p.COMMON_URL,"/v1/slot/make-default"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:oe},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){alert("Slot def blocked"),Q(y),De(ne,le)})).catch((function(e){console.error("Error:",e)}))};return 0===W.length?console.log("hitu"):(ke=Object(v.jsxs)(l.a,{value:q,onChange:function(e){return Q(e)},children:[Object(v.jsxs)("thead",{children:[Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("img",{src:C[7],style:{width:"30px",height:"30px"}}),Object(v.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"800",color:"#898989",margin:0},children:[" ",C[6]]})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[0].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[1].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[2].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[3].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[4].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[5].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(v.jsxs)("td",{disabled:!0,style:{height:"120px"},children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[6].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[0]}),W[0].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(v.jsx)("td",{disabled:!0,onClick:function(){return Se(e.date,e.time)}})):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[1]}),W[1].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return Se(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[2]}),W[2].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return Se(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[3]}),W[3].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return Se(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[4]}),W[4].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return Se(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[5]}),W[5].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return Se(e.date,e.time)}}):Object(v.jsx)("td",{})}))]})]}),Ae=Object(v.jsxs)("table",{className:"table2",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("img",{src:C[7],style:{width:"30px",height:"30px"}}),Object(v.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",C[6]]})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[0].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[1].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[2].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[3].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[4].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[5].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:ee[6].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",style:{backgroundColor:"fff"},children:C[0]}),W[0].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"})):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[1]}),W[1].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[2]}),W[2].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[3]}),W[3].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[4]}),W[4].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:C[5]}),W[5].map((function(e){return 0!==Me.length&&Me.find((function(t){return t===e.date}))&&pe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]})]})]})),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"outter_table_trainer",children:[Object(v.jsxs)("div",{className:"table_trainer",children:[Object(v.jsxs)("div",{className:"table_inner_trainer",children:[Object(v.jsxs)("div",{className:"table_date",children:["\u2002",o()(ne.format("YYYY-MM-DD")).isAfter(o()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:j.default,onClick:function(){Q(y),ce(ne.subtract(7,"days")),re(le.subtract(7,"days")),console.log(ne.format("DD/MM"),le.format("DD/MM")),De(ne,le),ye(ne,le)}})," \u2002"]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:j.default,disabled:"true",style:{opacity:"0.5"}})," ","\u2002"]}),Object(v.jsxs)("div",{className:"date_week",children:[ne.format("DD")," - ",le.format("DD")," \u2002",ne.format("MMMM"),", ",ne.format("yyyy")]}),Object(v.jsx)("img",{src:b.default,onClick:function(){Q(y),ce(ne.add(7,"days")),re(le.add(7,"days")),console.log(ne.format("DD/MM"),le.format("DD/MM")),De(ne,le),ye(ne,le)}})," \u2002 \u2002"]}),Object(v.jsx)("div",{className:"table_date",children:Object(v.jsx)(u.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:g,value:R,onChange:function(e){w(e.value),console.log(e.value),"EarlyBird"===e.value&&(L(D),console.log("early_bird")),"RiseAndShine"===e.value&&(L(S),console.log("RiseAndShine")),"MidDayBreak1"===e.value&&(L(k),console.log("MidDayBreak")),"MidDayBreak2"===e.value&&(L(A),console.log("MidDayBreak2")),"HappyHours"===e.value&&(L(Y),console.log("HappyHours")),"NeverTooLate"===e.value&&(L(E),console.log("NeverTooLate"))},name:"TimeSlot"})})]}),M?Object(v.jsxs)("div",{style:{height:"530px",width:"960px"},children:[" ",ke," "]}):Object(v.jsxs)("div",{style:{height:"530px",width:"960px"},children:[" ",Ae," "]}),Object(v.jsx)("div",{className:"scheduler_button",children:M?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{type:"checkbox",id:"defualt",onChange:function(e){c(e.target.checked)},checked:a}),Object(v.jsxs)("label",{for:"defualt",style:{color:"#898989"},className:"default_label",children:[" ","Make defualt"]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{onClick:Ye,className:"scheduler_button",style:{backgroundColor:"#53d27d",width:"100%"},children:"SAVE"})]}):Object(v.jsx)("button",{onClick:Ye,className:"scheduler_button",style:{backgroundColor:"#53bfd2",width:"100%"},children:"ADD YOUR SLOT"})})]}),Object(v.jsx)(_,{})]})})}},334:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},335:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},349:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},350:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},351:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},352:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},459:function(e,t,a){}}]);
//# sourceMappingURL=91.5dc8b161.chunk.js.map