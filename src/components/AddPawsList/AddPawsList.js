import React, { useState, useEffect } from 'react';
import AddPaw from '../AddPaw/AddPaw';
import { useNavigate } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';

import styles from './AddPawsList.module.css';
import pawStyles from '../AddPaw/AddPaw.module.css';
import { getPaws, submitPaws } from '../../utils/api';

const AddPawsList = () => {
  const navigate = useNavigate();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = height/width >= 1
  const [pawsList, setPawsList] = useState([
    {
      id: 0,
      name: '',
      purpose: '',
      value: 'No Value'
    }
  ]);
  const [pawsNum, setPawsNum] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaws().then((paws) => {
      setPawsNum(paws.length);
      setLoading(false);
    });
  }, []);

  const addNewPaw = () => {
    let newList = [...pawsList];
    newList.unshift({
      id: pawsList[0].id + 1,
      name: '',
      purpose: '',
      value: 'No Value'
    });
    setPawsList(newList);
  };

  const updateName = (index, newName) => {
    const newPaws = pawsList.map((paw) => {
      if (paw.id == index) {
        return { id: paw.id, name: newName, purpose: paw.purpose, value: paw.value };
      }
      return paw;
    });
    setCanSubmit(true);
    setPawsList(newPaws);
  };

  const updateMessage = (index, newMessage) => {
    const newPaws = pawsList.map((paw) => {
      if (paw.id == index) {
        return { id: paw.id, name: paw.name, purpose: newMessage, value: paw.value };
      }
      return paw;
    });
    setCanSubmit(true);
    setPawsList(newPaws);
  };

  // const updatePaw = (index, newpaw) => {
  //   console.log(pawsList);
  //   const newPaws = pawsList.map((paw) => {
  //     console.log(paw);
  //     if (paw.id == index) {
  //       return { id: paw.id, name: newpaw.name, purpose: newpaw.purpose, value: newpaw.value };
  //     }
  //     return paw;
  //   });
  //   console.log(newPaws);
  // };

  const deletePaw = (index) => {
    let foundIndex = index;
    let newPaws = [...pawsList];
    for (let i = 0; i < pawsList.length; i++) {
      if (pawsList[i].id == index) {
        foundIndex = i;
      }
    }
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
    if (canSubmit) {
      submitPaws(pawsList);
      setPawsList([
        {
          id: 0,
          name: '',
          purpose: '',
          value: 'No Value'
        }
      ]);
      var editableName = document.getElementById(`name0`);
      editableName.value = 'Jacob';
      editableName.style.width = editableName.value.length + 'ch';
      editableName.className = pawStyles.editedInput;
      var editableMessage = document.getElementById(`message0`);
      editableMessage.value = 'doing shit';
      editableMessage.style.width = editableMessage.value.length + 'ch';
      editableMessage.className = pawStyles.editedInput;
      setCanSubmit(false);
    }
  };

  if (loading) {
    return <SyncLoader color="#0078E8" />;
  }

  return (
    <>
      <div className={isMobile ? styles.mobileNumPawsRow : styles.numPawsRow}>
        <img className={isMobile ? styles.mobilePaw : styles.paw} src={require('../../assets/paw.png')}></img>
        <div className={isMobile ? styles.mobileNumPaws : styles.numPaws}>{pawsNum}</div>
      </div>
      <div className={isMobile ? styles.mobileContainer : styles.container}>
        <div style={{ minHeight: '40%' }}></div>
        <div className={isMobile ? styles.mobileAddButton : styles.addButton} onClick={addNewPaw}>
          <img src={require('../../assets/Icon.png')} className={styles.add}></img>
        </div>
        {pawsList.map((paw) => {
          return (
            <AddPaw
              key={paw.id}
              paw={paw}
              currentName={paw.name}
              currentMessage={paw.purpose}
              currentValue={paw.value}
              listLength={pawsList.length}
              updateName={updateName}
              updateMessage={updateMessage}
              deletePaw={deletePaw}
              updateValue={updateValue}
              isMobile={isMobile}
            />
          );
        })}
        <div style={{ minHeight: '40px' }}></div>
      </div>
      <button
        className={isMobile ? styles.mobileSubmitButton : styles.submitButton}
        id="submit"
        disabled={!canSubmit}
        onClick={() => {
          navigate('/submitted', {
            state: { numPaws: pawsList.length, totalPaws: pawsNum + pawsList.length }
          }),
            submit();
        }}>
        Submit {pawsList.length} Paw{pawsList.length > 1 && 's'}
      </button>
    </>
  );
};

export default AddPawsList;
