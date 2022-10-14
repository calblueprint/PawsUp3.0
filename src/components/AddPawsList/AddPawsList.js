import React, { useState } from 'react';
import AddPaw from '../AddPaw/AddPaw';

import styles from './AddPawsList.module.css';
import { submitPaws } from '../../utils/api';

const AddPawsList = () => {
  const [pawsList, setPawsList] = useState([
    {
      id: 0,
      name: '',
      purpose: '',
      value: 'No Value'
    }
  ]);

  const addNewPaw = () => {
    let newList = [...pawsList];
    newList.unshift({
      id: pawsList.length,
      name: '',
      purpose: '',
      value: 'No Value'
    });
    setPawsList(newList);
  };

  const updatePaw = (index, newpaw) => {
    // let newpawslist = [...pawsList];
    // newpawslist[pawsList.length - 1 - index] = newpaw;
    const newPaws = pawsList.map((paw) => {
      if (paw.id == index) {
        return { id: paw.id, name: newpaw.name, purpose: newpaw.purpose, value: newpaw.value };
      }
      return paw;
    });
    setPawsList(newPaws);
  };

  const updateValue = (index, newvalue) => {
    const newPaws = pawsList.map((paw) => {
      if (paw.id == index) {
        return { id: paw.id, name: paw.name, purpose: paw.purpose, value: newvalue };
      }
      return paw;
    });
    setPawsList(newPaws);
  };

  const submit = () => {
    submitPaws(pawsList);
    setPawsList([
      {
        id: 0,
        name: '',
        purpose: '',
        value: 'No Value'
      }
    ]);
  };

  return (
    <>
      <div className={styles.container}>
        <div style={{ minHeight: '40%' }}></div>
        <div className={styles.addButton} onClick={addNewPaw}>
          <img src={require('../../assets/Icon.png')} className={styles.add}></img>
        </div>
        {pawsList.map((paw) => {
          return <AddPaw key={paw.id} paw={paw} updatePaw={updatePaw} updateValue={updateValue} />;
        })}
        <div style={{ minHeight: '40px' }}></div>
      </div>
      <div className={styles.submitButton} id="submit" onClick={submit}>
        Submit {pawsList.length} Paw{pawsList.length > 1 && 's'}
      </div>
    </>
  );
};

export default AddPawsList;
