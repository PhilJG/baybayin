import { shuffle } from "./logic.component.js";

//Generates answer buttons of all the letters
export const generateAnswer = function (l, cv) {
  
// Create a new array for each call to the function
  let aArray = []; 
  shuffle(l);

  let x;
  
  for (let i = 0; i < 4; i++) {
    if (window.qCurrent === "img") {
      x = l[i];
      if (x === cv) {
        continue;
      }
      aArray.push(x);
    } else if (window.qCurrent === "txt") {
      x = l[i];
      if (x === cv) {
        continue;
      }
      aArray.push(x);
    }
  }
  // Add current value to array
  aArray.push(cv);
  
return aArray
}


