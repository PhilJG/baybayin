import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [questionFormat, setQuestionFormat] = useState("tiktik");

  //Randomly selects from an array
  const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  //Sets the format format of the questions and ansers from baybayin(tiktik) & english(letter)
  // function handleQuestionFormat() {
  //   const formatArray = ["tiktik", "letter"];
  //   const format = randomSelect(formatArray);
  //   setQuestionFormat(formatArray[format]);
  //   console.log(questionFormat);
  //   return formatArray[format];
  // }

  function handleAnswerList() {
    const updatedAnswerArray = [];
    for (let i = 0; i < 3; i++) {
      let index = randomSelect(data);
      const randomAnswer = data[index];
      randomAnswer["id"] = i;
      updatedAnswerArray.push(randomAnswer);
    }
    setAnswerArray(updatedAnswerArray);
  }

  function handleRandomQuestion() {
    let index = randomSelect(data);
    const selectedFormat =
      questionFormat == "tiktik" ? data[index].letter : data[index].tiktik;
    setQuestion(selectedFormat);
  }

  // Function to toggle the question format
  const toggleQuestionFormat = () => {
    setQuestionFormat((prevFormat) =>
      prevFormat === "tiktik" ? "letter" : "tiktik"
    );
  };

  return (
    <>
      <h1>Baybayin</h1>

      <div>
        <h1>{questionFormat}</h1>
        {/* <AnswerList answerArray={answerArray} questionFormat={questionFormat} />
        <button onClick={toggleQuestionFormat}>Toggle Format</button> */}
      </div>

      <Button
        onQuestionFormat={toggleQuestionFormat}
        onRandomQuestion={handleRandomQuestion}
        onAnswerList={handleAnswerList}
      />

      <Question question={question} />

      <AnswerList answerArray={answerArray} questionFormat={questionFormat} />
    </>
  );
}

function Button({ onQuestionFormat, onRandomQuestion, onAnswerList }) {
  return (
    <button
      className="new-letter__btn"
      onClick={() => {
        onQuestionFormat();
        onRandomQuestion();
        onAnswerList();
      }}
    >
      Learn New Letters
    </button>
  );
}

function Question({ question }) {
  return <div className="question-text">{question}</div>;
}

function AnswerList({ answerArray, questionFormat }) {
  return (
    <div className="answer-list">
      {answerArray.map((a) => (
        <button className="answer-item" key={a.letter}>
          {questionFormat === "tiktik" ? a.letter : a.tiktik}
        </button>
      ))}
    </div>
  );
}
// function Letters() {
//   return (
//     <>
//       {letters.map((el) => {
//         <p>{el}</p>;
//       })}
//     </>
//   );
// }
