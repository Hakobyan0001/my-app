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

    // creating board and adding CELL objects
    let RENDERED_BOARD = Array.from({ length: BOARD_LENGTH ** 2 }, () => CELL);

    // creating empty cells
    const emptyCellsIndices = getEmptyCells(RENDERED_BOARD);
    setEmptyCellsIndices(emptyCellsIndices);

    // adding first balls in board
    let ballsIndices = getRandomIndices(emptyCellsIndices);
    addBallinBoard(RENDERED_BOARD, ballsIndices);

    // rendering board in dom
    setBoard(RENDERED_BOARD);
  }, []);

  return (
    <div className="container">
      <Board board={board} boardLength={BOARD_LENGTH} setBoard={setBoard} />
    </div>
  );
}
export default App;
