(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[32,37,47,51,205,206,207,241,281,283,285,289,292,296,297,311,312,313],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalMultiSelect",(function(){return j}));var n=a(18),r=a(3),i=a(16),c=a(17),l=a(20),s=a(19),o=a(2),u=a(700),d=a(658),b=(a(358),a(354)),p=a(1),j=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var a={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};a.target.value.push(t)})),e.props.handleChange(a)}else{var n={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(n)}},e.handleInputChange=function(t){var a={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(a)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"select-form-control w-100":t,i=e.options,c=void 0===i?[]:i,l=e.value,s=void 0===l?"":l,o=e.name,j=void 0===o?"":o,m=e.placeholder,f=void 0===m?"Select":m,h=e.disabled,g=void 0!==h&&h,v=e.arrow,O=void 0!==v&&v,x=e.isReadOnly,y=void 0!==x&&x,w=e.label,N=void 0===w?"":w,S=e.isMulti,I=void 0!==S&&S,C=e.isClearable,k=void 0!==C&&C,D=e.isSearchable,A=void 0!==D&&D,_=e.isBoldLabel,M=void 0!==_&&_,T=e.showArrow,L=void 0===T||T,P={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},"height","100%"))},option:function(e,t){var a=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:a?"#53BFD2":"#fff",color:a?"#fff":"#000",fontSize:18,textAlign:"left"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45})}};return Object(p.jsx)(p.Fragment,{children:y?Object(p.jsx)("p",{children:s}):Object(p.jsxs)("div",{className:"".concat(O?"select-section w-100":"Select"," ").concat(M?"mt-0":""),children:[""!==N?Object(p.jsx)("div",{children:Object(p.jsx)("label",{className:M?"mb-1 text-black-22":"font-weight-normal mb-1",children:N})}):null,Object(p.jsx)(d.a,{className:a,classNamePrefix:"Select",isDisabled:g,isClearable:k,isSearchable:A,name:j,options:c,onChange:this.handleChange,isMulti:I,showArrow:L,placeholder:f,styles:P,value:c&&c.length>0&&c.find((function(e){return e.value===s}))?c.find((function(e){return e.value===s})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(p.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(p.jsx)("img",{src:b.default,alt:"dropdown"})}))}}})]})})}}]),a}(o.Component)},104:function(e,t,a){"use strict";a.r(t);a(2),a(400);var n=a(389),r=a(395),i=a(394),c=a(393),l=a(392),s=a(388),o=a(387),u=a(1);t.default=function(){var e,t,a,d,b,p,j,m;return console.log("hihi",window.location.pathname),window.location.pathname.includes("/about")&&(e=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:i.default,alt:"icon"}),a=Object(u.jsx)("img",{src:l.default,alt:"icon"}),d=Object(u.jsx)("img",{src:s.default,alt:"icon"}),b=Object(u.jsx)("img",{src:s.default,alt:"icon"}),p=Object(u.jsx)("p",{className:"active",children:"About you"}),j=Object(u.jsx)("p",{className:"inactive",children:"Training background"}),m=Object(u.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/background")&&(e=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),a=Object(u.jsx)("img",{src:l.default,alt:"icon"}),d=Object(u.jsx)("img",{src:o.default,alt:"icon"}),b=Object(u.jsx)("img",{src:s.default,alt:"icon"}),p=Object(u.jsx)("p",{className:"completed",children:"About you"}),j=Object(u.jsx)("p",{className:"active",children:"Training background"}),m=Object(u.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/availability")&&(e=Object(u.jsx)("img",{src:n.default,alt:"icon"}),t=Object(u.jsx)("img",{src:r.default,alt:"icon"}),a=Object(u.jsx)("img",{src:c.default,alt:"icon"}),d=Object(u.jsx)("img",{src:o.default,alt:"icon"}),b=Object(u.jsx)("img",{src:o.default,alt:"icon"}),p=Object(u.jsx)("p",{className:"completed",children:"About you"}),j=Object(u.jsx)("p",{className:"completed",children:"Training background"}),m=Object(u.jsx)("p",{className:"active",children:"Availability"})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"tracker_main",children:Object(u.jsxs)("div",{className:"wrapper_item container",children:[Object(u.jsxs)("div",{className:"items",children:[e,p]}),d,Object(u.jsxs)("div",{className:"items",children:[t,j]}),b,Object(u.jsxs)("div",{className:"items",children:[a,m]})]})})})}},110:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(49),i=a.n(r),c=a(71),l=a(16),s=a(17),o=a(193),u=a(20),d=a(19),b=a(2),p=(a(409),a(360)),j=a(361),m=a(69),f=a(43),h=a(50),g=a(27),v=a(34),O=a(14),x=a(666),y=a.n(x),w=(a(667),a(408),a(678),a(101)),N=a(795),S=a.n(N),I=a(35),C=a.n(I),k=a(1),D=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],A=[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).state={dob:"",location:"",email:"",gender:"",websiteURL:"",phone:"",instagram:"",firstName:"",isLoading:!1},e.validator=new S.a({messages:{email:"Invalid Email address"},element:function(e){return Object(k.jsx)("span",{className:"error-message text-danger fs-14",children:e})},autoForceUpdate:Object(o.a)(e),validators:{email:{message:"must be a valid Email.",rule:function(e,t,a){return a.helpers.testRegex(e,/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)},messageReplace:function(t,a){return t.replace("",e.helpers.toSentence(a))},required:!0}}}),e.handleTrainerBackground=function(){var t=Object(c.a)(i.a.mark((function t(a){var n,r,c,l,s,o,u,d,b,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=e.state,r=n.dob,c=n.location,l=n.email,s=n.gender,o=n.websiteURL,u=n.phone,d=n.instagram,b=n.firstName,p={firstName:b,DOB:r,email:l,gender:s,phone:u,location:c,websiteLink:o,instaHandle:d},e.validator.allValid()?(e.setState({isLoading:!0}),e.props.updateTrainerDetailsApicall(p).then((function(){e.validator.hideMessages(),e.setState({isLoading:!1}),O.history.push("/trainer/background")})).catch((function(){e.setState({isLoading:!1})}))):(e.validator.showMessages(),e.forceUpdate());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var a=t.target,r=a.value,i=a.name;e.setState(Object(n.a)({},i,r))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.trainerDetail().then((function(t){e.setState({dob:t.DOB?t.DOB:"",location:t.location?t.location:"",email:t.email?t.email:"",gender:t.gender?t.gender:"",websiteURL:t.websiteLink?t.websiteLink:"",phone:t.phoneNumber?t.phoneNumber:"",instagram:t.instagramProfile?t.instagramProfile:"",firstName:t.firstName?t.firstName:""})}))}},{key:"render",value:function(){var e,t=this,a=this.state,r=a.dob,i=a.location,c=a.email,l=a.gender,s=a.websiteURL,o=a.phone,u=a.instagram,d=a.firstName,b=a.isLoading;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"container main",children:Object(k.jsxs)("div",{className:"wrapper_about",children:[Object(k.jsx)("h2",{children:"Tell us a little bit about you"}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"outter_form",children:Object(k.jsxs)("div",{className:"wrapper_inputs",children:[Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Name*"}),Object(k.jsx)("input",{placeholder:"Name",style:{textTransform:"capitalize"},onChange:function(e){return t.handleInput(e)},value:d,name:"firstName"}),this.validator.message("firstName",d,"required|alpha_space")]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{className:"bg_down",children:"Location*"}),Object(k.jsx)("div",{className:"iconwrapper",children:Object(k.jsx)(w.NormalMultiSelect,{placeholder:"Select Your City",value:i,arrow:!0,name:"location",options:D,handleChange:function(e){return t.handleInput(e)}})}),this.validator.message("location",i,"required")]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Date of Birth*"}),Object(k.jsx)("input",(e={placeholder:"DD/MM/YYYY",type:"date",onFocus:function(e){return e.currentTarget.type="date"}},Object(n.a)(e,"placeholder","MM/DD/YYYY"),Object(n.a)(e,"value",r),Object(n.a)(e,"onChange",(function(e){return t.handleInput(e)})),Object(n.a)(e,"name","dob"),Object(n.a)(e,"onKeyDown",(function(e){return 8!==e.keyCode?e.preventDefault():""})),e)),this.validator.message("dob",r,"required"),r&&C()().diff(r,"years",!1)<=21&&Object(k.jsx)("span",{children:"Trainer should be more than 21 years of age"})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Select Your Gender*"}),Object(k.jsx)("div",{className:"iconwrapper",children:Object(k.jsx)(w.NormalMultiSelect,{placeholder:"Select Gender",value:l,arrow:!0,name:"gender",options:A,handleChange:function(e){return t.handleInput(e)}})}),this.validator.message("gender",l,"required")]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Email*"}),Object(k.jsx)("input",{placeholder:"Email",type:"email",value:c,onChange:function(e){return t.handleInput(e)},name:"email"}),this.validator.message("email",c,"required|email")]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Phone*"}),Object(k.jsx)(y.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:o,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(e){t.setState({phone:e})}}),this.validator.message("phone",o,"required|phone")]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Website"}),Object(k.jsxs)("div",{className:"iconwrapper",children:[Object(k.jsx)("input",{placeholder:"Add your weblink",type:"text",value:s,name:"websiteURL",onChange:function(e){return t.handleInput(e)}}),Object(k.jsx)("img",{src:j.default,alt:"icon"})]})]}),Object(k.jsxs)("div",{className:"wrapper_innerInput",children:[Object(k.jsx)("label",{children:"Instagram"}),Object(k.jsxs)("div",{className:"iconwrapper",children:[Object(k.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:u,name:"instagram",onChange:function(e){return t.handleInput(e)}}),Object(k.jsx)("img",{src:p.default,alt:"icon"})]})]}),Object(k.jsx)("div",{className:"submit_button",children:Object(k.jsx)("button",{type:"submit",onClick:function(e){return t.handleTrainerBackground(e)},disabled:b,className:"d-flex justify-content-center",children:b?"Loading...":Object(k.jsxs)(k.Fragment,{children:["Continue",Object(k.jsx)(m.default,{})]})})})]})}),Object(k.jsx)("img",{src:f.default,alt:"icon",className:"about_watermark"})]})})})}}]),a}(b.Component),M=Object(v.b)(null,(function(e){return Object(g.b)({updateTrainerDetailsApicall:h.updateTrainerDetailsApicall,getTrainerDetails:h.getTrainerDetails,trainerDetail:h.trainerDetail},e)}))(_);t.default=M},159:function(e,t,a){"use strict";a.r(t);a(2);var n=a(104),r=a(110),i=a(1);t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(n.default,{}),Object(i.jsx)(r.default,{})]})}},354:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},358:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},361:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},387:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow 1.2a75d61e.svg"},388:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow_active.75efc204.svg"},389:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Person Icon.aa227953.svg"},392:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule Slot Icon.21459896.svg"},393:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule_slot_active.29ee488e.svg"},394:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training Icon.d725d1c5.svg"},395:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training_active.ab622bf2.svg"},400:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){},603:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(12);function r(e,t){if(null==e)return{};var a,r,i=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}},614:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},628:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(614);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},634:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},638:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return n}))},644:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(614);var r=a(628);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=32.0cf7dd3d.chunk.js.map