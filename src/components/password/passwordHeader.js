import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

//STYLE
import styles from './style';

//LIBRARY
import CheckBox from '@react-native-community/checkbox';

//COMPONENT
import {useLocal} from '../../hook/useLocal';

const PasswordHeader = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{local.security}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={props.passwordValue}
          placeholder={local.passwordPlaceholder}
          onChangeText={props.onChangePassword}
          style={styles.passwordInput}
          secureTextEntry={true}
        />

        {props.securityOptions === 'Login' ? (
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={props.toggleCheckBoxValue}
              onValueChange={props.onChangeCheckBox}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxTitle}>{local.RememberPsw}</Text>
          </View>
        ) : null}

        {props.securityOptions === 'Register' ? (
          <TextInput
            value={props.confirmPasswordValue}
            placeholder={local.confirmPasswordPlaceholder}
            onChangeText={props.onChangeConfirmPassword}
            style={styles.passwordInput}
            secureTextEntry={true}
          />
        ) : null}
      </View>

      <View style={styles.btnContainer}>
        {props.securityOptions === 'Login' ? (
          <TouchableOpacity onPress={props.logInAction}>
            <Text style={styles.btnTitle}>{local.login}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={props.registerAction}>
            <Text style={styles.btnTitle}>{local.register}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PasswordHeader;

// <TouchableOpacity onPress={props.goDashboard}>
//           <Text style={styles.btnTitle}>{props.securityOptions === 'Login' ? 'Login' : 'Register'}</Text>
//         </TouchableOpacity>
