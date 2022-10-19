"use strict";

let ba,
  ga,
  nga,
  ka,
  sa,
  ha,
  ma,
  na,
  wa,
  ta,
  pa,
  ya,
  bi,
  bu,
  be,
  b,
  g,
  gi,
  gu,
  go,
  ge,
  k,
  ku,
  ki,
  ke,
  h,
  he,
  hi,
  hu,
  ho,
  m,
  me,
  mi,
  mu,
  mo,
  n,
  ne,
  ni,
  nu,
  no,
  nge,
  ngi,
  ngo,
  ngu,
  ng,
  p,
  pe,
  pi,
  pu,
  po,
  t,
  te,
  ti,
  to,
  tu,
  w,
  we,
  wi,
  wu,
  wo,
  y,
  ye,
  yi,
  yu,
  yo,
  da_ra,
  i_e,
  u_o,
  a

const letterStringArray = [
  "ba",
  "ga",
  "nga",
  "ka",
  "sa",
  "ha",
  "ma",
  "na",
  "wa",
  "ta",
  "pa",
  "ya",
  "bi",
  "gi",
  "bu",
  "be",
  "b",
  "g",
  "gu",
  "go",
  "ge",
  "k",
  "ku",
  "ki",
  "ke",
  "h",
  "he",
  "hi",
  "hu",
  "ho",
  "m",
  "me",
  "mi",
  "mu",
  "mo",
  "n",
  "ne",
  "ni",
  "nu",
  "no",
  "nge",
  "ngi",
  "ngo",
  "ngu",
  "ng",
  "p",
  "pe",
  "pi",
  "pu",
  "po",
  "t",
  "te",
  "ti",
  "to",
  "tu",
  "w",
  "we",
  "wi",
  "wu",
  "wo",
  "y",
  "ye",
  "yi",
  "yu",
  "yo",
  "da_ra",
  "i_e",
  "u_o",
  "a"
];

let reviewedLetters;
let reviewedIndex;

class Letter{
  constructor(text, sequence) {
    this.text = text;
    this.sequence = 0;
    this.reviewed = false; 
    this.reviewDate = new Date();

    //review time 
    //if review == true && sequence == 0;
    // if(this.reviewed == true){
    //   switch(sequence){
    //     case 0:
          
    //   }
    // }
    //save d&t (date & time)
    //switch statement
    //while current date & time < d&t + 24hrs then reviewed = true
    // if current date & time > d&t + 24hrs then reviewed = false
      //if reviewed = true then don't generate as question letter
      //if reviewed = false then generate as question letter
  }
}

let letters = [];

// let ba = new Letter("ba");
// let ka = new Letter("ka");
// let ga = new Letter("ga");
// let sa = new Letter("sa");
// let ma = new Letter("ma");
// let nga = new Letter("nga");
// let ha = new Letter("ha");

// letters.push(ba, ka, ga, sa, ma);

const buildAddLetter = function(letter) {

  return new Letter(letter);
}


const callLetter = function(arr, toArr){
  for(let i = 0; i < arr.length; i++){
    let k = arr[i]
    k = buildAddLetter(k);
    toArr.push(k)
  }
}


callLetter(letterStringArray, letters);

// const letterStringArray = [
  // ba,
  // ga,
  // nga,
  // ka,
  // sa,
  // ha,
  // ma,
  // na,
  // wa,
  // ta,
  // pa,
  // ya,
  // bi,
  // bu,
  // be,
  // b,
  // g,
  // gi,
  // gu,
  // go,
  // ge,
  // k,
  // ku,
  // ki,
  // ke,
  // h,
  // he,
  // hi,
  // hu,
  // ho,
  // m,
  // me,
  // mi,
  // mu,
  // mo,
  // n,
  // ne,
  // ni,
  // nu,
  // no,
  // nge,
  // ngi,
  // ngo,
  // ngu,
  // ng,
  // p,
  // pe,
  // pi,
  // pu,
  // po,
  // t,
  // te,
  // ti,
  // to,
  // tu,
  // w,
  // we,
  // wi,
  // wu,
  // wo,
  // y,
  // ye,
  // yi,
  // yu,
  // yo,
  // da_ra,
  // i_e,
  // u_o,
  // a
// ];


