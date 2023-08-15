
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

function addBallinBoard(board, emptyCells, COLORS, setBallColor, ballsCount, boardLength) {

  let newBoard = [...board];
  let newEmptyCells = [...emptyCells];

  for (let i = 0; i < ballsCount; i++) {
    const BALL_COLOR = getRandomColor(COLORS);
    setBallColor(`${COLORS[BALL_COLOR].color}`);
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

    newEmptyCells = newEmptyCells.filter(
      (index) => index !== newEmptyCells[RANDOM_INDEX]
    );
  }
  newBoard = checkingAndRemoving(newBoard, boardLength);

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

function removeBall(board, from) {
  board[from] = { ...board[from], hasBall: false };
  return board;
}

function removeBallsInHorizontalLine(board, boardLength, setGamePoints
) {
  const NEEDED_BALLS_COUNT = 5;
  let newBoard = [...board];

  for (let row = 0; row < boardLength; row++) {
    let checkedBallColor = null;
    let ballsCount = 0;
    for (let col = 0; col < boardLength; col++) {
      const CELL = board[row * boardLength + col];

      if (CELL.hasBall && CELL.ballColor === checkedBallColor) {
        ballsCount++;
      } else {
        checkedBallColor = CELL ? CELL.ballColor : null;
        ballsCount = 1;
      }
      if (ballsCount === NEEDED_BALLS_COUNT) {
        for (let i = col - ballsCount + 1; i <= col; i++) {
          let removableBallsIndex = row * boardLength + i;
          newBoard = removeBall(newBoard, removableBallsIndex);
          setGamePoints((prevValue) => {
            return prevValue + 1;

          })

        }
      }
    }
  }
  return newBoard;
}

function removeBallsInVerticalLine(board, boardLength, setGamePoints
) {
  const NEEDED_BALLS_COUNT = 5;
  let newBoard = [...board];

  for (let col = 0; col < boardLength; col++) {
    let checkedBallColor = null;
    let ballsCount = 0;
    for (let row = 0; row < boardLength; row++) {
      const CELL = board[row * boardLength + col];

      if (CELL.hasBall && CELL.ballColor === checkedBallColor) {
        ballsCount++;
      } else {
        checkedBallColor = CELL ? CELL.ballColor : null;
        ballsCount = 1;
      }
      if (ballsCount === NEEDED_BALLS_COUNT) {
        for (let i = row - ballsCount + 1; i <= row; i++) {
          let removableBallsIndex = col + boardLength * i;
          newBoard = removeBall(newBoard, removableBallsIndex);
          setGamePoints((prevValue) => {
            return prevValue + 1;

          })

        }
      }
    }
  }
  return newBoard;
}

function removeBallsInDiagonalLine1(board, boardLength, setGamePoints
) {
  const NEEDED_BALLS_COUNT = 5;
  let newBoard = [...board];

  for (let row = 0; row <= boardLength - NEEDED_BALLS_COUNT; row++) {
    for (let col = 0; col <= boardLength - NEEDED_BALLS_COUNT; col++) {
      let checkedBallColor = null;
      let ballsCount = 0;

      for (let angle = 0; angle < NEEDED_BALLS_COUNT; angle++) {
        const CELL = board[(row + angle) * boardLength + (col + angle)];
        if (CELL.hasBall && CELL.ballColor === checkedBallColor) {
          ballsCount++;
        } else {
          checkedBallColor = CELL ? CELL.ballColor : null;
          ballsCount = 1;
        }
        if (ballsCount === NEEDED_BALLS_COUNT) {
          for (let angle = 0; angle < ballsCount; angle++) {
            let removableBallsIndex =
              (row + angle) * boardLength + (col + angle);
            newBoard = removeBall(newBoard, removableBallsIndex);
            setGamePoints((prevValue) => {
              return prevValue + 1;

            })

          }
        }
      }
    }
  }
  return newBoard;
}

function removeBallsInDiagonalLine2(board, boardLength, setGamePoints) {
  const NEEDED_BALLS_COUNT = 5;
  let newBoard = [...board];

  for (let row = boardLength - 1; row >= NEEDED_BALLS_COUNT - 1; row--) {
    for (let col = 0; col <= boardLength - NEEDED_BALLS_COUNT; col++) {
      let checkedBallColor = null;
      let ballsCount = 0;

      for (let angle = 0; angle < NEEDED_BALLS_COUNT; angle++) {
        const CELL = board[(row - angle) * boardLength + (col + angle)];
        if (CELL.hasBall && CELL.ballColor === checkedBallColor) {
          ballsCount++;
        } else {
          checkedBallColor = CELL ? CELL.ballColor : null;
          ballsCount = 1;
        }
        if (ballsCount === NEEDED_BALLS_COUNT) {
          for (let angle = 0; angle < ballsCount; angle++) {
            let removableBallsIndex =
              (row - angle) * boardLength + (col + angle);
            newBoard = removeBall(newBoard, removableBallsIndex);
            setGamePoints((prevValue) => {
              return prevValue + 1;

            })
          }
        }
      }
    }
  }
  return newBoard;
}

function checkingAndRemoving(board, boardLength, setGamePoints) {
  let newBoard = [...board];
  newBoard = removeBallsInHorizontalLine(newBoard, boardLength, setGamePoints);
  newBoard = removeBallsInVerticalLine(newBoard, boardLength, setGamePoints);
  newBoard = removeBallsInDiagonalLine1(newBoard, boardLength, setGamePoints);
  newBoard = removeBallsInDiagonalLine2(newBoard, boardLength, setGamePoints);

  return newBoard;
}

export {
  getEmptyCells,
  getRandomColor,
  addBallinBoard,
  moveBall,
  checkingAndRemoving,
};
