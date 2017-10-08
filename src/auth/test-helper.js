import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export * from '../test-helper'

const mockStore = createStore(() => {})
export const renderWithProvider = elm => (
  <Provider store={mockStore}>
    {elm}
  </Provider>
)
