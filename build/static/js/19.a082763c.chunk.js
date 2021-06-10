/*! For license information please see 19.a082763c.chunk.js.LICENSE.txt */
(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[19],{1262:function(e,t,n){"use strict";var a=n(813),r=n(814),o={date:Object(r.a)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i=n(815),c=n(916),u=n(914),s={code:"en-GB",formatDistance:a.a,formatLong:o,formatRelative:i.a,localize:c.a,match:u.a,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.a=s},838:function(e,t,n){},911:function(e,t,n){"use strict";n.d(t,"a",(function(){return ye}));var a=n(2),r=n.n(a),o=n(4),i=n(988),c=n(827),u=n(595);function s(e){return Object(u.a)(1,arguments),Object(c.default)(e,Date.now())}var l=n(1246),m=n(1003),f=n(982),d=n(749),b=n(1009),h=n(991),O=n(1001),D=n(1007),g=n(750),j=n(1006),v=n(823),p=n(1012),y=n(1013),E=n(1e3),C=n(597);function w(e,t){Object(u.a)(1,arguments);var n=e||{},a=Object(C.default)(n.start),r=Object(C.default)(n.end),o=r.getTime();if(!(a.getTime()<=o))throw new RangeError("Invalid interval");var i=[],c=a;c.setHours(0,0,0,0);var s=t&&"step"in t?Number(t.step):1;if(s<1||isNaN(s))throw new RangeError("`options.step` must be a number greater than 1");for(;c.getTime()<=o;)i.push(Object(C.default)(c)),c.setDate(c.getDate()+s),c.setHours(0,0,0,0);return i}var M=n(817),L=n(678),x=n(744),k=n(745),N=/(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,S=/''/g,H=/[a-zA-Z]/;function F(e,t){Object(u.a)(2,arguments);var n=String(t),a=Object(C.default)(e);if(!Object(x.default)(a))throw new RangeError("Invalid time value");var r=Object(L.a)(a),o=Object(k.a)(a,r),i=n.match(N).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return T(e);var n=M.a[t];if(n)return n(o,e,null,{});if(t.match(H))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return i}function T(e){return e.match(R)[1].replace(S,"'")}var q=n(751),P=n(796),W=n(599);var z=n(825);function A(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function I(e,t){Object(u.a)(2,arguments);var n=Object(C.default)(e),a=Object(C.default)(t),r=A(n,a),o=Math.abs(Object(z.default)(n,a));n.setDate(n.getDate()-r*o);var i=A(n,a)===-r,c=r*(o-i);return 0===c?0:c}var _=n(1243);function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var G=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),Z={today:"-today",outside:"-outside",wide:"-wide",disabled:"-disabled",selected:"-selected",selectedStart:"-selected-start",selectedMiddle:"-selected-middle",selectedEnd:"-selected-end"};function K(e){var t=e.date,n=e.height,a=e.locale,o=e.modifiers,c=e.modifiersClassNames,u=e.onClick,m=e.onHover,f=Object(i.default)(t),d={},b=B({today:s(t)},o),h=B(B({},Z),c);Object.keys(b).forEach((function(e){d[h[e]]=b[e]}));var O=function(e){u(t),e.preventDefault()};return r.a.createElement("span",{className:G("nice-dates-day",d),onClick:O,onMouseEnter:function(){m(t)},onMouseLeave:function(){m(null)},onTouchEnd:O,style:{height:n}},1===f&&r.a.createElement("span",{className:"nice-dates-day_month"},Object(l.default)(t,"LLL",{locale:a})),r.a.createElement("span",{className:"nice-dates-day_date"},f))}function Q(e){var t=e.locale,n=e.month,a=e.minimumDate,o=e.maximumDate,i=e.onMonthChange,c=function(e){i(Object(m.default)(Object(f.default)(n,1))),e.preventDefault()},u=function(e){i(Object(m.default)(Object(d.default)(n,1))),e.preventDefault()};return r.a.createElement("div",{className:"nice-dates-navigation"},r.a.createElement("a",{className:G("nice-dates-navigation_previous",{"-disabled":Object(b.default)(n,a)}),onClick:c,onTouchEnd:c}),r.a.createElement("span",{className:"nice-dates-navigation_current"},Object(l.default)(n,Object(h.default)(n)===Object(h.default)(new Date)?"LLLL":"LLLL yyyy",{locale:t})),r.a.createElement("a",{className:G("nice-dates-navigation_next",{"-disabled":Object(b.default)(n,o)}),onClick:u,onTouchEnd:u}))}K.propTypes={date:Object(o.instanceOf)(Date).isRequired,height:o.number.isRequired,locale:o.object.isRequired,modifiers:Object(o.objectOf)(o.bool),modifiersClassNames:Object(o.objectOf)(o.string),onHover:o.func,onClick:o.func},K.defaultProps={modifiers:{},onHover:function(){},onClick:function(){}},Q.propTypes={locale:o.object.isRequired,month:Object(o.instanceOf)(Date).isRequired,minimumDate:Object(o.instanceOf)(Date),maximumDate:Object(o.instanceOf)(Date),onMonthChange:o.func.isRequired};var V="startDate",X="endDate",ee="bottom",te="top",ne=function(e,t,n){return Object(O.default)(t,e,{locale:n})+1},ae=function(e,t){return Object(g.default)(Object(m.default)(e),{locale:t})},re=function(e,t){return Object(j.default)(Object(v.default)(Object(D.default)(e),6-function(e,t){return ne(Object(m.default)(e),Object(D.default)(e),t)}(e,t)),{locale:t})},oe=function(e,t){return{startDate:ae(e,t),endDate:re(e,t),cellHeight:0,isWide:!1,lastCurrentMonth:e,locale:t,offset:0,origin:te,transition:!1}},ie=function(e,t){switch(t.type){case"setStartDate":return B(B({},e),{},{startDate:t.value});case"setEndDate":return B(B({},e),{},{endDate:t.value});case"setRange":return B(B({},e),{},{startDate:t.startDate,endDate:t.endDate});case"setCellHeight":return B(B({},e),{},{cellHeight:t.value});case"setIsWide":return B(B({},e),{},{isWide:t.value});case"reset":return B(B({},oe(t.currentMonth,e.locale)),{},{cellHeight:e.cellHeight,isWide:e.isWide});case"transitionToCurrentMonth":var n=t.currentMonth,a=e.lastCurrentMonth,r=e.startDate,o=e.endDate,i=e.cellHeight,c=B(B({},e),{},{lastCurrentMonth:n,transition:!0});if(Object(p.default)(n,a)){var u=-(ne(r,n,e.locale)-1)*i;return B(B({},c),{},{endDate:re(n,e.locale),offset:u,origin:te})}if(Object(y.default)(n,a)){var s=6*i,l=ne(n,o,e.locale)*i-s;return B(B({},c),{},{startDate:ae(n,e.locale),offset:l,origin:ee})}return e;default:throw new Error("Unknown ".concat(t.type," action type"))}};var ce=function(e,t){var n={};return Object.keys(e).map((function(a){n[a]=e[a](t)})),n};function ue(e){var t=e.locale,n=e.month,o=e.modifiers,i=e.modifiersClassNames,c=e.onMonthChange,u=e.onDayHover,s=e.onDayClick,l=e.transitionDuration,h=e.touchDragEnabled,O=function(e){var t=e.locale,n=e.month,r=e.onMonthChange,o=e.transitionDuration,i=e.touchDragEnabled,c=Object(a.useRef)(),u=Object(a.useRef)(),s=Object(a.useRef)(0),l=J(Object(a.useReducer)(ie,oe(n,t)),2),m=l[0],h=l[1],O=m.startDate,D=m.endDate,g=m.cellHeight,j=m.lastCurrentMonth,v=m.offset,p=m.origin,C=m.transition,w=m.isWide;return Object(a.useLayoutEffect)((function(){var e=!s.current;!Object(b.default)(j,n)&&e&&(u.current.classList.add("-transition"),clearTimeout(c.current),Math.abs(Object(E.default)(n,j))<=3?(h({type:"transitionToCurrentMonth",currentMonth:n}),c.current=setTimeout((function(){h({type:"reset",currentMonth:n})}),o)):h({type:"reset",currentMonth:n}))}),[n]),Object(a.useLayoutEffect)((function(){if(i){var e=u.current,a=6*g/2;if(e){var l=function(a){clearTimeout(c.current);var r=Number(window.getComputedStyle(e).transform.match(/([-+]?[\d.]+)/g)[5]),o=0;if(!s.current){var i=ae(Object(f.default)(n,1),t);o=(ne(i,n,t)-1)*g,h({type:"setRange",startDate:i,endDate:re(Object(d.default)(n,1),t)})}e.style.transform="translate3d(0, ".concat(r||-o,"px, 0)"),e.classList.remove("-transition"),e.classList.add("-moving"),s.current=a.touches[0].clientY+(-r||o)},m=function(o){var i=s.current,c=o.touches[0].clientY-i,u=Object(f.default)(n,1),l=(ne(O,u,t)-1)*g,m=(ne(O,n,t)-1)*g,b=Object(d.default)(n,1),j=(ne(O,b,t)-1)*g;if(c<0)Math.abs(c)>m&&Object(y.default)(D,Object(d.default)(n,2))&&h({type:"setEndDate",value:re(b,t)});else if(c>0){var v=ae(u,t),p=(ne(v,n,t)-1)*g;s.current+=p,h({type:"setStartDate",value:v})}var E=Math.abs(c)>j-a,C=Math.abs(c)>l-a&&Math.abs(c)<m-a;E?r(b):C&&r(u),e.style.transform="translate3d(0, ".concat(c,"px, 0)"),o.preventDefault()},b=function(a){var r=(ne(O,n,t)-1)*g;e.style.transform="translate3d(0, ".concat(-r,"px, 0)"),e.classList.add("-transition"),e.classList.remove("-moving"),c.current=setTimeout((function(){s.current=0,e.style.transform="translate3d(0, 0, 0)",e.classList.remove("-transition"),h({type:"reset",currentMonth:n})}),o),Math.abs(s.current-r-a.changedTouches[0].clientY)>10&&(a.preventDefault(),a.stopPropagation())};return e.addEventListener("touchstart",l),e.addEventListener("touchmove",m),e.addEventListener("touchend",b),function(){e.removeEventListener("touchstart",l),e.removeEventListener("touchmove",m),e.removeEventListener("touchend",b)}}}})),Object(a.useEffect)((function(){var e=function(){var e=u.current.offsetWidth/7,t=1,n=!1;e>60?(t+=Math.round(.75*e),n=!0):t+=Math.round(e),h({type:"setIsWide",value:n}),h({type:"setCellHeight",value:t})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),{startDate:O,endDate:D,cellHeight:g,containerElementRef:u,offset:v,origin:p,transition:C,isWide:w}}({locale:t,month:Object(m.default)(n),onMonthChange:c,transitionDuration:l,touchDragEnabled:h}),D=O.startDate,g=O.endDate,j=O.cellHeight,v=O.containerElementRef,p=O.isWide,C=O.offset,M=O.origin,L=O.transition,x=w({start:D,end:g}).map((function(e){return r.a.createElement(K,{date:e,height:j,key:F(e,"yyyy-MM-dd"),locale:t,modifiers:B(B({},ce(o,e)),{},{outside:!Object(b.default)(e,n),wide:p}),modifiersClassNames:i,onHover:u,onClick:s})}));return r.a.createElement("div",{className:"nice-dates-grid",style:{height:6*j}},r.a.createElement("div",{className:G("nice-dates-grid_container",{"-moving":C,"-origin-bottom":M===ee,"-origin-top":M===te,"-transition":L}),ref:v,style:{transform:"translate3d(0, ".concat(C,"px, 0)"),transitionDuration:"".concat(l,"ms")}},x))}function se(e){var t=e.locale,n=e.weekdayFormat,a=new Date,o=w({start:Object(g.default)(a,{locale:t}),end:Object(j.default)(a,{locale:t})}).map((function(e){return Object(l.default)(e,n,{locale:t})}));return r.a.createElement("div",{className:"nice-dates-week-header"},o.map((function(e){return r.a.createElement("span",{key:e,className:"nice-dates-week-header_day"},e)})))}ue.propTypes={locale:o.object.isRequired,month:Object(o.instanceOf)(Date).isRequired,modifiers:Object(o.objectOf)(o.func),modifiersClassNames:Object(o.objectOf)(o.string),onMonthChange:o.func.isRequired,onDayHover:o.func,onDayClick:o.func,transitionDuration:o.number.isRequired,touchDragEnabled:o.bool},ue.defaultProps={modifiers:{},transitionDuration:500,touchDragEnabled:!0},se.propTypes={locale:o.object.isRequired,weekdayFormat:o.string},se.defaultProps={weekdayFormat:"eee"};var le=function(e,t){var n=t.minimumDate,a=t.maximumDate;return!Object(y.default)(e,Object(q.default)(n))&&!Object(p.default)(e,a)},me=function(e,t){var n=B({},e);return t?(Object.keys(t).forEach((function(a){n[a]=e[a]?function(n){return e[a](n)||t[a](n)}:t[a]})),n):e},fe=function(e,t){return function(e,t){if(Object(u.a)(2,arguments),"object"!==typeof t||null===t)throw new RangeError("values parameter must be an object");var n=Object(C.default)(e);return isNaN(n.getTime())?new Date(NaN):(null!=t.year&&n.setFullYear(t.year),null!=t.month&&(n=Object(P.default)(n,t.month)),null!=t.date&&n.setDate(Object(W.a)(t.date)),null!=t.hours&&n.setHours(Object(W.a)(t.hours)),null!=t.minutes&&n.setMinutes(Object(W.a)(t.minutes)),null!=t.seconds&&n.setSeconds(Object(W.a)(t.seconds)),null!=t.milliseconds&&n.setMilliseconds(Object(W.a)(t.milliseconds)),n)}(e,{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()})},de=function(e,t){var n=e.startDate,a=e.endDate,r=t.minimumLength,o=t.maximumLength;return I(Object(q.default)(a),Object(q.default)(n))>=r&&(!o||I(Object(q.default)(a),Object(q.default)(n))<=o)};function be(e,t,n){var r=J(Object(a.useState)(n),2),o=r[0],i=r[1];return t?[e,t]:[o,i]}function he(e){var t=e.locale,n=e.month,a=e.modifiers,o=e.modifiersClassNames,i=e.minimumDate,c=e.maximumDate,u=e.onMonthChange,s=e.onDayHover,l=e.onDayClick,f=e.weekdayFormat,d=e.touchDragEnabled,b=J(be(n,u,Object(m.default)(new Date)),2),h=b[0],O=b[1],D=me({disabled:function(e){return!le(e,{minimumDate:i,maximumDate:c})}},a);return r.a.createElement("div",null,r.a.createElement(Q,{locale:t,minimumDate:i,maximumDate:c,month:h,onMonthChange:O}),r.a.createElement(se,{locale:t,weekdayFormat:f}),r.a.createElement(ue,{locale:t,modifiers:D,modifiersClassNames:o,month:h,onMonthChange:O,onDayHover:s,onDayClick:l,touchDragEnabled:d}))}function Oe(e){var t=e.locale,n=e.date,a=e.month,o=e.onDateChange,i=e.onMonthChange,u=e.minimumDate,s=e.maximumDate,l=e.modifiers,f=e.modifiersClassNames,d=e.weekdayFormat,b=e.touchDragEnabled,h=function(e){return Object(c.default)(e,n)&&le(e,{minimumDate:u,maximumDate:s})},O=me({selected:h,disabled:h},l),D=J(be(a,i,Object(m.default)(n||new Date)),2),g=D[0],j=D[1];return r.a.createElement(he,{locale:t,month:g,onMonthChange:j,onDayClick:function(e){o(n?fe(e,n):e)},minimumDate:u,maximumDate:s,modifiers:O,modifiersClassNames:f,weekdayFormat:d,touchDragEnabled:b})}function De(e){var t=e.locale,n=e.startDate,o=e.endDate,i=e.focus,u=e.month,s=e.onStartDateChange,l=e.onEndDateChange,f=e.onFocusChange,d=e.onMonthChange,b=e.minimumDate,h=e.maximumDate,O=e.minimumLength,D=e.maximumLength,g=e.modifiers,j=e.modifiersClassNames,v=e.weekdayFormat,E=e.touchDragEnabled,C=J(Object(a.useState)(),2),w=C[0],M=C[1],L=J(be(u,d,Object(m.default)(n||o||new Date)),2),x=L[0],k=L[1],N=i===V&&!n&&o&&w&&!Object(c.default)(w,o)?w:Object(q.default)(n),R=i===X&&!o&&n&&w&&!Object(c.default)(w,n)?w:Object(q.default)(o),S=function(e){return Object(c.default)(e,N)&&Object(y.default)(e,R)},H=function(e){return Object(p.default)(e,N)&&Object(y.default)(e,R)},F=function(e){return Object(c.default)(e,R)&&Object(p.default)(e,N)},T=me({selected:function(e){return le(e,{minimumDate:b,maximumDate:h})&&(S(e)||H(e)||F(e)||Object(c.default)(e,n)||Object(c.default)(e,o))},selectedStart:S,selectedMiddle:H,selectedEnd:F,disabled:function(e){return i===V&&o&&(I(Object(q.default)(o),e)<O&&(!n||!Object(p.default)(e,Object(q.default)(o)))||!n&&D&&I(Object(q.default)(o),e)>D)||i===X&&n&&(I(e,Object(q.default)(n))<O&&(!o||!Object(y.default)(e,Object(q.default)(n)))||!o&&D&&I(e,Object(q.default)(n))>D)}},g);return r.a.createElement(he,{locale:t,month:x,onMonthChange:k,onDayHover:M,onDayClick:function(e){if(i===V)o&&!de({startDate:e,endDate:o},{minimumLength:O,maximumLength:D})&&l(null),s(n?fe(e,n):e),f(X);else if(i===X){var t=n&&!de({startDate:n,endDate:e},{minimumLength:O,maximumLength:D});t&&s(null),l(o?fe(e,o):e),f(t||!n?V:null)}},minimumDate:b,maximumDate:h,modifiers:T,modifiersClassNames:j,weekdayFormat:v,touchDragEnabled:E})}he.propTypes={locale:o.object.isRequired,minimumDate:Object(o.instanceOf)(Date),maximumDate:Object(o.instanceOf)(Date),modifiers:Object(o.objectOf)(o.func),modifiersClassNames:Object(o.objectOf)(o.string),month:Object(o.instanceOf)(Date),onMonthChange:o.func,onDayHover:o.func,onDayClick:o.func,weekdayFormat:o.string,touchDragEnabled:o.bool},Oe.propTypes={locale:o.object.isRequired,date:Object(o.instanceOf)(Date),month:Object(o.instanceOf)(Date),onDateChange:o.func,onMonthChange:o.func,minimumDate:Object(o.instanceOf)(Date),maximumDate:Object(o.instanceOf)(Date),modifiers:Object(o.objectOf)(o.func),modifiersClassNames:Object(o.objectOf)(o.string),weekdayFormat:o.string,touchDragEnabled:o.bool},De.propTypes={locale:o.object.isRequired,startDate:Object(o.instanceOf)(Date),endDate:Object(o.instanceOf)(Date),focus:Object(o.oneOf)([V,X]),month:Object(o.instanceOf)(Date),onStartDateChange:o.func.isRequired,onEndDateChange:o.func.isRequired,onFocusChange:o.func.isRequired,onMonthChange:o.func,minimumDate:Object(o.instanceOf)(Date),maximumDate:Object(o.instanceOf)(Date),minimumLength:o.number,maximumLength:o.number,modifiers:Object(o.objectOf)(o.func),modifiersClassNames:Object(o.objectOf)(o.string),weekdayFormat:o.string,touchDragEnabled:o.bool},De.defaultProps={onStartDateChange:function(){},onEndDateChange:function(){},onFocusChange:function(){},minimumLength:0,maximumLength:null};var ge=r.a.forwardRef((function(e,t){var n=e.children,a=e.open;return r.a.createElement("div",{className:G("nice-dates-popover",{"-open":a}),ref:t},n)}));function je(e){var t=e.date,n=e.format,r=e.locale,o=e.minimumDate,i=e.maximumDate,c=e.onDateChange,u=e.validate,s=n||r.formatLong.date({width:"short"}),m=function(e){return Object(l.default)(e,s,{locale:r})},f=function(e){return Object(_.default)(e,s,t||new Date)},d=function(e){return Object(x.default)(e)&&le(e,{minimumDate:o,maximumDate:i})&&(!u||u(e))},b=J(Object(a.useState)(d(t)?m(t):""),2),h=b[0],O=b[1],D=J(Object(a.useState)(!1),2),g=D[0],j=D[1];return Object(a.useEffect)((function(){g||O(d(t)?m(t):"")}),[t,g]),{onFocus:function(){j(!0)},onChange:function(e){var t=e.target.value,n=f(t);O(t),d(n)&&c(n)},onBlur:function(){if(h){var e=f(h);d(e)?O(m(e)):d(t)?O(m(t)):O("")}else t&&c(null);j(!1)},placeholder:s.toLowerCase(),type:"text",value:h}}function ve(){var e=J(Object(a.useState)(!1),2),t=e[0],n=e[1];return Object(a.useEffect)((function(){var e=function(){n(!0),t()},t=function(){document.removeEventListener("touchstart",e)};return document.addEventListener("touchstart",e),t}),[]),t}function pe(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)();return Object(a.useEffect)((function(){var a=function(a){t.current&&(!t.current.contains||t.current.contains(a.target))||n.current&&(!n.current.contains||n.current.contains(a.target))||r.current&&(!r.current.contains||r.current.contains(a.target))||e()};return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}),[e]),[t,n,r]}function ye(e){var t=e.children,n=e.locale,o=e.date,i=e.onDateChange,c=e.format,u=e.minimumDate,s=e.maximumDate,l=e.modifiers,m=e.modifiersClassNames,f=e.weekdayFormat,d=e.touchDragEnabled,b=J(Object(a.useState)(o||new Date),2),h=b[0],O=b[1],D=J(Object(a.useState)(!1),2),g=D[0],j=D[1],v=ve(),p=J(pe((function(){g&&j(!1)})),2),y=p[0],E=p[1],C=je({date:o,format:c,locale:n,minimumDate:u,maximumDate:s,onDateChange:function(e){i(e),e&&O(e)}});return r.a.createElement("div",{className:"nice-dates"},t({inputProps:B(B({},C),{},{ref:y,onFocus:function(){C.onFocus(),j(!0),v&&y.current.blur()},readOnly:v}),focused:g}),r.a.createElement(ge,{open:g,ref:E},r.a.createElement(Oe,{locale:n,date:o,month:h,onDateChange:function(e){i(e),j(!1)},onMonthChange:O,minimumDate:u,maximumDate:s,modifiers:l,modifiersClassNames:m,weekdayFormat:f,touchDragEnabled:d})))}function Ee(e){var t=e.children,n=e.locale,o=e.startDate,i=e.endDate,c=e.onStartDateChange,u=e.onEndDateChange,s=e.format,l=e.minimumDate,m=e.maximumDate,f=e.minimumLength,d=e.maximumLength,b=e.modifiers,h=e.modifiersClassNames,O=e.weekdayFormat,D=e.touchDragEnabled,g=J(Object(a.useState)(),2),j=g[0],v=g[1],p=J(Object(a.useState)(o||i||new Date),2),y=p[0],E=p[1],C=ve(),w=J(pe((function(){v(null)})),3),M=w[0],L=w[1],x=w[2],k=je({date:o,format:s,locale:n,maximumDate:m,minimumDate:l,onDateChange:function(e){c(e),e&&E(e)},validate:function(e){return!i||de({startDate:e,endDate:i},{minimumLength:f,maximumLength:d})}}),N=je({date:i,format:s,locale:n,maximumDate:m,minimumDate:l,onDateChange:function(e){u(e),e&&E(e)},validate:function(e){return!o||de({startDate:o,endDate:e},{minimumLength:f,maximumLength:d})}});return r.a.createElement("div",{className:"nice-dates"},t({startDateInputProps:B(B({},k),{},{onFocus:function(){k.onFocus(),v(V),C&&M.current.blur()},ref:M,readOnly:C}),endDateInputProps:B(B({},N),{},{onFocus:function(){N.onFocus(),v(X),C&&L.current.blur()},ref:L,readOnly:C}),focus:j}),r.a.createElement(ge,{open:!!j,ref:x},r.a.createElement(De,{locale:n,startDate:o,endDate:i,focus:j,month:y,onStartDateChange:c,onEndDateChange:u,onFocusChange:v,onMonthChange:E,minimumDate:l,maximumDate:m,minimumLength:f,maximumLength:d,modifiers:b,modifiersClassNames:h,weekdayFormat:O,touchDragEnabled:D})))}ge.displayName="Popover",ge.propTypes={children:o.node,open:o.bool},ye.propTypes={children:o.func.isRequired,locale:o.object.isRequired,date:Object(o.instanceOf)(Date),onDateChange:o.func,format:o.string,minimumDate:Object(o.instanceOf)(Date),maximumDate:Object(o.instanceOf)(Date),modifiers:Object(o.objectOf)(o.func),modifiersClassNames:Object(o.objectOf)(o.string),weekdayFormat:o.string,touchDragEnabled:o.bool},ye.defaultProps={onDateChange:function(){}},Ee.propTypes={children:o.func.isRequired,locale:o.object.isRequired,startDate:Object(o.instanceOf)(Date),endDate:Object(o.instanceOf)(Date),onStartDateChange:o.func,onEndDateChange:o.func,format:o.string,minimumDate:Object(o.instanceOf)(Date),maximumDate:Object(o.instanceOf)(Date),minimumLength:o.number,maximumLength:o.number,modifiers:Object(o.objectOf)(o.func),modifiersClassNames:Object(o.objectOf)(o.string),weekdayFormat:o.string,touchDragEnabled:o.bool},Ee.defaultProps={onStartDateChange:function(){},onEndDateChange:function(){},minimumLength:0,maximumLength:null}}}]);
//# sourceMappingURL=19.a082763c.chunk.js.map