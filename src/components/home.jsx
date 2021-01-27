import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

const Home = () => {
    const segments = ["20", "2", "6", "2", "10", "2", "15", "6", "15", "2", "10", "6", "2", "6"];
    const segColors = ["#800080", "#000000", "#008000", "#000000",
    "#00FFFF", "#000000", "#FFD700", "#008000",
    "#FFD700", "#000000", "#00FFFF",  "#008000", "#000000",
    "#008000"];
    const onFinished = (winner) => {
      console.log('You\'ve won ' + Number(winner) * 2 + ' points at 2x the money you put in');
    }
    return (
        <div>
            <div>this is a title</div>
            <WheelComponent
                segments = {segments}
                segColors = {segColors}
                onFinished={(winner)=>onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce = {true}/>
            <div>
                <form>
                    <label htmlFor="black">Bet on black for 2x your points</label>
                    <input id="black" type="number"></input>
                    <label htmlFor="green">Bet on green for 6x your points</label>
                    <input id="green" type="number"></input>
                    <label htmlFor="blue">Bet on blue for 10x your points</label>
                    <input id="blue" type="number"></input>
                    <label htmlFor="yellow">Bet on yellow for 10x your points</label>
                    <input id="yellow" type="number"></input>
                    <label htmlFor="purple">Bet on purple for 20x your points</label>
                    <input id="purple" type="number"></input>
                    <button id="submit">Submit your bets</button>
                </form>
            </div>
            <div><Link to='/minigames'>arrowwww</Link></div>
        </div>
    )
}

export default Home; 
