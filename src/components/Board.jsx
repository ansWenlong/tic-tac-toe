import './style.css';

function Board() {
  return (
    <div>
      <div className='row'>
        <div className='Square'>1</div>
        <div className='Square'>2</div>
        <div className='Square'>3</div>
      </div>
      <div className='row'>
        <div className='Square'>4</div>
        <div className='Square'>5</div>
        <div className='Square'>6</div>
      </div>
      <div className='row'>
        <div className='Square'>7</div>
        <div className='Square'>8</div>
        <div className='Square'>9</div>
      </div>            
    </div>
  )
}

export default Board;