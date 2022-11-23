import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './CycledPaws.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CycledPaws = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { numPaws } = state;

  const data = {
    datasets: [
      {
        label: '# Submitted',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className={styles.screen}>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <div className={styles.text}>{numPaws} paws this week</div>
          <div>blue</div>
          <div>red</div>
        </div>
        <div className={styles.rightCol}>
          <Pie data={data} />
        </div>
      </div>
      <button className={styles.fill} onClick={() => navigate('/')}>
        Submit More Paws
      </button>
      {/* <div className={styles.pie}></div> */}
    </div>
  );
};

export default CycledPaws;
