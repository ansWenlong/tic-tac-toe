import { useState } from 'react';
import './style.css';

function Square () {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue('X');
    console.log(`clicked! ${value}`);
  }

  return (
    <button 
      className='Square'
      onClick = {handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />     
      </div>            
    </div>
  )
}

export default Board;