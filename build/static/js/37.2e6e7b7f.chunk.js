(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[37,107,234,235,236,263,305,308,311,312,336],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(25),i=a(4),c=a(22),r=a(23),o=a(27),l=a(26),s=a(2),d=a(818),u=a(718),b=(a(399),a(398)),j=a(1),h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,c=e.options,r=void 0===c?[]:c,o=e.value,l=void 0===o?"":o,s=e.name,h=void 0===s?"":s,m=e.placeholder,f=void 0===m?"Select":m,v=e.disabled,O=void 0!==v&&v,g=e.arrow,p=void 0!==g&&g,x=e.isReadOnly,y=void 0!==x&&x,N=e.label,w=void 0===N?"":N,k=e.isMulti,C=void 0!==k&&k,_=e.isClearable,S=void 0!==_&&_,A=e.isSearchable,T=void 0!==A&&A,F=e.isBoldLabel,I=void 0!==F&&F,P=e.showArrow,D=void 0===P||P,L={placeholder:function(e){return Object(i.a)(Object(i.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(i.a)(Object(i.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(i.a)(Object(i.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(i.a)(Object(i.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(j.jsx)(j.Fragment,{children:y?Object(j.jsx)("p",{children:l}):Object(j.jsxs)("div",{className:"".concat(p?"select-section w-100":"Select"," ").concat(I?"mt-0":""),children:[""!==w?Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:I?"mb-1 text-black-22":"font-weight-normal mb-1",children:w})}):null,Object(j.jsx)(u.a,{className:a,classNamePrefix:"Select",isDisabled:O,isClearable:S,isSearchable:T,name:h,options:r,onChange:this.handleChange,isMulti:C,showArrow:D,placeholder:f,styles:L,value:r&&r.length>0&&r.find((function(e){return e.value===l}))?r.find((function(e){return e.value===l})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(j.jsx)(d.l.DropdownIndicator,Object(i.a)(Object(i.a)({},e),{},{children:Object(j.jsx)("img",{src:b.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),a}(s.Component)},118:function(e,t,a){"use strict";a.r(t),a.d(t,"YearDropDown",(function(){return l}));var n=a(4),i=a(46),c=(a(2),a(115)),r=a(85),o=a(1),l=function(e){var t=e.label,a=void 0===t?"":t,l=e.name,s=void 0===l?"":l,d=Object(i.a)(e,["label","name"]),u=Object(r.getFormattedYears)().map((function(e){return{label:e.toString(),value:e.toString(),name:s}}));return Object(o.jsx)(c.NormalMultiSelect,Object(n.a)({placeholder:a,arrow:!0,name:s,options:u},d))}},151:function(e,t,a){"use strict";a.r(t);a(2);var n=a(283),i=a(1);t.default=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(n.default,{})})}},273:function(e,t,a){"use strict";a.r(t);var n=a(25),i=a(4),c=(a(2),a(424),a(425),a(53)),r=a(401),o=a(62),l=a(21),s=a(33),d=a(86),u=a(16),b=a(36),j=a(1),h=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}],m=Object(s.b)(null,(function(e){return Object(l.b)({fileUploadApi:o.fileUpload},e)}))((function(e){var t=e.trainerSetupData,a=e.setTrainerSetupData,o=e.fileUploadApi,l=e.showSaveBtn,s=function(e,t){var a=u.TrainerApi.updateTrainerAvailabilityApi,c=Object(n.a)({},e,t);a.body=c,Object(d.api)(Object(i.a)({},a)).then((function(e){var t=e.message;Object(b.Toast)({type:"success",message:t||"Success"})})).catch((function(e){Object(b.Toast)({type:"error",message:e.message||"Error"})}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"payment_container container",children:Object(j.jsxs)("div",{className:"payment_wrapper",children:[Object(j.jsxs)("div",{className:"payment_heading",children:[Object(j.jsx)("h2",{children:"Security & Payment Information"}),Object(j.jsx)("p",{children:"The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them."})]}),Object(j.jsxs)("div",{className:"payment_inner ",children:[Object(j.jsxs)("div",{className:"payment_item1",children:[Object(j.jsx)("h6",{children:"Please upload any one of your US government issued ID\u2019s"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"inputs_payment1",children:[Object(j.jsx)("select",{value:t.identityNameUS,name:"identityNameUS",onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{identityNameUS:e.target.value})),l()},children:h.map((function(e,t){return Object(j.jsx)("option",{value:e.value,children:e.label},t)}))}),Object(j.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:t.governmentIdNumber,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{governmentIdNumber:e.target.value})),l()},name:"governmentIdNumber"}),Object(j.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",onChange:function(e){!function(e){var n=e.target.files[0];if(void 0!==n){var c=new FormData;c.append("identity",n),o(c).then((function(e){a(Object(i.a)(Object(i.a)({},t),{},{governmentId:e.urlPath})),e.urlPath&&s("identity",e.urlPath)}))}}(e)}}),t.governmentId?Object(j.jsx)("a",{className:"checkarrow pl-3",children:Object(j.jsx)("img",{src:r.default,alt:"Uploaded"})}):Object(j.jsx)("a",{className:"checkarrow",children:Object(j.jsx)(c.default,{})})]}),t.governmentId&&Object(j.jsx)("a",{href:t.governmentId,target:"_blank",children:"View File"})]})]}),Object(j.jsxs)("div",{className:"payment_item1",children:[Object(j.jsx)("h6",{children:"Please upload your insurance information"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"inputs_payment1",children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:t.insuranceNameUS,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{insuranceNameUS:e.target.value})),l()},name:"insuranceNameUS"}),Object(j.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:t.coverAmount,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{coverAmount:e.target.value})),l()},name:"coverAmount"}),Object(j.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e){var n=e.target.files[0];if(void 0!==n){var c=new FormData;c.append("insurance",n),o(c).then((function(e){a(Object(i.a)(Object(i.a)({},t),{},{insurance:e.urlPath})),e.urlPath&&s("insurance",e.urlPath)}))}}(e)}}),t.insurance?Object(j.jsx)("a",{className:"checkarrow pl-3",children:Object(j.jsx)("img",{src:r.default,alt:"Uploaded"})}):Object(j.jsx)("a",{className:"checkarrow",children:Object(j.jsx)(c.default,{})})]}),t.insurance&&Object(j.jsx)("a",{href:t.insurance,target:"_blank",children:"View File"})]})]})]})]})})})}));t.default=m},283:function(e,t,a){"use strict";a.r(t);var n=a(84),i=a(14),c=a(4),r=a(2),o=a.n(r),l=a(62),s=a(760),d=a(396),u=(a(490),a(8)),b=(a(488),a(83)),j=a(273),h=a(288),m=a(403),f=a(404),v=a(692),O=a(780),g=a(16),p=a(21),x=a(33),y=a(86),N=a(116),w=a(118),k=a(435),C=a(1),_=Object(v.a)({root:{"&$checked":{color:O.a[600]}},checked:{}})((function(e){return Object(C.jsx)(s.a,Object(c.a)({color:"default"},e))})),S=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}];var A=Object(x.b)(null,(function(e){return Object(p.b)({fileUploadApi:l.fileUpload,trainerDetail:l.trainerDetail,getStripeAccLink:l.getStripeAccLink},e)}))((function(e){var t=Object(r.useState)({motto:"",training_process:"",facility_details:"",neighborhood_list:"",haveAFacility:!0,willingToTravel:!0,instagram:"",website:"",serviceableLocation:"",certificateFields:[{certificate:"",year:""}],trainingLocation:[],zoom_link:"",identityNameUS:"",insuranceNameUS:"",coverAmount:"",governmentId:"",governmentIdNumber:"",insurance:"",serviceableNeighbourHood:""}),a=Object(i.a)(t,2),l=a[0],v=a[1],O=Object(r.useState)(["","","","",""]),p=Object(i.a)(O,2),x=p[0],A=p[1],T=Object(r.useState)(!1),F=Object(i.a)(T,2),I=F[0],P=F[1],D=Object(r.useState)(!1),L=Object(i.a)(D,2),M=L[0],U=L[1],z=Object(r.useState)(!1),E=Object(i.a)(z,2),H=E[0],B=E[1],Y=Object(r.useState)(!1),W=Object(i.a)(Y,2),R=W[0],$=W[1],V=Object(r.useState)({}),J=Object(i.a)(V,2),q=J[0],Z=J[1];Object(r.useEffect)((function(){e.trainerDetail().then((function(e){var t,a;Z(e),e.images&&e.images.length>0&&A(e.images);var n=e.identityInfromation,i=void 0===n?{}:n,r=e.insuranceInformation,o=void 0===r?{}:r;e.serviceableLocation;(null===e||void 0===e||null===(t=e.preferedTrainingMode)||void 0===t?void 0:t.includes("virtual"))&&P(!0),(null===e||void 0===e||null===(a=e.preferedTrainingMode)||void 0===a?void 0:a.includes("inPerson"))&&U(!0);var s=Object(c.a)(Object(c.a)({},l),{},{motto:e.myMotto,training_process:e.trainingProcess,certificateFields:e.certification,instagram:e.instagramProfile,website:e.websiteLink,willingToTravel:e.willingToTravel,haveAFacility:e.trainingFacility,facility_details:e.trainingFacilityLocation,zoom_link:e.virtualMeetingLink,serviceableNeighbourHood:e.serviceableNeighbourHood||"",identityNameUS:i?i.identityName:"",governmentIdNumber:i?i.identityNo:"",insuranceNameUS:o?o.insuranceName:"",coverAmount:o?o.insuranceAmount:"",insurance:o?o.insurance:"",governmentId:i?i.identity:"",neighborhood_list:e.servicableLocation?e.servicableLocation[0]:""});console.log(s),v(Object(c.a)({},s))}))}),[]);var G=function(e,t){var a=Object(n.a)(l.certificateFields);a[e][t.target.name]=t.target.value,v(Object(c.a)(Object(c.a)({},l),{},{certificateFields:a}))},K=Object(r.useState)(!1),Q=Object(i.a)(K,2),X=Q[0],ee=Q[1],te=function(){e.getStripeAccLink().then((function(e){var t=e.url;window.location.href=t,B(!1)})).catch((function(){return B(!1)}))};return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"inner_setup_container",children:[Object(C.jsxs)("div",{className:"setup_link",children:[Object(C.jsxs)("div",{className:"inner_link",children:[Object(C.jsx)("img",{src:d.default,alt:"icon"}),Object(C.jsx)(u.a,{to:"/trainer/card",children:" Edit Trainer Card "})]}),Object(C.jsx)("div",{className:"inner_link_preview",children:Object(C.jsx)("div",{onClick:function(){ee((function(e){return!e}))},className:"prev_profile",children:"Preview Your Trainer Profile"})})]}),Object(C.jsx)(h.default,{open:X,setOpen:ee,trainerdetailData:q,trainerSetupData:l}),Object(C.jsxs)("div",{className:"setup_headings",children:[Object(C.jsx)("h2",{children:"Build out the rest of your Profile!"}),Object(C.jsx)("p",{children:"Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time."})]}),Object(C.jsxs)("div",{className:"textarea_content",children:[Object(C.jsx)("label",{children:"What\u2019s your Motto?"}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{placeholder:"Share your favorite motto quote that represents you or your philosophy in less than 75 words",value:l.motto,onChange:function(e){var t,a=e.target.value;(null===a||void 0===a||null===(t=a.split(" "))||void 0===t?void 0:t.length)>75||(null===a||void 0===a?void 0:a.length)>500||v(Object(c.a)(Object(c.a)({},l),{},{motto:e.target.value}))}})]}),Object(C.jsxs)("div",{className:"textarea_content",children:[Object(C.jsx)("label",{children:"Tell us about you and describe your training process"}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{placeholder:"Tell potential clients everything you think they should know about you as a trainer & individual. Utilize keywords as anything you write here will also be searchable in our search box.",value:l.training_process,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{training_process:e.target.value}))}})]}),Object(C.jsxs)("div",{className:"certificate_content",children:[Object(C.jsx)("label",{children:"Throw in some photos showcasing you & your skills"}),Object(C.jsx)("div",{className:"row",children:x.map((function(t,a){return Object(C.jsx)("div",{className:" image_upload_init",children:Object(C.jsx)("div",{className:"image-upload-card btn-file-input",children:""!==t?Object(C.jsxs)("button",{className:"uploaded-image",children:[Object(C.jsx)("img",{src:t,alt:"card-image",accept:"image/*"}),Object(C.jsx)("div",{id:"overlay"}),Object(C.jsx)("img",{src:N.default,className:"remove-image",alt:"close",onClick:function(){return function(e){x[e]="",A(Object(n.a)(x))}(a)}})]}):Object(C.jsxs)("button",{children:[Object(C.jsx)("img",{src:k.default,alt:"card-image",accept:"image/*"}),Object(C.jsx)("input",{type:"file",className:"custom-file-input",onChange:function(t){return function(t,a){var i=t.target.files[0];if(void 0!==i){var c=new FormData;c.append("images",i),e.fileUploadApi(c).then((function(e){x[a]=e.urlPath,A(Object(n.a)(x))}))}}(t,a)}})]})})},a)}))}),x.length<10?Object(C.jsx)("button",{className:"certificate_button",type:"button",onClick:function(){return x.push(""),void A(Object(n.a)(x))},children:"+ Add More Images"}):null]}),Object(C.jsxs)("div",{className:"certificate_content",children:[Object(C.jsx)("label",{children:"Certifications"}),l.certificateFields.map((function(e,t){return Object(C.jsxs)(o.a.Fragment,{children:[Object(C.jsxs)("div",{className:"certificate_fields row no-gutters",children:[Object(C.jsx)("div",{className:"col-6 px-2",children:Object(C.jsx)("input",{placeholder:"Certification Title",name:"certificate",value:e.certificate,onChange:function(e){return G(t,e)},className:"w-100"})}),Object(C.jsx)("div",{className:"col-6 px-2",children:Object(C.jsx)(w.YearDropDown,{label:"Year you were Certified",value:e.year,name:"year",handleChange:function(e){return G(t,e)}})})]},"".concat(e,"-").concat(t)),t+1===l.certificateFields.length?Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsx)("button",{className:"certificate_button",type:"button",onClick:function(){v(Object(c.a)(Object(c.a)({},l),{},{certificateFields:[].concat(Object(n.a)(l.certificateFields),[{certificate:"",year:""}])}))},children:"+ Add Certificate's"}),t+1===l.certificateFields.length&&1!==l.certificateFields.length?Object(C.jsx)("button",{className:"certificate_button text-danger pl-3",type:"button",onClick:function(){return function(e){l.certificateFields.splice(e,1),v(Object(c.a)({},l))}(t)},children:"Remove"}):null]}):null]},t)}))]}),Object(C.jsxs)("div",{className:"trainDetails_container",children:[Object(C.jsxs)("div",{className:"training_options",children:[Object(C.jsx)("label",{children:"Where will you be training"}),Object(C.jsxs)("div",{className:"options_button",children:[Object(C.jsx)("button",{onClick:function(e){P((function(e){return!e})),e.target.blur()},className:I?"buttonTrue":"buttonFalse",children:"Virtual"}),Object(C.jsx)("button",{onClick:function(e){U((function(e){return!e})),e.target.blur()},className:M?"buttonTrue":"buttonFalse",children:"In Person"})]}),!0===I?Object(C.jsxs)("div",{className:"textarea_content",children:[Object(C.jsx)("label",{children:"Add zoom app meeting link"}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{placeholder:"add you're meeting link",value:l.zoom_link,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{zoom_link:e.target.value}))}})]}):null]}),Object(C.jsxs)("div",{className:"dd_content",children:[Object(C.jsx)("h5",{children:"Which city will you train in?"}),Object(C.jsx)("select",{value:l.neighborhood_list,name:"location",onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{neighborhood_list:e.target.value}))},children:S.map((function(e,t){return Object(C.jsx)("option",{value:e.value,children:e.label},t)}))})]}),Object(C.jsxs)("div",{className:"radio_content",children:[Object(C.jsx)("label",{children:"Do you have a facility or location where you will train clients?"}),Object(C.jsx)("br",{}),Object(C.jsx)(_,{checked:1==l.haveAFacility,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{haveAFacility:!l.haveAFacility}))},value:l.haveAFacility}),"\u2002",Object(C.jsx)("span",{className:"radio",children:"Yes"})," \u2002",Object(C.jsx)(s.a,{checked:0==l.haveAFacility,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{haveAFacility:!l.haveAFacility}))},value:l.haveAFacility}),"\u2002",Object(C.jsx)("span",{className:"radio",children:"No"})]}),Object(C.jsxs)("div",{className:"textarea_content",children:[Object(C.jsx)("label",{children:"Details of the facility/location"}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{placeholder:"Enter the Details of the location",value:l.facility_details,disabled:!l.haveAFacility,className:"".concat(l.haveAFacility?"":"disable-btn"),onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{facility_details:e.target.value}))}})]}),Object(C.jsxs)("div",{className:"radio_content",children:[Object(C.jsx)("label",{children:"Are you willing to travel to clients in your city/region?"}),Object(C.jsx)("br",{}),Object(C.jsx)(_,{checked:!0===l.willingToTravel,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{willingToTravel:!l.willingToTravel}))},value:l.willingToTravel}),"\u2002",Object(C.jsx)("span",{className:"radio",children:"Yes"})," \u2002",Object(C.jsx)(_,{checked:!1===l.willingToTravel,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{willingToTravel:!l.willingToTravel}))},value:l.willingToTravel}),"\u2002",Object(C.jsx)("span",{className:"radio",children:"No"})]}),Object(C.jsxs)("div",{className:"textarea_content",children:[Object(C.jsx)("label",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{placeholder:"Neighborhood List",value:l.serviceableNeighbourHood,disabled:!l.willingToTravel,className:"".concat(l.willingToTravel?"":"disable-btn"),onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{serviceableNeighbourHood:e.target.value}))}})]}),Object(C.jsxs)("div",{className:"input_content",children:[Object(C.jsx)("label",{children:"Instagram"}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{placeholder:"Add your Instagram Handle",value:l.instagram,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{instagram:e.target.value}))}}),Object(C.jsx)("img",{src:m.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"input_content",children:[Object(C.jsx)("label",{children:"Website"}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{placeholder:"Add your Web Link",value:l.website,onChange:function(e){v(Object(c.a)(Object(c.a)({},l),{},{website:e.target.value}))}}),Object(C.jsx)("img",{src:f.default,alt:"icon"})]})]}),Object(C.jsx)(j.default,{trainerSetupData:l,setTrainerSetupData:v}),Object(C.jsxs)("div",{className:"card_agree",children:[Object(C.jsx)("input",{type:"checkbox",id:"agree",name:"agree",onChange:function(){$(!R)}}),Object(C.jsxs)("label",{children:["Check here to acknowledge that you have read and agree to the Motto trainer",Object(C.jsx)("a",{href:"/agreement",target:"_blank",children:"terms and conditions"})]})]}),Object(C.jsxs)("div",{className:"submit_button",children:[Object(C.jsx)("button",{onClick:function(){return function(){var e=[];M&&e.push("inPerson"),I&&e.push("vitual");var t={images:x.filter((function(e){return""!=e})),myMotto:l.motto,applicationStatus:"setupComplete",trainingProcess:l.training_process,certification:l.certificateFields,virtualMeetingLink:l.zoom_link,trainingFacility:l.haveAFacility,willingToTravel:l.willingToTravel,servicableLocation:[l.neighborhood_list],instagramProfile:l.instagram,websiteLink:l.website,firstName:q.firstName,lastName:q.lastName,areaOfExpertise:q.areaOfExpertise,description:q.description,oneOnOnePricing:q.oneOnOnePricing,socialSessionPricing:q.socialSessionPricing,classSessionPricing:q.classSessionPricing,identityName:l.identityNameUS,identityNo:l.governmentIdNumber,insuranceName:l.insuranceNameUS,insuranceAmount:l.coverAmount,insurance:l.insurance,identity:l.governmentId,serviceableNeighbourHood:l.serviceableNeighbourHood,preferedTrainingMode:e},a=g.TrainerApi.updateTrainerAvailabilityApi;a.body=t,B(!0),Object(y.api)(Object(c.a)({},a)).then((function(){te()})).catch((function(){return B(!1)}))}()},type:"submit",disabled:!R,className:"".concat(H?"loading":"btn"),children:H?"Loading...":Object(C.jsxs)("a",{children:[" ","Continue to account",Object(C.jsx)(b.default,{})]})}),Object(C.jsx)("div",{className:"terms_msg",children:R?null:Object(C.jsx)("span",{children:"Please Agree to the above terms and conditions to continue"})})]})]})})})}));t.default=A},396:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},398:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},399:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},404:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},424:function(e,t,a){},425:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Image 1.8f33ee1e.svg"},488:function(e,t,a){},687:function(e,t,a){"use strict";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];e.apply(this,n),t.apply(this,n)}}),(function(){}))}a.d(t,"a",(function(){return n}))},702:function(e,t,a){"use strict";var n=a(2),i=n.createContext();t.a=i},760:function(e,t,a){"use strict";var n=a(6),i=a(686),c=a(2),r=(a(3),a(690)),o=a(730),l=a(685),s=Object(l.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(692);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},c.createElement(s,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),j=a(714),h=a(693),m=a(687),f=a(702);var v=c.createElement(b,{checked:!0}),O=c.createElement(b,null),g=c.forwardRef((function(e,t){var a=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,j=e.size,g=void 0===j?"medium":j,p=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),x=c.useContext(f.a),y=a,N=Object(m.a)(b,x&&x.onChange),w=u;return x&&("undefined"===typeof y&&(y=x.value===e.value),"undefined"===typeof w&&(w=x.name)),c.createElement(o.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(O,{fontSize:"small"===g?"small":"default"}),checkedIcon:c.cloneElement(v,{fontSize:"small"===g?"small":"default"}),classes:{root:Object(r.a)(l.root,l["color".concat(Object(h.a)(d))]),checked:l.checked,disabled:l.disabled},name:w,checked:y,onChange:N,ref:t},p))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(g)},780:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=37.2e6e7b7f.chunk.js.map