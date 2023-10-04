import { useState } from "react";
import "../App.css";
import data from "../assets/data.json";

import Button from "./Button";
import Question from "./Question";
// import AnswerList from "./AnswerList";
import Result from "./Result";

export default function App() {
  const [questionFormat, setQuestionFormat] = useState("tiktik");
  const [question, setQuestion] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [result, setResult] = useState(null);
  const [reviewedArray, setReviewedArray] = useState([]);
  const [newLetterList, setNewLetterList] = useState([]);
  const [close, setClose] = useState(false);

  // const [sequence, setSequence] = useState(question.sequence);

  //Randomly selects from an array
  const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  function handleAnswerList(question) {
    const updatedAnswerArray = [];
    for (let i = 0; i < 3; i++) {
      let index = randomSelect(newLetterList);
      const randomAnswer = newLetterList[index];
      randomAnswer["id"] = i;
      if (randomAnswer === question) {
        continue;
      }
      updatedAnswerArray.push(randomAnswer);
    }
    //push correct answer to array
    updatedAnswerArray.push(question);
    //Shuffle array
    shuffle(updatedAnswerArray);
    setAnswerArray(updatedAnswerArray);
  }

  function handleResult(q, a) {
    function addHours(date, hours) {
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      let dateFormat = date.toDateString();

      return dateFormat;
    }

    if (q.letter == null) {
      setResult();
    } else if (q.letter === a.letter) {
      setResult(true);
      q.sequence = q.sequence + 1;
      q.reviewDate = addHours(new Date(), 24);
    } else if (q.letter != a.letter) {
      setResult(false);
      q.sequence = 0;
      q.reviewDate = addHours(new Date(), 0);
    }
    q.reviewed = true;

    setReviewedArray((array) => [...array, q]);

    setTimeout(() => {
      handleNewQuestion(question);
    }, 1000);
  }

  function handleRandomQuestion() {
    let index = randomSelect(newLetterList);
    let q = newLetterList[index];
    if (q.reviewed === false || q.reveiwDate >= new Date()) {
      setQuestion(q);
    } else {
      console.log(q);
      handleRandomQuestion();
    }
    //delay the execution of handleAnswerList
    setTimeout(() => {
      handleAnswerList(q);
    }, 0);
  }

  // Function to toggle the question format
  const toggleQuestionFormat = () => {
    setQuestionFormat((prevFormat) =>
      prevFormat === "tiktik" ? "letter" : "tiktik"
    );
  };

  function handleNewQuestion(q) {
    toggleQuestionFormat();
    handleRandomQuestion();
    handleAnswerList(q);
    setResult(null);
  }

  return (
    <>
      {/* <h1>Baybayin</h1> */}
      <Modal
        className="popup-modal"
        reviewedArray={reviewedArray}
        newLetterList={newLetterList}
        setNewLetterList={setNewLetterList}
        close={close}
        setClose={setClose}
      />

      <h1>
        {question.sequence === undefined
          ? ""
          : `Sequence: ${question.sequence}`}
      </h1>
      <p>
        {question.reviewDate === undefined
          ? ""
          : `Review again on ${question.reviewDate}`}
      </p>

      <button onClick={() => (close == true ? setClose(false) : "")}>
        Learn New letter
      </button>

      <Button onNewQuestion={handleNewQuestion} question={question}>
        Review New letter
      </Button>

      <Question question={question} questionFormat={questionFormat} />

      {/* AnswerList component will only be rendered when the question object is defined. */}
      {question && (
        <AnswerList
          question={question}
          answerArray={answerArray}
          questionFormat={questionFormat}
          onResult={handleResult}
        />
      )}

      <Result result={result} question={question} />

      <ul className="review-list">
        {reviewedArray.map((item, index) => (
          <li
            key={index}
          >{`| ${item.tiktik} | ${item.letter} | ${item.reviewDate} |`}</li>
        ))}
      </ul>
    </>
  );
}

function Modal({ close, setClose, newLetterList, setNewLetterList }) {
  const [newLetter, setNewLetter] = useState("");

  function generateNewLetter() {
    let dataLength = newLetterList.length;
    setNewLetter(data[dataLength]);
    newLetterList.push(newLetter);

    console.log(newLetterList);
    return (
      <div>
        <span>newLetter.tiktik</span>
        <span>newLetter.letter</span>
      </div>
    );
  }

  return (
    <>
      {
        <div className={!close ? "modal-content" : "none"}>
          <span
            className="close"
            onClick={() => {
              setClose(true);
            }}
          >
            &times;{" "}
          </span>
          <div className="modal-question">{`${newLetter.tiktik} ${newLetter.letter}`}</div>
          <div className="mLetter">Click next to view your next letter</div>
          <button
            className="nextBtn"
            onClick={() => {
              generateNewLetter();
            }}
          >
            Next
          </button>
        </div>
      }
    </>
  );
}

function AnswerList({ answerArray, questionFormat, question, onResult }) {
  //Check if question has been rendered
  if (!question || !answerArray) {
    return null; // or return a loading indicator
  }
  return (
    <div className="answer-list">
      {answerArray.map((a, i) => (
        <button
          className="answer-item"
          key={i}
          onClick={() => onResult(question, a)}
        >
          {questionFormat === "tiktik" ? a.letter : a.tiktik}
        </button>
      ))}
    </div>
  );
}
