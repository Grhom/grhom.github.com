(function () {
  "use strict";
  console.log("reading js");
  const sections = document.querySelectorAll("section");
  // constant section declared and pulled from html file
  let myForm = document.querySelector("#myform");
  // let my form, pulls from html ID myform (all of the questions)
  let madlib = document.querySelector("#madlib");
  // selects and pulls everything from the ID madlib
  let story = document.querySelector("#story p");
  // selects and pulls everything from the ID story
  let open = document.querySelector("#open_close");

  document.querySelector("#next1").addEventListener("click", function (event) {
    console.log("Pressesd next1");
    event.preventDefault();
    sections[1].className = "hidden";
    sections[2].className = "showing";

    // for (let i = 0; i < sections.length; i++) {
    //   console.log(i);
    // }
  });
  // document.querySelector("#next1").addEventListener("click", function (event) {
  //   console.log("Pressesd next2");
  //   event.preventDefault();
  //   sections[1].style.display = "flex";
  //   sections[1].style.visibility = "visible";
  // });
  document.querySelector("#next2").addEventListener("click", function (event) {
    console.log("Pressesd next2");
    event.preventDefault();
    sections[2].className = "hidden";
    sections[3].className = "showing";
  });
  // document.querySelector("#next2").addEventListener("click", function (event) {
  //   console.log("Pressesd next2");
  //   event.preventDefault();
  //   sections[1].className = "hidden";
  //   sections[2].className = "showing";
  // });
  document.querySelector("#next3").addEventListener("click", function (event) {
    console.log("Pressesd next3");
    event.preventDefault();
    sections[3].className = "hidden";
    sections[4].className = "showing";
  });
  document.querySelector("#next4").addEventListener("click", function (event) {
    console.log("Pressesd next4");
    event.preventDefault();
    sections[4].className = "hidden";
    sections[5].className = "showing";
  });
  document.querySelector("#next5").addEventListener("click", function (event) {
    console.log("Pressesd next5");
    event.preventDefault();
    sections[5].className = "hidden";
    sections[6].className = "showing";
  });
  //selects the id next for each section, click then an event happens where the first card is hidden and the enxt card shows and so forth

  myForm.addEventListener("submit", function (e) {
    open.className = "open_anime";
    e.preventDefault();
    // prevent to refresh
    let formdata = document.querySelectorAll("input[type=text]");
    processData(formdata);
    // grab all the data and stored it into the input
  });
  // this is where the input data pushes into the madlib
  function processData(formdata) {
    let emptyfields = false;
    // empty array
    //console.log("Formdata:", formdata);
    let words = [];
    for (let x of formdata) {
      // every element for the data, going through all the elements in the array
      if (x.value) {
        words.push(x.value);
        x.value = "";
      } else {
        emptyfields = true;
      }
      // already set to true and false, but originally false.
    }
    if (emptyfields) {
      story.innerHTML = "Please fill out the fields";
    } else {
      makeMadlib(words);
    }
  }
  function makeMadlib(words) {
    let myText = `10/22/2021
    <br>
    Dear ${words[0]}, 
    <br>
    &emsp;&emsp;&emsp; You are cordially invited to join us for an afternoon
    ${words[1]} party. Fine teas will be brewed,
    and delicate ${words[2]} will be enjoyed. Please wear  ${words[3]}. Please bring along your favorite ${words[4]}!
    <br/>
      <br/>
    &emsp;&emsp;&emsp; Cheers,
    <br/>
    &emsp;&emsp;&emsp;Gennifer Hom`;

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
