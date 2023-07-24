import { moveBall } from "../util";
import Ball from "./Ball";
import { useState } from "react";

let selectedBall = {
  areBall: false,
  id: null,
};

function Cell({ hasBall, id, board, setBoard }) {
  let updatedBoard = board;
  const [isActive, setIsActive] = useState(false);

  function deActivate() {
    selectedBall.areBall = false;
    selectedBall.id = null;
    setIsActive(false);
  }

  function activate() {
    selectedBall.areBall = true;
    selectedBall.id = { id };
    setIsActive(true);
  }

  function handleCellClick(event) {
    const CLICKED_CELL_ID = event.target.id;
    if (hasBall) {
      if (!selectedBall.areBall && !isActive) {
        activate();
      } else if (selectedBall.areBall && !isActive) {
        return;
      } else if (selectedBall.areBall && isActive) {
        deActivate();
      }
    } else if (!hasBall && selectedBall.areBall) {
      setBoard(moveBall(selectedBall.id, CLICKED_CELL_ID, updatedBoard));
      deActivate();
    }
  }
  return (
    <div className="cell" onClick={handleCellClick} id={id}>
      {hasBall ? <Ball isActive={isActive} /> : null}
      {id}
    </div>
  );
}
export default Cell;
