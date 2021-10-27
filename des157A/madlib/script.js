(function () {
  "use strict";
  console.log("reading js");
  const sections = document.querySelectorAll("section");
  let myForm = document.querySelector("#myform");
  let madlib = document.querySelector("#madlib");
  let story = document.querySelector("#story");

  // var el = document.querySelector("next1");
  // if (el) {
  //   el.addEventListener("click", nextquestion);
  // }
  // function nextquestion() {
  //   console.log("Pressesd next1");
  //   event.preventDefault();
  //   sections[0].className = "hidden";
  //   sections[1].className = "showing";
  // }

  document.querySelector("#next1").addEventListener("click", function (event) {
    console.log("Pressesd next1");
    event.preventDefault();
    sections[0].className = "hidden";
    sections[1].className = "showing";
  });
  document.querySelector("#next2").addEventListener("click", function (event) {
    console.log("Pressesd next2");
    event.preventDefault();
    sections[1].className = "hidden";
    sections[2].className = "showing";
  });
  document.querySelector("#next3").addEventListener("click", function (event) {
    console.log("Pressesd next3");
    event.preventDefault();
    sections[2].className = "hidden";
    sections[3].className = "showing";
  });
  document.querySelector("#next4").addEventListener("click", function (event) {
    console.log("Pressesd next4");
    event.preventDefault();
    sections[3].className = "hidden";
    sections[4].className = "showing";
  });
  document.querySelector("#next5").addEventListener("click", function (event) {
    console.log("Pressesd next5");
    event.preventDefault();
    sections[4].className = "hidden";
    sections[5].className = "showing";
  });

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formdata = document.querySelectorAll("input[type=text]");
    processData(formdata);
  });

  function processData(formdata) {
    let emptyfields = false;
    let words = [];
    for (let x of formdata) {
      if (x.value) {
        words.push(x.value);
        x.value = "";
      } else emptyfields = true;

      if (emptyfields) {
        madlib.innerHTML = "Please out the fields";
      } else {
        makeMadlib(words);
      }
    }
  }
  function makeMadlib(words) {
    let myText = `
    hello ${words[0]} you are invited 
    you like ${words[1]}
    Thanks!`;
    story.innerHTML = myText;
  }
  function makeMadLib(words) {
    let myText = `10/22/2021
    
    Dear ${words[0]}, 
    
      You are cordially invited to join us for an afternoon
    ${words[1]}. Fine teas will be brewed,
    and delicate ${words[2]} will be enjoyed.${words[3]}. Please bring along your favorite ${words[4]}!
      Cheers,
      
      Gennifer Hom`;
    story.innerHTML = myText;
  }

  // document.querySelector("#input2").addEventListener("click", function () {
  //   sections[1].className = "hidden";
  //   sections[2].className = "showing question2";
  // });

  // document.querySelector("#input3").addEventListener("click", function () {
  //   sections[2].className = "hidden";
  //   sections[3].className = "showing question3";
  // });
  // document.querySelector("#input4").addEventListener("click", function () {
  //   sections[3].className = "hidden";
  //   sections[4].className = "showing question4";
  // });
  // document.querySelector("#input5").addEventListener("click", function () {
  //   sections[4].className = "hidden";
  //   sections[5].className = "showing question5";
  // });
})();

// var responseCounter = 0;
// const input_vals = [];

// function insertName(name) {
//   if (event.key === "Enter") {
//     input_vals[0] = name.value;
//     var name_field = document.getElementById("name-question");
//     name_field.style.visibility = "hidden";
//   }
// }

// function insertResponse(response) {
//   responseCounter += 1;
// }
