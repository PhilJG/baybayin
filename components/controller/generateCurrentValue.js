import { letters } from "./renderLetters.js";
import { randomSelect } from "./logic.js"


const isInThePast = function (rl) {
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
const generateCurrentValue = function (arr) {

  // arr.forEach(isInThePast);

  let r = arr.filter((x) => x.reviewed === false);

  //Selects a random letter number from the r array
  let randomLetters = randomSelect(r);

  //current value is set to a random letter from letters array
  let cv = r[randomLetters];
  
  return cv

};

//declare currentValue globally
export let currentValue = generateCurrentValue(letters)
