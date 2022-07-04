import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// SECURE-KEY-STORE
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

//COMPONENT
import LoginHeader from '../../components/login/loginHeader';
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';
import styles from './Style';
import AlertModal from '../../components/alert/alertModal';

const Login = ({navigation}) => {
  const local = useLocal();

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('Login');
  const [showModal, setShowModal] = useState(false);

  const {next, getNext, lang, changeLanguage} = useContext(AuthContext);

  const toggleHandler = value => {
    if (title === 'Login') {
      setTitle('Register');
    } else {
      setTitle('Login');
    }
  };

  const nextHandler = () => {
    if (title === 'Login') {
      getNext(title);
      navigation.navigate('Password', {email: email});
      // console.log('next>>>',next)
    } else {
      getNext('Register');
      navigation.navigate('Password', {email: email});
    }
  };

  const languageHandler = value => {
    setShowModal(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => languageHandler(true)}>
          {lang === 'en' ? (
            <Text style={{color: '#74B873'}}>English</Text>
          ) : (
            <Text style={{color: '#74B873'}}>Myanmar</Text>
          )}
        </TouchableOpacity>
      </View>

      <LoginHeader
        emailValue={email}
        onChangeEmail={value => setEmail(value)}
        goSecurity={nextHandler}
        handleToggle={toggleHandler}
        action={title}
      />

      {/* Modal */}
      {showModal && <AlertModal closeModal={value => languageHandler(value)} />}
    </View>
  );
};

export default Login;
