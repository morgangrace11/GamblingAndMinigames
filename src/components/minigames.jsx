import React from 'react';
import { Link } from 'react-router-dom';
import Breakout from './breakoutMinigame/breakout.jsx';

const Minigames = () => {
    return (
        <div>
            <div>this is a title</div>
            <div><Link to='/'>this is an arrowwww</Link></div>
            <Breakout />
        </div>
    )
}

export default Minigames;
