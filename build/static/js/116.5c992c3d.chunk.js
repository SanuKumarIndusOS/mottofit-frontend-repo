(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[116,217,218,269],{241:function(e,t,n){"use strict";n.r(t);var a=n(3),c=(n(2),n(407),n(408),n(41)),i=n(340),r=n(49),s=n(25),l=n(36),o=n(1),u=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}],d=Object(l.b)(null,(function(e){return Object(s.b)({fileUploadApi:r.fileUpload},e)}))((function(e){var t=e.trainerSetupData,n=e.setTrainerSetupData,r=e.fileUploadApi;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"payment_container container",children:Object(o.jsxs)("div",{className:"payment_wrapper",children:[Object(o.jsxs)("div",{className:"payment_heading",children:[Object(o.jsx)("h2",{children:"Security & Payment Information"}),Object(o.jsx)("p",{children:"The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them."})]}),Object(o.jsxs)("div",{className:"payment_inner ",children:[Object(o.jsxs)("div",{className:"payment_item1",children:[Object(o.jsx)("h6",{children:"Please upload any one of your US government issued ID\u2019s"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"inputs_payment1",children:[Object(o.jsx)("select",{value:t.identityNameUS,name:"identityNameUS",onChange:function(e){n(Object(a.a)(Object(a.a)({},t),{},{identityNameUS:e.target.value}))},children:u.map((function(e,t){return Object(o.jsx)("option",{value:e.value,children:e.label},t)}))}),Object(o.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:t.governmentIdNumber,onChange:function(e){n(Object(a.a)(Object(a.a)({},t),{},{governmentIdNumber:e.target.value}))},name:"governmentIdNumber"}),Object(o.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",onChange:function(e){!function(e){var c=e.target.files[0];if(void 0!==c){var i=new FormData;i.append("identity",c),r(i).then((function(e){n(Object(a.a)(Object(a.a)({},t),{},{governmentId:e.urlPath}))}))}}(e)}}),t.governmentId?Object(o.jsx)("a",{className:"checkarrow pl-3",children:Object(o.jsx)("img",{src:i.default,alt:"Uploaded"})}):Object(o.jsx)("a",{className:"checkarrow",children:Object(o.jsx)(c.default,{})})]}),t.governmentId&&Object(o.jsx)("a",{href:t.governmentId,target:"_blank",children:"View File"})]})]}),Object(o.jsxs)("div",{className:"payment_item1",children:[Object(o.jsx)("h6",{children:"Please upload your insurance information"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"inputs_payment1",children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:t.insuranceNameUS,onChange:function(e){n(Object(a.a)(Object(a.a)({},t),{},{insuranceNameUS:e.target.value}))},name:"insuranceNameUS"}),Object(o.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:t.coverAmount,onChange:function(e){n(Object(a.a)(Object(a.a)({},t),{},{coverAmount:e.target.value}))},name:"coverAmount"}),Object(o.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e){var c=e.target.files[0];if(void 0!==c){var i=new FormData;i.append("insurance",c),r(i).then((function(e){n(Object(a.a)(Object(a.a)({},t),{},{insurance:e.urlPath}))}))}}(e)}}),t.insurance?Object(o.jsx)("a",{className:"checkarrow pl-3",children:Object(o.jsx)("img",{src:i.default,alt:"Uploaded"})}):Object(o.jsx)("a",{className:"checkarrow",children:Object(o.jsx)(c.default,{})})]}),t.insurance&&Object(o.jsx)("a",{href:t.insurance,target:"_blank",children:"View File"})]})]})]})]})})})}));t.default=d},340:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Tick 1.bf0e36e8.svg"},407:function(e,t,n){},408:function(e,t,n){}}]);
//# sourceMappingURL=116.5c992c3d.chunk.js.map