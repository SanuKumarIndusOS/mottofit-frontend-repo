(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[105,216,217,276,277],{246:function(e,t,c){"use strict";c.r(t);var i=c(4),a=c(10),l=c(2),n=(c(473),c(374)),s=c(373),o=c(41),r=c(599),j=(c(474),c(637)),b=c.n(j),u=(c(638),c(71)),d=c(27),p=c(34),f=c(1),m=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],h=Object(p.b)(null,(function(e){return Object(d.b)({getUserDetail:u.getUserDetail},e)}))((function(e){var t=e.getUserDetail,c=Object(l.useState)({firstName:"",lastName:"",email:"",phoneNo:"",paymentProfileId:"",mottoPasses:"",signUpType:"email"}),j=Object(a.a)(c,2),u=j[0],d=j[1],p=Object(l.useState)(),h=Object(a.a)(p,2),O=(h[0],h[1],Object(l.useState)()),x=Object(a.a)(O,2),v=x[0],N=x[1],_=Object(l.useState)(),g=Object(a.a)(_,2),y=g[0],P=g[1],w=Object(l.useRef)();return Object(l.useEffect)((function(){if(v){var e=new FileReader;e.onloadend=function(){P(e.result)},e.readAsDataURL(v)}else P(null)}),[v]),Object(l.useEffect)((function(){t().then((function(e){d(e)}))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"myprofile_outter_container",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"myprofile_inner_container",children:[Object(f.jsx)("div",{className:"myprofile_header",children:Object(f.jsx)("h2",{children:"My Profile"})}),Object(f.jsxs)("div",{className:"profile_wrapper",children:[Object(f.jsxs)("div",{className:"profile_grid",children:[Object(f.jsx)("div",{className:"profile_pic_col",children:Object(f.jsxs)("div",{className:"profile_picture",children:[y?Object(f.jsx)("img",{src:y,style:{objectFit:"cover",width:"200px",height:"200px",borderRadius:"100px"},onClick:function(){P(null)}}):Object(f.jsxs)("div",{className:"combin_profile",children:[Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),w.current.click()},children:Object(f.jsx)("img",{src:n.default,alt:"icon",style:{objectFit:"cover",width:"100px",height:"100px"}})}),Object(f.jsx)("img",{src:s.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),w.current.click()}})]}),Object(f.jsx)("input",{type:"file",ref:w,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?N(t):N(null)}}),Object(f.jsx)("h5",{children:"Remove Profile Picture"})]})}),Object(f.jsx)("div",{className:"profile_form_col",children:Object(f.jsx)("div",{className:"outter_profile_form",children:Object(f.jsx)("form",{children:Object(f.jsxs)("div",{className:"inner_profile_form",children:[Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Name "}),Object(f.jsx)("input",{type:"text",value:u.firstName,onChange:function(e){d(Object(i.a)(Object(i.a)({},u),{},{firstName:e.target.value}))},name:"firstName"})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Location "}),Object(f.jsx)(r.Dropdown,{className:"custom_dropdown",title:"Select Location",list:m,value:u.location,onChange:function(e){d(Object(i.a)(Object(i.a)({},u),{},{location:e.value})),console.log(e.value)},name:"location"})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Date of Birth "}),Object(f.jsx)("input",{type:"date",value:u.location})]}),Object(f.jsx)("div",{className:"input_profile",children:Object(f.jsx)("label",{children:"Gender "})}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Email "}),Object(f.jsx)("input",{type:"text",value:u.email,onChange:function(e){d(Object(i.a)(Object(i.a)({},u),{},{email:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Phone "}),Object(f.jsx)(b.a,{type:"phone",disableDropdown:!0,countryCodeEditable:!1,value:u.phoneNo,placeholder:"Phone Number",country:"us",inputProps:{name:"phoneNo"},name:"phoneNo",onChange:function(e){return d(Object(i.a)(Object(i.a)({},u),{},{phoneNo:e}))}})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Payment Method "}),Object(f.jsx)("input",{type:"text"})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Password "}),Object(f.jsx)("input",{type:"text"})]})]})})})})]}),Object(f.jsxs)("button",{className:"profile_save",children:["SAVE CHANGES ",Object(f.jsx)(o.default,{})]})]})]})})})})}));t.default=h},373:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Picture Icon.3e77f4f6.svg"},374:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Profile Picture.5a574e6d.svg"},473:function(e,t,c){},474:function(e,t,c){}}]);
//# sourceMappingURL=105.d66591df.chunk.js.map