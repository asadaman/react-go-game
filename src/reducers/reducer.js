const getEmptyBoard = () => {
  let emptyBoard = Array(9) 
  for (let i=0; i<9; i++){
    emptyBoard[i] = Array(9).fill(null)
  }
  return emptyBoard
}

const initialState = {
  boardState: getEmptyBoard(), 
  isBlackNext: true,
  record: [],
}

const addStoneOnBogard = (board, rowNum, colomnNum, isBlackNext) => {
  const stone = isBlackNext ? 'BLACK' : 'WHITE'
  let newBoard = getEmptyBoard()
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      if (i===rowNum && j===colomnNum) {
        newBoard[i][j] = stone
      } else {
        newBoard[i][j] = board[i][j]
      }
    }
  }
  return newBoard
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_STONE':
      const boardState = addStoneOnBogard(state.boardState, action.payload.row, action.payload.colomn, state.isBlackNext)
      const isBlackNext = !state.isBlackNext
      const newState = Object.assign({}, {boardState: boardState, isBlackNext: isBlackNext})
      return newState
    default:
      return state
  }
}

export default reducer;