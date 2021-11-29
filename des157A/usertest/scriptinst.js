(function () {
  "use strict";

  var close = document.getElementById("close-button");
  var helpcard = document.getElementById("helpcard");

  //   document.getElementById("overlay").className = "showing";
  //   displayInfo();

  //to show/hide the instructions overlay
  //   document
  //     .querySelector("#usertest")
  //     .addEventListener("click", function (event) {
  //       event.preventDefault();
  //       displayInfo();
  //       document.getElementById("overlay").className = "showing";

  //       document.querySelector("body").style.overflow = "hidden";
  //     });

  //   document.querySelector(".close").addEventListener("click", function (event) {
  //     event.preventDefault();
  //     document.getElementById("overlay").className = "hidden";

  //     document.querySelector("body").style.overflow = "auto";
  //   });
  //   document.addEventListener('keydown', function(event) {
  //     if (event.key === 'Escape') {
  //         document.getElementById('overlay').className = 'hidden';

  //         document.querySelector('body').style.overflow = "auto";
  //     }
  // })
  close.addEventListener("click", function () {
    helpcard.hidden = true;
  });
})();
