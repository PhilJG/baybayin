import { currentValue } from "../controller/generateCurrentValue.component.js";
import { randomSelect } from "../controller/logic.component.js";
import { qSeq, qImg, aBtn, scorePoints, scoreBoard } from "./dom.component.js";

//randomly select between either text or image when presenting the question
export const qType = ["txt", "img"];

// Declare qChoice and qCurrent as global variables
window.qChoice = randomSelect(qType);
window.qCurrent = qType[qChoice];

let currentScore = 0;

export let aArray = [];

export const renderQuestionImg = function (cv) {
  //if current is not undefined
  if (cv != undefined) {
     // Update qChoice and qCurrent using the window object
     window.qChoice = randomSelect(qType);
     window.qCurrent = qType[window.qChoice];
    if (window.qCurrent === "img") {
      qImg.textContent = `${cv.text}`
      qImg.className = 'baybayin-font';
    } else if (window.qCurrent === "txt") {
      qImg.textContent = `${cv.text}`;
      qImg.className = 'latin-font';

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

  if (cv.text === v) {
    qSeq.textContent == `${cv.sequence}`;

    //currentscore is entered into scorePoints
    qSeq.classList.add("correct");
    qSeq.textContent = cv.sequence;

    currentScore = currentScore + 1;
    qSeq.classList.remove("correct");
  } else if (cv.text != v) {
    qSeq.textContent == cv.sequence;
    //currentscore is entered into scorePoints
    currentScore = currentScore - 1;

    qSeq.classList.add("incorrect");
    console.log(`answer is false answer is ${cv.text} `);
    scoreBoard.classList.remove();
    qSeq.classList.remove("incorrect");
  }

  // Sets the score
  scorePoints.textContent = currentScore;
};

// Export qChoice and qCurrent as named exports
// export { qChoice, qCurrent };