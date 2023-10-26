"use strict";

const qBox = document.querySelector(".question__box");
const qImg = document.querySelector(".question__box--img");
const qSeq = document.querySelector(".question__box--sequence");
const qBtn = document.querySelector(".question__btn");
const svgImg = document.getElementsByTagName("svg");

const aList = document.querySelector(".answer");
let aBtn = document.getElementsByClassName("answer__btn");
const scoreBoard = document.querySelector(".score__points");
const scorePoints = document.querySelector(".score__points--inc");
const toggleBtn = document.querySelector(".switch");

const mBtn = document.querySelector("#myBtn");

const allBtns = [mBtn, aBtn, qBtn];

let aArray = [];

let aBtnKey, aBtnHTML, imgNode, currentValue, qImgNodes, currentScore;

//get sessionStorage of previous current score on refresh and turn it into a number
function getScore() {
  if (localStorage.length > 0) {
    currentScore = ~~localStorage.getItem("currentScore");
  } else {
    currentScore = 0;
  }
}

getScore();


// Sets the score
scorePoints.textContent = currentScore;

//Randomly selects from an array
const randomSelect = function (arr) {
  return Math.round(Math.random() * (arr.length - 1));
};

const qType = ["txt", "img"];

let qChoice = randomSelect(qType);
let qCurrent = qType[qChoice];

//Shuffles array
function shuffle(arr) {
  let currentIndex = arr.length,
    randomIndex;

  //While there remains elements to shuffle
  while (currentIndex != 0) {
    //Pick a remaining element
    randomIndex = randomSelect(arr);
    currentIndex--;

    //And swap it with the current element
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}


//Selects random index from letters array
let randomLetters = randomSelect(reviewedLetters);

let currentDate = new Date();
// let currentDate = cd.getUTCDate();

const setReviewDate = function (cv) {
  let rd = new Date();

  function addDays(numOfHours, date = new Date()) {
    date.setUTCDate(date.getDate() + numOfHours);
    return date;
  }

  let result;

  const sequenceCheck = function (seq) {
    result = addDays(seq, rd);

    cv.reviewDate = result;

    return (currentValue.reviewDate = rd);
  };

  if ((cv.sequence = 0)) {
    sequenceCheck(1);
  } else if ((cv.sequence = 1)) {
    sequenceCheck(2);
  } else if ((cv.sequence = 2)) {
    sequenceCheck(3);
  } else if ((cv.sequence = 3)) {
    sequenceCheck(4);
  } else {
    console.error("if statement error");
  }
};

//Matches question with answer on click
const matchAnswer = function (v) {
  currentValue.reviewed = true;

  if (currentValue.text === v) {
    //adds 1 point to current score if correct
    currentScore = currentScore + 1;

    // sequence is increased by 1 on correct answer
    currentValue.sequence = currentValue.sequence + 1;

    qSeq.textContent == `${currentValue.sequence}`;

    //currentscore is entered into scorePoints
    qSeq.classList.add("correct");
    qSeq.textContent = currentValue.sequence
   
    setTimeout(function () {
      replaceAnswerBtn();
      qSeq.classList.remove("correct");
    }, 1000);
    setReviewDate(currentValue);
  } else if (currentValue.text != v){
    //deducts 1 point to current score if correct
    currentScore == currentScore * 0;
    // sequence is 0 wrong answer
    currentValue.sequence = 0;

    qSeq.textContent == currentValue.sequence
    //currentscore is entered into scorePoints=
    qSeq.classList.add("incorrect");
    console.log(
      `answer is false ${currentValue.text} is ${currentValue.sequence}`
    );
    setTimeout(function () {
      // scoreBoard.classList.remove();
      qSeq.classList.remove("incorrect");
      replaceAnswerBtn();
    }, 1000);
    setReviewDate(currentValue);
  }
  let stringScore = new String(currentScore);

  // Sets the score
scorePoints.textContent = currentScore;

  //set currentScore to session storage and turn it into a string
  localStorage.setItem("currentScore", `${stringScore}`);
  localStorage.setItem("reviewedLetters", JSON.stringify(reviewedLetters));
};

// Adds text content & eventlistner to all 4 answer buttons
const buildAnswerBtn = function () {
  aArray.forEach((i) => {
    var button = document.createElement("button");
    if (qCurrent === "txt") {
      button.innerHTML = `<img src="imgs/${i}.svg" class="svg" ></img>`;
    } else if (qCurrent === "img") {
      button.innerText = i;
    }
    button.className = "answer__btn";
    button.addEventListener("click", function () {
      matchAnswer(i);
    });
    aList.appendChild(button);
  });
};

//Generates question letter on click
const generateQuestionLetter = function () {
  const isInThePast = function (rl) {
    currentDate = Date();
    if (rl.reviewDate < currentDate) {
      rl.reviewed = false;
    } else if (rl.reviewDate > currentDate) {
      rl.reviewed = true;
    }
  };

  reviewedLetters.forEach(isInThePast);

  let r = reviewedLetters.filter((x) => x.reviewed === false);

  //Selects a random letter number from the r array
  randomLetters = randomSelect(r);

  currentValue = r[randomLetters];

  isInThePast(currentValue);

  if (currentValue != undefined) {
    if (qCurrent === "img") {
      qImg.innerHTML = `<img src="imgs/${currentValue.text}.svg" class="svg" height="100px">`;
    } else if (qCurrent === "txt") {
      qImg.innerHTML = `${currentValue.text}`;
    }
    qSeq.innerHTML = currentValue.sequence;
    aArray.push(currentValue.text);
  } else {
    qImg.innerHTML =
      "All the letters have been reviewed for today. Try learning some new ones! ";
  }
};

//Generates answer buttons of all the letters
const generateAnswer = function () {
  shuffle(reviewedLetters);
  for (let i = 0; i < 3; i++) {
    let x = reviewedLetters[i].text;
    if (x === currentValue.text) {
      continue;
    }
    aArray.push(`${x}`);
  }
};

const replaceAnswerBtn = function () {
  aArray = [];
  currentValue = reviewedLetters[randomLetters];
  qChoice = randomSelect(qType);
  qCurrent = qType[qChoice];
  while (aList.hasChildNodes()) {
    aList.removeChild(aList.firstChild);
  }
  scoreBoard.classList.remove("incorrect", "correct");
  generateQuestionLetter();
  generateAnswer();
  shuffle(aArray);
  buildAnswerBtn();
};

span.addEventListener("click", function () {
  replaceAnswerBtn();
  modal.style.display = "none";
});

nBtn.addEventListener("click", function () {
  // generateModalLetter()
  if (reviewedIndex > 4) {
    span.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
});

//New letter generated
//Generate new icon on "new" btn click"
qBtn.addEventListener("click", replaceAnswerBtn);

let stringScore = new String(currentScore);
