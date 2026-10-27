// CRA environment flags are embedded at build time. Halloween is opt-in only.
export const isSecretHalloweenEnabled = () =>
  process.env.REACT_APP_SECRET_HALLOWEEN_THEME === 'true';
