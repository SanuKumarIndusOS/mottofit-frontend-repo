(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[16,159,209,240,281,284],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(18),c=a(3),i=a(16),r=a(17),o=a(20),s=a(19),l=a(2),d=a(699),j=a(657),u=(a(357),a(353)),b=a(1),h=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,i=e.options,r=void 0===i?[]:i,o=e.value,s=void 0===o?"":o,l=e.name,h=void 0===l?"":l,O=e.placeholder,p=void 0===O?"Select":O,f=e.disabled,x=void 0!==f&&f,m=e.arrow,v=void 0!==m&&m,g=e.isReadOnly,y=void 0!==g&&g,k=e.label,C=void 0===k?"":k,w=e.isMulti,N=void 0!==w&&w,E=e.isClearable,S=void 0!==E&&E,I=e.isSearchable,D=void 0!==I&&I,_=e.isBoldLabel,A=void 0!==_&&_,M=e.showArrow,z=void 0===M||M,T={placeholder:function(e){return Object(c.a)(Object(c.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%"})},indicatorSeparator:function(e){return Object(c.a)(Object(c.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(c.a)(Object(c.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%"})},singleValue:function(e){return Object(c.a)(Object(c.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){return Object(c.a)(Object(c.a)({},e),{},Object(n.a)({padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},"height","100%"))},option:function(e,t){var a=t.isFocused;return Object(c.a)(Object(c.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left"})},control:function(e){return Object(c.a)(Object(c.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45})}};return Object(b.jsx)(b.Fragment,{children:y?Object(b.jsx)("p",{children:s}):Object(b.jsxs)("div",{className:"".concat(v?"select-section w-100":"Select"," ").concat(A?"mt-0":""),children:[""!==C?Object(b.jsx)("div",{children:Object(b.jsx)("label",{className:A?"mb-1 text-black-22":"font-weight-normal mb-1",children:C})}):null,Object(b.jsx)(j.a,{className:a,classNamePrefix:"Select",isDisabled:x,isClearable:S,isSearchable:D,name:h,options:r,onChange:this.handleChange,isMulti:N,showArrow:z,placeholder:p,styles:T,value:r&&r.length>0&&r.find((function(e){return e.value===s}))?r.find((function(e){return e.value===s})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(b.jsx)(d.l.DropdownIndicator,Object(c.a)(Object(c.a)({},e),{},{children:Object(b.jsx)("img",{src:u.default,alt:"dropdown"})}))}}})]})})}}]),a}(l.Component)},147:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(3),i=a(601),r=a(11),o=a(2),s=a.n(o),l=(a(520),a(6)),d=a(333),j=a(42),u=a(69),b=a(911),h=a(43),O=a(34),p=a(27),f=a(50),x=a(14),m=(a(101),a(519),a(1)),v=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],g=Object(O.b)((function(e){return{details:e.trainerReducer.details}}),(function(e){return Object(p.b)({updateTrainerDetailsApicall:f.updateTrainerDetailsApicall,getTrainerDetails:f.getTrainerDetails,trainerDetail:f.trainerDetail},e)}))((function(e){var t,a=e.updateTrainerDetailsApicall,O=(e.details,e.trainerDetail),p=s.a.useState(!1),f=Object(r.a)(p,2),g=f[0],y=f[1],k=s.a.useState(!1),C=Object(r.a)(k,2),w=C[0],N=C[1],E=s.a.useState(!1),S=Object(r.a)(E,2),I=S[0],D=S[1],_=s.a.useState(!1),A=Object(r.a)(_,2),M=A[0],z=A[1],T=Object(o.useState)({workMode:"",workLocation:""}),B=Object(r.a)(T,2),F=B[0],P=B[1],H=Object(o.useState)({areaOfExpertise:[],clientAssessment:"",trainingProcess:"",interestInMotto:"",awaitingCertification:""}),Y=Object(r.a)(H,2),L=Y[0],R=Y[1],V=Object(o.useState)([{orgnization:"",job:"",years:""}]),W=Object(r.a)(V,2),$=W[0],J=W[1],G=Object(o.useState)([{certificate:"",year:"",upload:""}]),q=Object(r.a)(G,2),K=q[0],Q=q[1],U=function(e,t){var a=Object(i.a)($);a[e][t.target.name]=t.target.value,J(a)},X=function(e,t){var a=Object(i.a)(K);a[e][t.target.name]=t.target.value,Q(a)},Z=function(){Q([].concat(Object(i.a)(K),[{certificate:"",year:"",upload:""}]))};return Object(o.useEffect)((function(){O().then((function(e){e&&(R(Object(c.a)(Object(c.a)({},L),{},{areaOfExpertise:Object(i.a)(new Set(e.areaOfExpertise)),clientAssessment:e.clientAssessment,trainingProcess:e.trainingProcess,interestInMotto:e.interestInMotto,awaitingCertification:e.awaitingCertification?e.awaitingCertification:""})),e.previousExperience&&J(e.previousExperience),e.certification&&Q(e.certification),e.currentExperience&&P(e.currentExperience),e.areaOfExpertise&&(e.areaOfExpertise.indexOf("Boxing")>=0&&y(!0),e.areaOfExpertise.indexOf("Pilates")>=0&&z(!0),e.areaOfExpertise.indexOf("Yoga")>=0&&D(!0),e.areaOfExpertise.indexOf("Strength & HIIT")>=0&&N(!0)))}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"outter_container_bg",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"links_wrapper",children:[Object(m.jsxs)("div",{className:"outter_links",children:[Object(m.jsx)("img",{src:d.default,alt:"icon"}),Object(m.jsxs)("div",{className:"inner_links",children:[Object(m.jsx)(l.a,{to:"/trainer/about",children:" Back to About You"}),Object(m.jsx)("div",{})]})]}),Object(m.jsxs)("div",{className:"outter_links",children:[Object(m.jsxs)("div",{className:"inner_links",children:[Object(m.jsx)(l.a,{to:"/trainer/availability",children:"Go to Availability"}),Object(m.jsx)("div",{})]}),Object(m.jsx)("img",{src:j.default,alt:"icon"})]})]}),Object(m.jsx)("div",{className:"main_wrapper",children:Object(m.jsxs)("div",{className:"wrapper_inneritems",children:[Object(m.jsx)("h1",{children:"Detail out your training background"}),Object(m.jsx)("div",{className:"contents_wrapper",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"item1",children:[Object(m.jsx)("h6",{children:"Tell us what you train! Select all the verticals that apply"}),Object(m.jsxs)("div",{className:"inputs_experience",children:[Object(m.jsx)(b.a,{checked:w,onChange:function(e){if(N(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},L),{},{areaOfExpertise:[].concat(Object(i.a)(L.areaOfExpertise),["Strength & HIIT"])}));else{var t=L.areaOfExpertise.indexOf("Strength & HIIT");t>-1&&L.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(m.jsx)("div",{className:"checkbox_label",children:"Strength & HIIT"}),Object(m.jsx)(b.a,{checked:g,onChange:function(e){if(y(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},L),{},{areaOfExpertise:[].concat(Object(i.a)(L.areaOfExpertise),["Boxing"])}));else{var t=L.areaOfExpertise.indexOf("Boxing");t>-1&&L.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(m.jsx)("div",{className:"checkbox_label",children:"Boxing"}),Object(m.jsx)(b.a,{checked:I,onChange:function(e){if(D(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},L),{},{areaOfExpertise:[].concat(Object(i.a)(L.areaOfExpertise),["Yoga"])}));else{var t=L.areaOfExpertise.indexOf("Yoga");t>-1&&L.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(m.jsx)("div",{className:"checkbox_label",children:"Yoga"}),Object(m.jsx)(b.a,{checked:M,onChange:function(e){if(z(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},L),{},{areaOfExpertise:[].concat(Object(i.a)(L.areaOfExpertise),["Pilates"])}));else{var t=L.areaOfExpertise.indexOf("Pilates");t>-1&&L.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(m.jsx)("div",{className:"checkbox_label",children:"Pilates"})]})]}),Object(m.jsxs)("div",{className:"item2",children:[Object(m.jsx)("h6",{children:"Training experience"}),$.map((function(e,t){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("div",{className:"inputs_experience",children:[Object(m.jsx)("input",{type:"text",placeholder:"Name of the organization / GYM",value:e.orgnization,name:"orgnization",onChange:function(e){return U(t,e)}}),Object(m.jsx)("input",{type:"text",placeholder:"Job Title",value:e.job,name:"job",onChange:function(e){return U(t,e)}}),Object(m.jsx)("input",{type:"number",placeholder:"Years",name:"years",value:e.years,onChange:function(e){return U(t,e)}})]}),t+1===$.length?Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)("h5",{onClick:function(){J([].concat(Object(i.a)($),[{orgnization:"",job:"",years:""}]))},children:"+ Add Work Experience"}),t+1===$.length&&1!==$.length?Object(m.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(i.a)($);t.splice(e,1),J(t)}(t)},children:"Remove"}):null]}):null]},t)}))]}),Object(m.jsxs)("div",{className:"item3",children:[Object(m.jsx)("h6",{children:"Certifications"}),K.map((function(e,t){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("div",{className:"inputs_background",children:[Object(m.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return X(t,e)}}),Object(m.jsx)("input",Object(n.a)({type:"text",placeholder:"Year you were Certified",value:e.year,name:"year",onChange:function(e){return X(t,e)}},"type","number"))]},t),t+1===K.length?Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)("h5",{onClick:Z,children:"+ Add Certificate's"}),t+1===K.length&&1!==K.length?Object(m.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(i.a)(K);t.splice(e,1),Q(t)}(t)},children:"Remove"}):null]}):null]},t)}))]}),Object(m.jsxs)("div",{className:"item4",children:[Object(m.jsx)("h6",{children:"Are you currently enrolled in any continued education programs?"}),Object(m.jsx)("div",{className:"inputs_experience",children:Object(m.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us about any awaiting certifications ",value:L.awaitingCertification,onChange:function(e){return R(Object(c.a)(Object(c.a)({},L),{},{awaitingCertification:e.target.value}))}})})]}),Object(m.jsxs)("div",{className:"item5",children:[Object(m.jsx)("h6",{children:"Do you have a facility to train new & outside clients?"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-6",children:Object(m.jsx)("select",{value:F.workMode,name:"workMode",onChange:function(e){P(Object(c.a)(Object(c.a)({},F),{},{workMode:e.target.value}))},children:v.map((function(e,t){return Object(m.jsx)("option",{value:e.value,children:e.label},t)}))})}),Object(m.jsx)("div",{className:"col-6",children:"yes"===F.workMode?Object(m.jsx)("div",{className:"inputs_experience_drop",children:Object(m.jsx)("input",{type:"text",placeholder:"Details of facility",value:F.workLocation,name:"answer",onChange:function(e){P(Object(c.a)(Object(c.a)({},F),{},{workLocation:e.target.value}))}})}):null})]})})]}),Object(m.jsxs)("div",{className:"item6",children:[Object(m.jsx)("h6",{children:"Why are you interested in joining Motto?"}),Object(m.jsx)("div",{className:"inputs_experience",children:Object(m.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:L.interestInMotto,onChange:function(e){return R(Object(c.a)(Object(c.a)({},L),{},{interestInMotto:e.target.value}))}})})]}),Object(m.jsxs)("div",{className:"item6",children:[Object(m.jsx)("h6",{children:"Describe how you assess a client before their first session?"}),Object(m.jsx)("div",{className:"inputs_experience",children:Object(m.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:L.clientAssessment,onChange:function(e){return R(Object(c.a)(Object(c.a)({},L),{},{clientAssessment:e.target.value}))}})})]}),Object(m.jsxs)("div",{className:"item6",children:[Object(m.jsx)("h6",{children:"Describe your training process & philosophy"}),Object(m.jsx)("div",{className:"inputs_experience",children:Object(m.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:L.trainingProcess,onChange:function(e){return R(Object(c.a)(Object(c.a)({},L),{},{trainingProcess:e.target.value}))}})})]}),Object(m.jsx)("div",{className:"submit_button",children:Object(m.jsxs)("button",(t={type:"submit",style:{textDecoration:"none",color:"#FFFFFF"}},Object(n.a)(t,"type","submit"),Object(n.a)(t,"onClick",(function(){var e={areaOfExpertise:L.areaOfExpertise,previousExperience:$,certification:K,clientAssessment:L.clientAssessment,trainingProcess:L.trainingProcess,interestInMotto:L.interestInMotto,awaitingCertification:L.awaitingCertification};a(e).then((function(){x.history.push("/trainer/availability")}))})),Object(n.a)(t,"children",["Continue",Object(m.jsx)(u.default,{})]),t))})]})})]})}),Object(m.jsx)("img",{src:h.default,alt:"icon",className:"bg_watermark"})]})})})}));t.default=g},333:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},357:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},601:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(99);var c=a(70);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},911:function(e,t,a){"use strict";var n=a(5),c=a(602),i=a(2),r=(a(4),a(609)),o=a(643),s=a(607),l=Object(s.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(630),u=Object(s.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=a(625),h=a(611),O=i.createElement(d,null),p=i.createElement(l,null),f=i.createElement(u,null),x=i.forwardRef((function(e,t){var a=e.checkedIcon,s=void 0===a?O:a,l=e.classes,d=e.color,j=void 0===d?"secondary":d,u=e.icon,h=void 0===u?p:u,x=e.indeterminate,m=void 0!==x&&x,v=e.indeterminateIcon,g=void 0===v?f:v,y=e.inputProps,k=e.size,C=void 0===k?"medium":k,w=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=m?g:h,E=m?g:s;return i.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(b.a)(j))],m&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:j,inputProps:Object(n.a)({"data-indeterminate":m},y),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===C?C:N.props.fontSize}),checkedIcon:i.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===C?C:E.props.fontSize}),ref:t},w))}));t.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(x)}}]);
//# sourceMappingURL=16.f517a898.chunk.js.map