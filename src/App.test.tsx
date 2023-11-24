import React from 'react';
import { render, screen } from '@testing-library/react';
import MainFrame from './frontend/MainFrame';

test('renders learn react link', () => {
  render(<MainFrame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
