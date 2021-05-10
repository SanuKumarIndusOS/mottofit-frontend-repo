(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[6,48,86,141,142,155,196,202,203,204,225,226],{132:function(e,t,i){"use strict";i.r(t);var n=i(6),a=i(2),c=i.n(a),s=(i(422),i(228)),r=i(1);t.default=function(){var e="Security & Payment Information",t="The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them.",i="Please upload any one of your US government issued ID\u2019s",a="Please upload your insurance information",o="Add your account details for payment",l=c.a.useState(),d=Object(n.a)(l,2),j=d[0],u=d[1],b=function(){u(!j)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"payment_container",children:Object(r.jsxs)("div",{className:"payment_wrapper",children:[Object(r.jsxs)("div",{className:"payment_heading",children:[Object(r.jsx)("h2",{children:e}),Object(r.jsx)("p",{children:t})]}),Object(r.jsxs)("div",{className:"payment_inner container",children:[Object(r.jsxs)("div",{className:"payment_item1",children:[Object(r.jsx)("h6",{children:i}),Object(r.jsxs)("div",{className:"inputs_payment",children:[Object(r.jsxs)("select",{name:"bank",id:"id",className:j?"active":"option",defaultValue:"Default",onChange:b,children:[Object(r.jsx)("option",{value:"Default",disabled:!0,hidden:!0,children:"Select type of ID"}),Object(r.jsx)("option",{value:"USA",children:"USA"}),Object(r.jsx)("option",{value:"FBI",children:"FBI"}),Object(r.jsx)("option",{value:"National",children:"National"}),Object(r.jsx)("option",{value:"United",children:"United"})]}),Object(r.jsx)("input",{type:"text",placeholder:"Add your ID Number"}),Object(r.jsx)("input",{type:"file",name:"file",className:"custom-file-input"}),Object(r.jsx)("a",{className:"checkarrow",children:Object(r.jsx)(s.default,{})})]})]}),Object(r.jsxs)("div",{className:"payment_item1",children:[Object(r.jsx)("h6",{children:a}),Object(r.jsxs)("div",{className:"inputs_payment",children:[Object(r.jsxs)("select",{name:"bank",id:"insurance",className:j?"active":"option",defaultValue:"Default",onChange:b,children:[Object(r.jsx)("option",{value:"Default",disabled:!0,hidden:!0,children:"Select your Insurance"}),Object(r.jsx)("option",{value:"USA",children:"USA"}),Object(r.jsx)("option",{value:"FBI",children:"FBI"}),Object(r.jsx)("option",{value:"National",children:"National"}),Object(r.jsx)("option",{value:"United",children:"United"})]}),Object(r.jsx)("input",{type:"text",placeholder:"Add your Cover Amount"}),Object(r.jsx)("input",{type:"file",name:"file",className:"custom-file-input"}),Object(r.jsx)("a",{className:"checkarrow",children:Object(r.jsx)(s.default,{})})]})]}),Object(r.jsxs)("div",{className:"payment_item2",children:[Object(r.jsx)("h6",{children:o}),Object(r.jsxs)("div",{className:"inputs_payment",children:[Object(r.jsxs)("select",{name:"bank",id:"payment",defaultValue:"Default",className:j?"active":"option",onChange:b,children:[Object(r.jsx)("option",{value:"Default",disabled:!0,hidden:!0,children:"Bank Name"}),Object(r.jsx)("option",{value:"hdfc",children:"HDFC"}),Object(r.jsx)("option",{value:"america",children:"American Bank"}),Object(r.jsx)("option",{value:"national",children:"National"}),Object(r.jsx)("option",{value:"united",children:"United"})]}),Object(r.jsx)("input",{type:"text",placeholder:"Add your Account Number"})]})]})]})]})})})}},146:function(e,t,i){"use strict";i.r(t);var n=i(17),a=i(10),c=i(18),s=i(6),r=i(2),o=i(388),l=(i(132),i(468),i(324)),d=i(325),j=i(389),u=i(351),b=i(308),h=i(5),p=i(89),m=(i(31),i(41)),O=i(56),v=i(90),x=i(20),f=i(45),g=i(91),y=(i(98),i(93)),N=i.n(y),w=i(1),k=[],C=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),i=t[0],n=t[1],a=Object(r.useState)(),c=Object(s.a)(a,2),l=c[0],d=c[1],j=Object(r.useRef)();return Object(r.useEffect)((function(){if(i){var e=new FileReader;e.onloadend=function(){d(e.result)},e.readAsDataURL(i)}else d(null)}),[i]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"renderImage",children:[l?Object(w.jsx)("img",{src:l,style:{objectFit:"cover",width:"180px",height:"180px"},onClick:function(){d(null)}}):Object(w.jsx)("div",{className:"combin_profile",children:Object(w.jsx)("button",{onClick:function(e){e.preventDefault(),j.current.click()},children:Object(w.jsx)("img",{src:o.default,alt:"icon",style:{objectFit:"cover",width:"180px",height:"180px"}})})}),Object(w.jsx)("input",{type:"file",ref:j,accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&"image"===t.type.substr(0,5)?(n(t),k.push(t)):n(null)}})]})})},_=Object(O.b)((function(e){return{details:e.trainerReducer.details,trainerPersonalData:e.trainerReducer.data}}),(function(e){return Object(m.b)({updateTrainerDetails:v.updateTrainerDetails},e)}))((function(e){var t,i,o=e.updateTrainerDetails,m=e.trainerPersonalData,O=e.details,v="Build out the rest of your Profile!",y="Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time.",_="What\u2019s your Motto?",L="Tell us about you and describe your training process",P="Throw in some photos showcasing you & your skills",A="Certifications you\u2019d like to display",D="Where will you be training",S="Which city will you train in?",I="Your preferred training location",T="Website",F="Instagram",R="Youtube",M=Object(r.useState)([{image:""}]),U=Object(s.a)(M,2),Y=U[0],B=U[1],H=Object(r.useState)(!1),E=Object(s.a)(H,2),W=E[0],V=E[1],z=Object(r.useState)([{certificate:"",year:"",upload:""}]),J=Object(s.a)(z,2),q=J[0],K=J[1],Z=Object(r.useState)({motto:"",trainingProcessDescription:"",trainingLocation:[],serviceableLocation:"",location:"",websiteLink:"",instaHandle:"",youtubeChannel:""}),G=Object(s.a)(Z,2),Q=G[0],X=G[1],$=function(e,t){var i=Object(c.a)(q);i[e][t.target.name]=t.target.value,K(i)},ee=function(e,t){e.preventDefault&&e.preventDefault();var i=e.target||e||{},n=i.name,s=i.value,r=(i.label,Object(a.a)({},Q)),o=Array.isArray(e);"trainingLocation"===n?r.trainingLocation.includes(t)?r.trainingLocation=r.trainingLocation.filter((function(e){return e!==t})):r.trainingLocation=[].concat(Object(c.a)(r.trainingLocation),[t]):r["".concat(o?e[0].name:n)]=o?e:s,X(r)},te=function(){var e=f.PaymentApi.getStripeAccLink;Object(g.api)(Object(a.a)({},e)).then((function(e){var t=e.data,i=(e.message,t.url);window.location.href=i})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){if(Object.keys(m).length<5)return x.history.push("/trainer/card");var e=m||{},t=e.trainingProcess,i=void 0===t?"":t,n=e.myMotto,c=void 0===n?"":n,s=e.preferedTrainingMode,r=void 0===s?"":s,l=e.websiteLink,d=void 0===l?"":l,j=e.youtubeLink,u=void 0===j?"":j,b=e.instagramProfile,h=void 0===b?"":b,p=e.currentExperience,v=void 0===p?{}:p,f=e.certification,g=void 0===f?"":f,y=e.serviceableLocation,N=void 0===y?[]:y,w=(v||{}).workLocation,k=void 0===w?"":w,C={details:Object(a.a)(Object(a.a)({},O),{},{motto:c,trainingProcessDescription:i,trainingLocation:r,servicableLocation:N.map((function(e){return{label:e,value:e,name:"serviceableLocation"}})),location:k,websiteLink:d,instaHandle:h,youtubeChannel:u})},_=null===g||void 0===g?void 0:g.map((function(e){var t=e.certfiedYear;return{certificate:e.certificateName,year:t}}));K(_),X(C.details),o(C)}),[]);var ie=Object(r.useState)({visiable:!1}),ne=Object(s.a)(ie,2),ae=ne[0],ce=ne[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"outter_setup_container container",children:[Object(w.jsxs)("div",{className:"setup_link",children:[Object(w.jsxs)("div",{className:"inner_link",children:[Object(w.jsx)("img",{src:b.default,alt:"icon"}),Object(w.jsxs)(h.a,{to:"/trainer/card",onClick:function(){var e={details:Object(a.a)({},Q)};o(e)},children:[" ","Edit Trainer Card"," "]})]}),Object(w.jsx)("div",{className:"inner_link_preview",children:Object(w.jsx)(h.a,{to:"/",children:" Preview Your Trainer Profile "})})]}),Object(w.jsxs)("div",{className:"setup_container ",children:[Object(w.jsxs)("div",{className:"setup_headings",children:[Object(w.jsx)("h2",{children:v}),Object(w.jsx)("p",{children:y})]}),Object(w.jsx)("div",{className:"setup_wrapper",children:Object(w.jsx)("div",{className:"setup_formInner container",children:Object(w.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(w.jsxs)("div",{className:"setup_card1",children:[Object(w.jsx)("h6",{children:_}),Object(w.jsx)("textarea",{type:"text",placeholder:"Share the words you live or train by in 250 characters or less",onChange:ee,value:Q.motto,name:"motto",maxlength:"250"})]}),Object(w.jsxs)("div",{className:"setup_card2",children:[Object(w.jsx)("h6",{children:L}),Object(w.jsx)("textarea",Object(n.a)({type:"text",name:"comment",placeholder:"Tell clients everything you think they should know! Utilize Key words as anything you write here\r will be searchable through our search bar",onChange:ee,value:Q.trainingProcessDescription},"name","trainingProcessDescription"))]}),Object(w.jsxs)("div",{className:"setup_card3",children:[Object(w.jsx)("h6",{children:P}),Object(w.jsxs)("div",{className:"read_image",children:[Y.slice(0,2).map((function(e,t){return Object(w.jsxs)("div",{className:"render_image",children:[Object(w.jsx)(C,{value:t.image}),Object(w.jsx)(C,{value:t.image}),Object(w.jsx)(C,{value:t.image}),Object(w.jsx)(C,{value:t.image}),Object(w.jsx)(C,{value:t.image})]},e)})),ae?Object(w.jsx)("h5",{onClick:function(){return B([].concat(Object(c.a)(Y),[{image:""}])),void ce(!1)},children:"+ Add More Image's"}):Object(w.jsx)("h5",{onClick:function(){return function(e){var t=Object(c.a)(Y);t.splice(e,1),B(t),ce(!0)}()},children:"Remove"})]})]}),Object(w.jsxs)("div",{className:"setup_card4",children:[Object(w.jsx)("h6",{children:A}),null===q||void 0===q?void 0:q.map((function(e,t){return Object(w.jsxs)("div",{className:"inputs_certificate",children:[Object(w.jsx)("input",{type:"text",placeholder:"Certification Title",value:e.certificate,name:"certificate",onChange:function(e){return $(t,e)}}),Object(w.jsx)("input",{type:"text",placeholder:"Year you were Certified",value:e.year,name:"year",onChange:function(e){return $(t,e)}})]},t)})),Object(w.jsx)("h5",{onClick:function(){K([].concat(Object(c.a)(q),[{certificate:"",year:"",upload:""}]))},children:"+ Add Certification"})]}),Object(w.jsx)("div",{className:"setup_card5",children:Object(w.jsxs)("div",{className:"setupcontent_wrapper",children:[Object(w.jsxs)("div",{className:"setup_item",children:[Object(w.jsx)("h6",{children:D}),Object(w.jsxs)("div",{className:"inputs_platform",children:[Object(w.jsx)("button",{onClick:function(e){return ee(e,"Online")},className:"".concat((null===Q||void 0===Q||null===(t=Q.trainingLocation)||void 0===t?void 0:t.includes("Online"))?"active":""),name:"trainingLocation",children:"Virtual"}),Object(w.jsx)("button",{onClick:function(e){return ee(e,"inperson")},className:"".concat((null===Q||void 0===Q||null===(i=Q.trainingLocation)||void 0===i?void 0:i.includes("inperson"))?"active":""),name:"trainingLocation",children:"In Person"})]})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:S}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsx)("div",{className:"iconwrapper",children:Object(w.jsxs)("select",{value:"Miami",onChange:ee,children:[Object(w.jsx)("option",{value:"",disabled:!0,selected:!0,children:"List all areas that you will service"}),Object(w.jsx)("option",{children:"New York"}),Object(w.jsx)("option",{children:"Miami"}),Object(w.jsx)("option",{children:"Hampton"}),Object(w.jsx)("option",{children:"Palm Beach"})]})})})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:I}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsxs)("div",{className:"iconwrapper",children:[Object(w.jsxs)("select",{required:!0,onChange:ee,value:Q.location,children:[Object(w.jsx)("option",{value:"",disabled:!0,selected:!0,children:"List all areas that you will service"}),Object(w.jsx)("option",{children:"New York"}),Object(w.jsx)("option",{children:"Miami"}),Object(w.jsx)("option",{children:"Hampton"}),Object(w.jsx)("option",{children:"Palm Beach"})]}),Object(w.jsx)("img",{src:u.default,alt:"icon",className:"location_icon"})]})})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:T}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsxs)("div",{className:"iconwrapper",children:[Object(w.jsx)("input",{type:"text",placeholder:"Add your Web Link",onChange:ee,value:Q.websiteLink,name:"websiteLink"}),Object(w.jsx)("img",{src:d.default,alt:"icon"})]})})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:F}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsxs)("div",{className:"iconwrapper",children:[Object(w.jsx)("input",{type:"text",placeholder:"Add your Instagram Handle",onChange:ee,value:Q.instaHandle,name:"instaHandle"}),Object(w.jsx)("img",{src:l.default,alt:"icon"})]})})]}),Object(w.jsxs)("div",{className:"setup_item1",children:[Object(w.jsx)("h6",{children:R}),Object(w.jsx)("div",{className:"inputs_platform",children:Object(w.jsxs)("div",{className:"iconwrapper",children:[Object(w.jsx)("input",{type:"text",placeholder:"Add your Youtube Channel",onChange:ee,value:Q.youtubeChannel,name:"youtubeChannel"}),Object(w.jsx)("img",{src:j.default,alt:"icon"})]})})]})]})}),Object(w.jsx)("div",{className:"submit_button",children:Object(w.jsx)("button",{onClick:function(){if(console.log(k),0!==k.length){var e={"Content-Type":"application/json",Authorization:localStorage.getItem("token")},t=new FormData;k.forEach((function(e){t.append("images",e,e.name)})),N.a.post("http://doodlebluelive.com:2307/v1/upload/image",t,{headers:e}).then((function(e){console.log(e)}))}var i=Q.firstName,n=Q.lastName,c=Q.description,s=Q.individualCharge,r=Q.ssTwoPeopleCharge,o=Q.ssThreePeopleCharge,l=Q.ssFourPeopleCharge,d=Q.classFlatRate,j=Q.threeSessionRate,u=Q.tenSessionRate,b=Q.instaHandle,h=Q.location,p=Q.motto,m=Q.serviceableLocation,O=Q.trainingLocation,v=Q.trainingProcessDescription,x=Q.websiteLink,y=Q.youtubeChannel;console.log(m);var w={firstName:i,lastName:n,description:c,oneOnOnePricing:{passRatefor3Session:j,passRatefor10Session:u,inPersonAtClientLocation:s},socialSessionPricing:{inPeronAtClientLocationfor2People:r,inPeronAtClientLocationfor3People:o,inPeronAtClientLocationfor4People:l},classSessionPricing:{inPersonAtclientLocationfor15People:d},trainingProcess:v,myMotto:p,preferedTrainingMode:O,websiteLink:x,youtubeLink:y,instagramProfile:b,currentExperience:{workLocation:h},certification:null===q||void 0===q?void 0:q.map((function(e){var t=e.certificate;return{certificateName:"",certfiedYear:e.year,certification:t}})),servicableLocation:m};console.log(w);var C=f.TrainerApi.updateTrainerAvailabilityApi;C.body=w,V(!0),Object(g.api)(Object(a.a)({},C)).then((function(e){var t=e.data,i=e.message;console.log(t,i),te()})).catch((function(e){console.log(e),V(!1)}))},type:"submit",disabled:W,className:"".concat(W?"loading":""),children:W?"Loading...":Object(w.jsxs)("a",{children:[" ","Continue to account",Object(w.jsx)(p.default,{})]})})})]})})})]})]})})}));t.default=_},228:function(e,t,i){"use strict";i.r(t);i(2),i(336);var n=i(1);t.default=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:"arrow-hover",children:Object(n.jsxs)("svg",{className:"arrow-icon",focusable:"false",imageRendering:"auto",baseProfile:"basic",version:"1.1",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 62 35",children:[Object(n.jsx)("title",{children:"Arrow Icon"}),Object(n.jsx)("rect",{x:"0",y:"14.7",width:"55.2",height:"4.55"}),Object(n.jsx)("g",{transform:"translate(40.9 0)",children:Object(n.jsx)("path",{stroke:"none",d:"M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"})})]})})})})}},308:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Arrow Back.d3693c0f.svg"},324:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Insta Icon.432b9d08.svg"},325:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Web Icon.b0ff0aa9.svg"},336:function(e,t,i){},351:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Location Icon.6eb543f1.svg"},388:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Image 1.8f33ee1e.svg"},389:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Youtube.1eb126cd.svg"},422:function(e,t,i){},468:function(e,t,i){}}]);
//# sourceMappingURL=6.58d6760e.chunk.js.map