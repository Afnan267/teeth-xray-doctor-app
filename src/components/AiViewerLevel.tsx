import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

type AiViewerLevelProps = {
  title: string;
  value: string;
  textStyle: StyleProp<TextStyle>;
};
const AiViewerLevel: React.FC<AiViewerLevelProps> = ({
  title,
  value,
  textStyle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.titleText, textStyle]}>{title}</Text>
      <Text style={[styles.valueText, textStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
  titleText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  valueText: {
    fontSize: 12,
    color: '#787878',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});

export default AiViewerLevel;
