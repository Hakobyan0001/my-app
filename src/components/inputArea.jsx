import { useState } from "react";
import { history } from "../util";

function InputArea({ setBoardLength, setBallsCount, setDummyTrigger }) {
  const [boardLengthValue, setBoardLengthValue] = useState("");
  const [ballsCountValue, setBallsCountValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!boardLengthValue || !ballsCountValue) {
      return;
    }
    setBoardLength(boardLengthValue);
    setBallsCount(ballsCountValue);

    history.set("currentBoardLength", boardLengthValue);
    history.set("currentBallsCount", ballsCountValue);

    setDummyTrigger((prevState) => !prevState);

    setBoardLengthValue("");
    setBallsCountValue("");
  }

  function restartClick() {
    setDummyTrigger((prevState) => !prevState);
    setBoardLength(history.get("currentBoardLength"));
    setBallsCount(history.get("currentBallsCount"));
    history.remove("board");
    history.remove("boardLength");
    history.remove("ballsCount");
    history.remove("gamePoints");
  }
  return (
    <>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>
          Input board length
          <input
            className="form-control"
            type="text"
            name="boardLength"
            value={boardLengthValue}
            onChange={(e) => setBoardLengthValue(e.target.value)}
          />
        </label>
        <label>
          Input number of balls to be added
          <input
            className="form-control"
            type="text"
            name="ballsCount"
            value={ballsCountValue}
            onChange={(e) => setBallsCountValue(e.target.value)}
          />
        </label>
        <div className="button-group">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={restartClick}
          >
            Restart
          </button>
        </div>
      </form>
    </>
  );
}

export default InputArea;
