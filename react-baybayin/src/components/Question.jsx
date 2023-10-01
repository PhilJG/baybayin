import "../App.css";

export default function Question({ question, questionFormat }) {
  return (
    <div className="question-text">
      {questionFormat === "tiktik" ? question.tiktik : question.letter}
    </div>
  );
}
