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
  
  console.log(`before ${rl}`);

  rl.push(oldReviewedLetters)
  
  console.log(`after ${rl}`);
  
  return rl
}

   //set currentScore to session storage and turn it into a string
  //  localStorage.setItem("currentScore", `${stringScore}`);
   localStorage.setItem("reviewedLetters", JSON.stringify(reviewedLetters));