import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getRandomBalls, getEmptyCells } from "../util";

function App() {
  const CELL = {
    hasBall: false,
    id: 0,
  };
  const BOARD_LENGTH = 9;
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const renderedBoard = Array.from({ length: BOARD_LENGTH ** 2 }, () => ({
      ...CELL,
    }));
    setBoard(renderedBoard);

    let emptyCellsIndices = getEmptyCells(renderedBoard);
    const updatedBoard = getRandomBalls(renderedBoard, emptyCellsIndices);
    setBoard(updatedBoard);
  }, []);
  return (
    <div className="container">
      <Board board={board} boardLength={BOARD_LENGTH} />
    </div>
  );
}
export default App;
