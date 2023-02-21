import { shuffle } from "./logic.component.js";

//Generates answer buttons of all the letters
export const generateAnswer = function (l, cv) {
  let aArray = []; // Create a new array for each call to the function
  shuffle(l);

  // Add current value to array
  aArray.push(cv.text);
  for (let i = 0; i < 3; i++) {
    let x = l[i].text;
    if (x === cv.text) {
      continue;
    }
    aArray.push(`${x}`);
  }

  return aArray;
};
