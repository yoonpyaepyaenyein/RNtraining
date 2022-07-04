import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(127,127, 127, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  modalContainer: {
    width: wp(65),
    height: hp(15),
    backgroundColor: '#fff',
    borderRadius: hp(0.3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: hp(1),
  },
  checkbox: {
    margin: hp(1.3),
  },
});

export default styles;
