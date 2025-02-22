import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import React from 'react';
import ImagePicker from './ImagePicker';
import {images} from '../Assets/Images';

type ImageUploaderViewProps = {
  style?: StyleProp<ViewStyle>;
};
const ImageUploaderView: React.FC<ImageUploaderViewProps> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <ImagePicker />
      <Image source={images['xRayImage1']} style={{marginStart: 4}} />
      <Image source={images['xRayImage2']} style={{marginStart: 4}} />
      <Image source={images['xRayImage3']} style={{marginStart: 4}} />
    </View>
  );
};

export default ImageUploaderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  imageContainer: {
    width: 89,
    height: 60,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
});
