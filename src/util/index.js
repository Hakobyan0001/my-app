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
  return Math.floor(Math.random() * emptyCellsIndices.length);
}

function addBallinBoard(board, emptyCellsIndices) {
  const BALLS_COUNT = 3;

  for (let i = 0; i < BALLS_COUNT; i++) {
    const RANDOM_INDEX = getRandomIndices(emptyCellsIndices);
    const CHOSEN_INDEX = emptyCellsIndices[RANDOM_INDEX];
    board[CHOSEN_INDEX] = {
      ...board[CHOSEN_INDEX],
      hasBall: true,
    };
    emptyCellsIndices.splice(RANDOM_INDEX, 1);
  }
}

function moveBall(from, to, board, emptyCellsIndices) {
  const UPDATED_BOARD = [...board];
  UPDATED_BOARD[from] = {
    ...board[from],
    hasBall: false,
  };
  UPDATED_BOARD[to] = {
    ...board[to],
    hasBall: true,
  };

  addBallinBoard(UPDATED_BOARD, emptyCellsIndices);
  return UPDATED_BOARD;
}
// function getRandomColor() {
//   const COLORS = ["red", "blue", "green"];
//   const RANDOM_COLOR = Math.floor(Math.random() * COLORS.length);
//   return COLORS[RANDOM_COLOR];
// }
export {
  updatingBoard,
  getEmptyCells,
  //getRandomColor,
  addBallinBoard,
  moveBall,
};
