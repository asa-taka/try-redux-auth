import React from 'react';
import { LogoutButton } from '../LogoutButton';

import { renderWithProvider } from '../test-helper'

it('renders without crashing', () => {
  renderWithProvider(<LogoutButton />)
});
