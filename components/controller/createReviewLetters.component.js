import { letters } from "./renderLetters.component.js";
import { oldReviewedLetters } from "../model/oldReviewedLetters.component.js";

export let generatedLetter;

//Empty array for new letters to be reviewed in this session
 let lettersToReview;

// array for letters already reviewed in modal
 let reviewedLetters;

//Produces letters to be reviewed
export const generateModalLetter = function (ri) {  
    
if (oldReviewedLetters == null){
  lettersToReview = []
  reviewedLetters = [];
} else {
  
}
  generatedLetter = letters[ri];
  console.log(generatedLetter);
  

  // Check if the generated letter is already in the lettersToReview array
  if ( reviewedLetters == [] || !reviewedLetters.includes(generatedLetter)) {
    // If the letter has NOT been reviewed, add it to the lettersToReview array
    reviewedLetters.push(generatedLetter);
  } else {
        reviewedLetters.push(generatedLetter);
  }

  // Add the generated letter to the lettersToReview array
  lettersToReview.push(generatedLetter);

  // increment i by 1
  ri = ri + 1;

  console.log(reviewedLetters);
  
  return generatedLetter;
};

export {lettersToReview, reviewedLetters}
