(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[41,74,149,222,223,224,245,246],{261:function(e,t,i){"use strict";i.r(t);var n=i(23),a=i(10),c=i(563),r=i(6),s=i(2),o=(i(481),i(123)),l=i(15),u=i(407),d=i(341),j=i(342),b=i(408),m=i(367),v=i(87),p=i(40),h=i(59),O=i(44),f=i(90),x=i(1),g=[{label:"Palm Beach",value:"Palm Beach",name:"serviceableLocation"},{label:"New York",value:"New York",name:"serviceableLocation"},{label:"Hamptons",value:"Hamptons",name:"serviceableLocation"},{label:"Miami",value:"Miami",name:"serviceableLocation"}],y=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(),c=Object(r.a)(a,2),o=c[0],l=c[1],d=Object(s.useRef)();return Object(s.useEffect)((function(){if(i){var e=new FileReader;e.onloadend=function(){l(e.result)},e.readAsDataURL(i)}else l(null)}),[i]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"renderImage",children:[o?Object(x.jsx)("img",{src:o,style:{objectFit:"cover",width:"180px",height:"180px"},onClick:function(){l(null)}}):Object(x.jsx)("div",{className:"combin_profile",children:Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),d.current.click()},children:Object(x.jsx)("img",{src:u.default,alt:"icon",style:{objectFit:"cover",width:"180px",height:"180px"}})})}),Object(x.jsx)("input",{type:"file",ref:d,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?n(t):n(null)}})]})})},N=Object(h.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(p.b)({updateTrainerDetails:v.updateTrainerDetails,getTrainerDetails:v.getTrainerDetails},e)}))((function(e){var t,i,u,p=e.getTrainerDetails,h=e.details,N=Object(s.useState)([]),L=Object(r.a)(N,2),_=(L[0],L[1],Object(s.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],serviceableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:""})),w=Object(r.a)(_,2),k=w[0],C=w[1],D=Object(s.useState)([{image:""}]),A=Object(r.a)(D,2),P=A[0],I=A[1],T=Object(s.useState)([{certificate:"",year:"",remove:""}]),S=Object(r.a)(T,2),M=S[0],Y=S[1],H=function(e,t){var i=Object(c.a)(M);i[e][t.target.name]=t.target.value,Y(i)},R=function(e,t){e.preventDefault&&e.preventDefault();var i=e.target||e||{},n=i.name,r=i.value,s=(i.label,Object(a.a)({},k)),o=Array.isArray(e);"trainingLocation"===n?s.trainingLocation.includes(t)?s.trainingLocation=s.trainingLocation.filter((function(e){return e!==t})):s.trainingLocation=[].concat(Object(c.a)(s.trainingLocation),[t]):s["".concat(o?e[0].name:n)]=o?e:r,C(s)};return Object(s.useEffect)((function(){p().then((function(e){console.log(e);var t=e||{},i=t.trainingProcess,n=void 0===i?"":i,c=t.myMotto,r=void 0===c?"":c,s=t.preferedTrainingMode,o=void 0===s?"":s,l=t.websiteLink,u=void 0===l?"":l,d=t.youtubeLink,j=void 0===d?"":d,b=t.instagramProfile,m=void 0===b?"":b,p=t.currentExperience,O=void 0===p?{}:p,f=t.certification,x=void 0===f?"":f,g=t.servicableLocation,y=void 0===g?[]:g,N=(O||{}).workLocation,L=void 0===N?"":N,_={details:Object(a.a)({motto:r,trainingProcessDescription:n,trainingLocation:o,serviceableLocation:null===y||void 0===y?void 0:y.map((function(e){return{label:e,value:e,name:"serviceableLocation"}})),location:L,websiteLink:u,instaHandle:m,youtubeChannel:j},h)},w=null===x||void 0===x?void 0:x.map((function(e){var t=e.certfiedYear;return{certificate:e.certificateName,year:t}}));Y(w),C(_.details),Object(v.updateTrainerDetails)(_)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"outter_tp_container",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"inner_trinerpro_container",children:Object(x.jsxs)("div",{className:"tp_wrapper",children:[Object(x.jsx)("div",{className:"tp_header",children:Object(x.jsx)("h2",{children:"My Profile"})}),Object(x.jsx)("div",{className:"tp_outter_form container",children:Object(x.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(x.jsxs)("div",{className:"tp_inner_form",children:[Object(x.jsxs)("div",{className:"tp_item1",children:[Object(x.jsx)("label",{children:"What\u2019s your Motto?"}),Object(x.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"",onChange:R,value:k.motto},"name","motto"))]}),Object(x.jsxs)("div",{className:"tp_item1",children:[Object(x.jsx)("label",{children:"Tell us about you and describe your training process"}),Object(x.jsx)("textarea",{type:"text",placeholder:"",onChange:R,value:k.trainingProcessDescription,name:"trainingProcessDescription"})]}),Object(x.jsxs)("div",{className:"tp_item1",children:[Object(x.jsx)("label",{children:"Throw in some photos showcasing you & your skills"}),Object(x.jsxs)("div",{className:"tp_image_render",children:[P.map((function(e,t){return Object(x.jsxs)("div",{className:"render_image",children:[Object(x.jsx)(y,{value:t.image}),Object(x.jsx)(y,{value:t.image}),Object(x.jsx)(y,{value:t.image}),Object(x.jsx)(y,{value:t.image}),Object(x.jsx)(y,{value:t.image})]},e)})),Object(x.jsx)("h5",{onClick:function(){I([].concat(Object(c.a)(P),[{image:""}]))},children:"+ Add More Image's"})]})]}),Object(x.jsxs)("div",{className:"tp_item_certi",children:[Object(x.jsx)("label",{children:"Throw in some photos showcasing you & your skills"}),Object(x.jsxs)("div",{className:"tp_certificates",children:[null===M||void 0===M?void 0:M.map((function(e,t){return Object(x.jsxs)("div",{className:"tp_input_certificate",children:[Object(x.jsx)("input",{type:"text",placeholder:"Display Certification API ",value:e.certificate,name:"certificate",onChange:function(e){return H(t,e)}}),Object(x.jsx)("input",{type:"text",placeholder:"Display Year API",value:e.year,name:"year",onChange:function(e){return H(t,e)}}),Object(x.jsxs)("button",{name:"remove",value:e.remove,children:["Remove ",Object(x.jsx)(l.default,{})]})]},t)})),Object(x.jsx)("h5",{onClick:function(){Y([].concat(Object(c.a)(M),[{certificate:"",year:"",remove:""}]))},children:"+ Add Certification"})]})]}),Object(x.jsx)("div",{className:"setup_card5",children:Object(x.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(x.jsxs)("div",{className:"setup_item",children:[Object(x.jsx)("label",{children:"Where will you be training?"}),Object(x.jsxs)("div",{className:"inputs_platform",children:[Object(x.jsx)("button",{onClick:function(e){return R(e,"Online")},className:"".concat((null===k||void 0===k||null===(t=k.trainingLocation)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(x.jsx)("button",{onClick:function(e){return R(e,"inperson")},className:"".concat((null===k||void 0===k||null===(i=k.trainingLocation)||void 0===i?void 0:i.includes("inperson"))?"active":""),name:"trainingLocation",children:"In Person"}),Object(x.jsx)("button",{onClick:function(e){return R(e,"outdoors")},className:"".concat((null===k||void 0===k||null===(u=k.trainingLocation)||void 0===u?void 0:u.includes("outdoors"))?"active":""),name:"trainingLocation",children:"Outdoors"})]})]}),Object(x.jsxs)("div",{className:"setup_item1",children:[Object(x.jsx)("h6",{children:"Which city will you train in?"}),Object(x.jsx)("div",{className:"inputs_platform",children:Object(x.jsx)("div",{className:"iconwrapper",children:Object(x.jsx)(o.a,{value:k.serviceableLocation,onChange:R,options:g,isMulti:!0,placeholder:"List all areas that you will service",className:"w-100"})})})]}),Object(x.jsxs)("div",{className:"setup_item1",children:[Object(x.jsx)("h6",{children:"Your preferred training location"}),Object(x.jsx)("div",{className:"inputs_platform",children:Object(x.jsxs)("div",{className:"iconwrapper",children:[Object(x.jsx)("input",{type:"text",placeholder:"Select your Location",onChange:R,value:k.location,name:"location"}),Object(x.jsx)("img",{src:m.default,alt:"icon"})]})})]}),Object(x.jsxs)("div",{className:"setup_item1",children:[Object(x.jsx)("h6",{children:"Website"}),Object(x.jsx)("div",{className:"inputs_platform",children:Object(x.jsxs)("div",{className:"iconwrapper",children:[Object(x.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:R,value:k.websiteLink,name:"websiteLink"}),Object(x.jsx)("img",{src:j.default,alt:"icon"})]})})]}),Object(x.jsxs)("div",{className:"setup_item1",children:[Object(x.jsx)("h6",{children:"Instagram"}),Object(x.jsx)("div",{className:"inputs_platform",children:Object(x.jsxs)("div",{className:"iconwrapper",children:[Object(x.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:R,value:k.instaHandle,name:"instaHandle"}),Object(x.jsx)("img",{src:d.default,alt:"icon"})]})})]}),Object(x.jsxs)("div",{className:"setup_item1",children:[Object(x.jsx)("h6",{children:"Youtube"}),Object(x.jsx)("div",{className:"inputs_platform",children:Object(x.jsxs)("div",{className:"iconwrapper",children:[Object(x.jsx)("input",{type:"text",placeholder:"Add your Youtube Channel",onChange:R,value:k.youtubeChannel,name:"youtubeChannel"}),Object(x.jsx)("img",{src:b.default,alt:"icon"})]})})]})]})})]}),Object(x.jsx)("div",{className:"tp_button_save",children:Object(x.jsxs)("button",{onClick:function(){var e=k.instaHandle,t=k.location,i=k.motto,n=k.serviceableLocation,c=k.trainingLocation,r={trainingProcess:k.trainingProcessDescription,myMotto:i,preferedTrainingMode:c,websiteLink:k.websiteLink,youtubeLink:k.youtubeChannel,instagramProfile:e,currentExperience:{workLocation:t},certification:null===M||void 0===M?void 0:M.map((function(e){var t=e.certificate;return{certificateName:"",certfiedYear:e.year,certification:t}})),servicableLocation:null===n||void 0===n?void 0:n.map((function(e){return e.value}))};console.log(r);var s=O.TrainerApi.updateTrainerAvailabilityApi;s.body=r,Object(f.api)(Object(a.a)({},s)).then((function(e){var t=e.data,i=e.message;console.log(t,i)})).catch((function(e){return console.log(e)}))},children:["Save changes ",Object(x.jsx)(l.default,{})]})})]})})]})})})})})}));t.default=N},341:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Insta Icon.432b9d08.svg"},342:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Web Icon.b0ff0aa9.svg"},367:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Location Icon.6eb543f1.svg"},407:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Image 1.8f33ee1e.svg"},408:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Youtube.1eb126cd.svg"},481:function(e,t,i){},563:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i(115);var a=i(88);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=41.53588f84.chunk.js.map