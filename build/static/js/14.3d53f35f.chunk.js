(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[14,245,246,294,296,407,409],{301:function(e,i,c){"use strict";c.r(i);var s=c(89),n=c(11),t=c(2),l=c(416),o=c(55),r=c(232),a=c(471),d=c(9),j=c(122),h=(c(603),c(504),c(470)),b=c(491),x=c(1),O=function(e){var i,c,l,r,a=e.trainerProfileData,d=Object(t.useState)([{image:b.default}]),j=Object(n.a)(d,2),O=j[0],m=j[1],p=a.images,u=void 0===p?[]:p;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"profile_images_grid",children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"profile_images_container",children:[u&&u[0]&&Object(x.jsx)("div",{className:"profile_images_card box1",children:Object(x.jsx)("img",{src:u[0]||(null===(i=O[0])||void 0===i?void 0:i.image),alt:"picture",className:"box1",onError:function(e){var i;e.target.src=null===(i=O[0])||void 0===i?void 0:i.image}})}),Object(x.jsxs)("div",{className:"flex-try-2",children:[u&&u[1]&&Object(x.jsx)("div",{className:"profile_images_card box2",children:Object(x.jsx)("img",{src:u[1]||(null===(c=O[0])||void 0===c?void 0:c.image),alt:"picture",className:"box2"})}),Object(x.jsxs)("div",{className:"flex-try-3",children:[u&&u[2]&&Object(x.jsx)("div",{className:"profile_images_card box3",children:Object(x.jsx)("img",{src:u[2]||(null===(l=O[0])||void 0===l?void 0:l.image),alt:"Not Added",className:"box3"})}),u&&u[3]&&Object(x.jsx)("div",{className:"profile_images_card box4",children:Object(x.jsx)("img",{src:u[3]||(null===(r=O[0])||void 0===r?void 0:r.image),alt:"picture",className:"box4"})})]})]})]}),0===(null===u||void 0===u?void 0:u.length)&&Object(x.jsx)("p",{children:"Images Not Added"})]})}),a&&a.images&&a.images[4]?Object(x.jsxs)("div",{className:"image_more",onClick:function(){m([].concat(Object(s.a)(O),[{image:h.default}]))},children:[Object(x.jsx)("h5",{children:"View More Images"}),Object(x.jsx)("img",{src:o.default,ali:"icon"})]}):null]})};i.default=function(e){var i,c,s,h,b,m=e.open,p=e.setOpen,u=e.trainerdetailData,v=e.trainerSetupData,f=Object(t.useRef)(null),g=Object(t.useState)(!1),_=Object(n.a)(g,2),N=_[0],P=_[1],S=Object(t.useState)(""),A=Object(n.a)(S,2),I=A[0],L=A[1],C=Object(x.jsx)("img",{src:j.default,alt:"close",className:"close_setup"}),T=(null===u||void 0===u?void 0:u.oneOnOnePricing)||{},k=T.virtualSession,F=void 0===k?"":k,$=T.inPersonAtClientLocation,w=void 0===$?"":$,y=T.inPersonAtTrainerLocation,D=void 0===y?"":y,V=null===u||void 0===u||null===(i=u.preferedTrainingMode)||void 0===i?void 0:i.includes("virtual"),M=null===u||void 0===u||null===(c=u.preferedTrainingMode)||void 0===c?void 0:c.includes("inPerson"),R=u.socialSessionPricing||{},E=R.virtualSessionfor2People,Q=void 0===E?"":E,G=R.virtualSessionfor3People,J=void 0===G?"":G,Y=R.virtualSessionfor4People,H=void 0===Y?"":Y,U=R.inPeronAtClientLocationfor2People,q=void 0===U?"":U,z=R.inPeronAtClientLocationfor3People,B=void 0===z?"":z,K=R.inPeronAtClientLocationfor4People,W=void 0===K?"":K,X=R.inPeronAtTrainerLocationfor2People,Z=void 0===X?"":X,ee=R.inPeronAtTrainerLocationfor3People,ie=void 0===ee?"":ee,ce=R.inPeronAtTrainerLocationfor4People,se=void 0===ce?"":ce,ne=u.classSessionPricing||{},te=ne.virtualSessionfor15People,le=void 0===te?"":te,oe=ne.inPersonAtclientLocationfor15People,re=void 0===oe?"":oe,ae=ne.inPersonAttrainerLocationfor15People,de=void 0===ae?"":ae,je=[F,w,D].some((function(e){return""!==e&&parseFloat(e)>0})),he=[Q,J,H,q,B,W,Z,ie,se].some((function(e){return""!==e&&parseFloat(e)>0})),be=[le,re,de].some((function(e){return""!==e&&parseFloat(e)>0})),xe=u.certification,Oe=void 0===xe?[]:xe,me=null===Oe||void 0===Oe?void 0:Oe.filter((function(e){return""!==e.certificate}));return Object(x.jsxs)("div",{children:[m?Object(x.jsx)(r.a,{open:m,onClose:function(){p(!1)},center:!0,closeIcon:C,container:f.current,styles:{boaderRadius:"10px"},classNames:{modal:"customModal"},children:Object(x.jsx)("div",{className:"profile_main",children:Object(x.jsx)("div",{className:"profile_outter_container",children:Object(x.jsxs)("div",{className:"profile_wrapper_container ",children:[Object(x.jsx)("div",{className:"profile_header",children:Object(x.jsxs)("div",{className:"inner_profile container",children:[Object(x.jsx)("img",{src:u.profilePicture,alt:"Image not Added"}),Object(x.jsxs)("div",{className:"profile_header_inner",children:[Object(x.jsxs)("h2",{children:[u.firstName," ",u.lastName]}),Object(x.jsx)("p",{children:null===u||void 0===u||null===(s=u.areaOfExpertise)||void 0===s?void 0:s.toString()})]})]})}),Object(x.jsxs)("div",{className:"profile_main_contents container",children:[Object(x.jsxs)("div",{className:"profile_aside",children:[Object(x.jsxs)("div",{className:"profile_aside_link",children:[Object(x.jsx)("label",{children:"View Calender"}),Object(x.jsx)("img",{src:o.default,alt:"icon"})]}),Object(x.jsxs)("div",{className:"profile_aside_items",children:[je?Object(x.jsxs)("div",{className:"profile_aside_item",children:[Object(x.jsx)("h2",{children:"1 ON 1 INDIVIDUAL TRAINING"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"profile_aside_inner_item",children:[F&&V?Object(x.jsxs)("h6",{children:["$".concat(F," "),Object(x.jsx)("span",{children:"(Virtual Session)"})]}):"",w&&M?Object(x.jsxs)("h6",{children:["$".concat(w," "),Object(x.jsx)("span",{children:"(In Person Session)"})]}):"",D&&M?Object(x.jsxs)("h6",{children:["$".concat(D," "),Object(x.jsx)("span",{children:"(Trainer Location)"})]}):"",Object(x.jsx)("h5",{children:"See package rates during checkout"})]})]}):"",he?Object(x.jsxs)("div",{className:"profile_aside_item",children:[Object(x.jsxs)("h2",{children:["SOCIAL SESSIONS"," ",Object(x.jsx)("img",{src:a.default,alt:"icon",onClick:function(){return p(!0)},className:"model_Qmark"})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"profile_aside_inner_item",children:[Q&&V?Object(x.jsxs)("h6",{children:["$".concat(Q," "),Object(x.jsx)("span",{children:"/ Session (Virtual For 2 People)"})]}):"",q&&M?Object(x.jsxs)("h6",{children:["$".concat(q," "),Object(x.jsx)("span",{children:"(In person session for 2 people)"})]}):"",Z&&M?Object(x.jsxs)("h6",{children:["$".concat(Z," "),Object(x.jsx)("span",{children:"(In trainer location for 2 people)"})]}):"",J&&V?Object(x.jsxs)("h6",{children:["$".concat(J," "),Object(x.jsx)("span",{children:"/ Session (Virtual For 3 People)"})]}):"",B&&M?Object(x.jsxs)("h6",{children:["$".concat(B," "),Object(x.jsx)("span",{children:"(In person session for 3 people)"})]}):"",ie&&M?Object(x.jsxs)("h6",{children:["$".concat(ie," "),Object(x.jsx)("span",{children:"(In trainer location for 3 people)"})]}):"",H&&V?Object(x.jsxs)("h6",{children:["$".concat(H," "),Object(x.jsx)("span",{children:"/ Session (Virtual For 4 People)"})]}):"",W&&M?Object(x.jsxs)("h6",{children:["$".concat(W," "),Object(x.jsx)("span",{children:"(In person session for 4 people)"})]}):"",se&&M?Object(x.jsxs)("h6",{children:["$".concat(se," "),Object(x.jsx)("span",{children:"(In trainer location for 4 people)"})]}):""]})]}):"",be?Object(x.jsxs)("div",{className:"profile_aside_item",children:[Object(x.jsxs)("h2",{children:["CREATE A CLASS",Object(x.jsx)("img",{src:a.default,alt:"icon",className:"model_Qmark"})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"profile_aside_inner_item",children:[le&&V?Object(x.jsxs)("h6",{children:["$".concat(le," "),Object(x.jsx)("span",{children:"Flat Rate Class (For 5-15 People)"})]}):"",re&&M?Object(x.jsxs)("h6",{children:["$".concat(re," "),Object(x.jsx)("span",{children:"(In Person Session) (For 5-15 People)"})]}):"",de&&M?Object(x.jsxs)("h6",{children:["$".concat(de," "),Object(x.jsx)("span",{children:"(Trainer Location) (For 5-15 People)"})]}):"",Object(x.jsx)("h5",{children:"If trainer offers Virtual Social Sessions and Classes they will be at a discount to in person rates above. You will see these prior to checkout."})]})]}):"",Object(x.jsxs)("div",{className:"profile_aside_item",children:[Object(x.jsx)("h2",{children:"TRAINING LOCATIONS"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"profile_aside_inner_item",children:[(null===u||void 0===u?void 0:u.preferedTrainingMode)&&(null===u||void 0===u||null===(h=u.preferedTrainingMode)||void 0===h?void 0:h.includes("virtual"))&&Object(x.jsxs)("div",{className:"profile_location",children:[Object(x.jsx)("img",{src:l.default,alt:"icon"}),Object(x.jsx)("h4",{children:"Virtual"})]}),(null===u||void 0===u?void 0:u.location)?Object(x.jsx)("div",{className:"profile_location flex-column mt-2",children:Object(x.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(x.jsx)("img",{src:l.default,alt:"icon"}),Object(x.jsxs)("h4",{children:["".concat(null===u||void 0===u?void 0:u.location,"(Training Facility)"),Object(x.jsx)(d.a,{onClick:function(){P(!0),L("trainer")},children:"Location Details"})]})]})}):"",u&&(null===(b=u.servicableLocation)||void 0===b?void 0:b.length)>0?Object(x.jsx)("div",{className:"profile_location flex-column mt-2",children:Object(x.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(x.jsx)("img",{src:l.default,alt:"icon"}),Object(x.jsxs)("h4",{children:["".concat(null===u||void 0===u?void 0:u.location,"(Your Location)"),Object(x.jsx)(d.a,{onClick:function(){P(!0),L("servicable")},children:"Location Details"})]})]})}):""]})]})]})]}),Object(x.jsx)("div",{className:"profile_trainer_data",children:Object(x.jsxs)("div",{className:"profile_right_data",children:[Object(x.jsx)("div",{className:"profile_right_item1",children:Object(x.jsx)("h6",{children:v.motto?v.motto:"Motto not Added"})}),Object(x.jsxs)("div",{className:"profile_right_item2",style:{width:"40rem"},children:[Object(x.jsxs)("h4",{children:["About ",u.firstName]}),Object(x.jsx)("p",{children:u.trainingProcess?u.trainingProcess:"Description not Added"}),Object(x.jsx)("div",{className:"profile_images",children:Object(x.jsx)(O,{trainerProfileData:u})})]}),Object(x.jsxs)("div",{className:"profile_right_item3 mb-5 pb-5",children:[Object(x.jsx)("h2",{children:"Certifications"}),Object(x.jsx)("div",{className:"profile_item3_inner",children:(null===me||void 0===me?void 0:me.length)>0?Object(x.jsx)(x.Fragment,{children:me.map((function(e,i){var c=e.certificate;return Object(x.jsxs)("div",{className:"inner_items",children:[Object(x.jsx)("img",{src:l.default,alt:"check"}),Object(x.jsx)("h6",{children:c})]},"".concat(c,"_").concat(i))}))}):Object(x.jsx)("p",{children:"Not Added"})})]})]})})]})]})})})}):null,N?Object(x.jsx)(r.a,{open:N,onClose:function(){P(!1)},center:!0,closeIcon:Object(x.jsx)("img",{src:j.default,alt:"close"}),styles:{boaderRadius:"10px"},children:Object(x.jsx)("div",{className:"model_styles modal-heading",children:Object(x.jsxs)("div",{className:"model_styles modal-heading",children:[Object(x.jsx)("h2",{children:"".concat("trainer"===I?"Trainer's":"Servicable"," Locations")}),"trainer"===I?Object(x.jsx)("p",{children:(null===u||void 0===u?void 0:u.trainingFacilityLocation)||"No trainer locations"}):Object(x.jsx)("p",{children:(null===u||void 0===u?void 0:u.serviceableNeighbourHood)||"No neighbourhood locations"})]})})}):null]})}},416:function(e,i,c){"use strict";c.r(i),i.default=c.p+"static/media/Tick 1.bf0e36e8.svg"},470:function(e,i,c){"use strict";c.r(i),i.default=c.p+"static/media/Profile Picture.ca592372.png"},471:function(e,i,c){"use strict";c.r(i),i.default=c.p+"static/media/Q Mark.c9a955fb.svg"},491:function(e,i,c){"use strict";c.r(i),i.default=c.p+"static/media/NoImageFound.298b9820.png"},504:function(e,i,c){},603:function(e,i,c){}}]);