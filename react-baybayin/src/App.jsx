import { Image } from "react";

import "./App.css";

export default function App() {
  return (
    <>
      <h1>Baybayin</h1>
      <button className="new-titik__btn">Learn New Letters</button>
      <Titik />
    </>
  );
}

function Titik() {
  return (
    <>
      <Image src={`./assets/imgs/ba.svg`} />
    </>
  );
}
