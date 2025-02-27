import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Button: {
    marginTop: 44,
  },
  SocialButton: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InputBoxFirst: {
    marginTop: 66,
  },
  InputBox: {
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 33,
    flex: 1,
    backgroundColor: '#f9f9ff',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTitle: {
    color: '#787878',
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Poppins-Bold',
    marginBottom: 9,
    marginTop: 109,
  },
  nameSubTitle: {
    color: '#787878',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  logInTitle: {
    color: '#178CF7',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  termsAndConditions: {
    color: '#787878',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 31,
  },
  orText: {
    color: '#787878',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 10,
    marginTop: 31,
  },
  radioButtonSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  horizontalSpace: {
    width: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 4,
  },
});

export default styles;