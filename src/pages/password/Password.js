import React, {useState, useContext, useEffect} from 'react';
import {View, ToastAndroid} from 'react-native';

//COMPONENT
import PasswordHeader from '../../components/password/passwordHeader';
import {AuthContext} from '../../context/context';
import Login from '../auth/Login';

// SECURE-KEY-STORE
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

const Password = ({navigation, route}) => {
  const {email} = route.params;

  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const [security, setSecurity] = useState('Login');

  const {next, getNext, getAuth} = useContext(AuthContext);

  useEffect(() => {
    nextHandler();
  }, []);

  const nextHandler = () => {
    if (next === 'Login') {
      setSecurity('Login');
    } else {
      setSecurity('Register');
    }
  };

  const SignInHandler = () => {
    const token = '1234567890';

    RNSecureKeyStore.get('@user.data').then(
      res => {
        const getEmail = JSON.parse(res).email;
        const getPassword = JSON.parse(res).password;
        if (getEmail === email && getPassword === password) {
          getAuth(true);

          RNSecureKeyStore.set('@token', token, {
            accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
          }).then(
            res => {
              console.log(res);
            },
            err => {
              console.log(err);
            },
          );
        } else {
          ToastAndroid.show('Something Wrong!', ToastAndroid.SHORT);
        }
      },
      err => {
        // console.log(err);
      },
    );
  };

  const SignUpHandler = () => {
    const token = '1234567890';

    const userData = {
      email: email,
      password: password,
    };
    RNSecureKeyStore.set('@token', token, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
      },
      err => {
        // console.log(err);
      },
    );

    RNSecureKeyStore.set('@user.data', JSON.stringify(userData), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        if (email && confirmPassword === password) {
          getAuth(true);
        } else {
          ToastAndroid.show('Something Wrong', ToastAndroid.SHORT);
        }
      },
      err => {
        // console.log(err);
        getAuth(false);
      },
    );
  };

  return (
    <View>
      <PasswordHeader
        securityOptions={security}
        passwordValue={password}
        onChangePassword={value => setPassword(value)}
        confirmPasswordValue={confirmPassword}
        onChangeConfirmPassword={value => setConfirmPassword(value)}
        toggleCheckBoxValue={toggleCheckBox}
        onChangeCheckBox={value => setToggleCheckBox(value)}
        logInAction={SignInHandler}
        registerAction={SignUpHandler}
      />
    </View>
  );
};

export default Password;
