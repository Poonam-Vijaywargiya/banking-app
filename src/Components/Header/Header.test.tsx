import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('when the score is above 60% ', () => {
    it('displays jpmc-logo', () => {
      const {getByAltText} = render(<Header/>)
      getByAltText("jpmc-logo"); // throws an expception if the element cannot be found
    })
  });