(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[22,95,133,214,215,216,297,298,319],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"ErrorComponent",(function(){return i}));n(2);var a=n(1),i=function(e){var t=e.message;return Object(a.jsx)("span",{className:"text-danger",style:{fontSize:"16px"},children:t||"Error in field"})}},254:function(e,t,n){"use strict";n.r(t),n.d(t,"TrainerPrevModal",(function(){return u}));var a=n(12),i=n(2),r=n.n(i),c=n(100),o=n(196),s=n(36),l=(n(498),n(1)),u=function(e){var t=e.open,n=e.setOpen,u=e.trainerCardData,d=e.image,j=Object(i.useRef)(null),b=Object(l.jsx)("img",{src:c.default,alt:"close"}),p=Object(s.d)((function(e){return e.trainerCaptureReducer.cardData})),f=[p.inPersonAtClient_individualCharge,p.inPersonAtClient_twoPPL,p.inPersonAtClient_threePPL,p.inPersonAtClient_fourPPL,p.inPersonAtClient_classFlatRate,p.inPersonAtClient_threeSessionRate,p.inPersonAtClient_tenSessionRate,p.inPersonAtTrainer_individualCharge,p.inPersonAtTrainer_twoPPL,p.inPersonAtTrainer_threePPL,p.inPersonAtTrainer_fourPPL,p.inPersonAtTrainer_classFlatRate,p.inPersonAtTrainer_threeSessionRate,p.inPersonAtTrainer_tenSessionRate,p.virtual_individualCharge,p.virtual_twoPPL,p.virtual_threePPL,p.virtual_fourPPL,p.virtual_classFlatRate,p.virtual_threeSessionRate,p.virtual_tenSessionRate],h=r.a.useState(0),v=Object(a.a)(h,2),O=v[0],P=v[1];return r.a.useEffect((function(){var e=[];f.map((function(t){isNaN(parseInt(t))||e.push(parseInt(t))}));var t=Math.min.apply(Math,e);P(t),console.log(t)}),[p]),Object(l.jsx)("div",{children:t?Object(l.jsx)(o.a,{open:t,onClose:function(){n(!1)},center:!0,closeIcon:b,container:j.current,styles:{boaderRadius:"10px"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row m-0",style:{alignleft:"auto"},children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"card-img-top",src:d||"https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg",style:d?{objectFit:"cover"}:{objectFit:"cover",backgroundColor:"blue"}}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("h3",{style:{textTransform:"capitalize"},children:[u.firstName,"\xa0",u.lastName]}),Object(l.jsx)("h6",{style:{color:"#898989",fontWeight:"bold"},children:void 0!==u.verticals?u.verticals.map((function(e){return Object(l.jsxs)("h6",{style:{margin:"0 0.3em 0 0"},children:[e,","]})})):null}),Object(l.jsx)("p",{children:u.description})]}),Object(l.jsx)("div",{className:"card-button",children:Object(l.jsxs)("button",{style:{backgroundColor:"#53BFD2"},children:["book a session",Object(l.jsxs)("p",{children:["from ",Object(l.jsxs)("span",{children:["$",O||""]})]})]})})]})})})}):null})}},263:function(e,t,n){"use strict";n.r(t);var a=n(195),i=n(20),r=n(3),c=n(12),o=n(2),s=(n(524),n(525),n(450)),l=n(254),u=n(71),d=n(36),j=n(49),b=n(928),p=n(777),f=n.n(p),h=n(776),v=n.n(h),O=n(396),P=n(395),m=n(9),x=n(25),_=n(102),g=n(75),C=n(1);function A(e){var t=e.title,n=e.children,a=Object(o.useState)(!1),i=Object(c.a)(a,2),r=i[0],s=i[1];return Object(C.jsxs)("div",{className:"accordion-wrapper",children:[Object(C.jsx)("div",{className:"cyanRadio_wrapper",children:Object(C.jsx)("label",{className:"accordion-title ".concat(r?"open":""),onClick:function(){return s(!r)},children:t})}),Object(C.jsx)("div",{className:"accordion-item ".concat(r?"":"collapsed"),children:Object(C.jsx)("div",{className:"accordion-content",children:n})})]})}var S=Object(d.b)(null,(function(e){return Object(x.b)({trainerDetail:j.trainerDetail,updateTrainerDetailsApicall:j.updateTrainerDetailsApicall,fileUpload:j.fileUpload},e)}))((function(e){var t=Object(o.useState)(!1),n=Object(c.a)(t,2),p=n[0],h=n[1],x=Object(o.useState)(!1),S=Object(c.a)(x,2),y=S[0],T=S[1],R=Object(m.f)(),N=Object(o.useState)({firstName:"",lastName:"",verticals:[],description:"",inPersonAtClient_individualCharge:"",inPersonAtClient_twoPPL:"",inPersonAtClient_threePPL:"",inPersonAtClient_fourPPL:"",inPersonAtClient_classFlatRate:"",inPersonAtClient_threeSessionRate:"",inPersonAtClient_tenSessionRate:"",inPersonAtTrainer_individualCharge:"",inPersonAtTrainer_twoPPL:"",inPersonAtTrainer_threePPL:"",inPersonAtTrainer_fourPPL:"",inPersonAtTrainer_classFlatRate:"",inPersonAtTrainer_threeSessionRate:"",inPersonAtTrainer_tenSessionRate:"",virtual_individualCharge:"",virtual_twoPPL:"",virtual_threePPL:"",virtual_fourPPL:"",virtual_classFlatRate:"",virtual_threeSessionRate:"",virtual_tenSessionRate:""}),L=Object(c.a)(N,2),k=L[0],w=L[1];Object(o.useEffect)((function(){le(Object(j.captureTrainerCard)(k))}),[k]);var F=Object(o.useState)(!1),I=Object(c.a)(F,2),E=I[0],z=I[1],M=Object(o.useState)(!1),D=Object(c.a)(M,2),V=D[0],B=D[1],H=Object(o.useState)(!1),Y=Object(c.a)(H,2),U=Y[0],W=Y[1],$=Object(o.useState)(!1),q=Object(c.a)($,2),J=q[0],Z=q[1],G=Object(o.useState)(null),K=Object(c.a)(G,2),Q=K[0],X=K[1],ee=Object(o.useRef)(),te=Object(o.useState)(!1),ne=Object(c.a)(te,2),ae=ne[0],ie=ne[1],re=Object(o.useState)({}),ce=Object(c.a)(re,2),oe=ce[0],se=ce[1],le=Object(d.c)();Object(o.useEffect)((function(){e.trainerDetail().then((function(e){var t=e.classSessionPricing,n=void 0===t?{}:t,a=e.oneOnOnePricing,i=void 0===a?{}:a,c=e.socialSessionPricing,o=void 0===c?{}:c,s=e.profilePicture;s&&X(s),w(Object(r.a)(Object(r.a)({},k),{},{firstName:e.firstName,lastName:e.lastName,description:e.description,verticals:e.areaOfExpertise,inPersonAtClient_individualCharge:i?i.inPersonAtClientLocation:"",inPersonAtClient_twoPPL:o?o.inPeronAtClientLocationfor2People:"",inPersonAtClient_threePPL:o?o.inPeronAtClientLocationfor3People:"",inPersonAtClient_fourPPL:o?o.inPeronAtClientLocationfor4People:"",inPersonAtClient_classFlatRate:n?n.inPersonAtclientLocationfor15People:"",inPersonAtClient_threeSessionRate:i?i.passRatefor3SessionAtClientLocation:"",inPersonAtClient_tenSessionRate:i?i.passRatefor10SessionAtClientLocation:"",inPersonAtTrainer_individualCharge:i?i.inPersonAtTrainerLocation:"",inPersonAtTrainer_twoPPL:o?o.inPeronAtTrainerLocationfor2People:"",inPersonAtTrainer_threePPL:o?o.inPeronAtTrainerLocationfor3People:"",inPersonAtTrainer_fourPPL:o?o.inPeronAtTrainerLocationfor4People:"",inPersonAtTrainer_classFlatRate:n?n.inPersonAttrainerLocationfor15People:"",inPersonAtTrainer_threeSessionRate:i?i.passRatefor3SessionAtTrainerLocation:"",inPersonAtTrainer_tenSessionRate:i?i.passRatefor10SessionAtTrainerLocation:"",virtual_individualCharge:i?i.virtualSession:"",virtual_twoPPL:o?o.virtualSessionfor2People:"",virtual_threePPL:o?o.virtualSessionfor3People:"",virtual_fourPPL:o?o.virtualSessionfor4People:"",virtual_classFlatRate:n?n.virtualSessionfor15People:"",virtual_threeSessionRate:i?i.passRatefor3SessionAtVirtual:"",virtual_tenSessionRate:i?i.passRatefor10SessionAtVirtual:""})),e.areaOfExpertise&&(e.areaOfExpertise.find((function(e){return"Strength & HIIT"===e}))&&B(!0),e.areaOfExpertise.find((function(e){return"Yoga"===e}))&&W(!0),e.areaOfExpertise.find((function(e){return"Boxing"===e}))&&z(!0),e.areaOfExpertise.find((function(e){return"Pilates"===e}))&&Z(!0))}))}),[]);var ue=function(e){e.persist();var t=e.target||{},n=t.name,a=t.value,c=Object(r.a)({},oe);c[n]=void 0,se(Object(r.a)(Object(r.a)({},oe),c)),w(Object(r.a)(Object(r.a)({},k),{},Object(i.a)({},n,a)))},de=function(){if(function(e){var t=Object(g.default)(e,{firstName:{presence:{allowEmpty:!1,message:"^First name is required"},format:{pattern:/^[A-Za-z ]+$/,flags:"i",message:"^First name must contain only letters and spaces"}},lastName:{presence:{allowEmpty:!1,message:"^Last name is required"},format:{pattern:/^[A-Za-z? ,_-]+$/,flags:"i",message:"^First name must contain only letters and spaces"}}});if(void 0!==t){var n=Object(r.a)({},t);se(Object(r.a)(Object(r.a)({},n),t))}return!t}({firstName:k.firstName,lastName:k.lastName}))if(k.inPersonAtClient_individualCharge||k.inPersonAtTrainer_individualCharge){var t={firstName:k.firstName,lastName:k.lastName,areaOfExpertise:k.verticals,description:k.description,profilePicture:Q,oneOnOnePricing:{inPersonAtClientLocation:k.inPersonAtClient_individualCharge,inPersonAtTrainerLocation:k.inPersonAtTrainer_individualCharge,virtualSession:k.virtual_individualCharge,passRatefor3SessionAtClientLocation:k.inPersonAtClient_threeSessionRate,passRatefor10SessionAtClientLocation:k.inPersonAtClient_tenSessionRate,passRatefor3SessionAtTrainerLocation:k.inPersonAtTrainer_threeSessionRate,passRatefor10SessionAtTrainerLocation:k.inPersonAtTrainer_tenSessionRate,passRatefor3SessionAtVirtual:k.virtual_threeSessionRate,passRatefor10SessionAtVirtual:k.virtual_tenSessionRate},socialSessionPricing:{inPeronAtClientLocationfor2People:k.inPersonAtClient_twoPPL,inPeronAtClientLocationfor3People:k.inPersonAtClient_threePPL,inPeronAtClientLocationfor4People:k.inPersonAtClient_fourPPL,inPeronAtTrainerLocationfor2People:k.inPersonAtTrainer_twoPPL,inPeronAtTrainerLocationfor3People:k.inPersonAtTrainer_threePPL,inPeronAtTrainerLocationfor4People:k.inPersonAtTrainer_fourPPL,virtualSessionfor2People:k.virtual_twoPPL,virtualSessionfor3People:k.virtual_threePPL,virtualSessionfor4People:k.virtual_fourPPL},classSessionPricing:{inPersonAtclientLocationfor15People:k.inPersonAtClient_classFlatRate,inPersonAttrainerLocationfor15People:k.inPersonAtTrainer_classFlatRate,virtualSessionfor15People:k.virtual_classFlatRate}};ie(!0),e.updateTrainerDetailsApicall(t).then((function(){R.push("/trainer/setup"),ie(!1)})).catch((function(){ie(!1)}))}else T(!0)};return Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"card_inner",children:[Object(C.jsx)("div",{className:"card_prev_link",children:Object(C.jsx)("div",{onClick:function(){h((function(e){return!e}))},className:"prev_link",children:"Preview Your Trainer Card"})}),Object(C.jsx)(l.TrainerPrevModal,{open:p,setOpen:h,trainerCardData:k,setTrainerCardData:w,image:Q,setImage:X}),Object(C.jsxs)("div",{className:"card_heading",children:[Object(C.jsx)("h2",{children:"Time to build your Trainer Card!"}),Object(C.jsx)("p",{children:"Heads up! Your trainer card is what clients will see when trainer results start filtering. Utilize keywords as anything you write here will also besearchable in our search box!"})]}),Object(C.jsx)("div",{className:"pro_pic_center",children:Object(C.jsxs)("div",{className:"item1_card",children:[Q?Object(C.jsxs)("div",{className:"combin_profile",children:[Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),ee.current.click()},children:Object(C.jsx)("img",{src:Q||O.default,alt:"icon",style:{objectFit:"cover",width:"200px",height:"200px",borderRadius:"100px",position:"relative",left:"-6px",top:"-1px"}})}),Object(C.jsx)("img",{src:P.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),ee.current.click()}})]}):Object(C.jsxs)("div",{className:"combin_profile",children:[Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),ee.current.click()},children:Object(C.jsx)("img",{src:O.default,style:{objectFit:"cover",width:"100px",height:"100px",borderRadius:"100px"}})}),Object(C.jsx)("img",{src:P.default,alt:"icon",style:{objectFit:"cover",width:"20px",height:"20px",borderRadius:"100px"},onClick:function(e){e.preventDefault(),ee.current.click()}})]}),Object(C.jsx)("input",{type:"file",ref:ee,accept:"image/*",style:{display:"none"},onChange:function(t){return function(t){var n=t.target.files[0];if(n){var a=new FormData;a.append("profilePicture",n),e.fileUpload(a).then((function(e){X(e.urlPath)}))}}(t)}}),Object(C.jsx)("h5",{children:"Upload your profile picture, hotshot!"})]})}),Object(C.jsxs)("div",{className:"item2_card",children:[Object(C.jsxs)("div",{className:"item2_card_inner",children:[Object(C.jsx)("label",{children:"First Name"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("input",{style:{textTransform:"capitalize"},value:k.firstName,onChange:function(e){return ue(e)},name:"firstName"}),Object(C.jsx)("br",{}),oe.firstName&&Object(C.jsx)(_.ErrorComponent,{message:oe.firstName[0]})]}),Object(C.jsxs)("div",{className:"item2_card_inner",children:[Object(C.jsx)("label",{children:"Last Name"})," ",Object(C.jsx)("br",{}),Object(C.jsx)("input",{style:{textTransform:"capitalize"},value:k.lastName,onChange:function(e){return ue(e)},name:"lastName"}),Object(C.jsx)("br",{}),oe.lastName&&Object(C.jsx)(_.ErrorComponent,{message:oe.lastName[0]})]})]}),Object(C.jsxs)("div",{className:"item3_card",children:[Object(C.jsx)("label",{children:"Tell Us What You Train! Select All The Categories That Apply"}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"item3_card_inner",children:[Object(C.jsx)(b.a,{checked:V,icon:Object(C.jsx)(v.a,{className:"vertical_checkbox"}),checkedIcon:Object(C.jsx)(f.a,{className:"vertical_checkbox"}),onChange:function(e){if(B(!V),e.target.checked)w(Object(r.a)(Object(r.a)({},k),{},{verticals:[].concat(Object(a.a)(k.verticals),["Strength & HIIT"])}));else{var t=k.verticals.indexOf("Strength & HIIT");t>-1&&k.verticals.splice(t,1)}}}),"\u2002",Object(C.jsx)("h6",{style:{marginRight:"1em"},children:"Strength & HIIT"}),"\u2002",Object(C.jsx)(b.a,{checked:E,icon:Object(C.jsx)(v.a,{className:"vertical_checkbox"}),checkedIcon:Object(C.jsx)(f.a,{className:"vertical_checkbox"}),onChange:function(e){if(z(!E),e.target.checked)w(Object(r.a)(Object(r.a)({},k),{},{verticals:[].concat(Object(a.a)(k.verticals),["Boxing"])}));else{var t=k.verticals.indexOf("Boxing");t>-1&&k.verticals.splice(t,1)}}}),"\u2002",Object(C.jsx)("h6",{style:{marginRight:"1em"},children:"Boxing"})," \u2002",Object(C.jsx)(b.a,{checked:U,icon:Object(C.jsx)(v.a,{className:"vertical_checkbox"}),checkedIcon:Object(C.jsx)(f.a,{className:"vertical_checkbox"}),onChange:function(e){if(W(!U),e.target.checked)w(Object(r.a)(Object(r.a)({},k),{},{verticals:[].concat(Object(a.a)(k.verticals),["Yoga"])}));else{var t=k.verticals.indexOf("Yoga");t>-1&&k.verticals.splice(t,1)}}}),"\u2002",Object(C.jsx)("h6",{style:{marginRight:"1em"},children:"Yoga"})," \u2002",Object(C.jsx)(b.a,{checked:J,icon:Object(C.jsx)(v.a,{className:"vertical_checkbox"}),checkedIcon:Object(C.jsx)(f.a,{className:"vertical_checkbox"}),onChange:function(e){if(Z(!J),e.target.checked)w(Object(r.a)(Object(r.a)({},k),{},{verticals:[].concat(Object(a.a)(k.verticals),["Pilates"])}));else{var t=k.verticals.indexOf("Pilates");t>-1&&k.verticals.splice(t,1)}}}),"\u2002",Object(C.jsx)("h6",{style:{marginRight:"1em"},children:"Pilates"})," \u2002"]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{children:"Write A Short And Sweet Description For Clients To Pick You In 100 Characters"}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{value:k.description,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{description:e.target.value}))},maxLength:"100",placeholder:"Give us your elevator pitch! This is all clients will see on the search results page until they click into your full profile."})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{children:"Tell Us About Your Pricing"}),Object(C.jsx)("br",{}),Object(C.jsx)("p",{children:"Please fill only those fields relevant to the various kinds of training you offer. We recommend that the pricing of the social sessions (2-4 people) should provide savings to each client in comparison to a 1 on 1 individual session. The pricing for a 5-15 person group class is a flat rate that will be split evenly amongst each client."})]}),Object(C.jsx)("div",{children:Object(C.jsx)(A,{title:"In Person Training Session Pricing (at the clients location)",children:Object(C.jsxs)("div",{className:"card_accordion",children:[Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Individual Charge",value:k.inPersonAtClient_individualCharge,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_individualCharge:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 2 People)",value:k.inPersonAtClient_twoPPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_twoPPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"}),Object(C.jsx)("br",{})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 3 People)",value:k.inPersonAtClient_threePPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_threePPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"}),Object(C.jsx)("br",{})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 4 People)",value:k.inPersonAtClient_fourPPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_fourPPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"}),Object(C.jsx)("br",{})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Class Flat Rate (5-15 People)",value:k.inPersonAtClient_classFlatRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_classFlatRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"}),Object(C.jsx)("br",{})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"3 Session Rate",value:k.inPersonAtClient_threeSessionRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_threeSessionRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"10 Session Pass Rate",value:k.inPersonAtClient_tenSessionRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtClient_tenSessionRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"}),Object(C.jsx)("br",{})]})]})})}),Object(C.jsx)("div",{children:Object(C.jsx)(A,{title:"In Person Training Session Pricing (at your location)",children:Object(C.jsxs)("div",{className:"card_accordion",children:[Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Individual Charge",value:k.inPersonAtTrainer_individualCharge,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_individualCharge:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 2 People)",value:k.inPersonAtTrainer_twoPPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_twoPPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 3 People)",value:k.inPersonAtTrainer_threePPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_threePPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 4 People)",value:k.inPersonAtTrainer_fourPPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_fourPPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Class Flat Rate (5-15 People)",value:k.inPersonAtTrainer_classFlatRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_classFlatRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsx)("div",{className:"card_accordion_input",children:Object(C.jsx)("input",{placeholder:"3 Session Rate",value:k.inPersonAtTrainer_threeSessionRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_threeSessionRate:e.target.value}))},type:"number"})}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"10 Session Pass Rate",value:k.inPersonAtTrainer_tenSessionRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{inPersonAtTrainer_tenSessionRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]})]})})}),Object(C.jsx)("div",{children:Object(C.jsx)(A,{title:"Virtual Training Session Pricing",children:Object(C.jsxs)("div",{className:"card_accordion",children:[Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Individual Charge",value:k.virtual_individualCharge,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_individualCharge:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 2 People)",value:k.virtual_twoPPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_twoPPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 3 People)",value:k.virtual_threePPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_threePPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Social Session (Total for 4 People)",value:k.virtual_fourPPL,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_fourPPL:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"Class Flat Rate (5-15 People)",value:k.virtual_classFlatRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_classFlatRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"3 Session Rate",value:k.virtual_threeSessionRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_threeSessionRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"})]}),Object(C.jsxs)("div",{className:"card_accordion_input",children:[Object(C.jsx)("input",{placeholder:"10 Session Pass Rate",value:k.virtual_tenSessionRate,onChange:function(e){w(Object(r.a)(Object(r.a)({},k),{},{virtual_tenSessionRate:e.target.value}))},type:"number"}),Object(C.jsx)("img",{src:s.default,alt:"icon"}),Object(C.jsx)("br",{})]})]})})}),Object(C.jsx)("div",{className:"error_span",children:y?Object(C.jsxs)("span",{children:["Please enter Individual Charge (atleast one)"," "]}):null}),Object(C.jsx)("div",{className:"card_submit",children:Object(C.jsx)("button",{onClick:function(){return de()},disabled:ae,children:ae?"Loading...":Object(C.jsxs)(C.Fragment,{children:["Continue To profile ",Object(C.jsx)(u.default,{})]})})})]})})}));t.default=S},395:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Picture Icon.3ba6c98d.svg"},396:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Profile Picture.93cd6a53.svg"},450:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/dollar Icon.4c16bd4d.svg"},498:function(e,t,n){},524:function(e,t,n){},525:function(e,t,n){},620:function(e,t,n){"use strict";function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];e.apply(this,a),t.apply(this,a)}}),(function(){}))}n.d(t,"a",(function(){return a}))},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(2);function i(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(2);function i(e){var t=a.useState(e),n=t[0],i=t[1],r=e||n;return a.useEffect((function(){null==n&&i("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}},699:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},700:function(e,t,n){var a=n(701).default;function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var o=r?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(n,c,o):n[c]=e[c]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},701:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},702:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(814)},776:function(e,t,n){"use strict";var a=n(699),i=n(700);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2)),c=(0,a(n(702)).default)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked");t.default=c},777:function(e,t,n){"use strict";var a=n(699),i=n(700);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2)),c=(0,a(n(702)).default)(r.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonChecked");t.default=c},814:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return i.a})),n.d(t,"createSvgIcon",(function(){return r.a})),n.d(t,"debounce",(function(){return c})),n.d(t,"deprecatedPropType",(function(){return o})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return l})),n.d(t,"ownerWindow",(function(){return u})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return j.a})),n.d(t,"unsupportedProp",(function(){return b})),n.d(t,"useControlled",(function(){return p.a})),n.d(t,"useEventCallback",(function(){return f.a})),n.d(t,"useForkRef",(function(){return h.a})),n.d(t,"unstable_useId",(function(){return v.a})),n.d(t,"useIsFocusVisible",(function(){return O.a}));var a=n(618),i=n(620),r=n(613);function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function a(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var c=this,o=function(){e.apply(c,i)};clearTimeout(t),t=setTimeout(o,n)}return a.clear=function(){clearTimeout(t)},a}function o(e,t){return function(){return null}}var s=n(662);function l(e){return e&&e.ownerDocument||document}function u(e){return l(e).defaultView||window}function d(e){return function(){return null}}var j=n(693);function b(e,t,n,a,i){return null}var p=n(676),f=n(678),h=n(677),v=n(663),O=n(694)},928:function(e,t,n){"use strict";var a=n(5),i=n(603),r=n(2),c=(n(4),n(611)),o=n(650),s=n(613),l=Object(s.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(s.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=n(639),j=Object(s.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=n(618),p=n(614),f=r.createElement(u,null),h=r.createElement(l,null),v=r.createElement(j,null),O=r.forwardRef((function(e,t){var n=e.checkedIcon,s=void 0===n?f:n,l=e.classes,u=e.color,d=void 0===u?"secondary":u,j=e.icon,p=void 0===j?h:j,O=e.indeterminate,P=void 0!==O&&O,m=e.indeterminateIcon,x=void 0===m?v:m,_=e.inputProps,g=e.size,C=void 0===g?"medium":g,A=Object(i.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=P?x:p,y=P?x:s;return r.createElement(o.a,Object(a.a)({type:"checkbox",classes:{root:Object(c.a)(l.root,l["color".concat(Object(b.a)(d))],P&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:d,inputProps:Object(a.a)({"data-indeterminate":P},_),icon:r.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===C?C:S.props.fontSize}),checkedIcon:r.cloneElement(y,{fontSize:void 0===y.props.fontSize&&"small"===C?C:y.props.fontSize}),ref:t},A))}));t.a=Object(p.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)}}]);
//# sourceMappingURL=22.2907ed0c.chunk.js.map