import {View, Text, Image} from 'react-native';
import React from 'react';

//STYLE
import styles from './style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@assets/images/splash.jpg')}
          style={styles.userImage}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome To Our App</Text>
      </View>
    </View>
  );
};

export default Splash;
