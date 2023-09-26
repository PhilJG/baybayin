import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
// import img from "./assets/imgs/";

export default function App() {
  const [question, setQuestion] = useState(data[0].tiktik);

  //Randomly selects from an array
  const randomSelect = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  function handleRandomQuestion() {
    let randomIndex = randomSelect(data);
    setQuestion(data[randomIndex].tiktik);
  }

  return (
    <>
      <h1>Baybayin</h1>
      <button
        className="new-letter__btn"
        onClick={() => handleRandomQuestion()}
      >
        Learn New Letters
      </button>
      <div className="question-text">{question}</div>
    </>
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
