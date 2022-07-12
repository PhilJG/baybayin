"use strict";

//APP FLOW
//Letter is matched with button options available

//If selection is correct...
//1)User is notified correct
//2) New Letter is genereated
//3) Score is +1

//If Letter is  is not correct
//1) certain options are removed
//2)Core is -1

//letter objects
const letters = [
  "ba",
  // i: imgs/ba.svg

  "ga",
  // i: imgs/ga.svg

  "nga",
  // i: imgs/nga.svg

  "ka",
  // i: imgs/ka.svg

  "sa",
  // i: imgs/sa.svg

  "da_ra",
  // i: imgs/da_ra.svg

  "ha",
  // i: imgs/ha.svg

  "i_e",
  // i: imgs/i_e.svg

  "ma",
  // i: imgs/ma.svg

  "na",
  // i: imgs/na.svg

  "pa",
  // i: imgs/pa.svg

  "ta",
  // i: imgs/ta.svg

  "u_o",
  // i: imgs/u_o.svg

  "wa",
  // i: imgs/wa.svg

  "ya",
  // i: imgs/ya.svg
];

// const letters = [
//   ba,
//   ga,
//   nga,
//   ka,
//   sa,
//   da_ra,
//   ha,
//   i_e,
//   ma,
//   na,
//   pa,
//   ta,
//   u_o,
//   wa,
//   ya,
// ];

const qBox = document.querySelector(".question__box");
const qImg = document.querySelector(".question__box--img");
const qBtn = document.querySelector(".question__btn");


const aList = document.querySelector(".answer");
let aBtn = document.getElementsByClassName("answer__btn");
const scoreBoard = document.querySelector(".score__points--inc");
const toggleBtn = document.querySelector(".switch")

let aArray = [];


let aBtnKey, aBtnHTML ,imgNode, currentValue, qImgNodes, currentScore;

console.log(aBtn);

//Toggle dark mode
const toggleDark = function() {
  var element = document.body;
  qBtn.classList.toggle("dark-mode")
  // aBtn.forEach(i => {
  //   console.log(`for each`);
    
  //   // i.classList.toggle("dark-mode")
  // });
  element.classList.toggle("dark-mode");
  console.log('checked');
  
}

// toggleBtn.addEventListener('checked', toggleDark())


//get sessionStorage of previous current score on refresh and turn it into a number
function getScore() {
  if (sessionStorage.length > 0) {
    currentScore = ~~sessionStorage.getItem("currentScore");
  } else {
    currentScore = 0;
  }
}

getScore();

scoreBoard.textContent = currentScore;

//Randomly selects from an array
const randomSelect = function (arr) {
  return Math.round(Math.random() * arr.length);
};

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
  console.log(arr);
  
  return arr;
}

//Selects random index from letters array
let randomLetters = randomSelect(letters);


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
    button.className = "answer__btn"
    button.addEventListener("click", function(){
      matchAnswer(i);
    })
    aList.appendChild(button)
  })
}

currentValue = letters[randomLetters];

//Generates question letter on click
const generateQuestionLetter = function () {
  //Selects a random letter from the letters array
  randomLetters = randomSelect(letters);
  currentValue = letters[randomLetters];
    // qImgNodes = qImg.childNodes[0];
    // console.log(qImgNodes);
    // imgNode = document.createElement("div");
    // imgNode.className = "question__box--letter";
    // qImg.replaceChild(imgNode, qImgNodes);
    qImg.innerHTML = `<img src="imgs/${currentValue}.svg" height="100px"></img>`;
    console.log(`current value: ${currentValue}`);
    aArray.push(`${currentValue}`);
    };
  

  //Generates answer buttons of all the letters
  const generateAnswer = function () {
    shuffle(letters);
    for (let i = 0; i < 3; i++) {
      let x = letters[i];
      if (x == currentValue ) {continue;}
      console.log(x);
      
      aArray.push(`${x}`)
      
    }
  };

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

    //New letter generated
//Generate new icon on "new" btn click"
qBtn.addEventListener("click", replaceAnswerBtn);

let stringScore = new String(currentScore);

//set currentScore to session storage and turn it into a string
sessionStorage.setItem("currentScore", `${stringScore}`);
