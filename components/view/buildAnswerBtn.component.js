import { matchAnswer } from "../controller/matchAnswer.component.js";
import { qCurrent } from "./questionDom.component.js";
import { generateAnswer } from "../controller/generateAnswer.component.js";
import { letters } from "../controller/renderLetters.component.js";
import { aArray } from "./questionDom.component.js";
import { aList } from "./dom.component.js";

// Adds text content & eventlistner to all 4 answer buttons
export const buildAnswerBtn = function () {
  // Remove all previous answer buttons from the aList element
  while (aList.firstChild) {
    aList.removeChild(aList.firstChild);
  }

  // Generate a new array of answer options
  const aArray = generateAnswer(letters);

  // Create a new button for each answer in the array and append it to the aList element
  aArray.forEach((i) => {
    var button = document.createElement("button");
    if (qCurrent === "txt") {
      button.innerHTML = `<img src="imgs/${i}.svg" class="svg" ></img>`;
    } else if (qCurrent === "img") {
      button.innerText = i;
    }
    button.className = "answer__btn";
    button.addEventListener("click", function () {
      matchAnswer(i);
    });
    aList.appendChild(button);
  });
};
