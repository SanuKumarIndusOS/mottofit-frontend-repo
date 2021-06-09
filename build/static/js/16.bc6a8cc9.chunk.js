(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[16,78,82,157,207,239,280,283],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"YearDropDown",(function(){return o}));var n=a(3),c=a(196),i=(a(2),a(99)),r=a(72),s=a(1),o=function(e){var t=e.label,a=void 0===t?"":t,o=e.name,l=void 0===o?"":o,d=Object(c.a)(e,["label","name"]),j=Object(r.getFormattedYears)().map((function(e){return{label:e.toString(),value:e.toString(),name:l}}));return Object(s.jsx)(i.NormalMultiSelect,Object(n.a)({placeholder:a,arrow:!0,name:l,options:j},d))}},151:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a(3),i=a(194),r=a(12),s=a(2),o=a.n(s),l=(a(520),a(6)),d=a(334),j=a(42),b=a(70),u=a(912),h=a(43),O=a(35),p=a(27),x=a(49),f=a(20),m=(a(519),a(106)),v=a(29),g=a(1),y=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],k=Object(O.b)((function(e){return{details:e.trainerReducer.details}}),(function(e){return Object(p.b)({updateTrainerDetailsApicall:x.updateTrainerDetailsApicall,getTrainerDetails:x.getTrainerDetails,trainerDetail:x.trainerDetail},e)}))((function(e){var t,a=e.updateTrainerDetailsApicall,O=(e.details,e.trainerDetail),p=o.a.useState(!1),x=Object(r.a)(p,2),k=x[0],w=x[1],C=o.a.useState(!1),N=Object(r.a)(C,2),E=N[0],S=N[1],I=o.a.useState(!1),D=Object(r.a)(I,2),M=D[0],_=D[1],F=o.a.useState(!1),z=Object(r.a)(F,2),A=z[0],T=z[1],B=Object(s.useState)({workMode:"",workLocation:""}),P=Object(r.a)(B,2),H=P[0],Y=P[1],L=Object(s.useState)({areaOfExpertise:[],clientAssessment:"",trainingProcess:"",interestInMotto:"",awaitingCertification:""}),V=Object(r.a)(L,2),W=V[0],R=V[1],$=Object(s.useState)([{orgnization:"",job:"",years:""}]),J=Object(r.a)($,2),G=J[0],q=J[1],K=Object(s.useState)([{certificate:"",year:"",upload:""}]),Q=Object(r.a)(K,2),U=Q[0],X=Q[1],Z=function(e,t){var a=Object(i.a)(G);a[e][t.target.name]=t.target.value,q(a)},ee=function(e,t){var a=Object(i.a)(U);a[e][t.target.name]=t.target.value,X(a)},te=function(){X([].concat(Object(i.a)(U),[{certificate:"",year:"",upload:""}]))};return Object(s.useEffect)((function(){O().then((function(e){e&&(R(Object(c.a)(Object(c.a)({},W),{},{areaOfExpertise:Object(i.a)(new Set(e.areaOfExpertise)),clientAssessment:e.clientAssessment,trainingProcess:e.trainingProcess,interestInMotto:e.interestInMotto,awaitingCertification:e.awaitingCertification?e.awaitingCertification:""})),e.previousExperience&&q(e.previousExperience),e.certification&&X(e.certification),e.currentExperience&&Y(e.currentExperience),e.areaOfExpertise&&(e.areaOfExpertise.indexOf("Boxing")>=0&&w(!0),e.areaOfExpertise.indexOf("Pilates")>=0&&T(!0),e.areaOfExpertise.indexOf("Yoga")>=0&&_(!0),e.areaOfExpertise.indexOf("Strength & HIIT")>=0&&S(!0)))}))}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"outter_container_bg",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"links_wrapper",children:[Object(g.jsxs)("div",{className:"outter_links",children:[Object(g.jsx)("img",{src:d.default,alt:"icon"}),Object(g.jsxs)("div",{className:"inner_links",children:[Object(g.jsx)(l.a,{to:"/trainer/about",children:" Back to About You"}),Object(g.jsx)("div",{})]})]}),Object(g.jsxs)("div",{className:"outter_links",children:[Object(g.jsxs)("div",{className:"inner_links",children:[Object(g.jsx)(l.a,{to:"/trainer/availability",children:"Go to Availability"}),Object(g.jsx)("div",{})]}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]})]}),Object(g.jsx)("div",{className:"main_wrapper",children:Object(g.jsxs)("div",{className:"wrapper_inneritems",children:[Object(g.jsx)("h1",{children:"Detail out your training background"}),Object(g.jsx)("div",{className:"contents_wrapper",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"item1",children:[Object(g.jsx)("h6",{children:"Tell us what you train! Select all the verticals that apply"}),Object(g.jsxs)("div",{className:"inputs_experience",children:[Object(g.jsx)(u.a,{checked:E,onChange:function(e){if(S(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},W),{},{areaOfExpertise:[].concat(Object(i.a)(W.areaOfExpertise),["Strength & HIIT"])}));else{var t=W.areaOfExpertise.indexOf("Strength & HIIT");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Strength & HIIT"}),Object(g.jsx)(u.a,{checked:k,onChange:function(e){if(w(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},W),{},{areaOfExpertise:[].concat(Object(i.a)(W.areaOfExpertise),["Boxing"])}));else{var t=W.areaOfExpertise.indexOf("Boxing");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Boxing"}),Object(g.jsx)(u.a,{checked:M,onChange:function(e){if(_(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},W),{},{areaOfExpertise:[].concat(Object(i.a)(W.areaOfExpertise),["Yoga"])}));else{var t=W.areaOfExpertise.indexOf("Yoga");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Yoga"}),Object(g.jsx)(u.a,{checked:A,onChange:function(e){if(T(e.target.checked),e.target.checked)R(Object(c.a)(Object(c.a)({},W),{},{areaOfExpertise:[].concat(Object(i.a)(W.areaOfExpertise),["Pilates"])}));else{var t=W.areaOfExpertise.indexOf("Pilates");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Pilates"})]})]}),Object(g.jsxs)("div",{className:"item2",children:[Object(g.jsx)("h6",{children:"Training experience"}),G.map((function(e,t){return Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsxs)("div",{className:"inputs_experience row no-gutters",children:[Object(g.jsx)("div",{className:"col-4 pr-1",children:Object(g.jsx)("input",{type:"text",placeholder:"Name of the organization / GYM",value:e.orgnization,className:"w-100",name:"orgnization",onChange:function(e){return Z(t,e)}})}),Object(g.jsx)("div",{className:"col-3 pr-1",children:Object(g.jsx)("input",{type:"text",placeholder:"Job Title",value:e.job,className:"w-100",name:"job",onChange:function(e){return Z(t,e)}})}),Object(g.jsx)("div",{className:"col-3",children:Object(g.jsx)("input",{type:"number",placeholder:"Years",className:"w-100",name:"years",value:e.years,onChange:function(e){return Z(t,e)}})}),Object(g.jsx)("div",{className:"col-1",children:0!==t?Object(g.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(i.a)(G);t.splice(e,1),q(t)}(t)},children:Object(g.jsx)(v.CloseIcon,{})}):null}),Object(g.jsx)("span",{})]}),t+1===G.length?Object(g.jsx)("div",{className:"d-flex",children:Object(g.jsx)("h5",{onClick:function(){q([].concat(Object(i.a)(G),[{orgnization:"",job:"",years:""}]))},children:"+ Add Work Experience"})}):null]},t)}))]}),Object(g.jsxs)("div",{className:"item3",children:[Object(g.jsx)("h6",{children:"Certifications"}),U.map((function(e,t){return Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsxs)("div",{className:"inputs_background row no-gutters",children:[Object(g.jsx)("div",{className:"col-5 px-2",children:Object(g.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return ee(t,e)}})}),Object(g.jsx)("div",{className:"col-5 px-2",children:Object(g.jsx)(m.YearDropDown,{label:"Year you were Certified",value:e.year,name:"year",handleChange:function(e){return ee(t,e)}})}),Object(g.jsx)("div",{className:"col-2",children:0!==t?Object(g.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(i.a)(U);t.splice(e,1),X(t)}(t)},children:Object(g.jsx)(v.CloseIcon,{})}):null})]},t),t+1===U.length?Object(g.jsx)("div",{className:"d-flex",children:Object(g.jsx)("h5",{onClick:te,children:"+ Add Certificate's"})}):null]},t)}))]}),Object(g.jsxs)("div",{className:"item4",children:[Object(g.jsx)("h6",{children:"Are you currently enrolled in any continued education programs?"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us about any awaiting certifications ",value:W.awaitingCertification,onChange:function(e){return R(Object(c.a)(Object(c.a)({},W),{},{awaitingCertification:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item5",children:[Object(g.jsx)("h6",{children:"Do you have a facility to train new & outside clients?"}),Object(g.jsxs)("div",{className:"row d-flex",children:[Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("select",{value:H.workMode,name:"workMode",onChange:function(e){Y(Object(c.a)(Object(c.a)({},H),{},{workMode:e.target.value}))},children:y.map((function(e,t){return Object(g.jsx)("option",{value:e.value,children:e.label},t)}))})}),"yes"===H.workMode?Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("div",{className:"inputs_experience_drop",children:Object(g.jsx)("input",{type:"text",placeholder:"Details of facility",value:H.workLocation,name:"answer",onChange:function(e){Y(Object(c.a)(Object(c.a)({},H),{},{workLocation:e.target.value}))}})})}):null]})]}),Object(g.jsxs)("div",{className:"item6",children:[Object(g.jsx)("h6",{children:"Why are you interested in joining Motto?"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:W.interestInMotto,onChange:function(e){return R(Object(c.a)(Object(c.a)({},W),{},{interestInMotto:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item6",children:[Object(g.jsx)("h6",{children:"Describe how you assess a client before their first session?"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:W.clientAssessment,onChange:function(e){return R(Object(c.a)(Object(c.a)({},W),{},{clientAssessment:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item6",children:[Object(g.jsx)("h6",{children:"Describe your training process & philosophy"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:W.trainingProcess,onChange:function(e){return R(Object(c.a)(Object(c.a)({},W),{},{trainingProcess:e.target.value}))}})})]}),Object(g.jsx)("div",{className:"submit_button",children:Object(g.jsxs)("button",(t={type:"submit",style:{textDecoration:"none",color:"#FFFFFF"}},Object(n.a)(t,"type","submit"),Object(n.a)(t,"onClick",(function(){var e={areaOfExpertise:W.areaOfExpertise,previousExperience:G,certification:U,clientAssessment:W.clientAssessment,trainingProcess:W.trainingProcess,interestInMotto:W.interestInMotto,awaitingCertification:W.awaitingCertification};a(e).then((function(){f.history.push("/trainer/availability")}))})),Object(n.a)(t,"children",["Continue",Object(g.jsx)(b.default,{})]),t))})]})})]})}),Object(g.jsx)("img",{src:h.default,alt:"icon",className:"bg_watermark"})]})})})}));t.default=k},334:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},336:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},337:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},912:function(e,t,a){"use strict";var n=a(5),c=a(603),i=a(2),r=(a(4),a(610)),s=a(654),o=a(607),l=Object(o.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(o.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(632),b=Object(o.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=a(622),h=a(612),O=i.createElement(d,null),p=i.createElement(l,null),x=i.createElement(b,null),f=i.forwardRef((function(e,t){var a=e.checkedIcon,o=void 0===a?O:a,l=e.classes,d=e.color,j=void 0===d?"secondary":d,b=e.icon,h=void 0===b?p:b,f=e.indeterminate,m=void 0!==f&&f,v=e.indeterminateIcon,g=void 0===v?x:v,y=e.inputProps,k=e.size,w=void 0===k?"medium":k,C=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=m?g:h,E=m?g:o;return i.createElement(s.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(u.a)(j))],m&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:j,inputProps:Object(n.a)({"data-indeterminate":m},y),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===w?w:N.props.fontSize}),checkedIcon:i.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===w?w:E.props.fontSize}),ref:t},C))}));t.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},99:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(17),c=a(3),i=a(15),r=a(16),s=a(19),o=a(18),l=a(2),d=a(706),j=a(629),b=(a(337),a(336)),u=a(1),h=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,i=e.options,r=void 0===i?[]:i,s=e.value,o=void 0===s?"":s,l=e.name,h=void 0===l?"":l,O=e.placeholder,p=void 0===O?"Select":O,x=e.disabled,f=void 0!==x&&x,m=e.arrow,v=void 0!==m&&m,g=e.isReadOnly,y=void 0!==g&&g,k=e.label,w=void 0===k?"":k,C=e.isMulti,N=void 0!==C&&C,E=e.isClearable,S=void 0!==E&&E,I=e.isSearchable,D=void 0!==I&&I,M=e.isBoldLabel,_=void 0!==M&&M,F=e.showArrow,z=void 0===F||F,A={placeholder:function(e){return Object(c.a)(Object(c.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(c.a)(Object(c.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(c.a)(Object(c.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(c.a)(Object(c.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(c.a)(Object(c.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(c.a)(Object(c.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(c.a)(Object(c.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(u.jsx)(u.Fragment,{children:y?Object(u.jsx)("p",{children:o}):Object(u.jsxs)("div",{className:"".concat(v?"select-section w-100":"Select"," ").concat(_?"mt-0":""),children:[""!==w?Object(u.jsx)("div",{children:Object(u.jsx)("label",{className:_?"mb-1 text-black-22":"font-weight-normal mb-1",children:w})}):null,Object(u.jsx)(j.a,{className:a,classNamePrefix:"Select",isDisabled:f,isClearable:S,isSearchable:D,name:h,options:r,onChange:this.handleChange,isMulti:N,showArrow:z,placeholder:p,styles:A,value:r&&r.length>0&&r.find((function(e){return e.value===o}))?r.find((function(e){return e.value===o})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(u.jsx)(d.l.DropdownIndicator,Object(c.a)(Object(c.a)({},e),{},{children:Object(u.jsx)("img",{src:b.default,alt:"dropdown"})}))}}})]})})}}]),a}(l.Component)}}]);
//# sourceMappingURL=16.bc6a8cc9.chunk.js.map