(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[47,84,93,251,296,324,340,343,344,345,368],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(36),i=a(5),c=a(20),o=a(21),r=a(27),l=a(26),s=a(2),d=a(893),u=a(816),b=(a(470),a(469)),m=a(1),h=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,c=e.options,o=void 0===c?[]:c,r=e.value,l=void 0===r?"":r,s=e.name,h=void 0===s?"":s,j=e.placeholder,p=void 0===j?"Select":j,v=e.disabled,f=void 0!==v&&v,g=e.arrow,O=void 0!==g&&g,x=e.isReadOnly,y=void 0!==x&&x,N=e.label,k=void 0===N?"":N,C=e.isMulti,w=void 0!==C&&C,L=e.isClearable,S=void 0!==L&&L,D=e.isSearchable,M=void 0!==D&&D,_=e.isBoldLabel,I=void 0!==_&&_,P=e.showArrow,T=void 0===P||P,F={placeholder:function(e){return Object(i.a)(Object(i.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(i.a)(Object(i.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(i.a)(Object(i.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(i.a)(Object(i.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(m.jsx)(m.Fragment,{children:y?Object(m.jsx)("p",{children:l}):Object(m.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(I?"mt-0":""),children:[""!==k?Object(m.jsx)("div",{children:Object(m.jsx)("label",{className:I?"mb-1 text-black-22":"font-weight-normal mb-1",children:k})}):null,Object(m.jsx)(u.a,{className:a,classNamePrefix:"Select",isDisabled:f,isClearable:S,isSearchable:M,name:h,options:o,onChange:this.handleChange,isMulti:w,showArrow:T,placeholder:p,styles:F,value:o&&o.length>0&&o.find((function(e){return e.value===l}))?o.find((function(e){return e.value===l})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(m.jsx)(d.l.DropdownIndicator,Object(i.a)(Object(i.a)({},e),{},{children:Object(m.jsx)("img",{src:b.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),a}(s.Component)},162:function(e,t,a){"use strict";a.r(t),a.d(t,"YearDropDown",(function(){return l}));var n=a(5),i=a(60),c=(a(2),a(151)),o=a(111),r=a(1),l=function(e){var t=e.label,a=void 0===t?"":t,l=e.name,s=void 0===l?"":l,d=Object(i.a)(e,["label","name"]),u=Object(o.getFormattedYears)().map((function(e){return{label:e.toString(),value:e.toString(),name:s}}));return Object(r.jsx)(c.NormalMultiSelect,Object(n.a)({placeholder:a,arrow:!0,name:s,options:u},d))}},369:function(e,t,a){"use strict";a.r(t);var n=a(36),i=a(109),c=a(11),o=a(5),r=a(2),l=a.n(r),s=(a(653),a(814)),d=a.n(s),u=a(110),b=a(579),m=a(494),h=a(495),j=a(634),p=a(545),v=a(77),f=a(150),g=a(25),O=a(30),x=a(6),y=a(113),N=a(76),k=a(910),C=a(891),w=a(162),L=a(151),S=a(9),D=a(111),M=a(268),_=a.n(M),I=a(112),P=a(38),T=a(1),F=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],E=Object(N.a)({root:{"&$checked":{color:k.a[600]}},checked:{}})((function(e){return Object(T.jsx)(C.a,Object(o.a)({color:"default"},e))})),B=Object(O.b)((function(e){return{details:e.trainerReducer.details}}),(function(e){return Object(g.b)({updateTrainerDetails:v.updateTrainerDetails,getTrainerDetails:v.getTrainerDetails,fileUploadApi:v.fileUpload},e)}))((function(e){var t,a,s,v=e.getTrainerDetails,g=e.details,O=e.updateTrainerDetails,N=e.fileUploadApi,k=Object(r.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],servicableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:"",governmentId:"",insurance:"",governmentIdNumber:"",coverAmount:"",virtualMeetingHandle:"",virtualMeetingLink:"",identityNameUS:"",trainingFacilityLocation:[],insuranceNameUS:"",serviceableNeighbourHood:""}),C=Object(c.a)(k,2),M=C[0],B=C[1],A=l.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",servicableLocation:""}),H=Object(c.a)(A,2),Y=H[0],R=H[1],z=l.a.useState(""),U=Object(c.a)(z,2),W=U[0],$=U[1],q=l.a.useState(""),V=Object(c.a)(q,2),Z=V[0],G=V[1],J=Object(r.useState)({}),K=Object(c.a)(J,2),Q=K[0],X=K[1],ee=function(e){G(e.target.value),R(Object(o.a)(Object(o.a)({},Y),{},{willingToTravel:e.target.value}))},te=function(e){$(e.target.value)};Object(r.useEffect)((function(){var e;if(null===M||void 0===M||null===(e=M.trainingLocation)||void 0===e||e.includes("inPerson"),"0"===Z&&"b"===W){var t=Object(o.a)({},M);t.trainingLocation=t.trainingLocation.filter((function(e){return"inPerson"!==e})),B(t)}}),[W,Z]);var ae=Object(r.useState)([{url:""},{url:""},{url:""},{url:""},{url:""}]),ne=Object(c.a)(ae,2),ie=ne[0],ce=ne[1],oe=Object(r.useState)([{certificate:"",year:"",remove:""}]),re=Object(c.a)(oe,2),le=re[0],se=re[1],de=function(){se([].concat(Object(i.a)(le),[{certificate:"",year:"",remove:""}]))},ue=function(e,t){var a=Object(i.a)(le);a[e][t.target.name]=t.target.value,se(a)},be=function(e,t){e.preventDefault&&e.preventDefault();var a=e.target||e||{},n=a.name,c=a.value,r=Object(o.a)({},M),l=Array.isArray(e);"trainingLocation"===n?r.trainingLocation.includes(t)?r.trainingLocation=r.trainingLocation.filter((function(e){return e!==t})):r.trainingLocation=[].concat(Object(i.a)(r.trainingLocation),[t]):r["".concat(l?e[0].name:n)]=l?e:c,B(r)},me=function(){v().then((function(e){var t,a=e||{},i=a.trainingProcess,c=void 0===i?"":i,r=a.myMotto,l=void 0===r?"":r,s=a.preferedTrainingMode,d=void 0===s?[]:s,u=a.websiteLink,b=void 0===u?"":u,m=a.instagramProfile,h=void 0===m?"":m,j=a.currentExperience,p=void 0===j?{}:j,v=a.certification,f=void 0===v?[]:v,x=a.servicableLocation,y=void 0===x?[]:x,N=a.location,k=void 0===N?"":N,C=a.virtualMeetingLink,w=void 0===C?"":C,L=a.trainingFacilityLocation,S=void 0===L?[]:L,D=a.trainingFacility,M=void 0===D?{}:D,_=a.DOB,I=a.phoneNumber,P=a.email,T=a.serviceableNeighbourHood,F=(p||{}).workLocation,E=void 0===F?"":F,A={details:Object(o.a)(Object(o.a)({},g),{},(t={trainerId:e.id,motto:l,trainingProcessDescription:c,trainingLocation:d,location:E,websiteLink:b,instaHandle:h},Object(n.a)(t,"location",k),Object(n.a)(t,"virtualMeetingLink",w),Object(n.a)(t,"servicableLocation",Array.isArray(y)?y.toString():y),Object(n.a)(t,"trainingFacilityLocation",S),Object(n.a)(t,"DOB",_),Object(n.a)(t,"email",P),Object(n.a)(t,"serviceableNeighbourHood",T||""),Object(n.a)(t,"phoneNo",I.includes("+")?I:"+".concat(I)),t))};if(e.images&&0!==e.images.length){var H=e.images.map((function(e){return{url:e}}));ce(H)}null!==e.willingToTravel&&void 0!==e.willingToTravel&&G(e.willingToTravel?"1":"0"),f&&se(f),null!==M&&$(M?"a":"b"),B(A.details),O(A)})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){me()}),[]);var he=function(e){var t=Object(I.default)(e,(I.default.validators.dateValidation=function(e,t,a,n){var i=_()();i=(i=i.subtract(t,"years")).format("YYYY-MM-DD");var c=_()(e).format("YYYY-MM-DD");return _()(c).isBefore(i)?void 0:["^Trainer should be atleast 21 years old"]},{DOB:{presence:{allowEmpty:!1,message:"^Date of birth is required"},dateValidation:21},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}}}));if(void 0!==t){var a=Object(o.a)({},t);X(Object(o.a)(Object(o.a)({},a),t))}return!t},je=_()();return je=(je=je.subtract(21,"years")).format("YYYY-MM-DD"),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{className:"outter_tp_container",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsx)("div",{className:"inner_trinerpro_container",children:Object(T.jsxs)("div",{className:"tp_wrapper",children:[Object(T.jsxs)("div",{className:"tp_header d-flex align-items-center pr-5 mr-5",children:[Object(T.jsx)("h2",{children:"My Profile"}),Object(T.jsxs)("div",{className:"profile_share mt-0 ml-auto",children:[Object(T.jsx)("img",{src:p.default,alt:"icon"}),Object(T.jsx)(S.a,{onClick:function(){var e=null===g||void 0===g?void 0:g.trainerId,t="".concat(window.location.host),a="".concat(t,"/").concat("trainer/profile/").concat(e);a&&Object(D.copyTextToClipboard)(a,"Link copied")},children:"Share Profile"})]})]}),Object(T.jsx)("div",{className:"tp_outter_form container",children:Object(T.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(T.jsxs)("div",{className:"setup_card1",children:[Object(T.jsx)("h6",{children:"What\u2019s your Motto?"}),Object(T.jsx)("textarea",{type:"text",placeholder:"Share your favorite motto quote that represents you or your philosophy in less than 75 words",onChange:function(e){var t,a=e.target.value;(null===a||void 0===a||null===(t=a.split(" "))||void 0===t?void 0:t.length)>75||(null===a||void 0===a?void 0:a.length)>500||be(e)},value:M.motto,name:"motto",maxLength:"500"})]}),Object(T.jsxs)("div",{className:"setup_card2",children:[Object(T.jsx)("h6",{children:"Tell us about you and describe your training process"}),Object(T.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"Tell potential clients everything you think they should know about you as a trainer & individual. Utilize keywords as anything you write here will also be searchable in our search box.",onChange:be,value:M.trainingProcessDescription},"name","trainingProcessDescription"))]}),Object(T.jsxs)("div",{className:"setup_card3",children:[Object(T.jsx)("h6",{children:"Throw in some photos showcasing you & your skills"}),Object(T.jsxs)("div",{className:"row",children:[ie.map((function(e,t){return Object(T.jsx)("div",{className:"col-4 w-100 mb-3 px-2",children:Object(T.jsx)("div",{className:"image-upload-card btn-file-input",children:""!==e.url?Object(T.jsxs)("button",{className:"uploaded-image",children:[Object(T.jsx)("img",{src:null===e||void 0===e?void 0:e.url,alt:"card-image",accept:"image/*"}),Object(T.jsx)("div",{id:"overlay",className:"".concat(!1===e.isUploaded?"d-flex fs-12 align-items-center justify-content-center":""," upload-img-overlay")}),Object(T.jsx)("img",{src:f.default,className:"remove-image",alt:"close",onClick:function(){return function(e){ie[e]={url:""},ce(Object(i.a)(ie))}(t)}})]}):Object(T.jsxs)("button",{children:[Object(T.jsx)("img",{src:b.default,alt:"card-image",accept:"image/*"}),Object(T.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e,t){var a=e.target.files[0];if(void 0!==a){var n=new FormData;ie[t]={url:URL.createObjectURL(a),isUploaded:!1},ce(Object(i.a)(ie));var c=document.getElementsByClassName("upload-img-overlay")[t],o={onUploadProgress:function(e){var t=Math.round(100*e.loaded/e.total);c&&(c.innerText="Uploading ".concat(t,"%"))}};n.append("images",a),N(n,o).then((function(e){var a=e.urlPath;ie[t]={url:a,isUploaded:!0},c&&(c.innerHTML=""),ce(Object(i.a)(ie))})).catch((function(e){c&&(c.innerHTML="Failed"),Object(P.Toast)({type:"error",message:e.message||"Error"})}))}}(e,t)}})]})})},t)})),ie.length<10?Object(T.jsx)("h5",{onClick:function(){return ie.push({url:""}),void ce(Object(i.a)(ie))},children:"+ Add More Images"}):null]})]}),Object(T.jsxs)("div",{className:"setup_card4",children:[Object(T.jsx)("h6",{children:"Certifications you\u2019d like to display"}),null===le||void 0===le?void 0:le.map((function(e,t){return Object(T.jsxs)(l.a.Fragment,{children:[Object(T.jsxs)("div",{className:"inputs_certificate",children:[Object(T.jsx)("div",{className:"col-6 px-2",children:Object(T.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return ue(t,e)},className:"w-100 my-2"})}),Object(T.jsx)("div",{className:"col-6 px-2",children:Object(T.jsx)(w.YearDropDown,{label:"Year you were Certified",value:e.year,name:"year",handleChange:function(e){return ue(t,e)}})})]}),t+1===le.length?Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("h5",{onClick:de,children:"+ Add Certificate's"}),t+1===le.length&&1!==le.length?Object(T.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(i.a)(le);t.splice(e,1),se(t)}(t)},children:"Remove"}):null]}):null]},t)}))]}),Object(T.jsx)("div",{className:"setup_card5",children:Object(T.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(T.jsxs)("div",{className:"setup_item",children:[Object(T.jsx)("h6",{children:"Where will you be training"}),Object(T.jsxs)("div",{className:"inputs_platform",children:[Object(T.jsx)("button",{onClick:function(e){be(e,"virtual"),e.target.blur()},className:"".concat((null===M||void 0===M||null===(t=M.trainingLocation)||void 0===t?void 0:t.includes("virtual"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(T.jsx)("button",{onClick:function(e){be(e,"inPerson"),e.target.blur()},className:"".concat((null===M||void 0===M||null===(a=M.trainingLocation)||void 0===a?void 0:a.includes("inPerson"))?"active":""," ").concat("0"===Z&&"b"===W?"disable-btn":""),name:"trainingLocation",disabled:"0"===Z&&"b"===W,children:"In Person"})]}),Object(T.jsx)("div",{className:"social_meeting_links",children:(null===M||void 0===M||null===(s=M.trainingLocation)||void 0===s?void 0:s.includes("virtual"))?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h5",{children:"Add your Google or Zoom meeting link"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("div",{className:"iconwrapper",children:Object(T.jsx)("textarea",{type:"text",placeholder:"Add a Google or Zoom meeting link",value:M.virtualMeetingLink,onChange:be,name:"virtualMeetingLink"})})})]}):null})]}),Object(T.jsxs)("div",{className:"setup_item1",children:[Object(T.jsx)("h6",{children:"Which city will you train in?"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("div",{className:"iconwrapper",children:Object(T.jsx)(L.NormalMultiSelect,{placeholder:"Select Your City",value:M.servicableLocation,arrow:!0,name:"servicableLocation",className:"trainer-profile-dropdown",options:F,handleChange:function(e){B(Object(o.a)(Object(o.a)({},M),{},{servicableLocation:e.target.value}))}})})})]}),Object(T.jsxs)("div",{className:"item_3",children:[Object(T.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(T.jsx)(E,{checked:"a"===W,onChange:te,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(T.jsx)("label",{children:"Yes"}),Object(T.jsx)(E,{checked:"b"===W,onChange:te,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(T.jsx)("label",{children:"No"})]}),Object(T.jsxs)("div",{className:"item_4",children:[Object(T.jsx)("h6",{children:"Details of the facility/location"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",onChange:be,value:M.trainingFacilityLocation,name:"trainingFacilityLocation",disabled:"a"!==W,className:"".concat("a"!==W?"disable-btn":"")})})]}),Object(T.jsxs)("div",{className:"item_5",children:[Object(T.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(T.jsx)(E,{checked:"1"===Z,onChange:ee,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(T.jsx)("label",{children:" Yes!"}),Object(T.jsx)(E,{checked:"0"===Z,onChange:ee,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(T.jsx)("label",{children:"No"})]}),Object(T.jsxs)("div",{className:"item_6",children:[Object(T.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(T.jsxs)("div",{className:"inputs_platform",children:[Object(T.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",onChange:be,value:M.serviceableNeighbourHood,name:"serviceableNeighbourHood",disabled:1!==parseInt(Z),className:"".concat(1!==parseInt(Z)?"disable-btn":"")}),Object(T.jsx)("img",{src:j.default,alt:"icon",className:"loction_img_select"})]})]}),Object(T.jsxs)("div",{className:"input_profile",children:[Object(T.jsx)("label",{children:"Date of Birth "}),Object(T.jsx)("input",{placeholder:"DD/MM/YYYY",type:"date",value:M.DOB,onChange:be,name:"DOB",min:"1900-01-01",max:je}),Q.DOB&&Object(T.jsx)("span",{className:"text-danger",children:Q.DOB[0]})]}),Object(T.jsxs)("div",{className:"input_profile",children:[Object(T.jsx)("label",{children:"Email "}),Object(T.jsx)("input",{type:"text",value:M.email,onChange:be,name:"email"}),Q.email&&Object(T.jsx)("span",{className:"text-danger",children:Q.email[0]})]}),Object(T.jsxs)("div",{className:"input_profile",children:[Object(T.jsx)("label",{children:"Phone "}),Object(T.jsx)(d.a,{disableDropdown:!0,countryCodeEditable:!0,value:M.phoneNo,country:"us",inputProps:{name:"phoneNo"},specialLabel:"",name:"phoneNo",onChange:function(e){return be({target:{name:"phoneNo",value:e}})}}),Q.phoneNumber&&Object(T.jsx)("span",{className:"text-danger",children:Q.phoneNumber[0]})]}),Object(T.jsxs)("div",{className:"setup_item1",children:[Object(T.jsx)("h6",{children:"Instagram"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsxs)("div",{className:"iconwrapper",children:[Object(T.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:be,value:M.instaHandle,name:"instaHandle"}),Object(T.jsx)("img",{src:m.default,alt:"icon"})]})})]}),Object(T.jsxs)("div",{className:"setup_item1",children:[Object(T.jsx)("h6",{children:"Website"}),Object(T.jsx)("div",{className:"inputs_platform",children:Object(T.jsxs)("div",{className:"iconwrapper",children:[Object(T.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:be,value:M.websiteLink,name:"websiteLink"}),Object(T.jsx)("img",{src:h.default,alt:"icon"})]})})]})]})}),Object(T.jsx)("div",{className:"tp_button_save mb-5",children:Object(T.jsxs)("button",{onClick:function(){var e=M.instaHandle,t=M.motto,a=M.servicableLocation,n=M.trainingProcessDescription,i=M.websiteLink,c=M.trainingFacilityLocation,r=M.virtualMeetingLink,l=M.DOB,s=M.phoneNo,d=M.email,u=M.serviceableNeighbourHood,b={trainingProcess:n,myMotto:t,websiteLink:i,instagramProfile:e,certification:le,virtualMeetingLink:r,servicableLocation:[a],serviceableNeighbourHood:u||"",trainingFacilityLocation:c,trainingFacility:"a"===W,willingToTravel:"1"===Z,preferedTrainingMode:null===M||void 0===M?void 0:M.trainingLocation,images:ie.filter((function(e){return""!==e.url})).map((function(e){return e.url})),DOB:l,email:d,phoneNumber:s?s.includes("+")?s:"+".concat(s):null};if(he(b)){var m=x.TrainerApi.updateTrainerAvailabilityApi;m.body=b,Object(y.api)(Object(o.a)({},m)).then((function(){me(),Object(P.Toast)({type:"success",message:"Successfully added changes"})})).catch((function(e){return console.log(e)}))}},children:["Save changes ",Object(T.jsx)(u.default,{})]})})]})})]})})})})})}));t.default=B},469:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},470:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},495:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},545:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/share.b27e3212.svg"},579:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Image 1.8f33ee1e.svg"},634:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Location Icon.6eb543f1.svg"},653:function(e,t,a){},798:function(e,t,a){"use strict";var n=a(4),i=a(116),c=a(16),o=a(2),r=(a(3),a(54)),l=a(786),s=a(805),d=a(76),u=a(115),b=a(1417),m=a(149),h=o.forwardRef((function(e,t){var a=e.edge,i=void 0!==a&&a,l=e.children,s=e.classes,d=e.className,u=e.color,h=void 0===u?"default":u,j=e.disabled,p=void 0!==j&&j,v=e.disableFocusRipple,f=void 0!==v&&v,g=e.size,O=void 0===g?"medium":g,x=Object(c.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(b.a,Object(n.a)({className:Object(r.a)(s.root,d,"default"!==h&&s["color".concat(Object(m.a)(h))],p&&s.disabled,"small"===O&&s["size".concat(Object(m.a)(O))],{start:s.edgeStart,end:s.edgeEnd}[i]),centerRipple:!0,focusRipple:!f,disabled:p,ref:t},x),o.createElement("span",{className:s.label},l))})),j=Object(d.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(u.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(h),p=o.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,u=e.checkedIcon,b=e.classes,m=e.className,h=e.defaultChecked,p=e.disabled,v=e.icon,f=e.id,g=e.inputProps,O=e.inputRef,x=e.name,y=e.onBlur,N=e.onChange,k=e.onFocus,C=e.readOnly,w=e.required,L=e.tabIndex,S=e.type,D=e.value,M=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=Object(l.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),I=Object(i.a)(_,2),P=I[0],T=I[1],F=Object(s.a)(),E=p;F&&"undefined"===typeof E&&(E=F.disabled);var B="checkbox"===S||"radio"===S;return o.createElement(j,Object(n.a)({component:"span",className:Object(r.a)(b.root,m,P&&b.checked,E&&b.disabled),disabled:E,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){y&&y(e),F&&F.onBlur&&F.onBlur(e)},ref:t},M),o.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:h,className:b.input,disabled:E,id:B&&f,name:x,onChange:function(e){var t=e.target.checked;T(t),N&&N(e,t)},readOnly:C,ref:O,required:w,tabIndex:L,type:S,value:D},g)),P?u:v)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p)},809:function(e,t,a){"use strict";var n=a(2),i=n.createContext();t.a=i},891:function(e,t,a){"use strict";var n=a(4),i=a(16),c=a(2),o=(a(3),a(54)),r=a(798),l=a(781),s=Object(l.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(76);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(o.a)(a.root,t&&a.checked)},c.createElement(s,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),m=a(115),h=a(149),j=a(153),p=a(809);var v=c.createElement(b,{checked:!0}),f=c.createElement(b,null),g=c.forwardRef((function(e,t){var a=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,m=e.size,g=void 0===m?"medium":m,O=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),x=c.useContext(p.a),y=a,N=Object(j.a)(b,x&&x.onChange),k=u;return x&&("undefined"===typeof y&&(y=x.value===e.value),"undefined"===typeof k&&(k=x.name)),c.createElement(r.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(f,{fontSize:"small"===g?"small":"default"}),checkedIcon:c.cloneElement(v,{fontSize:"small"===g?"small":"default"}),classes:{root:Object(o.a)(l.root,l["color".concat(Object(h.a)(d))]),checked:l.checked,disabled:l.disabled},name:k,checked:y,onChange:N,ref:t},O))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(g)},910:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);