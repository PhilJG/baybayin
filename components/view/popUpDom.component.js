import {
  mBtn,
  modal,
  lBtn,
  xBtn,
  mLetter,
  nBtn,
} from "../view/dom.component.js";

import {
  generateModalLetter,
} from "../controller/createReviewLetters.component.js";

import { oldReviewedLetters } from "../model/oldReviewedLetters.component.js";

import { toReview } from "../model/reviewedLetters.component.js"

xBtn.style.display = "none";


export const learnLetterBtn = function () {
  
  let reviewedIndex;
  
  if(oldReviewedLetters === null || toReview == []){
    reviewedIndex = 0;
    
  } else {
    reviewedIndex = toReview.length

  }

  modal.style.display = "block";

  console.log(typeof gl, gl);
  return reviewedIndex
};
export let reviewedIndex = learnLetterBtn();

const produceLetterInModal = function(){
if (generatedLetter != undefined) {
  // produce letter in modal html
  mLetter.innerHTML = `<h2 class="baybayin-font">${generatedLetter.baybayin}</h2><h2>${generatedLetter.latin}</h2>`;
} else {
  mLetter.innerHTML = `<h2>All letters have been reviewed</h2>`;
}}

export const iterateByFour = function () {

  //iterate the reviewLetters up by 1
  reviewedIndex++;
  //if the user has not reviewed 4 letters do not allow them to close the popup modal
  if (reviewedIndex < 4) {
    xBtn.style.display = "none";
    console.log(reviewedIndex);
    
    learnLetterBtn();
    return reviewedIndex;
  } else {
    // When the user clicks on closeMocal (x), close the modal
    xBtn.style.display = "block";
    learnLetterBtn();
    return reviewedIndex;
  }
  // When the user clicks anywhere outside of the modal, close it
}

// exit the popUpModal
export const closeModal = function () {
  modal.style.display = "none";
};


