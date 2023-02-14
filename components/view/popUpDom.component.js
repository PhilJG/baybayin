// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const closeModal = document.getElementsByClassName("close");

const mLetter = document.querySelector(".mLetter")

const nBtn = document.querySelector(".nextBtn")

modal.style.display = 'none'

// When the user clicks on the button, open the modal
modalBtn.addEventListener("click", function() {
  modal.style.display = "block";
})

modal.style.display = 'none'

// When the user clicks on the button, open the modal
modalBtn.addEventListener("click", function() {
  modal.style.display = "block";
})

nBtn.addEventListener("click", function() {
    generateModalLetter()
    // if (reviewedIndex > 4){
    //   span.style.display = "block";
    //   // When the user clicks on <span> (x), close the modal
    // }
      // When the user clicks anywhere outside of the modal, close it
      window.addEventListener("click", function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        } 
        ) 
    }
  )