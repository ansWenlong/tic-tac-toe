import { useState } from 'react';
import './style.css';

function Square ({value, onSquareClick}) {

  return (
    <button 
      className='Square'
      onClick = {onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculatWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || calculatWinner(squares)) {
      return;
    }
    
    const nextSquares = squares.slice(); //Make a copy of squares
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }    
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  return (
    <div >
      <div className="status">{status}</div>
      <div className='board'>
        <div className='row'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/> {/*Need to use Arrow function here to only call the handleClick when clicked*/}
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className='row'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className='row'>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>     
        </div>
        <div></div>
      </div>
                  
    </div>
  )
}

function calculatWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i=0; i<lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a]===squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null; 
}

export default Board;