import { updatingBoard } from "../util";
import Cell from "./Cell";
function Board({ board, boardLength, setBoard, emptyCellsIndices }) {
  const width = boardLength * 50;
  let updatedBoard = updatingBoard(board);
  return (
    <div id="board" style={{ width }}>
      {updatedBoard.map((cell) => (
        <Cell
          hasBall={cell.hasBall}
          key={cell.id}
          id={cell.id}
          board={board}
          setBoard={setBoard}
          emptyCellsIndices={emptyCellsIndices}
        />
      ))}
    </div>
  );
}
export default Board;
