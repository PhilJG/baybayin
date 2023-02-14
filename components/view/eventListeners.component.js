import {newQuestion} from "./newQuestionBtn.component.js"
import {mBtn} from "./dom.component.js" 

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

export default mBtn.addEventListener("click", newQuestion)

// let stringScore = new String(currentScore);
