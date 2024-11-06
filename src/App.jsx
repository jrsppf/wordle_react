import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [targetWord, setTargetWord] = useState("");
  const [guessWord, setGuessWord] = useState("");
  const [guessAttemptsLeft, setguessAttemptsLeft] = useState(6);
  const [square, setSquare] = useState();
  const [feedback, setFeedback] = useState("");

  const words = ["bloom", "crazy", "diner"];

  useEffect(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setTargetWord(word);
  }, []);

  return (
    <>
      <h1>Wordle</h1>
      {targetWord}
    </>
  );
}

export default App;
