import { currentValue } from "./generateCurrentValue.component.js";
import { setReviewDate } from "./setReviewDate.component.js";
  
 //Matches question with answer on click
export const matchAnswer = function (v) {
    currentValue.reviewed = true;
  
    if (currentValue.text === v) {
      //adds 1 point to current score if correct
      currentScore = currentScore + 1;
  
      // sequence is increased by 1 on correct answer
      currentValue.sequence = currentValue.sequence + 1;
     
    //   setTimeout(function () {
        replaceAnswerBtn();
    //   }, 1000);
      setReviewDate(currentValue);
    } else if (currentValue.text != v){
      //deducts 1 point to current score if correct
      currentScore == currentScore * 0;
      // sequence is 0 wrong answer
      currentValue.sequence = 0;
  
      console.log(
        `answer is false ${currentValue.text} is ${currentValue.sequence}`
      );
    //   setTimeout(function () {
        replaceAnswerBtn();
    //   }, 1000);
      setReviewDate(currentValue);
    }
    let stringScore = new String(currentScore);
  
  };