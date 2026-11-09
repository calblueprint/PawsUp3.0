import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./utils/api', () => ({
  getPaws: async () => [],
  getMembers: async () => [],
  getTeams: async () => [],
  getLeaderboardEntries: async () => [],
  submitPaws: jest.fn(),
  updatePaws: jest.fn()
}));

test('renders the home page with one paw ready to edit', async () => {
  window.history.replaceState({}, '', '/');
  render(<App />);

  const submitButton = await screen.findByRole('button', { name: /submit 1 paw/i });
  expect(submitButton).toBeDisabled();
  expect(screen.getByText('Paws up to')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /no value/i })).toBeInTheDocument();
});
