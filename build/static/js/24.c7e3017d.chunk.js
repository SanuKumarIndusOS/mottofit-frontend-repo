(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[24,269,307,324,393,394,395],{187:function(e,n,i){"use strict";i.r(n);var o=i(11),l=i(2),s=i.n(l),t=i(8),a=i(751),c=(i(622),i(795)),r=(i(792),i(606)),d=i(605),u=i(604),v=i(91),j=i(487),b=i(424),p=i(244),O=(i(299),i(127)),h=i(23),m=i(27),f=i(40),x=(i(66),i(5)),y=i(18),N=i(1),g=[{label:"Boxing",value:"Boxing"},{label:"Pilates",value:"Pilates"},{label:"Strength & HIIT",value:"Strength & HIIT"},{label:"Yoga",value:"Yoga"}],S=[{value:"New York City",label:"New York"},{value:"Miami",label:"Miami"},{value:"Hamptons",label:"Hampton"},{value:"Palm Beach",label:"Palm Beach"}],P=[{value:"trainerLocation",label:"Trainer's Location"},{value:"clientLocation",label:"Your Location"}],_=Object(N.jsx)("img",{src:O.default,alt:"close"}),C=Object(m.b)((function(e){return{sessionData:e.userReducer.sessionData,queryObject:e.trainerReducer.query,selectedTrainerData:e.userReducer.selectedTrainerData}}),(function(e){return Object(h.b)({updateUserDetails:f.updateUserDetails},e)}))((function(e){var n,i,h,m,f,C,L,T,w,A,I,k,R,E,F,D,Y,B,M,U,$,G,K,q,H,V,W,z=e.updateUserDetails,J=(e.sessionData,e.queryObject),Q=e.selectedTrainerData,X=Object(l.useState)([]),Z=Object(o.a)(X,2),ee=Z[0],ne=Z[1],ie=Object(l.useState)(""),oe=Object(o.a)(ie,2),le=oe[0],se=oe[1],te=Object(l.useState)([]),ae=Object(o.a)(te,2),ce=ae[0],re=ae[1],de=Object(l.useState)({value:"clientLocation",label:"Your Location"}),ue=Object(o.a)(de,2),ve=ue[0],je=ue[1],be=Object(l.useState)(""),pe=Object(o.a)(be,2),Oe=pe[0],he=pe[1],me=Object(l.useState)(!1),fe=Object(o.a)(me,2),xe=fe[0],ye=fe[1],Ne=Object(l.useState)(!1),ge=Object(o.a)(Ne,2),Se=ge[0],Pe=ge[1],_e=Object(l.useRef)(null),Ce=Object(l.useState)(!1),Le=Object(o.a)(Ce,2);Le[0],Le[1],Object(y.g)();s.a.useEffect((function(){localStorage.getItem("token")||(x.history.push("/mobile/login"),x.history.push("?".concat(encodeURIComponent("nextpath=/user/session-type"))));var e=(null===Q||void 0===Q?void 0:Q.trainerData)||Q;if(!(null===e||void 0===e?void 0:e.id))return x.history.push("/trainer/find");1===(null===e||void 0===e?void 0:e.preferedTrainingMode.length)?he(null===e||void 0===e?void 0:e.preferedTrainingMode[0]):he(null===J||void 0===J?void 0:J.location);var n=S.filter((function(e){return e.value===(null===J||void 0===J?void 0:J.city)}))[0],i=g.filter((function(e){var n;return e.value===((null===J||void 0===J||null===(n=J.trainingType)||void 0===n?void 0:n.value)||(null===J||void 0===J?void 0:J.trainingType))}))[0];(null===n||void 0===n?void 0:n.value)&&ne(n),(null===i||void 0===i?void 0:i.value)&&se(i);var o=e.servicableLocation,l=void 0===o?[]:o,s=e.areaOfExpertise,t=void 0===s?[]:s,a=(null===e||void 0===e?void 0:e.oneOnOnePricing)||{},c=a.inPersonAtClientLocation,r=void 0===c?"":c,d=a.inPersonAtTrainerLocation,u=void 0===d?"":d,v=a.virtualSession,j=void 0===v?"":v,b=e.socialSessionPricing||{},p=b.virtualSessionfor2People,O=void 0===p?"":p,h=b.virtualSessionfor3People,m=void 0===h?"":h,f=b.virtualSessionfor4People,y=void 0===f?"":f,N=b.inPeronAtClientLocationfor2People,_=void 0===N?"":N,C=b.inPeronAtClientLocationfor3People,L=void 0===C?"":C,T=b.inPeronAtClientLocationfor4People,w=void 0===T?"":T,A=b.inPeronAtTrainerLocationfor2People,I=void 0===A?"":A,k=b.inPeronAtTrainerLocationfor3People,R=void 0===k?"":k,E=b.inPeronAtTrainerLocationfor4People,F=void 0===E?"":E,D=e.classSessionPricing||{},Y=D.virtualSessionfor15People,B=void 0===Y?"":Y,M=D.inPersonAtclientLocationfor15People,U=void 0===M?"":M,$=D.inPersonAttrainerLocationfor15People,G=void 0===$?"":$,K=[j,O,m,y,B].some((function(e){return""!==e&&parseFloat(e)>0})),q=[r,_,L,w,U].some((function(e){return""!==e&&parseFloat(e)>0})),H=[u,I,R,F,G].some((function(e){return""!==e&&parseFloat(e)>0}));(null===l||void 0===l?void 0:l.length)>0&&(S="string"===typeof l?[{label:l,value:l}]:null===l||void 0===l?void 0:l.map((function(e){return{label:e,value:e}}))),(null===t||void 0===t?void 0:t.length)>0&&(g="string"===typeof t?[{label:t,value:t}]:null===t||void 0===t?void 0:t.map((function(e){return{label:e,value:e}}))),1===l.length&&ne(S[0]),1===t.length&&se(g[0]),q||H&&(null===e||void 0===e?void 0:e.trainingFacility)&&je({value:"trainerLocation",label:"Trainer's Location"}),P=[],H&&(null===e||void 0===e?void 0:e.trainingFacility)&&P.push({value:"trainerLocation",label:"Trainer's Location"}),q&&(null===e||void 0===e?void 0:e.willingToTravel)?P.push({value:"clientLocation",label:"Your Location"}):je({value:"trainerLocation",label:"Trainer's Location"}),K||he("inPerson");var V=[];K&&V.push("virtual"),(q||H)&&V.push("inPerson"),re(V),window.scrollTo(0,0)}),[]);var Te=function(e,n){z({sessionData:{location:ee,trainingVenue:ve,preferedTrainingMode:Oe,price:e,sessionType:n,trainingType:le}}),x.history.push({pathname:"/user/payment"})},we=!1;"virtual"===Oe&&(we=null===le||void 0===le?void 0:le.value),"inPerson"===Oe&&(we=(null===le||void 0===le?void 0:le.value)&&(null===ee||void 0===ee?void 0:ee.value)&&(null===ve||void 0===ve?void 0:ve.value));var Ae=(null===Q||void 0===Q?void 0:Q.trainerData)||Q,Ie=null===ce||void 0===ce?void 0:ce.includes("virtual"),ke=null===ce||void 0===ce?void 0:ce.includes("inPerson"),Re=function(){var e=(null===Q||void 0===Q?void 0:Q.trainerData)||Q,n=(null===e||void 0===e?void 0:e.oneOnOnePricing)||{},i=n.virtualSession,o=void 0===i?"":i,l=n.inPersonAtClientLocation,s=void 0===l?"":l,t=n.inPersonAtTrainerLocation,a=void 0===t?"":t,c=e.socialSessionPricing||{},r=c.virtualSessionfor2People,d=void 0===r?"":r,u=c.virtualSessionfor3People,v=void 0===u?"":u,j=c.virtualSessionfor4People,b=void 0===j?"":j,p=c.inPeronAtClientLocationfor2People,O=void 0===p?"":p,h=c.inPeronAtClientLocationfor3People,m=void 0===h?"":h,f=c.inPeronAtClientLocationfor4People,x=void 0===f?"":f,y=c.inPeronAtTrainerLocationfor2People,N=void 0===y?"":y,g=c.inPeronAtTrainerLocationfor3People,S=void 0===g?"":g,P=c.inPeronAtTrainerLocationfor4People,_=void 0===P?"":P,C=e.classSessionPricing||{},L=C.virtualSessionfor15People,T=void 0===L?"":L,w=C.inPersonAtclientLocationfor15People,A=void 0===w?"":w,I=C.inPersonAttrainerLocationfor15People,k=void 0===I?"":I,R=isNaN(o)?null:parseFloat(o),E=isNaN(T)?null:parseFloat(T),F={};[d,v,b].some((function(e){return""!==e&&parseFloat(e)>0}))&&(isNaN(d)||(F["2people"]={label:"session (2 people)",value:d}),isNaN(v)||(F["3people"]={label:"session (3 people)",value:v}),isNaN(b)||(F["4people"]={label:"session (4 people)",value:b}));var D={};!isNaN(s)&&(null===e||void 0===e?void 0:e.willingToTravel)&&(D.clientLocation={value:s}),!isNaN(a)&&(null===e||void 0===e?void 0:e.trainingFacility)&&(D.trainerLocation={value:a});var Y={clientLocation:{},trainerLocation:{}};(null===e||void 0===e?void 0:e.willingToTravel)&&(!isNaN(O)&&parseInt(O)>0&&(Y.clientLocation["2people"]={value:parseInt(O),label:"session (2 people)"}),!isNaN(m)&&parseInt(m)>0&&(Y.clientLocation["3people"]={value:parseInt(m),label:"session (3 people)"}),!isNaN(x)&&parseInt(x)>0&&(Y.clientLocation["4people"]={value:parseInt(x),label:"session (4 people)"})),(null===e||void 0===e?void 0:e.trainingFacility)&&(!isNaN(N)&&parseInt(N)>0&&(Y.trainerLocation["2people"]={value:parseInt(N),label:"session (2 people)"}),!isNaN(S)&&parseInt(S)>0&&(Y.trainerLocation["3people"]={value:parseInt(S),label:"session (3 people)"}),!isNaN(_)&&parseInt(_)>0&&(Y.trainerLocation["4people"]={value:parseInt(_),label:"session (4 people)"}));var B={};return!isNaN(A)&&(null===e||void 0===e?void 0:e.willingToTravel)&&(B.clientLocation={value:A}),!isNaN(k)&&(null===e||void 0===e?void 0:e.trainingFacility)&&(B.trainerLocation={value:k}),{inPersonClass:B,inPersonSocial:Y,inPersonOneOneOne:D,virtualSessionSocial:F,virtualSessionClass:E,sessionOneonOne:R}}();return localStorage.getItem("token")||(we=!1),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"session_outter_container",children:[Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"seesion_inner_container",children:[Object(N.jsxs)("div",{className:"link_wrapper",children:[Object(N.jsx)("img",{src:b.default,alt:"icon"}),Object(N.jsxs)("div",{className:"inner_links",children:[Object(N.jsx)(t.a,{to:"/user/scheduler",children:"Change your Slot"}),Object(N.jsx)("div",{})]})]}),Object(N.jsxs)("div",{className:"session_inner_wrapper",children:[Object(N.jsxs)("div",{className:"session_heading",children:[Object(N.jsx)("h2",{children:"Choose Your Session Type"}),Object(N.jsx)("p",{children:"Please select a preferable training location along with the class size in order to book your training session."})]}),Object(N.jsx)("div",{className:"session_tabs",children:Object(N.jsx)("div",{className:"session_tabs_inner",children:Object(N.jsxs)(c.d,{defaultTab:"".concat("inPerson"===Oe?"inPerson":"virtual"),onChange:function(e){},children:[Object(N.jsxs)("div",{className:"sesstion_tabslist container",children:[Object(N.jsxs)(c.b,{className:"w-50",children:[Object(N.jsx)(c.a,{tabFor:"virtual",disabled:!Ie,children:Object(N.jsx)("button",{onClick:function(){return he("virtual")},className:"".concat("virtual"===Oe?"active":""," ").concat(Ie?"":"disable-btn pointer-none"),disabled:!Ie,children:"Virtual"})}),Object(N.jsx)(c.a,{tabFor:"inPerson",disabled:!ke,children:Object(N.jsx)("button",{onClick:function(){return he("inPerson")},className:"".concat("inPerson"===Oe?"active":""," ").concat(ke?"":"disable-btn pointer-none"),disabled:!ke,children:"In Person"})})]}),ke&&"inPerson"===Oe?Object(N.jsxs)("div",{className:"session_location_dd",children:[Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(a.a,{value:ee,onChange:ne,options:S,className:"session_location_select"})})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(a.a,{value:le,onChange:se,options:g,placeholder:"Select Training Type",className:"session_location_select"})})}),Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(a.a,{value:ve,onChange:je,options:P,placeholder:"Select Training Venue",className:"session_location_select"})})})]}):Object(N.jsx)("div",{className:"w-100 single-session",children:Object(N.jsx)("div",{className:"session_venue",children:Object(N.jsx)("div",{className:"session_location",children:Object(N.jsx)(a.a,{value:le,onChange:se,options:g,placeholder:"Select Training Type",className:"session_location_select"})})})})]}),Object(N.jsx)("div",{className:"text-right pt-4",children:(null===ve||void 0===ve?void 0:ve.label)&&Object(N.jsx)("div",{className:"session_view_location",children:Object(N.jsx)(t.a,{onClick:function(){return Pe(!Se)},children:" View ".concat("Trainer's Location"===(null===ve||void 0===ve?void 0:ve.label)?"Trainer's Location":"areas trainer services")})})}),Object(N.jsx)(c.c,{tabId:"virtual",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[Re.sessionOneonOne?Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),xe?Object(N.jsx)(p.a,{open:xe,onClose:function(){return ye(!1)},center:!0,closeIcon:_,container:_e.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{className:"mt-3",children:["$".concat(Re.sessionOneonOne),Object(N.jsxs)("span",{children:["/ session"," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),Object(N.jsx)("img",{src:r.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Te(Re.sessionOneonOne,"1 ON 1 TRAINING")},disabled:!we,className:"".concat(we?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(v.default,{})]})]}):"",(null===(n=Object.values(Re.virtualSessionSocial))||void 0===n?void 0:n.length)>0?Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),Object(N.jsxs)("div",{className:"session_card_inner flex-column mb-4 justify-content-start",children:[(null===(i=Re.virtualSessionSocial)||void 0===i||null===(h=i["2people"])||void 0===h?void 0:h.value)&&Object(N.jsxs)("h6",{className:"mt-3",children:["$".concat(null===(m=Re.virtualSessionSocial)||void 0===m||null===(f=m["2people"])||void 0===f?void 0:f.value),Object(N.jsxs)("span",{children:["/"," ","".concat(null===(C=Re.virtualSessionSocial)||void 0===C||null===(L=C["2people"])||void 0===L?void 0:L.label),Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),(null===(T=Re.virtualSessionSocial["3people"])||void 0===T?void 0:T.value)&&Object(N.jsxs)("h6",{className:"mt-0",children:["$".concat(null===(w=Re.virtualSessionSocial["3people"])||void 0===w?void 0:w.value),Object(N.jsxs)("span",{children:["/"," ","".concat(null===(A=Re.virtualSessionSocial["3people"])||void 0===A?void 0:A.label),Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),(null===(I=Re.virtualSessionSocial["4people"])||void 0===I?void 0:I.value)&&Object(N.jsxs)("h6",{className:"mt-0",children:["$".concat(null===(k=Re.virtualSessionSocial["4people"])||void 0===k?void 0:k.value),Object(N.jsxs)("span",{children:["/"," ","".concat(null===(R=Re.virtualSessionSocial["4people"])||void 0===R?void 0:R.label),Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){var e;return Te(null===(e=Re.virtualSessionSocial)||void 0===e?void 0:e.value,"SOCIAL SESSION")},disabled:!we,className:"".concat(we?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(v.default,{})]})]}):"",(null===Re||void 0===Re?void 0:Re.virtualSessionClass)?Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{className:"mt-3",children:["$".concat(null===Re||void 0===Re?void 0:Re.virtualSessionClass),Object(N.jsxs)("span",{children:["/ session (5-15 people)"," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),Object(N.jsx)("img",{src:u.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){return Te(20,"CREATE A CLASS")},disabled:!we,className:"".concat(we?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(v.default,{})]})]}):""]})})}),Object(N.jsx)(c.c,{tabId:"inPerson",children:Object(N.jsx)("div",{className:"inPerson_tab_inner",children:Object(N.jsxs)("div",{className:"inPerson_tab_wrapper",children:[(null===Re||void 0===Re||null===(E=Re.inPersonOneOneOne[null===ve||void 0===ve?void 0:ve.value])||void 0===E?void 0:E.value)?Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"1 ON 1 TRAINING"}),Object(N.jsx)("p",{children:"Train individually with a top trainer for the highest quality of training and a personalized experience."})]}),xe?Object(N.jsx)(p.a,{open:xe,onClose:function(){return ye(!1)},center:!0,closeIcon:_,container:_e.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{className:"mt-3",children:["$".concat(null===Re||void 0===Re||null===(F=Re.inPersonOneOneOne[null===ve||void 0===ve?void 0:ve.value])||void 0===F?void 0:F.value),Object(N.jsxs)("span",{children:["/ session"," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),Object(N.jsx)("img",{src:r.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){var e;return Te(null===Re||void 0===Re||null===(e=Re.inPersonOneOneOne[null===ve||void 0===ve?void 0:ve.value])||void 0===e?void 0:e.value,"1 ON 1 TRAINING")},disabled:!we,className:"".concat(we?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(v.default,{})]})]}):"",(null===(D=Object.values(null===Re||void 0===Re?void 0:Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]))||void 0===D?void 0:D.length)>0?Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"SOCIAL SESSION"}),Object(N.jsx)("p",{children:"Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."})]}),xe?Object(N.jsx)(p.a,{open:xe,onClose:function(){return ye(!1)},center:!0,closeIcon:_,container:_e.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner  flex-column mb-4 justify-content-start",children:[(null===Re||void 0===Re||null===(Y=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["2people"])||void 0===Y?void 0:Y.value)&&Object(N.jsxs)("h6",{className:"mt-3",children:["$".concat(null===Re||void 0===Re||null===(B=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["2people"])||void 0===B?void 0:B.value),Object(N.jsxs)("span",{children:["/"," ","".concat(null===Re||void 0===Re||null===(M=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["2people"])||void 0===M?void 0:M.label)," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),(null===Re||void 0===Re||null===(U=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["3people"])||void 0===U?void 0:U.value)&&Object(N.jsxs)("h6",{className:"mt-0",children:["$".concat(null===Re||void 0===Re||null===($=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["3people"])||void 0===$?void 0:$.value),Object(N.jsxs)("span",{children:["/"," ","".concat(null===Re||void 0===Re||null===(G=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["3people"])||void 0===G?void 0:G.label)," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),(null===Re||void 0===Re||null===(K=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["4people"])||void 0===K?void 0:K.value)&&Object(N.jsxs)("h6",{className:"mt-0",children:["$".concat(null===Re||void 0===Re||null===(q=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["4people"])||void 0===q?void 0:q.value),Object(N.jsxs)("span",{children:["/"," ","".concat(null===Re||void 0===Re||null===(H=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value]["4people"])||void 0===H?void 0:H.label)," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),Object(N.jsx)("img",{src:d.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){var e;return Te(null===Re||void 0===Re||null===(e=Re.inPersonSocial[null===ve||void 0===ve?void 0:ve.value])||void 0===e?void 0:e.value,"SOCIAL SESSION")},disabled:!we,className:"".concat(we?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(v.default,{})]})]}):"",(null===Re||void 0===Re||null===(V=Re.inPersonClass[null===ve||void 0===ve?void 0:ve.value])||void 0===V?void 0:V.value)?Object(N.jsxs)("div",{className:"session_cards",children:[Object(N.jsxs)("div",{className:"session_card_content",children:[Object(N.jsx)("h2",{children:"CREATE A CLASS"}),Object(N.jsx)("p",{children:"Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."})]}),xe?Object(N.jsx)(p.a,{open:xe,onClose:function(){return ye(!1)},center:!0,closeIcon:_,container:_e.current,styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(N.jsx)("h2",{children:"Want to Train with Friends?"}),Object(N.jsx)("p",{children:"Make your workout social & fun, while saving money! Complete your payment and add friends to your session simply by sending them an invite. Once they accept your invite, your session rate will automatically be adjusted."})]})}):null,Object(N.jsxs)("div",{className:"session_card_inner",children:[Object(N.jsxs)("h6",{className:"mt-3",children:["$".concat(null===Re||void 0===Re||null===(W=Re.inPersonClass[null===ve||void 0===ve?void 0:ve.value])||void 0===W?void 0:W.value),Object(N.jsxs)("span",{children:["/ 15 People"," ",Object(N.jsx)("img",{src:j.default,alt:"icon",onClick:function(){return ye(!0)}})]})]}),Object(N.jsx)("img",{src:u.default,alt:"icon"})]}),Object(N.jsxs)("button",{onClick:function(){var e;return Te(null===Re||void 0===Re||null===(e=Re.inPersonClass[null===ve||void 0===ve?void 0:ve.value])||void 0===e?void 0:e.value,"CREATE A CLASS")},disabled:!we,className:"".concat(we?"":"btn-disabled"),children:["BOOK YOUR SESSION ",Object(N.jsx)(v.default,{})]})]}):""]})})})]})})})]})]})}),Se?Object(N.jsx)(p.a,{open:Se,onClose:function(){Pe(!1)},center:!0,closeIcon:Object(N.jsx)("img",{src:O.default,alt:"close"}),styles:{boaderRadius:"10px"},children:Object(N.jsxs)("div",{className:"model_styles modal-heading",children:[Object(N.jsx)("h2",{children:"".concat("Trainer's Location"===(null===ve||void 0===ve?void 0:ve.label)?"Trainer's Locations":"Neighbourhood Locations")}),"Trainer's Location"===(null===ve||void 0===ve?void 0:ve.label)?Object(N.jsx)("p",{children:(null===Ae||void 0===Ae?void 0:Ae.trainingFacilityLocation)||"No trainer locations"}):Object(N.jsx)("p",{children:(null===Ae||void 0===Ae?void 0:Ae.serviceableNeighbourHood)||"No neighbourhood locations"})]})}):null]})})}));n.default=C},424:function(e,n,i){"use strict";i.r(n),n.default=i.p+"static/media/Arrow Back.d3693c0f.svg"},487:function(e,n,i){"use strict";i.r(n),n.default=i.p+"static/media/Q Mark.c9a955fb.svg"},604:function(e,n,i){"use strict";i.r(n),n.default=i.p+"static/media/class.abfe0b19.svg"},605:function(e,n,i){"use strict";i.r(n),n.default=i.p+"static/media/social.034fbac8.svg"},606:function(e,n,i){"use strict";i.r(n),n.default=i.p+"static/media/training1on1.8661114c.svg"},622:function(e,n,i){},715:function(e,n,i){"use strict";i.d(n,"a",(function(){return l}));var o=i(14);function l(e,n){if(null==e)return{};var i,l,s=Object(o.a)(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)i=t[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}},738:function(e,n,i){"use strict";function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,o=new Array(n);i<n;i++)o[i]=e[i];return o}i.d(n,"a",(function(){return o}))},758:function(e,n,i){"use strict";i.d(n,"a",(function(){return l}));var o=i(738);function l(e,n){if(e){if("string"===typeof e)return Object(o.a)(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(o.a)(e,n):void 0}}},789:function(e,n,i){"use strict";function o(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n,i){return n&&o(e.prototype,n),i&&o(e,i),e}i.d(n,"a",(function(){return l}))},800:function(e,n,i){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.d(n,"a",(function(){return o}))},807:function(e,n,i){"use strict";i.d(n,"a",(function(){return s}));var o=i(738);var l=i(758);function s(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);