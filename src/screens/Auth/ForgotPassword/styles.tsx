import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center', // Centers content vertically
    // alignItems: 'center', // Centers content horizontally
    backgroundColor: '#F9F9FF',
    paddingHorizontal: 32,
  },

  title: {
    color: '#787878',
    fontSize: 28,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  subTitle: {
    color: '#787878',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
export default styles;
