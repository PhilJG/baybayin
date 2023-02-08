import {currentValue} from
if (currentValue != undefined) {
    if (qCurrent === "img") {
      qImg.innerHTML = `<img src="imgs/${currentValue.text}.svg" class="svg" height="100px">`;
    } else if (qCurrent === "txt") {
      qImg.innerHTML = `${currentValue.text}`;
    }
    qSeq.innerHTML = currentValue.sequence;
    aArray.push(currentValue.text);
  } else {
    qImg.innerHTML =
      "All the letters have been reviewed for today. Try learning some new ones! ";
  }