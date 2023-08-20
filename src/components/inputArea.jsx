import { useState } from "react";

let currentBorderLength;
let currentBallsCount;

export default function InputArea({ setBoardLength, setBallsCount, setDummyTrigger }) {
  const [boardLength, setBoardLengthValue] = useState("");
  const [ballsCount, setBallsCountValue] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    if (!boardLength || !ballsCount) {
      return;
    }
    setBoardLength(boardLength);
    setBallsCount(ballsCount);

    currentBorderLength = boardLength;
    currentBallsCount = ballsCount;

    setDummyTrigger((prevState) => !prevState);

    setBoardLengthValue("");
    setBallsCountValue("");
  }

  function restartClick() {
    setBoardLength(currentBorderLength);
    setBallsCount(currentBallsCount);
    setDummyTrigger((prevState) => !prevState);
  }
  return (
    <>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>
          Input board length
          <input className="form-control" type="text" name="boardLength" value={boardLength} onChange={(e) => setBoardLengthValue(e.target.value)} />
        </label>
        <label>
          Input number of balls to be added
          <input className="form-control" type="text" name="ballsCount" value={ballsCount} onChange={(e) => setBallsCountValue(e.target.value)} />

        </label>
        <div className="button-group">
          <button className="btn btn-secondary" type="submit">Submit</button>
          <button className="btn btn-secondary" type="button" onClick={restartClick}>Restart
          </button>
        </div>
      </form>
    </>);
}
