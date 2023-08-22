import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getEmptyCells, addBallinBoard, history } from "../util";
import InputArea from "../components/inputArea";
import GameOver from "../components/gameOver";

const COLORS = [
  { id: 0, color: "red" },
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
];

function App() {
  const [board, setBoard] = useState([]);
  const [ballColor, setBallColor] = useState();
  const [boardLength, setBoardLength] = useState("");
  const [ballsCount, setBallsCount] = useState("");
  const [gamePoints, setGamePoints] = useState("");
  const [dummyTrigger, setDummyTrigger] = useState(false);

  useEffect(() => {
    const CURRENT_BOARD = history.get("board");
    const CURRENT_BOARD_LENGTH = history.get("boardLength");
    const CURRENT_BALLS_COUNT = history.get("ballsCount");
    const CURRENT_GAME_POINTS = history.get("gamePoints");

    if (
      (boardLength === CURRENT_BOARD_LENGTH &&
        ballsCount === CURRENT_BALLS_COUNT) ||
      (!boardLength &&
        !ballsCount &&
        CURRENT_BALLS_COUNT &&
        CURRENT_BOARD_LENGTH)
    ) {
      setBoard(CURRENT_BOARD);
      setBallsCount(CURRENT_BALLS_COUNT);
      setBoardLength(CURRENT_BOARD_LENGTH);
      setGamePoints(CURRENT_GAME_POINTS);

      return;
    }
    // creating board and adding CELL objects
    const RENDERED_BOARD = Array.from(
      { length: boardLength ** 2 },
      (el, index) => ({
        hasBall: false,
        id: index,
        active: false,
        ballColor: ballColor,
      })
    );
    // creating empty cells
    const emptyCellsIndices = getEmptyCells(RENDERED_BOARD);
    // Adding first balls in board
    const { newBoard } = addBallinBoard(
      RENDERED_BOARD,
      emptyCellsIndices,
      COLORS,
      setBallColor,
      ballsCount,
      boardLength
    );
    setGamePoints(0);

    // rendering board in dom
    setBoard(newBoard);
  }, [boardLength, ballsCount, dummyTrigger]);

  useEffect(() => {
    if (!board.length) {
      return;
    }
    history.set("board", board);
    history.set("boardLength", boardLength);
    history.set("gamePoints", gamePoints);
    history.set("ballsCount", ballsCount);
  }, [board]);

  return (
    <div className="container">
      <h1>Lines Game</h1>
      <InputArea
        setBoardLength={setBoardLength}
        setBallsCount={setBallsCount}
        setDummyTrigger={setDummyTrigger}
      />
      <h2>Game Point - {gamePoints}</h2>
      <GameOver board={board} />
      <Board
        board={board}
        boardLength={boardLength}
        setBoard={setBoard}
        colors={COLORS}
        setBallColor={setBallColor}
        ballsCount={ballsCount}
        setGamePoints={setGamePoints}
      />
    </div>
  );
}
export default App;
