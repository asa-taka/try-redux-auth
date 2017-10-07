import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from '../LoginButton';

const render = elm => ReactDOM.render(elm, document.createElement('div'))

import { Provider } from 'react-redux'

const renderWithProvider = elm => (
  <Provider>
    {elm}
  </Provider>
)

it('renders without crashing', () => {
  renderWithProvider(<LoginButton />)
});
