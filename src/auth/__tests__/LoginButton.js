import React from 'react';
import { LoginButton } from '../LoginButton';

import { renderWithProvider } from '../test-helper'

it('renders without crashing', () => {
  renderWithProvider(<LoginButton />)
});
