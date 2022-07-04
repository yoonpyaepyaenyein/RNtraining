import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  headerStyle: {
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    padding: 10,
    width: wp(100),
  },
});

export default styles;
