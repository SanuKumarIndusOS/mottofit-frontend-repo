(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[42,53,216,253,297,301,325],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"NormalMultiSelect",(function(){return m}));var a=n(25),r=n(4),i=n(22),o=n(23),l=n(27),c=n(26),s=n(2),u=n(795),d=n(693),p=(n(397),n(396)),b=n(1),m=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var n={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};n.target.value.push(t)})),e.props.handleChange(n)}else{var a={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(a)}},e.handleInputChange=function(t){var n={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"select-form-control w-100":t,i=e.options,o=void 0===i?[]:i,l=e.value,c=void 0===l?"":l,s=e.name,m=void 0===s?"":s,f=e.placeholder,h=void 0===f?"Select":f,j=e.disabled,v=void 0!==j&&j,g=e.arrow,O=void 0!==g&&g,y=e.isReadOnly,x=void 0!==y&&y,w=e.label,N=void 0===w?"":w,S=e.isMulti,I=void 0!==S&&S,D=e.isClearable,C=void 0!==D&&D,M=e.isSearchable,k=void 0!==M&&M,Y=e.isBoldLabel,A=void 0!==Y&&Y,F=e.showArrow,L=void 0===F||F,_={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(r.a)(Object(r.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(a.a)(t,"height","100%"),Object(a.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var n=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:n?"#53BFD2":"#fff",color:n?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(b.jsx)(b.Fragment,{children:x?Object(b.jsx)("p",{children:c}):Object(b.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(A?"mt-0":""),children:[""!==N?Object(b.jsx)("div",{children:Object(b.jsx)("label",{className:A?"mb-1 text-black-22":"font-weight-normal mb-1",children:N})}):null,Object(b.jsx)(d.a,{className:n,classNamePrefix:"Select",isDisabled:v,isClearable:C,isSearchable:k,name:m,options:o,onChange:this.handleChange,isMulti:I,showArrow:L,placeholder:h,styles:_,value:o&&o.length>0&&o.find((function(e){return e.value===c}))?o.find((function(e){return e.value===c})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(b.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(b.jsx)("img",{src:p.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),n}(s.Component)},129:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(62),i=n.n(r),o=n(87),l=n(4),c=n(22),s=n(23),u=n(223),d=n(27),p=n(26),b=n(2),m=(n(484),n(401)),f=n(402),h=n(82),j=n(52),v=n(61),g=n(21),O=n(33),y=n(14),x=n(699),w=n.n(x),N=(n(733),n(728),n(114)),S=n(822),I=n.n(S),D=n(219),C=n.n(D),M=n(86),k=n(1),Y=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],A=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],F=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];return(e=t.call.apply(t,[this].concat(s))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1,errors:{}},e.validator=new I.a({messages:{email:"Invalid Email address"},element:function(e){return Object(k.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(u.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,t,n){return n.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(t,n){return t.replace("",e.helpers.toSentence(n))},required:!0}}}),e.validationRules=function(){return M.default.validators.dateValidation=function(e,t,n,a){var r=C()();r=(r=r.subtract(t,"years")).format("YYYY-MM-DD");var i=C()(e).format("YYYY-MM-DD");return C()(i).isBefore(r)?void 0:["^Trainer should be atleast 21 years old"]},{firstName:{presence:{allowEmpty:!1,message:"^First name is required"},format:{pattern:/^[A-Za-z ]+$/,flags:"i",message:"^First name must contain only letters and spaces"}},DOB:{presence:{allowEmpty:!1,message:"^Date of birth is required"},dateValidation:21},gender:{presence:{allowEmpty:!1,message:"^Gender is required"}},location:{presence:{allowEmpty:!1,message:"^Location is required"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}}}},e.validateFields=function(t){var n=Object(M.default)(t,e.validationRules());if(void 0!==n){Object(l.a)({},n);e.setState({errors:Object(l.a)(Object(l.a)({},e.state.errors),n)})}return!n},e.handleTrainerBackground=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,r,o,l,c,s,u,d,p,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.dob,o=a.location,l=a.email,c=a.gender,s=a.websiteURL,u=a.phone,d=a.instagram,p=a.firstName,b={firstName:p,DOB:r,email:l,gender:c,phoneNumber:u.includes("+")?u:"+".concat(u),location:o,websiteLink:s,instagramProfile:d},e.validateFields(b)){t.next=5;break}return t.abrupt("return");case 5:e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(b).then((function(){e.setState({isLoading:!1}),y.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var n=t.target,r=n.value,i=n.name;e.setState(Object(a.a)({},i,r))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(t){e.setState({dob:t.DOB?t.DOB:"",location:t.location?t.location:"",email:t.email?t.email:"",gender:t.gender?t.gender:"",websiteURL:t.websiteLink?t.websiteLink:"",phone:t.phoneNumber?t.phoneNumber:"",instagram:t.instagramProfile?t.instagramProfile:"",firstName:t.firstName?t.firstName:""})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.dob,a=t.location,r=t.email,i=t.gender,o=t.websiteURL,l=t.phone,c=t.instagram,s=t.firstName,u=t.isLoading,d=t.errors,p=C()();return p=(p=p.subtract(21,"years")).format("YYYY-MM-DD"),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"container main",children:Object(k.jsxs)("div",{className:"wrapper_about",children:[Object(k.jsx)("h2",{children:"Tell us a little bit about you"}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"outter_form",children:Object(k.jsxs)("div",{className:"wrapper_inputs",children:[Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Name*"}),Object(k.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(t){return e.handleInput(t)},value:s,name:"firstName"}),d.firstName&&Object(k.jsx)("span",{children:d.firstName[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{className:"bg_down",children:"Location*"}),Object(k.jsx)("div",{className:"iconwrapper",children:Object(k.jsx)(N.NormalMultiSelect,{placeholder:"Select Your City",value:a,arrow:!0,name:"location",options:Y,handleChange:function(t){return e.handleInput(t)}})}),d.location&&Object(k.jsx)("span",{children:d.location[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Date of Birth*"}),Object(k.jsx)("input",{placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"},value:n,onChange:function(t){return e.handleInput(t)},name:"dob",min:"1900-01-01",max:p}),d.DOB&&Object(k.jsx)("span",{children:d.DOB[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Select Your Gender*"}),Object(k.jsx)("div",{className:"iconwrapper",children:Object(k.jsx)(N.NormalMultiSelect,{placeholder:"Select Gender",value:i,arrow:!0,name:"gender",options:A,handleChange:function(t){return e.handleInput(t)}})}),d.gender&&Object(k.jsx)("span",{children:d.gender[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Email*"}),Object(k.jsx)("input",{placeholder:"Email",type:"email",value:r,onChange:function(t){return e.handleInput(t)},name:"email"}),d.email&&Object(k.jsx)("span",{children:d.email[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Phone*"}),Object(k.jsx)(w.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:l,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(t){e.setState({phone:t})}}),d.phoneNumber&&Object(k.jsx)("span",{children:d.phoneNumber[0]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Website"}),Object(k.jsxs)("div",{className:"iconwrapper",children:[Object(k.jsx)("input",{placeholder:"Add your weblink",type:"text",value:o,name:"websiteURL",onChange:function(t){return e.handleInput(t)}}),Object(k.jsx)("img",{src:f.default,alt:"icon"})]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Instagram"}),Object(k.jsxs)("div",{className:"iconwrapper",children:[Object(k.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:c,name:"instagram",onChange:function(t){return e.handleInput(t)}}),Object(k.jsx)("img",{src:m.default,alt:"icon"})]})]}),Object(k.jsx)("div",{className:"submit_button",children:Object(k.jsx)("button",{type:"submit",onClick:function(t){return e.handleTrainerBackground(t)},disabled:u,className:"d-flex justify-content-center",children:u?"Loading...":Object(k.jsxs)(k.Fragment,{children:["Continue",Object(k.jsx)(h.default,{})]})})})]})}),Object(k.jsx)("img",{src:j.default,alt:"icon",className:"about_watermark"})]})})})}}]),n}(b.Component),L=Object(O.b)(null,(function(e){return Object(g.b)({updateTrainerDetailsApicall:v.updateTrainerDetailsApicall,getTrainerDetails:v.getTrainerDetails,trainerDetail:v.trainerDetail},e)}))(F);t.default=L},396:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Drop Down 4.50302f8e.svg"},397:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Insta Icon.432b9d08.svg"},402:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Web Icon.b0ff0aa9.svg"},484:function(e,t,n){},665:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10);function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},678:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},688:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(678);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},698:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},704:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(678);var r=n(688);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=42.8a3fe858.chunk.js.map