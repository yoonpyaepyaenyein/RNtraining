import { View, Text } from 'react-native'
import React, { useState,useContext } from 'react'

//COMPONENT
import PasswordHeader from '../../components/password/passwordHeader'
import { AuthContext } from '../../context/context'
import Login from '../auth/Login'

const Password = ({navigation}) => {
    const [password,setPassword] = useState('');
    const [toggleCheckBox,setToggleCheckBox] = useState(false);
    const [changeText,setChangeText] = useState('Login');
    const [placeholder,setPlaceholder] = useState('Password....');
    const [confirmPlaceholder,setConfirmPlaceholder] = useState('Confirm Password....')


    const [security,setSecurity] = useState('Login');

    const {next,getNext} = useContext(AuthContext);


    // const securityHandler = value => {
    //     if(next === 'Login'){
    //         placeholder,

    //     }else{
    //         setPlaceholder(placeholder),
    //         confirmPlaceholder,
    //         setChangeText('Register')
    //     }
    // }
    

    return (
        <View>
            <PasswordHeader
            passwordValue={password}
            onChangePassword={value => setPassword(value)}
            placeholder={placeholder}

            confirmPlaceholder={confirmPlaceholder}

            toggleCheckBoxValue={toggleCheckBox}
            onChangeCheckBox={value => setToggleCheckBox(value)}


            changeText={changeText}

            goLogin={()=>navigation.goBack()}
            />
        </View>
    )
    }

export default Password