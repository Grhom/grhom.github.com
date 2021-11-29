(function () {
  "use strict";
  var startGame = document.getElementById("startgame");
  var gameControl = document.getElementById("gamecontrol");
  var scorecount1 = document.getElementById("scorecount1");
  var scorecount2 = document.getElementById("scorecount2");
  var highlight1 = document.getElementById("player1");
  var highlight2 = document.getElementById("player2");
  var actionArea = document.getElementById("actions");
  var title1 = document
    .getElementById("name1")
    .getElementsByTagName("input")[0];
  var title2 = document
    .getElementById("name2")
    .getElementsByTagName("input")[0];
  // corgi images
  var happycorgi = document.getElementById("happycorgi");
  var angrycorgi = document.getElementById("angrycorgi");
  var wincorgi = document.getElementById("wincorgi");
  // variables for dice animation
  var DiceOne = document.getElementById("dice1");
  var DiceTwo = document.getElementById("dice2");
  var ComeOut = document.getElementById("roll");

  var win = document.getElementById("win");

  // sound variables
  var bark = document.getElementById("bark");
  var happy = document.getElementById("happy");
  var dicesound = document.getElementById("rolling");
  // icons
  var playsound = document.getElementById("playsound");
  var mute = document.getElementById("mute");
  var volume = document.getElementById("volume");
  var help = document.getElementById("help");
  var helpcard = document.getElementById("helpcard");

  var gameData = {
    players: ["player1", "player2"],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 29,
  };

  // bowl images
  var bone1 = document.getElementsByClassName("bone1");
  var bone2 = document.getElementsByClassName("bone2");
  var bones = [bone1, bone2];

  // show and hide instructions

  help.addEventListener("click", function () {
    helpcard.hidden = false;
  });
  // volume
  volume.addEventListener("change", function (e) {
    bark.volume = e.currentTarget.value / 100;
    happy.volume = e.currentTarget.value / 100;
    dicesound.volume = e.currentTarget.value / 100;
    unmute();
  });

  playsound.addEventListener("click", function () {
    // show mute icon
    mute.hidden = false;
    // mute volume slider
    volume.value = 0;
    // hide play sounds
    playsound.hidden = true;

    // turn off sounds
    bark.volume = 0;
    happy.volume = 0;
    dicesound.volume = 0;
  });

  function unmute() {
    // show sound icon
    mute.hidden = true;
    // show play sounds
    playsound.hidden = false;
  }

  mute.addEventListener("click", unmute);

  // start game
  startGame.addEventListener("click", function () {
    let name1 = title1.value || gameData.players[0];
    let name2 = title2.value || gameData.players[1];
    title1.hidden = true;
    title2.hidden = true;
    document.getElementById(
      "name1"
    ).innerHTML = `<h2>${name1}'s Scoreboard</h2>`;
    document.getElementById(
      "name2"
    ).innerHTML = `<h2>${name2}'s Scoreboard</h2>`;
    gameData.players = [name1, name2];

    ComeOut.hidden = false;
    gameData.index = Math.round(Math.random());
    gameControl.innerHTML += `<button id="quit">RESTART</button>`;

    document.getElementById("quit").addEventListener("click", function () {
      location.reload();
    });
    setUpTurn();
  });

  function setUpTurn() {
    scorecount1.innerHTML = `<h2>${gameData.score[0]} Bones</h2>`;
    scorecount2.innerHTML = `<h2>${gameData.score[1]} Bones</h2>`;
  }
  // dice animated roll
  ComeOut.onclick = function () {
    throwDice();
  };

  function rollDice() {
    let diceOneVal = Math.floor(Math.random() * 6 + 1);
    let diceTwoVal = Math.floor(Math.random() * 6 + 1);

    // diceOneVal = 2;
    // console.log(diceOneVal + " " + diceTwoVal);

    for (var i = 1; i <= 6; i++) {
      // if (DiceOne.classList.contains(`show-${diceOneVal}`)) {
      //   DiceOne.style.transform = "rotateZ(60deg)";
      //   console.log(DiceOne.classList);
      //   console.log("Same Val" + ` ${diceOneVal}`);
      // }
      DiceOne.classList.remove("show-" + i);
      if (diceOneVal === i) {
        DiceOne.classList.add("show-" + i);
      }
    }

    for (var i = 1; i <= 6; i++) {
      // if (DiceTwo.classList.contains(`show-${diceTwoVal}`)) {
      //   // DiceTwo.style.transform = "rotate(360deg)";
      //   console.log("Same Val");
      // }
      DiceTwo.classList.remove("show-" + i);
      if (diceTwoVal === i) {
        DiceTwo.classList.add("show-" + i);
      }
    }
    return {
      dice1: diceOneVal,
      dice2: diceTwoVal,
    };
  }
  // gives our random values for our dies
  function throwDice() {
    let rolls = rollDice();
    gameData.roll1 = rolls.dice1;
    gameData.roll2 = rolls.dice2;
    gameData.rollSum = rolls.dice1 + rolls.dice2;
    dicesound.play();

    // if two 1's are rolled
    if (gameData.rollSum === 2) {
      happycorgi.hidden = true;
      angrycorgi.hidden = false;
      gameData.score[gameData.index] = 0;
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      if (gameData.index == 0) {
        player1.classList.add("highlight");
        player1.classList.remove("nohighlight");
        player2.classList.remove("highlight");
        player2.classList.add("nohighlight");
      } else {
        player1.classList.remove("highlight");
        player1.classList.add("nohighlight");
        player2.classList.add("highlight");
        player2.classList.remove("nohighlight");
      }

      // show the current score
      setTimeout(setUpTurn, 0);
    }
    // if either die was a 1
    else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
      console.log("one of the dice was a 1");
      // switch play
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      // game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${
      //   gameData.players[gameData.index]
      // }</p>`;
      happycorgi.hidden = true;
      angrycorgi.hidden = false;
      bark.play();
      if (gameData.index == 0) {
        player1.classList.add("highlight");
        player1.classList.remove("nohighlight");
        player2.classList.remove("highlight");
        player2.classList.add("nohighlight");
      } else {
        player1.classList.remove("highlight");
        player1.classList.add("nohighlight");
        player2.classList.add("highlight");
        player2.classList.remove("nohighlight");
      }
      setTimeout(setUpTurn, 0);
    }

    // if neither die is a 1
    else {
      happycorgi.hidden = false;
      angrycorgi.hidden = true;

      gameData.score[gameData.index] += gameData.rollSum;

      for (let i = 0; i < bone1.length - 1; i++) {
        if (!bones[gameData.index][i].hidden) {
          bones[gameData.index][i].hidden = true;
          bones[gameData.index][i + 1].hidden = false;
          break;
        }
      }

      // document.getElementById("pass").addEventListener("click", function () {
      //   gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      //   setUpTurn();
      // });
      setTimeout(setUpTurn, 0);
      checkWinningCondition();
    }
    function checkWinningCondition() {
      if (gameData.score[gameData.index] > gameData.gameEnd) {
        // win.innerHTML=`${} Wins!`
        win.innerHTML = `${gameData.players[gameData.index]} wins!`;
        console.log("win!");
        setTimeout(() => {
          happy.play();
        }, 500);
        ComeOut.hidden = true;
        happycorgi.hidden = true;
        angrycorgi.hidden = true;
        wincorgi.hidden = false;
      } else {
        // show current score
        // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:${gameData.score[0]}</strong> and <strong>The score is currently <strong>${gameData.players[1]}:${gameData.score[1]}</strong></p>`;
      }
    }
  }
})();
