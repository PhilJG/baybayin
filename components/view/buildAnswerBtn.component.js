import { matchAnswer } from "../controller/matchAnswer.component.js";
import { qCurrent } from "./questionDom.component.js";
import {generateAnswer} from "../controller/generateAnswer.component.js"
import { letters } from "../controller/renderLetters.component.js";
import { aArray } from "./questionDom.component.js";
import { aList } from "./dom.component.js";

// Adds text content & eventlistner to all 4 answer buttons
export const buildAnswerBtn = function () {
 let aArray = generateAnswer(letters)
  
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