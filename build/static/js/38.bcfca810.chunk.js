(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[38,78,82,197,239,283,286,287,288,311],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"YearDropDown",(function(){return l}));var n=a(3),i=a(196),c=(a(2),a(99)),r=a(72),o=a(1),l=function(e){var t=e.label,a=void 0===t?"":t,l=e.name,s=void 0===l?"":l,d=Object(i.a)(e,["label","name"]),u=Object(r.getFormattedYears)().map((function(e){return{label:e.toString(),value:e.toString(),name:s}}));return Object(o.jsx)(c.NormalMultiSelect,Object(n.a)({placeholder:a,arrow:!0,name:s,options:u},d))}},260:function(e,t,a){"use strict";a.r(t);var n=a(17),i=a(194),c=a(12),r=a(3),o=a(2),l=a.n(o),s=(a(516),a(70)),d=a(431),u=a(364),b=a(365),j=a(505),h=a(49),m=a(100),v=a(27),p=a(35),f=a(10),g=a(76),O=a(612),x=a(792),y=a(733),N=a(106),k=a(99),w=a(1),C=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],L=Object(O.a)({root:{"&$checked":{color:x.a[600]}},checked:{}})((function(e){return Object(w.jsx)(y.a,Object(r.a)({color:"default"},e))})),S=Object(p.b)((function(e){return{details:e.trainerReducer.details}}),(function(e){return Object(v.b)({updateTrainerDetails:h.updateTrainerDetails,getTrainerDetails:h.getTrainerDetails,fileUploadApi:h.fileUpload},e)}))((function(e){var t,a,h,v=e.getTrainerDetails,p=e.details,O=e.updateTrainerDetails,x=e.fileUploadApi,y=Object(o.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],servicableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:"",governmentId:"",insurance:"",governmentIdNumber:"",coverAmount:"",virtualMeetingHandle:"",virtualMeetingLink:"",identityNameUS:"",trainingFacilityLocation:[],insuranceNameUS:""}),S=Object(c.a)(y,2),_=S[0],M=S[1],D=l.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",servicableLocation:""}),A=Object(c.a)(D,2),P=A[0],T=A[1],F=l.a.useState("a"),I=Object(c.a)(F,2),H=I[0],E=I[1],z=l.a.useState(""),R=Object(c.a)(z,2),W=R[0],U=R[1],Y=function(e){U(e.target.value),T(Object(r.a)(Object(r.a)({},P),{},{willingToTravel:e.target.value}))},B=function(e){E(e.target.value)},$=Object(o.useState)(["","","","",""]),Z=Object(c.a)($,2),G=Z[0],J=Z[1],V=Object(o.useState)([{certificate:"",year:"",remove:""}]),K=Object(c.a)(V,2),q=K[0],Q=K[1],X=function(){Q([].concat(Object(i.a)(q),[{certificate:"",year:"",remove:""}]))},ee=function(e,t){var a=Object(i.a)(q);a[e][t.target.name]=t.target.value,Q(a)},te=function(e,t){e.preventDefault&&e.preventDefault();var a=e.target||e||{},n=a.name,c=a.value,o=Object(r.a)({},_),l=Array.isArray(e);"trainingLocation"===n?o.trainingLocation.includes(t)?o.trainingLocation=o.trainingLocation.filter((function(e){return e!==t})):o.trainingLocation=[].concat(Object(i.a)(o.trainingLocation),[t]):o["".concat(l?e[0].name:n)]=l?e:c,M(o)},ae=function(){v().then((function(e){var t,a=e||{},i=a.trainingProcess,c=void 0===i?"":i,o=a.myMotto,l=void 0===o?"":o,s=a.preferedTrainingMode,d=void 0===s?[]:s,u=a.websiteLink,b=void 0===u?"":u,j=a.instagramProfile,h=void 0===j?"":j,m=a.currentExperience,v=void 0===m?{}:m,f=a.certification,g=void 0===f?[]:f,x=a.servicableLocation,y=void 0===x?[]:x,N=a.location,k=void 0===N?"":N,w=a.virtualMeetingLink,C=void 0===w?"":w,L=a.trainingFacilityLocation,S=void 0===L?[]:L,_=(v||{}).workLocation,D=void 0===_?"":_,A={details:Object(r.a)(Object(r.a)({},p),{},(t={motto:l,trainingProcessDescription:c,trainingLocation:d,location:D,websiteLink:b,instaHandle:h},Object(n.a)(t,"location",k),Object(n.a)(t,"virtualMeetingLink",C),Object(n.a)(t,"servicableLocation",y),Object(n.a)(t,"trainingFacilityLocation",S),t))};e.images&&0!==e.images.length&&J(e.images),null!==e.willingToTravel&&void 0!==e.willingToTravel&&U(e.willingToTravel?"1":"0"),g&&Q(g),M(A.details),O(A)})).catch((function(e){return console.log(e)}))};Object(o.useEffect)((function(){ae()}),[]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"outter_tp_container",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"inner_trinerpro_container",children:Object(w.jsxs)("div",{className:"tp_wrapper",children:[Object(w.jsx)("div",{className:"tp_header",children:Object(w.jsx)("h2",{children:"My Profile"})}),Object(w.jsx)("div",{className:"tp_outter_form container",children:Object(w.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(w.jsxs)("div",{className:"setup_card1",children:[Object(w.jsx)("h6",{children:"What\u2019s your Motto?"}),Object(w.jsx)("textarea",{type:"text",placeholder:"Tell us all about it",onChange:te,value:_.motto,name:"motto",maxlength:"500"})]}),Object(w.jsxs)("div",{className:"setup_card2",children:[Object(w.jsx)("h6",{children:"Tell us about you and describe your training process"}),Object(w.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"Tell clients everything you think they should know! Utilize Key words as anything you write here will be searchable through our search bar",onChange:te,value:_.trainingProcessDescription},"name","trainingProcessDescription"))]}),Object(w.jsxs)("div",{className:"setup_card3",children:[Object(w.jsx)("h6",{children:"Throw in some photos showcasing you & your skills"}),Object(w.jsxs)("div",{className:"row",children:[G.map((function(e,t){return Object(w.jsx)("div",{className:"col-3 w-100 mb-3 px-2",children:Object(w.jsx)("div",{className:"image-upload-card btn-file-input",children:""!==e?Object(w.jsxs)("button",{className:"uploaded-image",children:[Object(w.jsx)("img",{src:e,alt:"card-image",accept:"image/*"}),Object(w.jsx)("div",{id:"overlay"}),Object(w.jsx)("img",{src:m.default,className:"remove-image",alt:"close",onClick:function(){return function(e){G[e]="",J(Object(i.a)(G))}(t)}})]}):Object(w.jsxs)("button",{children:[Object(w.jsx)("img",{src:d.default,alt:"card-image",accept:"image/*"}),Object(w.jsx)("input",{type:"file",name:"insurance",className:"custom-file-input",onChange:function(e){return function(e,t){var a=e.target.files[0];if(void 0!==a){var n=new FormData;n.append("images",a),x(n).then((function(e){G[t]=URL.createObjectURL(a),J(Object(i.a)(G))}))}}(e,t)}})]})})},t)})),G.length<10?Object(w.jsx)("h5",{onClick:function(){return G.push(""),void J(Object(i.a)(G))},children:"+ Add More Images"}):null]})]}),Object(w.jsxs)("div",{className:"setup_card4",children:[Object(w.jsx)("h6",{children:"Certifications you\u2019d like to display"}),null===q||void 0===q?void 0:q.map((function(e,t){return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsxs)("div",{className:"inputs_certificate",children:[Object(w.jsx)("div",{className:"col-6 px-2",children:Object(w.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return ee(t,e)},className:"w-100 my-2"})}),Object(w.jsx)("div",{className:"col-6 px-2",children:Object(w.jsx)(N.YearDropDown,{label:"Year you were Certified",value:e.year,name:"year",handleChange:function(e){return ee(t,e)}})})]}),t+1===q.length?Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("h5",{onClick:X,children:"+ Add Certificate's"}),t+1===q.length&&1!==q.length?Object(w.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(i.a)(q);t.splice(e,1),Q(t)}(t)},children:"Remove"}):null]}):null]},t)}))]}),Object(w.jsx)("div",{className:"setup_card5",children:Object(w.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(w.jsxs)("div",{className:"setup_item",children:[Object(w.jsx)("h6",{children:"Where will you be training"}),Object(w.jsxs)("div",{className:"inputs_platform",children:[Object(w.jsx)("button",{onClick:function(e){return te(e,"Online")},className:"".concat((null===_||void 0===_||null===(t=_.trainingLocation)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(w.jsx)("button",{onClick:function(e){return te(e,"inPerson")},className:"".concat((null===_||void 0===_||null===(a=_.trainingLocation)||void 0===a?void 0:a.includes("inPerson"))?"active":""),name:"trainingLocation",children:"In Person"})]}),Object(w.jsx)("div",{className:"social_meeting_links",children:(null===_||void 0===_||null===(h=_.trainingLocation)||void 0===h?void 0:h.includes("Online"))?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h5",{children:"Add your Google or Zoom meeting link"}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsx)("div",{className:"iconwrapper",children:Object(w.jsx)("textarea",{type:"text",placeholder:"Add a Google or Zoom meeting link",value:_.virtualMeetingLink,onChange:te,name:"virtualMeetingLink"})})})]}):null})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:"Which city will you train in?"}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsx)("div",{className:"iconwrapper",children:Object(w.jsx)(k.NormalMultiSelect,{placeholder:"Select Your City",value:_.location,arrow:!0,name:"location",className:"trainer-profile-dropdown",options:C,handleChange:function(e){M(Object(r.a)(Object(r.a)({},_),{},{location:e.target.value}))}})})})]}),Object(w.jsxs)("div",{className:"item_3",children:[Object(w.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(w.jsx)(L,{checked:"a"===H,onChange:B,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(w.jsx)("label",{children:"Yes"}),Object(w.jsx)(L,{checked:"b"===H,onChange:B,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(w.jsx)("label",{children:"No"})]}),Object(w.jsxs)("div",{className:"item_4",children:[Object(w.jsx)("h6",{children:"Details of the facility/location"}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",onChange:te,value:_.trainingFacilityLocation,name:"trainingFacilityLocation"})})]}),Object(w.jsxs)("div",{className:"item_5",children:[Object(w.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(w.jsx)(L,{checked:"1"===W,onChange:Y,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(w.jsx)("label",{children:" Yes!"}),Object(w.jsx)(L,{checked:"0"===W,onChange:Y,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(w.jsx)("label",{children:"No"})]}),Object(w.jsxs)("div",{className:"item_6",children:[Object(w.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(w.jsxs)("div",{className:"inputs_platform",children:[Object(w.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",onChange:te,value:_.servicableLocation,name:"servicableLocation"}),Object(w.jsx)("img",{src:j.default,alt:"icon",className:"loction_img_select"})]})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:"Instagram"}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsxs)("div",{className:"iconwrapper",children:[Object(w.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:te,value:_.instaHandle,name:"instaHandle"}),Object(w.jsx)("img",{src:u.default,alt:"icon"})]})})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:"Website"}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsxs)("div",{className:"iconwrapper",children:[Object(w.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:te,value:_.websiteLink,name:"websiteLink"}),Object(w.jsx)("img",{src:b.default,alt:"icon"})]})})]})]})}),Object(w.jsx)("div",{className:"tp_button_save mb-5",children:Object(w.jsxs)("button",{onClick:function(){var e=_.instaHandle,t=_.motto,a=_.servicableLocation,n=_.trainingProcessDescription,i=_.websiteLink,c=_.trainingFacilityLocation,o=_.virtualMeetingLink,l={trainingProcess:n,myMotto:t,websiteLink:i,instagramProfile:e,certification:q,virtualMeetingLink:o,servicableLocation:a,trainingFacilityLocation:c,images:G.filter((function(e){return""!==e}))},s=f.TrainerApi.updateTrainerAvailabilityApi;s.body=l,Object(g.api)(Object(r.a)({},s)).then((function(){ae(),alert("Successfully added changes")})).catch((function(e){return console.log(e)}))},children:["Save changes ",Object(w.jsx)(s.default,{})]})})]})})]})})})})})}));t.default=S},336:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},337:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},365:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},431:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Image 1.8f33ee1e.svg"},505:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Location Icon.6eb543f1.svg"},516:function(e,t,a){},619:function(e,t,a){"use strict";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];e.apply(this,n),t.apply(this,n)}}),(function(){}))}a.d(t,"a",(function(){return n}))},733:function(e,t,a){"use strict";var n=a(5),i=a(603),c=a(2),r=(a(4),a(610)),o=a(654),l=a(607),s=Object(l.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(612);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},c.createElement(s,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),j=a(632),h=a(622),m=a(619);var v=c.createContext();var p=c.createElement(b,{checked:!0}),f=c.createElement(b,null),g=c.forwardRef((function(e,t){var a=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,j=e.size,g=void 0===j?"medium":j,O=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),x=c.useContext(v),y=a,N=Object(m.a)(b,x&&x.onChange),k=u;return x&&("undefined"===typeof y&&(y=x.value===e.value),"undefined"===typeof k&&(k=x.name)),c.createElement(o.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(f,{fontSize:"small"===g?"small":"default"}),checkedIcon:c.cloneElement(p,{fontSize:"small"===g?"small":"default"}),classes:{root:Object(r.a)(l.root,l["color".concat(Object(h.a)(d))]),checked:l.checked,disabled:l.disabled},name:k,checked:y,onChange:N,ref:t},O))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(g)},792:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(17),i=a(3),c=a(15),r=a(16),o=a(19),l=a(18),s=a(2),d=a(706),u=a(629),b=(a(337),a(336)),j=a(1),h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,c=e.options,r=void 0===c?[]:c,o=e.value,l=void 0===o?"":o,s=e.name,h=void 0===s?"":s,m=e.placeholder,v=void 0===m?"Select":m,p=e.disabled,f=void 0!==p&&p,g=e.arrow,O=void 0!==g&&g,x=e.isReadOnly,y=void 0!==x&&x,N=e.label,k=void 0===N?"":N,w=e.isMulti,C=void 0!==w&&w,L=e.isClearable,S=void 0!==L&&L,_=e.isSearchable,M=void 0!==_&&_,D=e.isBoldLabel,A=void 0!==D&&D,P=e.showArrow,T=void 0===P||P,F={placeholder:function(e){return Object(i.a)(Object(i.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(i.a)(Object(i.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(i.a)(Object(i.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(i.a)(Object(i.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(j.jsx)(j.Fragment,{children:y?Object(j.jsx)("p",{children:l}):Object(j.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(A?"mt-0":""),children:[""!==k?Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:A?"mb-1 text-black-22":"font-weight-normal mb-1",children:k})}):null,Object(j.jsx)(u.a,{className:a,classNamePrefix:"Select",isDisabled:f,isClearable:S,isSearchable:M,name:h,options:r,onChange:this.handleChange,isMulti:C,showArrow:T,placeholder:v,styles:F,value:r&&r.length>0&&r.find((function(e){return e.value===l}))?r.find((function(e){return e.value===l})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(j.jsx)(d.l.DropdownIndicator,Object(i.a)(Object(i.a)({},e),{},{children:Object(j.jsx)("img",{src:b.default,alt:"dropdown"})}))}}})]})})}}]),a}(s.Component)}}]);
//# sourceMappingURL=38.bcfca810.chunk.js.map