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
        boardState={boardState}
      />
    )
  }
  return(
    <div className="points">
      {points}
    </div>
  )
}

const Row = ({rowNum, putStone, boardState}) => {
  const row = [];
  for (let i = 0; i < 9; i++) {
    row.push(
      <Square
        key={"square" + rowNum + i}
        rowNum={rowNum}
        columnNum={i}
        putStone={putStone}
        boardState={boardState}
      />
    )
  }
  return(
    <div className="row">{row}</div>
  )
}

const Square = ({rowNum, columnNum, putStone, boardState}) => (
  <div
    className="square"
    onClick={() => putStone(rowNum, columnNum)}
    onClick={() => clickBoard(boardState, rowNum, columnNum, putStone)}
  >
    <Stone
      rowNum={rowNum}
      columnNum={columnNum}
      boardState={boardState}
    />
  </div>
)

const Stone = ({rowNum, columnNum, boardState}) => {
  console.log(rowNum + ', ' + columnNum)
  console.log(boardState[0][0])
  if (boardState[rowNum][columnNum]) {
    const isBlack = boardState[rowNum][columnNum] == 'BLACK'
    const stoneClassName = isBlack ? "black-stone" : "white-stone";
    return (
      <div className={"stone" + " " + stoneClassName}/>
    )
  } else {
    return null
  }
}

const clickBoard = (boardState, rowNum, columnNum, putStone) => {
  if (!boardState[rowNum][columnNum]) {
    putStone(rowNum, columnNum)
  }
}

const mapStateToProps = (state) => ({
  boardState: state.boardState
})

const mapDispatchToProps = (dispatch) => {
  const putStone = AppActions.PutStoneAction
  return bindActionCreators(putStone, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Points)