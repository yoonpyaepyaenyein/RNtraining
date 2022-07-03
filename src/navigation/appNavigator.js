import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//API
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

//COMPONENT
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import DashboardStack from './stack/DashboardStack';

const appNavigator = () => {
  const [next, setNext] = useState('Login');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const context = {
    auth,
    next,
    getNext: value => {
      setNext(value);
    },
    getAuth: value => {
      setAuth(value);
    },
  };

  const getData = () => {
    RNSecureKeyStore.get('@user.data').then(
      res => {
        if (res) {
          console.log('res.....', res);
          setAuth(true);
        } else {
          setAuth(false);
        }
      },
      err => {
        console.log(err);
        setAuth(false);
      },
    );
  };

  if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default appNavigator;
