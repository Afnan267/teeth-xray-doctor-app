import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ErrorText = ({message}: {message: string}) => {
  return message ? <Text style={styles.error}>{message}</Text> : null;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 4,
  },
});

export default ErrorText;