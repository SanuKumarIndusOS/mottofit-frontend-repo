(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[37,10,29,57,58,244,245,246,247,283,323,324,325,327,331,334,338,339,353,354,355],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"NormalMultiSelect",(function(){return b}));var a=n(32),r=n(4),i=n(19),s=n(20),l=n(25),c=n(24),o=n(2),u=n(889),d=n(751),m=(n(426),n(425)),h=n(1),b=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var n={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};n.target.value.push(t)})),e.props.handleChange(n)}else{var a={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(a)}},e.handleInputChange=function(t){var n={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(n)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"select-form-control w-100":t,i=e.options,s=void 0===i?[]:i,l=e.value,c=void 0===l?"":l,o=e.name,b=void 0===o?"":o,p=e.placeholder,f=void 0===p?"Select":p,j=e.disabled,g=void 0!==j&&j,v=e.arrow,O=void 0!==v&&v,y=e.isReadOnly,x=void 0!==y&&y,w=e.label,N=void 0===w?"":w,k=e.isMulti,T=void 0!==k&&k,S=e.isClearable,M=void 0!==S&&S,C=e.isSearchable,_=void 0!==C&&C,A=e.isBoldLabel,I=void 0!==A&&A,D=e.showArrow,F=void 0===D||D,R={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(r.a)(Object(r.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(a.a)(t,"height","100%"),Object(a.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var n=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:n?"#53BFD2":"#fff",color:n?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(h.jsx)(h.Fragment,{children:x?Object(h.jsx)("p",{children:c}):Object(h.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(I?"mt-0":""),children:[""!==N?Object(h.jsx)("div",{children:Object(h.jsx)("label",{className:I?"mb-1 text-black-22":"font-weight-normal mb-1",children:N})}):null,Object(h.jsx)(d.a,{className:n,classNamePrefix:"Select",isDisabled:g,isClearable:M,isSearchable:_,name:b,options:s,onChange:this.handleChange,isMulti:T,showArrow:F,placeholder:f,styles:R,value:s&&s.length>0&&s.find((function(e){return e.value===c}))?s.find((function(e){return e.value===c})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(h.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(h.jsx)("img",{src:m.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),n}(o.Component)},136:function(e,t,n){"use strict";n.r(t);n(2),n(503);var a=n(494),r=n(498),i=n(497),s=n(496),l=n(495),c=n(493),o=n(492),u=n(1);t.default=function(){var e,t,n,d,m,h,b,p;return console.log("hihi",window.location.pathname),window.location.pathname.includes("/about")&&(e=Object(u.jsx)("img",{src:a.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),n=Object(u.jsx)("img",{src:l.default,alt:"icon"}),d=Object(u.jsx)("img",{src:c.default,alt:"icon"}),m=Object(u.jsx)("img",{src:c.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"active",children:"About you"}),b=Object(u.jsx)("p",{className:"inactive",children:"Training background"}),p=Object(u.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/background")&&(e=Object(u.jsx)("img",{src:a.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),n=Object(u.jsx)("img",{src:l.default,alt:"icon"}),d=Object(u.jsx)("img",{src:o.default,alt:"icon"}),m=Object(u.jsx)("img",{src:c.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"completed",children:"About you"}),b=Object(u.jsx)("p",{className:"active",children:"Training background"}),p=Object(u.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/availability")&&(e=Object(u.jsx)("img",{src:a.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),n=Object(u.jsx)("img",{src:s.default,alt:"icon"}),d=Object(u.jsx)("img",{src:o.default,alt:"icon"}),m=Object(u.jsx)("img",{src:o.default,alt:"icon"}),h=Object(u.jsx)("p",{className:"completed",children:"About you"}),b=Object(u.jsx)("p",{className:"completed",children:"Training background"}),p=Object(u.jsx)("p",{className:"active",children:"Availability"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,h]}),d,Object(u.jsxs)("div",{className:"items",children:[t,b]}),m,Object(u.jsxs)("div",{className:"items",children:[n,p]})]})})})}},141:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(12),i=n.n(r),s=n(26),l=n(4),c=n(19),o=n(20),u=n(29),d=n(25),m=n(24),h=n(2),b=(n(515),n(431)),p=n(432),f=n(91),j=n(59),g=n(66),v=n(23),O=n(27),y=n(5),x=n(762),w=n.n(x),N=(n(823),n(821),n(126)),k=n(914),T=n.n(k),S=n(242),M=n.n(S),C=n(95),_=n(1),A=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],I=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];return(e=t.call.apply(t,[this].concat(o))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1,errors:{}},e.validator=new T.a({messages:{email:"Invalid Email address"},element:function(e){return Object(_.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(u.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,t,n){return n.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(t,n){return t.replace("",e.helpers.toSentence(n))},required:!0}}}),e.validationRules=function(){return C.default.validators.dateValidation=function(e,t,n,a){var r=M()();r=(r=r.subtract(t,"years")).format("YYYY-MM-DD");var i=M()(e).format("YYYY-MM-DD");return M()(i).isBefore(r)?void 0:["^Trainer should be atleast 21 years old"]},{firstName:{presence:{allowEmpty:!1,message:"^First name is required"},format:{pattern:/^[A-Za-z ]+$/,flags:"i",message:"^First name must contain only letters and spaces"}},DOB:{presence:{allowEmpty:!1,message:"^Date of birth is required"},dateValidation:21},gender:{presence:{allowEmpty:!1,message:"^Gender is required"}},location:{presence:{allowEmpty:!1,message:"^Location is required"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}}}},e.validateFields=function(t){var n=Object(C.default)(t,e.validationRules());if(void 0!==n){Object(l.a)({},n);e.setState({errors:Object(l.a)(Object(l.a)({},e.state.errors),n)})}return!n},e.handleTrainerBackground=function(){var t=Object(s.a)(i.a.mark((function t(n){var a,r,s,l,c,o,u,d,m,h;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.dob,s=a.location,l=a.email,c=a.gender,o=a.websiteURL,u=a.phone,d=a.instagram,m=a.firstName,h={firstName:m,DOB:r,email:l,gender:c,phoneNumber:u.includes("+")?u:"+".concat(u),location:s,websiteLink:o,instagramProfile:d},e.validateFields(h)){t.next=5;break}return t.abrupt("return");case 5:e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(h).then((function(){e.setState({isLoading:!1}),y.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var n=t.target,r=n.value,i=n.name;e.setState(Object(a.a)({},i,r))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(t){e.setState({dob:t.DOB?t.DOB:"",location:t.location?t.location:"",email:t.email?t.email:"",gender:t.gender?t.gender:"",websiteURL:t.websiteLink?t.websiteLink:"",phone:t.phoneNumber?t.phoneNumber:"",instagram:t.instagramProfile?t.instagramProfile:"",firstName:t.firstName?t.firstName:""})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.dob,a=t.location,r=t.email,i=t.gender,s=t.websiteURL,l=t.phone,c=t.instagram,o=t.firstName,u=t.isLoading,d=t.errors,m=M()();return m=(m=m.subtract(21,"years")).format("YYYY-MM-DD"),Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"container main",children:Object(_.jsxs)("div",{className:"wrapper_about",children:[Object(_.jsx)("h2",{children:"Tell us a little bit about you"}),Object(_.jsx)("br",{}),Object(_.jsx)("div",{className:"outter_form",children:Object(_.jsxs)("div",{className:"wrapper_inputs",children:[Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Name*"}),Object(_.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(t){return e.handleInput(t)},value:o,name:"firstName"}),d.firstName&&Object(_.jsx)("span",{children:d.firstName[0]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{className:"bg_down",children:"Location*"}),Object(_.jsx)("div",{className:"iconwrapper",children:Object(_.jsx)(N.NormalMultiSelect,{placeholder:"Select Your City",value:a,arrow:!0,name:"location",options:A,handleChange:function(t){return e.handleInput(t)}})}),d.location&&Object(_.jsx)("span",{children:d.location[0]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Date of Birth*"}),Object(_.jsx)("input",{placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"},value:n,onChange:function(t){return e.handleInput(t)},name:"dob",min:"1900-01-01",max:m}),d.DOB&&Object(_.jsx)("span",{children:d.DOB[0]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Select Your Gender*"}),Object(_.jsx)("div",{className:"iconwrapper",children:Object(_.jsx)(N.NormalMultiSelect,{placeholder:"Select Gender",value:i,arrow:!0,name:"gender",options:I,handleChange:function(t){return e.handleInput(t)}})}),d.gender&&Object(_.jsx)("span",{children:d.gender[0]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Email*"}),Object(_.jsx)("input",{placeholder:"Email",type:"email",value:r,onChange:function(t){return e.handleInput(t)},name:"email"}),d.email&&Object(_.jsx)("span",{children:d.email[0]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Phone*"}),Object(_.jsx)(w.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:l,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(t){e.setState({phone:t})}}),d.phoneNumber&&Object(_.jsx)("span",{children:d.phoneNumber[0]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Website"}),Object(_.jsxs)("div",{className:"iconwrapper",children:[Object(_.jsx)("input",{placeholder:"Add your weblink",type:"text",value:s,name:"websiteURL",onChange:function(t){return e.handleInput(t)}}),Object(_.jsx)("img",{src:p.default,alt:"icon"})]})]}),Object(_.jsxs)("div",{className:"wrapper_innerInput",children:[Object(_.jsx)("label",{children:"Instagram"}),Object(_.jsxs)("div",{className:"iconwrapper",children:[Object(_.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:c,name:"instagram",onChange:function(t){return e.handleInput(t)}}),Object(_.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(_.jsx)("div",{className:"submit_button",children:Object(_.jsx)("button",{type:"submit",onClick:function(t){return e.handleTrainerBackground(t)},disabled:u,className:"d-flex justify-content-center",children:u?"Loading...":Object(_.jsxs)(_.Fragment,{children:["Continue",Object(_.jsx)(f.default,{})]})})})]})}),Object(_.jsx)("img",{src:j.default,alt:"icon",className:"about_watermark"})]})})})}}]),n}(h.Component),F=Object(O.b)(null,(function(e){return Object(v.b)({updateTrainerDetailsApicall:g.updateTrainerDetailsApicall,getTrainerDetails:g.getTrainerDetails,trainerDetail:g.trainerDetail},e)}))(D);t.default=F},166:function(e,t,n){"use strict";n.r(t);var a=n(92),r=n(11),i=n(4),s=n(2),l=(n(581),n(8)),c=n(720),o=n(832),u=n(824),d=n(424),m=n(91),h=n(244),b=(n(299),n(582),n(127)),p=n(5),f=n(59),j=n(23),g=n(27),v=n(66),O=n(1),y=Object(c.a)({root:{"&$checked":{color:o.a[600]}},checked:{}})((function(e){return Object(O.jsx)(u.a,Object(i.a)({color:"default"},e))})),x=Object(g.b)(null,(function(e){return Object(j.b)({updateTrainerDetailsApicall:v.updateTrainerDetailsApicall,trainerDetail:v.trainerDetail},e)}))((function(e){var t=e.updateTrainerDetailsApicall,n=e.trainerDetail,c=Object(s.useState)("a"),o=Object(r.a)(c,2),u=o[0],j=o[1],g=Object(s.useState)("1"),v=Object(r.a)(g,2),x=v[0],w=v[1],N=Object(s.useState)(!1),k=Object(r.a)(N,2),T=k[0],S=k[1],M=Object(s.useState)(!1),C=Object(r.a)(M,2),_=C[0],A=C[1],I=Object(s.useState)(!1),D=Object(r.a)(I,2),F=D[0],R=D[1],P=Object(s.useState)(!1),Y=Object(r.a)(P,2),z=Y[0],E=Y[1],L=Object(s.useRef)(null),$=Object(s.useState)({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",servicableLocation:""}),B=Object(r.a)($,2),q=B[0],U=B[1],W=function(e){j(e.target.value)},H=function(e){w(e.target.value)};return Object(s.useEffect)((function(){n().then((function(e){if(e){var t={hoursPerWeek:e.hoursPerWeek?e.hoursPerWeek:0,preferedTrainingMode:e.preferedTrainingMode?e.preferedTrainingMode:[],trainingFacilityLocation:e.trainingFacilityLocation?e.trainingFacilityLocation:"",servicableLocation:e.servicableLocation?e.servicableLocation:"",serviceableNeighbourHood:e.serviceableNeighbourHood?e.serviceableNeighbourHood:""};if(U(t),null!==e.trainingFacility&&void 0!==e.trainingFacility&&j(e.trainingFacility?"a":"b"),null!==e.willingToTravel&&void 0!==e.willingToTravel&&w(e.willingToTravel?"1":"0"),e.preferedTrainingMode&&0!==e.preferedTrainingMode.length){0!==e.preferedTrainingMode.filter((function(e){return"virtual"===e})).length&&S(!0);0!==e.preferedTrainingMode.filter((function(e){return"inPerson"==e})).length&&A(!0)}}}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"link_wrapper",children:[Object(O.jsx)("img",{src:d.default,alt:"icon"}),Object(O.jsx)("div",{className:"inner_links",children:Object(O.jsx)(l.a,{to:"/trainer/background",children:"Back to Trainer Background"})})]}),Object(O.jsxs)("div",{className:"main_wrappercontainer",children:[Object(O.jsxs)("div",{className:"wrapper_inneritem",children:[Object(O.jsx)("h1",{children:"Highlight your availability on the platform"}),Object(O.jsxs)("form",{className:"container",onSubmit:function(e){return e.preventDefault()},children:[Object(O.jsxs)("div",{className:"content_wrapper",children:[Object(O.jsxs)("div",{className:"item_1",children:[Object(O.jsx)("h6",{children:"How many hours will you list on Motto?"}),Object(O.jsx)("div",{className:"inputs_platform",children:Object(O.jsx)("input",{type:"number",placeholder:"10 Hours/Week",value:q.hoursPerWeek,onChange:function(e){U(Object(i.a)(Object(i.a)({},q),{},{hoursPerWeek:e.target.value}))}})})]}),Object(O.jsxs)("div",{className:"item_2",children:[Object(O.jsx)("h6",{children:"Where are you willing to train?"}),Object(O.jsxs)("div",{className:"inputs_platform",children:[Object(O.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(a.a)(q.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(a.a)(n),[t]),q.preferedTrainingMode=Object(a.a)(n),U(Object(i.a)({},q)),S((function(e){return!e}))}(0,"virtual")},className:T?"buttonFalse":"buttonTrue",children:"Virtual"}),Object(O.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(a.a)(q.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(a.a)(n),[t]),q.preferedTrainingMode=Object(a.a)(n),U(Object(i.a)({},q)),A((function(e){return!e}))}(0,"inPerson")},className:_?"buttonFalse":"buttonTrue",children:"In Person"})]})]}),Object(O.jsxs)("div",{className:"item_3",children:[Object(O.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(O.jsx)(y,{checked:"a"==u,onChange:W,value:"a",name:"radio-button-demo",inputProps:{"aria-label":"a"}}),Object(O.jsx)("label",{children:"Yes"}),Object(O.jsx)(y,{checked:"b"==u,onChange:W,value:"b",name:"radio-button-demo",inputProps:{"aria-label":"b"}}),Object(O.jsx)("label",{children:"No"})]}),Object(O.jsxs)("div",{className:"item_4",children:[Object(O.jsx)("h6",{children:"Details of the facility/location"}),Object(O.jsx)("div",{className:"inputs_platform",children:Object(O.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",value:q.trainingFacilityLocation,className:"".concat("a"!==u?"disable-btn":""),disabled:"a"!==u,onChange:function(e){U(Object(i.a)(Object(i.a)({},q),{},{trainingFacilityLocation:e.target.value}))}})})]}),Object(O.jsxs)("div",{className:"item_5",children:[Object(O.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(O.jsx)(y,{checked:"1"==x,onChange:H,value:"1",inputProps:{"aria-label":"1"}}),Object(O.jsx)("label",{children:" Yes!"}),Object(O.jsx)(y,{checked:"0"==x,onChange:H,value:"0",inputProps:{"aria-label":"0"}}),Object(O.jsx)("label",{children:"No"})]}),Object(O.jsxs)("div",{className:"item_6",children:[Object(O.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(O.jsx)("div",{className:"inputs_platform",children:Object(O.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",value:q.serviceableNeighbourHood,className:"".concat(1!==parseInt(x)?"disable-btn":""),disabled:1!==parseInt(x),onChange:function(e){U(Object(i.a)(Object(i.a)({},q),{},{serviceableNeighbourHood:e.target.value}))}})})]})]}),Object(O.jsxs)("div",{className:"submit_button",children:[Object(O.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var n={preferedTrainingMode:q.preferedTrainingMode,willingToTravel:parseInt(x)===parseInt("1"),serviceableNeighbourHood:q.serviceableNeighbourHood,trainingFacilityLocation:q.trainingFacilityLocation,stripeId:"",trainingFacility:"a"===u,applicationStatus:"submitted"};""!==q.hoursPerWeek&&(n.hoursPerWeek=parseFloat(q.hoursPerWeek)),R(!0),t(n).then((function(){E(!0),R(!1)})).catch((function(){E(!1),R(!1)}))},disabled:F,className:"d-flex justify-content-center",children:F?"Loading...":Object(O.jsxs)(O.Fragment,{children:["Submit",Object(O.jsx)(m.default,{})]})}),z?Object(O.jsx)(h.a,{open:z,onClose:function(){E(!1),p.history.push("card")},center:!0,closeIcon:Object(O.jsx)("img",{src:b.default,alt:"close"}),container:L.current,styles:{boaderRadius:"10px"},children:Object(O.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(O.jsx)("h2",{children:"Background Information collection complete. Click the \u201cx\u201d to move to next section!"}),Object(O.jsx)("p",{children:"Time to move on to building your public Motto profile. This profile will be published only after you are approved!"})]})}):null]})]})]}),Object(O.jsx)("img",{src:f.default,alt:"icon",className:"ava_watermark"})]})]})})}));t.default=x},201:function(e,t,n){"use strict";n.r(t);n(2);var a=n(136),r=(n(141),n(166)),i=n(1);t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(a.default,{}),Object(i.jsx)(r.default,{})]})}},424:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow Back.d3693c0f.svg"},425:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Drop Down 4.50302f8e.svg"},426:function(e,t,n){},431:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Insta Icon.432b9d08.svg"},432:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Web Icon.b0ff0aa9.svg"},492:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow 1.2a75d61e.svg"},493:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow_active.75efc204.svg"},494:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Person Icon.aa227953.svg"},495:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Schedule Slot Icon.21459896.svg"},496:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Schedule_slot_active.29ee488e.svg"},497:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Training Icon.d725d1c5.svg"},498:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Training_active.ab622bf2.svg"},503:function(e,t,n){},515:function(e,t,n){},581:function(e,t,n){},582:function(e,t,n){},717:function(e,t,n){"use strict";function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),(function(){}))}n.d(t,"a",(function(){return a}))},733:function(e,t,n){"use strict";var a=n(2),r=a.createContext();t.a=r},821:function(e,t,n){},823:function(e,t,n){},824:function(e,t,n){"use strict";var a=n(7),r=n(715),i=n(2),s=(n(3),n(719)),l=n(781),c=n(716),o=Object(c.a)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=Object(c.a)(i.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),d=n(720);var m=Object(d.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,n=e.classes,a=e.fontSize;return i.createElement("div",{className:Object(s.a)(n.root,t&&n.checked)},i.createElement(o,{fontSize:a}),i.createElement(u,{fontSize:a,className:n.layer}))})),h=n(753),b=n(723),p=n(717),f=n(733);var j=i.createElement(m,{checked:!0}),g=i.createElement(m,null),v=i.forwardRef((function(e,t){var n=e.checked,c=e.classes,o=e.color,u=void 0===o?"secondary":o,d=e.name,m=e.onChange,h=e.size,v=void 0===h?"medium":h,O=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),y=i.useContext(f.a),x=n,w=Object(p.a)(m,y&&y.onChange),N=d;return y&&("undefined"===typeof x&&(x=y.value===e.value),"undefined"===typeof N&&(N=y.name)),i.createElement(l.a,Object(a.a)({color:u,type:"radio",icon:i.cloneElement(g,{fontSize:"small"===v?"small":"default"}),checkedIcon:i.cloneElement(j,{fontSize:"small"===v?"small":"default"}),classes:{root:Object(s.a)(c.root,c["color".concat(Object(b.a)(u))]),checked:c.checked,disabled:c.disabled},name:N,checked:x,onChange:w,ref:t},O))}));t.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(v)},832:function(e,t,n){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}},914:function(e,t,n){var a,r,i;r=[n(2)],void 0===(i="function"===typeof(a=function(e){"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,s=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw s}}}}function a(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function a(){var t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u(this,"showMessageFor",(function(e){t.visibleFields.includes(e)||t.visibleFields.push(e),t.helpers.forceUpdateIfNeeded()})),u(this,"hideMessageFor",(function(e){var n=t.visibleFields.indexOf(e);-1<n&&t.visibleFields.splice(n,1),t.helpers.forceUpdateIfNeeded()})),u(this,"helpers",{parent:this,passes:function(e,t,n,a){return a.hasOwnProperty(e)?!(this.isRequired(e,a)||!this.isBlank(t))||!1!==a[e].rule(t,n,this.parent):(console.error("Rule Not Found: There is no rule with the name ".concat(e,".")),!0)},isRequired:function(e,t){return t[e].hasOwnProperty("required")&&t[e].required},isBlank:function(e){return null==e||this.testRegex(e,/^[\s]*$/)},normalizeValues:function(e,t){return[this.valueOrEmptyString(e),this.getValidation(t),this.getOptions(t)]},getValidation:function(e){return e===Object(e)&&Object.keys(e).length?Object.keys(e)[0]:e.split(":")[0]},getOptions:function(e){if(e===Object(e)&&Object.values(e).length){var t=Object.values(e)[0];return Array.isArray(t)?t:[t]}return 1<(t=e.split(":")).length?t[1].split(","):[]},valueOrEmptyString:function(e){return null==e?"":e},toSentence:function(e){return e.slice(0,-2).join(", ")+(e.slice(0,-2).length?", ":"")+e.slice(-2).join(2<e.length?", or ":" or ")},testRegex:function(e,t){return null!==e.toString().match(t)},forceUpdateIfNeeded:function(){this.parent.autoForceUpdate&&this.parent.autoForceUpdate.forceUpdate()},message:function(e,t,n,a){return n.messages=n.messages||{},(n.messages[e]||n.messages.default||this.parent.messages[e]||this.parent.messages.default||a[e].message).replace(":attribute",this.humanizeFieldName(t))},humanizeFieldName:function(e){return e.replace(/([A-Z])/g," $1").replace(/_/g," ").toLowerCase()},element:function(e,t){return(t.element||this.parent.element)(e,t.className)},momentInstalled:function(){return!(!window||!window.moment)||(console.warn("Date validators require using momentjs https://momentjs.com and moment objects."),!1)},size:function(e,t){return"string"===t||void 0===t||"array"===t?e.length:"num"===t?parseFloat(e):void 0},sizeText:function(e){return"string"===e||void 0===e?" characters":"array"===e?" elements":""}}),this.fields={},this.visibleFields=[],this.errorMessages={},this.messagesShown=!1,this.rules=l({accepted:{message:"The :attribute must be accepted.",rule:function(e){return!0===e},required:!0},after:{message:"The :attribute must be after :date.",rule:function(e,n){return t.helpers.momentInstalled()&&moment.isMoment(e)&&e.isAfter(n[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},after_or_equal:{message:"The :attribute must be after or on :date.",rule:function(e,n){return t.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSameOrAfter(n[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},alpha:{message:"The :attribute may only contain letters.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z]*$/i)}},alpha_space:{message:"The :attribute may only contain letters and spaces.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z\s]*$/i)}},alpha_num:{message:"The :attribute may only contain letters and numbers.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z0-9]*$/i)}},alpha_num_space:{message:"The :attribute may only contain letters, numbers, and spaces.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z0-9\s]*$/i)}},alpha_num_dash:{message:"The :attribute may only contain letters, numbers, and dashes.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z0-9_-]*$/i)}},alpha_num_dash_space:{message:"The :attribute may only contain letters, numbers, dashes, and spaces.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z0-9_-\s]*$/i)}},array:{message:"The :attribute must be an array.",rule:function(e){return Array.isArray(e)}},before:{message:"The :attribute must be before :date.",rule:function(e,n){return t.helpers.momentInstalled()&&moment.isMoment(e)&&e.isBefore(n[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},before_or_equal:{message:"The :attribute must be before or on :date.",rule:function(e,n){return t.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSameOrBefore(n[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},between:{message:"The :attribute must be between :min and :max:type.",rule:function(e,n){return t.helpers.size(e,n[2])>=parseFloat(n[0])&&t.helpers.size(e,n[2])<=parseFloat(n[1])},messageReplace:function(e,n){return e.replace(":min",n[0]).replace(":max",n[1]).replace(":type",t.helpers.sizeText(n[2]))}},boolean:{message:"The :attribute must be a boolean.",rule:function(e){return!1===e||!0===e}},card_exp:{message:"The :attribute must be a valid expiration date.",rule:function(e){return t.helpers.testRegex(e,/^(([0]?[1-9]{1})|([1]{1}[0-2]{1}))\s?\/\s?(\d{2}|\d{4})$/)}},card_num:{message:"The :attribute must be a valid credit card number.",rule:function(e){return t.helpers.testRegex(e,/^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/)}},currency:{message:"The :attribute must be a valid currency.",rule:function(e){return t.helpers.testRegex(e,/^\$?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/)}},date:{message:"The :attribute must be a date.",rule:function(e){return t.helpers.momentInstalled()&&moment.isMoment(e)}},date_equals:{message:"The :attribute must be on :date.",rule:function(e,n){return t.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSame(n[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},email:{message:"The :attribute must be a valid email address.",rule:function(e){return t.helpers.testRegex(e,/^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)}},in:{message:"The selected :attribute must be :values.",rule:function(e,t){return t.includes(e)},messageReplace:function(e,n){return e.replace(":values",t.helpers.toSentence(n))}},integer:{message:"The :attribute must be an integer.",rule:function(e){return t.helpers.testRegex(e,/^\-?\d*$/)}},max:{message:"The :attribute may not be greater than :max:type.",rule:function(e,n){return t.helpers.size(e,n[1])<=parseFloat(n[0])},messageReplace:function(e,n){return e.replace(":max",n[0]).replace(":type",t.helpers.sizeText(n[1]))}},min:{message:"The :attribute must be at least :min:type.",rule:function(e,n){return t.helpers.size(e,n[1])>=parseFloat(n[0])},messageReplace:function(e,n){return e.replace(":min",n[0]).replace(":type",t.helpers.sizeText(n[1]))}},not_in:{message:"The selected :attribute must not be :values.",rule:function(e,t){return!t.includes(e)},messageReplace:function(e,n){return e.replace(":values",t.helpers.toSentence(n))}},not_regex:{message:"The :attribute must not match the required pattern.",rule:function(e,n){return!t.helpers.testRegex(e,"string"==typeof n[0]||n[0]instanceof String?new RegExp(n[0]):n[0])}},numeric:{message:"The :attribute must be a number.",rule:function(e){return t.helpers.testRegex(e,/^\-?\d*\.?\d+$/)}},phone:{message:"The :attribute must be a valid phone number.",rule:function(e){return t.helpers.testRegex(e,/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/)&&!t.helpers.testRegex(e,/^\b(\d)\1{8,}\b$/)}},regex:{message:"The :attribute must match the required pattern.",rule:function(e,n){return t.helpers.testRegex(e,"string"==typeof n[0]||n[0]instanceof String?new RegExp(n[0]):n[0])}},required:{message:"The :attribute field is required.",rule:function(e){return!t.helpers.isBlank(e)},required:!0},size:{message:"The :attribute must be :size:type.",rule:function(e,n){return t.helpers.size(e,n[1])==parseFloat(n[0])},messageReplace:function(e,n){return e.replace(":size",n[0]).replace(":type",t.helpers.sizeText(n[1]))}},string:{message:"The :attribute must be a string.",rule:function(e){return i(e)===i("string")}},typeof:{message:"The :attribute is not the correct type of :type.",rule:function(e,t){return i(e)===i(t[0])},messageReplace:function(e,t){return e.replace(":type",i(t[0]))}},url:{message:"The :attribute must be a url.",rule:function(e){return t.helpers.testRegex(e,/^https?:\/\/[-a-z0-9@:%._\+~#=]{1,256}\.[a-z0-9()]{2,6}\b([-a-z0-9()@:%_\+.~#?&//=]*)$/i)}}},n.validators||{}),n.locale&&!a.locales.hasOwnProperty(n.locale)&&console.warn("Locale not found! Make sure it is spelled correctly and the locale file is loaded.");var r=a.locales[n.locale]||{};Object.keys(this.rules).forEach((function(e){t.rules[e].message=r[e]||t.rules[e].message})),this.messages=n.messages||{},this.className=n.className,this.autoForceUpdate=n.autoForceUpdate||!1,!1===n.element?this.element=function(e){return e}:n.hasOwnProperty("element")?this.element=n.element:"object"===("undefined"==typeof navigator?"undefined":i(navigator))&&"ReactNative"===navigator.product?this.element=function(e){return e}:this.element=function(n,a){return e.createElement("div",{className:a||t.className||"srv-validation-message"},n)}}return o(a,null,[{key:"addLocale",value:function(e,t){this.locales[e]=t}}]),o(a,[{key:"getErrorMessages",value:function(){return this.errorMessages}},{key:"showMessages",value:function(){this.messagesShown=!0,this.helpers.forceUpdateIfNeeded()}},{key:"hideMessages",value:function(){this.messagesShown=!1,this.helpers.forceUpdateIfNeeded()}},{key:"allValid",value:function(){for(var e in this.fields)if(!1===this.fieldValid(e))return!1;return!0}},{key:"fieldValid",value:function(e){return this.fields.hasOwnProperty(e)&&!0===this.fields[e]}},{key:"purgeFields",value:function(){this.fields={},this.errorMessages={}}},{key:"messageWhenPresent",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!this.helpers.isBlank(e)&&this.messagesShown)return this.helpers.element(e,t)}},{key:"messageAlways",value:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(console.warn("The messageAlways() method is deprecated in SimpleReactValidator. Please see the documentation and switch to the messageWhenPresent() method."),t&&this.messagesShown)return this.helpers.element(t,n)}},{key:"check",value:function(e,a){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Array.isArray(a)||(a=a.split("|"));var i,s=r.validators?l(l({},this.rules),r.validators):this.rules,c=n(a);try{for(c.s();!(i=c.n()).done;){var o=i.value,u=t(this.helpers.normalizeValues(e,o),3),d=u[0],m=u[1],h=u[2];if(!this.helpers.passes(m,d,h,s))return!1}}catch(e){c.e(e)}finally{c.f()}return!0}},{key:"message",value:function(e,a,r){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};this.errorMessages[e]=null,this.fields[e]=!0,Array.isArray(r)||(r=r.split("|"));var s,c=i.validators?l(l({},this.rules),i.validators):this.rules,o=n(r);try{for(o.s();!(s=o.n()).done;){var u=s.value,d=t(this.helpers.normalizeValues(a,u),3),m=d[0],h=d[1],b=d[2];if(!this.helpers.passes(h,m,b,c)){this.fields[e]=!1;var p=this.helpers.message(h,e,i,c);if(0<b.length&&c[h].hasOwnProperty("messageReplace")&&(p=c[h].messageReplace(p,b)),this.errorMessages[e]=p,this.messagesShown||this.visibleFields.includes(e))return this.helpers.element(p,i)}}}catch(e){o.e(e)}finally{o.f()}}}]),a}();return u(d,"version","1.5.1"),u(d,"locales",{en:{}}),d})?a.apply(t,r):a)||(e.exports=i)}}]);