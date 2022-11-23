import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SubmittedPaws.module.css';

const SubmittedPaws = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { numPaws, totalPaws } = state;
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  useEffect(() => {
    explode();
  }, []);

  const explode = () => {
    setTriggerConfetti(true);
    setTimeout(() => setTriggerConfetti(false), 1000);
  };

  const config = {
    angle: '250',
    spread: 360,
    startVelocity: '61',
    elementCount: '156',
    dragFriction: '0.07',
    duration: '4610',
    stagger: '1',
    width: '18px',
    height: '18px',
    perspective: '858px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
  };

  return (
    <>
      <div className={styles.numPawsRow}>
        <img className={styles.paw} src={require('../../assets/paw.png')}></img>
        <div className={styles.numPaws}>{totalPaws}</div>
      </div>
      <Confetti active={triggerConfetti} config={config}></Confetti>
      <div className={styles.text}>
        Thanks for submitting {numPaws} paw{numPaws > 1 && 's'}!
      </div>
      <button className={styles.fill} onClick={() => navigate('/')}>
        Submit More
      </button>
    </>
  );
};

export default SubmittedPaws;
