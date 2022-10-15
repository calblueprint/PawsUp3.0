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
      id: pawsList[0].id + 1,
      name: '',
      purpose: '',
      value: 'No Value'
    });
    console.log(newList);
    setPawsList(newList);
  };

  const updatePaw = (index, newpaw) => {
    const newPaws = pawsList.map((paw) => {
      if (paw.id == index) {
        return { id: paw.id, name: newpaw.name, purpose: newpaw.purpose, value: newpaw.value };
      }
      return paw;
    });
    setPawsList(newPaws);
  };

  const deletePaw = (index) => {
    console.log(pawsList);
    console.log(index);
    let foundIndex = index;
    let newPaws = [...pawsList];
    for (let i = 0; i < pawsList.length; i++) {
      if (pawsList[i].id == index) {
        foundIndex = i;
      }
    }
    // newPaws = pawsList.map((paw, i) => {
    //   if (paw.id == index) {
    //     foundIndex = i;
    //   }
    //   if (paw.id > index) {
    //     return { id: paw.id - 1, name: paw.name, purpose: paw.purpose, value: paw.value };
    //   }
    //   return paw;
    // });
    console.log(newPaws);
    console.log(foundIndex);
    newPaws.splice(foundIndex, 1);
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
        {pawsList.map((paw, index) => {
          return (
            <AddPaw
              key={paw.id}
              paw={paw}
              indexInList={index}
              updatePaw={updatePaw}
              deletePaw={deletePaw}
              updateValue={updateValue}
            />
          );
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
