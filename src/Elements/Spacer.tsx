import { View } from 'react-native'
import React from 'react'

type SpacerProps = {
    height?: number;
  };

const Spacer: React.FC<SpacerProps> = ({ height = 10 }) => {
  return <View style={{ height }} />;
}

export default Spacer

