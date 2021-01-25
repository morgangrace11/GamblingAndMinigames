import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Winwheel from 'winwheel';

const Home = () => {
    useEffect(() => {
        let theWheel = new Winwheel({
            'numSegments' : 4,
            'textOrientation' : 'vertical',
            'segments'    :
    
            [
                {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
                {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
                {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
                {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
            ],
            'animation' :                   // Note animation properties passed in constructor parameters.
        {
            'type'     : 'spinToStop',  // Type of animation.
            'duration' : 5,             // How long the animation is to take in seconds.
            'spins'    : 8              // The number of complete 360 degree rotations the wheel is to do.
        }
            });
            var spin = document.getElementById('spin');
            spin.addEventListener('click', function (event) {
                theWheel.startAnimation()
            });
        
    })

    return (
        <div>
            <div>this is a title</div>
            <canvas id='canvas' width='880' height='300'>
                Canvas not supported, use another browser.
            </canvas>
            <button id="spin">Spin</button>
            <div><Link to='/minigames'>arrowwww</Link></div>
        </div>
    )
}

export default Home; 
