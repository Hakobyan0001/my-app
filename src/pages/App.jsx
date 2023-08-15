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
  const [boardLength, setBoardLength] = useState(null);
  const [ballsCount, setBallsCount] = useState(null);

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
    // rendering board in dom
    setBoard(newBoard);
  }, [boardLength, ballsCount]);

  useEffect(() => {
    if (!board.length) {
      return;
    }
    const UPDATED_EMPTY_CELLS = getEmptyCells(board);
    setEmptyCells(UPDATED_EMPTY_CELLS);
  }, [board]);

  return (
    <div className="container">
      <h1>Lines Game</h1>
      <InputArea boardLength={boardLength} setBoardLength={setBoardLength}
        ballsCount={ballsCount}
        setBallsCount={setBallsCount} />
      <Board
        board={board}
        boardLength={boardLength}
        setBoard={setBoard}
        colors={COLORS}
        setBallColor={setBallColor}
        ballsCount={ballsCount}
      />
    </div>
  );
}
export default App;
