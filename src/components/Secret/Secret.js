import React, { useState, useEffect } from 'react';

import ReadPawsList from '../ReadPawsList/ReadPawsList';

const Secret = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [pw, setpw] = useState('');

  useEffect(() => {
    var input = document.getElementById('input');
    input.addEventListener('keypress', function (event) {
      if (event.key === 'Enter' && !authenticated) {
        event.preventDefault();
        document.getElementById('submit').click();
      }
    });
  }, []);

  const authenticate = () => {
    if (pw == process.env.REACT_APP_PRESIDENT_SECRET_KEY) {
      setAuthenticated(true);
    }
  };

  return (
    <>
      {!authenticated && (
        <input type="password" id="input" onChange={(e) => setpw(e.target.value)}></input>
      )}
      {!authenticated && (
        <div onClick={() => authenticate()} id="submit" className="submitButton">
          Enter
        </div>
      )}
      {authenticated && <ReadPawsList />}
    </>
  );
};

export default Secret;
