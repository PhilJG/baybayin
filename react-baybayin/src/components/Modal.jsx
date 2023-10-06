import { useState } from "react";
import data from "../assets/data.json";

export default function Modal({ close, setClose, newLetterList }) {
  const [newLetter, setNewLetter] = useState("");

  function generateNewLetter() {
    let dataLength = newLetterList.length;
    setNewLetter(data[dataLength]);
    newLetterList.push(newLetter);
  }

  return (
    <>
      {
        <div className={!close ? "modal" : "none"}>
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                setClose(true);
              }}
            >
              &times;{" "}
            </span>
            <div className="modal-question">
              <span className="modal-question--tiktik">
                {newLetter.tiktik === undefined ? " " : newLetter.tiktik}
              </span>
              <br />
              <span className="modal-question--letter">
                {newLetter.letter === undefined ? " " : newLetter.letter}
              </span>
            </div>
            <div>{`${newLetterList.length} reviewed`}</div>
            <button
              className="nextBtn"
              onClick={() => {
                generateNewLetter();
              }}
            >
              Next
            </button>
          </div>
        </div>
      }
    </>
  );
}
