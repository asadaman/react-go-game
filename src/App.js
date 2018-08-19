import * as React from 'react';
import './App.css';
import AppHeader from './AppHeader'
import Board from './Board'
import BoardLines from './BoardLines'
import Points from './Points'

const BLACK = 'BLACK'
const WHITE = 'WHITE'

const getEmptyBoard = () => {
  let emptyBoard = Array(9) 
  for (let i=0; i<9; i++){
    emptyBoard[i] = Array(9).fill(null)
  }
  return emptyBoard
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: getEmptyBoard(),
      isBlackNext: true,
    };
    this.clickBoard = this.clickBoard.bind(this)
  }

  clickBoard(row, colomn) {
    let boardState = []
    for (let i=0; i<9; i++) {
      boardState.push(this.state.boardState[i].slice())
    }
    boardState[row][colomn] = this.state.blackIsNext ? BLACK : WHITE;
    this.setState({
      boardState: boardState,
      blackIsNext: !this.state.blackIsNext,
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Board />
        <BoardLines />
        <Points
          clickBoard={this.clickBoard}
          boardState={this.state.boardState}
        />
      </div>
    )
  }
}

export default App;
