import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UploaderIcon} from '../Assets/Svg';

const ImagePicker = () => {
  return (
    <View style={styles.dashedBox}>
      <View style={styles.uploaderIconStyle}>
        <UploaderIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uploaderIconStyle: {
    flex: 1,  // Ensures the uploaderIconStyle takes up the full space of dashedBox
    justifyContent: 'center',  // Centers vertically
    alignItems: 'center',  // Centers horizontally
  },
  dashedBox: {
    width: 89,
    height: 60,
    borderWidth: 2,
    borderColor: '#4183FF',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#DBEDFE',
    alignItems: 'center',
  },
});

export default ImagePicker;
