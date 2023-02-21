import {renderQuestionImg } from './questionDom.component.js'
import {buildAnswerBtn} from './buildAnswerBtn.component.js'
import { generateCurrentValue } from '../controller/generateCurrentValue.component.js';
import {qType} from './questionDom.component.js'
import { randomSelect } from '../controller/logic.component.js';
import { aList, scoreBoard } from './dom.component.js';
import { lettersToReview } from '../controller/createReviewLetters.component.js';

export const newQuestion = function () {
   let aArray = [];
   let currentValue = generateCurrentValue(lettersToReview);
   let qChoice = randomSelect(qType);
   let qCurrent = qType[qChoice];
  
    while (aList.hasChildNodes()) {
      aList.removeChild(aList.firstChild);
    }
    scoreBoard.classList.remove("incorrect", "correct");
    renderQuestionImg(currentValue);
    buildAnswerBtn(currentValue);
  };