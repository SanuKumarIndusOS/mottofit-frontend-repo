(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[31,125,234,235,333,334,358,359,360,361,362],{175:function(e,t,a){"use strict";a.r(t);a(2),a(601);var c=a(305),s=a(1);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"container px-0",children:Object(s.jsxs)("div",{className:"schedule_main",children:[Object(s.jsx)("div",{className:"schedule_heading",children:Object(s.jsx)("h1",{children:"My Schedule"})}),Object(s.jsx)("div",{className:"schedule_wrapper",children:Object(s.jsx)("div",{className:"eventCalender",children:Object(s.jsx)(c.default,{})})})]})})})}},305:function(e,t,a){"use strict";a.r(t);var c=a(89),s=a(11),i=a(2),n=a(1063),d=a.n(n),l=(a(1070),a(235)),r=a.n(l),j=a(440),b=a(441),o=a(803),u=(a(569),a(88)),h=a(457),m=a(461),f=a(459),O=a(458),x=a(460),v=a(63),_=a(26),p=a(22),g=a(31),N=(a(54),a(1)),M=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var y=function(){return Object(N.jsx)("div",{className:"schedular_slots",children:Object(N.jsxs)("div",{className:"items_slots",children:[Object(N.jsxs)("div",{className:"item_slot1",children:[Object(N.jsx)("div",{className:"indicator"}),Object(N.jsx)("h5",{children:"AVAILABLE"})]}),Object(N.jsxs)("div",{className:"item_slot2",children:[Object(N.jsx)("div",{className:"indicator2"}),Object(N.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(N.jsxs)("div",{className:"item_slot3",children:[Object(N.jsx)("div",{className:"indicator3"}),Object(N.jsx)("h5",{children:"BOOKED SLOT"})," "]})]})})},D=Object(_.b)(null,(function(e){return Object(p.b)({getTrainerCalenderDetailsApi:v.getTrainerCalenderDetails,trainerSlotApi:v.trainerSlot,makeDefaultApi:v.makeDefaultApi,addTrainerSlotApi:v.addTrainerSlotApi},e)}))((function(e){var t=e.getTrainerCalenderDetailsApi,a=e.trainerSlotApi,n=e.makeDefaultApi,l=e.addTrainerSlotApi,v=Object(i.useState)(!1),_=Object(s.a)(v,2),p=_[0],D=_[1],k=Object(i.useState)(!1),S=Object(s.a)(k,2),A=S[0],Y=S[1],E=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],w=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",h.default],T=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",m.default],B=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",f.default],C=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",f.default],P=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",O.default],L=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",x.default],H=Object(i.useState)(w),R=Object(s.a)(H,2),I=R[0],W=R[1],U=Object(i.useState)("EarlyBird"),F=Object(s.a)(U,2),Z=F[0],V=F[1],J=Object(i.useState)([]),K=Object(s.a)(J,2),q=K[0],z=K[1],G=Object(i.useState)([]),Q=Object(s.a)(G,2),X=Q[0],$=Q[1],ee=Object(i.useState)([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),te=Object(s.a)(ee,2),ae=te[0],ce=te[1],se=Object(i.useState)([]),ie=Object(s.a)(se,2),ne=ie[0],de=ie[1],le=Object(i.useState)(r()().startOf("isoWeek")),re=Object(s.a)(le,2),je=re[0],be=re[1],oe=Object(i.useState)(r()().endOf("isoWeek")),ue=Object(s.a)(oe,2),he=ue[0],me=ue[1],fe=(localStorage.getItem("token"),new Object),Oe=new Object,xe=Object(i.useState)([]),ve=Object(s.a)(xe,2),_e=ve[0],pe=ve[1],ge=Object(i.useState)(),Ne=Object(s.a)(ge,2),Me=Ne[0],ye=Ne[1],De=Object(i.useState)(),ke=Object(s.a)(De,2),Se=ke[0],Ae=ke[1];Object(i.useEffect)((function(){Ee(je,he),Ye(je,he)}),[]),Object(i.useEffect)((function(){Ye(je,he)}),[Se]),Object(i.useEffect)((function(){$([]),Ee(je,he),Ye(je,he)}),[I]),Object(i.useEffect)((function(){var e;Object.keys(_e).map((function(e){fe[_e[e].slotDate]=_e[e].availabileTimes})),Object.keys(fe).map((function(t){e=[],fe[t].map((function(t){e.push(t.start)})),Oe[t]=e})),ye(Oe),Ae(Object.keys(Oe))}),[_e]),Object(i.useEffect)((function(){z([]),I.map((function(e){var t=[];ne.map((function(a){t.push({date:a,time:e})})),z((function(e){return[].concat(Object(c.a)(e),[t])}))}))}),[ne]),Object(i.useEffect)((function(){$([]),ae.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),$((function(e){return[].concat(Object(c.a)(e),[a])})))}))}),[ae]),Object(i.useEffect)((function(){var e=[],t=[];if(X.map((function(t,a){0!==t.length&&t.map((function(t,c){e.push(q[a][t])}))})),0!==e.length&&(t=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)}))),0!==t.length){var a={startDate:t[t.length-1].date,endDate:t[0].date,timeZone:"America/New_York",availabilitySlot:[{availableMode:Z,availableSlots:[t[0].time+"-"+r()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("hh:mm A")]}]};if(r()("".concat(null===a||void 0===a?void 0:a.startDate," ").concat(t[t.length-1].time)).isBefore(r()()))return ce(E),Ee(je,he),Object(g.Toast)({type:"error",message:"Cannot add slot at past"});l(a).then((function(){ce(E),Ee(je,he)})).catch((function(e){console.error("Error:",e)}))}}),[X]),Object(i.useEffect)((function(){}),[je]);var Ye=function(e,t){z([]);for(var a=e.clone(),s=[];a.isSameOrBefore(t);)s.push(a.format("YYYY-MM-DD")),a.add(1,"days");de(s),0===q.length&&I.map((function(e){var t=[];s.map((function(a){t.push({date:a,time:e})})),z((function(e){return[].concat(Object(c.a)(e),[t])}))}))},Ee=function(e,a){var c=e.format("YYYY-MM-DD"),s=a.format("YYYY-MM-DD");t(c,s,Z).then((function(e){var t=e.data;pe(t)}))};function we(e,t){a({date:e,mode:Z,blockedSlot:t,state:"BLOCK",timeZone:"America/New_York"}).then((function(){ce(E),Ee(je,he)})).catch((function(e){console.error("Error:",e)}))}var Te,Be,Ce=function(){p&&(Pe(),D(!p)),Y(!A)},Pe=function(){var e={startDate:je.format("YYYY-MM-DD"),endDate:he.format("YYYY-MM-DD"),defaultWeeks:2,mode:Z,timeZone:"America/New_York"};n(e).then((function(){Object(g.Toast)({type:"success",message:"Slot def blocked"}),ce(E),Ee(je,he)})).catch((function(e){console.error("Error:",e)}))};return 0===q.length?console.log("hitu"):(Te=Object(N.jsxs)(d.a,{value:ae,onChange:function(e){ce(e)},children:[Object(N.jsxs)("thead",{children:[Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("img",{src:I[7],style:{width:"30px",height:"30px"}}),Object(N.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"800",color:"#898989",margin:0,textAlign:"center"},children:[" ",I[6]]})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[0].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[1].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[2].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[3].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[4].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(N.jsxs)("td",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[5].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(N.jsxs)("td",{disabled:!0,style:{height:"120px"},children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[6].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[0]}),q[0].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[1]}),q[1].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[2]}),q[2].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[3]}),q[3].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[4]}),q[4].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[5]}),q[5].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,onClick:function(){return we(e.date,e.time)}}):Object(N.jsx)("td",{})}))]})]}),Be=Object(N.jsxs)("table",{className:"table2",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("img",{src:I[7],style:{width:"30px",height:"30px"}}),Object(N.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0,textAlign:"center"},children:[" ",I[6]]})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[0].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[1].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[2].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[3].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[4].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[5].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(N.jsxs)("th",{disabled:!0,children:[Object(N.jsx)("div",{className:"table_header_number",children:ne[6].slice(8,10)}),Object(N.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",style:{backgroundColor:"fff"},children:I[0]}),q[0].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[1]}),q[1].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[2]}),q[2].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[3]}),q[3].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[4]}),q[4].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]}),Object(N.jsxs)("tr",{style:{height:"70px"},children:[Object(N.jsx)("td",{disabled:!0,className:"slot_time",children:I[5]}),q[5].map((function(e){return 0!==Se.length&&Se.find((function(t){return t===e.date}))&&Me[e.date].find((function(t){return t===e.time}))?Object(N.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(N.jsx)("td",{})}))]})]})]})),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"outter_table_trainer",children:[Object(N.jsxs)("div",{className:"table_trainer",children:[Object(N.jsxs)("div",{className:"table_inner_trainer",children:[Object(N.jsxs)("div",{className:"table_date",children:["\u2002",r()(je.format("YYYY-MM-DD")).isAfter(r()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j.default,onClick:function(){ce(E),be(je.subtract(7,"days")),me(he.subtract(7,"days")),Ee(je,he),Ye(je,he)}})," \u2002"]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j.default,disabled:"true",style:{opacity:"0.5"}})," ","\u2002"]}),Object(N.jsxs)("div",{className:"date_week",children:[je.format("DD")," - ",he.format("DD")," \u2002",je.format("MMMM"),", ",je.format("yyyy")]}),Object(N.jsx)("img",{src:b.default,onClick:function(){ce(E),be(je.add(7,"days")),me(he.add(7,"days")),Ee(je,he),Ye(je,he)}})," \u2002 \u2002"]}),Object(N.jsx)("div",{className:"table_date",children:Object(N.jsx)(o.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:M,value:Z,onChange:function(e){V(e.value),"EarlyBird"===e.value&&W(w),"RiseAndShine"===e.value&&W(T),"MidDayBreak1"===e.value&&W(B),"MidDayBreak2"===e.value&&W(C),"HappyHours"===e.value&&W(P),"NeverTooLate"===e.value&&W(L)},name:"TimeSlot"})})]}),A?Object(N.jsx)("div",{style:{height:"100%",width:"960px"},children:Te}):Object(N.jsx)("div",{style:{height:"100%",width:"960px"},children:Be}),Object(N.jsx)("div",{className:"scheduler_button ".concat(A?"w-auto":""),children:A?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{type:"checkbox",id:"defualt",onChange:function(e){D(e.target.checked)},checked:p}),Object(N.jsxs)("label",{for:"defualt",style:{color:"#898989"},className:"default_label",children:[" ","Make defualt"]}),Object(N.jsxs)("button",{onClick:Ce,className:"scheduler_button",style:{backgroundColor:"#53d27d",width:"100%"},children:["SAVE ",Object(N.jsx)(u.default,{})]})]}):Object(N.jsxs)("button",{onClick:Ce,className:"scheduler_button",style:{backgroundColor:"#53bfd2",width:"100%"},children:["ADD YOUR SLOT ",Object(N.jsx)(u.default,{})]})})]}),Object(N.jsx)(y,{})]})})}));t.default=D},440:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},441:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},457:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},458:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},459:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},460:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},461:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},569:function(e,t,a){},601:function(e,t,a){}}]);