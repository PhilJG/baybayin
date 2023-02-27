
import { letters } from "./renderLetters.component.js";
// import { oldReviewedLetters } from "../model/storage.component.js";

export let generatedLetter;

//Empty array for new letters to be reviewed in this session
export let lettersToReview = [];

//Produces letters to be reviewed
export const generateModalLetter = function (ri) {
  generatedLetter = letters[ri];

// Check if the generated letter is already in the lettersToReview array
  if (!lettersToReview.includes(generatedLetter)){
// If the letter has NOT been reviewed, add it to the lettersToReview array
    lettersToReview.push(generatedLetter)
  }
  
  // increment i by 1
  ri = ri + 1;
    return generatedLetter
};


