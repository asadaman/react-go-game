import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppActions from '../actions/AppActions'
import './Points.css'

const Points = ({putStone, boardState}) => {
  const points = [];
  for (let i = 0; i < 9; i++) {
    points.push(
      <Row
        key={"row" + i}
        rowNum={i}
        putStone={putStone}
        rowState={boardState[i]}
      />
    )
  }
  return(
    <div className="points">
      {points}
    </div>
  )
}

const Row = ({rowNum, putStone, rowState}) => {
  const row = [];
  for (let i = 0; i < 9; i++) {
    row.push(
      <Square
        key={"square" + rowNum + i}
        rowNum={rowNum}
        columnNum={i}
        putStone={putStone}
        squareState={rowState[i]}
      />
    )
  }
  return(
    <div className="row">{row}</div>
  )
}

const Square = ({rowNum, columnNum, putStone, squareState}) => (
  <div
    className="square"
    onClick={() => clickBoard(squareState, rowNum, columnNum, putStone)}
  >
    <Stone
      rowNum={rowNum}
      columnNum={columnNum}
      state={squareState}
    />
  </div>
)

const Stone = ({state}) => {
  if (state) {
    const stoneClassName = state == 'BLACK' ? "black-stone" : "white-stone";
    return (
      <div className={"stone" + " " + stoneClassName}/>
    )
  } else {
    return null
  }
}

const clickBoard = (state, rowNum, columnNum, putStone) => {
  if (!state) {
    putStone(rowNum, columnNum)
  }
}

const mapStateToProps = (state) => {
  return {
    boardState: state.boardState
  }
}

const mapDispatchToProps = (dispatch) => {
  const putStone = (row, colomn) => AppActions.PutStoneAction(row, colomn)
  return bindActionCreators({putStone}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Points)