
import React , {useState} from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native'


//STYLE
import styles from './style'

//LIBRARY
import CheckBox from '@react-native-community/checkbox';

const PasswordHeader = (props) => {

    // console.log(props.securityOptions)
    return (

    <View style={styles.container}>

      <Text style={styles.title}>Security</Text>

      <View style={styles.inputContainer}>

        <TextInput 
        value={props.passwordValue}
        placeholder='Password.....'
        onChangeText={props.onChangePassword}
        style={styles.passwordInput}
        secureTextEntry={true}
        />


    {props.securityOptions === 'Login' ? 
        <View style={styles.checkboxContainer}>
        <CheckBox disabled={false}
        value={props.toggleCheckBoxValue}
        onValueChange={props.onChangeCheckBox}
        style={styles.checkbox}
        />
        <Text style={styles.checkboxTitle}>Remember Password</Text>
      </View>
      : null
  }

  {props.securityOptions === 'Register' ? <TextInput 
        value={props.confirmPasswordValue}
        placeholder='Confirm Password.....'
        onChangeText={props.onChangeConfirmPassword}
        style={styles.passwordInput}
        secureTextEntry={true}
        />
      : null
      }
  </View>

      
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goDashboard}>
          <Text style={styles.btnTitle}>{props.securityOptions === 'Login' ? 'Login' : 'Register'}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default PasswordHeader;