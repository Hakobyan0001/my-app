
export default function InputArea({ setBoardLength, setBallsCount }) {
  let boardLength, ballsCount;
  function handleSubmit(e) {
    e.preventDefault();
    setBoardLength(boardLength);
    setBallsCount(ballsCount);

  }
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label>
        Input board length
        <input className="form-control" type="text" value={boardLength} onChange={(e) => boardLength = e.target.value} />
      </label>
      <label>
        Input number of balls to be added
        <input className="form-control" type="text" value={ballsCount} onChange={(e) => ballsCount = e.target.value} />

      </label>
      <button className="btn btn-secondary" type="submit">
        Submit
      </button>
    </form>
  );
}
