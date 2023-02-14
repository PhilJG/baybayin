const qBox = document.querySelector("#question__box");
const qImg = document.querySelector("#question__box--img");
const qSeq = document.querySelector("#question__box--sequence");
const qBtn = document.querySelector("#question__btn");
const svgImg = document.getElementsByTagName("svg");

const aList = document.querySelector("#answer");
const aBtn = document.getElementsByClassName("answer__btn");
const scoreBoard = document.querySelector("#score__points");
const scorePoints = document.querySelector("#score__points--inc");
const toggleBtn = document.querySelector("#switch");

const mBtn = document.querySelector("#myBtn");

const allBtns = [mBtn, aBtn, qBtn];

 export {qBox,
  qImg,
  qSeq,
  qBtn,
  svgImg,
  aList,
  aBtn,
  scoreBoard,
  scorePoints,
  toggleBtn,
  mBtn}


