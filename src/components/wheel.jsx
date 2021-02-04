import React from 'react';
import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

class Wheel extends React.Component {   
    constructor(props) {
        super(props);

        this.state = {
            winner: null,
        }
        this.segments = ["20", "2", "6", "2", "10", "2", "15", "6", "15", "2", "10", "6", "2", "6"];
        this.segColors = ["#800080", "#fff", "#008000", "#fff",
        "#00FFFF", "#fff", "#FFD700", "#008000",
        "#FFD700", "#fff", "#00FFFF",  "#008000", "#fff",
        "#008000"];
        this.getWinner = this.getWinner.bind(this);
        this.onFinished = this.onFinished.bind(this);
    }
    getWinner = () => {
        let winnings = 0;
        let currWinner = {};
        if (this.state.winner === '2') {
            currWinner = {
                color: 'black',
                multiplier: 2
            };
        } else if (this.state.winner === '6') {
            currWinner = {
                color: 'green',
                multiplier: 6
            }; 
        } else if (this.state.winner === '10') {
            currWinner = {
                color: 'blue',
                multiplier: 10
            };
        } else if (this.state.winner === '15') {
            currWinner = {
                color: 'yellow',
                multiplier: 10
            };
        } if (this.state.winner === '20') {
            currWinner = {
                color: 'purple',
                multiplier: 20
            };
        }
        if (Number(this.props.currentBets[currWinner['color']]) > 0) {
            winnings = this.props.currentBets[currWinner['color']] * currWinner['multiplier'];
        }
        this.props.addCoins(winnings);
        this.props.handleWinner('You\'ve won ' + winnings + ' points at '+currWinner['multiplier']+'x the money you put in');
    }

    onFinished = (winner) => {
        this.setState({ 'winner': winner });
        this.getWinner();
    }
    render() {
        return (
            <div>
                <WheelComponent
                    segments = {this.segments}
                    segColors = {this.segColors}
                    onFinished={(winner)=>this.onFinished(winner)}
                    primaryColor='white'
                    contrastColor='black'
                    buttonText='Spin'
                    isOnlyOnce = {true}
                    />
            </div>
        )
    } 
}

export default Wheel; 
