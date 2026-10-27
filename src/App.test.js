import { render, screen } from '@testing-library/react';
import App from './App';
import { getPaws, getMembers, getTeams, getLeaderboardEntries } from './utils/api';

// Chart rendering is outside these route smoke tests.
jest.mock('chart.js', () => ({
  Chart: { register: jest.fn() },
  ArcElement: {},
  Tooltip: {},
  Legend: {}
}));

// App tests use fixtures, never a live Airtable account.
jest.mock('./utils/api', () => ({
  getPaws: jest.fn().mockResolvedValue([]),
  getMembers: jest.fn().mockResolvedValue([]),
  getTeams: jest.fn().mockResolvedValue([]),
  getLeaderboardEntries: jest.fn().mockResolvedValue([]),
  submitPaws: jest.fn(),
  updatePaws: jest.fn()
}));

beforeEach(() => {
  [getPaws, getMembers, getTeams, getLeaderboardEntries].forEach((fetch) => {
    fetch.mockResolvedValue([]);
  });
});

afterEach(() => window.history.replaceState({}, '', '/'));

test('home route loads the paw submission form', async () => {
  window.history.replaceState({}, '', '/');
  render(<App />);
  expect(await screen.findByRole('button', { name: 'Submit 1 Paw' })).toBeDisabled();
});

test('secret route loads the normal login screen', () => {
  window.history.replaceState({}, '', '/secret');
  const { container } = render(<App />);
  expect(container.querySelector('input[type="password"]')).toBeInTheDocument();
  expect(screen.getByText('Enter')).toBeInTheDocument();
  expect(container.querySelectorAll('svg')).toHaveLength(0);
});
