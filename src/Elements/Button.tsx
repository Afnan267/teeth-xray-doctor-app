import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string;  
    textColor: string;         
    onPress: () => void;
  }


const Button: React.FC<ButtonProps>= ({text, onPress, textColor }) => {
    return (
      <TouchableOpacity
        style={[styles.button]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({
    button: {
      paddingVertical: 19,
      paddingHorizontal: 20,
      borderRadius: 17,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      backgroundColor: '#178CF7'
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Button