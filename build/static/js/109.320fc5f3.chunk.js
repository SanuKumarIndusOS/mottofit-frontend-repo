(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[109,112,233,234,294,295],{257:function(e,t,c){"use strict";c.r(t);var i=c(3),a=c(11),n=c(2),l=(c(491),c(391)),s=c(390),r=c(41),o=c(656),j=(c(492),c(666)),u=c.n(j),b=(c(667),c(72)),d=c(27),p=c(34),f=c(1),m=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],h=Object(p.b)(null,(function(e){return Object(d.b)({getUserDetail:b.getUserDetail},e)}))((function(e){var t=e.getUserDetail,c=Object(n.useState)({firstName:"",lastName:"",email:"",phoneNo:"",paymentProfileId:"",mottoPasses:"",signUpType:"email"}),j=Object(a.a)(c,2),b=j[0],d=j[1],p=Object(n.useState)(),h=Object(a.a)(p,2),O=(h[0],h[1],Object(n.useState)()),x=Object(a.a)(O,2),v=x[0],N=x[1],_=Object(n.useState)(),g=Object(a.a)(_,2),y=g[0],P=g[1],w=Object(n.useRef)();return Object(n.useEffect)((function(){if(v){var e=new FileReader;e.onloadend=function(){P(e.result)},e.readAsDataURL(v)}else P(null)}),[v]),Object(n.useEffect)((function(){t().then((function(e){d(e)}))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"myprofile_outter_container",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"myprofile_inner_container",children:[Object(f.jsx)("div",{className:"myprofile_header",children:Object(f.jsx)("h2",{children:"My Profile"})}),Object(f.jsxs)("div",{className:"profile_wrapper",children:[Object(f.jsxs)("div",{className:"profile_grid",children:[Object(f.jsx)("div",{className:"profile_pic_col",children:Object(f.jsxs)("div",{className:"profile_picture",children:[y?Object(f.jsx)("img",{src:y,style:{objectFit:"cover",width:"200px",height:"200px",borderRadius:"100px"},onClick:function(){P(null)}}):Object(f.jsxs)("div",{className:"combin_profile",children:[Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),w.current.click()},children:Object(f.jsx)("img",{src:l.default,alt:"icon",style:{objectFit:"cover",width:"100px",height:"100px"}})}),Object(f.jsx)("img",{src:s.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),w.current.click()}})]}),Object(f.jsx)("input",{type:"file",ref:w,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?N(t):N(null)}}),Object(f.jsx)("h5",{children:"Remove Profile Picture"})]})}),Object(f.jsx)("div",{className:"profile_form_col",children:Object(f.jsx)("div",{className:"outter_profile_form",children:Object(f.jsx)("form",{children:Object(f.jsxs)("div",{className:"inner_profile_form",children:[Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Name "}),Object(f.jsx)("input",{type:"text",value:b.firstName,onChange:function(e){d(Object(i.a)(Object(i.a)({},b),{},{firstName:e.target.value}))},name:"firstName"})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Location "}),Object(f.jsx)(o.Dropdown,{className:"custom_dropdown",title:"Select Location",list:m,value:b.location,onChange:function(e){d(Object(i.a)(Object(i.a)({},b),{},{location:e.value})),console.log(e.value)},name:"location"})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Date of Birth "}),Object(f.jsx)("input",{type:"date",value:b.location,onKeyDown:function(e){return 8!==e.keyCode?e.preventDefault():""}})]}),Object(f.jsx)("div",{className:"input_profile",children:Object(f.jsx)("label",{children:"Gender "})}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Email "}),Object(f.jsx)("input",{type:"text",value:b.email,onChange:function(e){d(Object(i.a)(Object(i.a)({},b),{},{email:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Phone "}),Object(f.jsx)(u.a,{type:"phone",disableDropdown:!0,countryCodeEditable:!1,value:b.phoneNo,placeholder:"Phone Number",country:"us",inputProps:{name:"phoneNo"},name:"phoneNo",onChange:function(e){return d(Object(i.a)(Object(i.a)({},b),{},{phoneNo:e}))}})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Payment Method "}),Object(f.jsx)("input",{type:"text"})]}),Object(f.jsxs)("div",{className:"input_profile",children:[Object(f.jsx)("label",{children:"Password "}),Object(f.jsx)("input",{type:"text"})]})]})})})})]}),Object(f.jsxs)("button",{className:"profile_save",children:["SAVE CHANGES ",Object(f.jsx)(r.default,{})]})]})]})})})})}));t.default=h},294:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return n}));c(2);var i=c(257),a=c(1);function n(){return Object(a.jsx)("div",{children:Object(a.jsx)(i.default,{})})}},390:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Picture Icon.3ba6c98d.svg"},391:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Profile Picture.93cd6a53.svg"},491:function(e,t,c){},492:function(e,t,c){}}]);
//# sourceMappingURL=109.320fc5f3.chunk.js.map