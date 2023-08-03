import Cell from "./Cell";
import { moveBall } from "../util";

function Board({ board, boardLength, setBoard, emptyCellsIndices, setEmptyCells }) {
  const width = boardLength * 50;
  function handleCellClick(id) {
    const CELL = board.find(el => el.id === id)
    const ACTIVE_BALL = board.find(el => el.active === true);
    // console.log(ACTIVE_BALL?.id)

    if (!CELL.hasball && ACTIVE_BALL) {
      const newBoard = moveBall(
        ACTIVE_BALL.id,
        id,
        board,
      )
      // TODO update empty indices and add balls
      setBoard(newBoard);
      return
    }
    if (!CELL.hasball) {
      return;
    }
    if (CELL.hasball && CELL.active) {
      const newBoard = board.map((el) => {
        return el.id === id ? { ...el, active: false } : el;
      })
      setBoard(newBoard);
      return
    }
    if (CELL.hasball && !CELL.active) {
      const newBoard = board.map((el) => {
        return el.id === id ? { ...el, active: true } : el;
      })
      setBoard(newBoard);
    }
  }

  return (
    <div id="board" style={{ width }} >
      {board.map((cell) => (
        <Cell
          hasBall={cell.hasBall}
          key={cell.id}
          id={cell.id}
          handleCellClick={handleCellClick}
          isActive={cell.active}
        />
      ))}
    </div>
  );
}
export default Board;
