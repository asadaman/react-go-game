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
  counter: 0,
  mode: 'play'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_STONE': {
      const boardState = getCurrentBoardState(state.boardState, action.payload.row, action.payload.colomn, state.isBlackNext)
      const isBlackNext = !state.isBlackNext
      const newState = Object.assign({}, state, {boardState, isBlackNext})
      return newState
    }
    case 'ADD_RECORD': {
      const currentBoard = getCurrentBoardState(state.boardState, action.payload.row, action.payload.colomn, !state.isBlackNext)
      const record = Array.from(state.record).concat([currentBoard])
      const newState = Object.assign({}, state, {record})
      return newState
    }
    case 'CHANGE_COUNTER': {
      const counter = state.counter + action.payload.number
      const newState = Object.assign({}, state, {counter})
      return newState
    }
    case "FINISH_GAME": {
      const mode = 'record'
      const newState = Object.assign({}, state, {mode})
      return newState
    }
    default:
      return state
  }
}

const getCurrentBoardState = (board, rowNum, colomnNum, isBlackNext) => {
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

export default reducer