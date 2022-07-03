import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';

//STYLE
import styles from './style';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import DashboardHeader from '../../components/dashboard/dashboardHeader';
import {AuthContext} from '../../context/context';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  // console.log('email>>>',email)

  const {auth, getAuth} = useContext(AuthContext);

  useEffect(() => {
    getUserData();
  }, []);

  const goBackHandler = () => {
    getAuth(false);
  };

  const getUserData = async () => {
    await RNSecureKeyStore.get('@user.data').then(
      res => {
        setEmail(JSON.parse(res).email);
      },
      err => {
        console.log(err);
      },
    );
  };

  return (
    <View style={styles.container}>
      <DashboardHeader emailValue={email} goBack={goBackHandler} />
    </View>
  );
};

export default Dashboard;
