"use strict";

class Letter{
  constructor(text, sequence) {
    this.text = text;
    this.sequence = sequence;
  }
}

let letters = [];

let ba = new Letter("ba", 4);
let ka = new Letter("ka", 4);
let ga = new Letter("ga", 4);
let sa = new Letter("sa", 4);

letters.push(ba, ka, ga, sa);

// change sequence
ba.sequence = 1;


//letter objects
// const letters = [
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