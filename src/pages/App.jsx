import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getEmptyCells, addBallinBoard } from "../util";

function App() {
  const BOARD_LENGTH = 5;
  const [board, setBoard] = useState([]);
  const [emptyCells, setEmptyCells] = useState([]);


  useEffect(() => {
    const CELL = {
      hasBall: false,
    };

    // creating board and adding CELL objects
    let RENDERED_BOARD = Array.from({ length: BOARD_LENGTH ** 2 }, (el, index) => ({ hasBall: false, id: index, active: false }));

    // creating empty cells
    const emptyCellsIndices = getEmptyCells(RENDERED_BOARD);

    // Adding first balls in board
    const { newBoard, newEmptyCells } = addBallinBoard(RENDERED_BOARD, emptyCellsIndices);
    setEmptyCells(newEmptyCells);

    // rendering board in dom
    setBoard(newBoard);
  }, []);
  useEffect(() => {
    if (!board.length) {
      return;
    }
    const UPDATED_EMPTY_CELLS = board.filter((el) => !el.hasball)
    setEmptyCells(UPDATED_EMPTY_CELLS)
  }, [board]);

  return (
    <div className="container">
      <Board
        board={board}
        boardLength={BOARD_LENGTH}
        setBoard={setBoard}
        emptyCells={emptyCells}
        setEmptyCells={setEmptyCells}
      />
    </div>
  );
}
export default App;
