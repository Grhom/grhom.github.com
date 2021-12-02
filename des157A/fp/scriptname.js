(function () {
  "use strict";
  var cont = document.getElementById("continue");
  //   var tiitle1 = document.getElementById("name1");
  //   var title2 = document.getElementById("name2");
  var highlight1 = document.getElementById("player1");
  var highlight2 = document.getElementById("player2");
  var title1 = document
    .getElementById("name1")
    .getElementsByTagName("input")[0];
  var title2 = document
    .getElementById("name2")
    .getElementsByTagName("input")[0];
  cont.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("title1", title1.value);
    localStorage.setItem("title2", title2.value);
    window.location.href = "gamepg.html";
    console.log(title1.value);
  });
  title1.addEventListener("focus", function () {
    player1.classList.add("highlight");
    player1.classList.remove("nohighlight");
    player2.classList.remove("highlight");
    player2.classList.add("nohighlight");
  });

  title2.addEventListener("focus", function () {
    player1.classList.remove("highlight");
    player1.classList.add("nohighlight");
    player2.classList.add("highlight");
    player2.classList.remove("nohighlight");
  });
})();
