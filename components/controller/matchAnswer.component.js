import { setReviewDate } from "./setReviewDate.component.js";
import { newQuestion } from "../view/newQuestionBtn.component.js";

//Matches question with answer on click
export const matchAnswer = function (cv, v) {
  cv.reviewed = true;
  console.log(`matchAnswer cv: ${cv.text}`);
  console.log(`v ${v}`);

  if (cv.text === v) {
    //adds 1 point to current score if correct
    // currentScore = currentScore + 1;

    // sequence is increased by 1 on correct answer
    cv.sequence = cv.sequence + 1;

    setTimeout(function () {
      newQuestion();
    }, 1000);
    setReviewDate(cv);
  } else if (cv.text != v) {
    //deducts 1 point to current score if correct
    // currentScore == currentScore * 0;
    // sequence is 0 wrong answer
    cv.sequence = 0;

    console.log(`answer is false ${cv.text} is ${cv.sequence}`);
    setTimeout(function () {
      newQuestion();
    }, 1000);
    setReviewDate(cv);
  }
  // let stringScore = new String(currentScore);
};
