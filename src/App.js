import * as React from 'react';
import logo from './logo.svg'
import './App.css';
import blackStone from './images/black-stone.svg'
import whiteStone from './images/white-stone.svg'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(null),
      blackIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.blackIsNext ? true : false;
    this.setState({
      squares: squares,
      blackIsNext: !this.state.blackIsNext,
    });
  }

  renderBoard() {
    const board = [];
    for (let i = 0; i < 9; i++) {
      board.push(<div>{this.renderBoardRow(i)}</div>)
    }
    return(
      <div className="board">{board}</div>
    );
  }

  renderBoardRow(rowNum) {
    const row = [];
    for (let i = 0; i < 9; i++) {
      row.push(<div>{this.renderSquare(9*rowNum+i)}</div>)
    }
    return(
      <div className="board-row">{row}</div>
    );
  }

  renderStone(isBlack) {
    if(isBlack!=null){
      const imgSrc = isBlack ? blackStone : whiteStone;
    return (
      <img src={imgSrc} className="stone" alt="stone"/>
    );
    }
  }

  renderSquare(i) {
    return (
      <Square
	value={this.renderStone(this.state.squares[i])}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Go App</h2>
        </div>
        <div className="background">
	  {this.renderBoard()}
        </div>
      </div>
    );
  }
}

export default App;
