function getRandomBalls(board, emptyCellsIndices) {
  const BALLS_COUNT = 3;

  for (let i = 0; i < BALLS_COUNT; i++) {
    const RANDOM_INDEX = getRandomIndex(emptyCellsIndices);
    board[RANDOM_INDEX] = {
      ...board[RANDOM_INDEX],
      hasBall: true,
    };
    emptyCellsIndices = emptyCellsIndices.filter(
      (el) => el !== emptyCellsIndices[RANDOM_INDEX]
    );
  }

  return board;
}

function getEmptyCells(board) {
  let emptyCellsIndices = board.map((element, index) => index);
  return emptyCellsIndices;
}

// let currentBallsNumbers = [];

function getRandomIndex(emptyCellsIndices) {
  const RANDOM_INDEX = Math.floor(Math.random() * emptyCellsIndices.length);
  console.log(RANDOM_INDEX);

  // if (currentBallsNumbers.includes(RANDOM_INDEX)) {
  //   getRandomIndex(emptyCellsIndices);
  // } else {
  // currentBallsNumbers.push(RANDOM_INDEX);
  return RANDOM_INDEX;
  // }
}

export { getEmptyCells, getRandomBalls };
