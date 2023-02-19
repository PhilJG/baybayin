import {letterStringArray} from '../model/letters.component.js'

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

export const buildAddLetter = function (letter) {
  return new Letter(letter);
};

export const callLetter = function (arr) {
  if (!Array.isArray(arr)){
    throw "error did not call a letter"
  } 
  let l = [];
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
    k = buildAddLetter(k);
    l.push(k);
  }
return l;  
};


export const letters = callLetter(letterStringArray);


