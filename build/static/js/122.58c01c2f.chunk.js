(this.webpackJsonpmotto=this.webpackJsonpmotto||[]).push([[122],{217:function(n,t,r){"use strict";r.r(t),r.d(t,"changeApproval",(function(){return a})),r.d(t,"getTrainerDetail",(function(){return c})),r.d(t,"getAllTrainerLists",(function(){return o})),r.d(t,"getAllUsersLists",(function(){return u})),r.d(t,"fetchTrainersLists",(function(){return s}));var i=r(4),e=r(13),a=function(n,t){return function(r,a,c){var o=c.api;return new Promise((function(r,a){var c=e.TrainerApi.changeApproval;c.id=t,o(Object(i.a)(Object(i.a)({},c),{},{body:n})).then((function(n){var t=n.data;r(t)})).catch((function(n){a(n)}))}))}},c=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,a,c){var o=c.api;return new Promise((function(r,a){var c=e.TrainerApi.getTrainerDetail;c.id=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;r(t)})).catch((function(n){a(n)}))}))}},o=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,a,c){var o=c.api;return new Promise((function(r,a){var c=e.TrainerApi.getAllTrainerLists;c.page=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;r(t)})).catch((function(n){a(n)}))}))}},u=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,a,c){var o=c.api;return new Promise((function(r,a){var c=e.TrainerApi.getAllUsersLists;c.page=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;r(t)})).catch((function(n){a(n)}))}))}},s=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(r,a,c){var o=c.api;return new Promise((function(r,a){var c=e.TrainerApi.fetchTrainersLists;c.page=n,o(Object(i.a)(Object(i.a)({},c),{},{isAdmin:t})).then((function(n){var t=n.data;r(t)})).catch((function(n){a(n)}))}))}}}}]);
//# sourceMappingURL=122.58c01c2f.chunk.js.map