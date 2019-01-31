import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'

// component

const CounterItem = ({ value, increment }) => (

)

const Counter = ({ value, increment }) => (
  <Fragment>
    <button onClick={() => increment()}>
      Incrementar
    </button>
    <h1>{value}</h1>
  </Fragment>
)

const ConnectedCounter = connect(
  (state, ownProps) => ({
    value: state.counter[ownProps.id]
  }),
  (dispatch, ownProps) => ({
    increment: () => dispatch({
      type: 'INCREMENT', payload: { id: ownProps.id }
    })
  })
)(Counter)

// redux

function counter(state = {}, action) {
  const { payload: { id } } = action
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, [id]: (state[id] || 0) + 1 }
    default:
      return state
  }
}
const store = createStore(combineReducers({ counter }))

// initial mount
window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedCounter id='uno'/>
      <ConnectedCounter id='dos'/>
      <ConnectedCounter id='tres'/>
    </Provider>
    document.getElementById('app')
  )
}
