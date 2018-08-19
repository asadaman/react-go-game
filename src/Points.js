import React from 'react';
import './Points.css'

const Points = ({clickBoard, boardState}) => {
  const points = [];
  for (let i = 0; i < 9; i++) {
    points.push(
      <Row
        key={"row" + i}
        rowNum={i}
        clickBoard={clickBoard}
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

const Row = ({rowNum, clickBoard, boardState}) => {
  const row = [];
  for (let i = 0; i < 9; i++) {
    row.push(
      <Square
        key={"square" + rowNum + i}
        rowNum={rowNum}
        columnNum={i}
        clickBoard={clickBoard}
        boardState={boardState}
      />
    )
  }
  return(
    <div className="row">{row}</div>
  )
}

const Square = ({rowNum, columnNum, clickBoard, boardState}) => (
  <div
    className="square"
    onClick={() => clickBoard(rowNum, columnNum)}
  >
    <Stone
      rowNum={rowNum}
      columnNum={columnNum}
      boardState={boardState}
    />
  </div>
)

const Stone = ({rowNum, columnNum, boardState}) => {
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

export default Points