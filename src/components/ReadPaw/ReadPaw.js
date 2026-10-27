import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReadPaw.module.css';

const ReadPaw = (props) => {
  // Optional display-only hooks; normal rendering uses the original values/styles.
  const { paw, valueLabel, extraContent, classNames = {} } = props;
  const className = (name) => classNames[name]
    ? `${styles[name]} ${classNames[name]}`
    : styles[name];

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
    <div className={className('container')}>
      <div className={className('textLine')}>
        <div className={className('text')}>Paws up to </div>
        <div className={className('text')}>{paw.name}</div>
        <div className={className('text')}> for </div>
        <div className={className('text')}>{paw.purpose}</div>
      </div>
      {extraContent}
      <div className={className('valueRow')}>
        <div className={className('value')}>{valueLabel ?? (paw.value == undefined ? 'No Value' : paw.value)}</div>
        {renderIcon()}
      </div>
    </div>
  );
};

ReadPaw.propTypes = {
  paw: PropTypes.object,
  valueLabel: PropTypes.string,
  extraContent: PropTypes.node,
  classNames: PropTypes.object
};

export default ReadPaw;
