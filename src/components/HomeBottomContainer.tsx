import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {images} from '../Assets/Images';
import { AIChatbotIcon } from '../Assets/Svg';

type HomeBottomContainerProps = {
  style?: StyleProp<ViewStyle>;
};

const HomeBottomContainer: React.FC<HomeBottomContainerProps> = ({style}) => {
  return (
    <View style={[style, styles.container]}>
      <Image
        source={images['teethImage']}
         style={{height: '50%', width: '100%', justifyContent: 'flex-end'}}
      />
       <View style={styles.chatbotContainer}>
        <AIChatbotIcon />
      </View>
    </View>
  );
};

export default HomeBottomContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1
  },
  chatbotContainer: {
    position: 'absolute',
    bottom: 23, // Adjust based on your preference
    left: 16
   },
});
