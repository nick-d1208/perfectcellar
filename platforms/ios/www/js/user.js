var userModel=function(){function e(){if(!n||$.isEmptyObject(n)||"undefined"==typeof n.chargedAt||!$.isArray(n.chargedAt))return!1;for(var e=0,t=n.chargedAt.length;t>e;e++)n.chargedAt[e]=unixToMonth(n.chargedAt[e]);return n.chargedAt.push((new Date).getMonth()),n.chargedAt=arrayToObject(n.chargedAt),!0}var t={},n={},r="usertoken";return t.createUser=function(e){t.removeUser(),n=$.extend(!0,{},{token:e.hash}),t.storeToken(n.token),globalEvent.notify("user:created",{user:$.extend(!0,{},n)})},t.updateUser=function(r){n=$.extend(!0,{},n,r,{token:t.getToken()}),e(),globalEvent.notify("user:updated",{user:$.extend(!0,{},n)})},t.removeUser=function(){t.removeToken(),n=null,delete n,globalEvent.notify("user:removed")},t.getUser=function(){return $.isEmptyObject(n)?!1:$.extend(!0,{},n)},t.storeToken=function(e){localStorage.setItem(r,e)},t.getToken=function(){return localStorage.getItem(r)},t.removeToken=function(){localStorage.removeItem(r)},t}();