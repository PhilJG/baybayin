import {newQuestion} from "./newQuestionBtn.component.js"
import {qBtn, aBtn, aList, lBtn, nBtn} from "./dom.component.js" 
import { learnLetterBtn } from "./popUpDom.component.js";
import { iterateByFour } from "./popUpDom.component.js";
// import { matchAnswer } from "../controller/matchAnswer.component.js";

// Modal eventlistener
// span.addEventListener("click", function () {
//     replaceAnswerBtn();
//     modal.style.display = "none";
//   });
  
//  export const nBtnEventlistener = nBtn.addEventListener("click", function () {
//     // generateModalLetter()
//     if (reviewedIndex > 4) {
//       span.style.display = "block";
//       // When the user clicks on <span> (x), close the modal
//       // When the user clicks anywhere outside of the modal, close it
//       window.addEventListener("click", function (event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//         }
//       });
//     }
//   });

  //New letter generated
//Generate new icon on "new" btn click"
// qBtn.addEventListener("click", newQuestion);

qBtn.addEventListener("click", newQuestion);

// When the user clicks on the learn button, open the modal and present a new letter
lBtn.addEventListener("click", learnLetterBtn);

// When the user clicks on the learn button, go to a new letter
nBtn.addEventListener("click", iterateByFour);

// aList.childNodes.forEach(btn => 
//   btn.addEventListener("click", matchAnswerDOM(currentValue))
//   )
// export aBtn.array.forEach(btn => {
//   btn.addEventListener("click", matchAnswerDOM())
// });

// let stringScore = new String(currentScore);
