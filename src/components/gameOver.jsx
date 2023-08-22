function GameOver({ board }) {
  if (board.length) {
    return board.every((el) => el.hasBall) ? <h3>GAME OVER</h3> : null;
  }
  return null;
}

export default GameOver;
