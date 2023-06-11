import CardDisplayer from "./CardDisplayer";
import Scoirée from "./ScoreBoard";
import { useState } from "react";
import Score from "./Score";
//SE VE QUE CADA VEZ QUE SE SETEA EL ESTADO SE VUELVE A RENDERIZAR EL COMPONENTE
//CUANDO LA FUNCIÓN QUE TIENE EL SETSTATE ESTÁ INCRUSTADA EN DICHO COMPONENTE
function App() {
  const [points, setPoints] = useState(0);
  const [guess, setGuess] = useState([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState([]);
  const handleCard = (e) => {
    let cardNumber = e.target.getAttribute("number");
    if (message === "Lost" || message === "Won") {
      return;
    }
    if (guess.indexOf(cardNumber) < 0) {
      setGuess([...guess, cardNumber]);
      setPoints((p) => p + 1);
      if (points === 11) {
        setMessage("Won");
        setScore([...score, { points: 12, message: "Won" }]); //SUPER RECONTRA HARDCODEADO. VER PORQUÉ SE ACTUALIZA ANTES EN EL RETURN QUE ACÁ
      }
    } else {
      setMessage("Lost");
      setScore([...score, { points: points, message: "Lost" }]); //don't know why I can't put message state there
    }
  };
  const reset = () => {
    if (score.length > 4) {
      setScore([]);
    }
    setPoints(0);
    setMessage("");
    setGuess([]);
  };
  return (
    <div className="App">
      <header>
        <h1>jogo bonito shitpost</h1>
        <button onClick={reset}>Reset</button>
        <Scoirée score={score} />
      </header>
      <Score points={points} message={message} />
      <CardDisplayer handleCard={handleCard} />
    </div>
  );
}

export default App;
