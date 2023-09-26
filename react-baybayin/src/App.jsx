import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answerArray, setAnswerArray] = useState([]);

  //Randomly selects from an array
  const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  function listItems() {
    const updatedAnswerArray = [];
    for (let i = 0; i < 4; i++) {
      let index = randomSelect(data);
      console.log("index " + index);
      const randomAnswer = data[index];
      randomAnswer["id"] = i;
      console.log(`randomAnswer ${randomAnswer.letter}`);
      updatedAnswerArray.push(randomAnswer);
      console.log(updatedAnswerArray);
    }
    setAnswerArray(updatedAnswerArray);
  }
  function handleRandomQuestion() {
    let index = randomSelect(data);
    setQuestion(data[index].tiktik);
    listItems();
  }

  return (
    <>
      <h1>Baybayin</h1>

      <Button onRandomQuestion={handleRandomQuestion} />

      <Question question={question} />

      <AnswerList answerArray={answerArray} />
    </>
  );
}

function Button({ onRandomQuestion }) {
  return (
    <button className="new-letter__btn" onClick={() => onRandomQuestion()}>
      Learn New Letters
    </button>
  );
}

function Question({ question }) {
  return <div className="question-text">{question}</div>;
}

function AnswerList({ answerArray }) {
  return (
    <ul className="answer-list">
      {answerArray.map((a) => (
        <button className="answer-item">{a.letter}</button>
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
