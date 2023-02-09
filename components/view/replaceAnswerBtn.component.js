const replaceAnswerBtn = function () {
    aArray = [];
    currentValue = reviewedLetters[randomLetters];
    qChoice = randomSelect(qType);
    qCurrent = qType[qChoice];
    while (aList.hasChildNodes()) {
      aList.removeChild(aList.firstChild);
    }
    scoreBoard.classList.remove("incorrect", "correct");
    generateQuestionLetter();
    generateAnswer();
    shuffle(aArray);
    buildAnswerBtn();
  };