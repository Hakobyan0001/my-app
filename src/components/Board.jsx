import Cell from "./Cell";

function Board({ board, boardLength }) {
  const width = boardLength * 50;
  return (
    <div id="board" style={{ width }}>
      {board.map((el, index) => {
        return <Cell hasBall={el.hasBall} key={index} />;
      })}
    </div>
  );
}

export default Board;
