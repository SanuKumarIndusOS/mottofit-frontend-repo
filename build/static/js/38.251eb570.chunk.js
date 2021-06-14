(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[38,50,210,245,289,293,317],{113:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(51),i=n.n(r),o=n(74),l=n(15),c=n(16),s=n(199),u=n(19),d=n(18),b=n(2),p=(n(427),n(373)),h=n(374),m=n(71),f=n(44),j=n(50),v=n(26),g=n(37),O=n(17),y=n(674),x=n.n(y),w=(n(675),n(678),n(99)),N=n(816),S=n.n(N),I=n(196),C=n.n(I),D=n(1),M=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],k=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(e=t.call.apply(t,[this].concat(c))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1},e.validator=new S.a({messages:{email:"Invalid Email address"},element:function(e){return Object(D.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(s.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,t,n){return n.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(t,n){return t.replace("",e.helpers.toSentence(n))},required:!0}}}),e.handleTrainerBackground=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,r,o,l,c,s,u,d,b,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=e.state,r=a.dob,o=a.location,l=a.email,c=a.gender,s=a.websiteURL,u=a.phone,d=a.instagram,b=a.firstName,p={firstName:b,DOB:r,email:l,gender:c,phone:u,location:o,websiteLink:s,instagramProfile:d},e.validator.allValid()?(e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(p).then((function(){e.validator.hideMessages(),e.setState({isLoading:!1}),O.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}))):(e.validator.showMessages(),e.forceUpdate());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var n=t.target,r=n.value,i=n.name;e.setState(Object(a.a)({},i,r))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(t){e.setState({dob:t.DOB?t.DOB:"",location:t.location?t.location:"",email:t.email?t.email:"",gender:t.gender?t.gender:"",websiteURL:t.websiteLink?t.websiteLink:"",phone:t.phoneNumber?t.phoneNumber:"",instagram:t.instagramProfile?t.instagramProfile:"",firstName:t.firstName?t.firstName:""})}))}},{key:"render",value:function(){var e,t=this,n=this.state,r=n.dob,i=n.location,o=n.email,l=n.gender,c=n.websiteURL,s=n.phone,u=n.instagram,d=n.firstName,b=n.isLoading;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"container main",children:Object(D.jsxs)("div",{className:"wrapper_about",children:[Object(D.jsx)("h2",{children:"Tell us a little bit about you"}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{className:"outter_form",children:Object(D.jsxs)("div",{className:"wrapper_inputs",children:[Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Name*"}),Object(D.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(e){return t.handleInput(e)},value:d,name:"firstName"}),this.validator.message("firstName",d,"required|alpha_space")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{className:"bg_down",children:"Location*"}),Object(D.jsx)("div",{className:"iconwrapper",children:Object(D.jsx)(w.NormalMultiSelect,{placeholder:"Select Your City",value:i,arrow:!0,name:"location",options:M,handleChange:function(e){return t.handleInput(e)}})}),this.validator.message("location",i,"required")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Date of Birth*"}),Object(D.jsx)("input",(e={placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"}},Object(a.a)(e,"placeholder","MM/DD/YYYY"),Object(a.a)(e,"value",r),Object(a.a)(e,"onChange",(function(e){return t.handleInput(e)})),Object(a.a)(e,"name","dob"),Object(a.a)(e,"min","1900-01-01"),Object(a.a)(e,"max","2099-12-31"),e)),this.validator.message("dob",r,"required"),r&&C()().diff(r,"years",!1)<=21&&Object(D.jsx)("span",{children:"Trainer should be more than 21 years of age"})]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Select Your Gender*"}),Object(D.jsx)("div",{className:"iconwrapper",children:Object(D.jsx)(w.NormalMultiSelect,{placeholder:"Select Gender",value:l,arrow:!0,name:"gender",options:k,handleChange:function(e){return t.handleInput(e)}})}),this.validator.message("gender",l,"required")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Email*"}),Object(D.jsx)("input",{placeholder:"Email",type:"email",value:o,onChange:function(e){return t.handleInput(e)},name:"email"}),this.validator.message("email",o,"required|email")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Phone*"}),Object(D.jsx)(x.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:s,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(e){t.setState({phone:e})}}),this.validator.message("phone",s,"required|phone")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Website"}),Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{placeholder:"Add your weblink",type:"text",value:c,name:"websiteURL",onChange:function(e){return t.handleInput(e)}}),Object(D.jsx)("img",{src:h.default,alt:"icon"})]})]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Instagram"}),Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:u,name:"instagram",onChange:function(e){return t.handleInput(e)}}),Object(D.jsx)("img",{src:p.default,alt:"icon"})]})]}),Object(D.jsx)("div",{className:"submit_button",children:Object(D.jsx)("button",{type:"submit",onClick:function(e){return t.handleTrainerBackground(e)},disabled:b,className:"d-flex justify-content-center",children:b?"Loading...":Object(D.jsxs)(D.Fragment,{children:["Continue",Object(D.jsx)(m.default,{})]})})})]})}),Object(D.jsx)("img",{src:f.default,alt:"icon",className:"about_watermark"})]})})})}}]),n}(b.Component),_=Object(g.b)(null,(function(e){return Object(v.b)({updateTrainerDetailsApicall:j.updateTrainerDetailsApicall,getTrainerDetails:j.getTrainerDetails,trainerDetail:j.trainerDetail},e)}))(A);t.default=_},341:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Drop Down 4.50302f8e.svg"},342:function(e,t,n){},373:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Insta Icon.432b9d08.svg"},374:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Web Icon.b0ff0aa9.svg"},427:function(e,t,n){},606:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(13);function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},612:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},622:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(612);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},634:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},636:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},641:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(612);var r=n(622);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"NormalMultiSelect",(function(){return h}));var a=n(20),r=n(3),i=n(15),o=n(16),l=n(19),c=n(18),s=n(2),u=n(722),d=n(640),b=(n(342),n(341)),p=n(1),h=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var n={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};n.target.value.push(t)})),e.props.handleChange(n)}else{var a={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(a)}},e.handleInputChange=function(t){var n={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"select-form-control w-100":t,i=e.options,o=void 0===i?[]:i,l=e.value,c=void 0===l?"":l,s=e.name,h=void 0===s?"":s,m=e.placeholder,f=void 0===m?"Select":m,j=e.disabled,v=void 0!==j&&j,g=e.arrow,O=void 0!==g&&g,y=e.isReadOnly,x=void 0!==y&&y,w=e.label,N=void 0===w?"":w,S=e.isMulti,I=void 0!==S&&S,C=e.isClearable,D=void 0!==C&&C,M=e.isSearchable,k=void 0!==M&&M,A=e.isBoldLabel,_=void 0!==A&&A,L=e.showArrow,F=void 0===L||L,P={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(r.a)(Object(r.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(a.a)(t,"height","100%"),Object(a.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var n=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:n?"#53BFD2":"#fff",color:n?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(p.jsx)(p.Fragment,{children:x?Object(p.jsx)("p",{children:c}):Object(p.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(_?"mt-0":""),children:[""!==N?Object(p.jsx)("div",{children:Object(p.jsx)("label",{className:_?"mb-1 text-black-22":"font-weight-normal mb-1",children:N})}):null,Object(p.jsx)(d.a,{className:n,classNamePrefix:"Select",isDisabled:v,isClearable:D,isSearchable:k,name:h,options:o,onChange:this.handleChange,isMulti:I,showArrow:F,placeholder:f,styles:P,value:o&&o.length>0&&o.find((function(e){return e.value===c}))?o.find((function(e){return e.value===c})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(p.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(p.jsx)("img",{src:b.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),n}(s.Component)}}]);
//# sourceMappingURL=38.251eb570.chunk.js.map