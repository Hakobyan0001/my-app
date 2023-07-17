import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getRandomBalls, getEmptyCells } from "../util";

function App() {
  const BOARD_LENGTH = 2;
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const CELL = {
      hasBall: false,
    };
    let RENDERED_BOARD = Array.from({ length: BOARD_LENGTH ** 2 }, () => ({
      ...CELL,
    }));
    setBoard(RENDERED_BOARD);

    let emptyCellsIndices = getEmptyCells(RENDERED_BOARD);
    const updatedBoard = getRandomBalls(RENDERED_BOARD, emptyCellsIndices);
    setBoard(updatedBoard);
  }, []);
  return (
    <div className="container">
      <Board board={board} boardLength={BOARD_LENGTH} />
    </div>
  );
}
export default App;
