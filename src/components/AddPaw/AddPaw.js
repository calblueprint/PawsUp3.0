import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AddPaw.module.css';
import { Menu, Transition } from '@headlessui/react';
import { getRandomPlaceholder } from '../../utils/placeholder';

const AddPaw = (props) => {
  const { paw, listLength, updateName, updateMessage, deletePaw, updateValue, isMobile } = props;
  const [value, setValue] = useState(paw.value);
  const [nameChanged, setNameChanged] = useState(false);
  const [messageChanged, setMessageChanged] = useState(false);
  const [hovering, setHovering] = useState(false);
  // randomize these default messages

  useEffect(() => {
    const placeholder = getRandomPlaceholder();

    var editableName = document.getElementById(`name${paw.id}`);
    editableName.value = placeholder.name;
    editableName.style.width = editableName.value.length + 'ch';

    var editableMessage = document.getElementById(`message${paw.id}`);
    editableMessage.value = placeholder.purpose;
    editableMessage.style.width = editableMessage.value.length + 'ch';

    editableName.addEventListener('input', function () {
      setNameChanged(true);
      this.style.width = this.value.length + 'ch';
    });
    editableMessage.addEventListener('input', function () {
      setMessageChanged(true);
      this.style.width = this.value.length + 'ch';
    });
    var pawHover = document.getElementById(paw.id);
    pawHover.addEventListener('mouseover', function () {
      setHovering(true);
    });
    pawHover.addEventListener('mouseout', function () {
      setHovering(false);
    });
  }, []);

  const renderIcon = () => {
    switch (value) {
      case 'Mission First':
        return <img className={isMobile ? styles.mobileIcon : styles.icon} src={require('../../assets/mission-first.png')} />;
      case 'Perpetual Growth':
        return <img className={isMobile ? styles.mobileIcon : styles.icon} src={require('../../assets/perpetual-growth.png')} />;
      case 'Cherish Each Other':
        return <img className={isMobile ? styles.mobileIcon : styles.icon} src={require('../../assets/cherish-each-other.png')} />;
      case 'Always Innovate':
        return <img className={isMobile ? styles.mobileIcon : styles.icon} src={require('../../assets/always-innovate.png')} />;
      case 'Be Humble':
        return <img className={isMobile ? styles.mobileIcon : styles.icon} src={require('../../assets/be-humble.png')} />;
      case 'No Value':
        return <img className={isMobile ? styles.mobileIcon : styles.icon} src={require('../../assets/no-value.png')} />;
    }
  };

  return (
    <div className={styles.container} id={paw.id}>
      <div className={styles.removeBox}>
        {hovering && listLength != 1 && (
          <img
            src={require('../../assets/remove.png')}
            className={styles.removeIcon}
            onClick={() => deletePaw(paw.id)}></img>
        )}
      </div>
      <div className={styles.pawColumn}>
        <div className={styles.textLine}>
          <div className={isMobile ? styles.mobileText : styles.text}>Paws up to </div>
          <input
            className={isMobile ? (nameChanged ? styles.mobileInput : styles.mobileEditedInput) : 
              (nameChanged ? styles.input : styles.editedInput)}
            id={`name${paw.id}`}
            onChange={(e) => updateName(paw.id, e.target.value)}
            onClick={() => console.log("click name")}></input>
          <div className={isMobile ? styles.mobileText : styles.text}> for </div>
          <input
            className={isMobile ? (messageChanged ? styles.mobileInput : styles.mobileEditedInput) : 
              (messageChanged ? styles.input : styles.editedInput)}
            id={`message${paw.id}`}
            onChange={(e) => updateMessage(paw.id, e.target.value)}
            onClick={() => console.log("click message")}></input>
        </div>
        <Menu as="div" className={styles.menu}>
          <div>
            <Menu.Button className={styles.menuButton}>
              <img className={styles.caret} src={require('../../assets/caret.png')} />
              <div className={isMobile ? styles.mobileMenuButtonText : styles.menuButtonText}>{value}</div>
              {renderIcon()}
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
            <Menu.Items className={isMobile ? styles.mobileMenuList : styles.menuList}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={active ? styles.activeTopMenuOption : styles.topMenuOption}
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
                    className={active ? styles.activeBottomMenuOption : styles.bottomMenuOption}
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
    </div>
  );
};

AddPaw.propTypes = {
  paw: PropTypes.object,
  listLength: PropTypes.number,
  updateName: PropTypes.func,
  updateMessage: PropTypes.func,
  deletePaw: PropTypes.func,
  updateValue: PropTypes.func,
  isMobile: PropTypes.bool
};

export default AddPaw;
