import {newQuestion} from "./newQuestionBtn.component.js"
import {qBtn, aBtn, aList, lBtn, nBtn, xBtn} from "./dom.component.js" 
import { iterateByFour, closeModal, learnLetterBtn } from "./popUpDom.component.js";

// import { matchAnswer } from "../controller/matchAnswer.component.js";

// Modal eventlistener
// span.addEventListener("click", function () {
//     replaceAnswerBtn();
//     modal.style.display = "none";
//   });s

  //New letter generated
//Generate new icon on "new" btn click"
// qBtn.addEventListener("click", newQuestion);

qBtn.addEventListener("click", newQuestion);

// When the user clicks on the learn button, open the modal and present a new letter
lBtn.addEventListener("click", learnLetterBtn);

// When the user clicks on the learn button, go to a new letter
nBtn.addEventListener("click", iterateByFour);

// window.addEventListener("click", closeModal());
xBtn.addEventListener("click", closeModal);

// aList.childNodes.forEach(btn => 
//   btn.addEventListener("click", matchAnswerDOM(currentValue))
//   )
// export aBtn.array.forEach(btn => {
//   btn.addEventListener("click", matchAnswerDOM())
// });

// let stringScore = new String(currentScore);
