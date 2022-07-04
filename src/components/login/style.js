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

    // backgroundColor: '#3D394A',
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    marginTop: hp(13),
    color: '#6B778A',
  },
  inputContainer: {
    marginVertical: hp(5),
  },
  emailInput: {
    borderWidth: hp(0.2),
    borderColor: '#ddd',
    width: wp(80),
    fontSize: hp(2),
    marginTop: hp(4),
    borderRadius: hp(1),
    paddingLeft: hp(2),
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: hp(0.2),
    borderColor: '#ddd',
    width: wp(25),
    height: hp(5),
    borderRadius: hp(0.3),
    marginTop: hp(4),
  },
  btnTitle: {
    fontSize: wp(4.5),
    color: '#6B778A',
  },
  questionContainer: {
    // backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(6),
  },
  questionTitle: {
    fontSize: hp(1.7),
  },
  regTitle: {
    color: 'red',
  },
  footer: {
    marginTop: hp(30),
  },
  name: {
    color: 'red',
  },
});
export default styles;
