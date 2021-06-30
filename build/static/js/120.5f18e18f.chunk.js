(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[120,123,234,235,289],{273:function(e,t,n){"use strict";n.r(t);var a=n(25),c=n(4),i=(n(2),n(424),n(425),n(53)),r=n(401),s=n(62),u=n(21),o=n(33),l=n(86),d=n(16),j=n(36),b=n(1),m=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}],h=Object(o.b)(null,(function(e){return Object(u.b)({fileUploadApi:s.fileUpload},e)}))((function(e){var t=e.trainerSetupData,n=e.setTrainerSetupData,s=e.fileUploadApi,u=e.showSaveBtn,o=function(e,t){var n=d.TrainerApi.updateTrainerAvailabilityApi,i=Object(a.a)({},e,t);n.body=i,Object(l.api)(Object(c.a)({},n)).then((function(e){var t=e.message;Object(j.Toast)({type:"success",message:t||"Success"})})).catch((function(e){Object(j.Toast)({type:"error",message:e.message||"Error"})}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"payment_container container",children:Object(b.jsxs)("div",{className:"payment_wrapper",children:[Object(b.jsxs)("div",{className:"payment_heading",children:[Object(b.jsx)("h2",{children:"Security & Payment Information"}),Object(b.jsx)("p",{children:"The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them."})]}),Object(b.jsxs)("div",{className:"payment_inner ",children:[Object(b.jsxs)("div",{className:"payment_item1",children:[Object(b.jsx)("h6",{children:"Please upload any one of your US government issued ID\u2019s"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"inputs_payment1",children:[Object(b.jsx)("select",{value:t.identityNameUS,name:"identityNameUS",onChange:function(e){n(Object(c.a)(Object(c.a)({},t),{},{identityNameUS:e.target.value})),u()},children:m.map((function(e,t){return Object(b.jsx)("option",{value:e.value,children:e.label},t)}))}),Object(b.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:t.governmentIdNumber,onChange:function(e){n(Object(c.a)(Object(c.a)({},t),{},{governmentIdNumber:e.target.value})),u()},name:"governmentIdNumber"}),Object(b.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",onChange:function(e){!function(e){var a=e.target.files[0];if(void 0!==a){var i=new FormData;i.append("identity",a),s(i).then((function(e){n(Object(c.a)(Object(c.a)({},t),{},{governmentId:e.urlPath})),e.urlPath&&o("identity",e.urlPath)}))}}(e)}}),t.governmentId?Object(b.jsx)("a",{className:"checkarrow pl-3",children:Object(b.jsx)("img",{src:r.default,alt:"Uploaded"})}):Object(b.jsx)("a",{className:"checkarrow",children:Object(b.jsx)(i.default,{})})]}),t.governmentId&&Object(b.jsx)("a",{href:t.governmentId,target:"_blank",children:"View File"})]})]}),Object(b.jsxs)("div",{className:"payment_item1",children:[Object(b.jsx)("h6",{children:"Please upload your insurance information"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"inputs_payment1",children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:t.insuranceNameUS,onChange:function(e){n(Object(c.a)(Object(c.a)({},t),{},{insuranceNameUS:e.target.value})),u()},name:"insuranceNameUS"}),Object(b.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:t.coverAmount,onChange:function(e){n(Object(c.a)(Object(c.a)({},t),{},{coverAmount:e.target.value})),u()},name:"coverAmount"}),Object(b.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e){var a=e.target.files[0];if(void 0!==a){var i=new FormData;i.append("insurance",a),s(i).then((function(e){n(Object(c.a)(Object(c.a)({},t),{},{insurance:e.urlPath})),e.urlPath&&o("insurance",e.urlPath)}))}}(e)}}),t.insurance?Object(b.jsx)("a",{className:"checkarrow pl-3",children:Object(b.jsx)("img",{src:r.default,alt:"Uploaded"})}):Object(b.jsx)("a",{className:"checkarrow",children:Object(b.jsx)(i.default,{})})]}),t.insurance&&Object(b.jsx)("a",{href:t.insurance,target:"_blank",children:"View File"})]})]})]})]})})})}));t.default=h},340:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(14),i=n(2),r=n(273),s=n(83),u=n(16),o=n(86),l=n(33),d=n(21),j=n(62),b=n(36),m=n(1),h=Object(l.b)(null,(function(e){return Object(d.b)({getStripeAccLink:j.getStripeAccLink,trainerDetail:j.trainerDetail},e)}))((function(e){var t=Object(i.useState)({identityNameUS:"Passport",insuranceNameUS:"",coverAmount:"",governmentId:"",governmentIdNumber:"",insurance:""}),n=Object(c.a)(t,2),l=n[0],d=n[1],j=Object(i.useState)(!1),h=Object(c.a)(j,2),O=h[0],v=h[1],p=Object(i.useState)(!1),f=Object(c.a)(p,2),g=f[0],y=f[1],x=Object(i.useState)(!1),N=Object(c.a)(x,2),S=N[0],I=N[1];Object(i.useEffect)((function(){e.trainerDetail().then((function(e){var t=e.identityInfromation,n=void 0===t?{}:t,c=e.insuranceInformation,i=void 0===c?{}:c,r={identityNameUS:n?n.identityName:"",governmentIdNumber:n?n.identityNo:"",insuranceNameUS:i?i.insuranceName:"",coverAmount:i?i.insuranceAmount:"",insurance:i?i.insurance:"",governmentId:n?n.identity:""},s=Object.values(r).every((function(e){return""!==e}));I(!s),d(Object(a.a)(Object(a.a)({},l),r))}))}),[]);var A=Object.values(Object(a.a)({},l)).every((function(e){return""!==e})),k=g||!A;return S&&!O&&(k=!0),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.default,{trainerSetupData:l,setTrainerSetupData:d,showSaveBtn:function(){return I(!0)}}),S&&Object(m.jsxs)("div",{className:"card_agree",children:[Object(m.jsx)("input",{type:"checkbox",id:"agree",name:"agree",onChange:function(){v(!O)}}),Object(m.jsxs)("label",{children:["Check here to acknowledge that you have read and agree to the Motto trainer",Object(m.jsx)("a",{href:"/agreement",target:"_blank",children:"terms and conditions"})]})]}),Object(m.jsx)("div",{className:"action-btn d-flex justify-content-center",children:S?Object(m.jsx)("button",{onClick:function(){var e={identityName:l.identityNameUS||"",identityNo:l.governmentIdNumber||"",insuranceName:l.insuranceNameUS||"",insuranceAmount:l.coverAmount||"",insurance:l.insurance||"",identity:l.governmentId||""},t=u.TrainerApi.updateTrainerAvailabilityApi;t.body=e,y(!0),Object(o.api)(Object(a.a)({},t)).then((function(e){var t=e.message;y(!1),Object(b.Toast)({type:"success",message:t||"Success"}),I(!1),v(!1)})).catch((function(){return y(!1)}))},type:"submit",disabled:k,className:"".concat(g?"loading":"btn"," normal-btn"),children:g?"Loading...":Object(m.jsxs)("a",{children:[" ","Save Details",Object(m.jsx)(s.default,{})]})}):Object(m.jsx)("button",{onClick:function(){e.getStripeAccLink().then((function(e){var t=e.url;t&&window.open(t),y(!1)})).catch((function(){return y(!1)}))},type:"submit",className:"normal-btn",children:Object(m.jsxs)("a",{children:[" ","Edit Payment Details",Object(m.jsx)(s.default,{})]})})})]})}));t.default=h},401:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Tick 1.bf0e36e8.svg"},424:function(e,t,n){},425:function(e,t,n){}}]);
//# sourceMappingURL=120.5f18e18f.chunk.js.map