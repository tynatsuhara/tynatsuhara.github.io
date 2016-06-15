(function() {
  "use strict";

  window.onload = function() {
    printName();
  }

  function printName() {
    var letter = 0;
    var name = "tyler bonnell";
    var headerTimer = setInterval(function() {
      console.log("shit");
      if (letter > name.length) {
        clearInterval(headerTimer);
        setInterval(flashCursor, 500);
      } else {
        $("#name").innerHTML = name.substring(0, letter++) + "|";
      }
    }, 90);
  }

  function flashCursor() {
    var s = $("#name").innerHTML;
    if (s[s.length - 1] == '|') {
      s = s.substring(0, s.length - 1);
    } else {
      s += "|";
    }
    $("#name").innerHTML = s;
  }

  function $(el) {
    return document.querySelector(el);
  }
})();
