import React from 'react';
import InitBoard from './initBoard';
import CreateBoard from './CreateBoard';
import GetRandomIndex from './GetRandomIndex';

function RenderBoard() {
    return (
        <div id='board'>
            <CreateBoard />
            getRandomIndex();
            <InitBoard />
        </div>
    );
}

export default RenderBoard;