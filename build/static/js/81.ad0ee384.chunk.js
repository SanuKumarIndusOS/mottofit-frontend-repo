(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[81,62,93,151,230,231],{138:function(e,t,c){"use strict";c.r(t);c(2),c(442);var n=c(1);t.default=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"schedule_main",children:[Object(n.jsxs)("div",{className:"schedule_heading",children:[Object(n.jsx)("h1",{children:"My Schedule"}),Object(n.jsxs)("div",{className:"dates",children:[Object(n.jsx)("a",{href:"#",children:"Day"}),Object(n.jsx)("a",{href:"#",children:"Week"}),Object(n.jsx)("a",{href:"#",children:"Month"})]})]}),Object(n.jsx)("div",{className:"schedule_wrapper",children:Object(n.jsx)("div",{className:"eventCalender",children:Object(n.jsx)("h1",{children:"Event Calender, IN PENDING "})})})]})})})}},255:function(e,t,c){"use strict";c.r(t);var n=c(563),a=c(6),s=c(2),i=c.n(s),d=c(799),l=c.n(d),r=(c(806),c(46)),o=c.n(r),j=c(383),b=c(384),h=c(15),u=c(1);var f=function(){return Object(u.jsxs)("div",{className:"schedular_slots",children:[Object(u.jsxs)("div",{className:"items_slots",children:[Object(u.jsxs)("div",{className:"item_slot1",children:[Object(u.jsx)("div",{className:"indicator"}),Object(u.jsx)("h5",{children:"AVAILABLE"})]}),Object(u.jsxs)("div",{className:"item_slot2",children:[Object(u.jsx)("div",{className:"indicator2"}),Object(u.jsx)("h5",{children:"UNAVAILABLE"})," "]}),Object(u.jsxs)("div",{className:"item_slot3",children:[Object(u.jsx)("div",{className:"indicator3"}),Object(u.jsx)("h5",{children:"YOUR SLOT"})," "]})]}),Object(u.jsx)("div",{className:"items_slot_button",children:Object(u.jsxs)("button",{children:["BOOK A SESSION ",Object(u.jsx)(h.default,{})]})})]})};t.default=function(){var e=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],t=["05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM"],c=i.a.useState([]),s=Object(a.a)(c,2),d=s[0],r=s[1],h=i.a.useState([]),m=Object(a.a)(h,2),O=m[0],x=m[1],v=i.a.useState([[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]]),_=Object(a.a)(v,2),N=_[0],g=_[1],p=i.a.useState([]),M=Object(a.a)(p,2),D=M[0],S=M[1],A=i.a.useState(o()().startOf("isoWeek")),y=Object(a.a)(A,2),E=y[0],w=y[1],k=i.a.useState(o()().endOf("isoWeek")),Y=Object(a.a)(k,2),T=Y[0],B=Y[1],C=localStorage.getItem("token"),I=new Object,L=new Object,U=i.a.useState([]),R=Object(a.a)(U,2),W=R[0],J=R[1],V=i.a.useState(),z=Object(a.a)(V,2),F=z[0],G=z[1],H=i.a.useState(),P=Object(a.a)(H,2),K=P[0],q=P[1];i.a.useEffect((function(){Z(E,T),X(E,T)}),[]),i.a.useEffect((function(){X(E,T)}),[K]),i.a.useEffect((function(){var e;Object.keys(W).map((function(e){I[W[e].slotDate]=W[e].availabileTimes})),console.log(I),Object.keys(I).map((function(t){e=[],I[t].map((function(t){e.push(t.end),e.push(t.start)})),L[t]=e})),G(L),q(Object.keys(L)),console.log(Object.keys(L))}),[W]),i.a.useEffect((function(){console.log(D),r([]),t.map((function(e){var t=[];D.map((function(c){t.push({date:c,time:e})})),r((function(e){return[].concat(Object(n.a)(e),[t])}))}))}),[D]),i.a.useEffect((function(){console.log("change",N,d),x([]),N.map((function(e,t){var c=[];0!==t&&(e.map((function(e,t){!0===e&&c.push(t-1)})),x((function(e){return[].concat(Object(n.a)(e),[c])})))}))}),[N]),i.a.useEffect((function(){console.log(O);var t=[],c=[];if(O.map((function(e,c){0!==e.length&&e.map((function(e,n){console.log(d[c][e]),t.push(d[c][e])}))})),0!==t.length&&(c=t.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),console.log(c)),1===t.length)alert("Select more than Half an hour"),g(e);else if(0!==c.length){console.log(c[0].time+"-"+c[c.length-1].time);var n={startDate:c[c.length-1].date,endDate:c[0].date,availabilitySlot:[{availableMode:"EarlyBird",availableSlots:[c[0].time+"-"+c[c.length-1].time]}]};fetch("http://doodlebluelive.com:2307/v1/addTrainerSlot",{method:"POST",headers:{"Content-Type":"application/json",Authorization:C},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),alert("Slot Added"),Z(E,T)})).catch((function(e){console.error("Error:",e)}))}}),[O]),i.a.useEffect((function(){}),[E]);var Q,X=function(e,c){r([]);for(var a=e.clone(),s=[];a.isSameOrBefore(c);)s.push(a.format("YYYY-MM-DD")),a.add(1,"days");S(s),0===d.length&&(console.log("0"),t.map((function(e){var t=[];s.map((function(c){t.push({date:c,time:e})})),r((function(e){return[].concat(Object(n.a)(e),[t])}))})))},Z=function(e,t){var c=e.format("YYYY-MM-DD"),n=t.format("YYYY-MM-DD");console.log(c,n),fetch("http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate="+c+"&endDate="+n+"&timeBlock=EarlyBird",{method:"GET",headers:{"Content-Type":"application/json",Authorization:C}}).then((function(e){return e.json()})).then((function(e){J(e.data)}))};return 0===d.length?console.log("hitu"):Q=Object(u.jsxs)(l.a,{value:N,onChange:function(e){return g(e)},children:[Object(u.jsxs)("th",{children:[Object(u.jsx)("td",{disabled:!0}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[0].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"MON"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[1].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"TUES"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[2].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"WED"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[3].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"THURS"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[4].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"FRI"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[5].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"SAT"})]}),Object(u.jsxs)("td",{disabled:!0,children:[Object(u.jsx)("div",{className:"table_header_number",children:D[6].slice(8,10)}),Object(u.jsx)("div",{className:"table_header_txt",children:"SUN"})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"time_show",children:"5:00 AM"}),d[0].map((function(e){return 0!==K.length&&K.find((function(t){return t===e.date}))&&F[e.date].find((function(t){return t===e.time}))?(console.log(e.time),Object(u.jsx)("td",{disabled:!0,children:e.time})):Object(u.jsx)("td",{children:e.date})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"time_show",children:"5:30 AM"}),d[1].map((function(e){return 0!==K.length&&K.find((function(t){return t===e.date}))&&F[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,children:e.time}):Object(u.jsx)("td",{children:e.date})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"time_show",children:"6:00 AM"}),d[2].map((function(e){return 0!==K.length&&K.find((function(t){return t===e.date}))&&F[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,children:e.time}):Object(u.jsx)("td",{children:e.date})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"time_show",children:"6:30 AM"}),d[3].map((function(e){return 0!==K.length&&K.find((function(t){return t===e.date}))&&F[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,children:e.time}):Object(u.jsx)("td",{children:e.date})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"time_show",children:"7:00 AM"}),d[4].map((function(e){return 0!==K.length&&K.find((function(t){return t===e.date}))&&F[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,children:e.time}):Object(u.jsx)("td",{children:e.date})}))]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{disabled:!0,className:"time_show",children:"7:30 AM"}),d[5].map((function(e){return 0!==K.length&&K.find((function(t){return t===e.date}))&&F[e.date].find((function(t){return t===e.time}))?Object(u.jsx)("td",{disabled:!0,children:e.time}):Object(u.jsx)("td",{children:e.date})}))]})]}),Object(u.jsxs)("div",{className:"table_trainer",children:[Object(u.jsxs)("div",{className:"table_inner_trainer",children:[Object(u.jsx)("img",{src:j.default,onClick:function(){g(e),w(E.subtract(7,"days")),B(T.subtract(7,"days")),console.log(E.format("DD/MM"),T.format("DD/MM")),Z(E,T),X(E,T)}})," \u2002",Object(u.jsxs)("div",{className:"date_week",children:[E.format("DD")," - ",T.format("DD")," \u2002",E.format("MMMM"),", ",E.format("yyyy")]}),Object(u.jsx)("img",{src:b.default,onClick:function(){g(e),w(E.add(7,"days")),B(T.add(7,"days")),console.log(E.format("DD/MM"),T.format("DD/MM")),Z(E,T),X(E,T)}})," \u2002 \u2002"]}),Q,Object(u.jsx)(f,{})]})}},275:function(e,t,c){"use strict";c.r(t);c(138);var n=c(255),a=(c(2),c(1));t.default=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(n.default,{})})}},383:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Left Button.0b9d3a76.svg"},384:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Right Button.648b272c.svg"},442:function(e,t,c){}}]);
//# sourceMappingURL=81.ad0ee384.chunk.js.map