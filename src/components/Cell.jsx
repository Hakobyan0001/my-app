import Ball from "./Ball";
import { useState } from "react";

function Cell({ hasBall, id }) {
  const [Activity, setActivity] = useState(false)
  function handelCellClick() {
    if (Activity === false) {
      setActivity(true);
    } else if (Activity == true) {
      setActivity(false)
    }


  }

  return (
    <div className="cell" onClick={handelCellClick} id={id}>
      {hasBall ? <Ball isActive={Activity} /> : null}
    </div>
  );
}

export default Cell;





