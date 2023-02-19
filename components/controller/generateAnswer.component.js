import { currentValue } from "./generateCurrentValue.component.js";
import { shuffle } from "./logic.component.js";

//Generates answer buttons of all the letters
export const generateAnswer = function (l) {
  let aArray = []; // Create a new array for each call to the function
  shuffle(l);

  // Add current value to array
  aArray.push(currentValue.text);
  for (let i = 0; i < 2; i++) {
    let x = l[i].text;
    if (x === currentValue.text) {
      continue;
    }
    aArray.push(`${x}`);
  }
  console.log(aArray);

  return aArray;
};
