import React from 'react';
import {View, StyleSheet} from 'react-native';
import SocialButton from '../Elements/SocialButton';

const SocialAuthButtons = ({
  onGooglePress,
  onApplePress,
}: {
  onGooglePress: () => void;
  onApplePress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <SocialButton
        src="google"
        onPress={onGooglePress}
        backgroundColor="#FFFFFF"
      />
      <View style={styles.space} />
      <SocialButton
        src="apple"
        onPress={onApplePress}
        backgroundColor="#FFFFFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 23,
  },
  space: {
    width: 18,
  },
});

export default SocialAuthButtons;
