import React, { useState } from 'react';
import './App.css';

function App() {

  const [span1, setSpan1] = useState("")
  const [span2, setSpan2] = useState(" ")
  const [span3, setSpan3] = useState("  ")
  const [span4, setSpan4] = useState("   ")
  const [span5, setSpan5] = useState("    ")
  const [span6, setSpan6] = useState("     ")
  const [span7, setSpan7] = useState("      ")
  const [span8, setSpan8] = useState("       ")
  const [span9, setSpan9] = useState("        ")
  const [turn, setTurn] = useState(1)
  const [turnNumber, setTurnNumber] = useState(0)

  const clickSpan1 = () => {
    if (span1 === "") {
      if (turn === 1) {
        setSpan1("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan1("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan2 = () => {
    if (span2 === " ") {
      if (turn === 1) {
        setSpan2("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan2("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan3 = () => {
    if (span3 === "  ") {
      if (turn === 1) {
        setSpan3("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan3("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan4 = () => {
    if (span4 === "   ") {
      if (turn === 1) {
        setSpan4("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan4("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan5 = () => {
    if (span5 === "    ") {
      if (turn === 1) {
        setSpan5("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan5("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan6 = () => {
    if (span6 === "     ") {
      if (turn === 1) {
        setSpan6("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan6("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan7 = () => {
    if (span7 === "      ") {
      if (turn === 1) {
        setSpan7("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan7("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan8 = () => {
    if (span8 === "       ") {
      if (turn === 1) {
        setSpan8("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan8("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  const clickSpan9 = () => {
    if (span9 === "        ") {
      if (turn === 1) {
        setSpan9("X")
        setTurnNumber(turnNumber + 1)
        setTurn(2)
      }
      else {
        setSpan9("O")
        setTurnNumber(turnNumber + 1)
        setTurn(1)
      }
    }
    else {
      alert("Please choose another box!")
    }
  }

  if (turn === 2) {
    do {
      let randomNumber = getRandomArbitrary(1, 10)
      
      function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      }

      switch (randomNumber) {
        case 1:
          if (span1 === "") {
            setSpan1("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 2:
          if (span2 === " ") {
            setSpan2("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 3:
          if (span3 === "  ") {
            setSpan3("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 4:
          if (span4 === "   ") {
            setSpan4("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 5:
          if (span5 === "    ") {
            setSpan5("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 6:
          if (span6 === "     ") {
            setSpan6("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 7:
          if (span7 === "      ") {
            setSpan7("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 8:
          if (span8 === "       ") {
            setSpan8("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        case 9:
          if (span9 === "        ") {
            setSpan9("O")
            setTurnNumber(turnNumber + 1)
            setTurn(1)
            break
          }
          else {
            continue
          }

        default: alert("Unknown error!")
          break;
      }
    } while (false);
  }

  if (((span1 === span2) && (span2 === span3)) || ((span4 === span5) && (span5 === span6)) || ((span7 === span8) && (span8 === span9))
      || ((span1 === span4) && (span4 === span7)) || ((span2 === span5) && (span5 === span8)) || ((span3 === span6) && (span6 === span9))
      || ((span1 === span5) && (span5 === span9)) || ((span3 === span5) && (span5 === span7))) {
    if (turn === 2) {
      alert("Player has won the game! Press the reset button to reset the game.")
    }
    else {
      alert("Computer has won the game! Press the reset button to reset the game.")
    }
  }

  if (turnNumber === 9)
    alert("Game is a tie! Reset the game by clicking the reset button.")

  const clickReset = () => {
    setSpan1("")
    setSpan2(" ")
    setSpan3("  ")
    setSpan4("   ")
    setSpan5("    ")
    setSpan6("     ")
    setSpan7("      ")
    setSpan8("       ")
    setSpan9("        ")
    setTurnNumber(0)
    setTurn(1)
  }

  return (
    <div>
      <h1 className = "header">TicTacToe</h1>
      <div className = "ticTacToe">
        <div className = "column">
          <span className = "square" onClick = {clickSpan1}>{span1}</span>
          <span className = "square" onClick = {clickSpan2}>{span2}</span>
          <span className = "square" onClick = {clickSpan3}>{span3}</span>
        </div>
        <div className = "column">
          <span className = "square" onClick = {clickSpan4}>{span4}</span>
          <span className = "square" onClick = {clickSpan5}>{span5}</span>
          <span className = "square" onClick = {clickSpan6}>{span6}</span>
        </div>
        <div className = "column">
          <span className = "square" onClick = {clickSpan7}>{span7}</span>
          <span className = "square" onClick = {clickSpan8}>{span8}</span>
          <span className = "square" onClick = {clickSpan9}>{span9}</span>
        </div>
      </div>
      <h1 className = "playerTurn">Turn: <span className = "turnColor">Player {turn}</span></h1>
      <button className = "btn-reset" onClick = {clickReset}>Reset</button>
    </div>
  );
}

export default App;
