function updatingBoard(board) {
  let newBoard = board.map((cell, index) => {
    const uniqueId = `${index}`;
    return { ...cell, id: uniqueId };
  });
  return newBoard;
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

// function getRandomColor() {
//   const COLORS = ["red", "blue", "green"];
//   const RANDOM_COLOR = Math.floor(Math.random() * COLORS.length);
//   return COLORS[RANDOM_COLOR];
// }
function addBallinBoard(board, indices) {
  indices.forEach((index) => {
    board[index] = {
      ...board[index],
      hasBall: true,
    };
  });
}

function moveBall(from, to, board) {
  const UPDATED_BOARD = [...board];
  UPDATED_BOARD[from] = {
    ...board[from],
    hasBall: false,
  };
  UPDATED_BOARD[to] = {
    ...board[to],
    hasBall: true,
  };

  return UPDATED_BOARD;
}

export {
  updatingBoard,
  getEmptyCells,
  getRandomIndices,
  //getRandomColor,
  addBallinBoard,
  moveBall,
};
