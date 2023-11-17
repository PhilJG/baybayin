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

// Get the modal
const modal = document.querySelector(".modal");
// Get the button that opens the modal
const lBtn = document.querySelector("#learnBtn");
// Get the <span> element that closes the modal
// const close = document.querySelector("close")[0];
const xBtn = document.querySelector(".close");
const mLetter = document.querySelector(".mLetter");
const nBtn = document.querySelector(".nextBtn");

const mBtn = document.querySelector("#myBtn");

export {
  qBox,
  qImg,
  qSeq,
  qBtn,
  svgImg,
  aList,
  aBtn,
  scoreBoard,
  scorePoints,
  toggleBtn,
  mBtn,
  modal,
  lBtn,
  xBtn,
  mLetter,
  nBtn
};
