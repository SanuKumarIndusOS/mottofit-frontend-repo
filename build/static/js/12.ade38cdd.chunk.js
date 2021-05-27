(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[12,64,87,122,196,197,198,199,200,201,241,242,243,245,259,265,266,267,290,291],{130:function(e,t,i){"use strict";i.r(t);var n=i(11),a=i(10),c=i(2),r=i.n(c),s=(i(452),i(601)),o=(i(451),i(37)),l=i(315),d=i(1),u=[{label:"Passport",value:"Passport"},{value:"Driver's Licence",label:"Driver's Licence"},{label:"State Issued ID",value:"State Issued ID"}];t.default=function(e){var t=e.onChange,i=e.trainerData,c=e.setTrainerData,j="Security & Payment Information",b="The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them.",h="Please upload any one of your US government issued ID\u2019s",m="Please upload your insurance information",p=r.a.useState(),f=Object(a.a)(p,2),O=(f[0],f[1],function(e){var a=e.target,c=a.name,r=a.value,s=Object(n.a)({},i);s[c]=r,t(s)});return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"payment_container container",children:Object(d.jsxs)("div",{className:"payment_wrapper",children:[Object(d.jsxs)("div",{className:"payment_heading",children:[Object(d.jsx)("h2",{children:j}),Object(d.jsx)("p",{children:b})]}),Object(d.jsxs)("div",{className:"payment_inner ",children:[Object(d.jsxs)("div",{className:"payment_item1",children:[Object(d.jsx)("h6",{children:h}),Object(d.jsxs)("div",{className:"inputs_payment1",children:[Object(d.jsx)(s.Dropdown,{title:"Select government ID\u2019s\r ",list:u,value:i.identityNameUS,onChange:function(e){c(Object(n.a)(Object(n.a)({},i),{},{identityNameUS:e.value}))},name:"identityNameUS"}),Object(d.jsx)("input",{type:"text",placeholder:"Add your ID Number",value:i.governmentIdNumber,onChange:O,name:"governmentIdNumber"}),Object(d.jsx)("input",{type:"file",name:"governmentId",className:"custom-file-input",value:i.governmentId,onChange:O}),i.governmentId?Object(d.jsx)("img",{src:l.default,alt:"Uploaded"}):Object(d.jsx)("a",{className:"checkarrow",children:Object(d.jsx)(o.default,{})})]})]}),Object(d.jsxs)("div",{className:"payment_item1",children:[Object(d.jsx)("h6",{children:m}),Object(d.jsxs)("div",{className:"inputs_payment1",children:[Object(d.jsx)("input",{type:"text",placeholder:"Enter your Insurance Name",value:i.insuranceNameUS,onChange:O,name:"insuranceNameUS"}),Object(d.jsx)("input",{type:"text",placeholder:"Add your Cover Amount",value:i.coverAmount,onChange:O,name:"coverAmount"}),Object(d.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",value:i.insurance,onChange:O}),i.insurance?Object(d.jsx)("img",{src:l.default,alt:"Uploaded"}):Object(d.jsx)("a",{className:"checkarrow",children:Object(d.jsx)(o.default,{})})]})]})]})]})})})}},146:function(e,t,i){"use strict";i.r(t);var n=i(16),a=i(570),c=i(10),r=i(11),s=i(2),o=i.n(s),l=i(395),d=i(130),u=(i(494),i(332)),j=i(335),b=(i(397),i(396)),h=i(311),m=i(5),p=i(67),f=i(578),O=i(649),v=i(638),g=(i(20),i(38)),x=i(68),y=i(211),N=i(13),P=i(59),_=i(72),S=(i(78),i(71)),k=i.n(S),L=i(182),C=i(98),A=(i(432),i(431),i(331)),T=(i(370),i(39)),w=i(315),I=(i(371),i(601)),D=(i(493),i(1)),R=[],E=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],M=Object(f.a)({root:{"&$checked":{color:O.a[600]}},checked:{}})((function(e){return Object(D.jsx)(v.a,Object(r.a)({color:"default"},e))})),F=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(),r=Object(c.a)(a,2),o=r[0],d=r[1],u=Object(s.useRef)();return Object(s.useEffect)((function(){if(i){var e=new FileReader;e.onloadend=function(){d(e.result)},e.readAsDataURL(i)}else d(null)}),[i]),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"renderImage",children:[o?Object(D.jsx)("img",{src:o,style:{objectFit:"cover",width:"180px",height:"180px"},onClick:function(){d(null)}}):Object(D.jsx)("div",{className:"combin_profile",children:Object(D.jsx)("button",{onClick:function(e){e.preventDefault(),u.current.click()},children:Object(D.jsx)("img",{src:l.default,alt:"icon",style:{objectFit:"cover",width:"180px",height:"180px"}})})}),Object(D.jsx)("input",{type:"file",ref:u,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?(n(t),R.push(t),console.log(R)):n(null)}})]})})},U=Object(x.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(g.b)({updateTrainerDetails:y.updateTrainerDetails},e)}))((function(e){var t,i,l,f=e.updateTrainerDetails,O=e.trainerPersonalData,v=e.details,g="Build out the rest of your Profile!",x="Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time.",y="What\u2019s your Motto?",S="Tell us about you and describe your training process",U="Throw in some photos showcasing you & your skills",V="Certifications you\u2019d like to display",z="Where will you be training",H="Which city will you train in?",Y="Website",B="Instagram",W=o.a.useState("a"),$=Object(c.a)(W,2),G=$[0],Q=$[1],J=o.a.useState(""),Z=Object(c.a)(J,2),K=Z[0],q=Z[1],X=Object(s.useState)([{image:""}]),ee=Object(c.a)(X,2),te=ee[0],ie=ee[1],ne=Object(s.useState)(!1),ae=Object(c.a)(ne,2),ce=ae[0],re=ae[1],se=Object(s.useState)([{certificate:"",year:"",upload:""}]),oe=Object(c.a)(se,2),le=oe[0],de=oe[1],ue=Object(s.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],serviceableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:"",governmentId:"",insurance:"",governmentIdNumber:"",coverAmount:"",virtualMeetingHandle:"",virtualMeetingLink:"",identityNameUS:"",insuranceNameUS:""}),je=Object(c.a)(ue,2),be=je[0],he=je[1],me=o.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",willingToTravel:"0",servicableLocation:""}),pe=Object(c.a)(me,2),fe=pe[0],Oe=pe[1],ve=function(e){q(e.target.value),Oe(Object(r.a)(Object(r.a)({},fe),{},{willingToTravel:e.target.value}))},ge=function(e){Q(e.target.value)},xe=Object(s.useState)(!1),ye=Object(c.a)(xe,2),Ne=ye[0],Pe=ye[1],_e=Object(s.useRef)(null),Se=Object(D.jsx)("img",{src:C.default,alt:"close"}),ke=function(e,t){var i=Object(a.a)(le);i[e][t.target.name]=t.target.value,de(i)};var Le=function(e,t){e.preventDefault&&e.preventDefault();var i=e.target||e||{},n=i.name,c=i.value,s=(i.label,Object(r.a)({},be)),o=Array.isArray(e);"trainingLocation"===n?s.trainingLocation.includes(t)?s.trainingLocation=s.trainingLocation.filter((function(e){return e!==t})):s.trainingLocation=[].concat(Object(a.a)(s.trainingLocation),[t]):s["".concat(o?e[0].name:n)]=o?e:c,he(s)},Ce=function(){var e=P.PaymentApi.getStripeAccLink;Object(_.api)(Object(r.a)({},e)).then((function(e){var t=e.data,i=(e.message,t.url);window.location.href=i})).catch((function(e){return console.log(e)}))};Object(s.useEffect)((function(){if(Object.keys(O).length<5)return N.history.push("/trainer/card");var e=O||{},t=e.trainingProcess,i=void 0===t?"":t,a=e.myMotto,c=void 0===a?"":a,s=e.preferedTrainingMode,o=void 0===s?"":s,l=e.websiteLink,d=void 0===l?"":l,u=(e.youtubeLink,e.instagramProfile),j=void 0===u?"":u,b=e.currentExperience,h=void 0===b?{}:b,m=e.certification,p=void 0===m?[]:m,g=e.serviceableLocation,x=void 0===g?[]:g,y=(h||{}).workLocation,P=void 0===y?"":y,_={details:Object(r.a)(Object(r.a)({},v),{},Object(n.a)({motto:c,trainingProcessDescription:i,trainingLocation:o,servicableLocation:x.map((function(e){return{label:e,value:e,name:"serviceableLocation"}})),location:P,websiteLink:d,instaHandle:j,willingToTravel:fe.willingToTravel},"servicableLocation",fe.servicableLocation))},S=null===p||void 0===p?void 0:p.map((function(e){var t=e.certfiedYear;return{certificate:e.certificateName,year:t}}));de(S),he(_.details),f(_)}),[]);var Ae=Object(s.useState)({visiable:!1}),Te=Object(c.a)(Ae,2),we=Te[0],Ie=Te[1],De=Object(s.useState)(!1),Re=Object(c.a)(De,2),Ee=Re[0],Me=Re[1];return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"outter_setup_container container",children:[Object(D.jsxs)("div",{className:"setup_link",children:[Object(D.jsxs)("div",{className:"inner_link",children:[Object(D.jsx)("img",{src:h.default,alt:"icon"}),Object(D.jsxs)(m.a,{to:"/trainer/card",onClick:function(){var e={details:Object(r.a)({},be)};f(e)},children:[" ","Edit Trainer Card"," "]})]}),Object(D.jsx)("div",{className:"inner_link_preview",children:Object(D.jsx)("div",{onClick:function(){Pe(!0)},className:"prev_profile",children:"Preview Your Trainer Profile"})}),Ne?Object(D.jsx)(L.a,{open:Ne,onClose:function(){Pe(!1)},center:!0,closeIcon:Se,container:_e.current,styles:{boaderRadius:"10px"},classNames:{modal:"customModal"},children:Object(D.jsx)("div",{className:"profile_main",children:Object(D.jsx)("div",{className:"profile_outter_container",children:Object(D.jsxs)("div",{className:"profile_wrapper_container ",children:[Object(D.jsx)("div",{className:"profile_header",children:Object(D.jsxs)("div",{className:"inner_profile container",children:[Object(D.jsx)("img",{src:O.profilePicture,alt:"Image not Added"}),Object(D.jsxs)("div",{className:"profile_header_inner",children:[Object(D.jsxs)("h2",{children:[be.firstName," ",be.lastName]}),Object(D.jsx)("p",{children:O.areaOfExpertise.toString()})]})]})}),Object(D.jsxs)("div",{className:"profile_main_contents container",children:[Object(D.jsxs)("div",{className:"profile_aside",children:[Object(D.jsxs)("div",{className:"profile_aside_link",children:[Object(D.jsx)("label",{children:"View Calender"}),Object(D.jsx)("img",{src:T.default,alt:"icon"})]}),Object(D.jsxs)("div",{className:"profile_aside_items",children:[O.oneOnOnePricing&&(O.oneOnOnePricing.virtualSession||O.oneOnOnePricing.inPersonAtTrainerLocation)?Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsx)("h2",{children:"1 ON 1 INDIVIDUAL TRAINING"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[O.oneOnOnePricing&&O.oneOnOnePricing.virtualSession?Object(D.jsxs)("h6",{children:[O.oneOnOnePricing.virtualSession,Object(D.jsx)("span",{children:"(Virtual Session)"})]}):null,O.oneOnOnePricing&&O.oneOnOnePricing.inPersonAtTrainerLocation?Object(D.jsxs)("h6",{children:[O.oneOnOnePricing.inPersonAtTrainerLocation,Object(D.jsx)("span",{children:"(In Person Session)"})]}):null,Object(D.jsx)("h5",{children:"See package rates during checkout"})]})]}):null,O.socialSessionPricing&&(O.socialSessionPricing.inPeronAtTrainerLocationfor2People||O.socialSessionPricing.inPeronAtTrainerLocationfor3People||O.socialSessionPricing.inPeronAtTrainerLocationfor4People)?Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsxs)("h2",{children:["SOCIAL SESSIONS"," ",Object(D.jsx)("img",{src:A.default,alt:"icon",onClick:function(){return Pe(!0)},className:"model_Qmark"})]}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[O.socialSessionPricing&&O.socialSessionPricing.inPeronAtTrainerLocationfor2People?Object(D.jsxs)("h6",{children:[O.socialSessionPricing.inPeronAtTrainerLocationfor2People,Object(D.jsx)("span",{children:"/ Session (For 2 People)"})]}):null,O.socialSessionPricing&&O.socialSessionPricing.inPeronAtTrainerLocationfor3People?Object(D.jsxs)("h6",{children:[O.socialSessionPricing.inPeronAtTrainerLocationfor3People,Object(D.jsx)("span",{children:"/ Session (For 3 People)"})]}):null,O.socialSessionPricing&&O.socialSessionPricing.inPeronAtTrainerLocationfor4People?Object(D.jsxs)("h6",{children:[O.socialSessionPricing.inPeronAtTrainerLocationfor4People,Object(D.jsx)("span",{children:"/ Session (For 4 People)"})]}):null]})]}):null,O.classSessionPricing&&O.classSessionPricing.inPersonAtclientLocationfor15People?Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsxs)("h2",{children:["CREATE A CLASS",Object(D.jsx)("img",{src:A.default,alt:"icon",className:"model_Qmark"})]}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[Object(D.jsxs)("h6",{children:[O&&O.classSessionPricing?O.classSessionPricing.inPersonAtclientLocationfor15People:"",Object(D.jsx)("span",{children:"Flat Rate Class (For 5-15 People)"})]}),Object(D.jsx)("h5",{children:"If trainer offers Virtual Social Sessions and Classes they will be at a discount to in person rates above. You will see these prior to checkout."})]})]}):null,Object(D.jsxs)("div",{className:"profile_aside_item",children:[Object(D.jsx)("h2",{children:"TRAINING LOCATIONS"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"profile_aside_inner_item",children:[O.currentExperience.workLocation?Object(D.jsxs)("div",{className:"profile_location",children:[Object(D.jsx)("img",{src:w.default,alt:"icon"}),Object(D.jsx)("h4",{children:O.currentExperience.workLocation})]}):"",Object(D.jsxs)("div",{className:"profile_location",children:[Object(D.jsx)("img",{src:w.default,alt:"icon"}),Object(D.jsxs)("h4",{children:["Trainer\u2019s Location"," ",Object(D.jsx)(m.a,{children:"View Location"})]})]}),Object(D.jsxs)("div",{className:"profile_location",children:[Object(D.jsx)("img",{src:w.default,alt:"icon"}),Object(D.jsx)("h4",{children:"Your Location"})]})]})]})]})]}),Object(D.jsx)("div",{className:"profile_trainer_data",children:Object(D.jsxs)("div",{className:"profile_right_data",children:[Object(D.jsx)("div",{className:"profile_right_item1",children:Object(D.jsx)("h6",{children:be.motto?be.motto:"Motto not Added"})}),Object(D.jsxs)("div",{className:"profile_right_item2",style:{width:"40rem"},children:[Object(D.jsxs)("h4",{children:["About"," ",be.firstName]}),Object(D.jsx)("p",{children:be.trainingProcessDescription?be.trainingProcessDescription:"Description not Added"}),Object(D.jsx)("div",{className:"profile_images",children:"NO IMAGES ADDED"})]}),Object(D.jsxs)("div",{className:"profile_right_item3 mb-5 pb-5",children:[Object(D.jsx)("h2",{children:"Certifications"}),Object(D.jsxs)("div",{className:"profile_item3_inner",children:[Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[0]?O.certification[0].certification:"Not Added"})]}),Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[1]?O.certification[1].certification:"Not Added"})]}),Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[2]?O.certification[2].certification:"Not Added"})]}),Object(D.jsxs)("div",{className:"inner_items",children:[Object(D.jsx)("img",{src:w.default,alt:"check"}),Object(D.jsx)("h6",{children:O.certification[3]?O.certification[3]:"Not Added"})]})]})]})]})})]})]})})})}):null]}),Object(D.jsxs)("div",{className:"setup_container ",children:[Object(D.jsxs)("div",{className:"setup_headings",children:[Object(D.jsx)("h2",{children:g}),Object(D.jsx)("p",{children:x})]}),Object(D.jsx)("div",{className:"setup_wrapper",children:Object(D.jsx)("div",{className:"setup_formInner container",children:Object(D.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsxs)("div",{className:"setup_card1",children:[Object(D.jsx)("h6",{children:y}),Object(D.jsx)("textarea",{type:"text",placeholder:"Share the words you live or train by in 250 characters or less",onChange:Le,value:be.myMotto,name:"motto",maxlength:"250"})]}),Object(D.jsxs)("div",{className:"setup_card2",children:[Object(D.jsx)("h6",{children:S}),Object(D.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"Tell clients everything you think they should know! Utilize Key words as anything you write here\r will be searchable through our search bar",onChange:Le,value:be.trainingProcessDescription},"name","trainingProcessDescription"))]}),Object(D.jsxs)("div",{className:"setup_card3",children:[Object(D.jsx)("h6",{children:U}),Object(D.jsxs)("div",{className:"read_image",children:[te.slice(0,2).map((function(e,t){return Object(D.jsxs)("div",{className:"render_image",children:[Object(D.jsx)(F,{value:t.image}),Object(D.jsx)(F,{value:t.image}),Object(D.jsx)(F,{value:t.image}),Object(D.jsx)(F,{value:t.image}),Object(D.jsx)(F,{value:t.image})]},e)})),we?Object(D.jsx)("h5",{onClick:function(){return ie([].concat(Object(a.a)(te),[{image:""}])),void Ie(!1)},children:"+ Add More Image's"}):Object(D.jsx)("h5",{onClick:function(){return function(e){var t=Object(a.a)(te);t.splice(e,1),ie(t),Ie(!0)}()},children:"Remove"})]})]}),Object(D.jsxs)("div",{className:"setup_card4",children:[Object(D.jsx)("h6",{children:V}),null===le||void 0===le?void 0:le.map((function(e,t){return Object(D.jsxs)("div",{className:"inputs_certificate",children:[Object(D.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return ke(t,e)}}),Object(D.jsx)("input",{type:"text",placeholder:"Year you were Certified",value:e.year,name:"year",onChange:function(e){return ke(t,e)}})]},t)})),Object(D.jsx)("h5",{onClick:function(){de([].concat(Object(a.a)(le),[{certificate:"",year:"",upload:""}]))},children:"+ Add Certification"})]}),Object(D.jsx)("div",{className:"setup_card5",children:Object(D.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(D.jsxs)("div",{className:"setup_item",children:[Object(D.jsx)("h6",{children:z}),Object(D.jsxs)("div",{className:"inputs_platform",children:[Object(D.jsx)("button",{onClick:function(e){return Le(e,"Online")},className:"".concat((null===be||void 0===be||null===(t=be.trainingLocation)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(D.jsx)("button",{onClick:function(e){return Le(e,"inperson")},className:"".concat((null===be||void 0===be||null===(i=be.trainingLocation)||void 0===i?void 0:i.includes("inperson"))?"active":""),name:"trainingLocation",children:"In Person"})]}),Object(D.jsx)("div",{className:"social_meeting_links",children:(null===be||void 0===be||null===(l=be.trainingLocation)||void 0===l?void 0:l.includes("Online"))?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h5",{children:"Add zoom meeting link"}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsx)("div",{className:"iconwrapper",children:Object(D.jsx)("textarea",{type:"text",placeholder:"Add a Google or Zoom meeting link",value:be.virtualMeetingLink,onChange:Le,name:"virtualMeetingLink"})})})]}):null})]}),Object(D.jsxs)("div",{className:"setup_item1",children:[Object(D.jsx)("h6",{children:H}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsx)("div",{className:"iconwrapper",children:Object(D.jsx)(I.Dropdown,{className:"custom_dropdown",title:"Select Location",list:E,value:be.serviceableLocation,onChange:function(e){he(Object(r.a)(Object(r.a)({},be),{},{serviceableLocation:e.value})),console.log(e.value)},name:"location"})})})]}),Object(D.jsxs)("div",{className:"item_3",children:[Object(D.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(D.jsx)(M,{checked:"a"===G,onChange:ge,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(D.jsx)("label",{children:"Yes"}),Object(D.jsx)(M,{checked:"b"===G,onChange:ge,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(D.jsx)("label",{children:"No"})]}),Object(D.jsxs)("div",{className:"item_4",children:[Object(D.jsx)("h6",{children:"Details of the facility/location"}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",onChange:Le,value:O.trainingFacilityLocation?O.trainingFacilityLocation:""})})]}),Object(D.jsxs)("div",{className:"item_5",children:[Object(D.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(D.jsx)(M,{checked:"1"===K,onChange:ve,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(D.jsx)("label",{children:" Yes!"}),Object(D.jsx)(M,{checked:"0"===K,onChange:ve,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(D.jsx)("label",{children:"No"})]}),Object(D.jsxs)("div",{className:"item_6",children:[Object(D.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(D.jsxs)("div",{className:"inputs_platform",children:[Object(D.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",onChange:Le,value:O.servicableLocation?O.servicableLocation:""}),Object(D.jsx)("img",{src:b.default,alt:"icon",className:"loction_img_select"})]})]}),Object(D.jsxs)("div",{className:"setup_item1",children:[Object(D.jsx)("h6",{children:B}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:Le,value:be.instaHandle,name:"instaHandle"}),Object(D.jsx)("img",{src:u.default,alt:"icon"})]})})]}),Object(D.jsxs)("div",{className:"setup_item1",children:[Object(D.jsx)("h6",{children:Y}),Object(D.jsx)("div",{className:"inputs_platform",children:Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:Le,value:be.websiteLink,name:"websiteLink"}),Object(D.jsx)("img",{src:j.default,alt:"icon"})]})})]})]})}),Object(D.jsx)(d.default,{onChange:function(e){he(e)},trainerData:be,setTrainerData:he}),Object(D.jsxs)("div",{className:"card_agree",children:[Object(D.jsx)("input",{type:"checkbox",id:"agree",name:"agree",onChange:function(){Me(!Ee)}}),Object(D.jsxs)("label",{children:["Check here to acknowledge that you have read and agree to the Motto trainer",Object(D.jsx)("a",{href:"/agreement",target:"_blank",children:"terms and conditions"})]})]}),Object(D.jsxs)("div",{className:"submit_button",children:[Object(D.jsx)("button",{onClick:function(){if(console.log(R),0!==R.length){var e={"Content-Type":"application/json",Authorization:localStorage.getItem("token")},t=new FormData;R.forEach((function(e){t.append("images",e,e.name)})),k.a.post("http://doodlebluelive.com:2307/v1/upload/image",t,{headers:e}).then((function(e){console.log(e)}))}var i={"Content-Type":"application/json",Authorization:localStorage.getItem("token")};k.a.put("http://doodlebluelive.com:2307/v1/trainer",{applicationStatus:"setupComplete"},{headers:i}).then((function(e){console.log(e)}));var n=be.firstName,a=be.lastName,c=be.description,s=be.individualCharge,o=be.ssTwoPeopleCharge,l=be.ssThreePeopleCharge,d=be.ssFourPeopleCharge,u=be.classFlatRate,j=be.threeSessionRate,b=be.tenSessionRate,h=be.instaHandle,m=be.location,p=be.motto,f=be.serviceableLocation,O=be.trainingLocation,v=be.trainingProcessDescription,g=be.websiteLink,x=be.youtubeChannel,y=be.individualChargeTl,N=be.ssTwoPeopleChargeTl,S=be.ssThreePeopleChargeTl,L=be.ssFourPeopleChargeTl,C=be.classFlatRateTl,A=be.threeSessionRateTl,T=be.tenSessionRateTl,w=be.individualChargeVt,I=be.ssTwoPeopleChargeVt,D=be.ssThreePeopleChargeVt,E=be.ssFourPeopleChargeVt,M=be.classFlatRateVt,F=be.threeSessionRateVt,U=be.tenSessionRateVt,V=be.governmentId,z=be.insurance,H=be.governmentIdNumber,Y=be.coverAmount,B=be.virtualMeetingLink,W=be.identityNameUS,$=be.insuranceNameUS;console.log(f);var G={firstName:n,lastName:a,description:c,oneOnOnePricing:{passRatefor3Session:j,passRatefor10Session:b,inPersonAtClientLocation:s,inPersonAtTrainerLocation:y,passRatefor3SessionAtTrainerLocation:A,passRatefor10SessionAtTrainerLocation:T,virtualSession:w,passRatefor3SessionAtVirtual:F,passRatefor10SessionAtVirtual:U},socialSessionPricing:{inPeronAtClientLocationfor2People:o,inPeronAtClientLocationfor3People:l,inPeronAtClientLocationfor4People:d,inPeronAtTrainerLocationfor2People:N,inPeronAtTrainerLocationfor3People:S,inPeronAtTrainerLocationfor4People:L,virtualSessionfor2People:I,virtualSessionfor3People:D,virtualSessionfor4People:E},classSessionPricing:{inPersonAtclientLocationfor15People:u,inPersonAttrainerLocationfor15People:C,virtualSessionfor15People:M},trainingProcess:v,myMotto:p,preferedTrainingMode:O,websiteLink:g,youtubeLink:x,instagramProfile:h,currentExperience:{workLocation:m},certification:null===le||void 0===le?void 0:le.map((function(e){var t=e.certificate;return{certificateName:"",certfiedYear:e.year,certification:t}})),servicableLocation:f,insuranceInformation:{insuranceName:$,insurance:z,insuranceAmount:Y},identityInfromation:{identityName:W,identity:V,identityNumber:H},virtualMeetingLink:B};console.log(G);var Q=P.TrainerApi.updateTrainerAvailabilityApi;Q.body=G,re(!0),Object(_.api)(Object(r.a)({},Q)).then((function(e){var t=e.data,i=e.message;console.log(t,i),Ce()})).catch((function(e){console.log(e),re(!1)}))},type:"submit",disabled:!Ee,className:"".concat(ce?"loading":"btn"),children:ce?"Loading...":Object(D.jsxs)("a",{children:[" ","Continue to account",Object(D.jsx)(p.default,{})]})}),Object(D.jsx)("div",{className:"terms_msg",children:Ee?null:Object(D.jsx)("span",{children:"Please Agree to the above terms and conditions to continue"})})]})]})})})]})]})})}));t.default=U},211:function(e,t,i){"use strict";i.r(t),i.d(t,"updateTrainerDetails",(function(){return r})),i.d(t,"getTrainerDetails",(function(){return s})),i.d(t,"getTrainerSessionDetails",(function(){return o}));var n=i(11),a=i(30),c=i(59),r=function(e){return function(t){return new Promise((function(i){t({type:a.TrainerActionType.updateTrainerDetails,payload:e}),i(!0)}))}},s=function(){return function(e,t,i){var r=i.api;return new Promise((function(t,i){var s=c.TrainerApi.getTrainerApi;r(Object(n.a)({},s)).then((function(i){var n=i.data;e({type:a.TrainerActionType.updateTrainerDetails,payload:{data:n}}),t(n)})).catch((function(e){i(e)}))}))}},o=function(){return function(e,t,i){var r=i.api;return new Promise((function(t,i){var s=c.TrainerApi.getTrainerSessionApi;r(Object(n.a)({},s)).then((function(i){var n=i.data;console.log(n),e({type:a.TrainerActionType.updateTrainerDetails,payload:{sessionData:n}}),t(n)})).catch((function(e){i(e)}))}))}}},311:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Arrow Back.d3693c0f.svg"},315:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Tick 1.bf0e36e8.svg"},331:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Q Mark.c9a955fb.svg"},332:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Insta Icon.432b9d08.svg"},335:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Web Icon.b0ff0aa9.svg"},370:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Quote Icon.6ae62bcc.svg"},371:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/share.b27e3212.svg"},395:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Image 1.8f33ee1e.svg"},396:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Location Icon.6eb543f1.svg"},397:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Youtube.1eb126cd.svg"},431:function(e,t,i){},432:function(e,t,i){},451:function(e,t,i){},452:function(e,t,i){},493:function(e,t,i){},494:function(e,t,i){},570:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i(97);var a=i(69);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},638:function(e,t,i){"use strict";var n=i(4),a=i(571),c=i(2),r=(i(3),i(576)),s=i(602),o=i(577),l=Object(o.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(o.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=i(578);var j=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,i=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(i.root,t&&i.checked)},c.createElement(l,{fontSize:n}),c.createElement(d,{fontSize:n,className:i.layer}))})),b=i(592),h=i(593);var m=c.createContext();var p=c.createElement(j,{checked:!0}),f=c.createElement(j,null),O=c.forwardRef((function(e,t){var i=e.checked,o=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.name,j=e.onChange,b=e.size,O=void 0===b?"medium":b,v=Object(a.a)(e,["checked","classes","color","name","onChange","size"]),g=c.useContext(m),x=i,y=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((function(e,t){return null==t?e:function(){for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),(function(){}))}(j,g&&g.onChange),N=u;return g&&("undefined"===typeof x&&(x=g.value===e.value),"undefined"===typeof N&&(N=g.name)),c.createElement(s.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(f,{fontSize:"small"===O?"small":"default"}),checkedIcon:c.cloneElement(p,{fontSize:"small"===O?"small":"default"}),classes:{root:Object(r.a)(o.root,o["color".concat(Object(h.a)(d))]),checked:o.checked,disabled:o.disabled},name:N,checked:x,onChange:y,ref:t},v))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(O)},649:function(e,t,i){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=12.ade38cdd.chunk.js.map