(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[114,209,210,260],{250:function(e,t,a){"use strict";a.r(t);var n=a(3),c=(a(2),a(405),a(406),a(39)),i=a(332),r=a(49),s=a(27),l=a(34),o=a(1),u=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}],d=Object(l.b)(null,(function(e){return Object(s.b)({fileUploadApi:r.fileUpload},e)}))((function(e){var t=e.trainerSetupData,a=e.setTrainerSetupData,r=e.fileUploadApi;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"payment_container container",children:Object(o.jsxs)("div",{className:"payment_wrapper",children:[Object(o.jsxs)("div",{className:"payment_heading",children:[Object(o.jsx)("h2",{children:"Security & Payment Information"}),Object(o.jsx)("p",{children:"The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them."})]}),Object(o.jsxs)("div",{className:"payment_inner ",children:[Object(o.jsxs)("div",{className:"payment_item1",children:[Object(o.jsx)("h6",{children:"Please upload any one of your US government issued ID\u2019s"}),Object(o.jsxs)("div",{className:"inputs_payment1",children:[Object(o.jsx)("select",{value:t.identityNameUS,name:"identityNameUS",onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{identityNameUS:e.target.value}))},children:u.map((function(e,t){return Object(o.jsx)("option",{value:e.value,children:e.label},t)}))}),Object(o.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:t.governmentIdNumber,onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{governmentIdNumber:e.target.value}))},name:"governmentIdNumber"}),Object(o.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",onChange:function(e){!function(e){var c=e.target.files[0];if(void 0!==c){var i=new FormData;i.append("identity",c),r(i).then((function(e){console.log(e,"datadata"),a(Object(n.a)(Object(n.a)({},t),{},{governmentId:e.urlPath}))}))}}(e)}}),t.governmentId?Object(o.jsx)("a",{className:"checkarrow pl-3",children:Object(o.jsx)("img",{src:i.default,alt:"Uploaded"})}):Object(o.jsx)("a",{className:"checkarrow",children:Object(o.jsx)(c.default,{})})]})]}),Object(o.jsxs)("div",{className:"payment_item1",children:[Object(o.jsx)("h6",{children:"Please upload your insurance information"}),Object(o.jsxs)("div",{className:"inputs_payment1",children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:t.insuranceNameUS,onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{insuranceNameUS:e.target.value}))},name:"insuranceNameUS"}),Object(o.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:t.coverAmount,onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{coverAmount:e.target.value}))},name:"coverAmount"}),Object(o.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e){var c=e.target.files[0];if(void 0!==c){var i=new FormData;i.append("insurance",c),r(i).then((function(e){console.log(e,"datadata"),a(Object(n.a)(Object(n.a)({},t),{},{insurance:e.urlPath}))}))}}(e)}}),t.insurance?Object(o.jsx)("a",{className:"checkarrow pl-3",children:Object(o.jsx)("img",{src:i.default,alt:"Uploaded"})}):Object(o.jsx)("a",{className:"checkarrow",children:Object(o.jsx)(c.default,{})})]})]})]})]})})})}));t.default=d},332:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Tick 1.bf0e36e8.svg"},405:function(e,t,a){},406:function(e,t,a){}}]);
//# sourceMappingURL=114.fa4d32ca.chunk.js.map