import { View, Text,TextInput,TouchableOpacity} from 'react-native'
import * as React from 'react';

//STYLE
import styles from './style'

//LIBRARY
import CheckBox from '@react-native-community/checkbox';

const PasswordHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security</Text>

      <View style={styles.inputContainer}>

        <TextInput 
        value={props.passwordValue}
        placeholder={props.placeholder}
        onChangeText={props.onChangePassword}
        style={styles.passwordInput}
        secureTextEntry={true}
        />

      <TextInput 
        value={props.confirmPasswordValue}
        placeholder={props.confirmPlaceholder}
        onChangeText={props.onChangeConfirmPassword}
        style={styles.passwordInput}
        secureTextEntry={true}
        />

      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox disabled={false}
        value={props.toggleCheckBoxValue}
        onValueChange={props.onChangeCheckBox}
        style={styles.checkbox}
        />
        <Text style={styles.checkboxTitle}>Remember Password</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goLogin}>
          <Text style={styles.btnTitle}>{props.changeText}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default PasswordHeader;