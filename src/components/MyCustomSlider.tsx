import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Dimensions } from 'react-native';
import { runOnJS } from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

const MyCustomSlider: React.FC<CustomSliderProps> = ({ min = 0, max = 100, step = 1, onValueChange }) => {
  const [value, setValue] = useState<number>(min);
  const sliderWidth = screenWidth - 40;
  const sliderRef = useRef<View | null>(null);

  const calculateValue = (x: number) => {
    const newValue = Math.round(((x - 20) / sliderWidth) * (max - min) / step) * step + min;
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
      <View style={styles.sliderTrack} ref={sliderRef} {...panResponder.panHandlers}>
        <View style={[styles.sliderThumb, { left: sliderPosition }]} />
      </View>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    position: 'relative',
  },
  sliderThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    position: 'absolute',
    top: -8,
  },
  valueText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MyCustomSlider;