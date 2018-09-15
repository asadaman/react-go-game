export const PutStoneAction = (row, colomn) => {
  console.log('PutStoneAction')
  return {
    type: "PUT_STONE",
    payload: {
      row,
      colomn
    }
  }
}

export default {
  PutStoneAction
}