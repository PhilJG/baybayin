import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

export default function App() {
  const [questionFormat, setQuestionFormat] = useState("tiktik");
  const [question, setQuestion] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [result, setResult] = useState(null);

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
      let index = randomSelect(data);
      const randomAnswer = data[index];
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
    if (q.letter == null) {
      setResult();
    } else if (q.letter === a.letter) {
      setResult(true);
    } else if (q.letter != a.letter) {
      setResult(false);
    }
    console.log(result);
  }

  function handleRandomQuestion() {
    let index = randomSelect(data);
    let q = data[index];
    setQuestion(q);
    //delay the execution of handleAnswerList
    setTimeout(() => {
      handleAnswerList(q);
    }, 0);
    console.log(q);
  }

  // Function to toggle the question format
  const toggleQuestionFormat = () => {
    setQuestionFormat((prevFormat) =>
      prevFormat === "tiktik" ? "letter" : "tiktik"
    );
  };

  return (
    <>
      {/* <h1>Baybayin</h1> */}

      <div>
        <h1>{questionFormat}</h1>
      </div>

      <Button
        onQuestionFormat={toggleQuestionFormat}
        onRandomQuestion={handleRandomQuestion}
        onAnswerList={handleAnswerList}
        question={question}
      >
        Learn New letter
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
    </>
  );
}

function Button({
  children,
  onQuestionFormat,
  onRandomQuestion,
  onAnswerList,
  question,
}) {
  return (
    <button
      className="new-letter__btn"
      onClick={() => {
        onQuestionFormat();
        onRandomQuestion();
        onAnswerList(question);
      }}
    >
      {children}
    </button>
  );
}

function Question({ question, questionFormat }) {
  return (
    <div className="question-text">
      {questionFormat === "tiktik" ? question.tiktik : question.letter}
    </div>
  );
}

function AnswerList({ answerArray, questionFormat, question, onResult }) {
  //Check if question has been rendered
  if (!question || !answerArray) {
    return null; // or return a loading indicator
  }
  return (
    <div className="answer-list">
      {answerArray.map((a) => (
        <button
          className="answer-item"
          key={a.letter}
          onClick={() => onResult(question, a)}
        >
          {questionFormat === "tiktik" ? a.letter : a.tiktik}
        </button>
      ))}
    </div>
  );
}

function Result({ result }) {
  return (
    <div className="result">
      {result == true ? "✅" : result == false ? "❌" : ""}
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
