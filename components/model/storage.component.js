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

  
  rl.forEach(letter => {
    //find the index of the existing letter in the reviewedLetters array based on its text property.
    const index = oldReviewedLetters.findIndex(l => l.text === letter.text);
    if (index !== -1) {
      // If the index is not found, you can push a new object to the array.
      oldReviewedLetters[index].reviewed = letter.reviewed;
      oldReviewedLetters[index].sequence = letter.sequence;
      // If the index is found, you can update the properties of the existing object. 
    } else {
      // Add new object
      oldReviewedLetters.push(letter);
    }
  });
  
  localStorage.setItem("reviewedLetters", JSON.stringify(oldReviewedLetters));
  console.log(`after ${oldReviewedLetters}`);
  return oldReviewedLetters;

}

   //set currentScore to session storage and turn it into a string
  //  localStorage.setItem("currentScore", `${stringScore}`);

