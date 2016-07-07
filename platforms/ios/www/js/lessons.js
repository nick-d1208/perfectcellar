var lessonsModel=function(){"use strict";var e={},t="lessonsModel",o=[{imgs:{middle:"img/top image_72.jpg",top:"img/top image_72.jpg"},index:0,nCat:"Sample Lesson - How to taste",parts:[{icon:"img/complesson/1.png",img:"img/complesson/part1 72.jpg",index:0,name:"part one",p:["Firstly, hold the glass at a 45oC angle against a white background – this will reveal the wine’s colour i.e. white and the depth of colour i.e. opaque, straw yellow or golden.","As wines age they tend to change color towards more yellow and brown colors. Red wines also tend to become more translucent.","And finally, swirl the wine to identify any legs that run down the side of the glass. This will demonstrate the level of alcohol in the wine, the longer the legs and slower the run down the side of the glass, the higher the alcohol."],subtitle:"",title:"Sight"},{icon:"img/complesson/2.png",img:"img/complesson/part2 72.jpg",index:1,name:"part two",p:["Give the glass another swirl and hover your nose over the top and breath in through your nose to identify various aromas","Aromas in wine provide a lot of information about a wine; from grape variety, whether or not the wine was oak-aged, where the wine is from and how old the wine is.","There can be hundreds of different aroma compounds in a single glass, which is why people smell so many different things."],subtitle:"",title:"Smell"},{icon:"img/complesson/3.png",img:"img/complesson/part3 72.jpg",index:2,name:"part three",p:["Fruit aroma – Try to identify the types of fruit aromas, this may include citrus fruits (lemon or lime), stone fruits (peaches or apricots), red fruits (cranberry, strawberry or raspberry) and black fruits (blackcurrants or black cherry). Tip: youthful wines tend to have more vibrant fruit aromas.","Secondary aromas – these aromas are the product of methods used by the winemaker such as lees stirring (yeast or dough) oak aging (cedar, toast, vanilla or coconut)","Tertiary aromas – These aromas are a product of age. See if you can identify any of the following: savoury aromas (mushroom or meat), leather and/or tobacco. If not, the wine is most likely youthful. Tip: oak aromas don’t necessarily indicate a mature wine."],subtitle:"",title:"Aromas"},{icon:"img/complesson/4.png",img:"img/complesson/part4 72.jpg",index:3,name:"part four",p:["Body – We’re looking to identify the weight of a wine. For example, fuller bodied wines coat the sides of your mouth, appearing more viscous. At the other end of the scale, lighter wines will feel closer to water in weight.","Sweetness – The sugar content of a wine can be detected on the tip of your tongue and ranges from low or no detectable sugar as ‘dry’ to high sugar content as ‘luscious’","Alcohol – Detecting alcohol can be difficult, a warming sensation on your palate will indicate high levels of alcohol. A bit more","Acidity – This is detected on the sides of your tongue. The more your mouth salivates, the higher the levels of acidity in the wine.","Tannin (only in red and rose wines) – Tannins create a drying sensation in your mouth and are easily detected by your gums. The drier your mouth feels the higher the levels of tannin.","Flavour characteristics – Following on from flavour aromas on the nose we’re looking to identify them on the palate. Try to identify fruit, floral, herbal or oak characters.","Length – The length of a wine is the amount of time the flavours linger in your mouth after you’ve swallowed the wine. The longer the linger, the longer the length."],subtitle:"",title:"Taste"},{icon:"img/complesson/5.png",img:"img/complesson/part5 72.jpg",index:4,name:"part five",p:["The balance of the wine – Here we identify how the separate components behave together i.e. fruit flavours, alcohol, acidity and tannin. A good wine will demonstrate harmony, creating an easy drinking experience.","The complexity of flavours – Generally speaking, better wines demonstrate more things going on in the glass. This may include an array of flavours including fruit, oak and maturation. Poorer wines lean towards being one dimensional.","Length – Better wines tend to provide a lasting experience in your mouth. The longer the length, the better the wine!"],subtitle:"",title:"Evaluation of quality"}],set:"free",subtitle:"",title:"Sample Lesson - How to taste",videos:{top:"",bottom:""}}],n=[];return e.lessonsAdded=new Event(t),e.lessonsRemoved=new Event(t),e.addLessons=function(t){n=t;for(var o=0,s=n.length;s>o;o++)for(var i=0,l=n[o].length;l>i;i++)n[o][i].nCat=0===i?"Grape":1===i?"Region":"How to...";e.lessonsAdded.notify({lessons:$.extend(!0,[],n)})},e.removeLessons=function(){n.length=0,e.lessonsRemoved.notify()},e.getLessons=function(){return $.extend(!0,[],n)},e.getLesson=function(e){return"object"!=typeof e||$.isEmptyObject(e)?"free"===e?{curr:o,prev:n}:{curr:n[e],prev:n}:"free"===e.id?o[0]:n[e.id][e.cat]},e}(),lessonsView=function(){"use strict";var e={},t=null,o="lessonsView",n={},s=null,i={},l=null,a=null,r=!1;return e.backButtonClicked=new Event(o),e.homeButtonClicked=new Event(o),e.previousLessonButtonClicked=new Event(o),e.selectionClicked=new Event(o),e.selectionMemberOnlyClicked=new Event(o),ClickControl&&(n.back=new ClickControl({selector:"#lessons",childSelector:".mp3-header .icon-left",callback:function(){e.backButtonClicked.notify()}}),n.home=new ClickControl({selector:"#lessons",childSelector:".mp3-header .icon-right",callback:function(){e.homeButtonClicked.notify()}}),n.previouslessonsbutton=new ClickControl({selector:"#lessons",childSelector:".previous-container .previous-button",callback:function(){e.previousLessonButtonClicked.notify()}}),n.selectionItem=new ClickControl({selector:"#lessons",childSelector:".bar-item, .lesson-item, .previous-item",callback:function(){return $(this).hasClass("noclick")?(e.selectionMemberOnlyClicked.notify(),!0):void e.selectionClicked.notify({id:$(this).attr("data-id"),cat:$(this).attr("data-cat")})}})),e.start=function(){t=new PageTransitions({el:"#lessons",transition:"left"}),s=_.template($(".lesson-main-template").html()),a=new IScroll("#lessons .wrapper-scroller",{hScrollbar:!1,vScrollbar:!1,hideScrollbar:!0,hideScrollbars:!0})},e.showLoader=function(){$(".disable-overlay").addClass("show")},e.hideLoader=function(){$(".disable-overlay").removeClass("show")},e.populateTemplate=function(t){e.removeTemplate(),$("#lessons .scroller").append(s(t)),i.center=new centerCarousel("#lessons .lesson-container",{onCarouselTap:function(){},onCarouselChange:function(e,t){$("#lessons .bar .content .bar-list .bar-item").eq(e).addClass("active").siblings().removeClass("active"),$("#lessons .bar-list").height($("#lessons .bar .content .bar-list .bar-item").eq(e).outerHeight()).css({"-webkit-transform":"translate3d("+-(100/t*e)+"%,0,0)",transform:"translate3d("+-(100/t*e)+"%,0,0)"})}}),a.refresh(),$("#lessons .image").waitForImages({each:function(){$(this).addClass("active")},waitForAll:!0})},e.removeTemplate=function(){$("#lessons .content-wrapper").remove()},e.togglePreviousLessons=function(){clearTimeout(l);var e=$("#lessons .previous-container .previous-list"),t=$("#lessons .previous-container .previous-button");e.toggleClass("active"),t.toggleClass("active");var o=e.hasClass("active")?e.get(0).scrollHeight+$("#lessons .generic-button-container").outerHeight():0;return e.height(o),a?(a.scrollTo(0,0,300,IScroll.utils.ease.quadratic),void transitionEnd(e,function(){a.refresh()})):!0},e.show=function(e,o){r=!0,$("#lessons, .trans-overlay").addClass("active"),o=!$.isEmptyObject(o)&&o&&"undefined"!=typeof o.dir?o.dir:"left",t.in(o,null,function(){$(".trans-overlay").removeClass("active"),"function"==typeof e&&e()})},e.hide=function(e,o){r=!1,o=!$.isEmptyObject(o)&&o&&"undefined"!=typeof o.dir?o.dir:"left",t.out(o,null,function(){$("#lessons").removeClass("active"),"function"==typeof e&&e()})},e}(),lessonsController=function(){"use strict";function e(e){var t=s.getLesson(e.current,e.amount);i.populateTemplate($.extend(!0,{allowed:e.allowed},t)),i.hideLoader()}function t(){globalEvent.notify("home:show",{dir:"right"}),o.hide()}var o={},n=!1,s=lessonsModel,i=lessonsView;return globalEvent.attach("app:ready",function(){o.start()}),globalEvent.attach("lessons:show",function(t){Queueing.get("lessons").addTo(function(){o.show(function(){Queueing.get("lessons").setActive(!1).trigger()},t)}),i.showLoader(),globalEvent.notify("permission:populatelessons",{callback:function(t){return t.value||Queueing.get("lessons").addTo(function(){i.hideLoader(),globalEvent.notify("home:show"),o.hide(function(){Queueing.get("lessons").setActive(!1).removeAll()},{dir:"left"})}),t.complimentary?(e($.extend({current:"free"},t)),!0):void e(t)}})}),s.lessonsAdded.attach(function(){}),s.lessonsRemoved.attach(function(){}),i.backButtonClicked.attach(function(){t()}),i.homeButtonClicked.attach(function(){t()}),i.previousLessonButtonClicked.attach(function(){globalEvent.notify("permission:canShowPreviousItems",{callback:function(e){return e.value?void i.togglePreviousLessons():(globalEvent.notify("messages:nonmember"),!1)}})}),i.selectionClicked.attach(function(e,t){globalEvent.notify("lessonstastelist:show",t),o.hide(!1,{dir:"right"})}),i.selectionMemberOnlyClicked.attach(function(){globalEvent.notify("messages:restrictedmember")}),o.start=function(){i.start(),Queueing.set("lessons")},o.hide=function(e,t){n=!1,i.hide(function(){i.removeTemplate(),"function"==typeof e&&e()},t)},o.show=function(e,t){n=!0,i.showLoader(),i.show(function(){i.hideLoader(),"function"==typeof e&&e()},t)},o}(),lessonsTasteListView=function(){"use strict";var e={},t=null,o="lessonsTasteListView",n={},s=null,i=null,l=!1;return e.backButtonClicked=new Event(o),e.homeButtonClicked=new Event(o),e.selectionClicked=new Event(o),ClickControl&&(n.back=new ClickControl({selector:"#lesson-how-to-taste-list",childSelector:".mp3-header .icon-left",callback:function(){e.backButtonClicked.notify()}}),n.home=new ClickControl({selector:"#lesson-how-to-taste-list",childSelector:".mp3-header .icon-right",callback:function(){e.homeButtonClicked.notify()}}),n.selectionItem=new ClickControl({selector:"#lesson-how-to-taste-list",childSelector:".list-item",callback:function(){e.selectionClicked.notify({id:$(this).attr("data-id"),cat:$(this).attr("data-cat"),sIndex:$(this).index()})}})),e.start=function(){t=new PageTransitions({el:"#lesson-how-to-taste-list",transition:"left"}),s=_.template($(".lesson-taste-list-template").html())},e.showLoader=function(){$(".disable-overlay").addClass("show")},e.hideLoader=function(){$(".disable-overlay").removeClass("show")},e.populateTemplate=function(t){e.removeTemplate(),$("#lesson-how-to-taste-list").append(s(t)),i&&(i.destroy(),i=null),i=new IScroll("#lesson-how-to-taste-list .wrapper-scroller",{hScrollbar:!1,vScrollbar:!1,hideScrollbar:!0,hideScrollbars:!0}),$("#lesson-how-to-taste-list .image").waitForImages({each:function(){$(this).addClass("active")},waitForAll:!0})},e.removeTemplate=function(){$("#lesson-how-to-taste-list > *").remove()},e.show=function(e,o){l=!0,$("#lesson-how-to-taste-list, .trans-overlay").addClass("active"),o=!$.isEmptyObject(o)&&o&&"undefined"!=typeof o.dir?o.dir:"left",t.in(o,null,function(){$(".trans-overlay").removeClass("active"),"function"==typeof e&&e()})},e.hide=function(e,o){l=!1,o=!$.isEmptyObject(o)&&o&&"undefined"!=typeof o.dir?o.dir:"left",t.out(o,null,function(){$("#lesson-how-to-taste-list").removeClass("active"),"function"==typeof e&&e()})},e}(),lessonsTasteListController=function(){"use strict";function e(){globalEvent.notify("home:show",{dir:"right"}),t.hide()}var t={},o=!1,n=lessonsModel,s={},i=lessonsTasteListView;return globalEvent.attach("app:ready",function(){t.start()}),globalEvent.attach("lessonstastelist:show",function(e){Queueing.get("lessonstastelist").addTo(function(){t.show(function(){Queueing.get("lessonstastelist").setActive(!1).trigger()},e)}),s.id="undefined"!=typeof e.id?e.id:s.id,s.cat="undefined"!=typeof e.cat?e.cat:s.cat,i.populateTemplate(n.getLesson(s))}),n.lessonsRemoved.attach(function(){}),i.backButtonClicked.attach(function(){globalEvent.notify("lessons:show",{dir:"right"}),t.hide()}),i.homeButtonClicked.attach(function(){e()}),i.selectionClicked.attach(function(e,o){globalEvent.notify("lessonstastedesc:show",o),t.hide(!1,{dir:"right"})}),t.start=function(){i.start(),Queueing.set("lessonstastelist")},t.hide=function(e,t){o=!1,i.hide(function(){i.removeTemplate(),"function"==typeof e&&e()},t)},t.show=function(e,t){o=!0,i.showLoader(),i.show(function(){i.hideLoader(),"function"==typeof e&&e()},t)},t}(),lessonsTasteDescView=function(){"use strict";var e={},t=null,o="lessonsTasteDescView",n={},s={},i=null,l={},a=!1;return e.backButtonClicked=new Event(o),e.homeButtonClicked=new Event(o),e.iconClicked=new Event(o),ClickControl&&(n.back=new ClickControl({selector:"#lesson-how-to-taste-desc",childSelector:".mp3-header .icon-left",callback:function(){e.backButtonClicked.notify()}}),n.home=new ClickControl({selector:"#lesson-how-to-taste-desc",childSelector:".mp3-header .icon-right",callback:function(){e.homeButtonClicked.notify()}}),n.iconSelected=new ClickControl({selector:"#lesson-how-to-taste-desc",childSelector:".icon-item",callback:function(){e.iconClicked.notify(),s.center&&s.center.slidePane($(this).index()),s.left&&s.left.slidePane($(this).index())}})),e.start=function(){t=new PageTransitions({el:"#lesson-how-to-taste-desc",transition:"left"}),i=_.template($(".lesson-taste-desc-template").html())},e.showLoader=function(){$(".disable-overlay").addClass("show")},e.hideLoader=function(){$(".disable-overlay").removeClass("show")},e.populateTemplate=function(t,o){if(e.removeTemplate(),$("#lesson-how-to-taste-desc").append(i(t)),s.center=new centerCarousel("#lesson-how-to-taste-desc .icon-container",{noDrag:!0,onCarouselTap:function(){},onCarouselChange:function(e){$("#lesson-how-to-taste-desc .content > .icon-container .icon-list .icon-item").eq(e).addClass("active").siblings().removeClass("active"),s.left&&s.left.slidePane(e,!0)}}),s.left=new centerCarousel("#lesson-how-to-taste-desc .desc-container",{noDrag:!0,onCarouselTap:function(){},onCarouselChange:function(e){s.center&&s.center.slidePane(e)}}),"undefined"!=typeof o&&(s.center.movePane(o,!0),s.left.movePane(o)),$.isEmptyObject(l))$("#lesson-how-to-taste-desc .desc-item").each(function(){l["desc-item-"+$(this).index()]=new IScroll("#"+$(this).attr("id"),{hScrollbar:!1,vScrollbar:!1,hideScrollbar:!0,hideScrollbars:!0})});else for(var n in l)l[n].destroy(),l[n]=null,l[n]=new IScroll("#"+n,{hScrollbar:!1,vScrollbar:!1,hideScrollbar:!0,hideScrollbars:!0});$("#lesson-how-to-taste-desc .image-load").waitForImages({each:function(){$(this).addClass("active")},waitForAll:!0})},e.removeTemplate=function(){$("#lesson-how-to-taste-desc > *").remove()},e.show=function(e,o){a=!0,$("#lesson-how-to-taste-desc, .trans-overlay").addClass("active"),o=!$.isEmptyObject(o)&&o&&"undefined"!=typeof o.dir?o.dir:"left",t.in(o,null,function(){$(".trans-overlay").removeClass("active"),"function"==typeof e&&e()})},e.hide=function(e,o){a=!1,o=!$.isEmptyObject(o)&&o&&"undefined"!=typeof o.dir?o.dir:"left",t.out(o,null,function(){$("#lesson-how-to-taste-desc").removeClass("active"),"function"==typeof e&&e()})},e}(),lessonsTasteDescController=function(){"use strict";function e(){globalEvent.notify("home:show",{dir:"right"}),t.hide()}var t={},o=!1,n=lessonsModel,s={},i=lessonsTasteDescView;return globalEvent.attach("app:ready",function(){t.start()}),globalEvent.attach("lessonstastedesc:show",function(e){Queueing.get("lessonstastedesc").addTo(function(){t.show(function(){Queueing.get("lessonstastedesc").setActive(!1).trigger()},e)}),s.id="undefined"!=typeof e.id?e.id:s.id,s.cat="undefined"!=typeof e.cat?e.cat:s.cat,i.populateTemplate(n.getLesson(s),"undefined"==typeof e.sIndex?0:e.sIndex)}),n.lessonsRemoved.attach(function(){}),i.backButtonClicked.attach(function(){globalEvent.notify("lessonstastelist:show",{dir:"right"}),t.hide()}),i.homeButtonClicked.attach(function(){e()}),t.start=function(){i.start(),Queueing.set("lessonstastedesc")},t.hide=function(e,t){o=!1,i.hide(function(){i.removeTemplate(),"function"==typeof e&&e()},t)},t.show=function(e,t){o=!0,i.showLoader(),i.show(function(){i.hideLoader(),"function"==typeof e&&e()},t)},t}();