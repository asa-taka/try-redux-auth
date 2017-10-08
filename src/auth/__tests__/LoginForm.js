import React from 'react';
import { LoginForm, LoginFormWithStore } from '../LoginForm';
import { render, renderWithProvider } from '../test-helper'

it('renders without crashing', () => {
  render(<LoginForm />)
});

it('renders without crashing', () => {
  renderWithProvider(<LoginFormWithStore />)
});
