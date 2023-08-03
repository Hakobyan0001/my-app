import Ball from "./Ball";


function Cell({ hasBall, id, handleCellClick, isActive }) {

  return (
    <div className="cell" onClick={() => handleCellClick(id)} id={id}>
      {hasBall ? <Ball isActive={isActive} /> : null}
      {id}
    </div>
  );
}
export default Cell;
