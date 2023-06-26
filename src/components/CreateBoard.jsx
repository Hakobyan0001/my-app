import React from 'react';
import RenderBoard from './RenderBoard';

let board;
let boardLength = 9;
function CreateBoard() {
    return board = new Array(boardLength ** 2).fill(null);

}

export default CreateBoard;
export { board, boardLength };