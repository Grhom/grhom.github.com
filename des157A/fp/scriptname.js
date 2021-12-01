(function () {
  "use strict";
  var cont = document.getElementById("continue");
  var name1 = document.getElementById("name1");
  var name2 = document.getElementById("name2");
  cont.addEventListener("click", function () {
    localStorage.setItem("name1", name1.value);
    localStorage.setItem("name2", name2.value);
    window.location.href = "gamepg.html";
  });
})();
