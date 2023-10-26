export default function Result({ result }) {
  return (
    <div className="result">
      {result == true ? "✅" : result == false ? "❌" : ""}
    </div>
  );
}
