(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[73,234,235,289],{173:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(14),c=n(2),i=n.n(c),r=(n(424),n(782)),l=(n(425),n(53)),o=n(401),u=n(1),m=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}];t.default=function(e){var t=e.onChange,n=e.trainerData,c=e.setTrainerData,d="Security & Payment Information",j="The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them.",p="Please upload any one of your US government issued ID\u2019s",b="Please upload your insurance information",h=i.a.useState(),v=Object(s.a)(h,2),O=(v[0],v[1],function(e){var s=e.target,c=s.name,i=s.value,r=Object(a.a)({},n);r[c]=i,t(r)});return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"payment_container container",children:Object(u.jsxs)("div",{className:"payment_wrapper",children:[Object(u.jsxs)("div",{className:"payment_heading",children:[Object(u.jsx)("h2",{children:d}),Object(u.jsx)("p",{children:j})]}),Object(u.jsxs)("div",{className:"payment_inner ",children:[Object(u.jsxs)("div",{className:"payment_item1",children:[Object(u.jsx)("h6",{children:p}),Object(u.jsxs)("div",{className:"inputs_payment1",children:[Object(u.jsx)(r.Dropdown,{title:"Select government ID\u2019s\r ",list:m,value:n.identityNameUS,onChange:function(e){c(Object(a.a)(Object(a.a)({},n),{},{identityNameUS:e.value}))},name:"identityNameUS"}),Object(u.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:n.governmentIdNumber,onChange:O,name:"governmentIdNumber"}),Object(u.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",value:n.governmentId,onChange:O}),n.governmentId?Object(u.jsx)("img",{src:o.default,alt:"Uploaded"}):Object(u.jsx)("a",{className:"checkarrow",children:Object(u.jsx)(l.default,{})})]})]}),Object(u.jsxs)("div",{className:"payment_item1",children:[Object(u.jsx)("h6",{children:b}),Object(u.jsxs)("div",{className:"inputs_payment1",children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:n.insuranceNameUS,onChange:O,name:"insuranceNameUS"}),Object(u.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:n.coverAmount,onChange:O,name:"coverAmount"}),Object(u.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",value:n.insurance,onChange:O}),n.insurance?Object(u.jsx)("img",{src:o.default,alt:"Uploaded"}):Object(u.jsx)("a",{className:"checkarrow",children:Object(u.jsx)(l.default,{})})]})]})]})]})})})}},401:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Tick 1.bf0e36e8.svg"},424:function(e,t,n){},425:function(e,t,n){}}]);
//# sourceMappingURL=73.e6af054a.chunk.js.map