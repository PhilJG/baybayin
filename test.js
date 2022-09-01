"use strict"
// //Matches question with answer on click
// const matchAnswer = function (v) {
//     if (currentValue == v) {
//       //adds 1 point to current score if correct
//       currentScore = currentScore + 1;
//       //currentscore is entered into scorePoints
//       scorePoints.textContent = currentScore;
//       scoreBoard.classList.add("correct")
//       setTimeout(function(){ 
//       replaceAnswerBtn()      
//       }, 1000);
//       } else {
//         //deducts 1 point to current score if correct
//         currentScore = currentScore - 1;
//         //currentscore is entered into scorePoints
//         scorePoints.textContent = currentScore;
//         console.log(v);
//         scoreBoard.classList.add("incorrect")
//         setTimeout(function(){ 
//           scoreBoard.classList.remove()     
//           }, 1000);
//       }
  
//   let stringScore = new String(currentScore);
//   //set currentScore to session storage and turn it into a string
//   localStorage.setItem("currentScore", `${stringScore}`);
//   };
  
//   // Adds text content & eventlistner to all 4 answer buttons
//   const buildAnswerBtn = function(){
//     aArray.forEach(i => {
//       var button = document.createElement("button");
//       if(qCurrent === "txt" ){
//         button.innerHTML = `<img src="imgs/${i}.svg" class="svg" ></img>`;
//       } else if (qCurrent === "img"){ 
//         button.innerText = i;
//       }
//       button.className = "answer__btn"
//       button.addEventListener("click", function(){
//         matchAnswer(i);
//       })
//       aList.appendChild(button)
//     })
//   }
  
//   currentValue = letters[randomLetters];
  
//   // //Generates question letter on click
//   const generateQuestionLetter = function () {
//     //Selects a random letter from the letters array
//     randomLetters = randomSelect(letters);
//     currentValue = letters[randomLetters].text;
//     if(qCurrent === "img" ){
//       qImg.innerHTML = `<img src="imgs/${currentValue}.svg" class="svg" height="100px">`;
//     } else if (qCurrent === "txt") {
//       qImg.innerHTML = `${currentValue}`
//     }
//       console.log(`current value: ${currentValue}`);
//       aArray.push(`${currentValue}`);
//       };