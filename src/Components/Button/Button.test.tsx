import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders copyright Button', () => {
  render(<Button />);
    const buttonElement =  screen.getByRole('button', {
    name: /Clear Sorting/i
  });
  expect(buttonElement).toBeInTheDocument()
});
