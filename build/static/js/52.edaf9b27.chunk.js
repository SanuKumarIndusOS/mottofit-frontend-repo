(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[52,82,202,237,281,285,309],{111:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t(49),i=t.n(r),l=t(71),c=t(15),s=t(16),o=t(197),d=t(19),u=t(18),p=t(2),b=(t(409),t(363)),h=t(364),m=t(70),j=t(43),f=t(50),v=t(27),g=t(34),O=t(20),x=t(662),w=t.n(x),N=(t(663),t(675),t(99)),y=t(792),C=t.n(y),I=t(41),D=t.n(I),S=t(1),k=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],M=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],L=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];return(e=a.call.apply(a,[this].concat(s))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1},e.validator=new C.a({messages:{email:"Invalid Email address"},element:function(e){return Object(S.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(o.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,a,t){return t.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(a,t){return a.replace("",e.helpers.toSentence(t))},required:!0}}}),e.handleTrainerBackground=function(){var a=Object(l.a)(i.a.mark((function a(t){var n,r,l,c,s,o,d,u,p,b;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n=e.state,r=n.dob,l=n.location,c=n.email,s=n.gender,o=n.websiteURL,d=n.phone,u=n.instagram,p=n.firstName,b={firstName:p,DOB:r,email:c,gender:s,phone:d,location:l,websiteLink:o,instaHandle:u},e.validator.allValid()?(e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(b).then((function(){e.validator.hideMessages(),e.setState({isLoading:!1}),O.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}))):(e.validator.showMessages(),e.forceUpdate());case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleInput=function(a){var t=a.target,r=t.value,i=t.name;e.setState(Object(n.a)({},i,r))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(a){e.setState({dob:a.DOB?a.DOB:"",location:a.location?a.location:"",email:a.email?a.email:"",gender:a.gender?a.gender:"",websiteURL:a.websiteLink?a.websiteLink:"",phone:a.phoneNumber?a.phoneNumber:"",instagram:a.instagramProfile?a.instagramProfile:"",firstName:a.firstName?a.firstName:""})}))}},{key:"render",value:function(){var e,a=this,t=this.state,r=t.dob,i=t.location,l=t.email,c=t.gender,s=t.websiteURL,o=t.phone,d=t.instagram,u=t.firstName,p=t.isLoading;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:"container main",children:Object(S.jsxs)("div",{className:"wrapper_about",children:[Object(S.jsx)("h2",{children:"Tell us a little bit about you"}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"outter_form",children:Object(S.jsxs)("div",{className:"wrapper_inputs",children:[Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Name*"}),Object(S.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(e){return a.handleInput(e)},value:u,name:"firstName"}),this.validator.message("firstName",u,"required|alpha_space")]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{className:"bg_down",children:"Location*"}),Object(S.jsx)("div",{className:"iconwrapper",children:Object(S.jsx)(N.NormalMultiSelect,{placeholder:"Select Your City",value:i,arrow:!0,name:"location",options:k,handleChange:function(e){return a.handleInput(e)}})}),this.validator.message("location",i,"required")]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Date of Birth*"}),Object(S.jsx)("input",(e={placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"}},Object(n.a)(e,"placeholder","MM/DD/YYYY"),Object(n.a)(e,"value",r),Object(n.a)(e,"onChange",(function(e){return a.handleInput(e)})),Object(n.a)(e,"name","dob"),Object(n.a)(e,"onKeyDown",(function(e){return 8!==e.keyCode?e.preventDefault():""})),e)),this.validator.message("dob",r,"required"),r&&D()().diff(r,"years",!1)<=21&&Object(S.jsx)("span",{children:"Trainer should be more than 21 years of age"})]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Select Your Gender*"}),Object(S.jsx)("div",{className:"iconwrapper",children:Object(S.jsx)(N.NormalMultiSelect,{placeholder:"Select Gender",value:c,arrow:!0,name:"gender",options:M,handleChange:function(e){return a.handleInput(e)}})}),this.validator.message("gender",c,"required")]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Email*"}),Object(S.jsx)("input",{placeholder:"Email",type:"email",value:l,onChange:function(e){return a.handleInput(e)},name:"email"}),this.validator.message("email",l,"required|email")]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Phone*"}),Object(S.jsx)(w.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:o,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(e){a.setState({phone:e})}}),this.validator.message("phone",o,"required|phone")]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Website"}),Object(S.jsxs)("div",{className:"iconwrapper",children:[Object(S.jsx)("input",{placeholder:"Add your weblink",type:"text",value:s,name:"websiteURL",onChange:function(e){return a.handleInput(e)}}),Object(S.jsx)("img",{src:h.default,alt:"icon"})]})]}),Object(S.jsxs)("div",{className:"wrapper_innerInput",children:[Object(S.jsx)("label",{children:"Instagram"}),Object(S.jsxs)("div",{className:"iconwrapper",children:[Object(S.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:d,name:"instagram",onChange:function(e){return a.handleInput(e)}}),Object(S.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(S.jsx)("div",{className:"submit_button",children:Object(S.jsx)("button",{type:"submit",onClick:function(e){return a.handleTrainerBackground(e)},disabled:p,className:"d-flex justify-content-center",children:p?"Loading...":Object(S.jsxs)(S.Fragment,{children:["Continue",Object(S.jsx)(m.default,{})]})})})]})}),Object(S.jsx)("img",{src:j.default,alt:"icon",className:"about_watermark"})]})})})}}]),t}(p.Component),_=Object(g.b)(null,(function(e){return Object(v.b)({updateTrainerDetailsApicall:f.updateTrainerDetailsApicall,getTrainerDetails:f.getTrainerDetails,trainerDetail:f.trainerDetail},e)}))(L);a.default=_},335:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/Drop Down 4.50302f8e.svg"},336:function(e,a,t){},363:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/Insta Icon.432b9d08.svg"},364:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/Web Icon.b0ff0aa9.svg"},409:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a),t.d(a,"NormalMultiSelect",(function(){return h}));var n=t(17),r=t(3),i=t(15),l=t(16),c=t(19),s=t(18),o=t(2),d=t(704),u=t(627),p=(t(336),t(335)),b=t(1),h=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleChange=function(a){if(e.props.isMulti){var t={target:{name:e.props.name,value:[]}};a&&a.length&&a.forEach((function(e){var a={value:e.value,label:e.label};t.target.value.push(a)})),e.props.handleChange(t)}else{var n={target:{name:e.props.name,value:a?a.value:"",label:a?a.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(a){var t={target:{name:e.props.name,value:a||""}};e.props.handleinputChange&&e.props.handleinputChange(t)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=void 0===a?"select-form-control w-100":a,i=e.options,l=void 0===i?[]:i,c=e.value,s=void 0===c?"":c,o=e.name,h=void 0===o?"":o,m=e.placeholder,j=void 0===m?"Select":m,f=e.disabled,v=void 0!==f&&f,g=e.arrow,O=void 0!==g&&g,x=e.isReadOnly,w=void 0!==x&&x,N=e.label,y=void 0===N?"":N,C=e.isMulti,I=void 0!==C&&C,D=e.isClearable,S=void 0!==D&&D,k=e.isSearchable,M=void 0!==k&&k,L=e.isBoldLabel,_=void 0!==L&&L,F=e.showArrow,Y=void 0===F||F,A={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var a;return Object(r.a)(Object(r.a)({},e),{},(a={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(a,"height","100%"),Object(n.a)(a,"fontFamily","Montserrat"),a))},option:function(e,a){var t=a.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:t?"#53BFD2":"#fff",color:t?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(b.jsx)(b.Fragment,{children:w?Object(b.jsx)("p",{children:s}):Object(b.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(_?"mt-0":""),children:[""!==y?Object(b.jsx)("div",{children:Object(b.jsx)("label",{className:_?"mb-1 text-black-22":"font-weight-normal mb-1",children:y})}):null,Object(b.jsx)(u.a,{className:t,classNamePrefix:"Select",isDisabled:v,isClearable:S,isSearchable:M,name:h,options:l,onChange:this.handleChange,isMulti:I,showArrow:Y,placeholder:j,styles:A,value:l&&l.length>0&&l.find((function(e){return e.value===s}))?l.find((function(e){return e.value===s})):null,components:{DropdownIndicator:function(e){return d.l.DropdownIndicator&&Object(b.jsx)(d.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(b.jsx)("img",{src:p.default,alt:"dropdown"})}))}}})]})})}}]),t}(o.Component)}}]);
//# sourceMappingURL=52.edaf9b27.chunk.js.map