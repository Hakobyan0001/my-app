
function getRandomBalls(board, emptyCellsIndices) {
  const BALLS_COUNT = 3;

  for (let i = 0; i < BALLS_COUNT; i++) {
    const RANDOM_INDEX = getRandomIndex(emptyCellsIndices);
    board[RANDOM_INDEX] = {
      ...board[RANDOM_INDEX],
      hasBall: true,
    };
    emptyCellsIndices.splice(RANDOM_INDEX, 1);
  }

  return board;
}

function getEmptyCells(board) {
  let emptyCellsIndices = board.map((element, index) => index);
  return emptyCellsIndices;
}

function getRandomIndex(emptyCellsIndices) {
  const RANDOM_INDEX = Math.floor(Math.random() * emptyCellsIndices.length);
  return RANDOM_INDEX;
}

export { getEmptyCells, getRandomBalls };
