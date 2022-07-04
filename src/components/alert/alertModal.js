import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

//STYLE
import styles from './style';

import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
//COMPONENT
import {AuthContext} from '../../context/context';

const alertModal = props => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggleBtnTwo, setToggleBtnTwo] = useState(false);

  const {lang, changeLanguage} = useContext(AuthContext);

  const checkboxHandler = () => {
    setToggleBtn(!toggleBtn);
    props.closeModal(false);
    changeLanguage('en');

    RNSecureKeyStore.set('@language', 'en', {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        // console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  };

  const anotherCheckboxHandler = () => {
    setToggleBtnTwo(!toggleBtnTwo);
    props.closeModal(false);
    changeLanguage('mm');

    RNSecureKeyStore.set('@language', 'mm', {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <CheckBox
          disabled={false}
          value={toggleBtn}
          onValueChange={checkboxHandler}
          style={styles.checkbox}
        />
        <Text style={styles.title}>English</Text>

        <CheckBox
          disabled={false}
          value={toggleBtnTwo}
          onValueChange={anotherCheckboxHandler}
          style={styles.checkbox}
        />
        <Text>Myanmar</Text>
      </View>
    </View>
  );
};

export default alertModal;
