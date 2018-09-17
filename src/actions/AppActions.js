export const PutStoneAction = (row, colomn) => {
  return {
    type: "PUT_STONE",
    payload: {
      row,
      colomn
    }
  }
}

export const AddRecordAction = (row, colomn) => {
  return {
    type: "ADD_RECORD",
    payload: {
      row,
      colomn
    }
  }
}

export const ChangeCounterAction = (number) => {
  return {
    type: "CHANGE_COUNTER",
    payload: {
      number
    }
  }
}

export const FinishGameAction = () => {
  return {
    type: "FINISH_GAME",
  }
}

export default {
  PutStoneAction,
  AddRecordAction,
  ChangeCounterAction
}