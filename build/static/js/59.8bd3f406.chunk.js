(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[59,259,260,337],{190:function(e,t,a){"use strict";a.r(t);var n=a(109),i=a(11),c=a(5),r=a(2),o=(a(617),a(9)),l=a(76),s=a(910),d=a(891),u=a(468),b=a(110),h=a(270),j=(a(337),a(618),a(150)),p=a(7),f=a(69),m=a(25),O=a(30),g=a(77),v=a(1),x=Object(l.a)({root:{"&$checked":{color:s.a[600]}},checked:{}})((function(e){return Object(v.jsx)(d.a,Object(c.a)({color:"default"},e))})),y=Object(O.b)(null,(function(e){return Object(m.b)({updateTrainerDetailsApicall:g.updateTrainerDetailsApicall,trainerDetail:g.trainerDetail},e)}))((function(e){var t=e.updateTrainerDetailsApicall,a=e.trainerDetail,l=Object(r.useState)("a"),s=Object(i.a)(l,2),d=s[0],m=s[1],O=Object(r.useState)("1"),g=Object(i.a)(O,2),y=g[0],k=g[1],N=Object(r.useState)(!1),C=Object(i.a)(N,2),T=C[0],w=C[1],F=Object(r.useState)(!1),S=Object(i.a)(F,2),P=S[0],I=S[1],M=Object(r.useState)(!1),R=Object(i.a)(M,2),z=R[0],E=R[1],_=Object(r.useState)(!1),L=Object(i.a)(_,2),B=L[0],A=L[1],D=Object(r.useRef)(null),W=Object(r.useState)({hoursPerWeek:"",preferedTrainingMode:[],trainingFacilityLocation:"",servicableLocation:""}),H=Object(i.a)(W,2),$=H[0],q=H[1],J=function(e){m(e.target.value)},Y=function(e){k(e.target.value)};return Object(r.useEffect)((function(){a().then((function(e){if(e){var t={hoursPerWeek:e.hoursPerWeek?e.hoursPerWeek:0,preferedTrainingMode:e.preferedTrainingMode?e.preferedTrainingMode:[],trainingFacilityLocation:e.trainingFacilityLocation?e.trainingFacilityLocation:"",servicableLocation:e.servicableLocation?e.servicableLocation:"",serviceableNeighbourHood:e.serviceableNeighbourHood?e.serviceableNeighbourHood:""};if(q(t),null!==e.trainingFacility&&void 0!==e.trainingFacility&&m(e.trainingFacility?"a":"b"),null!==e.willingToTravel&&void 0!==e.willingToTravel&&k(e.willingToTravel?"1":"0"),e.preferedTrainingMode&&0!==e.preferedTrainingMode.length){0!==e.preferedTrainingMode.filter((function(e){return"virtual"===e})).length&&w(!0);0!==e.preferedTrainingMode.filter((function(e){return"inPerson"==e})).length&&I(!0)}}}))}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"link_wrapper",children:[Object(v.jsx)("img",{src:u.default,alt:"icon"}),Object(v.jsx)("div",{className:"inner_links",children:Object(v.jsx)(o.a,{to:"/trainer/background",children:"Back to Trainer Background"})})]}),Object(v.jsxs)("div",{className:"main_wrappercontainer",children:[Object(v.jsxs)("div",{className:"wrapper_inneritem",children:[Object(v.jsx)("h1",{children:"Highlight your availability on the platform"}),Object(v.jsxs)("form",{className:"container",onSubmit:function(e){return e.preventDefault()},children:[Object(v.jsxs)("div",{className:"content_wrapper",children:[Object(v.jsxs)("div",{className:"item_1",children:[Object(v.jsx)("h6",{children:"How many hours will you list on Motto?"}),Object(v.jsx)("div",{className:"inputs_platform",children:Object(v.jsx)("input",{type:"number",placeholder:"10 Hours/Week",value:$.hoursPerWeek,onChange:function(e){q(Object(c.a)(Object(c.a)({},$),{},{hoursPerWeek:e.target.value}))}})})]}),Object(v.jsxs)("div",{className:"item_2",children:[Object(v.jsx)("h6",{children:"Where are you willing to train?"}),Object(v.jsxs)("div",{className:"inputs_platform",children:[Object(v.jsx)("button",{onClick:function(e){return function(e,t){var a=Object(n.a)($.preferedTrainingMode);a=a.includes(t)?a.filter((function(e){return e!==t})):[].concat(Object(n.a)(a),[t]),$.preferedTrainingMode=Object(n.a)(a),q(Object(c.a)({},$)),w((function(e){return!e}))}(0,"virtual")},className:T?"buttonFalse":"buttonTrue",children:"Virtual"}),Object(v.jsx)("button",{onClick:function(e){return function(e,t){var a=Object(n.a)($.preferedTrainingMode);a=a.includes(t)?a.filter((function(e){return e!==t})):[].concat(Object(n.a)(a),[t]),$.preferedTrainingMode=Object(n.a)(a),q(Object(c.a)({},$)),I((function(e){return!e}))}(0,"inPerson")},className:P?"buttonFalse":"buttonTrue",children:"In Person"})]})]}),Object(v.jsxs)("div",{className:"item_3",children:[Object(v.jsx)("h6",{children:"Do you have a facility or location where you will train clients?"}),Object(v.jsx)(x,{checked:"a"==d,onChange:J,value:"a",name:"radio-button-demo",inputProps:{"aria-label":"a"}}),Object(v.jsx)("label",{children:"Yes"}),Object(v.jsx)(x,{checked:"b"==d,onChange:J,value:"b",name:"radio-button-demo",inputProps:{"aria-label":"b"}}),Object(v.jsx)("label",{children:"No"})]}),Object(v.jsxs)("div",{className:"item_4",children:[Object(v.jsx)("h6",{children:"Details of the facility/location"}),Object(v.jsx)("div",{className:"inputs_platform",children:Object(v.jsx)("textarea",{type:"text",placeholder:"Enter the Details of the location",value:$.trainingFacilityLocation,className:"".concat("a"!==d?"disable-btn":""),disabled:"a"!==d,onChange:function(e){q(Object(c.a)(Object(c.a)({},$),{},{trainingFacilityLocation:e.target.value}))}})})]}),Object(v.jsxs)("div",{className:"item_5",children:[Object(v.jsx)("h6",{children:"Are you willing to travel to clients in your city/region?"}),Object(v.jsx)(x,{checked:"1"==y,onChange:Y,value:"1",inputProps:{"aria-label":"1"}}),Object(v.jsx)("label",{children:" Yes!"}),Object(v.jsx)(x,{checked:"0"==y,onChange:Y,value:"0",inputProps:{"aria-label":"0"}}),Object(v.jsx)("label",{children:"No"})]}),Object(v.jsxs)("div",{className:"item_6",children:[Object(v.jsx)("h6",{children:"List the areas/neighborhoods you\u2019re willing to travel to"}),Object(v.jsx)("div",{className:"inputs_platform",children:Object(v.jsx)("textarea",{type:"text",placeholder:"Neighborhood List",value:$.serviceableNeighbourHood,className:"".concat(1!==parseInt(y)?"disable-btn":""),disabled:1!==parseInt(y),onChange:function(e){q(Object(c.a)(Object(c.a)({},$),{},{serviceableNeighbourHood:e.target.value}))}})})]})]}),Object(v.jsxs)("div",{className:"submit_button",children:[Object(v.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var a={preferedTrainingMode:$.preferedTrainingMode,willingToTravel:parseInt(y)===parseInt("1"),serviceableNeighbourHood:$.serviceableNeighbourHood,trainingFacilityLocation:$.trainingFacilityLocation,stripeId:"",trainingFacility:"a"===d,applicationStatus:"submitted"};""!==$.hoursPerWeek&&(a.hoursPerWeek=parseFloat($.hoursPerWeek)),E(!0),t(a).then((function(){A(!0),E(!1)})).catch((function(){A(!1),E(!1)}))},disabled:z,className:"d-flex justify-content-center",children:z?"Loading...":Object(v.jsxs)(v.Fragment,{children:["Submit",Object(v.jsx)(b.default,{})]})}),B?Object(v.jsx)(h.a,{open:B,onClose:function(){A(!1),p.history.push("card")},center:!0,closeIcon:Object(v.jsx)("img",{src:j.default,alt:"close"}),container:D.current,styles:{boaderRadius:"10px"},children:Object(v.jsxs)("div",{style:{textAlign:"center",height:"300px",width:"600px",padding:"2em"},className:"model_styles",children:[Object(v.jsx)("h2",{children:"Background Information collection complete. Click the \u201cx\u201d to move to next section!"}),Object(v.jsx)("p",{children:"Time to move on to building your public Motto profile. This profile will be published only after you are approved!"})]})}):null]})]})]}),Object(v.jsx)("img",{src:f.default,alt:"icon",className:"ava_watermark"})]})]})})}));t.default=y},468:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Arrow Back.d3693c0f.svg"},617:function(e,t,a){},618:function(e,t,a){},798:function(e,t,a){"use strict";var n=a(4),i=a(116),c=a(16),r=a(2),o=(a(3),a(54)),l=a(786),s=a(805),d=a(76),u=a(115),b=a(1417),h=a(149),j=r.forwardRef((function(e,t){var a=e.edge,i=void 0!==a&&a,l=e.children,s=e.classes,d=e.className,u=e.color,j=void 0===u?"default":u,p=e.disabled,f=void 0!==p&&p,m=e.disableFocusRipple,O=void 0!==m&&m,g=e.size,v=void 0===g?"medium":g,x=Object(c.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(b.a,Object(n.a)({className:Object(o.a)(s.root,d,"default"!==j&&s["color".concat(Object(h.a)(j))],f&&s.disabled,"small"===v&&s["size".concat(Object(h.a)(v))],{start:s.edgeStart,end:s.edgeEnd}[i]),centerRipple:!0,focusRipple:!O,disabled:f,ref:t},x),r.createElement("span",{className:s.label},l))})),p=Object(d.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(u.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(j),f=r.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,u=e.checkedIcon,b=e.classes,h=e.className,j=e.defaultChecked,f=e.disabled,m=e.icon,O=e.id,g=e.inputProps,v=e.inputRef,x=e.name,y=e.onBlur,k=e.onChange,N=e.onFocus,C=e.readOnly,T=e.required,w=e.tabIndex,F=e.type,S=e.value,P=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=Object(l.a)({controlled:d,default:Boolean(j),name:"SwitchBase",state:"checked"}),M=Object(i.a)(I,2),R=M[0],z=M[1],E=Object(s.a)(),_=f;E&&"undefined"===typeof _&&(_=E.disabled);var L="checkbox"===F||"radio"===F;return r.createElement(p,Object(n.a)({component:"span",className:Object(o.a)(b.root,h,R&&b.checked,_&&b.disabled),disabled:_,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){y&&y(e),E&&E.onBlur&&E.onBlur(e)},ref:t},P),r.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:j,className:b.input,disabled:_,id:L&&O,name:x,onChange:function(e){var t=e.target.checked;z(t),k&&k(e,t)},readOnly:C,ref:v,required:T,tabIndex:w,type:F,value:S},g)),R?u:m)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(f)},809:function(e,t,a){"use strict";var n=a(2),i=n.createContext();t.a=i},891:function(e,t,a){"use strict";var n=a(4),i=a(16),c=a(2),r=(a(3),a(54)),o=a(798),l=a(781),s=Object(l.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(76);var b=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(r.a)(a.root,t&&a.checked)},c.createElement(s,{fontSize:n}),c.createElement(d,{fontSize:n,className:a.layer}))})),h=a(115),j=a(149),p=a(153),f=a(809);var m=c.createElement(b,{checked:!0}),O=c.createElement(b,null),g=c.forwardRef((function(e,t){var a=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,b=e.onChange,h=e.size,g=void 0===h?"medium":h,v=Object(i.a)(e,["checked","classes","color","name","onChange","size"]),x=c.useContext(f.a),y=a,k=Object(p.a)(b,x&&x.onChange),N=u;return x&&("undefined"===typeof y&&(y=x.value===e.value),"undefined"===typeof N&&(N=x.name)),c.createElement(o.a,Object(n.a)({color:d,type:"radio",icon:c.cloneElement(O,{fontSize:"small"===g?"small":"default"}),checkedIcon:c.cloneElement(m,{fontSize:"small"===g?"small":"default"}),classes:{root:Object(r.a)(l.root,l["color".concat(Object(j.a)(d))]),checked:l.checked,disabled:l.disabled},name:N,checked:y,onChange:k,ref:t},v))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(g)},910:function(e,t,a){"use strict";t.a={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"}}}]);