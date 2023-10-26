// Import the function to be tested
import { generateModalLetter, lettersToReview, reviewedLetters } from './exampleCode';

describe('generateModalLetter', () => {

  // Unit test for generateModalLetter function. This test checks the output of the function and does not consider any external dependencies.
  it('should return a generated letter', () => {
    const result = generateModalLetter(0);
    expect(result).toBeDefined();
  });

  // Integration test for generateModalLetter function with lettersToReview and reviewedLetters arrays. This test checks how the function interacts with the arrays.
  it('should add the generated letter to lettersToReview and reviewedLetters arrays', () => {
    const initialLettersToReview = lettersToReview.length;
    const initialReviewedLetters = reviewedLetters.length;

    generateModalLetter(0);

    expect(lettersToReview.length).toBe(initialLettersToReview + 1);
    expect(reviewedLetters.length).toBe(initialReviewedLetters + 1);
  });

  // End-to-end test for generateModalLetter function with console.logs. hat tests whether the function correctly logs the generated letter and the reviewedLetters array to the console. This test checks how the function interacts with external dependencies, such as the console.
  it('should log the generated letter and reviewedLetters array', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    generateModalLetter(0);

    expect(consoleSpy).toHaveBeenCalledWith(lettersToReview);
    expect(consoleSpy).toHaveBeenCalledWith(reviewedLetters);
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(String));
  });

});