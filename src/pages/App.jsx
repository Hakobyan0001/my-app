import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getEmptyCells, addBallinBoard, getRandomColor } from "../util";

function App() {
  const BOARD_LENGTH = 5;
  const COLORS = ["red", "green", "blue"]
  const [board, setBoard] = useState([]);
  const [emptyCells, setEmptyCells] = useState([]);
  const [ballColor, setBallColor] = useState();


  useEffect(() => {
    // creating board and adding CELL objects
    let RENDERED_BOARD = Array.from({ length: BOARD_LENGTH ** 2 }, (el, index) => ({
      hasBall: false,
      id: index,
      active: false,
      ballColor: ballColor
    }));
    // creating empty cells
    const emptyCellsIndices = getEmptyCells(RENDERED_BOARD);

    // Adding first balls in board
    const { newBoard, newEmptyCells } = addBallinBoard(RENDERED_BOARD, emptyCellsIndices, COLORS, setBallColor);
    setEmptyCells(newEmptyCells);
    // rendering board in dom
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    if (!board.length) {
      return;
    }
    const UPDATED_EMPTY_CELLS = getEmptyCells(board);
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
        colors={COLORS}
        setBallColor={setBallColor}
      />
    </div>
  );
}
export default App;
