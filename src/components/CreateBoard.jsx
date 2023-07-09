let board;
let boardLength = 5;
let emptyCellsIndices = [];
function CreateBoard() {
    debugger;
    board = new Array(boardLength ** 2).fill(null);

    emptyCellsIndices = board.map((element, index) => index);
    return (board, emptyCellsIndices);
}

export default CreateBoard;
export { board, boardLength, emptyCellsIndices };