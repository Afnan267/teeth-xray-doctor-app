import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {DropDownIcon} from '../Assets/Svg';
 
type DropDownDisplayTitleProps = {
  title: string | null;
  textStyle: StyleProp<TextStyle>;
};

const DropDownDisplayTitle: React.FC<DropDownDisplayTitleProps> = ({title, textStyle}) => {
  return (
    <View style={styles.container}>
      <DropDownIcon />
      <Text style={[styles.textStyle, textStyle]}>{title ? title : 'Select an item'}</Text>
    </View>
  );
};

export default DropDownDisplayTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9F9FF',
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 8,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});
