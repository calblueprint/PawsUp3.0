import React, { useState, useEffect } from 'react';
import { getPaws, updatePaws } from '../../utils/api';
import SyncLoader from 'react-spinners/SyncLoader';
import { useNavigate } from 'react-router-dom';

import ReadPaw from '../ReadPaw/ReadPaw';

import styles from './ReadPawsList.module.css';

const ReadPawsList = () => {
  const navigate = useNavigate();
  const [pawsList, setPawsList] = useState([
    { name: 'Jacob', purpose: 'default', value: 'Mission First' }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDown, setAnimateDown] = useState(false);
  const [animateUp, setAnimateUp] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaws().then((paws) => {
      setPawsList(paws);
      document.body.addEventListener('keydown', function (e) {
        e = e || window.event;
        switch (e.key) {
          case 'ArrowUp':
            setCurrentIndex((newindex) => {
              if (newindex > 0) {
                setAnimateUp(true);
                return newindex - 1;
              } else {
                return newindex;
              }
            });
            break;
          case 'ArrowDown':
            setCurrentIndex((newindex) => {
              console.log(newindex);
              if (newindex + 1 < paws.length) {
                setAnimateDown(true);
                return newindex + 1;
              } else {
                return newindex;
              }
            });
            break;
        }
      });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <SyncLoader color="#0078E8" />;
  }

  if (pawsList.length == 0) {
    return (
      <div className={styles.screen}>
        no paws rn
        <div onClick={() => navigate('/')}>Submit More</div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.numPawsRow}>
        <img className={styles.pawIcon} src={require('../../assets/paw.png')}></img>
        <div className={styles.numPaws}>{pawsList.length}</div>
      </div>
      <div className={styles.screen}>
        {currentIndex != 0 && (
          <div
            id="keyup"
            className={styles.topbutton}
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setAnimateUp(true);
              }
            }}>
            <img src={require('../../assets/angle-up.png')} className={styles.caret}></img>
          </div>
        )}
        {currentIndex < pawsList.length - 1 && (
          <div
            id="keydown"
            className={styles.bottombutton}
            onClick={() => {
              if (currentIndex + 1 < pawsList.length) {
                setCurrentIndex(currentIndex + 1);
                setAnimateDown(true);
              }
            }}>
            <img src={require('../../assets/angle-down.png')} className={styles.caret}></img>
          </div>
        )}
        <div className={styles.container}>
          {pawsList.length > 0 && currentIndex > 0 && (
            <div
              className={
                animateDown
                  ? styles.animatingPrevPawDown
                  : animateUp
                  ? styles.animatingPrevPawUp
                  : styles.prevPaw
              }>
              <ReadPaw paw={pawsList[currentIndex - 1]} />
            </div>
          )}
          {pawsList.length > 0 && (
            <div
              onAnimationEnd={() => {
                setAnimateUp(false);
                setAnimateDown(false);
              }}
              className={
                animateDown
                  ? styles.animatingPawDown
                  : animateUp
                  ? styles.animatingPawUp
                  : styles.paw
              }>
              <ReadPaw paw={pawsList[currentIndex]} />
            </div>
          )}
          {currentIndex == pawsList.length - 1 && (
            <div
              onClick={() => {
                updatePaws(),
                  navigate('/cycled', { state: { numPaws: pawsList.length } }),
                  setPawsList([]);
              }}
              className={styles.submitButton}>
              Wrap Up Paws Cycle
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReadPawsList;
