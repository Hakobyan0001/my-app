import { moveBall } from "../util";
import Ball from "./Ball";
import { useState } from "react";

let selectedBall = {
  areBall: false,
  id: null
}
function Cell({ hasBall, id }) {
  const [isActive, setIsActive] = useState(false);

  function handelCellClick() {

    if (hasBall) {
      if (selectedBall.areBall === false && isActive === false) {
        selectedBall.areBall = true;
        selectedBall.id = { id }
        setIsActive((prevValue) => { return !prevValue; })
      }
      else if (selectedBall.areBall === true && isActive === false) {
        return null;
      }
      else if (selectedBall.areBall === true && isActive === true) {
        selectedBall.areBall = false;
        selectedBall.id = null;
        setIsActive((prevValue) => { return !prevValue; })
      }
    } else if (!hasBall && selectedBall.areBall) {
      moveBall(selectedBall.id, id)
    }
  }

  return (
    <div className="cell" onClick={handelCellClick} id={id}>
      {hasBall ? <Ball isActive={isActive} /> : null} {id}
    </div>
  );

}

export default Cell;
