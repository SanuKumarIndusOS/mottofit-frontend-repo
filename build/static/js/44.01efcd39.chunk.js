(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[44,81,122,190,191,261],{129:function(e,t,n){"use strict";n.r(t);var i=n(570),a=n(9),r=n(11),o=n(2),c=n.n(o),l=(n(453),n(5)),s=n(579),u=n(650),d=n(639),b=n(307),f=n(69),j=n(184),p=(n(217),n(454),n(99)),h=n(61),m=n(73),O=n(8),v=n(13),g=n(40),y=n(38),x=n(70),k=n(212),T=n(1),P=Object(s.a)({root:{"&$checked":{color:u.a[600]}},checked:{}})((function(e){return Object(T.jsx)(d.a,Object(r.a)({color:"default"},e))})),A=Object(T.jsx)("img",{src:p.default,alt:"close"}),L=Object(x.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(y.b)({updateTrainerDetails:k.updateTrainerDetails},e)}))((function(e){var t=e.updateTrainerDetails,n=e.details,s=(Object(O.g)(),c.a.useState("a")),u=Object(a.a)(s,2),d=u[0],p=u[1],y=c.a.useState(""),x=Object(a.a)(y,2),k=x[0],L=x[1],C=Object(o.useState)(!0),w=Object(a.a)(C,2),S=w[0],N=w[1],$=Object(o.useState)(!0),E=Object(a.a)($,2),M=E[0],_=E[1],D=Object(o.useState)(!1),F=Object(a.a)(D,2),I=F[0],R=F[1],z=Object(o.useRef)(null),W=c.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",willingToTravel:"0",servicableLocation:""}),B=Object(a.a)(W,2),H=B[0],J=B[1],Y=function(e){p(e.target.value)},U=function(e){L(e.target.value),J(Object(r.a)(Object(r.a)({},H),{},{willingToTravel:e.target.value}))};return Object(o.useEffect)((function(){if(Object.keys(n).length>3){n.hoursPerWeek,n.preferedTrainingMode,n.trainingFacilityLocation,n.willingToTravel,n.servicableLocation;n.trainingFacility&&p(n.trainingFacility?"a":"b")}}),[]),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("div",{className:"link_wrapper",children:[Object(T.jsx)("img",{src:b.default,alt:"icon"}),Object(T.jsx)("div",{className:"inner_links",children:Object(T.jsx)(l.a,{to:"/trainer/background",children:"Back to Trainer Background"})})]}),Object(T.jsxs)("div",{className:"main_wrappercontainer",children:[Object(T.jsxs)("div",{className:"wrapper_inneritem",children:[Object(T.jsx)("h1",{children:"Highlight your availability on the platform"}),Object(T.jsx)("p",{}),Object(T.jsxs)("form",{className:"container",onSubmit:function(e){return e.preventDefault()},children:[Object(T.jsxs)("div",{className:"content_wrapper",children:[Object(T.jsxs)("div",{className:"item_1",children:[Object(T.jsx)("h6",{children:"How many hours will you list on Motto?"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("input",{type:"number",placeholder:"10 Hours/Week",value:H.hoursPerWeek,onChange:function(e){J(Object(r.a)(Object(r.a)({},H),{},{hoursPerWeek:e.target.value}))}})})]}),Object(T.jsxs)("div",{className:"item_2",children:[Object(T.jsx)("h6",{children:"Where are you willing to train?"}),Object(T.jsxs)("div",{className:"inputs_platform",children:[Object(T.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(i.a)(H.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(i.a)(n),[t]),J(Object(r.a)(Object(r.a)({},H),{},{preferedTrainingMode:n})),N((function(e){return!e}))}(0,"Online")},className:S?"buttonTrue":"buttonFalse",name:"trainingLocation",children:"Virtual"}),Object(T.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(i.a)(H.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(i.a)(n),[t]),J(Object(r.a)(Object(r.a)({},H),{},{preferedTrainingMode:n})),_((function(e){return!e}))}(0,"inperson")},className:M?"buttonTrue":"buttonFalse",name:"trainingLocation",children:"In Person"})]})]}),Object(T.jsxs)("div",{className:"item_3",children:[Object(T.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(T.jsx)(P,{checked:"a"===d,onChange:Y,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(T.jsx)("label",{children:"Yes"}),Object(T.jsx)(P,{checked:"b"===d,onChange:Y,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(T.jsx)("label",{children:"No"})]}),Object(T.jsxs)("div",{className:"item_4",children:[Object(T.jsx)("h6",{children:"Details of the facility/location"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",value:H.trainingFacilityLocation,onChange:function(e){J(Object(r.a)(Object(r.a)({},H),{},{trainingFacilityLocation:e.target.value}))}})})]}),Object(T.jsxs)("div",{className:"item_5",children:[Object(T.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(T.jsx)(P,{checked:"1"===k,onChange:U,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(T.jsx)("label",{children:" Yes!"}),Object(T.jsx)(P,{checked:"0"===k,onChange:U,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(T.jsx)("label",{children:"No"})]}),Object(T.jsxs)("div",{className:"item_6",children:[Object(T.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",value:H.servicableLocation,onChange:function(e){J(Object(r.a)(Object(r.a)({},H),{},{servicableLocation:e.target.value}))}})})]})]}),Object(T.jsxs)("div",{className:"submit_button",children:[Object(T.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault();var i={details:Object(r.a)(Object(r.a)({},n),{},{hoursPerWeek:H.hoursPerWeek,preferedTrainingMode:H.preferedTrainingMode,trainingFacilityLocation:H.trainingFacilityLocation,willingToTravel:H.willingToTravel,servicableLocation:H.servicableLocation})};t(i);var a={location:n.location,DOB:n.dob,gender:n.gender,instagramProfile:n.instaHandle,facebookProfile:"https://facebook.com/kljdhpersonaltrainer",linkedInProfile:"https://linkedin.com/kljdhpersonaltrainer",referalCode:"gh678lJJ",areaOfExpertise:n.areaOfExpertise,trainingAvailability:"Fulltime",preferedTrainingMode:H.preferedTrainingMode,willingToTravel:H.willingToTravel,servicableLocation:H.servicableLocation,currentExperience:n.currentExperience,previousExperience:n.previousExperience.map((function(e){var t=e.job,n=e.orgnization,i=e.years;return{workMode:n,jobTitle:t,yearsOfExperience:"".concat(i)}})),trainingProcess:n.trainingProcess,profilePicture:"img location",interestInMotto:n.interestInMotto,clientAssessment:n.clientAssessment,trainingFacility:"a"===d,trainingFacilityLocation:[H.trainingFacilityLocation],description:"",myMotto:"",images:["img Location"],identityInfromation:{identityType:"",identityNumber:"",identityImg:"S3 location"},insuranceInformation:{},stripeId:"",hoursPerWeek:H.hoursPerWeek,serviceableCity:H.servicableLocation,websiteLink:n.websiteLink,youtubeLink:"jfjdld",certification:n.certification.map((function(e){var t=e.certificate;return{certificateName:t,certfiedYear:e.year,certification:t}})),oneOnOnePricing:{inPersonAtClientLocation:"125$",inPersonAtTrainerLocation:"130$",virtualSession:"120$",passRatefor3Session:"100$",passRatefor10Session:"150$"},socialSessionPricing:{inPeronAtClientLocationfor2People:"$123",inPeronAtClientLocationfor3People:"$123",inPeronAtClientLocationfor4People:"$123",inPeronAtTrainerLocationfor2People:"$123",inPeronAtTrainerLocationfor3People:"$123",inPeronAtTrainerLocationfor4People:"$123",virtualSessionfor2People:"$130",virtualSessionfor3People:"$130",virtualSessionfor4People:"$130"},classSessionPricing:{inPersonAtclientLocationfor15People:"$300",inPersonAttrainerLocationfor15People:"$290",virtualAtclientLocationfor15People:"$300",virtualAttrainerLocationfor15People:"$290",virtualSessionfor15People:"$130"}},o=h.TrainerApi.updateTrainerAvailabilityApi;o.body=a,Object(m.api)(Object(r.a)({},o)).then((function(){R(!0)})).catch((function(e){console.error("Error:",e),R(!1)}))},children:["Submit",Object(T.jsx)(f.default,{})]}),I?Object(T.jsx)(j.a,{open:I,onClose:function(){R(!1),v.history.push("card")},center:!0,closeIcon:A,container:z.current,styles:{boaderRadius:"10px"},children:Object(T.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(T.jsx)("h2",{children:"Background Information collection complete. Click the \u201cx\u201d to move to next section!"}),Object(T.jsx)("p",{children:"Time to move on to building your public Motto profile. This profile will be published only after you are approved!"})]})}):null]})]})]}),Object(T.jsx)("img",{src:g.default,alt:"icon",className:"ava_watermark"})]})]})})}));t.default=L},212:function(e,t,n){"use strict";n.r(t),n.d(t,"updateTrainerDetails",(function(){return o})),n.d(t,"getTrainerDetails",(function(){return c})),n.d(t,"getTrainerSessionDetails",(function(){return l}));var i=n(11),a=n(29),r=n(61),o=function(e){return function(t){return new Promise((function(n){t({type:a.TrainerActionType.updateTrainerDetails,payload:e}),n(!0)}))}},c=function(){return function(e,t,n){var o=n.api;return new Promise((function(t,n){var c=r.TrainerApi.getTrainerApi;o(Object(i.a)({},c)).then((function(n){var i=n.data;e({type:a.TrainerActionType.updateTrainerDetails,payload:{data:i}}),t(i)})).catch((function(e){n(e)}))}))}},l=function(){return function(e,t,n){var o=n.api;return new Promise((function(t,n){var c=r.TrainerApi.getTrainerSessionApi;o(Object(i.a)({},c)).then((function(n){var i=n.data;console.log(i),e({type:a.TrainerActionType.updateTrainerDetails,payload:{sessionData:i}}),t(i)})).catch((function(e){n(e)}))}))}}},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow Back.d3693c0f.svg"},453:function(e,t,n){},454:function(e,t,n){},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(98);var a=n(71);function r(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},639:function(e,t,n){"use strict";var i=n(4),a=n(572),r=n(2),o=(n(3),n(577)),c=n(603),l=n(578),s=Object(l.a)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=Object(l.a)(r.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),d=n(579);var b=Object(d.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,n=e.classes,i=e.fontSize;return r.createElement("div",{className:Object(o.a)(n.root,t&&n.checked)},r.createElement(s,{fontSize:i}),r.createElement(u,{fontSize:i,className:n.layer}))})),f=n(594),j=n(595);var p=r.createContext();var h=r.createElement(b,{checked:!0}),m=r.createElement(b,null),O=r.forwardRef((function(e,t){var n=e.checked,l=e.classes,s=e.color,u=void 0===s?"secondary":s,d=e.name,b=e.onChange,f=e.size,O=void 0===f?"medium":f,v=Object(a.a)(e,["checked","classes","color","name","onChange","size"]),g=r.useContext(p),y=n,x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];e.apply(this,i),t.apply(this,i)}}),(function(){}))}(b,g&&g.onChange),k=d;return g&&("undefined"===typeof y&&(y=g.value===e.value),"undefined"===typeof k&&(k=g.name)),r.createElement(c.a,Object(i.a)({color:u,type:"radio",icon:r.cloneElement(m,{fontSize:"small"===O?"small":"default"}),checkedIcon:r.cloneElement(h,{fontSize:"small"===O?"small":"default"}),classes:{root:Object(o.a)(l.root,l["color".concat(Object(j.a)(u))]),checked:l.checked,disabled:l.disabled},name:k,checked:y,onChange:x,ref:t},v))}));t.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(O)},650:function(e,t,n){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=44.01efcd39.chunk.js.map