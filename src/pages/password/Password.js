import React, { useState,useContext,useEffect } from 'react'
import { View, Text, Button,TouchableOpacity } from 'react-native'

//COMPONENT
import PasswordHeader from '../../components/password/passwordHeader'
import { AuthContext } from '../../context/context'
import Login from '../auth/Login'


// SECURE-KEY-STORE
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


const Password = ({ navigation, route}) => {
    const {email} = route.params;

    const [password,setPassword] = useState('');
    const [toggleCheckBox,setToggleCheckBox] = useState(false);
    const [confirmPassword,setConfirmPassword] = useState('');

    const [security,setSecurity] = useState('Login');

    const {next,getNext} = useContext(AuthContext);

    useEffect(()=>{
        nextHandler();
    },[])

  const nextHandler = () =>{
        if(next === 'Login'){
            setSecurity('Login');
        }
         else{
            setSecurity('Register');
        }
    }

    const dashboardHandler = value =>{

        const userData = {
            email:email,
            password:password
        };

            RNSecureKeyStore.set('@user.data',JSON.stringify(userData), {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
                .then((res) => {
                    navigation.navigate('Dashboard')
                    // console.log('userData>>>',userData)
                    // console.log('email>>>',email)
                    },(err) => {
                        console.log(err)
                    })
                }

    return (
        <View>
            <PasswordHeader
                securityOptions = {security}

                passwordValue={password}
                onChangePassword={value => setPassword(value)}

                confirmPasswordValue={confirmPassword}
                onChangeConfirmPassword={value => setConfirmPassword(value)}
         
                toggleCheckBoxValue={toggleCheckBox}
                onChangeCheckBox={value => setToggleCheckBox(value)}

                goDashboard={dashboardHandler}
            />
        </View>
    )
    }

export default Password