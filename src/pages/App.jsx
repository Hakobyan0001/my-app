import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getEmptyCells, addBallinBoard } from "../util";
import InputArea from "../components/inputArea";

const COLORS = [
  { id: 0, color: "red" },
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
];
const BOARD_LENGTH = 8;

function App() {
  const [board, setBoard] = useState([]);
  const [emptyCells, setEmptyCells] = useState([]);
  const [ballColor, setBallColor] = useState();
  const [boardLength, setBoardLength] = useState();

  useEffect(() => {
    // creating board and adding CELL objects
    let RENDERED_BOARD = Array.from(
      { length: BOARD_LENGTH ** 2 },
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
      setBallColor
    );
    // rendering board in dom
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    if (!board.length) {
      return;
    }
    const UPDATED_EMPTY_CELLS = getEmptyCells(board);
    setEmptyCells(UPDATED_EMPTY_CELLS);
  }, [board]);

  return (
    <div className="container">
      <InputArea setBoardLength={setBoardLength} />
      <Board
        board={board}
        boardLength={BOARD_LENGTH}
        setBoard={setBoard}
        colors={COLORS}
        setBallColor={setBallColor}
      />
    </div>
  );
}
export default App;
export { BOARD_LENGTH };
