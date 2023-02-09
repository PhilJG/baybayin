span.addEventListener("click", function () {
    replaceAnswerBtn();
    modal.style.display = "none";
  });
  
  nBtn.addEventListener("click", function () {
    // generateModalLetter()
    if (reviewedIndex > 4) {
      span.style.display = "block";
      // When the user clicks on <span> (x), close the modal
      // When the user clicks anywhere outside of the modal, close it
      window.addEventListener("click", function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    }
  });

  //New letter generated
//Generate new icon on "new" btn click"
qBtn.addEventListener("click", replaceAnswerBtn);

let stringScore = new String(currentScore);
