var Statusbar=function(){"use strict";function t(){StatusBar.show(),StatusBar.overlaysWebView(!1),StatusBar.styleLightContent()}var a={};return a.changeBackgroundColor=function(t){"string"==typeof t&&StatusBar.backgroundColorByHexString(t)},a.overlayWebView=function(t){StatusBar.overlaysWebView(t)},a.start=function(r){t(r),a.changeBackgroundColor(r)},a}();