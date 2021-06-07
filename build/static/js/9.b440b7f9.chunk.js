(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[9,114,119,209,210,211,213,235,258,260,276,279,282,283,307],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(18),i=a(3),c=a(15),r=a(16),s=a(20),l=a(19),o=a(2),d=a(702),j=a(653),b=(a(354),a(350)),u=a(1),h=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,c=e.options,r=void 0===c?[]:c,s=e.value,l=void 0===s?"":s,o=e.name,h=void 0===o?"":o,m=e.placeholder,f=void 0===m?"Select":m,O=e.disabled,p=void 0!==O&&O,v=e.arrow,x=void 0!==v&&v,g=e.isReadOnly,y=void 0!==g&&g,N=e.label,_=void 0===N?"":N,w=e.isMulti,k=void 0!==w&&w,C=e.isClearable,S=void 0!==C&&C,A=e.isSearchable,I=void 0!==A&&A,T=e.isBoldLabel,F=void 0!==T&&T,D=e.showArrow,P=void 0===D||D,L={placeholder:function(e){return Object(i.a)(Object(i.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(i.a)(Object(i.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(i.a)(Object(i.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(i.a)(Object(i.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(u.jsx)(u.Fragment,{children:y?Object(u.jsx)("p",{children:l}):Object(u.jsxs)("div",{className:"".concat(x?"select-section w-100":"Select"," ").concat(F?"mt-0":""),children:[""!==_?Object(u.jsx)("div",{children:Object(u.jsx)("label",{className:F?"mb-1 text-black-22":"font-weight-normal mb-1",children:_})}):null,Object(u.jsx)(j.a,{className:a,classNamePrefix:"Select",isDisabled:p,isClearable:S,isSearchable:I,name:h,options:r,onChange:this.handleChange,isMulti:k,showArrow:P,placeholder:f,styles:L,value:r&&r.length>0&&r.find((function(e){return e.value===l}))?r.find((function(e){return e.value===l})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(u.jsx)(d.l.DropdownIndicator,Object(i.a)(Object(i.a)({},e),{},{children:Object(u.jsx)("img",{src:b.default,alt:"dropdown"})}))}}})]})})}}]),a}(o.Component)},250:function(e,t,a){"use strict";a.r(t);var n=a(3),i=(a(2),a(405),a(406),a(39)),c=a(332),r=a(49),s=a(27),l=a(34),o=a(1),d=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}],j=Object(l.b)(null,(function(e){return Object(s.b)({fileUploadApi:r.fileUpload},e)}))((function(e){var t=e.trainerSetupData,a=e.setTrainerSetupData,r=e.fileUploadApi;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"payment_container container",children:Object(o.jsxs)("div",{className:"payment_wrapper",children:[Object(o.jsxs)("div",{className:"payment_heading",children:[Object(o.jsx)("h2",{children:"Security & Payment Information"}),Object(o.jsx)("p",{children:"The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them."})]}),Object(o.jsxs)("div",{className:"payment_inner ",children:[Object(o.jsxs)("div",{className:"payment_item1",children:[Object(o.jsx)("h6",{children:"Please upload any one of your US government issued ID\u2019s"}),Object(o.jsxs)("div",{className:"inputs_payment1",children:[Object(o.jsx)("select",{value:t.identityNameUS,name:"identityNameUS",onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{identityNameUS:e.target.value}))},children:d.map((function(e,t){return Object(o.jsx)("option",{value:e.value,children:e.label},t)}))}),Object(o.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:t.governmentIdNumber,onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{governmentIdNumber:e.target.value}))},name:"governmentIdNumber"}),Object(o.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",onChange:function(e){!function(e){var i=e.target.files[0];if(void 0!==i){var c=new FormData;c.append("identity",i),r(c).then((function(e){a(Object(n.a)(Object(n.a)({},t),{},{governmentId:e.urlPath}))}))}}(e)}}),t.governmentId?Object(o.jsx)("a",{className:"checkarrow pl-3",children:Object(o.jsx)("img",{src:c.default,alt:"Uploaded"})}):Object(o.jsx)("a",{className:"checkarrow",children:Object(o.jsx)(i.default,{})})]})]}),Object(o.jsxs)("div",{className:"payment_item1",children:[Object(o.jsx)("h6",{children:"Please upload your insurance information"}),Object(o.jsxs)("div",{className:"inputs_payment1",children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:t.insuranceNameUS,onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{insuranceNameUS:e.target.value}))},name:"insuranceNameUS"}),Object(o.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:t.coverAmount,onChange:function(e){a(Object(n.a)(Object(n.a)({},t),{},{coverAmount:e.target.value}))},name:"coverAmount"}),Object(o.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e){var i=e.target.files[0];if(void 0!==i){var c=new FormData;c.append("insurance",i),r(c).then((function(e){a(Object(n.a)(Object(n.a)({},t),{},{insurance:e.urlPath}))}))}}(e)}}),t.insurance?Object(o.jsx)("a",{className:"checkarrow pl-3",children:Object(o.jsx)("img",{src:c.default,alt:"Uploaded"})}):Object(o.jsx)("a",{className:"checkarrow",children:Object(o.jsx)(i.default,{})})]})]})]})]})})})}));t.default=j},251:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(332),c=a(40),r=a(192),s=a(345),l=a(6),o=a(98),d=(a(409),a(1));t.default=function(e){var t=e.open,a=e.setOpen,j=e.trainerSetupData,b=Object(n.useRef)(null),u=Object(d.jsx)("img",{src:o.default,alt:"close"});return Object(d.jsx)("div",{children:t?Object(d.jsx)(r.a,{open:t,onClose:function(){a(!1)},center:!0,closeIcon:u,container:b.current,styles:{boaderRadius:"10px"},classNames:{modal:"customModal"},children:Object(d.jsx)("div",{className:"profile_main",children:Object(d.jsx)("div",{className:"profile_outter_container",children:Object(d.jsxs)("div",{className:"profile_wrapper_container ",children:[Object(d.jsx)("div",{className:"profile_header",children:Object(d.jsxs)("div",{className:"inner_profile container",children:[Object(d.jsx)("img",{src:"https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg",alt:"Image not Added"}),Object(d.jsxs)("div",{className:"profile_header_inner",children:[Object(d.jsx)("h2",{children:"firstname and lastname"}),Object(d.jsx)("p",{children:"areaOfExpertise"})]})]})}),Object(d.jsxs)("div",{className:"profile_main_contents container",children:[Object(d.jsxs)("div",{className:"profile_aside",children:[Object(d.jsxs)("div",{className:"profile_aside_link",children:[Object(d.jsx)("label",{children:"View Calender"}),Object(d.jsx)("img",{src:c.default,alt:"icon"})]}),Object(d.jsxs)("div",{className:"profile_aside_items",children:[Object(d.jsxs)("div",{className:"profile_aside_item",children:[Object(d.jsx)("h2",{children:"1 ON 1 INDIVIDUAL TRAINING"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"profile_aside_inner_item",children:[Object(d.jsxs)("h6",{children:["50",Object(d.jsx)("span",{children:"(Virtual Session)"})]}),Object(d.jsxs)("h6",{children:["51",Object(d.jsx)("span",{children:"(In Person Session)"})]}),Object(d.jsx)("h5",{children:"See package rates during checkout"})]})]}),Object(d.jsxs)("div",{className:"profile_aside_item",children:[Object(d.jsxs)("h2",{children:["SOCIAL SESSIONS"," ",Object(d.jsx)("img",{src:s.default,alt:"icon",onClick:function(){return a(!0)},className:"model_Qmark"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"profile_aside_inner_item",children:[Object(d.jsxs)("h6",{children:["40",Object(d.jsx)("span",{children:"/ Session (For 2 People)"})]}),Object(d.jsx)("h6",{children:Object(d.jsx)("span",{children:"/ Session (For 3 People)"})}),Object(d.jsxs)("h6",{children:["58",Object(d.jsx)("span",{children:"/ Session (For 4 People)"})]})]})]}),Object(d.jsxs)("div",{className:"profile_aside_item",children:[Object(d.jsxs)("h2",{children:["CREATE A CLASS",Object(d.jsx)("img",{src:s.default,alt:"icon",className:"model_Qmark"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"profile_aside_inner_item",children:[Object(d.jsxs)("h6",{children:["70",Object(d.jsx)("span",{children:"Flat Rate Class (For 5-15 People)"})]}),Object(d.jsx)("h5",{children:"If trainer offers Virtual Social Sessions and Classes they will be at a discount to in person rates above. You will see these prior to checkout."})]})]}),Object(d.jsxs)("div",{className:"profile_aside_item",children:[Object(d.jsx)("h2",{children:"TRAINING LOCATIONS"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"profile_aside_inner_item",children:[Object(d.jsxs)("div",{className:"profile_location",children:[Object(d.jsx)("img",{src:i.default,alt:"icon"}),Object(d.jsx)("h4",{children:"demo"})]}),Object(d.jsxs)("div",{className:"profile_location",children:[Object(d.jsx)("img",{src:i.default,alt:"icon"}),Object(d.jsxs)("h4",{children:["Trainer\u2019s Location ",Object(d.jsx)(l.a,{children:"View Location"})]})]}),Object(d.jsxs)("div",{className:"profile_location",children:[Object(d.jsx)("img",{src:i.default,alt:"icon"}),Object(d.jsx)("h4",{children:"Your Location"})]})]})]})]})]}),Object(d.jsx)("div",{className:"profile_trainer_data",children:Object(d.jsxs)("div",{className:"profile_right_data",children:[Object(d.jsx)("div",{className:"profile_right_item1",children:Object(d.jsxs)("h6",{children:["motto",j.motto?j.motto:"Motto not Added"]})}),Object(d.jsxs)("div",{className:"profile_right_item2",style:{width:"40rem"},children:[Object(d.jsx)("h4",{children:"About "}),Object(d.jsx)("p",{children:"desc"}),Object(d.jsx)("div",{className:"profile_images",children:"NO IMAGES ADDED"})]}),Object(d.jsxs)("div",{className:"profile_right_item3 mb-5 pb-5",children:[Object(d.jsx)("h2",{children:"Certifications"}),Object(d.jsxs)("div",{className:"profile_item3_inner",children:[Object(d.jsxs)("div",{className:"inner_items",children:[Object(d.jsx)("img",{src:i.default,alt:"check"}),Object(d.jsx)("h6",{children:"certification 1"})]}),Object(d.jsxs)("div",{className:"inner_items",children:[Object(d.jsx)("img",{src:i.default,alt:"check"}),Object(d.jsx)("h6",{children:"certification2"})]}),Object(d.jsxs)("div",{className:"inner_items",children:[Object(d.jsx)("img",{src:i.default,alt:"check"}),Object(d.jsx)("h6",{children:"certification 3"})]}),Object(d.jsxs)("div",{className:"inner_items",children:[Object(d.jsx)("img",{src:i.default,alt:"check"}),Object(d.jsx)("h6",{children:"certification 4"})]})]})]})]})})]})]})})})}):null})}},259:function(e,t,a){"use strict";a.r(t);var n=a(598),i=a(12),c=a(3),r=a(2),s=a.n(r),l=a(49),o=a(729),d=a(330),j=(a(409),a(6)),b=(a(518),a(68)),u=a(250),h=a(251),m=a(356),f=a(357),O=(a(17),a(608)),p=a(791),v=a(10),x=a(27),g=a(34),y=a(75),N=a(98),_=(a(102),a(428)),w=a(1),k=Object(O.a)({root:{"&$checked":{color:p.a[600]}},checked:{}})((function(e){return Object(w.jsx)(o.a,Object(c.a)({color:"default"},e))})),C=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}];var S=Object(g.b)(null,(function(e){return Object(x.b)({fileUploadApi:l.fileUpload,trainerDetail:l.trainerDetail,getStripeAccLink:l.getStripeAccLink},e)}))((function(e){var t=Object(r.useState)({motto:"",training_process:"",facility_details:"",neighborhood_list:"",haveAFacility:"",willingToTravel:"",instagram:"",website:"",serviceableLocation:"",certificateFields:[{certificate:"",year:""}],trainingLocation:[],zoom_link:"",identityNameUS:"",insuranceNameUS:"",coverAmount:"",governmentId:"",governmentIdNumber:"",insurance:""}),a=Object(i.a)(t,2),l=a[0],O=a[1],p=Object(r.useState)(["","","","",""]),x=Object(i.a)(p,2),g=x[0],S=x[1],A=Object(r.useState)(!0),I=Object(i.a)(A,2),T=I[0],F=I[1],D=Object(r.useState)(!0),P=Object(i.a)(D,2),L=P[0],M=P[1],E=Object(r.useState)(!1),U=Object(i.a)(E,2),z=U[0],R=U[1],B=Object(r.useState)(!1),W=Object(i.a)(B,2),Y=W[0],V=W[1],$=Object(r.useState)({}),H=Object(i.a)($,2),G=H[0],Q=H[1];Object(r.useEffect)((function(){e.trainerDetail().then((function(e){Q(e),e.images&&0!==e.images.length&&S(e.images);var t=e.identityInfromation,a=void 0===t?{}:t,n=e.insuranceInformation,i=void 0===n?{}:n;O(Object(c.a)(Object(c.a)({},l),{},{motto:e.myMotto,training_process:e.trainingProcess,certificateFields:e.certification,instagram:e.instagramProfile,website:e.websiteLink,willingToTravel:e.willingToTravel,haveAFacility:e.trainingFacility,facility_details:e.trainingFacilityLocation,zoom_link:e.virtualMeetingLink,neighborhood_list:e.servicableLocation,identityNameUS:a?a.identityName:"",governmentIdNumber:a?a.identityNo:"",insuranceNameUS:i?i.insuranceName:"",coverAmount:i?i.insuranceAmount:"",insurance:i?i.insurance:"",governmentId:a?a.identity:""}))}))}),[]);var J=function(e,t){var a=Object(n.a)(l.certificateFields);a[e][t.target.name]=t.target.value,O(Object(c.a)(Object(c.a)({},l),{},{certificateFields:a}))},Z=Object(r.useState)(!1),q=Object(i.a)(Z,2),K=q[0],X=q[1],ee=function(){e.getStripeAccLink().then((function(e){var t=e.url;window.location.href=t,R(!1)})).catch((function(){return R(!1)}))};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"inner_setup_container",children:[Object(w.jsxs)("div",{className:"setup_link",children:[Object(w.jsxs)("div",{className:"inner_link",children:[Object(w.jsx)("img",{src:d.default,alt:"icon"}),Object(w.jsx)(j.a,{to:"/trainer/card",children:" Edit Trainer Card "})]}),Object(w.jsx)("div",{className:"inner_link_preview",children:Object(w.jsx)("div",{onClick:function(){X((function(e){return!e}))},className:"prev_profile",children:"Preview Your Trainer Profile"})})]}),Object(w.jsx)(h.default,{open:K,setOpen:X,trainerSetupData:l}),Object(w.jsxs)("div",{className:"setup_headings",children:[Object(w.jsx)("h2",{children:"Build out the rest of your Profile!"}),Object(w.jsx)("p",{children:"Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time."})]}),Object(w.jsxs)("div",{className:"textarea_content",children:[Object(w.jsx)("label",{children:"What\u2019s your Motto?"}),Object(w.jsx)("br",{}),Object(w.jsx)("textarea",{placeholder:"Tell us all about it",value:l.motto,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{motto:e.target.value}))},maxlength:"500"})]}),Object(w.jsxs)("div",{className:"textarea_content",children:[Object(w.jsx)("label",{children:"Tell us about you and describe your training process"}),Object(w.jsx)("br",{}),Object(w.jsx)("textarea",{placeholder:"Tell us all about it",value:l.training_process,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{training_process:e.target.value}))}})]}),Object(w.jsxs)("div",{className:"certificate_content",children:[Object(w.jsx)("label",{children:"Throw in some photos showcasing you & your skills"}),Object(w.jsx)("div",{className:"row",children:g.map((function(t,a){return Object(w.jsx)("div",{className:"col-3 w-100 mt-3 px-2",children:Object(w.jsx)("div",{className:"image-upload-card btn-file-input",children:""!==t?Object(w.jsxs)("button",{className:"uploaded-image",children:[Object(w.jsx)("img",{src:t,alt:"card-image",accept:"image/*"}),Object(w.jsx)("div",{id:"overlay"}),Object(w.jsx)("img",{src:N.default,className:"remove-image",alt:"close",onClick:function(){return function(e){g[e]="",S(Object(n.a)(g))}(a)}})]}):Object(w.jsxs)("button",{children:[Object(w.jsx)("img",{src:_.default,alt:"card-image",accept:"image/*"}),Object(w.jsx)("input",{type:"file",className:"custom-file-input",onChange:function(t){return function(t,a){var i=t.target.files[0];if(void 0!==i){var c=new FormData;c.append("images",i),e.fileUploadApi(c).then((function(e){g[a]=e.urlPath,S(Object(n.a)(g))}))}}(t,a)}})]})})},a)}))}),g.length<10?Object(w.jsx)("button",{className:"certificate_button",type:"button",onClick:function(){return g.push(""),void S(Object(n.a)(g))},children:"+ Add More Images"}):null]}),Object(w.jsxs)("div",{className:"certificate_content",children:[Object(w.jsx)("label",{children:"Certifications"}),l.certificateFields.map((function(e,t){return Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsxs)("div",{className:"certificate_fields",children:[Object(w.jsx)("input",{placeholder:"Certification Title",name:"certificate",value:e.certificate,onChange:function(e){return J(t,e)}}),Object(w.jsx)("input",{placeholder:"Year you were certified",name:"year",value:e.year,onChange:function(e){return J(t,e)},type:"number"})]},"".concat(e,"-").concat(t)),t+1===l.certificateFields.length?Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("button",{className:"certificate_button",type:"button",onClick:function(){O(Object(c.a)(Object(c.a)({},l),{},{certificateFields:[].concat(Object(n.a)(l.certificateFields),[{certificate:"",year:""}])}))},children:"+ Add Certificate's"}),t+1===l.certificateFields.length&&1!==l.certificateFields.length?Object(w.jsx)("button",{className:"certificate_button text-danger pl-3",type:"button",onClick:function(){return function(e){l.certificateFields.splice(e,1),O(Object(c.a)({},l))}(t)},children:"Remove"}):null]}):null]},t)}))]}),Object(w.jsxs)("div",{className:"trainDetails_container",children:[Object(w.jsxs)("div",{className:"training_options",children:[Object(w.jsx)("label",{children:"Where will you be training"}),Object(w.jsxs)("div",{className:"options_button",children:[Object(w.jsx)("button",{onClick:function(e){F((function(e){return!e}))},className:T?"buttonTrue":"buttonFalse",children:"Virtual"}),Object(w.jsx)("button",{onClick:function(e){M((function(e){return!e}))},className:L?"buttonTrue":"buttonFalse",children:"In Person"})]}),!0===T?Object(w.jsxs)("div",{className:"textarea_content",children:[Object(w.jsx)("label",{children:"Add zoom app meeting link"}),Object(w.jsx)("br",{}),Object(w.jsx)("textarea",{placeholder:"add you're meeting link",value:l.zoom_link,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{zoom_link:e.target.value}))}})]}):null]}),Object(w.jsxs)("div",{className:"dd_content",children:[Object(w.jsx)("h5",{children:"Which city will you train in?"}),Object(w.jsx)("select",{value:l.neighborhood_list,name:"location",onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{neighborhood_list:e.target.value}))},children:C.map((function(e,t){return Object(w.jsx)("option",{value:e.value,children:e.label},t)}))})]}),Object(w.jsxs)("div",{className:"radio_content",children:[Object(w.jsx)("label",{children:"Do you have a facility or location where you will train clients?"}),Object(w.jsx)("br",{}),Object(w.jsx)(k,{checked:1==l.haveAFacility,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{haveAFacility:!l.haveAFacility}))},value:l.haveAFacility}),"\u2002",Object(w.jsx)("span",{className:"radio",children:"Yes"})," \u2002",Object(w.jsx)(o.a,{checked:0==l.haveAFacility,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{haveAFacility:!l.haveAFacility}))},value:l.haveAFacility}),"\u2002",Object(w.jsx)("span",{className:"radio",children:"No"})]}),Object(w.jsxs)("div",{className:"textarea_content",children:[Object(w.jsx)("label",{children:"Details of the facility/location"}),Object(w.jsx)("br",{}),Object(w.jsx)("textarea",{placeholder:"Enter the Details of the location",value:l.facility_details,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{facility_details:e.target.value}))}})]}),Object(w.jsxs)("div",{className:"radio_content",children:[Object(w.jsx)("label",{children:"Are you willing to travel to clients in your city/region?"}),Object(w.jsx)("br",{}),Object(w.jsx)(k,{checked:!0===l.willingToTravel,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{willingToTravel:!l.willingToTravel}))},value:l.willingToTravel}),"\u2002",Object(w.jsx)("span",{className:"radio",children:"Yes"})," \u2002",Object(w.jsx)(k,{checked:!1===l.willingToTravel,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{willingToTravel:!l.willingToTravel}))},value:l.willingToTravel}),"\u2002",Object(w.jsx)("span",{className:"radio",children:"No"})]}),Object(w.jsxs)("div",{className:"textarea_content",children:[Object(w.jsx)("label",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(w.jsx)("br",{}),Object(w.jsx)("textarea",{placeholder:"Neighborhood List",value:l.neighborhood_list,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{neighborhood_list:e.target.value}))}})]}),Object(w.jsxs)("div",{className:"input_content",children:[Object(w.jsx)("label",{children:"Instagram"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{placeholder:"Add your Instagram Handle",value:l.instagram,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{instagram:e.target.value}))}}),Object(w.jsx)("img",{src:m.default,alt:"icon"})]}),Object(w.jsxs)("div",{className:"input_content",children:[Object(w.jsx)("label",{children:"Website"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{placeholder:"Add your Web Link",value:l.website,onChange:function(e){O(Object(c.a)(Object(c.a)({},l),{},{website:e.target.value}))}}),Object(w.jsx)("img",{src:f.default,alt:"icon"})]})]}),Object(w.jsx)(u.default,{trainerSetupData:l,setTrainerSetupData:O}),Object(w.jsxs)("div",{className:"card_agree",children:[Object(w.jsx)("input",{type:"checkbox",id:"agree",name:"agree",onChange:function(){V(!Y)}}),Object(w.jsxs)("label",{children:["Check here to acknowledge that you have read and agree to the Motto trainer",Object(w.jsx)("a",{href:"/agreement",target:"_blank",children:"terms and conditions"})]})]}),Object(w.jsxs)("div",{className:"submit_button",children:[Object(w.jsx)("button",{onClick:function(){return function(){var e={images:g.filter((function(e){return""!=e})),myMotto:l.motto,applicationStatus:"setupComplete",trainingProcess:l.training_process,certification:l.certificateFields,virtualMeetingLink:l.zoom_link,trainingFacility:l.haveAFacility,willingToTravel:l.willingToTravel,servicableLocation:l.neighborhood_list,instagramProfile:l.instagram,websiteLink:l.website,firstName:G.firstName,lastName:G.lastName,areaOfExpertise:G.areaOfExpertise,description:G.description,oneOnOnePricing:G.oneOnOnePricing,socialSessionPricing:G.socialSessionPricing,classSessionPricing:G.classSessionPricing,identityName:l.identityNameUS,identityNo:l.governmentIdNumber,insuranceName:l.insuranceNameUS,insuranceAmount:l.coverAmount,insurance:l.insurance,identity:l.governmentId},t=v.TrainerApi.updateTrainerAvailabilityApi;t.body=e,R(!0),Object(y.api)(Object(c.a)({},t)).then((function(){ee()})).catch((function(){return R(!1)}))}()},type:"submit",disabled:!Y,className:"".concat(z?"loading":"btn"),children:z?"Loading...":Object(w.jsxs)("a",{children:[" ","Continue to account",Object(w.jsx)(b.default,{})]})}),Object(w.jsx)("div",{className:"terms_msg",children:Y?null:Object(w.jsx)("span",{children:"Please Agree to the above terms and conditions to continue"})})]})]})})})}));t.default=S},330:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},332:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Tick 1.bf0e36e8.svg"},345:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Q Mark.c9a955fb.svg"},350:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},354:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},357:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},405:function(e,t,a){},406:function(e,t,a){},409:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Image 1.8f33ee1e.svg"},518:function(e,t,a){},598:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(100);var i=a(70);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},616:function(e,t,a){"use strict";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];e.apply(this,n),t.apply(this,n)}}),(function(){}))}a.d(t,"a",(function(){return n}))},729:function(e,t,a){"use strict";var n=a(5),i=a(599),c=a(2),r=(a(4),a(606)),s=a(652),l=a(603),o=Object(l.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),j=a(608);var b=Object(j.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},c.createElement(o,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),u=a(628),h=a(619),m=a(616);var f=c.createContext();var O=c.createElement(b,{checked:!0}),p=c.createElement(b,null),v=c.forwardRef((function(e,t){var a=e.checked,l=e.classes,o=e.color,d=void 0===o?"secondary":o,j=e.name,b=e.onChange,u=e.size,v=void 0===u?"medium":u,x=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),g=c.useContext(f),y=a,N=Object(m.a)(b,g&&g.onChange),_=j;return g&&("undefined"===typeof y&&(y=g.value===e.value),"undefined"===typeof _&&(_=g.name)),c.createElement(s.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(p,{fontSize:"small"===v?"small":"default"}),checkedIcon:c.cloneElement(O,{fontSize:"small"===v?"small":"default"}),classes:{root:Object(r.a)(l.root,l["color".concat(Object(h.a)(d))]),checked:l.checked,disabled:l.disabled},name:_,checked:y,onChange:N,ref:t},x))}));t.a=Object(j.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(v)},791:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=9.b440b7f9.chunk.js.map