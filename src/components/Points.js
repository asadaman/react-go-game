import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppActions from '../actions/AppActions'
import './Points.css'

const Points = ({putStone, addRecord, addCounter, boardState, record, counter, mode}) => {
  const displayedBoard = mode==='play' ? boardState : record[counter-1]
  const points = [];
  for (let i = 0; i < 9; i++) {
    points.push(
      <Row
        key={"row" + i}
        rowNum={i}
        putStone={putStone}
        addRecord={addRecord}
        addCounter={addCounter}
        rowState={displayedBoard[i]}
        mode={mode}
      />
    )
  }
  return(
    <div className="points">
      {points}
    </div>
  )
}

const Row = ({rowNum, putStone, addRecord, addCounter, rowState, mode}) => {
  const row = [];
  for (let i = 0; i < 9; i++) {
    row.push(
      <Square
        key={"square" + rowNum + i}
        rowNum={rowNum}
        columnNum={i}
        putStone={putStone}
        addRecord={addRecord}
        addCounter={addCounter}
        squareState={rowState[i]}
        mode={mode}
      />
    )
  }
  return(
    <div className="row">{row}</div>
  )
}

const Square = ({rowNum, columnNum, putStone, addRecord, addCounter, squareState, mode}) => {
  return (
    <div
      className="square"
      onClick={() => clickBoard(squareState, rowNum, columnNum, putStone, addRecord, addCounter, mode)}
    >
      <Stone
        state={squareState}
      />
    </div>
  )
}

const Stone = ({state}) => {
  if (state) {
    const stoneClassName = state === 'BLACK' ? "black-stone" : "white-stone";
    return (
      <div className={"stone " + stoneClassName} />
    )
  } else {
    return null
  }
}

const clickBoard = (state, rowNum, columnNum, putStone, addRecord, addCounter, mode) => {
  if (!state && mode==='play') {
    putStone(rowNum, columnNum)
    addRecord(rowNum, columnNum) 
    addCounter(1)
  }
}

const mapStateToProps = (state) => {
  return {
    boardState: state.boardState,
    record: state.record,
    counter: state.counter,
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  const putStone = (row, colomn) => AppActions.PutStoneAction(row, colomn)
  const addRecord = (row, colomn) => AppActions.AddRecordAction(row, colomn)
  const addCounter = (number) => AppActions.ChangeCounterAction(number)
  return bindActionCreators({putStone, addRecord, addCounter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Points)