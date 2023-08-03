

function getEmptyCells(board) {
  let emptyCellsIndices = board.map((element, index) => index);
  return emptyCellsIndices;
}

function getRandomIndices(emptyCellsIndices) {
  return Math.floor(Math.random() * emptyCellsIndices.length);
}

function addBallinBoard(board, emptyCells) {
  const BALLS_COUNT = 3;
  let newBoard = [...board]
  let newEmptyCells = [...emptyCells]
  for (let i = 0; i < BALLS_COUNT; i++) {
    const RANDOM_INDEX = getRandomIndices(newEmptyCells);
    const CHOSEN_INDEX = newEmptyCells[RANDOM_INDEX];
    newBoard[CHOSEN_INDEX] = {
      ...newBoard[CHOSEN_INDEX],
      hasBall: true,
    };
    return { newBoard, newEmptyCells }
  }
}

function moveBall(from, to, board) {
  const UPDATED_BOARD = board.map((el) => {
    if (el.id === from) {
      return { ...el, hasBall: false, active: false }
    }
    if (el.id === to) {
      return { ...el, hasBall: true }
    }
    return el;
  })
  return UPDATED_BOARD;
}
// function getRandomColor() {
//   const COLORS = ["red", "blue", "green"];
//   const RANDOM_COLOR = Math.floor(Math.random() * COLORS.length);
//   return COLORS[RANDOM_COLOR];
// }
export {
  getEmptyCells,
  //getRandomColor,
  addBallinBoard,
  moveBall,
};
