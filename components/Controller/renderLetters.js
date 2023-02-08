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


const buildAddLetter = function (letter) {
  return new Letter(letter);
};

export const callLetter = function (arr) {
  let l = [];
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
    k = buildAddLetter(k);
    l.push(k);
  }
return l;  
};


export const letters = callLetter(letterStringArray);


