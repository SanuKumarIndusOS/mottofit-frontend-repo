(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[91,183,276,277,301,302,303,304,305],{230:function(e,t,a){"use strict";a.r(t);var s=a(569),c=a(10),n=a(2),i=a.n(n),l=a(843),d=a.n(l),r=(a(850),a(32)),o=a.n(r),j=a(327),b=a(328),u=a(596),h=(a(449),a(398)),m=a(402),f=a(400),x=a(399),O=a(401),v=a(1),g=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];var p=function(){return Object(v.jsx)("div",{className:"schedular_slots",children:Object(v.jsxs)("div",{className:"items_slots",children:[Object(v.jsxs)("div",{className:"item_slot1",children:[Object(v.jsx)("div",{className:"indicator"}),Object(v.jsx)("h5",{children:"AVAILABLE"})]}),Object(v.jsxs)("div",{className:"item_slot2",children:[Object(v.jsx)("div",{className:"indicator2"}),Object(v.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(v.jsxs)("div",{className:"item_slot3",children:[Object(v.jsx)("div",{className:"indicator3"}),Object(v.jsx)("h5",{children:"BOOKED SLOT"})," "]})]})})};t.default=function(){var e=i.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],l=i.a.useState(!1),r=Object(c.a)(l,2),_=r[0],M=r[1],y=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],N=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",h.default],D=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",m.default],S=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",f.default],k=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",f.default],Y=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",x.default],A=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",O.default],B=i.a.useState(N),E=Object(c.a)(B,2),T=E[0],P=E[1],w=i.a.useState("EarlyBird"),C=Object(c.a)(w,2),H=C[0],L=C[1],R=i.a.useState([]),I=Object(c.a)(R,2),W=I[0],U=I[1],F=i.a.useState([]),J=Object(c.a)(F,2),V=J[0],z=J[1],K=i.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),G=Object(c.a)(K,2),Z=G[0],q=G[1],Q=i.a.useState([]),X=Object(c.a)(Q,2),$=X[0],ee=X[1],te=i.a.useState(o()().startOf("isoWeek")),ae=Object(c.a)(te,2),se=ae[0],ce=ae[1],ne=i.a.useState(o()().endOf("isoWeek")),ie=Object(c.a)(ne,2),le=ie[0],de=ie[1],re=localStorage.getItem("token"),oe=new Object,je=new Object,be=i.a.useState([]),ue=Object(c.a)(be,2),he=ue[0],me=ue[1],fe=i.a.useState(),xe=Object(c.a)(fe,2),Oe=xe[0],ve=xe[1],ge=i.a.useState(),pe=Object(c.a)(ge,2),_e=pe[0],Me=pe[1];i.a.useEffect((function(){Ne(se,le),ye(se,le),console.log(H)}),[]),i.a.useEffect((function(){ye(se,le)}),[_e]),i.a.useEffect((function(){z([]),console.log("time changed"),Ne(se,le),ye(se,le)}),[T]),i.a.useEffect((function(){var e;Object.keys(he).map((function(e){oe[he[e].slotDate]=he[e].availabileTimes})),console.log(oe),Object.keys(oe).map((function(t){e=[],oe[t].map((function(t){e.push(t.start)})),je[t]=e})),ve(je),Me(Object.keys(je)),console.log(Object.keys(je))}),[he]),i.a.useEffect((function(){console.log($),U([]),T.map((function(e){var t=[];$.map((function(a){t.push({date:a,time:e})})),U((function(e){return[].concat(Object(s.a)(e),[t])}))}))}),[$]),i.a.useEffect((function(){console.log("change",Z,W),z([]),Z.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),z((function(e){return[].concat(Object(s.a)(e),[a])})))}))}),[Z]),i.a.useEffect((function(){console.log(V);var e=[],t=[];if(V.map((function(t,a){0!==t.length&&t.map((function(t,s){console.log(W[a][t]),e.push(W[a][t])}))})),0!==e.length&&(t=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),console.log(t)),0!==t.length){console.log(t[0].time+"-"+t[t.length-1].time);var a={startDate:t[t.length-1].date,endDate:t[0].date,availabilitySlot:[{availableMode:H,availableSlots:[t[0].time+"-"+o()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("hh:mm A")]}]};fetch("http://doodlebluelive.com:2307/v1/addTrainerSlot",{method:"POST",headers:{"Content-Type":"application/json",Authorization:re},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),alert("Slot Added"),q(y),Ne(se,le)})).catch((function(e){console.error("Error:",e)}))}}),[V]),i.a.useEffect((function(){}),[se]);var ye=function(e,t){U([]);for(var a=e.clone(),c=[];a.isSameOrBefore(t);)c.push(a.format("YYYY-MM-DD")),a.add(1,"days");ee(c),0===W.length&&(console.log("0"),T.map((function(e){var t=[];c.map((function(a){t.push({date:a,time:e})})),U((function(e){return[].concat(Object(s.a)(e),[t])}))})))},Ne=function(e,t){var a=e.format("YYYY-MM-DD"),s=t.format("YYYY-MM-DD");console.log(a,s),console.log("http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate="+a+"&endDate="+s+"&timeBlock="+H),fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate="+a+"&endDate="+s+"&timeBlock="+H,{method:"GET",headers:{"Content-Type":"application/json",Authorization:re}}).then((function(e){return e.json()})).then((function(e){me(e.data)}))};function De(e,t){var a={date:e,mode:"EarlyBird",blockedSlot:t,state:"BLOCK"};fetch("http://doodlebluelive.com:2307/v1/block/trainerSlot",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:re},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),q(y),Ne(se,le)})).catch((function(e){console.error("Error:",e)}))}var Se,ke,Ye=function(){console.log("edit mode",a),a&&(Ae(),n(!a)),M(!_)},Ae=function(){console.log("clicked",se.format("YYYY-MM-DD"),le.format("YYYY-MM-DD"),H);var e={startDate:se.format("YYYY-MM-DD"),endDate:le.format("YYYY-MM-DD"),defaultWeeks:2,mode:H};console.log(e),fetch("http://doodlebluelive.com:2307/v1/slot/make-default",{method:"POST",headers:{"Content-Type":"application/json",Authorization:re},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),alert("Slot def blocked"),q(y),Ne(se,le)})).catch((function(e){console.error("Error:",e)}))};return 0===W.length?console.log("hitu"):(Se=Object(v.jsxs)(d.a,{value:Z,onChange:function(e){return q(e)},children:[Object(v.jsxs)("thead",{children:[Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("img",{src:T[7],style:{width:"30px",height:"30px"}}),Object(v.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"800",color:"#898989",margin:0},children:[" ",T[6]]})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[0].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[1].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[2].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[3].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[4].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(v.jsxs)("td",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[5].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(v.jsxs)("td",{disabled:!0,style:{height:"120px"},children:[Object(v.jsx)("div",{className:"table_header_number",children:$[6].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[0]}),W[0].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(v.jsx)("td",{disabled:!0,onClick:function(){return De(e.date,e.time)}})):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[1]}),W[1].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return De(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[2]}),W[2].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return De(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[3]}),W[3].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return De(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[4]}),W[4].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return De(e.date,e.time)}}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[5]}),W[5].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,onClick:function(){return De(e.date,e.time)}}):Object(v.jsx)("td",{})}))]})]}),ke=Object(v.jsxs)("table",{className:"table2",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("img",{src:T[7],style:{width:"30px",height:"30px"}}),Object(v.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"800",color:"#898989",margin:0},children:[" ",T[6]]})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[0].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[1].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[2].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[3].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[4].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[5].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(v.jsxs)("th",{disabled:!0,children:[Object(v.jsx)("div",{className:"table_header_number",children:$[6].slice(8,10)}),Object(v.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",style:{backgroundColor:"fff"},children:T[0]}),W[0].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"})):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[1]}),W[1].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[2]}),W[2].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[3]}),W[3].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[4]}),W[4].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]}),Object(v.jsxs)("tr",{style:{height:"70px"},children:[Object(v.jsx)("td",{disabled:!0,className:"slot_time",children:T[5]}),W[5].map((function(e){return 0!==_e.length&&_e.find((function(t){return t===e.date}))&&Oe[e.date].find((function(t){return t===e.time}))?Object(v.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(v.jsx)("td",{})}))]})]})]})),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"outter_table_trainer",children:[Object(v.jsxs)("div",{className:"table_trainer",children:[Object(v.jsxs)("div",{className:"table_inner_trainer",children:[Object(v.jsxs)("div",{className:"table_date",children:["\u2002",o()(se.format("YYYY-MM-DD")).isAfter(o()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:j.default,onClick:function(){q(y),ce(se.subtract(7,"days")),de(le.subtract(7,"days")),console.log(se.format("DD/MM"),le.format("DD/MM")),Ne(se,le),ye(se,le)}})," ","\u2002"]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:j.default,disabled:"true",style:{opacity:"0.5"}})," ","\u2002"]}),Object(v.jsxs)("div",{className:"date_week",children:[se.format("DD")," -"," ",le.format("DD")," \u2002",se.format("MMMM"),","," ",se.format("yyyy")]}),Object(v.jsx)("img",{src:b.default,onClick:function(){q(y),ce(se.add(7,"days")),de(le.add(7,"days")),console.log(se.format("DD/MM"),le.format("DD/MM")),Ne(se,le),ye(se,le)}})," \u2002 \u2002"]}),Object(v.jsx)("div",{className:"table_date",children:Object(v.jsx)(u.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:g,value:H,onChange:function(e){L(e.value),console.log(e.value),"EarlyBird"===e.value&&(P(N),console.log("early_bird")),"RiseAndShine"===e.value&&(P(D),console.log("RiseAndShine")),"MidDayBreak1"===e.value&&(P(S),console.log("MidDayBreak")),"MidDayBreak2"===e.value&&(P(k),console.log("MidDayBreak2")),"HappyHours"===e.value&&(P(Y),console.log("HappyHours")),"NeverTooLate"===e.value&&(P(A),console.log("NeverTooLate"))},name:"TimeSlot"})})]}),_?Object(v.jsxs)("div",{style:{height:"530px",width:"960px"},children:[" ",Se," "]}):Object(v.jsxs)("div",{style:{height:"530px",width:"960px"},children:[" ",ke," "]}),Object(v.jsx)("div",{className:"scheduler_button",children:_?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{type:"checkbox",id:"defualt",onChange:function(e){n(e.target.checked)},checked:a}),Object(v.jsxs)("label",{for:"defualt",style:{color:"#898989"},className:"default_label",children:[" ","Make defualt"]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{onClick:Ye,className:"scheduler_button",style:{backgroundColor:"#53d27d",width:"100%"},children:"SAVE"})]}):Object(v.jsx)("button",{onClick:Ye,className:"scheduler_button",style:{backgroundColor:"#53bfd2",width:"100%"},children:"ADD YOUR SLOT"})})]}),Object(v.jsx)(p,{})]})})}},327:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},328:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},398:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},399:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},400:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},401:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},402:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},449:function(e,t,a){}}]);
//# sourceMappingURL=91.68a5b0c4.chunk.js.map