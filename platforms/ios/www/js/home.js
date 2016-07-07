var homeView=function(){"use strict";var o={},t=null,e="homeView",n={},i={},a=null,c=!1;return o.accountButtonClicked=new Event(e),o.selectionClicked=new Event(e),o.logoutButtonClicked=new Event(e),ClickControl&&(n.account=new ClickControl({selector:"#home",childSelector:".mp3-header .icon-right.account-icon",callback:function(){o.accountButtonClicked.notify()}}),n.logout=new ClickControl({selector:"#home",childSelector:".mp3-header .icon-right.logoutbutton",callback:function(){o.logoutButtonClicked.notify()}}),n.orb=new ClickControl({selector:"#home",childSelector:".orb:not(.orb-center)",callback:function(){var t=$(this).attr("data-id");o.selectionClicked.notify({id:t})}})),SwipeCarousel&&(i.orbs=new SwipeCarousel("#home .orbs",{onCarouselChange:function(o){if(!a)return!1;"right"===o?a.prev():a.next();var t=$("#home .orb.active").attr("data-id");$(".orb-text-item, .orb-desc-item").removeClass("active"),$('.orb-text-item[data-id="'+t+'"], .orb-desc-item[data-id="'+t+'"]').addClass("active")}})),o.start=function(){t=new PageTransitions({el:"#home",transition:"left"}),a=new orbRotation($("#home > .content > .section-selection > .orbs"),{mm:$("#home .orb.mm"),ls:$("#home .orb.ls"),qz:$("#home .orb.qz"),mw:$("#home .orb.mw")},$("#home .orb.orb-center"))},o.showLogOutButton=function(){$("#home .mp3-header .icon-right").removeClass("account-icon").addClass("logoutbutton")},o.showLoginButton=function(){$("#home .mp3-header .icon-right").removeClass("logoutbutton").addClass("account-icon")},o.show=function(o,e){c=!0,$("#home, .trans-overlay").addClass("active"),e=!$.isEmptyObject(e)&&e&&"undefined"!=typeof e.dir?e.dir:"left",t.in(e,null,function(){$(".trans-overlay").removeClass("active"),"function"==typeof o&&o()})},o.hide=function(o,e){c=!1,e=!$.isEmptyObject(e)&&e&&"undefined"!=typeof e.dir?e.dir:"left",t.out(e,null,function(){$("#home").removeClass("active"),"function"==typeof o&&o()})},o.showLoader=function(){$(".disable-overlay").addClass("show")},o.hideLoader=function(){$(".disable-overlay").removeClass("show")},o}(),homeController=function(){"use strict";var o={},t=!1,e=homeView;return globalEvent.attach("app:ready",function(){o.start()}),globalEvent.attach("home:show",function(t){o.show(!1,t)}),globalEvent.attach("user:loggedin",function(){e.showLogOutButton()}),globalEvent.attach("user:loggedout",function(){e.showLoginButton()}),e.accountButtonClicked.attach(function(){o.hide(!1,{dir:"right"}),globalEvent.notify("login:show")}),e.logoutButtonClicked.attach(function(){globalEvent.notify("user:logout")}),e.selectionClicked.attach(function(t,e){if("object"!=typeof e||"string"!=typeof e.id)return!1;switch(e.id){case"matchmaker":globalEvent.notify("matchmakercat1:show"),o.hide(!1,{dir:"right"});break;case"quizzes":globalEvent.notify("quizzes:show"),o.hide(!1,{dir:"right"});break;case"lessons":globalEvent.notify("lessons:show"),o.hide(!1,{dir:"right"});break;case"mywines":globalEvent.notify("permission:canShowMyWines",{callback:function(t){return t.value?(globalEvent.notify("mywines:show"),o.hide(!1,{dir:"right"}),!0):(globalEvent.notify("messages:restrictedNoInternet"),!1)}});break;default:return!1}}),o.start=function(){e.start()},o.hide=function(o,n){t=!1,e.hide(function(){"function"==typeof o&&o()},n)},o.show=function(o,n){t=!0,e.showLoader(),e.show(function(){e.hideLoader(),"function"==typeof o&&o()},n)},o}();