// tests/demo.js
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { letters, callLetter } from './renderLetters.js';

test('Give empty array', () => {
  assert.equal(callLetter([]), []);
  
});

test.run();
