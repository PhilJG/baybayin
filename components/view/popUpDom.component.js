import {
  mBtn,
  modal,
  lBtn,
  xBtn,
  mLetter,
  nBtn,
} from "../view/dom.component.js";

import {
  generatedLetter,
  generateModalLetter
} from "../controller/createReviewLetters.component.js";


xBtn.style.display = "none";

let reviewedIndex = 0;

export const learnLetterBtn = function () {
  modal.style.display = "block";
  
  let gl = generateModalLetter(reviewedIndex);
  
  // produce letter in modal html
  mLetter.innerHTML = `<img src="imgs/${gl.text}.svg" class="svg" height="100px"></img><h2>${generatedLetter.text}</h2>`;
};

// When the user clicks on the learn button, open the modal and present a new letter
lBtn.addEventListener("click", learnLetterBtn);

// When the user clicks on the learn button, go to a new letter
nBtn.addEventListener("click", function () {
  //iterate the reviewLetters up by 1
  reviewedIndex++;
  //if the user has not reviewed 4 letters do not allow them to close the popup modal
  if (reviewedIndex < 4) {
    xBtn.style.display = "none";
    learnLetterBtn();
  } else {
    // When the user clicks on closeMocal (x), close the modal
    xBtn.style.display = "block";
    learnLetterBtn();
  }
  // When the user clicks anywhere outside of the modal, close it
});

// exit the popUpModal
const closeModal = function () {
  modal.style.display = "none";
};

// window.addEventListener("click", closeModal());
xBtn.addEventListener("click", closeModal);
