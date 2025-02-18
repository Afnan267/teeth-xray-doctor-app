import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, PanResponder, Dimensions} from 'react-native';
import {runOnJS} from 'react-native-reanimated';

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

const MyCustomSlider: React.FC<CustomSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
}) => {
  const [value, setValue] = useState<number>(min);
  const [sliderWidth, setSliderWidth] = useState<number>(200); // Default width before measurement
  const sliderRef = useRef<View | null>(null);

  const calculateValue = (x: number) => {
    const newValue =
      Math.round((((x - 20) / sliderWidth) * (max - min)) / step) * step + min;
    return Math.min(Math.max(newValue, min), max);
  };

  const updateValue = (newValue: number) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newValue = calculateValue(gestureState.moveX);
      runOnJS(updateValue)(newValue); // ✅ Run state update on JS thread
    },
    onPanResponderRelease: (evt, gestureState) => {
      const newValue = calculateValue(gestureState.moveX);
      runOnJS(updateValue)(newValue); // ✅ Run state update on JS thread
    },
  });

  const sliderPosition = ((value - min) / (max - min)) * sliderWidth;

  return (

    <View style={styles.container}>
    <View
      style={styles.sliderTrack}
      ref={sliderRef}
      {...panResponder.panHandlers}
      onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)} // ✅ Dynamically update width
    >
      {/* Progress track with dynamic width */}
      <View
        style={[
          styles.progressTrack,
          { width: sliderPosition }, // Dynamically update progress width
        ]}
      />
      
      {/* Thumb */}
      <View style={[styles.sliderThumb, { left: sliderPosition-6 }]} />
    </View>
    {/* <Text style={styles.valueText}>{value}</Text> */}
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20, // Parent padding
  },
  sliderTrack: {
    height: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    // position: 'relative',
    width: '100%', // Allow dynamic width
  },

  progressTrack: {
    height: 10,
    backgroundColor: '#007AFF', // Progress track color (blue)
    borderRadius: 5,
    position: 'absolute',
    left: 0,
  },
  sliderThumb: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -4,
   },
  valueText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },

});

export default MyCustomSlider;
