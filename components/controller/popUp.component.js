
let generatedLetter
//Empty array for reviewed letters
reviewedLetters = [];
reviewedIndex = 0;
let r;

function getOldLetters() {
    if (oldReviewedLetters != null) {
        reviewedLetters = oldReviewedLetters
      reviewedIndex = oldReviewedLetters.length;
    } else {
      reviewedLetters = [];
      reviewedIndex = 0;
  
      span.style.display ="none"
    }
  }
  
  getOldLetters();

  //Produces letters to be reviewed
const generateModalLetter = function() {
    generatedLetter = letters[reviewedIndex].text
    generatedLetter = buildAddLetter(generatedLetter);
   //if generated letter has been reviewed and is within the reviewed array..
     if (reviewedLetters.includes(generatedLetter)) {    
     // generatedLetter = letters[reviewedIndex].text
     // console.log(`new generated letter ${generatedLetter.text}`);
   } else {
     //if the letter has NOT been reviewed post on html and add to the array
     // produce letter in modal html
     mLetter.innerHTML = `<img src="imgs/${generatedLetter.text}.svg" class="svg" height="100px"></img><h2>${generatedLetter.text}</h2>`;
     //then push this letter to reviewedletter array
     reviewedLetters.push(generatedLetter);
   }
   // increment i by 1
   reviewedIndex = reviewedIndex + 1;
 }