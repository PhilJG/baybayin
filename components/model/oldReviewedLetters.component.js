import { reviewedLetters } from "../controller/createReviewLetters.component.js";
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
  
  //check if oldReviewedLetters is null before calling the push method.
  if (oldReviewedLetters === null) {
    oldReviewedLetters = [];
  }

  console.log("reviewedLetters:", reviewedLetters, typeof reviewedLetters);
  console.log("oldReviewedLetters:", oldReviewedLetters, typeof oldReviewedLetters);
  
rl => {
    //find the index of the existing letter in the reviewedLetters array based on its latin property.
    const index = oldReviewedLetters.findIndex(l => l.latin === rl.latin);
    if (index !== -1) {
      // If the index is not found, you can push a new object to the array.
      oldReviewedLetters[index].reviewed = rl.reviewed;
      oldReviewedLetters[index].sequence = rl.sequence;
      // If the index is found, you can update the properties of the existing object. 
    } else {
      // Add new object
      oldReviewedLetters.push(rl);
    }
  };

  localStorage.setItem("reviewedLetters", JSON.stringify(oldReviewedLetters));
  return oldReviewedLetters;

}

   //set currentScore to session storage and turn it into a string
  //  localStorage.setItem("currentScore", `${stringScore}`);

