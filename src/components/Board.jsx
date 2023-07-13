import Cell from "./Cell";

function Board({ board, boardLength }) {
  const width = boardLength * 50;

  const updatedBoard = board.map((cell, index) => {
    const uniqueId = `${index}`;
    return { ...cell, id: uniqueId };
  });
  return (
    <div id="board" style={{ width }}>
      {updatedBoard.map((cell, index) => (
        <Cell hasBall={cell.hasBall} key={cell.id} id={cell.id} />
      ))}
    </div>
  );
}

export default Board;
