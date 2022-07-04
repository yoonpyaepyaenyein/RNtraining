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
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    getData();
  }, []);

  const context = {
    auth,
    getAuth: value => {
      setAuth(value);
    },

    next,
    getNext: value => {
      setNext(value);
    },

    lang,
    changeLanguage: value => {
      setLang(value);
    },
  };

  const getData = () => {
    RNSecureKeyStore.get('@language').then(
      res => {
        setLang(res);
      },
      err => {
        console.log(err);
      },
    );

    RNSecureKeyStore.get('@token').then(
      res => {
        if (res) {
          console.log('res.....', res);
          setAuth(true);
          setTimeout(() => {
            setSplash(false);
          }, 2000);
        } else {
          setTimeout(() => {
            setSplash(false);
          });
          setAuth(false);
        }
      },
      err => {
        console.log(err);
        setTimeout(() => {
          setSplash(false);
        });
        setAuth(false);
      },
    );
  };

  if (splash) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome to our app</Text>
      </View>
    );
  } else if (auth) {
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
