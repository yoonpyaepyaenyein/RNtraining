import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: wp(100),
    height: hp(100),
  },
  titleContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(2.5),
    color: '#74B873',
    fontWeight: 'bold',
  },
});

export default styles;
