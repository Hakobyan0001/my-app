import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getRandomBalls, getEmptyCells, initBoard } from "../util";

function App() {
  const BOARD_LENGTH = 9;
  const [board, setBoard] = useState([]);
  let emptyCellsIndices = getEmptyCells(board);
  getRandomBalls(board, emptyCellsIndices);
  console.log(board);

  useEffect(() => {
    setBoard(initBoard(BOARD_LENGTH));
  }, []);

  return (
    <div className="container">
      <Board board={board} boardLength={BOARD_LENGTH} />
    </div>
  );
}

export default App;
