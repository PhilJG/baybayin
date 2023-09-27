import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [questionFormat, setQuestionFormat] = useState(true);

  //Randomly selects from an array
  const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  //Sets the format format of the questions and ansers from baybayin(tiktik) & english(letter)
  function handleQuestionFormat() {
    const formatArray = [true, false];
    const format = randomSelect(formatArray);
    setQuestionFormat(formatArray[format]);
    console.log(questionFormat);
    return formatArray[format];
  }

  function handleAnswerList() {
    const updatedAnswerArray = [];
    for (let i = 0; i < 4; i++) {
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
      questionFormat == true ? data[index].tiktik : data[index].letter;
    setQuestion(selectedFormat);
    // listItems();
  }

  return (
    <>
      <h1>Baybayin</h1>

      <Button
        onQuestionFormat={handleQuestionFormat}
        onRandomQuestion={handleRandomQuestion}
        onAnswerList={handleAnswerList}
      />

      <Question question={question} />

      <AnswerList answerArray={answerArray} format={questionFormat} />
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

function Question({ question, format }) {
  return <div className="question-text">{question}</div>;
}

function AnswerList({ answerArray, format }) {
  return (
    <ul className="answer-list">
      {answerArray.map((a) => (
        <button className="answer-item" key={a.letter}>
          {(format = true ? a.letter : a.tiktik)}
        </button>
      ))}
    </ul>
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
