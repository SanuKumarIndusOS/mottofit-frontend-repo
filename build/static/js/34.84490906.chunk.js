(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[34,42,53,54,215,216,253,293,295,297,301,304,308,309,323,324,325],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return p}));var n=a(25),r=a(4),i=a(22),c=a(23),l=a(27),s=a(26),o=a(2),u=a(795),d=a(693),b=(a(397),a(396)),m=a(1),p=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,i=e.options,c=void 0===i?[]:i,l=e.value,s=void 0===l?"":l,o=e.name,p=void 0===o?"":o,j=e.placeholder,f=void 0===j?"Select":j,h=e.disabled,g=void 0!==h&&h,v=e.arrow,O=void 0!==v&&v,x=e.isReadOnly,y=void 0!==x&&x,w=e.label,N=void 0===w?"":w,S=e.isMulti,I=void 0!==S&&S,D=e.isClearable,C=void 0!==D&&D,k=e.isSearchable,A=void 0!==k&&k,M=e.isBoldLabel,_=void 0!==M&&M,Y=e.showArrow,F=void 0===Y||Y,L={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(r.a)(Object(r.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(n.a)(t,"height","100%"),Object(n.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var a=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(m.jsx)(m.Fragment,{children:y?Object(m.jsx)("p",{children:s}):Object(m.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(_?"mt-0":""),children:[""!==N?Object(m.jsx)("div",{children:Object(m.jsx)("label",{className:_?"mb-1 text-black-22":"font-weight-normal mb-1",children:N})}):null,Object(m.jsx)(d.a,{className:a,classNamePrefix:"Select",isDisabled:g,isClearable:C,isSearchable:A,name:p,options:c,onChange:this.handleChange,isMulti:I,showArrow:F,placeholder:f,styles:L,value:c&&c.length>0&&c.find((function(e){return e.value===s}))?c.find((function(e){return e.value===s})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(m.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(m.jsx)("img",{src:b.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),a}(o.Component)},123:function(e,t,a){"use strict";a.r(t);a(2),a(473);var n=a(462),r=a(468),i=a(467),c=a(466),l=a(465),s=a(461),o=a(460),u=a(1);t.default=function(){var e,t,a,d,b,m,p,j;return console.log("hihi",window.location.pathname),window.location.pathname.includes("/about")&&(e=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),a=Object(u.jsx)("img",{src:l.default,alt:"icon"}),d=Object(u.jsx)("img",{src:s.default,alt:"icon"}),b=Object(u.jsx)("img",{src:s.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"active",children:"About you"}),p=Object(u.jsx)("p",{className:"inactive",children:"Training background"}),j=Object(u.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/background")&&(e=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),a=Object(u.jsx)("img",{src:l.default,alt:"icon"}),d=Object(u.jsx)("img",{src:o.default,alt:"icon"}),b=Object(u.jsx)("img",{src:s.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"completed",children:"About you"}),p=Object(u.jsx)("p",{className:"active",children:"Training background"}),j=Object(u.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/availability")&&(e=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),a=Object(u.jsx)("img",{src:c.default,alt:"icon"}),d=Object(u.jsx)("img",{src:o.default,alt:"icon"}),b=Object(u.jsx)("img",{src:o.default,alt:"icon"}),m=Object(u.jsx)("p",{className:"completed",children:"About you"}),p=Object(u.jsx)("p",{className:"completed",children:"Training background"}),j=Object(u.jsx)("p",{className:"active",children:"Availability"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,m]}),d,Object(u.jsxs)("div",{className:"items",children:[t,p]}),b,Object(u.jsxs)("div",{className:"items",children:[a,j]})]})})})}},129:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(62),i=a.n(r),c=a(87),l=a(4),s=a(22),o=a(23),u=a(223),d=a(27),b=a(26),m=a(2),p=(a(484),a(401)),j=a(402),f=a(82),h=a(52),g=a(61),v=a(21),O=a(33),x=a(14),y=a(699),w=a.n(y),N=(a(733),a(728),a(114)),S=a(822),I=a.n(S),D=a(219),C=a.n(D),k=a(86),A=a(1),M=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],_=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],Y=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];return(e=t.call.apply(t,[this].concat(o))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1,errors:{}},e.validator=new I.a({messages:{email:"Invalid Email address"},element:function(e){return Object(A.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(u.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,t,a){return a.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(t,a){return t.replace("",e.helpers.toSentence(a))},required:!0}}}),e.validationRules=function(){return k.default.validators.dateValidation=function(e,t,a,n){var r=C()();r=(r=r.subtract(t,"years")).format("YYYY-MM-DD");var i=C()(e).format("YYYY-MM-DD");return C()(i).isBefore(r)?void 0:["^Trainer should be atleast 21 years old"]},{firstName:{presence:{allowEmpty:!1,message:"^First name is required"},format:{pattern:/^[A-Za-z ]+$/,flags:"i",message:"^First name must contain only letters and spaces"}},DOB:{presence:{allowEmpty:!1,message:"^Date of birth is required"},dateValidation:21},gender:{presence:{allowEmpty:!1,message:"^Gender is required"}},location:{presence:{allowEmpty:!1,message:"^Location is required"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0},phoneNumber:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}}}},e.validateFields=function(t){var a=Object(k.default)(t,e.validationRules());if(void 0!==a){Object(l.a)({},a);e.setState({errors:Object(l.a)(Object(l.a)({},e.state.errors),a)})}return!a},e.handleTrainerBackground=function(){var t=Object(c.a)(i.a.mark((function t(a){var n,r,c,l,s,o,u,d,b,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.dob,c=n.location,l=n.email,s=n.gender,o=n.websiteURL,u=n.phone,d=n.instagram,b=n.firstName,m={firstName:b,DOB:r,email:l,gender:s,phoneNumber:u.includes("+")?u:"+".concat(u),location:c,websiteLink:o,instagramProfile:d},e.validateFields(m)){t.next=5;break}return t.abrupt("return");case 5:e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(m).then((function(){e.setState({isLoading:!1}),x.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var a=t.target,r=a.value,i=a.name;e.setState(Object(n.a)({},i,r))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(t){e.setState({dob:t.DOB?t.DOB:"",location:t.location?t.location:"",email:t.email?t.email:"",gender:t.gender?t.gender:"",websiteURL:t.websiteLink?t.websiteLink:"",phone:t.phoneNumber?t.phoneNumber:"",instagram:t.instagramProfile?t.instagramProfile:"",firstName:t.firstName?t.firstName:""})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.dob,n=t.location,r=t.email,i=t.gender,c=t.websiteURL,l=t.phone,s=t.instagram,o=t.firstName,u=t.isLoading,d=t.errors,b=C()();return b=(b=b.subtract(21,"years")).format("YYYY-MM-DD"),Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"container main",children:Object(A.jsxs)("div",{className:"wrapper_about",children:[Object(A.jsx)("h2",{children:"Tell us a little bit about you"}),Object(A.jsx)("br",{}),Object(A.jsx)("div",{className:"outter_form",children:Object(A.jsxs)("div",{className:"wrapper_inputs",children:[Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Name*"}),Object(A.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(t){return e.handleInput(t)},value:o,name:"firstName"}),d.firstName&&Object(A.jsx)("span",{children:d.firstName[0]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{className:"bg_down",children:"Location*"}),Object(A.jsx)("div",{className:"iconwrapper",children:Object(A.jsx)(N.NormalMultiSelect,{placeholder:"Select Your City",value:n,arrow:!0,name:"location",options:M,handleChange:function(t){return e.handleInput(t)}})}),d.location&&Object(A.jsx)("span",{children:d.location[0]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Date of Birth*"}),Object(A.jsx)("input",{placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"},value:a,onChange:function(t){return e.handleInput(t)},name:"dob",min:"1900-01-01",max:b}),d.DOB&&Object(A.jsx)("span",{children:d.DOB[0]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Select Your Gender*"}),Object(A.jsx)("div",{className:"iconwrapper",children:Object(A.jsx)(N.NormalMultiSelect,{placeholder:"Select Gender",value:i,arrow:!0,name:"gender",options:_,handleChange:function(t){return e.handleInput(t)}})}),d.gender&&Object(A.jsx)("span",{children:d.gender[0]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Email*"}),Object(A.jsx)("input",{placeholder:"Email",type:"email",value:r,onChange:function(t){return e.handleInput(t)},name:"email"}),d.email&&Object(A.jsx)("span",{children:d.email[0]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Phone*"}),Object(A.jsx)(w.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:l,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(t){e.setState({phone:t})}}),d.phoneNumber&&Object(A.jsx)("span",{children:d.phoneNumber[0]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Website"}),Object(A.jsxs)("div",{className:"iconwrapper",children:[Object(A.jsx)("input",{placeholder:"Add your weblink",type:"text",value:c,name:"websiteURL",onChange:function(t){return e.handleInput(t)}}),Object(A.jsx)("img",{src:j.default,alt:"icon"})]})]}),Object(A.jsxs)("div",{className:"wrapper_innerInput",children:[Object(A.jsx)("label",{children:"Instagram"}),Object(A.jsxs)("div",{className:"iconwrapper",children:[Object(A.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:s,name:"instagram",onChange:function(t){return e.handleInput(t)}}),Object(A.jsx)("img",{src:p.default,alt:"icon"})]})]}),Object(A.jsx)("div",{className:"submit_button",children:Object(A.jsx)("button",{type:"submit",onClick:function(t){return e.handleTrainerBackground(t)},disabled:u,className:"d-flex justify-content-center",children:u?"Loading...":Object(A.jsxs)(A.Fragment,{children:["Continue",Object(A.jsx)(f.default,{})]})})})]})}),Object(A.jsx)("img",{src:h.default,alt:"icon",className:"about_watermark"})]})})})}}]),a}(m.Component),F=Object(O.b)(null,(function(e){return Object(v.b)({updateTrainerDetailsApicall:g.updateTrainerDetailsApicall,getTrainerDetails:g.getTrainerDetails,trainerDetail:g.trainerDetail},e)}))(Y);t.default=F},178:function(e,t,a){"use strict";a.r(t);a(2);var n=a(123),r=a(129),i=a(1);t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(n.default,{}),Object(i.jsx)(r.default,{})]})}},396:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},397:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},402:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},460:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow 1.2a75d61e.svg"},461:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow_active.75efc204.svg"},462:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Person Icon.aa227953.svg"},465:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule Slot Icon.21459896.svg"},466:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule_slot_active.29ee488e.svg"},467:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training Icon.d725d1c5.svg"},468:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training_active.ab622bf2.svg"},473:function(e,t,a){},484:function(e,t,a){},665:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(10);function r(e,t){if(null==e)return{};var a,r,i=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}},678:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},688:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(678);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},698:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},704:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return n}))},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(678);var r=a(688);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=34.84490906.chunk.js.map