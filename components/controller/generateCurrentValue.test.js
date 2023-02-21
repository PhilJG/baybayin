import { test, suite } from "uvu";
import * as assert from "uvu/assert";

import {letters} from "./renderLetters.component.js"

import {generateCurrentValue} from "./generateCurrentValue.component.js"

test("Is current value a string", () => {
    assert.instance(generateCurrentValue(letters), String);
  });

  test("Is current value a Object", () => {
    assert.instance(generateCurrentValue(letters), Object);
  });

  
//   test("Give back zero for .squence", () => {
//     assert.is(myLetter.sequence, 0);
//   });
  
//   test("Give  reviewed false", () => {
//     assert.is(myLetter.reviewed, false);
//   });
  
//   test("Is reviewDate a date?", () => {
//     assert.instance(myLetter.reviewDate, Date);
//   });
  
//   // callLetter
  
//   test("Give empty array", () => {
//     assert.equal(callLetter([]), []);
//   });
  
//   test("Gives an errror when not an array", () => {
//     assert.throws(() => callLetter("my way"));
//   });

test.run();