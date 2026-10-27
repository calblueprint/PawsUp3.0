import React from 'react';
import PropTypes from 'prop-types';
import ethanBird from '../../assets/halloween/ethan-bird.png';
import kevinBee from '../../assets/halloween/kevin-bee.png';
import styles from './HalloweenScene.module.css';

const HalloweenDecorations = ({ pawNumber }) => {
  // First five paws are quiet; double every seven paws, capped at 8 each.
  const flyingCount = pawNumber > 5 ? 2 ** Math.min(3, Math.floor((pawNumber - 6) / 7)) : 0;

  return (
    <div className={styles.haunting} aria-hidden="true">
      <div className={styles.moon} />
      {Array.from({ length: flyingCount }, (_, index) => (
        <div
          key={`ethan-${index}`}
          className={`${styles.flyingCharacter} ${styles.birdFlight}`}
          style={{
            '--flight-duration': `${19 + index * 3}s`,
            '--flight-delay': `${-index * 7 - 5}s`,
            '--flight-size': `${80 + (index % 3) * 30}px`,
            '--flight-offset': `${((index % 3) - 1) * 7}vh`
          }}
        >
          <img className={styles.birdFlap} src={ethanBird} alt="" />
        </div>
      ))}
      {Array.from({ length: flyingCount }, (_, index) => (
        <div
          key={`kevin-${index}`}
          className={`${styles.flyingCharacter} ${styles.beeFlight}`}
          style={{
            '--flight-duration': `${13 + index * 2}s`,
            '--flight-delay': `${-index * 5 - 8}s`,
            '--flight-size': `${55 + (index % 4) * 16}px`,
            '--flight-offset': `${((index % 4) - 2) * 6}vh`
          }}
        >
          <img className={styles.beeBuzz} src={kevinBee} alt="" />
        </div>
      ))}
      {Array.from({ length: 24 }, (_, index) => (
        <svg
          key={`bat-${index}`}
          className={styles.bat}
          viewBox="0 0 100 50"
          style={{
            '--x': `${(index * 37 + 3) % 100}%`,
            '--y': `${(index * 19 + 4) % 100}%`,
            '--size': `${24 + (index % 5) * 12}px`,
            '--delay': `${-index * 1.7}s`,
            '--duration': `${7 + (index % 6)}s`
          }}
        >
          <path d="M50 22 L44 10 L42 21 C27 8 13 7 1 3 C8 20 7 33 12 41 C23 29 29 34 34 43 C40 34 44 40 50 49 C56 40 60 34 66 43 C71 34 77 29 88 41 C93 33 92 20 99 3 C87 7 73 8 58 21 L56 10 Z" />
          <circle cx="47" cy="27" r="1.5" fill="#ff533d" />
          <circle cx="53" cy="27" r="1.5" fill="#ff533d" />
        </svg>
      ))}
      {[8, 88].map((left) => (
        <div key={left} className={styles.spider} style={{ left: `${left}%` }}>
          <span>🕷</span>
        </div>
      ))}
      {[7, 29, 72, 92].map((left, index) => (
        <div
          key={left}
          className={styles.eyes}
          style={{ left: `${left}%`, bottom: `${5 + (index % 2) * 9}%` }}
        />
      ))}
      <div className={styles.fog} />
      <div className={styles.graveyard}>☠ † 🪦 † ☠ † 🪦</div>
    </div>
  );
};

HalloweenDecorations.propTypes = { pawNumber: PropTypes.number.isRequired };
export default HalloweenDecorations;
