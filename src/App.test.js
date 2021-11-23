import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Yulia', () => {
  render(<App />);
  const header = screen.getByRole("heading", { name: "Hello Yulia" });
  expect(header).toBeInTheDocument();
});
