import React from 'react';
import $ from 'jquery';
import { board, boardLength } from './CreateBoard';

function InitBoard() {

    board.forEach((cell, index) => {
        const CUBE_ELEMENT = $(<div></div>).attr({
            class: 'cube',
            id: index
        })
        $("#board").append(CUBE_ELEMENT);
        $("#board").css({
            width: 50 * boardLength,
            height: 50 * boardLength,
            "grid-template-columns": "repeat(" + boardLength + ", 1fr)",
        });


    })
}

export default InitBoard;

