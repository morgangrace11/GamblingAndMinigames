import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WheelComponent from 'react-wheel-of-prizes';
import Wheel from './wheel.jsx';
import 'react-wheel-of-prizes/dist/index.css'

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
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCoinUpdate = this.handleCoinUpdate.bind(this);
        this.handleWinner = this.handleWinner.bind(this);
    }

    handleSubmit() {
        let black = document.getElementById("black").value;
        let green = document.getElementById("green").value;
        let blue = document.getElementById("blue").value;
        let yellow = document.getElementById("yellow").value;
        let purple = document.getElementById("purple").value;

        this.setState({bets: {
            'black': black,
            'green': green,
            'blue': blue,
            'yellow': yellow,
            'purple': purple,
        }})
        console.log(this.state.bets)
        console.log('You\'ve bet ' + black + ' on Black, ' + green + ' on Green, ' + blue + ' on Blue, ' + yellow + ' on Yellow, ' + purple + ' on Purple')
    }
    handleCoinUpdate(coins) {
        this.setState({
            'coins': this.state.coins + Number(coins),
        })
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
                <Wheel currentBets={this.state.bets} handleCoinUpdate={this.handleCoinUpdate} handleWinner={this.handleWinner}/>
                <div><Link to='/minigames'>arrowwww</Link></div>
            </div>
        )
    }
}

export default Home; 
