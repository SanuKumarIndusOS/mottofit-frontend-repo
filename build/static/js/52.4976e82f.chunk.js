(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[52,207,208,281],{132:function(e,t,n){"use strict";n.r(t);var a=n(601),i=n(11),r=n(3),c=n(2),o=(n(481),n(6)),l=n(611),s=n(710),d=n(698),u=n(333),b=n(69),j=n(191),h=(n(229),n(482),n(100)),f=n(14),p=n(43),m=n(27),O=n(34),v=n(50),g=n(1),y=Object(l.a)({root:{"&$checked":{color:s.a[600]}},checked:{}})((function(e){return Object(g.jsx)(d.a,Object(r.a)({color:"default"},e))})),x=Object(O.b)(null,(function(e){return Object(m.b)({updateTrainerDetailsApicall:v.updateTrainerDetailsApicall,trainerDetail:v.trainerDetail},e)}))((function(e){var t=e.updateTrainerDetailsApicall,n=e.trainerDetail,l=Object(c.useState)("a"),s=Object(i.a)(l,2),d=s[0],m=s[1],O=Object(c.useState)(""),v=Object(i.a)(O,2),x=v[0],k=v[1],C=Object(c.useState)(!1),T=Object(i.a)(C,2),N=T[0],w=T[1],L=Object(c.useState)(!1),M=Object(i.a)(L,2),S=M[0],_=M[1],P=Object(c.useState)(!1),A=Object(i.a)(P,2),F=A[0],E=A[1],D=Object(c.useRef)(null),W=Object(c.useState)({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",servicableLocation:""}),z=Object(i.a)(W,2),I=z[0],B=z[1],R=function(e){m(e.target.value)},$=function(e){k(e.target.value)};return Object(c.useEffect)((function(){n().then((function(e){if(e){var t={hoursPerWeek:e.hoursPerWeek?e.hoursPerWeek:0,preferedTrainingMode:e.preferedTrainingMode?e.preferedTrainingMode:[],trainingFacilityLocation:e.trainingFacilityLocation?e.trainingFacilityLocation:"",servicableLocation:e.servicableLocation?e.servicableLocation:""};if(B(t),null!==e.trainingFacility&&void 0!==e.trainingFacility&&m(e.trainingFacility?"a":"b"),null!==e.willingToTravel&&void 0!==e.willingToTravel&&k(e.willingToTravel?"1":"0"),e.preferedTrainingMode&&0!==e.preferedTrainingMode.length){0!==e.preferedTrainingMode.filter((function(e){return"Online"==e})).length&&w(!0);0!==e.preferedTrainingMode.filter((function(e){return"inperson"==e})).length&&_(!0)}}}))}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"link_wrapper",children:[Object(g.jsx)("img",{src:u.default,alt:"icon"}),Object(g.jsx)("div",{className:"inner_links",children:Object(g.jsx)(o.a,{to:"/trainer/background",children:"Back to Trainer Background"})})]}),Object(g.jsxs)("div",{className:"main_wrappercontainer",children:[Object(g.jsxs)("div",{className:"wrapper_inneritem",children:[Object(g.jsx)("h1",{children:"Highlight your availability on the platform"}),Object(g.jsxs)("form",{className:"container",onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsxs)("div",{className:"content_wrapper",children:[Object(g.jsxs)("div",{className:"item_1",children:[Object(g.jsx)("h6",{children:"How many hours will you list on Motto?"}),Object(g.jsx)("div",{className:"inputs_platform",children:Object(g.jsx)("input",{type:"number",placeholder:"10 Hours/Week",value:I.hoursPerWeek,onChange:function(e){B(Object(r.a)(Object(r.a)({},I),{},{hoursPerWeek:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item_2",children:[Object(g.jsx)("h6",{children:"Where are you willing to train?"}),Object(g.jsxs)("div",{className:"inputs_platform",children:[Object(g.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(a.a)(I.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(a.a)(n),[t]),I.preferedTrainingMode=Object(a.a)(n),B(Object(r.a)({},I)),w((function(e){return!e}))}(0,"Online")},className:N?"buttonFalse":"buttonTrue",children:"Virtual"}),Object(g.jsx)("button",{onClick:function(e){return function(e,t){var n=Object(a.a)(I.preferedTrainingMode);n=n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(a.a)(n),[t]),I.preferedTrainingMode=Object(a.a)(n),B(Object(r.a)({},I)),_((function(e){return!e}))}(0,"inperson")},className:S?"buttonFalse":"buttonTrue",children:"In Person"})]})]}),Object(g.jsxs)("div",{className:"item_3",children:[Object(g.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(g.jsx)(y,{checked:"a"==d,onChange:R,value:"a",name:"radio-button-demo",inputProps:{"aria-label":"a"}}),Object(g.jsx)("label",{children:"Yes"}),Object(g.jsx)(y,{checked:"b"==d,onChange:R,value:"b",name:"radio-button-demo",inputProps:{"aria-label":"b"}}),Object(g.jsx)("label",{children:"No"})]}),Object(g.jsxs)("div",{className:"item_4",children:[Object(g.jsx)("h6",{children:"Details of the facility/location"}),Object(g.jsx)("div",{className:"inputs_platform",children:Object(g.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",value:I.trainingFacilityLocation,onChange:function(e){B(Object(r.a)(Object(r.a)({},I),{},{trainingFacilityLocation:e.target.value}))}})})]}),Object(g.jsxs)("div",{className:"item_5",children:[Object(g.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(g.jsx)(y,{checked:"1"==x,onChange:$,value:"1",inputProps:{"aria-label":"1"}}),Object(g.jsx)("label",{children:" Yes!"}),Object(g.jsx)(y,{checked:"0"==x,onChange:$,value:"0",inputProps:{"aria-label":"0"}}),Object(g.jsx)("label",{children:"No"})]}),Object(g.jsxs)("div",{className:"item_6",children:[Object(g.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(g.jsx)("div",{className:"inputs_platform",children:Object(g.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",value:I.servicableLocation,onChange:function(e){B(Object(r.a)(Object(r.a)({},I),{},{servicableLocation:e.target.value}))}})})]})]}),Object(g.jsxs)("div",{className:"submit_button",children:[Object(g.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault();var n={preferedTrainingMode:I.preferedTrainingMode,willingToTravel:"1"==k,servicableLocation:I.servicableLocation,trainingFacilityLocation:[I.trainingFacilityLocation],stripeId:"",serviceableCity:I.servicableLocation};""!==I.hoursPerWeek&&(n.hoursPerWeek=parseFloat(I.hoursPerWeek)),t(n).then((function(){E(!0)})).catch((function(){E(!1)}))},children:["Submit",Object(g.jsx)(b.default,{})]}),F?Object(g.jsx)(j.a,{open:F,onClose:function(){E(!1),f.history.push("card")},center:!0,closeIcon:Object(g.jsx)("img",{src:h.default,alt:"close"}),container:D.current,styles:{boaderRadius:"10px"},children:Object(g.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(g.jsx)("h2",{children:"Background Information collection complete. Click the \u201cx\u201d to move to next section!"}),Object(g.jsx)("p",{children:"Time to move on to building your public Motto profile. This profile will be published only after you are approved!"})]})}):null]})]})]}),Object(g.jsx)("img",{src:p.default,alt:"icon",className:"ava_watermark"})]})]})})}));t.default=x},333:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Arrow Back.d3693c0f.svg"},481:function(e,t,n){},482:function(e,t,n){},601:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(99);var i=n(70);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},622:function(e,t,n){"use strict";function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];e.apply(this,a),t.apply(this,a)}}),(function(){}))}n.d(t,"a",(function(){return a}))},698:function(e,t,n){"use strict";var a=n(5),i=n(602),r=n(2),c=(n(4),n(609)),o=n(643),l=n(607),s=Object(l.a)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(r.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=n(611);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,n=e.classes,a=e.fontSize;return r.createElement("div",{className:Object(c.a)(n.root,t&&n.checked)},r.createElement(s,{fontSize:a}),r.createElement(d,{fontSize:a,className:n.layer}))})),j=n(630),h=n(625),f=n(622);var p=r.createContext();var m=r.createElement(b,{checked:!0}),O=r.createElement(b,null),v=r.forwardRef((function(e,t){var n=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,j=e.size,v=void 0===j?"medium":j,g=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),y=r.useContext(p),x=n,k=Object(f.a)(b,y&&y.onChange),C=u;return y&&("undefined"===typeof x&&(x=y.value===e.value),"undefined"===typeof C&&(C=y.name)),r.createElement(o.a,Object(a.a)({color:d,type:"radio",icon:r.cloneElement(O,{fontSize:"small"===v?"small":"default"}),checkedIcon:r.cloneElement(m,{fontSize:"small"===v?"small":"default"}),classes:{root:Object(c.a)(l.root,l["color".concat(Object(h.a)(d))]),checked:l.checked,disabled:l.disabled},name:C,checked:x,onChange:k,ref:t},g))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(v)},710:function(e,t,n){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=52.4976e82f.chunk.js.map