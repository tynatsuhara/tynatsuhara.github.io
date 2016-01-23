(function() {
  "use strict";

  window.onload = function() {
    fadeInInfo();
  }

  function fadeInInfo() {
    var el = document.getElementById("fadecontent");
    var opacity = 0;
    var fadeTimer = setInterval(function () {
        if (opacity >= 1){
            clearInterval(fadeTimer);
            opacity = 1;
        }
        el.style.opacity = opacity;
        opacity += 0.015;
    }, 10);
  }
})();
