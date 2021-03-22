import React, { useRef, useEffect } from 'react'

const Breakout = props => {

    const canvasRef = useRef(null);
    let canvas = null;
    let context = null;
    let x = null;
    let y = null;
    var dx = 2;
    var dy = -2;

    const drawBall = () => {
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI*2);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();

    }

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
    }

    useEffect(() => {
        canvas = canvasRef.current
        context = canvas.getContext('2d')
        x = canvas.width/2;
        y = canvas.height-30;
        //Our first draw
        context.beginPath();
        context.rect(20, 40, 50, 50);
        setInterval(draw, 10);
      }, [])
  
    return (
        <canvas id="myCanvas" ref={canvasRef} {...props}></canvas>
    )
}

export default Breakout;
