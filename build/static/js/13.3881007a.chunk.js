(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[13,81,90,203,204,210,261,277,278,302,303,304,305,306,351],{148:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(2),i=a.n(c),s=(a(497),a(373)),r=a(307),l=a(5),d=a(68),o=a(222),u=a(8),j=a(1),f=function(e){var t=e.trainerName;return Object(j.jsx)("div",{className:"schedular_slots_user",children:Object(j.jsxs)("div",{className:"items_slots",children:[Object(j.jsxs)("div",{className:"item_slot1",children:[Object(j.jsx)("div",{className:"indicator"}),Object(j.jsx)("h5",{children:"AVAILABLE"})]}),Object(j.jsxs)("div",{className:"item_slot2",children:[Object(j.jsx)("div",{className:"indicator2"}),Object(j.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(j.jsxs)("div",{className:"item_slot3",children:[Object(j.jsx)("div",{className:"indicator3"}),Object(j.jsx)("h5",{children:"BOOKED SLOT"})," "]}),Object(j.jsx)("div",{className:"item_slot5",children:Object(j.jsxs)(l.a,{to:"/trainer/profile/".concat(t.id),children:["Learn more about ",t.firstName]})})]})})};t.default=function(){var e=i.a.useState(""),t=Object(n.a)(e,2),a=t[0],c=t[1],b=i.a.useState("Boxing"),m=Object(n.a)(b,2),h=m[0],O=(m[1],i.a.useState()),x=Object(n.a)(O,2),v=x[0],p=x[1],y=i.a.useState(),_=Object(n.a)(y,2),M=_[0],g=_[1],N=i.a.useState(),k=Object(n.a)(N,2),D=k[0],S=k[1];console.log(a,"trainerName"),i.a.useEffect((function(){c(Y.state.trainerData),console.log(Y.state.trainerData),console.log(localStorage.getItem("trainertime"),"ee")}),[]);var Y=Object(u.g)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"event_outter_container",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"event_inner_container",children:[Object(j.jsxs)("div",{className:"link_wrapper",children:[Object(j.jsx)("img",{src:r.default,alt:"icon"}),Object(j.jsxs)("div",{className:"inner_links",children:[Object(j.jsx)(l.a,{to:"/trainer/find",children:"Choose another Trainer"}),Object(j.jsx)("div",{})]})]}),Object(j.jsx)("div",{className:"event_wrapper",children:Object(j.jsxs)("div",{className:"event_wrapper_inner",children:[Object(j.jsxs)("div",{className:"event_header",children:[Object(j.jsx)("h2",{children:"Schedule your Training Time"}),Object(j.jsx)("p",{children:"Please select a preferable date and time slot to schedule your training session. All the listed timings are in your local timezone (GMT + 5:30)"})]}),Object(j.jsxs)("div",{className:"user_profile_details",children:[Object(j.jsx)("img",{src:s.default,alt:"profile",style:{objectFit:"cover"}}),Object(j.jsxs)("div",{className:"user_content",children:[Object(j.jsx)("h2",{style:{textTransform:"capitalize",fontFamily:"Cormorant Garamond"},children:a.firstName}),Object(j.jsx)("p",{style:{color:"#898989",fontFamily:"Montserrat",textTransform:"uppercase"},children:h})]})]}),Object(j.jsx)(o.default,{id:Y.state.trainerId,parentCallback:function(e,t,a){console.log(e,t,"Callback"),p(e),g(t),S(a)}}),Object(j.jsx)(f,{trainerName:a}),Object(j.jsxs)(l.a,{to:{pathname:"/user/session-type",state:{slotDetails:{Name:a,start_slot:v,end_slot:M,date:D,activity:h,id:Y.state.trainerId}}},style:{marginBottom:"500px"},children:["CONTINUE ",Object(j.jsx)(d.default,{})," "]})]})})]})})})})}},222:function(e,t,a){"use strict";a.r(t);var n=a(570),c=a(10),i=a(2),s=a.n(i),r=a(32),l=a.n(r),d=a(326),o=a(327),u=(a(380),a(589)),j=(a(381),a(13),a(341)),f=a(345),b=a(343),m=a(342),h=a(344),O=a(1),x=[{label:"Early Bird",value:"EarlyBird"},{label:"Rise & Shine",value:"RiseAndShine"},{label:"Mid-Day Break",value:"MidDayBreak1"},{label:"Mid-Day Lunchtime",value:"MidDayBreak2"},{label:"Happy Hour",value:"HappyHours"},{label:"Never Too Late",value:"NeverTooLate"}];t.default=function(e){var t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","Early Bird",j.default],a=["08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","Rise & Shine",f.default],i=["11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","Mid-Day Break",b.default],r=["02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","Mid-Day Lunchtime",b.default],v=["05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","Happy Hour",m.default],p=["08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","Never Too Late",h.default],y=s.a.useState(t),_=Object(c.a)(y,2),M=_[0],g=_[1],N=s.a.useState("EarlyBird"),k=Object(c.a)(N,2),D=k[0],S=k[1],Y=s.a.useState([]),A=Object(c.a)(Y,2),C=A[0],B=A[1],P=s.a.useState([]),T=Object(c.a)(P,2),E=(T[0],T[1]),w=s.a.useState([]),I=Object(c.a)(w,2),L=I[0],H=I[1],R=s.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),F=Object(c.a)(R,2),W=F[0],U=(F[1],s.a.useState([])),z=Object(c.a)(U,2),G=z[0],V=z[1],J=s.a.useState(l()().startOf("isoWeek")),K=Object(c.a)(J,2),Z=K[0],q=K[1],Q=s.a.useState(l()().endOf("isoWeek")),X=Object(c.a)(Q,2),$=X[0],ee=X[1],te=localStorage.getItem("token"),ae=new Object,ne=new Object,ce=s.a.useState([]),ie=Object(c.a)(ce,2),se=ie[0],re=ie[1],le=s.a.useState(),de=Object(c.a)(le,2),oe=de[0],ue=de[1],je=s.a.useState(),fe=Object(c.a)(je,2),be=fe[0],me=fe[1];s.a.useEffect((function(){ve(Z,$),he(Z,$)}),[]),s.a.useEffect((function(){E([]),ve(Z,$),he(Z,$)}),[M]),s.a.useEffect((function(){var e;Object.keys(se).map((function(e){ae[se[e].slotDate]=se[e].availabileTimes})),Object.keys(ae).map((function(t){e=[],ae[t].map((function(t){e.push(t.start)})),ne[t]=e})),ue(ne),me(Object.keys(ne))}),[se]),s.a.useEffect((function(){B([]),M.map((function(e){var t=[];G.map((function(a){t.push({date:a,time:e})})),B((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[G]),s.a.useEffect((function(){E([]),W.map((function(e,t){var a=[];0!==t&&(e.map((function(e,t){!0===e&&a.push(t-1)})),E((function(e){return[].concat(Object(n.a)(e),[a])})))}))}),[W]),s.a.useEffect((function(){}),[Z]);var he=function(e,t){B([]);for(var a=e.clone(),c=[];a.isSameOrBefore(t);)c.push(a.format("YYYY-MM-DD")),a.add(1,"days");V(c),0===C.length&&M.map((function(e){var t=[];c.map((function(a){t.push({date:a,time:e})})),B((function(e){return[].concat(Object(n.a)(e),[t])}))}))};function Oe(t,a){var n=[],c=oe[t];n.push(a+t);var i,s=l()(a,"hh:mm A").add(30,"minutes").format("hh:mm A"),r=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").valueOf();if(c.find((function(e){return e===s})))n.push(s+t),i=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(60,"minutes").valueOf(),e.parentCallback(r,i,t);else{var d=l()(s,"hh:mm A").subtract(60,"minutes").format("hh:mm A");n.push(d+t),i=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").subtract(30,"minutes").valueOf(),r=l()("".concat(t," ").concat(a),"YYYY-MM-DD hh:mm").add(30,"minutes").valueOf(),e.parentCallback(i,r,t)}H(n)}s.a.useEffect((function(){he(Z,$)}),[L]);var xe,ve=function(t,a){var n=t.format("YYYY-MM-DD"),c=a.format("YYYY-MM-DD");fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?trainerId="+e.id+"&startDate="+n+"&endDate="+c+"&timeBlock="+D,{method:"GET",headers:{"Content-Type":"application/json",Authorization:te}}).then((function(e){return e.json()})).then((function(e){re(e.data)}))};return 0===C.length||(xe=Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{style:{height:"70px"},children:[Object(O.jsx)("img",{src:M[7],style:{width:"30px",height:"30px"}}),Object(O.jsxs)("h6",{style:{wordWrap:"break-word",lineHeight:"18px",paddingLeft:"0.5em",paddingRight:"0.5em",paddingBottom:"0em",fontFamily:"Montserrat",fontWeight:"600",color:"#898989",margin:0},children:[" ",M[6]]})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[0].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[1].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[2].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[3].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[4].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[5].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(O.jsxs)("th",{children:[Object(O.jsx)("div",{className:"table_header_number",children:G[6].slice(8,10)}),Object(O.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"user_time_slot",children:M[0]}),C[0].map((function(e){return 0!==be.length&&be.find((function(t){return t===e.date}))&&oe[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(O.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot",children:e.time}):Object(O.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{})}))]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"user_time_slot",children:M[1]}),C[1].map((function(e){return 0!==be.length&&be.find((function(t){return t===e.date}))&&oe[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(O.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)},className:"avaiable_slot"}):Object(O.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{})}))]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"user_time_slot",children:M[2]}),C[2].map((function(e){return 0!==be.length&&be.find((function(t){return t===e.date}))&&oe[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(O.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{})}))]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"user_time_slot",children:M[3]}),C[3].map((function(e){return 0!==be.length&&be.find((function(t){return t===e.date}))&&oe[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(O.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{})}))]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"user_time_slot",children:M[4]}),C[4].map((function(e){return 0!==be.length&&be.find((function(t){return t===e.date}))&&oe[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(O.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{})}))]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"user_time_slot",children:M[5]}),C[5].map((function(e){return 0!==be.length&&be.find((function(t){return t===e.date}))&&oe[e.date].find((function(t){return t===e.time}))?L.find((function(t){return t===e.time+e.date}))?Object(O.jsx)("td",{style:{backgroundColor:"#53bfd2"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{style:{backgroundColor:"#fff"},onClick:function(){return Oe(e.date,e.time)}}):Object(O.jsx)("td",{})}))]})]})]})),Object(O.jsxs)("div",{className:"outter_table_user",children:[Object(O.jsx)("div",{className:"table_user",children:Object(O.jsxs)("div",{className:"table_inner_trainer",children:[Object(O.jsxs)("div",{className:"table_date",children:[l()(Z.format("YYYY-MM-DD")).isAfter(l()().startOf("isoWeek").format("YYYY-MM-DD"),"day")?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:d.default,onClick:function(){q(Z.subtract(7,"days")),ee($.subtract(7,"days")),ve(Z,$),he(Z,$)},style:{cursor:"pointer"}})," ","\u2002"]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:d.default,disabled:"true",style:{opacity:"0.5",cursor:"not-allowed"}})," ","\u2002"]}),"\u2002",Object(O.jsxs)("div",{className:"date_week",children:[Z.format("DD")," - ",$.format("DD")," ","\u2002",Z.format("MMMM")," \u2002"," ",Z.format("yyyy")," "]}),Object(O.jsx)("img",{src:o.default,onClick:function(){q(Z.add(7,"days")),ee($.add(7,"days")),ve(Z,$),he(Z,$)},style:{cursor:"pointer"}})," ","\u2002 \u2002"]}),Object(O.jsx)(u.Dropdown,{className:"custom_dropdown",title:"Select Time Zone",list:x,value:D,onChange:function(e){S(e.value),console.log(e.value),"EarlyBird"===e.value&&(g(t),console.log("early_bird")),"RiseAndShine"===e.value&&(g(a),console.log("RiseAndShine")),"MidDayBreak1"===e.value&&(g(i),console.log("MidDayBreak")),"MidDayBreak2"===e.value&&(g(r),console.log("MidDayBreak2")),"HappyHours"===e.value&&(g(v),console.log("HappyHours")),"NeverTooLate"===e.value&&(g(p),console.log("NeverTooLate"))},name:"TimeSlot"})]})}),Object(O.jsx)("br",{}),xe]})}},307:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},326:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Left Button.0b9d3a76.svg"},327:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Right Button.648b272c.svg"},341:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/EarlyBird_Inactive.8646c23c.svg"},342:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/HappyHour_Inactive.bef73318.svg"},343:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Mid-DayBreak_Inactive.edab2351.svg"},344:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/NeverTooLate_Inactive.0ac0364d.svg"},345:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Rise_Shine_Inactive.fb11fce5.svg"},373:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Profile Picture.ca592372.png"},380:function(e,t,a){},381:function(e,t,a){},497:function(e,t,a){},570:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(98);var c=a(70);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=13.3881007a.chunk.js.map