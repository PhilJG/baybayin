import { currentValue } from "./generateCurrentValue.component.js";

let currentDate = new Date();

export const setReviewDate = function (cv) {
  let rd = new Date();

  function addDays(numOfHours, date = new Date()) {
    date.setUTCDate(date.getDate() + numOfHours);
    return date;
  }

  let result;

  const sequenceCheck = function (seq) {
    result = addDays(seq, rd);

    cv.reviewDate = result;

    return (currentValue.reviewDate = rd);
  };

  if ((cv.sequence = 0)) {
    sequenceCheck(1);
  } else if ((cv.sequence = 1)) {
    sequenceCheck(2);
  } else if ((cv.sequence = 2)) {
    sequenceCheck(3);
  } else if ((cv.sequence = 3)) {
    sequenceCheck(4);
  } else {
    console.error("if statement error");
  }

};

