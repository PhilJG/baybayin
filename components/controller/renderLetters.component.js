import {letterStringObject} from '../model/letters.component.js'

class Letter {
  constructor(key, value) {
    this.latin = key;
    this.baybayin = value;
    this.sequence = 0;
    this.reviewed = false;
    this.reviewDate = new Date();
  }
}

export const buildAddLetter = function (key, value) {
  
  return new Letter(key, value);
};

export const callLetter = function (obj, key, value) {
  
  let arr = [];
  for (const key in obj) {
    let k = key;
    // obj[key] retrieves the corresponding Babayin letter string for the current Latin letter represented by the key variable.
    k = buildAddLetter(key, obj[key]);
    arr.push(k);
  }
  
return arr;  
};

export const letters = callLetter(letterStringObject);


