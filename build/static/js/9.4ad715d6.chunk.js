(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[9,139,140,228],{1023:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}},1027:function(e,t,a){"use strict";var c=a(4),n=a(42),i=a(2),r=(a(3),a(552)),o=a(609),s=a(557),l=Object(s.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=a(582),h=Object(s.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(583),u=a(554),b=i.createElement(d,null),m=i.createElement(l,null),O=i.createElement(h,null),f=i.forwardRef((function(e,t){var a=e.checkedIcon,s=void 0===a?b:a,l=e.classes,d=e.color,j=void 0===d?"secondary":d,h=e.icon,u=void 0===h?m:h,f=e.indeterminate,v=void 0!==f&&f,x=e.indeterminateIcon,g=void 0===x?O:x,C=e.inputProps,y=e.size,P=void 0===y?"medium":y,k=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=v?g:u,S=v?g:s;return i.createElement(o.a,Object(c.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(p.a)(j))],v&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:j,inputProps:Object(c.a)({"data-indeterminate":v},C),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===P?P:N.props.fontSize}),checkedIcon:i.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===P?P:S.props.fontSize}),ref:t},k))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},145:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(10),i=a(2),r=a(181),o=a(182),s=a(554),l=a(1023),d=a(765),j=a(447),h=a(11),p=a(5),u=(a(466),a(467),a(89)),b=a(41),m=a(1027),O=a(56),f=a(90),v=(a(45),a(91),a(93)),x=a.n(v),g=a(1),C=Object(s.a)({root:{"&$checked":{color:l.a[600]}},checked:{}})((function(e){return Object(g.jsx)(d.a,Object(n.a)({color:"default"},e))}));function y(e){var t=e.title,a=e.children,n=Object(i.useState)(!1),r=Object(c.a)(n,2),o=r[0],s=r[1],l=Object(i.useState)("a"),d=Object(c.a)(l,2),j=d[0],h=d[1];return Object(g.jsxs)("div",{className:"accordion-wrapper",children:[Object(g.jsxs)("div",{className:"cyanRadio_wrapper",children:[Object(g.jsx)(C,{checked:""===j,onChange:function(e){h(e.target.value)},onClick:function(){return s(!o)}}),Object(g.jsx)("h6",{className:"accordion-title ".concat(o?"open":""),onClick:function(){return s(!o)},children:t})]}),Object(g.jsx)("div",{className:"accordion-item ".concat(o?"":"collapsed"),children:Object(g.jsx)("div",{className:"accordion-content",children:a})})]})}var P=Object(O.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(b.b)({updateTrainerDetails:f.updateTrainerDetails,getTrainerDetails:f.getTrainerDetails},e)}))((function(e){var t,a=e.updateTrainerDetails,s=(e.trainerPersonalData,e.getTrainerDetails),l=Object(h.f)(),d="Time to build your Trainer Card!",b=" Heads up! Your trainer card is what clients will see when trainer results start filtering. Utilize keywords as anything you write here will also besearchable in our search box!",O=" Upload your profile picture, hotshot!",f=" Tell us what you train! Select all the categories that apply",v="Write a short and sweet description for clients to pick you in 75 characters",C="Please fill only those fields relevant to the various kinds of training you offer. We recommend that the pricing of the social sessions (2-4 people) should provide savings to each client in comparison to a 1 on 1 individual session. The pricing for a 5-15 person group class is a flat rate that will be split evenly amongst each client.",P=Object(i.useState)(),k=Object(c.a)(P,2),N=k[0],S=k[1],w=Object(i.useState)(""),R=Object(c.a)(w,2),T=(R[0],R[1]),_=Object(i.useState)(),z=Object(c.a)(_,2),E=z[0],F=z[1],I=Object(i.useState)({firstName:"",lastName:"",description:"",individualCharge:"",ssTwoPeopleCharge:"",ssThreePeopleCharge:"",ssFourPeopleCharge:"",classFlatRate:"",threeSessionRate:"",tenSessionRate:"",amtPerPerson:""}),D=Object(c.a)(I,2),A=D[0],B=D[1],L=Object(i.useRef)(),$=function(e){T(e.target.value)};Object(i.useEffect)((function(){if(N){var e=new FileReader;e.onloadend=function(){F(e.result),console.log(typeof N)},e.readAsDataURL(N)}else F(null)}),[N]);Object(i.useEffect)((function(){if(N){var e=new FileReader;e.onloadend=function(){F(e.result)},e.readAsDataURL(N)}else F(null)}),[N]);var H=function(e){var t=e.target,a=t.name,c=t.value,i=Object(n.a)({},A);i[a]=c,B(i)};return Object(i.useEffect)((function(){s().then((function(e){var t=e||{},c=t.firstName,n=t.lastName,i=t.description,r=t.socialSessionPricing,o=t.oneOnOnePricing,s=t.classSessionPricing;if(e){var l=r||{},d=l.inPeronAtClientLocationfor2People,j=void 0===d?"":d,h=l.inPeronAtClientLocationfor3People,p=void 0===h?"":h,u=l.inPeronAtClientLocationfor4People,b=void 0===u?"":u,m=o||{},O=m.passRatefor3Session,f=void 0===O?"":O,v=m.passRatefor10Session,x=void 0===v?"":v,g=m.inPersonAtClientLocation,C=void 0===g?"":g,y=(s||{}).inPersonAtclientLocationfor15People,P={details:{firstName:c,lastName:n,description:i,individualCharge:C,ssTwoPeopleCharge:j,ssThreePeopleCharge:p,ssFourPeopleCharge:b,classFlatRate:void 0===y?"":y,threeSessionRate:f,tenSessionRate:x}};B(P.details),a(P)}}))}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"outter_container_card",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"card_prev_link",children:Object(g.jsx)(p.a,{to:"/",children:"Preview Your Trainer Card"})}),Object(g.jsxs)("div",{className:"card_outter",children:[Object(g.jsxs)("div",{className:"card_outter_wrapper",children:[Object(g.jsx)("h2",{children:d}),Object(g.jsx)("p",{children:b})]}),Object(g.jsx)("div",{className:"card_inner ",children:Object(g.jsx)("div",{className:"card_form_outter",children:Object(g.jsxs)("form",{children:[Object(g.jsxs)("div",{className:"card_item1",children:[E?Object(g.jsx)("img",{src:E,style:{objectFit:"cover",width:"200px",height:"200px",borderRadius:"100px"},onClick:function(){F(null)}}):Object(g.jsxs)("div",{className:"combin_profile",children:[Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),L.current.click()},children:Object(g.jsx)("img",{src:r.default,alt:"icon",style:{objectFit:"cover",width:"100px",height:"100px"}})}),Object(g.jsx)("img",{src:o.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),L.current.click()}})]}),Object(g.jsx)("input",{type:"file",ref:L,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?S(t):S(null)}}),Object(g.jsx)("h5",{children:O})]}),Object(g.jsxs)("div",{className:"card_item2 ",children:[Object(g.jsxs)("div",{className:"card_innerItem",children:[Object(g.jsx)("h6",{children:"First Name"}),Object(g.jsx)("input",{type:"text",name:"firstName",onChange:H,value:A.firstName})]}),Object(g.jsxs)("div",{className:"card_innerItem",children:[Object(g.jsx)("h6",{children:"Last Name"}),Object(g.jsx)("input",{name:"lastName",onChange:H,value:A.lastName})]})]}),Object(g.jsxs)("div",{className:"card_item3",children:[Object(g.jsx)("h6",{children:f}),Object(g.jsxs)("div",{className:"inputs_experience",children:[Object(g.jsx)(m.a,{checked:null===A||void 0===A||null===(t=A.areaOfExpertise)||void 0===t?void 0:t.includes("Strength & HIIT"),value:"",onChange:$,style:{color:"#53BFD2"}}),Object(g.jsx)("label",{children:"Strength & HITT"}),Object(g.jsx)(m.a,{value:"",onChange:$,style:{color:"#53BFD2"}}),Object(g.jsx)("label",{children:"Boxing"}),Object(g.jsx)(m.a,{value:"",onChange:$,style:{color:"#53BFD2"}}),Object(g.jsx)("label",{children:"Yoga"}),Object(g.jsx)(m.a,{value:"",onChange:$,style:{color:"#53BFD2"}}),Object(g.jsx)("label",{children:"Pilates"})]})]}),Object(g.jsxs)("div",{className:"card_item4",children:[Object(g.jsx)("h6",{children:v}),Object(g.jsx)("textarea",{type:"text",value:A.description,name:"description",placeholder:"Give us your elevator pitch! This is all clients will see on the search results page until they click into your full profile.",onChange:H,maxLength:"75"})]}),Object(g.jsxs)("div",{className:"card_item5",children:[Object(g.jsx)("h6",{children:"Tell us about your Pricing"}),Object(g.jsx)("p",{children:C})]}),Object(g.jsxs)("div",{className:"card_item6",children:[Object(g.jsx)(y,{title:"In Person Training Session Pricing (at the clients location)",children:Object(g.jsxs)("div",{className:"card_accordion",children:[Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Individual charge",onChange:H,value:A.individualCharge,name:"individualCharge"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 2 People)",onChange:H,value:A.ssTwoPeopleCharge,name:"ssTwoPeopleCharge"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 3 People)",onChange:H,value:A.ssThreePeopleCharge,name:"ssThreePeopleCharge"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 4 People)",onChange:H,value:A.ssFourPeopleCharge,name:"ssFourPeopleCharge"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Class Flat Rate (5-15 People)",onChange:H,value:A.classFlatRate,name:"classFlatRate"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"3 Session Rate",onChange:H,value:A.threeSessionRate,name:"threeSessionRate"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"10 Session Pass Rate",onChange:H,value:A.tenSessionRate,name:"tenSessionRate"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]})]})}),Object(g.jsx)(y,{title:"In Person Training Session Pricing (at your location)",children:Object(g.jsx)("div",{className:"card_accordion",children:Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Dollar Amount Per Person",onChange:H,value:A.amtPerPerson,name:"amtPerPerson"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]})})}),Object(g.jsx)(y,{title:"Virtual Training Session Pricing",children:Object(g.jsxs)("div",{className:"card_accordion",children:[Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Individual charge"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 2 People)"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 3 People)"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Social Session (Total Charge for 4 People)"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"Class Flat Rate (5-15 People)"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"3 Session Rate"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]}),Object(g.jsxs)("div",{className:"iconwrapper",children:[Object(g.jsx)("input",{type:"text",placeholder:"10 Session Pass Rate"}),Object(g.jsx)("img",{src:j.default,alt:"icon"})]})]})})]}),Object(g.jsx)("div",{className:"submit_button",children:Object(g.jsxs)(p.a,{onClick:function(){if(void 0!==N){var e={"Content-Type":"application/json",Authorization:localStorage.getItem("token")},t=new FormData;t.append("profilePicture",N,N.name),x.a.post("http://doodlebluelive.com:2307/v1/upload/image",t,{headers:e}).then((function(e){console.log(e)}))}var c={details:Object(n.a)({},A)};a(c),l.push("/trainer/setup")},type:"submit",children:["Continue To profile"," ",Object(g.jsx)(u.default,{})]})})]})})})]})]})})})}));t.default=P},447:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dollar Icon.4c16bd4d.svg"},466:function(e,t,a){},467:function(e,t,a){},765:function(e,t,a){"use strict";var c=a(4),n=a(42),i=a(2),r=(a(3),a(552)),o=a(609),s=a(557),l=Object(s.a)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(s.a)(i.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),j=a(554);var h=Object(j.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,c=e.fontSize;return i.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},i.createElement(l,{fontSize:c}),i.createElement(d,{fontSize:c,className:a.layer}))})),p=a(582),u=a(583);var b=i.createContext();var m=i.createElement(h,{checked:!0}),O=i.createElement(h,null),f=i.forwardRef((function(e,t){var a=e.checked,s=e.classes,l=e.color,d=void 0===l?"secondary":l,j=e.name,h=e.onChange,p=e.size,f=void 0===p?"medium":p,v=Object(n.a)(e,["checked","classes","color","name","onChange","size"]),x=i.useContext(b),g=a,C=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];e.apply(this,c),t.apply(this,c)}}),(function(){}))}(h,x&&x.onChange),y=j;return x&&("undefined"===typeof g&&(g=x.value===e.value),"undefined"===typeof y&&(y=x.name)),i.createElement(o.a,Object(c.a)({color:d,type:"radio",icon:i.cloneElement(O,{fontSize:"small"===f?"small":"default"}),checkedIcon:i.cloneElement(m,{fontSize:"small"===f?"small":"default"}),classes:{root:Object(r.a)(s.root,s["color".concat(Object(u.a)(d))]),checked:s.checked,disabled:s.disabled},name:y,checked:g,onChange:C,ref:t},v))}));t.a=Object(j.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(f)}}]);
//# sourceMappingURL=9.4ad715d6.chunk.js.map