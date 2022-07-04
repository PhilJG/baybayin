"use strict"

let aArray = [];
let aBtnKey;
let aBtnHTML;
let aBtn = document.getElementsByClassName("answer__btn");

// let aBtnText = aBtn.textContent

  //Matches question with answer on click
  const matchAnswer = function (v) {
     
    console.log(`correct: ${currentValue}`);
    console.log(`clicked: ${v}`);
    
    if (currentValue == v) {
      //adds 1 point to current score if correct
      currentScore = currentScore + 1;
      //currentscore is entered into scoreboard
      scoreBoard.textContent = currentScore;
      // replaceAnswerBtn()  
      generateQuestionLetter();
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

const a = aArray.entries();

// Adds text content & eventlistner to all 4 answer buttons
const buildAnswerBtn = function(){
  
  for (let i = 0; i < aArray.length; i++) {
    let node = aList.children[i];
    console.log(node);
    node.textContent = `${aArray[i]}`
    node[i].addEventListener('click', matchAnswer(`${aArray[i]}`));

    
    // for(let x of a) {
    //   aBtnKey = x[0]
    //   aBtnHTML = x[1]
    //   let aBtnText = aBtnHTML;  
    //   console.log(aBtn[aBtnKey]);
    //   aBtn[aBtnKey].innerHTML = `${aBtnHTML}`;
    //   console.log(aBtnHTML);
    // let aEvent = document.createAttribute(`onclick`)
    // aBtn[i].setAttribute(aEvent, matchAnswer(`"${aArray[i]}"`))
  }   
}

currentValue = letters[randomLetters];

//Generates question letter on click
const generateQuestionLetter = function () {
    qImgNodes = qImg.childNodes[0];
    n = document.createElement("div");
    //Selects a random letter from the letters array
    randomLetters = randomSelect(letters);
    n.className = "question__box--letter";
    qImg.replaceChild(n, qImgNodes);
    n.innerHTML = `<img src="imgs/${currentValue}.svg" height="100px"></img>`;
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
  
  generateAnswer();

  buildAnswerBtn();
  
  const replaceAnswerBtn = function() {
    aArray.splice([1, 2, 3, 4]);
    // aList.(aBtn);
    generateAnswer()
    generateQuestionLetter();
    buildAnswerBtn();
    console.log(aArray);
    // buildAnswerBtn();
  }
  
  //New letter generated
//Generate new icon on "new" btn click"
qBtn.addEventListener("click", generateQuestionLetter);

let stringScore = new String(currentScore);

//set currentScore to session storage and turn it into a string
sessionStorage.setItem("currentScore", `${stringScore}`);
