import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

//Style
import styles from './style';

const DashboardHeader = props => {
  const name = props.emailValue.substring(0, props.emailValue.lastIndexOf('@'));

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.userTitle}>{name}</Text>
        <Text style={styles.emailTitle}>{props.emailValue}</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logout} onPress={props.goBack}>
          <Text style={styles.logoutTitle}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;
