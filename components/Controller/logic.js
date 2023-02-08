//Randomly selects from an array
const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  //Shuffles array
function shuffle(arr) {
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
  

  export {shuffle, randomSelect}