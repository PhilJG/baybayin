import "../App.css";

export default function Button({ children, question, onNewQuestion }) {
  return (
    <button
      className="new-letter__btn"
      onClick={() => {
        onNewQuestion(question);
      }}
    >
      {children}
    </button>
  );
}
