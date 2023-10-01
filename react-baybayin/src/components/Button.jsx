import "../App.css";

export default function Button({
  children,
  question,
  onNewQuestion,
  // onQuestionFormat,
  // onRandomQuestion,
  // onAnswerList,
}) {
  return (
    <button
      className="new-letter__btn"
      onClick={() => {
        onNewQuestion(question);

        // onNewQuestionFormat();
        // onRandomQuestion();
        // onAnswerList(question);
      }}
    >
      {children}
    </button>
  );
}
