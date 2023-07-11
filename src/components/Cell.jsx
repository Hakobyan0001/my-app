import Ball from "./Ball";
function Cell({ hasBall }) {
  return <div className="cell">{hasBall ? <Ball /> : null}</div>;
}

export default Cell;
