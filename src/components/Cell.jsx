import Ball from "./Ball";
import { useState } from "react";

function Cell({ hasBall, id }) {
  const [isActive, setIsActive] = useState(false);
  function handelCellClick() {
    if (isActive === false) {
      setIsActive(true);
    } else if (isActive === true) {
      setIsActive(false);
    }
  }
  return (
    <div className="cell" onClick={handelCellClick} id={id}>
      {hasBall ? <Ball isActive={isActive} /> : null} {id}
    </div>
  );
}

export default Cell;
