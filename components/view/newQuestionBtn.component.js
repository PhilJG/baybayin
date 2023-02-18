import {renderQuestionImg } from './questionDom.component.js'
import {buildAnswerBtn} from './buildAnswerBtn.component.js'
import { generateCurrentValue } from '../controller/generateCurrentValue.component.js';
import {letters} from '../controller/renderLetters.component.js'
import {qType} from './questionDom.component.js'
import { randomSelect } from '../controller/logic.component.js';
import { aList } from './dom.component.js';

export const newQuestion = function () {
   let aArray = [];
   let currentValue = generateCurrentValue(letters);
   let qChoice = randomSelect(qType);
   let qCurrent = qType[qChoice];
   console.log(`currentValue ${currentValue.text}`);

   
    while (aList.hasChildNodes()) {
      aList.removeChild(aList.firstChild);
    }
    // scoreBoard.classList.remove("incorrect", "correct");
    renderQuestionImg(currentValue);
    buildAnswerBtn(currentValue.text);
  };