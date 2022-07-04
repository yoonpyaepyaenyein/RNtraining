import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    marginTop: hp(16),
    color: '#74B873',
  },
  inputContainer: {
    marginVertical: hp(5),
  },
  emailInput: {
    borderWidth: hp(0.2),
    borderColor: '#C3E0C3',
    width: wp(80),
    fontSize: hp(1.8),
    marginTop: hp(4),
    borderRadius: hp(1),
    paddingLeft: hp(2),
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: hp(0.2),
    borderColor: '#74B873',
    backgroundColor: '#74B873',
    width: wp(28),
    height: hp(6),
    borderRadius: hp(1.3),
    marginTop: hp(4),
  },
  btnTitle: {
    fontSize: wp(3.8),
    color: '#FFFFFB',
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(6),
  },
  questionTitle: {
    fontSize: hp(1.7),
    color: '#B7B7BA',
  },
  regTitle: {
    color: '#74BB73',
  },
  footer: {
    marginTop: hp(30),
    backgroundColor: '#D9FFD9',
    width: wp(100),
    height: hp(40),
    alignItems: 'center',
  },
  footerTitle: {
    margin: hp(3),
    color: '#000',
  },
  name: {
    color: '#74B873',
  },
});
export default styles;
