import { useState } from "react";

export default function InputArea({ setBoardLength, setBallsCount }) {
  const [boardLength, setBoardLengthValue] = useState("");
  const [ballsCount, setBallsCountValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setBoardLength(boardLength);
    setBallsCount(ballsCount);

    setBoardLengthValue("");
    setBallsCountValue("");
  }
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label>
        Input board length
        <input className="form-control" type="text" name="boardLength" value={boardLength} onChange={(e) => setBoardLengthValue(e.target.value)} />
      </label>
      <label>
        Input number of balls to be added
        <input className="form-control" type="text" name="ballsCount" value={ballsCount} onChange={(e) => setBallsCountValue(e.target.value)} />

      </label>
      <button className="btn btn-secondary" type="submit">
        Submit
      </button>
    </form>
  );
}
