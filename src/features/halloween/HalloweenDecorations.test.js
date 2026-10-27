import React from 'react';
import { render } from '@testing-library/react';
import HalloweenDecorations from './HalloweenDecorations';

test.each([
  [1, 0],
  [5, 0],
  [6, 1],
  [12, 1],
  [13, 2],
  [20, 4],
  [26, 4],
  [27, 8],
  [34, 8],
  [41, 8],
  [1000, 8]
])('paw %i renders %i flying characters of each kind', (pawNumber, count) => {
  const { container } = render(<HalloweenDecorations pawNumber={pawNumber} />);
  expect(container.querySelectorAll('img[src*="ethan-bird"]')).toHaveLength(count);
  expect(container.querySelectorAll('img[src*="kevin-bee"]')).toHaveLength(count);
});
