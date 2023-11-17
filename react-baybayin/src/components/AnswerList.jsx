import "../App.css";

export default function AnswerList({
  answerArray,
  questionFormat,
  question,
  onResult,
}) {
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
