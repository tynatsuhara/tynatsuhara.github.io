(function() {
  "use strict";

  window.onload = function() {
    writeText("tyler bonnell", "name");
    $("projects").onclick = function() {
      if (hasClickedProjects)
        return;
      hasClickedProjects = true;
      writeText("live projects", "projectsTitle", function() {
        var index = 1;
        var interval = setInterval(function() {
          var el = document.getElementById("project" + index);
          if (el == null) {
            clearInterval(interval);
            return;
          }
          index++;
          el.style.display = "";
        }, 270);
      });
    }
  }
  
  var hasClickedProjects = false;

  // Various fields/functions for the "user typing" effect
  var cursorContainer;
  var writeIndex;
  var cursorInterval;
  var writing;
  var headerTimer;
  function writeText(txt, id, followup) {
    if (cursorContainer) {
      $(cursorContainer).innerHTML = writing;
      if (headerTimer) clearInterval(headerTimer);
      clearInterval(cursorInterval);
    }
    cursorContainer = id;
    writing = txt;
    writeIndex = 0;
    headerTimer = setInterval(function() {
      if (writeIndex > txt.length) {
        clearInterval(headerTimer);
        cursorInterval = setInterval(flashCursor, 500);
        if (followup)
          followup();
      } else {
        $(id).innerHTML = txt.substring(0, writeIndex++) + "|";
      }
    }, 70);
  }
  function flashCursor() {
    var s = $(cursorContainer).innerHTML;
    if (s[s.length - 1] == '|') {
      s = s.substring(0, s.length - 1);
    } else {
      s += "|";
    }
    $(cursorContainer).innerHTML = s;
  }

  function $(el) {
    return document.getElementById(el);
  }
})();
