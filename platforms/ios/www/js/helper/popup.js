var Popup=function(){var n={};return n.start=function(){},n.createPopUp=function(n,o,t,i){navigator.notification.confirm(o,function(n){1===n?"function"==typeof t&&t():"function"==typeof i&&i()},n,["Yes","No"])},n.createConfirmPopup=function(n,o,t,i){("undefined"==typeof i||"string"!=typeof i)&&(i="Okay"),navigator.notification.confirm(o,function(){"function"==typeof t&&t()},n,[i])},n.createButtonPopup=function(n,o,t,i){navigator.notification.confirm(o,function(n){"function"==typeof t&&t(n)},n,i,"")},n}();