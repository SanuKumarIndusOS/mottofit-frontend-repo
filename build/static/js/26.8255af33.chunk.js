(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[26,33,48,142,143,202,204,206,210,213,214,215,216,230,231,232],{113:function(e,t,a){"use strict";a.r(t);a(2),a(360);var i=a(353),n=(a(354),a(358)),c=a(357),s=a(356),r=a(355),l=a(351),d=a(350),o=a(1);t.default=function(){var e,t,a,j,b,u,m,p;return console.log("hihi",window.location.pathname),window.location.pathname.includes("/about")&&(e=Object(o.jsx)("img",{src:i.default,alt:"icon"}),t=Object(o.jsx)("img",{src:c.default,alt:"icon"}),a=Object(o.jsx)("img",{src:r.default,alt:"icon"}),j=Object(o.jsx)("img",{src:l.default,alt:"icon"}),b=Object(o.jsx)("img",{src:l.default,alt:"icon"}),u=Object(o.jsx)("p",{className:"active",children:"About you"}),m=Object(o.jsx)("p",{className:"inactive",children:"Training background"}),p=Object(o.jsx)("p",{className:"inactive",children:"Avaliability"})),window.location.pathname.includes("/background")&&(e=Object(o.jsx)("img",{src:i.default,alt:"icon"}),t=Object(o.jsx)("img",{src:n.default,alt:"icon"}),a=Object(o.jsx)("img",{src:r.default,alt:"icon"}),j=Object(o.jsx)("img",{src:d.default,alt:"icon"}),b=Object(o.jsx)("img",{src:l.default,alt:"icon"}),u=Object(o.jsx)("p",{className:"completed",children:"About you"}),m=Object(o.jsx)("p",{className:"active",children:"Training background"}),p=Object(o.jsx)("p",{className:"inactive",children:"Avaliability"})),window.location.pathname.includes("/avaliability")&&(e=Object(o.jsx)("img",{src:i.default,alt:"icon"}),t=Object(o.jsx)("img",{src:n.default,alt:"icon"}),a=Object(o.jsx)("img",{src:s.default,alt:"icon"}),j=Object(o.jsx)("img",{src:d.default,alt:"icon"}),b=Object(o.jsx)("img",{src:d.default,alt:"icon"}),u=Object(o.jsx)("p",{className:"completed",children:"About you"}),m=Object(o.jsx)("p",{className:"completed",children:"Training background"}),p=Object(o.jsx)("p",{className:"active",children:"Avaliability"})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"tracker_main",children:Object(o.jsxs)("div",{className:"wrapper_item container",children:[Object(o.jsxs)("div",{className:"items",children:[e,u]}),j,Object(o.jsxs)("div",{className:"items",children:[t,m]}),b,Object(o.jsxs)("div",{className:"items",children:[a,p]})]})})})}},116:function(e,t,a){"use strict";a.r(t);var i=a(10),n=a(7),c=a(2),s=(a(375),a(328)),r=a(329),l=a(369),d=a(5),o=a(85),j=a(596),b=a(67),u=a(86),m=a(37),p=a(53),h=a(17),O=a(91),g=a.n(O),f=a(615),x=a.n(f),v=(a(616),a(1)),N=Object(p.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(m.b)({updateTrainerDetails:u.updateTrainerDetails,getTrainerDetails:u.getTrainerDetails},e)}))((function(e){var t,a,u,m=e.updateTrainerDetails,p=e.details,O=(e.trainerPersonalData,Object(j.a)()),f=O.register,N=O.errors,w=O.handleSubmit,y=Object(c.useState)({location:"",dob:"",email:"",gender:"",phone:"",websiteURL:"",instagram:"",firstName:""}),_=Object(n.a)(y,2),I=_[0],k=_[1],A=Object(c.useState)({}),T=Object(n.a)(A,2);T[0],T[1];return Object(c.useEffect)((function(){if(Object.keys(p).length>3){var e={location:p.location,dob:p.dob,email:p.email,gender:p.gender,phone:p.phone,websiteURL:p.websiteLink,instagram:p.instaHandle,firstName:p.firstName};k(e)}var t={"Content-Type":"application/json",Authorization:localStorage.getItem("token")};g.a.get("http://doodlebluelive.com:2307/v1/trainer",{headers:t}).then((function(e){console.log(e.data.data.phoneNumber),k(Object(i.a)(Object(i.a)({},I),{},{phone:e.data.data.phoneNumber,email:e.data.data.email,firstName:e.data.data.firstName}))}))}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"container main",children:Object(v.jsxs)("div",{className:"wrapper_about",children:[Object(v.jsx)("h2",{children:"Tell us a little bit about you"}),Object(v.jsx)("p",{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"outter_form",children:Object(v.jsxs)("form",{className:"wrapper_inputs",children:[Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Name*"}),Object(v.jsx)("input",{placeholder:"Name",type:"name",name:"name",onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{firstName:e.target.value}))},value:I.firstName,ref:f({required:"This filed is required",minLength:{value:2,message:"Enter a valid name"}})}),N.name&&Object(v.jsx)("span",{children:N.name.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{className:"bg_down",children:"Location*"}),Object(v.jsxs)("div",{className:"iconwrapper",children:[Object(v.jsxs)("select",{required:!0,value:I.location,onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{location:e.target.value}))},name:"location",ref:f({required:"Please select the location"}),children:[Object(v.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select a Motto City"}),Object(v.jsx)("option",{children:"New York"}),Object(v.jsx)("option",{children:"Miami"}),Object(v.jsx)("option",{children:"Hampton"}),Object(v.jsx)("option",{children:"Palm Beach"})]}),Object(v.jsx)("img",{src:l.default,alt:"icon"})]}),N.location&&Object(v.jsx)("span",{children:N.location.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Date of Birth*"}),Object(v.jsx)("input",{placeholder:"MM/DD/YYYY",type:"date",value:I.dob,onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{dob:e.target.value}))},name:"dob",ref:f({required:"Please select the DOB"})}),N.dob&&Object(v.jsx)("span",{children:N.dob.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Gender*"}),Object(v.jsxs)("div",{className:"iconwrapper",children:[Object(v.jsxs)("select",{required:!0,value:I.gender,onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{gender:e.target.value}))},name:"gender",ref:f({required:"Please select the gender"}),children:[Object(v.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select your Gender"}),Object(v.jsx)("option",{children:"Male"}),Object(v.jsx)("option",{children:"Female"}),Object(v.jsx)("option",{children:"Others"})]}),Object(v.jsx)("img",{src:l.default,alt:"icon"})]}),N.gender&&Object(v.jsx)("span",{children:N.gender.message})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Email*"}),Object(v.jsx)("input",{placeholder:"Email",type:"email",value:I.email,onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{email:e.target.value}))},name:"email",ref:f({pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,required:!0,minLength:8})}),"required"===(null===(t=N.email)||void 0===t?void 0:t.type)&&Object(v.jsx)("span",{children:"This input is required"}),"minLength"===(null===(a=N.email)||void 0===a?void 0:a.type)&&Object(v.jsx)("span",{children:"This field should contain greater then 8 charater"}),"pattern"===(null===(u=N.email)||void 0===u?void 0:u.type)&&Object(v.jsx)("span",{children:"Please enter a valid email address"})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Phone*"}),Object(v.jsx)(x.a,{type:"phone",disableDropdown:!0,disableAreaCodes:!0,countryCodeEditable:!1,value:I.phone,placeholder:"Phone Number",inputProps:{name:"phone"},name:"phoneNumber",onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{phone:e}))}}),I.phone.length<11&&Object(v.jsx)("span",{children:"Phone Number should contain 10 digits"})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Website"}),Object(v.jsxs)("div",{className:"iconwrapper",children:[Object(v.jsx)("input",{placeholder:"Add your website",type:"text",value:I.websiteURL,onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{websiteURL:e.target.value}))}}),Object(v.jsx)("img",{src:r.default,alt:"icon"})]})]}),Object(v.jsxs)("div",{className:"wrapper_innerInput",children:[Object(v.jsx)("label",{children:"Instagram"}),Object(v.jsxs)("div",{className:"iconwrapper",children:[Object(v.jsx)("input",{placeholder:"Add your Instagram Handle",type:"text",value:I.instagram,onChange:function(e){return k(Object(i.a)(Object(i.a)({},I),{},{instagram:e.target.value}))}}),Object(v.jsx)("img",{src:s.default,alt:"icon"})]})]}),Object(v.jsx)("div",{className:"submit_button",children:Object(v.jsxs)(d.a,{type:"submit",onClick:w((function(){var e={details:Object(i.a)(Object(i.a)({},p),{},{firstName:I.firstName,dob:I.dob,email:I.email,gender:I.gender,phone:I.phone,location:I.location,websiteLink:I.websiteURL,instaHandle:I.instagram})};console.log(e,I),h.history.push("/trainer/background"),m(e)})),children:["Continue",Object(v.jsx)(o.default,{})]})})]})}),Object(v.jsx)("img",{src:b.default,alt:"icon",className:"about_watermark"})]})})})}));t.default=N},154:function(e,t,a){"use strict";a.r(t);a(2);var i=a(113),n=a(116),c=a(1);t.default=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(i.default,{}),Object(c.jsx)(n.default,{})]})}},328:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},329:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},350:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow 1.2a75d61e.svg"},351:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow_active.75efc204.svg"},353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Person Icon.aa227953.svg"},354:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Person_2.8bf64c18.svg"},355:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule Slot Icon.21459896.svg"},356:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Schedule_slot_active.29ee488e.svg"},357:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training Icon.d725d1c5.svg"},358:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Training_active.ab622bf2.svg"},360:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Drop Down 4.50302f8e.svg"},375:function(e,t,a){}}]);
//# sourceMappingURL=26.8255af33.chunk.js.map