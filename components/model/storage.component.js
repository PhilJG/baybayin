//get sessionStorage of previous current score on refresh and turn it into a number
function getScore() {
    if (localStorage.length > 0) {
      currentScore = ~~localStorage.getItem("currentScore");
    } else {
      currentScore = 0;
    }
  }

   //set currentScore to session storage and turn it into a string
   localStorage.setItem("currentScore", `${stringScore}`);
   localStorage.setItem("reviewedLetters", JSON.stringify(reviewedLetters));