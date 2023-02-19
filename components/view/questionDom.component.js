import { currentValue } from "../controller/generateCurrentValue.component.js";
import { randomSelect } from "../controller/logic.component.js";
import { qSeq, qImg, aBtn, scorePoints, scoreBoard } from "./dom.component.js";

//randomly select between either text or image when presenting the question
export const qType = ["txt", "img"];

let qChoice = randomSelect(qType);
export let qCurrent = qType[qChoice];

// //change sequence number on dom
// qSeq.textContent = `${currentValue.sequence}`;

// //currentscore is entered into scorePoints
// qSeq.classList.add("correct");
// qSeq.textContent = currentValue.sequence;

let currentScore = 0;

export let aArray = []

 export const renderQuestionImg = function (cv) {
  //if current is not undefined
  if (cv != undefined) {
    if (qCurrent === "img") {
      qImg.innerHTML = `<img src="imgs/${cv.text}.svg" class="svg" height="100px">`;
    } else if (qCurrent === "txt") {
      qImg.innerHTML = `${cv.text}`;
    }
    qSeq.textContent = cv.sequence;
    aArray.push(cv.text);
  } else {
    qImg.innerHTML =
      "All the letters have been reviewed for today. Try learning some new ones! ";
  }
};

//Matches question with answer on click
export const matchAnswerDOM = function (cv, v) {
  console.log( `matchAnswerDOM ${cv.text}`);
  
  if (cv.text === v) {
    qSeq.textContent == `${cv.sequence}`;

    //currentscore is entered into scorePoints
    qSeq.classList.add("correct");
    qSeq.textContent = cv.sequence;

    currentScore = currentScore + 1;
    console.log(
      `answer is true answer is ${cv.text} `
    );
    setTimeout(function () {
    qSeq.classList.remove("correct");
    }, 1000);
  } else if (cv.text != v) {
    qSeq.textContent == cv.sequence;
    //currentscore is entered into scorePoints
    currentScore = currentScore - 1;

    qSeq.classList.add("incorrect");
    console.log(
      `answer is false answer is ${cv.text} `
    );
    setTimeout(function () {
    scoreBoard.classList.remove();
    qSeq.classList.remove("incorrect");
    }, 1000);
  }

  // Sets the score
  scorePoints.textContent = currentScore;
};

