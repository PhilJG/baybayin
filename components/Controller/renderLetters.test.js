// tests/demo.js
import { test, suite } from "uvu";
import * as assert from "uvu/assert";
import { letters, callLetter, buildAddLetter } from "./renderLetters.js";

const Render = suite("Render");

// buildLetter
const myLetter = buildAddLetter("string");

test("Give back a string for .text", () => {
  assert.is(myLetter.text, "string");
});

test("Give back zero for .squence", () => {
  assert.is(myLetter.sequence, 0);
});

test("Give  reviewed false", () => {
  assert.is(myLetter.reviewed, false);
});

test("Is reviewDate a date?", () => {
  assert.instance(myLetter.reviewDate, Date);
});

// callLetter

test("Give empty array", () => {
  assert.equal(callLetter([]), []);
});

test("Gives an errror when not an array", () => {
  assert.throws(() => callLetter("my way"));
});

test.run();
