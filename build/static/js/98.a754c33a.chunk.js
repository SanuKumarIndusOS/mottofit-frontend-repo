(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[98,245,246],{238:function(e,t,a){"use strict";a.r(t);var c=a(556),n=a(5),s=a(2),i=a.n(s),d=a(794),l=a.n(d),r=(a(801),a(43)),o=a.n(r),j=a(363),b=a(364),u=(a(15),a(1));var h=function(){return Object(u.jsx)("div",{className:"schedular_slots",children:Object(u.jsxs)("div",{className:"items_slots",children:[Object(u.jsxs)("div",{className:"item_slot1",children:[Object(u.jsx)("div",{className:"indicator"}),Object(u.jsx)("h5",{children:"AVAILABLE"})]}),Object(u.jsxs)("div",{className:"item_slot2",children:[Object(u.jsx)("div",{className:"indicator2"}),Object(u.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(u.jsxs)("div",{className:"item_slot3",children:[Object(u.jsx)("div",{className:"indicator3"}),Object(u.jsx)("h5",{children:"YOUR SLOT"})," "]})]})})};t.default=function(){var e=i.a.useState(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],d=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],r=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM"],m=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM"],O=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM"],f=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM"],x=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM"],v=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM"],_=i.a.useState(r),N=Object(n.a)(_,2),g=N[0],M=N[1],p=i.a.useState("EarlyBird"),y=Object(n.a)(p,2),S=y[0],D=y[1],k=i.a.useState([]),A=Object(n.a)(k,2),E=A[0],P=A[1],B=i.a.useState([]),C=Object(n.a)(B,2),T=C[0],Y=C[1],H=i.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),w=Object(n.a)(H,2),L=w[0],R=w[1],U=i.a.useState([]),I=Object(n.a)(U,2),V=I[0],J=I[1],W=i.a.useState(o()().startOf("isoWeek")),z=Object(n.a)(W,2),F=z[0],G=z[1],K=i.a.useState(o()().endOf("isoWeek")),q=Object(n.a)(K,2),Q=q[0],X=q[1],Z=localStorage.getItem("token"),$=new Object,ee=new Object,te=i.a.useState([]),ae=Object(n.a)(te,2),ce=ae[0],ne=ae[1],se=i.a.useState(),ie=Object(n.a)(se,2),de=ie[0],le=ie[1],re=i.a.useState(),oe=Object(n.a)(re,2),je=oe[0],be=oe[1];i.a.useEffect((function(){he(F,Q),ue(F,Q),console.log(S)}),[]),i.a.useEffect((function(){ue(F,Q)}),[je]),i.a.useEffect((function(){Y([]),console.log("time changed"),he(F,Q),ue(F,Q)}),[g]),i.a.useEffect((function(){var e;Object.keys(ce).map((function(e){$[ce[e].slotDate]=ce[e].availabileTimes})),console.log($),Object.keys($).map((function(t){e=[],$[t].map((function(t){e.push(t.start)})),ee[t]=e})),le(ee),be(Object.keys(ee)),console.log(Object.keys(ee))}),[ce]),i.a.useEffect((function(){console.log(V),P([]),g.map((function(e){var t=[];V.map((function(a){t.push({date:a,time:e})})),P((function(e){return[].concat(Object(c.a)(e),[t])}))}))}),[V]),i.a.useEffect((function(){console.log("change",L,E),Y([]),L.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),Y((function(e){return[].concat(Object(c.a)(e),[a])})))}))}),[L]),i.a.useEffect((function(){console.log(T);var e=[],t=[];if(T.map((function(t,a){0!==t.length&&t.map((function(t,c){console.log(E[a][t]),e.push(E[a][t])}))})),0!==e.length&&(t=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),console.log(t)),0!==t.length){console.log(t[0].time+"-"+t[t.length-1].time);var a={startDate:t[t.length-1].date,endDate:t[0].date,availabilitySlot:[{availableMode:S,availableSlots:[t[0].time+"-"+o()(t[t.length-1].time,"HH:mm a").add(30,"minutes").format("hh:mm A")]}]};fetch("http://doodlebluelive.com:2307/v1/addTrainerSlot",{method:"POST",headers:{"Content-Type":"application/json",Authorization:Z},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),alert("Slot Added"),R(d),he(F,Q)})).catch((function(e){console.error("Error:",e)}))}}),[T]),i.a.useEffect((function(){}),[F]);var ue=function(e,t){P([]);for(var a=e.clone(),n=[];a.isSameOrBefore(t);)n.push(a.format("YYYY-MM-DD")),a.add(1,"days");J(n),0===E.length&&(console.log("0"),g.map((function(e){var t=[];n.map((function(a){t.push({date:a,time:e})})),P((function(e){return[].concat(Object(c.a)(e),[t])}))})))},he=function(e,t){var a=e.format("YYYY-MM-DD"),c=t.format("YYYY-MM-DD");console.log(a,c),console.log("http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate="+a+"&endDate="+c+"&timeBlock="+S),fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate="+a+"&endDate="+c+"&timeBlock="+S,{method:"GET",headers:{"Content-Type":"application/json",Authorization:Z}}).then((function(e){return e.json()})).then((function(e){ne(e.data)}))};function me(e,t){var a={date:e,mode:"EarlyBird",blockedSlot:t,state:"BLOCK"};fetch("http://doodlebluelive.com:2307/v1/block/trainerSlot",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:Z},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),R(d),he(F,Q)})).catch((function(e){console.error("Error:",e)}))}var Oe,fe,xe=function(){console.log("edit mode"),s(!a)};return 0===E.length?console.log("hitu"):(Oe=Object(u.jsxs)(l.a,{value:L,onChange:function(e){return R(e)},children:[Object(u.jsxs)("th",{children:[Object(u.jsx)("td",{disabled:!0}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[0].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[1].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[2].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[3].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[4].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[5].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[6].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[0]}),E[0].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(u.jsx)("td",{disabled:!0,onClick:function(){return me(e.date,e.time)}})):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[1]}),E[1].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,onClick:function(){return me(e.date,e.time)}}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[2]}),E[2].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,onClick:function(){return me(e.date,e.time)}}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[3]}),E[3].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,onClick:function(){return me(e.date,e.time)}}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[4]}),E[4].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,onClick:function(){return me(e.date,e.time)}}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[5]}),E[5].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,onClick:function(){return me(e.date,e.time)}}):Object(u.jsx)("td",{})}))]})]}),fe=Object(u.jsxs)("table",{value:L,onChange:function(e){return R(e)},className:"table2",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{disabled:!0}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[0].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[1].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[2].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[3].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[4].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[5].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(u.jsxs)("th",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:V[6].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",style:{backgroundColor:"fff"},children:g[0]}),E[0].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(u.jsx)("td",{disabled:!0,className:"avaiable_slot"})):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[1]}),E[1].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[2]}),E[2].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[3]}),E[3].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[4]}),E[4].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(u.jsx)("td",{})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"slot_time",children:g[5]}),E[5].map((function(e){return 0!==je.length&&je.find((function(t){return t===e.date}))&&de[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,className:"avaiable_slot"}):Object(u.jsx)("td",{})}))]})]})]})),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"outter_table_trainer",children:[Object(u.jsxs)("div",{className:"table_trainer",children:[Object(u.jsxs)("div",{className:"table_inner_trainer",children:[Object(u.jsxs)("div",{className:"table_date",children:[Object(u.jsx)("img",{src:j.default,onClick:function(){R(d),G(F.subtract(7,"days")),X(Q.subtract(7,"days")),console.log(F.format("DD/MM"),Q.format("DD/MM")),he(F,Q),ue(F,Q)}})," \u2002",Object(u.jsxs)("div",{className:"date_week",children:[F.format("DD")," -"," ",Q.format("DD")," \u2002",F.format("MMMM"),","," ",F.format("yyyy")]}),Object(u.jsx)("img",{src:b.default,onClick:function(){R(d),G(F.add(7,"days")),X(Q.add(7,"days")),console.log(F.format("DD/MM"),Q.format("DD/MM")),he(F,Q),ue(F,Q)}})," \u2002 \u2002"]}),Object(u.jsx)("div",{className:"table_date",children:Object(u.jsxs)("select",{value:S,onChange:function(e){D(e.target.value),console.log(e.target.value),"EarlyBird"===e.target.value&&(M(r),console.log("early_bird")),"RiseAndShine"===e.target.value&&(M(m),console.log("RiseAndShine")),"MidDayBreak1"===e.target.value&&(M(O),console.log("MidDayBreak")),"MidDayBreak2"===e.target.value&&(M(f),console.log("MidDayBreak2")),"HappyHours"===e.target.value&&(M(x),console.log("HappyHours")),"NeverTooLate"===e.target.value&&(M(v),console.log("NeverTooLate"))},children:[Object(u.jsx)("option",{value:"EarlyBird",children:"Early Bird"}),Object(u.jsx)("option",{value:"RiseAndShine",children:"Rise & Shine"}),Object(u.jsx)("option",{value:"MidDayBreak1",children:"Mid-Day Break"}),Object(u.jsx)("option",{value:"MidDayBreak2",children:"Mid-Day AfterNoon"}),Object(u.jsx)("option",{value:"HappyHours",children:"Happy Hour"}),Object(u.jsx)("option",{value:"NeverTooLate",children:"Never Too Late"})]})})]}),a?Object(u.jsxs)("div",{children:[" ",Oe," "]}):Object(u.jsxs)("div",{children:[" ",fe," "]}),Object(u.jsx)("div",{className:"scheduler_button",children:a?Object(u.jsx)("button",{onClick:xe,className:"scheduler_button",style:{backgroundColor:"#53bfd2",width:"100%"},children:"SAVE"}):Object(u.jsx)("button",{onClick:xe,className:"scheduler_button",style:{backgroundColor:"#53d27d",width:"100%"},children:"EDIT"})})]}),Object(u.jsx)(h,{})]})})}},363:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},364:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"}}]);
//# sourceMappingURL=98.a754c33a.chunk.js.map