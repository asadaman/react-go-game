import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ChangeCounterAction, FinishGameAction } from '../actions/AppActions'

const RecordControllPanel = ({counter, mode, changeCounter, finishGame}) => {
  return (
    <div>
      <Counter counter={counter} />
      <ControllRecordButtons
        mode={mode}
        changeCounter={changeCounter}
        finishGame={finishGame}
      />
    </div>
  )
}

const Counter = ({counter}) => {
  return (
    <div>{"count : " + counter}</div>
  )
}

const ControllRecordButtons = ({mode, changeCounter, finishGame}) => {
  if (mode==='play'){
    return (
      <button onClick={() => finishGame()}>
        終局
      </button>
    )
  } else {
    return (
      <div>
        <button onClick={() => changeCounter(-1)}>
          back
        </button>
        <button onClick={() => changeCounter(1)}>
          forward
        </button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  const changeCounter = (number) => ChangeCounterAction(number)
  const finishGame = () => FinishGameAction()
  return bindActionCreators({changeCounter, finishGame}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordControllPanel)
