(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[44,82,121,188,189,256],{129:function(e,t,n){"use strict";n.r(t);var i=n(562),a=n(10),r=n(11),o=n(2),c=n.n(o),l=(n(440),n(5)),s=n(569),d=n(638),u=n(627),b=n(304),f=n(68),p=n(182),j=(n(215),n(441),n(99)),h=n(60),m=n(73),v=n(8),O=n(13),g=n(40),y=n(38),x=n(69),k=n(210),T=n(1),P=Object(s.a)({root:{"&$checked":{color:d.a[600]}},checked:{}})((function(e){return Object(T.jsx)(u.a,Object(r.a)({color:"default"},e))})),A=Object(T.jsx)("img",{src:j.default,alt:"close"}),L=Object(x.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(y.b)({updateTrainerDetails:k.updateTrainerDetails},e)}))((function(e){var t,n,s=e.updateTrainerDetails,d=e.details,u=(Object(v.g)(),c.a.useState("a")),j=Object(a.a)(u,2),y=j[0],x=j[1],k=c.a.useState(""),L=Object(a.a)(k,2),C=L[0],w=L[1],S=c.a.useState({}),N=Object(a.a)(S,2),$=(N[0],N[1],Object(o.useState)(!1)),E=Object(a.a)($,2),M=E[0],_=E[1],D=Object(o.useRef)(null),I=c.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",willingToTravel:"0",servicableLocation:""}),F=Object(a.a)(I,2),R=F[0],z=F[1],W=function(e){x(e.target.value)},B=function(e){w(e.target.value),z(Object(r.a)(Object(r.a)({},R),{},{willingToTravel:e.target.value}))},H=function(e,t){var n=Object(i.a)(R.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(i.a)(n),[t]),z(Object(r.a)(Object(r.a)({},R),{},{preferedTrainingMode:n}))};return Object(o.useEffect)((function(){if(Object.keys(d).length>3){d.hoursPerWeek,d.preferedTrainingMode,d.trainingFacilityLocation,d.willingToTravel,d.servicableLocation;d.trainingFacility&&x(d.trainingFacility?"a":"b")}}),[]),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("div",{className:"link_wrapper",children:[Object(T.jsx)("img",{src:b.default,alt:"icon"}),Object(T.jsx)("div",{className:"inner_links",children:Object(T.jsx)(l.a,{to:"/trainer/background",children:"Back to Trainer Background"})})]}),Object(T.jsxs)("div",{className:"main_wrappercontainer",children:[Object(T.jsxs)("div",{className:"wrapper_inneritem",children:[Object(T.jsx)("h1",{children:"Highlight your availability on the platform"}),Object(T.jsx)("p",{}),Object(T.jsxs)("form",{className:"container",onSubmit:function(e){return e.preventDefault()},children:[Object(T.jsxs)("div",{className:"content_wrapper",children:[Object(T.jsxs)("div",{className:"item_1",children:[Object(T.jsx)("h6",{children:"How many hours will you list on Motto?"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("input",{type:"number",placeholder:"10 Hours/Week",value:R.hoursPerWeek,onChange:function(e){z(Object(r.a)(Object(r.a)({},R),{},{hoursPerWeek:e.target.value}))}})})]}),Object(T.jsxs)("div",{className:"item_2",children:[Object(T.jsx)("h6",{children:"Where are you willing to train?"}),Object(T.jsxs)("div",{className:"inputs_platform",children:[Object(T.jsx)("button",{onClick:function(e){return H(0,"Online")},className:"".concat((null===R||void 0===R||null===(t=R.preferedTrainingMode)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(T.jsx)("button",{onClick:function(e){return H(0,"inperson")},className:"".concat((null===R||void 0===R||null===(n=R.preferedTrainingMode)||void 0===n?void 0:n.includes("inperson"))?"active":""),name:"trainingLocation",children:"In Person"})]})]}),Object(T.jsxs)("div",{className:"item_3",children:[Object(T.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(T.jsx)(P,{checked:"a"===y,onChange:W,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(T.jsx)("label",{children:"Yes"}),Object(T.jsx)(P,{checked:"b"===y,onChange:W,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(T.jsx)("label",{children:"No"})]}),Object(T.jsxs)("div",{className:"item_4",children:[Object(T.jsx)("h6",{children:"Details of the facility/location"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",value:R.trainingFacilityLocation,onChange:function(e){z(Object(r.a)(Object(r.a)({},R),{},{trainingFacilityLocation:e.target.value}))}})})]}),Object(T.jsxs)("div",{className:"item_5",children:[Object(T.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(T.jsx)(P,{checked:"1"===C,onChange:B,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(T.jsx)("label",{children:" Yes!"}),Object(T.jsx)(P,{checked:"0"===C,onChange:B,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(T.jsx)("label",{children:"No"})]}),Object(T.jsxs)("div",{className:"item_6",children:[Object(T.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",value:R.servicableLocation,onChange:function(e){z(Object(r.a)(Object(r.a)({},R),{},{servicableLocation:e.target.value}))}})})]})]}),Object(T.jsxs)("div",{className:"submit_button",children:[Object(T.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault();var t={details:Object(r.a)(Object(r.a)({},d),{},{hoursPerWeek:R.hoursPerWeek,preferedTrainingMode:R.preferedTrainingMode,trainingFacilityLocation:R.trainingFacilityLocation,willingToTravel:R.willingToTravel,servicableLocation:R.servicableLocation})};s(t);var n={location:d.location,DOB:d.dob,gender:d.gender,instagramProfile:d.instaHandle,facebookProfile:"https://facebook.com/kljdhpersonaltrainer",linkedInProfile:"https://linkedin.com/kljdhpersonaltrainer",referalCode:"gh678lJJ",areaOfExpertise:d.areaOfExpertise,trainingAvailability:"Fulltime",preferedTrainingMode:R.preferedTrainingMode,willingToTravel:R.willingToTravel,servicableLocation:R.servicableLocation,currentExperience:d.currentExperience,previousExperience:d.previousExperience.map((function(e){var t=e.job,n=e.orgnization,i=e.years;return{workMode:n,jobTitle:t,yearsOfExperience:"".concat(i)}})),trainingProcess:d.trainingProcess,profilePicture:"img location",interestInMotto:d.interestInMotto,clientAssessment:d.clientAssessment,trainingFacility:"a"===y,trainingFacilityLocation:[R.trainingFacilityLocation],description:"",myMotto:"",images:["img Location"],identityInfromation:{identityType:"",identityNumber:"",identityImg:"S3 location"},insuranceInformation:{},stripeId:"",hoursPerWeek:R.hoursPerWeek,serviceableCity:R.servicableLocation,websiteLink:d.websiteLink,youtubeLink:"jfjdld",certification:d.certification.map((function(e){var t=e.certificate;return{certificateName:t,certfiedYear:e.year,certification:t}})),oneOnOnePricing:{inPersonAtClientLocation:"125$",inPersonAtTrainerLocation:"130$",virtualSession:"120$",passRatefor3Session:"100$",passRatefor10Session:"150$"},socialSessionPricing:{inPeronAtClientLocationfor2People:"$123",inPeronAtClientLocationfor3People:"$123",inPeronAtClientLocationfor4People:"$123",inPeronAtTrainerLocationfor2People:"$123",inPeronAtTrainerLocationfor3People:"$123",inPeronAtTrainerLocationfor4People:"$123",virtualSessionfor2People:"$130",virtualSessionfor3People:"$130",virtualSessionfor4People:"$130"},classSessionPricing:{inPersonAtclientLocationfor15People:"$300",inPersonAttrainerLocationfor15People:"$290",virtualAtclientLocationfor15People:"$300",virtualAttrainerLocationfor15People:"$290",virtualSessionfor15People:"$130"}},i=h.TrainerApi.updateTrainerAvailabilityApi;i.body=n,Object(m.api)(Object(r.a)({},i)).then((function(){_(!0)})).catch((function(e){console.error("Error:",e),_(!1)}))},children:["Submit",Object(T.jsx)(f.default,{})]}),M?Object(T.jsx)(p.a,{open:M,onClose:function(){_(!1),O.history.push("card")},center:!0,closeIcon:A,container:D.current,styles:{boaderRadius:"10px"},children:Object(T.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(T.jsx)("h2",{children:"Background Information collection complete. Click the \u201cx\u201d to move to next section!"}),Object(T.jsx)("p",{children:"Time to move on to building your public Motto profile. This profile will be published only after you are approved!"})]})}):null]})]})]}),Object(T.jsx)("img",{src:g.default,alt:"icon",className:"ava_watermark"})]})]})})}));t.default=L},210:function(e,t,n){"use strict";n.r(t),n.d(t,"updateTrainerDetails",(function(){return o})),n.d(t,"getTrainerDetails",(function(){return c})),n.d(t,"getTrainerSessionDetails",(function(){return l}));var i=n(11),a=n(30),r=n(60),o=function(e){return function(t){return new Promise((function(n){t({type:a.TrainerActionType.updateTrainerDetails,payload:e}),n(!0)}))}},c=function(){return function(e,t,n){var o=n.api;return new Promise((function(t,n){var c=r.TrainerApi.getTrainerApi;o(Object(i.a)({},c)).then((function(n){var i=n.data;e({type:a.TrainerActionType.updateTrainerDetails,payload:{data:i}}),t(i)})).catch((function(e){n(e)}))}))}},l=function(){return function(e,t,n){var o=n.api;return new Promise((function(t,n){var c=r.TrainerApi.getTrainerSessionApi;o(Object(i.a)({},c)).then((function(n){var i=n.data;console.log(i),e({type:a.TrainerActionType.updateTrainerDetails,payload:{sessionData:i}}),t(i)})).catch((function(e){n(e)}))}))}}},304:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow Back.d3693c0f.svg"},440:function(e,t,n){},441:function(e,t,n){},562:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(98);var a=n(70);function r(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},627:function(e,t,n){"use strict";var i=n(4),a=n(561),r=n(2),o=(n(3),n(567)),c=n(592),l=n(568),s=Object(l.a)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(r.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=n(569);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,n=e.classes,i=e.fontSize;return r.createElement("div",{className:Object(o.a)(n.root,t&&n.checked)},r.createElement(s,{fontSize:i}),r.createElement(d,{fontSize:i,className:n.layer}))})),f=n(583),p=n(584);var j=r.createContext();var h=r.createElement(b,{checked:!0}),m=r.createElement(b,null),v=r.forwardRef((function(e,t){var n=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,f=e.size,v=void 0===f?"medium":f,O=Object(a.a)(e,["checked","classes","color","name","onChange","size"]),g=r.useContext(j),y=n,x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];e.apply(this,i),t.apply(this,i)}}),(function(){}))}(b,g&&g.onChange),k=u;return g&&("undefined"===typeof y&&(y=g.value===e.value),"undefined"===typeof k&&(k=g.name)),r.createElement(c.a,Object(i.a)({color:d,type:"radio",icon:r.cloneElement(m,{fontSize:"small"===v?"small":"default"}),checkedIcon:r.cloneElement(h,{fontSize:"small"===v?"small":"default"}),classes:{root:Object(o.a)(l.root,l["color".concat(Object(p.a)(d))]),checked:l.checked,disabled:l.disabled},name:k,checked:y,onChange:x,ref:t},O))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(v)},638:function(e,t,n){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=44.ab939506.chunk.js.map