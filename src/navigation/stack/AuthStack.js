import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//COMPONENT
import LoginScreen from '../../pages/auth/Login';
import PasswordScreen from '../../pages/password/Password';
import DashboardScreen from '../../pages/dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Password" component={PasswordScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack