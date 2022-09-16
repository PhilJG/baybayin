"use strict";

class Letter{
  constructor(text, sequence) {
    this.text = text;
    this.sequence = 0;
  }
}

let letters = [];

let ba = new Letter("ba");
let ka = new Letter("ka");
let ga = new Letter("ga");
let sa = new Letter("sa");
let ma = new Letter("ma");
let nga = new Letter("nga");
let ha = new Letter("ha");

// const buildAddLetter = function(letter) {
//   return new Letter(letter);
// }

letters.push(ba, ka, ga, sa, ma);


// const letterStringArray = [
//   "ba",
//   "ga",
//   "nga",
//   "ka",
//   "sa",
//   "ha",
//   "ma",
//   "na",
//   "wa",
//   "ta",
//   "pa",
//   "ya",
//   "bi",
//   "bu",
//   "be",
//   "b",
//   "g",
//   "gi",
//   "gu",
//   "go",
//   "ge",
//   "k",
//   "ku",
//   "ki",
//   "ke",
//   "h",
//   "he",
//   "hi",
//   "hu",
//   "ho",
//   "m",
//   "me",
//   "mi",
//   "mu",
//   "mo",
//   "n",
//   "ne",
//   "ni",
//   "nu",
//   "no",
//   "nge",
//   "ngi",
//   "ngo",
//   "ngu",
//   "ng",
//   "p",
//   "pe",
//   "pi",
//   "pu",
//   "po",
//   "t",
//   "te",
//   "ti",
//   "to",
//   "tu",
//   "w",
//   "we",
//   "wi",
//   "wu",
//   "wo",
//   "y",
//   "ye",
//   "yi",
//   "yu",
//   "yo",
//   "da_ra",
//   "i_e",
//   "u_o",
//   "a"
// ];