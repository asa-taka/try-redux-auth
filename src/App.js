import React, { Component } from 'react';
import './App.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'
import * as auth from './providers/auth'

import { LoginWidget } from './components'

const reducer = combineReducers({
  auth: auth.reducer
})

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {}
    Object.keys(state).forEach(k => {
      const s = state[k]
      newState[k] = Iterable.isIterable(s) ? s.toJS() : s
    })
    return newState
  }
})

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <LoginWidget />
        </div>
      </Provider>
    )
  }
}

export default App;
