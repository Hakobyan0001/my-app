function getEmptyCells(board) {
  let emptyCellsIndices = board.filter((el) => !el.hasBall).map((el) => el.id);

  return emptyCellsIndices;
}

function getRandomIndices(emptyCellsIndices) {
  return Math.floor(Math.random() * emptyCellsIndices.length);
}
function getRandomColor(ballColors) {
  let ChoosenColorIndex = Math.floor(Math.random() * ballColors.length);
  return ChoosenColorIndex;
}
function addBallinBoard(board, emptyCells, COLORS, setBallColor) {
  const BALLS_COUNT = 3;
  let newBoard = [...board];
  let newEmptyCells = [...emptyCells];
  for (let i = 0; i < BALLS_COUNT; i++) {
    const BALL_COLOR = getRandomColor(COLORS);

    setBallColor(`${COLORS[BALL_COLOR].color}`);
    // console.log(COLORS[BALL_COLOR].id);

    const RANDOM_INDEX = getRandomIndices(newEmptyCells);
    const CHOSEN_INDEX = newEmptyCells[RANDOM_INDEX];
    if (CHOSEN_INDEX === undefined) {
      break;
    }
    newBoard[CHOSEN_INDEX] = {
      ...newBoard[CHOSEN_INDEX],
      hasBall: true,
      ballColor: `${COLORS[BALL_COLOR].color}`,
    };
    // console.log(newBoard);

    newEmptyCells = newEmptyCells.filter(
      (index) => index !== newEmptyCells[RANDOM_INDEX]
    );
  }
  return { newBoard };
}

function moveBall(from, to, board) {
  let selectedBallColor = board[from].ballColor;
  const UPDATED_BOARD = board.map((el) => {
    if (el.id === from) {
      return { ...el, hasBall: false, active: false, ballColor: undefined };
    }
    if (el.id === to) {
      return { ...el, hasBall: true, ballColor: selectedBallColor };
    }
    return el;
  });

  return UPDATED_BOARD;
}

export { getEmptyCells, addBallinBoard, moveBall, getRandomColor };
