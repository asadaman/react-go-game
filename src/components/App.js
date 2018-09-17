import * as React from 'react'
import './App.css'
import AppHeader from './AppHeader'
import Board from './Board'
import BoardLines from './BoardLines'
import Points from './Points'
import RecordControlPanel from './RecordControlPanel'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Board />
        <BoardLines />
        <Points />
        <RecordControlPanel />
      </div>
    )
  }
}

export default App
