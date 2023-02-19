import {
  mBtn,
  modal,
  lBtn,
  closeModal,
  mLetter,
  nBtn,
} from "../view/dom.component.js"

import {generatedLetter, generateModalLetter} from '../controller/popModalcomponent.js'

console.log(modal);


modal.style.display = "none";

export const learnLetterBtn = function() {
  modal.style.display = "block";
  let gl = generateModalLetter()
 // produce letter in modal html
 mLetter.innerHTML = `<img src="imgs/${gl.text}.svg" class="svg" height="100px"></img><h2>${generatedLetter.text}</h2>`;
console.log(gl);
}

// When the user clicks on the learn button, open the modal and present a new letter
lBtn.addEventListener("click", learnLetterBtn)

// When the user clicks on the learn button, go to a new letter
nBtn.addEventListener("click", learnLetterBtn)

// function () {
//   // if (reviewedIndex > 4){
//   //   span.style.display = "block";
//   //   // When the user clicks on <span> (x), close the modal
//   // }
//   // When the user clicks anywhere outside of the modal, close it
//   window.addEventListener("click", function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   });
// });
