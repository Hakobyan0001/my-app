import Ball from "./Ball";
import { useState } from "react";


let selectedBall = false

function Cell({ hasBall, id }) {
  const [isActive, setIsActive] = useState(false);
  function handelCellClick() {
    if (hasBall) {
      if (selectedBall === false && isActive === false) {
        selectedBall = true;
        setIsActive((prevValue) => { return !prevValue; })
      }
      else if (selectedBall === true && isActive === false) {

        return null;

      }
      else if (selectedBall === true && isActive === true) {
        selectedBall = false;
        setIsActive((prevValue) => { return !prevValue; })
      }
    }
  }
  return (
    <div className="cell" onClick={handelCellClick} id={id}>
      {hasBall ? <Ball isActive={isActive} /> : null} {id}
    </div>
  );
}

export default Cell;
