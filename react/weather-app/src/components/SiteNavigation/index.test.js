import React from 'react';
import { render } from '@testing-library/react';
import Component from './index';

test('renders site navigation', () => {
  const { getByText } = render(<Component />);
  const linkElement = getByText(/Get Weather/i);

  expect(linkElement).toBeInTheDocument();
});
