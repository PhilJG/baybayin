import { setReviewDate } from "./setReviewDate.component.js";
import { newQuestion } from "../view/newQuestionBtn.component.js";
import { oldReviewedLetters, pushStorage } from "../model/oldReviewedLetters.component.js";
import { reviewedLetters } from "./createReviewLetters.component.js";

//Matches question with answer on click
export const matchAnswer = function (cv, v) {
  cv.reviewed = true;

  let sequence = cv.sequence;

  if (cv.latin == v.latin) {
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

  reviewedLetters.push(cv)
  pushStorage(reviewedLetters);
  // let stringScore = new String(currentScore);
};
