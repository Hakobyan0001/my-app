import React, { useEffect } from 'react';
import { board, boardLength } from './CreateBoard';

function InitBoard() {
    debugger;
    useEffect(() => {
        const BOARD_ELEMENT = document.getElementById("board");

        board.forEach((cell, index) => {
            const CUBE_ELEMENT = document.createElement("div");
            CUBE_ELEMENT.className = "cube"
            CUBE_ELEMENT.id = index
            BOARD_ELEMENT.appendChild(CUBE_ELEMENT);
            BOARD_ELEMENT.style.width = `${50 * boardLength}px`;
            BOARD_ELEMENT.style.height = `${50 * boardLength}px`;
            BOARD_ELEMENT.style.gridTemplateColumns = `repeat(${boardLength}, 1fr)`;
        });
    }, []);
    return null;
}
export default InitBoard;

