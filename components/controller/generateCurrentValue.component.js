import { randomSelect } from "./logic.component.js";
import { reviewedLetters } from "./createReviewLetters.component.js";
import { getAdd } from "../model/reviewedLetters.component.js";

export const isInThePast = function (rl) {
  currentDate = Date();
  if (rl.reviewDate < currentDate) {
    rl.reviewed = false;
    console.log(`${rl} is false`);
  } else if (rl.reviewDate > currentDate) {
    rl.reviewed = true;
    console.log(`${rl} is true`);
  }
};


//Generates question letter on click
export const generateCurrentValue = function (arr) {
  
  let r = arr.filter((x) => !x.reviewed);
  //Selects a random letter number from the r array
  let randomLetters = randomSelect(r);

  return r[randomLetters];
};

let array = getAdd()
//declare currentValue globally
export let currentValue = generateCurrentValue(array);
