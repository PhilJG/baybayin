import {letterStringArray} from '../Model/letters.js'

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

let l = [];

const buildAddLetter = function (letter) {
  return new Letter(letter);
};

const callLetter = function (arr, toArr) {
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
    k = buildAddLetter(k);
    toArr.push(k);
  }
return l;  
};


export const letters = callLetter(letterStringArray, l);


