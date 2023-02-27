import { reviewedLetters } from "../controller/matchAnswer.component.js";
// import { stringScore } from "../controller/matchAnswer.component.js";

export let oldReviewedLetters = JSON.parse(localStorage.getItem("reviewedLetters"));

//get sessionStorage of previous current score on refresh and turn it into a number
// function getScore() {
//     if (localStorage.length > 0) {
//       currentScore = ~~localStorage.getItem("currentScore");
//     } else {
//       currentScore = 0;
//     }
//   }

export const pushStorage = function(rl){
  
  console.log(`before ${oldReviewedLetters}`);

  //check if oldReviewedLetters is null before calling the push method.
  if (oldReviewedLetters === null) {
    oldReviewedLetters = [];
  }

  oldReviewedLetters.push(...rl)
  
  localStorage.setItem("reviewedLetters", JSON.stringify(oldReviewedLetters));
  console.log(`after ${oldReviewedLetters}`);
  return oldReviewedLetters
}

   //set currentScore to session storage and turn it into a string
  //  localStorage.setItem("currentScore", `${stringScore}`);

