import React, { Component } from 'react';
import './App.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { Container } from 'reactstrap'
import { Iterable } from 'immutable'

import AppHeader from './AppHeader'
import authReducer from './auth/reducer'

const reducer = combineReducers({
  auth: authReducer
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
          <AppHeader />
          <Container>
            some contents
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
