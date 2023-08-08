import Cell from "./Cell";
import { addBallinBoard, getEmptyCells, moveBall } from "../util";

function Board({
  board,
  boardLength,
  setBoard,
  setEmptyCells,
  colors,
  setBallColor,
}) {
  // console.log(colors);
  const width = boardLength * 50;
  function handleCellClick(id) {
    const CELL = board.find((el) => el.id === id);
    const ACTIVE_BALL = board.find((el) => el.active === true);

    if (CELL.hasBall && ACTIVE_BALL && !CELL.active) {
      return;
    }

    if (!CELL.hasBall && !ACTIVE_BALL) {
      return;
    }

    if (!CELL.hasBall && ACTIVE_BALL) {
      const updatedBoard = moveBall(ACTIVE_BALL.id, id, board);

      let updatedEmptyCells = getEmptyCells(updatedBoard);
      const { newBoard } = addBallinBoard(
        updatedBoard,
        updatedEmptyCells,
        colors,
        setBallColor
      );
      setBoard(newBoard);
      return;
    }

    if (CELL.hasBall && CELL.active) {
      const newBoard = board.map((el) => {
        return el.id === id ? { ...el, active: false } : el;
      });
      setBoard(newBoard);
      return;
    }

    if (CELL.hasBall && !CELL.active) {
      const newBoard = board.map((el) => {
        return el.id === id ? { ...el, active: true } : el;
      });
      setBoard(newBoard);
    }
  }
  return (
    <div id="board" style={{ width }}>
      {board.map((cell) => (
        <Cell
          hasBall={cell.hasBall}
          key={cell.id}
          id={cell.id}
          handleCellClick={handleCellClick}
          isActive={cell.active}
          ballColor={cell.ballColor}
        />
      ))}
    </div>
  );
}
export default Board;
