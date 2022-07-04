import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

//STYLES
import styles from './style';
import {useLocal} from '../../hook/useLocal';

const loginHeader = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.action === 'Login' ? local.login : local.register}
      </Text>

      <View style={styles.inputContainer}>
        {/* input section */}
        <TextInput
          value={props.emailValue}
          placeholder={local.emailPlaceholder}
          onChangeText={props.onChangeEmail}
          style={styles.emailInput}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goSecurity}>
          <Text style={styles.btnTitle}>{local.nextButton}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>
          {props.action === 'Login' ? local.registerText : local.loginText}
          <Text onPress={props.handleToggle} style={styles.regTitle}>
            {props.action === 'Login' ? local.register : local.login}
          </Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Developed by <Text style={styles.name}> @Yoon Pyae Pyae Nyein</Text>
        </Text>
      </View>
    </View>
  );
};

export default loginHeader;
