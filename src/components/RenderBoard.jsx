import React from 'react';
import InitBoard from './initBoard';
import CreateBoard from './CreateBoard';

function RenderBoard() {
    CreateBoard();
    return (
        <div className='container'>
            <InitBoard />
        </div>
    );
}

export default RenderBoard;