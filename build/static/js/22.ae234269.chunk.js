(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[22,168,229,263,305,308],{1053:function(e,t,a){"use strict";var n=a(6),i=a(686),c=a(2),r=(a(3),a(690)),o=a(730),l=a(685),s=Object(l.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(714),b=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=a(693),h=a(692),O=c.createElement(d,null),p=c.createElement(s,null),x=c.createElement(b,null),f=c.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?O:a,s=e.classes,d=e.color,j=void 0===d?"secondary":d,b=e.icon,h=void 0===b?p:b,f=e.indeterminate,m=void 0!==f&&f,v=e.indeterminateIcon,g=void 0===v?x:v,y=e.inputProps,k=e.size,w=void 0===k?"medium":k,N=Object(i.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),C=m?g:h,E=m?g:l;return c.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(s.root,s["color".concat(Object(u.a)(j))],m&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:j,inputProps:Object(n.a)({"data-indeterminate":m},y),icon:c.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===w?w:C.props.fontSize}),checkedIcon:c.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===w?w:E.props.fontSize}),ref:t},N))}));t.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},115:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return h}));var n=a(25),i=a(4),c=a(22),r=a(23),o=a(27),l=a(26),s=a(2),d=a(818),j=a(718),b=(a(399),a(398)),u=a(1),h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,c=e.options,r=void 0===c?[]:c,o=e.value,l=void 0===o?"":o,s=e.name,h=void 0===s?"":s,O=e.placeholder,p=void 0===O?"Select":O,x=e.disabled,f=void 0!==x&&x,m=e.arrow,v=void 0!==m&&m,g=e.isReadOnly,y=void 0!==g&&g,k=e.label,w=void 0===k?"":k,N=e.isMulti,C=void 0!==N&&N,E=e.isClearable,S=void 0!==E&&E,I=e.isSearchable,M=void 0!==I&&I,D=e.isBoldLabel,F=void 0!==D&&D,_=e.showArrow,z=void 0===_||_,A={placeholder:function(e){return Object(i.a)(Object(i.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(i.a)(Object(i.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(i.a)(Object(i.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(i.a)(Object(i.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(u.jsx)(u.Fragment,{children:y?Object(u.jsx)("p",{children:l}):Object(u.jsxs)("div",{className:"".concat(v?"select-section w-100":"Select"," ").concat(F?"mt-0":""),children:[""!==w?Object(u.jsx)("div",{children:Object(u.jsx)("label",{className:F?"mb-1 text-black-22":"font-weight-normal mb-1",children:w})}):null,Object(u.jsx)(j.a,{className:a,classNamePrefix:"Select",isDisabled:f,isClearable:S,isSearchable:M,name:h,options:r,onChange:this.handleChange,isMulti:C,showArrow:z,placeholder:p,styles:A,value:r&&r.length>0&&r.find((function(e){return e.value===l}))?r.find((function(e){return e.value===l})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(u.jsx)(d.l.DropdownIndicator,Object(i.a)(Object(i.a)({},e),{},{children:Object(u.jsx)("img",{src:b.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),a}(s.Component)},118:function(e,t,a){"use strict";a.r(t),a.d(t,"YearDropDown",(function(){return l}));var n=a(4),i=a(46),c=(a(2),a(115)),r=a(85),o=a(1),l=function(e){var t=e.label,a=void 0===t?"":t,l=e.name,s=void 0===l?"":l,d=Object(i.a)(e,["label","name"]),j=Object(r.getFormattedYears)().map((function(e){return{label:e.toString(),value:e.toString(),name:s}}));return Object(o.jsx)(c.NormalMultiSelect,Object(n.a)({placeholder:a,arrow:!0,name:s,options:j},d))}},167:function(e,t,a){"use strict";a.r(t);var n=a(25),i=a(4),c=a(84),r=a(14),o=a(2),l=a.n(o),s=(a(584),a(8)),d=a(396),j=a(54),b=a(83),u=a(1053),h=a(55),O=a(33),p=a(21),x=a(62),f=a(13),m=(a(583),a(118)),v=a(37),g=a(1),y=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],k=Object(O.b)((function(e){return{details:e.trainerReducer.details}}),(function(e){return Object(p.b)({updateTrainerDetailsApicall:x.updateTrainerDetailsApicall,getTrainerDetails:x.getTrainerDetails,trainerDetail:x.trainerDetail},e)}))((function(e){var t,a=e.updateTrainerDetailsApicall,O=(e.details,e.trainerDetail),p=l.a.useState(!1),x=Object(r.a)(p,2),k=x[0],w=x[1],N=l.a.useState(!1),C=Object(r.a)(N,2),E=C[0],S=C[1],I=l.a.useState(!1),M=Object(r.a)(I,2),D=M[0],F=M[1],_=l.a.useState(!1),z=Object(r.a)(_,2),A=z[0],T=z[1],B=Object(o.useState)({workMode:"yes",workLocation:""}),P=Object(r.a)(B,2),H=P[0],Y=P[1],L=Object(o.useState)({areaOfExpertise:[],clientAssessment:"",trainingProcess:"",interestInMotto:"",awaitingCertification:""}),V=Object(r.a)(L,2),W=V[0],R=V[1],$=Object(o.useState)([{orgnization:"",job:"",years:""}]),J=Object(r.a)($,2),G=J[0],q=J[1],K=Object(o.useState)([{certificate:"",year:"",upload:""}]),Q=Object(r.a)(K,2),U=Q[0],X=Q[1],Z=function(e,t){var a=Object(c.a)(G);a[e][t.target.name]=t.target.value,q(a)},ee=function(e,t){var a=Object(c.a)(U);a[e][t.target.name]=t.target.value,X(a)},te=function(){X([].concat(Object(c.a)(U),[{certificate:"",year:"",upload:""}]))};return Object(o.useEffect)((function(){O().then((function(e){if(e){if(R(Object(i.a)(Object(i.a)({},W),{},{areaOfExpertise:Object(c.a)(new Set(e.areaOfExpertise)),clientAssessment:e.clientAssessment,trainingProcess:e.trainingProcess,interestInMotto:e.interestInMotto,awaitingCertification:e.awaitingCertification?e.awaitingCertification:""})),e.previousExperience&&q(e.previousExperience),e.certification&&X(e.certification),null!==e.trainingFacility&&void 0!==e.trainingFacility){var t={workLocation:e.trainingFacilityLocation?e.trainingFacilityLocation:"",workMode:e.trainingFacility?"yes":"no"};Y(t)}e.areaOfExpertise&&(e.areaOfExpertise.indexOf("Boxing")>=0&&w(!0),e.areaOfExpertise.indexOf("Pilates")>=0&&T(!0),e.areaOfExpertise.indexOf("Yoga")>=0&&F(!0),e.areaOfExpertise.indexOf("Strength & HIIT")>=0&&S(!0))}}))}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"outter_container_bg",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"links_wrapper",children:[Object(g.jsxs)("div",{className:"outter_links",children:[Object(g.jsx)("img",{src:d.default,alt:"icon"}),Object(g.jsxs)("div",{className:"inner_links",children:[Object(g.jsx)(s.a,{to:"/trainer/about",children:" Back to About You"}),Object(g.jsx)("div",{})]})]}),Object(g.jsxs)("div",{className:"outter_links",children:[Object(g.jsxs)("div",{className:"inner_links",children:[Object(g.jsx)(s.a,{to:"/trainer/availability",children:"Go to Availability"}),Object(g.jsx)("div",{})]}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]})]}),Object(g.jsx)("div",{className:"main_wrapper",children:Object(g.jsxs)("div",{className:"wrapper_inneritems",children:[Object(g.jsx)("h1",{children:"Detail out your training background"}),Object(g.jsx)("div",{className:"contents_wrapper",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"item1",children:[Object(g.jsx)("h6",{children:"Tell us what you train! Select all the verticals that apply"}),Object(g.jsxs)("div",{className:"inputs_experience",children:[Object(g.jsx)(u.a,{checked:E,onChange:function(e){if(S(e.target.checked),e.target.checked)R(Object(i.a)(Object(i.a)({},W),{},{areaOfExpertise:[].concat(Object(c.a)(W.areaOfExpertise),["Strength & HIIT"])}));else{var t=W.areaOfExpertise.indexOf("Strength & HIIT");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Strength & HIIT"}),Object(g.jsx)(u.a,{checked:k,onChange:function(e){if(w(e.target.checked),e.target.checked)R(Object(i.a)(Object(i.a)({},W),{},{areaOfExpertise:[].concat(Object(c.a)(W.areaOfExpertise),["Boxing"])}));else{var t=W.areaOfExpertise.indexOf("Boxing");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Boxing"}),Object(g.jsx)(u.a,{checked:D,onChange:function(e){if(F(e.target.checked),e.target.checked)R(Object(i.a)(Object(i.a)({},W),{},{areaOfExpertise:[].concat(Object(c.a)(W.areaOfExpertise),["Yoga"])}));else{var t=W.areaOfExpertise.indexOf("Yoga");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Yoga"}),Object(g.jsx)(u.a,{checked:A,onChange:function(e){if(T(e.target.checked),e.target.checked)R(Object(i.a)(Object(i.a)({},W),{},{areaOfExpertise:[].concat(Object(c.a)(W.areaOfExpertise),["Pilates"])}));else{var t=W.areaOfExpertise.indexOf("Pilates");t>-1&&W.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(g.jsx)("div",{className:"checkbox_label",children:"Pilates"})]})]}),Object(g.jsxs)("div",{className:"item2",children:[Object(g.jsx)("h6",{children:"Training experience"}),G.map((function(e,t){return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsxs)("div",{className:"inputs_experience row no-gutters",children:[Object(g.jsx)("div",{className:"col-4 pr-1",children:Object(g.jsx)("input",{type:"text",placeholder:"Name of the organization / GYM",value:e.orgnization,className:"w-100",name:"orgnization",onChange:function(e){return Z(t,e)}})}),Object(g.jsx)("div",{className:"col-3 pr-1",children:Object(g.jsx)("input",{type:"text",placeholder:"Job Title",value:e.job,className:"w-100",name:"job",onChange:function(e){return Z(t,e)}})}),Object(g.jsx)("div",{className:"col-3",children:Object(g.jsx)("input",{type:"number",placeholder:"Years",className:"w-100",name:"years",value:e.years,onChange:function(e){return Z(t,e)}})}),Object(g.jsx)("div",{className:"col-1",children:0!==t?Object(g.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(c.a)(G);t.splice(e,1),q(t)}(t)},children:Object(g.jsx)(v.CloseIcon,{})}):null}),Object(g.jsx)("span",{})]}),t+1===G.length?Object(g.jsx)("div",{className:"d-flex",children:Object(g.jsx)("h5",{onClick:function(){q([].concat(Object(c.a)(G),[{orgnization:"",job:"",years:""}]))},children:"+ Add Work Experience"})}):null]},t)}))]}),Object(g.jsxs)("div",{className:"item3",children:[Object(g.jsx)("h6",{children:"Certifications"}),U.map((function(e,t){return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsxs)("div",{className:"inputs_background row no-gutters",children:[Object(g.jsx)("div",{className:"col-6 px-2",children:Object(g.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return ee(t,e)}})}),Object(g.jsx)("div",{className:"col-5 px-2",children:Object(g.jsx)(m.YearDropDown,{label:"Year you were Certified",value:e.year,name:"year",handleChange:function(e){return ee(t,e)}})}),Object(g.jsx)("div",{className:"col-1",children:0!==t?Object(g.jsx)("h5",{className:"text-danger pl-3",onClick:function(){return function(e){var t=Object(c.a)(U);t.splice(e,1),X(t)}(t)},children:Object(g.jsx)(v.CloseIcon,{})}):null})]},t),t+1===U.length?Object(g.jsx)("div",{className:"d-flex",children:Object(g.jsx)("h5",{onClick:te,children:"+ Add Certificate's"})}):null]},t)}))]}),Object(g.jsxs)("div",{className:"item4",children:[Object(g.jsx)("h6",{children:"Are you currently enrolled in any continued education programs?"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us about any awaiting certifications ",value:W.awaitingCertification,onChange:function(e){return R(Object(i.a)(Object(i.a)({},W),{},{awaitingCertification:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item5",children:[Object(g.jsx)("h6",{children:"Do you have a facility to train new & outside clients?"}),Object(g.jsxs)("div",{className:"row d-flex",children:[Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("select",{value:H.workMode,name:"workMode",onChange:function(e){Y(Object(i.a)(Object(i.a)({},H),{},{workMode:e.target.value}))},children:y.map((function(e,t){return Object(g.jsx)("option",{value:e.value,children:e.label},t)}))})}),"yes"===H.workMode?Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("div",{className:"inputs_experience_drop",children:Object(g.jsx)("input",{type:"text",placeholder:"Details of facility",value:H.workLocation,name:"answer",onChange:function(e){Y(Object(i.a)(Object(i.a)({},H),{},{workLocation:e.target.value}))}})})}):null]})]}),Object(g.jsxs)("div",{className:"item6",children:[Object(g.jsx)("h6",{children:"Why are you interested in joining Motto?"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:W.interestInMotto,onChange:function(e){var t,a=e.target.value;(null===a||void 0===a||null===(t=a.split(" "))||void 0===t?void 0:t.length)>75||(null===a||void 0===a?void 0:a.length)>500||R(Object(i.a)(Object(i.a)({},W),{},{interestInMotto:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item6",children:[Object(g.jsx)("h6",{children:"Describe how you assess a client before their first session?"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:W.clientAssessment,onChange:function(e){var t,a=e.target.value;(null===a||void 0===a||null===(t=a.split(" "))||void 0===t?void 0:t.length)>75||(null===a||void 0===a?void 0:a.length)>500||R(Object(i.a)(Object(i.a)({},W),{},{clientAssessment:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item6",children:[Object(g.jsx)("h6",{children:"Describe your training process & philosophy"}),Object(g.jsx)("div",{className:"inputs_experience",children:Object(g.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us all about it.",value:W.trainingProcess,onChange:function(e){var t,a=e.target.value;(null===a||void 0===a||null===(t=a.split(" "))||void 0===t?void 0:t.length)>75||(null===a||void 0===a?void 0:a.length)>500||R(Object(i.a)(Object(i.a)({},W),{},{trainingProcess:e.target.value}))}})})]}),Object(g.jsx)("div",{className:"submit_button",children:Object(g.jsxs)("button",(t={type:"submit",style:{textDecoration:"none",color:"#FFFFFF"}},Object(n.a)(t,"type","submit"),Object(n.a)(t,"onClick",(function(){var e={areaOfExpertise:W.areaOfExpertise,previousExperience:G,certification:U,clientAssessment:W.clientAssessment,trainingProcess:W.trainingProcess,interestInMotto:W.interestInMotto,awaitingCertification:W.awaitingCertification,trainingFacility:"yes"===H.workMode,trainingFacilityLocation:H.workLocation};a(e).then((function(){f.history.push("/trainer/availability")}))})),Object(n.a)(t,"children",["Continue",Object(g.jsx)(b.default,{})]),t))})]})})]})}),Object(g.jsx)("img",{src:h.default,alt:"icon",className:"bg_watermark"})]})})})}));t.default=k},396:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},398:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},399:function(e,t,a){},583:function(e,t,a){},584:function(e,t,a){}}]);
//# sourceMappingURL=22.ae234269.chunk.js.map