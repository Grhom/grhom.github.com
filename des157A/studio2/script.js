(function () {
  "use strict";

  const myImages1 = [
    "pic1.png",
    "chb1.png",
    "chb2.png",
    "chb3.png",
    "lo.png",
    "christmas.png",
    "bowling.png",
    "floral.png",
  ];
  // const myImages2 = ["lo.png", "christmas.png", "bowling.png", "floral.png"];
  //   const myImages2 = ["lo.png", "food.png", "flowers.png"];
  // const myImages3 = [];
  let myImages = myImages1;
  //   let myImages = myImages2;

  var cherrypics = myImages1;

  const slide = document.getElementById("cbimage");

  let currentImage = 0;

  document.getElementById("next").addEventListener("click", nextPhoto);

  function nextPhoto() {
    currentImage++;

    if (currentImage >= myImages.length) {
      currentImage = 0;
    }
    slide.src = `images/${myImages1[currentImage]}`;
    // slide.src = `Images/${myImages2[currentImage]}`;
  }

  document.getElementById("previous").addEventListener("click", previousPhoto);
  function previousPhoto() {
    currentImage--;

    if (currentImage == -1) {
      currentImage = myImages.length - 1;
    }
    slide.src = `images/${myImages1[currentImage]}`;
    // slide.src = `Images/${myImages2[currentImage]}`;
  }

  //   image one
  //   slides 1 cherry blossom photos

  document.getElementById("one").addEventListener("click", prevone);
  function prevone() {
    currentImage = 0;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }

  //   image two

  document.getElementById("two").addEventListener("click", prevtwo);
  function prevtwo() {
    currentImage = 1;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }

  //   image three
  document.getElementById("three").addEventListener("click", prevthree);
  function prevthree() {
    currentImage = 2;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }

  //   image four

  document.getElementById("four").addEventListener("click", prevfour);
  function prevfour() {
    currentImage = 3;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }

  //   image five
  //  slides 2 matching outfits & activities

  document.getElementById("five").addEventListener("click", prevfive);
  function prevfive() {
    currentImage = 4;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }

  document.getElementById("six").addEventListener("click", prevsix);
  function prevsix() {
    currentImage = 5;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }
  document.getElementById("seven").addEventListener("click", prevseven);
  function prevseven() {
    currentImage = 6;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }
  document.getElementById("eight").addEventListener("click", preveight);
  function preveight() {
    currentImage = 7;
    myImages = myImages1;
    slide.src = `images/${myImages1[currentImage]}`;
  }
})();
