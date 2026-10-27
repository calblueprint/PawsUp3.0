import React from 'react';
import PropTypes from 'prop-types';
import ReadPaw from '../../components/ReadPaw/ReadPaw';
import justinImg from '../../assets/halloween/jkey-weird-stare.png';
import styles from './HalloweenPaw.module.css';

const halloweenValues = {
  'Mission First': 'Monsters First',
  'Perpetual Growth': 'Perpetual Ghosts',
  'Cherish Each Other': 'Trick Each Other',
  'Always Innovate': 'Always Levitate',
  'Be Humble': 'Be Haunting',
  'No Value': 'No Voodoo'
};

const nameImages = {
  jkeyo: justinImg,
  justink: justinImg,
  'justin keyo': justinImg
};

const HalloweenPaw = ({ paw }) => {
  const nameImage = nameImages[paw.name?.trim().toLowerCase()];
  const value = paw.value || 'No Value';
  const portrait = nameImage ? (
    <div
      key={paw.id || JSON.stringify([paw.name, paw.purpose, paw.value])}
      className={styles.imageStage}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.portrait}>
        <img className={styles.nameImage} src={nameImage} alt={paw.name} />
        <div className={styles.scanlines} aria-hidden="true" />
      </div>
      <span className={styles.whisper} aria-hidden="true">
        HE SEES YOU.
      </span>
    </div>
  ) : null;

  return (
    <ReadPaw
      paw={paw}
      valueLabel={halloweenValues[value] || value}
      extraContent={portrait}
      classNames={
        nameImage
          ? {
              container: styles.featured,
              textLine: styles.textLine,
              text: styles.text,
              valueRow: styles.valueRow,
              value: styles.value
            }
          : { text: styles.text, value: styles.value }
      }
    />
  );
};

HalloweenPaw.propTypes = { paw: PropTypes.object.isRequired };
export default HalloweenPaw;
