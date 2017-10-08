import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const render = elm => ReactDOM.render(elm, document.createElement('div'))

const mockStore = createStore(() => {})
export const renderWithProvider = elm => (
  <Provider store={mockStore}>
    {elm}
  </Provider>
)
