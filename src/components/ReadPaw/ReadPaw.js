import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReadPaw.module.css';

const ReadPaw = (props) => {
  const { paw } = props;

  const renderIcon = () => {
    switch (paw.value) {
      case 'Mission First':
        return <img className={styles.icon} src={require('../../assets/mission-first.png')} />;
      case 'Perpetual Growth':
        return <img className={styles.icon} src={require('../../assets/perpetual-growth.png')} />;
      case 'Cherish Each Other':
        return <img className={styles.icon} src={require('../../assets/cherish-each-other.png')} />;
      case 'Always Innovate':
        return <img className={styles.icon} src={require('../../assets/always-innovate.png')} />;
      case 'Be Humble':
        return <img className={styles.icon} src={require('../../assets/be-humble.png')} />;
      case 'No Value':
        return <img className={styles.icon} src={require('../../assets/no-value.png')} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textLine}>
        <div className={styles.text}>Paws up to </div>
        <div className={styles.text}>{paw.name}</div>
        <div className={styles.text}> for </div>
        <div className={styles.text}>{paw.purpose}</div>
      </div>
      <div className={styles.valueRow}>
        <div className={styles.value}>{paw.value == undefined ? 'No Value' : paw.value}</div>
        {renderIcon()}
      </div>
    </div>
  );
};

ReadPaw.propTypes = {
  paw: PropTypes.object
};

export default ReadPaw;
