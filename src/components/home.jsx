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
    const [winner, setWinner] = useState('');
    const [coins, setCoins] = useState(100);
    const [error, setError] = useState('');
    
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         bets: {
    //             'black': 0,
    //             'green': 0,
    //             'blue': 0,
    //             'yellow': 0,
    //             'purple': 0, 
    //         },
    //         winner: '',
    //         coins: 100,
    //         error: '',
    //     }

    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.addCoins = this.addCoins.bind(this);
    //     this.removeCoins = this.removeCoins.bind(this);
    //     this.handleWinner = this.handleWinner.bind(this);
    // }

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

    const addCoins = currentCoins => {
        // setCoins(coins + currentCoins)
        setCoins(prevCoins => prevCoins + currentCoins) //Here we pass a function in to the setter to gain access to the previous state 
        setBets(initialBets); //We are not spreading because in this case we want to reset the bets back to zero
        // this.setState({
        //     'coins': this.state.coins + coins,
        //     bets: {
        //         'black': 0,
        //         'green': 0,
        //         'blue': 0,
        //         'yellow': 0,
        //         'purple': 0, 
        //     },
        // })
    }
    const removeCoins = currentCoins => {
        if (currentCoins > coins) {
            setError(`You don\'t have enough coins! Please redo your bets. You have ${coins} coins.`); //String value so we just replace
            // setBets(initialBets)
            // this.setState({
            //     error: 'You don\'t have enough coins! Please redo your bets.',
            //     bets: {
            //         'black': 0,
            //         'green': 0,
            //         'blue': 0,
            //         'yellow': 0,
            //         'purple': 0, 
            //     },
            // })
        } else {
            setError('');
            setCoins(prevCoins => prevCoins - currentCoins) //Here we pass a function in to the setter to gain access to the previous state 
            // this.setState({
            //     'coins': this.state.coins - coins,
            //     error: '',
            // })
        }
    }
    const handleWinner = winner => {
        setWinner(winner); //This is a string so we just replace. No neeed to copy anything from prior state
    }

    //With this I was trying to set up a onchange to update bets without having to submit the bets. This caused adverse effects when going to 
    //delete the coins from the current coins since it would delete everytime a number was typed in not when the whole number was done.
    //Relayed back to the on submit click to handle this functionality. 

    // const handleBetsChange = (e, color) => {
    //     setBets({...bets, [color]: e.target.value});
    //     removeCoins(e.target.value);
    // }
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
