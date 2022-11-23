import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { useNavigate, useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './CycledPaws.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CycledPaws = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { numPaws } = state;
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
      <Confetti active={triggerConfetti} config={config}></Confetti>
      <div className={styles.text}>{numPaws} paws this week!</div>
      <button className={styles.fill} onClick={() => navigate('/')}>
        Submit More Paws
      </button>
    </>
  );
};

export default CycledPaws;
