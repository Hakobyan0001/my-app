function addBallinBoard(board, indices) {
  indices.forEach((index) => {
    board[index] = {
      ...board[index],
      hasBall: true,
    };
  });
}

function getEmptyCells(board) {
  let emptyCellsIndices = board.map((element, index) => index);

  return emptyCellsIndices;
}

function getRandomIndices(emptyCellsIndices) {
  let indices = [...emptyCellsIndices];
  const BALLS_COUNT = 3;
  let ballsIndices = [];

  for (let i = 0; i < BALLS_COUNT; i++) {
    const RANDOM_INDEX = Math.floor(Math.random() * indices.length);
    const chosenIndex = indices[RANDOM_INDEX];

    indices.splice(RANDOM_INDEX, 1);
    ballsIndices.push(chosenIndex);
  }
  return ballsIndices;
}

export { getEmptyCells, getRandomIndices, addBallinBoard };
