import { currentValue } from "./generateCurrentValue.component.js";
import { shuffle } from "./logic.component.js";
import { letters } from "./renderLetters.component.js";


//Generates answer buttons of all the letters
export const generateAnswer = function (l) {
   let aArray = [];
    shuffle(l);
    for (let i = 0; i < 3; i++) {
      let x = l[i].text;
      if (x === currentValue.text) {
        continue;
      }
      aArray.push(`${x}`);
    }
    return aArray
  };