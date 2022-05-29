"use strict";

//APP FLOW
//Letter is matched with button options available

//If selection is correct...
//1)User is notified correct
//2) New Letter is genereated
//3) Score is +1

//If Letter is  is not correct
//1) certain options are removed
//2)Core is -1

//letter objects
const ba = {
  l: "ba",
  // i: imgs/ba.svg
};

const ga = {
  l: "ga",
  // i: imgs/ga.svg
};
const nga = {
  l: "nga",
  // i: imgs/nga.svg
};

const ka = {
  l: "ka",
  // i: imgs/ka.svg
};

const sa = {
  l: "sa",
  // i: imgs/sa.svg
};

const da_ra = {
  l: "da_ra",
  // i: imgs/da_ra.svg
};

const ha = {
  l: "ha",
  // i: imgs/ha.svg
};
const i_e = {
  l: "i_e",
  // i: imgs/i_e.svg
};

const ma = {
  l: "ma",
  // i: imgs/ma.svg
};

const na = {
  l: "na",
  // i: imgs/na.svg
};

const pa = {
  l: "pa",
  // i: imgs/pa.svg
};

const ta = {
  l: "ta",
  // i: imgs/ta.svg
};
const u_o = {
  l: "u_o",
  // i: imgs/u_o.svg
};

const wa = {
  l: "wa",
  // i: imgs/wa.svg
};

const ya = {
  l: "ya",
  // i: imgs/ya.svg
};

const letters = [
  ba,
  ga,
  nga,
  ka,
  sa,
  da_ra,
  ha,
  i_e,
  ma,
  na,
  pa,
  ta,
  u_o,
  wa,
  ya,
];
const qBox = document.querySelector(".question__box");
const qImg = document.querySelector(".question__box--img");
const qBtn = document.querySelector(".question__btn");
const aList = document.querySelector(".answer");
const scoreBoard = document.querySelector(".score__points--inc");

let currentValue;
let aBtn;
let n;
let qImgNodes;

let currentScore;

//get sessionStorage of previous current score on refresh and turn it into a number


function getScore() {
  if (sessionStorage.length > 0) {
    currentScore = ~~sessionStorage.getItem('currentScore');
  } else {
    currentScore = 0;
  }
}

getScore();

scoreBoard.textContent = currentScore;

//Randomly selects from an array
const randomSelect = function (arr) {
  return Math.round(Math.random() * arr.length);
};

//Selects random index from letters array
let randomLetters = randomSelect(letters);

//Generates question letter on click
const generateQuestionLetter = function () {
  qImgNodes = qImg.childNodes[0];
  n = document.createElement("div");
  //Selects a random letter from the letters array
  let randomLetters = randomSelect(letters);
  currentValue = letters[randomLetters].l;
  n.className = "question__box--letter";
  qImg.replaceChild(n, qImgNodes);
  n.innerHTML = `<img src="imgs/${currentValue}.svg" height="100px"></img>`;
  console.log(`current value: ${currentValue}`);
};

generateQuestionLetter();

//Generates answer buttons of all the letters
const generateAnswer = function () {
  letters.forEach(function (x) {
    aBtn = document.createElement("button");
    aList.appendChild(aBtn);
    aBtn.innerHTML = `${x.l}`;
    //Matches question with answer on click
    aBtn.addEventListener("click", function () {
      console.log(x.l);
      if (x.l == currentValue) {
        //adds 1 point to current score if correct
        currentScore = currentScore + 1;
        //currentscore is entered into scoreboard
        scoreBoard.textContent = currentScore;
        generateQuestionLetter();
        console.log(`New score: ${currentScore}`);
      } else {
        //deducts 1 point to current score if correct
        currentScore = currentScore - 1;
        //currentscore is entered into scoreboard
        scoreBoard.textContent = currentScore;
        console.log(`New score: ${currentScore}`);
      }
      let stringScore = new String(currentScore)

//set currentScore to session storage and turn it into a string
sessionStorage.setItem('currentScore', `${stringScore}`);

    });
  });
};
generateAnswer();

//New letter generated
//Generate new icon on "new" btn click"
qBtn.addEventListener("click", generateQuestionLetter);

let stringScore = new String(currentScore)

//set currentScore to session storage and turn it into a string
sessionStorage.setItem('currentScore', `${stringScore}`);
