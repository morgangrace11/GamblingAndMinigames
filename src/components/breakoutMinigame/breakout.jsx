import React, { useRef, useEffect } from 'react'

class Breakout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            canvasRef: useRef(null),
            canvas: null,
            context: null,
            x: null,
            y: null,
            dx: 2,
            dy: -2
        }
    }

    drawBall() {
        this.state.context.beginPath();
        this.state.context.arc(x, y, 10, 0, Math.PI*2);
        this.state.context.fillStyle = "#0095DD";
        this.state.context.fill();
        this.state.context.closePath();

    }

    draw() {
        this.state.context.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
        drawBall();
        this.state.x += dx;
        this.state.y += dy;
    }

    componentDidMount() {
        this.state.canvas = this.state.canvasRef.current
        this.state.context = canvas.getContext('2d')
        this.state.x = canvas.width/2;
        this.state.y = canvas.height-30;
        this.state.context.beginPath();
        this.state.context.rect(20, 40, 50, 50);
        setInterval(this.draw, 10);
    }

    render() {
        return (
            <canvas id="myCanvas" ref={this.state.canvasRef} {...this.props}></canvas>
        )
    }
}

export default Breakout;
