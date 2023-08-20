import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getEmptyCells, addBallinBoard } from "../util";
import InputArea from "../components/inputArea";

const COLORS = [
  { id: 0, color: "red" },
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
];

function App() {
  const [board, setBoard] = useState([]);
  const [emptyCells, setEmptyCells] = useState([]);
  const [ballColor, setBallColor] = useState();
  const [boardLength, setBoardLength] = useState("");
  const [ballsCount, setBallsCount] = useState("");
  const [gamePoints, setGamePoints] = useState("")
  const [dummyTrigger, setDummyTrigger] = useState(false);

  useEffect(() => {
    // creating board and adding CELL objects
    const RENDERED_BOARD = Array.from(
      { length: boardLength ** 2 },
      (el, index) => ({
        hasBall: false,
        id: index,
        active: false,
        ballColor: ballColor,
      })
    );
    // creating empty cells
    const emptyCellsIndices = getEmptyCells(RENDERED_BOARD);

    // Adding first balls in board
    const { newBoard } = addBallinBoard(
      RENDERED_BOARD,
      emptyCellsIndices,
      COLORS,
      setBallColor,
      ballsCount,
      boardLength
    );
    setGamePoints(0)
    // rendering board in dom
    setBoard(newBoard);
  }, [boardLength, ballsCount, dummyTrigger]);

  useEffect(() => {
    if (!board.length) {
      return;
    }
    const UPDATED_EMPTY_CELLS = getEmptyCells(board);
    setEmptyCells(UPDATED_EMPTY_CELLS);
    if (board.every(el => el.hasBall)) {
      setTimeout(alert("game over"), 1000);
    }
  }, [board]);

  return (
    <div className="container">
      <h1>Lines Game</h1>
      <InputArea setBoardLength={setBoardLength}
        setBallsCount={setBallsCount}
        setDummyTrigger={setDummyTrigger} />
      <h2>Game Point - {gamePoints}</h2>
      <Board
        board={board}
        boardLength={boardLength}
        setBoard={setBoard}
        colors={COLORS}
        setBallColor={setBallColor}
        ballsCount={ballsCount}
        setGamePoints={setGamePoints}
      />
    </div>
  );
}
export default App;
