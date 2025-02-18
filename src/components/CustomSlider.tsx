import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = () => {
  const [value, setValue] = useState(50);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Value: {value.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor="#178CF7"  // Color for filled part
        maximumTrackTintColor="#D9D9D9"    // Color for unfilled part
        thumbTintColor="#178CF7"        // Color of the thumb
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    slider: {
      width: 300,
      backgroundColor: 'yellow',
      height: 10,
      borderRadius: 20,  // Rounded corners effect
      overflow:  'hidden',
    },
  });
  
  export default CustomSlider;