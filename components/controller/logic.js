//Randomly selects from an array
const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  //Shuffles array
const shuffle = function(arr) {
    let currentIndex = arr.length,
      randomIndex;
  
    //While there remains elements to shuffle
    while (currentIndex != 0) {
      //Pick a remaining element
      randomIndex = randomSelect(arr);
      currentIndex--;
  
      //And swap it with the current element
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }
  
  //Add days to current date
  function addDays(numOfHours, date = new Date()) {
    date.setUTCDate(date.getDate() + numOfHours);
    return date;
  }



  export {shuffle, randomSelect}