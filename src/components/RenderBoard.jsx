import React from 'react';
import InitBoard from './initBoard';
import CreateBoard from './CreateBoard';

function RenderBoard() {
    return (
        <div id='board'>
            <CreateBoard />
            <InitBoard />
        </div>
    );
}

export default RenderBoard;