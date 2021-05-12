(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[9,141,142,230],{1019:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}},1023:function(e,t,a){"use strict";var c=a(4),n=a(42),i=a(2),r=(a(3),a(548)),s=a(605),o=a(553),l=Object(o.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(o.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(578),p=Object(o.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=a(579),u=a(550),b=i.createElement(d,null),O=i.createElement(l,null),f=i.createElement(p,null),x=i.forwardRef((function(e,t){var a=e.checkedIcon,o=void 0===a?b:a,l=e.classes,d=e.color,j=void 0===d?"secondary":d,p=e.icon,u=void 0===p?O:p,x=e.indeterminate,m=void 0!==x&&x,g=e.indeterminateIcon,v=void 0===g?f:g,y=e.inputProps,C=e.size,k=void 0===C?"medium":C,S=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=m?v:u,P=m?v:o;return i.createElement(s.a,Object(c.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(h.a)(j))],m&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:j,inputProps:Object(c.a)({"data-indeterminate":m},y),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===k?k:N.props.fontSize}),checkedIcon:i.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===k?k:P.props.fontSize}),ref:t},S))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(x)},146:function(e,t,a){"use strict";a.r(t);var c=a(18),n=a(6),i=a(10),r=a(2),s=a.n(r),o=a(182),l=a(183),d=a(550),j=a(1019),p=a(762),h=a(443),u=a(11),b=a(5),O=(a(462),a(463),a(90)),f=a(41),x=a(1023),m=a(57),g=a(91),v=(a(45),a(92),a(94)),y=a.n(v),C=a(1),k=Object(d.a)({root:{"&$checked":{color:j.a[600]}},checked:{}})((function(e){return Object(C.jsx)(p.a,Object(i.a)({color:"default"},e))}));function S(e){var t=e.title,a=e.children,c=Object(r.useState)(!1),i=Object(n.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)("a"),d=Object(n.a)(l,2),j=d[0],p=d[1];return Object(C.jsxs)("div",{className:"accordion-wrapper",children:[Object(C.jsxs)("div",{className:"cyanRadio_wrapper",children:[Object(C.jsx)(k,{checked:""===j,onChange:function(e){p(e.target.value)},onClick:function(){return o(!s)}}),Object(C.jsx)("h6",{className:"accordion-title ".concat(s?"open":""),onClick:function(){return o(!s)},children:t})]}),Object(C.jsx)("div",{className:"accordion-item ".concat(s?"":"collapsed"),children:Object(C.jsx)("div",{className:"accordion-content",children:a})})]})}var N=Object(m.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(f.b)({updateTrainerDetails:g.updateTrainerDetails,getTrainerDetails:g.getTrainerDetails},e)}))((function(e){var t=e.updateTrainerDetails,a=(e.trainerPersonalData,e.getTrainerDetails),d=Object(u.f)(),j="Time to build your Trainer Card!",p=" Heads up! Your trainer card is what clients will see when trainer results start filtering. Utilize keywords as anything you write here will also besearchable in our search box!",f=" Upload your profile picture, hotshot!",m=" Tell us what you train! Select all the categories that apply",g="Write a short and sweet description for clients to pick you in 75 characters",v="Please fill only those fields relevant to the various kinds of training you offer. We recommend that the pricing of the social sessions (2-4 people) should provide savings to each client in comparison to a 1 on 1 individual session. The pricing for a 5-15 person group class is a flat rate that will be split evenly amongst each client.",k=s.a.useState(!1),N=Object(n.a)(k,2),P=N[0],w=N[1],E=s.a.useState(!1),T=Object(n.a)(E,2),R=T[0],_=T[1],I=s.a.useState(!1),z=Object(n.a)(I,2),F=z[0],B=z[1],D=s.a.useState(!1),A=Object(n.a)(D,2),H=A[0],L=A[1],$=Object(r.useState)({areaOfExpertise:[]}),M=Object(n.a)($,2),Y=M[0],U=M[1],V=Object(r.useState)(),J=Object(n.a)(V,2),W=J[0],G=J[1],Z=Object(r.useState)(""),q=Object(n.a)(Z,2),K=(q[0],q[1],Object(r.useState)()),Q=Object(n.a)(K,2),X=Q[0],ee=Q[1],te=Object(r.useState)({firstName:"",lastName:"",description:"",individualCharge:"",ssTwoPeopleCharge:"",ssThreePeopleCharge:"",ssFourPeopleCharge:"",classFlatRate:"",threeSessionRate:"",tenSessionRate:"",amtPerPerson:""}),ae=Object(n.a)(te,2),ce=ae[0],ne=ae[1],ie=Object(r.useRef)();Object(r.useEffect)((function(){if(W){var e=new FileReader;e.onloadend=function(){ee(e.result),console.log(typeof W)},e.readAsDataURL(W)}else ee(null)}),[W]);Object(r.useEffect)((function(){if(W){var e=new FileReader;e.onloadend=function(){ee(e.result)},e.readAsDataURL(W)}else ee(null)}),[W]);var re=function(e){var t=e.target,a=t.name,c=t.value,n=Object(i.a)({},ce);n[a]=c,ne(n)};return Object(r.useEffect)((function(){a().then((function(e){e.areaOfExpertise.find((function(e){return"Strength & HIIT"===e}))&&(console.log("Strength & HIIT"),_(!0)),e.areaOfExpertise.find((function(e){return"Boxing"===e}))&&(console.log("Boxing"),w(!0)),e.areaOfExpertise.find((function(e){return"Yoga"===e}))&&(console.log("Yoga"),B(!0)),e.areaOfExpertise.find((function(e){return"Pilates"===e}))&&(console.log("Pilates"),L(!0));var a=e||{},c=a.firstName,n=a.lastName,i=a.description,r=a.socialSessionPricing,s=a.oneOnOnePricing,o=a.classSessionPricing;if(e){var l=r||{},d=(l.inPeronAtClientLocationfor2People,l.inPeronAtClientLocationfor3People,l.inPeronAtClientLocationfor4People,s||{}),j=(d.passRatefor3Session,d.passRatefor10Session,d.inPersonAtClientLocation,(o||{}).inPersonAtclientLocationfor15People,{details:{firstName:c,lastName:n,description:i}});ne(j.details),t(j)}}))}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"outter_container_card",children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"card_prev_link",children:Object(C.jsx)(b.a,{to:"/",children:"Preview Your Trainer Card"})}),Object(C.jsxs)("div",{className:"card_outter",children:[Object(C.jsxs)("div",{className:"card_outter_wrapper",children:[Object(C.jsx)("h2",{children:j}),Object(C.jsx)("p",{children:p})]}),Object(C.jsx)("div",{className:"card_inner ",children:Object(C.jsx)("div",{className:"card_form_outter",children:Object(C.jsxs)("form",{children:[Object(C.jsxs)("div",{className:"card_item1",children:[X?Object(C.jsx)("img",{src:X,style:{objectFit:"cover",width:"200px",height:"200px",borderRadius:"100px"},onClick:function(){ee(null)}}):Object(C.jsxs)("div",{className:"combin_profile",children:[Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),ie.current.click()},children:Object(C.jsx)("img",{src:o.default,alt:"icon",style:{objectFit:"cover",width:"100px",height:"100px"}})}),Object(C.jsx)("img",{src:l.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),ie.current.click()}})]}),Object(C.jsx)("input",{type:"file",ref:ie,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?G(t):G(null)}}),Object(C.jsx)("h5",{children:f})]}),Object(C.jsxs)("div",{className:"card_item2 ",children:[Object(C.jsxs)("div",{className:"card_innerItem",children:[Object(C.jsx)("h6",{children:"First Name"}),Object(C.jsx)("input",{type:"text",name:"firstName",onChange:re,value:ce.firstName})]}),Object(C.jsxs)("div",{className:"card_innerItem",children:[Object(C.jsx)("h6",{children:"Last Name"}),Object(C.jsx)("input",{name:"lastName",onChange:re,value:ce.lastName})]})]}),Object(C.jsxs)("div",{className:"card_item3",children:[Object(C.jsx)("h6",{children:m}),Object(C.jsxs)("div",{className:"inputs_experience",children:[Object(C.jsx)(x.a,{checked:R,onChange:function(e){if(_(e.target.checked),console.log(e.target.checked),e.target.checked)U(Object(i.a)(Object(i.a)({},Y),{},{areaOfExpertise:[].concat(Object(c.a)(Y.areaOfExpertise),["Strength & HIIT"])})),console.log(Y.areaOfExpertise);else{var t=Y.areaOfExpertise.indexOf("Strength & HIIT");t>-1&&Y.areaOfExpertise.splice(t,1),console.log(Y.areaOfExpertise)}console.log(Y)},style:{color:"#53BFD2"}}),Object(C.jsx)("div",{className:"checkbox_label",children:"Strength & HIIT"}),Object(C.jsx)(x.a,{checked:P,onChange:function(e){if(w(e.target.checked),console.log(e.target.checked),e.target.checked)console.log("setBoxing"),U(Object(i.a)(Object(i.a)({},Y),{},{areaOfExpertise:[].concat(Object(c.a)(Y.areaOfExpertise),["Boxing"])})),console.log(Y.areaOfExpertise);else{console.log("unsetBoxing");var t=Y.areaOfExpertise.indexOf("Boxing");t>-1&&Y.areaOfExpertise.splice(t,1),console.log(Y.areaOfExpertise)}console.log(Y)},style:{color:"#53BFD2"}}),Object(C.jsx)("div",{className:"checkbox_label",children:"Boxing"}),Object(C.jsx)(x.a,{checked:F,onChange:function(e){if(B(e.target.checked),e.target.checked)U(Object(i.a)(Object(i.a)({},Y),{},{areaOfExpertise:[].concat(Object(c.a)(Y.areaOfExpertise),["Yoga"])}));else{var t=Y.areaOfExpertise.indexOf("Yoga");t>-1&&Y.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(C.jsx)("div",{className:"checkbox_label",children:"Yoga"}),Object(C.jsx)(x.a,{checked:H,onChange:function(e){if(L(e.target.checked),e.target.checked)U(Object(i.a)(Object(i.a)({},Y),{},{areaOfExpertise:[].concat(Object(c.a)(Y.areaOfExpertise),["Pilates"])}));else{var t=Y.areaOfExpertise.indexOf("Pilates");t>-1&&Y.areaOfExpertise.splice(t,1)}},style:{color:"#53BFD2"}}),Object(C.jsx)("div",{className:"checkbox_label",children:"Pilates"})]})]}),Object(C.jsxs)("div",{className:"card_item4",children:[Object(C.jsx)("h6",{children:g}),Object(C.jsx)("textarea",{type:"text",value:ce.description,name:"description",placeholder:"Give us your elevator pitch! This is all clients will see on the search results page until they click into your full profile.",onChange:re,maxLength:"75"})]}),Object(C.jsxs)("div",{className:"card_item5",children:[Object(C.jsx)("h6",{children:"Tell us about your Pricing"}),Object(C.jsx)("p",{children:v})]}),Object(C.jsxs)("div",{className:"card_item6",children:[Object(C.jsx)(S,{title:"In Person Training Session Pricing (at the clients location)",children:Object(C.jsxs)("div",{className:"card_accordion",children:[Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Individual charge",onChange:re,value:ce.individualCharge,name:"individualCharge"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 2 People)",onChange:re,value:ce.ssTwoPeopleCharge,name:"ssTwoPeopleCharge"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 3 People)",onChange:re,value:ce.ssThreePeopleCharge,name:"ssThreePeopleCharge"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 4 People)",onChange:re,value:ce.ssFourPeopleCharge,name:"ssFourPeopleCharge"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Class Flat Rate (5-15 People)",onChange:re,value:ce.classFlatRate,name:"classFlatRate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"3 Session Rate",onChange:re,value:ce.threeSessionRate,name:"threeSessionRate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"10 Session Pass Rate",onChange:re,value:ce.tenSessionRate,name:"tenSessionRate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]})]})}),Object(C.jsx)(S,{title:"In Person Training Session Pricing (at your location)",children:Object(C.jsxs)("div",{className:"card_accordion",children:[Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Individual charge"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 2 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 3 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 4 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Class Flat Rate (5-15 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"3 Session Rate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"10 Session Pass Rate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]})]})}),Object(C.jsx)(S,{title:"Virtual Training Session Pricing",children:Object(C.jsxs)("div",{className:"card_accordion",children:[Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Individual charge"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 2 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 3 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 4 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Class Flat Rate (5-15 People)"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"3 Session Rate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"10 Session Pass Rate"}),Object(C.jsx)("img",{src:h.default,alt:"icon"})]})]})})]}),Object(C.jsx)("div",{className:"submit_button",children:Object(C.jsxs)(b.a,{onClick:function(){if(void 0!==W){var e={"Content-Type":"application/json",Authorization:localStorage.getItem("token")},a=new FormData;a.append("profilePicture",W,W.name),y.a.post("http://doodlebluelive.com:2307/v1/upload/image",a,{headers:e}).then((function(e){console.log(e)}))}var c={details:Object(i.a)({},ce)};t(c),d.push("/trainer/setup")},type:"submit",children:["Continue To profile"," ",Object(C.jsx)(O.default,{})]})})]})})})]})]})})})}));t.default=N},443:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dollar Icon.4c16bd4d.svg"},462:function(e,t,a){},463:function(e,t,a){},762:function(e,t,a){"use strict";var c=a(4),n=a(42),i=a(2),r=(a(3),a(548)),s=a(605),o=a(553),l=Object(o.a)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(o.a)(i.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),j=a(550);var p=Object(j.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,c=e.fontSize;return i.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},i.createElement(l,{fontSize:c}),i.createElement(d,{fontSize:c,className:a.layer}))})),h=a(578),u=a(579);var b=i.createContext();var O=i.createElement(p,{checked:!0}),f=i.createElement(p,null),x=i.forwardRef((function(e,t){var a=e.checked,o=e.classes,l=e.color,d=void 0===l?"secondary":l,j=e.name,p=e.onChange,h=e.size,x=void 0===h?"medium":h,m=Object(n.a)(e,["checked","classes","color","name","onChange","size"]),g=i.useContext(b),v=a,y=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];e.apply(this,c),t.apply(this,c)}}),(function(){}))}(p,g&&g.onChange),C=j;return g&&("undefined"===typeof v&&(v=g.value===e.value),"undefined"===typeof C&&(C=g.name)),i.createElement(s.a,Object(c.a)({color:d,type:"radio",icon:i.cloneElement(f,{fontSize:"small"===x?"small":"default"}),checkedIcon:i.cloneElement(O,{fontSize:"small"===x?"small":"default"}),classes:{root:Object(r.a)(o.root,o["color".concat(Object(u.a)(d))]),checked:o.checked,disabled:o.disabled},name:C,checked:v,onChange:y,ref:t},m))}));t.a=Object(j.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(x)}}]);
//# sourceMappingURL=9.74f5012f.chunk.js.map