let board;
let boardLength = 5;
function CreateBoard() {
    board = new Array(boardLength ** 2).fill(null);
    return board;
}

export default CreateBoard;
export { board, boardLength };