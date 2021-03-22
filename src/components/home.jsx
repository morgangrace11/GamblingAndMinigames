import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wheel from './wheel.jsx';

const Home = () => {
    const initialBets = {
        'black': 0,
        'green': 0,
        'blue': 0,
        'yellow': 0,
        'purple': 0, 
    }

    const [bets, setBets] = useState(initialBets);

    const handleSubmit = () => {
        let black = Number(document.getElementById("black").value) || 0;
        document.getElementById("black").value = 0;
        let green = Number(document.getElementById("green").value) || 0;
        document.getElementById("green").value = 0;
        let blue = Number(document.getElementById("blue").value) || 0;
        document.getElementById("blue").value = 0;
        let yellow = Number(document.getElementById("yellow").value) || 0;
        document.getElementById("yellow").value = 0;
        let purple = Number(document.getElementById("purple").value) || 0;
        document.getElementById("purple").value = 0;
        let currentCoins = black + green + blue + yellow + purple; 

        removeCoins(currentCoins);

        setBets({
            'black': black,
            'green': green,
            'blue': blue,
            'yellow': yellow,
            'purple': purple,
        })
    }

    const [coins, setCoins] = useState(100);
    const [error, setError] = useState('');

    const addCoins = currentCoins => {
        console.log(currentCoins)
        setCoins(prevCoins => prevCoins + currentCoins);

        setBets(initialBets); 
    }
    const removeCoins = currentCoins => {
        if (currentCoins > coins) {
            setError(`You don\'t have enough coins! Please redo your bets. You have ${coins} coins.`); 
        } else {
            setError('');
            console.log('here', currentCoins)
            setCoins(prevCoins => prevCoins - currentCoins) 
        }
    }

    const [winner, setWinner] = useState('');

    const handleWinner = winner => {
        setWinner(winner); 
    }

    return (
        <div>
            <div>this is a title</div>
            <div>You have {coins} coins!</div>
            <div>{error}</div>
            <div>{winner}</div>
            <div>{JSON.stringify(bets)}</div>
            <div>
                <form>
                    <label htmlFor="black">Bet on black for 2x your points</label>
                    <input id="black" type="number"  ></input>
                    <label htmlFor="green">Bet on green for 6x your points</label>
                    <input id="green" type="number" ></input>
                    <label htmlFor="blue">Bet on blue for 10x your points</label>
                    <input id="blue" type="number" ></input>
                    <label htmlFor="yellow">Bet on yellow for 10x your points</label>
                    <input id="yellow" type="number"  ></input>
                    <label htmlFor="purple">Bet on purple for 20x your points</label>
                    <input id="purple" type="number"  ></input>
                    <button id="submit" onClick={handleSubmit}>Submit your bets</button>
                </form>
            </div>
            <Wheel currentBets={bets} addCoins={addCoins} handleWinner={handleWinner}/>
            <div><Link to='/minigames'>arrowwww</Link></div>
        </div>
    )
}

export default Home; 
