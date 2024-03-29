import { matchAnswer } from "../controller/matchAnswer.component.js";
import { matchAnswerDOM } from "./questionDom.component.js";
import { generateAnswer } from "../controller/generateAnswer.component.js";
import { aList } from "./dom.component.js";
import { shuffle } from "../controller/logic.component.js";
import { lettersToReview } from "../controller/createReviewLetters.component.js";

// Adds text content & eventlistner to all 4 answer buttons
export const buildAnswerBtn = function (cv) {
  
  // Remove all previous answer buttons from the aList element
  while (aList.firstChild) {
    aList.removeChild(aList.firstChild);
  }
  // Generate a new array of answer options
  const aArray = generateAnswer(lettersToReview, cv);

  //answer array is shuffled
  shuffle(aArray);

  // Create a new button for each answer in the array and append it to the aList element
  aArray.forEach((i) => {
    
    let button = document.createElement("button");
    aList.append(button)
    if (window.qCurrent === "txt") {
      button.textContent = i.baybayin;
    } else if (window.qCurrent === "img") {
      button.textContent = i.latin;
    }
    button.className = "answer__btn";
    button.addEventListener("click", function () {
      matchAnswer(cv, i);
      matchAnswerDOM(cv, i)
    });
  });
};
