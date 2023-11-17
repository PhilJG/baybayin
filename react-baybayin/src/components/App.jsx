import { useState } from "react";
import "../App.css";
import data from "../assets/data.json";

import { ReactSVG } from "react-svg";

import Button from "./Button";
import Question from "./Question";
import AnswerList from "./AnswerList";
import Result from "./Result";
import Modal from "./Modal";

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
    console.log(`question ${question.letter}`);
    for (let i = 0; i < 3; i++) {
      let index = randomSelect(newLetterList);
      const randomAnswer = newLetterList[index];
      console.log(`random answer ${randomAnswer.letter}`);
      randomAnswer["id"] = i;
      if (
        randomAnswer === question ||
        updatedAnswerArray.includes(randomAnswer)
      ) {
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

    // Check if all items have been reviewed or their review date is less than current date
    const allReviewed = newLetterList.every(
      (item) => item.reviewed === true || item.reviewDate < new Date()
    );

    if (allReviewed) {
      alert("No more items to review!");
      return;
    }

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
      <div className="quiz-box">
        <h1>
          {question.sequence === undefined
            ? " "
            : `Sequence: ${question.sequence}`}
        </h1>
        <p>
          {question.reviewDate == undefined
            ? " "
            : `Review again on ${question.reviewDate}`}
        </p>

        <Button onNewQuestion={handleNewQuestion} question={question}>
          Review
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
        <button onClick={() => (close == true ? setClose(false) : "")}>
          Learn New letter
        </button>

        <Result result={result} question={question} />

        <ul className="review-list">
          {reviewedArray.map((item, index) => (
            <li
              key={index}
            >{` ${item.id} | ${item.tiktik} | ${item.letter} | ${item.reviewDate} |`}</li>
          ))}
        </ul>
      </div>
      <SvgComponent />
    </>
  );
}

const SvgComponent = () => {
  return (
    <div>
      {data.map((item, index) => (
        <ReactSVG key={index} src={`${item.tiktik}`} alt={item.letter} />
      ))}
    </div>
  );
};

// function AnswerList({ answerArray, questionFormat, question, onResult }) {
//   //Check if question has been rendered
//   if (!question || !answerArray) {
//     return null; // or return a loading indicator
//   }
//   return (
//     <div className="answer-list">
//       {answerArray.map((a, i) => (
//         <button
//           className="answer-item"
//           key={i}
//           onClick={() => onResult(question, a)}
//         >
//           {questionFormat === "tiktik" ? a.letter : a.tiktik}
//         </button>
//       ))}
//     </div>
//   );
// }
