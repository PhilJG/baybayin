"use strict"

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close")[0];

const closeModal = document.getElementsByClassName("close");

const mLetter = document.querySelector(".mLetter")

const nBtn = document.querySelector(".nextBtn")

let generatedLetter;
//Empty array for reviewed letters
let reviewedLetters = []
let reviewedIndex;

// When the user clicks on the button, open the modal
modalBtn.addEventListener("click", function() {
  modal.style.display = "block";

})

// mLetter.innerHTML = `<img src="imgs/${letters[1]}.svg" class="svg" height="100px"></img>`;

//Produces letters to be reviewed
const generateModalLetter = function() {
    for(let i = 0; i < letters.length; i++){
   generatedLetter = letters[i].text
   if(reviewedLetters.includes(generatedLetter)){
    console.log(`${generatedLetter} skipped `);
   } else {
    // produce letter in modal html
    mLetter.innerHTML = `<img src="imgs/${generatedLetter}.svg" class="svg" height="100px"></img><h2>${generatedLetter}</h2>`;
    //then push this letter to reviewedletter array
    reviewedLetters.push(generatedLetter);
    
    }
  // increment i by 1
  reviewedIndex = reviewedIndex + 1;
  console.log(` reviewed: ${reviewedLetters}`);
  localStorage.setItem("reviewedLetters", JSON.stringify(reviewedLetters));}
}

generateModalLetter();

nBtn.addEventListener("click", function() {
  generateModalLetter()
    close.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    close.addEventListener("click", function() {
      modal.style.display = "none";
    })
})
    // When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }); 
