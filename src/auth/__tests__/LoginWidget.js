import React from 'react';
import { LoginWidget } from '../LoginWidget';

import { renderWithProvider } from '../test-helper'

it('renders without crashing', () => {
  renderWithProvider(<LoginWidget />)
});
