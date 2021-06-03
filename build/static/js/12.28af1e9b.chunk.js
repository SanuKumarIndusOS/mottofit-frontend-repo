(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[12,66,87,136,199,200,201,202,203,204,246,247,248,250,264,270,271,272,295,296],{132:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i(10),c=i(2),r=i.n(c),o=(i(466),i(599)),s=(i(465),i(41)),l=i(330),d=i(1),u=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}];t.default=function(e){var t=e.onChange,i=e.trainerData,c=e.setTrainerData,j="Security & Payment Information",b="The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them.",h="Please upload any one of your US government issued ID\u2019s",m="Please upload your insurance information",p=r.a.useState(),f=Object(a.a)(p,2),O=(f[0],f[1],function(e){var a=e.target,c=a.name,r=a.value,o=Object(n.a)({},i);o[c]=r,t(o)});return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"payment_container container",children:Object(d.jsxs)("div",{className:"payment_wrapper",children:[Object(d.jsxs)("div",{className:"payment_heading",children:[Object(d.jsx)("h2",{children:j}),Object(d.jsx)("p",{children:b})]}),Object(d.jsxs)("div",{className:"payment_inner ",children:[Object(d.jsxs)("div",{className:"payment_item1",children:[Object(d.jsx)("h6",{children:h}),Object(d.jsxs)("div",{className:"inputs_payment1",children:[Object(d.jsx)(o.Dropdown,{title:"Select government ID\u2019s ",list:u,value:i.identityNameUS,onChange:function(e){c(Object(n.a)(Object(n.a)({},i),{},{identityNameUS:e.value}))},name:"identityNameUS"}),Object(d.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:i.governmentIdNumber,onChange:O,name:"governmentIdNumber"}),Object(d.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",value:i.governmentId,onChange:O}),i.governmentId?Object(d.jsx)("img",{src:l.default,alt:"Uploaded"}):Object(d.jsx)("a",{className:"checkarrow",children:Object(d.jsx)(s.default,{})})]})]}),Object(d.jsxs)("div",{className:"payment_item1",children:[Object(d.jsx)("h6",{children:m}),Object(d.jsxs)("div",{className:"inputs_payment1",children:[Object(d.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:i.insuranceNameUS,onChange:O,name:"insuranceNameUS"}),Object(d.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:i.coverAmount,onChange:O,name:"coverAmount"}),Object(d.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",value:i.insurance,onChange:O}),i.insurance?Object(d.jsx)("img",{src:l.default,alt:"Uploaded"}):Object(d.jsx)("a",{className:"checkarrow",children:Object(d.jsx)(s.default,{})})]})]})]})]})})})}},147:function(e,t,i){"use strict";i.r(t);var n=i(18),a=i(580),c=i(10),r=i(4),o=i(2),s=i.n(o),l=(i(412),i(132)),d=(i(505),i(348)),u=i(349),j=(i(414),i(413)),b=i(316),h=i(6),m=i(69),p=i(589),f=i(661),O=i(650),v=(i(21),i(27)),g=i(34),x=i(49),N=i(14),y=i(13),P=i(73),_=(i(79),i(188)),L=i.n(_),S=i(186),k=i(100),C=(i(446),i(445),i(347)),A=(i(384),i(42)),w=i(330),T=(i(385),i(599)),I=(i(504),i(216)),D=i(1),R=[],M=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],E=Object(p.a)({root:{"&$checked":{color:f.a[600]}},checked:{}})((function(e){return Object(D.jsx)(O.a,Object(r.a)({color:"default"},e))})),U=function(e){console.log(e,"props");var t=Object(o.useState)(),i=Object(c.a)(t,2),n=i[0],a=i[1],r=Object(o.useState)(),s=Object(c.a)(r,2),l=s[0],d=s[1],u=Object(o.useRef)();return Object(o.useEffect)((function(){if(n){var e=new FileReader;e.onloadend=function(){d(e.result)},e.readAsDataURL(n)}else d(null)}),[n]),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"renderImage",children:[l?Object(D.jsx)("img",{src:l,style:{objectFit:"cover",width:"180px",height:"180px"},onClick:function(){d(null)}}):Object(D.jsx)("div",{className:"combin_profile",children:Object(D.jsxs)("button",{onClick:function(e){e.preventDefault(),u.current.click()},children:[console.log(e.value,"props.image"),Object(D.jsx)("img",{src:e.value?e.value:n,alt:"icon",style:{objectFit:"cover",width:"180px",height:"180px"}})]})}),Object(D.jsx)("input",{type:"file",ref:u,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?(a(t),R.push(t),console.log(R)):a(null)}})]})})},F=Object(g.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(v.b)({updateTrainerDetails:x.updateTrainerDetails,fileUpload:x.fileUpload},e)}))((function(e){var t,i,p,f=e.updateTrainerDetails,O=e.trainerPersonalData,v=e.details,g=e.fileUpload,x="Build out the rest of your Profile!",_="Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time.",F="What\u2019s your Motto?",V="Tell us about you and describe your training process",H="Throw in some photos showcasing you & your skills",Y="Certifications you\u2019d like to display",z="Where will you be training",W="Which city will you train in?",B="Website",$="Instagram",G=s.a.useState("a"),Q=Object(c.a)(G,2),J=Q[0],Z=Q[1],K=s.a.useState(""),q=Object(c.a)(K,2),X=q[0],ee=q[1],te=Object(o.useState)([{image:""}]),ie=Object(c.a)(te,2),ne=ie[0],ae=ie[1],ce=Object(o.useState)(!1),re=Object(c.a)(ce,2),oe=re[0],se=re[1],le=Object(o.useState)([{certificate:"",year:"",upload:""}]),de=Object(c.a)(le,2),ue=de[0],je=de[1],be=Object(o.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],serviceableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:"",governmentId:"",insurance:"",governmentIdNumber:"",coverAmount:"",virtualMeetingHandle:"",virtualMeetingLink:"",identityNameUS:"",insuranceNameUS:""}),he=Object(c.a)(be,2),me=he[0],pe=he[1],fe=s.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",willingToTravel:"0",servicableLocation:""}),Oe=Object(c.a)(fe,2),ve=Oe[0],ge=Oe[1],xe=function(e){ee(e.target.value),ge(Object(r.a)(Object(r.a)({},ve),{},{willingToTravel:e.target.value}))},Ne=function(e){Z(e.target.value)},ye=Object(o.useState)(!1),Pe=Object(c.a)(ye,2),_e=Pe[0],Le=Pe[1],Se=Object(o.useRef)(null),ke=Object(D.jsx)("img",{src:k.default,alt:"close"}),Ce=function(e,t){var i=Object(a.a)(ue);i[e][t.target.name]=t.target.value,je(i)};var Ae=function(e,t){e.preventDefault&&e.preventDefault();var i=e.target||e||{},n=i.name,c=i.value,o=(i.label,Object(r.a)({},me)),s=Array.isArray(e);"trainingLocation"===n?o.trainingLocation.includes(t)?o.trainingLocation=o.trainingLocation.filter((function(e){return e!==t})):o.trainingLocation=[].concat(Object(a.a)(o.trainingLocation),[t]):o["".concat(s?e[0].name:n)]=s?e:c,pe(o)},we=function(){var e=y.PaymentApi.getStripeAccLink;Object(P.api)(Object(r.a)({},e)).then((function(e){var t=e.data,i=(e.message,t.url);window.location.href=i})).catch((function(e){return console.log(e)}))};Object(o.useEffect)((function(){if(Object.keys(O).length<5)return N.history.push("/trainer/card");var e=O||{},t=e.trainingProcess,i=void 0===t?"":t,a=e.myMotto,c=void 0===a?"":a,o=e.preferedTrainingMode,s=void 0===o?"":o,l=e.websiteLink,d=void 0===l?"":l,u=(e.youtubeLink,e.instagramProfile),j=void 0===u?"":u,b=e.currentExperience,h=void 0===b?{}:b,m=e.certification,p=void 0===m?[]:m,g=e.serviceableLocation,x=void 0===g?[]:g,y=(h||{}).workLocation,P=void 0===y?"":y,_={details:Object(r.a)(Object(r.a)({},v),{},Object(n.a)({motto:c,trainingProcessDescription:i,trainingLocation:s,servicableLocation:x.map((function(e){return{label:e,value:e,name:"serviceableLocation"}})),location:P,websiteLink:d,instaHandle:j,willingToTravel:ve.willingToTravel},"servicableLocation",ve.servicableLocation))},S=null===p||void 0===p?void 0:p.map((function(e){var t=e.certfiedYear;return{certificate:e.certificateName,year:t}}));je(S),f(_),L.a.get("http://doodlebluelive.com:2307/v1/trainer",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((function(e){var t=e.data.data;console.log(t),pe(Object(r.a)(Object(r.a)({},me),{},{motto:t.myMotto,trainingProcessDescription:t.trainingProcess,trainingLocation:t.preferedTrainingMode,serviceableLocation:t.location,websiteLink:t.websiteLink,instaHandle:t.instagramProfile,virtualMeetingLink:t.virtualMeetingLink,location:t.location,identityNameUS:t.identityInfromation.identityName,governmentIdNumber:t.identityInfromation.identityNumber,insuranceNameUS:t.insuranceInformation.insuranceName,coverAmount:t.insuranceInformation.insuranceAmount,governmentId:t.identityInfromation.identity,insurance:t.insuranceInformation.insurance}));var i=[];t.certification.forEach((function(e){i.push({certificate:e.certification,year:e.certfiedYear,upload:""})})),console.log(i),je([].concat(i));var n=[];t.images.map((function(e,t){n.push({image:e})})),n.length===t.images.length&&ae([].concat(n,[{image:""}])),ge(Object(r.a)(Object(r.a)({},ve),{},{hoursPerWeek:t.hoursPerWeek,preferedTrainingMode:t.preferedTrainingMode,trainingFacilityLocation:t.trainingFacilityLocation,willingToTravel:"0",servicableLocation:t.servicableLocation}))})).catch((function(e){return console.log(e)}))}),[]);var Te=Object(o.useState)({visiable:!1}),Ie=Object(c.a)(Te,2),De=Ie[0],Re=Ie[1],Me=Object(o.useState)(!1),Ee=Object(c.a)(Me,2),Ue=Ee[0],Fe=Ee[1];return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"outter_setup_container container",children:[Object(D.jsxs)("div",{className:"setup_link",children:[Object(D.jsxs)("div",{className:"inner_link",children:[Object(D.jsx)("img",{src:b.default,alt:"icon"}),Object(D.jsxs)(h.a,{to:"/trainer/card",onClick:function(){var e={details:Object(r.a)({},me)};f(e)},children:[" ","Edit Trainer Card"," "]})]}),Object(D.jsx)("div",{className:"inner_link_preview",children:Object(D.jsx)("div",{onClick:function(){Le(!0)},className:"prev_profile",children:"Preview Your Trainer Profile"})}),_e?Object(D.jsx)(S.a,{open:_e,onClose:function(){Le(!1)},center:!0,closeIcon:ke,container:Se.current,styles:{boaderRadius:"10px"},classNames:{modal:"customModal"},children:Object(D.jsx)("div",{className:"profile_main",children:Object(D.jsx)("div",{className:"profile_outter_container",children:Object(D.jsxs)("div",{className:"profile_wrapper_container ",children:[Object(D.jsx)("div",{className:"profile_header",children:Object(D.jsxs)("div",{className:"inner_profile container",children:[Object(D.jsx)("img",{src:O.profilePicture,alt:"Image not Added"}),Object(D.jsxs)("div",{className:"profile_header_inner",children:[Object(D.jsxs)("h2",{children:[me.firstName," ",me.lastName]}),Object(D.jsx)("p",{children:O.areaOfExpertise.toString()})]})]})}),Object(D.jsxs)("div",{className:"profile_main_contents container",children:[Object(D.jsxs)("div",{className:"profile_aside",children:[Object(D.jsxs)("div",{className:"profile_aside_link",children:[Object(D.jsx)("label",{children:"View Calender"}),Object(D.jsx)("img",{src:A.default,alt:"icon"})]}),Object(D.jsxs)("div",{className:"profile_aside_items",children:[O.oneOnOnePricing&&(O.oneOnOnePricing.virtualSession||O.oneOnOnePricing.inPersonAtTrainerLocation)?Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsx)("h2",{children:"1 ON 1 INDIVIDUAL TRAINING"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[O.oneOnOnePricing&&O.oneOnOnePricing.virtualSession?Object(D.jsxs)("h6",{children:[O.oneOnOnePricing.virtualSession,Object(D.jsx)("span",{children:"(Virtual Session)"})]}):null,O.oneOnOnePricing&&O.oneOnOnePricing.inPersonAtTrainerLocation?Object(D.jsxs)("h6",{children:[O.oneOnOnePricing.inPersonAtTrainerLocation,Object(D.jsx)("span",{children:"(In Person Session)"})]}):null,Object(D.jsx)("h5",{children:"See package rates during checkout"})]})]}):null,O.socialSessionPricing&&(O.socialSessionPricing.inPeronAtTrainerLocationfor2People||O.socialSessionPricing.inPeronAtTrainerLocationfor3People||O.socialSessionPricing.inPeronAtTrainerLocationfor4People)?Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsxs)("h2",{children:["SOCIAL SESSIONS"," ",Object(D.jsx)("img",{src:C.default,alt:"icon",onClick:function(){return Le(!0)},className:"model_Qmark"})]}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[O.socialSessionPricing&&O.socialSessionPricing.inPeronAtTrainerLocationfor2People?Object(D.jsxs)("h6",{children:[O.socialSessionPricing.inPeronAtTrainerLocationfor2People,Object(D.jsx)("span",{children:"/ Session (For 2 People)"})]}):null,O.socialSessionPricing&&O.socialSessionPricing.inPeronAtTrainerLocationfor3People?Object(D.jsxs)("h6",{children:[O.socialSessionPricing.inPeronAtTrainerLocationfor3People,Object(D.jsx)("span",{children:"/ Session (For 3 People)"})]}):null,O.socialSessionPricing&&O.socialSessionPricing.inPeronAtTrainerLocationfor4People?Object(D.jsxs)("h6",{children:[O.socialSessionPricing.inPeronAtTrainerLocationfor4People,Object(D.jsx)("span",{children:"/ Session (For 4 People)"})]}):null]})]}):null,O.classSessionPricing&&O.classSessionPricing.inPersonAtclientLocationfor15People?Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsxs)("h2",{children:["CREATE A CLASS",Object(D.jsx)("img",{src:C.default,alt:"icon",className:"model_Qmark"})]}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[Object(D.jsxs)("h6",{children:[O&&O.classSessionPricing?O.classSessionPricing.inPersonAtclientLocationfor15People:"",Object(D.jsx)("span",{children:"Flat Rate Class (For 5-15 People)"})]}),Object(D.jsx)("h5",{children:"If trainer offers Virtual Social Sessions and Classes they will be at a discount to in person rates above. You will see these prior to checkout."})]})]}):null,Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsx)("h2",{children:"TRAINING LOCATIONS"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[O.currentExperience.workLocation?Object(D.jsxs)("div",{className:"profile_location",children:[Object(D.jsx)("img",{src:w.default,alt:"icon"}),Object(D.jsx)("h4",{children:O.currentExperience.workLocation})]}):"",Object(D.jsxs)("div",{className:"profile_location",children:[Object(D.jsx)("img",{src:w.default,alt:"icon"}),Object(D.jsxs)("h4",{children:["Trainer\u2019s Location"," ",Object(D.jsx)(h.a,{children:"View Location"})]})]}),Object(D.jsxs)("div",{className:"profile_location",children:[Object(D.jsx)("img",{src:w.default,alt:"icon"}),Object(D.jsx)("h4",{children:"Your Location"})]})]})]})]})]}),Object(D.jsx)("div",{className:"profile_trainer_data",children:Object(D.jsxs)("div",{className:"profile_right_data",children:[Object(D.jsx)("div",{className:"profile_right_item1",children:Object(D.jsx)("h6",{children:me.motto?me.motto:"Motto not Added"})}),Object(D.jsxs)("div",{className:"profile_right_item2",style:{width:"40rem"},children:[Object(D.jsxs)("h4",{children:["About"," ",me.firstName]}),Object(D.jsx)("p",{children:me.trainingProcessDescription?me.trainingProcessDescription:"Description not Added"}),Object(D.jsx)("div",{className:"profile_images",children:"NO IMAGES ADDED"})]}),Object(D.jsxs)("div",{className:"profile_right_item3 mb-5 pb-5",children:[Object(D.jsx)("h2",{children:"Certifications"}),Object(D.jsxs)("div",{className:"profile_item3_inner",children:[Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[0]?O.certification[0].certification:"Not Added"})]}),Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[1]?O.certification[1].certification:"Not Added"})]}),Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[2]?O.certification[2].certification:"Not Added"})]}),Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[3]?O.certification[3]:"Not Added"})]})]})]})]})})]})]})})})}):null]}),Object(D.jsxs)("div",{className:"setup_container ",children:[Object(D.jsxs)("div",{className:"setup_headings",children:[Object(D.jsx)("h2",{children:x}),Object(D.jsx)("p",{children:_})]}),Object(D.jsx)("div",{className:"setup_wrapper",children:Object(D.jsx)("div",{className:"setup_formInner container",children:Object(D.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsxs)("div",{className:"setup_card1",children:[Object(D.jsx)("h6",{children:F}),Object(D.jsx)("textarea",{type:"text",placeholder:"Share the words you live or train by in 250 characters or less",onChange:Ae,value:me.motto,name:"motto",maxlength:"250"})]}),Object(D.jsxs)("div",{className:"setup_card2",children:[Object(D.jsx)("h6",{children:V}),Object(D.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"Tell clients everything you think they should know! Utilize Key words as anything you write here will be searchable through our search bar",onChange:Ae,value:me.trainingProcessDescription},"name","trainingProcessDescription"))]}),Object(D.jsxs)("div",{className:"setup_card3",children:[Object(D.jsx)("h6",{children:H}),Object(D.jsxs)("div",{className:"read_image",children:[ne.slice(0,2).map((function(e,t){return console.log(e,"inputinputinput"),console.log(ne.length),Object(D.jsx)("div",{className:"render_image",children:Object(D.jsx)(U,{value:e.image})},t)})),De?Object(D.jsx)("h5",{onClick:function(){return ae([].concat(Object(a.a)(ne),[{image:""}])),void Re(!1)},children:"+ Add More Image's"}):Object(D.jsx)("h5",{onClick:function(){return function(e){var t=Object(a.a)(ne);t.splice(e,1),ae(t),Re(!0)}()},children:"Remove"})]})]}),Object(D.jsxs)("div",{className:"setup_card4",children:[Object(D.jsx)("h6",{children:Y}),null===ue||void 0===ue?void 0:ue.map((function(e,t){return Object(D.jsxs)("div",{className:"inputs_certificate",children:[Object(D.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return Ce(t,e)}}),Object(D.jsx)("input",{type:"text",placeholder:"Year you were Certified",value:e.year,name:"year",onChange:function(e){return Ce(t,e)}})]},t)})),Object(D.jsx)("h5",{onClick:function(){je([].concat(Object(a.a)(ue),[{certificate:"",year:"",upload:""}]))},children:"+ Add Certification"})]}),Object(D.jsx)("div",{className:"setup_card5",children:Object(D.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(D.jsxs)("div",{className:"setup_item",children:[Object(D.jsx)("h6",{children:z}),Object(D.jsxs)("div",{className:"inputs_platform",children:[Object(D.jsx)("button",{onClick:function(e){return Ae(e,"Online")},className:"".concat((null===me||void 0===me||null===(t=me.trainingLocation)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(D.jsx)("button",{onClick:function(e){return Ae(e,"inperson")},className:"".concat((null===me||void 0===me||null===(i=me.trainingLocation)||void 0===i?void 0:i.includes("inperson"))?"active":""),name:"trainingLocation",children:"In Person"})]}),Object(D.jsx)("div",{className:"social_meeting_links",children:(null===me||void 0===me||null===(p=me.trainingLocation)||void 0===p?void 0:p.includes("Online"))?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h5",{children:"Add zoom meeting link"}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsx)("div",{className:"iconwrapper",children:Object(D.jsx)("textarea",{type:"text",placeholder:"Add a Google or Zoom meeting link",value:me.virtualMeetingLink,onChange:Ae,name:"virtualMeetingLink"})})})]}):null})]}),Object(D.jsxs)("div",{className:"setup_item1",children:[Object(D.jsx)("h6",{children:W}),console.log(me,me.serviceableLocation,M,"trainerData.serviceableLocation"),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsx)("div",{className:"iconwrapper",children:Object(D.jsx)(T.Dropdown,{className:"custom_dropdown",title:"Select Location",list:M,value:me.serviceableLocation,onChange:function(e){pe(Object(r.a)(Object(r.a)({},me),{},{serviceableLocation:e.value})),console.log(e.value,"eventdropvalue")},name:"location"})})})]}),Object(D.jsxs)("div",{className:"item_3",children:[Object(D.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(D.jsx)(E,{checked:"a"===J,onChange:Ne,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(D.jsx)("label",{children:"Yes"}),Object(D.jsx)(E,{checked:"b"===J,onChange:Ne,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(D.jsx)("label",{children:"No"})]}),Object(D.jsxs)("div",{className:"item_4",children:[Object(D.jsx)("h6",{children:"Details of the facility/location"}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",onChange:function(e){return ge(Object(r.a)(Object(r.a)({},ve),{},{trainingFacilityLocation:e.target.value}))},value:ve.trainingFacilityLocation})})]}),Object(D.jsxs)("div",{className:"item_5",children:[Object(D.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(D.jsx)(E,{checked:"1"===X,onChange:xe,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(D.jsx)("label",{children:" Yes!"}),Object(D.jsx)(E,{checked:"0"===X,onChange:xe,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(D.jsx)("label",{children:"No"})]}),Object(D.jsxs)("div",{className:"item_6",children:[Object(D.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(D.jsxs)("div",{className:"inputs_platform",children:[Object(D.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",onChange:function(e){return ge(Object(r.a)(Object(r.a)({},ve),{},{servicableLocation:e.target.value}))},value:ve.servicableLocation}),Object(D.jsx)("img",{src:j.default,alt:"icon",className:"loction_img_select"})]})]}),Object(D.jsxs)("div",{className:"setup_item1",children:[Object(D.jsx)("h6",{children:$}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:Ae,value:me.instaHandle,name:"instaHandle"}),Object(D.jsx)("img",{src:d.default,alt:"icon"})]})})]}),Object(D.jsxs)("div",{className:"setup_item1",children:[Object(D.jsx)("h6",{children:B}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:Ae,value:me.websiteLink,name:"websiteLink"}),Object(D.jsx)("img",{src:u.default,alt:"icon"})]})})]})]})}),Object(D.jsx)(l.default,{onChange:function(e){pe(e)},trainerData:me,setTrainerData:pe}),Object(D.jsxs)("div",{className:"card_agree",children:[Object(D.jsx)("input",{type:"checkbox",id:"agree",name:"agree",onChange:function(){Fe(!Ue)}}),Object(D.jsxs)("label",{children:["Check here to acknowledge that you have read and agree to the Motto trainer",Object(D.jsx)("a",{href:"/agreement",target:"_blank",children:"terms and conditions"})]})]}),Object(D.jsxs)("div",{className:"submit_button",children:[Object(D.jsx)("button",{onClick:function(){if(console.log(R),0!==R.length){var e=new FormData;R.forEach((function(t){e.append("images",t,t.name),g(e)}))}var t={"Content-Type":"application/json",Authorization:localStorage.getItem("token")};L.a.put(I.COMMON_URL+"/v1/trainer",{applicationStatus:"setupComplete"},{headers:t}).then((function(e){console.log(e)}));var i=me.firstName,n=me.lastName,a=me.description,c=me.individualCharge,o=me.ssTwoPeopleCharge,s=me.ssThreePeopleCharge,l=me.ssFourPeopleCharge,d=me.classFlatRate,u=me.threeSessionRate,j=me.tenSessionRate,b=me.instaHandle,h=me.location,m=me.motto,p=me.serviceableLocation,f=me.trainingLocation,O=me.trainingProcessDescription,v=me.websiteLink,x=me.youtubeChannel,N=me.individualChargeTl,_=me.ssTwoPeopleChargeTl,S=me.ssThreePeopleChargeTl,k=me.ssFourPeopleChargeTl,C=me.classFlatRateTl,A=me.threeSessionRateTl,w=me.tenSessionRateTl,T=me.individualChargeVt,D=me.ssTwoPeopleChargeVt,M=me.ssThreePeopleChargeVt,E=me.ssFourPeopleChargeVt,U=me.classFlatRateVt,F=me.threeSessionRateVt,V=me.tenSessionRateVt,H=me.governmentId,Y=me.insurance,z=me.governmentIdNumber,W=me.coverAmount,B=me.virtualMeetingLink,$=me.identityNameUS,G=me.insuranceNameUS;console.log(p);var Q={firstName:i,lastName:n,description:a,oneOnOnePricing:{passRatefor3Session:u,passRatefor10Session:j,inPersonAtClientLocation:c,inPersonAtTrainerLocation:N,passRatefor3SessionAtTrainerLocation:A,passRatefor10SessionAtTrainerLocation:w,virtualSession:T,passRatefor3SessionAtVirtual:F,passRatefor10SessionAtVirtual:V},socialSessionPricing:{inPeronAtClientLocationfor2People:o,inPeronAtClientLocationfor3People:s,inPeronAtClientLocationfor4People:l,inPeronAtTrainerLocationfor2People:_,inPeronAtTrainerLocationfor3People:S,inPeronAtTrainerLocationfor4People:k,virtualSessionfor2People:D,virtualSessionfor3People:M,virtualSessionfor4People:E},classSessionPricing:{inPersonAtclientLocationfor15People:d,inPersonAttrainerLocationfor15People:C,virtualSessionfor15People:U},trainingProcess:O,myMotto:m,preferedTrainingMode:f,websiteLink:v,youtubeLink:x,instagramProfile:b,currentExperience:{workLocation:h},certification:null===ue||void 0===ue?void 0:ue.map((function(e){var t=e.certificate;return{certificateName:"",certfiedYear:e.year,certification:t}})),servicableLocation:p,insuranceInformation:{insuranceName:G,insurance:Y,insuranceAmount:W},identityInfromation:{identityName:$,identity:H,identityNumber:z},virtualMeetingLink:B};console.log(Q);var J=y.TrainerApi.updateTrainerAvailabilityApi;J.body=Q,se(!0),Object(P.api)(Object(r.a)({},J)).then((function(e){var t=e.data,i=e.message;console.log(t,i),we()})).catch((function(e){console.log(e),se(!1)}))},type:"submit",disabled:!Ue,className:"".concat(oe?"loading":"btn"),children:oe?"Loading...":Object(D.jsxs)("a",{children:[" ","Continue to account",Object(D.jsx)(m.default,{})]})}),Object(D.jsx)("div",{className:"terms_msg",children:Ue?null:Object(D.jsx)("span",{children:"Please Agree to the above terms and conditions to continue"})})]})]})})})]})]})})}));t.default=F},216:function(e,t,i){"use strict";i.r(t),i.d(t,"COMMON_URL",(function(){return n})),i.d(t,"MESSAGING_URL",(function(){return a})),i.d(t,"SESSION_URL",(function(){return c})),i.d(t,"NOTIFICATION_URL",(function(){return r})),i.d(t,"PAYMENT_URL",(function(){return o}));var n="http://doodlebluelive.com:2307",a="http://doodlebluelive.com:2338",c="http://doodlebluelive.com:2337",r="",o="http://doodlebluelive.com:2336"},316:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Arrow Back.eda9c053.svg"},330:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Tick 1.4675dfbf.svg"},347:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Q Mark.0ff4fda1.svg"},348:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Insta Icon.1bd62639.svg"},349:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Web Icon.c205b1b8.svg"},384:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Quote Icon.0ba33696.svg"},385:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/share.d397927e.svg"},412:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Image 1.c256661a.svg"},413:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Location Icon.c4929936.svg"},414:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Youtube.7b4f0bda.svg"},445:function(e,t,i){},446:function(e,t,i){},465:function(e,t,i){},466:function(e,t,i){},504:function(e,t,i){},505:function(e,t,i){},580:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i(99);var a=i(70);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},650:function(e,t,i){"use strict";var n=i(5),a=i(582),c=i(2),r=(i(3),i(587)),o=i(613),s=i(588),l=Object(s.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(s.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=i(589);var j=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,i=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(i.root,t&&i.checked)},c.createElement(l,{fontSize:n}),c.createElement(d,{fontSize:n,className:i.layer}))})),b=i(604),h=i(605);var m=c.createContext();var p=c.createElement(j,{checked:!0}),f=c.createElement(j,null),O=c.forwardRef((function(e,t){var i=e.checked,s=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.name,j=e.onChange,b=e.size,O=void 0===b?"medium":b,v=Object(a.a)(e,["checked","classes","color","name","onChange","size"]),g=c.useContext(m),x=i,N=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((function(e,t){return null==t?e:function(){for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),(function(){}))}(j,g&&g.onChange),y=u;return g&&("undefined"===typeof x&&(x=g.value===e.value),"undefined"===typeof y&&(y=g.name)),c.createElement(o.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(f,{fontSize:"small"===O?"small":"default"}),checkedIcon:c.cloneElement(p,{fontSize:"small"===O?"small":"default"}),classes:{root:Object(r.a)(s.root,s["color".concat(Object(h.a)(d))]),checked:s.checked,disabled:s.disabled},name:y,checked:x,onChange:N,ref:t},v))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(O)},661:function(e,t,i){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=12.28af1e9b.chunk.js.map