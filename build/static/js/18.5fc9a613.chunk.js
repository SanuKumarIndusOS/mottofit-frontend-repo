(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[18,279],{336:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(36),s=n(14),i=n.n(s),r=n(28),l=n(11),o=n(2),d=n(854),j=(n(535),n(110)),u=n(9),b=n(6),m=n(113),p=n(43),h=n(25),x=n(30),O=n(38),f=n(919),v=n.n(f),y=n(7),g=(n(67),n(1));var N=Object(x.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(h.b)({updateUserDetails:p.updateUserDetails},e)}))((function(e){var t,n,s,p=e.updateUserDetails,h=e.agreedToTerms,x=e.checkPayAhead,f=e.handleChange,N=e.handleChangeCPA,C=e.handleFriendsCount,k=e.ScheduleSession,_=e.sessionData,S=e.mottoPassDataVal,P=e.isProfile,E=void 0!==P&&P,D=Object(d.useStripe)(),T=Object(d.useElements)(),w=(Object(o.useMemo)((function(){return{style:{base:{color:"#424770",letterSpacing:"0.025em",fontFamily:"Source Code Pro, monospace","::placeholder":{color:"#aab7c4"}},invalid:{color:"#9e2146"}}}})),Object(o.useState)(!1)),A=Object(l.a)(w,2),M=A[0],F=A[1],R=Object(o.useState)({}),I=Object(l.a)(R,2),z=I[0],U=I[1],V=Object(o.useState)(!0),L=Object(l.a)(V,2),B=L[0],J=L[1];Object(o.useEffect)((function(){H()}),[]);var G=function(){var e=Object(r.a)(i.a.mark((function e(t){var n,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),B){e.next=3;break}return e.abrupt("return",k());case 3:if(D&&T){e.next=5;break}return e.abrupt("return");case 5:return n=T.getElement(d.CardNumberElement),e.next=8,D.createPaymentMethod({type:"card",card:n});case 8:if(a=e.sent,c=a.error,s=a.paymentMethod,!c){e.next=15;break}return e.abrupt("return",Object(O.Toast)({type:"error",message:c.message||"Error"}));case 15:console.log("[PaymentMethod]",s);case 16:D.createToken(n).then((function(e){var t=e.token;(null===t||void 0===t?void 0:t.id)&&q(null===t||void 0===t?void 0:t.id)})).catch((function(e){Object(O.Toast)({type:"error",message:e.message||"Error"})}));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=b.PaymentApi.addCardDetails,n={cardToken:e,setDefault:!!E||M};t.body=n,Object(m.api)(Object(a.a)({},t)).then((function(e){var t,n=e.data;if(console.log(n),Object(O.Toast)({type:"success",message:"Card details added"}),H(),E)return k();var a=(t={},Object(c.a)(t,"1 ON 1 TRAINING",(function(){return k()})),Object(c.a)(t,"SOCIAL SESSION",(function(){return y.history.push("/user/with-friends")})),Object(c.a)(t,"CREATE A CLASS",(function(){return y.history.push("/user/with-friends")})),t),s=null===_||void 0===_?void 0:_.sessionType;s&&a[s]&&console.log(a[s])})).catch((function(e){Object(O.Toast)({type:"error",message:e.message||"Error"})}))},H=function(){var e=b.PaymentApi.getPaymentMethods;Object(m.api)(Object(a.a)({},e)).then((function(e){var t=e.data,n=((void 0===t?[]:t)||[]).filter((function(e){return e.default}));if(n.length>0){U(n[0]),J(!1);var a={defaulCardDetails:n[0]};p(a)}})).catch((function(e){Object(O.Toast)({type:"error",message:e.message||"Error"})}))};return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:G,className:"Card",children:[S&&"availPass"in S?Object(g.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"},children:Object(g.jsxs)("h3",{children:["Remaing Passes: ",S.availPass[0].remains]})}):Object(g.jsxs)("div",{children:[" ",Object(g.jsxs)("div",{className:"payment_input_inner",children:[Object(g.jsx)("label",{className:"card-detail",children:"Card Number"}),B?Object(g.jsx)(d.CardNumberElement,{options:{hidePostalCode:!0,style:{base:{fontSize:"16px",color:"#424770","::placeholder":{color:"#898989",fontFamily:"Montserrat",fontSize:"16px"}},invalid:{color:"#9e2146"}}}}):Object(g.jsx)("p",{className:"fs-20",children:"**** **** **** ".concat((null===z||void 0===z||null===(t=z.card)||void 0===t?void 0:t.last4)||"****")}),Object(g.jsxs)("div",{className:"payment_expire_input",children:[Object(g.jsxs)("div",{className:"payment_expire_inner",children:[Object(g.jsx)("label",{className:"card-detail",children:"Expiry Date"}),B?Object(g.jsx)(d.CardExpiryElement,{options:{style:{base:{fontSize:"16px",color:"#424770","::placeholder":{color:"#898989",fontFamily:"Montserrat",fontSize:"16px"}},invalid:{color:"#9e2146"}}}}):Object(g.jsx)("p",{className:"fs-20",children:"".concat((null===z||void 0===z||null===(n=z.card)||void 0===n?void 0:n.exp_month)||"","/").concat((null===z||void 0===z||null===(s=z.card)||void 0===s?void 0:s.exp_year)||"")})]}),Object(g.jsx)("div",{className:"payment_expire_inner",children:B&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"card-detail",children:"CVC/CVV"}),Object(g.jsx)(d.CardCvcElement,{options:{style:{base:{fontSize:"16px",color:"#424770","::placeholder":{color:"#898989",fontFamily:"Montserrat",fontSize:"16px"}},invalid:{color:"#9e2146"}}}})]})})]}),z.default&&Object(g.jsx)(g.Fragment,{children:B?Object(g.jsx)("div",{className:"payment_change d-flex justify-content-end",children:Object(g.jsx)("button",{className:"link-btn",onClick:function(e){J(!1),e.preventDefault()},type:"click",children:"Reset Card"})}):Object(g.jsx)("div",{className:"payment_change d-flex justify-content-end",children:Object(g.jsx)("button",{className:"link-btn",onClick:function(e){J(!0),e.preventDefault()},type:"click",children:"Edit Card"})})}),B&&Object(g.jsxs)("div",{className:"payment_input_check mt-3 d-flex justify-content-between",children:[!E&&Object(g.jsxs)("div",{className:"payment_check_inner",children:[Object(g.jsx)("input",{type:"checkbox",checked:M,onChange:function(){return F(!M)},id:"remember_card"}),Object(g.jsx)("label",{for:"remember_card",children:"Remember My Card Details"})]}),Object(g.jsx)("div",{className:"payment_check_inner d-flex align-items-center",children:Object(g.jsx)(u.a,{to:"/",className:"fw-600 text-underline",children:"Session Cancellation Policy"})})]})]})]}),Object(g.jsx)("div",{className:"payment_input_outter_check ",children:Object(g.jsxs)("div",{className:"payment_terms",children:[Object(g.jsx)("input",{type:"checkbox",style:{width:"50px",marginRight:"10px"},onChange:f,checked:h}),Object(g.jsxs)("label",{children:["By proceeding, you accept the latest versions of our"," ",Object(g.jsx)(u.a,{to:"/",children:"Terms of Use"})," and"," ",Object(g.jsx)(u.a,{to:"/",children:"Privacy Policy"})]})]})}),"SOCIAL SESSION"===(null===_||void 0===_?void 0:_.sessionType)?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"payment_input_outter_check ",children:Object(g.jsxs)("div",{className:"payment_terms",children:[Object(g.jsx)("input",{type:"checkbox",style:{width:"50px",marginRight:"10px"},onChange:N,checked:x}),Object(g.jsx)("label",{className:"my-0",children:"I will pay for the entire social session"})]})}),Object(g.jsx)("div",{className:"mb-3 mt-2",children:Object(g.jsx)("div",{className:"col-12 d-flex justify-content-end",children:x?Object(g.jsxs)("select",{className:"participants",onChange:function(e){console.log(e.target.value),C(e.target.value)},children:[Object(g.jsx)("option",{value:"1",children:"1 Participants"}),Object(g.jsx)("option",{value:"2",children:"2 Participants"}),Object(g.jsx)("option",{value:"3",children:"3 Participants"})]}):null})})]}):null,Object(g.jsx)("div",{className:"disclaimer",children:Object(g.jsxs)("p",{className:"text-info d-flex alignn-items-center",children:[Object(g.jsx)(v.a,{}),Object(g.jsx)("span",{className:"ml-2",children:"Payment will happen only after the session is completed."})]})}),Object(g.jsx)("div",{className:"submit",children:Object(g.jsxs)("button",{type:"click",className:"".concat(h?"":"disable-btn"," ").concat(E?"w-auto":""),disabled:!h,onClick:G,children:["".concat(E?"Save Changes":"Continue")," ",Object(g.jsx)(j.default,{})]})})]})})}));t.default=N},535:function(e,t,n){}}]);