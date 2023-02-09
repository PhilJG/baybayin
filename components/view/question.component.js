import {currentValue} from '../controller/generateCurrentValue.component.js'
import {randomSelect} from "../controller/logic.component.js"


//randomly select between either text or image when presenting the question
const qType = ["txt", "img"];

let qChoice = randomSelect(qType);
export let qCurrent = qType[qChoice];

//change sequence number on dom
qSeq.textContent == `${currentValue.sequence}`;

  //currentscore is entered into scorePoints
  qSeq.classList.add("correct");
  qSeq.textContent = currentValue.sequence

//if current is not undefined
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

  //Matches question with answer on click
const matchAnswer = function (v) {

  if (currentValue.text === v) {

    qSeq.textContent == `${currentValue.sequence}`;

    //currentscore is entered into scorePoints
    qSeq.classList.add("correct");
    qSeq.textContent = currentValue.sequence
   
    // setTimeout(function () {
      qSeq.classList.remove("correct");
    // }, 1000);
  } else if (currentValue.text != v){

    qSeq.textContent == currentValue.sequence
    //currentscore is entered into scorePoints=
    qSeq.classList.add("incorrect");
    console.log(
      `answer is false ${currentValue.text} is ${currentValue.sequence}`
    );
    // setTimeout(function () {
      scoreBoard.classList.remove();
      qSeq.classList.remove("incorrect");
  
    // }, 1000);
  }

  // Sets the score
scorePoints.textContent = currentScore;

};