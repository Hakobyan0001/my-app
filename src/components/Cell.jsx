import Ball from "./Ball";

function Cell({ hasBall, id, handleCellClick, isActive, ballColor }) {
  // console.log(ballColor);
  return (
    <div className="cell" onClick={() => handleCellClick(id)} id={id}>
      {hasBall ? <Ball isActive={isActive} color={ballColor} /> : null}
      {id}
    </div>
  );
}
export default Cell;
