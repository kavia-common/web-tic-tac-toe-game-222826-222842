import { render, screen } from '@testing-library/react';
import App from './App';

test('renders status bar and restart button', () => {
  render(<App />);
  expect(screen.getByText(/retro tic tac toe/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /restart/i })).toBeInTheDocument();
});
