"use strict"

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const closeModal = document.getElementsByClassName("close");

const mLetter = document.querySelector(".mLetter")

const nBtn = document.querySelector(".nextBtn")

let generatedLetter
//Empty array for reviewed letters
reviewedLetters = [];
reviewedIndex = 0;
let r;

let oldReviewedLetters = JSON.parse(localStorage.getItem("reviewedLetters"));
//get localStorage of previous current score on refresh and turn it into a number
function getOldLetters() {
  if (oldReviewedLetters != null) {
      reviewedLetters = oldReviewedLetters
      console.log(`reviewedLetters = ${reviewedLetters.length}`);
      console.log(`oldReviewedLetters = ${oldReviewedLetters.length}`);
      
    reviewedIndex = oldReviewedLetters.length;
  } else {
    reviewedLetters = [];
    reviewedIndex = 0;

    span.style.display ="none"
  }
}

getOldLetters();

if(reviewedLetters.length > 4) {
  modal.style.display = "none";
} else {
  modal.style.display = "block";
}

// When the user clicks on the button, open the modal
modalBtn.addEventListener("click", function() {
  modal.style.display = "block";
})

// mLetter.innerHTML = `<img src="imgs/${letters[0]}.svg" class="svg" height="100px"></img>`;

//Produces letters to be reviewed
const generateModalLetter = function() {
   generatedLetter = letters[reviewedIndex].text
   generatedLetter = buildAddLetter(generatedLetter);
  //if generated letter has been reviewed and is within the reviewed array..
  console.log(generatedLetter);
  
  // let parsedLetter = JSON.parse(generatedLetter);
  if (reviewedLetters.includes(generatedLetter)) {    
    generatedLetter = letters[reviewedIndex].text
    console.log(`new generated letter ${generatedLetter.text}`);
    //if the letter has NOT been reviewed post on html and add to the array
  } else {
    // produce letter in modal html
    mLetter.innerHTML = `<img src="imgs/${generatedLetter.text}.svg" class="svg" height="100px"></img><h2>${generatedLetter.text}</h2>`;
    //then push this letter to reviewedletter array
    reviewedLetters.push(generatedLetter);
  }
  // increment i by 1
  reviewedIndex = reviewedIndex + 1;
  localStorage.setItem("reviewedLetters", JSON.stringify(reviewedLetters));
}

generateModalLetter();

// newReview();

// span.addEventListener("click", function() {
//   modal.style.display = "none";
  
// })

nBtn.addEventListener("click", function() {
  generateModalLetter()
  // if (reviewedIndex > 4){
  //   span.style.display = "block";
  //   // When the user clicks on <span> (x), close the modal

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
      ) 
  }
)
