import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';

//COMPONENT
import AuthStack from './stack/AuthStack'
import { AuthContext } from '../context/context';

const appNavigator = () => {
  const [next,setNext] = useState('Login');

  // useEffect(()=>{
  //   console.log(next)
  // },[])

  const context={
    next,
    getNext: value => {
      setNext(value);
    }
  }

  return (
    <AuthContext.Provider value={context}>
      <NavigationContainer>
        <AuthStack/>
     </NavigationContainer>
    </AuthContext.Provider>
   
  )
}

export default appNavigator;