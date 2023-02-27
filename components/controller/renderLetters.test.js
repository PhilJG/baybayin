// tests/demo.js
import { test, suite } from "uvu";
import * as assert from "uvu/assert";
import { letters, callLetter, buildAddLetter } from "./renderLetters.component.js";
import {letterStringArray} from '../model/letters.component.js'

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

test('buildAddLetter returns a new Letter object with the correct properties', () => {
  const letter = buildAddLetter('A');
  expect(letter).toHaveProperty('text', 'A');
  expect(letter).toHaveProperty('sequence', 0);
  expect(letter).toHaveProperty('reviewed', false);
});

test('callLetter returns an array of Letter objects based on the input array', () => {
  const input = ['A', 'B', 'C'];
  const letters = callLetter(input);
  expect(Array.isArray(letters)).toBe(true);
  expect(letters.length).toBe(input.length);
  expect(letters[0]).toBeInstanceOf(Letter);
});

test('callLetter throws an error if input is not an array', () => {
  expect(() => callLetter('not an array')).toThrow('error did not call a letter');
});

test('letters is an array of Letter objects based on letterStringArray', () => {
  expect(Array.isArray(letters)).toBe(true);
  expect(letters.length).toBe(letterStringArray.length);
  expect(letters[0]).toBeInstanceOf(Letter);
});

test.run();
