import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <div className='button' onClick={props.newGame}>New Game</div>
            <div className='buttons'>
                <div className='button' onClick={() => { console.log("left") }}>left</div>
                <div className='button' onClick={() => { console.log("up") }}>up</div>
                <div className='button' onClick={() => { console.log("down") }}>down</div>
                <div className='button' onClick={() => { console.log("right") }}>right</div>
            </div>
            <div className='buttons'>
                <div className='button' onClick={ props.decSize }>Size -</div>
                <div>Size: {props.size}</div>
                <div className='button' onClick={props.incSize}>Size +</div>
            </div>
        </div>
    );
};

export default Buttons;