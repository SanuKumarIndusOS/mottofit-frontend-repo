(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[50,85,190,191,261],{129:function(e,t,n){"use strict";n.r(t);var i=n(578),a=n(10),r=n(6),o=n(2),c=n.n(o),l=(n(461),n(5)),s=n(587),d=n(658),u=n(647),b=n(315),f=n(69),j=n(185),h=(n(220),n(462),n(99)),p=n(24),m=n(72),O=n(9),v=n(13),g=n(43),y=n(27),x=n(34),k=n(50),P=n(1),T=Object(s.a)({root:{"&$checked":{color:d.a[600]}},checked:{}})((function(e){return Object(P.jsx)(u.a,Object(r.a)({color:"default"},e))})),L=Object(P.jsx)("img",{src:h.default,alt:"close"}),C=Object(x.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(y.b)({updateTrainerDetails:k.updateTrainerDetails},e)}))((function(e){var t=e.updateTrainerDetails,n=e.details,s=(Object(O.g)(),c.a.useState("a")),d=Object(a.a)(s,2),u=d[0],h=d[1],y=c.a.useState(""),x=Object(a.a)(y,2),k=x[0],C=x[1],w=Object(o.useState)(!0),S=Object(a.a)(w,2),A=S[0],N=S[1],$=Object(o.useState)(!0),E=Object(a.a)($,2),M=E[0],_=E[1],F=Object(o.useState)(!1),I=Object(a.a)(F,2),R=I[0],z=I[1],D=Object(o.useRef)(null),W=c.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",willingToTravel:"0",servicableLocation:""}),B=Object(a.a)(W,2),H=B[0],J=B[1],Y=function(e){h(e.target.value)},U=function(e){C(e.target.value),J(Object(r.a)(Object(r.a)({},H),{},{willingToTravel:e.target.value}))};return Object(o.useEffect)((function(){if(Object.keys(n).length>3){n.hoursPerWeek,n.preferedTrainingMode,n.trainingFacilityLocation,n.willingToTravel,n.servicableLocation;n.trainingFacility&&h(n.trainingFacility?"a":"b")}}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)("div",{className:"link_wrapper",children:[Object(P.jsx)("img",{src:b.default,alt:"icon"}),Object(P.jsx)("div",{className:"inner_links",children:Object(P.jsx)(l.a,{to:"/trainer/background",children:"Back to Trainer Background"})})]}),Object(P.jsxs)("div",{className:"main_wrappercontainer",children:[Object(P.jsxs)("div",{className:"wrapper_inneritem",children:[Object(P.jsx)("h1",{children:"Highlight your availability on the platform"}),Object(P.jsx)("p",{}),Object(P.jsxs)("form",{className:"container",onSubmit:function(e){return e.preventDefault()},children:[Object(P.jsxs)("div",{className:"content_wrapper",children:[Object(P.jsxs)("div",{className:"item_1",children:[Object(P.jsx)("h6",{children:"How many hours will you list on Motto?"}),Object(P.jsx)("div",{className:"inputs_platform",children:Object(P.jsx)("input",{type:"number",placeholder:"10 Hours/Week",value:H.hoursPerWeek,onChange:function(e){J(Object(r.a)(Object(r.a)({},H),{},{hoursPerWeek:e.target.value}))}})})]}),Object(P.jsxs)("div",{className:"item_2",children:[Object(P.jsx)("h6",{children:"Where are you willing to train?"}),Object(P.jsxs)("div",{className:"inputs_platform",children:[Object(P.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(i.a)(H.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(i.a)(n),[t]),J(Object(r.a)(Object(r.a)({},H),{},{preferedTrainingMode:n})),N((function(e){return!e}))}(0,"Online")},className:A?"buttonTrue":"buttonFalse",name:"trainingLocation",children:"Virtual"}),Object(P.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(i.a)(H.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(i.a)(n),[t]),J(Object(r.a)(Object(r.a)({},H),{},{preferedTrainingMode:n})),_((function(e){return!e}))}(0,"inperson")},className:M?"buttonTrue":"buttonFalse",name:"trainingLocation",children:"In Person"})]})]}),Object(P.jsxs)("div",{className:"item_3",children:[Object(P.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(P.jsx)(T,{checked:"a"===u,onChange:Y,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(P.jsx)("label",{children:"Yes"}),Object(P.jsx)(T,{checked:"b"===u,onChange:Y,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(P.jsx)("label",{children:"No"})]}),Object(P.jsxs)("div",{className:"item_4",children:[Object(P.jsx)("h6",{children:"Details of the facility/location"}),Object(P.jsx)("div",{className:"inputs_platform",children:Object(P.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",value:H.trainingFacilityLocation,onChange:function(e){J(Object(r.a)(Object(r.a)({},H),{},{trainingFacilityLocation:e.target.value}))}})})]}),Object(P.jsxs)("div",{className:"item_5",children:[Object(P.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(P.jsx)(T,{checked:"1"===k,onChange:U,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(P.jsx)("label",{children:" Yes!"}),Object(P.jsx)(T,{checked:"0"===k,onChange:U,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(P.jsx)("label",{children:"No"})]}),Object(P.jsxs)("div",{className:"item_6",children:[Object(P.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(P.jsx)("div",{className:"inputs_platform",children:Object(P.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",value:H.servicableLocation,onChange:function(e){J(Object(r.a)(Object(r.a)({},H),{},{servicableLocation:e.target.value}))}})})]})]}),Object(P.jsxs)("div",{className:"submit_button",children:[Object(P.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault();var i={details:Object(r.a)(Object(r.a)({},n),{},{hoursPerWeek:H.hoursPerWeek,preferedTrainingMode:H.preferedTrainingMode,trainingFacilityLocation:H.trainingFacilityLocation,willingToTravel:H.willingToTravel,servicableLocation:H.servicableLocation})};t(i);var a={location:n.location,DOB:n.dob,gender:n.gender,instagramProfile:n.instaHandle,facebookProfile:"https://facebook.com/kljdhpersonaltrainer",linkedInProfile:"https://linkedin.com/kljdhpersonaltrainer",referalCode:"gh678lJJ",areaOfExpertise:n.areaOfExpertise,trainingAvailability:"Fulltime",preferedTrainingMode:H.preferedTrainingMode,willingToTravel:H.willingToTravel,servicableLocation:H.servicableLocation,currentExperience:n.currentExperience,previousExperience:n.previousExperience.map((function(e){var t=e.job,n=e.orgnization,i=e.years;return{workMode:n,jobTitle:t,yearsOfExperience:"".concat(i)}})),trainingProcess:n.trainingProcess,profilePicture:"img location",interestInMotto:n.interestInMotto,clientAssessment:n.clientAssessment,trainingFacility:"a"===u,trainingFacilityLocation:[H.trainingFacilityLocation],description:"",myMotto:"",images:["img Location"],identityInfromation:{identityType:"",identityNumber:"",identityImg:"S3 location"},insuranceInformation:{},stripeId:"",hoursPerWeek:H.hoursPerWeek,serviceableCity:H.servicableLocation,websiteLink:n.websiteLink,youtubeLink:"jfjdld",certification:n.certification.map((function(e){var t=e.certificate;return{certificateName:t,certfiedYear:e.year,certification:t}})),oneOnOnePricing:{inPersonAtClientLocation:"125$",inPersonAtTrainerLocation:"130$",virtualSession:"120$",passRatefor3Session:"100$",passRatefor10Session:"150$"},socialSessionPricing:{inPeronAtClientLocationfor2People:"$123",inPeronAtClientLocationfor3People:"$123",inPeronAtClientLocationfor4People:"$123",inPeronAtTrainerLocationfor2People:"$123",inPeronAtTrainerLocationfor3People:"$123",inPeronAtTrainerLocationfor4People:"$123",virtualSessionfor2People:"$130",virtualSessionfor3People:"$130",virtualSessionfor4People:"$130"},classSessionPricing:{inPersonAtclientLocationfor15People:"$300",inPersonAttrainerLocationfor15People:"$290",virtualAtclientLocationfor15People:"$300",virtualAttrainerLocationfor15People:"$290",virtualSessionfor15People:"$130"}},o=p.TrainerApi.updateTrainerAvailabilityApi;o.body=a,Object(m.api)(Object(r.a)({},o)).then((function(){z(!0)})).catch((function(e){console.error("Error:",e),z(!1)}))},children:["Submit",Object(P.jsx)(f.default,{})]}),R?Object(P.jsx)(j.a,{open:R,onClose:function(){z(!1),v.history.push("card")},center:!0,closeIcon:L,container:D.current,styles:{boaderRadius:"10px"},children:Object(P.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(P.jsx)("h2",{children:"Background Information collection complete. Click the \u201cx\u201d to move to next section!"}),Object(P.jsx)("p",{children:"Time to move on to building your public Motto profile. This profile will be published only after you are approved!"})]})}):null]})]})]}),Object(P.jsx)("img",{src:g.default,alt:"icon",className:"ava_watermark"})]})]})})}));t.default=C},315:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow Back.d3693c0f.svg"},461:function(e,t,n){},462:function(e,t,n){},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(98);var a=n(70);function r(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},647:function(e,t,n){"use strict";var i=n(4),a=n(580),r=n(2),o=(n(3),n(585)),c=n(611),l=n(586),s=Object(l.a)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(r.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=n(587);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,n=e.classes,i=e.fontSize;return r.createElement("div",{className:Object(o.a)(n.root,t&&n.checked)},r.createElement(s,{fontSize:i}),r.createElement(d,{fontSize:i,className:n.layer}))})),f=n(602),j=n(603);var h=r.createContext();var p=r.createElement(b,{checked:!0}),m=r.createElement(b,null),O=r.forwardRef((function(e,t){var n=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,f=e.size,O=void 0===f?"medium":f,v=Object(a.a)(e,["checked","classes","color","name","onChange","size"]),g=r.useContext(h),y=n,x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];e.apply(this,i),t.apply(this,i)}}),(function(){}))}(b,g&&g.onChange),k=u;return g&&("undefined"===typeof y&&(y=g.value===e.value),"undefined"===typeof k&&(k=g.name)),r.createElement(c.a,Object(i.a)({color:d,type:"radio",icon:r.cloneElement(m,{fontSize:"small"===O?"small":"default"}),checkedIcon:r.cloneElement(p,{fontSize:"small"===O?"small":"default"}),classes:{root:Object(o.a)(l.root,l["color".concat(Object(j.a)(d))]),checked:l.checked,disabled:l.disabled},name:k,checked:y,onChange:x,ref:t},v))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(O)},658:function(e,t,n){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=50.16f9af02.chunk.js.map