(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[23,94,136,185,186,280,281,305,306,307,308,309],{144:function(e,t,a){"use strict";a.r(t);a(2),a(497);var c=a(233),i=a(1);t.default=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"schedule_main",children:[Object(i.jsx)("div",{className:"schedule_heading",children:Object(i.jsx)("h1",{children:"My Schedule"})}),Object(i.jsx)("div",{className:"schedule_wrapper",children:Object(i.jsx)("div",{className:"eventCalender",children:Object(i.jsx)(c.default,{})})})]})})})}},216:function(e,t,a){"use strict";a.r(t),a.d(t,"COMMON_URL",(function(){return c})),a.d(t,"MESSAGING_URL",(function(){return i})),a.d(t,"SESSION_URL",(function(){return s})),a.d(t,"NOTIFICATION_URL",(function(){return n})),a.d(t,"PAYMENT_URL",(function(){return d}));var c="http://doodlebluelive.com:2307",i="http://doodlebluelive.com:2338",s="http://doodlebluelive.com:2337",n="",d="http://doodlebluelive.com:2336"},233:function(e,t,a){"use strict";a.r(t);var c=a(580),i=a(10),s=a(2),n=a(857),d=a.n(n),l=(a(864),a(35)),r=a.n(l),j=a(335),b=a(336),o=a(599),u=(a(460),a(351)),h=a(355),m=a(353),f=a(352),O=a(354),x=a(49),v=a(34),_=a(27),p=a(216),N=a(1),g=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var M=function(){return Object(N.jsx)("div",{className:"schedular_slots",children:Object(N.jsxs)("div",{className:"items_slots",children:[Object(N.jsxs)("div",{className:"item_slot1",children:[Object(N.jsx)("div",{className:"indicator"}),Object(N.jsx)("h5",{children:"AVAILABLE"})]}),Object(N.jsxs)("div",{className:"item_slot2",children:[Object(N.jsx)("div",{className:"indicator2"}),Object(N.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(N.jsxs)("div",{className:"item_slot3",children:[Object(N.jsx)("div",{className:"indicator3"}),Object(N.jsx)("h5",{children:"BOOKED SLOT"})," "]})]})})},y=Object(v.b)(null,(function(e){return Object(_.b)({getTrainerCalenderDetails:x.getTrainerCalenderDetails,trainerSlot:x.trainerSlot,makeDefaultApi:x.makeDefaultApi,addTrainerSlotApi:x.addTrainerSlotApi},e)}))((function(e){e.getTrainerCalenderDetails,e.trainerSlot;var t=e.makeDefaultApi,a=e.addTrainerSlotApi,n=Object(s.useState)(!1),l=Object(i.a)(n,2),x=l[0],v=l[1],_=Object(s.useState)(!1),y=Object(i.a)(_,2),S=y[0],D=y[1],k=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],A=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",u.default],w=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",h.default],Y=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",m.default],E=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",m.default],T=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",f.default],C=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],L=Object(s.useState)(A),P=Object(i.a)(L,2),B=P[0],R=P[1],H=Object(s.useState)("EarlyBird"),U=Object(i.a)(H,2),I=U[0],W=U[1],F=Object(s.useState)([]),V=Object(i.a)(F,2),Z=V[0],G=V[1],J=Object(s.useState)([]),z=Object(i.a)(J,2),K=z[0],q=z[1],Q=Object(s.useState)([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),X=Object(i.a)(Q,2),$=X[0],ee=X[1],te=Object(s.useState)([]),ae=Object(i.a)(te,2),ce=ae[0],ie=ae[1],se=Object(s.useState)(r()().startOf("isoWeek")),ne=Object(i.a)(se,2),de=ne[0],le=ne[1],re=Object(s.useState)(r()().endOf("isoWeek")),je=Object(i.a)(re,2),be=je[0],oe=je[1],ue=localStorage.getItem("token"),he=new Object,me=new Object,fe=Object(s.useState)([]),Oe=Object(i.a)(fe,2),xe=Oe[0],ve=Oe[1],_e=Object(s.useState)(),pe=Object(i.a)(_e,2),Ne=pe[0],ge=pe[1],Me=Object(s.useState)(),ye=Object(i.a)(Me,2),Se=ye[0],De=ye[1];Object(s.useEffect)((function(){Ae(de,be),ke(de,be)}),[]),Object(s.useEffect)((function(){ke(de,be)}),[Se]),Object(s.useEffect)((function(){q([]),Ae(de,be),ke(de,be)}),[B]),Object(s.useEffect)((function(){var e;Object.keys(xe).map((function(e){he[xe[e].slotDate]=xe[e].availabileTimes})),Object.keys(he).map((function(t){e=[],he[t].map((function(t){e.push(t.start)})),me[t]=e})),ge(me),De(Object.keys(me))}),[xe]),Object(s.useEffect)((function(){G([]),B.map((function(e){var t=[];ce.map((function(a){t.push({date:a,time:e})})),G((function(e){return[].concat(Object(c.a)(e),[t])}))}))}),[ce]),Object(s.useEffect)((function(){q([]),$.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),q((function(e){return[].concat(Object(c.a)(e),[a])})))}))}),[$]),Object(s.useEffect)((function(){var e=[],t=[];if(K.map((function(t,a){0!==t.length&&t.map((function(t,c){e.push(Z[a][t])}))})),0!==e.length&&(t=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)}))),0!==t.length){var c={startDate:t[t.length-1].date,endDate:t[0].date,timeZone:"America/New_York",availabilitySlot:[{availableMode:I,availableSlots:[t[0].time+"-"+r()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("hh:mm A")]}]};a(c).then((function(){ee(k),Ae(de,be)})).catch((function(e){console.error("Error:",e)}))}}),[K]),Object(s.useEffect)((function(){}),[de]);var ke=function(e,t){G([]);for(var a=e.clone(),i=[];a.isSameOrBefore(t);)i.push(a.format("YYYY-MM-DD")),a.add(1,"days");ie(i),0===Z.length&&B.map((function(e){var t=[];i.map((function(a){t.push({date:a,time:e})})),G((function(e){return[].concat(Object(c.a)(e),[t])}))}))},Ae=function(e,t){var a=e.format("YYYY-MM-DD"),c=t.format("YYYY-MM-DD");fetch("".concat(p.COMMON_URL,"/v1/trainer/calenderView?startDate=")+a+"&endDate="+c+"&timeBlock="+I+"&timeZone=America/New_York",{method:"GET",headers:{"Content-Type":"application/json",Authorization:ue}}).then((function(e){return e.json()})).then((function(e){ve(e.data)}))};function we(e,t){var a={date:e,mode:I,blockedSlot:t,state:"BLOCK",timeZone:"America/New_York"};console.log("wwwwwwwwwwww",a),fetch("".concat(p.COMMON_URL,"/v1/block/trainerSlot"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:ue},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){ee(k),Ae(de,be),console.log("yui",e)})).catch((function(e){console.error("Error:",e)}))}var Ye,Ee,Te=function(){x&&(Ce(),v(!x)),D(!S)},Ce=function(){var e={startDate:de.format("YYYY-MM-DD"),endDate:be.format("YYYY-MM-DD"),defaultWeeks:2,mode:I};t(e).then((function(){alert("Slot def blocked"),ee(k),Ae(de,be)})).catch((function(e){console.error("Error:",e)}))};return 0===Z.length?console.log("hitu"):(Ye=Object(N.jsxs)(d.a,{value:$,onChange:function(e){return ee(e)},children:[Object(N.jsxs)("thead",{children:[Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("img",{src:B[7],style:{width:"30px",height:"30px"}}),Object(N.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"800",color:"#898989",margin:0},children:[" ",B[6]]})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[0].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[1].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[2].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[3].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[4].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[5].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(N.jsxs)("td",{disabled:!0,style:{height:"120px"},children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[6].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[0]}),Z[0].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[1]}),Z[1].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[2]}),Z[2].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[3]}),Z[3].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[4]}),Z[4].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[5]}),Z[5].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]})]}),Ee=Object(N.jsxs)("table",{className:"table2",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("img",{src:B[7],style:{width:"30px",height:"30px"}}),Object(N.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",B[6]]})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[0].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[1].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[2].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[3].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[4].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[5].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ce[6].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",style:{backgroundColor:"fff"},children:B[0]}),Z[0].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[1]}),Z[1].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[2]}),Z[2].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[3]}),Z[3].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[4]}),Z[4].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:B[5]}),Z[5].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Ne[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]})]})]})),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"outter_table_trainer",children:[Object(N.jsxs)("div",{className:"table_trainer",children:[Object(N.jsxs)("div",{className:"table_inner_trainer",children:[Object(N.jsxs)("div",{className:"table_date",children:["\u2002",r()(de.format("YYYY-MM-DD")).isAfter(r()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j.default,onClick:function(){ee(k),le(de.subtract(7,"days")),oe(be.subtract(7,"days")),Ae(de,be),ke(de,be)}})," ","\u2002"]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j.default,disabled:"true",style:{opacity:"0.5"}})," ","\u2002"]}),Object(N.jsxs)("div",{className:"date_week",children:[de.format("DD")," -"," ",be.format("DD")," \u2002",de.format("MMMM"),","," ",de.format("yyyy")]}),Object(N.jsx)("img",{src:b.default,onClick:function(){ee(k),le(de.add(7,"days")),oe(be.add(7,"days")),Ae(de,be),ke(de,be)}})," \u2002 \u2002"]}),Object(N.jsx)("div",{className:"table_date",children:Object(N.jsx)(o.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:g,value:I,onChange:function(e){W(e.value),"EarlyBird"===e.value&&R(A),"RiseAndShine"===e.value&&R(w),"MidDayBreak1"===e.value&&R(Y),"MidDayBreak2"===e.value&&R(E),"HappyHours"===e.value&&R(T),"NeverTooLate"===e.value&&R(C)},name:"TimeSlot"})})]}),S?Object(N.jsxs)("div",{style:{height:"530px",width:"960px"},children:[" ",Ye," "]}):Object(N.jsxs)("div",{style:{height:"530px",width:"960px"},children:[" ",Ee," "]}),Object(N.jsx)("div",{className:"scheduler_button",children:S?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{type:"checkbox",id:"defualt",onChange:function(e){v(e.target.checked)},checked:x}),Object(N.jsxs)("label",{for:"defualt",style:{color:"#898989"},className:"default_label",children:[" ","Make defualt"]}),Object(N.jsx)("br",{}),Object(N.jsx)("button",{onClick:Te,className:"scheduler_button",style:{backgroundColor:"#53d27d",width:"100%"},children:"SAVE"})]}):Object(N.jsx)("button",{onClick:Te,className:"scheduler_button",style:{backgroundColor:"#53bfd2",width:"100%"},children:"ADD YOUR SLOT"})})]}),Object(N.jsx)(M,{})]})})}));t.default=y},335:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},336:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},351:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},352:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},354:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},355:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},460:function(e,t,a){},497:function(e,t,a){}}]);
//# sourceMappingURL=23.7a75b9e2.chunk.js.map