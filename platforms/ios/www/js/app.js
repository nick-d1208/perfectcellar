var debug=!1,appController=function(){"use strict";function n(){e()}function e(){document.addEventListener("deviceready",i,!1)}function o(){$(".disable-overlay").addClass("show"),t(!0),$("body").append(p())}function t(n){n||$(".disable-overlay").removeClass("show"),$("body > .ajax-loader").remove()}function i(){$(document).on("touchend click",function(n){document.activeElement&&document.activeElement!==n.target&&document.activeElement.blur()}),$(document).on("click touchend","a",function(n){n.preventDefault(),showPageInAppBrowser($(this).attr("href"))}),Statusbar.start("#021326"),p=_.template($(".ajax-loader-template").html()),u(),globalEvent.notify("app:ready"),navigator.splashscreen.hide()}function u(){o(),a({onSuccess:function(){c(function(){t()})},onError:function(){t()}})}function c(n){var e=f.getToken();o(),e?s({onSuccess:function(){"function"==typeof n&&n(!0),t()},onError:function(){"function"==typeof n&&n(!1),t()},token:e}):(globalEvent.notify("user:logout",{logoutNoPopup:!0}),t(),"function"==typeof n&&n(!1))}function s(n){handlerController.getinfo({hash:n.token},function(e){f.updateUser(e.d),globalEvent.notify("user:loggedin"),n&&n.onSuccess&&n.onSuccess()},function(e){return n&&n.onError&&n.onError(e),!1})}function a(n){handlerController.content({},function(e){"undefined"!=typeof e.quizzes&&e.quizzes.length>0&&(l.removeQuizzes(),l.addQuizzes(e.quizzes)),"undefined"!=typeof e.lessons&&e.lessons.length>0&&(d.removeLessons(),d.addLessons(e.lessons)),"undefined"!=typeof e.wines&&e.wines.length>0&&(g.removeWines(),g.addWines(e.wines)),globalEvent.notify("ini:recieved"),v=!0,n&&n.onSuccess&&n.onSuccess()},function(e){globalEvent.notify("ini:notrecieved"),v=!1,n&&n.onError&&n.onError()})}var r={},l=quizzesModel,d=lessonsModel,f=userModel,p=null,v=!1,g=myWinesModel;return globalEvent.attach("app:ini",function(){u()}),globalEvent.attach("app:updateUser",function(n){c(function(e){"undefined"!=typeof arg&&"function"==typeof n.callback&&n.callback(e)})}),globalEvent.attach("user:loggedin",function(){v||u()}),n(),r}();