import { setReviewDate } from "./setReviewDate.component.js";
import { newQuestion } from "../view/newQuestionBtn.component.js";
import { oldReviewedLetters, pushStorage } from "../model/storage.component.js";

export let reviewedLetters = [];

//Matches question with answer on click
export const matchAnswer = function (cv, v) {
  cv.reviewed = true;

  let sequence = cv.sequence;

  if (cv.latin == v.latin) {
    console.log(`cv.latin ${cv.latin}`);
    console.log(`v ${v.latin}`);

    //adds 1 point to current score if correct
    // currentScore = currentScore + 1;

    // sequence is increased by 1 on correct answer
    cv.sequence = cv.sequence + 1;

    setTimeout(function () {
      newQuestion();
    }, 1000);
    setReviewDate(cv, sequence);
  } else if (cv.latin != v.latin) {
    //deducts 1 point to current score if correct
    // currentScore == currentScore * 0;

    // sequence is 0 wrong answer
    cv.sequence = 0;

    setTimeout(function () {
      newQuestion();
    }, 1000);
    setReviewDate(cv, sequence);
  }

  pushStorage([cv]);
  // let stringScore = new String(currentScore);
};
