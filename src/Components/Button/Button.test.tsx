import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom'
import FinDataContext from '../../Context/FinDataContext';
import {FinDataInterfaceType} from '../../Interface/FinDataInterfaceType';
import FinDataInterface from '../../Interface/FinDataInterface';
test('renders copyright Button', () => {
  const cpData = [{
    "ticker": "SIGMA",
    "price": 1854.19,
    "assetClass": "Equities"
  },]
const v = {
    cpData: cpData,
    data: cpData,
    setData: jest.fn()
};
  const providerProps = {
    value : v
  }
  render( <FinDataContext.Provider {...providerProps}><Button /></FinDataContext.Provider>);
    const buttonElement =  screen.getByRole('button', {
    name: /Clear Sorting/i
  });
  expect(buttonElement).toBeInTheDocument()
});
