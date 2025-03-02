import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackArrowIcon} from '../Assets/Svg';

type RayTextProps = {
  leftIcon?: React.ReactNode;
  text: string;
};

const RayText: React.FC<RayTextProps> = ({leftIcon, text}) => {
  return (
    <View style={styles.container}>
      {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
      <Text style = {styles.textStyle}>{text}</Text>
    </View>
  );
};

export default RayText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  icon: {
    marginRight: 8,
  },
  textStyle: {
    color: '#787878',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
