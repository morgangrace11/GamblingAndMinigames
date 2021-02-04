import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wheel from './wheel.jsx';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bets: {
                'black': 0,
                'green': 0,
                'blue': 0,
                'yellow': 0,
                'purple': 0, 
            },
            winner: '',
            coins: 100,
            error: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addCoins = this.addCoins.bind(this);
        this.removeCoins = this.removeCoins.bind(this);
        this.handleWinner = this.handleWinner.bind(this);
    }

    handleSubmit() {
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
        let coins = black + green + blue + yellow + purple; 
        this.removeCoins(coins);
        this.setState({bets: {
            'black': black,
            'green': green,
            'blue': blue,
            'yellow': yellow,
            'purple': purple,
        }})
    }
    addCoins(coins) {
        this.setState({
            'coins': this.state.coins + coins,
            bets: {
                'black': 0,
                'green': 0,
                'blue': 0,
                'yellow': 0,
                'purple': 0, 
            },
        })
    }
    removeCoins(coins) {
        if (coins > this.state.coins) {
            this.setState({
                error: 'You don\'t have enough coins! Please redo your bets.',
                bets: {
                    'black': 0,
                    'green': 0,
                    'blue': 0,
                    'yellow': 0,
                    'purple': 0, 
                },
            })
        } else {
            this.setState({
                'coins': this.state.coins - coins,
                error: '',
            })
        }
    }
    handleWinner(winner) {
        this.setState({
            'winner': winner,
        })
    }
    render() {
        return (
            <div>
                <div>this is a title</div>
                <div>You have {this.state.coins} coins!</div>
                <div>{this.state.error}</div>
                <div>{this.state.winner}</div>
                
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
                        <button id="submit" onClick={this.handleSubmit}>Submit your bets</button>
                    </form>
                </div>
                <Wheel currentBets={this.state.bets} addCoins={this.addCoins} handleWinner={this.handleWinner}/>
                <div><Link to='/minigames'>arrowwww</Link></div>
            </div>
        )
    }
}

export default Home; 
