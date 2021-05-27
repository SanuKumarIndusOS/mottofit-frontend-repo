(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[38,87,122,181,265,266,267,290,291],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"updateTrainerDetails",(function(){return r})),a.d(t,"getTrainerDetails",(function(){return o})),a.d(t,"getTrainerSessionDetails",(function(){return s}));var n=a(11),i=a(30),c=a(59),r=function(e){return function(t){return new Promise((function(a){t({type:i.TrainerActionType.updateTrainerDetails,payload:e}),a(!0)}))}},o=function(){return function(e,t,a){var r=a.api;return new Promise((function(t,a){var o=c.TrainerApi.getTrainerApi;r(Object(n.a)({},o)).then((function(a){var n=a.data;e({type:i.TrainerActionType.updateTrainerDetails,payload:{data:n}}),t(n)})).catch((function(e){a(e)}))}))}},s=function(){return function(e,t,a){var r=a.api;return new Promise((function(t,a){var o=c.TrainerApi.getTrainerSessionApi;r(Object(n.a)({},o)).then((function(a){var n=a.data;console.log(n),e({type:i.TrainerActionType.updateTrainerDetails,payload:{sessionData:n}}),t(n)})).catch((function(e){a(e)}))}))}}},248:function(e,t,a){"use strict";a.r(t);var n=a(16),i=a(570),c=a(10),r=a(11),o=a(2),s=a.n(o),l=(a(497),a(37)),d=a(395),u=a(332),j=a(335),b=(a(397),a(396)),h=a(211),m=a(38),p=a(68),f=a(59),v=a(72),O=a(71),g=a.n(O),x=a(578),y=a(649),k=a(638),N=a(601),C=(a(485),a(1)),w=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York City",value:"New York City",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],_=Object(x.a)({root:{"&$checked":{color:y.a[600]}},checked:{}})((function(e){return Object(C.jsx)(k.a,Object(r.a)({color:"default"},e))})),T=function(){var e=Object(o.useState)(),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(),r=Object(c.a)(i,2),s=r[0],l=r[1],u=Object(o.useRef)();return Object(o.useEffect)((function(){if(a){var e=new FileReader;e.onloadend=function(){l(e.result)},e.readAsDataURL(a)}else l(null)}),[a]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"renderImage",children:[s?Object(C.jsx)("img",{src:s,style:{objectFit:"cover",width:"180px",height:"180px"},onClick:function(){l(null)}}):Object(C.jsx)("div",{className:"combin_profile",children:Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),u.current.click()},children:Object(C.jsx)("img",{src:d.default,alt:"icon",style:{objectFit:"cover",width:"180px",height:"180px"}})})}),Object(C.jsx)("input",{type:"file",ref:u,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?n(t):n(null)}})]})})},L=Object(p.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(m.b)({updateTrainerDetails:h.updateTrainerDetails,getTrainerDetails:h.getTrainerDetails},e)}))((function(e){var t,a,d,h=e.getTrainerDetails,m=e.details,p=(e.updateTrainerDetails,"What\u2019s your Motto?"),O="Tell us about you and describe your training process",x="Throw in some photos showcasing you & your skills",y="Certifications you\u2019d like to display",k="Where will you be training",L="Which city will you train in?",S="Website",A="Instagram",D=Object(o.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],serviceableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:""}),P=Object(c.a)(D,2),I=P[0],E=P[1],M=s.a.useState({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",willingToTravel:"0",servicableLocation:""}),H=Object(c.a)(M,2),z=H[0],R=H[1],F=Object(o.useState)({visiable:!1}),W=Object(c.a)(F,2),Y=W[0],$=W[1],B=s.a.useState("a"),U=Object(c.a)(B,2),Z=U[0],G=U[1],J=s.a.useState(""),K=Object(c.a)(J,2),V=K[0],q=K[1],Q=function(e){q(e.target.value),R(Object(r.a)(Object(r.a)({},z),{},{willingToTravel:e.target.value}))},X=function(e){G(e.target.value)},ee=Object(o.useState)([{image:""}]),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ie=Object(o.useState)([{certificate:"",year:"",remove:""}]),ce=Object(c.a)(ie,2),re=ce[0],oe=ce[1],se=function(e,t){var a=Object(i.a)(re);a[e][t.target.name]=t.target.value,oe(a)},le=function(e,t){e.preventDefault&&e.preventDefault();var a=e.target||e||{},n=a.name,c=a.value,o=(a.label,Object(r.a)({},I)),s=Array.isArray(e);"trainingLocation"===n?o.trainingLocation.includes(t)?o.trainingLocation=o.trainingLocation.filter((function(e){return e!==t})):o.trainingLocation=[].concat(Object(i.a)(o.trainingLocation),[t]):o["".concat(s?e[0].name:n)]=s?e:c,E(o)};return Object(o.useEffect)((function(){h().then((function(e){console.log(e,"api data");var t=e||{},a=t.trainingProcess,n=void 0===a?"":a,i=t.myMotto,c=void 0===i?"":i,o=t.websiteLink,s=void 0===o?"":o,l=t.instagramProfile,d=void 0===l?"":l,u={details:Object(r.a)({motto:c,trainingProcessDescription:n,location:s,instaHandle:d},m)};E(u.details)})).catch((function(e){return console.log(e)}))}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"outter_tp_container",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"inner_trinerpro_container",children:Object(C.jsxs)("div",{className:"tp_wrapper",children:[Object(C.jsx)("div",{className:"tp_header",children:Object(C.jsx)("h2",{children:"My Profile"})}),Object(C.jsx)("div",{className:"tp_outter_form container",children:Object(C.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsxs)("div",{className:"setup_card1",children:[Object(C.jsx)("h6",{children:p}),Object(C.jsx)("textarea",{type:"text",placeholder:"Share the words you live or train by in 250 characters or less",onChange:le,value:I.motto,name:"motto",maxlength:"250"})]}),Object(C.jsxs)("div",{className:"setup_card2",children:[Object(C.jsx)("h6",{children:O}),Object(C.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"Tell clients everything you think they should know! Utilize Key words as anything you write here\r will be searchable through our search bar",onChange:le,value:I.trainingProcessDescription},"name","trainingProcessDescription"))]}),Object(C.jsxs)("div",{className:"setup_card3",children:[Object(C.jsx)("h6",{children:x}),Object(C.jsxs)("div",{className:"read_image",children:[ae.slice(0,2).map((function(e,t){return Object(C.jsxs)("div",{className:"render_image",children:[Object(C.jsx)(T,{value:t.image}),Object(C.jsx)(T,{value:t.image}),Object(C.jsx)(T,{value:t.image}),Object(C.jsx)(T,{value:t.image}),Object(C.jsx)(T,{value:t.image})]},e)})),Y?Object(C.jsx)("h5",{onClick:function(){return ne([].concat(Object(i.a)(ae),[{image:""}])),void $(!1)},children:"+ Add More Image's"}):Object(C.jsx)("h5",{onClick:function(){return function(e){var t=Object(i.a)(ae);t.splice(e,1),ne(t),$(!0)}()},children:"Remove"})]})]}),Object(C.jsxs)("div",{className:"setup_card4",children:[Object(C.jsx)("h6",{children:y}),null===re||void 0===re?void 0:re.map((function(e,t){return Object(C.jsxs)("div",{className:"inputs_certificate",children:[Object(C.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return se(t,e)}}),Object(C.jsx)("input",{type:"text",placeholder:"Year you were Certified",value:e.year,name:"year",onChange:function(e){return se(t,e)}})]},t)})),Object(C.jsx)("h5",{onClick:function(){oe([].concat(Object(i.a)(re),[{certificate:"",year:"",remove:""}]))},children:"+ Add Certification"})]}),Object(C.jsx)("div",{className:"setup_card5",children:Object(C.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(C.jsxs)("div",{className:"setup_item",children:[Object(C.jsx)("h6",{children:k}),Object(C.jsxs)("div",{className:"inputs_platform",children:[Object(C.jsx)("button",{onClick:function(e){return le(e,"Online")},className:"".concat((null===I||void 0===I||null===(t=I.trainingLocation)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(C.jsx)("button",{onClick:function(e){return le(e,"inperson")},className:"".concat((null===I||void 0===I||null===(a=I.trainingLocation)||void 0===a?void 0:a.includes("inperson"))?"active":""),name:"trainingLocation",children:"In Person"})]}),Object(C.jsx)("div",{className:"social_meeting_links",children:(null===I||void 0===I||null===(d=I.trainingLocation)||void 0===d?void 0:d.includes("Online"))?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h5",{children:"Add your Google or Zoom meeting link"}),Object(C.jsx)("div",{className:"inputs_platform",children:Object(C.jsx)("div",{className:"iconwrapper",children:Object(C.jsx)("textarea",{type:"text",placeholder:"Add a Google or Zoom meeting link",name:"virtualMeetingLink"})})})]}):null})]}),Object(C.jsxs)("div",{className:"setup_item1",children:[Object(C.jsx)("h6",{children:L}),Object(C.jsx)("div",{className:"inputs_platform",children:Object(C.jsx)("div",{className:"iconwrapper",children:Object(C.jsx)(N.Dropdown,{className:"custom_dropdown",title:"Select Location",list:w,value:I.serviceableLocation,onChange:function(e){E(Object(r.a)(Object(r.a)({},I),{},{serviceableLocation:e.value})),console.log(e.value)},name:"location"})})})]}),Object(C.jsxs)("div",{className:"item_3",children:[Object(C.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(C.jsx)(_,{checked:"a"===Z,onChange:X,value:"a",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"a"}}),Object(C.jsx)("label",{children:"Yes"}),Object(C.jsx)(_,{checked:"b"===Z,onChange:X,value:"b",name:"radio-button-demo",label:"Strength & Hitt",inputProps:{"aria-label":"b"}}),Object(C.jsx)("label",{children:"No"})]}),Object(C.jsxs)("div",{className:"item_4",children:[Object(C.jsx)("h6",{children:"Details of the facility/location"}),Object(C.jsx)("div",{className:"inputs_platform",children:Object(C.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location"})})]}),Object(C.jsxs)("div",{className:"item_5",children:[Object(C.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(C.jsx)(_,{checked:"1"===V,onChange:Q,value:"1",label:"Strength & Hitt",inputProps:{"aria-label":"1"}}),Object(C.jsx)("label",{children:" Yes!"}),Object(C.jsx)(_,{checked:"0"===V,onChange:Q,value:"0",label:"Strength & Hitt",inputProps:{"aria-label":"0"}}),Object(C.jsx)("label",{children:"No"})]}),Object(C.jsxs)("div",{className:"item_6",children:[Object(C.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(C.jsxs)("div",{className:"inputs_platform",children:[Object(C.jsx)("textarea",{type:"text",placeholder:"Neighborhood List"}),Object(C.jsx)("img",{src:b.default,alt:"icon",className:"loction_img_select"})]})]}),Object(C.jsxs)("div",{className:"setup_item1",children:[Object(C.jsx)("h6",{children:A}),Object(C.jsx)("div",{className:"inputs_platform",children:Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:le,value:I.instaHandle,name:"instaHandle"}),Object(C.jsx)("img",{src:u.default,alt:"icon"})]})})]}),Object(C.jsxs)("div",{className:"setup_item1",children:[Object(C.jsx)("h6",{children:S}),Object(C.jsx)("div",{className:"inputs_platform",children:Object(C.jsxs)("div",{className:"iconwrapper",children:[Object(C.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:le,value:I.websiteLink,name:"websiteLink"}),Object(C.jsx)("img",{src:j.default,alt:"icon"})]})})]})]})}),Object(C.jsx)("div",{className:"tp_button_save mb-5",children:Object(C.jsxs)("button",{onClick:function(){var e={"Content-Type":"application/json",Authorization:localStorage.getItem("token")};g.a.get("http://doodlebluelive.com:2307/v1/trainer",{applicationStatus:"setupComplete"},{headers:e}).then((function(e){console.log(e)}));var t=I.instaHandle,a=I.motto,n=I.trainingProcessDescription,i=I.websiteLink;console.log(I,"trainer data");var c={trainingProcess:n,myMotto:a,preferedTrainingMode:i,instagramProfile:t,certification:null===re||void 0===re?void 0:re.map((function(e){var t=e.certificate;return{certificateName:"",certfiedYear:e.year,certification:t}}))};console.log(c,"payload");var o=f.TrainerApi.updateTrainerAvailabilityApi;o.body=c,Object(v.api)(Object(r.a)({},o)).then((function(e){var t=e.data,a=e.message;console.log(t,a),alert("Successfully added changes")})).catch((function(e){return console.log(e)}))},children:["Save changes ",Object(C.jsx)(l.default,{})]})})]})})]})})})})})}));t.default=L},332:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Insta Icon.432b9d08.svg"},335:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Web Icon.b0ff0aa9.svg"},395:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Image 1.8f33ee1e.svg"},396:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Location Icon.6eb543f1.svg"},397:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Youtube.1eb126cd.svg"},485:function(e,t,a){},570:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(97);var i=a(69);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},638:function(e,t,a){"use strict";var n=a(4),i=a(571),c=a(2),r=(a(3),a(576)),o=a(602),s=a(577),l=Object(s.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(s.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(578);var j=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},c.createElement(l,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),b=a(592),h=a(593);var m=c.createContext();var p=c.createElement(j,{checked:!0}),f=c.createElement(j,null),v=c.forwardRef((function(e,t){var a=e.checked,s=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.name,j=e.onChange,b=e.size,v=void 0===b?"medium":b,O=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),g=c.useContext(m),x=a,y=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];e.apply(this,n),t.apply(this,n)}}),(function(){}))}(j,g&&g.onChange),k=u;return g&&("undefined"===typeof x&&(x=g.value===e.value),"undefined"===typeof k&&(k=g.name)),c.createElement(o.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(f,{fontSize:"small"===v?"small":"default"}),checkedIcon:c.cloneElement(p,{fontSize:"small"===v?"small":"default"}),classes:{root:Object(r.a)(s.root,s["color".concat(Object(h.a)(d))]),checked:s.checked,disabled:s.disabled},name:k,checked:x,onChange:y,ref:t},O))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(v)},649:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);
//# sourceMappingURL=38.4c7c5e31.chunk.js.map