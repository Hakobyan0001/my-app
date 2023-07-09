import React from "react";
import { board, emptyCellsIndices } from "./CreateBoard";
import GetRandomColor from "./GetRandomColor";
import GetRandomIndex from "./GetRandomIndex";
let ballsCount = 3;

function CreateRandomBalls() {
    let i = 0;
    while (i < ballsCount) {
        const RANDOM_INDEX = GetRandomIndex();
        const RANDOM_COLOR = GetRandomColor();
        const BALL = {
            color: RANDOM_COLOR,
            isActive: false,
        };
        board[emptyCellsIndices[RANDOM_INDEX]] = BALL;
        emptyCellsIndices = emptyCellsIndices.filter(
            (el) => el !== emptyCellsIndices[RANDOM_INDEX]
        );

        i++;
    }
}

export default CreateRandomBalls;