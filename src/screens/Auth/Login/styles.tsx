import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    signupContainer: {
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center', // Keeps both texts vertically aligned
      alignSelf: 'center',
    },
    Button: {
      marginTop: 44,
    },
    RememberMeText: {
      marginTop: 35,
      flexDirection: 'row', // Arrange items horizontally
      justifyContent: 'space-between', // Add space between buttons
    },
    SocialButton: {
      marginTop: 30,
      flexDirection: 'row', // Arrange items horizontally
      justifyContent: 'space-between', // Add space between buttons
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
    nameTitle: {
      color: '#787878',
      justifyContent: 'center',
      fontSize: 32,
      fontWeight: '500',
      fontFamily: 'Poppins-Bold',
      marginBottom: 9,
      marginTop: 109,
    },
    nameSubTitle: {
      color: '#787878',
      justifyContent: 'center',
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
    signupTitle: {
      color: '#787878',
      fontSize: 15,
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
    },
    termsAndConditions: {
      color: '#787878',
      justifyContent: 'center',
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Poppins-Regular',
      // marginTop: 31
    },
    orText: {
      color: '#787878',
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Poppins-Regular',
      marginTop: 11,
      textAlign: 'center',
      alignSelf: 'center',
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
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: 31
    },
    radioButtonSelected: {
      backgroundColor: '#007BFF',
      borderColor: '#007BFF',
    },
    horizontalSpace: {
      width: 18,
    },
  });
export default styles;
