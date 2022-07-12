"use strict"

let aArray = [];
let aBtnKey;
let aBtnHTML;
let aBtn = document.getElementsByClassName("answer__btn");
let imgNode;

// let aBtnText = aBtn.textContent

  //Matches question with answer on click
  const matchAnswer = function (v) {
    if (currentValue == v) {
      //adds 1 point to current score if correct
      currentScore = currentScore + 1;
      //currentscore is entered into scoreboard
      scoreBoard.textContent = currentScore;
      // replaceAnswerBtn()  
      replaceAnswerBtn()      
      } else {
        //deducts 1 point to current score if correct
        currentScore = currentScore - 1;
        //currentscore is entered into scoreboard
        scoreBoard.textContent = currentScore;
        console.log(v);
      }
  
  let stringScore = new String(currentScore);
  //set currentScore to session storage and turn it into a string
  sessionStorage.setItem("currentScore", `${stringScore}`);
};

// Adds text content & eventlistner to all 4 answer buttons
const buildAnswerBtn = function(){
  aArray.forEach(i => {
    var button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", function(){
      matchAnswer(i);
    })
    aList.appendChild(button)
  })
}

currentValue = letters[randomLetters];

//Generates question letter on click
const generateQuestionLetter = function () {
  currentValue = letters[randomLetters];
    qImgNodes = qImg.childNodes[0];
    imgNode = document.createElement("div");
    //Selects a random letter from the letters array
    randomLetters = randomSelect(letters);
    imgNode.className = "question__box--letter";
    qImg.replaceChild(imgNode, qImgNodes);
    imgNode.innerHTML = `<img src="imgs/${currentValue}.svg" height="100px"></img>`;
    console.log(`current value: ${currentValue}`);
    aArray.push(`${currentValue}`);
    };
  
  
  //Generates answer buttons of all the letters
  const generateAnswer = function () {
    shuffle(letters);
    for (let i = 0; i < 3; i++) {
      let x = letters[i];
      if (x == currentValue ) {continue;}
      aArray.push(`${x}`)
    }
  };

  generateQuestionLetter();
  console.log(`current answer ${currentValue}`);
  
  generateAnswer();
  console.log(`current answer ${currentValue}`);
  buildAnswerBtn();
 
//file:///run/media/phil/WD%20external/Code-projects/W3Schools-2021-09-19/js/js_promise.html
// let loadPromise = new Promise(function(myResolve, myReject){
//   aArray.forEach(i => {
//     if (aArray[i] != undefined){
//       myResolve(`${i} loaded`);      
//     } else {
//       myReject(`node ${i} not loaded`);
//     }}
//     )
    
//   })
// loadPromise.then(
//   function(value) {console.log(value);},
//   function(error) {console.log(error);}
// );

  
  const replaceAnswerBtn = function() {
    aArray = [];
    currentValue = letters[randomLetters];
    // aList.(aBtn);
    while(aList.hasChildNodes()){
      aList.removeChild(aList.firstChild);
    }
    generateQuestionLetter()
    generateAnswer()
    shuffle(aArray);
    buildAnswerBtn();
    
  
  }

  
  
  //New letter generated
//Generate new icon on "new" btn click"
qBtn.addEventListener("click", replaceAnswerBtn);

let stringScore = new String(currentScore);

//set currentScore to session storage and turn it into a string
sessionStorage.setItem("currentScore", `${stringScore}`);
