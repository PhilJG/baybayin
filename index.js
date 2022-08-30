"use strict"

const qBox = document.querySelector(".question__box");
const qImg = document.querySelector(".question__box--img");
const qBtn = document.querySelector(".question__btn");
const svgImg = document.getElementsByTagName("svg")

const aList = document.querySelector(".answer");
let aBtn = document.getElementsByClassName("answer__btn");
const scoreBoard = document.querySelector(".score__points")
const scorePoints = document.querySelector(".score__points--inc");
const toggleBtn = document.querySelector(".switch")

const mBtn = document.querySelector("#myBtn");

const allBtns = [mBtn, aBtn, qBtn];

let aArray = [];

let aBtnKey, aBtnHTML ,imgNode, currentValue, qImgNodes, currentScore;

//Toggle dark mode
const toggleDark = function() {
  var element = document.body;
  qBtn.classList.toggle("dark-mode");
  mBtn.classList.toggle("dark-mode");
  

  // svgImg.classList.toggle("dark-mode");
  
  // aList.children.forEach(i => {
  //   console.log(aBtn[i]);
  //   console.log(`for each`);
    
  //   i.classList.toggle("dark-mode")
  // });
  element.classList.toggle("dark-mode");
  console.log('checked');
}

// toggleBtn.addEventListener('checked', toggleDark())


//get sessionStorage of previous current score on refresh and turn it into a number
function getScore() {
  if (localStorage.length > 0) {
    currentScore = ~~localStorage.getItem("currentScore");
  } else {
    currentScore = 0;
  }
}

getScore();

scorePoints.textContent = currentScore;

//Randomly selects from an array
const randomSelect = function (arr) {
  return Math.round(Math.random() * (arr.length-1));
};

const qType = ["txt", "img"];

let qChoice = randomSelect(qType)
let qCurrent = qType[qChoice];

//Shuffles array
function shuffle(arr) {
  let currentIndex = arr.length,
    randomIndex;

  //While there remains elements to shuffle
  while (currentIndex != 0) {
    //Pick a remaining element
    randomIndex = randomSelect(arr);
    currentIndex--;

    //And swap it with the current element
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }  
  return arr;
}

//Selects random index from letters array
let randomLetters = randomSelect(letters);


//Matches question with answer on click
const matchAnswer = function (v) {
  if (currentValue == v) {
    //adds 1 point to current score if correct
    currentScore = currentScore + 1;
    //currentscore is entered into scorePoints
    scorePoints.textContent = currentScore;
    scoreBoard.classList.add("correct")
    setTimeout(function(){ 
    replaceAnswerBtn()      
    }, 1000);
    } else {
      //deducts 1 point to current score if correct
      currentScore = currentScore - 1;
      //currentscore is entered into scorePoints
      scorePoints.textContent = currentScore;
      console.log(v);
      scoreBoard.classList.add("incorrect")
      setTimeout(function(){ 
        scoreBoard.classList.remove()     
        }, 1000);
    }

let stringScore = new String(currentScore);
//set currentScore to session storage and turn it into a string
localStorage.setItem("currentScore", `${stringScore}`);
};

// Adds text content & eventlistner to all 4 answer buttons
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

currentValue = letters[randomLetters];

// //Generates question letter on click
const generateQuestionLetter = function () {
  //Selects a random letter from the letters array
  randomLetters = randomSelect(letters);
  currentValue = letters[randomLetters].text;
  if(qCurrent === "img" ){
    qImg.innerHTML = `<img src="imgs/${currentValue}.svg" class="svg" height="100px">`;
  } else if (qCurrent === "txt") {
    qImg.innerHTML = `${currentValue}`
  }
    console.log(`current value: ${currentValue}`);
    aArray.push(`${currentValue}`);
    };

  // let shuffledLetters = shuffle(letters.map((shuffle(letters))));

  //Generates answer buttons of all the letters
  const generateAnswer = function () {
    shuffle(letters);
    for (let i = 0; i < 3; i++) {
      let x = letters[i].text;
      if (x == currentValue ) {continue;}      
      aArray.push(`${x}`)
    }
  };

  generateQuestionLetter();
  
  generateAnswer();
  
  buildAnswerBtn();
 
  const replaceAnswerBtn = function() {
    aArray = [];
    currentValue = letters[randomLetters];
     qChoice = randomSelect(qType)
     qCurrent = qType[qChoice];
    while(aList.hasChildNodes()){
      aList.removeChild(aList.firstChild);
    }
    scoreBoard.classList.remove("incorrect", "correct")
    generateAnswer()
    generateQuestionLetter()
    shuffle(aArray);
    buildAnswerBtn();
  }

//     //New letter generated
// //Generate new icon on "new" btn click"
qBtn.addEventListener("click", replaceAnswerBtn);

let stringScore = new String(currentScore);

