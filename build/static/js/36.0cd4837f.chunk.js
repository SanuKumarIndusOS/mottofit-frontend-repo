(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[36,46,204,205,239,283,287,311],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"NormalMultiSelect",(function(){return h}));var a=n(18),r=n(3),i=n(16),l=n(17),o=n(20),c=n(19),s=n(2),u=n(697),d=n(655),p=(n(355),n(351)),b=n(1),h=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var n={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};n.target.value.push(t)})),e.props.handleChange(n)}else{var a={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(a)}},e.handleInputChange=function(t){var n={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"select-form-control w-100":t,i=e.options,l=void 0===i?[]:i,o=e.value,c=void 0===o?"":o,s=e.name,h=void 0===s?"":s,m=e.placeholder,f=void 0===m?"Select":m,j=e.disabled,v=void 0!==j&&j,O=e.arrow,g=void 0!==O&&O,x=e.isReadOnly,y=void 0!==x&&x,w=e.label,N=void 0===w?"":w,I=e.isMulti,C=void 0!==I&&I,S=e.isClearable,D=void 0!==S&&S,k=e.isSearchable,A=void 0!==k&&k,M=e.isBoldLabel,_=void 0!==M&&M,T=e.showArrow,Y=void 0===T||T,P={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},"height","100%"))},option:function(e,t){var n=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:n?"#53BFD2":"#fff",color:n?"#fff":"#000",fontSize:18,textAlign:"left"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45})}};return Object(b.jsx)(b.Fragment,{children:y?Object(b.jsx)("p",{children:c}):Object(b.jsxs)("div",{className:"".concat(g?"select-section w-100":"Select"," ").concat(_?"mt-0":""),children:[""!==N?Object(b.jsx)("div",{children:Object(b.jsx)("label",{className:_?"mb-1 text-black-22":"font-weight-normal mb-1",children:N})}):null,Object(b.jsx)(d.a,{className:n,classNamePrefix:"Select",isDisabled:v,isClearable:D,isSearchable:A,name:h,options:l,onChange:this.handleChange,isMulti:C,showArrow:Y,placeholder:f,styles:P,value:l&&l.length>0&&l.find((function(e){return e.value===c}))?l.find((function(e){return e.value===c})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(b.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(b.jsx)("img",{src:p.default,alt:"dropdown"})}))}}})]})})}}]),n}(s.Component)},111:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(49),i=n.n(r),l=n(71),o=n(16),c=n(17),s=n(192),u=n(20),d=n(19),p=n(2),b=(n(406),n(357)),h=n(358),m=n(69),f=n(43),j=n(50),v=n(27),O=n(34),g=n(14),x=n(663),y=n.n(x),w=(n(664),n(405),n(675),n(102)),N=n(792),I=n.n(N),C=n(35),S=n.n(C),D=n(1),k=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],A=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(e=t.call.apply(t,[this].concat(c))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:""},e.validator=new I.a({messages:{email:"Invalid Email address"},element:function(e){return Object(D.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(s.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,t,n){return n.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(t,n){return t.replace("",e.helpers.toSentence(n))},required:!0}}}),e.handleTrainerBackground=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,r,l,o,c,s,u,d,p,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=e.state,r=a.dob,l=a.location,o=a.email,c=a.gender,s=a.websiteURL,u=a.phone,d=a.instagram,p=a.firstName,b={firstName:p,DOB:r,email:o,gender:c,phone:u,location:l,websiteLink:s,instaHandle:d},e.validator.allValid()?e.props.updateTrainerDetailsApicall(b).then((function(){g.history.push("/trainer/background")})):(e.validator.showMessages(),e.forceUpdate());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var n=t.target,r=n.value,i=n.name;e.setState(Object(a.a)({},i,r))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(t){e.setState({dob:t.DOB||"",location:t.location||"",email:t.email||"",gender:t.gender||"",websiteURL:t.websiteLink||"",phone:t.phoneNumber||"",instagram:t.instagramProfile||"",firstName:t.firstName})}))}},{key:"render",value:function(){var e,t=this,n=this.state,r=n.dob,i=n.location,l=n.email,o=n.gender,c=n.websiteURL,s=n.phone,u=n.instagram,d=n.firstName;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"container main",children:Object(D.jsxs)("div",{className:"wrapper_about",children:[Object(D.jsx)("h2",{children:"Tell us a little bit about you"}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{className:"outter_form",children:Object(D.jsxs)("div",{className:"wrapper_inputs",children:[Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Name*"}),Object(D.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(e){return t.handleInput(e)},value:d,name:"firstName"}),this.validator.message("firstName",d,"required|alpha_space")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{className:"bg_down",children:"Location*"}),Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)(w.NormalMultiSelect,{placeholder:"Select Your City",value:i,arrow:!0,name:"location",options:k,handleChange:function(e){return t.handleInput(e)}}),this.validator.message("location",i,"required")]})]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Date of Birth*"}),Object(D.jsx)("input",(e={placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"}},Object(a.a)(e,"placeholder","MM/DD/YYYY"),Object(a.a)(e,"value",r),Object(a.a)(e,"onChange",(function(e){return t.handleInput(e)})),Object(a.a)(e,"name","dob"),e)),this.validator.message("dob",r,"required"),r&&S()().diff(r,"years",!1)<=21&&Object(D.jsx)("span",{children:"Trainer should be more than 21 years of age"})]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Select Your Gender*"}),Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)(w.NormalMultiSelect,{placeholder:"Select Gender",value:o,arrow:!0,name:"gender",options:A,handleChange:function(e){return t.handleInput(e)}}),this.validator.message("gender",o,"required")]})]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Email*"}),Object(D.jsx)("input",{placeholder:"Email",type:"email",value:l,onChange:function(e){return t.handleInput(e)},name:"email"}),this.validator.message("email",l,"required|email")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Phone*"}),Object(D.jsx)(y.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:s,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(e){t.setState({phone:e})}}),this.validator.message("phone",s,"required|phone")]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Website"}),Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{placeholder:"Add your weblink",type:"text",value:c,name:"websiteURL",onChange:function(e){return t.handleInput(e)}}),Object(D.jsx)("img",{src:h.default,alt:"icon"})]})]}),Object(D.jsxs)("div",{className:"wrapper_innerInput",children:[Object(D.jsx)("label",{children:"Instagram"}),Object(D.jsxs)("div",{className:"iconwrapper",children:[Object(D.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:u,name:"instagram",onChange:function(e){return t.handleInput(e)}}),Object(D.jsx)("img",{src:b.default,alt:"icon"})]})]}),Object(D.jsx)("div",{className:"submit_button",children:Object(D.jsxs)("button",{type:"submit",onClick:function(e){return t.handleTrainerBackground(e)},children:["Continue",Object(D.jsx)(m.default,{})]})})]})}),Object(D.jsx)("img",{src:f.default,alt:"icon",className:"about_watermark"})]})})})}}]),n}(p.Component),_=Object(O.b)(null,(function(e){return Object(v.b)({updateTrainerDetailsApicall:j.updateTrainerDetailsApicall,getTrainerDetails:j.getTrainerDetails,trainerDetail:j.trainerDetail},e)}))(M);t.default=_},351:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Drop Down 4.50302f8e.svg"},355:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Insta Icon.432b9d08.svg"},358:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Web Icon.b0ff0aa9.svg"},405:function(e,t,n){},406:function(e,t,n){},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12);function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},611:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},625:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(611);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},631:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},636:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},642:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(611);var r=n(625);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=36.0cd4837f.chunk.js.map