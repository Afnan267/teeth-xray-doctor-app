import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

 interface InputBoxProps {
    placeholder?: string;  
    value: string;         
    onChangeText: (text: string) => void;  
  }

const InputBox : React.FC<InputBoxProps>= ({placeholder, value, onChangeText}) => {
  return (
    <View style = {styles.container}>
     <TextInput
             placeholder={placeholder}
             value={value}
             onChangeText={onChangeText}
            placeholderTextColor="#787878"
             style = {styles.input}
           />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical : 19,
        backgroundColor: '#ffffff',
        borderRadius: 17,
    
    },
    input: {
        fontSize: 15,              
        color: '#000000',          
        fontWeight: '400',
        fontFamily: 'Poppins-Regular'    
        },
    
  });

export default InputBox

 