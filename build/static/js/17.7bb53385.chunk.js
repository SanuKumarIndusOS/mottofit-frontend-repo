(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[17,85,144,192,261],{144:function(e,t,a){"use strict";a.r(t);var c=a(17),n=a(6),i=a(578),r=a(10),o=a(2),s=a.n(o),l=(a(499),a(5)),d=a(315),j=a(42),b=a(69),u=a(866),O=a(43),p=a(34),h=a(27),x=a(50),m=a(13),f=a(597),v=(a(498),a(1)),g=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],y=Object(p.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(h.b)({updateTrainerDetails:x.updateTrainerDetails,getTrainerDetails:x.getTrainerDetails},e)}))((function(e){var t,a=e.updateTrainerDetails,p=e.details,h=s.a.useState(!1),x=Object(r.a)(h,2),y=x[0],k=x[1],E=s.a.useState(!1),C=Object(r.a)(E,2),w=C[0],N=C[1],_=s.a.useState(!1),S=Object(r.a)(_,2),I=S[0],z=S[1],D=s.a.useState(!1),A=Object(r.a)(D,2),M=A[0],T=A[1],B=Object(o.useState)({workMode:"",workLocation:""}),P=Object(r.a)(B,2),F=P[0],Y=P[1],H=Object(o.useState)({areaOfExpertise:[],previousExperience:[],certification:[],clientAssessment:"",trainingProcess:"",interestInMotto:"",currentExperience:"",awaitingCertification:""}),L=Object(r.a)(H,2),V=L[0],$=L[1];console.log(V,"trainerbackgroundData");var J=Object(o.useState)("a"),R=Object(r.a)(J,2),G=(R[0],R[1],Object(o.useState)([{orgnization:"",job:"",years:""}])),W=Object(r.a)(G,2),q=W[0],K=W[1],Q=Object(o.useState)([{certificate:"",year:"",upload:""}]),U=Object(r.a)(Q,2),X=U[0],Z=U[1],ee=function(e,t){var a=Object(i.a)(q);a[e][t.target.name]=t.target.value,K(a),console.log(q),$(Object(n.a)(Object(n.a)({},V),{},{previousExperience:q}))},te=function(e,t){var a=Object(i.a)(X);a[e][t.target.name]=t.target.value,Z(a),$(Object(n.a)(Object(n.a)({},V),{},{certification:X}))};return Object(o.useEffect)((function(){if(Object.keys(p).length>5){var e={areaOfExpertise:(null===p||void 0===p?void 0:p.areaOfExpertise)||[],previousExperience:(null===p||void 0===p?void 0:p.previousExperience)||[],certification:(null===p||void 0===p?void 0:p.certificate)||[],clientAssessment:p.clientAssessment,trainingProcess:p.trainingProcess,interestInMotto:p.interestInMotto,awaitingCertification:p.awaitingCertification};p.currentExperience&&Y(p.currentExperience),p.previousExperience&&K(p.previousExperience),p.certification&&Z(p.certification),$(e)}}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"outter_container_bg",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"links_wrapper",children:[Object(v.jsxs)("div",{className:"outter_links",children:[Object(v.jsx)("img",{src:d.default,alt:"icon"}),Object(v.jsxs)("div",{className:"inner_links",children:[Object(v.jsxs)(l.a,{to:"/trainer/about",children:[" ","Back to About You"]}),Object(v.jsx)("div",{})]})]}),Object(v.jsxs)("div",{className:"outter_links",children:[Object(v.jsxs)("div",{className:"inner_links",children:[Object(v.jsx)(l.a,{to:"/trainer/availability",children:"Go to Availability"}),Object(v.jsx)("div",{})]}),Object(v.jsx)("img",{src:j.default,alt:"icon"})]})]}),Object(v.jsx)("div",{className:"main_wrapper",children:Object(v.jsxs)("div",{className:"wrapper_inneritems",children:[Object(v.jsx)("h1",{children:"Detail out your training background"}),Object(v.jsx)("p",{}),Object(v.jsx)("div",{className:"contents_wrapper",children:Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"item1",children:[Object(v.jsx)("h6",{children:"Tell us what you train! Select all the verticals that apply"}),Object(v.jsxs)("div",{className:"inputs_experience",children:[Object(v.jsx)(u.a,{checked:w,onChange:function(e){if(N(e.target.checked),console.log(e.target.checked),e.target.checked)$(Object(n.a)(Object(n.a)({},V),{},{areaOfExpertise:[].concat(Object(i.a)(V.areaOfExpertise),["Strength & HIIT"])})),console.log(V.areaOfExpertise);else{var t=V.areaOfExpertise.indexOf("Strength & HIIT");t>-1&&V.areaOfExpertise.splice(t,1),console.log(V.areaOfExpertise)}console.log(V)},style:{color:"#53BFD2"}}),Object(v.jsx)("div",{className:"checkbox_label",children:"Strength & HIIT"}),Object(v.jsx)(u.a,{checked:y,onChange:function(e){if(k(e.target.checked),console.log(e.target.checked),e.target.checked)console.log("setBoxing"),$(Object(n.a)(Object(n.a)({},V),{},{areaOfExpertise:[].concat(Object(i.a)(V.areaOfExpertise),["Boxing"])})),console.log(V.areaOfExpertise);else{console.log("unsetBoxing");var t=V.areaOfExpertise.indexOf("Boxing");t>-1&&V.areaOfExpertise.splice(t,1),console.log(V.areaOfExpertise)}console.log(V)},style:{color:"#53BFD2"}}),Object(v.jsx)("div",{className:"checkbox_label",children:"Boxing"}),Object(v.jsx)(u.a,{checked:I,onChange:function(e){if(z(e.target.checked),e.target.checked)$(Object(n.a)(Object(n.a)({},V),{},{areaOfExpertise:[].concat(Object(i.a)(V.areaOfExpertise),["Yoga"])}));else{var t=V.areaOfExpertise.indexOf("Yoga");t>-1&&V.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(v.jsx)("div",{className:"checkbox_label",children:"Yoga"}),Object(v.jsx)(u.a,{checked:M,onChange:function(e){if(T(e.target.checked),e.target.checked)$(Object(n.a)(Object(n.a)({},V),{},{areaOfExpertise:[].concat(Object(i.a)(V.areaOfExpertise),["Pilates"])}));else{var t=V.areaOfExpertise.indexOf("Pilates");t>-1&&V.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(v.jsx)("div",{className:"checkbox_label",children:"Pilates"})]})]}),Object(v.jsxs)("div",{className:"item2",children:[Object(v.jsx)("h6",{children:"Training experience"}),q.map((function(e,t){return Object(v.jsxs)("div",{className:"inputs_experience",children:[Object(v.jsx)("input",{type:"text",placeholder:"Name of the organization / GYM",value:e.orgnization,name:"orgnization",onChange:function(e){return ee(t,e)}}),Object(v.jsx)("input",{type:"text",placeholder:"Job Title",value:e.job,name:"job",onChange:function(e){return ee(t,e)}}),Object(v.jsx)("input",{type:"number",placeholder:"Years",name:"years",value:e.years,onChange:function(e){return ee(t,e)}})]},t)})),Object(v.jsx)("h5",{onClick:function(){K([].concat(Object(i.a)(q),[{orgnization:"",job:"",years:""}]))},children:"+ Add Work Experience"})]}),Object(v.jsxs)("div",{className:"item3",children:[Object(v.jsx)("h6",{children:"Certifications"}),X.map((function(e,t){return Object(v.jsxs)("div",{className:"inputs_background",children:[Object(v.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return te(t,e)}}),Object(v.jsx)("input",{type:"text",placeholder:"Year you were Certified",value:e.year,name:"year",onChange:function(e){return te(t,e)}})]},t)})),Object(v.jsx)("h5",{onClick:function(){Z([].concat(Object(i.a)(X),[{certificate:"",year:"",upload:""}])),console.log(X)},children:"+ Add Certificate's"})]}),Object(v.jsxs)("div",{className:"item4",children:[Object(v.jsx)("h6",{children:"Are you currently enrolled in any continued education programs?"}),Object(v.jsx)("div",{className:"inputs_experience",children:Object(v.jsx)("textarea",{type:"text",name:"comment",placeholder:"Tell us about any awaiting certifications ",value:V.awaitingCertification,onChange:function(e){return $(Object(n.a)(Object(n.a)({},V),{},{awaitingCertification:e.target.value}))}})})]}),Object(v.jsxs)("div",{className:"item5",children:[Object(v.jsx)("h6",{children:"Do you have a facility to train new & outside clients?"}),Object(v.jsxs)("div",{className:"inputs_experience_drop",children:[Object(v.jsx)(f.Dropdown,{required:!0,className:"select_location",title:"Select Your Answer",list:g,value:F.workMode,onChange:function(e){Y(Object(n.a)(Object(n.a)({},F),{},{workMode:e.value}))}}),"yes"===F.workMode?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("input",{type:"text",placeholder:"Details of facility",value:F.workLocation,name:"answer",onChange:function(e){Y(Object(n.a)(Object(n.a)({},F),{},{workLocation:e.target.value})),$(Object(n.a)(Object(n.a)({},V),{},{currentExperience:F}))}})}):null]})]}),Object(v.jsxs)("div",{className:"item6",children:[Object(v.jsx)("h6",{children:"Why are you interested in joining Motto?"}),Object(v.jsx)("div",{className:"inputs_experience",children:Object(v.jsx)("textarea",{maxlength:"150",type:"text",name:"comment",placeholder:"Tell us all about it in not more than 150 words",value:V.interestInMotto,onChange:function(e){return $(Object(n.a)(Object(n.a)({},V),{},{interestInMotto:e.target.value}))}})})]}),Object(v.jsxs)("div",{className:"item6",children:[Object(v.jsx)("h6",{children:"Describe how you assess a client before their first session?"}),Object(v.jsx)("div",{className:"inputs_experience",children:Object(v.jsx)("textarea",{type:"text",name:"comment",maxlength:"150",placeholder:"Tell us all about it in not more than 150 words",value:V.clientAssessment,onChange:function(e){return $(Object(n.a)(Object(n.a)({},V),{},{clientAssessment:e.target.value}))}})})]}),Object(v.jsxs)("div",{className:"item6",children:[Object(v.jsx)("h6",{children:"Describe your training process & philosophy"}),Object(v.jsx)("div",{className:"inputs_experience",children:Object(v.jsx)("textarea",{type:"text",name:"comment",maxlength:"150",placeholder:"Tell us all about it in not more than 150 words",value:V.trainingProcess,onChange:function(e){return $(Object(n.a)(Object(n.a)({},V),{},{trainingProcess:e.target.value}))}})})]}),Object(v.jsx)("div",{className:"submit_button",children:Object(v.jsxs)("button",(t={type:"submit",style:{textDecoration:"none",color:"#FFFFFF"}},Object(c.a)(t,"type","submit"),Object(c.a)(t,"onClick",(function(){var e={details:Object(n.a)(Object(n.a)({},p),{},{areaOfExpertise:V.areaOfExpertise,previousExperience:V.previousExperience,certification:V.certification,clientAssessment:V.clientAssessment,trainingProcess:V.trainingProcess,interestInMotto:V.interestInMotto,currentExperience:F,awaitingCertification:V.awaitingCertification})};a(e),m.history.push("/trainer/availability")})),Object(c.a)(t,"children",["Continue",Object(v.jsx)(b.default,{})]),t))})]})})]})}),Object(v.jsx)("img",{src:O.default,alt:"icon",className:"bg_watermark"})]})})})}));t.default=y},315:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},498:function(e,t,a){},499:function(e,t,a){},578:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(98);var n=a(70);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},866:function(e,t,a){"use strict";var c=a(4),n=a(580),i=a(2),r=(a(3),a(585)),o=a(611),s=a(586),l=Object(s.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(602),b=Object(s.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=a(603),O=a(587),p=i.createElement(d,null),h=i.createElement(l,null),x=i.createElement(b,null),m=i.forwardRef((function(e,t){var a=e.checkedIcon,s=void 0===a?p:a,l=e.classes,d=e.color,j=void 0===d?"secondary":d,b=e.icon,O=void 0===b?h:b,m=e.indeterminate,f=void 0!==m&&m,v=e.indeterminateIcon,g=void 0===v?x:v,y=e.inputProps,k=e.size,E=void 0===k?"medium":k,C=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),w=f?g:O,N=f?g:s;return i.createElement(o.a,Object(c.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(u.a)(j))],f&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:j,inputProps:Object(c.a)({"data-indeterminate":f},y),icon:i.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===E?E:w.props.fontSize}),checkedIcon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===E?E:N.props.fontSize}),ref:t},C))}));t.a=Object(O.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(m)}}]);
//# sourceMappingURL=17.7bb53385.chunk.js.map