(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[107,53,243,252,296,305,306],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"NormalMultiSelect",(function(){return f}));var a=n(25),r=n(4),i=n(22),c=n(23),o=n(27),l=n(26),s=n(2),u=n(790),d=n(688),b=(n(392),n(391)),p=n(1),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){if(e.props.isMulti){var n={target:{name:e.props.name,value:[]}};t&&t.length&&t.forEach((function(e){var t={value:e.value,label:e.label};n.target.value.push(t)})),e.props.handleChange(n)}else{var a={target:{name:e.props.name,value:t?t.value:"",label:t?t.label:""}};e.props.handleChange(a)}},e.handleInputChange=function(t){var n={target:{name:e.props.name,value:t||""}};e.props.handleinputChange&&e.props.handleinputChange(n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"select-form-control w-100":t,i=e.options,c=void 0===i?[]:i,o=e.value,l=void 0===o?"":o,s=e.name,f=void 0===s?"":s,m=e.placeholder,j=void 0===m?"Select":m,h=e.disabled,O=void 0!==h&&h,v=e.arrow,g=void 0!==v&&v,x=e.isReadOnly,y=void 0!==x&&x,N=e.label,w=void 0===N?"":N,S=e.isMulti,C=void 0!==S&&S,D=e.isClearable,P=void 0!==D&&D,_=e.isSearchable,k=void 0!==_&&_,M=e.isBoldLabel,A=void 0!==M&&M,E=e.showArrow,F=void 0===E||E,I={placeholder:function(e){return Object(r.a)(Object(r.a)({},e),{},{fontSize:18,color:"#000",fontWeight:500,lineHeight:38,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontFamily:"Montserrat"})},indicatorSeparator:function(e){return Object(r.a)(Object(r.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(r.a)(Object(r.a)({},e),{},{padding:"0px 20px",fontSize:18,color:"#000",fontWeight:500,lineHeight:38,height:"100%",fontFamily:"Montserrat"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"#000",fontWeight:500})},dropdownIndicator:function(e){var t;return Object(r.a)(Object(r.a)({},e),{},(t={padding:0,height:"26px",width:"26px",color:"black",display:"flex",justifyContent:"center",alignItems:"center"},Object(a.a)(t,"height","100%"),Object(a.a)(t,"fontFamily","Montserrat"),t))},option:function(e,t){var n=t.isFocused;return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:n?"#53BFD2":"#fff",color:n?"#fff":"#000",fontSize:18,textAlign:"left",fontFamily:"Montserrat"})},control:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:50,border:"2px solid #bcbcbc",boxShadow:"0 0 !important",outline:"0 ",background:"white",height:45,minHeight:45,fontFamily:"Montserrat"})}};return Object(p.jsx)(p.Fragment,{children:y?Object(p.jsx)("p",{children:l}):Object(p.jsxs)("div",{className:"".concat(g?"select-section w-100":"Select"," ").concat(A?"mt-0":""),children:[""!==w?Object(p.jsx)("div",{children:Object(p.jsx)("label",{className:A?"mb-1 text-black-22":"font-weight-normal mb-1",children:w})}):null,Object(p.jsx)(d.a,{className:n,classNamePrefix:"Select",isDisabled:O,isClearable:P,isSearchable:k,name:f,options:c,onChange:this.handleChange,isMulti:C,showArrow:F,placeholder:j,styles:I,value:c&&c.length>0&&c.find((function(e){return e.value===l}))?c.find((function(e){return e.value===l})):null,components:{DropdownIndicator:function(e){return u.l.DropdownIndicator&&Object(p.jsx)(u.l.DropdownIndicator,Object(r.a)(Object(r.a)({},e),{},{children:Object(p.jsx)("img",{src:b.default,alt:"dropdown",className:"dd_icon"})}))}}})]})})}}]),n}(s.Component)},291:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(4),i=n(14),c=n(2),o=(n(553),n(457)),l=n(456),s=n(50),u=n(694),d=n.n(u),b=(n(728),n(38)),p=n(21),f=n(33),m=n(111),j=n(85),h=n(15),O=n(61),v=n(84),g=n(215),x=n.n(g),y=n(83),N=n(40),w=n(1),S=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],C=[{value:"Male",label:"Male"},{value:"Female",label:"Female"}],D=Object(f.b)(null,(function(e){return Object(p.b)({getUserDetailApi:b.getUserDetail,fileUploadApi:O.fileUpload},e)}))((function(e){var t=e.getUserDetailApi,n=e.fileUploadApi,u=Object(c.useState)({firstName:"",lastName:"",email:"",phoneNo:"",paymentProfileId:"",mottoPasses:"",signUpType:"email"}),b=Object(i.a)(u,2),p=b[0],f=b[1],O=Object(c.useState)({}),g=Object(i.a)(O,2),D=g[0],P=g[1],_=Object(c.useState)(null),k=Object(i.a)(_,2),M=k[0],A=k[1],E=Object(c.useState)(""),F=Object(i.a)(E,2),I=F[0],B=F[1],L=Object(c.useRef)();function U(){t().then((function(e){e.profilePicture&&A(e.profilePicture);var t={firstName:e.firstName||"",lastName:e.lastName||"",email:e.email||"",phoneNo:e.phoneNo||"",paymentProfileId:e.paymentProfileId||"",mottoPasses:e.mottoPasses||"",location:e.location||"",gender:e.gender||"",DOB:e.DOB||"",signUpType:"email"};f(t)})).catch((function(e){Object(N.Toast)({type:"success",message:e.message||"Error"})}))}Object(c.useEffect)((function(){U(),function(){var e=h.PaymentApi.getPaymentMethods;Object(v.api)(Object(r.a)({},e)).then((function(e){var t=(e.data[0]||{}).type;B(t)}))}()}),[]);var R=function(e){var t=e.target||e||{},n=t.name,a=t.value,i=Object(r.a)({},D);i[n]=void 0;var c=Object(r.a)({},p);c[n]=a,f(Object(r.a)({},c)),P(Object(r.a)(Object(r.a)({},D),i))},Y=function(e){var t=Object(j.default)(e,function(){var e,t={format:{pattern:/^[a-zA-Z ]*$/,flags:"i",message:"must be alphabets and spaces"},length:{minimum:3,tooShort:"must contain alteast 3 character",maximum:35,tooLong:"must contain less than 35 character"}};return e={firstName:Object(r.a)({presence:{allowEmpty:!1,message:"^First name is required"}},t),location:Object(r.a)({presence:{allowEmpty:!1,message:"^Location is required"}},t),phoneNo:{presence:{allowEmpty:!1,message:"^Phone number is required"},length:{minimum:8,tooShort:"^Invalid number",maximum:15,tooLong:"^Invalid number"}},email:{presence:{allowEmpty:!1,message:"^Email is required"},email:!0}},Object(a.a)(e,"location",{presence:{allowEmpty:!1,message:"^Location is required"}}),Object(a.a)(e,"gender",{presence:{allowEmpty:!1,message:"^Gender is required"}}),Object(a.a)(e,"DOB",{presence:{allowEmpty:!1,message:"^Date of birth is required"}}),e}());if(void 0!==t){var n=Object(r.a)({},t);P(Object(r.a)(Object(r.a)({},n),t))}return Object(y.findDatesValid)(e.DOB)||((t={}).DOB=["Date should be after 1900 and before 2099"],P(Object(r.a)(Object(r.a)({},D),t))),!t},q=x()().format("YYYY-MM-DD");return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"myprofile_outter_container",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"myprofile_inner_container",children:[Object(w.jsx)("div",{className:"myprofile_header",children:Object(w.jsx)("h2",{children:"My Profile"})}),Object(w.jsxs)("div",{className:"profile_wrapper",children:[Object(w.jsxs)("div",{className:"profile_grid",children:[Object(w.jsx)("div",{className:"profile_pic_col",children:Object(w.jsxs)("div",{className:"profile_picture",children:[M?Object(w.jsxs)("div",{className:"combin_profile",children:[Object(w.jsx)("button",{onClick:function(e){e.preventDefault(),L.current.click()},children:Object(w.jsx)("img",{src:M||o.default,alt:"icon",style:{objectFit:"cover",width:"200px",height:"200px",borderRadius:"100px",position:"relative",left:"-6px",top:"-2px"}})}),Object(w.jsx)("img",{src:l.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),L.current.click()}})]}):Object(w.jsxs)("div",{className:"combin_profile",children:[Object(w.jsx)("button",{onClick:function(e){e.preventDefault(),L.current.click()},children:Object(w.jsx)("img",{src:o.default,style:{objectFit:"cover",width:"100px",height:"100px",borderRadius:"100px"}})}),Object(w.jsx)("img",{src:l.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),L.current.click()}})]}),Object(w.jsx)("input",{type:"file",ref:L,accept:"image/*",onChange:function(e){return function(e){var t=e.target.files[0];if(t){var a=new FormData;a.append("profilePicture",t),n(a).then((function(e){A(e.urlPath)}))}}(e)}}),Object(w.jsx)("h5",{className:"cursor-pointer",onClick:function(){A(null)},children:"Remove Profile Picture"})]})}),Object(w.jsx)("div",{className:"profile_form_col",children:Object(w.jsx)("div",{className:"outter_profile_form",children:Object(w.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(w.jsxs)("div",{className:"inner_profile_form",children:[Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Name "}),Object(w.jsx)("input",{type:"text",value:p.firstName,onChange:R,name:"firstName"}),D.firstName&&Object(w.jsx)("span",{className:"d-block w-100 text-danger fs-14",children:D.firstName[0]})]}),Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Location "}),Object(w.jsx)(m.NormalMultiSelect,{placeholder:"Select Your City",value:p.location,arrow:!0,name:"location",options:S,handleChange:R}),D.location&&Object(w.jsx)("span",{className:"d-block w-100 text-danger fs-14",children:D.location[0]})]}),Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Date of Birth "}),Object(w.jsx)("input",{type:"date",value:p.DOB,min:"1900-01-01",max:q,name:"DOB",onChange:R}),D.DOB&&Object(w.jsx)("span",{className:"d-block w-100 text-danger fs-14",children:D.DOB[0]})]}),Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Gender "}),Object(w.jsx)(m.NormalMultiSelect,{placeholder:"Select Your Gender",value:p.gender,arrow:!0,name:"gender",options:C,handleChange:R}),D.gender&&Object(w.jsx)("span",{className:"d-block w-100 text-danger fs-14",children:D.gender[0]})]}),Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Email "}),Object(w.jsx)("input",{type:"text",value:p.email,onChange:R,name:"email"}),D.email&&Object(w.jsx)("span",{className:"d-block w-100 text-danger fs-14",children:D.email[0]})]}),Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Phone "}),Object(w.jsx)(d.a,{type:"phone",disableDropdown:!0,countryCodeEditable:!0,value:p.phoneNo,placeholder:"Phone Number",country:"us",inputProps:{name:"phoneNo"},name:"phoneNo",onChange:function(e){return R({target:{name:"phoneNo",value:e}})}}),D.phoneNo&&Object(w.jsx)("span",{className:"d-block w-100 text-danger fs-14",children:D.phoneNo[0]})]}),Object(w.jsxs)("div",{className:"input_profile",children:[Object(w.jsx)("label",{children:"Payment Method "}),Object(w.jsx)("input",{type:"text",value:I,disabled:!0,onChange:function(){}})]})]})})})})]}),Object(w.jsxs)("button",{className:"profile_save",onClick:function(){var e={firstName:p.firstName,location:p.location,DOB:p.DOB,gender:p.gender,email:p.email,phoneNo:p.phoneNo,profilePicture:M};if(Y(e)){var t=h.userApi.editUserData;t.body=e,Object(v.api)(Object(r.a)({},t)).then((function(e){U(),Object(N.Toast)({type:"success",message:e.message||"success"})})).catch((function(e){Object(N.Toast)({type:"success",message:e.message||"Error"})}))}},children:["SAVE CHANGES ",Object(w.jsx)(s.default,{})]})]})]})})})})}));t.default=D},391:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Drop Down 4.50302f8e.svg"},392:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Picture Icon.3ba6c98d.svg"},457:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Profile Picture.93cd6a53.svg"},553:function(e,t,n){},660:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10);function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},673:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(673);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},693:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},697:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(673);var r=n(679);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=107.ac28c6ff.chunk.js.map