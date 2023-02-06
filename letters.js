"use strict";

//http://www.personal.psu.edu/ejp10/symbolcodes/bylanguage/tagalogchart.html

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
  "a",
];

let reviewedLetters;
let reviewedIndex;

class Letter {
  constructor(text) {
    this.text = text;
    this.sequence = 0;
    this.reviewed = false;
    this.reviewDate = new Date();
  }
}

let letters = [];

const buildAddLetter = function (letter) {
  return new Letter(letter);
};

const callLetter = function (arr, toArr) {
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
    k = buildAddLetter(k);
    toArr.push(k);
  }
}; 

callLetter(letterStringArray, letters);
