import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//COMPONENT
import LoginScreen from '../../pages/auth/Login';
import PasswordScreen from '../../pages/password/Password';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
