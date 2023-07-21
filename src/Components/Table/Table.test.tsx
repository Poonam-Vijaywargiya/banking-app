import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import '@testing-library/jest-dom'
import FinDataContext from '../../Context/FinDataContext';
import {FinDataInterfaceType} from '../../Interface/FinDataInterfaceType';
import FinDataInterface from '../../Interface/FinDataInterface';
describe('Render table element ', () => {
test('Get the table row length', () => {
  const cpData = [{
    "ticker": "SIGMA",
    "price": 1854.19,
    "assetClass": "Equities"
  },{
    "ticker": "TAU",
    "price": 2082.71,
    "assetClass": "Macro"
  },]
const v = {
    cpData: cpData,
    data: cpData,
    setData: jest.fn()
};
  const providerProps = {
    value : v
  }
  render( <FinDataContext.Provider {...providerProps}><Table /></FinDataContext.Provider>);
  const list = screen.getByTestId('tableTest')
  expect(list.querySelectorAll('tr').length).toBe(2)
});
})