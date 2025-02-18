import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import ImagePicker from './ImagePicker';

type ImageUploaderViewProps ={
    style?: StyleProp<ViewStyle>;
}
const ImageUploaderView: React.FC<ImageUploaderViewProps> = ({style}) => {
  return (
    <View style = {[styles.container, style]}>
     <ImagePicker/>
    </View>
  )
}

export default ImageUploaderView

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 6,
        paddingVertical: 8
    }
})