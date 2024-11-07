import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [targetWord, setTargetWord] = useState("");
  const [guessWord, setGuessWord] = useState("");
  const [targetLetterOne, setTargetLetterOne] = useState("");
  const [targetLetterTwo, setTargetLetterTwo] = useState("");
  const [targetLetterThree, setTargetLetterThree] = useState("");
  const [targetLetterFour, setTargetLetterFour] = useState("");
  const [targetLetterFive, setTargetLetterFive] = useState("");
  const [squareColor, setSquareColor] = useState("grey");
  const [guess, setGuess] = useState();
  const [id, setId] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([]);

  const words = ["bloom", "crazy", "diner"];

  useEffect(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setTargetWord(word);
    setTargetLetterOne(word[0]);
    setTargetLetterTwo(word[1]);
    setTargetLetterThree(word[2]);
    setTargetLetterFour(word[3]);
    setTargetLetterFive(word[4]);
  }, []);

  const handleGuessSubmission = (event) => {
    event.preventDefault();

    const currentGuess = guessWord;
    const guessId = id + 1;
    setId(guessId);

    setGuess({
      id: guessId,
      word: currentGuess,
      firstLetter: currentGuess[0],
      secondLetter: currentGuess[1],
      thirdLetter: currentGuess[2],
      fourthLetter: currentGuess[3],
      fifthLetter: currentGuess[4],
    });
  };

  useEffect(() => {
    if (guess) {
      if (guess.firstLetter === targetLetterOne) {
        setSquareColor("green");
      } else if (
        targetWord.includes(guess.firstLetter) &&
        guess.firstLetter != targetLetterOne
      ) {
        setSquareColor("yellow");
      }

      setPastGuesses([...pastGuesses, guess]);
      console.log(pastGuesses);
    }
  }, [guess]);

  return (
    <>
      <h1>Wordle</h1>
      <form onSubmit={handleGuessSubmission}>
        <label htmlFor="user-guess">Enter Guess: </label>
        <input
          type="text"
          id="user-guess"
          value={guessWord}
          onChange={(e) => setGuessWord(e.target.value)}
        />
        <input type="submit" value="GUESS" />
      </form>
      {targetWord}
      <br />
      <ul>
        {pastGuesses.length > 0 &&
          pastGuesses.map((item) => {
            return <li key={item.id}>{item.word}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
