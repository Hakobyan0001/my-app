import Ball from "./Ball";
function Cell({ hasBall, id }) {
  return (
    <div className="cell" id={id}>
      {hasBall ? <Ball /> : null}
    </div>
  );
}

export default Cell;
