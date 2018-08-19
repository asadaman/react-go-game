export const PutStoneAction = (row, colomn) => {
  return {
    type: "PUT_STONE",
    payload: {row, colomn}
  }
}

export default {
  PutStoneAction
}