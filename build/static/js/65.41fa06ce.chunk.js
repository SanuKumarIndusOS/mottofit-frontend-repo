(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[65,95,262,300,344,348,372],{151:function(e,a,t){"use strict";t.r(a),t.d(a,"NormalMultiSelect",(function(){return m}));var n=t(36),r=t(5),i=t(20),l=t(21),s=t(27),c=t(26),o=t(2),d=t(900),u=t(818),p=(t(472),t(470)),b=t(1),m=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleChange=function(a){if(e.props.isMulti){var t={target:{name:e.props.name,value:[]}};a&&a.length&&a.forEach((function(e){var a={value:e.value,label:e.label};t.target.value.push(a)})),e.props.handleChange(t)}else{var n={target:{name:e.props.name,value:a?a.value:"",label:a?a.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(a){var t={target:{name:e.props.name,value:a||""}};e.props.handleinputChange&&e.props.handleinputChange(t)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=void 0===a?"select-form-control w-100":a,i=e.options,l=void 0===i?[]:i,s=e.value,c=void 0===s?"":s,o=e.name,m=void 0===o?"":o,h=e.placeholder,j=void 0===h?"Select":h,f=e.disabled,g=void 0!==f&&f,v=e.arrow,O=void 0!==v&&v,x=e.isReadOnly,w=void 0!==x&&x,N=e.label,y=void 0===N?"":N,D=e.isMulti,C=void 0!==D&&D,I=e.isClearable,S=void 0!==I&&I,M=e.isSearchable,k=void 0!==M&&M,Y=e.isBoldLabel,F=void 0!==Y&&Y,L=e.showArrow,_=void 0===L||L,B={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var a;return Object(r.a)(Object(r.a)({},e),{},(a={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(a,"height","100%"),Object(n.a)(a,"fontFamily","Montserrat"),a))},option:function(e,a){var t=a.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:t?"#53BFD2":"#fff",color:t?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(b.jsx)(b.Fragment,{children:w?Object(b.jsx)("p",{children:c}):Object(b.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(F?"mt-0":""),children:[""!==y?Object(b.jsx)("div",{children:Object(b.jsx)("label",{className:F?"mb-1 text-black-22":"font-weight-normal mb-1",children:y})}):null,Object(b.jsx)(u.a,{className:t,classNamePrefix:"Select",isDisabled:g,isClearable:S,isSearchable:k,name:m,options:l,onChange:this.handleChange,isMulti:C,showArrow:_,placeholder:j,styles:B,value:l&&l.length>0&&l.find((function(e){return e.value===c}))?l.find((function(e){return e.value===c})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(b.jsx)(d.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(b.jsx)("img",{src:p.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),t}(o.Component)},169:function(e,a,t){"use strict";t.r(a);var n=t(36),r=t(14),i=t.n(r),l=t(28),s=t(5),c=t(20),o=t(21),d=t(32),u=t(27),p=t(26),b=t(2),m=(t(552),t(495)),h=t(496),j=t(110),f=t(69),g=t(77),v=t(25),O=t(30),x=t(7),w=t(814),N=t.n(w),y=(t(853),t(851),t(151)),D=t(929),C=t.n(D),I=t(268),S=t.n(I),M=t(114),k=t(1),Y=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],F=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],L=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(e=a.call.apply(a,[this].concat(o))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1,errors:{}},e.validator=new C.a({messages:{email:"Invalid Email address"},element:function(e){return Object(k.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(d.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,a,t){return t.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(a,t){return a.replace("",e.helpers.toSentence(t))},required:!0}}}),e.validationRules=function(){return M.default.validators.dateValidation=function(e,a,t,n){var r=S()();r=(r=r.subtract(a,"years")).format("YYYY-MM-DD");var i=S()(e).format("YYYY-MM-DD");return S()(i).isBefore(r)?void 0:["^Trainer should be atleast 21 years old"]},{firstName:{presence:{allowEmpty:!1,message:"^First name is required"},format:{pattern:/^[A-Za-z ]+$/,flags:"i",message:"^First name must contain only letters and spaces"}},DOB:{presence:{allowEmpty:!1,message:"^Date of birth is required"},dateValidation:21},gender:{presence:{allowEmpty:!1,message:"^Gender is required"}},location:{presence:{allowEmpty:!1,message:"^Location is required"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}}}},e.validateFields=function(a){var t=Object(M.default)(a,e.validationRules());if(void 0!==t){Object(s.a)({},t);e.setState({errors:Object(s.a)(Object(s.a)({},e.state.errors),t)})}return!t},e.handleTrainerBackground=function(){var a=Object(l.a)(i.a.mark((function a(t){var n,r,l,s,c,o,d,u,p,b;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),n=e.state,r=n.dob,l=n.location,s=n.email,c=n.gender,o=n.websiteURL,d=n.phone,u=n.instagram,p=n.firstName,b={firstName:p,DOB:r,email:s,gender:c,phoneNumber:d.includes("+")?d:"+".concat(d),location:l,websiteLink:o,instagramProfile:u},e.validateFields(b)){a.next=5;break}return a.abrupt("return");case 5:e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(b).then((function(){e.setState({isLoading:!1}),x.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleInput=function(a){var t=a.target,r=t.value,i=t.name;e.setState(Object(n.a)({},i,r))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(a){e.setState({dob:a.DOB?a.DOB:"",location:a.location?a.location:"",email:a.email?a.email:"",gender:a.gender?a.gender:"",websiteURL:a.websiteLink?a.websiteLink:"",phone:a.phoneNumber?a.phoneNumber:"",instagram:a.instagramProfile?a.instagramProfile:"",firstName:a.firstName?a.firstName:""})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.dob,n=a.location,r=a.email,i=a.gender,l=a.websiteURL,s=a.phone,c=a.instagram,o=a.firstName,d=a.isLoading,u=a.errors,p=S()();return p=(p=p.subtract(21,"years")).format("YYYY-MM-DD"),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"container main",children:Object(k.jsxs)("div",{className:"wrapper_about",children:[Object(k.jsx)("h2",{children:"Tell us a little bit about you"}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"outter_form",children:Object(k.jsxs)("div",{className:"wrapper_inputs",children:[Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Name*"}),Object(k.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(a){return e.handleInput(a)},value:o,name:"firstName"}),u.firstName&&Object(k.jsx)("span",{children:u.firstName[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{className:"bg_down",children:"Location*"}),Object(k.jsx)("div",{className:"iconwrapper",children:Object(k.jsx)(y.NormalMultiSelect,{placeholder:"Select Your City",value:n,arrow:!0,name:"location",options:Y,handleChange:function(a){return e.handleInput(a)}})}),u.location&&Object(k.jsx)("span",{children:u.location[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Date of Birth*"}),Object(k.jsx)("input",{placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"},value:t,onChange:function(a){return e.handleInput(a)},name:"dob",min:"1900-01-01",max:p}),u.DOB&&Object(k.jsx)("span",{children:u.DOB[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Select Your Gender*"}),Object(k.jsx)("div",{className:"iconwrapper",children:Object(k.jsx)(y.NormalMultiSelect,{placeholder:"Select Gender",value:i,arrow:!0,name:"gender",options:F,handleChange:function(a){return e.handleInput(a)}})}),u.gender&&Object(k.jsx)("span",{children:u.gender[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Email*"}),Object(k.jsx)("input",{placeholder:"Email",type:"email",value:r,onChange:function(a){return e.handleInput(a)},name:"email"}),u.email&&Object(k.jsx)("span",{children:u.email[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Phone*"}),Object(k.jsx)(N.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:s,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(a){e.setState({phone:a})}}),u.phoneNumber&&Object(k.jsx)("span",{children:u.phoneNumber[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Website"}),Object(k.jsxs)("div",{className:"iconwrapper",children:[Object(k.jsx)("input",{placeholder:"Add your weblink",type:"text",value:l,name:"websiteURL",onChange:function(a){return e.handleInput(a)}}),Object(k.jsx)("img",{src:h.default,alt:"icon"})]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Instagram"}),Object(k.jsxs)("div",{className:"iconwrapper",children:[Object(k.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:c,name:"instagram",onChange:function(a){return e.handleInput(a)}}),Object(k.jsx)("img",{src:m.default,alt:"icon"})]})]}),Object(k.jsx)("div",{className:"submit_button",children:Object(k.jsx)("button",{type:"submit",onClick:function(a){return e.handleTrainerBackground(a)},disabled:d,className:"d-flex justify-content-center",children:d?"Loading...":Object(k.jsxs)(k.Fragment,{children:["Continue",Object(k.jsx)(j.default,{})]})})})]})}),Object(k.jsx)("img",{src:f.default,alt:"icon",className:"about_watermark"})]})})})}}]),t}(b.Component),_=Object(O.b)(null,(function(e){return Object(v.b)({updateTrainerDetailsApicall:g.updateTrainerDetailsApicall,getTrainerDetails:g.getTrainerDetails,trainerDetail:g.trainerDetail},e)}))(L);a.default=_},470:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/Drop Down 4.50302f8e.svg"},472:function(e,a,t){},495:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/Insta Icon.432b9d08.svg"},496:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/Web Icon.b0ff0aa9.svg"},552:function(e,a,t){}}]);