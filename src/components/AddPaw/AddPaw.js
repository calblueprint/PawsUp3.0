import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AddPaw.module.css';
import { Menu, Transition } from '@headlessui/react';

const AddPaw = (props) => {
  const { paw, updatePaw, updateValue } = props;
  const [blooper] = useState(paw.name);
  const [pawMessage] = useState(paw.purpose);
  const [value, setValue] = useState(paw.value);
  // randomize these default messages

  useEffect(() => {
    var editableName = document.getElementById('name');
    var editableMessage = document.getElementById('message');
    editableName.addEventListener('input', function () {
      console.log(editableName.textContent);
      updatePaw(paw.id, {
        name: editableName.textContent,
        purpose: editableMessage.textContent,
        value: value
      });
    });
    editableMessage.addEventListener('input', function () {
      console.log(editableMessage.textContent);
      updatePaw(paw.id, {
        name: editableName.textContent,
        purpose: editableMessage.textContent,
        value: value
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textLine}>
        <div className={styles.text}>Paws up to </div>
        <div className={styles.textSelectable} id="name" contentEditable>
          {blooper == '' ? 'Grace' : blooper}
        </div>
        <div className={styles.text}> for </div>
        <div className={styles.textSelectable} id="message" contentEditable>
          {pawMessage == '' ? 'for creating this concept!' : pawMessage}
        </div>
      </div>
      <Menu as="div" className={styles.menu}>
        <div>
          <Menu.Button className={styles.menuButton}>
            <img className={styles.caret} src={require('../../assets/caret.png')} />
            <div className={styles.menuButtonText}>{value}</div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className={styles.menuList}>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={active ? styles.activeTopMenuOption : styles.menuOption}
                  onClick={() => {
                    setValue('Mission First'), updateValue(paw.id, 'Mission First');
                  }}>
                  Mission First
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={active ? styles.activeMenuOption : styles.menuOption}
                  onClick={() => {
                    setValue('Perpetual Growth'), updateValue(paw.id, 'Perpetual Growth');
                  }}>
                  Perpetual Growth
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={active ? styles.activeMenuOption : styles.menuOption}
                  onClick={() => {
                    setValue('Cherish Each Other'), updateValue(paw.id, 'Cherish Each Other');
                  }}>
                  Cherish Each Other
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={active ? styles.activeMenuOption : styles.menuOption}
                  onClick={() => {
                    setValue('Always Innovate'), updateValue(paw.id, 'Always Innovate');
                  }}>
                  Always Innovate
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={active ? styles.activeBottomMenuOption : styles.menuOption}
                  onClick={() => {
                    setValue('Be Humble'), updateValue(paw.id, 'Be Humble');
                  }}>
                  Be Humble
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

AddPaw.propTypes = {
  paw: PropTypes.object,
  updatePaw: PropTypes.func,
  updateValue: PropTypes.func
};

export default AddPaw;
