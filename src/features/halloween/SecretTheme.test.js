import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Secret from '../../components/Secret/Secret';

jest.mock('../../components/ReadPawsList/ReadPawsList', () => {
  const ReadPaw = require('../../components/ReadPaw/ReadPaw').default;
  const PropTypes = require('prop-types');
  const Reader = ({ PawComponent = ReadPaw }) => (
    <PawComponent paw={{ name: 'Justin Keyo', purpose: 'helping', value: 'Mission First' }} />
  );
  Reader.propTypes = { PawComponent: PropTypes.elementType };
  return Reader;
});

const originalFlag = process.env.REACT_APP_SECRET_HALLOWEEN_THEME;
const originalPassword = process.env.REACT_APP_PRESIDENT_SECRET_KEY;
afterEach(() => {
  if (originalFlag === undefined) delete process.env.REACT_APP_SECRET_HALLOWEEN_THEME;
  else process.env.REACT_APP_SECRET_HALLOWEEN_THEME = originalFlag;
  if (originalPassword === undefined) delete process.env.REACT_APP_PRESIDENT_SECRET_KEY;
  else process.env.REACT_APP_PRESIDENT_SECRET_KEY = originalPassword;
});

test.each(['true', 'false'])(
  'login stays normal and flag %s selects the reader after login',
  (flag) => {
    process.env.REACT_APP_SECRET_HALLOWEEN_THEME = flag;
    process.env.REACT_APP_PRESIDENT_SECRET_KEY = 'test-password';
    const { container } = render(<Secret />);
    expect(container.querySelectorAll('svg')).toHaveLength(0);
    expect(screen.queryByAltText('Justin Keyo')).not.toBeInTheDocument();
    fireEvent.change(container.querySelector('#input'), {
      target: { value: 'test-password' }
    });
    fireEvent.click(screen.getByText('Enter'));
    expect(
      screen.getByText(flag === 'true' ? 'Monsters First' : 'Mission First')
    ).toBeInTheDocument();
    if (flag === 'true') {
      expect(screen.getByAltText('Justin Keyo')).toBeInTheDocument();
    } else {
      expect(screen.queryByAltText('Justin Keyo')).not.toBeInTheDocument();
    }
    expect(container.querySelectorAll('svg')).toHaveLength(flag === 'true' ? 24 : 0);
    // No flying characters until reading reaches paw 6.
    expect(
      container.querySelectorAll('img[src*="ethan-bird"], img[src*="kevin-bee"]')
    ).toHaveLength(0);
  }
);
