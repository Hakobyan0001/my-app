export default function InputArea(setBoardLength) {
  function handleClick() {}
  return (
    <form>
      <label>
        Input board length: <input type="text" name="boardLength" value="" />
        <hr />
        Input number of balls to be added:{" "}
        <input type="text" name="ballsCount" value="" />
        <hr />
      </label>
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}
