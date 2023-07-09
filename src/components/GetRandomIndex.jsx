import { board } from './CreateBoard';

function GetRandomIndex() {
    const RANDOM_INDEX = Math.floor(Math.random() * board.length)
    return RANDOM_INDEX;
};

export default GetRandomIndex;
