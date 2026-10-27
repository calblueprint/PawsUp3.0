import React from 'react';
import { render, screen } from '@testing-library/react';
import ReadPaw from '../../components/ReadPaw/ReadPaw';
import HalloweenPaw from './HalloweenPaw';

test('Halloween presentation changes labels and portrait without changing paw data', () => {
  const paw = { name: 'Justin Keyo', purpose: 'helping', value: 'Mission First' };
  const { rerender } = render(<ReadPaw paw={paw} />);
  expect(screen.getByText('Mission First')).toBeInTheDocument();
  expect(screen.queryByAltText('Justin Keyo')).not.toBeInTheDocument();
  rerender(<HalloweenPaw paw={paw} />);
  expect(screen.getByText('Monsters First')).toBeInTheDocument();
  expect(screen.getByAltText('Justin Keyo')).toBeInTheDocument();
  expect(paw.value).toBe('Mission First');
  rerender(<ReadPaw paw={paw} />);
  expect(screen.getByText('Mission First')).toBeInTheDocument();
  expect(screen.queryByAltText('Justin Keyo')).not.toBeInTheDocument();
});

test.each(['jkeyo', 'justink', 'justin keyo', '  JKEYO  ', 'JustinK', 'JUSTIN KEYO'])(
  'shows the portrait for an allowed name: %s',
  (name) => {
    render(<HalloweenPaw paw={{ name }} />);
    expect(screen.getByAltText(name.trim())).toBeInTheDocument();
  }
);

test.each(['Justin', 'justin key', 'jkeyo extra', '', undefined])(
  'hides the portrait for other names: %s',
  (name) => {
    const { container } = render(<HalloweenPaw paw={{ name }} />);
    expect(container.querySelector('img[src*="jkey-weird-stare"]')).not.toBeInTheDocument();
  }
);
