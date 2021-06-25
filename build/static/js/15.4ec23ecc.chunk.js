(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[15,237],{298:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(25),s=n(62),r=n.n(s),o=n(87),i=n(15),l=n(2),d=n(919),u=(n(555),n(82)),j=n(8),b=n(16),m=n(85),p=n(38),h=n(21),f=n(33),O=n(40),x=n(1295),y=n.n(x),v=n(14),g=n(1);var C=Object(f.b)((function(e){return{sessionData:e.userReducer.sessionData}}),(function(e){return Object(h.b)({updateUserDetails:p.updateUserDetails},e)}))((function(e){var t,n,s,p=e.updateUserDetails,h=e.agreedToTerms,f=e.handleChange,x=e.ScheduleSession,C=e.sessionData,N=Object(d.useStripe)(),_=Object(d.useElements)(),k=(Object(l.useMemo)((function(){return{style:{base:{color:"#424770",letterSpacing:"0.025em",fontFamily:"Source Code Pro, monospace","::placeholder":{color:"#aab7c4"}},invalid:{color:"#9e2146"}}}})),Object(l.useState)(!1)),S=Object(i.a)(k,2),E=S[0],T=S[1],D=Object(l.useState)({}),P=Object(i.a)(D,2),M=P[0],w=P[1],A=Object(l.useState)(!0),z=Object(i.a)(A,2),R=z[0],F=z[1];Object(l.useEffect)((function(){V()}),[]);var I=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,c,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),R){e.next=3;break}return e.abrupt("return",x());case 3:if(N&&_){e.next=5;break}return e.abrupt("return");case 5:return n=_.getElement(d.CardNumberElement),e.next=8,N.createPaymentMethod({type:"card",card:n});case 8:if(c=e.sent,a=c.error,s=c.paymentMethod,!a){e.next=16;break}return console.log("[error]",a),e.abrupt("return",Object(O.Toast)({type:"error",message:a.message||"Error"}));case 16:console.log("[PaymentMethod]",s);case 17:N.createToken(n).then((function(e){var t=e.token;console.log(t),(null===t||void 0===t?void 0:t.id)&&U(null===t||void 0===t?void 0:t.id)})).catch((function(e){Object(O.Toast)({type:"error",message:e.message||"Error"})}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){var t=b.PaymentApi.addCardDetails,n={cardToken:e,setDefault:E};t.body=n,Object(m.api)(Object(c.a)({},t)).then((function(e){var t,n=e.data;console.log(n),Object(O.Toast)({type:"success",message:"Card details added"}),V();var c=(t={},Object(a.a)(t,"1 ON 1 TRAINING",(function(){return x()})),Object(a.a)(t,"SOCIAL SESSION",(function(){return v.history.push("/user/with-friends")})),Object(a.a)(t,"CREATE A CLASS",(function(){return v.history.push("/user/with-friends")})),t),s=null===C||void 0===C?void 0:C.sessionType;s&&c[s]&&console.log(c[s])})).catch((function(e){Object(O.Toast)({type:"error",message:e.message||"Error"}),console.log(e)}))},V=function(){var e=b.PaymentApi.getPaymentMethods;Object(m.api)(Object(c.a)({},e)).then((function(e){var t=e.data,n=((void 0===t?[]:t)||[]).filter((function(e){return e.default}));if(n.length>0){w(n[0]),F(!1);var c={defaulCardDetails:n[0]};console.log(c),p(c)}})).catch((function(e){Object(O.Toast)({type:"error",message:e.message||"Error"}),console.log(e)}))};return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:I,className:"Card",children:[Object(g.jsxs)("div",{className:"payment_input_inner",children:[Object(g.jsx)("label",{children:"Card Number"}),R?Object(g.jsx)(d.CardNumberElement,{options:{hidePostalCode:!0,style:{base:{fontSize:"16px",color:"#424770","::placeholder":{color:"#898989",fontFamily:"Montserrat",fontSize:"16px"}},invalid:{color:"#9e2146"}}}}):Object(g.jsx)("p",{className:"fs-20",children:"**** **** **** ".concat((null===M||void 0===M||null===(t=M.card)||void 0===t?void 0:t.last4)||"****")}),Object(g.jsxs)("div",{className:"payment_expire_input",children:[Object(g.jsx)("div",{className:"payment_expire_inner",children:Object(g.jsxs)("label",{children:["Expiry Date",R?Object(g.jsx)(d.CardExpiryElement,{options:{style:{base:{fontSize:"16px",color:"#424770","::placeholder":{color:"#898989",fontFamily:"Montserrat",fontSize:"16px"}},invalid:{color:"#9e2146"}}}}):Object(g.jsx)("p",{className:"fs-20",children:"".concat((null===M||void 0===M||null===(n=M.card)||void 0===n?void 0:n.exp_month)||"","/").concat((null===M||void 0===M||null===(s=M.card)||void 0===s?void 0:s.exp_year)||"")})]})}),Object(g.jsx)("div",{className:"payment_expire_inner",children:R&&Object(g.jsxs)("label",{children:["CVC/CVV",Object(g.jsx)(d.CardCvcElement,{options:{style:{base:{fontSize:"16px",color:"#424770","::placeholder":{color:"#898989",fontFamily:"Montserrat",fontSize:"16px"}},invalid:{color:"#9e2146"}}}})]})})]}),M.default&&Object(g.jsx)(g.Fragment,{children:R?Object(g.jsx)("div",{className:"payment_change d-flex justify-content-end",children:Object(g.jsx)("button",{className:"link-btn",onClick:function(){return F(!1)},children:"Reset Card"})}):Object(g.jsx)("div",{className:"payment_change d-flex justify-content-end",children:Object(g.jsx)("button",{className:"link-btn",onClick:function(){return F(!0)},children:"Edit Card"})})}),R&&Object(g.jsxs)("div",{className:"payment_input_check mt-3",children:[Object(g.jsxs)("div",{className:"payment_check_inner",children:[Object(g.jsx)("input",{type:"checkbox",checked:E,onChange:function(){return T(!E)},id:"remember_card"}),Object(g.jsx)("label",{for:"remember_card",children:"Remember My Card Details"})]}),Object(g.jsx)("div",{className:"payment_check_inner",children:Object(g.jsx)(j.a,{to:"/",children:"Session Cancellation Policy"})})]})]}),Object(g.jsx)("div",{className:"payment_input_outter_check ",children:Object(g.jsxs)("div",{className:"payment_terms",children:[Object(g.jsx)("input",{type:"checkbox",style:{width:"20px",marginRight:"10px"},onChange:f,checked:h}),Object(g.jsxs)("label",{children:["By proceeding, you accept the latest versions of our"," ",Object(g.jsx)(j.a,{to:"/",children:"Terms of Use"})," and"," ",Object(g.jsx)(j.a,{to:"/",children:"Privacy Policy"})]})]})}),Object(g.jsx)("div",{className:"disclaimer",children:Object(g.jsxs)("p",{className:"text-info d-flex alignn-items-center",children:[Object(g.jsx)(y.a,{}),Object(g.jsx)("span",{className:"ml-2",children:"Payment will happen only after the session is completed."})]})}),Object(g.jsx)("div",{className:"submit",children:Object(g.jsxs)("button",{type:"click",className:"".concat(h?"":"disable-btn"),disabled:!h,onClick:I,children:["Continue ",Object(g.jsx)(u.default,{})]})})]})})}));t.default=C},555:function(e,t,n){}}]);
//# sourceMappingURL=15.4ec23ecc.chunk.js.map