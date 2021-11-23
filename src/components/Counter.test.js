import React from "react";

import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Counter from './Counter';

test('renders the counter button', () => {
  render(<Counter />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toBeInTheDocument();
});

test('that button clicks and increments', () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('counter');
    fireEvent.click(counterElement);
    expect(counterElement.textContent).toBe('1');
    fireEvent.click(counterElement);
    expect(counterElement.textContent).toBe('2');
})