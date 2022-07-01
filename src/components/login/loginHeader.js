import { View, Text ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'

//STYLES
import styles from './style'

const loginHeader = (props) => {

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.titleHeader}</Text>

      <View style={styles.inputContainer}>
        {/* input section */}
        <TextInput value={props.emailValue}
        placeholder='Email.....'
        onChangeText={props.onChangeEmail}
        style={styles.emailInput}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goSecurity}>
          <Text style={styles.btnTitle}>Next</Text>
        </TouchableOpacity>
      </View>

    <View style={styles.questionContainer}>
      <Text style={styles.questionTitle}>{props.question} 
       <Text
        onPress={props.handleToggle} 
        style={styles.regTitle}>
        {props.questionHeader}
        </Text> 
      </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Developed by <Text style={styles.name}> @Yoon Pyae Pyae Nyein</Text></Text>
      </View>
    </View>
  )
}

export default loginHeader;