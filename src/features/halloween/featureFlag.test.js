import { isSecretHalloweenEnabled } from './featureFlag';

const originalFlag = process.env.REACT_APP_SECRET_HALLOWEEN_THEME;
afterEach(() => {
  if (originalFlag === undefined) delete process.env.REACT_APP_SECRET_HALLOWEEN_THEME;
  else process.env.REACT_APP_SECRET_HALLOWEEN_THEME = originalFlag;
  jest.useRealTimers();
});

test.each(['true', 'false', 'auto', '', 'invalid', undefined])(
  'only an explicit true enables Halloween (flag: %s)',
  (flag) => {
    jest.useFakeTimers().setSystemTime(new Date(2026, 9, 31));
    if (flag === undefined) delete process.env.REACT_APP_SECRET_HALLOWEEN_THEME;
    else process.env.REACT_APP_SECRET_HALLOWEEN_THEME = flag;
    expect(isSecretHalloweenEnabled()).toBe(flag === 'true');
  }
);
