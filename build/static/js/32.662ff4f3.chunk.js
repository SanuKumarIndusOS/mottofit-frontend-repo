(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[32,40,45,174,175,176,240,242,248,251,252,253,254,268,269,270],{114:function(e,t,a){"use strict";a.r(t);a(2),a(366);var c=a(358),n=(a(359),a(363)),i=a(362),s=a(361),l=a(360),r=a(357),o=a(356),d=a(1);t.default=function(){var e,t,a,b,j,u,m,p;return console.log("hihi",window.location.pathname),window.location.pathname.includes("/about")&&(e=Object(d.jsx)("img",{src:c.default,alt:"icon"}),t=Object(d.jsx)("img",{src:i.default,alt:"icon"}),a=Object(d.jsx)("img",{src:l.default,alt:"icon"}),b=Object(d.jsx)("img",{src:r.default,alt:"icon"}),j=Object(d.jsx)("img",{src:r.default,alt:"icon"}),u=Object(d.jsx)("p",{className:"active",children:"About you"}),m=Object(d.jsx)("p",{className:"inactive",children:"Training background"}),p=Object(d.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/background")&&(e=Object(d.jsx)("img",{src:c.default,alt:"icon"}),t=Object(d.jsx)("img",{src:n.default,alt:"icon"}),a=Object(d.jsx)("img",{src:l.default,alt:"icon"}),b=Object(d.jsx)("img",{src:o.default,alt:"icon"}),j=Object(d.jsx)("img",{src:r.default,alt:"icon"}),u=Object(d.jsx)("p",{className:"completed",children:"About you"}),m=Object(d.jsx)("p",{className:"active",children:"Training background"}),p=Object(d.jsx)("p",{className:"inactive",children:"Availability"})),window.location.pathname.includes("/availability")&&(e=Object(d.jsx)("img",{src:c.default,alt:"icon"}),t=Object(d.jsx)("img",{src:n.default,alt:"icon"}),a=Object(d.jsx)("img",{src:s.default,alt:"icon"}),b=Object(d.jsx)("img",{src:o.default,alt:"icon"}),j=Object(d.jsx)("img",{src:o.default,alt:"icon"}),u=Object(d.jsx)("p",{className:"completed",children:"About you"}),m=Object(d.jsx)("p",{className:"completed",children:"Training background"}),p=Object(d.jsx)("p",{className:"active",children:"Availability"})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"tracker_main",children:Object(d.jsxs)("div",{className:"wrapper_item container",children:[Object(d.jsxs)("div",{className:"items",children:[e,u]}),b,Object(d.jsxs)("div",{className:"items",children:[t,m]}),j,Object(d.jsxs)("div",{className:"items",children:[a,p]})]})})})}},120:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a(10),i=a(5),s=a(2),l=(a(380),a(333)),r=a(335),o=a(83),d=a(612),b=a(46),j=a(84),u=a(38),m=a(57),p=a(17),O=a(88),h=a.n(O),f=a(644),g=a.n(f),x=(a(645),a(602)),v=(a(379),a(604),a(1)),N=[{label:"New York City",value:"New York City"},{label:"Miami",value:"Miami"},{label:"Hamptons",value:"Hamptons"},{label:"Palm Beach",value:"Palm Beach"}],w=[{label:"Male",value:"male"},{label:"Female",value:"female"}],y=Object(m.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(u.b)({updateTrainerDetails:j.updateTrainerDetails,getTrainerDetails:j.getTrainerDetails},e)}))((function(e){var t=e.updateTrainerDetails,a=e.details,j=(e.trainerPersonalData,Object(d.a)()),u=j.register,m=j.errors,O=j.handleSubmit,f=Object(s.useState)({location:"",dob:"",email:"",gender:"",phone:"",websiteURL:"",instagram:"",firstName:""}),y=Object(i.a)(f,2),_=y[0],I=y[1],k=Object(s.useState)({}),C=Object(i.a)(k,2),D=C[0];C[1];return Object(s.useEffect)((function(){if(Object.keys(a).length>3){var e={location:a.location,dob:a.dob,email:a.email,gender:a.gender,phone:a.phone,websiteURL:a.websiteLink,instagram:a.instaHandle,firstName:a.firstName};I(e)}var t={"Content-Type":"application/json",Authorization:localStorage.getItem("token")};h.a.get("http://doodlebluelive.com:2307/v1/trainer",{headers:t}).then((function(e){console.log(e.data.data.phoneNumber),I(Object(n.a)(Object(n.a)({},_),{},{phone:e.data.data.phoneNumber,email:e.data.data.email,firstName:e.data.data.firstName}))}))}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"container main",children:Object(v.jsxs)("div",{className:"wrapper_about",children:[Object(v.jsx)("h2",{children:"Tell us a little bit about you"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"outter_form",children:Object(v.jsxs)("form",{className:"wrapper_inputs",children:[Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Name*"}),Object(v.jsx)("input",Object(c.a)({placeholder:"Name",type:"name",name:"name",style:{textTransform:"capitalize"},onChange:function(e){return I(Object(n.a)(Object(n.a)({},_),{},{firstName:e.target.value}))},value:_.firstName},"name","firstName")),D.firstName&&Object(v.jsx)("span",{children:D.firstName})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{className:"bg_down",children:"Location*"}),Object(v.jsx)("div",{className:"iconwrapper",children:Object(v.jsx)(x.Dropdown,{className:"custom_dropdown",title:"Select Location",list:N,value:_.location,onChange:function(e){I(Object(n.a)(Object(n.a)({},_),{},{location:e.value}))},name:"location"})}),m.dob&&Object(v.jsx)("span",{children:m.dob.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Date of Birth*"}),Object(v.jsx)("input",{placeholder:"MM/DD/YYYY",type:"date",value:_.dob,onChange:function(e){return I(Object(n.a)(Object(n.a)({},_),{},{dob:e.target.value}))},name:"dob",ref:u({required:"Mandatory fields cannot be empty"})}),m.dob&&Object(v.jsx)("span",{children:m.dob.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Gender*"}),Object(v.jsx)("div",{className:"iconwrapper",children:Object(v.jsx)(x.Dropdown,{className:"custom_dropdown",title:"Select Gender",list:w,value:_.gender,onChange:function(e){I(Object(n.a)(Object(n.a)({},_),{},{gender:e.value}))},name:"gender",ref:u({required:"Mandatory fields cannot be empty"})})}),m.dob&&Object(v.jsx)("span",{children:m.dob.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Email*"}),Object(v.jsx)("input",{placeholder:"Email",type:"email",value:_.email,onChange:function(e){return I(Object(n.a)(Object(n.a)({},_),{},{email:e.target.value}))},name:"email"})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Phone*"}),Object(v.jsx)(g.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:_.phone,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(e){return I(Object(n.a)(Object(n.a)({},_),{},{phone:e}))}}),_.phone&&_.phone.length<11&&Object(v.jsx)("span",{children:"Phone Number should contain 10 digits"})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Website"}),Object(v.jsxs)("div",{className:"iconwrapper",children:[Object(v.jsx)("input",{placeholder:"Add your website",type:"text",value:_.websiteURL,onChange:function(e){return I(Object(n.a)(Object(n.a)({},_),{},{websiteURL:e.target.value}))}}),Object(v.jsx)("img",{src:r.default,alt:"icon"})]})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Instagram"}),Object(v.jsxs)("div",{className:"iconwrapper",children:[Object(v.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:_.instagram,onChange:function(e){return I(Object(n.a)(Object(n.a)({},_),{},{instagram:e.target.value}))}}),Object(v.jsx)("img",{src:l.default,alt:"icon"})]})]}),Object(v.jsx)("div",{className:"submit_button",children:Object(v.jsxs)("button",{type:"submit",onClick:O((function(){var e={details:Object(n.a)(Object(n.a)({},a),{},{firstName:_.firstName,dob:_.dob,email:_.email,gender:_.gender,phone:_.phone,location:_.location,websiteLink:_.websiteURL,instaHandle:_.instagram})};console.log(e),p.history.push("/trainer/background"),t(e)})),children:["Continue",Object(v.jsx)(o.default,{})]})})]})}),Object(v.jsx)("img",{src:b.default,alt:"icon",className:"about_watermark"})]})})})}));t.default=y},163:function(e,t,a){"use strict";a.r(t);a(2);var c=a(114),n=a(120),i=a(1);t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.default,{}),Object(i.jsx)(n.default,{})]})}},333:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},335:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},356:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow 1.2a75d61e.svg"},357:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow_active.75efc204.svg"},358:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Person Icon.aa227953.svg"},359:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Person_2.8bf64c18.svg"},360:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule Slot Icon.21459896.svg"},361:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule_slot_active.29ee488e.svg"},362:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training Icon.d725d1c5.svg"},363:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training_active.ab622bf2.svg"},366:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},604:function(e,t,a){}}]);
//# sourceMappingURL=32.662ff4f3.chunk.js.map