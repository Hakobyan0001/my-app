const CELL = {
  hasBall: false,
  id: 0,
};

function getRandomBalls(board, emptyCellsIndices) {
  const BALLS_COUNT = 3;
  let i = 0;
  while (i < BALLS_COUNT) {
    const RANDOM_INDEX = getRandomIndex(emptyCellsIndices);
    const BALL = [{ color: "red", id: RANDOM_INDEX, isActive: false }];
    board[emptyCellsIndices[RANDOM_INDEX]] = BALL;
    // emptyCellsIndices = emptyCellsIndices.filter(
    //   (el) => el !== emptyCellsIndices[RANDOM_INDEX]
    // );

    i++;
  }
}

function getEmptyCells(board) {
  let emptyCellsIndices = board.map((element, index) => index);
  return emptyCellsIndices;
}

function getRandomIndex(emptyCellsIndices) {
  const RANDOM_INDEX = Math.floor(Math.random() * emptyCellsIndices.length);
  return RANDOM_INDEX;
}

function initBoard(boardLength) {
  const BOARD = new Array(boardLength ** 2).fill(CELL);

  return BOARD;
}

export { getEmptyCells, getRandomBalls, initBoard };
