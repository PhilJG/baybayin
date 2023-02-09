import { currentValue } from "./generateCurrentValue.component.js";
import { shuffle } from "./logic.component.js";
import { letters } from "./renderLetters.component.js";

let aArray = [];

//Generates answer buttons of all the letters
export const generateAnswer = function () {
    shuffle(letters);
    for (let i = 0; i < 3; i++) {
      let x = letters[i].text;
      if (x === currentValue.text) {
        continue;
      }
      aArray.push(`${x}`);
    }
    return aArray
  };