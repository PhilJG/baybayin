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
  console.log(key, value);
  
  return new Letter(key, value);
};

export const callLetter = function (obj, key, value) {
  console.log(typeof obj);
  
  // const isObject = obj => {
  //   return Object.prototype.toString.call(obj) === '[object Object]'
  // }
  // if (!Object.isObject(obj)){
  //   throw "error is not an object"
  // } 
  let arr = [];
  for (const key in obj) {
    let k = key;
    // obj[key] retrieves the corresponding Babayin letter string for the current Latin letter represented by the key variable.
    k = buildAddLetter(key, obj[key]);
    arr.push(k);
  }
  console.log(arr);
  
return arr;  
};

export const letters = callLetter(letterStringObject);


