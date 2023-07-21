import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getRandomIndices, getEmptyCells, addBallinBoard } from "../util";

function App() {
  const BOARD_LENGTH = 5;
  const [board, setBoard] = useState([]);
  const [emptyCellsIndices, setEmptyCellsIndices] = useState([]);

  useEffect(() => {
    const CELL = {
      hasBall: false,
    };
    let RENDERED_BOARD = Array.from({ length: BOARD_LENGTH ** 2 }, () => CELL);

    const emptyCellsIndices = getEmptyCells(RENDERED_BOARD);
    setEmptyCellsIndices(emptyCellsIndices);

    let ballsIndices = getRandomIndices(emptyCellsIndices);
    addBallinBoard(RENDERED_BOARD, ballsIndices);

    setBoard(RENDERED_BOARD);
  }, []);

  return (
    <div className="container">
      <Board board={board} boardLength={BOARD_LENGTH} />
    </div>
  );
}
export default App;
