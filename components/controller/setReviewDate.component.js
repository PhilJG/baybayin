function addDays(numOfDays, date) {
 
  console.log(`numOfDays ${numOfDays}`)
  console.log(`date ${date}`);
  
  //current date is set to UTC that date is added by the number of Days specified
  date.setUTCDate(date.getDate() + numOfDays);
  return date;
}

export const setReviewDate = function (cv) {
  console.log(`Before ${cv.reviewDate}`);

  let rd = new Date();

  // calculate the number of days to add to the current date based on sequence
  const daysToAdd = cv.sequence

    // set the review date by adding the number of days to the current date
    cv.reviewDate = addDays(daysToAdd, rd);

  console.log(`After ${cv.reviewDate}`);
  return cv
};
