import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
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
  passwordInput: {
    borderWidth: hp(0.2),
    width: wp(80),
    fontSize: hp(1.8),
    marginTop: hp(4),
    borderRadius: hp(1),
    paddingLeft: hp(2),
    borderColor: '#C3E0C3',
  },
  checkboxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: hp(15),
    marginTop: hp(2),
  },
  checkbox: {
    color: '#6B778A',
  },
  checkboxTitle: {
    color: '#6B778A',
    paddingLeft: hp(1.4),
  },
  btnContainer: {
    borderWidth: hp(0.2),
    borderColor: '#74B873',
    backgroundColor: '#74B873',
    width: wp(28),
    height: hp(6),
    borderRadius: hp(1.3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(6),
  },
  btnTitle: {
    fontSize: wp(3.8),
    color: '#FFFFFB',
  },
});

export default styles;
