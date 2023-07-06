import { board } from "./CreateBoard";

function GetRandomIndex() {
    console.log(board);
    const RANDOM_INDEX = Math.floor(Math.random() * board.length)
    console.log(RANDOM_INDEX);
};

export default GetRandomIndex;
