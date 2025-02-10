import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../Assets/Images';

interface SocialButtonProps {
    src: keyof typeof images; // Only allow keys from the images object
    backgroundColor: string;  
    onPress: () => void;
  }

const SocialButton : React.FC<SocialButtonProps>= ({src, backgroundColor,onPress}) => {
  return (
    <TouchableOpacity
            style={[styles.button,{backgroundColor}]}
            onPress={onPress}
            activeOpacity={0.8}>
             <Image 
                 source={images[src]} 
                resizeMode="contain"  />
          </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 17,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
      flex: 1
     },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default SocialButton
