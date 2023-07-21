import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list of banking data', async () => {
  render(<App />);
  // const list = await screen.findAllByRole('');
  // expect(linkElement).toBeInTheDocument();
});
