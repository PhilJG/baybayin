"use strict"

const qType = ["txt", "img"];

const qChoice = randomSelect(qType)
const qCurrent = qType[qChoice];

console.log(qCurrent);



const buildAnswerBtn = function(){
  aArray.forEach(i => {
    var button = document.createElement("button");
    if(qCurrent === "txt" ){
      button.innerHTML = `<img src="imgs/${i}.svg" class="svg" ></img>`;
    } else if (qCurrent === "img"){ 
      button.innerText = i;
    }
    button.className = "answer__btn"
    button.addEventListener("click", function(){
      matchAnswer(i);
    })
    aList.appendChild(button)
  })
}
// //Generates question letter on click
    const generateQuestionLetter = function () {
      //Selects a random letter from the letters array
      randomLetters = randomSelect(letters);
      currentValue = letters[randomLetters];
      if(qCurrent === "img" ){
        qImg.innerHTML = `<img src="imgs/${currentValue}.svg" class="svg" height="100px"></img>`;
        console.log(`is img`);
        
      } else if (qCurrent === "txt") {
        qImg.innerHTML = `${currentValue}`
        console.log(`is txt`);
      }
        console.log(`current value: ${currentValue}`);
        aArray.push(`${currentValue}`);
        };
    //   //Generates answer buttons of all the letters
    //   const generateAnswer = function () {
//     shuffle(letters);
//     for (let i = 0; i < 3; i++) {
//       let x = letters[i];
//       if (x == currentValue ) {continue;}      
//       aArray.push(`${x}`)
      
//     }
//   };

  generateQuestionLetter();
  
  generateAnswer();
  
  buildAnswerBtn();
 
  const replaceAnswerBtn = function() {
    aArray = [];
    currentValue = letters[randomLetters];
    // aList.(aBtn);
    while(aList.hasChildNodes()){
      aList.removeChild(aList.firstChild);
    }
    generateAnswer()
    generateQuestionLetter()
    shuffle(aArray);
    buildAnswerBtn();
    
  
  }
qBtn.addEventListener("click", replaceAnswerBtn);

